import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, BookOpen, Hammer, Target, CheckCircle2, Trophy, Gamepad2 } from 'lucide-react';
import TopMenu from '../TopMenu.jsx';
import Rodape from '../Rodape.jsx';
import Icone from '../subComponents/Icone.jsx';
import Interacoes from '../Interacoes.jsx';
import AulaRica from '../AulaRica.jsx';
import Som from '../subComponents/Som.jsx';
import TrofeuIcone from '../subComponents/TrofeuIcone.jsx';
import '../../assets/css/Trofeus.css';
import { TRILHAS, MISSOES, TROFEUS } from '../../data/estrutura.js';
import { useApp } from '../subComponents/AppContext.jsx';
import { getConteudo } from '../../data/conteudo/index.js';
import '../../assets/css/Missao.css';

function Aula({ aula, vertente }) {
  return <AulaRica aula={aula} vertente={vertente} />;
}

function Pratica({ pratica }) {
  // Checklist interativo: cada passo pode ser marcado conforme o aluno faz
  const total = (pratica.passos || []).length;
  const [feitos, setFeitos] = useState(() => new Set());
  const pct = total ? Math.round(feitos.size / total * 100) : 0;
  const toggle = (i) => setFeitos(prev => {
    const c = new Set(prev);
    if (c.has(i)) c.delete(i); else c.add(i);
    return c;
  });

  return (
    <div className="bloco anima-up">
      <h2>Mão na massa</h2>
      <p style={{ color: 'var(--ink-soft)', marginBottom: 'var(--s-4)' }}>{pratica.instrucao}</p>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--s-3)',
        padding: 'var(--s-3) var(--s-4)', background: 'var(--paper-warm)',
        borderRadius: 'var(--r-md)', marginBottom: 'var(--s-5)',
      }}>
        <div style={{ flex: 1 }}>
          <div className="progress"><span style={{ width: `${pct}%`, background: 'var(--sage)' }} /></div>
        </div>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--ink-soft)', minWidth: 80, textAlign: 'right' }}>
          {feitos.size}/{total} feitos
        </span>
      </div>

      <div className="passos">
        {(pratica.passos || []).map((p, i) => {
          const txt = typeof p === 'string' ? p : (p.texto || p);
          const feito = feitos.has(i);
          return (
            <div key={i} className="passo"
              style={{ cursor: 'pointer', opacity: feito ? .55 : 1 }}
              onClick={() => toggle(i)}>
              <span className="n" style={{
                background: feito ? 'var(--sage)' : 'var(--coral)',
                textDecoration: feito ? 'none' : 'none',
              }}>{feito ? '✓' : (i + 1)}</span>
              <span className="txt" style={{
                textDecoration: feito ? 'line-through' : 'none',
                color: feito ? 'var(--ink-mute)' : 'var(--ink)',
              }}>{txt}</span>
            </div>
          );
        })}
      </div>

      {pct === 100 && (
        <div className="callout ok" style={{ marginTop: 'var(--s-5)' }}>
          <CheckCircle2 size={20} />
          <div><strong>Mão treinada.</strong> Quando estiver pronto, vá pro Desafio.</div>
        </div>
      )}
    </div>
  );
}

