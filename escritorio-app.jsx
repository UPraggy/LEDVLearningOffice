import React, { useState, useEffect, useRef } from 'react';
import {
  Home, Map as MapIcon, Inbox, Briefcase, User, Flame, Award, ChevronRight, ChevronLeft,
  CheckCircle2, Lock, Clock, FileText, Sheet, FileType, Linkedin, Sparkles,
  ArrowRight, TrendingUp, Coffee, Download, Upload, BookOpen, Target,
  Lightbulb, Smartphone, Monitor, Send, Paperclip, MessageCircle, Banknote,
  Shield, Heart, Camera, Video, Cloud, Settings, AlertTriangle, KeyRound,
  Save, FolderOpen, Layers
} from 'lucide-react';

// ============ DESIGN TOKENS ============
const c = {
  bg: '#F5EFE6', surface: '#FBF7F0', ink: '#1B2A4E', inkSoft: '#3D4A6B',
  coral: '#E55934', forest: '#3D5A3D', mustard: '#D4A574',
  text: '#1A1A1A', textSoft: '#5A5A52', border: '#E0D9C9', borderSoft: '#EBE5D6',
  mobile: '#5B7C99', desktop: '#1B2A4E',
};

// ============ STORAGE HOOK (localStorage com fallback graceful) ============
function useStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = typeof window !== 'undefined' && window.localStorage?.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });
  const setStored = (newVal) => {
    const final = typeof newVal === 'function' ? newVal(value) : newVal;
    setValue(final);
    try {
      window.localStorage?.setItem(key, JSON.stringify(final));
    } catch {/* silently fallback to in-memory */}
  };
  return [value, setStored];
}

// ============ INITIAL DATA ============
const TRILHAS = [
  // === COMPUTADOR ===
  { id: 'pc-fund', vertente: 'computador', nome: 'Fundamentos do Computador', desc: 'Arquivos, pastas, atalhos, ergonomia', total: 8, cor: c.forest, icone: Settings, ordem: 1 },
  { id: 'pc-word', vertente: 'computador', nome: 'Word & Google Docs', desc: 'Documentos profissionais de verdade', total: 10, cor: c.ink, icone: FileText, ordem: 2 },
  { id: 'pc-excel', vertente: 'computador', nome: 'Excel & Sheets', desc: 'Planilhas que se calculam sozinhas', total: 14, cor: c.coral, icone: Sheet, ordem: 3 },
  { id: 'pc-cloud', vertente: 'computador', nome: 'Workspace na Nuvem', desc: 'Drive, Calendar, colaboração ao vivo', total: 9, cor: c.ink, icone: Cloud, ordem: 4 },
  { id: 'pc-meet', vertente: 'computador', nome: 'Reuniões Online', desc: 'Meet, Zoom, Teams sem medo', total: 7, cor: c.ink, icone: Video, ordem: 5 },
  { id: 'pc-job', vertente: 'computador', nome: 'LinkedIn & Currículo', desc: 'Perfil que recrutador acha', total: 8, cor: c.ink, icone: Linkedin, ordem: 6 },
  { id: 'pc-ia', vertente: 'computador', nome: 'IA pro Trabalho', desc: 'ChatGPT, Claude e Gemini no dia a dia', total: 6, cor: c.ink, icone: Sparkles, ordem: 7 },
  // === CELULAR ===
  { id: 'mob-dom', vertente: 'celular', nome: 'Domínio do Celular', desc: 'Configurações, atalhos, organização', total: 8, cor: c.forest, icone: Smartphone, ordem: 1 },
  { id: 'mob-wpp', vertente: 'celular', nome: 'WhatsApp Profissional', desc: 'Grupos, etiqueta, recursos avançados', total: 9, cor: c.mobile, icone: MessageCircle, ordem: 2 },
  { id: 'mob-pix', vertente: 'celular', nome: 'Banco e PIX com Segurança', desc: 'Pagar, receber e identificar golpes', total: 10, cor: c.coral, icone: Banknote, ordem: 3 },
  { id: 'mob-gov', vertente: 'celular', nome: 'Gov.br e Serviços Públicos', desc: 'Conta nível ouro, assinar, comprovantes', total: 8, cor: c.mobile, icone: KeyRound, ordem: 4 },
  { id: 'mob-saude', vertente: 'celular', nome: 'Saúde Digital', desc: 'SUS, vacinas, exames, telemedicina', total: 6, cor: c.mobile, icone: Heart, ordem: 5 },
  { id: 'mob-loc', vertente: 'celular', nome: 'Maps, Uber e Mobilidade', desc: 'Rotas, transporte, evitar problemas', total: 6, cor: c.mobile, icone: MapIcon, ordem: 6 },
  { id: 'mob-fotos', vertente: 'celular', nome: 'Fotos, Backup e Memórias', desc: 'Organizar, salvar, nunca mais perder', total: 7, cor: c.mobile, icone: Camera, ordem: 7 },
  // === AMBOS ===
  { id: 'amb-seg', vertente: 'ambos', nome: 'Segurança Digital', desc: 'Senhas, golpes, 2FA — vale pra tudo', total: 9, cor: c.coral, icone: Shield, ordem: 1 },
  { id: 'amb-com', vertente: 'ambos', nome: 'Comunicação Digital', desc: 'E-mail, etiqueta, escrita clara', total: 8, cor: c.ink, icone: Send, ordem: 2 },
  { id: 'amb-final', vertente: 'ambos', nome: 'Projeto Final', desc: 'Uma semana simulada usando tudo', total: 5, cor: c.mustard, icone: Layers, ordem: 3 },
];

// Detailed missions for two example trails
const MISSOES_EXCEL = [
  { id: 1, titulo: 'Conhecendo a planilha', desc: 'Interface, células, linhas, colunas', tempo: 8, xp: 30 },
  { id: 2, titulo: 'Digitando seus primeiros dados', desc: 'Como entrar dados e corrigir', tempo: 6, xp: 30 },
  { id: 3, titulo: 'Formatando células', desc: 'Negrito, alinhamento, fonte', tempo: 10, xp: 40 },
  { id: 4, titulo: 'Bordas, cores e tabelas', desc: 'Planilha bonita e legível', tempo: 7, xp: 40 },
  { id: 5, titulo: 'Sua primeira fórmula: SOMA automática', desc: 'O segredo das planilhas vivas', tempo: 15, xp: 60 },
  { id: 6, titulo: 'Subtração, multiplicação e divisão', desc: 'Outras operações essenciais', tempo: 10, xp: 50 },
  { id: 7, titulo: 'MÉDIA, MÁXIMO e MÍNIMO', desc: 'Funções de análise rápida', tempo: 12, xp: 60 },
  { id: 8, titulo: 'Formatação de números: R$, % e datas', desc: 'Deixe os números legíveis', tempo: 9, xp: 50 },
  { id: 9, titulo: 'Filtros e classificação', desc: 'Achar o que importa numa lista', tempo: 11, xp: 60 },
  { id: 10, titulo: 'Congelar painéis', desc: 'Cabeçalho visível ao rolar', tempo: 5, xp: 30 },
  { id: 11, titulo: 'Seu primeiro gráfico', desc: 'Números em visual claro', tempo: 12, xp: 70 },
  { id: 12, titulo: 'PROCV: o queridinho do mercado', desc: 'Buscar dados entre tabelas', tempo: 18, xp: 100 },
  { id: 13, titulo: 'Salvar, exportar e compartilhar', desc: 'XLSX, PDF e links', tempo: 8, xp: 40 },
  { id: 14, titulo: 'Projeto: Controle Mensal Completo', desc: 'Use tudo numa planilha real', tempo: 30, xp: 150 },
];

