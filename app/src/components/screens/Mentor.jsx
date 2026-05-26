/* Mentor — caixa de entrada do "Carlos Mendes" (mentor virtual). */
import { useState, useEffect } from 'react';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { useApp } from '../subComponents/AppContext.jsx';
import BotaoVoz from '../subComponents/BotaoVoz.jsx';
import '../../assets/css/Screens.css';

function tempoRel(ts) {
  const dif = Date.now() - ts;
  const dias = Math.floor(dif / 86400000);
  if (dias === 0) {
    const h = new Date(ts).getHours().toString().padStart(2, '0');
    const m = new Date(ts).getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
  }
  if (dias === 1) return 'ontem';
  return `${dias} dias`;
}

export default function Mentor() {
  const { progresso, marcarMentorLida } = useApp();
  const items = progresso.mentorInbox || [];
  const [openId, setOpenId] = useState(items[0]?.id || null);
  const item = items.find(i => i.id === openId);

  useEffect(() => {
    if (item?.status === 'new') marcarMentorLida(item.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  return (
    <div className="screen">
      <div className="hello">
        <div>
          <div className="kicker">Coordenador · Carlos Mendes</div>
          <h1 className="bighi">Caixa do <em>Mentor</em>.</h1>
        </div>
      </div>
      <p className="lede">Seu mentor virtual escreve aqui. Ele acompanha sua ofensiva e te empurra para a próxima missão.</p>

      <div className="mentor-grid">
        <div className="mentor-list">
          {items.length === 0 && (
            <div className="empty">
              <div className="empty-ic"><MessageSquare size={22} /></div>
              <h4>Sem mensagens</h4>
              <p>Conclua missões — o mentor manda dicas conforme seu progresso.</p>
            </div>
          )}
          {items.map(m => (
            <button key={m.id}
              className={`mentor-card mc-${m.status} ${openId === m.id ? 'open' : ''}`}
              onClick={() => setOpenId(m.id)}>
              <div className="mc-avatar" data-c={m.color}>CM</div>
              <div className="mc-body">
                <div className="mc-row">
                  <strong>{m.from}</strong>
                  <span className="mc-time">{tempoRel(m.ts)}</span>
                </div>
                <h5>{m.title}</h5>
                <p>{m.body}</p>
                <div className="mc-tags">
                  <span className="chip" data-c={m.color}>{m.tag}</span>
                  {m.status === 'new' && <span className="chip chip-coral">novo</span>}
                </div>
              </div>
            </button>
          ))}
        </div>

        {item && (
          <div className="mentor-detail">
            <div className="md-head">
              <div className="mc-avatar" data-c={item.color}>CM</div>
              <div>
                <strong>{item.from}</strong>
                <br /><span>{item.role} · {tempoRel(item.ts)}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <BotaoVoz texto={`${item.title}. ${item.body}`} compacto />
            </div>
            <p>{item.body}</p>
            <p>É comum ver pessoas pulando esse passo achando que já sabem. Lembra: o objetivo é fixar o reflexo, não só ler. Quando concluir, me responde por aqui contando como foi.</p>
            <div className="md-actions">
              <button className="btn btn-primary">Ir para a missão <ChevronRight size={16} /></button>
              <button className="btn btn-ghost">Responder</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
