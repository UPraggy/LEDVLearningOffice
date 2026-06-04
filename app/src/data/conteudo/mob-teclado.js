// ============================================================================
// CONTEÚDO — Teclado: Digitar, Ditar e Corrigir (mob-teclado)
// Conhecer o teclado, maiúsculas e números, autocorreção e sugestões, ditado
// por voz, copiar e colar, emojis e pontuação, idiomas e acentos, e um projeto
// de escrever uma mensagem completa com tranquilidade. Digitar sem sofrer.
// ============================================================================

export const MOB_TECLADO = {
  'mob-teclado-1': {
    trilhaId: 'mob-teclado', numero: 1, titulo: 'Conhecer o teclado da tela',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Digitar no celular pode parecer uma luta: a tecla é pequena, some, muda. Mas o teclado da tela tem uma lógica simples — e, quando você entende como ele se organiza, escrever deixa de ser sofrimento e vira algo natural.',
      conceito: {
        titulo: 'O teclado aparece quando você precisa dele',
        texto: 'O TECLADO do celular não é físico: ele SURGE NA TELA toda vez que você toca num campo onde dá pra escrever (a caixa de mensagem, a busca, um formulário). Ele tem as letras, e teclas especiais que mudam o que aparece: a tecla de MAIÚSCULA (uma setinha pra cima), a que troca pra NÚMEROS E SÍMBOLOS (geralmente "123"), a BARRA DE ESPAÇO (a tecla larga embaixo) e o APAGAR (um X ou seta com risco, pra corrigir). Quando você termina, o teclado some sozinho ou ao tocar fora dele. Entender essas teclas-chave é o primeiro passo pra digitar com calma.',
      },
      estrutura: {
        titulo: 'As teclas que importam',
        partes: [
          { simbolo: '⬆️', desc: 'Maiúscula (seta pra cima): deixa a próxima letra grande.' },
          { simbolo: '🔢', desc: 'Tecla "123": troca pra números e símbolos.' },
          { simbolo: '␣', desc: 'Barra de espaço: a tecla larga, separa palavras.' },
          { simbolo: '⌫', desc: 'Apagar: corrige a última letra digitada.' },
        ],
      },
      exemplo: {
        titulo: 'Achando cada tecla',
        celulas: [
          { ref: 'Quero começar com letra grande', valor: 'Toco na seta de maiúscula antes' },
          { ref: 'Preciso digitar um número', valor: 'Toco em "123"' },
          { ref: 'Separar duas palavras', valor: 'Toco na barra de espaço' },
          { ref: 'Errei uma letra', valor: 'Toco em apagar pra corrigir' },
        ],
        formula: 'Letras + maiúscula + "123" + espaço + apagar = tudo que você precisa',
        resultado: 'Você reconhece as teclas essenciais e digita com confiança.',
        comentario: 'Não tenha pressa nem medo de errar: o teclado não quebra nada. Toque devagar, observe o que cada tecla faz e, com o apagar sempre à mão pra corrigir, você pode experimentar à vontade até pegar o jeito. A prática faz tudo ficar natural.',
      },
      vocabulario: [
        { palavra: 'Teclado da tela', def: 'O teclado que surge na tela pra você digitar.' },
        { palavra: 'Tecla de maiúscula', def: 'A seta pra cima que deixa a próxima letra grande.' },
        { palavra: 'Apagar', def: 'A tecla que remove a última letra, pra corrigir erros.' },
      ],
      chave: [
        'O teclado surge na tela quando você vai escrever',
        'Maiúscula, "123", espaço e apagar são as teclas-chave',
        'Dá pra experimentar à vontade: o apagar corrige tudo',
      ],
      porque: 'O teclado pequeno da tela intimida muita gente e trava o uso do celular pra escrever. Conhecer suas teclas essenciais — e entender que dá pra errar e corrigir sem medo — destrava a digitação e abre as portas pra se comunicar.',
    },
    pratica: {
      instrucao: 'Vamos conhecer o teclado do seu celular.',
      passos: [
        'Abra o app de mensagens e toque na caixa de escrever: o teclado surge',
        'Localize a tecla de maiúscula (seta pra cima) e a barra de espaço',
        'Encontre a tecla "123" e veja que aparecem números e símbolos',
        'Volte pras letras e localize a tecla de apagar',
        'Digite seu nome devagar, usando maiúscula na primeira letra',
      ],
    },
    desafio: {
      cenario: 'Conheça o teclado: identifique as teclas essenciais (maiúscula, "123", espaço, apagar), entenda o que cada uma faz, e pratique digitar seu nome com calma, corrigindo livremente com a tecla de apagar sempre que precisar.',
      requisitos: [
        'Fiz o teclado surgir tocando num campo de texto',
        'Localizei a tecla de maiúscula',
        'Achei a tecla "123" de números e símbolos',
        'Identifiquei a barra de espaço e o apagar',
        'Digitei meu nome com calma, corrigindo erros',
      ],
      dica: 'Se as teclas parecem pequenas demais, segure o celular na horizontal (deitado): o teclado fica maior e mais espaçado. E há como aumentar o tamanho do teclado nas configurações — veremos isso na trilha de acessibilidade.',
    },
    validacao: [
      'Faço o teclado surgir quando preciso escrever',
      'Reconheço a tecla de maiúscula',
      'Acho os números e símbolos no "123"',
      'Uso a barra de espaço e o apagar',
      'Digito com calma, corrigindo sem medo',
    ],
  },

  'mob-teclado-2': {
    trilhaId: 'mob-teclado', numero: 2, titulo: 'Maiúsculas, números e símbolos',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Você quer escrever um nome com letra grande, digitar um valor com vírgula, ou colocar a arroba do e-mail — e some aquela tecla. Onde está? Entender como o teclado troca entre letras, maiúsculas, números e símbolos resolve essa procura.',
      conceito: {
        titulo: 'O teclado tem "camadas" que você alterna',
        texto: 'O teclado mostra letras minúsculas por padrão, mas guarda outras camadas. A tecla de MAIÚSCULA (seta pra cima) deixa a próxima letra grande; tocando duas vezes, ela trava em MAIÚSCULAS (tudo grande) até você desligar — útil pra siglas. A tecla "123" revela os NÚMEROS e os símbolos comuns (vírgula, ponto, arroba @, traço). Às vezes há ainda uma tecla pra símbolos extras (#+= ou "+"). E muitas teclas escondem caracteres: SEGURANDO uma tecla aparecem variações (segurar a tecla de ponto pode revelar outros sinais). É só alternar entre essas camadas conforme o que você precisa.',
      },
      estrutura: {
        titulo: 'Navegando entre as camadas',
        partes: [
          { simbolo: '🔠', desc: 'Maiúscula: uma vez pra próxima letra; duas pra travar.' },
          { simbolo: '1️⃣', desc: 'Tecla "123": abre números e símbolos comuns.' },
          { simbolo: '➕', desc: 'Símbolos extras: às vezes numa segunda tecla (#+=).' },
          { simbolo: '👇', desc: 'Segurar uma tecla revela variações escondidas.' },
        ],
      },
      exemplo: {
        titulo: 'Achando cada caractere',
        celulas: [
          { ref: 'Nome próprio com inicial grande', valor: 'Maiúscula uma vez antes da letra' },
          { ref: 'Uma sigla toda em maiúscula', valor: 'Toco duas vezes pra travar' },
          { ref: 'A arroba do e-mail (@)', valor: 'Tecla "123", aí o @' },
          { ref: 'Símbolos especiais escondidos', valor: 'Seguro a tecla pra ver variações' },
        ],
        formula: 'Maiúscula + "123" + segurar teclas = qualquer caractere que precisar',
        resultado: 'Você acha maiúsculas, números e símbolos sem se perder.',
        comentario: 'A arroba (@), tão necessária pra e-mails, costuma estar na camada de números/símbolos (tecla "123"). Se você procura algum símbolo e não acha de cara, alterne entre as camadas e experimente segurar as teclas — quase sempre ele está ali, a um toque de distância.',
      },
      vocabulario: [
        { palavra: 'Camada do teclado', def: 'Cada conjunto de teclas: letras, números, símbolos.' },
        { palavra: 'Travar maiúsculas', def: 'Tocar 2x na maiúscula pra digitar tudo em letra grande.' },
        { palavra: 'Segurar a tecla', def: 'Manter o dedo numa tecla pra revelar caracteres extras.' },
      ],
      chave: [
        'O teclado tem camadas: letras, maiúsculas, números, símbolos',
        'Maiúscula 2x trava tudo grande; "123" abre números',
        'Segurar uma tecla revela variações escondidas',
      ],
      porque: 'Procurar um símbolo ou alternar maiúsculas frustra quem está começando. Entender as camadas do teclado e o truque de segurar teclas dá acesso a qualquer caractere — números, arroba, acentos — sem perder tempo procurando.',
    },
    pratica: {
      instrucao: 'Vamos explorar as camadas do teclado.',
      passos: [
        'Toque uma vez na maiúscula e digite uma letra grande; veja que volta ao normal',
        'Toque duas vezes na maiúscula e escreva uma sigla (ex.: "SUS")',
        'Toque em "123" e localize a vírgula, o ponto e a arroba (@)',
        'Procure uma tecla de símbolos extras, se houver',
        'Segure a tecla de ponto (ou outra) e veja se aparecem variações',
      ],
    },
    desafio: {
      cenario: 'Domine as camadas: use a maiúscula simples e travada, acesse números e símbolos pela tecla "123", encontre a arroba, e experimente segurar teclas pra revelar caracteres extras escondidos.',
      requisitos: [
        'Usei a maiúscula pra uma letra e travada pra sigla',
        'Acessei números e símbolos pela tecla "123"',
        'Localizei a arroba (@) e a vírgula',
        'Procurei símbolos extras numa segunda camada',
        'Segurei uma tecla pra ver variações escondidas',
      ],
      dica: 'Em muitos teclados, depois de você digitar um ponto final e um espaço, a próxima letra já vira maiúscula sozinha (início de frase). Repare nisso: o teclado ajuda automaticamente em várias situações, poupando seu trabalho.',
    },
    validacao: [
      'Uso maiúscula simples e travada',
      'Acesso números e símbolos no "123"',
      'Encontro a arroba e a pontuação',
      'Procuro símbolos extras quando preciso',
      'Seguro teclas pra achar variações',
    ],
  },

  'mob-teclado-3': {
    trilhaId: 'mob-teclado', numero: 3, titulo: 'Autocorreção e sugestões de palavras',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Você digita "obirgado" e o celular conserta pra "obrigado" sozinho. Mas às vezes ele "conserta" o que estava certo, trocando uma palavra por outra e te deixando irritado. Entender a autocorreção faz ela trabalhar a seu favor, não contra.',
      conceito: {
        titulo: 'O teclado tenta adivinhar e corrigir o que você escreve',
        texto: 'A AUTOCORREÇÃO conserta erros de digitação automaticamente, e as SUGESTÕES (as palavras que aparecem numa fileira acima do teclado) oferecem a próxima palavra provável pra você tocar e escrever mais rápido. Isso acelera muito a digitação. O lado chato é quando ele corrige errado — troca um nome ou uma gíria por outra palavra. Quando isso acontecer: toque na palavra sugerida certa, ou apague e redigite que ele costuma aprender. Você também pode aceitar uma sugestão tocando nela, em vez de digitar a palavra inteira. Com o tempo, o teclado aprende seu jeito de escrever.',
      },
      estrutura: {
        titulo: 'Convivendo com a autocorreção',
        partes: [
          { simbolo: '✅', desc: 'Autocorreção: conserta erros de digitação sozinha.' },
          { simbolo: '💡', desc: 'Sugestões: palavras prováveis pra tocar e ir mais rápido.' },
          { simbolo: '↩️', desc: 'Corrigiu errado? Toque na palavra certa ou redigite.' },
          { simbolo: '🧠', desc: 'O teclado aprende seu jeito com o uso.' },
        ],
      },
      exemplo: {
        titulo: 'Deixando a correção ajudar',
        celulas: [
          { ref: 'Digitei "obirgado"', valor: 'Vira "obrigado" sozinho' },
          { ref: 'Já sei a próxima palavra', valor: 'Toco na sugestão, não digito tudo' },
          { ref: 'Trocou meu nome por outra coisa', valor: 'Toco na palavra certa pra corrigir' },
          { ref: 'Sempre erra uma palavra minha', valor: 'Redigito; ele aprende com o tempo' },
        ],
        formula: 'Autocorreção + sugestões + corrigir os enganos = digitar mais rápido',
        resultado: 'Você escreve com agilidade e contorna as correções erradas.',
        comentario: 'Sempre dê uma relida na mensagem antes de enviar, de olho nas autocorreções: é comum o teclado trocar uma palavra sem você perceber, gerando aquelas mensagens engraçadas (ou constrangedoras). Uma conferida rápida evita o famoso "corretor maluco".',
      },
      vocabulario: [
        { palavra: 'Autocorreção', def: 'Recurso que conserta erros de digitação automaticamente.' },
        { palavra: 'Sugestões', def: 'Palavras prováveis exibidas acima do teclado pra tocar.' },
        { palavra: 'Aprender', def: 'O teclado memoriza palavras que você usa muito.' },
      ],
      chave: [
        'Autocorreção conserta erros; sugestões aceleram a escrita',
        'Corrigiu errado? Toque na palavra certa ou redigite',
        'Releia antes de enviar pra pegar trocas indevidas',
      ],
      porque: 'A autocorreção é uma grande aliada da digitação, mas frustra quando erra. Entender como ela funciona — e como corrigir e ensiná-la — transforma um recurso irritante numa ajuda que acelera a escrita e reduz erros.',
    },
    pratica: {
      instrucao: 'Vamos observar a autocorreção e as sugestões em ação.',
      passos: [
        'Abra a caixa de mensagem e digite uma palavra com um errinho de propósito',
        'Veja se o teclado a corrige sozinho ao continuar',
        'Repare na fileira de sugestões acima do teclado enquanto digita',
        'Toque numa sugestão e veja a palavra ser escrita inteira',
        'Se algo for corrigido errado, pratique tocar na palavra certa',
      ],
    },
    desafio: {
      cenario: 'Entenda a autocorreção: observe-a consertando erros, use as sugestões pra digitar mais rápido tocando nas palavras, e pratique corrigir quando o teclado troca uma palavra indevidamente — sempre relendo antes de enviar.',
      requisitos: [
        'Vi a autocorreção consertar um erro',
        'Reparei na fileira de sugestões de palavras',
        'Usei uma sugestão pra escrever mais rápido',
        'Corrigi uma troca indevida do teclado',
        'Adotei reler a mensagem antes de enviar',
      ],
      dica: 'Se a autocorreção te atrapalha mais do que ajuda, ela pode ser desligada nas configurações do teclado. Mas, antes de desligar, vale dar uma chance: para a maioria das pessoas, ela ajuda mais do que atrapalha quando bem entendida.',
    },
    validacao: [
      'Entendo como a autocorreção funciona',
      'Uso as sugestões pra digitar mais rápido',
      'Corrijo trocas indevidas do teclado',
      'Releio antes de enviar a mensagem',
      'Sei que dá pra ajustar a autocorreção',
    ],
  },

  'mob-teclado-4': {
    trilhaId: 'mob-teclado', numero: 4, titulo: 'Ditado por voz: falar em vez de digitar',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'E se você pudesse simplesmente falar e o celular escrever pra você? Pode! O ditado por voz transforma sua fala em texto — uma mão na roda pra quem acha o teclado cansativo ou tem dificuldade com as teclas pequenas. É um dos recursos mais libertadores do celular.',
      conceito: {
        titulo: 'O microfone do teclado escreve o que você fala',
        texto: 'O DITADO POR VOZ é um recurso do próprio teclado: há um ícone de MICROFONE (geralmente perto da barra de espaço). Você toca nele, fala normalmente, e o celular CONVERTE sua voz em texto escrito, na hora. É ótimo pra mensagens mais longas, pra quem digita devagar, ou tem dificuldade visual ou motora. Funciona melhor num lugar sem barulho e falando com clareza, em ritmo natural. Você pode até falar a pontuação ("vírgula", "ponto", "ponto de interrogação") pra ela aparecer. Depois, é só revisar o texto e corrigir o que precisar antes de enviar.',
      },
      estrutura: {
        titulo: 'Usando o ditado',
        partes: [
          { simbolo: '🎤', desc: 'Ícone de microfone no teclado: ativa o ditado.' },
          { simbolo: '🗣️', desc: 'Fale com clareza e em ritmo natural.' },
          { simbolo: '🔇', desc: 'Funciona melhor num lugar sem barulho.' },
          { simbolo: '✏️', desc: 'Revise e corrija o texto antes de enviar.' },
        ],
      },
      exemplo: {
        titulo: 'Falando o que quer escrever',
        celulas: [
          { ref: 'Mensagem longa, cansa digitar', valor: 'Toco no microfone e falo' },
          { ref: 'Dificuldade com teclas pequenas', valor: 'O ditado resolve sem teclado' },
          { ref: 'Quero uma vírgula no texto', valor: 'Falo "vírgula" enquanto dito' },
          { ref: 'Terminei de ditar', valor: 'Reviso e corrijo antes de enviar' },
        ],
        formula: 'Microfone + falar claro + revisar = texto escrito sem digitar',
        resultado: 'Você escreve mensagens inteiras só falando, com conforto.',
        comentario: 'Não confunda o ditado por voz com o áudio do WhatsApp: o áudio envia sua voz gravada; o ditado transforma sua voz em texto escrito, que vai como mensagem normal. O ditado é perfeito pra quando você quer o texto escrito, mas sem o trabalho de digitar.',
      },
      vocabulario: [
        { palavra: 'Ditado por voz', def: 'Recurso que transforma sua fala em texto escrito.' },
        { palavra: 'Microfone do teclado', def: 'O ícone que ativa o ditado por voz.' },
        { palavra: 'Converter voz em texto', def: 'O celular transcreve o que você fala.' },
      ],
      chave: [
        'O ditado transforma sua fala em texto escrito',
        'Toque no microfone do teclado, fale claro num lugar quieto',
        'É diferente do áudio: aqui sai texto escrito',
      ],
      porque: 'O ditado por voz é libertador, especialmente pra quem tem dificuldade com o teclado pequeno, digita devagar ou tem limitações visuais/motoras. Escrever só falando torna a comunicação muito mais fácil e acessível.',
    },
    pratica: {
      instrucao: 'Vamos experimentar o ditado por voz.',
      passos: [
        'Abra a caixa de mensagem e localize o ícone de microfone no teclado',
        'Toque nele (se pedir permissão de microfone, permita)',
        'Fale uma frase curta com clareza, num lugar sem barulho',
        'Veja sua fala virar texto na tela',
        'Revise o texto, corrija o que precisar e veja como ficou',
      ],
    },
    desafio: {
      cenario: 'Use o ditado por voz: ative o microfone do teclado, fale uma mensagem com clareza num ambiente silencioso, veja sua fala virar texto, e revise antes de enviar — entendendo que isso gera texto escrito, diferente de um áudio.',
      requisitos: [
        'Localizei o microfone de ditado no teclado',
        'Ativei o ditado e permiti o microfone',
        'Falei uma frase e ela virou texto',
        'Revisei e corrigi o texto ditado',
        'Entendi a diferença entre ditado e áudio',
      ],
      dica: 'Se o ditado errar algumas palavras, não desanime: corrija manualmente esses trechos pelo teclado. O ditado raramente acerta 100%, mas adianta a maior parte do texto — você só ajusta os detalhes, o que ainda é muito mais rápido que digitar tudo.',
    },
    validacao: [
      'Ativo o ditado pelo microfone do teclado',
      'Falo com clareza pra virar texto',
      'Uso o ditado em lugares silenciosos',
      'Reviso e corrijo o texto ditado',
      'Sei a diferença entre ditado e áudio',
    ],
  },

  'mob-teclado-5': {
    trilhaId: 'mob-teclado', numero: 5, titulo: 'Copiar e colar no celular',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Alguém te mandou um endereço, um código, um texto — e você precisa usá-lo noutro lugar. Redigitar tudo é trabalhoso e cheio de erros. Copiar e colar resolve: pega o texto de um canto e leva pra outro, igualzinho, em segundos.',
      conceito: {
        titulo: 'Copiar leva o texto; colar o entrega no destino',
        texto: 'COPIAR e COLAR no celular funciona com o toque longo. Pra copiar: SEGURE o dedo sobre uma palavra até ela ficar marcada (destacada); aparecem alças pra ajustar o trecho e um menu com "Copiar". O texto fica guardado invisível na memória. Pra colar: vá ao lugar de destino (outra mensagem, a busca, um campo), SEGURE o dedo ali e toque em "Colar". O texto aparece igualzinho. É perfeito pra mover códigos, links, endereços e textos longos sem redigitar nem errar. Funciona entre apps diferentes: copie de um, cole noutro.',
      },
      estrutura: {
        titulo: 'O gesto de copiar e colar',
        partes: [
          { simbolo: '👆', desc: 'Segurar sobre o texto: marca a palavra (destaque).' },
          { simbolo: '↔️', desc: 'Alças ajustam o trecho selecionado.' },
          { simbolo: '📋', desc: '"Copiar" guarda o texto na memória.' },
          { simbolo: '📥', desc: 'Segurar no destino e "Colar" entrega o texto.' },
        ],
      },
      exemplo: {
        titulo: 'Movendo texto sem redigitar',
        celulas: [
          { ref: 'Recebi um código por mensagem', valor: 'Copio e colo onde preciso' },
          { ref: 'Um link pra abrir no navegador', valor: 'Copio o link, colo na barra' },
          { ref: 'Endereço pra mandar a alguém', valor: 'Copio de um app, colo noutro' },
          { ref: 'Texto longo pra reaproveitar', valor: 'Copiar e colar evita redigitar' },
        ],
        formula: 'Segurar + Copiar → segurar no destino + Colar = texto movido igualzinho',
        resultado: 'Você transfere qualquer texto entre apps, sem erro nem trabalho.',
        comentario: 'Para selecionar um trecho maior que uma palavra, depois do toque longo arraste as alças (as bolinhas nas pontas do destaque) pra esticar a seleção até pegar tudo que você quer. Pra selecionar tudo de uma vez, costuma haver a opção "Selecionar tudo" no menu.',
      },
      vocabulario: [
        { palavra: 'Copiar', def: 'Guardar um texto selecionado na memória do celular.' },
        { palavra: 'Colar', def: 'Inserir o texto copiado num novo lugar.' },
        { palavra: 'Alças de seleção', def: 'As bolinhas que ajustam o trecho de texto marcado.' },
      ],
      chave: [
        'Toque longo marca o texto; o menu traz "Copiar"',
        'No destino, toque longo e "Colar" entrega o texto',
        'Funciona entre apps: copie de um, cole noutro',
      ],
      porque: 'Copiar e colar evita redigitar códigos, links e textos — economizando tempo e eliminando erros de digitação. É uma das habilidades mais úteis do celular, presente em incontáveis situações do dia a dia.',
    },
    pratica: {
      instrucao: 'Vamos praticar copiar e colar um texto.',
      passos: [
        'Abra uma mensagem ou texto qualquer no celular',
        'Segure o dedo sobre uma palavra até ela ficar destacada',
        'Ajuste a seleção com as alças, se quiser pegar mais texto, e toque em "Copiar"',
        'Vá até a caixa de busca ou outra mensagem',
        'Segure o dedo no campo e toque em "Colar" pra ver o texto aparecer',
      ],
    },
    desafio: {
      cenario: 'Domine copiar e colar: selecione um texto com o toque longo e as alças, copie-o, vá a outro campo ou app, e cole o texto igualzinho — entendendo como mover códigos, links e textos sem redigitar.',
      requisitos: [
        'Selecionei um texto com toque longo',
        'Ajustei a seleção com as alças',
        'Copiei o texto pelo menu',
        'Colei o texto noutro campo',
        'Entendi que funciona entre apps diferentes',
      ],
      dica: 'Copiar e colar é especialmente seguro pra digitar códigos de confirmação (aqueles números que chegam por SMS): em vez de digitar e arriscar errar, copie o código da mensagem e cole no campo. Menos erro, mais rapidez.',
    },
    validacao: [
      'Seleciono texto com o toque longo',
      'Ajusto a seleção com as alças',
      'Copio o texto que preciso',
      'Colo o texto no destino certo',
      'Movo texto entre apps diferentes',
    ],
  },

  'mob-teclado-6': {
    trilhaId: 'mob-teclado', numero: 6, titulo: 'Emojis e a pontuação que dá tom',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Uma mensagem só com texto pode soar seca ou ser mal interpretada. Um emoji ou um sinal de pontuação no lugar certo muda tudo: deixa o recado mais caloroso, mais claro, mais você. São pequenos toques que fazem grande diferença na conversa.',
      conceito: {
        titulo: 'Emojis e pontuação dão emoção e clareza ao texto',
        texto: 'Os EMOJIS são aqueles desenhinhos (carinhas, corações, símbolos) que expressam emoção e tom — um sorriso, um coração, um joinha. Você os acessa por uma tecla de CARINHA (geralmente perto da barra de espaço), que abre um painel cheio deles, organizados por categorias, com uma busca. A PONTUAÇÃO também dá tom: o ponto de interrogação faz uma pergunta, o de exclamação dá ênfase, as reticências (...) sugerem pausa. Juntos, emojis e pontuação evitam que sua mensagem soe fria ou seja mal entendida. Use com naturalidade, sem exagero — um ou dois emojis comunicam melhor que dez.',
      },
      estrutura: {
        titulo: 'Dando tom à mensagem',
        partes: [
          { simbolo: '😊', desc: 'Tecla de carinha: abre o painel de emojis.' },
          { simbolo: '🔍', desc: 'Busca de emoji: escreva "coração" e ele aparece.' },
          { simbolo: '❓', desc: 'Pontuação: interrogação pergunta, exclamação enfatiza.' },
          { simbolo: '👌', desc: 'Use com equilíbrio: poucos emojis comunicam melhor.' },
        ],
      },
      exemplo: {
        titulo: 'Pequenos toques, grande diferença',
        celulas: [
          { ref: '"Obrigado" pode soar seco', valor: '"Obrigado! 😊" fica caloroso' },
          { ref: 'Quero perguntar algo', valor: 'Uso o ponto de interrogação (?)' },
          { ref: 'Procurar um emoji específico', valor: 'Uso a busca do painel de emoji' },
          { ref: 'Encher de emojis', valor: 'Melhor usar poucos, com sentido' },
        ],
        formula: 'Emoji certo + pontuação adequada = mensagem com tom e clareza',
        resultado: 'Seus recados soam calorosos e são entendidos como você quis.',
        comentario: 'Cuidado com a ambiguidade de alguns emojis: nem todos significam o mesmo pra todo mundo, e certos desenhinhos podem ter sentidos que você não imagina. Na dúvida, prefira os mais clássicos e universais (sorriso, joinha, coração) — eles comunicam bem sem risco de mal-entendido.',
      },
      vocabulario: [
        { palavra: 'Emoji', def: 'Pequeno desenho que expressa emoção ou ideia na mensagem.' },
        { palavra: 'Painel de emojis', def: 'A tela com todos os emojis, organizados e com busca.' },
        { palavra: 'Pontuação', def: 'Sinais (? ! ...) que dão tom e clareza ao texto.' },
      ],
      chave: [
        'Emojis dão emoção; a pontuação dá tom e clareza',
        'A tecla de carinha abre o painel, com busca',
        'Use com equilíbrio: poucos comunicam melhor',
      ],
      porque: 'Mensagens só com texto podem soar frias ou ser mal interpretadas. Emojis e pontuação adicionam calor humano e clareza ao que você escreve, tornando a comunicação mais expressiva, agradável e próxima.',
    },
    pratica: {
      instrucao: 'Vamos dar tom a uma mensagem com emojis e pontuação.',
      passos: [
        'Abra a caixa de mensagem e escreva uma saudação curta',
        'Localize a tecla de carinha (emoji) perto da barra de espaço',
        'Abra o painel, navegue pelas categorias e use a busca (ex.: "sorriso")',
        'Adicione um ou dois emojis que combinem com a mensagem',
        'Releia usando pontuação pra dar o tom certo (! ou ?)',
      ],
    },
    desafio: {
      cenario: 'Dê tom às mensagens: acesse o painel de emojis pela tecla de carinha, use a busca pra achar o emoji ideal, adicione-o com equilíbrio, e combine com pontuação adequada pra deixar o recado caloroso e claro.',
      requisitos: [
        'Localizei a tecla de emoji (carinha)',
        'Naveguei pelo painel e usei a busca',
        'Adicionei emojis com equilíbrio',
        'Usei pontuação pra dar tom à mensagem',
        'Preferi emojis clássicos e claros',
      ],
      dica: 'O painel de emojis costuma mostrar primeiro os que você mais usa (uma seção de "recentes ou frequentes"), o que agiliza muito no dia a dia. Assim, seus emojis favoritos ficam sempre à mão, sem precisar procurar toda vez.',
    },
    validacao: [
      'Abro o painel de emojis pela carinha',
      'Uso a busca pra achar emojis',
      'Adiciono emojis com equilíbrio',
      'Uso pontuação pra dar tom',
      'Prefiro emojis claros e universais',
    ],
  },

  'mob-teclado-7': {
    trilhaId: 'mob-teclado', numero: 7, titulo: 'Acentos, cedilha e outros idiomas',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Escrever bem em português pede acentos e o cedilha: "você", "não", "coração", "ação". Sem eles, o texto fica estranho e até muda de sentido. Saber colocar acentos com facilidade deixa suas mensagens corretas e bem-escritas.',
      conceito: {
        titulo: 'Os acentos estão a um toque longo de distância',
        texto: 'No teclado do celular, os ACENTOS aparecem ao SEGURAR a letra: mantenha o dedo sobre a vogal e surgem as versões acentuadas (segurar o "a" mostra á, à, ã, â; segurar o "c" mostra ç). Você desliza o dedo até a opção certa e solta. A autocorreção também ajuda muito: muitas vezes você digita sem acento e ela completa sozinha ("voce" vira "você"). Para quem escreve em mais de um IDIOMA, dá pra adicionar outros teclados nas configurações e alternar entre eles (uma tecla de globo 🌐 troca o idioma) — útil pra quem usa inglês ou espanhol, por exemplo.',
      },
      estrutura: {
        titulo: 'Acentuando com facilidade',
        partes: [
          { simbolo: '👇', desc: 'Segurar a vogal: aparecem as versões acentuadas.' },
          { simbolo: 'ç', desc: 'Segurar o "c": surge o cedilha (ç).' },
          { simbolo: '✅', desc: 'A autocorreção completa muitos acentos sozinha.' },
          { simbolo: '🌐', desc: 'Tecla de globo: alterna entre idiomas do teclado.' },
        ],
      },
      exemplo: {
        titulo: 'Acentos no lugar certo',
        celulas: [
          { ref: 'Escrever "coração"', valor: 'Seguro o "a" pra achar o ã' },
          { ref: 'A cedilha de "ação"', valor: 'Seguro o "c" pra achar o ç' },
          { ref: 'Digitei "voce" sem acento', valor: 'A autocorreção vira "você"' },
          { ref: 'Escrevo também em inglês', valor: 'Adiciono o idioma e troco no globo' },
        ],
        formula: 'Segurar a letra + autocorreção + idiomas = português correto e mais',
        resultado: 'Suas mensagens saem bem-escritas, com acentos e cedilha certos.',
        comentario: 'Confie bastante na autocorreção pros acentos do dia a dia: na prática, você pode digitar a maioria das palavras sem se preocupar e ela completa os acentos sozinha. Segurar a letra fica reservado pros casos em que ela não acerta ou pra nomes próprios.',
      },
      vocabulario: [
        { palavra: 'Acento', def: 'Sinal sobre a vogal (á, ã, â, à) que o português usa.' },
        { palavra: 'Cedilha (ç)', def: 'O sinal sob o "c" em palavras como "ação".' },
        { palavra: 'Tecla de globo', def: 'A tecla 🌐 que alterna entre idiomas do teclado.' },
      ],
      chave: [
        'Segurar a vogal revela as versões acentuadas',
        'Segurar o "c" dá o cedilha (ç)',
        'A autocorreção completa muitos acentos sozinha',
      ],
      porque: 'Acentos e cedilha são essenciais pra escrever português correto, e sua falta muda o sentido das palavras. Saber colocá-los com o toque longo — e confiar na autocorreção — garante mensagens bem-escritas, e o suporte a idiomas amplia o uso.',
    },
    pratica: {
      instrucao: 'Vamos colocar acentos e o cedilha.',
      passos: [
        'Na caixa de mensagem, segure a letra "a" e veja as versões acentuadas',
        'Deslize até o "ã" e solte; escreva uma palavra com til',
        'Segure o "c" e localize o cedilha (ç); escreva "ação"',
        'Digite "voce" e "nao" sem acento e veja a autocorreção ajudar',
        'Se escrever em outro idioma, procure a tecla de globo (🌐) no teclado',
      ],
    },
    desafio: {
      cenario: 'Acentue com facilidade: use o toque longo pra colocar acentos nas vogais e o cedilha, deixe a autocorreção completar acentos comuns, e conheça a tecla de globo pra alternar idiomas se você escreve em mais de um.',
      requisitos: [
        'Coloquei acentos segurando as vogais',
        'Achei o cedilha segurando o "c"',
        'Vi a autocorreção completar acentos',
        'Escrevi palavras corretamente acentuadas',
        'Conheço a tecla de globo pra trocar idioma',
      ],
      dica: 'Para adicionar um segundo idioma ao teclado, vá nas configurações do teclado e procure por "idiomas". Com dois idiomas ativos, a tecla de globo passa a alternar entre eles, e cada um traz sua autocorreção própria — prático pra quem mistura línguas.',
    },
    validacao: [
      'Coloco acentos segurando as vogais',
      'Acho o cedilha no teclado',
      'Aproveito a autocorreção pros acentos',
      'Escrevo português corretamente acentuado',
      'Sei alternar idiomas com o globo',
    ],
  },

  'mob-teclado-8': {
    trilhaId: 'mob-teclado', numero: 8, titulo: 'Escrever deslizando (swipe) e atalhos',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'E se você pudesse escrever uma palavra inteira sem tirar o dedo da tela, só deslizando de letra em letra? Esse jeito de digitar — o swipe — é surpreendentemente rápido depois que você pega o jeito, e é um dos truques favoritos de quem domina o celular.',
      conceito: {
        titulo: 'Deslizar entre as letras escreve palavras inteiras',
        texto: 'A DIGITAÇÃO POR DESLIZE (swipe) deixa você escrever sem tocar tecla por tecla: você ENCOSTA o dedo na primeira letra e DESLIZA passando por cima das letras seguintes, sem levantar o dedo, e levanta no fim da palavra. O teclado adivinha a palavra pelo caminho que seu dedo fez. Parece estranho no começo, mas fica rápido com a prática — e não precisa de precisão: o teclado entende mesmo que você passe perto. Além do swipe, vale conhecer outros ATALHOS: tocar duas vezes numa palavra a seleciona; tocar duas vezes na barra de espaço pode inserir um ponto final automático. Pequenos truques que agilizam muito.',
      },
      estrutura: {
        titulo: 'Digitação mais rápida',
        partes: [
          { simbolo: '👆', desc: 'Swipe: encoste e deslize pelas letras sem levantar o dedo.' },
          { simbolo: '🔮', desc: 'O teclado adivinha a palavra pelo caminho do dedo.' },
          { simbolo: '⏱️', desc: 'Fica rápido com a prática; não precisa de precisão.' },
          { simbolo: '✨', desc: 'Atalhos: 2 toques selecionam; 2 espaços = ponto final.' },
        ],
      },
      exemplo: {
        titulo: 'Escrevendo com truques',
        celulas: [
          { ref: 'Escrever "bom dia"', valor: 'Deslizo b-o-m sem levantar o dedo' },
          { ref: 'Errei a palavra no swipe', valor: 'Toco na sugestão certa ou refaço' },
          { ref: 'Selecionar uma palavra rápido', valor: 'Toco duas vezes nela' },
          { ref: 'Terminar a frase', valor: 'Dois toques no espaço = ponto final' },
        ],
        formula: 'Swipe + sugestões + atalhos = digitação bem mais rápida',
        resultado: 'Você escreve com agilidade, deslizando e usando truques.',
        comentario: 'O swipe não é pra todo mundo, e tudo bem: alguns adoram, outros preferem a digitação normal. Experimente sem compromisso — se gostar, ótimo, vai ganhar velocidade; se não, fique no toque tecla por tecla, que funciona perfeitamente. O importante é você escrever do jeito mais confortável.',
      },
      vocabulario: [
        { palavra: 'Swipe (deslize)', def: 'Escrever deslizando o dedo pelas letras sem levantar.' },
        { palavra: 'Adivinhar a palavra', def: 'O teclado deduz a palavra pelo caminho do dedo.' },
        { palavra: 'Atalho', def: 'Truque que agiliza a digitação (toque duplo, dois espaços).' },
      ],
      chave: [
        'O swipe escreve deslizando o dedo pelas letras',
        'O teclado adivinha a palavra; melhora com a prática',
        'Atalhos como toque duplo e dois espaços agilizam',
      ],
      porque: 'O swipe e os atalhos de digitação podem acelerar muito a escrita no celular. Conhecê-los dá opções pra você encontrar o jeito mais confortável e rápido de digitar — seja deslizando, seja tecla por tecla com truques.',
    },
    pratica: {
      instrucao: 'Vamos experimentar o swipe e alguns atalhos.',
      passos: [
        'Na caixa de mensagem, encoste o dedo na primeira letra de "bom"',
        'Sem levantar, deslize pelas letras o-m e só então solte',
        'Veja a palavra aparecer; se errar, toque na sugestão certa',
        'Experimente tocar duas vezes numa palavra pra selecioná-la',
        'Teste dar dois toques na barra de espaço pra ver o ponto final',
      ],
    },
    desafio: {
      cenario: 'Acelere a digitação: experimente escrever por deslize (swipe) passando o dedo pelas letras sem levantar, use as sugestões pra corrigir, e conheça atalhos como o toque duplo pra selecionar e os dois espaços pro ponto final.',
      requisitos: [
        'Experimentei escrever por deslize (swipe)',
        'Vi o teclado adivinhar a palavra',
        'Corrigi usando as sugestões',
        'Testei o toque duplo pra selecionar',
        'Conheci o atalho dos dois espaços',
      ],
      dica: 'Se o swipe não estiver funcionando, ele pode estar desativado nas configurações do teclado (procure por "deslizar para digitar" ou "gesture typing"). Mas lembre: é totalmente opcional — a digitação normal, tecla por tecla, continua sendo um jeito ótimo e válido de escrever.',
    },
    validacao: [
      'Experimentei a digitação por deslize',
      'Entendo que o teclado adivinha a palavra',
      'Corrijo o swipe pelas sugestões',
      'Uso o toque duplo pra selecionar',
      'Conheço atalhos que agilizam a escrita',
    ],
  },

  'mob-teclado-9': {
    trilhaId: 'mob-teclado', numero: 9, titulo: 'Projeto: escreva uma mensagem completa com tranquilidade',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: escrever uma mensagem de verdade, do começo ao fim, usando o que você aprendeu — maiúsculas e acentos no lugar, talvez um trecho ditado por voz, um texto colado, um emoji pra dar tom, e uma revisão final. No fim, você terá escrito com autonomia e capricho uma mensagem completa.',
      conceito: {
        titulo: 'Tudo junto: uma mensagem bem-escrita, do seu jeito',
        texto: 'Este projeto reúne toda a trilha num texto real. Você vai ESCREVER uma mensagem de algumas linhas (um recado pra família, uma mensagem mais formal pra um serviço — você escolhe), aplicando o que dominou: as TECLAS certas (maiúsculas, números, acentos, cedilha), talvez o DITADO por voz pra adiantar, COPIAR E COLAR alguma informação (um endereço, um horário), um ou dois EMOJIS e a PONTUAÇÃO pra dar tom, e uma REVISÃO final atenta antes de enviar. É a digitação deixando de ser obstáculo e virando ferramenta: você escreve o que quer, bem-feito, com tranquilidade e capricho.',
      },
      estrutura: {
        titulo: 'A mensagem completa',
        partes: [
          { simbolo: '⌨️', desc: 'Teclas certas: maiúsculas, acentos e cedilha no lugar.' },
          { simbolo: '🎤', desc: 'Ditado por voz pra adiantar trechos, se quiser.' },
          { simbolo: '📋', desc: 'Copiar e colar uma informação (endereço, horário).' },
          { simbolo: '😊', desc: 'Emoji e pontuação pra dar tom; revisão final.' },
        ],
      },
      exemplo: {
        titulo: 'O texto pronto',
        celulas: [
          { ref: 'Saudação caprichada', valor: 'Maiúscula e acentos certos' },
          { ref: 'Parte mais longa', valor: 'Adiantada pelo ditado por voz' },
          { ref: 'Endereço ou horário', valor: 'Colado, sem redigitar nem errar' },
          { ref: 'Toque final', valor: 'Emoji, pontuação e revisão antes de enviar' },
        ],
        formula: 'Teclas + ditado + colar + emoji + revisão = mensagem completa e caprichada',
        resultado: 'Uma mensagem bem-escrita, feita com autonomia e tranquilidade.',
        comentario: 'Esse é o momento em que tudo se junta: a digitação que parecia um bicho de sete cabeças vira uma ferramenta natural a seu serviço. Você não está só "apertando teclas" — está se comunicando com clareza e capricho, do seu jeito. É isso que muda a relação com o celular.',
      },
      vocabulario: [
        { palavra: 'Mensagem completa', def: 'Um texto de algumas linhas, escrito do início ao fim.' },
        { palavra: 'Revisão final', def: 'A releitura atenta antes de enviar, pra corrigir tudo.' },
        { palavra: 'Autonomia', def: 'Escrever o que você quer sozinho, com confiança.' },
      ],
      chave: [
        'O projeto reúne todas as habilidades da trilha num texto real',
        'Teclas certas, ditado, colar, emoji, pontuação e revisão',
        'A digitação vira ferramenta natural, não obstáculo',
      ],
      porque: 'Reunir tudo numa mensagem real consolida o aprendizado e prova o ganho: escrever no celular deixa de ser sofrimento e vira autonomia. Você se comunica com clareza e capricho, do seu jeito — uma conquista que transforma o uso do aparelho.',
    },
    pratica: {
      instrucao: 'Vamos escrever uma mensagem completa, passo a passo.',
      passos: [
        'Escolha pra quem e sobre o que será a mensagem (um recado pra família, por exemplo)',
        'Comece com uma saudação, usando maiúscula e acentos corretos',
        'Escreva o corpo da mensagem; use o ditado por voz pra adiantar se quiser',
        'Inclua uma informação colada (um endereço ou horário) usando copiar e colar',
        'Acrescente um ou dois emojis e ajuste a pontuação pra dar o tom certo',
        'Releia tudo com atenção, corrija o que precisar e só então envie',
      ],
    },
    desafio: {
      cenario: 'Escreva uma mensagem completa: aplique teclas corretas (maiúsculas, acentos, cedilha), use o ditado por voz, cole uma informação, acrescente emoji e pontuação pra dar tom, e faça uma revisão final atenta antes de enviar — tudo com tranquilidade e autonomia.',
      requisitos: [
        'Escrevi uma saudação com maiúsculas e acentos certos',
        'Usei o ditado por voz em algum trecho',
        'Colei uma informação sem redigitar',
        'Acrescentei emoji e pontuação pra dar tom',
        'Fiz a revisão final antes de enviar',
      ],
      dica: 'Guarde a sensação de ter escrito uma mensagem inteira com domínio: foi você no comando de cada recurso. Daqui pra frente, escrever no celular não assusta mais — é só uma ferramenta a seu serviço, que você usa com a naturalidade de quem já pegou o jeito.',
    },
    validacao: [
      'Escrevo com teclas, acentos e cedilha corretos',
      'Uso o ditado por voz quando ajuda',
      'Colo informações sem redigitar',
      'Dou tom com emoji e pontuação',
      'Reviso com atenção antes de enviar',
    ],
  },
};
