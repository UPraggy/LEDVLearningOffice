/* =========================================================================
   AulaRica — renderiza a aula com blocos editoriais opcionais.
   100% retrocompatível: se o conteúdo só tem `gancho/conceito/chave/porque`,
   renderiza igual ao antigo. Se a aula tiver `blocos[]`, mostra cada um
   conforme o `tipo`:
     callout            { variante:'info|warn|ok|honey', titulo?, texto }
     do_dont            { titulo?, do:[...], dont:[...] }
     versus             { a:{titulo,pontos:[]}, b:{titulo,pontos:[]} }
     timeline           { passos:[{quando,titulo,texto}] }
     quote              { texto, autor? }
     stats              { items:[{num,lbl}] }
     atalho             { tecla:'Ctrl+C', desc }
     aula_steps         { items:[{titulo,texto}] }
     paragrafo          { texto }   ← parágrafo enriquecido
   Mantém também os campos legados: estrutura, exemplo, vocabulario.
   ========================================================================= */
import { Info, AlertTriangle, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import BotaoVoz from './subComponents/BotaoVoz.jsx';
import '../assets/css/AulaRica.css';

function Callout({ variante = 'info', titulo, texto }) {
  const Icon = variante === 'warn' ? AlertTriangle
    : variante === 'ok' ? CheckCircle2
    : variante === 'honey' ? Sparkles
    : Info;
  return (
    <div className={`callout ${variante}`}>
      <Icon size={20} className="ic" />
      <div>{titulo && <strong>{titulo}</strong>}<span>{texto}</span></div>
    </div>
  );
}

function DoDont({ titulo, do: yes = [], dont = [] }) {
  return (
    <div>
      {titulo && <h3>{titulo}</h3>}
      <div className="do-dont">
        <div className="col do">
          <h4>Faça assim</h4>
          <ul>{yes.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
        <div className="col dont">
          <h4>Evite isto</h4>
          <ul>{dont.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

function Versus({ a, b, titulo }) {
  return (
    <div>
      {titulo && <h3>{titulo}</h3>}
      <div className="versus">
        <div className="lado a">
          <h4>{a?.titulo}</h4>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
            {(a?.pontos || []).map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div className="vs">vs.</div>
        <div className="lado b">
          <h4>{b?.titulo}</h4>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
            {(b?.pontos || []).map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Timeline({ passos = [], titulo }) {
  return (
    <div>
      {titulo && <h3>{titulo}</h3>}
      <div className="timeline">
        {passos.map((p, i) => (
          <div key={i} className="timeline-step">
            {p.quando && <div className="quando"><Clock size={10} style={{ verticalAlign: 'text-bottom', marginRight: 4 }} />{p.quando}</div>}
            <h4>{p.titulo}</h4>
            <p>{p.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Quote({ texto, autor }) {
  return (
    <div className="aula-quote">
      <blockquote>{texto}</blockquote>
      {autor && <cite>— {autor}</cite>}
    </div>
  );
}

function Stats({ items = [] }) {
  return (
    <div className="stat-row">
      {items.map((it, i) => (
        <div key={i} className="stat-big">
          <div className="num">{it.num}</div>
          <div className="lbl">{it.lbl}</div>
        </div>
      ))}
    </div>
  );
}

function Atalho({ tecla, desc }) {
  const teclas = tecla.split('+');
  return (
    <div className="callout" style={{ background: 'var(--surface-2)', borderLeftColor: 'var(--navy)' }}>
      <span>
        {teclas.map((t, i) => (
          <span key={i}>
            <span className="kbd">{t}</span>
            {i < teclas.length - 1 && <span style={{ margin: '0 4px', color: 'var(--ink-mute)' }}>+</span>}
          </span>
        ))}
      </span>
      <span style={{ marginLeft: 8 }}>{desc}</span>
    </div>
  );
}

function AulaSteps({ items = [], titulo }) {
  return (
    <div>
      {titulo && <h3>{titulo}</h3>}
      <div className="aula-steps">
        {items.map((it, i) => (
          <div key={i} className="aula-step">
            <div className="num">{String(i + 1).padStart(2, '0')}</div>
            <h4>{it.titulo}</h4>
            <p>{it.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Paragrafo({ texto, titulo }) {
  return (
    <div>
      {titulo && <h3>{titulo}</h3>}
      <p style={{ fontSize: 17, lineHeight: 1.6 }}>{texto}</p>
    </div>
  );
}

const BLOCOS = {
  callout: Callout,
  do_dont: DoDont,
  versus: Versus,
  timeline: Timeline,
  quote: Quote,
  stats: Stats,
  atalho: Atalho,
  aula_steps: AulaSteps,
  paragrafo: Paragrafo,
};

export default function AulaRica({ aula, vertente }) {
  if (!aula) return null;

  // Reúne todo o texto da aula em uma string única (pra "ouvir aula inteira")
  const textoCompleto = [
    aula.gancho,
    aula.conceito?.titulo, aula.conceito?.texto,
    ...(aula.chave || []),
    aula.porque,
  ].filter(Boolean).join('. ');

  return (
    <div className="bloco anima-up aula-rica">
      {textoCompleto && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 'var(--s-2)' }}>
          <BotaoVoz texto={textoCompleto} label="Ouvir aula completa" />
        </div>
      )}

      {aula.gancho && (
        <div className="gancho" style={{ position: 'relative' }}>
          {aula.gancho}
        </div>
      )}

      {aula.conceito && (
        <div>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
            {aula.conceito.titulo}
            <BotaoVoz texto={`${aula.conceito.titulo}. ${aula.conceito.texto}`} compacto />
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink)', lineHeight: 1.6 }}>{aula.conceito.texto}</p>
        </div>
      )}

      {/* Blocos editoriais opcionais (nova arquitetura) */}
      {Array.isArray(aula.blocos) && aula.blocos.map((b, i) => {
        const C = BLOCOS[b.tipo];
        if (!C) return null;
        return <C key={i} {...b} />;
      })}

      {/* Estrutura legada — 4 partes em grid */}
      {aula.estrutura && (
        <div>
          <h3>{aula.estrutura.titulo}</h3>
          <div className="estrutura-grid">
            {aula.estrutura.partes.map((p, i) => (
              <div key={i} className="item">
                <span className="sim">{p.simbolo}</span>
                <span className="desc">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exemplo simulado */}
      {aula.exemplo && (
        <div>
          <h3>{vertente === 'celular' ? 'Conversa simulada' : 'Exemplo na tela'}</h3>
          <div className="exemplo-box">
            {aula.exemplo.titulo && <div className="titulo">{aula.exemplo.titulo}</div>}
            {aula.exemplo.celulas && (
              <table>
                <tbody>
                  {aula.exemplo.celulas.map((c, i) => (
                    <tr key={i}>
                      <td style={{ color: 'var(--honey-soft)', width: 60 }}>{c.ref}</td>
                      <td>{c.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {aula.exemplo.formula && <div><span style={{ opacity: .6 }}>→</span> <span className="formula">{aula.exemplo.formula}</span></div>}
            {aula.exemplo.resultado && <div><span style={{ opacity: .6 }}>=</span> <span className="resultado">{aula.exemplo.resultado}</span></div>}
            {aula.exemplo.comentario && <div className="comentario">{aula.exemplo.comentario}</div>}
          </div>
        </div>
      )}

      {aula.vocabulario && aula.vocabulario.length > 0 && (
        <div>
          <h3>Palavras novas</h3>
          <div className="vocab">
            {aula.vocabulario.map((v, i) => (
              <div key={i} className="item">
                <span className="palavra">{v.palavra}</span>
                <span className="def">{v.def}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {aula.chave && (
        <div>
          <h3>3 pontos pra lembrar</h3>
          <div className="chave">
            {aula.chave.map((c, i) => (
              <div key={i} className="item">
                <span className="n">{i + 1}</span>
                <span style={{ paddingTop: 2 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {aula.porque && (
        <div>
          <h3>Por que isso importa</h3>
          <div className="porque">{aula.porque}</div>
        </div>
      )}
    </div>
  );
}
