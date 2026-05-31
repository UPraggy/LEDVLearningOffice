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
  { id: 'sec-pix',   modulo: 'seguranca', vertente: 'ambos', ordem: 3, nome: 'Golpes do PIX', desc: 'Falso comprovante, devolução, QR, falsa central, MED', iconeNome: 'QrCode', cor: '#1B2A4E' },
  { id: 'sec-whatsapp', modulo: 'seguranca', vertente: 'ambos', ordem: 4, nome: 'Clonagem e Sequestro do WhatsApp', desc: 'Código de 6 dígitos, falso parente, SIM swap, PIN, recuperação', iconeNome: 'MessageCircle', cor: '#3D5A3D' },
  { id: 'sec-banco', modulo: 'seguranca', vertente: 'ambos', ordem: 5, nome: 'Segurança no Banco e no Cartão', desc: 'Falsa central, phishing, clonagem, boleto falso, cartão virtual', iconeNome: 'Landmark', cor: '#E55934' },
  { id: 'sec-compras', modulo: 'seguranca', vertente: 'ambos', ordem: 6, nome: 'Compras Online Sem Cair em Golpe', desc: 'Loja-fantasma, reputação/CNPJ, pagamento seguro, frete falso, direitos', iconeNome: 'ShoppingCart', cor: '#1B2A4E' },
  { id: 'sec-senhas-av', modulo: 'seguranca', vertente: 'ambos', ordem: 7, nome: 'Senhas Fortes, Vazamentos e Gerenciadores', desc: 'Frase-senha, gerenciador, vazamentos, 2FA, autenticador, passkeys', iconeNome: 'KeyRound', cor: '#3D5A3D' },
  { id: 'sec-priv', modulo: 'seguranca', vertente: 'ambos', ordem: 8, nome: 'Privacidade e Seus Dados Pessoais', desc: 'Permissões de apps, privacidade nas redes, LGPD, rastreamento, pegada digital', iconeNome: 'EyeOff', cor: '#E55934' },
  { id: 'sec-dispositivo', modulo: 'seguranca', vertente: 'ambos', ordem: 9, nome: 'Blindar Seu Aparelho', desc: 'Bloqueio, atualizações, fontes oficiais, malware, backup, perda e roubo', iconeNome: 'Smartphone', cor: '#1B2A4E' },
  { id: 'sec-redes', modulo: 'seguranca', vertente: 'ambos', ordem: 10, nome: 'Wi-Fi, Redes e Conexões Seguras', desc: 'Wi-Fi público, VPN, roteador, Bluetooth, HTTPS, rede falsa, QR codes', iconeNome: 'Wifi', cor: '#3D5A3D' },
  { id: 'sec-familia', modulo: 'seguranca', vertente: 'ambos', ordem: 11, nome: 'Proteger Quem a Gente Ama: Família e Idosos', desc: 'Golpes contra idosos, combinados de família, configurar aparelho, jovens online', iconeNome: 'Users', cor: '#E55934' },
  { id: 'sec-investe', modulo: 'seguranca', vertente: 'ambos', ordem: 12, nome: 'Golpes Financeiros: Investimento e Dinheiro Fácil', desc: 'Renda garantida, pirâmides, cripto/robôs falsos, renda extra falsa, mula financeira, como verificar', iconeNome: 'TrendingUp', cor: '#1B2A4E' },
  { id: 'sec-emprego', modulo: 'seguranca', vertente: 'ambos', ordem: 13, nome: 'Golpe de Emprego: Vagas Falsas e Falsas Seleções', desc: 'Vaga boa demais, taxa pra contratar, falso recrutador, dados/documentos, home office milagroso, falso RH', iconeNome: 'Briefcase', cor: '#3D5A3D' },
  { id: 'sec-romance', modulo: 'seguranca', vertente: 'ambos', ordem: 14, nome: 'Golpe do Amor: Relações Falsas e Chantagem', desc: 'Romance encenado, nunca aparece, pedido de dinheiro, sextorsão, investir junto, perfil clonado, namoro online seguro', iconeNome: 'HeartCrack', cor: '#E55934' },
  { id: 'sec-resposta', modulo: 'seguranca', vertente: 'ambos', ordem: 15, nome: 'Caí num Golpe: O Que Fazer Agora', desc: 'Primeiros minutos, banco e PIX, trocar senhas, recuperar contas, registrar e denunciar, avisar, monitorar, baque emocional', iconeNome: 'LifeBuoy', cor: '#1B2A4E' },

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
  'sec-pix': [
    { id: 1, titulo: 'Como o PIX funciona (e por que o golpista ama)', desc: 'Instantâneo e irreversível', tempo: 9, xp: 50 },
    { id: 2, titulo: 'O golpe do falso comprovante', desc: 'Print não é dinheiro', tempo: 9, xp: 60 },
    { id: 3, titulo: 'PIX "por engano" e o golpe da devolução', desc: 'Nunca devolva por fora', tempo: 9, xp: 60 },
    { id: 4, titulo: 'QR Code e "Copia e Cola" adulterados', desc: 'O destino escondido no código', tempo: 10, xp: 70 },
    { id: 5, titulo: 'A falsa central: "faça um PIX de segurança"', desc: 'O golpe da conta-cofre', tempo: 10, xp: 70 },
    { id: 6, titulo: 'MED: sua arma de devolução depois do golpe', desc: 'Recuperar o PIX perdido', tempo: 9, xp: 70 },
    { id: 7, titulo: 'Limites, PIX noturno e configurações de defesa', desc: 'Diminua o teto do estrago', tempo: 9, xp: 60 },
    { id: 8, titulo: 'Simulado: 5 PIX chegando — pagar ou barrar?', desc: 'Treine o reflexo', tempo: 11, xp: 80 },
    { id: 9, titulo: 'Projeto: blinde seu PIX de ponta a ponta', desc: 'Pente-fino em camadas', tempo: 18, xp: 120 },
  ],
  'sec-whatsapp': [
    { id: 1, titulo: 'Clonagem x sequestro: os dois ataques', desc: 'Ativam sua conta, não copiam', tempo: 9, xp: 50 },
    { id: 2, titulo: 'O golpe do código de 6 dígitos', desc: 'Sua chave não se repassa', tempo: 9, xp: 60 },
    { id: 3, titulo: 'Ative a verificação em duas etapas (PIN)', desc: 'A trava que derruba o golpe', tempo: 10, xp: 70 },
    { id: 4, titulo: '"Oi, mudei de número" — o falso parente', desc: 'Confirme por voz', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Falso WhatsApp Business de loja e empresa', desc: 'Logo não prova identidade', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Grupos, links e mensagens que espalham golpe', desc: 'Pare a corrente em você', tempo: 9, xp: 60 },
    { id: 7, titulo: 'SIM swap: quando roubam seu número', desc: 'Sinal sumiu? Reaja já', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Recuperar um WhatsApp sequestrado', desc: 'Passo a passo da retomada', tempo: 10, xp: 80 },
    { id: 9, titulo: 'Projeto: blindagem total do WhatsApp', desc: 'App, hábito e rede', tempo: 18, xp: 120 },
  ],
  'sec-banco': [
    { id: 1, titulo: 'Como o golpista chega na sua conta', desc: 'As quatro portas de entrada', tempo: 9, xp: 50 },
    { id: 2, titulo: 'App do banco: senha, biometria e o que nunca compartilhar', desc: 'Camadas que só você atravessa', tempo: 9, xp: 60 },
    { id: 3, titulo: 'A falsa central do banco (golpe do telefone)', desc: 'Desligue e ligue no oficial', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Cartão: clonagem, skimming e aproximação', desc: 'Hábitos que cortam a cópia', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Compras online com cartão virtual', desc: 'Número descartável', tempo: 10, xp: 70 },
    { id: 6, titulo: 'Boleto falso e o golpe do código de barras', desc: 'Confira o beneficiário', tempo: 9, xp: 60 },
    { id: 7, titulo: 'Phishing bancário: SMS e e-mail "atualize sua conta"', desc: 'Nunca pelo link', tempo: 9, xp: 60 },
    { id: 8, titulo: 'Conferir extratos e contestar cobranças', desc: 'Vigiar e reagir', tempo: 10, xp: 70 },
    { id: 9, titulo: 'Projeto: blindagem da conta e dos cartões', desc: 'App, cartões e hábitos', tempo: 18, xp: 120 },
  ],

  'sec-compras': [
    { id: 1, titulo: 'A loja existe? Reputação e CNPJ', desc: 'Checagem rápida antes de comprar', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Preço bom demais: a loja-fantasma', desc: 'O desconto que é isca', tempo: 9, xp: 60 },
    { id: 3, titulo: 'Marketplace x site próprio: onde é mais seguro', desc: 'Use a proteção a seu favor', tempo: 9, xp: 60 },
    { id: 4, titulo: 'Pagamento seguro: o que usar e o que evitar', desc: 'Pague de um jeito reversível', tempo: 10, xp: 70 },
    { id: 5, titulo: 'Frete, alfândega e "pague pra liberar"', desc: 'O golpe da encomenda retida', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Lojas de Instagram e Facebook: o sinal de golpe', desc: 'Perfil bonito não é garantia', tempo: 9, xp: 60 },
    { id: 7, titulo: 'Não chegou, veio errado: seus direitos', desc: 'Arrependimento e reclamação', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Avaliações falsas e produtos enganosos', desc: 'Ler estrelas com olhar crítico', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: rotina de compra online segura', desc: 'Antes, durante e depois', tempo: 18, xp: 120 },
  ],

  'sec-senhas-av': [
    { id: 1, titulo: 'Por que senha boa não basta mais', desc: 'Os três pilares da defesa', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Criar e lembrar senhas fortes (frase-senha)', desc: 'Longa e imprevisível', tempo: 9, xp: 60 },
    { id: 3, titulo: 'Gerenciador de senhas: o cofre que lembra por você', desc: 'Únicas sem decorar', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Vazamentos: descubra se sua senha caiu', desc: 'Checar e reagir', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Verificação em duas etapas em tudo', desc: 'A defesa de maior retorno', tempo: 9, xp: 60 },
    { id: 6, titulo: 'App autenticador x SMS: qual é mais seguro', desc: 'Sem depender do número', tempo: 10, xp: 70 },
    { id: 7, titulo: 'Passkeys: o login sem senha', desc: 'Imune a phishing', tempo: 9, xp: 60 },
    { id: 8, titulo: 'Perguntas de segurança e recuperação de conta', desc: 'A porta dos fundos', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: blindar seus logins principais', desc: 'Do e-mail às demais contas', tempo: 18, xp: 120 },
  ],
  'sec-priv': [
    { id: 1, titulo: 'Seus dados valem dinheiro: quem quer e por quê', desc: 'Privacidade é controle', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Permissões de apps: o que cada app pode ver', desc: 'Só o que a função exige', tempo: 10, xp: 70 },
    { id: 3, titulo: 'Configurar privacidade nas redes sociais', desc: 'Feche o que é aberto por padrão', tempo: 10, xp: 70 },
    { id: 4, titulo: 'O que não postar (e o que apagar do passado)', desc: 'O que a foto revela além da imagem', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Cookies, rastreamento e anúncios que te seguem', desc: 'Reduzir o perfil de navegação', tempo: 9, xp: 60 },
    { id: 6, titulo: 'LGPD: seus direitos sobre seus dados', desc: 'Acessar, corrigir, excluir, revogar', tempo: 10, xp: 70 },
    { id: 7, titulo: 'Pegada digital: o que existe sobre você na internet', desc: 'Auditar e reduzir', tempo: 9, xp: 60 },
    { id: 8, titulo: 'Localização e metadados das fotos', desc: 'A foto pode entregar onde você esteve', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: faxina de privacidade', desc: 'Aparelho, redes, navegação e pegada', tempo: 18, xp: 120 },
  ],
  'sec-dispositivo': [
    { id: 1, titulo: 'Bloqueio de tela e biometria: a primeira muralha', desc: 'PIN forte + biometria', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Atualizações: o conserto invisível que te protege', desc: 'Fechar falhas conhecidas', tempo: 9, xp: 50 },
    { id: 3, titulo: 'Instalar com segurança: só de lojas e sites oficiais', desc: 'A origem é a defesa', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Apps maliciosos e malware: como reconhecer', desc: 'Os sinais e como agir', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Antivírus e proteção do sistema: o que ajuda de verdade', desc: 'Sem cair no falso antivírus', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Backup: nunca perca fotos, contatos e documentos', desc: 'O seguro dos seus dados', tempo: 10, xp: 70 },
    { id: 7, titulo: 'Celular perdido ou roubado: o que configurar ANTES', desc: 'Localizar, bloquear, apagar', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Aparelho compartilhado, família e modo visitante', desc: 'Separar contas e limitar acesso', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: checklist de blindagem do aparelho', desc: 'Tudo junto e mantido', tempo: 18, xp: 120 },
  ],
  'sec-redes': [
    { id: 1, titulo: 'Wi-Fi público: o risco de redes abertas', desc: 'Rede aberta = ambiente público', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Como usar Wi-Fi público com segurança', desc: 'Checklist da rede aberta', tempo: 9, xp: 60 },
    { id: 3, titulo: 'VPN: o que é, quando ajuda (e quando não)', desc: 'Túnel protegido, não mágica', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Proteja seu Wi-Fi de casa (o roteador)', desc: 'Senhas fortes e atualização', tempo: 10, xp: 70 },
    { id: 5, titulo: 'Bluetooth e conexões: feche o que não usa', desc: 'Menos portas abertas', tempo: 9, xp: 50 },
    { id: 6, titulo: 'O cadeado e o HTTPS: o que ele garante (e o que não)', desc: 'Conexão protegida ≠ site honesto', tempo: 10, xp: 70 },
    { id: 7, titulo: 'Redes falsas e o "gêmeo do mal"', desc: 'Wi-Fi falso com nome real', tempo: 9, xp: 60 },
    { id: 8, titulo: 'QR Codes e links curtos: para onde isso leva?', desc: 'Conferir o destino antes', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: conexões seguras onde quer que você esteja', desc: 'Hábitos por ambiente', tempo: 18, xp: 120 },
  ],
  'sec-familia': [
    { id: 1, titulo: 'Por que golpistas miram idosos (e como ajudar sem assustar)', desc: 'Alvo por escolha, não por culpa', tempo: 9, xp: 50 },
    { id: 2, titulo: 'Os golpes que mais atingem os mais velhos', desc: 'Os roteiros que se repetem', tempo: 10, xp: 70 },
    { id: 3, titulo: 'Falso parente e falsa central: ajudando a reconhecer', desc: 'Parar e confirmar pelo canal certo', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Combinados de família: senha de segurança e "ligo de volta"', desc: 'Acordos antes do susto', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Configurar o aparelho de um familiar com segurança', desc: 'Seguro e ainda fácil de usar', tempo: 10, xp: 70 },
    { id: 6, titulo: 'Acompanhar sem invadir: autonomia e dignidade', desc: 'Apoio disponível, não vigilância', tempo: 9, xp: 60 },
    { id: 7, titulo: 'Crianças e adolescentes online: o outro lado da família', desc: 'Diálogo aberto, sem punir', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Controles parentais e conversas com os jovens', desc: 'Equilíbrio e autonomia segura', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: plano de proteção da família', desc: 'Pessoas, combinados e ferramentas', tempo: 18, xp: 120 },
  ],
  'sec-investe': [
    { id: 1, titulo: 'Renda garantida: por que retorno alto sem risco é golpe', desc: 'A regra de ferro do risco', tempo: 10, xp: 70 },
    { id: 2, titulo: 'Pirâmides e esquemas Ponzi: como reconhecer', desc: 'Dinheiro de quem entra depois', tempo: 10, xp: 70 },
    { id: 3, titulo: 'Cripto e "robôs que investem": as iscas da moda', desc: 'Tema novo, golpe velho', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Falso investimento com nome de banco ou famoso', desc: 'Nome e rosto roubados', tempo: 9, xp: 60 },
    { id: 5, titulo: 'Renda extra falsa: o golpe do "dinheiro fácil"', desc: 'Trabalho real paga você', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Mula financeira: quando te usam pra lavar dinheiro', desc: 'Sua conta, seu risco legal', tempo: 10, xp: 70 },
    { id: 7, titulo: 'Antes de investir: como verificar se é legítimo', desc: 'O que resiste à checagem', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Pressão, urgência e prova social fabricada', desc: 'As táticas que apressam você', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: seu filtro anti-golpe financeiro', desc: 'Promessa, estrutura, fonte e pressão', tempo: 18, xp: 120 },
  ],
  'sec-emprego': [
    { id: 1, titulo: 'A vaga boa demais: quando a oferta de emprego é isca', desc: 'Promete muito, exige pouco', tempo: 9, xp: 60 },
    { id: 2, titulo: 'Taxa pra conseguir a vaga: o sinal que nunca falha', desc: 'Quem contrata paga você', tempo: 10, xp: 70 },
    { id: 3, titulo: 'Falso recrutador e entrevista só por mensagem', desc: 'Apressado, anônimo, fora do oficial', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Dados e documentos: o que uma vaga pode pedir', desc: 'Sensível cedo demais = coleta', tempo: 10, xp: 70 },
    { id: 5, titulo: 'Home office milagroso e "ganhe muito de casa"', desc: 'Função clara x só resultado', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Falso RH de empresa conhecida', desc: 'Confiança vem da verificação', tempo: 9, xp: 60 },
    { id: 7, titulo: 'Como verificar se uma vaga é real', desc: 'O que resiste à checagem', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Caiu (ou quase): o que fazer depois', desc: 'Agir rápido, sem vergonha', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: busca de emprego à prova de golpe', desc: 'Checklist pra cada vaga', tempo: 18, xp: 120 },
  ],
  'sec-romance': [
    { id: 1, titulo: 'O golpe do amor: como ele funciona', desc: 'Romance encenado pra pedir dinheiro', tempo: 10, xp: 70 },
    { id: 2, titulo: 'Nunca aparece: o sinal central e os pretextos', desc: 'Vídeo ao vivo é o teste', tempo: 9, xp: 60 },
    { id: 3, titulo: 'O pedido de dinheiro: emergências e oportunidades', desc: 'Nunca enviar a quem nunca vi', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Sextorsão: chantagem com fotos íntimas', desc: 'Não pagar, preservar provas, buscar ajuda', tempo: 10, xp: 70 },
    { id: 5, titulo: '"Vamos investir juntos": amor que vira golpe financeiro', desc: 'Saldo na tela ≠ dinheiro real', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Perfil clonado e fotos roubadas: como checar', desc: 'Busca reversa e conjunto de pistas', tempo: 9, xp: 60 },
    { id: 7, titulo: 'Namorar online com segurança', desc: 'Ritmo, limites e rede de confiança', tempo: 10, xp: 70 },
    { id: 8, titulo: 'Quando alguém que você ama está sendo enganado', desc: 'Acolher sem julgar', tempo: 10, xp: 70 },
    { id: 9, titulo: 'Projeto: coração e dados protegidos', desc: 'Reconhecer, verificar, acolher', tempo: 18, xp: 120 },
  ],
  'sec-resposta': [
    { id: 1, titulo: 'Acabei de cair: os primeiros minutos', desc: 'Parar, identificar, agir na fonte, registrar', tempo: 10, xp: 70 },
    { id: 2, titulo: 'Mexeram no meu dinheiro: banco, contestação e PIX', desc: 'Canal oficial, MED do PIX, contestar cartão', tempo: 10, xp: 70 },
    { id: 3, titulo: 'Dei minha senha: troque tudo agora', desc: 'Senha exposta e as iguais, e-mail primeiro, 2FA', tempo: 10, xp: 70 },
    { id: 4, titulo: 'Invadiram minha conta: recuperar WhatsApp, e-mail e redes', desc: 'Reinstalar, código, desconectar sessões, avisar', tempo: 10, xp: 70 },
    { id: 5, titulo: 'Registrar e denunciar: boletim e canais certos', desc: 'BO, Delegacia Eletrônica, denúncia na plataforma', tempo: 9, xp: 60 },
    { id: 6, titulo: 'Avisar quem pode ser atingido', desc: 'Outro canal, priorizar os vulneráveis', tempo: 9, xp: 60 },
    { id: 7, titulo: 'Depois do golpe: monitorar e prevenir o próximo', desc: 'Extratos, CPF, golpe do ressarcimento', tempo: 9, xp: 60 },
    { id: 8, titulo: 'A vergonha não é sua: lidar com o baque emocional', desc: 'A culpa é de quem engana', tempo: 9, xp: 60 },
    { id: 9, titulo: 'Projeto: meu plano de resposta a golpes', desc: 'Conter, formalizar, avisar, cuidar', tempo: 18, xp: 120 },
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
/* Troféus: cada um tem `tipo` (categoria), `tier`, `mod` (cor visual), `icon` (nome do ícone único).
 * Cores: 'comp', 'cel', 'merc', 'seg', 'ing', 'vinho', 'marsala', 'magenta', 'roxo', 'ouro-rosa', 'honey'. */
export const TROFEUS = [
  // ===== MARCOS (cor: ouro rosa progressivo) =====
  { id: 'primeira-missao',  nome: 'Primeira Missão', desc: 'Você começou sua jornada',     tipo: 'marco', tier: 'bronze',  mod: 'ouro-rosa', icon: 'rocket',   regra: { missoes: 1 } },
  { id: 'dez-missoes',      nome: 'Aquecido',        desc: 'Concluiu 10 missões',          tipo: 'marco', tier: 'bronze',  mod: 'ouro-rosa', icon: 'flame',    regra: { missoes: 10 } },
  { id: 'vinte-missoes',    nome: 'Veterano',        desc: 'Concluiu 25 missões',          tipo: 'marco', tier: 'silver',  mod: 'honey',     icon: 'medal',    regra: { missoes: 25 } },
  { id: 'cinquenta-missoes',nome: 'Meio Caminho',    desc: 'Concluiu 50 missões',          tipo: 'marco', tier: 'gold',    mod: 'honey',     icon: 'flag',     regra: { missoes: 50 } },
  { id: 'cem-missoes',      nome: 'Centurião',       desc: 'Concluiu 100 missões',         tipo: 'marco', tier: 'gold',    mod: 'merc',      icon: 'crown',    regra: { missoes: 100 } },
  { id: 'dois-cem-missoes', nome: 'Maratonista',     desc: 'Concluiu 200 missões',         tipo: 'marco', tier: 'diamond', mod: 'magenta',   icon: 'trending', regra: { missoes: 200 } },

  // ===== OFENSIVA (cor: streak/honey) =====
  { id: 'ofensiva-3',   nome: 'Faísca',          desc: '3 dias seguidos',   tipo: 'ofensiva', tier: 'bronze',  mod: 'ouro-rosa', icon: 'spark',   regra: { streak: 3 } },
  { id: 'ofensiva-7',   nome: 'Semana de Fogo',  desc: '7 dias seguidos',   tipo: 'ofensiva', tier: 'silver',  mod: 'honey',     icon: 'flame',   regra: { streak: 7 } },
  { id: 'ofensiva-14',  nome: 'Fogueira',        desc: '14 dias seguidos',  tipo: 'ofensiva', tier: 'gold',    mod: 'merc',      icon: 'campfire',regra: { streak: 14 } },
  { id: 'ofensiva-30',  nome: 'Incêndio',        desc: '30 dias seguidos',  tipo: 'ofensiva', tier: 'gold',    mod: 'merc',      icon: 'fire',    regra: { streak: 30 } },
  { id: 'ofensiva-100', nome: 'Vulcão',          desc: '100 dias seguidos', tipo: 'ofensiva', tier: 'diamond', mod: 'vinho',     icon: 'volcano', regra: { streak: 100 } },
  { id: 'ofensiva-365', nome: 'Eterno',          desc: '365 dias seguidos', tipo: 'ofensiva', tier: 'mythic',  mod: 'magenta',   icon: 'infinity',regra: { streak: 365 } },

  // ===== COMPUTADOR (cor: navy) =====
  { id: 'dom-pc-fund',  nome: 'Fundador',           desc: 'Concluiu Fundamentos do Computador', tipo: 'dominio', tier: 'silver', mod: 'comp', icon: 'desktop',   regra: { trilha: 'pc-fund' } },
  { id: 'dom-pc-nav',   nome: 'Navegador Hábil',    desc: 'Concluiu Internet e Navegador',     tipo: 'dominio', tier: 'silver', mod: 'comp', icon: 'compass',   regra: { trilha: 'pc-nav' } },
  { id: 'dom-pc-word',  nome: 'Mestre do Word',     desc: 'Concluiu Word & Docs',              tipo: 'dominio', tier: 'silver', mod: 'comp', icon: 'document',  regra: { trilha: 'pc-word' } },
  { id: 'dom-pc-cloud', nome: 'Nas Nuvens',         desc: 'Concluiu Workspace na Nuvem',       tipo: 'dominio', tier: 'silver', mod: 'comp', icon: 'cloud',     regra: { trilha: 'pc-cloud' } },
  { id: 'dom-pc-meet',  nome: 'Hóspede Online',     desc: 'Concluiu Reuniões Online',          tipo: 'dominio', tier: 'silver', mod: 'comp', icon: 'video',     regra: { trilha: 'pc-meet' } },
  { id: 'dom-pc-excel', nome: 'Calculista Pleno',   desc: 'Concluiu Excel & Sheets',           tipo: 'dominio', tier: 'gold',   mod: 'comp', icon: 'sheet',     regra: { trilha: 'pc-excel' } },
  { id: 'dom-pc-ia',    nome: 'Sussurrador de IA',  desc: 'Concluiu IA pro Trabalho',          tipo: 'dominio', tier: 'gold',   mod: 'comp', icon: 'spark',     regra: { trilha: 'pc-ia' } },
  { id: 'dom-pc-job',   nome: 'Networker',          desc: 'Concluiu LinkedIn & Currículo',     tipo: 'dominio', tier: 'gold',   mod: 'comp', icon: 'briefcase', regra: { trilha: 'pc-job' } },

  // ===== CELULAR (cor: sky) =====
  { id: 'dom-mob-dom',   nome: 'Domador de Celular', desc: 'Concluiu Domínio do Celular',     tipo: 'dominio', tier: 'silver', mod: 'cel', icon: 'phone',      regra: { trilha: 'mob-dom' } },
  { id: 'dom-mob-wpp',   nome: 'WhatsApp Pro',       desc: 'Concluiu WhatsApp Profissional',  tipo: 'dominio', tier: 'silver', mod: 'cel', icon: 'chat',       regra: { trilha: 'mob-wpp' } },
  { id: 'dom-mob-pix',   nome: 'PIX Blindado',       desc: 'Concluiu Banco e PIX',            tipo: 'dominio', tier: 'gold',   mod: 'cel', icon: 'banknote',   regra: { trilha: 'mob-pix' } },
  { id: 'dom-mob-gov',   nome: 'Cidadão Digital',    desc: 'Concluiu Gov.br',                 tipo: 'dominio', tier: 'silver', mod: 'cel', icon: 'key',        regra: { trilha: 'mob-gov' } },
  { id: 'dom-mob-saude', nome: 'Saúde no Bolso',     desc: 'Concluiu Saúde Digital',          tipo: 'dominio', tier: 'silver', mod: 'cel', icon: 'heart',      regra: { trilha: 'mob-saude' } },
  { id: 'dom-mob-loc',   nome: 'GPS Humano',         desc: 'Concluiu Maps e Mobilidade',      tipo: 'dominio', tier: 'silver', mod: 'cel', icon: 'map',        regra: { trilha: 'mob-loc' } },
  { id: 'dom-mob-fotos', nome: 'Memorialista',       desc: 'Concluiu Fotos e Backup',         tipo: 'dominio', tier: 'silver', mod: 'cel', icon: 'camera',     regra: { trilha: 'mob-fotos' } },

  // ===== MERCADO (cor: coral) =====
  { id: 'dom-amb-com',     nome: 'Comunicador Pleno', desc: 'Concluiu Comunicação Profissional', tipo: 'dominio', tier: 'gold', mod: 'merc', icon: 'mail',       regra: { trilha: 'amb-com' } },
  { id: 'dom-mkt-carreira',nome: 'Ofensiva Aberta',   desc: 'Concluiu Ofensiva de Carreira',     tipo: 'dominio', tier: 'gold', mod: 'merc', icon: 'trending',   regra: { trilha: 'mkt-carreira' } },
  { id: 'dom-amb-final',   nome: 'Promovido',         desc: 'Concluiu o Projeto Final',          tipo: 'dominio', tier: 'diamond', mod: 'merc', icon: 'crown',   regra: { trilha: 'amb-final' } },

  // ===== SEGURANÇA (cor: sage) =====
  { id: 'dom-amb-seg',   nome: 'Guarda-costas',        desc: 'Concluiu Defesa Digital',          tipo: 'dominio', tier: 'gold', mod: 'seg', icon: 'shield',   regra: { trilha: 'amb-seg' } },
  { id: 'dom-sec-ataque',nome: 'Detetive de Golpes',   desc: 'Concluiu Como o Golpista Pensa',   tipo: 'dominio', tier: 'gold', mod: 'seg', icon: 'magnify',  regra: { trilha: 'sec-ataque' } },

  // ===== INGLÊS (cor: ing/roxo) =====
  { id: 'en-first-words', nome: 'First Words',     desc: 'Concluiu sua 1ª missão de inglês', tipo: 'ingles', tier: 'bronze', mod: 'ing',   icon: 'book',    regra: { trilha: 'en-a1-basico', missaoMin: 1 } },
  { id: 'en-a1',          nome: 'A1 Achiever',     desc: 'Todas as trilhas A1 de inglês',    tipo: 'ingles', tier: 'silver', mod: 'ing',   icon: 'flag',    regra: { trilhas: ['en-a1-basico','en-a1-pessoas','en-a1-numeros','en-a1-rotina'] } },
  { id: 'en-a2',          nome: 'A2 Explorer',     desc: 'Todas as trilhas A2 de inglês',    tipo: 'ingles', tier: 'gold',   mod: 'ing',   icon: 'globe',   regra: { trilhas: ['en-a2-comida','en-a2-lugares','en-a2-passado','en-a2-planos'] } },
  { id: 'en-b1',          nome: 'B1 Speaker',      desc: 'Todas as trilhas B1 de inglês',    tipo: 'ingles', tier: 'gold',   mod: 'roxo',  icon: 'mic',     regra: { trilhas: ['en-b1-conversa','en-b1-trabalho','en-b1-mundo'] } },
  { id: 'en-dom-trabalho',nome: 'Business English',desc: 'Concluiu Inglês para o Trabalho',  tipo: 'ingles', tier: 'gold',   mod: 'roxo',  icon: 'briefcase', regra: { trilha: 'en-b1-trabalho' } },

  // ===== ESPECIAIS (módulo completo) =====
  { id: 'mod-computador', nome: 'Dono do PC',         desc: 'Completou o módulo Computador',  tipo: 'especial', tier: 'diamond', mod: 'comp',  icon: 'medal',    regra: { modulo: 'computador' } },
  { id: 'mod-celular',    nome: 'Mago do Celular',    desc: 'Completou o módulo Celular',     tipo: 'especial', tier: 'diamond', mod: 'cel',   icon: 'medal',    regra: { modulo: 'celular' } },
  { id: 'mod-mercado',    nome: 'Pronto pro Mercado', desc: 'Completou o módulo Mercado',     tipo: 'especial', tier: 'diamond', mod: 'merc',  icon: 'medal',    regra: { modulo: 'mercado' } },
  { id: 'mod-seguranca',  nome: 'Inviolável',         desc: 'Completou o módulo Segurança',   tipo: 'especial', tier: 'diamond', mod: 'seg',   icon: 'medal',    regra: { modulo: 'seguranca' } },
  { id: 'mod-ingles',     nome: 'Fluent Mindset',     desc: 'Completou o módulo Inglês',      tipo: 'especial', tier: 'diamond', mod: 'ing',   icon: 'medal',    regra: { modulo: 'ingles' } },
  { id: 'pentadominio',   nome: 'Pentadomínio',       desc: '5 módulos dominados',            tipo: 'especial', tier: 'mythic',  mod: 'vinho', icon: 'penta',    regra: { modulos: ['computador','celular','mercado','seguranca','ingles'] } },
];

/** Calcula progresso 0-100 de um troféu (pra mostrar "quase lá"). */
export function progressoTrofeu(t, progress) {
  if (!t || !t.regra) return 0;
  const r = t.regra;
  const total = progress.missoesCompletas.length;
  const streak = progress.user?.streak || 0;
  if (r.missoes) return Math.min(100, Math.round(total / r.missoes * 100));
  if (r.streak) return Math.min(100, Math.round(streak / r.streak * 100));
  if (r.trilha && r.missaoMin) {
    const feitos = missoesFeitasNaTrilha(progress, r.trilha);
    return Math.min(100, Math.round(feitos / r.missaoMin * 100));
  }
  if (r.trilha) {
    const ms = MISSOES[r.trilha] || [];
    if (!ms.length) return 0;
    const feitos = ms.filter(m => progress.missoesCompletas.includes(`${r.trilha}-${m.id}`)).length;
    return Math.round(feitos / ms.length * 100);
  }
  if (r.trilhas) {
    const completos = r.trilhas.filter(tid => {
      const ms = MISSOES[tid] || [];
      return ms.length && ms.every(m => progress.missoesCompletas.includes(`${tid}-${m.id}`));
    });
    return Math.round(completos.length / r.trilhas.length * 100);
  }
  if (r.modulo) {
    const ts = TRILHAS.filter(x => x.modulo === r.modulo);
    if (!ts.length) return 0;
    const ok = ts.filter(t => {
      const ms = MISSOES[t.id] || [];
      return ms.length && ms.every(m => progress.missoesCompletas.includes(`${t.id}-${m.id}`));
    });
    return Math.round(ok.length / ts.length * 100);
  }
  if (r.modulos) {
    const completos = r.modulos.filter(mid => {
      const ts = TRILHAS.filter(x => x.modulo === mid);
      return ts.length && ts.every(t => (MISSOES[t.id] || []).every(m => progress.missoesCompletas.includes(`${t.id}-${m.id}`)));
    });
    return Math.round(completos.length / r.modulos.length * 100);
  }
  return 0;
}

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
