# Melhorias e Adições — Ideias para o app Escritório

> Brainstorm organizado de melhorias/adições, **todas pensadas para FUNCIONAR NO FRONT**
> (sem exigir backend) e para o público ~10 e 40+. Marcadas por **impacto** e **esforço**, e
> com viabilidade front-only. Planejamento — implementar só na fase de app (pós identidade/telas).
> Atualizado: 2026-05-24.

Legenda: 🟢 quick win · 🟡 médio · 🔴 grande aposta · ⭐ alto impacto · 🖥️ 100% front-only.

---

## 1. Áudio e voz (o maior salto pro Inglês) 🖥️ — ⏸️ ADIADO (decisão do dono)
> **Fora de escopo por enquanto.** O dono pediu **nada de voz/fala** no momento. Mantido aqui só
> como ideia futura. As demais áreas (acessibilidade, hábito, retenção, valor, família) estão
> DETALHADAS e prontas no papel em `FUNCIONALIDADES.md` (front-only, sem voz, sem backend).

O módulo de Inglês hoje usa dica de pronúncia escrita "porque não há áudio". **O navegador resolve
isso de graça, no front:**
- 🟢⭐ **Ler em voz alta (TTS)** — `Web Speech API` (`speechSynthesis`) lê qualquer frase em inglês
  (e em português). Botão "🔊 ouvir" em cada exemplo/palavra. Resolve a falta de áudio sem servidor.
- 🟡⭐ **Praticar pronúncia (reconhecimento de voz)** — `SpeechRecognition` ouve o aluno falar e dá
  feedback ("Boa! ✅" / "tente de novo"). Transforma os "fale em voz alta" em exercício real.
- 🟡 **Gravar-se (MediaRecorder)** — o aluno grava o "pitch"/projeto e ouve. Guardar localmente
  pra comparar a evolução (A1 → B1). Front-only, sem upload.
- 🟢 **Velocidade da fala** ajustável no TTS (mais devagar pra 40+ e iniciantes).

> Vale também pro resto do app: TTS lendo a aula inteira ajuda baixa visão e quem lê devagar.

---

## 2. Acessibilidade e conforto (40+ e ~10) 🖥️
- 🟢⭐ **Aumentar fonte** (já previsto) + **modo alto contraste** + **espaçamento de linha**.
- 🟢 **Ler a aula em voz alta** (TTS, §1) — acessibilidade enorme.
- 🟢 **Tema claro/escuro** respeitando `prefers-color-scheme` e `prefers-reduced-motion`.
- 🟡 **"Modo simples" vs "completo"** — menos elementos na tela pra quem se sente sobrecarregado.
- 🟢 **Fonte amigável a dislexia** (opção) — bom pro público jovem com dificuldade.
- 🟢 **Alvos grandes + foco visível** (já no design) — reforçar na implementação.

---

## 3. Hábito e engajamento (gamificação com profundidade) 🖥️
- 🟢⭐ **"Missão do dia"** em destaque na Home + **lembrete gentil** ("não perca sua sequência").
- 🟡 **Notificações locais** (`Notification` + service worker) pra lembrar de estudar — front-only,
  com permissão do usuário (sem servidor de push; agendamento local simples).
- 🟢 **Meta semanal** (ex: 5 missões/semana) com barrinha — adultos gostam de meta própria.
- 🟢⭐ **Escudo de ofensiva** (streak freeze) com UI — já modelado em `estrutura.js`.
- 🟡 **Carteira de Habilidades** — painel que enche conforme você domina temas (vira portfólio).
- 🟢 **Celebrações** (confete leve, som opcional) ao concluir missão / subir de nível / troféu.
- 🟡 **Mapa da jornada** — visual de progresso "Estagiário → Coordenador" e por módulo.
- 🟢 **"Continuar de onde parei"** — botão que leva direto à próxima missão.

---

## 4. Aprendizado e retenção 🖥️
- 🟡⭐ **Repetição espaçada** (já planejada, front-only) — fila local de revisão (1/3/10/30 dias).
- 🟡 **Modo Revisão** que embaralha exercícios de trilhas/módulos já feitos (interleaving).
- 🟢 **Exercícios interativos** (`EXERCICIOS.md`) com feedback imediato — recall ativo.
- 🟢 **Glossário global** — busca em todas as "Palavras novas" do curso, num só lugar.
- 🟢 **Resumo de 1 minuto** opcional ao fim de cada trilha (revisão dos pontos-chave).
- 🟡 **"Explique de volta"** — pedir pro aluno escrever/falar o que aprendeu (recall forte).

---

