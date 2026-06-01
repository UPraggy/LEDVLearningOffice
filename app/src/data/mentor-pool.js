/* =========================================================================
   POOL DO MENTOR — Carlos Mendes (mentor virtual).
   Mensagens geradas dinamicamente conforme estado do progresso.
   Cada gerador retorna `null` se o gatilho não se aplica.

   Cooldown / Reaparição:
     - `unica: true`  → só aparece 1 vez na vida do aluno.
     - `cooldown: N`  → só pode reaparecer N dias após a última aparição.
     - sem cooldown   → pode aparecer sempre que a condição for verdadeira
                        (usado pra mensagens dependentes de marco, evita repetir
                        marcando o id como "vista" no inboxExistente).

   Cada mensagem gerada carrega `ts` (timestamp da geração) — usado pra
   calcular se já passou o cooldown.
   ========================================================================= */
import { MODULOS, TRILHAS, MISSOES } from './estrutura.js';

const DIA = 86_400_000;

function pegarProxima(progresso) {
  const feitas = new Set(progresso.missoesCompletas || []);
  for (const t of TRILHAS) {
    const ms = MISSOES[t.id] || [];
    for (const m of ms) {
      if (!feitas.has(`${t.id}-${m.id}`)) return { trilha: t, missao: m };
    }
  }
  return null;
}

function diasDesde(ts) {
  if (!ts) return Infinity;
  return Math.floor((Date.now() - ts) / DIA);
}

/* Helper pra contar missões de um prefixo */
function contar(p, prefixo) {
  return (p.missoesCompletas || []).filter(x => x.startsWith(prefixo)).length;
}

