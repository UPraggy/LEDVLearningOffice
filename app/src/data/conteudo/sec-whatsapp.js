// ============================================================================
// CONTEÚDO — Clonagem e Sequestro do WhatsApp (sec-whatsapp)
// módulo Segurança · vertente "ambos"
// O golpe do código de 6 dígitos, o falso parente ("mudei de número"),
// SIM swap, verificação em duas etapas e recuperação de conta.
// Conteúdo autoral, foco no Brasil real.
// ============================================================================

export const SEC_WHATSAPP = {
  'sec-whatsapp-1': {
    trilhaId: 'sec-whatsapp', numero: 1, titulo: 'Clonagem x sequestro: os dois ataques',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Quase todo mundo conhece alguém que teve o WhatsApp "clonado". Mas o que acontece de verdade? Entender a diferença entre os dois ataques é o que te faz proteger a peça certa — e perceber o golpe antes dele acontecer.',
      conceito: {
        titulo: 'Ninguém "copia" seu WhatsApp — eles ATIVAM no aparelho deles',
        texto: 'O nome popular é "clonagem", mas o WhatsApp não é copiado. O que o golpista faz é ATIVAR a sua conta no celular dele. Pra isso, ele precisa do código de 6 dígitos que o WhatsApp manda por SMS quando você instala em um novo aparelho. Há dois caminhos: no "sequestro", ele te engana pra você entregar esse código (o golpe mais comum); na "clonagem" de verdade (SIM swap), ele rouba seu número na operadora pra receber o SMS sozinho. Em ambos, o objetivo é o mesmo: virar você no app e pedir dinheiro pros seus contatos.',
      },
      estrutura: {
        titulo: 'Os dois caminhos do ataque',
        partes: [
          { simbolo: '📩', desc: 'Sequestro (mais comum): te engana pra entregar o código de 6 dígitos do SMS.' },
          { simbolo: '📵', desc: 'SIM swap: rouba seu número na operadora e recebe o código sozinho.' },
          { simbolo: '🎭', desc: 'Objetivo: se passar por você e pedir PIX/cartão aos seus contatos.' },
          { simbolo: '🛡️', desc: 'Defesa-chave: a verificação em duas etapas (um PIN só seu), na missão 3.' },
        ],
      },
      exemplo: {
        titulo: 'O que protege contra cada um',
        celulas: [
          { ref: 'Sequestro', valor: 'Nunca repassar o código de 6 dígitos a ninguém' },
          { ref: 'Sequestro', valor: 'Verificação em duas etapas (PIN) ativa' },
          { ref: 'SIM swap', valor: 'Senha/CPF cadastrado na operadora; desconfiar de "sem sinal"' },
          { ref: 'Ambos', valor: 'Avisar contatos pra não enviar dinheiro sem confirmar por voz' },
        ],
        formula: 'Código de 6 dígitos + PIN = as duas chaves da sua conta',
        resultado: 'Sem o código e sem o PIN, o golpista não ativa nada.',
        comentario: 'Repare: o código de 6 dígitos é a peça central de quase todo ataque. Se você jamais o entrega e ainda tem um PIN, o sequestro simplesmente não funciona.',
      },
      vocabulario: [
        { palavra: 'Código de ativação', def: 'Os 6 dígitos que o WhatsApp manda por SMS pra instalar a conta num novo aparelho.' },
        { palavra: 'SIM swap', def: 'Roubo do seu número de telefone na operadora, pra receber seus SMS.' },
        { palavra: 'Sequestro de conta', def: 'Golpista ativa seu WhatsApp no aparelho dele e se passa por você.' },
      ],
      chave: [
        '"Clonagem" = ativar sua conta no aparelho do golpista',
        'A peça central é o código de 6 dígitos do SMS',
        'PIN de duas etapas é a trava extra que segura tudo',
      ],
      porque: 'Saber que o ataque depende do código de 6 dígitos (e como o PIN o bloqueia) já entrega 90% da defesa. As próximas missões detalham cada golpe, mas a base é esta.',
    },
    pratica: {
      instrucao: 'Vamos reconhecer as peças que o golpista precisa — sem mexer em nada ainda.',
      passos: [
        'Lembre da última vez que instalou o WhatsApp: veio um SMS com código',
        'Entenda que QUEM tiver esse código ativa sua conta',
        'Pense: você já recebeu "recebi um código por engano, me devolve?"',
        'Reconheça que esse pedido é o golpe do sequestro começando',
        'Guarde a regra de ouro: código de 6 dígitos não se repassa NUNCA',
      ],
    },
    desafio: {
      cenario: 'Você sabe explicar a diferença entre sequestro e SIM swap e identifica que o código de 6 dígitos é a peça que precisa proteger.',
      requisitos: [
        'Entendi que o WhatsApp é ativado, não copiado',
        'Sei a diferença entre sequestro e SIM swap',
        'Sei que o código de 6 dígitos é a peça central',
        'Sei que o PIN de duas etapas é a trava extra',
        'Reconheço o pedido de "devolver o código" como golpe',
      ],
      dica: 'Sempre que alguém pedir um código que chegou no SEU celular, pare. Códigos de verificação são pessoais e intransferíveis — não importa quem peça ou que história conte.',
    },
    validacao: [
      'Sei como a conta é ativada num novo aparelho',
      'Diferencio sequestro de SIM swap',
      'Sei que o código de 6 dígitos é a chave',
      'Conheço o papel do PIN de duas etapas',
      'Reconheço o pedido de código como golpe',
    ],
  },

  'sec-whatsapp-2': {
    trilhaId: 'sec-whatsapp', numero: 2, titulo: 'O golpe do código de 6 dígitos',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: '"Oi! Mandei um código pro seu número por engano, pode me reenviar?" Parece um pedido bobo de um conhecido. Mas esse código é a chave da sua conta — e ao reenviar, você entrega seu WhatsApp de bandeja. É assim que a maioria dos sequestros acontece.',
      conceito: {
        titulo: 'O golpista te faz entregar a própria chave',
        texto: 'O criminoso começa a instalar o WhatsApp com o SEU número. O app envia o código de 6 dígitos por SMS pra VOCÊ. Como ele não tem acesso ao seu celular, precisa que você mesmo entregue o código. Então ele se passa por um amigo, um suporte, uma loja ou um sorteio e inventa uma desculpa pra você repassar os dígitos. No instante em que você manda o código, ele finaliza a ativação no aparelho dele e toma sua conta. Por isso a regra é simples e sem exceção: código que chega no seu telefone é só seu. Não se repassa pra ninguém, nunca.',
      },
      estrutura: {
        titulo: 'As desculpas mais usadas',
        partes: [
          { simbolo: '😅', desc: '"Errei seu número, mandei um código sem querer, me devolve?"' },
          { simbolo: '🎁', desc: '"Você ganhou um prêmio! Confirme com o código que enviamos."' },
          { simbolo: '🏢', desc: '"Somos o suporte do WhatsApp/da loja, precisamos validar seu código."' },
          { simbolo: '🚫', desc: 'A resposta certa é sempre a mesma: não envio código nenhum.' },
        ],
      },
      exemplo: {
        titulo: 'O que dizer e o que NÃO fazer',
        celulas: [
          { ref: 'Mensagem', valor: '"Me reenvia o código que chegou aí?"' },
          { ref: 'Errado', valor: 'Copiar e mandar os 6 dígitos' },
          { ref: 'Certo', valor: '"Não repasso códigos. Te ligo pra confirmar quem é você."' },
          { ref: 'Certo', valor: 'Ligar pra pessoa real por voz, se houver dúvida' },
        ],
        formula: 'Pediu código que chegou no seu celular → recusar, sempre',
        resultado: 'Sem o código, a ativação na mão do golpista falha.',
        comentario: 'Nem o WhatsApp, nem loja, nem banco, nem amigo precisam de um código que chegou no SEU telefone. Esse pedido, vindo de quem for, é golpe — ponto final.',
      },
      vocabulario: [
        { palavra: 'Código por engano', def: 'Desculpa clássica do golpe pra você repassar os 6 dígitos.' },
        { palavra: 'Validar conta', def: 'Termo falso usado por "suportes" pra pedir seu código.' },
        { palavra: 'Repassar', def: 'Reenviar a outra pessoa — o que você nunca deve fazer com códigos.' },
      ],
      chave: [
        'Código de 6 dígitos é só seu — nunca repasse',
        '"Mandei por engano, me devolve" é golpe clássico',
        'Na dúvida, confirme por voz com a pessoa real',
      ],
      porque: 'Esse é o golpe de WhatsApp mais comum do país. Gravar a regra "não repasso código" fecha a porta principal do sequestro — é a defesa de maior retorno da trilha inteira.',
    },
    pratica: {
      instrucao: 'Ensaie sua resposta padrão pra quando pedirem um código.',
      passos: [
        'Decore a frase: "Não repasso códigos que chegam no meu celular"',
        'Imagine um conhecido pedindo "o código que chegou por engano"',
        'Pratique recusar mesmo sendo alguém que você conhece',
        'Combine: na dúvida sobre a identidade, você liga por voz',
        'Lembre que pressa e história emocional reforçam que é golpe',
      ],
    },
    desafio: {
      cenario: 'Você tem uma resposta automática pronta e recusa qualquer pedido de código, mesmo de contatos conhecidos.',
      requisitos: [
        'Entendi por que o código não pode ser repassado',
        'Reconheço as desculpas mais usadas',
        'Tenho uma frase de recusa pronta',
        'Sei confirmar identidade por voz na dúvida',
        'Não abro exceção nem pra conhecidos',
      ],
      dica: 'Golpistas roubam a conta de um amigo seu e, fingindo ser ele, pedem seu código. Por isso "é um conhecido" não garante nada. Confirme por ligação de voz — golpista some quando você liga.',
    },
    validacao: [
      'Nunca repasso o código de 6 dígitos',
      'Reconheço as desculpas do golpe',
      'Tenho frase de recusa pronta',
      'Confirmo por voz na dúvida',
      'Não abro exceção pra conhecidos',
    ],
  },

  'sec-whatsapp-3': {
    trilhaId: 'sec-whatsapp', numero: 3, titulo: 'Ative a verificação em duas etapas (PIN)',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Existe uma trava no próprio WhatsApp que, sozinha, derruba o golpe do sequestro — mesmo que o código de 6 dígitos vaze. Ela é grátis, leva 1 minuto pra ativar, e quase ninguém usa. Hoje você vai ativar.',
      conceito: {
        titulo: 'Um PIN de 6 dígitos que só você sabe',
        texto: 'A verificação em duas etapas do WhatsApp adiciona um PIN pessoal de 6 dígitos, exigido sempre que sua conta for registrada de novo num aparelho. Assim, mesmo que o golpista consiga o código do SMS, ele esbarra no PIN — que está só na sua cabeça. É a diferença entre uma porta com uma fechadura e uma porta com duas. Você cadastra o PIN uma vez e ainda associa um e-mail de recuperação (caso esqueça). Importante: escolha um PIN que não seja data de nascimento nem 123456, e não compartilhe com ninguém.',
      },
      estrutura: {
        titulo: 'Como ativar (Ajustes do WhatsApp)',
        partes: [
          { simbolo: '⚙️', desc: 'Abra Ajustes/Configurações → Conta → Verificação em duas etapas.' },
          { simbolo: '🔢', desc: 'Toque em Ativar e crie um PIN de 6 dígitos só seu.' },
          { simbolo: '✉️', desc: 'Cadastre um e-mail de recuperação (ajuda se esquecer o PIN).' },
          { simbolo: '🤐', desc: 'Nunca informe esse PIN a ninguém — nem ao "suporte".' },
        ],
      },
      exemplo: {
        titulo: 'Por que o PIN derruba o sequestro',
        celulas: [
          { ref: 'Sem PIN', valor: 'Vazou o código de 6 dígitos → conta tomada' },
          { ref: 'Com PIN', valor: 'Vazou o código, mas falta o PIN → ativação barrada' },
          { ref: 'Recuperação', valor: 'Esqueceu o PIN? E-mail cadastrado ajuda a recuperar' },
          { ref: 'Regra', valor: 'PIN não é data nem 123456; e ninguém pede seu PIN' },
        ],
        formula: 'Código do SMS + PIN secreto = duas travas independentes',
        resultado: 'Mesmo com o código, sem o PIN o golpe não fecha.',
        comentario: 'O WhatsApp pede o PIN de vez em quando pra você não esquecer. Não é golpe quando isso acontece dentro do app, na sua tela. O alerta é quando OUTRA PESSOA pede seu PIN.',
      },
      vocabulario: [
        { palavra: 'Verificação em duas etapas', def: 'Camada extra de segurança: um PIN além do código do SMS.' },
        { palavra: 'PIN', def: 'Número secreto de 6 dígitos, só seu, exigido ao registrar a conta.' },
        { palavra: 'E-mail de recuperação', def: 'Endereço que ajuda a recuperar o acesso se esquecer o PIN.' },
      ],
      chave: [
        'Ative a verificação em duas etapas hoje',
        'Crie um PIN que não seja data nem 123456',
        'Cadastre e-mail de recuperação e guarde o PIN só pra você',
      ],
      porque: 'O PIN de duas etapas é a defesa mais poderosa da trilha: torna o sequestro inviável mesmo se o código vazar. Ativá-lo agora protege você imediatamente — é ação concreta de maior impacto.',
    },
    pratica: {
      instrucao: 'Ative a verificação em duas etapas no seu WhatsApp agora.',
      passos: [
        'Abra o WhatsApp → Ajustes/Configurações',
        'Toque em Conta → Verificação em duas etapas',
        'Toque em Ativar',
        'Crie um PIN de 6 dígitos que você lembre (não use datas/123456)',
        'Cadastre um e-mail de recuperação',
        'Anote mentalmente: ninguém além de você precisa desse PIN',
      ],
    },
    desafio: {
      cenario: 'Você ativa a verificação em duas etapas, define um PIN seguro e cadastra um e-mail de recuperação.',
      requisitos: [
        'Ativei a verificação em duas etapas',
        'Criei um PIN forte (não data, não 123456)',
        'Cadastrei e-mail de recuperação',
        'Entendo que o PIN bloqueia o sequestro',
        'Sei que ninguém deve me pedir o PIN',
      ],
      dica: 'Se quiser não esquecer o PIN, use uma regra que só você entende (ex.: ano de um fato que ninguém sabe + 2 dígitos). Evite datas óbvias que estão nas suas redes sociais.',
    },
    validacao: [
      'Ativei a verificação em duas etapas',
      'Meu PIN é seguro',
      'Cadastrei e-mail de recuperação',
      'Entendo o papel do PIN',
      'Sei que o PIN é secreto',
    ],
  },

  'sec-whatsapp-4': {
    trilhaId: 'sec-whatsapp', numero: 4, titulo: '"Oi, mudei de número" — o falso parente',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Chega uma mensagem de número desconhecido: "Oi mãe, troquei de celular, salva meu novo número. Preciso de um favor urgente, pode fazer um PIX pra mim?" O coração aperta e a vontade é ajudar. Mas é um dos golpes que mais fazem vítimas no Brasil.',
      conceito: {
        titulo: 'O golpista finge ser alguém que você ama',
        texto: 'Aqui o criminoso nem precisa tomar sua conta: ele só finge ser um parente ou amigo usando um número novo. Diz que trocou de telefone (ou que o WhatsApp "bugou"), cria uma urgência — uma conta a pagar, um problema, um aperto — e pede um PIX. Às vezes usa foto sua de perfil tirada das redes. A defesa é desconfiar de QUALQUER pedido de dinheiro vindo de número novo e confirmar por um canal que você já conhece: ligar no número antigo, chamar por voz, perguntar algo que só a pessoa real saberia.',
      },
      estrutura: {
        titulo: 'O roteiro do golpe e como furá-lo',
        partes: [
          { simbolo: '📱', desc: '"Troquei de número/celular novo" — pra justificar o contato desconhecido.' },
          { simbolo: '⏰', desc: '"É urgente, preciso agora" — pra você não pensar.' },
          { simbolo: '💸', desc: '"Me faz um PIX, depois te devolvo" — o objetivo.' },
          { simbolo: '📞', desc: 'Fure ligando no número ANTIGO ou fazendo chamada de voz.' },
        ],
      },
      exemplo: {
        titulo: 'A pergunta que desmonta o golpe',
        celulas: [
          { ref: 'Golpe', valor: '"Oi pai, número novo, me manda R$ 600 no PIX?"' },
          { ref: 'Errado', valor: 'Fazer o PIX pela emoção/urgência' },
          { ref: 'Certo', valor: 'Ligar no número que você já tinha salvo da pessoa' },
          { ref: 'Certo', valor: 'Perguntar algo íntimo que só ela saberia responder' },
        ],
        formula: 'Pedido de dinheiro de número novo → confirmar por voz no canal antigo',
        resultado: 'O golpista não passa na confirmação e desiste.',
        comentario: 'Combine com a família uma "senha de segurança" — uma palavra ou pergunta combinada antes. Se o "parente" não souber a senha, é golpe na certa.',
      },
      vocabulario: [
        { palavra: 'Falso parente', def: 'Golpista que finge ser familiar/amigo usando número novo.' },
        { palavra: 'Senha de família', def: 'Palavra-código combinada antes, pra confirmar identidade em emergências.' },
        { palavra: 'Canal conhecido', def: 'Número/voz que você já usava antes — onde a confirmação é confiável.' },
      ],
      chave: [
        'Pedido de PIX de número novo = desconfie sempre',
        'Confirme por voz no canal que você já conhece',
        'Combine uma senha de família pra emergências',
      ],
      porque: 'Esse golpe usa o amor e a urgência como armas, e por isso atinge pessoas atentas também. Criar o reflexo de confirmar por voz e combinar uma senha de família protege você e todos ao seu redor.',
    },
    pratica: {
      instrucao: 'Crie hoje a defesa que vale pra vida toda contra esse golpe.',
      passos: [
        'Combine com sua família uma "senha de segurança" simples',
        'Defina a regra: pedido de dinheiro = confirmar por voz, sempre',
        'Salve corretamente os números atuais dos seus familiares',
        'Ensaie: se chegar pedido de número novo, eu ligo no antigo',
        'Avise os parentes mais vulneráveis (idosos) sobre esse golpe',
      ],
    },
    desafio: {
      cenario: 'Você estabelece com a família uma senha de segurança e a regra de confirmar por voz qualquer pedido de dinheiro.',
      requisitos: [
        'Combinei uma senha de família',
        'Defini a regra de confirmar por voz',
        'Tenho os números dos familiares salvos certos',
        'Sei furar o golpe ligando no canal antigo',
        'Avisei os parentes mais vulneráveis',
      ],
      dica: 'O golpista conta com a vergonha de "desconfiar de um parente". Inverta: confirmar é cuidado, não ofensa. Quem te ama de verdade entende — e o golpista some.',
    },
    validacao: [
      'Reconheço o golpe do falso parente',
      'Confirmo por voz pedidos de dinheiro',
      'Combinei senha de família',
      'Tenho números salvos corretamente',
      'Protejo os mais vulneráveis',
    ],
  },

  'sec-whatsapp-5': {
    trilhaId: 'sec-whatsapp', numero: 5, titulo: 'Falso WhatsApp Business de loja e empresa',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Você comprou em uma loja e, dias depois, recebe um WhatsApp "do atendimento" oferecendo desconto, pedindo confirmação de dados ou um PIX pra liberar o pedido. Tem até o logo da empresa. Mas pode ser um perfil falso montado pra te enganar.',
      conceito: {
        titulo: 'Logo e nome bonito não provam que é a empresa',
        texto: 'Golpistas criam perfis no WhatsApp Business com o nome e a logo de lojas, bancos e serviços conhecidos. Eles abordam dizendo que há um problema no pedido, um prêmio, uma atualização de cadastro — e conduzem você a pagar um PIX, clicar num link ou informar dados. O selo verde de "conta comercial" só diz que é uma conta business, não que é a empresa verdadeira. A defesa é não usar o contato que CHEGOU até você: procure o canal oficial no site da empresa, no app ou na nota fiscal, e confirme por lá.',
      },
      estrutura: {
        titulo: 'Como confirmar se é a empresa de verdade',
        partes: [
          { simbolo: '🔎', desc: 'Não confie no número que te chamou; busque o oficial no site/app/nota.' },
          { simbolo: '💳', desc: 'Empresa séria não pede PIX por WhatsApp pra "liberar pedido".' },
          { simbolo: '🔗', desc: 'Desconfie de links de "rastreio", "prêmio" ou "atualizar cadastro".' },
          { simbolo: '🟢', desc: 'Selo de conta comercial ≠ prova de identidade da empresa.' },
        ],
      },
      exemplo: {
        titulo: 'Pedido legítimo x golpe',
        celulas: [
          { ref: 'Golpe', valor: '"Seu pedido travou, faça um PIX de R$ 19,90 pra liberar"' },
          { ref: 'Golpe', valor: '"Você ganhou um vale! Confirme seus dados neste link"' },
          { ref: 'Certo', valor: 'Abrir o app/site oficial e checar o pedido por lá' },
          { ref: 'Certo', valor: 'Usar o SAC oficial da nota fiscal, não o WhatsApp que chegou' },
        ],
        formula: 'Contato que chegou ≠ canal oficial. Confirme pelo oficial.',
        resultado: 'Você fala com a empresa real, não com o perfil falso.',
        comentario: 'Frete e taxas extras "por fora" do checkout oficial são quase sempre golpe. Pagamento legítimo acontece dentro do site/app da loja, não num PIX avulso por mensagem.',
      },
      vocabulario: [
        { palavra: 'WhatsApp Business', def: 'Versão comercial do app; o selo não garante que é a empresa verdadeira.' },
        { palavra: 'Canal oficial', def: 'Contato publicado no site/app/nota fiscal da própria empresa.' },
        { palavra: 'Taxa de liberação', def: 'Cobrança falsa "pra soltar o pedido" — típica de golpe.' },
      ],
      chave: [
        'Logo e selo não provam identidade',
        'Não use o número que chegou; busque o oficial',
        'Empresa não pede PIX por WhatsApp pra liberar pedido',
      ],
      porque: 'Compras online são parte da rotina, e esse golpe se disfarça de atendimento. Saber confirmar pelo canal oficial — e não pelo contato que chegou — protege seu dinheiro e seus dados em cada compra.',
    },
    pratica: {
      instrucao: 'Treine a verificação de um "atendimento" pelo canal oficial.',
      passos: [
        'Pense numa loja onde você compra com frequência',
        'Ache o SAC/atendimento oficial dela no site ou app',
        'Compare: é esse o número que costuma te chamar?',
        'Defina a regra: confirmo pedidos sempre pelo app/site oficial',
        'Lembre: nenhuma loja séria cobra PIX avulso pra "liberar" pedido',
      ],
    },
    desafio: {
      cenario: 'Você adota a regra de confirmar qualquer "atendimento" pelo canal oficial da empresa, ignorando o contato que chegou.',
      requisitos: [
        'Sei que logo/selo não provam identidade',
        'Busco o canal oficial no site/app/nota',
        'Não pago PIX avulso pra "liberar pedido"',
        'Desconfio de links de prêmio/rastreio/cadastro',
        'Confirmo o pedido dentro do app/site oficial',
      ],
      dica: 'Salve nos contatos os SACs oficiais das lojas e bancos que você usa. Quando um "atendimento" chegar, você compara na hora — se o número não bate com o oficial salvo, é golpe.',
    },
    validacao: [
      'Reconheço o falso WhatsApp Business',
      'Confirmo pelo canal oficial',
      'Não pago taxa de liberação',
      'Desconfio de links suspeitos',
      'Salvo os SACs oficiais',
    ],
  },

  'sec-whatsapp-6': {
    trilhaId: 'sec-whatsapp', numero: 6, titulo: 'Grupos, links e mensagens que espalham golpe',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Cupom imperdível, vaga de emprego dos sonhos, ajuda pra uma causa, "clique e ganhe": o WhatsApp virou um canal de golpes que se espalham de grupo em grupo. Aprender a reconhecer e não repassar te protege — e protege todo mundo na sua lista.',
      conceito: {
        titulo: 'Se é bom demais ou urgente demais, desconfie',
        texto: 'Muita fraude circula por links em grupos e correntes: falsos cupons de supermercado, "auxílio" do governo, sorteios, promoções de marcas famosas, vagas com salário alto e pouca exigência. O link leva a um site que copia a marca e pede seus dados, instala algo, ou te faz "convidar 10 contatos pra liberar". Ao repassar, você vira distribuidor do golpe sem querer. A defesa: não clicar em links de promoção que chegam por mensagem, confirmar promoções no site oficial da marca, e nunca repassar correntes "pra liberar" qualquer coisa.',
      },
      estrutura: {
        titulo: 'Sinais de mensagem-golpe',
        partes: [
          { simbolo: '🎁', desc: 'Oferta boa demais: cupom gigante, prêmio fácil, dinheiro do governo.' },
          { simbolo: '🔗', desc: 'Link estranho (encurtado ou com domínio esquisito) imitando marca.' },
          { simbolo: '👥', desc: '"Convide X amigos/grupos pra liberar" — espalha o golpe por você.' },
          { simbolo: '⏳', desc: '"Só hoje", "últimas vagas", contagem regressiva: pressa artificial.' },
        ],
      },
      exemplo: {
        titulo: 'O que fazer com a mensagem suspeita',
        celulas: [
          { ref: 'Recebeu', valor: '"Cupom de R$ 500 do supermercado X — clique e cadastre!"' },
          { ref: 'Errado', valor: 'Clicar e preencher seus dados / repassar pro grupo da família' },
          { ref: 'Certo', valor: 'Não clicar e checar a promoção no site oficial da marca' },
          { ref: 'Certo', valor: 'Avisar o grupo que é golpe e não repassar' },
        ],
        formula: 'Bom/urgente demais + link + "convide pra liberar" = golpe',
        resultado: 'Você não cai nem ajuda a espalhar.',
        comentario: 'Marcas sérias divulgam promoções nos canais oficiais, não por corrente de WhatsApp que pede pra você convidar contatos. Quando a "promoção" exige espalhar, o produto é você.',
      },
      vocabulario: [
        { palavra: 'Corrente', def: 'Mensagem feita pra ser repassada em massa — vetor comum de golpe.' },
        { palavra: 'Link encurtado', def: 'Endereço curto que esconde o destino real; desconfie em promoções.' },
        { palavra: 'Phishing', def: 'Site falso que imita marca pra roubar seus dados.' },
      ],
      chave: [
        'Oferta boa/urgente demais = desconfie',
        'Não clique em links de promoção que chegam por mensagem',
        'Não repasse correntes "pra liberar" nada',
      ],
      porque: 'Golpes de link viram epidemia porque as próprias vítimas os espalham. Aprender a parar a corrente em você protege sua lista inteira e corta o combustível da fraude.',
    },
    pratica: {
      instrucao: 'Revise como você lida com links e correntes no WhatsApp.',
      passos: [
        'Lembre da última "promoção" que chegou por grupo ou corrente',
        'Pergunte: o link parecia oficial? Pedia pra convidar gente?',
        'Defina: não clico em link de promoção que chega por mensagem',
        'Defina: confirmo promoções só no site/app oficial da marca',
        'Comprometa-se a avisar o grupo quando algo for golpe — sem repassar',
      ],
    },
    desafio: {
      cenario: 'Você passa a não clicar nem repassar links de promoção e confirma ofertas apenas nos canais oficiais.',
      requisitos: [
        'Reconheço os sinais de mensagem-golpe',
        'Não clico em links de promoção por mensagem',
        'Confirmo ofertas no site/app oficial',
        'Não repasso correntes',
        'Aviso os grupos quando identifico golpe',
      ],
      dica: 'Antes de clicar em qualquer link, observe o endereço: erros de escrita, domínios estranhos e encurtadores em "promoções" são bandeira vermelha. Na dúvida, vá direto ao site oficial você mesmo.',
    },
    validacao: [
      'Reconheço mensagens-golpe',
      'Não clico em links suspeitos',
      'Confirmo ofertas no oficial',
      'Não repasso correntes',
      'Aviso os grupos',
    ],
  },

  'sec-whatsapp-7': {
    trilhaId: 'sec-whatsapp', numero: 7, titulo: 'SIM swap: quando roubam seu número',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Do nada, seu celular fica "sem sinal" e não volta. Pode ser só um problema da operadora — ou pode ser um golpista que roubou seu número pra receber seus SMS e códigos. O SIM swap é mais raro, porém mais perigoso. Veja como blindar.',
      conceito: {
        titulo: 'O golpista transfere seu número pro chip dele',
        texto: 'No SIM swap, o criminoso convence (ou suborna) a operadora a passar seu número pra um novo chip, em poder dele. A partir daí, ele recebe suas ligações e SMS — inclusive os códigos de WhatsApp, banco e de duas etapas que vão por SMS. O primeiro sinal é seu telefone perder o sinal de rede sem explicação e não voltar. A defesa começa antes: cadastre uma senha/PIN de atendimento na operadora, evite usar SMS como única verificação (prefira apps autenticadores), e, se ficar sem sinal de repente, ligue urgente pra operadora por outro telefone.',
      },
      estrutura: {
        titulo: 'Prevenir e reagir ao SIM swap',
        partes: [
          { simbolo: '🔐', desc: 'Cadastre senha de atendimento na operadora (dificulta a troca de chip).' },
          { simbolo: '📲', desc: 'Use app autenticador no lugar de SMS sempre que possível.' },
          { simbolo: '📡', desc: 'Sinal sumiu sem motivo e não volta? Pode ser SIM swap — investigue já.' },
          { simbolo: '☎️', desc: 'Ligue pra operadora por outro aparelho e bloqueie a linha.' },
        ],
      },
      exemplo: {
        titulo: 'A reação rápida que limita o dano',
        celulas: [
          { ref: 'Sinal', valor: 'Celular "sem serviço" há horas, mesmo reiniciando' },
          { ref: 'Suspeita', valor: 'Pode ser troca de chip fraudulenta (SIM swap)' },
          { ref: 'Ação', valor: 'Ligar pra operadora por outro telefone e bloquear a linha' },
          { ref: 'Ação', valor: 'Avisar banco e ativar/conferir o PIN do WhatsApp' },
        ],
        formula: 'Senha na operadora + autenticador + reação rápida ao "sem sinal"',
        resultado: 'Você corta o acesso do golpista aos seus códigos.',
        comentario: 'O PIN de duas etapas do WhatsApp (missão 3) protege mesmo no SIM swap, porque o PIN não vai por SMS. Por isso ele é tão importante: cobre vários cenários de uma vez.',
      },
      vocabulario: [
        { palavra: 'SIM swap', def: 'Troca fraudulenta do seu número pra um chip do golpista.' },
        { palavra: 'Senha de atendimento', def: 'Código que a operadora pede pra autorizar mudanças na sua linha.' },
        { palavra: 'App autenticador', def: 'App que gera códigos no próprio aparelho, sem depender de SMS.' },
      ],
      chave: [
        'Sinal sumiu sem motivo? Suspeite de SIM swap',
        'Cadastre senha de atendimento na operadora',
        'Prefira autenticador a SMS; PIN do WhatsApp protege mesmo aqui',
      ],
      porque: 'O SIM swap dá ao golpista a chave dos seus códigos por SMS. Conhecer o sinal (perda de sinal) e blindar a operadora reduz muito o risco — e reforça por que o PIN de duas etapas é indispensável.',
    },
    pratica: {
      instrucao: 'Reforce a segurança da sua linha telefônica.',
      passos: [
        'Entre em contato com sua operadora e pergunte sobre senha de atendimento',
        'Cadastre uma senha/PIN pra autorizar mudanças na linha',
        'Veja quais dos seus apps importantes oferecem app autenticador',
        'Migre do SMS pro autenticador onde for possível',
        'Memorize: "sem sinal" sem explicação = ligar pra operadora na hora',
      ],
    },
    desafio: {
      cenario: 'Você cadastra uma senha de atendimento na operadora e sabe reagir a uma perda súbita de sinal.',
      requisitos: [
        'Entendi o que é SIM swap',
        'Cadastrei (ou pedi) senha de atendimento na operadora',
        'Sei reconhecer o sinal de perda de rede',
        'Sei reagir ligando pela operadora e bloqueando a linha',
        'Prefiro autenticador a SMS quando possível',
      ],
      dica: 'Se o sinal cair de noite e você não puder ligar pra operadora na hora, ative o modo avião e, ao acordar, trate como prioridade. Quanto antes bloquear a linha, menos o golpista consegue fazer.',
    },
    validacao: [
      'Entendo o SIM swap',
      'Cadastrei senha na operadora',
      'Reconheço a perda de sinal suspeita',
      'Sei bloquear a linha rápido',
      'Uso autenticador onde dá',
    ],
  },

  'sec-whatsapp-8': {
    trilhaId: 'sec-whatsapp', numero: 8, titulo: 'Recuperar um WhatsApp sequestrado',
    tempoTotal: 10, xp: 80, vertente: 'ambos',
    aula: {
      gancho: 'Aconteceu: tomaram seu WhatsApp. Calma — dá pra recuperar, e geralmente é mais rápido do que parece. O segredo é agir já e na ordem certa, enquanto avisa seus contatos pra ninguém cair em golpe em seu nome.',
      conceito: {
        titulo: 'Reative sua conta — quem registra por último, ganha',
        texto: 'O WhatsApp pertence a quem consegue registrar o número com o código atual. Então, pra recuperar, você reinstala o app, coloca seu número e pede um novo código de 6 dígitos por SMS. Ao inserir esse código, sua conta volta pro SEU aparelho e desconecta o golpista. Se ele tiver ativado a verificação em duas etapas com um PIN dele, você usará a opção de recuperação (e-mail) e poderá esperar um prazo de segurança. Enquanto resolve, avise contatos por outros meios (ligação, redes) que sua conta foi tomada e que ninguém faça PIX em seu nome.',
      },
      estrutura: {
        titulo: 'Passo a passo da recuperação',
        partes: [
          { simbolo: '📥', desc: 'Reinstale o WhatsApp e registre seu número novamente.' },
          { simbolo: '🔢', desc: 'Peça o código por SMS e insira — isso desconecta o invasor.' },
          { simbolo: '🔐', desc: 'Se pedirem PIN que não é seu, use "esqueci o PIN" / recuperação por e-mail.' },
          { simbolo: '📣', desc: 'Avise contatos por outros canais: "não mandem dinheiro, fui hackeado".' },
        ],
      },
      exemplo: {
        titulo: 'Ordem das ações nos primeiros minutos',
        celulas: [
          { ref: '1º', valor: 'Reinstalar e pedir novo código por SMS' },
          { ref: '2º', valor: 'Inserir o código → conta volta pro seu aparelho' },
          { ref: '3º', valor: 'Ativar/checar verificação em duas etapas com PIN seu' },
          { ref: '4º', valor: 'Avisar contatos e registrar B.O.' },
        ],
        formula: 'Reinstalar + novo código + retomar + avisar + B.O.',
        resultado: 'Conta de volta e contatos protegidos do golpe em seu nome.',
        comentario: 'Depois de recuperar, mude a senha do e-mail ligado à conta e revise dispositivos conectados (WhatsApp Web). E ative o PIN, se ainda não tinha — é o que evita um novo sequestro.',
      },
      vocabulario: [
        { palavra: 'Reativar', def: 'Registrar o número de novo no seu aparelho, com código atual.' },
        { palavra: 'Recuperação por e-mail', def: 'Caminho pra recuperar acesso quando há PIN de duas etapas.' },
        { palavra: 'Dispositivos conectados', def: 'Lista de aparelhos logados (ex.: WhatsApp Web) — revise e desconecte estranhos.' },
      ],
      chave: [
        'Reinstale e peça novo código pra retomar a conta',
        'Avise contatos por outro canal imediatamente',
        'Depois, ative o PIN e revise dispositivos conectados',
      ],
      porque: 'Saber o passo a passo da recuperação transforma o pânico em ação. Agir rápido recupera a conta e, principalmente, evita que seus contatos sejam roubados achando que estão falando com você.',
    },
    pratica: {
      instrucao: 'Deixe pronto seu plano de recuperação (esperando nunca usar).',
      passos: [
        'Memorize: recuperar = reinstalar + pedir novo código por SMS',
        'Saiba que inserir o novo código derruba o invasor',
        'Tenha um jeito de avisar contatos por fora (lista, rede social, ligação)',
        'Saiba que o e-mail de recuperação ajuda se houver PIN do golpista',
        'Planeje: após retomar, ativo PIN e reviso WhatsApp Web',
      ],
    },
    desafio: {
      cenario: 'Você consegue descrever, na ordem, como recuperaria um WhatsApp sequestrado e como avisaria seus contatos.',
      requisitos: [
        'Sei reinstalar e pedir novo código pra retomar',
        'Entendo que o novo código desconecta o invasor',
        'Tenho um canal alternativo pra avisar contatos',
        'Sei usar a recuperação por e-mail se houver PIN do golpista',
        'Sei o que fazer depois (PIN + revisar dispositivos)',
      ],
      dica: 'Guarde o e-mail de recuperação da verificação em duas etapas num lugar que você acessa por outro aparelho. Ele é seu coringa quando o golpista coloca um PIN próprio.',
    },
    validacao: [
      'Sei retomar a conta com novo código',
      'Entendo que isso derruba o invasor',
      'Sei avisar contatos por outro canal',
      'Conheço a recuperação por e-mail',
      'Sei reforçar a conta depois',
    ],
  },

  'sec-whatsapp-9': {
    trilhaId: 'sec-whatsapp', numero: 9, titulo: 'Projeto: blindagem total do WhatsApp',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Você já conhece cada golpe e cada defesa. Hora de juntar tudo num pente-fino completo: ajustes ativados, hábitos no lugar e família avisada. Ao final, seu WhatsApp fica blindado e você vira referência de segurança pra quem está perto.',
      conceito: {
        titulo: 'Três frentes: app, hábito e rede de contatos',
        texto: 'WhatsApp seguro é a soma de três frentes. No app: verificação em duas etapas com PIN, privacidade ajustada (foto, visto por último, grupos) e revisão de dispositivos conectados. No hábito: nunca repassar código, confirmar pedidos de dinheiro por voz, não clicar/repassar links de promoção. Na rede: combinar senha de família e avisar os mais vulneráveis. Com as três frentes ativas, o golpista não tem por onde entrar — nem por você, nem pelos seus contatos.',
      },
      estrutura: {
        titulo: 'As frentes do seu projeto',
        partes: [
          { simbolo: '🔐', desc: 'App: PIN de duas etapas + e-mail de recuperação ativos.' },
          { simbolo: '🙈', desc: 'Privacidade: quem vê foto/visto/grupos ajustado pra "meus contatos".' },
          { simbolo: '🧠', desc: 'Hábito: não repasso código, confirmo dinheiro por voz, não repasso link.' },
          { simbolo: '👨‍👩‍👧', desc: 'Rede: senha de família combinada e parentes vulneráveis avisados.' },
        ],
      },
      exemplo: {
        titulo: 'Checklist de blindagem',
        celulas: [
          { ref: 'App', valor: 'PIN ✓ · E-mail recuperação ✓ · Dispositivos revisados ✓' },
          { ref: 'Privacidade', valor: 'Foto/visto/grupos restritos ✓' },
          { ref: 'Hábito', valor: 'Não repasso código ✓ · Confirmo por voz ✓ · Não repasso link ✓' },
          { ref: 'Rede', valor: 'Senha de família ✓ · Vulneráveis avisados ✓' },
        ],
        formula: 'App + privacidade + hábito + rede = WhatsApp blindado',
        resultado: 'As portas do sequestro e dos golpes ficam fechadas.',
        comentario: 'Ajustar quem pode te adicionar em grupos evita que golpistas te joguem em grupos-isca. E restringir foto/visto reduz o material que eles usam pra se passar por você.',
      },
      vocabulario: [
        { palavra: 'Privacidade do WhatsApp', def: 'Configurações de quem vê sua foto, visto por último e quem te adiciona em grupos.' },
        { palavra: 'Dispositivos conectados', def: 'Aparelhos logados na sua conta; revise e remova estranhos.' },
        { palavra: 'Blindagem', def: 'Conjunto de defesas que, juntas, fecham as portas do golpe.' },
      ],
      chave: [
        'Ative PIN e ajuste a privacidade',
        'Pratique os hábitos: código, voz, links',
        'Combine senha de família e avise os vulneráveis',
      ],
      porque: 'Este projeto consolida a trilha numa rotina de segurança real. Blindando app, hábito e rede de contatos, você sai de alvo fácil pra protetor da sua própria família — o objetivo central do módulo.',
    },
    pratica: {
      instrucao: 'Execute o pente-fino do seu WhatsApp, frente por frente.',
      passos: [
        'App: confirme PIN de duas etapas e e-mail de recuperação ativos',
        'App: revise os dispositivos conectados (WhatsApp Web) e remova estranhos',
        'Privacidade: ajuste foto, visto por último e quem te adiciona em grupos',
        'Hábito: relembre as regras (código, voz, links) e cole num lugar visível',
        'Rede: combine a senha de família e avise pelo menos um parente vulnerável',
        'Confira: cada item do checklist de blindagem está ✓?',
      ],
    },
    desafio: {
      cenario: 'Você conclui o pente-fino: PIN e privacidade ativos, dispositivos revisados, hábitos firmados e família orientada.',
      requisitos: [
        'PIN de duas etapas e e-mail de recuperação ativos',
        'Privacidade ajustada (foto/visto/grupos)',
        'Dispositivos conectados revisados',
        'Hábitos firmados (código, voz, links)',
        'Senha de família combinada e vulnerável avisado',
      ],
      dica: 'Refaça esse pente-fino a cada poucos meses e sempre que trocar de celular. Trocar de aparelho é o momento em que muita gente esquece de reativar o PIN — não seja essa pessoa.',
    },
    validacao: [
      'Ativei PIN e privacidade',
      'Revisei dispositivos conectados',
      'Firmei os hábitos de defesa',
      'Combinei senha de família',
      'Orientei um parente vulnerável',
    ],
  },
};
