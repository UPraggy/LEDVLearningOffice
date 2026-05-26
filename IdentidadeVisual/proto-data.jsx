/* === Escritório · dados e átomos visuais === */

// ============ DATA ============
const MODULES = [
  { id:"pc",   name:"Computador", color:"navy",  short:"Office, e-mail, IA",          totalMissions:24, doneMissions:8,  trilhas:4 },
  { id:"cel",  name:"Celular",    color:"sky",   short:"WhatsApp, PIX, Gov.br",       totalMissions:30, doneMissions:3,  trilhas:5 },
  { id:"merc", name:"Mercado",    color:"coral", short:"LinkedIn, entrevista, CV",     totalMissions:18, doneMissions:0,  trilhas:3 },
  { id:"seg",  name:"Segurança",  color:"sage",  short:"Golpes, senha, vazamento",     totalMissions:22, doneMissions:12, trilhas:3 },
  { id:"ing",  name:"Inglês",     color:"plum",  short:"A1 → B1 técnico",              totalMissions:40, doneMissions:5,  trilhas:6 },
];

const TRILHAS = {
  pc: [
    { id:"t1", num:1, title:"Fundamentos · onde tudo mora",   diff:"i", missions:5, done:5, time:"30 min" },
    { id:"t2", num:2, title:"Excel sem medo · fórmulas",      diff:"m", missions:6, done:3, time:"45 min" },
    { id:"t3", num:3, title:"E-mail profissional",            diff:"i", missions:4, done:0, time:"25 min" },
    { id:"t4", num:4, title:"IA no dia a dia (ChatGPT etc)",  diff:"m", missions:6, done:0, time:"50 min" },
  ],
  cel: [
    { id:"t5", num:1, title:"WhatsApp do trabalho",           diff:"i", missions:5, done:3, time:"35 min" },
    { id:"t6", num:2, title:"PIX seguro e Gov.br",            diff:"i", missions:6, done:0, time:"40 min" },
    { id:"t7", num:3, title:"Saúde · CarteiraSus, ConectSUS", diff:"i", missions:5, done:0, time:"30 min" },
  ],
  merc: [
    { id:"t8", num:1, title:"LinkedIn que abre porta",        diff:"m", missions:6, done:0, time:"50 min" },
    { id:"t9", num:2, title:"Entrevista por vídeo",           diff:"m", missions:5, done:0, time:"40 min" },
  ],
  seg: [
    { id:"ts1",num:1, title:"Golpes de WhatsApp",             diff:"i", missions:4, done:4, time:"30 min" },
    { id:"ts2",num:2, title:"Senha que ninguém adivinha",     diff:"i", missions:5, done:5, time:"30 min" },
    { id:"ts3",num:3, title:"Defesa contra phishing",         diff:"m", missions:6, done:3, time:"45 min" },
  ],
  ing: [
    { id:"ti1",num:1, title:"First Words · A1",               diff:"i", missions:8, done:5, time:"50 min" },
    { id:"ti2",num:2, title:"Cumprimentos e small talk",      diff:"i", missions:6, done:0, time:"40 min" },
  ],
};

// missões de uma trilha exemplo (Excel sem medo)
const MISSIONS_T2 = [
  { id:"m1", num:1, title:"O que é uma planilha",          status:"done",   xp:40, time:"5 min" },
  { id:"m2", num:2, title:"Soma e média",                  status:"done",   xp:60, time:"8 min" },
  { id:"m3", num:3, title:"Travando células com $",        status:"curr",   xp:60, time:"8 min" },
  { id:"m4", num:4, title:"PROCV simples",                 status:"locked", xp:80, time:"12 min" },
  { id:"m5", num:5, title:"Tabela dinâmica básica",        status:"locked", xp:80, time:"15 min" },
  { id:"m6", num:6, title:"Desafio · planilha de gastos",  status:"locked", xp:120,time:"20 min", isBoss:true },
];

