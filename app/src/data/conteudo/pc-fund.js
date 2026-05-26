// ============================================================================
// CONTEÚDO — Fundamentos do Computador (pc-fund)
// Schema CONTEUDO_*: aula (gancho, conceito, estrutura, exemplo, vocabulario,
// chave, porque) + pratica + desafio + validacao.
// Chave do objeto: `${trilhaId}-${missaoId}`.
// ============================================================================

export const PC_FUND = {
  'pc-fund-1': {
    trilhaId: 'pc-fund', numero: 1, titulo: 'Conhecendo a área de trabalho',
    tempoTotal: 8, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Você liga o computador e aparece um monte de ícones, uma barra embaixo, um relógio no canto. Parece bagunça, mas cada coisa ali tem uma função — e em 8 minutos você vai reconhecer todas.',
      conceito: {
        titulo: 'A tela que aparece quando o PC liga',
        texto: 'Essa primeira tela se chama Área de Trabalho. É a sua mesa: nela ficam os atalhos (ícones) para abrir programas e arquivos. Embaixo fica a Barra de Tarefas, onde está o menu Iniciar (canto esquerdo), os programas abertos no momento, e o relógio com o volume e a internet (canto direito).',
      },
      estrutura: {
        titulo: 'As 4 partes que você precisa conhecer',
        partes: [
          { simbolo: '⊞', desc: 'Menu Iniciar — o botão no canto inferior esquerdo (logo do Windows). Abre a lista de todos os programas.' },
          { simbolo: '▭', desc: 'Barra de Tarefas — a faixa embaixo. Mostra o que está aberto e fixa os programas que você mais usa.' },
          { simbolo: '🗔', desc: 'Ícones da Área de Trabalho — atalhos para abrir programas e arquivos com 2 cliques.' },
          { simbolo: '🕐', desc: 'Área de notificação — relógio, volume, Wi-Fi e bateria, no canto inferior direito.' },
        ],
      },
      exemplo: {
        titulo: 'O que cada clique faz',
        celulas: [
          { ref: '1 clique', valor: 'Seleciona o ícone (fica azulado)' },
          { ref: '2 cliques', valor: 'Abre o programa ou arquivo' },
          { ref: 'Botão direito', valor: 'Abre um menu de opções' },
        ],
        formula: 'Regra de ouro: 2 cliques rápidos para ABRIR',
        resultado: 'Sem pressa entre os cliques que não abre.',
        comentario: 'Se você clicar devagar demais, o computador entende como "renomear". Clique os dois bem rápido.',
      },
      vocabulario: [
        { palavra: 'Ícone', def: 'A figurinha que representa um programa ou arquivo. Clicar nela abre o que ela representa.' },
        { palavra: 'Atalho', def: 'Um ícone que é só um "caminho rápido" para abrir algo. Apagar o atalho não apaga o programa.' },
        { palavra: 'Menu Iniciar', def: 'O botão do Windows no canto. Por ele você acha qualquer programa, mesmo sem ícone na área de trabalho.' },
      ],
      chave: [
        'A Área de Trabalho é sua mesa: ícones em cima, Barra de Tarefas embaixo',
        'Menu Iniciar (canto esquerdo) abre todos os programas',
        '2 cliques rápidos abrem; 1 clique só seleciona',
      ],
      porque: 'Reconhecer essas 4 partes acaba com 90% da insegurança no computador. Tudo que você for fazer começa em um desses lugares. É a base de todas as próximas missões.',
    },
    pratica: {
      instrucao: 'Ligue o computador e fique na primeira tela. Vamos identificar cada parte juntos.',
      passos: [
        'Localize o botão do menu Iniciar no canto inferior esquerdo (o símbolo do Windows)',
        'Clique nele uma vez e veja a lista de programas abrir. Clique fora pra fechar.',
        'Olhe a Barra de Tarefas embaixo: veja os ícones fixados ali',
        'No canto inferior direito, encontre o relógio, o volume e o ícone de internet',
        'Na área central, conte quantos ícones você tem na Área de Trabalho',
        'Clique UMA vez em um ícone e repare que ele fica azulado (selecionado)',
        'Agora dê 2 cliques rápidos no mesmo ícone pra abrir',
        'Feche o que abriu clicando no X do canto superior direito da janela',
      ],
    },
    desafio: {
      cenario: 'Sem ajuda agora, abra a Calculadora do Windows usando o menu Iniciar (não pelo ícone da área de trabalho).',
      requisitos: [
        'Abri o menu Iniciar pelo botão no canto',
        'Encontrei a Calculadora na lista (ou digitei "calculadora" na busca)',
        'A Calculadora abriu na tela',
        'Fechei ela pelo X do canto',
      ],
      dica: 'No menu Iniciar você pode simplesmente começar a digitar o nome do programa que ele aparece na hora. Esse é o jeito mais rápido de abrir qualquer coisa.',
    },
    validacao: [
      'Sei apontar onde fica o menu Iniciar',
      'Reconheço a Barra de Tarefas e a área do relógio',
      'Entendi a diferença entre 1 clique e 2 cliques',
      'Consegui abrir um programa pelo menu Iniciar',
      'Consegui fechar uma janela pelo X',
    ],
  },

  'pc-fund-2': {
    trilhaId: 'pc-fund', numero: 2, titulo: 'Arquivos e pastas: criar e renomear',
    tempoTotal: 9, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Já recebeu um documento e nunca mais achou? O problema quase nunca é o computador — é que o arquivo ficou solto, sem nome claro e sem uma pasta. Hoje isso acaba.',
      conceito: {
        titulo: 'Arquivo é o documento. Pasta é a gaveta.',
        texto: 'Um arquivo é qualquer coisa guardada no computador: uma foto, um texto, uma planilha. Uma pasta é como uma gaveta ou um envelope: serve pra juntar arquivos do mesmo assunto. Você cria quantas pastas quiser, dá o nome que faz sentido, e guarda os arquivos dentro. É assim que nada se perde.',
      },
      estrutura: {
        titulo: 'Como criar e nomear',
        partes: [
          { simbolo: 'botão direito', desc: 'Clique com o botão direito num espaço vazio → Novo → Pasta.' },
          { simbolo: 'nome', desc: 'O nome já vem selecionado em azul. Digite um nome claro e aperte Enter.' },
          { simbolo: 'F2', desc: 'Pra renomear depois: clique no item uma vez e aperte a tecla F2 (ou botão direito → Renomear).' },
          { simbolo: 'Enter', desc: 'Sempre confirme apertando Enter. Pra desistir, aperte Esc.' },
        ],
      },
      exemplo: {
        titulo: 'Nomes ruins x nomes bons',
        celulas: [
          { ref: 'Ruim', valor: 'Documento1, sem título, novo (2)' },
          { ref: 'Ruim', valor: 'asdf, foto, arquivo final FINAL' },
          { ref: 'Bom', valor: 'Contrato-aluguel-2026' },
          { ref: 'Bom', valor: 'Receita-medico-marco' },
        ],
        formula: 'Padrão: assunto-detalhe-data',
        resultado: 'Você acha em segundos, mesmo daqui a 1 ano.',
        comentario: 'Evite acento e símbolos estranhos no nome. Use hífen (-) no lugar de espaço se quiser.',
      },
      vocabulario: [
        { palavra: 'Arquivo', def: 'Qualquer item guardado: texto, foto, planilha, PDF. Tem nome e um tipo (extensão).' },
        { palavra: 'Pasta', def: 'Um recipiente que agrupa arquivos. Pode ter outras pastas dentro (subpastas).' },
        { palavra: 'Renomear', def: 'Trocar o nome de um arquivo ou pasta sem mudar o conteúdo.' },
      ],
      chave: [
        'Pasta agrupa; arquivo é o conteúdo',
        'Botão direito → Novo → Pasta cria uma gaveta nova',
        'Nome claro hoje = arquivo encontrado amanhã',
      ],
      porque: 'No trabalho, ninguém tem paciência pra esperar você procurar um arquivo perdido. Saber criar pastas e nomear direito passa imagem de organização — e te poupa horas de stress.',
    },
    pratica: {
      instrucao: 'Vamos criar sua primeira pasta na Área de Trabalho. Abra o computador na tela inicial.',
      passos: [
        'Clique com o botão direito num espaço vazio da Área de Trabalho',
        'No menu que abrir, passe o mouse em "Novo"',
        'Clique em "Pasta"',
        'Uma pasta nova aparece com o nome em azul, pronta pra digitar',
        'Digite: Meus-documentos-2026',
        'Aperte Enter pra confirmar',
        'Clique uma vez na pasta e aperte F2 pra renomear de novo',
        'Mude pra: Documentos-pessoais e aperte Enter',
      ],
    },
    desafio: {
      cenario: 'Crie 3 pastas na Área de Trabalho, uma pra cada área da sua vida.',
      requisitos: [
        'Criei uma pasta chamada Saude',
        'Criei uma pasta chamada Financeiro',
        'Criei uma pasta chamada Trabalho',
        'Os 3 nomes estão claros, sem "nova pasta (2)"',
        'Renomeei pelo menos uma usando a tecla F2',
      ],
      dica: 'Pense nas pastas como as divisórias de uma pasta sanfonada de papel: cada assunto tem seu espaço. Mais tarde a gente coloca os arquivos certos em cada uma.',
    },
    validacao: [
      'Sei a diferença entre arquivo e pasta',
      'Criei uma pasta pelo botão direito → Novo → Pasta',
      'Dei um nome claro e confirmei com Enter',
      'Consegui renomear usando F2',
      'Criei pelo menos 3 pastas organizadas por assunto',
    ],
  },

  'pc-fund-3': {
    trilhaId: 'pc-fund', numero: 3, titulo: 'Mover, copiar e organizar pastas',
    tempoTotal: 10, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Seus arquivos estão espalhados pela Área de Trabalho e na pasta Downloads? Hoje você aprende a colocar cada um no lugar certo — e a diferença entre MOVER e COPIAR, que confunde muita gente.',
      conceito: {
        titulo: 'Mover tira do lugar. Copiar deixa nos dois.',
        texto: 'Quando você MOVE um arquivo, ele sai de onde estava e vai pro novo lugar — existe só uma cópia. Quando você COPIA, fica uma versão no lugar original E uma no destino — existem duas. Entender isso evita tanto perder arquivos quanto encher o computador de duplicatas.',
      },
      estrutura: {
        titulo: 'Três jeitos de organizar',
        partes: [
          { simbolo: 'arrastar', desc: 'Clique e segure o arquivo, arraste até a pasta e solte. Na mesma unidade, isso MOVE.' },
          { simbolo: 'Ctrl+X', desc: 'Recortar (mover): seleciona o arquivo, Ctrl+X, abre a pasta, Ctrl+V. Some da origem.' },
          { simbolo: 'Ctrl+C', desc: 'Copiar: Ctrl+C, abre a pasta, Ctrl+V. Fica nos dois lugares.' },
          { simbolo: 'Ctrl+V', desc: 'Colar: cola o que você recortou ou copiou no lugar onde está.' },
        ],
      },
      exemplo: {
        titulo: 'Recortar x Copiar na prática',
        celulas: [
          { ref: 'Ctrl+X', valor: 'recorte.pdf some da origem após colar' },
          { ref: 'Ctrl+C', valor: 'copia.pdf continua na origem após colar' },
          { ref: 'Ctrl+V', valor: 'cola onde você abriu' },
        ],
        formula: 'Mudar de lugar = Recortar (X) · Duplicar = Copiar (C)',
        resultado: 'Documentos no lugar certo, sem cópias inúteis.',
        comentario: 'Na dúvida entre mover e copiar um documento importante, copie. Depois você apaga a sobra com calma.',
      },
      vocabulario: [
        { palavra: 'Mover / Recortar', def: 'Tirar o arquivo de um lugar e colocar em outro. Sobra uma única cópia.' },
        { palavra: 'Copiar', def: 'Duplicar: o arquivo fica na origem e no destino.' },
        { palavra: 'Área de transferência', def: 'Uma "memória invisível" onde o que você copiou/recortou fica esperando você colar.' },
      ],
      chave: [
        'Recortar (Ctrl+X) move; Copiar (Ctrl+C) duplica',
        'Sempre termine com Colar (Ctrl+V) no destino',
        'Na dúvida com algo importante, copie em vez de mover',
      ],
      porque: 'Organizar arquivos é tarefa diária em qualquer escritório: separar comprovantes, juntar documentos de um cliente, montar uma pasta de projeto. Quem domina isso trabalha rápido e não perde nada.',
    },
    pratica: {
      instrucao: 'Use as 3 pastas que você criou na missão anterior. Vamos organizar de verdade.',
      passos: [
        'Abra a pasta Downloads (pelo Explorador de Arquivos, ícone de pasta amarela na barra)',
        'Escolha um arquivo qualquer e clique nele uma vez pra selecionar',
        'Aperte Ctrl+C pra copiar',
        'Volte na Área de Trabalho e abra a pasta Trabalho com 2 cliques',
        'Aperte Ctrl+V pra colar a cópia ali dentro',
        'Confirme que o arquivo original continua na pasta Downloads',
        'Agora teste mover: selecione outro arquivo, aperte Ctrl+X',
        'Cole numa pasta com Ctrl+V e veja que ele saiu do lugar original',
      ],
    },
    desafio: {
      cenario: 'Organize pelo menos 5 arquivos soltos (da Área de Trabalho ou Downloads) dentro das pastas certas por assunto.',
      requisitos: [
        'Movi pelo menos 5 arquivos pra dentro de pastas',
        'Usei Recortar (Ctrl+X) e Colar (Ctrl+V) ou arrastei',
        'Cada arquivo ficou na pasta do assunto dele',
        'A Área de Trabalho ficou mais limpa',
        'Confirmei que não criei cópias duplicadas sem querer',
      ],
      dica: 'Você pode selecionar vários arquivos de uma vez: segure a tecla Ctrl e clique em cada um. Aí move todos juntos.',
    },
    validacao: [
      'Entendi a diferença entre mover e copiar',
      'Copiei um arquivo com Ctrl+C e Ctrl+V',
      'Movi um arquivo com Ctrl+X e Ctrl+V',
      'Organizei pelo menos 5 arquivos em pastas',
      'Sei selecionar vários arquivos segurando Ctrl',
    ],
  },

  'pc-fund-4': {
    trilhaId: 'pc-fund', numero: 4, titulo: 'Copiar, recortar e colar em qualquer lugar',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Copiar e colar não serve só pra arquivos. Serve pra texto, link, foto, número de telefone — em qualquer programa. É o atalho que mais economiza tempo no computador inteiro.',
      conceito: {
        titulo: 'A dupla que funciona em tudo',
        texto: 'Os comandos Copiar, Recortar e Colar funcionam igual em todo lugar: num texto do Word, num site, num e-mail, numa planilha. Você seleciona o que quer, copia, e cola onde precisar. Aprender esse trio uma vez vale pra vida toda, em qualquer programa.',
      },
      estrutura: {
        titulo: 'O trio e como selecionar texto',
        partes: [
          { simbolo: 'Ctrl+C', desc: 'Copiar o que está selecionado.' },
          { simbolo: 'Ctrl+X', desc: 'Recortar (copia e remove da origem).' },
          { simbolo: 'Ctrl+V', desc: 'Colar onde o cursor estiver.' },
          { simbolo: 'arrastar', desc: 'Pra selecionar texto: clique no começo, segure e arraste até o fim. Fica pintado de azul.' },
        ],
      },
      exemplo: {
        titulo: 'Copiar um texto de um lugar pra outro',
        celulas: [
          { ref: 'Passo 1', valor: 'Seleciono a frase (fica azul)' },
          { ref: 'Passo 2', valor: 'Ctrl+C (copio)' },
          { ref: 'Passo 3', valor: 'Clico no destino e Ctrl+V (colo)' },
        ],
        formula: 'Selecionar → Ctrl+C → clicar no destino → Ctrl+V',
        resultado: 'A frase aparece no novo lugar, sem redigitar.',
        comentario: 'Funciona entre programas diferentes: copie um endereço do WhatsApp Web e cole no Maps, por exemplo.',
      },
      vocabulario: [
        { palavra: 'Selecionar', def: 'Marcar o que você quer copiar. Em texto, fica pintado de azul; em arquivos, fica destacado.' },
        { palavra: 'Cursor', def: 'A barrinha piscando que mostra onde o texto vai aparecer quando você digitar ou colar.' },
        { palavra: 'Colar', def: 'Inserir o que você copiou. O resultado aparece onde o cursor estiver.' },
      ],
      chave: [
        'Ctrl+C copia, Ctrl+X recorta, Ctrl+V cola — em qualquer programa',
        'Sempre selecione primeiro (texto fica azul)',
        'Cole onde o cursor estiver piscando',
      ],
      porque: 'Preencher formulários, montar relatórios, reaproveitar textos — tudo fica 3x mais rápido com copiar e colar. É a habilidade que separa quem digita tudo de novo de quem trabalha com agilidade.',
    },
    pratica: {
      instrucao: 'Abra o programa Bloco de Notas (procure no menu Iniciar). Vamos treinar com texto.',
      passos: [
        'No Bloco de Notas, digite a frase: Aprender computador na maturidade é coragem.',
        'Clique no começo da frase, segure o botão e arraste até o fim pra selecionar',
        'Com a frase pintada de azul, aperte Ctrl+C',
        'Clique numa linha abaixo (dê Enter antes pra criar espaço)',
        'Aperte Ctrl+V — a frase aparece de novo, colada',
        'Agora selecione uma palavra só (dê 2 cliques nela)',
        'Aperte Ctrl+X pra recortar — ela some',
        'Clique em outro ponto e Ctrl+V pra colar a palavra ali',
      ],
    },
    desafio: {
      cenario: 'Abra um site qualquer no navegador, copie um trecho de texto de lá e cole no Bloco de Notas.',
      requisitos: [
        'Selecionei um trecho de texto num site',
        'Copiei com Ctrl+C',
        'Abri o Bloco de Notas',
        'Colei o texto com Ctrl+V',
        'O texto do site apareceu no Bloco de Notas',
      ],
      dica: 'Copiar e colar entre programas diferentes é o que mais te economiza tempo no dia a dia. Endereços, links, números — nunca mais redigite.',
    },
    validacao: [
      'Sei selecionar um trecho de texto arrastando o mouse',
      'Copiei texto com Ctrl+C',
      'Colei com Ctrl+V no mesmo programa',
      'Recortei uma palavra com Ctrl+X',
      'Copiei de um site e colei em outro programa',
    ],
  },

  'pc-fund-5': {
    trilhaId: 'pc-fund', numero: 5, titulo: 'Achar um arquivo que você "perdeu"',
    tempoTotal: 7, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Você salvou um documento e agora não lembra onde. Calma: o computador raramente perde arquivos de verdade. Ele só está esperando você usar a ferramenta de busca certa.',
      conceito: {
        titulo: 'Tudo pode ser encontrado pela busca',
        texto: 'O Windows tem uma busca que vasculha o computador inteiro pelo nome do arquivo. Você digita parte do nome e ele mostra onde está. Existem dois lugares pra buscar: a busca do menu Iniciar (acha programas e arquivos) e a busca dentro de uma pasta no Explorador de Arquivos (acha dentro daquela pasta).',
      },
      estrutura: {
        titulo: 'Onde e como buscar',
        partes: [
          { simbolo: '⊞ + S', desc: 'Busca geral: aperte a tecla Windows e comece a digitar. Acha programas e arquivos.' },
          { simbolo: '🔍', desc: 'Dentro de uma pasta: use a caixa de busca no canto superior direito do Explorador.' },
          { simbolo: 'nome', desc: 'Digite qualquer parte do nome. Não precisa ser o nome inteiro.' },
          { simbolo: 'Recentes', desc: 'No Explorador, "Início" mostra os arquivos abertos recentemente — ótimo pra achar o último.' },
        ],
      },
      exemplo: {
        titulo: 'Buscando pelo que você lembra',
        celulas: [
          { ref: 'Lembra', valor: '"era um PDF do médico"' },
          { ref: 'Digite', valor: 'medico  (ou: .pdf)' },
          { ref: 'Resultado', valor: 'aparece receita-medico.pdf' },
        ],
        formula: 'Lembrou de UMA palavra do nome? Já dá pra achar.',
        resultado: 'Clique no resultado pra abrir direto.',
        comentario: 'Se não lembra o nome, busque pelo tipo: digite .pdf, .docx ou .jpg pra ver todos daquele tipo.',
      },
      vocabulario: [
        { palavra: 'Explorador de Arquivos', def: 'O programa de pasta amarela na barra de tarefas. É onde você navega por todas as pastas.' },
        { palavra: 'Extensão', def: 'O final do nome do arquivo (.pdf, .docx, .jpg) que diz o tipo dele.' },
        { palavra: 'Recentes', def: 'Lista dos últimos arquivos que você abriu. Atalho pra achar o que mexeu agora há pouco.' },
      ],
      chave: [
        'A busca do menu Iniciar acha quase tudo pelo nome',
        'Digite só uma parte do nome — não precisa do nome todo',
        'Esqueceu o nome? Busque pela extensão (.pdf, .docx)',
      ],
      porque: 'Perder tempo procurando arquivo é frustrante e passa imagem ruim no trabalho. Quem sabe buscar resolve em 5 segundos o que faria os outros desistirem.',
    },
    pratica: {
      instrucao: 'Vamos encontrar um arquivo usando a busca. Tenha o computador na tela inicial.',
      passos: [
        'Aperte a tecla Windows (a do logo, no teclado) uma vez',
        'Comece a digitar: bloco (sem clicar em nada antes)',
        'Veja o "Bloco de Notas" aparecer no topo dos resultados',
        'Aperte Esc pra fechar a busca',
        'Agora abra o Explorador de Arquivos (pasta amarela na barra)',
        'No canto superior direito, clique na caixa de busca',
        'Digite .pdf e aperte Enter pra ver todos os PDFs daquela pasta',
        'Clique em "Início" (na lateral) pra ver seus arquivos recentes',
      ],
    },
    desafio: {
      cenario: 'Encontre o arquivo mais recente que você criou ou baixou, usando a busca (não navegando pasta por pasta).',
      requisitos: [
        'Usei a busca (menu Iniciar ou Explorador), não fui clicando em pastas',
        'Digitei parte do nome ou a extensão do arquivo',
        'O arquivo apareceu nos resultados',
        'Consegui abrir o arquivo pelo resultado da busca',
        'Sei onde fica a lista de "Recentes"',
      ],
      dica: 'Crie o hábito: na hora de salvar qualquer arquivo, dê um nome que você buscaria depois. "Recibo-luz-maio" é melhor que "documento1".',
    },
    validacao: [
      'Sei abrir a busca pela tecla Windows',
      'Encontrei um programa digitando parte do nome',
      'Usei a busca dentro de uma pasta',
      'Busquei arquivos pela extensão (.pdf, .docx)',
      'Sei onde ficam os arquivos recentes',
    ],
  },

  'pc-fund-6': {
    trilhaId: 'pc-fund', numero: 6, titulo: 'Pen drive e nuvem: salvar e abrir de fora',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Precisa levar um documento pra outro lugar, ou ter uma cópia de segurança caso o computador estrague? Existem dois caminhos: o pen drive (físico) e a nuvem (online). Você vai dominar os dois.',
      conceito: {
        titulo: 'Pen drive é a gaveta que você carrega. Nuvem é a gaveta na internet.',
        texto: 'O pen drive é um pequeno dispositivo que você conecta na entrada USB do computador. Funciona como uma pasta extra que você pode levar no bolso. Já a nuvem (como Google Drive) guarda os arquivos na internet: você acessa de qualquer aparelho, sem carregar nada — só precisa de internet e da sua conta.',
      },
      estrutura: {
        titulo: 'Pen drive: o passo essencial que muita gente pula',
        partes: [
          { simbolo: 'conectar', desc: 'Encaixe o pen drive na entrada USB. Ele aparece como uma nova pasta no Explorador.' },
          { simbolo: 'copiar', desc: 'Copie (Ctrl+C) os arquivos e cole (Ctrl+V) dentro do pen drive.' },
          { simbolo: 'ejetar', desc: 'NUNCA puxe direto. Clique no ícone do pen drive (canto direito) → "Ejetar" antes de tirar.' },
          { simbolo: 'segurança', desc: 'Ejetar evita corromper arquivos. Espere a mensagem "pode remover com segurança".' },
        ],
      },
      exemplo: {
        titulo: 'Pen drive x Nuvem: quando usar cada um',
        celulas: [
          { ref: 'Pen drive', valor: 'Sem internet · levar pra gráfica/lotérica' },
          { ref: 'Pen drive', valor: 'Risco: pode perder, quebrar ou esquecer' },
          { ref: 'Nuvem', valor: 'Acessa de qualquer lugar · backup automático' },
          { ref: 'Nuvem', valor: 'Precisa de internet e conta Google' },
        ],
        formula: 'Importante mesmo? Tenha nos DOIS lugares.',
        resultado: 'Se um falhar, você ainda tem o outro.',
        comentario: 'Documentos que você não pode perder (contratos, fotos de família) merecem cópia na nuvem além do pen drive.',
      },
      vocabulario: [
        { palavra: 'USB', def: 'A entrada retangular onde se conecta pen drive, mouse e outros. Quase todo computador tem.' },
        { palavra: 'Ejetar', def: 'Avisar o computador que você vai remover o pen drive, pra não corromper arquivos.' },
        { palavra: 'Nuvem', def: 'Espaço de armazenamento na internet (ex: Google Drive). Acessível de qualquer aparelho.' },
      ],
      chave: [
        'Pen drive conecta na USB e vira uma pasta nova',
        'SEMPRE ejete antes de puxar o pen drive',
        'Arquivo importante? Tenha cópia no pen drive E na nuvem',
      ],
      porque: 'Levar arquivo pra imprimir, entregar um documento, ou ter backup: situações de trabalho e da vida. E perder o único arquivo de um contrato porque o PC queimou é um pesadelo evitável — a nuvem evita.',
    },
    pratica: {
      instrucao: 'Se você tiver um pen drive, conecte agora. (Sem pen drive? Acompanhe a leitura pra quando tiver.)',
      passos: [
        'Encaixe o pen drive numa entrada USB do computador',
        'Abra o Explorador de Arquivos (pasta amarela)',
        'Na lateral esquerda, procure o pen drive (costuma aparecer como "Disco removível" ou um nome)',
        'Clique nele pra ver o que tem dentro',
        'Copie um arquivo qualquer (Ctrl+C) de uma pasta sua',
        'Clique dentro do pen drive e cole (Ctrl+V)',
        'No canto inferior direito, clique no ícone do pen drive (setinha "mostrar ícones ocultos" se preciso)',
        'Clique em "Ejetar" e espere a mensagem antes de remover',
      ],
    },
    desafio: {
      cenario: 'Faça uma cópia de segurança de um documento importante seu — no pen drive ou na nuvem (Google Drive).',
      requisitos: [
        'Escolhi um documento que eu não quero perder',
        'Copiei ele pra um pen drive OU pro Google Drive',
        'Confirmei que a cópia abriu corretamente no destino',
        'Se usei pen drive, ejetei antes de remover',
        'Entendi por que ter cópia em dois lugares é mais seguro',
      ],
      dica: 'Marque na agenda: uma vez por mês, copie seus documentos importantes pra nuvem. Backup só serve se for hábito.',
    },
    validacao: [
      'Sei conectar um pen drive na entrada USB',
      'Encontrei o pen drive no Explorador de Arquivos',
      'Copiei arquivos pra dentro do pen drive',
      'Ejetei o pen drive corretamente antes de remover',
      'Entendi a diferença entre pen drive e nuvem',
    ],
  },

  'pc-fund-7': {
    trilhaId: 'pc-fund', numero: 7, titulo: 'Atalhos que economizam tempo',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Existem combinações de teclas que fazem em 1 segundo o que levaria vários cliques. Quem usa parece mágico. A boa notícia: são pouquíssimas que importam de verdade — e você vai decorar hoje.',
      conceito: {
        titulo: 'A tecla Ctrl é a chave de quase tudo',
        texto: 'A maioria dos atalhos usa a tecla Ctrl (canto inferior do teclado) segurada junto com uma letra. Você segura o Ctrl e dá um toque na letra. Não precisa decorar dezenas — 6 atalhos resolvem 95% do dia a dia. Eles funcionam igual em quase todos os programas.',
      },
      estrutura: {
        titulo: 'Os 6 atalhos que valem ouro',
        partes: [
          { simbolo: 'Ctrl+Z', desc: 'DESFAZER. Errou? Apertou apagar sem querer? Ctrl+Z volta atrás. O atalho mais salvador de todos.' },
          { simbolo: 'Ctrl+S', desc: 'SALVAR. Salve sempre, várias vezes enquanto trabalha. Evita perder tudo se travar.' },
          { simbolo: 'Alt+Tab', desc: 'TROCAR de janela. Segure Alt e toque Tab pra pular entre os programas abertos.' },
          { simbolo: '⊞ + E', desc: 'Abrir o Explorador de Arquivos na hora (tecla Windows + E).' },
        ],
      },
      exemplo: {
        titulo: 'Situações reais salvas por atalho',
        celulas: [
          { ref: 'Apaguei sem querer', valor: 'Ctrl+Z traz de volta' },
          { ref: 'Vou sair do PC', valor: 'Ctrl+S salva o trabalho' },
          { ref: 'Quero o outro programa', valor: 'Alt+Tab troca na hora' },
          { ref: 'Tela travou a digitação', valor: 'Ctrl+S antes de tudo!' },
        ],
        formula: 'Segure a 1ª tecla, dê um toque na 2ª',
        resultado: 'Velocidade e segurança no mesmo gesto.',
        comentario: 'Decore primeiro o Ctrl+Z e o Ctrl+S. Esses dois sozinhos já evitam 90% das dores de cabeça.',
      },
      vocabulario: [
        { palavra: 'Atalho de teclado', def: 'Combinação de teclas que executa um comando rápido, sem usar o mouse.' },
        { palavra: 'Desfazer', def: 'Voltar atrás na última ação. O Ctrl+Z desfaz; pode apertar várias vezes pra voltar mais.' },
        { palavra: 'Tecla Windows (⊞)', def: 'A tecla com o logo do Windows, geralmente perto do Ctrl da esquerda.' },
      ],
      chave: [
        'Ctrl+Z desfaz erros — seu melhor amigo',
        'Ctrl+S salva — aperte sempre, sem medo',
        'Alt+Tab troca entre programas abertos',
      ],
      porque: 'No trabalho, agilidade conta. Quem usa atalhos entrega mais rápido e perde menos trabalho por esquecer de salvar. Esses gestos viram automáticos em poucos dias.',
    },
    pratica: {
      instrucao: 'Abra o Bloco de Notas. Vamos treinar os atalhos com a mão na massa.',
      passos: [
        'Digite qualquer frase no Bloco de Notas',
        'Apague a frase toda (selecione e Delete)',
        'Agora aperte Ctrl+Z e veja a frase VOLTAR',
        'Aperte Ctrl+Z mais algumas vezes e observe ele desfazendo',
        'Abra outro programa qualquer (a Calculadora, por exemplo)',
        'Segure Alt e toque Tab pra alternar entre Bloco de Notas e Calculadora',
        'Volte ao Bloco de Notas e aperte Ctrl+S pra salvar (escolha a pasta e dê um nome)',
        'Aperte a tecla Windows + E e veja o Explorador de Arquivos abrir',
      ],
    },
    desafio: {
      cenario: 'Trabalhe num texto curto no Bloco de Notas usando só atalhos: escrever, desfazer um erro, salvar e alternar pra outro programa e voltar.',
      requisitos: [
        'Usei Ctrl+Z pra desfazer pelo menos uma vez',
        'Salvei o arquivo com Ctrl+S',
        'Usei Alt+Tab pra trocar de janela',
        'Abri o Explorador com Windows+E',
        'Não usei o mouse pra essas 4 ações',
      ],
      dica: 'Cole um post-it no monitor com "Ctrl+Z = desfazer" e "Ctrl+S = salvar" na primeira semana. Em poucos dias seus dedos fazem sozinho.',
    },
    validacao: [
      'Sei que Ctrl+Z desfaz a última ação',
      'Salvei um arquivo usando Ctrl+S',
      'Alternei entre programas com Alt+Tab',
      'Abri o Explorador com Windows+E',
      'Entendi que atalhos funcionam na maioria dos programas',
    ],
  },

  'pc-fund-8': {
    trilhaId: 'pc-fund', numero: 8, titulo: 'Projeto: organize seus documentos',
    tempoTotal: 20, xp: 100, vertente: 'computador',
    aula: {
      gancho: 'Chegou a hora de juntar tudo que você aprendeu nesta trilha num projeto real: montar a estrutura de pastas da sua vida digital. No fim, você terá um computador organizado de verdade — e essa organização vira parte do seu portfólio.',
      conceito: {
        titulo: 'Uma estrutura que cresce com você',
        texto: 'Um bom sistema de pastas tem uma pasta "mãe" (ex: Meus Documentos) e, dentro, pastas por grandes assuntos. Dentro de cada assunto, subpastas por ano ou tipo. Isso se chama estrutura em árvore: do geral pro específico. Bem montada, ela acomoda anos de arquivos sem virar bagunça.',
      },
      estrutura: {
        titulo: 'Modelo de estrutura sugerido',
        partes: [
          { simbolo: '📁', desc: 'Meus Documentos (a pasta mãe, raiz de tudo)' },
          { simbolo: '└📁', desc: 'Saude → Exames, Receitas, Vacinas' },
          { simbolo: '└📁', desc: 'Financeiro → Comprovantes, Contas, Impostos' },
          { simbolo: '└📁', desc: 'Trabalho → Curriculo, Contratos, Projetos' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois',
        celulas: [
          { ref: 'Antes', valor: '40 arquivos soltos na Área de Trabalho' },
          { ref: 'Antes', valor: '"documento (3)", "IMG_8842", "novo"' },
          { ref: 'Depois', valor: 'Tudo em pastas por assunto e ano' },
          { ref: 'Depois', valor: 'Nomes claros, achável em segundos' },
        ],
        formula: 'Geral → Assunto → Tipo/Ano',
        resultado: 'Computador limpo e profissional.',
        comentario: 'Tire um print do antes e do depois: é uma prova concreta da sua evolução pro portfólio.',
      },
      vocabulario: [
        { palavra: 'Estrutura em árvore', def: 'Organização do geral pro específico: pasta mãe → assuntos → subpastas.' },
        { palavra: 'Subpasta', def: 'Uma pasta dentro de outra pasta.' },
        { palavra: 'Pasta raiz', def: 'A pasta principal de onde todas as outras partem.' },
      ],
      chave: [
        'Comece pela pasta mãe e desça por assuntos',
        'Subpastas por tipo ou ano evitam bagunça',
        'Mover arquivos pras pastas certas é o trabalho final',
      ],
      porque: 'Este é o tipo de organização que empresas esperam de qualquer funcionário que mexe com documentos. Mostrar que você mantém arquivos organizados é, por si só, um diferencial profissional.',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos sem pressa. Vamos montar sua estrutura completa, usando tudo das missões anteriores.',
      passos: [
        'Crie uma pasta mãe chamada Meus-Documentos (botão direito → Novo → Pasta)',
        'Abra ela com 2 cliques',
        'Dentro, crie as subpastas: Saude, Financeiro, Trabalho, Pessoal',
        'Entre em Saude e crie dentro: Exames, Receitas, Vacinas',
        'Faça o mesmo padrão nas outras (ex: Financeiro → Comprovantes, Contas)',
        'Agora reúna seus arquivos soltos: use a busca pra achá-los',
        'Mova cada arquivo (Ctrl+X / Ctrl+V) pra subpasta certa',
        'Renomeie (F2) os que estiverem com nomes ruins, no padrão assunto-detalhe-data',
      ],
    },
    desafio: {
      cenario: 'Entregue sua vida digital organizada: uma estrutura de pastas completa com pelo menos 10 arquivos já guardados nos lugares certos.',
      requisitos: [
        'Criei uma pasta mãe com pelo menos 4 subpastas de assunto',
        'Pelo menos uma subpasta tem suas próprias subpastas (tipo/ano)',
        'Movi pelo menos 10 arquivos pros lugares certos',
        'Renomeei os arquivos com nomes ruins',
        'A Área de Trabalho ficou limpa de arquivos soltos',
        'Bônus: fiz uma cópia da pasta mãe no Google Drive como backup',
      ],
      dica: 'Organização não é tarefa de uma vez só, é hábito. Sempre que baixar ou criar um arquivo, já mande pra pasta certa na hora. Em um mês vira automático.',
    },
    validacao: [
      'Criei uma pasta mãe com subpastas por assunto',
      'Criei subpastas dentro de subpastas (árvore)',
      'Movi pelo menos 10 arquivos pros lugares certos',
      'Renomeei arquivos com nomes claros',
      'Minha Área de Trabalho está organizada',
      'Sei manter o hábito de guardar cada arquivo na hora',
    ],
  },
};
