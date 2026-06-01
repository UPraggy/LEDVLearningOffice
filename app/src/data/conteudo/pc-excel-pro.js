// ============================================================================
// CONTEÚDO — Excel Avançado: Fórmulas que Decidem (pc-excel-pro)
// Sequência da trilha pc-excel. 14 missões: do trava-célula ($) à tabela
// dinâmica e ao dashboard. Funciona em Excel e Google Sheets (notas de
// diferença quando relevante). 100% autoral.
// ============================================================================

export const PC_EXCEL_PRO = {
  'pc-excel-pro-1': {
    trilhaId: 'pc-excel-pro', numero: 1, titulo: 'O segredo do cifrão: referência fixa ($)',
    tempoTotal: 12, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Você cria uma fórmula perfeita, arrasta pra baixo… e tudo se quebra. O culpado quase sempre é o mesmo: faltou "travar" uma célula com o cifrão ($). Domine isso e metade dos seus erros de planilha somem.',
      conceito: {
        titulo: 'Quando arrasta, a referência anda junto',
        texto: 'Ao copiar ou arrastar uma fórmula, o Excel ajusta os endereços automaticamente: se em C2 você tem =A2*B2 e arrasta pra C3, vira =A3*B3. Isso é a referência RELATIVA — geralmente o que você quer. Mas quando uma fórmula precisa apontar SEMPRE pra mesma célula (uma taxa, um total, um valor único), você trava com $: $C$1 nunca muda ao arrastar. O cifrão antes da letra trava a coluna; antes do número trava a linha.',
      },
      estrutura: {
        titulo: 'Os três tipos de referência',
        partes: [
          { simbolo: 'A1', desc: 'Relativa: anda em coluna e linha ao arrastar. O padrão.' },
          { simbolo: '$A$1', desc: 'Absoluta: trava tudo. Nunca muda. (tecla F4 aplica o $ rapidinho)' },
          { simbolo: '$A1', desc: 'Mista: trava só a coluna A; a linha ainda anda.' },
          { simbolo: 'A$1', desc: 'Mista: trava só a linha 1; a coluna ainda anda.' },
        ],
      },
      exemplo: {
        titulo: 'Calcular comissão com taxa fixa',
        celulas: [
          { ref: 'C1', valor: '0,05 (a taxa de comissão, 5%)' },
          { ref: 'A2', valor: '1000 (venda do vendedor)' },
          { ref: 'B2', valor: '=A2*$C$1 → 50' },
        ],
        formula: '=A2*$C$1',
        resultado: 'Arraste B2 pra baixo: A2 vira A3, A4… mas $C$1 fica fixo. Todos usam a mesma taxa.',
        comentario: 'Sem o $, ao arrastar a taxa "andaria" pra C2, C3 (que estão vazias) e os resultados zerariam. O cifrão é o que segura a referência no lugar.',
      },
      vocabulario: [
        { palavra: 'Referência relativa', def: 'Endereço que se ajusta ao copiar a fórmula (A2 → A3).' },
        { palavra: 'Referência absoluta', def: 'Endereço travado com $ que nunca muda ($C$1).' },
        { palavra: 'F4', def: 'Tecla que insere/alterna os $ na célula selecionada dentro da fórmula.' },
      ],
      chave: [
        'Ao arrastar, a fórmula ajusta os endereços sozinha',
        '$ trava: $C$1 nunca muda',
        'F4 aplica o cifrão rapidinho',
      ],
      porque: 'A referência absoluta é o conceito que separa quem "copia fórmula da internet" de quem realmente entende planilha. Taxas, metas, cotações, totais — tudo isso vive travado com $. É a base das próximas missões.',
    },
    pratica: {
      instrucao: 'Numa planilha em branco, monte uma mini tabela de comissões pra treinar o $.',
      passos: [
        'Em C1 digite a taxa: 0,05',
        'Na coluna A (A2 a A5) digite 4 valores de venda: 1000, 2500, 800, 3200',
        'Em B2 digite =A2*$C$1 (digite o $ ou aperte F4 sobre o C1)',
        'Aperte Enter e veja o resultado (50)',
        'Clique em B2 e arraste a alça (quadradinho do canto) até B5',
        'Clique em B5 e confira na barra de fórmulas: deve estar =A5*$C$1',
        'Mude a taxa em C1 pra 0,08 e veja TODAS as comissões recalcularem',
      ],
    },
    desafio: {
      cenario: 'Você recebeu uma lista de produtos com preço em dólar e precisa converter todos pra real usando uma única cotação travada.',
      requisitos: [
        'Coloquei a cotação do dólar numa célula só (ex: E1)',
        'Criei a fórmula de conversão na primeira linha usando $E$1',
        'Arrastei a fórmula pra toda a coluna sem quebrar',
        'Confirmei que a referência da cotação continua $E$1 nas linhas de baixo',
        'Mudei a cotação e vi tudo recalcular de uma vez',
      ],
      dica: 'Regra de bolso: se ao arrastar a fórmula uma célula precisa "ficar parada", ela leva $. Selecione o endereço na barra de fórmulas e aperte F4 até aparecer $ nos dois lados.',
    },
    validacao: [
      'Entendo por que a fórmula muda ao arrastar',
      'Sei travar uma célula com $ ($C$1)',
      'Uso F4 pra inserir o cifrão',
      'Sei a diferença entre absoluta e mista',
      'Consigo arrastar uma fórmula com taxa fixa sem quebrar',
    ],
  },

  'pc-excel-pro-2': {
    trilhaId: 'pc-excel-pro', numero: 2, titulo: 'A função SE: a planilha que decide',
    tempoTotal: 14, xp: 70, vertente: 'computador',
    aula: {
      gancho: 'E se a planilha pudesse responder sozinha "Aprovado ou Reprovado", "Tem estoque ou Acabou", "Bateu a meta ou Não"? Essa é a função SE — a porta de entrada do Excel inteligente.',
      conceito: {
        titulo: 'Se isso for verdade, faça aquilo; senão, faça outra coisa',
        texto: 'A função SE testa uma condição e devolve um resultado quando ela é verdadeira e outro quando é falsa. A estrutura é: =SE(teste; valor_se_verdadeiro; valor_se_falso). O teste é uma comparação (maior, menor, igual). Se o resultado for texto, ele vai entre aspas. No Google Sheets é igual: IF(...). É a função que transforma números em decisões.',
      },
      estrutura: {
        titulo: 'As 3 partes do SE',
        partes: [
          { simbolo: 'teste', desc: 'A pergunta de sim/não: B2>=7, A2="PIX", C2<>0…' },
          { simbolo: 'se VERDADEIRO', desc: 'O que aparece quando a resposta é sim. Texto entre "aspas".' },
          { simbolo: 'se FALSO', desc: 'O que aparece quando a resposta é não.' },
          { simbolo: '> < = >= <= <>', desc: 'Operadores: maior, menor, igual, maior-igual, menor-igual, diferente.' },
        ],
      },
      exemplo: {
        titulo: 'Aprovado a partir de 7',
        celulas: [
          { ref: 'A2', valor: 'Nota do aluno: 8' },
          { ref: 'B2', valor: '=SE(A2>=7; "Aprovado"; "Reprovado")' },
          { ref: 'Resultado', valor: 'Aprovado' },
        ],
        formula: '=SE(A2>=7; "Aprovado"; "Reprovado")',
        resultado: 'Se a nota for 8 → "Aprovado". Se fosse 5 → "Reprovado". Arraste pra avaliar a turma inteira.',
        comentario: 'Repare nos pontos-e-vírgula separando as 3 partes e nas aspas no texto. Em algumas configurações o separador é vírgula — o Excel avisa se errar.',
      },
      vocabulario: [
        { palavra: 'Condição/teste', def: 'A comparação que resulta em verdadeiro ou falso.' },
        { palavra: 'Operador de comparação', def: 'Símbolos como >, <, =, >=, <=, <> (diferente).' },
        { palavra: 'Argumento', def: 'Cada informação que você passa pra função, separada por ;' },
      ],
      chave: [
        '=SE(teste; se_sim; se_não)',
        'Texto sempre entre "aspas"',
        '<> significa "diferente de"',
      ],
      porque: 'O SE é a função mais usada em planilhas de trabalho de verdade: classificar, sinalizar pendências, automatizar status. Quem domina o SE para de "olhar linha por linha" e deixa a planilha avisar sozinha.',
    },
    pratica: {
      instrucao: 'Monte um controle de metas com status automático.',
      passos: [
        'Na coluna A liste 4 vendedores (linhas 2 a 5)',
        'Na coluna B coloque a venda de cada um: 12000, 8000, 15000, 9500',
        'Em C1 escreva o cabeçalho "Status"; a meta é 10000',
        'Em C2 digite =SE(B2>=10000; "Bateu a meta"; "Abaixo")',
        'Confirme com Enter e leia o resultado',
        'Arraste C2 até C5 pra avaliar todos',
        'Troque uma venda e veja o status mudar na hora',
      ],
    },
    desafio: {
      cenario: 'Numa planilha de estoque, você quer que a coluna "Situação" avise sozinha quando o produto está acabando (abaixo de 5 unidades).',
      requisitos: [
        'Tenho uma coluna de quantidade em estoque',
        'Criei a coluna Situação com a função SE',
        'Quando a quantidade for menor que 5, aparece "Repor"',
        'Caso contrário, aparece "OK"',
        'Arrastei a fórmula por toda a lista',
        'Os textos de resultado estão entre aspas',
      ],
      dica: 'Leia a fórmula em voz alta como uma frase: "SE a quantidade for menor que 5, escreva Repor, senão escreva OK". Se a frase faz sentido, a fórmula vai funcionar.',
    },
    validacao: [
      'Entendo a estrutura =SE(teste; sim; não)',
      'Sei usar os operadores de comparação',
      'Coloco texto de resultado entre aspas',
      'Consigo gerar status automático numa coluna',
      'Sei arrastar o SE pra uma lista inteira',
    ],
  },

  'pc-excel-pro-3': {
    trilhaId: 'pc-excel-pro', numero: 3, titulo: 'SE dentro de SE: faixas e categorias',
    tempoTotal: 12, xp: 70, vertente: 'computador',
    aula: {
      gancho: 'Aprovado ou Reprovado é fácil. Mas e quando você precisa de três ou mais respostas — A, B, C, ou Ouro, Prata, Bronze? Aí você encaixa um SE dentro do outro, como bonecas russas.',
      conceito: {
        titulo: 'Encaixar SEs para criar faixas',
        texto: 'Quando há mais de duas saídas, você coloca um novo SE no lugar do "se falso" do primeiro. Assim a planilha testa em cascata: se não passou no primeiro teste, tenta o segundo, depois o terceiro. A ordem importa — teste do mais "alto" para o mais "baixo" (ou o contrário), sem deixar buraco entre as faixas. Cada SE aberto precisa de um parêntese fechado no fim.',
      },
      estrutura: {
        titulo: 'A cascata de decisões',
        partes: [
          { simbolo: '1º teste', desc: 'A condição mais alta. Se verdadeira, devolve a categoria e para.' },
          { simbolo: 'SE no "falso"', desc: 'No lugar do senão, abre outro SE com a próxima faixa.' },
          { simbolo: 'último senão', desc: 'A categoria que sobra quando nenhum teste passou.' },
          { simbolo: ')))', desc: 'Feche um parêntese para cada SE aberto. Conte-os!' },
        ],
      },
      exemplo: {
        titulo: 'Conceito A, B ou C pela nota',
        celulas: [
          { ref: 'A2', valor: 'Nota: 8,5' },
          { ref: 'B2', valor: '=SE(A2>=9;"A"; SE(A2>=7;"B"; "C"))' },
          { ref: 'Resultado', valor: 'B (porque 8,5 ≥ 7 mas < 9)' },
        ],
        formula: '=SE(A2>=9; "A"; SE(A2>=7; "B"; "C"))',
        resultado: '9+ vira A; de 7 a 8,99 vira B; abaixo de 7 vira C. Três faixas com dois SEs.',
        comentario: 'Dois SEs = dois fechamentos de parêntese no final. Dica: se forem MUITAS faixas, a função PROCX ou uma tabela auxiliar fica mais limpa que SEs aninhados.',
      },
      vocabulario: [
        { palavra: 'SE aninhado', def: 'Um SE colocado dentro de outro para criar mais de duas saídas.' },
        { palavra: 'Faixa', def: 'Um intervalo de valores que recebe a mesma categoria.' },
        { palavra: 'Cascata', def: 'A sequência de testes feitos um após o outro.' },
      ],
      chave: [
        'O novo SE vai no lugar do "senão"',
        'Teste em ordem, sem deixar buraco entre faixas',
        'Feche um ) para cada SE aberto',
      ],
      porque: 'Classificar em faixas é tarefa constante: notas, comissões por nível, prazos (no prazo/atrasado/crítico), faixas de preço. O SE aninhado resolve sem precisar de fórmulas gigantes — desde que você ordene bem as faixas.',
    },
    pratica: {
      instrucao: 'Crie uma classificação de clientes por valor de compra.',
      passos: [
        'Na coluna A liste valores de compra: 2000, 600, 350, 1200',
        'Em B2 monte =SE(A2>=1500;"Ouro"; SE(A2>=800;"Prata"; "Bronze"))',
        'Confirme e leia o resultado da primeira linha',
        'Conte os parênteses: dois SEs, dois ) no fim',
        'Arraste B2 pra baixo até o último cliente',
        'Teste um valor de fronteira (ex: 800) e confirme a faixa',
        'Mude as regras de faixa e veja recalcular',
      ],
    },
    desafio: {
      cenario: 'Você gerencia prazos de entrega e quer uma coluna que diga "No prazo", "Atenção" ou "Atrasado" conforme os dias restantes.',
      requisitos: [
        'Tenho uma coluna com dias restantes (pode ser negativo)',
        'Usei SE aninhado com três saídas',
        'Mais de 3 dias → "No prazo"',
        'De 0 a 3 dias → "Atenção"',
        'Menos de 0 (negativo) → "Atrasado"',
        'Os parênteses fecham corretamente e arrastei pra lista toda',
      ],
      dica: 'Antes de digitar, escreva as faixas no papel em ordem. Comece pelo teste mais "fácil de passar" ou mais "alto" e desça. Se duas faixas se sobrepõem, a primeira vence — por isso a ordem importa.',
    },
    validacao: [
      'Sei encaixar um SE no lugar do "senão"',
      'Crio três ou mais faixas de resultado',
      'Ordeno as faixas sem deixar buracos',
      'Fecho um parêntese para cada SE',
      'Reconheço quando PROCX seria mais limpo',
    ],
  },

  'pc-excel-pro-4': {
    trilhaId: 'pc-excel-pro', numero: 4, titulo: 'E / OU: várias condições de uma vez',
    tempoTotal: 11, xp: 60, vertente: 'computador',
    aula: {
      gancho: '"Só aprova se tiver nota 7 E presença acima de 75%." Duas condições ao mesmo tempo. Pra isso existem as funções E e OU — os ajudantes do SE.',
      conceito: {
        titulo: 'E exige tudo; OU aceita qualquer um',
        texto: 'A função E(cond1; cond2; ...) só é verdadeira quando TODAS as condições são verdadeiras. A função OU(cond1; cond2; ...) é verdadeira quando PELO MENOS UMA é verdadeira. Sozinhas elas devolvem VERDADEIRO/FALSO, mas o poder real aparece quando você as coloca como o teste de um SE: =SE(E(...); ...; ...). No Sheets são AND(...) e OR(...).',
      },
      estrutura: {
        titulo: 'Quem usar em cada caso',
        partes: [
          { simbolo: 'E(...)', desc: 'Verdadeiro só se TODAS as condições baterem. "Isso E aquilo".' },
          { simbolo: 'OU(...)', desc: 'Verdadeiro se QUALQUER condição bater. "Isso OU aquilo".' },
          { simbolo: 'SE(E(...))', desc: 'Combinação típica: o E vira o teste do SE.' },
          { simbolo: 'NÃO(...)', desc: 'Inverte: transforma verdadeiro em falso e vice-versa.' },
        ],
      },
      exemplo: {
        titulo: 'Aprovado por nota E presença',
        celulas: [
          { ref: 'A2', valor: 'Nota: 8' },
          { ref: 'B2', valor: 'Presença: 80%' },
          { ref: 'C2', valor: '=SE(E(A2>=7; B2>=0,75); "Aprovado"; "Reprovado")' },
        ],
        formula: '=SE(E(A2>=7; B2>=0,75); "Aprovado"; "Reprovado")',
        resultado: 'Só vira "Aprovado" se as DUAS condições baterem. Nota 8 e presença 80% → Aprovado.',
        comentario: 'Troque o E por OU e a lógica muda: aprovaria com nota boa OU presença boa. Escolher entre E e OU é escolher entre "exigente" e "flexível".',
      },
      vocabulario: [
        { palavra: 'E (AND)', def: 'Verdadeiro apenas quando todas as condições são verdadeiras.' },
        { palavra: 'OU (OR)', def: 'Verdadeiro quando ao menos uma condição é verdadeira.' },
        { palavra: 'Lógico', def: 'Valor que só pode ser VERDADEIRO ou FALSO.' },
      ],
      chave: [
        'E = todas precisam bater',
        'OU = qualquer uma basta',
        'Use dentro do SE como teste',
      ],
      porque: 'No trabalho, decisões raramente dependem de um critério só: "cliente ativo E sem pendência", "produto em promoção OU sem estoque". E/OU deixam o SE refletir a regra real do negócio.',
    },
    pratica: {
      instrucao: 'Monte uma aprovação com dois critérios.',
      passos: [
        'Coluna A: notas (8, 6, 9, 7). Coluna B: presença em decimal (0,8; 0,9; 0,6; 0,75)',
        'Em C2 digite =SE(E(A2>=7; B2>=0,75); "Aprovado"; "Reprovado")',
        'Confirme e leia o resultado',
        'Arraste C2 até o último aluno',
        'Troque o E por OU em uma cópia e compare os resultados',
        'Observe quem muda de status ao trocar E por OU',
        'Anote qual regra é mais justa pro seu caso',
      ],
    },
    desafio: {
      cenario: 'Um cliente recebe frete grátis se a compra for acima de R$ 200 E ele for da região atendida — ou então se for cliente VIP (qualquer valor).',
      requisitos: [
        'Tenho colunas de valor da compra, região e se é VIP',
        'Combinei E e OU na mesma fórmula',
        'Compra > 200 E região atendida → frete grátis',
        'OU cliente VIP → frete grátis independente do valor',
        'Caso contrário → "Frete normal"',
        'Testei um VIP de compra baixa e confirmei o frete grátis',
      ],
      dica: 'Estruture assim: =SE(OU(E(valor>200; regiao="Sul"); vip="Sim"); "Grátis"; "Normal"). Monte de dentro pra fora: primeiro o E, depois envolva no OU, depois no SE.',
    },
    validacao: [
      'Sei a diferença entre E e OU',
      'Uso E/OU como teste dentro do SE',
      'Combino E e OU na mesma fórmula',
      'Comparações com texto vão entre aspas',
      'Escolho a regra certa para o critério do negócio',
    ],
  },

  'pc-excel-pro-5': {
    trilhaId: 'pc-excel-pro', numero: 5, titulo: 'CONT.SE e CONT.SES: contar com critério',
    tempoTotal: 12, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Quantas vendas foram por PIX? Quantos clientes são de São Paulo? Quantos pedidos acima de R$ 500? Contar "com filtro" na mão é tortura. CONT.SE faz isso em segundos.',
      conceito: {
        titulo: 'Contar só o que atende a um critério',
        texto: 'CONT.SE(intervalo; critério) conta quantas células de um intervalo atendem a uma condição. O critério pode ser um texto ("PIX"), um número (100), ou uma comparação entre aspas (">500"). Quando há mais de um critério, use CONT.SES(intervalo1; crit1; intervalo2; crit2; ...) — todos precisam bater. No Sheets: COUNTIF e COUNTIFS.',
      },
      estrutura: {
        titulo: 'A família de contagem',
        partes: [
          { simbolo: 'CONT.NÚM', desc: 'Conta quantas células têm número (ignora texto e vazias).' },
          { simbolo: 'CONT.VALORES', desc: 'Conta quantas células estão preenchidas (qualquer conteúdo).' },
          { simbolo: 'CONT.SE', desc: 'Conta com 1 critério: =CONT.SE(B2:B50; "PIX")' },
          { simbolo: 'CONT.SES', desc: 'Conta com vários critérios ao mesmo tempo.' },
        ],
      },
      exemplo: {
        titulo: 'Quantas vendas acima de 500',
        celulas: [
          { ref: 'B2:B100', valor: 'Coluna com valores das vendas' },
          { ref: 'E1', valor: '=CONT.SE(B2:B100; ">500")' },
          { ref: 'Resultado', valor: '23 (vendas acima de 500)' },
        ],
        formula: '=CONT.SE(B2:B100; ">500")',
        resultado: 'Conta só as vendas maiores que 500. A comparação ">500" fica entre aspas.',
        comentario: 'Pra contar por texto: =CONT.SE(C2:C100; "PIX"). Pra dois critérios (PIX acima de 500): =CONT.SES(C2:C100;"PIX"; B2:B100;">500").',
      },
      vocabulario: [
        { palavra: 'Critério', def: 'A regra do que contar: um texto, número ou comparação ">500".' },
        { palavra: 'Intervalo', def: 'O conjunto de células onde a função vai procurar (B2:B100).' },
        { palavra: 'Curinga', def: 'O * representa "qualquer coisa": "São*" pega São Paulo, São José…' },
      ],
      chave: [
        'CONT.SE conta com 1 critério',
        'CONT.SES soma vários critérios (E)',
        'Comparações como ">500" vão entre aspas',
      ],
      porque: 'Relatórios vivem de contagens com filtro: "quantos atendimentos resolvidos", "quantas faltas neste mês". CONT.SE entrega o número certo na hora, sem precisar filtrar e contar com o dedo.',
    },
    pratica: {
      instrucao: 'Monte um painel de contagem sobre uma lista de pedidos.',
      passos: [
        'Crie uma lista: coluna A = forma de pagamento (PIX/Cartão), coluna B = valor',
        'Preencha umas 8 linhas misturando PIX e Cartão',
        'Em D1 digite =CONT.SE(A2:A9; "PIX")',
        'Em D2 digite =CONT.SE(B2:B9; ">300")',
        'Em D3 digite =CONT.SES(A2:A9; "PIX"; B2:B9; ">300")',
        'Confira se os números fazem sentido com sua lista',
        'Adicione uma linha nova e veja as contagens atualizarem',
      ],
    },
    desafio: {
      cenario: 'Você tem a lista de presença de uma turma e precisa de um resumo: quantos presentes, quantos faltaram e quantos faltaram especificamente nas segundas-feiras.',
      requisitos: [
        'Tenho colunas de aluno, dia e situação (Presente/Falta)',
        'Contei o total de "Presente" com CONT.SE',
        'Contei o total de "Falta" com CONT.SE',
        'Usei CONT.SES para faltas + dia "Segunda"',
        'Os critérios de texto estão entre aspas',
        'O painel atualiza ao mudar a lista',
      ],
      dica: 'Pra contar células NÃO vazias use CONT.VALORES; pra contar só números use CONT.NÚM. Use a função certa pro tipo de dado — assim você nunca conta um cabeçalho por engano.',
    },
    validacao: [
      'Sei contar com um critério (CONT.SE)',
      'Sei contar com vários critérios (CONT.SES)',
      'Uso comparações entre aspas (">500")',
      'Distingo CONT.NÚM de CONT.VALORES',
      'Monto um pequeno painel de contagens',
    ],
  },

  'pc-excel-pro-6': {
    trilhaId: 'pc-excel-pro', numero: 6, titulo: 'SOMASE e SOMASES: somar com critério',
    tempoTotal: 13, xp: 70, vertente: 'computador',
    aula: {
      gancho: 'Você não quer só somar tudo — quer "somar só as vendas do João", "só o que entrou em maio", "só os pedidos pagos". SOMASE soma com filtro embutido. É o coração de qualquer relatório.',
      conceito: {
        titulo: 'Somar apenas as linhas que batem o critério',
        texto: 'SOMASE(intervalo_critério; critério; intervalo_soma) olha o primeiro intervalo, encontra as linhas que atendem ao critério e soma os valores correspondentes do intervalo de soma. Quando há mais de um critério, SOMASES inverte a ordem: SOMASES(intervalo_soma; intervalo_crit1; crit1; intervalo_crit2; crit2; ...). No Sheets: SUMIF e SUMIFS. Decorar a ordem dos argumentos é metade da batalha.',
      },
      estrutura: {
        titulo: 'Atenção à ordem dos argumentos',
        partes: [
          { simbolo: 'SOMASE', desc: '(onde-procurar; o-quê; o-que-somar). A soma é o 3º argumento.' },
          { simbolo: 'SOMASES', desc: '(o-que-somar; onde1; crit1; onde2; crit2). A soma vem PRIMEIRO.' },
          { simbolo: 'critério', desc: 'Texto "João", número 100, ou comparação ">=1000".' },
          { simbolo: 'MÉDIASE', desc: 'Mesma lógica, mas calcula a média em vez da soma.' },
        ],
      },
      exemplo: {
        titulo: 'Total vendido pelo João',
        celulas: [
          { ref: 'A2:A50', valor: 'Coluna vendedor' },
          { ref: 'B2:B50', valor: 'Coluna valor' },
          { ref: 'E1', valor: '=SOMASE(A2:A50; "João"; B2:B50)' },
        ],
        formula: '=SOMASE(A2:A50; "João"; B2:B50)',
        resultado: 'Soma só os valores das linhas em que o vendedor é "João". Troque o nome em uma célula e referencie pra um painel dinâmico.',
        comentario: 'Dois critérios (João em maio): =SOMASES(B2:B50; A2:A50;"João"; C2:C50;"Maio"). Note que no SOMASES a coluna de soma (B) vem na frente.',
      },
      vocabulario: [
        { palavra: 'Intervalo de soma', def: 'A coluna de valores que será somada (geralmente dinheiro/quantidade).' },
        { palavra: 'Intervalo de critério', def: 'A coluna onde a função procura quem atende à regra.' },
        { palavra: 'MÉDIASE / MÁXIMOSES', def: 'Primas do SOMASE para média e máximo com critério.' },
      ],
      chave: [
        'SOMASE: a soma é o 3º argumento',
        'SOMASES: a soma vem primeiro',
        'Critério em texto ou comparação ">=1000"',
      ],
      porque: 'Relatório de vendas por vendedor, despesas por categoria, total por mês — tudo é SOMASE/SOMASES. É a função que monta painéis gerenciais sem precisar de tabela dinâmica.',
    },
    pratica: {
      instrucao: 'Crie um relatório de vendas por vendedor.',
      passos: [
        'Monte: coluna A = vendedor, B = mês, C = valor (umas 10 linhas variadas)',
        'Em E1 liste os nomes únicos dos vendedores',
        'Ao lado, em F1, digite =SOMASE(A:A; E1; C:C)',
        'Arraste F1 pra baixo pra somar cada vendedor',
        'Em outra célula teste =SOMASES(C:C; A:A;"João"; B:B;"Maio")',
        'Confira se os totais fecham com a soma geral',
        'Mude um valor na lista e veja o relatório atualizar',
      ],
    },
    desafio: {
      cenario: 'Você cuida das despesas de casa e quer um resumo por categoria (mercado, transporte, lazer) e o total gasto só no mês atual.',
      requisitos: [
        'Tenho colunas de data, categoria e valor',
        'Somei o total de cada categoria com SOMASE',
        'Usei SOMASES para somar uma categoria num mês específico',
        'Lembrei que no SOMASES a coluna de soma vem primeiro',
        'Os critérios de texto estão entre aspas',
        'O resumo recalcula ao lançar uma despesa nova',
      ],
      dica: 'Se confundir a ordem dos argumentos, o Excel mostra a "dica de função" amarela enquanto você digita — ela destaca em negrito o argumento atual. Vá preenchendo seguindo a dica.',
    },
    validacao: [
      'Sei somar com um critério (SOMASE)',
      'Sei somar com vários critérios (SOMASES)',
      'Lembro que a ordem de argumentos muda entre os dois',
      'Uso critérios de texto e de comparação',
      'Monto um relatório por categoria/vendedor',
    ],
  },

  'pc-excel-pro-7': {
    trilhaId: 'pc-excel-pro', numero: 7, titulo: 'Erros sob controle: SE.ERRO',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Aquele #N/D, #DIV/0! ou #VALOR! vermelho na planilha assusta — e pior, "contamina" totais e gráficos. Com SE.ERRO você troca o erro por uma mensagem amigável ou por zero.',
      conceito: {
        titulo: 'Se der erro, mostre isto no lugar',
        texto: 'SE.ERRO(fórmula; valor_se_der_erro) executa sua fórmula normalmente; mas se ela retornar QUALQUER erro, mostra o valor alternativo que você escolher (um texto como "Não encontrado", um zero, um traço). É a "rede de segurança" que deixa a planilha apresentável. No Sheets: IFERROR. Use com parcimônia: esconder o erro sem entender a causa pode mascarar um problema real.',
      },
      estrutura: {
        titulo: 'Os erros mais comuns',
        partes: [
          { simbolo: '#DIV/0!', desc: 'Divisão por zero (ou por célula vazia).' },
          { simbolo: '#N/D', desc: 'Procura (PROCV/PROCX) não encontrou o valor.' },
          { simbolo: '#VALOR!', desc: 'Tipo errado: tentou somar texto, por exemplo.' },
          { simbolo: '#NOME?', desc: 'Nome de função digitado errado ou texto sem aspas.' },
        ],
      },
      exemplo: {
        titulo: 'Evitar a divisão por zero',
        celulas: [
          { ref: 'A2', valor: 'Total: 1000' },
          { ref: 'B2', valor: 'Qtd: 0' },
          { ref: 'C2', valor: '=SE.ERRO(A2/B2; "—")' },
        ],
        formula: '=SE.ERRO(A2/B2; "—")',
        resultado: 'Se a quantidade for 0, em vez de #DIV/0! aparece um traço "—". Quando houver quantidade, mostra o cálculo normal.',
        comentario: 'Muito usado com PROCX: =SE.ERRO(PROCX(...); "Não cadastrado"). Assim a planilha avisa em português em vez de mostrar #N/D.',
      },
      vocabulario: [
        { palavra: 'SE.ERRO (IFERROR)', def: 'Substitui qualquer erro por um valor à sua escolha.' },
        { palavra: '#N/D', def: 'Erro "não disponível": a busca não achou o valor procurado.' },
        { palavra: 'Valor alternativo', def: 'O que aparece no lugar do erro (texto, zero, traço).' },
      ],
      chave: [
        '=SE.ERRO(fórmula; alternativa)',
        'Troca #N/D, #DIV/0! etc. por algo amigável',
        'Ótimo par com PROCX',
      ],
      porque: 'Planilha entregue ao chefe não pode ter erro vermelho espalhado — passa imagem de descuido e quebra somas. SE.ERRO deixa o resultado limpo e profissional, com mensagens que qualquer pessoa entende.',
    },
    pratica: {
      instrucao: 'Domestique uma divisão e uma busca que podem falhar.',
      passos: [
        'Monte A2=1000, B2=0 e em C2 digite =A2/B2 (veja o #DIV/0!)',
        'Reescreva C2 como =SE.ERRO(A2/B2; "—") e veja o traço',
        'Mude B2 pra 4 e confirme que volta a calcular (250)',
        'Em outra célula simule uma busca que não acha: =SE.ERRO(PROCV("xyz";A:B;2;0); "Não achado")',
        'Confira que aparece "Não achado" em vez de #N/D',
        'Some uma coluna que tinha erro e veja o total fechar agora',
      ],
    },
    desafio: {
      cenario: 'Sua planilha calcula o ticket médio (total ÷ nº de vendas) por dia, mas em dias sem venda aparece #DIV/0! e estraga o gráfico.',
      requisitos: [
        'Identifiquei onde o erro aparece e por quê',
        'Envolvi o cálculo com SE.ERRO',
        'Em dias sem venda mostro 0 (ou um traço), não #DIV/0!',
        'O gráfico/total deixou de quebrar',
        'O cálculo continua normal nos dias com venda',
        'Entendi a causa do erro antes de escondê-lo',
      ],
      dica: 'Primeiro descubra a causa, depois trate. Esconder #N/D pode estar mascarando um código digitado errado. SE.ERRO é maquiagem — útil, mas não substitui consertar o dado de origem.',
    },
    validacao: [
      'Reconheço os erros comuns (#DIV/0!, #N/D, #VALOR!)',
      'Sei usar SE.ERRO para tratá-los',
      'Combino SE.ERRO com PROCV/PROCX',
      'Escolho um valor alternativo adequado',
      'Entendo a causa antes de esconder o erro',
    ],
  },

  'pc-excel-pro-8': {
    trilhaId: 'pc-excel-pro', numero: 8, titulo: 'PROCX (XLOOKUP): o sucessor do PROCV',
    tempoTotal: 16, xp: 100, vertente: 'computador',
    aula: {
      gancho: 'Você já viu o PROCV. Agora conheça o PROCX — mais simples, busca pra qualquer lado, não quebra quando alguém move colunas e ainda trata o "não encontrado" sozinho. É o que o mercado está adotando.',
      conceito: {
        titulo: 'Procure um valor e traga o correspondente',
        texto: 'PROCX(valor_procurado; intervalo_de_busca; intervalo_de_retorno; [se_não_achar]) procura o valor numa coluna e devolve o que está na mesma linha de outra coluna. Diferente do PROCV, você aponta diretamente a coluna de busca e a de retorno (sem contar números de coluna), e a de retorno pode estar à ESQUERDA da de busca. O 4º argumento já resolve o "não encontrado". No Sheets: XLOOKUP. Em versões antigas sem PROCX, o PROCV ainda funciona.',
      },
      estrutura: {
        titulo: 'PROCX x PROCV',
        partes: [
          { simbolo: 'procurado', desc: 'O que você quer achar (um código, um nome).' },
          { simbolo: 'busca', desc: 'A coluna onde esse valor está (PROCX aponta direto).' },
          { simbolo: 'retorno', desc: 'A coluna cujo valor você quer trazer de volta.' },
          { simbolo: '[se_não_achar]', desc: 'Texto opcional pra mostrar quando não encontra — adeus #N/D.' },
        ],
      },
      exemplo: {
        titulo: 'Buscar o preço pelo código',
        celulas: [
          { ref: 'A2:A100', valor: 'Códigos dos produtos' },
          { ref: 'C2:C100', valor: 'Preços' },
          { ref: 'F2', valor: '=PROCX(E2; A2:A100; C2:C100; "Sem cadastro")' },
        ],
        formula: '=PROCX(E2; A2:A100; C2:C100; "Sem cadastro")',
        resultado: 'Digite um código em E2 e o preço aparece em F2. Se o código não existir, aparece "Sem cadastro" em vez de erro.',
        comentario: 'No PROCV equivalente você teria de contar "a coluna do preço é a 3ª" e cuidar pra não mover colunas. O PROCX aponta a coluna direto — mais robusto.',
      },
      vocabulario: [
        { palavra: 'PROCX (XLOOKUP)', def: 'Função de busca moderna: aponta busca e retorno diretamente.' },
        { palavra: 'Valor procurado', def: 'A chave que você usa pra localizar a linha (código, nome).' },
        { palavra: 'Correspondência exata', def: 'PROCX já busca exata por padrão (PROCV exige o 0/FALSO no fim).' },
      ],
      chave: [
        '=PROCX(procurado; busca; retorno; se_não_achar)',
        'Busca pra qualquer lado, sem contar colunas',
        'O 4º argumento elimina o #N/D',
      ],
      porque: 'Cruzar tabelas (pedidos × cadastro de clientes, vendas × tabela de preços) é a tarefa de planilha mais pedida em vagas. PROCX faz isso de forma mais segura e legível — e impressiona em teste prático.',
    },
    pratica: {
      instrucao: 'Crie uma consulta de preço por código.',
      passos: [
        'Monte uma tabela: A = código, B = produto, C = preço (6 itens)',
        'Numa célula separada (E2) digite um dos códigos',
        'Em F2 digite =PROCX(E2; A2:A7; C2:C7; "Sem cadastro")',
        'Confirme que o preço certo aparece',
        'Troque o código em E2 e veja o preço mudar',
        'Digite um código inexistente e confira a mensagem "Sem cadastro"',
        'Crie um F3 que traga o NOME do produto (mude a coluna de retorno pra B)',
      ],
    },
    desafio: {
      cenario: 'Você tem uma lista de pedidos só com o código do cliente e precisa trazer o nome e a cidade de cada um a partir de um cadastro em outra aba.',
      requisitos: [
        'Tenho a tabela de pedidos e o cadastro de clientes (códigos únicos)',
        'Usei PROCX para trazer o nome do cliente pelo código',
        'Usei PROCX para trazer a cidade também',
        'Tratei o "não encontrado" com uma mensagem clara',
        'A busca funciona mesmo com a coluna de retorno à esquerda',
        'Arrastei as fórmulas por todos os pedidos',
      ],
      dica: 'Se sua versão não tiver PROCX, o equivalente é =PROCV(E2; A2:C7; 3; FALSO) — onde 3 é a posição da coluna de retorno e FALSO força a busca exata. Sempre use FALSO/0 no PROCV pra evitar resultados errados.',
    },
    validacao: [
      'Entendo procurado, busca e retorno',
      'Sei trazer dados de outra tabela com PROCX',
      'Trato o "não encontrado" no 4º argumento',
      'Sei o equivalente em PROCV (com FALSO no fim)',
      'Cruzo duas tabelas pelo código',
    ],
  },

  'pc-excel-pro-9': {
    trilhaId: 'pc-excel-pro', numero: 9, titulo: 'Funções de texto: juntar, separar e limpar',
    tempoTotal: 12, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Nomes em MAIÚSCULAS, espaços sobrando, "Nome" e "Sobrenome" em colunas separadas que você precisa juntar… Texto bagunçado é o pesadelo de quem importa dados. As funções de texto resolvem em segundos.',
      conceito: {
        titulo: 'Manipular pedaços de texto',
        texto: 'O Excel trata texto como uma sequência de caracteres que você pode juntar, recortar e padronizar. Junte com & ou CONCAT; recorte do início com ESQUERDA, do fim com DIREITA, do meio com EXT.TEXTO; padronize com MAIÚSCULA, MINÚSCULA, PRI.MAIÚSCULA; e limpe espaços extras com ARRUMAR. NÚM.CARACT conta o tamanho. No Sheets os nomes são em inglês (LEFT, RIGHT, MID, TRIM, UPPER...).',
      },
      estrutura: {
        titulo: 'Caixa de ferramentas de texto',
        partes: [
          { simbolo: '&  /  CONCAT', desc: 'Juntam textos: =A2&" "&B2 vira "João Silva".' },
          { simbolo: 'ESQUERDA / DIREITA', desc: 'Pegam N caracteres do início ou do fim.' },
          { simbolo: 'ARRUMAR (TRIM)', desc: 'Remove espaços sobrando no começo, fim e duplos.' },
          { simbolo: 'MAIÚSCULA / PRI.MAIÚSCULA', desc: 'Padronizam a caixa do texto.' },
        ],
      },
      exemplo: {
        titulo: 'Montar o nome completo',
        celulas: [
          { ref: 'A2', valor: 'João' },
          { ref: 'B2', valor: 'Silva' },
          { ref: 'C2', valor: '=A2&" "&B2 → "João Silva"' },
        ],
        formula: '=PRI.MAIÚSCULA(ARRUMAR(A2)&" "&ARRUMAR(B2))',
        resultado: 'Junta nome e sobrenome com um espaço, remove espaços extras e deixa cada palavra com inicial maiúscula. "joão  " + "SILVA" → "João Silva".',
        comentario: 'Você pode aninhar funções: ARRUMAR limpa, & junta, PRI.MAIÚSCULA padroniza. Pra SEPARAR um texto, o caminho rápido é Dados → Texto para Colunas.',
      },
      vocabulario: [
        { palavra: 'Concatenar', def: 'Juntar dois ou mais textos num só (com & ou CONCAT).' },
        { palavra: 'ARRUMAR (TRIM)', def: 'Remove espaços desnecessários — clássico em dados importados.' },
        { palavra: 'Texto para Colunas', def: 'Recurso em Dados que separa um texto em várias colunas por um separador.' },
      ],
      chave: [
        '& junta textos; ARRUMAR limpa espaços',
        'ESQUERDA/DIREITA/EXT.TEXTO recortam',
        'MAIÚSCULA/PRI.MAIÚSCULA padronizam',
      ],
      porque: 'Dados que vêm de sistemas, formulários e exports quase sempre chegam sujos. Quem sabe limpar e padronizar texto entrega listas confiáveis — e evita o PROCX falhar por causa de um espaço escondido.',
    },
    pratica: {
      instrucao: 'Limpe e padronize uma lista de nomes bagunçada.',
      passos: [
        'Em A digite nomes "sujos": "  joão", "MARIA ", "ana  paula"',
        'Em B2 digite =ARRUMAR(A2) e veja os espaços sumirem',
        'Em C2 digite =PRI.MAIÚSCULA(B2) pra padronizar a caixa',
        'Numa nova área, monte A=nome e B=sobrenome e junte em C com =A2&" "&B2',
        'Teste =ESQUERDA(A2; 3) pra pegar as 3 primeiras letras',
        'Use =NÚM.CARACT(A2) pra ver o tamanho do texto',
        'Selecione um texto "Nome Sobrenome" e teste Dados → Texto para Colunas',
      ],
    },
    desafio: {
      cenario: 'Você recebeu uma planilha de e-mails em que os nomes estão em MAIÚSCULAS, com espaços extras, e precisa de uma coluna "Nome de tratamento" só com o primeiro nome em formato bonito.',
      requisitos: [
        'Limpei os espaços extras com ARRUMAR',
        'Padronizei a caixa com PRI.MAIÚSCULA (ou MINÚSCULA/MAIÚSCULA conforme o caso)',
        'Extraí só o primeiro nome (ESQUERDA + LOCALIZAR do espaço, ou Texto para Colunas)',
        'O resultado fica apresentável ("João" em vez de "  JOÃO SILVA")',
        'Apliquei a fórmula à lista inteira',
        'Conferi que não sobrou espaço escondido',
      ],
      dica: 'Pra pegar o primeiro nome quando o tamanho varia: =ESQUERDA(A2; LOCALIZAR(" "; A2)-1) — o LOCALIZAR acha a posição do espaço e o ESQUERDA recorta até ali. É um combo clássico.',
    },
    validacao: [
      'Junto textos com & ou CONCAT',
      'Limpo espaços com ARRUMAR',
      'Recorto com ESQUERDA/DIREITA/EXT.TEXTO',
      'Padronizo a caixa do texto',
      'Sei separar texto em colunas',
    ],
  },

  'pc-excel-pro-10': {
    trilhaId: 'pc-excel-pro', numero: 10, titulo: 'Datas que calculam: prazos, idade e dias úteis',
    tempoTotal: 11, xp: 60, vertente: 'computador',
    aula: {
      gancho: '"Quantos dias faltam pro vencimento?" "Quantos dias úteis até a entrega?" "Qual a idade pela data de nascimento?" Datas no Excel são números por baixo — e isso deixa você fazer contas com elas.',
      conceito: {
        titulo: 'Por baixo, toda data é um número',
        texto: 'O Excel guarda datas como números sequenciais (o dia 1 é 01/01/1900). Por isso dá pra subtrair: data_final menos data_inicial = quantidade de dias. HOJE() devolve a data de hoje (atualiza sozinha); AGORA() inclui a hora. Pra dias úteis (pulando fins de semana e feriados) use DIATRABALHOTOTAL. Pra idade em anos, DATADIF. No Sheets: TODAY, NOW, NETWORKDAYS, DATEDIF.',
      },
      estrutura: {
        titulo: 'As funções de data essenciais',
        partes: [
          { simbolo: 'HOJE()', desc: 'A data de hoje, sem hora. Atualiza ao abrir a planilha.' },
          { simbolo: 'B2-A2', desc: 'Subtração de datas = número de dias corridos entre elas.' },
          { simbolo: 'DIATRABALHOTOTAL', desc: 'Conta só dias úteis entre duas datas (ignora sáb/dom e feriados).' },
          { simbolo: 'DATADIF', desc: 'Diferença em anos/meses/dias — ótima pra idade e tempo de casa.' },
        ],
      },
      exemplo: {
        titulo: 'Dias até o vencimento',
        celulas: [
          { ref: 'A2', valor: 'Vencimento: 20/06/2026' },
          { ref: 'B2', valor: '=A2-HOJE()' },
          { ref: 'Resultado', valor: '19 (dias restantes, se hoje for 01/06)' },
        ],
        formula: '=A2-HOJE()',
        resultado: 'Mostra quantos dias faltam. Combine com SE pra sinalizar: =SE(A2-HOJE()<0; "Vencido"; A2-HOJE()&" dias").',
        comentario: 'Se o resultado virar uma data estranha em vez de um número, é só formatar a célula como "Número". Idade: =DATADIF(nascimento; HOJE(); "Y").',
      },
      vocabulario: [
        { palavra: 'HOJE() / AGORA()', def: 'Data atual (e data+hora) que se atualizam sozinhas.' },
        { palavra: 'Dias corridos x úteis', def: 'Corridos contam todos os dias; úteis pulam fins de semana e feriados.' },
        { palavra: 'DATADIF', def: 'Função (meio escondida) que dá diferença em anos, meses ou dias completos.' },
      ],
      chave: [
        'Data é número: dá pra subtrair',
        'HOJE() atualiza sozinha',
        'DIATRABALHOTOTAL conta só dias úteis',
      ],
      porque: 'Controle de vencimentos, prazos de entrega, idade de clientes, tempo de contrato — escritório vive de datas. Calcular prazos automaticamente evita multa por boleto esquecido e entrega atrasada.',
    },
    pratica: {
      instrucao: 'Monte um controle de vencimentos com alerta automático.',
      passos: [
        'Coluna A: contas a pagar; coluna B: data de vencimento (datas reais)',
        'Em C2 digite =B2-HOJE() pra ver dias restantes',
        'Se aparecer data estranha, formate C como Número',
        'Em D2 monte =SE(B2-HOJE()<0; "Vencido"; SE(B2-HOJE()<=3; "Vence logo"; "Tranquilo"))',
        'Arraste as fórmulas pra lista toda',
        'Teste DIATRABALHOTOTAL(HOJE(); B2) pra contar dias úteis',
        'Mude uma data de vencimento e veja o alerta reagir',
      ],
    },
    desafio: {
      cenario: 'Você gerencia uma lista de funcionários e precisa calcular a idade de cada um e o tempo de empresa (em anos) a partir das datas de nascimento e de admissão.',
      requisitos: [
        'Tenho colunas de data de nascimento e data de admissão',
        'Calculei a idade com DATADIF(...; HOJE(); "Y")',
        'Calculei o tempo de empresa em anos completos',
        'As datas estão reconhecidas como data (alinhadas à direita)',
        'Os resultados aparecem como números, não como datas',
        'Arrastei pra equipe inteira',
      ],
      dica: 'Se uma "data" aparece à esquerda da célula, o Excel a leu como texto e nenhuma conta funciona. Reescreva no formato que seu sistema usa (dd/mm/aaaa) ou use Texto para Colunas pra convertê-la em data de verdade.',
    },
    validacao: [
      'Entendo que data é número por baixo',
      'Subtraio datas pra achar dias entre elas',
      'Uso HOJE() para prazos que se atualizam',
      'Conto dias úteis com DIATRABALHOTOTAL',
      'Calculo idade/tempo com DATADIF',
    ],
  },

  'pc-excel-pro-11': {
    trilhaId: 'pc-excel-pro', numero: 11, titulo: 'Listas suspensas: validação de dados',
    tempoTotal: 10, xp: 55, vertente: 'computador',
    aula: {
      gancho: 'Numa coluna "Forma de pagamento" um digita "PIX", outro "pix", outro "Pics". Aí o relatório não fecha. A solução é uma lista suspensa: a pessoa só ESCOLHE entre opções válidas — não digita errado.',
      conceito: {
        titulo: 'Limitar o que pode ser digitado',
        texto: 'A Validação de Dados controla o que entra numa célula. O tipo mais útil é a Lista: você define as opções e a célula ganha uma setinha de menu suspenso (dropdown). Também dá pra exigir número dentro de uma faixa, data válida, ou mostrar uma mensagem de erro personalizada. Caminho: Dados → Validação de dados → Permitir: Lista → digite as opções separadas por ponto-e-vírgula, ou aponte um intervalo. No Sheets: Dados → Validação de dados.',
      },
      estrutura: {
        titulo: 'O que a validação consegue fazer',
        partes: [
          { simbolo: 'Lista', desc: 'Menu suspenso com opções fixas (Sim/Não, PIX/Cartão/Dinheiro).' },
          { simbolo: 'Número/Data', desc: 'Só aceita valores dentro de uma faixa (ex: 1 a 5).' },
          { simbolo: 'Mensagem de entrada', desc: 'Dica que aparece ao clicar na célula ("Escolha a categoria").' },
          { simbolo: 'Alerta de erro', desc: 'Bloqueia ou avisa quando alguém digita fora das regras.' },
        ],
      },
      exemplo: {
        titulo: 'Dropdown de status',
        celulas: [
          { ref: 'Origem', valor: 'Dados → Validação de dados → Lista' },
          { ref: 'Opções', valor: 'Pendente;Em andamento;Concluído' },
          { ref: 'Resultado', valor: 'A célula vira um menu: clica e escolhe' },
        ],
        formula: 'Permitir: Lista  →  Fonte: Pendente;Em andamento;Concluído',
        resultado: 'Toda a coluna passa a aceitar só esses três valores, sempre escritos do mesmo jeito. CONT.SE e SOMASE agora fecham sem erro de digitação.',
        comentario: 'Profissional: digite as opções numa coluna escondida (ou outra aba) e aponte a Fonte pra esse intervalo. Assim você muda as opções sem reabrir a validação.',
      },
      vocabulario: [
        { palavra: 'Validação de dados', def: 'Regra que limita o que pode ser digitado numa célula.' },
        { palavra: 'Lista suspensa (dropdown)', def: 'Menu de opções que aparece ao clicar na célula.' },
        { palavra: 'Fonte', def: 'De onde vêm as opções: texto separado por ; ou um intervalo de células.' },
      ],
      chave: [
        'Dados → Validação de dados → Lista',
        'Opções separadas por ; ou apontando um intervalo',
        'Padroniza a digitação e evita erro no relatório',
      ],
      porque: 'Planilha preenchida por várias pessoas só fica confiável com validação. Dropdowns garantem dados padronizados — e dados padronizados fazem CONT.SE, SOMASE e tabela dinâmica funcionarem de verdade.',
    },
    pratica: {
      instrucao: 'Crie uma coluna de status com menu suspenso.',
      passos: [
        'Numa coluna, selecione as células onde quer o menu (ex: C2:C20)',
        'Vá em Dados → Validação de dados',
        'Em "Permitir" escolha Lista',
        'Na Fonte digite: Pendente;Em andamento;Concluído',
        'Clique OK e veja a setinha aparecer nas células',
        'Clique numa célula e escolha uma opção pelo menu',
        'Tente digitar "xyz" e veja o alerta de erro bloquear',
      ],
    },
    desafio: {
      cenario: 'Você vai compartilhar uma planilha de pedidos com a equipe e quer garantir que as colunas "Forma de pagamento" e "Status" nunca sejam preenchidas com texto fora do padrão.',
      requisitos: [
        'Criei uma aba (ou coluna) com as opções válidas de cada campo',
        'Apliquei validação de Lista apontando para esses intervalos',
        'Configurei uma mensagem de entrada explicando o campo',
        'Configurei um alerta de erro impedindo valores fora da lista',
        'Testei digitando algo inválido e fui bloqueado',
        'Confirmei que CONT.SE/SOMASE sobre essas colunas fecham certo',
      ],
      dica: 'Apontar a Fonte pra um intervalo (ex: =Listas!$A$2:$A$5) é melhor que digitar as opções na mão: pra adicionar uma forma de pagamento nova, basta acrescentar uma linha na lista — todos os dropdowns atualizam.',
    },
    validacao: [
      'Sei abrir Dados → Validação de dados',
      'Crio uma lista suspensa numa célula',
      'Aponto a fonte para um intervalo de opções',
      'Configuro mensagem de entrada e alerta de erro',
      'Entendo como isso padroniza o relatório',
    ],
  },

  'pc-excel-pro-12': {
    trilhaId: 'pc-excel-pro', numero: 12, titulo: 'Formatação condicional: a planilha que se pinta',
    tempoTotal: 10, xp: 55, vertente: 'computador',
    aula: {
      gancho: 'Imagine abrir a planilha e os atrasados já estarem em vermelho, as metas batidas em verde e os maiores valores com uma barrinha. Sem você pintar nada na mão. Isso é formatação condicional.',
      conceito: {
        titulo: 'Cores que seguem regras',
        texto: 'A Formatação Condicional aplica cor, ícone ou barra automaticamente quando a célula atende a uma regra. Você define "se o valor for X, pinte de Y", e o Excel cuida do resto — inclusive quando os dados mudam. Tipos: Realçar regras (maior que, igual a, contém texto, datas), Barras de dados, Escalas de cor (mapa de calor) e Conjuntos de ícones. Caminho: Página Inicial → Formatação Condicional. No Sheets: Formatar → Formatação condicional.',
      },
      estrutura: {
        titulo: 'Os tipos de regra',
        partes: [
          { simbolo: 'Realçar', desc: 'Pinta quando bate a regra: > meta, = "Atrasado", contém "urgente".' },
          { simbolo: 'Barras de dados', desc: 'Barra dentro da célula proporcional ao valor — mini gráfico.' },
          { simbolo: 'Escala de cor', desc: 'Gradiente do menor (vermelho) ao maior (verde): mapa de calor.' },
          { simbolo: 'Fórmula', desc: 'Regra avançada: pinte a LINHA toda quando =$D2="Atrasado".' },
        ],
      },
      exemplo: {
        titulo: 'Realçar quem ficou abaixo da meta',
        celulas: [
          { ref: 'Seleção', valor: 'Coluna de vendas B2:B30' },
          { ref: 'Regra', valor: 'Realçar → Menor que → 10000' },
          { ref: 'Formato', valor: 'Preenchimento vermelho claro' },
        ],
        formula: 'Formatação Condicional → Realçar Regras → É Menor Que → 10000',
        resultado: 'Toda venda abaixo de 10000 fica vermelha automaticamente. Se um valor mudar e passar a meta, a cor some sozinha.',
        comentario: 'Pra pintar a LINHA inteira (não só uma célula), selecione o intervalo todo e crie uma regra por fórmula travando a coluna: =$D2="Atrasado". O $ na coluna é essencial.',
      },
      vocabulario: [
        { palavra: 'Formatação condicional', def: 'Formato que aparece só quando a célula atende a uma regra.' },
        { palavra: 'Escala de cor', def: 'Gradiente que vira mapa de calor do menor ao maior valor.' },
        { palavra: 'Regra por fórmula', def: 'Condição escrita por você para pintar células ou linhas inteiras.' },
      ],
      chave: [
        'Cores seguem regras e atualizam sozinhas',
        'Barras e escalas viram mini-gráficos',
        'Regra por fórmula com $ pinta a linha toda',
      ],
      porque: 'Formatação condicional transforma uma tabela de números num painel que "fala" num relance. O chefe vê o vermelho do atraso sem ler número por número — comunicação visual instantânea.',
    },
    pratica: {
      instrucao: 'Pinte automaticamente uma lista de vendas.',
      passos: [
        'Monte uma coluna de vendas com uns 10 valores variados',
        'Selecione a coluna e vá em Formatação Condicional → Realçar → Menor que → 10000',
        'Escolha preenchimento vermelho e confirme',
        'Na mesma coluna adicione Barras de Dados e veja as barrinhas',
        'Crie uma coluna Status com "Atrasado"/"Ok" e selecione a tabela inteira',
        'Use regra por fórmula =$C2="Atrasado" pra pintar a linha toda',
        'Mude um valor/status e veja as cores reagirem',
      ],
    },
    desafio: {
      cenario: 'Num controle de tarefas com prazos, você quer que tarefas vencidas fiquem em vermelho, as que vencem em até 3 dias em amarelo, e as concluídas em verde — tudo automático.',
      requisitos: [
        'Tenho colunas de tarefa, prazo e status',
        'Regra 1: prazo já passou (e não concluída) → vermelho',
        'Regra 2: vence em até 3 dias → amarelo',
        'Regra 3: status "Concluído" → verde',
        'Usei regra por fórmula para pintar a linha inteira',
        'As cores mudam sozinhas quando atualizo prazo ou status',
      ],
      dica: 'A ORDEM das regras importa: o Excel aplica de cima pra baixo e pode parar na primeira que bate ("Parar se for verdadeiro"). Coloque "Concluído → verde" no topo pra que tarefa pronta não fique vermelha por estar vencida.',
    },
    validacao: [
      'Aplico realce por regra (maior/menor/igual)',
      'Uso barras de dados e escala de cor',
      'Crio regra por fórmula com $ para a linha toda',
      'Entendo a ordem/prioridade das regras',
      'As cores acompanham mudanças nos dados',
    ],
  },

  'pc-excel-pro-13': {
    trilhaId: 'pc-excel-pro', numero: 13, titulo: 'Tabela dinâmica: resumir milhares de linhas',
    tempoTotal: 16, xp: 90, vertente: 'computador',
    aula: {
      gancho: 'Cinco mil linhas de vendas e o chefe pede: "total por vendedor, por mês, e por produto". Fazer na fórmula leva horas. Com tabela dinâmica, são três arrastões de mouse. É a ferramenta que parece mágica.',
      conceito: {
        titulo: 'Arraste campos e tenha o resumo',
        texto: 'A Tabela Dinâmica (PivotTable) resume uma base grande agrupando e somando do jeito que você quiser, sem digitar fórmula. Você seleciona a base (com cabeçalhos), insere a tabela dinâmica e arrasta os campos para quatro áreas: Linhas (o que agrupar nas linhas), Colunas (o que agrupar nas colunas), Valores (o que somar/contar) e Filtros. Mudou a pergunta? Arraste os campos de novo — o resumo se refaz na hora. No Sheets: Inserir → Tabela dinâmica.',
      },
      estrutura: {
        titulo: 'As quatro áreas',
        partes: [
          { simbolo: 'Linhas', desc: 'O que vira cada linha do resumo (ex: Vendedor, Categoria).' },
          { simbolo: 'Colunas', desc: 'O que vira cada coluna (ex: Mês) — cria o cruzamento.' },
          { simbolo: 'Valores', desc: 'O número resumido: Soma de Valor, Contagem de Pedidos…' },
          { simbolo: 'Filtros', desc: 'Recorta o resumo (ex: só a região Sul, só 2026).' },
        ],
      },
      exemplo: {
        titulo: 'Total de vendas por vendedor e mês',
        celulas: [
          { ref: 'Base', valor: 'Tabela com colunas Vendedor, Mês, Produto, Valor' },
          { ref: 'Linhas', valor: 'Vendedor' },
          { ref: 'Colunas', valor: 'Mês  •  Valores: Soma de Valor' },
        ],
        formula: 'Inserir → Tabela Dinâmica → arraste Vendedor (Linhas), Mês (Colunas), Valor (Valores)',
        resultado: 'Uma grade com vendedores nas linhas, meses nas colunas e o total vendido em cada cruzamento — montada em segundos, com totais gerais automáticos.',
        comentario: 'Em Valores, clique no campo → Configurações → e troque entre Soma, Contagem, Média, Máximo. Atualizou a base? Clique com o botão direito → Atualizar.',
      },
      vocabulario: [
        { palavra: 'Tabela dinâmica (Pivot)', def: 'Ferramenta que resume uma base grande arrastando campos.' },
        { palavra: 'Campo', def: 'Cada coluna da sua base (Vendedor, Mês, Valor) vira um campo arrastável.' },
        { palavra: 'Atualizar', def: 'Recalcular a dinâmica depois que a base de origem mudou.' },
      ],
      chave: [
        'Base com cabeçalhos → Inserir Tabela Dinâmica',
        'Arraste para Linhas, Colunas, Valores, Filtros',
        'Botão direito → Atualizar quando a base mudar',
      ],
      porque: 'A tabela dinâmica é a habilidade de Excel mais valorizada em análise de dados. Ela responde perguntas de negócio em segundos e impressiona em qualquer teste prático — é o "pulo do gato" do nível intermediário.',
    },
    pratica: {
      instrucao: 'Crie sua primeira tabela dinâmica.',
      passos: [
        'Monte (ou cole) uma base com cabeçalhos: Vendedor, Mês, Produto, Valor (15+ linhas)',
        'Clique em qualquer célula da base',
        'Vá em Inserir → Tabela Dinâmica → OK (nova planilha)',
        'No painel, arraste Vendedor para Linhas',
        'Arraste Valor para Valores (vira Soma de Valor)',
        'Arraste Mês para Colunas e veja o cruzamento aparecer',
        'Mude um valor na base, volte e clique com botão direito → Atualizar',
      ],
    },
    desafio: {
      cenario: 'A partir de uma base de pedidos, você precisa entregar três resumos para a reunião: total por categoria, total por mês, e quantos pedidos cada vendedor fez.',
      requisitos: [
        'Minha base tem cabeçalhos e nenhuma linha/coluna vazia no meio',
        'Resumo 1: categoria nas Linhas, Soma de Valor nos Valores',
        'Resumo 2: mês nas Linhas (ou Colunas), Soma de Valor',
        'Resumo 3: vendedor nas Linhas, Contagem de Pedidos nos Valores',
        'Usei um Filtro (ex: só uma região) em pelo menos um resumo',
        'Atualizei a dinâmica após mudar a base',
      ],
      dica: 'Tabela dinâmica exige base "limpa": cabeçalho em toda coluna, sem linhas em branco, sem células mescladas. Antes de inserir, transforme a base em Tabela (Ctrl+T) — assim, ao adicionar linhas novas, a dinâmica passa a incluí-las só com um Atualizar.',
    },
    validacao: [
      'Preparo uma base limpa com cabeçalhos',
      'Insiro uma tabela dinâmica',
      'Arrasto campos para Linhas, Colunas e Valores',
      'Troco entre Soma, Contagem e Média',
      'Atualizo a dinâmica quando a base muda',
    ],
  },

  'pc-excel-pro-14': {
    trilhaId: 'pc-excel-pro', numero: 14, titulo: 'Projeto: Dashboard de Vendas completo',
    tempoTotal: 30, xp: 160, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo numa peça só: uma base de pedidos que vira um painel gerencial vivo — com busca por código, totais por critério, alertas coloridos, listas padronizadas e uma tabela dinâmica. É o tipo de entrega que vale uma vaga.',
      conceito: {
        titulo: 'Da base bruta ao painel que decide',
        texto: 'Um dashboard reúne, numa visão só, os números que importam — atualizando-se conforme a base cresce. Neste projeto você parte de uma base de pedidos e constrói: (1) uma aba de cadastro consultada por PROCX, (2) campos de entrada com validação de dados, (3) indicadores com SOMASES/CONT.SES, (4) tratamento de erro com SE.ERRO, (5) formatação condicional para alertas, e (6) uma tabela dinâmica resumindo tudo. Cada peça você já dominou nesta trilha — agora elas conversam entre si.',
      },
      estrutura: {
        titulo: 'As camadas do dashboard',
        partes: [
          { simbolo: 'Base + Cadastro', desc: 'Pedidos numa aba; clientes/produtos noutra, ligados por PROCX.' },
          { simbolo: 'Entrada', desc: 'Dropdowns (validação) padronizam status, forma de pagamento, região.' },
          { simbolo: 'Indicadores', desc: 'SOMASES/CONT.SES/MÉDIASE calculam os KPIs do topo.' },
          { simbolo: 'Visual', desc: 'Formatação condicional + tabela dinâmica + gráfico contam a história.' },
        ],
      },
      exemplo: {
        titulo: 'Um indicador do painel',
        celulas: [
          { ref: 'Faturamento do mês', valor: '=SOMASES(Valor; Mês; $B$1)' },
          { ref: 'Nº de pedidos', valor: '=CONT.SES(Mês; $B$1)' },
          { ref: 'Ticket médio', valor: '=SE.ERRO(Faturamento/Pedidos; 0)' },
        ],
        formula: 'KPI = SOMASES + CONT.SES, protegido por SE.ERRO',
        resultado: 'Mude o mês na célula B1 (que é um dropdown) e os três indicadores recalculam juntos. O SE.ERRO evita #DIV/0! em meses sem venda.',
        comentario: 'Use uma célula de filtro (B1) com validação de Lista como o "controle" do painel. Tudo aponta pra ela com $ — vira um seletor interativo.',
      },
      vocabulario: [
        { palavra: 'Dashboard', def: 'Painel que reúne os principais indicadores numa visão única e atualizável.' },
        { palavra: 'KPI / indicador', def: 'Número-chave de desempenho (faturamento, ticket médio, nº de pedidos).' },
        { palavra: 'Célula de controle', def: 'Uma célula (com dropdown) que filtra o painel inteiro.' },
      ],
      chave: [
        'PROCX liga pedidos ao cadastro',
        'SOMASES/CONT.SES + SE.ERRO viram os KPIs',
        'Validação + condicional + dinâmica dão o acabamento',
      ],
      porque: 'Montar um dashboard do zero é a prova final de que você domina o Excel intermediário-avançado. É exatamente o entregável que diferencia um currículo — e a peça que transforma dado bruto em decisão.',
    },
    pratica: {
      instrucao: 'Construa o dashboard passo a passo, reusando o que aprendeu na trilha.',
      passos: [
        'Crie a base "Pedidos": Data, Código do cliente, Mês, Categoria, Forma de pagamento, Valor (20+ linhas)',
        'Crie a aba "Clientes": Código (único), Nome, Cidade — e traga Nome/Cidade pros pedidos com PROCX',
        'Aplique validação de Lista em Categoria e Forma de pagamento',
        'No topo, monte KPIs com SOMASES/CONT.SES e proteja o ticket médio com SE.ERRO',
        'Coloque em B1 um dropdown de Mês e faça os KPIs apontarem pra $B$1',
        'Aplique formatação condicional: valores abaixo da meta em vermelho, acima em verde',
        'Insira uma tabela dinâmica (categoria × mês) e um gráfico ao lado',
        'Atualize a dinâmica e confira que tudo reage ao trocar o mês em B1',
      ],
    },
    desafio: {
      cenario: 'Entregue o dashboard como se fosse para um gestor: limpo, interativo e à prova de erros. Alguém deve conseguir trocar o mês e ler a situação das vendas em 5 segundos.',
      requisitos: [
        'PROCX traz nome e cidade do cliente sem #N/D (tratado com SE.ERRO)',
        'Categoria e forma de pagamento usam listas suspensas',
        'Pelo menos 3 KPIs no topo (faturamento, nº de pedidos, ticket médio)',
        'O seletor de mês (dropdown) filtra todos os KPIs',
        'Formatação condicional sinaliza metas batidas e não batidas',
        'Há uma tabela dinâmica e um gráfico atualizáveis',
        'Nenhuma célula mostra erro vermelho (#N/D, #DIV/0!)',
        'Salvei o arquivo e exportei uma versão em PDF do painel',
      ],
      dica: 'Monte por camadas e teste cada uma antes de seguir: primeiro a base e o PROCX, depois as validações, depois os KPIs, por último o visual. Se algo quebrar, você sabe exatamente onde olhar. Um dashboard é a soma de peças simples bem encaixadas.',
    },
    validacao: [
      'Liguei pedidos ao cadastro com PROCX + SE.ERRO',
      'Padronizei a entrada com validação de dados',
      'Calculei KPIs com SOMASES/CONT.SES',
      'Criei um seletor de mês que filtra o painel',
      'Apliquei formatação condicional e tabela dinâmica',
      'Entreguei um painel limpo, salvo e exportado em PDF',
    ],
  },
};