// conteúdo de uma missão real (Travando células)
const MISSION_CONTENT = {
  title: "Travando células com $",
  module: "pc", trail: "Excel sem medo · fórmulas", diff:"m", xp:60, time:"8 min",
  hook: "Toda planilha que dá trabalho de refazer depois é uma planilha que esqueceu de travar uma célula.",
  concept: [
    { h:"O que é \"travar\" uma célula?", body:[
      "Travar é dizer pro Excel: quando eu copiar essa fórmula pra baixo, **não mude esta referência**. É um cifrão antes da letra (coluna) ou do número (linha) — ou nos dois.",
      "Sem trava: `=B2*C2` vira `=B3*C3` quando você arrasta. Com trava em C2: `=B2*$C$2` mantém o C2 mesmo arrastando."
    ]}
  ],
  glossary: [
    ["Célula", "cada quadradinho da planilha (A1, B5...)"],
    ["Fórmula", "cálculo que começa com ="],
    ["Referência", "quando uma célula usa o valor de outra"],
    ["$ (cifrão)", "fixa a coluna, a linha ou as duas"],
  ],
  keyPoints: [
    "**F4** alterna entre os modos de trava ao editar.",
    "Travar **só a coluna**: `$C2`. Só a linha: `C$2`.",
    "Quando em dúvida, trave os dois (`$C$2`) — é o mais comum.",
  ],
  why: "Em todo emprego que mexe com Excel, a primeira coisa que diferencia um iniciante de alguém pago melhor é saber travar referência. Salva planilhas inteiras de virarem refeitas.",
  practice: {
    type:"choice",
    q:"Você tem a fórmula `=B2*C2` na célula D2 e quer arrastar pra D3, D4, D5 sem que o C2 mude. Qual a forma correta?",
    options:[
      { k:"A", t:"=B2*C2" },
      { k:"B", t:"=$B$2*C2" },
      { k:"C", t:"=B2*$C$2", correct:true },
      { k:"D", t:"=$B2*$C2" },
    ],
    feedbackOk:"Boa! Você travou só o C2, que era o que precisava ficar fixo. O B2 vai mudando junto com a linha.",
    feedbackWr:"Quase. A regra é: o que você quer que **não mude** ganha os cifrões. Aqui é só o C2.",
  },
  challenge: {
    title:"Desafio · planilha de imposto",
    body:"Numa planilha onde a célula `C2` tem a alíquota de imposto (5%), monte uma fórmula em D2 que multiplique o preço pelo imposto — e que possa ser arrastada de D2 a D20 sem quebrar.",
    expected:"=B2*$C$2"
  },
  validation: [
    "Sei colocar $ antes da letra e do número",
    "Sei usar a tecla F4 para alternar os modos",
    "Consigo arrastar a fórmula sem ela quebrar",
  ],
};

// caixa do mentor
const MENTOR_INBOX = [
  { id:"i1", from:"Carlos Mendes", role:"Coordenador",
    title:"Bom dia, Maria. Sua tarefa de hoje:",
    body:"Travar uma célula no Excel é o ponto de virada. Faça a missão M3 da trilha 'Excel sem medo' e me conta na próxima como foi.",
    time:"08:14", status:"new", tag:"missão", color:"navy" },
  { id:"i2", from:"Carlos Mendes", role:"Coordenador",
    title:"Recapitulação da semana passada",
    body:"Você concluiu 4 missões e manteve a ofensiva por 12 dias. Próximo objetivo: terminar a trilha do Excel antes de sexta.",
    time:"ontem", status:"read", tag:"recap", color:"sage" },
  { id:"i3", from:"Carlos Mendes", role:"Coordenador",
    title:"Você sabe identificar um golpe de WhatsApp?",
    body:"Achei que faria sentido praticar antes da próxima trilha de Segurança. Vou anexar uma simulação rápida.",
    time:"3 dias", status:"replied", tag:"prep", color:"coral" },
];

// agenda · heatmap de 8 semanas (56 dias)
const HEATMAP = (() => {
  // 0 sem atividade, 1 1 missão, 2 2-3, 3 4+
  const seed = [
    0,1,2,2,3,1,0,
    0,2,3,3,2,1,1,
    2,3,3,3,2,3,2,
    3,2,3,3,3,2,3,
    1,2,3,3,2,2,3,
    2,3,3,2,3,3,2,
    3,3,3,3,2,3,3,
    2,3,1,0,0,0,0
  ];
  return seed;
})();

