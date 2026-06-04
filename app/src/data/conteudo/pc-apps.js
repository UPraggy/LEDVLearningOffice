// ============================================================================
// CONTEÚDO — Programas e Apps no Computador (pc-apps)
// O que é instalar, a Microsoft Store, instalar e desinstalar com segurança,
// programas que já vêm no Windows, abrir arquivos com o programa certo,
// alternativas gratuitas aos pagos, atalhos na área de trabalho e barra de
// tarefas, e montar o conjunto ideal de programas. Equipar o PC sem medo.
// ============================================================================

export const PC_APPS = {
  'pc-apps-1': {
    trilhaId: 'pc-apps', numero: 1, titulo: 'O que é "instalar um programa"',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Alguém diz "é só instalar o programa" e você trava: instalar onde, como, é seguro? Esse medo trava muita gente. Mas instalar é só ensinar o computador a fazer uma coisa nova — e, entendendo o processo, deixa de ser um mistério.',
      conceito: {
        titulo: 'Instalar é adicionar uma nova capacidade ao computador',
        texto: 'Um PROGRAMA (ou app) é uma ferramenta que faz uma tarefa: editar texto, ver fotos, fazer chamadas. INSTALAR é o processo de colocar esse programa no seu computador pra ele ficar disponível pra usar sempre. O computador já vem com vários programas, mas você adiciona outros conforme a necessidade. A instalação normalmente é guiada: você baixa um INSTALADOR, dá um clique duplo nele e clica em "Avançar/Próximo" algumas vezes até "Concluir". Ao final, o programa aparece no Menu Iniciar, pronto. Desinstalar é o contrário: remove o programa quando você não precisa mais.',
      },
      estrutura: {
        titulo: 'Entendendo a instalação',
        partes: [
          { simbolo: '🧩', desc: 'Programa/app: uma ferramenta pra uma tarefa.' },
          { simbolo: '📥', desc: 'Instalar: colocar o programa no PC pra usar sempre.' },
          { simbolo: '🪄', desc: 'Instalador guiado: "Avançar" algumas vezes até "Concluir".' },
          { simbolo: '🗑️', desc: 'Desinstalar: remover quando não precisa mais.' },
        ],
      },
      exemplo: {
        titulo: 'O ciclo de um programa',
        celulas: [
          { ref: 'Preciso fazer chamadas', valor: 'Instalo um app de reunião' },
          { ref: 'Baixei o instalador', valor: 'Clique duplo e sigo o assistente' },
          { ref: 'Instalação concluída', valor: 'O app aparece no Menu Iniciar' },
          { ref: 'Não uso mais', valor: 'Desinstalo pra liberar o PC' },
        ],
        formula: 'Baixar instalador + seguir o assistente = programa pronto pra usar',
        resultado: 'Você equipa o computador com o que precisa, sem travar.',
        comentario: 'O segredo é entender que a instalação é guiada de propósito — feita pra qualquer pessoa seguir. Na maioria das vezes, você só lê cada tela e clica em "Avançar". Sem pressa, sem decorar nada: é só seguir o caminho que o próprio instalador aponta.',
      },
      vocabulario: [
        { palavra: 'Programa / app', def: 'Ferramenta instalada no PC pra realizar uma tarefa.' },
        { palavra: 'Instalar', def: 'Colocar um programa no computador pra deixá-lo disponível.' },
        { palavra: 'Instalador', def: 'O arquivo que, executado, guia a instalação do programa.' },
      ],
      chave: [
        'Programa é uma ferramenta; instalar é adicioná-la ao PC',
        'A instalação é guiada: avançar até concluir',
        'Desinstalar remove o que você não usa mais',
      ],
      porque: 'O medo de instalar programas limita muito o uso do computador. Entender que é um processo simples e guiado destrava a pessoa pra equipar a máquina com o que precisa, com autonomia e sem depender sempre de alguém.',
    },
    pratica: {
      instrucao: 'Vamos entender os programas que você já tem e o conceito de instalar.',
      passos: [
        'Abra o Menu Iniciar e veja a lista de programas já instalados',
        'Reconheça que cada um é uma ferramenta pra uma tarefa',
        'Pense numa tarefa que você gostaria de fazer e ainda não tem o programa',
        'Entenda que instalar esse programa seria adicionar essa capacidade',
        'Note que o processo é guiado: baixar, abrir e seguir "Avançar"',
      ],
    },
    desafio: {
      cenario: 'Compreenda os programas: explore os apps já instalados no Menu Iniciar, entenda que cada um é uma ferramenta, e absorva o conceito de que instalar é um processo guiado que adiciona uma nova capacidade ao seu computador.',
      requisitos: [
        'Vi a lista de programas no Menu Iniciar',
        'Entendi que cada programa é uma ferramenta',
        'Compreendi o que significa "instalar"',
        'Sei que a instalação é um processo guiado',
        'Sei que desinstalar remove o programa',
      ],
      dica: 'Nem todo programa precisa ser instalado: muita coisa hoje funciona direto no navegador (e-mail, documentos, até edição de fotos). Antes de instalar algo, vale verificar se não dá pra fazer o mesmo pela internet, sem ocupar espaço no PC.',
    },
    validacao: [
      'Entendo o que é um programa/app',
      'Sei o que significa instalar',
      'Reconheço que a instalação é guiada',
      'Sei que desinstalar remove o programa',
      'Identifico os programas que já tenho',
    ],
  },

  'pc-apps-2': {
    trilhaId: 'pc-apps', numero: 2, titulo: 'A Microsoft Store: instalar com segurança',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'No celular você instala apps pela "lojinha" sem pensar duas vezes. O computador também tem a sua: a Microsoft Store. É o jeito mais seguro de instalar programas, porque tudo ali já passou por uma conferência — sem risco de baixar algo perigoso por engano.',
      conceito: {
        titulo: 'A loja oficial é o caminho mais seguro',
        texto: 'A MICROSOFT STORE é a loja de apps do Windows, igual à loja de aplicativos do celular. A grande vantagem é a SEGURANÇA: os programas ali são verificados pela Microsoft, então você não corre o risco de instalar algo malicioso. A instalação é com um clique no botão "Obter/Instalar" — sem assistente, sem caçar instalador na internet. Você acha a Store no Menu Iniciar, pesquisa o app que quer (pela barra de busca) e instala. Nem todo programa está na Store, mas, quando está, esse é sempre o caminho preferido.',
      },
      estrutura: {
        titulo: 'Usando a Store',
        partes: [
          { simbolo: '🏪', desc: 'Microsoft Store: a "lojinha" oficial do Windows.' },
          { simbolo: '🛡️', desc: 'Apps verificados: segurança sem risco de algo malicioso.' },
          { simbolo: '🔎', desc: 'Busca: pesquise o app pelo nome na barra.' },
          { simbolo: '⬇️', desc: 'Instalação com um clique em "Obter/Instalar".' },
        ],
      },
      exemplo: {
        titulo: 'Instalando pela loja',
        celulas: [
          { ref: 'Quero um app novo', valor: 'Abro a Microsoft Store' },
          { ref: 'Procurar o programa', valor: 'Pesquiso pelo nome na busca' },
          { ref: 'Encontrei o app', valor: 'Clico em "Obter/Instalar"' },
          { ref: 'Está na Store?', valor: 'Esse é o caminho mais seguro' },
        ],
        formula: 'Store + buscar + "Instalar" = app seguro, sem assistente nem caça',
        resultado: 'Você instala apps com um clique e zero risco de algo perigoso.',
        comentario: 'Pense na Microsoft Store como a versão computador da loja de apps do seu celular: o lugar confiável onde você procura pelo nome e instala com um toque. Sempre que o programa que você quer estiver lá, prefira a Store — é o jeito mais tranquilo e seguro.',
      },
      vocabulario: [
        { palavra: 'Microsoft Store', def: 'Loja oficial de apps do Windows, com programas verificados.' },
        { palavra: 'Obter / Instalar', def: 'O botão que baixa e instala o app da loja com um clique.' },
        { palavra: 'App verificado', def: 'Programa conferido pela loja, sem risco de ser malicioso.' },
      ],
      chave: [
        'A Microsoft Store é a "lojinha" do Windows',
        'Apps da Store são verificados e seguros',
        'Quando o programa está na Store, prefira-a sempre',
      ],
      porque: 'A Microsoft Store oferece o jeito mais seguro e simples de instalar programas, eliminando o risco de baixar algo perigoso. Conhecê-la dá tranquilidade pra instalar apps com a mesma naturalidade do celular.',
    },
    pratica: {
      instrucao: 'Vamos conhecer e usar a Microsoft Store.',
      passos: [
        'Abra o Menu Iniciar e procure por "Microsoft Store"',
        'Abra a loja e observe a barra de busca no topo',
        'Pesquise por um app conhecido (ex.: WhatsApp, um app de fotos)',
        'Veja a página do app, com o botão "Obter/Instalar"',
        'Entenda que instalar dali é seguro e feito com um clique',
      ],
    },
    desafio: {
      cenario: 'Use a loja oficial: abra a Microsoft Store, pesquise um programa pelo nome, entenda que os apps ali são verificados e seguros, e saiba que instalar pela Store é o caminho preferido sempre que o programa estiver disponível nela.',
      requisitos: [
        'Abri a Microsoft Store',
        'Pesquisei um app pelo nome',
        'Entendi que os apps da Store são verificados',
        'Sei instalar com um clique em "Obter"',
        'Sei que a Store é o caminho mais seguro',
      ],
      dica: 'Pela Store, as atualizações dos apps também vêm automaticamente, sem você precisar se preocupar. É mais uma vantagem da loja: além de seguro pra instalar, mantém os programas em dia sozinho.',
    },
    validacao: [
      'Abro e navego na Microsoft Store',
      'Pesquiso apps pelo nome',
      'Entendo que os apps são verificados',
      'Instalo com um clique em "Obter"',
      'Prefiro a Store por ser mais segura',
    ],
  },

  'pc-apps-3': {
    trilhaId: 'pc-apps', numero: 3, titulo: 'Instalar de um site oficial sem cair em cilada',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Nem todo programa está na lojinha. Às vezes você precisa baixar do site do fabricante — e é justamente aí que muita gente cai em armadilhas: sites falsos, botões de "baixar" enganosos, programas extras que vêm de carona. Saber fazer isso com cuidado é essencial.',
      conceito: {
        titulo: 'A fonte é tudo: baixe sempre do site oficial',
        texto: 'Quando um programa não está na Store, você baixa o instalador do SITE OFICIAL do fabricante — e essa é a regra de ouro: a fonte importa mais que o programa. Para achar o site certo, pesquise o nome do programa e confira que o endereço é mesmo o oficial (cuidado com cópias parecidas). Nas páginas de download há dois perigos: BOTÕES FALSOS de "Download" (que são anúncios disfarçados) — o verdadeiro costuma ser o do próprio site, não os coloridos e piscantes; e, durante a instalação, OFERTAS EXTRAS (barras de ferramenta, outros programas) que vêm marcadas — desmarque o que você não pediu.',
      },
      estrutura: {
        titulo: 'Baixando com cuidado',
        partes: [
          { simbolo: '🌐', desc: 'Site oficial: a fonte certa, confira o endereço.' },
          { simbolo: '⚠️', desc: 'Botões falsos de "Download" são anúncios disfarçados.' },
          { simbolo: '☑️', desc: 'Na instalação, desmarque ofertas extras que vêm de carona.' },
          { simbolo: '🔍', desc: 'Na dúvida da fonte, não instale: confirme antes.' },
        ],
      },
      exemplo: {
        titulo: 'Evitando as ciladas',
        celulas: [
          { ref: 'Achei vários sites', valor: 'Escolho só o oficial do fabricante' },
          { ref: 'Vários botões "Download"', valor: 'Uso o do site, ignoro os anúncios' },
          { ref: 'Instalação oferece extras', valor: 'Desmarco o que não pedi' },
          { ref: 'Site estranho/duvidoso', valor: 'Não instalo: confirmo a fonte' },
        ],
        formula: 'Site oficial + botão certo + desmarcar extras = instalação limpa',
        resultado: 'Você instala o que quer, sem programas indesejados de carona.',
        comentario: 'Durante a instalação, leia cada tela em vez de só clicar "Avançar" no automático — é exatamente nessas telas que vêm as ofertas marcadas de programas extras. Trinta segundos de atenção evitam encher o PC de coisas que você nunca quis.',
      },
      vocabulario: [
        { palavra: 'Site oficial', def: 'A página do próprio fabricante do programa, a fonte confiável.' },
        { palavra: 'Botão falso', def: 'Anúncio disfarçado de "Download" pra te enganar.' },
        { palavra: 'Oferta extra', def: 'Programa de carona que vem marcado na instalação.' },
      ],
      chave: [
        'A fonte importa mais que o programa: site oficial sempre',
        'Cuidado com botões falsos de "Download" (anúncios)',
        'Leia cada tela e desmarque ofertas extras',
      ],
      porque: 'Baixar fora da loja é onde muita gente é infectada ou enche o PC de lixo. Saber identificar o site oficial, ignorar botões falsos e desmarcar extras é uma habilidade de segurança essencial pra instalar com autonomia e tranquilidade.',
    },
    pratica: {
      instrucao: 'Vamos praticar a identificação de uma fonte segura (sem instalar nada agora).',
      passos: [
        'Pense num programa conhecido e pesquise o nome dele',
        'Identifique nos resultados qual é o site oficial do fabricante',
        'Repare que pode haver sites parecidos tentando se passar pelo oficial',
        'Imagine a página de download: o botão certo é o do site, não os anúncios',
        'Lembre da regra: ler cada tela da instalação e desmarcar extras',
      ],
    },
    desafio: {
      cenario: 'Instale com segurança fora da loja: saiba identificar o site oficial de um programa, reconheça botões falsos de download disfarçados de anúncios, e durante a instalação leia cada tela pra desmarcar ofertas extras indesejadas.',
      requisitos: [
        'Sei identificar o site oficial do fabricante',
        'Reconheço botões falsos de "Download"',
        'Sei que a fonte importa mais que o programa',
        'Leio cada tela da instalação com atenção',
        'Desmarco ofertas extras que vêm de carona',
      ],
      dica: 'Se tiver qualquer dúvida sobre um site ser o oficial, prefira não instalar e peça ajuda, ou procure o programa na Microsoft Store. É sempre melhor pecar pela cautela — um programa baixado da fonte errada pode trazer um vírus junto.',
    },
    validacao: [
      'Identifico o site oficial de um programa',
      'Ignoro botões falsos de download',
      'Sei que a fonte é o mais importante',
      'Leio as telas da instalação',
      'Desmarco programas extras indesejados',
    ],
  },

  'pc-apps-4': {
    trilhaId: 'pc-apps', numero: 4, titulo: 'Desinstalar o que você não usa mais',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'O computador acumula programas com o tempo: aquele que você usou uma vez, o que veio de carona, o teste que esqueceu. Todos ocupam espaço e podem deixar a máquina mais lenta. Saber desinstalar com segurança mantém o PC limpo e enxuto.',
      conceito: {
        titulo: 'Remover o inútil deixa o PC mais leve',
        texto: 'DESINSTALAR é remover um programa do computador de forma completa e correta — não basta apagar o ícone. O caminho certo é em Configurações → APLICATIVOS (ou "Programas e Recursos"), onde aparece a lista de tudo que está instalado. Você seleciona o programa e clica em "Desinstalar"; um assistente remove tudo. Isso libera espaço e pode acelerar o PC. A regra de segurança: só desinstale o que você reconhece e sabe que não usa. Na dúvida sobre um nome estranho, pesquise antes — alguns programas com nomes técnicos são necessários pro Windows funcionar.',
      },
      estrutura: {
        titulo: 'Desinstalando direito',
        partes: [
          { simbolo: '📋', desc: 'Configurações → Aplicativos: a lista do que está instalado.' },
          { simbolo: '🗑️', desc: 'Selecionar e "Desinstalar": remove tudo corretamente.' },
          { simbolo: '🪶', desc: 'Libera espaço e pode deixar o PC mais rápido.' },
          { simbolo: '❓', desc: 'Nome estranho? Pesquise antes de remover.' },
        ],
      },
      exemplo: {
        titulo: 'Limpando os programas',
        celulas: [
          { ref: 'Programa que não uso', valor: 'Desinstalo pela lista de Aplicativos' },
          { ref: 'Veio de carona', valor: 'Reconheço e removo com segurança' },
          { ref: 'Nome técnico estranho', valor: 'Pesquiso antes de mexer' },
          { ref: 'Só apaguei o ícone', valor: 'Não basta: precisa desinstalar' },
        ],
        formula: 'Lista de Aplicativos + desinstalar o conhecido = PC limpo e leve',
        resultado: 'Espaço liberado, máquina mais enxuta, só o que você usa.',
        comentario: 'Apagar só o atalho da área de trabalho NÃO desinstala o programa — ele continua inteiro no PC, ocupando espaço. A remoção de verdade é sempre pela lista de Aplicativos nas Configurações. Guarde essa diferença: é uma confusão muito comum.',
      },
      vocabulario: [
        { palavra: 'Desinstalar', def: 'Remover um programa completamente do computador.' },
        { palavra: 'Aplicativos (Configurações)', def: 'A lista de programas instalados, de onde se desinstala.' },
        { palavra: 'Atalho', def: 'O ícone que abre o programa; apagá-lo não o desinstala.' },
      ],
      chave: [
        'Desinstalar é diferente de apagar o ícone',
        'O caminho é Configurações → Aplicativos → Desinstalar',
        'Só remova o que você reconhece; na dúvida, pesquise',
      ],
      porque: 'Programas acumulados ocupam espaço e podem pesar no desempenho. Saber desinstalar corretamente — e com segurança, sem remover o que o sistema precisa — mantém o computador limpo, rápido e com só o que você de fato usa.',
    },
    pratica: {
      instrucao: 'Vamos ver a lista de programas e entender a desinstalação.',
      passos: [
        'Abra Configurações → Aplicativos (ou "Aplicativos instalados")',
        'Veja a lista completa de programas instalados no PC',
        'Identifique algum que você reconhece e sabe que não usa',
        'Localize a opção "Desinstalar" ao selecioná-lo',
        'Se houver nomes estranhos, anote pra pesquisar antes de mexer',
      ],
    },
    desafio: {
      cenario: 'Limpe os programas: acesse a lista de aplicativos instalados nas Configurações, identifique programas que você reconhece e não usa mais, desinstale-os corretamente (não apenas o ícone), e pesquise nomes estranhos antes de removê-los.',
      requisitos: [
        'Acessei a lista de aplicativos instalados',
        'Identifiquei programas que não uso',
        'Sei que desinstalar é diferente de apagar o ícone',
        'Usei a opção "Desinstalar" corretamente',
        'Pesquiso nomes estranhos antes de remover',
      ],
      dica: 'Faça essa faxina de programas de vez em quando, junto com a limpeza de espaço em disco. Mas vá com calma: remova só de poucos em poucos, conferindo o que cada um é. Melhor deixar algo que você não tem certeza do que removendo algo importante.',
    },
    validacao: [
      'Acesso a lista de aplicativos',
      'Identifico programas que não uso',
      'Desinstalo corretamente (não só o ícone)',
      'Pesquiso nomes estranhos antes',
      'Mantenho o PC enxuto com faxinas',
    ],
  },

  'pc-apps-5': {
    trilhaId: 'pc-apps', numero: 5, titulo: 'Os programas que já vêm no Windows',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Antes de sair instalando coisas, vale saber: o Windows já vem com um monte de programas úteis prontos pra usar. Calculadora, bloco de notas, editor de fotos, navegador, gravador... muita gente instala o que já tem. Conhecer o que já está ali economiza tempo e espaço.',
      conceito: {
        titulo: 'O Windows já traz um kit básico completo',
        texto: 'O Windows vem com PROGRAMAS NATIVOS que cobrem muitas necessidades do dia a dia, sem precisar instalar nada. A CALCULADORA pra contas; o BLOCO DE NOTAS pra anotações rápidas; o app FOTOS pra ver e editar imagens; o navegador EDGE pra internet; a FERRAMENTA DE CAPTURA pros prints; o GRAVADOR pra áudio. Você acha todos no Menu Iniciar, geralmente pesquisando o nome. Antes de instalar um programa novo, vale checar se o Windows já não tem um que faça o que você precisa — muitas vezes tem.',
      },
      estrutura: {
        titulo: 'O kit que já vem',
        partes: [
          { simbolo: '🧮', desc: 'Calculadora e Bloco de Notas: contas e anotações.' },
          { simbolo: '🖼️', desc: 'Fotos: ver e editar imagens; Edge: navegar na internet.' },
          { simbolo: '✂️', desc: 'Ferramenta de Captura: prints da tela.' },
          { simbolo: '🔎', desc: 'Tudo no Menu Iniciar: pesquise o nome.' },
        ],
      },
      exemplo: {
        titulo: 'Usando o que já tem',
        celulas: [
          { ref: 'Fazer uma conta', valor: 'Calculadora (já vem)' },
          { ref: 'Anotar algo rápido', valor: 'Bloco de Notas (já vem)' },
          { ref: 'Ver e ajustar fotos', valor: 'App Fotos (já vem)' },
          { ref: 'Antes de instalar', valor: 'Checo se o Windows já tem' },
        ],
        formula: 'Programas nativos + Menu Iniciar = muita coisa sem instalar nada',
        resultado: 'Você resolve o dia a dia com o que o Windows já oferece.',
        comentario: 'Explorar o Menu Iniciar é um exercício que vale a pena: você descobre ferramentas úteis que já estavam ali, esperando. Muita gente passa anos instalando programas pra tarefas que o próprio Windows já fazia — não caia nessa.',
      },
      vocabulario: [
        { palavra: 'Programa nativo', def: 'Programa que já vem instalado com o Windows.' },
        { palavra: 'Bloco de Notas', def: 'Editor de texto simples pra anotações rápidas.' },
        { palavra: 'Menu Iniciar', def: 'Onde você encontra e abre todos os programas do PC.' },
      ],
      chave: [
        'O Windows já vem com um kit básico completo',
        'Calculadora, notas, fotos, navegador, captura — tudo nativo',
        'Antes de instalar, cheque se o Windows já não tem',
      ],
      porque: 'Conhecer os programas que já vêm no Windows evita instalar o que você já tem, economiza espaço e tempo, e revela ferramentas úteis que muitos nunca descobrem. É aproveitar ao máximo o que a máquina já oferece de fábrica.',
    },
    pratica: {
      instrucao: 'Vamos explorar os programas nativos do Windows.',
      passos: [
        'Abra o Menu Iniciar e pesquise "Calculadora"; abra e teste',
        'Pesquise "Bloco de Notas" e veja como serve pra anotações rápidas',
        'Pesquise "Fotos" e lembre que ele vê e edita imagens',
        'Localize a "Ferramenta de Captura" pros prints',
        'Role a lista de programas e descubra outros que já estão ali',
      ],
    },
    desafio: {
      cenario: 'Conheça o kit nativo: explore os programas que já vêm no Windows (Calculadora, Bloco de Notas, Fotos, Edge, Ferramenta de Captura), saiba pra que serve cada um, e adote o hábito de checar o que já existe antes de instalar algo novo.',
      requisitos: [
        'Abri e testei a Calculadora',
        'Conheci o Bloco de Notas pra anotações',
        'Lembrei que o app Fotos edita imagens',
        'Localizei a Ferramenta de Captura',
        'Adotei checar o nativo antes de instalar',
      ],
      dica: 'Os programas nativos do Windows são simples de propósito — cobrem o essencial muito bem. Se um dia você precisar de recursos mais avançados (edição de foto profissional, por exemplo), aí sim procura um programa especializado. Pro dia a dia, o nativo basta.',
    },
    validacao: [
      'Conheço os programas que já vêm no Windows',
      'Uso a Calculadora e o Bloco de Notas',
      'Sei que o app Fotos edita imagens',
      'Localizo a Ferramenta de Captura',
      'Checo o nativo antes de instalar algo',
    ],
  },

  'pc-apps-6': {
    trilhaId: 'pc-apps', numero: 6, titulo: 'Abrir arquivos com o programa certo',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Você clica num arquivo e ele abre num programa esquisito, ou não abre. Ou quer abrir uma foto no editor, mas ela teima em abrir noutro lugar. Entender qual programa abre cada arquivo — e como mudar isso — resolve uma confusão muito comum.',
      conceito: {
        titulo: 'Cada tipo de arquivo tem um programa associado',
        texto: 'Todo arquivo está ligado a um PROGRAMA PADRÃO que o abre ao clique duplo: PDFs abrem no leitor de PDF, fotos no app Fotos, documentos no Word. Às vezes esse padrão não é o que você quer — aí você usa o "ABRIR COM": clique direito no arquivo → "Abrir com" → escolha o programa desejado. Pra mudar de vez (pra todos os arquivos daquele tipo), há a opção "escolher outro app" e marcar "sempre usar". Se um arquivo NÃO ABRE, geralmente falta o programa que entende aquele formato — basta instalar o adequado (ou abrir num que já entenda).',
      },
      estrutura: {
        titulo: 'Controlando quem abre o quê',
        partes: [
          { simbolo: '🔗', desc: 'Programa padrão: abre o arquivo no clique duplo.' },
          { simbolo: '🖱️', desc: '"Abrir com": clique direito pra escolher outro programa.' },
          { simbolo: '📌', desc: '"Sempre usar": muda o padrão pra aquele tipo de arquivo.' },
          { simbolo: '🚫', desc: 'Não abre? Falta o programa que entende o formato.' },
        ],
      },
      exemplo: {
        titulo: 'Abrindo do jeito certo',
        celulas: [
          { ref: 'Foto abre no lugar errado', valor: 'Clique direito → Abrir com' },
          { ref: 'Quero mudar pra sempre', valor: '"Escolher outro app" + sempre usar' },
          { ref: 'Arquivo não abre', valor: 'Falta o programa do formato' },
          { ref: 'PDF abrindo no navegador', valor: 'Abrir com o leitor de PDF' },
        ],
        formula: 'Programa padrão + "Abrir com" + "sempre usar" = arquivo no app certo',
        resultado: 'Cada arquivo abre onde você quer, sem surpresa nem travas.',
        comentario: 'O "Abrir com" (clique direito) é a chave dessa missão: ele te deixa abrir um arquivo num programa diferente do padrão pontualmente, sem mudar nada de vez. E quando você quer mudar pra sempre, é só marcar "sempre usar esse app". Você no controle.',
      },
      vocabulario: [
        { palavra: 'Programa padrão', def: 'O app que abre automaticamente um tipo de arquivo.' },
        { palavra: 'Abrir com', def: 'Opção do clique direito pra escolher outro programa.' },
        { palavra: 'Sempre usar', def: 'Marcação que torna um programa o padrão do formato.' },
      ],
      chave: [
        'Cada tipo de arquivo tem um programa padrão que o abre',
        '"Abrir com" (clique direito) escolhe outro programa',
        'Não abre = falta o programa que entende o formato',
      ],
      porque: 'A confusão de arquivos abrindo no programa errado (ou não abrindo) frustra muita gente. Entender o programa padrão e o "Abrir com" coloca você no controle de qual app abre cada arquivo — e explica por que algo às vezes não abre.',
    },
    pratica: {
      instrucao: 'Vamos controlar qual programa abre seus arquivos.',
      passos: [
        'Dê um clique duplo num arquivo e note em que programa ele abre',
        'Clique com o botão direito nesse arquivo e veja a opção "Abrir com"',
        'Repare na lista de programas que poderiam abri-lo',
        'Entenda que há a opção de "sempre usar" um programa pra aquele tipo',
        'Lembre: se um arquivo não abre, costuma faltar o programa do formato',
      ],
    },
    desafio: {
      cenario: 'Domine a abertura de arquivos: entenda o conceito de programa padrão, use o "Abrir com" do clique direito pra escolher outro programa, saiba mudar o padrão de vez, e reconheça que um arquivo que não abre geralmente precisa do programa certo.',
      requisitos: [
        'Entendi o conceito de programa padrão',
        'Usei o "Abrir com" do clique direito',
        'Sei mudar o padrão de um tipo de arquivo',
        'Reconheço que "não abre" é falta do programa',
        'Coloquei meus arquivos pra abrir onde quero',
      ],
      dica: 'Cuidado ao marcar "sempre usar este app" sem querer — se você fizer isso por engano com o programa errado, todos os arquivos daquele tipo passarão a abrir nele. Se acontecer, é só repetir o "Abrir com" e escolher o programa certo como padrão de novo.',
    },
    validacao: [
      'Entendo o conceito de programa padrão',
      'Uso o "Abrir com" pra escolher o programa',
      'Mudo o padrão de um tipo de arquivo',
      'Sei que "não abre" é falta do programa',
      'Controlo qual app abre cada arquivo',
    ],
  },

  'pc-apps-7': {
    trilhaId: 'pc-apps', numero: 7, titulo: 'Atalhos: área de trabalho e barra de tarefas',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Toda vez você vai no Menu Iniciar, rola a lista e procura o programa que usa o tempo todo. Há um jeito muito melhor: deixar os programas favoritos a um clique, fixados na barra de tarefas ou na área de trabalho. Pequeno ajuste, grande economia de tempo todo dia.',
      conceito: {
        titulo: 'Deixe o que você mais usa a um clique',
        texto: 'Um ATALHO é um botão que abre um programa direto, sem ir ao Menu Iniciar. Você pode FIXAR seus programas favoritos em dois lugares: a BARRA DE TAREFAS (a faixa na base da tela, sempre visível — ótima pros que você usa o tempo todo) e a ÁREA DE TRABALHO (a tela inicial). Pra fixar na barra: clique direito no programa → "Fixar na barra de tarefas". Assim, navegador, e-mail, Word — o que for seu dia a dia — fica a um clique. Organizar esses atalhos é personalizar o computador pro seu jeito de trabalhar.',
      },
      estrutura: {
        titulo: 'Criando seus atalhos',
        partes: [
          { simbolo: '⚡', desc: 'Atalho: abre o programa direto, sem o Menu Iniciar.' },
          { simbolo: '📌', desc: 'Barra de tarefas: sempre visível, pros usados o tempo todo.' },
          { simbolo: '🖥️', desc: 'Área de trabalho: atalhos na tela inicial.' },
          { simbolo: '🖱️', desc: 'Clique direito → "Fixar na barra de tarefas".' },
        ],
      },
      exemplo: {
        titulo: 'Favoritos a um clique',
        celulas: [
          { ref: 'Abro o navegador o tempo todo', valor: 'Fixo na barra de tarefas' },
          { ref: 'Uso o Word com frequência', valor: 'Atalho na área de trabalho' },
          { ref: 'Cansei de ir ao Menu Iniciar', valor: 'Fixo os favoritos' },
          { ref: 'Personalizar o PC', valor: 'Organizo os atalhos do meu jeito' },
        ],
        formula: 'Clique direito + "Fixar" = favoritos a um clique todo dia',
        resultado: 'Seus programas do dia a dia sempre à mão, sem procurar.',
        comentario: 'A barra de tarefas é o melhor lugar pros 4 ou 5 programas que você usa o tempo todo — ela fica sempre visível, mesmo com janelas abertas. Reserve-a pros campeões de uso; os demais você abre pelo Menu Iniciar quando precisar.',
      },
      vocabulario: [
        { palavra: 'Atalho', def: 'Botão que abre um programa diretamente, sem procurar.' },
        { palavra: 'Barra de tarefas', def: 'A faixa na base da tela, sempre visível, pra fixar favoritos.' },
        { palavra: 'Fixar', def: 'Prender um programa num lugar de acesso rápido.' },
      ],
      chave: [
        'Atalhos deixam os programas a um clique',
        'Barra de tarefas: pros usados o tempo todo (sempre visível)',
        'Clique direito → "Fixar na barra de tarefas"',
      ],
      porque: 'Procurar o mesmo programa toda vez no Menu Iniciar desperdiça tempo e paciência. Fixar os favoritos na barra de tarefas e na área de trabalho personaliza o computador pro seu uso e dá agilidade ao dia a dia.',
    },
    pratica: {
      instrucao: 'Vamos deixar seus programas favoritos a um clique.',
      passos: [
        'Pense em 3 programas que você usa o tempo todo',
        'Encontre um deles no Menu Iniciar e clique com o botão direito',
        'Escolha "Fixar na barra de tarefas"',
        'Veja o atalho aparecer na faixa da base da tela',
        'Repita pros outros favoritos e teste abrir por eles',
      ],
    },
    desafio: {
      cenario: 'Personalize o acesso: identifique os programas que você mais usa, fixe-os na barra de tarefas (sempre visível) e/ou crie atalhos na área de trabalho, deixando seus favoritos a um clique e o computador organizado do seu jeito.',
      requisitos: [
        'Identifiquei meus programas mais usados',
        'Fixei ao menos um na barra de tarefas',
        'Sei a diferença entre barra e área de trabalho',
        'Testei abrir os programas pelos atalhos',
        'Organizei os atalhos do meu jeito',
      ],
      dica: 'Você também pode reorganizar a ordem dos atalhos na barra de tarefas só arrastando-os pra esquerda ou direita. E, se fixar algo por engano, é só clicar com o direito e escolher "Desafixar". Tudo reversível — experimente à vontade.',
    },
    validacao: [
      'Entendo o que é um atalho',
      'Fixo programas na barra de tarefas',
      'Crio atalhos na área de trabalho',
      'Deixo meus favoritos a um clique',
      'Organizo os atalhos do meu jeito',
    ],
  },

  'pc-apps-8': {
    trilhaId: 'pc-apps', numero: 8, titulo: 'Projeto: monte o conjunto ideal de programas',
    tempoTotal: 16, xp: 110, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo: pensar no que você realmente faz no computador, conferir o que já tem, planejar o que falta (preferindo a loja e fontes seguras), limpar o que não usa e deixar os favoritos a um clique. No fim, um PC equipado e organizado pro seu jeito — sem excessos, sem faltas.',
      conceito: {
        titulo: 'Um computador equipado é o que tem o certo, não o máximo',
        texto: 'Este projeto reúne toda a trilha numa curadoria pessoal dos seus programas. Você vai LISTAR suas tarefas reais no PC (e-mail, fotos, documentos, chamadas...), CONFERIR o que já está instalado (inclusive os nativos do Windows), PLANEJAR o que falta — sempre pela Microsoft Store ou de fontes oficiais —, DESINSTALAR o que não usa e FIXAR os favoritos pra acesso rápido. O resultado é um computador enxuto e sob medida: tem tudo que você precisa, nada de supérfluo, e o que importa fica a um clique. Esse é o equilíbrio que mantém a máquina leve e a sua rotina fluida.',
      },
      estrutura: {
        titulo: 'A curadoria dos programas',
        partes: [
          { simbolo: '📝', desc: 'Listar suas tarefas reais no computador.' },
          { simbolo: '🔍', desc: 'Conferir o que já tem (inclusive os nativos).' },
          { simbolo: '🛒', desc: 'Planejar o que falta via Store/fontes seguras.' },
          { simbolo: '🧹', desc: 'Desinstalar o inútil e fixar os favoritos.' },
        ],
      },
      exemplo: {
        titulo: 'O PC sob medida',
        celulas: [
          { ref: 'Minhas tarefas reais', valor: 'E-mail, fotos, docs, chamadas' },
          { ref: 'O que já tenho', valor: 'Nativos + instalados conferidos' },
          { ref: 'O que falta', valor: 'Planejado via Store/oficial' },
          { ref: 'O que não uso', valor: 'Desinstalado; favoritos fixados' },
        ],
        formula: 'Listar + conferir + planejar + limpar + fixar = PC sob medida',
        resultado: 'Um computador enxuto, seguro e organizado pro seu jeito.',
        comentario: 'A meta não é ter o máximo de programas, e sim os certos. Um PC com poucos programas bem escolhidos, todos usados e à mão, funciona melhor e mais rápido do que um lotado de coisas instaladas "por via das dúvidas". Menos, porém certo.',
      },
      vocabulario: [
        { palavra: 'Curadoria', def: 'Escolher com cuidado o conjunto certo de programas.' },
        { palavra: 'Sob medida', def: 'Ajustado exatamente ao seu jeito de usar o computador.' },
        { palavra: 'Enxuto', def: 'Com só o necessário, sem programas supérfluos.' },
      ],
      chave: [
        'O projeto reúne toda a trilha numa curadoria pessoal',
        'Listar tarefas, conferir, planejar (Store/oficial), limpar, fixar',
        'A meta é ter os programas certos, não o máximo deles',
      ],
      porque: 'Reunir as habilidades num projeto entrega um computador realmente sob medida: equipado com o que você usa, livre do que não usa, seguro nas instalações e organizado pra acesso rápido. É o PC trabalhando a seu favor.',
    },
    pratica: {
      instrucao: 'Vamos montar o conjunto ideal de programas do seu PC.',
      passos: [
        'Liste num papel as tarefas que você realmente faz no computador',
        'Confira na lista de Aplicativos e no Menu Iniciar o que você já tem (inclua os nativos)',
        'Marque o que falta e planeje instalar pela Store ou de fontes oficiais',
        'Identifique e desinstale programas que você reconhece e não usa',
        'Fixe seus programas favoritos na barra de tarefas',
        'Revise: tudo que precisa está presente, o supérfluo saiu, os favoritos estão à mão',
      ],
    },
    desafio: {
      cenario: 'Faça a curadoria do seu PC: liste suas tarefas reais, confira o que já tem (incluindo nativos), planeje o que falta via Store/fontes seguras, desinstale o que não usa e fixe os favoritos — entregando um computador enxuto, seguro e sob medida.',
      requisitos: [
        'Listei minhas tarefas reais no computador',
        'Conferi o que já tenho, incluindo os nativos',
        'Planejei o que falta via Store/fontes oficiais',
        'Desinstalei programas que não uso',
        'Fixei meus favoritos pra acesso rápido',
      ],
      dica: 'Guarde sua lista de tarefas e programas — ela vira um mapa útil se um dia você precisar reinstalar o Windows ou configurar um computador novo: é só seguir a lista pra deixar a máquina nova do seu jeito rapidinho, sem esquecer nada.',
    },
    validacao: [
      'Listo minhas tarefas reais no PC',
      'Confiro o que já tenho (com os nativos)',
      'Planejo o que falta com segurança',
      'Desinstalo o que não uso',
      'Fixo os favoritos pra acesso rápido',
    ],
  },
};
