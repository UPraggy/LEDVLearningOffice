// ============================================================================
// CONTEÚDO — Inglês B1: Histórias e Mundo (en-b1-mundo)
// 1ª e 2ª condicional, linking words, narrar, leitura de notícias, projeto final.
// ============================================================================

export const EN_B1_MUNDO = {
  'en-b1-mundo-1': {
    trilhaId: 'en-b1-mundo', numero: 1, titulo: 'Primeira condicional (if + will)',
    tempoTotal: 12, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Se chover, eu fico em casa", "se você estudar, vai passar" — falar de condições e consequências reais é essencial. A primeira condicional faz exatamente isso, ligando uma condição a um resultado provável.',
      conceito: {
        titulo: 'Condições reais e seus resultados',
        texto: 'A primeira condicional fala de situações reais/prováveis no futuro: se a condição acontecer, o resultado acontece. A estrutura: If + present simple, ... will + verbo. "If it rains, I will stay home" (se chover, ficarei em casa). Repare: a parte do "if" fica no PRESENTE (não no futuro), mesmo falando do futuro. É a condicional do "provável".',
      },
      estrutura: {
        titulo: 'A estrutura da 1ª condicional',
        partes: [
          { simbolo: 'If +', desc: 'If + present simple (a condição): If it rains...' },
          { simbolo: 'will', desc: '..., will + verbo (o resultado): ...I will stay home.' },
          { simbolo: 'ordem', desc: 'Pode inverter: "I will stay home if it rains" (sem vírgula).' },
          { simbolo: 'atenção', desc: 'Depois do "if", PRESENTE (não "if it will rain").' },
        ],
      },
      exemplo: {
        titulo: 'Condição → resultado',
        celulas: [
          { ref: 'EN', valor: 'If it rains, I’ll stay home. — Se chover, fico em casa.' },
          { ref: 'EN', valor: 'If you study, you’ll pass. — Se estudar, vai passar.' },
          { ref: 'Invertido', valor: 'I’ll call you if I have time. — Te ligo se tiver tempo.' },
          { ref: 'Erro comum', valor: 'NÃO: "If it will rain" — depois de if, presente!' },
        ],
        formula: 'If + presente, ... will + verbo',
        resultado: 'Você fala de condições reais e consequências.',
        comentario: 'A regra de ouro: depois de "if" vai o PRESENTE, mesmo falando do futuro. O "will" fica só na outra parte. É a 1ª condicional, pra coisas prováveis ("se eu puder, eu vou").',
      },
      vocabulario: [
        { palavra: 'first conditional', def: '1ª condicional: condição real/provável → resultado (if + presente, will).' },
        { palavra: 'if', def: 'se — introduz a condição.' },
        { palavra: 'unless', def: 'a menos que / se não (Unless you hurry, you’ll be late).' },
      ],
      chave: [
        'If + presente, ... will + verbo',
        'Depois do "if", PRESENTE (não will)',
        'Pra situações reais e prováveis',
      ],
      porque: 'A primeira condicional aparece o tempo todo: combinar planos, fazer promessas, avisar consequências ("se você fizer X, acontece Y"). É essencial pra conversas sobre o futuro.',
    },
    pratica: {
      instrucao: 'Vamos montar condições reais sobre sua vida, em voz alta.',
      passos: [
        'Complete: "If it rains tomorrow, I’ll..."',
        'Complete: "If I have time, I’ll..."',
        'Faça uma promessa: "If you help me, I’ll..."',
        'Inverta a ordem: "I’ll ... if ..."',
        'Cuidado: depois de "if", use o presente (not will)',
        'Use "unless": "Unless you hurry, you’ll be late"',
        'Monte 4 frases na 1ª condicional',
      ],
    },
    desafio: {
      cenario: 'Faça 5 frases na 1ª condicional sobre situações reais da sua vida (planos, promessas, consequências).',
      requisitos: [
        'Usei "If + presente, will + verbo"',
        'Coloquei o presente depois do "if" (não will)',
        'Fiz pelo menos uma na ordem invertida',
        'Usei a forma curta (’ll)',
        'Pratiquei em voz alta',
      ],
      dica: 'O erro nº1: "If it will rain". Grave: depois de "if", PRESENTE. O futuro (will) vai só na outra metade. "If it rains, I will..."',
    },
    validacao: [
      'Sei a estrutura da 1ª condicional',
      'Uso presente depois do "if"',
      'Sei inverter a ordem',
      'Sei usar unless',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-mundo-2': {
    trilhaId: 'en-b1-mundo', numero: 2, titulo: 'Segunda condicional (if + would)',
    tempoTotal: 13, xp: 90, vertente: 'ingles',
    aula: {
      gancho: '"Se eu fosse rico, viajaria o mundo", "se eu pudesse, mudaria de carreira" — sonhos, hipóteses, situações imaginárias. A segunda condicional é a linguagem do "e se...?".',
      conceito: {
        titulo: 'Hipóteses e situações imaginárias',
        texto: 'A segunda condicional fala de situações irreais ou improváveis no presente/futuro — sonhos e hipóteses. A estrutura: If + past simple, ... would + verbo. "If I had money, I would travel" (se eu tivesse dinheiro, viajaria). Curiosidade: usa o passado na condição, mas NÃO fala do passado — é sobre uma situação imaginária agora. É a condicional do "se fosse".',
      },
      estrutura: {
        titulo: 'A estrutura da 2ª condicional',
        partes: [
          { simbolo: 'If +', desc: 'If + past simple (hipótese): If I had money...' },
          { simbolo: 'would', desc: '..., would + verbo: ...I would travel. (curto: I’d travel)' },
          { simbolo: 'were', desc: 'Com "to be", usa-se "were" pra todos: If I were you...' },
          { simbolo: '1ª x 2ª', desc: '1ª = real/provável (will); 2ª = imaginária (would).' },
        ],
      },
      exemplo: {
        titulo: 'Sonhos e conselhos',
        celulas: [
          { ref: 'Sonho', valor: 'If I had money, I’d travel the world.' },
          { ref: 'Hipótese', valor: 'If I were you, I’d study English. — Se eu fosse você...' },
          { ref: 'Conselho', valor: '"If I were you" = clássico pra dar conselho' },
          { ref: '1ª x 2ª', valor: 'If I have time (real) x If I had time (hipótese)' },
        ],
        formula: 'If + passado, ... would + verbo',
        resultado: 'Você fala de sonhos, hipóteses e dá conselhos.',
        comentario: '"If I were you, I would..." é a forma mais elegante de dar conselho em inglês ("se eu fosse você, eu..."). E note: na 2ª condicional, o "to be" vira "were" pra todos (If I were, if he were).',
      },
      vocabulario: [
        { palavra: 'second conditional', def: '2ª condicional: hipótese irreal (if + passado, would).' },
        { palavra: 'would / ’d', def: 'iria/-ria (condicional); curto: I’d, she’d.' },
        { palavra: 'If I were you', def: 'Se eu fosse você (dar conselho).' },
      ],
      chave: [
        'If + passado, ... would + verbo',
        'Pra hipóteses/sonhos (não passado real)',
        '"If I were you, I’d..." pra dar conselho',
      ],
      porque: 'A segunda condicional expressa sonhos, desejos e conselhos — assuntos ricos de qualquer conversa B1. E "If I were you..." é uma das formas mais úteis e elegantes de aconselhar.',
    },
    pratica: {
      instrucao: 'Vamos falar de sonhos e dar conselhos, em voz alta.',
      passos: [
        'Sonhe: "If I had a million dollars, I’d..."',
        'Hipótese: "If I lived in another country, I’d..."',
        'Dê conselho: "If I were you, I’d..."',
        'Use a forma curta: I’d, she’d, we’d',
        'Compare 1ª x 2ª: "If I have time" (real) x "If I had time" (sonho)',
        'Lembre: "to be" → were pra todos',
        'Monte 4 frases na 2ª condicional',
      ],
    },
    desafio: {
      cenario: 'Faça 5 frases na 2ª condicional: sonhos seus, hipóteses e um conselho com "If I were you".',
      requisitos: [
        'Usei "If + passado, would + verbo"',
        'Usei pra hipótese/sonho (não passado real)',
        'Usei "If I were you" num conselho',
        'Usei a forma curta (’d)',
        'Pratiquei em voz alta',
      ],
      dica: 'Não confunda com o passado: "If I had money" aqui NÃO é "se eu tinha" — é "se eu tivesse" (hipótese). O passado na condição é só a "forma"; o sentido é imaginário.',
    },
    validacao: [
      'Sei a estrutura da 2ª condicional',
      'Uso pra sonhos e hipóteses',
      'Sei dar conselho com "If I were you"',
      'Diferencio 1ª (real) de 2ª (imaginária)',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-mundo-3': {
    trilhaId: 'en-b1-mundo', numero: 3, titulo: 'Conectar ideias (linking words)',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Frases soltas soam "robóticas". O que torna a fala (e a escrita) fluida são os conectores: porque, mas, embora, então, além disso. Eles ligam suas ideias e te fazem soar avançado.',
      conceito: {
        titulo: 'A cola entre as ideias',
        texto: 'Linking words (conectores) ligam ideias e dão fluidez: because (porque, causa), but (mas, contraste), although (embora), so (então, consequência), also (também), however (no entanto). Usá-los transforma frases curtas e secas em discurso conectado — uma das marcas do B1. Eles funcionam tanto na fala quanto na escrita.',
      },
      estrutura: {
        titulo: 'Os conectores essenciais',
        partes: [
          { simbolo: '➡️', desc: 'Causa/consequência: because (porque), so (então), that’s why.' },
          { simbolo: '↔️', desc: 'Contraste: but (mas), although (embora), however (no entanto).' },
          { simbolo: '➕', desc: 'Adição: and (e), also (também), in addition (além disso).' },
          { simbolo: '🔢', desc: 'Sequência: first, then, after that, finally.' },
        ],
      },
      exemplo: {
        titulo: 'Conectando ideias',
        celulas: [
          { ref: 'Causa', valor: 'I study English because I want a better job.' },
          { ref: 'Contraste', valor: 'It’s difficult, but I like it. — É difícil, mas gosto.' },
          { ref: 'Embora', valor: 'Although it’s hard, I practice every day.' },
          { ref: 'Consequência', valor: 'I was tired, so I went home early.' },
        ],
        formula: 'ideia + conector (because/but/so/although) + ideia',
        resultado: 'Sua fala e escrita ficam fluidas e conectadas.',
        comentario: '"Although" e "but" dão contraste, mas em posições diferentes: "Although it’s hard, I like it" (no começo) ou "It’s hard, but I like it" (no meio). Não use os dois juntos na mesma frase.',
      },
      vocabulario: [
        { palavra: 'because / so', def: 'porque (causa) / então (consequência).' },
        { palavra: 'but / although / however', def: 'mas / embora / no entanto (contraste).' },
        { palavra: 'in addition / also', def: 'além disso / também (adição).' },
      ],
      chave: [
        'Conectores ligam ideias e dão fluidez',
        'Causa: because/so · Contraste: but/although/however',
        'Não use "although" e "but" juntos na mesma frase',
      ],
      porque: 'Conectores são o que transformam frases soltas em discurso fluente — na conversa, em e-mails, em textos. São uma das marcas mais visíveis do nível B1 e enriquecem tudo que você diz.',
    },
    pratica: {
      instrucao: 'Vamos conectar ideias suas, em voz alta.',
      passos: [
        'Dê uma razão: "I study English because..."',
        'Faça um contraste com "but": "It’s difficult, but..."',
        'Use "although": "Although it’s hard, I..."',
        'Use "so" (consequência): "I was tired, so I..."',
        'Adicione com "also" ou "in addition"',
        'Junte 2 frases curtas suas com um conector',
        'Monte um parágrafo curto bem conectado',
      ],
    },
    desafio: {
      cenario: 'Escreva e fale um parágrafo curto (sobre você ou um tema) usando pelo menos 4 conectores diferentes.',
      requisitos: [
        'Usei because/so (causa/consequência)',
        'Usei but/although/however (contraste)',
        'Usei and/also (adição)',
        'O texto ficou fluido (não frases soltas)',
        'Pratiquei em voz alta',
      ],
      dica: 'Pegue duas frases curtas suas e una com um conector. Esse hábito simples já eleva muito o seu inglês — de "frase, frase, frase" pra um discurso que flui.',
    },
    validacao: [
      'Conheço os conectores principais',
      'Uso causa/consequência (because, so)',
      'Uso contraste (but, although, however)',
      'Conecto ideias com fluidez',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-mundo-4': {
    trilhaId: 'en-b1-mundo', numero: 4, titulo: 'Narrar uma história',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Contar uma história — algo que te aconteceu, um filme, uma lembrança — é o auge da conversa. Junta passado, conectores e um pouco de emoção. É quando o inglês deixa de ser "exercício" e vira expressão.',
      conceito: {
        titulo: 'Do fato à história',
        texto: 'Narrar é mais que listar fatos no passado — é dar sequência, contexto e um "ponto". Você usa: past simple (ações), past continuous (cenário: "it was raining"), conectores de sequência (first, then, suddenly) e expressões de reação. Uma boa história tem começo (contexto), meio (o que aconteceu) e fim (desfecho/sentimento).',
      },
      estrutura: {
        titulo: 'Os ingredientes da narrativa',
        partes: [
          { simbolo: '🎬', desc: 'Cenário: past continuous — "It was raining and I was walking..."' },
          { simbolo: '➡️', desc: 'Ações: past simple — "...then I saw... I went..."' },
          { simbolo: '⚡', desc: 'Sequência/surpresa: first, then, after that, suddenly (de repente).' },
          { simbolo: '😮', desc: 'Reação/fecho: "It was amazing!" / "I was so happy!"' },
        ],
      },
      exemplo: {
        titulo: 'Uma mini-história',
        celulas: [
          { ref: 'Cenário', valor: 'Last week, I was walking in the park.' },
          { ref: 'Surpresa', valor: 'Suddenly, I saw an old friend!' },
          { ref: 'Ações', valor: 'We talked and then we had a coffee.' },
          { ref: 'Fecho', valor: 'It was a great surprise! — Foi uma ótima surpresa!' },
        ],
        formula: 'cenário (was -ing) + ações (past) + sequência + reação',
        resultado: 'Você conta histórias com começo, meio e fim.',
        comentario: 'O past continuous ("was/were + -ing") pinta o cenário ("it was raining"), e o past simple traz a ação ("then I saw..."). "Suddenly" (de repente) é ótimo pra criar surpresa na história.',
      },
      vocabulario: [
        { palavra: 'past continuous', def: 'was/were + verbo-ing — cenário/ação em andamento no passado.' },
        { palavra: 'suddenly', def: 'de repente (sâ-den-li) — cria surpresa na narrativa.' },
        { palavra: 'in the end / finally', def: 'no fim / finalmente — fecho da história.' },
      ],
      chave: [
        'Cenário com past continuous (was raining)',
        'Ações com past simple + sequência (then, suddenly)',
        'Toda história tem começo, meio e fim/reação',
      ],
      porque: 'Narrar histórias é o ápice da conversa cotidiana — contar o que te aconteceu, um perrengue de viagem, uma lembrança. Reúne todo o passado e os conectores, e é quando você realmente "conversa" em inglês.',
    },
    pratica: {
      instrucao: 'Pense numa história curta e real sua. Vamos narrá-la em voz alta.',
      passos: [
        'Comece pelo cenário: "Last week/year, I was ...-ing..."',
        'Traga a ação principal: "Then, I ..." (past simple)',
        'Use "suddenly" pra uma surpresa',
        'Conecte com then, after that',
        'Termine com uma reação: "It was ..." (amazing, funny, scary)',
        'Conte a história inteira, do começo ao fim',
        'Repita melhorando a fluidez',
      ],
    },
    desafio: {
      cenario: 'Conte uma pequena história real (uma viagem, um encontro, um perrengue) com cenário, ações em sequência e um fecho.',
      requisitos: [
        'Usei past continuous pro cenário',
        'Usei past simple pras ações',
        'Usei conectores de sequência (then, suddenly)',
        'Dei um fecho/reação à história',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Tenha 1-2 "histórias de bolso" prontas em inglês (um perrengue de viagem, uma história engraçada). Elas sempre rendem em conversas — e praticá-las te deixa fluente nelas.',
    },
    validacao: [
      'Sei criar cenário (past continuous)',
      'Narro ações em sequência (past simple)',
      'Uso conectores de narrativa',
      'Dou um fecho à história',
      'Pratiquei em voz alta / gravei',
    ],
  },

  'en-b1-mundo-5': {
    trilhaId: 'en-b1-mundo', numero: 5, titulo: 'Entender notícias e textos',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Ler uma notícia, um artigo ou uma postagem em inglês — sem traduzir palavra por palavra. No B1, você aprende a captar o sentido geral e adivinhar o que não sabe pelo contexto. Isso abre o mundo da informação.',
      conceito: {
        titulo: 'Ler pra entender, não pra traduzir tudo',
        texto: 'Você NÃO precisa entender cada palavra pra entender um texto. Estratégias de leitura B1: ler o título e a primeira frase (a ideia geral), procurar palavras-chave, adivinhar pelo contexto, e ignorar palavras que não atrapalham. Cognatos (palavras parecidas com o português: information, important, possible) ajudam muito. Ler assim te dá acesso a notícias, artigos e conteúdo do mundo todo.',
      },
      estrutura: {
        titulo: 'Estratégias de leitura',
        partes: [
          { simbolo: '👀', desc: 'Visão geral: leia título + 1ª frase pra captar o tema.' },
          { simbolo: '🔑', desc: 'Palavras-chave: foque nas que carregam o sentido (substantivos, verbos).' },
          { simbolo: '🧩', desc: 'Adivinhe pelo contexto: o que faz sentido ali? (não corra pro tradutor).' },
          { simbolo: '🤝', desc: 'Cognatos: information, important, possible, family — parecidas com o PT.' },
        ],
      },
      exemplo: {
        titulo: 'Lendo com estratégia',
        celulas: [
          { ref: 'Título', valor: 'Leia primeiro → dá o tema geral' },
          { ref: 'Cognatos', valor: 'information, problem, decide, continue (≈ PT)' },
          { ref: 'Contexto', valor: 'Palavra nova? Veja a frase toda antes de traduzir' },
          { ref: 'Meta', valor: 'Entender a IDEIA, não cada palavra' },
        ],
        formula: 'título → palavras-chave → contexto → cognatos',
        resultado: 'Você entende textos sem travar em cada palavra.',
        comentario: 'Cuidado com falsos cognatos (parecem, mas enganam): "library" = biblioteca (não livraria); "push" = empurrar (não puxar); "actually" = na verdade. Mas a maioria dos cognatos AJUDA — confie neles.',
      },
      vocabulario: [
        { palavra: 'cognate', def: 'palavra parecida entre idiomas (information ≈ informação).' },
        { palavra: 'false friend', def: 'falso cognato: parece, mas significa outra coisa (library = biblioteca).' },
        { palavra: 'skim / scan', def: 'ler por cima (ideia geral) / procurar info específica.' },
      ],
      chave: [
        'Entenda a IDEIA, não cada palavra',
        'Use título, palavras-chave e contexto',
        'Cognatos ajudam; cuidado com falsos cognatos',
      ],
      porque: 'Ler em inglês abre o mundo: notícias, artigos, manuais, conteúdo profissional, internet. A estratégia de captar o sentido (sem traduzir tudo) é o que torna a leitura viável e prazerosa.',
    },
    pratica: {
      instrucao: 'Pegue um texto curto em inglês (notícia, post, legenda). Vamos praticar a leitura estratégica.',
      passos: [
        'Leia só o título e a primeira frase — qual é o tema?',
        'Sublinhe (mentalmente) as palavras-chave',
        'Identifique os cognatos (parecidos com o português)',
        'Encontre uma palavra que você não sabe e ADIVINHE pelo contexto',
        'Resuma a ideia geral do texto em uma frase (em português ou inglês)',
        'Só depois, se quiser, confira 1-2 palavras no tradutor',
        'Repita com outro texto curto',
      ],
    },
    desafio: {
      cenario: 'Leia um texto curto real em inglês e resuma a ideia geral, sem traduzir palavra por palavra.',
      requisitos: [
        'Captei o tema pelo título/1ª frase',
        'Identifiquei palavras-chave e cognatos',
        'Adivinhei pelo menos uma palavra pelo contexto',
        'Resumi a ideia geral',
        'Não traduzi tudo palavra por palavra',
      ],
      dica: 'Comece com textos curtos sobre temas que você JÁ conhece (uma notícia que você viu em português). Conhecer o assunto ajuda muito a adivinhar o vocabulário novo.',
    },
    validacao: [
      'Sei captar a ideia geral',
      'Uso título, palavras-chave e contexto',
      'Reconheço cognatos',
      'Adivinho palavras pelo contexto',
      'Não dependo de traduzir tudo',
    ],
  },

  'en-b1-mundo-6': {
    trilhaId: 'en-b1-mundo', numero: 6, titulo: 'Projeto final: sua história em inglês',
    tempoTotal: 20, xp: 130, vertente: 'ingles',
    aula: {
      gancho: 'O projeto final de TODO o módulo de inglês: contar uma parte da sua vida em inglês — quem você é, o que já viveu, seus sonhos. Reúne tudo, do A1 ao B1. É a prova viva da sua jornada do "hello" à conversa real.',
      conceito: {
        titulo: 'Sua história, do "hello" ao B1',
        texto: 'Este é o projeto que coroa o módulo inteiro. Você vai construir e contar uma narrativa pessoal: apresentação (A1), sua rotina e experiências (A2/present perfect), uma história que viveu (passado/narrativa), suas opiniões e seus sonhos (condicionais), tudo conectado (linking words). É a sua história — e a prova de que você atravessou do iniciante absoluto à conversação B1.',
      },
      estrutura: {
        titulo: 'Os capítulos da sua história',
        partes: [
          { simbolo: '👤', desc: 'Quem você é (A1): nome, origem, família, o que faz.' },
          { simbolo: '🌟', desc: 'Experiências (B1): "I have..." — coisas que você já viveu.' },
          { simbolo: '📖', desc: 'Uma história (passado): algo marcante que aconteceu.' },
          { simbolo: '🔮', desc: 'Sonhos (2ª condicional): "If I could, I would..."' },
        ],
      },
      exemplo: {
        titulo: 'Trechos da sua história',
        celulas: [
          { ref: 'Quem', valor: 'I’m Maria. I’m from Brazil and I have two children.' },
          { ref: 'Experiência', valor: 'I have worked as a cook for 20 years.' },
          { ref: 'História', valor: 'Last year, I started learning English. It was hard, but...' },
          { ref: 'Sonho', valor: 'If I could, I would travel and use my English!' },
        ],
        formula: 'apresentação + experiências + história + sonhos, tudo conectado',
        resultado: 'Sua história de vida, contada em inglês.',
        comentario: 'Grave a sua história completa. Depois, ouça TODAS as suas gravações desde o A1, em ordem. A evolução vai te emocionar — você saiu do "Hi, my name is..." pra contar sua vida em inglês. Isso é uma conquista enorme. Be proud!',
      },
      vocabulario: [
        { palavra: 'my story / my journey', def: 'minha história / minha jornada.' },
        { palavra: 'I’m proud of...', def: 'Tenho orgulho de... (I’m proud of my progress).' },
        { palavra: 'I’ve come a long way', def: 'Eu evoluí muito / cheguei longe.' },
      ],
      chave: [
        'Reúna TUDO: apresentação (A1) + experiências/passado (A2/B1) + sonhos (condicional)',
        'Conecte com linking words pra fluir',
        'Grave e compare com o A1 — celebre a jornada',
      ],
      porque: 'Este projeto final coroa todo o módulo: você conta sua própria história em inglês, do iniciante ao B1. É a prova concreta — e emocionante — de uma jornada completa, e a base pra você continuar evoluindo com confiança.',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos. Construa e ensaie a sua história em inglês, usando tudo do A1 ao B1.',
      passos: [
        'Capítulo 1 — quem você é (A1): apresentação, família, origem',
        'Capítulo 2 — experiências (B1): "I have..." + o que você já viveu/fez',
        'Capítulo 3 — uma história (passado): narre algo marcante (cenário + ações + fecho)',
        'Capítulo 4 — sonhos (2ª condicional): "If I could, I would..."',
        'Conecte tudo com linking words (because, but, so, and)',
        'Ensaie em voz alta, devagar, melhorando a fluidez',
        'Grave a história completa — e ouça suas gravações antigas pra comparar',
      ],
    },
    desafio: {
      cenario: 'Conte a sua história em inglês (escrita E falada/gravada): quem você é, experiências, uma história marcante e seus sonhos — tudo conectado.',
      requisitos: [
        'Apresentei quem sou (A1)',
        'Falei de experiências com present perfect',
        'Narrei uma história no passado',
        'Falei de sonhos com a 2ª condicional',
        'Conectei tudo com linking words',
        'Gravei a história completa',
      ],
      dica: 'PARABÉNS — você concluiu TODO o módulo de Inglês, do A1 ao B1! 🎉🌍 Você saiu do "Hello" e chegou a contar sua história, dar opiniões e usar inglês no trabalho. Continue praticando (conversas, leituras, a IA como parceira) e o inglês vai virar parte de você. You did it — be proud of your journey!',
    },
    validacao: [
      'Apresentei quem sou (A1)',
      'Falei experiências (present perfect)',
      'Narrei uma história (passado)',
      'Falei sonhos (2ª condicional)',
      'Conectei tudo com fluidez',
      'Gravei minha história — concluí o B1!',
    ],
  },
};
