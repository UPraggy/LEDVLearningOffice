// ============================================================================
// CONTEÚDO — Inglês B1: Conversação e Opiniões (en-b1-conversa)
// present perfect, present perfect x past simple, opinar, manter conversa,
// perguntas indiretas.
// ============================================================================

export const EN_B1_CONVERSA = {
  'en-b1-conversa-1': {
    trilhaId: 'en-b1-conversa', numero: 1, titulo: 'Present perfect (já / nunca)',
    tempoTotal: 13, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Você já foi à praia?", "nunca comi sushi", "já estive em Portugal" — o present perfect liga o passado ao agora. É a porta de entrada do B1 e abre conversas riquíssimas sobre experiências.',
      conceito: {
        titulo: 'Experiências da vida, sem dizer quando',
        texto: 'O present perfect fala de experiências e coisas que aconteceram em algum momento (sem dizer exatamente quando) e que importam pro agora. A estrutura: have/has + verbo no particípio (a 3ª forma). "I have been to Paris" (já estive em Paris). É o tempo do "já" (ever/already) e do "nunca" (never). Para particípios regulares, é igual ao passado (worked); irregulares têm a 3ª forma (go → gone, see → seen).',
      },
      estrutura: {
        titulo: 'A estrutura do present perfect',
        partes: [
          { simbolo: 'have/has', desc: 'I/you/we/they have + particípio · he/she/it has + particípio.' },
          { simbolo: 'particípio', desc: 'regular = -ed (worked); irregular = 3ª forma (gone, seen, eaten, done).' },
          { simbolo: 'ever', desc: 'Have you ever...? — Você já alguma vez...? (pergunta de experiência).' },
          { simbolo: 'never', desc: 'I have never... — Eu nunca... (experiência negativa).' },
        ],
      },
      exemplo: {
        titulo: 'Falando de experiências',
        celulas: [
          { ref: 'EN', valor: 'Have you ever been to Paris? — Você já esteve em Paris?' },
          { ref: 'EN', valor: 'I have never eaten sushi. — Nunca comi sushi.' },
          { ref: 'EN', valor: 'She has visited Brazil. — Ela já visitou o Brasil.' },
          { ref: 'já/ainda', valor: 'I’ve already finished / I haven’t finished yet.' },
        ],
        formula: 'have/has + particípio (3ª forma)',
        resultado: 'Você fala de experiências de vida.',
        comentario: '"Been" (estar/ir e voltar) x "gone" (ter ido e ainda estar lá): "I’ve been to Paris" (já fui e voltei) x "He’s gone to Paris" (foi e está lá). No começo, foque em "Have you ever...?" e "I’ve never..." — são as frases mais úteis.',
      },
      vocabulario: [
        { palavra: 'present perfect', def: 'have/has + particípio — experiências e ações ligadas ao agora.' },
        { palavra: 'ever / never', def: 'já (alguma vez) / nunca — em experiências.' },
        { palavra: 'already / yet', def: 'já (afirmativa) / ainda (negativa/pergunta).' },
      ],
      chave: [
        'have/has + particípio (3ª forma do verbo)',
        '"Have you ever...?" / "I’ve never..." pra experiências',
        'been (foi e voltou) x gone (foi e está lá)',
      ],
      porque: 'O present perfect destrava conversas sobre experiências — viagens, comidas, coisas que você já fez. É um marco do B1 e aparece em qualquer papo mais profundo.',
    },
    pratica: {
      instrucao: 'Pense em experiências da sua vida. Vamos falar delas, em voz alta.',
      passos: [
        'Diga uma experiência: "I have been to..." (um lugar que você já foi)',
        'Diga algo que nunca fez: "I have never..."',
        'Pergunte a alguém: "Have you ever been to...?"',
        'Use já/ainda: "I’ve already...", "I haven’t ... yet"',
        'Fale de outra pessoa (has): "She has visited..."',
        'Pratique particípios: gone, seen, eaten, done, been',
        'Monte 4 frases de experiência',
      ],
    },
    desafio: {
      cenario: 'Fale 5 frases sobre experiências da sua vida usando o present perfect — com ever, never e já/ainda.',
      requisitos: [
        'Usei have/has + particípio',
        'Usei "Have you ever...?"',
        'Usei "I have never..."',
        'Usei already e/ou yet',
        'Pratiquei em voz alta',
      ],
      dica: 'Comece dominando "Have you ever...?" (puxa conversa) e "I’ve never..." (conta algo seu). Esses dois sozinhos já te metem em ótimas conversas sobre experiências.',
    },
    validacao: [
      'Sei a estrutura have/has + particípio',
      'Uso ever e never',
      'Uso already e yet',
      'Sei been x gone',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-conversa-2': {
    trilhaId: 'en-b1-conversa', numero: 2, titulo: 'Present perfect x past simple',
    tempoTotal: 13, xp: 90, vertente: 'ingles',
    aula: {
      gancho: '"I have visited Paris" ou "I visited Paris"? Os dois falam do passado, mas em situações diferentes. Saber escolher é o que separa o inglês "ok" do inglês natural — e é mais lógico do que parece.',
      conceito: {
        titulo: 'Quando "quando" importa',
        texto: 'A regra de ouro: se você diz (ou pensa em) QUANDO exatamente aconteceu, use past simple ("I visited Paris last year"). Se NÃO importa quando — é a experiência em si, ou algo ligado ao agora — use present perfect ("I have visited Paris"). Marcadores como yesterday, last year, in 2020 → past simple. Marcadores como ever, never, already, yet, recently → present perfect.',
      },
      estrutura: {
        titulo: 'Como escolher',
        partes: [
          { simbolo: 'past', desc: 'Tempo definido (quando): "I saw him yesterday / in 2020."' },
          { simbolo: 'perfect', desc: 'Experiência / tempo indefinido: "I have seen that film."' },
          { simbolo: 'marcadores past', desc: 'yesterday, last week, ago, in 2020, when I was young.' },
          { simbolo: 'marcadores perfect', desc: 'ever, never, already, yet, recently, so far.' },
        ],
      },
      exemplo: {
        titulo: 'A diferença na prática',
        celulas: [
          { ref: 'Perfect', valor: 'I have been to Japan. — Já estive no Japão (quando? não importa)' },
          { ref: 'Past', valor: 'I went to Japan in 2019. — Fui ao Japão em 2019 (quando!).' },
          { ref: 'Perfect', valor: 'Have you finished? — Você já terminou? (liga ao agora)' },
          { ref: 'Past', valor: 'I finished it yesterday. — Terminei ontem.' },
        ],
        formula: 'Disse QUANDO? → past · Não importa quando / experiência → perfect',
        resultado: 'Você escolhe o tempo certo naturalmente.',
        comentario: 'Padrão comum numa conversa: começa no perfect (a experiência) e detalha no past (o quando). "Have you been to Italy?" → "Yes, I went there in 2018." Perceba a transição.',
      },
      vocabulario: [
        { palavra: 'tempo definido', def: 'quando se sabe/diz a data → past simple.' },
        { palavra: 'tempo indefinido', def: 'quando não importa o "quando" → present perfect.' },
        { palavra: 'recently / so far', def: 'recentemente / até agora — marcam present perfect.' },
      ],
      chave: [
        'Disse QUANDO (yesterday, in 2020)? → past simple',
        'Experiência / ligado ao agora? → present perfect',
        'Conversa: perfect (experiência) → past (detalhe do quando)',
      ],
      porque: 'Escolher entre present perfect e past simple é um dos pontos que mais marca a naturalidade no B1. Dominá-lo faz seu inglês soar correto em qualquer conversa sobre o passado.',
    },
    pratica: {
      instrucao: 'Vamos praticar a escolha, em voz alta.',
      passos: [
        'Diga uma experiência sem data (perfect): "I have visited..."',
        'Agora diga COM data (past): "I visited ... last year"',
        'Perceba a diferença: a data "puxa" o past simple',
        'Faça o par: "Have you been to...?" → "Yes, I went there in ..."',
        'Use marcadores perfect: ever, never, already, recently',
        'Use marcadores past: yesterday, ago, last week',
        'Monte 4 frases escolhendo o tempo certo',
      ],
    },
    desafio: {
      cenario: 'Conte experiências fazendo a transição correta: a experiência (present perfect) e depois o detalhe de quando (past simple), em 4+ frases.',
      requisitos: [
        'Usei present perfect pra experiência/tempo indefinido',
        'Usei past simple quando disse o "quando"',
        'Fiz a transição perfect → past numa conversa',
        'Usei marcadores corretos pra cada tempo',
        'Pratiquei em voz alta',
      ],
      dica: 'Regrinha mental rápida: tem data na frase? → past. Tem "ever/never/already/yet"? → perfect. Na dúvida, pergunte "o quando importa aqui?".',
    },
    validacao: [
      'Sei quando usar past simple',
      'Sei quando usar present perfect',
      'Reconheço os marcadores de cada um',
      'Faço a transição perfect → past',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-conversa-3': {
    trilhaId: 'en-b1-conversa', numero: 3, titulo: 'Dar opiniões e concordar',
    tempoTotal: 11, xp: 70, vertente: 'ingles',
    aula: {
      gancho: '"Eu acho que...", "na minha opinião", "concordo", "não concordo" — opinar é o que torna uma conversa interessante. Com frases prontas, você participa de qualquer discussão em inglês.',
      conceito: {
        titulo: 'Expressar e reagir a opiniões',
        texto: 'No B1, você começa a opinar. Há frases-padrão pra dar opinião ("I think...", "In my opinion..."), concordar ("I agree", "Exactly!"), discordar com educação ("I don’t agree", "I see your point, but...") e pedir opinião ("What do you think?"). Saber essas frases te tira do silêncio e te coloca na conversa de verdade.',
      },
      estrutura: {
        titulo: 'O kit de opiniões',
        partes: [
          { simbolo: '💭', desc: 'Dar: "I think...", "In my opinion...", "I believe...".' },
          { simbolo: '👍', desc: 'Concordar: "I agree", "Exactly", "That’s true", "Me too".' },
          { simbolo: '👎', desc: 'Discordar (educado): "I don’t agree", "I see your point, but..."' },
          { simbolo: '❓', desc: 'Pedir: "What do you think?", "Do you agree?"' },
        ],
      },
      exemplo: {
        titulo: 'Opinando numa conversa',
        celulas: [
          { ref: 'Opinião', valor: 'I think English is useful. — Acho o inglês útil.' },
          { ref: 'Concordar', valor: 'I agree! / Exactly! — Concordo! / Exato!' },
          { ref: 'Discordar', valor: 'I see your point, but I don’t agree.' },
          { ref: 'Pedir', valor: 'What do you think? — O que você acha?' },
        ],
        formula: 'I think + opinião · I agree/disagree · What do you think?',
        resultado: 'Você participa de discussões e troca ideias.',
        comentario: 'Pra discordar sem soar rude, "amorteça": "I see your point, but..." (entendo seu ponto, mas...) ou "I’m not sure about that". Educação na discordância é valorizada em qualquer idioma.',
      },
      vocabulario: [
        { palavra: 'I think / In my opinion', def: 'Eu acho / Na minha opinião — dar opinião.' },
        { palavra: 'agree / disagree', def: 'concordar / discordar.' },
        { palavra: 'point of view', def: 'ponto de vista.' },
      ],
      chave: [
        'Dar opinião: I think..., In my opinion...',
        'Concordar: I agree / Exactly · Discordar: I don’t agree',
        'Discordar com educação: "I see your point, but..."',
      ],
      porque: 'Opinar é o que transforma um papo informativo numa conversa real. Essas frases te dão voz em qualquer discussão — sobre filmes, notícias, trabalho — e são centrais no B1.',
    },
    pratica: {
      instrucao: 'Escolha um assunto que você gosta. Vamos opinar em voz alta.',
      passos: [
        'Dê uma opinião: "I think..." + assunto',
        'Use "In my opinion..." numa segunda opinião',
        'Pratique concordar: "I agree", "Exactly", "Me too"',
        'Pratique discordar com educação: "I see your point, but..."',
        'Peça opinião: "What do you think?"',
        'Defenda sua ideia com "because" (porque)',
        'Monte uma mini-discussão (opinião → reação)',
      ],
    },
    desafio: {
      cenario: 'Dê sua opinião sobre 2 assuntos e simule reagir a opiniões (concordando com um, discordando educadamente de outro).',
      requisitos: [
        'Dei opinião com "I think" / "In my opinion"',
        'Concordei (I agree / Exactly)',
        'Discordei com educação (I see your point, but...)',
        'Pedi a opinião do outro',
        'Pratiquei em voz alta',
      ],
      dica: 'Tenha sempre na ponta da língua: "I think...", "I agree", "I don’t agree". Com esse trio você entra e se mantém em qualquer conversa de opinião.',
    },
    validacao: [
      'Sei dar opinião',
      'Sei concordar',
      'Sei discordar com educação',
      'Sei pedir a opinião do outro',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-conversa-4': {
    trilhaId: 'en-b1-conversa', numero: 4, titulo: 'Manter a conversa fluindo',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Saber palavras não basta — é preciso manter a conversa viva: reagir, ganhar tempo pra pensar, demonstrar interesse. São pequenas frases que fazem você soar natural e não travar.',
      conceito: {
        titulo: 'As "engrenagens" da conversa',
        texto: 'Conversas fluem com pequenas reações e ligações: demonstrar que está ouvindo ("Really?", "That’s interesting"), ganhar tempo ("Well...", "Let me think"), pedir pra repetir ("Sorry?", "Could you repeat that?") e conectar ideias ("and", "but", "so"). Essas "engrenagens" são o que faz a conversa parecer natural — e tiram a pressão de ter a frase perfeita.',
      },
      estrutura: {
        titulo: 'As engrenagens da fala',
        partes: [
          { simbolo: '👂', desc: 'Mostrar interesse: "Really?", "That’s interesting!", "Wow!"' },
          { simbolo: '⏳', desc: 'Ganhar tempo: "Well...", "Let me think...", "You know..."' },
          { simbolo: '🔁', desc: 'Não entendeu: "Sorry?", "Could you repeat that?", "Slowly, please."' },
          { simbolo: '🔗', desc: 'Conectar: and (e), but (mas), so (então), because (porque).' },
        ],
      },
      exemplo: {
        titulo: 'Reações que mantêm o papo',
        celulas: [
          { ref: 'Interesse', valor: 'Really? That’s interesting! — Sério? Que interessante!' },
          { ref: 'Tempo', valor: 'Well... let me think. — Bem... deixa eu pensar.' },
          { ref: 'Repetir', valor: 'Sorry, could you repeat that? — Desculpe, pode repetir?' },
          { ref: 'Conectar', valor: 'I like it, but it’s expensive. — Gosto, mas é caro.' },
        ],
        formula: 'reagir + ganhar tempo + pedir repetição + conectar',
        resultado: 'Sua conversa flui e soa natural.',
        comentario: 'Não tenha medo de pedir pra repetir — até nativos fazem isso. "Sorry?" e "Could you repeat that?" são educados e normais. Pedir repetição é melhor que fingir que entendeu.',
      },
      vocabulario: [
        { palavra: 'Really? / That’s interesting', def: 'Sério? / Que interessante — mostram interesse.' },
        { palavra: 'Could you repeat that?', def: 'Pode repetir? — pra quando não entender.' },
        { palavra: 'fillers', def: 'palavras pra ganhar tempo: well, you know, let me see.' },
      ],
      chave: [
        'Reaja pra mostrar interesse (Really? That’s interesting!)',
        'Ganhe tempo (Well... let me think)',
        'Peça pra repetir sem vergonha (Sorry? Could you repeat?)',
      ],
      porque: 'Essas pequenas frases são o que faz a diferença entre "saber inglês" e "conversar em inglês". Elas mantêm o papo vivo e tiram a pressão da frase perfeita — essenciais pra fluência real.',
    },
    pratica: {
      instrucao: 'Vamos praticar as engrenagens da conversa, em voz alta.',
      passos: [
        'Pratique reações: "Really?", "That’s interesting!", "Wow!"',
        'Pratique ganhar tempo: "Well...", "Let me think..."',
        'Pratique pedir repetição: "Sorry?", "Could you repeat that?"',
        'Conecte ideias: "I like it, but...", "...so I..."',
        'Imagine uma fala e reaja a ela com interesse',
        'Pratique "Slowly, please" pra pedir pra falarem devagar',
        'Monte um mini-diálogo usando 4 engrenagens',
      ],
    },
    desafio: {
      cenario: 'Simule uma conversa curta usando pelo menos 4 "engrenagens" (reagir, ganhar tempo, pedir repetição, conectar).',
      requisitos: [
        'Usei uma reação de interesse (Really? / That’s interesting)',
        'Usei uma frase pra ganhar tempo (Well... / Let me think)',
        'Pedi pra repetir (Sorry? / Could you repeat?)',
        'Conectei ideias (but, so, because)',
        'Pratiquei em voz alta',
      ],
      dica: 'Decore "Could you repeat that, please?" e "Could you speak slowly?". Saber pedir ajuda numa conversa tira TODA a pressão — você nunca fica travado por não entender algo.',
    },
    validacao: [
      'Sei reagir mostrando interesse',
      'Sei ganhar tempo pra pensar',
      'Sei pedir pra repetir',
      'Sei conectar ideias',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-conversa-5': {
    trilhaId: 'en-b1-conversa', numero: 5, titulo: 'Perguntas indiretas (B1)',
    tempoTotal: 12, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Você sabe onde fica o banheiro?" soa mais educado que "Onde fica o banheiro?". Perguntas indiretas são o jeito polido de perguntar — e têm uma reviravolta de ordem que surpreende.',
      conceito: {
        titulo: 'Perguntar com educação (e a inversão)',
        texto: 'Perguntas indiretas suavizam o pedido: começam com "Can you tell me...?", "Do you know...?", "Could you tell me...?". A reviravolta: depois delas, a ordem volta ao NORMAL (como uma afirmação), sem inversão e sem "do/does/did". Direta: "Where is the bank?" → Indireta: "Do you know where the bank IS?" (não "where is the bank"). É um marco do B1 e soa muito educado.',
      },
      estrutura: {
        titulo: 'Direta x indireta',
        partes: [
          { simbolo: 'abre', desc: '"Can/Could you tell me...?", "Do you know...?"' },
          { simbolo: 'ordem', desc: 'Depois, ordem NORMAL (sujeito + verbo), sem inversão.' },
          { simbolo: 'sem do', desc: 'Some o do/does/did: "where you work" (não "where do you work").' },
          { simbolo: 'sim/não', desc: 'Pra sim/não, use "if/whether": "Do you know if it’s open?"' },
        ],
      },
      exemplo: {
        titulo: 'A inversão que volta ao normal',
        celulas: [
          { ref: 'Direta', valor: 'Where is the station? (is + the station)' },
          { ref: 'Indireta', valor: 'Could you tell me where the station is? (the station + is)' },
          { ref: 'Direta', valor: 'What time does it open?' },
          { ref: 'Indireta', valor: 'Do you know what time it opens? (sem does, +s no verbo)' },
        ],
        formula: '"Do you know / Can you tell me" + pergunta em ordem NORMAL',
        resultado: 'Você pergunta de forma educada e correta.',
        comentario: 'O segredo: a parte depois de "Do you know..." vira uma AFIRMAÇÃO encaixada. "Where DOES she live?" → "Do you know where she LIVES?" (o "does" some e o "s" volta pro verbo). Pra sim/não: "...if/whether".',
      },
      vocabulario: [
        { palavra: 'Could you tell me...?', def: 'Você poderia me dizer...? (pergunta indireta educada).' },
        { palavra: 'Do you know...?', def: 'Você sabe...? (abre pergunta indireta).' },
        { palavra: 'if / whether', def: 'se — usado em perguntas indiretas de sim/não.' },
      ],
      chave: [
        'Abrir com "Could you tell me / Do you know..."',
        'Depois, ordem NORMAL (sem inversão, sem do/does/did)',
        'Sim/não → use "if/whether"',
      ],
      porque: 'Perguntas indiretas são mais educadas e muito usadas — ao pedir informação a estranhos, em situações formais. É um recurso que faz seu inglês soar polido e maduro, marca do B1.',
    },
    pratica: {
      instrucao: 'Vamos transformar perguntas diretas em indiretas, em voz alta.',
      passos: [
        'Direta: "Where is the bank?" → Indireta: "Do you know where the bank is?"',
        'Direta: "What time does it open?" → "Do you know what time it opens?"',
        'Direta: "Is it open?" → "Do you know if it’s open?"',
        'Pratique abrir com "Could you tell me...?"',
        'Note: a ordem volta ao normal, o do/does some',
        'Faça 3 perguntas diretas e transforme em indiretas',
        'Use numa situação real (pedir info na rua)',
      ],
    },
    desafio: {
      cenario: 'Transforme 5 perguntas diretas em indiretas (educadas), incluindo uma de sim/não com "if".',
      requisitos: [
        'Abri com "Do you know" / "Could you tell me"',
        'Usei a ordem normal depois (sem inversão)',
        'Tirei o do/does/did corretamente',
        'Usei "if/whether" numa pergunta sim/não',
        'Pratiquei em voz alta',
      ],
      dica: 'Truque: monte a afirmação primeiro ("the bank is there", "she lives here") e só encaixe atrás de "Do you know...". Isso evita a inversão errada.',
    },
    validacao: [
      'Sei abrir perguntas indiretas',
      'Uso a ordem normal depois',
      'Tiro o do/does/did',
      'Uso if/whether pra sim/não',
      'Pratiquei em voz alta',
    ],
  },

  'en-b1-conversa-6': {
    trilhaId: 'en-b1-conversa', numero: 6, titulo: 'Projeto: uma conversa real',
    tempoTotal: 18, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: sustentar uma conversa de verdade em inglês por uns 2 minutos — falando de experiências, dando opiniões, reagindo e perguntando. É a prova de que você não só sabe inglês: você CONVERSA em inglês.',
      conceito: {
        titulo: 'Conversa de verdade, do início ao fim',
        texto: 'Este projeto reúne o coração do B1: present perfect (experiências), opiniões, as engrenagens da conversa e perguntas (diretas e indiretas). Você vai construir e sustentar um diálogo realista sobre um tema (viagens, filmes, hobbies) — perguntando, respondendo, opinando e reagindo. Manter uma conversa fluindo por 2 minutos é um marco enorme de fluência.',
      },
      estrutura: {
        titulo: 'A anatomia da conversa',
        partes: [
          { simbolo: '🚪', desc: 'Abrir: "Have you ever...?" / "What do you think about...?"' },
          { simbolo: '💬', desc: 'Trocar: experiências (perfect), opiniões (I think), detalhes (past).' },
          { simbolo: '⚙️', desc: 'Engrenagens: reagir (Really?), ganhar tempo, pedir repetição.' },
          { simbolo: '🤝', desc: 'Fechar: "Nice talking to you!" / "Let’s talk again."' },
        ],
      },
      exemplo: {
        titulo: 'Trecho de conversa',
        celulas: [
          { ref: 'A', valor: 'Have you ever been abroad? — Já foi pro exterior?' },
          { ref: 'B', valor: 'Yes! I went to Argentina in 2019. It was amazing!' },
          { ref: 'A', valor: 'Really? That’s interesting! I think travelling is the best.' },
          { ref: 'B', valor: 'I agree! Where would you like to go?' },
        ],
        formula: 'pergunta (perfect) → resposta+detalhe (past) → reação+opinião → nova pergunta',
        resultado: 'Uma conversa real, sustentada por você.',
        comentario: 'Grave os dois lados de uma conversa (ou converse com alguém/uma IA). Sustentar 2 minutos em inglês é prova de fluência B1. Compare com sua primeira gravação do A1 — a evolução é enorme!',
      },
      vocabulario: [
        { palavra: 'abroad', def: 'no/para o exterior (a-bród).' },
        { palavra: 'Nice talking to you', def: 'Foi bom conversar com você (fecho).' },
        { palavra: 'keep the conversation going', def: 'manter a conversa fluindo.' },
      ],
      chave: [
        'Junte: present perfect + opiniões + engrenagens + perguntas',
        'Abra, troque ideias, reaja, e feche com educação',
        'Sustentar ~2 minutos é o marco do projeto',
      ],
      porque: 'Sustentar uma conversa real é o objetivo de quem aprende inglês — e reúne tudo do B1 de conversação. Concluir este projeto prova que você conversa em inglês, não só "sabe" inglês.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Construa e ensaie uma conversa de ~2 minutos sobre um tema que você gosta, usando tudo da trilha.',
      passos: [
        'Escolha um tema (viagens, filmes, comida, hobbies)',
        'Abra com uma pergunta de experiência: "Have you ever...?"',
        'Responda com experiência (perfect) + detalhe (past)',
        'Dê opiniões: "I think...", e reaja: "Really? That’s interesting!"',
        'Use uma pergunta indireta educada em algum momento',
        'Use engrenagens pra não travar (Well..., Could you repeat?)',
        'Feche com "Nice talking to you!" — e grave os dois lados',
      ],
    },
    desafio: {
      cenario: 'Construa e grave uma conversa de ~2 minutos sobre um tema, usando present perfect, opiniões, perguntas e engrenagens.',
      requisitos: [
        'Abri com uma pergunta de experiência (perfect)',
        'Troquei experiências (perfect) e detalhes (past)',
        'Dei opiniões e reagi (engrenagens)',
        'Usei pelo menos uma pergunta indireta',
        'Fechei a conversa com educação',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Dica de ouro: use uma IA (do módulo Mercado!) como parceira de conversa. Peça "let’s have a simple conversation in English about travel, one question at a time". É prática real, sem julgamento, a qualquer hora.',
    },
    validacao: [
      'Sustentei uma conversa de ~2 minutos',
      'Usei present perfect e past simple',
      'Dei opiniões e reagi',
      'Usei perguntas (diretas e indiretas)',
      'Fechei com educação',
      'Pratiquei em voz alta / gravei',
    ],
  },
};
