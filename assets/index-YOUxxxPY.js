(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let a=[t(e),n(e),r(e),i(e)].sort((e,t)=>e.priority-t.priority),c=a[0],l=[...a].sort((e,t)=>t.score-e.score)[0],u=[e.goal,e.secondaryGoal,e.freeGoal].join(` `).toLowerCase(),d=u.includes(`super learner`)||u.includes(`faster`)||u.includes(`work`),f=d?`18-25 minutes a day`:`12-15 minutes a day`,p=d?`5 focused days, 1 mixed challenge day, 1 rest or reflection day`:`4 focused days, 1 mixed challenge day, 2 lighter recovery days`;return{domains:a,primaryGrowth:c,strongestSignal:l,timeline:o(c,l,d),dailyMinutes:f,weeklyRhythm:p,confidenceNote:s(e,l)}}function t(e){let t=e.memory.totalPositions;return a(`Memory`,c((t?e.memory.correctPositions/t:0)-e.memory.delayErrors*.055-e.memory.distractionErrors*.04),t,t?`${e.memory.correctPositions}/${t} positions held; delay errors: ${e.memory.delayErrors}; distraction errors: ${e.memory.distractionErrors}.`:`Memory trial has not been completed yet.`,e.memory.delayErrors>0?`Train delayed recall with anchors, short retrieval breaks, and one same-day retention check.`:e.memory.distractionErrors>0?`Train recall while filtering distraction, then retest after a short interruption.`:`Increase sequence load gently and check whether recall still holds tomorrow.`)}function n(e){let t=e.focus.total,n=c((t?e.focus.correct/t:0)-e.focus.switchErrors*.08-e.focus.decoyTaps*.055-e.focus.missedTargets*.04),r=e.focus.responseTimes.length?Math.round(e.focus.responseTimes.reduce((e,t)=>e+t,0)/e.focus.responseTimes.length):void 0;return a(`Focus`,n,t,t?`${e.focus.correct}/${t} choices correct; missed targets: ${e.focus.missedTargets}; decoy taps: ${e.focus.decoyTaps}; switch errors: ${e.focus.switchErrors}${r?`; average tap ${r} ms.`:`.`}`:`Focus pulse has not been completed yet.`,e.focus.switchErrors>0?`Train rule switching: pause, name the new rule, then act.`:e.focus.decoyTaps>0?`Train impulse control by separating speed from accuracy.`:`Extend focus endurance in small rounds without adding pressure.`)}function r(e){let t=e.reading.total,n=c((t?e.reading.correct/t:0)-(e.reading.missedInference?.13:0)-(e.reading.reread?.03:0)),r=[e.reading.reread?`reread support used`:``,e.reading.audio?`audio support used`:``].filter(Boolean).join(`; `);return a(`Reading`,n,t,t?`${e.reading.correct}/${t} comprehension answers correct${r?`; ${r}.`:`.`}`:`Reading trial has not been completed yet.`,e.reading.missedInference?`Train inference by separating what the text says from what it implies.`:`Add retention checks after reading so comprehension does not disappear after the passage.`)}function i(e){let t=e.math.total;return a(`Math`,c((t?e.math.correct/t:0)-(e.math.missedFraction?.1:0)-(e.math.missedBalance?.08:0)),t,t?`${e.math.correct}/${t} logic and numeracy puzzles correct${e.math.missedFraction?`; fraction model needs support`:``}${e.math.missedBalance?`; balance reasoning needs support`:``}.`:`Logic and math trial has not been completed yet.`,e.math.missedFraction?`Train visual fraction meaning before adding speed or notation.`:e.math.missedBalance?`Train balance equations with visual gates before symbolic equations.`:`Move into mixed patterns, balance, and real-world number sense.`)}function a(e,t,n,r,i){let a=n===0?`needs more evidence`:t>=.78?`strong early signal`:`trainable growth edge`,o=n===0?2+(1-t):1-t;return{key:e,score:t,scoreLabel:`${Math.round(t*100)}%`,level:a,priority:o,evidence:r,nextStep:i}}function o(e,t,n){let r=n?`Weeks 7-8`:`Week 5`;return[{window:`Week 1`,title:`Confirm the baseline`,focus:`Retest ${e.key.toLowerCase()} and ${t.key.toLowerCase()} so Ori can separate a real pattern from a one-day result.`},{window:`Weeks 2-3`,title:`Train ${e.key}`,focus:e.nextStep},{window:n?`Weeks 4-6`:`Weeks 4`,title:`Mix the skill under pressure`,focus:`Blend ${e.key.toLowerCase()} with focus, recall, and reading load so the skill transfers instead of staying isolated.`},{window:r,title:`Prove transfer`,focus:`Use a real-world challenge: learn a short article, solve a practical problem, explain it back, and retrieve it the next day.`}]}function s(e,t){return e.reflectionStrongest?e.reflectionStrongest===t.key?`Your self-read matched the strongest early signal: ${t.key}.`:`You felt strongest in ${e.reflectionStrongest}, while Ori's strongest early signal was ${t.key}. That gap is useful, not bad; it helps train confidence calibration.`:`Ori still needs one self-reflection check to compare confidence with task signals.`}function c(e){return Math.max(0,Math.min(1,e))}var l=[{id:`memory`,title:`Memory and retention`,realm:`Memory Vault`,status:`active`,summary:`Remembering instructions, facts, names, sequences, and what stays after time passes.`,helpsWith:[`working memory`,`delayed recall`,`visual memory`,`verbal memory`,`memory anchors`],assessmentSignals:[`sequence recall`,`delay effect`,`distraction effect`,`error position`],aliases:[`memory`,`remembering`,`retention`,`recall`,`forgetting`]},{id:`focus`,title:`Focus and executive control`,realm:`Focus Tower`,status:`active`,summary:`Staying with the right signal, ignoring distractions, controlling pace, and switching rules.`,helpsWith:[`sustained attention`,`selective attention`,`inhibitory control`,`rule switching`,`pace control`],assessmentSignals:[`missed targets`,`decoy taps`,`response-time drift`,`rule-switch recovery`],aliases:[`focus`,`attention`,`executive function`,`executive control`,`distraction`,`concentration`]},{id:`reading-comprehension`,title:`Reading comprehension`,realm:`Language Grove`,status:`active`,summary:`Understanding what text says, what it implies, what matters most, and what the learner remembers later.`,helpsWith:[`literal meaning`,`sequencing`,`inference`,`main idea`,`summarizing`],assessmentSignals:[`reading time`,`rereading`,`choice accuracy`,`inference misses`,`retention after reading`],aliases:[`reading`,`comprehension`,`reading comprehension`,`understanding text`,`books`]},{id:`language-vocabulary`,title:`Language and vocabulary`,realm:`Language Grove`,status:`active`,summary:`Building word meaning, sentence understanding, listening comprehension, and background knowledge.`,helpsWith:[`vocabulary`,`syntax`,`listening comprehension`,`background knowledge`],assessmentSignals:[`unknown word handling`,`audio support effect`,`sentence complexity errors`],aliases:[`language`,`vocabulary`,`words`,`listening`,`sentences`]},{id:`math`,title:`Math and numeracy`,realm:`Logic Forge`,status:`active`,summary:`Number sense, arithmetic, fractions, balance reasoning, and confidence with quantitative tasks.`,helpsWith:[`number sense`,`arithmetic fluency`,`fractions`,`ratios`,`algebra readiness`],assessmentSignals:[`math accuracy`,`visual support effect`,`timer sensitivity`,`concept versus pace errors`],aliases:[`math`,`numeracy`,`numbers`,`arithmetic`,`fractions`,`algebra`]},{id:`problem-solving`,title:`Logic and problem solving`,realm:`Logic Forge`,status:`active`,summary:`Seeing patterns, representing problems, testing rules, and adapting when a solution path changes.`,helpsWith:[`pattern recognition`,`adaptive problem solving`,`spatial reasoning`,`multistep thinking`],assessmentSignals:[`rule discovery`,`strategy switching`,`repeated failed action`,`transfer to new puzzles`],aliases:[`logic`,`reasoning`,`problem solving`,`puzzles`,`patterns`]},{id:`strategy`,title:`Learning strategy and metacognition`,realm:`Strategy Observatory`,status:`active`,summary:`Helping learners plan, monitor understanding, choose strategies, and know when they need support.`,helpsWith:[`goal setting`,`confidence calibration`,`error analysis`,`help seeking`,`strategy choice`],assessmentSignals:[`goal specificity`,`confidence prediction`,`reflection accuracy`,`hint timing`],aliases:[`strategy`,`metacognition`,`learning strategy`,`study skills`,`planning`]},{id:`confidence`,title:`Confidence and emotional learning state`,realm:`Inner Compass`,status:`active`,summary:`Reducing shame, noticing pressure, recovering after mistakes, and building a healthier learner identity.`,helpsWith:[`math anxiety`,`reading shame`,`frustration recovery`,`persistence`,`motivation`],assessmentSignals:[`self-reported feeling`,`quit point`,`recovery after error`,`pressure sensitivity`],aliases:[`confidence`,`anxiety`,`shame`,`motivation`,`emotions`,`frustration`]},{id:`speed-accuracy`,title:`Learning speed with accuracy`,realm:`Tempo Arena`,status:`planned`,summary:`Getting faster only after understanding is stable, so speed does not destroy comprehension.`,helpsWith:[`fluency`,`pacing`,`endurance`,`speed accuracy balance`],assessmentSignals:[`time trend`,`accuracy drop under speed`,`pacing choices`],aliases:[`speed`,`fluency`,`faster learning`,`pace`,`accuracy`]},{id:`transfer`,title:`Transfer to real life`,realm:`Worldgate`,status:`planned`,summary:`Checking whether skills used in the app help with real reading, work, studying, money, and daily memory.`,helpsWith:[`work learning`,`real-world reading`,`daily memory`,`self-teaching`,`test preparation`],assessmentSignals:[`outside-app check-ins`,`capstone tasks`,`new-context performance`],aliases:[`transfer`,`real life`,`work`,`daily life`,`self teaching`,`test prep`]},{id:`readiness`,title:`Readiness, fatigue, and learning environment`,realm:`Readiness Gate`,status:`planned`,summary:`Understanding whether stress, tiredness, noise, time of day, or sensory load is affecting performance.`,helpsWith:[`fatigue awareness`,`stress signals`,`learning environment`,`session planning`],assessmentSignals:[`readiness check-in`,`performance by time`,`low-distraction support effect`],aliases:[`readiness`,`fatigue`,`sleep`,`stress`,`environment`,`tired`]}];function u(){let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=e.map(e=>`${e.title}: ${e.summary}`).join(` `),r=t.map(e=>e.title).join(`, `);return`Mind Realms is being designed to help with ${e.map(e=>e.title).join(`, `)}. ${n} Planned expansion areas include ${r}. If a new topic is already in the map, the app will ask whether you meant to research it more deeply or whether it was added by mistake.`}function d(e){let t=f(e);if(t)return l.find(e=>[e.id,e.title,e.realm,...e.aliases].some(e=>{let n=f(e);return t===n||t.includes(n)||n.includes(t)}))}function f(e){return e.toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9 ]+/g,` `).replace(/\s+/g,` `).trim()}var p=`modulepreload`,m=function(e){return`/mind-realms-live/`+e},h={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=m(t,n),t=s(t),t in h)return;h[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:p,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},g=document.querySelector(`#app`);if(!g)throw Error(`App root was not found.`);var _=g,v=[`intro`,`ori`,`subjects`,`goals`,`realms`,`memory`,`focus`,`language`,`logic`,`reflection`,`report`,`quest`,`path`],y=[`Remember what I learn`,`Read and understand faster`,`Get stronger at math`,`Focus without drifting`,`Learn faster for work`,`Prepare for a test`,`Become a super learner`],b=[`Build confidence`,`Stop forgetting instructions`,`Improve problem solving`,`Think clearly under pressure`,`Read books and retain them`,`Learn like I never learned in school`],x=[[`Sun`,`Key`,`Wave`],[`Gate`,`Sun`,`Crown`,`Key`],[`Leaf`,`Wave`,`Gate`,`Crown`,`Sun`]],S=[`Sun`,`Key`,`Wave`,`Gate`,`Crown`,`Leaf`],C=[{label:`Gold Star`,target:!0},{label:`Silver Moon`,target:!1},{label:`Gold Star`,target:!0},{label:`Blue Gate`,target:!1},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Moon`,target:!0},{label:`Moon`,target:!0},{label:`Sun`,target:!1},{label:`Sun`,target:!0,afterSwitch:!0},{label:`Moon`,target:!1,afterSwitch:!0},{label:`Sun`,target:!0,afterSwitch:!0}],w=[{id:`literal`,prompt:`Which object did Mara carry through the rain?`,options:[`A silver seed`,`A broken lantern`,`A sleeping bird`],answer:`A silver seed`},{id:`sequence`,prompt:`What had to happen before Mara opened her hand?`,options:[`The thunder had to stop`,`The map had to burn`,`The seed had to glow`],answer:`The thunder had to stop`},{id:`inference`,prompt:`Why did Mara wait?`,options:[`The map warned the seed would wake only when the sky became quiet`,`She forgot what she was carrying`,`She wanted the rain to wash the map away`],answer:`The map warned the seed would wake only when the sky became quiet`},{id:`main`,prompt:`What is this moment mostly about?`,options:[`Following a warning carefully`,`Escaping a dangerous animal`,`Learning how to draw a map`],answer:`Following a warning carefully`}],T=[{id:`make10`,prompt:`Choose the pair of stones that makes 10.`,options:[`4 and 6`,`2 and 9`,`7 and 4`,`5 and 6`],answer:`4 and 6`},{id:`pattern`,prompt:`Complete the symbol pattern: 3, 6, 12, 24, ?`,options:[`30`,`36`,`48`,`72`],answer:`48`},{id:`fraction`,prompt:`Which piece matches one half?`,options:[`Two of four equal parts`,`One of three equal parts`,`Three of four equal parts`,`One of six equal parts`],answer:`Two of four equal parts`},{id:`balance`,prompt:`The gate shows: Box + 3 = 8. What is hidden in the box?`,options:[`3`,`4`,`5`,`8`],answer:`5`}],E=()=>({screen:`intro`,reducedMotion:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,audioStatus:`Audio summary ready.`,topicDraft:``,researchQueue:[],primaryGoal:``,secondaryGoal:``,freeGoal:``,events:[],memory:{phase:`intro`,round:0,input:[],correctPositions:0,totalPositions:0,errorPositions:[],delayErrors:0,distractionErrors:0,feedback:``},focus:{phase:`intro`,index:0,presentedAt:0,missedTargets:0,decoyTaps:0,correct:0,total:0,switchErrors:0,responseTimes:[],reflection:``},language:{index:0,answers:[],startedAt:0,reread:!1,audio:!1},logic:{index:0,answers:[]},reflection:{feeling:``,strongest:``},firstQuestComplete:!1}),D=E(),O=null,k=(e,t)=>{D.events.push({type:e,screen:D.screen,timestamp:Date.now(),payload:t})},A=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e),j=()=>{let e=v.indexOf(D.screen);e<v.length-1&&(D.screen=v[e+1],k(`screen_viewed`,{screen:D.screen}),$())},te=e=>{D.screen=e,k(`screen_viewed`,{screen:e}),$()},ne=()=>{N(!1),D=E(),k(`prototype_reset`),$()};function M(){if(!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){D.audioStatus=`This browser cannot play voice audio yet. Open in Chrome or a mobile browser to hear it spoken.`,k(`subject_audio_unavailable`),$();return}window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(u());e.rate=.94,e.pitch=.92,e.onend=()=>{D.audioStatus=`Audio summary finished.`,k(`subject_audio_finished`),$()},e.onerror=()=>{D.audioStatus=`Audio did not play in this browser. Open in Chrome or a mobile browser to hear it spoken.`,k(`subject_audio_error`),$()},D.audioStatus=`Playing subject summary...`,k(`subject_audio_started`,{subjectCount:l.length}),$(),window.speechSynthesis.speak(e)}function N(e=!0){`speechSynthesis`in window&&window.speechSynthesis.cancel(),D.audioStatus=`Audio summary stopped.`,k(`subject_audio_stopped`),e&&$()}function P(e){let t=D.topicDraft.trim();if(!t){D.topicNotice={kind:`empty`,message:`Type a topic first, then I can check whether it is already in the learning map.`},$();return}let n=d(t);if(n&&!e){D.topicNotice={kind:`duplicate`,subjectTitle:n.title,message:`Hey, you added this already: ${n.title}. Are you purposely trying to research more to get a more in-depth feel, or did you kind of make a mistake?`},k(`duplicate_topic_detected`,{query:t,subject:n.id}),$();return}let r=n?`Deep research: ${n.title}`:`New topic research: ${t}`;D.researchQueue.includes(r)||D.researchQueue.push(r),D.topicNotice={kind:`queued`,subjectTitle:n?.title,message:n?`${n.title} is already in the map, so I added a deeper research pass to the queue.`:`${t} is not in the current map yet, so I added it to the future research queue.`},k(`topic_research_queued`,{query:t,existingSubject:n?.id}),$()}var F=e=>{let t=v.indexOf(D.screen),n=v.map((e,n)=>`<span class="step-dot ${n<=t?`active`:``}"></span>`).join(``);return`
    <div class="app ${D.reducedMotion?`reduced-motion`:``}">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <strong>Mind Realms</strong>
            <span>First-session prototype</span>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="ghost-button" data-action="motion">${D.reducedMotion?`Motion off`:`Motion on`}</button>
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
  `},re=()=>F(`
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
`),ie=()=>F(`
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
`),ae=()=>{let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=u(),r=e.map(e=>`
        <article class="subject-card">
          <div class="subject-card-top">
            <span class="subject-status">Active</span>
            <span>${e.realm}</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.summary}</p>
        </article>
      `).join(``),i=t.map(e=>`
        <article class="subject-card planned">
          <div class="subject-card-top">
            <span class="subject-status">Planned</span>
            <span>${e.realm}</span>
          </div>
          <h3>${e.title}</h3>
          <p>${e.summary}</p>
        </article>
      `).join(``),a=D.topicNotice?`
      <div class="topic-alert ${D.topicNotice.kind}">
        ${D.topicNotice.kind===`duplicate`?`<strong class="flash-word">Already added</strong>`:``}
        <p>${D.topicNotice.message}</p>
        ${D.topicNotice.kind===`duplicate`?`<div class="actions">
                <button class="secondary-button" data-action="topic-deep">Research deeper anyway</button>
                <button class="small-button" data-action="topic-clear">Clear</button>
              </div>`:``}
      </div>
    `:``,o=D.researchQueue.length?`
      <div class="footer-note">
        Research queue: ${D.researchQueue.map(A).join(`, `)}
      </div>
    `:``;return F(`
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
            <p class="footer-note">${D.audioStatus}</p>
            <p class="audio-transcript">${A(n)}</p>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Add or research a topic</h3>
            <input class="text-input" id="topicDraft" value="${A(D.topicDraft)}" placeholder="Try: focus, sleep, writing, motivation..." />
            <div class="actions">
              <button class="primary-button" data-action="topic-check">Check topic</button>
            </div>
            ${a}
            ${o}
          </div>
        </div>
      </div>
      <div class="subject-grid">
        ${r}
        ${i}
      </div>
      <div class="actions">
        <button class="primary-button" data-action="next">Choose my learning goal</button>
      </div>
    </section>
  `)},oe=()=>F(`
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
            <div class="choice-grid">${y.map(e=>`<button class="choice-button ${D.primaryGoal===e?`selected`:``}" data-goal="${A(e)}">${A(e)}</button>`).join(``)}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Secondary signal</h3>
            <div class="choice-grid">${b.map(e=>`<button class="choice-button ${D.secondaryGoal===e?`selected`:``}" data-secondary="${A(e)}">${A(e)}</button>`).join(``)}</div>
            <textarea class="text-field" id="freeGoal" placeholder="Tell Ori what you want to become.">${A(D.freeGoal)}</textarea>
            <div class="actions">
              <button class="primary-button" data-action="next">${D.primaryGoal?`Open the realms`:`Choose a goal first`}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),se=()=>F(`
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
  `),ce=()=>{let e=x[D.memory.round]??[],t=S.map(e=>`<button class="rune-button" data-rune="${e}">${e}</button>`).join(``),n=`Round ${Math.min(D.memory.round+1,x.length)} of ${x.length}`,r=``;return r=D.memory.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Memory Vault</h3>
          <p class="lede">Watch the magic symbol sequence, then rebuild it after the vault closes.</p>
          <button class="primary-button" data-action="memory-start">Begin memory trial</button>
        </div>
      </div>
    `:D.memory.phase===`show`?`
      <div class="trial-surface">
        <div class="rune-sequence">
          ${e.map(e=>`<div class="rune glow">${e}</div>`).join(``)}
        </div>
      </div>
    `:D.memory.phase===`answer`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">Rebuild the sequence. Current answer: ${D.memory.input.join(` -> `)||`none yet`}</p>
          <div class="answer-row">${t}</div>
        </div>
      </div>
    `:D.memory.phase===`feedback`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${D.memory.feedback}</p>
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
    `,F(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">${n}</div>
        <h2>Memory Vault</h2>
        <p class="lede">Ori is looking for recall, sequence memory, delay effect, and distraction recovery.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${r}</div></div>
    </section>
  `)},I=()=>{let e=C[D.focus.index],t=``;return t=D.focus.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Focus Tower Pulse</h3>
          <p class="lede">Hold the rule, ignore decoys, and switch when the tower changes. Accuracy matters more than speed.</p>
          <button class="primary-button" data-action="focus-start">Begin focus pulse</button>
        </div>
      </div>
    `:D.focus.phase===`run`&&e?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${D.focus.index<5?`Tap Gold Star. Let other signs pass.`:D.focus.index<8?`Tap Gold Star. Ignore Cracked Star.`:D.focus.index<11?`Tap Moon.`:`The tower chimed. Now tap Sun.`}</p>
          <div class="focus-token ${e.decoy?`decoy`:``}">${e.label}</div>
          <div class="actions">
            <button class="primary-button" data-focus-action="tap">Tap</button>
            <button class="secondary-button" data-focus-action="pass">Let pass</button>
          </div>
        </div>
      </div>
    `:D.focus.phase===`reflect`?`
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
    `,F(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Trial 2 of 4</div>
        <h2>Focus Tower</h2>
        <p class="lede">This short pulse helps Ori avoid mistaking attention drift or rushing for weak memory, reading, or math.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${t}</div></div>
    </section>
  `)},L=()=>{let e=w[D.language.index],t=D.language.answers.length;return F(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Question ${t+1} of ${w.length}</div>
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
            <button class="small-button" data-action="audio">${D.language.audio?`Audio noted`:`Use audio support`}</button>
          </div>
          <div class="question">
            <h3>${e.prompt}</h3>
            <div class="choice-grid">
              ${e.options.map(e=>`<button class="choice-button" data-language="${A(e)}">${A(e)}</button>`).join(``)}
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
    `)},R=()=>{let e=T[D.logic.index];return F(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Puzzle ${D.logic.index+1} of ${T.length}</div>
        <h2>Logic Forge</h2>
        <p class="lede">Power the bridge with number symbols, patterns, visual fractions, and balance reasoning.</p>
      </div>
      <div class="panel">
        <div class="panel-inner trial-stage">
          <div class="trial-surface">
            <div class="panel-inner">
              <h3>${e.prompt}</h3>
              <div class="logic-grid">
                ${e.options.map(e=>`<button class="choice-button" data-logic="${A(e)}">${A(e)}</button>`).join(``)}
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
    `)},z=()=>F(`
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
              ${[`Easier than expected`,`About right`,`Hard but possible`,`Frustrating`,`I felt nervous`].map(e=>`<button class="choice-button ${D.reflection.feeling===e?`selected`:``}" data-feeling="${e}">${e}</button>`).join(``)}
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Where were you strongest?</h3>
            <div class="choice-grid">
              ${[`Memory`,`Focus`,`Reading`,`Math`,`Not sure`].map(e=>`<button class="choice-button ${D.reflection.strongest===e?`selected`:``}" data-strongest="${e}">${e}</button>`).join(``)}
            </div>
            <div class="actions">
              <button class="primary-button" data-action="next">Reveal first signals</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),B=()=>{let t=he(),n=e(me()),r=n.domains.map(e=>`
        <article class="profile-card">
          <div class="subject-card-top">
            <span class="subject-status">${A(e.level)}</span>
            <span>${e.scoreLabel}</span>
          </div>
          <h3>${e.key}</h3>
          <div class="profile-bar" aria-hidden="true">
            <span style="width: ${Math.round(e.score*100)}%"></span>
          </div>
          <p>${A(e.evidence)}</p>
          <p><strong>Next:</strong> ${A(e.nextStep)}</p>
        </article>
      `).join(``),i=n.timeline.map(e=>`
        <article class="timeline-step">
          <strong>${A(e.window)}</strong>
          <h3>${A(e.title)}</h3>
          <p>${A(e.focus)}</p>
        </article>
      `).join(``);return F(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">First signal map</div>
        <h2>Ori has your first learning signals.</h2>
        <p class="lede">This is an estimate from one short trial, not a diagnosis. The next session checks what stayed.</p>
      </div>
      <div class="metric-grid">
        ${t.map(e=>`
              <div class="metric">
                <strong>${e.label}</strong>
                <span>${e.value}</span>
              </div>
            `).join(``)}
      </div>
      <div class="panel">
        <div class="panel-inner">
          <div class="profile-summary">
            <div>
              <span>Primary growth edge</span>
              <strong>${n.primaryGrowth.key}</strong>
            </div>
            <div>
              <span>Strongest early signal</span>
              <strong>${n.strongestSignal.key}</strong>
            </div>
            <div>
              <span>Suggested rhythm</span>
              <strong>${n.dailyMinutes}</strong>
            </div>
          </div>
          <p class="lede">${A(n.weeklyRhythm)}.</p>
          <p class="footer-note">${A(n.confidenceNote)}</p>
        </div>
      </div>
      <div class="profile-grid">
        ${r}
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>First timeline</h3>
          <p class="lede">This is the first path estimate. Ori should retest it with retention, focus endurance, and transfer tasks before making stronger claims.</p>
          <div class="timeline-grid">
            ${i}
          </div>
        </div>
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
  `)},V=()=>{let e=D.firstQuestComplete?`First quest complete. You improved the path by practicing one strategy immediately.`:`Ori chooses one guided quest from your strongest growth signal. This prototype simulates that first personalized lesson.`;return F(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Free proof quest</div>
        <h2>${Q()}</h2>
        <p class="lede">${e}</p>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>${Q()}</h3>
          <p class="lede">${ve()}</p>
          <div class="actions">
            <button class="primary-button" data-action="complete-quest">${D.firstQuestComplete?`Quest complete`:`Complete guided quest`}</button>
            <button class="secondary-button" data-action="next">Preview my path</button>
          </div>
        </div>
      </div>
    </section>
  `)},H=()=>F(`
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
`);function U(){_.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`next`&&j(),t===`reset`&&ne(),t===`motion`&&(D.reducedMotion=!D.reducedMotion,k(`reduced_motion_toggled`,{enabled:D.reducedMotion}),$()),t===`go-report`&&te(`report`),t===`memory-start`&&G(),t===`memory-next-round`&&(D.memory.round+=1,G()),t===`focus-start`&&ue(),t===`reread`&&(D.language.reread=!0,k(`language_reread_marked`),$()),t===`audio`&&(D.language.audio=!0,k(`audio_support_selected`),$()),t===`speak-subject-summary`&&M(),t===`stop-subject-summary`&&N(),t===`topic-check`&&P(!1),t===`topic-deep`&&P(!0),t===`topic-clear`&&(D.topicNotice=void 0,D.topicDraft=``,$()),t===`complete-quest`&&(D.firstQuestComplete=!0,k(`first_quest_completed`,{path:Z()}),$()),t===`interest`){k(`pricing_interest_clicked`,{price:`$14.99/month`});let e=document.querySelector(`#interestNote`);e&&(e.textContent=`Interest captured for the prototype. Payment is not active yet.`)}})})}function W(){_.querySelectorAll(`[data-goal]`).forEach(e=>{e.addEventListener(`click`,()=>{D.primaryGoal=e.dataset.goal??``,k(`goal_selected`,{primaryGoal:D.primaryGoal}),$()})}),_.querySelectorAll(`[data-secondary]`).forEach(e=>{e.addEventListener(`click`,()=>{D.secondaryGoal=e.dataset.secondary??``,k(`secondary_goal_selected`,{secondaryGoal:D.secondaryGoal}),$()})});let e=_.querySelector(`#freeGoal`);e?.addEventListener(`input`,()=>{D.freeGoal=e.value});let t=_.querySelector(`#topicDraft`);t?.addEventListener(`input`,()=>{D.topicDraft=t.value}),_.querySelectorAll(`[data-rune]`).forEach(e=>{e.addEventListener(`click`,()=>le(e.dataset.rune??``))}),_.querySelectorAll(`[data-focus-action]`).forEach(e=>{e.addEventListener(`click`,()=>de(e.dataset.focusAction===`tap`))}),_.querySelectorAll(`[data-focus-reflect]`).forEach(e=>{e.addEventListener(`click`,()=>{D.focus.reflection=e.dataset.focusReflect??``,D.focus.phase=`done`,k(`focus_pulse_completed`,{missedTargets:D.focus.missedTargets,decoyTaps:D.focus.decoyTaps,switchErrors:D.focus.switchErrors,reflection:D.focus.reflection}),$()})}),_.querySelectorAll(`[data-language]`).forEach(e=>{e.addEventListener(`click`,()=>fe(e.dataset.language??``))}),_.querySelectorAll(`[data-logic]`).forEach(e=>{e.addEventListener(`click`,()=>pe(e.dataset.logic??``))}),_.querySelectorAll(`[data-feeling]`).forEach(e=>{e.addEventListener(`click`,()=>{D.reflection.feeling=e.dataset.feeling??``,k(`reflection_feeling_selected`,{feeling:D.reflection.feeling}),$()})}),_.querySelectorAll(`[data-strongest]`).forEach(e=>{e.addEventListener(`click`,()=>{D.reflection.strongest=e.dataset.strongest??``,k(`reflection_strength_selected`,{strongest:D.reflection.strongest}),$()})})}function G(){D.memory.phase=`show`,D.memory.input=[],D.memory.feedback=``,k(`trial_started`,{trial:`memory`,round:D.memory.round+1}),$(),window.setTimeout(()=>{D.screen===`memory`&&D.memory.phase===`show`&&(D.memory.phase=`answer`,$())},D.reducedMotion?500:1600)}function le(e){if(D.memory.phase!==`answer`)return;let t=x[D.memory.round]??[];if(D.memory.input.push(e),D.memory.input.length>=t.length){let e=0;t.forEach((t,n)=>{D.memory.input[n]===t?e+=1:D.memory.errorPositions.push(n+1)});let n=t.length-e;D.memory.correctPositions+=e,D.memory.totalPositions+=t.length,D.memory.round===1&&(D.memory.distractionErrors+=n),D.memory.round===2&&(D.memory.delayErrors+=n),k(`memory_sequence_completed`,{round:D.memory.round+1,correct:e,total:t.length}),D.memory.round>=x.length-1?D.memory.phase=`done`:(D.memory.phase=`feedback`,D.memory.feedback=n===0?`The sequence held cleanly. Ori will increase the load gently.`:`Part of the symbol chain faded. Ori is watching where the slip happened.`)}$()}function ue(){D.focus.phase=`run`,D.focus.index=0,D.focus.presentedAt=Date.now(),k(`trial_started`,{trial:`focus`}),$()}function de(e){if(D.focus.phase!==`run`)return;let t=C[D.focus.index];if(!t)return;let n=t.target===e;D.focus.total+=1,n&&(D.focus.correct+=1),t.target&&!e&&(D.focus.missedTargets+=1),!t.target&&e&&(D.focus.decoyTaps+=1),t.afterSwitch&&!n&&(D.focus.switchErrors+=1),e&&D.focus.responseTimes.push(Date.now()-D.focus.presentedAt),D.focus.index+=1,D.focus.index>=C.length?D.focus.phase=`reflect`:D.focus.presentedAt=Date.now(),$()}function fe(e){let t=w[D.language.index];if(!t)return;let n=e===t.answer;D.language.answers.push({id:t.id,correct:n}),D.language.index+=1,k(`language_choice_made`,{id:t.id,correct:n}),$()}function pe(e){let t=T[D.logic.index];if(!t)return;let n=e===t.answer;D.logic.answers.push({id:t.id,correct:n}),D.logic.index+=1,k(`logic_puzzle_completed`,{id:t.id,correct:n}),$()}function K(){return(D.memory.totalPositions?D.memory.correctPositions/D.memory.totalPositions:0)>=.86?`Memory signal: your symbol recall held across load and delay.`:D.memory.distractionErrors>D.memory.delayErrors?`Memory signal: recall shifted most when the vault distracted you.`:D.memory.delayErrors>0?`Memory signal: first recall appeared stronger than delayed recall.`:`Memory signal: Ori needs more evidence, but sequence load should be trained gently.`}function q(){return D.focus.switchErrors>=2?`Focus signal: attention held early, but the rule switch pulled you back to the old pattern.`:D.focus.decoyTaps>=2?`Focus signal: action speed is strong. The next step is protecting accuracy before tapping.`:D.focus.missedTargets>=2?`Focus signal: some targets slipped during the pulse. Signal detection and re-centering should be trained.`:`Focus signal: your attention held through the pulse. Ori will check endurance over longer sessions later.`}function J(){let e=D.language.answers.some(e=>e.id===`inference`&&!e.correct),t=D.language.answers.filter(e=>e.correct).length;return e?`Reading signal: direct details were clearer than hidden meaning. Inference should be trained next.`:t>=4?`Reading signal: direct detail, sequence, inference, and main idea all held in this short passage.`:`Reading signal: Ori needs more evidence across vocabulary, inference, and retention.`}function Y(){let e=D.logic.answers.filter(e=>!e.correct);return e.some(e=>e.id===`fraction`)?`Logic signal: patterns and balance may be ahead of visual fraction intuition.`:e.some(e=>e.id===`balance`)?`Logic signal: number patterns are waking up. Balance reasoning needs support.`:e.length===0?`Logic signal: pattern and balance reasoning were strong in this first forge run.`:`Logic signal: Ori will separate concept gaps from speed, reading load, and working memory.`}function me(){let e=D.language.answers.filter(e=>e.correct).length,t=D.logic.answers.filter(e=>e.correct).length;return{goal:D.primaryGoal,secondaryGoal:D.secondaryGoal,freeGoal:D.freeGoal,reflectionFeeling:D.reflection.feeling,reflectionStrongest:D.reflection.strongest,memory:{correctPositions:D.memory.correctPositions,totalPositions:D.memory.totalPositions,delayErrors:D.memory.delayErrors,distractionErrors:D.memory.distractionErrors,errorPositions:D.memory.errorPositions},focus:{correct:D.focus.correct,total:D.focus.total,missedTargets:D.focus.missedTargets,decoyTaps:D.focus.decoyTaps,switchErrors:D.focus.switchErrors,responseTimes:D.focus.responseTimes},reading:{correct:e,total:D.language.answers.length,missedInference:D.language.answers.some(e=>e.id===`inference`&&!e.correct),reread:D.language.reread,audio:D.language.audio},math:{correct:t,total:D.logic.answers.length,missedFraction:D.logic.answers.some(e=>e.id===`fraction`&&!e.correct),missedBalance:D.logic.answers.some(e=>e.id===`balance`&&!e.correct)}}}function he(){return[{label:`Goal`,value:D.primaryGoal||`Become a super learner`},{label:`Memory`,value:K().replace(`Memory signal: `,``)},{label:`Focus`,value:q().replace(`Focus signal: `,``)},{label:`Reading`,value:J().replace(`Reading signal: `,``)},{label:`Logic`,value:Y().replace(`Logic signal: `,``)},{label:`Strategy`,value:ge()},{label:`First path`,value:Z()},{label:`Daily time`,value:`12-15 minutes to start`}]}function ge(){if(!D.reflection.strongest)return`Needs one reflection check.`;let e=X(),t=Math.max(...Object.values(e)),n=e[D.reflection.strongest];if(n!==void 0&&t-n<=.05)return`Your self-read matched your strongest signal today.`;let r=_e();return`You felt strongest in ${D.reflection.strongest}, while Ori saw the strongest signal in ${r}.`}function _e(){let e=X();return[[`Memory`,e.Memory],[`Focus`,e.Focus],[`Reading`,e.Reading],[`Math`,e.Math]].reduce((e,t)=>t[1]>e[1]?t:e)[0]}function X(){return{Memory:D.memory.totalPositions?D.memory.correctPositions/D.memory.totalPositions:0,Focus:D.focus.total?D.focus.correct/D.focus.total:0,Reading:D.language.answers.length?D.language.answers.filter(e=>e.correct).length/D.language.answers.length:0,Math:D.logic.answers.length?D.logic.answers.filter(e=>e.correct).length/D.logic.answers.length:0}}function Z(){return D.focus.switchErrors>=2||D.focus.decoyTaps>=2?`Focus Recovery + Memory Anchors + Inference Clues`:D.memory.delayErrors>0||D.memory.distractionErrors>0?`Memory Anchors + Focus Pulse + Logic Patterns`:D.language.answers.some(e=>e.id===`inference`&&!e.correct)?`Inference Clues + Delayed Recall + Logic Patterns`:D.logic.answers.some(e=>!e.correct)?`Logic Forge Basics + Pace Control + Reading Clues`:`Advanced Recall + Flexible Focus + Transfer Quests`}function Q(){let e=Z();return e.startsWith(`Focus`)?`Steady Signal Quest`:e.startsWith(`Memory`)?`Memory Anchor Quest`:e.startsWith(`Inference`)?`Hidden Clue Quest`:e.startsWith(`Logic`)?`Balance Gate Quest`:`Transfer Trial Quest`}function ve(){let e=Z();return e.startsWith(`Focus`)?`You practice one breath before action, then repeat a shorter signal round where accuracy comes before speed.`:e.startsWith(`Memory`)?`You group symbols into anchors, replay them as a tiny story, then retrieve them after a short delay.`:e.startsWith(`Inference`)?`You compare what the scroll says directly with what it implies, then choose a path from the hidden clue.`:e.startsWith(`Logic`)?`You use a visual balance gate before seeing the number sentence, so the concept lands before notation.`:`You combine recall, focus, reading, and logic in one small mixed challenge.`}async function ye(){let e=document.querySelector(`#brainScene`);if(e){O?.(),O=null;try{let t=await ee(()=>import(`./three.module-kyxZOpvy.js`),[]);if(!document.body.contains(e))return;let n=new t.WebGLRenderer({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);let r=new t.Scene,i=new t.PerspectiveCamera(42,1,.1,100);i.position.set(0,1.1,6.3);let a=new t.Group;r.add(a);let o=new t.MeshStandardMaterial({color:2046525,emissive:1125415,roughness:.38,metalness:.08,transparent:!0,opacity:.72}),s=new t.MeshStandardMaterial({color:16767352,emissive:7754772,roughness:.24,metalness:.28}),c=new t.MeshStandardMaterial({color:6936750,emissive:1989705,roughness:.32,metalness:.08}),l=new t.Mesh(new t.CapsuleGeometry(.72,1.82,16,30),o);l.position.y=-.6,a.add(l);let u=new t.Mesh(new t.SphereGeometry(.52,42,32),o);u.position.y=1.36,a.add(u);let d=new t.Mesh(new t.TorusKnotGeometry(.28,.035,96,12),s);d.position.y=1.42,d.rotation.x=.8,a.add(d);let f=new t.Mesh(new t.IcosahedronGeometry(.15,1),c);f.position.set(0,.1,.5),a.add(f);let p=new t.Mesh(new t.TorusGeometry(1.55,.008,16,120),new t.MeshBasicMaterial({color:15190667,transparent:!0,opacity:.36}));p.rotation.x=Math.PI/2.3,a.add(p);let m=new t.BufferGeometry,h=new Float32Array(540);for(let e=0;e<h.length;e+=3)h[e]=(Math.random()-.5)*4.8,h[e+1]=(Math.random()-.5)*4.2,h[e+2]=(Math.random()-.5)*3.4;m.setAttribute(`position`,new t.BufferAttribute(h,3));let g=new t.Points(m,new t.PointsMaterial({color:15190667,size:.018,transparent:!0,opacity:.58}));r.add(g),r.add(new t.AmbientLight(14602926,1.5));let _=new t.PointLight(16767352,4.2,10);_.position.set(2.6,3.2,3.4),r.add(_);let v=new t.PointLight(6936750,2.3,9);v.position.set(-2.8,.4,2.2),r.add(v);let y=()=>{let t=e.getBoundingClientRect(),r=Math.max(1,t.width),a=Math.max(1,t.height);n.setSize(r,a,!1),i.aspect=r/a,i.updateProjectionMatrix()},b=new ResizeObserver(y);b.observe(e),y();let x=0,S=!0,C=()=>{S&&(D.reducedMotion||(a.rotation.y+=.004,d.rotation.y+=.012,f.rotation.y+=.01,g.rotation.y-=.0015),n.render(r,i),x=window.requestAnimationFrame(C))};C(),O=()=>{S=!1,window.cancelAnimationFrame(x),b.disconnect(),n.dispose(),m.dispose(),e.innerHTML=``}}catch{e.innerHTML=`
      <div class="scene-fallback">
        <div class="fallback-body" aria-label="Symbolic body and mind map"></div>
      </div>
    `}}}function $(){O&&=(O(),null);let e={intro:re,ori:ie,subjects:ae,goals:oe,realms:se,memory:ce,focus:I,language:L,logic:R,reflection:z,report:B,quest:V,path:H}[D.screen];_.innerHTML=e(),U(),W(),D.screen===`intro`&&ye()}k(`onboarding_started`),$();