// ============================================================================
// ÍNDICE DE CONTEÚDO — agrega o conteúdo rico de todas as trilhas.
// Cada arquivo exporta um objeto com chaves `${trilhaId}-${missaoId}`.
// O app importa CONTEUDOS e busca: CONTEUDOS[`${trilhaId}-${missaoId}`].
//
// À medida que novas trilhas ganham conteúdo, importe e espalhe aqui.
// ============================================================================

import { PC_FUND } from './pc-fund.js';
import { PC_NAV } from './pc-nav.js';
import { PC_WORD } from './pc-word.js';
import { PC_CLOUD } from './pc-cloud.js';
import { PC_MEET } from './pc-meet.js';
import { PC_ARQUIVOS } from './pc-arquivos.js';
import { PC_TECLADO } from './pc-teclado.js';
import { PC_EMAIL } from './pc-email.js';
import { PC_PDF } from './pc-pdf.js';
import { PC_IMPRESSAO } from './pc-impressao.js';
import { PC_CONFIG } from './pc-config.js';
import { PC_MANUTENCAO } from './pc-manutencao.js';
import { PC_PROTEGE } from './pc-protege.js';
import { PC_MULTIMIDIA } from './pc-multimidia.js';
import { PC_APPS } from './pc-apps.js';
import { PC_EXCEL } from './pc-excel.js';
import { PC_IA } from './pc-ia.js';
import { AMB_COM } from './amb-com.js';
import { PC_JOB } from './pc-job.js';
import { MKT_CARREIRA } from './mkt-carreira.js';
import { AMB_FINAL } from './amb-final.js';
import { MOB_DOM } from './mob-dom.js';
import { MOB_WPP } from './mob-wpp.js';
import { MOB_PIX } from './mob-pix.js';
import { MOB_GOV } from './mob-gov.js';
import { MOB_SAUDE } from './mob-saude.js';
import { MOB_LOC } from './mob-loc.js';
import { MOB_FOTOS } from './mob-fotos.js';
import { MOB_TECLADO } from './mob-teclado.js';
import { MOB_CONTATOS } from './mob-contatos.js';
import { MOB_APPS } from './mob-apps.js';
import { MOB_ACESS } from './mob-acess.js';
import { MOB_ORGANIZA } from './mob-organiza.js';
import { MOB_BATERIA } from './mob-bateria.js';
import { MOB_ENTRET } from './mob-entret.js';
import { MOB_QR } from './mob-qr.js';
import { AMB_SEG } from './amb-seg.js';
import { SEC_ATAQUE } from './sec-ataque.js';
import { SEC_PIX } from './sec-pix.js';
import { SEC_WHATSAPP } from './sec-whatsapp.js';
import { SEC_BANCO } from './sec-banco.js';
import { SEC_COMPRAS } from './sec-compras.js';
import { SEC_SENHAS_AV } from './sec-senhas-av.js';
import { SEC_PRIV } from './sec-priv.js';
import { SEC_DISPOSITIVO } from './sec-dispositivo.js';
import { SEC_REDES } from './sec-redes.js';
import { SEC_FAMILIA } from './sec-familia.js';
import { SEC_INVESTE } from './sec-investe.js';
import { SEC_EMPREGO } from './sec-emprego.js';
import { SEC_ROMANCE } from './sec-romance.js';
import { SEC_RESPOSTA } from './sec-resposta.js';
import { EN_A1_BASICO } from './en-a1-basico.js';
import { EN_A1_PESSOAS } from './en-a1-pessoas.js';
import { EN_A1_NUMEROS } from './en-a1-numeros.js';
import { EN_A1_ROTINA } from './en-a1-rotina.js';
import { EN_A2_COMIDA } from './en-a2-comida.js';
import { EN_A2_LUGARES } from './en-a2-lugares.js';
import { EN_A2_PASSADO } from './en-a2-passado.js';
import { EN_A2_PLANOS } from './en-a2-planos.js';
import { EN_B1_CONVERSA } from './en-b1-conversa.js';
import { EN_B1_TRABALHO } from './en-b1-trabalho.js';
import { EN_B1_MUNDO } from './en-b1-mundo.js';
import { INTERACOES_EXEMPLO } from './_interacoes-exemplo.js';
// ✅ MÓDULO INGLÊS COMPLETO (A1 + A2 + B1 = 11 trilhas).

export const CONTEUDOS = {
  ...PC_FUND,
  ...PC_NAV,
  ...PC_WORD,
  ...PC_CLOUD,
  ...PC_MEET,
  ...PC_ARQUIVOS,
  ...PC_TECLADO,
  ...PC_EMAIL,
  ...PC_PDF,
  ...PC_IMPRESSAO,
  ...PC_CONFIG,
  ...PC_MANUTENCAO,
  ...PC_PROTEGE,
  ...PC_MULTIMIDIA,
  ...PC_APPS,
  ...PC_EXCEL,
  ...PC_IA,
  ...AMB_COM,
  ...PC_JOB,
  ...MKT_CARREIRA,
  ...AMB_FINAL,
  ...MOB_DOM,
  ...MOB_WPP,
  ...MOB_PIX,
  ...MOB_GOV,
  ...MOB_SAUDE,
  ...MOB_LOC,
  ...MOB_FOTOS,
  ...MOB_TECLADO,
  ...MOB_CONTATOS,
  ...MOB_APPS,
  ...MOB_ACESS,
  ...MOB_ORGANIZA,
  ...MOB_BATERIA,
  ...MOB_ENTRET,
  ...MOB_QR,
  ...AMB_SEG,
  ...SEC_ATAQUE,
  ...SEC_PIX,
  ...SEC_WHATSAPP,
  ...SEC_BANCO,
  ...SEC_COMPRAS,
  ...SEC_SENHAS_AV,
  ...SEC_PRIV,
  ...SEC_DISPOSITIVO,
  ...SEC_REDES,
  ...SEC_FAMILIA,
  ...SEC_INVESTE,
  ...SEC_EMPREGO,
  ...SEC_ROMANCE,
  ...SEC_RESPOSTA,
  ...EN_A1_BASICO,
  ...EN_A1_PESSOAS,
  ...EN_A1_NUMEROS,
  ...EN_A1_ROTINA,
  ...EN_A2_COMIDA,
  ...EN_A2_LUGARES,
  ...EN_A2_PASSADO,
  ...EN_A2_PLANOS,
  ...EN_B1_CONVERSA,
  ...EN_B1_TRABALHO,
  ...EN_B1_MUNDO,
};

/** Retorna o conteúdo rico de uma missão, ou null se ainda não foi produzido.
 *  Mescla `interacoes[]` e `aula.blocos[]` do arquivo de interações de exemplo
 *  (vitrine — `_interacoes-exemplo.js`), sem precisar editar cada arquivo de trilha.
 */
export function getConteudo(trilhaId, missaoId) {
  const base = CONTEUDOS[`${trilhaId}-${missaoId}`];
  if (!base) return null;
  const extra = INTERACOES_EXEMPLO[`${trilhaId}-${missaoId}`];
  if (!extra) return base;
  return {
    ...base,
    aula: { ...(base.aula || {}), blocos: extra.aulaBlocos || base.aula?.blocos },
    interacoes: extra.interacoes || base.interacoes,
  };
}

/** Diz se uma trilha já tem pelo menos uma missão com conteúdo pronto. */
export function trilhaTemConteudo(trilhaId) {
  return Object.keys(CONTEUDOS).some(k => k.startsWith(trilhaId + '-'));
}
