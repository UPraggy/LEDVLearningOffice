// ============================================================================
// CONTEÚDO — Produtividade e Gestão do Tempo (mkt-produtividade). O que é
// produtividade de verdade, a lista de tarefas, prioridades (urgente x
// importante), planejar a semana com agenda/calendário, vencer a procrastinação,
// organizar a vida digital, e um projeto de montar o próprio sistema de
// produtividade. Foco em métodos simples e atemporais pra qualquer trabalho.
// ============================================================================

export const MKT_PRODUTIVIDADE = {
  'mkt-produtividade-1': {
    trilhaId: 'mkt-produtividade', numero: 1, titulo: 'O que é produtividade de verdade',
    tempoTotal: 8, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Você termina o dia exausto, correu o tempo todo, mas sente que não fez nada importante. Já passou por isso? Estar ocupado não é o mesmo que ser produtivo. Entender essa diferença é o ponto de partida pra fazer mais do que importa — sem viver no sufoco.',
      conceito: {
        titulo: 'Produtividade é fazer o que importa, não estar ocupado',
        texto: 'Muita gente confunde PRODUTIVIDADE com ESTAR OCUPADO — correr o dia todo, fazer mil coisas. Mas produtividade de verdade é OUTRA coisa: é usar bem seu tempo e energia pra realizar o que REALMENTE IMPORTA, com qualidade, sem se esgotar. Dá pra estar ocupadíssimo o dia inteiro e não avançar no que importa (respondendo mensagens, apagando incêndios) — isso é movimento, não progresso. Ser produtivo é o contrário: escolher as tarefas certas, focar nelas, e ter tempo pra descansar também. Produtividade NÃO é trabalhar mais horas nem fazer tudo ao mesmo tempo — é trabalhar com INTENÇÃO. E a boa notícia: produtividade não é um dom, é um conjunto de HÁBITOS e MÉTODOS simples que qualquer um aprende. Esta trilha ensina os principais: listas, prioridades, planejamento e foco. Com eles, você faz mais do que importa em menos tempo, e sobra vida pra viver.',
      },
      estrutura: {
        titulo: 'Ocupado x produtivo',
        partes: [
          { simbolo: '🎯', desc: 'Produtividade é fazer o que IMPORTA, com qualidade.' },
          { simbolo: '🏃', desc: 'Estar ocupado é movimento, não necessariamente progresso.' },
          { simbolo: '🧠', desc: 'Trabalhar com intenção, não mais horas nem multitarefa.' },
          { simbolo: '🛠️', desc: 'É um conjunto de hábitos e métodos que se aprende.' },
        ],
      },
      exemplo: {
        titulo: 'Movimento x progresso',
        celulas: [
          { ref: 'Dia cheio de tarefas pequenas', valor: 'Ocupado, mas sem avançar' },
          { ref: 'Foco em 2 tarefas que importam', valor: 'Produtivo de verdade' },
          { ref: 'Trabalhar até a noite', valor: 'Mais horas ≠ mais resultado' },
          { ref: 'Métodos simples', valor: 'Fazem mais em menos tempo' },
        ],
        formula: 'Tarefas certas + foco + descanso = produtividade real (não só estar ocupado)',
        resultado: 'Você entende que produtividade é fazer o que importa, não correr o dia todo.',
        comentario: 'Essa virada de entendimento é libertadora: você para de medir seu dia pela quantidade de coisas feitas ou horas trabalhadas, e passa a medir pelo que REALMENTE avançou. Isso tira a culpa de descansar (descanso faz parte) e o orgulho falso de "viver ocupado". Os métodos das próximas missões — listas, prioridades, planejamento — são ferramentas pra escolher e focar no que importa. Produtividade bem entendida dá mais resultado E mais tempo livre.',
      },
      vocabulario: [
        { palavra: 'Produtividade', def: 'Usar bem tempo e energia pra fazer o que importa, sem se esgotar.' },
        { palavra: 'Estar ocupado', def: 'Fazer muitas coisas; nem sempre é o mesmo que progredir.' },
        { palavra: 'Trabalhar com intenção', def: 'Escolher e focar nas tarefas certas, não fazer tudo correndo.' },
      ],
      chave: [
        'Produtividade é fazer o que importa, não estar ocupado',
        'Não é trabalhar mais horas nem fazer tudo ao mesmo tempo',
        'É um conjunto de hábitos e métodos que qualquer um aprende',
      ],
      porque: 'Entender que produtividade é fazer o que importa — não correr o dia todo — muda a forma como você usa seu tempo. Com métodos simples de escolha e foco, você avança no que realmente conta, descansa sem culpa e ainda sobra tempo pra viver.',
    },
    pratica: {
      instrucao: 'Vamos refletir sobre sua produtividade.',
      passos: [
        'Pense num dia recente em que se sentiu ocupado mas sem avançar',
        'Identifique o que você fez que era movimento, não progresso',
        'Liste 2 tarefas que REALMENTE importavam naquele dia',
        'Reflita se você focou nelas ou se elas ficaram pra trás',
        'Anote: o que mediria um dia produtivo de verdade pra você?',
      ],
    },
    desafio: {
      cenario: 'Repense sua produtividade: identifique um dia ocupado mas improdutivo, separe o que era movimento do que era progresso, liste o que realmente importava e defina como você mediria um dia produtivo de verdade — entendendo que produtividade é foco no que importa, não correria.',
      requisitos: [
        'Identifiquei um dia ocupado e improdutivo',
        'Separei movimento de progresso',
        'Listei as tarefas que realmente importavam',
        'Refleti se foquei nelas ou não',
        'Defini o que é um dia produtivo pra mim',
      ],
      dica: 'Uma frase útil pra lembrar: "não confunda movimento com progresso". Um cavalo de balanço se move muito e não sai do lugar. No fim do dia, em vez de perguntar "fiz muitas coisas?", pergunte "avancei no que importa?". Essa única pergunta já reorienta sua forma de trabalhar — e os métodos desta trilha te ajudam a responder "sim" mais vezes.',
    },
    validacao: [
      'Sei a diferença entre ocupado e produtivo',
      'Entendo que progresso não é só movimento',
      'Sei que produtividade não é trabalhar mais horas',
      'Vejo produtividade como métodos que se aprendem',
      'Meço meu dia pelo que importa avançou',
    ],
  },

  'mkt-produtividade-2': {
    trilhaId: 'mkt-produtividade', numero: 2, titulo: 'A lista de tarefas que funciona',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Quantas vezes você esqueceu algo importante porque confiou só na memória? Ou ficou com a cabeça pesada, tentando lembrar de tudo que tinha pra fazer? A lista de tarefas é a ferramenta mais simples e poderosa da produtividade — e a maioria das pessoas a usa errado.',
      conceito: {
        titulo: 'Tire tudo da cabeça e ponha numa lista clara',
        texto: 'A LISTA DE TAREFAS (ou "to-do list") é a base da produtividade. Sua função principal é LIBERAR SUA CABEÇA: quando tudo que você precisa fazer está anotado, sua mente para de gastar energia tentando lembrar (e de ter aquela sensação de peso) e fica livre pra focar. Mas pra funcionar, a lista precisa de cuidados: anote tarefas ESPECÍFICAS e ACIONÁVEIS ("ligar pro dentista" em vez de "dentista"); MANTENHA UMA SÓ lista (ou poucas), não papéis espalhados; REVISE-A todo dia; e RISQUE o que terminou (a sensação de riscar motiva!). Não importa se é num caderninho, num app de notas do celular ou num quadro — o que importa é ter o HÁBITO de anotar e consultar. Uma lista bem usada é como uma memória externa confiável: você descarrega tudo nela e confia que nada importante vai escapar. Simples, mas transforma a sensação de caos em controle.',
      },
      estrutura: {
        titulo: 'A lista bem feita',
        partes: [
          { simbolo: '🧠', desc: 'Libera a cabeça: tire tudo da memória pro papel.' },
          { simbolo: '✍️', desc: 'Tarefas específicas e acionáveis, não vagas.' },
          { simbolo: '📋', desc: 'Uma só lista (ou poucas), não papéis espalhados.' },
          { simbolo: '✅', desc: 'Revise todo dia e risque o que terminou.' },
        ],
      },
      exemplo: {
        titulo: 'Da memória pra lista',
        celulas: [
          { ref: 'Vago: "dentista"', valor: 'Acionável: "ligar pro dentista às 14h"' },
          { ref: 'Papéis espalhados', valor: 'Uma só lista, num lugar' },
          { ref: 'Confiar na memória', valor: 'Anotar tudo e liberar a cabeça' },
          { ref: 'Tarefa pronta', valor: 'Riscar — a sensação motiva' },
        ],
        formula: 'Anotar tudo + tarefas claras + uma lista + revisar = cabeça livre e controle',
        resultado: 'Você usa a lista de tarefas como uma memória externa confiável.',
        comentario: 'O segredo que poucos sabem é que a lista serve menos pra "lembrar" e mais pra ESQUECER com tranquilidade — uma vez anotado, seu cérebro relaxa porque confia que está registrado. Por isso a lista precisa ser confiável (uma só, revisada sempre): se você não confia nela, a cabeça continua tentando lembrar de tudo. E tarefas vagas travam: "projeto" assusta, mas "escrever a primeira página do projeto" se faz. Quanto mais específica e acionável a tarefa, mais fácil começá-la.',
      },
      vocabulario: [
        { palavra: 'Lista de tarefas', def: 'Onde você anota tudo que precisa fazer; libera a cabeça.' },
        { palavra: 'Acionável', def: 'Tarefa específica e clara, que dá pra fazer ("ligar pra X").' },
        { palavra: 'Memória externa', def: 'A lista como lugar confiável onde você descarrega o que lembrar.' },
      ],
      chave: [
        'A lista de tarefas libera sua cabeça: anote tudo',
        'Use tarefas específicas e acionáveis, numa só lista',
        'Revise todo dia e risque o que terminou',
      ],
      porque: 'A lista de tarefas é a base da produtividade: ao tirar tudo da memória pro papel, libera a mente pra focar e dá a sensação de controle. Tarefas claras, numa só lista revisada diariamente, viram uma memória externa confiável que garante que nada importante escape.',
    },
    pratica: {
      instrucao: 'Vamos montar sua lista de tarefas.',
      passos: [
        'Escolha onde fica sua lista: caderno, app de notas ou quadro',
        'Despeje nela TUDO que você precisa fazer (tire da cabeça)',
        'Reescreva tarefas vagas de forma específica e acionável',
        'Junte tudo numa só lista, sem papéis espalhados',
        'Crie o hábito de revisar a lista e riscar o que terminar',
      ],
    },
    desafio: {
      cenario: 'Crie sua lista que funciona: escolha um lugar único, despeje tudo que precisa fazer, reescreva as tarefas vagas de forma acionável e adote o hábito de revisar e riscar — transformando a cabeça pesada de "lembrar de tudo" na leveza de uma memória externa confiável.',
      requisitos: [
        'Escolhi um lugar único pra lista',
        'Despejei tudo que preciso fazer',
        'Reescrevi tarefas vagas como acionáveis',
        'Mantenho uma só lista',
        'Reviso e risco o que terminei',
      ],
      dica: 'Cuidado com a lista gigante e assustadora: se ela tem 50 itens, vira fonte de ansiedade, não de controle. O truque é ter a lista MESTRE (tudo) separada da lista do DIA (só o que cabe hoje). Toda manhã, você puxa da mestre umas poucas tarefas pro dia. Assim a lista grande não pesa e o dia fica focado e realista. Veremos isso melhor na missão de prioridades.',
    },
    validacao: [
      'Uso uma lista pra liberar a cabeça',
      'Escrevo tarefas específicas e acionáveis',
      'Mantenho uma só lista',
      'Reviso a lista todo dia',
      'Risco o que terminei',
    ],
  },

  'mkt-produtividade-3': {
    trilhaId: 'mkt-produtividade', numero: 3, titulo: 'Prioridades: urgente x importante',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Sua lista tem 15 tarefas e o dia só dá pra 5. Por onde começar? A maioria pega o que grita mais alto — o urgente. Mas viver apagando incêndios deixa o que realmente importa sempre pra depois. Saber priorizar é o que separa quem corre o dia todo de quem progride.',
      conceito: {
        titulo: 'Separe o urgente do importante e escolha bem',
        texto: 'Nem toda tarefa tem o mesmo peso — e o segredo da produtividade é PRIORIZAR: escolher o que fazer primeiro. Uma distinção poderosa é entre URGENTE e IMPORTANTE. URGENTE é o que pede ação JÁ (um prazo hoje, um telefone tocando). IMPORTANTE é o que traz RESULTADO de verdade pros seus objetivos (mesmo sem prazo imediato). O erro comum é viver só no urgente — apagando incêndios — e deixar o importante (que raramente é urgente) sempre pra "depois", até que ele também vire urgência ou problema. A sabedoria está em reservar tempo pro IMPORTANTE antes que vire urgente: estudar, planejar, cuidar da saúde, construir algo. Na prática: a cada dia, escolha de 1 a 3 tarefas IMPORTANTES como prioridade, e faça-as primeiro — quando sua energia está alta. O urgente sempre aparece; o importante só acontece se você reservar espaço pra ele.',
      },
      estrutura: {
        titulo: 'Urgente x importante',
        partes: [
          { simbolo: '🔥', desc: 'Urgente: pede ação já (prazo, telefone tocando).' },
          { simbolo: '⭐', desc: 'Importante: traz resultado real pros seus objetivos.' },
          { simbolo: '⚠️', desc: 'Erro: viver só no urgente e adiar o importante.' },
          { simbolo: '🎯', desc: 'Escolha 1 a 3 importantes ao dia e faça primeiro.' },
        ],
      },
      exemplo: {
        titulo: 'Priorizar com sabedoria',
        celulas: [
          { ref: 'Urgente e importante', valor: 'Faço já (prazo de hoje)' },
          { ref: 'Importante, não urgente', valor: 'Reservo tempo antes que vire urgência' },
          { ref: 'Urgente, não importante', valor: 'Resolvo rápido ou delego' },
          { ref: 'Nem urgente nem importante', valor: 'Deixo pra depois ou descarto' },
        ],
        formula: 'Importante primeiro + urgente sob controle = progresso em vez de só apagar incêndio',
        resultado: 'Você prioriza pelo que importa, não só pelo que grita mais alto.',
        comentario: 'A grande armadilha é que o urgente é BARULHENTO (grita, cobra, aparece) e o importante é SILENCIOSO (espera pacientemente). Por isso é tão fácil passar a vida no urgente e nunca chegar no importante — até que a saúde, um projeto ou uma relação que você adiou vire um problema grave. A virada é proteger um tempo pro importante TODO dia, de preferência cedo. Comece o dia pela sua tarefa mais importante, antes que as urgências tomem conta. Isso, sozinho, transforma resultados.',
      },
      vocabulario: [
        { palavra: 'Priorizar', def: 'Escolher o que fazer primeiro entre várias tarefas.' },
        { palavra: 'Urgente', def: 'O que pede ação imediata; costuma ser barulhento.' },
        { palavra: 'Importante', def: 'O que traz resultado real; costuma ser silencioso e adiável.' },
      ],
      chave: [
        'Priorizar é escolher o que fazer primeiro',
        'Urgente pede ação já; importante traz resultado real',
        'Reserve tempo pro importante antes que ele vire urgente',
      ],
      porque: 'Saber priorizar separa quem apaga incêndios o dia todo de quem progride. Distinguir o urgente (barulhento) do importante (silencioso) e reservar tempo pro importante todo dia garante que o que realmente conta avance, em vez de ficar sempre pra depois.',
    },
    pratica: {
      instrucao: 'Vamos priorizar suas tarefas.',
      passos: [
        'Pegue sua lista de tarefas do dia',
        'Marque quais são URGENTES (pedem ação já)',
        'Marque quais são IMPORTANTES (trazem resultado real)',
        'Escolha de 1 a 3 tarefas importantes como prioridade do dia',
        'Comprometa-se a fazer as importantes primeiro, com energia alta',
      ],
    },
    desafio: {
      cenario: 'Priorize com sabedoria: pegue sua lista, separe o urgente do importante, escolha 1 a 3 tarefas importantes como prioridade do dia e comprometa-se a fazê-las primeiro — garantindo que o que realmente importa avance, em vez de viver só apagando incêndios.',
      requisitos: [
        'Marquei as tarefas urgentes',
        'Marquei as tarefas importantes',
        'Escolhi 1 a 3 importantes como prioridade',
        'Decidi fazê-las primeiro no dia',
        'Entendo que o importante precisa de espaço reservado',
      ],
      dica: 'Uma pergunta poderosa pra cada tarefa: "se eu não fizer isso, o que acontece?". Se a resposta for "nada importante", talvez ela nem precise ser feita. Muita coisa na lista é hábito ou cobrança dos outros, não algo que importa pra você. Priorizar também é ter coragem de DEIXAR DE FAZER o que não vale a pena — assim sobra tempo e energia pro que realmente conta.',
    },
    validacao: [
      'Separo o urgente do importante',
      'Reconheço que o importante é silencioso',
      'Escolho poucas prioridades por dia',
      'Faço o importante primeiro',
      'Reservo tempo pro importante todo dia',
    ],
  },

  'mkt-produtividade-4': {
    trilhaId: 'mkt-produtividade', numero: 4, titulo: 'Planejar a semana com a agenda',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'A lista diz O QUE fazer; a agenda diz QUANDO. Sem juntar as duas, as tarefas importantes ficam sem hora marcada — e o que não tem hora costuma não acontecer. Planejar a semana com um calendário é o que transforma boas intenções em coisas realmente feitas.',
      conceito: {
        titulo: 'A agenda dá hora às tarefas e visão da semana',
        texto: 'A LISTA de tarefas mostra O QUE fazer, mas é a AGENDA (ou calendário) que mostra QUANDO — e essa é a peça que falta na produtividade de muita gente. Usar uma agenda (de papel ou um app como o Google Agenda) traz três ganhos: VISÃO DA SEMANA (você vê os compromissos e o tempo disponível de uma vez); HORA MARCADA pras tarefas importantes (uma tarefa com horário definido — "terça, 10h: fazer X" — tem muito mais chance de acontecer que uma solta na lista); e EQUILÍBRIO (vendo a semana inteira, você distribui o trabalho, não sobrecarrega um dia e ainda reserva tempo pra descanso). Um hábito poderoso é o PLANEJAMENTO SEMANAL: reserve uns 15 minutos no domingo ou segunda pra olhar a semana, marcar compromissos e encaixar suas tarefas importantes em horários. Quem planeja a semana entra nela no controle, em vez de só reagir ao que aparece.',
      },
      estrutura: {
        titulo: 'A agenda a seu favor',
        partes: [
          { simbolo: '🗓️', desc: 'Visão da semana: compromissos e tempo livre de uma vez.' },
          { simbolo: '⏰', desc: 'Hora marcada pras tarefas importantes acontecerem.' },
          { simbolo: '⚖️', desc: 'Equilíbrio: distribui o trabalho e reserva descanso.' },
          { simbolo: '📅', desc: 'Planejamento semanal: 15 min pra olhar e encaixar.' },
        ],
      },
      exemplo: {
        titulo: 'Quando, não só o quê',
        celulas: [
          { ref: 'Tarefa solta na lista', valor: 'Vira "terça 10h: fazer X" na agenda' },
          { ref: 'Semana sem visão', valor: 'Vejo compromissos e tempo livre juntos' },
          { ref: 'Um dia sobrecarregado', valor: 'Distribuo o trabalho pela semana' },
          { ref: 'Reagir ao que aparece', valor: 'Planejo a semana e entro no controle' },
        ],
        formula: 'Lista (o quê) + agenda (quando) + planejamento semanal = intenções viram feitos',
        resultado: 'Você planeja a semana, dando hora às tarefas e visão do todo.',
        comentario: 'Há um princípio simples por trás disso: "o que não tem hora marcada, não acontece". A tarefa importante que fica vagando na lista é sempre adiada pelo urgente; a mesma tarefa com um horário reservado na agenda vira compromisso consigo mesmo. Tratar suas prioridades como reuniões (com hora marcada) é um truque poderoso. E o planejamento semanal de 15 minutos talvez seja o hábito de maior retorno: poucos minutos olhando o todo evitam horas perdidas reagindo no improviso.',
      },
      vocabulario: [
        { palavra: 'Agenda/calendário', def: 'Onde você marca QUANDO fazer cada compromisso e tarefa.' },
        { palavra: 'Planejamento semanal', def: 'Reservar 15 min pra olhar a semana e encaixar as tarefas.' },
        { palavra: 'Bloco de tempo', def: 'Reservar um horário na agenda pra uma tarefa importante.' },
      ],
      chave: [
        'A lista diz o quê; a agenda diz quando',
        'Tarefas com hora marcada têm muito mais chance de acontecer',
        'Planeje a semana: 15 min pra ver o todo e encaixar prioridades',
      ],
      porque: 'A agenda é a peça que falta na produtividade de muitos: dá hora às tarefas, visão da semana e equilíbrio. Reservar horários pras prioridades e fazer um planejamento semanal de 15 minutos transforma boas intenções em coisas realmente feitas, com você no controle.',
    },
    pratica: {
      instrucao: 'Vamos planejar sua semana.',
      passos: [
        'Escolha sua agenda: de papel ou um app (ex.: Google Agenda)',
        'Marque nela os compromissos fixos da semana (horários certos)',
        'Pegue suas tarefas importantes e dê um horário pra cada uma',
        'Distribua o trabalho pela semana, sem sobrecarregar um dia',
        'Reserve também tempo pra pausas e descanso',
      ],
    },
    desafio: {
      cenario: 'Planeje sua semana: escolha uma agenda, marque os compromissos fixos, dê hora às suas tarefas importantes, distribua o trabalho de forma equilibrada e reserve tempo de descanso — entrando na semana no controle, com cada prioridade tendo seu horário pra acontecer.',
      requisitos: [
        'Escolhi minha agenda',
        'Marquei os compromissos fixos',
        'Dei horário às tarefas importantes',
        'Distribuí o trabalho pela semana',
        'Reservei tempo de descanso',
      ],
      dica: 'Ao marcar horários, seja realista e deixe folgas entre as tarefas — imprevistos sempre acontecem, e uma agenda lotada demais quebra no primeiro contratempo. Uma boa regra é planejar só uns 60% do tempo, deixando espaço pro inesperado e pras urgências que vão surgir. Agenda apertada vira fonte de estresse; agenda com folga vira aliada.',
    },
    validacao: [
      'Uso uma agenda pra o "quando"',
      'Marco compromissos fixos',
      'Dou horário às tarefas importantes',
      'Distribuo o trabalho pela semana',
      'Faço um planejamento semanal',
    ],
  },

  'mkt-produtividade-5': {
    trilhaId: 'mkt-produtividade', numero: 5, titulo: 'Vencendo a procrastinação',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Você sabe o que precisa fazer, tem tempo, mas... abre o celular, vai fazer um café, organiza a gaveta — qualquer coisa menos COMEÇAR. A procrastinação não é preguiça nem falta de caráter. Entender por que ela acontece é o que finalmente permite vencê-la.',
      conceito: {
        titulo: 'Procrastinar é fugir do desconforto; vença começando pequeno',
        texto: 'PROCRASTINAR é adiar o que precisa ser feito, mesmo sabendo que devia fazê-lo. E aqui vai uma verdade que liberta: procrastinação NÃO é preguiça nem falta de força de vontade — é uma forma de fugir de um DESCONFORTO. A tarefa parece difícil, chata, grande ou assustadora, e adiá-la dá um alívio imediato (que depois vira culpa). Sabendo disso, as melhores estratégias atacam o desconforto: QUEBRE a tarefa em pedaços pequenos (um "projeto inteiro" assusta; "escrever só o primeiro parágrafo" não); use a REGRA DOS 2 MINUTOS / DOS 5 MINUTOS (prometa fazer só por uns minutos — começar é o mais difícil, e quase sempre você continua); TIRE as distrações de perto (o celular é a fuga favorita); e seja GENTIL consigo (se culpar piora; recomeçar com calma ajuda). O segredo não é esperar "ter vontade" — é COMEÇAR pequeno, porque a vontade quase sempre vem DEPOIS que você começa, não antes.',
      },
      estrutura: {
        titulo: 'Como vencer o adiamento',
        partes: [
          { simbolo: '🧩', desc: 'Quebre a tarefa em pedaços pequenos e fáceis.' },
          { simbolo: '⏱️', desc: 'Regra dos minutos: prometa começar só por pouco.' },
          { simbolo: '📵', desc: 'Tire as distrações — o celular é a fuga favorita.' },
          { simbolo: '🤗', desc: 'Seja gentil: culpa piora, recomeçar com calma ajuda.' },
        ],
      },
      exemplo: {
        titulo: 'Do travado ao começado',
        celulas: [
          { ref: '"Fazer o projeto" (assusta)', valor: '"Escrever o 1º parágrafo" (faço)' },
          { ref: 'Esperar ter vontade', valor: 'Começar — a vontade vem depois' },
          { ref: 'Celular ao lado', valor: 'Celular longe durante a tarefa' },
          { ref: 'Me culpar por adiar', valor: 'Recomeçar com gentileza' },
        ],
        formula: 'Pedaço pequeno + começar por minutos + sem distração = procrastinação vencida',
        resultado: 'Você ataca a procrastinação começando pequeno, sem esperar vontade.',
        comentario: 'A descoberta mais importante é que a MOTIVAÇÃO vem depois da AÇÃO, não antes. Todo mundo espera "ter vontade" pra começar — mas a vontade quase nunca chega antes; ela aparece quando você já está em movimento. Por isso o truque de prometer "só 5 minutos" funciona tão bem: ele vence a barreira de começar, e uma vez começado, o resto flui. E entender que procrastinar é fuga do desconforto (não defeito de caráter) tira a culpa que só piora o ciclo. Comece pequeno, comece agora.',
      },
      vocabulario: [
        { palavra: 'Procrastinar', def: 'Adiar o que precisa ser feito; é fuga do desconforto, não preguiça.' },
        { palavra: 'Regra dos minutos', def: 'Prometer fazer só por 2 ou 5 minutos pra vencer a barreira de começar.' },
        { palavra: 'Quebrar a tarefa', def: 'Dividir algo grande em pedaços pequenos e menos assustadores.' },
      ],
      chave: [
        'Procrastinar é fuga do desconforto, não preguiça',
        'Quebre a tarefa, comece por poucos minutos e tire distrações',
        'A vontade vem depois de começar, não antes: comece pequeno',
      ],
      porque: 'Procrastinação não é preguiça, mas fuga de um desconforto — e isso muda como vencê-la. Quebrar a tarefa, começar por poucos minutos, afastar distrações e ser gentil consigo permitem dar o primeiro passo; e a motivação, que quase sempre vem depois da ação, faz o resto fluir.',
    },
    pratica: {
      instrucao: 'Vamos vencer uma tarefa que você vem adiando.',
      passos: [
        'Escolha uma tarefa que você está procrastinando',
        'Pergunte: que desconforto faz você adiá-la? (difícil, chata, grande?)',
        'Quebre-a em um primeiro pedaço bem pequeno e fácil',
        'Tire o celular e as distrações de perto',
        'Prometa fazer só esse pedaço por 5 minutos — e comece agora',
      ],
    },
    desafio: {
      cenario: 'Vença a procrastinação: pegue uma tarefa adiada, identifique o desconforto por trás dela, quebre-a num primeiro passo minúsculo, afaste as distrações e comece por só 5 minutos — descobrindo que a vontade vem depois da ação, não antes.',
      requisitos: [
        'Escolhi uma tarefa que venho adiando',
        'Identifiquei o desconforto por trás dela',
        'Quebrei-a num primeiro passo pequeno',
        'Afastei as distrações',
        'Comecei por 5 minutos sem esperar vontade',
      ],
      dica: 'Outro truque poderoso é a "regra dos 2 minutos" pra tarefas pequenas: se algo leva menos de 2 minutos (responder uma mensagem, guardar um objeto), faça NA HORA em vez de anotar e adiar. Isso evita que mil pequenas coisas se acumulem e pesem. E pra tarefas grandes, lembre: você não precisa terminar agora — só COMEÇAR. O começo é a parte mais difícil.',
    },
    validacao: [
      'Entendo procrastinação como fuga do desconforto',
      'Quebro tarefas grandes em pedaços',
      'Uso a regra dos poucos minutos',
      'Afasto distrações pra começar',
      'Sei que a vontade vem depois da ação',
    ],
  },

  'mkt-produtividade-6': {
    trilhaId: 'mkt-produtividade', numero: 6, titulo: 'Organizando sua vida digital',
    tempoTotal: 8, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Mil arquivos na área de trabalho, uma caixa de e-mail com 3 mil mensagens não lidas, fotos espalhadas, senhas anotadas em vários lugares. A bagunça digital rouba tempo e gera estresse todo dia. Organizar sua vida digital é produtividade que rende pra sempre.',
      conceito: {
        titulo: 'Ordem digital economiza tempo e reduz estresse',
        texto: 'A DESORGANIZAÇÃO DIGITAL — arquivos espalhados, e-mails acumulados, área de trabalho lotada — custa caro: você perde tempo PROCURANDO coisas, sente um estresse de fundo constante, e às vezes perde dados importantes. Organizar a vida digital é um investimento que rende todo dia. Os pilares: ARQUIVOS em PASTAS com nomes claros (vimos isso nas trilhas de arquivos e nuvem), não tudo jogado na área de trabalho; E-MAIL sob controle (apague ou arquive o que não precisa, use pastas — visto na trilha de e-mail); FOTOS organizadas e com backup (trilha de fotos); e SENHAS num lugar seguro (gerenciador de senhas, visto na trilha de segurança). Não precisa fazer tudo de uma vez — comece por uma frente (a que mais te incomoda) e dedique um tempo. Depois, mantenha com pequenos hábitos: guardar o arquivo na pasta certa na hora, apagar o e-mail inútil ao ler. Um ambiente digital organizado é como uma mesa limpa: você acha tudo rápido e trabalha em paz.',
      },
      estrutura: {
        titulo: 'Os pilares da ordem digital',
        partes: [
          { simbolo: '📁', desc: 'Arquivos em pastas com nomes claros.' },
          { simbolo: '📧', desc: 'E-mail sob controle: apagar, arquivar, organizar.' },
          { simbolo: '🖼️', desc: 'Fotos organizadas e com backup.' },
          { simbolo: '🔑', desc: 'Senhas num lugar seguro (gerenciador).' },
        ],
      },
      exemplo: {
        titulo: 'Da bagunça à ordem',
        celulas: [
          { ref: 'Tudo na área de trabalho', valor: 'Pastas com nomes claros' },
          { ref: '3 mil e-mails não lidos', valor: 'Apago/arquivo e uso pastas' },
          { ref: 'Fotos espalhadas', valor: 'Organizadas e com backup' },
          { ref: 'Senhas em papéis', valor: 'Num gerenciador seguro' },
        ],
        formula: 'Arquivos + e-mail + fotos + senhas organizados = tempo economizado e paz',
        resultado: 'Você organiza a vida digital e mantém com pequenos hábitos.',
        comentario: 'A chave pra não voltar à bagunça é entender que organizar tem duas fases: o MUTIRÃO inicial (arrumar o acúmulo, que dá trabalho uma vez) e a MANUTENÇÃO (pequenos hábitos que mantêm). De nada adianta arrumar tudo num domingo se você volta a jogar arquivos na área de trabalho na segunda. Os hábitos de manutenção são minúsculos — guardar na hora, apagar ao ler — mas mantêm a ordem sem esforço. E você não precisa de perfeição: "bom o bastante pra achar as coisas rápido" já transforma seu dia.',
      },
      vocabulario: [
        { palavra: 'Vida digital', def: 'Seus arquivos, e-mails, fotos e senhas no computador e celular.' },
        { palavra: 'Mutirão', def: 'O esforço inicial de arrumar o acúmulo (feito uma vez).' },
        { palavra: 'Manutenção', def: 'Pequenos hábitos que mantêm a ordem sem esforço.' },
      ],
      chave: [
        'A bagunça digital custa tempo e gera estresse constante',
        'Organize arquivos, e-mails, fotos e senhas',
        'Faça um mutirão inicial e mantenha com pequenos hábitos',
      ],
      porque: 'Um ambiente digital organizado economiza tempo, reduz o estresse de procurar coisas e evita perder dados. Arrumar arquivos, e-mails, fotos e senhas — num mutirão inicial mantido por pequenos hábitos — é uma produtividade que rende todos os dias.',
    },
    pratica: {
      instrucao: 'Vamos organizar uma frente da sua vida digital.',
      passos: [
        'Escolha a frente que mais te incomoda: arquivos, e-mail, fotos ou senhas',
        'Reserve um tempo pra um mutirão nessa frente',
        'Crie pastas ou categorias com nomes claros',
        'Arrume o acúmulo: guarde, apague ou arquive o que precisar',
        'Defina um pequeno hábito de manutenção pra não voltar à bagunça',
      ],
    },
    desafio: {
      cenario: 'Organize sua vida digital: escolha a frente que mais te incomoda (arquivos, e-mail, fotos ou senhas), faça um mutirão pra arrumar o acúmulo com nomes e pastas claras, e defina um hábito de manutenção — economizando tempo e estresse todos os dias.',
      requisitos: [
        'Escolhi a frente que mais me incomoda',
        'Reservei tempo pra um mutirão',
        'Criei pastas/categorias com nomes claros',
        'Arrumei o acúmulo dessa frente',
        'Defini um hábito de manutenção',
      ],
      dica: 'Não tente organizar tudo de uma vez — isso cansa e desanima. Escolha UMA frente, vença ela, sinta o alívio, e só depois parta pra próxima. E use o que já aprendeu: as trilhas de arquivos, nuvem, e-mail, fotos e segurança ensinaram as técnicas; esta missão é sobre aplicá-las com o olhar da produtividade. Ordem digital não é frescura: é tempo e paz de volta pra você.',
    },
    validacao: [
      'Reconheço o custo da bagunça digital',
      'Organizo arquivos em pastas claras',
      'Mantenho o e-mail sob controle',
      'Cuido de fotos e senhas',
      'Mantenho a ordem com pequenos hábitos',
    ],
  },

  'mkt-produtividade-7': {
    trilhaId: 'mkt-produtividade', numero: 7, titulo: 'Hábitos: o poder do pouco e constante',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Aprender um idioma, ler mais, cuidar da saúde, dominar uma habilidade nova — grandes objetivos parecem exigir grandes esforços. Mas a verdade é o contrário: eles se conquistam com pouquinho, todo dia. O poder dos hábitos é a força mais subestimada da produtividade.',
      conceito: {
        titulo: 'Pequenas ações repetidas constroem grandes resultados',
        texto: 'Os HÁBITOS — ações que repetimos quase sem pensar — são o motor invisível da vida. Boa parte do que você é resulta do que você faz REPETIDAMENTE, não de esforços heroicos pontuais. E aqui está o poder: pequenas ações, feitas com CONSTÂNCIA, somam resultados enormes com o tempo. Ler 10 páginas por dia vira mais de 10 livros no ano. Praticar um idioma 15 minutos diários vence quem estuda 3 horas de vez em quando. O segredo não é INTENSIDADE, é CONSTÂNCIA. Pra criar um hábito: comece RIDICULAMENTE pequeno (tão pequeno que seja difícil falhar — 1 página, 5 minutos); ANCORE numa rotina que já existe ("depois do café, leio"); e foque em NÃO QUEBRAR a sequência (cada dia feito puxa o próximo). Não busque perfeição — se falhar um dia, volte no próximo sem drama. Os hábitos transformam grandes objetivos, que assustam, em passos diários simples que qualquer um dá. É a produtividade aplicada à vida toda.',
      },
      estrutura: {
        titulo: 'O poder do hábito',
        partes: [
          { simbolo: '🌱', desc: 'Comece ridiculamente pequeno: difícil de falhar.' },
          { simbolo: '⚓', desc: 'Ancore num hábito que já existe ("após o café...").' },
          { simbolo: '🔗', desc: 'Foque em não quebrar a sequência diária.' },
          { simbolo: '📈', desc: 'Constância > intensidade: o pouco soma muito.' },
        ],
      },
      exemplo: {
        titulo: 'Pouco e constante vence',
        celulas: [
          { ref: '"Vou ler 1 hora por dia"', valor: 'Começo com 1 página (difícil falhar)' },
          { ref: '3 horas de vez em quando', valor: '15 minutos todo dia vencem' },
          { ref: 'Hábito solto no ar', valor: 'Ancorado: "depois do café, leio"' },
          { ref: 'Falhei um dia, desisto', valor: 'Volto no próximo sem drama' },
        ],
        formula: 'Pequeno + ancorado + constante = grandes resultados com o tempo',
        resultado: 'Você usa hábitos pequenos e constantes pra conquistar grandes objetivos.',
        comentario: 'O erro clássico é começar GRANDE demais ("vou à academia 2 horas todo dia") — o que é insustentável e leva a desistir em uma semana. O caminho oposto funciona: comece tão pequeno que pareça ridículo (5 minutos de caminhada), porque o hábito que importa é o de APARECER todo dia; o tamanho cresce sozinho depois. E uma falha não quebra nada — quem desiste não é quem falha um dia, é quem falha e DESISTE. Errou? Volte amanhã. A constância imperfeita vence a intensidade que não dura.',
      },
      vocabulario: [
        { palavra: 'Hábito', def: 'Ação repetida quase sem pensar; molda boa parte da vida.' },
        { palavra: 'Constância', def: 'Fazer pouco, mas todo dia; vence a intensidade pontual.' },
        { palavra: 'Ancorar', def: 'Ligar o novo hábito a um que já existe pra lembrar de fazê-lo.' },
      ],
      chave: [
        'Hábitos pequenos e constantes constroem grandes resultados',
        'Comece ridiculamente pequeno e ancore numa rotina existente',
        'Constância vence intensidade; uma falha não quebra nada',
      ],
      porque: 'Grandes objetivos se conquistam com pouquinho, todo dia. Hábitos pequenos, ancorados em rotinas e mantidos com constância — sem buscar perfeição — transformam metas que assustam em passos diários simples, e somam resultados enormes ao longo do tempo.',
    },
    pratica: {
      instrucao: 'Vamos criar um hábito pequeno e constante.',
      passos: [
        'Escolha um objetivo seu (ler, exercitar, aprender algo)',
        'Defina uma versão RIDICULAMENTE pequena do hábito (5 min, 1 página)',
        'Ancore-o num hábito que já existe ("depois do café, eu...")',
        'Comprometa-se a fazê-lo todo dia, focando em não quebrar a sequência',
        'Combine consigo: se falhar um dia, volta no próximo sem culpa',
      ],
    },
    desafio: {
      cenario: 'Construa um hábito: escolha um objetivo, defina uma versão minúscula da ação, ancore-a numa rotina existente e comprometa-se com a constância diária — descobrindo que pouco e constante, sem buscar perfeição, conquista o que grandes esforços pontuais não conseguem.',
      requisitos: [
        'Escolhi um objetivo',
        'Defini uma versão ridiculamente pequena',
        'Ancorei o hábito numa rotina existente',
        'Comprometi-me com a constância diária',
        'Aceito que falhar um dia não quebra tudo',
      ],
      dica: 'Um truque pra manter a sequência: marque num calendário cada dia que você cumpriu o hábito. Ver a "corrente" de dias marcados crescendo motiva a não quebrá-la. E se quebrar, a regra de ouro é "nunca falhe DUAS vezes seguidas" — um dia perdido é acidente, dois viram recaída. Volte logo. Com o tempo, o hábito vira automático e nem exige mais força de vontade.',
    },
    validacao: [
      'Entendo o poder dos hábitos pequenos',
      'Começo ridiculamente pequeno',
      'Ancoro o hábito numa rotina existente',
      'Foco na constância, não na intensidade',
      'Não desisto se falhar um dia',
    ],
  },

  'mkt-produtividade-8': {
    trilhaId: 'mkt-produtividade', numero: 8, titulo: 'Projeto: seu sistema de produtividade',
    tempoTotal: 16, xp: 110, vertente: 'ambos',
    aula: {
      gancho: 'Lista, prioridades, agenda, foco, hábitos — você aprendeu as peças. Agora vamos montá-las num sistema simples que funciona pra VOCÊ, no seu dia a dia. Um sistema de produtividade pessoal é o que transforma técnicas soltas numa forma de viver mais leve e realizada.',
      conceito: {
        titulo: 'Tudo junto: seu sistema simples e pessoal',
        texto: 'Este projeto reúne a trilha num SISTEMA pessoal de produtividade — simples e sustentável. Você vai definir: 1) sua LISTA de tarefas (onde fica, como usa); 2) como PRIORIZA (escolher 1 a 3 importantes por dia); 3) sua AGENDA (planejamento semanal, hora pras prioridades); 4) suas estratégias contra a PROCRASTINAÇÃO (quebrar tarefas, começar pequeno); 5) sua ORGANIZAÇÃO digital (manter o ambiente em ordem); e 6) seus HÁBITOS-chave (pouco e constante). O segredo de um bom sistema é ser SIMPLES o bastante pra você manter — um sistema complicado demais é abandonado em uma semana. Comece com o básico (uma lista + escolher 3 prioridades por dia + um planejamento semanal) e adicione o resto aos poucos. Escreva seu sistema, use-o por uma semana e ajuste. Ao final, você terá um jeito próprio de organizar tempo e tarefas que rende mais, reduz o estresse e devolve tempo pra sua vida.',
      },
      estrutura: {
        titulo: 'O sistema completo',
        partes: [
          { simbolo: '📋', desc: 'Lista + prioridades: o que fazer e o que vem primeiro.' },
          { simbolo: '🗓️', desc: 'Agenda: planejamento semanal e hora pras prioridades.' },
          { simbolo: '🚀', desc: 'Antiprocrastinação + organização + hábitos-chave.' },
          { simbolo: '🔄', desc: 'Simples pra manter; use uma semana e ajuste.' },
        ],
      },
      exemplo: {
        titulo: 'Um sistema que se mantém',
        celulas: [
          { ref: 'Lista + prioridades', valor: 'App de notas + 3 prioridades de manhã' },
          { ref: 'Agenda', valor: 'Planejo a semana no domingo, 15 min' },
          { ref: 'Antiprocrastinação', valor: 'Começo pelo pedaço pequeno' },
          { ref: 'Hábitos', valor: 'Leio 10 minutos após o café' },
        ],
        formula: 'Lista + prioridades + agenda + foco + hábitos, mantidos simples = seu sistema pessoal',
        resultado: 'Você monta um sistema de produtividade próprio, simples e ajustável.',
        comentario: 'O domínio completo da produtividade não é seguir um método famoso à risca — é montar o SEU, com as peças que funcionam pra sua vida. E o maior erro aqui é a complexidade: muita gente monta sistemas elaborados, cheios de apps e regras, que duram uma semana. O melhor sistema é o mais SIMPLES que você consegue manter de verdade. Comece mínimo (lista + 3 prioridades + planejamento semanal), prove que mantém, e cresça devagar. Um sistema simples e usado vale infinitamente mais que um perfeito e abandonado.',
      },
      vocabulario: [
        { palavra: 'Sistema de produtividade', def: 'Seu jeito pessoal de organizar tarefas, tempo, foco e hábitos.' },
        { palavra: 'Simplicidade', def: 'Manter o sistema simples o bastante pra usá-lo de verdade.' },
        { palavra: 'Ajustar', def: 'Testar o sistema por uma semana e mudar o que não funcionou.' },
      ],
      chave: [
        'O projeto reúne lista, prioridades, agenda, foco e hábitos',
        'Monte um sistema simples o bastante pra você manter',
        'Comece mínimo, use uma semana e ajuste devagar',
      ],
      porque: 'Reunir as técnicas num sistema pessoal e simples transforma a produtividade numa forma de viver mais leve. Um sistema que você realmente mantém — começando mínimo e ajustando com a prática — rende mais, reduz o estresse e devolve tempo pra sua vida.',
    },
    pratica: {
      instrucao: 'Vamos montar seu sistema de produtividade.',
      passos: [
        'LISTA: defina onde fica e como você usa sua lista de tarefas',
        'PRIORIDADES: defina como escolhe 1 a 3 importantes por dia',
        'AGENDA: defina seu planejamento semanal e a hora das prioridades',
        'PROCRASTINAÇÃO e ORGANIZAÇÃO: defina suas estratégias-chave',
        'HÁBITOS: escolha 1 hábito pequeno e constante pra começar',
        'Escreva o sistema, use por uma semana e ajuste o que precisar',
      ],
    },
    desafio: {
      cenario: 'Monte seu sistema: defina sua lista, suas prioridades, sua agenda, suas estratégias antiprocrastinação e organização, e um hábito-chave — escrevendo tudo num sistema simples que você consegue manter, usando-o por uma semana e ajustando até virar o seu jeito natural de trabalhar.',
      requisitos: [
        'Defini minha lista e como priorizo',
        'Defini minha agenda e planejamento semanal',
        'Defini estratégias antiprocrastinação e de organização',
        'Escolhi um hábito-chave pra começar',
        'Escrevi o sistema e vou usá-lo por uma semana',
      ],
      dica: 'Reveja seu sistema depois de uma semana com honestidade: o que você de fato usou? O que abandonou? Geralmente, o que abandonamos era complicado ou desnecessário — corte sem dó. O sistema ideal é aquele que você usa no automático, quase sem pensar. Ele evolui com você: vai mudando conforme sua vida muda. O importante é começar simples e seguir ajustando.',
    },
    validacao: [
      'Defini minha lista e prioridades',
      'Defini minha agenda e planejamento',
      'Defini estratégias de foco e organização',
      'Escolhi um hábito-chave',
      'Montei um sistema simples pra manter',
    ],
  },
};