const POOL = [
  /* ────────────── BLOCO 1 — Saudações & estado ────────────── */
  {
    id: 'g-retorno',
    cooldown: 1,
    cond: (p) => (p.user?.streak || 0) >= 1,
    msg: (p) => ({
      title: `Bem-vindo de volta, ${p.user?.nome?.split(' ')[0] || ''}.`,
      body: `Você está há ${p.user.streak} dia${p.user.streak > 1 ? 's' : ''} seguido${p.user.streak > 1 ? 's' : ''}. Manter a chama é metade do trabalho — a outra metade é fazer 1 missão hoje.`,
      tag: 'recap', color: 'sage',
    }),
  },
  {
    id: 'g-proxima',
    cooldown: 1,
    cond: () => true,
    msg: (p) => {
      const prox = pegarProxima(p);
      if (!prox) return null;
      const mod = MODULOS.find(m => m.id === prox.trilha.modulo);
      return {
        title: `Sua tarefa de hoje: ${prox.missao.titulo}`,
        body: `Trilha "${prox.trilha.nome}" · ${prox.missao.tempo} min · +${prox.missao.xp} XP. ${mod ? `Módulo ${mod.nome}.` : ''} Quando concluir, me responde aqui dizendo como foi.`,
        tag: 'missão', color: 'navy',
        acao: { tipo: 'missao', trilhaId: prox.trilha.id, missaoId: prox.missao.id },
      };
    },
  },
  {
    id: 'g-sumiu',
    cooldown: 3,
    cond: (p) => {
      const ultima = p.user?.ultimaVisita;
      if (!ultima) return false;
      const dif = Date.now() - new Date(ultima + 'T00:00:00').getTime();
      return dif > 3 * DIA;
    },
    msg: () => ({
      title: 'Que bom te ver de volta.',
      body: 'Pular alguns dias acontece — o importante é voltar. Hoje, faça só 1 missão pra reativar o ritmo. Nem precisa ser longa.',
      tag: 'volta', color: 'coral',
    }),
  },

  /* ────────────── BLOCO 2 — Marcos & celebrações ────────────── */
  {
    id: 'g-streak-marco',
    cond: (p) => [7, 14, 30, 60, 100, 200, 365].includes(p.user?.streak),
    msg: (p) => ({
      title: `${p.user.streak} dias seguidos. Repare nisso.`,
      body: `Manter uma rotina durante ${p.user.streak} dias seguidos não é talento — é caráter. Continue do mesmo jeito: 1 missão por dia, sem pressa.`,
      tag: 'celebra', color: 'sage',
    }),
  },
  {
    id: 'g-recap-semana',
    cond: (p) => {
      const feitas = (p.missoesCompletas || []).length;
      return feitas > 0 && feitas % 5 === 0;
    },
    msg: (p) => ({
      title: `${p.missoesCompletas.length} missões concluídas — parabéns.`,
      body: `Você acabou de bater um marco redondo. Olha pra trás: cada uma dessas missões representa uma habilidade nova que entrou pro seu currículo. Continue.`,
      tag: 'recap', color: 'sage',
    }),
  },
  {
    id: 'g-xp-1000',
    unica: true,
    cond: (p) => (p.user?.xp || 0) >= 1000,
    msg: () => ({
      title: '1.000 XP — você ultrapassou a média do curso.',
      body: 'Pesquisei: a maioria das pessoas que começa um curso assim para nos primeiros 200 XP. Você está cinco vezes além disso. Não é coincidência — é constância.',
      tag: 'celebra', color: 'honey',
    }),
  },
  {
    id: 'g-trofeu-primeiro',
    unica: true,
    cond: (p) => (p.trofeus || []).length >= 1,
    msg: () => ({
      title: 'Primeiro troféu na estante.',
      body: 'Cada troféu marca uma virada — uma coisa que você antes não sabia, e agora sabe. Olha sua estante de vez em quando, principalmente nos dias difíceis. Ela é a prova material do que você construiu.',
      tag: 'celebra', color: 'honey',
      acao: { tipo: 'rota', rota: '/trofeus' },
    }),
  },

  /* ────────────── BLOCO 3 — Dicas técnicas (rotacionam) ────────────── */
  {
    id: 'g-dica-excel-f4',
    cooldown: 14,
    cond: (p) => contar(p, 'pc-excel-') >= 2,
    msg: () => ({
      title: 'Atalho do dia: F4 no Excel',
      body: 'Quando estiver editando uma fórmula, pressione F4 pra alternar entre $A$1, A$1, $A1 e A1. Esse atalho economiza dezenas de segundos por planilha — multiplicado por uma semana, é uma manhã inteira.',
      tag: 'dica', color: 'navy',
    }),
  },
  {
    id: 'g-dica-ctrl-z',
    cooldown: 21,
    cond: (p) => contar(p, 'pc-') >= 3,
    msg: () => ({
      title: 'A tecla mais importante do computador',
      body: 'Ctrl+Z desfaz a última ação. Apagou sem querer? Ctrl+Z. Mexeu na fórmula errada? Ctrl+Z. Toda vez que sentir aquele frio na barriga ao ver algo estragar — Ctrl+Z primeiro, pensa depois.',
      tag: 'dica', color: 'navy',
    }),
  },
  {
    id: 'g-dica-print-pdf',
    cooldown: 28,
    cond: (p) => contar(p, 'pc-') >= 5,
    msg: () => ({
      title: 'Salvar qualquer coisa como PDF',
      body: 'Em qualquer programa, Ctrl+P abre a janela de impressão. Na "impressora", escolha "Salvar como PDF". Pronto — você guardou aquele e-mail importante, recibo de banco ou tela do site sem precisar baixar nada.',
      tag: 'dica', color: 'navy',
    }),
  },
  {
    id: 'g-dica-senha-frase',
    cooldown: 30,
    cond: () => true,
    msg: () => ({
      title: 'Senhas: prefira frases longas',
      body: 'Esqueça "Br@s1l@2024" — é difícil de lembrar e fácil pro computador descobrir. Use uma frase: "meu cachorro Bento adora arroz" — fácil pra você, impossível pra máquina. É o método recomendado pelo NIST (instituto americano que define os padrões).',
      tag: 'segurança', color: 'coral',
    }),
  },
  {
    id: 'g-dica-2fa',
    cooldown: 30,
    cond: (p) => contar(p, 'amb-seg-') >= 1 || contar(p, 'sec-') >= 1,
    msg: () => ({
      title: 'Ativa o 2FA hoje.',
      body: 'Verificação em duas etapas é o cinto de segurança digital. Mesmo se vazarem sua senha, sem o código do celular ninguém entra. Ative em: e-mail, banco, WhatsApp, Instagram. Leva 3 minutos por conta — protege pelo resto da vida.',
      tag: 'segurança', color: 'coral',
    }),
  },
  {
    id: 'g-dica-busca-aspas',
    cooldown: 25,
    cond: () => true,
    msg: () => ({
      title: 'Buscar no Google entre aspas',
      body: 'Quer encontrar exatamente uma frase? Coloque entre aspas: "como tirar mancha de café". O Google vai trazer só páginas com essas palavras nessa ordem. Truque que pesquisadores e jornalistas usam há 20 anos.',
      tag: 'dica', color: 'navy',
    }),
  },
  {
    id: 'g-dica-anki',
    cooldown: 40,
    cond: (p) => (p.missoesCompletas || []).length >= 10,
    msg: () => ({
      title: 'Como cérebro grava: repetição espaçada',
      body: 'Pesquisas das universidades de Cambridge e Princeton mostram: revisar algo 1 dia, 3 dias, 7 dias e 21 dias depois fixa muito mais do que estudar 4h seguidas. É exatamente o método que uso nas suas revisões. Confie no espaçamento.',
      tag: 'dica', color: 'sage',
    }),
  },

  /* ────────────── BLOCO 4 — Empurrões por módulo ────────────── */
  {
    id: 'g-seg',
    cooldown: 10,
    cond: (p) => contar(p, 'amb-seg-') + contar(p, 'sec-') === 0,
    msg: () => ({
      title: 'Você sabe identificar um golpe de WhatsApp?',
      body: 'Antes da próxima onda de Excel ou e-mail, recomendo fortemente fazer 1 missão de Segurança. É a coisa mais valiosa que esse curso ensina — em valor real de prejuízo evitado.',
      tag: 'prep', color: 'coral',
      acao: { tipo: 'modulo', modId: 'seguranca' },
    }),
  },
  {
    id: 'g-empurra-comunicacao',
    cooldown: 14,
    cond: (p) => contar(p, 'pc-') >= 4 && contar(p, 'com-') === 0,
    msg: () => ({
      title: 'Hora de praticar comunicação',
      body: 'Você já domina o básico do computador. Agora vale aprender a escrever um e-mail profissional e a se posicionar em reuniões — habilidades que carreira nenhuma dispensa.',
      tag: 'prep', color: 'navy',
      acao: { tipo: 'modulo', modId: 'comunicacao' },
    }),
  },
  {
    id: 'g-empurra-financas',
    cooldown: 14,
    cond: (p) => (p.user?.xp || 0) >= 500 && contar(p, 'fin-') === 0,
    msg: () => ({
      title: 'Dinheiro: a habilidade que ninguém ensina na escola',
      body: 'Finanças pessoais é matéria obrigatória em escolas dos EUA e do Reino Unido — mas no Brasil ainda é raro. Boa parte das dívidas que arruínam famílias começa com pequenas decisões que dariam pra evitar. Recomendo abrir esse módulo essa semana.',
      tag: 'prep', color: 'coral',
      acao: { tipo: 'modulo', modId: 'financas' },
    }),
  },

  /* ────────────── BLOCO 5 — Motivacionais & filosofia ────────────── */
  {
    id: 'g-mot-comparacao',
    cooldown: 21,
    cond: (p) => (p.user?.streak || 0) >= 3,
    msg: () => ({
      title: 'Compare com você de ontem.',
      body: 'Tem aluno que faz 10 missões no fim de semana e depois some 2 meses. Tem aluno que faz 1 missão por dia, sempre. O segundo chega mais longe — sempre. Você está sendo o segundo.',
      tag: 'motiva', color: 'sage',
    }),
  },
  {
    id: 'g-mot-cansaco',
    cooldown: 18,
    cond: (p) => {
      const ultima = p.user?.ultimaVisita;
      if (!ultima) return false;
      const dif = Date.now() - new Date(ultima + 'T00:00:00').getTime();
      return dif >= 1.5 * DIA && dif < 3 * DIA;
    },
    msg: () => ({
      title: 'Dia ruim? Faz a missão mais curta.',
      body: 'Quando o corpo pede pausa mas você não quer perder a ofensiva, abra uma missão de 3 minutos. Vale como dia cumprido. O hábito sobrevive — é mais importante que o esforço de um dia específico.',
      tag: 'motiva', color: 'coral',
    }),
  },
  {
    id: 'g-mot-erro',
    cooldown: 20,
    cond: (p) => (p.missoesErros || 0) >= 3,
    msg: () => ({
      title: 'Errou? Ótimo — significa que está aprendendo.',
      body: 'Pesquisa da Stanford (Carol Dweck) mostra que pessoas que tratam erro como parte do processo aprendem 60% mais rápido que as que tratam erro como vergonha. Cada errada sua já foi anotada — vai voltar na revisão até você acertar dormindo.',
      tag: 'motiva', color: 'sage',
    }),
  },
  {
    id: 'g-mot-pomodoro',
    cooldown: 28,
    cond: () => true,
    msg: () => ({
      title: 'Técnica Pomodoro — italiana, simples',
      body: 'Estude por 25 minutos, descanse 5. Repita 4 vezes, depois pausa longa. Inventada por Francesco Cirillo em 1987 — hoje usada em universidades do mundo todo. Funciona pra qualquer idade e qualquer matéria.',
      tag: 'motiva', color: 'navy',
    }),
  },

  /* ────────────── BLOCO 6 — Curiosidades & cultura geral ────────────── */
  {
    id: 'g-cult-internet',
    cooldown: 30,
    cond: (p) => contar(p, 'pc-') >= 3,
    msg: () => ({
      title: 'A internet tem só 35 anos.',
      body: 'A World Wide Web foi criada em 1989 por Tim Berners-Lee no CERN (laboratório europeu de física). Em 1995 quase ninguém usava — hoje 5 bilhões de pessoas usam todo dia. Você está aprendendo uma tecnologia que ainda é mais nova do que muita gente nesse curso.',
      tag: 'curiosidade', color: 'honey',
    }),
  },
  {
    id: 'g-cult-finlandia',
    cooldown: 35,
    cond: (p) => (p.user?.streak || 0) >= 5,
    msg: () => ({
      title: 'Finlândia: educação adulta gratuita',
      body: 'Na Finlândia, todo adulto tem direito a estudo gratuito durante a vida toda — eles chamam de "kansalaisopisto". É uma das razões pela qual o país sempre lidera rankings de qualidade de vida. Você está fazendo, por conta própria, o que lá é garantido por lei.',
      tag: 'curiosidade', color: 'honey',
    }),
  },
  {
    id: 'g-cult-coursera',
    cooldown: 40,
    cond: (p) => (p.missoesCompletas || []).length >= 15,
    msg: () => ({
      title: 'Existe vida além daqui',
      body: 'Quando terminar nossas trilhas, vale conhecer: Coursera (cursos de universidades como Stanford e Yale, em português), edX (MIT, Harvard), Fundação Estudar (bolsas), Khan Academy (matemática do zero). Tudo gratuito ou bem barato. Te mando referências mais específicas quando chegar a hora.',
      tag: 'curiosidade', color: 'honey',
    }),
  },
  {
    id: 'g-cult-enem',
    cooldown: 45,
    cond: (p) => (p.user?.xp || 0) >= 800,
    msg: () => ({
      title: 'ENEM, ENCCEJA, concursos…',
      body: 'O ENCCEJA permite certificar ensino fundamental ou médio sem voltar pra escola — é gratuito e acontece anualmente. Vale conhecer se você ainda não terminou os estudos formais. Não é pré-requisito pra nada que fazemos aqui, mas pode abrir portas.',
      tag: 'curiosidade', color: 'honey',
    }),
  },

  /* ────────────── BLOCO 7 — Saúde & ergonomia ────────────── */
  {
    id: 'g-saude-postura',
    cooldown: 25,
    cond: () => true,
    msg: () => ({
      title: 'Postura na frente do computador',
      body: 'A tela deve ficar na altura dos seus olhos — se você precisa olhar pra baixo, o pescoço sofre. Pés no chão, ombros relaxados, antebraços paralelos à mesa. Levante a cada 50 minutos. Esses 4 hábitos previnem 80% das dores crônicas em trabalhadores de escritório.',
      tag: 'saúde', color: 'sage',
    }),
  },
  {
    id: 'g-saude-vista',
    cooldown: 30,
    cond: () => true,
    msg: () => ({
      title: 'Regra 20-20-20 pra vista',
      body: 'A cada 20 minutos olhando pra tela, olhe por 20 segundos pra algo a 6 metros (20 pés) de distância. Reduz fadiga ocular comprovadamente — recomendação da American Academy of Ophthalmology.',
      tag: 'saúde', color: 'sage',
    }),
  },
  {
    id: 'g-saude-sono',
    cooldown: 35,
    cond: () => true,
    msg: () => ({
      title: 'Aprender requer dormir.',
      body: 'O cérebro consolida memórias durante o sono profundo. Estudar muito sem dormir bem é como gravar arquivos no computador e nunca apertar "salvar". Quando puder, pratique uma missão pela manhã e revise antes de dormir.',
      tag: 'saúde', color: 'sage',
    }),
  },

  /* ────────────── BLOCO 8 — Bossa carreira ────────────── */
  {
    id: 'g-carreira-portfolio',
    cooldown: 50,
    cond: (p) => (p.missoesCompletas || []).length >= 20,
    msg: () => ({
      title: 'Comece a montar seu portfólio',
      body: 'Crie uma pasta no Drive chamada "Portfólio". Vai juntando: planilhas que você fez, prints de e-mails profissionais bem escritos, certificados. Quando aparecer oportunidade de trabalho ou freela, você tem o que mostrar — e poucas pessoas têm.',
      tag: 'carreira', color: 'navy',
    }),
  },
  {
    id: 'g-carreira-linkedin',
    cooldown: 60,
    cond: (p) => (p.user?.xp || 0) >= 1500,
    msg: () => ({
      title: 'LinkedIn não é só pra "executivo"',
      body: 'Hoje recrutadores procuram por: faxineiros experientes, recepcionistas, motoristas, costureiras. Ter um perfil simples e bem escrito triplica suas chances de oportunidade. Quando chegar no módulo de Comunicação, te ajudo a montar.',
      tag: 'carreira', color: 'navy',
    }),
  },

  /* ────────────── BLOCO 9 — Excel avançado & dados ────────────── */
  {
    id: 'g-dica-procx',
    cooldown: 21,
    cond: (p) => contar(p, 'pc-excel-pro-') >= 1,
    msg: () => ({
      title: 'PROCX: a função que vale uma vaga',
      body: 'Em testes práticos de emprego, "cruzar duas tabelas" é o pedido mais comum — e o PROCX resolve isso melhor que o velho PROCV: busca pra qualquer lado e já trata o "não encontrado". Treine até fazer sem pensar; é o tipo de habilidade que aparece no salário.',
      tag: 'dica', color: 'navy',
    }),
  },
  {
    id: 'g-dica-tabela-dinamica',
    cooldown: 25,
    cond: (p) => contar(p, 'pc-excel-pro-') >= 6,
    msg: () => ({
      title: 'Tabela dinâmica parece mágica (e é treinável)',
      body: 'Resumir 5 mil linhas em três arrastões de mouse impressiona qualquer chefe. O segredo é base limpa: cabeçalho em toda coluna, sem linha em branco no meio. Transforme em Tabela (Ctrl+T) antes — aí a dinâmica cresce junto com seus dados.',
      tag: 'dica', color: 'sage',
    }),
  },
  {
    id: 'g-empurra-excel-pro',
    cooldown: 18,
    cond: (p) => contar(p, 'pc-excel-') >= 10 && contar(p, 'pc-excel-pro-') === 0,
    msg: () => ({
      title: 'Você já tem base — hora do Excel que decide',
      body: 'Terminou o Excel essencial? A trilha "Excel Avançado: Fórmulas que Decidem" é o próximo degrau: SE, SOMASE, PROCX, validação e um dashboard de verdade no fim. É o conteúdo que separa "sabe usar" de "sabe analisar".',
      tag: 'prep', color: 'coral',
      acao: { tipo: 'modulo', modId: 'mercado' },
    }),
  },
  {
    id: 'g-dica-se-erro',
    cooldown: 30,
    cond: (p) => contar(p, 'pc-excel-pro-') >= 3,
    msg: () => ({
      title: 'Planilha do chefe não tem erro vermelho',
      body: 'Aquele #N/D ou #DIV/0! passa imagem de descuido e ainda quebra somas. Envolva o cálculo com SE.ERRO e mostre um traço ou uma mensagem em português. Mas atenção: entenda a causa antes de esconder — SE.ERRO é maquiagem, não conserto.',
      tag: 'dica', color: 'navy',
    }),
  },

  /* ────────────── BLOCO 10 — Inglês ────────────── */
  {
    id: 'g-ingles-comecar',
    cooldown: 20,
    cond: (p) => (p.missoesCompletas || []).length >= 8 && contar(p, 'en-') === 0,
    msg: () => ({
      title: 'Inglês abre uma porta que não fecha mais',
      body: 'Não precisa virar fluente pra mudar de patamar: ler instruções, entender um vídeo, responder um e-mail simples já coloca você à frente de muita gente. Comece pelo A1 — são frases curtas, do jeito que dá pra usar amanhã.',
      tag: 'prep', color: 'coral',
      acao: { tipo: 'modulo', modId: 'ingles' },
    }),
  },
  {
    id: 'g-ingles-shadowing',
    cooldown: 26,
    cond: (p) => contar(p, 'en-') >= 4,
    msg: () => ({
      title: 'Truque de fluência: shadowing',
      body: 'Ouça uma frase em inglês e repita por cima, imitando o ritmo e o som — como uma sombra (shadow). Estudos de aquisição de língua mostram que isso treina ouvido e boca ao mesmo tempo. 5 minutos por dia valem mais que uma hora só lendo.',
      tag: 'dica', color: 'sage',
    }),
  },
  {
    id: 'g-ingles-b1',
    cooldown: 30,
    cond: (p) => contar(p, 'en-a2-') >= 4 && contar(p, 'en-b1-') === 0,
    msg: () => ({
      title: 'Você está pronto pro B1',
      body: 'Saiu do "sobreviver" e entrou no "conversar". No B1 você aprende a contar uma história no passado, dar opinião e se virar numa viagem. É o nível que a maioria dos empregos pede como "inglês intermediário". Siga firme.',
      tag: 'celebra', color: 'honey',
      acao: { tipo: 'modulo', modId: 'ingles' },
    }),
  },

  /* ────────────── BLOCO 11 — Prática: katas, arcade, revisão ────────────── */
  {
    id: 'g-kata-rotina',
    cooldown: 14,
    cond: (p) => (p.missoesCompletas || []).length >= 6,
    msg: () => ({
      title: 'Aqueça o cérebro com um Kata',
      body: 'Antes da missão do dia, faça 1 ou 2 katas — são desafios rápidos de fixação, de 1 minuto cada. Pianista treina escala todo dia; com habilidade digital é igual. O pouco diário vence o muito esporádico.',
      tag: 'dica', color: 'navy',
      acao: { tipo: 'rota', rota: '/kata' },
    }),
  },
  {
    id: 'g-arcade-relax',
    cooldown: 16,
    cond: (p) => (p.user?.streak || 0) >= 4,
    msg: () => ({
      title: 'Cansou? Vai pro Arcade.',
      body: 'Tem dia que a cabeça não quer aula longa — e tudo bem. O Arcade tem joguinhos que ensinam sem parecer estudo: achar o erro, relâmpago, memória. Mantém a ofensiva viva e ainda fixa conteúdo. Diversão também é método.',
      tag: 'motiva', color: 'honey',
      acao: { tipo: 'rota', rota: '/arcade' },
    }),
  },
  {
    id: 'g-revisao-lembrete',
    cooldown: 7,
    cond: (p) => (p.missoesCompletas || []).length >= 12,
    msg: () => ({
      title: 'Sua revisão de hoje está esperando',
      body: 'Lembra do que aprendeu semana passada? O cérebro esquece de propósito o que não revisa. Cinco minutos de revisão espaçada hoje valem por uma aula inteira amanhã. Abra quando puder — eu seleciono só o que está na hora de relembrar.',
      tag: 'prep', color: 'sage',
      acao: { tipo: 'rota', rota: '/revisao' },
    }),
  },

  /* ────────────── BLOCO 12 — Mais dicas técnicas ────────────── */
  {
    id: 'g-dica-print-tela',
    cooldown: 27,
    cond: (p) => contar(p, 'pc-') >= 2,
    msg: () => ({
      title: 'Tirar foto da tela (print)',
      body: 'No Windows, a tecla "PrtSc" copia a tela inteira; "Windows + Shift + S" deixa você recortar só um pedaço. No celular, geralmente é "ligar + volume pra baixo" juntos. Serve pra guardar comprovante, mostrar um erro pra alguém ou registrar uma conversa.',
      tag: 'dica', color: 'navy',
    }),
  },
  {
    id: 'g-dica-copiar-formato',
    cooldown: 33,
    cond: (p) => contar(p, 'pc-word-') >= 2 || contar(p, 'pc-excel-') >= 4,
    msg: () => ({
      title: 'Pincel de formatação: copie o estilo, não o texto',
      body: 'No Word e no Excel existe um ícone de pincelzinho. Clique numa célula/texto já formatado, depois no pincel, depois arraste sobre o que quer deixar igual. Copia cor, tamanho, borda — tudo de uma vez. Economiza um trabalhão.',
      tag: 'dica', color: 'sage',
    }),
  },
  {
    id: 'g-dica-atalhos-base',
    cooldown: 24,
    cond: (p) => contar(p, 'pc-') >= 4,
    msg: () => ({
      title: 'Os 4 atalhos que mudam tudo',
      body: 'Ctrl+C (copiar), Ctrl+V (colar), Ctrl+Z (desfazer) e Ctrl+F (buscar na página). Funcionam em quase todo programa e site. Decorou esses quatro? Você já é mais rápido que a maioria dos colegas de trabalho.',
      tag: 'dica', color: 'navy',
    }),
  },
  {
    id: 'g-dica-backup',
    cooldown: 40,
    cond: (p) => contar(p, 'pc-cloud-') >= 1 || (p.missoesCompletas || []).length >= 14,
    msg: () => ({
      title: 'Quem nunca perdeu um arquivo, vai perder.',
      body: 'Computador estraga, celular cai n\'água, pen drive some. A salvação tem nome: nuvem. Salve o que importa no Google Drive ou OneDrive — atualiza sozinho e você acessa de qualquer aparelho. Documentos, fotos da família, currículo. Faça isso ainda hoje.',
      tag: 'segurança', color: 'coral',
    }),
  },

  /* ────────────── BLOCO 13 — Mais motivação & marcos ────────────── */
  {
    id: 'g-mot-meio-curso',
    unica: true,
    cond: (p) => (p.missoesCompletas || []).length >= 50,
    msg: () => ({
      title: '50 missões. Pare e respire fundo.',
      body: 'Cinquenta. Cada uma foi uma escolha de sentar e aprender quando seria mais fácil não fazer nada. Isso não é sobre tecnologia — é sobre o tipo de pessoa que você está provando ser. Eu acompanho muitos alunos; poucos chegam aqui. Orgulho de você.',
      tag: 'celebra', color: 'honey',
    }),
  },
  {
    id: 'g-mot-trofeu-10',
    unica: true,
    cond: (p) => (p.trofeus || []).length >= 10,
    msg: () => ({
      title: '10 troféus — sua estante está enchendo',
      body: 'Dez conquistas guardadas. Num dia em que bater aquela dúvida de "será que eu consigo?", abra os troféus. Eles não mentem: você já conseguiu, dez vezes. O resto é repetir o que já sabe fazer.',
      tag: 'celebra', color: 'honey',
      acao: { tipo: 'rota', rota: '/trofeus' },
    }),
  },
  {
    id: 'g-mot-domingo',
    cooldown: 21,
    cond: (p) => (p.user?.streak || 0) >= 7,
    msg: () => ({
      title: 'O segredo não é intensidade — é não zerar',
      body: 'Você não precisa de dias heroicos. Precisa de não deixar o contador voltar a zero. Uma missão curta num dia ruim segura a corrente inteira. Constância vence talento que não aparece — e a sua já está virando hábito.',
      tag: 'motiva', color: 'sage',
    }),
  },
];

