/* =========================================================================
   POOL do Modo Arcade Diário.
   Cada item tem `tipo`, conteúdo + feedback. 3 itens sorteados por dia.
   ========================================================================= */

export const ARCADE_POOL = [
  // ===== DECIDA RÁPIDO (binário) =====
  {
    id: 'd1', tipo: 'decida_rapido', tema: 'seg',
    pergunta: 'SMS: "Seu CPF foi bloqueado. Clique aqui urgente."',
    opcoes: ['Ignorar', 'Clicar no link'],
    resposta: 0,
    feedback_ok: 'Boa. Urgência falsa é sinal comum de golpe.',
    feedback_err: 'Quase. Receita Federal não manda SMS pedindo clique.',
  },
  {
    id: 'd2', tipo: 'decida_rapido', tema: 'seg',
    pergunta: 'WhatsApp do seu chefe pedindo PIX urgente de número novo.',
    opcoes: ['Ligar pro chefe', 'Mandar o PIX'],
    resposta: 0,
    feedback_ok: 'Certo. Pessoa de confiança em número novo = liga antes.',
    feedback_err: 'Esse é o golpe do "chefe em apuros". Sempre ligue antes.',
  },
  {
    id: 'd3', tipo: 'decida_rapido', tema: 'seg',
    pergunta: 'Banco te liga pedindo senha "pra confirmar".',
    opcoes: ['Desligar', 'Falar a senha'],
    resposta: 0,
    feedback_ok: 'Banco NUNCA pede senha por telefone. Nunca.',
    feedback_err: 'Pista pra guardar: ninguém legítimo pede sua senha por ligação.',
  },
  {
    id: 'd4', tipo: 'decida_rapido', tema: 'excel',
    pergunta: 'Arrastando =B2*C2 pra baixo. Quer fixar o C2. Usa =$B$2*C2?',
    opcoes: ['Não', 'Sim'],
    resposta: 0,
    feedback_ok: 'Certo. Fixou o B errado. O correto é =B2*$C$2.',
    feedback_err: 'O que NÃO PODE mudar ganha cifrão. Aqui é só o C2.',
  },
  {
    id: 'd5', tipo: 'decida_rapido', tema: 'en',
    pergunta: 'São 14h. Cumprimenta com "Good morning"?',
    opcoes: ['Não', 'Sim'],
    resposta: 0,
    feedback_ok: 'Certo. "Morning" vai só até meio-dia. Tarde é "afternoon".',
    feedback_err: 'Quase. Manhã = até 12h. Depois disso, "afternoon".',
  },
  {
    id: 'd6', tipo: 'decida_rapido', tema: 'seg',
    pergunta: 'Site pede pra instalar app pra "ver fatura". Faz?',
    opcoes: ['Não', 'Sim'],
    resposta: 0,
    feedback_ok: 'Boa. Boleto/fatura legítima vem em PDF ou no app oficial.',
    feedback_err: 'App fora da loja oficial = risco alto.',
  },

  // ===== ACHA O ERRO (clica no token errado) =====
  {
    id: 'e1', tipo: 'acha_o_erro', tema: 'seg',
    pergunta: 'Toque no trecho suspeito:',
    tokens: [
      { txt: 'De: suporte@', sep: true },
      { txt: 'bradescco.com.br', ok: false },
      { txt: ' — sua conta bloqueada', sep: true },
    ],
    feedback_ok: 'Boa. "bradescco" com 2 C — domínio falso clássico.',
    feedback_err: 'Olha letra por letra do domínio. Tem letra a mais.',
  },
  {
    id: 'e2', tipo: 'acha_o_erro', tema: 'seg',
    pergunta: 'Toque no trecho suspeito:',
    tokens: [
      { txt: 'Confirme em ', sep: true },
      { txt: 'bit.ly/xyz123', ok: false },
      { txt: ' antes de 2 horas.', sep: true },
    ],
    feedback_ok: 'Certo. Link encurtado em mensagem oficial = phishing.',
    feedback_err: 'Banco nunca usa link encurtado. Sempre domínio próprio.',
  },
  {
    id: 'e3', tipo: 'acha_o_erro', tema: 'excel',
    pergunta: 'Fórmula com erro:',
    tokens: [
      { txt: '=PROCV(E2', sep: true },
      { txt: ',', ok: false },
      { txt: ' A:C; 3; 0)', sep: true },
    ],
    feedback_ok: 'No BR usamos ";" não "," entre argumentos.',
    feedback_err: 'Olha o separador. No Excel BR é ponto-e-vírgula.',
  },

  // ===== VERDADE OU MITO =====
  {
    id: 'v1', tipo: 'verdade_mito', tema: 'seg',
    pergunta: 'O banco pode cancelar um PIX depois de enviado.',
    resposta: 'mito',
    feedback_ok: 'Mito. PIX confirmado não volta sozinho. Por isso conferir nome antes é vital.',
    feedback_err: 'É mito. PIX é instantâneo e irreversível.',
  },
  {
    id: 'v2', tipo: 'verdade_mito', tema: 'seg',
    pergunta: 'Senha forte é uma que mistura símbolos, números e letras maiúsculas — ex: P@ssw0rd.',
    resposta: 'mito',
    feedback_ok: 'Mito. P@ssw0rd está em qualquer dicionário de senhas vazadas. Tamanho > complexidade.',
    feedback_err: 'Mito. 4 palavras aleatórias são mais fortes que "P@ssw0rd".',
  },
  {
    id: 'v3', tipo: 'verdade_mito', tema: 'seg',
    pergunta: 'Receber PIX por engano + pedido pra devolver = sempre devolve direto.',
    resposta: 'mito',
    feedback_ok: 'Mito. Antes confere SE entrou na sua conta. Senão é golpe.',
    feedback_err: 'Mito clássico. Sempre confere o extrato primeiro.',
  },
  {
    id: 'v4', tipo: 'verdade_mito', tema: 'excel',
    pergunta: 'F4 alterna entre os modos de trava ($) ao editar uma fórmula.',
    resposta: 'verdade',
    feedback_ok: 'Verdade. F4 cicla entre $C$2, C$2, $C2 e C2.',
    feedback_err: 'É verdade. F4 é seu melhor amigo no Excel.',
  },
  {
    id: 'v5', tipo: 'verdade_mito', tema: 'en',
    pergunta: '"Good night" é usado pra CUMPRIMENTAR alguém chegando à noite.',
    resposta: 'mito',
    feedback_ok: 'Mito. Good night = DESPEDIDA indo dormir. Chegando = Good evening.',
    feedback_err: 'Mito. "Night" é só pra despedir.',
  },
  {
    id: 'v6', tipo: 'verdade_mito', tema: 'seg',
    pergunta: 'Verificação em 2 etapas (2FA) reduz muito o risco mesmo se vazarem sua senha.',
    resposta: 'verdade',
    feedback_ok: 'Verdade. 2FA bloqueia 99% dos ataques mesmo com senha exposta.',
    feedback_err: 'É verdade. 2FA é a segunda trava.',
  },
  {
    id: 'v7', tipo: 'verdade_mito', tema: 'mob',
    pergunta: 'WhatsApp Web funciona sem o celular original conectado, depois de pareado.',
    resposta: 'verdade',
    feedback_ok: 'Verdade (recurso multi-device). Mesmo assim, faça logout em PCs públicos.',
    feedback_err: 'É verdade. Mas atenção em computador público — sempre saia.',
  },
];