// trophies — ~50 conquistas em 8 categorias, com tiers
// state: done | new | close (quase lá, ≥75% progresso) | locked | secret
// tier: bronze | silver | gold | diamond | mythic
const TROPHIES = [
  // === OFENSIVA (chama) === 6
  { id:"of1", cat:"streak", title:"Faísca",         sub:"3 dias seguidos",   state:"done", ic:"flame", tier:"bronze",  progress:100 },
  { id:"of2", cat:"streak", title:"Brasa",          sub:"7 dias seguidos",   state:"done", ic:"flame", tier:"silver",  progress:100 },
  { id:"of3", cat:"streak", title:"Fogueira",       sub:"14 dias seguidos",  state:"close",ic:"flame", tier:"gold",    progress:86, req:"faltam 2 dias" },
  { id:"of4", cat:"streak", title:"Incêndio",       sub:"30 dias seguidos",  state:"locked",ic:"flame",tier:"gold",    progress:40, req:"faltam 18 dias" },
  { id:"of5", cat:"streak", title:"Vulcão",         sub:"100 dias seguidos", state:"locked",ic:"flame",tier:"diamond", progress:12, req:"faltam 88 dias" },
  { id:"of6", cat:"streak", title:"Eterno",         sub:"365 dias seguidos", state:"locked",ic:"flame",tier:"mythic",  progress:3,  req:"faltam 353 dias" },

  // === MARATONA (missões totais) === 7
  { id:"mr1", cat:"marco",  title:"Primeiros passos",sub:"5 missões",        state:"done", ic:"trophy",tier:"bronze",  progress:100 },
  { id:"mr2", cat:"marco",  title:"Aquecido",       sub:"10 missões",        state:"done", ic:"trophy",tier:"bronze",  progress:100 },
  { id:"mr3", cat:"marco",  title:"Veterano",       sub:"25 missões",        state:"close",ic:"trophy",tier:"silver",  progress:88, req:"faltam 3" },
  { id:"mr4", cat:"marco",  title:"Centurião",      sub:"50 missões",        state:"locked",ic:"trophy",tier:"gold",    progress:44, req:"faltam 28" },
  { id:"mr5", cat:"marco",  title:"Maratonista",    sub:"100 missões",       state:"locked",ic:"trophy",tier:"gold",    progress:22, req:"faltam 78" },
  { id:"mr6", cat:"marco",  title:"Mestre",         sub:"250 missões",       state:"locked",ic:"trophy",tier:"diamond", progress:9,  req:"faltam 228" },
  { id:"mr7", cat:"marco",  title:"Lenda",          sub:"500 missões",       state:"locked",ic:"trophy",tier:"mythic",  progress:4,  req:"faltam 478" },

  // === DOMÍNIO (por módulo, com tiers) === 10
  { id:"dm1", cat:"dominio",title:"Mãos no teclado",sub:"Computador · iniciado",state:"done", ic:"grid",   tier:"bronze",  progress:100, colorOverride:"navy" },
  { id:"dm2", cat:"dominio",title:"Mestre do Excel",sub:"Computador · trilha", state:"done", ic:"grid",   tier:"silver",  progress:100, colorOverride:"navy" },
  { id:"dm3", cat:"dominio",title:"Tudo de Office", sub:"Computador · módulo", state:"locked",ic:"grid",   tier:"gold",    progress:33, req:"faltam 16 missões", colorOverride:"navy" },
  { id:"dm4", cat:"dominio",title:"Primeiro toque", sub:"Celular · iniciado",  state:"close",ic:"phone",  tier:"bronze",  progress:75, req:"falta 1 missão", colorOverride:"sky" },
  { id:"dm5", cat:"dominio",title:"Detetive de golpes",sub:"Segurança · iniciado",state:"new",  ic:"shield", tier:"silver",  progress:100, colorOverride:"sage" },
  { id:"dm6", cat:"dominio",title:"Guarda-costas",  sub:"Segurança · módulo",  state:"locked",ic:"shield", tier:"gold",    progress:54, req:"faltam 10 missões", colorOverride:"sage" },
  { id:"dm7", cat:"dominio",title:"Networker",      sub:"Mercado · iniciado",  state:"locked",ic:"market", tier:"bronze",  progress:0,  req:"faltam 5", colorOverride:"coral" },
  { id:"dm8", cat:"dominio",title:"Promovida",      sub:"Mercado · módulo",    state:"locked",ic:"market", tier:"gold",    progress:0,  req:"faltam 18", colorOverride:"coral" },
  { id:"dm9", cat:"dominio",title:"Multi-talento",  sub:"Todos os módulos iniciados",state:"close",ic:"layers",tier:"gold", progress:80, req:"falta Mercado", colorOverride:"coral" },
  { id:"dm10",cat:"dominio",title:"Pentadominio",   sub:"5 módulos dominados", state:"locked",ic:"star",   tier:"diamond", progress:18, req:"longo caminho", colorOverride:"coral" },

  // === INGLÊS (especial, cor própria) === 6
  { id:"in1", cat:"ingles", title:"First Words",    sub:"Inglês · A1 iniciado",state:"done", ic:"book", tier:"bronze", progress:100, colorOverride:"plum" },
  { id:"in2", cat:"ingles", title:"Small Talk",     sub:"Inglês · A2",         state:"close",ic:"chat", tier:"silver", progress:80, req:"faltam 3 missões", colorOverride:"plum" },
  { id:"in3", cat:"ingles", title:"Office English", sub:"Inglês · B1 negócios",state:"locked",ic:"book", tier:"gold",   progress:5,  req:"faltam 38", colorOverride:"plum" },
  { id:"in4", cat:"ingles", title:"Fluent Mind",    sub:"Pensar em inglês",    state:"locked",ic:"lamp", tier:"diamond",progress:0,  req:"longo caminho", colorOverride:"plum" },
  { id:"in5", cat:"ingles", title:"100 palavras",   sub:"Vocabulário ativo",   state:"done", ic:"book", tier:"bronze", progress:100, colorOverride:"plum" },
  { id:"in6", cat:"ingles", title:"1.000 palavras", sub:"Vocabulário ativo",   state:"locked",ic:"book", tier:"gold",   progress:18, req:"faltam 822", colorOverride:"plum" },

  // === COMBO & PERFEIÇÃO === 6
  { id:"cb1", cat:"combo",  title:"Sequência tripla",sub:"3 missões no mesmo dia",state:"done", ic:"bolt", tier:"bronze", progress:100 },
  { id:"cb2", cat:"combo",  title:"Penta-aprendiz", sub:"5 missões no mesmo dia",state:"close",ic:"bolt", tier:"silver", progress:80, req:"falta 1 missão hoje" },
  { id:"cb3", cat:"combo",  title:"Maratona do dia",sub:"10 missões no mesmo dia",state:"locked",ic:"bolt",tier:"gold",  progress:30, req:"melhor: 5/10" },
  { id:"cb4", cat:"combo",  title:"Sem rascunho",   sub:"Acertar de primeira",  state:"done", ic:"check", tier:"silver", progress:100 },
  { id:"cb5", cat:"combo",  title:"Tudo num dia",   sub:"4 módulos diferentes no mesmo dia",state:"locked",ic:"layers",tier:"gold",progress:75, req:"falta 1 módulo" },
  { id:"cb6", cat:"combo",  title:"Perfeição",      sub:"Trilha sem erro nenhum",state:"close",ic:"star", tier:"gold",  progress:83, req:"falta 1 missão limpa" },

  // === HORÁRIO (comportamento) === 5
  { id:"hr1", cat:"horario",title:"Madrugadora",    sub:"Antes das 7h",        state:"done", ic:"alert", tier:"bronze",  progress:100 },
  { id:"hr2", cat:"horario",title:"Coruja",         sub:"Depois das 22h",      state:"done", ic:"alert", tier:"bronze",  progress:100 },
  { id:"hr3", cat:"horario",title:"Hora do café",   sub:"5 missões antes das 9h",state:"close",ic:"alert",tier:"silver", progress:80, req:"falta 1" },
  { id:"hr4", cat:"horario",title:"Sábado é estudo",sub:"3 fins de semana seguidos",state:"locked",ic:"calendar",tier:"silver",progress:33,req:"faltam 2 sábados" },
  { id:"hr5", cat:"horario",title:"Meia-noite",     sub:"Manter ofensiva às 23:59",state:"new",  ic:"flame", tier:"gold",   progress:100 },

  // === MENTOR (Carlos Mendes) === 4
  { id:"mt1", cat:"mentor", title:"Primeira mensagem",sub:"Abriu a Caixa do Mentor",state:"done",ic:"chat",  tier:"bronze",  progress:100 },
  { id:"mt2", cat:"mentor", title:"Boa conversa",   sub:"Respondeu 5 mensagens",state:"locked",ic:"chat",  tier:"silver",  progress:40, req:"3 respondidas" },
  { id:"mt3", cat:"mentor", title:"Tarefa do chefe",sub:"Concluiu missão pedida pelo mentor",state:"close",ic:"check",tier:"silver",progress:90,req:"hoje mesmo" },
  { id:"mt4", cat:"mentor", title:"Apprentice",     sub:"10 tarefas do mentor",state:"locked",ic:"user",  tier:"gold",    progress:30, req:"faltam 7" },

  // === SECRETOS (variável + surpresa) === 6
  { id:"sc1", cat:"secret", title:"???",            sub:"Conquista oculta",    state:"secret",ic:"lock",  tier:"silver",  progress:0,  req:"faça uma missão num feriado" },
  { id:"sc2", cat:"secret", title:"Volta por cima", sub:"Voltou depois de 7+ dias", state:"locked",ic:"flame",tier:"gold",progress:0,  req:"oculto" },
  { id:"sc3", cat:"secret", title:"De ponta-cabeça",sub:"Concluiu missão no idioma reverso",state:"secret",ic:"lock",tier:"gold",progress:0,req:"???" },
  { id:"sc4", cat:"secret", title:"Caixa de ouro",  sub:"Mystery box rara",    state:"new",  ic:"trophy",tier:"gold",    progress:100 },
  { id:"sc5", cat:"secret", title:"7 caixas",       sub:"7 caixas do dia consecutivas",state:"close",ic:"download",tier:"silver",progress:71,req:"faltam 2 caixas" },
  { id:"sc6", cat:"secret", title:"???",            sub:"Conquista oculta",    state:"secret",ic:"lock",  tier:"diamond", progress:0,  req:"continue jogando" },
];