/** Resposta automática do mentor quando o aluno responde uma mensagem. */
const RESPOSTAS_AUTO = [
  'Boa. Anotado. Volto amanhã com a próxima.',
  'Perfeito. Continue do mesmo jeito.',
  'Entendi. Próxima missão já está no seu caminho.',
  'Combinado. Se travar em algo, me diz aqui.',
  'Show. Você está construindo um hábito de verdade.',
  'Beleza. Sem pressa — o ritmo certo é o que dá pra manter.',
  'Anotado aqui no caderninho. Te vejo na próxima.',
  'Fechou. Faz no seu tempo, eu não vou pra lugar nenhum.',
];

export function respostaAutomatica() {
  return RESPOSTAS_AUTO[Math.floor(Math.random() * RESPOSTAS_AUTO.length)];
}

/* Mapa de histórico de gerações (por id → ts da última geração).
   Reconstruído a partir do inboxExistente — não precisamos persistir extra. */
function ultimasGeracoes(inboxExistente) {
  const map = {};
  for (const m of inboxExistente) {
    if (!m.id) continue;
    if (!map[m.id] || m.ts > map[m.id]) map[m.id] = m.ts;
  }
  return map;
}

/** Gera/atualiza a inbox do mentor com base no progresso atual.
    Aplica cooldown / única / reaparição. */