## 5. Saída/valor concreto (portfólio e certificados) 🖥️
- 🟢⭐ **Certificado em PDF** ao concluir um módulo/nível (gerado no front, ex: jsPDF) — motiva muito
  o público 40+ e dá prova de qualificação.
- 🟡 **Portfólio exportável em PDF** — reúne os projetos feitos (planilha, currículo, etc.).
- 🟢 **Card de conquista compartilhável** (imagem) pra mandar no WhatsApp ("Concluí o nível A1!").
- 🟢 **Lembrete de backup** — sugerir exportar o `.json` semanalmente (rede de segurança front-only).

---

## 6. Personalização e onboarding 🖥️
- 🟢⭐ **Onboarding com perfil** (nome, faixa etária, objetivo) → caminho e microcopy ajustados
  (ver `REVISAO.md §3`). Tom mais vibrante p/ jovens; foco em mercado/autonomia p/ adultos.
- 🟢 **Escolher módulo inicial** + sugerir trilha "primeiro passo".
- 🟡 **Avatar simples** (iniciais/cor/ícone) — identidade pessoal sem complexidade.
- 🟢 **Ritmo** (quantas missões por dia você quer) → ajusta a meta.

---

## 7. Modo família (front-only, sem login) 🖥️
- 🟡⭐ **Perfis locais múltiplos** no mesmo aparelho (pai, mãe, filho) — cada um com seu progresso
  em chaves separadas do `localStorage`. Era o conceito original (pai e mãe "colegas").
- 🟢 **Ver progresso um do outro** (no mesmo aparelho) — incentivo familiar, sem ranking competitivo.
- 🟢 **"Defensor da família"** (já no conteúdo de Segurança) vira um selo/atividade compartilhada.

---

## 8. Conteúdo: novos módulos/trilhas (futuro) 
- 🔴 **Espanhol** (reusa toda a estrutura do Inglês — A1→B1).
- 🟡 **Saúde Financeira** (orçamento, dívidas, juros, investir o básico) — alto valor p/ adultos.
- 🟡 **Renda Extra / Empreender** (Canva, vender online, MEI, marketplace).
- 🟢 **Inglês para Viagem** (trilha express A1/A2 focada em viajar).
- 🟡 **Criatividade Digital** (Canva, editar foto/vídeo curto, posts).
- 🟢 **Mais "tarefas do chefe"** — desafios integrados que cruzam módulos (já há o Projeto Final).

---

## 9. Confiança, robustez e "polimento profissional" 🖥️
- 🟢 **Validação na importação** do `.json` (já existe um começo) + aviso amigável de erro.
- 🟢 **Estados vazios** bem feitos ("nenhuma trilha começada — comece por aqui").
- 🟢 **Tratamento de erro gentil** (nada técnico na cara do usuário).
- 🟢 **PWA polida** — instalável (já 100/100), splash, funciona offline (service worker já existe).
- 🟢 **"Onde fica meu progresso?"** explicado de forma simples (já há) + reforço do backup.
- 🟡 **Auto-save + auto-export opcional** (lembrete/agendamento local) pra nunca perder dados.

---

## 10. Métricas pessoais (motivação, não vigilância) 🖥️
- 🟢 **"Você melhorou X%"** / acertos ao longo do tempo (local).
- 🟢 **Tempo dedicado / sequência mais longa** — números que dão orgulho.
- 🟢 **Onde você mais erra** → sugerir revisão (alimenta a repetição espaçada).

---

## 11. Prioridade sugerida (se/quando a fase de app começar)

**Primeiros (quick wins de altíssimo impacto, front-only):**
1. 🔊 **TTS (ler em voz alta)** — resolve o áudio do Inglês e ajuda acessibilidade.
2. ⭐ **Onboarding com perfil** + aumentar fonte + alto contraste.
3. ⭐ **Missão do dia + ofensiva (escudo) + celebrações**.
4. ⭐ **Certificado/portfólio em PDF** (motivação e prova de qualificação).
5. **Exercícios interativos com feedback imediato** (`EXERCICIOS.md`).

**Depois (médio):**
6. **Repetição espaçada + Modo Revisão** (front-only).
7. **Reconhecimento de voz** (pronúncia) e **gravação** no Inglês.
8. **Perfis locais (modo família)** + cards compartilháveis.
9. **Glossário global** + resumos de trilha.

**Grandes apostas (futuro):**
10. **Novos módulos** (Espanhol, Saúde Financeira, Renda Extra).
11. **Notificações locais** de hábito.

> Tudo acima respeita a regra **front-only** (Web Speech API, MediaRecorder, jsPDF, localStorage/
> IndexedDB, Notification + service worker — todos rodam no navegador, sem servidor). O backend
> permanece **opcional** (`BACKEND.md`), só pra sync automático em nuvem, se um dia desejado.
