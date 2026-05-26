// ============================================================================
// CONTEÚDO — Gov.br e Serviços Públicos (mob-gov)
// Conta gov.br, níveis, assinatura digital, documentos, comprovantes, INSS.
// ============================================================================

export const MOB_GOV = {
  'mob-gov-1': {
    trilhaId: 'mob-gov', numero: 1, titulo: 'O que é a conta Gov.br',
    tempoTotal: 7, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Resolver coisa de governo significava fila, papelada e dia perdido. Hoje, uma única conta — a Gov.br — dá acesso a centenas de serviços públicos pelo celular. É a chave que abre quase tudo.',
      conceito: {
        titulo: 'Uma conta, centenas de serviços públicos',
        texto: 'A conta Gov.br é o login único do governo federal: com um só usuário e senha (seu CPF), você acessa INSS, Receita, CNH digital, comprovantes, e centenas de outros serviços, sem precisar criar conta em cada site. Ela também permite ASSINAR documentos digitalmente com validade legal. É, hoje, uma das ferramentas mais úteis pra qualquer cidadão — e poupa muito tempo e fila.',
      },
      estrutura: {
        titulo: 'O que a conta Gov.br destrava',
        partes: [
          { simbolo: '🆔', desc: 'Login único: um CPF e senha pra centenas de serviços (não precisa conta em cada um).' },
          { simbolo: '🏛️', desc: 'Serviços: INSS, Receita, CNH digital, comprovantes, benefícios, e muito mais.' },
          { simbolo: '✍️', desc: 'Assinatura digital gratuita: assine documentos com validade legal.' },
          { simbolo: '📱', desc: 'No celular: pelo app gov.br ou pelo site gov.br.' },
        ],
      },
      exemplo: {
        titulo: 'Antes x agora',
        celulas: [
          { ref: 'Antes', valor: 'Fila no INSS, cartório, Detran...' },
          { ref: 'Agora', valor: 'Tudo pelo celular com a conta Gov.br' },
          { ref: 'Exemplos', valor: 'CNH digital, extrato INSS, assinar contrato' },
          { ref: 'Custo', valor: 'Gratuito' },
        ],
        formula: 'Uma conta (CPF) → centenas de serviços, sem sair de casa',
        resultado: 'Resolver com o governo sem fila nem papelada.',
        comentario: 'A conta Gov.br é segura e oficial. Mas atenção: golpistas criam sites/apps FALSOS imitando o gov.br. Use só o app oficial "gov.br" ou o site gov.br (digitado por você).',
      },
      vocabulario: [
        { palavra: 'Conta Gov.br', def: 'Login único do governo federal pra acessar serviços públicos.' },
        { palavra: 'Login único', def: 'Um só usuário/senha que serve pra vários serviços.' },
        { palavra: 'Serviço público digital', def: 'Atendimento do governo feito pela internet, sem ir presencialmente.' },
      ],
      chave: [
        'Uma conta (seu CPF) dá acesso a centenas de serviços',
        'Permite assinar documentos com validade legal',
        'Use só o app/site OFICIAL — cuidado com cópias falsas',
      ],
      porque: 'A conta Gov.br é essencial pra cidadania moderna: resolve INSS, documentos, benefícios e assinaturas sem fila. Dominá-la dá autonomia e economiza tempo enorme — e o pesquisa de mercado aponta isso como habilidade-chave hoje.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos conhecer o Gov.br (só explorar; criamos/acessamos a conta na próxima missão).',
      passos: [
        'Na loja de apps, procure o app oficial "gov.br" (confira que é do "Governo Federal")',
        'Ou abra o navegador e digite VOCÊ MESMO: gov.br (não clique em links de terceiros)',
        'Veja a quantidade de serviços listados',
        'Procure a área de login/entrar (canto superior)',
        'Observe que o acesso é pelo CPF',
        'NÃO faça login ainda — só conheça a estrutura',
      ],
    },
    desafio: {
      cenario: 'Conheça o portal/app oficial Gov.br e entenda o que ele oferece, identificando como acessar com segurança.',
      requisitos: [
        'Localizei o app/site OFICIAL do Gov.br',
        'Entendi que é login único pelo CPF',
        'Vi exemplos de serviços disponíveis',
        'Sei que assina documentos com validade legal',
        'Sei reconhecer e evitar cópias falsas',
      ],
      dica: 'Regra de ouro contra golpe: nunca acesse o Gov.br por link de e-mail/SMS/WhatsApp. Sempre digite gov.br você mesmo no navegador, ou use o app oficial baixado da loja.',
    },
    validacao: [
      'Sei o que é a conta Gov.br',
      'Entendo o login único pelo CPF',
      'Conheço exemplos de serviços',
      'Sei que permite assinatura legal',
      'Sei acessar com segurança (oficial)',
    ],
  },

  'mob-gov-2': {
    trilhaId: 'mob-gov', numero: 2, titulo: 'Criar e acessar sua conta',
    tempoTotal: 9, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Vamos criar (ou acessar) sua conta Gov.br — a porta de entrada pra tudo. Se você já tem uma senha de algum serviço do governo, talvez já tenha conta sem saber.',
      conceito: {
        titulo: 'Criar a conta é o primeiro passo',
        texto: 'Criar a conta Gov.br é simples: você informa o CPF e segue as etapas de verificação (que confirmam que é você mesmo). Muita gente já tem conta sem saber — se você já acessou algum serviço do governo. O acesso pode ser por senha, e há formas mais seguras (como usar o app do seu banco pra validar). Uma vez criada, é só fazer login com CPF e senha.',
      },
      estrutura: {
        titulo: 'O caminho da conta',
        partes: [
          { simbolo: '🆔', desc: 'Informe o CPF: o sistema diz se você já tem conta ou precisa criar.' },
          { simbolo: '✅', desc: 'Verificação: responder perguntas, validar por banco, ou outras formas.' },
          { simbolo: '🔒', desc: 'Senha: crie uma senha forte (vamos aprofundar segurança no módulo próprio).' },
          { simbolo: '🏦', desc: 'Dica: validar pelo app do seu banco já cria uma conta de nível mais alto.' },
        ],
      },
      exemplo: {
        titulo: 'Formas de criar/validar',
        celulas: [
          { ref: 'Perguntas', valor: 'Responder dados pessoais (nível básico)' },
          { ref: 'Banco', valor: 'Validar pelo app do banco (nível mais alto!)' },
          { ref: 'Já tem?', valor: 'Digite o CPF e veja; talvez só recupere a senha' },
          { ref: 'Senha', valor: 'Crie uma forte e não compartilhe' },
        ],
        formula: 'CPF → verificação (banco é o melhor) → senha forte',
        resultado: 'Conta criada e pronta pra usar.',
        comentario: 'Validar pela conta do seu banco é o caminho mais fácil pra já chegar num nível alto (prata/ouro) — que destrava mais serviços. Veremos os níveis na próxima missão.',
      },
      vocabulario: [
        { palavra: 'CPF', def: 'Seu número de cadastro de pessoa física; é o usuário da conta Gov.br.' },
        { palavra: 'Verificação', def: 'Etapas que confirmam que você é você (perguntas, banco, etc.).' },
        { palavra: 'Recuperar senha', def: 'Redefinir a senha caso você já tenha conta e tenha esquecido.' },
      ],
      chave: [
        'A conta usa o CPF como usuário',
        'Validar pelo app do banco já cria conta de nível alto',
        'Talvez você já tenha conta — confira pelo CPF',
      ],
      porque: 'Ter a conta criada e acessível é o pré-requisito pra todos os serviços. Validar pelo banco poupa etapas e já destrava mais funções — um atalho que vale conhecer.',
    },
    pratica: {
      instrucao: 'No app/site OFICIAL do Gov.br, vamos criar ou acessar sua conta.',
      passos: [
        'Abra o app oficial gov.br (ou digite gov.br no navegador) e toque em "Entrar"',
        'Informe seu CPF',
        'Se já tiver conta: faça login (ou recupere a senha)',
        'Se não tiver: siga as etapas de criação',
        'Quando oferecerem, escolha validar pelo app do seu banco (mais fácil e nível alto)',
        'Crie/confirme uma senha forte',
        'Faça login e veja sua tela inicial da conta',
      ],
    },
    desafio: {
      cenario: 'Tenha uma conta Gov.br ativa e acessível, com login funcionando.',
      requisitos: [
        'Acessei o Gov.br oficial',
        'Criei ou recuperei o acesso à minha conta',
        'Usei (ou tentei) a validação pelo banco',
        'Defini uma senha forte',
        'Consigo fazer login na conta',
      ],
      dica: 'Guarde sua senha do Gov.br com cuidado (ela acessa serviços importantes). Anote num lugar seguro — não num papel solto na carteira. No módulo de Segurança veremos como guardar senhas direito.',
    },
    validacao: [
      'Tenho uma conta Gov.br',
      'Consigo fazer login',
      'Usei a validação pelo banco (se possível)',
      'Defini uma senha forte',
      'Sei recuperar a senha se esquecer',
    ],
  },

  'mob-gov-3': {
    trilhaId: 'mob-gov', numero: 3, titulo: 'Subir de nível: bronze a ouro',
    tempoTotal: 10, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Sua conta Gov.br tem um "nível": bronze, prata ou ouro. Quanto maior o nível, mais serviços você acessa — inclusive os mais importantes, como assinar documentos. Subir de nível destrava tudo.',
      conceito: {
        titulo: 'O nível mede o quanto sua identidade foi confirmada',
        texto: 'O nível da conta indica o grau de confiança na sua identidade. Bronze é o básico (criada só com perguntas). Prata e Ouro são mais seguros, alcançados validando por meios mais robustos (banco, biometria da CNH/Title de eleitor). Serviços sensíveis (assinatura digital, alguns benefícios) exigem prata ou ouro. Subir de nível é, portanto, o que libera o máximo de funções.',
      },
      estrutura: {
        titulo: 'Os 3 níveis e como subir',
        partes: [
          { simbolo: '🥉', desc: 'Bronze: criada com dados básicos; acesso limitado.' },
          { simbolo: '🥈', desc: 'Prata: validada por banco credenciado OU biometria; bom acesso.' },
          { simbolo: '🥇', desc: 'Ouro: validada por biometria (CNH/TSE/banco); acesso TOTAL, inclui assinatura.' },
          { simbolo: '⬆️', desc: 'Subir: na conta → "Aumentar nível de segurança" → escolher o método.' },
        ],
      },
      exemplo: {
        titulo: 'Caminhos pro ouro',
        celulas: [
          { ref: 'Banco', valor: 'Validar por banco credenciado → prata/ouro' },
          { ref: 'CNH', valor: 'Biometria da CNH (app gov.br) → ouro' },
          { ref: 'TSE', valor: 'Biometria do título de eleitor → ouro' },
          { ref: 'Meta', valor: 'Ouro destrava TUDO (incl. assinatura)' },
        ],
        formula: 'Validar por banco/biometria → prata ou ouro → acesso total',
        resultado: 'Conta ouro = todos os serviços liberados.',
        comentario: 'Vale a pena chegar ao OURO: é ele que libera a assinatura digital gratuita e os serviços mais importantes. Se você tem CNH ou validou pelo banco, o caminho é rápido.',
      },
      vocabulario: [
        { palavra: 'Nível da conta', def: 'O grau de confiança na sua identidade: bronze, prata ou ouro.' },
        { palavra: 'Biometria', def: 'Reconhecimento por dados físicos (foto/digital), usado pra validar identidade.' },
        { palavra: 'Banco credenciado', def: 'Banco autorizado a validar sua conta Gov.br (eleva o nível).' },
      ],
      chave: [
        'Bronze → prata → ouro: mais nível, mais serviços',
        'Ouro destrava tudo, inclusive assinatura digital',
        'Validar por banco ou biometria (CNH/TSE) eleva o nível',
      ],
      porque: 'Sem o nível adequado, muitos serviços ficam bloqueados. Chegar ao ouro garante acesso completo — e é pré-requisito pra assinatura digital, que você usará na próxima missão.',
    },
    pratica: {
      instrucao: 'Na sua conta Gov.br, vamos verificar e aumentar seu nível.',
      passos: [
        'Faça login no app/site oficial Gov.br',
        'Procure seu nível atual (costuma aparecer no perfil/conta)',
        'Toque em "Aumentar nível de segurança" (ou similar)',
        'Veja os métodos disponíveis: banco, biometria da CNH, título de eleitor',
        'Escolha o mais conveniente pra você (banco costuma ser rápido)',
        'Siga as etapas pra validar',
        'Confirme que seu nível subiu (prata ou ouro)',
      ],
    },
    desafio: {
      cenario: 'Eleve sua conta Gov.br ao nível mais alto possível pra você (idealmente ouro), destravando todos os serviços.',
      requisitos: [
        'Verifiquei meu nível atual',
        'Acessei a opção de aumentar o nível',
        'Escolhi um método de validação',
        'Subi para prata ou ouro',
        'Entendo o que o nível mais alto destrava',
      ],
      dica: 'Se você tem CNH, a validação por biometria no app gov.br leva você direto ao ouro em minutos. Vale o esforço: ouro libera a assinatura digital gratuita e os serviços mais úteis.',
    },
    validacao: [
      'Sei o que é o nível da conta',
      'Verifiquei meu nível atual',
      'Sei como aumentar o nível',
      'Subi para prata ou ouro',
      'Entendo o que cada nível destrava',
    ],
  },

  'mob-gov-4': {
    trilhaId: 'mob-gov', numero: 4, titulo: 'Assinatura digital gratuita',
    tempoTotal: 10, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Precisa assinar um documento mas não quer imprimir, assinar à mão e escanear? Com a conta Gov.br (nível prata/ouro), você assina digitalmente, de graça, com validade legal. Cartório no bolso.',
      conceito: {
        titulo: 'Assinar documentos sem papel, com validade legal',
        texto: 'A assinatura digital do Gov.br permite assinar PDFs eletronicamente, com a mesma validade jurídica de uma assinatura à mão (em muitos casos). É gratuita pra quem tem conta nível prata ou ouro. Você sobe o documento, posiciona a assinatura, confirma com sua senha/código, e pronto: o PDF sai assinado, com um selo de verificação. Resolve contratos, autorizações e formulários sem sair de casa.',
      },
      estrutura: {
        titulo: 'Como assinar',
        partes: [
          { simbolo: '🌐', desc: 'Acesse o "Assinador Gov.br" (assinador.iti.br ou pelo portal gov.br).' },
          { simbolo: '📄', desc: 'Suba o PDF que você quer assinar.' },
          { simbolo: '🖊️', desc: 'Posicione a assinatura na página e confirme com código/senha.' },
          { simbolo: '✅', desc: 'Baixe o PDF assinado, com selo de verificação oficial.' },
        ],
      },
      exemplo: {
        titulo: 'Quando usar',
        celulas: [
          { ref: 'Contrato', valor: 'Assinar sem imprimir/escanear' },
          { ref: 'Autorização', valor: 'Documentos escolares, declarações' },
          { ref: 'Requisito', valor: 'Conta nível prata ou ouro' },
          { ref: 'Validade', valor: 'Reconhecida legalmente (selo Gov.br)' },
        ],
        formula: 'Subir PDF → posicionar assinatura → confirmar → baixar assinado',
        resultado: 'Documento assinado com validade, sem papel.',
        comentario: 'Quem recebe o documento pode verificar a autenticidade da assinatura no validar.iti.br. Isso dá segurança jurídica — é uma assinatura "de verdade", não um rabisco numa imagem.',
      },
      vocabulario: [
        { palavra: 'Assinatura digital', def: 'Assinar documentos eletronicamente com validade legal.' },
        { palavra: 'Assinador Gov.br', def: 'A ferramenta gratuita do governo pra assinar PDFs.' },
        { palavra: 'Selo de verificação', def: 'Marca que comprova a autenticidade da assinatura digital.' },
      ],
      chave: [
        'Assine PDFs de graça com a conta nível prata/ouro',
        'Tem validade legal (selo de verificação oficial)',
        'Resolve contratos e autorizações sem papel',
      ],
      porque: 'A assinatura digital economiza tempo, papel e deslocamento — e é cada vez mais aceita e exigida. Dominá-la é autonomia plena pra resolver burocracias do conforto de casa.',
    },
    pratica: {
      instrucao: 'Tenha um PDF qualquer pra treinar (pode ser um documento simples que você criou). Conta nível prata/ouro necessária.',
      passos: [
        'No navegador, acesse o Assinador pelo portal gov.br (ou app gov.br → "Assinatura")',
        'Faça login com sua conta Gov.br',
        'Suba um PDF de teste',
        'Posicione o campo de assinatura numa página',
        'Confirme a assinatura (código por app/SMS ou senha)',
        'Baixe o PDF assinado',
        'Veja o selo/QR de verificação no documento',
      ],
    },
    desafio: {
      cenario: 'Assine digitalmente um documento PDF usando o Assinador Gov.br e confirme que ele saiu com o selo de validade.',
      requisitos: [
        'Acessei o Assinador Gov.br',
        'Subi um PDF',
        'Posicionei e confirmei a assinatura',
        'Baixei o PDF assinado',
        'Identifiquei o selo de verificação',
      ],
      dica: 'Guarde o PDF assinado na nuvem (Drive) junto com seus documentos. E lembre: quem recebe pode validar a assinatura no site oficial de verificação — isso dá segurança a ambos os lados.',
    },
    validacao: [
      'Sei acessar o Assinador Gov.br',
      'Sei subir um PDF pra assinar',
      'Sei posicionar e confirmar a assinatura',
      'Sei baixar o documento assinado',
      'Entendo a validade legal e o selo',
    ],
  },

  'mob-gov-5': {
    trilhaId: 'mob-gov', numero: 5, titulo: 'Carteira de documentos digital',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Esqueceu a carteira em casa? Com os documentos digitais no celular, isso deixa de ser problema: CNH, e outros documentos válidos, sempre com você no aparelho.',
      conceito: {
        titulo: 'Seus documentos oficiais no celular',
        texto: 'Vários documentos hoje têm versão digital com validade oficial. A CNH Digital (pelo app "Carteira Digital de Trânsito" ou pelo gov.br) tem a mesma validade da física em todo o Brasil. Outros documentos também vão sendo digitalizados. Ter a versão digital evita o esquecimento e a perda — e muitas vezes é aceita onde a física seria pedida.',
      },
      estrutura: {
        titulo: 'Os documentos digitais',
        partes: [
          { simbolo: '🚗', desc: 'CNH Digital: app "Carteira Digital de Trânsito" (CDT) ou gov.br; vale como a física.' },
          { simbolo: '🆔', desc: 'Documentos no gov.br: vários documentos aparecem na sua conta (varia por estado/órgão).' },
          { simbolo: '📲', desc: 'Acesso offline: a CNH digital funciona mesmo sem internet, depois de baixada.' },
          { simbolo: '🔒', desc: 'Segurança: os apps oficiais protegem com QR/validação (não é "print" da carteira).' },
        ],
      },
      exemplo: {
        titulo: 'Documento digital na prática',
        celulas: [
          { ref: 'CNH', valor: 'App CDT → CNH com QR de validação' },
          { ref: 'Onde vale', valor: 'Trânsito, identificação (como a física)' },
          { ref: 'Offline', valor: 'Funciona sem internet após baixar' },
          { ref: 'Cuidado', valor: 'É o app oficial — não vale "foto" da carteira' },
        ],
        formula: 'App oficial → documento com validação → sempre no bolso',
        resultado: 'Documentos sempre com você, sem risco de esquecer.',
        comentario: 'Uma FOTO da sua carteira na galeria NÃO tem validade oficial. O documento digital válido é o que vem pelo app oficial (com QR Code de verificação). Use o app certo.',
      },
      vocabulario: [
        { palavra: 'CNH Digital', def: 'Versão digital da carteira de motorista, com validade igual à física.' },
        { palavra: 'CDT', def: 'App "Carteira Digital de Trânsito", onde fica a CNH digital.' },
        { palavra: 'QR de validação', def: 'Código que comprova que o documento digital é autêntico.' },
      ],
      chave: [
        'A CNH digital (app oficial) vale como a física',
        'Funciona offline depois de baixada',
        'Foto da carteira NÃO vale — use o app oficial com QR',
      ],
      porque: 'Documentos digitais evitam o transtorno de esquecer ou perder a carteira, e são cada vez mais aceitos. Ter os seus configurados é praticidade e tranquilidade no dia a dia.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos configurar seus documentos digitais (se você tem CNH, comece por ela).',
      passos: [
        'Se você tem CNH: baixe o app oficial "Carteira Digital de Trânsito" (CDT)',
        'Faça login (usa a conta Gov.br) e ative sua CNH digital',
        'Veja a carteira aparecer com o QR Code de validação',
        'Confirme que ela funciona mesmo sem internet (modo avião pra testar)',
        'No app/site gov.br, veja quais outros documentos seus estão disponíveis',
        'Familiarize-se com onde acessá-los rapidamente',
      ],
    },
    desafio: {
      cenario: 'Configure seus documentos digitais disponíveis (começando pela CNH, se tiver) usando os apps oficiais.',
      requisitos: [
        'Identifiquei quais documentos digitais tenho disponíveis',
        'Configurei a CNH digital (se aplicável) no app oficial',
        'Sei que o documento digital tem QR de validação',
        'Confirmei o acesso (inclusive offline, na CNH)',
        'Sei que foto da carteira não tem validade',
      ],
      dica: 'Não tem CNH? Tudo bem — explore na sua conta gov.br quais documentos aparecem pra você. A disponibilidade aumenta com o tempo e varia por estado. O importante é saber onde achar.',
    },
    validacao: [
      'Sei o que são documentos digitais oficiais',
      'Configurei a CNH digital (se tenho)',
      'Sei que funcionam com QR de validação',
      'Sei acessar (inclusive offline)',
      'Sei distinguir do "print" sem validade',
    ],
  },

  'mob-gov-6': {
    trilhaId: 'mob-gov', numero: 6, titulo: 'Comprovantes e certidões',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Precisa de uma certidão negativa, um comprovante de algo, uma declaração? Antes era fila e taxa. Pelo Gov.br, muitos saem na hora, de graça, em PDF — prontos pra enviar.',
      conceito: {
        titulo: 'Documentos oficiais emitidos na hora',
        texto: 'Muitos comprovantes e certidões podem ser emitidos direto pelo Gov.br e órgãos ligados, em PDF, na hora e gratuitamente: certidões negativas, comprovante de situação cadastral do CPF, declarações diversas. Você acessa o serviço, gera o documento e baixa o PDF — pronto pra anexar num e-mail, enviar a uma empresa ou guardar. Acaba a fila pra papelada simples.',
      },
      estrutura: {
        titulo: 'Emitindo documentos',
        partes: [
          { simbolo: '🔎', desc: 'Busque o serviço: no gov.br, pesquise o documento que precisa (ex: "certidão negativa").' },
          { simbolo: '📄', desc: 'Gere: siga as etapas e o sistema emite o PDF na hora.' },
          { simbolo: '⬇️', desc: 'Baixe e guarde: salve o PDF (e mande pra nuvem como backup).' },
          { simbolo: '🔐', desc: 'Autenticidade: muitos têm código de verificação pra quem recebe conferir.' },
        ],
      },
      exemplo: {
        titulo: 'Documentos comuns na hora',
        celulas: [
          { ref: 'CPF', valor: 'Comprovante de situação cadastral' },
          { ref: 'Certidões', valor: 'Negativas (de débitos, etc.)' },
          { ref: 'Declarações', valor: 'Diversas, conforme o órgão' },
          { ref: 'Formato', valor: 'PDF, gratuito, com código de autenticidade' },
        ],
        formula: 'Buscar serviço → gerar → baixar PDF → guardar',
        resultado: 'Documentos oficiais sem fila nem custo.',
        comentario: 'Sempre que emitir um documento, salve o PDF na sua pasta de documentos (e na nuvem). Assim você tem à mão e não precisa emitir de novo a cada vez que pedirem.',
      },
      vocabulario: [
        { palavra: 'Certidão', def: 'Documento oficial que atesta uma situação (ex: certidão negativa de débitos).' },
        { palavra: 'Comprovante', def: 'Documento que prova algo (ex: situação cadastral do CPF).' },
        { palavra: 'Código de autenticidade', def: 'Código que permite verificar se o documento é verdadeiro.' },
      ],
      chave: [
        'Muitos comprovantes/certidões saem na hora, em PDF, de graça',
        'Busque o serviço pelo nome no gov.br',
        'Guarde os PDFs (e backup na nuvem) pra reusar',
      ],
      porque: 'Emitir documentos oficiais sozinho, na hora, é autonomia que economiza tempo, dinheiro e deslocamento — e resolve exigências de empresas e processos com agilidade.',
    },
    pratica: {
      instrucao: 'No gov.br (logado), vamos emitir um documento simples.',
      passos: [
        'No gov.br, use a busca e procure "comprovante de situação cadastral CPF" (ou outro que você precise)',
        'Acesse o serviço e siga as etapas',
        'Gere o documento (PDF)',
        'Baixe o PDF pro celular',
        'Veja o código de autenticidade no documento',
        'Salve o PDF na sua pasta de documentos e mande pra nuvem (backup)',
      ],
    },
    desafio: {
      cenario: 'Emita um comprovante ou certidão real pelo Gov.br, baixe em PDF e guarde organizado.',
      requisitos: [
        'Encontrei o serviço pela busca',
        'Gerei um documento em PDF',
        'Baixei o documento',
        'Identifiquei o código de autenticidade',
        'Guardei o PDF organizado (e backup na nuvem)',
      ],
      dica: 'Empresas costumam pedir certidões "atualizadas" (emitidas há poucos dias). Como sai na hora, só emita quando for usar — assim estará sempre dentro do prazo de validade.',
    },
    validacao: [
      'Sei buscar serviços no gov.br',
      'Sei emitir um documento em PDF',
      'Sei baixar e guardar',
      'Conheço o código de autenticidade',
      'Mantenho meus documentos organizados',
    ],
  },

  'mob-gov-7': {
    trilhaId: 'mob-gov', numero: 7, titulo: 'Consultar INSS e benefícios',
    tempoTotal: 9, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Aposentadoria, extrato de contribuições, agendamento de perícia, benefícios — tudo isso você consulta e resolve pelo app Meu INSS, sem enfrentar fila. Pra quem está perto da aposentadoria, é essencial.',
      conceito: {
        titulo: 'O INSS no seu bolso',
        texto: 'O app "Meu INSS" (acessado com a conta Gov.br) dá acesso à sua vida previdenciária: extrato de contribuições, simulação de aposentadoria, agendamentos, acompanhamento de pedidos e benefícios. Em vez de filas e idas à agência, você consulta e resolve muita coisa pelo celular. Pra o público 40+, conferir o tempo de contribuição e planejar a aposentadoria é especialmente valioso.',
      },
      estrutura: {
        titulo: 'O que dá pra fazer no Meu INSS',
        partes: [
          { simbolo: '📊', desc: 'Extrato (CNIS): veja todas as suas contribuições registradas.' },
          { simbolo: '🧮', desc: 'Simular aposentadoria: estimativa de tempo e valor.' },
          { simbolo: '📅', desc: 'Agendar/acompanhar: perícias, pedidos de benefício, atendimentos.' },
          { simbolo: '💳', desc: 'Benefícios: consultar, ver extrato de pagamento, comprovantes.' },
        ],
      },
      exemplo: {
        titulo: 'Usos importantes',
        celulas: [
          { ref: 'Conferir', valor: 'Tempo de contribuição (extrato CNIS)' },
          { ref: 'Planejar', valor: 'Simular quando/quanto vai aposentar' },
          { ref: 'Corrigir', valor: 'Notou contribuição faltando? Dá pra acertar' },
          { ref: 'Benefício', valor: 'Acompanhar pedidos e pagamentos' },
        ],
        formula: 'Meu INSS (via Gov.br) → extrato, simulação, agendamentos',
        resultado: 'Sua vida previdenciária no controle, sem fila.',
        comentario: 'Confira seu extrato de contribuições (CNIS) periodicamente: às vezes falta registrar algum período de trabalho, e corrigir isso a tempo pode adiantar sua aposentadoria.',
      },
      vocabulario: [
        { palavra: 'Meu INSS', def: 'App/site do INSS pra serviços previdenciários, acessado pelo Gov.br.' },
        { palavra: 'CNIS / Extrato', def: 'Cadastro com todas as suas contribuições registradas.' },
        { palavra: 'Simulação de aposentadoria', def: 'Estimativa de quando e quanto você pode se aposentar.' },
      ],
      chave: [
        'O Meu INSS resolve previdência pelo celular (via Gov.br)',
        'Confira o extrato de contribuições (CNIS) periodicamente',
        'Dá pra simular aposentadoria e agendar atendimentos',
      ],
      porque: 'Acompanhar contribuições e planejar a aposentadoria são preocupações reais do público 40+. Dominar o Meu INSS dá controle sobre o futuro previdenciário — e evita filas e surpresas desagradáveis.',
    },
    pratica: {
      instrucao: 'Baixe e abra o app "Meu INSS" (oficial). Acesse com sua conta Gov.br.',
      passos: [
        'Baixe o app oficial "Meu INSS" da loja (confirme que é do INSS/Governo)',
        'Faça login com sua conta Gov.br',
        'Procure "Extrato de Contribuições (CNIS)" e veja seu histórico',
        'Procure "Simular Aposentadoria" e veja a estimativa',
        'Explore as opções de agendamento e benefícios',
        'Confira se há algum período de contribuição faltando no seu extrato',
      ],
    },
    desafio: {
      cenario: 'Acesse o Meu INSS e consulte sua situação previdenciária: extrato de contribuições e simulação de aposentadoria.',
      requisitos: [
        'Acessei o Meu INSS com a conta Gov.br',
        'Consultei meu extrato de contribuições',
        'Fiz uma simulação de aposentadoria',
        'Explorei agendamentos/benefícios',
        'Verifiquei se há contribuições faltando',
      ],
      dica: 'Se notar períodos de trabalho que não aparecem no extrato, guarde seus comprovantes (carteira de trabalho, holerites) e procure regularizar — pelo próprio app ou com ajuda. Isso impacta diretamente sua aposentadoria.',
    },
    validacao: [
      'Sei acessar o Meu INSS',
      'Sei consultar meu extrato (CNIS)',
      'Sei simular a aposentadoria',
      'Sei onde agendar atendimentos',
      'Sei conferir contribuições faltantes',
    ],
  },

  'mob-gov-8': {
    trilhaId: 'mob-gov', numero: 8, titulo: 'Projeto: conta ouro + assinatura',
    tempoTotal: 18, xp: 100, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: deixar sua conta Gov.br no nível ouro, seus documentos digitais prontos, e assinar um documento de verdade. No fim, você terá autonomia total nos serviços públicos digitais.',
      conceito: {
        titulo: 'Cidadania digital plena',
        texto: 'Este projeto consolida a trilha: uma conta Gov.br nível ouro (acesso total), documentos digitais configurados, e a capacidade de emitir comprovantes e assinar documentos sozinho. Com isso, você resolve a maioria das burocracias da vida adulta sem fila, sem papel e sem custo — uma autonomia que poucos da sua geração dominam, e que faz enorme diferença no dia a dia.',
      },
      estrutura: {
        titulo: 'O kit de cidadania digital',
        partes: [
          { simbolo: '🥇', desc: 'Conta nível ouro (ou o máximo possível pra você).' },
          { simbolo: '🪪', desc: 'Documentos digitais configurados (CNH, se tiver).' },
          { simbolo: '📄', desc: 'Saber emitir comprovantes/certidões em PDF.' },
          { simbolo: '✍️', desc: 'Assinatura digital testada e funcionando.' },
        ],
      },
      exemplo: {
        titulo: 'O que você domina ao concluir',
        celulas: [
          { ref: 'Nível', valor: 'Conta ouro → tudo liberado' },
          { ref: 'Documentos', valor: 'CNH digital + comprovantes na hora' },
          { ref: 'Assinatura', valor: 'Assinar PDFs com validade legal' },
          { ref: 'Resultado', valor: 'Burocracia resolvida de casa' },
        ],
        formula: 'Ouro + documentos + emissão + assinatura = autonomia total',
        resultado: 'Cidadania digital plena no seu celular.',
        comentario: 'Guarde tudo organizado na nuvem: documentos emitidos, PDFs assinados. Assim, quando alguém pedir, você tem na hora — e nunca mais enfrenta fila por papelada simples.',
      },
      vocabulario: [
        { palavra: 'Cidadania digital', def: 'A capacidade de exercer direitos e resolver serviços públicos pela internet.' },
        { palavra: 'Autonomia', def: 'Resolver suas demandas sozinho, sem depender de terceiros ou filas.' },
        { palavra: 'Kit de documentos', def: 'Seus documentos e comprovantes organizados e acessíveis.' },
      ],
      chave: [
        'Conta ouro destrava todos os serviços',
        'Documentos digitais + emissão + assinatura = autonomia',
        'Guarde tudo organizado na nuvem',
      ],
      porque: 'Concluir esta trilha te dá independência real diante da burocracia — algo que economiza tempo, dinheiro e estresse pra sempre. É uma das competências de maior impacto prático na vida adulta.',
    },
    pratica: {
      instrucao: 'Reserve 18 minutos. Vamos consolidar sua cidadania digital, usando tudo da trilha.',
      passos: [
        'Confirme que sua conta Gov.br está no nível ouro (ou eleve agora, se possível)',
        'Confirme seus documentos digitais configurados (CNH no app CDT, se tiver)',
        'Emita um comprovante/certidão em PDF (ex: situação cadastral do CPF)',
        'Assine digitalmente um PDF de teste pelo Assinador Gov.br',
        'Crie uma pasta na nuvem "Documentos Gov.br" e guarde tudo lá',
        'Salve o app gov.br e o Meu INSS de fácil acesso na tela',
        'Faça uma revisão: nível ouro, documentos, emissão e assinatura — tudo funcionando?',
      ],
    },
    desafio: {
      cenario: 'Entregue sua cidadania digital completa: conta no nível máximo, documentos configurados, um comprovante emitido e um documento assinado, tudo organizado.',
      requisitos: [
        'Conta Gov.br no nível ouro (ou máximo possível)',
        'Documentos digitais configurados (CNH, se aplicável)',
        'Emiti um comprovante/certidão em PDF',
        'Assinei um documento digitalmente',
        'Organizei tudo numa pasta na nuvem',
        'Apps oficiais de fácil acesso',
      ],
      dica: 'Parabéns — você concluiu a trilha Gov.br! Essa autonomia é rara e valiosa. Ajude também alguém da família a chegar no nível ouro: você se torna a referência de "quem resolve as coisas do governo" no grupo.',
    },
    validacao: [
      'Minha conta está no nível ouro (ou máximo)',
      'Tenho documentos digitais configurados',
      'Sei emitir comprovantes em PDF',
      'Sei assinar documentos digitalmente',
      'Organizei tudo na nuvem',
      'Tenho autonomia nos serviços públicos',
    ],
  },
};
