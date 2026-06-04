// ============================================================================
// CONTEÚDO — Teclado e Mouse sem Mistério (pc-teclado)
// Teclas que importam, atalhos que poupam tempo, acentos, copiar/colar,
// seleção, botão direito, rolagem. Fluência nas mãos.
// ============================================================================

export const PC_TECLADO = {
  'pc-teclado-1': {
    trilhaId: 'pc-teclado', numero: 1, titulo: 'O mapa do teclado: onde fica cada coisa',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'O teclado parece ter cem teclas misteriosas. Mas, na prática, você usa sempre as mesmas dez ou quinze. Hoje a gente desenha o mapa: depois disso, suas mãos param de hesitar.',
      conceito: {
        titulo: 'O teclado tem bairros, não bagunça',
        texto: 'O teclado é dividido em regiões. No centro, as letras e o ESPAÇO (a barra grande). À esquerda, teclas que modificam: Shift (maiúscula), Ctrl e Alt (combinam com outras pra fazer atalhos). Acima, a fileira de números e os F1–F12. À direita, as setas (movem o cursor) e, em teclados grandes, o teclado numérico. Conhecer os bairros faz você encontrar qualquer tecla sem caçar.',
      },
      estrutura: {
        titulo: 'Os bairros do teclado',
        partes: [
          { simbolo: '🔤', desc: 'Letras + Espaço: o centro, onde você digita o texto.' },
          { simbolo: '⬆️', desc: 'Shift: segure pra fazer MAIÚSCULA ou o símbolo de cima da tecla.' },
          { simbolo: '⌨️', desc: 'Ctrl e Alt: sozinhas não fazem nada; combinam pra criar atalhos.' },
          { simbolo: '➡️', desc: 'Setas: movem o cursor pelo texto sem usar o mouse.' },
        ],
      },
      exemplo: {
        titulo: 'Teclas que você vai usar todo dia',
        celulas: [
          { ref: 'Enter', valor: 'Confirma / pula pra próxima linha' },
          { ref: 'Backspace', valor: 'Apaga a letra à ESQUERDA do cursor' },
          { ref: 'Espaço', valor: 'A barra grande: separa as palavras' },
          { ref: 'Shift', valor: 'Segura pra MAIÚSCULA ou símbolo de cima' },
        ],
        formula: 'Letras (centro) + Modificadoras (Shift/Ctrl/Alt) + Navegação (setas)',
        resultado: 'Você localiza qualquer tecla pelo "bairro" dela.',
        comentario: 'Backspace apaga pra trás (esquerda); Delete apaga pra frente (direita). Confundir os dois é normal no começo — repare na seta do desenho da tecla.',
      },
      vocabulario: [
        { palavra: 'Tecla modificadora', def: 'Shift, Ctrl, Alt: mudam o efeito de outra tecla quando seguradas juntas.' },
        { palavra: 'Cursor', def: 'A barrinha que pisca no texto, mostrando onde você vai digitar.' },
        { palavra: 'Atalho', def: 'Combinação de teclas que faz uma ação rápida (ex.: Ctrl+C).' },
      ],
      chave: [
        'O teclado tem regiões: letras, modificadoras, setas',
        'Shift faz maiúscula e os símbolos de cima',
        'Backspace apaga à esquerda; Delete à direita',
      ],
      porque: 'Quem conhece o mapa do teclado digita com calma e sem frustração. É a base pra escrever uma mensagem, preencher um cadastro ou redigir um documento sem sofrimento.',
    },
    pratica: {
      instrucao: 'Abra um bloco de notas ou o campo de busca e vamos reconhecer as teclas-chave digitando.',
      passos: [
        'Abra o Bloco de Notas (Windows) ou qualquer campo de texto',
        'Digite seu nome; depois tecle Backspace algumas vezes e veja apagar',
        'Segure Shift e digite a primeira letra: repare que sai MAIÚSCULA',
        'Tecle Enter e veja o cursor pular pra linha de baixo',
        'Use as setas pra passear o cursor pelo texto sem apagar nada',
      ],
    },
    desafio: {
      cenario: 'Escreva uma frase com sua cidade e seu nome, usando maiúscula no começo (Shift), espaços entre as palavras e corrigindo um erro com Backspace.',
      requisitos: [
        'Localizei e usei a barra de Espaço entre as palavras',
        'Fiz uma maiúscula segurando Shift',
        'Corrigi um erro com Backspace',
        'Usei Enter pra pular de linha',
        'Movi o cursor com as setas sem apagar texto',
      ],
      dica: 'Errou no meio da frase, não no fim? Clique com o mouse logo depois da letra errada (ou leve o cursor com as setas) e aí use Backspace — não precisa apagar tudo até lá.',
    },
    validacao: [
      'Reconheço as regiões do teclado',
      'Uso Shift pra maiúsculas',
      'Sei a diferença entre Backspace e Delete',
      'Movo o cursor com as setas',
      'Digito uma frase sem me perder no teclado',
    ],
  },

  'pc-teclado-2': {
    trilhaId: 'pc-teclado', numero: 2, titulo: 'Acentos e o ç: escrever português direito',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Escrever em português pede acento e cedilha: "você", "não", "coração", "açúcar". No teclado certo isso é fácil — mas tem um truque que confunde todo mundo no começo. Hoje você domina de vez.',
      conceito: {
        titulo: 'O acento vem antes da vogal',
        texto: 'No teclado brasileiro (ABNT2), o segredo dos acentos é a ordem: você aperta a tecla do acento PRIMEIRO (parece que nada acontece) e depois a vogal — aí surge a letra acentuada. Til (~) e acento (´) ficam numa tecla perto do Enter; o circunflexo (^) e a crase (`) saem segurando Shift nessa região. O ç tem tecla própria, ao lado do L. É só pegar o ritmo "acento, depois vogal" que vira automático.',
      },
      estrutura: {
        titulo: 'Como sair cada acento',
        partes: [
          { simbolo: '´', desc: 'Agudo: tecla do acento (perto do Enter), depois a vogal → á, é, í.' },
          { simbolo: '~', desc: 'Til: Shift + a mesma tecla, depois a/o → ã, õ (não, então).' },
          { simbolo: '^', desc: 'Circunflexo: Shift + tecla do 6, depois a vogal → â, ê, ô.' },
          { simbolo: 'ç', desc: 'Cedilha: tecla própria ao lado do L; sai direto.' },
        ],
      },
      exemplo: {
        titulo: 'A sequência que funciona',
        celulas: [
          { ref: 'á', valor: 'Aperte ´ (solta) → depois a' },
          { ref: 'ã', valor: 'Shift+~ (solta) → depois a' },
          { ref: 'ê', valor: 'Shift+^ (solta) → depois e' },
          { ref: 'ç', valor: 'Tecla do ç (ao lado do L): sai direto' },
        ],
        formula: 'Acento PRIMEIRO → vogal DEPOIS = letra acentuada',
        resultado: 'Português escrito corretamente, com naturalidade.',
        comentario: 'Apertou o acento e veio um espaço esquisito? Você apertou Espaço no lugar da vogal. Sem stress: apague e tente de novo "acento, depois vogal".',
      },
      vocabulario: [
        { palavra: 'ABNT2', def: 'O padrão de teclado brasileiro, com tecla de ç e acentos prontos.' },
        { palavra: 'Tecla morta', def: 'A do acento: sozinha não imprime nada; espera a vogal pra combinar.' },
        { palavra: 'Til', def: 'O ~ que vai sobre a e o em palavras como "mão" e "limões".' },
      ],
      chave: [
        'Aperte o acento e SÓ DEPOIS a vogal',
        'Til e circunflexo saem com Shift na região do acento',
        'O ç tem tecla própria, ao lado do L',
      ],
      porque: 'Texto com acento certo passa profissionalismo e clareza — num currículo, num e-mail, numa mensagem. E evita mal-entendidos: "pode" e "pôde" não são a mesma coisa.',
    },
    pratica: {
      instrucao: 'Abra um campo de texto e treine os acentos nas palavras mais comuns do dia a dia.',
      passos: [
        'Escreva "você": v, o, c, depois ê (circunflexo + e)',
        'Escreva "não": n, ã (til + a), o',
        'Escreva "coração": termine com ç (tecla ao lado do L) e ã, o',
        'Escreva "café": termine com é (agudo + e)',
        'Repita até sair sem pensar — "acento, depois vogal"',
      ],
    },
    desafio: {
      cenario: 'Escreva uma frase só com palavras acentuadas: "Você não imagina a emoção de escrever português com acentuação." Acerte todos os acentos e o ç.',
      requisitos: [
        'Escrevi pelo menos uma palavra com agudo (á/é/í/ó/ú)',
        'Escrevi pelo menos uma com til (ã/õ)',
        'Escrevi pelo menos uma com circunflexo (â/ê/ô)',
        'Usei o ç corretamente',
        'Peguei o ritmo "acento primeiro, vogal depois"',
      ],
      dica: 'Teclado sem o ç (layout americano/internacional)? Configure pra "Português (Brasil) ABNT2" nas configurações de idioma do sistema — sua vida com acentos fica muito mais simples.',
    },
    validacao: [
      'Faço acento agudo (á, é, ó) com naturalidade',
      'Faço til (ã, õ) com Shift',
      'Faço circunflexo (â, ê, ô)',
      'Uso a tecla do ç',
      'Escrevo português acentuado sem travar',
    ],
  },

  'pc-teclado-3': {
    trilhaId: 'pc-teclado', numero: 3, titulo: 'Selecionar texto: a base de tudo',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Antes de copiar, apagar ou mudar a cor de um texto, você precisa "marcar" o que vai mexer. Isso se chama selecionar — e é a habilidade que abre a porta pra dezenas de outras. Sem ela, nada de copiar e colar.',
      conceito: {
        titulo: 'Selecionar é dizer "é nisto aqui"',
        texto: 'Selecionar é destacar um trecho de texto (fica com fundo azul) pra dizer ao computador "a próxima ação é sobre ISTO". Você pode selecionar arrastando o mouse com o botão apertado, ou clicando no início e dando Shift+clique no fim. Cliques rápidos também selecionam: dois cliques marcam uma palavra, três marcam o parágrafo. E Ctrl+A seleciona tudo de uma vez. Depois de selecionado, qualquer ação (copiar, apagar, negrito) vale só pro trecho marcado.',
      },
      estrutura: {
        titulo: 'Formas de selecionar',
        partes: [
          { simbolo: '🖱️', desc: 'Arrastar: clique no início, segure e puxe até o fim do trecho.' },
          { simbolo: '👆', desc: 'Duplo clique: seleciona a palavra inteira de uma vez.' },
          { simbolo: '⇧', desc: 'Shift+clique: clique no início, Shift+clique no fim — marca o meio.' },
          { simbolo: '🅰️', desc: 'Ctrl+A: seleciona TODO o texto do documento ou campo.' },
        ],
      },
      exemplo: {
        titulo: 'A seleção certa pra cada tarefa',
        celulas: [
          { ref: 'Trocar uma palavra', valor: 'Duplo clique nela e digite a nova por cima' },
          { ref: 'Copiar um parágrafo', valor: 'Triplo clique (ou arrastar) e Ctrl+C' },
          { ref: 'Apagar muita coisa', valor: 'Arraste pelo trecho e tecle Delete' },
          { ref: 'Selecionar tudo', valor: 'Ctrl+A → ação vale pro documento inteiro' },
        ],
        formula: 'Selecionar (fica azul) → AÇÃO (copiar/apagar/formatar)',
        resultado: 'A ação atinge exatamente o trecho que você marcou.',
        comentario: 'Texto selecionado + digitar = ele some e dá lugar ao que você digita. Útil pra substituir rápido — mas cuidado pra não apagar sem querer.',
      },
      vocabulario: [
        { palavra: 'Selecionar', def: 'Destacar um trecho (fica azul) pra que a próxima ação atue só nele.' },
        { palavra: 'Ctrl+A', def: 'Atalho que seleciona todo o conteúdo de uma vez.' },
        { palavra: 'Substituir', def: 'Digitar com algo selecionado: o novo texto entra no lugar do antigo.' },
      ],
      chave: [
        'Selecionar marca o alvo da próxima ação',
        'Duplo clique = palavra; triplo = parágrafo; Ctrl+A = tudo',
        'Digitar sobre seleção substitui o trecho',
      ],
      porque: 'Selecionar é o gesto que antecede copiar, colar, formatar, apagar — tudo. Dominar isso multiplica sua velocidade em qualquer programa que tenha texto.',
    },
    pratica: {
      instrucao: 'Pegue um texto qualquer (um e-mail, uma notícia, o bloco de notas com algo escrito) e treine as seleções.',
      passos: [
        'Dê um duplo clique numa palavra e veja ela ficar azul',
        'Dê um triplo clique e veja o parágrafo inteiro selecionar',
        'Clique no começo de uma frase e dê Shift+clique no fim dela',
        'Tecle Ctrl+A e veja TODO o texto ficar selecionado',
        'Clique em qualquer lugar vazio pra "soltar" a seleção',
      ],
    },
    desafio: {
      cenario: 'Num texto de teste, selecione uma palavra e substitua por outra digitando por cima; depois selecione um parágrafo inteiro e copie com Ctrl+C.',
      requisitos: [
        'Selecionei uma palavra com duplo clique',
        'Substituí uma palavra digitando sobre a seleção',
        'Selecionei um parágrafo (triplo clique ou arrastando)',
        'Usei Ctrl+A pra selecionar tudo ao menos uma vez',
        'Sei soltar a seleção clicando num espaço vazio',
      ],
      dica: 'Selecionar arrastando e a mão escorregou? Não recomece do zero: clique no início e use Shift+clique no ponto final exato — é mais preciso que arrastar.',
    },
    validacao: [
      'Seleciono arrastando o mouse',
      'Seleciono palavra (duplo) e parágrafo (triplo)',
      'Uso Shift+clique pra marcar do início ao fim',
      'Seleciono tudo com Ctrl+A',
      'Entendo que a ação vale só pro selecionado',
    ],
  },

  'pc-teclado-4': {
    trilhaId: 'pc-teclado', numero: 4, titulo: 'Copiar, colar e desfazer: os atalhos de ouro',
    tempoTotal: 9, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Existem quatro atalhos que, sozinhos, te fazem economizar horas: copiar, colar, recortar e desfazer. São os "atalhos de ouro" — funcionam em quase todo programa. Aprendeu uma vez, usa pra sempre.',
      conceito: {
        titulo: 'Quatro combinações que valem por mil cliques',
        texto: 'Os atalhos de ouro usam a tecla Ctrl (no Mac, ⌘) junto com uma letra. Ctrl+C copia o que está selecionado. Ctrl+V cola onde o cursor estiver. Ctrl+X recorta (copia e remove, pra mover). Ctrl+Z desfaz a última ação — seu salva-vidas. O melhor: eles funcionam em quase tudo — Word, navegador, e-mail, planilha, campos de texto. Aprender esses quatro é como ganhar uma chave-mestra.',
      },
      estrutura: {
        titulo: 'Os quatro atalhos de ouro',
        partes: [
          { simbolo: 'C', desc: 'Ctrl+C: copia o trecho selecionado (o original fica).' },
          { simbolo: 'V', desc: 'Ctrl+V: cola o que foi copiado onde o cursor está.' },
          { simbolo: 'X', desc: 'Ctrl+X: recorta — copia e remove, pra mover de lugar.' },
          { simbolo: 'Z', desc: 'Ctrl+Z: desfaz a última ação. Errou? Volta no tempo.' },
        ],
      },
      exemplo: {
        titulo: 'Uma tarefa real com os atalhos',
        celulas: [
          { ref: 'Copiar um endereço', valor: 'Selecionar → Ctrl+C → Ctrl+V no campo certo' },
          { ref: 'Repetir uma frase', valor: 'Ctrl+C uma vez, Ctrl+V quantas quiser' },
          { ref: 'Mover um trecho', valor: 'Ctrl+X no original → Ctrl+V no destino' },
          { ref: 'Apaguei sem querer', valor: 'Ctrl+Z e o texto volta na hora' },
        ],
        formula: 'C copia · V cola · X move · Z desfaz',
        resultado: 'Você repete, move e corrige texto em segundos.',
        comentario: 'O que você copia fica guardado até copiar outra coisa. Por isso dá pra colar (Ctrl+V) várias vezes seguidas o mesmo trecho — útil pra preencher formulários repetitivos.',
      },
      vocabulario: [
        { palavra: 'Área de transferência', def: 'A "memória" invisível onde fica o que você copiou, até copiar outra coisa.' },
        { palavra: 'Desfazer (Ctrl+Z)', def: 'Atalho que cancela a última ação realizada.' },
        { palavra: 'Refazer (Ctrl+Y)', def: 'O contrário do desfazer: traz de volta o que você desfez.' },
      ],
      chave: [
        'Ctrl+C copia, Ctrl+V cola, Ctrl+X move',
        'Ctrl+Z desfaz — seu salva-vidas contra erros',
        'O copiado fica guardado pra colar várias vezes',
      ],
      porque: 'Esses quatro atalhos são os mais usados em qualquer computador. Quem domina copiar, colar e desfazer trabalha rápido e sem medo — sabe que dá pra corrigir qualquer passo.',
    },
    pratica: {
      instrucao: 'Abra um campo de texto e treine os atalhos com algo simples: seu nome e endereço.',
      passos: [
        'Escreva seu nome, selecione (duplo clique) e tecle Ctrl+C',
        'Clique numa linha nova e tecle Ctrl+V: o nome aparece colado',
        'Cole de novo (Ctrl+V) mais duas vezes — repete sem redigitar',
        'Selecione uma das cópias e tecle Ctrl+X (recortar): ela some',
        'Tecle Ctrl+Z algumas vezes e veja as ações sendo desfeitas',
      ],
    },
    desafio: {
      cenario: 'Copie um trecho (frase ou endereço), cole-o em três lugares diferentes, mova um deles com recortar/colar e, no fim, desfaça as duas últimas ações com Ctrl+Z.',
      requisitos: [
        'Copiei um trecho com Ctrl+C',
        'Colei em pelo menos 3 lugares com Ctrl+V',
        'Movi um trecho com Ctrl+X e Ctrl+V',
        'Usei Ctrl+Z pra desfazer ações',
        'Entendi que o copiado fica guardado pra colar de novo',
      ],
      dica: 'No Mac os atalhos são iguais, trocando Ctrl por ⌘ (Command): ⌘C, ⌘V, ⌘X, ⌘Z. A lógica é a mesma — muda só a tecla.',
    },
    validacao: [
      'Copio com Ctrl+C',
      'Colo com Ctrl+V (inclusive várias vezes)',
      'Movo com Ctrl+X',
      'Desfaço erros com Ctrl+Z',
      'Uso os atalhos em diferentes programas',
    ],
  },

  'pc-teclado-5': {
    trilhaId: 'pc-teclado', numero: 5, titulo: 'O mouse por inteiro: clique, duplo, direito e rolagem',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'O mouse parece óbvio, mas tem quatro gestos que mudam tudo — e um deles (o botão direito) é o menu secreto que abre quase qualquer ação. Dominar o mouse inteiro é ganhar atalhos que você nem sabia que existiam.',
      conceito: {
        titulo: 'Quatro gestos, infinitas possibilidades',
        texto: 'O mouse tem o botão ESQUERDO (o principal: clica, seleciona, arrasta), o botão DIREITO (abre um menu com as ações daquele item — o famoso "menu de contexto"), e a ROLAGEM (a rodinha do meio, que sobe e desce a página). O clique esquerdo tem duas formas: um clique (seleciona/aciona) e o duplo clique (abre arquivos e pastas). Aprender quando usar cada um deixa você no controle de qualquer tela.',
      },
      estrutura: {
        titulo: 'Os gestos do mouse',
        partes: [
          { simbolo: '👆', desc: 'Clique esquerdo: seleciona um item ou aperta um botão.' },
          { simbolo: '👆👆', desc: 'Duplo clique: abre arquivos, pastas e programas.' },
          { simbolo: '🖱️', desc: 'Clique direito: abre o menu de ações daquele item.' },
          { simbolo: '🎡', desc: 'Rolagem (rodinha): sobe e desce a página sem arrastar.' },
        ],
      },
      exemplo: {
        titulo: 'O gesto certo pra cada situação',
        celulas: [
          { ref: 'Abrir uma pasta', valor: 'Duplo clique esquerdo nela' },
          { ref: 'Apertar um botão na tela', valor: 'Um clique esquerdo basta' },
          { ref: 'Ver opções (renomear, copiar)', valor: 'Clique DIREITO no item' },
          { ref: 'Ler uma página longa', valor: 'Rolagem com a rodinha pra descer' },
        ],
        formula: '1 clique = aciona · 2 cliques = abre · Direito = menu de ações',
        resultado: 'Você comanda qualquer tela com precisão.',
        comentario: 'Regra prática: na Área de Trabalho e no Explorador, abrir pede DUPLO clique; em sites e botões, um clique só. Quando na dúvida, tente um clique primeiro.',
      },
      vocabulario: [
        { palavra: 'Menu de contexto', def: 'A lista de ações que aparece ao clicar com o botão direito num item.' },
        { palavra: 'Duplo clique', def: 'Dois cliques rápidos no botão esquerdo, usados pra abrir itens.' },
        { palavra: 'Rolagem', def: 'Girar a rodinha do mouse pra subir ou descer o conteúdo da tela.' },
      ],
      chave: [
        'Esquerdo: um clique aciona, dois abrem',
        'Direito: abre o menu de ações daquele item',
        'Rodinha: sobe e desce a página',
      ],
      porque: 'O botão direito é a porta de entrada pra copiar, renomear, salvar imagens e dezenas de ações que muita gente nem sabe que existem. Dominar o mouse inteiro destrava o computador.',
    },
    pratica: {
      instrucao: 'Vamos explorar cada gesto. Abra o Explorador de Arquivos e uma página de internet.',
      passos: [
        'No Explorador, dê um clique numa pasta (seleciona) e um duplo clique (abre)',
        'Clique com o botão DIREITO numa pasta e leia o menu que aparece',
        'Feche o menu clicando num espaço vazio (sem escolher nada)',
        'Numa página de internet, use a rodinha pra descer e subir o conteúdo',
        'Clique direito numa imagem da web e veja a opção de salvá-la',
      ],
    },
    desafio: {
      cenario: 'Use os quatro gestos: abra uma pasta com duplo clique, acione um botão com um clique, abra um menu de contexto com o direito e role uma página longa com a rodinha.',
      requisitos: [
        'Abri uma pasta com duplo clique',
        'Acionei um botão/link com um clique único',
        'Abri um menu de contexto com o botão direito',
        'Rolei uma página com a rodinha do mouse',
        'Sei quando usar um clique e quando usar dois',
      ],
      dica: 'Duplo clique difícil de acertar (abre como se fosse um só)? Nas configurações de mouse dá pra deixar o intervalo do duplo clique mais lento — ajuda muito quem está começando ou tem menos firmeza nas mãos.',
    },
    validacao: [
      'Diferencio um clique de um duplo clique',
      'Abro itens com duplo clique',
      'Uso o botão direito pra ver ações',
      'Rolo páginas com a rodinha',
      'Comando a tela com confiança pelo mouse',
    ],
  },

  'pc-teclado-6': {
    trilhaId: 'pc-teclado', numero: 6, titulo: 'Atalhos que mudam o jogo: janelas, abas e print',
    tempoTotal: 9, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Depois dos atalhos de ouro, vem um segundo time que parece mágica: trocar de janela sem o mouse, fechar uma aba, salvar com uma tecla, tirar print da tela. São poucos, mas fazem você parecer (e se sentir) um expert.',
      conceito: {
        titulo: 'Atalhos pra dominar a tela',
        texto: 'Além de copiar e colar, alguns atalhos controlam as próprias janelas e programas. Alt+Tab alterna entre os programas abertos (segure Alt e vá tocando Tab). Ctrl+S salva o que você está fazendo — use sempre, pra não perder trabalho. Ctrl+W fecha a aba ou janela atual. E a tecla Print Screen (ou Windows+Shift+S) tira uma foto da tela. Esses atalhos transformam tarefas chatas em gestos de um segundo.',
      },
      estrutura: {
        titulo: 'Os atalhos de controle',
        partes: [
          { simbolo: '🔄', desc: 'Alt+Tab: alterna entre as janelas/programas abertos.' },
          { simbolo: '💾', desc: 'Ctrl+S: salva o documento atual. Salve sempre, salve cedo.' },
          { simbolo: '❌', desc: 'Ctrl+W: fecha a aba ou a janela atual rapidinho.' },
          { simbolo: '📸', desc: 'Windows+Shift+S: recorta um print da tela pra você usar.' },
        ],
      },
      exemplo: {
        titulo: 'Atalhos resolvendo o dia',
        celulas: [
          { ref: 'Comparar duas janelas', valor: 'Alt+Tab pula entre elas num instante' },
          { ref: 'Não perder o documento', valor: 'Ctrl+S a cada parágrafo importante' },
          { ref: 'Fechar aba aberta à toa', valor: 'Ctrl+W fecha só ela' },
          { ref: 'Mandar um print', valor: 'Win+Shift+S, recorta, e Ctrl+V no chat' },
        ],
        formula: 'Alt+Tab troca · Ctrl+S salva · Ctrl+W fecha · Win+Shift+S printa',
        resultado: 'Você controla janelas e salva trabalho sem tocar no mouse.',
        comentario: 'O Ctrl+S é o atalho que mais salva pele: pegou pane de luz ou travou o programa? Quem salvou há pouco perde quase nada. Crie o hábito.',
      },
      vocabulario: [
        { palavra: 'Alt+Tab', def: 'Atalho pra alternar rapidamente entre os programas abertos.' },
        { palavra: 'Print (captura de tela)', def: 'Uma foto do que está na tela, pra guardar ou enviar.' },
        { palavra: 'Salvar (Ctrl+S)', def: 'Gravar o estado atual do trabalho pra não perdê-lo.' },
      ],
      chave: [
        'Alt+Tab alterna entre janelas abertas',
        'Ctrl+S salva — faça isso sempre, sem esperar',
        'Win+Shift+S recorta um print da tela',
      ],
      porque: 'Esses atalhos eliminam o vai-e-vem com o mouse e protegem seu trabalho. Mandar um print do erro pra alguém ajudar, salvar antes que trave, pular entre janelas — tudo fica instantâneo.',
    },
    pratica: {
      instrucao: 'Abra dois programas (um navegador e o Bloco de Notas, por exemplo) e treine.',
      passos: [
        'Com os dois abertos, tecle Alt+Tab pra alternar entre eles',
        'No Bloco de Notas, escreva algo e tecle Ctrl+S pra salvar (escolha um nome)',
        'Abra uma aba a mais no navegador e feche-a com Ctrl+W',
        'Tecle Windows+Shift+S e recorte um pedaço da tela',
        'Cole o print (Ctrl+V) num campo de texto ou no Paint',
      ],
    },
    desafio: {
      cenario: 'Trabalhe com duas janelas: alterne entre elas com Alt+Tab, salve um documento com Ctrl+S, tire um print de parte da tela e cole-o em algum lugar.',
      requisitos: [
        'Alternei entre janelas com Alt+Tab',
        'Salvei um documento com Ctrl+S',
        'Fechei uma aba/janela com Ctrl+W',
        'Tirei um print com Windows+Shift+S (ou Print Screen)',
        'Colei o print em algum lugar com Ctrl+V',
      ],
      dica: 'No Mac: trocar de app é ⌘+Tab, salvar é ⌘S, e o print recortado é ⌘+Shift+4. Mesma ideia dos atalhos do Windows, com a tecla ⌘ no lugar do Ctrl.',
    },
    validacao: [
      'Alterno janelas com Alt+Tab',
      'Salvo com Ctrl+S por hábito',
      'Fecho abas com Ctrl+W',
      'Tiro print de parte da tela',
      'Colo o print onde preciso',
    ],
  },

  'pc-teclado-7': {
    trilhaId: 'pc-teclado', numero: 7, titulo: 'Digitação com as duas mãos: ganhe velocidade',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Digitar caçando letra por letra com um dedo cansa e atrasa. Com um pouco de método, você passa a digitar com as duas mãos, olhando pra tela em vez do teclado. Não precisa virar campeão — só ficar fluente o bastante pra não sofrer.',
      conceito: {
        titulo: 'A base: deixe as mãos "moradoras" do teclado',
        texto: 'A digitação eficiente parte da "fileira base" — onde os dedos descansam: a mão esquerda em A-S-D-F e a direita em J-K-L-Ç. Repare que as teclas F e J têm um traço em relevo: são as marcas pros indicadores acharem o lugar sem olhar. A partir daí, cada dedo cuida das teclas próximas. No começo é estranho e lento; com prática, as mãos "decoram" e você ganha velocidade sem olhar pra baixo.',
      },
      estrutura: {
        titulo: 'O método em quatro hábitos',
        partes: [
          { simbolo: '🏠', desc: 'Fileira base: dedos pousam em A-S-D-F (esq.) e J-K-L-Ç (dir.).' },
          { simbolo: '✋', desc: 'Marcas em F e J: relevo que guia os indicadores sem olhar.' },
          { simbolo: '👀', desc: 'Olhe a TELA, não as mãos: confie na memória dos dedos.' },
          { simbolo: '🐢', desc: 'Devagar e certo primeiro; a velocidade vem com a repetição.' },
        ],
      },
      exemplo: {
        titulo: 'Quem cuida de cada região',
        celulas: [
          { ref: 'Indicadores (F e J)', valor: 'Ancoram as mãos; cuidam das teclas do meio' },
          { ref: 'Polegares', valor: 'Cuidam só da barra de Espaço' },
          { ref: 'Mínimos', valor: 'Alcançam Shift, Enter, A e Ç' },
          { ref: 'Olhar', valor: 'Fica na tela — o teclado você "sente"' },
        ],
        formula: 'Fileira base + dedo certo + olhar na tela = fluência',
        resultado: 'Digitação mais rápida, sem dor e sem caçar teclas.',
        comentario: 'Não busque velocidade de imediato — busque CONSTÂNCIA. Acertar devagar com o dedo certo todo dia, por 5 minutos, ensina suas mãos melhor do que correr e errar.',
      },
      vocabulario: [
        { palavra: 'Fileira base', def: 'A linha do teclado (ASDF / JKLÇ) onde os dedos descansam.' },
        { palavra: 'Digitação às cegas', def: 'Digitar olhando a tela, sem precisar ver o teclado.' },
        { palavra: 'Memória muscular', def: 'Quando as mãos "decoram" os movimentos e agem sozinhas.' },
      ],
      chave: [
        'Apoie os dedos na fileira base (ASDF / JKLÇ)',
        'Ache F e J pelo relevo, sem olhar',
        'Treine devagar e constante; a velocidade vem só',
      ],
      porque: 'Digitar com fluência poupa tempo e evita dores nas mãos e no pescoço (de tanto olhar pra baixo). É um investimento de poucos minutos por dia que rende pelo resto da vida.',
    },
    pratica: {
      instrucao: 'Sente com boa postura, apoie os dedos na fileira base e treine sem pressa, olhando a tela.',
      passos: [
        'Pouse os indicadores em F e J (sinta o relevo) e os demais dedos ao lado',
        'Digite "asdf jklç" algumas vezes, dedo por dedo, olhando a TELA',
        'Escreva uma frase curta sem olhar pro teclado (erre à vontade)',
        'Repita a mesma frase 3 vezes — repare que melhora',
        'Faça 5 minutos só; constância vale mais que sessões longas',
      ],
    },
    desafio: {
      cenario: 'Digite um parágrafo de 3 a 4 linhas tentando manter os dedos na fileira base e olhar a tela. Não busque velocidade — busque acertar com o dedo certo.',
      requisitos: [
        'Apoiei os dedos na fileira base (ASDF / JKLÇ)',
        'Achei F e J pelo relevo, sem olhar',
        'Digitei olhando mais pra tela do que pras mãos',
        'Repeti pelo menos uma frase pra sentir a melhora',
        'Mantive a calma — constância acima de velocidade',
      ],
      dica: 'Sites gratuitos de treino de digitação (como o "typing club", em português) dão exercícios curtos e divertidos. 5 a 10 minutos por dia por algumas semanas transformam sua digitação.',
    },
    validacao: [
      'Conheço a fileira base do teclado',
      'Acho F e J pelo relevo',
      'Tento olhar a tela ao digitar',
      'Uso mais de um dedo de cada mão',
      'Entendo que a fluência vem com prática constante',
    ],
  },

  'pc-teclado-8': {
    trilhaId: 'pc-teclado', numero: 8, titulo: 'Ajustes de conforto: teclado e mouse do seu jeito',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Mouse rápido demais, cursor sumindo, duplo clique que não acerta: muita dificuldade no computador não é "falta de jeito" — é configuração. Hoje você ajusta teclado e mouse pro SEU conforto e descobre que ficou tudo mais fácil.',
      conceito: {
        titulo: 'A máquina se adapta a você, não o contrário',
        texto: 'O computador deixa você ajustar como o teclado e o mouse respondem. Dá pra deixar o ponteiro maior e mais lento (mais fácil de seguir e acertar), tornar o duplo clique mais tolerante (não precisa ser tão rápido), e ligar recursos de acessibilidade — como o ponteiro que faz um círculo quando você aperta Ctrl, pra você achar onde ele está. Esses ajustes ficam em Configurações, na parte de Acessibilidade e de Mouse/Teclado.',
      },
      estrutura: {
        titulo: 'Ajustes que mais ajudam',
        partes: [
          { simbolo: '🐭', desc: 'Velocidade do ponteiro: deixe mais lento pra ter precisão.' },
          { simbolo: '🔍', desc: 'Tamanho/cor do cursor: maior e colorido, mais fácil de achar.' },
          { simbolo: '⏱️', desc: 'Velocidade do duplo clique: mais lenta = acerta mais fácil.' },
          { simbolo: '♿', desc: 'Acessibilidade: localizar ponteiro, teclas lentas, alto contraste.' },
        ],
      },
      exemplo: {
        titulo: 'Problema → ajuste que resolve',
        celulas: [
          { ref: 'Ponteiro foge da mão', valor: 'Reduza a velocidade do mouse' },
          { ref: 'Não acho o cursor', valor: 'Aumente o tamanho e ative "localizar ao Ctrl"' },
          { ref: 'Duplo clique não pega', valor: 'Deixe o intervalo do duplo clique mais lento' },
          { ref: 'Aperto tecla sem querer', valor: 'Ative "teclas lentas" na acessibilidade' },
        ],
        formula: 'Configurações → Acessibilidade / Mouse / Teclado → ajustar',
        resultado: 'Teclado e mouse respondendo do jeito confortável pra você.',
        comentario: 'Não existe ajuste "certo" universal — existe o confortável pra VOCÊ. Teste, use por um dia e reajuste. O computador é seu; ele deve servir você.',
      },
      vocabulario: [
        { palavra: 'Acessibilidade', def: 'Conjunto de ajustes que tornam o computador mais fácil de usar pra cada pessoa.' },
        { palavra: 'Velocidade do ponteiro', def: 'O quanto o cursor anda na tela pra cada movimento do mouse.' },
        { palavra: 'Localizar ponteiro', def: 'Recurso que destaca o cursor (círculo) ao apertar Ctrl, pra achá-lo.' },
      ],
      chave: [
        'Mouse rápido demais? Reduza a velocidade',
        'Cursor sumindo? Aumente o tamanho e ative localizar',
        'Os ajustes ficam em Configurações → Acessibilidade',
      ],
      porque: 'Pequenos ajustes eliminam frustrações que travam o aprendizado. Quem adapta o computador ao próprio conforto erra menos, cansa menos e ganha confiança muito mais rápido.',
    },
    pratica: {
      instrucao: 'Vamos abrir as configurações e experimentar um ou dois ajustes — dá pra voltar depois se não gostar.',
      passos: [
        'Abra Configurações (Windows: tecla Windows + I) e procure "Mouse"',
        'Ajuste a velocidade do ponteiro um pouco mais lenta e teste',
        'Vá em Acessibilidade → Ponteiro do mouse e aumente o tamanho/cor',
        'Procure a opção de localizar o ponteiro ao apertar Ctrl e ative',
        'Use por alguns minutos; reajuste até ficar confortável',
      ],
    },
    desafio: {
      cenario: 'Faça pelo menos dois ajustes de conforto (mouse, cursor, duplo clique ou acessibilidade), use por alguns minutos e decida se mantém ou volta ao anterior.',
      requisitos: [
        'Abri as Configurações de Mouse e/ou Acessibilidade',
        'Ajustei a velocidade do ponteiro ou o tamanho do cursor',
        'Testei outro ajuste (duplo clique ou localizar ponteiro)',
        'Usei por alguns minutos pra sentir a diferença',
        'Sei como voltar ao ajuste anterior se quiser',
      ],
      dica: 'Anotou (mentalmente ou no papel) o valor original antes de mexer? Isso te deixa tranquilo pra experimentar — sempre dá pra voltar ao que era se não gostar.',
    },
    validacao: [
      'Sei abrir as Configurações',
      'Ajusto a velocidade do mouse',
      'Aumento e acho o cursor com facilidade',
      'Configuro o duplo clique no meu ritmo',
      'Adapto o computador ao meu conforto',
    ],
  },

  'pc-teclado-9': {
    trilhaId: 'pc-teclado', numero: 9, titulo: 'Projeto: preencha um formulário do início ao fim',
    tempoTotal: 16, xp: 110, vertente: 'computador',
    aula: {
      gancho: 'Chegou a hora de juntar tudo numa tarefa que aparece o tempo todo na vida real: preencher um formulário online — um cadastro, uma inscrição. Você vai navegar entre campos, digitar com acento, copiar dados e revisar antes de enviar. Tudo que aprendeu, em ação.',
      conceito: {
        titulo: 'Formulário: o teclado e o mouse trabalhando juntos',
        texto: 'Um formulário é uma sequência de campos pra você preencher: nome, e-mail, telefone, endereço. Você clica no campo (ou pula entre eles com a tecla Tab), digita a informação — com acento quando precisa —, usa copiar e colar pra dados repetidos (como o e-mail), e revisa tudo antes de clicar em enviar. É o teste prático de fluência: seleção, digitação, atalhos e mouse, todos na mesma tarefa.',
      },
      estrutura: {
        titulo: 'O fluxo de preencher com segurança',
        partes: [
          { simbolo: '⇥', desc: 'Tab: pula pro próximo campo sem precisar clicar a cada um.' },
          { simbolo: '⌨️', desc: 'Digitar com acento: nome e endereço corretos em português.' },
          { simbolo: '📋', desc: 'Copiar/colar: reaproveite e-mail e dados repetidos sem retrabalho.' },
          { simbolo: '🔍', desc: 'Revisar: releia tudo ANTES de clicar em enviar.' },
        ],
      },
      exemplo: {
        titulo: 'Campo a campo, com calma',
        celulas: [
          { ref: 'Nome completo', valor: 'Digite com maiúsculas (Shift) e acentos certos' },
          { ref: 'E-mail', valor: 'Copie de onde está salvo e cole — evita erro de letra' },
          { ref: 'Telefone', valor: 'Só números; Tab pula pro próximo campo' },
          { ref: 'Revisar e enviar', valor: 'Releia tudo e só então clique em "Enviar"' },
        ],
        formula: 'Clicar/Tab → digitar (com acento) → copiar/colar → revisar → enviar',
        resultado: 'Formulário preenchido certo, sem erro e sem retrabalho.',
        comentario: 'Antes de enviar, revise principalmente e-mail e telefone — são os campos onde um errinho impede de te contatarem depois. Um minuto de revisão evita muita dor de cabeça.',
      },
      vocabulario: [
        { palavra: 'Formulário', def: 'Conjunto de campos a preencher online, como cadastros e inscrições.' },
        { palavra: 'Tab', def: 'Tecla que pula pro próximo campo do formulário sem usar o mouse.' },
        { palavra: 'Campo obrigatório', def: 'Aquele marcado (geralmente com *) que precisa ser preenchido pra enviar.' },
      ],
      chave: [
        'Tab pula entre campos; clique pra ir direto a um',
        'Copiar/colar evita erro em dados repetidos',
        'Revise e-mail e telefone antes de enviar',
      ],
      porque: 'Preencher formulário é porta de entrada pra quase tudo online: marcar consulta, se inscrever num curso, se cadastrar num serviço. Fazer isso com fluência e sem erro abre portas de verdade.',
    },
    pratica: {
      instrucao: 'Use um formulário de teste seguro: o campo de "editar perfil" de uma conta sua, ou um formulário de teste. NÃO use dados sensíveis num site desconhecido.',
      passos: [
        'Abra um formulário simples e seguro (ex.: editar seu perfil num site que você já usa)',
        'Clique no primeiro campo e digite seu nome com acentos e maiúsculas',
        'Use a tecla Tab pra pular pro próximo campo',
        'Copie seu e-mail de onde estiver salvo e cole no campo de e-mail',
        'Revise tudo com calma e só então salve/envie (se for um formulário seu)',
      ],
    },
    desafio: {
      cenario: 'Preencha um formulário seu (perfil/cadastro) usando Tab pra navegar, acentos no nome, copiar/colar no e-mail e uma revisão final antes de confirmar. Relate o que foi mais fácil e o mais difícil.',
      requisitos: [
        'Naveguei entre campos com Tab (além de clicar)',
        'Digitei nome/endereço com acentuação correta',
        'Usei copiar e colar em pelo menos um campo',
        'Revisei e-mail e telefone antes de enviar',
        'Concluí o formulário com confiança',
      ],
      dica: 'Formulário pediu senha, cartão ou documentos? Pra este projeto, prefira um formulário simples e seu (editar perfil). Nunca preencha dados financeiros ou senhas a pedido de um site que você não conhece e não procurou.',
    },
    validacao: [
      'Navego entre campos com Tab e com o mouse',
      'Digito com acento corretamente',
      'Uso copiar/colar pra dados repetidos',
      'Reviso antes de enviar',
      'Preencho formulários sem ajuda e sem medo',
    ],
  },
};
