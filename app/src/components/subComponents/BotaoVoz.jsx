/* Botao de voz - usa Piper Cadu offline.
 * So renderiza se `progresso.preferencias.vozLigada !== false`.
 */
import { Volume2, Loader2, Square } from 'lucide-react';
import { useVoiceSynthesis } from '../../hooks/useVoiceSynthesis.js';
import { useApp } from './AppContext.jsx';

export default function BotaoVoz({ texto, label, compacto = false }) {
  const { progresso } = useApp();
  const { speak, parar, carregando, falando, pronto, erro } = useVoiceSynthesis();

  if (!texto || !texto.trim()) return null;
  if (progresso?.preferencias?.vozLigada === false) return null;

  const acionar = () => {
    if (falando) parar();
    else speak(texto);
  };

  const aria = falando ? 'Parar leitura'
    : carregando ? 'Carregando voz Cadu'
    : `Ouvir: ${label || texto.slice(0, 40)}`;

  return (
    <button
      type="button"
      className={`btn-voz ${falando ? 'falando' : ''} ${compacto ? 'compacto' : ''}`}
      onClick={acionar}
      disabled={carregando && !falando}
      aria-label={aria}
      title={erro ? 'Voz Cadu indisponivel. Tente baixar novamente em Configuracoes.' : 'Ouvir com voz Cadu'}
    >
      {carregando && !falando ? <Loader2 size={16} className="ic-spin" />
        : falando ? <Square size={14} />
        : <Volume2 size={14} />}
      {!compacto && (
        <span>
          {falando ? 'Parar' : carregando ? 'Carregando...' : pronto ? 'Ouvir' : 'Ouvir'}
        </span>
      )}
    </button>
  );
}
