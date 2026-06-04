// ============================================================================
// CONTEÚDO — Inglês B2: Fluência e Conversação (en-b2-fluencia)
// Manter a conversa fluindo, opinar e discordar, ganhar tempo e parafrasear,
// contar histórias com fluência, debater e argumentar. Projeto: conversa
// espontânea do início ao fim.
// ============================================================================

export const EN_B2_FLUENCIA = {
  'en-b2-fluencia-1': {
    trilhaId: 'en-b2-fluencia', numero: 1, titulo: 'Manter a conversa fluindo',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: 'Fluência não é falar rápido nem nunca errar — é manter a conversa viva. O segredo dos nativos? Eles usam "fillers", devolvem perguntas e reagem ao que ouvem. Quem só responde e cala mata a conversa; quem mantém a bola rolando soa fluente.',
      conceito: {
        titulo: 'Fluência é continuidade, não perfeição',
        texto: 'No B2 você já tem vocabulário e gramática — o que falta é FLUÊNCIA conversacional: a habilidade de manter o diálogo andando sem travar. Três ferramentas fazem isso. Primeiro, os FILLERS (palavras de preenchimento): "well...", "you know", "I mean", "actually", "let me think" — eles ganham tempo enquanto seu cérebro organiza a frase, em vez de você ficar em silêncio. Segundo, as FOLLOW-UP QUESTIONS (perguntas de continuação): depois de responder, devolva — "What about you?", "Have you ever...?", "Why do you think that?" — isso passa a bola e mostra interesse. Terceiro, o TURN-TAKING (revezamento de turnos): reagir com "Right", "I see", "Really?", "That makes sense" mostra que você está ouvindo e mantém o ritmo. O erro clássico do aprendiz é tratar conversa como prova: responder a pergunta, calar, esperar a próxima. Conversa é uma troca viva — você responde E pergunta, reage E comenta. Dominar isso é o que faz alguém dizer "nossa, seu inglês é fluente".',
      },
      estrutura: {
        titulo: 'Ferramentas para a conversa fluir',
        partes: [
          { simbolo: 'fillers', desc: 'well, you know, I mean, actually — ganham tempo.' },
          { simbolo: 'follow-up', desc: 'What about you? — devolve a pergunta.' },
          { simbolo: 'reações', desc: 'Right, I see, Really? — mostram que você ouve.' },
          { simbolo: 'turn-taking', desc: 'responder E perguntar mantém a troca.' },
        ],
      },
      exemplo: {
        titulo: 'Mantendo o diálogo vivo',
        celulas: [
          { ref: 'filler', valor: 'Well, I think... / Actually, you know...' },
          { ref: 'follow-up', valor: 'I love hiking. What about you?' },
          { ref: 'reação', valor: 'Oh, really? That sounds great!' },
          { ref: 'devolver', valor: 'Have you ever been there?' },
        ],
        formula: 'responder + reagir + devolver pergunta = conversa que flui',
        resultado: 'O diálogo não morre depois da sua resposta.',
        comentario: 'Treine o reflexo de NUNCA terminar só respondendo. Sempre acrescente algo: um comentário ("That reminds me of..."), uma reação ("That\'s interesting") ou, melhor ainda, uma pergunta de volta. Os fillers tiram a pressão do silêncio — é melhor dizer "well, let me think" do que ficar mudo. Esse é o hábito que transforma respostas isoladas em conversa de verdade.',
      },
      vocabulario: [
        { palavra: 'filler', def: 'palavra de preenchimento — well, you know, I mean.' },
        { palavra: 'follow-up question', def: 'pergunta de continuação — devolve a bola.' },
        { palavra: 'turn-taking', def: 'revezamento de turnos na conversa.' },
      ],
      chave: [
        'Use fillers para ganhar tempo, não silêncio',
        'Sempre devolva uma pergunta ou comentário',
        'Reaja ao que ouve: Right, I see, Really?',
      ],
      porque: 'Fluência percebida vem de manter a conversa viva, não de falar perfeito. Fillers, follow-ups e reações são o que faz nativos te acharem fluente — mesmo quando você erra.',
    },
    pratica: {
      instrucao: 'Treine manter um diálogo fluindo sem travar.',
      passos: [
        'Liste 8 fillers e quando usar cada um',
        'Escreva 6 follow-up questions genéricas',
        'Liste 6 reações curtas (Right, I see...)',
        'Responda a uma pergunta e devolva outra',
        'Simule um diálogo de 6 trocas sem silêncio',
        'Grave-se mantendo a conversa por 1 minuto',
        'Marque onde travou e que filler usaria',
      ],
    },
    desafio: {
      cenario: 'Simule uma conversa casual de pelo menos 8 trocas sobre seu fim de semana. Em cada resposta sua, inclua um filler, uma reação e devolva uma pergunta — mostre que a conversa flui.',
      requisitos: [
        'Conversa tem pelo menos 8 trocas',
        'Usei fillers para evitar silêncio',
        'Devolvi perguntas de continuação',
        'Reagi ao que o outro disse',
        'Nenhuma resposta terminou "morta"',
      ],
      dica: 'Pense na conversa como ping-pong: a bola nunca pode parar do seu lado. Sempre rebata com pergunta ou comentário.',
    },
    validacao: [
      'Sei usar fillers para ganhar tempo',
      'Devolvo perguntas naturalmente',
      'Reajo ao que ouço com frases curtas',
      'Minhas respostas não matam a conversa',
      'Mantenho um diálogo fluindo várias trocas',
    ],
  },

  'en-b2-fluencia-2': {
    trilhaId: 'en-b2-fluencia', numero: 2, titulo: 'Opinar, concordar e discordar',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Saber dizer "I think it\'s good" é nível básico. No B2 você gradua a opinião — "I\'m pretty sure", "I guess", "I\'m convinced" — e discorda com elegância: "I see your point, but...". Opinar bem é metade de toda conversa adulta.',
      conceito: {
        titulo: 'Graus de opinião e discordância educada',
        texto: 'Conversa real gira em torno de OPINIÕES — e o B2 exige nuance. Para INTRODUZIR opinião, vá além de "I think": "In my opinion", "If you ask me", "I\'d say", "It seems to me", "As far as I\'m concerned". Para graduar a CERTEZA: forte → "I\'m convinced / I\'m absolutely sure"; média → "I think / I believe"; fraca → "I guess / I suppose / maybe". Para CONCORDAR: "Exactly", "That\'s a good point", "I couldn\'t agree more", "You\'re right". O ponto delicado é DISCORDAR sem soar rude — a fórmula educada é reconhecer + ressalvar: "I see your point, but...", "That\'s true, however...", "I\'m not so sure about that", "I get what you mean, but I think...". Note como nunca se começa com um "No, you\'re wrong" seco — isso encerra a conversa. Você valida o outro ("I see your point") e DEPOIS apresenta sua visão. Esse amortecedor é cultural no inglês: discordância direta demais soa agressiva. Dominar esses graus deixa você opinar como adulto educado, não como livro didático.',
      },
      estrutura: {
        titulo: 'Toolkit de opinião',
        partes: [
          { simbolo: 'introduzir', desc: 'In my opinion / If you ask me / I\'d say.' },
          { simbolo: 'graduar', desc: 'I\'m convinced > I think > I guess.' },
          { simbolo: 'concordar', desc: 'Exactly / Good point / I couldn\'t agree more.' },
          { simbolo: 'discordar', desc: 'I see your point, but... (reconhece + ressalva).' },
        ],
      },
      exemplo: {
        titulo: 'Opinando com nuance',
        celulas: [
          { ref: 'opinião', valor: 'If you ask me, remote work is better.' },
          { ref: 'certeza', valor: 'I\'m convinced it saves time. / I guess so.' },
          { ref: 'concordar', valor: 'That\'s a good point. I couldn\'t agree more.' },
          { ref: 'discordar', valor: 'I see your point, but I\'m not so sure.' },
        ],
        formula: 'discordar educado = validar (I see your point) + but/however + sua visão',
        resultado: 'Você opina e discorda sem soar rude.',
        comentario: 'A discordância educada é uma habilidade social, não só linguística. Sempre amorteça: reconheça algo válido no que o outro disse antes de apresentar sua visão. "You\'re right that it\'s expensive, but I think it\'s worth it" soa muito melhor que "No, it\'s worth it". E gradue sua certeza com honestidade — "I guess" quando você não tem certeza evita que você pareça arrogante. Esses pequenos amortecedores são o que torna você um bom interlocutor.',
      },
      vocabulario: [
        { palavra: 'If you ask me', def: 'na minha opinião — introduz opinião pessoal.' },
        { palavra: 'I couldn\'t agree more', def: 'concordo totalmente — concordância forte.' },
        { palavra: 'I see your point, but', def: 'entendo, mas — discordância educada.' },
      ],
      chave: [
        'Vá além de "I think": varie como introduz opinião',
        'Gradue a certeza: convinced > think > guess',
        'Discorde validando primeiro, depois ressalvando',
      ],
      porque: 'Opiniões são o coração de toda conversa adulta. Saber introduzi-las, graduar a certeza e discordar com elegância é o que permite debater ideias sem brigar.',
    },
    pratica: {
      instrucao: 'Monte e treine seu toolkit de opinião.',
      passos: [
        'Liste 6 formas de introduzir opinião',
        'Organize 3 graus de certeza com exemplos',
        'Liste 5 formas de concordar',
        'Escreva 5 fórmulas de discordância educada',
        'Reescreva "No, you\'re wrong" de 3 formas educadas',
        'Opine sobre 3 temas usando graus diferentes',
        'Simule discordar de alguém sem ser rude',
      ],
    },
    desafio: {
      cenario: 'Alguém diz: "Studying online is better than in a classroom." Reaja de duas formas — uma concordando com entusiasmo, outra discordando educadamente — usando introdução de opinião e grau de certeza em cada uma.',
      requisitos: [
        'Concordei com fórmula clara e entusiasmo',
        'Discordei validando antes de ressalvar',
        'Usei introduções variadas de opinião',
        'Graduei minha certeza em cada resposta',
        'Nenhuma resposta soou rude ou seca',
      ],
      dica: 'Para discordar, comece sempre com algo positivo ou neutro ("That\'s true...", "I see why you\'d say that...") antes do "but".',
    },
    validacao: [
      'Introduzo opiniões de formas variadas',
      'Gradua minha certeza conforme o caso',
      'Concordo com expressões além de "yes"',
      'Discordo validando primeiro o outro',
      'Debato ideias sem soar agressivo',
    ],
  },

  'en-b2-fluencia-3': {
    trilhaId: 'en-b2-fluencia', numero: 3, titulo: 'Ganhar tempo e parafrasear',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Esqueceu uma palavra no meio da frase? Nativos também esquecem — e nem param. Eles parafraseiam: "that thing you use to...". A fluência de verdade não é saber tudo, é nunca travar por não saber uma palavra.',
      conceito: {
        titulo: 'Estratégias para nunca travar',
        texto: 'O maior medo do aprendiz é esquecer uma palavra e congelar. A solução do B2 são duas estratégias de SOBREVIVÊNCIA conversacional. A primeira é GANHAR TEMPO com frases que enchem o espaço enquanto você pensa: "That\'s a good question...", "Let me think for a second...", "How can I put this...", "Well, it\'s hard to say, but...". Elas soam naturais e te dão segundos preciosos. A segunda, mais poderosa, é PARAFRASEAR (circumlocution): quando você não sabe ou esquece a palavra exata, descreva-a. Esqueceu "corkscrew" (saca-rolhas)? Diga "the thing you use to open a wine bottle". Esqueceu "to renovate"? Diga "to make a house new again". A estrutura básica: "it\'s a kind of...", "it\'s the thing/person that...", "it\'s when you...", "it\'s similar to...". Isso é exatamente o que nativos fazem quando a palavra "não vem" — e funciona em 100% dos casos. O aprendiz que domina paráfrase nunca fica preso: ele sempre tem um caminho alternativo para qualquer ideia. Essa é a diferença entre alguém que para e pede ajuda e alguém que continua falando, fluente, mesmo com vocabulário incompleto.',
      },
      estrutura: {
        titulo: 'Não travar nunca',
        partes: [
          { simbolo: 'ganhar tempo', desc: 'That\'s a good question / Let me think.' },
          { simbolo: 'descrever', desc: 'it\'s the thing you use to... (paráfrase).' },
          { simbolo: 'categorizar', desc: 'it\'s a kind of... / it\'s similar to...' },
          { simbolo: 'função', desc: 'it\'s when you... / it\'s for...ing.' },
        ],
      },
      exemplo: {
        titulo: 'Paráfrase em ação',
        celulas: [
          { ref: 'ganhar tempo', valor: 'Hmm, let me think for a second...' },
          { ref: 'objeto', valor: 'It\'s the thing you use to open wine.' },
          { ref: 'pessoa', valor: 'It\'s the person who fixes teeth.' },
          { ref: 'ação', valor: 'It\'s when you make something new again.' },
        ],
        formula: 'esqueci a palavra → "it\'s the thing/person/when..." + descrição',
        resultado: 'Você nunca trava por falta de uma palavra.',
        comentario: 'Pratique paráfrase de propósito: pegue palavras que você SABE e force-se a descrevê-las sem dizê-las. Isso treina o reflexo para a hora real. As frases de ganhar tempo devem virar automáticas — diga "that\'s a good question" sem pensar, e use os segundos para montar a resposta. Aprendiz que parafraseia bem soa muito mais fluente que aquele que para e diz "how do you say...?" — porque mantém o controle da conversa.',
      },
      vocabulario: [
        { palavra: 'paraphrase', def: 'parafrasear — dizer a mesma ideia com outras palavras.' },
        { palavra: 'circumlocution', def: 'descrever algo sem usar a palavra exata.' },
        { palavra: 'buy time', def: 'ganhar tempo — frases enquanto você pensa.' },
      ],
      chave: [
        'Use frases de ganhar tempo, não silêncio',
        'Esqueceu a palavra? Descreva-a (paráfrase)',
        '"it\'s the thing/person/when..." resolve quase tudo',
      ],
      porque: 'Travar por uma palavra é o que faz a conversa quebrar. Ganhar tempo e parafrasear garantem que você sempre continue falando — o núcleo da fluência real.',
    },
    pratica: {
      instrucao: 'Treine não travar com tempo e paráfrase.',
      passos: [
        'Liste 6 frases de ganhar tempo',
        'Parafraseie 5 objetos sem dizer o nome',
        'Parafraseie 3 pessoas/profissões por função',
        'Parafraseie 3 verbos por "it\'s when you..."',
        'Descreva uma palavra difícil até o outro adivinhar',
        'Simule esquecer uma palavra e contornar',
        'Grave-se parafraseando 5 termos seguidos',
      ],
    },
    desafio: {
      cenario: 'Escolha 6 palavras (3 objetos, 2 profissões, 1 verbo). Para cada uma, escreva uma paráfrase que a explique sem usá-la — como se você tivesse esquecido a palavra no meio de uma conversa.',
      requisitos: [
        'Parafraseei 6 palavras sem dizê-las',
        'Usei "it\'s the thing/person/when..." corretamente',
        'As descrições deixam claro do que se trata',
        'Incluí ao menos uma frase de ganhar tempo',
        'As paráfrases soam naturais, não robóticas',
      ],
      dica: 'Boa paráfrase responde: o que é (categoria), para que serve (função) e/ou com o que se parece. Combine essas pistas.',
    },
    validacao: [
      'Tenho frases automáticas de ganhar tempo',
      'Descrevo palavras que esqueci sem travar',
      'Uso "it\'s the thing/person that..." com fluidez',
      'Mantenho a conversa mesmo sem o termo exato',
      'Não dependo de "how do you say...?"',
    ],
  },

  'en-b2-fluencia-4': {
    trilhaId: 'en-b2-fluencia', numero: 4, titulo: 'Contar histórias com fluência',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Todo mundo adora um bom causo. Em inglês, contar uma história prende mais do que qualquer gramática perfeita — basta organizar em começo, suspense e desfecho, e usar conectores que dão ritmo: "so", "anyway", "suddenly", "in the end".',
      conceito: {
        titulo: 'A arte de contar um causo',
        texto: 'Storytelling é o ápice da conversa: prende atenção, cria conexão e exibe sua fluência de forma natural. Uma boa história em inglês tem ESTRUTURA. Comece com um GANCHO: "You won\'t believe what happened to me yesterday...", "So, this funny thing happened...". Estabeleça o CENÁRIO em poucas palavras (quando, onde, quem): "Last week I was at the airport, and...". Desenvolva com CONECTORES NARRATIVOS que dão ritmo: "so" (então), "then" (aí), "anyway" (enfim — pula detalhes), "suddenly" (de repente — cria tensão), "meanwhile" (enquanto isso). Use o PASSADO bem: simple past para a sequência ("I walked, I saw"), past continuous para o pano de fundo ("I was waiting when..."). Crie um clímax e feche com um DESFECHO: "in the end...", "and that\'s why...", "long story short...". Detalhes sensoriais e a reação das pessoas dão vida. O segredo do ritmo é alternar frases curtas (tensão) e longas (desenvolvimento). Contar bem um causo de 1 minuto, com começo-meio-fim e conectores fluindo, é uma das demonstrações mais fortes de fluência que existem — porque junta vocabulário, tempos verbais, ritmo e presença.',
      },
      estrutura: {
        titulo: 'Anatomia de uma história',
        partes: [
          { simbolo: 'gancho', desc: 'You won\'t believe what happened...' },
          { simbolo: 'cenário', desc: 'quando/onde/quem em poucas palavras.' },
          { simbolo: 'conectores', desc: 'so, then, anyway, suddenly, meanwhile.' },
          { simbolo: 'desfecho', desc: 'in the end / long story short / and that\'s why.' },
        ],
      },
      exemplo: {
        titulo: 'Um causo bem contado',
        celulas: [
          { ref: 'gancho', valor: 'So, this crazy thing happened last week.' },
          { ref: 'cenário', valor: 'I was waiting for the bus when...' },
          { ref: 'tensão', valor: 'Suddenly, a dog ran out of nowhere!' },
          { ref: 'desfecho', valor: 'In the end, everyone was laughing.' },
        ],
        formula: 'gancho + cenário + conectores + clímax + desfecho = história que prende',
        resultado: 'Você prende a atenção contando causos.',
        comentario: 'Treine recontar histórias reais suas — elas saem mais naturais que inventadas. Domine os conectores narrativos até virarem automáticos: "so" e "then" para avançar, "anyway" para pular o que não importa, "suddenly" para criar tensão. Misture past simple (sequência) e past continuous (pano de fundo) sem pensar. E lembre: pausa e ritmo importam tanto quanto palavras — uma pausa antes do clímax vale ouro.',
      },
      vocabulario: [
        { palavra: 'storytelling', def: 'arte de contar histórias.' },
        { palavra: 'anyway', def: 'enfim — conector para pular detalhes e seguir.' },
        { palavra: 'long story short', def: 'resumindo — introduz o desfecho.' },
      ],
      chave: [
        'Abra com um gancho e situe o cenário rápido',
        'Use conectores narrativos para dar ritmo',
        'Misture past simple e past continuous',
      ],
      porque: 'Contar histórias é a demonstração máxima de fluência: junta tempos verbais, conectores, ritmo e presença. Quem conta um bom causo em inglês soa naturalmente fluente.',
    },
    pratica: {
      instrucao: 'Estruture e conte uma história fluente.',
      passos: [
        'Liste 6 conectores narrativos com função',
        'Escreva 4 ganchos de abertura',
        'Esboce uma história em gancho-cenário-clímax-desfecho',
        'Marque onde usar past simple x continuous',
        'Insira 1 momento de tensão com "suddenly"',
        'Conte a história em voz alta cronometrando 1 min',
        'Refaça melhorando ritmo e conectores',
      ],
    },
    desafio: {
      cenario: 'Conte uma história real ou inventada de cerca de 1 minuto sobre algo inesperado que aconteceu. Use gancho, cenário, pelo menos 4 conectores narrativos, um clímax e um desfecho claro.',
      requisitos: [
        'Abri com um gancho que prende',
        'Situei cenário (quando/onde/quem) rápido',
        'Usei 4+ conectores narrativos com ritmo',
        'Misturei past simple e past continuous',
        'Fechei com um desfecho claro',
      ],
      dica: 'Histórias reais saem mais fluentes. Pense num causo seu e foque em CONTAR bem, não em inventar algo grandioso.',
    },
    validacao: [
      'Abro histórias com um gancho',
      'Uso conectores narrativos com naturalidade',
      'Alterno past simple e past continuous',
      'Crio tensão e fecho com desfecho',
      'Conto um causo de 1 minuto que prende',
    ],
  },

  'en-b2-fluencia-5': {
    trilhaId: 'en-b2-fluencia', numero: 5, titulo: 'Debater e argumentar',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Defender uma ideia em inglês exige mais que opinião: exige estrutura. "Firstly...", "for example...", "on the other hand...", "therefore...". Quem argumenta organizado convence — e soa muito mais sofisticado do que quem só repete "I think".',
      conceito: {
        titulo: 'Argumentar com estrutura',
        texto: 'Debater é defender uma posição com razões, exemplos e resposta a objeções — o nível mais alto da conversa B2. A espinha dorsal é a SINALIZAÇÃO (signposting): palavras que organizam seu raciocínio e guiam o ouvinte. Para SEQUENCIAR argumentos: "firstly / first of all", "secondly", "another point is", "finally". Para EXEMPLIFICAR: "for example", "for instance", "such as", "take... for example". Para CONTRASTAR (mostrar que você considerou o outro lado): "on the other hand", "however", "that said", "while it\'s true that...". Para CONCLUIR causa-efeito: "therefore", "as a result", "so", "that\'s why". Para ENFATIZAR: "in fact", "actually", "what\'s more", "above all". Um bom argumento segue: afirmação → razão → exemplo → resposta à objeção → conclusão. Ex.: "I believe remote work is better. Firstly, it saves commuting time. For example, I save two hours a day. On the other hand, some say it\'s isolating, but you can schedule meetings. Therefore, the benefits outweigh the drawbacks." Veja como os conectores tornam o raciocínio fácil de seguir. Argumentar bem não é falar mais alto — é estruturar com clareza, antecipar o contra-argumento e amarrar com uma conclusão. Essa organização é o que distingue o B2 sofisticado.',
      },
      estrutura: {
        titulo: 'Conectores que organizam o argumento',
        partes: [
          { simbolo: 'sequenciar', desc: 'firstly, secondly, finally.' },
          { simbolo: 'exemplificar', desc: 'for example, for instance, such as.' },
          { simbolo: 'contrastar', desc: 'on the other hand, however, that said.' },
          { simbolo: 'concluir', desc: 'therefore, as a result, that\'s why.' },
        ],
      },
      exemplo: {
        titulo: 'Um argumento estruturado',
        celulas: [
          { ref: 'afirmar', valor: 'I believe remote work is better.' },
          { ref: 'razão+ex', valor: 'Firstly, it saves time. For example, two hours a day.' },
          { ref: 'objeção', valor: 'On the other hand, some find it isolating, but...' },
          { ref: 'concluir', valor: 'Therefore, the benefits outweigh the costs.' },
        ],
        formula: 'afirmação + razão + exemplo + resposta à objeção + conclusão',
        resultado: 'Você defende ideias de forma organizada e convincente.',
        comentario: 'Argumento forte antecipa o contra-argumento: ao dizer "on the other hand, some say... but..." você mostra que pensou nos dois lados, o que dá credibilidade. Memorize os conectores por função (sequenciar, exemplificar, contrastar, concluir) e use-os como trilhos do seu raciocínio. Sempre ancore razões em exemplos concretos — "for example, I save two hours" convence muito mais que uma afirmação abstrata. Estrutura, não volume, é o que persuade.',
      },
      vocabulario: [
        { palavra: 'signposting', def: 'sinalizar — conectores que organizam o discurso.' },
        { palavra: 'on the other hand', def: 'por outro lado — introduz o contraponto.' },
        { palavra: 'therefore', def: 'portanto — conclusão de causa-efeito.' },
      ],
      chave: [
        'Sequencie argumentos: firstly, secondly, finally',
        'Ancore cada razão em um exemplo concreto',
        'Antecipe a objeção com "on the other hand"',
      ],
      porque: 'Argumentar com estrutura é o auge da conversa: convence, soa sofisticado e mostra raciocínio claro. Os conectores são os trilhos que guiam quem te ouve até sua conclusão.',
    },
    pratica: {
      instrucao: 'Construa e defenda um argumento estruturado.',
      passos: [
        'Liste conectores por função (sequenciar/exemplificar/contrastar/concluir)',
        'Escolha um tema polêmico e tome um lado',
        'Liste 3 razões para sua posição',
        'Dê um exemplo concreto para cada razão',
        'Antecipe 1 objeção e responda a ela',
        'Monte o argumento completo com conectores',
        'Defenda-o em voz alta em ~1 minuto',
      ],
    },
    desafio: {
      cenario: 'Escolha um tema (ex.: "Social media does more harm than good"). Defenda uma posição com pelo menos 3 razões, cada uma com exemplo, antecipe uma objeção e amarre com uma conclusão — tudo sinalizado com conectores.',
      requisitos: [
        'Tomei uma posição clara',
        'Apresentei 3+ razões sequenciadas',
        'Ancorei cada razão num exemplo',
        'Antecipei e respondi a uma objeção',
        'Concluí com therefore/as a result/that\'s why',
      ],
      dica: 'Use os conectores como esqueleto: escreva "Firstly... For example... On the other hand... Therefore..." e preencha. A estrutura guia o conteúdo.',
    },
    validacao: [
      'Sequencio argumentos com conectores',
      'Sustento razões com exemplos concretos',
      'Antecipo e respondo objeções',
      'Concluo com conectores de causa-efeito',
      'Defendo uma posição de forma convincente',
    ],
  },

  'en-b2-fluencia-6': {
    trilhaId: 'en-b2-fluencia', numero: 6, titulo: 'Projeto: uma conversa espontânea',
    tempoTotal: 24, xp: 150, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: fillers, opiniões, paráfrase, storytelling e argumentação numa só conversa espontânea — do "hi" ao "see you". Este projeto mostra que você não só sabe inglês: você conversa em inglês.',
      conceito: {
        titulo: 'Tudo junto numa conversa real',
        texto: 'Este projeto integra as cinco habilidades da trilha numa única conversa fluida e espontânea — como um bate-papo real com um amigo que fala inglês. Você vai conduzir um diálogo (real com alguém, ou simulado representando os dois lados) que passe naturalmente por: ABERTURA com small talk e fillers ("Hey, how\'s it going? Well, you know, busy week..."); uma TROCA DE OPINIÕES sobre um tema, em que você opina, concorda e discorda educadamente ("If you ask me... I see your point, but..."); um momento em que você ESQUECE/CONTORNA uma palavra com paráfrase ("you know, the thing you use to..."); a narração de uma HISTÓRIA curta com gancho, conectores e desfecho; um mini-DEBATE em que você defende uma posição com razões e exemplos; e um FECHAMENTO natural ("Anyway, I should go. Great talking to you!"). O objetivo não é perfeição gramatical — é FLUIDEZ: a conversa flui, você nunca trava de vez, mantém a bola rolando e soa natural. Avalie-se por continuidade (não houve silêncios mortos?), variedade (usou as cinco habilidades?) e naturalidade (soou como conversa de verdade?). Concluir este projeto é a prova de que você atingiu fluência conversacional B2 — o objetivo de todo o módulo de inglês.',
      },
      estrutura: {
        titulo: 'Roteiro da conversa completa',
        partes: [
          { simbolo: 'abertura', desc: 'small talk + fillers para começar leve.' },
          { simbolo: 'opiniões', desc: 'opinar, concordar e discordar com nuance.' },
          { simbolo: 'história+paráfrase', desc: 'contar um causo, contornar palavras.' },
          { simbolo: 'debate+fecho', desc: 'defender uma ideia e encerrar natural.' },
        ],
      },
      exemplo: {
        titulo: 'Trechos da conversa',
        celulas: [
          { ref: 'abertura', valor: 'Hey! How\'s it going? Well, busy week, you know.' },
          { ref: 'opinião', valor: 'If you ask me... — I see your point, but...' },
          { ref: 'história', valor: 'So, this funny thing happened... in the end...' },
          { ref: 'fecho', valor: 'Anyway, I should go. Great talking to you!' },
        ],
        formula: 'abertura + opiniões + história/paráfrase + debate + fecho = conversa fluente',
        resultado: 'Você conduz uma conversa B2 inteira com naturalidade.',
        comentario: 'Não decore um roteiro rígido — deixe a conversa fluir e use as habilidades conforme surgem as oportunidades. Se simular sozinho, represente os dois lados com vozes/tons diferentes. Grave-se: ao ouvir, marque onde travou, onde faltou um filler, onde a paráfrase salvou. O sucesso aqui não é zero erros — é a conversa nunca morrer e soar como gente de verdade conversando. Esse é o destino final do módulo: não saber inglês, mas viver em inglês.',
      },
      vocabulario: [
        { palavra: 'spontaneous', def: 'espontâneo — sem roteiro decorado.' },
        { palavra: 'small talk', def: 'conversa leve de abertura/social.' },
        { palavra: 'Great talking to you', def: 'foi ótimo conversar — fecho natural.' },
      ],
      chave: [
        'Integre as 5 habilidades numa conversa só',
        'Priorize fluidez e continuidade, não perfeição',
        'Abra e feche de forma natural',
      ],
      porque: 'Este projeto é a prova final de fluência: juntar fillers, opiniões, paráfrase, storytelling e debate numa conversa que flui. É o objetivo de todo o módulo de inglês.',
    },
    pratica: {
      instrucao: 'Prepare e conduza uma conversa espontânea completa.',
      passos: [
        'Escolha um tema e um interlocutor (real ou simulado)',
        'Planeje a abertura com small talk e fillers',
        'Defina uma opinião para trocar e debater',
        'Prepare um causo curto para contar',
        'Identifique 1 palavra para contornar com paráfrase',
        'Conduza a conversa do "hi" ao "bye" sem travar',
        'Grave, ouça e marque acertos e pontos a melhorar',
      ],
    },
    desafio: {
      cenario: 'Conduza (real ou simulada) uma conversa espontânea de 2-3 minutos que inclua: abertura com fillers, uma troca de opiniões com discordância educada, uma história curta, um momento de paráfrase e um mini-debate, fechando de forma natural.',
      requisitos: [
        'Abri com small talk e fillers naturais',
        'Troquei opiniões, concordando e discordando',
        'Contei uma história com começo-meio-fim',
        'Contornei ao menos uma palavra com paráfrase',
        'Defendi uma posição e fechei naturalmente sem travar',
      ],
      dica: 'Não busque perfeição — busque que a conversa NUNCA morra. Se travar, use filler ou paráfrase e siga. Fluidez vence correção aqui.',
    },
    validacao: [
      'Conduzo uma conversa do início ao fim',
      'Integro fillers, opiniões, paráfrase e história',
      'Defendo ideias e discordo com elegância',
      'Não travo de vez — sempre contorno',
      'Soo natural, como numa conversa real',
    ],
  },
};
