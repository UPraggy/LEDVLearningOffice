// ============================================================================
// CONTEÚDO — Inglês A2: Fazendo Compras (en-a2-compras)
// Vocabulário de lojas/roupas, some/any/much/many, diálogo de loja,
// would like / I'll take it, trocas e tamanhos, e projeto: diálogo de compras.
// ============================================================================

export const EN_A2_COMPRAS = {
  'en-a2-compras-1': {
    trilhaId: 'en-a2-compras', numero: 1, titulo: 'Lojas, roupas e preços',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'Camiseta, calça, número do sapato, "quanto custa?". Saber o vocabulário de compras te deixa entrar numa loja, perguntar preços e escolher tamanhos sem travar — onde quer que você esteja.',
      conceito: {
        titulo: 'O vocabulário de quem compra',
        texto: 'Vamos cobrir o essencial das compras. LOJAS: shop/store (loja), supermarket, mall (shopping), market (feira/mercado). ROUPAS: shirt (camisa), T-shirt (camiseta), trousers/pants (calça), dress (vestido), shoes (sapatos), jacket (jaqueta), socks (meias). TAMANHOS: size (tamanho), small/medium/large (P/M/G). PREÇO: price (preço), "How much is it?" (quanto custa?), "How much are they?" (plural), expensive (caro), cheap (barato), sale (promoção), discount (desconto). PAGAMENTO: cash (dinheiro), card (cartão), receipt (recibo/nota), change (troco). Com esse núcleo você já navega qualquer loja.',
      },
      estrutura: {
        titulo: 'Campos de vocabulário',
        partes: [
          { simbolo: 'lojas', desc: 'shop, store, supermarket, mall, market.' },
          { simbolo: 'roupas', desc: 'shirt, T-shirt, trousers, dress, shoes, jacket.' },
          { simbolo: 'preço', desc: 'price, expensive, cheap, sale, discount.' },
          { simbolo: 'pagar', desc: 'cash, card, receipt, change.' },
        ],
      },
      exemplo: {
        titulo: 'Na loja',
        celulas: [
          { ref: 'EN', valor: 'How much is this shirt? — Quanto custa esta camisa?' },
          { ref: 'EN', valor: 'Do you have it in medium? — Tem no tamanho M?' },
          { ref: 'EN', valor: 'It\'s on sale today. — Está em promoção hoje.' },
          { ref: 'EN', valor: 'Can I pay by card? — Posso pagar no cartão?' },
        ],
        formula: 'loja + item + tamanho + preço + pagamento = compra completa',
        resultado: 'Você domina o vocabulário básico de compras.',
        comentario: 'Atenção a "How much": use "How much IS it?" para um item e "How much ARE they?" para vários (shoes, socks vêm em par e pedem "are"). E note as duplas britânico/americano: trousers/pants, trainers/sneakers (tênis), shop/store. As duas existem; escolha uma e entenda as duas.',
      },
      vocabulario: [
        { palavra: 'How much is it?', def: 'Quanto custa? — para preço de um item.' },
        { palavra: 'size', def: 'tamanho (small/medium/large = P/M/G).' },
        { palavra: 'cash / card', def: 'dinheiro / cartão — formas de pagamento.' },
      ],
      chave: [
        'How much IS it? (um) • How much ARE they? (vários)',
        'Tamanhos: small, medium, large',
        'Pagar: cash, card; pedir o receipt e o change',
      ],
      porque: 'Comprar é uma das situações mais comuns numa viagem ou no dia a dia. Saber pedir tamanho, perguntar preço e pagar resolve a maior parte das interações em lojas.',
    },
    pratica: {
      instrucao: 'Pratique o vocabulário de compras com itens reais.',
      passos: [
        'Nomeie 5 roupas em inglês',
        'Pergunte o preço: "How much is this ...?"',
        'Peça um tamanho: "Do you have it in ...?"',
        'Diga se é caro ou barato: expensive/cheap',
        'Pergunte como pagar: "Can I pay by card?"',
        'Pratique "How much are they?" no plural',
        'Liste 10 palavras de compras com tradução',
      ],
    },
    desafio: {
      cenario: 'Monte 5 frases de uma situação de compra: pergunte preço, peça tamanho, comente se é caro/barato e pergunte sobre pagamento.',
      requisitos: [
        'Usei "How much is/are...?" corretamente',
        'Pedi um tamanho (size)',
        'Usei expensive/cheap ou sale/discount',
        'Perguntei sobre forma de pagamento',
        'Nomeei pelo menos 3 itens de roupa',
      ],
      dica: 'Cuidado com singular/plural em "How much": shoes, socks e trousers são plurais em inglês — use "How much ARE they?" e "they\'re nice", não "is".',
    },
    validacao: [
      'Sei nomes de lojas e roupas',
      'Pergunto preço (singular e plural)',
      'Peço tamanhos corretamente',
      'Falo de caro/barato e promoção',
      'Falo de formas de pagamento',
    ],
  },

  'en-a2-compras-2': {
    trilhaId: 'en-a2-compras', numero: 2, titulo: 'Some, any, much, many',
    tempoTotal: 12, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"Tenho ALGUNS reais", "você tem ALGUM troco?", "não tenho MUITO dinheiro", "tem MUITAS lojas aqui". Falar de quantidades sem números exige escolher a palavrinha certa — e ela muda se a coisa é contável ou não.',
      conceito: {
        titulo: 'Quantificadores: contável x incontável',
        texto: 'Primeiro, a base: substantivos CONTÁVEIS dá pra contar (one apple, two apples; coins, shops) e INCONTÁVEIS não (money, water, rice, time). A escolha da palavra de quantidade depende disso. SOME (algum/alguns) — em afirmativas: "I have some money", "There are some shops". ANY (algum/nenhum) — em negativas e perguntas: "I don\'t have any cash", "Do you have any change?". MUCH (muito) — com incontáveis, em negativas/perguntas: "I don\'t have much money", "How much time?". MANY (muitos) — com contáveis: "There aren\'t many shops", "How many people?". A LOT OF / LOTS OF (muito/muitos) — serve para os dois em afirmativas: "a lot of money", "a lot of shops".',
      },
      estrutura: {
        titulo: 'Qual usar',
        partes: [
          { simbolo: 'some', desc: 'Afirmativa: I have some money / some apples.' },
          { simbolo: 'any', desc: 'Negativa/pergunta: any cash? not any shops.' },
          { simbolo: 'much/many', desc: 'much + incontável • many + contável.' },
          { simbolo: 'a lot of', desc: 'Afirmativa, serve aos dois: a lot of money/shops.' },
        ],
      },
      exemplo: {
        titulo: 'Quantidades sem número',
        celulas: [
          { ref: 'EN', valor: 'I have some money. — Tenho algum dinheiro.' },
          { ref: 'EN', valor: 'Do you have any change? — Você tem algum troco?' },
          { ref: 'EN', valor: 'There aren\'t many shops here. — Não há muitas lojas aqui.' },
          { ref: 'EN', valor: 'How much does it cost? — Quanto custa?' },
        ],
        formula: 'some (afirm.) • any (neg./perg.) • much (incont.) • many (cont.)',
        resultado: 'Você fala de quantidades sem precisar de números.',
        comentario: 'Dois mapas mentais ajudam: (1) frase afirmativa pede SOME; negativa ou pergunta pede ANY. (2) a coisa é contável? use MANY; é incontável (money, water)? use MUCH. E quando estiver em dúvida numa afirmativa, "a lot of" sempre cabe (a lot of money, a lot of friends). Em ofertas/pedidos educados, some também aparece em perguntas: "Would you like some coffee?".',
      },
      vocabulario: [
        { palavra: 'some / any', def: 'some (afirmativas) • any (negativas e perguntas).' },
        { palavra: 'much / many', def: 'much + incontável • many + contável.' },
        { palavra: 'a lot of', def: 'muito/muitos — serve para contável e incontável.' },
      ],
      chave: [
        'Afirmativa → some • Negativa/pergunta → any',
        'much + incontável (money) • many + contável (shops)',
        'Na dúvida em afirmativa: a lot of',
      ],
      porque: 'Falar de quantidades é constante: dinheiro, tempo, pessoas, produtos. Escolher some/any/much/many certo é uma marca do nível A2 e evita erros que travam a comunicação.',
    },
    pratica: {
      instrucao: 'Pratique quantificadores com itens contáveis e incontáveis.',
      passos: [
        'Separe 5 palavras em contáveis e incontáveis',
        'Faça afirmativas com some: "I have some ..."',
        'Faça perguntas com any: "Do you have any ...?"',
        'Use much com incontável: "much money/time"',
        'Use many com contável: "many shops/people"',
        'Substitua por "a lot of" numa afirmativa',
        'Monte 5 frases variando os quantificadores',
      ],
    },
    desafio: {
      cenario: 'Escreva 6 frases sobre compras e dinheiro usando some, any, much, many e a lot of corretamente.',
      requisitos: [
        'Usei some numa afirmativa',
        'Usei any numa negativa ou pergunta',
        'Usei much com um incontável',
        'Usei many com um contável',
        'Usei "a lot of" pelo menos uma vez',
      ],
      dica: 'O erro nº1: usar "many" com incontável ("many money" está errado). Money, water, time não se contam → use MUCH. Conta-se? (coins, shops, people) → MANY.',
    },
    validacao: [
      'Distingo contável de incontável',
      'Uso some em afirmativas',
      'Uso any em negativas/perguntas',
      'Uso much/many corretamente',
      'Uso a lot of quando cabe',
    ],
  },

  'en-a2-compras-3': {
    trilhaId: 'en-a2-compras', numero: 3, titulo: 'Numa loja: pedir e pagar',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: 'O vendedor pergunta "Can I help you?" e você... trava? Com algumas frases prontas, você responde, procura o que quer, experimenta e fecha a compra com naturalidade.',
      conceito: {
        titulo: 'O diálogo típico de uma loja',
        texto: 'Compras seguem um roteiro previsível. O VENDEDOR costuma dizer: "Can I help you?" (posso ajudar?), "What size?" (que tamanho?), "Anything else?" (mais alguma coisa?), "That\'s 20 dollars" (são 20 dólares). VOCÊ responde com frases-chave: "I\'m just looking, thanks" (só estou olhando) ou "I\'m looking for a shirt" (procuro uma camisa); "Can I try it on?" (posso experimentar?); "Do you have a bigger/smaller one?" (tem um maior/menor?); "How much is it?"; "I\'ll take it" (vou levar); "Can I pay by card?". Saber esse vai-e-vem deixa a interação fluida do "olá" ao "obrigado".',
      },
      estrutura: {
        titulo: 'Frases-chave da compra',
        partes: [
          { simbolo: 'abrir', desc: 'Vendedor: Can I help you? Você: I\'m looking for...' },
          { simbolo: 'escolher', desc: 'Can I try it on? Do you have a bigger one?' },
          { simbolo: 'preço', desc: 'How much is it? Is it on sale?' },
          { simbolo: 'fechar', desc: 'I\'ll take it. Can I pay by card?' },
        ],
      },
      exemplo: {
        titulo: 'Da entrada ao caixa',
        celulas: [
          { ref: 'Vendedor', valor: 'Can I help you? — Posso ajudar?' },
          { ref: 'Você', valor: 'I\'m looking for a jacket. — Procuro uma jaqueta.' },
          { ref: 'Você', valor: 'Can I try it on? — Posso experimentar?' },
          { ref: 'Você', valor: 'I\'ll take it. Can I pay by card? — Vou levar. Cartão?' },
        ],
        formula: 'help you? → looking for → try on → how much → I\'ll take it',
        resultado: 'Você conduz uma compra do início ao fim.',
        comentario: 'O segredo é ter respostas PRONTAS para as falas do vendedor. "Can I help you?" → "I\'m just looking, thanks" (se só passeia) ou "Yes, I\'m looking for...". Decore esse punhado de frases como blocos: elas se repetem em qualquer loja do mundo. Pratique o diálogo dos dois lados (vendedor e cliente) pra não ser pego de surpresa.',
      },
      vocabulario: [
        { palavra: 'Can I help you?', def: 'Posso ajudar? — abertura do vendedor.' },
        { palavra: 'try on', def: 'experimentar (roupa): Can I try it on?' },
        { palavra: 'I\'ll take it', def: 'Vou levar — fecha a compra.' },
      ],
      chave: [
        'Tenha respostas prontas: "I\'m looking for...", "Just looking"',
        'Experimentar: "Can I try it on?"',
        'Fechar: "I\'ll take it" + forma de pagamento',
      ],
      porque: 'O diálogo de loja se repete em qualquer lugar. Ter as frases prontas elimina o "branco" na hora e te faz comprar com confiança, inclusive em viagens.',
    },
    pratica: {
      instrucao: 'Ensaie o diálogo de compra dos dois lados.',
      passos: [
        'Responda a "Can I help you?" de duas formas',
        'Diga o que procura: "I\'m looking for ..."',
        'Peça pra experimentar: "Can I try it on?"',
        'Peça outro tamanho: "Do you have a bigger one?"',
        'Pergunte o preço e se está em promoção',
        'Feche a compra: "I\'ll take it."',
        'Encene o diálogo inteiro em voz alta',
      ],
    },
    desafio: {
      cenario: 'Escreva e encene um diálogo de compra de 8 falas (vendedor e cliente), da abertura ao pagamento.',
      requisitos: [
        'Respondi a "Can I help you?"',
        'Disse o que procurava (looking for)',
        'Pedi para experimentar ou trocar tamanho',
        'Perguntei o preço',
        'Fechei com "I\'ll take it" e o pagamento',
      ],
      dica: 'Não traduza tudo ao pé da letra — use os blocos prontos. "I\'m looking for...", "Can I try it on?", "I\'ll take it" são fixos e cobrem quase toda compra. Decore-os como frases inteiras.',
    },
    validacao: [
      'Respondo às falas do vendedor',
      'Digo o que procuro',
      'Peço para experimentar/trocar tamanho',
      'Pergunto preço e promoção',
      'Fecho a compra e pago',
    ],
  },

  'en-a2-compras-4': {
    trilhaId: 'en-a2-compras', numero: 4, titulo: 'Would like: pedir com educação',
    tempoTotal: 11, xp: 80, vertente: 'ingles',
    aula: {
      gancho: '"I want a coffee" soa meio seco. "I\'d like a coffee, please" soa educado e natural. Em lojas, cafés e restaurantes, would like é a forma elegante de pedir o que você deseja.',
      conceito: {
        titulo: 'Would like para pedidos educados',
        texto: 'Would like significa "gostaria" — uma forma educada de "want" (querer). Estrutura: sujeito + would like + (objeto ou to + verbo). "I would like a coffee" → abreviado "I\'d like a coffee"; "I\'d like to try this on" (gostaria de experimentar). PERGUNTA/OFERTA: "Would you like a bag?" (gostaria de uma sacola?), "What would you like?" (o que gostaria?). Resposta a ofertas: "Yes, please" / "No, thank you". Diferença importante: "I like coffee" = eu GOSTO de café (em geral); "I\'d like a coffee" = eu QUERO/gostaria de um café (agora). Não confunda like (gosto) com would like (quero, neste momento).',
      },
      estrutura: {
        titulo: 'Would like na prática',
        partes: [
          { simbolo: '+ objeto', desc: 'I\'d like a small coffee, please.' },
          { simbolo: '+ to + verbo', desc: 'I\'d like to try this on.' },
          { simbolo: 'oferta', desc: 'Would you like anything else?' },
          { simbolo: 'resposta', desc: 'Yes, please. / No, thanks.' },
        ],
      },
      exemplo: {
        titulo: 'Pedidos educados',
        celulas: [
          { ref: 'EN', valor: 'I\'d like this jacket, please. — Gostaria desta jaqueta.' },
          { ref: 'EN', valor: 'I\'d like to see the menu. — Gostaria de ver o cardápio.' },
          { ref: 'EN', valor: 'Would you like a bag? — Gostaria de uma sacola?' },
          { ref: 'EN', valor: 'I like coffee, but I\'d like tea now. — Gosto de café, mas quero chá agora.' },
        ],
        formula: 'I\'d like + objeto / to + verbo = pedido educado',
        resultado: 'Você pede o que deseja com elegância.',
        comentario: 'A abreviação "I\'d" (I would) é o que você vai usar o tempo todo — pratique o som. E grave a diferença que mais confunde: LIKE é gosto geral; WOULD LIKE é desejo agora. Em qualquer balcão, "I\'d like..., please" é o seu cartão de visitas educado. Acrescente sempre o "please".',
      },
      vocabulario: [
        { palavra: 'would like (I\'d like)', def: 'gostaria — pedido educado (= want, mas polido).' },
        { palavra: 'Would you like...?', def: 'Gostaria de...? — oferta/pergunta educada.' },
        { palavra: 'Yes, please / No, thanks', def: 'respostas educadas a ofertas.' },
      ],
      chave: [
        'I\'d like + objeto OU to + verbo',
        'Oferta: Would you like...?',
        'like = gosto geral ≠ would like = quero agora',
      ],
      porque: 'Pedir com educação abre portas em lojas, cafés, restaurantes e atendimentos. "I\'d like..." é a forma natural e polida que falantes usam o dia inteiro — soa muito melhor que "I want".',
    },
    pratica: {
      instrucao: 'Pratique pedidos e ofertas educadas com would like.',
      passos: [
        'Peça um objeto: "I\'d like a ..., please."',
        'Peça uma ação: "I\'d like to ..."',
        'Faça uma oferta: "Would you like ...?"',
        'Responda ofertas: "Yes, please / No, thanks"',
        'Contraste: "I like ..." x "I\'d like ..."',
        'Pratique a abreviação I\'d em voz alta',
        'Monte 5 pedidos/ofertas educados',
      ],
    },
    desafio: {
      cenario: 'Escreva 5 falas educadas usando would like: peça itens, peça uma ação (to + verbo), faça uma oferta e responda a uma.',
      requisitos: [
        'Usei "I\'d like + objeto"',
        'Usei "I\'d like to + verbo"',
        'Fiz uma oferta com "Would you like...?"',
        'Respondi com "Yes, please / No, thanks"',
        'Diferenciei like de would like',
      ],
      dica: 'Não troque "would like" por "like" num pedido: "I like a coffee" soa estranho (parece "gosto de um café"). Para pedir AGORA, use sempre "I\'d like a coffee, please".',
    },
    validacao: [
      'Uso I\'d like para pedir',
      'Uso to + verbo após would like',
      'Faço ofertas com Would you like',
      'Respondo educadamente',
      'Distingo like de would like',
    ],
  },

  'en-a2-compras-5': {
    trilhaId: 'en-a2-compras', numero: 5, titulo: 'Trocas, tamanhos e problemas',
    tempoTotal: 12, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Comprou e não serviu? Veio com defeito? Quer trocar ou devolver? Saber resolver problemas de compra em inglês evita prejuízo e estresse — e é mais simples do que parece.',
      conceito: {
        titulo: 'Resolver problemas pós-compra',
        texto: 'Nem toda compra dá certo, e há frases-chave para resolver. TAMANHO: "It doesn\'t fit" (não serve), "It\'s too big/small/tight" (grande/pequeno/apertado demais), "Do you have a smaller size?". DEFEITO: "It\'s broken" (quebrado), "It doesn\'t work" (não funciona), "There\'s a problem with this". TROCA/DEVOLUÇÃO: "Can I exchange it?" (posso trocar?), "I\'d like to return this" (gostaria de devolver), "Can I get a refund?" (posso ter reembolso?), "Here\'s the receipt" (aqui está a nota). O vendedor pode perguntar "What\'s wrong with it?" (qual o problema?) ou "Do you have the receipt?". Com esse kit, você defende seus direitos de consumidor em inglês.',
      },
      estrutura: {
        titulo: 'Frases para cada problema',
        partes: [
          { simbolo: 'tamanho', desc: 'It doesn\'t fit. It\'s too small/big/tight.' },
          { simbolo: 'defeito', desc: 'It\'s broken. It doesn\'t work.' },
          { simbolo: 'trocar', desc: 'Can I exchange it? I\'d like to return this.' },
          { simbolo: 'reembolso', desc: 'Can I get a refund? Here\'s the receipt.' },
        ],
      },
      exemplo: {
        titulo: 'No balcão de trocas',
        celulas: [
          { ref: 'EN', valor: 'This shirt doesn\'t fit. — Esta camisa não serve.' },
          { ref: 'EN', valor: 'It\'s too small. Do you have a large? — Pequena. Tem G?' },
          { ref: 'EN', valor: 'I\'d like to return this, please. — Gostaria de devolver.' },
          { ref: 'EN', valor: 'Can I get a refund? Here\'s the receipt. — Reembolso? A nota.' },
        ],
        formula: 'problema (doesn\'t fit/work) + pedido (exchange/return/refund)',
        resultado: 'Você resolve trocas e devoluções em inglês.',
        comentario: 'Duas distinções úteis: FIT é sobre tamanho (servir no corpo) — "It doesn\'t fit"; WORK é sobre funcionar — "It doesn\'t work". E exchange (trocar por outro) é diferente de refund (devolver e receber o dinheiro). Sempre guarde e mencione o "receipt": ele é a chave de quase toda troca. Seja educado: "I\'d like to..." abre portas.',
      },
      vocabulario: [
        { palavra: 'It doesn\'t fit', def: 'não serve (tamanho). too big/small/tight.' },
        { palavra: 'exchange / return', def: 'trocar (por outro) / devolver.' },
        { palavra: 'refund / receipt', def: 'reembolso / recibo (nota da compra).' },
      ],
      chave: [
        'Tamanho: doesn\'t fit, too big/small',
        'Defeito: doesn\'t work, broken',
        'exchange (trocar) ≠ refund (dinheiro de volta); cite o receipt',
      ],
      porque: 'Problemas de compra acontecem, e resolvê-los em inglês evita perder dinheiro numa viagem ou compra online. Essas frases dão segurança pra reclamar e trocar com educação e firmeza.',
    },
    pratica: {
      instrucao: 'Pratique resolver problemas de compra em inglês.',
      passos: [
        'Diga que algo não serve: "It doesn\'t fit."',
        'Especifique: "It\'s too big/small/tight."',
        'Relate um defeito: "It doesn\'t work."',
        'Peça troca: "Can I exchange it?"',
        'Peça devolução/reembolso: "I\'d like to return this."',
        'Mencione a nota: "Here\'s the receipt."',
        'Encene um diálogo de troca completo',
      ],
    },
    desafio: {
      cenario: 'Encene um diálogo de troca em 8 falas: explique o problema (tamanho ou defeito), peça troca ou reembolso e apresente a nota.',
      requisitos: [
        'Expliquei o problema (doesn\'t fit ou doesn\'t work)',
        'Usei too big/small/tight ou broken',
        'Pedi exchange OU return/refund',
        'Mencionei o receipt',
        'Fui educado (I\'d like to..., please)',
      ],
      dica: 'Não confunda fit com work: roupa que não cabe é "doesn\'t fit"; aparelho que não liga é "doesn\'t work". E lembre: exchange = trocar por outro; refund = receber o dinheiro de volta.',
    },
    validacao: [
      'Explico problemas de tamanho',
      'Relato defeitos (doesn\'t work)',
      'Peço troca (exchange)',
      'Peço devolução/reembolso',
      'Menciono o receipt e sou educado',
    ],
  },

  'en-a2-compras-6': {
    trilhaId: 'en-a2-compras', numero: 6, titulo: 'Projeto: diálogo de compras',
    tempoTotal: 20, xp: 130, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai encenar uma ida completa às compras — do "posso ajudar?" ao pagamento, passando por tamanhos, preços, um pedido educado e até uma troca. É a sua primeira "cena" de loja inteira em inglês.',
      conceito: {
        titulo: 'Uma compra completa, do início ao fim',
        texto: 'Este projeto integra a trilha num diálogo realista de compras com dois papéis (cliente e vendedor). Use: 1) VOCABULÁRIO de loja, roupas, tamanhos e preços; 2) SOME/ANY/MUCH/MANY ao falar de quantidades e dinheiro ("I don\'t have much cash", "Do you have any in blue?"); 3) O ROTEIRO de loja ("Can I help you?" → "I\'m looking for..." → "Can I try it on?" → "I\'ll take it"); 4) WOULD LIKE para pedidos educados ("I\'d like to see the other one"); 5) TROCAS/PROBLEMAS, encaixando uma situação de tamanho errado ou troca ("It doesn\'t fit, can I exchange it?"). O objetivo é um diálogo de 10 a 12 falas que flua naturalmente da entrada ao pagamento (e, se quiser, a uma troca). Ensaie os dois lados e grave-se. Ao final, você terá conduzido uma compra inteira em inglês — uma das situações mais úteis que existem.',
      },
      estrutura: {
        titulo: 'O que o diálogo deve ter',
        partes: [
          { simbolo: 'vocab+roteiro', desc: 'Loja, roupas, preço; help you → I\'ll take it.' },
          { simbolo: 'quantidade', desc: 'some/any/much/many ao falar de itens e dinheiro.' },
          { simbolo: 'would like', desc: 'Um pedido educado: "I\'d like to..."' },
          { simbolo: 'troca', desc: 'Uma situação de tamanho/troca (doesn\'t fit).' },
        ],
      },
      exemplo: {
        titulo: 'Um diálogo modelo (trecho)',
        celulas: [
          { ref: 'Vendedor', valor: 'Can I help you? — Posso ajudar?' },
          { ref: 'Cliente', valor: 'Yes, I\'d like to see some jackets. — Quero ver jaquetas.' },
          { ref: 'Cliente', valor: 'How much is this one? Can I try it on? — Quanto é? Posso provar?' },
          { ref: 'Cliente', valor: 'It\'s too small. Do you have a larger one? — Pequena. Tem maior?' },
        ],
        formula: 'roteiro + vocab + quantificadores + would like + troca = compra completa',
        resultado: 'Você conduz uma cena de compras inteira.',
        comentario: 'O segredo é o FLUXO: cada fala puxa a próxima como numa loja real. Misture os recursos com naturalidade — um pedido educado aqui, uma pergunta de quantidade ali, uma troca no fim. Não busque perfeição gramatical; busque um diálogo que funcione e soe real. Grave os dois papéis e ouça: você vai notar que já "vira-se" numa loja em inglês.',
      },
      vocabulario: [
        { palavra: 'dialogue / role-play', def: 'diálogo/encenação — praticar os dois papéis.' },
        { palavra: 'customer / shop assistant', def: 'cliente / vendedor(a).' },
        { palavra: 'checkout', def: 'caixa — onde se paga e fecha a compra.' },
      ],
      chave: [
        'Diálogo de 10–12 falas, da entrada ao pagamento',
        'Integre vocab, some/any/much/many, would like e troca',
        'Ensaie os dois papéis e grave-se',
      ],
      porque: 'Conduzir uma compra inteira integra todos os recursos da trilha e treina uma das situações mais frequentes do mundo real — comprar, escolher, pagar e, se preciso, trocar. É utilidade pura, especialmente em viagens.',
    },
    pratica: {
      instrucao: 'Monte e encene um diálogo completo de compras.',
      passos: [
        'Defina os papéis: cliente e vendedor',
        'Abra com "Can I help you?" e a resposta',
        'Inclua tamanho, preço e um "Can I try it on?"',
        'Use some/any/much/many ao falar de itens/dinheiro',
        'Faça um pedido educado com "I\'d like to..."',
        'Encaixe uma troca: "It doesn\'t fit, can I exchange it?"',
        'Feche no pagamento e grave os dois papéis',
      ],
    },
    desafio: {
      cenario: 'Crie e encene um diálogo de compras de 10 a 12 falas integrando: vocabulário de loja, some/any/much/many, o roteiro de loja, would like e uma situação de troca.',
      requisitos: [
        'Segui o roteiro da loja (help you → I\'ll take it)',
        'Usei vocabulário de roupas, tamanhos e preço',
        'Usei some/any/much/many corretamente',
        'Fiz um pedido educado com would like',
        'Inclui uma troca e encenei em voz alta',
      ],
      dica: 'Não escreva um texto pra recitar: pense como uma conversa de verdade, em que cada fala responde à anterior. Encene os dois lados em voz alta — é assim que o diálogo fica natural e fixa de vez.',
    },
    validacao: [
      'Segui o roteiro de loja',
      'Usei vocabulário de compras',
      'Usei quantificadores corretamente',
      'Usei would like num pedido',
      'Inclui troca e encenei em voz alta',
    ],
  },
};
