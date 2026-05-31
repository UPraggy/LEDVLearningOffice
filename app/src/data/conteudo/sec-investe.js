// ============================================================================
// CONTEÚDO — Golpes Financeiros: Investimento, Pirâmide e Dinheiro Fácil (sec-investe)
// módulo Segurança · vertente "ambos"
// Promessa de renda garantida, pirâmides/Ponzi, cripto/robôs falsos, falso
// investimento com nome de banco/famoso, renda extra falsa, mula financeira,
// como verificar legitimidade, prova social fabricada. Autoral, foco no Brasil.
// NÃO é consultoria de investimento — é defesa contra fraude.
// ============================================================================

export const SEC_INVESTE = {
  'sec-investe-1': {
    trilhaId: 'sec-investe', numero: 1, titulo: 'Renda garantida: por que retorno alto sem risco é golpe',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: '"Rende 10% ao mês, garantido, sem risco." Se você ouvir algo assim, pode ter quase certeza de que é golpe. Entender por que essa promessa é impossível protege seu dinheiro de uma das fraudes mais comuns.',
      conceito: {
        titulo: 'Retorno alto e garantido ao mesmo tempo não existe',
        texto: 'No mundo real dos investimentos vale uma regra de ferro: quanto maior o retorno prometido, maior o risco. Não existe ganho alto e garantido ao mesmo tempo — se existisse, todo mundo (inclusive os bancos) só faria isso. Golpistas invertem essa lógica e oferecem o impossível: rendimentos muito acima do normal, "sem risco" e "garantidos". Eles usam números que parecem bons demais justamente porque são. Esta trilha não te ensina a investir (isso é com você e com fontes sérias) — ela te ensina a reconhecer fraude. E o primeiro sinal, o mais poderoso, é esse: promessa de retorno alto SEM risco. Diante dela, a resposta não é "será?", é "isso é golpe até prova robusta em contrário".',
      },
      estrutura: {
        titulo: 'A regra de ferro',
        partes: [
          { simbolo: '⚖️', desc: 'Mais retorno = mais risco. Sempre, sem exceção.' },
          { simbolo: '🚫', desc: '"Alto e garantido ao mesmo tempo" não existe.' },
          { simbolo: '🎣', desc: 'Golpistas oferecem justamente o impossível.' },
          { simbolo: '🛑', desc: 'Promessa de ganho sem risco = golpe até prova em contrário.' },
        ],
      },
      exemplo: {
        titulo: 'O número bom demais',
        celulas: [
          { ref: 'Promessa', valor: '"10% ao mês, garantido, sem risco nenhum"' },
          { ref: 'Realidade', valor: 'Ganho alto sempre vem com risco real' },
          { ref: 'Pergunta', valor: 'Se fosse verdade, por que não é pra todos?' },
          { ref: 'Conclusão', valor: 'O "bom demais" é a própria isca' },
        ],
        formula: 'Retorno alto + "garantido" + "sem risco" = golpe',
        resultado: 'Você desconfia na hora da promessa impossível.',
        comentario: 'Golpistas sabem que a ganância e a esperança baixam a guarda. Por isso o número é sempre tentador. Quanto mais "perfeita" a oportunidade parece, mais ela merece desconfiança — não menos.',
      },
      vocabulario: [
        { palavra: 'Retorno', def: 'O ganho que um investimento promete ou gera.' },
        { palavra: 'Risco', def: 'A chance de perder dinheiro; anda junto com retorno alto.' },
        { palavra: 'Renda garantida', def: 'Promessa quase sempre falsa quando vem com retorno alto.' },
      ],
      chave: [
        'Quanto maior o retorno prometido, maior o risco — sempre',
        'Ganho alto e garantido ao mesmo tempo não existe',
        'Promessa de retorno sem risco é golpe até prova em contrário',
      ],
      porque: 'A regra "mais retorno, mais risco" é o filtro que pega a maioria dos golpes financeiros logo na promessa. Reconhecer o retorno alto "garantido" como impossível protege você antes mesmo de saber os detalhes da fraude.',
    },
    pratica: {
      instrucao: 'Calibre seu radar pra promessas impossíveis.',
      passos: [
        'Grave a regra: mais retorno prometido = mais risco',
        'Diante de "garantido" e "sem risco", acenda o alerta',
        'Pergunte: se fosse real, por que não seria pra todos?',
        'Trate o "bom demais" como isca, não como sorte',
        'Lembre: esta trilha é defesa contra fraude, não dica de investir',
      ],
    },
    desafio: {
      cenario: 'Você reconhece a promessa de retorno alto sem risco como sinal de golpe.',
      requisitos: [
        'Sei que mais retorno significa mais risco',
        'Sei que "alto e garantido" ao mesmo tempo não existe',
        'Desconfio do que parece bom demais',
        'Não confundo defesa contra fraude com dica de investir',
        'Trato a promessa impossível como golpe',
      ],
      dica: 'Investimentos sérios falam de risco abertamente — é até obrigatório. Quando alguém esconde o risco ou jura que não existe, isso por si só já denuncia a fraude.',
    },
    validacao: [
      'Mais retorno = mais risco',
      '"Alto e garantido" não existe',
      'Desconfio do bom demais',
      'Defesa, não dica de investir',
      'Promessa impossível = golpe',
    ],
  },

  'sec-investe-2': {
    trilhaId: 'sec-investe', numero: 2, titulo: 'Pirâmides e esquemas Ponzi: como reconhecer',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Pirâmides financeiras prometem riqueza e desabam deixando milhares no prejuízo — sempre. Saber como elas funcionam por dentro permite reconhecê-las antes de colocar seu dinheiro (ou o de amigos e família).',
      conceito: {
        titulo: 'O dinheiro não vem de lucro real, vem de quem entra depois',
        texto: 'Numa pirâmide (ou esquema Ponzi), o "rendimento" pago aos participantes não vem de um negócio que gera lucro de verdade — vem do dinheiro de quem entrou depois. Os primeiros recebem (o que serve de "prova" pra atrair mais gente), mas matematicamente o esquema precisa de um número sempre maior de novos entrantes pra se sustentar. Quando o fluxo de novatos para, ele desaba e a maioria perde tudo. Sinais clássicos: ganho que depende de recrutar outras pessoas; foco em "trazer amigos" mais do que em qualquer produto real; promessas de retorno fixo e alto; e dificuldade pra sacar quando você quer sair. Se o ganho depende de trazer mais gente, é pirâmide — não importa o nome bonito que deem.',
      },
      estrutura: {
        titulo: 'Sinais de pirâmide/Ponzi',
        partes: [
          { simbolo: '👥', desc: 'O ganho depende de recrutar mais pessoas.' },
          { simbolo: '📦', desc: 'Sem produto real, ou o produto é só desculpa.' },
          { simbolo: '💸', desc: 'Pagam os primeiros com o dinheiro dos novatos.' },
          { simbolo: '🔒', desc: 'Dificuldade pra sacar quando você quer sair.' },
        ],
      },
      exemplo: {
        titulo: 'O motor escondido',
        celulas: [
          { ref: 'Promessa', valor: 'Renda alta + "traga amigos e ganhe mais"' },
          { ref: 'De onde vem', valor: 'Do dinheiro de quem entra depois, não de lucro' },
          { ref: 'Enquanto cresce', valor: 'Alguns recebem e viram "prova" pra atrair mais' },
          { ref: 'Quando para', valor: 'Desaba e a maioria perde tudo' },
        ],
        formula: 'Ganho que depende de recrutar = pirâmide, sempre',
        resultado: 'Você identifica o esquema pela estrutura, não pelo nome.',
        comentario: 'Pirâmides se disfarçam de "clube", "comunidade", "oportunidade de cripto" ou venda de produtos. O nome muda; o motor é o mesmo: dinheiro dos novos pagando os antigos até acabar.',
      },
      vocabulario: [
        { palavra: 'Pirâmide financeira', def: 'Esquema que paga participantes com o dinheiro de novos entrantes.' },
        { palavra: 'Esquema Ponzi', def: 'Fraude que finge lucro mas usa o dinheiro de quem entra depois.' },
        { palavra: 'Recrutamento', def: 'Trazer novas pessoas; quando é a fonte do ganho, é pirâmide.' },
      ],
      chave: [
        'Na pirâmide, o ganho vem de quem entra depois, não de lucro real',
        'Se o ganho depende de recrutar gente, é pirâmide',
        'Ela sempre desaba quando param de entrar novatos',
      ],
      porque: 'Pirâmides são fraudes matematicamente fadadas a quebrar, levando junto o dinheiro da maioria. Reconhecer o motor — recrutamento em vez de lucro real — permite recusar o esquema antes de entrar e ainda alertar quem você conhece.',
    },
    pratica: {
      instrucao: 'Aprenda a reconhecer pirâmides e esquemas Ponzi.',
      passos: [
        'Pergunte: o ganho depende de trazer mais pessoas?',
        'Procure um produto real — ou só recrutamento disfarçado?',
        'Desconfie de retorno fixo e alto prometido',
        'Teste se é fácil sacar e sair quando quiser',
        'Lembre: o nome bonito não muda a estrutura de pirâmide',
      ],
    },
    desafio: {
      cenario: 'Você reconhece pirâmides e esquemas Ponzi pela estrutura, mesmo disfarçados.',
      requisitos: [
        'Sei que a pirâmide paga com dinheiro de novos entrantes',
        'Identifico quando o ganho depende de recrutar',
        'Desconfio de retorno fixo e alto',
        'Verifico se é fácil sacar e sair',
        'Não me engano com o nome bonito do esquema',
      ],
      dica: 'Muita gente entra por indicação de alguém querido que está de boa-fé — o que aumenta a confiança e a culpa de recusar. Lembre: quem te indicou também é vítima ou logo será. Recusar protege os dois.',
    },
    validacao: [
      'Pirâmide paga com dinheiro novo',
      'Ganho por recrutamento = pirâmide',
      'Desconfio de retorno fixo alto',
      'Verifico saque e saída',
      'Nome bonito não engana',
    ],
  },

  'sec-investe-3': {
    trilhaId: 'sec-investe', numero: 3, titulo: 'Cripto e "robôs que investem": as iscas da moda',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Criptomoedas e "robôs de investimento" são temas da moda — e golpistas adoram a moda, porque ela mistura novidade, promessa de ganho e um assunto que pouca gente domina. Saber separar a tecnologia real do golpe é essencial.',
      conceito: {
        titulo: 'O golpe usa o tema novo como verniz; a estrutura é a velha fraude',
        texto: 'Existe tecnologia real por trás de criptomoedas, mas os golpistas usam o tema só como roupagem. As iscas comuns: "robôs" ou "plataformas" que prometem multiplicar seu dinheiro automaticamente; falsas corretoras que mostram seu saldo "crescendo" na tela mas não deixam sacar; grupos que prometem "sinais" infalíveis; e "investimentos em cripto" com retorno garantido (que, como você já sabe, não existe). O padrão é sempre o mesmo das fraudes antigas — promessa alta, urgência, pressão pra colocar mais — só que vestido de tecnologia nova. Um sinal forte: quando você tenta sacar e aparecem "taxas" pra liberar o dinheiro, ou simplesmente não sai. Tema novo, golpe velho: avalie pela estrutura, não pelo verniz.',
      },
      estrutura: {
        titulo: 'Iscas vestidas de tecnologia',
        partes: [
          { simbolo: '🤖', desc: '"Robô" que multiplica seu dinheiro sozinho.' },
          { simbolo: '📈', desc: 'Plataforma que mostra saldo crescendo mas não deixa sacar.' },
          { simbolo: '🧾', desc: 'Na hora do saque, surgem "taxas" pra liberar.' },
          { simbolo: '🎭', desc: 'Tema novo é só verniz; a fraude é a de sempre.' },
        ],
      },
      exemplo: {
        titulo: 'O saque que nunca sai',
        celulas: [
          { ref: 'Atrai', valor: '"Investe em cripto, o robô multiplica" — saldo sobe na tela' },
          { ref: 'Você tenta sacar', valor: 'Aparece uma "taxa de liberação" pra pagar' },
          { ref: 'Você paga', valor: 'Surge outra taxa... e o dinheiro nunca sai' },
          { ref: 'Verdade', valor: 'O saldo crescendo era só um número na tela' },
        ],
        formula: 'Saldo que sobe + saque travado por "taxas" = golpe',
        resultado: 'Você reconhece a fraude por baixo do tema da moda.',
        comentario: 'O "saldo crescendo" é uma tela fabricada pra te animar a colocar mais. O teste de realidade é o saque: se sacar é difícil, cheio de taxas ou impossível, o dinheiro nunca foi seu de verdade.',
      },
      vocabulario: [
        { palavra: 'Robô de investimento', def: 'Promessa de multiplicar dinheiro sozinho — isca comum de golpe.' },
        { palavra: 'Falsa corretora', def: 'Plataforma que mostra saldo mas não deixa sacar.' },
        { palavra: 'Taxa de liberação', def: 'Cobrança falsa pra "liberar" um saque que não existe.' },
      ],
      chave: [
        'Golpistas usam cripto e robôs como verniz da fraude antiga',
        'Saldo crescendo na tela não é dinheiro real',
        'Saque travado por "taxas" é sinal claro de golpe',
      ],
      porque: 'Os golpes da moda exploram a novidade pra confundir. Enxergar a estrutura por baixo do verniz — promessa impossível, saldo fabricado, saque travado — protege contra fraudes "modernas" que, no fundo, são as de sempre.',
    },
    pratica: {
      instrucao: 'Aprenda a enxergar o golpe sob o tema da moda.',
      passos: [
        'Desconfie de "robôs" que prometem multiplicar dinheiro sozinhos',
        'Lembre: saldo crescendo na tela não prova dinheiro real',
        'Teste o saque — é o teste de realidade',
        'Trate "taxa pra liberar saque" como sinal de golpe',
        'Avalie pela estrutura, não pela novidade do tema',
      ],
    },
    desafio: {
      cenario: 'Você reconhece golpes de cripto e robôs de investimento por baixo do verniz.',
      requisitos: [
        'Desconfio de robôs que multiplicam dinheiro sozinhos',
        'Sei que saldo na tela não é dinheiro real',
        'Uso o saque como teste de realidade',
        'Trato "taxa de liberação" como golpe',
        'Avalio pela estrutura, não pelo tema da moda',
      ],
      dica: 'Querer aprender sobre cripto é legítimo — mas faça isso por fontes sérias e plataformas reconhecidas, nunca por um "robô" que apareceu num anúncio ou por um grupo que promete ganhos garantidos.',
    },
    validacao: [
      'Desconfio de robôs milagrosos',
      'Saldo na tela ≠ dinheiro real',
      'Saque é o teste de realidade',
      '"Taxa de liberação" = golpe',
      'Avalio pela estrutura',
    ],
  },

  'sec-investe-4': {
    trilhaId: 'sec-investe', numero: 4, titulo: 'Falso investimento com nome de banco ou famoso',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Um anúncio com a cara de um banco conhecido, ou um vídeo onde uma celebridade "recomenda" um investimento incrível: golpistas roubam nomes e rostos confiáveis pra dar credibilidade à fraude. Saber disso muda como você olha esses anúncios.',
      conceito: {
        titulo: 'O nome confiável é roubado, não emprestado',
        texto: 'Golpistas usam logos de bancos, nomes de empresas sérias e imagens de pessoas famosas pra fazer a fraude parecer legítima. Hoje conseguem até criar vídeos falsos em que uma celebridade parece "recomendar" o investimento — com voz e rosto imitados por tecnologia. Nada disso é autorização real: o nome e a imagem foram roubados. Bancos sérios não anunciam "investimento milagroso" por mensagem, anúncio duvidoso ou link de rede social, e famosos não vendem renda garantida por DM. O sinal de alerta: quanto mais o anúncio se apoia em "olha quem recomenda" e menos em informação verificável, mais suspeito. Confie na instituição pelos canais oficiais dela — nunca por um anúncio que usa o nome dela pra te levar a um link.',
      },
      estrutura: {
        titulo: 'Nome e rosto roubados',
        partes: [
          { simbolo: '🏛️', desc: 'Logo de banco sério colado numa fraude.' },
          { simbolo: '🎬', desc: 'Vídeo falso de famoso "recomendando" (voz/rosto imitados).' },
          { simbolo: '🔗', desc: 'Sempre levam a um link/contato fora dos canais oficiais.' },
          { simbolo: '✅', desc: 'Confie na instituição só pelos canais oficiais dela.' },
        ],
      },
      exemplo: {
        titulo: 'A "recomendação" do famoso',
        celulas: [
          { ref: 'Você vê', valor: 'Vídeo de uma celebridade indicando um investimento' },
          { ref: 'Parece real', valor: 'Voz e rosto convincentes (mas imitados)' },
          { ref: 'Te leva a', valor: 'Um link/contato fora dos canais oficiais' },
          { ref: 'Verdade', valor: 'Nome e imagem roubados; o famoso não tem relação' },
        ],
        formula: 'Nome famoso/banco + link fora do oficial = fraude',
        resultado: 'Você não confunde nome roubado com recomendação real.',
        comentario: 'A tecnologia de imitar voz e rosto deixou esses vídeos muito convincentes. Por isso a regra não é "parece real?", e sim "veio pelo canal oficial?". Um vídeo num anúncio nunca é canal oficial.',
      },
      vocabulario: [
        { palavra: 'Uso indevido de marca', def: 'Roubar logo/nome de empresa séria pra enganar.' },
        { palavra: 'Vídeo falso (deepfake)', def: 'Voz e rosto imitados por tecnologia pra fingir recomendação.' },
        { palavra: 'Canal oficial', def: 'O site/app verdadeiro da instituição — a única fonte confiável.' },
      ],
      chave: [
        'Golpistas roubam nomes de bancos e rostos de famosos',
        'Vídeos podem imitar voz e rosto — não são recomendação real',
        'Confie na instituição só pelos canais oficiais, nunca por anúncio',
      ],
      porque: 'O roubo de nomes e rostos confiáveis é uma das armas mais eficazes da fraude financeira. Saber que o nome foi roubado — e confiar só nos canais oficiais — neutraliza anúncios e vídeos que tentam tomar emprestada a credibilidade alheia.',
    },
    pratica: {
      instrucao: 'Aprenda a desconfiar de nomes e rostos roubados.',
      passos: [
        'Desconfie de anúncios de investimento com logo de banco',
        'Lembre que vídeos de famosos podem ser imitados',
        'Note que esses anúncios levam a links fora do oficial',
        'Confirme tudo pelos canais oficiais da instituição',
        'Nunca trate um anúncio como recomendação verdadeira',
      ],
    },
    desafio: {
      cenario: 'Você reconhece fraudes que roubam nomes de bancos e imagens de famosos.',
      requisitos: [
        'Sei que golpistas roubam logos e nomes de empresas',
        'Sei que vídeos de famosos podem ser imitados',
        'Percebo que levam a links fora dos canais oficiais',
        'Confirmo pelos canais oficiais da instituição',
        'Não trato anúncio como recomendação real',
      ],
      dica: 'Se um anúncio diz que tal banco ou empresa oferece aquele investimento, vá direto ao app ou site oficial da instituição e procure lá. Se não existe por lá, é fraude usando o nome.',
    },
    validacao: [
      'Golpistas roubam logos/nomes',
      'Vídeo de famoso pode ser imitado',
      'Levam a links fora do oficial',
      'Confirmo pelos canais oficiais',
      'Anúncio ≠ recomendação real',
    ],
  },

  'sec-investe-5': {
    trilhaId: 'sec-investe', numero: 5, titulo: 'Renda extra falsa: o golpe do "dinheiro fácil"',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Ganhe R$ 300 por dia trabalhando de casa, só curtindo vídeos." Ofertas de renda extra fácil estão por toda parte — e a maioria é golpe. Reconhecê-las protege seu dinheiro e seu tempo.',
      conceito: {
        titulo: 'Quando a "renda fácil" pede dinheiro adiantado, é golpe',
        texto: 'Os golpes de renda extra prometem ganhos altos por tarefas simples: curtir vídeos, avaliar produtos, "trabalhar de casa", fazer pequenas missões. O roteiro típico: você faz as primeiras "tarefas" e recebe um valor pequeno (a isca que prova que "funciona"); então pedem que você deposite um valor pra "desbloquear tarefas melhores", "ativar a conta" ou "subir de nível" — e prometem devolver com lucro. A partir daí, o dinheiro que você coloca não volta. O sinal definitivo: trabalho de verdade paga você; golpe faz você pagar primeiro. Se uma "oportunidade de renda" pede que você deposite, recarregue ou pague qualquer coisa pra começar ou pra sacar, é golpe.',
      },
      estrutura: {
        titulo: 'O roteiro da renda falsa',
        partes: [
          { simbolo: '🪙', desc: 'Primeiras tarefas pagam pouco (a isca de prova).' },
          { simbolo: '⬆️', desc: 'Pedem depósito pra "desbloquear" ou "subir de nível".' },
          { simbolo: '🕳️', desc: 'O dinheiro depositado não volta.' },
          { simbolo: '✅', desc: 'Trabalho real paga você; golpe faz você pagar.' },
        ],
      },
      exemplo: {
        titulo: '"Pague pra ganhar mais"',
        celulas: [
          { ref: 'Começo', valor: 'Tarefas simples + um pagamento pequeno de isca' },
          { ref: 'Vira', valor: '"Deposite R$ 100 pra desbloquear tarefas melhores"' },
          { ref: 'Promessa', valor: '"Você recebe de volta com lucro"' },
          { ref: 'Fim', valor: 'O depósito some; o "lucro" nunca chega' },
        ],
        formula: 'Renda fácil que pede depósito pra continuar = golpe',
        resultado: 'Você recusa a oferta no momento em que pedem dinheiro.',
        comentario: 'A isca inicial — receber um valorzinho de verdade — é o que convence. Mas é justamente o gancho pra você confiar e depositar valores maiores. Trabalho legítimo nunca exige que você pague pra trabalhar.',
      },
      vocabulario: [
        { palavra: 'Renda extra falsa', def: 'Golpe que promete ganho fácil e depois pede depósitos.' },
        { palavra: 'Tarefa de isca', def: 'Pagamento pequeno inicial pra provar que "funciona".' },
        { palavra: 'Desbloquear/recarregar', def: 'Pretextos pra você depositar dinheiro que não volta.' },
      ],
      chave: [
        'Renda fácil que pede depósito pra continuar é golpe',
        'O pagamento inicial pequeno é só isca pra você confiar',
        'Trabalho real paga você; golpe faz você pagar primeiro',
      ],
      porque: 'Golpes de renda extra exploram a necessidade e a esperança de uma grana a mais. A regra "trabalho real paga você, não o contrário" desmonta a fraude no ponto exato em que ela pede seu dinheiro.',
    },
    pratica: {
      instrucao: 'Aprenda a reconhecer renda extra falsa.',
      passos: [
        'Desconfie de ganho alto por tarefas simples demais',
        'Lembre que o pagamento inicial pequeno é isca',
        'Acenda o alerta quando pedirem depósito pra "desbloquear"',
        'Aplique a regra: trabalho real paga você',
        'Recuse qualquer "renda" que peça você pagar primeiro',
      ],
    },
    desafio: {
      cenario: 'Você reconhece e recusa golpes de renda extra que pedem depósito.',
      requisitos: [
        'Desconfio de renda alta por tarefas simples',
        'Sei que o pagamento inicial é só isca',
        'Acendo o alerta no pedido de depósito',
        'Aplico a regra "trabalho real paga você"',
        'Recuso renda que peça pagar primeiro',
      ],
      dica: 'Esses golpes costumam chegar por grupos de mensagem e anúncios em redes sociais, às vezes indicados por conhecidos já fisgados. Mesmo vindo de alguém de confiança, a regra do depósito vale igual.',
    },
    validacao: [
      'Desconfio de renda fácil alta',
      'Pagamento inicial é isca',
      'Alerta no pedido de depósito',
      'Trabalho real paga você',
      'Recuso pagar pra trabalhar',
    ],
  },

  'sec-investe-6': {
    trilhaId: 'sec-investe', numero: 6, titulo: 'Mula financeira: quando te usam pra lavar dinheiro',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Existe um golpe em que você não é a vítima do prejuízo direto — é usado como peça pra movimentar dinheiro de crimes, muitas vezes sem perceber. Vira "mula financeira", e isso pode te trazer problemas sérios, inclusive com a lei.',
      conceito: {
        titulo: 'Receber e repassar dinheiro de terceiros pode te tornar mula sem você saber',
        texto: 'Mula financeira é a pessoa usada pra movimentar dinheiro de origem criminosa, dificultando o rastreio. O golpista oferece "ganhar uma comissão" só por receber um valor na sua conta e repassar pra outra, ou por "emprestar a conta", ou ainda como falso emprego que pede você a processar pagamentos. Parece dinheiro fácil, mas você está ajudando a lavar dinheiro de golpes e crimes — e a conta usada (a sua) é a que aparece pras autoridades e pros bancos. As consequências podem incluir conta bloqueada, dívidas e responsabilização legal, mesmo que você "não soubesse". A regra de proteção: nunca receba e repasse dinheiro de terceiros por comissão, nem empreste sua conta, nem aceite "emprego" que peça movimentar dinheiro de desconhecidos.',
      },
      estrutura: {
        titulo: 'Como te recrutam como mula',
        partes: [
          { simbolo: '💵', desc: '"Receba na sua conta e repasse, fique com a comissão."' },
          { simbolo: '🏦', desc: '"Empreste sua conta" ou "ative uma conta pra mim".' },
          { simbolo: '💼', desc: 'Falso emprego pra "processar pagamentos".' },
          { simbolo: '⚖️', desc: 'Sua conta vira a rastreável — risco legal e bloqueio.' },
        ],
      },
      exemplo: {
        titulo: 'A "comissão" que custa caro',
        celulas: [
          { ref: 'Oferta', valor: '"Recebe R$ 5 mil, repassa R$ 4.500 e fica com R$ 500"' },
          { ref: 'Parece', valor: 'Dinheiro fácil por quase nada' },
          { ref: 'É', valor: 'Lavagem de dinheiro de crime pela sua conta' },
          { ref: 'Risco', valor: 'Conta bloqueada, dívida e responsabilização legal' },
        ],
        formula: 'Receber e repassar dinheiro de terceiros por comissão = virar mula',
        resultado: 'Você recusa antes de se tornar peça de um crime.',
        comentario: 'O "não sabia" raramente protege quem movimentou o dinheiro. Por isso a defesa é simples e absoluta: sua conta é sua; não receba e repasse dinheiro de desconhecidos por nenhuma comissão.',
      },
      vocabulario: [
        { palavra: 'Mula financeira', def: 'Pessoa usada pra movimentar dinheiro de origem criminosa.' },
        { palavra: 'Lavagem de dinheiro', def: 'Disfarçar a origem ilícita de um dinheiro.' },
        { palavra: 'Emprestar a conta', def: 'Ceder sua conta a terceiros — porta pra virar mula.' },
      ],
      chave: [
        'Mula financeira é usada pra movimentar dinheiro de crimes',
        'Receber e repassar por comissão (ou emprestar a conta) é a armadilha',
        'O risco é seu: bloqueio, dívida e responsabilização legal',
      ],
      porque: 'O golpe da mula financeira transforma a vítima em peça (e corresponsável) de um crime, com consequências legais e financeiras pesadas. Saber recusar movimentar dinheiro de terceiros protege você de um risco que o "dinheiro fácil" esconde.',
    },
    pratica: {
      instrucao: 'Proteja-se de virar mula financeira.',
      passos: [
        'Nunca receba e repasse dinheiro de terceiros por comissão',
        'Nunca empreste sua conta bancária a ninguém',
        'Desconfie de "emprego" que peça movimentar pagamentos',
        'Lembre que sua conta é a rastreável pelas autoridades',
        'Recuse o "dinheiro fácil" que envolve a conta de outros',
      ],
    },
    desafio: {
      cenario: 'Você reconhece e recusa o recrutamento como mula financeira.',
      requisitos: [
        'Sei o que é uma mula financeira',
        'Não recebo e repasso dinheiro de terceiros por comissão',
        'Não empresto minha conta a ninguém',
        'Desconfio de emprego que peça movimentar pagamentos',
        'Sei que o risco legal recai sobre mim',
      ],
      dica: 'Jovens em busca do primeiro emprego e pessoas precisando de renda são alvos comuns desse golpe. Se uma "vaga" oferece dinheiro só pra usar sua conta, é recrutamento de mula — não emprego.',
    },
    validacao: [
      'Sei o que é mula financeira',
      'Não recebo/repasso por comissão',
      'Não empresto minha conta',
      'Desconfio de "emprego" assim',
      'O risco legal é meu',
    ],
  },

  'sec-investe-7': {
    trilhaId: 'sec-investe', numero: 7, titulo: 'Antes de investir: como verificar se é legítimo',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Nem toda oportunidade é golpe — existem investimentos legítimos. A diferença está em verificar antes de colocar dinheiro. Alguns passos simples de checagem separam o sério do fraudulento.',
      conceito: {
        titulo: 'Investimento sério se sustenta à verificação; golpe foge dela',
        texto: 'Antes de qualquer investimento, vale checar: a empresa/instituição é autorizada e regulada pelos órgãos competentes? Ela existe de verdade, com histórico verificável, ou surgiu há pouco prometendo muito? As informações são claras sobre riscos e como sacar, ou tudo é vago e "garantido"? Você consegue confirmar a oferta pelos canais oficiais, não só por quem te abordou? E há pressa artificial pra você decidir agora? Investimento legítimo aguenta a verificação: dá pra pesquisar, perguntar, pensar e confirmar pelos canais oficiais. Golpe foge disso — pressiona, foge de perguntas sobre risco e saque, e não resiste a uma checagem. A regra prática: se a oportunidade não sobrevive a uma pesquisa calma, ela não merece o seu dinheiro.',
      },
      estrutura: {
        titulo: 'Checklist antes de investir',
        partes: [
          { simbolo: '🏛️', desc: 'É autorizada/regulada pelos órgãos competentes?' },
          { simbolo: '🕰️', desc: 'Tem histórico verificável ou surgiu agora prometendo muito?' },
          { simbolo: '📄', desc: 'Risco e saque são claros — ou tudo é vago e "garantido"?' },
          { simbolo: '⏳', desc: 'Há pressa artificial pra decidir agora? (sinal de golpe)' },
        ],
      },
      exemplo: {
        titulo: 'A oportunidade que não resiste à pesquisa',
        celulas: [
          { ref: 'Sério', valor: 'Dá pra pesquisar, confirmar no oficial, pensar com calma' },
          { ref: 'Golpe', valor: 'Pressiona, foge de perguntas, exige decisão imediata' },
          { ref: 'Você faz', valor: 'Pesquisa o nome, checa regulação, confirma no oficial' },
          { ref: 'Regra', valor: 'Não sobreviveu à checagem? Não merece seu dinheiro' },
        ],
        formula: 'Verificar antes + confirmar no oficial + tempo pra pensar = filtro',
        resultado: 'Você só avança no que resiste à verificação.',
        comentario: 'A pressa é a inimiga da verificação — e por isso a amiga do golpista. Toda oferta legítima continua disponível depois de você pesquisar; só o golpe precisa que você decida antes de pensar.',
      },
      vocabulario: [
        { palavra: 'Regulação', def: 'Autorização e fiscalização por órgãos competentes.' },
        { palavra: 'Histórico verificável', def: 'Existência e reputação que dá pra checar.' },
        { palavra: 'Pressa artificial', def: 'Urgência inventada pra você não verificar.' },
      ],
      chave: [
        'Investimento sério resiste à verificação; golpe foge dela',
        'Cheque regulação, histórico, clareza de risco/saque e pressa',
        'Se não sobrevive a uma pesquisa calma, não merece seu dinheiro',
      ],
      porque: 'Verificar antes de investir é o que separa oportunidade de fraude. Como o golpe não resiste à checagem e à confirmação pelos canais oficiais, o hábito de pesquisar com calma é o filtro mais confiável que você tem.',
    },
    pratica: {
      instrucao: 'Pratique a verificação antes de investir.',
      passos: [
        'Cheque se a empresa é autorizada/regulada pelos órgãos competentes',
        'Pesquise o histórico e a reputação da oferta',
        'Confirme se risco e forma de saque estão claros',
        'Confirme a oferta pelos canais oficiais, não só por quem abordou',
        'Desconfie de pressa: oportunidade séria aguarda sua pesquisa',
      ],
    },
    desafio: {
      cenario: 'Você verifica a legitimidade de uma oportunidade antes de colocar dinheiro.',
      requisitos: [
        'Checo se é autorizada/regulada',
        'Pesquiso histórico e reputação',
        'Confirmo clareza sobre risco e saque',
        'Confirmo pelos canais oficiais',
        'Desconfio de pressa artificial',
      ],
      dica: 'No Brasil, dá pra checar se uma instituição é autorizada a oferecer investimentos nos órgãos reguladores oficiais. Não saber checar não é problema — pedir ajuda a alguém de confiança antes de investir também é verificação.',
    },
    validacao: [
      'Checo regulação',
      'Pesquiso histórico',
      'Risco e saque claros',
      'Confirmo no oficial',
      'Desconfio de pressa',
    ],
  },

  'sec-investe-8': {
    trilhaId: 'sec-investe', numero: 8, titulo: 'Pressão, urgência e prova social fabricada',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Últimas vagas!", prints de gente "lucrando", um grupo cheio de pessoas comemorando ganhos: golpes financeiros não usam só números falsos — usam táticas psicológicas pra apressar você e fingir que "todo mundo está ganhando". Reconhecê-las desarma a manipulação.',
      conceito: {
        titulo: 'As táticas mentais que empurram você a decidir sem pensar',
        texto: 'Além da promessa de ganho, golpes financeiros se apoiam em gatilhos psicológicos. Urgência: "vagas acabando", "só hoje", contagem regressiva — pra você decidir antes de verificar. Prova social fabricada: prints de "lucros", grupos com gente comemorando (muitas vezes cúmplices ou inventados), depoimentos falsos — pra você pensar "se tanta gente ganha, deve ser real". Pressão e isolamento: insistência, "não perca essa chance", e desencorajar você de "pedir opinião a quem não entende". Reciprocidade: dar uma "dica grátis" ou um ganho inicial pra criar obrigação. Reconhecer essas táticas é perceber que estão mexendo com sua emoção, não com a realidade do investimento. Quando sentir pressa e euforia coletiva, é hora de desacelerar — não de correr.',
      },
      estrutura: {
        titulo: 'Táticas de manipulação',
        partes: [
          { simbolo: '⏰', desc: 'Urgência: "últimas vagas", "só hoje", contagem regressiva.' },
          { simbolo: '👥', desc: 'Prova social fabricada: prints e grupos comemorando.' },
          { simbolo: '🤐', desc: 'Isolamento: "não peça opinião a quem não entende".' },
          { simbolo: '🎁', desc: 'Reciprocidade: ganho/dica inicial pra criar obrigação.' },
        ],
      },
      exemplo: {
        titulo: 'O grupo eufórico',
        celulas: [
          { ref: 'Você vê', valor: 'Grupo cheio de prints de "lucro" e gente comemorando' },
          { ref: 'Sente', valor: '"Todo mundo está ganhando, vou ficar de fora"' },
          { ref: 'Verdade', valor: 'Prints e euforia podem ser fabricados ou de cúmplices' },
          { ref: 'Reação certa', valor: 'Desacelerar: pressa e euforia são alertas' },
        ],
        formula: 'Urgência + euforia coletiva + isolamento = manipulação, não oportunidade',
        resultado: 'Você desacelera quando deveria correr — e escapa.',
        comentario: 'A sensação de "estou perdendo a chance" é construída de propósito. Nenhuma oportunidade real exige que você ignore a verificação e a opinião de quem confia. A pressa é o disfarce da fraude.',
      },
      vocabulario: [
        { palavra: 'Prova social', def: 'Usar "todo mundo faz" pra te convencer; aqui, fabricada.' },
        { palavra: 'Urgência fabricada', def: 'Prazo inventado pra você decidir sem verificar.' },
        { palavra: 'Reciprocidade', def: 'Dar algo pra criar sensação de obrigação em retribuir.' },
      ],
      chave: [
        'Golpes usam urgência, prova social fabricada, isolamento e reciprocidade',
        'Prints e grupos eufóricos podem ser inventados ou de cúmplices',
        'Diante de pressa e euforia coletiva, desacelere em vez de correr',
      ],
      porque: 'As táticas psicológicas são o que faz pessoas inteligentes caírem em golpes óbvios. Reconhecê-las desarma a manipulação: você percebe que estão mexendo com sua emoção e volta a decidir pela verificação, não pela pressa.',
    },
    pratica: {
      instrucao: 'Aprenda a reconhecer as táticas de manipulação.',
      passos: [
        'Identifique urgência fabricada ("últimas vagas", "só hoje")',
        'Desconfie de prints de lucro e grupos eufóricos',
        'Note a tentativa de isolar você de opiniões de confiança',
        'Repare em "dicas grátis" que criam sensação de obrigação',
        'Diante de pressa e euforia, desacelere e verifique',
      ],
    },
    desafio: {
      cenario: 'Você reconhece as táticas psicológicas dos golpes financeiros e desacelera.',
      requisitos: [
        'Identifico urgência fabricada',
        'Desconfio de prova social (prints, grupos)',
        'Percebo a tentativa de isolamento',
        'Reconheço a tática de reciprocidade',
        'Desacelero diante de pressa e euforia',
      ],
      dica: 'Una com a missão de verificação: a melhor resposta à pressa é "vou pesquisar com calma e confirmar". Se a oportunidade some por causa disso, ela nunca foi real.',
    },
    validacao: [
      'Identifico urgência fabricada',
      'Desconfio de prova social',
      'Percebo o isolamento',
      'Reconheço a reciprocidade',
      'Desacelero na pressa',
    ],
  },

  'sec-investe-9': {
    trilhaId: 'sec-investe', numero: 9, titulo: 'Projeto: seu filtro anti-golpe financeiro',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Hora de transformar tudo num filtro mental que você aplica a qualquer oportunidade financeira que aparecer. Um conjunto de perguntas que, juntas, deixam passar o legítimo e barram a fraude.',
      conceito: {
        titulo: 'Um filtro de perguntas separa oportunidade de golpe',
        texto: 'Seu filtro anti-golpe financeiro reúne os sinais da trilha em perguntas rápidas. Sobre a promessa: o retorno é alto e "garantido/sem risco"? (impossível). Sobre a estrutura: o ganho depende de recrutar gente? (pirâmide). É difícil sacar ou pedem "taxas" pra liberar? (golpe). Pedem que eu deposite pra "começar/desbloquear" ou que eu receba e repasse dinheiro de terceiros? (renda falsa/mula). Sobre a fonte: confirmei pelos canais oficiais e a empresa é regulada? Sobre a pressão: estão me apressando com urgência e euforia coletiva? Se qualquer resposta acende o alerta, pare e verifique com calma — e, se possível, peça uma segunda opinião a alguém de confiança. Com esse filtro, você protege seu dinheiro sem precisar virar especialista.',
      },
      estrutura: {
        titulo: 'O filtro em perguntas',
        partes: [
          { simbolo: '🎯', desc: 'Promessa: alto e "sem risco"? → impossível.' },
          { simbolo: '🔺', desc: 'Estrutura: ganho por recrutar? saque travado? → fraude.' },
          { simbolo: '💳', desc: 'Pedem depósito pra começar, ou pra repassar? → golpe/mula.' },
          { simbolo: '🔍', desc: 'Fonte e pressão: confirmei no oficial? estão me apressando?' },
        ],
      },
      exemplo: {
        titulo: 'Passando a oferta pelo filtro',
        celulas: [
          { ref: 'Promessa', valor: 'Retorno realista e com risco claro? ✓ / "garantido"? ✗' },
          { ref: 'Estrutura', valor: 'Sem recrutamento e fácil de sacar? ✓' },
          { ref: 'Fonte', valor: 'Regulada e confirmada no oficial? ✓' },
          { ref: 'Pressão', valor: 'Sem urgência nem euforia forçada? ✓' },
        ],
        formula: 'Promessa + estrutura + fonte + pressão = filtro completo',
        resultado: 'Você deixa passar o legítimo e barra a fraude.',
        comentario: 'Não precisa decorar tipos de golpe: basta passar qualquer oferta por essas quatro frentes. Um único alerta já é motivo pra parar — golpes reais raramente acendem só um.',
      },
      vocabulario: [
        { palavra: 'Filtro anti-golpe', def: 'Conjunto de perguntas pra avaliar qualquer oferta financeira.' },
        { palavra: 'Segunda opinião', def: 'Consultar alguém de confiança antes de decidir.' },
        { palavra: 'Sinal de alerta', def: 'Resposta no filtro que manda parar e verificar.' },
      ],
      chave: [
        'O filtro avalia promessa, estrutura, fonte e pressão',
        'Qualquer alerta = parar e verificar com calma',
        'Com o filtro, você se protege sem virar especialista',
      ],
      porque: 'Este projeto reúne toda a trilha num filtro prático que você aplica a qualquer oportunidade financeira. Avaliando promessa, estrutura, fonte e pressão, você barra fraudes e preserva seu dinheiro — com perguntas simples, sem precisar ser especialista.',
    },
    pratica: {
      instrucao: 'Monte e use seu filtro anti-golpe financeiro.',
      passos: [
        'Promessa: o retorno é alto e "garantido/sem risco"?',
        'Estrutura: o ganho depende de recrutar? é difícil sacar?',
        'Dinheiro: pedem depósito pra começar ou pra repassar?',
        'Fonte: confirmei no oficial e a empresa é regulada?',
        'Pressão: estão me apressando com urgência e euforia?',
        'Qualquer alerta: pare, verifique e peça segunda opinião',
      ],
    },
    desafio: {
      cenario: 'Você aplica um filtro de perguntas a qualquer oportunidade financeira antes de decidir.',
      requisitos: [
        'Avalio a promessa (alto e "sem risco" = impossível)',
        'Avalio a estrutura (recrutar, sacar)',
        'Verifico pedidos de depósito ou repasse',
        'Confirmo a fonte pelos canais oficiais',
        'Reconheço pressão e peço segunda opinião',
      ],
      dica: 'Você fechou a trilha de golpes financeiros. Junte com as outras de segurança — PIX, WhatsApp, senhas, privacidade, redes e proteção da família — pra blindar seu dinheiro e o de quem você ama.',
    },
    validacao: [
      'Avalio a promessa',
      'Avalio a estrutura',
      'Verifico depósito/repasse',
      'Confirmo a fonte',
      'Reconheço a pressão',
    ],
  },
};
