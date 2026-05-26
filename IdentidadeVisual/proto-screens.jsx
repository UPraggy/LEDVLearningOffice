/* === Escritório · telas do protótipo === */
const { MODULES, TRILHAS, MISSIONS_T2, MISSION_CONTENT, MENTOR_INBOX, HEATMAP, TROPHIES, DIARY, CAREER, USER, Ic, moduleIcon, BOX_REWARDS, WEEK_CHALLENGE, NEAR_TROPHIES } = window.PROTO;

const { useState, useEffect, useMemo, useRef } = React;

// ============ ATOMS ============
const Chip = ({ c="default", children, ...p }) => <span className={`chip chip-${c}`} {...p}>{children}</span>;
const Diff = ({ d }) => {
  const map = { i:["Iniciante","i"], m:["Intermediário","m"], a:["Avançado","a"] };
  const dots = { i:"●", m:"●●", a:"●●●" }[d];
  return <span className={`diff diff-${d}`}>{dots} {map[d][0]}</span>;
};
const Streak = ({ n }) => <span className="streak"><Ic.flame style={{color:"var(--streak)"}}/> {n} dias</span>;
const Xp = ({ n }) => <span className="xp-pill">+{n} XP</span>;
const LvlStamp = ({ lvl, name, letter }) => (
  <span className="lvl-stamp"><span className="lvl-num">{lvl}</span><span className="lvl-name">{name}</span></span>
);
const ProgressBar = ({ pct, color="var(--navy)" }) => (
  <div className="pgbar"><i style={{width:`${pct}%`, background:color}}/></div>
);

const Avatar = ({ initials, size="m", color="navy" }) => (
  <div className={`avatar avatar-${size}`} data-c={color}>{initials}</div>
);

