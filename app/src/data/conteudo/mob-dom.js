// ============================================================================
// CONTEÚDO — Domínio do Celular (mob-dom)
// Configurações, organização, conforto e manutenção do smartphone. Vertente celular.
// (Instruções valem pra Android e iPhone; quando diferem, o texto avisa.)
// ============================================================================

export const MOB_DOM = {
  'mob-dom-1': {
    trilhaId: 'mob-dom', numero: 1, titulo: 'As configurações principais',
    tempoTotal: 8, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Você usa o celular o dia todo, mas tem medo de "mexer nos ajustes pra não estragar"? Esse medo te impede de deixar o aparelho do seu jeito. Hoje você vai entrar nas Configurações sem receio — e com mapa.',
      conceito: {
        titulo: 'As Configurações são o "painel de controle" do celular',
        texto: 'Todo celular tem um app chamado Configurações (ou Ajustes), com um ícone de engrenagem ⚙️. É ali que você controla tudo: internet, som, tela, notificações, contas, segurança. Não tem como "estragar" só de olhar — e a maioria das mudanças é reversível. Conhecer as seções principais te dá poder sobre o aparelho, em vez de só usá-lo no automático.',
      },
      estrutura: {
        titulo: 'As seções que mais importam',
        partes: [
          { simbolo: '📶', desc: 'Conexões/Rede: Wi-Fi, dados móveis, Bluetooth.' },
          { simbolo: '🔔', desc: 'Notificações: o que cada app pode (ou não) te avisar.' },
          { simbolo: '🔆', desc: 'Tela/Display: brilho, tamanho da letra, modo escuro.' },
          { simbolo: '🔒', desc: 'Segurança e Contas: senha de bloqueio, contas Google/Apple.' },
        ],
      },
      exemplo: {
        titulo: 'Onde achar e como navegar',
        celulas: [
          { ref: 'Ícone', valor: 'Engrenagem ⚙️ "Configurações"/"Ajustes"' },
          { ref: 'Busca', valor: 'Há uma lupa no topo: digite o que procura' },
          { ref: 'Voltar', valor: 'Seta no canto superior esquerdo' },
          { ref: 'Reversível', valor: 'Mudou e não gostou? É só voltar atrás' },
        ],
        formula: 'Engrenagem → seção → ajuste (e a lupa acha tudo)',
        resultado: 'Você navega os ajustes com confiança.',
        comentario: 'Dica de ouro: a lupa (busca) no topo das Configurações acha qualquer ajuste pelo nome. Não sabe onde fica? Digite "brilho", "wifi", "fonte"...',
      },
      vocabulario: [
        { palavra: 'Configurações / Ajustes', def: 'O app (engrenagem ⚙️) onde você controla todo o celular.' },
        { palavra: 'Seção', def: 'Cada categoria dentro das Configurações (Rede, Tela, Som...).' },
        { palavra: 'Reversível', def: 'Mudança que dá pra desfazer voltando ao ajuste.' },
      ],
      chave: [
        'Configurações = painel de controle (ícone de engrenagem)',
        'A lupa no topo acha qualquer ajuste pelo nome',
        'Quase tudo é reversível — não tenha medo de explorar',
      ],
      porque: 'Dominar as Configurações é o que separa quem "sofre" com o celular de quem o comanda. Cada missão desta trilha mexe aqui — então conhecer o terreno é o primeiro passo pra autonomia total.',
    },
    pratica: {
      instrucao: 'Pegue seu celular e abra o app Configurações (ícone de engrenagem ⚙️).',
      passos: [
        'Encontre o ícone de engrenagem (pode estar na tela inicial ou na gaveta de apps)',
        'Abra e role a lista de seções, sem clicar em nada ainda — só observe',
        'Localize as seções: Conexões/Rede, Notificações, Tela, Segurança',
        'Toque em "Tela" (ou "Display"), veja as opções, e use a seta pra voltar',
        'Ache a lupa (busca) no topo e digite "brilho"',
        'Veja o ajuste de brilho aparecer direto pela busca',
        'Volte pra tela inicial (sem mudar nada ainda)',
      ],
    },
    desafio: {
      cenario: 'Explore as Configurações com confiança: encontre 4 seções principais e use a busca pra localizar 2 ajustes específicos.',
      requisitos: [
        'Abri o app Configurações',
        'Encontrei as seções de Rede, Notificações, Tela e Segurança',
        'Entrei numa seção e voltei usando a seta',
        'Usei a lupa pra achar "brilho"',
        'Usei a lupa pra achar outro ajuste (ex: "fonte")',
      ],
      dica: 'Toda vez que alguém disser "vá nas configurações e ative X", lembre da lupa: digite o nome do ajuste e ele aparece, sem você precisar caçar em menus.',
    },
    validacao: [
      'Sei abrir as Configurações',
      'Reconheço as seções principais',
      'Sei entrar e voltar de uma seção',
      'Sei usar a busca (lupa)',
      'Perdi o medo de explorar os ajustes',
    ],
  },

  'mob-dom-2': {
    trilhaId: 'mob-dom', numero: 2, titulo: 'Organizar apps em pastas',
    tempoTotal: 7, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Tela do celular com 8 páginas de apps bagunçados, e você nunca acha o que quer? Organizar em pastas é como arrumar uma gaveta: leva 5 minutos e facilita a vida todos os dias.',
      conceito: {
        titulo: 'Pastas juntam apps parecidos',
        texto: 'Você pode agrupar apps em pastas na tela inicial: uma pasta "Bancos" com os apps de banco, uma "Saúde", uma "Redes". Isso deixa a tela limpa e tudo fácil de achar. Criar uma pasta é simples: você arrasta um app por cima de outro e eles se juntam. Dá pra nomear a pasta e adicionar mais apps. É organização visual que reduz a sensação de bagunça.',
      },
      estrutura: {
        titulo: 'Criando e usando pastas',
        partes: [
          { simbolo: '👆', desc: 'Segurar: pressione um app até ele "soltar" (entra no modo de mover).' },
          { simbolo: '🟰', desc: 'Juntar: arraste um app por cima de outro — vira uma pasta.' },
          { simbolo: '🏷️', desc: 'Nomear: toque na pasta e dê um nome (Bancos, Saúde, Redes...).' },
          { simbolo: '➕', desc: 'Adicionar: arraste outros apps pra dentro da pasta.' },
        ],
      },
      exemplo: {
        titulo: 'Pastas úteis pro dia a dia',
        celulas: [
          { ref: 'Bancos', valor: 'Apps do banco, PIX, carteira' },
          { ref: 'Saúde', valor: 'Conecte SUS, farmácia, plano' },
          { ref: 'Redes', valor: 'WhatsApp, Facebook, Instagram' },
          { ref: 'Mais usados', valor: 'Deixe na primeira tela, fora de pastas' },
        ],
        formula: 'Arrastar um app sobre outro = pasta',
        resultado: 'Tela limpa, tudo fácil de achar.',
        comentario: 'Deixe os 4-6 apps que você MAIS usa soltos na primeira tela (acesso rápido), e agrupe o resto em pastas por tema.',
      },
      vocabulario: [
        { palavra: 'Pasta', def: 'Um agrupamento de apps na tela inicial, por tema.' },
        { palavra: 'Tela inicial', def: 'A tela principal do celular, com os apps e atalhos.' },
        { palavra: 'Gaveta de apps', def: 'No Android, a lista com TODOS os apps instalados (ícone de grade).' },
      ],
      chave: [
        'Arraste um app sobre outro pra criar uma pasta',
        'Nomeie as pastas por tema (Bancos, Saúde...)',
        'Apps mais usados soltos na 1ª tela; o resto em pastas',
      ],
      porque: 'Um celular organizado reduz o estresse e o tempo perdido procurando apps. Pequena mudança, grande conforto no dia a dia — especialmente quando você precisa achar algo rápido (um banco, um documento).',
    },
    pratica: {
      instrucao: 'Pegue seu celular na tela inicial. Vamos criar sua primeira pasta.',
      passos: [
        'Escolha dois apps do mesmo tema (ex: dois apps de banco)',
        'Pressione e segure um deles até ele "soltar" (vibra/balança)',
        'Arraste-o por cima do outro app e solte',
        'Eles viram uma pasta — toque nela pra abrir',
        'Toque no nome da pasta e escreva um título (ex: "Bancos")',
        'Arraste mais um app pra dentro da pasta',
        'Toque fora pra fechar e veja a tela mais organizada',
      ],
    },
    desafio: {
      cenario: 'Organize sua tela inicial: crie pelo menos 3 pastas temáticas e deixe os apps mais usados de fácil acesso.',
      requisitos: [
        'Criei pelo menos 3 pastas por tema',
        'Nomeei cada pasta claramente',
        'Coloquei os apps certos em cada uma',
        'Deixei os apps mais usados na primeira tela',
        'Minha tela ficou visivelmente mais organizada',
      ],
      dica: 'Não precisa guardar tudo em pastas. O equilíbrio é: o que você usa todo dia fica à mão; o resto, agrupado por tema. Refaça quando quiser — é só arrastar.',
    },
    validacao: [
      'Sei criar uma pasta arrastando apps',
      'Sei nomear uma pasta',
      'Sei adicionar apps a uma pasta',
      'Deixei os mais usados acessíveis',
      'Minha tela está mais organizada',
    ],
  },

  'mob-dom-3': {
    trilhaId: 'mob-dom', numero: 3, titulo: 'Letra maior, brilho e som',
    tempoTotal: 6, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Apertando os olhos pra ler no celular? Tela clara demais ao sol ou ofuscando à noite? Som baixo na ligação? Tudo isso se ajusta em segundos — pro celular ficar confortável PRO SEU jeito.',
      conceito: {
        titulo: 'O celular se adapta a você, não o contrário',
        texto: 'Você não precisa sofrer com letra pequena ou brilho ruim. O celular permite aumentar o tamanho da fonte (pra ler sem esforço), ajustar o brilho da tela (manual ou automático) e controlar os volumes (toque, mídia, ligação) separadamente. São ajustes de conforto que fazem diferença enorme no uso diário — especialmente pra quem tem mais de 40 anos.',
      },
      estrutura: {
        titulo: 'Os 3 ajustes de conforto',
        partes: [
          { simbolo: '🔤', desc: 'Tamanho da fonte: Configurações → Tela → Tamanho da fonte (aumente sem medo).' },
          { simbolo: '🔆', desc: 'Brilho: deslize na barra; ative "brilho automático" pra ajustar sozinho ao ambiente.' },
          { simbolo: '🔊', desc: 'Volumes: os botões laterais + a tela de volume controlam toque, mídia e chamada.' },
          { simbolo: '🌙', desc: 'Modo escuro: fundo escuro cansa menos a vista à noite (Tela → Modo escuro).' },
        ],
      },
      exemplo: {
        titulo: 'Ajustes que aliviam',
        celulas: [
          { ref: 'Fonte', valor: 'Aumente 1-2 níveis → leitura sem apertar os olhos' },
          { ref: 'Brilho', valor: 'Automático → ajusta ao sol e à noite sozinho' },
          { ref: 'Volume', valor: 'Toque alto pra não perder ligações' },
          { ref: 'Noite', valor: 'Modo escuro → menos cansaço visual' },
        ],
        formula: 'Conforto = fonte maior + brilho automático + volume certo',
        resultado: 'O celular fica agradável de usar o dia todo.',
        comentario: 'Aumentar a fonte NÃO é "coisa de quem não enxerga" — é inteligência. Por que forçar a vista se o aparelho pode mostrar tudo maior?',
      },
      vocabulario: [
        { palavra: 'Tamanho da fonte', def: 'O quão grandes as letras aparecem na tela.' },
        { palavra: 'Brilho automático', def: 'Recurso que ajusta o brilho da tela conforme a luz do ambiente.' },
        { palavra: 'Modo escuro', def: 'Tema de fundo escuro, mais confortável à noite e que economiza bateria.' },
      ],
      chave: [
        'Aumente a fonte pra ler sem esforço (sem vergonha disso)',
        'Brilho automático resolve sol e escuro sozinho',
        'Controle os volumes (toque, mídia, chamada) separados',
      ],
      porque: 'Conforto visual e sonoro evita dores de cabeça, vista cansada e ligações perdidas. Ajustar o celular ao seu jeito é autocuidado — e torna todo o resto do uso mais prazeroso.',
    },
    pratica: {
      instrucao: 'Pegue seu celular. Vamos deixar tudo confortável pra você.',
      passos: [
        'Abra Configurações → Tela (ou use a lupa: "tamanho da fonte")',
        'Aumente o tamanho da fonte 1 ou 2 níveis e veja a diferença',
        'Volte e ative o "brilho automático" (ou ajuste o brilho na barra)',
        'Procure "Modo escuro" e experimente ligar/desligar',
        'Aperte os botões de volume na lateral e veja a tela de volume',
        'Ajuste o volume do toque pra um nível que você ouça bem',
        'Mantenha os ajustes que ficaram confortáveis',
      ],
    },
    desafio: {
      cenario: 'Deixe seu celular confortável pro seu uso: fonte no tamanho ideal, brilho ajustado e volumes adequados.',
      requisitos: [
        'Ajustei o tamanho da fonte pro meu conforto',
        'Configurei o brilho (manual ou automático)',
        'Experimentei o modo escuro',
        'Ajustei o volume do toque pra ouvir bem',
        'O celular ficou mais confortável de usar',
      ],
      dica: 'Se mesmo com a fonte maior algo ainda estiver pequeno, procure "Zoom" ou "Ampliação" nas Configurações de Acessibilidade — dá pra ampliar qualquer parte da tela com um gesto.',
    },
    validacao: [
      'Sei aumentar o tamanho da fonte',
      'Sei ajustar o brilho',
      'Conheço o modo escuro',
      'Sei controlar os volumes',
      'Deixei o celular confortável',
    ],
  },

  'mob-dom-4': {
    trilhaId: 'mob-dom', numero: 4, titulo: 'Notificações: o que silenciar',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Seu celular apita o dia todo: promoção de loja, joguinho, grupo barulhento. Esse bombardeio cansa e faz você perder o que importa de verdade. Controlar notificações devolve sua paz.',
      conceito: {
        titulo: 'Você decide quem pode te interromper',
        texto: 'Notificação é aquele aviso (som, vibração, mensagem na tela) que os apps mandam. O problema: por padrão, quase todo app vem autorizado a te interromper. Você pode (e deve) escolher: apps importantes (banco, WhatsApp de família) avisam; apps barulhentos (jogos, lojas) ficam silenciados. Menos interrupção = mais foco e menos ansiedade.',
      },
      estrutura: {
        titulo: 'Domando as notificações',
        partes: [
          { simbolo: '🔕', desc: 'Silenciar um app: Configurações → Notificações → escolha o app → desligar.' },
          { simbolo: '⚡', desc: 'Atalho: segure a notificação quando ela aparecer → opção de silenciar/desligar.' },
          { simbolo: '🌙', desc: 'Não Perturbe: silencia tudo num horário (ex: à noite), deixando só exceções.' },
          { simbolo: '⭐', desc: 'Prioridade: mantenha ligadas só as que importam (ligações, mensagens, banco).' },
        ],
      },
      exemplo: {
        titulo: 'O que manter x silenciar',
        celulas: [
          { ref: 'Manter', valor: 'Ligações, WhatsApp (família), banco, agenda' },
          { ref: 'Silenciar', valor: 'Jogos, lojas, promoções, grupos barulhentos' },
          { ref: 'Não Perturbe', valor: 'Ativar das 22h às 7h (dormir em paz)' },
        ],
        formula: 'Importante avisa · barulhento silencia · noite = Não Perturbe',
        resultado: 'Menos apitos inúteis, mais paz e foco.',
        comentario: 'Silenciar não apaga o app nem as mensagens — você ainda as vê quando abrir. Só para de ser interrompido a cada minuto.',
      },
      vocabulario: [
        { palavra: 'Notificação', def: 'Aviso que um app manda (som, vibração ou mensagem na tela).' },
        { palavra: 'Não Perturbe', def: 'Modo que silencia notificações num período, com exceções que você define.' },
        { palavra: 'Silenciar', def: 'Impedir um app de te avisar, sem desinstalá-lo.' },
      ],
      chave: [
        'Você escolhe quais apps podem te interromper',
        'Silencie jogos, lojas e grupos barulhentos',
        'Use "Não Perturbe" à noite pra dormir em paz',
      ],
      porque: 'O excesso de notificações causa ansiedade e faz você perder avisos importantes no meio do ruído. Controlá-las é um dos ajustes que mais melhora a relação com o celular.',
    },
    pratica: {
      instrucao: 'Pegue seu celular. Vamos silenciar o que te incomoda.',
      passos: [
        'Espere uma notificação "inútil" aparecer (jogo, loja) — ou abra Configurações → Notificações',
        'Segure a notificação (ou toque no app na lista) e escolha silenciar/desligar',
        'Repita pros 2-3 apps que mais te incomodam',
        'Confirme que apps importantes (WhatsApp, banco, ligações) continuam ligados',
        'Procure "Não Perturbe" nas Configurações',
        'Configure-o pra ligar automaticamente à noite (ex: 22h às 7h)',
        'Defina exceções (ex: ligações de favoritos passam mesmo assim)',
      ],
    },
    desafio: {
      cenario: 'Faça uma "faxina de notificações": silencie os apps barulhentos e configure o Não Perturbe pra seu descanso.',
      requisitos: [
        'Silenciei pelo menos 3 apps que me incomodavam',
        'Confirmei que os apps importantes continuam avisando',
        'Configurei o Não Perturbe pra um horário',
        'Defini exceções no Não Perturbe (ex: ligações importantes)',
        'Sinto o celular menos "barulhento"',
      ],
      dica: 'Revise as notificações a cada novo app que instalar: muitos pedem permissão pra avisar de tudo. Pergunte-se "isso precisa me interromper?". Quase sempre, não.',
    },
    validacao: [
      'Sei silenciar um app específico',
      'Mantive os avisos importantes ligados',
      'Configurei o Não Perturbe',
      'Defini exceções',
      'Reduzi o excesso de notificações',
    ],
  },

  'mob-dom-5': {
    trilhaId: 'mob-dom', numero: 5, titulo: 'Armazenamento cheio?',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: '"Armazenamento cheio" na hora de tirar uma foto ou instalar um app? Antes de sair apagando coisas no desespero (e perder o que importa), aprenda o que liberar com segurança.',
      conceito: {
        titulo: 'Liberar espaço sem perder o que importa',
        texto: 'O celular tem um espaço limitado pra guardar fotos, vídeos, apps e arquivos. Quando enche, ele avisa e trava algumas funções. A solução não é apagar tudo no susto, mas liberar espaço de forma inteligente: apagar o que é descartável (caches, downloads antigos, apps que não usa) e proteger o que importa (fazendo backup das fotos antes). Saber o que ocupa espaço é o primeiro passo.',
      },
      estrutura: {
        titulo: 'O que liberar com segurança',
        partes: [
          { simbolo: '📊', desc: 'Ver o que ocupa: Configurações → Armazenamento mostra o que mais pesa.' },
          { simbolo: '🗑️', desc: 'Apps que não usa: desinstale os que você não abre há meses.' },
          { simbolo: '🧹', desc: 'Cache e arquivos temporários: limpe (não apaga seus dados, só lixo técnico).' },
          { simbolo: '☁️', desc: 'Fotos/vídeos: faça backup na nuvem ANTES de apagar do celular.' },
        ],
      },
      exemplo: {
        titulo: 'O que pesa mais (geralmente)',
        celulas: [
          { ref: 'Fotos/vídeos', valor: 'O maior vilão → backup na nuvem primeiro' },
          { ref: 'Apps grandes', valor: 'Jogos, apps que você não usa → desinstalar' },
          { ref: 'WhatsApp', valor: 'Mídias de grupos acumulam → limpar nos ajustes do app' },
          { ref: 'Downloads', valor: 'Arquivos baixados antigos → apagar' },
        ],
        formula: 'Backup do importante → apagar o descartável',
        resultado: 'Espaço livre sem perder nada que importa.',
        comentario: 'NUNCA apague fotos antes de confirmar que estão salvas na nuvem (Google Fotos/iCloud). A trilha "Fotos e Backup" ensina isso a fundo.',
      },
      vocabulario: [
        { palavra: 'Armazenamento', def: 'O espaço do celular pra guardar fotos, apps e arquivos.' },
        { palavra: 'Cache', def: 'Arquivos temporários que os apps criam; podem ser limpos sem perder dados.' },
        { palavra: 'Desinstalar', def: 'Remover um app do celular (libera o espaço que ele ocupava).' },
      ],
      chave: [
        'Veja o que ocupa espaço em Configurações → Armazenamento',
        'Apague o descartável: apps não usados, cache, downloads antigos',
        'Faça backup das fotos na nuvem ANTES de apagá-las',
      ],
      porque: 'Celular cheio trava, fica lento e impede tarefas importantes (tirar foto de um documento, instalar o app do banco). Saber liberar espaço com segurança mantém o aparelho funcional sem perder memórias.',
    },
    pratica: {
      instrucao: 'Pegue seu celular. Vamos ver o que ocupa espaço e liberar com segurança.',
      passos: [
        'Abra Configurações → Armazenamento (ou busque "armazenamento")',
        'Veja quanto espaço está usado e o que mais pesa',
        'Liste 2-3 apps que você não usa há meses',
        'Desinstale um deles (segure o app → Desinstalar, ou pela lista de apps)',
        'Procure a opção de limpar cache/arquivos temporários e use',
        'Confirme se suas fotos estão com backup na nuvem (não apague ainda se não tiver certeza)',
        'Veja o espaço livre aumentar',
      ],
    },
    desafio: {
      cenario: 'Libere espaço no seu celular com segurança: identifique o que pesa, desinstale o que não usa e limpe arquivos temporários.',
      requisitos: [
        'Vi o que ocupa espaço no Armazenamento',
        'Desinstalei pelo menos um app que não uso',
        'Limpei cache/arquivos temporários',
        'Confirmei que minhas fotos têm backup antes de cogitar apagá-las',
        'Consegui liberar espaço',
      ],
      dica: 'Regra de segurança: backup primeiro, apagar depois. E desconfie de apps "limpadores de celular" que prometem milagres — muitos são propaganda ou até golpe. Os ajustes nativos do celular já resolvem.',
    },
    validacao: [
      'Sei ver o que ocupa espaço',
      'Sei desinstalar apps que não uso',
      'Sei limpar cache com segurança',
      'Faço backup antes de apagar fotos',
      'Consegui liberar espaço',
    ],
  },

  'mob-dom-6': {
    trilhaId: 'mob-dom', numero: 6, titulo: 'Wi-Fi, Bluetooth e dados móveis',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Internet acabando rápido demais no fim do mês? Não sabe a diferença entre Wi-Fi e "dados"? Entender suas conexões te faz economizar internet e dinheiro — e conectar fones, caixas de som e o carro sem mistério.',
      conceito: {
        titulo: 'Três conexões, três finalidades',
        texto: 'O celular se conecta de três jeitos principais. Wi-Fi: internet sem fio de um local (casa, trabalho) — geralmente ilimitada e grátis pra você. Dados móveis: a internet do seu plano de celular, que funciona em qualquer lugar mas tem limite (a "franquia"). Bluetooth: conexão de curto alcance pra ligar fones, caixas de som, smartwatch. Saber quando usar cada um economiza sua franquia e resolve conexões do dia a dia.',
      },
      estrutura: {
        titulo: 'Quando e como usar cada uma',
        partes: [
          { simbolo: '📶', desc: 'Wi-Fi: conecte em casa/trabalho pra NÃO gastar a franquia (escolha a rede e digite a senha).' },
          { simbolo: '📱', desc: 'Dados móveis: use na rua; desligue quando estiver no Wi-Fi pra economizar.' },
          { simbolo: '🔵', desc: 'Bluetooth: ligue pra parear fones/caixas; desligue quando não usa (economiza bateria).' },
          { simbolo: '⚡', desc: 'Atalho rápido: arraste de cima pra baixo na tela pra ligar/desligar as três.' },
        ],
      },
      exemplo: {
        titulo: 'Economizando a franquia',
        celulas: [
          { ref: 'Em casa', valor: 'Wi-Fi ligado → não gasta dados' },
          { ref: 'Na rua', valor: 'Dados móveis → para coisas essenciais' },
          { ref: 'Vídeos', valor: 'Só no Wi-Fi (vídeo gasta MUITA internet)' },
          { ref: 'Fone', valor: 'Bluetooth pra conectar sem fio' },
        ],
        formula: 'Wi-Fi quando der · dados com cuidado · Bluetooth pra acessórios',
        resultado: 'Internet que dura o mês e acessórios conectados.',
        comentario: 'Vídeos (YouTube, filmes) e atualizações de apps gastam muito. Deixe pra fazer no Wi-Fi. Assim sua franquia de dados sobra pro essencial na rua.',
      },
      vocabulario: [
        { palavra: 'Wi-Fi', def: 'Internet sem fio de um local (casa, trabalho), via uma rede com senha.' },
        { palavra: 'Dados móveis', def: 'A internet do plano do celular; tem limite (franquia) e funciona em qualquer lugar.' },
        { palavra: 'Bluetooth', def: 'Conexão de curto alcance pra ligar fones, caixas, relógios.' },
      ],
      chave: [
        'Wi-Fi em casa/trabalho economiza a franquia',
        'Vídeos e atualizações: deixe pro Wi-Fi (gastam muito)',
        'Bluetooth conecta acessórios; o atalho de cima liga tudo rápido',
      ],
      porque: 'Entender as conexões evita o desespero de "acabou a internet" e contas extras. E saber usar Bluetooth conecta você a fones e caixas — conforto que muita gente nem aproveita por não saber.',
    },
    pratica: {
      instrucao: 'Pegue seu celular. Vamos dominar as três conexões.',
      passos: [
        'Arraste de cima pra baixo na tela pra abrir o painel de atalhos rápidos',
        'Identifique os ícones de Wi-Fi, dados móveis e Bluetooth',
        'Toque no Wi-Fi: veja as redes disponíveis; conecte na sua (digite a senha)',
        'Confirme que, com Wi-Fi ligado, você não gasta dados',
        'Ligue o Bluetooth e veja ele procurar dispositivos (se tiver um fone, pareie)',
        'Pratique ligar/desligar cada um pelo painel de atalhos',
        'Veja em Configurações → Conexões os detalhes de cada uma',
      ],
    },
    desafio: {
      cenario: 'Configure suas conexões pra economizar: conecte no Wi-Fi de casa e entenda quando usar dados móveis e Bluetooth.',
      requisitos: [
        'Conectei no Wi-Fi (escolhi a rede e digitei a senha)',
        'Sei ligar/desligar Wi-Fi, dados e Bluetooth pelo atalho',
        'Entendo que vídeos/atualizações devo fazer no Wi-Fi',
        'Testei o Bluetooth (procurar/parear)',
        'Sei como economizar minha franquia de dados',
      ],
      dica: 'Configure os apps pra atualizar "só no Wi-Fi" (na loja de apps → ajustes). Assim você nunca toma um susto com a franquia consumida por uma atualização pesada na rua.',
    },
    validacao: [
      'Entendo Wi-Fi, dados móveis e Bluetooth',
      'Sei conectar numa rede Wi-Fi',
      'Sei ligar/desligar pelo atalho rápido',
      'Sei o que gasta mais internet',
      'Sei parear um dispositivo Bluetooth',
    ],
  },

  'mob-dom-7': {
    trilhaId: 'mob-dom', numero: 7, titulo: 'Atualizar apps e o sistema',
    tempoTotal: 7, xp: 40, vertente: 'celular',
    aula: {
      gancho: '"Tem uma atualização disponível." Você ignora há meses? Atualizar não é só "novidade" — é principalmente SEGURANÇA. Apps e sistema desatualizados são a porta de entrada favorita de golpistas.',
      conceito: {
        titulo: 'Atualizar é, acima de tudo, se proteger',
        texto: 'Atualizações trazem melhorias e corrigem falhas de segurança que criminosos exploram. Há dois tipos: as dos apps (pela loja — Play Store no Android, App Store no iPhone) e a do sistema operacional (nas Configurações). Manter tudo atualizado fecha brechas e mantém o celular rápido e seguro. É um hábito simples com enorme retorno em proteção.',
      },
      estrutura: {
        titulo: 'Os dois tipos de atualização',
        partes: [
          { simbolo: '🛍️', desc: 'Apps: na loja (Play Store/App Store) → seu perfil → "Atualizar tudo".' },
          { simbolo: '⚙️', desc: 'Sistema: Configurações → "Atualização de software" → buscar/instalar.' },
          { simbolo: '📶', desc: 'Faça no Wi-Fi (atualizações são pesadas) e com bateria/carregando.' },
          { simbolo: '🛡️', desc: 'Por que importa: a maioria das atualizações corrige falhas de segurança.' },
        ],
      },
      exemplo: {
        titulo: 'Atualizar com tranquilidade',
        celulas: [
          { ref: 'Quando', valor: 'No Wi-Fi, à noite ou com tempo livre' },
          { ref: 'Apps', valor: 'Loja → perfil → Atualizar tudo' },
          { ref: 'Sistema', valor: 'Configurações → Atualização de software' },
          { ref: 'Segurança', valor: 'Atualizado = brechas fechadas' },
        ],
        formula: 'Apps (loja) + sistema (configurações), no Wi-Fi',
        resultado: 'Celular seguro, rápido e funcionando bem.',
        comentario: 'Pode ativar "atualização automática de apps no Wi-Fi" pra não precisar lembrar. O sistema costuma avisar quando há atualização — não adie.',
      },
      vocabulario: [
        { palavra: 'Atualização', def: 'Nova versão de um app ou do sistema, com melhorias e correções.' },
        { palavra: 'Sistema operacional', def: 'O "cérebro" do celular (Android ou iOS/iPhone).' },
        { palavra: 'Falha de segurança', def: 'Uma brecha que criminosos podem explorar; atualizações a corrigem.' },
      ],
      chave: [
        'Atualizar é principalmente questão de SEGURANÇA',
        'Apps pela loja; sistema pelas Configurações',
        'Faça no Wi-Fi; pode ativar atualização automática',
      ],
      porque: 'Aparelhos desatualizados são alvos fáceis de golpes e vírus. Manter apps e sistema em dia é uma das defesas mais simples e eficazes — base pro módulo de Segurança que você verá adiante.',
    },
    pratica: {
      instrucao: 'Pegue seu celular conectado no Wi-Fi. Vamos atualizar com segurança.',
      passos: [
        'Abra a loja de apps (Play Store no Android / App Store no iPhone)',
        'Toque no seu perfil (canto superior) e procure "Gerenciar apps" / atualizações',
        'Veja a lista de apps com atualização disponível e toque em "Atualizar tudo"',
        'Enquanto baixa, vá em Configurações → "Atualização de software"',
        'Toque em "Buscar atualização" e instale se houver (estando no Wi-Fi)',
        'Ative a atualização automática de apps no Wi-Fi (nos ajustes da loja)',
        'Pronto: celular em dia e mais seguro',
      ],
    },
    desafio: {
      cenario: 'Deixe seu celular em dia: atualize os apps, verifique a atualização do sistema e configure a atualização automática no Wi-Fi.',
      requisitos: [
        'Atualizei os apps pela loja',
        'Verifiquei a atualização do sistema nas Configurações',
        'Fiz tudo conectado no Wi-Fi',
        'Ativei a atualização automática de apps no Wi-Fi',
        'Entendo que atualizar é proteção',
      ],
      dica: 'Adote o hábito: uma vez por semana, no Wi-Fi, abra a loja e atualize tudo. Leva 2 minutos e é uma das coisas mais importantes que você faz pela segurança do seu celular.',
    },
    validacao: [
      'Sei atualizar apps pela loja',
      'Sei verificar a atualização do sistema',
      'Faço atualizações no Wi-Fi',
      'Ativei atualização automática',
      'Entendo que atualizar protege',
    ],
  },

  'mob-dom-8': {
    trilhaId: 'mob-dom', numero: 8, titulo: 'Projeto: deixe seu celular leve',
    tempoTotal: 18, xp: 100, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: você vai fazer um "pit stop" completo no seu celular — organizado, confortável, leve, seguro e em dia. No fim, ele vai parecer (e funcionar) como novo.',
      conceito: {
        titulo: 'Um celular bem cuidado é um prazer de usar',
        texto: 'Assim como um carro precisa de revisão, o celular merece uma "manutenção" de vez em quando. Este projeto reúne tudo da trilha: organizar apps em pastas, ajustar conforto (fonte, brilho, som), domar notificações, liberar espaço, checar conexões e atualizar tudo. O resultado é um aparelho leve, rápido, confortável e seguro — feito do SEU jeito.',
      },
      estrutura: {
        titulo: 'O checklist do pit stop',
        partes: [
          { simbolo: '🗂️', desc: 'Organização: apps em pastas, mais usados à mão.' },
          { simbolo: '👁️', desc: 'Conforto: fonte, brilho e volumes ajustados.' },
          { simbolo: '🔕', desc: 'Notificações: barulhentos silenciados, Não Perturbe configurado.' },
          { simbolo: '🧹', desc: 'Limpeza + atualização: espaço liberado e tudo em dia.' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois do pit stop',
        celulas: [
          { ref: 'Antes', valor: 'Bagunçado, apitando, cheio, desatualizado' },
          { ref: 'Depois', valor: 'Organizado, silencioso, leve, seguro' },
          { ref: 'Sensação', valor: 'Parece um celular novo' },
        ],
        formula: 'Organizar + ajustar + silenciar + limpar + atualizar',
        resultado: 'Um celular leve, confortável e no seu controle.',
        comentario: 'Repita esse pit stop a cada 2-3 meses. Vira um hábito rápido que mantém o celular sempre gostoso de usar.',
      },
      vocabulario: [
        { palavra: 'Manutenção', def: 'Cuidados periódicos que mantêm o celular funcionando bem.' },
        { palavra: 'Pit stop', def: 'Uma parada rápida pra revisar e ajustar tudo de uma vez.' },
        { palavra: 'Otimizar', def: 'Deixar o celular mais rápido e eficiente.' },
      ],
      chave: [
        'Trate o celular como um carro: revisão periódica',
        'O pit stop reúne tudo da trilha num checklist',
        'Repita a cada 2-3 meses pra manter tudo leve',
      ],
      porque: 'Ao concluir este projeto, você não só aprendeu cada ajuste — você sabe cuidar do seu celular de ponta a ponta, com autonomia total. Esse domínio é a base pras trilhas de banco, Gov.br e segurança que vêm a seguir.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Faça o pit stop completo no seu celular, usando tudo da trilha.',
      passos: [
        'Organização: crie/ajuste pastas e deixe os apps mais usados na 1ª tela',
        'Conforto: confirme fonte, brilho e volumes no seu nível ideal',
        'Notificações: silencie os apps barulhentos e configure o Não Perturbe',
        'Espaço: veja o armazenamento, desinstale apps que não usa, limpe cache',
        'Conexões: confirme Wi-Fi conectado e revise dados/Bluetooth',
        'Atualização: atualize apps e sistema (no Wi-Fi)',
        'Dê uma última olhada: o celular está organizado, leve e em dia?',
      ],
    },
    desafio: {
      cenario: 'Entregue seu celular "como novo": organizado, confortável, silencioso, com espaço livre e tudo atualizado.',
      requisitos: [
        'Apps organizados em pastas, mais usados acessíveis',
        'Fonte, brilho e volumes confortáveis',
        'Notificações barulhentas silenciadas + Não Perturbe ativo',
        'Espaço liberado (desinstalei e limpei)',
        'Apps e sistema atualizados',
        'O celular ficou leve e agradável de usar',
      ],
      dica: 'Parabéns — você dominou seu celular! Marque na agenda (que você aprendeu no módulo Computador, ou no próprio celular) um lembrete trimestral de "pit stop". Manutenção regular = celular sempre rápido e seguro.',
    },
    validacao: [
      'Organizei os apps em pastas',
      'Ajustei o conforto (fonte/brilho/som)',
      'Domei as notificações',
      'Liberei espaço com segurança',
      'Atualizei apps e sistema',
      'Meu celular está leve e no meu controle',
    ],
  },
};
