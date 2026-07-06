(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let a=[t(e),n(e),r(e),i(e)].sort((e,t)=>e.priority-t.priority),c=a[0],l=[...a].sort((e,t)=>t.score-e.score)[0],u=[e.goal,e.secondaryGoal,e.freeGoal].join(` `).toLowerCase(),d=u.includes(`super learner`)||u.includes(`faster`)||u.includes(`work`),f=d?`18-25 minutes a day`:`12-15 minutes a day`,ee=d?`5 focused days, 1 mixed challenge day, 1 rest or reflection day`:`4 focused days, 1 mixed challenge day, 2 lighter recovery days`;return{domains:a,primaryGrowth:c,strongestSignal:l,timeline:o(c,l,d),dailyMinutes:f,weeklyRhythm:ee,confidenceNote:s(e,l)}}function t(e){let t=e.memory.totalPositions;return a(`Memory`,c((t?e.memory.correctPositions/t:0)-e.memory.delayErrors*.055-e.memory.distractionErrors*.04),t,t?`${e.memory.correctPositions}/${t} positions held; delay errors: ${e.memory.delayErrors}; distraction errors: ${e.memory.distractionErrors}.`:`Memory trial has not been completed yet.`,e.memory.delayErrors>0?`Train delayed recall with anchors, short retrieval breaks, and one same-day retention check.`:e.memory.distractionErrors>0?`Train recall while filtering distraction, then retest after a short interruption.`:`Increase sequence load gently and check whether recall still holds tomorrow.`)}function n(e){let t=e.focus.total,n=c((t?e.focus.correct/t:0)-e.focus.switchErrors*.08-e.focus.decoyTaps*.055-e.focus.missedTargets*.04),r=e.focus.responseTimes.length?Math.round(e.focus.responseTimes.reduce((e,t)=>e+t,0)/e.focus.responseTimes.length):void 0;return a(`Focus`,n,t,t?`${e.focus.correct}/${t} choices correct; missed targets: ${e.focus.missedTargets}; decoy taps: ${e.focus.decoyTaps}; switch errors: ${e.focus.switchErrors}${r?`; average tap ${r} ms.`:`.`}`:`Focus pulse has not been completed yet.`,e.focus.switchErrors>0?`Train rule switching: pause, name the new rule, then act.`:e.focus.decoyTaps>0?`Train impulse control by separating speed from accuracy.`:`Extend focus endurance in small rounds without adding pressure.`)}function r(e){let t=e.reading.total,n=c((t?e.reading.correct/t:0)-(e.reading.missedInference?.13:0)-(e.reading.reread?.03:0)),r=[e.reading.reread?`reread support used`:``,e.reading.audio?`audio support used`:``].filter(Boolean).join(`; `);return a(`Reading`,n,t,t?`${e.reading.correct}/${t} comprehension answers correct${r?`; ${r}.`:`.`}`:`Reading trial has not been completed yet.`,e.reading.missedInference?`Train inference by separating what the text says from what it implies.`:`Add retention checks after reading so comprehension does not disappear after the passage.`)}function i(e){let t=e.math.total;return a(`Math`,c((t?e.math.correct/t:0)-(e.math.missedFraction?.1:0)-(e.math.missedBalance?.08:0)),t,t?`${e.math.correct}/${t} logic and numeracy puzzles correct${e.math.missedFraction?`; fraction model needs support`:``}${e.math.missedBalance?`; balance reasoning needs support`:``}.`:`Logic and math trial has not been completed yet.`,e.math.missedFraction?`Train visual fraction meaning before adding speed or notation.`:e.math.missedBalance?`Train balance equations with visual gates before symbolic equations.`:`Move into mixed patterns, balance, and real-world number sense.`)}function a(e,t,n,r,i){let a=n===0?`needs more evidence`:t>=.78?`strong early signal`:`trainable growth edge`,o=n===0?2+(1-t):1-t;return{key:e,score:t,scoreLabel:`${Math.round(t*100)}%`,level:a,priority:o,evidence:r,nextStep:i}}function o(e,t,n){let r=n?`Weeks 7-8`:`Week 5`;return[{window:`Week 1`,title:`Confirm the baseline`,focus:`Retest ${e.key.toLowerCase()} and ${t.key.toLowerCase()} so Ori can separate a real pattern from a one-day result.`},{window:`Weeks 2-3`,title:`Train ${e.key}`,focus:e.nextStep},{window:n?`Weeks 4-6`:`Weeks 4`,title:`Mix the skill under pressure`,focus:`Blend ${e.key.toLowerCase()} with focus, recall, and reading load so the skill transfers instead of staying isolated.`},{window:r,title:`Prove transfer`,focus:`Use a real-world challenge: learn a short article, solve a practical problem, explain it back, and retrieve it the next day.`}]}function s(e,t){return e.reflectionStrongest?e.reflectionStrongest===t.key?`Your self-read matched the strongest early signal: ${t.key}.`:`You felt strongest in ${e.reflectionStrongest}, while Ori's strongest early signal was ${t.key}. That gap is useful, not bad; it helps train confidence calibration.`:`Ori still needs one self-reflection check to compare confidence with task signals.`}function c(e){return Math.max(0,Math.min(1,e))}var l=[{id:`memory`,title:`Memory and retention`,realm:`Memory Vault`,status:`active`,summary:`Remembering instructions, facts, names, sequences, and what stays after time passes.`,helpsWith:[`working memory`,`delayed recall`,`visual memory`,`verbal memory`,`memory anchors`],assessmentSignals:[`sequence recall`,`delay effect`,`distraction effect`,`error position`],aliases:[`memory`,`remembering`,`retention`,`recall`,`forgetting`,`recall repetition`,`retrieval practice`,`spaced repetition`]},{id:`focus`,title:`Focus and executive control`,realm:`Focus Tower`,status:`active`,summary:`Staying with the right signal, ignoring distractions, controlling pace, and switching rules.`,helpsWith:[`sustained attention`,`selective attention`,`inhibitory control`,`rule switching`,`pace control`],assessmentSignals:[`missed targets`,`decoy taps`,`response-time drift`,`rule-switch recovery`],aliases:[`focus`,`attention`,`attention sculpting`,`executive function`,`executive control`,`distraction`,`distraction blocking`,`concentration`]},{id:`readiness`,title:`Mind-body readiness and practice loops`,realm:`Readiness Gate`,status:`active`,summary:`Aligning sleep, movement, nutrition awareness, timing, input quality, reflection, and playful practice so the learner is ready to encode and retain.`,helpsWith:[`sleep mastery`,`movement integration`,`practice timing`,`mindful encoding`,`input curation`,`nutrition awareness`,`outcome tracking`,`playful practice`],assessmentSignals:[`readiness check-in`,`sleep consistency`,`energy rating`,`movement break effect`,`input overload`,`practice timing response`,`reflection follow-through`,`outcome trend`],aliases:[`readiness`,`sleep`,`sleep mastery`,`movement`,`movement integration`,`exercise`,`nutrition`,`neuro nutrition`,`food`,`timing`,`timing strategies`,`input curation`,`mindful encoding`,`outcome tracking`,`optimized outcome tracking`,`practice loop`,`playful practice`,`recovery`,`energy`,`fatigue`,`tired`,`environment`]},{id:`reading-comprehension`,title:`Reading comprehension`,realm:`Language Grove`,status:`active`,summary:`Understanding what text says, what it implies, what matters most, and what the learner remembers later.`,helpsWith:[`literal meaning`,`sequencing`,`inference`,`main idea`,`summarizing`],assessmentSignals:[`reading time`,`rereading`,`choice accuracy`,`inference misses`,`retention after reading`],aliases:[`reading`,`comprehension`,`reading comprehension`,`understanding text`,`books`]},{id:`language-vocabulary`,title:`Language and vocabulary`,realm:`Language Grove`,status:`active`,summary:`Building word meaning, sentence understanding, listening comprehension, and background knowledge.`,helpsWith:[`vocabulary`,`syntax`,`listening comprehension`,`background knowledge`],assessmentSignals:[`unknown word handling`,`audio support effect`,`sentence complexity errors`],aliases:[`language`,`vocabulary`,`words`,`listening`,`sentences`]},{id:`math`,title:`Math and numeracy`,realm:`Logic Forge`,status:`active`,summary:`Number sense, arithmetic, fractions, balance reasoning, and confidence with quantitative tasks.`,helpsWith:[`number sense`,`arithmetic fluency`,`fractions`,`ratios`,`algebra readiness`],assessmentSignals:[`math accuracy`,`visual support effect`,`timer sensitivity`,`concept versus pace errors`],aliases:[`math`,`numeracy`,`numbers`,`arithmetic`,`fractions`,`algebra`]},{id:`problem-solving`,title:`Logic and problem solving`,realm:`Logic Forge`,status:`active`,summary:`Seeing patterns, representing problems, testing rules, and adapting when a solution path changes.`,helpsWith:[`pattern recognition`,`adaptive problem solving`,`spatial reasoning`,`multistep thinking`],assessmentSignals:[`rule discovery`,`strategy switching`,`repeated failed action`,`transfer to new puzzles`],aliases:[`logic`,`reasoning`,`problem solving`,`puzzles`,`patterns`]},{id:`strategy`,title:`Learning strategy and metacognition`,realm:`Strategy Observatory`,status:`active`,summary:`Helping learners plan, monitor understanding, choose strategies, and know when they need support.`,helpsWith:[`goal setting`,`confidence calibration`,`error analysis`,`help seeking`,`strategy choice`],assessmentSignals:[`goal specificity`,`confidence prediction`,`reflection accuracy`,`hint timing`],aliases:[`strategy`,`metacognition`,`learning strategy`,`study skills`,`planning`,`reflection`,`loop reflection`]},{id:`confidence`,title:`Confidence and emotional learning state`,realm:`Inner Compass`,status:`active`,summary:`Reducing shame, noticing pressure, recovering after mistakes, and building a healthier learner identity.`,helpsWith:[`math anxiety`,`reading shame`,`frustration recovery`,`persistence`,`motivation`],assessmentSignals:[`self-reported feeling`,`quit point`,`recovery after error`,`pressure sensitivity`],aliases:[`confidence`,`anxiety`,`shame`,`motivation`,`emotions`,`frustration`]},{id:`speed-accuracy`,title:`Learning speed with accuracy`,realm:`Tempo Arena`,status:`planned`,summary:`Getting faster only after understanding is stable, so speed does not destroy comprehension.`,helpsWith:[`fluency`,`pacing`,`endurance`,`speed accuracy balance`],assessmentSignals:[`time trend`,`accuracy drop under speed`,`pacing choices`],aliases:[`speed`,`fluency`,`faster learning`,`pace`,`accuracy`]},{id:`transfer`,title:`Transfer to real life`,realm:`Worldgate`,status:`planned`,summary:`Checking whether skills used in the app help with real reading, work, studying, money, and daily memory.`,helpsWith:[`work learning`,`real-world reading`,`daily memory`,`self-teaching`,`test preparation`],assessmentSignals:[`outside-app check-ins`,`capstone tasks`,`new-context performance`],aliases:[`transfer`,`real life`,`work`,`daily life`,`self teaching`,`test prep`]}];function u(){let e=l.filter(e=>e.status===`active`),t=l.filter(e=>e.status===`planned`),n=e.map(e=>`${e.title}: ${e.summary}`).join(` `),r=t.map(e=>e.title).join(`, `);return`Mind Realms is being designed to help with ${e.map(e=>e.title).join(`, `)}. ${n} Planned expansion areas include ${r}. If a new topic is already in the map, the app will ask whether you meant to research it more deeply or whether it was added by mistake.`}function d(e){let t=f(e);if(t)return l.find(e=>[e.id,e.title,e.realm,...e.aliases].some(e=>{let n=f(e);return t===n||t.includes(n)||n.includes(t)}))}function f(e){return e.toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9 ]+/g,` `).replace(/\s+/g,` `).trim()}var ee=`/mind-realms-live/assets/mind-realms-male-wired-baseline-DgC9Oehp.png`,p=`modulepreload`,te=function(e){return`/mind-realms-live/`+e},m={},ne=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=te(t,n),t=s(t),t in m)return;m[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:p,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},re=document.querySelector(`#app`);if(!re)throw Error(`App root was not found.`);var h=re,g=[`intro`,`ori`,`subjects`,`goals`,`realms`,`memory`,`focus`,`language`,`logic`,`reflection`,`report`,`quest`,`path`],_=[`Remember what I learn`,`Read and understand faster`,`Get stronger at math`,`Focus without drifting`,`Learn faster for work`,`Prepare for a test`,`Become a super learner`],v=[`Build confidence`,`Stop forgetting instructions`,`Improve problem solving`,`Think clearly under pressure`,`Read books and retain them`,`Learn like I never learned in school`],y=[[`Sun`,`Key`,`Wave`],[`Gate`,`Sun`,`Crown`,`Key`],[`Leaf`,`Wave`,`Gate`,`Crown`,`Sun`]],ie=[`Sun`,`Key`,`Wave`,`Gate`,`Crown`,`Leaf`],b=[{label:`Gold Star`,target:!0},{label:`Silver Moon`,target:!1},{label:`Gold Star`,target:!0},{label:`Blue Gate`,target:!1},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Moon`,target:!0},{label:`Moon`,target:!0},{label:`Sun`,target:!1},{label:`Sun`,target:!0,afterSwitch:!0},{label:`Moon`,target:!1,afterSwitch:!0},{label:`Sun`,target:!0,afterSwitch:!0}],x=[{id:`literal`,prompt:`Which object did Mara carry through the rain?`,options:[`A silver seed`,`A broken lantern`,`A sleeping bird`],answer:`A silver seed`},{id:`sequence`,prompt:`What had to happen before Mara opened her hand?`,options:[`The thunder had to stop`,`The map had to burn`,`The seed had to glow`],answer:`The thunder had to stop`},{id:`inference`,prompt:`Why did Mara wait?`,options:[`The map warned the seed would wake only when the sky became quiet`,`She forgot what she was carrying`,`She wanted the rain to wash the map away`],answer:`The map warned the seed would wake only when the sky became quiet`},{id:`main`,prompt:`What is this moment mostly about?`,options:[`Following a warning carefully`,`Escaping a dangerous animal`,`Learning how to draw a map`],answer:`Following a warning carefully`}],S=[{id:`make10`,prompt:`Choose the pair of stones that makes 10.`,options:[`4 and 6`,`2 and 9`,`7 and 4`,`5 and 6`],answer:`4 and 6`},{id:`pattern`,prompt:`Complete the symbol pattern: 3, 6, 12, 24, ?`,options:[`30`,`36`,`48`,`72`],answer:`48`},{id:`fraction`,prompt:`Which piece matches one half?`,options:[`Two of four equal parts`,`One of three equal parts`,`Three of four equal parts`,`One of six equal parts`],answer:`Two of four equal parts`},{id:`balance`,prompt:`The gate shows: Box + 3 = 8. What is hidden in the box?`,options:[`3`,`4`,`5`,`8`],answer:`5`}],C=()=>({screen:`intro`,reducedMotion:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,bodyForm:`male`,audioStatus:`Audio summary ready.`,topicDraft:``,researchQueue:[],primaryGoal:``,secondaryGoal:``,freeGoal:``,events:[],memory:{phase:`intro`,round:0,input:[],correctPositions:0,totalPositions:0,errorPositions:[],delayErrors:0,distractionErrors:0,feedback:``},focus:{phase:`intro`,index:0,presentedAt:0,missedTargets:0,decoyTaps:0,correct:0,total:0,switchErrors:0,responseTimes:[],reflection:``},language:{index:0,answers:[],startedAt:0,reread:!1,audio:!1},logic:{index:0,answers:[]},reflection:{feeling:``,strongest:``},firstQuestComplete:!1}),w=C(),T=null,E=(e,t)=>{w.events.push({type:e,screen:w.screen,timestamp:Date.now(),payload:t})},D=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e),O=()=>{let e=g.indexOf(w.screen);e<g.length-1&&(w.screen=g[e+1],E(`screen_viewed`,{screen:w.screen}),$())},k=e=>{w.screen=e,E(`screen_viewed`,{screen:e}),$()},A=()=>{M(!1),w=C(),E(`prototype_reset`),$()};function j(){if(!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){w.audioStatus=`This browser cannot play voice audio yet. Open in Chrome or a mobile browser to hear it spoken.`,E(`subject_audio_unavailable`),$();return}window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(u());e.rate=.94,e.pitch=.92,e.onend=()=>{w.audioStatus=`Audio summary finished.`,E(`subject_audio_finished`),$()},e.onerror=()=>{w.audioStatus=`Audio did not play in this browser. Open in Chrome or a mobile browser to hear it spoken.`,E(`subject_audio_error`),$()},w.audioStatus=`Playing subject summary...`,E(`subject_audio_started`,{subjectCount:l.length}),$(),window.speechSynthesis.speak(e)}function M(e=!0){`speechSynthesis`in window&&window.speechSynthesis.cancel(),w.audioStatus=`Audio summary stopped.`,E(`subject_audio_stopped`),e&&$()}function N(e){let t=w.topicDraft.trim();if(!t){w.topicNotice={kind:`empty`,message:`Type a topic first, then I can check whether it is already in the learning map.`},$();return}let n=d(t);if(n&&!e){w.topicNotice={kind:`duplicate`,subjectTitle:n.title,message:`Hey, you added this already: ${n.title}. Are you purposely trying to research more to get a more in-depth feel, or did you kind of make a mistake?`},E(`duplicate_topic_detected`,{query:t,subject:n.id}),$();return}let r=n?`Deep research: ${n.title}`:`New topic research: ${t}`;w.researchQueue.includes(r)||w.researchQueue.push(r),w.topicNotice={kind:`queued`,subjectTitle:n?.title,message:n?`${n.title} is already in the map, so I added a deeper research pass to the queue.`:`${t} is not in the current map yet, so I added it to the future research queue.`},E(`topic_research_queued`,{query:t,existingSubject:n?.id}),$()}var P=e=>{let t=g.indexOf(w.screen),n=g.map((e,n)=>`<span class="step-dot ${n<=t?`active`:``}"></span>`).join(``);return`
    <div class="app ${w.reducedMotion?`reduced-motion`:``}">
      <header class="topbar">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true"></div>
          <div class="brand-text">
            <strong>Mind Realms</strong>
            <span>First-session prototype</span>
          </div>
        </div>
        <div class="topbar-actions">
          <button class="ghost-button" data-action="motion">${w.reducedMotion?`Motion off`:`Motion on`}</button>
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
  `},ae=()=>P(`
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
        <div id="brainScene" aria-label="${w.bodyForm===`female`?`Female`:`Male`} 3D body and brain turntable proof"></div>
        <div class="scene-caption">
          <span>${w.bodyForm===`male`?`Male baseline image with 3D brain`:`Female baseline 3D turntable`}</span>
          <div class="body-form-toggle" aria-label="Body form">
            <button class="small-button ${w.bodyForm===`female`?`selected`:``}" data-body-form="female">Female</button>
            <button class="small-button ${w.bodyForm===`male`?`selected`:``}" data-body-form="male">Male</button>
          </div>
        </div>
      </div>
    </section>
  `),oe=()=>P(`
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
      `).join(``),a=w.topicNotice?`
      <div class="topic-alert ${w.topicNotice.kind}">
        ${w.topicNotice.kind===`duplicate`?`<strong class="flash-word">Already added</strong>`:``}
        <p>${w.topicNotice.message}</p>
        ${w.topicNotice.kind===`duplicate`?`<div class="actions">
                <button class="secondary-button" data-action="topic-deep">Research deeper anyway</button>
                <button class="small-button" data-action="topic-clear">Clear</button>
              </div>`:``}
      </div>
    `:``,o=w.researchQueue.length?`
      <div class="footer-note">
        Research queue: ${w.researchQueue.map(D).join(`, `)}
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
            <p class="footer-note">${w.audioStatus}</p>
            <p class="audio-transcript">${D(n)}</p>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Add or research a topic</h3>
            <input class="text-input" id="topicDraft" value="${D(w.topicDraft)}" placeholder="Try: focus, sleep, writing, motivation..." />
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
  `)},se=()=>P(`
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
            <div class="choice-grid">${_.map(e=>`<button class="choice-button ${w.primaryGoal===e?`selected`:``}" data-goal="${D(e)}">${D(e)}</button>`).join(``)}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Secondary signal</h3>
            <div class="choice-grid">${v.map(e=>`<button class="choice-button ${w.secondaryGoal===e?`selected`:``}" data-secondary="${D(e)}">${D(e)}</button>`).join(``)}</div>
            <textarea class="text-field" id="freeGoal" placeholder="Tell Ori what you want to become.">${D(w.freeGoal)}</textarea>
            <div class="actions">
              <button class="primary-button" data-action="next">${w.primaryGoal?`Open the realms`:`Choose a goal first`}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),I=()=>P(`
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
  `),L=()=>{let e=y[w.memory.round]??[],t=ie.map(e=>`<button class="rune-button" data-rune="${e}">${e}</button>`).join(``),n=`Round ${Math.min(w.memory.round+1,y.length)} of ${y.length}`,r=``;return r=w.memory.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Memory Vault</h3>
          <p class="lede">Watch the magic symbol sequence, then rebuild it after the vault closes.</p>
          <button class="primary-button" data-action="memory-start">Begin memory trial</button>
        </div>
      </div>
    `:w.memory.phase===`show`?`
      <div class="trial-surface">
        <div class="rune-sequence">
          ${e.map(e=>`<div class="rune glow">${e}</div>`).join(``)}
        </div>
      </div>
    `:w.memory.phase===`answer`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">Rebuild the sequence. Current answer: ${w.memory.input.join(` -> `)||`none yet`}</p>
          <div class="answer-row">${t}</div>
        </div>
      </div>
    `:w.memory.phase===`feedback`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${w.memory.feedback}</p>
          <button class="primary-button" data-action="memory-next-round">Continue</button>
        </div>
      </div>
    `:`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${J()}</p>
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
  `)},ce=()=>{let e=b[w.focus.index],t=``;return t=w.focus.phase===`intro`?`
      <div class="trial-surface">
        <div class="panel-inner">
          <h3>Focus Tower Pulse</h3>
          <p class="lede">Hold the rule, ignore decoys, and switch when the tower changes. Accuracy matters more than speed.</p>
          <button class="primary-button" data-action="focus-start">Begin focus pulse</button>
        </div>
      </div>
    `:w.focus.phase===`run`&&e?`
      <div class="trial-surface">
        <div class="panel-inner">
          <p class="feedback">${w.focus.index<5?`Tap Gold Star. Let other signs pass.`:w.focus.index<8?`Tap Gold Star. Ignore Cracked Star.`:w.focus.index<11?`Tap Moon.`:`The tower chimed. Now tap Sun.`}</p>
          <div class="focus-token ${e.decoy?`decoy`:``}">${e.label}</div>
          <div class="actions">
            <button class="primary-button" data-focus-action="tap">Tap</button>
            <button class="secondary-button" data-focus-action="pass">Let pass</button>
          </div>
        </div>
      </div>
    `:w.focus.phase===`reflect`?`
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
          <p class="feedback">${Y()}</p>
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
  `)},le=()=>{let e=x[w.language.index],t=w.language.answers.length;return P(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Question ${t+1} of ${x.length}</div>
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
            <button class="small-button" data-action="audio">${w.language.audio?`Audio noted`:`Use audio support`}</button>
          </div>
          <div class="question">
            <h3>${e.prompt}</h3>
            <div class="choice-grid">
              ${e.options.map(e=>`<button class="choice-button" data-language="${D(e)}">${D(e)}</button>`).join(``)}
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
          <p class="lede">${pe()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Enter Logic Forge</button>
        </div>
      </section>
    `)},ue=()=>{let e=S[w.logic.index];return P(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Puzzle ${w.logic.index+1} of ${S.length}</div>
        <h2>Logic Forge</h2>
        <p class="lede">Power the bridge with number symbols, patterns, visual fractions, and balance reasoning.</p>
      </div>
      <div class="panel">
        <div class="panel-inner trial-stage">
          <div class="trial-surface">
            <div class="panel-inner">
              <h3>${e.prompt}</h3>
              <div class="logic-grid">
                ${e.options.map(e=>`<button class="choice-button" data-logic="${D(e)}">${D(e)}</button>`).join(``)}
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
          <p class="lede">${me()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Open the mirror</button>
        </div>
      </section>
    `)},de=()=>P(`
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
              ${[`Easier than expected`,`About right`,`Hard but possible`,`Frustrating`,`I felt nervous`].map(e=>`<button class="choice-button ${w.reflection.feeling===e?`selected`:``}" data-feeling="${e}">${e}</button>`).join(``)}
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Where were you strongest?</h3>
            <div class="choice-grid">
              ${[`Memory`,`Focus`,`Reading`,`Math`,`Not sure`].map(e=>`<button class="choice-button ${w.reflection.strongest===e?`selected`:``}" data-strongest="${e}">${e}</button>`).join(``)}
            </div>
            <div class="actions">
              <button class="primary-button" data-action="next">Reveal first signals</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),R=()=>{let t=X(),n=e(he()),r=n.domains.map(e=>`
        <article class="profile-card">
          <div class="subject-card-top">
            <span class="subject-status">${D(e.level)}</span>
            <span>${e.scoreLabel}</span>
          </div>
          <h3>${e.key}</h3>
          <div class="profile-bar" aria-hidden="true">
            <span style="width: ${Math.round(e.score*100)}%"></span>
          </div>
          <p>${D(e.evidence)}</p>
          <p><strong>Next:</strong> ${D(e.nextStep)}</p>
        </article>
      `).join(``),i=n.timeline.map(e=>`
        <article class="timeline-step">
          <strong>${D(e.window)}</strong>
          <h3>${D(e.title)}</h3>
          <p>${D(e.focus)}</p>
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
          <p class="lede">${D(n.weeklyRhythm)}.</p>
          <p class="footer-note">${D(n.confidenceNote)}</p>
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
  `)},z=()=>{let e=w.firstQuestComplete?`First quest complete. You improved the path by practicing one strategy immediately.`:`Ori chooses one guided quest from your strongest growth signal. This prototype simulates that first personalized lesson.`;return P(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Free proof quest</div>
        <h2>${ve()}</h2>
        <p class="lede">${e}</p>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>${ve()}</h3>
          <p class="lede">${ye()}</p>
          <div class="actions">
            <button class="primary-button" data-action="complete-quest">${w.firstQuestComplete?`Quest complete`:`Complete guided quest`}</button>
            <button class="secondary-button" data-action="next">Preview my path</button>
          </div>
        </div>
      </div>
    </section>
  `)},fe=()=>P(`
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
`);function B(){h.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`next`&&O(),t===`reset`&&A(),t===`motion`&&(w.reducedMotion=!w.reducedMotion,E(`reduced_motion_toggled`,{enabled:w.reducedMotion}),$()),t===`go-report`&&k(`report`),t===`memory-start`&&H(),t===`memory-next-round`&&(w.memory.round+=1,H()),t===`focus-start`&&W(),t===`reread`&&(w.language.reread=!0,E(`language_reread_marked`),$()),t===`audio`&&(w.language.audio=!0,E(`audio_support_selected`),$()),t===`speak-subject-summary`&&j(),t===`stop-subject-summary`&&M(),t===`topic-check`&&N(!1),t===`topic-deep`&&N(!0),t===`topic-clear`&&(w.topicNotice=void 0,w.topicDraft=``,$()),t===`complete-quest`&&(w.firstQuestComplete=!0,E(`first_quest_completed`,{path:Q()}),$()),t===`interest`){E(`pricing_interest_clicked`,{price:`$14.99/month`});let e=document.querySelector(`#interestNote`);e&&(e.textContent=`Interest captured for the prototype. Payment is not active yet.`)}})})}function V(){h.querySelectorAll(`[data-goal]`).forEach(e=>{e.addEventListener(`click`,()=>{w.primaryGoal=e.dataset.goal??``,E(`goal_selected`,{primaryGoal:w.primaryGoal}),$()})}),h.querySelectorAll(`[data-secondary]`).forEach(e=>{e.addEventListener(`click`,()=>{w.secondaryGoal=e.dataset.secondary??``,E(`secondary_goal_selected`,{secondaryGoal:w.secondaryGoal}),$()})});let e=h.querySelector(`#freeGoal`);e?.addEventListener(`input`,()=>{w.freeGoal=e.value});let t=h.querySelector(`#topicDraft`);t?.addEventListener(`input`,()=>{w.topicDraft=t.value}),h.querySelectorAll(`[data-body-form]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bodyForm;t!==`male`&&t!==`female`||(w.bodyForm=t,E(`body_form_selected`,{bodyForm:t}),$())})});let n=Array.from(h.querySelectorAll(`[data-brain-region]`)),r=()=>{n.forEach(e=>e.classList.remove(`is-active`))};n.forEach(e=>{let t=()=>{r(),e.classList.add(`is-active`)};e.addEventListener(`pointerenter`,t),e.addEventListener(`focus`,t),e.addEventListener(`click`,e=>{e.preventDefault(),t()}),e.addEventListener(`pointerleave`,()=>{e.classList.remove(`is-active`)}),e.addEventListener(`blur`,()=>{e.classList.remove(`is-active`)})}),h.querySelectorAll(`[data-rune]`).forEach(e=>{e.addEventListener(`click`,()=>U(e.dataset.rune??``))}),h.querySelectorAll(`[data-focus-action]`).forEach(e=>{e.addEventListener(`click`,()=>G(e.dataset.focusAction===`tap`))}),h.querySelectorAll(`[data-focus-reflect]`).forEach(e=>{e.addEventListener(`click`,()=>{w.focus.reflection=e.dataset.focusReflect??``,w.focus.phase=`done`,E(`focus_pulse_completed`,{missedTargets:w.focus.missedTargets,decoyTaps:w.focus.decoyTaps,switchErrors:w.focus.switchErrors,reflection:w.focus.reflection}),$()})}),h.querySelectorAll(`[data-language]`).forEach(e=>{e.addEventListener(`click`,()=>K(e.dataset.language??``))}),h.querySelectorAll(`[data-logic]`).forEach(e=>{e.addEventListener(`click`,()=>q(e.dataset.logic??``))}),h.querySelectorAll(`[data-feeling]`).forEach(e=>{e.addEventListener(`click`,()=>{w.reflection.feeling=e.dataset.feeling??``,E(`reflection_feeling_selected`,{feeling:w.reflection.feeling}),$()})}),h.querySelectorAll(`[data-strongest]`).forEach(e=>{e.addEventListener(`click`,()=>{w.reflection.strongest=e.dataset.strongest??``,E(`reflection_strength_selected`,{strongest:w.reflection.strongest}),$()})})}function H(){w.memory.phase=`show`,w.memory.input=[],w.memory.feedback=``,E(`trial_started`,{trial:`memory`,round:w.memory.round+1}),$(),window.setTimeout(()=>{w.screen===`memory`&&w.memory.phase===`show`&&(w.memory.phase=`answer`,$())},w.reducedMotion?500:1600)}function U(e){if(w.memory.phase!==`answer`)return;let t=y[w.memory.round]??[];if(w.memory.input.push(e),w.memory.input.length>=t.length){let e=0;t.forEach((t,n)=>{w.memory.input[n]===t?e+=1:w.memory.errorPositions.push(n+1)});let n=t.length-e;w.memory.correctPositions+=e,w.memory.totalPositions+=t.length,w.memory.round===1&&(w.memory.distractionErrors+=n),w.memory.round===2&&(w.memory.delayErrors+=n),E(`memory_sequence_completed`,{round:w.memory.round+1,correct:e,total:t.length}),w.memory.round>=y.length-1?w.memory.phase=`done`:(w.memory.phase=`feedback`,w.memory.feedback=n===0?`The sequence held cleanly. Ori will increase the load gently.`:`Part of the symbol chain faded. Ori is watching where the slip happened.`)}$()}function W(){w.focus.phase=`run`,w.focus.index=0,w.focus.presentedAt=Date.now(),E(`trial_started`,{trial:`focus`}),$()}function G(e){if(w.focus.phase!==`run`)return;let t=b[w.focus.index];if(!t)return;let n=t.target===e;w.focus.total+=1,n&&(w.focus.correct+=1),t.target&&!e&&(w.focus.missedTargets+=1),!t.target&&e&&(w.focus.decoyTaps+=1),t.afterSwitch&&!n&&(w.focus.switchErrors+=1),e&&w.focus.responseTimes.push(Date.now()-w.focus.presentedAt),w.focus.index+=1,w.focus.index>=b.length?w.focus.phase=`reflect`:w.focus.presentedAt=Date.now(),$()}function K(e){let t=x[w.language.index];if(!t)return;let n=e===t.answer;w.language.answers.push({id:t.id,correct:n}),w.language.index+=1,E(`language_choice_made`,{id:t.id,correct:n}),$()}function q(e){let t=S[w.logic.index];if(!t)return;let n=e===t.answer;w.logic.answers.push({id:t.id,correct:n}),w.logic.index+=1,E(`logic_puzzle_completed`,{id:t.id,correct:n}),$()}function J(){return(w.memory.totalPositions?w.memory.correctPositions/w.memory.totalPositions:0)>=.86?`Memory signal: your symbol recall held across load and delay.`:w.memory.distractionErrors>w.memory.delayErrors?`Memory signal: recall shifted most when the vault distracted you.`:w.memory.delayErrors>0?`Memory signal: first recall appeared stronger than delayed recall.`:`Memory signal: Ori needs more evidence, but sequence load should be trained gently.`}function Y(){return w.focus.switchErrors>=2?`Focus signal: attention held early, but the rule switch pulled you back to the old pattern.`:w.focus.decoyTaps>=2?`Focus signal: action speed is strong. The next step is protecting accuracy before tapping.`:w.focus.missedTargets>=2?`Focus signal: some targets slipped during the pulse. Signal detection and re-centering should be trained.`:`Focus signal: your attention held through the pulse. Ori will check endurance over longer sessions later.`}function pe(){let e=w.language.answers.some(e=>e.id===`inference`&&!e.correct),t=w.language.answers.filter(e=>e.correct).length;return e?`Reading signal: direct details were clearer than hidden meaning. Inference should be trained next.`:t>=4?`Reading signal: direct detail, sequence, inference, and main idea all held in this short passage.`:`Reading signal: Ori needs more evidence across vocabulary, inference, and retention.`}function me(){let e=w.logic.answers.filter(e=>!e.correct);return e.some(e=>e.id===`fraction`)?`Logic signal: patterns and balance may be ahead of visual fraction intuition.`:e.some(e=>e.id===`balance`)?`Logic signal: number patterns are waking up. Balance reasoning needs support.`:e.length===0?`Logic signal: pattern and balance reasoning were strong in this first forge run.`:`Logic signal: Ori will separate concept gaps from speed, reading load, and working memory.`}function he(){let e=w.language.answers.filter(e=>e.correct).length,t=w.logic.answers.filter(e=>e.correct).length;return{goal:w.primaryGoal,secondaryGoal:w.secondaryGoal,freeGoal:w.freeGoal,reflectionFeeling:w.reflection.feeling,reflectionStrongest:w.reflection.strongest,memory:{correctPositions:w.memory.correctPositions,totalPositions:w.memory.totalPositions,delayErrors:w.memory.delayErrors,distractionErrors:w.memory.distractionErrors,errorPositions:w.memory.errorPositions},focus:{correct:w.focus.correct,total:w.focus.total,missedTargets:w.focus.missedTargets,decoyTaps:w.focus.decoyTaps,switchErrors:w.focus.switchErrors,responseTimes:w.focus.responseTimes},reading:{correct:e,total:w.language.answers.length,missedInference:w.language.answers.some(e=>e.id===`inference`&&!e.correct),reread:w.language.reread,audio:w.language.audio},math:{correct:t,total:w.logic.answers.length,missedFraction:w.logic.answers.some(e=>e.id===`fraction`&&!e.correct),missedBalance:w.logic.answers.some(e=>e.id===`balance`&&!e.correct)}}}function X(){return[{label:`Goal`,value:w.primaryGoal||`Become a super learner`},{label:`Memory`,value:J().replace(`Memory signal: `,``)},{label:`Focus`,value:Y().replace(`Focus signal: `,``)},{label:`Reading`,value:pe().replace(`Reading signal: `,``)},{label:`Logic`,value:me().replace(`Logic signal: `,``)},{label:`Strategy`,value:ge()},{label:`First path`,value:Q()},{label:`Daily time`,value:`12-15 minutes to start`}]}function ge(){if(!w.reflection.strongest)return`Needs one reflection check.`;let e=Z(),t=Math.max(...Object.values(e)),n=e[w.reflection.strongest];if(n!==void 0&&t-n<=.05)return`Your self-read matched your strongest signal today.`;let r=_e();return`You felt strongest in ${w.reflection.strongest}, while Ori saw the strongest signal in ${r}.`}function _e(){let e=Z();return[[`Memory`,e.Memory],[`Focus`,e.Focus],[`Reading`,e.Reading],[`Math`,e.Math]].reduce((e,t)=>t[1]>e[1]?t:e)[0]}function Z(){return{Memory:w.memory.totalPositions?w.memory.correctPositions/w.memory.totalPositions:0,Focus:w.focus.total?w.focus.correct/w.focus.total:0,Reading:w.language.answers.length?w.language.answers.filter(e=>e.correct).length/w.language.answers.length:0,Math:w.logic.answers.length?w.logic.answers.filter(e=>e.correct).length/w.logic.answers.length:0}}function Q(){return w.focus.switchErrors>=2||w.focus.decoyTaps>=2?`Focus Recovery + Memory Anchors + Inference Clues`:w.memory.delayErrors>0||w.memory.distractionErrors>0?`Memory Anchors + Focus Pulse + Logic Patterns`:w.language.answers.some(e=>e.id===`inference`&&!e.correct)?`Inference Clues + Delayed Recall + Logic Patterns`:w.logic.answers.some(e=>!e.correct)?`Logic Forge Basics + Pace Control + Reading Clues`:`Advanced Recall + Flexible Focus + Transfer Quests`}function ve(){let e=Q();return e.startsWith(`Focus`)?`Steady Signal Quest`:e.startsWith(`Memory`)?`Memory Anchor Quest`:e.startsWith(`Inference`)?`Hidden Clue Quest`:e.startsWith(`Logic`)?`Balance Gate Quest`:`Transfer Trial Quest`}function ye(){let e=Q();return e.startsWith(`Focus`)?`You practice one breath before action, then repeat a shorter signal round where accuracy comes before speed.`:e.startsWith(`Memory`)?`You group symbols into anchors, replay them as a tiny story, then retrieve them after a short delay.`:e.startsWith(`Inference`)?`You compare what the scroll says directly with what it implies, then choose a path from the hidden clue.`:e.startsWith(`Logic`)?`You use a visual balance gate before seeing the number sentence, so the concept lands before notation.`:`You combine recall, focus, reading, and logic in one small mixed challenge.`}async function be(){let e=document.querySelector(`#brainScene`);if(e){T?.(),T=null;try{let t=await ne(()=>import(`./three.module-kyxZOpvy.js`),[]);if(!document.body.contains(e))return;let n=new t.WebGLRenderer({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);let r=new t.Scene,i=new t.PerspectiveCamera(38,1,.1,100);i.position.set(0,-.42,7.6);let a=new t.Group;a.position.set(0,.34,0),a.scale.setScalar(.92),r.add(a);let o=new t.Group,s=new t.Group;a.add(o),a.add(s);let c=new t.MeshStandardMaterial({color:8051682,emissive:1192763,roughness:.24,metalness:.02,transparent:!0,opacity:.075,depthWrite:!1}),l=new t.MeshStandardMaterial({color:15190667,emissive:3089424,roughness:.46,metalness:.04,transparent:!0,opacity:.095,depthWrite:!1}),u=new t.MeshStandardMaterial({color:16767352,emissive:16758861,roughness:.24,metalness:.18,transparent:!0,opacity:.84}),d=new t.MeshBasicMaterial({color:16314847,transparent:!0,opacity:.9,depthWrite:!1}),f=new t.MeshBasicMaterial({color:10482909,transparent:!0,opacity:.74,depthWrite:!1}),p=new t.MeshBasicMaterial({color:460041,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),te=new t.MeshBasicMaterial({color:16773311,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1}),m=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.26,depthWrite:!1}),re=new t.MeshBasicMaterial({color:6936750,wireframe:!0,transparent:!0,opacity:.065,depthWrite:!1}),h=w.bodyForm===`female`,g=!h;o.visible=g,s.visible=h;let _=h?.82:1.14,v=h?.76:.6,y=h?[.86,.75,.52]:[1.18,.82,.6],ie=h?[.46,.78,.43]:[.64,.84,.5],b=[];if(g){let r=await new t.TextureLoader().loadAsync(ee);if(!document.body.contains(e))return;r.colorSpace=t.SRGBColorSpace,r.anisotropy=n.capabilities.getMaxAnisotropy();let i=new t.MeshBasicMaterial({map:r,transparent:!0,opacity:.98,depthWrite:!1}),a=new t.Mesh(new t.PlaneGeometry(3.16,4.74),i);a.position.set(0,-.18,-.28),o.add(a)}let x=e=>(b.push(e),s.add(e),e),S=(e,n,r)=>{let i=new t.Vector3(...e),a=new t.Vector3(...n),o=a.clone().sub(i),s=o.length(),c=new t.Mesh(new t.CapsuleGeometry(r,Math.max(.04,s-r*2),10,20),l);return c.position.copy(i.add(a).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new t.Vector3(0,1,0),o.normalize()),x(c)},C=(e,n,r=.012,i=s,a=42)=>{let o=new t.CatmullRomCurve3(e.map(e=>new t.Vector3(...e))),c=new t.Mesh(new t.TubeGeometry(o,a,r,8,!1),n);return i.add(c),c},E=(e,n,r,i=d,a=.5,o=.01)=>{let c=new t.Mesh(new t.TorusGeometry(a,o,10,96),i);return c.position.set(...e),c.scale.set(...n),c.rotation.set(...r),s.add(c),c},D=(e,t,n=.012,r=52)=>{C(e,t,n,s,r),C(e.map(e=>[-e[0],e[1],e[2]]).reverse(),t,n,s,r)},O=(e,t,n,r,i=.008,a=0,o=Math.PI*2,c=72)=>{let l=[];for(let r=0;r<=c;r+=1){let i=a+(o-a)*r/c;l.push([e[0]+Math.cos(i)*t,e[1]+Math.sin(i)*n,e[2]])}return C(l,r,i,s,c)},k=new t.Mesh(new t.SphereGeometry(.78,42,28),c);k.position.set(0,-.26,-.18),k.scale.set(...y),x(k);let A=new t.Mesh(new t.CapsuleGeometry(.42,.74,18,26),c);A.position.set(0,-.9,-.18),A.scale.set(...ie),x(A);let j=new t.Mesh(new t.SphereGeometry(.5,36,24),c);j.position.set(0,-1.42,-.14),j.scale.set(v*1.42,.44,.46),x(j);let M=new t.Mesh(new t.CapsuleGeometry(.18,.36,14,18),c);M.position.set(0,.52,-.08),M.scale.set(1,1,.65),x(M);let N=new t.Mesh(new t.SphereGeometry(.62,52,34),c);N.position.set(0,1.25,.02),N.scale.set(1.08,1.14,.9),x(N),S([-_,.22,-.08],[-1.42,.22,0],h?.065:.085),S([-1.42,.22,0],[-2.03,.2,.12],h?.058:.07),S([_,.22,-.08],[1.42,.22,0],h?.065:.085),S([1.42,.22,0],[2.03,.2,.12],h?.058:.07),S([-v*.45,-1.58,-.12],[-.33,-2.42,-.04],h?.085:.105),S([-.33,-2.42,-.04],[-.28,-3.14,.03],h?.064:.078),S([v*.45,-1.58,-.12],[.33,-2.42,-.04],h?.085:.105),S([.33,-2.42,-.04],[.28,-3.14,.03],h?.064:.078);let P=new t.Mesh(new t.SphereGeometry(.18,28,20),l);P.position.set(-2.16,.19,.15),P.scale.set(h?1.25:1.38,.34,.44),x(P);let ae=P.clone();ae.position.x=2.16,x(ae);let oe=e=>{[-.055,-.018,.018,.055].forEach((t,n)=>{let r=S([e*2.2,.19+t,.2],[e*(2.42+n*.018),.19+t*.82,.22],h?.012:.014);r.material=f});let t=S([e*2.07,.11,.2],[e*2.27,.04,.25],h?.014:.016);t.material=f};oe(-1),oe(1);let F=new t.Mesh(new t.SphereGeometry(.16,24,18),l);F.position.set(-.29,-3.22,.2),F.scale.set(1.22,.34,.62),x(F);let se=F.clone();if(se.position.x=.29,x(se),h){let e=new t.Mesh(new t.SphereGeometry(.65,38,24),l);e.position.set(0,1.22,-.12),e.scale.set(.92,1,.62),x(e)}E([0,1.26,.56],[1.08,1.14,.08],[0,0,0],d,.56,.012),E([-.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],f,.5,.006),E([.55,1.25,.12],[.18,.28,.06],[0,Math.PI/2,0],f,.5,.006),C([[-.35,.92,.6],[-.18,.78,.63],[0,.75,.65],[.18,.78,.63],[.35,.92,.6]],d,.01),C([[.02,1.45,.64],[.12,1.32,.71],[.05,1.19,.66]],f,.008),C([[-2.12,.22,.25],[-1.48,.26,.18],[-_,.25,.1],[-.42,.24,.02],[0,.18,.04],[.42,.24,.02],[_,.25,.1],[1.48,.26,.18],[2.12,.22,.25]],d,.016),C([[-_*.58,.18,.42],[-y[0]*.48,-.38,.46],[-v*.55,-1.17,.42],[-v*.74,-1.44,.34]],d,.014),C([[_*.58,.18,.42],[y[0]*.48,-.38,.46],[v*.55,-1.17,.42],[v*.74,-1.44,.34]],d,.014),C([[-.36,.02,.5],[-.18,-.04,.54],[0,-.06,.55],[.18,-.04,.54],[.36,.02,.5]],f,.008),C([[0,.06,.55],[0,-.35,.57],[0,-.82,.54],[0,-1.16,.48]],f,.008),[-.18,0,.18].forEach(e=>{C([[-.28,-.48+e,.56],[-.1,-.52+e,.59],[.1,-.52+e,.59],[.28,-.48+e,.56]],f,.006)}),C([[-.34,-1.48,.4],[-.45,-2.14,.35],[-.35,-2.86,.3],[-.31,-3.22,.32]],d,.012),C([[.34,-1.48,.4],[.45,-2.14,.35],[.35,-2.86,.3],[.31,-3.22,.32]],d,.012),E([-2.11,.2,.28],[.42,.16,.08],[0,0,0],d,.32,.008),E([2.11,.2,.28],[.42,.16,.08],[0,0,0],d,.32,.008),E([-.31,-3.23,.34],[.48,.16,.08],[0,0,-.05],d,.32,.008),E([.31,-3.23,.34],[.48,.16,.08],[0,0,.05],d,.32,.008);let I=.72,L=.755,ce=h?.92:1.08,le=h?.62:.76,ue=h?.38:.58,de=h?.78:.62;O([0,1.3,I],.47,.6,d,.012,0,Math.PI*2,96),C([[-.28,1.43,L],[-.31,1.22,L],[-.22,1.05,L],[0,.97,L],[.22,1.05,L],[.31,1.22,L],[.28,1.43,L]],f,.007,s,46),O([-.49,1.28,I-.02],.06,.14,d,.006,0,Math.PI*2,36),O([.49,1.28,I-.02],.06,.14,d,.006,0,Math.PI*2,36),C([[0,1.48,L],[.06,1.35,.775],[.01,1.21,L]],f,.006),C([[-.17,1.14,L],[0,1.09,L],[.17,1.14,L]],f,.005),h?D([[-.34,1.83,I-.03],[-.53,1.55,I],[-.55,1.13,I],[-.36,.86,I]],f,.009,48):C([[-.32,1.65,L],[-.12,1.73,L],[.12,1.73,L],[.32,1.65,L]],f,.008),D([[-.18,.86,I],[-.23,.61,I],[-.45,.42,I],[-ce,.31,I]],d,.012,44),D([[-.14,.72,L],[-.3,.54,L],[-.58,.43,L],[-.88,.34,L]],f,.007,38),D([[-ce,.34,I],[-1.22,.31,I],[-1.62,.26,I],[-2.05,.22,I],[-2.34,.19,I]],d,.014,60),D([[-.82,.13,I],[-1.2,.11,I],[-1.62,.11,I],[-2.05,.13,I],[-2.33,.16,I]],d,.012,60),D([[-1.34,.3,L],[-1.43,.19,L],[-1.34,.1,L]],f,.005,24),[-1,1].forEach(e=>{O([e*2.39,.18,I],.17,.075,d,.007,0,Math.PI*2,34),[-.05,-.017,.017,.05].forEach(t=>{C([[e*2.27,.18+t,L],[e*2.49,.18+t*.85,L]],f,.004,s,12)})}),D([[-le,.18,I],[-.6,-.18,I],[-ue,-.76,I],[-.5,-1.08,I],[-de,-1.42,I]],d,.015,58),C([[-.42,.12,L],[-.2,.02,L],[0,-.01,L],[.2,.02,L],[.42,.12,L]],f,.007,s,34),h?(O([-.24,-.13,L],.2,.12,f,.005,Math.PI*.05,Math.PI*1.02,34),O([.24,-.13,L],.2,.12,f,.005,Math.PI*-.02,Math.PI*.95,34)):C([[-.48,-.08,L],[-.2,-.16,L],[0,-.14,L],[.2,-.16,L],[.48,-.08,L]],f,.006),C([[0,.05,L],[0,-.38,L],[0,-.86,L],[0,-1.24,L]],f,.007),[-.12,-.38,-.64].forEach(e=>{C([[-.28,e,L],[-.1,e-.04,L],[.1,e-.04,L],[.28,e,L]],f,.005,s,28)}),C([[-.35,-1.18,L],[-.14,-1.38,L],[0,-1.48,L],[.14,-1.38,L],[.35,-1.18,L]],f,.006,s,32),D([[-de*.58,-1.42,I],[-.58,-1.92,I],[-.54,-2.42,I],[-.42,-2.94,I],[-.34,-3.2,I]],d,.013,62),D([[-.16,-1.52,I],[-.19,-2.03,I],[-.18,-2.52,I],[-.22,-3.06,I]],d,.011,58),D([[-.45,-2.28,L],[-.34,-2.39,L],[-.22,-2.29,L]],f,.005,24),D([[-.24,-3.18,I],[-.52,-3.22,I],[-.62,-3.31,I],[-.4,-3.39,I],[-.18,-3.34,I]],d,.008,38),[-1,1].forEach(e=>{[-.08,-.02,.04].forEach(t=>{C([[e*.37,-3.29+t,L],[e*.6,-3.31+t*.5,L]],f,.0035,s,8)})}),b.forEach(e=>{let n=new t.Mesh(e.geometry,re);n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale).multiplyScalar(1.012),s.add(n)});let R=new t.Group;R.position.set(0,g?1.52:1.3,g?.42:.62),R.rotation.set(g?-.02:-.04,g?-.05:-.18,.02),R.scale.setScalar(g?.22:.82),a.add(R);let z=new t.Mesh(new t.SphereGeometry(.7,56,36),u),fe=new t.Vector3(1.22,.78,.58);z.scale.copy(fe),z.material.opacity=.08,R.add(z);let B=[],V=(e,n,r,i,a,o=.035)=>{let s=new t.MeshStandardMaterial({color:e,emissive:n,roughness:.36,metalness:.08,transparent:!0,opacity:.96}),c=new t.Mesh(new t.SphereGeometry(.34,48,30),s);return c.position.set(...r),c.scale.set(...i),R.add(c),B.push({mesh:c,phase:a,pulse:o,baseScale:i}),c};V(15952548,7280446,[-.42,.12,.08],[1.28,.86,.68],0),V(9098063,2975772,[.05,.29,0],[1.12,.75,.62],.7),V(16181340,7694870,[.16,.14,.2],[.38,.92,.34],1.25,.025),V(9402584,3154015,[-.16,-.23,.12],[1.16,.55,.62],1.8),V(6147297,1464426,[.48,.02,-.04],[.78,.73,.58],2.25),V(16749179,7548963,[.31,-.47,-.1],[.72,.38,.46],2.75,.018);let H=new t.Mesh(new t.CapsuleGeometry(.09,.5,14,22),new t.MeshStandardMaterial({color:16756876,emissive:6237730,roughness:.38,metalness:.04,transparent:!0,opacity:.94}));H.position.set(.36,-.72,-.08),H.rotation.z=-.18,R.add(H),B.push({mesh:H,phase:3.2,pulse:.012,baseScale:[1,1,1]});let U=new t.Mesh(new t.SphereGeometry(.12,28,18),new t.MeshStandardMaterial({color:16767352,emissive:8082709,roughness:.28,metalness:.12,transparent:!0,opacity:.95}));U.position.set(-.12,-.2,.44),U.scale.set(1.5,.5,.62),R.add(U),B.push({mesh:U,phase:3.8,pulse:.055,baseScale:[1.5,.5,.62]});let W=new t.Mesh(new t.SphereGeometry(.1,26,18),new t.MeshStandardMaterial({color:6936750,emissive:1530953,roughness:.25,metalness:.14,transparent:!0,opacity:.96}));W.position.set(-.5,.18,.43),W.scale.set(1.15,.82,.62),R.add(W),B.push({mesh:W,phase:4.2,pulse:.065,baseScale:[1.15,.82,.62]});let G=(e,t=p,n=.01,r=36)=>C(e,t,n,R,r);G([[-.76,.02,.29],[-.6,.38,.28],[-.2,.54,.24],[.28,.48,.17],[.68,.18,.1],[.64,-.12,.12],[.36,-.35,.16],[-.08,-.42,.24],[-.52,-.24,.3],[-.76,.02,.29]],te,.01,60),G([[.06,.52,.31],[.02,.32,.36],[.04,.12,.38],[.1,-.05,.36]],p,.011),G([[-.72,.27,.37],[-.52,.39,.41],[-.28,.32,.42],[-.14,.44,.39]]),G([[-.72,.08,.42],[-.5,.18,.45],[-.26,.1,.46],[-.08,.2,.43]]),G([[-.65,-.1,.4],[-.42,-.02,.46],[-.2,-.08,.48],[-.02,.03,.44]]),G([[-.52,-.29,.36],[-.26,-.22,.44],[0,-.28,.43],[.18,-.18,.35]]),G([[-.22,.5,.33],[.02,.4,.38],[.24,.44,.3],[.44,.3,.24]]),G([[.1,.29,.42],[.28,.23,.43],[.44,.14,.35],[.6,.03,.24]]),G([[.18,.02,.42],[.36,-.02,.4],[.5,-.13,.28],[.57,-.24,.16]]),G([[-.52,-.31,.3],[-.3,-.39,.37],[-.05,-.37,.36],[.18,-.43,.25]]),[-.16,-.08,0,.08].forEach(e=>{G([[.04,-.47+e,.27],[.24,-.43+e,.26],[.48,-.45+e,.12]],p,.006,22)});let K=new t.Mesh(new t.TorusGeometry(1.22,.008,12,110),m);K.position.set(-.2,.02,.42),K.rotation.set(Math.PI/2.35,.18,0),a.add(K);let q=K.clone();q.position.x=.2,q.rotation.y=-.18,a.add(q);let J=new t.Mesh(new t.TorusGeometry(1.72,.008,12,150),m);J.rotation.x=Math.PI/2,a.add(J);let Y=new t.Group;Y.position.set(0,-2.73,.1),Y.scale.setScalar(.92),r.add(Y);let pe=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.44,depthWrite:!1}),me=new t.MeshBasicMaterial({color:16767352,transparent:!0,opacity:.38,depthWrite:!1});[.72,1.18,1.62].forEach((e,n)=>{let r=new t.Mesh(new t.TorusGeometry(e,n===1?.01:.006,10,160),n===1?me:pe);r.rotation.x=Math.PI/2,Y.add(r)});let he=new t.LineBasicMaterial({color:10482909,transparent:!0,opacity:.22}),X=[];for(let e=0;e<24;e+=1){let t=Math.PI*2*e/24;X.push(Math.cos(t)*.34,0,Math.sin(t)*.34),X.push(Math.cos(t)*1.72,0,Math.sin(t)*1.72)}let ge=new t.BufferGeometry;ge.setAttribute(`position`,new t.Float32BufferAttribute(X,3)),Y.add(new t.LineSegments(ge,he));let _e=new t.BufferGeometry,Z=new Float32Array(540);for(let e=0;e<Z.length;e+=3)Z[e]=(Math.random()-.5)*4.8,Z[e+1]=(Math.random()-.5)*4.2,Z[e+2]=(Math.random()-.5)*3.4;_e.setAttribute(`position`,new t.BufferAttribute(Z,3));let Q=new t.Points(_e,new t.PointsMaterial({color:15190667,size:.018,transparent:!0,opacity:.58}));r.add(Q),r.add(new t.AmbientLight(14602926,1.5));let ve=new t.PointLight(16767352,4.2,10);ve.position.set(2.6,3.2,3.4),r.add(ve);let ye=new t.PointLight(6936750,2.3,9);ye.position.set(-2.8,.4,2.2),r.add(ye);let be=()=>{let t=e.getBoundingClientRect(),r=Math.max(1,t.width),a=Math.max(1,t.height);n.setSize(r,a,!1),i.aspect=r/a,i.updateProjectionMatrix()},$=0,xe=new ResizeObserver(()=>{window.cancelAnimationFrame($),$=window.requestAnimationFrame(be)});xe.observe(e),be();let Se=0,Ce=!0,we=0,Te=(e=0)=>{if(!Ce)return;we||=e;let t=e-we;if(!w.reducedMotion){let n=g?Math.sin(t*7e-4)*.045:t*42e-5%(Math.PI*2);a.rotation.y=n,Y.rotation.y=-n*1.3,R.rotation.y=g?t*.0012%(Math.PI*2):-.18+Math.sin(t*6e-4+.8)*.08,z.scale.copy(fe).multiplyScalar(1+Math.sin(e*.0022)*.035),B.forEach(({mesh:t,baseScale:n,phase:r,pulse:i})=>{let a=1+Math.sin(e*.0024+r)*i;t.scale.set(n[0]*a,n[1]*a,n[2]*a)}),K.rotation.z+=.003,q.rotation.z-=.003,J.position.y=-1.04+(Math.sin(e*.0017)+1)/2*2.55,Q.rotation.y-=.0015}n.render(r,i),Se=window.requestAnimationFrame(Te)};Te(),T=()=>{Ce=!1,window.cancelAnimationFrame(Se),window.cancelAnimationFrame($),xe.disconnect(),n.dispose(),_e.dispose(),e.innerHTML=``}}catch{e.innerHTML=`
      <div class="scene-fallback">
        <div class="fallback-body" aria-label="Symbolic body and mind map"></div>
      </div>
    `}}}function $(){T&&=(T(),null);let e={intro:ae,ori:oe,subjects:F,goals:se,realms:I,memory:L,focus:ce,language:le,logic:ue,reflection:de,report:R,quest:z,path:fe}[w.screen];h.innerHTML=e(),B(),V(),w.screen===`intro`&&be()}E(`onboarding_started`),$();