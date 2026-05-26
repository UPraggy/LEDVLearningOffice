/* Revisão — Spaced Repetition (SM-2 simples). */
import { useMemo, useState } from 'react';
import { Brain, RotateCw, ArrowLeft, Sparkles } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import GlobalVar from '../subComponents/GlobalVar.jsx';
import Som from '../subComponents/Som.jsx';
import { DECKS } from '../../data/decks-srs.js';
import '../../assets/css/SrsKata.css';

export default function Revisao() {
  const { progresso, atualizar } = useApp();
  const [deckId, setDeckId] = useState(null);
  const [idx, setIdx] = useState(0);
  const [flip, setFlip] = useState(false);

  const deck = deckId ? DECKS[deckId] : null;
  const cards = deck?.cards || [];
  const pendentes = useMemo(() => {
    if (!deck) return [];
    return GlobalVar.cartoesPraRevisarSRS(progresso, cards);
  }, [deck, progresso, cards]);

  function abrirDeck(id) { setDeckId(id); setIdx(0); setFlip(false); }
  function avaliar(qualidade) {
    if (!flip) return;          // só avalia depois de ver verso
    const card = pendentes[idx];
    if (!card) return;
    Som.tocar(qualidade >= 4 ? 'xp' : qualidade >= 3 ? 'success' : 'error');
    // SM-2 — atualiza estado via GlobalVar
    const novo = GlobalVar.atualizarSRS(progresso, card.id, qualidade);
    atualizar({ srs: novo.srs });
    setFlip(false);
    setIdx(i => i + 1);
  }

  // Tela de seleção de deck
  if (!deck) {
    return (
      <div className="screen">
        <div className="hello">
          <div>
            <div className="kicker">Memrise / Anki style — sem voz, só leitura</div>
            <h1 className="bighi">Revisão <em>espaçada</em>.</h1>
          </div>
        </div>
        <p className="lede">Cartões que você já viu voltam no momento certo pra fixar. Quanto melhor você lembra, mais demoram pra voltar.</p>

        <div className="srs-decks">
          {Object.entries(DECKS).map(([id, d]) => {
            const pend = GlobalVar.cartoesPraRevisarSRS(progresso, d.cards).length;
            return (
              <button key={id} className="srs-deck" data-c={d.cor} onClick={() => abrirDeck(id)}>
                <span className="kicker" style={{ margin: 0 }}>{d.cards.length} cartões</span>
                <h3>{d.nome}</h3>
                <div className="stat">
                  <span><strong>{pend}</strong><br />pra revisar hoje</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const card = pendentes[idx];

  // Tela de fim de sessão
  if (!card) {
    return (
      <div className="screen">
        <button className="back" onClick={() => setDeckId(null)}><ArrowLeft size={14} /> Decks</button>
        <div className="srs-done">
          <Sparkles size={48} color="var(--honey)" />
          <h2>Tudo revisado por hoje.</h2>
          <p>Os cartões vão voltar nos próximos dias — quanto melhor você lembrou, mais demora.</p>
          <button className="btn btn-primary" onClick={() => setDeckId(null)} style={{ marginTop: 16 }}>
            Voltar pros decks
          </button>
        </div>
      </div>
    );
  }

  const total = pendentes.length;
  const pct = Math.round((idx / total) * 100);

  return (
    <div className="screen">
      <button className="back" onClick={() => setDeckId(null)}><ArrowLeft size={14} /> Decks</button>
      <div className="hello">
        <div>
          <div className="kicker">{deck.nome}</div>
          <h1 className="bighi">Cartão <em>{idx + 1}</em> de {total}.</h1>
        </div>
      </div>

      <div className="srs-session">
        <div className="srs-progress">
          <span>{idx}/{total}</span>
          <div className="bar"><i style={{ width: `${pct}%` }} /></div>
        </div>

        <div className={`srs-card ${flip ? 'flip' : ''}`} onClick={() => { setFlip(f => !f); Som.tocar('flip'); }}>
          <div className="srs-card-inner">
            <div className="srs-face front">{card.frente}</div>
            <div className="srs-face back">{card.verso}</div>
          </div>
        </div>
        <div className="srs-tip">{flip ? 'Como foi lembrar?' : 'Clique pra virar'}</div>

        {flip && (
          <div className="srs-grade">
            <button className="errei" onClick={() => avaliar(0)}>Errei<small>volta amanhã</small></button>
            <button className="dificil" onClick={() => avaliar(3)}>Difícil<small>+6 dias</small></button>
            <button className="facil" onClick={() => avaliar(5)}>Fácil<small>+15 dias</small></button>
          </div>
        )}

        {!flip && (
          <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>
            <button className="btn btn-ghost btn-sm" onClick={() => { setFlip(false); setIdx(i => Math.max(0, i - 1)); }}>
              <RotateCw size={14} /> Anterior
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