function Desafio({ desafio, trilhaId, missaoId }) {
  // Upload de evidência: foto/print salvo no localStorage como dataURL.
  // Aceita 1 arquivo só por missão.
  const chaveEv = `escritorio-evidencia-${trilhaId}-${missaoId}`;
  const [evidencia, setEvidencia] = useState(() => {
    try { return localStorage.getItem(chaveEv); } catch { return null; }
  });

  const onArquivo = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) {
      alert('Arquivo grande demais (máx 3MB). Tente uma foto menor.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        localStorage.setItem(chaveEv, ev.target.result);
        setEvidencia(ev.target.result);
      } catch (err) {
        alert('Não foi possível salvar a imagem (memória cheia?). Funcionou no celular?');
      }
    };
    reader.readAsDataURL(f);
  };

  const remover = () => {
    localStorage.removeItem(chaveEv);
    setEvidencia(null);
  };

  return (
    <div className="bloco anima-up">
      <h2>Agora sozinho</h2>
      <p style={{ fontSize: 17 }}>{desafio.cenario}</p>
      <div className="desafio-box">
        <strong>O que entregar:</strong>
        <div className="req">
          {(desafio.requisitos || []).map((r, i) => (
            <div key={i} className="item">{r}</div>
          ))}
        </div>
        {desafio.dica && <div className="dica">💡 {desafio.dica}</div>}
      </div>

      {/* Upload de evidência (opcional, salvo localmente) */}
      <div style={{
        marginTop: 'var(--s-5)',
        padding: 'var(--s-5)',
        background: 'var(--surface-2)',
        border: '1px dashed var(--line-strong)',
        borderRadius: 'var(--r-md)',
        display: 'flex', flexDirection: 'column', gap: 'var(--s-3)',
      }}>
        <strong style={{ fontFamily: 'var(--f-display)', fontSize: 17 }}>Mostre o que fez (opcional)</strong>
        <p style={{ color: 'var(--ink-soft)', fontSize: 14, margin: 0 }}>
          Tire um print ou foto da sua entrega. Fica salvo neste aparelho — vira parte do seu portfólio.
        </p>
        {evidencia ? (
          <>
            <img src={evidencia} alt="evidência do desafio"
              style={{ maxWidth: '100%', maxHeight: 320, borderRadius: 'var(--r-sm)', border: '1px solid var(--line)' }} />
            <div style={{ display: 'flex', gap: 'var(--s-2)' }}>
              <button className="btn btn-ghost btn-sm" onClick={remover}>Remover</button>
              <label className="btn btn-ghost btn-sm" style={{ cursor: 'pointer' }}>
                Trocar
                <input type="file" accept="image/*" onChange={onArquivo} style={{ display: 'none' }} />
              </label>
            </div>
          </>
        ) : (
          <label className="btn btn-primary" style={{ alignSelf: 'flex-start', cursor: 'pointer' }}>
            <Trophy size={16} /> Anexar foto/print da entrega
            <input type="file" accept="image/*" onChange={onArquivo} style={{ display: 'none' }} />
          </label>
        )}
      </div>
    </div>
  );
}

