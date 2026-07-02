(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`memory`,title:`Memory and retention`,realm:`Memory Vault`,status:`active`,summary:`Remembering instructions, facts, names, sequences, and what stays after time passes.`,helpsWith:[`working memory`,`delayed recall`,`visual memory`,`verbal memory`,`memory anchors`],assessmentSignals:[`sequence recall`,`delay effect`,`distraction effect`,`error position`],aliases:[`memory`,`remembering`,`retention`,`recall`,`forgetting`]},{id:`focus`,title:`Focus and executive control`,realm:`Focus Tower`,status:`active`,summary:`Staying with the right signal, ignoring distractions, controlling pace, and switching rules.`,helpsWith:[`sustained attention`,`selective attention`,`inhibitory control`,`rule switching`,`pace control`],assessmentSignals:[`missed targets`,`decoy taps`,`response-time drift`,`rule-switch recovery`],aliases:[`focus`,`attention`,`executive function`,`executive control`,`distraction`,`concentration`]},{id:`reading-comprehension`,title:`Reading comprehension`,realm:`Language Grove`,status:`active`,summary:`Understanding what text says, what it implies, what matters most, and what the learner remembers later.`,helpsWith:[`literal meaning`,`sequencing`,`inference`,`main idea`,`summarizing`],assessmentSignals:[`reading time`,`rereading`,`choice accuracy`,`inference misses`,`retention after reading`],aliases:[`reading`,`comprehension`,`reading comprehension`,`understanding text`,`books`]},{id:`language-vocabulary`,title:`Language and vocabulary`,realm:`Language Grove`,status:`active`,summary:`Building word meaning, sentence understanding, listening comprehension, and background knowledge.`,helpsWith:[`vocabulary`,`syntax`,`listening comprehension`,`background knowledge`],assessmentSignals:[`unknown word handling`,`audio support effect`,`sentence complexity errors`],aliases:[`language`,`vocabulary`,`words`,`listening`,`sentences`]},{id:`math`,title:`Math and numeracy`,realm:`Logic Forge`,status:`active`,summary:`Number sense, arithmetic, fractions, balance reasoning, and confidence with quantitative tasks.`,helpsWith:[`number sense`,`arithmetic fluency`,`fractions`,`ratios`,`algebra readiness`],assessmentSignals:[`math accuracy`,`visual support effect`,`timer sensitivity`,`concept versus pace errors`],aliases:[`math`,`numeracy`,`numbers`,`arithmetic`,`fractions`,`algebra`]},{id:`problem-solving`,title:`Logic and problem solving`,realm:`Logic Forge`,status:`active`,summary:`Seeing patterns, representing problems, testing rules, and adapting when a solution path changes.`,helpsWith:[`pattern recognition`,`adaptive problem solving`,`spatial reasoning`,`multistep thinking`],assessmentSignals:[`rule discovery`,`strategy switching`,`repeated failed action`,`transfer to new puzzles`],aliases:[`logic`,`reasoning`,`problem solving`,`puzzles`,`patterns`]},{id:`strategy`,title:`Learning strategy and metacognition`,realm:`Strategy Observatory`,status:`active`,summary:`Helping learners plan, monitor understanding, choose strategies, and know when they need support.`,helpsWith:[`goal setting`,`confidence calibration`,`error analysis`,`help seeking`,`strategy choice`],assessmentSignals:[`goal specificity`,`confidence prediction`,`reflection accuracy`,`hint timing`],aliases:[`strategy`,`metacognition`,`learning strategy`,`study skills`,`planning`]},{id:`confidence`,title:`Confidence and emotional learning state`,realm:`Inner Compass`,status:`active`,summary:`Reducing shame, noticing pressure, recovering after mistakes, and building a healthier learner identity.`,helpsWith:[`math anxiety`,`reading shame`,`frustration recovery`,`persistence`,`motivation`],assessmentSignals:[`self-reported feeling`,`quit point`,`recovery after error`,`pressure sensitivity`],aliases:[`confidence`,`anxiety`,`shame`,`motivation`,`emotions`,`frustration`]},{id:`speed-accuracy`,title:`Learning speed with accuracy`,realm:`Tempo Arena`,status:`planned`,summary:`Getting faster only after understanding is stable, so speed does not destroy comprehension.`,helpsWith:[`fluency`,`pacing`,`endurance`,`speed accuracy balance`],assessmentSignals:[`time trend`,`accuracy drop under speed`,`pacing choices`],aliases:[`speed`,`fluency`,`faster learning`,`pace`,`accuracy`]},{id:`transfer`,title:`Transfer to real life`,realm:`Worldgate`,status:`planned`,summary:`Checking whether skills used in the app help with real reading, work, studying, money, and daily memory.`,helpsWith:[`work learning`,`real-world reading`,`daily memory`,`self-teaching`,`test preparation`],assessmentSignals:[`outside-app check-ins`,`capstone tasks`,`new-context performance`],aliases:[`transfer`,`real life`,`work`,`daily life`,`self teaching`,`test prep`]},{id:`readiness`,title:`Readiness, fatigue, and learning environment`,realm:`Readiness Gate`,status:`planned`,summary:`Understanding whether stress, tiredness, noise, time of day, or sensory load is affecting performance.`,helpsWith:[`fatigue awareness`,`stress signals`,`learning environment`,`session planning`],assessmentSignals:[`readiness check-in`,`performance by time`,`low-distraction support effect`],aliases:[`readiness`,`fatigue`,`sleep`,`stress`,`environment`,`tired`]}];function t(){let t=e.filter(e=>e.status===`active`),n=e.filter(e=>e.status===`planned`),r=t.map(e=>`${e.title}: ${e.summary}`).join(` `),i=n.map(e=>e.title).join(`, `);return`Mind Realms is being designed to help with ${t.map(e=>e.title).join(`, `)}. ${r} Planned expansion areas include ${i}. If a new topic is already in the map, the app will ask whether you meant to research it more deeply or whether it was added by mistake.`}function n(t){let n=r(t);if(n)return e.find(e=>[e.id,e.title,e.realm,...e.aliases].some(e=>{let t=r(e);return n===t||n.includes(t)||t.includes(n)}))}function r(e){return e.toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9 ]+/g,` `).replace(/\s+/g,` `).trim()}var i=`modulepreload`,a=function(e){return`/mind-realms-live/`+e},o={},s=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function u(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=l(t.map(t=>{if(t=a(t,n),t=u(t),t in o)return;o[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let s=document.createElement(`link`);if(s.rel=r?`stylesheet`:i,r||(s.as=`script`),s.crossOrigin=``,s.href=t,c&&s.setAttribute(`nonce`,c),document.head.appendChild(s),r)return new Promise((e,n)=>{s.addEventListener(`load`,e),s.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})},c=document.querySelector(`#app`);if(!c)throw Error(`App root was not found.`);var l=c,u=[`intro`,`ori`,`subjects`,`goals`,`realms`,`memory`,`focus`,`language`,`logic`,`reflection`,`report`,`quest`,`path`],d=[`Remember what I learn`,`Read and understand faster`,`Get stronger at math`,`Focus without drifting`,`Learn faster for work`,`Prepare for a test`,`Become a super learner`],f=[`Build confidence`,`Stop forgetting instructions`,`Improve problem solving`,`Think clearly under pressure`,`Read books and retain them`,`Learn like I never learned in school`],p=[[`Sun`,`Key`,`Wave`],[`Gate`,`Sun`,`Crown`,`Key`],[`Leaf`,`Wave`,`Gate`,`Crown`,`Sun`]],m=[`Sun`,`Key`,`Wave`,`Gate`,`Crown`,`Leaf`],h=[{label:`Gold Star`,target:!0},{label:`Silver Moon`,target:!1},{label:`Gold Star`,target:!0},{label:`Blue Gate`,target:!1},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Moon`,target:!0},{label:`Moon`,target:!0},{label:`Sun`,target:!1},{label:`Sun`,target:!0,afterSwitch:!0},{label:`Moon`,target:!1,afterSwitch:!0},{label:`Sun`,target:!0,afterSwitch:!0}],g=[{id:`literal`,prompt:`Which object did Mara carry through the rain?`,options:[`A silver seed`,`A broken lantern`,`A sleeping bird`],answer:`A silver seed`},{id:`sequence`,prompt:`What had to happen before Mara opened her hand?`,options:[`The thunder had to stop`,`The map had to burn`,`The seed had to glow`],answer:`The thunder had to stop`},{id:`inference`,prompt:`Why did Mara wait?`,options:[`The map warned the seed would wake only when the sky became quiet`,`She forgot what she was carrying`,`She wanted the rain to wash the map away`],answer:`The map warned the seed would wake only when the sky became quiet`},{id:`main`,prompt:`What is this moment mostly about?`,options:[`Following a warning carefully`,`Escaping a dangerous animal`,`Learning how to draw a map`],answer:`Following a warning carefully`}],_=[{id:`make10`,prompt:`Choose the pair of stones that makes 10.`,options:[`4 and 6`,`2 and 9`,`7 and 4`,`5 and 6`],answer:`4 and 6`},{id:`pattern`,prompt:`Complete the symbol pattern: 3, 6, 12, 24, ?`,options:[`30`,`36`,`48`,`72`],answer:`48`},{id:`fraction`,prompt:`Which piece matches one half?`,options:[`Two of four equal parts`,`One of three equal parts`,`Three of four equal parts`,`One of six equal parts`],answer:`Two of four equal parts`},{id:`balance`,prompt:`The gate shows: Box + 3 = 8. What is hidden in the box?`,options:[`3`,`4`,`5`,`8`],answer:`5`}],v=()=>({screen:`intro`,reducedMotion:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,audioStatus:`Audio summary ready.`,topicDraft:``,researchQueue:[],primaryGoal:``,secondaryGoal:``,freeGoal:``,events:[],memory:{phase:`intro`,round:0,input:[],correctPositions:0,totalPositions:0,errorPositions:[],delayErrors:0,distractionErrors:0,feedback:``},focus:{phase:`intro`,index:0,presentedAt:0,missedTargets:0,decoyTaps:0,correct:0,total:0,switchErrors:0,responseTimes:[],reflection:``},language:{index:0,answers:[],startedAt:0,reread:!1,audio:!1},logic:{index:0,answers:[]},reflection:{feeling:``,strongest:``},firstQuestComplete:!1}),y=v(),b=null,x=(e,t)=>{y.events.push({type:e,screen:y.screen,timestamp:Date.now(),payload:t})},S=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e),C=()=>{let e=u.indexOf(y.screen);e<u.length-1&&(y.screen=u[e+1],x(`screen_viewed`,{screen:y.screen}),$())},w=e=>{y.screen=e,x(`screen_viewed`,{screen:e}),$()},T=()=>{D(!1),y=v(),x(`prototype_reset`),$()};function E(){if(!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){y.audioStatus=`This browser cannot play voice audio yet. Open in Chrome or a mobile browser to hear it spoken.`,x(`subject_audio_unavailable`),$();return}window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(t());n.rate=.94,n.pitch=.92,n.onend=()=>{y.audioStatus=`Audio summary finished.`,x(`subject_audio_finished`),$()},n.onerror=()=>{y.audioStatus=`Audio did not play in this browser. Open in Chrome or a mobile browser to hear it spoken.`,x(`subject_audio_error`),$()},y.audioStatus=`Playing subject summary...`,x(`subject_audio_started`,{subjectCount:e.length}),$(),window.speechSynthesis.speak(n)}function D(e=!0){`speechSynthesis`in window&&window.speechSynthesis.cancel(),y.audioStatus=`Audio summary stopped.`,x(`subject_audio_stopped`),e&&$()}function O(e){let t=y.topicDraft.trim();if(!t){y.topicNotice={kind:`empty`,message:`Type a topic first, then I can check whether it is already in the learning map.`},$();return}let r=n(t);if(r&&!e){y.topicNotice={kind:`duplicate`,subjectTitle:r.title,message:`Hey, you added this already: ${r.title}. Are you purposely trying to research more to get a more in-depth feel, or did you kind of make a mistake?`},x(`duplicate_topic_detected`,{query:t,subject:r.id}),$();return}let i=r?`Deep research: ${r.title}`:`New topic research: ${t}`;y.researchQueue.includes(i)||y.researchQueue.push(i),y.topicNotice={kind:`queued`,subjectTitle:r?.title,message:r?`${r.title} is already in the map, so I added a deeper research pass to the queue.`:`${t} is not in the current map yet, so I added it to the future research queue.`},x(`topic_research_queued`,{query:t,existingSubject:r?.id}),$()}var k=e=>{let t=u.indexOf(y.screen),n=u.map((e,n)=>`<span class="step-dot ${n<=t?`active`:``}"></span>`).join(``);return`
    <div class="app ${y.reducedMotion?`reduced-motion`:``}">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <strong>Mind Realms</strong>
            <span>First-session prototype</span>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="ghost-button" data-action="motion">${y.reducedMotion?`Motion off`:`Motion on`}</button>
          <button class="ghost-button" data-action="reset">Reset</button>
        </div>
      </header>
      <main class="shell">
        <div class="progress" aria-label="Prototype progress">
          <div class="progress-row">${n}</div>
        </div>
        ${e}
      </main>
    </div>
  `},ee=()=>k(`
  <section class="hero-layout">
    <div class="narrative">
      <div class="eyebrow">Private learning academy</div>
      <h1>Welcome to the Mind Realms.</h1>
      <p class="lede">This world changes as it learns how you learn. Enter a short trial, then receive your first learning signals without grades, shame, or school energy.</p>
      <div class="actions">
        <button class="primary-button" data-action="next">Begin</button>
        <button class="secondary-button" data-action="go-report">Skip to report</button>
      </div>
    </div>
    <div class="scene-panel">
      <div id="brainScene"></div>
      <div class="scene-caption">
        <span>Symbolic body and mind map</span>
        <span>Memory, focus, language, logic</span>
      </div>
    </div>
  </section>
`),A=()=>k(`
  <section class="screen two-column">
    <div class="screen-header">
      <div class="eyebrow">Ori awakens</div>
      <h2>No grades. Only signals.</h2>
      <p class="lede">Ori is not here to diagnose you. Ori watches for patterns in how you remember, focus, read, solve, and recover.</p>
    </div>
    <div class="panel">
      <div class="panel-inner ori">
        <div class="ori-mark" aria-hidden="true"></div>
        <div class="ori-copy">
          <p>I am Ori. I do not know your mind yet, so I will not pretend to know your path.</p>
          <p>Play through four short trials. I will watch how you remember, focus, read, solve, and recover.</p>
          <p>There are no grades here. Only signals.</p>
          <div class="actions">
            <button class="primary-button" data-action="next">Hear the subject map</button>
          </div>
        </div>
      </div>
    </div>
  </section>
`),j=()=>{let n=e.filter(e=>e.status===`active`),r=e.filter(e=>e.status===`planned`),i=t(),a=n.map(e=>`
        <article class="subject-card">
          <div class="subject-card-top">
            <span class="subject-status">Active</span>
            <span>${e.realm}</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.summary}</p>
        </article>
      `).join(``),o=r.map(e=>`
        <article class="subject-card planned">
          <div class="subject-card-top">
            <span class="subject-status">Planned</span>
            <span>${e.realm}</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.summary}</p>
        </article>
      `).join(``),s=y.topicNotice?`
      <div class="topic-alert ${y.topicNotice.kind}">
        ${y.topicNotice.kind===`duplicate`?`<strong class="flash-word">Already added</strong>`:``}
        <p>${y.topicNotice.message}</p>
        ${y.topicNotice.kind===`duplicate`?`<div class="actions">
                <button class="secondary-button" data-action="topic-deep">Research deeper anyway</button>
                <button class="small-button" data-action="topic-clear">Clear</button>
              </div>`:``}
      </div>
    `:``,c=y.researchQueue.length?`
      <div class="footer-note">
        Research queue: ${y.researchQueue.map(S).join(`, `)}
      </div>
    `:``;return k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Subject map</div>
        <h2>Hear what Mind Realms can help train.</h2>
        <p class="lede">This list is data-driven so new topics can be added without rebuilding the whole app. If a topic already exists, the app asks whether you want deeper research or whether it was added by mistake.</p>
      </div>
      <div class="two-column">
        <div class="panel">
          <div class="panel-inner">
            <h3>Audio summary</h3>
            <p class="lede">A spoken overview of the learning areas we can help with: memory, focus, reading, language, math, reasoning, strategy, confidence, and expansion areas.</p>
            <div class="actions">
              <button class="primary-button" data-action="speak-subject-summary">Play audio summary</button>
              <button class="secondary-button" data-action="stop-subject-summary">Stop audio</button>
            </div>
            <p class="footer-note">${y.audioStatus}</p>
            <p class="audio-transcript">${S(i)}</p>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Add or research a topic</h3>
            <input class="text-input" id="topicDraft" value="${S(y.topicDraft)}" placeholder="Try: focus, sleep, writing, motivation..." />
            <div class="actions">
              <button class="primary-button" data-action="topic-check">Check topic</button>
            </div>
            ${s}
            ${c}
          </div>
        </div>
      </div>
      <div class="subject-grid">
        ${a}
        ${o}
      </div>
      <div class="actions">
        <button class="primary-button" data-action="next">Choose my learning goal</button>
      </div>
    </section>
  `)},M=()=>k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Choose your path</div>
        <h2>What do you want to become stronger at?</h2>
        <p class="lede">Pick one main goal. Add a second signal if it matters. You can write the real version in your own words.</p>
      </div>
      <div class="two-column">
        <div class="panel">
          <div class="panel-inner">
            <h3>Primary goal</h3>
            <div class="choice-grid">${d.map(e=>`<button class="choice-button ${y.primaryGoal===e?`selected`:``}" data-goal="${S(e)}">${S(e)}</button>`).join(``)}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Secondary signal</h3>
            <div class="choice-grid">${f.map(e=>`<button class="choice-button ${y.secondaryGoal===e?`selected`:``}" data-secondary="${S(e)}">${S(e)}</button>`).join(``)}</div>
            <textarea class="text-field" id="freeGoal" placeholder="Tell Ori what you want to become.">${S(y.freeGoal)}</textarea>
            <div class="actions">
              <button class="primary-button" data-action="next">${y.primaryGoal?`Open the realms`:`Choose a goal first`}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),N=()=>k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Symbolic brain map</div>
        <h2>These are not labels. They are doorways.</h2>
        <p class="lede">Each realm gives Ori a different kind of first signal. The map is a learning metaphor, not a medical claim.</p>
      </div>
      <div class="realm-grid">${[[`Memory Vault`,`Recall, retention, instructions`,`rgba(231, 202, 139, 0.26)`],[`Focus Tower`,`Attention, pace, rule switching`,`rgba(105, 216, 174, 0.24)`],[`Language Grove`,`Reading, inference, meaning`,`rgba(122, 219, 226, 0.22)`],[`Logic Forge`,`Math, patterns, problem solving`,`rgba(255, 144, 120, 0.2)`],[`Strategy Observatory`,`Confidence, reflection, planning`,`rgba(206, 167, 255, 0.18)`]].map(([e,t,n])=>`
        <article class="realm" style="--realm-color: ${n}">
          <div class="realm-content">
            <h3>${e}</h3>
            <span>${t}</span>
          </div>
        </article>
      `).join(``)}</div>
      <div class="actions">
        <button class="primary-button" data-action="next">Start the Mind Trial</button>
      </div>
    </section>
  `),P=()=>{let e=p[y.memory.round]??[],t=m.map(e=>`<button class="rune-button" data-rune="${e}">${e}</button>`).join(``),n=`Round ${Math.min(y.memory.round+1,p.length)} of ${p.length}`,r=``;return r=y.memory.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Memory Vault</h3>
          <p class="lede">Watch the magic symbol sequence, then rebuild it after the vault closes.</p>
          <button class="primary-button" data-action="memory-start">Begin memory trial</button>
        </div>
      </div>
    `:y.memory.phase===`show`?`
      <div class="trial-surface">
        <div class="rune-sequence">
          ${e.map(e=>`<div class="rune glow">${e}</div>`).join(``)}
        </div>
      </div>
    `:y.memory.phase===`answer`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">Rebuild the sequence. Current answer: ${y.memory.input.join(` -> `)||`none yet`}</p>
          <div class="answer-row">${t}</div>
        </div>
      </div>
    `:y.memory.phase===`feedback`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${y.memory.feedback}</p>
          <button class="primary-button" data-action="memory-next-round">Continue</button>
        </div>
      </div>
    `:`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${K()}</p>
          <button class="primary-button" data-action="next">Enter Focus Tower</button>
        </div>
      </div>
    `,k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">${n}</div>
        <h2>Memory Vault</h2>
        <p class="lede">Ori is looking for recall, sequence memory, delay effect, and distraction recovery.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${r}</div></div>
    </section>
  `)},F=()=>{let e=h[y.focus.index],t=``;return t=y.focus.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Focus Tower Pulse</h3>
          <p class="lede">Hold the rule, ignore decoys, and switch when the tower changes. Accuracy matters more than speed.</p>
          <button class="primary-button" data-action="focus-start">Begin focus pulse</button>
        </div>
      </div>
    `:y.focus.phase===`run`&&e?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${y.focus.index<5?`Tap Gold Star. Let other signs pass.`:y.focus.index<8?`Tap Gold Star. Ignore Cracked Star.`:y.focus.index<11?`Tap Moon.`:`The tower chimed. Now tap Sun.`}</p>
          <div class="focus-token ${e.decoy?`decoy`:``}">${e.label}</div>
          <div class="actions">
            <button class="primary-button" data-focus-action="tap">Tap</button>
            <button class="secondary-button" data-focus-action="pass">Let pass</button>
          </div>
        </div>
      </div>
    `:y.focus.phase===`reflect`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>What happened to your attention?</h3>
          <div class="choice-grid">
            ${[`It held steady`,`It drifted`,`I rushed`,`The rule switch got me`,`I felt pressure`].map(e=>`<button class="choice-button" data-focus-reflect="${e}">${e}</button>`).join(``)}
          </div>
        </div>
      </div>
    `:`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${q()}</p>
          <button class="primary-button" data-action="next">Enter Language Grove</button>
        </div>
      </div>
    `,k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Trial 2 of 4</div>
        <h2>Focus Tower</h2>
        <p class="lede">This short pulse helps Ori avoid mistaking attention drift or rushing for weak memory, reading, or math.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${t}</div></div>
    </section>
  `)},te=()=>{let e=g[y.language.index],t=y.language.answers.length;return k(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Question ${t+1} of ${g.length}</div>
        <h2>Language Grove</h2>
        <p class="lede">Read the living scroll, then choose the path that fits its meaning.</p>
      </div>
      <div class="panel">
        <div class="panel-inner trial-stage">
          <div class="passage">
            Mara carried the silver seed through the rain. She did not open her hand until the thunder stopped. The old map had warned that the seed would wake only when the sky became quiet.
          </div>
          <div class="actions">
            <button class="small-button" data-action="reread">Mark reread</button>
            <button class="small-button" data-action="audio">${y.language.audio?`Audio noted`:`Use audio support`}</button>
          </div>
          <div class="question">
            <h3>${e.prompt}</h3>
            <div class="choice-grid">
              ${e.options.map(e=>`<button class="choice-button" data-language="${S(e)}">${S(e)}</button>`).join(``)}
            </div>
          </div>
        </div>
      </div>
    </section>
  `:`
      <section class="screen">
        <div class="screen-header">
          <div class="eyebrow">Trial 3 of 4</div>
          <h2>Language Grove</h2>
          <p class="lede">${J()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Enter Logic Forge</button>
        </div>
      </section>
    `)},ne=()=>{let e=_[y.logic.index];return k(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Puzzle ${y.logic.index+1} of ${_.length}</div>
        <h2>Logic Forge</h2>
        <p class="lede">Power the bridge with number symbols, patterns, visual fractions, and balance reasoning.</p>
      </div>
      <div class="panel">
        <div class="panel-inner trial-stage">
          <div class="trial-surface">
            <div class="panel-inner">
              <h3>${e.prompt}</h3>
              <div class="logic-grid">
                ${e.options.map(e=>`<button class="choice-button" data-logic="${S(e)}">${S(e)}</button>`).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `:`
      <section class="screen">
        <div class="screen-header">
          <div class="eyebrow">Trial 4 of 4</div>
          <h2>Logic Forge</h2>
          <p class="lede">${Y()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Open the mirror</button>
        </div>
      </section>
    `)},re=()=>k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Strategy Observatory</div>
        <h2>The mirror checks more than answers.</h2>
        <p class="lede">Ori compares your self-read with the task signals. This helps train confidence calibration without shame.</p>
      </div>
      <div class="two-column">
        <div class="panel">
          <div class="panel-inner">
            <h3>How did that feel?</h3>
            <div class="choice-grid">
              ${[`Easier than expected`,`About right`,`Hard but possible`,`Frustrating`,`I felt nervous`].map(e=>`<button class="choice-button ${y.reflection.feeling===e?`selected`:``}" data-feeling="${e}">${e}</button>`).join(``)}
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Where were you strongest?</h3>
            <div class="choice-grid">
              ${[`Memory`,`Focus`,`Reading`,`Math`,`Not sure`].map(e=>`<button class="choice-button ${y.reflection.strongest===e?`selected`:``}" data-strongest="${e}">${e}</button>`).join(``)}
            </div>
            <div class="actions">
              <button class="primary-button" data-action="next">Reveal first signals</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),ie=()=>k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">First signal map</div>
        <h2>Ori has your first learning signals.</h2>
        <p class="lede">This is an estimate from one short trial, not a diagnosis. The next session checks what stayed.</p>
      </div>
      <div class="metric-grid">
        ${ae().map(e=>`
              <div class="metric">
                <strong>${e.label}</strong>
                <span>${e.value}</span>
              </div>
            `).join(``)}
      </div>
      <div class="panel">
        <div class="panel-inner ori">
          <div class="ori-mark" aria-hidden="true"></div>
          <div class="ori-copy">
            <p>Your first path is <strong>${Z()}</strong>.</p>
            <p>Return tomorrow for a short retention quest. I need to see what stayed, not just what worked once.</p>
            <div class="actions">
              <button class="primary-button" data-action="next">Play the free first quest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),I=()=>{let e=y.firstQuestComplete?`First quest complete. You improved the path by practicing one strategy immediately.`:`Ori chooses one guided quest from your strongest growth signal. This prototype simulates that first personalized lesson.`;return k(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Free proof quest</div>
        <h2>${Q()}</h2>
        <p class="lede">${e}</p>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>${Q()}</h3>
          <p class="lede">${ce()}</p>
          <div class="actions">
            <button class="primary-button" data-action="complete-quest">${y.firstQuestComplete?`Quest complete`:`Complete guided quest`}</button>
            <button class="secondary-button" data-action="next">Preview my path</button>
          </div>
        </div>
      </div>
    </section>
  `)},L=()=>k(`
  <section class="screen">
    <div class="screen-header">
      <div class="eyebrow">Path preview</div>
      <h2>Your full path is ready.</h2>
      <p class="lede">The free trial maps the first signals. The paid path unlocks daily quests, retention checks, Ori's memory, and deeper reports.</p>
    </div>
    <div class="plan-grid">
      <div class="plan-item">
        <h3>Week 1</h3>
        <span>Memory anchors, focus pulse, direct clues, logic patterns.</span>
      </div>
      <div class="plan-item">
        <h3>Week 2</h3>
        <span>Delayed recall, inference clues, balance gates, confidence calibration.</span>
      </div>
      <div class="plan-item">
        <h3>12-week arc</h3>
        <span>Retention, comprehension, reasoning, transfer, and speed with accuracy.</span>
      </div>
    </div>
    <div class="two-column">
      <div class="panel">
        <div class="panel-inner">
          <h3>Mind Realms Plus</h3>
          <div class="price">$14.99 <small>/ month</small></div>
          <p class="footer-note">Suggested launch price. Annual plan: $99/year. This prototype does not collect payment.</p>
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>Unlocked after the first lesson</h3>
          <p class="lede">Full learner profile, adaptive daily quests, focus endurance path, retention checks, advanced realms, and progress reports.</p>
          <div class="actions">
            <button class="primary-button" data-action="interest">Unlock My Path</button>
          </div>
          <p class="footer-note" id="interestNote"></p>
        </div>
      </div>
    </div>
  </section>
`);function R(){l.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`next`&&C(),t===`reset`&&T(),t===`motion`&&(y.reducedMotion=!y.reducedMotion,x(`reduced_motion_toggled`,{enabled:y.reducedMotion}),$()),t===`go-report`&&w(`report`),t===`memory-start`&&B(),t===`memory-next-round`&&(y.memory.round+=1,B()),t===`focus-start`&&H(),t===`reread`&&(y.language.reread=!0,x(`language_reread_marked`),$()),t===`audio`&&(y.language.audio=!0,x(`audio_support_selected`),$()),t===`speak-subject-summary`&&E(),t===`stop-subject-summary`&&D(),t===`topic-check`&&O(!1),t===`topic-deep`&&O(!0),t===`topic-clear`&&(y.topicNotice=void 0,y.topicDraft=``,$()),t===`complete-quest`&&(y.firstQuestComplete=!0,x(`first_quest_completed`,{path:Z()}),$()),t===`interest`){x(`pricing_interest_clicked`,{price:`$14.99/month`});let e=document.querySelector(`#interestNote`);e&&(e.textContent=`Interest captured for the prototype. Payment is not active yet.`)}})})}function z(){l.querySelectorAll(`[data-goal]`).forEach(e=>{e.addEventListener(`click`,()=>{y.primaryGoal=e.dataset.goal??``,x(`goal_selected`,{primaryGoal:y.primaryGoal}),$()})}),l.querySelectorAll(`[data-secondary]`).forEach(e=>{e.addEventListener(`click`,()=>{y.secondaryGoal=e.dataset.secondary??``,x(`secondary_goal_selected`,{secondaryGoal:y.secondaryGoal}),$()})});let e=l.querySelector(`#freeGoal`);e?.addEventListener(`input`,()=>{y.freeGoal=e.value});let t=l.querySelector(`#topicDraft`);t?.addEventListener(`input`,()=>{y.topicDraft=t.value}),l.querySelectorAll(`[data-rune]`).forEach(e=>{e.addEventListener(`click`,()=>V(e.dataset.rune??``))}),l.querySelectorAll(`[data-focus-action]`).forEach(e=>{e.addEventListener(`click`,()=>U(e.dataset.focusAction===`tap`))}),l.querySelectorAll(`[data-focus-reflect]`).forEach(e=>{e.addEventListener(`click`,()=>{y.focus.reflection=e.dataset.focusReflect??``,y.focus.phase=`done`,x(`focus_pulse_completed`,{missedTargets:y.focus.missedTargets,decoyTaps:y.focus.decoyTaps,switchErrors:y.focus.switchErrors,reflection:y.focus.reflection}),$()})}),l.querySelectorAll(`[data-language]`).forEach(e=>{e.addEventListener(`click`,()=>W(e.dataset.language??``))}),l.querySelectorAll(`[data-logic]`).forEach(e=>{e.addEventListener(`click`,()=>G(e.dataset.logic??``))}),l.querySelectorAll(`[data-feeling]`).forEach(e=>{e.addEventListener(`click`,()=>{y.reflection.feeling=e.dataset.feeling??``,x(`reflection_feeling_selected`,{feeling:y.reflection.feeling}),$()})}),l.querySelectorAll(`[data-strongest]`).forEach(e=>{e.addEventListener(`click`,()=>{y.reflection.strongest=e.dataset.strongest??``,x(`reflection_strength_selected`,{strongest:y.reflection.strongest}),$()})})}function B(){y.memory.phase=`show`,y.memory.input=[],y.memory.feedback=``,x(`trial_started`,{trial:`memory`,round:y.memory.round+1}),$(),window.setTimeout(()=>{y.screen===`memory`&&y.memory.phase===`show`&&(y.memory.phase=`answer`,$())},y.reducedMotion?500:1600)}function V(e){if(y.memory.phase!==`answer`)return;let t=p[y.memory.round]??[];if(y.memory.input.push(e),y.memory.input.length>=t.length){let e=0;t.forEach((t,n)=>{y.memory.input[n]===t?e+=1:y.memory.errorPositions.push(n+1)});let n=t.length-e;y.memory.correctPositions+=e,y.memory.totalPositions+=t.length,y.memory.round===1&&(y.memory.distractionErrors+=n),y.memory.round===2&&(y.memory.delayErrors+=n),x(`memory_sequence_completed`,{round:y.memory.round+1,correct:e,total:t.length}),y.memory.round>=p.length-1?y.memory.phase=`done`:(y.memory.phase=`feedback`,y.memory.feedback=n===0?`The sequence held cleanly. Ori will increase the load gently.`:`Part of the symbol chain faded. Ori is watching where the slip happened.`)}$()}function H(){y.focus.phase=`run`,y.focus.index=0,y.focus.presentedAt=Date.now(),x(`trial_started`,{trial:`focus`}),$()}function U(e){if(y.focus.phase!==`run`)return;let t=h[y.focus.index];if(!t)return;let n=t.target===e;y.focus.total+=1,n&&(y.focus.correct+=1),t.target&&!e&&(y.focus.missedTargets+=1),!t.target&&e&&(y.focus.decoyTaps+=1),t.afterSwitch&&!n&&(y.focus.switchErrors+=1),e&&y.focus.responseTimes.push(Date.now()-y.focus.presentedAt),y.focus.index+=1,y.focus.index>=h.length?y.focus.phase=`reflect`:y.focus.presentedAt=Date.now(),$()}function W(e){let t=g[y.language.index];if(!t)return;let n=e===t.answer;y.language.answers.push({id:t.id,correct:n}),y.language.index+=1,x(`language_choice_made`,{id:t.id,correct:n}),$()}function G(e){let t=_[y.logic.index];if(!t)return;let n=e===t.answer;y.logic.answers.push({id:t.id,correct:n}),y.logic.index+=1,x(`logic_puzzle_completed`,{id:t.id,correct:n}),$()}function K(){return(y.memory.totalPositions?y.memory.correctPositions/y.memory.totalPositions:0)>=.86?`Memory signal: your symbol recall held across load and delay.`:y.memory.distractionErrors>y.memory.delayErrors?`Memory signal: recall shifted most when the vault distracted you.`:y.memory.delayErrors>0?`Memory signal: first recall appeared stronger than delayed recall.`:`Memory signal: Ori needs more evidence, but sequence load should be trained gently.`}function q(){return y.focus.switchErrors>=2?`Focus signal: attention held early, but the rule switch pulled you back to the old pattern.`:y.focus.decoyTaps>=2?`Focus signal: action speed is strong. The next step is protecting accuracy before tapping.`:y.focus.missedTargets>=2?`Focus signal: some targets slipped during the pulse. Signal detection and re-centering should be trained.`:`Focus signal: your attention held through the pulse. Ori will check endurance over longer sessions later.`}function J(){let e=y.language.answers.some(e=>e.id===`inference`&&!e.correct),t=y.language.answers.filter(e=>e.correct).length;return e?`Reading signal: direct details were clearer than hidden meaning. Inference should be trained next.`:t>=4?`Reading signal: direct detail, sequence, inference, and main idea all held in this short passage.`:`Reading signal: Ori needs more evidence across vocabulary, inference, and retention.`}function Y(){let e=y.logic.answers.filter(e=>!e.correct);return e.some(e=>e.id===`fraction`)?`Logic signal: patterns and balance may be ahead of visual fraction intuition.`:e.some(e=>e.id===`balance`)?`Logic signal: number patterns are waking up. Balance reasoning needs support.`:e.length===0?`Logic signal: pattern and balance reasoning were strong in this first forge run.`:`Logic signal: Ori will separate concept gaps from speed, reading load, and working memory.`}function ae(){return[{label:`Goal`,value:y.primaryGoal||`Become a super learner`},{label:`Memory`,value:K().replace(`Memory signal: `,``)},{label:`Focus`,value:q().replace(`Focus signal: `,``)},{label:`Reading`,value:J().replace(`Reading signal: `,``)},{label:`Logic`,value:Y().replace(`Logic signal: `,``)},{label:`Strategy`,value:oe()},{label:`First path`,value:Z()},{label:`Daily time`,value:`12-15 minutes to start`}]}function oe(){if(!y.reflection.strongest)return`Needs one reflection check.`;let e=X(),t=Math.max(...Object.values(e)),n=e[y.reflection.strongest];if(n!==void 0&&t-n<=.05)return`Your self-read matched your strongest signal today.`;let r=se();return`You felt strongest in ${y.reflection.strongest}, while Ori saw the strongest signal in ${r}.`}function se(){let e=X();return[[`Memory`,e.Memory],[`Focus`,e.Focus],[`Reading`,e.Reading],[`Math`,e.Math]].reduce((e,t)=>t[1]>e[1]?t:e)[0]}function X(){return{Memory:y.memory.totalPositions?y.memory.correctPositions/y.memory.totalPositions:0,Focus:y.focus.total?y.focus.correct/y.focus.total:0,Reading:y.language.answers.length?y.language.answers.filter(e=>e.correct).length/y.language.answers.length:0,Math:y.logic.answers.length?y.logic.answers.filter(e=>e.correct).length/y.logic.answers.length:0}}function Z(){return y.focus.switchErrors>=2||y.focus.decoyTaps>=2?`Focus Recovery + Memory Anchors + Inference Clues`:y.memory.delayErrors>0||y.memory.distractionErrors>0?`Memory Anchors + Focus Pulse + Logic Patterns`:y.language.answers.some(e=>e.id===`inference`&&!e.correct)?`Inference Clues + Delayed Recall + Logic Patterns`:y.logic.answers.some(e=>!e.correct)?`Logic Forge Basics + Pace Control + Reading Clues`:`Advanced Recall + Flexible Focus + Transfer Quests`}function Q(){let e=Z();return e.startsWith(`Focus`)?`Steady Signal Quest`:e.startsWith(`Memory`)?`Memory Anchor Quest`:e.startsWith(`Inference`)?`Hidden Clue Quest`:e.startsWith(`Logic`)?`Balance Gate Quest`:`Transfer Trial Quest`}function ce(){let e=Z();return e.startsWith(`Focus`)?`You practice one breath before action, then repeat a shorter signal round where accuracy comes before speed.`:e.startsWith(`Memory`)?`You group symbols into anchors, replay them as a tiny story, then retrieve them after a short delay.`:e.startsWith(`Inference`)?`You compare what the scroll says directly with what it implies, then choose a path from the hidden clue.`:e.startsWith(`Logic`)?`You use a visual balance gate before seeing the number sentence, so the concept lands before notation.`:`You combine recall, focus, reading, and logic in one small mixed challenge.`}async function le(){let e=document.querySelector(`#brainScene`);if(e){b?.(),b=null;try{let t=await s(()=>import(`./three.module-kyxZOpvy.js`),[]);if(!document.body.contains(e))return;let n=new t.WebGLRenderer({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);let r=new t.Scene,i=new t.PerspectiveCamera(42,1,.1,100);i.position.set(0,1.1,6.3);let a=new t.Group;r.add(a);let o=new t.MeshStandardMaterial({color:2046525,emissive:1125415,roughness:.38,metalness:.08,transparent:!0,opacity:.72}),c=new t.MeshStandardMaterial({color:16767352,emissive:7754772,roughness:.24,metalness:.28}),l=new t.MeshStandardMaterial({color:6936750,emissive:1989705,roughness:.32,metalness:.08}),u=new t.Mesh(new t.CapsuleGeometry(.72,1.82,16,30),o);u.position.y=-.6,a.add(u);let d=new t.Mesh(new t.SphereGeometry(.52,42,32),o);d.position.y=1.36,a.add(d);let f=new t.Mesh(new t.TorusKnotGeometry(.28,.035,96,12),c);f.position.y=1.42,f.rotation.x=.8,a.add(f);let p=new t.Mesh(new t.IcosahedronGeometry(.15,1),l);p.position.set(0,.1,.5),a.add(p);let m=new t.Mesh(new t.TorusGeometry(1.55,.008,16,120),new t.MeshBasicMaterial({color:15190667,transparent:!0,opacity:.36}));m.rotation.x=Math.PI/2.3,a.add(m);let h=new t.BufferGeometry,g=new Float32Array(540);for(let e=0;e<g.length;e+=3)g[e]=(Math.random()-.5)*4.8,g[e+1]=(Math.random()-.5)*4.2,g[e+2]=(Math.random()-.5)*3.4;h.setAttribute(`position`,new t.BufferAttribute(g,3));let _=new t.Points(h,new t.PointsMaterial({color:15190667,size:.018,transparent:!0,opacity:.58}));r.add(_),r.add(new t.AmbientLight(14602926,1.5));let v=new t.PointLight(16767352,4.2,10);v.position.set(2.6,3.2,3.4),r.add(v);let x=new t.PointLight(6936750,2.3,9);x.position.set(-2.8,.4,2.2),r.add(x);let S=()=>{let t=e.getBoundingClientRect(),r=Math.max(1,t.width),a=Math.max(1,t.height);n.setSize(r,a,!1),i.aspect=r/a,i.updateProjectionMatrix()},C=new ResizeObserver(S);C.observe(e),S();let w=0,T=!0,E=()=>{T&&(y.reducedMotion||(a.rotation.y+=.004,f.rotation.y+=.012,p.rotation.y+=.01,_.rotation.y-=.0015),n.render(r,i),w=window.requestAnimationFrame(E))};E(),b=()=>{T=!1,window.cancelAnimationFrame(w),C.disconnect(),n.dispose(),h.dispose(),e.innerHTML=``}}catch{e.innerHTML=`
      <div class="scene-fallback">
        <div class="fallback-body" aria-label="Symbolic body and mind map"></div>
      </div>
    `}}}function $(){b&&=(b(),null);let e={intro:ee,ori:A,subjects:j,goals:M,realms:N,memory:P,focus:F,language:te,logic:ne,reflection:re,report:ie,quest:I,path:L}[y.screen];l.innerHTML=e(),R(),z(),y.screen===`intro`&&le()}x(`onboarding_started`),$();