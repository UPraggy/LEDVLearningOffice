// ============================================================================
// CONTEÚDO — WhatsApp Profissional (mob-wpp)
// Perfil, conversas, grupos, etiqueta, recursos e privacidade. Vertente celular.
// ============================================================================

export const MOB_WPP = {
  'mob-wpp-1': {
    trilhaId: 'mob-wpp', numero: 1, titulo: 'Perfil com foto e recado',
    tempoTotal: 6, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Seu WhatsApp ainda está sem foto, ou com uma de anos atrás? O perfil é a primeira coisa que as pessoas veem — inclusive contatos profissionais. Caprichar nele leva 5 minutos e melhora sua imagem.',
      conceito: {
        titulo: 'Seu perfil é seu cartão de visita no WhatsApp',
        texto: 'O WhatsApp não é só pra família — cada vez mais é usado pra trabalho, serviços e negócios. Seu perfil (foto, nome e o "recado") aparece pra quem te adiciona. Uma foto clara e simpática e um nome correto passam seriedade. É a base pra usar o WhatsApp de forma profissional, sem deixar de ser pessoal com quem é próximo.',
      },
      estrutura: {
        titulo: 'As partes do perfil',
        partes: [
          { simbolo: '📷', desc: 'Foto: clara, com seu rosto. Pra uso profissional, evite fotos muito informais.' },
          { simbolo: '✏️', desc: 'Nome: seu nome real, escrito direito (aparece pra contatos novos).' },
          { simbolo: '💬', desc: 'Recado (status do perfil): uma frase curta opcional ("Disponível", profissão).' },
          { simbolo: '⚙️', desc: 'Onde editar: Configurações (engrenagem ou seu nome no topo) → toque na foto/nome.' },
        ],
      },
      exemplo: {
        titulo: 'Perfil cuidado',
        celulas: [
          { ref: 'Foto', valor: 'Rosto visível, boa luz, simpática' },
          { ref: 'Nome', valor: 'Maria Silva (não "Mah❤️" pra contatos de trabalho)' },
          { ref: 'Recado', valor: '"Costureira • orçamentos por aqui"' },
        ],
        formula: 'Foto clara + nome correto + recado útil',
        resultado: 'Uma imagem profissional desde o primeiro contato.',
        comentario: 'Lembre: clientes e contatos de trabalho veem seu perfil. Uma foto e nome adequados já transmitem confiança.',
      },
      vocabulario: [
        { palavra: 'Perfil', def: 'Suas informações no WhatsApp: foto, nome e recado.' },
        { palavra: 'Recado (status do perfil)', def: 'Frase curta ao lado do nome (diferente dos "Status" que somem em 24h).' },
        { palavra: 'Foto de perfil', def: 'A imagem que te representa nas conversas e na lista de contatos.' },
      ],
      chave: [
        'O perfil é seu cartão de visita — inclusive no trabalho',
        'Foto clara + nome real + recado útil',
        'Edita-se nas Configurações, tocando na foto/nome',
      ],
      porque: 'Muita gente faz negócios e contatos profissionais pelo WhatsApp hoje. Um perfil cuidado abre portas e passa confiança; um perfil descuidado pode afastar oportunidades.',
    },
    pratica: {
      instrucao: 'Abra o WhatsApp. Vamos arrumar seu perfil.',
      passos: [
        'Toque em Configurações (engrenagem) ou no seu nome no topo',
        'Toque na sua foto de perfil → escolha "Câmera" ou "Galeria"',
        'Defina uma foto clara, com seu rosto, boa luz',
        'Toque em "Nome" e confirme que está escrito corretamente',
        'Toque em "Recado" e escreva uma frase curta (opcional)',
        'Veja como seu perfil ficou',
      ],
    },
    desafio: {
      cenario: 'Deixe seu perfil do WhatsApp apresentável: foto clara, nome correto e (opcional) um recado útil.',
      requisitos: [
        'Defini uma foto clara e adequada',
        'Confirmei meu nome escrito corretamente',
        'Escrevi ou revisei o recado',
        'Entendo que contatos de trabalho veem isso',
        'Meu perfil está apresentável',
      ],
      dica: 'Na próxima missão veremos privacidade — você poderá escolher QUEM vê sua foto e recado. Mas, em geral, um perfil bem cuidado é vantagem.',
    },
    validacao: [
      'Sei onde editar meu perfil',
      'Defini uma foto adequada',
      'Confirmei meu nome',
      'Ajustei o recado',
      'Meu perfil está profissional',
    ],
  },

  'mob-wpp-2': {
    trilhaId: 'mob-wpp', numero: 2, titulo: 'Conversas, anexos e áudios',
    tempoTotal: 8, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Mandar um documento, uma foto, um áudio que se entenda — o WhatsApp faz tudo isso, mas muita gente só digita texto. Dominar os anexos e os áudios te faz comunicar muito melhor.',
      conceito: {
        titulo: 'Muito além do texto',
        texto: 'Numa conversa do WhatsApp você pode enviar texto, fotos, documentos (PDF, etc.), áudios, sua localização e contatos. O ícone de clipe (ou +) abre essas opções. Os áudios são úteis, mas têm etiqueta: curtos e só quando fazem sentido. Saber usar cada recurso faz você se comunicar com clareza e no formato certo pra cada situação.',
      },
      estrutura: {
        titulo: 'Os recursos de uma conversa',
        partes: [
          { simbolo: '📎', desc: 'Anexar (clipe/+): foto, documento (PDF), contato, localização.' },
          { simbolo: '🎤', desc: 'Áudio: segure o microfone pra gravar; solte pra enviar. Curtos e objetivos.' },
          { simbolo: '📷', desc: 'Foto/Câmera: tire na hora ou escolha da galeria.' },
          { simbolo: '↩️', desc: 'Responder: deslize a mensagem pro lado pra responder a ela especificamente.' },
        ],
      },
      exemplo: {
        titulo: 'Etiqueta dos áudios',
        celulas: [
          { ref: 'Bom', valor: 'Áudio curto quando explicar por texto seria longo' },
          { ref: 'Ruim', valor: 'Áudio de 8 minutos pra um "oi tudo bem?"' },
          { ref: 'Documento', valor: 'Clipe → Documento → escolher o PDF' },
          { ref: 'Dica', valor: 'Em conversa de trabalho, prefira texto (fica registrado)' },
        ],
        formula: 'Escolha o formato certo: texto, foto, documento ou áudio curto',
        resultado: 'Comunicação clara e respeitosa.',
        comentario: 'Áudios longos cansam e são difíceis de reouvir. Em contexto profissional, texto costuma ser melhor — dá pra ler rápido e fica registrado.',
      },
      vocabulario: [
        { palavra: 'Anexo', def: 'Arquivo enviado na conversa (foto, PDF, documento).' },
        { palavra: 'Mensagem de voz (áudio)', def: 'Gravação de voz enviada na conversa.' },
        { palavra: 'Responder (reply)', def: 'Citar uma mensagem específica ao responder, deslizando-a pro lado.' },
      ],
      chave: [
        'O clipe (+) anexa foto, documento, contato e localização',
        'Áudios: curtos e quando fazem sentido',
        'Em conversa de trabalho, texto costuma ser melhor (fica registrado)',
      ],
      porque: 'Saber enviar um documento, uma foto nítida ou um áudio claro resolve mil situações do dia a dia e do trabalho. E conhecer a etiqueta evita o incômodo dos áudios intermináveis.',
    },
    pratica: {
      instrucao: 'Abra uma conversa no WhatsApp (pode ser com você mesmo: busque seu número ou use "Conversa com você").',
      passos: [
        'Digite e envie uma mensagem de texto',
        'Toque no clipe (📎) ou + e veja as opções de anexo',
        'Envie uma foto da galeria',
        'Envie um documento (escolha "Documento" e um PDF do celular)',
        'Grave um áudio curto: segure o microfone, fale, e solte pra enviar',
        'Deslize uma mensagem pro lado pra "responder" a ela',
        'Envie sua localização (clipe → Localização)',
      ],
    },
    desafio: {
      cenario: 'Pratique enviar os diferentes tipos de conteúdo numa conversa, escolhendo o formato certo pra cada um.',
      requisitos: [
        'Enviei texto',
        'Enviei uma foto e um documento (anexo)',
        'Gravei e enviei um áudio curto',
        'Usei o recurso de responder uma mensagem específica',
        'Entendo quando usar cada formato',
      ],
      dica: 'Pra travar a gravação de áudio sem segurar o dedo, deslize o microfone pra cima enquanto grava — ele fica "fixo" e você pode gravar com as duas mãos livres.',
    },
    validacao: [
      'Sei enviar texto, foto e documento',
      'Sei gravar e enviar áudio',
      'Sei responder uma mensagem específica',
      'Sei enviar localização/contato',
      'Escolho o formato certo pra cada caso',
    ],
  },

  'mob-wpp-3': {
    trilhaId: 'mob-wpp', numero: 3, titulo: 'Criar e administrar grupos',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Organizar a família, um trabalho em equipe, um grupo de vizinhos — os grupos do WhatsApp facilitam tudo. Mas administrar bem (adicionar, remover, definir regras) faz a diferença entre um grupo útil e uma bagunça.',
      conceito: {
        titulo: 'Um espaço pra conversar com várias pessoas',
        texto: 'Um grupo reúne várias pessoas numa conversa só. Quem cria é o administrador, e pode adicionar/remover membros, editar nome e foto, escrever uma descrição com as regras, e até restringir quem pode enviar mensagens. Saber administrar um grupo é útil pra organização familiar, comunitária e profissional — e evita que ele vire um caos.',
      },
      estrutura: {
        titulo: 'Criando e administrando',
        partes: [
          { simbolo: '➕', desc: 'Criar: nova conversa → "Novo grupo" → escolher participantes → nome e foto.' },
          { simbolo: '👤', desc: 'Adicionar/remover: toque no nome do grupo → membros → adicionar/remover.' },
          { simbolo: '📝', desc: 'Descrição: escreva o propósito e as regras do grupo (todos veem ao entrar).' },
          { simbolo: '👑', desc: 'Admin: pode definir "só admins enviam mensagens" pra grupos de avisos.' },
        ],
      },
      exemplo: {
        titulo: 'Grupos bem administrados',
        celulas: [
          { ref: 'Família', valor: 'Todos enviam, descrição leve' },
          { ref: 'Avisos', valor: '"Só admins" enviam (ninguém polui)' },
          { ref: 'Trabalho', valor: 'Descrição com o propósito e horários' },
          { ref: 'Admin', valor: 'Pode promover outros a administradores' },
        ],
        formula: 'Criar + nomear + descrever (regras) + administrar membros',
        resultado: 'Um grupo organizado e com propósito claro.',
        comentario: 'Em grupos grandes ou de avisos, a opção "só administradores podem enviar" mantém tudo limpo — útil pra comunicados de condomínio, escola, trabalho.',
      },
      vocabulario: [
        { palavra: 'Grupo', def: 'Conversa com várias pessoas ao mesmo tempo.' },
        { palavra: 'Administrador (admin)', def: 'Quem pode gerenciar o grupo: membros, nome, regras.' },
        { palavra: 'Descrição do grupo', def: 'Texto com o propósito e as regras, visível a quem entra.' },
      ],
      chave: [
        'Quem cria é admin e pode gerenciar tudo',
        'Use a descrição pra deixar o propósito e as regras claros',
        '"Só admins enviam" mantém grupos de aviso organizados',
      ],
      porque: 'Grupos bem administrados organizam família, trabalho e comunidade. Saber criar e gerenciar é uma habilidade prática que te coloca como organizador — e evita o estresse de grupos bagunçados.',
    },
    pratica: {
      instrucao: 'Abra o WhatsApp. Vamos criar um grupo de teste (pode adicionar 1-2 familiares e avisar que é treino).',
      passos: [
        'Toque em nova conversa → "Novo grupo"',
        'Selecione 1 ou 2 contatos (avise que é teste)',
        'Dê um nome ao grupo e (opcional) uma foto',
        'Abra o grupo, toque no nome no topo pra ver as opções',
        'Escreva uma descrição com o propósito',
        'Veja onde ficam as opções de adicionar/remover membros',
        'Explore as configurações de admin (quem pode enviar, editar)',
      ],
    },
    desafio: {
      cenario: 'Crie e configure um grupo com propósito claro: nome, foto, descrição com regras e administração definida.',
      requisitos: [
        'Criei um grupo com nome e foto',
        'Escrevi uma descrição com o propósito/regras',
        'Sei adicionar e remover membros',
        'Conheço a opção "só admins enviam"',
        'Sei como promover alguém a admin',
      ],
      dica: 'Antes de criar um grupo, pense: ele precisa existir? Grupos demais cansam. Quando criar, uma boa descrição com o propósito evita que vire bagunça e desvios de assunto.',
    },
    validacao: [
      'Sei criar um grupo',
      'Sei definir nome, foto e descrição',
      'Sei adicionar e remover membros',
      'Conheço a opção de restringir envios',
      'Sei administrar um grupo',
    ],
  },

  'mob-wpp-4': {
    trilhaId: 'mob-wpp', numero: 4, titulo: 'Etiqueta em grupo de trabalho',
    tempoTotal: 7, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Bom dia com figurinha pra 50 pessoas, corrente, áudio de 5 minutos, mensagem fora de hora... pequenos deslizes que irritam todo mundo num grupo de trabalho. A etiqueta te faz respeitado, não o "chato do grupo".',
      conceito: {
        titulo: 'Grupo profissional pede respeito ao tempo dos outros',
        texto: 'Num grupo de trabalho, cada mensagem notifica todo mundo. Por isso, etiqueta é essencial: ir direto ao ponto, evitar correntes e "bom dia" em massa, respeitar horários, e não desviar do assunto. Quem segue a etiqueta é visto como profissional; quem polui o grupo incomoda e pega mal. São regras simples de convivência digital.',
      },
      estrutura: {
        titulo: 'As regras de ouro',
        partes: [
          { simbolo: '🎯', desc: 'Direto ao ponto: uma mensagem clara em vez de várias picadas.' },
          { simbolo: '🚫', desc: 'Nada de corrente, "bom dia" em massa, ou figurinha pra tudo em grupo de trabalho.' },
          { simbolo: '🕐', desc: 'Horário: evite mensagens de trabalho de madrugada/fim de semana sem urgência.' },
          { simbolo: '🔇', desc: 'Conversa paralela? Chame a pessoa no privado, não no grupo.' },
        ],
      },
      exemplo: {
        titulo: 'Incomoda x respeita',
        celulas: [
          { ref: 'Incomoda', valor: 'Corrente, áudio longo, off-topic, madrugada' },
          { ref: 'Respeita', valor: 'Mensagem objetiva, no assunto, em horário razoável' },
          { ref: 'Privado', valor: 'Assunto só com uma pessoa → vá pro privado' },
        ],
        formula: 'Objetivo + no assunto + horário razoável = respeito',
        resultado: 'Você é visto como profissional, não como ruído.',
        comentario: 'Antes de mandar algo no grupo, pergunte: "isso interessa a TODOS aqui?". Se não, vá no privado. Esse filtro simples evita 90% das poluições.',
      },
      vocabulario: [
        { palavra: 'Etiqueta', def: 'Boas práticas de convivência (aqui, em grupos digitais).' },
        { palavra: 'Off-topic', def: 'Mensagem fora do assunto do grupo.' },
        { palavra: 'Corrente', def: 'Mensagem que pede pra "repassar"; quase sempre inútil ou golpe — não repasse.' },
      ],
      chave: [
        'Pergunte: "isso interessa a TODOS?" Se não, vá no privado',
        'Nada de corrente, bom-dia em massa ou áudio longo no trabalho',
        'Respeite horários e mantenha o assunto',
      ],
      porque: 'Em grupos de trabalho, sua etiqueta digital é parte da sua imagem profissional. Respeitar o tempo e o foco dos colegas constrói reputação; poluir o grupo a destrói — mesmo sem querer.',
    },
    pratica: {
      instrucao: 'Reflita sobre os grupos que você participa. Use papel ou as notas do celular.',
      passos: [
        'Liste os grupos de trabalho/comunidade que você participa',
        'Identifique uma prática que polui esses grupos (corrente, áudio longo...)',
        'Pense numa mensagem recente sua: foi objetiva e no assunto?',
        'Escreva sua "regra pessoal" de etiqueta em grupo',
        'Identifique um caso em que você deveria ter ido pro privado',
        'Combine consigo: aplicar o filtro "isso interessa a todos?"',
      ],
    },
    desafio: {
      cenario: 'Defina seu código de etiqueta pra grupos de trabalho e identifique melhorias na sua forma de participar.',
      requisitos: [
        'Listei os grupos profissionais que participo',
        'Identifiquei práticas que poluem grupos',
        'Reconheci o que posso melhorar na minha participação',
        'Defini uma regra pessoal de etiqueta',
        'Vou aplicar o filtro "interessa a todos?"',
      ],
      dica: 'Se você administra um grupo, coloque as regras de etiqueta na descrição. Deixar claro desde o início ("sem corrente, assunto X só aqui") previne a bagunça antes de ela começar.',
    },
    validacao: [
      'Entendo a etiqueta de grupos de trabalho',
      'Sei o que polui um grupo',
      'Aplico o filtro "interessa a todos?"',
      'Vou pro privado quando o assunto é individual',
      'Respeito horários e foco',
    ],
  },

  'mob-wpp-5': {
    trilhaId: 'mob-wpp', numero: 5, titulo: 'Listas de transmissão vs grupos',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Precisa avisar a mesma coisa pra 30 clientes, mas sem que eles vejam uns aos outros nem fiquem respondendo pra todos? A lista de transmissão resolve — e quase ninguém conhece.',
      conceito: {
        titulo: 'Avisar muita gente sem criar um grupo barulhento',
        texto: 'A lista de transmissão envia uma mensagem pra várias pessoas ao mesmo tempo, mas cada uma recebe no privado, como se fosse só pra ela. Diferente do grupo, ninguém vê os outros nem as respostas viram bagunça coletiva. É perfeita pra avisos, promoções, recados a clientes. (Detalhe importante: só recebe quem tem seu número salvo nos contatos.)',
      },
      estrutura: {
        titulo: 'Lista de transmissão x grupo',
        partes: [
          { simbolo: '📢', desc: 'Lista: mensagem chega no privado de cada um; respostas vêm só pra você.' },
          { simbolo: '👥', desc: 'Grupo: todos veem todos e todas as respostas (conversa coletiva).' },
          { simbolo: '📇', desc: 'Requisito da lista: a pessoa precisa ter SEU número salvo pra receber.' },
          { simbolo: '➕', desc: 'Criar: menu → "Nova transmissão" → escolher os contatos.' },
        ],
      },
      exemplo: {
        titulo: 'Quando usar cada uma',
        celulas: [
          { ref: 'Lista', valor: 'Avisar clientes de uma promoção (sem expô-los)' },
          { ref: 'Lista', valor: 'Recado igual pra muitos, sem virar conversa' },
          { ref: 'Grupo', valor: 'Quando todos PRECISAM conversar entre si' },
          { ref: 'Privacidade', valor: 'Lista não expõe números; grupo expõe' },
        ],
        formula: 'Aviso pra muitos sem conversa coletiva → lista de transmissão',
        resultado: 'Comunicação em massa, privada e organizada.',
        comentario: 'A lista é ideal pra quem vende ou presta serviço: avisa todos os clientes de uma vez, cada um recebe como mensagem pessoal, e a privacidade fica protegida.',
      },
      vocabulario: [
        { palavra: 'Lista de transmissão', def: 'Envia uma mensagem a vários contatos, cada um recebendo no privado.' },
        { palavra: 'Grupo', def: 'Conversa coletiva onde todos veem todos.' },
        { palavra: 'Difusão', def: 'Outro nome pra transmissão: enviar a mesma mensagem pra muitos.' },
      ],
      chave: [
        'Lista de transmissão = aviso privado pra muitos, sem conversa coletiva',
        'Só recebe quem tem seu número salvo',
        'Use grupo quando as pessoas precisam conversar entre si',
      ],
      porque: 'Pra quem vende, presta serviço ou organiza comunidade, a lista de transmissão é uma ferramenta poderosa: comunicação em massa que respeita a privacidade e não vira bagunça. Saber disso te diferencia.',
    },
    pratica: {
      instrucao: 'Abra o WhatsApp. Vamos criar uma lista de transmissão de teste.',
      passos: [
        'No topo das conversas, abra o menu (3 pontinhos) → "Nova transmissão"',
        'Selecione 2-3 contatos (que tenham seu número salvo)',
        'Confirme pra criar a lista',
        'Envie uma mensagem de teste pela lista',
        'Observe que cada contato recebe no privado (não viram um grupo)',
        'Compare mentalmente com um grupo: na lista, ninguém vê os outros',
        'Veja onde editar os participantes da lista (info da lista)',
      ],
    },
    desafio: {
      cenario: 'Crie uma lista de transmissão útil pra você (avisos a um grupo de pessoas) e entenda quando usá-la em vez de um grupo.',
      requisitos: [
        'Criei uma lista de transmissão',
        'Enviei uma mensagem de teste por ela',
        'Entendi que cada um recebe no privado',
        'Sei que a pessoa precisa ter meu número salvo',
        'Sei quando usar lista vs grupo',
      ],
      dica: 'Atualize sua lista quando ganhar novos contatos. E lembre o requisito: peça pros clientes/contatos salvarem seu número, senão eles não recebem as transmissões.',
    },
    validacao: [
      'Entendo a diferença entre lista e grupo',
      'Sei criar uma lista de transmissão',
      'Sei que cada um recebe no privado',
      'Conheço o requisito do número salvo',
      'Sei escolher entre lista e grupo',
    ],
  },

  'mob-wpp-6': {
    trilhaId: 'mob-wpp', numero: 6, titulo: 'Fixar, marcar e buscar conversa',
    tempoTotal: 7, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Aquela conversa importante some no meio de dezenas de outras? Procura uma mensagem antiga e não acha? Fixar, marcar e buscar deixam o WhatsApp organizado — e tudo na ponta do dedo.',
      conceito: {
        titulo: 'Organização que faz achar tudo rápido',
        texto: 'O WhatsApp tem ferramentas pra você não se perder: fixar deixa conversas importantes sempre no topo; marcar com estrela guarda mensagens específicas pra reencontrar depois; e a busca acha qualquer mensagem ou conversa pelo conteúdo. Usar esses recursos transforma uma lista bagunçada de conversas num espaço organizado e eficiente.',
      },
      estrutura: {
        titulo: 'As ferramentas de organização',
        partes: [
          { simbolo: '📌', desc: 'Fixar: segure a conversa → ícone de alfinete. Ela fica sempre no topo.' },
          { simbolo: '⭐', desc: 'Marcar mensagem: segure a mensagem → estrela. Guarda pra reencontrar.' },
          { simbolo: '🔍', desc: 'Buscar: a lupa no topo acha conversas e mensagens por palavra.' },
          { simbolo: '🗄️', desc: 'Arquivar: tira a conversa da lista sem apagar (volta quando chega mensagem).' },
        ],
      },
      exemplo: {
        titulo: 'Usos práticos',
        celulas: [
          { ref: 'Fixar', valor: 'Conversa do trabalho/família sempre no topo' },
          { ref: 'Estrela', valor: 'Endereço, chave PIX, recado importante' },
          { ref: 'Buscar', valor: 'Digite uma palavra → acha a mensagem' },
          { ref: 'Arquivar', valor: 'Conversa resolvida some da lista' },
        ],
        formula: 'Fixar o importante · marcar o que reusará · buscar o resto',
        resultado: 'Conversas organizadas e tudo encontrável.',
        comentario: 'Marque com estrela aquela informação que você sempre precisa reencontrar (um endereço, uma chave PIX, um dado). Depois é só ir nas "Mensagens favoritas".',
      },
      vocabulario: [
        { palavra: 'Fixar', def: 'Manter uma conversa sempre no topo da lista.' },
        { palavra: 'Mensagem favorita (estrela)', def: 'Mensagem marcada pra reencontrar fácil depois.' },
        { palavra: 'Arquivar', def: 'Tirar a conversa da lista sem apagá-la.' },
      ],
      chave: [
        'Fixe as conversas mais importantes no topo',
        'Marque com estrela mensagens que vai reusar',
        'A lupa acha qualquer conversa ou mensagem',
      ],
      porque: 'Quem usa o WhatsApp pra trabalho e vida tem dezenas de conversas. Organizá-las economiza tempo e evita o estresse de "onde está aquela mensagem?" — pequenos recursos, grande eficiência.',
    },
    pratica: {
      instrucao: 'Abra o WhatsApp. Vamos organizar suas conversas.',
      passos: [
        'Segure uma conversa importante e toque no ícone de fixar (alfinete)',
        'Veja ela ir pro topo da lista',
        'Abra uma conversa, segure uma mensagem útil e marque com a estrela',
        'Veja as "Mensagens favoritas" no menu/configurações',
        'Toque na lupa no topo e busque uma palavra que você sabe que está numa conversa',
        'Arquive uma conversa antiga (segure → arquivar) e veja sumir da lista',
      ],
    },
    desafio: {
      cenario: 'Organize seu WhatsApp: fixe as conversas importantes, marque mensagens úteis e pratique a busca.',
      requisitos: [
        'Fixei pelo menos 2 conversas importantes',
        'Marquei com estrela uma mensagem útil',
        'Encontrei as mensagens favoritas',
        'Usei a busca pra achar uma mensagem',
        'Arquivei uma conversa antiga',
      ],
      dica: 'Dá pra fixar até 3 conversas. Reserve esses lugares pras MAIS importantes (família próxima, trabalho). Assim elas nunca somem no meio da lista.',
    },
    validacao: [
      'Sei fixar conversas',
      'Sei marcar mensagens com estrela',
      'Sei achar as mensagens favoritas',
      'Sei usar a busca',
      'Sei arquivar conversas',
    ],
  },

  'mob-wpp-7': {
    trilhaId: 'mob-wpp', numero: 7, titulo: 'WhatsApp Web no computador',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Digitar mensagens longas no celular é cansativo. E se você pudesse usar o WhatsApp no computador, com o teclado grande, enquanto trabalha? O WhatsApp Web faz isso — com segurança, se você souber as regras.',
      conceito: {
        titulo: 'Seu WhatsApp na tela do computador',
        texto: 'O WhatsApp Web espelha suas conversas no navegador do computador. Você conecta lendo um QR Code (aquele quadrado de pontinhos) com a câmera do celular, e pronto: digita no teclado grande, recebe e envia tudo do PC. É ótimo pra quem usa o computador no trabalho. Mas atenção à segurança: nunca conecte em computador público e sempre desconecte ao terminar.',
      },
      estrutura: {
        titulo: 'Conectar e usar com segurança',
        partes: [
          { simbolo: '🌐', desc: 'Acesse web.whatsapp.com no navegador do computador.' },
          { simbolo: '📷', desc: 'No celular: menu → "Aparelhos conectados" → "Conectar" → aponte pro QR Code.' },
          { simbolo: '🔒', desc: 'Segurança: só em computador SEU/confiável; nunca em PC público.' },
          { simbolo: '🚪', desc: 'Ao terminar: desconecte (no celular, em Aparelhos conectados, ou "Sair" no PC).' },
        ],
      },
      exemplo: {
        titulo: 'Uso seguro do WhatsApp Web',
        celulas: [
          { ref: 'OK', valor: 'Seu computador de casa/trabalho' },
          { ref: 'NÃO', valor: 'PC de lan house, biblioteca, de terceiros' },
          { ref: 'Sempre', valor: 'Desconectar ao terminar (sai em todo lugar)' },
          { ref: 'Conferir', valor: 'Veja os "aparelhos conectados" de vez em quando' },
        ],
        formula: 'QR Code conecta · computador confiável · desconectar no fim',
        resultado: 'WhatsApp no PC, com conforto e segurança.',
        comentario: 'Confira de tempos em tempos a lista de "Aparelhos conectados" no celular. Se aparecer algo que você não reconhece, desconecte na hora — pode ser acesso indevido.',
      },
      vocabulario: [
        { palavra: 'WhatsApp Web', def: 'Versão do WhatsApp que roda no navegador do computador.' },
        { palavra: 'QR Code', def: 'Quadrado de pontinhos que a câmera lê pra conectar/identificar.' },
        { palavra: 'Aparelhos conectados', def: 'Lista dos dispositivos onde seu WhatsApp está aberto.' },
      ],
      chave: [
        'Conecta lendo o QR Code com a câmera do celular',
        'Só use em computador confiável, nunca público',
        'Desconecte ao terminar e confira os aparelhos conectados',
      ],
      porque: 'Usar o WhatsApp no computador agiliza o trabalho (teclado grande, telas juntas). E saber a etiqueta de segurança evita que alguém acesse suas conversas — uma preocupação real e fácil de prevenir.',
    },
    pratica: {
      instrucao: 'Tenha o celular e um computador SEU por perto. Vamos conectar.',
      passos: [
        'No computador, abra o navegador e acesse web.whatsapp.com',
        'Vai aparecer um QR Code na tela',
        'No celular, abra o WhatsApp → menu → "Aparelhos conectados"',
        'Toque em "Conectar um aparelho" e aponte a câmera pro QR Code',
        'Veja suas conversas aparecerem no computador',
        'Envie uma mensagem pelo teclado do PC pra testar',
        'Ao terminar, volte em "Aparelhos conectados" e desconecte',
      ],
    },
    desafio: {
      cenario: 'Conecte o WhatsApp Web no seu computador, use-o e desconecte com segurança ao terminar.',
      requisitos: [
        'Acessei web.whatsapp.com',
        'Conectei lendo o QR Code pelo celular',
        'Enviei/recebi mensagens pelo computador',
        'Sei que só devo usar em PC confiável',
        'Desconectei ao terminar',
      ],
      dica: 'Se um dia esquecer de desconectar num computador, não tem problema: pelo celular, em "Aparelhos conectados", você desconecta remotamente — encerra o acesso em qualquer lugar.',
    },
    validacao: [
      'Sei acessar o WhatsApp Web',
      'Sei conectar pelo QR Code',
      'Sei usar no computador',
      'Sei a regra de só usar PC confiável',
      'Sei desconectar (inclusive remotamente)',
    ],
  },

  'mob-wpp-8': {
    trilhaId: 'mob-wpp', numero: 8, titulo: 'Privacidade: foto, visto, bloqueio',
    tempoTotal: 9, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Quem pode ver sua foto, seu "visto por último", seus status? Quem pode te adicionar em grupos? Você decide tudo isso — e ajustar a privacidade protege você de exposição e de incômodos.',
      conceito: {
        titulo: 'Você controla quem vê o quê',
        texto: 'O WhatsApp tem um menu de Privacidade onde você escolhe quem vê sua foto, recado, "visto por último", status e foto online. Também é onde você ativa a verificação em duas etapas (proteção da conta) e bloqueia números indesejados. Ajustar isso protege sua imagem, sua privacidade e sua segurança — especialmente importante com o aumento de golpes.',
      },
      estrutura: {
        titulo: 'Os controles de privacidade',
        partes: [
          { simbolo: '👁️', desc: 'Quem vê o quê: foto, recado, visto por último, status → "Todos", "Meus contatos" ou "Ninguém".' },
          { simbolo: '🔐', desc: 'Verificação em duas etapas: um PIN que protege sua conta de invasão. ATIVE.' },
          { simbolo: '🚫', desc: 'Bloquear: silencia e impede contato de números indesejados/golpistas.' },
          { simbolo: '👥', desc: 'Grupos: escolha quem pode te adicionar (evita ser jogado em grupos aleatórios).' },
        ],
      },
      exemplo: {
        titulo: 'Configuração recomendada',
        celulas: [
          { ref: 'Foto/recado', valor: '"Meus contatos" (não estranhos)' },
          { ref: 'Visto/online', valor: 'A seu gosto ("Meus contatos" é equilibrado)' },
          { ref: '2 etapas', valor: 'ATIVAR (PIN protege contra clonagem)' },
          { ref: 'Grupos', valor: '"Meus contatos" (ninguém te joga em grupo)' },
        ],
        formula: 'Limite a estranhos + ative 2 etapas + bloqueie golpistas',
        resultado: 'Privacidade e conta protegidas.',
        comentario: 'A verificação em duas etapas é a defesa nº1 contra o golpe de clonagem do WhatsApp. ATIVE agora — é o ajuste de segurança mais importante do app.',
      },
      vocabulario: [
        { palavra: 'Privacidade', def: 'O controle de quem vê suas informações no WhatsApp.' },
        { palavra: 'Verificação em duas etapas', def: 'Um PIN extra que protege sua conta contra invasão/clonagem.' },
        { palavra: 'Bloquear', def: 'Impedir que um número entre em contato com você.' },
      ],
      chave: [
        'Limite foto/recado/visto a "Meus contatos"',
        'ATIVE a verificação em duas etapas (defesa contra clonagem)',
        'Bloqueie golpistas e controle quem te adiciona em grupos',
      ],
      porque: 'Privacidade no WhatsApp protege sua imagem e, principalmente, sua segurança. A verificação em duas etapas evita o golpe de clonagem que causa enorme prejuízo — é um dos ajustes mais importantes que você pode fazer hoje.',
    },
    pratica: {
      instrucao: 'Abra o WhatsApp → Configurações → Privacidade. Vamos blindar sua conta.',
      passos: [
        'Em Privacidade, ajuste "Foto do perfil" e "Recado" pra "Meus contatos"',
        'Ajuste "Visto por último e online" ao seu gosto',
        'Em "Grupos", escolha "Meus contatos" (controla quem te adiciona)',
        'Volte e procure "Verificação em duas etapas" → ative e crie um PIN',
        'Anote o PIN num lugar seguro (você precisará dele às vezes)',
        'Veja como bloquear um número (abra uma conversa → menu → Bloquear)',
      ],
    },
    desafio: {
      cenario: 'Configure a privacidade e a segurança do seu WhatsApp, com destaque pra verificação em duas etapas ativada.',
      requisitos: [
        'Ajustei quem vê foto, recado e visto',
        'Configurei quem pode me adicionar em grupos',
        'ATIVEI a verificação em duas etapas (com PIN guardado)',
        'Sei como bloquear um número',
        'Minha conta está mais protegida',
      ],
      dica: 'Guarde o PIN da verificação em duas etapas com cuidado (não no próprio celular de forma óbvia). E NUNCA passe o código de 6 dígitos que chega por SMS pra ninguém — é assim que clonam o WhatsApp.',
    },
    validacao: [
      'Ajustei quem vê minhas informações',
      'Controlei quem me adiciona em grupos',
      'Ativei a verificação em duas etapas',
      'Sei bloquear números',
      'Minha conta está protegida',
    ],
  },

  'mob-wpp-9': {
    trilhaId: 'mob-wpp', numero: 9, titulo: 'Projeto: grupo organizado com regras',
    tempoTotal: 15, xp: 90, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo: você vai criar (ou reorganizar) um grupo modelo — bem administrado, com regras claras, etiqueta combinada e privacidade ajustada. Um grupo que funciona, em vez de incomodar.',
      conceito: {
        titulo: 'Um grupo que as pessoas gostam de participar',
        texto: 'A diferença entre um grupo útil e um insuportável está na administração. Este projeto reúne tudo da trilha: criar e nomear bem, escrever uma descrição com propósito e regras (etiqueta), definir quem administra e quem envia, e organizar com recursos como fixar. O resultado é um grupo que cumpre sua função sem virar fonte de estresse.',
      },
      estrutura: {
        titulo: 'O grupo modelo',
        partes: [
          { simbolo: '🏷️', desc: 'Identidade: nome claro e foto que representam o propósito.' },
          { simbolo: '📝', desc: 'Descrição: propósito + regras de etiqueta (sem corrente, assunto X, horários).' },
          { simbolo: '👑', desc: 'Administração: admins definidos; se for de avisos, "só admins enviam".' },
          { simbolo: '🧹', desc: 'Manutenção: orientar os membros e manter o foco.' },
        ],
      },
      exemplo: {
        titulo: 'Descrição de um grupo modelo',
        celulas: [
          { ref: 'Nome', valor: 'Família Silva 📍 (claro)' },
          { ref: 'Regras', valor: '"Sem corrente. Assuntos sérios no privado. Respeitem horários."' },
          { ref: 'Tipo', valor: 'Avisos do condomínio → só admins enviam' },
          { ref: 'Resultado', valor: 'Grupo útil, sem bagunça' },
        ],
        formula: 'Identidade + regras na descrição + administração + foco',
        resultado: 'Um grupo que cumpre seu papel sem incomodar.',
        comentario: 'Deixar as regras na descrição desde o início é o segredo: todo mundo que entra já sabe como o grupo funciona. Previne a bagunça antes de ela acontecer.',
      },
      vocabulario: [
        { palavra: 'Grupo modelo', def: 'Um grupo bem estruturado, com propósito e regras claras.' },
        { palavra: 'Regras de convivência', def: 'Combinados de etiqueta que mantêm o grupo saudável.' },
        { palavra: 'Moderação', def: 'O cuidado do admin em manter o foco e o respeito no grupo.' },
      ],
      chave: [
        'Identidade clara + regras na descrição + boa administração',
        'Defina o tipo (conversa ou só avisos)',
        'Regras desde o início previnem a bagunça',
      ],
      porque: 'Saber criar e administrar grupos saudáveis é uma habilidade social e organizacional valiosa — pra família, comunidade e trabalho. Você vira a pessoa que organiza, em vez de sofrer com a desorganização dos outros.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Crie um grupo modelo (ou reorganize um que você já administra).',
      passos: [
        'Crie um grupo (ou abra um que você administra)',
        'Defina um nome claro e uma foto adequada',
        'Escreva uma descrição com o propósito + 3 regras de etiqueta',
        'Decida o tipo: conversa livre ou "só admins enviam" (avisos)',
        'Se houver outros admins de confiança, promova-os',
        'Fixe a conversa do grupo se for importante pra você',
        'Avise os membros sobre as regras (ou confie na descrição)',
      ],
    },
    desafio: {
      cenario: 'Entregue um grupo modelo: identidade clara, descrição com propósito e regras, administração definida e organizado.',
      requisitos: [
        'Grupo com nome claro e foto',
        'Descrição com propósito + regras de etiqueta',
        'Tipo definido (conversa ou só avisos)',
        'Administração configurada',
        'Apliquei a etiqueta e a privacidade aprendidas',
      ],
      dica: 'Parabéns — você concluiu a trilha de WhatsApp! Agora você usa o app como ferramenta profissional e pessoal, com organização, etiqueta e segurança. Esses são os mesmos princípios que valem pra qualquer comunicação digital.',
    },
    validacao: [
      'Criei um grupo com identidade clara',
      'Escrevi descrição com propósito e regras',
      'Defini o tipo e a administração',
      'Apliquei etiqueta e privacidade',
      'Tenho um grupo modelo funcionando',
    ],
  },
};
