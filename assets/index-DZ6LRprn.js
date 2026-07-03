(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let a=[t(e),n(e),r(e),i(e)].sort((e,t)=>e.priority-t.priority),c=a[0],l=[...a].sort((e,t)=>t.score-e.score)[0],u=[e.goal,e.secondaryGoal,e.freeGoal].join(` `).toLowerCase(),d=u.includes(`super learner`)||u.includes(`faster`)||u.includes(`work`),f=d?`18-25 minutes a day`:`12-15 minutes a day`,p=d?`5 focused days, 1 mixed challenge day, 1 rest or reflection day`:`4 focused days, 1 mixed challenge day, 2 lighter recovery days`;return{domains:a,primaryGrowth:c,strongestSignal:l,timeline:o(c,l,d),dailyMinutes:f,weeklyRhythm:p,confidenceNote:s(e,l)}}function t(e){let t=e.memory.totalPositions;return a(`Memory`,c((t?e.memory.correctPositions/t:0)-e.memory.delayErrors*.055-e.memory.distractionErrors*.04),t,t?`${e.memory.correctPositions}/${t} positions held; delay errors: ${e.memory.delayErrors}; distraction errors: ${e.memory.distractionErrors}.`:`Memory trial has not been completed yet.`,e.memory.delayErrors>0?`Train delayed recall with anchors, short retrieval breaks, and one same-day retention check.`:e.memory.distractionErrors>0?`Train recall while filtering distraction, then retest after a short interruption.`:`Increase sequence load gently and check whether recall still holds tomorrow.`)}function n(e){let t=e.focus.total,n=c((t?e.focus.correct/t:0)-e.focus.switchErrors*.08-e.focus.decoyTaps*.055-e.focus.missedTargets*.04),r=e.focus.responseTimes.length?Math.round(e.focus.responseTimes.reduce((e,t)=>e+t,0)/e.focus.responseTimes.length):void 0;return a(`Focus`,n,t,t?`${e.focus.correct}/${t} choices correct; missed targets: ${e.focus.missedTargets}; decoy taps: ${e.focus.decoyTaps}; switch errors: ${e.focus.switchErrors}${r?`; average tap ${r} ms.`:`.`}`:`Focus pulse has not been completed yet.`,e.focus.switchErrors>0?`Train rule switching: pause, name the new rule, then act.`:e.focus.decoyTaps>0?`Train impulse control by separating speed from accuracy.`:`Extend focus endurance in small rounds without adding pressure.`)}function r(e){let t=e.reading.total,n=c((t?e.reading.correct/t:0)-(e.reading.missedInference?.13:0)-(e.reading.reread?.03:0)),r=[e.reading.reread?`reread support used`:``,e.reading.audio?`audio support used`:``].filter(Boolean).join(`; `);return a(`Reading`,n,t,t?`${e.reading.correct}/${t} comprehension answers correct${r?`; ${r}.`:`.`}`:`Reading trial has not been completed yet.`,e.reading.missedInference?`Train inference by separating what the text says from what it implies.`:`Add retention checks after reading so comprehension does not disappear after the passage.`)}function i(e){let t=e.math.total;return a(`Math`,c((t?e.math.correct/t:0)-(e.math.missedFraction?.1:0)-(e.math.missedBalance?.08:0)),t,t?`${e.math.correct}/${t} logic and numeracy puzzles correct${e.math.missedFraction?`; fraction model needs support`:``}${e.math.missedBalance?`; balance reasoning needs support`:``}.`:`Logic and math trial has not been completed yet.`,e.math.missedFraction?`Train visual fraction meaning before adding speed or notation.`:e.math.missedBalance?`Train balance equations with visual gates before symbolic equations.`:`Move into mixed patterns, balance, and real-world number sense.`)}function a(e,t,n,r,i){let a=n===0?`needs more evidence`:t>=.78?`strong early signal`:`trainable growth edge`,o=n===0?2+(1-t):1-t;return{key:e,score:t,scoreLabel:`${Math.round(t*100)}%`,level:a,priority:o,evidence:r,nextStep:i}}function o(e,t,n){let r=n?`Weeks 7-8`:`Week 5`;return[{window:`Week 1`,title:`Confirm the baseline`,focus:`Retest ${e.key.toLowerCase()} and ${t.key.toLowerCase()} so Ori can separate a real pattern from a one-day result.`},{window:`Weeks 2-3`,title:`Train ${e.key}`,focus:e.nextStep},{window:n?`Weeks 4-6`:`Weeks 4`,title:`Mix the skill under pressure`,focus:`Blend ${e.key.toLowerCase()} with focus, recall, and reading load so the skill transfers instead of staying isolated.`},{window:r,title:`Prove transfer`,focus:`Use a real-world challenge: learn a short article, solve a practical problem, explain it back, and retrieve it the next day.`}]}function s(e,t){return e.reflectionStrongest?e.reflectionStrongest===t.key?`Your self-read matched the strongest early signal: ${t.key}.`:`You felt strongest in ${e.reflectionStrongest}, while Ori's strongest early signal was ${t.key}. That gap is useful, not bad; it helps train confidence calibration.`:`Ori still needs one self-reflection check to compare confidence with task signals.`}function c(e){return Math.max(0,Math.min(1,e))}var l=[{id:`memory`,title:`Memory and retention`,realm:`Memory Vault`,status:`active`,summary:`Remembering instructions, facts, names, sequences, and what stays after time passes.`,helpsWith:[`working memory`,`delayed recall`,`visual memory`,`verbal memory`,`memory anchors`],assessmentSignals:[`sequence recall`,`delay effect`,`distraction effect`,`error position`],aliases:[`memory`,`remembering`,`retention`,`recall`,`forgetting`,`recall repetition`,`retrieval practice`,`spaced repetition`]},{id:`focus`,title:`Focus and executive control`,realm:`Focus Tower`,status:`active`,summary:`Staying with the right signal, ignoring distractions, controlling pace, and switching rules.`,helpsWith:[`sustained attention`,`selective attention`,`inhibitory control`,`rule switching`,`pace control`],assessmentSignals:[`missed targets`,`decoy taps`,`response-time drift`,`rule-switch recovery`],aliases:[`focus`,`attention`,`attention sculpting`,`executive function`,`executive control`,`distraction`,`distraction blocking`,`concentration`]},{id:`readiness`,title:`Mind-body readiness and practice loops`,realm:`Readiness Gate`,status:`active`,summary:`Aligning sleep, movement, nutrition awareness, timing, input quality, reflection, and playful practice so the learner is ready to encode and retain.`,helpsWith:[`sleep mastery`,`movement integration`,`practice timing`,`mindful encoding`,`input curation`,`nutrition awareness`,`outcome tracking`,`playful practice`],assessmentSignals:[`readiness check-in`,`sleep consistency`,`energy rating`,`movement break effect`,`input overload`,`practice timing response`,`reflection follow-through`,`outcome trend`],aliases:[`readiness`,`sleep`,`sleep mastery`,`movement`,`movement integration`,`exercise`,`nutrition`,`neuro nutrition`,`food`,`timing`,`timing strategies`,`input curation`,`mindful encoding`,`outcome tracking`,`optimized outcome tracking`,`practice loop`,`playful practice`,`recovery`,`energy`,`fatigue`,`tired`,`environment`]},{id:`reading-comprehension`,title:`Reading comprehension`,realm:`Language Grove`,status:`active`,summary:`Understanding what text says, what it implies, what matters most, and what the learner remembers later.`,helpsWith:[`literal meaning`,`sequencing`,`inference`,`main idea`,`summarizing`],assessmentSignals:[`reading time`,`rereading`,`choice accuracy`,`inference misses`,`retention after reading`],aliases:[`reading`,`comprehension`,`reading comprehension`,`understanding text`,`books`]},{id:`language-vocabulary`,title:`Language and vocabulary`,realm:`Language Grove`,status:`active`,summary:`Building word meaning, sentence understanding, listening comprehension, and background knowledge.`,helpsWith:[`vocabulary`,`syntax`,`listening comprehension`,`background knowledge`],assessmentSignals:[`unknown word handling`,`audio support effect`,`sentence complexity errors`],aliases:[`language`,`vocabulary`,`words`,`listening`,`sentences`]},{id:`math`,title:`Math and numeracy`,realm:`Logic Forge`,status:`active`,summary:`Number sense, arithmetic, fractions, balance reasoning, and confidence with quantitative tasks.`,helpsWith:[`number sense`,`arithmetic fluency`,`fractions`,`ratios`,`algebra readiness`],assessmentSignals:[`math accuracy`,`visual support effect`,`timer sensitivity`,`concept versus pace errors`],aliases:[`math`,`numeracy`,`numbers`,`arithmetic`,`fractions`,`algebra`]},{id:`problem-solving`,title:`Logic and problem solving`,realm:`Logic Forge`,status:`active`,summary:`Seeing patterns, representing problems, testing rules, and adapting when a solution path changes.`,helpsWith:[`pattern recognition`,`adaptive problem solving`,`spatial reasoning`,`multistep thinking`],assessmentSignals:[`rule discovery`,`strategy switching`,`repeated failed action`,`transfer to new puzzles`],aliases:[`logic`,`reasoning`,`problem solving`,`puzzles`,`patterns`]},{id:`strategy`,title:`Learning strategy and metacognition`,realm:`Strategy Observatory`,status:`active`,summary:`Helping learners plan, monitor understanding, choose strategies, and know when they need support.`,helpsWith:[`goal setting`,`confidence calibration`,`error analysis`,`help seeking`,`strategy choice`],assessmentSignals:[`goal specificity`,`confidence prediction`,`reflection accuracy`,`hint timing`],aliases:[`strategy`,`metacognition`,`learning strategy`,`study skills`,`planning`,`reflection`,`loop reflection`]},{id:`confidence`,title:`Confidence and emotional learning state`,realm:`Inner Compass`,status:`active`,summary:`Reducing shame, noticing pressure, recovering after mistakes, and building a healthier learner identity.`,helpsWith:[`math anxiety`,`reading shame`,`frustration recovery`,`persistence`,`motivation`],assessmentSignals:[`self-reported feeling`,`quit point`,`recovery after error`,`pressure sensitivity`],aliases:[`confidence`,`anxiety`,`shame`,`motivation`,`emotions`,`frustration`]},{id:`speed-accuracy`,title:`Learning speed with accuracy`,realm:`Tempo Arena`,status:`planned`,summary:`Getting faster only after understanding is stable, so speed does not destroy comprehension.`,helpsWith:[`fluency`,`pacing`,`endurance`,`speed accuracy balance`],assessmentSignals:[`time trend`,`accuracy drop under speed`,`pacing choices`],aliases:[`speed`,`fluency`,`faster learning`,`pace`,`accuracy`]},{id:`transfer`,title:`Transfer to real life`,realm:`Worldgate`,status:`planned`,summary:`Checking whether skills used in the app help with real reading, work, studying, money, and daily memory.`,helpsWith:[`work learning`,`real-world reading`,`daily memory`,`self-teaching`,`test preparation`],assessmentSignals:[`outside-app check-ins`,`capstone tasks`,`new-context performance`],aliases:[`transfer`,`real life`,`work`,`daily life`,`self teaching`,`test prep`]}];function u(){let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=e.map(e=>`${e.title}: ${e.summary}`).join(` `),r=t.map(e=>e.title).join(`, `);return`Mind Realms is being designed to help with ${e.map(e=>e.title).join(`, `)}. ${n} Planned expansion areas include ${r}. If a new topic is already in the map, the app will ask whether you meant to research it more deeply or whether it was added by mistake.`}function d(e){let t=f(e);if(t)return l.find(e=>[e.id,e.title,e.realm,...e.aliases].some(e=>{let n=f(e);return t===n||t.includes(n)||n.includes(t)}))}function f(e){return e.toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9 ]+/g,` `).replace(/\s+/g,` `).trim()}var p=`modulepreload`,ee=function(e){return`/mind-realms-live/`+e},m={},te=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=ee(t,n),t=s(t),t in m)return;m[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:p,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},h=document.querySelector(`#app`);if(!h)throw Error(`App root was not found.`);var g=h,_=[`intro`,`ori`,`subjects`,`goals`,`realms`,`memory`,`focus`,`language`,`logic`,`reflection`,`report`,`quest`,`path`],ne=[`Remember what I learn`,`Read and understand faster`,`Get stronger at math`,`Focus without drifting`,`Learn faster for work`,`Prepare for a test`,`Become a super learner`],v=[`Build confidence`,`Stop forgetting instructions`,`Improve problem solving`,`Think clearly under pressure`,`Read books and retain them`,`Learn like I never learned in school`],y=[[`Sun`,`Key`,`Wave`],[`Gate`,`Sun`,`Crown`,`Key`],[`Leaf`,`Wave`,`Gate`,`Crown`,`Sun`]],b=[`Sun`,`Key`,`Wave`,`Gate`,`Crown`,`Leaf`],x=[{label:`Gold Star`,target:!0},{label:`Silver Moon`,target:!1},{label:`Gold Star`,target:!0},{label:`Blue Gate`,target:!1},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Moon`,target:!0},{label:`Moon`,target:!0},{label:`Sun`,target:!1},{label:`Sun`,target:!0,afterSwitch:!0},{label:`Moon`,target:!1,afterSwitch:!0},{label:`Sun`,target:!0,afterSwitch:!0}],S=[{id:`literal`,prompt:`Which object did Mara carry through the rain?`,options:[`A silver seed`,`A broken lantern`,`A sleeping bird`],answer:`A silver seed`},{id:`sequence`,prompt:`What had to happen before Mara opened her hand?`,options:[`The thunder had to stop`,`The map had to burn`,`The seed had to glow`],answer:`The thunder had to stop`},{id:`inference`,prompt:`Why did Mara wait?`,options:[`The map warned the seed would wake only when the sky became quiet`,`She forgot what she was carrying`,`She wanted the rain to wash the map away`],answer:`The map warned the seed would wake only when the sky became quiet`},{id:`main`,prompt:`What is this moment mostly about?`,options:[`Following a warning carefully`,`Escaping a dangerous animal`,`Learning how to draw a map`],answer:`Following a warning carefully`}],C=[{id:`make10`,prompt:`Choose the pair of stones that makes 10.`,options:[`4 and 6`,`2 and 9`,`7 and 4`,`5 and 6`],answer:`4 and 6`},{id:`pattern`,prompt:`Complete the symbol pattern: 3, 6, 12, 24, ?`,options:[`30`,`36`,`48`,`72`],answer:`48`},{id:`fraction`,prompt:`Which piece matches one half?`,options:[`Two of four equal parts`,`One of three equal parts`,`Three of four equal parts`,`One of six equal parts`],answer:`Two of four equal parts`},{id:`balance`,prompt:`The gate shows: Box + 3 = 8. What is hidden in the box?`,options:[`3`,`4`,`5`,`8`],answer:`5`}],w=()=>({screen:`intro`,reducedMotion:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,bodyForm:`male`,audioStatus:`Audio summary ready.`,topicDraft:``,researchQueue:[],primaryGoal:``,secondaryGoal:``,freeGoal:``,events:[],memory:{phase:`intro`,round:0,input:[],correctPositions:0,totalPositions:0,errorPositions:[],delayErrors:0,distractionErrors:0,feedback:``},focus:{phase:`intro`,index:0,presentedAt:0,missedTargets:0,decoyTaps:0,correct:0,total:0,switchErrors:0,responseTimes:[],reflection:``},language:{index:0,answers:[],startedAt:0,reread:!1,audio:!1},logic:{index:0,answers:[]},reflection:{feeling:``,strongest:``},firstQuestComplete:!1}),T=w(),E=null,D=(e,t)=>{T.events.push({type:e,screen:T.screen,timestamp:Date.now(),payload:t})},O=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e),k=()=>{let e=_.indexOf(T.screen);e<_.length-1&&(T.screen=_[e+1],D(`screen_viewed`,{screen:T.screen}),$())},A=e=>{T.screen=e,D(`screen_viewed`,{screen:e}),$()},re=()=>{M(!1),T=w(),D(`prototype_reset`),$()};function j(){if(!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){T.audioStatus=`This browser cannot play voice audio yet. Open in Chrome or a mobile browser to hear it spoken.`,D(`subject_audio_unavailable`),$();return}window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(u());e.rate=.94,e.pitch=.92,e.onend=()=>{T.audioStatus=`Audio summary finished.`,D(`subject_audio_finished`),$()},e.onerror=()=>{T.audioStatus=`Audio did not play in this browser. Open in Chrome or a mobile browser to hear it spoken.`,D(`subject_audio_error`),$()},T.audioStatus=`Playing subject summary...`,D(`subject_audio_started`,{subjectCount:l.length}),$(),window.speechSynthesis.speak(e)}function M(e=!0){`speechSynthesis`in window&&window.speechSynthesis.cancel(),T.audioStatus=`Audio summary stopped.`,D(`subject_audio_stopped`),e&&$()}function N(e){let t=T.topicDraft.trim();if(!t){T.topicNotice={kind:`empty`,message:`Type a topic first, then I can check whether it is already in the learning map.`},$();return}let n=d(t);if(n&&!e){T.topicNotice={kind:`duplicate`,subjectTitle:n.title,message:`Hey, you added this already: ${n.title}. Are you purposely trying to research more to get a more in-depth feel, or did you kind of make a mistake?`},D(`duplicate_topic_detected`,{query:t,subject:n.id}),$();return}let r=n?`Deep research: ${n.title}`:`New topic research: ${t}`;T.researchQueue.includes(r)||T.researchQueue.push(r),T.topicNotice={kind:`queued`,subjectTitle:n?.title,message:n?`${n.title} is already in the map, so I added a deeper research pass to the queue.`:`${t} is not in the current map yet, so I added it to the future research queue.`},D(`topic_research_queued`,{query:t,existingSubject:n?.id}),$()}var P=e=>{let t=_.indexOf(T.screen),n=_.map((e,n)=>`<span class="step-dot ${n<=t?`active`:``}"></span>`).join(``);return`
    <div class="app ${T.reducedMotion?`reduced-motion`:``}">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <strong>Mind Realms</strong>
            <span>First-session prototype</span>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="ghost-button" data-action="motion">${T.reducedMotion?`Motion off`:`Motion on`}</button>
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
  `},F=()=>P(`
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
      <div class="brain-labels" aria-hidden="true">
        <span class="brain-label frontal">Frontal<br />lobe</span>
        <span class="brain-label parietal">Parietal<br />lobe</span>
        <span class="brain-label temporal">Temporal<br />lobe</span>
        <span class="brain-label occipital">Occipital<br />lobe</span>
        <span class="brain-label cerebellum">Cerebellum</span>
        <span class="brain-label executive">Focus +<br />control</span>
      </div>
      <div class="scene-caption">
        <span>Transparent anatomy view</span>
        <div class="body-form-toggle" aria-label="Body form">
          <button class="small-button ${T.bodyForm===`male`?`selected`:``}" data-body-form="male">Male</button>
          <button class="small-button ${T.bodyForm===`female`?`selected`:``}" data-body-form="female">Female</button>
        </div>
      </div>
    </div>
  </section>
`),I=()=>P(`
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
`),L=()=>{let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=u(),r=e.map(e=>`
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
      `).join(``),a=T.topicNotice?`
      <div class="topic-alert ${T.topicNotice.kind}">
        ${T.topicNotice.kind===`duplicate`?`<strong class="flash-word">Already added</strong>`:``}
        <p>${T.topicNotice.message}</p>
        ${T.topicNotice.kind===`duplicate`?`<div class="actions">
                <button class="secondary-button" data-action="topic-deep">Research deeper anyway</button>
                <button class="small-button" data-action="topic-clear">Clear</button>
              </div>`:``}
      </div>
    `:``,o=T.researchQueue.length?`
      <div class="footer-note">
        Research queue: ${T.researchQueue.map(O).join(`, `)}
      </div>
    `:``;return P(`
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
            <p class="footer-note">${T.audioStatus}</p>
            <p class="audio-transcript">${O(n)}</p>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Add or research a topic</h3>
            <input class="text-input" id="topicDraft" value="${O(T.topicDraft)}" placeholder="Try: focus, sleep, writing, motivation..." />
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
  `)},R=()=>P(`
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
            <div class="choice-grid">${ne.map(e=>`<button class="choice-button ${T.primaryGoal===e?`selected`:``}" data-goal="${O(e)}">${O(e)}</button>`).join(``)}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Secondary signal</h3>
            <div class="choice-grid">${v.map(e=>`<button class="choice-button ${T.secondaryGoal===e?`selected`:``}" data-secondary="${O(e)}">${O(e)}</button>`).join(``)}</div>
            <textarea class="text-field" id="freeGoal" placeholder="Tell Ori what you want to become.">${O(T.freeGoal)}</textarea>
            <div class="actions">
              <button class="primary-button" data-action="next">${T.primaryGoal?`Open the realms`:`Choose a goal first`}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),z=()=>P(`
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
  `),B=()=>{let e=y[T.memory.round]??[],t=b.map(e=>`<button class="rune-button" data-rune="${e}">${e}</button>`).join(``),n=`Round ${Math.min(T.memory.round+1,y.length)} of ${y.length}`,r=``;return r=T.memory.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Memory Vault</h3>
          <p class="lede">Watch the magic symbol sequence, then rebuild it after the vault closes.</p>
          <button class="primary-button" data-action="memory-start">Begin memory trial</button>
        </div>
      </div>
    `:T.memory.phase===`show`?`
      <div class="trial-surface">
        <div class="rune-sequence">
          ${e.map(e=>`<div class="rune glow">${e}</div>`).join(``)}
        </div>
      </div>
    `:T.memory.phase===`answer`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">Rebuild the sequence. Current answer: ${T.memory.input.join(` -> `)||`none yet`}</p>
          <div class="answer-row">${t}</div>
        </div>
      </div>
    `:T.memory.phase===`feedback`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${T.memory.feedback}</p>
          <button class="primary-button" data-action="memory-next-round">Continue</button>
        </div>
      </div>
    `:`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${ce()}</p>
          <button class="primary-button" data-action="next">Enter Focus Tower</button>
        </div>
      </div>
    `,P(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">${n}</div>
        <h2>Memory Vault</h2>
        <p class="lede">Ori is looking for recall, sequence memory, delay effect, and distraction recovery.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${r}</div></div>
    </section>
  `)},V=()=>{let e=x[T.focus.index],t=``;return t=T.focus.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Focus Tower Pulse</h3>
          <p class="lede">Hold the rule, ignore decoys, and switch when the tower changes. Accuracy matters more than speed.</p>
          <button class="primary-button" data-action="focus-start">Begin focus pulse</button>
        </div>
      </div>
    `:T.focus.phase===`run`&&e?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${T.focus.index<5?`Tap Gold Star. Let other signs pass.`:T.focus.index<8?`Tap Gold Star. Ignore Cracked Star.`:T.focus.index<11?`Tap Moon.`:`The tower chimed. Now tap Sun.`}</p>
          <div class="focus-token ${e.decoy?`decoy`:``}">${e.label}</div>
          <div class="actions">
            <button class="primary-button" data-focus-action="tap">Tap</button>
            <button class="secondary-button" data-focus-action="pass">Let pass</button>
          </div>
        </div>
      </div>
    `:T.focus.phase===`reflect`?`
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
          <p class="feedback">${le()}</p>
          <button class="primary-button" data-action="next">Enter Language Grove</button>
        </div>
      </div>
    `,P(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Trial 2 of 4</div>
        <h2>Focus Tower</h2>
        <p class="lede">This short pulse helps Ori avoid mistaking attention drift or rushing for weak memory, reading, or math.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${t}</div></div>
    </section>
  `)},H=()=>{let e=S[T.language.index],t=T.language.answers.length;return P(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Question ${t+1} of ${S.length}</div>
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
            <button class="small-button" data-action="audio">${T.language.audio?`Audio noted`:`Use audio support`}</button>
          </div>
          <div class="question">
            <h3>${e.prompt}</h3>
            <div class="choice-grid">
              ${e.options.map(e=>`<button class="choice-button" data-language="${O(e)}">${O(e)}</button>`).join(``)}
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
          <p class="lede">${ue()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Enter Logic Forge</button>
        </div>
      </section>
    `)},U=()=>{let e=C[T.logic.index];return P(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Puzzle ${T.logic.index+1} of ${C.length}</div>
        <h2>Logic Forge</h2>
        <p class="lede">Power the bridge with number symbols, patterns, visual fractions, and balance reasoning.</p>
      </div>
      <div class="panel">
        <div class="panel-inner trial-stage">
          <div class="trial-surface">
            <div class="panel-inner">
              <h3>${e.prompt}</h3>
              <div class="logic-grid">
                ${e.options.map(e=>`<button class="choice-button" data-logic="${O(e)}">${O(e)}</button>`).join(``)}
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
          <p class="lede">${de()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Open the mirror</button>
        </div>
      </section>
    `)},W=()=>P(`
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
              ${[`Easier than expected`,`About right`,`Hard but possible`,`Frustrating`,`I felt nervous`].map(e=>`<button class="choice-button ${T.reflection.feeling===e?`selected`:``}" data-feeling="${e}">${e}</button>`).join(``)}
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Where were you strongest?</h3>
            <div class="choice-grid">
              ${[`Memory`,`Focus`,`Reading`,`Math`,`Not sure`].map(e=>`<button class="choice-button ${T.reflection.strongest===e?`selected`:``}" data-strongest="${e}">${e}</button>`).join(``)}
            </div>
            <div class="actions">
              <button class="primary-button" data-action="next">Reveal first signals</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),G=()=>{let t=pe(),n=e(fe()),r=n.domains.map(e=>`
        <article class="profile-card">
          <div class="subject-card-top">
            <span class="subject-status">${O(e.level)}</span>
            <span>${e.scoreLabel}</span>
          </div>
          <h3>${e.key}</h3>
          <div class="profile-bar" aria-hidden="true">
            <span style="width: ${Math.round(e.score*100)}%"></span>
          </div>
          <p>${O(e.evidence)}</p>
          <p><strong>Next:</strong> ${O(e.nextStep)}</p>
        </article>
      `).join(``),i=n.timeline.map(e=>`
        <article class="timeline-step">
          <strong>${O(e.window)}</strong>
          <h3>${O(e.title)}</h3>
          <p>${O(e.focus)}</p>
        </article>
      `).join(``);return P(`
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
          <p class="lede">${O(n.weeklyRhythm)}.</p>
          <p class="footer-note">${O(n.confidenceNote)}</p>
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
  `)},K=()=>{let e=T.firstQuestComplete?`First quest complete. You improved the path by practicing one strategy immediately.`:`Ori chooses one guided quest from your strongest growth signal. This prototype simulates that first personalized lesson.`;return P(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Free proof quest</div>
        <h2>${_e()}</h2>
        <p class="lede">${e}</p>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>${_e()}</h3>
          <p class="lede">${ve()}</p>
          <div class="actions">
            <button class="primary-button" data-action="complete-quest">${T.firstQuestComplete?`Quest complete`:`Complete guided quest`}</button>
            <button class="secondary-button" data-action="next">Preview my path</button>
          </div>
        </div>
      </div>
    </section>
  `)},q=()=>P(`
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
`);function J(){g.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`next`&&k(),t===`reset`&&re(),t===`motion`&&(T.reducedMotion=!T.reducedMotion,D(`reduced_motion_toggled`,{enabled:T.reducedMotion}),$()),t===`go-report`&&A(`report`),t===`memory-start`&&X(),t===`memory-next-round`&&(T.memory.round+=1,X()),t===`focus-start`&&ie(),t===`reread`&&(T.language.reread=!0,D(`language_reread_marked`),$()),t===`audio`&&(T.language.audio=!0,D(`audio_support_selected`),$()),t===`speak-subject-summary`&&j(),t===`stop-subject-summary`&&M(),t===`topic-check`&&N(!1),t===`topic-deep`&&N(!0),t===`topic-clear`&&(T.topicNotice=void 0,T.topicDraft=``,$()),t===`complete-quest`&&(T.firstQuestComplete=!0,D(`first_quest_completed`,{path:Q()}),$()),t===`interest`){D(`pricing_interest_clicked`,{price:`$14.99/month`});let e=document.querySelector(`#interestNote`);e&&(e.textContent=`Interest captured for the prototype. Payment is not active yet.`)}})})}function Y(){g.querySelectorAll(`[data-goal]`).forEach(e=>{e.addEventListener(`click`,()=>{T.primaryGoal=e.dataset.goal??``,D(`goal_selected`,{primaryGoal:T.primaryGoal}),$()})}),g.querySelectorAll(`[data-secondary]`).forEach(e=>{e.addEventListener(`click`,()=>{T.secondaryGoal=e.dataset.secondary??``,D(`secondary_goal_selected`,{secondaryGoal:T.secondaryGoal}),$()})});let e=g.querySelector(`#freeGoal`);e?.addEventListener(`input`,()=>{T.freeGoal=e.value});let t=g.querySelector(`#topicDraft`);t?.addEventListener(`input`,()=>{T.topicDraft=t.value}),g.querySelectorAll(`[data-body-form]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bodyForm;t!==`male`&&t!==`female`||(T.bodyForm=t,D(`body_form_selected`,{bodyForm:t}),$())})}),g.querySelectorAll(`[data-rune]`).forEach(e=>{e.addEventListener(`click`,()=>Z(e.dataset.rune??``))}),g.querySelectorAll(`[data-focus-action]`).forEach(e=>{e.addEventListener(`click`,()=>ae(e.dataset.focusAction===`tap`))}),g.querySelectorAll(`[data-focus-reflect]`).forEach(e=>{e.addEventListener(`click`,()=>{T.focus.reflection=e.dataset.focusReflect??``,T.focus.phase=`done`,D(`focus_pulse_completed`,{missedTargets:T.focus.missedTargets,decoyTaps:T.focus.decoyTaps,switchErrors:T.focus.switchErrors,reflection:T.focus.reflection}),$()})}),g.querySelectorAll(`[data-language]`).forEach(e=>{e.addEventListener(`click`,()=>oe(e.dataset.language??``))}),g.querySelectorAll(`[data-logic]`).forEach(e=>{e.addEventListener(`click`,()=>se(e.dataset.logic??``))}),g.querySelectorAll(`[data-feeling]`).forEach(e=>{e.addEventListener(`click`,()=>{T.reflection.feeling=e.dataset.feeling??``,D(`reflection_feeling_selected`,{feeling:T.reflection.feeling}),$()})}),g.querySelectorAll(`[data-strongest]`).forEach(e=>{e.addEventListener(`click`,()=>{T.reflection.strongest=e.dataset.strongest??``,D(`reflection_strength_selected`,{strongest:T.reflection.strongest}),$()})})}function X(){T.memory.phase=`show`,T.memory.input=[],T.memory.feedback=``,D(`trial_started`,{trial:`memory`,round:T.memory.round+1}),$(),window.setTimeout(()=>{T.screen===`memory`&&T.memory.phase===`show`&&(T.memory.phase=`answer`,$())},T.reducedMotion?500:1600)}function Z(e){if(T.memory.phase!==`answer`)return;let t=y[T.memory.round]??[];if(T.memory.input.push(e),T.memory.input.length>=t.length){let e=0;t.forEach((t,n)=>{T.memory.input[n]===t?e+=1:T.memory.errorPositions.push(n+1)});let n=t.length-e;T.memory.correctPositions+=e,T.memory.totalPositions+=t.length,T.memory.round===1&&(T.memory.distractionErrors+=n),T.memory.round===2&&(T.memory.delayErrors+=n),D(`memory_sequence_completed`,{round:T.memory.round+1,correct:e,total:t.length}),T.memory.round>=y.length-1?T.memory.phase=`done`:(T.memory.phase=`feedback`,T.memory.feedback=n===0?`The sequence held cleanly. Ori will increase the load gently.`:`Part of the symbol chain faded. Ori is watching where the slip happened.`)}$()}function ie(){T.focus.phase=`run`,T.focus.index=0,T.focus.presentedAt=Date.now(),D(`trial_started`,{trial:`focus`}),$()}function ae(e){if(T.focus.phase!==`run`)return;let t=x[T.focus.index];if(!t)return;let n=t.target===e;T.focus.total+=1,n&&(T.focus.correct+=1),t.target&&!e&&(T.focus.missedTargets+=1),!t.target&&e&&(T.focus.decoyTaps+=1),t.afterSwitch&&!n&&(T.focus.switchErrors+=1),e&&T.focus.responseTimes.push(Date.now()-T.focus.presentedAt),T.focus.index+=1,T.focus.index>=x.length?T.focus.phase=`reflect`:T.focus.presentedAt=Date.now(),$()}function oe(e){let t=S[T.language.index];if(!t)return;let n=e===t.answer;T.language.answers.push({id:t.id,correct:n}),T.language.index+=1,D(`language_choice_made`,{id:t.id,correct:n}),$()}function se(e){let t=C[T.logic.index];if(!t)return;let n=e===t.answer;T.logic.answers.push({id:t.id,correct:n}),T.logic.index+=1,D(`logic_puzzle_completed`,{id:t.id,correct:n}),$()}function ce(){return(T.memory.totalPositions?T.memory.correctPositions/T.memory.totalPositions:0)>=.86?`Memory signal: your symbol recall held across load and delay.`:T.memory.distractionErrors>T.memory.delayErrors?`Memory signal: recall shifted most when the vault distracted you.`:T.memory.delayErrors>0?`Memory signal: first recall appeared stronger than delayed recall.`:`Memory signal: Ori needs more evidence, but sequence load should be trained gently.`}function le(){return T.focus.switchErrors>=2?`Focus signal: attention held early, but the rule switch pulled you back to the old pattern.`:T.focus.decoyTaps>=2?`Focus signal: action speed is strong. The next step is protecting accuracy before tapping.`:T.focus.missedTargets>=2?`Focus signal: some targets slipped during the pulse. Signal detection and re-centering should be trained.`:`Focus signal: your attention held through the pulse. Ori will check endurance over longer sessions later.`}function ue(){let e=T.language.answers.some(e=>e.id===`inference`&&!e.correct),t=T.language.answers.filter(e=>e.correct).length;return e?`Reading signal: direct details were clearer than hidden meaning. Inference should be trained next.`:t>=4?`Reading signal: direct detail, sequence, inference, and main idea all held in this short passage.`:`Reading signal: Ori needs more evidence across vocabulary, inference, and retention.`}function de(){let e=T.logic.answers.filter(e=>!e.correct);return e.some(e=>e.id===`fraction`)?`Logic signal: patterns and balance may be ahead of visual fraction intuition.`:e.some(e=>e.id===`balance`)?`Logic signal: number patterns are waking up. Balance reasoning needs support.`:e.length===0?`Logic signal: pattern and balance reasoning were strong in this first forge run.`:`Logic signal: Ori will separate concept gaps from speed, reading load, and working memory.`}function fe(){let e=T.language.answers.filter(e=>e.correct).length,t=T.logic.answers.filter(e=>e.correct).length;return{goal:T.primaryGoal,secondaryGoal:T.secondaryGoal,freeGoal:T.freeGoal,reflectionFeeling:T.reflection.feeling,reflectionStrongest:T.reflection.strongest,memory:{correctPositions:T.memory.correctPositions,totalPositions:T.memory.totalPositions,delayErrors:T.memory.delayErrors,distractionErrors:T.memory.distractionErrors,errorPositions:T.memory.errorPositions},focus:{correct:T.focus.correct,total:T.focus.total,missedTargets:T.focus.missedTargets,decoyTaps:T.focus.decoyTaps,switchErrors:T.focus.switchErrors,responseTimes:T.focus.responseTimes},reading:{correct:e,total:T.language.answers.length,missedInference:T.language.answers.some(e=>e.id===`inference`&&!e.correct),reread:T.language.reread,audio:T.language.audio},math:{correct:t,total:T.logic.answers.length,missedFraction:T.logic.answers.some(e=>e.id===`fraction`&&!e.correct),missedBalance:T.logic.answers.some(e=>e.id===`balance`&&!e.correct)}}}function pe(){return[{label:`Goal`,value:T.primaryGoal||`Become a super learner`},{label:`Memory`,value:ce().replace(`Memory signal: `,``)},{label:`Focus`,value:le().replace(`Focus signal: `,``)},{label:`Reading`,value:ue().replace(`Reading signal: `,``)},{label:`Logic`,value:de().replace(`Logic signal: `,``)},{label:`Strategy`,value:me()},{label:`First path`,value:Q()},{label:`Daily time`,value:`12-15 minutes to start`}]}function me(){if(!T.reflection.strongest)return`Needs one reflection check.`;let e=ge(),t=Math.max(...Object.values(e)),n=e[T.reflection.strongest];if(n!==void 0&&t-n<=.05)return`Your self-read matched your strongest signal today.`;let r=he();return`You felt strongest in ${T.reflection.strongest}, while Ori saw the strongest signal in ${r}.`}function he(){let e=ge();return[[`Memory`,e.Memory],[`Focus`,e.Focus],[`Reading`,e.Reading],[`Math`,e.Math]].reduce((e,t)=>t[1]>e[1]?t:e)[0]}function ge(){return{Memory:T.memory.totalPositions?T.memory.correctPositions/T.memory.totalPositions:0,Focus:T.focus.total?T.focus.correct/T.focus.total:0,Reading:T.language.answers.length?T.language.answers.filter(e=>e.correct).length/T.language.answers.length:0,Math:T.logic.answers.length?T.logic.answers.filter(e=>e.correct).length/T.logic.answers.length:0}}function Q(){return T.focus.switchErrors>=2||T.focus.decoyTaps>=2?`Focus Recovery + Memory Anchors + Inference Clues`:T.memory.delayErrors>0||T.memory.distractionErrors>0?`Memory Anchors + Focus Pulse + Logic Patterns`:T.language.answers.some(e=>e.id===`inference`&&!e.correct)?`Inference Clues + Delayed Recall + Logic Patterns`:T.logic.answers.some(e=>!e.correct)?`Logic Forge Basics + Pace Control + Reading Clues`:`Advanced Recall + Flexible Focus + Transfer Quests`}function _e(){let e=Q();return e.startsWith(`Focus`)?`Steady Signal Quest`:e.startsWith(`Memory`)?`Memory Anchor Quest`:e.startsWith(`Inference`)?`Hidden Clue Quest`:e.startsWith(`Logic`)?`Balance Gate Quest`:`Transfer Trial Quest`}function ve(){let e=Q();return e.startsWith(`Focus`)?`You practice one breath before action, then repeat a shorter signal round where accuracy comes before speed.`:e.startsWith(`Memory`)?`You group symbols into anchors, replay them as a tiny story, then retrieve them after a short delay.`:e.startsWith(`Inference`)?`You compare what the scroll says directly with what it implies, then choose a path from the hidden clue.`:e.startsWith(`Logic`)?`You use a visual balance gate before seeing the number sentence, so the concept lands before notation.`:`You combine recall, focus, reading, and logic in one small mixed challenge.`}async function ye(){let e=document.querySelector(`#brainScene`);if(e){E?.(),E=null;try{let t=await te(()=>import(`./three.module-kyxZOpvy.js`),[]);if(!document.body.contains(e))return;let n=new t.WebGLRenderer({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);let r=new t.Scene,i=new t.PerspectiveCamera(38,1,.1,100);i.position.set(0,-.42,7.6);let a=new t.Group;a.position.set(0,.12,0),r.add(a);let o=new t.MeshStandardMaterial({color:8051682,emissive:1192763,roughness:.24,metalness:.02,transparent:!0,opacity:.16,depthWrite:!1}),s=new t.MeshStandardMaterial({color:15190667,emissive:3089424,roughness:.46,metalness:.04,transparent:!0,opacity:.18,depthWrite:!1}),c=new t.MeshStandardMaterial({color:16767352,emissive:16758861,roughness:.24,metalness:.18,transparent:!0,opacity:.84}),l=new t.MeshBasicMaterial({color:14678771,transparent:!0,opacity:.62,depthWrite:!1}),u=new t.MeshBasicMaterial({color:15190667,transparent:!0,opacity:.58,depthWrite:!1}),d=new t.MeshBasicMaterial({color:460041,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),f=new t.MeshBasicMaterial({color:16773311,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1}),p=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.26,depthWrite:!1}),ee=new t.MeshBasicMaterial({color:6936750,wireframe:!0,transparent:!0,opacity:.16,depthWrite:!1}),m=T.bodyForm===`female`,h=m?.64:.86,g=m?.58:.44,_=m?[.84,.72,.52]:[1.05,.8,.56],ne=m?[.54,.74,.44]:[.68,.82,.48],v=[],y=e=>(v.push(e),a.add(e),e),b=(e,n,r)=>{let i=new t.Vector3(...e),a=new t.Vector3(...n),o=a.clone().sub(i),c=o.length(),l=new t.Mesh(new t.CapsuleGeometry(r,Math.max(.04,c-r*2),10,20),s);return l.position.copy(i.add(a).multiplyScalar(.5)),l.quaternion.setFromUnitVectors(new t.Vector3(0,1,0),o.normalize()),y(l)},x=(e,n,r=.012,i=a,o=42)=>{let s=new t.CatmullRomCurve3(e.map(e=>new t.Vector3(...e))),c=new t.Mesh(new t.TubeGeometry(s,o,r,8,!1),n);return i.add(c),c},S=(e,n,r,i=l,o=.5,s=.01)=>{let c=new t.Mesh(new t.TorusGeometry(o,s,10,96),i);return c.position.set(...e),c.scale.set(...n),c.rotation.set(...r),a.add(c),c},C=new t.Mesh(new t.SphereGeometry(.78,42,28),o);C.position.set(0,-.26,-.18),C.scale.set(..._),y(C);let w=new t.Mesh(new t.CapsuleGeometry(.42,.74,18,26),o);w.position.set(0,-.9,-.18),w.scale.set(...ne),y(w);let D=new t.Mesh(new t.SphereGeometry(.5,36,24),o);D.position.set(0,-1.42,-.14),D.scale.set(g*1.42,.44,.46),y(D);let O=new t.Mesh(new t.CapsuleGeometry(.18,.36,14,18),o);O.position.set(0,.52,-.08),O.scale.set(1,1,.65),y(O);let k=new t.Mesh(new t.SphereGeometry(.62,52,34),o);k.position.set(0,1.25,.02),k.scale.set(1.08,1.14,.9),y(k),b([-h,.22,-.08],[-1.42,.22,0],m?.065:.085),b([-1.42,.22,0],[-2.03,.2,.12],m?.058:.07),b([h,.22,-.08],[1.42,.22,0],m?.065:.085),b([1.42,.22,0],[2.03,.2,.12],m?.058:.07),b([-g*.45,-1.58,-.12],[-.33,-2.42,-.04],m?.085:.105),b([-.33,-2.42,-.04],[-.28,-3.14,.03],m?.064:.078),b([g*.45,-1.58,-.12],[.33,-2.42,-.04],m?.085:.105),b([.33,-2.42,-.04],[.28,-3.14,.03],m?.064:.078);let A=new t.Mesh(new t.SphereGeometry(.18,28,20),s);A.position.set(-2.1,.19,.15),A.scale.set(1.25,.34,.42),y(A);let re=A.clone();re.position.x=2.1,y(re);let j=new t.Mesh(new t.SphereGeometry(.16,24,18),s);j.position.set(-.29,-3.22,.2),j.scale.set(1.22,.34,.62),y(j);let M=j.clone();if(M.position.x=.29,y(M),m){let e=new t.Mesh(new t.SphereGeometry(.65,38,24),s);e.position.set(0,1.22,-.12),e.scale.set(.92,1,.62),y(e)}S([0,1.26,.56],[1.08,1.14,.08],[0,0,0],l,.56,.012),S([-.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],u,.5,.006),S([.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],u,.5,.006),x([[-.35,.92,.6],[-.18,.78,.63],[0,.75,.65],[.18,.78,.63],[.35,.92,.6]],l,.01),x([[.02,1.45,.64],[.12,1.32,.71],[.05,1.19,.66]],u,.008),x([[-2.12,.22,.25],[-1.48,.26,.18],[-h,.25,.1],[-.42,.24,.02],[0,.18,.04],[.42,.24,.02],[h,.25,.1],[1.48,.26,.18],[2.12,.22,.25]],l,.016),x([[-h*.58,.18,.42],[-_[0]*.48,-.38,.46],[-g*.55,-1.17,.42],[-g*.74,-1.44,.34]],l,.014),x([[h*.58,.18,.42],[_[0]*.48,-.38,.46],[g*.55,-1.17,.42],[g*.74,-1.44,.34]],l,.014),x([[-.36,.02,.5],[-.18,-.04,.54],[0,-.06,.55],[.18,-.04,.54],[.36,.02,.5]],u,.008),x([[0,.06,.55],[0,-.35,.57],[0,-.82,.54],[0,-1.16,.48]],u,.008),[-.18,0,.18].forEach(e=>{x([[-.28,-.48+e,.56],[-.1,-.52+e,.59],[.1,-.52+e,.59],[.28,-.48+e,.56]],u,.006)}),x([[-.34,-1.48,.4],[-.45,-2.14,.35],[-.35,-2.86,.3],[-.31,-3.22,.32]],l,.012),x([[.34,-1.48,.4],[.45,-2.14,.35],[.35,-2.86,.3],[.31,-3.22,.32]],l,.012),S([-2.11,.2,.28],[.42,.16,.08],[0,0,0],l,.32,.008),S([2.11,.2,.28],[.42,.16,.08],[0,0,0],l,.32,.008),S([-.31,-3.23,.34],[.48,.16,.08],[0,0,-.05],l,.32,.008),S([.31,-3.23,.34],[.48,.16,.08],[0,0,.05],l,.32,.008),v.forEach(e=>{let n=new t.Mesh(e.geometry,ee);n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale).multiplyScalar(1.012),a.add(n)});let N=new t.Group;N.position.set(0,1.3,.62),N.rotation.set(-.04,-.18,.02),N.scale.setScalar(.82),a.add(N);let P=new t.Mesh(new t.SphereGeometry(.7,56,36),c),F=new t.Vector3(1.22,.78,.58);P.scale.copy(F),P.material.opacity=.08,N.add(P);let I=[],L=(e,n,r,i,a,o=.035)=>{let s=new t.MeshStandardMaterial({color:e,emissive:n,roughness:.36,metalness:.08,transparent:!0,opacity:.96}),c=new t.Mesh(new t.SphereGeometry(.34,48,30),s);return c.position.set(...r),c.scale.set(...i),N.add(c),I.push({mesh:c,phase:a,pulse:o,baseScale:i}),c};L(15952548,7280446,[-.42,.12,.08],[1.28,.86,.68],0),L(9098063,2975772,[.05,.29,0],[1.12,.75,.62],.7),L(16181340,7694870,[.16,.14,.2],[.38,.92,.34],1.25,.025),L(9402584,3154015,[-.16,-.23,.12],[1.16,.55,.62],1.8),L(6147297,1464426,[.48,.02,-.04],[.78,.73,.58],2.25),L(16749179,7548963,[.31,-.47,-.1],[.72,.38,.46],2.75,.018);let R=new t.Mesh(new t.CapsuleGeometry(.09,.5,14,22),new t.MeshStandardMaterial({color:16756876,emissive:6237730,roughness:.38,metalness:.04,transparent:!0,opacity:.94}));R.position.set(.36,-.72,-.08),R.rotation.z=-.18,N.add(R),I.push({mesh:R,phase:3.2,pulse:.012,baseScale:[1,1,1]});let z=(e,t=d,n=.01,r=36)=>x(e,t,n,N,r);z([[-.76,.02,.29],[-.6,.38,.28],[-.2,.54,.24],[.28,.48,.17],[.68,.18,.1],[.64,-.12,.12],[.36,-.35,.16],[-.08,-.42,.24],[-.52,-.24,.3],[-.76,.02,.29]],f,.01,60),z([[.06,.52,.31],[.02,.32,.36],[.04,.12,.38],[.1,-.05,.36]],d,.011),z([[-.72,.27,.37],[-.52,.39,.41],[-.28,.32,.42],[-.14,.44,.39]]),z([[-.72,.08,.42],[-.5,.18,.45],[-.26,.1,.46],[-.08,.2,.43]]),z([[-.65,-.1,.4],[-.42,-.02,.46],[-.2,-.08,.48],[-.02,.03,.44]]),z([[-.52,-.29,.36],[-.26,-.22,.44],[0,-.28,.43],[.18,-.18,.35]]),z([[-.22,.5,.33],[.02,.4,.38],[.24,.44,.3],[.44,.3,.24]]),z([[.1,.29,.42],[.28,.23,.43],[.44,.14,.35],[.6,.03,.24]]),z([[.18,.02,.42],[.36,-.02,.4],[.5,-.13,.28],[.57,-.24,.16]]),z([[-.52,-.31,.3],[-.3,-.39,.37],[-.05,-.37,.36],[.18,-.43,.25]]),[-.16,-.08,0,.08].forEach(e=>{z([[.04,-.47+e,.27],[.24,-.43+e,.26],[.48,-.45+e,.12]],d,.006,22)});let B=new t.Mesh(new t.TorusGeometry(1.22,.008,12,110),p);B.position.set(-.2,.02,.42),B.rotation.set(Math.PI/2.35,.18,0),a.add(B);let V=B.clone();V.position.x=.2,V.rotation.y=-.18,a.add(V);let H=new t.Mesh(new t.TorusGeometry(1.72,.008,12,150),p);H.rotation.x=Math.PI/2,a.add(H);let U=new t.BufferGeometry,W=new Float32Array(540);for(let e=0;e<W.length;e+=3)W[e]=(Math.random()-.5)*4.8,W[e+1]=(Math.random()-.5)*4.2,W[e+2]=(Math.random()-.5)*3.4;U.setAttribute(`position`,new t.BufferAttribute(W,3));let G=new t.Points(U,new t.PointsMaterial({color:15190667,size:.018,transparent:!0,opacity:.58}));r.add(G),r.add(new t.AmbientLight(14602926,1.5));let K=new t.PointLight(16767352,4.2,10);K.position.set(2.6,3.2,3.4),r.add(K);let q=new t.PointLight(6936750,2.3,9);q.position.set(-2.8,.4,2.2),r.add(q);let J=()=>{let t=e.getBoundingClientRect(),r=Math.max(1,t.width),a=Math.max(1,t.height);n.setSize(r,a,!1),i.aspect=r/a,i.updateProjectionMatrix()},Y=new ResizeObserver(J);Y.observe(e),J();let X=0,Z=!0,ie=(e=0)=>{Z&&(T.reducedMotion||(a.rotation.y+=.0034,N.rotation.y-=.0014,P.scale.copy(F).multiplyScalar(1+Math.sin(e*.0022)*.035),I.forEach(({mesh:t,baseScale:n,phase:r,pulse:i})=>{let a=1+Math.sin(e*.0024+r)*i;t.scale.set(n[0]*a,n[1]*a,n[2]*a)}),B.rotation.z+=.003,V.rotation.z-=.003,H.position.y=-1.04+(Math.sin(e*.0017)+1)/2*2.55,G.rotation.y-=.0015),n.render(r,i),X=window.requestAnimationFrame(ie))};ie(),E=()=>{Z=!1,window.cancelAnimationFrame(X),Y.disconnect(),n.dispose(),U.dispose(),e.innerHTML=``}}catch{e.innerHTML=`
      <div class="scene-fallback">
        <div class="fallback-body" aria-label="Symbolic body and mind map"></div>
      </div>
    `}}}function $(){E&&=(E(),null);let e={intro:F,ori:I,subjects:L,goals:R,realms:z,memory:B,focus:V,language:H,logic:U,reflection:W,report:G,quest:K,path:q}[T.screen];g.innerHTML=e(),J(),Y(),T.screen===`intro`&&ye()}D(`onboarding_started`),$();