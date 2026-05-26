-- ============================================================================
-- Escritório — Schema do Supabase (PostgreSQL)   [OPCIONAL — NÃO É REQUISITO]
-- ----------------------------------------------------------------------------
-- ⛔ O APP É FRONT-ONLY. Ele NÃO precisa deste backend pra funcionar — tudo roda
--    no front (localStorage/IndexedDB + export/import .json). Ver BACKEND.md §1.
--    Este arquivo é só um REGISTRO, caso um dia o dono queira SYNC AUTOMÁTICO em
--    nuvem entre aparelhos. NÃO EXECUTAR agora. NÃO transformar em dependência.
-- ----------------------------------------------------------------------------
-- Se um dia for usado, princípios (ver BACKEND.md):
--   • As MESMAS estruturas existem localmente no front (este SQL só "espelha" na nuvem).
--   • O CONTEÚDO (trilhas/missões) fica no CÓDIGO, não no banco. Aqui só PROGRESSO.
--   • Row Level Security (RLS): cada usuário só acessa o próprio dado.
--   • Gamificação (XP/streak/troféus) e repetição espaçada são calculadas no CLIENTE;
--     o banco apenas persistiria o estado e as tentativas.
--   • IDs de missão = `${trilhaId}-${numero}` (ex: 'pc-excel-5'); de exercício
--     = `${missionId}:${exercicioId}` (ex: 'pc-excel-5:soma-1').
-- ============================================================================

-- ---------------------------------------------------------------------------
-- 1) PROFILES — 1:1 com auth.users (criado por trigger no signup)
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  nome          text,
  faixa_etaria  text,            -- ex: 'ate_12' | '13_17' | '18_39' | '40_mais'
  objetivo      text,            -- ex: 'mercado' | 'autonomia' | 'ingles' | 'curiosidade'
  modulo_inicial text,           -- 'computador'|'celular'|'mercado'|'seguranca'|'ingles'
  fonte_grande  boolean not null default false,   -- acessibilidade (botão "aumentar fonte")
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 2) USER_PROGRESS — estado de gamificação (1 linha por usuário)
--    Espelha o objeto `progress.user` do app.
-- ---------------------------------------------------------------------------
create table if not exists public.user_progress (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  xp             integer not null default 0,
  nivel_num      integer not null default 1,       -- 1..6 (recalculado pelo cliente via nivelPorXP)
  streak         integer not null default 0,       -- "ofensiva" (dias seguidos)
  escudos        integer not null default 0,       -- streak freeze disponíveis
  ultima_visita  date,                             -- p/ atualizarOfensiva
  vertente_filtro text not null default 'todas',   -- preferência de filtro
  preferencias   jsonb not null default '{}'::jsonb,
  updated_at     timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- 3) MISSIONS_COMPLETED — uma linha por missão concluída (aditivo)
-- ---------------------------------------------------------------------------
create table if not exists public.missions_completed (
  user_id      uuid not null references auth.users(id) on delete cascade,
  mission_id   text not null,                      -- '${trilhaId}-${numero}', ex: 'pc-fund-1'
  completed_at timestamptz not null default now(),
  primary key (user_id, mission_id)
);
create index if not exists idx_missions_completed_user on public.missions_completed(user_id);

-- ---------------------------------------------------------------------------
-- 4) TROPHIES_EARNED — troféus conquistados (avaliados no cliente)
-- ---------------------------------------------------------------------------
create table if not exists public.trophies_earned (
  user_id    uuid not null references auth.users(id) on delete cascade,
  trophy_id  text not null,                        -- ex: 'ofensiva-7', 'mod-ingles', 'en-b1'
  earned_at  timestamptz not null default now(),
  primary key (user_id, trophy_id)
);

-- ---------------------------------------------------------------------------
-- 5) EXERCISE_ATTEMPTS — tentativas de exercício (métricas + repetição espaçada)
--    Opcional na Fase 1; recomendado na Fase 3 (ver EXERCICIOS.md §4).
-- ---------------------------------------------------------------------------
create table if not exists public.exercise_attempts (
  id           bigint generated always as identity primary key,
  user_id      uuid not null references auth.users(id) on delete cascade,
  mission_id   text not null,                      -- 'pc-excel-5'
  exercicio_id text not null,                      -- 'soma-1'
  tipo         text,                               -- 'complete'|'find_error'|'choose'|'order'|'match'|'simulate'
  acertou      boolean not null,
  tentativas   integer not null default 1,
  attempted_at timestamptz not null default now()
);
create index if not exists idx_attempts_user_mission on public.exercise_attempts(user_id, mission_id);

-- ---------------------------------------------------------------------------
-- 6) REVIEW_QUEUE — fila de repetição espaçada (1 item por conceito/exercício)
--    intervalo cresce ao acertar (1→3→10→30 dias); reseta curto ao errar.
-- ---------------------------------------------------------------------------
create table if not exists public.review_queue (
  user_id       uuid not null references auth.users(id) on delete cascade,
  item_id       text not null,                     -- mission_id OU 'mission_id:exercicio_id'
  due_at        date not null,                     -- quando rever
  interval_days integer not null default 1,
  ease          integer not null default 0,        -- nº de acertos seguidos (sobe o intervalo)
  updated_at    timestamptz not null default now(),
  primary key (user_id, item_id)
);
create index if not exists idx_review_due on public.review_queue(user_id, due_at);

-- ============================================================================
-- ROW LEVEL SECURITY — cada usuário só acessa o PRÓPRIO dado
-- ============================================================================
alter table public.profiles           enable row level security;
alter table public.user_progress      enable row level security;
alter table public.missions_completed enable row level security;
alter table public.trophies_earned    enable row level security;
alter table public.exercise_attempts  enable row level security;
alter table public.review_queue        enable row level security;

-- Política genérica "dono do dado" (id próprio = auth.uid()).
-- profiles usa coluna `id`; as demais usam `user_id`.
create policy "profiles_self" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "progress_self" on public.user_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "missions_self" on public.missions_completed
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "trophies_self" on public.trophies_earned
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "attempts_self" on public.exercise_attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "review_self" on public.review_queue
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ============================================================================
-- TRIGGER — cria profile + linha de progresso ao registrar um usuário
-- ============================================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, nome)
    values (new.id, coalesce(new.raw_user_meta_data->>'nome', null))
    on conflict (id) do nothing;
  insert into public.user_progress (user_id)
    values (new.id)
    on conflict (user_id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- updated_at automático em user_progress/profiles (opcional)
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

drop trigger if exists trg_touch_progress on public.user_progress;
create trigger trg_touch_progress before update on public.user_progress
  for each row execute function public.touch_updated_at();

-- ============================================================================
-- VIEW de métricas (admin) — taxa de conclusão por missão (sem expor usuário)
-- Útil pra acompanhar alunos (REVISAO.md). Acesso restrito a admin/role própria.
-- ============================================================================
create or replace view public.stats_missions as
  select mission_id, count(*) as conclusoes
  from public.missions_completed
  group by mission_id
  order by conclusoes desc;

-- ============================================================================
-- NOTAS DE SINCRONIZAÇÃO (offline-first) — ver BACKEND.md §5
--  • missions_completed e trophies_earned são ADITIVOS → merge por UNIÃO (sem conflito).
--  • user_progress (xp/streak/nivel) é DERIVADO → cliente recalcula via estrutura.js
--    depois do merge das missões (evita divergência entre aparelhos).
--  • ultima_visita/streak: resolver pela data mais recente; recomputar com atualizarOfensiva.
--  • Tudo continua exportável em .json (backup manual) independente do backend.
-- ============================================================================
