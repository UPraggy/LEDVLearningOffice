// ============================================================================
// CONTEÚDO — Compras Online Sem Cair em Golpe (sec-compras)
// módulo Segurança · vertente "ambos"
// Loja-fantasma, reputação/CNPJ, pagamento seguro, frete falso,
// lojas de rede social, direitos do consumidor. Conteúdo autoral, foco no Brasil.
// ============================================================================

export const SEC_COMPRAS = {
  'sec-compras-1': {
    trilhaId: 'sec-compras', numero: 1, titulo: 'A loja existe? Reputação e CNPJ',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Antes de digitar qualquer dado num site de compras, vale a pergunta mais importante: essa loja existe de verdade e é confiável? Em dois minutos de checagem você separa as lojas honestas das fachadas montadas pra sumir com o seu dinheiro.',
      conceito: {
        titulo: 'Toda loja séria deixa rastros — a falsa, quase nenhum',
        texto: 'Uma loja online legítima tem CNPJ visível (no rodapé ou na página "quem somos"), endereço, telefone e histórico de reclamações que podem ser consultados. A loja-fantasma costuma esconder o CNPJ, ter o site recém-criado, não ter avaliações reais e oferecer só formas de pagamento que dificultam o estorno. Antes de comprar em um lugar novo, faça uma checagem rápida: pesquise o nome da loja + "reclamação", confira o CNPJ em consultas públicas e veja há quanto tempo o site existe. Dois minutos de checagem evitam semanas de dor de cabeça.',
      },
      estrutura: {
        titulo: 'Checagem rápida antes de comprar',
        partes: [
          { simbolo: '🔢', desc: 'Procure o CNPJ no rodapé/"quem somos" e confira em consulta pública.' },
          { simbolo: '🗣️', desc: 'Pesquise "nome da loja + reclamação" e veja como ela responde.' },
          { simbolo: '📅', desc: 'Veja se o site é muito novo (domínio recém-criado é alerta).' },
          { simbolo: '📞', desc: 'Confira se há endereço e telefone reais de contato.' },
        ],
      },
      exemplo: {
        titulo: 'Loja confiável x loja-fantasma',
        celulas: [
          { ref: 'Confiável', valor: 'CNPJ visível, reclamações respondidas, contato real' },
          { ref: 'Fantasma', valor: 'Sem CNPJ, site novo, sem avaliações, só PIX' },
          { ref: 'Checar', valor: 'Nome da loja + "é confiável?" / "reclamação"' },
          { ref: 'Regra', valor: 'Não achou rastro nenhum? Não compre' },
        ],
        formula: 'CNPJ + reputação + idade do site + contato real = confiança',
        resultado: 'Você compra só onde há rastros verificáveis.',
        comentario: 'Sites de reclamação públicos mostram não só se a loja tem queixas, mas se ela responde e resolve. Uma loja com reclamações bem resolvidas pode ser mais segura que uma sem histórico nenhum.',
      },
      vocabulario: [
        { palavra: 'CNPJ', def: 'Registro da empresa; loja séria o exibe e ele pode ser consultado.' },
        { palavra: 'Loja-fantasma', def: 'Site falso montado pra receber e sumir, sem entregar nada.' },
        { palavra: 'Reputação', def: 'Histórico de reclamações e respostas da loja em canais públicos.' },
      ],
      chave: [
        'Loja séria mostra CNPJ, contato e histórico',
        'Pesquise "nome + reclamação" antes de comprar',
        'Sem rastros verificáveis = não compre',
      ],
      porque: 'A checagem de existência e reputação é o primeiro filtro e o de maior retorno: elimina a loja-fantasma antes de você expor dados ou dinheiro. Vira um hábito de dois minutos que protege todas as compras.',
    },
    pratica: {
      instrucao: 'Treine a checagem rápida numa loja que você não conhece.',
      passos: [
        'Escolha uma loja online qualquer que você nunca usou',
        'Procure o CNPJ no rodapé ou na página "quem somos"',
        'Pesquise "nome da loja + reclamação" e leia as respostas',
        'Verifique se há endereço e telefone reais',
        'Decida: você compraria aqui? Por quê?',
      ],
    },
    desafio: {
      cenario: 'Você faz a checagem de CNPJ, reputação e contato antes de comprar em qualquer loja nova.',
      requisitos: [
        'Procuro o CNPJ da loja',
        'Pesquiso a reputação ("nome + reclamação")',
        'Verifico a idade do site',
        'Confiro endereço e telefone reais',
        'Não compro sem rastros verificáveis',
      ],
      dica: 'Desconfie de lojas que existem só no Instagram, sem site nem CNPJ. Rede social é vitrine, não garantia. A próxima missão mostra como checar reputação a fundo.',
    },
    validacao: [
      'Procuro o CNPJ da loja',
      'Pesquiso a reputação',
      'Verifico a idade do site',
      'Confiro contato real',
      'Não compro sem rastros',
    ],
  },

  'sec-compras-2': {
    trilhaId: 'sec-compras', numero: 2, titulo: 'Preço bom demais: a loja-fantasma',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Aquele celular que custa R$ 4.000 aparece por R$ 1.200, "só hoje", num site lindo. O desconto é a isca, e a pressa é o anzol. A loja-fantasma vive de preços impossíveis pra te fazer comprar sem pensar.',
      conceito: {
        titulo: 'Desconto absurdo é vermelho, não verde',
        texto: 'Lojas-fantasma anunciam produtos caros por preços muito abaixo do mercado pra atrair muita gente rápido. Montam um site bonito, criam urgência ("últimas unidades", contagem regressiva), aceitam o pagamento e desaparecem — ou entregam um produto falso/diferente. O preço bom demais deveria ligar o alerta, não a empolgação. Compare o valor com outras lojas conhecidas: se está muito abaixo de todo mundo, há algo errado. Some isso à checagem de reputação da missão anterior e prefira pagar de formas que permitam estorno.',
      },
      estrutura: {
        titulo: 'Sinais da loja-fantasma',
        partes: [
          { simbolo: '💸', desc: 'Preço muito abaixo de todas as outras lojas.' },
          { simbolo: '⏳', desc: 'Pressa artificial: "só hoje", contador regressivo, "últimas unidades".' },
          { simbolo: '💳', desc: 'Só aceita PIX/transferência (dificulta o estorno).' },
          { simbolo: '🆕', desc: 'Site novo, sem reputação, sem CNPJ visível.' },
        ],
      },
      exemplo: {
        titulo: 'Comparar é a defesa',
        celulas: [
          { ref: 'Anúncio', valor: 'iPhone novo por 30% do preço normal, "só hoje"' },
          { ref: 'Mercado', valor: 'Em todas as lojas conhecidas custa 3x mais' },
          { ref: 'Conclusão', valor: 'Preço impossível = golpe; não comprar' },
          { ref: 'Certo', valor: 'Comprar em loja conhecida, mesmo que mais caro' },
        ],
        formula: 'Preço impossível + pressa + só PIX = loja-fantasma',
        resultado: 'Você não troca seu dinheiro por uma promessa vazia.',
        comentario: 'Golpistas usam fotos reais do produto e até "selos de segurança" copiados. Nada disso vale: o que decide é o preço fora da realidade, a falta de reputação e a forma de pagamento sem volta.',
      },
      vocabulario: [
        { palavra: 'Isca de preço', def: 'Desconto impossível usado pra atrair vítimas rápido.' },
        { palavra: 'Urgência artificial', def: 'Pressa fabricada (contador, "últimas unidades") pra você não pensar.' },
        { palavra: 'Selo falso', def: 'Imagem de "site seguro" copiada, que não prova nada.' },
      ],
      chave: [
        'Preço bom demais é alerta, não oportunidade',
        'Compare com lojas conhecidas antes de comprar',
        'Pressa + só PIX + site novo = loja-fantasma',
      ],
      porque: 'O golpe da loja-fantasma explora a empolgação com a "pechincha". Treinar o reflexo de comparar e desconfiar do preço impossível protege seu dinheiro justamente quando a vontade de comprar fala mais alto.',
    },
    pratica: {
      instrucao: 'Calibre seu radar pra preços impossíveis.',
      passos: [
        'Pense num produto caro que você gostaria de comprar',
        'Veja o preço médio dele em 2-3 lojas conhecidas',
        'Defina o que seria um "preço impossível" pra esse item',
        'Combine: preço impossível = eu paro e desconfio',
        'Combine: na dúvida, compro em loja conhecida mesmo mais caro',
      ],
    },
    desafio: {
      cenario: 'Você reconhece o preço impossível como sinal de golpe e compara antes de comprar.',
      requisitos: [
        'Reconheço o preço bom demais como alerta',
        'Comparo com lojas conhecidas',
        'Identifico a urgência artificial',
        'Desconfio de "só PIX" em loja nova',
        'Prefiro loja conhecida na dúvida',
      ],
      dica: 'Se realmente houver uma promoção boa numa loja desconhecida, ela continuará existindo depois de você checar a reputação. Promoção verdadeira sobrevive à sua conferência; golpe não.',
    },
    validacao: [
      'Reconheço o preço impossível',
      'Comparo com lojas conhecidas',
      'Identifico urgência artificial',
      'Desconfio de só PIX',
      'Prefiro loja conhecida na dúvida',
    ],
  },

  'sec-compras-3': {
    trilhaId: 'sec-compras', numero: 3, titulo: 'Marketplace x site próprio: onde é mais seguro',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Comprar dentro de um grande marketplace ou direto no site da loja muda bastante a sua proteção. Entender a diferença ajuda a escolher onde arriscar menos — e como usar a proteção que o marketplace oferece a seu favor.',
      conceito: {
        titulo: 'O intermediário pode ser seu seguro',
        texto: 'Marketplaces grandes funcionam como intermediários: eles seguram o pagamento, têm política de devolução e mediam conflitos se o produto não chegar ou vier errado. Isso te dá uma camada de proteção que um site próprio desconhecido não oferece. Mas há um truque comum: golpistas tentam te tirar de dentro do marketplace ("fecha comigo por fora que sai mais barato, te mando um PIX"). No instante em que você paga por fora, perde toda a proteção. A regra: mantenha a compra, o pagamento e a conversa DENTRO da plataforma. É lá que você tem a quem recorrer.',
      },
      estrutura: {
        titulo: 'Como usar a proteção a seu favor',
        partes: [
          { simbolo: '🛡️', desc: 'Marketplace segura o pagamento e media conflitos — use isso.' },
          { simbolo: '🚪', desc: '"Fecha por fora / te mando PIX" = sair da proteção. Recuse.' },
          { simbolo: '💬', desc: 'Mantenha conversa e combinação dentro da plataforma.' },
          { simbolo: '⭐', desc: 'No marketplace, veja a reputação do VENDEDOR, não só da loja.' },
        ],
      },
      exemplo: {
        titulo: 'Dentro x fora da plataforma',
        celulas: [
          { ref: 'Dentro', valor: 'Pagamento retido, devolução e mediação garantidas' },
          { ref: 'Fora', valor: 'PIX direto ao vendedor: sem proteção, sem volta' },
          { ref: 'Vendedor', valor: 'Conferir nota/reputação e tempo de loja no marketplace' },
          { ref: 'Regra', valor: 'Combinou e pagou por fora? Perdeu o seguro' },
        ],
        formula: 'Comprar + pagar + conversar dentro da plataforma = protegido',
        resultado: 'Se algo der errado, você tem a quem recorrer.',
        comentario: 'Mesmo em marketplaces confiáveis, há vendedores ruins. Por isso confira a reputação do vendedor específico (nota, número de vendas, reclamações) — a proteção da plataforma existe, mas evitar dor de cabeça é melhor.',
      },
      vocabulario: [
        { palavra: 'Marketplace', def: 'Plataforma que reúne vários vendedores e intermedia as compras.' },
        { palavra: 'Pagamento retido', def: 'O marketplace segura o valor e só repassa ao vendedor após a entrega.' },
        { palavra: 'Venda por fora', def: 'Sair da plataforma pra pagar direto — perde toda a proteção.' },
      ],
      chave: [
        'Marketplace oferece proteção: pagamento retido e mediação',
        'Nunca feche "por fora" nem pague por PIX direto ao vendedor',
        'Confira a reputação do vendedor, não só da plataforma',
      ],
      porque: 'Saber onde a proteção existe e como não perdê-la muda o jogo. Manter tudo dentro da plataforma garante que, no pior caso, você tenha mediação e estorno — algo que um pagamento por fora joga fora.',
    },
    pratica: {
      instrucao: 'Aprenda a usar a proteção do marketplace.',
      passos: [
        'Num marketplace que você usa, ache a política de devolução',
        'Veja como funciona a mediação se o produto não chegar',
        'Localize a reputação/nota de um vendedor específico',
        'Combine: nunca fecho "por fora" nem pago PIX ao vendedor',
        'Combine: mantenho conversa e pagamento dentro da plataforma',
      ],
    },
    desafio: {
      cenario: 'Você mantém compra, pagamento e conversa dentro do marketplace e confere a reputação do vendedor.',
      requisitos: [
        'Entendo a proteção do marketplace',
        'Não fecho compras por fora da plataforma',
        'Não pago PIX direto ao vendedor',
        'Confiro a reputação do vendedor',
        'Mantenho a conversa dentro da plataforma',
      ],
      dica: 'O argumento "por fora sai mais barato" é justamente onde o golpista ganha: sem a plataforma, ele recebe e some. Desconto que exige abrir mão da proteção não é desconto — é risco.',
    },
    validacao: [
      'Entendo a proteção do marketplace',
      'Não fecho compras por fora',
      'Não pago PIX direto ao vendedor',
      'Confiro a reputação do vendedor',
      'Mantenho tudo na plataforma',
    ],
  },

  'sec-compras-4': {
    trilhaId: 'sec-compras', numero: 4, titulo: 'Pagamento seguro: o que usar e o que evitar',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'A forma de pagamento decide se você consegue o dinheiro de volta quando algo dá errado. Cartão, PIX, boleto: cada um tem um nível de proteção diferente. Escolher certo é uma camada de segurança que muita gente ignora.',
      conceito: {
        titulo: 'Pague de um jeito que permita voltar atrás',
        texto: 'O cartão de crédito é, em geral, o meio mais protegido pra compras online: dá pra contestar e pedir estorno se o produto não chegar ou for fraude. O PIX e a transferência são instantâneos e, fora do MED em casos de golpe, difíceis de reverter — por isso golpistas adoram. Boleto fica no meio. A recomendação: em lojas novas ou com qualquer dúvida, prefira cartão (de preferência virtual, da trilha do banco) e evite PIX direto. Se a loja só aceita PIX e empurra a urgência, trate como bandeira vermelha.',
      },
      estrutura: {
        titulo: 'Proteção por forma de pagamento',
        partes: [
          { simbolo: '💳', desc: 'Cartão (virtual): mais protegido, permite contestar e estornar.' },
          { simbolo: '⚡', desc: 'PIX/transferência: instantâneo e difícil de reverter — cuidado.' },
          { simbolo: '🧾', desc: 'Boleto: intermediário; confira sempre o beneficiário.' },
          { simbolo: '🚩', desc: '"Só PIX" + pressa em loja nova = bandeira vermelha.' },
        ],
      },
      exemplo: {
        titulo: 'Escolha conforme a confiança na loja',
        celulas: [
          { ref: 'Loja conhecida', valor: 'Cartão ou PIX, à vontade' },
          { ref: 'Loja nova', valor: 'Cartão virtual; evitar PIX direto' },
          { ref: 'Só aceita PIX', valor: 'Desconfiar; checar reputação a fundo' },
          { ref: 'Golpe', valor: 'PIX com pressa → quase sem volta' },
        ],
        formula: 'Mais dúvida sobre a loja → forma mais reversível (cartão)',
        resultado: 'Se a compra der errado, você tem como reaver o valor.',
        comentario: 'Descontos generosos "só no PIX" existem em lojas honestas também — mas, em loja desconhecida, esse desconto serve pra te empurrar pro meio sem volta. Pese o pequeno desconto contra o risco.',
      },
      vocabulario: [
        { palavra: 'Estorno', def: 'Devolução do valor; mais fácil no cartão de crédito.' },
        { palavra: 'MED', def: 'Mecanismo de devolução do PIX em casos de golpe (ver trilha do PIX).' },
        { palavra: 'Reversibilidade', def: 'Quão fácil é desfazer um pagamento se algo der errado.' },
      ],
      chave: [
        'Cartão (virtual) é o meio mais protegido online',
        'PIX/transferência são difíceis de reverter — cuidado em loja nova',
        '"Só PIX" + pressa em loja desconhecida = bandeira vermelha',
      ],
      porque: 'A forma de pagamento é uma escolha de segurança consciente. Saber qual permite voltar atrás te dá uma rede de proteção justamente nas compras de maior risco, onde o estorno faz diferença.',
    },
    pratica: {
      instrucao: 'Defina sua regra de pagamento por nível de confiança.',
      passos: [
        'Liste as formas que você costuma usar (cartão, PIX, boleto)',
        'Lembre: cartão permite contestar; PIX é quase sem volta',
        'Defina: loja nova/duvidosa = cartão virtual, não PIX',
        'Defina: "só PIX" + pressa = checar reputação antes',
        'Combine: pequeno desconto não vale perder a proteção',
      ],
    },
    desafio: {
      cenario: 'Você escolhe a forma de pagamento conforme a confiança na loja, preferindo cartão em compras de risco.',
      requisitos: [
        'Sei qual forma é mais protegida (cartão)',
        'Sei que PIX é difícil de reverter',
        'Uso cartão virtual em lojas novas',
        'Trato "só PIX" + pressa como alerta',
        'Não troco proteção por pequeno desconto',
      ],
      dica: 'Combine esta missão com a do cartão virtual: cartão virtual numa loja nova te dá dupla proteção — descartável se vazar e contestável se for golpe. É o melhor dos dois mundos.',
    },
    validacao: [
      'Sei qual forma é mais protegida',
      'Sei que PIX é difícil de reverter',
      'Uso cartão virtual em loja nova',
      'Trato só PIX + pressa como alerta',
      'Não troco proteção por desconto',
    ],
  },

  'sec-compras-5': {
    trilhaId: 'sec-compras', numero: 5, titulo: 'Frete, alfândega e "pague pra liberar"',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Sua encomenda está retida. Pague R$ 9,90 de taxa pra liberar: [link]." A mensagem parece dos Correios, tem código de rastreio e tudo. Mas é um dos golpes mais espalhados do país — e ele cobra pouco justamente pra você pagar sem pensar.',
      conceito: {
        titulo: 'A taxa pequena que abre uma porta grande',
        texto: 'No golpe da encomenda retida, você recebe SMS/e-mail/WhatsApp dizendo que um pacote está parado e pede uma "taxa de liberação" baixa por um link. O valor pequeno faz você pagar sem resistência — mas o link leva a uma página falsa que captura seu cartão, ou o PIX cai pro golpista. Em alguns casos, o objetivo é roubar muito mais do que os R$ 9,90. A defesa: nunca pague taxa por link de mensagem. Rastreie a encomenda direto no site/app oficial da transportadora, digitando o endereço você mesmo. Taxas reais (quando existem) aparecem nos canais oficiais, não num link que chegou.',
      },
      estrutura: {
        titulo: 'Como furar o golpe da encomenda',
        partes: [
          { simbolo: '📦', desc: '"Encomenda retida, pague taxa pra liberar" = desconfie sempre.' },
          { simbolo: '🔗', desc: 'Não pague nem clique no link da mensagem.' },
          { simbolo: '🌐', desc: 'Rastreie no site/app oficial da transportadora, você mesmo.' },
          { simbolo: '🪙', desc: 'Valor baixo é estratégia pra você pagar sem pensar.' },
        ],
      },
      exemplo: {
        titulo: 'O caminho seguro de rastreio',
        celulas: [
          { ref: 'Recebeu', valor: 'SMS: "Pacote retido, taxa R$ 9,90: link"' },
          { ref: 'Errado', valor: 'Clicar e pagar a taxa pelo link' },
          { ref: 'Certo', valor: 'Abrir o app/site oficial da transportadora' },
          { ref: 'Certo', valor: 'Rastrear pelo código direto na fonte oficial' },
        ],
        formula: 'Taxa por link de mensagem → não pago; rastreio no oficial',
        resultado: 'Seu cartão e seu PIX não vão pro golpista.',
        comentario: 'Esperava uma compra internacional? Tributos reais existem, mas são informados e pagos pelos canais oficiais da transportadora/Correios, nunca por um link aleatório que chega com pressa.',
      },
      vocabulario: [
        { palavra: 'Encomenda retida', def: 'Desculpa do golpe pra cobrar uma "taxa de liberação" falsa.' },
        { palavra: 'Taxa de liberação', def: 'Cobrança falsa por link; transportadora não cobra assim.' },
        { palavra: 'Rastreio oficial', def: 'Acompanhar o pacote pelo site/app da própria transportadora.' },
      ],
      chave: [
        'Nunca pague taxa de encomenda por link de mensagem',
        'Rastreie sempre no site/app oficial, digitado por você',
        'Valor baixo é isca pra pagar sem pensar',
      ],
      porque: 'O golpe da encomenda atinge quase todo mundo porque sempre tem alguém esperando um pacote. O hábito de rastrear só pelo canal oficial neutraliza a fraude, independentemente de quão real a mensagem pareça.',
    },
    pratica: {
      instrucao: 'Fixe o rastreio oficial como único caminho.',
      passos: [
        'Decida: não pago taxa de encomenda por link de mensagem',
        'Salve/saiba o site ou app oficial de rastreio das transportadoras',
        'Pratique rastrear um pedido pelo código no canal oficial',
        'Trate "taxa pra liberar" com link como golpe',
        'Apague essas mensagens sem clicar',
      ],
    },
    desafio: {
      cenario: 'Você nunca paga taxa de encomenda por link e rastreia tudo pelos canais oficiais.',
      requisitos: [
        'Reconheço o golpe da encomenda retida',
        'Não pago taxa por link de mensagem',
        'Rastreio no site/app oficial',
        'Entendo que o valor baixo é isca',
        'Apago as mensagens sem clicar',
      ],
      dica: 'Anote os pedidos que você realmente fez e por onde devem chegar. Quando souber o que está esperando, fica fácil descartar mensagens sobre "encomendas" que você nunca comprou.',
    },
    validacao: [
      'Reconheço o golpe da encomenda',
      'Não pago taxa por link',
      'Rastreio no canal oficial',
      'Entendo que valor baixo é isca',
      'Apago mensagens sem clicar',
    ],
  },

  'sec-compras-6': {
    trilhaId: 'sec-compras', numero: 6, titulo: 'Lojas de Instagram e Facebook: o sinal de golpe',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'As redes sociais viraram vitrine de loja — inclusive de loja falsa. Perfis bonitos, fotos profissionais e promoções que aparecem no seu feed escondem, às vezes, um golpe. Saber o que checar antes de comprar por uma rede social evita um prejuízo comum.',
      conceito: {
        titulo: 'Perfil bonito não é loja verificada',
        texto: 'Golpistas criam perfis comerciais no Instagram e Facebook com fotos roubadas de lojas reais, impulsionam anúncios e atraem clientes pra um "checkout" que é só um PIX. Como não há intermediário nem CNPJ aparente, se o produto não chegar você não tem a quem recorrer. Os sinais: perfil recente, comentários desativados, só aceita PIX, pressa pra fechar no direct, e nenhuma informação de empresa. Antes de comprar por rede social, exija o CNPJ, procure a reputação fora da rede, e prefira pagar por meio reversível — ou, melhor, compre pelo site/marketplace oficial da marca.',
      },
      estrutura: {
        titulo: 'Checagem antes de comprar pela rede',
        partes: [
          { simbolo: '🆕', desc: 'Perfil recente, poucos seguidores reais, sem histórico.' },
          { simbolo: '🙊', desc: 'Comentários desativados ou cheios de "não recebi".' },
          { simbolo: '💸', desc: 'Só aceita PIX e apressa o fechamento no direct.' },
          { simbolo: '🏢', desc: 'Sem CNPJ, sem site, sem informação de empresa.' },
        ],
      },
      exemplo: {
        titulo: 'O que pedir antes de pagar',
        celulas: [
          { ref: 'Peça', valor: 'CNPJ e nome da empresa' },
          { ref: 'Procure', valor: 'Reputação fora da rede (reclamação + nome)' },
          { ref: 'Evite', valor: 'PIX direto pro perfil sem nenhuma garantia' },
          { ref: 'Prefira', valor: 'Comprar pelo site/marketplace oficial da marca' },
        ],
        formula: 'Sem CNPJ + comentários off + só PIX = não comprar',
        resultado: 'Você não paga por uma vitrine que pode sumir amanhã.',
        comentario: 'Marcas legítimas que vendem por rede social costumam ter site, CNPJ e atendimento. Se o "lojista" se recusa a informar a empresa ou some quando você pede CNPJ, a resposta já está dada.',
      },
      vocabulario: [
        { palavra: 'Perfil comercial', def: 'Conta de loja na rede social; não garante empresa real.' },
        { palavra: 'Direct', def: 'Mensagem privada; onde golpistas fecham vendas sem rastro.' },
        { palavra: 'Anúncio impulsionado', def: 'Post pago que aparece no feed; golpistas também usam.' },
      ],
      chave: [
        'Perfil bonito não prova loja real',
        'Exija CNPJ e cheque reputação fora da rede',
        'Prefira o site/marketplace oficial da marca',
      ],
      porque: 'Compras por rede social crescem e os golpes acompanham. Saber checar CNPJ e reputação — e preferir os canais oficiais — evita pagar por uma loja que existe só enquanto dá lucro ao golpista.',
    },
    pratica: {
      instrucao: 'Pratique a checagem de uma loja de rede social.',
      passos: [
        'Abra um perfil de loja que apareceu no seu feed',
        'Veja: o perfil é recente? Os comentários estão ativos?',
        'Procure CNPJ, site e informação de empresa',
        'Pesquise a reputação fora da rede',
        'Decida: compraria? Se sim, por meio reversível e com CNPJ',
      ],
    },
    desafio: {
      cenario: 'Você checa CNPJ e reputação antes de comprar por rede social e prefere os canais oficiais.',
      requisitos: [
        'Reconheço sinais de loja falsa na rede',
        'Exijo CNPJ antes de comprar',
        'Checo a reputação fora da rede',
        'Evito PIX direto pro perfil',
        'Prefiro o site/marketplace oficial',
      ],
      dica: 'Se a marca é conhecida, procure o perfil verificado oficial dela e compre pelo link do site na bio. Perfis falsos copiam o nome com pequenas variações — confira com atenção.',
    },
    validacao: [
      'Reconheço loja falsa na rede',
      'Exijo CNPJ antes de comprar',
      'Checo reputação fora da rede',
      'Evito PIX direto pro perfil',
      'Prefiro canais oficiais',
    ],
  },

  'sec-compras-7': {
    trilhaId: 'sec-compras', numero: 7, titulo: 'Não chegou, veio errado: seus direitos',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Comprou e o produto não chegou, veio quebrado ou diferente do anunciado? Você tem direitos claros — e saber usá-los resolve a maioria dos casos sem dor de cabeça. Conhecer o caminho da reclamação é tão importante quanto evitar o golpe.',
      conceito: {
        titulo: 'O consumidor tem direito de arrependimento e de troca',
        texto: 'Em compras online no Brasil, você tem o direito de arrependimento: pode desistir em até 7 dias após receber, sem precisar justificar, e receber o valor de volta. Se o produto vier com defeito, diferente do anunciado ou não chegar, a loja é obrigada a resolver — troca, conserto ou devolução do dinheiro. O caminho: primeiro, registre a reclamação na própria loja (guardando protocolos). Não resolveu? Acione canais de defesa do consumidor e plataformas públicas de reclamação. Guarde tudo: anúncio, conversa, comprovante. Documentação é o que dá força ao seu pedido.',
      },
      estrutura: {
        titulo: 'Caminho da reclamação',
        partes: [
          { simbolo: '🗓️', desc: 'Arrependimento: desistir em até 7 dias do recebimento, sem justificar.' },
          { simbolo: '🔧', desc: 'Defeito/errado/não chegou: loja deve trocar, consertar ou devolver.' },
          { simbolo: '🧾', desc: 'Registre na loja primeiro e guarde protocolos.' },
          { simbolo: '⚖️', desc: 'Não resolveu? Acione defesa do consumidor e plataformas públicas.' },
        ],
      },
      exemplo: {
        titulo: 'Como agir quando algo dá errado',
        celulas: [
          { ref: '1º', valor: 'Reunir anúncio, comprovante e conversa' },
          { ref: '2º', valor: 'Abrir reclamação na loja e anotar protocolo' },
          { ref: '3º', valor: 'Sem solução? Plataforma pública de reclamação' },
          { ref: '4º', valor: 'Persistindo, órgão de defesa do consumidor' },
        ],
        formula: 'Documentar + reclamar na loja + escalar se preciso',
        resultado: 'A maioria dos casos se resolve com pressão documentada.',
        comentario: 'Pagar com cartão dá uma carta extra: se a loja não resolver, você pode contestar a cobrança com o banco (ver trilha do banco). Por isso o meio de pagamento e seus direitos andam juntos.',
      },
      vocabulario: [
        { palavra: 'Direito de arrependimento', def: 'Desistir da compra online em até 7 dias do recebimento, sem justificar.' },
        { palavra: 'Vício do produto', def: 'Defeito ou divergência do anunciado; a loja deve resolver.' },
        { palavra: 'Protocolo', def: 'Número da reclamação; guarde pra comprovar e acompanhar.' },
      ],
      chave: [
        'Você tem direito de arrependimento em 7 dias',
        'Defeito/errado/não chegou: a loja deve resolver',
        'Documente tudo e escale se a loja não resolver',
      ],
      porque: 'Saber seus direitos te dá poder depois da compra. Documentar e seguir o caminho da reclamação resolve a maioria dos problemas e, com pagamento no cartão, ainda abre a contestação como reforço.',
    },
    pratica: {
      instrucao: 'Conheça o caminho da reclamação antes de precisar.',
      passos: [
        'Memorize: arrependimento = até 7 dias do recebimento',
        'Saiba que defeito/errado/não chegou obriga a loja a resolver',
        'Combine: guardo anúncio, comprovante e conversa de toda compra',
        'Saiba onde reclamar na loja e pegar protocolo',
        'Saiba que existem plataformas públicas e defesa do consumidor',
      ],
    },
    desafio: {
      cenario: 'Você sabe usar o direito de arrependimento, documentar e escalar uma reclamação quando necessário.',
      requisitos: [
        'Conheço o direito de arrependimento (7 dias)',
        'Sei que a loja deve resolver defeito/errado/não chegou',
        'Guardo anúncio, comprovante e conversa',
        'Sei reclamar na loja e pegar protocolo',
        'Sei escalar pra defesa do consumidor',
      ],
      dica: 'Tire print do anúncio no momento da compra. Se o produto vier diferente, esse print prova o que foi prometido — lojas às vezes alteram a página depois. Documentar no ato é sua melhor garantia.',
    },
    validacao: [
      'Conheço o arrependimento de 7 dias',
      'Sei que a loja deve resolver',
      'Guardo as provas da compra',
      'Sei reclamar e pegar protocolo',
      'Sei escalar a reclamação',
    ],
  },

  'sec-compras-8': {
    trilhaId: 'sec-compras', numero: 8, titulo: 'Avaliações falsas e produtos enganosos',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Cinco estrelas, centenas de elogios, "melhor compra da minha vida": as avaliações guiam o que compramos — e por isso são manipuladas. Aprender a ler avaliações com olhar crítico evita comprar gato por lebre.',
      conceito: {
        titulo: 'Nem toda estrela é honesta',
        texto: 'Vendedores desonestos compram avaliações positivas, criam contas falsas pra elogiar e escondem as críticas. Outros usam fotos de um produto e entregam outro. Pra não se enganar: leia as avaliações negativas e neutras primeiro (são as mais sinceras), desconfie de notas perfeitas com textos genéricos e repetidos, veja se há fotos reais de clientes, e cheque se as reclamações se repetem ("veio diferente", "quebrou em uma semana"). Compare a descrição com perguntas de outros compradores. Um padrão de queixas iguais diz mais que mil elogios vagos.',
      },
      estrutura: {
        titulo: 'Como ler avaliações de verdade',
        partes: [
          { simbolo: '👎', desc: 'Leia primeiro as avaliações negativas e neutras (mais sinceras).' },
          { simbolo: '🔁', desc: 'Desconfie de elogios genéricos e repetidos (texto "colado").' },
          { simbolo: '📸', desc: 'Valorize avaliações com fotos reais de clientes.' },
          { simbolo: '❓', desc: 'Leia as perguntas de compradores e veja se há queixas repetidas.' },
        ],
      },
      exemplo: {
        titulo: 'Sinais de avaliação manipulada',
        celulas: [
          { ref: 'Suspeito', valor: 'Só notas 5, textos curtos e iguais, sem fotos' },
          { ref: 'Confiável', valor: 'Mix de notas, fotos reais, críticas respondidas' },
          { ref: 'Alerta', valor: 'Várias queixas iguais: "veio diferente", "quebrou" ' },
          { ref: 'Cheque', valor: 'Descrição x perguntas de outros compradores' },
        ],
        formula: 'Ler negativas + checar fotos + padrão de queixas = visão real',
        resultado: 'Você compra sabendo dos defeitos, não só dos elogios.',
        comentario: 'Um produto bom tem críticas também — ninguém agrada a todos. O que assusta não é ter avaliação negativa, e sim a ausência total de críticas ou o mesmo elogio copiado dezenas de vezes.',
      },
      vocabulario: [
        { palavra: 'Avaliação falsa', def: 'Elogio comprado ou de conta fake pra inflar a nota.' },
        { palavra: 'Propaganda enganosa', def: 'Anúncio que promete o que o produto não entrega.' },
        { palavra: 'Padrão de queixa', def: 'Reclamações iguais que se repetem — sinal forte de problema real.' },
      ],
      chave: [
        'Leia as avaliações negativas e neutras primeiro',
        'Desconfie de notas perfeitas com textos repetidos',
        'Procure fotos reais e padrões de queixa',
      ],
      porque: 'Avaliações guiam a compra, então saber lê-las com olhar crítico evita produtos ruins e propaganda enganosa. É a diferença entre decidir pela emoção dos elogios e decidir pela realidade dos relatos.',
    },
    pratica: {
      instrucao: 'Treine a leitura crítica num produto qualquer.',
      passos: [
        'Escolha um produto com muitas avaliações',
        'Leia primeiro as avaliações de 1, 2 e 3 estrelas',
        'Veja se os elogios 5 estrelas têm texto genérico repetido',
        'Procure avaliações com fotos reais de clientes',
        'Identifique se há um padrão de queixa se repetindo',
      ],
    },
    desafio: {
      cenario: 'Você lê avaliações de forma crítica, começando pelas negativas e procurando padrões e fotos reais.',
      requisitos: [
        'Leio negativas e neutras primeiro',
        'Desconfio de elogios genéricos repetidos',
        'Valorizo avaliações com fotos reais',
        'Procuro padrões de queixa',
        'Comparo descrição e perguntas dos compradores',
      ],
      dica: 'Avaliações que chegam todas na mesma data, ou logo após o lançamento do produto, costumam ser plantadas. Distribuição natural ao longo do tempo é sinal de avaliações mais autênticas.',
    },
    validacao: [
      'Leio as negativas primeiro',
      'Desconfio de elogios repetidos',
      'Valorizo fotos reais',
      'Procuro padrões de queixa',
      'Comparo descrição e perguntas',
    ],
  },

  'sec-compras-9': {
    trilhaId: 'sec-compras', numero: 9, titulo: 'Projeto: rotina de compra online segura',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você já sabe checar a loja, fugir do preço impossível, pagar com proteção e usar seus direitos. Hora de juntar tudo numa rotina simples que cabe em qualquer compra — pra comprar online com tranquilidade, sempre.',
      conceito: {
        titulo: 'Uma sequência mental pra toda compra',
        texto: 'Compra online segura não é desconfiar de tudo: é seguir uma rotina rápida. Antes: checar reputação e CNPJ, comparar o preço, ler avaliações de verdade. Durante: manter-se dentro de marketplace quando possível, pagar com cartão (virtual) em loja nova, conferir o endereço do site. Depois: guardar comprovante e anúncio, rastrear só pelo canal oficial, e acionar seus direitos se algo der errado. Com essa sequência virando hábito, você aproveita a praticidade das compras online sem servir de alvo.',
      },
      estrutura: {
        titulo: 'A rotina em três tempos',
        partes: [
          { simbolo: '🔍', desc: 'Antes: reputação + CNPJ + comparar preço + ler avaliações.' },
          { simbolo: '🛒', desc: 'Durante: marketplace/cartão virtual + conferir o domínio do site.' },
          { simbolo: '📑', desc: 'Depois: guardar provas + rastrear no oficial + usar direitos.' },
          { simbolo: '🚩', desc: 'Sempre: preço impossível, só PIX e pressa = parar.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist da compra segura',
        celulas: [
          { ref: 'Antes', valor: 'CNPJ ✓ · Reputação ✓ · Preço comparado ✓ · Avaliações ✓' },
          { ref: 'Durante', valor: 'Plataforma/cartão virtual ✓ · Domínio conferido ✓' },
          { ref: 'Depois', valor: 'Comprovante guardado ✓ · Rastreio oficial ✓' },
          { ref: 'Alertas', valor: 'Preço impossível ✗ · Só PIX ✗ · Pressa ✗' },
        ],
        formula: 'Antes + durante + depois = compra online tranquila',
        resultado: 'Você aproveita a praticidade sem virar alvo.',
        comentario: 'Essa rotina se torna automática em poucas compras. O esforço inicial de checar vira um reflexo de segundos — e te poupa dos prejuízos que levam semanas pra resolver.',
      },
      vocabulario: [
        { palavra: 'Rotina de compra', def: 'Sequência rápida de checagens antes, durante e depois da compra.' },
        { palavra: 'Domínio', def: 'Endereço do site; confira se é o oficial, sem letras trocadas.' },
        { palavra: 'Hábito de segurança', def: 'Defesa que vira automática com a repetição.' },
      ],
      chave: [
        'Antes: reputação, CNPJ, preço e avaliações',
        'Durante: plataforma/cartão virtual e domínio conferido',
        'Depois: provas guardadas, rastreio oficial e direitos',
      ],
      porque: 'Este projeto transforma toda a trilha numa rotina prática e repetível. Com a sequência de três tempos virando hábito, comprar online deixa de ser risco e volta a ser o que deveria: prático e seguro.',
    },
    pratica: {
      instrucao: 'Monte e teste sua rotina de compra segura.',
      passos: [
        'Antes: escolha uma loja e faça reputação + CNPJ + preço + avaliações',
        'Durante: decida plataforma e forma de pagamento (cartão virtual em loja nova)',
        'Durante: confira o domínio do site (sem letras trocadas)',
        'Depois: combine guardar comprovante e anúncio',
        'Depois: lembre de rastrear só pelo canal oficial',
        'Revise: os alertas (preço impossível, só PIX, pressa) acionaram?',
      ],
    },
    desafio: {
      cenario: 'Você aplica a rotina de três tempos (antes, durante, depois) em uma compra online completa.',
      requisitos: [
        'Antes: checo reputação, CNPJ, preço e avaliações',
        'Durante: uso plataforma/cartão virtual e confiro o domínio',
        'Depois: guardo provas e rastreio no oficial',
        'Sei acionar meus direitos se algo der errado',
        'Reconheço os alertas que mandam parar',
      ],
      dica: 'Guarde esta rotina como um pequeno checklist no celular nas primeiras vezes. Em poucas compras ela vira automática, e você passa a fazer tudo isso em segundos, sem nem perceber.',
    },
    validacao: [
      'Aplico a checagem "antes"',
      'Compro com proteção "durante"',
      'Guardo provas e rastreio "depois"',
      'Sei acionar meus direitos',
      'Reconheço os alertas de parar',
    ],
  },
};