const MISSOES_PIX = [
  { id: 1, titulo: 'O que é PIX, na real', desc: 'Como funciona e por que é diferente', tempo: 6, xp: 30 },
  { id: 2, titulo: 'As 4 chaves PIX e qual escolher', desc: 'CPF, telefone, e-mail, aleatória', tempo: 8, xp: 40 },
  { id: 3, titulo: 'Cadastrando sua primeira chave', desc: 'Passo a passo no seu banco', tempo: 10, xp: 50 },
  { id: 4, titulo: 'Fazendo um PIX sem medo', desc: 'Confirmar dados antes de pagar', tempo: 8, xp: 50 },
  { id: 5, titulo: 'Recebendo PIX (e dando o comprovante)', desc: 'QR Code, copia e cola, comprovante', tempo: 9, xp: 50 },
  { id: 6, titulo: 'Limites diários: por que existem', desc: 'Configurar limite noturno e proteção', tempo: 8, xp: 60 },
  { id: 7, titulo: 'Os 5 golpes de PIX mais comuns', desc: 'Como identificar antes de cair', tempo: 12, xp: 80 },
  { id: 8, titulo: 'Bloqueio cautelar: quando e como pedir', desc: 'O que fazer se caiu num golpe', tempo: 7, xp: 50 },
  { id: 9, titulo: 'PIX agendado e recorrente', desc: 'Contas que pagam sozinhas', tempo: 10, xp: 60 },
  { id: 10, titulo: 'Projeto: Configurar sua segurança PIX', desc: 'Limite, lista de contatos, alertas', tempo: 15, xp: 100 },
];

// Rich written content for the SOMA mission (computer)
const CONTEUDO_SOMA = {
  trilhaId: 'pc-excel', numero: 5, titulo: 'Sua primeira fórmula: SOMA automática',
  tempoTotal: 15, xp: 60, vertente: 'computador',
  aula: {
    gancho: 'Você já fez uma planilha somando despesas na calculadora, anotou na célula… e aí mudou um valor? Teve que refazer toda a conta na mão. Existe um jeito de nunca mais passar por isso.',
    conceito: {
      titulo: 'O que é uma fórmula',
      texto: 'Uma fórmula é uma instrução que você dá pra planilha calcular sozinha. Em vez de você escrever o resultado, escreve o cálculo — e a planilha resolve. Quando algum valor muda, ela recalcula sozinha.',
    },
    estrutura: {
      titulo: 'Como uma fórmula é escrita',
      partes: [
        { simbolo: '=', desc: 'Sempre começa com o sinal de igual. É como dizer "ó, vem cálculo aí".' },
        { simbolo: 'SOMA', desc: 'O nome da operação. SOMA junta vários números.' },
        { simbolo: '( )', desc: 'Entre parênteses, você coloca o que vai ser somado.' },
        { simbolo: 'A1:A5', desc: 'Os dois pontos significam "do A1 até o A5". Soma tudo nesse intervalo.' },
      ],
    },
    exemplo: {
      titulo: 'Veja na prática',
      celulas: [
        { ref: 'A1', valor: 'R$ 100' }, { ref: 'A2', valor: 'R$ 250' },
        { ref: 'A3', valor: 'R$ 80' }, { ref: 'A4', valor: 'R$ 320' },
        { ref: 'A5', valor: 'R$ 150' },
      ],
      formula: '=SOMA(A1:A5)',
      resultado: 'R$ 900',
      comentario: 'Se você mudar o A1 pra R$ 500, o resultado vira R$ 1.300 automaticamente. Sem refazer conta.',
    },
    vocabulario: [
      { palavra: 'Célula', def: 'Cada quadradinho da planilha. Recebe um nome tipo A1, B3 (letra da coluna + número da linha).' },
      { palavra: 'Intervalo', def: 'Um conjunto de células seguidas, escrito assim: A1:A5 (do A1 até o A5).' },
      { palavra: 'Fórmula', def: 'Instrução que começa com = e faz a planilha calcular sozinha.' },
    ],
    chave: [
      'Toda fórmula começa com =',
      'SOMA(intervalo) junta vários números de uma vez',
      'Mudou um valor? O total atualiza sozinho',
    ],
    porque: 'Em quase toda vaga administrativa, a pessoa precisa montar planilhas que somam despesas, vendas, horas ou estoque. Dominar SOMA já te coloca na frente de quem trabalha "no braço" com calculadora.',
  },
  pratica: {
    instrucao: 'Abra o Excel ou Google Sheets agora no computador. Vamos fazer juntos.',
    passos: [
      'Crie uma nova planilha em branco',
      'Na coluna A, digite 5 valores (ex: 100, 250, 80, 320, 150). Aperte Enter entre eles.',
      'Clique na célula A6 (logo abaixo do último número)',
      'Digite exatamente: =SOMA(',
      'Com o mouse, arraste do A1 até o A5 (vai pintar de azul)',
      'Feche o parêntese: ) e aperte Enter',
      'Pronto! A célula A6 mostra 900',
      'Teste a mágica: mude o valor de A1 pra 500. O total atualiza sozinho.',
    ],
  },
  desafio: {
    cenario: 'Crie uma planilha de despesas do mês de junho.',
    requisitos: [
      'Coluna A com 6 ou mais categorias (Mercado, Luz, Internet, Aluguel, Transporte, Lazer)',
      'Coluna B com os valores de cada uma',
      'Na linha 8, calcular o total usando =SOMA',
      'Mudar pelo menos um valor depois de pronto pra confirmar que atualiza',
    ],
    dica: 'Salve o arquivo como "despesas-junho.xlsx" — assim já treina organização.',
  },
  validacao: [
    'Criei 6 ou mais categorias de despesa',
    'Cada categoria tem seu valor preenchido',
    'Usei a fórmula =SOMA( ) pra calcular o total',
    'Mudei um valor e o total atualizou sozinho',
    'Salvei o arquivo com nome descritivo',
  ],
};

