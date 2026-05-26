/* Botão de voz — usa Piper Cadu offline. Tem fallback pra Web Speech.
 * Só renderiza se `progresso.preferencias.vozLigada !== false` (ligada por
 * padrão). Usuário pode desligar em Configurações > Voz.
 */
import { Volume2, Loader2, Square } from 'lucide-react';
import { useVoiceSynthesis } from '../../hooks/useVoiceSynthesis.js';
import { useApp } from './AppContext.jsx';

export default function BotaoVoz({ texto, label, compacto = false }) {
  const { progresso } = useApp();
  const { speak, parar, carregando, falando, pronto, erro } = useVoiceSynthesis();

  if (!texto || !texto.trim()) return null;
  // Pref ligada por padrão; só esconde se explicitamente desligada
  if (progresso?.preferencias?.vozLigada === false) return null;

  const acionar = () => {
    if (falando) parar();
    else speak(texto);
  };

  const aria = falando ? 'Parar leitura'
    : carregando ? 'Carregando voz'
    : `Ouvir: ${label || texto.slice(0, 40)}`;

  return (
    <button
      type="button"
      className={`btn-voz ${falando ? 'falando' : ''} ${compacto ? 'compacto' : ''}`}
      onClick={acionar}
      disabled={carregando && !falando}
      aria-label={aria}
      title={erro === 'fallback' ? 'Usando voz do sistema (fallback)' : 'Ouvir com voz Cadu'}
    >
      {carregando && !falando ? <Loader2 size={16} className="ic-spin" />
        : falando ? <Square size={14} />
        : <Volume2 size={14} />}
      {!compacto && (
        <span>
          {falando ? 'Parar' : carregando ? 'Carregando…' : pronto ? 'Ouvir' : 'Ouvir'}
        </span>
      )}
    </button>
  );
}
