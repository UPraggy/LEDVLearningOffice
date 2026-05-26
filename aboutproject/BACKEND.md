# Backend — OPCIONAL (registro), o app é FRONT-ONLY

> ⛔ **DIRETRIZ DO DONO:** o app **NÃO deve exigir backend**. Tudo funciona **só no front**
> (localStorage/IndexedDB + exportar/importar `.json`). O conteúdo deste documento é apenas
> **REGISTRO de uma opção futura** (sync automático em nuvem) — **não é requisito** e não deve
> ser implementado como dependência. Se algo "pediria" backend, **resolva no front** (ver §1).
>
> Planejamento apenas. Nada aqui antes de (1) identidade visual + telas e (2) fase de app.
> Atualizado: 2026-05-24. Baseado em pesquisa (fontes no fim).

---

## 1. O app é FRONT-ONLY — tudo funciona localmente

**Princípio:** o app é **100% frontend**. Persistência = `localStorage` (e `IndexedDB` para
volumes maiores, ex: fila de revisão). Multi-aparelho = **exportar/importar `.json`** (manual,
já existe). Zero servidor, zero custo, privacidade total. **Nenhuma funcionalidade pode depender
de internet/servidor pra existir.**

| "Pediria" backend | Como resolver NO FRONT (sem servidor) |
|-------------------|----------------------------------------|
| Salvar progresso | `localStorage` (já funciona) |
| Trocar de aparelho | **Exportar/importar `.json`** (já funciona) — manual, mas suficiente |
| Repetição espaçada (review queue) | `localStorage`/`IndexedDB` local (ver §3) — não precisa de banco |
| Tentativas de exercício / métricas pessoais | `localStorage` local; o usuário vê o próprio progresso |
| Backup | o `.json` exportável (mandar pro próprio Drive/e-mail) |

> O que **só** um backend traria (e que ficamos SEM, por opção): sync automático entre aparelhos
> e métricas centralizadas de muitos alunos. Tudo bem — não é requisito. Fica **registrado** abaixo
> como caminho futuro, se um dia o dono quiser.

### 1.1 Estruturas de dados locais (front-only)
- **`escritorio-progresso`** (localStorage): o objeto `progress` (já existe).
- **`escritorio-revisao`** (localStorage/IndexedDB): a fila de repetição espaçada (ver `EXERCICIOS.md §4`)
  — uma lista de `{ item_id, due_at, interval_days, ease }`, atualizada 100% no cliente.
- **`escritorio-tentativas`** (opcional, localStorage): histórico de acertos/erros pra o próprio aluno.
- Tudo entra no **mesmo `.json`** de export/import (basta incluir as chaves novas).

---

## OPCIONAL (apenas registro) — Se um dia quiser sync em nuvem

> ⚠️ Tudo abaixo é **OPCIONAL** e só vale SE o dono decidir, no futuro, ter sync automático
> entre aparelhos. **Não é requisito e não deve virar dependência.** O app funciona 100% sem isso
> (front-only, §1). Registrado aqui só pra não se perder a ideia.

---

### (opcional) Stack recomendada: **Supabase**

A pesquisa de 2026 recomenda **Supabase** como padrão pra novos projetos (PostgreSQL aberto,
mais controle, menos "lock-in"), com **Firebase** como alternativa quando o offline-first
mobile é o requisito central. Para um **PWA web** como o nosso, Supabase encaixa bem.

- **Banco:** PostgreSQL (relacional — combina com nosso modelo de progresso/missões/troféus).
- **Auth:** Supabase Auth (e-mail+senha, magic link, ou login social Google) — gratuito.
- **API:** REST/Realtime automáticos sobre as tabelas + Row Level Security (cada um só vê o seu).
- **Offline-first:** padrão **IndexedDB + fila de sincronização** (escreve local, sincroniza
  quando há internet). Para escala/robustez, considerar **PowerSync** (sincroniza SQLite ↔
  Supabase com Supabase Auth) — mas começar com a fila própria é mais simples.
- **Custo:** free tier generoso (suficiente pra dezenas/centenas de alunos no começo).

> Se o foco virar **app mobile nativo** (não PWA), reavaliar **Firebase/Firestore** — o
> offline-sync dele é mais "turnkey" pra mobile. Pra PWA web, Supabase é a escolha.

---

### (opcional) Modelo de dados (mapeado ao progresso atual)

O `progress` que já existe no app (`AI-HANDOFF §4.4`) vira tabelas. Mantém-se 1-para-1 com
o que o app já usa, então a migração é direta.

```
profiles            (id ↔ auth.user, nome, idade_faixa, objetivo, modulo_inicial, criado_em)
user_settings       (user_id, vertente_filtro, fonte_grande, preferencias jsonb)
user_progress       (user_id, xp, nivel_num, streak, escudos, ultima_visita)
missions_completed   (user_id, mission_id, completed_at)        -- mission_id = `${trilhaId}-${n}`
trophies_earned      (user_id, trophy_id, earned_at)
-- opcional/futuro:
exercise_attempts    (user_id, mission_id, exercise_idx, correct, attempted_at)  -- p/ métricas e repetição espaçada
review_queue         (user_id, mission_id, due_at, interval_days)                -- spaced repetition (REVISAO.md)
```

