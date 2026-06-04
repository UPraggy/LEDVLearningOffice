// ============================================================================
// CONTEÚDO — Vender Online (mkt-vendas). Por que vender pela internet, escolher
// onde vender (marketplace, redes/WhatsApp, loja própria), boas fotos e
// descrição que vende, atendimento e fechamento, pagamento online seguro,
// frete e entrega, lidar com avaliações e reputação, e um projeto de montar
// sua primeira venda online. Para vida e trabalho.
// ============================================================================

export const MKT_VENDAS = {
  'mkt-vendas-1': {
    trilhaId: 'mkt-vendas', numero: 1, titulo: 'Por que e onde vender online',
    tempoTotal: 8, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Antes, pra vender você precisava de uma loja física, com aluguel caro e clientes só do bairro. Hoje, qualquer pessoa pode vender pela internet, pro Brasil inteiro, com pouco ou nenhum custo inicial. Mas existe um lugar certo pra começar — e escolher errado pode complicar o que deveria ser simples.',
      conceito: {
        titulo: 'A internet abriu as portas — escolha onde vender',
        texto: 'Vender online quer dizer oferecer e vender seus produtos ou serviços pela internet, em vez de (ou além de) um ponto físico. As VANTAGENS são enormes: você alcança MUITO mais gente (não só quem passa na sua rua); pode vender 24 horas; tem custo inicial baixo (muitas vezes ZERO); e começa pequeno, do seu celular ou casa. Mas "vender online" não é um lugar só — há vários CANAIS, cada um com seu jeito: 1) REDES SOCIAIS e WHATSAPP — o jeito mais simples e barato de começar: você divulga nas redes (Instagram, Facebook) e fecha a venda pela conversa (WhatsApp); ótimo pra quem está começando; 2) MARKETPLACES — grandes sites/apps onde muita gente já compra (você anuncia lá dentro); têm muito tráfego, mas cobram uma comissão e há concorrência; 3) LOJA PRÓPRIA — seu próprio site/loja virtual; dá mais controle e marca, mas exige mais trabalho e conhecimento. A boa estratégia, especialmente no começo: comece SIMPLES (redes + WhatsApp), valide que vende, e cresça pra outros canais conforme aprende. Não tente fazer tudo de uma vez. Esta trilha mostra como vender bem online — das fotos ao pagamento e entrega — começando pelo caminho mais acessível.',
      },
      estrutura: {
        titulo: 'Onde vender online',
        partes: [
          { simbolo: '📱', desc: 'Redes + WhatsApp: o jeito mais simples e barato de começar.' },
          { simbolo: '🛒', desc: 'Marketplaces: muito tráfego, mas comissão e concorrência.' },
          { simbolo: '🏪', desc: 'Loja própria: mais controle e marca, mais trabalho.' },
          { simbolo: '🌱', desc: 'Comece simples, valide, e cresça pra outros canais.' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo o canal',
        celulas: [
          { ref: 'Começando do zero', valor: 'Redes + WhatsApp (simples, grátis)' },
          { ref: 'Quero muito tráfego', valor: 'Marketplace (mas paga comissão)' },
          { ref: 'Quero marca e controle', valor: 'Loja própria (mais trabalho)' },
          { ref: 'Fazer tudo de uma vez', valor: 'Erro: comece por um, valide, cresça' },
        ],
        formula: 'Mais alcance + baixo custo + 24h, começando simples = vender online com o pé direito',
        resultado: 'Você entende as vantagens de vender online e escolhe por onde começar.',
        comentario: 'O erro mais comum de quem quer vender online é tentar fazer tudo ao mesmo tempo — abrir loja própria, anunciar em vários marketplaces, criar mil redes — e se afogar antes de vender o primeiro item. A estratégia inteligente é o oposto: comece pelo MAIS SIMPLES (redes sociais + WhatsApp), que é grátis e você já sabe usar, valide que existe gente comprando, e só então invista em canais mais complexos. Cada canal tem prós e contras: marketplaces trazem tráfego mas cobram e têm concorrência feroz; loja própria dá controle mas exige conhecimento. Não há canal "certo" universal — há o certo pra o seu momento. E começar é mais importante que escolher perfeito.',
      },
      vocabulario: [
        { palavra: 'Canal de venda', def: 'O lugar por onde você vende (redes, marketplace, loja própria).' },
        { palavra: 'Marketplace', def: 'Grande site/app onde muitos vendem e muitos compram, mediante comissão.' },
        { palavra: 'Tráfego', def: 'A quantidade de gente que passa/visita um canal de venda.' },
      ],
      chave: [
        'Vender online dá mais alcance, 24h e custo inicial baixo',
        'Há canais diferentes: redes/WhatsApp, marketplaces, loja própria',
        'Comece simples (redes+WhatsApp), valide e cresça depois',
      ],
      porque: 'Vender online abre as portas pra muito mais clientes com custo baixo e funcionando 24h, mas exige escolher o canal certo: começar pelo mais simples (redes sociais + WhatsApp), validar que vende, e crescer pra marketplaces ou loja própria conforme aprende evita se afogar tentando fazer tudo de uma vez.',
    },
    pratica: {
      instrucao: 'Vamos escolher por onde começar a vender.',
      passos: [
        'Liste o que você quer vender (produto ou serviço)',
        'Avalie os canais: redes/WhatsApp, marketplace, loja própria',
        'Considere onde seus clientes já estão e compram',
        'Escolha um canal simples pra começar (geralmente redes+WhatsApp)',
        'Defina que vai validar nele antes de partir pra outros',
      ],
    },
    desafio: {
      cenario: 'Planeje suas vendas online: defina o que vai vender, avalie os canais (redes/WhatsApp, marketplace, loja própria) considerando onde seus clientes estão, e escolha um canal simples pra começar e validar — saindo na frente com o caminho mais acessível em vez de tentar fazer tudo de uma vez.',
      requisitos: [
        'Listei o que quero vender',
        'Avaliei os canais disponíveis',
        'Considerei onde meus clientes já compram',
        'Escolhi um canal simples pra começar',
        'Defini validar antes de partir pra outros canais',
      ],
      dica: 'Se você está começando, redes sociais + WhatsApp é quase sempre a melhor porta de entrada: é grátis, você provavelmente já usa, e dá pra fechar venda na conversa, com aquele calor humano que fideliza. Marketplaces valem a pena quando você quer alcançar quem já está procurando seu tipo de produto, mas leve em conta a comissão no seu preço (lembra da trilha de precificação?). Loja própria é um passo mais avançado, pra quando o negócio cresce. E você pode combinar canais com o tempo — mas um de cada vez, dominando antes de adicionar o próximo.',
    },
    validacao: [
      'Sei as vantagens de vender online',
      'Conheço os canais: redes, marketplace, loja própria',
      'Sei que cada canal tem prós e contras',
      'Sei começar simples e validar',
      'Escolhi por onde vou começar',
    ],
  },

  'mkt-vendas-2': {
    trilhaId: 'mkt-vendas', numero: 2, titulo: 'Fotos e descrições que vendem',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Na internet, o cliente não pode pegar, sentir ou experimentar o produto — ele decide pela FOTO e pela DESCRIÇÃO. Uma foto ruim ou um texto confuso faz perder a venda mesmo de um produto ótimo. A boa notícia: você não precisa de equipamento caro pra ter fotos boas — só de alguns cuidados simples.',
      conceito: {
        titulo: 'A foto vende; a descrição convence',
        texto: 'Vender online é vender pelos OLHOS e pelas PALAVRAS, porque o cliente não tem o produto na mão. Duas coisas decidem a venda: a FOTO e a DESCRIÇÃO. BOAS FOTOS (e você consegue com o celular!): 1) Use BOA LUZ — luz natural (perto da janela, de dia) é a melhor e de graça; evite sombras e fotos escuras; 2) FUNDO LIMPO — um fundo simples e neutro destaca o produto (uma parede clara, um pano liso); 3) Mostre o produto de VÁRIOS ÂNGULOS e os detalhes importantes; 4) Foto NÍTIDA e verdadeira — mostre o produto como ele é (foto enganosa gera devolução e cliente insatisfeito). BOA DESCRIÇÃO: 1) Diga claramente O QUE É, com as informações que o cliente precisa (tamanho, cor, material, como funciona, o que vem incluso); 2) Destaque os BENEFÍCIOS — não só o que é, mas o que resolve pro cliente; 3) Seja HONESTO e completo — responda as dúvidas antes que ele pergunte; 4) Escreva de forma simples e organizada. Juntas, foto boa + descrição clara fazem o cliente confiar e comprar, mesmo sem ter o produto na mão. Esse é talvez o investimento de maior retorno em vender online: capricho na hora de apresentar — porque é a sua vitrine.',
      },
      estrutura: {
        titulo: 'Apresentando o produto',
        partes: [
          { simbolo: '☀️', desc: 'Boa luz (natural de dia) e foto nítida — dá pra fazer no celular.' },
          { simbolo: '⬜', desc: 'Fundo limpo e neutro que destaca o produto.' },
          { simbolo: '📐', desc: 'Vários ângulos e detalhes; mostre como ele é de verdade.' },
          { simbolo: '✍️', desc: 'Descrição clara: o que é, info, benefícios, honesta.' },
        ],
      },
      exemplo: {
        titulo: 'Vitrine que vende',
        celulas: [
          { ref: 'Foto escura, fundo bagunçado', valor: 'Luz natural + fundo limpo' },
          { ref: 'Só uma foto de longe', valor: 'Vários ângulos e detalhes' },
          { ref: 'Foto melhor que o real', valor: 'Foto honesta evita devolução' },
          { ref: '"Vendo blusa"', valor: 'Tamanho, cor, material, benefício' },
        ],
        formula: 'Boa luz + fundo limpo + ângulos + descrição clara e honesta = cliente confia e compra',
        resultado: 'Você apresenta o produto de forma que o cliente confia e compra.',
        comentario: 'A foto é a sua VITRINE — e na internet, é tudo o que o cliente vê. A diferença entre uma foto que vende e uma que afasta não é equipamento caro; é LUZ e FUNDO. Luz natural perto da janela e um fundo limpo transformam a foto de qualquer celular. O erro fatal é a foto enganosa (que mostra o produto melhor do que é): pode até vender uma vez, mas gera devolução, avaliação ruim e cliente perdido — honestidade vende mais a longo prazo. Na descrição, o segredo é responder as dúvidas ANTES que o cliente pergunte (tamanho, material, o que vem): cada dúvida não respondida é uma venda que pode escapar. Capriche na apresentação; é o que mais retorna.',
      },
      vocabulario: [
        { palavra: 'Vitrine', def: 'A apresentação do produto (fotos e descrição) que o cliente vê.' },
        { palavra: 'Benefício', def: 'O que o produto resolve ou melhora pra o cliente, não só o que é.' },
        { palavra: 'Descrição', def: 'O texto que informa e convence sobre o produto.' },
      ],
      chave: [
        'O cliente decide pela foto e pela descrição (não tem o produto na mão)',
        'Boa luz natural + fundo limpo + ângulos: dá pra fazer no celular',
        'Descrição clara, honesta, com info e benefícios convence',
      ],
      porque: 'Como o cliente online não pode tocar o produto, a foto e a descrição decidem a venda: boa luz natural, fundo limpo e ângulos (tudo possível no celular) mais uma descrição clara, honesta e com benefícios fazem o cliente confiar e comprar — o investimento de maior retorno em vender online, porque é a sua vitrine.',
    },
    pratica: {
      instrucao: 'Vamos criar uma vitrine que vende.',
      passos: [
        'Fotografe um produto com luz natural e fundo limpo',
        'Tire fotos de vários ângulos e dos detalhes importantes',
        'Confira que a foto é nítida e mostra o produto como ele é',
        'Escreva uma descrição com o que é, info essencial e benefícios',
        'Revise pra responder as dúvidas do cliente antes que ele pergunte',
      ],
    },
    desafio: {
      cenario: 'Monte a vitrine: fotografe um produto com luz natural e fundo limpo, em vários ângulos e nítido, e escreva uma descrição clara e honesta com informações e benefícios que responda as dúvidas do cliente — criando a apresentação que faz alguém confiar e comprar mesmo sem ter o produto na mão.',
      requisitos: [
        'Fotografei com boa luz e fundo limpo',
        'Tirei fotos de vários ângulos e detalhes',
        'Conferi que a foto é nítida e honesta',
        'Escrevi descrição com info essencial e benefícios',
        'Revisei pra responder dúvidas antecipadamente',
      ],
      dica: 'Limpe e organize o produto antes de fotografar — parece óbvio, mas detalhes (poeira, etiqueta torta) aparecem na foto. Se vende roupa ou acessório, mostrar o produto sendo usado ajuda o cliente a se imaginar com ele. Para a descrição, pense nas perguntas que os clientes mais fazem e já responda no texto: "serve em quem?", "qual o tamanho?", "lava na máquina?". Cada dúvida resolvida na descrição é uma objeção a menos pra fechar a venda. E lembre da trilha do Canva: dá pra montar fotos com texto e preço de forma bonita pra divulgar nas redes.',
    },
    validacao: [
      'Sei tirar boas fotos com luz natural e fundo limpo',
      'Mostro vários ângulos e detalhes do produto',
      'Faço fotos nítidas e honestas',
      'Escrevo descrição clara com info e benefícios',
      'Respondo as dúvidas do cliente na descrição',
    ],
  },

  'mkt-vendas-3': {
    trilhaId: 'mkt-vendas', numero: 3, titulo: 'Atendimento e fechamento da venda',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'O cliente viu sua foto, gostou, e mandou mensagem: "tem disponível?". Esse é o momento decisivo — e muita venda se perde aqui, por demora pra responder, frieza, ou não saber conduzir até o "pode fechar". Atender bem e fechar a venda é uma habilidade que se aprende, e faz toda a diferença no resultado.',
      conceito: {
        titulo: 'Atender bem e conduzir até o fechamento',
        texto: 'Quando o cliente entra em contato (no WhatsApp, comentário, mensagem), a venda está QUASE acontecendo — só falta atender bem e conduzir até o fechamento. Como atender bem: 1) RESPONDA RÁPIDO — na internet, demora esfria o cliente, que vai pra concorrência; responda o quanto antes; 2) Seja CORDIAL e prestativo — trate com simpatia e atenção, como você gostaria de ser tratado; 3) RESPONDA as dúvidas com clareza e honestidade — informações faltando travam a decisão; 4) AJUDE o cliente a decidir — sugira, tire dúvidas, mostre que o produto resolve o que ele precisa. E o FECHAMENTO (a parte que muita gente trava): 1) Quando o cliente demonstra interesse, CONDUZA pro próximo passo de forma natural — confirme o produto, fale do pagamento e entrega; 2) Não tenha medo de PERGUNTAR se pode fechar ("posso reservar pra você?", "fechamos?"); muita venda se perde por o vendedor não dar o passo; 3) FACILITE — quanto mais fácil pagar e receber, mais fácil fechar. Atender bem não é "empurrar" produto; é ajudar de verdade e remover os obstáculos pro cliente comprar o que ele já quer. Um atendimento ágil, cordial e que conduz ao fechamento transforma interesse em venda — e em cliente que volta.',
      },
      estrutura: {
        titulo: 'Do contato ao fechamento',
        partes: [
          { simbolo: '⚡', desc: 'Responda rápido: demora esfria e perde pra concorrência.' },
          { simbolo: '😊', desc: 'Seja cordial e prestativo; responda dúvidas com clareza.' },
          { simbolo: '🤝', desc: 'Ajude a decidir; conduza pro próximo passo naturalmente.' },
          { simbolo: '✅', desc: 'Não tema perguntar se pode fechar; facilite pagar e receber.' },
        ],
      },
      exemplo: {
        titulo: 'Transformando interesse em venda',
        celulas: [
          { ref: 'Demora horas pra responder', valor: 'Responde rápido, cliente ainda quente' },
          { ref: 'Frio e seco', valor: 'Cordial e prestativo' },
          { ref: 'Não conduz, espera o cliente', valor: 'Pergunta "fechamos?" naturalmente' },
          { ref: 'Pagar/receber complicado', valor: 'Facilita: mais fácil fechar' },
        ],
        formula: 'Resposta rápida + cordialidade + ajudar a decidir + conduzir ao fechamento = interesse vira venda',
        resultado: 'Você atende bem e conduz o cliente do contato até a venda fechada.',
        comentario: 'A venda mais fácil de perder é a que já estava quase pronta — o cliente mandou mensagem interessado, e o vendedor demora pra responder ou não conduz pro fechamento. RESPONDER RÁPIDO é talvez o fator mais subestimado em vendas online: na internet, o cliente decide na hora e, se você demora, ele compra de outro. E muita gente trava na hora de FECHAR: atende bem, tira dúvidas, mas nunca pergunta "fechamos?" — e a venda fica no ar. Não é "forçar"; é dar o passo natural pra ajudar quem já quer comprar a concluir. Atender bem e fechar não é manipulação; é cuidar do cliente e remover os obstáculos. E lembre: quem é bem atendido volta e indica.',
      },
      vocabulario: [
        { palavra: 'Fechamento', def: 'O momento de conduzir o cliente interessado a concluir a compra.' },
        { palavra: 'Objeção', def: 'A dúvida ou receio que trava a decisão e precisa ser resolvido.' },
        { palavra: 'Tempo de resposta', def: 'Quão rápido você responde: rápido mantém o cliente quente.' },
      ],
      chave: [
        'Responda rápido: demora esfria o cliente e perde a venda',
        'Seja cordial, resolva dúvidas e ajude o cliente a decidir',
        'Conduza ao fechamento e não tema perguntar se pode fechar',
      ],
      porque: 'Quando o cliente entra em contato, a venda está quase pronta — atender bem e conduzir ao fechamento decide o resultado: responder rápido mantém o cliente quente, cordialidade e clareza removem objeções, e dar o passo natural pro fechamento transforma interesse em venda e em cliente que volta.',
    },
    pratica: {
      instrucao: 'Vamos treinar o atendimento e o fechamento.',
      passos: [
        'Defina como vai responder rápido (avisos, horários de atenção)',
        'Prepare respostas cordiais pras dúvidas mais comuns',
        'Treine ajudar o cliente a decidir, mostrando que resolve a necessidade',
        'Pratique conduzir pro fechamento (confirmar produto, pagamento, entrega)',
        'Pratique perguntar naturalmente se pode fechar a venda',
      ],
    },
    desafio: {
      cenario: 'Domine o atendimento: prepare-se pra responder rápido e com cordialidade, ter respostas pras dúvidas comuns, ajudar o cliente a decidir e conduzir naturalmente até o fechamento — incluindo perguntar se pode fechar — transformando o interesse de quem te procura em vendas concretas e clientes que voltam.',
      requisitos: [
        'Defini como responder rápido',
        'Preparei respostas cordiais pras dúvidas comuns',
        'Treinei ajudar o cliente a decidir',
        'Pratiquei conduzir pro fechamento',
        'Pratiquei perguntar se pode fechar',
      ],
      dica: 'Crie respostas prontas (mas que soem pessoais) pras perguntas que mais se repetem — agiliza muito sem parecer robô. No WhatsApp Business dá pra configurar mensagens rápidas e de saudação, ajudando a responder ágil mesmo ocupado. E observe o sinal de compra: quando o cliente pergunta "como pago?" ou "tem na cor X?", ele está interessado — é hora de conduzir pro fechamento, não de hesitar. Se ele some depois de demonstrar interesse, um lembrete gentil ("oi! ainda tem interesse? guardei pra você") costuma resgatar a venda. Atender bem é metade da venda online.',
    },
    validacao: [
      'Respondo rápido aos contatos',
      'Atendo com cordialidade e clareza',
      'Ajudo o cliente a decidir',
      'Conduzo a conversa até o fechamento',
      'Não tenho medo de perguntar se pode fechar',
    ],
  },

  'mkt-vendas-4': {
    trilhaId: 'mkt-vendas', numero: 4, titulo: 'Recebendo pagamentos com segurança',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'A venda está fechada — agora vem receber o dinheiro. Parece simples, mas é onde moram alguns dos golpes mais comuns contra vendedores: comprovantes falsos, estornos, "pagamento" que nunca cai. Saber receber com segurança protege o seu suado lucro e te dá tranquilidade pra crescer.',
      conceito: {
        titulo: 'Receber é fácil; receber com segurança exige cuidado',
        texto: 'Vender online significa receber pagamentos à distância, e há boas formas de fazer isso — e armadilhas a evitar. FORMAS COMUNS de receber: 1) PIX — rápido, prático e muito usado; o dinheiro cai na hora; 2) Cartão / link de pagamento / maquininha — permite parcelar, com uma taxa por venda; 3) Plataformas/marketplaces que intermediam o pagamento (mais segurança, mediante comissão). O CUIDADO essencial é CONFIRMAR que o pagamento realmente entrou ANTES de entregar o produto. Os golpes mais comuns contra vendedores: 1) COMPROVANTE FALSO — o golpista manda um "comprovante de Pix" (imagem) que é falso ou de outra transação; NUNCA confie no comprovante enviado: confira na SUA conta/app se o dinheiro CAIU de verdade; 2) "Paguei a mais, me devolve a diferença" — golpe clássico; desconfie sempre; 3) Pressa e pressão pra você entregar antes de confirmar — golpista tem pressa. REGRA DE OURO: só entregue/envie o produto depois de VER o dinheiro na sua conta, conferindo você mesmo no app do banco — não pelo print que o cliente mandou. Receber com segurança não é desconfiar de todo mundo; é ter um processo simples (confirmar antes de entregar) que te protege dos poucos mal-intencionados sem atrapalhar os clientes honestos.',
      },
      estrutura: {
        titulo: 'Recebendo com segurança',
        partes: [
          { simbolo: '💸', desc: 'Formas comuns: Pix (cai na hora), cartão/link (parcela, taxa).' },
          { simbolo: '🔎', desc: 'Confirme o pagamento na SUA conta antes de entregar.' },
          { simbolo: '🚫', desc: 'Nunca confie no comprovante (print) enviado pelo cliente.' },
          { simbolo: '⚠️', desc: 'Desconfie de pressa, "paguei a mais" e pressão.' },
        ],
      },
      exemplo: {
        titulo: 'Protegendo o seu dinheiro',
        celulas: [
          { ref: 'Print de "Pix feito"', valor: 'Pode ser falso: confira na sua conta' },
          { ref: 'Dinheiro caiu no app', valor: 'Aí sim, pode entregar' },
          { ref: '"Paguei a mais, devolve"', valor: 'Golpe clássico: desconfie' },
          { ref: 'Pressão pra enviar já', valor: 'Golpista tem pressa: confirme antes' },
        ],
        formula: 'Forma boa de receber + confirmar na minha conta antes de entregar = recebimento seguro',
        resultado: 'Você recebe pagamentos com segurança e foge dos golpes contra vendedores.',
        comentario: 'O golpe nº1 contra quem vende online é o COMPROVANTE FALSO: o golpista manda um print de "Pix realizado" (que é falso, editado, ou de outra transação) e pressiona pra você entregar o produto na hora. A defesa é simples e infalível: NUNCA confie no print — abra o SEU app do banco e confira se o dinheiro CAIU de verdade na sua conta. Se caiu, ótimo, entregue; se não caiu, não entregue, por mais convincente que seja o comprovante ou a pressa. Essa regra única (ver o dinheiro na própria conta antes de entregar) elimina a maioria dos golpes. Conecte com o módulo de Segurança: a pressa e a pressão são as marcas registradas do golpista — desacelere e confirme.',
      },
      vocabulario: [
        { palavra: 'Pix', def: 'Pagamento instantâneo que cai na hora; muito usado em vendas.' },
        { palavra: 'Comprovante falso', def: 'Print de pagamento forjado usado pra enganar o vendedor.' },
        { palavra: 'Confirmar recebimento', def: 'Ver na própria conta se o dinheiro entrou, antes de entregar.' },
      ],
      chave: [
        'Confirme o pagamento na SUA conta antes de entregar o produto',
        'Nunca confie no comprovante (print) que o cliente envia',
        'Desconfie de pressa, "paguei a mais" e pressão: marcas de golpe',
      ],
      porque: 'Receber à distância expõe o vendedor a golpes (comprovante falso, "paguei a mais", pressão), e a defesa é uma regra simples: só entregar depois de ver o dinheiro na própria conta, conferindo no app do banco — não no print do cliente. Esse processo protege o lucro sem atrapalhar os clientes honestos.',
    },
    pratica: {
      instrucao: 'Vamos definir um recebimento seguro.',
      passos: [
        'Escolha as formas de receber (Pix, cartão/link) que vai aceitar',
        'Estabeleça a regra: confirmar na sua conta antes de entregar',
        'Treine NÃO confiar em comprovante (print) enviado pelo cliente',
        'Reconheça os sinais de golpe: pressa, "paguei a mais", pressão',
        'Defina como você vai conferir o pagamento (app do banco)',
      ],
    },
    desafio: {
      cenario: 'Blinde seu recebimento: escolha as formas de receber, estabeleça a regra de confirmar o dinheiro na sua própria conta antes de entregar, e treine ignorar comprovantes enviados e reconhecer os sinais de golpe (pressa, "paguei a mais", pressão) — protegendo o seu lucro dos golpistas sem atrapalhar os clientes honestos.',
      requisitos: [
        'Escolhi as formas de receber que vou aceitar',
        'Estabeleci confirmar na minha conta antes de entregar',
        'Treinei não confiar em print de comprovante',
        'Reconheço os sinais de golpe',
        'Defini como conferir o pagamento no app do banco',
      ],
      dica: 'A regra de ouro vale pra qualquer forma de pagamento: VEJA o dinheiro na sua conta antes de entregar. Para Pix, confira no app do banco (não no print). Para cartão via maquininha/link, confirme a aprovação na plataforma. Cuidado especial com vendas presenciais combinadas pela internet (entregar em mãos): além do pagamento, escolha locais públicos e seguros. E se o cliente honesto precisar esperar você confirmar, está tudo bem — explique educadamente que é seu processo padrão; quem é honesto entende. A segurança no recebimento é o que te deixa crescer tranquilo.',
    },
    validacao: [
      'Sei as formas seguras de receber',
      'Confirmo o pagamento antes de entregar',
      'Não confio em print de comprovante',
      'Reconheço os sinais de golpe contra vendedores',
      'Confiro o dinheiro na minha própria conta',
    ],
  },

  'mkt-vendas-5': {
    trilhaId: 'mkt-vendas', numero: 5, titulo: 'Frete, embalagem e entrega',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Vendeu e recebeu — agora o produto precisa chegar bem nas mãos do cliente. A entrega é parte da experiência: um frete caro espanta a venda, uma embalagem ruim quebra o produto e a reputação, e um atraso sem aviso gera reclamação. Cuidar da logística é cuidar da venda até o fim.',
      conceito: {
        titulo: 'A entrega faz parte da venda',
        texto: 'Depois de vender, vem a LOGÍSTICA: fazer o produto chegar ao cliente. Três partes importam: FRETE, EMBALAGEM e PRAZO. FRETE (o custo de envio): 1) Decida quem paga — você, o cliente, ou dividido; frete muito caro espanta a compra, então pense nisso no preço; 2) Conheça as opções (Correios, transportadoras, entrega própria/local); pra vendas na sua cidade, a entrega local (sua ou por app) pode ser rápida e barata; 3) Calcule o frete certo, ou o prejuízo vem dele. EMBALAGEM: 1) Embale BEM pra o produto chegar inteiro — proteja itens frágeis; um produto quebrado na entrega é venda perdida e reputação manchada; 2) Uma embalagem caprichada encanta (a experiência de "abrir" conta), mas sem exagero de custo; 3) Identifique direito o endereço de entrega. PRAZO e ACOMPANHAMENTO: 1) Informe um prazo REALISTA e cumpra; 2) Dê o código de RASTREAMENTO quando houver, pro cliente acompanhar; 3) Se atrasar, AVISE — comunicação evita a maioria das reclamações. A entrega é o último passo da venda e o primeiro da fidelização: produto que chega bem, no prazo, bem embalado, faz o cliente confiar e voltar. Descuidar da entrega estraga tudo que veio antes.',
      },
      estrutura: {
        titulo: 'Cuidando da entrega',
        partes: [
          { simbolo: '🚚', desc: 'Frete: defina quem paga e calcule certo (caro espanta).' },
          { simbolo: '📦', desc: 'Embale bem: produto inteiro; capriche sem exagerar no custo.' },
          { simbolo: '⏰', desc: 'Prazo realista e cumprido; rastreamento quando houver.' },
          { simbolo: '📣', desc: 'Se atrasar, avise: comunicação evita reclamação.' },
        ],
      },
      exemplo: {
        titulo: 'Da venda à porta do cliente',
        celulas: [
          { ref: 'Frete caro demais', valor: 'Espanta a compra: calcule e pense no preço' },
          { ref: 'Embalagem fraca', valor: 'Produto quebra: embale bem' },
          { ref: 'Prazo otimista demais', valor: 'Prometa realista e cumpra' },
          { ref: 'Atrasou e não avisou', valor: 'Avise: evita reclamação' },
        ],
        formula: 'Frete certo + embalagem que protege + prazo cumprido + avisar = entrega que fideliza',
        resultado: 'Você cuida da entrega pra o produto chegar bem e o cliente confiar.',
        comentario: 'A entrega é onde muita venda boa se estraga — e onde o pequeno negócio pode se destacar. O FRETE caro é um dos maiores motivos de abandono de compra; calcule certo e pense em como apresentá-lo (frete grátis embutido no preço, por exemplo, às vezes vende mais). A EMBALAGEM é dupla: protege (produto quebrado é desastre) e encanta (abrir uma encomenda caprichada marca o cliente). E o PRAZO: prometa o que consegue cumprir e, se algo der errado, AVISE — a maioria das reclamações não é pelo atraso em si, mas pela falta de comunicação. Cliente avisado entende; cliente no escuro reclama. Cuidar da entrega é cuidar da venda até o fim e da volta do cliente.',
      },
      vocabulario: [
        { palavra: 'Frete', def: 'O custo e o serviço de enviar o produto ao cliente.' },
        { palavra: 'Logística', def: 'Todo o processo de fazer o produto chegar (frete, embalagem, prazo).' },
        { palavra: 'Rastreamento', def: 'O código que deixa o cliente acompanhar onde está a entrega.' },
      ],
      chave: [
        'Frete: defina quem paga e calcule certo; caro espanta a compra',
        'Embale bem pra o produto chegar inteiro; capriche sem exagerar',
        'Prazo realista e cumprido; se atrasar, avise (evita reclamação)',
      ],
      porque: 'A entrega é o último passo da venda e o primeiro da fidelização: frete bem calculado (caro espanta), embalagem que protege e encanta, e prazo realista cumprido — com aviso se atrasar — fazem o produto chegar bem e o cliente confiar e voltar. Descuidar da entrega estraga tudo que veio antes.',
    },
    pratica: {
      instrucao: 'Vamos organizar sua entrega.',
      passos: [
        'Defina as opções de frete (Correios, transportadora, entrega local)',
        'Decida quem paga o frete e como apresentá-lo no preço',
        'Escolha como embalar pra proteger o produto na viagem',
        'Estabeleça um prazo de entrega realista que você consiga cumprir',
        'Crie o hábito de avisar o cliente se houver atraso',
      ],
    },
    desafio: {
      cenario: 'Cuide da logística: defina as opções de frete e quem paga, escolha uma embalagem que proteja o produto, estabeleça um prazo realista que você cumpra e crie o hábito de avisar em caso de atraso — garantindo que o produto chegue bem e no prazo, fechando a venda com chave de ouro e fidelizando o cliente.',
      requisitos: [
        'Defini as opções de frete',
        'Decidi quem paga o frete e como apresentá-lo',
        'Escolhi como embalar pra proteger o produto',
        'Estabeleci um prazo de entrega realista',
        'Criei o hábito de avisar em caso de atraso',
      ],
      dica: 'Pra vendas na sua cidade, a entrega local (você mesmo, bike, ou apps de entrega) costuma ser mais rápida e barata que os Correios — e dá um toque pessoal. Para envios mais longe, conheça as opções e cobre o frete certo pra não ter prejuízo. Sobre embalagem: o custo dela entra no seu preço (lembra da precificação?), então equilibre proteção e custo. E guarde os comprovantes de envio/rastreamento — protegem você se o cliente disser que não recebeu. Uma entrega bem cuidada vira propaganda: cliente que recebe certinho e bem embalado indica você.',
    },
    validacao: [
      'Sei definir frete e quem paga',
      'Embalo bem pra o produto chegar inteiro',
      'Prometo prazos realistas e cumpro',
      'Aviso o cliente se houver atraso',
      'Cuido da entrega como parte da venda',
    ],
  },

  'mkt-vendas-6': {
    trilhaId: 'mkt-vendas', numero: 6, titulo: 'Avaliações e reputação',
    tempoTotal: 8, xp: 40, vertente: 'ambos',
    aula: {
      gancho: 'Antes de comprar de você, o cliente novo vai procurar: "essa pessoa é confiável? o que dizem dela?". Na internet, sua REPUTAÇÃO — as avaliações, os comentários, o que os clientes contam — vale ouro. Ela vende por você (ou afasta por você). Cuidar dela é um dos investimentos mais importantes em vendas online.',
      conceito: {
        titulo: 'Reputação é o que vende quando você não está falando',
        texto: 'Na internet, o cliente não te conhece pessoalmente, então ele confia na sua REPUTAÇÃO — o conjunto de avaliações, notas, comentários e a impressão que os clientes anteriores deixaram. Por que importa tanto? Porque a maioria das pessoas LÊ avaliações antes de comprar, e confia mais no que outros clientes dizem do que no que VOCÊ diz. Uma boa reputação vende sozinha; uma ruim afasta. Como construir e cuidar: 1) ENTREGUE bem — boa reputação vem de clientes satisfeitos (produto bom, atendimento bom, entrega boa); não tem atalho; 2) PEÇA avaliações aos clientes satisfeitos — muitos só avaliam se você pedir gentilmente; avaliações positivas constroem confiança; 3) RESPONDA às avaliações, inclusive (e especialmente) as negativas — com educação e disposição de resolver; 4) Diante de uma RECLAMAÇÃO ou avaliação ruim, NÃO brigue: ouça, resolva o problema, mostre boa vontade; um problema bem resolvido pode virar elogio, e quem vê de fora repara em como você lida. Uma avaliação negativa não é o fim — a forma como você RESPONDE diz mais sobre seu negócio que a reclamação em si. Reputação se constrói com tempo e consistência, mas se perde rápido com descaso. Trate cada cliente sabendo que a experiência dele pode virar a propaganda (boa ou má) que define suas próximas vendas.',
      },
      estrutura: {
        titulo: 'Construindo reputação',
        partes: [
          { simbolo: '🌟', desc: 'Entregue bem: reputação vem de clientes satisfeitos.' },
          { simbolo: '🙏', desc: 'Peça avaliações aos satisfeitos (muitos só avaliam se pedir).' },
          { simbolo: '💬', desc: 'Responda avaliações, inclusive as negativas, com educação.' },
          { simbolo: '🔧', desc: 'Reclamação: não brigue, resolva; pode virar elogio.' },
        ],
      },
      exemplo: {
        titulo: 'A reputação vendendo por você',
        celulas: [
          { ref: 'Cliente novo decidindo', valor: 'Lê avaliações antes de comprar' },
          { ref: 'Boas avaliações', valor: 'Vendem sozinhas (confiança)' },
          { ref: 'Avaliação negativa', valor: 'Responder bem diz mais que a queixa' },
          { ref: 'Brigar com cliente', valor: 'Afasta; resolver com calma fideliza' },
        ],
        formula: 'Entregar bem + pedir avaliações + responder com educação + resolver = reputação que vende',
        resultado: 'Você constrói e cuida da reputação que vende por você na internet.',
        comentario: 'A reputação é a sua "propaganda automática": trabalha por você 24h, vendendo (ou afastando) sem você dizer uma palavra. E o ponto que mais surpreende: a forma como você responde a uma avaliação NEGATIVA importa mais que a avaliação em si — clientes futuros leem as respostas e reparam em quem resolve com educação versus quem briga ou ignora. Uma reclamação bem resolvida vira demonstração pública de bom atendimento. Por isso, nunca brigue com cliente em público; respire, ouça, e resolva. Outro segredo simples: PEÇA avaliações — clientes satisfeitos muitas vezes não avaliam por esquecimento, e um pedido gentil constrói sua reputação positiva. Cuide dela: leva tempo pra construir e segundos pra arranhar.',
      },
      vocabulario: [
        { palavra: 'Reputação', def: 'A impressão que avaliações e clientes anteriores deixam sobre você.' },
        { palavra: 'Avaliação', def: 'A nota/comentário que o cliente deixa; influencia novos compradores.' },
        { palavra: 'Prova social', def: 'A confiança que vem de outros clientes terem aprovado você.' },
      ],
      chave: [
        'Na internet, o cliente confia na sua reputação (no que outros dizem)',
        'Entregue bem e peça avaliações aos clientes satisfeitos',
        'Responda avaliações com educação; resolva reclamações sem brigar',
      ],
      porque: 'Como o cliente online não te conhece, ele confia na sua reputação — e a maioria lê avaliações antes de comprar. Entregar bem, pedir avaliações e responder com educação (especialmente às negativas, resolvendo sem brigar) constrói a confiança que vende por você; reputação leva tempo pra construir e segundos pra arranhar.',
    },
    pratica: {
      instrucao: 'Vamos cuidar da sua reputação.',
      passos: [
        'Garanta a base: produto, atendimento e entrega bons',
        'Crie o hábito de pedir avaliação aos clientes satisfeitos',
        'Defina como vai responder avaliações (com educação, sempre)',
        'Prepare-se pra resolver reclamações sem brigar, com boa vontade',
        'Monitore o que dizem de você e cuide da impressão que deixa',
      ],
    },
    desafio: {
      cenario: 'Construa sua reputação: garanta a base de boa entrega, crie o hábito de pedir avaliações aos satisfeitos, defina como responder a avaliações com educação e como resolver reclamações sem brigar — cultivando a reputação que, na internet, vende por você quando você nem está falando.',
      requisitos: [
        'Garanti a base: produto, atendimento e entrega bons',
        'Criei o hábito de pedir avaliações aos satisfeitos',
        'Defini responder avaliações com educação',
        'Preparei-me pra resolver reclamações sem brigar',
        'Monitoro a impressão que deixo',
      ],
      dica: 'Peça a avaliação no momento certo: logo depois de o cliente receber e gostar do produto, quando a satisfação está fresca. Um pedido simples ("se você gostou, uma avaliação ajuda muito meu trabalho!") funciona. Diante de uma crítica, responda rápido e em público mostrando que se importa e vai resolver — mesmo que depois resolva no privado. E lembre: você não controla o que dizem, mas controla como entrega e como responde — e é isso que constrói a reputação. Conecte com a trilha de clientes (mkt-mei): cliente encantado é quem deixa as melhores avaliações e indica.',
    },
    validacao: [
      'Entendo que o cliente confia na minha reputação',
      'Peço avaliações aos clientes satisfeitos',
      'Respondo avaliações com educação',
      'Resolvo reclamações sem brigar',
      'Cuido da impressão que deixo na internet',
    ],
  },

  'mkt-vendas-7': {
    trilhaId: 'mkt-vendas', numero: 7, titulo: 'Promoções, divulgação e fidelização',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Você tem o produto, sabe vender, recebe e entrega bem. Falta o combustível: gente CHEGANDO até você e VOLTANDO sempre. Divulgar pra atrair, usar promoções com inteligência e fidelizar quem já comprou — é isso que faz as vendas crescerem de forma constante, em vez de depender da sorte.',
      conceito: {
        titulo: 'Atrair, converter com promoções inteligentes e fazer voltar',
        texto: 'Vendas constantes vêm de três movimentos: DIVULGAR (atrair gente), PROMOVER (incentivar a compra) e FIDELIZAR (fazer voltar). DIVULGAÇÃO: 1) Mostre seus produtos com frequência onde seus clientes estão (redes sociais, WhatsApp, grupos); quem não aparece, não vende; 2) Use fotos boas e mostre os bastidores, novidades, depoimentos; 3) Peça pra clientes satisfeitos compartilharem/indicarem. PROMOÇÕES com inteligência: 1) Promoção atrai e acelera a compra (desconto, combo, frete grátis, brinde), MAS cuidado pra não destruir seu lucro — promoção tem que caber no preço (lembra da precificação?); 2) Use promoções com PROPÓSITO (datas, queimar estoque, atrair novos), não o tempo todo (senão o cliente só compra na promoção); 3) Crie SENSO DE OPORTUNIDADE real (tempo ou quantidade limitada), com honestidade. FIDELIZAÇÃO: 1) O cliente que já comprou é o mais fácil de vender de novo — mantenha contato (avise novidades, agradeça); 2) Recompense quem volta (clientes fiéis, indicações); 3) Atendimento e experiência bons são a melhor fidelização. O equilíbrio: divulgar pra encher o topo, promover pra converter sem matar o lucro, e fidelizar pra não depender só de clientes novos. Vender bem uma vez é bom; criar um fluxo de gente chegando e voltando é o que faz o negócio prosperar.',
      },
      estrutura: {
        titulo: 'O fluxo de vendas',
        partes: [
          { simbolo: '📢', desc: 'Divulgue com frequência onde seus clientes estão.' },
          { simbolo: '🏷️', desc: 'Promova com propósito, sem destruir o lucro.' },
          { simbolo: '⏳', desc: 'Senso de oportunidade real e honesto (tempo/quantidade).' },
          { simbolo: '🔁', desc: 'Fidelize: cliente que voltou é o mais fácil de vender.' },
        ],
      },
      exemplo: {
        titulo: 'Vendas que crescem',
        celulas: [
          { ref: 'Não aparece, não posta', valor: 'Divulgue com frequência: quem aparece vende' },
          { ref: 'Desconto sempre', valor: 'Cliente só compra na promoção; promova com propósito' },
          { ref: 'Promoção que zera lucro', valor: 'Promoção tem que caber no preço' },
          { ref: 'Esquece quem já comprou', valor: 'Fidelize: o mais fácil de vender de novo' },
        ],
        formula: 'Divulgar + promover com propósito + senso de oportunidade honesto + fidelizar = vendas constantes',
        resultado: 'Você cria um fluxo de clientes chegando e voltando, não vendas por sorte.',
        comentario: 'Dois erros derrubam o lucro de quem vende online. O primeiro: NÃO divulgar — produto ótimo guardado não vende; é preciso aparecer com frequência onde os clientes estão (e as redes/WhatsApp são de graça pra isso). O segundo: viciar em PROMOÇÃO — descontos o tempo todo ensinam o cliente a só comprar quando tem desconto e corroem seu lucro. Promoção é uma ferramenta poderosa quando usada com PROPÓSITO (uma data, atrair novos, girar estoque) e dentro do que o preço aguenta. E o tesouro mais subestimado é a FIDELIZAÇÃO: vender de novo pra quem já confia em você é muito mais fácil e barato que conquistar um novo — mantenha contato e cuide bem. Atrair + converter + reter, em equilíbrio, é o motor do negócio.',
      },
      vocabulario: [
        { palavra: 'Divulgação', def: 'Mostrar seus produtos pra atrair clientes (redes, WhatsApp, indicação).' },
        { palavra: 'Promoção', def: 'Incentivo (desconto, combo, brinde) que acelera a compra, dentro do lucro.' },
        { palavra: 'Fidelização', def: 'Fazer o cliente voltar a comprar; o mais fácil e barato de vender.' },
      ],
      chave: [
        'Divulgue com frequência: quem não aparece não vende',
        'Promova com propósito e dentro do que o preço aguenta',
        'Fidelize: vender de novo a quem já confia é o mais fácil',
      ],
      porque: 'Vendas constantes vêm de divulgar (atrair), promover com inteligência (converter sem matar o lucro) e fidelizar (fazer voltar). Aparecer com frequência onde os clientes estão, usar promoções com propósito e dentro do preço, e manter quem já comprou cria um fluxo de gente chegando e voltando — o motor que faz o negócio prosperar.',
    },
    pratica: {
      instrucao: 'Vamos montar seu fluxo de vendas.',
      passos: [
        'Defina onde e com que frequência vai divulgar seus produtos',
        'Planeje uma promoção com propósito que caiba no seu lucro',
        'Crie um senso de oportunidade real e honesto (tempo/quantidade)',
        'Defina como manter contato e fidelizar quem já comprou',
        'Crie uma forma de recompensar clientes fiéis ou indicações',
      ],
    },
    desafio: {
      cenario: 'Construa o motor de vendas: defina onde e com que frequência divulgar, planeje uma promoção com propósito que caiba no lucro e com senso de oportunidade honesto, e defina como fidelizar e recompensar quem já comprou — criando um fluxo constante de clientes chegando e voltando, em vez de depender da sorte.',
      requisitos: [
        'Defini onde e com que frequência divulgar',
        'Planejei uma promoção com propósito que cabe no lucro',
        'Criei um senso de oportunidade real e honesto',
        'Defini como fidelizar quem já comprou',
        'Criei forma de recompensar fiéis ou indicações',
      ],
      dica: 'Constância vence intensidade na divulgação: é melhor postar regularmente algo simples do que sumir e voltar com tudo de vez em quando — o cliente esquece quem some. Para promoções, faça as contas antes: um desconto que parece pequeno pode zerar sua margem, então promova dentro do que o preço aguenta (revise a trilha de precificação). E nunca subestime fidelizar: um simples "chegou novidade que combina com o que você comprou!" pra um cliente antigo costuma vender mais que caçar estranhos. Conecte com a próxima trilha (redes sociais pro negócio), que aprofunda a divulgação.',
    },
    validacao: [
      'Divulgo meus produtos com frequência',
      'Uso promoções com propósito, sem matar o lucro',
      'Crio senso de oportunidade real e honesto',
      'Mantenho contato e fidelizo quem comprou',
      'Recompenso clientes fiéis e indicações',
    ],
  },

  'mkt-vendas-8': {
    trilhaId: 'mkt-vendas', numero: 8, titulo: 'Projeto: monte sua primeira venda online',
    tempoTotal: 16, xp: 110, vertente: 'ambos',
    aula: {
      gancho: 'Chegou a hora de colocar tudo junto e montar, de verdade, uma venda online completa — da escolha do produto ao plano de receber, entregar e fidelizar. Não é teoria: é o roteiro real pra você anunciar algo e estar pronto pra vender com segurança e profissionalismo, do começo ao fim.',
      conceito: {
        titulo: 'Tudo junto: uma venda online completa, do anúncio à fidelização',
        texto: 'Este projeto reúne a trilha numa VENDA ONLINE completa e pronta pra acontecer: 1) CANAL e PRODUTO — escolha um produto/serviço e o canal pra começar (geralmente redes + WhatsApp); 2) VITRINE — faça boas fotos (luz natural, fundo limpo, ângulos) e escreva uma descrição clara, honesta e com benefícios; 3) ATENDIMENTO — prepare-se pra responder rápido, com cordialidade, e conduzir ao fechamento (incluindo perguntar "fechamos?"); 4) PAGAMENTO SEGURO — defina como receber e a regra de confirmar na sua conta antes de entregar (nada de print); 5) ENTREGA — defina frete, embalagem que protege e prazo realista; 6) PÓS-VENDA — planeje pedir avaliação, cuidar da reputação e fidelizar (manter contato, recompensar). O objetivo é sair com um anúncio REAL pronto pra publicar e um processo claro pra cada etapa — você não fica só na teoria, monta a venda de verdade. Comece com UM produto bem feito (vitrine caprichada, processo redondo) em vez de muitos pela metade; a primeira venda bem estruturada te ensina e dá confiança pra escalar. Ao final, você terá uma venda online completa: anunciada com capricho, com atendimento pronto, recebimento seguro, entrega cuidada e plano de fidelizar. Esse é o seu negócio online dando o primeiro passo concreto.',
      },
      estrutura: {
        titulo: 'A venda online completa',
        partes: [
          { simbolo: '🛍️', desc: 'Canal + produto e vitrine (fotos e descrição).' },
          { simbolo: '🤝', desc: 'Atendimento pronto pra responder e fechar.' },
          { simbolo: '🔒', desc: 'Pagamento seguro e entrega cuidada.' },
          { simbolo: '🔁', desc: 'Pós-venda: avaliação, reputação e fidelização.' },
        ],
      },
      exemplo: {
        titulo: 'Do anúncio à fidelização',
        celulas: [
          { ref: 'Vitrine', valor: 'Boas fotos + descrição clara e honesta' },
          { ref: 'Atendimento', valor: 'Responder rápido e conduzir ao fechamento' },
          { ref: 'Receber e entregar', valor: 'Confirmar antes de entregar; entrega cuidada' },
          { ref: 'Pós-venda', valor: 'Pedir avaliação e fidelizar' },
        ],
        formula: 'Vitrine + atendimento + pagamento seguro + entrega + pós-venda = venda online completa',
        resultado: 'Você monta uma venda online real, pronta pra acontecer do começo ao fim.',
        comentario: 'O valor deste projeto é transformar a trilha em algo REAL e publicável — não um exercício, mas uma venda de verdade pronta pra acontecer. O segredo é fazer UM produto COMPLETO e bem feito em vez de vários pela metade: vitrine caprichada, atendimento pronto, recebimento seguro, entrega cuidada, pós-venda planejado. Uma venda bem estruturada te ensina o processo inteiro e te dá confiança e modelo pra repetir e crescer. Não busque perfeição nem espere "estar pronto" — monte com o que tem, publique, e melhore com a experiência das primeiras vendas. O negócio online se constrói vendendo e aprendendo. Agora você tem o mapa do começo ao fim; é hora de dar o primeiro passo concreto.',
      },
      vocabulario: [
        { palavra: 'Pós-venda', def: 'O cuidado depois da venda: avaliação, reputação e fidelização.' },
        { palavra: 'Vitrine', def: 'A apresentação (fotos e descrição) que atrai e convence o cliente.' },
        { palavra: 'Processo de venda', def: 'As etapas do anúncio ao pós-venda, organizadas e claras.' },
      ],
      chave: [
        'A venda completa: canal, vitrine, atendimento, pagamento, entrega, pós-venda',
        'Faça UM produto completo e bem feito, não muitos pela metade',
        'Monte algo real e publicável; melhore vendendo e aprendendo',
      ],
      porque: 'O projeto transforma a trilha numa venda online real e completa — do anúncio caprichado ao pós-venda — pronta pra acontecer. Montar UM produto bem feito (vitrine, atendimento, pagamento seguro, entrega, fidelização) ensina o processo inteiro e dá confiança pra escalar: o primeiro passo concreto do seu negócio online.',
    },
    pratica: {
      instrucao: 'Vamos montar sua primeira venda online completa.',
      passos: [
        'CANAL e PRODUTO: escolha um produto e o canal pra começar',
        'VITRINE: faça boas fotos e escreva uma descrição clara e honesta',
        'ATENDIMENTO: prepare respostas rápidas e a condução ao fechamento',
        'PAGAMENTO: defina como receber e a regra de confirmar antes de entregar',
        'ENTREGA: defina frete, embalagem que protege e prazo realista',
        'PÓS-VENDA: planeje pedir avaliação e fidelizar, e publique o anúncio',
      ],
    },
    desafio: {
      cenario: 'Coloque no ar: monte uma venda online completa de um produto — canal e vitrine caprichada, atendimento pronto, recebimento seguro, entrega cuidada e plano de pós-venda — e deixe o anúncio pronto pra publicar, dando o primeiro passo concreto e real do seu negócio na internet, do começo ao fim.',
      requisitos: [
        'Escolhi o canal e o produto pra começar',
        'Montei a vitrine: boas fotos e descrição honesta',
        'Preparei o atendimento e a condução ao fechamento',
        'Defini pagamento seguro e entrega cuidada',
        'Planejei o pós-venda e deixei o anúncio pronto pra publicar',
      ],
      dica: 'Junte tudo que a trilha ensinou num produto só, bem feito: é melhor uma venda redonda que dez bagunçadas. Use o que aprendeu nas outras trilhas do mercado: precificação (preço que dá lucro), Canva (montar a arte do anúncio), finanças (separar o dinheiro do negócio), e o módulo de segurança (não cair em golpe ao receber). Depois de publicar, observe: o que gerou contato? o que travou a venda? Ajuste e repita. E comemore a primeira venda — ela prova que funciona e te dá o impulso pra crescer. Você agora tem, do começo ao fim, o que precisa pra vender online de verdade.',
    },
    validacao: [
      'Escolhi canal e produto',
      'Montei a vitrine (fotos e descrição)',
      'Preparei atendimento e fechamento',
      'Defini pagamento seguro e entrega',
      'Planejei pós-venda e deixei o anúncio pronto',
    ],
  },
};
