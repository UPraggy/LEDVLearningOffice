// ============================================================================
// CONTEÚDO — Manutenção: PC Rápido e Saudável (pc-manutencao)
// Por que fica lento, liberar espaço, atualizações, gerenciador de tarefas,
// limpeza física, temperatura, backup e o "reiniciar". Cuidar pra durar.
// ============================================================================

export const PC_MANUTENCAO = {
  'pc-manutencao-1': {
    trilhaId: 'pc-manutencao', numero: 1, titulo: 'Por que o computador fica lento com o tempo',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Aquele computador que era rápido no início e hoje demora pra tudo. Não é "ele ficando velho" por mágica — há causas concretas, e quase todas têm solução. Entender por que ele lentifica é o primeiro passo pra devolvê-lo à boa forma.',
      conceito: {
        titulo: 'A lentidão tem causas — e elas têm conserto',
        texto: 'Um computador raramente fica lento "porque sim". As causas comuns são: DISCO CHEIO (sem espaço livre, o sistema engasga); MUITOS PROGRAMAS ABERTOS ou na inicialização consumindo memória; FALTA DE ATUALIZAÇÃO ou de manutenção; e, às vezes, VÍRUS rodando escondido. O hardware também pesa: um HD antigo é muito mais lento que um SSD moderno. A boa notícia é que a maioria dessas causas é resolvível por software (limpeza, atualização, desativar penetras) — sem precisar trocar de máquina.',
      },
      estrutura: {
        titulo: 'As causas mais comuns',
        partes: [
          { simbolo: '💾', desc: 'Disco cheio: sem espaço livre, o sistema fica lento.' },
          { simbolo: '🪟', desc: 'Programas demais abertos ou na inicialização.' },
          { simbolo: '🔄', desc: 'Falta de atualização e manutenção em dia.' },
          { simbolo: '🦠', desc: 'Vírus rodando escondido, consumindo recursos.' },
        ],
      },
      exemplo: {
        titulo: 'Diagnosticando a lentidão',
        celulas: [
          { ref: 'Tudo demora e trava', valor: 'Verifique espaço livre no disco' },
          { ref: 'Lento desde que liga', valor: 'Programas na inicialização' },
          { ref: 'Travou de repente', valor: 'Muitos programas/abas abertos' },
          { ref: 'Lento E estranho', valor: 'Pode ser vírus: rode o antivírus' },
        ],
        formula: 'Identificar a causa → aplicar a solução certa → PC rápido de novo',
        resultado: 'Você entende a lentidão e sabe por onde começar a resolver.',
        comentario: 'A troca de um HD antigo por um SSD é a melhoria que mais "rejuvenesce" um computador velho — costuma deixá-lo várias vezes mais rápido por um custo baixo. Antes de comprar um PC novo por lentidão, considere essa opção: muitas vezes resolve.',
      },
      vocabulario: [
        { palavra: 'HD', def: 'Disco rígido tradicional de armazenamento; mais lento que o SSD.' },
        { palavra: 'SSD', def: 'Armazenamento moderno e muito mais rápido que o HD.' },
        { palavra: 'Memória (RAM)', def: 'O espaço temporário que segura os programas abertos.' },
      ],
      chave: [
        'A lentidão tem causas concretas e com solução',
        'Disco cheio, inicialização pesada e vírus são as mais comuns',
        'Trocar HD por SSD rejuvenesce PCs antigos',
      ],
      porque: 'Entender por que o computador fica lento evita o desperdício de trocar de máquina à toa e te dá um mapa pra resolver — as próximas missões são exatamente as soluções pra cada causa.',
    },
    pratica: {
      instrucao: 'Vamos fazer um diagnóstico inicial da saúde do seu computador.',
      passos: [
        'Veja quanto espaço livre há no disco (Explorador → Este Computador)',
        'Abra o Gerenciador de Tarefas (Ctrl+Shift+Esc) e veja o uso de memória e disco',
        'Observe quais programas estão consumindo mais recursos',
        'Lembre quando foi a última vez que você atualizou o Windows',
        'Anote o que parece estar pesando: disco cheio? muitos programas?',
      ],
    },
    desafio: {
      cenario: 'Faça um diagnóstico da lentidão: verifique o espaço livre em disco, observe o uso de memória e os programas que mais consomem recursos no Gerenciador de Tarefas, e identifique a provável causa principal da lentidão do seu computador.',
      requisitos: [
        'Verifiquei o espaço livre no disco',
        'Abri o Gerenciador de Tarefas e vi o uso de recursos',
        'Identifiquei os programas que mais consomem',
        'Considerei se há atualizações ou vírus envolvidos',
        'Apontei a provável causa principal da lentidão',
      ],
      dica: 'No Gerenciador de Tarefas, clique na coluna "Memória" ou "Disco" pra ordenar e ver na hora quem está consumindo mais. Muitas vezes um único programa ou aba do navegador é o vilão — e fechá-lo já alivia tudo.',
    },
    validacao: [
      'Entendo as causas comuns da lentidão',
      'Verifico o espaço livre em disco',
      'Uso o Gerenciador pra ver o uso de recursos',
      'Identifico programas que consomem muito',
      'Sei diferenciar problema de software e hardware',
    ],
  },

  'pc-manutencao-2': {
    trilhaId: 'pc-manutencao', numero: 2, titulo: 'Liberar espaço em disco com segurança',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: '"Espaço de armazenamento insuficiente." Esse aviso trava downloads, atualizações e deixa o PC lento. Mas há montes de arquivos inúteis ocupando espaço — e dá pra apagá-los com segurança, sem perder nada que importa.',
      conceito: {
        titulo: 'Há muito lixo ocupando espaço sem necessidade',
        texto: 'O computador acumula arquivos descartáveis: ARQUIVOS TEMPORÁRIOS de programas, CACHE da navegação, a LIXEIRA cheia e DOWNLOADS antigos que você nem lembra. O Windows tem a "Limpeza de Disco" e o "Sensor de Armazenamento" que apagam esse lixo com segurança. A regra de ouro: arquivos temporários, cache e lixeira são SEGUROS de apagar — eles se recriam quando necessário. Já seus documentos, fotos e arquivos pessoais, você revisa antes de apagar. Liberar espaço deixa o PC mais rápido e destrava as atualizações.',
      },
      estrutura: {
        titulo: 'O que liberar com segurança',
        partes: [
          { simbolo: '🗑️', desc: 'Lixeira: esvaziar libera espaço (confira antes o que tem).' },
          { simbolo: '🧹', desc: 'Arquivos temporários e cache: seguros de apagar.' },
          { simbolo: '📥', desc: 'Downloads antigos: revise e apague o que não usa mais.' },
          { simbolo: '⚙️', desc: 'Sensor de Armazenamento: limpa o lixo automaticamente.' },
        ],
      },
      exemplo: {
        titulo: 'Liberando espaço',
        celulas: [
          { ref: 'Disco quase cheio', valor: 'Configurações → Armazenamento → liberar' },
          { ref: 'Arquivos temporários', valor: 'Seguros de apagar — fazem isso direto' },
          { ref: 'Pasta Downloads gigante', valor: 'Revise: apague instaladores e zips antigos' },
          { ref: 'Manter sempre limpo', valor: 'Ative o Sensor de Armazenamento' },
        ],
        formula: 'Lixeira + temporários + downloads velhos = muito espaço de volta',
        resultado: 'Disco com folga, PC mais rápido e atualizações destravadas.',
        comentario: 'A pasta "Downloads" é a grande vilã escondida: ela acumula instaladores, PDFs e zips que você baixou uma vez e nunca mais usou. Revisar e limpar essa pasta costuma liberar vários gigabytes de uma só vez.',
      },
      vocabulario: [
        { palavra: 'Arquivo temporário', def: 'Arquivo descartável que programas criam e que pode ser apagado.' },
        { palavra: 'Cache', def: 'Dados guardados pra acelerar; ocupam espaço e podem ser limpos.' },
        { palavra: 'Sensor de Armazenamento', def: 'Recurso do Windows que limpa lixo automaticamente.' },
      ],
      chave: [
        'Temporários, cache e lixeira são seguros de apagar',
        'A pasta Downloads costuma esconder muito lixo',
        'O Sensor de Armazenamento mantém o disco limpo sozinho',
      ],
      porque: 'Espaço livre é essencial pro computador funcionar bem e atualizar. Saber liberar espaço com segurança resolve a lentidão e os avisos de "disco cheio" sem risco de apagar algo importante.',
    },
    pratica: {
      instrucao: 'Vamos liberar espaço no seu computador de forma segura.',
      passos: [
        'Abra Configurações → Sistema → Armazenamento e veja o que ocupa espaço',
        'Use "Arquivos temporários" e marque temporários, cache e lixeira',
        'Confira o que está marcado e libere o espaço',
        'Abra a pasta Downloads e revise: apague instaladores e arquivos antigos',
        'Ative o "Sensor de Armazenamento" pra limpeza automática',
      ],
    },
    desafio: {
      cenario: 'Libere espaço com segurança: use a ferramenta de armazenamento pra apagar arquivos temporários e cache, esvazie a lixeira após conferir, limpe downloads antigos e ative o Sensor de Armazenamento pra manutenção automática.',
      requisitos: [
        'Vi o que está ocupando espaço no disco',
        'Apaguei arquivos temporários e cache com segurança',
        'Esvaziei a lixeira após conferir o conteúdo',
        'Revisei e limpei a pasta Downloads',
        'Ativei o Sensor de Armazenamento',
      ],
      dica: 'Antes de esvaziar a lixeira, dê uma olhada rápida no que tem lá — é a última chance de recuperar algo apagado por engano. Depois de esvaziar, o espaço volta, mas os arquivos vão de vez.',
    },
    validacao: [
      'Vejo o que ocupa espaço no disco',
      'Apago temporários e cache com segurança',
      'Esvazio a lixeira conferindo antes',
      'Limpo downloads antigos',
      'Mantenho o disco limpo automaticamente',
    ],
  },

  'pc-manutencao-3': {
    trilhaId: 'pc-manutencao', numero: 3, titulo: 'Atualizações do Windows: por que e quando',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Aquela mensagem "atualizações disponíveis" que todo mundo ignora. Mas adiar atualizações é deixar a porta aberta pra vírus e bugs. Entender por que elas importam — e como controlá-las pra não atrapalhar — é cuidar da saúde e da segurança do PC.',
      conceito: {
        titulo: 'Atualizar não é só capricho: é segurança',
        texto: 'As atualizações do Windows (Windows Update) trazem três coisas importantes: CORREÇÕES DE SEGURANÇA (que tapam brechas usadas por vírus e hackers), CORREÇÕES DE BUGS (que resolvem travamentos e erros) e MELHORIAS. Ignorá-las deixa o computador vulnerável e instável. O ideal é mantê-las ativas, mas você pode CONTROLAR O HORÁRIO (definir "horário ativo" pra ele não reiniciar no meio do seu trabalho) e PAUSAR temporariamente se precisar. Atualizar é uma das defesas mais importantes — e mais ignoradas.',
      },
      estrutura: {
        titulo: 'Atualizações sob controle',
        partes: [
          { simbolo: '🛡️', desc: 'Segurança: tapam brechas que vírus exploram.' },
          { simbolo: '🐛', desc: 'Correções: resolvem bugs e travamentos.' },
          { simbolo: '⏰', desc: 'Horário ativo: o PC não reinicia enquanto você usa.' },
          { simbolo: '⏸️', desc: 'Pausar: adiar temporariamente, se precisar.' },
        ],
      },
      exemplo: {
        titulo: 'Atualizando sem transtorno',
        celulas: [
          { ref: 'Aviso de atualização', valor: 'Importante: agende, não ignore pra sempre' },
          { ref: 'Reinicia na hora errada', valor: 'Defina o "horário ativo"' },
          { ref: 'Preciso usar agora', valor: 'Pause a atualização por uns dias' },
          { ref: 'PC desatualizado há meses', valor: 'Atualize: brecha de segurança aberta' },
        ],
        formula: 'Atualizar em dia + horário ativo = segurança sem atrapalhar',
        resultado: 'Computador seguro, estável e atualizado no seu ritmo.',
        comentario: 'Configure o "horário ativo" pro período em que você usa o PC. Assim, o Windows guarda os reinícios das atualizações pra quando você não está usando — você fica protegido sem nunca ser interrompido no meio de um trabalho.',
      },
      vocabulario: [
        { palavra: 'Windows Update', def: 'O sistema de atualizações do Windows.' },
        { palavra: 'Horário ativo', def: 'O período em que o PC não reinicia pra atualizar.' },
        { palavra: 'Correção de segurança', def: 'Atualização que tapa brechas exploradas por vírus.' },
      ],
      chave: [
        'Atualizações trazem segurança e correções importantes',
        'Ignorá-las deixa o PC vulnerável e instável',
        'Use o "horário ativo" pra não ser interrompido',
      ],
      porque: 'Manter o sistema atualizado é uma das defesas mais eficazes contra vírus e golpes, além de deixar o PC mais estável. Saber controlar o horário tira o único incômodo real das atualizações.',
    },
    pratica: {
      instrucao: 'Vamos conferir e configurar as atualizações em Windows Update.',
      passos: [
        'Abra Configurações → Windows Update',
        'Clique em "Verificar se há atualizações"',
        'Veja se há atualizações pendentes e instale as de segurança',
        'Procure "Horário ativo" e ajuste pro período em que você usa o PC',
        'Veja onde fica a opção de "Pausar atualizações", caso precise',
      ],
    },
    desafio: {
      cenario: 'Mantenha o sistema saudável: verifique se há atualizações pendentes, entenda a importância das de segurança, configure o horário ativo pra não ser interrompido e saiba onde pausar atualizações temporariamente se necessário.',
      requisitos: [
        'Verifiquei se há atualizações pendentes',
        'Entendi a importância das correções de segurança',
        'Configurei o horário ativo',
        'Sei onde pausar atualizações temporariamente',
        'Mantenho o Windows atualizado com regularidade',
      ],
      dica: 'Depois de uma atualização grande, é normal o computador reiniciar algumas vezes e demorar um pouco mais para ligar — ele está finalizando a instalação. Não desligue na força nesse momento; deixe terminar pra não corromper o sistema.',
    },
    validacao: [
      'Verifico atualizações pendentes',
      'Entendo a importância da segurança',
      'Instalo as atualizações importantes',
      'Configuro o horário ativo',
      'Sei pausar atualizações quando preciso',
    ],
  },

  'pc-manutencao-4': {
    trilhaId: 'pc-manutencao', numero: 4, titulo: 'Gerenciador de Tarefas: fechar o que travou',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Um programa congelou e a tela não responde. O mouse roda sem parar. A vontade é desligar na força — mas existe uma forma certa: o Gerenciador de Tarefas, que fecha só o que travou sem perder o resto do seu trabalho.',
      conceito: {
        titulo: 'O Gerenciador de Tarefas é seu socorrista de emergência',
        texto: 'O GERENCIADOR DE TAREFAS (Ctrl+Shift+Esc) mostra tudo que está rodando e quanto cada coisa consome. Quando um programa TRAVA ("não respondendo"), você o seleciona ali e clica em "Finalizar tarefa" — ele fecha só aquele, sem mexer no resto. O gerenciador também mostra o USO DE RECURSOS (memória, disco, processador), revelando quem está pesando. É a ferramenta certa pra resolver travamentos sem precisar desligar o computador na força (o que pode corromper arquivos).',
      },
      estrutura: {
        titulo: 'Usando o Gerenciador',
        partes: [
          { simbolo: '⌨️', desc: 'Abrir: Ctrl+Shift+Esc (atalho direto).' },
          { simbolo: '❌', desc: 'Finalizar tarefa: fecha o programa travado.' },
          { simbolo: '📊', desc: 'Uso de recursos: vê quem consome memória/disco/CPU.' },
          { simbolo: '⚠️', desc: '"Não respondendo": o sinal de que travou.' },
        ],
      },
      exemplo: {
        titulo: 'Resolvendo travamentos',
        celulas: [
          { ref: 'Programa "não respondendo"', valor: 'Finalizar tarefa nele' },
          { ref: 'Tela toda travada', valor: 'Ctrl+Shift+Esc abre o gerenciador' },
          { ref: 'PC lento sem motivo', valor: 'Veja quem consome mais recursos' },
          { ref: 'Quase desligar na força', valor: 'Tente o gerenciador antes' },
        ],
        formula: 'Travou → Gerenciador → Finalizar só o travado → resto salvo',
        resultado: 'Você resolve travamentos sem perder o trabalho aberto.',
        comentario: 'Desligar o computador na força (segurar o botão) deve ser o ÚLTIMO recurso, só quando nada mais responde — pode corromper arquivos. Sempre tente primeiro o Gerenciador de Tarefas: ele fecha só o que travou e preserva o resto.',
      },
      vocabulario: [
        { palavra: 'Finalizar tarefa', def: 'Fechar à força um programa específico que travou.' },
        { palavra: 'Não respondendo', def: 'Aviso de que um programa travou e não reage.' },
        { palavra: 'Processo', def: 'Cada programa ou tarefa rodando no computador.' },
      ],
      chave: [
        'Ctrl+Shift+Esc abre o Gerenciador de Tarefas',
        '"Finalizar tarefa" fecha só o programa travado',
        'Desligar na força é o último recurso',
      ],
      porque: 'Travamentos acontecem com todo mundo. Saber resolvê-los pelo Gerenciador de Tarefas evita perder trabalho, corromper arquivos e o estresse de desligar na força — é uma habilidade que você vai usar muitas vezes.',
    },
    pratica: {
      instrucao: 'Vamos conhecer o Gerenciador de Tarefas (sem precisar de um travamento real).',
      passos: [
        'Aperte Ctrl+Shift+Esc pra abrir o Gerenciador de Tarefas',
        'Na aba "Processos", veja os programas abertos e o uso de recursos',
        'Clique nas colunas "Memória" e "Disco" pra ordenar por consumo',
        'Selecione um programa qualquer e veja o botão "Finalizar tarefa" (não precisa clicar)',
        'Entenda que "Finalizar tarefa" fecha só aquele programa selecionado',
      ],
    },
    desafio: {
      cenario: 'Domine o socorro a travamentos: abra o Gerenciador de Tarefas, identifique programas e seu consumo de recursos, e saiba o procedimento correto pra finalizar um programa que travou sem afetar o resto nem desligar na força.',
      requisitos: [
        'Abri o Gerenciador de Tarefas pelo atalho',
        'Vi os programas abertos e o uso de recursos',
        'Ordenei por consumo de memória/disco',
        'Sei finalizar um programa travado especificamente',
        'Sei que desligar na força é o último recurso',
      ],
      dica: 'Se nem o Ctrl+Shift+Esc abrir o gerenciador, tente Ctrl+Alt+Del e escolha "Gerenciador de Tarefas" na tela que aparece. Esse caminho funciona mesmo quando o computador está bem travado.',
    },
    validacao: [
      'Abro o Gerenciador de Tarefas',
      'Vejo o consumo de recursos dos programas',
      'Finalizo programas travados corretamente',
      'Preservo o resto do trabalho aberto',
      'Uso o desligamento forçado só em último caso',
    ],
  },

  'pc-manutencao-5': {
    trilhaId: 'pc-manutencao', numero: 5, titulo: 'Antivírus e o Windows Defender',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Você não precisa pagar caro num antivírus: o Windows já vem com um bom, embutido e gratuito. Saber que ele existe, está ligado e como fazer uma verificação é uma defesa essencial — e muita gente nem sabe que tem essa proteção.',
      conceito: {
        titulo: 'O Windows já protege — e você pode reforçar',
        texto: 'O Windows moderno vem com a SEGURANÇA DO WINDOWS (o antigo Windows Defender), um antivírus gratuito, embutido e competente que roda em segundo plano protegendo contra vírus e ameaças. Ele faz a PROTEÇÃO EM TEMPO REAL (vigia o tempo todo) e permite a VERIFICAÇÃO (uma "varredura" que examina o PC em busca de ameaças). Pra maioria das pessoas, ele é suficiente — não é preciso pagar por outro. O importante é: garantir que está ativo, manter as definições atualizadas e fazer uma verificação se desconfiar de algo.',
      },
      estrutura: {
        titulo: 'A segurança embutida',
        partes: [
          { simbolo: '🛡️', desc: 'Segurança do Windows: antivírus gratuito e embutido.' },
          { simbolo: '👁️', desc: 'Proteção em tempo real: vigia o PC o tempo todo.' },
          { simbolo: '🔍', desc: 'Verificação: varredura que procura ameaças.' },
          { simbolo: '🔄', desc: 'Definições atualizadas: pra reconhecer ameaças novas.' },
        ],
      },
      exemplo: {
        titulo: 'Mantendo o PC protegido',
        celulas: [
          { ref: 'Preciso de antivírus pago?', valor: 'Não: o do Windows já é bom' },
          { ref: 'PC agindo estranho', valor: 'Rode uma "Verificação completa"' },
          { ref: 'Está protegido?', valor: 'Segurança do Windows → tudo verde' },
          { ref: 'Reconhecer ameaças novas', valor: 'Manter as definições atualizadas' },
        ],
        formula: 'Defender ativo + definições atuais + verificação = PC protegido',
        resultado: 'Computador defendido sem gastar com antivírus extra.',
        comentario: 'Cuidado com sites que dizem "seu PC está infectado, baixe nosso antivírus agora!". Isso é golpe — o antivírus de verdade é o que já está no Windows. Nunca instale "antivírus" que aparece de surpresa num pop-up: muitos são, eles mesmos, vírus.',
      },
      vocabulario: [
        { palavra: 'Segurança do Windows', def: 'O antivírus gratuito embutido no Windows (Defender).' },
        { palavra: 'Proteção em tempo real', def: 'Vigilância contínua contra ameaças enquanto você usa.' },
        { palavra: 'Verificação (varredura)', def: 'Exame do computador em busca de vírus e ameaças.' },
      ],
      chave: [
        'O Windows já tem antivírus gratuito e competente',
        'Mantenha-o ativo e com definições atualizadas',
        'Desconfie de "antivírus" que aparece em pop-ups: é golpe',
      ],
      porque: 'Proteção contra vírus é essencial e o Windows já oferece de graça. Saber que ela existe, está ligada e como verificar te defende sem custo — e reconhecer os falsos antivírus evita cair num golpe comum.',
    },
    pratica: {
      instrucao: 'Vamos conferir a proteção do seu computador na Segurança do Windows.',
      passos: [
        'Abra o menu Iniciar e digite "Segurança do Windows"',
        'Veja se "Proteção contra vírus e ameaças" está com sinal verde (ativa)',
        'Clique em "Verificação rápida" pra fazer uma varredura básica',
        'Veja onde ficam as opções de "Verificação completa"',
        'Confirme que as definições de vírus estão atualizadas',
      ],
    },
    desafio: {
      cenario: 'Garanta a proteção: abra a Segurança do Windows, confirme que o antivírus está ativo com proteção em tempo real, execute uma verificação e saiba reconhecer falsos antivírus de pop-ups como golpe.',
      requisitos: [
        'Abri a Segurança do Windows',
        'Confirmei que a proteção está ativa (sinal verde)',
        'Executei uma verificação no computador',
        'Confirmei que as definições estão atualizadas',
        'Sei reconhecer falsos antivírus como golpe',
      ],
      dica: 'Uma "Verificação completa" é mais demorada (pode levar mais de uma hora) mas examina tudo a fundo. Faça uma de tempos em tempos ou quando desconfiar de algo — pode deixar rodando enquanto você faz outra coisa.',
    },
    validacao: [
      'Sei que o Windows tem antivírus embutido',
      'Confirmo que a proteção está ativa',
      'Executo verificações quando preciso',
      'Mantenho as definições atualizadas',
      'Reconheço falsos antivírus como golpe',
    ],
  },

  'pc-manutencao-6': {
    trilhaId: 'pc-manutencao', numero: 6, titulo: 'Limpeza física e temperatura do computador',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Nem toda manutenção é por software. Poeira acumulada faz o computador esquentar, ficar barulhento e até desligar sozinho. Um cuidado físico simples e ocasional prolonga muito a vida da máquina — e quase ninguém faz.',
      conceito: {
        titulo: 'Poeira e calor são inimigos do computador',
        texto: 'O computador gera calor e usa VENTILADORES (coolers) pra se resfriar, puxando ar pelas ENTRADAS DE VENTILAÇÃO. Com o tempo, a POEIRA entope essas entradas e os ventiladores, fazendo a máquina ESQUENTAR. O superaquecimento causa lentidão (o PC se "freia" pra não queimar), barulho de ventilador acelerado e desligamentos repentinos. A solução é simples: manter as entradas de ar desobstruídas, limpar a poeira ocasionalmente (com o aparelho desligado) e não usar o notebook sobre cama ou almofada (que tampam a ventilação).',
      },
      estrutura: {
        titulo: 'Cuidados físicos essenciais',
        partes: [
          { simbolo: '💨', desc: 'Ventilação: mantenha as entradas de ar livres e desobstruídas.' },
          { simbolo: '🧹', desc: 'Poeira: limpe ocasionalmente, com o aparelho desligado.' },
          { simbolo: '🛏️', desc: 'Notebook: não use sobre cama/almofada (tampa o ar).' },
          { simbolo: '🌡️', desc: 'Sinais de calor: lento, ventilador alto, desliga sozinho.' },
        ],
      },
      exemplo: {
        titulo: 'Combatendo o superaquecimento',
        celulas: [
          { ref: 'Ventilador sempre no talo', valor: 'Pode ser poeira: hora de limpar' },
          { ref: 'Desliga sozinho de repente', valor: 'Sinal clássico de superaquecimento' },
          { ref: 'Notebook esquentando muito', valor: 'Use sobre superfície dura e plana' },
          { ref: 'Limpar a poeira', valor: 'Desligue e tire da tomada antes' },
        ],
        formula: 'Ventilação livre + sem poeira + base firme = PC fresco e durável',
        resultado: 'Computador mais frio, silencioso, rápido e duradouro.',
        comentario: 'Antes de qualquer limpeza física, DESLIGUE o computador e tire da tomada. Para limpar com segurança, prefira ar comprimido (latinha) ou um pano seco; nunca use água ou produtos de limpeza diretamente nos componentes eletrônicos.',
      },
      vocabulario: [
        { palavra: 'Cooler (ventilador)', def: 'A ventoinha que resfria o computador por dentro.' },
        { palavra: 'Superaquecimento', def: 'Quando o PC fica quente demais e perde desempenho ou desliga.' },
        { palavra: 'Ar comprimido', def: 'Jato de ar (em lata) usado pra remover poeira com segurança.' },
      ],
      chave: [
        'Poeira entope a ventilação e causa superaquecimento',
        'PC quente fica lento, barulhento e desliga sozinho',
        'Limpe sempre desligado; não tampe a ventilação',
      ],
      porque: 'O calor é uma das maiores causas de lentidão e de morte precoce de computadores. Um cuidado físico simples e ocasional mantém a máquina rápida, silenciosa e prolonga muito sua vida útil.',
    },
    pratica: {
      instrucao: 'Vamos avaliar a saúde física e térmica do seu computador.',
      passos: [
        'Localize as entradas de ventilação do seu PC ou notebook',
        'Veja se estão desobstruídas e sem acúmulo visível de poeira',
        'Observe se o ventilador está muito barulhento ou o aparelho muito quente',
        'No notebook, confira se você costuma usá-lo sobre superfície dura',
        'Planeje uma limpeza ocasional (com o aparelho desligado e na tomada fora)',
      ],
    },
    desafio: {
      cenario: 'Cuide da saúde física: identifique as entradas de ventilação do computador, avalie se há sinais de superaquecimento (calor, ruído, desligamentos) e saiba o procedimento seguro pra limpar a poeira e manter a ventilação livre.',
      requisitos: [
        'Localizei as entradas de ventilação',
        'Avaliei se há sinais de superaquecimento',
        'Sei manter a ventilação desobstruída',
        'Sei o procedimento seguro de limpeza (desligado, sem água)',
        'Evito tampar a ventilação do notebook',
      ],
      dica: 'Suportes ou bases com ventoinha para notebook ajudam a manter a temperatura baixa, especialmente em dias quentes ou em uso intenso (vídeos, jogos). São baratos e podem evitar a lentidão e os desligamentos causados pelo calor.',
    },
    validacao: [
      'Localizo as entradas de ventilação',
      'Reconheço sinais de superaquecimento',
      'Mantenho a ventilação livre',
      'Limpo a poeira com segurança',
      'Não tampo o ar do notebook',
    ],
  },

  'pc-manutencao-7': {
    trilhaId: 'pc-manutencao', numero: 7, titulo: 'Backup: nunca perca seus arquivos',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Um dia o computador quebra, é roubado ou pega um vírus. Quem tinha backup dá de ombros e recupera tudo. Quem não tinha perde fotos, documentos e anos de memórias pra sempre. Backup é o seguro mais importante da vida digital — e é simples de ter.',
      conceito: {
        titulo: 'Backup é ter seus arquivos guardados em mais de um lugar',
        texto: 'BACKUP é uma cópia de segurança dos seus arquivos guardada em outro lugar, pra que, se o original se perder, você ainda tenha tudo. A regra mais conhecida é a do "3-2-1": ter pelo menos algumas cópias, em lugares diferentes, sendo uma fora de casa. Na prática, há dois caminhos fáceis: a NUVEM (Google Drive, OneDrive — sincroniza automaticamente e fica acessível de qualquer lugar) e o HD/PEN DRIVE EXTERNO (uma cópia física que você guarda). O ideal é combinar os dois: nuvem pra praticidade, externo pra ter uma cópia offline.',
      },
      estrutura: {
        titulo: 'As formas de fazer backup',
        partes: [
          { simbolo: '☁️', desc: 'Nuvem: Drive/OneDrive, sincroniza sozinho, acessa de qualquer lugar.' },
          { simbolo: '💽', desc: 'HD/pen drive externo: cópia física que você guarda.' },
          { simbolo: '🔢', desc: 'Regra 3-2-1: várias cópias, lugares diferentes, uma fora de casa.' },
          { simbolo: '🔁', desc: 'Regularidade: backup desatualizado protege pouco.' },
        ],
      },
      exemplo: {
        titulo: 'Protegendo o que importa',
        celulas: [
          { ref: 'Fotos da família', valor: 'Nuvem + cópia em HD externo' },
          { ref: 'Documentos importantes', valor: 'Drive/OneDrive sincronizando' },
          { ref: 'PC quebrou', valor: 'Com backup: recupera tudo na nuvem' },
          { ref: 'Backup de 2 anos atrás', valor: 'Desatualizado: faça com regularidade' },
        ],
        formula: 'Nuvem + externo + regularidade = arquivos a salvo de tudo',
        resultado: 'Suas fotos e documentos protegidos contra qualquer perda.',
        comentario: 'O melhor backup é o automático: configure a nuvem (Drive/OneDrive) pra sincronizar suas pastas importantes sozinha. Assim você fica protegido sem precisar lembrar de fazer nada — e nunca perde mais que as últimas horas de trabalho.',
      },
      vocabulario: [
        { palavra: 'Backup', def: 'Cópia de segurança dos arquivos guardada em outro lugar.' },
        { palavra: 'Nuvem', def: 'Armazenamento online (Drive/OneDrive) acessível de qualquer lugar.' },
        { palavra: 'Regra 3-2-1', def: 'Várias cópias, em lugares diferentes, uma fora de casa.' },
      ],
      chave: [
        'Backup é cópia dos arquivos guardada em outro lugar',
        'Combine nuvem (prático) e externo (offline)',
        'O melhor backup é automático e regular',
      ],
      porque: 'Perder fotos e documentos é uma das dores digitais mais comuns e irreversíveis. Ter backup transforma um desastre (PC quebrado, roubado, com vírus) em um mero contratempo — é a proteção mais importante que existe.',
    },
    pratica: {
      instrucao: 'Vamos montar uma proteção de backup pros seus arquivos importantes.',
      passos: [
        'Liste suas pastas mais importantes (Documentos, Fotos)',
        'Configure o Google Drive ou OneDrive pra sincronizar essas pastas',
        'Confirme que os arquivos estão aparecendo na nuvem (acesse pelo navegador)',
        'Se tiver um HD ou pen drive externo, faça também uma cópia das pastas importantes',
        'Defina uma rotina: ex.: a nuvem sincroniza sozinha, e cópia no externo uma vez por mês',
      ],
    },
    desafio: {
      cenario: 'Crie uma estratégia de backup: identifique seus arquivos mais importantes, configure a sincronização na nuvem pra protegê-los automaticamente e, se possível, faça também uma cópia em mídia externa. Garanta que a proteção seja regular.',
      requisitos: [
        'Identifiquei meus arquivos mais importantes',
        'Configurei a sincronização na nuvem',
        'Confirmei que os arquivos estão salvos na nuvem',
        'Considerei uma cópia em mídia externa',
        'Defini uma rotina de backup regular',
      ],
      dica: 'Teste seu backup de verdade: tente abrir um arquivo direto da nuvem ou do HD externo. Um backup que você nunca verificou pode estar incompleto ou corrompido — melhor descobrir agora do que na emergência.',
    },
    validacao: [
      'Entendo o que é e por que ter backup',
      'Configuro a sincronização na nuvem',
      'Mantenho uma cópia em mídia externa',
      'Sigo a lógica do 3-2-1',
      'Faço backup com regularidade',
    ],
  },

  'pc-manutencao-8': {
    trilhaId: 'pc-manutencao', numero: 8, titulo: 'Desinstalar programas e o "reiniciar mágico"',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Programas que você instalou uma vez e nunca mais usou ficam lá, ocupando espaço e às vezes rodando em segundo plano. E existe o conselho mais clichê da informática — "já tentou desligar e ligar?" — que é clichê justamente porque funciona na maioria das vezes.',
      conceito: {
        titulo: 'Remover o desnecessário e o poder de reiniciar',
        texto: 'Duas manutenções simples e poderosas. DESINSTALAR programas que você não usa libera espaço e recursos — faz isso em Configurações → Aplicativos, escolhendo o programa e clicando em "Desinstalar" (diferente de só apagar o atalho!). E o REINICIAR resolve uma quantidade impressionante de problemas: ao reiniciar, o computador limpa a memória, encerra processos travados e aplica atualizações pendentes. Por isso "desligar e ligar" é o primeiro socorro pra PC lento, travado ou com comportamento estranho — não é preguiça, é a solução certa.',
      },
      estrutura: {
        titulo: 'Duas manutenções essenciais',
        partes: [
          { simbolo: '🗑️', desc: 'Desinstalar: Configurações → Aplicativos → Desinstalar.' },
          { simbolo: '🔁', desc: 'Reiniciar: limpa a memória e encerra travamentos.' },
          { simbolo: '🆚', desc: 'Desinstalar ≠ apagar o atalho (que não remove o programa).' },
          { simbolo: '✅', desc: 'Reiniciar resolve lentidão e comportamentos estranhos.' },
        ],
      },
      exemplo: {
        titulo: 'Limpeza e reinício',
        celulas: [
          { ref: 'Programa que nunca uso', valor: 'Desinstalar em Configurações → Aplicativos' },
          { ref: 'Só apaguei o ícone', valor: 'Não removeu: precisa desinstalar de verdade' },
          { ref: 'PC lento e estranho', valor: 'Reinicie antes de qualquer coisa' },
          { ref: 'Depois de atualizar', valor: 'Reiniciar aplica as mudanças' },
        ],
        formula: 'Desinstalar inúteis + reiniciar = PC mais leve e estável',
        resultado: 'Computador limpo de penetras e funcionando redondo.',
        comentario: 'Antes de gastar tempo (ou dinheiro com técnico) por causa de um problema no PC, sempre reinicie primeiro. Uma parcela enorme dos "defeitos" some com um simples reinício — é, de longe, a solução com melhor custo-benefício da informática.',
      },
      vocabulario: [
        { palavra: 'Desinstalar', def: 'Remover de verdade um programa do computador, liberando espaço.' },
        { palavra: 'Reiniciar', def: 'Desligar e ligar o PC, limpando a memória e encerrando travamentos.' },
        { palavra: 'Segundo plano', def: 'Quando um programa roda sem você ver, consumindo recursos.' },
      ],
      chave: [
        'Desinstale programas que você não usa (em Aplicativos)',
        'Apagar o atalho não desinstala o programa',
        'Reiniciar resolve a maioria dos problemas comuns',
      ],
      porque: 'Remover programas inúteis libera recursos, e o hábito de reiniciar resolve a maioria dos problemas sem custo nem complicação. São as manutenções mais simples e de maior retorno que existem.',
    },
    pratica: {
      instrucao: 'Vamos remover o desnecessário e entender o poder do reinício.',
      passos: [
        'Abra Configurações → Aplicativos → "Aplicativos instalados"',
        'Veja a lista de programas e identifique algum que você não usa mais',
        'Selecione-o e veja a opção "Desinstalar" (desinstale se tiver certeza)',
        'Entenda que isso é diferente de só apagar o ícone da área de trabalho',
        'Lembre-se de reiniciar o PC periodicamente, não só suspender',
      ],
    },
    desafio: {
      cenario: 'Faça uma faxina e firme o hábito do reinício: localize a lista de aplicativos instalados, desinstale corretamente pelo menos um programa que você não usa (não só o atalho) e entenda por que reiniciar resolve a maioria dos problemas.',
      requisitos: [
        'Encontrei a lista de aplicativos instalados',
        'Desinstalei corretamente um programa que não uso',
        'Entendi a diferença entre desinstalar e apagar o atalho',
        'Sei que reiniciar limpa a memória e resolve travamentos',
        'Adotei o hábito de reiniciar periodicamente',
      ],
      dica: 'Na dúvida se um programa pode ser desinstalado, pesquise o nome dele na internet antes. Alguns têm nomes técnicos mas são importantes pro sistema ou pra um equipamento (como drivers) — pesquisar evita remover algo necessário.',
    },
    validacao: [
      'Encontro os aplicativos instalados',
      'Desinstalo programas de verdade',
      'Sei que apagar o atalho não basta',
      'Reinicio pra resolver problemas comuns',
      'Mantenho o PC leve e estável',
    ],
  },

  'pc-manutencao-9': {
    trilhaId: 'pc-manutencao', numero: 9, titulo: 'Projeto: rotina de manutenção que mantém o PC novo',
    tempoTotal: 16, xp: 110, vertente: 'computador',
    aula: {
      gancho: 'Manutenção não é algo que se faz uma vez — é uma rotina leve que mantém o computador rápido e saudável pra sempre. Hora de montar o SEU plano de cuidados: o que fazer toda semana, todo mês, e o que ter sempre ligado. Um PC bem cuidado dura anos a mais.',
      conceito: {
        titulo: 'Uma rotina simples mantém o computador sempre em forma',
        texto: 'Tudo que você aprendeu vira uma rotina prática de manutenção, dividida por frequência. Coisas pra ter SEMPRE ATIVAS: antivírus, atualizações automáticas e backup na nuvem. Tarefas OCASIONAIS (mensais): liberar espaço, revisar a inicialização, conferir backups. Cuidados RAROS (alguns meses): limpeza física da poeira. E o reiniciar regular. Com essa rotina leve, o computador se mantém rápido, seguro e durável — você previne os problemas em vez de só apagar incêndios.',
      },
      estrutura: {
        titulo: 'A rotina por frequência',
        partes: [
          { simbolo: '🟢', desc: 'Sempre ativo: antivírus, atualizações, backup na nuvem.' },
          { simbolo: '📅', desc: 'Mensal: liberar espaço, revisar inicialização, checar backup.' },
          { simbolo: '🧹', desc: 'A cada meses: limpeza física da poeira.' },
          { simbolo: '🔁', desc: 'Sempre: reiniciar regularmente, não só suspender.' },
        ],
      },
      exemplo: {
        titulo: 'O plano de cuidados',
        celulas: [
          { ref: 'Proteção contínua', valor: 'Antivírus + atualizações + backup automático' },
          { ref: 'Uma vez por mês', valor: 'Limpar disco e revisar inicialização' },
          { ref: 'A cada poucos meses', valor: 'Tirar a poeira da ventilação' },
          { ref: 'Toda semana', valor: 'Reiniciar de verdade pelo menos uma vez' },
        ],
        formula: 'Sempre ativo + mensal + ocasional = PC sempre saudável',
        resultado: 'Um computador que se mantém rápido e seguro com pouco esforço.',
        comentario: 'A melhor manutenção é a preventiva: pequenos cuidados regulares evitam os grandes problemas. Cinco minutos por mês de manutenção poupam horas de dor de cabeça (e dinheiro com técnico) lá na frente. Prevenir é sempre mais barato que remediar.',
      },
      vocabulario: [
        { palavra: 'Manutenção preventiva', def: 'Cuidados regulares que evitam problemas antes de surgirem.' },
        { palavra: 'Rotina', def: 'Conjunto de tarefas feitas com regularidade definida.' },
        { palavra: 'Vida útil', def: 'O tempo que o computador funciona bem; a manutenção a prolonga.' },
      ],
      chave: [
        'Manutenção é uma rotina leve, não uma tarefa única',
        'Antivírus, atualização e backup ficam sempre ativos',
        'Prevenir com cuidados regulares é mais barato que remediar',
      ],
      porque: 'Uma rotina de manutenção mantém o computador rápido, seguro e durável com esforço mínimo, prevenindo problemas em vez de só reagir a eles. É a diferença entre um PC que dura anos e um que "morre cedo".',
    },
    pratica: {
      instrucao: 'Vamos montar e iniciar a sua rotina de manutenção.',
      passos: [
        'Confirme o que deve estar sempre ativo: antivírus, atualizações, backup na nuvem',
        'Faça hoje uma rodada mensal: libere espaço e revise a inicialização',
        'Confira se seus backups estão atualizados e acessíveis',
        'Avalie a necessidade de limpeza física da poeira',
        'Reinicie o computador de verdade ao final',
        'Anote a sua rotina (o que fazer e com que frequência) pra seguir adiante',
      ],
    },
    desafio: {
      cenario: 'Monte e execute sua rotina de manutenção: confirme as proteções sempre ativas (antivírus, atualizações, backup), faça uma rodada de manutenção (espaço, inicialização, backup), e registre um plano com a frequência de cada cuidado.',
      requisitos: [
        'Confirmei as proteções sempre ativas',
        'Liberei espaço e revisei a inicialização',
        'Verifiquei meus backups',
        'Avaliei a limpeza física e reiniciei o PC',
        'Registrei minha rotina com as frequências',
      ],
      dica: 'Coloque lembretes no celular pra a manutenção mensal — um simples alarme recorrente garante que você não esqueça. Com a rotina virando hábito, seu computador vai se manter rápido por muito mais tempo, sem sustos.',
    },
    validacao: [
      'Tenho as proteções essenciais sempre ativas',
      'Faço a manutenção mensal de espaço e inicialização',
      'Mantenho meus backups em dia',
      'Cuido da parte física periodicamente',
      'Sigo uma rotina de manutenção preventiva',
    ],
  },
};