// recompensas possíveis da Caixa do Dia (mystery box · reforço intermitente)
// peso = chance relativa; cores = tier visual
const BOX_REWARDS = [
  { id:"xp40",   t:"+40 XP",       sub:"surpresa rápida",        ic:"star",    tier:"common",  weight:30 },
  { id:"xp80",   t:"+80 XP",       sub:"bom dia animado",        ic:"star",    tier:"common",  weight:20 },
  { id:"xp150",  t:"+150 XP",      sub:"caixa de prata",         ic:"star",    tier:"rare",    weight:14 },
  { id:"shield", t:"+1 Escudo",    sub:"protege 1 dia",          ic:"shield",  tier:"rare",    weight:12 },
  { id:"tip",    t:"Dica do dia",  sub:"micro-conhecimento",     ic:"lamp",    tier:"common",  weight:10 },
  { id:"x2",     t:"×2 XP por 1h", sub:"dobro nas próximas missões",ic:"bolt", tier:"epic",    weight:8 },
  { id:"trophy", t:"Troféu raro",  sub:"Caixa de ouro 🟡",       ic:"trophy",  tier:"legendary",weight:4 },
  { id:"streakup",t:"+1 Ofensiva", sub:"adianta a chama",        ic:"flame",   tier:"epic",    weight:2 },
];