- **Row Level Security:** `user_id = auth.uid()` em todas — cada pessoa só acessa o próprio.
- **Conteúdo (trilhas/missões) NÃO vai pro banco** — continua versionado no código
  (`data/estrutura.js` + `data/conteudo/`). O backend guarda só o PROGRESSO do usuário.
- **`exercise_attempts` e `review_queue`** habilitam, no futuro, a repetição espaçada e as
  métricas de aprendizado (ver `REVISAO.md §4` e §6).

---

### (opcional) Autenticação (pensada pro público ~10 e 40+)

- **Simples acima de tudo:** preferir **magic link** (link no e-mail, sem senha pra decorar)
  ou **login com Google** (1 toque). Senha tradicional como opção.
- **Menores (~10):** considerar conta gerida por um responsável (modo família) — sem coleta
  de dados sensíveis de criança; rever LGPD/ECA antes de abrir pra menores.
- **Sem login obrigatório:** dá pra usar o app anônimo (localStorage) e oferecer "criar conta
  pra salvar na nuvem" depois — reduz fricção pra quem tem medo de cadastro.
- **Recuperação fácil:** o `.json` exportável continua como rede de segurança.

---

### (opcional) Caminho de migração (faseado, sem reescrever tudo)

1. **Fase 0 (atual):** localStorage + export/import `.json`. Já funciona.
2. **Fase 1 — Sync básico:** criar projeto Supabase, tabelas + RLS, Auth (magic link/Google).
   No app, ao logar, **subir o localStorage** pra nuvem e **baixar** ao abrir em outro aparelho.
   localStorage continua sendo a fonte local (cache). Conflitos: "última escrita vence" por campo
   simples (progresso é aditivo — missões concluídas só crescem).
3. **Fase 2 — Offline-first robusto:** fila de sincronização (IndexedDB) pra gravar offline e
   sincronizar depois; opcionalmente PowerSync. Resolver conflitos por merge (união de
   `missions_completed` e `trophies_earned`; `xp`/`streak` recalculados pela lógica de `estrutura.js`).
4. **Fase 3 — Métricas + repetição espaçada:** popular `exercise_attempts`/`review_queue`,
   dashboards de conclusão/abandono, e "revisar missões" no momento certo.

> Toda a lógica de gamificação (`atualizarOfensiva`, `avaliarTrofeus`, `nivelPorXP`) **fica no
> cliente** (já está em `estrutura.js`). O backend só persiste o estado — evita duplicar regra.

---

### (opcional) Privacidade e segurança (se houver nuvem)

- **LGPD:** coletar o mínimo (nome, e-mail, progresso). Deixar claro o que é guardado e permitir
  apagar a conta/dados. O app sempre disse "seus dados ficam no aparelho" — ao adicionar nuvem,
  atualizar esse aviso com transparência.
- **RLS sempre ligado:** ninguém acessa dado de ninguém.
- **Sem dados sensíveis:** nada de CPF/senha de banco/etc. no nosso backend (o curso ensina a
  proteger isso — temos que dar o exemplo).
- **2FA na conta** (coerente com o módulo Segurança que ensinamos).

---

## Resumo

- ✅ **O app é FRONT-ONLY.** Nada depende de backend. Persistência local + export/import `.json`.
- ✅ **Repetição espaçada, tentativas e métricas pessoais** rodam **no front** (localStorage/IndexedDB).
- 📌 **Backend = opcional e registrado** (só pra sync automático em nuvem, no futuro). Se for usado:
  Supabase (PostgreSQL + Auth + RLS), modelo 1-para-1 com o `progress`, auth simples, faseado.
  Esquema SQL pronto no papel em `sql/schema.sql` (NÃO executar agora).
- ⛔ **Não implementar backend** — e jamais torná-lo requisito. Front primeiro, sempre.

### Fontes
- [Supabase vs Firebase 2026 (UpCloud)](https://upcloud.com/global/blog/supabase-vs-firebase-which-backend-makes-the-most-sense-in-2026/)
- [Firebase vs Supabase 2026 (DEV)](https://dev.to/philip_mcclarence_2ef9475/supabase-vs-firebase-in-2026-which-backend-should-you-choose-4bfe)
- [Offline-First com Supabase + PowerSync](https://www.powersync.com/blog/offline-first-apps-made-simple-supabase-powersync)
- [PWA offline-first com IndexedDB + Supabase](https://oluwadaprof.medium.com/building-an-offline-first-pwa-notes-app-with-next-js-indexeddb-and-supabase-f861aa3a06f9)
