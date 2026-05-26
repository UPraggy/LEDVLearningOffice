// ============================================================================
// CONTEÚDO — Defesa Digital (amb-seg)
// O par DEFENSIVO de sec-ataque: senhas, 2FA, phishing, golpes por tel/SMS,
// Wi-Fi público, ação pós-golpe, privacidade. Vertente "ambos".
// ============================================================================

export const AMB_SEG = {
  'amb-seg-1': {
    trilhaId: 'amb-seg', numero: 1, titulo: 'Senhas fortes de verdade',
    tempoTotal: 9, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Sua senha é seu nome, uma data, ou "123456"? Usa a mesma em tudo? Essa é a porta mais fácil que você deixa aberta pros golpistas. Criar senhas fortes é a defesa nº1 — e é mais simples do que parece.',
      conceito: {
        titulo: 'A senha é a fechadura da sua vida digital',
        texto: 'Cada conta sua (banco, e-mail, redes) é protegida por uma senha. Senhas fracas (curtas, óbvias, com seus dados) são fáceis de adivinhar ou quebrar. E usar a MESMA senha em tudo é perigoso: se vazar de um lugar, o criminoso entra em todos. Senhas fortes são longas, únicas (uma por serviço) e sem dados pessoais. Parece difícil de lembrar — e é, por isso a próxima missão traz a solução.',
      },
      estrutura: {
        titulo: 'O que faz uma senha forte',
        partes: [
          { simbolo: '📏', desc: 'Longa: 12+ caracteres. Tamanho importa mais que símbolos malucos.' },
          { simbolo: '🎲', desc: 'Imprevisível: nada de nome, data de nascimento, "123456", "senha".' },
          { simbolo: '🔑', desc: 'Única: uma senha DIFERENTE pra cada serviço importante.' },
          { simbolo: '🧩', desc: 'Dica fácil: junte 3-4 palavras aleatórias ("girafa-janela-café-azul") — longa e memorável.' },
        ],
      },
      exemplo: {
        titulo: 'Fraca x forte',
        celulas: [
          { ref: 'Fraca', valor: 'maria1962 · 123456 · seunome' },
          { ref: 'Fraca', valor: 'a mesma senha em banco, e-mail e loja' },
          { ref: 'Forte', valor: 'girafa-janela-cafe-azul (longa, sem sentido)' },
          { ref: 'Forte', valor: 'uma diferente pra cada conta importante' },
        ],
        formula: 'Longa + imprevisível + única por serviço',
        resultado: 'Fechaduras que o golpista não arromba.',
        comentario: 'A técnica das "palavras aleatórias juntas" cria senhas longas (fortes) e fáceis de lembrar. Bem melhor que "P@ssw0rd!" — que é curta e previsível, apesar dos símbolos.',
      },
      vocabulario: [
        { palavra: 'Senha forte', def: 'Longa, imprevisível e única — difícil de adivinhar ou quebrar.' },
        { palavra: 'Senha única', def: 'Uma senha diferente pra cada serviço (não reutilizada).' },
        { palavra: 'Vazamento', def: 'Quando senhas de um serviço são roubadas; por isso não reusar é vital.' },
      ],
      chave: [
        'Longa (12+) vence complicada e curta',
        'Uma senha DIFERENTE pra cada conta importante',
        'Junte palavras aleatórias pra ser forte e memorável',
      ],
      porque: 'A senha é a primeira e mais importante defesa de todas as suas contas. Senhas fortes e únicas evitam que um único vazamento abra sua vida inteira — é a base de toda a segurança digital.',
    },
    pratica: {
      instrucao: 'Pegue papel (ou as notas) e o celular. Vamos avaliar e melhorar suas senhas.',
      passos: [
        'Liste mentalmente suas contas mais importantes (banco, e-mail, Gov.br)',
        'Seja honesto: você reusa a mesma senha em várias? Alguma é óbvia?',
        'Crie uma senha forte juntando 3-4 palavras aleatórias + um número',
        'Comece pela conta MAIS importante (e-mail principal ou banco) e troque a senha',
        'Use uma senha DIFERENTE pra essa conta (não a que você usa em tudo)',
        'Repita pra mais uma conta importante',
        'Não anote as senhas em papel solto — a próxima missão mostra onde guardar',
      ],
    },
    desafio: {
      cenario: 'Identifique suas senhas fracas/repetidas e troque a de pelo menos 2 contas importantes por senhas fortes e únicas.',
      requisitos: [
        'Identifiquei minhas senhas fracas ou repetidas',
        'Criei senhas fortes (longas, imprevisíveis)',
        'Troquei a senha de pelo menos 2 contas importantes',
        'Usei senhas DIFERENTES pra cada uma',
        'Entendo por que não reutilizar é vital',
      ],
      dica: 'Comece pelas "contas-chave": seu e-mail principal (que recupera todas as outras) e seu banco. Proteger essas duas com senhas fortes e únicas já eleva muito sua segurança.',
    },
    validacao: [
      'Sei o que é uma senha forte',
      'Entendo o perigo de reusar senhas',
      'Sei criar senhas fortes e memoráveis',
      'Troquei senhas de contas importantes',
      'Uso senhas únicas',
    ],
  },

  'amb-seg-2': {
    trilhaId: 'amb-seg', numero: 2, titulo: 'Gerenciador de senhas',
    tempoTotal: 10, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Mas como vou lembrar de uma senha diferente pra cada conta?!" Você não vai — e nem precisa. Um gerenciador de senhas lembra por você, com segurança. É a peça que torna possível ter senhas fortes em tudo.',
      conceito: {
        titulo: 'Um cofre que guarda e preenche suas senhas',
        texto: 'Um gerenciador de senhas é um app/serviço que guarda todas as suas senhas num "cofre" criptografado, protegido por UMA senha-mestra (a única que você precisa lembrar). Ele preenche as senhas automaticamente nos sites/apps e pode até criar senhas fortes pra você. O navegador (Google/Apple) já tem um embutido, grátis. Com ele, você tem senhas fortes e únicas em tudo, sem decorar nada.',
      },
      estrutura: {
        titulo: 'Como funciona',
        partes: [
          { simbolo: '🗄️', desc: 'Cofre: guarda todas as senhas, criptografadas (só você acessa).' },
          { simbolo: '🔑', desc: 'Senha-mestra: a ÚNICA que você decora; ela abre o cofre. Faça-a muito forte.' },
          { simbolo: '✨', desc: 'Preenche e cria: digita as senhas pra você nos sites, e gera senhas fortes novas.' },
          { simbolo: '🆓', desc: 'Grátis: o do Google (Android/Chrome) e o do Apple (iPhone) já vêm prontos.' },
        ],
      },
      exemplo: {
        titulo: 'A vida com gerenciador',
        celulas: [
          { ref: 'Antes', valor: 'Decorar (ou reusar) senhas → fraco' },
          { ref: 'Depois', valor: 'Lembro só a senha-mestra → o resto é guardado' },
          { ref: 'Login', valor: 'O app preenche a senha sozinho' },
          { ref: 'Nova conta', valor: 'Ele sugere uma senha forte na hora' },
        ],
        formula: 'Senha-mestra forte + cofre = senhas fortes em tudo, sem decorar',
        resultado: 'Segurança máxima com esforço mínimo.',
        comentario: 'A senha-mestra é a chave de tudo — faça-a MUITO forte (palavras aleatórias longas) e nunca a perca/compartilhe. Considere ativar 2FA no gerenciador também (próxima missão).',
      },
      vocabulario: [
        { palavra: 'Gerenciador de senhas', def: 'App que guarda e preenche suas senhas com segurança.' },
        { palavra: 'Senha-mestra', def: 'A única senha que você decora; abre o cofre de todas as outras.' },
        { palavra: 'Criptografado', def: 'Embaralhado de forma que só você (com a senha-mestra) consegue ler.' },
      ],
      chave: [
        'O gerenciador guarda senhas fortes pra você não decorar',
        'Você só lembra a senha-mestra (faça-a muito forte)',
        'O do navegador (Google/Apple) já é grátis e bom pra começar',
      ],
      porque: 'O gerenciador resolve o maior obstáculo da segurança: lembrar senhas fortes e únicas. Com ele, você protege todas as contas sem esforço — é a ferramenta que torna a boa prática viável de verdade.',
    },
    pratica: {
      instrucao: 'Pegue o celular/computador. Vamos usar o gerenciador que você já tem.',
      passos: [
        'No Android/Chrome: Configurações do Google → "Gerenciador de senhas". No iPhone: Ajustes → Senhas.',
        'Veja as senhas que ele já guardou (de logins que você fez)',
        'Note se ele aponta senhas "fracas" ou "repetidas" (muitos avisam)',
        'Faça login em algum site e veja o gerenciador oferecer preencher a senha',
        'Ao criar/trocar uma senha, aceite a sugestão de "senha forte" do gerenciador',
        'Garanta que a conta do gerenciador (Google/Apple) tem uma senha-mestra forte',
      ],
    },
    desafio: {
      cenario: 'Comece a usar um gerenciador de senhas: confira o que ele já guarda, deixe que ele crie uma senha forte numa troca, e proteja a senha-mestra.',
      requisitos: [
        'Acessei o gerenciador de senhas (Google/Apple ou outro)',
        'Vi as senhas guardadas e os avisos de fracas/repetidas',
        'Deixei o gerenciador preencher um login',
        'Usei uma senha forte sugerida por ele numa conta',
        'Minha senha-mestra (conta Google/Apple) é forte',
      ],
      dica: 'Se quiser um gerenciador dedicado (mais recursos), há opções confiáveis como Bitwarden (grátis). Mas pra começar, o do seu navegador/celular já protege muito — o importante é COMEÇAR a usar.',
    },
    validacao: [
      'Entendo o que é um gerenciador de senhas',
      'Sei onde fica o meu',
      'Vi as senhas guardadas e os avisos',
      'Deixo ele preencher e criar senhas',
      'Minha senha-mestra é forte',
    ],
  },

  'amb-seg-3': {
    trilhaId: 'amb-seg', numero: 3, titulo: 'Verificação em duas etapas (2FA)',
    tempoTotal: 10, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'E se alguém descobrir sua senha? Com a verificação em duas etapas, ele ainda não entra — porque falta a segunda chave, que só você tem. É a trava que segura o invasor mesmo com a senha na mão.',
      conceito: {
        titulo: 'Duas chaves são muito melhores que uma',
        texto: 'A verificação em duas etapas (2FA) adiciona uma segunda confirmação ao login, além da senha: um código que chega no seu celular (por app ou SMS) ou sua biometria. Assim, mesmo que um golpista descubra sua senha, ele não entra sem o segundo fator, que está com você. É uma das defesas mais poderosas que existem — e a maioria dos serviços importantes oferece de graça.',
      },
      estrutura: {
        titulo: 'Os tipos de segundo fator',
        partes: [
          { simbolo: '📱', desc: 'App autenticador: gera um código que muda a cada 30s (mais seguro que SMS).' },
          { simbolo: '💬', desc: 'SMS: código por mensagem. Bom, mas menos seguro (vulnerável a clonagem).' },
          { simbolo: '👆', desc: 'Biometria: digital/rosto, em apps que suportam.' },
          { simbolo: '🎯', desc: 'Prioridade: ative 2FA no e-mail principal, banco, Gov.br e redes — primeiro.' },
        ],
      },
      exemplo: {
        titulo: 'Por que protege tanto',
        celulas: [
          { ref: 'Só senha', valor: 'Vazou a senha → invasor entra' },
          { ref: 'Com 2FA', valor: 'Vazou a senha → falta o código → NÃO entra' },
          { ref: 'Melhor 2FA', valor: 'App autenticador (Google/Microsoft Authenticator)' },
          { ref: 'Onde 1º', valor: 'E-mail principal, banco, Gov.br, WhatsApp' },
        ],
        formula: 'Senha + 2º fator (que só você tem) = invasor barrado',
        resultado: 'Suas contas seguras mesmo se a senha vazar.',
        comentario: 'Ative 2FA primeiro no seu E-MAIL PRINCIPAL: ele é a chave que recupera todas as outras contas. Protegido o e-mail, você protege quase tudo.',
      },
      vocabulario: [
        { palavra: 'Verificação em duas etapas (2FA)', def: 'Login que pede senha + uma segunda confirmação.' },
        { palavra: 'App autenticador', def: 'App que gera códigos temporários (mais seguro que SMS).' },
        { palavra: 'Segundo fator', def: 'A segunda confirmação: código, biometria ou chave física.' },
      ],
      chave: [
        '2FA exige uma segunda chave além da senha',
        'Mesmo com a senha vazada, o invasor não entra',
        'Ative primeiro no e-mail principal, banco e Gov.br',
      ],
      porque: 'A 2FA é, junto com senhas fortes, a defesa de maior impacto. Ela neutraliza o vazamento de senhas — o tipo de ataque mais comum. Ativá-la nas contas-chave é talvez a coisa mais protetora que você fará nesta trilha.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos ativar a 2FA nas contas mais importantes.',
      passos: [
        'Comece pelo e-mail principal: nas configurações de segurança da conta (Google/Outlook)',
        'Procure "Verificação em duas etapas" e ative',
        'Escolha o método: app autenticador (recomendado) ou SMS',
        'Se usar app, instale um (Google Authenticator) e siga o passo a passo',
        'Guarde os "códigos de backup" que o serviço oferece (em lugar seguro)',
        'Ative também no banco, no Gov.br e no WhatsApp (já vimos na trilha do WhatsApp)',
        'Teste: saia e entre de novo pra ver a 2FA em ação',
      ],
    },
    desafio: {
      cenario: 'Ative a verificação em duas etapas no seu e-mail principal e em pelo menos mais uma conta importante.',
      requisitos: [
        'Ativei a 2FA no meu e-mail principal',
        'Escolhi um método de segundo fator',
        'Guardei os códigos de backup',
        'Ativei a 2FA em pelo menos mais uma conta importante',
        'Entendo que isso protege mesmo se a senha vazar',
      ],
      dica: 'Guarde os "códigos de backup" (que o serviço dá ao ativar a 2FA) num lugar seguro — eles te salvam se você perder o celular. Sem eles, recuperar a conta pode virar uma dor de cabeça.',
    },
    validacao: [
      'Entendo o que é a 2FA',
      'Ativei no e-mail principal',
      'Escolhi um método de segundo fator',
      'Guardei os códigos de backup',
      'Ativei em outras contas importantes',
    ],
  },

  'amb-seg-4': {
    trilhaId: 'amb-seg', numero: 4, titulo: 'Reconhecer phishing',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Um e-mail "do seu banco" pedindo pra atualizar a senha. Um SMS "dos Correios" com um link. Parecem reais, mas são iscas. Reconhecer phishing — antes de clicar — protege seu dinheiro e seus dados.',
      conceito: {
        titulo: 'A isca que finge ser quem você confia',
        texto: 'Phishing é a fraude que imita empresas reais (banco, loja, Correios, governo) pra você clicar num link e entregar senha/dados, ou baixar um vírus. A mensagem cria urgência e parece legítima. A defesa é reconhecer os sinais e NUNCA agir pelo link da mensagem — sempre acessar a empresa pelo app oficial ou digitando o site você mesmo. (Esta é a defesa; na trilha "Como o Golpista Pensa" você vê como elas são montadas.)',
      },
      estrutura: {
        titulo: 'Os sinais de phishing',
        partes: [
          { simbolo: '⏰', desc: 'Urgência/ameaça: "sua conta será bloqueada hoje", "última chance".' },
          { simbolo: '🔗', desc: 'Link suspeito: endereço estranho (confira sem clicar — segure/passe o mouse).' },
          { simbolo: '✉️', desc: 'Remetente esquisito: e-mail que não é o domínio oficial da empresa.' },
          { simbolo: '🔑', desc: 'Pede o indevido: senha completa, código do SMS, dados do cartão. Empresa séria nunca pede.' },
        ],
      },
      exemplo: {
        titulo: 'A regra que derruba o phishing',
        celulas: [
          { ref: 'Recebeu', valor: '"Banco: clique pra desbloquear sua conta"' },
          { ref: 'NÃO faça', valor: 'Clicar no link da mensagem' },
          { ref: 'Faça', valor: 'Abrir o APP oficial do banco (ou ligar no número do cartão)' },
          { ref: 'Resultado', valor: 'Se for real, está lá; se for golpe, você escapou' },
        ],
        formula: 'Nunca pelo link da mensagem → sempre pelo app/site oficial',
        resultado: 'Você confere de forma segura e não cai na isca.',
        comentario: 'A defesa universal contra phishing: nunca use o link/telefone que veio na mensagem. Vá você mesmo ao canal oficial (app, ou site digitado por você). Assim, mesmo um phishing perfeito não funciona.',
      },
      vocabulario: [
        { palavra: 'Phishing', def: 'Mensagem falsa que imita empresa real pra roubar dados/dinheiro.' },
        { palavra: 'Link malicioso', def: 'Endereço que leva a site falso ou instala vírus.' },
        { palavra: 'Canal oficial', def: 'O app/site verdadeiro da empresa, que VOCÊ acessa (não o link da mensagem).' },
      ],
      chave: [
        'Phishing imita empresas e cria urgência',
        'Nunca aja pelo link da mensagem',
        'Acesse sempre pelo app/site oficial que você mesmo abre',
      ],
      porque: 'Phishing é a porta de entrada da maioria dos golpes digitais. Reconhecê-lo e ter o reflexo de "ir pelo canal oficial" te protege de roubo de senhas, dinheiro e identidade — uma defesa que vale pra vida toda.',
    },
    pratica: {
      instrucao: 'Pegue o celular/computador. Vamos treinar o olhar com mensagens reais.',
      passos: [
        'Abra a pasta de spam do seu e-mail',
        'Encontre uma mensagem que finge ser de empresa (banco, loja, Correios)',
        'Procure os sinais: urgência? remetente estranho? pede dados?',
        'SEM clicar, veja o link real (no PC, passe o mouse; no celular, segure o link)',
        'Compare: o endereço real bate com o site oficial da empresa?',
        'Faça o mesmo com um SMS suspeito, se tiver',
        'Apague as mensagens de phishing (e marque como spam)',
      ],
    },
    desafio: {
      cenario: 'Analise mensagens reais suspeitas e identifique os sinais de phishing, praticando a regra de só acessar pelo canal oficial.',
      requisitos: [
        'Encontrei mensagens suspeitas (e-mail/SMS)',
        'Identifiquei sinais de phishing (urgência, link, remetente)',
        'Conferi o link real sem clicar',
        'Sei a regra: acessar pelo app/site oficial',
        'Apaguei/denunciei as mensagens de phishing',
      ],
      dica: 'Quando a dúvida for grande, ligue pra empresa pelo telefone OFICIAL (do verso do cartão, do site oficial) — nunca pelo número da mensagem. Confirmar pela fonte certa nunca causa prejuízo.',
    },
    validacao: [
      'Sei o que é phishing',
      'Reconheço os sinais',
      'Sei ver o link real sem clicar',
      'Acesso empresas pelo canal oficial',
      'Sei denunciar/apagar phishing',
    ],
  },

  'amb-seg-5': {
    trilhaId: 'amb-seg', numero: 5, titulo: 'Golpes por telefone e SMS',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'O telefone toca: "Aqui é do seu banco, detectamos uma compra suspeita...". O coração dispara. É exatamente o que o golpista quer. Saber como esses golpes por voz e SMS funcionam te deixa imune ao susto.',
      conceito: {
        titulo: 'A voz e o SMS como armas do golpe',
        texto: 'Golpes por telefone (vishing) e por SMS (smishing) usam a urgência e a autoridade pra te fazer agir sem pensar: passar uma senha, um código, fazer um PIX, clicar num link. A regra de ouro é simples e infalível: instituições sérias NUNCA pedem senha, código ou transferência por telefone/SMS. Diante de qualquer pedido assim, a resposta é sempre desligar e verificar pelo canal oficial.',
      },
      estrutura: {
        titulo: 'Os golpes mais comuns por voz/SMS',
        partes: [
          { simbolo: '🏦', desc: 'Falso banco: "compra suspeita" / "conta invadida"; pede senha, código ou PIX pra "conta segura".' },
          { simbolo: '📦', desc: 'Falso SMS de entrega/órgão: "encomenda retida, pague a taxa" com link.' },
          { simbolo: '🎁', desc: 'Falso prêmio: "você ganhou, ligue/clique e informe seus dados".' },
          { simbolo: '🛑', desc: 'Regra de ouro: NINGUÉM legítimo pede senha/código/PIX por telefone ou SMS.' },
        ],
      },
      exemplo: {
        titulo: 'A defesa que nunca falha',
        celulas: [
          { ref: 'Ligação', valor: '"Sou do banco, me passe o código do SMS"' },
          { ref: 'Verdade', valor: 'Banco NUNCA pede isso' },
          { ref: 'Faça', valor: 'Desligue. Ligue VOCÊ no número do cartão.' },
          { ref: 'Código SMS', valor: 'NUNCA passe pra ninguém — nem "pro banco"' },
        ],
        formula: 'Pediu senha/código/PIX por tel/SMS? = golpe. Desligue e verifique.',
        resultado: 'Imunidade ao susto e à pressão.',
        comentario: 'O código de 6 dígitos que chega por SMS é a chave da sua conta/WhatsApp. NUNCA passe pra ninguém, por nenhum motivo — é assim que clonam contas e roubam o WhatsApp.',
      },
      vocabulario: [
        { palavra: 'Vishing', def: 'Golpe por ligação de voz (voice phishing).' },
        { palavra: 'Smishing', def: 'Golpe por SMS, geralmente com link malicioso.' },
        { palavra: 'Código de verificação', def: 'Os dígitos que confirmam seu login; nunca devem ser passados a ninguém.' },
      ],
      chave: [
        'Banco/órgão NUNCA pede senha, código ou PIX por tel/SMS',
        'Sentiu pressão/urgência? Desligue e verifique pelo canal oficial',
        'O código do SMS é só seu — nunca passe pra ninguém',
      ],
      porque: 'Golpes por telefone e SMS estão entre os que mais causam prejuízo, justamente por pegarem a pessoa de surpresa. Ter a regra de ouro fixa na cabeça te protege mesmo no momento de susto.',
    },
    pratica: {
      instrucao: 'Vamos preparar suas defesas (não há golpe real agora). Pegue o celular.',
      passos: [
        'Salve o telefone OFICIAL do seu banco (verso do cartão) como "BANCO OFICIAL"',
        'Memorize a frase: "Vou desligar e ligar de volta no número oficial."',
        'Anote a regra de ouro: ninguém legítimo pede senha/código/PIX por tel/SMS',
        'Reforce: o código de 6 dígitos do SMS NUNCA se passa a ninguém',
        'Pratique ignorar/apagar SMS com links de "encomenda" e "prêmio"',
        'Combine com a família essa regra de ouro',
      ],
    },
    desafio: {
      cenario: 'Fixe suas defesas contra golpes por voz e SMS, e ensine a regra de ouro a um familiar.',
      requisitos: [
        'Salvei o telefone oficial do banco',
        'Memorizei a regra de ouro (ninguém pede senha/código/PIX por tel/SMS)',
        'Sei que nunca devo passar o código do SMS',
        'Sei desligar e verificar pelo canal oficial',
        'Ensinei a regra a um familiar',
      ],
      dica: 'Treine uma resposta pronta pra ligações suspeitas: "Obrigado, vou verificar diretamente com meu banco." E desligue. Não tenha receio de ser "mal-educado" — sua segurança vem primeiro.',
    },
    validacao: [
      'Conheço vishing e smishing',
      'Sei a regra de ouro',
      'Nunca passo o código do SMS',
      'Desligo e verifico pelo oficial',
      'Ensinei a regra à família',
    ],
  },

  'amb-seg-6': {
    trilhaId: 'amb-seg', numero: 6, titulo: 'Wi-Fi público: o que evitar',
    tempoTotal: 8, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Wi-Fi grátis no shopping, aeroporto, café — tentador, né? Mas fazer certas coisas nessas redes é como falar seus segredos em voz alta numa praça. Saber o que pode (e o que não) te protege.',
      conceito: {
        titulo: 'Rede pública é conveniente, mas não é privada',
        texto: 'Wi-Fi público (aberto, sem senha ou com senha compartilhada) é prático, mas menos seguro: outras pessoas na mesma rede podem, em certos casos, espiar o que você faz. A regra: pra navegar, ler notícias e ver vídeos, tudo bem. Mas evite acessar banco, fazer compras ou logar em contas importantes em Wi-Fi público. Pra isso, use seus dados móveis (4G/5G), que são bem mais seguros.',
      },
      estrutura: {
        titulo: 'O que pode e o que evitar',
        partes: [
          { simbolo: '✅', desc: 'Pode: navegar, ler notícias, ver vídeos, pesquisar — coisas sem login sensível.' },
          { simbolo: '🚫', desc: 'Evite: banco, compras, login em contas importantes em Wi-Fi público.' },
          { simbolo: '📱', desc: 'Pra o sensível: use seus DADOS MÓVEIS (4G/5G), bem mais seguros.' },
          { simbolo: '⚠️', desc: 'Redes falsas: golpistas criam Wi-Fi com nome parecido ("Shopping_Free") pra espiar.' },
        ],
      },
      exemplo: {
        titulo: 'Wi-Fi público com bom senso',
        celulas: [
          { ref: 'No café', valor: 'Ler notícia no Wi-Fi → ok' },
          { ref: 'No café', valor: 'Acessar o banco → use os dados móveis!' },
          { ref: 'Rede estranha', valor: 'Nome duvidoso? Não conecte' },
          { ref: 'Dúvida', valor: 'Na dúvida, prefira os dados móveis' },
        ],
        formula: 'Wi-Fi público pro casual · dados móveis pro sensível',
        resultado: 'Conveniência sem expor o que importa.',
        comentario: 'Regra simples: se a tarefa envolve dinheiro ou senha importante, NÃO faça em Wi-Fi público — troque pros dados móveis. Eles são criptografados e bem mais seguros pra isso.',
      },
      vocabulario: [
        { palavra: 'Wi-Fi público', def: 'Rede sem fio aberta ou de senha compartilhada (café, shopping).' },
        { palavra: 'Dados móveis', def: 'A internet do seu plano (4G/5G); mais segura que Wi-Fi público.' },
        { palavra: 'Rede falsa', def: 'Wi-Fi criado por golpista com nome parecido pra capturar seus dados.' },
      ],
      chave: [
        'Wi-Fi público serve pro casual, não pro sensível',
        'Banco/compras/logins importantes: use dados móveis',
        'Desconfie de redes com nomes duvidosos',
      ],
      porque: 'Saber se comportar em Wi-Fi público evita o roubo de dados e senhas em lugares de risco. É uma defesa simples — basta trocar pros dados móveis na hora certa — que protege suas informações mais valiosas.',
    },
    pratica: {
      instrucao: 'Pegue o celular. Vamos firmar o hábito (pode treinar em casa).',
      passos: [
        'Veja como alternar rápido entre Wi-Fi e dados móveis (atalho de cima)',
        'Defina sua regra mental: "banco/compras = dados móveis"',
        'No celular, veja as redes Wi-Fi disponíveis ao redor',
        'Repare como é fácil aparecer uma rede com nome "grátis" tentador',
        'Combine consigo: em local público, não logar no banco pelo Wi-Fi de lá',
        'Confirme que você sabe desligar o Wi-Fi e usar os dados quando precisar',
      ],
    },
    desafio: {
      cenario: 'Estabeleça sua regra de uso seguro de Wi-Fi público e saiba alternar pros dados móveis pra tarefas sensíveis.',
      requisitos: [
        'Sei alternar entre Wi-Fi e dados móveis',
        'Defini que banco/compras eu faço nos dados móveis',
        'Sei desconfiar de redes com nomes duvidosos',
        'Entendo o que pode/evitar em Wi-Fi público',
        'Tenho a regra clara na cabeça',
      ],
      dica: 'Se PRECISA mesmo usar o banco fora de casa e só tem Wi-Fi público, a opção mais segura é desligar o Wi-Fi e usar os dados móveis só pra isso. Pouca coisa justifica acessar o banco numa rede aberta.',
    },
    validacao: [
      'Entendo os riscos do Wi-Fi público',
      'Sei o que pode e o que evitar',
      'Uso dados móveis pro sensível',
      'Desconfio de redes falsas',
      'Sei alternar entre as conexões',
    ],
  },

  'amb-seg-7': {
    trilhaId: 'amb-seg', numero: 7, titulo: 'Se você caiu num golpe',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Mesmo com todo cuidado, pode acontecer. Se você caiu num golpe, os primeiros minutos são decisivos — e entrar em pânico é o pior caminho. Ter um plano de ação claro pode reduzir (ou até reverter) o prejuízo.',
      conceito: {
        titulo: 'Pânico não; plano sim',
        texto: 'Cair num golpe não é vergonha — acontece com gente esperta, porque os golpes são desenhados pra enganar. O que importa é agir rápido e certo: bloquear o que dá, acionar banco e autoridades, trocar senhas e avisar quem precisa. Ter esse plano decorado tira a paralisia do susto e dá a melhor chance de limitar o estrago. Velocidade é tudo.',
      },
      estrutura: {
        titulo: 'O plano de ação imediato',
        partes: [
          { simbolo: '🏦', desc: 'Dinheiro: acione o banco JÁ (peça MED/bloqueio, conteste). Bloqueie cartão se preciso.' },
          { simbolo: '🔑', desc: 'Senhas: troque as senhas das contas afetadas (e do e-mail). Ative 2FA.' },
          { simbolo: '👮', desc: 'Registre: faça um boletim de ocorrência (online ou na delegacia).' },
          { simbolo: '📢', desc: 'Avise: alerte família/contatos se o golpe pode atingi-los (ex: clonagem do WhatsApp).' },
        ],
      },
      exemplo: {
        titulo: 'Ordem de prioridade',
        celulas: [
          { ref: '1º', valor: 'Estancar o dinheiro (banco/MED/cartão)' },
          { ref: '2º', valor: 'Trocar senhas + ativar 2FA' },
          { ref: '3º', valor: 'Boletim de ocorrência' },
          { ref: '4º', valor: 'Avisar quem pode ser afetado' },
        ],
        formula: 'Estancar dinheiro → trocar senhas → B.O. → avisar',
        resultado: 'Prejuízo limitado e situação sob controle.',
        comentario: 'Aja primeiro onde há dinheiro em jogo (banco). Cada minuto conta pro MED ter chance. Depois, blinde o resto (senhas, 2FA) e formalize (B.O.).',
      },
      vocabulario: [
        { palavra: 'Plano de ação', def: 'A sequência de passos pra reagir rápido a um golpe.' },
        { palavra: 'MED', def: 'Mecanismo Especial de Devolução: tentativa de reaver um PIX de golpe (via banco).' },
        { palavra: 'Boletim de ocorrência', def: 'Registro oficial do golpe; muitas vezes feito online.' },
      ],
      chave: [
        'Não entre em pânico — siga o plano',
        'Estanque o dinheiro primeiro (banco/MED), depois senhas e B.O.',
        'Avise quem pode ser afetado e aja rápido',
      ],
      porque: 'Saber exatamente o que fazer nos primeiros minutos pode ser a diferença entre recuperar ou perder o dinheiro, e entre conter ou alastrar o estrago. Esse plano transforma o pânico em ação eficaz.',
    },
    pratica: {
      instrucao: 'Vamos montar e guardar seu plano de ação (preparação). Pegue o celular/papel.',
      passos: [
        'Confirme o telefone oficial do banco salvo (e onde contestar no app)',
        'Anote os 4 passos: estancar dinheiro → trocar senhas → B.O. → avisar',
        'Pesquise como fazer um B.O. online no seu estado (delegacia eletrônica)',
        'Liste quais contas você trocaria a senha primeiro (e-mail, banco)',
        'Defina quem você avisaria (família, contatos do WhatsApp)',
        'Guarde esse plano num lugar acessível (nota fixada/papel)',
        'Combine o plano com a família',
      ],
    },
    desafio: {
      cenario: 'Monte seu plano de ação pós-golpe, com contatos e passos prontos, e compartilhe com a família.',
      requisitos: [
        'Tenho os contatos oficiais do banco salvos',
        'Anotei os 4 passos do plano na ordem certa',
        'Sei como registrar um B.O.',
        'Sei quais senhas trocar primeiro',
        'Combinei o plano com a família',
      ],
      dica: 'Importante: cair em golpe não é burrice — os criminosos são profissionais em enganar. O que diferencia é reagir rápido e sem vergonha de pedir ajuda. Quanto antes você age, melhor o resultado.',
    },
    validacao: [
      'Tenho um plano de ação claro',
      'Sei estancar o dinheiro primeiro',
      'Sei trocar senhas e ativar 2FA',
      'Sei registrar um B.O.',
      'Combinei o plano com a família',
    ],
  },

  'amb-seg-8': {
    trilhaId: 'amb-seg', numero: 8, titulo: 'Privacidade nas redes',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Aquela foto da viagem em tempo real avisa que sua casa está vazia. O "parabéns, 60 anos!" entrega sua data de nascimento. Sem perceber, redes sociais expõem dados que golpistas e até ladrões usam. Ajustar a privacidade fecha essas portas.',
      conceito: {
        titulo: 'O que você posta pode ser usado contra você',
        texto: 'Redes sociais são ótimas pra se conectar, mas tudo que você expõe publicamente (rotina, localização, família, datas, bens) pode ser usado por golpistas pra te enganar de forma personalizada, ou por criminosos pra saber quando sua casa está vazia. Ajustar a privacidade (quem vê o quê) e pensar antes de postar reduz muito essa exposição — sem você deixar de usar as redes.',
      },
      estrutura: {
        titulo: 'Reduzindo a exposição',
        partes: [
          { simbolo: '🔒', desc: 'Privacidade: deixe seus perfis/publicações pra "amigos", não públicos.' },
          { simbolo: '📍', desc: 'Localização: evite postar onde está em tempo real (poste depois de voltar).' },
          { simbolo: '🎂', desc: 'Dados: não exponha data de nascimento completa, telefone, endereço.' },
          { simbolo: '🤔', desc: 'Antes de postar: "isso pode ser usado contra mim ou minha família?".' },
        ],
      },
      exemplo: {
        titulo: 'Exposição perigosa x segura',
        celulas: [
          { ref: 'Perigoso', valor: '"Curtindo a praia esta semana!" (casa vazia)' },
          { ref: 'Seguro', valor: 'Postar as fotos depois de voltar' },
          { ref: 'Perigoso', valor: 'Perfil público com tudo à mostra' },
          { ref: 'Seguro', valor: 'Perfil pra amigos + menos dados expostos' },
        ],
        formula: 'Perfil fechado + sem localização ao vivo + menos dados',
        resultado: 'Você usa as redes com bem menos risco.',
        comentario: 'Não precisa parar de postar — só ajustar o tempo e a privacidade. Poste as fotos da viagem DEPOIS de voltar, e deixe seu perfil restrito a quem você conhece.',
      },
      vocabulario: [
        { palavra: 'Privacidade', def: 'O controle de quem vê suas informações nas redes.' },
        { palavra: 'Pegada digital', def: 'O rastro de dados seus espalhados pela internet.' },
        { palavra: 'Perfil público', def: 'Perfil visível a qualquer pessoa (mais arriscado).' },
      ],
      chave: [
        'Deixe perfis e posts pra "amigos", não públicos',
        'Não poste localização em tempo real (poste depois)',
        'Antes de postar: "isso pode ser usado contra mim?"',
      ],
      porque: 'Reduzir a exposição nas redes corta a munição de golpistas (que personalizam ataques com seus dados) e de criminosos (que sabem sua rotina). É proteção pra você, sua família e seu patrimônio.',
    },
    pratica: {
      instrucao: 'Pegue o celular e abra suas redes sociais (Facebook, Instagram).',
      passos: [
        'Veja seu perfil "como um estranho veria" (modo de visualização pública)',
        'Verifique: dá pra ver onde você mora, trabalha, sua família, datas?',
        'Vá nas Configurações de Privacidade e mude publicações pra "amigos"',
        'Esconda/remova dados sensíveis (telefone, endereço, ano de nascimento)',
        'Reveja quem são seus "amigos/seguidores" — conhece todos?',
        'Adote a regra de postar viagens só DEPOIS de voltar',
        'Pesquise seu nome no Google pra ver sua exposição',
      ],
    },
    desafio: {
      cenario: 'Faça uma "faxina de privacidade" nas suas redes: feche os perfis, reduza dados expostos e adote hábitos seguros de postagem.',
      requisitos: [
        'Vi como meu perfil aparece pra estranhos',
        'Ajustei publicações pra "amigos"',
        'Removi/escondi dados sensíveis',
        'Revisei meus contatos/seguidores',
        'Adotei a regra de postar viagens depois de voltar',
      ],
      dica: 'Cuidado com quizzes e correntes do tipo "seu nome de artista é o da sua rua + seu pet": eles coletam dados que respondem perguntas de segurança do seu banco. Não participe.',
    },
    validacao: [
      'Sei ver como meu perfil aparece pra estranhos',
      'Ajustei a privacidade pra "amigos"',
      'Reduzi dados sensíveis expostos',
      'Revisei meus contatos',
      'Adotei hábitos seguros de postagem',
    ],
  },

  'amb-seg-9': {
    trilhaId: 'amb-seg', numero: 9, titulo: 'Projeto: pente-fino de segurança',
    tempoTotal: 20, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Hora de juntar tudo num "pente-fino" completo de segurança: senhas fortes, 2FA, privacidade, plano de ação e família alinhada. No fim, você terá blindado sua vida digital — e poderá proteger quem você ama.',
      conceito: {
        titulo: 'Segurança completa, em camadas',
        texto: 'Este projeto consolida toda a trilha (e conversa com a trilha "Como o Golpista Pensa") numa revisão completa: contas-chave com senhas fortes e 2FA, gerenciador de senhas em uso, privacidade ajustada, hábitos seguros (Wi-Fi, phishing) e um plano de ação pronto. Como segurança é coletiva, o projeto inclui alinhar a família. Ao terminar, você não está só protegido — você é o guardião digital do seu grupo.',
      },
      estrutura: {
        titulo: 'O pente-fino completo',
        partes: [
          { simbolo: '🔑', desc: 'Senhas: fortes e únicas nas contas-chave + gerenciador em uso.' },
          { simbolo: '🔐', desc: '2FA: ativada no e-mail principal, banco, Gov.br e redes.' },
          { simbolo: '🕵️', desc: 'Hábitos: reconhecer phishing, regra de ouro de tel/SMS, Wi-Fi com cuidado.' },
          { simbolo: '👨‍👩‍👧', desc: 'Plano + família: plano de ação pronto e regras combinadas com todos.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist do pente-fino',
        celulas: [
          { ref: 'Senhas', valor: 'Contas-chave fortes/únicas + gerenciador ✓' },
          { ref: '2FA', valor: 'E-mail, banco, Gov.br, redes ✓' },
          { ref: 'Privacidade', valor: 'Perfis fechados, menos exposição ✓' },
          { ref: 'Família', valor: 'Regras e plano combinados ✓' },
        ],
        formula: 'Senhas + 2FA + privacidade + hábitos + plano + família',
        resultado: 'Vida digital blindada — sua e da família.',
        comentario: 'Junte com a trilha "Como o Golpista Pensa": entender o ataque + aplicar a defesa = a proteção mais completa possível. Você fica praticamente imune aos golpes comuns.',
      },
      vocabulario: [
        { palavra: 'Pente-fino', def: 'Revisão completa e cuidadosa de todas as defesas.' },
        { palavra: 'Segurança em camadas', def: 'Várias proteções somadas, sem depender de uma só.' },
        { palavra: 'Guardião digital', def: 'A pessoa que protege a si e ajuda a proteger a família.' },
      ],
      chave: [
        'Revise tudo: senhas, 2FA, privacidade, hábitos, plano',
        'Segurança é em camadas — todas somam',
        'Alinhe a família: proteção coletiva',
      ],
      porque: 'Este é o ápice do módulo de Segurança: uma blindagem completa da sua vida digital. Concluí-lo significa proteger seu dinheiro, seus dados e sua tranquilidade — e tornar-se a referência de segurança pra quem você ama.',
    },
    pratica: {
      instrucao: 'Reserve 20 minutos. Faça o pente-fino completo, usando tudo da trilha (e da "Como o Golpista Pensa").',
      passos: [
        'Senhas: confirme senhas fortes e únicas no e-mail, banco e Gov.br; use o gerenciador',
        '2FA: confirme ativada no e-mail principal, banco, Gov.br e redes/WhatsApp',
        'Privacidade: revise perfis das redes (fechados, menos dados expostos)',
        'Hábitos: reforce a regra de phishing e a de tel/SMS; e o uso seguro de Wi-Fi',
        'Plano de ação: tenha contatos oficiais salvos e os passos anotados',
        'Família: combine palavra-código, regra de verificação e o plano com todos',
        'Faça a revisão final: cada camada está no lugar?',
      ],
    },
    desafio: {
      cenario: 'Entregue sua vida digital blindada: senhas, 2FA, privacidade, hábitos e plano revisados, com a família alinhada.',
      requisitos: [
        'Senhas fortes/únicas nas contas-chave + gerenciador',
        '2FA ativada nas contas importantes',
        'Privacidade das redes ajustada',
        'Hábitos de defesa firmados (phishing, tel/SMS, Wi-Fi)',
        'Plano de ação pronto com contatos oficiais',
        'Família alinhada (palavra-código, regras, plano)',
      ],
      dica: 'Parabéns — você concluiu a Defesa Digital e o módulo de Segurança! Junto com "Como o Golpista Pensa", você tem agora a proteção mais completa possível. Refaça este pente-fino a cada poucos meses: segurança é hábito contínuo, não tarefa única. E ajude sua família — proteger quem você ama é o maior valor de tudo isso.',
    },
    validacao: [
      'Senhas fortes/únicas + gerenciador',
      '2FA nas contas importantes',
      'Privacidade ajustada',
      'Hábitos de defesa firmados',
      'Plano de ação pronto',
      'Família alinhada',
      'Minha vida digital está blindada',
    ],
  },
};