// desafio da semana
const WEEK_CHALLENGE = {
  title: "Semana da Segurança",
  sub: "Cumpra 5 missões do módulo Segurança até domingo",
  reward: "Troféu Guarda-costas + 200 XP",
  progress: 3, total: 5,
  daysLeft: 3,
  color: "sage",
  ic: "shield",
};

// "quase lá" — troféus prestes a desbloquear (gancho de quase-recompensa)
const NEAR_TROPHIES = ["of3", "mr3", "cb2", "cb6", "in2", "dm9"];

// diário
const DIARY = [
  { id:"d1", date:"hoje", time:"08:42", title:"F4 alterna os modos de trava", body:"Não sabia que dava pra travar só a linha ($A1 vs A$1). Vou usar na planilha do mercado." },
  { id:"d2", date:"ontem", time:"19:15", title:"Golpe do filho no WhatsApp", body:"Regra que vou levar: número novo de pessoa conhecida = liga no número antigo antes de fazer qualquer PIX." },
  { id:"d3", date:"2 dias", time:"07:30", title:"PIX por chave aleatória", body:"Chave aleatória > telefone. Não exponho meu número." },
];

const SETTINGS = {
  fontStep: 1, // 0=17px, 1=19px, 2=21px
  highContrast: false,
  silent: false,
  audience: "mix", // jovem / adulto / mix
};

