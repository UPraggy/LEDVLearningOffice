/* =========================================================================
   KATAS — índice combinado. 365 katas feitos à mão (73 por módulo).
   1 kata por dia do ano. Fonte única consumida por decks-srs.js.
   ========================================================================= */
import { KATAS_SEGURANCA } from './seguranca.js';
import { KATAS_CELULAR } from './celular.js';
import { KATAS_COMPUTADOR } from './computador.js';
import { KATAS_MERCADO } from './mercado.js';
import { KATAS_INGLES } from './ingles.js';

export const KATAS = [
  ...KATAS_SEGURANCA,
  ...KATAS_CELULAR,
  ...KATAS_COMPUTADOR,
  ...KATAS_MERCADO,
  ...KATAS_INGLES,
];