function Validacao({ itens, marcados, onToggle }) {
  return (
    <div className="bloco anima-up">
      <h2>Confirme antes de fechar</h2>
      <p style={{ color: 'var(--ink-soft)', marginBottom: 'var(--s-5)' }}>
        Marque o que você de fato fez. Esta é a hora de honestidade — você só ganha XP de verdade se a missão foi feita.
      </p>
      <div className="validacao">
        {itens.map((v, i) => (
          <div key={i}
            className={`validacao-item item ${marcados[i] ? 'check' : ''}`}
            onClick={() => onToggle(i)}>
            <div className="box">{marcados[i] && <CheckCircle2 size={18} />}</div>
            <span style={{ fontSize: 15 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Missao({ ativaResp }) {
  const { trilhaId, missaoId } = useParams();
  const navigate = useNavigate();
  const { progresso, concluirMissao, bonusXP } = useApp();

  const trilha = TRILHAS.find(t => t.id === trilhaId);
  const meta = (MISSOES[trilhaId] || []).find(m => String(m.id) === String(missaoId));
  const conteudo = getConteudo(trilhaId, parseInt(missaoId, 10));

  const temInteracoes = Array.isArray(conteudo?.interacoes) && conteudo.interacoes.length > 0;
  const ETAPAS = temInteracoes
    ? [
        { id: 'aula',      titulo: 'Aula',      Icon: BookOpen },
        { id: 'jogar',     titulo: 'Jogar',     Icon: Gamepad2 },
        { id: 'pratica',   titulo: 'Prática',   Icon: Hammer },
        { id: 'desafio',   titulo: 'Desafio',   Icon: Target },
        { id: 'validacao', titulo: 'Validação', Icon: CheckCircle2 },
      ]
    : [
        { id: 'aula',      titulo: 'Aula',      Icon: BookOpen },
        { id: 'pratica',   titulo: 'Prática',   Icon: Hammer },
        { id: 'desafio',   titulo: 'Desafio',   Icon: Target },
        { id: 'validacao', titulo: 'Validação', Icon: CheckCircle2 },
      ];

  const [etapa, setEtapa] = useState(0);
  const [marcados, setMarcados] = useState([]);
  const [celebra, setCelebra] = useState(false);
  const [trofeusNovos, setTrofeusNovos] = useState([]);
  const idCompleto = `${trilhaId}-${missaoId}`;
  const jaFeita = progresso.missoesCompletas.includes(idCompleto);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [etapa]);

  const conteudoFinal = useMemo(() => {
    if (conteudo) return conteudo;
    // Fallback genérico quando o conteúdo rico ainda não foi escrito.
    return {
      aula: {
        gancho: meta?.desc,
        conceito: { titulo: meta?.titulo, texto: 'O conteúdo rico desta missão está em produção. Por enquanto, leia o título e o objetivo, e pratique o que faz sentido para você.' },
        chave: ['Volte aqui quando o conteúdo for publicado.', 'Você pode marcar como concluída se já dominar o tema.', 'A próxima missão te espera quando estiver pronto.'],
        porque: 'Esta trilha está em expansão. Sua paciência ajuda a entregar conteúdo de qualidade.',
      },
      pratica: { instrucao: 'Em produção.', passos: ['Aguarde o conteúdo completo.'] },
      desafio: { cenario: 'Em produção.', requisitos: ['Disponível em breve.'], dica: '' },
      validacao: ['Li o objetivo da missão', 'Estou pronto pra próxima'],
    };
  }, [conteudo, meta]);

  if (!trilha || !meta) return <Navigate to="/modulos" replace />;

  const itensVal = conteudoFinal.validacao || [];
  const todosMarcados = itensVal.length > 0 && itensVal.every((_, i) => marcados[i]);

  const finalizar = () => {
    // Sem toast — a tela de celebração já lista os troféus novos.
    const r = concluirMissao(trilhaId, parseInt(missaoId, 10), meta.xp);
    setTrofeusNovos(r.trofeusNovos || []);
    setCelebra(true);
    Som.tocar('complete');
    if (r.subiuNivel) setTimeout(() => Som.tocar('level'), 900);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const proximaMissao = () => {
    const ms = MISSOES[trilhaId] || [];
    const idx = ms.findIndex(m => String(m.id) === String(missaoId));
    if (idx >= 0 && idx + 1 < ms.length) return ms[idx + 1].id;
    return null;
  };

  if (celebra) {
    // Troféus novos vêm direto do retorno de concluirMissao (diff exato)
    const novos = trofeusNovos;
    const prox = proximaMissao();
    return (
      <>
        <TopMenu ativaResp={ativaResp} />
        <div className="containerPrincipal">
          <main className="wrap missao-wrap">
            <div className="cele anima-up">
              <div className="badge-big"><Trophy size={56} /></div>
              <span className="t-kicker">Missão concluída</span>
              <h2>Boa! +{meta.xp} XP.</h2>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '48ch', margin: '0 auto var(--s-6)' }}>
                {progresso.user.streak === 1 ? 'Você começou sua ofensiva. Volte amanhã pra manter o ritmo.' : `Você está há ${progresso.user.streak} dias seguidos. Vamos pelo próximo?`}
              </p>

              {novos.length > 0 && (
                <div style={{
                  maxWidth: 520, margin: '0 auto var(--s-6)',
                  padding: 'var(--s-5) var(--s-6)',
                  background: 'linear-gradient(135deg, rgba(212,149,69,.12), rgba(226,91,63,.08))',
                  border: '1px solid var(--honey)',
                  borderRadius: 'var(--r-lg)',
                  boxShadow: 'var(--sh-2)',
                  textAlign: 'left',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)', marginBottom: 'var(--s-3)' }}>
                    <Trophy size={20} color="var(--honey)" />
                    <span className="t-kicker" style={{ color: 'var(--honey)' }}>
                      {novos.length === 1 ? 'Troféu desbloqueado' : `${novos.length} troféus desbloqueados`}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
                    {novos.map(id => {
                      const t = TROFEUS.find(x => x.id === id);
                      if (!t) return null;
                      return (
                        <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)' }}>
                          <div className={`troph-medal mod-${t.mod || 'honey'}`} data-tier={t.tier}
                            style={{ width: 56, height: 56, flexShrink: 0 }}>
                            <TrofeuIcone nome={t.icon} size={28} />
                          </div>
                          <div>
                            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-.005em' }}>{t.nome}</div>
                            <div style={{ color: 'var(--ink-soft)', fontSize: 13 }}>{t.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: 'var(--s-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
                {prox ? (
                  <button className="btn btn-primary btn-lg" onClick={() => {
                    setCelebra(false); setEtapa(0); setMarcados([]);
                    navigate(`/missao/${trilhaId}/${prox}`);
                  }}>
                    Próxima missão <ArrowRight size={18} />
                  </button>
                ) : (
                  <Link className="btn btn-primary btn-lg" to={`/trilha/${trilhaId}`}>Voltar à trilha</Link>
                )}
                <Link to="/" className="btn btn-ghost btn-lg">Ir pro painel</Link>
              </div>
            </div>
          </main>
          <Rodape />
        </div>
      </>
    );
  }

  return (
    <>
      <TopMenu ativaResp={ativaResp} />
      <div className="containerPrincipal">
        <main className="wrap missao-wrap">
          <Link to={`/trilha/${trilhaId}`} className="btn btn-ghost btn-sm" style={{ marginBottom: 'var(--s-4)' }}>
            <ArrowLeft size={14} /> {trilha.nome}
          </Link>

          <header className="missao-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--r-md)', background: trilha.cor, color: '#fff', display: 'grid', placeItems: 'center' }}>
                <Icone nome={trilha.iconeNome} size={24} />
              </div>
              <span className="t-kicker">Missão {meta.id} de {(MISSOES[trilhaId] || []).length} · {trilha.nome}</span>
            </div>
            <h1>{meta.titulo}</h1>
            <p style={{ color: 'var(--ink-soft)', fontSize: 17 }}>{meta.desc}</p>
            <div style={{ display: 'flex', gap: 'var(--s-2)', flexWrap: 'wrap' }}>
              <span className="chip"><Clock size={11} /> {meta.tempo} min</span>
              <span className="chip chip-honey">+{meta.xp} XP</span>
              {jaFeita && <span className="chip chip-sage"><CheckCircle2 size={11} /> já concluída</span>}
            </div>
          </header>

          {/* Stepper */}
          <div className="stepper">
            {ETAPAS.map((e, i) => {
              const Ic = e.Icon;
              return (
                <div key={e.id}
                  className={`step ${etapa === i ? 'atual' : ''} ${etapa > i ? 'feita' : ''}`}
                  onClick={() => { setEtapa(i); Som.tocar('step'); }}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="lbl"><Ic size={14} style={{ verticalAlign: 'text-bottom', marginRight: 6 }} />{e.titulo}</span>
                </div>
              );
            })}
          </div>

          {/* Conteúdo da etapa */}
          {ETAPAS[etapa].id === 'aula' && <Aula aula={conteudoFinal.aula || {}} vertente={trilha.vertente} />}
          {ETAPAS[etapa].id === 'jogar' && (
            <div className="bloco anima-up">
              <h2>Vamos jogar?</h2>
              <p style={{ color: 'var(--ink-soft)' }}>
                Acerte os exercícios pra ganhar XP bônus. Erro não tira ponto — é só pra fixar.
              </p>
              <Interacoes interacoes={conteudoFinal.interacoes || []} onAcerto={(xp) => bonusXP(xp)} />
            </div>
          )}
          {ETAPAS[etapa].id === 'pratica' && <Pratica pratica={conteudoFinal.pratica || {}} />}
          {ETAPAS[etapa].id === 'desafio' && <Desafio desafio={conteudoFinal.desafio || {}} trilhaId={trilhaId} missaoId={missaoId} />}
          {ETAPAS[etapa].id === 'validacao' && (
            <Validacao
              itens={itensVal}
              marcados={marcados}
              onToggle={(i) => setMarcados(prev => { const c = [...prev]; c[i] = !c[i]; return c; })}
            />
          )}

          {/* Footer ações */}
          <div className="missao-foot">
            {etapa > 0 ? (
              <button className="btn btn-ghost" onClick={() => { setEtapa(e => e - 1); Som.tocar('click'); }}>
                <ArrowLeft size={16} /> Voltar
              </button>
            ) : <span />}
            {etapa < ETAPAS.length - 1 ? (
              <button className="btn btn-primary btn-lg" onClick={() => { setEtapa(e => e + 1); Som.tocar('step'); }}>
                Continuar <ArrowRight size={18} />
              </button>
            ) : (
              <button className="btn btn-primary btn-lg"
                disabled={!todosMarcados}
                style={{ opacity: todosMarcados ? 1 : .5 }}
                onClick={() => todosMarcados && finalizar()}>
                Concluir · +{meta.xp} XP
              </button>
            )}
          </div>
        </main>
        <Rodape />
      </div>
    </>
  );
}
