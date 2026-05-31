// ============================================================================
// CONTEÚDO — Vídeos, Música e Entretenimento (mob-entret). YouTube e vídeos,
// música e rádio, podcasts, ouvir com fones, streaming de filmes/séries (e o
// que é assinatura), jogos simples e passatempos, e-books/audiolivros e leitura,
// e um projeto de montar o próprio cantinho de lazer no celular. Foco em prazer,
// companhia, aprender por gosto e usar o celular como fonte de alegria.
// ============================================================================

export const MOB_ENTRET = {
  'mob-entret-1': {
    trilhaId: 'mob-entret', numero: 1, titulo: 'O celular é uma janela de entretenimento',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'A música da sua juventude, os filmes que você ama, o programa que faz rir, notícias do time, a novela antiga, aquele assunto que te fascina. Tudo isso cabe no celular, pronto pra quando você quiser. O aparelho não é só pra resolver coisas — é também pra ter prazer.',
      conceito: {
        titulo: 'No celular você acessa um mundo de lazer sob demanda',
        texto: 'Além de ferramentas úteis, o celular é uma porta pra ENTRETENIMENTO quase ilimitado, na hora que você quiser. Dá pra ouvir QUALQUER MÚSICA, assistir VÍDEOS de tudo (do reparo de uma torneira a shows antigos), ver FILMES e SÉRIES, ouvir RÁDIO e PODCASTS, ler LIVROS, jogar JOGOS leves. A maioria desses conteúdos vem por apps próprios (YouTube, apps de música, de streaming, de leitura), e muitos têm opção GRATUITA. O entretenimento sob demanda significa: você escolhe O QUÊ e QUANDO — nada de esperar a hora do programa na TV. Bem usado, isso traz alegria, companhia (ótimo contra a solidão) e a chance de aprender qualquer coisa por puro gosto.',
      },
      estrutura: {
        titulo: 'O lazer que cabe no bolso',
        partes: [
          { simbolo: '🎵', desc: 'Música: qualquer canção, na hora que quiser.' },
          { simbolo: '📺', desc: 'Vídeos, filmes e séries sob demanda.' },
          { simbolo: '🎙️', desc: 'Rádio, podcasts e audiolivros pra ouvir.' },
          { simbolo: '📖', desc: 'Livros e jogos leves no próprio celular.' },
        ],
      },
      exemplo: {
        titulo: 'Lazer na hora que der vontade',
        celulas: [
          { ref: 'Saudade de uma música antiga', valor: 'Busco e ouço na hora' },
          { ref: 'Quero aprender a fazer um prato', valor: 'Vejo um vídeo de receita' },
          { ref: 'Tarde parada em casa', valor: 'Assisto um filme ou série' },
          { ref: 'Gosto de um assunto', valor: 'Sigo podcasts e vídeos sobre ele' },
        ],
        formula: 'O quê você quer + quando você quer = entretenimento sob demanda',
        resultado: 'Você vê o celular como fonte de alegria, companhia e aprendizado.',
        comentario: 'Muita gente usa o celular só pra "obrigações" e perde o lado bom: ele é uma fonte enorme de prazer e companhia. Reencontrar músicas da juventude, assistir o que gosta na hora que quer, aprender por gosto — tudo isso melhora os dias. Nesta trilha você vai dominar cada forma de entretenimento e montar o seu próprio cantinho de lazer.',
      },
      vocabulario: [
        { palavra: 'Sob demanda', def: 'Escolher o que assistir/ouvir e quando, sem depender de horário.' },
        { palavra: 'Streaming', def: 'Assistir ou ouvir pela internet, sem precisar baixar antes.' },
        { palavra: 'App de conteúdo', def: 'Aplicativo que oferece música, vídeos, filmes ou livros.' },
      ],
      chave: [
        'O celular dá acesso a música, vídeos, filmes, podcasts e livros',
        'O entretenimento é sob demanda: você escolhe o quê e quando',
        'Bem usado, traz alegria, companhia e aprendizado por gosto',
      ],
      porque: 'Ver o celular como fonte de lazer, não só de tarefas, enriquece o dia a dia: traz prazer, alivia a solidão e abre o aprendizado por puro gosto. Dominar o entretenimento sob demanda é usar o celular pra viver melhor, com alegria e companhia sempre à mão.',
    },
    pratica: {
      instrucao: 'Vamos mapear as opções de lazer no seu celular.',
      passos: [
        'Procure na tela apps de vídeo (YouTube), de música e de leitura',
        'Pense em algo que você gostaria de ouvir, ver ou ler agora',
        'Escolha uma dessas categorias que mais te atrai pra explorar',
        'Abra um desses apps só pra ver o que ele oferece',
        'Perceba que há conteúdo pra todos os seus gostos, na hora que quiser',
      ],
    },
    desafio: {
      cenario: 'Descubra o lado do lazer: localize no celular os apps de vídeo, música e leitura, pense no que você gostaria de curtir agora, e abra um deles pra explorar — enxergando o celular como fonte de alegria e companhia, não só de tarefas.',
      requisitos: [
        'Encontrei apps de vídeo, música ou leitura',
        'Pensei no que gostaria de curtir',
        'Escolhi uma categoria que me atrai',
        'Abri um app pra explorar o que oferece',
        'Vejo o celular como fonte de lazer',
      ],
      dica: 'O entretenimento no celular é ótima companhia pra momentos sozinhos — uma música na cozinha, um podcast na caminhada, um filme à noite. Não precisa de habilidade técnica nenhuma pra aproveitar: as próximas missões mostram como, passo a passo, e tudo é mais simples do que parece.',
    },
    validacao: [
      'Localizo apps de lazer no celular',
      'Penso no que gosto de curtir',
      'Escolho categorias que me atraem',
      'Exploro um app de conteúdo',
      'Vejo o celular como fonte de alegria',
    ],
  },

  'mob-entret-2': {
    trilhaId: 'mob-entret', numero: 2, titulo: 'YouTube: vídeos de tudo',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Como trocar uma torneira, a receita do bolo perfeito, shows antigos, documentários, aulas de qualquer coisa, o episódio do programa que você perdeu. O YouTube tem vídeo de praticamente tudo — de graça. É a maior videoteca do mundo, no seu bolso.',
      conceito: {
        titulo: 'O YouTube é uma videoteca infinita e gratuita',
        texto: 'O YOUTUBE é o maior site de vídeos do mundo, com um app próprio (ou pelo navegador). Você BUSCA o que quer assistir digitando ou falando (ex.: "como plantar tomate", "música anos 60", "documentário sobre o Egito") e ele mostra muitos vídeos. Ao assistir, há controles simples: PLAY/PAUSE (toque na tela), barra pra AVANÇAR/VOLTAR, e tela CHEIA (girando o celular ou tocando no ícone). Você pode CURTIR vídeos, se INSCREVER em canais que gosta (pra acompanhar) e o YouTube passa a SUGERIR conteúdos do seu interesse. É gratuito (com alguns anúncios), com conteúdo pra todo gosto: aprender, relembrar, rir, se informar. Uma fonte inesgotável de vídeos sob demanda.',
      },
      estrutura: {
        titulo: 'Usando o YouTube',
        partes: [
          { simbolo: '🔍', desc: 'Busque por texto ou voz o que quer assistir.' },
          { simbolo: '▶️', desc: 'Controles: play/pause, avançar, tela cheia.' },
          { simbolo: '👍', desc: 'Curta vídeos e inscreva-se em canais que gosta.' },
          { simbolo: '✨', desc: 'Ele sugere mais do que você curte.' },
        ],
      },
      exemplo: {
        titulo: 'Achando o que você quer',
        celulas: [
          { ref: 'Torneira pingando', valor: 'Busco "como consertar torneira"' },
          { ref: 'Saudade de um cantor', valor: 'Busco o nome e ouço shows antigos' },
          { ref: 'Vídeo bom, quero mais do canal', valor: 'Me inscrevo no canal' },
          { ref: 'Assistir melhor', valor: 'Giro o celular pra tela cheia' },
        ],
        formula: 'Buscar + assistir + se inscrever = sua videoteca pessoal infinita',
        resultado: 'Você encontra e assiste vídeos de qualquer assunto, de graça.',
        comentario: 'A busca é a chave: descreva com palavras simples o que quer, e o YouTube acha. Para resultados melhores, seja específico ("receita de pão caseiro fácil"). E inscrever-se nos canais que você gosta cria a sua videoteca pessoal: o app passa a te mostrar novidades deles e sugestões parecidas, do seu gosto.',
      },
      vocabulario: [
        { palavra: 'Canal', def: 'O perfil de quem publica vídeos no YouTube; você pode se inscrever.' },
        { palavra: 'Inscrever-se', def: 'Seguir um canal pra acompanhar seus novos vídeos.' },
        { palavra: 'Tela cheia', def: 'Ampliar o vídeo pra ocupar toda a tela, girando o celular.' },
      ],
      chave: [
        'O YouTube tem vídeo de quase tudo, de graça',
        'Você busca por texto ou voz e assiste com controles simples',
        'Inscrever-se em canais monta sua videoteca pessoal',
      ],
      porque: 'O YouTube coloca a maior videoteca do mundo no seu bolso: pra aprender a fazer qualquer coisa, relembrar músicas e momentos, se informar e se divertir — tudo de graça e sob demanda. Dominá-lo é abrir uma fonte inesgotável de conhecimento e prazer.',
    },
    pratica: {
      instrucao: 'Vamos buscar e assistir um vídeo.',
      passos: [
        'Abra o app do YouTube (ou youtube.com no navegador)',
        'Toque na lupa e busque algo do seu interesse (música, receita, assunto)',
        'Toque num vídeo pra assistir; toque na tela pra ver play/pause',
        'Gire o celular ou toque no ícone pra ver em tela cheia',
        'Se gostar do canal, toque em Inscrever-se pra acompanhá-lo',
      ],
    },
    desafio: {
      cenario: 'Explore a videoteca: abra o YouTube, busque um assunto do seu gosto, assista um vídeo usando os controles (play/pause, tela cheia) e inscreva-se num canal que gostar — descobrindo que há vídeo de quase tudo, sob demanda e de graça.',
      requisitos: [
        'Abri o YouTube',
        'Busquei um assunto do meu interesse',
        'Assisti um vídeo usando os controles',
        'Vi um vídeo em tela cheia',
        'Inscrevi-me num canal que gostei',
      ],
      dica: 'Por baixo do vídeo aparecem vídeos relacionados e sugestões — uma forma fácil de descobrir mais do que você gosta. E cuidado só com o relógio: o YouTube é tão envolvente que o tempo voa. Aproveite, mas sem deixar a tela tomar conta do dia inteiro.',
    },
    validacao: [
      'Abro o app do YouTube',
      'Busco vídeos por assunto',
      'Uso os controles de reprodução',
      'Assisto em tela cheia',
      'Inscrevo-me em canais que gosto',
    ],
  },

  'mob-entret-3': {
    trilhaId: 'mob-entret', numero: 3, titulo: 'Música e rádio na hora que quiser',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'A música que tocava no seu casamento, o sucesso da rádio antiga, o gênero que te acalma, a estação que você ouvia toda manhã. No celular, qualquer música está a uma busca de distância — e a rádio continua tocando, agora pela internet.',
      conceito: {
        titulo: 'Toda a música do mundo, mais a rádio, no celular',
        texto: 'Os apps de MÚSICA (YouTube Music, Spotify, Deezer e outros) dão acesso a praticamente TODA música já gravada. Você BUSCA por uma canção, cantor ou gênero e toca na hora. Dá pra montar LISTAS (playlists) com suas favoritas e o app sugere músicas parecidas com seu gosto. Muitos têm versão GRATUITA (com anúncios entre as músicas). Além disso, dá pra ouvir RÁDIO pela internet: apps de rádio trazem milhares de estações (inclusive as locais que você já ouvia) tocando ao vivo, de qualquer lugar. Controles iguais aos do vídeo: play/pause, próxima, voltar. Com fones ou no alto-falante, você tem trilha sonora pra cozinhar, caminhar, relaxar — a qualquer hora.',
      },
      estrutura: {
        titulo: 'Música e rádio sob demanda',
        partes: [
          { simbolo: '🎶', desc: 'Busque qualquer música, cantor ou gênero.' },
          { simbolo: '📃', desc: 'Monte playlists com suas favoritas.' },
          { simbolo: '📻', desc: 'Ouça rádios ao vivo pela internet, de qualquer lugar.' },
          { simbolo: '⏯️', desc: 'Controles simples: play, pausa, próxima, voltar.' },
        ],
      },
      exemplo: {
        titulo: 'Trilha sonora pro dia',
        celulas: [
          { ref: 'Música do seu casamento', valor: 'Busco e ouço na hora' },
          { ref: 'Favoritas pra cozinhar', valor: 'Monto uma playlist' },
          { ref: 'A rádio que eu ouvia', valor: 'Encontro no app de rádio, ao vivo' },
          { ref: 'Descobrir músicas novas', valor: 'Vejo as sugestões do app' },
        ],
        formula: 'Buscar música + playlists + rádio ao vivo = trilha sonora a qualquer hora',
        resultado: 'Você ouve qualquer música e suas rádios favoritas quando quiser.',
        comentario: 'A música é talvez o entretenimento mais fácil e prazeroso do celular: reencontrar canções da sua história traz alegria e memórias. Comece buscando músicas que você ama; depois monte uma playlist de favoritas. E os apps de rádio são um tesouro pra quem gosta do formato — trazem até as estações locais de sempre, tocando ao vivo pela internet.',
      },
      vocabulario: [
        { palavra: 'Playlist (lista)', def: 'Uma seleção de músicas que você monta pra ouvir em sequência.' },
        { palavra: 'Rádio online', def: 'Estações de rádio transmitindo ao vivo pela internet, de qualquer lugar.' },
        { palavra: 'Versão gratuita', def: 'Uso sem pagar, geralmente com anúncios entre as músicas.' },
      ],
      chave: [
        'Apps de música dão acesso a quase toda canção já gravada',
        'Você monta playlists e ouve rádios ao vivo pela internet',
        'Há versões gratuitas, com controles simples de reprodução',
      ],
      porque: 'A música no celular reconecta você com canções queridas e cria trilha sonora pros momentos do dia — um prazer simples e poderoso. Com rádios e playlists sempre à mão, o celular vira fonte de alegria, memória e companhia em qualquer atividade.',
    },
    pratica: {
      instrucao: 'Vamos ouvir música e rádio.',
      passos: [
        'Abra um app de música (YouTube Music, Spotify ou outro) ou de rádio',
        'Busque uma música ou cantor de que você gosta e toque pra ouvir',
        'Use os controles de play/pause e próxima música',
        'Tente montar uma pequena playlist com 2 ou 3 favoritas',
        'Num app de rádio, procure uma estação que você conhece e ouça ao vivo',
      ],
    },
    desafio: {
      cenario: 'Crie sua trilha sonora: abra um app de música, busque e ouça canções que você ama, monte uma pequena playlist de favoritas e, num app de rádio, sintonize uma estação ao vivo — tendo música e rádio sob demanda a qualquer hora.',
      requisitos: [
        'Abri um app de música ou rádio',
        'Busquei e ouvi uma música que gosto',
        'Usei os controles de reprodução',
        'Montei uma playlist de favoritas',
        'Ouvi uma rádio ao vivo pela internet',
      ],
      dica: 'Os apps de música também tocam com a tela apagada e dá pra controlar pela tela de bloqueio — então você economiza bateria ouvindo no bolso. E muitos permitem BAIXAR músicas pra ouvir sem internet (offline), útil pra poupar dados; é um recurso a explorar quando estiver mais à vontade.',
    },
    validacao: [
      'Abro apps de música ou rádio',
      'Busco e ouço canções que gosto',
      'Uso os controles de reprodução',
      'Monto playlists de favoritas',
      'Sintonizo rádios ao vivo',
    ],
  },

  'mob-entret-4': {
    trilhaId: 'mob-entret', numero: 4, titulo: 'Podcasts e audiolivros: ouvir e aprender',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Imagine uma conversa interessante sobre o assunto que você ama, ou um livro inteiro narrado pra você — pra ouvir caminhando, cozinhando, descansando. Sem precisar ler na tela nem segurar nada. Podcasts e audiolivros são companhia e aprendizado pelos ouvidos.',
      conceito: {
        titulo: 'Conteúdo em áudio: companhia e aprendizado pelos ouvidos',
        texto: 'PODCASTS são como programas de rádio sob demanda: conversas, entrevistas, histórias e aulas sobre QUALQUER tema (saúde, história, religião, novelas, esportes, fé...), em episódios que você ouve quando quiser. AUDIOLIVROS são livros narrados em voz alta — você "lê" ouvindo. Ambos têm apps próprios (apps de podcast, e os de música costumam ter podcasts também) e muitos são GRATUITOS. A grande vantagem do áudio: você consome de OLHOS LIVRES e MÃOS LIVRES — ouvindo enquanto caminha, cozinha, faz tricô ou descansa. É ideal pra quem cansa de ler na tela ou só quer companhia inteligente. Você assina (segue) os podcasts que gosta e os novos episódios chegam sozinhos.',
      },
      estrutura: {
        titulo: 'Aprender e se distrair ouvindo',
        partes: [
          { simbolo: '🎙️', desc: 'Podcasts: programas sob demanda sobre qualquer tema.' },
          { simbolo: '📚', desc: 'Audiolivros: livros narrados pra você ouvir.' },
          { simbolo: '🙌', desc: 'Olhos e mãos livres: ouça fazendo outras coisas.' },
          { simbolo: '🔔', desc: 'Siga os que gosta; novos episódios chegam sozinhos.' },
        ],
      },
      exemplo: {
        titulo: 'Companhia pelos ouvidos',
        celulas: [
          { ref: 'Gosto de história', valor: 'Sigo um podcast de história' },
          { ref: 'Cansei de ler na tela', valor: 'Ouço um audiolivro' },
          { ref: 'Caminhada da tarde', valor: 'Levo um podcast nos fones' },
          { ref: 'Episódio novo saiu', valor: 'Chega sozinho no app' },
        ],
        formula: 'Áudio + olhos e mãos livres = companhia e aprendizado em qualquer atividade',
        resultado: 'Você se informa e se distrai ouvindo, enquanto faz outras coisas.',
        comentario: 'O áudio é perfeito pra rotina: transforma uma caminhada ou a louça num momento de aprender ou se divertir. Comece buscando um podcast sobre algo que você ama — há sobre absolutamente tudo. E os audiolivros são uma bênção pra quem tem vista cansada ou só prefere ouvir histórias, como nos velhos tempos do rádio-teatro.',
      },
      vocabulario: [
        { palavra: 'Podcast', def: 'Um programa em áudio, em episódios, sobre um tema, ouvido sob demanda.' },
        { palavra: 'Audiolivro', def: 'Um livro narrado em voz alta, pra você ouvir em vez de ler.' },
        { palavra: 'Episódio', def: 'Cada parte de um podcast, como um capítulo do programa.' },
      ],
      chave: [
        'Podcasts são programas sob demanda sobre qualquer tema',
        'Audiolivros são livros narrados pra ouvir',
        'O áudio deixa olhos e mãos livres pra outras tarefas',
      ],
      porque: 'O conteúdo em áudio é companhia e aprendizado sem esforço visual: você se informa e se diverte enquanto caminha, cozinha ou descansa. Pra quem cansa da tela ou ama ouvir histórias, podcasts e audiolivros enriquecem a rotina com prazer e conhecimento.',
    },
    pratica: {
      instrucao: 'Vamos encontrar um podcast pra ouvir.',
      passos: [
        'Abra um app de podcasts (ou a seção de podcasts no app de música)',
        'Busque um tema do seu interesse (ex.: "história do Brasil", "saúde")',
        'Escolha um podcast e toque num episódio pra começar a ouvir',
        'Use os controles de play/pause e de avançar/voltar',
        'Se gostar, toque em Seguir/Assinar pra receber novos episódios',
      ],
    },
    desafio: {
      cenario: 'Ouça e aprenda: abra um app de podcasts, busque um tema que você ama, ouça um episódio usando os controles e siga o podcast pra receber novidades — descobrindo a companhia e o aprendizado de olhos e mãos livres que o áudio oferece.',
      requisitos: [
        'Abri um app de podcasts',
        'Busquei um tema do meu interesse',
        'Ouvi um episódio com os controles',
        'Entendi a vantagem de ouvir de mãos livres',
        'Segui um podcast pra receber novidades',
      ],
      dica: 'Tanto podcasts quanto audiolivros podem ser baixados pra ouvir sem internet — ótimo pra poupar dados numa viagem ou caminhada. E você pode ajustar a VELOCIDADE da narração: se achar lento, aumente um pouco; se for rápido demais, diminua. Tudo no seu ritmo.',
    },
    validacao: [
      'Abro um app de podcasts',
      'Busco temas que me interessam',
      'Ouço episódios com os controles',
      'Aproveito o áudio de mãos livres',
      'Sigo podcasts pra receber novidades',
    ],
  },

  'mob-entret-5': {
    trilhaId: 'mob-entret', numero: 5, titulo: 'Fones de ouvido: ouvir com conforto',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Ouvir sua música sem incomodar ninguém, escutar bem um vídeo num lugar barulhento, fazer uma chamada com as mãos livres. Os fones de ouvido — com fio ou sem fio — transformam a experiência. E conectar os sem fio é mais simples do que parece.',
      conceito: {
        titulo: 'Fones dão privacidade e qualidade ao som do celular',
        texto: 'Os FONES DE OUVIDO levam o som do celular direto pros seus ouvidos, com mais qualidade e SEM incomodar quem está perto. Há dois tipos. Os COM FIO: basta espetar o plugue na entrada do celular (ou num adaptador) — funciona na hora. Os SEM FIO (Bluetooth): conectam por uma tecnologia chamada BLUETOOTH; você liga o Bluetooth no celular, coloca o fone em modo de PAREAMENTO e o seleciona na lista — depois disso, ele reconecta sozinho. Os fones também têm MICROFONE, ótimos pra atender ligações de mãos livres. Controle o VOLUME pelos botões do celular (ou do próprio fone). Um cuidado de saúde: evite volume muito alto por muito tempo, pra proteger a audição.',
      },
      estrutura: {
        titulo: 'Conectando e usando fones',
        partes: [
          { simbolo: '🔌', desc: 'Com fio: espete o plugue e use na hora.' },
          { simbolo: '📡', desc: 'Sem fio: ligue o Bluetooth e pareie o fone.' },
          { simbolo: '🎤', desc: 'Fones têm microfone: atenda chamadas de mãos livres.' },
          { simbolo: '🔉', desc: 'Controle o volume; evite som alto demais.' },
        ],
      },
      exemplo: {
        titulo: 'Som só pra você',
        celulas: [
          { ref: 'Ouvir sem incomodar', valor: 'Coloco os fones' },
          { ref: 'Fone sem fio novo', valor: 'Ligo o Bluetooth e pareio uma vez' },
          { ref: 'Ligação no ônibus', valor: 'Atendo pelos fones, mãos livres' },
          { ref: 'Som muito alto', valor: 'Baixo o volume pra proteger os ouvidos' },
        ],
        formula: 'Fone conectado + volume confortável = som privado e de qualidade',
        resultado: 'Você ouve com privacidade e conforto, com ou sem fio.',
        comentario: 'O pareamento Bluetooth assusta no começo, mas é uma vez só: depois de conectar, o fone reconhece seu celular e religa sozinho sempre. O passo que mais confunde é colocar o fone em "modo de pareamento" (geralmente segurando um botão até piscar) — consulte o manual do seu fone. E lembre da saúde auditiva: volume moderado preserva sua audição a longo prazo.',
      },
      vocabulario: [
        { palavra: 'Bluetooth', def: 'A tecnologia que conecta sem fio o celular a fones e caixas de som.' },
        { palavra: 'Parear', def: 'Conectar pela primeira vez um fone sem fio ao celular.' },
        { palavra: 'Modo de pareamento', def: 'Quando o fone fica pronto pra ser encontrado e conectado.' },
      ],
      chave: [
        'Fones com fio funcionam ao espetar; sem fio usam Bluetooth',
        'Parear o fone sem fio é uma vez só; depois reconecta sozinho',
        'Controle o volume e evite som alto demais pela saúde',
      ],
      porque: 'Os fones trazem privacidade e qualidade ao som do celular, e mãos livres pras ligações. Saber conectá-los — inclusive os sem fio por Bluetooth — desbloqueia o melhor do entretenimento em áudio, em qualquer lugar, sem incomodar ninguém e cuidando da audição.',
    },
    pratica: {
      instrucao: 'Vamos conectar e usar fones de ouvido.',
      passos: [
        'Se tiver fones com fio, espete o plugue no celular (ou adaptador) e ouça algo',
        'Para fones sem fio, ligue o Bluetooth nas Configurações ou na barra de atalhos',
        'Coloque o fone sem fio em modo de pareamento (veja o manual) e selecione-o na lista',
        'Ouça uma música ou vídeo pelos fones e ajuste o volume',
        'Note que dá pra atender chamadas pelos fones, com o microfone deles',
      ],
    },
    desafio: {
      cenario: 'Ouça com conforto: conecte fones ao celular (espetando os com fio ou pareando os sem fio por Bluetooth), ouça um conteúdo ajustando o volume com cuidado, e entenda que dá pra atender chamadas de mãos livres pelos fones.',
      requisitos: [
        'Conectei fones ao celular (com ou sem fio)',
        'Liguei o Bluetooth e pareei, se sem fio',
        'Ouvi um conteúdo pelos fones',
        'Ajustei o volume com cuidado',
        'Sei atender chamadas pelos fones',
      ],
      dica: 'Se o fone sem fio não conecta, confira: ele está carregado? Está em modo de pareamento (piscando)? O Bluetooth do celular está ligado? Na maioria das vezes é um desses três. E se já parou de aparecer, às vezes basta desligar e religar o Bluetooth pra ele reconectar.',
    },
    validacao: [
      'Conecto fones com fio ao celular',
      'Pareio fones sem fio por Bluetooth',
      'Ouço conteúdo pelos fones',
      'Ajusto o volume com cuidado',
      'Atendo chamadas pelos fones',
    ],
  },

  'mob-entret-6': {
    trilhaId: 'mob-entret', numero: 6, titulo: 'Filmes e séries: streaming e assinaturas',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Filmes, séries, novelas e documentários, prontos pra assistir na hora que quiser — no celular, na TV, onde for. Mas aqui aparece uma palavra importante: assinatura. Entender o que é, e o que é grátis e o que se paga, evita surpresas e ajuda você a escolher bem.',
      conceito: {
        titulo: 'Streaming traz filmes e séries; muitos por assinatura',
        texto: 'Os apps de STREAMING de vídeo (Netflix, Prime Video, Disney+, Globoplay, YouTube e outros) oferecem filmes, séries, novelas e documentários sob demanda — você escolhe e assiste na hora, com os mesmos controles de play/pause e tela cheia. Atenção ao modelo de pagamento: muitos funcionam por ASSINATURA — uma mensalidade que dá acesso a todo o catálogo enquanto você paga (como uma TV a cabo digital). Outros têm parte GRATUITA (com anúncios) e parte paga. A assinatura cobra TODO MÊS automaticamente até você CANCELAR — por isso é importante saber o que está assinando e quanto custa. Dá pra assistir no celular ou espelhar/abrir na TV. O segredo é escolher conscientemente: aproveitar o que é grátis e só assinar o que realmente vai usar.',
      },
      estrutura: {
        titulo: 'Entendendo o streaming',
        partes: [
          { simbolo: '🎬', desc: 'Filmes, séries e novelas sob demanda.' },
          { simbolo: '💳', desc: 'Assinatura: mensalidade pelo catálogo todo.' },
          { simbolo: '🆓', desc: 'Alguns têm parte gratuita (com anúncios).' },
          { simbolo: '🔁', desc: 'A assinatura cobra todo mês até você cancelar.' },
        ],
      },
      exemplo: {
        titulo: 'Escolher com consciência',
        celulas: [
          { ref: 'App pede mensalidade', valor: 'É assinatura: pago por mês enquanto uso' },
          { ref: 'Quero ver só um filme', valor: 'Vejo se há opção avulsa ou grátis' },
          { ref: 'Não uso mais um serviço', valor: 'Cancelo a assinatura pra parar de pagar' },
          { ref: 'Conteúdo grátis com anúncios', valor: 'Aproveito sem pagar nada' },
        ],
        formula: 'Saber o que é grátis x assinatura + cancelar o que não usa = lazer sem surpresa',
        resultado: 'Você entende as assinaturas e escolhe o que vale a pena pagar.',
        comentario: 'A palavra-chave é CONSCIÊNCIA: assinaturas são cômodas, mas se acumulam e cobram todo mês, mesmo sem uso. Antes de assinar, confira o valor e se você realmente vai aproveitar. E saiba CANCELAR (geralmente nas configurações da conta do serviço) — assinar é fácil, e cancelar é um direito seu, que evita pagar por algo esquecido. Aproveite primeiro o muito conteúdo gratuito.',
      },
      vocabulario: [
        { palavra: 'Streaming', def: 'Assistir filmes e séries pela internet, sob demanda.' },
        { palavra: 'Assinatura', def: 'Uma mensalidade que dá acesso ao catálogo enquanto você paga.' },
        { palavra: 'Cancelar', def: 'Encerrar uma assinatura pra parar de ser cobrado.' },
      ],
      chave: [
        'Apps de streaming trazem filmes e séries sob demanda',
        'Muitos cobram assinatura mensal até você cancelar',
        'Escolha com consciência: aproveite o grátis, assine só o que usa',
      ],
      porque: 'Entender streaming e assinaturas dá acesso a um mundo de filmes e séries — sem cair em cobranças mensais esquecidas. Sabendo o que é grátis, o que é pago e como cancelar, você desfruta do melhor entretenimento pagando apenas pelo que realmente aproveita.',
    },
    pratica: {
      instrucao: 'Vamos explorar um app de streaming com consciência.',
      passos: [
        'Abra um app de streaming que você já tenha (ou veja o conteúdo gratuito do YouTube)',
        'Navegue pelo catálogo e veja como escolher um filme ou série',
        'Identifique se o serviço é por assinatura e qual o valor mensal',
        'Procure, nas configurações da conta, onde se cancela a assinatura',
        'Reflita se vale a pena: você usa o suficiente pra justificar o valor?',
      ],
    },
    desafio: {
      cenario: 'Navegue com consciência: explore um app de streaming, entenda se é por assinatura e quanto custa, descubra onde se cancela, e reflita sobre o que vale pagar — desfrutando do entretenimento sem cair em cobranças mensais esquecidas.',
      requisitos: [
        'Explorei o catálogo de um app de streaming',
        'Identifiquei se é por assinatura e o valor',
        'Localizei onde se cancela a assinatura',
        'Entendi que a cobrança se repete até cancelar',
        'Refleti sobre o que vale a pena pagar',
      ],
      dica: 'Reveja periodicamente suas assinaturas (de streaming, música, etc.): é fácil acumular serviços que você nem usa mais, cada um cobrando todo mês. Uma boa prática é, de tempos em tempos, listar o que você paga e cancelar o que não aproveita — pode economizar bastante no ano.',
    },
    validacao: [
      'Exploro catálogos de streaming',
      'Identifico assinaturas e seus valores',
      'Sei onde cancelar uma assinatura',
      'Entendo a cobrança recorrente',
      'Escolho com consciência o que pagar',
    ],
  },

  'mob-entret-7': {
    trilhaId: 'mob-entret', numero: 7, titulo: 'Jogos e passatempos',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Paciência, palavras-cruzadas, caça-palavras, sudoku, jogo da memória, dominó, damas. Os passatempos de sempre estão no celular — e dá pra jogar sozinho a qualquer hora, exercitando a mente e passando o tempo de forma gostosa. Diversão simples, sem complicação.',
      conceito: {
        titulo: 'Jogos leves divertem e exercitam a mente',
        texto: 'A loja de apps tem milhares de JOGOS LEVES e passatempos, muitos GRATUITOS, perfeitos pra relaxar e exercitar a mente. Os clássicos estão todos lá: PACIÊNCIA (jogo de cartas), PALAVRAS-CRUZADAS, CAÇA-PALAVRAS, SUDOKU, JOGO DA MEMÓRIA, DOMINÓ, DAMAS, xadrez. São fáceis de aprender (têm instruções e níveis pra iniciantes) e você joga SOZINHO contra o celular, no seu ritmo, a qualquer hora. Além de divertir e passar o tempo, esses jogos estimulam a memória, o raciocínio e a concentração — um exercício gostoso pro cérebro. Dois cuidados ao baixar: prefira jogos com boa avaliação e fique atento a jogos que insistem em cobranças dentro do app (você não precisa pagar pra se divertir).',
      },
      estrutura: {
        titulo: 'Diversão que faz bem',
        partes: [
          { simbolo: '🃏', desc: 'Clássicos: paciência, sudoku, palavras-cruzadas.' },
          { simbolo: '🧠', desc: 'Exercitam memória, raciocínio e concentração.' },
          { simbolo: '🕐', desc: 'Jogue sozinho, no seu ritmo, a qualquer hora.' },
          { simbolo: '⚠️', desc: 'Prefira bem avaliados; cuidado com cobranças no app.' },
        ],
      },
      exemplo: {
        titulo: 'Passatempos no bolso',
        celulas: [
          { ref: 'Gosto de cartas', valor: 'Jogo Paciência no celular' },
          { ref: 'Quero exercitar a mente', valor: 'Faço sudoku ou palavras-cruzadas' },
          { ref: 'Tarde parada', valor: 'Caça-palavras pra passar o tempo' },
          { ref: 'Jogo pede pra pagar', valor: 'Procuro outro grátis e bem avaliado' },
        ],
        formula: 'Jogo leve + jogar no seu ritmo = diversão que exercita a mente',
        resultado: 'Você relaxa, passa o tempo e estimula o cérebro com passatempos.',
        comentario: 'Os passatempos são um dos usos mais saudáveis e prazerosos do celular: divertem, fazem o tempo passar e ainda mantêm a mente ativa — o que faz muito bem em qualquer idade. Comece pelo jogo que você já gostava na vida real (paciência, palavras-cruzadas). E não se sinta obrigado a pagar nada: há ótimas opções totalmente gratuitas.',
      },
      vocabulario: [
        { palavra: 'Passatempo', def: 'Jogo leve pra relaxar e ocupar o tempo de forma agradável.' },
        { palavra: 'Compra no app', def: 'Cobrança dentro de um jogo; você pode evitá-la e jogar de graça.' },
        { palavra: 'Nível', def: 'O grau de dificuldade; comece pelos mais fáceis.' },
      ],
      chave: [
        'A loja tem muitos jogos leves clássicos e gratuitos',
        'Eles divertem e exercitam memória e raciocínio',
        'Prefira jogos bem avaliados e evite os que insistem em cobranças',
      ],
      porque: 'Os jogos e passatempos são diversão saudável que mantém a mente ativa — um prazer simples que faz bem em qualquer idade. Saber encontrá-los e jogá-los com segurança (sem cair em cobranças) abre uma fonte gratuita de entretenimento e exercício mental sempre à mão.',
    },
    pratica: {
      instrucao: 'Vamos instalar e jogar um passatempo.',
      passos: [
        'Na loja de apps, busque um jogo clássico que você goste (ex.: "paciência", "sudoku")',
        'Escolha um com boa avaliação e muitos downloads, e instale-o',
        'Abra o jogo e veja as instruções ou o tutorial de como jogar',
        'Comece por um nível fácil e jogue uma partida no seu ritmo',
        'Se o jogo insistir muito em cobranças, considere trocar por outro gratuito',
      ],
    },
    desafio: {
      cenario: 'Divirta-se com a mente: na loja de apps, instale um passatempo clássico bem avaliado, aprenda a jogar pelas instruções e jogue uma partida no seu ritmo — relaxando, passando o tempo e exercitando o cérebro, sem precisar pagar por isso.',
      requisitos: [
        'Busquei um jogo clássico na loja',
        'Instalei um bem avaliado',
        'Vi as instruções de como jogar',
        'Joguei uma partida no meu ritmo',
        'Sei evitar jogos que insistem em cobranças',
      ],
      dica: 'Cuidado com jogos cheios de anúncios ou que oferecem "prêmios em dinheiro" — alguns são armadilhas pra te fazer pagar ou ver propaganda sem parar. Os bons passatempos clássicos (paciência, sudoku, palavras) costumam ser tranquilos e gratuitos. Diversão de verdade não cobra a cada jogada.',
    },
    validacao: [
      'Busco jogos clássicos na loja',
      'Instalo jogos bem avaliados',
      'Aprendo a jogar pelas instruções',
      'Jogo no meu ritmo pra relaxar',
      'Evito jogos com cobranças insistentes',
    ],
  },

  'mob-entret-8': {
    trilhaId: 'mob-entret', numero: 8, titulo: 'Projeto: seu cantinho de lazer no celular',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo e montar o seu cantinho de lazer: os vídeos, músicas, podcasts, filmes e jogos que VOCÊ ama, organizados e prontos pra um toque. No fim, seu celular vai ser uma fonte pessoal de alegria, do seu jeito — companhia pra todos os momentos.',
      conceito: {
        titulo: 'Tudo junto: um cantinho de lazer feito pra você',
        texto: 'Este projeto reúne a trilha montando o SEU espaço de entretenimento pessoal. Você vai escolher, de cada categoria, o que mais combina com você e deixar pronto e à mão: um ou dois CANAIS do YouTube pra acompanhar; uma PLAYLIST de músicas favoritas ou uma rádio querida; um PODCAST ou audiolivro pra ouvir; um app de streaming ou conteúdo de vídeo pros filmes/séries; e um JOGO de passatempo instalado. A ideia é curar — escolher com carinho — o que te dá prazer, em vez de se perder no excesso. Organize esses apps numa tela de fácil acesso. O resultado é um celular que, além de útil, é uma fonte pessoal de alegria, companhia e descanso, do seu jeito.',
      },
      estrutura: {
        titulo: 'O lazer do seu jeito',
        partes: [
          { simbolo: '📺', desc: 'Canais do YouTube que você acompanha.' },
          { simbolo: '🎵', desc: 'Playlist ou rádio favorita; um podcast pra ouvir.' },
          { simbolo: '🎬', desc: 'Onde assistir seus filmes e séries.' },
          { simbolo: '🎲', desc: 'Um jogo de passatempo sempre à mão.' },
        ],
      },
      exemplo: {
        titulo: 'Alegria a um toque',
        celulas: [
          { ref: 'Gosto de música e história', valor: 'Playlist + podcast de história prontos' },
          { ref: 'Acompanho receitas', valor: 'Inscrito num canal de culinária' },
          { ref: 'Noite de filme', valor: 'App de streaming à mão' },
          { ref: 'Relaxar antes de dormir', valor: 'Meu jogo de paciência ali' },
        ],
        formula: 'Curar o que você ama + deixar à mão = celular como fonte pessoal de alegria',
        resultado: 'Um cantinho de lazer do seu jeito, companhia pra todos os momentos.',
        comentario: 'Esse é o domínio completo do entretenimento: você deixou de só "mexer no celular" e passou a ter um espaço de lazer curado, com o que realmente te dá prazer, pronto a um toque. Esse cantinho transforma o celular numa fonte de alegria e companhia — pra animar uma tarde, embalar uma tarefa, ou simplesmente descansar com algo que você ama.',
      },
      vocabulario: [
        { palavra: 'Curar (escolher)', def: 'Selecionar com carinho o que te agrada, em vez de se perder no excesso.' },
        { palavra: 'Cantinho de lazer', def: 'Seus apps e conteúdos de entretenimento organizados e à mão.' },
        { palavra: 'Companhia', def: 'O papel do entretenimento de fazer companhia em vários momentos.' },
      ],
      chave: [
        'O projeto reúne vídeo, música, podcast, streaming e jogo',
        'A ideia é curar o que você ama e deixar à mão',
        'O resultado é o celular como fonte pessoal de alegria',
      ],
      porque: 'Montar um cantinho de lazer pessoal entrega o maior presente da trilha: um celular que faz companhia e traz alegria do seu jeito. Curando o que você ama e deixando à mão, você usa a tecnologia pra viver melhor — com prazer, descanso e companhia sempre disponíveis.',
    },
    pratica: {
      instrucao: 'Vamos montar seu cantinho de lazer, categoria por categoria.',
      passos: [
        'VÍDEO: inscreva-se em um ou dois canais do YouTube que você gosta de acompanhar',
        'MÚSICA: monte uma playlist de favoritas ou salve uma rádio querida',
        'ÁUDIO: siga um podcast ou comece um audiolivro do seu interesse',
        'FILMES: deixe à mão o app onde você assiste filmes/séries (ou o conteúdo grátis)',
        'JOGO: instale um passatempo clássico bem avaliado',
        'Organize esses apps numa tela de fácil acesso e aproveite seu cantinho',
      ],
    },
    desafio: {
      cenario: 'Monte seu cantinho de lazer: escolha e deixe à mão o que você ama de cada categoria — canais de vídeo, playlist ou rádio, um podcast, onde ver filmes, e um jogo — organizando tudo numa tela de fácil acesso e transformando o celular em fonte pessoal de alegria e companhia.',
      requisitos: [
        'Inscrevi-me em canais de vídeo que gosto',
        'Montei uma playlist ou salvei uma rádio',
        'Segui um podcast ou comecei um audiolivro',
        'Deixei à mão onde assisto filmes/séries',
        'Instalei um jogo e organizei meu cantinho de lazer',
      ],
      dica: 'Seu cantinho de lazer pode crescer e mudar com você: vá adicionando o que descobre e gosta, e tirando o que cansou. E lembre do equilíbrio — o entretenimento é pra somar alegria à vida, não pra substituir o convívio e as atividades que você ama. Use o celular pra viver melhor, não pra viver na tela.',
    },
    validacao: [
      'Tenho canais de vídeo que acompanho',
      'Montei playlist ou salvei uma rádio',
      'Sigo um podcast ou audiolivro',
      'Sei onde assistir meus filmes/séries',
      'Tenho meu cantinho de lazer montado',
    ],
  },
};