// Rich written content for PIX mission (mobile)
const CONTEUDO_PIX_GOLPES = {
  trilhaId: 'mob-pix', numero: 7, titulo: 'Os 5 golpes de PIX mais comuns',
  tempoTotal: 12, xp: 80, vertente: 'celular',
  aula: {
    gancho: 'PIX é instantâneo — bom pra quem paga, ótimo pra quem aplica golpe. Quem conhece os 5 padrões abaixo dificilmente cai. Quem não conhece, infelizmente, costuma cair pelo menos uma vez.',
    conceito: {
      titulo: 'Por que o PIX é o queridinho dos golpistas',
      texto: 'Diferente de uma transferência TED, o PIX cai na hora. Não dá tempo de cancelar. E o dinheiro pode ser sacado em segundos. Por isso, o trabalho dos golpistas hoje é te convencer a apertar "Pagar" sem pensar.',
    },
    estrutura: {
      titulo: 'Os 5 padrões pra reconhecer',
      partes: [
        { simbolo: '1', desc: 'Golpe do parente: alguém te chama no WhatsApp dizendo que é seu filho/neto e mudou o número. Pede um PIX urgente.' },
        { simbolo: '2', desc: 'Golpe do falso boleto: você compra algo, recebe o PIX/boleto, paga — mas a chave era do golpista, não da loja.' },
        { simbolo: '3', desc: 'Golpe do estorno: alguém liga dizendo que fez um PIX errado pra você e pede pra "devolver". Você devolve, depois descobre que o PIX original foi cancelado.' },
        { simbolo: '4', desc: 'Golpe da central falsa: ligação se passando pelo banco pedindo pra você fazer um PIX pra "uma conta segura". O banco nunca pede isso.' },
        { simbolo: '5', desc: 'Golpe do QR Code trocado: você escaneia um QR de pagamento, mas o golpista trocou o adesivo. Confira sempre nome e valor antes de pagar.' },
      ],
    },
    exemplo: {
      titulo: 'Como uma conversa de golpe geralmente começa',
      celulas: [
        { ref: '14:02', valor: '"Mãe, perdi meu celular"' },
        { ref: '14:02', valor: '"Salva esse número novo"' },
        { ref: '14:03', valor: '"Mãe, urgente, preciso de R$ 300"' },
        { ref: '14:03', valor: '"Faz PIX pra essa chave aqui"' },
      ],
      formula: 'Sinal vermelho: urgência + número novo + valor exato',
      resultado: 'Pare. Ligue pro número antigo do seu filho/filha antes de qualquer coisa.',
      comentario: 'Golpe sempre tem pressa. Quem te ama de verdade espera você confirmar.',
    },
    vocabulario: [
      { palavra: 'Engenharia social', def: 'Quando o golpe não tenta invadir seu celular, e sim te convencer a fazer algo. Mais comum que hack de verdade.' },
      { palavra: 'Bloqueio cautelar', def: 'Pedido formal ao banco pra tentar reverter um PIX feito por engano ou golpe. Tem até 80 dias pra pedir.' },
      { palavra: 'MED', def: 'Mecanismo Especial de Devolução. É o nome técnico do bloqueio cautelar do PIX.' },
    ],
    chave: [
      'Golpe sempre tem pressa. Pressa = pare, respire, confirme.',
      'Banco nunca pede pra você fazer PIX pra "conta segura"',
      'Confira nome do recebedor antes de apertar "Pagar" — sempre',
    ],
    porque: 'Em 2024, mais de R$ 4 bilhões em PIX foram alvos de fraude no Brasil. Quem aprende a reconhecer os 5 padrões acima não cai mais. É uma das aulas mais importantes do app inteiro.',
  },
  pratica: {
    instrucao: 'Pega seu celular agora. Vamos revisar suas configurações de segurança.',
    passos: [
      'Abra o app do seu banco',
      'Procure "Configurações" ou "Segurança" no menu',
      'Procure "Limite PIX" — defina um limite diário compatível com seu uso (ex: R$ 500)',
      'Procure "Limite noturno" — defina valor menor (ex: R$ 200) entre 20h e 6h',
      'Habilite "Confirmação por biometria" pra PIX acima de qualquer valor',
      'No WhatsApp, ative a verificação em duas etapas em Configurações > Conta > Confirmação em duas etapas',
      'Combine uma "palavra-código" com seus familiares pra usar caso desconfiem de pedido por mensagem',
    ],
  },
  desafio: {
    cenario: 'Aplique pelo menos 4 das configurações acima e ensine uma pessoa da família (filho, neto, irmão) a fazer o mesmo no celular dela.',
    requisitos: [
      'Defini um limite PIX diário no meu banco',
      'Defini um limite noturno menor',
      'Ativei verificação em duas etapas no WhatsApp',
      'Combinei uma palavra-código com pelo menos 1 familiar',
      'Bônus: ensinei outra pessoa a fazer o mesmo',
    ],
    dica: 'Conta na próxima conversa de família que você sabe identificar golpes agora. Quem não conhece se sente vulnerável; quem ensina vira referência.',
  },
  validacao: [
    'Configurei um limite PIX diário no meu banco',
    'Configurei um limite noturno menor',
    'Ativei verificação em duas etapas no WhatsApp',
    'Combinei uma palavra-código com pelo menos um familiar',
    'Sei reconhecer os 5 tipos de golpe se acontecer comigo',
  ],
};

const INITIAL_PROGRESS = {
  user: { nome: 'Maria', xp: 1240, nivelNum: 2, streak: 7, ultimaVisita: new Date().toISOString().split('T')[0] },
  missoesCompletas: ['pc-fund-1','pc-fund-2','pc-fund-3','pc-fund-4','pc-fund-5','pc-fund-6','pc-fund-7','pc-fund-8','pc-word-1','pc-word-2','pc-word-3','pc-word-4','pc-word-5','pc-word-6','pc-word-7','pc-excel-1','pc-excel-2','pc-excel-3','pc-excel-4'],
  selos: ['primeira-missao','streak-7','comunicador','calculista'],
  preferencias: { vertenteFiltro: 'todas' },
};

const NIVEIS = ['Estagiário', 'Assistente Júnior', 'Assistente Pleno', 'Analista', 'Analista Sênior', 'Coordenador'];
const XP_POR_NIVEL = [0, 600, 2000, 4500, 8000, 13000];

// ============ STYLES ============
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    .font-display { font-family: 'Fraunces', Georgia, serif; font-optical-sizing: auto; }
    .font-body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
    .paper-bg {
      background-color: ${c.bg};
      background-image: radial-gradient(circle at 20% 30%, rgba(229,89,52,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(27,42,78,0.03) 0%, transparent 50%);
    }
    .grain { position: relative; }
    .grain::after {
      content: ''; position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity: 0.6; pointer-events: none; mix-blend-mode: multiply;
    }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    .fade-up { animation: fadeUp 0.4s ease-out both; }
    @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(229,89,52,0.4); } 50% { box-shadow: 0 0 0 8px rgba(229,89,52,0); } }
    .pulse-coral { animation: pulseGlow 2.5s ease-in-out infinite; }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: ${c.border}; border-radius: 4px; }
  `}</style>
);

// ============ SHARED COMPONENTS ============
const VertenteBadge = ({ vertente, size = 'sm' }) => {
  const isMob = vertente === 'celular';
  const isAmbos = vertente === 'ambos';
  const Icon = isAmbos ? Layers : isMob ? Smartphone : Monitor;
  const label = isAmbos ? 'Ambos' : isMob ? 'Celular' : 'Computador';
  const color = isAmbos ? c.mustard : isMob ? c.mobile : c.desktop;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded font-body font-semibold uppercase tracking-wider ${size === 'sm' ? 'text-[10px]' : 'text-xs'}`}
          style={{ backgroundColor: `${color}15`, color }}>
      <Icon size={size === 'sm' ? 11 : 13} /> {label}
    </span>
  );
};

const CareerStamp = ({ level, num }) => (
  <div className="relative inline-flex flex-col items-center justify-center px-4 py-2 border-2 border-dashed rounded-md"
       style={{ borderColor: c.coral, color: c.coral, transform: 'rotate(-2deg)' }}>
    <span className="font-display font-bold text-[10px] tracking-[0.2em] uppercase opacity-70">Nível {num}</span>
    <span className="font-display font-semibold text-sm leading-tight">{level}</span>
  </div>
);

const ProgressBar = ({ value, max, color = c.ink, height = 8 }) => (
  <div className="w-full rounded-full overflow-hidden" style={{ backgroundColor: c.borderSoft, height }}>
    <div className="h-full rounded-full transition-all duration-700"
         style={{ width: `${Math.min(100, (value / max) * 100)}%`, backgroundColor: color }} />
  </div>
);

const BackButton = ({ label, onClick }) => (
  <button onClick={onClick}
          className="flex items-center gap-2 font-body text-sm font-semibold mb-6 hover:opacity-70 transition-opacity"
          style={{ color: c.inkSoft }}>
    <ChevronLeft size={18} /> {label}
  </button>
);

