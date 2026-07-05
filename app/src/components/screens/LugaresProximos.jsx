import { useMemo, useState } from 'react';
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Cross,
  Landmark,
  Loader2,
  LocateFixed,
  MapPin,
  Navigation,
  School,
  Search,
  ShoppingBasket,
  SlidersHorizontal,
  Store,
  Utensils,
} from 'lucide-react';
import '../../assets/css/Screens.css';

const MAX_RADIUS_KM = 5;

const CATEGORIAS = [
  {
    id: 'saude',
    nome: 'Saúde',
    Icon: Cross,
    cor: 'sage',
    clauses: [
      ['amenity', '^(hospital|clinic|doctors|pharmacy)$'],
      ['healthcare', '.+'],
    ],
  },
  {
    id: 'mercado',
    nome: 'Mercado',
    Icon: ShoppingBasket,
    cor: 'coral',
    clauses: [
      ['shop', '^(supermarket|convenience|bakery|marketplace|butcher|greengrocer)$'],
    ],
  },
  {
    id: 'banco',
    nome: 'Banco/ATM',
    Icon: Landmark,
    cor: 'navy',
    clauses: [
      ['amenity', '^(bank|atm)$'],
    ],
  },
  {
    id: 'transporte',
    nome: 'Transporte',
    Icon: Navigation,
    cor: 'sky',
    clauses: [
      ['amenity', '^(bus_station|ferry_terminal)$'],
      ['railway', '^(station|halt|tram_stop|subway_entrance)$'],
      ['highway', '^(bus_stop)$'],
      ['public_transport', '^(platform|station)$'],
    ],
  },
  {
    id: 'servicos',
    nome: 'Serviços',
    Icon: Building2,
    cor: 'plum',
    clauses: [
      ['amenity', '^(post_office|police|townhall|community_centre|social_facility|courthouse)$'],
    ],
  },
  {
    id: 'educacao',
    nome: 'Educação',
    Icon: School,
    cor: 'honey',
    clauses: [
      ['amenity', '^(school|library|college|university)$'],
    ],
  },
  {
    id: 'comida',
    nome: 'Comida',
    Icon: Utensils,
    cor: 'marsala',
    clauses: [
      ['amenity', '^(restaurant|cafe|fast_food|bar|pub)$'],
    ],
  },
];

const TIPOS = {
  hospital: 'Hospital',
  clinic: 'Clínica',
  doctors: 'Consultório',
  pharmacy: 'Farmácia',
  supermarket: 'Supermercado',
  convenience: 'Mercadinho',
  bakery: 'Padaria',
  marketplace: 'Mercado',
  bank: 'Banco',
  atm: 'Caixa eletrônico',
  bus_station: 'Terminal',
  ferry_terminal: 'Terminal',
  station: 'Estação',
  halt: 'Parada',
  tram_stop: 'Parada',
  subway_entrance: 'Metro',
  bus_stop: 'Ponto de ônibus',
  platform: 'Ponto',
  post_office: 'Correios',
  police: 'Polícia',
  townhall: 'Prefeitura',
  community_centre: 'Centro comunitario',
  social_facility: 'Serviço social',
  courthouse: 'Fórum',
  school: 'Escola',
  library: 'Biblioteca',
  college: 'Faculdade',
  university: 'Universidade',
  restaurant: 'Restaurante',
  cafe: 'Café',
  fast_food: 'Lanche',
  bar: 'Bar',
  pub: 'Bar',
};

