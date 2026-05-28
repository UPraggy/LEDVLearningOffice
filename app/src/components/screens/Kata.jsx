/* Kata diário — desafio rotativo determinístico (mesmo pra todos no dia, troca todo dia). */
import { useEffect, useMemo, useState } from 'react';
import { BookOpenCheck, Lightbulb, CheckCircle2, XCircle, Flame } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import Som from '../subComponents/Som.jsx';
import { KATAS } from '../../data/decks-srs.js';
import { filtrarPorNivel } from '../../data/daily-utils.js';
import '../../assets/css/SrsKata.css';

export default function Kata() {
  const { progresso, atualizar, bonusXP } = useApp();
  const [escolha, setEscolha] = useState(null);
  const [respondido, setRespondido] = useState(false);

  const katasNivel = useMemo(() => filtrarPorNivel(KATAS, progresso), [progresso]);
  const { kata, estado } = GlobalVar.kataDeHoje(progresso, katasNivel) || {};
  if (!kata) return <div className="screen"><p>Nenhum kata configurado.</p></div>;

  // Calcula sequência de katas resolvidos consecutivos
  const seqKata = (() => {
    let seq = 0;
    const ks = progresso.katas || {};
    const hoje = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(hoje); d.setDate(d.getDate() - i);
      const iso = d.toISOString().split('T')[0];
      if (ks[iso]?.resolvido) seq++; else break;
    }
    return seq;
  })();

  useEffect(() => {
    if (estado?.resolvido) { setRespondido(true); setEscolha(kata.resposta); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kata?.id]);

  function responder(i) {
    if (respondido) return;
    setEscolha(i);
    setRespondido(true);
    const acertou = i === kata.resposta;
    Som.tocar(acertou ? 'success' : 'error');
    const novo = GlobalVar.marcarKata(progresso, acertou);
    atualizar({ katas: novo.katas });
    if (acertou && !estado?.resolvido) bonusXP(25);
  }

  const acertou = escolha === kata.resposta;

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">Kata diário · {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}</div>
          <h1 className="bighi">Desafio <em>do dia</em>.</h1>
        </div>
        {seqKata > 0 && (
          <span className="kata-streak"><Flame size={12} fill="currentColor" /> {seqKata} dia(s) seguidos</span>
        )}
      </div>
      <p className="lede">Um problema novo a cada manhã. Não precisa de tutorial — só leitura e raciocínio. +25 XP por acerto.</p>

      <div className="kata-hero">
        <span className="kicker"><BookOpenCheck size={12} style={{ verticalAlign: '-2px', marginRight: 4 }} /> Kata</span>
        <h2>{kata.titulo}</h2>
        <div className="kata-cenario">{kata.cenario}</div>

        <div className="kata-opts">
          {kata.opcoes.map((op, i) => {
            let cls = '';
            if (respondido) {
              if (i === kata.resposta) cls = 'right';
              else if (i === escolha) cls = 'wrong';
            }
            return (
              <button key={i} className={`kata-opt ${cls}`} disabled={respondido && !cls} onClick={() => responder(i)}>
                <strong style={{ marginRight: 8, opacity: .6, fontFamily: 'var(--f-mono)' }}>{['A','B','C','D'][i]}</strong>
                {op}
                {respondido && i === kata.resposta && <CheckCircle2 size={16} style={{ marginLeft: 'auto' }} />}
                {respondido && i === escolha && i !== kata.resposta && <XCircle size={16} style={{ marginLeft: 'auto' }} />}
              </button>
            );
          })}
        </div>
      </div>

      {respondido && (
        <div className="kata-feedback">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            {acertou ? <CheckCircle2 size={20} color="var(--sage)" /> : <Lightbulb size={20} color="var(--honey)" />}
            <strong style={{ fontSize: 16 }}>
              {acertou ? 'Boa! +25 XP no bolso.' : 'Quase. Olha a explicação:'}
            </strong>
          </div>
          <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{kata.explicacao}</p>
          <p style={{ marginTop: 12, fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--ink-mute)', letterSpacing: '.06em' }}>
            Próximo kata: amanhã, mesmo horário.
          </p>
        </div>
      )}
    </div>
  );
}
