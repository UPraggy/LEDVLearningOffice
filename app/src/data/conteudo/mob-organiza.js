// ============================================================================
// CONTEÚDO — Agenda, Alarme e Lembretes: o celular que organiza sua vida
// (mob-organiza). Relógio e despertador, alarmes recorrentes, cronômetro e
// timer, calendário e compromissos, lembretes que avisam na hora certa,
// notas rápidas, lembretes de remédio/contas, e um projeto de organizar a
// semana com o celular. Foco em memória externa, autonomia e tranquilidade.
// ============================================================================

export const MOB_ORGANIZA = {
  'mob-organiza-1': {
    trilhaId: 'mob-organiza', numero: 1, titulo: 'O celular é sua agenda e secretário',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Esqueceu o remédio? A consulta? O aniversário? Não precisa carregar tudo na cabeça. O celular pode ser seu secretário: ele lembra das coisas por você, avisa na hora certa e nunca se esquece. Basta aprender a pedir.',
      conceito: {
        titulo: 'O celular guarda e lembra as coisas por você',
        texto: 'O celular tem ferramentas que funcionam como uma MEMÓRIA EXTERNA: você anota o que precisa lembrar, e ele avisa na hora. O DESPERTADOR e os ALARMES acordam você e marcam horários. O CALENDÁRIO (agenda) guarda compromissos com data e hora. Os LEMBRETES avisam de tarefas (tomar remédio, pagar conta, ligar pra alguém). As NOTAS guardam ideias e listas. Tudo isso já vem no celular, em apps próprios (Relógio, Calendário, Notas/Lembretes), e funciona com avisos que aparecem e tocam na hora marcada. Em vez de confiar só na memória, você delega ao celular — e fica tranquilo, sabendo que ele vai lembrar.',
      },
      estrutura: {
        titulo: 'As ferramentas de organização',
        partes: [
          { simbolo: '⏰', desc: 'Relógio: despertador, alarmes, cronômetro, timer.' },
          { simbolo: '📅', desc: 'Calendário: compromissos com data e hora.' },
          { simbolo: '✅', desc: 'Lembretes: tarefas que avisam na hora certa.' },
          { simbolo: '📝', desc: 'Notas: ideias, listas e anotações rápidas.' },
        ],
      },
      exemplo: {
        titulo: 'Delegando a memória ao celular',
        celulas: [
          { ref: 'Preciso acordar 6h', valor: 'Ponho um alarme no Relógio' },
          { ref: 'Consulta dia 15 às 14h', valor: 'Marco no Calendário' },
          { ref: 'Tomar remédio às 20h', valor: 'Crio um lembrete' },
          { ref: 'Lista de compras', valor: 'Anoto nas Notas' },
        ],
        formula: 'Anotar no celular + aviso na hora = memória externa confiável',
        resultado: 'Você entende que o celular pode lembrar as coisas por você.',
        comentario: 'A grande virada é parar de "tentar não esquecer" e passar a anotar tudo no celular assim que pensa. A cabeça fica livre, e o celular cuida de avisar. Nesta trilha você vai dominar cada ferramenta — despertador, agenda, lembretes, notas — e montar uma rotina organizada e tranquila.',
      },
      vocabulario: [
        { palavra: 'Memória externa', def: 'Guardar no celular o que você não quer ter que lembrar sozinho.' },
        { palavra: 'Lembrete', def: 'Um aviso programado pra uma tarefa, na hora certa.' },
        { palavra: 'Calendário (agenda)', def: 'O app que guarda seus compromissos com data e hora.' },
      ],
      chave: [
        'O celular funciona como uma memória externa confiável',
        'Relógio, calendário, lembretes e notas já vêm no aparelho',
        'Anotar e delegar deixa a cabeça livre e tranquila',
      ],
      porque: 'Usar o celular como secretário liberta a memória e traz tranquilidade: você não precisa mais carregar tudo na cabeça nem temer esquecer o importante. Delegar ao celular é mais seguro, e devolve autonomia — você se organiza sozinho, sem depender de ninguém pra lembrar.',
    },
    pratica: {
      instrucao: 'Vamos conhecer os apps de organização do celular.',
      passos: [
        'Procure na tela o app de Relógio e abra-o pra ver despertador e alarmes',
        'Procure o app de Calendário (Agenda) e veja como ele mostra os dias',
        'Procure o app de Lembretes ou Notas e abra-o',
        'Observe que cada um serve pra um tipo de organização',
        'Pense em uma coisa que você costuma esquecer e em qual app ela caberia',
      ],
    },
    desafio: {
      cenario: 'Conheça seu secretário: encontre e abra os apps de Relógio, Calendário e Lembretes/Notas, entenda pra que serve cada um, e perceba que o celular pode guardar e lembrar as coisas por você — liberando sua memória.',
      requisitos: [
        'Abri o app de Relógio',
        'Abri o app de Calendário',
        'Abri o app de Lembretes ou Notas',
        'Entendi a função de cada um',
        'Percebi que posso delegar a memória ao celular',
      ],
      dica: 'Se você tem um assistente de voz no celular (como o Google Assistente ou a Siri), dá pra criar alarmes e lembretes só falando: "lembre-me de tomar o remédio às 8 horas". Nas próximas missões você aprende a fazer manualmente, mas saiba que a voz é um atalho prático.',
    },
    validacao: [
      'Encontro o app de Relógio',
      'Encontro o app de Calendário',
      'Encontro o app de Lembretes ou Notas',
      'Sei a função de cada ferramenta',
      'Entendo o celular como memória externa',
    ],
  },

  'mob-organiza-2': {
    trilhaId: 'mob-organiza', numero: 2, titulo: 'Despertador e alarmes',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Acordar na hora, lembrar de tirar o bolo do forno, parar pra um compromisso. O alarme do celular não serve só pra de manhã — é um aviso sonoro pra qualquer momento. Aprender a criá-lo, repeti-lo e desligá-lo é a base da organização.',
      conceito: {
        titulo: 'Alarmes avisam com som na hora que você marcar',
        texto: 'O ALARME é um aviso que toca na hora marcada. No app Relógio, você cria um alarme escolhendo a HORA e os MINUTOS. Pode deixá-lo para tocar UMA VEZ ou REPETIR em certos dias (todo dia, só dias de semana, ou dias específicos) — ótimo pro despertador da rotina. Cada alarme pode ter um SOM e um rótulo ("remédio", "acordar"). Quando toca, você pode DESLIGAR (parar) ou ADIAR (soneca — toca de novo em alguns minutos). Você cria quantos alarmes quiser e liga/desliga cada um com um toque, sem apagá-los. É a ferramenta mais simples e útil pra não perder horários.',
      },
      estrutura: {
        titulo: 'Criando um alarme',
        partes: [
          { simbolo: '🕕', desc: 'Escolha a hora e os minutos do alarme.' },
          { simbolo: '🔁', desc: 'Uma vez ou repetir em certos dias.' },
          { simbolo: '🏷️', desc: 'Dê um som e um rótulo ("acordar", "remédio").' },
          { simbolo: '😴', desc: 'Ao tocar: desligar (parar) ou adiar (soneca).' },
        ],
      },
      exemplo: {
        titulo: 'Alarmes pra cada necessidade',
        celulas: [
          { ref: 'Acordar 6h nos dias de semana', valor: 'Alarme 6:00, repetir seg-sex' },
          { ref: 'Tirar o bolo em 40 min', valor: 'Melhor usar o timer (próxima missão)' },
          { ref: 'Alarme tocou', valor: 'Desligo ou aperto soneca' },
          { ref: 'Fim de semana sem alarme', valor: 'Desligo o alarme sem apagar' },
        ],
        formula: 'Hora + repetição + som = alarme que avisa quando você precisa',
        resultado: 'Você cria, repete e controla alarmes pra não perder horários.',
        comentario: 'Crie alarmes com rótulos claros pra saber, ao tocar, do que se trata — especialmente se você usa vários ("acordar", "sair pro médico", "remédio da tarde"). E lembre: desligar um alarme na lista (a chavinha) só o desativa; ele continua salvo pra você religar quando quiser, sem precisar criar de novo.',
      },
      vocabulario: [
        { palavra: 'Alarme', def: 'Um aviso que toca na hora marcada por você.' },
        { palavra: 'Repetir', def: 'Fazer o alarme tocar nos dias escolhidos, automaticamente.' },
        { palavra: 'Soneca (adiar)', def: 'Fazer o alarme tocar de novo em alguns minutos.' },
      ],
      chave: [
        'O alarme toca na hora que você marca',
        'Pode tocar uma vez ou repetir em certos dias',
        'Ao tocar, dá pra desligar ou adiar (soneca)',
      ],
      porque: 'O alarme é a ferramenta mais básica e poderosa pra não perder horários — do despertador diário a um aviso pontual. Dominá-lo dá autonomia pra cumprir compromissos e rotinas sem depender da memória nem de outra pessoa pra lembrar.',
    },
    pratica: {
      instrucao: 'Vamos criar e configurar um alarme.',
      passos: [
        'Abra o app Relógio e vá na aba de Alarme',
        'Toque no "+" pra criar um novo alarme e escolha a hora',
        'Defina se ele repete (ex.: dias de semana) e dê um rótulo',
        'Salve o alarme e veja-o na lista, com a chavinha de ligar/desligar',
        'Desligue e religue a chavinha pra ver que o alarme fica salvo',
      ],
    },
    desafio: {
      cenario: 'Domine os alarmes: crie um alarme escolhendo hora, repetição e rótulo, salve-o, e pratique ligar/desligar a chavinha — entendendo que ao tocar você pode desligar ou adiar, e que desativar não apaga o alarme.',
      requisitos: [
        'Criei um alarme com hora definida',
        'Configurei repetição e rótulo',
        'Salvei e vi o alarme na lista',
        'Liguei e desliguei a chavinha',
        'Sei desligar e adiar quando o alarme toca',
      ],
      dica: 'Para o despertador funcionar mesmo com o celular no silencioso, saiba que o alarme normalmente toca de qualquer jeito (ele ignora o modo silencioso). Mas confira o volume do alarme nas Configurações de som — ele é separado do volume de toque, e você não quer um despertador mudo.',
    },
    validacao: [
      'Crio um alarme com hora certa',
      'Configuro repetição e rótulo',
      'Ligo e desligo alarmes sem apagar',
      'Sei desligar e adiar ao tocar',
      'Confiro o volume do alarme',
    ],
  },

  'mob-organiza-3': {
    trilhaId: 'mob-organiza', numero: 3, titulo: 'Cronômetro e timer',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Quanto tempo o macarrão já está cozinhando? Avise quando der 10 minutos de caminhada. O celular tem duas ferramentas de tempo além do alarme: o cronômetro, que conta pra cima, e o timer, que conta pra baixo e avisa no fim. Pequenas, mas usadíssimas.',
      conceito: {
        titulo: 'Cronômetro conta o tempo; timer avisa quando acaba',
        texto: 'No app Relógio há duas ferramentas além dos alarmes. O CRONÔMETRO conta o tempo PRA CIMA, do zero: você inicia, ele marca quanto tempo passou (útil pra cronometrar uma caminhada, um exercício, quanto demora algo). O TIMER (temporizador) faz o contrário: você define um TEMPO (ex.: 10 minutos), inicia, e ele conta PRA BAIXO até zerar, quando TOCA um aviso — perfeito pra cozinhar, pra uma pausa, pra qualquer "me avise daqui a tanto tempo". Ambos têm botões simples de iniciar, pausar e zerar. O timer é um dos recursos mais práticos do dia a dia, especialmente na cozinha.',
      },
      estrutura: {
        titulo: 'Duas formas de medir o tempo',
        partes: [
          { simbolo: '⏱️', desc: 'Cronômetro: conta pra cima, do zero.' },
          { simbolo: '⏲️', desc: 'Timer: conta pra baixo e toca ao zerar.' },
          { simbolo: '▶️', desc: 'Botões de iniciar, pausar e zerar.' },
          { simbolo: '🍝', desc: 'Timer é ótimo pra cozinhar e pausas.' },
        ],
      },
      exemplo: {
        titulo: 'Tempo sob controle',
        celulas: [
          { ref: 'Quanto durou minha caminhada?', valor: 'Uso o cronômetro' },
          { ref: 'Macarrão coze em 9 minutos', valor: 'Ponho um timer de 9 min' },
          { ref: 'Pausa de 15 min no trabalho', valor: 'Timer de 15 min me avisa' },
          { ref: 'Timer tocou', valor: 'Sei que o tempo acabou' },
        ],
        formula: 'Cronômetro (conta o tempo) + timer (avisa no fim) = tempo sob controle',
        resultado: 'Você mede o tempo e recebe avisos sem ficar olhando o relógio.',
        comentario: 'O timer é libertador na cozinha: você põe o tempo, vai fazer outra coisa, e o celular avisa na hora exata — chega de comida queimada por esquecimento. Use rótulos ou vários timers se cozinhar várias coisas. E o cronômetro é ótimo pra acompanhar exercícios e atividades.',
      },
      vocabulario: [
        { palavra: 'Cronômetro', def: 'Ferramenta que conta o tempo pra cima, do zero.' },
        { palavra: 'Timer (temporizador)', def: 'Ferramenta que conta pra baixo e avisa quando zera.' },
        { palavra: 'Pausar', def: 'Parar a contagem temporariamente, podendo continuar depois.' },
      ],
      chave: [
        'O cronômetro conta o tempo que passou',
        'O timer conta pra baixo e toca ao acabar',
        'O timer é perfeito pra cozinha e pausas',
      ],
      porque: 'Cronômetro e timer trazem o controle do tempo pro dia a dia: você acompanha atividades e recebe avisos sem precisar vigiar o relógio. O timer, em especial, evita esquecimentos práticos (comida no fogo) e organiza pausas, somando conforto e autonomia.',
    },
    pratica: {
      instrucao: 'Vamos usar o timer e o cronômetro.',
      passos: [
        'Abra o app Relógio e encontre as abas de Cronômetro e Timer (Temporizador)',
        'No Timer, defina 1 minuto e inicie; espere ele zerar e ouça o aviso',
        'Desligue o aviso do timer quando tocar',
        'No Cronômetro, toque em iniciar, espere um pouco e veja o tempo correr',
        'Pause e zere o cronômetro pra ver os controles',
      ],
    },
    desafio: {
      cenario: 'Controle o tempo: use o timer pra contar um tempo definido até tocar o aviso (como faria na cozinha), e use o cronômetro pra medir um tempo decorrido — dominando os botões de iniciar, pausar e zerar de ambos.',
      requisitos: [
        'Defini e iniciei um timer',
        'Ouvi o aviso quando o timer zerou',
        'Usei o cronômetro pra medir o tempo',
        'Pausei e zerei as contagens',
        'Sei quando usar timer e quando usar cronômetro',
      ],
      dica: 'Pelo assistente de voz, o timer fica ainda mais prático na cozinha, com as mãos ocupadas: basta falar "põe um timer de 10 minutos". Mas saiba fazer manualmente também — assim você não depende da voz e consegue usar vários timers ou ajustar com precisão.',
    },
    validacao: [
      'Defino e inicio um timer',
      'Reconheço o aviso de fim do timer',
      'Uso o cronômetro pra medir tempo',
      'Domino iniciar, pausar e zerar',
      'Escolho timer ou cronômetro conforme a tarefa',
    ],
  },

  'mob-organiza-4': {
    trilhaId: 'mob-organiza', numero: 4, titulo: 'Calendário: marcar compromissos',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Consulta médica dia 15, aniversário da neta dia 22, reunião na quinta. Guardar isso na cabeça é arriscado. O calendário do celular guarda cada compromisso com data e hora — e te avisa antes, pra você nunca chegar atrasado ou esquecer.',
      conceito: {
        titulo: 'O calendário guarda compromissos e avisa antes',
        texto: 'O CALENDÁRIO (ou Agenda) é o app que organiza seus compromissos no tempo. Você cria um EVENTO informando: um TÍTULO ("consulta Dr. Paulo"), a DATA, a HORA, e opcionalmente o LOCAL e uma observação. O evento aparece no dia certo, e você pode ver a agenda por dia, semana ou mês. O melhor: cada evento pode ter um LEMBRETE que avisa ANTES (15 minutos, 1 hora, 1 dia antes) — assim você se prepara a tempo. Eventos que se repetem (toda terça, todo mês) podem ser marcados como recorrentes. O calendário é a ferramenta central pra quem tem compromissos e não quer depender da memória.',
      },
      estrutura: {
        titulo: 'Criando um evento',
        partes: [
          { simbolo: '✏️', desc: 'Título: o nome do compromisso.' },
          { simbolo: '📆', desc: 'Data e hora do evento.' },
          { simbolo: '📍', desc: 'Local e observações (opcional).' },
          { simbolo: '🔔', desc: 'Lembrete que avisa antes (15 min, 1 dia...).' },
        ],
      },
      exemplo: {
        titulo: 'Compromissos guardados e avisados',
        celulas: [
          { ref: 'Consulta dia 15 às 14h', valor: 'Crio evento com data, hora e local' },
          { ref: 'Quero ser avisado antes', valor: 'Ponho lembrete de 1 dia e 1 hora antes' },
          { ref: 'Reunião toda terça', valor: 'Marco como evento recorrente' },
          { ref: 'Ver a semana', valor: 'Mudo a visualização pra semana' },
        ],
        formula: 'Título + data/hora + local + lembrete = compromisso seguro na agenda',
        resultado: 'Você guarda compromissos e é avisado antes da hora.',
        comentario: 'O segredo é anotar o compromisso na agenda na hora em que ele é marcado — saiu do médico com retorno em 30 dias? Já lance ali, com lembrete. Assim você nunca depende de lembrar depois. E os lembretes "antes" são o que evitam atrasos: 1 dia antes pra se planejar, 1 hora antes pra sair a tempo.',
      },
      vocabulario: [
        { palavra: 'Evento', def: 'Um compromisso marcado no calendário, com data e hora.' },
        { palavra: 'Lembrete do evento', def: 'O aviso que o calendário dá antes do compromisso.' },
        { palavra: 'Recorrente', def: 'Um evento que se repete automaticamente (toda terça, todo mês).' },
      ],
      chave: [
        'O calendário guarda compromissos com data e hora',
        'Cada evento pode avisar antes, com lembrete',
        'Eventos que se repetem podem ser recorrentes',
      ],
      porque: 'O calendário é a memória dos seus compromissos: guarda tudo no tempo certo e avisa antes, evitando atrasos e esquecimentos. Pra quem tem consultas, encontros e datas a cumprir, é a ferramenta que traz organização e a tranquilidade de não depender da memória.',
    },
    pratica: {
      instrucao: 'Vamos criar um compromisso no calendário.',
      passos: [
        'Abra o app Calendário (Agenda) e toque no "+" pra criar um evento',
        'Dê um título ao compromisso (ex.: "consulta") e escolha data e hora',
        'Adicione um local, se quiser, e uma observação',
        'Configure um lembrete pra avisar antes (ex.: 1 hora antes)',
        'Salve e veja o evento aparecer no dia certo da agenda',
      ],
    },
    desafio: {
      cenario: 'Use a agenda: crie um evento no calendário com título, data, hora e local, configure um lembrete pra avisar antes, e navegue pela visualização de dia/semana/mês — garantindo que você seja avisado dos seus compromissos a tempo.',
      requisitos: [
        'Criei um evento com título, data e hora',
        'Adicionei local e observação',
        'Configurei um lembrete antes do evento',
        'Vi o evento no dia certo da agenda',
        'Sei navegar entre dia, semana e mês',
      ],
      dica: 'Se você usa uma conta Google ou Apple no celular, sua agenda fica salva na nuvem — então, se trocar de aparelho, os compromissos voltam. E dá pra compartilhar eventos ou ver agendas da família. Por ora, o importante é anotar tudo; o resto vem com o uso.',
    },
    validacao: [
      'Crio eventos com data e hora',
      'Adiciono local e observações',
      'Configuro lembretes antes do evento',
      'Vejo eventos no dia certo',
      'Navego entre dia, semana e mês',
    ],
  },

  'mob-organiza-5': {
    trilhaId: 'mob-organiza', numero: 5, titulo: 'Lembretes de tarefas',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Não é um compromisso com hora marcada — é "preciso ligar pro encanador", "comprar pão", "pagar a luz". Tarefas soltas que você não quer esquecer. Os lembretes existem exatamente pra isso: você anota, e o celular cutuca você na hora ou no lugar certo.',
      conceito: {
        titulo: 'Lembretes avisam de tarefas na hora ou no lugar certo',
        texto: 'Os LEMBRETES (app Lembretes no iPhone, Tarefas/Google Tarefas ou Keep no Android) servem pra TAREFAS — coisas a fazer, não compromissos com hora fixa. Você escreve a tarefa ("comprar pão") e pode adicionar um AVISO POR HORÁRIO (me lembre hoje às 18h) ou até POR LOCAL (me lembre quando eu chegar no mercado, em alguns celulares). As tarefas viram uma LISTA: você marca como CONCLUÍDA (com um toque) conforme faz, e ela some ou risca. Dá pra ter várias listas (compras, casa, saúde). É a ferramenta ideal pra esvaziar a cabeça: tudo que você "precisa fazer" vira um lembrete, e o celular cuida de avisar.',
      },
      estrutura: {
        titulo: 'Organizando tarefas',
        partes: [
          { simbolo: '📋', desc: 'Escreva a tarefa ("comprar pão", "ligar pro médico").' },
          { simbolo: '🔔', desc: 'Aviso por horário: "me lembre às 18h".' },
          { simbolo: '✔️', desc: 'Marque como concluída quando fizer.' },
          { simbolo: '🗂️', desc: 'Várias listas: compras, casa, saúde.' },
        ],
      },
      exemplo: {
        titulo: 'Tarefas que não se perdem',
        celulas: [
          { ref: 'Preciso ligar pro encanador', valor: 'Crio lembrete com aviso às 9h' },
          { ref: 'Comprar pão e leite', valor: 'Lista de compras nos lembretes' },
          { ref: 'Já liguei pro encanador', valor: 'Marco a tarefa como concluída' },
          { ref: 'Tarefas de casa e de saúde', valor: 'Separo em listas diferentes' },
        ],
        formula: 'Tarefa anotada + aviso + marcar concluída = nada se perde',
        resultado: 'Você esvazia a cabeça e o celular avisa de cada tarefa.',
        comentario: 'A diferença pro calendário: o calendário é pra compromissos com hora marcada (consulta às 14h); os lembretes são pra tarefas (fazer algo, sem hora rígida, ou com aviso flexível). Use os dois juntos — e crie o hábito de anotar a tarefa no instante em que ela surge, antes de esquecer.',
      },
      vocabulario: [
        { palavra: 'Lembrete (tarefa)', def: 'Uma coisa a fazer, anotada pra não esquecer, com aviso opcional.' },
        { palavra: 'Concluir', def: 'Marcar a tarefa como feita, com um toque.' },
        { palavra: 'Lista', def: 'Um grupo de tarefas relacionadas (compras, casa, saúde).' },
      ],
      chave: [
        'Lembretes são pra tarefas, não compromissos com hora fixa',
        'Podem avisar por horário e ser marcados como concluídos',
        'Várias listas organizam tarefas por tema',
      ],
      porque: 'Os lembretes esvaziam a mente das mil tarefas do dia: em vez de tentar lembrar de tudo, você anota e o celular avisa. Isso reduz o estresse de "será que esqueci algo?" e garante que as pequenas tarefas — muitas vezes as que mais se perdem — sejam cumpridas.',
    },
    pratica: {
      instrucao: 'Vamos criar lembretes de tarefas.',
      passos: [
        'Abra o app de Lembretes (ou Tarefas/Keep) do seu celular',
        'Crie uma tarefa simples (ex.: "comprar pão")',
        'Adicione um aviso por horário a ela (ex.: hoje às 18h)',
        'Crie mais uma ou duas tarefas pra formar uma pequena lista',
        'Marque uma tarefa como concluída e veja-a ser riscada/sumir',
      ],
    },
    desafio: {
      cenario: 'Organize tarefas: crie lembretes de coisas a fazer, adicione avisos por horário, forme uma lista, e marque tarefas como concluídas conforme as faz — esvaziando a cabeça e deixando o celular avisar de cada uma.',
      requisitos: [
        'Criei uma tarefa nos lembretes',
        'Adicionei um aviso por horário',
        'Formei uma lista com várias tarefas',
        'Marquei uma tarefa como concluída',
        'Entendo a diferença entre lembrete e compromisso',
      ],
      dica: 'A lista de compras é o melhor lugar pra começar a usar lembretes/notas: vá adicionando itens conforme acabam em casa, e no mercado você abre a lista e marca cada um ao pegar. Nunca mais esquecer aquele item que faltava — e ainda compra só o necessário.',
    },
    validacao: [
      'Crio tarefas nos lembretes',
      'Adiciono avisos por horário',
      'Organizo tarefas em listas',
      'Marco tarefas como concluídas',
      'Distingo lembrete de compromisso',
    ],
  },

  'mob-organiza-6': {
    trilhaId: 'mob-organiza', numero: 6, titulo: 'Notas rápidas e listas',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Uma senha do Wi-Fi pra anotar, a receita da vovó, o número da casa que você visitou, uma ideia que não pode escapar. Nem tudo é tarefa ou compromisso — às vezes você só precisa anotar. O app de Notas é o caderninho infinito do celular.',
      conceito: {
        titulo: 'Notas guardam qualquer anotação, sempre à mão',
        texto: 'O app de NOTAS (Notas no iPhone, Keep ou Notas no Android) é um caderno digital pra guardar qualquer coisa por escrito: ideias, receitas, listas, recados, informações úteis. Você cria uma nota, dá um TÍTULO e escreve o conteúdo — texto livre, sem regras. As notas ficam salvas e organizadas, fáceis de buscar depois. Você pode fazer LISTAS com caixinhas pra marcar (ótimo pra compras), adicionar FOTOS a uma nota, e até ditar por voz. Diferente do lembrete, a nota não "avisa" — ela só guarda, pra você consultar quando quiser. É o lugar pra tudo que você quer registrar e ter sempre por perto.',
      },
      estrutura: {
        titulo: 'O caderno digital',
        partes: [
          { simbolo: '🗒️', desc: 'Crie uma nota com título e texto livre.' },
          { simbolo: '☑️', desc: 'Faça listas com caixinhas pra marcar.' },
          { simbolo: '🖼️', desc: 'Adicione fotos à nota.' },
          { simbolo: '🔍', desc: 'Tudo salvo e fácil de buscar depois.' },
        ],
      },
      exemplo: {
        titulo: 'Guardando o que importa',
        celulas: [
          { ref: 'Senha do Wi-Fi de casa', valor: 'Anoto numa nota pra não esquecer' },
          { ref: 'Receita de bolo da vovó', valor: 'Guardo numa nota com foto' },
          { ref: 'Lista de compras', valor: 'Crio uma nota com caixinhas' },
          { ref: 'Quero achar a receita depois', valor: 'Busco pelo nome na busca' },
        ],
        formula: 'Anotar livremente + salvar + buscar = caderno infinito sempre com você',
        resultado: 'Você registra qualquer informação e a encontra quando precisa.',
        comentario: 'As notas são o canivete suíço da organização: servem pra absolutamente tudo que você quer anotar. Crie o hábito de registrar ali o que costuma esquecer ou procurar — senhas (de coisas não bancárias), medidas, receitas, recados. E como tudo fica salvo na conta, suas notas te acompanham se trocar de celular.',
      },
      vocabulario: [
        { palavra: 'Nota', def: 'Uma anotação livre guardada no celular pra consultar depois.' },
        { palavra: 'Lista com caixinhas', def: 'Uma nota onde cada item pode ser marcado (ótimo pra compras).' },
        { palavra: 'Buscar', def: 'Procurar uma nota pelo conteúdo ou título, rapidamente.' },
      ],
      chave: [
        'As notas guardam qualquer anotação por escrito',
        'Dá pra fazer listas com caixinhas e adicionar fotos',
        'Tudo fica salvo e fácil de buscar depois',
      ],
      porque: 'O app de notas é a memória escrita do celular: guarda tudo que você quer registrar e ter à mão, das receitas às senhas do Wi-Fi. Em vez de papéis soltos que se perdem, você tem um caderno infinito, organizado e sempre no bolso — pronto pra consultar.',
    },
    pratica: {
      instrucao: 'Vamos criar uma nota e uma lista.',
      passos: [
        'Abra o app de Notas (ou Keep) e crie uma nota nova',
        'Dê um título (ex.: "Receita de bolo") e escreva algum conteúdo',
        'Crie outra nota e transforme-a em lista com caixinhas (ex.: compras)',
        'Marque um item da lista pra ver a caixinha funcionar',
        'Use a busca pra encontrar uma das notas pelo nome',
      ],
    },
    desafio: {
      cenario: 'Use o caderno digital: crie notas com título e texto livre, faça uma lista com caixinhas pra marcar, e use a busca pra reencontrar uma nota — registrando o que você quer ter sempre à mão, das receitas às listas.',
      requisitos: [
        'Criei uma nota com título e conteúdo',
        'Fiz uma lista com caixinhas',
        'Marquei um item da lista',
        'Busquei e reencontrei uma nota',
        'Entendo que a nota guarda, não avisa',
      ],
      dica: 'Cuidado com o que você anota em notas comuns: NÃO guarde ali senhas de banco, do PIX ou dados de cartão — notas não são cofres seguros. Pra senhas importantes, há os gerenciadores de senha (visto no módulo de segurança). Notas servem pra informações do dia a dia, não pra segredos financeiros.',
    },
    validacao: [
      'Crio notas com título e texto',
      'Faço listas com caixinhas',
      'Marco itens nas listas',
      'Busco e reencontro notas',
      'Sei o que não guardar em notas (senhas de banco)',
    ],
  },

  'mob-organiza-7': {
    trilhaId: 'mob-organiza', numero: 7, titulo: 'Lembretes de remédio e contas',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'O remédio das 8h e das 20h, todos os dias. A conta de luz que vence dia 10, todo mês. Esquecer disso tem consequências reais — na saúde, no bolso. Mas são exatamente o tipo de coisa repetida que o celular lembra com perfeição, sem nunca falhar.',
      conceito: {
        titulo: 'Avisos recorrentes cuidam de remédios e contas',
        texto: 'As tarefas que mais importam esquecer — REMÉDIOS e CONTAS — costumam ser REPETIDAS, e o celular brilha nisso. Pra remédios, você cria ALARMES ou LEMBRETES recorrentes nos horários certos (8h e 20h todo dia), com o nome do remédio no rótulo; alguns celulares têm até uma função de saúde pra lembrar remédios e registrar se tomou. Pra contas, você cria lembretes ou eventos recorrentes perto do vencimento ("pagar luz — vence dia 10"), avisando com alguns dias de antecedência pra dar tempo de pagar. O segredo é a RECORRÊNCIA: configura uma vez, e o aviso se repete pra sempre, sem você precisar recriar.',
      },
      estrutura: {
        titulo: 'Avisos que se repetem sozinhos',
        partes: [
          { simbolo: '💊', desc: 'Remédio: alarmes recorrentes nos horários certos.' },
          { simbolo: '🏷️', desc: 'Rótulo com o nome do remédio pra saber qual é.' },
          { simbolo: '💡', desc: 'Conta: lembrete recorrente antes do vencimento.' },
          { simbolo: '🔁', desc: 'Configura uma vez; repete pra sempre.' },
        ],
      },
      exemplo: {
        titulo: 'Saúde e bolso protegidos',
        celulas: [
          { ref: 'Remédio às 8h e 20h todo dia', valor: 'Dois alarmes diários com o nome' },
          { ref: 'Saber se já tomei hoje', valor: 'Uso função de saúde ou marco numa nota' },
          { ref: 'Luz vence dia 10', valor: 'Lembrete recorrente dia 7 de cada mês' },
          { ref: 'Não recriar todo mês', valor: 'Deixo o aviso recorrente' },
        ],
        formula: 'Recorrência + rótulo + antecedência = remédios e contas sempre em dia',
        resultado: 'Você nunca mais esquece um remédio ou o vencimento de uma conta.',
        comentario: 'Pra remédios, dois cuidados: ponha o nome no rótulo do alarme (pra saber qual tomar, se forem vários) e, se tomar muitos, considere um app específico de lembrete de medicação, que organiza horários e doses. Pra contas, avise com 2-3 dias de antecedência — tempo de pagar sem correria nem juros por atraso.',
      },
      vocabulario: [
        { palavra: 'Recorrente', def: 'Que se repete automaticamente nos dias/horários definidos.' },
        { palavra: 'Lembrete de medicação', def: 'Aviso recorrente pra tomar um remédio na hora certa.' },
        { palavra: 'Antecedência', def: 'Avisar alguns dias antes, pra dar tempo de agir.' },
      ],
      chave: [
        'Remédios e contas são tarefas repetidas que o celular lembra bem',
        'Use alarmes/lembretes recorrentes, com rótulo claro',
        'Configura uma vez e o aviso se repete pra sempre',
      ],
      porque: 'Esquecer remédios afeta a saúde; esquecer contas custa juros e dor de cabeça. Como são tarefas recorrentes, o celular as lembra com perfeição — configuradas uma vez, avisam pra sempre. É proteção concreta pra saúde e bolso, com autonomia.',
    },
    pratica: {
      instrucao: 'Vamos criar avisos recorrentes de remédio e conta.',
      passos: [
        'No Relógio, crie um alarme recorrente (todo dia) num horário de remédio, com rótulo do nome',
        'Confira que ele está marcado pra repetir todos os dias',
        'No Calendário ou Lembretes, crie um aviso recorrente mensal pra uma conta',
        'Configure-o pra avisar alguns dias antes do vencimento',
        'Revise os dois avisos e confirme que vão se repetir sozinhos',
      ],
    },
    desafio: {
      cenario: 'Proteja saúde e bolso: crie um alarme recorrente diário pra um remédio (com o nome no rótulo) e um lembrete recorrente mensal pra uma conta (avisando dias antes do vencimento) — configurando uma vez avisos que se repetem pra sempre.',
      requisitos: [
        'Criei um alarme recorrente diário de remédio',
        'Pus o nome do remédio no rótulo',
        'Criei um lembrete recorrente de conta',
        'Configurei antecedência antes do vencimento',
        'Confirmei que os avisos se repetem sozinhos',
      ],
      dica: 'Se você cuida do remédio de outra pessoa (um pai idoso, por exemplo), pode configurar esses lembretes no celular dela e deixar tudo pronto. E vale anotar numa nota a lista de remédios, doses e horários — útil pra mostrar ao médico e pra qualquer pessoa que precise ajudar.',
    },
    validacao: [
      'Crio alarmes recorrentes de remédio',
      'Uso rótulos com o nome do remédio',
      'Crio lembretes recorrentes de contas',
      'Configuro antecedência no aviso',
      'Garanto que os avisos se repetem sozinhos',
    ],
  },

  'mob-organiza-8': {
    trilhaId: 'mob-organiza', numero: 8, titulo: 'Projeto: organizar a semana com o celular',
    tempoTotal: 16, xp: 110, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: pegar a sua semana de verdade — compromissos, remédios, contas, tarefas — e organizá-la inteira no celular. No fim, você terá um sistema que lembra de tudo por você, e a cabeça livre pra viver, confiando que nada vai escapar.',
      conceito: {
        titulo: 'Tudo junto: uma semana inteira organizada no celular',
        texto: 'Este projeto reúne a trilha numa organização real da sua semana. Você vai usar cada ferramenta no seu papel: ALARMES pros despertares e horários de remédio; o CALENDÁRIO pros compromissos com data e hora (consultas, encontros), com lembretes antes; os LEMBRETES pras tarefas a fazer (ligar, resolver, comprar); as NOTAS pras listas e informações; e avisos RECORRENTES pras contas e remédios fixos. Ao distribuir tudo que está na sua cabeça (e nos papéis soltos) por essas ferramentas, você cria um sistema que avisa de cada coisa na hora certa. O resultado é uma semana sob controle e uma mente tranquila.',
      },
      estrutura: {
        titulo: 'A semana sob controle',
        partes: [
          { simbolo: '⏰', desc: 'Alarmes: despertar e horários de remédio.' },
          { simbolo: '📅', desc: 'Calendário: compromissos com lembrete antes.' },
          { simbolo: '✅', desc: 'Lembretes: tarefas a fazer durante a semana.' },
          { simbolo: '🔁', desc: 'Recorrentes: contas e remédios fixos.' },
        ],
      },
      exemplo: {
        titulo: 'Nada escapa',
        celulas: [
          { ref: 'Acordar e remédios', valor: 'Alarmes recorrentes' },
          { ref: 'Consulta de quinta', valor: 'Evento no calendário com aviso' },
          { ref: 'Ligar pro encanador', valor: 'Lembrete de tarefa' },
          { ref: 'Conta da luz', valor: 'Aviso recorrente antes do vencimento' },
        ],
        formula: 'Alarmes + calendário + lembretes + notas + recorrentes = semana sob controle',
        resultado: 'Um sistema que lembra de tudo, e a cabeça livre pra viver.',
        comentario: 'Esse é o domínio completo da organização: você deixou de carregar tudo na memória e montou um sistema que avisa de cada coisa na hora. A sensação de ter a semana sob controle — sem o peso de "será que esqueci algo?" — é libertadora. E agora você sabe manter esse sistema sempre.',
      },
      vocabulario: [
        { palavra: 'Sistema de organização', def: 'O conjunto de alarmes, agenda, lembretes e notas trabalhando juntos.' },
        { palavra: 'Cabeça livre', def: 'A tranquilidade de não precisar lembrar de tudo sozinho.' },
        { palavra: 'Semana sob controle', def: 'Ter cada compromisso, tarefa e aviso no lugar certo.' },
      ],
      chave: [
        'O projeto reúne alarmes, calendário, lembretes e notas',
        'Cada ferramenta cuida de um tipo de coisa a lembrar',
        'O sistema avisa de tudo na hora, e a mente fica tranquila',
      ],
      porque: 'Organizar a semana inteira no celular consolida a trilha e entrega o maior benefício: um sistema externo que lembra de tudo por você. A cabeça se liberta do peso de não esquecer, a vida fica sob controle, e você ganha autonomia plena pra se organizar sozinho.',
    },
    pratica: {
      instrucao: 'Vamos organizar sua próxima semana, ferramenta por ferramenta.',
      passos: [
        'ALARMES: configure os despertares e os horários de remédio da semana, recorrentes e com rótulo',
        'CALENDÁRIO: lance os compromissos da semana (consultas, encontros) com data, hora e lembrete antes',
        'LEMBRETES: anote as tarefas a fazer (ligar, resolver, comprar), com avisos quando útil',
        'CONTAS: crie avisos recorrentes pras contas que vencem, com antecedência',
        'NOTAS: faça a lista de compras e anote informações úteis da semana',
        'Revise tudo: olhe a semana montada no celular e sinta a cabeça mais leve',
      ],
    },
    desafio: {
      cenario: 'Organize sua semana: distribua compromissos, remédios, tarefas e contas pelas ferramentas certas (alarmes, calendário, lembretes, notas, avisos recorrentes), criando um sistema que avisa de tudo na hora — e termine com a semana sob controle e a cabeça livre.',
      requisitos: [
        'Configurei alarmes de despertar e remédios',
        'Lancei os compromissos no calendário com lembretes',
        'Anotei as tarefas nos lembretes',
        'Criei avisos recorrentes pras contas',
        'Montei a semana inteira e senti a cabeça mais leve',
      ],
      dica: 'Guarde o hábito que sustenta tudo isso: anote no celular na hora em que a coisa surge. Marcou consulta? Lance ali mesmo. Pensou numa tarefa? Vire lembrete na hora. Acabou o leite? Adicione à lista. Esse reflexo de "anotar na hora" é o que mantém sua vida organizada pra sempre.',
    },
    validacao: [
      'Configurei alarmes de despertar e remédio',
      'Lancei compromissos no calendário com avisos',
      'Anotei tarefas nos lembretes',
      'Criei avisos recorrentes de contas',
      'Tenho a semana organizada e a cabeça livre',
    ],
  },
};
