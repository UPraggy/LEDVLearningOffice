// ============================================================================
// ESCRITÓRIO — ESTRUTURA DO CURSO
// Módulos (grupos), trilhas, missões (metadados), níveis, troféus e ofensiva.
// O usuário escolhe o módulo e a trilha que quer seguir.
// Conteúdo rico de cada missão fica em data/conteudo/*.js (schema CONTEUDO_*).
// ============================================================================

// ---------------------------------------------------------------------------
// MÓDULOS (grupos de trilhas). O usuário escolhe por onde começar.
// ---------------------------------------------------------------------------
export const MODULOS = [
  {
    id: 'computador',
    nome: 'Computador',
    subtitulo: 'Do zero ao uso confiante',
    desc: 'Domine o computador para a vida e o trabalho: arquivos, internet, Word, nuvem e reuniões online.',
    cor: '#1B2A4E',
    publico: 'Quem quer perder o medo do PC e usar com autonomia.',
  },
  {
    id: 'celular',
    nome: 'Celular',
    subtitulo: 'Sua vida digital na palma da mão',
    desc: 'Vá além do básico: organize o aparelho, use banco e PIX com segurança, Gov.br, saúde, mapas e backup.',
    cor: '#5B7C99',
    publico: 'Quem usa o celular todo dia mas quer fazer mais, com segurança.',
  },
  {
    id: 'mercado',
    nome: 'Mercado & Especialização',
    subtitulo: 'Qualificação que abre portas',
    desc: 'O caminho do emprego: Excel de verdade, IA no trabalho, e-mail profissional, LinkedIn, currículo e postura ofensiva de carreira.',
    cor: '#E55934',
    publico: 'Quem busca (re)inserção no mercado ou uma promoção.',
  },
  {
    id: 'seguranca',
    nome: 'Segurança Digital',
    subtitulo: 'Defender é entender o ataque',
    desc: 'Proteja-se de verdade: senhas, 2FA e privacidade — e entenda como golpistas pensam e montam fraudes, para nunca mais cair.',
    cor: '#3D5A3D',
    publico: 'Todo mundo. É o módulo que mais evita prejuízo real.',
  },
  {
    id: 'ingles',
    nome: 'Inglês do Zero ao B1',
    subtitulo: 'Do "hello" à conversa real',
    desc: 'Aprenda inglês de verdade, no seu ritmo: do alfabeto e cumprimentos (A1) até conversar, contar histórias e usar inglês no trabalho (B1). Progressão CEFR, missões curtas com troféus próprios.',
    cor: '#7A4FB5',
    publico: 'Crianças, jovens e adultos — todo mundo que quer destravar o inglês.',
  },
];

