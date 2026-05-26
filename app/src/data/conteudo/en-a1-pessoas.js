// ============================================================================
// CONTEÚDO — Inglês A1: Eu e as Pessoas (en-a1-pessoas)
// Família, possessivos, países/nacionalidades, adjetivos, have got.
// ============================================================================

export const EN_A1_PESSOAS = {
  'en-a1-pessoas-1': {
    trilhaId: 'en-a1-pessoas', numero: 1, titulo: 'Família (family)',
    tempoTotal: 9, xp: 40, vertente: 'ingles',
    aula: {
      gancho: 'Falar da família é um dos primeiros assuntos de qualquer conversa. "Tenho dois filhos", "minha mãe", "meu irmão" — com poucas palavras você já conta muito sobre você.',
      conceito: {
        titulo: 'As palavras da família',
        texto: 'Vamos aprender os nomes dos membros da família em inglês. São palavras curtas e muito usadas. Repare que algumas mudam com o sexo (mother/father) e que "parents" significa "pais" (mãe e pai), não "parentes" — um falso amigo comum.',
      },
      estrutura: {
        titulo: 'Os membros da família',
        partes: [
          { simbolo: '👩', desc: 'mother (mãe) / father (pai) — juntos: parents (pais).' },
          { simbolo: '👧', desc: 'daughter (filha) / son (filho) — juntos: children (filhos).' },
          { simbolo: '👫', desc: 'sister (irmã) / brother (irmão).' },
          { simbolo: '👵', desc: 'grandmother (avó) / grandfather (avô); husband (marido) / wife (esposa).' },
        ],
      },
      exemplo: {
        titulo: 'Falando da família',
        celulas: [
          { ref: 'EN', valor: 'I have two children. — Tenho dois filhos. (ái rév tchú tchildren)' },
          { ref: 'EN', valor: 'My mother is a teacher. — Minha mãe é professora.' },
          { ref: 'Falso amigo', valor: 'parents = pais (NÃO "parentes")' },
          { ref: 'Plural', valor: 'child → children (irregular); brother → brothers' },
        ],
        formula: 'mother/father, son/daughter, brother/sister...',
        resultado: 'Você nomeia todos da sua família em inglês.',
        comentario: '"Children" é o plural irregular de "child" (criança/filho). E "parents" = pais; "relatives" (rélativs) = parentes em geral. Cuidado com esse falso amigo!',
      },
      vocabulario: [
        { palavra: 'parents', def: 'Os pais (mãe e pai). Não confunda com "parentes" (relatives).' },
        { palavra: 'children', def: 'Filhos/crianças (plural irregular de child).' },
        { palavra: 'husband / wife', def: 'Marido (râzband) / esposa (uáif).' },
      ],
      chave: [
        'mother/father = mãe/pai; son/daughter = filho/filha',
        'parents = pais (não "parentes")',
        'child → children (plural irregular)',
      ],
      porque: 'Família é assunto universal de conversa. Com esse vocabulário você fala de quem você ama — em viagens, no trabalho, em qualquer apresentação pessoal.',
    },
    pratica: {
      instrucao: 'Pense na sua família real. Vamos nomear cada um em inglês, em voz alta.',
      passos: [
        'Diga "mother" (mãe) e "father" (pai)',
        'Diga "brother" / "sister" e quantos você tem',
        'Se tiver filhos: "son" / "daughter" / "children"',
        'Diga "I have..." + número + membro (I have two brothers)',
        'Pratique "My mother is..." + algo (a teacher, kind)',
        'Diga os avós: grandmother / grandfather',
        'Repita nomeando sua família de verdade',
      ],
    },
    desafio: {
      cenario: 'Liste (e fale) os membros da sua família em inglês, dizendo quantos você tem de cada.',
      requisitos: [
        'Nomeei mãe/pai (mother/father)',
        'Nomeei irmãos e/ou filhos',
        'Usei "I have..." com número',
        'Não confundi parents (pais) com relatives (parentes)',
        'Pratiquei em voz alta',
      ],
      dica: 'Faça uma "árvore" simples no papel com os nomes em inglês ao lado de cada pessoa. Associar a palavra à pessoa real fixa muito mais que decorar listas soltas.',
    },
    validacao: [
      'Sei os membros da família em inglês',
      'Sei "parents = pais"',
      'Sei o plural children',
      'Uso "I have..." pra falar da família',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-pessoas-2': {
    trilhaId: 'en-a1-pessoas', numero: 2, titulo: 'Possessivos: my, your, his, her',
    tempoTotal: 10, xp: 50, vertente: 'ingles',
    aula: {
      gancho: '"Meu", "seu", "dele", "dela" — os possessivos dizem de quem é cada coisa. Em inglês, há um detalhe que confunde muita gente: "his" e "her" dependem do DONO, não do objeto.',
      conceito: {
        titulo: 'De quem é? Os adjetivos possessivos',
        texto: 'Possessivos mostram posse: my (meu), your (seu), his (dele), her (dela), our (nosso), their (deles). O ponto-chave: em inglês, his/her concordam com o DONO, não com a coisa. "Her brother" = o irmão DELA (porque o dono é mulher), mesmo "brother" sendo homem. Isso é diferente do português e merece atenção.',
      },
      estrutura: {
        titulo: 'Os possessivos',
        partes: [
          { simbolo: 'my', desc: 'meu/minha (mái). I → my.' },
          { simbolo: 'your', desc: 'seu/sua (iór). you → your.' },
          { simbolo: 'his / her', desc: 'dele (riz) / dela (rér). he → his; she → her.' },
          { simbolo: 'our / their', desc: 'nosso (áuer) / deles (dér). we → our; they → their.' },
        ],
      },
      exemplo: {
        titulo: 'His x Her (o pulo do gato)',
        celulas: [
          { ref: 'EN', valor: 'This is my mother. — Esta é minha mãe.' },
          { ref: 'Dono mulher', valor: 'Her brother — o irmão DELA (her, porque a dona é mulher)' },
          { ref: 'Dono homem', valor: 'His sister — a irmã DELE (his, porque o dono é homem)' },
          { ref: 'EN', valor: 'What’s your name? — Qual é o SEU nome?' },
        ],
        formula: 'his/her seguem o DONO (não a coisa possuída)',
        resultado: 'Você diz de quem é cada coisa, sem confundir.',
        comentario: 'Regra de ouro: olhe pra QUEM possui. Dona mulher → "her" (her car, her brother). Dono homem → "his" (his car, his sister). A coisa em si não importa pra escolher.',
      },
      vocabulario: [
        { palavra: 'my / your', def: 'meu / seu.' },
        { palavra: 'his / her', def: 'dele / dela — seguem o sexo do DONO.' },
        { palavra: 'our / their', def: 'nosso / deles.' },
      ],
      chave: [
        'my, your, his, her, our, their = possessivos',
        'his/her dependem do DONO, não da coisa',
        'Dona mulher → her; dono homem → his',
      ],
      porque: 'Possessivos aparecem o tempo todo (meu nome, sua casa, o filho dela). Acertar his/her é um detalhe que diferencia quem "arranha" de quem fala inglês com naturalidade.',
    },
    pratica: {
      instrucao: 'Vamos praticar dizendo de quem são as coisas, em voz alta.',
      passos: [
        'Diga: "my name", "my family", "my house"',
        'Aponte algo seu: "This is my..." + objeto',
        'Fale de uma mulher conhecida: "Her name is..." (o nome dela é...)',
        'Fale de um homem conhecido: "His name is..."',
        'Teste o pulo do gato: "her brother" (irmão dela), "his sister" (irmã dele)',
        'Fale do grupo: "our family", "their house"',
        'Monte 3 frases verdadeiras com possessivos',
      ],
    },
    desafio: {
      cenario: 'Escreva e fale 5 frases dizendo de quem são coisas/pessoas, usando vários possessivos — incluindo his e her corretos.',
      requisitos: [
        'Usei "my" e "your" corretamente',
        'Usei "his" pra dono homem e "her" pra dona mulher',
        'Não confundi pelo sexo da coisa possuída',
        'Usei "our" ou "their" pelo menos uma vez',
        'Pratiquei em voz alta',
      ],
      dica: 'Quando errar his/her (todo mundo erra no começo), pare e pergunte: "quem é o DONO?". Com a prática, isso vira automático.',
    },
    validacao: [
      'Sei os possessivos (my, your, his, her, our, their)',
      'Acerto his/her pelo sexo do dono',
      'Uso possessivos em frases reais',
      'Sei "our" e "their"',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-pessoas-3': {
    trilhaId: 'en-a1-pessoas', numero: 3, titulo: 'Países e nacionalidades',
    tempoTotal: 9, xp: 50, vertente: 'ingles',
    aula: {
      gancho: '"Sou do Brasil", "ela é brasileira", "ele é americano" — falar de onde as pessoas são é assunto certo em qualquer encontro internacional. E tem uma diferença importante: país x nacionalidade.',
      conceito: {
        titulo: 'País (lugar) x nacionalidade (a pessoa)',
        texto: 'Em inglês, o país e a nacionalidade são palavras diferentes: Brazil (o país) → Brazilian (brasileiro, a pessoa/adjetivo). Usa-se "from + país" pra origem (I’m from Brazil) ou a nacionalidade direta (I’m Brazilian). Importante: nacionalidades e idiomas começam com LETRA MAIÚSCULA em inglês, sempre.',
      },
      estrutura: {
        titulo: 'País → nacionalidade',
        partes: [
          { simbolo: '🇧🇷', desc: 'Brazil → Brazilian (brazíliãn).' },
          { simbolo: '🇺🇸', desc: 'The USA / America → American.' },
          { simbolo: '🇬🇧', desc: 'England / the UK → English / British.' },
          { simbolo: '🔠', desc: 'Sempre MAIÚSCULA: Brazilian, English (nacionalidade e idioma).' },
        ],
      },
      exemplo: {
        titulo: 'Origem de dois jeitos',
        celulas: [
          { ref: 'Com país', valor: 'I’m from Brazil. — Sou do Brasil.' },
          { ref: 'Com nacion.', valor: 'I’m Brazilian. — Sou brasileiro(a).' },
          { ref: 'Idioma', valor: 'I speak Portuguese. — Falo português.' },
          { ref: 'Pergunta', valor: 'Where are you from? — De onde você é?' },
        ],
        formula: '"I’m from + país"  OU  "I’m + nacionalidade"',
        resultado: 'Você diz sua origem de duas formas.',
        comentario: 'Os idiomas também são maiúsculos: Portuguese (português), English (inglês), Spanish (espanhol). E muitas nacionalidades terminam em -ian, -ish, -ese (Brazilian, Spanish, Japanese).',
      },
      vocabulario: [
        { palavra: 'from', def: 'de (origem). "I’m from..." = sou de...' },
        { palavra: 'nationality', def: 'nacionalidade (a pessoa): Brazilian, American.' },
        { palavra: 'language', def: 'idioma (lénguidj): Portuguese, English, Spanish.' },
      ],
      chave: [
        'País ≠ nacionalidade: Brazil → Brazilian',
        '"I’m from + país" ou "I’m + nacionalidade"',
        'Nacionalidades e idiomas em MAIÚSCULA',
      ],
      porque: 'Dizer de onde você é (e perguntar) é universal em qualquer contato internacional — viagem, trabalho, internet. E a regra da maiúscula evita um erro de escrita muito comum.',
    },
    pratica: {
      instrucao: 'Vamos falar de origens, em voz alta.',
      passos: [
        'Diga sua origem com o país: "I’m from Brazil"',
        'Diga com a nacionalidade: "I’m Brazilian"',
        'Diga o idioma que você fala: "I speak Portuguese"',
        'Pergunte: "Where are you from?" e responda',
        'Fale de outra pessoa: "She is American", "He is from England"',
        'Repare na maiúscula: Brazilian, English, Portuguese',
        'Monte 3 frases sobre origens',
      ],
    },
    desafio: {
      cenario: 'Apresente sua origem e a de 2 pessoas (reais ou famosas) usando país E nacionalidade, com a escrita correta.',
      requisitos: [
        'Usei "I’m from + país"',
        'Usei "I’m + nacionalidade"',
        'Falei o idioma com "I speak..."',
        'Escrevi nacionalidades/idiomas com maiúscula',
        'Pratiquei em voz alta',
      ],
      dica: 'Junte com a missão do "to be" e dos possessivos: "My father is from Italy. He is Italian." Combinar o que você já sabe é o que faz o inglês crescer de verdade.',
    },
    validacao: [
      'Sei a diferença país x nacionalidade',
      'Uso "from" pra origem',
      'Sei dizer o idioma que falo',
      'Escrevo nacionalidades com maiúscula',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-pessoas-4': {
    trilhaId: 'en-a1-pessoas', numero: 4, titulo: 'Descrever pessoas (adjetivos)',
    tempoTotal: 10, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Ela é alta", "ele é simpático", "meu filho é inteligente" — descrever pessoas dá vida à conversa. E em inglês há uma regra de ordem que parece estranha, mas é simples: o adjetivo vem ANTES da coisa.',
      conceito: {
        titulo: 'Adjetivos vêm antes do substantivo',
        texto: 'Adjetivos descrevem (alto, simpático, feliz). A grande diferença pro português: em inglês o adjetivo vem ANTES da palavra que descreve — "a tall man" (um homem alto), não "a man tall". E o adjetivo NÃO muda no plural: "tall men" (homens altos), não "talls". Com o "to be" você descreve qualquer um: "She is kind".',
      },
      estrutura: {
        titulo: 'Adjetivos úteis + a regra',
        partes: [
          { simbolo: 'físico', desc: 'tall (alto), short (baixo), young (jovem), old (velho).' },
          { simbolo: 'jeito', desc: 'kind (gentil), funny (engraçado), smart (inteligente), shy (tímido).' },
          { simbolo: 'ordem', desc: 'Adjetivo ANTES: a tall man (um homem alto).' },
          { simbolo: 'plural', desc: 'Adjetivo NÃO muda: tall men (não "talls").' },
        ],
      },
      exemplo: {
        titulo: 'Descrevendo pessoas',
        celulas: [
          { ref: 'EN', valor: 'She is tall and kind. — Ela é alta e gentil.' },
          { ref: 'Ordem', valor: 'a smart child — uma criança inteligente (adj. antes!)' },
          { ref: 'Plural', valor: 'two funny brothers — dois irmãos engraçados' },
          { ref: 'Com "to be"', valor: 'My father is funny. — Meu pai é engraçado.' },
        ],
        formula: 'adjetivo + substantivo  (a tall man) · com "to be": he is tall',
        resultado: 'Você descreve a aparência e o jeito das pessoas.',
        comentario: 'Erro clássico do brasileiro: dizer "a man tall". Em inglês é sempre "a tall man". E nunca coloque "s" no adjetivo no plural.',
      },
      vocabulario: [
        { palavra: 'adjective', def: 'adjetivo (édjectiv): palavra que descreve (tall, kind).' },
        { palavra: 'tall / short', def: 'alto / baixo (de altura).' },
        { palavra: 'kind / funny', def: 'gentil / engraçado.' },
      ],
      chave: [
        'Adjetivo vem ANTES: a tall man',
        'Adjetivo não muda no plural (tall men, não talls)',
        'Com "to be": She is kind',
      ],
      porque: 'Descrever pessoas enriquece qualquer conversa e é base pra contar histórias e dar opiniões (que você verá no B1). A regra da ordem do adjetivo vale pra descrever tudo, não só gente.',
    },
    pratica: {
      instrucao: 'Pense em pessoas que você conhece. Vamos descrevê-las em voz alta.',
      passos: [
        'Descreva-se: "I am..." + 2 adjetivos (I am kind and funny)',
        'Descreva um familiar: "My mother is..." + adjetivos',
        'Pratique a ordem: "a tall man", "a smart child"',
        'Faça no plural: "two funny brothers" (sem "s" no adjetivo)',
        'Misture: "She is a kind teacher"',
        'Use "and" pra juntar: "tall and young"',
        'Monte 3 descrições de pessoas reais',
      ],
    },
    desafio: {
      cenario: 'Descreva 3 pessoas (você e 2 familiares/amigos) com 2 adjetivos cada, respeitando a ordem adjetivo+substantivo.',
      requisitos: [
        'Descrevi pessoas com "to be" + adjetivos',
        'Coloquei o adjetivo ANTES do substantivo (a tall man)',
        'Não coloquei "s" no adjetivo no plural',
        'Usei "and" pra juntar adjetivos',
        'Pratiquei em voz alta',
      ],
      dica: 'Comece com poucos adjetivos que você usa de verdade (kind, funny, tall, smart). É melhor dominar 8 adjetivos úteis que decorar 50 que você nunca usa.',
    },
    validacao: [
      'Sei adjetivos úteis pra pessoas',
      'Coloco o adjetivo antes do substantivo',
      'Não mudo o adjetivo no plural',
      'Descrevo com "to be" + adjetivo',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-pessoas-5': {
    trilhaId: 'en-a1-pessoas', numero: 5, titulo: 'Have got: o que você tem',
    tempoTotal: 11, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Tenho dois filhos", "ela tem um carro", "você tem irmãos?" — falar do que se tem é constante. O verbo "have" (ter) abre essa porta, e tem uma forma muito comum: "have got".',
      conceito: {
        titulo: 'Have / have got = ter',
        texto: 'O verbo "have" significa "ter". Há duas formas equivalentes: "I have a car" e "I have got a car" (mais comum no inglês britânico e na fala). O detalhe: na 3ª pessoa (he/she/it), vira "has": "She has a car" / "She has got a car". É o verbo pra falar de posses, família e características.',
      },
      estrutura: {
        titulo: 'Have e has',
        partes: [
          { simbolo: 'I/you/we/they', desc: 'have: I have a car / I’ve got a car.' },
          { simbolo: 'he/she/it', desc: 'has: She has a car / She’s got a car (o "s"!).' },
          { simbolo: 'negativo', desc: 'don’t have / doesn’t have (he doesn’t have...).' },
          { simbolo: 'pergunta', desc: 'Do you have...? / Have you got...?' },
        ],
      },
      exemplo: {
        titulo: 'Falando do que se tem',
        celulas: [
          { ref: 'EN', valor: 'I have two children. — Tenho dois filhos.' },
          { ref: '3ª pessoa', valor: 'She has a dog. — Ela tem um cachorro. (has!)' },
          { ref: 'Pergunta', valor: 'Do you have brothers? — Você tem irmãos?' },
          { ref: 'Got', valor: 'I’ve got a car. = I have a car. (mesmo sentido)' },
        ],
        formula: 'have (eu/você/nós/eles) · has (ele/ela/isso)',
        resultado: 'Você fala de posses, família e características.',
        comentario: 'O erro mais comum: esquecer o "s" da 3ª pessoa. "She have" está errado — é "She has". Esse "s" vai te acompanhar também no present simple (próxima trilha).',
      },
      vocabulario: [
        { palavra: 'have / has', def: 'ter. has é só pra he/she/it.' },
        { palavra: 'have got', def: 'forma comum de "have" (I’ve got = I have).' },
        { palavra: "don't / doesn't have", def: 'não ter (negativo).' },
      ],
      chave: [
        'have = ter; na 3ª pessoa vira "has"',
        '"have got" = "have" (mesmo sentido)',
        'Não esqueça o "s": She HAS (não "she have")',
      ],
      porque: 'Falar do que você tem (família, coisas, características) é essencial em qualquer conversa. E o "s" da 3ª pessoa é uma regra que vale pra muitos verbos — dominá-la aqui adianta muito.',
    },
    pratica: {
      instrucao: 'Vamos falar do que você (e os outros) têm, em voz alta.',
      passos: [
        'Diga o que você tem: "I have..." (a car, two children, a dog)',
        'Use a forma got: "I’ve got..."',
        'Fale de outra pessoa (3ª pessoa): "She has..." / "He has..." (com o "s"!)',
        'Faça uma pergunta: "Do you have...?" ou "Have you got...?"',
        'Faça o negativo: "I don’t have..." / "He doesn’t have..."',
        'Cuidado com o "s": repita "She has", "He has"',
        'Monte 3 frases sobre o que você e sua família têm',
      ],
    },
    desafio: {
      cenario: 'Fale (e escreva) 5 frases sobre o que você e pessoas próximas têm, usando have e has corretamente.',
      requisitos: [
        'Usei "have" pra eu/você/nós/eles',
        'Usei "has" pra ele/ela (com o "s")',
        'Fiz uma pergunta (Do you have...? / Have you got...?)',
        'Fiz um negativo (don’t/doesn’t have)',
        'Pratiquei em voz alta',
      ],
      dica: 'Decore mentalmente: "He, She, It → adiciona S". Vale pra has e pra quase todos os verbos na 3ª pessoa. Esse é um dos detalhes que mais marca quem domina o básico.',
    },
    validacao: [
      'Sei usar have/has pra "ter"',
      'Acerto o "s" da 3ª pessoa (has)',
      'Conheço a forma "have got"',
      'Sei perguntar e negar',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-pessoas-6': {
    trilhaId: 'en-a1-pessoas', numero: 6, titulo: 'Projeto: descreva sua família',
    tempoTotal: 15, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai apresentar sua família em inglês — quem são, como são, de onde vêm e o que têm. É uma fala completa e pessoal, que mostra o quanto você já avançou.',
      conceito: {
        titulo: 'Sua família em inglês, do início ao fim',
        texto: 'Você já tem as peças: nomes da família, possessivos (my, her, his), origem/nacionalidade, adjetivos pra descrever e o verbo have/has. Agora vamos juntá-las numa apresentação da sua família — algo natural e útil em qualquer conversa. Montar e falar isso consolida toda a trilha A1 sobre pessoas.',
      },
      estrutura: {
        titulo: 'O roteiro',
        partes: [
          { simbolo: '1', desc: 'Quem: "I have... " + membros (I have a sister and two children).' },
          { simbolo: '2', desc: 'Nomes/possessivos: "My sister’s name is... / Her name is..."' },
          { simbolo: '3', desc: 'Descrição: "She is... " + adjetivos (kind, funny, tall).' },
          { simbolo: '4', desc: 'Origem/detalhe: "We are from... / My father has a..."' },
        ],
      },
      exemplo: {
        titulo: 'Apresentação de família modelo',
        celulas: [
          { ref: '1', valor: 'I have a big family. I have two brothers.' },
          { ref: '2', valor: 'My mother’s name is Ana. Her name is Ana.' },
          { ref: '3', valor: 'She is kind and funny.' },
          { ref: '4', valor: 'We are from Brazil. My brother has a dog.' },
        ],
        formula: 'Quem (have) + nomes (possessivos) + descrição (adjetivos) + origem',
        resultado: 'Uma apresentação completa e pessoal da sua família.',
        comentario: 'Grave sua apresentação no celular. Comparar com a da trilha anterior (sua apresentação pessoal) mostra como você já evoluiu — e isso motiva a seguir!',
      },
      vocabulario: [
        { palavra: "name's / 's", def: "de posse: My mother's name (o nome da minha mãe)." },
        { palavra: 'big / small family', def: 'família grande / pequena.' },
        { palavra: 'favourite', def: 'favorito(a) — útil: "my favourite..."' },
      ],
      chave: [
        'Junte: have/has + possessivos + adjetivos + origem',
        'Use "My [pessoa]’s name is..." pra os nomes',
        'Pratique em voz alta e grave',
      ],
      porque: 'Falar da família reúne tudo do A1 sobre pessoas e é um dos assuntos mais comuns de conversa. Concluir este projeto prova que você já sustenta uma fala pessoal de verdade em inglês.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Monte e ensaie a apresentação da sua família, usando tudo da trilha.',
      passos: [
        'Comece dizendo quantos da família você tem: "I have..."',
        'Diga os nomes usando possessivos: "My sister’s name is..." / "Her name is..."',
        'Descreva 2 pessoas com adjetivos: "She is kind", "He is tall"',
        'Diga a origem: "We are from..."',
        'Acrescente o que alguém tem: "My brother has a..."',
        'Leia em voz alta, devagar, e ajuste',
        'Grave a apresentação no celular',
      ],
    },
    desafio: {
      cenario: 'Apresente sua família em inglês (escrito E falado/gravado), usando família, possessivos, adjetivos, origem e have/has.',
      requisitos: [
        'Falei quantos da família tenho (have)',
        'Usei possessivos (my, her, his) e nomes',
        'Descrevi pessoas com adjetivos',
        'Disse a origem (from/nacionalidade)',
        'Usei have/has corretamente (com o "s")',
        'Pratiquei em voz alta / gravei',
      ],
      dica: 'Parabéns — você concluiu a trilha "Eu e as Pessoas"! Você já fala de si e da sua família em inglês. Esse vocabulário pessoal é a base sobre a qual todo o resto vai crescer. Well done! (muito bem!)',
    },
    validacao: [
      'Apresentei minha família em inglês',
      'Usei possessivos corretamente',
      'Descrevi pessoas com adjetivos',
      'Disse a origem',
      'Usei have/has com o "s"',
      'Pratiquei / gravei',
    ],
  },
};
