(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let a=[t(e),n(e),r(e),i(e)].sort((e,t)=>e.priority-t.priority),c=a[0],l=[...a].sort((e,t)=>t.score-e.score)[0],u=[e.goal,e.secondaryGoal,e.freeGoal].join(` `).toLowerCase(),d=u.includes(`super learner`)||u.includes(`faster`)||u.includes(`work`),f=d?`18-25 minutes a day`:`12-15 minutes a day`,ee=d?`5 focused days, 1 mixed challenge day, 1 rest or reflection day`:`4 focused days, 1 mixed challenge day, 2 lighter recovery days`;return{domains:a,primaryGrowth:c,strongestSignal:l,timeline:o(c,l,d),dailyMinutes:f,weeklyRhythm:ee,confidenceNote:s(e,l)}}function t(e){let t=e.memory.totalPositions;return a(`Memory`,c((t?e.memory.correctPositions/t:0)-e.memory.delayErrors*.055-e.memory.distractionErrors*.04),t,t?`${e.memory.correctPositions}/${t} positions held; delay errors: ${e.memory.delayErrors}; distraction errors: ${e.memory.distractionErrors}.`:`Memory trial has not been completed yet.`,e.memory.delayErrors>0?`Train delayed recall with anchors, short retrieval breaks, and one same-day retention check.`:e.memory.distractionErrors>0?`Train recall while filtering distraction, then retest after a short interruption.`:`Increase sequence load gently and check whether recall still holds tomorrow.`)}function n(e){let t=e.focus.total,n=c((t?e.focus.correct/t:0)-e.focus.switchErrors*.08-e.focus.decoyTaps*.055-e.focus.missedTargets*.04),r=e.focus.responseTimes.length?Math.round(e.focus.responseTimes.reduce((e,t)=>e+t,0)/e.focus.responseTimes.length):void 0;return a(`Focus`,n,t,t?`${e.focus.correct}/${t} choices correct; missed targets: ${e.focus.missedTargets}; decoy taps: ${e.focus.decoyTaps}; switch errors: ${e.focus.switchErrors}${r?`; average tap ${r} ms.`:`.`}`:`Focus pulse has not been completed yet.`,e.focus.switchErrors>0?`Train rule switching: pause, name the new rule, then act.`:e.focus.decoyTaps>0?`Train impulse control by separating speed from accuracy.`:`Extend focus endurance in small rounds without adding pressure.`)}function r(e){let t=e.reading.total,n=c((t?e.reading.correct/t:0)-(e.reading.missedInference?.13:0)-(e.reading.reread?.03:0)),r=[e.reading.reread?`reread support used`:``,e.reading.audio?`audio support used`:``].filter(Boolean).join(`; `);return a(`Reading`,n,t,t?`${e.reading.correct}/${t} comprehension answers correct${r?`; ${r}.`:`.`}`:`Reading trial has not been completed yet.`,e.reading.missedInference?`Train inference by separating what the text says from what it implies.`:`Add retention checks after reading so comprehension does not disappear after the passage.`)}function i(e){let t=e.math.total;return a(`Math`,c((t?e.math.correct/t:0)-(e.math.missedFraction?.1:0)-(e.math.missedBalance?.08:0)),t,t?`${e.math.correct}/${t} logic and numeracy puzzles correct${e.math.missedFraction?`; fraction model needs support`:``}${e.math.missedBalance?`; balance reasoning needs support`:``}.`:`Logic and math trial has not been completed yet.`,e.math.missedFraction?`Train visual fraction meaning before adding speed or notation.`:e.math.missedBalance?`Train balance equations with visual gates before symbolic equations.`:`Move into mixed patterns, balance, and real-world number sense.`)}function a(e,t,n,r,i){let a=n===0?`needs more evidence`:t>=.78?`strong early signal`:`trainable growth edge`,o=n===0?2+(1-t):1-t;return{key:e,score:t,scoreLabel:`${Math.round(t*100)}%`,level:a,priority:o,evidence:r,nextStep:i}}function o(e,t,n){let r=n?`Weeks 7-8`:`Week 5`;return[{window:`Week 1`,title:`Confirm the baseline`,focus:`Retest ${e.key.toLowerCase()} and ${t.key.toLowerCase()} so Ori can separate a real pattern from a one-day result.`},{window:`Weeks 2-3`,title:`Train ${e.key}`,focus:e.nextStep},{window:n?`Weeks 4-6`:`Weeks 4`,title:`Mix the skill under pressure`,focus:`Blend ${e.key.toLowerCase()} with focus, recall, and reading load so the skill transfers instead of staying isolated.`},{window:r,title:`Prove transfer`,focus:`Use a real-world challenge: learn a short article, solve a practical problem, explain it back, and retrieve it the next day.`}]}function s(e,t){return e.reflectionStrongest?e.reflectionStrongest===t.key?`Your self-read matched the strongest early signal: ${t.key}.`:`You felt strongest in ${e.reflectionStrongest}, while Ori's strongest early signal was ${t.key}. That gap is useful, not bad; it helps train confidence calibration.`:`Ori still needs one self-reflection check to compare confidence with task signals.`}function c(e){return Math.max(0,Math.min(1,e))}var l=[{id:`memory`,title:`Memory and retention`,realm:`Memory Vault`,status:`active`,summary:`Remembering instructions, facts, names, sequences, and what stays after time passes.`,helpsWith:[`working memory`,`delayed recall`,`visual memory`,`verbal memory`,`memory anchors`],assessmentSignals:[`sequence recall`,`delay effect`,`distraction effect`,`error position`],aliases:[`memory`,`remembering`,`retention`,`recall`,`forgetting`,`recall repetition`,`retrieval practice`,`spaced repetition`]},{id:`focus`,title:`Focus and executive control`,realm:`Focus Tower`,status:`active`,summary:`Staying with the right signal, ignoring distractions, controlling pace, and switching rules.`,helpsWith:[`sustained attention`,`selective attention`,`inhibitory control`,`rule switching`,`pace control`],assessmentSignals:[`missed targets`,`decoy taps`,`response-time drift`,`rule-switch recovery`],aliases:[`focus`,`attention`,`attention sculpting`,`executive function`,`executive control`,`distraction`,`distraction blocking`,`concentration`]},{id:`readiness`,title:`Mind-body readiness and practice loops`,realm:`Readiness Gate`,status:`active`,summary:`Aligning sleep, movement, nutrition awareness, timing, input quality, reflection, and playful practice so the learner is ready to encode and retain.`,helpsWith:[`sleep mastery`,`movement integration`,`practice timing`,`mindful encoding`,`input curation`,`nutrition awareness`,`outcome tracking`,`playful practice`],assessmentSignals:[`readiness check-in`,`sleep consistency`,`energy rating`,`movement break effect`,`input overload`,`practice timing response`,`reflection follow-through`,`outcome trend`],aliases:[`readiness`,`sleep`,`sleep mastery`,`movement`,`movement integration`,`exercise`,`nutrition`,`neuro nutrition`,`food`,`timing`,`timing strategies`,`input curation`,`mindful encoding`,`outcome tracking`,`optimized outcome tracking`,`practice loop`,`playful practice`,`recovery`,`energy`,`fatigue`,`tired`,`environment`]},{id:`reading-comprehension`,title:`Reading comprehension`,realm:`Language Grove`,status:`active`,summary:`Understanding what text says, what it implies, what matters most, and what the learner remembers later.`,helpsWith:[`literal meaning`,`sequencing`,`inference`,`main idea`,`summarizing`],assessmentSignals:[`reading time`,`rereading`,`choice accuracy`,`inference misses`,`retention after reading`],aliases:[`reading`,`comprehension`,`reading comprehension`,`understanding text`,`books`]},{id:`language-vocabulary`,title:`Language and vocabulary`,realm:`Language Grove`,status:`active`,summary:`Building word meaning, sentence understanding, listening comprehension, and background knowledge.`,helpsWith:[`vocabulary`,`syntax`,`listening comprehension`,`background knowledge`],assessmentSignals:[`unknown word handling`,`audio support effect`,`sentence complexity errors`],aliases:[`language`,`vocabulary`,`words`,`listening`,`sentences`]},{id:`math`,title:`Math and numeracy`,realm:`Logic Forge`,status:`active`,summary:`Number sense, arithmetic, fractions, balance reasoning, and confidence with quantitative tasks.`,helpsWith:[`number sense`,`arithmetic fluency`,`fractions`,`ratios`,`algebra readiness`],assessmentSignals:[`math accuracy`,`visual support effect`,`timer sensitivity`,`concept versus pace errors`],aliases:[`math`,`numeracy`,`numbers`,`arithmetic`,`fractions`,`algebra`]},{id:`problem-solving`,title:`Logic and problem solving`,realm:`Logic Forge`,status:`active`,summary:`Seeing patterns, representing problems, testing rules, and adapting when a solution path changes.`,helpsWith:[`pattern recognition`,`adaptive problem solving`,`spatial reasoning`,`multistep thinking`],assessmentSignals:[`rule discovery`,`strategy switching`,`repeated failed action`,`transfer to new puzzles`],aliases:[`logic`,`reasoning`,`problem solving`,`puzzles`,`patterns`]},{id:`strategy`,title:`Learning strategy and metacognition`,realm:`Strategy Observatory`,status:`active`,summary:`Helping learners plan, monitor understanding, choose strategies, and know when they need support.`,helpsWith:[`goal setting`,`confidence calibration`,`error analysis`,`help seeking`,`strategy choice`],assessmentSignals:[`goal specificity`,`confidence prediction`,`reflection accuracy`,`hint timing`],aliases:[`strategy`,`metacognition`,`learning strategy`,`study skills`,`planning`,`reflection`,`loop reflection`]},{id:`confidence`,title:`Confidence and emotional learning state`,realm:`Inner Compass`,status:`active`,summary:`Reducing shame, noticing pressure, recovering after mistakes, and building a healthier learner identity.`,helpsWith:[`math anxiety`,`reading shame`,`frustration recovery`,`persistence`,`motivation`],assessmentSignals:[`self-reported feeling`,`quit point`,`recovery after error`,`pressure sensitivity`],aliases:[`confidence`,`anxiety`,`shame`,`motivation`,`emotions`,`frustration`]},{id:`speed-accuracy`,title:`Learning speed with accuracy`,realm:`Tempo Arena`,status:`planned`,summary:`Getting faster only after understanding is stable, so speed does not destroy comprehension.`,helpsWith:[`fluency`,`pacing`,`endurance`,`speed accuracy balance`],assessmentSignals:[`time trend`,`accuracy drop under speed`,`pacing choices`],aliases:[`speed`,`fluency`,`faster learning`,`pace`,`accuracy`]},{id:`transfer`,title:`Transfer to real life`,realm:`Worldgate`,status:`planned`,summary:`Checking whether skills used in the app help with real reading, work, studying, money, and daily memory.`,helpsWith:[`work learning`,`real-world reading`,`daily memory`,`self-teaching`,`test preparation`],assessmentSignals:[`outside-app check-ins`,`capstone tasks`,`new-context performance`],aliases:[`transfer`,`real life`,`work`,`daily life`,`self teaching`,`test prep`]}];function u(){let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=e.map(e=>`${e.title}: ${e.summary}`).join(` `),r=t.map(e=>e.title).join(`, `);return`Mind Realms is being designed to help with ${e.map(e=>e.title).join(`, `)}. ${n} Planned expansion areas include ${r}. If a new topic is already in the map, the app will ask whether you meant to research it more deeply or whether it was added by mistake.`}function d(e){let t=f(e);if(t)return l.find(e=>[e.id,e.title,e.realm,...e.aliases].some(e=>{let n=f(e);return t===n||t.includes(n)||n.includes(t)}))}function f(e){return e.toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9 ]+/g,` `).replace(/\s+/g,` `).trim()}var ee=`/mind-realms-live/assets/mind-realms-female-wired-baseline-cutout-wDTgW5qj.png`,te=`/mind-realms-live/assets/mind-realms-male-wired-baseline-cutout-B_Yh_C6W.png`,p=`modulepreload`,m=function(e){return`/mind-realms-live/`+e},ne={},re=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=m(t,n),t=s(t),t in ne)return;ne[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:p,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},h=document.querySelector(`#app`);if(!h)throw Error(`App root was not found.`);var g=h,_=[`intro`,`ori`,`subjects`,`goals`,`realms`,`memory`,`focus`,`language`,`logic`,`reflection`,`report`,`quest`,`path`],ie=[`Remember what I learn`,`Read and understand faster`,`Get stronger at math`,`Focus without drifting`,`Learn faster for work`,`Prepare for a test`,`Become a super learner`],v=[`Build confidence`,`Stop forgetting instructions`,`Improve problem solving`,`Think clearly under pressure`,`Read books and retain them`,`Learn like I never learned in school`],y=[[`Sun`,`Key`,`Wave`],[`Gate`,`Sun`,`Crown`,`Key`],[`Leaf`,`Wave`,`Gate`,`Crown`,`Sun`]],ae=[`Sun`,`Key`,`Wave`,`Gate`,`Crown`,`Leaf`],oe=[{label:`Gold Star`,target:!0},{label:`Silver Moon`,target:!1},{label:`Gold Star`,target:!0},{label:`Blue Gate`,target:!1},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Moon`,target:!0},{label:`Moon`,target:!0},{label:`Sun`,target:!1},{label:`Sun`,target:!0,afterSwitch:!0},{label:`Moon`,target:!1,afterSwitch:!0},{label:`Sun`,target:!0,afterSwitch:!0}],b=[{id:`literal`,prompt:`Which object did Mara carry through the rain?`,options:[`A silver seed`,`A broken lantern`,`A sleeping bird`],answer:`A silver seed`},{id:`sequence`,prompt:`What had to happen before Mara opened her hand?`,options:[`The thunder had to stop`,`The map had to burn`,`The seed had to glow`],answer:`The thunder had to stop`},{id:`inference`,prompt:`Why did Mara wait?`,options:[`The map warned the seed would wake only when the sky became quiet`,`She forgot what she was carrying`,`She wanted the rain to wash the map away`],answer:`The map warned the seed would wake only when the sky became quiet`},{id:`main`,prompt:`What is this moment mostly about?`,options:[`Following a warning carefully`,`Escaping a dangerous animal`,`Learning how to draw a map`],answer:`Following a warning carefully`}],x=[{id:`make10`,prompt:`Choose the pair of stones that makes 10.`,options:[`4 and 6`,`2 and 9`,`7 and 4`,`5 and 6`],answer:`4 and 6`},{id:`pattern`,prompt:`Complete the symbol pattern: 3, 6, 12, 24, ?`,options:[`30`,`36`,`48`,`72`],answer:`48`},{id:`fraction`,prompt:`Which piece matches one half?`,options:[`Two of four equal parts`,`One of three equal parts`,`Three of four equal parts`,`One of six equal parts`],answer:`Two of four equal parts`},{id:`balance`,prompt:`The gate shows: Box + 3 = 8. What is hidden in the box?`,options:[`3`,`4`,`5`,`8`],answer:`5`}],S=()=>({screen:`intro`,reducedMotion:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,bodyForm:`male`,audioStatus:`Audio summary ready.`,topicDraft:``,researchQueue:[],primaryGoal:``,secondaryGoal:``,freeGoal:``,events:[],memory:{phase:`intro`,round:0,input:[],correctPositions:0,totalPositions:0,errorPositions:[],delayErrors:0,distractionErrors:0,feedback:``},focus:{phase:`intro`,index:0,presentedAt:0,missedTargets:0,decoyTaps:0,correct:0,total:0,switchErrors:0,responseTimes:[],reflection:``},language:{index:0,answers:[],startedAt:0,reread:!1,audio:!1},logic:{index:0,answers:[]},reflection:{feeling:``,strongest:``},firstQuestComplete:!1}),C=S(),w=null,T=(e,t)=>{C.events.push({type:e,screen:C.screen,timestamp:Date.now(),payload:t})},E=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e),D=()=>{let e=_.indexOf(C.screen);e<_.length-1&&(C.screen=_[e+1],T(`screen_viewed`,{screen:C.screen}),$())},O=e=>{C.screen=e,T(`screen_viewed`,{screen:e}),$()},k=()=>{j(!1),C=S(),T(`prototype_reset`),$()};function A(){if(!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){C.audioStatus=`This browser cannot play voice audio yet. Open in Chrome or a mobile browser to hear it spoken.`,T(`subject_audio_unavailable`),$();return}window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(u());e.rate=.94,e.pitch=.92,e.onend=()=>{C.audioStatus=`Audio summary finished.`,T(`subject_audio_finished`),$()},e.onerror=()=>{C.audioStatus=`Audio did not play in this browser. Open in Chrome or a mobile browser to hear it spoken.`,T(`subject_audio_error`),$()},C.audioStatus=`Playing subject summary...`,T(`subject_audio_started`,{subjectCount:l.length}),$(),window.speechSynthesis.speak(e)}function j(e=!0){`speechSynthesis`in window&&window.speechSynthesis.cancel(),C.audioStatus=`Audio summary stopped.`,T(`subject_audio_stopped`),e&&$()}function M(e){let t=C.topicDraft.trim();if(!t){C.topicNotice={kind:`empty`,message:`Type a topic first, then I can check whether it is already in the learning map.`},$();return}let n=d(t);if(n&&!e){C.topicNotice={kind:`duplicate`,subjectTitle:n.title,message:`Hey, you added this already: ${n.title}. Are you purposely trying to research more to get a more in-depth feel, or did you kind of make a mistake?`},T(`duplicate_topic_detected`,{query:t,subject:n.id}),$();return}let r=n?`Deep research: ${n.title}`:`New topic research: ${t}`;C.researchQueue.includes(r)||C.researchQueue.push(r),C.topicNotice={kind:`queued`,subjectTitle:n?.title,message:n?`${n.title} is already in the map, so I added a deeper research pass to the queue.`:`${t} is not in the current map yet, so I added it to the future research queue.`},T(`topic_research_queued`,{query:t,existingSubject:n?.id}),$()}var N=e=>{let t=_.indexOf(C.screen),n=_.map((e,n)=>`<span class="step-dot ${n<=t?`active`:``}"></span>`).join(``);return`
    <div class="app ${C.reducedMotion?`reduced-motion`:``}">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <strong>Mind Realms</strong>
            <span>First-session prototype</span>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="ghost-button" data-action="motion">${C.reducedMotion?`Motion off`:`Motion on`}</button>
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
  `},se=()=>{let e=C.bodyForm===`female`?`Female`:`Male`;return N(`
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
        <div id="brainScene" aria-label="${e} 3D body and brain turntable proof"></div>
        <div class="scene-caption">
          <span>${`${e} turntable body with 3D brain`}</span>
          <div class="body-form-toggle" aria-label="Body form">
            <button class="small-button ${C.bodyForm===`female`?`selected`:``}" data-body-form="female">Female</button>
            <button class="small-button ${C.bodyForm===`male`?`selected`:``}" data-body-form="male">Male</button>
          </div>
        </div>
      </div>
    </section>
  `)},P=()=>N(`
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
`),F=()=>{let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=u(),r=e.map(e=>`
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
      `).join(``),a=C.topicNotice?`
      <div class="topic-alert ${C.topicNotice.kind}">
        ${C.topicNotice.kind===`duplicate`?`<strong class="flash-word">Already added</strong>`:``}
        <p>${C.topicNotice.message}</p>
        ${C.topicNotice.kind===`duplicate`?`<div class="actions">
                <button class="secondary-button" data-action="topic-deep">Research deeper anyway</button>
                <button class="small-button" data-action="topic-clear">Clear</button>
              </div>`:``}
      </div>
    `:``,o=C.researchQueue.length?`
      <div class="footer-note">
        Research queue: ${C.researchQueue.map(E).join(`, `)}
      </div>
    `:``;return N(`
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
            <p class="lede">A spoken overview of the learning areas we can help with: memory, focus, readiness, reading, language, math, reasoning, strategy, confidence, and expansion areas.</p>
            <div class="actions">
              <button class="primary-button" data-action="speak-subject-summary">Play audio summary</button>
              <button class="secondary-button" data-action="stop-subject-summary">Stop audio</button>
            </div>
            <p class="footer-note">${C.audioStatus}</p>
            <p class="audio-transcript">${E(n)}</p>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Add or research a topic</h3>
            <input class="text-input" id="topicDraft" value="${E(C.topicDraft)}" placeholder="Try: focus, sleep, writing, motivation..." />
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
  `)},I=()=>N(`
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
            <div class="choice-grid">${ie.map(e=>`<button class="choice-button ${C.primaryGoal===e?`selected`:``}" data-goal="${E(e)}">${E(e)}</button>`).join(``)}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Secondary signal</h3>
            <div class="choice-grid">${v.map(e=>`<button class="choice-button ${C.secondaryGoal===e?`selected`:``}" data-secondary="${E(e)}">${E(e)}</button>`).join(``)}</div>
            <textarea class="text-field" id="freeGoal" placeholder="Tell Ori what you want to become.">${E(C.freeGoal)}</textarea>
            <div class="actions">
              <button class="primary-button" data-action="next">${C.primaryGoal?`Open the realms`:`Choose a goal first`}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),ce=()=>N(`
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
  `),le=()=>{let e=y[C.memory.round]??[],t=ae.map(e=>`<button class="rune-button" data-rune="${e}">${e}</button>`).join(``),n=`Round ${Math.min(C.memory.round+1,y.length)} of ${y.length}`,r=``;return r=C.memory.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Memory Vault</h3>
          <p class="lede">Watch the magic symbol sequence, then rebuild it after the vault closes.</p>
          <button class="primary-button" data-action="memory-start">Begin memory trial</button>
        </div>
      </div>
    `:C.memory.phase===`show`?`
      <div class="trial-surface">
        <div class="rune-sequence">
          ${e.map(e=>`<div class="rune glow">${e}</div>`).join(``)}
        </div>
      </div>
    `:C.memory.phase===`answer`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">Rebuild the sequence. Current answer: ${C.memory.input.join(` -> `)||`none yet`}</p>
          <div class="answer-row">${t}</div>
        </div>
      </div>
    `:C.memory.phase===`feedback`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${C.memory.feedback}</p>
          <button class="primary-button" data-action="memory-next-round">Continue</button>
        </div>
      </div>
    `:`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${Y()}</p>
          <button class="primary-button" data-action="next">Enter Focus Tower</button>
        </div>
      </div>
    `,N(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">${n}</div>
        <h2>Memory Vault</h2>
        <p class="lede">Ori is looking for recall, sequence memory, delay effect, and distraction recovery.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${r}</div></div>
    </section>
  `)},L=()=>{let e=oe[C.focus.index],t=``;return t=C.focus.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Focus Tower Pulse</h3>
          <p class="lede">Hold the rule, ignore decoys, and switch when the tower changes. Accuracy matters more than speed.</p>
          <button class="primary-button" data-action="focus-start">Begin focus pulse</button>
        </div>
      </div>
    `:C.focus.phase===`run`&&e?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${C.focus.index<5?`Tap Gold Star. Let other signs pass.`:C.focus.index<8?`Tap Gold Star. Ignore Cracked Star.`:C.focus.index<11?`Tap Moon.`:`The tower chimed. Now tap Sun.`}</p>
          <div class="focus-token ${e.decoy?`decoy`:``}">${e.label}</div>
          <div class="actions">
            <button class="primary-button" data-focus-action="tap">Tap</button>
            <button class="secondary-button" data-focus-action="pass">Let pass</button>
          </div>
        </div>
      </div>
    `:C.focus.phase===`reflect`?`
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
          <p class="feedback">${ge()}</p>
          <button class="primary-button" data-action="next">Enter Language Grove</button>
        </div>
      </div>
    `,N(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Trial 2 of 4</div>
        <h2>Focus Tower</h2>
        <p class="lede">This short pulse helps Ori avoid mistaking attention drift or rushing for weak memory, reading, or math.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${t}</div></div>
    </section>
  `)},ue=()=>{let e=b[C.language.index],t=C.language.answers.length;return N(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Question ${t+1} of ${b.length}</div>
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
            <button class="small-button" data-action="audio">${C.language.audio?`Audio noted`:`Use audio support`}</button>
          </div>
          <div class="question">
            <h3>${e.prompt}</h3>
            <div class="choice-grid">
              ${e.options.map(e=>`<button class="choice-button" data-language="${E(e)}">${E(e)}</button>`).join(``)}
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
          <p class="lede">${X()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Enter Logic Forge</button>
        </div>
      </section>
    `)},R=()=>{let e=x[C.logic.index];return N(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Puzzle ${C.logic.index+1} of ${x.length}</div>
        <h2>Logic Forge</h2>
        <p class="lede">Power the bridge with number symbols, patterns, visual fractions, and balance reasoning.</p>
      </div>
      <div class="panel">
        <div class="panel-inner trial-stage">
          <div class="trial-surface">
            <div class="panel-inner">
              <h3>${e.prompt}</h3>
              <div class="logic-grid">
                ${e.options.map(e=>`<button class="choice-button" data-logic="${E(e)}">${E(e)}</button>`).join(``)}
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
          <p class="lede">${_e()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Open the mirror</button>
        </div>
      </section>
    `)},z=()=>N(`
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
              ${[`Easier than expected`,`About right`,`Hard but possible`,`Frustrating`,`I felt nervous`].map(e=>`<button class="choice-button ${C.reflection.feeling===e?`selected`:``}" data-feeling="${e}">${e}</button>`).join(``)}
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Where were you strongest?</h3>
            <div class="choice-grid">
              ${[`Memory`,`Focus`,`Reading`,`Math`,`Not sure`].map(e=>`<button class="choice-button ${C.reflection.strongest===e?`selected`:``}" data-strongest="${e}">${e}</button>`).join(``)}
            </div>
            <div class="actions">
              <button class="primary-button" data-action="next">Reveal first signals</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),de=()=>{let t=ye(),n=e(ve()),r=n.domains.map(e=>`
        <article class="profile-card">
          <div class="subject-card-top">
            <span class="subject-status">${E(e.level)}</span>
            <span>${e.scoreLabel}</span>
          </div>
          <h3>${e.key}</h3>
          <div class="profile-bar" aria-hidden="true">
            <span style="width: ${Math.round(e.score*100)}%"></span>
          </div>
          <p>${E(e.evidence)}</p>
          <p><strong>Next:</strong> ${E(e.nextStep)}</p>
        </article>
      `).join(``),i=n.timeline.map(e=>`
        <article class="timeline-step">
          <strong>${E(e.window)}</strong>
          <h3>${E(e.title)}</h3>
          <p>${E(e.focus)}</p>
        </article>
      `).join(``);return N(`
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
          <p class="lede">${E(n.weeklyRhythm)}.</p>
          <p class="footer-note">${E(n.confidenceNote)}</p>
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
            <p>Your first path is <strong>${Q()}</strong>.</p>
            <p>Return tomorrow for a short retention quest. I need to see what stayed, not just what worked once.</p>
            <div class="actions">
              <button class="primary-button" data-action="next">Play the free first quest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `)},fe=()=>{let e=C.firstQuestComplete?`First quest complete. You improved the path by practicing one strategy immediately.`:`Ori chooses one guided quest from your strongest growth signal. This prototype simulates that first personalized lesson.`;return N(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Free proof quest</div>
        <h2>${Se()}</h2>
        <p class="lede">${e}</p>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>${Se()}</h3>
          <p class="lede">${Ce()}</p>
          <div class="actions">
            <button class="primary-button" data-action="complete-quest">${C.firstQuestComplete?`Quest complete`:`Complete guided quest`}</button>
            <button class="secondary-button" data-action="next">Preview my path</button>
          </div>
        </div>
      </div>
    </section>
  `)},pe=()=>{let t=e(ve()),n=me(t).map(e=>`
        <tr>
          <td>${e.rank}</td>
          <td>
            <strong>${E(e.area)}</strong>
            <span>${E(e.detail)}</span>
          </td>
          <td>${E(e.training)}</td>
        </tr>
      `).join(``),r=B(t).map(e=>`
        <div class="loop-step">
          <strong>${E(e.window)}</strong>
          <span>${E(e.action)}</span>
        </div>
      `).join(``),i=V(t).map(e=>`<li>${E(e)}</li>`).join(``);return N(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Path preview</div>
        <h2>Your Super Learner path is ready.</h2>
        <p class="lede">The free trial maps the first signals. The paid path turns those signals into daily quests, retention checks, and a training loop that adapts as Ori learns the learner.</p>
      </div>
      <div class="profile-summary">
        <div>
          <span>First growth edge</span>
          <strong>${t.primaryGrowth.key}</strong>
        </div>
        <div>
          <span>Daily starting dose</span>
          <strong>${t.dailyMinutes}</strong>
        </div>
        <div>
          <span>Weekly rhythm</span>
          <strong>${E(t.weeklyRhythm)}</strong>
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>Ordered Super Learner stack</h3>
          <div class="table-wrap">
            <table class="learning-stack">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>System</th>
                  <th>Training focus</th>
                </tr>
              </thead>
              <tbody>${n}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="two-column">
        <div class="panel">
          <div class="panel-inner">
            <h3>Daily loop</h3>
            <div class="loop-grid">${r}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Mind Realms Plus</h3>
            <div class="price">$14.99 <small>/ month</small></div>
            <p class="footer-note">Suggested launch price. Annual plan: $99/year. This prototype does not collect payment.</p>
            <ul class="unlock-list">${i}</ul>
            <div class="actions">
              <button class="primary-button" data-action="interest">Unlock My Path</button>
            </div>
            <p class="footer-note" id="interestNote"></p>
          </div>
        </div>
      </div>
    </section>
  `)};function me(e){return[{rank:1,area:`Personal growth edge: ${e.primaryGrowth.key}`,detail:`The first system Ori trains because it is currently limiting the rest of the stack.`,training:e.primaryGrowth.nextStep},{rank:2,area:`Focus and executive control`,detail:`Holding attention, filtering distractions, switching rules, and slowing down before mistakes.`,training:`Short focus pulses before memory, reading, and math so attention is trained as the foundation.`},{rank:3,area:`Memory and retention`,detail:`Turning new information into something the learner can retrieve later.`,training:`Retrieval practice, delay checks, anchors, and tomorrow checks so learning actually sticks.`},{rank:4,area:`Reading comprehension and language`,detail:`Literal meaning, inference, vocabulary, listening support, and remembering what was read.`,training:`Read, predict, explain, retrieve, then use audio or reread support only when it helps.`},{rank:5,area:`Math, logic, and problem solving`,detail:`Number sense, visual models, patterns, balance reasoning, and flexible strategies.`,training:`Concept-first puzzles before speed, then mixed reasoning once accuracy is stable.`},{rank:6,area:`Learning strategy and confidence`,detail:`Knowing what worked, what failed, how the learner felt, and how to recover after mistakes.`,training:`Confidence calibration, error review, and one small next-step choice after each quest.`},{rank:7,area:`Mind-body readiness`,detail:`Sleep, energy, movement, timing, input quality, and practice consistency.`,training:`Quick readiness check-ins so Ori can tell skill weakness apart from fatigue or overload.`},{rank:8,area:`Speed with accuracy`,detail:`Learning faster only after comprehension and recall are stable.`,training:`Timed rounds unlock after accuracy holds, so speed does not train guessing.`},{rank:9,area:`Transfer to real life`,detail:`Using the trained skill in work, school, home, reading, money, and daily memory.`,training:`Weekly transfer quests where the learner explains, applies, and retrieves outside the app.`}]}function B(e){return[{window:`2 min`,action:`Readiness check: energy, stress, sleep, and confidence before training.`},{window:`4 min`,action:`Warm up the growth edge: ${e.primaryGrowth.key.toLowerCase()}.`},{window:`8-12 min`,action:`Play the main quest with memory, focus, reading, or logic pressure mixed in.`},{window:`3 min`,action:`Retrieve, explain, and reflect so Ori can update the next quest.`},{window:`Next day`,action:`Run a short retention check to see what actually stayed.`}]}function V(e){return[`Adaptive ${e.primaryGrowth.key.toLowerCase()} questline based on the first signal map`,`Daily retention checks and weekly transfer quests`,`Ori memory across sessions, including what worked and what fell apart`,`Parent/adult progress view with growth edges, strengths, and next actions`,`Advanced speed-with-accuracy challenges after stability is proven`]}function he(){g.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`next`&&D(),t===`reset`&&k(),t===`motion`&&(C.reducedMotion=!C.reducedMotion,T(`reduced_motion_toggled`,{enabled:C.reducedMotion}),$()),t===`go-report`&&O(`report`),t===`memory-start`&&U(),t===`memory-next-round`&&(C.memory.round+=1,U()),t===`focus-start`&&G(),t===`reread`&&(C.language.reread=!0,T(`language_reread_marked`),$()),t===`audio`&&(C.language.audio=!0,T(`audio_support_selected`),$()),t===`speak-subject-summary`&&A(),t===`stop-subject-summary`&&j(),t===`topic-check`&&M(!1),t===`topic-deep`&&M(!0),t===`topic-clear`&&(C.topicNotice=void 0,C.topicDraft=``,$()),t===`complete-quest`&&(C.firstQuestComplete=!0,T(`first_quest_completed`,{path:Q()}),$()),t===`interest`){T(`pricing_interest_clicked`,{price:`$14.99/month`});let e=document.querySelector(`#interestNote`);e&&(e.textContent=`Interest captured for the prototype. Payment is not active yet.`)}})})}function H(){g.querySelectorAll(`[data-goal]`).forEach(e=>{e.addEventListener(`click`,()=>{C.primaryGoal=e.dataset.goal??``,T(`goal_selected`,{primaryGoal:C.primaryGoal}),$()})}),g.querySelectorAll(`[data-secondary]`).forEach(e=>{e.addEventListener(`click`,()=>{C.secondaryGoal=e.dataset.secondary??``,T(`secondary_goal_selected`,{secondaryGoal:C.secondaryGoal}),$()})});let e=g.querySelector(`#freeGoal`);e?.addEventListener(`input`,()=>{C.freeGoal=e.value});let t=g.querySelector(`#topicDraft`);t?.addEventListener(`input`,()=>{C.topicDraft=t.value}),g.querySelectorAll(`[data-body-form]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bodyForm;t!==`male`&&t!==`female`||(C.bodyForm=t,T(`body_form_selected`,{bodyForm:t}),$())})});let n=Array.from(g.querySelectorAll(`[data-brain-region]`)),r=()=>{n.forEach(e=>e.classList.remove(`is-active`))};n.forEach(e=>{let t=()=>{r(),e.classList.add(`is-active`)};e.addEventListener(`pointerenter`,t),e.addEventListener(`focus`,t),e.addEventListener(`click`,e=>{e.preventDefault(),t()}),e.addEventListener(`pointerleave`,()=>{e.classList.remove(`is-active`)}),e.addEventListener(`blur`,()=>{e.classList.remove(`is-active`)})}),g.querySelectorAll(`[data-rune]`).forEach(e=>{e.addEventListener(`click`,()=>W(e.dataset.rune??``))}),g.querySelectorAll(`[data-focus-action]`).forEach(e=>{e.addEventListener(`click`,()=>K(e.dataset.focusAction===`tap`))}),g.querySelectorAll(`[data-focus-reflect]`).forEach(e=>{e.addEventListener(`click`,()=>{C.focus.reflection=e.dataset.focusReflect??``,C.focus.phase=`done`,T(`focus_pulse_completed`,{missedTargets:C.focus.missedTargets,decoyTaps:C.focus.decoyTaps,switchErrors:C.focus.switchErrors,reflection:C.focus.reflection}),$()})}),g.querySelectorAll(`[data-language]`).forEach(e=>{e.addEventListener(`click`,()=>q(e.dataset.language??``))}),g.querySelectorAll(`[data-logic]`).forEach(e=>{e.addEventListener(`click`,()=>J(e.dataset.logic??``))}),g.querySelectorAll(`[data-feeling]`).forEach(e=>{e.addEventListener(`click`,()=>{C.reflection.feeling=e.dataset.feeling??``,T(`reflection_feeling_selected`,{feeling:C.reflection.feeling}),$()})}),g.querySelectorAll(`[data-strongest]`).forEach(e=>{e.addEventListener(`click`,()=>{C.reflection.strongest=e.dataset.strongest??``,T(`reflection_strength_selected`,{strongest:C.reflection.strongest}),$()})})}function U(){C.memory.phase=`show`,C.memory.input=[],C.memory.feedback=``,T(`trial_started`,{trial:`memory`,round:C.memory.round+1}),$(),window.setTimeout(()=>{C.screen===`memory`&&C.memory.phase===`show`&&(C.memory.phase=`answer`,$())},C.reducedMotion?500:1600)}function W(e){if(C.memory.phase!==`answer`)return;let t=y[C.memory.round]??[];if(C.memory.input.push(e),C.memory.input.length>=t.length){let e=0;t.forEach((t,n)=>{C.memory.input[n]===t?e+=1:C.memory.errorPositions.push(n+1)});let n=t.length-e;C.memory.correctPositions+=e,C.memory.totalPositions+=t.length,C.memory.round===1&&(C.memory.distractionErrors+=n),C.memory.round===2&&(C.memory.delayErrors+=n),T(`memory_sequence_completed`,{round:C.memory.round+1,correct:e,total:t.length}),C.memory.round>=y.length-1?C.memory.phase=`done`:(C.memory.phase=`feedback`,C.memory.feedback=n===0?`The sequence held cleanly. Ori will increase the load gently.`:`Part of the symbol chain faded. Ori is watching where the slip happened.`)}$()}function G(){C.focus.phase=`run`,C.focus.index=0,C.focus.presentedAt=Date.now(),T(`trial_started`,{trial:`focus`}),$()}function K(e){if(C.focus.phase!==`run`)return;let t=oe[C.focus.index];if(!t)return;let n=t.target===e;C.focus.total+=1,n&&(C.focus.correct+=1),t.target&&!e&&(C.focus.missedTargets+=1),!t.target&&e&&(C.focus.decoyTaps+=1),t.afterSwitch&&!n&&(C.focus.switchErrors+=1),e&&C.focus.responseTimes.push(Date.now()-C.focus.presentedAt),C.focus.index+=1,C.focus.index>=oe.length?C.focus.phase=`reflect`:C.focus.presentedAt=Date.now(),$()}function q(e){let t=b[C.language.index];if(!t)return;let n=e===t.answer;C.language.answers.push({id:t.id,correct:n}),C.language.index+=1,T(`language_choice_made`,{id:t.id,correct:n}),$()}function J(e){let t=x[C.logic.index];if(!t)return;let n=e===t.answer;C.logic.answers.push({id:t.id,correct:n}),C.logic.index+=1,T(`logic_puzzle_completed`,{id:t.id,correct:n}),$()}function Y(){return(C.memory.totalPositions?C.memory.correctPositions/C.memory.totalPositions:0)>=.86?`Memory signal: your symbol recall held across load and delay.`:C.memory.distractionErrors>C.memory.delayErrors?`Memory signal: recall shifted most when the vault distracted you.`:C.memory.delayErrors>0?`Memory signal: first recall appeared stronger than delayed recall.`:`Memory signal: Ori needs more evidence, but sequence load should be trained gently.`}function ge(){return C.focus.switchErrors>=2?`Focus signal: attention held early, but the rule switch pulled you back to the old pattern.`:C.focus.decoyTaps>=2?`Focus signal: action speed is strong. The next step is protecting accuracy before tapping.`:C.focus.missedTargets>=2?`Focus signal: some targets slipped during the pulse. Signal detection and re-centering should be trained.`:`Focus signal: your attention held through the pulse. Ori will check endurance over longer sessions later.`}function X(){let e=C.language.answers.some(e=>e.id===`inference`&&!e.correct),t=C.language.answers.filter(e=>e.correct).length;return e?`Reading signal: direct details were clearer than hidden meaning. Inference should be trained next.`:t>=4?`Reading signal: direct detail, sequence, inference, and main idea all held in this short passage.`:`Reading signal: Ori needs more evidence across vocabulary, inference, and retention.`}function _e(){let e=C.logic.answers.filter(e=>!e.correct);return e.some(e=>e.id===`fraction`)?`Logic signal: patterns and balance may be ahead of visual fraction intuition.`:e.some(e=>e.id===`balance`)?`Logic signal: number patterns are waking up. Balance reasoning needs support.`:e.length===0?`Logic signal: pattern and balance reasoning were strong in this first forge run.`:`Logic signal: Ori will separate concept gaps from speed, reading load, and working memory.`}function ve(){let e=C.language.answers.filter(e=>e.correct).length,t=C.logic.answers.filter(e=>e.correct).length;return{goal:C.primaryGoal,secondaryGoal:C.secondaryGoal,freeGoal:C.freeGoal,reflectionFeeling:C.reflection.feeling,reflectionStrongest:C.reflection.strongest,memory:{correctPositions:C.memory.correctPositions,totalPositions:C.memory.totalPositions,delayErrors:C.memory.delayErrors,distractionErrors:C.memory.distractionErrors,errorPositions:C.memory.errorPositions},focus:{correct:C.focus.correct,total:C.focus.total,missedTargets:C.focus.missedTargets,decoyTaps:C.focus.decoyTaps,switchErrors:C.focus.switchErrors,responseTimes:C.focus.responseTimes},reading:{correct:e,total:C.language.answers.length,missedInference:C.language.answers.some(e=>e.id===`inference`&&!e.correct),reread:C.language.reread,audio:C.language.audio},math:{correct:t,total:C.logic.answers.length,missedFraction:C.logic.answers.some(e=>e.id===`fraction`&&!e.correct),missedBalance:C.logic.answers.some(e=>e.id===`balance`&&!e.correct)}}}function ye(){return[{label:`Goal`,value:C.primaryGoal||`Become a super learner`},{label:`Memory`,value:Y().replace(`Memory signal: `,``)},{label:`Focus`,value:ge().replace(`Focus signal: `,``)},{label:`Reading`,value:X().replace(`Reading signal: `,``)},{label:`Logic`,value:_e().replace(`Logic signal: `,``)},{label:`Strategy`,value:be()},{label:`First path`,value:Q()},{label:`Daily time`,value:`12-15 minutes to start`}]}function be(){if(!C.reflection.strongest)return`Needs one reflection check.`;let e=Z(),t=Math.max(...Object.values(e)),n=e[C.reflection.strongest];if(n!==void 0&&t-n<=.05)return`Your self-read matched your strongest signal today.`;let r=xe();return`You felt strongest in ${C.reflection.strongest}, while Ori saw the strongest signal in ${r}.`}function xe(){let e=Z();return[[`Memory`,e.Memory],[`Focus`,e.Focus],[`Reading`,e.Reading],[`Math`,e.Math]].reduce((e,t)=>t[1]>e[1]?t:e)[0]}function Z(){return{Memory:C.memory.totalPositions?C.memory.correctPositions/C.memory.totalPositions:0,Focus:C.focus.total?C.focus.correct/C.focus.total:0,Reading:C.language.answers.length?C.language.answers.filter(e=>e.correct).length/C.language.answers.length:0,Math:C.logic.answers.length?C.logic.answers.filter(e=>e.correct).length/C.logic.answers.length:0}}function Q(){return C.focus.switchErrors>=2||C.focus.decoyTaps>=2?`Focus Recovery + Memory Anchors + Inference Clues`:C.memory.delayErrors>0||C.memory.distractionErrors>0?`Memory Anchors + Focus Pulse + Logic Patterns`:C.language.answers.some(e=>e.id===`inference`&&!e.correct)?`Inference Clues + Delayed Recall + Logic Patterns`:C.logic.answers.some(e=>!e.correct)?`Logic Forge Basics + Pace Control + Reading Clues`:`Advanced Recall + Flexible Focus + Transfer Quests`}function Se(){let e=Q();return e.startsWith(`Focus`)?`Steady Signal Quest`:e.startsWith(`Memory`)?`Memory Anchor Quest`:e.startsWith(`Inference`)?`Hidden Clue Quest`:e.startsWith(`Logic`)?`Balance Gate Quest`:`Transfer Trial Quest`}function Ce(){let e=Q();return e.startsWith(`Focus`)?`You practice one breath before action, then repeat a shorter signal round where accuracy comes before speed.`:e.startsWith(`Memory`)?`You group symbols into anchors, replay them as a tiny story, then retrieve them after a short delay.`:e.startsWith(`Inference`)?`You compare what the scroll says directly with what it implies, then choose a path from the hidden clue.`:e.startsWith(`Logic`)?`You use a visual balance gate before seeing the number sentence, so the concept lands before notation.`:`You combine recall, focus, reading, and logic in one small mixed challenge.`}async function we(){let e=document.querySelector(`#brainScene`);if(e){w?.(),w=null;try{let t=await re(()=>import(`./three.module-kyxZOpvy.js`),[]);if(!document.body.contains(e))return;let n=new t.WebGLRenderer({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);let r=new t.Scene,i=new t.PerspectiveCamera(38,1,.1,100);i.position.set(0,-.42,8.45);let a=new t.Group;r.add(a);let o=new t.Group;o.position.set(0,.34,0),o.scale.setScalar(.86),a.add(o);let s=new t.Group,c=new t.Group;o.add(s),o.add(c);let l=new t.MeshStandardMaterial({color:8051682,emissive:1192763,roughness:.24,metalness:.02,transparent:!0,opacity:.075,depthWrite:!1}),u=new t.MeshStandardMaterial({color:15190667,emissive:3089424,roughness:.46,metalness:.04,transparent:!0,opacity:.095,depthWrite:!1}),d=new t.MeshStandardMaterial({color:16767352,emissive:16758861,roughness:.24,metalness:.18,transparent:!0,opacity:.84}),f=new t.MeshBasicMaterial({color:16314847,transparent:!0,opacity:.9,depthWrite:!1}),p=new t.MeshBasicMaterial({color:10482909,transparent:!0,opacity:.74,depthWrite:!1}),m=new t.MeshBasicMaterial({color:460041,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),ne=new t.MeshBasicMaterial({color:16773311,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1}),h=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.26,depthWrite:!1}),g=new t.MeshBasicMaterial({color:6936750,wireframe:!0,transparent:!0,opacity:.065,depthWrite:!1}),_=C.bodyForm===`female`,ie=_?ee:te;s.visible=!0,c.visible=!0;let v=_?.82:1.14,y=_?.76:.6,ae=_?[.86,.75,.52]:[1.18,.82,.6],oe=_?[.46,.78,.43]:[.64,.84,.5],b=[],x=await new t.TextureLoader().loadAsync(ie);if(!document.body.contains(e))return;x.colorSpace=t.SRGBColorSpace,x.anisotropy=n.capabilities.getMaxAnisotropy();let S=new t.MeshBasicMaterial({map:x,transparent:!0,opacity:.98,depthWrite:!1,side:t.DoubleSide,alphaTest:.12}),T=new t.Mesh(new t.PlaneGeometry(3.16,4.74),S);T.position.set(0,-.18,-.28),s.add(T);let E=e=>(b.push(e),c.add(e),e),D=(e,n,r)=>{let i=new t.Vector3(...e),a=new t.Vector3(...n),o=a.clone().sub(i),s=o.length(),c=new t.Mesh(new t.CapsuleGeometry(r,Math.max(.04,s-r*2),10,20),u);return c.position.copy(i.add(a).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new t.Vector3(0,1,0),o.normalize()),E(c)},O=(e,n,r=.012,i=c,a=42)=>{let o=new t.CatmullRomCurve3(e.map(e=>new t.Vector3(...e))),s=new t.Mesh(new t.TubeGeometry(o,a,r,8,!1),n);return i.add(s),s},k=(e,n,r,i=f,a=.5,o=.01)=>{let s=new t.Mesh(new t.TorusGeometry(a,o,10,96),i);return s.position.set(...e),s.scale.set(...n),s.rotation.set(...r),c.add(s),s},A=(e,t,n=.012,r=52)=>{O(e,t,n,c,r),O(e.map(e=>[-e[0],e[1],e[2]]).reverse(),t,n,c,r)},j=(e,t,n,r,i=.008,a=0,o=Math.PI*2,s=72)=>{let l=[];for(let r=0;r<=s;r+=1){let i=a+(o-a)*r/s;l.push([e[0]+Math.cos(i)*t,e[1]+Math.sin(i)*n,e[2]])}return O(l,r,i,c,s)},M=new t.Mesh(new t.SphereGeometry(.78,42,28),l);M.position.set(0,-.26,-.18),M.scale.set(...ae),E(M);let N=new t.Mesh(new t.CapsuleGeometry(.42,.74,18,26),l);N.position.set(0,-.9,-.18),N.scale.set(...oe),E(N);let se=new t.Mesh(new t.SphereGeometry(.5,36,24),l);se.position.set(0,-1.42,-.14),se.scale.set(y*1.42,.44,.46),E(se);let P=new t.Mesh(new t.CapsuleGeometry(.18,.36,14,18),l);P.position.set(0,.52,-.08),P.scale.set(1,1,.65),E(P);let F=new t.Mesh(new t.SphereGeometry(.62,52,34),l);F.position.set(0,1.25,.02),F.scale.set(1.08,1.14,.9),E(F),D([-v,.22,-.08],[-1.42,.22,0],_?.065:.085),D([-1.42,.22,0],[-2.03,.2,.12],_?.058:.07),D([v,.22,-.08],[1.42,.22,0],_?.065:.085),D([1.42,.22,0],[2.03,.2,.12],_?.058:.07),D([-y*.45,-1.58,-.12],[-.33,-2.42,-.04],_?.085:.105),D([-.33,-2.42,-.04],[-.28,-3.14,.03],_?.064:.078),D([y*.45,-1.58,-.12],[.33,-2.42,-.04],_?.085:.105),D([.33,-2.42,-.04],[.28,-3.14,.03],_?.064:.078);let I=new t.Mesh(new t.SphereGeometry(.18,28,20),u);I.position.set(-2.16,.19,.15),I.scale.set(_?1.25:1.38,.34,.44),E(I);let ce=I.clone();ce.position.x=2.16,E(ce);let le=e=>{[-.055,-.018,.018,.055].forEach((t,n)=>{let r=D([e*2.2,.19+t,.2],[e*(2.42+n*.018),.19+t*.82,.22],_?.012:.014);r.material=p});let t=D([e*2.07,.11,.2],[e*2.27,.04,.25],_?.014:.016);t.material=p};le(-1),le(1);let L=new t.Mesh(new t.SphereGeometry(.16,24,18),u);L.position.set(-.29,-3.22,.2),L.scale.set(1.22,.34,.62),E(L);let ue=L.clone();if(ue.position.x=.29,E(ue),_){let e=new t.Mesh(new t.SphereGeometry(.65,38,24),u);e.position.set(0,1.22,-.12),e.scale.set(.92,1,.62),E(e)}k([0,1.26,.56],[1.08,1.14,.08],[0,0,0],f,.56,.012),k([-.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],p,.5,.006),k([.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],p,.5,.006),O([[-.35,.92,.6],[-.18,.78,.63],[0,.75,.65],[.18,.78,.63],[.35,.92,.6]],f,.01),O([[.02,1.45,.64],[.12,1.32,.71],[.05,1.19,.66]],p,.008),O([[-2.12,.22,.25],[-1.48,.26,.18],[-v,.25,.1],[-.42,.24,.02],[0,.18,.04],[.42,.24,.02],[v,.25,.1],[1.48,.26,.18],[2.12,.22,.25]],f,.016),O([[-v*.58,.18,.42],[-ae[0]*.48,-.38,.46],[-y*.55,-1.17,.42],[-y*.74,-1.44,.34]],f,.014),O([[v*.58,.18,.42],[ae[0]*.48,-.38,.46],[y*.55,-1.17,.42],[y*.74,-1.44,.34]],f,.014),O([[-.36,.02,.5],[-.18,-.04,.54],[0,-.06,.55],[.18,-.04,.54],[.36,.02,.5]],p,.008),O([[0,.06,.55],[0,-.35,.57],[0,-.82,.54],[0,-1.16,.48]],p,.008),[-.18,0,.18].forEach(e=>{O([[-.28,-.48+e,.56],[-.1,-.52+e,.59],[.1,-.52+e,.59],[.28,-.48+e,.56]],p,.006)}),O([[-.34,-1.48,.4],[-.45,-2.14,.35],[-.35,-2.86,.3],[-.31,-3.22,.32]],f,.012),O([[.34,-1.48,.4],[.45,-2.14,.35],[.35,-2.86,.3],[.31,-3.22,.32]],f,.012),k([-2.11,.2,.28],[.42,.16,.08],[0,0,0],f,.32,.008),k([2.11,.2,.28],[.42,.16,.08],[0,0,0],f,.32,.008),k([-.31,-3.23,.34],[.48,.16,.08],[0,0,-.05],f,.32,.008),k([.31,-3.23,.34],[.48,.16,.08],[0,0,.05],f,.32,.008);let R=.72,z=.755,de=_?.92:1.08,fe=_?.62:.76,pe=_?.38:.58,me=_?.78:.62;j([0,1.3,R],.47,.6,f,.012,0,Math.PI*2,96),O([[-.28,1.43,z],[-.31,1.22,z],[-.22,1.05,z],[0,.97,z],[.22,1.05,z],[.31,1.22,z],[.28,1.43,z]],p,.007,c,46),j([-.49,1.28,R-.02],.06,.14,f,.006,0,Math.PI*2,36),j([.49,1.28,R-.02],.06,.14,f,.006,0,Math.PI*2,36),O([[0,1.48,z],[.06,1.35,.775],[.01,1.21,z]],p,.006),O([[-.17,1.14,z],[0,1.09,z],[.17,1.14,z]],p,.005),_?A([[-.34,1.83,R-.03],[-.53,1.55,R],[-.55,1.13,R],[-.36,.86,R]],p,.009,48):O([[-.32,1.65,z],[-.12,1.73,z],[.12,1.73,z],[.32,1.65,z]],p,.008),A([[-.18,.86,R],[-.23,.61,R],[-.45,.42,R],[-de,.31,R]],f,.012,44),A([[-.14,.72,z],[-.3,.54,z],[-.58,.43,z],[-.88,.34,z]],p,.007,38),A([[-de,.34,R],[-1.22,.31,R],[-1.62,.26,R],[-2.05,.22,R],[-2.34,.19,R]],f,.014,60),A([[-.82,.13,R],[-1.2,.11,R],[-1.62,.11,R],[-2.05,.13,R],[-2.33,.16,R]],f,.012,60),A([[-1.34,.3,z],[-1.43,.19,z],[-1.34,.1,z]],p,.005,24),[-1,1].forEach(e=>{j([e*2.39,.18,R],.17,.075,f,.007,0,Math.PI*2,34),[-.05,-.017,.017,.05].forEach(t=>{O([[e*2.27,.18+t,z],[e*2.49,.18+t*.85,z]],p,.004,c,12)})}),A([[-fe,.18,R],[-.6,-.18,R],[-pe,-.76,R],[-.5,-1.08,R],[-me,-1.42,R]],f,.015,58),O([[-.42,.12,z],[-.2,.02,z],[0,-.01,z],[.2,.02,z],[.42,.12,z]],p,.007,c,34),_?(j([-.24,-.13,z],.2,.12,p,.005,Math.PI*.05,Math.PI*1.02,34),j([.24,-.13,z],.2,.12,p,.005,Math.PI*-.02,Math.PI*.95,34)):O([[-.48,-.08,z],[-.2,-.16,z],[0,-.14,z],[.2,-.16,z],[.48,-.08,z]],p,.006),O([[0,.05,z],[0,-.38,z],[0,-.86,z],[0,-1.24,z]],p,.007),[-.12,-.38,-.64].forEach(e=>{O([[-.28,e,z],[-.1,e-.04,z],[.1,e-.04,z],[.28,e,z]],p,.005,c,28)}),O([[-.35,-1.18,z],[-.14,-1.38,z],[0,-1.48,z],[.14,-1.38,z],[.35,-1.18,z]],p,.006,c,32),A([[-me*.58,-1.42,R],[-.58,-1.92,R],[-.54,-2.42,R],[-.42,-2.94,R],[-.34,-3.2,R]],f,.013,62),A([[-.16,-1.52,R],[-.19,-2.03,R],[-.18,-2.52,R],[-.22,-3.06,R]],f,.011,58),A([[-.45,-2.28,z],[-.34,-2.39,z],[-.22,-2.29,z]],p,.005,24),A([[-.24,-3.18,R],[-.52,-3.22,R],[-.62,-3.31,R],[-.4,-3.39,R],[-.18,-3.34,R]],f,.008,38),[-1,1].forEach(e=>{[-.08,-.02,.04].forEach(t=>{O([[e*.37,-3.29+t,z],[e*.6,-3.31+t*.5,z]],p,.0035,c,8)})}),b.forEach(e=>{let n=new t.Mesh(e.geometry,g);n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale).multiplyScalar(1.012),c.add(n)});let B=new t.Group;B.position.set(0,_?1.56:1.52,.42),B.rotation.set(-.02,-.05,.02),B.scale.setScalar(_?.23:.22),o.add(B);let V=new t.Mesh(new t.SphereGeometry(.7,56,36),d),he=new t.Vector3(1.22,.78,.58);V.scale.copy(he),V.material.opacity=.08,B.add(V);let H=[],U=(e,n,r,i,a,o=.035)=>{let s=new t.MeshStandardMaterial({color:e,emissive:n,roughness:.36,metalness:.08,transparent:!0,opacity:.96}),c=new t.Mesh(new t.SphereGeometry(.34,48,30),s);return c.position.set(...r),c.scale.set(...i),B.add(c),H.push({mesh:c,phase:a,pulse:o,baseScale:i}),c};U(15952548,7280446,[-.42,.12,.08],[1.28,.86,.68],0),U(9098063,2975772,[.05,.29,0],[1.12,.75,.62],.7),U(16181340,7694870,[.16,.14,.2],[.38,.92,.34],1.25,.025),U(9402584,3154015,[-.16,-.23,.12],[1.16,.55,.62],1.8),U(6147297,1464426,[.48,.02,-.04],[.78,.73,.58],2.25),U(16749179,7548963,[.31,-.47,-.1],[.72,.38,.46],2.75,.018);let W=new t.Mesh(new t.CapsuleGeometry(.09,.5,14,22),new t.MeshStandardMaterial({color:16756876,emissive:6237730,roughness:.38,metalness:.04,transparent:!0,opacity:.94}));W.position.set(.36,-.72,-.08),W.rotation.z=-.18,B.add(W),H.push({mesh:W,phase:3.2,pulse:.012,baseScale:[1,1,1]});let G=new t.Mesh(new t.SphereGeometry(.12,28,18),new t.MeshStandardMaterial({color:16767352,emissive:8082709,roughness:.28,metalness:.12,transparent:!0,opacity:.95}));G.position.set(-.12,-.2,.44),G.scale.set(1.5,.5,.62),B.add(G),H.push({mesh:G,phase:3.8,pulse:.055,baseScale:[1.5,.5,.62]});let K=new t.Mesh(new t.SphereGeometry(.1,26,18),new t.MeshStandardMaterial({color:6936750,emissive:1530953,roughness:.25,metalness:.14,transparent:!0,opacity:.96}));K.position.set(-.5,.18,.43),K.scale.set(1.15,.82,.62),B.add(K),H.push({mesh:K,phase:4.2,pulse:.065,baseScale:[1.15,.82,.62]});let q=(e,t=m,n=.01,r=36)=>O(e,t,n,B,r);q([[-.76,.02,.29],[-.6,.38,.28],[-.2,.54,.24],[.28,.48,.17],[.68,.18,.1],[.64,-.12,.12],[.36,-.35,.16],[-.08,-.42,.24],[-.52,-.24,.3],[-.76,.02,.29]],ne,.01,60),q([[.06,.52,.31],[.02,.32,.36],[.04,.12,.38],[.1,-.05,.36]],m,.011),q([[-.72,.27,.37],[-.52,.39,.41],[-.28,.32,.42],[-.14,.44,.39]]),q([[-.72,.08,.42],[-.5,.18,.45],[-.26,.1,.46],[-.08,.2,.43]]),q([[-.65,-.1,.4],[-.42,-.02,.46],[-.2,-.08,.48],[-.02,.03,.44]]),q([[-.52,-.29,.36],[-.26,-.22,.44],[0,-.28,.43],[.18,-.18,.35]]),q([[-.22,.5,.33],[.02,.4,.38],[.24,.44,.3],[.44,.3,.24]]),q([[.1,.29,.42],[.28,.23,.43],[.44,.14,.35],[.6,.03,.24]]),q([[.18,.02,.42],[.36,-.02,.4],[.5,-.13,.28],[.57,-.24,.16]]),q([[-.52,-.31,.3],[-.3,-.39,.37],[-.05,-.37,.36],[.18,-.43,.25]]),[-.16,-.08,0,.08].forEach(e=>{q([[.04,-.47+e,.27],[.24,-.43+e,.26],[.48,-.45+e,.12]],m,.006,22)});let J=new t.Mesh(new t.TorusGeometry(1.22,.008,12,110),h);J.position.set(-.2,.02,.42),J.rotation.set(Math.PI/2.35,.18,0),o.add(J);let Y=J.clone();Y.position.x=.2,Y.rotation.y=-.18,o.add(Y);let ge=new t.Mesh(new t.TorusGeometry(1.72,.008,12,150),h);ge.rotation.x=Math.PI/2,o.add(ge);let X=new t.Group;X.position.set(0,-2.73,.1),X.scale.setScalar(.86),a.add(X);let _e=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.44,depthWrite:!1}),ve=new t.MeshBasicMaterial({color:16767352,transparent:!0,opacity:.38,depthWrite:!1});[.72,1.18,1.62].forEach((e,n)=>{let r=new t.Mesh(new t.TorusGeometry(e,n===1?.01:.006,10,160),n===1?ve:_e);r.rotation.x=Math.PI/2,X.add(r)});let ye=new t.LineBasicMaterial({color:10482909,transparent:!0,opacity:.22}),be=[];for(let e=0;e<24;e+=1){let t=Math.PI*2*e/24;be.push(Math.cos(t)*.34,0,Math.sin(t)*.34),be.push(Math.cos(t)*1.72,0,Math.sin(t)*1.72)}let xe=new t.BufferGeometry;xe.setAttribute(`position`,new t.Float32BufferAttribute(be,3)),X.add(new t.LineSegments(xe,ye));let Z=new t.BufferGeometry,Q=new Float32Array(540);for(let e=0;e<Q.length;e+=3)Q[e]=(Math.random()-.5)*4.8,Q[e+1]=(Math.random()-.5)*4.2,Q[e+2]=(Math.random()-.5)*3.4;Z.setAttribute(`position`,new t.BufferAttribute(Q,3));let Se=new t.Points(Z,new t.PointsMaterial({color:15190667,size:.018,transparent:!0,opacity:.58}));r.add(Se),r.add(new t.AmbientLight(14602926,1.5));let Ce=new t.PointLight(16767352,4.2,10);Ce.position.set(2.6,3.2,3.4),r.add(Ce);let we=new t.PointLight(6936750,2.3,9);we.position.set(-2.8,.4,2.2),r.add(we);let $=()=>{let t=e.getBoundingClientRect(),r=Math.max(1,t.width),a=Math.max(1,t.height);n.setSize(r,a,!1),i.aspect=r/a,i.updateProjectionMatrix()},Te=0,Ee=new ResizeObserver(()=>{window.cancelAnimationFrame(Te),Te=window.requestAnimationFrame($)});Ee.observe(e),$();let De=0,Oe=!0,ke=0,Ae=()=>{let e=a.rotation.y%(Math.PI*2),t=Math.max(0,Math.cos(e)),n=Math.max(0,Math.min(1,(t-.72)/.28)),r=n*n*(3-2*n),i=Math.max(0,Math.min(1,(.92-t)/.28)),o=i*i*(3-2*i);S.opacity=r*.98,l.opacity=o*.002,u.opacity=o*.002,g.opacity=o*.006,f.opacity=.01+o*.58,p.opacity=.008+o*.36},je=(e=0)=>{if(!Oe)return;ke||=e;let t=e-ke;C.reducedMotion?a.rotation.y=0:a.rotation.y=t*42e-5%(Math.PI*2),Ae(),C.reducedMotion||(V.scale.copy(he),H.forEach(({mesh:e,baseScale:t})=>{e.scale.set(...t)}),Se.rotation.y-=.0015),n.render(r,i),De=window.requestAnimationFrame(je)};je(),w=()=>{Oe=!1,window.cancelAnimationFrame(De),window.cancelAnimationFrame(Te),Ee.disconnect(),n.dispose(),Z.dispose(),e.innerHTML=``}}catch{e.innerHTML=`
      <div class="scene-fallback">
        <div class="fallback-body" aria-label="Symbolic body and mind map"></div>
      </div>
    `}}}function $(){w&&=(w(),null);let e={intro:se,ori:P,subjects:F,goals:I,realms:ce,memory:le,focus:L,language:ue,logic:R,reflection:z,report:de,quest:fe,path:pe}[C.screen];g.innerHTML=e(),he(),H(),C.screen===`intro`&&we()}T(`onboarding_started`),$();