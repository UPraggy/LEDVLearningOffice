// ============================================================================
// CONTEÚDO — Internet, Navegador e Pesquisa (pc-nav)
// ============================================================================

export const PC_NAV = {
  'pc-nav-1': {
    trilhaId: 'pc-nav', numero: 1, titulo: 'O navegador por dentro',
    tempoTotal: 7, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Você usa a internet todo dia, mas sabe a diferença entre o navegador e o Google? Entender isso muda tudo — e é mais simples do que parece.',
      conceito: {
        titulo: 'O navegador é o carro; os sites são os lugares',
        texto: 'O navegador (Chrome, Edge, Firefox) é o programa que abre a internet. Ele é o "carro" que te leva a qualquer site. O Google é um dos lugares aonde você vai com esse carro — um site que ajuda a achar outros sites. Confundir os dois é comum; separar os dois te deixa no controle.',
      },
      estrutura: {
        titulo: 'As partes do navegador',
        partes: [
          { simbolo: '🌐', desc: 'Barra de endereço: a faixa no topo onde você digita o site (ou a pesquisa).' },
          { simbolo: '🗂️', desc: 'Abas: cada "janelinha" no topo é uma página aberta. Dá pra ter várias ao mesmo tempo.' },
          { simbolo: '↻', desc: 'Recarregar: a setinha circular que atualiza a página se ela travar.' },
          { simbolo: '←', desc: 'Voltar/Avançar: as setas que navegam entre páginas que você já viu.' },
        ],
      },
      exemplo: {
        titulo: 'Endereço x pesquisa na mesma barra',
        celulas: [
          { ref: 'Sei o site', valor: 'Digito: gov.br → vai direto' },
          { ref: 'Não sei', valor: 'Digito: meu inss → vira pesquisa' },
          { ref: 'Dica', valor: 'A mesma barra faz as duas coisas' },
        ],
        formula: 'Barra de endereço = ir direto OU pesquisar',
        resultado: 'Você não precisa decorar endereços longos.',
        comentario: 'Se você sabe o endereço, digite ele. Se não sabe, digite o que procura que o navegador pesquisa.',
      },
      vocabulario: [
        { palavra: 'Navegador', def: 'O programa que abre a internet (Chrome, Edge, Firefox, Safari).' },
        { palavra: 'Site', def: 'Um lugar na internet, com seu endereço próprio (ex: gov.br).' },
        { palavra: 'Aba', def: 'Cada página aberta dentro do navegador. Você pode ter várias lado a lado.' },
      ],
      chave: [
        'O navegador é o programa; os sites são os destinos',
        'A barra de endereço serve tanto pra ir direto quanto pra pesquisar',
        'As setas Voltar/Avançar e o Recarregar são seus aliados',
      ],
      porque: 'Quase tudo hoje passa pela internet: banco, governo, trabalho, vagas. Dominar o navegador é a porta de entrada pra toda a vida digital — e pra muitas funções no trabalho.',
    },
    pratica: {
      instrucao: 'Abra seu navegador (Chrome ou Edge, ícone colorido na barra de tarefas). Vamos reconhecer cada parte.',
      passos: [
        'Localize a barra de endereço no topo (a faixa larga)',
        'Clique nela, apague o que tiver, e digite: gov.br',
        'Aperte Enter e veja o site abrir',
        'Encontre a seta Voltar (←) no canto superior esquerdo e clique',
        'Clique na seta Avançar (→) pra voltar ao site',
        'Ache a setinha de Recarregar (↻) e clique pra atualizar a página',
        'Repare na aba no topo mostrando o nome da página aberta',
      ],
    },
    desafio: {
      cenario: 'Visite 3 sites oficiais digitando o endereço direto na barra (sem pesquisar no Google).',
      requisitos: [
        'Abri gov.br digitando na barra de endereço',
        'Abri google.com digitando na barra',
        'Abri o site do meu banco digitando o endereço',
        'Usei as setas Voltar/Avançar entre eles',
        'Recarreguei pelo menos uma página',
      ],
      dica: 'Digitar o endereço direto é mais seguro que clicar em links de mensagens — você sabe exatamente aonde está indo. Guarde esse hábito pra sites de banco e governo.',
    },
    validacao: [
      'Entendi a diferença entre navegador e site',
      'Sei usar a barra de endereço pra ir direto a um site',
      'Sei usar as setas Voltar e Avançar',
      'Sei recarregar uma página travada',
      'Reconheço o que é uma aba',
    ],
  },

  'pc-nav-2': {
    trilhaId: 'pc-nav', numero: 2, titulo: 'Pesquisar bem no Google',
    tempoTotal: 9, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Pesquisar no Google parece simples — mas a diferença entre achar a resposta em 5 segundos ou se perder por 20 minutos está nas PALAVRAS que você usa. Hoje você vira um pesquisador esperto.',
      conceito: {
        titulo: 'O Google responde ao que você pergunta — então pergunte bem',
        texto: 'O Google busca pelas palavras que você digita. Quanto mais específicas e certeiras forem essas palavras, melhor o resultado. Frases vagas trazem resultados vagos. Palavras-chave precisas trazem a resposta direto. Aprender a escolher essas palavras é uma habilidade que economiza horas.',
      },
      estrutura: {
        titulo: 'Como montar uma boa pesquisa',
        partes: [
          { simbolo: '🎯', desc: 'Seja específico: "horário ônibus 477 Campinas" é melhor que "ônibus".' },
          { simbolo: '📍', desc: 'Inclua o lugar: adicione a cidade quando for algo local (médico, loja, serviço).' },
          { simbolo: '"  "', desc: 'Use aspas pra busca exata: "segunda via conta de luz" busca a frase inteira.' },
          { simbolo: '➕', desc: 'Some palavras: "receita bolo fubá sem glúten" filtra melhor que só "bolo".' },
        ],
      },
      exemplo: {
        titulo: 'Pesquisa fraca x pesquisa forte',
        celulas: [
          { ref: 'Fraca', valor: 'como faz documento' },
          { ref: 'Forte', valor: 'como tirar segunda via RG São Paulo 2026' },
          { ref: 'Fraca', valor: 'remédio pressão' },
          { ref: 'Forte', valor: 'horário farmácia 24h perto de mim' },
        ],
        formula: 'O quê + onde + quando + detalhe = resposta certeira',
        resultado: 'Menos rolagem, resposta na primeira tela.',
        comentario: 'Não tenha medo de escrever a pergunta inteira. O Google entende linguagem natural muito bem.',
      },
      vocabulario: [
        { palavra: 'Palavra-chave', def: 'As palavras principais que descrevem o que você procura.' },
        { palavra: 'Resultado de busca', def: 'A lista de sites que o Google sugere como resposta à sua pesquisa.' },
        { palavra: 'Anúncio (Patrocinado)', def: 'Resultados pagos que aparecem no topo, marcados com "Patrocinado" ou "Anúncio".' },
      ],
      chave: [
        'Palavras específicas trazem respostas específicas',
        'Inclua lugar e ano quando fizer diferença',
        'Aspas buscam a frase exata',
      ],
      porque: 'Saber pesquisar bem é uma das habilidades mais úteis da vida moderna: resolve dúvidas de trabalho, encontra serviços, confere informações. No emprego, quem acha a resposta rápido resolve problemas rápido.',
    },
    pratica: {
      instrucao: 'Abra o Google (google.com). Vamos praticar pesquisas cada vez melhores.',
      passos: [
        'Pesquise primeiro algo vago: documento',
        'Veja como os resultados são genéricos',
        'Agora refine: como tirar segunda via do RG no meu estado',
        'Compare como os resultados ficaram mais úteis',
        'Faça uma busca com lugar: farmácia 24 horas perto de mim',
        'Faça uma busca exata com aspas: "horário de funcionamento"',
        'Repare nos resultados marcados como "Patrocinado" no topo (são anúncios)',
      ],
    },
    desafio: {
      cenario: 'Encontre uma informação real e útil da sua vida usando uma pesquisa bem montada (ex: um serviço, um horário, um procedimento).',
      requisitos: [
        'Defini claramente o que eu precisava descobrir',
        'Montei a pesquisa com palavras específicas (o quê + onde/quando)',
        'Encontrei a resposta na primeira página de resultados',
        'Identifiquei e evitei clicar nos anúncios "Patrocinados"',
        'Confirmei a informação num site confiável',
      ],
      dica: 'Os primeiros resultados às vezes são anúncios pagos. Role um pouquinho pra ver os resultados "naturais" — muitas vezes são mais relevantes e confiáveis.',
    },
    validacao: [
      'Sei escolher palavras-chave específicas',
      'Incluo lugar e tempo quando ajuda',
      'Sei usar aspas pra busca exata',
      'Reconheço anúncios "Patrocinados" nos resultados',
      'Encontrei uma informação real que eu precisava',
    ],
  },

  'pc-nav-3': {
    trilhaId: 'pc-nav', numero: 3, titulo: 'Avaliar se um site é confiável',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'A internet tem informação maravilhosa e também muita enganação. Saber distinguir um site sério de um furada protege seu bolso, sua saúde e seus dados. São poucos sinais — e você vai dominar todos.',
      conceito: {
        titulo: 'Nem tudo que aparece no Google é verdade',
        texto: 'Qualquer um pode criar um site. Por isso, antes de confiar numa informação ou digitar seus dados, você precisa avaliar a fonte. Sites oficiais, de instituições conhecidas e com endereço coerente são confiáveis. Sites com endereço estranho, cheios de propaganda e promessas milagrosas, não. Conferir a fonte é um reflexo que se aprende.',
      },
      estrutura: {
        titulo: 'Os sinais de um site confiável',
        partes: [
          { simbolo: '🔒', desc: 'Cadeado na barra de endereço: indica conexão segura. Importante, mas não garante honestidade sozinho.' },
          { simbolo: '🏛️', desc: 'Endereço coerente: sites do governo terminam em .gov.br; bancos têm seu domínio oficial.' },
          { simbolo: '📅', desc: 'Conteúdo atual e bem escrito, com autor/instituição identificados.' },
          { simbolo: '⚠️', desc: 'Sinais de alerta: muitas propagandas, erros de português, promessas milagrosas, pressa pra você agir.' },
        ],
      },
      exemplo: {
        titulo: 'Confiável x suspeito',
        celulas: [
          { ref: 'Confiável', valor: 'gov.br · g1.globo.com · seubanco.com.br' },
          { ref: 'Suspeito', valor: 'gov-br-beneficio.xyz · premio-voce.top' },
          { ref: 'Confiável', valor: 'site de hospital/universidade conhecidos' },
          { ref: 'Suspeito', valor: '"clique e ganhe", "cura garantida"' },
        ],
        formula: 'Endereço coerente + fonte identificada + sem pressa = confiável',
        resultado: 'Na dúvida, cheque a mesma informação em 2 fontes sérias.',
        comentario: 'Pra saúde e dinheiro, confie em fontes oficiais (gov.br, ministério, bancos) e veículos de imprensa conhecidos. Desconfie de "descobertas" milagrosas.',
      },
      vocabulario: [
        { palavra: 'Domínio', def: 'O endereço-base do site (ex: gov.br). Diz a quem o site pertence.' },
        { palavra: 'HTTPS / cadeado', def: 'Indica que a conexão é criptografada. Necessário, mas não prova que o site é honesto.' },
        { palavra: 'Fonte', def: 'Quem publicou a informação. Instituições conhecidas são mais confiáveis.' },
      ],
      chave: [
        'Qualquer um cria um site — sempre avalie a fonte',
        'Endereço coerente (.gov.br, domínio oficial) é sinal forte',
        'Pressa, propaganda excessiva e promessa milagrosa = alerta',
      ],
      porque: 'Golpes e desinformação começam em sites falsos. Avaliar a fonte protege você de fraudes financeiras, de remédios perigosos e de fake news — e é uma competência valorizada em qualquer trabalho que envolva pesquisa.',
    },
    pratica: {
      instrucao: 'Vamos treinar o olhar crítico. Abra o navegador.',
      passos: [
        'Acesse gov.br e repare no endereço terminando em .gov.br e no cadeado',
        'Veja como o conteúdo é institucional, sem propaganda',
        'Pesquise um assunto de saúde simples (ex: sintomas de gripe)',
        'Compare um resultado de fonte conhecida (ministério, hospital) com um site cheio de anúncios',
        'Observe os sinais: quem publicou? tem data? tem propaganda demais?',
        'Procure o cadeado na barra de endereço dos sites que você visita',
        'Pratique desconfiar de qualquer site que prometa "ganho fácil" ou "cura garantida"',
      ],
    },
    desafio: {
      cenario: 'Pesquise uma informação importante (saúde, finanças ou um direito seu) e valide-a confirmando em pelo menos 2 fontes confiáveis.',
      requisitos: [
        'Pesquisei uma informação que importa pra mim',
        'Avaliei a fonte do primeiro resultado (quem publicou, endereço, propaganda)',
        'Confirmei a mesma informação numa segunda fonte confiável',
        'Identifiquei pelo menos um site que eu NÃO confiaria, e por quê',
        'Verifiquei o cadeado/endereço dos sites visitados',
      ],
      dica: 'Regra de ouro pra saúde e dinheiro: se parece bom demais pra ser verdade, é golpe. E sempre confirme informação séria em fonte oficial antes de agir.',
    },
    validacao: [
      'Sei que qualquer pessoa pode criar um site',
      'Avalio o endereço/domínio antes de confiar',
      'Reconheço os sinais de site suspeito',
      'Confirmo informações importantes em 2 fontes',
      'Sei localizar o cadeado de conexão segura',
    ],
  },

  'pc-nav-4': {
    trilhaId: 'pc-nav', numero: 4, titulo: 'Favoritos e histórico',
    tempoTotal: 6, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Cansado de digitar o mesmo endereço toda vez, ou de não lembrar aquele site bom que você viu ontem? Os favoritos e o histórico resolvem os dois — e ninguém te ensinou.',
      conceito: {
        titulo: 'Favoritos guardam o que você quer; histórico guarda o que você viu',
        texto: 'Os favoritos (ou marcadores) são uma lista de sites que você salva pra acessar com um clique, sem digitar de novo. O histórico é a lista automática de tudo que você visitou, em ordem de tempo — útil pra reencontrar algo que você viu e esqueceu de salvar.',
      },
      estrutura: {
        titulo: 'Como usar cada um',
        partes: [
          { simbolo: '⭐', desc: 'Favoritar: clique na estrela na barra de endereço pra salvar o site atual.' },
          { simbolo: '📑', desc: 'Barra de favoritos: ative-a pra ver seus sites salvos sempre no topo.' },
          { simbolo: '🕘', desc: 'Histórico: Ctrl+H abre a lista do que você visitou, do mais recente ao mais antigo.' },
          { simbolo: '🔎', desc: 'Buscar no histórico: dá pra pesquisar dentro dele pelo nome do site.' },
        ],
      },
      exemplo: {
        titulo: 'Quando usar cada um',
        celulas: [
          { ref: 'Uso sempre', valor: 'Banco, Gov.br, e-mail → vire favorito' },
          { ref: 'Vi ontem', valor: 'Aquela receita → procuro no histórico' },
          { ref: 'Atalho', valor: 'Ctrl+H = histórico' },
        ],
        formula: 'Vai usar de novo? Favorite. Esqueceu? Histórico.',
        resultado: 'Nunca mais redigite nem perca um site.',
        comentario: 'Favorite hoje os sites que você acessa toda semana. Em uma semana, você nota o quanto economiza tempo.',
      },
      vocabulario: [
        { palavra: 'Favorito / Marcador', def: 'Um site salvo pra acesso rápido, com um clique.' },
        { palavra: 'Histórico', def: 'A lista automática dos sites que você visitou, por data.' },
        { palavra: 'Barra de favoritos', def: 'Uma faixa abaixo do endereço que mostra seus sites salvos.' },
      ],
      chave: [
        'Favoritos = sites que você escolhe salvar (estrela)',
        'Histórico = registro automático do que você visitou (Ctrl+H)',
        'Favorite o que usa sempre; busque no histórico o que esqueceu',
      ],
      porque: 'No trabalho você acessa os mesmos sistemas todo dia. Ter tudo nos favoritos te faz começar mais rápido e parecer organizado. E o histórico salva quando você esquece de onde tirou uma informação.',
    },
    pratica: {
      instrucao: 'Abra o navegador. Vamos organizar seus acessos.',
      passos: [
        'Acesse um site que você usa bastante (ex: seu e-mail)',
        'Clique na estrela (⭐) na barra de endereço pra favoritar',
        'Dê um nome curto e confirme',
        'Favorite também gov.br e o site do seu banco',
        'Aperte Ctrl+H pra abrir o histórico',
        'Veja a lista de sites visitados e procure um que você viu recentemente',
        'Ative a barra de favoritos pra ver seus salvos sempre no topo (menu do navegador → Favoritos → Mostrar barra)',
      ],
    },
    desafio: {
      cenario: 'Monte sua barra de favoritos com os 5 sites que você mais usa.',
      requisitos: [
        'Favoritei pelo menos 5 sites úteis',
        'Dei nomes claros aos favoritos',
        'Ativei a barra de favoritos',
        'Usei Ctrl+H pra encontrar um site no histórico',
        'Consigo abrir um favorito com um clique',
      ],
      dica: 'Organize os favoritos em pastas (ex: "Banco", "Trabalho", "Saúde") quando tiver muitos. O navegador deixa você criar pastas igual no computador.',
    },
    validacao: [
      'Sei favoritar um site com a estrela',
      'Ativei a barra de favoritos',
      'Sei abrir o histórico com Ctrl+H',
      'Encontrei um site visitado no histórico',
      'Tenho meus principais sites salvos',
    ],
  },

  'pc-nav-5': {
    trilhaId: 'pc-nav', numero: 5, titulo: 'Downloads sem dor de cabeça',
    tempoTotal: 7, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Você baixou um arquivo e... cadê? Sumiu? Não sumiu — ele está na pasta Downloads, esperando. Hoje você entende pra onde vão os downloads e como abrir cada um com segurança.',
      conceito: {
        titulo: 'Baixar é trazer um arquivo da internet pro seu computador',
        texto: 'Quando você clica em "baixar" ou "download", o navegador traz o arquivo da internet e guarda numa pasta especial chamada Downloads. Ele não some — só está lá. Saber onde fica e como abrir (e desconfiar de downloads suspeitos) evita confusão e protege o computador.',
      },
      estrutura: {
        titulo: 'O caminho de um download',
        partes: [
          { simbolo: '⬇️', desc: 'Você clica em baixar: o navegador mostra o progresso no canto inferior ou superior.' },
          { simbolo: '📁', desc: 'Vai pra pasta Downloads: o destino padrão de quase tudo que você baixa.' },
          { simbolo: '👆', desc: 'Abrir: clique no arquivo na barra de downloads do navegador, ou ache na pasta Downloads.' },
          { simbolo: '🛡️', desc: 'Segurança: só baixe de sites confiáveis. Desconfie de .exe e arquivos inesperados.' },
        ],
      },
      exemplo: {
        titulo: 'Tipos de arquivo e cuidado',
        celulas: [
          { ref: 'Seguro', valor: '.pdf (documento) · .jpg (foto) · .xlsx (planilha)' },
          { ref: 'Cuidado', valor: '.exe (programa) · .zip de fonte desconhecida' },
          { ref: 'Onde achar', valor: 'Pasta Downloads (ou Ctrl+J no navegador)' },
        ],
        formula: 'Baixou de site confiável + tipo esperado = ok',
        resultado: 'Arquivo no lugar certo, computador protegido.',
        comentario: 'Programas (.exe) podem conter vírus. Só instale o que você foi buscar de propósito, em site oficial.',
      },
      vocabulario: [
        { palavra: 'Download / Baixar', def: 'Trazer um arquivo da internet pro seu computador.' },
        { palavra: 'Pasta Downloads', def: 'O local padrão onde os arquivos baixados são guardados.' },
        { palavra: 'Arquivo executável (.exe)', def: 'Um programa que instala/roda algo. Exige cautela — só de fontes oficiais.' },
      ],
      chave: [
        'Downloads vão pra pasta Downloads (Ctrl+J mostra a lista)',
        'O arquivo não some — está esperando lá',
        'Só baixe de sites confiáveis; cuidado com .exe',
      ],
      porque: 'No dia a dia você baixa boletos, comprovantes, currículos e documentos de trabalho. Saber achar e abrir cada um — e evitar baixar vírus — é essencial pra produtividade e segurança.',
    },
    pratica: {
      instrucao: 'Vamos baixar um arquivo seguro e encontrá-lo. Abra o navegador.',
      passos: [
        'Acesse um site oficial que ofereça um PDF (ex: um manual no gov.br)',
        'Clique no link de download do PDF',
        'Observe a barra de download aparecer (geralmente embaixo ou no canto superior)',
        'Aperte Ctrl+J pra abrir a lista de downloads do navegador',
        'Clique no arquivo baixado pra abrir',
        'Abra o Explorador de Arquivos e veja a pasta Downloads',
        'Confirme que o arquivo está lá',
      ],
    },
    desafio: {
      cenario: 'Baixe um documento útil de um site oficial, encontre-o na pasta Downloads e mova-o pra pasta certa do seu sistema de organização.',
      requisitos: [
        'Baixei um arquivo de um site confiável',
        'Encontrei o arquivo na pasta Downloads',
        'Abri o arquivo pra confirmar que está certo',
        'Movi o arquivo pra pasta de assunto correta',
        'Sei reconhecer um tipo de arquivo que exige cautela (.exe)',
      ],
      dica: 'A pasta Downloads vira uma bagunça com o tempo. Crie o hábito de, depois de baixar, mover o arquivo na hora pra pasta certa (lembra da trilha de Fundamentos?).',
    },
    validacao: [
      'Entendi o que é baixar um arquivo',
      'Sei onde fica a pasta Downloads',
      'Sei abrir a lista de downloads com Ctrl+J',
      'Encontrei e abri um arquivo baixado',
      'Sei quais tipos de arquivo exigem cautela',
    ],
  },

  'pc-nav-6': {
    trilhaId: 'pc-nav', numero: 6, titulo: 'Abas: várias coisas ao mesmo tempo',
    tempoTotal: 6, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Precisa olhar duas coisas ao mesmo tempo — comparar um produto, copiar dados de um site pro outro? As abas deixam você ter várias páginas abertas sem se perder. É como ter vários papéis na mesa.',
      conceito: {
        titulo: 'Cada aba é uma página independente',
        texto: 'O navegador permite abrir várias páginas ao mesmo tempo, cada uma numa aba no topo. Você alterna entre elas com um clique, sem fechar nenhuma. Isso é poderoso pra comparar informações, pesquisar enquanto preenche um formulário, ou copiar de um site pra outro.',
      },
      estrutura: {
        titulo: 'Trabalhando com abas',
        partes: [
          { simbolo: '➕', desc: 'Nova aba: clique no "+" ao lado das abas, ou aperte Ctrl+T.' },
          { simbolo: '🖱️', desc: 'Alternar: clique na aba que quer ver. Cada uma mantém sua página.' },
          { simbolo: '✖️', desc: 'Fechar aba: clique no "x" da aba, ou Ctrl+W.' },
          { simbolo: '↺', desc: 'Reabrir fechada por engano: Ctrl+Shift+T traz de volta.' },
        ],
      },
      exemplo: {
        titulo: 'Usos do dia a dia',
        celulas: [
          { ref: 'Comparar', valor: 'Aba 1: preço loja A · Aba 2: preço loja B' },
          { ref: 'Preencher', valor: 'Aba 1: formulário · Aba 2: consulta de dados' },
          { ref: 'Atalhos', valor: 'Ctrl+T abre · Ctrl+W fecha · Ctrl+Shift+T reabre' },
        ],
        formula: 'Várias abas = várias páginas vivas ao mesmo tempo',
        resultado: 'Você trabalha sem perder o que estava vendo.',
        comentario: 'Fechou uma aba importante sem querer? Ctrl+Shift+T traz ela de volta na hora. Salva muita gente.',
      },
      vocabulario: [
        { palavra: 'Aba (guia)', def: 'Uma página aberta dentro do navegador, mostrada como uma "abinha" no topo.' },
        { palavra: 'Nova aba', def: 'Uma página em branco pra abrir outro site sem fechar o atual (Ctrl+T).' },
        { palavra: 'Reabrir aba', def: 'Trazer de volta a última aba fechada (Ctrl+Shift+T).' },
      ],
      chave: [
        'Abas deixam várias páginas abertas ao mesmo tempo',
        'Ctrl+T abre, Ctrl+W fecha, Ctrl+Shift+T reabre',
        'Alterne entre elas com um clique, sem perder nada',
      ],
      porque: 'No trabalho, raramente se usa um site só. Comparar dados, consultar enquanto preenche, alternar entre sistemas — tudo flui com abas. É uma habilidade que multiplica sua produtividade.',
    },
    pratica: {
      instrucao: 'Abra o navegador. Vamos trabalhar com várias abas.',
      passos: [
        'Abra um site qualquer (ex: google.com)',
        'Aperte Ctrl+T pra abrir uma nova aba',
        'Na nova aba, acesse outro site (ex: gov.br)',
        'Clique entre as duas abas no topo pra alternar',
        'Abra uma terceira aba e pesquise algo',
        'Feche a do meio com Ctrl+W',
        'Aperte Ctrl+Shift+T pra reabrir a aba que você fechou',
      ],
    },
    desafio: {
      cenario: 'Use duas abas pra comparar duas informações (ex: preço de um produto em duas lojas, ou dois serviços) e decida com base na comparação.',
      requisitos: [
        'Abri pelo menos 2 abas com sites diferentes',
        'Alternei entre elas pra comparar',
        'Usei Ctrl+T pra abrir nova aba',
        'Fechei uma aba e reabri com Ctrl+Shift+T',
        'Tomei uma decisão com base na comparação',
      ],
      dica: 'Não deixe abas demais abertas — além de confundir, deixa o computador lento. Feche o que já usou. Um bom número é até 5 ou 6 abas.',
    },
    validacao: [
      'Sei abrir uma nova aba (Ctrl+T)',
      'Sei alternar entre abas',
      'Sei fechar uma aba (Ctrl+W)',
      'Sei reabrir uma aba fechada (Ctrl+Shift+T)',
      'Usei abas pra comparar informações',
    ],
  },

  'pc-nav-7': {
    trilhaId: 'pc-nav', numero: 7, titulo: 'Projeto: pesquisa de um benefício real',
    tempoTotal: 15, xp: 90, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo: você vai pesquisar, avaliar fontes, navegar entre abas e talvez baixar um documento — pra resolver algo real da sua vida. É a internet trabalhando pra você.',
      conceito: {
        titulo: 'Pesquisa com propósito',
        texto: 'A maior parte do valor da internet está em resolver problemas concretos: descobrir um direito, um benefício, um serviço, um procedimento. Este projeto usa todas as habilidades da trilha pra você sair com uma resposta útil e confiável sobre algo que importa pra você.',
      },
      estrutura: {
        titulo: 'O fluxo da pesquisa completa',
        partes: [
          { simbolo: '1', desc: 'Defina a pergunta: o que exatamente você quer descobrir?' },
          { simbolo: '2', desc: 'Pesquise com palavras específicas (o quê + onde + ano).' },
          { simbolo: '3', desc: 'Avalie as fontes: prefira oficiais (.gov.br) e confiáveis.' },
          { simbolo: '4', desc: 'Confirme em 2 fontes e, se houver, baixe/salve o documento oficial.' },
        ],
      },
      exemplo: {
        titulo: 'Exemplos de pesquisa com propósito',
        celulas: [
          { ref: 'Direito', valor: '"quem tem direito ao saque-aniversário FGTS 2026"' },
          { ref: 'Serviço', valor: '"como agendar atendimento INSS pelo Meu INSS"' },
          { ref: 'Benefício', valor: '"requisitos isenção IPTU idoso minha cidade"' },
        ],
        formula: 'Pergunta clara → busca específica → fonte oficial → confirmar',
        resultado: 'Uma resposta confiável que você pode agir em cima.',
        comentario: 'Escolha algo que você realmente precisa resolver. Aprender resolvendo um problema de verdade fixa muito mais.',
      },
      vocabulario: [
        { palavra: 'Fonte oficial', def: 'Site de um órgão responsável pelo assunto (ex: gov.br, prefeitura, INSS).' },
        { palavra: 'Confirmação cruzada', def: 'Checar a mesma informação em duas fontes pra ter certeza.' },
        { palavra: 'Pesquisa com propósito', def: 'Buscar pra resolver um problema concreto, não só navegar.' },
      ],
      chave: [
        'Comece pela pergunta clara',
        'Busque específico e priorize fontes oficiais',
        'Confirme em 2 fontes antes de agir',
      ],
      porque: 'Essa é a habilidade que transforma a internet de "lugar de passar o tempo" em ferramenta de resolver a vida — descobrir direitos, benefícios e serviços. No trabalho, é exatamente o que se espera de quem "vai atrás e resolve".',
    },
    pratica: {
      instrucao: 'Escolha um assunto real da sua vida pra pesquisar (um benefício, direito ou serviço). Reserve 15 minutos.',
      passos: [
        'Escreva a pergunta exata que você quer responder',
        'Monte a pesquisa com palavras específicas (inclua sua cidade/estado e o ano)',
        'Abra os 2 ou 3 melhores resultados em abas diferentes (Ctrl+T)',
        'Avalie cada fonte: é oficial? quem publicou? tem propaganda demais?',
        'Compare as informações entre as abas',
        'Se houver um documento ou formulário oficial, baixe (e mova pra pasta certa)',
        'Anote a resposta e a fonte oficial onde você confirmou',
      ],
    },
    desafio: {
      cenario: 'Entregue uma "mini-pesquisa": a pergunta, a resposta encontrada, as fontes confiáveis usadas, e (se houver) o documento oficial baixado e guardado.',
      requisitos: [
        'Defini uma pergunta clara sobre algo real da minha vida',
        'Usei uma pesquisa específica e bem montada',
        'Abri e comparei resultados em abas diferentes',
        'Avaliei e escolhi fontes confiáveis (de preferência oficiais)',
        'Confirmei a resposta em pelo menos 2 fontes',
        'Bônus: baixei e guardei o documento oficial na pasta certa',
      ],
      dica: 'Guarde o link da fonte oficial nos favoritos. Assuntos de benefício e direito você costuma precisar consultar de novo — e ter o link certo salvo evita cair em site falso depois.',
    },
    validacao: [
      'Defini uma pergunta clara',
      'Montei uma pesquisa específica',
      'Naveguei e comparei em várias abas',
      'Avaliei e escolhi fontes confiáveis',
      'Confirmei a informação em 2 fontes',
      'Resolvi algo real da minha vida com a pesquisa',
    ],
  },
};