function norm(v) {
  return String(v || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function haversineKm(a, b) {
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLon = (b.lon - a.lon) * Math.PI / 180;
  const lat1 = a.lat * Math.PI / 180;
  const lat2 = b.lat * Math.PI / 180;
  const x = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function tagTipo(tags = {}) {
  return tags.amenity || tags.shop || tags.railway || tags.highway || tags.public_transport || tags.healthcare || 'local';
}

function endereco(tags = {}) {
  const rua = [tags['addr:street'], tags['addr:housenumber']].filter(Boolean).join(', ');
  const bairro = tags['addr:suburb'] || tags['addr:neighbourhood'] || tags['addr:quarter'];
  const cidade = tags['addr:city'] || tags['addr:town'] || tags['addr:village'] || tags['is_in:city'];
  return [rua, bairro, cidade].filter(Boolean).join(' - ');
}

function camposFiltro(tags = {}, tipo) {
  const bairro = [
    tags['addr:suburb'],
    tags['addr:neighbourhood'],
    tags['addr:quarter'],
    tags['is_in:suburb'],
  ];
  const cidade = [
    tags['addr:city'],
    tags['addr:town'],
    tags['addr:village'],
    tags['is_in:city'],
    tags['is_in'],
  ];
  const geral = [
    tags.name,
    tags.brand,
    tags.operator,
    tags['addr:street'],
    tags['addr:full'],
    tipo,
    ...bairro,
    ...cidade,
  ];
  return { bairro, cidade, geral };
}

function buildOverpassQuery({ lat, lon, radiusMeters, categorias }) {
  const blocos = categorias.flatMap((cat) => (
    cat.clauses.flatMap(([key, pattern]) => ([
      `node(around:${radiusMeters},${lat},${lon})["${key}"~"${pattern}",i];`,
      `way(around:${radiusMeters},${lat},${lon})["${key}"~"${pattern}",i];`,
      `relation(around:${radiusMeters},${lat},${lon})["${key}"~"${pattern}",i];`,
    ]))
  ));
  return `[out:json][timeout:25];(${blocos.join('')});out center tags 120;`;
}

function parsePlaces(data, origem, categoriasAtivas) {
  const vistos = new Set();
  const categoriasPorTag = new Map();
  categoriasAtivas.forEach((cat) => {
    cat.clauses.forEach(([key, pattern]) => {
      categoriasPorTag.set(`${key}:${pattern}`, cat);
    });
  });

  return (data.elements || [])
    .map((el) => {
      const lat = el.lat ?? el.center?.lat;
      const lon = el.lon ?? el.center?.lon;
      if (!lat || !lon) return null;
      const tags = el.tags || {};
      const tipo = tagTipo(tags);
      const key = `${norm(tags.name)}:${lat.toFixed(5)}:${lon.toFixed(5)}`;
      if (vistos.has(key)) return null;
      vistos.add(key);
      const categoria = categoriasAtivas.find((cat) => (
        cat.clauses.some(([tag, pattern]) => {
          const valor = tags[tag];
          return valor && new RegExp(pattern, 'i').test(valor);
        })
      ));
      return {
        id: `${el.type}-${el.id}`,
        nome: tags.name || tags.brand || TIPOS[tipo] || 'Local sem nome',
        tipo,
        categoriaId: categoria?.id || 'outros',
        categoriaNome: categoria?.nome || 'Outros',
        cor: categoria?.cor || 'navy',
        lat,
        lon,
        tags,
        endereco: endereco(tags),
        distanciaKm: haversineKm(origem, { lat, lon }),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.distanciaKm - b.distanciaKm);
}

function chipLabel(place) {
  return TIPOS[place.tipo] || place.categoriaNome || 'Local';
}

export default function LugaresProximos() {
  const [origem, setOrigem] = useState(null);
  const [raioKm, setRaioKm] = useState(4);
  const [categorias, setCategorias] = useState(['saude', 'mercado', 'banco']);
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [busca, setBusca] = useState('');
  const [lugares, setLugares] = useState([]);
  const [status, setStatus] = useState('idle');
  const [erro, setErro] = useState('');

  const categoriasAtivas = useMemo(
    () => CATEGORIAS.filter((c) => categorias.includes(c.id)),
    [categorias],
  );

  const filtrados = useMemo(() => {
    const b = norm(bairro);
    const c = norm(cidade);
    const q = norm(busca);
    return lugares.filter((lugar) => {
      if (lugar.distanciaKm > raioKm) return false;
      if (!categorias.includes(lugar.categoriaId)) return false;
      const campos = camposFiltro(lugar.tags, lugar.tipo);
      if (b && !campos.bairro.some((v) => norm(v).includes(b))) return false;
      if (c && !campos.cidade.some((v) => norm(v).includes(c))) return false;
      if (q && !campos.geral.some((v) => norm(v).includes(q))) return false;
      return true;
    });
  }, [bairro, busca, categorias, cidade, lugares, raioKm]);

  function toggleCategoria(id) {
    const next = categorias.includes(id)
      ? (categorias.length === 1 ? categorias : categorias.filter((x) => x !== id))
      : [...categorias, id];
    setCategorias(next);
    if (origem) buscarLugares(origem, { categoriasIds: next });
  }

  async function localizar() {
    setStatus('locating');
    setErro('');

    if (!navigator.geolocation) {
      setStatus('error');
      setErro('Este navegador não liberou geolocalização.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = {
          lat: Number(pos.coords.latitude.toFixed(7)),
          lon: Number(pos.coords.longitude.toFixed(7)),
        };
        setOrigem(coords);
        await buscarLugares(coords);
      },
      (err) => {
        setStatus('error');
        setErro(err.code === 1
          ? 'Permita a localização do navegador para buscar lugares perto de você.'
          : 'Não consegui obter sua localização agora.');
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 300000 },
    );
  }

  async function buscarLugares(coords = origem, opts = {}) {
    if (!coords) {
      await localizar();
      return;
    }
    setStatus('loading');
    setErro('');

    try {
      const raioBusca = opts.raio ?? raioKm;
      const categoriasBusca = opts.categoriasIds
        ? CATEGORIAS.filter((c) => opts.categoriasIds.includes(c.id))
        : categoriasAtivas;
      const radiusMeters = Math.min(MAX_RADIUS_KM, Math.max(1, raioBusca)) * 1000;
      const query = buildOverpassQuery({ lat: coords.lat, lon: coords.lon, radiusMeters, categorias: categoriasBusca });
      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Overpass ${res.status}`);
      const data = await res.json();
      setLugares(parsePlaces(data, coords, categoriasBusca));
      setStatus('done');
    } catch (e) {
      setStatus('error');
      setErro('Não consegui consultar os lugares agora. Tente de novo em alguns instantes.');
    }
  }

  const loading = status === 'locating' || status === 'loading';

  return (
    <main className="screen lugares-screen">
      <div className="hello lugares-hero">
        <div>
          <span className="kicker">Mapa rápido</span>
          <h1 className="bighi">Lugares <em>próximos</em>.</h1>
          <p className="lede">Ache pontos úteis perto de você com raio curto e filtros combinados.</p>
        </div>
        <button className="btn btn-primary btn-lg" onClick={localizar} disabled={loading}>
          {loading ? <Loader2 size={18} className="spin" /> : <LocateFixed size={18} />}
          {status === 'idle' ? 'Lugares próximos' : 'Atualizar perto de mim'}
        </button>
      </div>

      <section className="nearby-tools">
        <div className="nearby-panel">
          <div className="nearby-panel-head">
            <SlidersHorizontal size={18} />
            <strong>Filtros</strong>
          </div>

          <label className="near-field">
            <span>Raio</span>
            <select value={raioKm} onChange={(e) => {
              const next = Number(e.target.value);
              setRaioKm(next);
              if (origem) buscarLugares(origem, { raio: next });
            }}>
              {[1, 2, 3, 4, 5].map((km) => (
                <option key={km} value={km}>{km} km</option>
              ))}
            </select>
          </label>

          <div className="near-category-grid" aria-label="categorias">
            {CATEGORIAS.map(({ id, nome, Icon, cor }) => {
              const ativo = categorias.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  className={`near-cat ${ativo ? 'active' : ''}`}
                  data-cor={cor}
                  onClick={() => toggleCategoria(id)}
                >
                  <Icon size={16} />
                  <span>{nome}</span>
                  {ativo && <CheckCircle2 size={14} />}
                </button>
              );
            })}
          </div>

          <div className="near-form-grid">
            <label className="near-field">
              <span>Bairro</span>
              <input value={bairro} onChange={(e) => setBairro(e.target.value)} placeholder="Ex: Centro" />
            </label>
            <label className="near-field">
              <span>Cidade</span>
              <input value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Ex: São Paulo" />
            </label>
            <label className="near-field near-search">
              <span>Buscar</span>
              <div>
                <Search size={16} />
                <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="nome, rua ou tipo" />
              </div>
            </label>
          </div>
        </div>

        <div className="nearby-summary">
          <MapPin size={22} />
          <strong>{origem ? `${filtrados.length} lugares em até ${raioKm} km` : 'Use sua localização'}</strong>
          <span>{origem ? `${origem.lat}, ${origem.lon}` : 'O navegador vai pedir permissão.'}</span>
        </div>
      </section>

      {erro && (
        <div className="nearby-alert">
          <AlertCircle size={18} />
          <span>{erro}</span>
        </div>
      )}

      <section className="near-results">
        {loading && (
          <div className="near-empty">
            <Loader2 size={28} className="spin" />
            <strong>Buscando lugares próximos...</strong>
          </div>
        )}

        {!loading && status === 'idle' && (
          <div className="near-empty">
            <LocateFixed size={30} />
            <strong>Toque em Lugares próximos para começar.</strong>
          </div>
        )}

        {!loading && status !== 'idle' && filtrados.length === 0 && !erro && (
          <div className="near-empty">
            <MapPin size={30} />
            <strong>Nenhum lugar encontrado com estes filtros.</strong>
          </div>
        )}

        {!loading && filtrados.map((lugar) => (
          <article key={lugar.id} className="near-result">
            <div className="near-pin" data-cor={lugar.cor}>
              <MapPin size={20} />
            </div>
            <div className="near-main">
              <div className="near-title-row">
                <h3>{lugar.nome}</h3>
                <span>{lugar.distanciaKm.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} km</span>
              </div>
              <div className="near-meta">
                <span className="chip">{chipLabel(lugar)}</span>
                <span>{lugar.endereco || 'Endereço não informado no mapa'}</span>
              </div>
            </div>
            <a
              className="btn btn-ghost btn-sm"
              href={`https://www.google.com/maps/search/?api=1&query=${lugar.lat},${lugar.lon}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir rota
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
