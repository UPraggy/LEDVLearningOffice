// ============================================================================
// CONTEÚDO — Wi-Fi, Redes e Conexões Seguras (sec-redes)
// módulo Segurança · vertente "ambos"
// Wi-Fi público, VPN, roteador de casa, Bluetooth, HTTPS/cadeado, evil twin,
// QR codes e links curtos. Autoral, foco no Brasil.
// ============================================================================

export const SEC_REDES = {
  'sec-redes-1': {
    trilhaId: 'sec-redes', numero: 1, titulo: 'Wi-Fi público: o risco de redes abertas',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Aquele Wi-Fi grátis do shopping, do aeroporto ou do café é uma mão na roda — mas redes abertas têm riscos que você não vê. Entender o perigo é o que permite usar essas redes sem entregar seus dados.',
      conceito: {
        titulo: 'Numa rede aberta, você não sabe quem mais está ouvindo',
        texto: 'Wi-Fi público (sem senha ou com senha compartilhada por todos) é conveniente, mas você não controla quem o administra nem quem mais está conectado. Os riscos: alguém na mesma rede pode tentar interceptar o que você faz, redes falsas podem se passar por legítimas, e páginas mal protegidas podem expor seus dados. Isso não quer dizer "nunca use" — quer dizer "use com consciência". Para navegação comum e leitura, o risco é baixo, especialmente em sites com cadeado (HTTPS). Mas evite fazer coisas sensíveis (banco, compras com cartão, login importante) em Wi-Fi público, ou faça-as protegido (com os cuidados das próximas missões). A regra: trate toda rede aberta como "ambiente público".',
      },
      estrutura: {
        titulo: 'Por que a rede aberta preocupa',
        partes: [
          { simbolo: '👂', desc: 'Você não sabe quem administra nem quem mais está conectado.' },
          { simbolo: '🎭', desc: 'Redes falsas podem se passar por legítimas.' },
          { simbolo: '🏦', desc: 'Evite banco, cartão e logins importantes em rede aberta.' },
          { simbolo: '🌐', desc: 'Navegação comum em sites com cadeado tem risco baixo.' },
        ],
      },
      exemplo: {
        titulo: 'O que fazer (e o que adiar) no Wi-Fi grátis',
        celulas: [
          { ref: 'Tranquilo', valor: 'Ler notícias, mapas, redes — em sites com cadeado' },
          { ref: 'Adie', valor: 'Acessar banco, pagar com cartão, login crítico' },
          { ref: 'Alternativa', valor: 'Usar os dados do celular pra o que é sensível' },
          { ref: 'Mentalidade', valor: 'Rede aberta = ambiente público' },
        ],
        formula: 'Rede aberta = ambiente público: nada sensível sem proteção',
        resultado: 'Você aproveita o Wi-Fi grátis sem expor o que importa.',
        comentario: 'Para algo sensível e rápido, usar os dados móveis do próprio celular costuma ser mais seguro que um Wi-Fi público desconhecido. A conveniência não vale o risco numa transação bancária.',
      },
      vocabulario: [
        { palavra: 'Wi-Fi público', def: 'Rede sem fio aberta ou de senha compartilhada por todos.' },
        { palavra: 'Interceptar', def: 'Alguém capturar o que trafega na rede.' },
        { palavra: 'Dados móveis', def: 'A internet da operadora no seu chip, alternativa ao Wi-Fi.' },
      ],
      chave: [
        'Em rede aberta você não controla quem está ouvindo',
        'Evite banco, cartão e logins críticos no Wi-Fi público',
        'Trate toda rede aberta como ambiente público',
      ],
      porque: 'Entender o risco do Wi-Fi público permite usá-lo com consciência: aproveitar pra navegação comum e adiar (ou proteger) o que é sensível. É a base pras técnicas de uso seguro das próximas missões.',
    },
    pratica: {
      instrucao: 'Ajuste sua postura em redes abertas.',
      passos: [
        'Liste o que você costuma fazer em Wi-Fi público',
        'Separe o que é sensível (banco, cartão, login importante)',
        'Combine: o sensível só protegido ou nos dados móveis',
        'Repare se os sites que você usa têm cadeado (HTTPS)',
        'Adote a mentalidade: rede aberta = ambiente público',
      ],
    },
    desafio: {
      cenario: 'Você usa Wi-Fi público com consciência, sem expor dados sensíveis.',
      requisitos: [
        'Sei que não controlo quem está na rede aberta',
        'Evito banco e cartão em Wi-Fi público',
        'Uso dados móveis pro que é sensível',
        'Confiro o cadeado dos sites',
        'Trato rede aberta como ambiente público',
      ],
      dica: 'Bancos e apps sérios já protegem bem suas conexões, mas a rede aberta soma riscos. Na dúvida sobre fazer algo sensível, espere chegar numa rede confiável ou use os dados móveis.',
    },
    validacao: [
      'Sei o risco da rede aberta',
      'Evito banco/cartão no Wi-Fi público',
      'Uso dados móveis pro sensível',
      'Confiro o cadeado',
      'Rede aberta = ambiente público',
    ],
  },

  'sec-redes-2': {
    trilhaId: 'sec-redes', numero: 2, titulo: 'Como usar Wi-Fi público com segurança',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Dá pra usar Wi-Fi público com muito mais segurança com alguns ajustes simples — sem precisar entender de tecnologia. São hábitos que reduzem o risco a quase nada pro uso do dia a dia.',
      conceito: {
        titulo: 'Pequenos cuidados que tornam a rede aberta bem mais segura',
        texto: 'Para usar Wi-Fi público com segurança: confirme o nome exato da rede com o estabelecimento (pra não cair numa falsa); só use sites com cadeado (HTTPS); não deixe o aparelho conectar automaticamente em redes abertas; desligue o compartilhamento de arquivos enquanto estiver nela; e faça o que for sensível protegido (dados móveis ou VPN, na próxima missão). Ao terminar, "esqueça a rede" pra o aparelho não reconectar sozinho depois. Esses passos cortam a maioria dos riscos práticos. O resumo: confirme a rede, prefira HTTPS, não conecte no automático, e deixe o sensível pra um canal protegido.',
      },
      estrutura: {
        titulo: 'Checklist do Wi-Fi público seguro',
        partes: [
          { simbolo: '✅', desc: 'Confirme o nome exato da rede com o local.' },
          { simbolo: '🔒', desc: 'Só sites com cadeado (HTTPS).' },
          { simbolo: '🚫', desc: 'Desative conexão automática e compartilhamento de arquivos.' },
          { simbolo: '🧹', desc: 'Ao sair, "esqueça a rede".' },
        ],
      },
      exemplo: {
        titulo: 'Conectando com cuidado',
        celulas: [
          { ref: 'Antes', valor: 'Perguntar o nome exato do Wi-Fi ao estabelecimento' },
          { ref: 'Durante', valor: 'Usar só sites com cadeado; sensível só protegido' },
          { ref: 'Ajuste', valor: 'Conexão automática e compartilhamento desligados' },
          { ref: 'Depois', valor: '"Esquecer a rede" pra não reconectar sozinho' },
        ],
        formula: 'Confirmar + HTTPS + sem automático + esquecer = rede aberta segura',
        resultado: 'Você usa o Wi-Fi grátis com risco prático bem baixo.',
        comentario: 'Confirmar o nome exato da rede evita o golpe da rede falsa (que você verá adiante). Um nome quase igual ao oficial — com uma letra a mais ou a menos — é sinal de armadilha.',
      },
      vocabulario: [
        { palavra: 'HTTPS/cadeado', def: 'Conexão protegida com o site, indicada pelo cadeado.' },
        { palavra: 'Conexão automática', def: 'O aparelho se conecta sozinho a redes conhecidas/abertas.' },
        { palavra: '"Esquecer a rede"', def: 'Remover a rede salva pra não reconectar sem querer.' },
      ],
      chave: [
        'Confirme o nome exato da rede e use só sites com cadeado',
        'Desligue conexão automática e compartilhamento de arquivos',
        'Ao sair, "esqueça a rede"; o sensível, só protegido',
      ],
      porque: 'Esses cuidados simples transformam o Wi-Fi público de risco difuso em uso seguro pro dia a dia. Aplicados juntos, cortam a maioria das ameaças práticas sem exigir conhecimento técnico.',
    },
    pratica: {
      instrucao: 'Pratique o uso seguro de Wi-Fi público.',
      passos: [
        'Na próxima rede aberta, confirme o nome exato com o local',
        'Use só sites com cadeado enquanto conectado',
        'Desative a conexão automática a redes abertas no aparelho',
        'Desligue o compartilhamento de arquivos',
        'Ao terminar, mande o aparelho "esquecer a rede"',
      ],
    },
    desafio: {
      cenario: 'Você aplica o checklist de Wi-Fi público seguro sempre que usa uma rede aberta.',
      requisitos: [
        'Confirmo o nome exato da rede',
        'Uso só sites com cadeado',
        'Desativo conexão automática',
        'Desligo o compartilhamento de arquivos',
        'Ao sair, "esqueço a rede"',
      ],
      dica: 'Deixar a conexão automática a redes abertas desligada já evita que o aparelho entre sozinho em qualquer Wi-Fi aberto por aí — inclusive em redes falsas montadas pra te pegar.',
    },
    validacao: [
      'Confirmo o nome da rede',
      'Uso só sites com cadeado',
      'Desativo conexão automática',
      'Desligo compartilhamento',
      'Esqueço a rede ao sair',
    ],
  },

  'sec-redes-3': {
    trilhaId: 'sec-redes', numero: 3, titulo: 'VPN: o que é, quando ajuda (e quando não)',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'Você já viu mil anúncios de VPN prometendo "segurança total" e "anonimato". Parte é verdade, parte é exagero. Entender o que uma VPN faz de fato ajuda a decidir se vale pra você — e a não cair em promessas.',
      conceito: {
        titulo: 'A VPN cria um túnel protegido — útil, mas não mágico',
        texto: 'VPN (rede privada virtual) cria um "túnel" que protege sua conexão e esconde seu tráfego de quem está na mesma rede — por isso é especialmente útil em Wi-Fi público. Ela também oculta seu endereço de rede dos sites e pode dar mais privacidade. Mas VPN não é mágica: não te deixa anônimo de verdade, não protege contra golpes, phishing ou senhas fracas, e exige confiar em quem fornece a VPN (já que seu tráfego passa por ela). Escolha um fornecedor sério e com boa reputação; desconfie de VPNs "grátis" que vivem de vender seus dados. Em resumo: VPN ajuda bastante em redes públicas e na privacidade, mas não substitui os outros cuidados de segurança.',
      },
      estrutura: {
        titulo: 'O que a VPN faz e não faz',
        partes: [
          { simbolo: '🛡️', desc: 'Faz: protege a conexão em Wi-Fi público e oculta o tráfego.' },
          { simbolo: '🙅', desc: 'Não faz: não te torna anônimo nem barra golpes/phishing.' },
          { simbolo: '🤝', desc: 'Você passa a confiar no fornecedor da VPN — escolha um sério.' },
          { simbolo: '💸', desc: 'Desconfie de VPN "grátis": muitas vivem de vender seus dados.' },
        ],
      },
      exemplo: {
        titulo: 'Quando a VPN vale a pena',
        celulas: [
          { ref: 'Boa ideia', valor: 'Usar VPN confiável em Wi-Fi público' },
          { ref: 'Privacidade', valor: 'Ocultar o tráfego de quem está na rede' },
          { ref: 'Não resolve', valor: 'Phishing, senha fraca, golpe — a VPN não pega' },
          { ref: 'Cuidado', valor: 'VPN "grátis" pode ser pior que não usar' },
        ],
        formula: 'VPN = túnel protegido, não escudo contra golpes',
        resultado: 'Você usa VPN onde ela ajuda, sem confiar demais nela.',
        comentario: 'A pergunta-chave da VPN é "em quem eu confio": seu tráfego deixa de passar "aberto" na rede e passa pelo fornecedor. Por isso reputação importa tanto — e VPN grátis suspeita é furada.',
      },
      vocabulario: [
        { palavra: 'VPN', def: 'Túnel que protege e oculta sua conexão; útil em redes públicas.' },
        { palavra: 'Endereço de rede (IP)', def: 'Identificação da sua conexão, que a VPN pode ocultar.' },
        { palavra: 'Fornecedor de VPN', def: 'Empresa por onde seu tráfego passa — precisa ser confiável.' },
      ],
      chave: [
        'VPN protege a conexão em Wi-Fi público e dá mais privacidade',
        'VPN não te torna anônimo nem barra golpes e phishing',
        'Escolha fornecedor sério; desconfie de VPN "grátis"',
      ],
      porque: 'Entender a VPN de verdade evita os dois extremos: ignorar uma ferramenta útil ou confiar nela como se fosse um escudo total. Ela ajuda em redes públicas e na privacidade, mas não dispensa os demais cuidados.',
    },
    pratica: {
      instrucao: 'Decida o papel da VPN pra você.',
      passos: [
        'Entenda: VPN protege a conexão, não barra golpes',
        'Avalie se você usa muito Wi-Fi público (onde ela mais ajuda)',
        'Se for usar, pesquise um fornecedor sério e bem avaliado',
        'Evite VPNs "grátis" de origem duvidosa',
        'Lembre: VPN não substitui senhas fortes, 2FA e desconfiança',
      ],
    },
    desafio: {
      cenario: 'Você sabe o que a VPN faz e não faz, e decide conscientemente se e quando usá-la.',
      requisitos: [
        'Sei que VPN protege a conexão, não contra golpes',
        'Sei que ela não me torna anônimo de verdade',
        'Entendo que confio no fornecedor da VPN',
        'Desconfio de VPNs grátis duvidosas',
        'Sei que VPN não substitui os outros cuidados',
      ],
      dica: 'Se você quase não usa Wi-Fi público e cuida bem de senhas e 2FA, talvez nem precise de VPN no dia a dia. Ela é uma ferramenta pra cenários específicos, não obrigação pra todos.',
    },
    validacao: [
      'Sei o que a VPN protege',
      'Sei que ela não me anonimiza',
      'Entendo a confiança no fornecedor',
      'Desconfio de VPN grátis',
      'Sei que não substitui o resto',
    ],
  },

  'sec-redes-4': {
    trilhaId: 'sec-redes', numero: 4, titulo: 'Proteja seu Wi-Fi de casa (o roteador)',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: 'O roteador é a porta de entrada da internet na sua casa — e muita gente nunca mexeu nele desde que foi instalado, mantendo a senha que veio de fábrica. Alguns ajustes deixam sua rede doméstica bem mais segura.',
      conceito: {
        titulo: 'Sua rede de casa também precisa de senhas fortes e cuidados',
        texto: 'O roteador controla quem acessa sua internet e seus dispositivos. Pontos importantes: troque a senha de administrador padrão (a que dá acesso às configurações do roteador — não confunda com a senha do Wi-Fi); use uma senha de Wi-Fi forte e a proteção mais moderna disponível (evite redes sem senha); mantenha o roteador atualizado; e, se possível, crie uma rede separada pra visitas e para dispositivos inteligentes, isolando-os dos seus aparelhos principais. Desconfie também de quem pede pra "entrar no seu roteador" remotamente — golpistas usam isso. Um roteador bem configurado protege todos os aparelhos conectados a ele.',
      },
      estrutura: {
        titulo: 'Roteador mais seguro',
        partes: [
          { simbolo: '🔑', desc: 'Troque a senha de administrador padrão do roteador.' },
          { simbolo: '📶', desc: 'Senha de Wi-Fi forte + proteção moderna (nunca rede aberta).' },
          { simbolo: '🔄', desc: 'Mantenha o roteador atualizado.' },
          { simbolo: '👥', desc: 'Rede de visitantes separada pra convidados e dispositivos smart.' },
        ],
      },
      exemplo: {
        titulo: 'Duas senhas diferentes do roteador',
        celulas: [
          { ref: 'Senha do Wi-Fi', valor: 'A que conecta os aparelhos à rede' },
          { ref: 'Senha de admin', valor: 'A que entra nas configurações do roteador' },
          { ref: 'Erro comum', valor: 'Deixar a senha de admin padrão de fábrica' },
          { ref: 'Ajuste', valor: 'Trocar ambas por senhas fortes e diferentes' },
        ],
        formula: 'Admin trocada + Wi-Fi forte + atualizado = rede de casa segura',
        resultado: 'Sua rede e os aparelhos conectados ficam protegidos.',
        comentario: 'A senha de administrador padrão costuma ser conhecida e a mesma pra modelos iguais. Trocá-la impede que alguém entre nas configurações e controle sua rede.',
      },
      vocabulario: [
        { palavra: 'Roteador', def: 'Aparelho que distribui a internet pela sua casa.' },
        { palavra: 'Senha de administrador', def: 'A que dá acesso às configurações do roteador (diferente da do Wi-Fi).' },
        { palavra: 'Rede de visitantes', def: 'Rede separada pra convidados, isolada dos seus aparelhos.' },
      ],
      chave: [
        'Troque a senha de administrador padrão do roteador',
        'Use senha de Wi-Fi forte e proteção moderna; nunca rede aberta',
        'Mantenha o roteador atualizado e use rede de visitantes',
      ],
      porque: 'O roteador protege (ou expõe) todos os aparelhos da casa. Trocar senhas padrão, usar proteção forte e manter atualizado evita que estranhos acessem sua rede e seus dispositivos — uma blindagem que cobre a casa toda.',
    },
    pratica: {
      instrucao: 'Reforce a segurança da sua rede doméstica.',
      passos: [
        'Acesse as configurações do seu roteador',
        'Troque a senha de administrador se ainda for a padrão',
        'Confirme uma senha de Wi-Fi forte e proteção moderna',
        'Verifique se há atualização de firmware disponível',
        'Se possível, ative uma rede separada pra visitas',
      ],
    },
    desafio: {
      cenario: 'Você configura o roteador com senhas fortes, proteção moderna e rede de visitantes.',
      requisitos: [
        'Troquei a senha de administrador padrão',
        'Uso senha de Wi-Fi forte e proteção moderna',
        'Mantenho o roteador atualizado',
        'Tenho (ou conheço) a rede de visitantes',
        'Desconfio de quem pede acesso remoto ao roteador',
      ],
      dica: 'Dispositivos inteligentes (TVs, câmeras, assistentes) costumam ser menos seguros. Colocá-los numa rede de visitantes separada impede que um deles, se comprometido, alcance seu computador e celular.',
    },
    validacao: [
      'Troquei a senha de admin',
      'Wi-Fi forte e proteção moderna',
      'Roteador atualizado',
      'Conheço a rede de visitantes',
      'Desconfio de acesso remoto',
    ],
  },

  'sec-redes-5': {
    trilhaId: 'sec-redes', numero: 5, titulo: 'Bluetooth e conexões: feche o que não usa',
    tempoTotal: 9, xp: 50, vertente: 'ambos',
    aula: {
      gancho: 'Bluetooth, Wi-Fi, localização, compartilhamento: cada conexão ligada é uma porta a mais. Manter abertas só as que você usa é um hábito simples que reduz riscos e ainda economiza bateria.',
      conceito: {
        titulo: 'Conexão aberta sem uso é porta aberta à toa',
        texto: 'Quanto mais conexões e recursos seu aparelho mantém ativos, mais "superfície" ele oferece. Bluetooth ligado o tempo todo, compartilhamento de arquivos sempre disponível, localização ativa pra todos os apps: nada disso precisa ficar aberto quando você não está usando. O hábito é simples: ligue quando for usar, desligue quando terminar. Cuidado especial com pedidos de conexão/pareamento que aparecem do nada — recuse o que você não iniciou. E desconfie de receber arquivos por Bluetooth ou compartilhamento de desconhecidos em locais públicos. Fechar o que não se usa reduz riscos, evita incômodos e ainda poupa bateria.',
      },
      estrutura: {
        titulo: 'Feche o que não está usando',
        partes: [
          { simbolo: '📶', desc: 'Bluetooth e Wi-Fi: ligue pra usar, desligue depois.' },
          { simbolo: '📤', desc: 'Compartilhamento de arquivos: deixe desativado por padrão.' },
          { simbolo: '🚫', desc: 'Recuse pedidos de pareamento/conexão que você não iniciou.' },
          { simbolo: '🔋', desc: 'Bônus: fechar conexões sem uso poupa bateria.' },
        ],
      },
      exemplo: {
        titulo: 'O pedido de conexão do nada',
        celulas: [
          { ref: 'Situação', valor: 'Aparece um pedido de pareamento que você não pediu' },
          { ref: 'Ação certa', valor: 'Recusar — você não iniciou' },
          { ref: 'Arquivo de estranho', valor: 'Não aceitar receber por Bluetooth/compartilhamento' },
          { ref: 'Hábito', valor: 'Manter aberto só o que está em uso' },
        ],
        formula: 'Aberto só em uso + recusar o que não iniciei = menos portas',
        resultado: 'Menos superfície de risco e mais bateria.',
        comentario: 'Em locais públicos, o compartilhamento aberto pode receber arquivos ou pedidos indesejados de estranhos. Mantê-lo restrito a contatos ou desligado evita esse incômodo.',
      },
      vocabulario: [
        { palavra: 'Pareamento', def: 'A conexão inicial entre dois dispositivos por Bluetooth.' },
        { palavra: 'Superfície de risco', def: 'O conjunto de portas/recursos abertos que podem ser explorados.' },
        { palavra: 'Compartilhamento', def: 'Recurso pra enviar/receber arquivos entre aparelhos próximos.' },
      ],
      chave: [
        'Mantenha abertas só as conexões que você usa',
        'Recuse pedidos de pareamento/conexão que você não iniciou',
        'Cuidado com arquivos de estranhos em locais públicos',
      ],
      porque: 'Fechar conexões sem uso é higiene digital simples: reduz a superfície de risco, evita pedidos e arquivos indesejados e ainda economiza bateria. Um hábito leve com retorno em segurança e praticidade.',
    },
    pratica: {
      instrucao: 'Revise as conexões do seu aparelho.',
      passos: [
        'Desligue Bluetooth e Wi-Fi quando não estiver usando',
        'Confira se o compartilhamento de arquivos está desativado',
        'Ajuste o compartilhamento pra "só contatos" ou desligado',
        'Combine: recusar pareamentos/conexões que você não iniciou',
        'Não aceite arquivos de desconhecidos em locais públicos',
      ],
    },
    desafio: {
      cenario: 'Você mantém abertas só as conexões em uso e recusa pedidos não iniciados.',
      requisitos: [
        'Mantenho abertas só as conexões que uso',
        'Deixo o compartilhamento desativado por padrão',
        'Recuso pareamentos que não iniciei',
        'Não recebo arquivos de estranhos',
        'Sei que isso reduz risco e poupa bateria',
      ],
      dica: 'Não precisa virar paranoia: pode deixar o que você usa direto (como o fone Bluetooth) conectado. A ideia é não manter aberto o que fica meses sem uso.',
    },
    validacao: [
      'Abro só conexões em uso',
      'Compartilhamento desativado',
      'Recuso pareamentos não iniciados',
      'Não recebo de estranhos',
      'Sei o benefício do hábito',
    ],
  },

  'sec-redes-6': {
    trilhaId: 'sec-redes', numero: 6, titulo: 'O cadeado e o HTTPS: o que ele garante (e o que não)',
    tempoTotal: 10, xp: 70, vertente: 'ambos',
    aula: {
      gancho: '"Tem o cadeadinho, então é seguro." Esse é um dos maiores mal-entendidos da internet. O cadeado garante uma coisa importante — mas não garante que o site é honesto. Saber a diferença evita golpes.',
      conceito: {
        titulo: 'O cadeado protege o caminho, não a intenção do site',
        texto: 'O cadeado (HTTPS) significa que a conexão entre você e o site é protegida: o que você envia (senha, dados do cartão) trafega de forma que terceiros na rede não conseguem ler. Isso é essencial e você deve evitar enviar dados em sites sem cadeado. Mas atenção ao mal-entendido: o cadeado NÃO garante que o site é legítimo ou honesto. Sites de golpe também têm cadeado — ele só protege o caminho, não a intenção de quem está do outro lado. Ou seja: cadeado é necessário, mas não é suficiente. Você ainda precisa confirmar que está no site certo (endereço correto, sem erros de digitação) e que confia nele antes de inserir dados.',
      },
      estrutura: {
        titulo: 'O que o cadeado diz e não diz',
        partes: [
          { simbolo: '🔒', desc: 'Diz: a conexão com o site está protegida (ninguém lê no caminho).' },
          { simbolo: '🚫', desc: 'Não diz: que o site é legítimo ou honesto.' },
          { simbolo: '🎣', desc: 'Sites de golpe também têm cadeado.' },
          { simbolo: '🔍', desc: 'Confirme o endereço correto antes de inserir dados.' },
        ],
      },
      exemplo: {
        titulo: 'Cadeado + endereço errado = golpe',
        celulas: [
          { ref: 'Tem cadeado', valor: 'Conexão protegida ✓' },
          { ref: 'Mas o endereço', valor: 'é "banco-seguro-promo.xyz" (não o oficial)' },
          { ref: 'Conclusão', valor: 'Cadeado não salva: o site é falso' },
          { ref: 'Regra', valor: 'Cadeado necessário + endereço certo + confiança' },
        ],
        formula: 'Cadeado protege o caminho; você confirma o destino',
        resultado: 'Você não confunde "conexão segura" com "site confiável".',
        comentario: 'Liga isso à trilha de navegação: golpistas tiram cadeado de graça e o usam pra parecer legítimos. O cadeado é o mínimo, não a prova de que o site é de confiança.',
      },
      vocabulario: [
        { palavra: 'HTTPS', def: 'Conexão protegida com o site, indicada pelo cadeado.' },
        { palavra: 'Certificado', def: 'O que ativa o cadeado; protege a conexão, não atesta honestidade.' },
        { palavra: 'Site legítimo', def: 'O site verdadeiro e honesto — o cadeado sozinho não prova isso.' },
      ],
      chave: [
        'O cadeado protege a conexão, não a honestidade do site',
        'Sites de golpe também têm cadeado',
        'Confirme o endereço correto antes de inserir dados',
      ],
      porque: 'Desfazer o mito do cadeado evita um erro perigoso: confiar num site golpista só porque ele "tem o cadeadinho". Você passa a tratar o cadeado como o mínimo necessário e a confirmar o endereço e a confiança antes de qualquer dado.',
    },
    pratica: {
      instrucao: 'Calibre sua leitura do cadeado.',
      passos: [
        'Lembre: cadeado = conexão protegida, não site confiável',
        'Evite enviar dados em sites SEM cadeado',
        'Sempre confira o endereço completo antes de inserir dados',
        'Procure erros de digitação no endereço (sinal de golpe)',
        'Combine: cadeado + endereço certo + confiança',
      ],
    },
    desafio: {
      cenario: 'Você entende o que o cadeado garante e confirma o endereço antes de inserir dados.',
      requisitos: [
        'Sei que o cadeado protege a conexão',
        'Sei que ele não prova honestidade',
        'Não envio dados em sites sem cadeado',
        'Confirmo o endereço completo antes de inserir dados',
        'Procuro erros de digitação no endereço',
      ],
      dica: 'O golpe favorito é um endereço quase igual ao oficial, com cadeado, mas com uma letra trocada ou um final diferente. Ler o endereço com calma desmonta a maioria desses sites falsos.',
    },
    validacao: [
      'Cadeado = conexão protegida',
      'Cadeado não prova honestidade',
      'Não envio dados sem cadeado',
      'Confirmo o endereço completo',
      'Procuro erros no endereço',
    ],
  },

  'sec-redes-7': {
    trilhaId: 'sec-redes', numero: 7, titulo: 'Redes falsas e o "gêmeo do mal"',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Você chega no café e vê duas redes com o mesmo nome do estabelecimento. Qual é a verdadeira? Golpistas criam redes falsas com o nome de lugares reais pra você se conectar nelas — é o golpe do "gêmeo do mal".',
      conceito: {
        titulo: 'Uma rede pode usar o nome de um lugar confiável e ser uma armadilha',
        texto: 'O "gêmeo do mal" (evil twin) é uma rede Wi-Fi falsa que copia o nome de uma rede legítima (do café, hotel, aeroporto) pra te enganar. Se você se conecta nela, quem a controla pode tentar interceptar o que você faz ou te levar a páginas falsas. Como se proteger: confirme com o estabelecimento o nome exato da rede oficial; desconfie de redes abertas com nomes genéricos ou idênticos pedindo dados demais; desconfie de páginas de "login" que pedem informações estranhas (cadastro com CPF, cartão) pra liberar o Wi-Fi; e não se conecte automaticamente. Se algo parecer estranho ao conectar, desconfie. Na dúvida, use seus dados móveis em vez de arriscar numa rede que talvez seja falsa.',
      },
      estrutura: {
        titulo: 'Reconhecendo a rede falsa',
        partes: [
          { simbolo: '👯', desc: 'Duas redes com o mesmo nome: confirme qual é a oficial.' },
          { simbolo: '📝', desc: 'Página de login pedindo dados demais (CPF, cartão) é alerta.' },
          { simbolo: '🚫', desc: 'Não se conecte automaticamente a redes abertas.' },
          { simbolo: '📱', desc: 'Na dúvida, use os dados móveis em vez de arriscar.' },
        ],
      },
      exemplo: {
        titulo: 'Qual rede é a verdadeira?',
        celulas: [
          { ref: 'Você vê', valor: '"Cafe_Livre" e "Cafe Livre" — quase iguais' },
          { ref: 'Faça', valor: 'Perguntar ao café o nome EXATO da rede' },
          { ref: 'Alerta', valor: 'Login pedindo CPF e cartão pra "liberar" o Wi-Fi' },
          { ref: 'Saída segura', valor: 'Na dúvida, usar os dados móveis' },
        ],
        formula: 'Confirmar o nome oficial + desconfiar de login estranho = evita o gêmeo do mal',
        resultado: 'Você não se conecta na rede falsa montada pra te pegar.',
        comentario: 'Wi-Fi de verdade raramente pede CPF e cartão pra "liberar acesso". Uma página dessas, ainda mais numa rede que você não confirmou, é um forte sinal de armadilha.',
      },
      vocabulario: [
        { palavra: 'Gêmeo do mal (evil twin)', def: 'Rede falsa que copia o nome de uma rede legítima.' },
        { palavra: 'Página cativa', def: 'Tela de login que aparece ao entrar numa rede; pode ser falsificada.' },
        { palavra: 'Nome da rede (SSID)', def: 'O nome que identifica o Wi-Fi — fácil de copiar.' },
      ],
      chave: [
        'Redes falsas copiam o nome de lugares confiáveis',
        'Confirme o nome oficial e desconfie de logins que pedem dados demais',
        'Na dúvida, use os dados móveis em vez de arriscar',
      ],
      porque: 'O gêmeo do mal explora a confiança no nome da rede. Confirmar o nome oficial e desconfiar de páginas de login estranhas evita conectar numa rede montada por golpistas — uma ameaça invisível pra quem não a conhece.',
    },
    pratica: {
      instrucao: 'Aprenda a evitar redes falsas.',
      passos: [
        'Ao ver redes parecidas, confirme o nome oficial com o local',
        'Desconfie de páginas de login pedindo CPF, cartão ou dados demais',
        'Não permita conexão automática a redes abertas',
        'Se algo parecer estranho ao conectar, desconecte',
        'Na dúvida, prefira seus dados móveis',
      ],
    },
    desafio: {
      cenario: 'Você reconhece o golpe do gêmeo do mal e evita se conectar a redes falsas.',
      requisitos: [
        'Sei que redes falsas copiam nomes legítimos',
        'Confirmo o nome oficial com o estabelecimento',
        'Desconfio de logins que pedem dados demais',
        'Não me conecto automaticamente a redes abertas',
        'Na dúvida, uso os dados móveis',
      ],
      dica: 'Junte com a missão do cadeado: numa rede falsa, você pode acabar numa página falsa "com cadeado". Confirmar a rede E o endereço protege contra as duas pontas do golpe.',
    },
    validacao: [
      'Sei o golpe do gêmeo do mal',
      'Confirmo o nome oficial',
      'Desconfio de logins invasivos',
      'Sem conexão automática',
      'Na dúvida, dados móveis',
    ],
  },

  'sec-redes-8': {
    trilhaId: 'sec-redes', numero: 8, titulo: 'QR Codes e links curtos: para onde isso leva?',
    tempoTotal: 9, xp: 60, vertente: 'ambos',
    aula: {
      gancho: 'Um QR Code colado por cima do original num cartaz, um link curto que não revela o destino: você aponta a câmera ou clica e pode ir parar num site falso sem perceber. O destino que você não vê é justamente o risco.',
      conceito: {
        titulo: 'Antes de seguir, descubra para onde o QR ou o link leva',
        texto: 'QR Codes e links encurtados escondem o endereço de destino — e golpistas se aproveitam disso. Há o "quishing": QR Codes falsos colados sobre os verdadeiros (em cartazes, máquinas, contas de pagamento) que levam a sites de golpe ou a cobranças falsas. E links curtos que parecem inofensivos podem apontar pra qualquer lugar. Como se proteger: ao escanear um QR, confira o endereço que aparece antes de abrir e desconfie se ele não bate com o esperado; suspeite de QR Codes em lugares públicos que parecem colados por cima; e, com links curtos, prefira não clicar em desconhecidos — passe o cursor ou use a pré-visualização pra ver o destino. A regra: o destino tem que fazer sentido antes de você seguir.',
      },
      estrutura: {
        titulo: 'Antes de escanear ou clicar',
        partes: [
          { simbolo: '🔍', desc: 'Ao escanear, confira o endereço antes de abrir.' },
          { simbolo: '🩹', desc: 'Desconfie de QR colado por cima do original.' },
          { simbolo: '💳', desc: 'Cuidado redobrado com QR de pagamento — confira o destinatário.' },
          { simbolo: '🔗', desc: 'Links curtos: veja o destino antes; evite os de desconhecidos.' },
        ],
      },
      exemplo: {
        titulo: 'O QR trocado',
        celulas: [
          { ref: 'Cenário', valor: 'QR num cartaz parece colado sobre outro' },
          { ref: 'Você escaneia', valor: 'Aparece um endereço estranho antes de abrir' },
          { ref: 'Ação certa', valor: 'Não abrir — o destino não faz sentido' },
          { ref: 'Pagamento', valor: 'Em QR de pagamento, conferir nome do recebedor' },
        ],
        formula: 'Ver o destino antes = não cair em QR/link falso',
        resultado: 'Você só segue quando o endereço faz sentido.',
        comentario: 'Em pagamentos por QR (como o PIX), o aparelho mostra quem vai receber antes de confirmar. Sempre confira esse nome — é a última chance de pegar um QR trocado por golpista.',
      },
      vocabulario: [
        { palavra: 'Quishing', def: 'Golpe com QR Code falso que leva a sites/cobranças fraudulentas.' },
        { palavra: 'Link curto', def: 'Endereço encurtado que esconde o destino real.' },
        { palavra: 'Pré-visualização', def: 'Ver pra onde um link/QR leva antes de abrir.' },
      ],
      chave: [
        'QR Codes e links curtos escondem o destino — aí está o risco',
        'Confira o endereço antes de abrir; desconfie de QR colado por cima',
        'Em QR de pagamento, confira sempre quem vai receber',
      ],
      porque: 'QR Codes e links curtos são cada vez mais usados — e cada vez mais alvo de golpes. Conferir o destino antes de seguir desarma o quishing e os links falsos, protegendo contra sites fraudulentos e pagamentos errados.',
    },
    pratica: {
      instrucao: 'Pratique conferir o destino antes de seguir.',
      passos: [
        'Ao escanear um QR, leia o endereço antes de abrir',
        'Desconfie de QR Codes colados por cima em lugares públicos',
        'Em QR de pagamento, confira o nome de quem vai receber',
        'Com links curtos, veja o destino antes de clicar',
        'Evite clicar em links curtos de remetentes desconhecidos',
      ],
    },
    desafio: {
      cenario: 'Você confere o destino de QR Codes e links curtos antes de abrir ou pagar.',
      requisitos: [
        'Confiro o endereço de um QR antes de abrir',
        'Desconfio de QR colado por cima do original',
        'Confiro o recebedor em QR de pagamento',
        'Vejo o destino de links curtos antes de clicar',
        'Evito links curtos de desconhecidos',
      ],
      dica: 'No restaurante, no estacionamento, na conta de luz: QR de pagamento é alvo comum de troca. O hábito de conferir o nome do recebedor antes de confirmar evita pagar a um golpista.',
    },
    validacao: [
      'Confiro o endereço do QR',
      'Desconfio de QR colado por cima',
      'Confiro o recebedor no pagamento',
      'Vejo o destino de links curtos',
      'Evito links curtos de estranhos',
    ],
  },

  'sec-redes-9': {
    trilhaId: 'sec-redes', numero: 9, titulo: 'Projeto: conexões seguras onde quer que você esteja',
    tempoTotal: 18, xp: 120, vertente: 'ambos',
    aula: {
      gancho: 'Em casa, na rua, no café, no aeroporto: você se conecta o tempo todo. Esta missão junta tudo num conjunto de hábitos que mantém suas conexões seguras em qualquer lugar — sem precisar pensar muito.',
      conceito: {
        titulo: 'Um punhado de hábitos cobre todas as suas conexões',
        texto: 'Conexão segura não é uma configuração única: é um conjunto de hábitos que você aplica conforme o lugar. Em casa: roteador com senhas fortes e atualizado. Em redes públicas: confirmar o nome da rede, usar só sites com cadeado, deixar o sensível pros dados móveis (ou VPN confiável), e não conectar no automático. Sempre: conferir o endereço (cadeado não basta), fechar conexões sem uso, e checar o destino de QR Codes e links antes de seguir. Reúna isso num "modo de conexão" mental que liga sozinho quando você troca de ambiente. Com esses hábitos, você navega protegido em qualquer rede — conhecida ou não.',
      },
      estrutura: {
        titulo: 'Hábitos por ambiente',
        partes: [
          { simbolo: '🏠', desc: 'Em casa: roteador com senhas fortes e atualizado.' },
          { simbolo: '☕', desc: 'Em público: confirmar a rede, HTTPS, sensível só protegido.' },
          { simbolo: '🔍', desc: 'Sempre: conferir endereço, destino de QR/links.' },
          { simbolo: '🔌', desc: 'Sempre: fechar conexões sem uso.' },
        ],
      },
      exemplo: {
        titulo: 'Seu modo de conexão',
        celulas: [
          { ref: 'Casa', valor: 'Roteador seguro ✓ · rede de visitantes ✓' },
          { ref: 'Público', valor: 'Rede confirmada ✓ · HTTPS ✓ · sensível protegido ✓' },
          { ref: 'Sempre', valor: 'Endereço conferido ✓ · QR/links checados ✓' },
          { ref: 'Higiene', valor: 'Bluetooth/compartilhamento fechados sem uso ✓' },
        ],
        formula: 'Hábitos por ambiente = conexão segura em qualquer lugar',
        resultado: 'Você se conecta protegido em casa, na rua e em viagem.',
        comentario: 'O segredo é a automação mental: cada ambiente dispara seus hábitos sem esforço. Com o tempo, confirmar a rede e conferir o endereço viram tão naturais quanto olhar antes de atravessar a rua.',
      },
      vocabulario: [
        { palavra: 'Modo de conexão', def: 'O conjunto de hábitos que você aplica conforme o ambiente.' },
        { palavra: 'Higiene de conexões', def: 'Manter abertas só as conexões que você usa.' },
        { palavra: 'Sensível', def: 'Banco, cartão e logins importantes — só em canal protegido.' },
      ],
      chave: [
        'Conexão segura é um conjunto de hábitos por ambiente',
        'Em casa: roteador forte; em público: confirmar rede + HTTPS',
        'Sempre: conferir endereço/QR/links e fechar conexões sem uso',
      ],
      porque: 'Este projeto reúne toda a trilha num "modo de conexão" prático que se ajusta ao lugar. Com esses hábitos automáticos, você mantém suas conexões seguras em casa, na rua e em viagem — sem virar refém da tecnologia nem do medo.',
    },
    pratica: {
      instrucao: 'Monte seu modo de conexão segura.',
      passos: [
        'Em casa: confirme roteador com senhas fortes e atualizado',
        'Em público: confirmar rede, usar HTTPS, sensível só protegido',
        'Sempre: conferir o endereço (cadeado não basta)',
        'Sempre: checar destino de QR Codes e links',
        'Sempre: fechar Bluetooth/compartilhamento sem uso',
        'Pratique até virar automático ao trocar de ambiente',
      ],
    },
    desafio: {
      cenario: 'Você aplica hábitos de conexão segura adequados a cada ambiente, automaticamente.',
      requisitos: [
        'Mantenho o roteador de casa seguro',
        'Em público, confirmo a rede e uso HTTPS',
        'Deixo o sensível pra canal protegido',
        'Confiro endereço e destino de QR/links',
        'Fecho conexões sem uso',
      ],
      dica: 'Você fechou a trilha de redes. Junte com as outras de segurança: senhas, 2FA, golpes do PIX e do WhatsApp, privacidade e blindagem do aparelho formam, com esta, uma defesa completa.',
    },
    validacao: [
      'Roteador de casa seguro',
      'Em público: rede confirmada + HTTPS',
      'Sensível em canal protegido',
      'Confiro endereço e QR/links',
      'Fecho conexões sem uso',
    ],
  },
};
