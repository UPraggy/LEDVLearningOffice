// ============================================================================
// CONTEÚDO — Acessibilidade: o celular do seu jeito (mob-acess)
// Ajustar o celular pra enxergar, ouvir e tocar com conforto: tamanho da
// letra e do conteúdo, brilho, contraste, zoom/lupa, leitor de tela, som
// e legendas, toque assistido, e um projeto de configurar o aparelho sob
// medida pra você. Foco em conforto, autonomia e dignidade.
// ============================================================================

export const MOB_ACESS = {
  'mob-acess-1': {
    trilhaId: 'mob-acess', numero: 1, titulo: 'O celular se adapta a você',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Letra pequena demais, brilho que cansa, botões difíceis de acertar? O problema não é você — é o ajuste de fábrica. O celular pode ser moldado pra enxergar, ouvir e tocar com conforto. Essas opções têm um nome: acessibilidade.',
      conceito: {
        titulo: 'Acessibilidade ajusta o celular ao seu conforto',
        texto: 'ACESSIBILIDADE é o conjunto de ajustes que adaptam o celular às suas necessidades — pra enxergar melhor, ouvir melhor e tocar com mais facilidade. Não é "coisa de quem tem deficiência": é pra todo mundo que quer um celular mais confortável. Você pode aumentar a LETRA, deixar o BRILHO agradável, ativar uma LUPA, fazer o celular LER a tela em voz alta, mostrar LEGENDAS, e muito mais. Tudo isso fica nas CONFIGURAÇÕES, numa seção chamada "Acessibilidade". A ideia é simples e poderosa: o celular deve se adaptar a você, e não o contrário. Ninguém precisa sofrer com ajustes que não servem.',
      },
      estrutura: {
        titulo: 'O que a acessibilidade oferece',
        partes: [
          { simbolo: '👁️', desc: 'Enxergar melhor: letra maior, brilho, contraste, lupa.' },
          { simbolo: '👂', desc: 'Ouvir melhor: volume, legendas, som ajustado.' },
          { simbolo: '👆', desc: 'Tocar melhor: toque assistido, tempo de resposta.' },
          { simbolo: '⚙️', desc: 'Tudo nas Configurações, seção "Acessibilidade".' },
        ],
      },
      exemplo: {
        titulo: 'O ajuste resolve o desconforto',
        celulas: [
          { ref: 'Letra pequena demais', valor: 'Aumento o tamanho da fonte' },
          { ref: 'Brilho cansa os olhos', valor: 'Ajusto o brilho e o contraste' },
          { ref: 'Não escuto bem o vídeo', valor: 'Ativo legendas e ajusto o som' },
          { ref: 'Erro o toque nos botões', valor: 'Uso ajustes de toque' },
        ],
        formula: 'Configurações + Acessibilidade = celular adaptado a você',
        resultado: 'Você entende que pode moldar o celular pro seu conforto.',
        comentario: 'Muita gente passa anos sofrendo com letra miúda ou som baixo achando que "é assim mesmo". Não é. Cada desconforto tem um ajuste. Nesta trilha você vai conhecer os principais, um por um, e configurar o celular pra ele finalmente servir a você.',
      },
      vocabulario: [
        { palavra: 'Acessibilidade', def: 'Ajustes que adaptam o celular ao seu conforto e necessidade.' },
        { palavra: 'Configurações', def: 'O painel onde se mexe em tudo do celular, inclusive acessibilidade.' },
        { palavra: 'Adaptar', def: 'Mudar os ajustes pra que o celular sirva a você.' },
      ],
      chave: [
        'Acessibilidade adapta o celular pra ver, ouvir e tocar melhor',
        'É pra todo mundo, não só pra quem tem deficiência',
        'Os ajustes ficam em Configurações > Acessibilidade',
      ],
      porque: 'Saber que o celular se adapta a você muda tudo: em vez de sofrer com ajustes de fábrica, você molda o aparelho pro seu conforto. Acessibilidade é dignidade e autonomia — o celular servindo à pessoa, não o contrário.',
    },
    pratica: {
      instrucao: 'Vamos encontrar a seção de acessibilidade.',
      passos: [
        'Abra as Configurações do celular (ícone de engrenagem)',
        'Procure por uma seção chamada "Acessibilidade"',
        'Toque nela e observe as várias categorias (visão, audição, toque)',
        'Navegue pelas opções sem mudar nada ainda, só pra conhecer',
        'Perceba a variedade de ajustes disponíveis pro seu conforto',
      ],
    },
    desafio: {
      cenario: 'Descubra a acessibilidade: abra as Configurações, encontre a seção "Acessibilidade", e explore as categorias de visão, audição e toque — entendendo que o celular pode ser adaptado ao seu conforto, e que isso é pra todo mundo.',
      requisitos: [
        'Abri as Configurações do celular',
        'Encontrei a seção "Acessibilidade"',
        'Vi as categorias de ajuste disponíveis',
        'Entendi que acessibilidade é pra todos',
        'Compreendi que o celular se adapta a mim',
      ],
      dica: 'Se não achar "Acessibilidade" de cara nas Configurações, use a busca: há um ícone de lupa no topo das Configurações. Digite "acessibilidade" e o celular leva você direto pra lá. Essa busca é ótima pra achar qualquer ajuste sem se perder nos menus.',
    },
    validacao: [
      'Sei o que é acessibilidade',
      'Encontro a seção nas Configurações',
      'Reconheço as categorias de ajuste',
      'Entendo que é pra todo mundo',
      'Sei que o celular se adapta a mim',
    ],
  },

  'mob-acess-2': {
    trilhaId: 'mob-acess', numero: 2, titulo: 'Letra e conteúdo maiores',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'A queixa número um: "a letra é pequena demais". A boa notícia: resolver isso leva dez segundos. Você pode aumentar o tamanho do texto — e até de tudo na tela — pra ler com conforto, sem apertar os olhos nem buscar os óculos.',
      conceito: {
        titulo: 'Dá pra aumentar a letra e o conteúdo da tela',
        texto: 'O celular permite ampliar o que você vê de dois jeitos. O TAMANHO DA FONTE aumenta só as letras (textos de mensagens, menus, botões) — o jeito mais comum de resolver a leitura. Já o TAMANHO DA TELA (ou "zoom da tela") aumenta TUDO proporcionalmente: letras, ícones e botões ficam maiores, deixando o celular inteiro mais fácil de ver e tocar. Ambos ficam em Configurações, geralmente em "Tela" ou "Acessibilidade", com uma barrinha que você desliza pra ajustar — e uma prévia mostra o resultado na hora. Você escolhe o tamanho que for confortável pros seus olhos, e pode mudar sempre que quiser.',
      },
      estrutura: {
        titulo: 'Ampliando o que você vê',
        partes: [
          { simbolo: '🔤', desc: 'Tamanho da fonte: aumenta só as letras.' },
          { simbolo: '🔍', desc: 'Tamanho da tela: aumenta tudo (letras, ícones, botões).' },
          { simbolo: '↔️', desc: 'Uma barrinha desliza pra ajustar o tamanho.' },
          { simbolo: '👀', desc: 'A prévia mostra o resultado antes de confirmar.' },
        ],
      },
      exemplo: {
        titulo: 'Lendo com conforto',
        celulas: [
          { ref: 'Letra das mensagens pequena', valor: 'Aumento o tamanho da fonte' },
          { ref: 'Tudo na tela está miúdo', valor: 'Aumento o tamanho da tela' },
          { ref: 'Quero achar o ponto certo', valor: 'Deslizo a barrinha e vejo a prévia' },
          { ref: 'Mudei de ideia', valor: 'Ajusto de novo quando quiser' },
        ],
        formula: 'Barrinha de tamanho + prévia = leitura confortável pros seus olhos',
        resultado: 'Você lê sem apertar os olhos nem buscar os óculos.',
        comentario: 'Não tenha vergonha de aumentar bastante a letra se precisar — ela existe pra isso. Um texto grande e confortável é muito melhor que forçar a vista. Se aumentar demais e algo ficar estranho (texto cortado), é só reduzir um pouco até achar o equilíbrio entre tamanho e tela.',
      },
      vocabulario: [
        { palavra: 'Tamanho da fonte', def: 'O ajuste que aumenta ou diminui só as letras.' },
        { palavra: 'Tamanho da tela', def: 'O ajuste que aumenta tudo: letras, ícones e botões.' },
        { palavra: 'Prévia', def: 'A amostra que mostra como vai ficar antes de confirmar.' },
      ],
      chave: [
        'O tamanho da fonte aumenta só as letras',
        'O tamanho da tela aumenta tudo proporcionalmente',
        'Uma barrinha com prévia deixa você achar o conforto ideal',
      ],
      porque: 'Ampliar a letra e o conteúdo resolve o desconforto mais comum no celular: a leitura. Com poucos toques, o texto fica confortável pros seus olhos — fim de apertar a vista, e mais autonomia pra usar o aparelho sem depender dos óculos a cada mensagem.',
    },
    pratica: {
      instrucao: 'Vamos aumentar a letra do seu celular.',
      passos: [
        'Vá em Configurações e procure "Tela" ou "Tamanho da fonte" (use a busca se precisar)',
        'Encontre a barrinha de tamanho da fonte',
        'Deslize-a aumentando e veja a prévia mudar',
        'Pare no tamanho mais confortável pros seus olhos e confirme',
        'Abra uma conversa ou app e veja como ficou mais fácil de ler',
      ],
    },
    desafio: {
      cenario: ' Amplie a leitura: encontre o ajuste de tamanho da fonte (e, se quiser, do tamanho da tela), deslize a barrinha observando a prévia, e pare no tamanho mais confortável pros seus olhos — eliminando o desconforto de ler letras miúdas.',
      requisitos: [
        'Encontrei o ajuste de tamanho da fonte',
        'Desliza a barrinha vendo a prévia',
        'Escolhi um tamanho confortável',
        'Confirmei a mudança',
        'Vi a leitura ficar mais fácil nos apps',
      ],
      dica: 'Se aumentar a fonte e os botões ainda parecerem pequenos pra tocar, aumente também o "tamanho da tela" (ou "zoom de exibição"): ele cresce os ícones e botões junto, deixando o celular inteiro mais fácil de operar, não só de ler.',
    },
    validacao: [
      'Encontro o ajuste de tamanho da fonte',
      'Sei deslizar a barrinha e ver a prévia',
      'Escolho um tamanho confortável',
      'Conheço também o tamanho da tela',
      'Leio sem apertar os olhos',
    ],
  },

  'mob-acess-3': {
    trilhaId: 'mob-acess', numero: 3, titulo: 'Brilho, contraste e modo escuro',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'A tela ofusca no sol e some na sombra? Cansa os olhos à noite? O brilho e as cores da tela são ajustáveis pra cada situação. Dominar isso deixa a tela sempre confortável — de dia, de noite, dentro ou fora de casa.',
      conceito: {
        titulo: 'Brilho e cores se ajustam pro conforto dos olhos',
        texto: 'A tela tem ajustes que mudam como você a enxerga. O BRILHO controla a intensidade da luz: mais forte pra ver no sol, mais suave em ambientes escuros. Há o BRILHO AUTOMÁTICO, que ajusta sozinho conforme a luz ao redor — cômodo pra maioria. O MODO ESCURO troca o fundo branco por preto, descansando os olhos à noite e poupando bateria. E ajustes de CONTRASTE e cores ajudam quem tem dificuldade pra distinguir tons. O brilho rápido fica na "central de controle" (deslizando da borda da tela), com uma barrinha de sol; os demais ficam nas Configurações de tela e acessibilidade.',
      },
      estrutura: {
        titulo: 'Ajustando a tela',
        partes: [
          { simbolo: '☀️', desc: 'Brilho: forte no sol, suave no escuro.' },
          { simbolo: '🔆', desc: 'Brilho automático: ajusta sozinho com a luz ao redor.' },
          { simbolo: '🌙', desc: 'Modo escuro: fundo preto, descansa os olhos à noite.' },
          { simbolo: '🎨', desc: 'Contraste e cores: ajudam a distinguir os tons.' },
        ],
      },
      exemplo: {
        titulo: 'A tela certa pra cada momento',
        celulas: [
          { ref: 'Sol forte, não vejo a tela', valor: 'Aumento o brilho ao máximo' },
          { ref: 'Quarto escuro, tela ofusca', valor: 'Reduzo o brilho ou uso modo escuro' },
          { ref: 'Não quero ficar ajustando', valor: 'Ativo o brilho automático' },
          { ref: 'Cores difíceis de distinguir', valor: 'Aumento o contraste' },
        ],
        formula: 'Brilho + automático + modo escuro + contraste = tela confortável sempre',
        resultado: 'Você enxerga bem em qualquer ambiente, sem cansar a vista.',
        comentario: 'O modo escuro é uma descoberta agradável pra muita gente: à noite, com a luz apagada, uma tela de fundo branco cansa e ofusca; com fundo preto, o conforto é bem maior. Vale experimentar e ver se você gosta — dá pra deixar ligado o tempo todo ou só à noite.',
      },
      vocabulario: [
        { palavra: 'Brilho', def: 'A intensidade da luz da tela, ajustável pra cada ambiente.' },
        { palavra: 'Brilho automático', def: 'O celular ajusta o brilho sozinho conforme a luz ao redor.' },
        { palavra: 'Modo escuro', def: 'Tela com fundo preto, que descansa os olhos e poupa bateria.' },
      ],
      chave: [
        'O brilho se ajusta: forte no sol, suave no escuro',
        'O brilho automático cuida disso sozinho',
        'O modo escuro descansa os olhos à noite',
      ],
      porque: 'Ajustar brilho e cores deixa a tela confortável em qualquer situação — sob o sol, no escuro, de dia ou de noite. Menos esforço pros olhos significa menos cansaço e dor de cabeça, e mais prazer ao usar o celular por mais tempo.',
    },
    pratica: {
      instrucao: 'Vamos ajustar o brilho e experimentar o modo escuro.',
      passos: [
        'Deslize da borda superior da tela pra abrir a central de controle',
        'Encontre a barrinha de brilho (ícone de sol) e ajuste-a',
        'Procure o botão de brilho automático e ative-o se quiser',
        'Vá em Configurações de tela e encontre a opção "Modo escuro"',
        'Ative o modo escuro e veja a diferença; deixe ligado se gostar',
      ],
    },
    desafio: {
      cenario: 'Domine a tela: ajuste o brilho pela central de controle, ative o brilho automático, e experimente o modo escuro — deixando a tela confortável pros seus olhos em qualquer ambiente, de dia ou de noite.',
      requisitos: [
        'Ajustei o brilho pela central de controle',
        'Ativei (ou conheci) o brilho automático',
        'Encontrei e experimentei o modo escuro',
        'Vi a diferença de conforto',
        'Sei ajustar a tela pra cada ambiente',
      ],
      dica: 'Há também recursos pra o conforto noturno e a saúde dos olhos: o "filtro de luz azul" (ou "modo noturno"/"conforto visual") deixa a tela mais amarelada à noite, o que ajuda a relaxar e dormir melhor. Procure por ele nas Configurações de tela e experimente nas horas da noite.',
    },
    validacao: [
      'Ajusto o brilho pela central de controle',
      'Conheço o brilho automático',
      'Sei ativar o modo escuro',
      'Percebo o ganho de conforto',
      'Adapto a tela a cada ambiente',
    ],
  },

  'mob-acess-4': {
    trilhaId: 'mob-acess', numero: 4, titulo: 'Lupa e zoom: ampliar na hora',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Uma letra miúda num rótulo, um número de telefone apertado, um detalhe numa foto. Às vezes você precisa ampliar só um pedaço, na hora. O celular tem ferramentas de lupa e zoom que aumentam qualquer coisa com um gesto — na tela ou até no mundo real.',
      conceito: {
        titulo: 'Lupa e zoom ampliam detalhes quando você precisa',
        texto: 'Além de aumentar a tela toda, o celular oferece ampliações pontuais. O ZOOM DE TELA (ampliação) permite, com um gesto (tocar três vezes ou usar dois dedos, conforme o ajuste), ampliar qualquer parte da tela e mover a "lente" pra ler o que estava pequeno. Já a LUPA usa a câmera do celular como uma lente de aumento do MUNDO REAL: você aponta pra um rótulo, uma bula ou um papel com letra miúda, e vê ampliado na tela, podendo até congelar a imagem e acender a luz. Esses recursos ficam na seção de Acessibilidade e são ativados quando você precisa, sem mudar o tamanho geral do celular.',
      },
      estrutura: {
        titulo: 'Ampliando na hora',
        partes: [
          { simbolo: '🔎', desc: 'Zoom de tela: amplia parte da tela com um gesto.' },
          { simbolo: '🪟', desc: 'Move a "lente" pra ler o que estava pequeno.' },
          { simbolo: '📷', desc: 'Lupa: usa a câmera pra ampliar o mundo real.' },
          { simbolo: '💡', desc: 'Congela a imagem e acende a luz pra ver melhor.' },
        ],
      },
      exemplo: {
        titulo: 'Ampliando o que precisa',
        celulas: [
          { ref: 'Letra miúda dentro de um app', valor: 'Uso o zoom de tela com o gesto' },
          { ref: 'Rótulo de remédio apertado', valor: 'Uso a lupa apontando a câmera' },
          { ref: 'Ambiente escuro pra ler', valor: 'A lupa acende a luz' },
          { ref: 'Quero examinar com calma', valor: 'Congelo a imagem na lupa' },
        ],
        formula: 'Zoom de tela (digital) + lupa (mundo real) = ampliar qualquer coisa na hora',
        resultado: 'Você amplia detalhes pontuais sempre que precisar, com um gesto.',
        comentario: 'A lupa é uma das ferramentas mais úteis e menos conhecidas do celular: ela substitui aquela lente de aumento de mão, com a vantagem de ampliar mais, acender luz e congelar a imagem. Ótima pra ler bulas, rótulos, etiquetas de preço e qualquer letrinha do dia a dia.',
      },
      vocabulario: [
        { palavra: 'Zoom de tela (ampliação)', def: 'Recurso que amplia parte da tela com um gesto.' },
        { palavra: 'Lupa', def: 'Ferramenta que usa a câmera pra ampliar objetos do mundo real.' },
        { palavra: 'Congelar', def: 'Travar a imagem da lupa pra examinar com calma.' },
      ],
      chave: [
        'O zoom de tela amplia parte da tela com um gesto',
        'A lupa usa a câmera pra ampliar coisas do mundo real',
        'Ambos servem pra ampliar detalhes pontuais na hora',
      ],
      porque: 'A lupa e o zoom dão poder de ampliar qualquer coisa no momento exato — uma letra miúda na tela ou um rótulo na vida real. São recursos que devolvem autonomia pra quem tem dificuldade de visão, sem depender de óculos extras ou da ajuda de outra pessoa.',
    },
    pratica: {
      instrucao: 'Vamos ativar e usar a lupa do celular.',
      passos: [
        'Vá em Configurações > Acessibilidade e procure por "Lupa" ou "Ampliação"',
        'Ative a Lupa e veja como acioná-la (geralmente um botão ou atalho)',
        'Aponte a câmera pra um papel com letra pequena e veja ampliado',
        'Experimente acender a luz e congelar a imagem na lupa',
        'Procure também o "Zoom de tela" (ampliação) e teste o gesto de ampliar',
      ],
    },
    desafio: {
      cenario: 'Use as ampliações: ative a Lupa e aponte a câmera pra ler um rótulo de letra miúda (acendendo luz e congelando se precisar), e experimente o zoom de tela pra ampliar parte da tela com um gesto — ganhando o poder de ampliar qualquer coisa na hora.',
      requisitos: [
        'Ativei a Lupa na acessibilidade',
        'Usei a câmera pra ampliar letra miúda real',
        'Experimentei luz e congelar na lupa',
        'Conheci o zoom de tela e seu gesto',
        'Sei ampliar detalhes pontuais quando preciso',
      ],
      dica: 'Vale criar um atalho rápido pra lupa: nas Configurações de acessibilidade, você pode definir que apertar o botão lateral três vezes (ou tocar num botão flutuante) abre a lupa na hora. Assim, no supermercado ou na farmácia, ela está a um clique de distância.',
    },
    validacao: [
      'Ativo e uso a lupa do celular',
      'Amplio rótulos e letras do mundo real',
      'Uso luz e congelamento na lupa',
      'Conheço o zoom de tela e seu gesto',
      'Amplio o que preciso na hora',
    ],
  },

  'mob-acess-5': {
    trilhaId: 'mob-acess', numero: 5, titulo: 'O celular lê a tela em voz alta',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'E se o celular pudesse ler pra você? Mensagens, notícias, nomes de botões — tudo em voz alta. Pra quem enxerga pouco, ou só quer descansar os olhos, o leitor de tela e a leitura em voz são recursos que transformam o jeito de usar o aparelho.',
      conceito: {
        titulo: 'Recursos de voz leem o conteúdo da tela pra você',
        texto: 'O celular pode FALAR o que está na tela. Há duas formas. A LEITURA EM VOZ ALTA (ou "selecionar para ouvir") lê um texto que você escolhe — uma mensagem, uma notícia — quando você pede; é simples e ótima pra descansar a vista. Já o LEITOR DE TELA (TalkBack no Android, VoiceOver no iPhone) é mais completo: ele descreve TUDO conforme você toca — diz o nome de cada botão, lê cada texto — permitindo usar o celular inteiro guiado pela voz, essencial pra quem enxerga muito pouco ou nada. O leitor de tela muda a forma de tocar (toca-se uma vez pra ouvir, duas pra ativar), então requer um tempo de adaptação.',
      },
      estrutura: {
        titulo: 'Ouvindo a tela',
        partes: [
          { simbolo: '🔊', desc: 'Leitura em voz alta: lê um texto que você escolhe.' },
          { simbolo: '🗣️', desc: 'Leitor de tela: descreve tudo conforme você toca.' },
          { simbolo: '👆', desc: 'Com leitor: toque uma vez pra ouvir, duas pra ativar.' },
          { simbolo: '👁️‍🗨️', desc: 'Permite usar o celular inteiro guiado pela voz.' },
        ],
      },
      exemplo: {
        titulo: 'Deixe o celular falar',
        celulas: [
          { ref: 'Quero ouvir uma notícia longa', valor: 'Uso a leitura em voz alta' },
          { ref: 'Olhos cansados de ler', valor: 'Deixo o celular ler pra mim' },
          { ref: 'Enxergo muito pouco', valor: 'Ativo o leitor de tela completo' },
          { ref: 'Com leitor, toco num botão', valor: 'Ele diz o nome; toco 2x pra ativar' },
        ],
        formula: 'Leitura em voz (sob pedido) + leitor de tela (tudo) = celular guiado pela voz',
        resultado: 'Você usa o celular ouvindo, com mais ou menos profundidade.',
        comentario: 'Comece pela leitura em voz alta, que é simples e não muda nada no uso normal. O leitor de tela completo (TalkBack/VoiceOver) é poderosíssimo, mas muda o jeito de tocar e exige prática — se for ativá-lo, faça com calma e saiba como desativar (geralmente repetindo o mesmo atalho que o ligou).',
      },
      vocabulario: [
        { palavra: 'Leitura em voz alta', def: 'Recurso que lê um texto escolhido por você.' },
        { palavra: 'Leitor de tela', def: 'Recurso (TalkBack/VoiceOver) que descreve tudo na tela em voz.' },
        { palavra: 'Guiado pela voz', def: 'Usar o celular ouvindo, sem depender de enxergar.' },
      ],
      chave: [
        'A leitura em voz alta lê um texto quando você pede',
        'O leitor de tela descreve tudo e muda o jeito de tocar',
        'Esses recursos permitem usar o celular ouvindo',
      ],
      porque: 'Os recursos de voz devolvem o celular a quem enxerga pouco e dão descanso a quem só quer ouvir. O leitor de tela, em especial, é uma ferramenta de inclusão profunda — torna possível usar o aparelho inteiro sem depender da visão.',
    },
    pratica: {
      instrucao: 'Vamos experimentar a leitura em voz alta.',
      passos: [
        'Vá em Configurações > Acessibilidade e procure "Selecionar para ouvir" ou "Leitura em voz alta"',
        'Ative o recurso conforme as instruções do seu celular',
        'Abra um texto (uma notícia, uma mensagem) e acione a leitura',
        'Ouça o celular ler o conteúdo em voz alta',
        'Se tiver curiosidade, leia (sem ativar ainda) sobre o leitor de tela completo e como ligá-lo/desligá-lo',
      ],
    },
    desafio: {
      cenario: 'Faça o celular falar: ative a leitura em voz alta e ouça um texto sendo lido, e conheça (com cautela) o leitor de tela completo — entendendo a diferença entre ler um texto sob pedido e navegar todo o celular guiado pela voz.',
      requisitos: [
        'Ativei a leitura em voz alta',
        'Ouvi um texto ser lido pelo celular',
        'Entendi a diferença pro leitor de tela',
        'Sei que o leitor de tela muda o jeito de tocar',
        'Sei como ligar/desligar esses recursos',
      ],
      dica: 'Antes de ativar o leitor de tela completo (TalkBack/VoiceOver), guarde o atalho pra desligá-lo — costuma ser apertar os dois botões de volume juntos por alguns segundos, ou repetir o triplo-clique do botão lateral. Sabendo desligar, você experimenta sem medo de ficar "preso" no modo.',
    },
    validacao: [
      'Ativo a leitura em voz alta',
      'Ouço textos lidos pelo celular',
      'Distingo leitura em voz e leitor de tela',
      'Entendo que o leitor muda o toque',
      'Sei ligar e desligar esses recursos',
    ],
  },

  'mob-acess-6': {
    trilhaId: 'mob-acess', numero: 6, titulo: 'Som, volume e legendas',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'O volume do vídeo está baixo, mas o do toque está alto demais. Você não escuta bem um ouvido. Ou prefere ler a ouvir. O celular ajusta o som de várias formas — e até mostra LEGENDAS pra você acompanhar tudo, mesmo sem o áudio.',
      conceito: {
        titulo: 'O som se ajusta e as legendas dão o texto do áudio',
        texto: 'O som do celular não é um só: há VOLUMES SEPARADOS pra mídia (vídeos, música), toque (ligações), alarmes e notificações — você ajusta cada um pelas teclas de volume (escolhendo qual) ou nas Configurações de som. Pra audição, há ajustes finos: equilibrar o som entre os ouvidos ESQUERDO e DIREITO, ou passar tudo pra MONO (mesmo som nos dois lados) — útil pra quem ouve melhor de um lado. E há as LEGENDAS: muitos vídeos e o próprio celular podem mostrar em texto o que está sendo falado, permitindo acompanhar sem áudio ou reforçar o que se ouve. Tudo isso fica em som e acessibilidade.',
      },
      estrutura: {
        titulo: 'Ajustando o que se ouve',
        partes: [
          { simbolo: '🔉', desc: 'Volumes separados: mídia, toque, alarme, notificação.' },
          { simbolo: '⚖️', desc: 'Equilíbrio esquerdo/direito ou som mono.' },
          { simbolo: '💬', desc: 'Legendas: o texto do que está sendo falado.' },
          { simbolo: '🎚️', desc: 'Tudo em Configurações de som e acessibilidade.' },
        ],
      },
      exemplo: {
        titulo: 'O som do seu jeito',
        celulas: [
          { ref: 'Vídeo baixo, toque alto', valor: 'Ajusto cada volume separado' },
          { ref: 'Ouço melhor de um ouvido', valor: 'Equilibro o som ou uso mono' },
          { ref: 'Não escuto bem o vídeo', valor: 'Ativo as legendas' },
          { ref: 'Ambiente barulhento', valor: 'Leio as legendas pra acompanhar' },
        ],
        formula: 'Volumes separados + equilíbrio/mono + legendas = áudio acessível a você',
        resultado: 'Você ouve (ou lê) tudo do jeito mais confortável.',
        comentario: 'As legendas são úteis pra muito mais do que dificuldade de audição: ajudam em ambientes barulhentos, quando não se quer incomodar alguém ao lado, ou pra entender sotaques e palavras difíceis. Vale ativar as "legendas automáticas" do celular, que legendam quase qualquer áudio.',
      },
      vocabulario: [
        { palavra: 'Volumes separados', def: 'Controles distintos pra mídia, toque, alarme e notificações.' },
        { palavra: 'Som mono', def: 'Mesmo áudio nos dois lados; ajuda quem ouve melhor de um ouvido.' },
        { palavra: 'Legendas', def: 'O texto do que está sendo falado, exibido na tela.' },
      ],
      chave: [
        'Cada tipo de som tem seu próprio volume',
        'Dá pra equilibrar os lados ou usar som mono',
        'As legendas mostram em texto o que é falado',
      ],
      porque: 'Ajustar o som e usar legendas torna o áudio do celular acessível a todos — quem ouve pouco, quem ouve melhor de um lado, ou quem prefere ler. São recursos que garantem que ninguém perca o conteúdo por causa do som.',
    },
    pratica: {
      instrucao: 'Vamos ajustar o som e ativar legendas.',
      passos: [
        'Aperte uma tecla de volume e veja a opção de ajustar volumes separados (mídia, toque)',
        'Ajuste o volume da mídia e do toque conforme sua preferência',
        'Vá em Configurações > Acessibilidade > Audição e veja o equilíbrio/som mono',
        'Procure a opção de "Legendas" ou "Legendas automáticas" e ative-a',
        'Abra um vídeo e veja as legendas aparecerem com o áudio',
      ],
    },
    desafio: {
      cenario: 'Torne o áudio acessível: ajuste os volumes separados de mídia e toque, conheça o equilíbrio esquerdo/direito e o som mono, e ative as legendas pra acompanhar vídeos em texto — garantindo que você ouça (ou leia) tudo com conforto.',
      requisitos: [
        'Ajustei volumes separados (mídia, toque)',
        'Conheci o equilíbrio de som e o mono',
        'Ativei as legendas',
        'Vi as legendas funcionarem num vídeo',
        'Sei deixar o áudio acessível a mim',
      ],
      dica: 'Se você usa aparelho auditivo, vale procurar nas Configurações de acessibilidade a seção de "aparelhos auditivos" ou "audição": celulares modernos conseguem conectar a aparelhos compatíveis por Bluetooth e enviar o som direto pra eles, com qualidade muito melhor.',
    },
    validacao: [
      'Ajusto volumes separados',
      'Conheço equilíbrio e som mono',
      'Ativo legendas no celular',
      'Acompanho vídeos pela legenda',
      'Deixo o áudio confortável pra mim',
    ],
  },

  'mob-acess-7': {
    trilhaId: 'mob-acess', numero: 7, titulo: 'Toque mais fácil e atalhos',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Os toques não registram, ou registram dois quando você quis um. A tela responde rápido demais. Apertar botões físicos é difícil. O celular tem ajustes que tornam o toque mais fácil e tolerante — pra mãos que tremem, dedos firmes ou pouca firmeza.',
      conceito: {
        titulo: 'O toque pode ficar mais fácil e tolerante',
        texto: 'A forma como o celular responde ao toque é ajustável. A DURAÇÃO DO TOQUE define quanto tempo você precisa segurar pra valer — útil pra quem encosta sem querer. Ajustes contra TOQUES REPETIDOS ignoram um segundo toque acidental logo após o primeiro — ótimo pra mãos que tremem. O TOQUE ASSISTIDO (AssistiveTouch no iPhone, Menu de acessibilidade no Android) cria um BOTÃO FLUTUANTE na tela que dá acesso fácil a funções (voltar, início, volume) sem precisar dos botões físicos. E há atalhos que acionam recursos de acessibilidade rapidamente. Tudo isso adapta o toque à sua mão, com mais paciência e menos erro.',
      },
      estrutura: {
        titulo: 'Adaptando o toque',
        partes: [
          { simbolo: '⏱️', desc: 'Duração do toque: quanto segurar pra valer.' },
          { simbolo: '🚫', desc: 'Ignorar toques repetidos: bom pra mãos que tremem.' },
          { simbolo: '⭕', desc: 'Toque assistido: botão flutuante com funções fáceis.' },
          { simbolo: '⚡', desc: 'Atalhos acionam recursos de acessibilidade rápido.' },
        ],
      },
      exemplo: {
        titulo: 'Um toque que perdoa',
        celulas: [
          { ref: 'Encosto na tela sem querer', valor: 'Aumento a duração do toque' },
          { ref: 'Mão treme, toco duas vezes', valor: 'Ativo ignorar toques repetidos' },
          { ref: 'Botão físico difícil de apertar', valor: 'Uso o botão flutuante (toque assistido)' },
          { ref: 'Quero acessibilidade rápida', valor: 'Configuro um atalho' },
        ],
        formula: 'Duração + ignorar repetições + botão flutuante = toque tolerante e fácil',
        resultado: 'Você toca o celular com menos erro e mais conforto.',
        comentario: 'O botão flutuante do toque assistido é uma mão na roda pra quem tem dificuldade com os botões físicos (que podem estar gastos ou ser duros): ele coloca na tela, sempre à mão, as funções de voltar, ir pro início, ajustar volume e mais — tudo com toques suaves.',
      },
      vocabulario: [
        { palavra: 'Duração do toque', def: 'Quanto tempo segurar a tela pra o toque valer.' },
        { palavra: 'Toque assistido', def: 'Botão flutuante com funções fáceis, sem usar botões físicos.' },
        { palavra: 'Atalho de acessibilidade', def: 'Gesto ou botão que aciona um recurso rapidamente.' },
      ],
      chave: [
        'A duração e a tolerância do toque são ajustáveis',
        'Ignorar toques repetidos ajuda mãos que tremem',
        'O botão flutuante substitui os botões físicos',
      ],
      porque: 'Adaptar o toque torna o celular utilizável por mãos que tremem, que têm pouca firmeza ou dificuldade com botões. Esses ajustes reduzem a frustração de toques errados e devolvem o controle preciso do aparelho a quem precisa.',
    },
    pratica: {
      instrucao: 'Vamos explorar os ajustes de toque.',
      passos: [
        'Vá em Configurações > Acessibilidade e procure a seção de "Toque" ou "Interação"',
        'Veja a opção de duração do toque e a de ignorar toques repetidos',
        'Procure o "Toque assistido" / "Menu de acessibilidade" e ative o botão flutuante',
        'Toque no botão flutuante e veja as funções que ele oferece (início, voltar, volume)',
        'Ajuste o que fizer sentido pra sua mão e teste a diferença',
      ],
    },
    desafio: {
      cenario: 'Adapte o toque: explore a duração do toque e a tolerância a toques repetidos, ative o botão flutuante do toque assistido pra acessar funções sem os botões físicos, e ajuste o que fizer sentido pra sua mão — tocando com menos erro e mais conforto.',
      requisitos: [
        'Encontrei os ajustes de toque na acessibilidade',
        'Conheci a duração e a tolerância do toque',
        'Ativei o botão flutuante do toque assistido',
        'Usei o botão flutuante pra acessar funções',
        'Ajustei o toque pro conforto da minha mão',
      ],
      dica: 'Se os botões físicos do seu celular (ligar, volume) estão gastos ou duros e difíceis de apertar, o botão flutuante resolve: você consegue desligar a tela, ajustar volume, tirar print e mais, tudo por ele. É uma forma de prolongar a vida útil de um aparelho com botões cansados.',
    },
    validacao: [
      'Encontro os ajustes de toque',
      'Conheço duração e tolerância do toque',
      'Ativo o botão flutuante',
      'Uso o botão flutuante pras funções',
      'Adapto o toque à minha mão',
    ],
  },

  'mob-acess-8': {
    trilhaId: 'mob-acess', numero: 8, titulo: 'Projeto: o celular configurado pra você',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: passar pelos ajustes que importam pra você e deixar o celular finalmente do seu jeito — a letra que você lê bem, o brilho que não cansa, o som que você ouve, o toque que não erra. No fim, um aparelho confortável, feito sob medida pra você.',
      conceito: {
        titulo: 'Tudo junto: um celular ajustado ao seu conforto',
        texto: 'Este projeto reúne a trilha numa configuração real e completa do seu celular. Você vai percorrer as áreas de acessibilidade e ajustar cada uma ao seu conforto: o TAMANHO da letra e da tela pra ler bem; o BRILHO e as cores (talvez o modo escuro) pra os olhos descansarem; a LUPA pronta pros rótulos miúdos; os recursos de VOZ se quiser ouvir a tela; o SOM e as LEGENDAS pra acompanhar tudo; e o TOQUE adaptado à sua mão. Ao final, você terá um celular que não exige esforço — ele se encaixa em você. E vai saber que, sempre que algo incomodar, há um ajuste esperando.',
      },
      estrutura: {
        titulo: 'O celular sob medida',
        partes: [
          { simbolo: '👁️', desc: 'Visão: letra, tela, brilho, modo escuro, lupa.' },
          { simbolo: '👂', desc: 'Audição: volumes, equilíbrio, legendas.' },
          { simbolo: '👆', desc: 'Toque: duração, tolerância, botão flutuante.' },
          { simbolo: '🎯', desc: 'Cada ajuste no ponto do seu conforto.' },
        ],
      },
      exemplo: {
        titulo: 'O aparelho que se encaixa em você',
        celulas: [
          { ref: 'A letra', valor: 'No tamanho que você lê bem' },
          { ref: 'A tela', valor: 'No brilho e modo que não cansam' },
          { ref: 'O som', valor: 'No volume e equilíbrio que você ouve' },
          { ref: 'O toque', valor: 'Adaptado, sem erros, à sua mão' },
        ],
        formula: 'Visão + audição + toque ajustados = um celular sob medida pra você',
        resultado: 'Um aparelho confortável, que não exige esforço pra usar.',
        comentario: 'Esse é o coração da acessibilidade: o celular deixou de ser uma fonte de desconforto e virou uma extensão sua, confortável e sob controle. Você não se adaptou a ele com sofrimento — ele se adaptou a você. E você sabe voltar aqui e reajustar quando a vida mudar.',
      },
      vocabulario: [
        { palavra: 'Celular sob medida', def: 'Um aparelho com os ajustes adaptados ao seu conforto.' },
        { palavra: 'Configuração de acessibilidade', def: 'O conjunto de ajustes de visão, audição e toque que você definiu.' },
        { palavra: 'Reajustar', def: 'Voltar aos ajustes e mudá-los quando sua necessidade mudar.' },
      ],
      chave: [
        'O projeto reúne os ajustes de visão, audição e toque',
        'O celular se adapta a você, não o contrário',
        'Sempre que algo incomodar, há um ajuste esperando',
      ],
      porque: 'Configurar o celular inteiro pro seu conforto consolida a trilha e entrega o que importa: um aparelho que serve a você, sem esforço nem desconforto. É autonomia e dignidade — e a tranquilidade de saber reajustar quando precisar.',
    },
    pratica: {
      instrucao: 'Vamos configurar seu celular do seu jeito, área por área.',
      passos: [
        'VISÃO: ajuste o tamanho da letra (e da tela) pro ponto em que você lê confortável',
        'TELA: ajuste o brilho e experimente o modo escuro; deixe como for melhor pros seus olhos',
        'LUPA: ative a lupa e deixe um atalho pronto pra ampliar rótulos quando precisar',
        'AUDIÇÃO: ajuste os volumes, o equilíbrio do som, e ative as legendas se ajudarem',
        'TOQUE: ajuste a tolerância do toque e ative o botão flutuante se for útil pra sua mão',
        'Use o celular por um momento e sinta como ficou mais confortável; reajuste o que quiser',
      ],
    },
    desafio: {
      cenario: 'Configure seu celular sob medida: percorra as áreas de visão (letra, brilho, lupa), audição (volume, legendas) e toque (tolerância, botão flutuante), ajustando cada uma ao seu conforto — terminando com um aparelho que serve a você, sem esforço.',
      requisitos: [
        'Ajustei o tamanho da letra e o brilho da tela',
        'Deixei a lupa pronta pra usar',
        'Ajustei o som e ativei legendas se útil',
        'Adaptei o toque à minha mão',
        'Terminei com um celular confortável e sob medida',
      ],
      dica: 'Guarde esta lição: o celular nunca precisa ser desconfortável. Toda vez que algo incomodar — letra que diminuiu numa atualização, som baixo, toque errado — volte a Configurações > Acessibilidade. O ajuste que resolve está lá, esperando. O aparelho é seu, e se molda a você.',
    },
    validacao: [
      'Ajustei a visão (letra, brilho, lupa)',
      'Ajustei a audição (som, legendas)',
      'Adaptei o toque à minha mão',
      'Tenho um celular confortável sob medida',
      'Sei reajustar sempre que precisar',
    ],
  },
};
