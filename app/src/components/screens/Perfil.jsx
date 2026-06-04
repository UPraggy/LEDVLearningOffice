import { useRef, useState } from 'react';
import { Download, Upload, RefreshCw, Type, Trophy, Flame, Volume2, VolumeX, Camera, ImageUp } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import Avatar from '../subComponents/Avatar.jsx';
import { AVATARES } from '../../data/avatares.js';
import { MODULOS, TRILHAS, MISSOES, TROFEUS } from '../../data/estrutura.js';

/** Lê a imagem, reccorta no centro e reduz p/ 256px (JPEG) — mantém o
 *  dataURL pequeno (~20-40 KB) pra não estourar a quota do navegador. */
function processarFoto(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onerror = () => reject(new Error('leitura'));
    r.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('imagem'));
      img.onload = () => {
        const L = 256;
        const lado = Math.min(img.width, img.height);
        const sx = (img.width - lado) / 2;
        const sy = (img.height - lado) / 2;
        const cv = document.createElement('canvas');
        cv.width = L; cv.height = L;
        const ctx = cv.getContext('2d');
        ctx.drawImage(img, sx, sy, lado, lado, 0, 0, L, L);
        resolve(cv.toDataURL('image/jpeg', 0.85));
      };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  });
}

export default function Perfil({ ativaResp }) {
  const { progresso, alternarFonte, alternarSom, resetar, atualizar } = useApp();
  const somAtivo = progresso.preferencias?.somAtivo !== false;
  const { user } = progresso;
  const fileRef = useRef(null);
  const fotoRef = useRef(null);
  const [msg, setMsg] = useState('');
  const [msgAvatar, setMsgAvatar] = useState('');

  const escolherPreset = (id) => {
    atualizar({ user: { avatar: id } });
    GlobalVar.limparAvatarFoto();
    setMsgAvatar('Avatar atualizado.');
  };

  const enviarFoto = async (e) => {
    const f = e.target.files?.[0];
    e.target.value = '';
    if (!f) return;
    if (!f.type.startsWith('image/')) { setMsgAvatar('Escolha um arquivo de imagem (JPG ou PNG).'); return; }
    try {
      const dataURL = await processarFoto(f);
      if (!GlobalVar.setAvatarFoto(dataURL)) { setMsgAvatar('Não coube na memória do navegador. Tente uma foto menor.'); return; }
      atualizar({ user: { avatar: 'foto' } });
      setMsgAvatar('Foto salva neste aparelho.');
    } catch {
      setMsgAvatar('Não consegui ler essa imagem. Tente outra.');
    }
  };

  const info = GlobalVar.infoNivel(user.xp || 0);
  const total = Object.values(MISSOES).reduce((s, ms) => s + ms.length, 0);
  const feitas = progresso.missoesCompletas.length;

  const exportar = () => {
    const blob = new Blob([GlobalVar.exportarJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `escritorio-progresso-${GlobalVar.diaAtualFunc()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMsg('Arquivo salvo. Guarde num lugar seguro.');
  };

  const importar = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = (ev) => {
      try {
        const obj = JSON.parse(ev.target.result);
        GlobalVar.salvarProgresso(obj);
        setMsg('Progresso importado. Atualize a página para ver.');
        window.location.reload();
      } catch (err) {
        setMsg('Arquivo inválido. Confira se é o .json exportado.');
      }
    };
    r.readAsText(f);
  };

  return (
    <main className="screen">
          <header style={{ marginBottom: 'var(--s-7)', display: 'flex', alignItems: 'center', gap: 'var(--s-5)', flexWrap: 'wrap' }}>
            <Avatar user={user} size={96} style={{ boxShadow: 'var(--sh-2)' }} />
            <div style={{ flex: 1, minWidth: 240 }}>
              <span className="t-kicker">Bem-vindo de volta</span>
              <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', margin: 'var(--s-2) 0 var(--s-2)' }}>{user.nome || 'Aluno(a)'}</h1>
              <p style={{ color: 'var(--ink-soft)' }}>
                {GlobalVar.nomeNivel(info.nivel)} · {user.xp || 0} XP · {feitas}/{total} missões
              </p>
            </div>
          </header>

          <section className="grid grid-3" style={{ marginBottom: 'var(--s-7)' }}>
            <div className="panel">
              <span className="t-kicker">Nível</span>
              <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 24, marginTop: 'var(--s-2)' }}>
                {GlobalVar.nomeNivel(info.nivel)}
              </h3>
              <div className="progress" style={{ marginTop: 'var(--s-3)' }}><span style={{ width: `${info.pct}%` }} /></div>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--ink-mute)' }}>
                {info.faltam > 0 ? `${info.faltam} XP até subir` : 'Nível máximo!'}
              </span>
            </div>
            <div className="panel">
              <span className="t-kicker">Ofensiva</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)', marginTop: 'var(--s-2)' }}>
                <Flame size={28} color="var(--streak)" fill="var(--streak)" />
                <span style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 36, lineHeight: 1 }}>{user.streak || 0}</span>
              </div>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{user.escudos || 0} escudo(s) — protege 1 dia perdido</span>
            </div>
            <div className="panel">
              <span className="t-kicker">Troféus</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)', marginTop: 'var(--s-2)' }}>
                <Trophy size={28} color="var(--honey)" />
                <span style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 36, lineHeight: 1 }}>
                  {(progresso.trofeus || []).length}<span style={{ fontSize: 16, color: 'var(--ink-mute)' }}> / {TROFEUS.length}</span>
                </span>
              </div>
              <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Desbloqueados</span>
            </div>
          </section>

          <section className="panel" style={{ marginBottom: 'var(--s-5)' }}>
            <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 22, marginBottom: 'var(--s-2)' }}>Seu avatar</h3>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 'var(--s-4)' }}>
              Escolha uma figurinha ou use sua própria foto. Fica guardado só neste aparelho.
            </p>
            <div style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap', marginBottom: 'var(--s-4)' }}>
              {AVATARES.map(a => {
                const sel = user.avatar === a.id;
                return (
                  <button key={a.id} type="button" onClick={() => escolherPreset(a.id)}
                    aria-pressed={sel} aria-label={a.rotulo} title={a.rotulo}
                    style={{
                      width: 60, height: 60, borderRadius: '50%', background: a.grad,
                      fontSize: 30, lineHeight: 1, display: 'grid', placeItems: 'center',
                      cursor: 'pointer', padding: 0,
                      border: sel ? '3px solid var(--ink)' : '3px solid transparent',
                      boxShadow: sel ? 'var(--sh-2)' : 'var(--sh-1)',
                      outlineOffset: 2,
                    }}>
                    <span aria-hidden="true">{a.emoji}</span>
                  </button>
                );
              })}
            </div>
            <div style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap', alignItems: 'center' }}>
              <input ref={fotoRef} type="file" accept="image/*" onChange={enviarFoto} style={{ display: 'none' }} />
              <button className="btn btn-primary" onClick={() => fotoRef.current?.click()}>
                <ImageUp size={16} /> Enviar minha foto
              </button>
              {user.avatar && (
                <button className="btn btn-ghost" onClick={() => escolherPreset('')}>
                  <RefreshCw size={16} /> Voltar pras iniciais
                </button>
              )}
            </div>
            {msgAvatar && <p style={{ marginTop: 'var(--s-3)', color: 'var(--sage)', fontSize: 14 }}>{msgAvatar}</p>}
          </section>

          <section className="panel" style={{ marginBottom: 'var(--s-5)' }}>
            <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 22, marginBottom: 'var(--s-2)' }}>Acessibilidade</h3>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 'var(--s-4)' }}>
              Letra grande deixa tudo confortável de ler. Os sons reforçam acertos e celebrações —
              desligue quando estiver num ambiente em silêncio.
            </p>
            <div style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
              <button className="btn btn-ghost" onClick={alternarFonte}>
                <Type size={16} /> {progresso.preferencias.fonteGrande ? 'Voltar ao tamanho padrão' : 'Aumentar fonte'}
              </button>
              <button className="btn btn-ghost" onClick={alternarSom}>
                {somAtivo ? <Volume2 size={16} /> : <VolumeX size={16} />}
                {somAtivo ? 'Desligar sons' : 'Ligar sons'}
              </button>
            </div>
          </section>

          <section className="panel" style={{ marginBottom: 'var(--s-5)' }}>
            <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 22, marginBottom: 'var(--s-2)' }}>Levar pra outro aparelho</h3>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 'var(--s-4)' }}>
              Tudo é salvo neste aparelho. Para usar no celular e no computador, exporte aqui e importe lá.
            </p>
            <div style={{ display: 'flex', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={exportar}>
                <Download size={16} /> Exportar progresso (.json)
              </button>
              <input ref={fileRef} type="file" accept="application/json" onChange={importar} style={{ display: 'none' }} />
              <button className="btn btn-ghost" onClick={() => fileRef.current?.click()}>
                <Upload size={16} /> Importar progresso
              </button>
            </div>
            {msg && <p style={{ marginTop: 'var(--s-3)', color: 'var(--sage)', fontSize: 14 }}>{msg}</p>}
          </section>

          <section className="panel" style={{ borderColor: 'rgba(226,91,63,.3)' }}>
            <h3 style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 22, marginBottom: 'var(--s-2)', color: 'var(--coral-deep)' }}>Zona de risco</h3>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 'var(--s-4)' }}>
              Apagar todo o progresso. Não tem volta.
            </p>
            <button className="btn btn-ghost" style={{ borderColor: 'var(--coral)', color: 'var(--coral-deep)' }}
              onClick={() => {
                if (confirm('Tem certeza? Vai apagar XP, troféus, missões concluídas, ofensiva — tudo.')) {
                  resetar();
                  window.location.href = '/bem-vindo';
                }
              }}>
              <RefreshCw size={16} /> Apagar todo o progresso
            </button>
          </section>
        </main>
  );
}
