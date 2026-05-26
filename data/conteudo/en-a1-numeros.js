// ============================================================================
// CONTEÚDO — Inglês A1: Números, Horas e Cores (en-a1-numeros)
// ============================================================================

export const EN_A1_NUMEROS = {
  'en-a1-numeros-1': {
    trilhaId: 'en-a1-numeros', numero: 1, titulo: 'Números 0–20',
    tempoTotal: 8, xp: 40, vertente: 'ingles',
    aula: {
      gancho: 'Preço, telefone, idade, quantidade — números estão em tudo. Os de 0 a 20 são a base; aprenda-os bem e o resto vem fácil. Bônus: alguns confundem (thirteen x thirty), e você vai aprender a diferença.',
      conceito: {
        titulo: 'A base de todos os números',
        texto: 'Os números de 0 a 12 são palavras únicas (one, two...). De 13 a 19, ganham o final "-teen" (thirteen, fourteen). Dominar 0–20 é o alicerce: com eles você fala idade, preço, telefone e quantidade. Mais pra frente, o "-teen" (13-19) vai contrastar com o "-ty" das dezenas (30, 40), um ponto que confunde — então preste atenção no som.',
      },
      estrutura: {
        titulo: 'Os números até 20',
        partes: [
          { simbolo: '0–5', desc: 'zero, one (uân), two (tchú), three (thrí), four (fór), five (fáiv).' },
          { simbolo: '6–10', desc: 'six, seven, eight (êit), nine, ten.' },
          { simbolo: '11–12', desc: 'eleven (ilévn), twelve (tuélv) — irregulares.' },
          { simbolo: '13–20', desc: '-teen: thirteen, fourteen... nineteen; e twenty (20).' },
        ],
      },
      exemplo: {
        titulo: 'Números no dia a dia',
        celulas: [
          { ref: 'Idade', valor: 'I’m twelve. — Tenho 12 anos.' },
          { ref: 'Quantia', valor: 'three coffees — três cafés' },
          { ref: 'Telefone', valor: 'diz-se dígito por dígito: nine, eight, seven...' },
          { ref: 'Atenção', valor: 'thirteen (13) tem som de "tin"; lembre do -teen' },
        ],
        formula: '0–12 únicos · 13–19 com "-teen" · 20 = twenty',
        resultado: 'Você conta, diz idade, preço e telefone.',
        comentario: 'Telefones se dizem dígito a dígito em inglês (não "vinte e três", mas "two three"). O "zero" às vezes vira "oh" (ôu) na fala de números de telefone.',
      },
      vocabulario: [
        { palavra: 'number', def: 'número (nâmber).' },
        { palavra: '-teen', def: 'final dos números 13–19 (thirteen, sixteen).' },
        { palavra: 'How many?', def: 'Quantos? (rau méni) — pergunta de quantidade.' },
      ],
      chave: [
        '0–12 são palavras únicas; 13–19 ganham "-teen"',
        'Telefone: diz-se dígito por dígito',
        'Atenção ao som do "-teen" (vai contrastar com "-ty")',
      ],
      porque: 'Números são inevitáveis: preços, horas, idade, telefone, quantidades. Dominar 0–20 destrava todas essas situações práticas — e é a base pra contar até qualquer número.',
    },
    pratica: {
      instrucao: 'Vamos contar em voz alta e usar números reais.',
      passos: [
        'Conte de 0 a 10 em voz alta: zero, one, two... ten',
        'Continue até 20: eleven, twelve, thirteen... twenty',
        'Diga sua idade: "I’m ... years old"',
        'Diga seu número de telefone dígito por dígito',
        'Conte objetos: "three books", "five chairs"',
        'Pratique os que confundem: thirteen, fourteen, fifteen',
        'Repita os irregulares: eleven, twelve',
      ],
    },
    desafio: {
      cenario: 'Use números de 0 a 20 em situações reais: sua idade, um telefone, e contar 3 quantidades de coisas.',
      requisitos: [
        'Contei de 0 a 20 corretamente',
        'Disse minha idade',
        'Disse um telefone dígito por dígito',
        'Contei quantidades (three..., five...)',
        'Pratiquei em voz alta',
      ],
      dica: 'Pratique números no dia a dia: ao ver um preço ou horário, tente dizê-lo em inglês na cabeça. Essa repetição "escondida" fixa os números sem esforço extra.',
    },
    validacao: [
      'Sei os números de 0 a 20',
      'Sei os irregulares (eleven, twelve)',
      'Sei o padrão "-teen" (13–19)',
      'Digo idade e telefone',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-numeros-2': {
    trilhaId: 'en-a1-numeros', numero: 2, titulo: 'Dezenas, centenas e idade',
    tempoTotal: 10, xp: 50, vertente: 'ingles',
    aula: {
      gancho: 'Depois do 20, os números ficam fáceis e repetitivos — há um padrão. E aqui mora a confusão clássica: thirteen (13) x thirty (30). Resolver isso te dá confiança com qualquer número.',
      conceito: {
        titulo: 'O padrão das dezenas e centenas',
        texto: 'As dezenas terminam em "-ty": twenty (20), thirty (30), forty (40)... Pra números entre elas, junta-se com hífen: twenty-one (21), forty-five (45). Centenas usam "hundred": one hundred (100), two hundred (200). O ponto crítico: -teen (13-19) x -ty (30,40). A diferença está no som — pratique bem, porque confundir preço/idade gera mal-entendidos.',
      },
      estrutura: {
        titulo: 'Montando números grandes',
        partes: [
          { simbolo: '-ty', desc: 'Dezenas: twenty(20), thirty(30), forty(40), fifty(50)...' },
          { simbolo: 'hífen', desc: 'Entre dezena e unidade: twenty-one (21), thirty-five (35).' },
          { simbolo: 'hundred', desc: 'Centenas: one hundred (100), two hundred (200).' },
          { simbolo: '⚠️', desc: 'thirTEEN (13) x thirTY (30): o som muda; preste atenção.' },
        ],
      },
      exemplo: {
        titulo: 'O perigo do -teen x -ty',
        celulas: [
          { ref: '13 vs 30', valor: 'thirteen (thâr-TÍN) x thirty (THÂR-ti)' },
          { ref: '15 vs 50', valor: 'fifteen x fifty' },
          { ref: 'Idade', valor: 'I’m forty-two. — Tenho 42 anos.' },
          { ref: 'Centena', valor: 'one hundred and twenty — cento e vinte' },
        ],
        formula: 'dezena(-ty) + (hífen) + unidade · hundred pras centenas',
        resultado: 'Você diz qualquer número até as centenas.',
        comentario: 'No -teen, a tônica (força) vai no final ("-TÍN"); no -ty, vai no início. Na dúvida ao ouvir, você pode pedir: "One three or three zero?" — confirmar evita erro de preço/idade.',
      },
      vocabulario: [
        { palavra: 'hundred', def: 'centena (rândred): one hundred = 100.' },
        { palavra: 'hyphen', def: 'hífen, usado em 21–99 (twenty-one).' },
        { palavra: 'How old?', def: 'Que idade? "How old are you?" → "I’m 42."' },
      ],
      chave: [
        'Dezenas em "-ty" (thirty, forty); junta com hífen (forty-five)',
        'Centenas com "hundred"',
        'thirTEEN (13) x thirTY (30): cuidado com o som',
      ],
      porque: 'Saber dizer qualquer número — idade, preço, ano, quantidade grande — é essencial pra compras, datas e dados. E dominar o -teen x -ty evita erros caros (confundir 15 com 50 num preço!).',
    },
    pratica: {
      instrucao: 'Vamos praticar números maiores e o contraste -teen/-ty, em voz alta.',
      passos: [
        'Diga as dezenas: twenty, thirty, forty, fifty, sixty...',
        'Monte números: twenty-one, thirty-five, forty-eight',
        'Diga sua idade exata: "I’m ... years old"',
        'Pratique o par perigoso: thirteen/thirty, fifteen/fifty (sinta o som)',
        'Diga uma centena: one hundred, two hundred',
        'Diga um número grande: one hundred and fifty (150)',
        'Diga 3 preços que você conhece',
      ],
    },
    desafio: {
      cenario: 'Diga números maiores em situações reais: sua idade, 3 preços e um número grande (ex: 150), com atenção ao -teen/-ty.',
      requisitos: [
        'Sei as dezenas (-ty)',
        'Monto números com hífen (twenty-one)',
        'Uso "hundred" pras centenas',
        'Diferencio -teen de -ty no som',
        'Pratiquei em voz alta',
      ],
      dica: 'Treine o -teen x -ty com pares: "13/30, 14/40, 15/50". Diga em voz alta exagerando a tônica. Esse é um dos detalhes que mais geram mal-entendido — e que poucos praticam.',
    },
    validacao: [
      'Sei as dezenas e centenas',
      'Monto números compostos',
      'Diferencio -teen de -ty',
      'Digo idade e preços',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-numeros-3': {
    trilhaId: 'en-a1-numeros', numero: 3, titulo: 'As horas (telling the time)',
    tempoTotal: 11, xp: 60, vertente: 'ingles',
    aula: {
      gancho: '"Que horas são?", "às 3 da tarde", "meio-dia" — dizer as horas é essencial pra combinar qualquer coisa. Em inglês há um jeito simples (e direto) que resolve quase tudo.',
      conceito: {
        titulo: 'Duas formas de dizer as horas',
        texto: 'Pra perguntar: "What time is it?" (que horas são?). Pra responder, o jeito mais fácil é DIGITAL: diga a hora + os minutos direto — "It’s seven thirty" (são 7:30). Há também o jeito clássico com "o’clock" (em ponto), "half past" (e meia) e "quarter" (e/menos quinze), mas o digital já te resolve em qualquer situação.',
      },
      estrutura: {
        titulo: 'Dizendo as horas',
        partes: [
          { simbolo: 'pergunta', desc: 'What time is it? — Que horas são? (uát táim iz it)' },
          { simbolo: 'digital', desc: 'It’s + hora + minutos: It’s seven thirty (7:30).' },
          { simbolo: 'em ponto', desc: 'o’clock: It’s three o’clock (3 em ponto).' },
          { simbolo: 'am/pm', desc: 'am = manhã; pm = tarde/noite (3 pm = 15h).' },
        ],
      },
      exemplo: {
        titulo: 'Horas na prática',
        celulas: [
          { ref: '7:30', valor: 'It’s seven thirty. (jeito digital, fácil)' },
          { ref: '3:00', valor: 'It’s three o’clock. — São 3 em ponto.' },
          { ref: '12:00', valor: 'noon (meio-dia) / midnight (meia-noite)' },
          { ref: 'A que horas', valor: 'At seven. — Às sete. (combinar: "at + hora")' },
        ],
        formula: 'It’s + hora + minutos (digital) · "at + hora" pra combinar',
        resultado: 'Você diz e combina horários.',
        comentario: 'O inglês usa muito am (manhã) e pm (tarde/noite). "8 am" = 8h da manhã; "8 pm" = 20h. Pra marcar algo, use "at": "Let’s meet at six" (vamos nos encontrar às seis).',
      },
      vocabulario: [
        { palavra: "o'clock", def: 'em ponto (usado só na hora cheia: three o’clock).' },
        { palavra: 'am / pm', def: 'manhã (am) / tarde-noite (pm).' },
        { palavra: 'noon / midnight', def: 'meio-dia / meia-noite.' },
      ],
      chave: [
        '"What time is it?" → "It’s + hora + minutos"',
        'o’clock só na hora cheia; am (manhã) / pm (tarde-noite)',
        'Pra combinar: "at + hora" (at seven)',
      ],
      porque: 'Dizer e entender horas é indispensável pra combinar encontros, pegar transporte, marcar reuniões — em viagens e no trabalho. O jeito digital é simples e resolve qualquer situação.',
    },
    pratica: {
      instrucao: 'Olhe o relógio e pratique em voz alta, ao longo da missão.',
      passos: [
        'Pergunte: "What time is it?"',
        'Diga a hora atual no jeito digital: "It’s ... "',
        'Diga uma hora cheia com o’clock: "It’s three o’clock"',
        'Pratique am/pm: "seven am", "eight pm"',
        'Diga noon (meio-dia) e midnight (meia-noite)',
        'Combine algo: "Let’s meet at six"',
        'Diga 3 horários do seu dia (acordar, almoço, dormir)',
      ],
    },
    desafio: {
      cenario: 'Diga 5 horários reais do seu dia (acordar, refeições, dormir) e combine 1 encontro usando "at".',
      requisitos: [
        'Sei perguntar "What time is it?"',
        'Digo horas no jeito digital (It’s seven thirty)',
        'Uso o’clock na hora cheia',
        'Uso am/pm corretamente',
        'Combinei um horário com "at"',
      ],
      dica: 'Adote o hábito: toda vez que olhar o relógio hoje, diga a hora em inglês na cabeça. Em um dia você já automatiza — e horas deixam de te travar.',
    },
    validacao: [
      'Sei perguntar as horas',
      'Digo as horas (digital e o’clock)',
      'Uso am/pm',
      'Sei noon e midnight',
      'Combino horários com "at"',
    ],
  },

  'en-a1-numeros-4': {
    trilhaId: 'en-a1-numeros', numero: 4, titulo: 'Dias, meses e datas',
    tempoTotal: 9, xp: 50, vertente: 'ingles',
    aula: {
      gancho: '"Segunda-feira", "em janeiro", "meu aniversário é em março" — dias e meses organizam a vida. Em inglês há uma regra simples de preposição (in/on) e uma curiosidade: tudo começa com maiúscula.',
      conceito: {
        titulo: 'Dias, meses e as preposições in/on',
        texto: 'Os dias da semana e os meses sempre começam com LETRA MAIÚSCULA em inglês (Monday, January). Pra datas, a regra de preposição: "in" pra meses e anos (in January, in 2026); "on" pra dias específicos (on Monday, on March 5th). Com isso você fala de compromissos, aniversários e planos.',
      },
      estrutura: {
        titulo: 'Dias, meses e in/on',
        partes: [
          { simbolo: 'dias', desc: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.' },
          { simbolo: 'meses', desc: 'January, February, March... December (sempre maiúsculos).' },
          { simbolo: 'on', desc: 'on + dia: on Monday, on Friday.' },
          { simbolo: 'in', desc: 'in + mês/ano: in March, in 2026.' },
        ],
      },
      exemplo: {
        titulo: 'Datas na prática',
        celulas: [
          { ref: 'EN', valor: 'My birthday is in March. — Meu aniversário é em março.' },
          { ref: 'EN', valor: 'See you on Monday. — Te vejo na segunda.' },
          { ref: 'Maiúscula', valor: 'Monday, January (sempre maiúsculos!)' },
          { ref: 'Data', valor: 'March 5th (March fifth) — 5 de março' },
        ],
        formula: '"in" pra mês/ano · "on" pra dia · tudo maiúsculo',
        resultado: 'Você fala de dias, meses e datas.',
        comentario: 'Datas usam números ordinais (5th = fifth, 1st = first). Não precisa decorar todos agora — o importante é a regra in/on e os nomes dos dias/meses.',
      },
      vocabulario: [
        { palavra: 'day / week / month', def: 'dia / semana / mês.' },
        { palavra: 'on / in', def: 'on (dia específico) / in (mês, ano).' },
        { palavra: 'birthday', def: 'aniversário (bârth-dei).' },
      ],
      chave: [
        'Dias e meses sempre com MAIÚSCULA',
        '"on" pra dias (on Monday); "in" pra meses/anos (in March)',
        'Datas usam ordinais (5th = fifth)',
      ],
      porque: 'Falar de dias, meses e datas é essencial pra combinar compromissos, falar de aniversários e fazer planos — base também pra agenda e trabalho. A regra in/on resolve a maioria das frases.',
    },
    pratica: {
      instrucao: 'Vamos praticar com datas reais suas, em voz alta.',
      passos: [
        'Diga os 7 dias da semana: Monday, Tuesday... Sunday',
        'Diga os meses (ou alguns): January, February, March...',
        'Diga seu aniversário: "My birthday is in ..." (mês)',
        'Combine um dia: "See you on ..." (dia)',
        'Pratique in/on: "in 2026", "on Friday"',
        'Diga que dia é hoje: "Today is ..."',
        'Monte 3 frases com dias/meses',
      ],
    },
    desafio: {
      cenario: 'Fale datas reais: o dia de hoje, seu aniversário (mês) e 2 compromissos (em dias específicos), usando in/on certo.',
      requisitos: [
        'Sei os dias da semana',
        'Sei os meses',
        'Usei "in" pra mês e "on" pra dia',
        'Escrevi dias/meses com maiúscula',
        'Pratiquei em voz alta',
      ],
      dica: 'Mnemônico pra in/on: "in" é mais "amplo" (mês, ano); "on" é mais "específico" (um dia). Quanto mais específico, mais "on".',
    },
    validacao: [
      'Sei dias e meses (com maiúscula)',
      'Uso "on" pra dias',
      'Uso "in" pra meses/anos',
      'Falo do meu aniversário',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-numeros-5': {
    trilhaId: 'en-a1-numeros', numero: 5, titulo: 'Cores (colours)',
    tempoTotal: 7, xp: 40, vertente: 'ingles',
    aula: {
      gancho: 'Cores aparecem em descrições, compras, trânsito ("the red car"). São palavras fáceis, visuais e muito úteis — e combinam direto com os adjetivos que você já viu.',
      conceito: {
        titulo: 'As cores e como usá-las',
        texto: 'Cores são adjetivos, então seguem a mesma regra: vêm ANTES do substantivo (a red car = um carro vermelho) e não mudam no plural (red cars). Com o "to be" você descreve: "The car is blue". São palavras de uso constante em descrições e compras.',
      },
      estrutura: {
        titulo: 'As cores principais',
        partes: [
          { simbolo: '🔴', desc: 'red (vermelho), blue (azul), green (verde), yellow (amarelo).' },
          { simbolo: '⚫', desc: 'black (preto), white (branco), grey (cinza).' },
          { simbolo: '🟤', desc: 'brown (marrom), orange (laranja), pink (rosa), purple (roxo).' },
          { simbolo: 'regra', desc: 'Antes do substantivo: a blue shirt; com "to be": it is blue.' },
        ],
      },
      exemplo: {
        titulo: 'Cores em frases',
        celulas: [
          { ref: 'EN', valor: 'The car is red. — O carro é vermelho.' },
          { ref: 'Ordem', valor: 'a blue shirt — uma camisa azul (cor antes!)' },
          { ref: 'Pergunta', valor: 'What colour is it? — Qual a cor disso?' },
          { ref: 'Plural', valor: 'green apples — maçãs verdes (cor não muda)' },
        ],
        formula: 'cor + substantivo (a red car) · "to be": it is red',
        resultado: 'Você descreve e identifica pela cor.',
        comentario: '"Colour" (britânico) e "color" (americano) são a mesma palavra, só muda a escrita. Cores são ótimas pra praticar a regra do adjetivo antes do substantivo.',
      },
      vocabulario: [
        { palavra: 'colour / color', def: 'cor (câler). Britânico: colour; americano: color.' },
        { palavra: 'light / dark', def: 'claro / escuro (light blue = azul claro).' },
        { palavra: 'What colour?', def: 'Qual cor? — pergunta.' },
      ],
      chave: [
        'Cores são adjetivos: vêm antes do substantivo',
        'Não mudam no plural (red cars)',
        'Descreva com "to be": it is blue',
      ],
      porque: 'Cores são úteis em descrições, compras e no dia a dia — e reforçam a regra do adjetivo. São palavras fáceis que dão confiança rápida.',
    },
    pratica: {
      instrucao: 'Olhe ao seu redor. Vamos nomear cores em voz alta.',
      passos: [
        'Diga as cores básicas: red, blue, green, yellow, black, white',
        'Aponte objetos e diga a cor: "The ... is ..." (The chair is brown)',
        'Pratique a ordem: "a red car", "a blue shirt"',
        'Pergunte: "What colour is it?" e responda',
        'Use light/dark: "light blue", "dark green"',
        'Diga sua cor favorita: "My favourite colour is ..."',
        'Descreva 3 objetos pela cor',
      ],
    },
    desafio: {
      cenario: 'Descreva 5 objetos ao seu redor pela cor, usando a ordem correta (cor + objeto) e o "to be".',
      requisitos: [
        'Sei as cores principais',
        'Coloquei a cor antes do substantivo (a red car)',
        'Descrevi com "to be" (it is blue)',
        'Não mudei a cor no plural',
        'Disse minha cor favorita',
      ],
      dica: 'Cores são fáceis de praticar a qualquer momento: ao ver carros, roupas, objetos, diga a cor em inglês na cabeça. Prática "invisível" que fixa rápido.',
    },
    validacao: [
      'Sei as cores principais',
      'Uso a cor antes do substantivo',
      'Descrevo com "to be"',
      'Sei light/dark',
      'Pratiquei em voz alta',
    ],
  },

  'en-a1-numeros-6': {
    trilhaId: 'en-a1-numeros', numero: 6, titulo: 'Projeto: agenda e perfil em inglês',
    tempoTotal: 15, xp: 90, vertente: 'ingles',
    aula: {
      gancho: 'Hora de juntar tudo: você vai montar um "mini perfil" e uma "agenda" em inglês, usando números, idade, horas, datas e cores. Coisas do seu dia real, ditas em inglês.',
      conceito: {
        titulo: 'Números na vida real, em inglês',
        texto: 'Você já sabe contar, dizer idade, horas, dias, meses e cores. Vamos aplicar tudo num contexto prático: um pequeno perfil seu (idade, aniversário, cor favorita) e uma mini agenda (compromissos com dia e hora). Esse tipo de informação aparece em cadastros, conversas e na organização do dia — agora em inglês.',
      },
      estrutura: {
        titulo: 'O que montar',
        partes: [
          { simbolo: '👤', desc: 'Perfil: idade (I’m ... years old), aniversário (in + mês), cor favorita.' },
          { simbolo: '📅', desc: 'Agenda: 3 compromissos com dia (on...) e hora (at...).' },
          { simbolo: '🔢', desc: 'Use números: telefone, idade, horários.' },
          { simbolo: '🗣️', desc: 'Fale tudo em voz alta no fim.' },
        ],
      },
      exemplo: {
        titulo: 'Perfil + agenda modelo',
        celulas: [
          { ref: 'Perfil', valor: 'I’m 45 years old. My birthday is in May.' },
          { ref: 'Perfil', valor: 'My favourite colour is blue.' },
          { ref: 'Agenda', valor: 'On Monday, I have a meeting at 3 pm.' },
          { ref: 'Agenda', valor: 'On Friday, dinner at seven.' },
        ],
        formula: 'idade + aniversário (in) + cor + compromissos (on... at...)',
        resultado: 'Seu perfil e agenda, em inglês.',
        comentario: 'Junte com o "to be" e o "have": "I’m 45. I have a meeting on Monday at 3 pm." Combinar o que você já sabe é o que faz o inglês crescer.',
      },
      vocabulario: [
        { palavra: 'meeting / appointment', def: 'reunião / compromisso.' },
        { palavra: 'favourite', def: 'favorito(a).' },
        { palavra: 'schedule', def: 'agenda/horário (skédiul ou shédiul).' },
      ],
      chave: [
        'Aplique números, idade, horas, datas e cores juntos',
        'Perfil (idade/aniversário/cor) + agenda (on... at...)',
        'Fale tudo em voz alta',
      ],
      porque: 'Usar números num contexto real (perfil, agenda) fixa o aprendizado e prepara pra cadastros e conversas. Concluir isso mostra que os números deixaram de ser um obstáculo no seu inglês.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Monte seu perfil e agenda em inglês, usando tudo da trilha.',
      passos: [
        'Escreva seu perfil: idade ("I’m ... years old"), aniversário ("in + mês"), cor favorita',
        'Inclua seu telefone dito em inglês (dígito a dígito)',
        'Monte uma agenda com 3 compromissos: "On [dia], ... at [hora]"',
        'Use o "to be" e o "have" pra ligar as frases',
        'Confira as preposições: in (mês), on (dia), at (hora)',
        'Leia tudo em voz alta, devagar',
        'Grave ou fale pra alguém',
      ],
    },
    desafio: {
      cenario: 'Entregue um perfil + agenda em inglês: idade, aniversário, cor favorita e 3 compromissos com dia e hora.',
      requisitos: [
        'Disse minha idade e aniversário (in + mês)',
        'Disse minha cor favorita',
        'Montei 3 compromissos com "on + dia" e "at + hora"',
        'Usei números corretamente',
        'Pratiquei em voz alta',
      ],
      dica: 'Parabéns — você concluiu "Números, Horas e Cores"! Esses elementos aparecem em quase toda conversa prática. Você acabou de remover um dos maiores travas do inglês do dia a dia.',
    },
    validacao: [
      'Usei idade, aniversário e cor no perfil',
      'Montei uma agenda com dias e horas',
      'Acertei as preposições in/on/at',
      'Usei números corretamente',
      'Pratiquei em voz alta',
    ],
  },
};
