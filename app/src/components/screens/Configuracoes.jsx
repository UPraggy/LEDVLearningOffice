/* Configurações — fontStep / contraste / audiência / som / dados / reset. */
import { useEffect, useRef, useState } from 'react';
import { Type, Contrast, User, Volume2, Download, Upload, RefreshCw, Trash2, Bell, BellOff, Mic } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import Notifica from '../subComponents/Notifica.jsx';
import IconeSom from '../subComponents/IconeSom.jsx';
import { useVoiceSynthesis } from '../../hooks/useVoiceSynthesis.js';
import '../../assets/css/Screens.css';

export default function Configuracoes() {
  const { progresso, setPreferencia, alternarSom, resetar } = useApp();
  const p = progresso.preferencias || {};
  const fontStep = p.fontStep ?? (p.fonteGrande ? 1 : 0);
  const somAtivo = p.somAtivo !== false;
  const fileRef = useRef(null);
  const [msg, setMsg] = useState('');
  const voice = useVoiceSynthesis();
  const [permNotif, setPermNotif] = useState(Notifica.permissao());
  const [horaLemb, setHoraLemb] = useState(p.horaLembrete || '19:00');
  useEffect(() => { setPermNotif(Notifica.permissao()); }, []);
  async function ligarNotif() {
    const r = await Notifica.pedirPermissao();
    setPermNotif(r);
    if (r === 'granted') {
      Notifica.lembreteDiario({
        horaHHMM: horaLemb,
        titulo: 'Sua missão de hoje no Escritório',
        body: 'Mantém a ofensiva — 5 minutos já contam.',
        url: '/',
      });
      Notifica.mostrar('Notificações ligadas', 'Vou te lembrar todo dia às ' + horaLemb + '.');
      setPreferencia('notifLigado', true);
      setPreferencia('horaLembrete', horaLemb);
    }
  }
  function desligarNotif() {
    Notifica.cancelar('lembrete-diario');
    setPreferencia('notifLigado', false);
  }
  function reagendar(nova) {
    setHoraLemb(nova);
    setPreferencia('horaLembrete', nova);
    if (permNotif === 'granted') {
      Notifica.cancelar('lembrete-diario');
      Notifica.lembreteDiario({ horaHHMM: nova, titulo: 'Sua missão de hoje', body: 'Mantém a ofensiva.', url: '/' });
    }
  }

  const exportar = () => {
    const blob = new Blob([GlobalVar.exportarJSON()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `escritorio-progresso-${GlobalVar.diaAtualFunc()}.json`; a.click();
    URL.revokeObjectURL(url); setMsg('Arquivo salvo. Guarde num lugar seguro.');
  };
  const importar = (e) => {
    const f = e.target.files?.[0]; if (!f) return;
    const r = new FileReader();
    r.onload = (ev) => {
      try { GlobalVar.salvarProgresso(JSON.parse(ev.target.result)); setMsg('Importado. Atualizando...'); setTimeout(() => window.location.reload(), 800); }
      catch { setMsg('Arquivo inválido.'); }
    };
    r.readAsText(f);
  };

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">Personalize · acessibilidade</div>
          <h1 className="bighi">Configurações</h1>
        </div>
      </div>

      <section className="block">
        <div className="block-head"><h2>Leitura</h2></div>
        <div className="setting-card">
          <div className="sc-l"><Type size={20} /></div>
          <div className="sc-mid">
            <strong>Tamanho da fonte</strong>
            <p>O app inteiro fica mais legível. <strong>{['Pequeno (17px)', 'Normal (19px)', 'Grande (21px)'][fontStep]}</strong></p>
            <input type="range" min="0" max="2" step="1" value={fontStep}
              onChange={(e) => setPreferencia('fontStep', +e.target.value)} className="sl" />
          </div>
          <div />
        </div>
        <div className="setting-card">
          <div className="sc-l"><Contrast size={20} /></div>
          <div className="sc-mid">
            <strong>Alto contraste</strong>
            <p>Escurece o fundo e intensifica os textos. Útil em telas refletindo luz.</p>
          </div>
          <label className="switch">
            <input type="checkbox" checked={!!p.altoContraste}
              onChange={(e) => setPreferencia('altoContraste', e.target.checked)} />
            <span className="track" />
          </label>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Público</h2></div>
        <div className="setting-card">
          <div className="sc-l"><User size={20} /></div>
          <div className="sc-mid">
            <strong>Quem usa este aparelho?</strong>
            <p>{p.audiencia === 'jovem' ? 'Linguagem mais direta, gamificação visível.' : p.audiencia === 'adulto' ? 'Tom editorial, foco em utilidade.' : 'Mistura calorosa — padrão.'}</p>
            <div className="seg" style={{ marginTop: 8 }}>
              <button className={(p.audiencia || 'mix') === 'jovem' ? 'active' : ''} onClick={() => setPreferencia('audiencia', 'jovem')}>Jovem (10–)</button>
              <button className={(p.audiencia || 'mix') === 'adulto' ? 'active' : ''} onClick={() => setPreferencia('audiencia', 'adulto')}>Adulto (40+)</button>
              <button className={(p.audiencia || 'mix') === 'mix' ? 'active' : ''} onClick={() => setPreferencia('audiencia', 'mix')}>Mistura</button>
            </div>
          </div>
          <div />
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Som</h2></div>
        <div className="setting-card">
          <div className="sc-l"><IconeSom ativo={somAtivo} size={20} /></div>
          <div className="sc-mid">
            <strong>Efeitos sonoros</strong>
            <p>Toques curtos em acertos, erros e celebrações. Sem voz, sem música.</p>
          </div>
          <label className="switch">
            <input type="checkbox" checked={somAtivo} onChange={alternarSom} />
            <span className="track" />
          </label>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Voz</h2></div>
        <div className="setting-card">
          <div className="sc-l"><Mic size={20} /></div>
          <div className="sc-mid">
            <strong>Leitura em voz alta (Cadu PT-BR)</strong>
            <p>
              Voz neural sintetizada no seu próprio aparelho — funciona offline. Primeiro uso
              baixa ~60 MB (cacheado pra sempre). Aparece um botão "Ouvir" nas aulas e mensagens.
              {' '}{p.vozLigada !== false ? 'Atualmente ligada.' : 'Atualmente desligada — botões "Ouvir" estão ocultos.'}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8, alignItems: 'center' }}>
              {p.vozLigada !== false && voice.pronto && (
                <button className="btn btn-ghost btn-sm" onClick={() => voice.speak('Olá! Sou a Cadu. Já estou pronta para ler suas aulas.')}>
                  <Volume2 size={14} /> Testar voz
                </button>
              )}
              {p.vozLigada !== false && !voice.pronto && (
                <button className="btn btn-primary btn-sm" disabled={voice.carregando} onClick={voice.preload}>
                  {voice.carregando ? <><RefreshCw size={14} className="ic-spin" /> Baixando ~60 MB…</> : <><Mic size={14} /> Baixar voz agora</>}
                </button>
              )}
              {voice.erro && (
                <span style={{ fontSize: 12, color: 'var(--coral-deep)' }}>Modelo Cadu nao carregou. Tente baixar a voz novamente.</span>
              )}
            </div>
          </div>
          <label className="switch" title={p.vozLigada !== false ? 'Desligar voz' : 'Ligar voz'}>
            <input type="checkbox" checked={p.vozLigada !== false}
              onChange={(e) => setPreferencia('vozLigada', e.target.checked)} />
            <span className="track" />
          </label>
        </div>
        {p.vozLigada !== false && (
          <div className="setting-card" style={{ marginTop: 8 }}>
            <div className="sc-l"><Volume2 size={20} /></div>
            <div className="sc-mid">
              <strong>Tocar aula automaticamente</strong>
              <p>Quando você entrar numa missão, a aula começa a ser lida sozinha — pra você poder se concentrar no que está vendo. Pode pausar a qualquer momento no botão "Parar".</p>
            </div>
            <label className="switch" title={p.vozAutoPlay !== false ? 'Desligar auto-play' : 'Ligar auto-play'}>
              <input type="checkbox" checked={p.vozAutoPlay !== false}
                onChange={(e) => setPreferencia('vozAutoPlay', e.target.checked)} />
              <span className="track" />
            </label>
          </div>
        )}
      </section>

      <section className="block">
        <div className="block-head"><h2>Notificações</h2></div>
        <div className="setting-card">
          <div className="sc-l">{permNotif === 'granted' && p.notifLigado ? <Bell size={20} /> : <BellOff size={20} />}</div>
          <div className="sc-mid">
            <strong>Lembrete diário</strong>
            <p>
              {permNotif === 'denied' ? 'Permissão negada no navegador — habilite manualmente nas configurações do site.'
                : permNotif === 'granted' && p.notifLigado
                ? `Você recebe um toque às ${horaLemb}, mesmo se a aba estiver fechada (no celular instalado como app).`
                : 'Toque na barra do celular avisando da missão do dia. Funciona com o app instalado (PWA).'}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8, alignItems: 'center' }}>
              {permNotif === 'granted' && p.notifLigado ? (
                <>
                  <input type="time" value={horaLemb} onChange={(e) => reagendar(e.target.value)}
                    style={{ padding: '6px 10px', fontFamily: 'var(--f-mono)', fontSize: 13, border: '1px solid var(--line)', borderRadius: 8, background: 'var(--paper)' }} />
                  <button className="btn btn-ghost btn-sm" onClick={desligarNotif}><BellOff size={14} /> Desligar</button>
                </>
              ) : (
                <button className="btn btn-primary btn-sm" onClick={ligarNotif} disabled={permNotif === 'denied'}>
                  <Bell size={14} /> Ligar notificações
                </button>
              )}
            </div>
          </div>
          <div />
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Seus dados</h2></div>
        <div className="setting-card">
          <div className="sc-l"><Download size={20} /></div>
          <div className="sc-mid">
            <strong>Exportar progresso</strong>
            <p>Levar pra outro aparelho, fazer backup. Salva como <code>.json</code>.</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
              <button className="btn btn-ghost btn-sm" onClick={exportar}><Download size={14} /> Exportar</button>
              <input ref={fileRef} type="file" accept="application/json" onChange={importar} style={{ display: 'none' }} />
              <button className="btn btn-ghost btn-sm" onClick={() => fileRef.current?.click()}>
                <Upload size={14} /> Importar
              </button>
            </div>
            {msg && <p style={{ color: 'var(--sage)', fontSize: 13, marginTop: 8 }}>{msg}</p>}
          </div>
          <div />
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2 style={{ color: 'var(--coral-deep)' }}>Zona de risco</h2></div>
        <div className="setting-card" style={{ borderColor: 'rgba(226,91,63,.3)' }}>
          <div className="sc-l" style={{ background: 'rgba(226,91,63,.08)', color: 'var(--coral-deep)' }}><Trash2 size={20} /></div>
          <div className="sc-mid">
            <strong style={{ color: 'var(--coral-deep)' }}>Apagar todo o progresso</strong>
            <p>Não tem volta. XP, ofensiva, troféus, diário, atividade — tudo zera.</p>
            <button className="btn btn-ghost btn-sm" style={{ borderColor: 'var(--coral)', color: 'var(--coral-deep)', marginTop: 8 }}
              onClick={() => {
                if (confirm('Tem certeza? Vai apagar TUDO. Sem volta.')) {
                  resetar(); window.location.href = '/bem-vindo';
                }
              }}>
              <RefreshCw size={14} /> Apagar tudo
            </button>
          </div>
          <div />
        </div>
      </section>
    </div>
  );
}
