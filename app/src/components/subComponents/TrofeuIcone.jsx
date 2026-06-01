/* SVGs únicos por troféu — desenhados na mão, stroke 1.6, cantos arredondados. */

const I = {
  rocket: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c3 3 5 6 5 11 0 4-2 6-5 6s-5-2-5-6c0-5 2-8 5-11Z" />
      <circle cx="12" cy="10" r="2" fill="currentColor" />
      <path d="M7 14l-3 2 1 4 3-2M17 14l3 2-1 4-3-2" />
    </svg>
  ),
  flame: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c2 4 6 6 6 11a6 6 0 1 1-12 0c0-3 2-4 3-7 1.5 2 3 3 3 6 0-3 0-7 0-10Z" />
    </svg>
  ),
  spark: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M5 19l4-4" />
    </svg>
  ),
  campfire: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3c2 3 5 5 5 9a5 5 0 1 1-10 0c0-3 2-4 3-6 1.5 1.5 2 3 2 5 0-2 0-5 0-8Z" fill="currentColor" />
      <path d="M3 21h18M6 18l-2 3M18 18l2 3" strokeLinecap="round" />
    </svg>
  ),
  fire: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8 7 6 9 6 14a6 6 0 0 0 12 0c0-3-1-5-2-6 0 2-1 3-2 3 0-3 0-5-2-9Z" />
      <path d="M9 16c0-2 1.5-3 3-4 1.5 1 3 2 3 4a3 3 0 0 1-6 0Z" fill="#FFF" opacity=".3" />
    </svg>
  ),
  volcano: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M3 21h18L15 8h-6z" fill="currentColor" opacity=".25" />
      <path d="M3 21h18L15 8h-6L3 21Z" />
      <path d="M10 8V4M14 8V2M12 4l2-2M12 4l-2-2" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
  infinity: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M8 12c-3 0-5-2-5-4s2-4 5-4c4 0 5 8 8 8s5-2 5-4-2-4-5-4c-4 0-5 8-8 8Z" />
    </svg>
  ),
  medal: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M8 3l4 5 4-5" />
      <circle cx="12" cy="14" r="6" fill="currentColor" opacity=".25" />
      <circle cx="12" cy="14" r="6" />
      <path d="M12 11l1 2 2 .3-1.5 1.4.4 2.2L12 16l-1.9 1 .4-2.2L9 13.3l2-.3 1-2Z" fill="currentColor" />
    </svg>
  ),
  flag: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M5 3v18" strokeLinecap="round" />
      <path d="M5 4h13l-2 4 2 4H5" fill="currentColor" opacity=".25" />
      <path d="M5 4h13l-2 4 2 4H5" />
    </svg>
  ),
  crown: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M3 8l3 8h12l3-8-5 3-4-6-4 6-5-3Z" fill="currentColor" opacity=".3" />
      <path d="M3 8l3 8h12l3-8-5 3-4-6-4 6-5-3ZM5 20h14" />
      <circle cx="3" cy="8" r="1.5" fill="currentColor" />
      <circle cx="21" cy="8" r="1.5" fill="currentColor" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    </svg>
  ),
  trending: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4L21 7" />
      <path d="M15 7h6v6" />
    </svg>
  ),
  desktop: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor" opacity=".15" />
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </svg>
  ),
  compass: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-2 6-6 2 2-6 6-2Z" fill="currentColor" opacity=".4" />
    </svg>
  ),
  document: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" fill="currentColor" opacity=".15" />
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6M8 13h8M8 17h6" strokeLinecap="round" />
    </svg>
  ),
  cloud: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 10 0 4 4 0 0 1 0 8H7Z" fill="currentColor" opacity=".25" />
      <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 10 0 4 4 0 0 1 0 8H7Z" />
    </svg>
  ),
  video: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="3" y="6" width="13" height="12" rx="2" fill="currentColor" opacity=".15" />
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3v-4Z" fill="currentColor" opacity=".4" />
      <path d="M16 10l5-3v10l-5-3v-4Z" />
    </svg>
  ),
  sheet: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" opacity=".15" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M3 15h18M9 4v16M15 4v16" />
    </svg>
  ),
  sigma: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".12" />
      <path d="M16 7H8l4 5-4 5h8" />
    </svg>
  ),
  briefcase: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" fill="currentColor" opacity=".2" />
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  ),
  phone: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="3" fill="currentColor" opacity=".15" />
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  chat: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6Z" fill="currentColor" opacity=".2" />
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6Z" />
    </svg>
  ),
  banknote: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor" opacity=".15" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 9v.01M18 15v.01" strokeLinecap="round" />
    </svg>
  ),
  key: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <circle cx="8" cy="12" r="4" fill="currentColor" opacity=".25" />
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9l-2 3M16 12v3" strokeLinecap="round" />
    </svg>
  ),
  heart: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7-4.5-9-9c-1-3 1-7 4-7 2 0 4 1 5 3 1-2 3-3 5-3 3 0 5 4 4 7-2 4.5-9 9-9 9Z" />
    </svg>
  ),
  map: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" fill="currentColor" opacity=".2" />
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6ZM9 4v16M15 6v16" />
    </svg>
  ),
  camera: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M3 7h4l2-3h6l2 3h4v13H3V7Z" fill="currentColor" opacity=".2" />
      <path d="M3 7h4l2-3h6l2 3h4v13H3V7Z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  mail: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" opacity=".15" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  ),
  shield: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 3 4 6v5c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-3Z" fill="currentColor" opacity=".25" />
      <path d="M12 3 4 6v5c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" />
    </svg>
  ),
  magnify: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" fill="currentColor" opacity=".2" />
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
      <circle cx="11" cy="11" r="2.5" fill="currentColor" />
    </svg>
  ),
  book: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2V5Z" fill="currentColor" opacity=".18" />
      <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2V5Z" />
      <path d="M8 7h7M8 11h5M8 15h6" strokeLinecap="round" />
    </svg>
  ),
  globe: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity=".15" />
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  mic: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="9" y="3" width="6" height="12" rx="3" fill="currentColor" opacity=".25" />
      <rect x="9" y="3" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" strokeLinecap="round" />
    </svg>
  ),
  penta: (s = 32) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 2 22 9l-4 12H6L2 9 12 2Z" fill="currentColor" opacity=".25" />
      <path d="M12 2 22 9l-4 12H6L2 9 12 2Z" />
      <path d="M12 7l5 4-2 6h-6l-2-6 5-4Z" fill="currentColor" />
    </svg>
  ),
};

export default function TrofeuIcone({ nome, size = 32 }) {
  const fn = I[nome] || I.medal;
  return fn(size);
}
