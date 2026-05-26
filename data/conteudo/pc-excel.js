// ============================================================================
// CONTEÚDO — Excel & Sheets (pc-excel) — a trilha "coração" do mercado.
// 14 missões: dos fundamentos da planilha ao PROCV e projeto final.
// A missão 5 (SOMA) reaproveita o conteúdo já validado do protótipo.
// ============================================================================

export const PC_EXCEL = {
  'pc-excel-1': {
    trilhaId: 'pc-excel', numero: 1, titulo: 'Conhecendo a planilha',
    tempoTotal: 8, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Você abre o Excel e vê um mar de quadradinhos. Parece intimidante, mas essa grade é a ferramenta mais poderosa do mundo administrativo — e em 8 minutos você vai entender a lógica dela.',
      conceito: {
        titulo: 'Uma grade de células com endereço',
        texto: 'Uma planilha é uma grade de células (os quadradinhos). As colunas têm letras (A, B, C...) e as linhas têm números (1, 2, 3...). Cada célula tem um endereço único formado pela letra da coluna + o número da linha: a célula onde a coluna B encontra a linha 3 se chama B3. Esse endereço é a base de tudo no Excel.',
      },
      estrutura: {
        titulo: 'As partes da planilha',
        partes: [
          { simbolo: 'A B C', desc: 'Colunas: identificadas por letras, no topo.' },
          { simbolo: '1 2 3', desc: 'Linhas: identificadas por números, à esquerda.' },
          { simbolo: 'B3', desc: 'Célula: o cruzamento de uma coluna e uma linha. Tem nome próprio (B3).' },
          { simbolo: '▭', desc: 'Célula ativa: a selecionada, com borda destacada. O nome dela aparece na "caixa de nome", canto superior esquerdo.' },
        ],
      },
      exemplo: {
        titulo: 'Lendo endereços de célula',
        celulas: [
          { ref: 'A1', valor: 'Coluna A, linha 1 (canto superior esquerdo)' },
          { ref: 'C5', valor: 'Coluna C, linha 5' },
          { ref: 'B2:B10', valor: 'Intervalo: da B2 até a B10' },
        ],
        formula: 'Endereço = letra da coluna + número da linha',
        resultado: 'Você sabe apontar qualquer célula pelo nome.',
        comentario: 'Esse endereço é como a planilha "conversa": toda fórmula vai se referir a células pelo nome (A1, B3...).',
      },
      vocabulario: [
        { palavra: 'Célula', def: 'Cada quadradinho da planilha; tem um endereço (ex: B3).' },
        { palavra: 'Coluna / Linha', def: 'Coluna é vertical (letras); linha é horizontal (números).' },
        { palavra: 'Planilha (aba)', def: 'Uma folha de grade; um arquivo pode ter várias abas embaixo.' },
      ],
      chave: [
        'Colunas são letras, linhas são números',
        'Cada célula tem endereço: letra + número (B3)',
        'A célula ativa é a selecionada',
      ],
      porque: 'Entender o endereçamento de células é a base de tudo no Excel. Sem isso, fórmulas não fazem sentido. Com isso, você destrava a ferramenta mais pedida em vagas administrativas.',
    },
    pratica: {
      instrucao: 'Abra o Excel ou o Google Sheets (sheets.google.com) numa planilha em branco.',
      passos: [
        'Observe as letras das colunas no topo e os números das linhas à esquerda',
        'Clique na célula A1 e veja "A1" aparecer na caixa de nome (canto superior esquerdo)',
        'Clique na célula C5 e confira o nome mudar na caixa de nome',
        'Use as setas do teclado pra navegar entre células',
        'Selecione um intervalo: clique em B2, segure e arraste até B6 (vai pintar)',
        'Veja na caixa de nome a referência da seleção',
      ],
    },
    desafio: {
      cenario: 'Sem olhar a aula, aponte e selecione células específicas que alguém pediria numa tarefa.',
      requisitos: [
        'Selecionei a célula A1',
        'Selecionei a célula D10 e confirmei o nome',
        'Selecionei o intervalo B2 até B8',
        'Sei dizer o endereço de qualquer célula que eu clicar',
        'Naveguei pela planilha usando as setas',
      ],
      dica: 'Pense na planilha como um jogo de batalha naval: "atire em C4" = clique na coluna C, linha 4. Essa lógica de coordenadas é tudo no Excel.',
    },
    validacao: [
      'Entendo colunas (letras) e linhas (números)',
      'Sei o endereço de uma célula (ex: B3)',
      'Sei selecionar uma célula e ver seu nome',
      'Sei selecionar um intervalo',
      'Navego pela planilha com confiança',
    ],
  },

  'pc-excel-2': {
    trilhaId: 'pc-excel', numero: 2, titulo: 'Digitando seus primeiros dados',
    tempoTotal: 6, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Planilha vazia não serve pra nada — o valor está nos dados. Hoje você aprende a digitar, corrigir e se mover pelos dados com agilidade, sem aquela sensação de estar "preso" numa célula.',
      conceito: {
        titulo: 'Digitar, confirmar, corrigir',
        texto: 'Pra colocar um dado, clique na célula e digite. Pra confirmar, aperte Enter (vai pra célula de baixo) ou Tab (vai pra do lado). Pra corrigir, dê dois cliques na célula (ou aperte F2) e edite; ou apenas selecione e digite por cima pra substituir tudo. Dominar esse fluxo deixa você rápido na entrada de dados.',
      },
      estrutura: {
        titulo: 'O fluxo de entrada de dados',
        partes: [
          { simbolo: 'Enter', desc: 'Confirma e desce pra próxima linha. Ideal pra digitar uma coluna.' },
          { simbolo: 'Tab', desc: 'Confirma e vai pra direita. Ideal pra preencher uma linha.' },
          { simbolo: 'F2', desc: 'Edita o conteúdo da célula sem apagar (entra no modo de edição).' },
          { simbolo: 'Delete', desc: 'Apaga o conteúdo da célula selecionada.' },
        ],
      },
      exemplo: {
        titulo: 'Texto x número (a planilha diferencia)',
        celulas: [
          { ref: 'Texto', valor: '"Mercado" → alinha à esquerda' },
          { ref: 'Número', valor: '150 → alinha à direita (dá pra calcular)' },
          { ref: 'Cuidado', valor: '"R$ 150" como texto não soma!' },
        ],
        formula: 'Número alinha à direita; texto, à esquerda',
        resultado: 'Você percebe na hora se digitou número ou texto.',
        comentario: 'Se um "número" aparecer à esquerda, ele pode estar como texto — e aí não entra em cálculos. Digite só o número puro (150, não "R$ 150").',
      },
      vocabulario: [
        { palavra: 'Célula ativa', def: 'A célula onde o que você digitar vai aparecer.' },
        { palavra: 'Confirmar', def: 'Aceitar o que digitou (Enter ou Tab).' },
        { palavra: 'Modo de edição', def: 'Quando você está alterando o conteúdo de uma célula (F2 ou duplo clique).' },
      ],
      chave: [
        'Enter desce, Tab vai pra direita',
        'F2 ou duplo clique edita sem apagar',
        'Número alinha à direita; texto, à esquerda',
      ],
      porque: 'Entrada de dados rápida e correta é tarefa diária em escritório: cadastros, listas, controles. Quem domina o fluxo trabalha mais rápido e comete menos erros.',
    },
    pratica: {
      instrucao: 'Numa planilha em branco, vamos montar uma pequena lista.',
      passos: [
        'Na A1, digite "Produto" e aperte Tab (vai pra B1)',
        'Na B1, digite "Preço" e aperte Enter',
        'Volte pra A2 e digite "Arroz", Tab, "12", Enter',
        'Continue: "Feijão", Tab, "9", Enter; "Óleo", Tab, "8", Enter',
        'Repare que os textos alinham à esquerda e os números à direita',
        'Dê dois cliques no preço do arroz e mude pra 15 (modo de edição)',
        'Selecione uma célula e aperte Delete pra apagar; depois digite de novo',
      ],
    },
    desafio: {
      cenario: 'Monte uma lista de 6 itens com duas colunas (ex: despesas e valores), digitada com agilidade.',
      requisitos: [
        'Criei cabeçalhos na linha 1',
        'Preenchi 6 itens com texto e número',
        'Usei Tab e Enter pra navegar enquanto digitava',
        'Os números ficaram alinhados à direita (são números de verdade)',
        'Corrigi pelo menos um valor usando F2 ou duplo clique',
      ],
      dica: 'Digite só o número puro nas colunas de valor (12, não "R$ 12"). O símbolo de R$ a gente coloca depois com formatação — assim os números continuam "calculáveis".',
    },
    validacao: [
      'Sei digitar e confirmar dados (Enter/Tab)',
      'Sei corrigir uma célula (F2/duplo clique)',
      'Sei apagar com Delete',
      'Reconheço número (direita) x texto (esquerda)',
      'Montei uma lista com cabeçalhos',
    ],
  },

  'pc-excel-3': {
    trilhaId: 'pc-excel', numero: 3, titulo: 'Formatando células',
    tempoTotal: 10, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Uma planilha sem formatação é um amontoado de números difícil de ler. Com negrito no cabeçalho, alinhamento e fonte ajustada, ela vira um material claro e profissional — e isso conta muito.',
      conceito: {
        titulo: 'Formatar pra guiar o olho',
        texto: 'Assim como no Word, você formata células pra destacar e organizar. Cabeçalhos em negrito, valores alinhados, fonte legível. A diferença é que aqui a formatação ajuda a LER os dados: separar o título dos números, destacar totais, alinhar valores pra comparar. É o primeiro passo pra uma planilha apresentável.',
      },
      estrutura: {
        titulo: 'Ferramentas de formatação',
        partes: [
          { simbolo: 'N', desc: 'Negrito (Ctrl+B): destaque pra cabeçalhos e totais.' },
          { simbolo: '≡', desc: 'Alinhamento: textos à esquerda, números à direita (já é o padrão), títulos ao centro.' },
          { simbolo: 'Aa', desc: 'Fonte e tamanho: mantenha legível; cabeçalho pode ser um pouco maior.' },
          { simbolo: '⇲', desc: 'Largura da coluna: arraste a borda entre as letras pra alargar e ver tudo.' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois',
        celulas: [
          { ref: 'Antes', valor: 'Tudo igual, colunas estreitas cortando texto' },
          { ref: 'Depois', valor: 'Cabeçalho em negrito e centralizado' },
          { ref: 'Depois', valor: 'Colunas largas o suficiente pra ler' },
        ],
        formula: 'Selecionar células → aplicar formatação',
        resultado: 'Planilha limpa e fácil de entender.',
        comentario: 'Pra ajustar a largura de uma coluna automaticamente, dê dois cliques na borda entre as letras (ex: entre A e B).',
      },
      vocabulario: [
        { palavra: 'Cabeçalho', def: 'A primeira linha que nomeia cada coluna (Produto, Preço...).' },
        { palavra: 'Largura da coluna', def: 'O quão larga a coluna é; ajuste pra caber o conteúdo.' },
        { palavra: 'Mesclar células', def: 'Juntar várias células numa só (útil pra um título no topo).' },
      ],
      chave: [
        'Negrito destaca cabeçalhos e totais',
        'Ajuste a largura da coluna pra ver tudo (duplo clique na borda)',
        'Formatação aqui serve pra LER melhor os dados',
      ],
      porque: 'Uma planilha bem formatada é lida e usada; uma bagunçada é abandonada. No trabalho, apresentar dados de forma clara é tão importante quanto ter os dados certos.',
    },
    pratica: {
      instrucao: 'Use a lista que você montou (ou crie uma nova com cabeçalhos e dados).',
      passos: [
        'Selecione a linha de cabeçalho (ex: A1:B1)',
        'Aplique negrito (Ctrl+B)',
        'Centralize o cabeçalho com o botão de alinhamento ao centro',
        'Dê dois cliques na borda entre as letras A e B pra ajustar a largura automaticamente',
        'Selecione os dados e confirme que os números estão à direita',
        'Aumente um pouco a fonte do cabeçalho',
        'Opcional: mescle células no topo pra um título geral da planilha',
      ],
    },
    desafio: {
      cenario: 'Pegue uma planilha de dados e deixe-a apresentável: cabeçalho destacado, colunas ajustadas e tudo legível.',
      requisitos: [
        'Cabeçalho em negrito',
        'Cabeçalho centralizado',
        'Colunas com largura ajustada (nada cortado)',
        'Números alinhados à direita',
        'A planilha ficou claramente mais legível',
      ],
      dica: 'Menos é mais: um cabeçalho em negrito e colunas bem ajustadas já resolvem 80% da apresentação. Não encha de cores ainda — isso vem na próxima missão.',
    },
    validacao: [
      'Sei aplicar negrito em cabeçalhos',
      'Sei alinhar e centralizar',
      'Sei ajustar a largura das colunas',
      'Mantenho números à direita',
      'Deixei a planilha mais legível',
    ],
  },

  'pc-excel-4': {
    trilhaId: 'pc-excel', numero: 4, titulo: 'Bordas, cores e tabelas',
    tempoTotal: 7, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Quer que sua planilha pareça profissional de verdade? Bordas e um toque de cor transformam linhas de dados numa tabela organizada que qualquer chefe gostaria de receber.',
      conceito: {
        titulo: 'Bordas separam, cores destacam',
        texto: 'Bordas desenham as linhas da tabela, separando visualmente cada dado. Uma cor de fundo no cabeçalho o destaca do resto. Cores alternadas nas linhas (efeito "zebra") facilitam ler dados longos sem se perder. Usadas com moderação, deixam a planilha clara e profissional. O Excel ainda tem o recurso "Formatar como Tabela" que faz tudo isso de uma vez.',
      },
      estrutura: {
        titulo: 'Recursos visuais',
        partes: [
          { simbolo: '⊞', desc: 'Bordas: botão de bordas → "todas as bordas" desenha a grade da tabela.' },
          { simbolo: '🎨', desc: 'Cor de preenchimento: pinta o fundo da célula (ótimo pro cabeçalho).' },
          { simbolo: '🦓', desc: 'Linhas alternadas: cores claras alternadas facilitam a leitura.' },
          { simbolo: '📊', desc: '"Formatar como Tabela": aplica um estilo completo automaticamente.' },
        ],
      },
      exemplo: {
        titulo: 'Uma tabela bem montada',
        celulas: [
          { ref: 'Cabeçalho', valor: 'Fundo navy, texto branco, negrito' },
          { ref: 'Linha 1', valor: 'Fundo branco' },
          { ref: 'Linha 2', valor: 'Fundo cinza-claro (zebra)' },
          { ref: 'Grade', valor: 'Bordas finas separando tudo' },
        ],
        formula: 'Bordas + cabeçalho colorido + zebra = tabela profissional',
        resultado: 'Dados que se leem num relance.',
        comentario: 'Cuidado com excesso de cor. Um cabeçalho colorido + zebra suave já é elegante. Arco-íris cansa e parece amador.',
      },
      vocabulario: [
        { palavra: 'Borda', def: 'A linha que desenha o contorno das células.' },
        { palavra: 'Preenchimento', def: 'A cor de fundo de uma célula.' },
        { palavra: 'Formatar como Tabela', def: 'Recurso que aplica bordas, cores e filtros de uma vez.' },
      ],
      chave: [
        'Bordas desenham a grade; "todas as bordas" é o atalho',
        'Cor no cabeçalho + linhas zebradas = leitura fácil',
        'Use cores com moderação',
      ],
      porque: 'Uma tabela bem apresentada transmite organização e cuidado — qualidades notadas por chefes e clientes. É a diferença entre "uns números" e "um relatório".',
    },
    pratica: {
      instrucao: 'Use sua planilha com dados. Vamos transformá-la numa tabela bonita.',
      passos: [
        'Selecione toda a área de dados, incluindo o cabeçalho',
        'Clique no botão de bordas → "Todas as bordas"',
        'Selecione só o cabeçalho e aplique uma cor de preenchimento escura',
        'Deixe o texto do cabeçalho branco e em negrito pra contrastar',
        'Selecione as linhas de dados e experimente uma cor clara alternada (ou use o estilo de tabela)',
        'No Excel, teste "Formatar como Tabela" e escolha um estilo pronto',
        'Ajuste o que ficou exagerado — menos é mais',
      ],
    },
    desafio: {
      cenario: 'Transforme uma lista de dados numa tabela profissional com bordas, cabeçalho destacado e boa legibilidade.',
      requisitos: [
        'Apliquei bordas em toda a tabela',
        'O cabeçalho tem cor de fundo e contraste',
        'As linhas de dados estão fáceis de ler (zebra ou limpas)',
        'Usei cores com moderação',
        'A tabela parece um material profissional',
      ],
      dica: 'O recurso "Formatar como Tabela" (Excel) ou "Cores alternadas" (Sheets) faz tudo isso num clique e ainda adiciona filtros — que você vai usar na missão 9.',
    },
    validacao: [
      'Sei aplicar bordas',
      'Sei colorir o cabeçalho com contraste',
      'Sei usar linhas alternadas',
      'Uso cores com moderação',
      'Criei uma tabela de aparência profissional',
    ],
  },

  // ===== MISSÃO 5 — SOMA (conteúdo validado do protótipo) =====
  'pc-excel-5': {
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
  },

  'pc-excel-6': {
    trilhaId: 'pc-excel', numero: 6, titulo: 'Subtração, multiplicação e divisão',
    tempoTotal: 10, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'A SOMA é só o começo. Com mais três operações você calcula troco, total de uma compra (quantidade × preço), média de gastos e muito mais. A planilha vira sua calculadora inteligente.',
      conceito: {
        titulo: 'As 4 operações na planilha',
        texto: 'Além da SOMA, você usa os sinais matemáticos diretamente nas fórmulas: menos (-) pra subtrair, asterisco (*) pra multiplicar e barra (/) pra dividir. Sempre começando com =. E o melhor: você usa os endereços das células no lugar dos números, pra tudo recalcular sozinho quando os valores mudam.',
      },
      estrutura: {
        titulo: 'Os sinais das operações',
        partes: [
          { simbolo: '-', desc: 'Subtração: =B2-C2 (ex: receita menos despesa).' },
          { simbolo: '*', desc: 'Multiplicação: =B2*C2 (ex: quantidade × preço). O sinal é o asterisco.' },
          { simbolo: '/', desc: 'Divisão: =B2/C2 (ex: total dividido por pessoas).' },
          { simbolo: '( )', desc: 'Parênteses controlam a ordem: =(B2+C2)/2 soma primeiro, depois divide.' },
        ],
      },
      exemplo: {
        titulo: 'Calculando o total de uma compra',
        celulas: [
          { ref: 'Qtd (B2)', valor: '3' },
          { ref: 'Preço (C2)', valor: '12' },
          { ref: 'Total (D2)', valor: '=B2*C2' },
          { ref: 'Resultado', valor: '36' },
        ],
        formula: 'Use a célula, não o número: =B2*C2',
        resultado: 'Mudou a quantidade? O total recalcula sozinho.',
        comentario: 'Multiplicação é * (asterisco), não a letra x. Divisão é / (barra), não ÷.',
      },
      vocabulario: [
        { palavra: 'Operador', def: 'O sinal da operação: + - * /.' },
        { palavra: 'Ordem das operações', def: 'A planilha faz * e / antes de + e -, salvo parênteses.' },
        { palavra: 'Referência de célula', def: 'Usar o endereço (B2) em vez do número, pra recalcular sozinho.' },
      ],
      chave: [
        'Multiplicar é * , dividir é / , subtrair é -',
        'Use endereços de célula pra tudo recalcular sozinho',
        'Parênteses controlam a ordem do cálculo',
      ],
      porque: 'Quantidade × preço, receita − despesa, total ÷ pessoas: essas contas estão em qualquer controle financeiro, orçamento ou relatório de vendas. Dominá-las torna você autossuficiente em planilhas.',
    },
    pratica: {
      instrucao: 'Numa planilha nova, vamos montar um cálculo de compra.',
      passos: [
        'Crie cabeçalhos: A1 "Produto", B1 "Qtd", C1 "Preço", D1 "Total"',
        'Preencha 3 produtos com quantidade e preço',
        'Na D2, digite =B2*C2 e aperte Enter — aparece o total do primeiro produto',
        'Repita pras outras linhas (ou arraste a fórmula pra baixo)',
        'Numa célula, calcule receita menos despesa: =B2-C2 (em outra área)',
        'Teste uma divisão: =D2/2 (metade do total)',
        'Mude uma quantidade e veja os totais recalcularem',
      ],
    },
    desafio: {
      cenario: 'Monte uma planilha de compras onde o total de cada item é calculado por quantidade × preço, e há um total geral com SOMA.',
      requisitos: [
        'Coluna de quantidade e de preço preenchidas',
        'Coluna de total usando multiplicação (=Qtd*Preço)',
        'Um total geral somando todos os totais (=SOMA)',
        'Mudei uma quantidade e tudo recalculou',
        'Usei endereços de célula, não números fixos',
      ],
      dica: 'Combine as operações com a SOMA: calcule o total de cada linha com multiplicação, depois some todos com =SOMA. É assim que funcionam as planilhas de vendas reais.',
    },
    validacao: [
      'Sei subtrair, multiplicar e dividir em fórmulas',
      'Uso * pra multiplicar e / pra dividir',
      'Uso endereços de célula nas operações',
      'Entendo o papel dos parênteses',
      'Combinei operações com a SOMA',
    ],
  },

  'pc-excel-7': {
    trilhaId: 'pc-excel', numero: 7, titulo: 'MÉDIA, MÁXIMO e MÍNIMO',
    tempoTotal: 12, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Qual foi seu gasto médio no mês? Qual o maior e o menor? Com três funções, a planilha analisa seus dados em segundos — algo que impressiona em qualquer relatório.',
      conceito: {
        titulo: 'Funções que analisam, não só calculam',
        texto: 'MÉDIA, MÁXIMO e MÍNIMO são funções de análise: elas olham um conjunto de números e respondem uma pergunta. MÉDIA dá o valor médio; MÁXIMO acha o maior; MÍNIMO acha o menor. Funcionam igual à SOMA: você dá o intervalo entre parênteses e a planilha faz o trabalho. São o primeiro passo pra "ler" dados.',
      },
      estrutura: {
        titulo: 'As três funções de análise',
        partes: [
          { simbolo: 'MÉDIA', desc: '=MÉDIA(B2:B10) → o valor médio do intervalo (soma ÷ quantidade).' },
          { simbolo: 'MÁXIMO', desc: '=MÁXIMO(B2:B10) → o maior valor do intervalo.' },
          { simbolo: 'MÍNIMO', desc: '=MÍNIMO(B2:B10) → o menor valor do intervalo.' },
          { simbolo: 'EN/PT', desc: 'No Sheets em inglês: AVERAGE, MAX, MIN. Mesma lógica.' },
        ],
      },
      exemplo: {
        titulo: 'Analisando gastos do mês',
        celulas: [
          { ref: 'Gastos', valor: 'B2:B10 (vários valores)' },
          { ref: 'Média', valor: '=MÉDIA(B2:B10) → 245' },
          { ref: 'Maior', valor: '=MÁXIMO(B2:B10) → 600' },
          { ref: 'Menor', valor: '=MÍNIMO(B2:B10) → 35' },
        ],
        formula: 'Mesma estrutura da SOMA, perguntas diferentes',
        resultado: 'Três análises instantâneas dos seus dados.',
        comentario: 'Essas funções respondem perguntas que o chefe faz: "qual a média de vendas?", "qual foi o maior gasto?". Saber respondê-las rápido é ouro.',
      },
      vocabulario: [
        { palavra: 'Função', def: 'Uma fórmula pronta com nome (SOMA, MÉDIA...) que faz um cálculo específico.' },
        { palavra: 'Média', def: 'A soma dos valores dividida pela quantidade deles.' },
        { palavra: 'Argumento', def: 'O que você coloca entre os parênteses da função (ex: o intervalo B2:B10).' },
      ],
      chave: [
        'MÉDIA, MÁXIMO e MÍNIMO analisam um intervalo',
        'Mesma estrutura da SOMA: =FUNÇÃO(intervalo)',
        'Respondem perguntas que aparecem em todo relatório',
      ],
      porque: 'Calcular média, maior e menor é a base da análise de dados — pedida em relatórios de vendas, controle de gastos e indicadores. Dominar isso já te dá ar de "quem entende de planilha".',
    },
    pratica: {
      instrucao: 'Use uma planilha com uma coluna de pelo menos 8 valores (ex: gastos de vários dias).',
      passos: [
        'Tenha uma coluna com vários números (ex: B2 até B9)',
        'Numa célula livre, digite =MÉDIA(B2:B9) e aperte Enter',
        'Em outra, digite =MÁXIMO(B2:B9)',
        'Em outra, =MÍNIMO(B2:B9)',
        'Coloque rótulos ao lado: "Média", "Maior", "Menor"',
        'Mude um dos valores da coluna e veja as três análises mudarem',
        'Se estiver em inglês, use AVERAGE, MAX e MIN',
      ],
    },
    desafio: {
      cenario: 'Crie um pequeno "painel de análise" de um conjunto de dados (gastos, vendas ou notas) mostrando total, média, maior e menor.',
      requisitos: [
        'Tenho uma coluna com 8+ valores',
        'Calculei o total com SOMA',
        'Calculei a média com MÉDIA',
        'Calculei o maior com MÁXIMO e o menor com MÍNIMO',
        'Cada resultado tem um rótulo claro ao lado',
      ],
      dica: 'Esse "painelzinho" (total, média, maior, menor) é o resumo que todo gestor quer ver no topo de uma planilha. Coloque-o destacado, acima ou ao lado dos dados.',
    },
    validacao: [
      'Sei usar a função MÉDIA',
      'Sei usar MÁXIMO e MÍNIMO',
      'Entendo que são da mesma família da SOMA',
      'Coloquei rótulos nos resultados',
      'Montei um pequeno painel de análise',
    ],
  },

  'pc-excel-8': {
    trilhaId: 'pc-excel', numero: 8, titulo: 'Números: R$, % e datas',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'O número 0,15 e "15%" são a mesma coisa, mas um se lê muito melhor. Formatar números como dinheiro, porcentagem e data deixa sua planilha clara — sem mudar os cálculos por trás.',
      conceito: {
        titulo: 'A aparência do número, sem mexer no valor',
        texto: 'Formatar números muda só como eles aparecem, não o valor real usado nos cálculos. Você pega o número puro (que digitou na missão 2) e diz à planilha pra exibi-lo como moeda (R$ 1.250,00), porcentagem (15%) ou data (24/05/2026). Isso deixa tudo legível e profissional, mantendo os cálculos corretos por baixo.',
      },
      estrutura: {
        titulo: 'Os formatos mais usados',
        partes: [
          { simbolo: 'R$', desc: 'Moeda: botão "R$" formata como dinheiro, com separador de milhar e centavos.' },
          { simbolo: '%', desc: 'Porcentagem: o botão "%" mostra 0,15 como 15%.' },
          { simbolo: '📅', desc: 'Data: a planilha entende datas e permite formatá-las (24/05/2026).' },
          { simbolo: '.000', desc: 'Casas decimais: botões pra aumentar/diminuir os números após a vírgula.' },
        ],
      },
      exemplo: {
        titulo: 'Mesmo valor, leituras diferentes',
        celulas: [
          { ref: 'Digitei', valor: '1250 → formato moeda → R$ 1.250,00' },
          { ref: 'Digitei', valor: '0,15 → formato % → 15%' },
          { ref: 'Cálculo', valor: 'A planilha usa 1250 e 0,15 por baixo' },
        ],
        formula: 'Número puro + formato = exibição clara, cálculo intacto',
        resultado: 'Bonito de ver e certo de calcular.',
        comentario: 'Por isso você digita o número puro (1250) na entrada de dados: a formatação de R$ é aplicada depois, e não atrapalha as fórmulas.',
      },
      vocabulario: [
        { palavra: 'Formato de número', def: 'Como o número aparece (moeda, %, data), sem mudar o valor real.' },
        { palavra: 'Separador de milhar', def: 'O ponto que separa os milhares (1.250) pra facilitar a leitura.' },
        { palavra: 'Casas decimais', def: 'Os números após a vírgula (ex: 2 casas = centavos).' },
      ],
      chave: [
        'Formatar muda a aparência, não o valor calculado',
        'Botões: R$ (moeda), % (porcentagem), e formato de data',
        'Por isso digitamos o número puro e formatamos depois',
      ],
      porque: 'Planilhas financeiras precisam mostrar R$ e %, e relatórios precisam de datas legíveis. Formatar certo é o que faz a planilha parecer profissional — e evita confusão de quem lê.',
    },
    pratica: {
      instrucao: 'Use uma planilha com valores numéricos (ex: a de despesas).',
      passos: [
        'Selecione a coluna de valores em dinheiro',
        'Clique no botão "R$" (formato moeda) e veja virar R$ 1.250,00',
        'Numa célula, digite 0,15 e aplique o formato de porcentagem (%) → vira 15%',
        'Numa célula, digite uma data (ex: 24/05/2026) e veja a planilha reconhecê-la',
        'Use os botões de casas decimais pra ajustar os centavos',
        'Confirme que as fórmulas (SOMA, etc.) continuam funcionando normalmente',
      ],
    },
    desafio: {
      cenario: 'Formate uma planilha financeira completa: valores como moeda, uma coluna de porcentagem (ex: % do total) e uma coluna de datas.',
      requisitos: [
        'Valores monetários formatados como R$',
        'Pelo menos uma coluna ou célula em porcentagem',
        'Pelo menos uma data formatada corretamente',
        'As fórmulas continuam calculando certo',
        'A planilha ficou clara e profissional',
      ],
      dica: 'Pra calcular "quanto cada gasto representa do total" em %, divida o gasto pelo total e formate como porcentagem: =B2/$B$10 e clique no botão %. (O cifrão a gente vê melhor no PROCV.)',
    },
    validacao: [
      'Sei formatar como moeda (R$)',
      'Sei formatar como porcentagem (%)',
      'Sei formatar datas',
      'Entendo que o formato não muda o valor calculado',
      'Mantenho os números puros pra os cálculos',
    ],
  },

  'pc-excel-9': {
    trilhaId: 'pc-excel', numero: 9, titulo: 'Filtros e classificação',
    tempoTotal: 11, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Numa lista de 200 linhas, como achar só os gastos acima de R$ 100? Ou ordenar do maior pro menor? Filtros e classificação fazem isso num clique — e são a habilidade que faz você "dominar" listas grandes.',
      conceito: {
        titulo: 'Organizar e encontrar o que importa',
        texto: 'Classificar (ordenar) reorganiza as linhas por uma coluna: do maior pro menor, de A a Z, da data mais recente. Filtrar esconde temporariamente as linhas que não interessam, mostrando só o que você quer ver (ex: só uma categoria, só valores acima de X). Juntos, transformam uma lista enorme e confusa em informação útil na hora.',
      },
      estrutura: {
        titulo: 'Classificar e filtrar',
        partes: [
          { simbolo: '↕️', desc: 'Classificar: ordena as linhas por uma coluna (crescente ou decrescente).' },
          { simbolo: '🔽', desc: 'Filtro: ativa setinhas no cabeçalho pra escolher o que mostrar.' },
          { simbolo: '✅', desc: 'No filtro, marque/desmarque itens, ou use condições (maior que, contém...).' },
          { simbolo: '↺', desc: 'Limpar filtro mostra tudo de novo (os dados nunca são apagados, só escondidos).' },
        ],
      },
      exemplo: {
        titulo: 'Usos práticos',
        celulas: [
          { ref: 'Classificar', valor: 'Gastos do maior pro menor' },
          { ref: 'Filtrar', valor: 'Mostrar só categoria "Mercado"' },
          { ref: 'Filtrar', valor: 'Só valores acima de R$ 100' },
          { ref: 'Importante', valor: 'Filtro esconde, não apaga' },
        ],
        formula: 'Classificar = ordenar · Filtrar = mostrar só o que interessa',
        resultado: 'Listas enormes viram respostas rápidas.',
        comentario: 'Antes de classificar, selecione a tabela inteira (com cabeçalho) — senão você ordena uma coluna e bagunça as outras.',
      },
      vocabulario: [
        { palavra: 'Classificar (ordenar)', def: 'Reorganizar as linhas por uma coluna (crescente/decrescente).' },
        { palavra: 'Filtrar', def: 'Esconder temporariamente linhas, mostrando só as que atendem um critério.' },
        { palavra: 'Critério', def: 'A condição do filtro (ex: "maior que 100", "igual a Mercado").' },
      ],
      chave: [
        'Classificar ordena; filtrar mostra só o que interessa',
        'Filtro esconde linhas, nunca apaga dados',
        'Selecione a tabela toda antes de ordenar',
      ],
      porque: 'Trabalhar com listas grandes (clientes, produtos, despesas) é rotina em escritório. Quem sabe filtrar e ordenar encontra respostas em segundos — uma habilidade que economiza horas e impressiona.',
    },
    pratica: {
      instrucao: 'Use uma planilha com pelo menos 8 linhas de dados em colunas (ex: produto, categoria, valor).',
      passos: [
        'Selecione a tabela inteira, incluindo o cabeçalho',
        'Ative o filtro (menu Dados → Criar filtro, ou botão de filtro)',
        'Veja as setinhas aparecerem no cabeçalho',
        'Clique na setinha de uma coluna e classifique do maior pro menor',
        'Clique na setinha da categoria e mostre só uma categoria',
        'Observe as outras linhas sumirem (sem apagar)',
        'Limpe o filtro pra ver tudo de novo',
      ],
    },
    desafio: {
      cenario: 'Numa lista de dados, responda 2 perguntas usando filtro e classificação (ex: "qual o maior gasto?" e "quanto gastei só com mercado?").',
      requisitos: [
        'Ativei os filtros na tabela',
        'Classifiquei por uma coluna pra achar o maior/menor',
        'Filtrei por uma categoria específica',
        'Usei um critério (ex: valores acima de X)',
        'Limpei o filtro ao terminar (dados intactos)',
      ],
      dica: 'O recurso "Formatar como Tabela" (missão 4) já adiciona os filtros automaticamente. Se você formatou como tabela, as setinhas já estão lá.',
    },
    validacao: [
      'Sei ativar filtros numa tabela',
      'Sei classificar por uma coluna',
      'Sei filtrar por categoria',
      'Sei usar critérios (maior que, contém)',
      'Sei limpar o filtro sem perder dados',
    ],
  },

  'pc-excel-10': {
    trilhaId: 'pc-excel', numero: 10, titulo: 'Congelar painéis',
    tempoTotal: 5, xp: 30, vertente: 'computador',
    aula: {
      gancho: 'Você rola uma planilha grande pra baixo e... perde o cabeçalho de vista, sem saber mais qual coluna é qual. Congelar painéis mantém o cabeçalho fixo enquanto você rola. Pequeno recurso, enorme alívio.',
      conceito: {
        titulo: 'Manter o cabeçalho sempre à vista',
        texto: 'Congelar painéis "prende" uma linha (ou coluna) na tela, de forma que ela não se move quando você rola o resto. O uso mais comum é congelar a primeira linha (o cabeçalho), pra você sempre saber o que cada coluna significa, mesmo lá na linha 200. Também dá pra congelar a primeira coluna (ex: nomes), pra acompanhar ao rolar pra direita.',
      },
      estrutura: {
        titulo: 'Como congelar',
        partes: [
          { simbolo: '🔝', desc: 'Congelar linha do topo: menu Exibir → Congelar → "Primeira linha" (ou "1 linha").' },
          { simbolo: '◀️', desc: 'Congelar primeira coluna: útil pra manter os nomes/rótulos à vista ao rolar pra direita.' },
          { simbolo: '✚', desc: 'Congelar até uma célula: seleciona uma célula e congela tudo acima e à esquerda dela.' },
          { simbolo: '↺', desc: 'Descongelar: o mesmo menu tem a opção de remover.' },
        ],
      },
      exemplo: {
        titulo: 'Antes e depois de congelar',
        celulas: [
          { ref: 'Sem congelar', valor: 'Rolo pra baixo → cabeçalho some' },
          { ref: 'Com congelar', valor: 'Rolo pra baixo → cabeçalho fica fixo' },
          { ref: 'Resultado', valor: 'Sempre sei qual coluna é qual' },
        ],
        formula: 'Exibir → Congelar → Primeira linha',
        resultado: 'Cabeçalho fixo, navegação sem confusão.',
        comentario: 'É o primeiro ajuste que profissionais fazem em planilhas grandes. Parece pequeno, mas muda totalmente a experiência.',
      },
      vocabulario: [
        { palavra: 'Congelar painéis', def: 'Fixar linhas/colunas pra que não se movam ao rolar.' },
        { palavra: 'Painel', def: 'Uma região da planilha; congelar divide a tela em parte fixa e parte rolável.' },
        { palavra: 'Cabeçalho fixo', def: 'A linha de títulos que permanece visível enquanto você rola.' },
      ],
      chave: [
        'Congelar a primeira linha mantém o cabeçalho à vista',
        'Dá pra congelar também a primeira coluna',
        'Exibir → Congelar resolve em 2 cliques',
      ],
      porque: 'Toda planilha de trabalho com muitas linhas fica mais fácil de usar com o cabeçalho congelado. É um detalhe que demonstra que você sabe trabalhar com dados de verdade.',
    },
    pratica: {
      instrucao: 'Use (ou crie) uma planilha com bastante linhas, com cabeçalho na linha 1.',
      passos: [
        'Garanta que a linha 1 é o cabeçalho (Produto, Valor, etc.)',
        'Vá no menu Exibir → Congelar → "Primeira linha" (Sheets) ou "Congelar Painéis → Linha Superior" (Excel)',
        'Role a planilha pra baixo e veja o cabeçalho ficar fixo',
        'Experimente congelar também a primeira coluna',
        'Role pra direita e veja a coluna fixa acompanhar',
        'Use o menu pra descongelar e ver a diferença',
      ],
    },
    desafio: {
      cenario: 'Configure uma planilha grande pra uso confortável: cabeçalho congelado e (se fizer sentido) a primeira coluna também.',
      requisitos: [
        'Congelei a primeira linha (cabeçalho)',
        'Rolei pra baixo e o cabeçalho ficou visível',
        'Testei congelar a primeira coluna',
        'Sei descongelar quando precisar',
        'Entendo quando esse recurso ajuda',
      ],
      dica: 'Adquira o hábito: ao abrir/criar qualquer planilha com mais de uma tela de dados, congele o cabeçalho de cara. Você nunca mais se perde nas colunas.',
    },
    validacao: [
      'Sei congelar a primeira linha',
      'O cabeçalho fica fixo ao rolar',
      'Sei congelar a primeira coluna',
      'Sei descongelar',
      'Entendo o valor do recurso em planilhas grandes',
    ],
  },

  'pc-excel-11': {
    trilhaId: 'pc-excel', numero: 11, titulo: 'Seu primeiro gráfico',
    tempoTotal: 12, xp: 70, vertente: 'computador',
    aula: {
      gancho: 'Uma coluna de números diz pouco num relance. Um gráfico conta a história na hora: "as vendas subiram", "o mercado é o maior gasto". Transformar dados em gráfico é o que faz uma apresentação brilhar.',
      conceito: {
        titulo: 'Dados viram imagem que se entende num olhar',
        texto: 'Um gráfico é a representação visual dos seus dados. Você seleciona os dados, escolhe o tipo de gráfico, e a planilha desenha automaticamente. Gráfico de colunas compara quantidades; de linha mostra evolução no tempo; de pizza mostra partes de um todo (porcentagens). Escolher o tipo certo faz a mensagem saltar aos olhos.',
      },
      estrutura: {
        titulo: 'Os 3 tipos essenciais',
        partes: [
          { simbolo: '📊', desc: 'Colunas/Barras: comparar quantidades (gastos por categoria, vendas por mês).' },
          { simbolo: '📈', desc: 'Linha: mostrar evolução ao longo do tempo (vendas mês a mês).' },
          { simbolo: '🥧', desc: 'Pizza: mostrar partes de um todo (% de cada gasto no total).' },
          { simbolo: '🖱️', desc: 'Como criar: selecione os dados (com rótulos) → Inserir → Gráfico.' },
        ],
      },
      exemplo: {
        titulo: 'Escolhendo o gráfico certo',
        celulas: [
          { ref: 'Comparar', valor: 'Gastos por categoria → Colunas' },
          { ref: 'Evolução', valor: 'Vendas jan→dez → Linha' },
          { ref: 'Proporção', valor: 'Fatia de cada gasto → Pizza' },
        ],
        formula: 'Selecionar dados → Inserir → Gráfico → escolher o tipo',
        resultado: 'A mensagem dos dados, visível num instante.',
        comentario: 'Selecione SEMPRE os rótulos junto com os números (ex: a coluna de categorias E a de valores). Assim o gráfico fica nomeado.',
      },
      vocabulario: [
        { palavra: 'Gráfico', def: 'Representação visual dos dados (colunas, linha, pizza...).' },
        { palavra: 'Série de dados', def: 'O conjunto de valores que o gráfico desenha (ex: os gastos).' },
        { palavra: 'Eixo', def: 'As linhas de referência do gráfico (horizontal e vertical).' },
      ],
      chave: [
        'Colunas comparam, linha mostra evolução, pizza mostra proporção',
        'Selecione rótulos + números antes de inserir',
        'Inserir → Gráfico e a planilha desenha sozinha',
      ],
      porque: 'Gráficos são a linguagem dos relatórios e apresentações no trabalho. Saber transformar dados em um gráfico claro é uma habilidade que destaca qualquer profissional administrativo.',
    },
    pratica: {
      instrucao: 'Use uma planilha com categorias e valores (ex: gastos por categoria).',
      passos: [
        'Selecione os dados incluindo os rótulos (ex: A1:B7, categorias e valores)',
        'Vá em Inserir → Gráfico',
        'A planilha sugere um tipo; veja o gráfico aparecer',
        'Troque o tipo: experimente colunas, depois pizza',
        'Observe qual tipo conta melhor a história dos seus dados',
        'Dê um título ao gráfico (clique no título e edite)',
        'Mova o gráfico pra um canto livre da planilha',
      ],
    },
    desafio: {
      cenario: 'Crie um gráfico que conte a história dos seus dados (ex: quais categorias mais pesam no orçamento) e dê a ele título e tipo adequados.',
      requisitos: [
        'Selecionei dados com rótulos e valores',
        'Inseri um gráfico',
        'Escolhi um tipo adequado à mensagem (colunas/linha/pizza)',
        'Dei um título claro ao gráfico',
        'O gráfico comunica algo num relance',
      ],
      dica: 'Pergunte-se "o que eu quero que a pessoa entenda?". Se é comparação, use colunas. Se é evolução no tempo, linha. Se é "quanto cada parte representa", pizza. O tipo certo faz a mensagem.',
    },
    validacao: [
      'Sei selecionar dados com rótulos',
      'Sei inserir um gráfico',
      'Sei escolher o tipo adequado',
      'Sei dar título ao gráfico',
      'Meu gráfico comunica a mensagem dos dados',
    ],
  },

  'pc-excel-12': {
    trilhaId: 'pc-excel', numero: 12, titulo: 'PROCV: o queridinho do mercado',
    tempoTotal: 18, xp: 100, vertente: 'computador',
    aula: {
      gancho: 'Se existe uma fórmula que aparece em vaga de emprego, é o PROCV. Ela busca uma informação numa tabela automaticamente — tipo um "Ctrl+F turbinado". Parece difícil, mas vamos destrinchar passo a passo.',
      conceito: {
        titulo: 'Buscar um dado numa tabela, automaticamente',
        texto: 'PROCV (procura na vertical) busca um valor numa tabela e retorna uma informação relacionada. Exemplo: você tem uma tabela de produtos com código e preço. Em outra parte, digita um código e o PROCV traz o preço daquele código automaticamente. É como perguntar à planilha "qual o preço do produto X?" e ela responder sozinha. No Sheets/Excel em inglês, chama-se PROCV → VLOOKUP.',
      },
      estrutura: {
        titulo: 'As 4 partes do PROCV',
        partes: [
          { simbolo: '1', desc: 'O que procurar: o valor que você quer buscar (ex: o código do produto).' },
          { simbolo: '2', desc: 'Onde procurar: a tabela (intervalo) onde estão os dados.' },
          { simbolo: '3', desc: 'Qual coluna retornar: o número da coluna da tabela com a resposta (ex: 2 = preço).' },
          { simbolo: '4', desc: 'Correspondência: digite FALSO (ou 0) pra busca exata — é o que você quase sempre quer.' },
        ],
      },
      exemplo: {
        titulo: 'Buscando o preço por código',
        celulas: [
          { ref: 'Tabela', valor: 'A: código | B: produto | C: preço' },
          { ref: 'Procuro', valor: 'código 102 (digitado em E2)' },
          { ref: 'Fórmula', valor: '=PROCV(E2; A2:C10; 3; FALSO)' },
          { ref: 'Retorna', valor: 'o preço do código 102' },
        ],
        formula: '=PROCV(o quê; onde; qual coluna; FALSO)',
        resultado: 'A planilha acha a informação sozinha.',
        comentario: 'O "3" significa "traga o que está na 3ª coluna da tabela" (o preço). Conte as colunas a partir da primeira do intervalo. Sempre termine com FALSO pra busca exata.',
      },
      vocabulario: [
        { palavra: 'PROCV (VLOOKUP)', def: 'Função que busca um valor numa tabela e retorna um dado relacionado.' },
        { palavra: 'Busca exata (FALSO)', def: 'Modo que só aceita correspondência exata — o mais usado e seguro.' },
        { palavra: 'Índice da coluna', def: 'O número da coluna (dentro da tabela) de onde vem a resposta.' },
      ],
      chave: [
        'PROCV busca um valor e retorna um dado relacionado',
        'Estrutura: o quê, onde, qual coluna, FALSO',
        'Use FALSO (busca exata) quase sempre',
      ],
      porque: 'PROCV é literalmente citado em descrições de vaga ("conhecimento em PROCV"). É a fórmula que cruza dados de tabelas diferentes — base de relatórios, controles e cadastros. Dominá-la é um diferencial real de empregabilidade.',
    },
    pratica: {
      instrucao: 'Vamos montar uma tabela de produtos e buscar dados nela com PROCV. Abra uma planilha.',
      passos: [
        'Monte uma tabela em A1:C6: coluna A "Código", B "Produto", C "Preço"',
        'Preencha 5 produtos com códigos (ex: 101, 102...), nomes e preços',
        'Numa área separada, em E1 escreva "Buscar código" e em E2 digite um código existente',
        'Em F2, digite: =PROCV(E2; A2:C6; 3; FALSO)',
        'Aperte Enter — o preço do código aparece',
        'Troque o código em E2 e veja o preço mudar sozinho',
        'Em G2, busque o nome do produto: =PROCV(E2; A2:C6; 2; FALSO)',
        'Se der erro, confira: o código existe? a coluna está certa? terminou com FALSO?',
      ],
    },
    desafio: {
      cenario: 'Crie uma mini "consulta de preços": uma tabela de produtos e um campo onde, ao digitar o código, aparecem o nome e o preço via PROCV.',
      requisitos: [
        'Montei uma tabela com código, produto e preço',
        'Criei um campo de busca por código',
        'Usei PROCV pra trazer o preço (coluna 3)',
        'Usei PROCV pra trazer o nome (coluna 2)',
        'Troquei o código e os resultados atualizaram',
        'Usei FALSO pra busca exata',
      ],
      dica: 'Se aparecer #N/D, é porque o valor procurado não foi encontrado (código não existe ou foi digitado diferente). É o erro mais comum do PROCV — confira se o código bate exatamente.',
    },
    validacao: [
      'Entendo o que o PROCV faz',
      'Sei as 4 partes (o quê, onde, coluna, FALSO)',
      'Montei uma busca por código funcionando',
      'Troquei o valor buscado e o resultado mudou',
      'Sei o que fazer quando dá #N/D',
    ],
  },

  'pc-excel-13': {
    trilhaId: 'pc-excel', numero: 13, titulo: 'Salvar, exportar e compartilhar',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'Sua planilha está pronta. Agora: como salvar no formato certo, mandar pra alguém que não vai bagunçar, ou imprimir sem cortar colunas? O fim do trabalho merece tanto cuidado quanto o começo.',
      conceito: {
        titulo: 'Cada formato pra cada propósito',
        texto: 'Uma planilha pode ser salva como XLSX (o formato editável padrão), exportada como PDF (pra enviar sem bagunçar, ideal pra ver/imprimir) ou compartilhada por link (no Sheets, pra colaborar). Escolher o formato certo evita o problema clássico de mandar uma planilha e a pessoa abrir tudo desformatado — ou conseguir alterar o que não devia.',
      },
      estrutura: {
        titulo: 'As três saídas',
        partes: [
          { simbolo: 'XLSX', desc: 'O formato editável. Use pra quem vai continuar trabalhando na planilha.' },
          { simbolo: 'PDF', desc: 'Versão "congelada" pra enviar/imprimir. Ninguém altera, nada desformata.' },
          { simbolo: '🔗', desc: 'Link (Sheets): compartilhar como Leitor/Editor, igual aos documentos da nuvem.' },
          { simbolo: '🖨️', desc: 'Área de impressão: ajuste pra a planilha caber na página (sem cortar colunas).' },
        ],
      },
      exemplo: {
        titulo: 'Qual usar em cada caso',
        celulas: [
          { ref: 'Vai editar', valor: 'XLSX (ou link de Editor)' },
          { ref: 'Só ver/imprimir', valor: 'PDF' },
          { ref: 'Colaborar', valor: 'Link do Sheets (Leitor/Editor)' },
          { ref: 'Relatório final', valor: 'PDF (não bagunça)' },
        ],
        formula: 'Editar → XLSX/link · Ver final → PDF',
        resultado: 'A planilha chega certa pra cada finalidade.',
        comentario: 'Antes de exportar PDF, confira a "visualização de impressão": planilhas largas costumam cortar colunas. Ajuste pra "caber em 1 página de largura".',
      },
      vocabulario: [
        { palavra: 'XLSX', def: 'O formato de arquivo de planilha editável (Excel/Sheets).' },
        { palavra: 'Exportar PDF', def: 'Gerar uma versão fixa da planilha, pra enviar ou imprimir.' },
        { palavra: 'Área de impressão', def: 'A parte da planilha que será impressa/exportada; ajustável pra caber na página.' },
      ],
      chave: [
        'XLSX pra editar; PDF pra enviar/imprimir; link pra colaborar',
        'Confira a visualização de impressão antes de exportar',
        'Ajuste pra caber na largura da página',
      ],
      porque: 'Entregar a planilha no formato certo é o passo final do trabalho profissional. Mandar um PDF que não desformata, ou um link com a permissão certa, mostra cuidado e domínio — e evita retrabalho.',
    },
    pratica: {
      instrucao: 'Use uma planilha pronta (ex: a de despesas ou a de PROCV).',
      passos: [
        'No Excel: Arquivo → Salvar como → confirme o formato XLSX',
        'Agora exporte PDF: Arquivo → Exportar → Criar PDF (ou Imprimir → Salvar como PDF)',
        'Antes de confirmar o PDF, veja a pré-visualização: alguma coluna está cortada?',
        'Ajuste pra "caber em 1 página de largura" se precisar',
        'No Google Sheets: Arquivo → Fazer download → PDF (e ajuste as opções)',
        'No Sheets, teste também Compartilhar por link como "Leitor"',
        'Dê nomes profissionais aos arquivos (ex: controle-despesas-maio.pdf)',
      ],
    },
    desafio: {
      cenario: 'Entregue uma planilha de 3 formas: salve o XLSX editável, exporte um PDF bem formatado (sem cortes) e gere um link de compartilhamento.',
      requisitos: [
        'Salvei/confirmei o arquivo XLSX',
        'Exportei um PDF conferindo a pré-visualização',
        'Ajustei pra não cortar colunas na exportação',
        'Gerei um link de compartilhamento (Sheets) com permissão definida',
        'Dei nomes profissionais aos arquivos',
      ],
      dica: 'Guarde sempre o XLSX (editável) e gere o PDF só na hora de enviar. Assim você mantém o controle pra ajustar a planilha depois, e entrega uma versão "congelada" pra quem só precisa ver.',
    },
    validacao: [
      'Sei salvar como XLSX',
      'Sei exportar PDF conferindo a impressão',
      'Sei ajustar pra caber na página',
      'Sei compartilhar por link com permissão',
      'Dou nomes profissionais aos arquivos',
    ],
  },

  'pc-excel-14': {
    trilhaId: 'pc-excel', numero: 14, titulo: 'Projeto: Controle Mensal Completo',
    tempoTotal: 30, xp: 150, vertente: 'computador',
    aula: {
      gancho: 'Hora da prova de fogo: você vai construir, do zero, uma planilha de controle financeiro mensal completa — usando TUDO da trilha. No fim, terá uma ferramenta real pra sua vida e uma peça forte pro seu portfólio.',
      conceito: {
        titulo: 'Uma planilha que reúne tudo que você aprendeu',
        texto: 'Um controle mensal de verdade tem: uma tabela de lançamentos (data, categoria, descrição, valor), formatação profissional, fórmulas que somam e analisam, um painel de resumo (total, média, maior gasto), filtros pra explorar, um gráfico que mostra pra onde vai o dinheiro, e tudo exportável. Construir isso prova que você domina o Excel de ponta a ponta.',
      },
      estrutura: {
        titulo: 'Os componentes do controle',
        partes: [
          { simbolo: '📋', desc: 'Tabela de lançamentos: data, categoria, descrição, valor — formatada com bordas e cabeçalho.' },
          { simbolo: '🧮', desc: 'Resumo: total (SOMA), média (MÉDIA), maior e menor gasto (MÁXIMO/MÍNIMO).' },
          { simbolo: '📊', desc: 'Gráfico: gastos por categoria (colunas ou pizza).' },
          { simbolo: '🔎', desc: 'Filtros + cabeçalho congelado pra explorar e navegar.' },
        ],
      },
      exemplo: {
        titulo: 'Estrutura sugerida',
        celulas: [
          { ref: 'Topo', valor: 'Título + painel de resumo (total/média/maior)' },
          { ref: 'Tabela', valor: 'Lançamentos com filtros e R$ formatado' },
          { ref: 'Lateral', valor: 'Gráfico de gastos por categoria' },
          { ref: 'Saída', valor: 'Exportar PDF + guardar XLSX' },
        ],
        formula: 'Tudo da trilha numa planilha só, útil de verdade',
        resultado: 'Uma ferramenta real + uma prova concreta de domínio.',
        comentario: 'Use de verdade no próximo mês: lançar seus gastos e ver o gráfico é o melhor jeito de manter o aprendizado vivo.',
      },
      vocabulario: [
        { palavra: 'Lançamento', def: 'Cada registro de gasto/receita (uma linha da tabela).' },
        { palavra: 'Painel de resumo', def: 'O bloco com os números-chave (total, média, maior) em destaque.' },
        { palavra: 'Portfólio', def: 'Coleção dos seus trabalhos prontos, usada pra mostrar competência.' },
      ],
      chave: [
        'Reúne tabela, fórmulas, formatação, filtros, gráfico e exportação',
        'Tem um painel de resumo destacado no topo',
        'É útil de verdade — use no seu mês real',
      ],
      porque: 'Este projeto é a prova máxima da trilha de Excel: demonstra todas as habilidades juntas, numa planilha real. É exatamente o tipo de artefato que você pode mostrar numa entrevista pra provar que sabe usar Excel — o diferencial nº 1 em vagas administrativas.',
    },
    pratica: {
      instrucao: 'Reserve 30 minutos sem pressa. Vamos construir seu controle mensal completo, usando tudo da trilha.',
      passos: [
        'Crie a tabela de lançamentos: cabeçalhos Data, Categoria, Descrição, Valor',
        'Lance 10+ gastos reais ou de exemplo (datas e valores variados)',
        'Formate: cabeçalho em negrito com cor, bordas na tabela, valores em R$',
        'Congele a linha do cabeçalho e ative os filtros',
        'Monte um painel de resumo: total (SOMA), média (MÉDIA), maior (MÁXIMO), menor (MÍNIMO)',
        'Crie um gráfico de gastos por categoria (use SOMA por categoria ou uma tabela auxiliar)',
        'Use o filtro pra responder "quanto gastei na categoria X?"',
        'Salve o XLSX e exporte um PDF bem formatado, com nome profissional',
      ],
    },
    desafio: {
      cenario: 'Entregue um Controle Mensal Completo: tabela formatada, painel de resumo com 4 fórmulas, gráfico, filtros, cabeçalho congelado e versões XLSX + PDF.',
      requisitos: [
        'Tabela de lançamentos formatada (bordas, cabeçalho, R$)',
        'Painel de resumo com SOMA, MÉDIA, MÁXIMO e MÍNIMO',
        'Pelo menos um gráfico de gastos',
        'Filtros ativos e cabeçalho congelado',
        'Salvo em XLSX e exportado em PDF com nome profissional',
        'Bônus: subi a planilha pro Google Drive como backup',
      ],
      dica: 'Parabéns — ao terminar, você não só dominou o Excel, como criou uma ferramenta que melhora sua vida financeira. Guarde-a no portfólio: numa entrevista, mostrar essa planilha vale mais que dizer "sei Excel".',
    },
    validacao: [
      'Montei uma tabela de lançamentos formatada',
      'Criei um painel com as 4 funções de resumo',
      'Inseri um gráfico de gastos',
      'Ativei filtros e congelei o cabeçalho',
      'Salvei em XLSX e exportei em PDF',
      'Tenho uma planilha real pro meu portfólio',
    ],
  },
};
