// ============================================================================
// CONTEÚDO — Inglês A2: Comparando Coisas (en-a2-comparar)
// Adjetivos descritivos, comparativo (-er/more), superlativo (the -est/the most),
// as...as (igualdade), too/enough, e projeto: comparar opções e decidir.
// ============================================================================

export const EN_A2_COMPARAR = {
  'en-a2-comparar-1': {
    trilhaId: 'en-a2-comparar', numero: 1, titulo: 'Adjetivos para descrever',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Grande, pequeno, caro, barato, rápido, lento, bonito, velho — adjetivos dão cor às suas frases. Sem eles você diz "um carro"; com eles, "um carro velho, vermelho e barato".',
      conceito: {
        titulo: 'Adjetivos: as palavras que descrevem',
        texto: 'Adjetivos descrevem qualidades de coisas e pessoas. Os mais úteis vêm em PARES OPOSTOS: big/small (grande/pequeno), tall/short (alto/baixo), long/short (longo/curto), fast/slow (rápido/lento), cheap/expensive (barato/caro), new/old (novo/velho), good/bad (bom/ruim), easy/difficult (fácil/difícil), hot/cold, happy/sad, clean/dirty, beautiful/ugly. POSIÇÃO: em inglês, o adjetivo vem ANTES do substantivo ("a big house", não "a house big") ou depois do verbo to be ("the house is big"). E o adjetivo NÃO tem plural: "two big houses" (não "bigs"). Aprender adjetivos em pares opostos dobra seu vocabulário de uma vez.',
      },
      estrutura: {
        titulo: 'Como usar adjetivos',
        partes: [
          { simbolo: 'antes', desc: 'adjetivo + substantivo: a fast car.' },
          { simbolo: 'após be', desc: 'be + adjetivo: The car is fast.' },
          { simbolo: 'sem plural', desc: 'two old cars (não "olds").' },
          { simbolo: 'pares', desc: 'big/small, cheap/expensive, fast/slow.' },
        ],
      },
      exemplo: {
        titulo: 'Descrevendo com adjetivos',
        celulas: [
          { ref: 'EN', valor: 'It\'s a big, old house. — É uma casa grande e velha.' },
          { ref: 'EN', valor: 'This phone is expensive. — Este celular é caro.' },
          { ref: 'EN', valor: 'They are fast cars. — São carros rápidos.' },
          { ref: 'EN', valor: 'The room is clean and bright. — O quarto é limpo e claro.' },
        ],
        formula: 'adjetivo + substantivo • be + adjetivo (sem plural)',
        resultado: 'Você descreve coisas com adjetivos.',
        comentario: 'Duas regras de ouro: (1) o adjetivo vem ANTES do substantivo em inglês — "a red car", não "a car red"; (2) o adjetivo NUNCA ganha -s, mesmo no plural ("three small dogs", não "smalls"). Aprenda em pares opostos (big/small, cheap/expensive): cada par te dá duas palavras e fixa o sentido pelo contraste.',
      },
      vocabulario: [
        { palavra: 'adjective', def: 'adjetivo — descreve uma qualidade (big, cheap).' },
        { palavra: 'big/small, cheap/expensive', def: 'pares opostos muito úteis.' },
        { palavra: 'good/bad, easy/difficult', def: 'mais pares de qualidade.' },
      ],
      chave: [
        'Adjetivo vem ANTES do substantivo (a big house)',
        'Ou depois de be (the house is big)',
        'Adjetivo nunca tem plural (two big houses)',
      ],
      porque: 'Adjetivos são a base pra descrever e, sobretudo, pra COMPARAR — o tema desta trilha. Sem adjetivos você não consegue dizer que algo é maior, melhor ou mais barato que outro.',
    },
    pratica: {
      instrucao: 'Descreva objetos usando adjetivos antes e depois do substantivo.',
      passos: [
        'Liste 8 adjetivos em pares opostos',
        'Use 3 antes do substantivo: "a big house"',
        'Use 3 depois de be: "The house is big"',
        'Descreva um objeto com 2 adjetivos juntos',
        'Confira: não pôs -s no adjetivo?',
        'Descreva 3 coisas ao seu redor',
        'Liste 10 adjetivos com tradução',
      ],
    },
    desafio: {
      cenario: 'Descreva 5 objetos ao seu redor usando adjetivos, alguns antes do substantivo e outros depois do verbo to be.',
      requisitos: [
        'Usei adjetivo antes do substantivo (a big...)',
        'Usei adjetivo depois de be (it is...)',
        'Não coloquei -s em nenhum adjetivo',
        'Usei pelo menos um par oposto',
        'Combinei dois adjetivos numa frase',
      ],
      dica: 'O erro mais comum de quem fala português: pôr o adjetivo DEPOIS do substantivo ("a car red"). Em inglês é sempre ANTES: "a red car". E nunca pluralize o adjetivo.',
    },
    validacao: [
      'Conheço adjetivos em pares opostos',
      'Ponho o adjetivo antes do substantivo',
      'Uso adjetivo depois de be',
      'Não pluralizo adjetivos',
      'Descrevi objetos reais',
    ],
  },

  'en-a2-comparar-2': {
    trilhaId: 'en-a2-comparar', numero: 2, titulo: 'Comparativo: maior, mais caro',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: '"Este carro é mais rápido que aquele", "meu celular é mais barato que o seu". Comparar duas coisas é constante na hora de escolher — e o inglês tem duas formas de fazer: -er e more.',
      conceito: {
        titulo: 'Comparativo: comparar dois',
        texto: 'Para comparar DUAS coisas, o inglês usa duas regras conforme o tamanho do adjetivo. ADJETIVOS CURTOS (1 sílaba): acrescente -er + than: cheap → cheaper than (mais barato que), fast → faster than, big → bigger than (dobra o g), nice → nicer (só +r). ADJETIVOS LONGOS (2+ sílabas): use more + adjetivo + than: expensive → more expensive than, beautiful → more beautiful than, modern → more modern than. Adjetivos com -y trocam por -ier: happy → happier, easy → easier. E há IRREGULARES: good → better (melhor), bad → worse (pior), far → further. A palavra "than" (que/do que) liga os dois lados: "A is cheaper than B".',
      },
      estrutura: {
        titulo: 'As regras do comparativo',
        partes: [
          { simbolo: 'curto +er', desc: 'cheap→cheaper, fast→faster, big→bigger (+than).' },
          { simbolo: 'longo more', desc: 'expensive→more expensive than.' },
          { simbolo: 'y→ier', desc: 'happy→happier, easy→easier.' },
          { simbolo: 'irregular', desc: 'good→better, bad→worse, far→further.' },
        ],
      },
      exemplo: {
        titulo: 'Comparando dois',
        celulas: [
          { ref: 'curto', valor: 'This car is faster than that one. — mais rápido que.' },
          { ref: 'longo', valor: 'A is more expensive than B. — mais caro que.' },
          { ref: 'y→ier', valor: 'Today is happier than yesterday. — mais feliz que.' },
          { ref: 'irregular', valor: 'This is better than that. — melhor que.' },
        ],
        formula: 'curto + -er + than • long: more + adj + than',
        resultado: 'Você compara duas coisas em inglês.',
        comentario: 'A regra prática: conte as sílabas. 1 sílaba (cheap, fast, big) → -er. 3+ sílabas (expensive, beautiful) → more. As de 2 sílabas variam, mas as terminadas em -y sempre fazem -ier (happy→happier). Nunca misture as duas: "more cheaper" está errado — é só "cheaper". E não esqueça o "than" pra ligar os dois lados.',
      },
      vocabulario: [
        { palavra: 'comparative', def: 'comparativo — compara duas coisas (cheaper, more...).' },
        { palavra: 'than', def: 'que/do que — liga a comparação (cheaper THAN).' },
        { palavra: 'better / worse', def: 'melhor / pior — comparativos irregulares.' },
      ],
      chave: [
        'Curto: adjetivo + -er + than',
        'Longo: more + adjetivo + than',
        'Irregulares: good→better, bad→worse',
      ],
      porque: 'Comparar é decisivo na hora de escolher — produtos, opções, planos. O comparativo é uma das estruturas mais usadas do A2 e aparece em qualquer conversa sobre preferências e decisões.',
    },
    pratica: {
      instrucao: 'Compare pares de coisas usando -er e more.',
      passos: [
        'Compare com adjetivo curto: "X is cheaper than Y"',
        'Compare com adjetivo longo: "more expensive than"',
        'Use um -y→ier: "happier than / easier than"',
        'Use um irregular: "better / worse than"',
        'Confira: não misturou "more" com "-er"?',
        'Não esqueça o "than" em cada frase',
        'Monte 5 comparações de coisas reais',
      ],
    },
    desafio: {
      cenario: 'Compare 5 pares de coisas (carros, celulares, cidades...) usando o comparativo: alguns curtos (-er), alguns longos (more) e um irregular.',
      requisitos: [
        'Usei -er + than com adjetivo curto',
        'Usei more + adjetivo + than com longo',
        'Usei um -y→ier (happier/easier)',
        'Usei um irregular (better/worse)',
        'Inclui "than" em todas as comparações',
      ],
      dica: 'Nunca diga "more cheaper" nem "more better" — é redundante. Adjetivo curto usa SÓ o -er (cheaper); longo usa SÓ o more (more expensive). E "good" vira "better", não "more good".',
    },
    validacao: [
      'Formo o comparativo curto (-er)',
      'Formo o comparativo longo (more)',
      'Sei o -y→ier',
      'Sei better e worse',
      'Uso than corretamente',
    ],
  },

  'en-a2-comparar-3': {
    trilhaId: 'en-a2-comparar', numero: 3, titulo: 'Superlativo: o maior de todos',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: '"O mais barato da loja", "a maior cidade do país", "o melhor filme do ano". Quando você destaca UM no topo de um grupo, usa o superlativo — e ele segue a mesma lógica do comparativo, com "the".',
      conceito: {
        titulo: 'Superlativo: o extremo do grupo',
        texto: 'O superlativo destaca UM elemento como o máximo dentro de um grupo (o maior, o melhor, o mais caro de todos). Sempre vem com THE. ADJETIVOS CURTOS: the + adjetivo + -est: cheap → the cheapest (o mais barato), fast → the fastest, big → the biggest (dobra g). ADJETIVOS LONGOS: the most + adjetivo: expensive → the most expensive, beautiful → the most beautiful. -y → -iest: happy → the happiest, easy → the easiest. IRREGULARES: good → the best (o melhor), bad → the worst (o pior), far → the furthest. Costuma vir seguido de "in" (lugar/grupo) ou "of": "the biggest city in Brazil", "the best of all". Resumindo: comparativo compara DOIS (-er/more + than); superlativo destaca UM no topo (the -est/the most).',
      },
      estrutura: {
        titulo: 'As regras do superlativo',
        partes: [
          { simbolo: 'curto -est', desc: 'the cheapest, the fastest, the biggest.' },
          { simbolo: 'longo most', desc: 'the most expensive, the most beautiful.' },
          { simbolo: 'y→iest', desc: 'the happiest, the easiest.' },
          { simbolo: 'irregular', desc: 'the best, the worst, the furthest.' },
        ],
      },
      exemplo: {
        titulo: 'O topo do grupo',
        celulas: [
          { ref: 'curto', valor: 'This is the cheapest phone here. — o mais barato.' },
          { ref: 'longo', valor: 'It\'s the most expensive car. — o mais caro.' },
          { ref: 'in', valor: 'It\'s the biggest city in Brazil. — a maior do Brasil.' },
          { ref: 'irregular', valor: 'This is the best of all. — o melhor de todos.' },
        ],
        formula: 'the + adj-EST (curto) / the most + adj (longo)',
        resultado: 'Você destaca o máximo de um grupo.',
        comentario: 'Não esqueça o "the": superlativo SEMPRE leva o artigo (the cheapest, the best). A mesma regra de sílabas do comparativo vale aqui: curto → -est; longo → the most. E os irregulares são os mesmos: good→the best, bad→the worst. Lembre da diferença: comparou dois? -er/more + than. Destacou um do grupo? the -est/the most.',
      },
      vocabulario: [
        { palavra: 'superlative', def: 'superlativo — o máximo do grupo (the biggest).' },
        { palavra: 'the best / the worst', def: 'o melhor / o pior — superlativos irregulares.' },
        { palavra: 'in / of', def: 'depois do superlativo: the biggest IN Brazil, best OF all.' },
      ],
      chave: [
        'Curto: the + adjetivo + -est',
        'Longo: the most + adjetivo',
        'Sempre com "the"; irregulares: the best, the worst',
      ],
      porque: 'Destacar o melhor, o maior, o mais barato é constante ao recomendar, escolher ou opinar. O superlativo fecha o trio descrever-comparar-destacar e é muito usado em conversas reais.',
    },
    pratica: {
      instrucao: 'Destaque o máximo de grupos usando o superlativo.',
      passos: [
        'Use um curto: "the cheapest / the fastest"',
        'Use um longo: "the most expensive / beautiful"',
        'Use um -y→iest: "the happiest / the easiest"',
        'Use um irregular: "the best / the worst"',
        'Acrescente "in/of": "the biggest in the city"',
        'Confira: pôs o "the" antes?',
        'Monte 5 frases destacando o topo de um grupo',
      ],
    },
    desafio: {
      cenario: 'Escreva 5 frases destacando "o mais..." de algum grupo (loja, cidade, família), usando superlativos curtos, longos e um irregular.',
      requisitos: [
        'Usei the + adjetivo-est (curto)',
        'Usei the most + adjetivo (longo)',
        'Usei um -y→iest',
        'Usei um irregular (the best/the worst)',
        'Inclui "the" em todos e usei in/of',
      ],
      dica: 'Nunca esqueça o "the" no superlativo: é "the cheapest", não só "cheapest". E não misture: "the most cheapest" está errado — curto usa só -est, longo usa só the most.',
    },
    validacao: [
      'Formo o superlativo curto (-est)',
      'Formo o superlativo longo (the most)',
      'Sei o -y→iest',
      'Sei the best e the worst',
      'Uso o "the" e in/of',
    ],
  },

  'en-a2-comparar-4': {
    trilhaId: 'en-a2-comparar', numero: 4, titulo: 'As...as: igual ou não',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Este é TÃO caro QUANTO aquele", "ela não é TÃO alta QUANTO o irmão". Nem toda comparação é "mais" ou "menos" — às vezes duas coisas são iguais, e o inglês tem uma estrutura própria pra isso.',
      conceito: {
        titulo: 'As...as para igualdade',
        texto: 'Para dizer que duas coisas são IGUAIS em alguma qualidade, use as + adjetivo + as (tão... quanto). "This phone is as expensive as that one" (tão caro quanto), "She is as tall as her brother" (tão alta quanto). O adjetivo fica no NORMAL (não muda), entre os dois "as". NEGATIVO: not as + adjetivo + as = "não tão... quanto" (menos): "This car isn\'t as fast as that one" (não é tão rápido quanto = é mais lento). Repare que o adjetivo NÃO ganha -er nem "more" aqui — fica na forma base: "as cheap as", "as expensive as". É uma forma muito natural de comparar igualdade ou de dizer "menos" sem usar "less".',
      },
      estrutura: {
        titulo: 'As...as na prática',
        partes: [
          { simbolo: 'as...as', desc: 'Igualdade: as tall as, as cheap as.' },
          { simbolo: 'not as...as', desc: 'Menos: not as fast as (= mais lento).' },
          { simbolo: 'adjetivo base', desc: 'sem -er/more: "as big as" (não "as bigger as").' },
          { simbolo: 'the same as', desc: 'Alternativa: It\'s the same as... (igual a).' },
        ],
      },
      exemplo: {
        titulo: 'Igual e não tão',
        celulas: [
          { ref: 'EN', valor: 'A is as expensive as B. — A é tão caro quanto B.' },
          { ref: 'EN', valor: 'She\'s as tall as me. — Ela é tão alta quanto eu.' },
          { ref: 'EN', valor: 'This isn\'t as good as that. — Não é tão bom quanto aquele.' },
          { ref: 'EN', valor: 'My phone is the same as yours. — Igual ao seu.' },
        ],
        formula: 'as + adjetivo(base) + as • not as ... as = menos',
        resultado: 'Você compara igualdade e diferença leve.',
        comentario: 'O ponto que mais confunde: entre os dois "as", o adjetivo fica na forma BASE, sem -er e sem more — "as cheap as", nunca "as cheaper as". E "not as ... as" é uma forma elegante de dizer "menos" sem usar "less" (que soa mais formal): "It\'s not as fast as the other" = é mais lento. Treine com pares que você conhece bem.',
      },
      vocabulario: [
        { palavra: 'as...as', def: 'tão... quanto — igualdade (as tall as).' },
        { palavra: 'not as...as', def: 'não tão... quanto — menos que.' },
        { palavra: 'the same as', def: 'igual a — outra forma de igualdade.' },
      ],
      chave: [
        'as + adjetivo base + as = igualdade',
        'not as ... as = menos (sem usar less)',
        'Adjetivo fica na forma base entre os "as"',
      ],
      porque: 'Nem tudo é "mais" ou "menos": muita comparação é de igualdade ("tão bom quanto"). As...as é natural, frequente e dá nuance às suas comparações — sinal de quem passou do básico.',
    },
    pratica: {
      instrucao: 'Compare igualdade e diferença leve com as...as.',
      passos: [
        'Diga que dois são iguais: "as ... as"',
        'Use 3 adjetivos diferentes na estrutura',
        'Faça a negativa: "not as ... as"',
        'Confira: o adjetivo está na forma base?',
        'Use "the same as" numa frase',
        'Compare pessoas: "as tall as / as old as"',
        'Monte 5 frases (igualdade e "menos")',
      ],
    },
    desafio: {
      cenario: 'Escreva 5 comparações usando as...as e not as...as, comparando coisas ou pessoas que você conhece.',
      requisitos: [
        'Usei "as + adjetivo + as" para igualdade',
        'Usei "not as ... as" para "menos"',
        'Mantive o adjetivo na forma base (sem -er/more)',
        'Usei pelo menos 3 adjetivos diferentes',
        'Inclui um "the same as"',
      ],
      dica: 'O erro clássico: pôr o comparativo entre os "as" ("as cheaper as"). NÃO — o adjetivo fica na forma base: "as cheap as". O -er e o more só aparecem na estrutura com "than".',
    },
    validacao: [
      'Uso as...as para igualdade',
      'Uso not as...as para "menos"',
      'Mantenho o adjetivo na forma base',
      'Uso the same as',
      'Comparei coisas e pessoas',
    ],
  },

  'en-a2-comparar-5': {
    trilhaId: 'en-a2-comparar', numero: 5, titulo: 'Too e enough',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: '"Caro DEMAIS", "não grande O SUFICIENTE", "tarde demais", "dinheiro suficiente". Dizer que algo passou ou não atingiu o ponto certo usa duas palavrinhas que mudam de posição: too e enough.',
      conceito: {
        titulo: 'Too (demais) x enough (o suficiente)',
        texto: 'Duas ideias opostas. TOO = "demais", excesso negativo. Vem ANTES do adjetivo: too + adjetivo. "It\'s too expensive" (caro demais), "too small" (pequeno demais), "too late" (tarde demais). Implica problema: passou do ponto. ENOUGH = "o suficiente". A posição muda conforme o que acompanha: DEPOIS do adjetivo (adjetivo + enough): "big enough" (grande o suficiente), "old enough" (com idade suficiente); mas ANTES do substantivo (enough + substantivo): "enough money" (dinheiro suficiente), "enough time". NEGATIVO de enough: not + adjetivo + enough = "não... o suficiente": "It\'s not big enough" (não é grande o bastante). Resumo de posição: too vem antes do adjetivo; enough vem depois do adjetivo, mas antes do substantivo.',
      },
      estrutura: {
        titulo: 'Posições de too e enough',
        partes: [
          { simbolo: 'too + adj', desc: 'too expensive, too small, too late.' },
          { simbolo: 'adj + enough', desc: 'big enough, old enough, good enough.' },
          { simbolo: 'enough + subst.', desc: 'enough money, enough time, enough room.' },
          { simbolo: 'not ... enough', desc: 'not big enough (= pequeno demais).' },
        ],
      },
      exemplo: {
        titulo: 'Demais e suficiente',
        celulas: [
          { ref: 'too', valor: 'This is too expensive. — Isto é caro demais.' },
          { ref: 'adj+enough', valor: 'Is it big enough? — É grande o suficiente?' },
          { ref: 'enough+subst', valor: 'I don\'t have enough money. — Não tenho dinheiro suficiente.' },
          { ref: 'not...enough', valor: 'It\'s not warm enough. — Não está quente o bastante.' },
        ],
        formula: 'too + adjetivo • adjetivo + enough • enough + substantivo',
        resultado: 'Você diz que algo é demais ou insuficiente.',
        comentario: 'A confusão típica é a POSIÇÃO. Decore: "too" sempre ANTES do adjetivo (too big); "enough" vai DEPOIS do adjetivo (big enough) mas ANTES do substantivo (enough room). E note a relação: "too small" e "not big enough" dizem quase a mesma coisa de formas opostas. Não confunda "too" (demais, negativo) com "very" (muito, neutro): "very big" é elogio; "too big" é problema.',
      },
      vocabulario: [
        { palavra: 'too + adjetivo', def: 'demais (negativo): too expensive, too late.' },
        { palavra: 'adjetivo + enough', def: 'o suficiente: big enough, old enough.' },
        { palavra: 'enough + substantivo', def: 'suficiente: enough money, enough time.' },
      ],
      chave: [
        'too vem ANTES do adjetivo (too small)',
        'enough vem DEPOIS do adjetivo (small enough)',
        'enough vem ANTES do substantivo (enough money)',
      ],
      porque: 'Dizer que algo é caro demais, pequeno demais ou que não há tempo suficiente é constante em decisões e reclamações. Too e enough dão precisão e são muito usados — mas só funcionam com a posição certa.',
    },
    pratica: {
      instrucao: 'Pratique too e enough com a posição correta.',
      passos: [
        'Diga 3 coisas "demais": "too + adjetivo"',
        'Diga 2 "o suficiente": "adjetivo + enough"',
        'Use "enough + substantivo": "enough money/time"',
        'Faça a negativa: "not ... enough"',
        'Contraste "too small" e "not big enough"',
        'Cuide da posição em cada caso',
        'Monte 5 frases variando too e enough',
      ],
    },
    desafio: {
      cenario: 'Escreva 6 frases sobre escolhas/compras usando too e enough nas posições corretas (too + adjetivo, adjetivo + enough, enough + substantivo).',
      requisitos: [
        'Usei "too + adjetivo" corretamente',
        'Usei "adjetivo + enough"',
        'Usei "enough + substantivo"',
        'Fiz uma negativa "not ... enough"',
        'Contrastei "too" com "enough" no sentido',
      ],
      dica: 'Não troque as posições: é "too small" (too antes) e "small enough" (enough depois). E "enough" vem antes do substantivo: "enough money", não "money enough". Decore as três posições como blocos.',
    },
    validacao: [
      'Uso too antes do adjetivo',
      'Uso enough depois do adjetivo',
      'Uso enough antes do substantivo',
      'Faço a negativa not ... enough',
      'Distingo too de very',
    ],
  },

  'en-a2-comparar-6': {
    trilhaId: 'en-a2-comparar', numero: 6, titulo: 'Projeto: comparar e decidir',
    tempoTotal: 20, xp: 130, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai comparar opções reais — dois ou três produtos, lugares ou planos — e justificar uma escolha em inglês, usando comparativos, superlativos, igualdades e too/enough. É a sua primeira "análise comparativa" falada.',
      conceito: {
        titulo: 'Comparar opções e justificar uma decisão',
        texto: 'Este projeto integra a trilha numa apresentação em que você compara opções e decide. Escolha um tema (dois/três celulares, cidades, restaurantes, planos) e use: 1) ADJETIVOS para descrever cada opção ("It\'s big, fast and modern"); 2) COMPARATIVO para confrontar duas ("A is cheaper than B", "B is more powerful than A"); 3) SUPERLATIVO para destacar a melhor de todas ("C is the best of the three"); 4) AS...AS para igualdades e diferenças leves ("A is not as expensive as C"); 5) TOO/ENOUGH para apontar excessos ou faltas ("A is too small", "B isn\'t fast enough"). Feche com uma DECISÃO justificada: "I\'ll choose B because it\'s cheaper than C and good enough for me". O objetivo é uma análise de 10 a 12 frases que compara, contrasta e conclui. Apresente em voz alta e grave-se. Ao final, você terá feito uma comparação completa em inglês — exatamente o que se faz ao escolher qualquer coisa na vida real.',
      },
      estrutura: {
        titulo: 'O que a análise deve ter',
        partes: [
          { simbolo: 'adjetivos', desc: 'Descrever cada opção com qualidades.' },
          { simbolo: 'comparativo', desc: 'Confrontar duas: -er/more + than.' },
          { simbolo: 'superlativo', desc: 'Destacar a melhor: the -est/the most.' },
          { simbolo: 'as...as / too/enough', desc: 'Igualdades e excessos/faltas.' },
        ],
      },
      exemplo: {
        titulo: 'Uma análise modelo (trecho)',
        celulas: [
          { ref: 'EN', valor: 'Phone A is cheaper than B, but B is faster.' },
          { ref: 'EN', valor: 'C is the most expensive of the three.' },
          { ref: 'EN', valor: 'A is not as good as C, and it\'s too small.' },
          { ref: 'EN', valor: 'I\'ll choose B: it\'s good enough and not too expensive.' },
        ],
        formula: 'descrever + comparar + destacar + igualar + decidir = análise',
        resultado: 'Você compara opções e justifica uma escolha.',
        comentario: 'O segredo é a PROGRESSÃO: descreva, depois compare aos pares, destaque a melhor, aponte excessos e finalmente DECIDA com um "because". Misture as estruturas naturalmente — é assim que pensamos ao escolher algo. Não busque perfeição; busque uma análise que convença. Grave-se apresentando: comparar e justificar em inglês é uma habilidade real e impressionante para o nível A2.',
      },
      vocabulario: [
        { palavra: 'compare / choose', def: 'comparar / escolher — o coração do projeto.' },
        { palavra: 'option / choice', def: 'opção / escolha.' },
        { palavra: 'because', def: 'porque — introduz a justificativa da decisão.' },
      ],
      chave: [
        'Análise de 10–12 frases que compara e conclui',
        'Integre adjetivos, comparativo, superlativo, as...as e too/enough',
        'Feche com uma decisão justificada (because)',
      ],
      porque: 'Comparar opções e justificar escolhas integra toda a trilha e treina algo que você faz o tempo todo na vida — decidir entre alternativas. Fazer isso em inglês, com argumentos, é prova concreta de domínio.',
    },
    pratica: {
      instrucao: 'Monte e apresente uma comparação de opções com decisão final.',
      passos: [
        'Escolha 2–3 opções de um mesmo tipo',
        'Descreva cada uma com adjetivos',
        'Compare aos pares com comparativos',
        'Destaque a melhor com um superlativo',
        'Aponte igualdades (as...as) e excessos (too/enough)',
        'Decida e justifique com "because"',
        'Apresente em voz alta e grave-se',
      ],
    },
    desafio: {
      cenario: 'Compare 2 ou 3 opções de um tema à sua escolha em 10 a 12 frases, usando adjetivos, comparativo, superlativo, as...as e too/enough, e termine com uma decisão justificada.',
      requisitos: [
        'Descrevi as opções com adjetivos',
        'Usei comparativos (-er/more + than)',
        'Usei um superlativo (the -est/the most)',
        'Usei as...as e/ou too/enough',
        'Decidi e justifiquei com because, em voz alta',
      ],
      dica: 'Não liste frases soltas: construa um RACIOCÍNIO que leva à decisão. Cada comparação deve ajudar a justificar a escolha final. É a lógica, e não a quantidade de frases, que torna a análise convincente.',
    },
    validacao: [
      'Descrevi opções com adjetivos',
      'Usei comparativos corretamente',
      'Usei um superlativo',
      'Usei as...as e/ou too/enough',
      'Decidi e justifiquei em voz alta',
    ],
  },
};