// ============ HOME ============
const HomeScreen = ({ progress, onNav }) => {
  const u = progress.user;
  const proxNivel = NIVEIS[u.nivelNum] || 'Coordenador';
  const xpProx = XP_POR_NIVEL[u.nivelNum] || 13000;
  const xpAnt = XP_POR_NIVEL[u.nivelNum - 1] || 0;
  return (
    <div className="space-y-6 fade-up">
      <div className="grain rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        <p className="font-body text-sm uppercase tracking-[0.18em]" style={{ color: c.textSoft }}>Bom dia</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-1" style={{ color: c.text }}>{u.nome}.</h1>
        <p className="font-body text-base md:text-lg mt-3 max-w-md" style={{ color: c.inkSoft }}>
          Suas duas frentes hoje: <span className="font-semibold" style={{ color: c.desktop }}>Excel</span> no computador
          e <span className="font-semibold" style={{ color: c.mobile }}>segurança no PIX</span> no celular.
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <CareerStamp level={NIVEIS[u.nivelNum - 1]} num={u.nivelNum} />
          <div className="flex items-center gap-2 px-3 py-2 rounded-full" style={{ backgroundColor: '#FFF1E5' }}>
            <Flame size={16} style={{ color: c.coral }} fill={c.coral} />
            <span className="font-body font-semibold text-sm" style={{ color: c.coral }}>{u.streak} dias seguidos</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-baseline justify-between mb-2">
            <span className="font-body text-xs uppercase tracking-wider" style={{ color: c.textSoft }}>Progresso até {proxNivel}</span>
            <span className="font-display text-base font-semibold" style={{ color: c.ink }}>{u.xp} / {xpProx} xp</span>
          </div>
          <ProgressBar value={u.xp - xpAnt} max={xpProx - xpAnt} color={c.coral} height={10} />
        </div>
      </div>

      <div>
        <p className="font-body text-xs uppercase tracking-[0.2em] mb-3" style={{ color: c.textSoft }}>✦  Missões de hoje</p>
        <div className="grid md:grid-cols-2 gap-3">
          <button onClick={() => onNav('trilha:pc-excel:missao:5')}
                  className="text-left grain rounded-2xl p-5 md:p-6 border-2 transition-all hover:translate-y-[-2px]"
                  style={{ backgroundColor: c.ink, borderColor: c.ink, color: c.surface }}>
            <div className="flex items-center gap-2 mb-3">
              <Monitor size={14} className="opacity-70" />
              <p className="font-body text-xs uppercase tracking-wider opacity-70">Computador • Excel</p>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-medium leading-tight">Sua primeira fórmula: SOMA automática</h3>
            <div className="flex items-center gap-3 mt-4 text-xs opacity-80">
              <span className="flex items-center gap-1"><Clock size={12} /> 15 min</span>
              <span className="flex items-center gap-1"><Sparkles size={12} /> +60 xp</span>
            </div>
          </button>
          <button onClick={() => onNav('trilha:mob-pix:missao:7')}
                  className="text-left grain rounded-2xl p-5 md:p-6 border-2 transition-all hover:translate-y-[-2px]"
                  style={{ backgroundColor: c.mobile, borderColor: c.mobile, color: c.surface }}>
            <div className="flex items-center gap-2 mb-3">
              <Smartphone size={14} className="opacity-70" />
              <p className="font-body text-xs uppercase tracking-wider opacity-70">Celular • PIX</p>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-medium leading-tight">Os 5 golpes de PIX mais comuns</h3>
            <div className="flex items-center gap-3 mt-4 text-xs opacity-80">
              <span className="flex items-center gap-1"><Clock size={12} /> 12 min</span>
              <span className="flex items-center gap-1"><Sparkles size={12} /> +80 xp</span>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {[
          { icon: <CheckCircle2 size={20} />, label: 'Missões', value: progress.missoesCompletas.length },
          { icon: <Award size={20} />, label: 'Selos', value: progress.selos.length },
          { icon: <TrendingUp size={20} />, label: 'XP total', value: u.xp },
        ].map((s, i) => (
          <div key={i} className="rounded-xl p-4 border" style={{ backgroundColor: c.surface, borderColor: c.border }}>
            <div style={{ color: c.coral }}>{s.icon}</div>
            <p className="font-display text-2xl md:text-3xl font-semibold mt-2" style={{ color: c.text }}>{s.value}</p>
            <p className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: c.textSoft }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ TRILHAS WITH VERTENTE FILTER ============
const TrilhasScreen = ({ progress, setProgress, onOpenTrilha }) => {
  const filtro = progress.preferencias.vertenteFiltro;
  const setFiltro = (v) => setProgress(p => ({ ...p, preferencias: { ...p.preferencias, vertenteFiltro: v } }));

  const filtroOpts = [
    { id: 'todas', label: 'Tudo', icon: Layers },
    { id: 'computador', label: 'Computador', icon: Monitor },
    { id: 'celular', label: 'Celular', icon: Smartphone },
  ];

  const trilhasVisiveis = TRILHAS.filter(t => {
    if (filtro === 'todas') return true;
    if (filtro === 'computador') return t.vertente === 'computador' || t.vertente === 'ambos';
    if (filtro === 'celular') return t.vertente === 'celular' || t.vertente === 'ambos';
  });

  const getMissoesCompletas = (trilhaId) => progress.missoesCompletas.filter(m => m.startsWith(trilhaId + '-')).length;
  const getTotalTrilha = (trilhaId) => TRILHAS.find(t => t.id === trilhaId)?.total || 0;

  return (
    <div className="space-y-6 fade-up">
      <div>
        <p className="font-body text-xs uppercase tracking-[0.2em]" style={{ color: c.textSoft }}>Sua jornada</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-1" style={{ color: c.text }}>Trilhas</h1>
        <p className="font-body text-base mt-2 max-w-xl" style={{ color: c.inkSoft }}>
          Você pode estudar em duas frentes: <strong>computador</strong> (escritório, criação, trabalho) e <strong>celular</strong> (vida digital, serviços, segurança).
        </p>
      </div>

      {/* Vertente filter */}
      <div className="flex gap-2 p-1 rounded-full overflow-x-auto" style={{ backgroundColor: c.surface, border: `1px solid ${c.border}` }}>
        {filtroOpts.map(opt => {
          const Icon = opt.icon;
          const active = filtro === opt.id;
          return (
            <button key={opt.id} onClick={() => setFiltro(opt.id)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full font-body text-sm transition-all flex-1 justify-center whitespace-nowrap"
                    style={{
                      backgroundColor: active ? c.ink : 'transparent',
                      color: active ? c.surface : c.inkSoft,
                      fontWeight: active ? 600 : 500,
                    }}>
              <Icon size={14} /> {opt.label}
            </button>
          );
        })}
      </div>

      {/* Group by vertente if "todas" */}
      {filtro === 'todas' ? (
        <>
          {['computador', 'celular', 'ambos'].map(v => {
            const lista = trilhasVisiveis.filter(t => t.vertente === v);
            if (lista.length === 0) return null;
            const titulo = v === 'computador' ? 'Computador' : v === 'celular' ? 'Celular' : 'Computador + Celular';
            const Icon = v === 'computador' ? Monitor : v === 'celular' ? Smartphone : Layers;
            return (
              <div key={v} className="space-y-3">
                <div className="flex items-center gap-2 mt-2">
                  <Icon size={16} style={{ color: c.inkSoft }} />
                  <p className="font-body text-xs uppercase tracking-[0.2em] font-bold" style={{ color: c.inkSoft }}>{titulo}</p>
                </div>
                {lista.map(t => <TrilhaCard key={t.id} trilha={t} feito={getMissoesCompletas(t.id)} onOpen={onOpenTrilha} />)}
              </div>
            );
          })}
        </>
      ) : (
        <div className="space-y-3">
          {trilhasVisiveis.map(t => <TrilhaCard key={t.id} trilha={t} feito={getMissoesCompletas(t.id)} onOpen={onOpenTrilha} />)}
        </div>
      )}
    </div>
  );
};

const TrilhaCard = ({ trilha, feito, onOpen }) => {
  const completa = feito >= trilha.total;
  const bloqueada = false; // simplified
  const Icon = trilha.icone;
  return (
    <button onClick={() => onOpen(trilha.id)}
            className="w-full text-left rounded-2xl border overflow-hidden transition-all hover:translate-y-[-1px]"
            style={{ backgroundColor: c.surface, borderColor: c.border }}>
      <div className="p-5 md:p-6 flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center"
             style={{ backgroundColor: completa ? c.forest : trilha.cor, color: c.surface }}>
          {completa ? <CheckCircle2 size={22} /> : <Icon size={22} />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-display text-xl md:text-2xl font-medium" style={{ color: c.text }}>{trilha.nome}</h3>
            <VertenteBadge vertente={trilha.vertente} />
          </div>
          <p className="font-body text-sm md:text-base mt-1" style={{ color: c.textSoft }}>{trilha.desc}</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1"><ProgressBar value={feito} max={trilha.total} color={completa ? c.forest : trilha.cor} height={6} /></div>
            <span className="font-body text-xs font-semibold whitespace-nowrap" style={{ color: c.inkSoft }}>{feito}/{trilha.total}</span>
          </div>
        </div>
        <ChevronRight size={20} style={{ color: c.inkSoft }} className="flex-shrink-0 mt-2" />
      </div>
    </button>
  );
};

// ============ TRILHA DETAIL ============
const TrilhaDetailScreen = ({ trilhaId, progress, onBack, onOpenMissao }) => {
  const trilha = TRILHAS.find(t => t.id === trilhaId);
  if (!trilha) return null;
  const missoes = trilhaId === 'pc-excel' ? MISSOES_EXCEL : trilhaId === 'mob-pix' ? MISSOES_PIX : [];
  const isFeita = (id) => progress.missoesCompletas.includes(`${trilhaId}-${id}`);
  const feitas = missoes.filter(m => isFeita(m.id)).length;

  return (
    <div className="fade-up">
      <BackButton label="Voltar pras trilhas" onClick={onBack} />
      <div className="grain rounded-2xl p-6 md:p-8 border mb-6" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        <div className="flex items-center gap-2 mb-2">
          <VertenteBadge vertente={trilha.vertente} size="md" />
          <p className="font-body text-xs uppercase tracking-[0.2em]" style={{ color: c.coral }}>
            {feitas} de {trilha.total} missões
          </p>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-medium mt-2" style={{ color: c.text }}>{trilha.nome}</h1>
        <p className="font-body text-base md:text-lg mt-3 max-w-xl" style={{ color: c.inkSoft }}>{trilha.desc}</p>
        <div className="mt-5"><ProgressBar value={feitas} max={trilha.total} color={c.coral} height={10} /></div>
      </div>

      <p className="font-body text-xs uppercase tracking-[0.2em] mb-3" style={{ color: c.textSoft }}>Missões</p>
      {missoes.length === 0 ? (
        <div className="rounded-2xl border p-8 text-center" style={{ backgroundColor: c.surface, borderColor: c.border }}>
          <p className="font-display text-lg" style={{ color: c.text }}>Conteúdo dessa trilha em produção</p>
          <p className="font-body text-sm mt-2" style={{ color: c.textSoft }}>No protótipo, só Excel e PIX têm missões detalhadas pra demonstrar o formato.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {missoes.map((m, i) => {
            const completa = isFeita(m.id);
            const proximaDisponivel = i === 0 || isFeita(missoes[i-1]?.id);
            const atual = !completa && proximaDisponivel;
            const bloqueada = !completa && !proximaDisponivel;
            return (
              <button key={m.id} onClick={() => !bloqueada && onOpenMissao(m.id)} disabled={bloqueada}
                      className={`w-full text-left rounded-xl border p-4 md:p-5 flex items-center gap-4 transition-all disabled:cursor-not-allowed ${atual ? 'border-2' : ''}`}
                      style={{
                        backgroundColor: bloqueada ? c.borderSoft : c.surface,
                        borderColor: atual ? c.coral : c.border,
                        opacity: bloqueada ? 0.5 : 1,
                      }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                     style={{
                       backgroundColor: completa ? c.forest : atual ? c.coral : bloqueada ? '#A8A29A' : c.borderSoft,
                       color: completa || atual ? c.surface : c.inkSoft,
                     }}>
                  {bloqueada ? <Lock size={14} /> : completa ? <CheckCircle2 size={18} /> : m.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display text-base md:text-lg font-semibold leading-tight" style={{ color: c.text }}>{m.titulo}</h3>
                    {atual && <span className="font-body text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: c.coral, color: '#fff' }}>Atual</span>}
                  </div>
                  <p className="font-body text-xs md:text-sm mt-1" style={{ color: c.textSoft }}>{m.desc}</p>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="font-body text-xs flex items-center gap-1" style={{ color: c.inkSoft }}><Clock size={11} /> {m.tempo} min</span>
                    <span className="font-body text-xs flex items-center gap-1" style={{ color: c.inkSoft }}><Sparkles size={11} /> +{m.xp} xp</span>
                  </div>
                </div>
                {!bloqueada && !completa && <ChevronRight size={18} style={{ color: c.inkSoft }} className="flex-shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============ MISSAO DETAIL (rich written content, no video) ============
const MissaoDetailScreen = ({ trilhaId, missaoId, progress, setProgress, onBack }) => {
  const m = trilhaId === 'pc-excel' && missaoId === 5 ? CONTEUDO_SOMA
          : trilhaId === 'mob-pix' && missaoId === 7 ? CONTEUDO_PIX_GOLPES
          : null;
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState({});
  const [completed, setCompleted] = useState(progress.missoesCompletas.includes(`${trilhaId}-${missaoId}`));

  if (!m) return <div className="p-8"><p>Missão em produção no protótipo</p></div>;

  const steps = [
    { id: 'aula', label: 'Aula', icon: BookOpen },
    { id: 'pratica', label: 'Prática', icon: Target },
    { id: 'desafio', label: 'Desafio', icon: Sparkles },
    { id: 'validacao', label: 'Validação', icon: CheckCircle2 },
  ];

  const concluir = () => {
    const id = `${trilhaId}-${missaoId}`;
    if (!progress.missoesCompletas.includes(id)) {
      setProgress(p => ({
        ...p,
        missoesCompletas: [...p.missoesCompletas, id],
        user: { ...p.user, xp: p.user.xp + m.xp },
      }));
    }
    setCompleted(true);
  };

  return (
    <div className="fade-up">
      <BackButton label="Voltar pra trilha" onClick={onBack} />
      <div className="mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <VertenteBadge vertente={m.vertente} />
          <p className="font-body text-xs uppercase tracking-[0.2em]" style={{ color: c.textSoft }}>
            Missão {m.numero}
          </p>
        </div>
        <h1 className="font-display text-2xl md:text-4xl font-medium mt-2 leading-tight" style={{ color: c.text }}>{m.titulo}</h1>
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <span className="font-body text-xs flex items-center gap-1" style={{ color: c.inkSoft }}><Clock size={12} /> {m.tempoTotal} min de leitura + prática</span>
          <span className="font-body text-xs flex items-center gap-1" style={{ color: c.inkSoft }}><Sparkles size={12} /> +{m.xp} xp</span>
        </div>
      </div>

      <div className="flex items-center gap-2 my-6 overflow-x-auto pb-2">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const active = i === step;
          const done = i < step;
          return (
            <React.Fragment key={s.id}>
              <button onClick={() => setStep(i)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full transition-all flex-shrink-0"
                      style={{
                        backgroundColor: active ? c.ink : done ? c.forest : c.borderSoft,
                        color: active || done ? c.surface : c.inkSoft,
                        fontWeight: active ? 700 : 500,
                      }}>
                {done ? <CheckCircle2 size={14} /> : <Icon size={14} />}
                <span className="font-body text-xs uppercase tracking-wider">{s.label}</span>
              </button>
              {i < steps.length - 1 && <div className="w-3 h-px flex-shrink-0" style={{ backgroundColor: c.border }} />}
            </React.Fragment>
          );
        })}
      </div>

      <div className="rounded-2xl border p-5 md:p-8 mb-6" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        {step === 0 && <AulaContent aula={m.aula} vertente={m.vertente} />}
        {step === 1 && <PraticaContent pratica={m.pratica} vertente={m.vertente} />}
        {step === 2 && <DesafioContent desafio={m.desafio} />}
        {step === 3 && (
          <ValidacaoContent itens={m.validacao} checked={checked} setChecked={setChecked} xp={m.xp}
                            completed={completed} onConcluir={concluir} />
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
                className="px-5 py-3 rounded-full font-body font-semibold text-sm disabled:opacity-30"
                style={{ color: c.inkSoft, border: `1.5px solid ${c.border}` }}>
          ← Anterior
        </button>
        <p className="font-body text-xs uppercase tracking-wider" style={{ color: c.textSoft }}>
          Passo {step + 1} de {steps.length}
        </p>
        <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1}
                className="px-5 py-3 rounded-full font-body font-semibold text-sm disabled:opacity-30"
                style={{ backgroundColor: c.ink, color: c.surface }}>
          Próximo →
        </button>
      </div>
    </div>
  );
};

const AulaContent = ({ aula, vertente }) => (
  <div className="space-y-6">
    <div className="rounded-xl p-5 md:p-6 border-l-4" style={{ backgroundColor: c.bg, borderColor: c.coral }}>
      <p className="font-display text-lg md:text-xl leading-relaxed italic" style={{ color: c.text }}>"{aula.gancho}"</p>
    </div>

    <section>
      <h2 className="font-display text-xl md:text-2xl font-semibold mb-3" style={{ color: c.ink }}>{aula.conceito.titulo}</h2>
      <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: c.text }}>{aula.conceito.texto}</p>
    </section>

    <section>
      <h2 className="font-display text-xl md:text-2xl font-semibold mb-3" style={{ color: c.ink }}>{aula.estrutura.titulo}</h2>
      <div className="space-y-2">
        {aula.estrutura.partes.map((p, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl p-4" style={{ backgroundColor: c.bg }}>
            <div className="flex-shrink-0 min-w-[3rem] h-12 px-3 rounded-md flex items-center justify-center font-mono font-bold text-base"
                 style={{ backgroundColor: c.ink, color: c.mustard }}>
              {p.simbolo}
            </div>
            <p className="font-body text-sm md:text-base pt-1" style={{ color: c.text }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="font-display text-xl md:text-2xl font-semibold mb-3" style={{ color: c.ink }}>{aula.exemplo.titulo}</h2>
      <div className="rounded-xl border-2 overflow-hidden" style={{ borderColor: c.border }}>
        <div className="px-4 py-2 flex items-center gap-2" style={{ backgroundColor: c.borderSoft }}>
          {vertente === 'celular'
            ? <Smartphone size={14} style={{ color: c.inkSoft }} />
            : <Sheet size={14} style={{ color: c.inkSoft }} />
          }
          <span className="font-body text-xs font-semibold uppercase tracking-wider" style={{ color: c.inkSoft }}>
            {vertente === 'celular' ? 'Conversa simulada' : 'Planilha simulada'}
          </span>
        </div>
        <div className="p-4 space-y-1.5" style={{ backgroundColor: '#fff' }}>
          {aula.exemplo.celulas.map((cel, i) => (
            <div key={i} className="flex items-center gap-3 font-mono text-sm" style={{ color: c.text }}>
              <span className="inline-block w-12 text-xs font-bold flex-shrink-0" style={{ color: c.coral }}>{cel.ref}</span>
              <span className="flex-1">{cel.valor}</span>
            </div>
          ))}
          <div className="pt-3 mt-3 border-t" style={{ borderColor: c.border }}>
            <div className="flex items-center gap-3 font-mono text-sm">
              <span className="inline-block w-12 text-xs font-bold flex-shrink-0" style={{ color: c.coral }}>→</span>
              <span className="font-semibold" style={{ color: c.ink }}>{aula.exemplo.formula}</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-base mt-2">
              <span className="inline-block w-12 text-xs font-bold flex-shrink-0" style={{ color: c.forest }}>✓</span>
              <span className="font-bold" style={{ color: c.forest }}>{aula.exemplo.resultado}</span>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 border-t" style={{ borderColor: c.border, backgroundColor: c.bg }}>
          <p className="font-body text-sm italic" style={{ color: c.inkSoft }}>{aula.exemplo.comentario}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="font-display text-xl md:text-2xl font-semibold mb-3" style={{ color: c.ink }}>Palavras novas</h2>
      <div className="space-y-2">
        {aula.vocabulario.map((v, i) => (
          <div key={i} className="rounded-lg p-3 border-l-2" style={{ backgroundColor: c.bg, borderColor: c.mustard }}>
            <p className="font-display font-semibold text-sm md:text-base" style={{ color: c.ink }}>{v.palavra}</p>
            <p className="font-body text-sm mt-1" style={{ color: c.text }}>{v.def}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="rounded-xl p-5" style={{ backgroundColor: '#FFF8E7', border: `1px solid ${c.mustard}` }}>
      <div className="flex items-start gap-3">
        <Lightbulb size={20} style={{ color: c.mustard }} className="flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-body text-xs uppercase tracking-wider font-bold mb-3" style={{ color: c.text }}>3 pontos pra lembrar</p>
          <ul className="space-y-2">
            {aula.chave.map((p, i) => (
              <li key={i} className="font-body text-sm md:text-base flex gap-2" style={{ color: c.text }}>
                <span className="font-bold flex-shrink-0" style={{ color: c.coral }}>{i + 1}.</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="rounded-xl p-5 border-l-4" style={{ backgroundColor: c.borderSoft, borderColor: c.forest }}>
      <p className="font-body text-xs uppercase tracking-wider font-bold mb-2" style={{ color: c.forest }}>Por que isso importa</p>
      <p className="font-body text-sm md:text-base" style={{ color: c.text }}>{aula.porque}</p>
    </section>
  </div>
);

const PraticaContent = ({ pratica, vertente }) => {
  const Icon = vertente === 'celular' ? Smartphone : Monitor;
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Target size={18} style={{ color: c.coral }} />
        <p className="font-body text-xs uppercase tracking-[0.2em] font-bold" style={{ color: c.coral }}>Faça junto comigo</p>
      </div>
      <div className="rounded-xl p-4 border-2 border-dashed flex items-center gap-3" style={{ borderColor: c.coral, backgroundColor: '#FFF1E5' }}>
        <Icon size={20} style={{ color: c.coral }} />
        <p className="font-body text-sm md:text-base font-semibold" style={{ color: c.text }}>{pratica.instrucao}</p>
      </div>
      <ol className="space-y-3">
        {pratica.passos.map((p, i) => (
          <li key={i} className="flex gap-4 rounded-xl p-4" style={{ backgroundColor: c.bg }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                 style={{ backgroundColor: c.ink, color: c.surface }}>{i + 1}</div>
            <p className="font-body text-sm md:text-base flex-1 pt-0.5" style={{ color: c.text }}>{p}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

const DesafioContent = ({ desafio }) => (
  <div className="space-y-5">
    <div className="flex items-center gap-2">
      <Sparkles size={18} style={{ color: c.coral }} />
      <p className="font-body text-xs uppercase tracking-[0.2em] font-bold" style={{ color: c.coral }}>Sua missão</p>
    </div>
    <p className="font-display text-lg md:text-xl leading-relaxed" style={{ color: c.text }}>{desafio.cenario}</p>
    <div>
      <p className="font-body text-sm font-semibold mb-3" style={{ color: c.inkSoft }}>O que precisa ter:</p>
      <ul className="space-y-3">
        {desafio.requisitos.map((r, i) => (
          <li key={i} className="flex gap-3 rounded-xl p-4" style={{ backgroundColor: c.bg }}>
            <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: c.coral }} />
            <p className="font-body text-sm md:text-base flex-1" style={{ color: c.text }}>{r}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-xl p-4 flex items-start gap-3" style={{ backgroundColor: '#FFF8E7', border: `1px solid ${c.mustard}` }}>
      <Lightbulb size={18} style={{ color: c.mustard }} className="flex-shrink-0 mt-0.5" />
      <p className="font-body text-sm" style={{ color: c.text }}><strong>Dica de profissional:</strong> {desafio.dica}</p>
    </div>
  </div>
);

const ValidacaoContent = ({ itens, checked, setChecked, xp, completed, onConcluir }) => {
  const todosFeitos = itens.every((_, i) => checked[i]);
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <CheckCircle2 size={18} style={{ color: c.coral }} />
        <p className="font-body text-xs uppercase tracking-[0.2em] font-bold" style={{ color: c.coral }}>Vamos conferir</p>
      </div>
      <p className="font-body text-base md:text-lg" style={{ color: c.text }}>
        Marque cada item que você conseguiu fazer. Sem pressa.
      </p>
      <ul className="space-y-2">
        {itens.map((item, i) => (
          <li key={i}>
            <button onClick={() => setChecked(p => ({ ...p, [i]: !p[i] }))}
                    className="w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left"
                    style={{
                      backgroundColor: checked[i] ? '#E8F0E8' : c.bg,
                      borderColor: checked[i] ? c.forest : 'transparent',
                    }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: checked[i] ? c.forest : c.borderSoft, color: c.surface }}>
                {checked[i] && <CheckCircle2 size={16} />}
              </div>
              <span className="font-body text-sm md:text-base font-medium" style={{ color: c.text }}>{item}</span>
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onConcluir} disabled={!todosFeitos || completed}
              className="w-full p-4 mt-4 rounded-full font-display font-semibold text-base md:text-lg flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: completed ? c.forest : c.coral, color: c.surface }}>
        {completed ? <>Missão concluída ✓</> : <>Concluir e ganhar +{xp} xp <Sparkles size={18} /></>}
      </button>
    </div>
  );
};

// ============ CONFIGURAÇÕES (export/import progress) ============
const ConfigScreen = ({ progress, setProgress }) => {
  const fileRef = useRef(null);
  const [feedback, setFeedback] = useState(null);

  const exportar = () => {
    try {
      const data = { app: 'escritorio', versao: 1, exportadoEm: new Date().toISOString(), ...progress };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `escritorio-progresso-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setFeedback({ tipo: 'ok', msg: 'Progresso exportado! Salve o arquivo no Drive, e-mail ou WhatsApp pra você mesmo.' });
    } catch (e) {
      setFeedback({ tipo: 'erro', msg: 'Não foi possível exportar.' });
    }
  };

  const importar = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.app !== 'escritorio') throw new Error('Arquivo inválido');
        const { app, versao, exportadoEm, ...prog } = data;
        setProgress(prog);
        setFeedback({ tipo: 'ok', msg: 'Progresso restaurado com sucesso!' });
      } catch (err) {
        setFeedback({ tipo: 'erro', msg: 'Esse arquivo não parece um backup válido do Escritório.' });
      }
    };
    reader.readAsText(file);
  };

  const limpar = () => {
    if (window.confirm('Tem certeza? Isso apaga todo o seu progresso.')) {
      setProgress(INITIAL_PROGRESS);
      setFeedback({ tipo: 'ok', msg: 'Progresso reiniciado.' });
    }
  };

  return (
    <div className="space-y-6 fade-up">
      <div>
        <p className="font-body text-xs uppercase tracking-[0.2em]" style={{ color: c.textSoft }}>Seus dados</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium mt-1" style={{ color: c.text }}>Configurações</h1>
        <p className="font-body text-base mt-2 max-w-xl" style={{ color: c.inkSoft }}>
          Seu progresso fica salvo no aparelho. Pra usar em outro aparelho ou ter backup, exporte como arquivo.
        </p>
      </div>

      {feedback && (
        <div className="rounded-xl p-4 border" style={{
          backgroundColor: feedback.tipo === 'ok' ? '#E8F0E8' : '#FBE4DC',
          borderColor: feedback.tipo === 'ok' ? c.forest : c.coral,
        }}>
          <p className="font-body text-sm" style={{ color: feedback.tipo === 'ok' ? c.forest : c.coral }}>{feedback.msg}</p>
        </div>
      )}

      <section className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        <div className="flex items-start gap-3 mb-4">
          <Save size={20} style={{ color: c.coral }} className="flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-semibold" style={{ color: c.ink }}>Exportar meu progresso</h3>
            <p className="font-body text-sm mt-1" style={{ color: c.textSoft }}>
              Gera um arquivo .json com tudo: XP, missões feitas, selos. Salve no Google Drive, mande pra seu e-mail, ou guarde no celular.
            </p>
          </div>
        </div>
        <button onClick={exportar}
                className="w-full md:w-auto px-5 py-3 rounded-full font-body font-semibold text-sm flex items-center justify-center gap-2"
                style={{ backgroundColor: c.ink, color: c.surface }}>
          <Download size={16} /> Baixar arquivo de progresso
        </button>
      </section>

      <section className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        <div className="flex items-start gap-3 mb-4">
          <FolderOpen size={20} style={{ color: c.coral }} className="flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-semibold" style={{ color: c.ink }}>Importar progresso</h3>
            <p className="font-body text-sm mt-1" style={{ color: c.textSoft }}>
              Restaure de um arquivo exportado anteriormente (.json). Útil pra mudar de aparelho ou recuperar depois de limpar o navegador.
            </p>
          </div>
        </div>
        <input ref={fileRef} type="file" accept=".json,application/json" onChange={importar} style={{ display: 'none' }} />
        <button onClick={() => fileRef.current?.click()}
                className="w-full md:w-auto px-5 py-3 rounded-full font-body font-semibold text-sm flex items-center justify-center gap-2"
                style={{ border: `1.5px solid ${c.ink}`, color: c.ink, backgroundColor: 'transparent' }}>
          <Upload size={16} /> Escolher arquivo
        </button>
      </section>

      <section className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle size={20} style={{ color: c.coral }} className="flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-semibold" style={{ color: c.ink }}>Onde fica meu progresso?</h3>
            <p className="font-body text-sm mt-1 leading-relaxed" style={{ color: c.text }}>
              Tudo é salvo apenas <strong>no seu aparelho</strong> (no armazenamento do navegador). Nada vai pra servidor nenhum. Se você limpar dados do navegador ou trocar de aparelho sem exportar, vai perder. Por isso recomendo exportar uma vez por semana.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border-2 p-5 md:p-6" style={{ borderColor: c.coral, backgroundColor: '#FFF1E5' }}>
        <h3 className="font-display text-lg font-semibold" style={{ color: c.coral }}>Recomeçar do zero</h3>
        <p className="font-body text-sm mt-1" style={{ color: c.text }}>
          Apaga todo o progresso desse aparelho. Não tem volta (a não ser que você tenha um arquivo exportado).
        </p>
        <button onClick={limpar}
                className="mt-4 px-5 py-3 rounded-full font-body font-semibold text-sm"
                style={{ backgroundColor: c.coral, color: '#fff' }}>
          Apagar e recomeçar
        </button>
      </section>
    </div>
  );
};

// ============ PERFIL ============
const PerfilScreen = ({ progress, onNav }) => {
  const u = progress.user;
  const selosInfo = [
    { id: 'primeira-missao', nome: 'Primeira Missão', desc: 'Começou sua jornada' },
    { id: 'streak-7', nome: 'Sequência de 7 dias', desc: 'Uma semana sem parar' },
    { id: 'comunicador', nome: 'Comunicador', desc: 'Domina e-mail profissional' },
    { id: 'calculista', nome: 'Calculista', desc: 'Primeiras fórmulas no Excel' },
    { id: 'mestre-word', nome: 'Mestre do Word', desc: 'Concluiu a trilha de Word' },
    { id: 'networker', nome: 'Networker', desc: 'LinkedIn otimizado' },
    { id: 'guardiao', nome: 'Guardião Digital', desc: 'Segurança configurada' },
    { id: 'cidadao-digital', nome: 'Cidadão Digital', desc: 'Domina o Gov.br' },
  ];
  return (
    <div className="space-y-6 fade-up">
      <div className="grain rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        <div className="flex items-start gap-5 flex-wrap">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center font-display font-semibold text-3xl md:text-4xl flex-shrink-0"
               style={{ backgroundColor: c.ink, color: c.mustard }}>{u.nome[0]}</div>
          <div className="flex-1">
            <h1 className="font-display text-3xl md:text-4xl font-medium" style={{ color: c.text }}>{u.nome}</h1>
            <p className="font-body text-base mt-1" style={{ color: c.inkSoft }}>{NIVEIS[u.nivelNum - 1]} • Nível {u.nivelNum}</p>
            <div className="mt-3"><CareerStamp level={NIVEIS[u.nivelNum - 1]} num={u.nivelNum} /></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t" style={{ borderColor: c.border }}>
          {[{ label: 'XP total', value: u.xp }, { label: 'Selos', value: progress.selos.length }, { label: 'Streak', value: `${u.streak}d` }].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-semibold" style={{ color: c.coral }}>{s.value}</p>
              <p className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: c.textSoft }}>{s.label}</p>
            </div>
          ))}
        </div>
        <button onClick={() => onNav('config')}
                className="mt-5 w-full md:w-auto px-5 py-3 rounded-full font-body font-semibold text-sm flex items-center justify-center gap-2"
                style={{ border: `1.5px solid ${c.border}`, color: c.inkSoft }}>
          <Settings size={14} /> Configurações e backup
        </button>
      </div>

      <div>
        <p className="font-body text-xs uppercase tracking-[0.2em] mb-3" style={{ color: c.textSoft }}>★  Coleção de selos</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {selosInfo.map((s) => {
            const ganho = progress.selos.includes(s.id);
            return (
              <div key={s.id} className="rounded-2xl border p-4 text-center transition-all"
                   style={{ backgroundColor: ganho ? c.surface : c.borderSoft, borderColor: c.border, opacity: ganho ? 1 : 0.5 }}>
                <div className="w-14 h-14 mx-auto rounded-full border-2 border-dashed flex items-center justify-center mb-3"
                     style={{ borderColor: ganho ? c.coral : c.textSoft, backgroundColor: ganho ? '#FFF1E5' : 'transparent' }}>
                  <Award size={26} style={{ color: ganho ? c.coral : c.textSoft }} />
                </div>
                <p className="font-display text-sm font-semibold" style={{ color: c.text }}>{s.nome}</p>
                <p className="font-body text-xs mt-1" style={{ color: c.textSoft }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============ APP SHELL ============
const navItems = [
  { id: 'home', label: 'Início', icon: Home },
  { id: 'trilhas', label: 'Trilhas', icon: MapIcon },
  { id: 'perfil', label: 'Perfil', icon: User },
];

export default function App() {
  const [progress, setProgress] = useStorage('escritorio-progresso', INITIAL_PROGRESS);
  const [route, setRoute] = useState('home');

  const parts = route.split(':');
  const isTrilhaDetail = parts[0] === 'trilha' && parts.length === 2;
  const isMissaoDetail = parts[0] === 'trilha' && parts[2] === 'missao';
  const trilhaId = (parts[0] === 'trilha') ? parts[1] : null;
  const missaoId = isMissaoDetail ? parseInt(parts[3]) : null;

  let content;
  if (route === 'home') content = <HomeScreen progress={progress} onNav={setRoute} />;
  else if (route === 'trilhas') content = <TrilhasScreen progress={progress} setProgress={setProgress} onOpenTrilha={(id) => setRoute(`trilha:${id}`)} />;
  else if (isMissaoDetail) content = <MissaoDetailScreen trilhaId={trilhaId} missaoId={missaoId} progress={progress} setProgress={setProgress} onBack={() => setRoute(`trilha:${trilhaId}`)} />;
  else if (isTrilhaDetail) content = <TrilhaDetailScreen trilhaId={trilhaId} progress={progress} onBack={() => setRoute('trilhas')} onOpenMissao={(mid) => setRoute(`trilha:${trilhaId}:missao:${mid}`)} />;
  else if (route === 'perfil') content = <PerfilScreen progress={progress} onNav={setRoute} />;
  else if (route === 'config') content = <ConfigScreen progress={progress} setProgress={setProgress} />;

  const activeTab = route === 'home' ? 'home' : route.startsWith('trilha') ? 'trilhas' : (route === 'perfil' || route === 'config') ? 'perfil' : 'home';

  return (
    <div className="paper-bg min-h-screen font-body" style={{ color: c.text }}>
      <GlobalStyle />
      <div className="flex min-h-screen">
        <aside className="hidden md:flex md:flex-col w-64 lg:w-72 border-r p-6 sticky top-0 h-screen" style={{ backgroundColor: c.surface, borderColor: c.border }}>
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: c.ink }}>
                <Coffee size={18} style={{ color: c.mustard }} />
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-none" style={{ color: c.ink }}>Escritório</p>
                <p className="font-body text-[10px] uppercase tracking-[0.2em]" style={{ color: c.textSoft }}>sua carreira digital</p>
              </div>
            </div>
          </div>
          <nav className="space-y-1 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button key={item.id} onClick={() => setRoute(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all font-body"
                        style={{ backgroundColor: active ? c.ink : 'transparent', color: active ? c.surface : c.inkSoft, fontWeight: active ? 600 : 500 }}>
                  <Icon size={20} />
                  <span className="text-base">{item.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="rounded-xl p-4 border-2 border-dashed" style={{ borderColor: c.mustard }}>
            <p className="font-body text-xs uppercase tracking-wider" style={{ color: c.textSoft }}>Próximo nível</p>
            <p className="font-display text-base font-semibold mt-1" style={{ color: c.ink }}>{NIVEIS[progress.user.nivelNum]}</p>
            <div className="mt-2"><ProgressBar value={progress.user.xp - XP_POR_NIVEL[progress.user.nivelNum - 1]} max={XP_POR_NIVEL[progress.user.nivelNum] - XP_POR_NIVEL[progress.user.nivelNum - 1]} color={c.coral} height={6} /></div>
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="md:hidden sticky top-0 z-10 px-5 py-4 border-b flex items-center justify-between" style={{ backgroundColor: c.surface, borderColor: c.border }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: c.ink }}>
                <Coffee size={14} style={{ color: c.mustard }} />
              </div>
              <p className="font-display text-base font-semibold" style={{ color: c.ink }}>Escritório</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ backgroundColor: '#FFF1E5' }}>
              <Flame size={13} style={{ color: c.coral }} fill={c.coral} />
              <span className="font-body font-semibold text-xs" style={{ color: c.coral }}>{progress.user.streak}</span>
            </div>
          </div>
          <div className="px-5 py-6 md:px-10 md:py-10 lg:px-16 lg:py-12 pb-28 md:pb-12 max-w-4xl">
            {content}
          </div>
        </main>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-20 border-t px-2 py-2" style={{ backgroundColor: c.surface, borderColor: c.border }}>
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button key={item.id} onClick={() => setRoute(item.id)}
                      className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all"
                      style={{ color: active ? c.coral : c.inkSoft }}>
                <Icon size={22} strokeWidth={active ? 2.5 : 2} />
                <span className="font-body text-[10px] font-semibold uppercase tracking-wider">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