// ============ HOME ============
function ScreenHome({ go, t }){
  const pct = Math.round((USER.xp - USER.prevLevelAt) / (USER.nextLevelAt - USER.prevLevelAt) * 100);
  const xpToNext = USER.nextLevelAt - USER.xp;
  const day = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][new Date().getDay()];
  const greet = t.audience === "jovem" ? "E aí," : t.audience === "adulto" ? "Bom dia," : "Bom dia,";
  const userName = t.userName || USER.name;
  // mini calendar 7 dias
  const last7 = HEATMAP.slice(-7);

  // Mystery Box state
  const [boxOpened, setBoxOpened] = useState(false);
  const [boxReward, setBoxReward] = useState(null);
  const [boxSpinning, setBoxSpinning] = useState(false);

  function openBox(){
    if (boxOpened || boxSpinning) return;
    setBoxSpinning(true);
    setTimeout(()=>{
      // weighted random pick
      const total = BOX_REWARDS.reduce((s,r)=>s+r.weight,0);
      let r = Math.random()*total;
      let picked = BOX_REWARDS[0];
      for (const reward of BOX_REWARDS) { r -= reward.weight; if (r<=0) { picked = reward; break; } }
      setBoxReward(picked);
      setBoxOpened(true);
      setBoxSpinning(false);
    }, 900);
  }

  const close = NEAR_TROPHIES.map(id => TROPHIES.find(t=>t.id===id)).filter(Boolean).slice(0,3);

  return (
    <div className="screen" data-screen-label="Home">
      <div className="hello">
        <div>
          <div className="kicker">{day} · {new Date().toLocaleDateString('pt-BR',{day:'numeric',month:'long'})}</div>
          <h1 className="bighi">{greet} <em>{userName.split(" ")[0]}</em>.</h1>
        </div>
        <div className="hello-stamps">
          <Streak n={USER.streak}/>
          <LvlStamp lvl={USER.level} name={USER.levelName}/>
        </div>
      </div>

      {/* MYSTERY BOX (top, attention-grabbing) */}
      <div className={`mystery-box ${boxOpened?"opened":""} ${boxSpinning?"spinning":""}`}>
        {!boxOpened && (
          <>
            <div className="mb-burst" onClick={openBox} role="button" tabIndex={0}>
              <div className="mb-box">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9"/>
                  <path d="M2 9V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3"/>
                  <path d="M2 9h20M12 4v17"/>
                  <path d="M9 4c-1.5-2-4 0-2 2 1 1 3 0 5-2 2 2 4 3 5 2 2-2-.5-4-2-2"/>
                </svg>
              </div>
            </div>
            <div className="mb-info">
              <span className="kicker">Caixa do dia · só hoje</span>
              <h3>Sua surpresa de <em>hoje</em></h3>
              <p>Toda manhã uma caixa nova. Pode vir XP extra, escudo, dica rara, ou um troféu que nem você imaginava existir.</p>
              <button className="btn btn-l" onClick={openBox} disabled={boxSpinning}>
                {boxSpinning ? "Abrindo..." : "Abrir caixa"}
              </button>
            </div>
          </>
        )}
        {boxOpened && boxReward && (
          <div className="mb-reveal" data-tier={boxReward.tier}>
            <div className={`mb-rev-ic tier-${boxReward.tier}`}>
              {boxReward.ic==="star" && <Ic.star style={{width:48,height:48}}/>}
              {boxReward.ic==="shield" && <Ic.shield style={{width:48,height:48}}/>}
              {boxReward.ic==="lamp" && <Ic.lamp style={{width:48,height:48}}/>}
              {boxReward.ic==="bolt" && <Ic.bolt style={{width:48,height:48}}/>}
              {boxReward.ic==="trophy" && <Ic.trophy style={{width:48,height:48}}/>}
              {boxReward.ic==="flame" && <Ic.flame style={{width:48,height:48}}/>}
            </div>
            <span className="kicker">
              {boxReward.tier==="legendary"?"🎉 Lendária!":
               boxReward.tier==="epic"?"Épica!":
               boxReward.tier==="rare"?"Rara":"Diária"}
            </span>
            <h3>{boxReward.t}</h3>
            <p>{boxReward.sub}</p>
            <div className="mb-meta">
              <small>Volte amanhã para a próxima.</small>
            </div>
          </div>
        )}
      </div>

      {/* XP card */}
      <div className="xp-card">
        <div className="xp-card-l">
          <span className="kicker">Para o próximo nível</span>
          <div className="xp-line"><strong>{USER.xp.toLocaleString('pt-BR')}</strong> <span>/ {USER.nextLevelAt.toLocaleString('pt-BR')} XP</span></div>
          <div className="xpbar"><i style={{width:`${pct}%`}}/></div>
          <span className="xp-note">Faltam <strong>{xpToNext} XP</strong> para virar <strong>Analista</strong>.</span>
        </div>
        <div className="xp-card-r">
          <div className="seal-big">P</div>
        </div>
      </div>

      {/* Missão do dia */}
      <div className="daily-card" onClick={()=>go("mission")}>
        <div>
          <span className="stamp">Sua missão de hoje</span>
          <h3>Travar uma <em>célula</em> com cifrão</h3>
          <div className="daily-meta">
            <span className="chip chip-navy">Excel · Computador</span>
            <Diff d="m"/>
            <span className="time"><Ic.bolt/> 8 min · +60 XP</span>
          </div>
        </div>
        <button className="btn btn-l">Começar agora <Ic.chev/></button>
      </div>

      {/* DESAFIO DA SEMANA */}
      <div className="week-challenge" data-color={WEEK_CHALLENGE.color}>
        <div className="wc-l">
          <span className="kicker">Desafio da semana · {WEEK_CHALLENGE.daysLeft} dias restantes</span>
          <h3>{WEEK_CHALLENGE.title}</h3>
          <p>{WEEK_CHALLENGE.sub}</p>
          <div className="wc-progress">
            <div className="wc-bar"><i style={{width:`${WEEK_CHALLENGE.progress/WEEK_CHALLENGE.total*100}%`}}/></div>
            <span className="wc-cnt">{WEEK_CHALLENGE.progress}/{WEEK_CHALLENGE.total}</span>
          </div>
          <div className="wc-reward">
            <Ic.trophy style={{width:16,height:16,color:"var(--honey)"}}/>
            <strong>{WEEK_CHALLENGE.reward}</strong>
          </div>
        </div>
        <button className="wc-cta" onClick={()=>go("trilhas",{modId:"seg"})}>
          <Ic.shield style={{width:28,height:28}}/>
          <span>Continuar</span>
        </button>
      </div>

      {/* QUASE LÁ — gancho de quase-recompensa */}
      <section className="block">
        <div className="block-head">
          <h2><Ic.bolt style={{color:"var(--coral)",verticalAlign:"-4px",marginRight:"4px"}}/> Quase lá</h2>
          <button className="btn-link" onClick={()=>go("trophies")}>Ver coleção <Ic.chev/></button>
        </div>
        <div className="near-row">
          {close.map(t=>(
            <div key={t.id} className="near-card">
              <div className={`near-medal medal-${t.tier}`}>
                {t.ic==="flame" && <Ic.flame style={{width:24,height:24}}/>}
                {t.ic==="trophy" && <Ic.trophy style={{width:24,height:24}}/>}
                {t.ic==="bolt" && <Ic.bolt style={{width:24,height:24}}/>}
                {t.ic==="grid" && <Ic.grid style={{width:24,height:24}}/>}
                {t.ic==="chat" && <Ic.chat style={{width:24,height:24}}/>}
                {t.ic==="star" && <Ic.star style={{width:24,height:24}}/>}
                {t.ic==="phone" && <Ic.phone style={{width:24,height:24}}/>}
                {t.ic==="layers" && <Ic.layers style={{width:24,height:24}}/>}
              </div>
              <div className="near-info">
                <strong>{t.title}</strong>
                <small>{t.req}</small>
                <div className="bar"><i style={{width:`${t.progress}%`}}/></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick chips */}
      <div className="quick-row">
        <button className="quick" onClick={()=>go("modules")}>
          <Ic.grid/><span>Módulos</span>
        </button>
        <button className="quick" onClick={()=>go("agenda")}>
          <Ic.calendar/><span>Agenda</span>
        </button>
        <button className="quick" onClick={()=>go("mentor")}>
          <Ic.inbox/><span>Caixa do Mentor <em className="badge">1</em></span>
        </button>
        <button className="quick" onClick={()=>go("diary")}>
          <Ic.pen/><span>Diário</span>
        </button>
        <button className="quick" onClick={()=>go("trophies")}>
          <Ic.trophy/><span>Troféus</span>
        </button>
        <button className="quick" onClick={()=>go("anatomy")}>
          <Ic.layers/><span>Anatomia</span>
        </button>
      </div>

      <div className="two-col">
        {/* Mini calendar */}
        <section className="block">
          <div className="block-head">
            <h2>Sua semana</h2>
            <button className="btn-link" onClick={()=>go("agenda")}>Ver agenda <Ic.chev/></button>
          </div>
          <div className="weekstrip">
            {["S","T","Q","Q","S","S","D"].map((d,i)=>{
              const v = last7[i];
              const today = i === 6;
              return (
                <div key={i} className={`weekday ${today?"today":""}`}>
                  <span className="wd-l">{d}</span>
                  <span className={`wd-cell hm-${v}`}>{v>0 && v}</span>
                </div>
              );
            })}
          </div>
          <p className="block-note">7 dias seguidos cumpridos. Hoje ainda não — vai uma missão rápida?</p>
        </section>

        {/* Desafio relâmpago */}
        <section className="block">
          <div className="block-head">
            <h2>Desafio relâmpago</h2>
            <span className="kicker">~2 min</span>
          </div>
          <div className="lightning">
            <div className="l-q">"Você recebe um WhatsApp do seu filho pedindo PIX em um número novo. O que faz primeiro?"</div>
            <div className="l-opts">
              <button className="l-opt">Faço o PIX</button>
              <button className="l-opt">Ligo no número antigo</button>
              <button className="l-opt">Peço um áudio</button>
            </div>
          </div>
        </section>
      </div>

      {/* Recent activity */}
      <section className="block">
        <div className="block-head">
          <h2>Atividade recente</h2>
        </div>
        <ul className="activity">
          <li><div className="ac-ic ac-done"><Ic.check/></div><div className="ac-body"><strong>Soma e média</strong><span>Excel sem medo · ontem · +60 XP</span></div></li>
          <li><div className="ac-ic ac-trophy"><Ic.trophy/></div><div className="ac-body"><strong>Troféu: Detetive de golpes</strong><span>Segurança · 2 dias atrás</span></div></li>
          <li><div className="ac-ic ac-done"><Ic.check/></div><div className="ac-body"><strong>Senha forte de verdade</strong><span>Segurança · 3 dias atrás · +40 XP</span></div></li>
          <li><div className="ac-ic ac-lvl"><Ic.star/></div><div className="ac-body"><strong>Subiu para Pleno</strong><span>nível 3 · semana passada</span></div></li>
        </ul>
      </section>
    </div>
  );
}

// ============ MODULES ============
function ScreenModules({ go }){
  return (
    <div className="screen" data-screen-label="Módulos">
      <div className="hello">
        <div>
          <div className="kicker">Cinco caminhos · escolha um</div>
          <h1 className="bighi">Por onde <em>seguimos</em>?</h1>
        </div>
      </div>
      <p className="lede">Cada módulo é independente. Você pode pular de um pro outro a qualquer hora — seu progresso fica salvo em cada um.</p>

      <div className="mod-grid">
        {MODULES.map(m=>{
          const pct = Math.round(m.doneMissions/m.totalMissions*100);
          return (
            <button key={m.id} className="mod-card" data-color={m.color} onClick={()=>go("trilhas", { modId: m.id })}>
              <div className="mc-top">
                <div className="ic">{moduleIcon(m.id, {width:26,height:26})}</div>
                <span className="num">M · {m.trilhas} trilhas</span>
              </div>
              <h3>{m.name}</h3>
              <p className="sub">{m.short}</p>
              <div className="mc-foot">
                <span>{m.doneMissions} de {m.totalMissions} missões</span>
                <span>{pct}%</span>
              </div>
              <div className="bar"><i style={{width:`${pct}%`}}/></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============ TRILHAS ============
function ScreenTrilhas({ go, params }){
  const modId = params?.modId || "pc";
  const mod = MODULES.find(m=>m.id===modId);
  const trilhas = TRILHAS[modId] || [];
  return (
    <div className="screen" data-screen-label="Trilhas">
      <button className="back" onClick={()=>go("modules")}><Ic.arrL/> Módulos</button>
      <div className="trilhas-head" data-color={mod.color}>
        <div className="th-l">
          <span className="kicker">Módulo · {mod.name}</span>
          <h1 className="bighi"><em>{mod.short}</em></h1>
        </div>
        <div className="th-r">
          <div className="th-circle">{moduleIcon(modId,{width:44,height:44})}</div>
          <div className="th-stats">
            <strong>{mod.doneMissions}/{mod.totalMissions}</strong>
            <span>missões</span>
          </div>
        </div>
      </div>

      <div className="trilha-list">
        {trilhas.map(t=>{
          const pct = Math.round(t.done/t.missions*100);
          const isDone = pct===100;
          return (
            <button key={t.id} className="trail-card" onClick={()=>go("mission-list",{trailId:t.id, modId})}>
              <div className="num-circ" data-color={mod.color}>{t.num}</div>
              <div className="tc-mid">
                <h4>{t.title}</h4>
                <div className="meta">
                  <Diff d={t.diff}/>
                  <span className="time"><Ic.bolt/> {t.time}</span>
                  <span className="time">{t.missions} missões</span>
                </div>
                <div className="bar"><i style={{width:`${pct}%`, background: isDone ? "var(--honey)" : "var(--sage)"}}/></div>
              </div>
              <div className="tc-right">
                {isDone ? <span className="chip chip-sage">✓ {pct}%</span> : <span className="chip">{pct}%</span>}
                <Ic.chev/>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ============ MISSION LIST (vertical lesson path) ============
function ScreenMissionList({ go, params }){
  const trailId = params?.trailId || "t2";
  const modId = params?.modId || "pc";
  const mod = MODULES.find(m=>m.id===modId);
  const trail = (TRILHAS[modId] || []).find(t=>t.id===trailId) || TRILHAS.pc[1];
  const missions = MISSIONS_T2;

  return (
    <div className="screen" data-screen-label="Trilha · missões">
      <button className="back" onClick={()=>go("trilhas",{modId})}><Ic.arrL/> Trilhas de {mod.name}</button>
      <div className="ml-head">
        <span className="kicker">Trilha · {mod.name}</span>
        <h1 className="bighi">{trail.title}</h1>
        <div className="ml-meta">
          <Diff d={trail.diff}/>
          <span className="time">{trail.missions} missões · ~{trail.time}</span>
          <span className="chip" data-c={mod.color}>{mod.name}</span>
        </div>
      </div>

      <div className="path-stage">
        <div className="path-rail">
          {missions.map((m,i)=>{
            const isLeft = i % 2 === 0;
            const isLast = i === missions.length-1;
            return (
              <div key={m.id} className={`path-node path-${m.status} ${isLeft?"path-l":"path-r"} ${m.isBoss?"path-boss":""}`}
                onClick={()=> m.status!=="locked" && go("mission")}>
                <button className="knob" disabled={m.status==="locked"} aria-label={m.title}>
                  {m.status==="done" ? <Ic.check style={{width:30,height:30}}/> :
                   m.status==="locked" ? <Ic.lock style={{width:24,height:24}}/> :
                   m.isBoss ? <Ic.trophy style={{width:28,height:28}}/> :
                   <span className="knob-num">{m.num}</span>}
                </button>
                <div className="knob-label">
                  <h5>{m.title}</h5>
                  <p>{m.status==="done"?"Concluída · ":m.status==="curr"?"Atual · ":""}{m.time} · +{m.xp} XP</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============ MISSION (with 4 tabs) ============
function ScreenMission({ go }){
  const m = MISSION_CONTENT;
  const [tab, setTab] = useState(0);
  const [choice, setChoice] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [challengeInput, setChallengeInput] = useState("");
  const [challengeOk, setChallengeOk] = useState(null);
  const [validated, setValidated] = useState([false,false,false]);

  const tabs = ["Aula","Prática","Desafio","Validação"];
  const canConcluir = validated.every(Boolean);

  function pickOption(i){
    setChoice(i);
    setRevealed(true);
  }
  function checkChallenge(){
    const norm = challengeInput.replace(/\s/g,"").toLowerCase();
    const exp = m.challenge.expected.replace(/\s/g,"").toLowerCase();
    setChallengeOk(norm === exp);
  }

  return (
    <div className="screen" data-screen-label="Missão">
      <button className="back" onClick={()=>go("mission-list",{trailId:"t2",modId:"pc"})}><Ic.arrL/> Voltar à trilha</button>

      <div className="mission-head">
        <span className="kicker">Missão 3 · {m.trail}</span>
        <h1 className="mission-title">{m.title}</h1>
        <div className="mission-meta">
          <Diff d={m.diff}/>
          <span className="time"><Ic.bolt/> {m.time} · +{m.xp} XP</span>
        </div>
      </div>

      <div className="tabs-row">
        <div className="tabs">
          {tabs.map((t,i)=>(
            <button key={t} className={tab===i?"active":""} onClick={()=>setTab(i)}>
              <span className="tab-n">{i+1}</span> {t}
              {i<tab && <Ic.check style={{width:14,height:14,color:"var(--sage)"}}/>}
            </button>
          ))}
        </div>
      </div>

      {/* AULA */}
      {tab===0 && (
        <div className="lesson">
          <blockquote className="hook">{m.hook}</blockquote>

          {m.concept.map((c,i)=>(
            <div className="concept" key={i}>
              <h4>{c.h}</h4>
              {c.body.map((p,j)=><p key={j} dangerouslySetInnerHTML={{__html: mdInline(p)}}/>)}
            </div>
          ))}

          <div className="lesson-grid">
            <div className="glossary">
              <div className="gl-title"><Ic.book style={{width:14,height:14}}/> Palavras novas</div>
              <dl>
                {m.glossary.map(([t,d],i)=><React.Fragment key={i}><dt>{t}</dt><dd>{d}</dd></React.Fragment>)}
              </dl>
            </div>
            <ol className="keypts">
              {m.keyPoints.map((p,i)=><li key={i}><div className="pn">{i+1}</div><div dangerouslySetInnerHTML={{__html: mdInline(p)}}/></li>)}
            </ol>
          </div>

          <div className="why">
            <div className="ic"><Ic.lamp/></div>
            <div><strong>Por que isso importa</strong><p>{m.why}</p></div>
          </div>

          <div className="lesson-foot">
            <button className="btn btn-l" onClick={()=>setTab(1)}>Avançar para a prática <Ic.chev/></button>
          </div>
        </div>
      )}

      {/* PRÁTICA */}
      {tab===1 && (
        <div className="practice">
          <span className="kicker">Prática · escolha a opção correta</span>
          <p className="ex-q">{m.practice.q}</p>
          <div className="ex-opts">
            {m.practice.options.map((o,i)=>{
              let cls = "ex-opt";
              if (revealed) {
                if (o.correct) cls += " ok";
                else if (choice===i) cls += " wr";
              } else if (choice===i) cls += " sel";
              return (
                <button key={i} className={cls} onClick={()=>!revealed && pickOption(i)} disabled={revealed && !o.correct && choice!==i}>
                  <span className="key">{o.k}{revealed && o.correct && " ✓"}</span>
                  <code>{o.t}</code>
                </button>
              );
            })}
          </div>

          {revealed && (
            <div className={`feedback ${m.practice.options[choice].correct?"ok":"wr"}`}>
              <div className="fb-ic">
                {m.practice.options[choice].correct ? <Ic.check/> : <Ic.alert/>}
              </div>
              <div>
                <strong>{m.practice.options[choice].correct?"Boa!":"Quase!"}</strong>
                {m.practice.options[choice].correct ? m.practice.feedbackOk : m.practice.feedbackWr}
              </div>
            </div>
          )}

          {revealed && m.practice.options[choice].correct && (
            <div className="practice-foot">
              <button className="btn btn-l" onClick={()=>setTab(2)}>Avançar para o desafio <Ic.chev/></button>
            </div>
          )}
          {revealed && !m.practice.options[choice].correct && (
            <div className="practice-foot">
              <button className="btn btn-sec" onClick={()=>{setChoice(null); setRevealed(false);}}>Tentar de novo</button>
            </div>
          )}
        </div>
      )}

      {/* DESAFIO */}
      {tab===2 && (
        <div className="challenge">
          <span className="kicker">Desafio aberto</span>
          <h3 className="ch-title">{m.challenge.title}</h3>
          <p className="ch-body">{m.challenge.body}</p>

          <div className="sim-excel">
            <div className="toolbar">Início · Inserir · Fórmulas</div>
            <div className="formula">
              <span className="fx">fx</span>
              <span className="cell-ref">D2 =</span>
              <input
                value={challengeInput}
                onChange={e=>{setChallengeInput(e.target.value); setChallengeOk(null);}}
                placeholder="digite sua fórmula aqui"
                className={`formula-input ${challengeOk===true?"ok":challengeOk===false?"wr":""}`}
              />
            </div>
            <table>
              <tbody>
                <tr><th></th><th className="colhead">A</th><th className="colhead">B</th><th className="colhead">C</th><th className="colhead">D</th></tr>
                <tr><th>1</th><td>Produto</td><td>Preço</td><td>Imposto</td><td>Total</td></tr>
                <tr><th>2</th><td>Café</td><td>8.00</td><td className="hl-c">5%</td><td className="hl-d">?</td></tr>
                <tr><th>3</th><td>Pão</td><td>3.50</td><td></td><td className="muted">⤓ arrastar</td></tr>
                <tr><th>4</th><td>Leite</td><td>5.20</td><td></td><td className="muted">⤓</td></tr>
              </tbody>
            </table>
          </div>

          <div className="practice-foot">
            <button className="btn" onClick={checkChallenge} disabled={!challengeInput}>Validar fórmula</button>
            {challengeOk===true && <button className="btn btn-l" onClick={()=>setTab(3)}>Avançar <Ic.chev/></button>}
          </div>

          {challengeOk===true && (
            <div className="feedback ok">
              <div className="fb-ic"><Ic.check/></div>
              <div><strong>Perfeito.</strong> Agora você pode arrastar de D2 até D20 e o C2 fica fixo. É exatamente o que se espera num emprego que mexe com Excel.</div>
            </div>
          )}
          {challengeOk===false && (
            <div className="feedback wr">
              <div className="fb-ic"><Ic.alert/></div>
              <div><strong>Quase.</strong> Lembra: o que deve <em>ficar fixo</em> ganha os cifrões. Aqui é o C2. Tente <code>=B2*$C$2</code>.</div>
            </div>
          )}
        </div>
      )}

      {/* VALIDAÇÃO */}
      {tab===3 && (
        <div className="validation">
          <span className="kicker">Validação · marque o que você consegue fazer</span>
          <h3 className="ch-title">Você está pronta para arrastar Excel para qualquer planilha?</h3>
          <div className="checklist">
            {m.validation.map((v,i)=>(
              <label key={i}>
                <input type="checkbox" checked={validated[i]} onChange={e=>{
                  const n=[...validated]; n[i]=e.target.checked; setValidated(n);
                }}/>
                <span className="box"><Ic.check style={{width:14,height:14}}/></span>
                <span className="txt" dangerouslySetInnerHTML={{__html: mdInline(v)}}/>
              </label>
            ))}
          </div>

          <div className="practice-foot">
            <button className="btn btn-xl" disabled={!canConcluir} onClick={()=>go("celebrate")}>
              Concluir missão · +{m.xp} XP
            </button>
            <p className="hint">{canConcluir ? "Tudo pronto. Vamos celebrar." : "Marque os 3 para concluir."}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// markdown helper (inline only: ** and `)
function mdInline(s){
  return s
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/`(.+?)`/g,'<code>$1</code>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>');
}

// ============ CELEBRATE ============
function ScreenCelebrate({ go }){
  return (
    <div className="screen celebrate-screen">
      <div className="cel-card">
        <div className="cel-burst">
          <Ic.star style={{width:56,height:56}}/>
        </div>
        <span className="kicker">Missão concluída</span>
        <h1 className="bighi">Você travou a <em>célula.</em></h1>
        <p className="cel-sub">+60 XP, ofensiva mantida, próxima missão liberada.</p>

        <div className="cel-stats">
          <div className="cel-stat">
            <strong>+60</strong>
            <span>XP ganhos</span>
          </div>
          <div className="cel-stat">
            <strong>13</strong>
            <span>dias seguidos <Ic.flame style={{color:"var(--streak)",width:14,height:14}}/></span>
          </div>
          <div className="cel-stat">
            <strong>3/6</strong>
            <span>missões da trilha</span>
          </div>
        </div>

        <div className="cel-actions">
          <button className="btn btn-l" onClick={()=>go("mission-list",{trailId:"t2",modId:"pc"})}>Próxima missão</button>
          <button className="btn btn-sec" onClick={()=>go("home")}>Voltar ao início</button>
        </div>
      </div>
    </div>
  );
}

// ============ PROFILE ============
function ScreenProfile({ go }){
  const pct = Math.round((USER.xp - USER.prevLevelAt) / (USER.nextLevelAt - USER.prevLevelAt) * 100);
  return (
    <div className="screen" data-screen-label="Perfil">
      <div className="prof-head">
        <Avatar initials={USER.initials} size="xl"/>
        <div>
          <span className="kicker">Estagiário → Coordenador · nível {USER.level} de 6</span>
          <h1 className="bighi">{USER.name}</h1>
          <div className="prof-stamps">
            <LvlStamp lvl={USER.level} name={USER.levelName}/>
            <Streak n={USER.streak}/>
          </div>
        </div>
      </div>

      <div className="xp-card">
        <div className="xp-card-l">
          <span className="kicker">Próximo nível</span>
          <div className="xp-line"><strong>{USER.xp.toLocaleString('pt-BR')}</strong> <span>/ {USER.nextLevelAt.toLocaleString('pt-BR')} XP</span></div>
          <div className="xpbar"><i style={{width:`${pct}%`}}/></div>
          <span className="xp-note">Mais <strong>{USER.nextLevelAt - USER.xp} XP</strong> e você vira <strong>Analista</strong>.</span>
        </div>
      </div>

      <div className="career-track">
        {CAREER.map(c=>{
          const passed = USER.xp >= c.xp;
          const current = USER.level === c.lvl;
          return (
            <div key={c.lvl} className={`ct-step ${passed?"passed":""} ${current?"current":""}`}>
              <div className="ct-seal">{c.letter}</div>
              <span className="ct-name">{c.name}</span>
              <span className="ct-xp">{c.xp.toLocaleString('pt-BR')} XP</span>
            </div>
          );
        })}
      </div>

      <div className="prof-grid">
        <div className="stat-card">
          <strong>22</strong>
          <span>missões concluídas</span>
        </div>
        <div className="stat-card">
          <strong>4</strong>
          <span>trilhas dominadas</span>
        </div>
        <div className="stat-card">
          <strong>5</strong>
          <span>troféus</span>
        </div>
        <div className="stat-card">
          <strong>1.740</strong>
          <span>XP total</span>
        </div>
      </div>

      <section className="block">
        <div className="block-head">
          <h2>Coleção de troféus</h2>
          <button className="btn-link" onClick={()=>go("trophies")}>Ver todos <Ic.chev/></button>
        </div>
        <div className="trophy-row">
          {TROPHIES.slice(0,5).map(t=><MiniTrophy key={t.id} t={t}/>)}
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Atalhos</h2></div>
        <div className="prof-shortcuts">
          <button className="ps-item" onClick={()=>go("settings")}><Ic.cog/> Configurações <Ic.chev/></button>
          <button className="ps-item" onClick={()=>go("diary")}><Ic.pen/> Diário de aprendizado <Ic.chev/></button>
          <button className="ps-item" onClick={()=>go("anatomy")}><Ic.layers/> Como o app é organizado <Ic.chev/></button>
        </div>
      </section>
    </div>
  );
}

function MiniTrophy({ t }){
  const color = t.colorOverride || (t.state==="done"||t.state==="new" ? "gold" : "gray");
  return (
    <div className={`mini-trophy mt-${t.state}`}>
      <div className={`medal medal-${color} medal-${t.state}`}>
        {t.ic==="flame" && <Ic.flame style={{width:24,height:24}}/>}
        {t.ic==="trophy" && <Ic.trophy style={{width:24,height:24}}/>}
        {t.ic==="shield" && <Ic.shield style={{width:24,height:24}}/>}
        {t.ic==="grid" && <Ic.grid style={{width:24,height:24}}/>}
        {t.ic==="book" && <Ic.book style={{width:24,height:24}}/>}
        {t.ic==="chat" && <Ic.chat style={{width:24,height:24}}/>}
      </div>
      <span className="mt-title">{t.title}</span>
      <span className="mt-sub">{t.state==="locked" ? t.req : t.sub}</span>
    </div>
  );
}

// ============ TROPHIES ============
function ScreenTrophies({ go }){
  const [filter, setFilter] = useState("all");
  const cats = [
    { id:"all",     t:"Todos",       ic:Ic.trophy },
    { id:"streak",  t:"Ofensiva",    ic:Ic.flame },
    { id:"marco",   t:"Maratona",    ic:Ic.trophy },
    { id:"dominio", t:"Domínio",     ic:Ic.grid },
    { id:"ingles",  t:"Inglês",      ic:Ic.book },
    { id:"combo",   t:"Combo",       ic:Ic.bolt },
    { id:"horario", t:"Horário",     ic:Ic.calendar },
    { id:"mentor",  t:"Mentor",      ic:Ic.chat },
    { id:"secret",  t:"Secretos",    ic:Ic.lock },
  ];

  const filtered = filter==="all" ? TROPHIES : TROPHIES.filter(t=>t.cat===filter);
  const done = TROPHIES.filter(t=>t.state==="done"||t.state==="new").length;
  const total = TROPHIES.length;
  const closeOnes = TROPHIES.filter(t=>t.state==="close");

  return (
    <div className="screen" data-screen-label="Troféus">
      <button className="back" onClick={()=>go("profile")}><Ic.arrL/> Perfil</button>
      <div className="hello">
        <div>
          <div className="kicker">{done} de {total} conquistados · {Math.round(done/total*100)}%</div>
          <h1 className="bighi">Sua <em>coleção</em>.</h1>
        </div>
        <div className="trophy-summary">
          <div className="ts-circle">
            <svg viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" stroke="var(--paper-warm)" strokeWidth="8" fill="none"/>
              <circle cx="40" cy="40" r="34" stroke="var(--coral)" strokeWidth="8" fill="none"
                strokeDasharray="213.6" strokeDashoffset={213.6 - 213.6 * done/total}
                strokeLinecap="round" transform="rotate(-90 40 40)"/>
            </svg>
            <strong>{done}</strong>
            <span>/ {total}</span>
          </div>
        </div>
      </div>

      {/* QUASE LÁ */}
      {closeOnes.length>0 && (
        <section className="block close-block">
          <div className="block-head">
            <h2><Ic.bolt style={{color:"var(--coral)",marginRight:"6px",verticalAlign:"-4px"}}/> Quase lá</h2>
            <span className="kicker">{closeOnes.length} a um passo</span>
          </div>
          <div className="close-grid">
            {closeOnes.map(t=>(
              <div key={t.id} className="close-card">
                <BigTrophy t={t}/>
                <div className="close-info">
                  <strong>{t.title}</strong>
                  <span>{t.sub}</span>
                  <div className="bar"><i style={{width:`${t.progress}%`, background:"var(--coral)"}}/></div>
                  <small>{t.req}</small>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FILTER TABS */}
      <div className="cat-tabs">
        {cats.map(c=>{
          const count = c.id==="all" ? TROPHIES.length : TROPHIES.filter(t=>t.cat===c.id).length;
          return (
            <button key={c.id} className={filter===c.id?"active":""} onClick={()=>setFilter(c.id)}>
              <c.ic style={{width:16,height:16}}/> {c.t} <span className="cnt">{count}</span>
            </button>
          );
        })}
      </div>

      {/* GRID */}
      <div className="trophy-mega-grid">
        {filtered.map(t=>(
          <div key={t.id} className={`mega-trophy mt-${t.state} tier-${t.tier}`}>
            <BigTrophy t={t}/>
            <div className="mt-info">
              <strong>{t.state==="secret" ? "???" : t.title}</strong>
              <span>{t.state==="secret" ? "Conquista oculta — descubra jogando" : t.sub}</span>
              {t.progress > 0 && t.state !== "done" && t.state !== "new" && t.state !== "secret" && (
                <div className="bar">
                  <i style={{width:`${t.progress}%`, background: t.state==="close"?"var(--coral)":"var(--honey)"}}/>
                </div>
              )}
              {t.req && t.state!=="done" && <small>{t.req}</small>}
              <span className={`tier-tag tier-${t.tier}`}>{t.tier}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="empty" style={{marginTop:"32px"}}>
        <div className="empty-ic"><Ic.lamp/></div>
        <h4>Algumas conquistas são secretas</h4>
        <p>Não estragamos a surpresa. Continue aparecendo e elas aparecem.</p>
      </div>
    </div>
  );
}

function BigTrophy({ t }){
  const color = t.colorOverride
    ? `medal-${t.colorOverride}`
    : t.state==="locked" || t.state==="secret"
      ? "medal-locked"
      : `medal-${t.tier}`;
  const icMap = { flame:Ic.flame, trophy:Ic.trophy, shield:Ic.shield, grid:Ic.grid, book:Ic.book, chat:Ic.chat, bolt:Ic.bolt, star:Ic.star, lamp:Ic.lamp, check:Ic.check, layers:Ic.layers, alert:Ic.alert, calendar:Ic.calendar, phone:Ic.phone, market:Ic.market, lock:Ic.lock, download:Ic.download, user:Ic.user };
  const Icon = icMap[t.ic] || Ic.trophy;
  return (
    <div className={`big-medal ${color} ${t.state==="new"?"is-new":""}`}>
      <Icon style={{width:28,height:28}}/>
      {t.tier==="mythic" && <span className="mythic-glow"/>}
    </div>
  );
}

// ============ AGENDA (heatmap) ============
function ScreenAgenda({ go }){
  return (
    <div className="screen" data-screen-label="Agenda">
      <div className="hello">
        <div>
          <div className="kicker">Suas 8 semanas · ofensiva ativa</div>
          <h1 className="bighi">A força da <em>repetição</em>.</h1>
        </div>
        <div className="hello-stamps">
          <Streak n={USER.streak}/>
        </div>
      </div>

      <div className="heatmap-card">
        <div className="hm-grid">
          <div className="hm-labels">
            <span>seg</span><span>ter</span><span>qua</span><span>qui</span><span>sex</span><span>sab</span><span>dom</span>
          </div>
          <div className="hm-cells">
            {HEATMAP.map((v,i)=>(
              <div key={i} className={`hm-cell hm-${v}`} title={`Dia ${i+1}`}/>
            ))}
          </div>
        </div>
        <div className="hm-legend">
          <span className="kicker">Menos</span>
          <span className="hm-cell hm-0"/>
          <span className="hm-cell hm-1"/>
          <span className="hm-cell hm-2"/>
          <span className="hm-cell hm-3"/>
          <span className="kicker">Mais</span>
        </div>
      </div>

      <section className="block">
        <div className="block-head">
          <h2>Próximas missões agendadas</h2>
          <button className="btn-link"><Ic.plus/> Adicionar</button>
        </div>
        <div className="agenda-list">
          {[
            { d:"Hoje", t:"Travar uma célula", mod:"pc", time:"18:00", color:"navy" },
            { d:"Amanhã", t:"PROCV simples", mod:"pc", time:"08:00", color:"navy" },
            { d:"Sexta", t:"Defesa contra phishing M3", mod:"seg", time:"09:30", color:"sage" },
            { d:"Sábado", t:"Inglês: cumprimentos", mod:"ing", time:"10:00", color:"plum" },
          ].map((a,i)=>(
            <div key={i} className="ag-item">
              <div className="ag-day">{a.d}<small>{a.time}</small></div>
              <div className="ag-divider" data-color={a.color}/>
              <div className="ag-body">
                <h5>{a.t}</h5>
                <span className="chip" data-c={a.color}>{MODULES.find(m=>m.id===a.mod).name}</span>
              </div>
              <button className="btn-ghico" aria-label="Mais"><Ic.chev/></button>
            </div>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Recordes pessoais</h2></div>
        <div className="record-grid">
          <div className="rec-card"><strong>23</strong><span>maior ofensiva (dias)</span></div>
          <div className="rec-card"><strong>5</strong><span>missões num só dia</span></div>
          <div className="rec-card"><strong>320</strong><span>XP ganho num dia</span></div>
        </div>
      </section>
    </div>
  );
}

// ============ MENTOR INBOX ============
function ScreenMentor({ go }){
  const [opened, setOpened] = useState(null);
  const items = MENTOR_INBOX;
  const item = items.find(i=>i.id===opened);

  return (
    <div className="screen" data-screen-label="Caixa do Mentor">
      <div className="hello">
        <div>
          <div className="kicker">Coordenador · Carlos Mendes</div>
          <h1 className="bighi">Caixa do <em>Mentor</em>.</h1>
        </div>
      </div>
      <p className="lede">Seu mentor virtual escreve aqui. Ele acompanha sua ofensiva e te empurra para a próxima missão.</p>

      <div className="mentor-grid">
        <div className="mentor-list">
          {items.map(m=>(
            <button key={m.id} className={`mentor-card mc-${m.status} ${opened===m.id?"open":""}`} onClick={()=>setOpened(m.id)}>
              <Avatar initials="CM" size="m" color={m.color}/>
              <div className="mc-body">
                <div className="mc-row">
                  <strong>{m.from}</strong>
                  <span className="mc-time">{m.time}</span>
                </div>
                <h5>{m.title}</h5>
                <p>{m.body}</p>
                <div className="mc-tags">
                  <span className="chip" data-c={m.color}>{m.tag}</span>
                  {m.status==="new" && <span className="chip chip-coral">novo</span>}
                </div>
              </div>
            </button>
          ))}
        </div>

        {item && (
          <div className="mentor-detail">
            <div className="md-head">
              <Avatar initials="CM" size="l" color={item.color}/>
              <div>
                <strong>{item.from}</strong>
                <span>{item.role} · {item.time}</span>
              </div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p>É comum ver alunos pulando essa missão por achar que já sabem. Lembra: travar referência é o que separa quem faz planilha de quem precisa refazer toda vez. Quando concluir, me responde por aqui contando como foi.</p>
            <div className="md-actions">
              <button className="btn btn-l" onClick={()=>opened==="i1"&&go("mission")}>Ir para a missão <Ic.chev/></button>
              <button className="btn btn-sec">Responder</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============ DIARY ============
function ScreenDiary({ go }){
  const [entries, setEntries] = useState(DIARY);
  const [newEntry, setNewEntry] = useState({ title:"", body:"" });
  const [composing, setComposing] = useState(false);

  function addEntry(){
    if(!newEntry.title.trim()) return;
    setEntries([{ id:"d"+Date.now(), date:"agora", time:"", ...newEntry }, ...entries]);
    setNewEntry({ title:"", body:"" });
    setComposing(false);
  }

  return (
    <div className="screen" data-screen-label="Diário">
      <div className="hello">
        <div>
          <div className="kicker">{entries.length} anotações · só você lê</div>
          <h1 className="bighi">Seu <em>caderno</em>.</h1>
        </div>
        <button className="btn" onClick={()=>setComposing(true)}><Ic.plus/> Nova anotação</button>
      </div>
      <p className="lede">Escreva o que você não quer esquecer. As anotações ficam só no seu aparelho — você pode exportar como arquivo.</p>

      {composing && (
        <div className="composer">
          <input className="input" placeholder="Título curto da ideia" value={newEntry.title} onChange={e=>setNewEntry({...newEntry,title:e.target.value})}/>
          <textarea className="input" placeholder="Escreva o que aprendeu, com suas palavras..." value={newEntry.body} onChange={e=>setNewEntry({...newEntry,body:e.target.value})}/>
          <div className="composer-actions">
            <button className="btn" onClick={addEntry}>Salvar</button>
            <button className="btn btn-sec" onClick={()=>{setComposing(false); setNewEntry({title:"",body:""});}}>Cancelar</button>
          </div>
        </div>
      )}

      <div className="diary-list">
        {entries.map(e=>(
          <article key={e.id} className="diary-card">
            <div className="dc-side">
              <span className="dc-date">{e.date}</span>
              {e.time && <span className="dc-time">{e.time}</span>}
            </div>
            <div className="dc-body">
              <h4>{e.title}</h4>
              <p>{e.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="empty" style={{marginTop:"32px"}}>
        <div className="empty-ic"><Ic.download/></div>
        <h4>Exportar como arquivo</h4>
        <p>Baixe um <code>.md</code> com todas as anotações. Útil para colar num documento ou imprimir.</p>
        <button className="btn btn-sec"><Ic.download/> Exportar diário</button>
      </div>
    </div>
  );
}

// ============ ANATOMY (educational screen explaining structure) ============
function ScreenAnatomy({ go }){
  return (
    <div className="screen" data-screen-label="Anatomia do app">
      <div className="hello">
        <div>
          <div className="kicker">Como o conteúdo é organizado</div>
          <h1 className="bighi">A <em>anatomia</em> de uma missão.</h1>
        </div>
      </div>
      <p className="lede">Tudo no Escritório segue a mesma hierarquia. Saber disso ajuda você a se orientar.</p>

      {/* Diagram */}
      <div className="anatomy-diag">
        <div className="ad-level ad-1">
          <span className="ad-tag">Nível 1</span>
          <strong>Módulo</strong>
          <p>Uma área de conhecimento (Computador, Celular, Mercado, Segurança, Inglês).</p>
          <div className="ad-children">
            <span>5 módulos no total</span>
          </div>
        </div>
        <div className="ad-arrow"><Ic.chev style={{transform:"rotate(90deg)"}}/></div>
        <div className="ad-level ad-2">
          <span className="ad-tag">Nível 2</span>
          <strong>Trilha</strong>
          <p>Um caminho dentro de um módulo. Tem dificuldade própria (Iniciante, Intermediário, Avançado).</p>
          <div className="ad-children">
            <span>3–6 trilhas por módulo</span>
          </div>
        </div>
        <div className="ad-arrow"><Ic.chev style={{transform:"rotate(90deg)"}}/></div>
        <div className="ad-level ad-3">
          <span className="ad-tag">Nível 3</span>
          <strong>Missão</strong>
          <p>Uma aula curta com prática. Você cumpre uma de cada vez. A última de cada trilha é o desafio chefe.</p>
          <div className="ad-children">
            <span>4–8 missões por trilha</span>
          </div>
        </div>
        <div className="ad-arrow"><Ic.chev style={{transform:"rotate(90deg)"}}/></div>
        <div className="ad-level ad-4">
          <span className="ad-tag">Nível 4</span>
          <strong>4 etapas da missão</strong>
          <p>Cada missão tem sempre o mesmo formato — você sabe o que esperar.</p>
          <div className="ad-stages">
            <div><span>1</span> Aula <small>texto curto</small></div>
            <div><span>2</span> Prática <small>1 exercício</small></div>
            <div><span>3</span> Desafio <small>tarefa aberta</small></div>
            <div><span>4</span> Validação <small>checklist</small></div>
          </div>
        </div>
      </div>

      <section className="block">
        <div className="block-head"><h2>Como você ganha XP e troféus</h2></div>
        <div className="anatomy-rules">
          <div className="ar-item">
            <div className="ar-ic"><Ic.star/></div>
            <div>
              <strong>XP a cada missão concluída</strong>
              <p>40 XP (iniciante), 60 (intermediário), 80 (avançado), 120 (desafio chefe).</p>
            </div>
          </div>
          <div className="ar-item">
            <div className="ar-ic"><Ic.flame style={{color:"var(--streak)"}}/></div>
            <div>
              <strong>Ofensiva</strong>
              <p>1 missão por dia mantém a chama. Pular 1 dia consome 1 escudo automaticamente.</p>
            </div>
          </div>
          <div className="ar-item">
            <div className="ar-ic"><Ic.trophy/></div>
            <div>
              <strong>Troféus por marco e por domínio</strong>
              <p>Marcos de missões (10, 50, 100), ofensiva (7, 30, 100 dias), trilhas concluídas, módulos dominados.</p>
            </div>
          </div>
          <div className="ar-item">
            <div className="ar-ic"><Ic.shield/></div>
            <div>
              <strong>Nível de carreira</strong>
              <p>Estagiário → Assistente Júnior → Pleno → Analista → Sênior → Coordenador. XP determina o nível.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Onde está cada coisa</h2></div>
        <ul className="anatomy-where">
          <li><strong>Início</strong> — saudação, ofensiva, missão do dia, desafio relâmpago.</li>
          <li><strong>Módulos</strong> — 5 caminhos coloridos para escolher.</li>
          <li><strong>Trilhas</strong> — dentro de cada módulo, lista de trilhas.</li>
          <li><strong>Agenda</strong> — heatmap da sua ofensiva e missões agendadas.</li>
          <li><strong>Caixa do Mentor</strong> — mensagens do Carlos Mendes (mentor virtual).</li>
          <li><strong>Diário</strong> — suas anotações de aprendizado.</li>
          <li><strong>Perfil</strong> — nível, XP, troféus, configurações.</li>
        </ul>
      </section>
    </div>
  );
}

// ============ SETTINGS ============
function ScreenSettings({ go, t, setTweak }){
  return (
    <div className="screen" data-screen-label="Configurações">
      <button className="back" onClick={()=>go("profile")}><Ic.arrL/> Perfil</button>
      <div className="hello">
        <div>
          <div className="kicker">Personalize · acessibilidade</div>
          <h1 className="bighi">Configurações</h1>
        </div>
      </div>

      <section className="block">
        <div className="block-head"><h2>Leitura</h2></div>
        <div className="setting-card">
          <div className="sc-l"><Ic.font/></div>
          <div className="sc-mid">
            <strong>Tamanho da fonte</strong>
            <p>O app inteiro fica mais legível. {["Pequeno (17px)","Normal (19px)","Grande (21px)"][t.fontStep]}</p>
            <input type="range" min="0" max="2" step="1" value={t.fontStep} onChange={e=>setTweak('fontStep', +e.target.value)} className="sl"/>
          </div>
        </div>

        <div className="setting-card">
          <div className="sc-l"><Ic.contrast/></div>
          <div className="sc-mid">
            <strong>Alto contraste</strong>
            <p>Escurece o fundo e intensifica os textos. Útil em telas refletindo luz.</p>
          </div>
          <label className="switch">
            <input type="checkbox" checked={t.highContrast} onChange={e=>setTweak('highContrast', e.target.checked)}/>
            <span className="track"/>
          </label>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Público</h2></div>
        <div className="setting-card">
          <div className="sc-l"><Ic.user/></div>
          <div className="sc-mid">
            <strong>Quem usa este aparelho?</strong>
            <p>Ajusta o tom das mensagens e o tamanho das ilustrações. {t.audience==="jovem"?"Linguagem mais direta, gamificação visível.":t.audience==="adulto"?"Tom editorial, foco em utilidade.":"Mistura calorosa — padrão."}</p>
            <div className="seg" style={{marginTop:"12px"}}>
              <button className={t.audience==="jovem"?"active":""} onClick={()=>setTweak('audience','jovem')}>Jovem (10–)</button>
              <button className={t.audience==="mix"?"active":""} onClick={()=>setTweak('audience','mix')}>Mistura</button>
              <button className={t.audience==="adulto"?"active":""} onClick={()=>setTweak('audience','adulto')}>Adulto (40+)</button>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Dados</h2></div>
        <div className="setting-card">
          <div className="sc-l"><Ic.download/></div>
          <div className="sc-mid">
            <strong>Backup do seu progresso</strong>
            <p>Baixa um arquivo .json com seu XP, missões, diário e troféus. Use para passar entre aparelhos.</p>
          </div>
          <button className="btn btn-sec">Exportar</button>
        </div>
        <div className="setting-card">
          <div className="sc-l" style={{color:"var(--coral-deep)"}}><Ic.alert/></div>
          <div className="sc-mid">
            <strong>Recomeçar progresso</strong>
            <p>Apaga tudo (XP, ofensiva, troféus). Não dá pra desfazer.</p>
          </div>
          <button className="btn btn-dest">Recomeçar</button>
        </div>
      </section>

      <section className="block">
        <div className="block-head"><h2>Sobre</h2></div>
        <div className="setting-card">
          <div className="sc-l"><Ic.user/></div>
          <div className="sc-mid">
            <strong>Refazer o onboarding</strong>
            <p>Volta para as 3 perguntas iniciais (nome, idade, vertente). Útil para mostrar o app a outra pessoa.</p>
          </div>
          <button className="btn btn-sec" onClick={()=>{ setTweak({ onboarded:false }); go("onboarding"); }}>Refazer</button>
        </div>
        <div className="about-card">
          <strong>Escritório</strong>
          <span>versão 2.0 · maio 2026 · feito para 10— e 40+</span>
          <span style={{marginTop:"8px",fontFamily:"var(--f-mono)",fontSize:"12px",color:"var(--ink-mute)"}}>"Aprender é confiar no próximo passo."</span>
        </div>
      </section>
    </div>
  );
}

// ============ ONBOARDING ============
function ScreenOnboarding({ go, setTweak, finish }){
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [ageBand, setAgeBand] = useState(null);
  const [vertente, setVertente] = useState(null);

  const ageBands = [
    { id:"kid",    label:"10 — 14",  sub:"começando agora",        audience:"jovem",   ic:"star" },
    { id:"teen",   label:"15 — 29",  sub:"acelerando a carreira",  audience:"mix",     ic:"bolt" },
    { id:"adult",  label:"30 — 44",  sub:"recolocando, crescendo", audience:"mix",     ic:"trail" },
    { id:"older",  label:"45 +",     sub:"autonomia digital",      audience:"adulto",  ic:"book" },
  ];
  const vertentes = [
    { id:"pc",  label:"Computador",    sub:"Office, IA, e-mail",       color:"navy" },
    { id:"cel", label:"Celular",       sub:"WhatsApp, PIX, Gov.br",    color:"sky" },
    { id:"mix", label:"Os dois",       sub:"misturar livremente",      color:"coral" },
  ];

  function confirmAge(b){
    setAgeBand(b);
    setTweak({ audience: b.audience, ageBand: b.id });
  }

  function done(){
    setTweak({ onboarded:true, userName: name, vertentePref: vertente });
    finish();
  }

  return (
    <div className="screen onboarding">
      <div className="ob-shell">
        {/* progress */}
        <div className="ob-progress">
          {[0,1,2].map(i=>(
            <span key={i} className={`ob-dot ${i<=step?"on":""} ${i<step?"done":""}`}/>
          ))}
        </div>

        {step===0 && (
          <div className="ob-card">
            <div className="ob-mark">
              <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
                <path d="M5 13h17v8a5 5 0 0 1-5 5h-7a5 5 0 0 1-5-5v-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M22 15h2.5a2.5 2.5 0 0 1 0 5H22" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 28h19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 9c-1-1.5-1-3 0-4.5M16 9c-1-1.5-1-3 0-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="kicker">Bem-vindo · 3 perguntas rápidas</span>
            <h1 className="bighi">Como devemos te <em>chamar</em>?</h1>
            <p className="lede">Esse nome aparece nas saudações. Pode ser o primeiro nome, apelido ou qualquer coisa.</p>
            <input
              className="input ob-input"
              placeholder="Digite seu nome"
              value={name}
              onChange={e=>setName(e.target.value)}
              autoFocus
            />
            <div className="ob-foot">
              <button className="btn btn-l" disabled={!name.trim()} onClick={()=>setStep(1)}>
                Próximo <Ic.chev/>
              </button>
              <button className="btn-link" onClick={()=>{ setName("Convidado"); setStep(1); }}>
                Pular por agora
              </button>
            </div>
          </div>
        )}

        {step===1 && (
          <div className="ob-card">
            <span className="kicker">2 de 3 · Idade</span>
            <h1 className="bighi">Quantos anos você <em>tem</em>, {name}?</h1>
            <p className="lede">A gente ajusta o tom, o tamanho dos botões e a forma de explicar para combinar com você. Pode mudar depois nas Configurações.</p>

            <div className="ob-age-grid">
              {ageBands.map(b=>(
                <button
                  key={b.id}
                  className={`ob-age ${ageBand?.id===b.id?"sel":""}`}
                  onClick={()=>confirmAge(b)}
                >
                  <span className="ob-age-num">{b.label}</span>
                  <span className="ob-age-sub">{b.sub}</span>
                  {ageBand?.id===b.id && <span className="ob-age-tag">tom · {b.audience==="jovem"?"direto e jovem":b.audience==="adulto"?"editorial":"misto"}</span>}
                </button>
              ))}
            </div>

            <div className="ob-foot">
              <button className="btn btn-sec" onClick={()=>setStep(0)}><Ic.arrL/> Voltar</button>
              <button className="btn btn-l" disabled={!ageBand} onClick={()=>setStep(2)}>Próximo <Ic.chev/></button>
            </div>
          </div>
        )}

        {step===2 && (
          <div className="ob-card">
            <span className="kicker">3 de 3 · Por onde começar?</span>
            <h1 className="bighi">No que você <em>quer focar</em>?</h1>
            <p className="lede">Não tranca nada. Você sempre pode pular para outro módulo na tela inicial.</p>

            <div className="ob-vert-grid">
              {vertentes.map(v=>(
                <button
                  key={v.id}
                  className={`ob-vert ${vertente===v.id?"sel":""}`}
                  data-color={v.color}
                  onClick={()=>setVertente(v.id)}
                >
                  <div className="ob-vert-ic">
                    {v.id==="pc" && <Ic.computer style={{width:32,height:32}}/>}
                    {v.id==="cel"&& <Ic.phone style={{width:32,height:32}}/>}
                    {v.id==="mix"&& <Ic.layers style={{width:32,height:32}}/>}
                  </div>
                  <strong>{v.label}</strong>
                  <span>{v.sub}</span>
                </button>
              ))}
            </div>

            <div className="ob-foot">
              <button className="btn btn-sec" onClick={()=>setStep(1)}><Ic.arrL/> Voltar</button>
              <button className="btn btn-xl" disabled={!vertente} onClick={done}>
                Entrar no Escritório <Ic.chev/>
              </button>
            </div>
          </div>
        )}

        {/* tom de preview */}
        {step>0 && ageBand && (
          <div className="ob-preview">
            <span className="kicker">Prévia do tom para você</span>
            <div className="ob-preview-msg">
              {ageBand.audience==="jovem" && <em>"Boa! 🎯 Você travou a célula. +60 XP. Bora pra próxima?"</em>}
              {ageBand.audience==="adulto" && <em>"Você travou a célula com sucesso. Esse atalho vale ouro em qualquer planilha."</em>}
              {ageBand.audience==="mix" && <em>"Boa! Você travou a célula. Pronto pro próximo passo. +60 XP."</em>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

window.SCREENS = { ScreenOnboarding, ScreenHome, ScreenModules, ScreenTrilhas, ScreenMissionList, ScreenMission, ScreenCelebrate, ScreenProfile, ScreenTrophies, ScreenAgenda, ScreenMentor, ScreenDiary, ScreenAnatomy, ScreenSettings };
