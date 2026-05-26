// ============================================================================
// CONTEÚDO — Banco e PIX com Segurança (mob-pix)
// Pagar, receber e identificar golpes. A missão 7 reaproveita o conteúdo
// validado dos "5 golpes de PIX" do protótipo. Vertente celular.
// ============================================================================

export const MOB_PIX = {
  'mob-pix-1': {
    trilhaId: 'mob-pix', numero: 1, titulo: 'O que é PIX, na real',
    tempoTotal: 6, xp: 30, vertente: 'celular',
    aula: {
      gancho: 'Todo mundo fala "me faz um PIX", mas você sabe o que é, de verdade, e por que ele é diferente de uma transferência comum? Entender isso te deixa confortável — e mais seguro — pra usar.',
      conceito: {
        titulo: 'Dinheiro que cai na hora, de graça, a qualquer momento',
        texto: 'O PIX é um jeito de transferir e receber dinheiro instantaneamente, criado pelo Banco Central. Diferente de TED/DOC (que demoram e às vezes custam), o PIX cai na hora, é gratuito pra pessoas físicas, e funciona 24 horas, todo dia. Você faz tudo pelo app do seu banco. É prático e seguro quando se sabe usar — e esta trilha vai te dar exatamente esse domínio.',
      },
      estrutura: {
        titulo: 'PIX em 4 fatos',
        partes: [
          { simbolo: '⚡', desc: 'Instantâneo: o dinheiro cai em segundos, não em horas/dias.' },
          { simbolo: '🆓', desc: 'Gratuito pra pessoa física (sem taxa pra enviar/receber).' },
          { simbolo: '🕐', desc: '24/7: funciona qualquer hora, qualquer dia, inclusive feriados.' },
          { simbolo: '📱', desc: 'Pelo app do banco: tudo acontece dentro do aplicativo do seu banco.' },
        ],
      },
      exemplo: {
        titulo: 'PIX x transferência antiga',
        celulas: [
          { ref: 'PIX', valor: 'Instantâneo · grátis · 24h' },
          { ref: 'TED', valor: 'Horário comercial · pode ter taxa' },
          { ref: 'Como', valor: 'Tudo pelo app do banco' },
          { ref: 'Atenção', valor: 'Cai na hora = não dá pra "cancelar" depois' },
        ],
        formula: 'Instantâneo + grátis + 24h, pelo app do banco',
        resultado: 'Pagamentos práticos a qualquer momento.',
        comentario: 'Justamente porque cai na hora e não dá pra cancelar, o cuidado ao confirmar os dados é essencial — vamos treinar isso nas próximas missões.',
      },
      vocabulario: [
        { palavra: 'PIX', def: 'Sistema de pagamento instantâneo do Banco Central, gratuito pra pessoa física.' },
        { palavra: 'Banco Central', def: 'A instituição que criou e regula o PIX no Brasil.' },
        { palavra: 'App do banco', def: 'O aplicativo do seu banco no celular, por onde você faz tudo.' },
      ],
      chave: [
        'PIX é instantâneo, gratuito (pessoa física) e funciona 24h',
        'Tudo acontece pelo app do seu banco',
        'Cai na hora — por isso confirmar dados é essencial',
      ],
      porque: 'O PIX virou a forma mais usada de pagamento no Brasil. Dominá-lo com segurança é essencial pra vida cotidiana — e saber seus riscos (cai na hora, sem cancelamento) é a base pra não cair em golpes.',
    },
    pratica: {
      instrucao: 'Pegue o celular e abra o app do seu banco (faça login com sua senha).',
      passos: [
        'Abra o aplicativo do seu banco',
        'Faça login (senha, biometria)',
        'Procure a área "PIX" no menu principal (costuma ter destaque)',
        'Observe as opções: pagar, receber, transferir, chaves',
        'NÃO faça nenhuma transação ainda — só explore a área PIX',
        'Veja se há um saldo ou extrato visível',
      ],
    },
    desafio: {
      cenario: 'Localize e explore a área PIX no app do seu banco, entendendo o que dá pra fazer ali.',
      requisitos: [
        'Acessei o app do meu banco com segurança',
        'Encontrei a área PIX',
        'Identifiquei as opções (pagar, receber, chaves)',
        'Entendo que o PIX é instantâneo e não cancelável',
        'Não fiz transações ainda (só explorei)',
      ],
      dica: 'Cada banco organiza o app de um jeito, mas a área PIX sempre existe e costuma ter destaque. Se não achar, use a busca dentro do app (lupa) e digite "PIX".',
    },
    validacao: [
      'Entendo o que é o PIX',
      'Sei que é instantâneo, grátis e 24h',
      'Sei acessar a área PIX no meu banco',
      'Reconheço as opções principais',
      'Entendo que não dá pra cancelar depois',
    ],
  },

  'mob-pix-2': {
    trilhaId: 'mob-pix', numero: 2, titulo: 'As 4 chaves PIX e qual escolher',
    tempoTotal: 8, xp: 40, vertente: 'celular',
    aula: {
      gancho: 'Pra receber um PIX, você passa uma "chave". Mas existem 4 tipos, e escolher certo faz diferença na praticidade e na privacidade. Qual usar pra quê? Vamos esclarecer.',
      conceito: {
        titulo: 'A chave é o "apelido" da sua conta pra receber',
        texto: 'A chave PIX é uma informação que identifica sua conta pra receber dinheiro — assim você não precisa passar agência e número da conta. Existem 4 tipos: CPF, telefone, e-mail e chave aleatória (um código gerado). Cada uma tem prós e contras de praticidade e privacidade. Você pode ter várias chaves, cada uma ligada a uma conta.',
      },
      estrutura: {
        titulo: 'As 4 chaves',
        partes: [
          { simbolo: '🆔', desc: 'CPF: fácil de lembrar, mas expõe seu CPF a quem te paga.' },
          { simbolo: '📞', desc: 'Telefone: prático, mas expõe seu número.' },
          { simbolo: '📧', desc: 'E-mail: bom meio-termo; expõe seu e-mail.' },
          { simbolo: '🔑', desc: 'Aleatória: um código sem significado — MAIS PRIVADA (não revela nada seu).' },
        ],
      },
      exemplo: {
        titulo: 'Qual usar em cada caso',
        celulas: [
          { ref: 'Pra conhecidos', valor: 'Telefone ou e-mail (fácil)' },
          { ref: 'Pra estranhos/vendas', valor: 'Chave aleatória (não expõe seus dados)' },
          { ref: 'Privacidade', valor: 'Aleatória é a mais segura' },
          { ref: 'Dica', valor: 'Você pode ter mais de uma chave' },
        ],
        formula: 'Conhecidos → telefone/e-mail · Público → chave aleatória',
        resultado: 'Praticidade com quem confia, privacidade com o resto.',
        comentario: 'Pra receber de pessoas que você não conhece (vendas, marketplace), prefira a chave aleatória: ela não revela seu CPF, telefone nem e-mail.',
      },
      vocabulario: [
        { palavra: 'Chave PIX', def: 'Identificador da sua conta pra receber (CPF, telefone, e-mail ou aleatória).' },
        { palavra: 'Chave aleatória', def: 'Um código gerado, sem significado, que protege seus dados pessoais.' },
        { palavra: 'QR Code de pagamento', def: 'Imagem que, escaneada, preenche os dados do PIX automaticamente.' },
      ],
      chave: [
        'A chave identifica sua conta pra receber, sem expor agência/conta',
        'CPF/telefone/e-mail são práticos, mas expõem o dado',
        'Chave aleatória é a mais privada — ideal pra vendas/estranhos',
      ],
      porque: 'Escolher a chave certa equilibra praticidade e privacidade — e proteger seus dados (CPF, telefone) reduz sua exposição a golpes. Pequena decisão, impacto real na sua segurança.',
    },
    pratica: {
      instrucao: 'No app do banco, vá na área PIX → "Minhas chaves" (ou "Chaves"). Só explore, ainda não cadastre.',
      passos: [
        'Na área PIX, procure "Minhas chaves" ou "Gerenciar chaves"',
        'Veja quais chaves você já tem cadastradas (se tiver)',
        'Identifique o tipo de cada uma (CPF, telefone, e-mail, aleatória)',
        'Veja a opção de "cadastrar nova chave" e os tipos disponíveis',
        'Reflita: pra que você recebe PIX? de quem?',
        'Decida qual tipo faz sentido pra você (vamos cadastrar na próxima missão)',
      ],
    },
    desafio: {
      cenario: 'Identifique quais chaves você já tem e decida qual tipo de chave faz mais sentido pra cada uso seu.',
      requisitos: [
        'Encontrei "Minhas chaves" no app',
        'Identifiquei as chaves que já tenho (e seus tipos)',
        'Entendo os prós/contras de cada tipo',
        'Decidi qual usar com conhecidos e qual com estranhos',
        'Sei que a aleatória é a mais privada',
      ],
      dica: 'Se você vende algo ou recebe de muita gente, vale cadastrar uma chave aleatória só pra isso. Assim você divulga essa chave sem expor seu CPF ou telefone pessoal.',
    },
    validacao: [
      'Conheço as 4 chaves PIX',
      'Entendo a privacidade de cada uma',
      'Sei onde ver minhas chaves',
      'Decidi qual usar em cada situação',
      'Sei que a aleatória protege meus dados',
    ],
  },

  'mob-pix-3': {
    trilhaId: 'mob-pix', numero: 3, titulo: 'Cadastrando sua primeira chave',
    tempoTotal: 10, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Decidiu qual chave quer? Agora vamos cadastrá-la — passo a passo, com calma, no app do seu banco. É rápido e reversível.',
      conceito: {
        titulo: 'Registrar a chave pra começar a receber',
        texto: 'Cadastrar uma chave é registrá-la na sua conta pra que pessoas possam te pagar usando ela. O processo é feito no app do banco e costuma pedir uma confirmação (por SMS, e-mail ou biometria) pra garantir que é você. Uma vez cadastrada, é só passar a chave pra quem vai te pagar. Você pode cadastrar, excluir e trocar chaves quando quiser.',
      },
      estrutura: {
        titulo: 'O passo a passo do cadastro',
        partes: [
          { simbolo: '➕', desc: 'No app: PIX → Minhas chaves → "Cadastrar/Nova chave".' },
          { simbolo: '🔢', desc: 'Escolha o tipo (ex: aleatória ou e-mail) e confirme.' },
          { simbolo: '✅', desc: 'Confirmação: o banco pode pedir código por SMS/e-mail ou biometria.' },
          { simbolo: '🔁', desc: 'Reversível: dá pra excluir e cadastrar outra quando quiser.' },
        ],
      },
      exemplo: {
        titulo: 'Cadastro tranquilo',
        celulas: [
          { ref: 'Passo 1', valor: 'PIX → Minhas chaves → Cadastrar' },
          { ref: 'Passo 2', valor: 'Escolher tipo (ex: chave aleatória)' },
          { ref: 'Passo 3', valor: 'Confirmar (código/biometria)' },
          { ref: 'Pronto', valor: 'Chave ativa pra receber' },
        ],
        formula: 'Escolher tipo → confirmar identidade → chave ativa',
        resultado: 'Você já pode receber PIX.',
        comentario: 'Cada chave (CPF, telefone, e-mail) só pode estar em uma conta por vez. A aleatória você pode ter várias. Tudo é reversível.',
      },
      vocabulario: [
        { palavra: 'Cadastrar chave', def: 'Registrar uma chave na sua conta pra poder receber por ela.' },
        { palavra: 'Confirmação', def: 'Passo de segurança (código/biometria) que prova que é você.' },
        { palavra: 'Portabilidade', def: 'Mover uma chave de um banco pra outro (possível, se quiser).' },
      ],
      chave: [
        'Cadastrar é registrar a chave pra receber',
        'O banco confirma sua identidade (código/biometria)',
        'É reversível: dá pra excluir e trocar quando quiser',
      ],
      porque: 'Ter uma chave cadastrada é o que permite você receber PIX de forma simples. É um passo prático que destrava vendas, divisões de conta e recebimentos do dia a dia.',
    },
    pratica: {
      instrucao: 'No app do banco, vamos cadastrar uma chave (escolha a que você decidiu na missão anterior).',
      passos: [
        'Vá em PIX → Minhas chaves → "Cadastrar nova chave"',
        'Escolha o tipo (sugestão pra treino: chave aleatória, que não expõe nada)',
        'Siga as instruções e confirme (código/biometria, se pedido)',
        'Veja a chave cadastrada na lista',
        'Copie a chave (botão de copiar) pra testar passá-la a alguém',
        'Se quiser, cadastre uma segunda (ex: e-mail) pra conhecidos',
      ],
    },
    desafio: {
      cenario: 'Cadastre pelo menos uma chave PIX na sua conta, pronta pra receber.',
      requisitos: [
        'Acessei "Cadastrar nova chave"',
        'Escolhi o tipo adequado',
        'Confirmei minha identidade no processo',
        'A chave aparece cadastrada na lista',
        'Sei copiar a chave pra passar a quem vai me pagar',
      ],
      dica: 'Cadastre uma chave aleatória pra usos públicos (vendas) e, se quiser, o e-mail pra conhecidos. Evite divulgar amplamente seu CPF como chave — guarde-o pra você.',
    },
    validacao: [
      'Sei cadastrar uma chave PIX',
      'Confirmei minha identidade no cadastro',
      'Minha chave está ativa',
      'Sei copiar a chave pra compartilhar',
      'Sei que posso excluir/trocar depois',
    ],
  },

  'mob-pix-4': {
    trilhaId: 'mob-pix', numero: 4, titulo: 'Fazendo um PIX sem medo',
    tempoTotal: 8, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'A hora de pagar é onde bate o frio na barriga: "e se eu mandar pra pessoa errada?". A boa notícia: o app SEMPRE mostra o nome de quem vai receber antes de confirmar. Conferir esse nome é o seu seguro.',
      conceito: {
        titulo: 'Pagar com calma e conferindo',
        texto: 'Fazer um PIX é simples: você informa a chave (ou escaneia um QR Code), digita o valor, e o app mostra os dados de quem vai receber. O passo MAIS importante é conferir o nome do recebedor antes de confirmar — é a garantia de que o dinheiro vai pra pessoa certa. Como o PIX não se cancela, essa conferência de 2 segundos evita 99% dos erros.',
      },
      estrutura: {
        titulo: 'O passo a passo seguro',
        partes: [
          { simbolo: '🔑', desc: 'Informe a chave (cole/digite) ou escaneie o QR Code do recebedor.' },
          { simbolo: '💰', desc: 'Digite o valor com atenção (confira as casas).' },
          { simbolo: '👀', desc: 'CONFIRA O NOME do recebedor que aparece — é a pessoa certa?' },
          { simbolo: '✅', desc: 'Só então confirme (com senha/biometria).' },
        ],
      },
      exemplo: {
        titulo: 'A conferência que salva',
        celulas: [
          { ref: 'Vou pagar', valor: 'João da Silva' },
          { ref: 'App mostra', valor: 'Recebedor: JOÃO DA SILVA ✓' },
          { ref: 'Bate?', valor: 'Sim → confirmar' },
          { ref: 'Nome estranho?', valor: 'NÃO confirme. Cancele e cheque.' },
        ],
        formula: 'Chave/QR → valor → CONFERIR NOME → confirmar',
        resultado: 'Pagamento certo, sem sustos.',
        comentario: 'Se o nome que aparece não for de quem você espera receber, PARE. Não confirme. Pode ser erro de digitação da chave ou um golpe.',
      },
      vocabulario: [
        { palavra: 'Recebedor', def: 'A pessoa/empresa que vai receber o PIX.' },
        { palavra: 'QR Code', def: 'Imagem que, escaneada, preenche chave e valor automaticamente.' },
        { palavra: 'Copia e cola', def: 'Um código de texto que substitui a chave; você cola no app.' },
      ],
      chave: [
        'Sempre confira o NOME do recebedor antes de confirmar',
        'Confira o valor com atenção',
        'Nome estranho? PARE e não confirme',
      ],
      porque: 'Conferir o nome do recebedor é o hábito que evita quase todos os erros e muitos golpes de PIX. Dois segundos de atenção protegem seu dinheiro — já que não há volta depois de confirmar.',
    },
    pratica: {
      instrucao: 'No app do banco, faça um PIX de valor pequeno (ex: R$ 1 pra você mesmo, entre suas contas, ou pra um familiar avisado). Treine a conferência.',
      passos: [
        'Vá em PIX → Pagar/Transferir',
        'Informe uma chave (sua própria, ou de alguém avisado) ou escaneie um QR',
        'Digite um valor pequeno (ex: R$ 1)',
        'PARE na tela de confirmação: leia o NOME do recebedor',
        'Confirme que o nome bate com quem você quer pagar',
        'Finalize com senha/biometria',
        'Veja o comprovante na tela',
      ],
    },
    desafio: {
      cenario: 'Faça um PIX de valor pequeno com segurança, conferindo o nome do recebedor antes de confirmar.',
      requisitos: [
        'Informei a chave ou escaneei um QR Code',
        'Digitei o valor com atenção',
        'Conferi o NOME do recebedor antes de confirmar',
        'Confirmei com senha/biometria',
        'Vi o comprovante',
      ],
      dica: 'Crie o hábito de ler o nome em voz baixa ("vou pagar pro João da Silva... confere"). Verbalizar força a conferência e evita o "confirmar no automático" que leva a erros.',
    },
    validacao: [
      'Sei iniciar um pagamento PIX',
      'Sei informar chave ou escanear QR',
      'CONFIRO o nome do recebedor sempre',
      'Confirmo com senha/biometria',
      'Sei ver o comprovante',
    ],
  },

  'mob-pix-5': {
    trilhaId: 'mob-pix', numero: 5, titulo: 'Recebendo PIX e dando comprovante',
    tempoTotal: 9, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Do outro lado da moeda: como receber um PIX de forma fácil, e como mostrar (ou pedir) um comprovante? Saber receber bem é essencial pra quem vende, divide contas ou cobra de alguém.',
      conceito: {
        titulo: 'Receber é tão importante quanto pagar',
        texto: 'Pra receber, você passa sua chave OU gera um QR Code (que a pessoa escaneia) ou um "copia e cola". O dinheiro cai na hora e você vê na hora. O comprovante (seu e o de quem paga) é a prova da transação — útil pra confirmar pagamentos. Saber gerar QR Code e localizar comprovantes te dá controle total sobre os recebimentos.',
      },
      estrutura: {
        titulo: 'Recebendo de 3 jeitos',
        partes: [
          { simbolo: '🔑', desc: 'Passar a chave: a forma mais simples (a pessoa usa sua chave pra pagar).' },
          { simbolo: '📲', desc: 'QR Code: gere no app (PIX → Receber → QR Code); a pessoa escaneia.' },
          { simbolo: '📋', desc: 'Copia e cola: gere um código de texto e envie por WhatsApp.' },
          { simbolo: '🧾', desc: 'Comprovante: após receber, o app gera um comprovante (compartilhável).' },
        ],
      },
      exemplo: {
        titulo: 'QR Code com valor x sem valor',
        celulas: [
          { ref: 'QR sem valor', valor: 'A pessoa digita quanto vai pagar' },
          { ref: 'QR com valor', valor: 'Já vem com o valor definido (ideal pra cobrança)' },
          { ref: 'Comprovante', valor: 'Prova da transação, com data/valor/nomes' },
          { ref: 'Conferir', valor: 'Veja o dinheiro no extrato, não só a "tela"' },
        ],
        formula: 'Chave/QR/copia-e-cola → recebe na hora → comprovante',
        resultado: 'Recebimentos práticos e comprovados.',
        comentario: 'CUIDADO com um golpe: o golpista mostra um "comprovante" FALSO de pagamento. Sempre confirme o dinheiro no SEU extrato/saldo, não confie só na imagem que te mostraram.',
      },
      vocabulario: [
        { palavra: 'QR Code de cobrança', def: 'Imagem que a pessoa escaneia pra te pagar (pode já ter o valor).' },
        { palavra: 'Comprovante', def: 'Documento que prova a transação (data, valor, pagador, recebedor).' },
        { palavra: 'Extrato', def: 'A lista de movimentações da sua conta; a prova real do que entrou.' },
      ],
      chave: [
        'Receba passando a chave, por QR Code ou copia e cola',
        'O comprovante é a prova da transação',
        'CONFIRME no seu extrato — não confie em "comprovante" que te mostram',
      ],
      porque: 'Saber receber bem é essencial pra quem vende, cobra ou divide contas. E entender que "comprovante mostrado" não é prova (só o seu extrato é) te protege de um golpe comum.',
    },
    pratica: {
      instrucao: 'No app do banco, vamos praticar receber.',
      passos: [
        'Vá em PIX → "Receber" (ou "Cobrar")',
        'Gere um QR Code sem valor e veja como fica',
        'Gere um QR Code COM valor (ex: R$ 5) — note a diferença',
        'Gere também um "copia e cola" e veja que dá pra enviar por WhatsApp',
        'Se possível, peça um PIX pequeno a um familiar e veja cair no extrato',
        'Abra o comprovante do recebimento e veja a opção de compartilhar',
        'Confira o valor no seu extrato/saldo (não só na tela de aviso)',
      ],
    },
    desafio: {
      cenario: 'Pratique receber um PIX: gere um QR Code (ou copia e cola), receba um valor e localize o comprovante no extrato.',
      requisitos: [
        'Gerei um QR Code de recebimento',
        'Sei gerar com e sem valor definido',
        'Recebi (ou simulei) e localizei no extrato',
        'Encontrei e sei compartilhar o comprovante',
        'Entendo que só o extrato é prova real (não a imagem mostrada)',
      ],
      dica: 'Pra cobranças (vendas), use o QR Code COM valor: evita que a pessoa digite errado e agiliza. E sempre confirme o recebimento no seu app, nunca só pela palavra ou print do pagador.',
    },
    validacao: [
      'Sei receber passando a chave',
      'Sei gerar QR Code (com e sem valor)',
      'Sei gerar copia e cola',
      'Sei achar e compartilhar o comprovante',
      'Confirmo recebimentos no meu extrato',
    ],
  },

  'mob-pix-6': {
    trilhaId: 'mob-pix', numero: 6, titulo: 'Limites diários: por que existem',
    tempoTotal: 8, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Você sabia que pode definir um limite máximo de quanto sai da sua conta por PIX? Esse ajuste é uma das melhores defesas contra golpes — porque limita o prejuízo, mesmo no pior cenário.',
      conceito: {
        titulo: 'Limites: o freio de segurança do seu dinheiro',
        texto: 'Os bancos permitem definir limites de quanto você pode transferir por PIX (por transação, por dia e à noite). Limites existem pra te proteger: se cair num golpe ou tiver o celular roubado, o estrago fica restrito ao limite. Reduzir o limite pra um valor compatível com seu uso real (e um limite noturno menor) é uma das proteções mais eficazes que existem.',
      },
      estrutura: {
        titulo: 'Configurando seus limites',
        partes: [
          { simbolo: '📉', desc: 'Limite diário: o máximo que sai por dia. Defina compatível com seu uso real.' },
          { simbolo: '🌙', desc: 'Limite noturno (20h-6h): defina BEM menor — golpes/roubo costumam ser à noite.' },
          { simbolo: '⏳', desc: 'Aumento tem prazo: por lei, AUMENTAR limite demora algumas horas (proteção).' },
          { simbolo: '⚙️', desc: 'Onde: app do banco → PIX/Segurança → "Limites".' },
        ],
      },
      exemplo: {
        titulo: 'Limites que protegem',
        celulas: [
          { ref: 'Diário', valor: 'R$ 1.000 (se você não move mais que isso)' },
          { ref: 'Noturno', valor: 'R$ 200 (à noite quase ninguém precisa de mais)' },
          { ref: 'Por que', valor: 'Golpe/roubo? O prejuízo fica limitado' },
          { ref: 'Aumentar', valor: 'Demora horas (de propósito, pra te proteger)' },
        ],
        formula: 'Limite diário realista + noturno baixo = prejuízo contido',
        resultado: 'Mesmo no pior caso, você perde pouco.',
        comentario: 'O fato de AUMENTAR o limite demorar horas é proposital: se um golpista tenta subir seu limite pra roubar mais, não consegue na hora — dá tempo de você perceber.',
      },
      vocabulario: [
        { palavra: 'Limite PIX', def: 'O valor máximo que você pode transferir (por transação, dia ou período).' },
        { palavra: 'Limite noturno', def: 'Limite reduzido entre 20h e 6h, pra proteção contra golpes/roubo.' },
        { palavra: 'Prazo de aumento', def: 'O tempo (horas) que o banco leva pra liberar um aumento de limite.' },
      ],
      chave: [
        'Defina o limite diário compatível com seu uso REAL',
        'Limite noturno bem menor (a maioria dos golpes é à noite)',
        'Aumentar limite demora de propósito — é proteção',
      ],
      porque: 'Configurar limites é uma das defesas mais poderosas: ela não evita o golpe, mas LIMITA o prejuízo a um valor que você definiu. É a diferença entre perder pouco e perder tudo.',
    },
    pratica: {
      instrucao: 'No app do banco, vamos ajustar seus limites PIX.',
      passos: [
        'Vá em PIX (ou Segurança) → "Limites"',
        'Veja seus limites atuais (diário, por transação, noturno)',
        'Pense: quanto você realmente movimenta por dia?',
        'Ajuste o limite diário pra um valor compatível (pode reduzir agora)',
        'Defina um limite noturno bem menor (ex: R$ 200)',
        'Repare que REDUZIR é imediato, mas AUMENTAR tem prazo',
        'Confirme as alterações',
      ],
    },
    desafio: {
      cenario: 'Configure seus limites PIX pra proteger seu dinheiro: limite diário realista e limite noturno reduzido.',
      requisitos: [
        'Encontrei a configuração de limites',
        'Ajustei o limite diário pro meu uso real',
        'Defini um limite noturno menor',
        'Entendo por que aumentar demora (proteção)',
        'Confirmei as alterações',
      ],
      dica: 'Não deixe limites altíssimos "por garantia". O contrário é mais seguro: mantenha baixo o suficiente pro seu dia a dia. Se um dia precisar pagar algo grande, você aumenta com antecedência (lembrando do prazo).',
    },
    validacao: [
      'Sei onde configurar os limites',
      'Defini um limite diário realista',
      'Defini um limite noturno menor',
      'Entendo o prazo de aumento como proteção',
      'Meu dinheiro está mais protegido',
    ],
  },

  // ===== MISSÃO 7 — 5 GOLPES (conteúdo validado do protótipo) =====
  'mob-pix-7': {
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
      porque: 'Em 2024, bilhões em PIX foram alvo de fraude no Brasil. Quem aprende a reconhecer os 5 padrões acima não cai mais. É uma das aulas mais importantes do app inteiro.',
    },
    pratica: {
      instrucao: 'Pega seu celular agora. Vamos revisar suas configurações de segurança.',
      passos: [
        'Abra o app do seu banco',
        'Procure "Configurações" ou "Segurança" no menu',
        'Procure "Limite PIX" — confirme o limite diário (da missão anterior)',
        'Confirme o limite noturno menor (ex: R$ 200) entre 20h e 6h',
        'Habilite "Confirmação por biometria" pra PIX, se houver',
        'No WhatsApp, confirme a verificação em duas etapas ativada (trilha mob-wpp)',
        'Combine uma "palavra-código" com seus familiares pra usar em pedidos por mensagem',
      ],
    },
    desafio: {
      cenario: 'Aplique pelo menos 4 das configurações acima e ensine uma pessoa da família (filho, neto, irmão) a fazer o mesmo no celular dela.',
      requisitos: [
        'Confirmei um limite PIX diário no meu banco',
        'Confirmei um limite noturno menor',
        'Confirmei a verificação em duas etapas no WhatsApp',
        'Combinei uma palavra-código com pelo menos 1 familiar',
        'Bônus: ensinei outra pessoa a fazer o mesmo',
      ],
      dica: 'Conta na próxima conversa de família que você sabe identificar golpes agora. Quem não conhece se sente vulnerável; quem ensina vira referência.',
    },
    validacao: [
      'Sei reconhecer os 5 tipos de golpe',
      'Confirmei um limite PIX diário',
      'Confirmei um limite noturno menor',
      'Tenho verificação em duas etapas no WhatsApp',
      'Combinei uma palavra-código com a família',
    ],
  },

  'mob-pix-8': {
    trilhaId: 'mob-pix', numero: 8, titulo: 'Bloqueio cautelar (MED)',
    tempoTotal: 7, xp: 50, vertente: 'celular',
    aula: {
      gancho: 'Caiu num golpe ou fez um PIX por engano? Nem tudo está perdido. Existe um mecanismo oficial pra tentar reaver o dinheiro — e quanto mais rápido você agir, maior a chance.',
      conceito: {
        titulo: 'O "freio de emergência" do PIX',
        texto: 'O Mecanismo Especial de Devolução (MED), também chamado de bloqueio cautelar, é um pedido que você faz ao seu banco pra tentar bloquear e reaver um PIX feito por golpe ou erro. O banco aciona o banco do recebedor pra travar o valor (se ainda estiver lá). Não é garantido — depende do dinheiro ainda não ter sido sacado — mas é a chance real de recuperação, e o tempo é crucial.',
      },
      estrutura: {
        titulo: 'O que fazer (rápido)',
        partes: [
          { simbolo: '🏦', desc: 'Acione o banco IMEDIATAMENTE: app, telefone oficial ou agência → pedir MED/bloqueio cautelar.' },
          { simbolo: '👮', desc: 'Registre um boletim de ocorrência (B.O.) — online ou na delegacia.' },
          { simbolo: '⏱️', desc: 'Tempo é tudo: quanto antes, maior a chance do dinheiro ainda estar parado.' },
          { simbolo: '📅', desc: 'Prazo: você tem até 80 dias pra abrir o pedido, mas aja na primeira hora.' },
        ],
      },
      exemplo: {
        titulo: 'Plano de ação se cair num golpe',
        celulas: [
          { ref: '1º', valor: 'Acionar o banco e pedir o MED (bloqueio cautelar)' },
          { ref: '2º', valor: 'Registrar boletim de ocorrência (B.O.)' },
          { ref: '3º', valor: 'Reunir provas (prints, comprovante, chave)' },
          { ref: 'Lembre', valor: 'Não é garantido, mas vale sempre tentar' },
        ],
        formula: 'Banco (MED) + B.O. + provas, o mais rápido possível',
        resultado: 'A melhor chance de reaver o dinheiro.',
        comentario: 'Guarde o telefone oficial do seu banco (do verso do cartão) salvo no celular. Na emergência, você não quer perder tempo procurando — nem cair num "telefone do banco" falso.',
      },
      vocabulario: [
        { palavra: 'MED', def: 'Mecanismo Especial de Devolução: pedido pra tentar reaver um PIX de golpe/erro.' },
        { palavra: 'Bloqueio cautelar', def: 'Outro nome do MED; trava o valor no banco do recebedor.' },
        { palavra: 'Boletim de ocorrência (B.O.)', def: 'Registro oficial do golpe na polícia (pode ser online).' },
      ],
      chave: [
        'Caiu em golpe/erro? Acione o banco IMEDIATAMENTE e peça o MED',
        'Registre um B.O. e reúna provas',
        'Tempo é crucial — aja na primeira hora',
      ],
      porque: 'Saber que existe o MED — e agir rápido — pode ser a diferença entre recuperar ou perder o dinheiro. Conhecer esse plano de ação tira o desespero e dá um caminho concreto na pior hora.',
    },
    pratica: {
      instrucao: 'Vamos preparar seu "plano de emergência" (não há golpe real agora — é preparação). Pegue o celular.',
      passos: [
        'Salve o telefone oficial do seu banco (do verso do cartão) com nome claro: "BANCO OFICIAL"',
        'No app do banco, localize onde se reportaria um golpe/contestar uma transação',
        'Pesquise como registrar um B.O. online no seu estado (delegacia eletrônica)',
        'Anote os 3 passos do plano: banco (MED) → B.O. → provas',
        'Combine com a família: se alguém cair, aciona o banco na hora',
        'Guarde esse plano num lugar acessível (nota fixada, papel)',
      ],
    },
    desafio: {
      cenario: 'Monte seu plano de ação anti-golpe: contatos oficiais salvos e os passos do MED prontos pra usar se precisar.',
      requisitos: [
        'Salvei o telefone oficial do banco',
        'Sei onde reportar/contestar no app',
        'Sei como registrar um B.O. (online)',
        'Anotei os 3 passos do plano',
        'Combinei o plano com a família',
      ],
      dica: 'Esperança realista: o MED nem sempre recupera o dinheiro (se o golpista sacou rápido, já era). Por isso, PREVENIR (limites, conferir nome, palavra-código) continua sendo a melhor defesa.',
    },
    validacao: [
      'Sei o que é o MED/bloqueio cautelar',
      'Tenho o telefone oficial do banco salvo',
      'Sei registrar um B.O.',
      'Tenho um plano de ação claro',
      'Sei que agir rápido é essencial',
    ],
  },

  'mob-pix-9': {
    trilhaId: 'mob-pix', numero: 9, titulo: 'PIX agendado e recorrente',
    tempoTotal: 10, xp: 60, vertente: 'celular',
    aula: {
      gancho: 'Esquece de pagar contas e toma multa? Quer programar um pagamento pra uma data certa? O PIX agendado e o recorrente pagam sozinhos, no dia certo — sua memória agradece.',
      conceito: {
        titulo: 'Pagamentos no piloto automático',
        texto: 'Além do PIX na hora, você pode AGENDAR um PIX pra uma data futura (ex: pagar o aluguel todo dia 5) ou criar um PIX RECORRENTE, que se repete automaticamente (semanal, mensal). É ideal pra contas fixas: você programa uma vez e não esquece mais. O dinheiro só sai na data, então é preciso ter saldo no dia — mas o app costuma avisar.',
      },
      estrutura: {
        titulo: 'Agendado x recorrente',
        partes: [
          { simbolo: '📅', desc: 'Agendado: um PIX pra uma data futura específica (acontece uma vez).' },
          { simbolo: '🔁', desc: 'Recorrente: repete automaticamente (todo mês, toda semana) até você cancelar.' },
          { simbolo: '💰', desc: 'Saldo: precisa ter o valor na conta na data; senão o pagamento falha.' },
          { simbolo: '✖️', desc: 'Cancelar: dá pra cancelar um agendamento/recorrência antes da data.' },
        ],
      },
      exemplo: {
        titulo: 'Contas que se pagam sozinhas',
        celulas: [
          { ref: 'Aluguel', valor: 'PIX recorrente todo dia 5' },
          { ref: 'Mesada', valor: 'PIX recorrente toda semana' },
          { ref: 'Conta única', valor: 'PIX agendado pra a data de vencimento' },
          { ref: 'Cuidado', valor: 'Ter saldo no dia + revisar de vez em quando' },
        ],
        formula: 'Agendado (uma vez) ou recorrente (repete) → nunca mais esquecer',
        resultado: 'Contas em dia, sem depender da memória.',
        comentario: 'Revise seus pagamentos recorrentes de tempos em tempos: cancele os que não fazem mais sentido. E sempre garanta saldo na data pra não falhar.',
      },
      vocabulario: [
        { palavra: 'PIX agendado', def: 'Um PIX programado pra acontecer numa data futura (uma vez).' },
        { palavra: 'PIX recorrente', def: 'Um PIX que se repete automaticamente num intervalo (mensal, etc.).' },
        { palavra: 'Vencimento', def: 'A data limite pra pagar uma conta sem multa.' },
      ],
      chave: [
        'Agendado = uma vez no futuro; recorrente = repete sozinho',
        'Precisa ter saldo na data do pagamento',
        'Revise as recorrências e cancele o que não usa mais',
      ],
      porque: 'Automatizar contas fixas evita multas, juros e o estresse de lembrar de tudo. É organização financeira que trabalha por você — especialmente útil pra contas mensais recorrentes.',
    },
    pratica: {
      instrucao: 'No app do banco, vamos explorar o agendamento (pode agendar um valor pequeno pra você mesmo, ou só explorar).',
      passos: [
        'Vá em PIX → Pagar e procure a opção "Agendar"',
        'Veja como escolher uma data futura pro pagamento',
        'Procure a opção de pagamento "recorrente"/"repetir"',
        'Entenda as opções de frequência (mensal, semanal)',
        'Se quiser testar: agende um PIX de R$ 1 pra você mesmo pra amanhã',
        'Veja onde ficam os pagamentos agendados (pra acompanhar/cancelar)',
        'Confirme que sabe cancelar um agendamento',
      ],
    },
    desafio: {
      cenario: 'Configure (ou simule) o pagamento automático de uma conta fixa sua via PIX agendado ou recorrente.',
      requisitos: [
        'Encontrei a opção de agendar/recorrente',
        'Entendo a diferença entre as duas',
        'Configurei (ou simulei) um pagamento futuro',
        'Sei onde acompanhar e cancelar agendamentos',
        'Sei que preciso ter saldo na data',
      ],
      dica: 'Para contas fixas (aluguel, mensalidades), o recorrente é ouro. Mas configure também um lembrete na agenda pra conferir o saldo uns dias antes — assim o pagamento nunca falha por falta de fundo.',
    },
    validacao: [
      'Entendo PIX agendado e recorrente',
      'Sei agendar um pagamento futuro',
      'Sei configurar uma recorrência',
      'Sei acompanhar e cancelar',
      'Sei que preciso ter saldo na data',
    ],
  },

  'mob-pix-10': {
    trilhaId: 'mob-pix', numero: 10, titulo: 'Projeto: blinde sua segurança PIX',
    tempoTotal: 15, xp: 100, vertente: 'celular',
    aula: {
      gancho: 'Hora de juntar tudo numa "blindagem" completa do seu PIX: limites, biometria, chaves seguras, plano anti-golpe e família alinhada. No fim, você será praticamente imune aos golpes mais comuns.',
      conceito: {
        titulo: 'Segurança em camadas',
        texto: 'Não existe uma única medida que protege tudo — a segurança vem de camadas que se somam. Este projeto reúne todas as defesas da trilha: limites configurados, biometria ativada, chaves que não expõem seus dados, hábito de conferir o nome, plano de ação se algo der errado, e a família alinhada. Juntas, essas camadas tornam o golpe muito mais difícil e o prejuízo muito menor.',
      },
      estrutura: {
        titulo: 'As camadas da blindagem',
        partes: [
          { simbolo: '📉', desc: 'Limites: diário realista + noturno baixo.' },
          { simbolo: '👆', desc: 'Biometria: confirmação por digital/rosto pra pagamentos.' },
          { simbolo: '🔑', desc: 'Chaves: aleatória pra usos públicos (não expor CPF/telefone).' },
          { simbolo: '👁️', desc: 'Hábito: conferir nome sempre + palavra-código com a família + plano MED.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist da blindagem',
        celulas: [
          { ref: 'Limites', valor: 'Diário e noturno ajustados ✓' },
          { ref: 'Biometria', valor: 'Ativada pra PIX ✓' },
          { ref: 'Reconheço', valor: 'Os 5 golpes + confiro nome sempre ✓' },
          { ref: 'Família', valor: 'Palavra-código + plano anti-golpe ✓' },
        ],
        formula: 'Limites + biometria + chaves + hábitos + família = blindagem',
        resultado: 'Praticamente imune aos golpes mais comuns.',
        comentario: 'Nenhuma camada é perfeita sozinha, mas todas juntas tornam você um alvo difícil — e os golpistas preferem alvos fáceis. Blindar-se é também desestimular o ataque.',
      },
      vocabulario: [
        { palavra: 'Segurança em camadas', def: 'Várias proteções que se somam, sem depender de uma só.' },
        { palavra: 'Biometria', def: 'Confirmação por digital ou reconhecimento facial.' },
        { palavra: 'Blindagem', def: 'O conjunto de medidas que protege sua conta e seu dinheiro.' },
      ],
      chave: [
        'Segurança vem de camadas somadas, não de uma medida só',
        'Limites + biometria + chave aleatória + hábitos + família',
        'Alvo difícil desestimula o golpista',
      ],
      porque: 'Este projeto consolida toda a trilha numa proteção real e completa do seu dinheiro. Sair daqui blindado — e com a família alinhada — evita o que pode ser o maior prejuízo financeiro de uma vida.',
    },
    pratica: {
      instrucao: 'Reserve 15 minutos. Aplique a blindagem completa, usando tudo da trilha.',
      passos: [
        'Confirme/ajuste seus limites PIX (diário realista + noturno baixo)',
        'Ative a confirmação por biometria pros pagamentos PIX',
        'Confira suas chaves: tenha uma aleatória pra usos públicos',
        'Confirme a verificação em duas etapas do WhatsApp ativada',
        'Combine (ou reforce) a palavra-código com a família',
        'Tenha o telefone oficial do banco salvo e o plano MED anotado',
        'Faça uma revisão final: todas as camadas estão no lugar?',
      ],
    },
    desafio: {
      cenario: 'Entregue sua blindagem PIX completa: limites, biometria, chaves seguras, hábitos de conferência e família alinhada.',
      requisitos: [
        'Limites diário e noturno configurados',
        'Biometria ativada pra PIX',
        'Tenho chave aleatória pra usos públicos',
        'Reconheço os 5 golpes e confiro nome sempre',
        'Palavra-código combinada + plano MED pronto',
        'Ensinei pelo menos uma camada a um familiar',
      ],
      dica: 'Parabéns — você blindou seu PIX! Essa é uma das trilhas que mais evita prejuízo real na vida das pessoas. Revise a blindagem a cada poucos meses e mantenha a família sempre alinhada. Segurança é hábito contínuo.',
    },
    validacao: [
      'Configurei limites de proteção',
      'Ativei a biometria',
      'Uso chaves que não expõem meus dados',
      'Tenho os hábitos de conferência',
      'Família alinhada + plano de ação',
      'Meu PIX está blindado',
    ],
  },
};