// nível de carreira
const CAREER = [
  { lvl:1, name:"Estagiário",     letter:"E", xp:0 },
  { lvl:2, name:"Assistente Jr",  letter:"A", xp:500 },
  { lvl:3, name:"Pleno",          letter:"P", xp:1500 },
  { lvl:4, name:"Analista",       letter:"A", xp:3000 },
  { lvl:5, name:"Sênior",         letter:"S", xp:5000 },
  { lvl:6, name:"Coordenador",    letter:"C", xp:8000 },
];

const USER = {
  name:"Maria Helena",
  initials:"MH",
  xp:1740, // entre Pleno e Analista
  streak:12,
  shield:1,
  level:3, levelName:"Pleno",
  nextLevelAt:3000,
  prevLevelAt:1500,
};

// ============ ICONS ============
const Ic = {
  computer: (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>,
  phone:    (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  market:   (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M3 7h18l-2 12H5L3 7Z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>,
  shield:   (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M12 3 4 6v5c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-3Z"/></svg>,
  english:  (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M5 5v14M5 5h10l-2 3 2 3H5"/></svg>,
  flame:    (p={}) => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 3c2 4 6 6 6 11a6 6 0 1 1-12 0c0-3 2-4 3-7 1.5 2 3 3 3 6 0-3 0-7 0-10Z"/></svg>,
  star:     (p={}) => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...p}><polygon points="12,2 15,9 22,10 17,15 18,22 12,18 6,22 7,15 2,10 9,9"/></svg>,
  trophy:   (p={}) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M8 4h8v3a4 4 0 0 1-8 0V4Z"/><path d="M5 5H3v2a3 3 0 0 0 3 3M19 5h2v2a3 3 0 0 1-3 3"/><path d="M10 14h4v3h-4z"/><path d="M8 20h8"/></svg>,
  home:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="m3 12 9-9 9 9M5 10v10h14V10"/></svg>,
  grid:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>,
  trail:    (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8v8M18 8v8M8 6h8M8 18h8" strokeDasharray="2 2"/></svg>,
  calendar: (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>,
  inbox:    (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M3 14h4l2 3h6l2-3h4M3 14V7l4-4h10l4 4v7"/></svg>,
  book:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2V5Z"/><path d="M8 7h7M8 11h5"/></svg>,
  user:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>,
  cog:      (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M5 5l2 2M17 17l2 2M2 12h3M19 12h3M5 19l2-2M17 7l2-2"/></svg>,
  check:    (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" {...p}><path d="m5 12 4 4L19 6"/></svg>,
  lock:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>,
  chev:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="m9 18 6-6-6-6"/></svg>,
  arrL:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="m15 6-6 6 6 6"/></svg>,
  plus:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  bolt:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M13 2 4 14h6l-1 8 10-12h-7l1-8Z"/></svg>,
  chat:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6Z"/></svg>,
  lamp:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M9 18h6M10 21h4M8 13a4 4 0 1 1 8 0c0 2-2 3-2 5h-4c0-2-2-3-2-5Z"/></svg>,
  alert:    (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>,
  download: (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M12 3v12m0 0 5-5m-5 5-5-5M4 21h16"/></svg>,
  font:     (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M3 20 9 4l6 16M5 14h8"/><path d="M17 20l2-6 2 6M18 18h2"/></svg>,
  contrast: (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18Z" fill="currentColor"/></svg>,
  pen:      (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M14 4l6 6L9 21H3v-6L14 4Z"/></svg>,
  layers:   (p={}) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5M3 17l9 5 9-5"/></svg>,
};

function moduleIcon(id, p={}){
  return ({ pc:Ic.computer, cel:Ic.phone, merc:Ic.market, seg:Ic.shield, ing:Ic.english })[id](p);
}

window.PROTO = { MODULES, TRILHAS, MISSIONS_T2, MISSION_CONTENT, MENTOR_INBOX, HEATMAP, TROPHIES, DIARY, CAREER, USER, Ic, moduleIcon, BOX_REWARDS, WEEK_CHALLENGE, NEAR_TROPHIES };
