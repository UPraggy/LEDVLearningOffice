// ============================================================================
// CONTEÚDO — Inglês A2: Planos e Futuro (en-a2-planos)
// going to, will, present continuous (futuro), convites/sugestões.
// ============================================================================

export const EN_A2_PLANOS = {
  'en-a2-planos-1': {
    trilhaId: 'en-a2-planos', numero: 1, titulo: 'Going to (planos)',
    tempoTotal: 11, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Vou viajar", "vamos estudar", "ela vai trabalhar" — falar de planos é olhar pra frente. O jeito mais comum pra planos em inglês é o "going to", e a estrutura é fácil de pegar.',
      conceito: {
        titulo: 'Planos e intenções: going to',
        texto: 'Usamos "be going to + verbo" pra falar de planos e intenções (coisas que você já decidiu fazer). A estrutura é: pessoa + am/is/are + going to + verbo. "I’m going to travel" (vou viajar). Repare que volta o "to be" (am/is/are) que você já domina — o "going to" se apoia nele.',
      },
      estrutura: {
        titulo: 'A estrutura do going to',
        partes: [
          { simbolo: 'I', desc: 'I am going to + verbo: I’m going to study.' },
          { simbolo: 'he/she', desc: 'He/She is going to...: She’s going to travel.' },
          { simbolo: 'we/they', desc: 'We/They are going to...: They’re going to move.' },
          { simbolo: 'negativo', desc: 'I’m not going to... / She isn’t going to...' },
        ],
      },
      exemplo: {
        titulo: 'Falando de planos',
        celulas: [
          { ref: 'EN', valor: 'I’m going to travel next month. — Vou viajar mês que vem.' },
          { ref: 'EN', valor: 'She’s going to study English. — Ela vai estudar inglês.' },
          { ref: 'Pergunta', valor: 'Are you going to work tomorrow? — Você vai trabalhar amanhã?' },
          { ref: 'Negativo', valor: 'We’re not going to stay. — Não vamos ficar.' },
        ],
        formula: 'pessoa + am/is/are + going to + verbo',
        resultado: 'Você fala de planos e intenções.',
        comentario: 'Marcadores de futuro úteis: tomorrow (amanhã), next week/month (próxima semana/mês). E como o "going to" usa o "to be", você já sabia metade dessa estrutura!',
      },
      vocabulario: [
        { palavra: 'going to', def: 'vou/vai (planos): be going to + verbo.' },
        { palavra: 'tomorrow', def: 'amanhã (tumórou).' },
        { palavra: 'next...', def: 'próximo(a): next week, next month, next year.' },
      ],
      chave: [
        '"be going to + verbo" pra planos e intenções',
        'Apoia-se no "to be" (am/is/are)',
        'Marcadores: tomorrow, next week/month',
      ],
      porque: 'Falar de planos é constante: o que você vai fazer hoje, no fim de semana, nas férias. O "going to" é o jeito mais usado pra isso — e reaproveita o "to be" que você já domina.',
    },
    pratica: {
      instrucao: 'Pense nos seus próximos dias. Vamos falar de planos, em voz alta.',
      passos: [
        'Diga um plano seu: "I’m going to..." + verbo',
        'Diga um plano pra amanhã: "Tomorrow, I’m going to..."',
        'Fale do plano de outra pessoa: "She’s going to..."',
        'Negue: "I’m not going to..."',
        'Pergunte: "Are you going to...?"',
        'Use marcadores: next week, next month',
        'Monte 4 frases de planos',
      ],
    },
    desafio: {
      cenario: 'Conte 5 planos seus (e de pessoas próximas) usando "going to" — afirmativo, negativo e uma pergunta.',
      requisitos: [
        'Usei "be going to + verbo"',
        'Apoiei no "to be" correto (am/is/are)',
        'Fiz uma frase negativa',
        'Fiz uma pergunta (Are you going to...?)',
        'Usei marcadores de futuro',
      ],
      dica: 'O "going to" é pra planos JÁ decididos ("I’m going to visit my mother on Sunday"). Na próxima missão você verá o "will", que é mais pra decisões na hora e previsões.',
    },
    validacao: [
      'Sei a estrutura "going to"',
      'Apoio no "to be" correto',
      'Sei negar e perguntar',
      'Uso marcadores de futuro',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-planos-2': {
    trilhaId: 'en-a2-planos', numero: 2, titulo: 'Will (decisões e previsões)',
    tempoTotal: 11, xp: 70, vertente: 'ingles',
    aula: {
      gancho: '"Eu ajudo!", "vai chover", "acho que vai dar certo" — pra decisões na hora e previsões, o inglês usa "will". É curtinho (’ll) e resolve outro lado do futuro.',
      conceito: {
        titulo: 'Will: decisões do momento e previsões',
        texto: 'Enquanto "going to" é pra planos decididos, "will" é pra: decisões na hora ("I’ll help you" — eu ajudo!), previsões ("It will rain" — vai chover) e promessas. A estrutura é simples e IGUAL pra todos: will + verbo base. A forma curta é ’ll (I’ll, she’ll). Negativo: won’t (= will not).',
      },
      estrutura: {
        titulo: 'A estrutura do will',
        partes: [
          { simbolo: 'will', desc: 'pessoa + will + verbo base (igual pra todos): I will go / She will go.' },
          { simbolo: "'ll", desc: 'forma curta: I’ll, you’ll, she’ll, we’ll.' },
          { simbolo: "won't", desc: 'negativo: won’t = will not (I won’t go).' },
          { simbolo: 'uso', desc: 'decisão na hora ("I’ll help!"), previsão ("It will rain").' },
        ],
      },
      exemplo: {
        titulo: 'Will em ação',
        celulas: [
          { ref: 'Decisão', valor: 'I’ll help you. — Eu te ajudo! (decisão na hora)' },
          { ref: 'Previsão', valor: 'It will rain tomorrow. — Vai chover amanhã.' },
          { ref: 'Promessa', valor: 'I’ll call you. — Eu te ligo.' },
          { ref: 'Negativo', valor: 'I won’t be late. — Não vou me atrasar.' },
        ],
        formula: 'will + verbo base (igual pra todos) · curto: ’ll · negativo: won’t',
        resultado: 'Você decide na hora e faz previsões.',
        comentario: 'going to x will: planejou antes → going to ("I’m going to travel"); decidiu agora → will ("Ok, I’ll go with you!"). Pra previsões, ambos servem, mas "will" é muito comum ("It will be sunny").',
      },
      vocabulario: [
        { palavra: 'will / ’ll', def: 'auxiliar de futuro (decisão/previsão); curto: ’ll.' },
        { palavra: "won't", def: 'não (futuro): will not.' },
        { palavra: 'I think...', def: 'Eu acho... — combina com will pra previsões (I think it’ll rain).' },
      ],
      chave: [
        'will + verbo base (igual pra todos)',
        'Uso: decisão na hora, previsão, promessa',
        'Curto: ’ll · negativo: won’t',
      ],
      porque: 'O "will" cobre o lado do futuro que o "going to" não cobre: reações na hora, previsões e promessas. Junto com o "going to", você fala de futuro em qualquer situação.',
    },
    pratica: {
      instrucao: 'Vamos praticar decisões e previsões, em voz alta.',
      passos: [
        'Ofereça ajuda (decisão na hora): "I’ll help you"',
        'Faça uma previsão: "It will rain tomorrow"',
        'Faça uma promessa: "I’ll call you later"',
        'Use a forma curta: I’ll, she’ll, we’ll',
        'Negue: "I won’t be late"',
        'Combine com "I think": "I think it’ll be sunny"',
        'Monte 4 frases com will',
      ],
    },
    desafio: {
      cenario: 'Faça 5 frases com "will": decisões na hora, previsões e uma promessa — incluindo uma negativa (won’t).',
      requisitos: [
        'Usei will + verbo base',
        'Fiz uma decisão na hora ("I’ll...")',
        'Fiz uma previsão',
        'Usei a forma curta (’ll)',
        'Usei won’t numa negativa',
      ],
      dica: 'Regra prática: já era plano → "going to". Decidiu agora, no susto, ou é palpite → "will". Não se preocupe em acertar 100% — nativos às vezes usam os dois pra a mesma coisa.',
    },
    validacao: [
      'Sei a estrutura "will + base"',
      'Uso pra decisões e previsões',
      'Uso a forma curta ’ll',
      'Sei won’t (negativo)',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-planos-3': {
    trilhaId: 'en-a2-planos', numero: 3, titulo: 'Present continuous (agora e futuro)',
    tempoTotal: 11, xp: 70, vertente: 'ingles',
    aula: {
      gancho: '"Estou trabalhando agora", "estamos nos encontrando amanhã" — o present continuous mostra o que acontece AGORA, e também serve pra planos já marcados. É o tempo do "-ing" que você já viu de relance.',
      conceito: {
        titulo: 'Ações em andamento (e planos marcados)',
        texto: 'O present continuous descreve algo acontecendo AGORA: "I’m working" (estou trabalhando). A estrutura é: be (am/is/are) + verbo-ing. Curiosidade útil: ele também serve pra planos JÁ MARCADOS no futuro ("I’m meeting her tomorrow" — vou me encontrar com ela amanhã). De novo, o "to be" é a base de tudo.',
      },
      estrutura: {
        titulo: 'A estrutura -ing',
        partes: [
          { simbolo: 'be + ing', desc: 'am/is/are + verbo-ing: I’m working, She’s eating.' },
          { simbolo: 'agora', desc: 'ação em andamento: "I’m studying now."' },
          { simbolo: 'futuro', desc: 'plano marcado: "I’m meeting John tomorrow."' },
          { simbolo: 'spelling', desc: 'work→working; mas run→running, make→making.' },
        ],
      },
      exemplo: {
        titulo: 'Agora x futuro marcado',
        celulas: [
          { ref: 'Agora', valor: 'I’m working now. — Estou trabalhando agora.' },
          { ref: 'Agora', valor: 'She’s cooking dinner. — Ela está cozinhando o jantar.' },
          { ref: 'Futuro', valor: 'We’re traveling next week. — Vamos viajar (já marcado).' },
          { ref: 'Pergunta', valor: 'What are you doing? — O que você está fazendo?' },
        ],
        formula: 'am/is/are + verbo-ing (agora OU plano marcado)',
        resultado: 'Você fala do agora e de planos já agendados.',
        comentario: 'Diferença útil: present simple = rotina/hábito ("I work every day"); present continuous = agora ("I’m working now"). E "What are you doing?" é uma pergunta super comum no dia a dia.',
      },
      vocabulario: [
        { palavra: 'present continuous', def: 'be + verbo-ing — ação em andamento ou plano marcado.' },
        { palavra: 'now / right now', def: 'agora / agora mesmo.' },
        { palavra: 'at the moment', def: 'no momento — marca o "agora".' },
      ],
      chave: [
        'be (am/is/are) + verbo-ing',
        'Uso: agora (I’m working) e plano marcado (I’m meeting him tomorrow)',
        'Diferente do present simple (rotina x agora)',
      ],
      porque: 'O present continuous é essencial pra falar do que está acontecendo e de planos agendados. E reforça o "to be" e o verbo-ing — estruturas que aparecem o tempo todo no inglês.',
    },
    pratica: {
      instrucao: 'Olhe ao seu redor e pense no agora. Vamos praticar em voz alta.',
      passos: [
        'Diga o que você está fazendo agora: "I’m..." + verbo-ing (studying)',
        'Diga o que alguém perto está fazendo: "He’s/She’s ...-ing"',
        'Pergunte: "What are you doing?"',
        'Use pra plano marcado: "I’m meeting a friend tomorrow"',
        'Compare: "I work every day" (rotina) x "I’m working now" (agora)',
        'Pratique spelling: running, making, sitting',
        'Monte 4 frases (agora e futuro marcado)',
      ],
    },
    desafio: {
      cenario: 'Descreva o que está acontecendo agora (3 frases) e um plano já marcado seu, usando o present continuous.',
      requisitos: [
        'Usei be + verbo-ing pro agora',
        'Usei pro plano marcado (futuro)',
        'Acertei o spelling do -ing (running, making)',
        'Diferenciei do present simple (rotina)',
        'Pratiquei em voz alta',
      ],
      dica: 'Não confunda: "I work" (rotina, sempre) x "I’m working" (agora, neste momento). A presença do -ing e do "to be" marca o "agora".',
    },
    validacao: [
      'Sei a estrutura be + verbo-ing',
      'Uso pro agora e pro plano marcado',
      'Acerto o spelling do -ing',
      'Diferencio do present simple',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-planos-4': {
    trilhaId: 'en-a2-planos', numero: 4, titulo: 'Convites e sugestões',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Vamos ao cinema?", "que tal um café?", "você gostaria de...?" — convidar e sugerir é o que transforma um papo em encontro. São frases curtas que abrem portas sociais.',
      conceito: {
        titulo: 'Convidar, sugerir e responder',
        texto: 'Há frases prontas pra convites e sugestões: "Let’s..." (vamos...), "Would you like to...?" (você gostaria de...?), "How about...?" / "What about...?" (que tal...?). E pra responder: aceitar ("Sure!", "I’d love to!") ou recusar com educação ("Sorry, I can’t"). São essenciais pra a vida social em inglês.',
      },
      estrutura: {
        titulo: 'Convites e respostas',
        partes: [
          { simbolo: "Let's", desc: "Let’s + verbo base: Let’s go to the cinema. (vamos...)" },
          { simbolo: 'Would', desc: 'Would you like to + verbo?: Would you like to have coffee?' },
          { simbolo: 'How about', desc: 'How about + verbo-ing/coisa?: How about going out?' },
          { simbolo: 'respostas', desc: 'Aceitar: Sure! / I’d love to! · Recusar: Sorry, I can’t.' },
        ],
      },
      exemplo: {
        titulo: 'Convidando',
        celulas: [
          { ref: 'Convite', valor: 'Let’s go to the cinema! — Vamos ao cinema!' },
          { ref: 'Convite', valor: 'Would you like to have dinner? — Gostaria de jantar?' },
          { ref: 'Sugestão', valor: 'How about Saturday? — Que tal sábado?' },
          { ref: 'Resposta', valor: 'Sure, I’d love to! / Sorry, I can’t.' },
        ],
        formula: "Let’s + base · Would you like to + verbo · How about + -ing",
        resultado: 'Você convida, sugere e responde convites.',
        comentario: '"I’d love to!" (eu adoraria!) é a forma mais calorosa de aceitar. E pra recusar com educação: "Sorry, I can’t, but thanks!" — recusar bem é tão importante quanto convidar.',
      },
      vocabulario: [
        { palavra: "Let's...", def: 'Vamos... (sugestão para fazer junto): Let’s eat.' },
        { palavra: 'Would you like to...?', def: 'Você gostaria de...? (convite educado).' },
        { palavra: 'How/What about...?', def: 'Que tal...? (sugestão).' },
      ],
      chave: [
        "Let’s + verbo base (vamos...)",
        'Would you like to...? (convite educado)',
        'Aceitar: Sure!/I’d love to! · Recusar: Sorry, I can’t',
      ],
      porque: 'Convidar e sugerir é a base da vida social em inglês — marcar encontros, fazer programas, interagir. São frases curtas de altíssimo retorno em qualquer conversa.',
    },
    pratica: {
      instrucao: 'Vamos praticar convites e respostas, em voz alta (faça os dois lados).',
      passos: [
        'Faça um convite com Let’s: "Let’s have coffee!"',
        'Convide com Would: "Would you like to go out?"',
        'Sugira com How about: "How about Saturday?"',
        'Aceite: "Sure! I’d love to!"',
        'Recuse com educação: "Sorry, I can’t, but thanks!"',
        'Combine: convite → resposta → "How about [dia/hora]?"',
        'Encene um convite completo',
      ],
    },
    desafio: {
      cenario: 'Encene um diálogo de convite: faça 2 convites/sugestões diferentes e responda (um aceitando, um recusando com educação).',
      requisitos: [
        'Usei "Let’s..." ou "Would you like to...?"',
        'Usei "How/What about...?"',
        'Aceitei um convite (Sure/I’d love to)',
        'Recusei outro com educação (Sorry, I can’t)',
        'Pratiquei em voz alta',
      ],
      dica: 'Decore 1 forma de convidar ("Would you like to...?") e 2 respostas ("I’d love to!" / "Sorry, I can’t"). Com isso você participa de qualquer combinação social em inglês.',
    },
    validacao: [
      'Sei convidar (Let’s, Would you like to)',
      'Sei sugerir (How about)',
      'Sei aceitar com entusiasmo',
      'Sei recusar com educação',
      'Pratiquei em voz alta',
    ],
  },

  'en-a2-planos-5': {
    trilhaId: 'en-a2-planos', numero: 5, titulo: 'Projeto: planeje uma viagem',
    tempoTotal: 18, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: planejar uma viagem em inglês — pra onde vai, o que vai fazer, e convidar alguém. Usa going to, will, present continuous e convites. Um projeto que mistura sonho e prática.',
      conceito: {
        titulo: 'Falar do futuro, de ponta a ponta',
        texto: 'Este projeto reúne o A2 do futuro: going to (planos), will (previsões/decisões), present continuous (planos marcados) e convites. Você vai planejar uma viagem (real ou dos sonhos): destino, o que vai fazer, previsões, e convidar alguém pra ir junto. É uma fala rica que mostra domínio de todas as formas de futuro.',
      },
      estrutura: {
        titulo: 'O plano de viagem',
        partes: [
          { simbolo: '🎯', desc: 'Destino e plano: "I’m going to travel to..."' },
          { simbolo: '📋', desc: 'O que fazer: "I’m going to visit... / I’ll see..."' },
          { simbolo: '🌤️', desc: 'Previsão: "It will be sunny / It’ll be fun."' },
          { simbolo: '👥', desc: 'Convite: "Would you like to come?" / "Let’s go together!"' },
        ],
      },
      exemplo: {
        titulo: 'Planejando a viagem',
        celulas: [
          { ref: 'Plano', valor: 'Next month, I’m going to travel to Portugal.' },
          { ref: 'Fazer', valor: 'I’m going to visit Lisbon and try the food.' },
          { ref: 'Previsão', valor: 'I think it’ll be amazing!' },
          { ref: 'Convite', valor: 'Would you like to come with me?' },
        ],
        formula: 'going to (planos) + will (previsão) + convite',
        resultado: 'Um plano de viagem completo, em inglês.',
        comentario: 'Grave seu plano de viagem. Misturar going to + will + convite numa fala só mostra que você domina o futuro em inglês — um marco importante do A2. Sonhe alto: pode ser uma viagem real ou imaginária!',
      },
      vocabulario: [
        { palavra: 'trip / travel', def: 'viagem (substantivo) / viajar (verbo).' },
        { palavra: 'visit', def: 'visitar (vízit).' },
        { palavra: 'I can’t wait!', def: 'Mal posso esperar! (expressão de empolgação).' },
      ],
      chave: [
        'Junte going to + will + present continuous + convite',
        'Planeje destino, atividades, previsão e convide alguém',
        'Pratique em voz alta e grave',
      ],
      porque: 'Planejar uma viagem reúne todas as formas de futuro num contexto motivador e prático. Concluí-lo prova que você fala do que VAI fazer em inglês — fechando o nível A2 com chave de ouro.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Planeje uma viagem (real ou dos sonhos) em inglês, usando tudo da trilha.',
      passos: [
        'Diga o destino e quando: "Next month, I’m going to travel to..."',
        'Diga 3 coisas que vai fazer: "I’m going to visit... / I’ll try..."',
        'Faça uma previsão: "I think it’ll be..."',
        'Convide alguém: "Would you like to come?" / "Let’s go together!"',
        'Use marcadores de futuro (next week/month, tomorrow)',
        'Leia em voz alta, ajuste e grave',
        'Expresse empolgação: "I can’t wait!"',
      ],
    },
    desafio: {
      cenario: 'Apresente um plano de viagem em inglês (escrito E falado/gravado): destino, atividades, uma previsão e um convite.',
      requisitos: [
        'Usei "going to" pros planos',
        'Usei "will" numa previsão/decisão',
        'Usei present continuous ou marcadores de futuro',
        'Fiz um convite (Would you like to / Let’s)',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Parabéns — você concluiu o NÍVEL A2 de inglês! 🎉 Agora você pede comida, se orienta na cidade, conta o passado e fala de planos. Isso já é se virar numa viagem inteira! No B1, o inglês vira conversa de verdade. You’re doing amazing!',
    },
    validacao: [
      'Usei going to pros planos',
      'Usei will pra previsões',
      'Usei present continuous / marcadores',
      'Fiz um convite',
      'Pratiquei em voz alta / gravei',
      'Concluí o nível A2',
    ],
  },
};
