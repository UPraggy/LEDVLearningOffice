/* Marca: xícara + livro aberto com vapor (lockup oficial do guia). */
export default function Marca({ tamanho = 32, cor = 'var(--honey-soft)' }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M5 13h17v8a5 5 0 0 1-5 5h-7a5 5 0 0 1-5-5v-8Z" stroke={cor} strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 15h2.5a2.5 2.5 0 0 1 0 5H22" stroke={cor} strokeWidth="2" />
      <path d="M4 28h19" stroke={cor} strokeWidth="2" strokeLinecap="round" />
      <path d="M11 9c-1-1.5-1-3 0-4.5M16 9c-1-1.5-1-3 0-4.5" stroke={cor} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MarcaLockup({ pequeno = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{
        width: pequeno ? 36 : 44, height: pequeno ? 36 : 44,
        background: 'var(--navy)', borderRadius: 12,
        display: 'grid', placeItems: 'center',
      }}>
        <Marca tamanho={pequeno ? 22 : 26} cor="var(--honey-soft)" />
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--f-display)', fontWeight: 600,
          fontSize: pequeno ? 18 : 22, letterSpacing: '-.01em', lineHeight: 1,
        }}>Escritório</div>
        {!pequeno && (
          <div style={{
            color: 'var(--ink-mute)', fontSize: 12,
            fontFamily: 'var(--f-mono)', letterSpacing: '.08em',
          }}>aprender · trabalhar · crescer</div>
        )}
      </div>
    </div>
  );
}
