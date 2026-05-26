import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Type } from 'lucide-react';
import { MODULOS } from '../../data/estrutura.js';
import { useApp } from '../subComponents/AppContext.jsx';
import { MarcaLockup } from '../subComponents/Marca.jsx';
import Som from '../subComponents/Som.jsx';
import '../../assets/css/Onboarding.css';

export default function Onboarding() {
  const { atualizar, alternarFonte } = useApp();
  const navigate = useNavigate();
  const [passo, setPasso] = useState(0);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [moduloInicial, setModuloInicial] = useState('');

  const podeAvancar =
    (passo === 0 && nome.trim().length >= 2) ||
    (passo === 1 && idade.trim() !== '') ||
    (passo === 2 && moduloInicial !== '');

  const concluir = () => {
    atualizar({
      user: { nome: nome.trim(), idade, moduloInicial, streak: 1, ultimaVisita: new Date().toISOString().split('T')[0] },
      preferencias: { onboardingFeito: true, moduloAtual: moduloInicial },
    });
    Som.tocar('streak');
    navigate('/');
  };

  return (
    <div className="onb-bg">
      <div className="onb-card anima-up">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <MarcaLockup pequeno />
          <button className="btn btn-ghost btn-sm" onClick={alternarFonte} title="Aumentar fonte">
            <Type size={16} /> Fonte +
          </button>
        </div>

        <div className="onb-progress" aria-hidden="true">
          {[0,1,2].map(i => <span key={i} className={i <= passo ? 'on' : ''} />)}
        </div>

        {passo === 0 && (
          <div className="onb-step anima-up">
            <span className="kicker">Boas-vindas · passo 1 de 3</span>
            <h1>Como podemos te chamar<em>?</em></h1>
            <p className="hint">Vai aparecer no seu painel e nos seus troféus. Pode ser só o primeiro nome.</p>
            <input
              autoFocus
              className="onb-input"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && podeAvancar && setPasso(1)}
            />
          </div>
        )}

        {passo === 1 && (
          <div className="onb-step anima-up">
            <span className="kicker">Boas-vindas · passo 2 de 3</span>
            <h1>Qual é o seu <em>momento</em>?</h1>
            <p className="hint">Vamos ajustar o tom e o tamanho da letra pra você.</p>
            <div style={{ display: 'grid', gap: 'var(--s-2)' }}>
              {[
                { v: '10-17', l: 'Tô na escola, curioso(a)' },
                { v: '18-39', l: 'Trabalhando ou estudando' },
                { v: '40-59', l: 'Buscando crescer no mercado' },
                { v: '60+',   l: 'Quero entender essa tecnologia toda' },
              ].map(op => (
                <button key={op.v}
                  className={`onb-mod ${idade === op.v ? 'sel' : ''}`}
                  style={{ minHeight: 'auto' }}
                  onClick={() => setIdade(op.v)}>
                  <span className="nome">{op.l}</span>
                  <span className="sub">{op.v} anos</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {passo === 2 && (
          <div className="onb-step anima-up">
            <span className="kicker">Boas-vindas · passo 3 de 3</span>
            <h1>Por onde você quer <em>começar</em>?</h1>
            <p className="hint">É só o ponto de partida. Você pode mudar quando quiser.</p>
            <div className="onb-cards">
              {MODULOS.map(m => (
                <button key={m.id}
                  className={`onb-mod ${moduloInicial === m.id ? 'sel' : ''}`}
                  onClick={() => setModuloInicial(m.id)}>
                  <span className="dot" style={{ background: m.cor }} />
                  <span className="nome">{m.nome}</span>
                  <span className="sub">{m.subtitulo}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="onb-actions">
          {passo > 0 ? (
            <button className="btn btn-ghost" onClick={() => { setPasso(p => p - 1); Som.tocar('click'); }}>
              <ArrowLeft size={18} /> Voltar
            </button>
          ) : <span />}

          {passo < 2 ? (
            <button className="btn btn-primary" disabled={!podeAvancar}
              style={{ opacity: podeAvancar ? 1 : .5 }}
              onClick={() => podeAvancar && (setPasso(p => p + 1), Som.tocar('step'))}>
              Continuar <ArrowRight size={18} />
            </button>
          ) : (
            <button className="btn btn-primary btn-lg" disabled={!podeAvancar}
              style={{ opacity: podeAvancar ? 1 : .5 }}
              onClick={() => podeAvancar && concluir()}>
              Entrar no Escritório <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
