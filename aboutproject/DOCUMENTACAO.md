# Escritório — Documentação Completa do App

> App de qualificação digital para o público 40+. Duas frentes de aprendizado
> (**computador** e **celular**), conteúdo 100% escrito (sem vídeo), progresso
> salvo localmente (localStorage) com exportação/importação por arquivo.
>
> Este documento é a referência única do app: descreve **o que já existe**, **como
> funciona** e **todo o conteúdo planejado** (as 17 trilhas com todas as missões).
> Use como fonte de verdade para continuar o desenvolvimento.

---

## Índice

1. [Conceito e público](#1-conceito-e-público)
2. [Princípios de design](#2-princípios-de-design)
3. [Arquitetura e arquivos](#3-arquitetura-e-arquivos)
4. [Stack e dependências](#4-stack-e-dependências)
5. [Design tokens](#5-design-tokens)
6. [Modelo de dados](#6-modelo-de-dados)
7. [Armazenamento (localStorage + export/import)](#7-armazenamento)
8. [Navegação e rotas](#8-navegação-e-rotas)
9. [Telas](#9-telas)
10. [Sistema de vertentes (computador / celular / ambos)](#10-sistema-de-vertentes)
11. [Estrutura de uma missão](#11-estrutura-de-uma-missão)
12. [Gamificação (XP, níveis, selos, streak)](#12-gamificação)
13. [MAPA DE CONTEÚDO — todas as trilhas e missões](#13-mapa-de-conteúdo)
14. [Estado atual: pronto vs pendente](#14-estado-atual)
15. [Backlog de funcionalidades](#15-backlog-de-funcionalidades)
16. [PWA e deploy](#16-pwa-e-deploy)

---

## 1. Conceito e público

**Metáfora central:** um "Escritório" virtual. A pessoa começa como **Estagiário** e é
promovida conforme aprende — uma progressão de carreira que dá sentido ao avanço.
Não há ranking nem competição (adultos preferem metas próprias e feedback claro).

**Público-alvo:** pessoas 40+ que já sabem o básico (Word, pesquisar no Google,
usam bastante o celular e redes sociais), mas querem **qualificação para o mercado
de trabalho** e **autonomia digital na vida geral** (banco, Gov.br, saúde, segurança).
Não é curso para iniciante absoluto: parte do básico e leva ao nível profissional.

**Duas frentes (vertentes):**
- **Computador** → escritório, criação, trabalho (Office, Excel, e-mail, LinkedIn, IA).
- **Celular** → vida digital, serviços e segurança (WhatsApp, PIX, Gov.br, SUS, Maps).
- **Ambos** → temas que valem para os dois (segurança, comunicação, projeto final).

**Diferenciais:**
- Conteúdo escrito rico (gancho → conceito → exemplo simulado → glossário → pontos-chave → "por que importa").
- "Chefe virtual" discreto: aparece só como notificação de tarefa (não invasivo).
- Cada trilha entrega algo real que vira **portfólio** (planilha, currículo, perfil).

---

## 2. Princípios de design

Direção visual: **"Escritório Caloroso"** — distante do SaaS genérico, perto de um
caderno bonito de produtividade.

- **Paleta:** papel/creme (base), navy escuro (tinta), coral (ação), mostarda (conquista), verde-floresta (concluído).
- **Tipografia:** `Fraunces` (serifada, editorial) para títulos; `Plus Jakarta Sans` para corpo.
- **Acessibilidade 40+:** corpo de texto 17–18px, alto contraste, áreas de toque generosas, sem jargão, sem animação que distraia.
- **Responsivo:** mesmo código no celular (nav inferior) e no computador (nav lateral). Nada para instalar — abre no navegador.

---

## 3. Arquitetura e arquivos

```
escritorio-virtual/
├── escritorio-app.jsx     # App React completo (single-file, ~1150 linhas)
├── sistema-conteudo.md    # Guia de produção de conteúdo e roteiros
├── DOCUMENTACAO.md         # Este arquivo — referência completa
├── index.html              # Entry point da PWA (splash screen, registro do SW)
├── manifest.json           # Manifesto PWA (ícone, cores, atalhos)
├── service-worker.js       # Cache offline + base para push notifications
└── README.md               # Passo a passo para virar PWA e fazer deploy
```

> Nota: `sistema-conteudo.md` ainda menciona produção de **vídeo** em alguns trechos.
> A direção atual é **conteúdo escrito**. Ao revisar aquele arquivo, trate as seções
> de gravação/edição de vídeo como obsoletas e mantenha os padrões de **escrita**,
> **XP/níveis**, **selos**, **cenários do chefe** e **métricas**.

### Organização interna do `escritorio-app.jsx`

| Bloco | Linhas aprox. | Conteúdo |
|-------|---------------|----------|
| Imports | 1–9 | React + ícones lucide-react |
| `c` (DESIGN TOKENS) | 11–17 | Paleta de cores |
| `useStorage` | 19–37 | Hook de persistência com fallback |
| `TRILHAS` | 40–61 | As 17 trilhas (metadados) |
| `MISSOES_EXCEL`, `MISSOES_PIX` | 64–92 | Listas de missões detalhadas (2 trilhas) |
| `CONTEUDO_SOMA`, `CONTEUDO_PIX_GOLPES` | 94–242 | Conteúdo escrito completo de 2 missões |
| `INITIAL_PROGRESS`, `NIVEIS`, `XP_POR_NIVEL` | 244–252 | Estado inicial e tabelas de progressão |
| `GlobalStyle` | 255–278 | CSS (fontes, textura papel, animações) |
| Componentes compartilhados | 280–316 | `VertenteBadge`, `CareerStamp`, `ProgressBar`, `BackButton` |
| `HomeScreen` | 318–396 | Tela início |
| `TrilhasScreen` + `TrilhaCard` | 398–503 | Lista de trilhas com filtro |
| `TrilhaDetailScreen` | 505–575 | Detalhe da trilha (lista de missões) |
| `MissaoDetailScreen` + sub-componentes | 577–860 | Missão (4 abas: Aula/Prática/Desafio/Validação) |
| `ConfigScreen` | 862–987 | Exportar/importar/limpar progresso |
| `PerfilScreen` | 989–1050 | Perfil, selos |
| `App` (shell + roteamento) | 1052–1153 | Navegação, layout responsivo |

---

## 4. Stack e dependências

- **React** (hooks: `useState`, `useEffect`, `useRef`) — single-file component, `export default App`.
- **lucide-react** — biblioteca de ícones.
- **Tailwind CSS** — classes utilitárias (presumido no ambiente de render).
- **Fontes Google:** Fraunces + Plus Jakarta Sans (importadas via `@import` em `GlobalStyle`).
- Sem backend. Sem rotas de URL reais (estado interno via string `route`).

---

## 5. Design tokens

Objeto `c` em `escritorio-app.jsx:12`:

| Token | Hex | Uso |
|-------|-----|-----|
| `bg` | `#F5EFE6` | Fundo papel |
| `surface` | `#FBF7F0` | Cartões, superfícies |
| `ink` | `#1B2A4E` | Texto/tinta principal (navy) |
| `inkSoft` | `#3D4A6B` | Texto secundário |
| `coral` | `#E55934` | Ação, destaque, "atual" |
| `forest` | `#3D5A3D` | Concluído, sucesso |
| `mustard` | `#D4A574` | Conquista, "ambos", acentos |
| `text` | `#1A1A1A` | Texto corpo |
| `textSoft` | `#5A5A52` | Labels, legendas |
| `border` / `borderSoft` | `#E0D9C9` / `#EBE5D6` | Bordas |
| `mobile` | `#5B7C99` | Cor da vertente celular |
| `desktop` | `#1B2A4E` | Cor da vertente computador |

---

## 6. Modelo de dados

### `progress` (estado raiz, persistido)

```js
{
  user: {
    nome: 'Maria',
    xp: 1240,
    nivelNum: 2,                 // índice 1-based de NIVEIS
    streak: 7,                   // dias seguidos
    ultimaVisita: '2026-05-23'   // YYYY-MM-DD
  },
  missoesCompletas: ['pc-excel-1', 'pc-excel-2', ...],  // IDs no formato `${trilhaId}-${missaoId}`
  selos: ['primeira-missao', 'streak-7', 'comunicador', 'calculista'],
  preferencias: { vertenteFiltro: 'todas' }  // 'todas' | 'computador' | 'celular'
}
```

### Trilha (item de `TRILHAS`)

```js
{
  id: 'pc-excel',          // prefixo identifica vertente: pc- / mob- / amb-
  vertente: 'computador',  // 'computador' | 'celular' | 'ambos'
  nome: 'Excel & Sheets',
  desc: 'Planilhas que se calculam sozinhas',
  total: 14,               // nº de missões da trilha
  cor: c.coral,
  icone: Sheet,            // componente lucide
  ordem: 3                 // ordem dentro da vertente
}
```

### Missão (item de `MISSOES_*`)

```js
{ id: 5, titulo: '...', desc: '...', tempo: 15 /* min */, xp: 60 }
```

### Conteúdo de missão (`CONTEUDO_*`) — schema completo

```js
{
  trilhaId, numero, titulo, tempoTotal, xp, vertente,
  aula: {
    gancho,                              // string (frase-problema, em itálico)
    conceito: { titulo, texto },
    estrutura: { titulo, partes: [{ simbolo, desc }] },
    exemplo: {                           // "planilha simulada" ou "conversa simulada"
      titulo,
      celulas: [{ ref, valor }],
      formula, resultado, comentario
    },
    vocabulario: [{ palavra, def }],     // glossário "Palavras novas"
    chave: [string, string, string],     // 3 pontos pra lembrar
    porque                               // "por que isso importa"
  },
  pratica: { instrucao, passos: [string] },          // passo a passo guiado
  desafio: { cenario, requisitos: [string], dica },  // tarefa sozinho
  validacao: [string]                                // checklist final
}
```

---

## 7. Armazenamento

**Hook `useStorage(key, default)`** (`escritorio-app.jsx:20`):
- Lê de `window.localStorage` na inicialização; cai para `default` se indisponível.
- Grava em toda atualização com `try/catch` — se o navegador bloquear (ex.: preview de artefato), continua só em memória da sessão. **Funciona de verdade após o deploy da PWA.**
- Chave usada: `'escritorio-progresso'`.

**ConfigScreen** (`escritorio-app.jsx:862`) oferece:
- **Exportar:** gera `escritorio-progresso-YYYY-MM-DD.json` (Blob + download) com `{ app:'escritorio', versao:1, exportadoEm, ...progress }`. A pessoa salva no Drive/e-mail/WhatsApp como backup ou para migrar de aparelho.
- **Importar:** lê `.json`, valida `data.app === 'escritorio'`, restaura o progresso.
- **Limpar:** `window.confirm` → reseta para `INITIAL_PROGRESS`.

> Estratégia de persistência escolhida pelo usuário: **web/localStorage + arquivo**
> (sem servidor). Privacidade total: nada sai do aparelho.

---

## 8. Navegação e rotas

Sem React Router. Estado único `route` (string) em `App` (`escritorio-app.jsx:1061`),
com esquema de "deep link" por `:`:

| `route` | Tela |
|---------|------|
| `home` | HomeScreen |
| `trilhas` | TrilhasScreen |
| `trilha:<id>` | TrilhaDetailScreen |
| `trilha:<id>:missao:<n>` | MissaoDetailScreen |
| `perfil` | PerfilScreen |
| `config` | ConfigScreen |

Parsing em `escritorio-app.jsx:1063`. A aba ativa (`activeTab`) é derivada do prefixo
da rota: `trilha*` → "trilhas"; `perfil`/`config` → "perfil".

**Nav visível:** apenas 3 itens — Início, Trilhas, Perfil (`navItems`, linha 1053).
Config e telas de detalhe são acessadas por dentro (botão "Voltar" / "Configurações").

---

## 9. Telas

### 9.1 Início (`HomeScreen`)
- Saudação + nome em destaque editorial.
- Resumo das "duas frentes de hoje" (Excel + segurança PIX).
- **Carimbo de carreira** (`CareerStamp`) com nível atual + **streak** (chama de fogo).
- Barra de progresso até o próximo nível (XP atual vs `XP_POR_NIVEL`).
- **Missões do dia:** 2 cartões grandes (1 computador navy, 1 celular azul) que linkam direto para `trilha:pc-excel:missao:5` e `trilha:mob-pix:missao:7`.
- 3 estatísticas: missões concluídas, selos, XP total.

### 9.2 Trilhas (`TrilhasScreen`)
- Filtro de vertente (segmented control): **Tudo / Computador / Celular** — salvo em `preferencias.vertenteFiltro`.
- Lógica de filtro: "computador" mostra `computador` + `ambos`; "celular" mostra `celular` + `ambos`; "todas" agrupa por vertente com cabeçalho.
- `TrilhaCard`: ícone, nome, badge de vertente, descrição, barra de progresso `feito/total`, chevron.
- Progresso por trilha = contagem de `missoesCompletas` com prefixo `${trilhaId}-`.

### 9.3 Detalhe da trilha (`TrilhaDetailScreen`)
- Cabeçalho com badge, "X de Y missões", descrição, barra de progresso.
- Lista de missões com 3 estados: **concluída** (verde, check), **atual** (borda coral, tag "Atual"), **bloqueada** (cadeado, opacidade 50%, não clicável).
- Desbloqueio sequencial: missão `i` libera quando `i-1` está concluída.
- Hoje só `pc-excel` e `mob-pix` têm missões; demais mostram "Conteúdo dessa trilha em produção".

### 9.4 Missão (`MissaoDetailScreen`)
4 abas (stepper) navegáveis: **Aula → Prática → Desafio → Validação**.
- **Aula** (`AulaContent`): gancho em itálico → conceito → estrutura (símbolos explicados) → exemplo simulado (planilha OU conversa, conforme vertente) → glossário "Palavras novas" → "3 pontos pra lembrar" → "Por que isso importa".
- **Prática** (`PraticaContent`): instrução de abertura + passos numerados (faça junto).
- **Desafio** (`DesafioContent`): cenário realista + requisitos + dica de profissional.
- **Validação** (`ValidacaoContent`): checklist; ao marcar todos, habilita "Concluir e ganhar +XP". Concluir adiciona o ID a `missoesCompletas` e soma o XP.
- Conteúdo carregado por match: `pc-excel`+`5` → `CONTEUDO_SOMA`; `mob-pix`+`7` → `CONTEUDO_PIX_GOLPES`; senão "em produção".

### 9.5 Perfil (`PerfilScreen`)
- Avatar (inicial do nome), nível, carimbo de carreira.
- Estatísticas: XP total, selos, streak.
- Botão "Configurações e backup".
- **Coleção de selos**: grade; ganhos coloridos, não-ganhos esmaecidos.

### 9.6 Configurações (`ConfigScreen`)
Exportar / Importar / "Onde fica meu progresso?" / Recomeçar do zero. Ver seção 7.

---

## 10. Sistema de vertentes

Cada trilha tem `vertente`. A UI sinaliza com `VertenteBadge` (ícone + cor + rótulo):
- **Computador** → `Monitor`, cor `desktop` (navy).
- **Celular** → `Smartphone`, cor `mobile` (azul).
- **Ambos** → `Layers`, cor `mustard`.

A vertente também muda o **exemplo simulado** na Aula: computador renderiza uma
"planilha simulada"; celular renderiza uma "conversa simulada" (ex.: print de golpe).

---

## 11. Estrutura de uma missão

Toda missão segue 4 etapas (sem vídeo — tudo escrito):

1. **Aula** — leitura rica (gancho, conceito, exemplo visual simulado, glossário, pontos-chave, motivação para o mercado/vida).
2. **Prática guiada** — passo a passo numerado para fazer junto, no aparelho.
3. **Desafio** — tarefa sozinho, com cenário realista e requisitos checáveis.
4. **Validação** — checklist de autoavaliação que libera a conclusão e o XP.

Padrões de escrita (de `sistema-conteudo.md`, ainda válidos): tom direto e respeitoso,
sem "fácil/simples/obviamente"; verbos de comando ("Clique", "Digite", "Aperte");
vocabulário simplificado ("programa" não "software", "botão direito" não "right-click").

---

## 12. Gamificação

### XP por tipo de missão
| Tipo | Duração | XP |
|------|---------|-----|
| Conceito básico | 5–8 min | 30–40 |
| Conceito médio | 10–15 min | 50–70 |
| Conceito avançado | 15–20 min | 80–100 |
| Projeto final de trilha | 20–30 min | 100–150 |

### Níveis de carreira (`NIVEIS` + `XP_POR_NIVEL`)
| Nível | Cargo | XP acumulado |
|-------|-------|--------------|
| 1 | Estagiário | 0 |
| 2 | Assistente Júnior | 600 |
| 3 | Assistente Pleno | 2.000 |
| 4 | Analista | 4.500 |
| 5 | Analista Sênior | 8.000 |
| 6 | Coordenador | 13.000 |

Progressão acelera no início (sensação de avanço) e desacelera no fim (conquista).

### Streak
`user.streak` (dias seguidos). Exibido na Home e no header mobile. **Pendente:**
lógica de incremento/reset comparando `ultimaVisita` com a data atual (ver backlog).

### Selos (`PerfilScreen`, `selosInfo`)
Definidos hoje: `primeira-missao`, `streak-7`, `comunicador`, `calculista`,
`mestre-word`, `networker`, `guardiao`, `cidadao-digital`.
Categorias planejadas: Marcos (10/50/100 missões), Streaks (3/7/30/100 dias),
Domínio de trilha, Comportamento (Madrugador, Coruja, Veterano), Especiais.
**Pendente:** atribuição automática de selos (hoje vêm fixos no `INITIAL_PROGRESS`).

---

## 13. MAPA DE CONTEÚDO

Esta é a especificação completa de **todas as 17 trilhas e suas missões** — o
"currículo" do app. Missões marcadas **[✓ conteúdo]** já têm texto rico escrito no
código; as demais têm título/escopo definidos aqui e aguardam redação do conteúdo
(seguindo o schema da seção 6 e os padrões da seção 11).

Total: **17 trilhas / ~139 missões**.

---

### VERTENTE: COMPUTADOR

#### 🖥️ pc-fund — Fundamentos do Computador (8 missões)
Arquivos, pastas, atalhos, ergonomia.
1. Conhecendo a área de trabalho e a barra de tarefas
2. Arquivos e pastas: criar, renomear, mover
3. Organizando suas pastas (Documentos, Downloads, Imagens)
4. Copiar, recortar e colar (e os atalhos Ctrl+C / Ctrl+V / Ctrl+X)
5. Buscar um arquivo que você "perdeu"
6. Pen drive e nuvem: salvar e abrir de fora
7. Atalhos que economizam tempo (Ctrl+Z, Alt+Tab, Print)
8. Projeto: organize sua pasta de documentos pessoais

#### 🖥️ pc-word — Word & Google Docs (10 missões)
Documentos profissionais de verdade.
1. Word ou Google Docs: qual usar e quando
2. Digitando e salvando seu primeiro documento
3. Fonte, tamanho, negrito e alinhamento
4. Títulos, parágrafos e espaçamento
5. Listas com marcadores e numeração
6. Inserir imagem, tabela e linha
7. Margens, cabeçalho e rodapé
8. Revisão: corretor, comentários e controle de alterações
9. Salvar como PDF e compartilhar
10. Projeto: escreva um ofício/carta formal completo

#### 🖥️ pc-excel — Excel & Sheets (14 missões) — **trilha mais longa, "coração" do mercado**
Planilhas que se calculam sozinhas.
1. Conhecendo a planilha — interface, células, linhas, colunas
2. Digitando seus primeiros dados
3. Formatando células (negrito, alinhamento, fonte)
4. Bordas, cores e tabelas
5. **[✓ conteúdo]** Sua primeira fórmula: SOMA automática
6. Subtração, multiplicação e divisão
7. MÉDIA, MÁXIMO e MÍNIMO
8. Formatação de números: R$, % e datas
9. Filtros e classificação
10. Congelar painéis
11. Seu primeiro gráfico
12. PROCV: o queridinho do mercado
13. Salvar, exportar e compartilhar (XLSX, PDF, links)
14. Projeto: Controle Mensal Completo

#### 🖥️ pc-cloud — Workspace na Nuvem (9 missões)
Drive, Calendar, colaboração ao vivo.
1. O que é "a nuvem", sem mistério
2. Google Drive: subir, baixar e organizar arquivos
3. Compartilhar arquivo e definir permissões (ver / comentar / editar)
4. Editar um documento junto com outra pessoa, ao vivo
5. Histórico de versões: voltar no tempo
6. Google Agenda: criar e convidar para eventos
7. Lembretes e tarefas
8. Acessar tudo do celular e do computador (mesma conta)
9. Projeto: monte sua agenda da semana e compartilhe uma pasta

#### 🖥️ pc-meet — Reuniões Online (7 missões)
Meet, Zoom, Teams sem medo.
1. Entrar numa reunião por link
2. Câmera e microfone: ligar, desligar, testar
3. Compartilhar a tela
4. Chat, "levantar a mão" e reações
5. Marcar uma reunião e enviar o convite
6. Gravar a reunião e fazer uma ata simples
7. Projeto: agende e conduza uma reunião de teste com um familiar

#### 🖥️ pc-job — LinkedIn & Currículo (8 missões)
Perfil que recrutador acha.
1. Para que serve o LinkedIn (e por que vale a pena 40+)
2. Foto, título e resumo que chamam atenção
3. Preenchendo experiências e habilidades
4. Currículo moderno: o que entra e o que sai
5. Montando o currículo no Word/Canva
6. Procurando vagas e se candidatando
7. Mensagem para recrutador e networking educado
8. Projeto: perfil completo + currículo em PDF (vai pro portfólio)

#### 🖥️ pc-ia — IA pro Trabalho (6 missões)
ChatGPT, Claude e Gemini no dia a dia.
1. O que a IA faz (e o que NÃO faz) — expectativa realista
2. Escrevendo um bom pedido (prompt) que traz boa resposta
3. Escrever e melhorar e-mails com IA
4. Resumir textos longos e documentos
5. Traduzir e revisar ortografia
6. Projeto: use IA para preparar uma resposta profissional do começo ao fim

---

### VERTENTE: CELULAR

#### 📱 mob-dom — Domínio do Celular (8 missões)
Configurações, atalhos, organização.
1. Conhecendo as configurações principais
2. Organizando apps em pastas e telas
3. Ajustar tamanho de letra, brilho e som
4. Notificações: o que silenciar e o que manter
5. Armazenamento cheio: o que apagar com segurança
6. Conectar Wi-Fi, Bluetooth e dados móveis
7. Atualizar apps e o sistema
8. Projeto: deixe seu celular organizado e leve

#### 📱 mob-wpp — WhatsApp Profissional (9 missões)
Grupos, etiqueta, recursos avançados.
1. Configurando seu perfil com foto e recado
2. Conversas, anexos e áudios com clareza
3. Criar e administrar grupos
4. Etiqueta: o que (não) mandar em grupo de trabalho
5. Listas de transmissão vs grupos
6. Mensagens fixadas, marcadas e buscar conversa
7. WhatsApp Web (usar no computador)
8. Privacidade: foto, visto por último, bloqueio
9. Projeto: monte um grupo organizado com regras e descrição

#### 📱 mob-pix — Banco e PIX com Segurança (10 missões)
Pagar, receber e identificar golpes.
1. O que é PIX, na real
2. As 4 chaves PIX e qual escolher
3. Cadastrando sua primeira chave
4. Fazendo um PIX sem medo
5. Recebendo PIX (e dando o comprovante)
6. Limites diários: por que existem
7. **[✓ conteúdo]** Os 5 golpes de PIX mais comuns
8. Bloqueio cautelar: quando e como pedir
9. PIX agendado e recorrente
10. Projeto: configure sua segurança PIX (limite, contatos, alertas)

#### 📱 mob-gov — Gov.br e Serviços Públicos (8 missões)
Conta nível ouro, assinar, comprovantes.
1. O que é a conta Gov.br e por que importa
2. Criando e acessando sua conta
3. Subindo de nível: bronze, prata, ouro
4. Assinatura digital de documentos (gratuita)
5. Carteira de documentos digital (CNH, etc.)
6. Emitir comprovantes e certidões
7. Consultar benefícios e serviços (INSS, etc.)
8. Projeto: deixe sua conta nível ouro e assine um documento

#### 📱 mob-saude — Saúde Digital (6 missões)
SUS, vacinas, exames, telemedicina.
1. Conecte SUS: o que dá pra fazer
2. Carteira de vacinação digital
3. Acessar resultados de exames
4. Agendar consultas e ver histórico
5. Telemedicina: consulta por vídeo com segurança
6. Projeto: organize seu histórico de saúde no celular

#### 📱 mob-loc — Maps, Uber e Mobilidade (6 missões)
Rotas, transporte, evitar problemas.
1. Google Maps: buscar endereço e traçar rota
2. Modos de transporte (carro, a pé, ônibus)
3. Salvar locais favoritos (casa, trabalho)
4. Uber/99: pedir uma corrida com segurança
5. Compartilhar localização em tempo real com a família
6. Projeto: planeje um trajeto completo de ida e volta

#### 📱 mob-fotos — Fotos, Backup e Memórias (7 missões)
Organizar, salvar, nunca mais perder.
1. Tirando fotos melhores com o celular
2. Galeria: ver, apagar e favoritar
3. Criar álbuns e organizar por evento
4. Backup automático (Google Fotos / iCloud)
5. Liberar espaço sem perder fotos
6. Compartilhar álbum com a família
7. Projeto: faça o backup completo e crie um álbum de memórias

---

### VERTENTE: AMBOS (computador + celular)

#### 🔒 amb-seg — Segurança Digital (9 missões)
Senhas, golpes, 2FA — vale pra tudo.
1. Senhas fortes (e por que reusar é perigoso)
2. Gerenciador de senhas: nunca mais esquecer
3. Verificação em duas etapas (2FA) em tudo
4. Reconhecer e-mails e mensagens falsas (phishing)
5. Golpes por telefone e SMS
6. Redes Wi-Fi públicas: o que evitar
7. O que fazer se cair num golpe
8. Privacidade nas redes sociais
9. Projeto: faça um "pente-fino" de segurança nas suas contas

#### ✉️ amb-com — Comunicação Digital (8 missões)
E-mail, etiqueta, escrita clara.
1. Criar e organizar um e-mail profissional
2. Anatomia de um bom e-mail (assunto, saudação, fecho)
3. Anexos, cópia (Cc) e cópia oculta (Cco)
4. Pastas, filtros e marcar como importante
5. Etiqueta corporativa (tom, prazo de resposta)
6. Escrita clara: direto ao ponto, sem rodeios
7. Diferença entre e-mail, WhatsApp e ligação
8. Projeto: responda 3 situações reais de trabalho por e-mail

#### 🗂️ amb-final — Projeto Final (5 missões)
Uma semana simulada usando tudo.
1. Segunda: o "chefe" pede uma planilha de controle (Excel)
2. Terça: redigir e enviar um ofício por e-mail (Word + e-mail)
3. Quarta: participar de uma reunião e fazer a ata (Meet)
4. Quinta: atualizar perfil e se candidatar a uma vaga (LinkedIn)
5. Sexta: entregar o portfólio completo e "ser promovido"

---

## 14. Estado atual

### Pronto e funcionando
- ✅ Shell responsivo (nav lateral desktop + nav inferior mobile).
- ✅ Roteamento por estado interno (home/trilhas/detalhe/missão/perfil/config).
- ✅ 17 trilhas listadas com filtro por vertente (persistido).
- ✅ Progresso, XP e conclusão de missão somando ao estado.
- ✅ 2 trilhas com lista de missões (Excel 14, PIX 10).
- ✅ 2 missões com conteúdo escrito completo (SOMA, Golpes de PIX).
- ✅ Exportar/importar/limpar progresso (arquivo .json).
- ✅ Persistência localStorage com fallback gracioso.
- ✅ Selos exibidos no perfil (estáticos).

### Pendente
- ⏳ **Conteúdo escrito das ~137 missões restantes** (schema seção 6).
- ⏳ **Listas `MISSOES_*` das 15 trilhas sem missões** (hoje mostram "em produção").
- ⏳ **Atribuição automática de selos** (hoje fixos no estado inicial).
- ⏳ **Lógica de streak** (incrementar/zerar comparando `ultimaVisita`).
- ⏳ **Promoção automática de nível** ao cruzar `XP_POR_NIVEL` (com feedback visual).
- ⏳ **Portfólio exportável em PDF** (mencionado no conceito; tela ainda não existe).
- ⏳ **"Chefe virtual" / caixa de tarefas** como notificação discreta (telas Escritório/Inbox foram descritas no conceito mas não estão no código atual).
- ⏳ **Onboarding** (escolher nome, vertente inicial).

---

## 15. Backlog de funcionalidades

Ordenado por valor/esforço sugerido:

1. **Escalar conteúdo** — produzir as missões trilha a trilha. Prioridade: pc-excel (completar 12 restantes), pc-fund, amb-seg, mob-pix (completar), amb-com.
2. **Generalizar `MissaoDetailScreen`** — hoje o conteúdo é resolvido por `if` fixo (`pc-excel`+`5`). Trocar por um dicionário `CONTEUDOS[`${trilhaId}-${missaoId}`]` para escalar sem mexer no componente.
3. **Generalizar `TrilhaDetailScreen`** — substituir o ternário `MISSOES_EXCEL / MISSOES_PIX` por um mapa `MISSOES_POR_TRILHA[trilhaId]`.
4. **Streak real** — no carregamento, comparar `ultimaVisita` com hoje: +1 se foi ontem, reset se houve buraco, atualizar a data.
5. **Selos automáticos** — função `avaliarSelos(progress)` chamada após cada conclusão.
6. **Promoção de nível** — recalcular `nivelNum` a partir do XP e mostrar celebração.
7. **Onboarding** — primeira execução pede nome e vertente preferida.
8. **Portfólio** — tela que lista os "entregáveis de projeto" concluídos e exporta PDF.
9. **Caixa do chefe (discreta)** — notificação de tarefa que cruza várias trilhas (avaliação de promoção).
10. **Acessibilidade extra** — botão de aumentar fonte global, modo alto contraste.

---

## 16. PWA e deploy

Arquivos prontos para transformar o protótipo em app instalável (ver `README.md`):
- `index.html` — entry point com splash screen e registro do service worker.
- `manifest.json` — nome, ícones, cores, atalhos ("Missão do dia", "Trilhas").
- `service-worker.js` — cache offline + base para push notifications.

**Caminho sugerido (≈30 min):** criar projeto Vite + React, colar `escritorio-app.jsx`,
instalar `lucide-react`, adicionar os arquivos PWA, build e deploy gratuito (Vercel).
Custo estimado: **R$ 0 a R$ 70/mês** até ~100 alunos. Detalhes no `README.md`.

> Lembrete: o `localStorage` **não persiste** no preview de artefato (limitação da
> plataforma), mas **funciona normalmente** após o deploy da PWA.
