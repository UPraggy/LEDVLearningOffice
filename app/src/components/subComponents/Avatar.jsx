/* Avatar — renderiza o avatar do usuário em qualquer tamanho.
   Resolve 3 casos: 'foto' (upload → dataURL em chave própria),
   'p1'..'pN' (preset emoji + gradiente) ou vazio (iniciais do nome). */
import GlobalVar from './GlobalVar.jsx';
import { AVATAR_POR_ID } from '../../data/avatares.js';

export default function Avatar({ user = {}, size = 96, className = '', style = {} }) {
  const av = user.avatar || '';
  const base = {
    width: size, height: size, borderRadius: '50%',
    display: 'grid', placeItems: 'center', overflow: 'hidden',
    flexShrink: 0, ...style,
  };

  // Foto enviada pelo usuário
  if (av === 'foto') {
    const src = GlobalVar.getAvatarFoto();
    if (src) {
      return (
        <div className={className} style={base}>
          <img src={src} alt="Sua foto de perfil"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      );
    }
  }

  // Preset (emoji + gradiente)
  const preset = AVATAR_POR_ID[av];
  if (preset) {
    return (
      <div className={className} role="img" aria-label={`Avatar: ${preset.rotulo}`}
        style={{ ...base, background: preset.grad, fontSize: Math.round(size * 0.5), lineHeight: 1 }}>
        <span aria-hidden="true">{preset.emoji}</span>
      </div>
    );
  }

  // Fallback: iniciais sobre o gradiente padrão
  const inits = (user.nome || 'E').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div className={className} role="img" aria-label="Avatar com suas iniciais"
      style={{
        ...base, background: 'linear-gradient(135deg, var(--honey), var(--coral))',
        color: '#fff', fontFamily: 'var(--f-display)', fontWeight: 700,
        fontSize: Math.round(size * 0.42), lineHeight: 1,
      }}>
      <span aria-hidden="true">{inits}</span>
    </div>
  );
}
