/* =========================================================================
   avatares.js — sugestões de avatar (autoral). Cada preset é um emoji amigável
   sobre um gradiente. Leve, renderiza em qualquer aparelho e é acessível
   (cada um tem rótulo). O id ('p1'..) é o que fica salvo em user.avatar.
   ========================================================================= */
export const AVATARES = [
  { id: 'p1',  emoji: '🦊', rotulo: 'Raposa',     grad: 'linear-gradient(135deg,#F6B53C,#E25B3F)' },
  { id: 'p2',  emoji: '🐱', rotulo: 'Gato',       grad: 'linear-gradient(135deg,#7BAEDC,#4C6FB1)' },
  { id: 'p3',  emoji: '🐶', rotulo: 'Cachorro',   grad: 'linear-gradient(135deg,#E8A06A,#C9743C)' },
  { id: 'p4',  emoji: '🦉', rotulo: 'Coruja',     grad: 'linear-gradient(135deg,#9B8CCB,#5E4FA2)' },
  { id: 'p5',  emoji: '🐢', rotulo: 'Tartaruga',  grad: 'linear-gradient(135deg,#8FD0A6,#3F9E6B)' },
  { id: 'p6',  emoji: '🌻', rotulo: 'Girassol',   grad: 'linear-gradient(135deg,#FFD15C,#F6953C)' },
  { id: 'p7',  emoji: '🚀', rotulo: 'Foguete',    grad: 'linear-gradient(135deg,#6C7AE0,#3C2FA2)' },
  { id: 'p8',  emoji: '⭐', rotulo: 'Estrela',    grad: 'linear-gradient(135deg,#FFC24B,#E2913F)' },
  { id: 'p9',  emoji: '🎨', rotulo: 'Paleta',     grad: 'linear-gradient(135deg,#E879A6,#B14C7B)' },
  { id: 'p10', emoji: '📚', rotulo: 'Livros',     grad: 'linear-gradient(135deg,#6BB6A0,#3C8E78)' },
  { id: 'p11', emoji: '☕', rotulo: 'Café',       grad: 'linear-gradient(135deg,#C9966B,#8E5E3C)' },
  { id: 'p12', emoji: '🌈', rotulo: 'Arco-íris',  grad: 'linear-gradient(135deg,#7BAEDC,#E879A6)' },
];

export const AVATAR_POR_ID = Object.fromEntries(AVATARES.map(a => [a.id, a]));