export function gerarInbox(progresso, inboxExistente = []) {
  const historico = ultimasGeracoes(inboxExistente);
  const existentesNaoLidas = new Set(
    inboxExistente.filter(m => m.status === 'new').map(m => m.id)
  );
  const novas = [];
  const agora = Date.now();

  // Embaralha o pool em ordem determinística por dia (pra dar variedade
  // entre dias mas estabilidade dentro do mesmo dia)
  const seed = Math.floor(agora / DIA);
  const pool = [...POOL].sort((a, b) => {
    const ha = hash(a.id + seed);
    const hb = hash(b.id + seed);
    return ha - hb;
  });

  let i = 0;
  for (const item of pool) {
    // Se a mensagem ainda está "new" no inbox, não regenera
    if (existentesNaoLidas.has(item.id)) continue;
    if (!item.cond(progresso)) continue;

    // Única e já gerada antes → pula
    if (item.unica && historico[item.id]) continue;

    // Cooldown — só regenera se passou N dias
    if (item.cooldown && historico[item.id]) {
      const diasPassados = diasDesde(historico[item.id]);
      if (diasPassados < item.cooldown) continue;
    }

    const m = item.msg(progresso);
    if (!m) continue;

    novas.push({
      id: item.id,
      from: 'Carlos Mendes', role: 'Coordenador',
      ts: agora - i * 60_000, // espaça em minutos pra ordenação visual
      status: 'new',
      ...m,
    });
    i++;

    // Limita a 4 mensagens novas por geração — não inundar
    if (novas.length >= 4) break;
  }

  // Mantém as antigas (até 30 no histórico) e adiciona as novas no topo
  return [...novas, ...inboxExistente].slice(0, 30);
}

// Hash simples e determinístico pra ordenar o pool de forma estável por dia
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return h;
}

/** Sugestões de resposta rápida que o aluno pode mandar ao mentor. */
export const RESPOSTAS_RAPIDAS = [
  'Vou fazer agora.',
  'Pode deixar.',
  'Vou tentar amanhã, hoje estou cansado(a).',
  'Tive dificuldade — pode explicar mais?',
  'Concluí, valeu pela dica.',
  'Obrigado(a).',
];
