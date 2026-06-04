// ============================================================================
// CONTEÚDO — Impressão e Digitalização sem Sofrimento (pc-impressao)
// Conhecer a impressora, conectar, imprimir certo, frente e verso, economizar
// tinta, digitalizar, resolver erros, imprimir do celular. Autonomia no papel.
// ============================================================================

export const PC_IMPRESSAO = {
  'pc-impressao-1': {
    trilhaId: 'pc-impressao', numero: 1, titulo: 'Conhecendo a impressora: tipos e partes',
    tempoTotal: 8, xp: 40, vertente: 'computador',
    aula: {
      gancho: 'A impressora parece uma caixa misteriosa que só funciona quando quer. Mas entendendo suas partes e seu tipo, ela vira uma ferramenta simples e obediente. Hoje você conhece a máquina por dentro — e perde o medo dela.',
      conceito: {
        titulo: 'Cada impressora tem um tipo e partes que você precisa conhecer',
        texto: 'Há dois tipos principais. A JATO DE TINTA usa cartuchos de tinta líquida — boa pra fotos e uso doméstico, mas a tinta custa caro e seca se ficar parada. A LASER usa um pó (toner) — mais rápida, econômica em texto e ideal pra quem imprime bastante. Hoje muitas são MULTIFUNCIONAIS: imprimem, copiam e digitalizam (escaneiam). As partes essenciais: a BANDEJA de papel, a SAÍDA onde o papel impresso sai, os CARTUCHOS/TONER, e o VIDRO do scanner (na tampa de cima). Conhecer isso resolve metade dos problemas.',
      },
      estrutura: {
        titulo: 'As partes que importam',
        partes: [
          { simbolo: '📥', desc: 'Bandeja de papel: onde você coloca as folhas em branco.' },
          { simbolo: '📤', desc: 'Saída: onde o papel impresso aparece. Não puxe à força.' },
          { simbolo: '🖋️', desc: 'Cartucho (tinta) ou toner (pó): o que "pinta" o papel.' },
          { simbolo: '🪟', desc: 'Vidro do scanner: na tampa, pra copiar e digitalizar.' },
        ],
      },
      exemplo: {
        titulo: 'Jato de tinta x laser',
        celulas: [
          { ref: 'Imprime fotos coloridas', valor: 'Jato de tinta se sai melhor' },
          { ref: 'Imprime muito texto', valor: 'Laser: mais rápida e econômica' },
          { ref: 'Usa pouco, esporádico', valor: 'Laser: não seca como a tinta' },
          { ref: 'Imprime, copia e escaneia', valor: 'Multifuncional (tem o vidro do scanner)' },
        ],
        formula: 'Tipo + partes conhecidas = impressora sob controle',
        resultado: 'Você entende sua máquina e sabe o que cada parte faz.',
        comentario: 'Dica de economia: se você imprime pouco e esporadicamente, a tinta da jato seca e entope, gerando gasto. Pra uso eventual de texto, a laser (mesmo a mais simples) costuma sair mais barata no longo prazo.',
      },
      vocabulario: [
        { palavra: 'Jato de tinta', def: 'Impressora que usa cartuchos de tinta líquida; boa pra fotos.' },
        { palavra: 'Laser', def: 'Impressora que usa toner (pó); rápida e econômica pra texto.' },
        { palavra: 'Multifuncional', def: 'Aparelho que imprime, copia e digitaliza (tem scanner).' },
      ],
      chave: [
        'Jato de tinta é boa pra foto; laser pra texto e volume',
        'Multifuncional também copia e escaneia',
        'Bandeja, saída, cartucho/toner e vidro do scanner são as partes-chave',
      ],
      porque: 'Entender o tipo e as partes da impressora tira o medo e te dá autonomia: você sabe onde colocar papel, o que é cartucho e como copiar — base pra tudo que vem nas próximas missões.',
    },
    pratica: {
      instrucao: 'Vá até uma impressora (sua, do trabalho ou de uma lan house) e identifique suas partes.',
      passos: [
        'Descubra se é jato de tinta ou laser (olhe o modelo ou os cartuchos)',
        'Localize a bandeja de papel e veja se há folhas nela',
        'Identifique a saída por onde o papel impresso sai',
        'Veja se ela tem tampa com vidro em cima (multifuncional com scanner)',
        'Procure a tela ou os botões de comando da impressora',
      ],
    },
    desafio: {
      cenario: 'Em uma impressora, identifique o tipo (jato ou laser), localize a bandeja, a saída, o local dos cartuchos/toner e, se houver, o vidro do scanner. Saiba dizer se ela é multifuncional.',
      requisitos: [
        'Identifiquei se é jato de tinta ou laser',
        'Localizei a bandeja de papel',
        'Localizei a saída do papel impresso',
        'Encontrei onde ficam os cartuchos ou o toner',
        'Sei dizer se a impressora é multifuncional',
      ],
      dica: 'Não tem impressora em casa? Papelarias, lan houses e até os Correios oferecem impressão. Conhecer as partes te ajuda a pedir o serviço com segurança e até a operar a máquina de autoatendimento.',
    },
    validacao: [
      'Diferencio jato de tinta e laser',
      'Sei o que é uma multifuncional',
      'Localizo a bandeja e a saída de papel',
      'Sei onde ficam os cartuchos/toner',
      'Reconheço o vidro do scanner',
    ],
  },

  'pc-impressao-2': {
    trilhaId: 'pc-impressao', numero: 2, titulo: 'Conectar a impressora ao computador',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: '"A impressora não aparece pra imprimir." É a reclamação mais comum do mundo. A causa quase sempre é a conexão. Entender como o computador "enxerga" a impressora resolve isso de vez — e você nunca mais fica refém de alguém pra configurar.',
      conceito: {
        titulo: 'O computador precisa "enxergar" a impressora',
        texto: 'Pra imprimir, o computador precisa estar conectado à impressora de uma de três formas. Por CABO USB: liga direto, simples e confiável. Por WI-FI: a impressora entra na mesma rede que o computador e imprime sem fio (prático, mas exige a impressora conectada à mesma internet). Em alguns casos, o computador precisa de um DRIVER (um pequeno programa que ensina o PC a falar com aquele modelo) — o Windows costuma instalar sozinho. Quando conectada, a impressora aparece na lista de impressoras do sistema.',
      },
      estrutura: {
        titulo: 'As formas de conectar',
        partes: [
          { simbolo: '🔌', desc: 'Cabo USB: conexão direta e mais confiável. Bom pra começar.' },
          { simbolo: '📶', desc: 'Wi-Fi: sem fio, na mesma rede do computador. Prática.' },
          { simbolo: '💿', desc: 'Driver: programa que ensina o PC a usar aquele modelo.' },
          { simbolo: '📋', desc: 'Lista de impressoras: confirme que ela aparece em "Impressoras".' },
        ],
      },
      exemplo: {
        titulo: 'Resolvendo a conexão',
        celulas: [
          { ref: 'Não aparece pra imprimir', valor: 'Cheque cabo USB ou se está na mesma rede Wi-Fi' },
          { ref: 'Impressora nova', valor: 'Windows costuma instalar o driver sozinho' },
          { ref: 'Wi-Fi', valor: 'Impressora e PC na MESMA internet' },
          { ref: 'Confirmar', valor: 'Configurações → Impressoras → ela está lá?' },
        ],
        formula: 'Conexão (USB/Wi-Fi) + driver = impressora visível e pronta',
        resultado: 'A impressora aparece na lista e fica disponível pra imprimir.',
        comentario: 'Pra Wi-Fi funcionar, a impressora E o computador precisam estar na MESMA rede. Se você tem duas redes (ex.: "Casa" e "Casa_5G"), conecte os dois na mesma — esse detalhe resolve a maioria dos problemas de impressão sem fio.',
      },
      vocabulario: [
        { palavra: 'Driver', def: 'Programa que ensina o computador a se comunicar com a impressora.' },
        { palavra: 'USB', def: 'Cabo de conexão direta entre a impressora e o computador.' },
        { palavra: 'Mesma rede', def: 'Impressora e computador ligados ao mesmo Wi-Fi pra imprimir sem fio.' },
      ],
      chave: [
        'Conecte por cabo USB (simples) ou Wi-Fi (sem fio)',
        'No Wi-Fi, impressora e PC têm que estar na mesma rede',
        'A impressora deve aparecer na lista de impressoras do sistema',
      ],
      porque: 'A maioria dos problemas de impressão é, na verdade, de conexão. Entender isso te dá autonomia pra resolver sozinho e parar de depender de terceiros toda vez que a impressora "some".',
    },
    pratica: {
      instrucao: 'Vamos verificar como sua impressora está conectada e se o computador a reconhece.',
      passos: [
        'Veja como a impressora está ligada ao PC: por cabo USB ou por Wi-Fi',
        'No Windows, abra Configurações → "Bluetooth e dispositivos" → "Impressoras e scanners"',
        'Confira se a sua impressora aparece na lista',
        'Se não aparecer, clique em "Adicionar dispositivo" e siga o assistente',
        'Se for Wi-Fi, confirme que impressora e PC estão na mesma rede',
      ],
    },
    desafio: {
      cenario: 'Confirme que sua impressora está conectada e visível pro computador: identifique o tipo de conexão (USB ou Wi-Fi) e localize-a na lista de "Impressoras e scanners" do sistema. Se não estiver, tente adicioná-la.',
      requisitos: [
        'Identifiquei como a impressora está conectada (USB ou Wi-Fi)',
        'Abri a lista de impressoras do sistema',
        'Confirmei que a impressora aparece na lista',
        'Sei que, no Wi-Fi, ambos precisam estar na mesma rede',
        'Sei onde clicar pra adicionar uma impressora',
      ],
      dica: 'A impressora aparece mas está "offline"? Geralmente é só desligá-la, esperar 10 segundos e ligar de novo (e conferir o cabo/Wi-Fi). Esse "reiniciar" simples resolve uma quantidade enorme de travamentos.',
    },
    validacao: [
      'Sei as formas de conectar (USB e Wi-Fi)',
      'Encontro a impressora na lista do sistema',
      'Entendo o papel do driver',
      'Sei que o Wi-Fi exige a mesma rede',
      'Sei adicionar uma impressora nova',
    ],
  },

  'pc-impressao-3': {
    trilhaId: 'pc-impressao', numero: 3, titulo: 'Imprimir certo: a tela de impressão sem mistério',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Você aperta imprimir e saem 30 páginas quando você queria 1. Ou sai cortado, ou em branco. A tela de impressão tem opções que evitam tudo isso — e olhar pra ela 10 segundos antes de clicar economiza papel, tinta e raiva.',
      conceito: {
        titulo: 'A tela de impressão é seu painel de controle',
        texto: 'Ao apertar Ctrl+P (ou Arquivo → Imprimir), abre a tela de impressão. Nela você define o essencial antes de gastar papel. IMPRESSORA: confira que é a certa (não "Salvar como PDF" por engano). PÁGINAS: tudo, ou só algumas (ex.: "1-3" ou "2,5"). CÓPIAS: quantas vezes imprimir. E há uma PRÉVIA na tela que mostra como vai sair. Olhar a prévia e ajustar páginas/cópias antes de clicar em "Imprimir" evita 90% dos desperdícios.',
      },
      estrutura: {
        titulo: 'As opções que importam',
        partes: [
          { simbolo: '🖨️', desc: 'Impressora: confirme a correta (não o "Salvar como PDF").' },
          { simbolo: '📄', desc: 'Páginas: "Todas" ou intervalo ("1-3", "2,5") pra imprimir só o que precisa.' },
          { simbolo: '🔢', desc: 'Cópias: quantas vezes o documento vai sair.' },
          { simbolo: '👁️', desc: 'Prévia: a imagem que mostra como vai sair. Olhe antes de imprimir.' },
        ],
      },
      exemplo: {
        titulo: 'Evitando desperdício',
        celulas: [
          { ref: 'Só preciso da página 1', valor: 'Páginas: "1" (não "Todas")' },
          { ref: 'Quero 3 vias', valor: 'Cópias: 3' },
          { ref: 'Saiu cortado antes?', valor: 'Olhe a prévia e ajuste antes de clicar' },
          { ref: 'Saiu PDF, não papel', valor: 'Conferir: impressora certa selecionada' },
        ],
        formula: 'Impressora certa + páginas + cópias + prévia → imprimir sem erro',
        resultado: 'Sai exatamente o que você quer, na quantidade certa.',
        comentario: 'O hábito que economiza muito: SEMPRE olhe a prévia e confira "Páginas" e "Cópias" antes de clicar em Imprimir. Dois segundos de conferência evitam montanhas de papel desperdiçado e cartucho gasto à toa.',
      },
      vocabulario: [
        { palavra: 'Prévia', def: 'A imagem na tela que mostra como o documento vai sair impresso.' },
        { palavra: 'Intervalo de páginas', def: 'Definir só algumas páginas pra imprimir (ex.: "1-3").' },
        { palavra: 'Cópias', def: 'Quantas vezes o documento será impresso.' },
      ],
      chave: [
        'Ctrl+P abre a tela de impressão',
        'Confira impressora, páginas e cópias antes de clicar',
        'A prévia mostra como vai sair — sempre olhe',
      ],
      porque: 'Saber usar a tela de impressão evita desperdício de papel e tinta (que custam caro) e a frustração de imprimir errado. É controle total sobre o que sai no papel.',
    },
    pratica: {
      instrucao: 'Vamos explorar a tela de impressão com calma, sem necessariamente gastar papel.',
      passos: [
        'Abra um documento de várias páginas e aperte Ctrl+P',
        'Confira o campo da impressora: é a impressora física, não "Salvar como PDF"?',
        'Mude "Páginas" pra um intervalo (ex.: "1-2") e veja a prévia mudar',
        'Ajuste o número de cópias e observe a prévia',
        'Se quiser imprimir de verdade, confirme tudo e clique em "Imprimir"',
      ],
    },
    desafio: {
      cenario: 'Na tela de impressão de um documento com várias páginas, configure pra imprimir só um intervalo específico (ex.: páginas 1 a 2), defina 1 cópia e use a prévia pra confirmar antes de qualquer impressão.',
      requisitos: [
        'Abri a tela de impressão com Ctrl+P',
        'Confirmei que a impressora selecionada é a correta',
        'Configurei um intervalo de páginas específico',
        'Ajustei o número de cópias',
        'Usei a prévia pra conferir antes de imprimir',
      ],
      dica: 'Antes de imprimir um documento longo de verdade, faça um "teste de 1 página": imprima só a primeira pra ver se o papel, a orientação e a tinta estão bons. Depois mande o resto com segurança.',
    },
    validacao: [
      'Abro a tela de impressão (Ctrl+P)',
      'Confiro a impressora correta',
      'Defino intervalo de páginas',
      'Ajusto o número de cópias',
      'Uso a prévia antes de imprimir',
    ],
  },

  'pc-impressao-4': {
    trilhaId: 'pc-impressao', numero: 4, titulo: 'Frente e verso, colorido e economia de tinta',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Imprimir nos dois lados do papel corta o gasto pela metade. Imprimir em escala de cinza economiza a tinta colorida cara. Pequenos ajustes na hora de imprimir geram uma economia enorme ao longo do tempo — e ainda são mais ecológicos.',
      conceito: {
        titulo: 'Ajustes simples, economia grande',
        texto: 'A tela de impressão tem opções de economia que muita gente ignora. FRENTE E VERSO (duplex): imprime nos dois lados da folha, usando metade do papel — algumas impressoras fazem sozinhas, outras pedem que você vire a pilha. PRETO E BRANCO / ESCALA DE CINZA: imprime sem usar a tinta colorida (que é a mais cara), ideal pra textos. QUALIDADE "RASCUNHO": usa menos tinta pra documentos internos. E imprimir VÁRIAS PÁGINAS POR FOLHA reduz ainda mais o papel. Combinando esses ajustes, você gasta muito menos.',
      },
      estrutura: {
        titulo: 'As opções de economia',
        partes: [
          { simbolo: '🔄', desc: 'Frente e verso (duplex): usa metade do papel.' },
          { simbolo: '⚫', desc: 'Preto e branco / cinza: poupa a tinta colorida (a mais cara).' },
          { simbolo: '📝', desc: 'Qualidade "rascunho": menos tinta pra documentos internos.' },
          { simbolo: '🗂️', desc: 'Várias páginas por folha: 2 ou 4 numa só, pra rascunhos.' },
        ],
      },
      exemplo: {
        titulo: 'Imprimindo com economia',
        celulas: [
          { ref: 'Apostila de 20 páginas', valor: 'Frente e verso → só 10 folhas' },
          { ref: 'Texto pra ler', valor: 'Escala de cinza → poupa tinta colorida' },
          { ref: 'Rascunho interno', valor: 'Qualidade "rascunho" → menos tinta' },
          { ref: 'Conferir um texto longo', valor: '2 páginas por folha → metade do papel' },
        ],
        formula: 'Duplex + cinza + rascunho = economia de papel e tinta',
        resultado: 'Documentos impressos gastando muito menos recursos.',
        comentario: 'A tinta de impressora está entre os líquidos mais caros por mililitro que existem. Por isso, imprimir em escala de cinza sempre que a cor não for necessária é uma das economias domésticas mais inteligentes — e quase ninguém aproveita.',
      },
      vocabulario: [
        { palavra: 'Frente e verso (duplex)', def: 'Imprimir nos dois lados da folha, economizando papel.' },
        { palavra: 'Escala de cinza', def: 'Imprimir em tons de cinza, sem usar a tinta colorida.' },
        { palavra: 'Qualidade rascunho', def: 'Modo que usa menos tinta, pra documentos internos.' },
      ],
      chave: [
        'Frente e verso usa metade do papel',
        'Escala de cinza poupa a tinta colorida (a mais cara)',
        'Modo rascunho e várias páginas por folha economizam mais',
      ],
      porque: 'Papel e tinta custam dinheiro real e recursos do planeta. Dominar esses ajustes reduz muito o gasto de quem imprime — e é um hábito consciente que faz diferença no orçamento.',
    },
    pratica: {
      instrucao: 'Na tela de impressão, localize e teste as opções de economia (sem precisar imprimir de verdade pra explorar).',
      passos: [
        'Abra a tela de impressão (Ctrl+P) de um documento',
        'Procure a opção de "Frente e verso" / "Imprimir nos dois lados"',
        'Procure "Cor" e mude pra "Preto e branco" / "Escala de cinza"',
        'Veja se há opção de "Qualidade" e o modo "Rascunho"',
        'Procure "Páginas por folha" e experimente "2 por folha" na prévia',
      ],
    },
    desafio: {
      cenario: 'Configure uma impressão econômica: ative frente e verso (se a impressora permitir), escolha escala de cinza e localize o modo rascunho. Saiba explicar quanto papel e tinta cada ajuste economiza.',
      requisitos: [
        'Localizei e ativei a opção frente e verso',
        'Mudei a impressão pra escala de cinza',
        'Encontrei a opção de qualidade "rascunho"',
        'Testei "várias páginas por folha" na prévia',
        'Sei explicar a economia de cada ajuste',
      ],
      dica: 'Impressora sem frente e verso automático? Dá pra fazer manual: imprima as páginas ímpares, vire a pilha de papel e imprima as pares. Dá um pouco de trabalho, mas economiza papel do mesmo jeito.',
    },
    validacao: [
      'Ativo frente e verso pra poupar papel',
      'Imprimo em escala de cinza pra poupar tinta',
      'Uso o modo rascunho quando dá',
      'Sei pôr várias páginas por folha',
      'Imprimo de forma econômica e consciente',
    ],
  },

  'pc-impressao-5': {
    trilhaId: 'pc-impressao', numero: 5, titulo: 'Copiar e digitalizar na multifuncional',
    tempoTotal: 9, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Aquela impressora com tampa em cima faz muito mais que imprimir: ela copia papéis na hora e digitaliza documentos pra virar arquivo no computador. Dois recursos que substituem uma viagem à papelaria.',
      conceito: {
        titulo: 'Copiar e digitalizar: o scanner em ação',
        texto: 'A multifuncional tem um VIDRO sob a tampa onde você coloca o documento virado pra baixo. COPIAR é o mais simples: você posiciona o papel, aperta o botão de cópia e sai uma cópia em papel na hora — sem nem ligar o computador. DIGITALIZAR (escanear) transforma o papel num arquivo digital (PDF ou imagem) que vai pro computador — útil pra guardar ou enviar documentos. Ambos usam o mesmo vidro; a diferença é o destino: cópia sai em papel, digitalização vira arquivo.',
      },
      estrutura: {
        titulo: 'Copiar e digitalizar passo a passo',
        partes: [
          { simbolo: '🪟', desc: 'Posicionar: documento virado pra baixo no vidro, no canto marcado.' },
          { simbolo: '📋', desc: 'Copiar: botão de cópia → sai em papel na hora.' },
          { simbolo: '💻', desc: 'Digitalizar: vira arquivo (PDF) que vai pro computador.' },
          { simbolo: '🎚️', desc: 'Ajustes: número de cópias, cor/PB, tamanho do papel.' },
        ],
      },
      exemplo: {
        titulo: 'Cópia x digitalização',
        celulas: [
          { ref: 'Preciso de 2 cópias em papel', valor: 'Copiar: posiciona, define 2, aperta' },
          { ref: 'Quero o RG em PDF', valor: 'Digitalizar: vira arquivo no computador' },
          { ref: 'Onde posicionar', valor: 'No vidro, virado pra baixo, no canto da seta' },
          { ref: 'Destino', valor: 'Cópia = papel · Digitalização = arquivo' },
        ],
        formula: 'Vidro (pra baixo) → copiar (papel) ou digitalizar (arquivo)',
        resultado: 'Você copia e digitaliza sem sair de casa.',
        comentario: 'Atenção ao posicionar: o documento vai virado PRA BAIXO (texto contra o vidro), alinhado ao canto onde há uma setinha ou marca. Posicionar torto ou pra cima é o erro mais comum — gera cópia cortada ou em branco.',
      },
      vocabulario: [
        { palavra: 'Copiar', def: 'Reproduzir um documento em papel na hora, sem usar o computador.' },
        { palavra: 'Digitalizar', def: 'Transformar um papel em arquivo digital (PDF ou imagem) no computador.' },
        { palavra: 'Vidro do scanner', def: 'A superfície sob a tampa onde se posiciona o documento.' },
      ],
      chave: [
        'Posicione o documento virado pra baixo, no canto marcado',
        'Copiar sai em papel; digitalizar vira arquivo',
        'A cópia nem precisa do computador ligado',
      ],
      porque: 'Copiar e digitalizar resolvem necessidades constantes (cópia de documento, enviar comprovante por e-mail) sem custo de papelaria. É autonomia total com a máquina que você já tem.',
    },
    pratica: {
      instrucao: 'Se você tem acesso a uma multifuncional, vamos copiar e digitalizar um documento simples.',
      passos: [
        'Abra a tampa e posicione um papel virado pra baixo, alinhado ao canto marcado',
        'Para copiar: feche a tampa e aperte o botão de cópia (ajuste a quantidade)',
        'Para digitalizar: use o botão "Digitalizar" ou o app da impressora no PC',
        'Escolha o destino da digitalização (computador, PDF, e-mail)',
        'Confira o resultado: a cópia no papel ou o arquivo no computador',
      ],
    },
    desafio: {
      cenario: 'Faça uma cópia em papel de um documento e, separadamente, digitalize outro documento gerando um arquivo (PDF) no computador. Confirme os dois resultados: a cópia física e o arquivo digital.',
      requisitos: [
        'Posicionei o documento corretamente no vidro (pra baixo)',
        'Fiz uma cópia em papel usando o botão de cópia',
        'Digitalizei um documento gerando um arquivo',
        'Escolhi o destino correto da digitalização',
        'Confirmei a cópia física e o arquivo digital',
      ],
      dica: 'Sem multifuncional em casa? Lembre que o celular também digitaliza muito bem (você viu na trilha de PDF). Pra cópias em papel, papelarias resolvem — mas digitalizar você já consegue fazer sozinho pelo celular.',
    },
    validacao: [
      'Posiciono o documento certo no vidro',
      'Faço cópias em papel',
      'Digitalizo documentos pro computador',
      'Sei a diferença entre copiar e digitalizar',
      'Escolho o destino da digitalização',
    ],
  },

  'pc-impressao-6': {
    trilhaId: 'pc-impressao', numero: 6, titulo: 'Resolver os erros mais comuns de impressão',
    tempoTotal: 10, xp: 60, vertente: 'computador',
    aula: {
      gancho: 'Papel preso, fila travada, "sem tinta" mas tem tinta, impressão saindo riscada. Os erros de impressora assustam, mas 9 em cada 10 têm soluções simples que você mesmo faz. Hoje você vira o socorrista da sua impressora.',
      conceito: {
        titulo: 'A maioria dos erros tem solução simples',
        texto: 'Os problemas mais comuns e suas soluções: PAPEL PRESO (atolamento) — desligue, abra a tampa e puxe o papel DEVAGAR, no sentido da saída, sem rasgar. FILA TRAVADA — vários documentos empilhados que não saem; cancele a fila e reimprima. "SEM TINTA" mas parece ter — agite o cartucho, limpe os contatos ou rode a limpeza dos bicos. IMPRESSÃO RISCADA/FALHADA — use a função "limpar cabeçotes" no software da impressora. E o velho confiável: DESLIGAR E LIGAR a impressora resolve travamentos misteriosos.',
      },
      estrutura: {
        titulo: 'Os erros e o que fazer',
        partes: [
          { simbolo: '📄', desc: 'Papel preso: desligue, abra e puxe devagar no sentido da saída.' },
          { simbolo: '⏸️', desc: 'Fila travada: cancele os documentos parados e reimprima.' },
          { simbolo: '🖋️', desc: 'Riscada/falhada: rode "limpar cabeçotes/bicos" no software.' },
          { simbolo: '🔄', desc: 'Misterioso: desligar e ligar a impressora resolve muita coisa.' },
        ],
      },
      exemplo: {
        titulo: 'Socorro rápido',
        celulas: [
          { ref: 'Papel atolado', valor: 'Desligar → puxar devagar → ligar de novo' },
          { ref: 'Mandei 5x e nada saiu', valor: 'Cancelar a fila → reimprimir 1 vez' },
          { ref: 'Sai com riscos brancos', valor: 'Software → "limpar cabeçotes"' },
          { ref: '"Offline" do nada', valor: 'Reiniciar impressora e checar conexão' },
        ],
        formula: 'Identificar o erro → solução simples → testar de novo',
        resultado: 'Você resolve os problemas comuns sem chamar ninguém.',
        comentario: 'Regra de ouro pra papel preso: NUNCA puxe com força nem contra o sentido — você pode rasgar e deixar pedaços que pioram tudo. Desligue, abra, e puxe devagar acompanhando o caminho natural do papel.',
      },
      vocabulario: [
        { palavra: 'Atolamento', def: 'Papel preso dentro da impressora; deve ser removido com cuidado.' },
        { palavra: 'Fila de impressão', def: 'A lista de documentos esperando pra imprimir; pode travar.' },
        { palavra: 'Limpar cabeçotes', def: 'Função que desentope os bicos de tinta pra corrigir falhas.' },
      ],
      chave: [
        'Papel preso: desligue e puxe devagar, sem rasgar',
        'Fila travada: cancele e reimprima',
        'Riscado: limpe os cabeçotes; misterioso: desligue e ligue',
      ],
      porque: 'Saber resolver os erros comuns te poupa tempo, dinheiro (sem chamar técnico à toa) e estresse. A impressora deixa de ser uma fonte de pânico e vira uma máquina que você domina.',
    },
    pratica: {
      instrucao: 'Vamos conhecer onde ficam as ferramentas de solução, mesmo que sua impressora esteja funcionando bem.',
      passos: [
        'No Windows, abra "Impressoras e scanners" e clique na sua impressora',
        'Abra a "fila de impressão" e veja onde se cancelam documentos parados',
        'Procure no software/app da impressora as opções de manutenção',
        'Localize "limpar cabeçotes" / "alinhar" / "verificar bicos"',
        'Saiba o caminho pra abrir a tampa e acessar a área de papel preso (com a impressora desligada)',
      ],
    },
    desafio: {
      cenario: 'Mostre que sabe socorrer a impressora: localize a fila de impressão e como cancelá-la, encontre a função de limpeza de cabeçotes e saiba o procedimento correto pra remover papel preso (desligar, puxar devagar).',
      requisitos: [
        'Encontrei a fila de impressão e sei cancelar documentos',
        'Localizei a função de limpar cabeçotes/bicos',
        'Sei o procedimento certo pra papel preso (desligar, puxar devagar)',
        'Sei que reiniciar a impressora resolve muitos travamentos',
        'Sei resolver os erros comuns sem ajuda externa',
      ],
      dica: 'Antes de gastar dinheiro com cartucho novo no aviso de "pouca tinta", teste: muitas impressoras seguem imprimindo bem por semanas após o alerta. E sempre rode a "limpeza de bicos" antes de concluir que o cartucho acabou.',
    },
    validacao: [
      'Removo papel preso com segurança',
      'Cancelo a fila de impressão travada',
      'Limpo os cabeçotes quando sai riscado',
      'Reinicio a impressora pra resolver travamentos',
      'Resolvo os erros comuns sozinho',
    ],
  },

  'pc-impressao-7': {
    trilhaId: 'pc-impressao', numero: 7, titulo: 'Imprimir do celular e em lugares públicos',
    tempoTotal: 8, xp: 50, vertente: 'computador',
    aula: {
      gancho: 'Aquele boleto chegou no celular e você precisa imprimir, mas não está no computador. Ou não tem impressora em casa. Sem problema: dá pra imprimir direto do celular e usar serviços de impressão públicos com segurança.',
      conceito: {
        titulo: 'Imprimir sem computador e sem impressora própria',
        texto: 'O celular imprime direto em impressoras Wi-Fi: no menu de "Compartilhar" ou "Imprimir" do documento, ele encontra a impressora na mesma rede (Android usa o "Serviço de Impressão"; iPhone usa o "AirPrint"). Sem impressora em casa, há os SERVIÇOS PÚBLICOS: papelarias, lan houses, bibliotecas e até os Correios imprimem arquivos que você leva num pen drive ou envia por e-mail/WhatsApp. O cuidado de segurança: ao imprimir documentos pessoais em local público, apague o arquivo do computador de lá e nunca deixe sua conta aberta.',
      },
      estrutura: {
        titulo: 'Os caminhos pra imprimir',
        partes: [
          { simbolo: '📱', desc: 'Do celular: menu "Imprimir/Compartilhar" → impressora Wi-Fi.' },
          { simbolo: '🏪', desc: 'Serviços públicos: papelaria, lan house, biblioteca, Correios.' },
          { simbolo: '💾', desc: 'Leve no pen drive ou envie por e-mail/WhatsApp ao local.' },
          { simbolo: '🛡️', desc: 'Segurança: apague o arquivo de lá e não deixe conta aberta.' },
        ],
      },
      exemplo: {
        titulo: 'Imprimindo de onde estiver',
        celulas: [
          { ref: 'Boleto no celular, impressora Wi-Fi', valor: 'Compartilhar → Imprimir → escolher a impressora' },
          { ref: 'Sem impressora em casa', valor: 'Pen drive ou e-mail → papelaria/lan house' },
          { ref: 'Documento pessoal em local público', valor: 'Apague o arquivo do PC de lá após imprimir' },
          { ref: 'iPhone', valor: 'AirPrint encontra impressoras compatíveis na rede' },
        ],
        formula: 'Celular Wi-Fi OU pen drive/e-mail → serviço público (com cuidado)',
        resultado: 'Você imprime qualquer coisa, esteja onde estiver.',
        comentario: 'Imprimiu um documento com seus dados (CPF, conta) numa lan house? Apague o arquivo do computador de lá depois e esvazie a lixeira. Deixar documentos pessoais na máquina pública é um risco que muita gente esquece.',
      },
      vocabulario: [
        { palavra: 'AirPrint', def: 'Recurso do iPhone pra imprimir em impressoras Wi-Fi compatíveis.' },
        { palavra: 'Serviço de impressão', def: 'No Android, o recurso que conecta o celular a impressoras.' },
        { palavra: 'Serviço público de impressão', def: 'Papelaria, lan house ou biblioteca que imprime seus arquivos.' },
      ],
      chave: [
        'O celular imprime direto em impressoras Wi-Fi',
        'Sem impressora? Papelaria/lan house imprimem do pen drive ou e-mail',
        'Em local público, apague seus arquivos e não deixe conta aberta',
      ],
      porque: 'Nem sempre você tem computador e impressora à mão, mas as necessidades (boleto, documento, comprovante) não esperam. Saber imprimir do celular e em lugares públicos com segurança te tira de qualquer apuro.',
    },
    pratica: {
      instrucao: 'Vamos explorar a impressão pelo celular e planejar o uso de serviços públicos.',
      passos: [
        'No celular, abra um documento ou foto e toque em "Compartilhar" ou no menu (3 pontos)',
        'Procure a opção "Imprimir" e veja se aparece alguma impressora na rede',
        'Se você tem impressora Wi-Fi, conecte o celular à mesma rede e teste',
        'Sem impressora: salve um arquivo num pen drive ou prepare-o pra enviar por e-mail',
        'Pense no passo de segurança: apagar o arquivo após imprimir em local público',
      ],
    },
    desafio: {
      cenario: 'Demonstre dois caminhos: localize a opção de imprimir pelo celular (e teste, se tiver impressora Wi-Fi) e planeje como imprimiria um documento num serviço público (pen drive ou e-mail), incluindo o cuidado de apagar o arquivo depois.',
      requisitos: [
        'Encontrei a opção de imprimir no menu do celular',
        'Sei conectar o celular à mesma rede da impressora Wi-Fi',
        'Sei como levar um arquivo a um serviço público (pen drive/e-mail)',
        'Planejei o passo de apagar o arquivo do PC público após imprimir',
        'Sei imprimir mesmo sem computador ou impressora própria',
      ],
      dica: 'Vai imprimir numa lan house? Envie o arquivo por e-mail pra você mesmo e abra lá pela conta, ou leve num pen drive. Ao terminar, apague o download, esvazie a lixeira e saia da sua conta — três passos que protegem seus dados.',
    },
    validacao: [
      'Imprimo direto do celular em impressora Wi-Fi',
      'Sei usar serviços públicos de impressão',
      'Levo arquivos por pen drive ou e-mail',
      'Apago meus arquivos de PCs públicos',
      'Imprimo de qualquer lugar com segurança',
    ],
  },

  'pc-impressao-8': {
    trilhaId: 'pc-impressao', numero: 8, titulo: 'Projeto: imprima e organize um documento oficial',
    tempoTotal: 16, xp: 110, vertente: 'computador',
    aula: {
      gancho: 'Hora de juntar tudo numa tarefa real e útil: imprimir um documento oficial do jeito certo, fazer uma cópia e digitalizar pra guardar. É o fluxo completo da papelada da vida adulta — e você vai fazer sozinho, com economia e segurança.',
      conceito: {
        titulo: 'O ciclo completo do documento: imprimir, copiar, guardar',
        texto: 'Um documento oficial bem cuidado passa por um ciclo. Você IMPRIME a versão necessária (com os ajustes certos de páginas e economia), faz uma CÓPIA de segurança se precisar entregar uma e guardar outra, e DIGITALIZA pra ter uma versão no computador (backup que nunca se perde nem amassa). Esse fluxo une tudo que você aprendeu — tela de impressão, economia, cópia, digitalização — numa rotina que resolve qualquer papelada com profissionalismo.',
      },
      estrutura: {
        titulo: 'As etapas do projeto',
        partes: [
          { simbolo: '🖨️', desc: 'Imprimir com os ajustes certos (páginas, frente/verso, economia).' },
          { simbolo: '📋', desc: 'Copiar uma via, se precisar entregar uma e guardar outra.' },
          { simbolo: '💻', desc: 'Digitalizar pra ter um backup digital do documento.' },
          { simbolo: '🗂️', desc: 'Guardar: o papel arquivado e o arquivo numa pasta clara.' },
        ],
      },
      exemplo: {
        titulo: 'Cuidando de um documento oficial',
        celulas: [
          { ref: 'Imprimir um requerimento', valor: 'Páginas certas, escala de cinza, prévia conferida' },
          { ref: 'Preciso entregar e guardar', valor: 'Fazer 1 cópia de segurança' },
          { ref: 'Backup digital', valor: 'Digitalizar → PDF na pasta "Documentos"' },
          { ref: 'Organização', valor: 'Papel arquivado + arquivo nomeado com clareza' },
        ],
        formula: 'Imprimir certo + copiar + digitalizar + guardar → documento sob controle',
        resultado: 'Um documento oficial impresso, copiado e arquivado digitalmente.',
        comentario: 'Sempre tenha o backup digital (PDF) dos seus documentos importantes. Papel rasga, molha e se perde; o arquivo, bem guardado e com cópia na nuvem, dura pra sempre e você reimprime quando quiser.',
      },
      vocabulario: [
        { palavra: 'Via', def: 'Cada cópia de um documento (ex.: "duas vias": uma entrega, uma guarda).' },
        { palavra: 'Backup digital', def: 'Cópia digital de um documento, guardada como arquivo (PDF).' },
        { palavra: 'Arquivar', def: 'Guardar o documento de forma organizada, pra encontrar depois.' },
      ],
      chave: [
        'Imprima com os ajustes certos de páginas e economia',
        'Faça cópia quando precisar entregar e guardar',
        'Digitalize pra ter um backup digital que nunca se perde',
      ],
      porque: 'Cuidar bem de documentos oficiais — imprimir certo, ter cópias e backups — evita perrengues sérios (perder um documento único) e te deixa preparado pra qualquer exigência burocrática.',
    },
    pratica: {
      instrucao: 'Escolha um documento (real ou de treino) e execute o ciclo completo. Use documento sem dados sensíveis se for só treino.',
      passos: [
        'Escolha o documento e abra a tela de impressão (Ctrl+P)',
        'Configure páginas, frente e verso e escala de cinza conforme a necessidade',
        'Confira a prévia e imprima',
        'Faça uma cópia do documento na multifuncional (ou planeje onde copiar)',
        'Digitalize o documento gerando um PDF e salve numa pasta clara',
        'Confira tudo: o impresso, a cópia e o arquivo digital guardado',
      ],
    },
    desafio: {
      cenario: 'Execute o ciclo completo de um documento oficial: imprima com ajustes econômicos e corretos, faça uma cópia de segurança e digitalize gerando um backup em PDF, salvo numa pasta organizada com nome claro.',
      requisitos: [
        'Imprimi o documento com os ajustes certos (páginas/economia)',
        'Conferi a prévia antes de imprimir',
        'Fiz uma cópia de segurança do documento',
        'Digitalizei gerando um backup em PDF',
        'Guardei o arquivo numa pasta clara, com nome identificável',
      ],
      dica: 'Para documentos realmente importantes (diploma, certidão), guarde o PDF digitalizado também na nuvem (Google Drive/OneDrive). Assim, mesmo que o computador quebre ou o papel se perca, você sempre terá uma via segura.',
    },
    validacao: [
      'Imprimo documentos com os ajustes corretos',
      'Faço cópias de segurança quando preciso',
      'Digitalizo pra ter backup digital',
      'Guardo os arquivos de forma organizada',
      'Domino o ciclo completo da papelada',
    ],
  },
};
