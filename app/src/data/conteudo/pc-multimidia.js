// ============================================================================
// CONTEÚDO — Fotos, Vídeos e Mídia no Computador (pc-multimidia)
// Ver/organizar fotos, recortar e ajustar imagens, capturas de tela, vídeos e
// players, áudio e fones, passar do celular pro PC, formatos de mídia e um
// álbum/coletânea final. Lidar com mídia sem complicação.
// ============================================================================

export const PC_MULTIMIDIA = {
  'pc-multimidia-1': {
    trilhaId: 'pc-multimidia', numero: 1, titulo: 'Ver e organizar suas fotos no computador',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Centenas de fotos espalhadas, repetidas, sem ordem nenhuma — e a foto que você quer mostrar some na hora H. Organizar as fotos no computador é mais fácil do que parece e transforma uma bagunça num acervo que você consulta com orgulho.',
      conceito: {
        titulo: 'O computador é o melhor lugar pra organizar seu acervo',
        texto: 'A tela grande do computador é ideal pra ver e organizar fotos com calma. O app FOTOS do Windows mostra suas imagens em miniaturas, permite ver em tela cheia e navegar com as setas. A organização se apoia em PASTAS por tema ou data (Viagem 2025, Família, Documentos) — exatamente como você aprendeu a organizar arquivos. Você pode FAVORITAR as melhores e APAGAR as repetidas e borradas. Um acervo organizado é aquele em que você acha qualquer foto em segundos, em vez de rolar centenas de imagens.',
      },
      estrutura: {
        titulo: 'Organizando o acervo',
        partes: [
          { simbolo: '🖼️', desc: 'App Fotos: ver miniaturas, tela cheia e navegar com setas.' },
          { simbolo: '📁', desc: 'Pastas por tema ou data dão ordem ao acervo.' },
          { simbolo: '⭐', desc: 'Favoritar as melhores pra achar rápido depois.' },
          { simbolo: '🗑️', desc: 'Apagar repetidas e borradas libera espaço e clareia.' },
        ],
      },
      exemplo: {
        titulo: 'Da bagunça ao acervo',
        celulas: [
          { ref: 'Fotos todas misturadas', valor: 'Crie pastas: Viagem, Família, Docs' },
          { ref: 'Abrir uma foto', valor: 'Clique duplo: abre no app Fotos' },
          { ref: 'Cinco fotos quase iguais', valor: 'Guarde a melhor, apague as outras' },
          { ref: 'A melhor da viagem', valor: 'Favorite pra achar na hora' },
        ],
        formula: 'App Fotos + pastas por tema + favoritar + limpar = acervo no controle',
        resultado: 'Você encontra qualquer foto em segundos, sem rolar centenas.',
        comentario: 'Reserve um tempinho pra essa faxina das fotos — pode parecer trabalhoso, mas é gratificante: além de liberar bastante espaço (fotos ocupam muito), você redescobre momentos esquecidos e fica com um acervo que dá gosto de mostrar.',
      },
      vocabulario: [
        { palavra: 'App Fotos', def: 'Programa do Windows pra ver e organizar imagens.' },
        { palavra: 'Miniatura', def: 'A versão pequena da foto exibida na lista.' },
        { palavra: 'Favoritar', def: 'Marcar uma foto como destaque pra encontrá-la rápido.' },
      ],
      chave: [
        'A tela grande do PC é ideal pra organizar fotos',
        'Pastas por tema/data dão ordem ao acervo',
        'Favoritar as boas e apagar as ruins limpa tudo',
      ],
      porque: 'Fotos desorganizadas são frustrantes e ocupam muito espaço. Organizá-las no computador transforma um caos de imagens num acervo consultável — e você nunca mais perde tempo procurando aquela foto especial.',
    },
    pratica: {
      instrucao: 'Vamos começar a organizar suas fotos no computador.',
      passos: [
        'Abra a pasta onde estão suas fotos e dê um clique duplo numa delas',
        'Veja que ela abre no app Fotos; navegue com as setas do teclado',
        'Crie uma ou duas pastas por tema (ex.: "Família", "Viagens")',
        'Mova algumas fotos pras pastas certas',
        'Apague duas ou três fotos claramente repetidas ou borradas',
      ],
    },
    desafio: {
      cenario: 'Organize seu acervo: use o app Fotos pra visualizar suas imagens, crie pastas por tema ou data, mova fotos pras pastas corretas, favorite as melhores e apague as repetidas e borradas pra limpar o conjunto.',
      requisitos: [
        'Visualizei minhas fotos no app Fotos',
        'Criei pastas por tema ou data',
        'Movi fotos pras pastas certas',
        'Favoritei as melhores imagens',
        'Apaguei repetidas e borradas',
      ],
      dica: 'Não precisa organizar tudo de uma vez — comece por um tema ou um período (ex.: as fotos do último ano) e vá avançando aos poucos. Pouco a pouco, todo o acervo fica em ordem, sem virar uma tarefa cansativa.',
    },
    validacao: [
      'Visualizo fotos no app Fotos',
      'Organizo o acervo em pastas',
      'Movo fotos pros lugares certos',
      'Favorito as melhores',
      'Apago repetidas e borradas',
    ],
  },

  'pc-multimidia-2': {
    trilhaId: 'pc-multimidia', numero: 2, titulo: 'Recortar e ajustar uma imagem',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'A foto está ótima, mas tem um pedaço sobrando na lateral. Ou está escura demais. Ou você precisa só de um detalhe dela. Pequenos ajustes em imagens são tarefas do dia a dia — e o Windows já traz tudo pra fazer isso, sem programa complicado.',
      conceito: {
        titulo: 'Ajustes simples resolvem a maioria das necessidades',
        texto: 'O próprio app FOTOS do Windows tem um modo de EDIÇÃO com as ferramentas que você mais usa. RECORTAR (cortar) remove as bordas indesejadas e deixa só o que importa — também serve pra mudar a proporção (quadrada pra rede social, por exemplo). GIRAR endireita fotos tortas. E os AJUSTES de brilho e cor melhoram imagens escuras ou apagadas com um deslizar. A regra de ouro da edição: salve mantendo o original quando possível (usando "salvar uma cópia"), pra nunca perder a foto sem mexer caso o ajuste não fique bom.',
      },
      estrutura: {
        titulo: 'As ferramentas essenciais',
        partes: [
          { simbolo: '✂️', desc: 'Recortar: remove bordas e ajusta a proporção.' },
          { simbolo: '🔄', desc: 'Girar: endireita fotos tortas ou de lado.' },
          { simbolo: '☀️', desc: 'Brilho e cor: melhora fotos escuras ou apagadas.' },
          { simbolo: '💾', desc: 'Salvar cópia: preserva o original intacto.' },
        ],
      },
      exemplo: {
        titulo: 'Editando com simplicidade',
        celulas: [
          { ref: 'Sobra na lateral', valor: 'Recortar resolve' },
          { ref: 'Foto de lado', valor: 'Girar pra endireitar' },
          { ref: 'Foto escura', valor: 'Aumentar o brilho no ajuste' },
          { ref: 'Manter a original', valor: 'Usar "salvar uma cópia"' },
        ],
        formula: 'Recortar + girar + ajustar + salvar cópia = foto melhor, original a salvo',
        resultado: 'Imagens ajustadas pro que você precisa, sem perder o original.',
        comentario: 'Para recortar um documento fotografado (deixando só o papel, sem a mesa em volta) ou cortar uma foto pra usar de perfil, o recorte do app Fotos já basta. Você raramente precisa de um editor profissional pra essas tarefas do cotidiano.',
      },
      vocabulario: [
        { palavra: 'Recortar (crop)', def: 'Cortar as bordas da imagem pra deixar só o que importa.' },
        { palavra: 'Proporção', def: 'A relação entre largura e altura (quadrada, retangular).' },
        { palavra: 'Salvar uma cópia', def: 'Guardar a versão editada sem apagar a original.' },
      ],
      chave: [
        'O app Fotos já edita o essencial: recortar, girar, ajustar',
        'Recortar também muda a proporção da imagem',
        'Salve uma cópia pra preservar o original',
      ],
      porque: 'Ajustar imagens é uma necessidade constante: cortar um documento, endireitar uma foto, clarear uma imagem escura. Saber fazer isso com a ferramenta já instalada resolve no ato, sem instalar nem aprender programas complexos.',
    },
    pratica: {
      instrucao: 'Vamos editar uma imagem no app Fotos.',
      passos: [
        'Abra uma foto no app Fotos e procure o botão "Editar imagem"',
        'Use o "Recortar" pra remover uma borda ou ajustar o enquadramento',
        'Se a foto estiver torta, use o "Girar" pra endireitar',
        'Ajuste o brilho se a imagem estiver escura',
        'Salve usando "salvar uma cópia" pra manter o original',
      ],
    },
    desafio: {
      cenario: 'Ajuste uma imagem: abra-a no editor do app Fotos, recorte pra melhorar o enquadramento ou mudar a proporção, gire se necessário, ajuste brilho e cor, e salve uma cópia preservando a foto original.',
      requisitos: [
        'Abri a imagem no modo de edição',
        'Recortei pra melhorar o enquadramento',
        'Girei a imagem se estava torta',
        'Ajustei brilho ou cor',
        'Salvei uma cópia mantendo o original',
      ],
      dica: 'Se o ajuste não ficou bom, quase todo editor tem o "desfazer" (Ctrl+Z) e a opção de voltar ao original. Não tenha medo de experimentar: enquanto você não salvar por cima do arquivo, a foto original continua segura.',
    },
    validacao: [
      'Abro imagens no modo de edição',
      'Recorto pra melhorar o enquadramento',
      'Giro fotos tortas',
      'Ajusto brilho e cor',
      'Salvo cópia preservando o original',
    ],
  },

  'pc-multimidia-3': {
    trilhaId: 'pc-multimidia', numero: 3, titulo: 'Captura de tela: fotografar o que está na tela',
    tempoTotal: 8, xp: 40, vertice: 'computador', vertente: 'computador',
    aula: {
      gancho: 'Você precisa mostrar pra alguém um erro que apareceu, guardar um comprovante que sumiu da tela, ou registrar uma conversa. A captura de tela — o "print" — resolve tudo isso: ela fotografa exatamente o que está aparecendo no seu computador.',
      conceito: {
        titulo: 'O "print" registra qualquer coisa que está na tela',
        texto: 'A CAPTURA DE TELA (print) cria uma imagem do que está aparecendo no monitor — útil pra guardar comprovantes, mostrar erros a um técnico, salvar uma informação que não dá pra copiar. No Windows há caminhos fáceis: a tecla PRINT SCREEN copia a tela toda; mas o melhor é a FERRAMENTA DE CAPTURA (atalho Tecla Windows + Shift + S), que deixa você selecionar só o pedaço que quer, e já copia pra você colar (Ctrl+V) num e-mail, documento ou WhatsApp. Capturas são imagens normais: dá pra salvar, recortar e enviar como qualquer foto.',
      },
      estrutura: {
        titulo: 'Capturando a tela',
        partes: [
          { simbolo: '📸', desc: 'Print Screen: copia a tela inteira de uma vez.' },
          { simbolo: '✂️', desc: 'Win+Shift+S: seleciona só o pedaço que você quer.' },
          { simbolo: '📋', desc: 'A captura vai pra área de transferência: cole com Ctrl+V.' },
          { simbolo: '💾', desc: 'Dá pra salvar como imagem e enviar como uma foto.' },
        ],
      },
      exemplo: {
        titulo: 'Usando o print no dia a dia',
        celulas: [
          { ref: 'Mostrar um erro ao técnico', valor: 'Capture e envie a tela do erro' },
          { ref: 'Guardar comprovante', valor: 'Print da confirmação de pagamento' },
          { ref: 'Só um pedaço da tela', valor: 'Win+Shift+S e selecione' },
          { ref: 'Colar no WhatsApp Web', valor: 'Ctrl+V cola a captura direto' },
        ],
        formula: 'Win+Shift+S → selecionar → Ctrl+V (ou salvar) = print pronto',
        resultado: 'Você registra e compartilha qualquer coisa que esteja na tela.',
        comentario: 'O atalho Tecla Windows + Shift + S é o mais prático: a tela escurece levemente, você arrasta pra marcar a área desejada e pronto — a imagem já está copiada, esperando você colar onde quiser. Vale memorizar; você vai usar muito.',
      },
      vocabulario: [
        { palavra: 'Captura de tela (print)', def: 'Imagem do que está aparecendo na tela do computador.' },
        { palavra: 'Ferramenta de Captura', def: 'App do Windows pra capturar partes da tela (Win+Shift+S).' },
        { palavra: 'Área de transferência', def: 'Memória temporária onde a captura fica até você colar.' },
      ],
      chave: [
        'O print fotografa o que está na tela',
        'Win+Shift+S captura só o pedaço que você quer',
        'Cole com Ctrl+V ou salve como imagem',
      ],
      porque: 'A captura de tela é uma ferramenta versátil do cotidiano: guardar comprovantes, mostrar problemas, salvar informações. Dominar o print resolve dezenas de situações sem precisar de câmera ou de copiar texto manualmente.',
    },
    pratica: {
      instrucao: 'Vamos praticar a captura de tela.',
      passos: [
        'Abra qualquer tela ou site que você queira capturar',
        'Aperte Tecla Windows + Shift + S',
        'Arraste pra selecionar a área que deseja capturar',
        'Abra um e-mail ou documento e cole com Ctrl+V',
        'Conheça também a opção de salvar a captura como arquivo de imagem',
      ],
    },
    desafio: {
      cenario: 'Domine a captura de tela: use o atalho Win+Shift+S pra selecionar e capturar uma parte da tela, cole o resultado em um documento ou mensagem com Ctrl+V, e saiba também como salvá-la como arquivo de imagem pra enviar depois.',
      requisitos: [
        'Usei o atalho Win+Shift+S',
        'Selecionei a área que queria capturar',
        'Colei a captura com Ctrl+V',
        'Sei salvar a captura como imagem',
        'Entendo os usos do print no dia a dia',
      ],
      dica: 'Para capturar uma tela inteira que rola muito (uma página longa), o print comum só pega o que está visível. Nesses casos, tire vários prints rolando a página, ou prefira salvar a página como PDF (Imprimir → Salvar como PDF).',
    },
    validacao: [
      'Faço captura de tela quando preciso',
      'Seleciono só o pedaço desejado',
      'Colo a captura com Ctrl+V',
      'Salvo a captura como imagem',
      'Uso o print pra comprovantes e suporte',
    ],
  },

  'pc-multimidia-4': {
    trilhaId: 'pc-multimidia', numero: 4, titulo: 'Assistir vídeos e usar o player do computador',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Um vídeo que te mandaram, um filme que você baixou, uma gravação da família. Você dá um clique duplo e... às vezes abre, às vezes não. Entender os players de vídeo e por que alguns arquivos não tocam tira essa frustração comum.',
      conceito: {
        titulo: 'O player toca o vídeo — se entender o formato',
        texto: 'Um PLAYER é o programa que reproduz vídeos. O Windows já vem com um, e um clique duplo no arquivo normalmente abre o vídeo nele, com os controles de sempre: PLAY/PAUSE, a BARRA DE PROGRESSO (pra avançar/voltar arrastando), VOLUME e TELA CHEIA. Às vezes um vídeo "não abre" ou abre sem som: isso geralmente é uma questão de FORMATO/CODEC (o "idioma" em que o vídeo foi salvo) que o player não entende. A solução costuma ser usar um player mais completo e gratuito, como o VLC, que toca praticamente qualquer formato.',
      },
      estrutura: {
        titulo: 'Reproduzindo vídeos',
        partes: [
          { simbolo: '▶️', desc: 'Play/pause e a barra de progresso pra navegar no vídeo.' },
          { simbolo: '🔊', desc: 'Volume e o botão de tela cheia pra assistir melhor.' },
          { simbolo: '🎬', desc: 'Clique duplo no arquivo: abre no player padrão.' },
          { simbolo: '🆚', desc: 'Não abre? É formato/codec — VLC costuma resolver.' },
        ],
      },
      exemplo: {
        titulo: 'Assistindo sem frustração',
        celulas: [
          { ref: 'Avançar uma parte', valor: 'Arraste a barra de progresso' },
          { ref: 'Assistir em tela cheia', valor: 'Botão de tela cheia (ou tecla F)' },
          { ref: 'Vídeo não abre', valor: 'Questão de formato: tente o VLC' },
          { ref: 'Abre sem som', valor: 'Codec de áudio: o VLC costuma tocar' },
        ],
        formula: 'Clique duplo + controles + (VLC pra formatos difíceis) = vídeo no ar',
        resultado: 'Você assiste qualquer vídeo e sabe o que fazer se não abrir.',
        comentario: 'O VLC é um player gratuito, confiável e queridinho justamente porque toca quase tudo sem reclamar de formato. Se você lida com vídeos variados, vale instalá-lo (do site oficial!) e defini-lo como player padrão — acaba com a maioria dos "não abre".',
      },
      vocabulario: [
        { palavra: 'Player', def: 'Programa que reproduz vídeos (e áudios) no computador.' },
        { palavra: 'Formato/codec', def: 'O "idioma" em que o vídeo foi salvo; nem todo player entende todos.' },
        { palavra: 'VLC', def: 'Player gratuito que toca praticamente qualquer formato.' },
      ],
      chave: [
        'O player reproduz o vídeo com controles simples',
        '"Não abre" ou "sem som" costuma ser questão de formato',
        'O VLC, gratuito, toca quase qualquer vídeo',
      ],
      porque: 'Assistir vídeos é uma das atividades mais comuns no computador, e o problema do "não abre" frustra muita gente. Entender players e formatos — e conhecer o VLC — resolve isso de forma definitiva.',
    },
    pratica: {
      instrucao: 'Vamos reproduzir um vídeo e conhecer os controles.',
      passos: [
        'Dê um clique duplo num arquivo de vídeo pra abri-lo no player',
        'Use play/pause e arraste a barra de progresso pra navegar',
        'Ajuste o volume e teste o botão de tela cheia',
        'Se um vídeo não abrir, entenda que pode ser questão de formato',
        'Conheça o VLC como player gratuito que resolve a maioria desses casos',
      ],
    },
    desafio: {
      cenario: 'Reproduza vídeos com domínio: abra um arquivo no player, use os controles de play/pause, progresso, volume e tela cheia, e saiba que problemas de "não abre" ou "sem som" são geralmente de formato, resolvíveis com um player como o VLC.',
      requisitos: [
        'Abri um vídeo no player com clique duplo',
        'Usei play/pause e a barra de progresso',
        'Ajustei volume e tela cheia',
        'Entendi que "não abre" costuma ser formato',
        'Conheço o VLC como solução pra formatos',
      ],
      dica: 'Para assistir a algo online (YouTube, streaming), você usa o navegador, não um player de arquivo — são coisas diferentes. O player de arquivo é pra vídeos que estão salvos no seu computador, pen drive ou que te enviaram.',
    },
    validacao: [
      'Abro vídeos no player do computador',
      'Uso os controles de reprodução',
      'Ajusto volume e tela cheia',
      'Entendo problemas de formato/codec',
      'Conheço o VLC pra formatos difíceis',
    ],
  },

  'pc-multimidia-5': {
    trilhaId: 'pc-multimidia', numero: 5, titulo: 'Som, fones e microfone no computador',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Você conecta o fone e o som continua saindo pela caixa. Ou entra numa chamada e ninguém te ouve. Problemas de áudio no computador são chatos, mas quase sempre têm uma causa boba e uma solução rápida — basta saber onde olhar.',
      conceito: {
        titulo: 'Áudio é escolher a saída e a entrada certas',
        texto: 'O computador pode ter vários caminhos de som: a caixa interna, um fone, um headset. O segredo é que existe um DISPOSITIVO DE SAÍDA selecionado (por onde o som sai) e um DE ENTRADA (o microfone, por onde ele te ouve). A maioria dos problemas é só o dispositivo errado selecionado: você pluga o fone mas o som segue na caixa porque a saída não mudou. No ícone de som (ao lado do relógio) você escolhe a saída na hora. Pra chamadas, confira nas configurações de som se o MICROFONE certo está ativo e com volume — e teste antes de reuniões importantes.',
      },
      estrutura: {
        titulo: 'Resolvendo o áudio',
        partes: [
          { simbolo: '🔊', desc: 'Saída: por onde o som sai (caixa, fone, headset).' },
          { simbolo: '🎤', desc: 'Entrada: o microfone, por onde o PC te ouve.' },
          { simbolo: '🔀', desc: 'Som no lugar errado? Troque a saída no ícone de som.' },
          { simbolo: '🧪', desc: 'Teste o microfone antes de reuniões importantes.' },
        ],
      },
      exemplo: {
        titulo: 'Som no lugar certo',
        celulas: [
          { ref: 'Pluguei o fone, som na caixa', valor: 'Mude a saída pro fone' },
          { ref: 'Ninguém me ouve na chamada', valor: 'Microfone errado ou mudo' },
          { ref: 'Trocar a saída de som', valor: 'Clique no ícone ao lado do relógio' },
          { ref: 'Reunião importante chegando', valor: 'Teste som e microfone antes' },
        ],
        formula: 'Saída certa + microfone ativo + teste prévio = áudio sem surpresa',
        resultado: 'Você ouve e é ouvido, sem o estresse de mexer na hora.',
        comentario: 'Antes de toda reunião online importante, faça um teste rápido: confira se a saída está no fone certo e se o microfone te capta (a barrinha de nível se move quando você fala). Trinta segundos de teste evitam o clássico "vocês estão me ouvindo?".',
      },
      vocabulario: [
        { palavra: 'Dispositivo de saída', def: 'Por onde o som sai: caixa, fone ou headset.' },
        { palavra: 'Dispositivo de entrada', def: 'O microfone, por onde o computador capta sua voz.' },
        { palavra: 'Headset', def: 'Fone com microfone embutido, comum em chamadas.' },
      ],
      chave: [
        'Existe uma saída (som) e uma entrada (microfone) selecionadas',
        'Som no lugar errado = só trocar a saída no ícone de som',
        'Teste microfone e som antes de reuniões',
      ],
      porque: 'Problemas de áudio atrapalham chamadas, vídeos e música — e costumam ser só o dispositivo errado selecionado. Saber escolher a saída e a entrada certas resolve a maioria deles em segundos e evita saias-justas em reuniões.',
    },
    pratica: {
      instrucao: 'Vamos conferir e ajustar o áudio do seu computador.',
      passos: [
        'Clique no ícone de som ao lado do relógio',
        'Veja qual é o dispositivo de saída atual e quais opções existem',
        'Se tiver um fone, conecte e troque a saída pra ele',
        'Abra Configurações → Som e localize o dispositivo de entrada (microfone)',
        'Fale e veja se a barrinha de nível do microfone se move (sinal de que capta)',
      ],
    },
    desafio: {
      cenario: 'Controle o áudio: identifique e troque o dispositivo de saída de som pelo ícone ao lado do relógio, confirme que o microfone certo está ativo e captando sua voz, e adote o hábito de testar áudio antes de reuniões.',
      requisitos: [
        'Localizei o dispositivo de saída de som',
        'Troquei a saída entre caixa e fone',
        'Localizei o microfone (dispositivo de entrada)',
        'Confirmei que o microfone capta minha voz',
        'Adotei o hábito de testar antes de reuniões',
      ],
      dica: 'Cada programa também pode ter seu próprio ajuste de áudio (o volume do navegador, o microfone do app de reunião). Se o som geral está certo mas um programa específico falha, confira as configurações de áudio dentro dele.',
    },
    validacao: [
      'Identifico a saída e a entrada de áudio',
      'Troco a saída de som quando preciso',
      'Confirmo o microfone ativo',
      'Testo o áudio antes de reuniões',
      'Resolvo problemas comuns de som',
    ],
  },

  'pc-multimidia-6': {
    trilhaId: 'pc-multimidia', numero: 6, titulo: 'Passar fotos e vídeos do celular pro computador',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'A memória do celular vive cheia, e aquelas fotos preciosas estão só ali — um aparelho que pode quebrar ou ser perdido. Saber passar fotos e vídeos pro computador libera espaço, faz backup e te dá a tela grande pra organizar tudo.',
      conceito: {
        titulo: 'Há caminhos fáceis pra trazer a mídia do celular',
        texto: 'Passar fotos do celular pro PC tem três caminhos práticos. O CABO USB: conecta o celular no computador, ele aparece como uma pasta (em "Este Computador") e você copia as fotos como copiaria de um pen drive. A NUVEM (Google Fotos, OneDrive): as fotos sobem sozinhas do celular e você as acessa/baixa no PC pelo navegador — sem cabo. E o WHATSAPP WEB ou e-mail pra enviar poucas fotos rapidamente. O cabo é melhor pra mover muitas fotos de uma vez; a nuvem é a mais cômoda e ainda serve de backup automático.',
      },
      estrutura: {
        titulo: 'Os caminhos da transferência',
        partes: [
          { simbolo: '🔌', desc: 'Cabo USB: celular vira pasta no PC, copie como pen drive.' },
          { simbolo: '☁️', desc: 'Nuvem: fotos sobem sozinhas, baixe no PC pelo navegador.' },
          { simbolo: '💬', desc: 'WhatsApp Web/e-mail: rápido pra poucas fotos.' },
          { simbolo: '⚖️', desc: 'Cabo pra muitas fotos; nuvem pra comodidade e backup.' },
        ],
      },
      exemplo: {
        titulo: 'Trazendo a mídia pro PC',
        celulas: [
          { ref: 'Centenas de fotos de uma vez', valor: 'Cabo USB é o mais prático' },
          { ref: 'Sem cabo, automático', valor: 'Google Fotos / OneDrive na nuvem' },
          { ref: 'Só 3 ou 4 fotos', valor: 'WhatsApp Web ou e-mail resolve' },
          { ref: 'Celular vivo cheio', valor: 'Passe pro PC e libere espaço' },
        ],
        formula: 'Cabo (muitas) ou nuvem (cômodo) → fotos no PC + espaço no celular',
        resultado: 'Suas memórias seguras no PC e o celular com espaço de volta.',
        comentario: 'Ao conectar o celular por cabo, pode aparecer no celular um aviso perguntando o que fazer — escolha "Transferir arquivos" (ou "Transferir fotos"). Sem essa permissão, o computador enxerga o celular mas não acessa as fotos; é o passo que mais confunde as pessoas.',
      },
      vocabulario: [
        { palavra: 'Cabo USB', def: 'Cabo que conecta o celular ao PC pra transferir arquivos.' },
        { palavra: 'Transferir arquivos', def: 'O modo que o celular deve usar pra liberar as fotos ao PC.' },
        { palavra: 'Nuvem de fotos', def: 'Serviço (Google Fotos/OneDrive) que guarda e sincroniza fotos.' },
      ],
      chave: [
        'Cabo USB: celular vira pasta, copie como pen drive',
        'Nuvem traz as fotos sem cabo e ainda faz backup',
        'No cabo, escolha "Transferir arquivos" no celular',
      ],
      porque: 'Tirar as fotos do celular pro computador protege memórias insubstituíveis, libera espaço no aparelho e dá a tela grande pra organizar. Conhecer os caminhos torna isso uma tarefa simples, não um bicho de sete cabeças.',
    },
    pratica: {
      instrucao: 'Vamos passar fotos do celular pro computador (escolha um caminho).',
      passos: [
        'Pelo cabo: conecte o celular ao PC e, no celular, escolha "Transferir arquivos"',
        'No PC, abra "Este Computador" e localize o celular como uma pasta',
        'Entre na pasta de fotos (geralmente "DCIM") e copie as fotos pro PC',
        'Pela nuvem: confirme que o Google Fotos/OneDrive sincroniza o celular',
        'Acesse essa nuvem pelo navegador do PC e baixe as fotos que quiser',
      ],
    },
    desafio: {
      cenario: 'Transfira mídia do celular: escolha um caminho (cabo USB ou nuvem), traga algumas fotos ou vídeos do celular pro computador, confirme que chegaram bem e entenda quando cada método é mais vantajoso.',
      requisitos: [
        'Escolhi um caminho de transferência',
        'No cabo, usei o modo "Transferir arquivos"',
        'Copiei fotos/vídeos pro computador',
        'Confirmei que os arquivos chegaram bem',
        'Entendo quando usar cabo e quando usar nuvem',
      ],
      dica: 'Depois de copiar as fotos pro PC e confirmar que estão lá (abra algumas pra ter certeza), aí sim você pode apagá-las do celular com segurança pra liberar espaço. Nunca apague antes de confirmar que a cópia deu certo.',
    },
    validacao: [
      'Conecto o celular ao PC por cabo',
      'Uso o modo "Transferir arquivos"',
      'Copio fotos e vídeos pro computador',
      'Uso a nuvem como alternativa sem cabo',
      'Confirmo a cópia antes de apagar do celular',
    ],
  },

  'pc-multimidia-7': {
    trilhaId: 'pc-multimidia', numero: 7, titulo: 'Formatos de mídia: JPG, PNG, MP4 e companhia',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'JPG, PNG, MP4, MP3... essas siglas no fim dos nomes de arquivo parecem código secreto. Mas cada uma diz que tipo de mídia é aquele arquivo — e entender as principais ajuda a saber o que fazer com cada uma e a escolher a certa quando precisa.',
      conceito: {
        titulo: 'A extensão diz o tipo da mídia',
        texto: 'A EXTENSÃO (as letras após o ponto no nome) identifica o formato do arquivo. Nas imagens: JPG é o mais comum, leve, ótimo pra fotos; PNG é melhor pra imagens com fundo transparente ou texto/desenho nítido. Nos vídeos: MP4 é o padrão universal, toca em quase tudo. Nos áudios: MP3 é o clássico das músicas. Saber isso ajuda em escolhas práticas: enviar uma foto? JPG é leve e serve. Precisa de fundo transparente (uma logo)? PNG. Gravou um vídeo pra compartilhar? MP4 garante que todos consigam abrir. Você não precisa decorar tudo — só reconhecer os principais.',
      },
      estrutura: {
        titulo: 'Os formatos que importam',
        partes: [
          { simbolo: '🖼️', desc: 'JPG: imagem leve e universal, ideal pra fotos.' },
          { simbolo: '🔲', desc: 'PNG: bom pra fundo transparente e texto/desenho nítido.' },
          { simbolo: '🎬', desc: 'MP4: o vídeo padrão, abre em quase tudo.' },
          { simbolo: '🎵', desc: 'MP3: o formato clássico de música/áudio.' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo o formato certo',
        celulas: [
          { ref: 'Enviar uma foto', valor: 'JPG: leve e abre em qualquer lugar' },
          { ref: 'Logo com fundo transparente', valor: 'PNG mantém a transparência' },
          { ref: 'Compartilhar um vídeo', valor: 'MP4 toca em quase todo aparelho' },
          { ref: 'Arquivo de música', valor: 'MP3 é o padrão de áudio' },
        ],
        formula: 'JPG/PNG (imagem) + MP4 (vídeo) + MP3 (áudio) = escolhas certas',
        resultado: 'Você reconhece os formatos e escolhe o adequado pra cada uso.',
        comentario: 'Quando você salva ou exporta algo (no app Fotos, por exemplo), às vezes pode escolher o formato. A regra prática: JPG pra fotos, PNG pra imagens com transparência ou texto, MP4 pra vídeo. Com isso você acerta na esmagadora maioria dos casos do dia a dia.',
      },
      vocabulario: [
        { palavra: 'Extensão', def: 'As letras após o ponto no nome que indicam o tipo do arquivo.' },
        { palavra: 'JPG / PNG', def: 'Formatos de imagem: JPG leve pra fotos; PNG pra transparência.' },
        { palavra: 'MP4 / MP3', def: 'Formatos universais de vídeo (MP4) e áudio/música (MP3).' },
      ],
      chave: [
        'A extensão indica o tipo de mídia do arquivo',
        'JPG pra fotos, PNG pra transparência, MP4 vídeo, MP3 áudio',
        'Você só precisa reconhecer os principais',
      ],
      porque: 'Reconhecer os formatos de mídia tira o mistério das siglas e ajuda em escolhas práticas: que formato enviar, qual abre em todo lugar, qual mantém a qualidade ou a transparência. É um conhecimento simples com uso constante.',
    },
    pratica: {
      instrucao: 'Vamos reconhecer os formatos nos seus arquivos de mídia.',
      passos: [
        'Abra uma pasta com fotos e veja a extensão dos arquivos (.jpg, .png)',
        'Identifique se há vídeos (.mp4) ou áudios (.mp3) por perto',
        'Associe cada extensão ao tipo: imagem, vídeo ou som',
        'Pense num caso real: que formato você usaria pra enviar uma foto leve?',
        'E pra um vídeo que todos consigam abrir? (resposta: MP4)',
      ],
    },
    desafio: {
      cenario: 'Reconheça os formatos de mídia: identifique as extensões dos seus arquivos (JPG, PNG, MP4, MP3), associe cada uma ao seu tipo de mídia e saiba escolher o formato adequado pra situações comuns como enviar uma foto ou compartilhar um vídeo.',
      requisitos: [
        'Identifiquei extensões de imagem (JPG, PNG)',
        'Reconheci vídeo (MP4) e áudio (MP3)',
        'Associei cada extensão ao tipo de mídia',
        'Sei escolher JPG pra fotos e MP4 pra vídeo',
        'Sei quando usar PNG (transparência)',
      ],
      dica: 'Se as extensões não aparecem nos nomes dos arquivos, você pode ativá-las: no Explorador, em "Exibir", marque "Extensões de nomes de arquivos". Ver a extensão ajuda a entender na hora que tipo de arquivo você tem em mãos.',
    },
    validacao: [
      'Reconheço as extensões pela mídia',
      'Sei o uso de JPG e PNG',
      'Sei que MP4 é o vídeo universal',
      'Sei que MP3 é o áudio padrão',
      'Escolho o formato certo pra cada caso',
    ],
  },

  'pc-multimidia-8': {
    trilhaId: 'pc-multimidia', numero: 8, titulo: 'Projeto: organize e monte uma coletânea de memórias',
    tempoTotal: 16, xp: 110, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo num projeto com gostinho de memória afetiva: trazer as fotos pro computador, organizá-las, ajustar as melhores e montar uma coletânea de um momento especial — uma viagem, uma festa, um ano. No fim, você terá um acervo organizado e uma seleção pronta pra compartilhar.',
      conceito: {
        titulo: 'Da bagunça espalhada a uma coletânea pronta',
        texto: 'Este projeto reúne tudo da trilha num fluxo completo de mídia. Você vai TRAZER as fotos do celular pro PC, ORGANIZAR numa pasta com nome claro, SELECIONAR as melhores de um momento especial, AJUSTAR as escolhidas (recortar, endireitar, clarear) e reunir essa seleção numa pasta de "destaques" pronta pra compartilhar. É o ciclo real de quem cuida das próprias memórias: do aparelho lotado e desorganizado a uma coletânea caprichada que você guarda e mostra com prazer. E, de quebra, com backup e espaço liberado no celular.',
      },
      estrutura: {
        titulo: 'O fluxo da coletânea',
        partes: [
          { simbolo: '📥', desc: 'Trazer as fotos do celular pro computador.' },
          { simbolo: '📁', desc: 'Organizar numa pasta com nome claro do momento.' },
          { simbolo: '⭐', desc: 'Selecionar e favoritar as melhores.' },
          { simbolo: '✨', desc: 'Ajustar as escolhidas e reunir os destaques.' },
        ],
      },
      exemplo: {
        titulo: 'A coletânea montada',
        celulas: [
          { ref: 'Fotos no celular', valor: 'Trazidas e copiadas pro PC' },
          { ref: 'Pasta "Viagem Praia 2025"', valor: 'Acervo do momento organizado' },
          { ref: 'As 15 melhores', valor: 'Selecionadas e ajustadas' },
          { ref: 'Pasta "Destaques"', valor: 'Seleção pronta pra compartilhar' },
        ],
        formula: 'Trazer + organizar + selecionar + ajustar = coletânea de memórias',
        resultado: 'Um momento especial preservado, organizado e pronto pra mostrar.',
        comentario: 'Coletâneas assim são presentes em potencial: uma pasta de destaques de uma viagem em família, ajustada e organizada, vira uma lembrança que dá pra compartilhar com todos no grupo, imprimir as melhores ou guardar pra rever. Cuidar das memórias é um gesto que vale a pena.',
      },
      vocabulario: [
        { palavra: 'Coletânea', def: 'Uma seleção organizada das melhores fotos de um momento.' },
        { palavra: 'Destaques', def: 'A pasta com as fotos escolhidas, prontas pra mostrar.' },
        { palavra: 'Fluxo de mídia', def: 'O ciclo de trazer, organizar, ajustar e reunir a mídia.' },
      ],
      chave: [
        'O projeto reúne todo o ciclo de cuidar das memórias',
        'Do celular lotado a uma coletânea organizada e ajustada',
        'A seleção de destaques fica pronta pra compartilhar',
      ],
      porque: 'Reunir as habilidades num projeto afetivo consolida o aprendizado e entrega algo de valor real: suas memórias preservadas, organizadas e prontas pra compartilhar — com o bônus do backup e do espaço liberado no celular.',
    },
    pratica: {
      instrucao: 'Vamos montar sua coletânea de memórias passo a passo.',
      passos: [
        'Escolha um momento especial (viagem, festa, um período) pra ser o tema',
        'Traga as fotos desse momento do celular pro computador',
        'Crie uma pasta com nome claro (ex.: "Aniversário 2025") e organize as fotos ali',
        'Selecione e favorite as melhores fotos do momento',
        'Ajuste as escolhidas (recortar, endireitar, clarear) e reúna numa pasta "Destaques"',
        'Confira o resultado: uma coletânea organizada e pronta pra compartilhar',
      ],
    },
    desafio: {
      cenario: 'Monte uma coletânea de memórias: traga fotos de um momento especial do celular pro PC, organize numa pasta nomeada, selecione e ajuste as melhores, e reúna uma seleção de destaques pronta pra guardar e compartilhar.',
      requisitos: [
        'Trouxe as fotos do momento pro computador',
        'Organizei numa pasta com nome claro',
        'Selecionei e favoritei as melhores',
        'Ajustei as fotos escolhidas',
        'Reuni uma pasta de destaques pra compartilhar',
      ],
      dica: 'Depois de montar a coletânea, garanta que ela esteja no seu backup (nuvem ou HD externo) — afinal, são memórias insubstituíveis. E, se quiser, compartilhe os destaques com quem viveu o momento: organizar pra guardar é bom, mas dividir é melhor ainda.',
    },
    validacao: [
      'Trago fotos do celular pro PC',
      'Organizo um momento em pasta nomeada',
      'Seleciono e ajusto as melhores',
      'Reúno uma coletânea de destaques',
      'Guardo no backup e compartilho',
    ],
  },
};
