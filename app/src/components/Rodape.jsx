import { MarcaLockup } from './subComponents/Marca.jsx';

export default function Rodape() {
  return (
    <footer style={{
      width: '100%',
      borderTop: '1px solid var(--line)',
      marginTop: 'var(--s-9)',
      background: 'var(--paper-warm)',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'var(--s-8) var(--s-6)',
        display: 'flex', flexWrap: 'wrap',
        gap: 'var(--s-5)',
        alignItems: 'center', justifyContent: 'space-between',
        color: 'var(--ink-mute)',
      }}>
        <MarcaLockup pequeno />
        <div style={{
          fontFamily: 'var(--f-mono)',
          fontSize: 11,
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          color: 'var(--ink-soft)',
        }}>
          Escritório · guia de identidade · v 2.0
        </div>
      </div>
    </footer>
  );
}
