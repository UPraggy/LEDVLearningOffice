/* =========================================================================
   IconeSom — ícone do toggle de som.
   - Ativo:  Volume2 com cor (var(--sage))
   - Mudo:   Volume2 sem cor (cinza) com barra `/` cortando em diagonal
   ========================================================================= */
import { Volume2 } from 'lucide-react';

export default function IconeSom({ ativo, size = 18 }) {
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size + 4,
        height: size + 4,
        color: ativo ? 'var(--sage, #6f8e6a)' : 'var(--ink-soft, #9b9b9b)',
        opacity: ativo ? 1 : 0.85,
        transition: 'color .15s ease, opacity .15s ease',
      }}
      aria-hidden="true"
    >
      <Volume2 size={size} strokeWidth={ativo ? 2.2 : 1.8} />
      {!ativo && (
        // Barra diagonal cortando o ícone (do canto sup. esq. ao inf. dir.)
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            width: size + 6,
            height: 2.5,
            background: 'currentColor',
            borderRadius: 2,
            pointerEvents: 'none',
            // contorno claro pra destacar sobre o ícone
            boxShadow: '0 0 0 1.5px var(--paper, #fff)',
          }}
        />
      )}
    </span>
  );
}