// ---------------------------------------------------------------------------
// TRILHAS — cada uma pertence a um módulo. `iconeNome` referencia lucide-react
// (mapeado no app). `vertente` indica onde a prática acontece.
// ---------------------------------------------------------------------------
export const TRILHAS = [
  // ===== MÓDULO COMPUTADOR =====
  { id: 'pc-fund',  modulo: 'computador', vertente: 'computador', ordem: 1, nome: 'Fundamentos do Computador', desc: 'Arquivos, pastas, atalhos, ergonomia', iconeNome: 'Settings', cor: '#3D5A3D' },
  { id: 'pc-nav',   modulo: 'computador', vertente: 'computador', ordem: 2, nome: 'Internet, Navegador e Pesquisa', desc: 'Pesquisar bem, abas, downloads, favoritos', iconeNome: 'Globe', cor: '#1B2A4E' },
  { id: 'pc-word',  modulo: 'computador', vertente: 'computador', ordem: 3, nome: 'Word & Google Docs', desc: 'Documentos profissionais de verdade', iconeNome: 'FileText', cor: '#1B2A4E' },
  { id: 'pc-cloud', modulo: 'computador', vertente: 'computador', ordem: 4, nome: 'Workspace na Nuvem', desc: 'Drive, Calendar, colaboração ao vivo', iconeNome: 'Cloud', cor: '#1B2A4E' },
  { id: 'pc-meet',  modulo: 'computador', vertente: 'computador', ordem: 5, nome: 'Reuniões Online', desc: 'Meet, Zoom, Teams sem medo', iconeNome: 'Video', cor: '#1B2A4E' },

  // ===== MÓDULO CELULAR =====
  { id: 'mob-dom',   modulo: 'celular', vertente: 'celular', ordem: 1, nome: 'Domínio do Celular', desc: 'Configurações, atalhos, organização', iconeNome: 'Smartphone', cor: '#3D5A3D' },
  { id: 'mob-wpp',   modulo: 'celular', vertente: 'celular', ordem: 2, nome: 'WhatsApp Profissional', desc: 'Grupos, etiqueta, recursos avançados', iconeNome: 'MessageCircle', cor: '#5B7C99' },
  { id: 'mob-pix',   modulo: 'celular', vertente: 'celular', ordem: 3, nome: 'Banco e PIX com Segurança', desc: 'Pagar, receber e identificar golpes', iconeNome: 'Banknote', cor: '#E55934' },
  { id: 'mob-gov',   modulo: 'celular', vertente: 'celular', ordem: 4, nome: 'Gov.br e Serviços Públicos', desc: 'Conta nível ouro, assinar, comprovantes', iconeNome: 'KeyRound', cor: '#5B7C99' },
  { id: 'mob-saude', modulo: 'celular', vertente: 'celular', ordem: 5, nome: 'Saúde Digital', desc: 'SUS, vacinas, exames, telemedicina', iconeNome: 'Heart', cor: '#5B7C99' },
  { id: 'mob-loc',   modulo: 'celular', vertente: 'celular', ordem: 6, nome: 'Maps, Uber e Mobilidade', desc: 'Rotas, transporte, evitar problemas', iconeNome: 'Map', cor: '#5B7C99' },
  { id: 'mob-fotos', modulo: 'celular', vertente: 'celular', ordem: 7, nome: 'Fotos, Backup e Memórias', desc: 'Organizar, salvar, nunca mais perder', iconeNome: 'Camera', cor: '#5B7C99' },

  // ===== MÓDULO MERCADO & ESPECIALIZAÇÃO =====
  { id: 'pc-excel',    modulo: 'mercado', vertente: 'computador', ordem: 1, nome: 'Excel & Sheets', desc: 'Planilhas que se calculam sozinhas', iconeNome: 'Sheet', cor: '#E55934' },
  { id: 'pc-ia',       modulo: 'mercado', vertente: 'computador', ordem: 2, nome: 'IA pro Trabalho', desc: 'ChatGPT, Claude e Gemini no dia a dia', iconeNome: 'Sparkles', cor: '#1B2A4E' },
  { id: 'amb-com',     modulo: 'mercado', vertente: 'ambos',      ordem: 3, nome: 'Comunicação Profissional', desc: 'E-mail, etiqueta e escrita clara', iconeNome: 'Send', cor: '#1B2A4E' },
  { id: 'pc-job',      modulo: 'mercado', vertente: 'computador', ordem: 4, nome: 'LinkedIn & Currículo', desc: 'Perfil que recrutador acha', iconeNome: 'Linkedin', cor: '#1B2A4E' },
  { id: 'mkt-carreira',modulo: 'mercado', vertente: 'ambos',      ordem: 5, nome: 'Ofensiva de Carreira', desc: 'Ir atrás da vaga, negociar, se destacar', iconeNome: 'TrendingUp', cor: '#E55934' },
  { id: 'amb-final',   modulo: 'mercado', vertente: 'ambos',      ordem: 6, nome: 'Projeto Final', desc: 'Uma semana simulada usando tudo', iconeNome: 'Layers', cor: '#D4A574' },

  // ===== MÓDULO SEGURANÇA =====
  { id: 'amb-seg',   modulo: 'seguranca', vertente: 'ambos', ordem: 1, nome: 'Defesa Digital', desc: 'Senhas, 2FA, privacidade — sua blindagem', iconeNome: 'Shield', cor: '#3D5A3D' },
  { id: 'sec-ataque',modulo: 'seguranca', vertente: 'ambos', ordem: 2, nome: 'Como o Golpista Pensa', desc: 'Entenda o ataque por dentro pra nunca cair', iconeNome: 'AlertTriangle', cor: '#E55934' },

  // ===== MÓDULO INGLÊS (vertente própria 'ingles') =====
  // A1 — Iniciante
  { id: 'en-a1-basico', modulo: 'ingles', vertente: 'ingles', ordem: 1, nome: 'Primeiros Passos (A1)', desc: 'Alfabeto, sons, cumprimentos e o verbo "to be"', iconeNome: 'Languages', cor: '#7A4FB5' },
  { id: 'en-a1-pessoas',modulo: 'ingles', vertente: 'ingles', ordem: 2, nome: 'Eu e as Pessoas (A1)', desc: 'Apresentar-se, família, países e nacionalidades', iconeNome: 'Users', cor: '#7A4FB5' },
  { id: 'en-a1-numeros',modulo: 'ingles', vertente: 'ingles', ordem: 3, nome: 'Números, Horas e Cores (A1)', desc: 'Contar, dizer as horas, cores e datas', iconeNome: 'Hash', cor: '#7A4FB5' },
  { id: 'en-a1-rotina', modulo: 'ingles', vertente: 'ingles', ordem: 4, nome: 'Meu Dia a Dia (A1)', desc: 'Present simple e a rotina diária', iconeNome: 'Sun', cor: '#7A4FB5' },
  // A2 — Básico
  { id: 'en-a2-comida', modulo: 'ingles', vertente: 'ingles', ordem: 5, nome: 'Comida e Restaurante (A2)', desc: 'Pedir comida, contáveis/incontáveis, gostos', iconeNome: 'Utensils', cor: '#6A3FA5' },
  { id: 'en-a2-lugares',modulo: 'ingles', vertente: 'ingles', ordem: 6, nome: 'Lugares e Direções (A2)', desc: 'There is/are, preposições, viajar e se orientar', iconeNome: 'MapPin', cor: '#6A3FA5' },
  { id: 'en-a2-passado',modulo: 'ingles', vertente: 'ingles', ordem: 7, nome: 'Falando do Passado (A2)', desc: 'Past simple: contar o que aconteceu', iconeNome: 'History', cor: '#6A3FA5' },
  { id: 'en-a2-planos', modulo: 'ingles', vertente: 'ingles', ordem: 8, nome: 'Planos e Futuro (A2)', desc: 'Going to e will: falar de planos e previsões', iconeNome: 'CalendarClock', cor: '#6A3FA5' },
  // B1 — Intermediário
  { id: 'en-b1-conversa',modulo: 'ingles', vertente: 'ingles', ordem: 9, nome: 'Conversação e Opiniões (B1)', desc: 'Present perfect, opinar e manter uma conversa', iconeNome: 'MessageSquare', cor: '#5A2F95' },
  { id: 'en-b1-trabalho',modulo: 'ingles', vertente: 'ingles', ordem: 10, nome: 'Inglês para o Trabalho (B1)', desc: 'Currículo, entrevista e e-mails em inglês', iconeNome: 'Briefcase', cor: '#5A2F95' },
  { id: 'en-b1-mundo',  modulo: 'ingles', vertente: 'ingles', ordem: 11, nome: 'Histórias e Mundo (B1)', desc: 'Condicionais, conectar ideias e narrar', iconeNome: 'Globe2', cor: '#5A2F95' },
];

