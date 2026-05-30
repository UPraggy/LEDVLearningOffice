/* =========================================================================
   DECKS de revisão espaçada (SRS) — vocabulário & conceitos.
   Cada cartão: { id, frente, verso, deck, hint? }
   ========================================================================= */

export const DECKS = {
  'en-a1': {
    nome: 'Inglês A1 — Cumprimentos & to be',
    cor: 'plum',
    cards: [
      { id: 'en-hello',  frente: 'Hello', verso: 'Olá / Oi (qualquer hora)' },
      { id: 'en-gmorning', frente: 'Good morning', verso: 'Bom dia (até meio-dia)' },
      { id: 'en-gafter', frente: 'Good afternoon', verso: 'Boa tarde' },
      { id: 'en-geven',  frente: 'Good evening', verso: 'Boa noite (chegando)' },
      { id: 'en-gnight', frente: 'Good night', verso: 'Boa noite (indo dormir)' },
      { id: 'en-bye',    frente: 'Goodbye', verso: 'Tchau' },
      { id: 'en-name',   frente: 'What\'s your name?', verso: 'Qual seu nome?' },
      { id: 'en-iam',    frente: 'I am Maria', verso: 'Eu sou a Maria' },
      { id: 'en-youare', frente: 'You are kind', verso: 'Você é gentil' },
      { id: 'en-heis',   frente: 'He is here', verso: 'Ele está aqui' },
      { id: 'en-sheis',  frente: 'She is happy', verso: 'Ela está feliz' },
      { id: 'en-itis',   frente: 'It is hot', verso: 'Está quente' },
      { id: 'en-thanks', frente: 'Thank you', verso: 'Obrigado(a)' },
      { id: 'en-please', frente: 'Please', verso: 'Por favor' },
      { id: 'en-sorry',  frente: 'I\'m sorry', verso: 'Desculpa' },
      { id: 'en-yes',    frente: 'Yes', verso: 'Sim' },
      { id: 'en-no',     frente: 'No', verso: 'Não' },
      { id: 'en-this',   frente: 'This', verso: 'Este / Isto (perto)' },
      { id: 'en-that',   frente: 'That', verso: 'Aquele / Aquilo (longe)' },
      { id: 'en-nice',   frente: 'Nice to meet you', verso: 'Prazer em conhecer' },
    ],
  },
  'seguranca': {
    nome: 'Segurança Digital — termos essenciais',
    cor: 'sage',
    cards: [
      { id: 'sec-2fa',    frente: '2FA', verso: 'Verificação em 2 etapas — código no celular ou app autenticador' },
      { id: 'sec-pix-med',frente: 'MED', verso: 'Mecanismo de Devolução — bloqueio cautelar do PIX recém-feito' },
      { id: 'sec-phish',  frente: 'Phishing', verso: 'E-mail/SMS/site falso que imita instituição pra roubar dados' },
      { id: 'sec-vish',   frente: 'Vishing', verso: 'Golpe por ligação telefônica — "fala da central"' },
      { id: 'sec-smish',  frente: 'Smishing', verso: 'Phishing por SMS — "sua conta foi bloqueada, clique"' },
      { id: 'sec-deep',   frente: 'Deepfake', verso: 'Áudio/vídeo gerado por IA imitando pessoa real' },
      { id: 'sec-chave',  frente: 'Chave PIX aleatória', verso: 'Mais segura — não expõe CPF nem telefone' },
      { id: 'sec-limite', frente: 'Limite diário', verso: 'Teto de valor no app — protege se invadirem' },
      { id: 'sec-vaza',   frente: 'Vazamento', verso: 'Quando dados de uma empresa expõem você. Use haveibeenpwned.com' },
      { id: 'sec-eng-soc',frente: 'Engenharia social', verso: 'Manipular a PESSOA, não a máquina. Arma nº 1 do golpe' },
    ],
  },
  'excel': {
    nome: 'Excel — fórmulas essenciais',
    cor: 'navy',
    cards: [
      { id: 'xl-soma',   frente: '=SOMA(A1:A10)', verso: 'Soma todos os valores do intervalo A1 até A10' },
      { id: 'xl-media',  frente: '=MÉDIA(B1:B5)', verso: 'Média aritmética dos 5 valores' },
      { id: 'xl-max',    frente: '=MÁXIMO(C1:C20)', verso: 'Maior valor do intervalo' },
      { id: 'xl-min',    frente: '=MÍNIMO(C1:C20)', verso: 'Menor valor do intervalo' },
      { id: 'xl-cifrao', frente: '$C$2', verso: 'Trava coluna E linha — referência absoluta' },
      { id: 'xl-cif-col',frente: '$C2', verso: 'Trava só a coluna C — linha vira ao arrastar' },
      { id: 'xl-cif-lin',frente: 'C$2', verso: 'Trava só a linha 2 — coluna vira ao arrastar' },
      { id: 'xl-procv',  frente: '=PROCV(valor; tabela; col; 0)', verso: 'Busca "valor" na 1ª coluna da tabela e retorna o que tem na coluna "col"' },
      { id: 'xl-se',     frente: '=SE(A1>10; "alto"; "baixo")', verso: 'Se A1 > 10 retorna "alto", senão "baixo"' },
      { id: 'xl-cont-se',frente: '=CONT.SE(range; "joão")', verso: 'Conta quantas células do range têm "joão"' },
      { id: 'xl-f4',     frente: 'F4', verso: 'Alterna entre os modos de trava ao editar fórmula' },
      { id: 'xl-conca',  frente: '=CONCAT(A1; " "; B1)', verso: 'Junta A1 + espaço + B1 em uma string só' },
    ],
  },
};

// 365 katas (73 por módulo) — feitos à mão, organizados em src/data/katas/.
// 1 kata por dia do ano. Mantém compatibilidade: continua exportando KATAS daqui.
export { KATAS } from './katas/index.js';
