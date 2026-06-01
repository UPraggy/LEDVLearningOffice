// ============================================================================
// CONTEÚDO — Inglês B2: Expressões e Idioms (en-b2-expressoes)
// Idioms, phrasal verbs, collocations, gírias e registro informal, e como
// soar natural em vez de "traduzido". Projeto: falar como um nativo.
// ============================================================================

export const EN_B2_EXPRESSOES = {
  'en-b2-expressoes-1': {
    trilhaId: 'en-b2-expressoes', numero: 1, titulo: 'O que são idioms',
    tempoTotal: 13, xp: 100, vertente: 'ingles',
    aula: {
      gancho: '"It\'s raining cats and dogs" não tem gato nem cachorro caindo. "Break a leg" não é desejo de azar. Idioms são expressões cujo sentido não vem das palavras soltas — e são exatamente o que separa o inglês "de escola" do inglês real.',
      conceito: {
        titulo: 'Idioms: sentido além das palavras',
        texto: 'Um idiom (expressão idiomática) é um grupo de palavras com significado FIXO que não se deduz traduzindo cada palavra. "It\'s a piece of cake" não fala de bolo — significa "é muito fácil". "Break a leg" é "boa sorte". "Once in a blue moon" é "raramente". "Hit the road" é "cair na estrada/ir embora". "Under the weather" é "passando mal". A regra de ouro: idioms se aprendem INTEIROS, como blocos, nunca palavra por palavra — e quase nunca podem ser traduzidos literalmente do português (ou para ele). Por que importam no B2? Porque nativos os usam o tempo todo: entender idioms é entender filmes, conversas e textos reais; usá-los (com moderação) faz você soar natural. O risco é o exagero — encher a fala de idioms soa forçado. Comece reconhecendo os mais comuns ao ouvir/ler, e use só os que você domina bem. Este é o salto do inglês correto para o inglês natural.',
      },
      estrutura: {
        titulo: 'Como idioms funcionam',
        partes: [
          { simbolo: 'sentido fixo', desc: 'piece of cake = muito fácil (não bolo).' },
          { simbolo: 'bloco inteiro', desc: 'aprender a expressão completa, não as palavras.' },
          { simbolo: 'não literal', desc: 'não traduza palavra por palavra.' },
          { simbolo: 'com moderação', desc: 'reconhecer muitos, usar os que domina.' },
        ],
      },
      exemplo: {
        titulo: 'Idioms comuns',
        celulas: [
          { ref: 'idiom', valor: 'It\'s a piece of cake. — é muito fácil.' },
          { ref: 'idiom', valor: 'Break a leg! — boa sorte!' },
          { ref: 'idiom', valor: 'I\'m under the weather. — estou meio mal.' },
          { ref: 'idiom', valor: 'Once in a blue moon. — muito raramente.' },
        ],
        formula: 'idiom = bloco fixo com sentido próprio (não literal)',
        resultado: 'Você entende expressões além do literal.',
        comentario: 'A chave mental: pare de traduzir palavra por palavra. Quando um grupo de palavras "não faz sentido" literalmente, suspeite de um idiom e aprenda o sentido inteiro. Priorize RECONHECER muitos (pra entender nativos) e USAR poucos, só os que você domina bem — idiom usado errado ou em excesso soa pior que não usar. É o começo da naturalidade.',
      },
      vocabulario: [
        { palavra: 'idiom', def: 'expressão idiomática — sentido fixo não literal.' },
        { palavra: 'piece of cake', def: 'muito fácil — idiom clássico.' },
        { palavra: 'literal vs figurative', def: 'literal x figurado (idioms são figurados).' },
      ],
      chave: [
        'Idiom tem sentido fixo, não literal',
        'Aprenda a expressão inteira, como bloco',
        'Reconheça muitos; use só os que domina',
      ],
      porque: 'Idioms são o que torna o inglês real e natural. Entendê-los destrava filmes, séries e conversas autênticas — e é o primeiro passo do B2 para deixar de soar "traduzido".',
    },
    pratica: {
      instrucao: 'Conheça e contextualize idioms comuns.',
      passos: [
        'Liste 10 idioms com sentido e tradução livre',
        'Explique por que cada um não é literal',
        'Use 3 idioms em frases próprias',
        'Encontre o equivalente em português (se houver)',
        'Marque os 5 idioms que você usaria',
        'Identifique idioms num diálogo curto',
        'Memorize 5 como blocos inteiros',
      ],
    },
    desafio: {
      cenario: 'Escolha 8 idioms comuns, explique o sentido de cada um e use 4 deles em frases suas que mostrem que você entendeu o significado figurado.',
      requisitos: [
        'Listei 8 idioms com seus sentidos',
        'Expliquei por que não são literais',
        'Usei 4 idioms em frases próprias corretas',
        'Comparei com o português quando possível',
        'Marquei os que usaria no dia a dia',
      ],
      dica: 'Ao encontrar um idiom novo, NUNCA traduza palavra por palavra — busque o sentido inteiro e anote a expressão completa. Pense nos idioms como "palavras longas" de sentido único.',
    },
    validacao: [
      'Entendo o que é um idiom',
      'Não traduzo idioms literalmente',
      'Aprendo a expressão como bloco',
      'Uso idioms que domino',
      'Reconheço idioms em contexto',
    ],
  },

  'en-b2-expressoes-2': {
    trilhaId: 'en-b2-expressoes', numero: 2, titulo: 'Phrasal verbs essenciais',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: '"Get up", "turn on", "give up", "look after", "run out of". Phrasal verbs — verbo + partícula — são onipresentes no inglês falado, e o mesmo verbo muda totalmente de sentido com cada partícula. É o terror e a chave da fluência ao mesmo tempo.',
      conceito: {
        titulo: 'Phrasal verbs: verbo + partícula',
        texto: 'Um phrasal verb é um verbo combinado com uma preposição/advérbio que muda seu sentido: get + up = levantar; get + on = se dar bem / embarcar; get + over = superar; get + by = se virar. A mesma base "get" vira dezenas de verbos diferentes. São CENTRAIS no inglês falado — nativos preferem "find out" a "discover", "put off" a "postpone", "give up" a "abandon". Tipos importantes: SEPARÁVEIS (o objeto pode ir no meio): "turn the light on" = "turn on the light"; com pronome, é OBRIGATÓRIO no meio: "turn it on" (nunca "turn on it"). INSEPARÁVEIS: "look after the kids" (não se separa). Alguns têm 3 partes: "run out of", "look forward to", "get along with". A estratégia que funciona: NÃO decore listas enormes — aprenda phrasal verbs em CONTEXTO, agrupados por tema ou por verbo-base, e priorize os 50-100 mais comuns. Eles são, talvez, o maior salto de naturalidade do inglês.',
      },
      estrutura: {
        titulo: 'Tipos de phrasal verb',
        partes: [
          { simbolo: 'verbo+partícula', desc: 'get up, turn on, give up, find out.' },
          { simbolo: 'separável', desc: 'turn the TV on / turn it on (pronome no meio).' },
          { simbolo: 'inseparável', desc: 'look after the kids (não separa).' },
          { simbolo: '3 partes', desc: 'run out of, look forward to, get along with.' },
        ],
      },
      exemplo: {
        titulo: 'A família "get"',
        celulas: [
          { ref: 'get up', valor: 'I get up at seven. — eu levanto às sete.' },
          { ref: 'get on', valor: 'They get on well. — eles se dão bem.' },
          { ref: 'get over', valor: 'She got over the flu. — ela superou a gripe.' },
          { ref: 'separável', valor: 'Turn it off, please. — desligue (pronome no meio).' },
        ],
        formula: 'verbo + partícula = novo sentido (separável ou não)',
        resultado: 'Você usa phrasal verbs naturalmente.',
        comentario: 'Duas regras práticas salvam: (1) com PRONOME, o phrasal separável OBRIGA o pronome no meio — "turn it on", jamais "turn on it"; (2) não tente decorar listas gigantes — aprenda em contexto e por verbo-base (todos os "get", todos os "take"). Nativos usam phrasal verbs em vez dos verbos "formais" o tempo todo; dominá-los é o atalho mais rápido pra soar natural.',
      },
      vocabulario: [
        { palavra: 'phrasal verb', def: 'verbo + partícula com sentido próprio.' },
        { palavra: 'separable / inseparable', def: 'separável / inseparável (posição do objeto).' },
        { palavra: 'find out / give up', def: 'descobrir / desistir — phrasais comuns.' },
      ],
      chave: [
        'Verbo + partícula muda o sentido',
        'Pronome vai no meio: turn it on',
        'Aprenda em contexto, por verbo-base',
      ],
      porque: 'Phrasal verbs são onipresentes no inglês falado e o maior salto de naturalidade. Quem os domina entende e fala como nativo; quem os evita soa sempre formal e "de livro".',
    },
    pratica: {
      instrucao: 'Domine phrasal verbs por verbo-base e contexto.',
      passos: [
        'Liste 6 phrasais do verbo "get" com sentidos',
        'Liste 6 do verbo "take" ou "put"',
        'Use 4 phrasais em frases próprias',
        'Pratique a posição do pronome: "turn it on"',
        'Identifique separáveis e inseparáveis',
        'Inclua um de 3 partes (look forward to)',
        'Memorize 10 phrasais comuns em contexto',
      ],
    },
    desafio: {
      cenario: 'Escolha 10 phrasal verbs comuns (de 2-3 verbos-base) e use-os em frases próprias, respeitando a posição do objeto/pronome e marcando quais são separáveis.',
      requisitos: [
        'Usei 10 phrasal verbs em frases corretas',
        'Agrupei alguns por verbo-base',
        'Posicionei o pronome no meio (turn it on)',
        'Identifiquei separáveis e inseparáveis',
        'Inclui um phrasal de 3 partes',
      ],
      dica: 'Esqueça listas de 200 phrasal verbs decorados — não funciona. Aprenda 5-10 por vez, em frases reais, agrupados por verbo-base. O contexto fixa o sentido muito melhor que a tradução solta.',
    },
    validacao: [
      'Entendo verbo + partícula',
      'Uso phrasais comuns em contexto',
      'Posiciono o pronome corretamente',
      'Distingo separável de inseparável',
      'Aprendo por verbo-base',
    ],
  },

  'en-b2-expressoes-3': {
    trilhaId: 'en-b2-expressoes', numero: 3, titulo: 'Collocations: palavras que andam juntas',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'Você diz "make a mistake", não "do a mistake". "Heavy rain", não "strong rain". "Take a photo", não "make a photo". Certas palavras simplesmente andam JUNTAS em inglês — e usar a combinação certa é o que soa natural.',
      conceito: {
        titulo: 'Collocations: combinações naturais',
        texto: 'Collocation é a tendência de certas palavras aparecerem JUNTAS de forma natural — combinações que nativos usam sem pensar e que soam "erradas" quando trocadas. Exemplos clássicos com MAKE x DO: make a mistake, make a decision, make money, make friends VS do homework, do business, do the dishes, do a favor. Não há regra lógica — é uso. Outras: "heavy rain/traffic" (não "strong"), "fast food" (não "quick food"), "take a shower/photo/break", "have breakfast/fun/a look", "strong coffee/accent", "highly likely", "deeply sorry". Por que importam? Porque a gramática pode estar perfeita e ainda assim a frase soar estranha se a collocation estiver errada — "I did a mistake" é compreensível mas imediatamente revela o falante não nativo. A estratégia: aprenda substantivos e verbos COM seus parceiros habituais, não isolados. Anote "make a decision" como uma unidade. Collocations são o nível mais sutil — e mais revelador — da naturalidade no inglês.',
      },
      estrutura: {
        titulo: 'Padrões de collocation',
        partes: [
          { simbolo: 'make x do', desc: 'make a mistake / do homework.' },
          { simbolo: 'adj+subst', desc: 'heavy rain, strong coffee, fast food.' },
          { simbolo: 'have/take', desc: 'have a look, take a break/shower.' },
          { simbolo: 'aprender junto', desc: 'memorizar a combinação, não a palavra só.' },
        ],
      },
      exemplo: {
        titulo: 'Combinações certas',
        celulas: [
          { ref: 'make', valor: 'make a decision / make a mistake — fazer (criar).' },
          { ref: 'do', valor: 'do homework / do the dishes — fazer (tarefa).' },
          { ref: 'adj', valor: 'heavy rain, strong coffee — não "strong rain".' },
          { ref: 'take', valor: 'take a photo / take a break — tirar/fazer.' },
        ],
        formula: 'palavra + parceiro habitual = collocation natural',
        resultado: 'Você combina palavras como nativo.',
        comentario: 'Collocations não têm lógica — têm USO. "Make a mistake" e "do homework" usam verbos diferentes pra "fazer" sem razão dedutível: você só aprende vendo e ouvindo. A estratégia que funciona: sempre que aprender um substantivo, anote o verbo/adjetivo que o acompanha ("make a decision", "heavy rain"). É o detalhe que distingue inglês correto de inglês natural.',
      },
      vocabulario: [
        { palavra: 'collocation', def: 'combinação natural de palavras (make a mistake).' },
        { palavra: 'make vs do', def: 'os dois "fazer" — diferentes collocations.' },
        { palavra: 'heavy / strong', def: 'intensificadores: heavy rain, strong coffee.' },
      ],
      chave: [
        'Certas palavras andam juntas por uso, não regra',
        'make x do: aprenda quais vão com cada um',
        'Memorize a combinação, não a palavra isolada',
      ],
      porque: 'Collocations são o nível mais sutil da naturalidade: a frase pode estar gramaticalmente perfeita e ainda soar estranha. Dominá-las é o acabamento fino do inglês de quem soa nativo.',
    },
    pratica: {
      instrucao: 'Pratique combinações naturais de palavras.',
      passos: [
        'Liste 6 collocations com "make" e 6 com "do"',
        'Liste 5 collocations adjetivo+substantivo',
        'Liste 5 com "have" e "take"',
        'Corrija 4 collocations erradas (ex.: do a mistake)',
        'Use 5 collocations em frases próprias',
        'Anote cada substantivo com seu parceiro',
        'Memorize 10 combinações como unidades',
      ],
    },
    desafio: {
      cenario: 'Monte uma lista de 12 collocations corretas (make/do, have/take, adjetivo+substantivo), corrija 4 combinações erradas comuns e use 5 collocations em frases suas.',
      requisitos: [
        'Listei collocations com make e do corretas',
        'Inclui have/take e adjetivo+substantivo',
        'Corrigi 4 collocations erradas',
        'Usei 5 collocations em frases próprias',
        'Anotei combinações como unidades',
      ],
      dica: 'Quando aprender uma palavra nova, pergunte sempre: "com que verbo/adjetivo ela costuma vir?". Aprender "decision" sozinho é meio caminho; aprender "make a decision" é o caminho inteiro.',
    },
    validacao: [
      'Entendo o conceito de collocation',
      'Distingo make de do',
      'Uso adjetivos certos (heavy, strong)',
      'Corrijo combinações erradas',
      'Aprendo palavras com seus parceiros',
    ],
  },

  'en-b2-expressoes-4': {
    trilhaId: 'en-b2-expressoes', numero: 4, titulo: 'Gírias e registro informal',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: '"What\'s up?", "It\'s cool", "I\'m gonna", "kinda tired", "you guys". O inglês informal real está cheio de gírias e reduções que nenhum livro formal ensina — mas que aparecem em toda conversa, série e rede social.',
      conceito: {
        titulo: 'O inglês informal de verdade',
        texto: 'Existe um abismo entre o inglês "de livro" e o que se fala no dia a dia. GÍRIAS comuns: cool/awesome (legal/incrível), guy (cara), stuff (coisas), kid (criança/jovem), buddy/mate (amigo), to hang out (sair/passar tempo), to chill (relaxar), wanna/gonna/gotta (want to/going to/got to), kinda/sorta (kind of/sort of). EXPRESSÕES de conversa: "What\'s up?" (e aí?), "No way!" (não acredito!), "You bet" (com certeza), "My bad" (foi mal), "Never mind" (deixa pra lá), "I\'m good" (estou bem/não, obrigado). REDUÇÕES na fala rápida: "gonna" (going to), "wanna" (want to), "gotta" (got to), "lemme" (let me), "gimme" (give me). REGRA CRÍTICA de registro: gíria é para contextos INFORMAIS (amigos, redes, conversa casual) e JAMAIS em e-mail de trabalho, entrevista ou texto formal. Escreve-se "going to" mesmo dizendo "gonna". Saber o registro certo é mais importante que conhecer muitas gírias: usar gíria no lugar errado soa pior que falar formal demais. Entender gíria destrava o inglês real; usá-la com discernimento mostra maturidade no idioma.',
      },
      estrutura: {
        titulo: 'Registros e reduções',
        partes: [
          { simbolo: 'gírias', desc: 'cool, awesome, guy, stuff, hang out, chill.' },
          { simbolo: 'expressões', desc: 'What\'s up? No way! My bad. Never mind.' },
          { simbolo: 'reduções', desc: 'gonna, wanna, gotta, kinda (fala/casual).' },
          { simbolo: 'registro', desc: 'informal só em contexto casual, nunca formal.' },
        ],
      },
      exemplo: {
        titulo: 'Informal x formal',
        celulas: [
          { ref: 'informal', valor: 'Wanna hang out later? — quer sair depois?' },
          { ref: 'formal', valor: 'Would you like to meet later? — versão formal.' },
          { ref: 'gíria', valor: 'That movie was awesome! — foi incrível!' },
          { ref: 'reação', valor: 'No way! Really? — não acredito! sério?' },
        ],
        formula: 'gíria/redução = só informal • formal = trabalho/escrita',
        resultado: 'Você entende e usa o inglês casual.',
        comentario: 'A habilidade decisiva NÃO é saber muitas gírias — é saber QUANDO usá-las. "Gonna" e "wanna" são ótimos com amigos e na fala, mas você escreve "going to" e "want to" em qualquer texto sério. Domine o registro: gíria certa no contexto certo soa natural; gíria no e-mail de trabalho soa amador. Entender gíria (séries, conversa) vale ainda mais que produzi-la.',
      },
      vocabulario: [
        { palavra: 'slang / register', def: 'gíria / registro (nível de formalidade).' },
        { palavra: 'gonna / wanna / gotta', def: 'reduções de going to / want to / got to.' },
        { palavra: 'hang out / chill', def: 'sair/passar tempo / relaxar.' },
      ],
      chave: [
        'Gíria e reduções só em contexto informal',
        'Em texto/trabalho, use a forma plena (going to)',
        'Saber o registro vale mais que saber muitas gírias',
      ],
      porque: 'O inglês real é cheio de gíria e reduções que nenhum livro formal ensina. Entendê-las destrava séries e conversas autênticas; usá-las no contexto certo mostra domínio maduro do idioma.',
    },
    pratica: {
      instrucao: 'Explore o inglês informal com consciência de registro.',
      passos: [
        'Liste 10 gírias comuns com sentido',
        'Liste as reduções: gonna, wanna, gotta, kinda',
        'Escreva 3 falas casuais com gíria',
        'Converta cada uma para a versão formal',
        'Liste 5 expressões de reação (No way!, My bad)',
        'Marque o que é só falado, nunca escrito formal',
        'Pratique alternar entre os dois registros',
      ],
    },
    desafio: {
      cenario: 'Escreva um diálogo casual entre amigos usando gírias e reduções e depois reescreva a mesma conversa em registro formal, mostrando que domina os dois níveis.',
      requisitos: [
        'Usei gírias e reduções na versão casual',
        'Inclui expressões de reação (No way!, etc.)',
        'Reescrevi tudo em registro formal',
        'Converti reduções para a forma plena',
        'Mostrei consciência de quando usar cada um',
      ],
      dica: 'Aprenda gíria primeiro para ENTENDER (séries, redes, conversa) — esse é o ganho maior. Para produzir, comece com poucas e bem usadas. E grave a regra: o que você diz "gonna" se escreve "going to".',
    },
    validacao: [
      'Entendo gírias e reduções comuns',
      'Sei expressões de reação casuais',
      'Converto informal em formal',
      'Respeito o registro do contexto',
      'Priorizo entender antes de produzir',
    ],
  },

  'en-b2-expressoes-5': {
    trilhaId: 'en-b2-expressoes', numero: 5, titulo: 'Soar natural, não traduzido',
    tempoTotal: 14, xp: 110, vertente: 'ingles',
    aula: {
      gancho: 'A frase está gramaticalmente correta, mas soa "estranha", "de brasileiro". Por quê? Porque foi pensada em português e traduzida. Aprender a pensar EM inglês — e evitar as armadilhas da tradução literal — é o último degrau da naturalidade.',
      conceito: {
        titulo: 'Pensar em inglês, não traduzir',
        texto: 'O maior obstáculo do falante avançado não é gramática — é a TRADUÇÃO mental do português. Isso gera erros sutis: FALSE FRIENDS (palavras parecidas, sentidos diferentes): "actually" = na verdade (não "atualmente" = currently), "push" = empurrar (não "puxar" = pull), "pretend" = fingir (não "pretender" = intend), "library" = biblioteca (não "livraria" = bookstore), "realize" = perceber (não "realizar" = carry out). TRADUÇÕES LITERAIS que não existem: "make a question" → o certo é "ask a question"; "I have 20 years" → "I am 20 years old"; "take a decision" → "make a decision". DIFERENÇAS de estrutura: inglês usa muito mais voz passiva, phrasal verbs e formas contraídas que o português. A estratégia para soar natural: 1) aprenda EXPRESSÕES inteiras (chunks), não palavras; 2) consuma muito inglês real (séries, podcasts) e IMITE como as coisas são ditas; 3) ao falar, não traduza frase por frase — recupere o "bloco" que você já ouviu para aquela situação. Naturalidade vem de input massivo + imitação, não de traduzir mais rápido. Este é o trabalho de toda a vida no idioma — e a marca do B2 maduro.',
      },
      estrutura: {
        titulo: 'Armadilhas da tradução',
        partes: [
          { simbolo: 'false friends', desc: 'actually≠atualmente, pretend≠pretender.' },
          { simbolo: 'literal errado', desc: 'ask a question (não "make a question").' },
          { simbolo: 'chunks', desc: 'aprender blocos prontos, não palavras soltas.' },
          { simbolo: 'input+imitar', desc: 'consumir inglês real e imitar como se diz.' },
        ],
      },
      exemplo: {
        titulo: 'Natural x traduzido',
        celulas: [
          { ref: 'false friend', valor: 'Actually, I disagree. — na verdade (não "atualmente").' },
          { ref: 'literal', valor: 'Can I ask a question? — não "make a question".' },
          { ref: 'idade', valor: 'I\'m 20 years old. — não "I have 20 years".' },
          { ref: 'chunk', valor: 'It depends on... — bloco pronto, não traduzido.' },
        ],
        formula: 'input real + imitar chunks > traduzir do português',
        resultado: 'Você soa natural, não traduzido.',
        comentario: 'O salto final não é estudar mais gramática — é parar de traduzir. Cuidado redobrado com false friends (actually, pretend, library, push): são os erros que mais entregam. E mude o método: em vez de montar frases do português, RECUPERE blocos prontos que você ouviu em inglês real. Quanto mais input autêntico você consome e imita, mais natural fica — esse é o trabalho de uma vida no idioma.',
      },
      vocabulario: [
        { palavra: 'false friend', def: 'palavra parecida, sentido diferente (actually).' },
        { palavra: 'chunk', def: 'bloco/expressão pronta aprendida inteira.' },
        { palavra: 'input', def: 'inglês real que você consome (ouvir/ler).' },
      ],
      chave: [
        'Cuidado com false friends (actually, pretend, push)',
        'Aprenda chunks prontos, não traduções',
        'Naturalidade vem de input + imitação',
      ],
      porque: 'Pensar em inglês, e não traduzir, é o degrau final da naturalidade. Evitar false friends e recuperar blocos prontos é o que faz o falante avançado soar natural em vez de "de brasileiro".',
    },
    pratica: {
      instrucao: 'Treine pensar em inglês e evitar traduções literais.',
      passos: [
        'Liste 8 false friends com os dois sentidos',
        'Corrija 5 traduções literais erradas',
        'Aprenda 6 chunks prontos de situações comuns',
        'Reescreva 3 frases "traduzidas" de forma natural',
        'Escolha uma fonte de input real (série/podcast)',
        'Imite 3 falas exatamente como foram ditas',
        'Pratique recuperar blocos em vez de traduzir',
      ],
    },
    desafio: {
      cenario: 'Identifique 6 false friends e 4 traduções literais erradas, corrija todas para a forma natural, e reescreva um parágrafo "traduzido do português" para soar como inglês nativo.',
      requisitos: [
        'Identifiquei 6 false friends corretamente',
        'Corrigi 4 traduções literais erradas',
        'Reescrevi um texto para soar natural',
        'Usei chunks/expressões prontas',
        'Expliquei como evito traduzir mentalmente',
      ],
      dica: 'O melhor exercício de naturalidade é o SHADOWING: ouça uma fala em inglês real e repita imitando ritmo, palavras e entonação. Você absorve os "blocos" certos e para de montar frases traduzindo.',
    },
    validacao: [
      'Reconheço false friends comuns',
      'Evito traduções literais erradas',
      'Aprendo e uso chunks prontos',
      'Consumo e imito input real',
      'Penso em inglês, não traduzo',
    ],
  },

  'en-b2-expressoes-6': {
    trilhaId: 'en-b2-expressoes', numero: 6, titulo: 'Projeto: fale como um nativo',
    tempoTotal: 24, xp: 150, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo numa fala que soe genuinamente natural: você vai contar uma história ou opinião usando idioms, phrasal verbs, collocations certas e o registro adequado — evitando qualquer "tradução de brasileiro". É a sua prova de naturalidade no B2.',
      conceito: {
        titulo: 'Uma fala natural de ponta a ponta',
        texto: 'Este projeto integra toda a trilha numa produção que demonstra naturalidade. Escolha um formato: contar uma HISTÓRIA pessoal (uma viagem, um perrengue, uma conquista) ou dar sua OPINIÃO sobre um tema (um filme, uma tendência, uma polêmica leve). A fala deve, ao longo de 12 a 16 frases, incorporar NATURALMENTE: 1) pelo menos 3 IDIOMS bem usados ("a piece of cake", "once in a while"); 2) vários PHRASAL VERBS no lugar de verbos formais ("find out" em vez de discover, "give up", "hang out"); 3) COLLOCATIONS corretas ("make a decision", "have a great time", "heavy traffic"); 4) o REGISTRO adequado ao formato (casual se for história entre amigos; mais neutro se for opinião); 5) ZERO traduções literais ou false friends. O segredo é a naturalidade, não a quantidade: melhor 3 idioms bem encaixados que 10 forçados. Grave-se, ouça e compare com como um nativo diria. Refaça buscando soar fluido, não "estudado". O resultado é uma fala que poderia sair de um nativo casual — o ápice desta trilha e prova de que você cruzou a fronteira do inglês correto para o inglês natural.',
      },
      estrutura: {
        titulo: 'O que a fala deve conter',
        partes: [
          { simbolo: 'idioms', desc: '3+ idioms bem encaixados, sem exagero.' },
          { simbolo: 'phrasal verbs', desc: 'preferir phrasais a verbos formais.' },
          { simbolo: 'collocations', desc: 'combinações naturais corretas.' },
          { simbolo: 'registro+natural', desc: 'tom adequado, zero tradução literal.' },
        ],
      },
      exemplo: {
        titulo: 'Uma fala natural (trecho)',
        celulas: [
          { ref: 'idiom', valor: 'The trip was a piece of cake to plan. — muito fácil.' },
          { ref: 'phrasal', valor: 'We found out about a cool place to hang out.' },
          { ref: 'collocation', valor: 'We had a great time despite the heavy rain.' },
          { ref: 'natural', valor: 'Honestly, I\'d totally do it again. — soa nativo.' },
        ],
        formula: 'idioms + phrasais + collocations + registro = naturalidade',
        resultado: 'Você fala como um nativo casual.',
        comentario: 'O critério não é quantidade, é NATURALIDADE: 3 idioms perfeitamente encaixados valem mais que 10 forçados. Prefira phrasal verbs aos verbos formais, acerte as collocations, mantenha um registro coerente e elimine qualquer false friend. Grave-se e compare: a pergunta certa é "um nativo diria assim?". Refazer até soar fluido — e não "estudado" — é o coração deste projeto.',
      },
      vocabulario: [
        { palavra: 'fluency / natural', def: 'fluência / natural — o alvo do projeto.' },
        { palavra: 'sound native', def: 'soar nativo — o objetivo da fala.' },
        { palavra: 'storytelling', def: 'contar histórias — formato sugerido.' },
      ],
      chave: [
        'Fala de 12–16 frases que soe genuinamente natural',
        'Integre idioms, phrasais, collocations e registro certo',
        'Naturalidade acima de quantidade; zero tradução literal',
      ],
      porque: 'Produzir uma fala genuinamente natural integra tudo o que a trilha treinou e prova que você cruzou a fronteira mais difícil: do inglês correto para o inglês natural — a marca do falante avançado de verdade.',
    },
    pratica: {
      instrucao: 'Monte e apresente uma fala que soe natural.',
      passos: [
        'Escolha contar uma história ou dar uma opinião',
        'Encaixe 3+ idioms de forma natural',
        'Use phrasal verbs no lugar de verbos formais',
        'Acerte as collocations (make/do, have/take)',
        'Mantenha o registro coerente, sem false friends',
        'Grave-se e compare com como um nativo diria',
        'Refaça buscando fluidez, não perfeição',
      ],
    },
    desafio: {
      cenario: 'Conte uma história ou dê uma opinião em 12 a 16 frases que soem genuinamente naturais, usando 3+ idioms, vários phrasal verbs, collocations corretas e o registro adequado, sem nenhuma tradução literal. Grave-se.',
      requisitos: [
        'Usei 3+ idioms encaixados naturalmente',
        'Preferi phrasal verbs a verbos formais',
        'Usei collocations corretas',
        'Mantive registro coerente, sem false friends',
        'Gravei e comparei com a fala nativa',
      ],
      dica: 'Antes de gravar, ouça um nativo falando sobre um tema parecido e absorva os "blocos" que ele usa. Depois conte a SUA versão. Imitar a forma natural antes de produzir é o que realmente faz você soar nativo.',
    },
    validacao: [
      'Usei idioms com naturalidade',
      'Preferi phrasal verbs aos formais',
      'Acertei as collocations',
      'Mantive o registro adequado',
      'Soei natural, não traduzido',
    ],
  },
};
