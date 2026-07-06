(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let a=[t(e),n(e),r(e),i(e)].sort((e,t)=>e.priority-t.priority),c=a[0],l=[...a].sort((e,t)=>t.score-e.score)[0],u=[e.goal,e.secondaryGoal,e.freeGoal].join(` `).toLowerCase(),d=u.includes(`super learner`)||u.includes(`faster`)||u.includes(`work`),f=d?`18-25 minutes a day`:`12-15 minutes a day`,ee=d?`5 focused days, 1 mixed challenge day, 1 rest or reflection day`:`4 focused days, 1 mixed challenge day, 2 lighter recovery days`;return{domains:a,primaryGrowth:c,strongestSignal:l,timeline:o(c,l,d),dailyMinutes:f,weeklyRhythm:ee,confidenceNote:s(e,l)}}function t(e){let t=e.memory.totalPositions;return a(`Memory`,c((t?e.memory.correctPositions/t:0)-e.memory.delayErrors*.055-e.memory.distractionErrors*.04),t,t?`${e.memory.correctPositions}/${t} positions held; delay errors: ${e.memory.delayErrors}; distraction errors: ${e.memory.distractionErrors}.`:`Memory trial has not been completed yet.`,e.memory.delayErrors>0?`Train delayed recall with anchors, short retrieval breaks, and one same-day retention check.`:e.memory.distractionErrors>0?`Train recall while filtering distraction, then retest after a short interruption.`:`Increase sequence load gently and check whether recall still holds tomorrow.`)}function n(e){let t=e.focus.total,n=c((t?e.focus.correct/t:0)-e.focus.switchErrors*.08-e.focus.decoyTaps*.055-e.focus.missedTargets*.04),r=e.focus.responseTimes.length?Math.round(e.focus.responseTimes.reduce((e,t)=>e+t,0)/e.focus.responseTimes.length):void 0;return a(`Focus`,n,t,t?`${e.focus.correct}/${t} choices correct; missed targets: ${e.focus.missedTargets}; decoy taps: ${e.focus.decoyTaps}; switch errors: ${e.focus.switchErrors}${r?`; average tap ${r} ms.`:`.`}`:`Focus pulse has not been completed yet.`,e.focus.switchErrors>0?`Train rule switching: pause, name the new rule, then act.`:e.focus.decoyTaps>0?`Train impulse control by separating speed from accuracy.`:`Extend focus endurance in small rounds without adding pressure.`)}function r(e){let t=e.reading.total,n=c((t?e.reading.correct/t:0)-(e.reading.missedInference?.13:0)-(e.reading.reread?.03:0)),r=[e.reading.reread?`reread support used`:``,e.reading.audio?`audio support used`:``].filter(Boolean).join(`; `);return a(`Reading`,n,t,t?`${e.reading.correct}/${t} comprehension answers correct${r?`; ${r}.`:`.`}`:`Reading trial has not been completed yet.`,e.reading.missedInference?`Train inference by separating what the text says from what it implies.`:`Add retention checks after reading so comprehension does not disappear after the passage.`)}function i(e){let t=e.math.total;return a(`Math`,c((t?e.math.correct/t:0)-(e.math.missedFraction?.1:0)-(e.math.missedBalance?.08:0)),t,t?`${e.math.correct}/${t} logic and numeracy puzzles correct${e.math.missedFraction?`; fraction model needs support`:``}${e.math.missedBalance?`; balance reasoning needs support`:``}.`:`Logic and math trial has not been completed yet.`,e.math.missedFraction?`Train visual fraction meaning before adding speed or notation.`:e.math.missedBalance?`Train balance equations with visual gates before symbolic equations.`:`Move into mixed patterns, balance, and real-world number sense.`)}function a(e,t,n,r,i){let a=n===0?`needs more evidence`:t>=.78?`strong early signal`:`trainable growth edge`,o=n===0?2+(1-t):1-t;return{key:e,score:t,scoreLabel:`${Math.round(t*100)}%`,level:a,priority:o,evidence:r,nextStep:i}}function o(e,t,n){let r=n?`Weeks 7-8`:`Week 5`;return[{window:`Week 1`,title:`Confirm the baseline`,focus:`Retest ${e.key.toLowerCase()} and ${t.key.toLowerCase()} so Ori can separate a real pattern from a one-day result.`},{window:`Weeks 2-3`,title:`Train ${e.key}`,focus:e.nextStep},{window:n?`Weeks 4-6`:`Weeks 4`,title:`Mix the skill under pressure`,focus:`Blend ${e.key.toLowerCase()} with focus, recall, and reading load so the skill transfers instead of staying isolated.`},{window:r,title:`Prove transfer`,focus:`Use a real-world challenge: learn a short article, solve a practical problem, explain it back, and retrieve it the next day.`}]}function s(e,t){return e.reflectionStrongest?e.reflectionStrongest===t.key?`Your self-read matched the strongest early signal: ${t.key}.`:`You felt strongest in ${e.reflectionStrongest}, while Ori's strongest early signal was ${t.key}. That gap is useful, not bad; it helps train confidence calibration.`:`Ori still needs one self-reflection check to compare confidence with task signals.`}function c(e){return Math.max(0,Math.min(1,e))}var l=[{id:`memory`,title:`Memory and retention`,realm:`Memory Vault`,status:`active`,summary:`Remembering instructions, facts, names, sequences, and what stays after time passes.`,helpsWith:[`working memory`,`delayed recall`,`visual memory`,`verbal memory`,`memory anchors`],assessmentSignals:[`sequence recall`,`delay effect`,`distraction effect`,`error position`],aliases:[`memory`,`remembering`,`retention`,`recall`,`forgetting`,`recall repetition`,`retrieval practice`,`spaced repetition`]},{id:`focus`,title:`Focus and executive control`,realm:`Focus Tower`,status:`active`,summary:`Staying with the right signal, ignoring distractions, controlling pace, and switching rules.`,helpsWith:[`sustained attention`,`selective attention`,`inhibitory control`,`rule switching`,`pace control`],assessmentSignals:[`missed targets`,`decoy taps`,`response-time drift`,`rule-switch recovery`],aliases:[`focus`,`attention`,`attention sculpting`,`executive function`,`executive control`,`distraction`,`distraction blocking`,`concentration`]},{id:`readiness`,title:`Mind-body readiness and practice loops`,realm:`Readiness Gate`,status:`active`,summary:`Aligning sleep, movement, nutrition awareness, timing, input quality, reflection, and playful practice so the learner is ready to encode and retain.`,helpsWith:[`sleep mastery`,`movement integration`,`practice timing`,`mindful encoding`,`input curation`,`nutrition awareness`,`outcome tracking`,`playful practice`],assessmentSignals:[`readiness check-in`,`sleep consistency`,`energy rating`,`movement break effect`,`input overload`,`practice timing response`,`reflection follow-through`,`outcome trend`],aliases:[`readiness`,`sleep`,`sleep mastery`,`movement`,`movement integration`,`exercise`,`nutrition`,`neuro nutrition`,`food`,`timing`,`timing strategies`,`input curation`,`mindful encoding`,`outcome tracking`,`optimized outcome tracking`,`practice loop`,`playful practice`,`recovery`,`energy`,`fatigue`,`tired`,`environment`]},{id:`reading-comprehension`,title:`Reading comprehension`,realm:`Language Grove`,status:`active`,summary:`Understanding what text says, what it implies, what matters most, and what the learner remembers later.`,helpsWith:[`literal meaning`,`sequencing`,`inference`,`main idea`,`summarizing`],assessmentSignals:[`reading time`,`rereading`,`choice accuracy`,`inference misses`,`retention after reading`],aliases:[`reading`,`comprehension`,`reading comprehension`,`understanding text`,`books`]},{id:`language-vocabulary`,title:`Language and vocabulary`,realm:`Language Grove`,status:`active`,summary:`Building word meaning, sentence understanding, listening comprehension, and background knowledge.`,helpsWith:[`vocabulary`,`syntax`,`listening comprehension`,`background knowledge`],assessmentSignals:[`unknown word handling`,`audio support effect`,`sentence complexity errors`],aliases:[`language`,`vocabulary`,`words`,`listening`,`sentences`]},{id:`math`,title:`Math and numeracy`,realm:`Logic Forge`,status:`active`,summary:`Number sense, arithmetic, fractions, balance reasoning, and confidence with quantitative tasks.`,helpsWith:[`number sense`,`arithmetic fluency`,`fractions`,`ratios`,`algebra readiness`],assessmentSignals:[`math accuracy`,`visual support effect`,`timer sensitivity`,`concept versus pace errors`],aliases:[`math`,`numeracy`,`numbers`,`arithmetic`,`fractions`,`algebra`]},{id:`problem-solving`,title:`Logic and problem solving`,realm:`Logic Forge`,status:`active`,summary:`Seeing patterns, representing problems, testing rules, and adapting when a solution path changes.`,helpsWith:[`pattern recognition`,`adaptive problem solving`,`spatial reasoning`,`multistep thinking`],assessmentSignals:[`rule discovery`,`strategy switching`,`repeated failed action`,`transfer to new puzzles`],aliases:[`logic`,`reasoning`,`problem solving`,`puzzles`,`patterns`]},{id:`strategy`,title:`Learning strategy and metacognition`,realm:`Strategy Observatory`,status:`active`,summary:`Helping learners plan, monitor understanding, choose strategies, and know when they need support.`,helpsWith:[`goal setting`,`confidence calibration`,`error analysis`,`help seeking`,`strategy choice`],assessmentSignals:[`goal specificity`,`confidence prediction`,`reflection accuracy`,`hint timing`],aliases:[`strategy`,`metacognition`,`learning strategy`,`study skills`,`planning`,`reflection`,`loop reflection`]},{id:`confidence`,title:`Confidence and emotional learning state`,realm:`Inner Compass`,status:`active`,summary:`Reducing shame, noticing pressure, recovering after mistakes, and building a healthier learner identity.`,helpsWith:[`math anxiety`,`reading shame`,`frustration recovery`,`persistence`,`motivation`],assessmentSignals:[`self-reported feeling`,`quit point`,`recovery after error`,`pressure sensitivity`],aliases:[`confidence`,`anxiety`,`shame`,`motivation`,`emotions`,`frustration`]},{id:`speed-accuracy`,title:`Learning speed with accuracy`,realm:`Tempo Arena`,status:`planned`,summary:`Getting faster only after understanding is stable, so speed does not destroy comprehension.`,helpsWith:[`fluency`,`pacing`,`endurance`,`speed accuracy balance`],assessmentSignals:[`time trend`,`accuracy drop under speed`,`pacing choices`],aliases:[`speed`,`fluency`,`faster learning`,`pace`,`accuracy`]},{id:`transfer`,title:`Transfer to real life`,realm:`Worldgate`,status:`planned`,summary:`Checking whether skills used in the app help with real reading, work, studying, money, and daily memory.`,helpsWith:[`work learning`,`real-world reading`,`daily memory`,`self-teaching`,`test preparation`],assessmentSignals:[`outside-app check-ins`,`capstone tasks`,`new-context performance`],aliases:[`transfer`,`real life`,`work`,`daily life`,`self teaching`,`test prep`]}];function u(){let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=e.map(e=>`${e.title}: ${e.summary}`).join(` `),r=t.map(e=>e.title).join(`, `);return`Mind Realms is being designed to help with ${e.map(e=>e.title).join(`, `)}. ${n} Planned expansion areas include ${r}. If a new topic is already in the map, the app will ask whether you meant to research it more deeply or whether it was added by mistake.`}function d(e){let t=f(e);if(t)return l.find(e=>[e.id,e.title,e.realm,...e.aliases].some(e=>{let n=f(e);return t===n||t.includes(n)||n.includes(t)}))}function f(e){return e.toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9 ]+/g,` `).replace(/\s+/g,` `).trim()}var ee=`/mind-realms-live/assets/mind-realms-female-wired-baseline-TR7j4D8j.png`,te=`/mind-realms-live/assets/mind-realms-male-wired-baseline-DgC9Oehp.png`,ne=`modulepreload`,re=function(e){return`/mind-realms-live/`+e},p={},ie=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=re(t,n),t=s(t),t in p)return;p[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ne,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ae=document.querySelector(`#app`);if(!ae)throw Error(`App root was not found.`);var m=ae,h=[`intro`,`ori`,`subjects`,`goals`,`realms`,`memory`,`focus`,`language`,`logic`,`reflection`,`report`,`quest`,`path`],g=[`Remember what I learn`,`Read and understand faster`,`Get stronger at math`,`Focus without drifting`,`Learn faster for work`,`Prepare for a test`,`Become a super learner`],_=[`Build confidence`,`Stop forgetting instructions`,`Improve problem solving`,`Think clearly under pressure`,`Read books and retain them`,`Learn like I never learned in school`],v=[[`Sun`,`Key`,`Wave`],[`Gate`,`Sun`,`Crown`,`Key`],[`Leaf`,`Wave`,`Gate`,`Crown`,`Sun`]],oe=[`Sun`,`Key`,`Wave`,`Gate`,`Crown`,`Leaf`],y=[{label:`Gold Star`,target:!0},{label:`Silver Moon`,target:!1},{label:`Gold Star`,target:!0},{label:`Blue Gate`,target:!1},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Moon`,target:!0},{label:`Moon`,target:!0},{label:`Sun`,target:!1},{label:`Sun`,target:!0,afterSwitch:!0},{label:`Moon`,target:!1,afterSwitch:!0},{label:`Sun`,target:!0,afterSwitch:!0}],b=[{id:`literal`,prompt:`Which object did Mara carry through the rain?`,options:[`A silver seed`,`A broken lantern`,`A sleeping bird`],answer:`A silver seed`},{id:`sequence`,prompt:`What had to happen before Mara opened her hand?`,options:[`The thunder had to stop`,`The map had to burn`,`The seed had to glow`],answer:`The thunder had to stop`},{id:`inference`,prompt:`Why did Mara wait?`,options:[`The map warned the seed would wake only when the sky became quiet`,`She forgot what she was carrying`,`She wanted the rain to wash the map away`],answer:`The map warned the seed would wake only when the sky became quiet`},{id:`main`,prompt:`What is this moment mostly about?`,options:[`Following a warning carefully`,`Escaping a dangerous animal`,`Learning how to draw a map`],answer:`Following a warning carefully`}],x=[{id:`make10`,prompt:`Choose the pair of stones that makes 10.`,options:[`4 and 6`,`2 and 9`,`7 and 4`,`5 and 6`],answer:`4 and 6`},{id:`pattern`,prompt:`Complete the symbol pattern: 3, 6, 12, 24, ?`,options:[`30`,`36`,`48`,`72`],answer:`48`},{id:`fraction`,prompt:`Which piece matches one half?`,options:[`Two of four equal parts`,`One of three equal parts`,`Three of four equal parts`,`One of six equal parts`],answer:`Two of four equal parts`},{id:`balance`,prompt:`The gate shows: Box + 3 = 8. What is hidden in the box?`,options:[`3`,`4`,`5`,`8`],answer:`5`}],se=()=>({screen:`intro`,reducedMotion:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,bodyForm:`male`,audioStatus:`Audio summary ready.`,topicDraft:``,researchQueue:[],primaryGoal:``,secondaryGoal:``,freeGoal:``,events:[],memory:{phase:`intro`,round:0,input:[],correctPositions:0,totalPositions:0,errorPositions:[],delayErrors:0,distractionErrors:0,feedback:``},focus:{phase:`intro`,index:0,presentedAt:0,missedTargets:0,decoyTaps:0,correct:0,total:0,switchErrors:0,responseTimes:[],reflection:``},language:{index:0,answers:[],startedAt:0,reread:!1,audio:!1},logic:{index:0,answers:[]},reflection:{feeling:``,strongest:``},firstQuestComplete:!1}),S=se(),C=null,w=(e,t)=>{S.events.push({type:e,screen:S.screen,timestamp:Date.now(),payload:t})},T=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e),E=()=>{let e=h.indexOf(S.screen);e<h.length-1&&(S.screen=h[e+1],w(`screen_viewed`,{screen:S.screen}),$())},D=e=>{S.screen=e,w(`screen_viewed`,{screen:e}),$()},O=()=>{A(!1),S=se(),w(`prototype_reset`),$()};function k(){if(!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){S.audioStatus=`This browser cannot play voice audio yet. Open in Chrome or a mobile browser to hear it spoken.`,w(`subject_audio_unavailable`),$();return}window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(u());e.rate=.94,e.pitch=.92,e.onend=()=>{S.audioStatus=`Audio summary finished.`,w(`subject_audio_finished`),$()},e.onerror=()=>{S.audioStatus=`Audio did not play in this browser. Open in Chrome or a mobile browser to hear it spoken.`,w(`subject_audio_error`),$()},S.audioStatus=`Playing subject summary...`,w(`subject_audio_started`,{subjectCount:l.length}),$(),window.speechSynthesis.speak(e)}function A(e=!0){`speechSynthesis`in window&&window.speechSynthesis.cancel(),S.audioStatus=`Audio summary stopped.`,w(`subject_audio_stopped`),e&&$()}function j(e){let t=S.topicDraft.trim();if(!t){S.topicNotice={kind:`empty`,message:`Type a topic first, then I can check whether it is already in the learning map.`},$();return}let n=d(t);if(n&&!e){S.topicNotice={kind:`duplicate`,subjectTitle:n.title,message:`Hey, you added this already: ${n.title}. Are you purposely trying to research more to get a more in-depth feel, or did you kind of make a mistake?`},w(`duplicate_topic_detected`,{query:t,subject:n.id}),$();return}let r=n?`Deep research: ${n.title}`:`New topic research: ${t}`;S.researchQueue.includes(r)||S.researchQueue.push(r),S.topicNotice={kind:`queued`,subjectTitle:n?.title,message:n?`${n.title} is already in the map, so I added a deeper research pass to the queue.`:`${t} is not in the current map yet, so I added it to the future research queue.`},w(`topic_research_queued`,{query:t,existingSubject:n?.id}),$()}var M=e=>{let t=h.indexOf(S.screen),n=h.map((e,n)=>`<span class="step-dot ${n<=t?`active`:``}"></span>`).join(``);return`
    <div class="app ${S.reducedMotion?`reduced-motion`:``}">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <strong>Mind Realms</strong>
            <span>First-session prototype</span>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="ghost-button" data-action="motion">${S.reducedMotion?`Motion off`:`Motion on`}</button>
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
  `},ce=()=>{let e=S.bodyForm===`female`?`Female`:`Male`;return M(`
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
          <span>${`${e} baseline image with 3D brain`}</span>
          <div class="body-form-toggle" aria-label="Body form">
            <button class="small-button ${S.bodyForm===`female`?`selected`:``}" data-body-form="female">Female</button>
            <button class="small-button ${S.bodyForm===`male`?`selected`:``}" data-body-form="male">Male</button>
          </div>
        </div>
      </div>
    </section>
  `)},le=()=>M(`
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
`),N=()=>{let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=u(),r=e.map(e=>`
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
      `).join(``),a=S.topicNotice?`
      <div class="topic-alert ${S.topicNotice.kind}">
        ${S.topicNotice.kind===`duplicate`?`<strong class="flash-word">Already added</strong>`:``}
        <p>${S.topicNotice.message}</p>
        ${S.topicNotice.kind===`duplicate`?`<div class="actions">
                <button class="secondary-button" data-action="topic-deep">Research deeper anyway</button>
                <button class="small-button" data-action="topic-clear">Clear</button>
              </div>`:``}
      </div>
    `:``,o=S.researchQueue.length?`
      <div class="footer-note">
        Research queue: ${S.researchQueue.map(T).join(`, `)}
      </div>
    `:``;return M(`
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
            <p class="footer-note">${S.audioStatus}</p>
            <p class="audio-transcript">${T(n)}</p>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Add or research a topic</h3>
            <input class="text-input" id="topicDraft" value="${T(S.topicDraft)}" placeholder="Try: focus, sleep, writing, motivation..." />
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
  `)},ue=()=>M(`
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
            <div class="choice-grid">${g.map(e=>`<button class="choice-button ${S.primaryGoal===e?`selected`:``}" data-goal="${T(e)}">${T(e)}</button>`).join(``)}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Secondary signal</h3>
            <div class="choice-grid">${_.map(e=>`<button class="choice-button ${S.secondaryGoal===e?`selected`:``}" data-secondary="${T(e)}">${T(e)}</button>`).join(``)}</div>
            <textarea class="text-field" id="freeGoal" placeholder="Tell Ori what you want to become.">${T(S.freeGoal)}</textarea>
            <div class="actions">
              <button class="primary-button" data-action="next">${S.primaryGoal?`Open the realms`:`Choose a goal first`}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),de=()=>M(`
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
  `),P=()=>{let e=v[S.memory.round]??[],t=oe.map(e=>`<button class="rune-button" data-rune="${e}">${e}</button>`).join(``),n=`Round ${Math.min(S.memory.round+1,v.length)} of ${v.length}`,r=``;return r=S.memory.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Memory Vault</h3>
          <p class="lede">Watch the magic symbol sequence, then rebuild it after the vault closes.</p>
          <button class="primary-button" data-action="memory-start">Begin memory trial</button>
        </div>
      </div>
    `:S.memory.phase===`show`?`
      <div class="trial-surface">
        <div class="rune-sequence">
          ${e.map(e=>`<div class="rune glow">${e}</div>`).join(``)}
        </div>
      </div>
    `:S.memory.phase===`answer`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">Rebuild the sequence. Current answer: ${S.memory.input.join(` -> `)||`none yet`}</p>
          <div class="answer-row">${t}</div>
        </div>
      </div>
    `:S.memory.phase===`feedback`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${S.memory.feedback}</p>
          <button class="primary-button" data-action="memory-next-round">Continue</button>
        </div>
      </div>
    `:`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${W()}</p>
          <button class="primary-button" data-action="next">Enter Focus Tower</button>
        </div>
      </div>
    `,M(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">${n}</div>
        <h2>Memory Vault</h2>
        <p class="lede">Ori is looking for recall, sequence memory, delay effect, and distraction recovery.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${r}</div></div>
    </section>
  `)},fe=()=>{let e=y[S.focus.index],t=``;return t=S.focus.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Focus Tower Pulse</h3>
          <p class="lede">Hold the rule, ignore decoys, and switch when the tower changes. Accuracy matters more than speed.</p>
          <button class="primary-button" data-action="focus-start">Begin focus pulse</button>
        </div>
      </div>
    `:S.focus.phase===`run`&&e?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${S.focus.index<5?`Tap Gold Star. Let other signs pass.`:S.focus.index<8?`Tap Gold Star. Ignore Cracked Star.`:S.focus.index<11?`Tap Moon.`:`The tower chimed. Now tap Sun.`}</p>
          <div class="focus-token ${e.decoy?`decoy`:``}">${e.label}</div>
          <div class="actions">
            <button class="primary-button" data-focus-action="tap">Tap</button>
            <button class="secondary-button" data-focus-action="pass">Let pass</button>
          </div>
        </div>
      </div>
    `:S.focus.phase===`reflect`?`
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
          <p class="feedback">${G()}</p>
          <button class="primary-button" data-action="next">Enter Language Grove</button>
        </div>
      </div>
    `,M(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Trial 2 of 4</div>
        <h2>Focus Tower</h2>
        <p class="lede">This short pulse helps Ori avoid mistaking attention drift or rushing for weak memory, reading, or math.</p>
      </div>
      <div class="panel"><div class="panel-inner trial-stage">${t}</div></div>
    </section>
  `)},F=()=>{let e=b[S.language.index],t=S.language.answers.length;return M(e?`
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
            <button class="small-button" data-action="audio">${S.language.audio?`Audio noted`:`Use audio support`}</button>
          </div>
          <div class="question">
            <h3>${e.prompt}</h3>
            <div class="choice-grid">
              ${e.options.map(e=>`<button class="choice-button" data-language="${T(e)}">${T(e)}</button>`).join(``)}
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
          <p class="lede">${K()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Enter Logic Forge</button>
        </div>
      </section>
    `)},I=()=>{let e=x[S.logic.index];return M(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Puzzle ${S.logic.index+1} of ${x.length}</div>
        <h2>Logic Forge</h2>
        <p class="lede">Power the bridge with number symbols, patterns, visual fractions, and balance reasoning.</p>
      </div>
      <div class="panel">
        <div class="panel-inner trial-stage">
          <div class="trial-surface">
            <div class="panel-inner">
              <h3>${e.prompt}</h3>
              <div class="logic-grid">
                ${e.options.map(e=>`<button class="choice-button" data-logic="${T(e)}">${T(e)}</button>`).join(``)}
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
          <p class="lede">${q()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Open the mirror</button>
        </div>
      </section>
    `)},pe=()=>M(`
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
              ${[`Easier than expected`,`About right`,`Hard but possible`,`Frustrating`,`I felt nervous`].map(e=>`<button class="choice-button ${S.reflection.feeling===e?`selected`:``}" data-feeling="${e}">${e}</button>`).join(``)}
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Where were you strongest?</h3>
            <div class="choice-grid">
              ${[`Memory`,`Focus`,`Reading`,`Math`,`Not sure`].map(e=>`<button class="choice-button ${S.reflection.strongest===e?`selected`:``}" data-strongest="${e}">${e}</button>`).join(``)}
            </div>
            <div class="actions">
              <button class="primary-button" data-action="next">Reveal first signals</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),me=()=>{let t=ve(),n=e(J()),r=n.domains.map(e=>`
        <article class="profile-card">
          <div class="subject-card-top">
            <span class="subject-status">${T(e.level)}</span>
            <span>${e.scoreLabel}</span>
          </div>
          <h3>${e.key}</h3>
          <div class="profile-bar" aria-hidden="true">
            <span style="width: ${Math.round(e.score*100)}%"></span>
          </div>
          <p>${T(e.evidence)}</p>
          <p><strong>Next:</strong> ${T(e.nextStep)}</p>
        </article>
      `).join(``),i=n.timeline.map(e=>`
        <article class="timeline-step">
          <strong>${T(e.window)}</strong>
          <h3>${T(e.title)}</h3>
          <p>${T(e.focus)}</p>
        </article>
      `).join(``);return M(`
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
          <p class="lede">${T(n.weeklyRhythm)}.</p>
          <p class="footer-note">${T(n.confidenceNote)}</p>
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
            <p>Your first path is <strong>${X()}</strong>.</p>
            <p>Return tomorrow for a short retention quest. I need to see what stayed, not just what worked once.</p>
            <div class="actions">
              <button class="primary-button" data-action="next">Play the free first quest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `)},he=()=>{let e=S.firstQuestComplete?`First quest complete. You improved the path by practicing one strategy immediately.`:`Ori chooses one guided quest from your strongest growth signal. This prototype simulates that first personalized lesson.`;return M(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Free proof quest</div>
        <h2>${Z()}</h2>
        <p class="lede">${e}</p>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>${Z()}</h3>
          <p class="lede">${Q()}</p>
          <div class="actions">
            <button class="primary-button" data-action="complete-quest">${S.firstQuestComplete?`Quest complete`:`Complete guided quest`}</button>
            <button class="secondary-button" data-action="next">Preview my path</button>
          </div>
        </div>
      </div>
    </section>
  `)},ge=()=>M(`
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
`);function L(){m.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`next`&&E(),t===`reset`&&O(),t===`motion`&&(S.reducedMotion=!S.reducedMotion,w(`reduced_motion_toggled`,{enabled:S.reducedMotion}),$()),t===`go-report`&&D(`report`),t===`memory-start`&&_e(),t===`memory-next-round`&&(S.memory.round+=1,_e()),t===`focus-start`&&B(),t===`reread`&&(S.language.reread=!0,w(`language_reread_marked`),$()),t===`audio`&&(S.language.audio=!0,w(`audio_support_selected`),$()),t===`speak-subject-summary`&&k(),t===`stop-subject-summary`&&A(),t===`topic-check`&&j(!1),t===`topic-deep`&&j(!0),t===`topic-clear`&&(S.topicNotice=void 0,S.topicDraft=``,$()),t===`complete-quest`&&(S.firstQuestComplete=!0,w(`first_quest_completed`,{path:X()}),$()),t===`interest`){w(`pricing_interest_clicked`,{price:`$14.99/month`});let e=document.querySelector(`#interestNote`);e&&(e.textContent=`Interest captured for the prototype. Payment is not active yet.`)}})})}function R(){m.querySelectorAll(`[data-goal]`).forEach(e=>{e.addEventListener(`click`,()=>{S.primaryGoal=e.dataset.goal??``,w(`goal_selected`,{primaryGoal:S.primaryGoal}),$()})}),m.querySelectorAll(`[data-secondary]`).forEach(e=>{e.addEventListener(`click`,()=>{S.secondaryGoal=e.dataset.secondary??``,w(`secondary_goal_selected`,{secondaryGoal:S.secondaryGoal}),$()})});let e=m.querySelector(`#freeGoal`);e?.addEventListener(`input`,()=>{S.freeGoal=e.value});let t=m.querySelector(`#topicDraft`);t?.addEventListener(`input`,()=>{S.topicDraft=t.value}),m.querySelectorAll(`[data-body-form]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bodyForm;t!==`male`&&t!==`female`||(S.bodyForm=t,w(`body_form_selected`,{bodyForm:t}),$())})});let n=Array.from(m.querySelectorAll(`[data-brain-region]`)),r=()=>{n.forEach(e=>e.classList.remove(`is-active`))};n.forEach(e=>{let t=()=>{r(),e.classList.add(`is-active`)};e.addEventListener(`pointerenter`,t),e.addEventListener(`focus`,t),e.addEventListener(`click`,e=>{e.preventDefault(),t()}),e.addEventListener(`pointerleave`,()=>{e.classList.remove(`is-active`)}),e.addEventListener(`blur`,()=>{e.classList.remove(`is-active`)})}),m.querySelectorAll(`[data-rune]`).forEach(e=>{e.addEventListener(`click`,()=>z(e.dataset.rune??``))}),m.querySelectorAll(`[data-focus-action]`).forEach(e=>{e.addEventListener(`click`,()=>V(e.dataset.focusAction===`tap`))}),m.querySelectorAll(`[data-focus-reflect]`).forEach(e=>{e.addEventListener(`click`,()=>{S.focus.reflection=e.dataset.focusReflect??``,S.focus.phase=`done`,w(`focus_pulse_completed`,{missedTargets:S.focus.missedTargets,decoyTaps:S.focus.decoyTaps,switchErrors:S.focus.switchErrors,reflection:S.focus.reflection}),$()})}),m.querySelectorAll(`[data-language]`).forEach(e=>{e.addEventListener(`click`,()=>H(e.dataset.language??``))}),m.querySelectorAll(`[data-logic]`).forEach(e=>{e.addEventListener(`click`,()=>U(e.dataset.logic??``))}),m.querySelectorAll(`[data-feeling]`).forEach(e=>{e.addEventListener(`click`,()=>{S.reflection.feeling=e.dataset.feeling??``,w(`reflection_feeling_selected`,{feeling:S.reflection.feeling}),$()})}),m.querySelectorAll(`[data-strongest]`).forEach(e=>{e.addEventListener(`click`,()=>{S.reflection.strongest=e.dataset.strongest??``,w(`reflection_strength_selected`,{strongest:S.reflection.strongest}),$()})})}function _e(){S.memory.phase=`show`,S.memory.input=[],S.memory.feedback=``,w(`trial_started`,{trial:`memory`,round:S.memory.round+1}),$(),window.setTimeout(()=>{S.screen===`memory`&&S.memory.phase===`show`&&(S.memory.phase=`answer`,$())},S.reducedMotion?500:1600)}function z(e){if(S.memory.phase!==`answer`)return;let t=v[S.memory.round]??[];if(S.memory.input.push(e),S.memory.input.length>=t.length){let e=0;t.forEach((t,n)=>{S.memory.input[n]===t?e+=1:S.memory.errorPositions.push(n+1)});let n=t.length-e;S.memory.correctPositions+=e,S.memory.totalPositions+=t.length,S.memory.round===1&&(S.memory.distractionErrors+=n),S.memory.round===2&&(S.memory.delayErrors+=n),w(`memory_sequence_completed`,{round:S.memory.round+1,correct:e,total:t.length}),S.memory.round>=v.length-1?S.memory.phase=`done`:(S.memory.phase=`feedback`,S.memory.feedback=n===0?`The sequence held cleanly. Ori will increase the load gently.`:`Part of the symbol chain faded. Ori is watching where the slip happened.`)}$()}function B(){S.focus.phase=`run`,S.focus.index=0,S.focus.presentedAt=Date.now(),w(`trial_started`,{trial:`focus`}),$()}function V(e){if(S.focus.phase!==`run`)return;let t=y[S.focus.index];if(!t)return;let n=t.target===e;S.focus.total+=1,n&&(S.focus.correct+=1),t.target&&!e&&(S.focus.missedTargets+=1),!t.target&&e&&(S.focus.decoyTaps+=1),t.afterSwitch&&!n&&(S.focus.switchErrors+=1),e&&S.focus.responseTimes.push(Date.now()-S.focus.presentedAt),S.focus.index+=1,S.focus.index>=y.length?S.focus.phase=`reflect`:S.focus.presentedAt=Date.now(),$()}function H(e){let t=b[S.language.index];if(!t)return;let n=e===t.answer;S.language.answers.push({id:t.id,correct:n}),S.language.index+=1,w(`language_choice_made`,{id:t.id,correct:n}),$()}function U(e){let t=x[S.logic.index];if(!t)return;let n=e===t.answer;S.logic.answers.push({id:t.id,correct:n}),S.logic.index+=1,w(`logic_puzzle_completed`,{id:t.id,correct:n}),$()}function W(){return(S.memory.totalPositions?S.memory.correctPositions/S.memory.totalPositions:0)>=.86?`Memory signal: your symbol recall held across load and delay.`:S.memory.distractionErrors>S.memory.delayErrors?`Memory signal: recall shifted most when the vault distracted you.`:S.memory.delayErrors>0?`Memory signal: first recall appeared stronger than delayed recall.`:`Memory signal: Ori needs more evidence, but sequence load should be trained gently.`}function G(){return S.focus.switchErrors>=2?`Focus signal: attention held early, but the rule switch pulled you back to the old pattern.`:S.focus.decoyTaps>=2?`Focus signal: action speed is strong. The next step is protecting accuracy before tapping.`:S.focus.missedTargets>=2?`Focus signal: some targets slipped during the pulse. Signal detection and re-centering should be trained.`:`Focus signal: your attention held through the pulse. Ori will check endurance over longer sessions later.`}function K(){let e=S.language.answers.some(e=>e.id===`inference`&&!e.correct),t=S.language.answers.filter(e=>e.correct).length;return e?`Reading signal: direct details were clearer than hidden meaning. Inference should be trained next.`:t>=4?`Reading signal: direct detail, sequence, inference, and main idea all held in this short passage.`:`Reading signal: Ori needs more evidence across vocabulary, inference, and retention.`}function q(){let e=S.logic.answers.filter(e=>!e.correct);return e.some(e=>e.id===`fraction`)?`Logic signal: patterns and balance may be ahead of visual fraction intuition.`:e.some(e=>e.id===`balance`)?`Logic signal: number patterns are waking up. Balance reasoning needs support.`:e.length===0?`Logic signal: pattern and balance reasoning were strong in this first forge run.`:`Logic signal: Ori will separate concept gaps from speed, reading load, and working memory.`}function J(){let e=S.language.answers.filter(e=>e.correct).length,t=S.logic.answers.filter(e=>e.correct).length;return{goal:S.primaryGoal,secondaryGoal:S.secondaryGoal,freeGoal:S.freeGoal,reflectionFeeling:S.reflection.feeling,reflectionStrongest:S.reflection.strongest,memory:{correctPositions:S.memory.correctPositions,totalPositions:S.memory.totalPositions,delayErrors:S.memory.delayErrors,distractionErrors:S.memory.distractionErrors,errorPositions:S.memory.errorPositions},focus:{correct:S.focus.correct,total:S.focus.total,missedTargets:S.focus.missedTargets,decoyTaps:S.focus.decoyTaps,switchErrors:S.focus.switchErrors,responseTimes:S.focus.responseTimes},reading:{correct:e,total:S.language.answers.length,missedInference:S.language.answers.some(e=>e.id===`inference`&&!e.correct),reread:S.language.reread,audio:S.language.audio},math:{correct:t,total:S.logic.answers.length,missedFraction:S.logic.answers.some(e=>e.id===`fraction`&&!e.correct),missedBalance:S.logic.answers.some(e=>e.id===`balance`&&!e.correct)}}}function ve(){return[{label:`Goal`,value:S.primaryGoal||`Become a super learner`},{label:`Memory`,value:W().replace(`Memory signal: `,``)},{label:`Focus`,value:G().replace(`Focus signal: `,``)},{label:`Reading`,value:K().replace(`Reading signal: `,``)},{label:`Logic`,value:q().replace(`Logic signal: `,``)},{label:`Strategy`,value:ye()},{label:`First path`,value:X()},{label:`Daily time`,value:`12-15 minutes to start`}]}function ye(){if(!S.reflection.strongest)return`Needs one reflection check.`;let e=Y(),t=Math.max(...Object.values(e)),n=e[S.reflection.strongest];if(n!==void 0&&t-n<=.05)return`Your self-read matched your strongest signal today.`;let r=be();return`You felt strongest in ${S.reflection.strongest}, while Ori saw the strongest signal in ${r}.`}function be(){let e=Y();return[[`Memory`,e.Memory],[`Focus`,e.Focus],[`Reading`,e.Reading],[`Math`,e.Math]].reduce((e,t)=>t[1]>e[1]?t:e)[0]}function Y(){return{Memory:S.memory.totalPositions?S.memory.correctPositions/S.memory.totalPositions:0,Focus:S.focus.total?S.focus.correct/S.focus.total:0,Reading:S.language.answers.length?S.language.answers.filter(e=>e.correct).length/S.language.answers.length:0,Math:S.logic.answers.length?S.logic.answers.filter(e=>e.correct).length/S.logic.answers.length:0}}function X(){return S.focus.switchErrors>=2||S.focus.decoyTaps>=2?`Focus Recovery + Memory Anchors + Inference Clues`:S.memory.delayErrors>0||S.memory.distractionErrors>0?`Memory Anchors + Focus Pulse + Logic Patterns`:S.language.answers.some(e=>e.id===`inference`&&!e.correct)?`Inference Clues + Delayed Recall + Logic Patterns`:S.logic.answers.some(e=>!e.correct)?`Logic Forge Basics + Pace Control + Reading Clues`:`Advanced Recall + Flexible Focus + Transfer Quests`}function Z(){let e=X();return e.startsWith(`Focus`)?`Steady Signal Quest`:e.startsWith(`Memory`)?`Memory Anchor Quest`:e.startsWith(`Inference`)?`Hidden Clue Quest`:e.startsWith(`Logic`)?`Balance Gate Quest`:`Transfer Trial Quest`}function Q(){let e=X();return e.startsWith(`Focus`)?`You practice one breath before action, then repeat a shorter signal round where accuracy comes before speed.`:e.startsWith(`Memory`)?`You group symbols into anchors, replay them as a tiny story, then retrieve them after a short delay.`:e.startsWith(`Inference`)?`You compare what the scroll says directly with what it implies, then choose a path from the hidden clue.`:e.startsWith(`Logic`)?`You use a visual balance gate before seeing the number sentence, so the concept lands before notation.`:`You combine recall, focus, reading, and logic in one small mixed challenge.`}async function xe(){let e=document.querySelector(`#brainScene`);if(e){C?.(),C=null;try{let t=await ie(()=>import(`./three.module-kyxZOpvy.js`),[]);if(!document.body.contains(e))return;let n=new t.WebGLRenderer({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);let r=new t.Scene,i=new t.PerspectiveCamera(38,1,.1,100);i.position.set(0,-.42,7.6);let a=new t.Group;a.position.set(0,.34,0),a.scale.setScalar(.92),r.add(a);let o=new t.Group,s=new t.Group;a.add(o),a.add(s);let c=new t.MeshStandardMaterial({color:8051682,emissive:1192763,roughness:.24,metalness:.02,transparent:!0,opacity:.075,depthWrite:!1}),l=new t.MeshStandardMaterial({color:15190667,emissive:3089424,roughness:.46,metalness:.04,transparent:!0,opacity:.095,depthWrite:!1}),u=new t.MeshStandardMaterial({color:16767352,emissive:16758861,roughness:.24,metalness:.18,transparent:!0,opacity:.84}),d=new t.MeshBasicMaterial({color:16314847,transparent:!0,opacity:.9,depthWrite:!1}),f=new t.MeshBasicMaterial({color:10482909,transparent:!0,opacity:.74,depthWrite:!1}),ne=new t.MeshBasicMaterial({color:460041,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),re=new t.MeshBasicMaterial({color:16773311,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1}),p=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.26,depthWrite:!1}),ae=new t.MeshBasicMaterial({color:6936750,wireframe:!0,transparent:!0,opacity:.065,depthWrite:!1}),m=S.bodyForm===`female`,h=m?ee:te;o.visible=!0,s.visible=!1;let g=m?.82:1.14,_=m?.76:.6,v=m?[.86,.75,.52]:[1.18,.82,.6],oe=m?[.46,.78,.43]:[.64,.84,.5],y=[],b=await new t.TextureLoader().loadAsync(h);if(!document.body.contains(e))return;b.colorSpace=t.SRGBColorSpace,b.anisotropy=n.capabilities.getMaxAnisotropy();let x=new t.MeshBasicMaterial({map:b,transparent:!0,opacity:.98,depthWrite:!1}),se=new t.Mesh(new t.PlaneGeometry(3.16,4.74),x);se.position.set(0,-.18,-.28),o.add(se);let w=e=>(y.push(e),s.add(e),e),T=(e,n,r)=>{let i=new t.Vector3(...e),a=new t.Vector3(...n),o=a.clone().sub(i),s=o.length(),c=new t.Mesh(new t.CapsuleGeometry(r,Math.max(.04,s-r*2),10,20),l);return c.position.copy(i.add(a).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new t.Vector3(0,1,0),o.normalize()),w(c)},E=(e,n,r=.012,i=s,a=42)=>{let o=new t.CatmullRomCurve3(e.map(e=>new t.Vector3(...e))),c=new t.Mesh(new t.TubeGeometry(o,a,r,8,!1),n);return i.add(c),c},D=(e,n,r,i=d,a=.5,o=.01)=>{let c=new t.Mesh(new t.TorusGeometry(a,o,10,96),i);return c.position.set(...e),c.scale.set(...n),c.rotation.set(...r),s.add(c),c},O=(e,t,n=.012,r=52)=>{E(e,t,n,s,r),E(e.map(e=>[-e[0],e[1],e[2]]).reverse(),t,n,s,r)},k=(e,t,n,r,i=.008,a=0,o=Math.PI*2,c=72)=>{let l=[];for(let r=0;r<=c;r+=1){let i=a+(o-a)*r/c;l.push([e[0]+Math.cos(i)*t,e[1]+Math.sin(i)*n,e[2]])}return E(l,r,i,s,c)},A=new t.Mesh(new t.SphereGeometry(.78,42,28),c);A.position.set(0,-.26,-.18),A.scale.set(...v),w(A);let j=new t.Mesh(new t.CapsuleGeometry(.42,.74,18,26),c);j.position.set(0,-.9,-.18),j.scale.set(...oe),w(j);let M=new t.Mesh(new t.SphereGeometry(.5,36,24),c);M.position.set(0,-1.42,-.14),M.scale.set(_*1.42,.44,.46),w(M);let ce=new t.Mesh(new t.CapsuleGeometry(.18,.36,14,18),c);ce.position.set(0,.52,-.08),ce.scale.set(1,1,.65),w(ce);let le=new t.Mesh(new t.SphereGeometry(.62,52,34),c);le.position.set(0,1.25,.02),le.scale.set(1.08,1.14,.9),w(le),T([-g,.22,-.08],[-1.42,.22,0],m?.065:.085),T([-1.42,.22,0],[-2.03,.2,.12],m?.058:.07),T([g,.22,-.08],[1.42,.22,0],m?.065:.085),T([1.42,.22,0],[2.03,.2,.12],m?.058:.07),T([-_*.45,-1.58,-.12],[-.33,-2.42,-.04],m?.085:.105),T([-.33,-2.42,-.04],[-.28,-3.14,.03],m?.064:.078),T([_*.45,-1.58,-.12],[.33,-2.42,-.04],m?.085:.105),T([.33,-2.42,-.04],[.28,-3.14,.03],m?.064:.078);let N=new t.Mesh(new t.SphereGeometry(.18,28,20),l);N.position.set(-2.16,.19,.15),N.scale.set(m?1.25:1.38,.34,.44),w(N);let ue=N.clone();ue.position.x=2.16,w(ue);let de=e=>{[-.055,-.018,.018,.055].forEach((t,n)=>{let r=T([e*2.2,.19+t,.2],[e*(2.42+n*.018),.19+t*.82,.22],m?.012:.014);r.material=f});let t=T([e*2.07,.11,.2],[e*2.27,.04,.25],m?.014:.016);t.material=f};de(-1),de(1);let P=new t.Mesh(new t.SphereGeometry(.16,24,18),l);P.position.set(-.29,-3.22,.2),P.scale.set(1.22,.34,.62),w(P);let fe=P.clone();if(fe.position.x=.29,w(fe),m){let e=new t.Mesh(new t.SphereGeometry(.65,38,24),l);e.position.set(0,1.22,-.12),e.scale.set(.92,1,.62),w(e)}D([0,1.26,.56],[1.08,1.14,.08],[0,0,0],d,.56,.012),D([-.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],f,.5,.006),D([.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],f,.5,.006),E([[-.35,.92,.6],[-.18,.78,.63],[0,.75,.65],[.18,.78,.63],[.35,.92,.6]],d,.01),E([[.02,1.45,.64],[.12,1.32,.71],[.05,1.19,.66]],f,.008),E([[-2.12,.22,.25],[-1.48,.26,.18],[-g,.25,.1],[-.42,.24,.02],[0,.18,.04],[.42,.24,.02],[g,.25,.1],[1.48,.26,.18],[2.12,.22,.25]],d,.016),E([[-g*.58,.18,.42],[-v[0]*.48,-.38,.46],[-_*.55,-1.17,.42],[-_*.74,-1.44,.34]],d,.014),E([[g*.58,.18,.42],[v[0]*.48,-.38,.46],[_*.55,-1.17,.42],[_*.74,-1.44,.34]],d,.014),E([[-.36,.02,.5],[-.18,-.04,.54],[0,-.06,.55],[.18,-.04,.54],[.36,.02,.5]],f,.008),E([[0,.06,.55],[0,-.35,.57],[0,-.82,.54],[0,-1.16,.48]],f,.008),[-.18,0,.18].forEach(e=>{E([[-.28,-.48+e,.56],[-.1,-.52+e,.59],[.1,-.52+e,.59],[.28,-.48+e,.56]],f,.006)}),E([[-.34,-1.48,.4],[-.45,-2.14,.35],[-.35,-2.86,.3],[-.31,-3.22,.32]],d,.012),E([[.34,-1.48,.4],[.45,-2.14,.35],[.35,-2.86,.3],[.31,-3.22,.32]],d,.012),D([-2.11,.2,.28],[.42,.16,.08],[0,0,0],d,.32,.008),D([2.11,.2,.28],[.42,.16,.08],[0,0,0],d,.32,.008),D([-.31,-3.23,.34],[.48,.16,.08],[0,0,-.05],d,.32,.008),D([.31,-3.23,.34],[.48,.16,.08],[0,0,.05],d,.32,.008);let F=.72,I=.755,pe=m?.92:1.08,me=m?.62:.76,he=m?.38:.58,ge=m?.78:.62;k([0,1.3,F],.47,.6,d,.012,0,Math.PI*2,96),E([[-.28,1.43,I],[-.31,1.22,I],[-.22,1.05,I],[0,.97,I],[.22,1.05,I],[.31,1.22,I],[.28,1.43,I]],f,.007,s,46),k([-.49,1.28,F-.02],.06,.14,d,.006,0,Math.PI*2,36),k([.49,1.28,F-.02],.06,.14,d,.006,0,Math.PI*2,36),E([[0,1.48,I],[.06,1.35,.775],[.01,1.21,I]],f,.006),E([[-.17,1.14,I],[0,1.09,I],[.17,1.14,I]],f,.005),m?O([[-.34,1.83,F-.03],[-.53,1.55,F],[-.55,1.13,F],[-.36,.86,F]],f,.009,48):E([[-.32,1.65,I],[-.12,1.73,I],[.12,1.73,I],[.32,1.65,I]],f,.008),O([[-.18,.86,F],[-.23,.61,F],[-.45,.42,F],[-pe,.31,F]],d,.012,44),O([[-.14,.72,I],[-.3,.54,I],[-.58,.43,I],[-.88,.34,I]],f,.007,38),O([[-pe,.34,F],[-1.22,.31,F],[-1.62,.26,F],[-2.05,.22,F],[-2.34,.19,F]],d,.014,60),O([[-.82,.13,F],[-1.2,.11,F],[-1.62,.11,F],[-2.05,.13,F],[-2.33,.16,F]],d,.012,60),O([[-1.34,.3,I],[-1.43,.19,I],[-1.34,.1,I]],f,.005,24),[-1,1].forEach(e=>{k([e*2.39,.18,F],.17,.075,d,.007,0,Math.PI*2,34),[-.05,-.017,.017,.05].forEach(t=>{E([[e*2.27,.18+t,I],[e*2.49,.18+t*.85,I]],f,.004,s,12)})}),O([[-me,.18,F],[-.6,-.18,F],[-he,-.76,F],[-.5,-1.08,F],[-ge,-1.42,F]],d,.015,58),E([[-.42,.12,I],[-.2,.02,I],[0,-.01,I],[.2,.02,I],[.42,.12,I]],f,.007,s,34),m?(k([-.24,-.13,I],.2,.12,f,.005,Math.PI*.05,Math.PI*1.02,34),k([.24,-.13,I],.2,.12,f,.005,Math.PI*-.02,Math.PI*.95,34)):E([[-.48,-.08,I],[-.2,-.16,I],[0,-.14,I],[.2,-.16,I],[.48,-.08,I]],f,.006),E([[0,.05,I],[0,-.38,I],[0,-.86,I],[0,-1.24,I]],f,.007),[-.12,-.38,-.64].forEach(e=>{E([[-.28,e,I],[-.1,e-.04,I],[.1,e-.04,I],[.28,e,I]],f,.005,s,28)}),E([[-.35,-1.18,I],[-.14,-1.38,I],[0,-1.48,I],[.14,-1.38,I],[.35,-1.18,I]],f,.006,s,32),O([[-ge*.58,-1.42,F],[-.58,-1.92,F],[-.54,-2.42,F],[-.42,-2.94,F],[-.34,-3.2,F]],d,.013,62),O([[-.16,-1.52,F],[-.19,-2.03,F],[-.18,-2.52,F],[-.22,-3.06,F]],d,.011,58),O([[-.45,-2.28,I],[-.34,-2.39,I],[-.22,-2.29,I]],f,.005,24),O([[-.24,-3.18,F],[-.52,-3.22,F],[-.62,-3.31,F],[-.4,-3.39,F],[-.18,-3.34,F]],d,.008,38),[-1,1].forEach(e=>{[-.08,-.02,.04].forEach(t=>{E([[e*.37,-3.29+t,I],[e*.6,-3.31+t*.5,I]],f,.0035,s,8)})}),y.forEach(e=>{let n=new t.Mesh(e.geometry,ae);n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale).multiplyScalar(1.012),s.add(n)});let L=new t.Group;L.position.set(0,m?1.56:1.52,.42),L.rotation.set(-.02,-.05,.02),L.scale.setScalar(m?.23:.22),a.add(L);let R=new t.Mesh(new t.SphereGeometry(.7,56,36),u),_e=new t.Vector3(1.22,.78,.58);R.scale.copy(_e),R.material.opacity=.08,L.add(R);let z=[],B=(e,n,r,i,a,o=.035)=>{let s=new t.MeshStandardMaterial({color:e,emissive:n,roughness:.36,metalness:.08,transparent:!0,opacity:.96}),c=new t.Mesh(new t.SphereGeometry(.34,48,30),s);return c.position.set(...r),c.scale.set(...i),L.add(c),z.push({mesh:c,phase:a,pulse:o,baseScale:i}),c};B(15952548,7280446,[-.42,.12,.08],[1.28,.86,.68],0),B(9098063,2975772,[.05,.29,0],[1.12,.75,.62],.7),B(16181340,7694870,[.16,.14,.2],[.38,.92,.34],1.25,.025),B(9402584,3154015,[-.16,-.23,.12],[1.16,.55,.62],1.8),B(6147297,1464426,[.48,.02,-.04],[.78,.73,.58],2.25),B(16749179,7548963,[.31,-.47,-.1],[.72,.38,.46],2.75,.018);let V=new t.Mesh(new t.CapsuleGeometry(.09,.5,14,22),new t.MeshStandardMaterial({color:16756876,emissive:6237730,roughness:.38,metalness:.04,transparent:!0,opacity:.94}));V.position.set(.36,-.72,-.08),V.rotation.z=-.18,L.add(V),z.push({mesh:V,phase:3.2,pulse:.012,baseScale:[1,1,1]});let H=new t.Mesh(new t.SphereGeometry(.12,28,18),new t.MeshStandardMaterial({color:16767352,emissive:8082709,roughness:.28,metalness:.12,transparent:!0,opacity:.95}));H.position.set(-.12,-.2,.44),H.scale.set(1.5,.5,.62),L.add(H),z.push({mesh:H,phase:3.8,pulse:.055,baseScale:[1.5,.5,.62]});let U=new t.Mesh(new t.SphereGeometry(.1,26,18),new t.MeshStandardMaterial({color:6936750,emissive:1530953,roughness:.25,metalness:.14,transparent:!0,opacity:.96}));U.position.set(-.5,.18,.43),U.scale.set(1.15,.82,.62),L.add(U),z.push({mesh:U,phase:4.2,pulse:.065,baseScale:[1.15,.82,.62]});let W=(e,t=ne,n=.01,r=36)=>E(e,t,n,L,r);W([[-.76,.02,.29],[-.6,.38,.28],[-.2,.54,.24],[.28,.48,.17],[.68,.18,.1],[.64,-.12,.12],[.36,-.35,.16],[-.08,-.42,.24],[-.52,-.24,.3],[-.76,.02,.29]],re,.01,60),W([[.06,.52,.31],[.02,.32,.36],[.04,.12,.38],[.1,-.05,.36]],ne,.011),W([[-.72,.27,.37],[-.52,.39,.41],[-.28,.32,.42],[-.14,.44,.39]]),W([[-.72,.08,.42],[-.5,.18,.45],[-.26,.1,.46],[-.08,.2,.43]]),W([[-.65,-.1,.4],[-.42,-.02,.46],[-.2,-.08,.48],[-.02,.03,.44]]),W([[-.52,-.29,.36],[-.26,-.22,.44],[0,-.28,.43],[.18,-.18,.35]]),W([[-.22,.5,.33],[.02,.4,.38],[.24,.44,.3],[.44,.3,.24]]),W([[.1,.29,.42],[.28,.23,.43],[.44,.14,.35],[.6,.03,.24]]),W([[.18,.02,.42],[.36,-.02,.4],[.5,-.13,.28],[.57,-.24,.16]]),W([[-.52,-.31,.3],[-.3,-.39,.37],[-.05,-.37,.36],[.18,-.43,.25]]),[-.16,-.08,0,.08].forEach(e=>{W([[.04,-.47+e,.27],[.24,-.43+e,.26],[.48,-.45+e,.12]],ne,.006,22)});let G=new t.Mesh(new t.TorusGeometry(1.22,.008,12,110),p);G.position.set(-.2,.02,.42),G.rotation.set(Math.PI/2.35,.18,0),a.add(G);let K=G.clone();K.position.x=.2,K.rotation.y=-.18,a.add(K);let q=new t.Mesh(new t.TorusGeometry(1.72,.008,12,150),p);q.rotation.x=Math.PI/2,a.add(q);let J=new t.Group;J.position.set(0,-2.73,.1),J.scale.setScalar(.92),r.add(J);let ve=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.44,depthWrite:!1}),ye=new t.MeshBasicMaterial({color:16767352,transparent:!0,opacity:.38,depthWrite:!1});[.72,1.18,1.62].forEach((e,n)=>{let r=new t.Mesh(new t.TorusGeometry(e,n===1?.01:.006,10,160),n===1?ye:ve);r.rotation.x=Math.PI/2,J.add(r)});let be=new t.LineBasicMaterial({color:10482909,transparent:!0,opacity:.22}),Y=[];for(let e=0;e<24;e+=1){let t=Math.PI*2*e/24;Y.push(Math.cos(t)*.34,0,Math.sin(t)*.34),Y.push(Math.cos(t)*1.72,0,Math.sin(t)*1.72)}let X=new t.BufferGeometry;X.setAttribute(`position`,new t.Float32BufferAttribute(Y,3)),J.add(new t.LineSegments(X,be));let Z=new t.BufferGeometry,Q=new Float32Array(540);for(let e=0;e<Q.length;e+=3)Q[e]=(Math.random()-.5)*4.8,Q[e+1]=(Math.random()-.5)*4.2,Q[e+2]=(Math.random()-.5)*3.4;Z.setAttribute(`position`,new t.BufferAttribute(Q,3));let xe=new t.Points(Z,new t.PointsMaterial({color:15190667,size:.018,transparent:!0,opacity:.58}));r.add(xe),r.add(new t.AmbientLight(14602926,1.5));let $=new t.PointLight(16767352,4.2,10);$.position.set(2.6,3.2,3.4),r.add($);let Se=new t.PointLight(6936750,2.3,9);Se.position.set(-2.8,.4,2.2),r.add(Se);let Ce=()=>{let t=e.getBoundingClientRect(),r=Math.max(1,t.width),a=Math.max(1,t.height);n.setSize(r,a,!1),i.aspect=r/a,i.updateProjectionMatrix()},we=0,Te=new ResizeObserver(()=>{window.cancelAnimationFrame(we),we=window.requestAnimationFrame(Ce)});Te.observe(e),Ce();let Ee=0,De=!0,Oe=0,ke=(e=0)=>{if(!De)return;Oe||=e;let t=e-Oe;if(!S.reducedMotion){let n=Math.sin(t*7e-4)*.045;a.rotation.y=n,J.rotation.y=t*.0014%(Math.PI*2),L.rotation.y=t*.0012%(Math.PI*2),R.scale.copy(_e).multiplyScalar(1+Math.sin(e*.0022)*.035),z.forEach(({mesh:t,baseScale:n,phase:r,pulse:i})=>{let a=1+Math.sin(e*.0024+r)*i;t.scale.set(n[0]*a,n[1]*a,n[2]*a)}),G.rotation.z+=.003,K.rotation.z-=.003,q.position.y=-1.04+(Math.sin(e*.0017)+1)/2*2.55,xe.rotation.y-=.0015}n.render(r,i),Ee=window.requestAnimationFrame(ke)};ke(),C=()=>{De=!1,window.cancelAnimationFrame(Ee),window.cancelAnimationFrame(we),Te.disconnect(),n.dispose(),Z.dispose(),e.innerHTML=``}}catch{e.innerHTML=`
      <div class="scene-fallback">
        <div class="fallback-body" aria-label="Symbolic body and mind map"></div>
      </div>
    `}}}function $(){C&&=(C(),null);let e={intro:ce,ori:le,subjects:N,goals:ue,realms:de,memory:P,focus:fe,language:F,logic:I,reflection:pe,report:me,quest:he,path:ge}[S.screen];m.innerHTML=e(),L(),R(),S.screen===`intro`&&xe()}w(`onboarding_started`),$();