// ---------------------------------------------------------------------------
// MISSÕES (metadados) por trilha. Conteúdo rico vem dos arquivos de conteúdo.
// xp: 30/40 básico · 50/70 médio · 80/100 avançado · 100/150 projeto.
// ---------------------------------------------------------------------------
export const MISSOES = {
  // ---------- COMPUTADOR ----------
  'pc-fund': [
    { id: 1, titulo: 'Conhecendo a área de trabalho', desc: 'Ícones, barra de tarefas, menu Iniciar', tempo: 8, xp: 30 },
    { id: 2, titulo: 'Arquivos e pastas: criar e renomear', desc: 'A organização que evita perder tudo', tempo: 9, xp: 30 },
    { id: 3, titulo: 'Mover, copiar e organizar pastas', desc: 'Documentos, Downloads, Imagens', tempo: 10, xp: 40 },
    { id: 4, titulo: 'Copiar, recortar e colar', desc: 'Ctrl+C, Ctrl+X, Ctrl+V na prática', tempo: 8, xp: 40 },
    { id: 5, titulo: 'Achar um arquivo que você "perdeu"', desc: 'Busca do Windows e dicas', tempo: 7, xp: 40 },
    { id: 6, titulo: 'Pen drive e nuvem: salvar de fora', desc: 'Conectar, copiar, remover com segurança', tempo: 9, xp: 50 },
    { id: 7, titulo: 'Atalhos que economizam tempo', desc: 'Ctrl+Z, Alt+Tab, Print, Win+E', tempo: 8, xp: 50 },
    { id: 8, titulo: 'Projeto: organize seus documentos', desc: 'Monte uma estrutura de pastas real', tempo: 20, xp: 100 },
  ],
  'pc-nav': [
    { id: 1, titulo: 'O navegador por dentro', desc: 'Barra de endereço, abas, recarregar', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Pesquisar bem no Google', desc: 'Palavras certas e como filtrar', tempo: 9, xp: 40 },
    { id: 3, titulo: 'Avaliar se um site é confiável', desc: 'Cadeado, domínio, fontes', tempo: 9, xp: 50 },
    { id: 4, titulo: 'Favoritos e histórico', desc: 'Salvar sites e voltar neles', tempo: 6, xp: 30 },
    { id: 5, titulo: 'Downloads sem dor de cabeça', desc: 'Onde caem e como abrir', tempo: 7, xp: 40 },
    { id: 6, titulo: 'Abas, várias coisas ao mesmo tempo', desc: 'Trabalhar com 2+ páginas', tempo: 6, xp: 40 },
    { id: 7, titulo: 'Projeto: pesquisa de um benefício real', desc: 'Encontre uma informação oficial', tempo: 15, xp: 90 },
  ],
  'pc-word': [
    { id: 1, titulo: 'Word ou Google Docs: qual usar', desc: 'Diferenças e quando escolher cada um', tempo: 6, xp: 30 },
    { id: 2, titulo: 'Seu primeiro documento salvo', desc: 'Digitar, salvar e abrir de novo', tempo: 8, xp: 30 },
    { id: 3, titulo: 'Fonte, tamanho, negrito, alinhamento', desc: 'Deixe o texto apresentável', tempo: 9, xp: 40 },
    { id: 4, titulo: 'Títulos, parágrafos e espaçamento', desc: 'Estrutura que se lê fácil', tempo: 9, xp: 40 },
    { id: 5, titulo: 'Listas com marcadores e números', desc: 'Organizar itens e etapas', tempo: 7, xp: 40 },
    { id: 6, titulo: 'Inserir imagem, tabela e linha', desc: 'Documentos mais ricos', tempo: 10, xp: 50 },
    { id: 7, titulo: 'Margens, cabeçalho e rodapé', desc: 'Layout profissional', tempo: 9, xp: 50 },
    { id: 8, titulo: 'Revisão, comentários e correções', desc: 'Corretor e controle de alterações', tempo: 10, xp: 60 },
    { id: 9, titulo: 'Salvar como PDF e compartilhar', desc: 'O formato que ninguém bagunça', tempo: 7, xp: 50 },
    { id: 10, titulo: 'Projeto: um ofício formal completo', desc: 'Carta/ofício do começo ao fim', tempo: 25, xp: 120 },
  ],
  'pc-cloud': [
    { id: 1, titulo: 'O que é "a nuvem", sem mistério', desc: 'Seus arquivos em qualquer aparelho', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Google Drive: subir e baixar', desc: 'Guardar arquivos online', tempo: 9, xp: 40 },
    { id: 3, titulo: 'Compartilhar e dar permissões', desc: 'Ver, comentar ou editar', tempo: 10, xp: 50 },
    { id: 4, titulo: 'Editar junto, ao vivo', desc: 'Duas pessoas no mesmo documento', tempo: 9, xp: 50 },
    { id: 5, titulo: 'Histórico de versões', desc: 'Voltar no tempo de um arquivo', tempo: 7, xp: 50 },
    { id: 6, titulo: 'Google Agenda: criar eventos', desc: 'Compromissos e convidados', tempo: 9, xp: 50 },
    { id: 7, titulo: 'Lembretes e tarefas', desc: 'Não esquecer mais nada', tempo: 7, xp: 40 },
    { id: 8, titulo: 'Mesma conta no celular e no PC', desc: 'Tudo sincronizado', tempo: 8, xp: 50 },
    { id: 9, titulo: 'Projeto: agenda da semana + pasta', desc: 'Monte e compartilhe', tempo: 18, xp: 100 },
  ],
  'pc-meet': [
    { id: 1, titulo: 'Entrar numa reunião por link', desc: 'Sem instalar nada, sem susto', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Câmera e microfone', desc: 'Ligar, desligar, testar antes', tempo: 8, xp: 40 },
    { id: 3, titulo: 'Compartilhar a tela', desc: 'Mostrar um documento pra todos', tempo: 9, xp: 50 },
    { id: 4, titulo: 'Chat, mão levantada e reações', desc: 'Participar sem atrapalhar', tempo: 6, xp: 40 },
    { id: 5, titulo: 'Marcar reunião e enviar convite', desc: 'Criar o link e convidar', tempo: 9, xp: 50 },
    { id: 6, titulo: 'Gravar e fazer uma ata simples', desc: 'Registrar o que foi combinado', tempo: 10, xp: 60 },
    { id: 7, titulo: 'Projeto: conduza uma reunião teste', desc: 'Com um familiar, do início ao fim', tempo: 18, xp: 100 },
  ],

  // ---------- CELULAR ----------
  'mob-dom': [
    { id: 1, titulo: 'As configurações principais', desc: 'Onde mexer e o que evitar', tempo: 8, xp: 30 },
    { id: 2, titulo: 'Organizar apps em pastas', desc: 'Tela inicial limpa e prática', tempo: 7, xp: 30 },
    { id: 3, titulo: 'Letra maior, brilho e som', desc: 'Ajuste pro seu conforto', tempo: 6, xp: 30 },
    { id: 4, titulo: 'Notificações: o que silenciar', desc: 'Pare de ser interrompido à toa', tempo: 8, xp: 40 },
    { id: 5, titulo: 'Armazenamento cheio?', desc: 'O que apagar com segurança', tempo: 9, xp: 50 },
    { id: 6, titulo: 'Wi-Fi, Bluetooth e dados móveis', desc: 'Conectar e economizar internet', tempo: 9, xp: 50 },
    { id: 7, titulo: 'Atualizar apps e o sistema', desc: 'Por que é questão de segurança', tempo: 7, xp: 40 },
    { id: 8, titulo: 'Projeto: deixe seu celular leve', desc: 'Organização completa', tempo: 18, xp: 100 },
  ],
  'mob-wpp': [
    { id: 1, titulo: 'Perfil com foto e recado', desc: 'Sua identidade no WhatsApp', tempo: 6, xp: 30 },
    { id: 2, titulo: 'Conversas, anexos e áudios', desc: 'Mandar bem o recado', tempo: 8, xp: 30 },
    { id: 3, titulo: 'Criar e administrar grupos', desc: 'Adicionar, remover, descrição', tempo: 9, xp: 50 },
    { id: 4, titulo: 'Etiqueta em grupo de trabalho', desc: 'O que (não) mandar', tempo: 7, xp: 40 },
    { id: 5, titulo: 'Listas de transmissão vs grupos', desc: 'Avisar muita gente sem bagunça', tempo: 8, xp: 50 },
    { id: 6, titulo: 'Fixar, marcar e buscar conversa', desc: 'Achar tudo rápido', tempo: 7, xp: 40 },
    { id: 7, titulo: 'WhatsApp Web no computador', desc: 'Usar no PC com segurança', tempo: 8, xp: 50 },
    { id: 8, titulo: 'Privacidade: foto, visto, bloqueio', desc: 'Controle quem vê o quê', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: grupo organizado com regras', desc: 'Crie um grupo modelo', tempo: 15, xp: 90 },
  ],
  'mob-pix': [
    { id: 1, titulo: 'O que é PIX, na real', desc: 'Como funciona e por que é diferente', tempo: 6, xp: 30 },
    { id: 2, titulo: 'As 4 chaves PIX e qual escolher', desc: 'CPF, telefone, e-mail, aleatória', tempo: 8, xp: 40 },
    { id: 3, titulo: 'Cadastrando sua primeira chave', desc: 'Passo a passo no seu banco', tempo: 10, xp: 50 },
    { id: 4, titulo: 'Fazendo um PIX sem medo', desc: 'Confirmar dados antes de pagar', tempo: 8, xp: 50 },
    { id: 5, titulo: 'Recebendo PIX e dando comprovante', desc: 'QR Code, copia e cola', tempo: 9, xp: 50 },
    { id: 6, titulo: 'Limites diários: por que existem', desc: 'Configurar limite e proteção', tempo: 8, xp: 60 },
    { id: 7, titulo: 'Os 5 golpes de PIX mais comuns', desc: 'Como identificar antes de cair', tempo: 12, xp: 80 },
    { id: 8, titulo: 'Bloqueio cautelar (MED)', desc: 'O que fazer se caiu num golpe', tempo: 7, xp: 50 },
    { id: 9, titulo: 'PIX agendado e recorrente', desc: 'Contas que pagam sozinhas', tempo: 10, xp: 60 },
    { id: 10, titulo: 'Projeto: blinde sua segurança PIX', desc: 'Limites, contatos, alertas', tempo: 15, xp: 100 },
  ],
  'mob-gov': [
    { id: 1, titulo: 'O que é a conta Gov.br', desc: 'A chave dos serviços públicos', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Criar e acessar sua conta', desc: 'CPF, senha e recuperação', tempo: 9, xp: 40 },
    { id: 3, titulo: 'Subir de nível: bronze a ouro', desc: 'Por que o ouro destrava tudo', tempo: 10, xp: 50 },
    { id: 4, titulo: 'Assinatura digital gratuita', desc: 'Assine documentos com validade', tempo: 10, xp: 60 },
    { id: 5, titulo: 'Carteira de documentos digital', desc: 'CNH e documentos no celular', tempo: 8, xp: 50 },
    { id: 6, titulo: 'Comprovantes e certidões', desc: 'Emitir sem sair de casa', tempo: 8, xp: 50 },
    { id: 7, titulo: 'Consultar INSS e benefícios', desc: 'Meu INSS e serviços', tempo: 9, xp: 60 },
    { id: 8, titulo: 'Projeto: conta ouro + assinatura', desc: 'Deixe tudo pronto e assine', tempo: 18, xp: 100 },
  ],
  'mob-saude': [
    { id: 1, titulo: 'Conecte SUS: o que dá pra fazer', desc: 'Seu histórico de saúde no celular', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Carteira de vacinação digital', desc: 'Comprovantes sempre à mão', tempo: 7, xp: 40 },
    { id: 3, titulo: 'Resultados de exames online', desc: 'Acessar e entender', tempo: 8, xp: 50 },
    { id: 4, titulo: 'Agendar consultas e ver histórico', desc: 'Organize seus atendimentos', tempo: 8, xp: 50 },
    { id: 5, titulo: 'Telemedicina com segurança', desc: 'Consulta por vídeo bem feita', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Projeto: organize sua saúde digital', desc: 'Histórico, vacinas e contatos', tempo: 15, xp: 90 },
  ],
  'mob-loc': [
    { id: 1, titulo: 'Maps: buscar endereço e rota', desc: 'Chegar em qualquer lugar', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Carro, a pé ou ônibus', desc: 'Escolher o melhor caminho', tempo: 7, xp: 40 },
    { id: 3, titulo: 'Salvar casa e trabalho', desc: 'Locais favoritos em 1 toque', tempo: 6, xp: 30 },
    { id: 4, titulo: 'Pedir Uber/99 com segurança', desc: 'Conferir placa, motorista, valor', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Compartilhar localização', desc: 'A família sabe onde você está', tempo: 7, xp: 50 },
    { id: 6, titulo: 'Projeto: planeje um trajeto completo', desc: 'Ida e volta, com transporte', tempo: 15, xp: 90 },
  ],
  'mob-fotos': [
    { id: 1, titulo: 'Tirar fotos melhores', desc: 'Luz, foco e enquadramento', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Galeria: ver, apagar, favoritar', desc: 'Navegar nas suas fotos', tempo: 6, xp: 30 },
    { id: 3, titulo: 'Criar álbuns por evento', desc: 'Organização que facilita achar', tempo: 7, xp: 40 },
    { id: 4, titulo: 'Backup automático na nuvem', desc: 'Google Fotos / iCloud', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Liberar espaço sem perder fotos', desc: 'Limpar com segurança', tempo: 8, xp: 50 },
    { id: 6, titulo: 'Compartilhar álbum com a família', desc: 'Todos veem as memórias', tempo: 7, xp: 50 },
    { id: 7, titulo: 'Projeto: backup completo + álbum', desc: 'Nunca mais perca uma foto', tempo: 15, xp: 90 },
  ],

  // ---------- MERCADO & ESPECIALIZAÇÃO ----------
  'pc-excel': [
    { id: 1, titulo: 'Conhecendo a planilha', desc: 'Interface, células, linhas, colunas', tempo: 8, xp: 30 },
    { id: 2, titulo: 'Digitando seus primeiros dados', desc: 'Como entrar dados e corrigir', tempo: 6, xp: 30 },
    { id: 3, titulo: 'Formatando células', desc: 'Negrito, alinhamento, fonte', tempo: 10, xp: 40 },
    { id: 4, titulo: 'Bordas, cores e tabelas', desc: 'Planilha bonita e legível', tempo: 7, xp: 40 },
    { id: 5, titulo: 'Sua primeira fórmula: SOMA', desc: 'O segredo das planilhas vivas', tempo: 15, xp: 60 },
    { id: 6, titulo: 'Subtração, multiplicação, divisão', desc: 'Outras operações essenciais', tempo: 10, xp: 50 },
    { id: 7, titulo: 'MÉDIA, MÁXIMO e MÍNIMO', desc: 'Funções de análise rápida', tempo: 12, xp: 60 },
    { id: 8, titulo: 'Números: R$, % e datas', desc: 'Deixe os números legíveis', tempo: 9, xp: 50 },
    { id: 9, titulo: 'Filtros e classificação', desc: 'Achar o que importa numa lista', tempo: 11, xp: 60 },
    { id: 10, titulo: 'Congelar painéis', desc: 'Cabeçalho visível ao rolar', tempo: 5, xp: 30 },
    { id: 11, titulo: 'Seu primeiro gráfico', desc: 'Números em visual claro', tempo: 12, xp: 70 },
    { id: 12, titulo: 'PROCV: o queridinho do mercado', desc: 'Buscar dados entre tabelas', tempo: 18, xp: 100 },
    { id: 13, titulo: 'Salvar, exportar e compartilhar', desc: 'XLSX, PDF e links', tempo: 8, xp: 40 },
    { id: 14, titulo: 'Projeto: Controle Mensal Completo', desc: 'Use tudo numa planilha real', tempo: 30, xp: 150 },
  ],
  'pc-ia': [
    { id: 1, titulo: 'O que a IA faz (e o que não faz)', desc: 'Expectativa realista e segura', tempo: 8, xp: 40 },
    { id: 2, titulo: 'O pedido perfeito (prompt)', desc: 'Como pedir e receber bom resultado', tempo: 10, xp: 60 },
    { id: 3, titulo: 'Escrever e melhorar e-mails', desc: 'IA como sua revisora', tempo: 9, xp: 50 },
    { id: 4, titulo: 'Resumir textos longos', desc: 'Documentos em pontos claros', tempo: 9, xp: 50 },
    { id: 5, titulo: 'Traduzir e revisar', desc: 'Ortografia e outros idiomas', tempo: 8, xp: 50 },
    { id: 6, titulo: 'Projeto: resolva uma demanda com IA', desc: 'Do problema à resposta pronta', tempo: 18, xp: 100 },
  ],
  'amb-com': [
    { id: 1, titulo: 'Criar um e-mail profissional', desc: 'Endereço sério e organizado', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Anatomia de um bom e-mail', desc: 'Assunto, saudação, fecho', tempo: 9, xp: 50 },
    { id: 3, titulo: 'Anexos, Cc e Cco', desc: 'Sem vacilar na cópia', tempo: 8, xp: 50 },
    { id: 4, titulo: 'Pastas, filtros e marcadores', desc: 'Caixa de entrada sob controle', tempo: 8, xp: 50 },
    { id: 5, titulo: 'Etiqueta corporativa', desc: 'Tom e prazo de resposta', tempo: 8, xp: 50 },
    { id: 6, titulo: 'Escrita clara, direto ao ponto', desc: 'Menos rodeio, mais resultado', tempo: 9, xp: 60 },
    { id: 7, titulo: 'E-mail x WhatsApp x ligação', desc: 'Qual canal pra cada situação', tempo: 7, xp: 40 },
    { id: 8, titulo: 'Projeto: responda 3 situações reais', desc: 'Casos de trabalho por e-mail', tempo: 18, xp: 100 },
  ],
  'pc-job': [
    { id: 1, titulo: 'Pra que serve o LinkedIn 40+', desc: 'Por que vale muito a pena', tempo: 7, xp: 30 },
    { id: 2, titulo: 'Foto, título e resumo', desc: 'A primeira impressão que converte', tempo: 10, xp: 50 },
    { id: 3, titulo: 'Experiências e habilidades', desc: 'Conte sua trajetória com força', tempo: 10, xp: 60 },
    { id: 4, titulo: 'Currículo moderno', desc: 'O que entra e o que sai hoje', tempo: 9, xp: 50 },
    { id: 5, titulo: 'Montando o currículo', desc: 'No Word ou Canva, bonito', tempo: 12, xp: 70 },
    { id: 6, titulo: 'Procurar vagas e se candidatar', desc: 'Filtros e candidatura certa', tempo: 9, xp: 50 },
    { id: 7, titulo: 'Mensagem pra recrutador', desc: 'Networking educado que funciona', tempo: 8, xp: 50 },
    { id: 8, titulo: 'Projeto: perfil + currículo em PDF', desc: 'Pronto pra enviar (vai pro portfólio)', tempo: 25, xp: 120 },
  ],
  'mkt-carreira': [
    { id: 1, titulo: 'Ofensiva de carreira: a ideia', desc: 'Ir atrás em vez de esperar', tempo: 8, xp: 40 },
    { id: 2, titulo: 'Descobrir seu valor no mercado', desc: 'Forças, conquistas e provas', tempo: 9, xp: 50 },
    { id: 3, titulo: 'Pitch de 30 segundos', desc: 'Quem é você, em uma frase forte', tempo: 9, xp: 60 },
    { id: 4, titulo: 'Mapear empresas e contatos', desc: 'Onde estão as oportunidades', tempo: 9, xp: 50 },
    { id: 5, titulo: 'Abordar sem medo', desc: 'Mensagem fria que recebe resposta', tempo: 10, xp: 60 },
    { id: 6, titulo: 'Entrevista: preparo e respostas', desc: 'As perguntas que sempre caem', tempo: 12, xp: 80 },
    { id: 7, titulo: 'Negociar salário e proposta', desc: 'Pedir o que você merece', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Projeto: campanha de busca ativa', desc: 'Plano de 2 semanas pra agir', tempo: 20, xp: 120 },
  ],
  'amb-final': [
    { id: 1, titulo: 'Segunda: a planilha de controle', desc: 'Demanda do chefe usando Excel', tempo: 20, xp: 100 },
    { id: 2, titulo: 'Terça: o ofício por e-mail', desc: 'Word + e-mail profissional', tempo: 20, xp: 100 },
    { id: 3, titulo: 'Quarta: reunião e ata', desc: 'Conduzir e registrar', tempo: 20, xp: 100 },
    { id: 4, titulo: 'Quinta: candidatura a vaga', desc: 'LinkedIn + currículo na prática', tempo: 20, xp: 100 },
    { id: 5, titulo: 'Sexta: entregar o portfólio', desc: 'Reúna tudo e seja promovido', tempo: 25, xp: 150 },
  ],

  // ---------- SEGURANÇA ----------
  'amb-seg': [
    { id: 1, titulo: 'Senhas fortes de verdade', desc: 'Por que reusar é perigoso', tempo: 9, xp: 40 },
    { id: 2, titulo: 'Gerenciador de senhas', desc: 'Nunca mais esquecer (nem anotar)', tempo: 10, xp: 60 },
    { id: 3, titulo: 'Verificação em duas etapas (2FA)', desc: 'A trava que segura o invasor', tempo: 10, xp: 60 },
    { id: 4, titulo: 'Reconhecer phishing', desc: 'E-mails e mensagens falsas', tempo: 10, xp: 70 },
    { id: 5, titulo: 'Golpes por telefone e SMS', desc: 'Vishing e smishing no Brasil', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Wi-Fi público: o que evitar', desc: 'Riscos reais e como se proteger', tempo: 8, xp: 50 },
    { id: 7, titulo: 'Se você caiu num golpe', desc: 'Plano de ação imediato', tempo: 9, xp: 60 },
    { id: 8, titulo: 'Privacidade nas redes', desc: 'O que você expõe sem perceber', tempo: 9, xp: 50 },
    { id: 9, titulo: 'Projeto: pente-fino de segurança', desc: 'Blinde todas as suas contas', tempo: 20, xp: 120 },
  ],
  'sec-ataque': [
    { id: 1, titulo: 'Pensar como golpista pra se defender', desc: 'A mentalidade do ataque (ética)', tempo: 8, xp: 40 },
    { id: 2, titulo: 'Engenharia social: a arma nº1', desc: 'Por que enganam a pessoa, não a máquina', tempo: 10, xp: 70 },
    { id: 3, titulo: 'Os 6 gatilhos que te fazem cair', desc: 'Urgência, autoridade, medo, ganância...', tempo: 11, xp: 80 },
    { id: 4, titulo: 'Anatomia de um golpe de phishing', desc: 'Desmontando a fraude passo a passo', tempo: 12, xp: 80 },
    { id: 5, titulo: 'Como golpistas descobrem seus dados', desc: 'Vazamentos, redes e OSINT do mal', tempo: 11, xp: 80 },
    { id: 6, titulo: 'O golpe do falso suporte', desc: 'Quando "te ajudar" é o disfarce', tempo: 10, xp: 70 },
    { id: 7, titulo: 'Fraudes com IA: voz e vídeo falsos', desc: 'Deepfake e clonagem de voz', tempo: 11, xp: 90 },
    { id: 8, titulo: 'Simulado: você consegue não cair?', desc: 'Teste com 5 ataques reais', tempo: 12, xp: 90 },
    { id: 9, titulo: 'Projeto: vira o defensor da família', desc: 'Ensine e proteja quem você ama', tempo: 18, xp: 120 },
  ],

  // ---------- INGLÊS (A1) ----------
  'en-a1-basico': [
    { id: 1, titulo: 'Hello! Cumprimentos e despedidas', desc: 'Hi, hello, goodbye, please, thank you', tempo: 8, xp: 30 },
    { id: 2, titulo: 'O alfabeto e soletrar', desc: 'ABC em inglês e "How do you spell?"', tempo: 9, xp: 40 },
    { id: 3, titulo: 'O verbo "to be" (am/is/are)', desc: 'I am, you are, he is — o verbo mais usado', tempo: 12, xp: 60 },
    { id: 4, titulo: 'Perguntas e respostas básicas', desc: 'What’s your name? Where are you from?', tempo: 10, xp: 60 },
    { id: 5, titulo: 'Sim, não e palavras essenciais', desc: 'Yes/no, this/that, articles a/an', tempo: 9, xp: 50 },
    { id: 6, titulo: 'Projeto: apresente-se em inglês', desc: 'Monte e fale sua apresentação', tempo: 15, xp: 90 },
  ],
  'en-a1-pessoas': [
    { id: 1, titulo: 'Família (family)', desc: 'Mother, father, brother, sister...', tempo: 9, xp: 40 },
    { id: 2, titulo: 'Possessivos: my, your, his, her', desc: 'Dizer de quem é (my mother)', tempo: 10, xp: 50 },
    { id: 3, titulo: 'Países e nacionalidades', desc: 'Brazil/Brazilian, country/nationality', tempo: 9, xp: 50 },
    { id: 4, titulo: 'Descrever pessoas (adjetivos)', desc: 'Tall, short, kind, happy...', tempo: 10, xp: 60 },
    { id: 5, titulo: 'Have got: o que você tem', desc: 'I have a sister; have/has', tempo: 11, xp: 60 },
    { id: 6, titulo: 'Projeto: descreva sua família', desc: 'Escreva e fale sobre os seus', tempo: 15, xp: 90 },
  ],
  'en-a1-numeros': [
    { id: 1, titulo: 'Números 0–20', desc: 'Zero a twenty', tempo: 8, xp: 40 },
    { id: 2, titulo: 'Dezenas, centenas e idade', desc: 'Thirty, hundred; "How old are you?"', tempo: 10, xp: 50 },
    { id: 3, titulo: 'As horas (telling the time)', desc: 'What time is it? o’clock, half past', tempo: 11, xp: 60 },
    { id: 4, titulo: 'Dias, meses e datas', desc: 'Monday, January, dates', tempo: 9, xp: 50 },
    { id: 5, titulo: 'Cores (colours)', desc: 'Red, blue, green... e descrever', tempo: 7, xp: 40 },
    { id: 6, titulo: 'Projeto: agenda e perfil em inglês', desc: 'Use números, horas e datas', tempo: 15, xp: 90 },
  ],
  'en-a1-rotina': [
    { id: 1, titulo: 'Verbos do dia a dia', desc: 'Wake up, work, eat, sleep...', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Present simple (afirmativo)', desc: 'I work, she works (o "s" da 3ª pessoa)', tempo: 12, xp: 60 },
    { id: 3, titulo: 'Negativo e perguntas (do/does)', desc: 'I don’t..., Do you...?', tempo: 12, xp: 70 },
    { id: 4, titulo: 'Advérbios de frequência', desc: 'Always, usually, never', tempo: 10, xp: 60 },
    { id: 5, titulo: 'Falar de horários da rotina', desc: 'I get up at 7 / on Mondays', tempo: 10, xp: 60 },
    { id: 6, titulo: 'Projeto: descreva seu dia', desc: 'Escreva sua rotina em inglês', tempo: 18, xp: 100 },
  ],

  // ---------- INGLÊS (A2) ----------
  'en-a2-comida': [
    { id: 1, titulo: 'Comidas e bebidas', desc: 'Food and drinks: bread, water, coffee...', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Contáveis e incontáveis', desc: 'some/any, a/an, much/many', tempo: 12, xp: 70 },
    { id: 3, titulo: 'Gostos: like, love, hate', desc: 'I like coffee; do you like...?', tempo: 10, xp: 60 },
    { id: 4, titulo: 'No restaurante (pedir)', desc: 'I’d like..., Can I have...?', tempo: 11, xp: 70 },
    { id: 5, titulo: 'Projeto: peça uma refeição', desc: 'Simule um pedido em inglês', tempo: 15, xp: 90 },
  ],
  'en-a2-lugares': [
    { id: 1, titulo: 'Lugares da cidade', desc: 'Bank, hospital, station, market...', tempo: 9, xp: 50 },
    { id: 2, titulo: 'There is / There are', desc: 'Dizer o que existe num lugar', tempo: 11, xp: 60 },
    { id: 3, titulo: 'Preposições de lugar', desc: 'in, on, under, next to, between', tempo: 10, xp: 60 },
    { id: 4, titulo: 'Pedir e dar direções', desc: 'How do I get to...? Turn left/right', tempo: 12, xp: 70 },
    { id: 5, titulo: 'No aeroporto e hotel', desc: 'Viajar: check-in, booking, room', tempo: 11, xp: 70 },
    { id: 6, titulo: 'Projeto: guie um turista', desc: 'Dê direções em inglês', tempo: 15, xp: 90 },
  ],
  'en-a2-passado': [
    { id: 1, titulo: 'Was / were (passado de to be)', desc: 'I was, they were', tempo: 10, xp: 60 },
    { id: 2, titulo: 'Past simple: verbos regulares', desc: 'worked, played (o "-ed")', tempo: 12, xp: 70 },
    { id: 3, titulo: 'Verbos irregulares comuns', desc: 'went, had, saw, did...', tempo: 12, xp: 80 },
    { id: 4, titulo: 'Negativo e perguntas (didn’t/did)', desc: 'I didn’t..., Did you...?', tempo: 12, xp: 70 },
    { id: 5, titulo: 'Projeto: conte seu fim de semana', desc: 'Narre o passado em inglês', tempo: 18, xp: 100 },
  ],
  'en-a2-planos': [
    { id: 1, titulo: 'Going to (planos)', desc: 'I’m going to travel', tempo: 11, xp: 60 },
    { id: 2, titulo: 'Will (decisões e previsões)', desc: 'I’ll help; it will rain', tempo: 11, xp: 70 },
    { id: 3, titulo: 'Present continuous (agora/futuro)', desc: 'I’m working; meeting tomorrow', tempo: 11, xp: 70 },
    { id: 4, titulo: 'Convites e sugestões', desc: 'Let’s..., Would you like to...?', tempo: 10, xp: 60 },
    { id: 5, titulo: 'Projeto: planeje uma viagem', desc: 'Escreva seus planos em inglês', tempo: 18, xp: 100 },
  ],

  // ---------- INGLÊS (B1) ----------
  'en-b1-conversa': [
    { id: 1, titulo: 'Present perfect (já/nunca)', desc: 'Have you ever...? I’ve been to...', tempo: 13, xp: 80 },
    { id: 2, titulo: 'Present perfect x past simple', desc: 'Quando usar cada um', tempo: 13, xp: 90 },
    { id: 3, titulo: 'Dar opiniões e concordar', desc: 'I think..., I agree, in my opinion', tempo: 11, xp: 70 },
    { id: 4, titulo: 'Manter a conversa fluindo', desc: 'Conectores e respostas naturais', tempo: 11, xp: 80 },
    { id: 5, titulo: 'Perguntas indiretas (B1)', desc: 'Can you tell me where...?', tempo: 12, xp: 80 },
    { id: 6, titulo: 'Projeto: uma conversa real', desc: 'Simule um papo de 2 minutos', tempo: 18, xp: 110 },
  ],
  'en-b1-trabalho': [
    { id: 1, titulo: 'Vocabulário do trabalho', desc: 'Job, skills, experience, deadline', tempo: 10, xp: 70 },
    { id: 2, titulo: 'Currículo (CV/resume) em inglês', desc: 'Estrutura e frases de impacto', tempo: 13, xp: 90 },
    { id: 3, titulo: 'Entrevista de emprego em inglês', desc: '"Tell me about yourself"', tempo: 13, xp: 90 },
    { id: 4, titulo: 'E-mails profissionais em inglês', desc: 'Saudações, pedidos, fechos', tempo: 12, xp: 80 },
    { id: 5, titulo: 'Reuniões e small talk', desc: 'Frases pra reuniões e conversa leve', tempo: 11, xp: 80 },
    { id: 6, titulo: 'Projeto: CV + pitch em inglês', desc: 'Monte seu material profissional', tempo: 20, xp: 120 },
  ],
  'en-b1-mundo': [
    { id: 1, titulo: 'Primeira condicional (if + will)', desc: 'If it rains, I’ll stay home', tempo: 12, xp: 80 },
    { id: 2, titulo: 'Segunda condicional (if + would)', desc: 'If I had money, I would travel', tempo: 13, xp: 90 },
    { id: 3, titulo: 'Conectar ideias (linking words)', desc: 'because, although, however, so', tempo: 11, xp: 80 },
    { id: 4, titulo: 'Narrar uma história', desc: 'Past + conectores pra contar algo', tempo: 12, xp: 90 },
    { id: 5, titulo: 'Entender notícias e textos', desc: 'Estratégias de leitura B1', tempo: 12, xp: 90 },
    { id: 6, titulo: 'Projeto final: sua história em inglês', desc: 'Escreva e conte algo da sua vida', tempo: 20, xp: 130 },
  ],
};

// ---------------------------------------------------------------------------
// NÍVEIS DE CARREIRA
// ---------------------------------------------------------------------------
export const NIVEIS = ['Estagiário', 'Assistente Júnior', 'Assistente Pleno', 'Analista', 'Analista Sênior', 'Coordenador'];
export const XP_POR_NIVEL = [0, 600, 2000, 4500, 8000, 13000];

// ---------------------------------------------------------------------------
// OFENSIVA (streak estilo Duolingo)
// Regra de atualização aplicada no carregamento do app:
//  - mesma data de ultimaVisita  → mantém
//  - ultimaVisita == ontem        → streak + 1
//  - buraco (>1 dia)              → streak volta a 0 (ou usa "escudo" se houver)
// "Escudo de ofensiva" (streakFreeze): protege 1 dia perdido. Ganha 1 a cada 10 dias.
// ---------------------------------------------------------------------------
export const OFENSIVA = {
  metaDiaria: 1,            // nº mínimo de missões/dia pra manter a ofensiva
  marcos: [3, 7, 14, 30, 60, 100, 180, 365], // dias que rendem troféu
  escudo: { ganhaACada: 10, maximo: 2 },      // proteção contra 1 dia perdido
};

/** Calcula o novo estado de ofensiva. Datas no formato 'YYYY-MM-DD'. */
export function atualizarOfensiva(user, hojeISO) {
  const hoje = hojeISO || new Date().toISOString().split('T')[0];
  const ultima = user.ultimaVisita;
  if (!ultima) return { ...user, streak: Math.max(1, user.streak || 0), ultimaVisita: hoje };
  if (ultima === hoje) return user;
  const d1 = new Date(ultima + 'T00:00:00');
  const d2 = new Date(hoje + 'T00:00:00');
  const difDias = Math.round((d2 - d1) / 86400000);
  if (difDias === 1) return { ...user, streak: (user.streak || 0) + 1, ultimaVisita: hoje };
  // buraco: tenta usar escudo
  if ((user.escudos || 0) > 0) {
    return { ...user, escudos: user.escudos - 1, ultimaVisita: hoje };
  }
  return { ...user, streak: 0, ultimaVisita: hoje };
}

// ---------------------------------------------------------------------------
// TROFÉUS (achievements). `regra` é avaliada por avaliarTrofeus().
// tipo: 'marco' | 'ofensiva' | 'dominio' | 'comportamento' | 'especial'
// ---------------------------------------------------------------------------
export const TROFEUS = [
  // Marcos de missões
  { id: 'primeira-missao', nome: 'Primeira Missão', desc: 'Você começou sua jornada', tipo: 'marco', regra: { missoes: 1 } },
  { id: 'dez-missoes',     nome: 'Dez de Lá',       desc: 'Concluiu 10 missões', tipo: 'marco', regra: { missoes: 10 } },
  { id: 'cinquenta-missoes',nome: 'Meio Caminho',   desc: 'Concluiu 50 missões', tipo: 'marco', regra: { missoes: 50 } },
  { id: 'cem-missoes',     nome: 'Centurião',       desc: 'Concluiu 100 missões', tipo: 'marco', regra: { missoes: 100 } },

  // Ofensiva (streak)
  { id: 'ofensiva-3',   nome: 'Pegando Ritmo',   desc: '3 dias seguidos', tipo: 'ofensiva', regra: { streak: 3 } },
  { id: 'ofensiva-7',   nome: 'Semana de Fogo',  desc: '7 dias seguidos', tipo: 'ofensiva', regra: { streak: 7 } },
  { id: 'ofensiva-30',  nome: 'Mês Imparável',   desc: '30 dias seguidos', tipo: 'ofensiva', regra: { streak: 30 } },
  { id: 'ofensiva-100', nome: 'Lenda da Ofensiva',desc: '100 dias seguidos', tipo: 'ofensiva', regra: { streak: 100 } },

  // Domínio de trilha (conclui todas as missões da trilha)
  { id: 'dom-pc-fund',  nome: 'Fundador',        desc: 'Concluiu Fundamentos do Computador', tipo: 'dominio', regra: { trilha: 'pc-fund' } },
  { id: 'dom-pc-excel', nome: 'Calculista Pleno',desc: 'Concluiu Excel & Sheets', tipo: 'dominio', regra: { trilha: 'pc-excel' } },
  { id: 'dom-pc-word',  nome: 'Mestre do Word',  desc: 'Concluiu Word & Docs', tipo: 'dominio', regra: { trilha: 'pc-word' } },
  { id: 'dom-pc-job',   nome: 'Networker',       desc: 'Concluiu LinkedIn & Currículo', tipo: 'dominio', regra: { trilha: 'pc-job' } },
  { id: 'dom-mob-pix',  nome: 'PIX Blindado',    desc: 'Concluiu Banco e PIX', tipo: 'dominio', regra: { trilha: 'mob-pix' } },
  { id: 'dom-mob-gov',  nome: 'Cidadão Digital', desc: 'Concluiu Gov.br', tipo: 'dominio', regra: { trilha: 'mob-gov' } },
  { id: 'dom-amb-seg',  nome: 'Guardião Digital',desc: 'Concluiu Defesa Digital', tipo: 'dominio', regra: { trilha: 'amb-seg' } },
  { id: 'dom-sec-ataque',nome: 'Caça-Golpes',    desc: 'Concluiu Como o Golpista Pensa', tipo: 'dominio', regra: { trilha: 'sec-ataque' } },

  // Domínio de módulo (conclui todas as trilhas do módulo)
  { id: 'mod-computador',nome: 'Dono do PC',     desc: 'Completou o módulo Computador', tipo: 'especial', regra: { modulo: 'computador' } },
  { id: 'mod-celular',  nome: 'Mago do Celular', desc: 'Completou o módulo Celular', tipo: 'especial', regra: { modulo: 'celular' } },
  { id: 'mod-mercado',  nome: 'Pronto pro Mercado',desc: 'Completou o módulo Mercado', tipo: 'especial', regra: { modulo: 'mercado' } },
  { id: 'mod-seguranca',nome: 'Inviolável',      desc: 'Completou o módulo Segurança', tipo: 'especial', regra: { modulo: 'seguranca' } },

  // Troféus PRÓPRIOS do Inglês (níveis CEFR + domínio)
  { id: 'en-first-words', nome: 'First Words',    desc: 'Concluiu sua 1ª missão de inglês', tipo: 'ingles', regra: { trilha: 'en-a1-basico', missaoMin: 1 } },
  { id: 'en-a1',          nome: 'A1 Achiever',    desc: 'Concluiu todas as trilhas A1 de inglês', tipo: 'ingles', regra: { trilhas: ['en-a1-basico','en-a1-pessoas','en-a1-numeros','en-a1-rotina'] } },
  { id: 'en-a2',          nome: 'A2 Explorer',    desc: 'Concluiu todas as trilhas A2 de inglês', tipo: 'ingles', regra: { trilhas: ['en-a2-comida','en-a2-lugares','en-a2-passado','en-a2-planos'] } },
  { id: 'en-b1',          nome: 'B1 Speaker',     desc: 'Concluiu todas as trilhas B1 de inglês', tipo: 'ingles', regra: { trilhas: ['en-b1-conversa','en-b1-trabalho','en-b1-mundo'] } },
  { id: 'en-dom-trabalho',nome: 'Business English',desc: 'Concluiu Inglês para o Trabalho', tipo: 'ingles', regra: { trilha: 'en-b1-trabalho' } },
  { id: 'mod-ingles',     nome: 'Fluent Mindset', desc: 'Completou o módulo Inglês (A1→B1)', tipo: 'especial', regra: { modulo: 'ingles' } },
];

/** Conta missões concluídas de uma trilha. */
export function missoesFeitasNaTrilha(progress, trilhaId) {
  return progress.missoesCompletas.filter(m => m.startsWith(trilhaId + '-')).length;
}

/** Retorna os IDs de troféus que o progresso atual já merece. */
export function avaliarTrofeus(progress) {
  const total = progress.missoesCompletas.length;
  const streak = progress.user.streak || 0;
  const trilhaCompleta = (tid) => {
    const ms = MISSOES[tid];
    return ms && ms.every(m => progress.missoesCompletas.includes(`${tid}-${m.id}`));
  };
  const moduloCompleto = (mid) =>
    TRILHAS.filter(t => t.modulo === mid).every(t => trilhaCompleta(t.id));
  const missoesNaTrilha = (tid) => missoesFeitasNaTrilha(progress, tid);

  const ganhos = [];
  for (const t of TROFEUS) {
    const r = t.regra;
    const ok =
      (r.missoes && total >= r.missoes) ||
      (r.streak && streak >= r.streak) ||
      (r.trilha && r.missaoMin && missoesNaTrilha(r.trilha) >= r.missaoMin) ||
      (r.trilha && !r.missaoMin && trilhaCompleta(r.trilha)) ||
      (r.trilhas && r.trilhas.every(trilhaCompleta)) ||
      (r.modulo && moduloCompleto(r.modulo));
    if (ok) ganhos.push(t.id);
  }
  return ganhos;
}

/** Recalcula o nível de carreira a partir do XP. */
export function nivelPorXP(xp) {
  let nivel = 1;
  for (let i = 0; i < XP_POR_NIVEL.length; i++) {
    if (xp >= XP_POR_NIVEL[i]) nivel = i + 1;
  }
  return nivel;
}
