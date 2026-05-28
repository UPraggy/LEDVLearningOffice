import { MISSOES, TRILHAS } from './estrutura.js';

const TEMA_MODULO = {
  seg: 'seguranca',
  seguranca: 'seguranca',
  excel: 'mercado',
  mercado: 'mercado',
  en: 'ingles',
  ingles: 'ingles',
  mob: 'celular',
  wpp: 'celular',
  celular: 'celular',
  computador: 'computador',
};

export function seedDoTexto(texto) {
  return Math.abs([...String(texto || '')].reduce((s, c) => (s * 31 + c.charCodeAt(0)) >>> 0, 0));
}

export function moduloDoItem(item) {
  return TEMA_MODULO[item?.modulo] || TEMA_MODULO[item?.tema] || item?.modulo || item?.tema || null;
}

export function nivelDoModulo(progresso, moduloId) {
  if (!moduloId) return nivelMedio(progresso);
  const pronto = new Set(progresso?.missoesCompletas || []);
  const trilhas = TRILHAS.filter(t => t.modulo === moduloId);
  const feitas = trilhas.reduce((acc, t) => {
    const ms = MISSOES[t.id] || [];
    return acc + ms.filter(m => pronto.has(`${t.id}-${m.id}`)).length;
  }, 0);
  if (feitas >= 6) return 3;
  if (feitas >= 3) return 2;
  return 1;
}

export function nivelMedio(progresso) {
  const modulos = ['computador', 'celular', 'mercado', 'seguranca', 'ingles'];
  const soma = modulos.reduce((acc, mod) => acc + nivelDoModulo(progresso, mod), 0);
  return Math.max(1, Math.round(soma / modulos.length));
}

export function filtrarPorNivel(pool, progresso) {
  const filtrado = (pool || []).filter(item => {
    const nivelItem = item.nivel || (item.tema === 'excel' ? 2 : item.tema === 'seg' && /2FA|senha|MED/i.test(item.pergunta || item.titulo || '') ? 3 : 1);
    const mod = moduloDoItem(item);
    return nivelItem <= nivelDoModulo(progresso, mod);
  });
  return filtrado.length ? filtrado : (pool || []).filter(item => (item.nivel || 1) <= 1);
}

export function escolherDoDia(pool, progresso, diaISO, salt = '') {
  const elegiveis = filtrarPorNivel(pool, progresso);
  if (!elegiveis.length) return null;
  const seed = seedDoTexto(`${diaISO}-${salt}`);
  return elegiveis[seed % elegiveis.length];
}

export function isoWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

export function diasRestantesSemana(date = new Date()) {
  const day = date.getDay();
  return day === 0 ? 0 : 7 - day;
}
