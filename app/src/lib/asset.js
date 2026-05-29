// Prefixa o BASE_URL do Vite em caminhos absolutos de runtime.
// Permite servir o app em subpath (ex.: GitHub Pages /LEDVLearningOffice/) sem quebrar
// referências como /generated/..., /icons/..., /piper/... espalhadas no conteúdo.
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export function asset(path) {
  if (!path) return path;
  if (/^(https?:|data:|blob:)/i.test(path)) return path; // externas/inline intactas
  return BASE + (path.startsWith('/') ? path : '/' + path);
}

export default asset;
