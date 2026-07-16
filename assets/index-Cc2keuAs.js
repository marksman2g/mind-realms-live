(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let a=[t(e),n(e),r(e),i(e)].sort((e,t)=>e.priority-t.priority),u=a.filter(e=>e.hasEvidence),d=u[0]??a[0],f=[...u.length?u:a].sort((e,t)=>t.score-e.score)[0],p=o(u.length,a.length),m=[e.goal,e.secondaryGoal,e.freeGoal].join(` `).toLowerCase(),h=m.includes(`super learner`)||m.includes(`faster`)||m.includes(`work`),g=h?`18-25 minutes a day`:`12-15 minutes a day`,_=h?`5 focused days, 1 mixed challenge day, 1 rest or reflection day`:`4 focused days, 1 mixed challenge day, 2 lighter recovery days`;return{domains:a,primaryGrowth:d,strongestSignal:f,timeline:l(d,f,h),dailyMinutes:g,weeklyRhythm:_,confidenceNote:ee(e,f),assessmentStatus:p,nextSessionFocus:s(d,p),learningProtocol:c(d,p)}}function t(e){let t=e.memory.totalPositions;return a(`Memory`,u((t?e.memory.correctPositions/t:0)-e.memory.delayErrors*.055-e.memory.distractionErrors*.04),t,t?`${e.memory.correctPositions}/${t} positions held; delay errors: ${e.memory.delayErrors}; distraction errors: ${e.memory.distractionErrors}.`:`Memory trial has not been completed yet.`,t?e.memory.delayErrors>0?`Train delayed recall with anchors, short retrieval breaks, and one same-day retention check.`:e.memory.distractionErrors>0?`Train recall while filtering distraction, then retest after a short interruption.`:`Increase sequence load gently and check whether recall still holds tomorrow.`:`Complete the Memory Vault trial so Ori can measure recall, delay, and distraction recovery.`)}function n(e){let t=e.focus.total,n=u((t?e.focus.correct/t:0)-e.focus.switchErrors*.08-e.focus.decoyTaps*.055-e.focus.missedTargets*.04),r=e.focus.responseTimes.length?Math.round(e.focus.responseTimes.reduce((e,t)=>e+t,0)/e.focus.responseTimes.length):void 0;return a(`Focus`,n,t,t?`${e.focus.correct}/${t} choices correct; missed targets: ${e.focus.missedTargets}; decoy taps: ${e.focus.decoyTaps}; switch errors: ${e.focus.switchErrors}${r?`; average tap ${r} ms.`:`.`}`:`Focus pulse has not been completed yet.`,t?e.focus.switchErrors>0?`Train rule switching: pause, name the new rule, then act.`:e.focus.decoyTaps>0?`Train impulse control by separating speed from accuracy.`:`Extend focus endurance in small rounds without adding pressure.`:`Complete the Focus Tower pulse so Ori can measure attention, inhibition, and rule switching.`)}function r(e){let t=e.reading.total,n=u((t?e.reading.correct/t:0)-(e.reading.missedInference?.13:0)-(e.reading.reread?.03:0)),r=[e.reading.reread?`reread support used`:``,e.reading.audio?`audio support used`:``].filter(Boolean).join(`; `);return a(`Reading`,n,t,t?`${e.reading.correct}/${t} comprehension answers correct${r?`; ${r}.`:`.`}`:`Reading trial has not been completed yet.`,t?e.reading.missedInference?`Train inference by separating what the text says from what it implies.`:`Add retention checks after reading so comprehension does not disappear after the passage.`:`Complete the Language Grove passage so Ori can measure literal meaning, sequence, inference, and main idea.`)}function i(e){let t=e.math.total;return a(`Math`,u((t?e.math.correct/t:0)-(e.math.missedFraction?.1:0)-(e.math.missedBalance?.08:0)),t,t?`${e.math.correct}/${t} logic and numeracy puzzles correct${e.math.missedFraction?`; fraction model needs support`:``}${e.math.missedBalance?`; balance reasoning needs support`:``}.`:`Logic and math trial has not been completed yet.`,t?e.math.missedFraction?`Train visual fraction meaning before adding speed or notation.`:e.math.missedBalance?`Train balance equations with visual gates before symbolic equations.`:`Move into mixed patterns, balance, and real-world number sense.`:`Complete the Logic Forge puzzles so Ori can measure number sense, patterns, and balance reasoning.`)}function a(e,t,n,r,i){let a=n===0?`needs more evidence`:t>=.78?`strong early signal`:`trainable growth edge`,o=n===0?99:1-t;return{key:e,score:t,scoreLabel:`${Math.round(t*100)}%`,level:a,priority:o,hasEvidence:n>0,evidence:r,nextStep:i}}function o(e,t){return e===0?{completedDomains:e,totalDomains:t,confidence:`low`,coverageLabel:`Preview only`,message:`Ori has not collected enough task evidence yet. The next move is to complete the baseline before trusting a timeline.`}:e<t?{completedDomains:e,totalDomains:t,confidence:`medium`,coverageLabel:`${e}/${t} systems checked`,message:`This is a useful first read, but Ori should finish the remaining systems before making stronger claims.`}:{completedDomains:e,totalDomains:t,confidence:`high`,coverageLabel:`Full first baseline`,message:`All first-session systems have evidence. Ori can now recommend a focused starting path and retest it tomorrow.`}}function s(e,t){return t.completedDomains===0?`Complete the four-part baseline: memory, focus, reading, and logic. Keep it short so the learner experiences a game, not a school test.`:t.completedDomains<t.totalDomains?`Finish the missing baseline checks, then retest ${e.key.toLowerCase()} to confirm whether it is truly the first growth edge.`:`Start with ${e.key}: ${e.nextStep}`}function c(e,t){return[{title:`Ready`,action:`Check energy, stress, sleep, and confidence in one tap before the lesson starts.`,why:`This keeps the app from blaming skill when the real issue is fatigue, pressure, or overload.`},{title:`Show`,action:`Give one clear example or model before asking the learner to perform alone.`,why:`A worked example lowers unnecessary mental load, especially for a new or anxious learner.`},{title:`Retrieve`,action:t.completedDomains===0?`Finish one short baseline round, then stop before the learner feels tested.`:e.nextStep,why:`Trying to recall or solve before seeing the answer turns assessment into learning.`},{title:`Space`,action:`Bring the same skill back later today or tomorrow with a smaller prompt.`,why:`Spacing helps prove what stayed instead of rewarding only short-term performance.`},{title:`Transfer`,action:`Ask the learner to explain or use the skill in a new, practical situation.`,why:`A super learner does not just pass a mini-game; they carry the skill into real life.`}]}function l(e,t,n){if(!e.hasEvidence)return[{window:`Session 1`,title:`Complete the baseline`,focus:`Play one short round each for memory, focus, reading, and logic so Ori can stop guessing and start ranking real signals.`},{window:`Session 2`,title:`Retest what looked fragile`,focus:`Repeat the first growth edge after a break to see whether the pattern holds beyond one moment.`},{window:`Week 1`,title:`Start the first training loop`,focus:`Use retrieval, spacing, and reflection to turn the assessment into a lesson the learner can feel immediately.`},{window:`Weeks 2-3`,title:`Personalize the path`,focus:`Blend the confirmed growth edge with focus, memory, reading, logic, and confidence work.`}];let r=n?`Weeks 7-8`:`Week 5`;return[{window:`Week 1`,title:`Confirm the baseline`,focus:`Retest ${e.key.toLowerCase()} and ${t.key.toLowerCase()} so Ori can separate a real pattern from a one-day result.`},{window:`Weeks 2-3`,title:`Train ${e.key}`,focus:e.nextStep},{window:n?`Weeks 4-6`:`Weeks 4`,title:`Mix the skill under pressure`,focus:`Blend ${e.key.toLowerCase()} with focus, recall, and reading load so the skill transfers instead of staying isolated.`},{window:r,title:`Prove transfer`,focus:`Use a real-world challenge: learn a short article, solve a practical problem, explain it back, and retrieve it the next day.`}]}function ee(e,t){return t.hasEvidence?e.reflectionStrongest?e.reflectionStrongest===t.key?`Your self-read matched the strongest early signal: ${t.key}.`:`You felt strongest in ${e.reflectionStrongest}, while Ori's strongest early signal was ${t.key}. That gap is useful, not bad; it helps train confidence calibration.`:`Ori still needs one self-reflection check to compare confidence with task signals.`:`Ori needs at least one completed task before comparing confidence with performance.`}function u(e){return Math.max(0,Math.min(1,e))}var d=[{id:`memory`,title:`Memory and retention`,realm:`Memory Vault`,status:`active`,summary:`Remembering instructions, facts, names, sequences, and what stays after time passes.`,helpsWith:[`working memory`,`delayed recall`,`visual memory`,`verbal memory`,`memory anchors`],assessmentSignals:[`sequence recall`,`delay effect`,`distraction effect`,`error position`],aliases:[`memory`,`remembering`,`retention`,`recall`,`forgetting`,`recall repetition`,`retrieval practice`,`spaced repetition`]},{id:`focus`,title:`Focus and executive control`,realm:`Focus Tower`,status:`active`,summary:`Staying with the right signal, ignoring distractions, controlling pace, and switching rules.`,helpsWith:[`sustained attention`,`selective attention`,`inhibitory control`,`rule switching`,`pace control`],assessmentSignals:[`missed targets`,`decoy taps`,`response-time drift`,`rule-switch recovery`],aliases:[`focus`,`attention`,`attention sculpting`,`executive function`,`executive control`,`distraction`,`distraction blocking`,`concentration`]},{id:`readiness`,title:`Mind-body readiness and practice loops`,realm:`Readiness Gate`,status:`active`,summary:`Aligning sleep, movement, nutrition awareness, timing, input quality, reflection, and playful practice so the learner is ready to encode and retain.`,helpsWith:[`sleep mastery`,`movement integration`,`practice timing`,`mindful encoding`,`input curation`,`nutrition awareness`,`outcome tracking`,`playful practice`],assessmentSignals:[`readiness check-in`,`sleep consistency`,`energy rating`,`movement break effect`,`input overload`,`practice timing response`,`reflection follow-through`,`outcome trend`],aliases:[`readiness`,`sleep`,`sleep mastery`,`movement`,`movement integration`,`exercise`,`nutrition`,`neuro nutrition`,`food`,`timing`,`timing strategies`,`input curation`,`mindful encoding`,`outcome tracking`,`optimized outcome tracking`,`practice loop`,`playful practice`,`recovery`,`energy`,`fatigue`,`tired`,`environment`]},{id:`reading-comprehension`,title:`Reading comprehension`,realm:`Language Grove`,status:`active`,summary:`Understanding what text says, what it implies, what matters most, and what the learner remembers later.`,helpsWith:[`literal meaning`,`sequencing`,`inference`,`main idea`,`summarizing`],assessmentSignals:[`reading time`,`rereading`,`choice accuracy`,`inference misses`,`retention after reading`],aliases:[`reading`,`comprehension`,`reading comprehension`,`understanding text`,`books`]},{id:`language-vocabulary`,title:`Language and vocabulary`,realm:`Language Grove`,status:`active`,summary:`Building word meaning, sentence understanding, listening comprehension, and background knowledge.`,helpsWith:[`vocabulary`,`syntax`,`listening comprehension`,`background knowledge`],assessmentSignals:[`unknown word handling`,`audio support effect`,`sentence complexity errors`],aliases:[`language`,`vocabulary`,`words`,`listening`,`sentences`]},{id:`math`,title:`Math and numeracy`,realm:`Logic Forge`,status:`active`,summary:`Number sense, arithmetic, fractions, balance reasoning, and confidence with quantitative tasks.`,helpsWith:[`number sense`,`arithmetic fluency`,`fractions`,`ratios`,`algebra readiness`],assessmentSignals:[`math accuracy`,`visual support effect`,`timer sensitivity`,`concept versus pace errors`],aliases:[`math`,`numeracy`,`numbers`,`arithmetic`,`fractions`,`algebra`]},{id:`problem-solving`,title:`Logic and problem solving`,realm:`Logic Forge`,status:`active`,summary:`Seeing patterns, representing problems, testing rules, and adapting when a solution path changes.`,helpsWith:[`pattern recognition`,`adaptive problem solving`,`spatial reasoning`,`multistep thinking`],assessmentSignals:[`rule discovery`,`strategy switching`,`repeated failed action`,`transfer to new puzzles`],aliases:[`logic`,`reasoning`,`problem solving`,`puzzles`,`patterns`]},{id:`strategy`,title:`Learning strategy and metacognition`,realm:`Strategy Observatory`,status:`active`,summary:`Helping learners plan, monitor understanding, choose strategies, and know when they need support.`,helpsWith:[`goal setting`,`confidence calibration`,`error analysis`,`help seeking`,`strategy choice`],assessmentSignals:[`goal specificity`,`confidence prediction`,`reflection accuracy`,`hint timing`],aliases:[`strategy`,`metacognition`,`learning strategy`,`study skills`,`planning`,`reflection`,`loop reflection`]},{id:`confidence`,title:`Confidence and emotional learning state`,realm:`Inner Compass`,status:`active`,summary:`Reducing shame, noticing pressure, recovering after mistakes, and building a healthier learner identity.`,helpsWith:[`math anxiety`,`reading shame`,`frustration recovery`,`persistence`,`motivation`],assessmentSignals:[`self-reported feeling`,`quit point`,`recovery after error`,`pressure sensitivity`],aliases:[`confidence`,`anxiety`,`shame`,`motivation`,`emotions`,`frustration`]},{id:`speed-accuracy`,title:`Learning speed with accuracy`,realm:`Tempo Arena`,status:`planned`,summary:`Getting faster only after understanding is stable, so speed does not destroy comprehension.`,helpsWith:[`fluency`,`pacing`,`endurance`,`speed accuracy balance`],assessmentSignals:[`time trend`,`accuracy drop under speed`,`pacing choices`],aliases:[`speed`,`fluency`,`faster learning`,`pace`,`accuracy`]},{id:`transfer`,title:`Transfer to real life`,realm:`Worldgate`,status:`planned`,summary:`Checking whether skills used in the app help with real reading, work, studying, money, and daily memory.`,helpsWith:[`work learning`,`real-world reading`,`daily memory`,`self-teaching`,`test preparation`],assessmentSignals:[`outside-app check-ins`,`capstone tasks`,`new-context performance`],aliases:[`transfer`,`real life`,`work`,`daily life`,`self teaching`,`test prep`]}];function f(){let e=d.filter(e=>e.status===`active`),t=d.filter(e=>e.status===`planned`),n=e.map(e=>`${e.title}: ${e.summary}`).join(` `),r=t.map(e=>e.title).join(`, `);return`Mind Realms is being designed to help with ${e.map(e=>e.title).join(`, `)}. ${n} Planned expansion areas include ${r}. If a new topic is already in the map, the app will ask whether you meant to research it more deeply or whether it was added by mistake.`}function p(e){let t=m(e);if(t)return d.find(e=>[e.id,e.title,e.realm,...e.aliases].some(e=>{let n=m(e);return t===n||t.includes(n)||n.includes(t)}))}function m(e){return e.toLowerCase().replace(/&/g,`and`).replace(/[^a-z0-9 ]+/g,` `).replace(/\s+/g,` `).trim()}var h=`modulepreload`,g=function(e){return`/mind-realms-live/`+e},_={},te=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=g(t,n),t=s(t),t in _)return;_[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:h,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},v=document.querySelector(`#app`);if(!v)throw Error(`App root was not found.`);var y=v,b=[`intro`,`ori`,`subjects`,`goals`,`realms`,`memory`,`focus`,`language`,`logic`,`reflection`,`report`,`quest`,`path`],ne=[`Remember what I learn`,`Read and understand faster`,`Get stronger at math`,`Focus without drifting`,`Learn faster for work`,`Prepare for a test`,`Become a super learner`],x=[`Build confidence`,`Stop forgetting instructions`,`Improve problem solving`,`Think clearly under pressure`,`Read books and retain them`,`Learn like I never learned in school`],S=[[`Sun`,`Key`,`Wave`],[`Gate`,`Sun`,`Crown`,`Key`],[`Leaf`,`Wave`,`Gate`,`Crown`,`Sun`]],C=[`Sun`,`Key`,`Wave`,`Gate`,`Crown`,`Leaf`],w=[{label:`Gold Star`,target:!0},{label:`Silver Moon`,target:!1},{label:`Gold Star`,target:!0},{label:`Blue Gate`,target:!1},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Gold Star`,target:!0},{label:`Cracked Star`,target:!1,decoy:!0},{label:`Moon`,target:!0},{label:`Moon`,target:!0},{label:`Sun`,target:!1},{label:`Sun`,target:!0,afterSwitch:!0},{label:`Moon`,target:!1,afterSwitch:!0},{label:`Sun`,target:!0,afterSwitch:!0}],T=[{id:`literal`,prompt:`Which object did Mara carry through the rain?`,options:[`A silver seed`,`A broken lantern`,`A sleeping bird`],answer:`A silver seed`},{id:`sequence`,prompt:`What had to happen before Mara opened her hand?`,options:[`The thunder had to stop`,`The map had to burn`,`The seed had to glow`],answer:`The thunder had to stop`},{id:`inference`,prompt:`Why did Mara wait?`,options:[`The map warned the seed would wake only when the sky became quiet`,`She forgot what she was carrying`,`She wanted the rain to wash the map away`],answer:`The map warned the seed would wake only when the sky became quiet`},{id:`main`,prompt:`What is this moment mostly about?`,options:[`Following a warning carefully`,`Escaping a dangerous animal`,`Learning how to draw a map`],answer:`Following a warning carefully`}],E=[{id:`make10`,prompt:`Choose the pair of stones that makes 10.`,options:[`4 and 6`,`2 and 9`,`7 and 4`,`5 and 6`],answer:`4 and 6`},{id:`pattern`,prompt:`Complete the symbol pattern: 3, 6, 12, 24, ?`,options:[`30`,`36`,`48`,`72`],answer:`48`},{id:`fraction`,prompt:`Which piece matches one half?`,options:[`Two of four equal parts`,`One of three equal parts`,`Three of four equal parts`,`One of six equal parts`],answer:`Two of four equal parts`},{id:`balance`,prompt:`The gate shows: Box + 3 = 8. What is hidden in the box?`,options:[`3`,`4`,`5`,`8`],answer:`5`}],re=()=>({screen:`intro`,reducedMotion:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,bodyForm:`male`,audioStatus:`Audio summary ready.`,topicDraft:``,researchQueue:[],primaryGoal:``,secondaryGoal:``,freeGoal:``,events:[],memory:{phase:`intro`,round:0,input:[],correctPositions:0,totalPositions:0,errorPositions:[],delayErrors:0,distractionErrors:0,feedback:``},focus:{phase:`intro`,index:0,presentedAt:0,missedTargets:0,decoyTaps:0,correct:0,total:0,switchErrors:0,responseTimes:[],reflection:``},language:{index:0,answers:[],startedAt:0,reread:!1,audio:!1},logic:{index:0,answers:[]},reflection:{feeling:``,strongest:``},firstQuestComplete:!1}),D=re(),O=null,k=(e,t)=>{D.events.push({type:e,screen:D.screen,timestamp:Date.now(),payload:t})},A=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e),ie=()=>{let e=b.indexOf(D.screen);e<b.length-1&&(D.screen=b[e+1],k(`screen_viewed`,{screen:D.screen}),$())},ae=e=>{D.screen=e,k(`screen_viewed`,{screen:e}),$()},oe=()=>{M(!1),D=re(),k(`prototype_reset`),$()};function j(){if(!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){D.audioStatus=`This browser cannot play voice audio yet. Open in Chrome or a mobile browser to hear it spoken.`,k(`subject_audio_unavailable`),$();return}window.speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(f());e.rate=.94,e.pitch=.92,e.onend=()=>{D.audioStatus=`Audio summary finished.`,k(`subject_audio_finished`),$()},e.onerror=()=>{D.audioStatus=`Audio did not play in this browser. Open in Chrome or a mobile browser to hear it spoken.`,k(`subject_audio_error`),$()},D.audioStatus=`Playing subject summary...`,k(`subject_audio_started`,{subjectCount:d.length}),$(),window.speechSynthesis.speak(e)}function M(e=!0){`speechSynthesis`in window&&window.speechSynthesis.cancel(),D.audioStatus=`Audio summary stopped.`,k(`subject_audio_stopped`),e&&$()}function se(e){let t=D.topicDraft.trim();if(!t){D.topicNotice={kind:`empty`,message:`Type a topic first, then I can check whether it is already in the learning map.`},$();return}let n=p(t);if(n&&!e){D.topicNotice={kind:`duplicate`,subjectTitle:n.title,message:`Hey, you added this already: ${n.title}. Are you purposely trying to research more to get a more in-depth feel, or did you kind of make a mistake?`},k(`duplicate_topic_detected`,{query:t,subject:n.id}),$();return}let r=n?`Deep research: ${n.title}`:`New topic research: ${t}`;D.researchQueue.includes(r)||D.researchQueue.push(r),D.topicNotice={kind:`queued`,subjectTitle:n?.title,message:n?`${n.title} is already in the map, so I added a deeper research pass to the queue.`:`${t} is not in the current map yet, so I added it to the future research queue.`},k(`topic_research_queued`,{query:t,existingSubject:n?.id}),$()}var N=e=>{let t=b.indexOf(D.screen),n=b.map((e,n)=>`<span class="step-dot ${n<=t?`active`:``}"></span>`).join(``);return`
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
  `},ce=()=>{let e=D.bodyForm===`female`?`Female`:`Male`;return N(`
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
          <span>${`${e} fully 3D body: brain, labels, platform rotate together`}</span>
          <div class="body-form-toggle" aria-label="Body form">
            <button class="small-button ${D.bodyForm===`female`?`selected`:``}" data-body-form="female">Female</button>
            <button class="small-button ${D.bodyForm===`male`?`selected`:``}" data-body-form="male">Male</button>
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
`),F=()=>{let e=d.filter(e=>e.status===`active`),t=d.filter(e=>e.status===`planned`),n=f(),r=e.map(e=>`
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
  `)},le=()=>N(`
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
            <div class="choice-grid">${ne.map(e=>`<button class="choice-button ${D.primaryGoal===e?`selected`:``}" data-goal="${A(e)}">${A(e)}</button>`).join(``)}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Secondary signal</h3>
            <div class="choice-grid">${x.map(e=>`<button class="choice-button ${D.secondaryGoal===e?`selected`:``}" data-secondary="${A(e)}">${A(e)}</button>`).join(``)}</div>
            <textarea class="text-field" id="freeGoal" placeholder="Tell Ori what you want to become.">${A(D.freeGoal)}</textarea>
            <div class="actions">
              <button class="primary-button" data-action="next">${D.primaryGoal?`Open the realms`:`Choose a goal first`}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `),ue=()=>N(`
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
  `),de=()=>{let e=S[D.memory.round]??[],t=C.map(e=>`<button class="rune-button" data-rune="${e}">${e}</button>`).join(``),n=`Round ${Math.min(D.memory.round+1,S.length)} of ${S.length}`,r=``;return r=D.memory.phase===`intro`?`
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
          <p class="feedback">${J()}</p>
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
  `)},fe=()=>{let e=w[D.focus.index],t=``;return t=D.focus.phase===`intro`?`
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
          <p class="feedback">${ve()}</p>
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
  `)},I=()=>{let e=T[D.language.index],t=D.language.answers.length;return N(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Question ${t+1} of ${T.length}</div>
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
          <p class="lede">${ye()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Enter Logic Forge</button>
        </div>
      </section>
    `)},L=()=>{let e=E[D.logic.index];return N(e?`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Puzzle ${D.logic.index+1} of ${E.length}</div>
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
          <p class="lede">${be()}</p>
        </div>
        <div class="actions">
          <button class="primary-button" data-action="next">Open the mirror</button>
        </div>
      </section>
    `)},pe=()=>N(`
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
  `),R=()=>{let t=e(Y()),n=xe(t),r=t.assessmentStatus.completedDomains?t.primaryGrowth.key:`Needs baseline`,i=t.assessmentStatus.completedDomains?t.strongestSignal.key:`Unknown yet`,a=t.domains.map(e=>`
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
      `).join(``),o=t.learningProtocol.map(e=>`
        <article class="protocol-step">
          <strong>${A(e.title)}</strong>
          <p>${A(e.action)}</p>
          <span>${A(e.why)}</span>
        </article>
      `).join(``),s=t.timeline.map(e=>`
        <article class="timeline-step">
          <strong>${A(e.window)}</strong>
          <h3>${A(e.title)}</h3>
          <p>${A(e.focus)}</p>
        </article>
      `).join(``);return N(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">First signal map</div>
        <h2>Ori has your first learning signals.</h2>
        <p class="lede">This is an estimate from one short trial, not a diagnosis. The next session checks what stayed.</p>
      </div>
      <div class="metric-grid">
        ${n.map(e=>`
              <div class="metric">
                <strong>${e.label}</strong>
                <span>${e.value}</span>
              </div>
            `).join(``)}
      </div>
      <div class="panel">
        <div class="panel-inner">
          <div class="assessment-note">
            <span>${A(t.assessmentStatus.coverageLabel)}</span>
            <strong>${A(t.assessmentStatus.confidence)} confidence</strong>
            <p>${A(t.assessmentStatus.message)}</p>
          </div>
          <div class="profile-summary">
            <div>
              <span>Primary growth edge</span>
              <strong>${r}</strong>
            </div>
            <div>
              <span>Strongest early signal</span>
              <strong>${i}</strong>
            </div>
            <div>
              <span>Suggested rhythm</span>
              <strong>${t.dailyMinutes}</strong>
            </div>
          </div>
          <div class="next-focus">
            <span>Next session focus</span>
            <strong>${A(t.nextSessionFocus)}</strong>
          </div>
          <p class="lede">${A(t.weeklyRhythm)}.</p>
          <p class="footer-note">${A(t.confidenceNote)}</p>
        </div>
      </div>
      <div class="profile-grid">
        ${a}
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>How Ori teaches next</h3>
          <p class="lede">The learning loop stays simple enough to feel like play, but each step is doing real training work.</p>
          <div class="protocol-grid">${o}</div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>First timeline</h3>
          <p class="lede">This is the first path estimate. Ori should retest it with retention, focus endurance, and transfer tasks before making stronger claims.</p>
          <div class="timeline-grid">
            ${s}
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
  `)},z=()=>{let e=D.firstQuestComplete?`First quest complete. You improved the path by practicing one strategy immediately.`:`Ori chooses one guided quest from your strongest growth signal. This prototype simulates that first personalized lesson.`;return N(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Free proof quest</div>
        <h2>${Q()}</h2>
        <p class="lede">${e}</p>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>${Q()}</h3>
          <p class="lede">${Te()}</p>
          <div class="actions">
            <button class="primary-button" data-action="complete-quest">${D.firstQuestComplete?`Quest complete`:`Complete guided quest`}</button>
            <button class="secondary-button" data-action="next">Preview my path</button>
          </div>
        </div>
      </div>
    </section>
  `)},B=()=>{let t=e(Y()),n=t.assessmentStatus.completedDomains?t.primaryGrowth.key:`Baseline first`,r=V(t).map(e=>`
        <tr>
          <td>${e.rank}</td>
          <td>
            <strong>${A(e.area)}</strong>
            <span>${A(e.detail)}</span>
          </td>
          <td>${A(e.training)}</td>
        </tr>
      `).join(``),i=t.learningProtocol.map(e=>`
        <article class="protocol-step compact">
          <strong>${A(e.title)}</strong>
          <p>${A(e.action)}</p>
        </article>
      `).join(``),a=H(t).map(e=>`
        <div class="loop-step">
          <strong>${A(e.window)}</strong>
          <span>${A(e.action)}</span>
        </div>
      `).join(``),o=U(t).map(e=>`<li>${A(e)}</li>`).join(``);return N(`
    <section class="screen">
      <div class="screen-header">
        <div class="eyebrow">Path preview</div>
        <h2>Your Super Learner path is ready.</h2>
        <p class="lede">The free trial maps the first signals. The paid path turns those signals into daily quests, retention checks, and a training loop that adapts as Ori learns the learner.</p>
      </div>
      <div class="assessment-note path-note">
        <span>${A(t.assessmentStatus.coverageLabel)}</span>
        <strong>${A(t.assessmentStatus.confidence)} confidence path</strong>
        <p>${A(t.nextSessionFocus)}</p>
      </div>
      <div class="profile-summary">
        <div>
          <span>First growth edge</span>
          <strong>${n}</strong>
        </div>
        <div>
          <span>Daily starting dose</span>
          <strong>${t.dailyMinutes}</strong>
        </div>
        <div>
          <span>Weekly rhythm</span>
          <strong>${A(t.weeklyRhythm)}</strong>
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
              <tbody>${r}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="two-column">
        <div class="panel">
          <div class="panel-inner">
            <h3>Daily loop</h3>
            <div class="loop-grid">${a}</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-inner">
            <h3>Core method</h3>
            <div class="protocol-grid compact">${i}</div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-inner">
          <h3>Mind Realms Plus</h3>
          <div class="price">$14.99 <small>/ month</small></div>
          <p class="footer-note">Suggested launch price. Annual plan: $99/year. This prototype does not collect payment.</p>
          <ul class="unlock-list">${o}</ul>
          <div class="actions">
            <button class="primary-button" data-action="interest">Unlock My Path</button>
          </div>
          <p class="footer-note" id="interestNote"></p>
        </div>
      </div>
    </section>
  `)};function V(e){return[e.assessmentStatus.completedDomains?{rank:1,area:`Personal growth edge: ${e.primaryGrowth.key}`,detail:`The first system Ori trains because it is currently limiting the rest of the stack.`,training:e.primaryGrowth.nextStep}:{rank:1,area:`Complete the first baseline`,detail:`Ori needs at least one completed trial before ranking growth edges or claiming a weakness.`,training:e.nextSessionFocus},{rank:2,area:`Focus and executive control`,detail:`Holding attention, filtering distractions, switching rules, and slowing down before mistakes.`,training:`Short focus pulses before memory, reading, and math so attention is trained as the foundation.`},{rank:3,area:`Memory and retention`,detail:`Turning new information into something the learner can retrieve later.`,training:`Retrieval practice, delay checks, anchors, and tomorrow checks so learning actually sticks.`},{rank:4,area:`Reading comprehension and language`,detail:`Literal meaning, inference, vocabulary, listening support, and remembering what was read.`,training:`Read, predict, explain, retrieve, then use audio or reread support only when it helps.`},{rank:5,area:`Math, logic, and problem solving`,detail:`Number sense, visual models, patterns, balance reasoning, and flexible strategies.`,training:`Concept-first puzzles before speed, then mixed reasoning once accuracy is stable.`},{rank:6,area:`Learning strategy and confidence`,detail:`Knowing what worked, what failed, how the learner felt, and how to recover after mistakes.`,training:`Confidence calibration, error review, and one small next-step choice after each quest.`},{rank:7,area:`Mind-body readiness`,detail:`Sleep, energy, movement, timing, input quality, and practice consistency.`,training:`Quick readiness check-ins so Ori can tell skill weakness apart from fatigue or overload.`},{rank:8,area:`Speed with accuracy`,detail:`Learning faster only after comprehension and recall are stable.`,training:`Timed rounds unlock after accuracy holds, so speed does not train guessing.`},{rank:9,area:`Transfer to real life`,detail:`Using the trained skill in work, school, home, reading, money, and daily memory.`,training:`Weekly transfer quests where the learner explains, applies, and retrieves outside the app.`}]}function H(e){return e.assessmentStatus.completedDomains?[{window:`2 min`,action:`Readiness check: energy, stress, sleep, and confidence before training.`},{window:`4 min`,action:`Warm up the growth edge: ${e.primaryGrowth.key.toLowerCase()}.`},{window:`8-12 min`,action:`Play the main quest with memory, focus, reading, or logic pressure mixed in.`},{window:`3 min`,action:`Retrieve, explain, and reflect so Ori can update the next quest.`},{window:`Next day`,action:`Run a short retention check to see what actually stayed.`}]:[{window:`2 min`,action:`Readiness check: energy, stress, sleep, and confidence before assessment.`},{window:`4 min`,action:`Play one Memory Vault round to capture recall and delay signals.`},{window:`4 min`,action:`Play one Focus Tower pulse to capture attention and rule-switching signals.`},{window:`6 min`,action:`Finish one reading passage and one logic puzzle so the first map has coverage.`},{window:`Next day`,action:`Run a short retention check to see what stayed after sleep and time.`}]}function U(e){return[e.assessmentStatus.completedDomains?`Adaptive ${e.primaryGrowth.key.toLowerCase()} questline based on the first signal map`:`Adaptive questline after the full first baseline is complete`,`Daily retention checks and weekly transfer quests`,`Ori memory across sessions, including what worked and what fell apart`,`Parent/adult progress view with growth edges, strengths, and next actions`,`Advanced speed-with-accuracy challenges after stability is proven`]}function me(){y.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`next`&&ie(),t===`reset`&&oe(),t===`motion`&&(D.reducedMotion=!D.reducedMotion,k(`reduced_motion_toggled`,{enabled:D.reducedMotion}),$()),t===`go-report`&&ae(`report`),t===`memory-start`&&W(),t===`memory-next-round`&&(D.memory.round+=1,W()),t===`focus-start`&&K(),t===`reread`&&(D.language.reread=!0,k(`language_reread_marked`),$()),t===`audio`&&(D.language.audio=!0,k(`audio_support_selected`),$()),t===`speak-subject-summary`&&j(),t===`stop-subject-summary`&&M(),t===`topic-check`&&se(!1),t===`topic-deep`&&se(!0),t===`topic-clear`&&(D.topicNotice=void 0,D.topicDraft=``,$()),t===`complete-quest`&&(D.firstQuestComplete=!0,k(`first_quest_completed`,{path:Z()}),$()),t===`interest`){k(`pricing_interest_clicked`,{price:`$14.99/month`});let e=document.querySelector(`#interestNote`);e&&(e.textContent=`Interest captured for the prototype. Payment is not active yet.`)}})})}function he(){y.querySelectorAll(`[data-goal]`).forEach(e=>{e.addEventListener(`click`,()=>{D.primaryGoal=e.dataset.goal??``,k(`goal_selected`,{primaryGoal:D.primaryGoal}),$()})}),y.querySelectorAll(`[data-secondary]`).forEach(e=>{e.addEventListener(`click`,()=>{D.secondaryGoal=e.dataset.secondary??``,k(`secondary_goal_selected`,{secondaryGoal:D.secondaryGoal}),$()})});let e=y.querySelector(`#freeGoal`);e?.addEventListener(`input`,()=>{D.freeGoal=e.value});let t=y.querySelector(`#topicDraft`);t?.addEventListener(`input`,()=>{D.topicDraft=t.value}),y.querySelectorAll(`[data-body-form]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.bodyForm;t!==`male`&&t!==`female`||(D.bodyForm=t,k(`body_form_selected`,{bodyForm:t}),$())})});let n=Array.from(y.querySelectorAll(`[data-brain-region]`)),r=()=>{n.forEach(e=>e.classList.remove(`is-active`))};n.forEach(e=>{let t=()=>{r(),e.classList.add(`is-active`)};e.addEventListener(`pointerenter`,t),e.addEventListener(`focus`,t),e.addEventListener(`click`,e=>{e.preventDefault(),t()}),e.addEventListener(`pointerleave`,()=>{e.classList.remove(`is-active`)}),e.addEventListener(`blur`,()=>{e.classList.remove(`is-active`)})}),y.querySelectorAll(`[data-rune]`).forEach(e=>{e.addEventListener(`click`,()=>G(e.dataset.rune??``))}),y.querySelectorAll(`[data-focus-action]`).forEach(e=>{e.addEventListener(`click`,()=>q(e.dataset.focusAction===`tap`))}),y.querySelectorAll(`[data-focus-reflect]`).forEach(e=>{e.addEventListener(`click`,()=>{D.focus.reflection=e.dataset.focusReflect??``,D.focus.phase=`done`,k(`focus_pulse_completed`,{missedTargets:D.focus.missedTargets,decoyTaps:D.focus.decoyTaps,switchErrors:D.focus.switchErrors,reflection:D.focus.reflection}),$()})}),y.querySelectorAll(`[data-language]`).forEach(e=>{e.addEventListener(`click`,()=>ge(e.dataset.language??``))}),y.querySelectorAll(`[data-logic]`).forEach(e=>{e.addEventListener(`click`,()=>_e(e.dataset.logic??``))}),y.querySelectorAll(`[data-feeling]`).forEach(e=>{e.addEventListener(`click`,()=>{D.reflection.feeling=e.dataset.feeling??``,k(`reflection_feeling_selected`,{feeling:D.reflection.feeling}),$()})}),y.querySelectorAll(`[data-strongest]`).forEach(e=>{e.addEventListener(`click`,()=>{D.reflection.strongest=e.dataset.strongest??``,k(`reflection_strength_selected`,{strongest:D.reflection.strongest}),$()})})}function W(){D.memory.phase=`show`,D.memory.input=[],D.memory.feedback=``,k(`trial_started`,{trial:`memory`,round:D.memory.round+1}),$(),window.setTimeout(()=>{D.screen===`memory`&&D.memory.phase===`show`&&(D.memory.phase=`answer`,$())},D.reducedMotion?500:1600)}function G(e){if(D.memory.phase!==`answer`)return;let t=S[D.memory.round]??[];if(D.memory.input.push(e),D.memory.input.length>=t.length){let e=0;t.forEach((t,n)=>{D.memory.input[n]===t?e+=1:D.memory.errorPositions.push(n+1)});let n=t.length-e;D.memory.correctPositions+=e,D.memory.totalPositions+=t.length,D.memory.round===1&&(D.memory.distractionErrors+=n),D.memory.round===2&&(D.memory.delayErrors+=n),k(`memory_sequence_completed`,{round:D.memory.round+1,correct:e,total:t.length}),D.memory.round>=S.length-1?D.memory.phase=`done`:(D.memory.phase=`feedback`,D.memory.feedback=n===0?`The sequence held cleanly. Ori will increase the load gently.`:`Part of the symbol chain faded. Ori is watching where the slip happened.`)}$()}function K(){D.focus.phase=`run`,D.focus.index=0,D.focus.presentedAt=Date.now(),k(`trial_started`,{trial:`focus`}),$()}function q(e){if(D.focus.phase!==`run`)return;let t=w[D.focus.index];if(!t)return;let n=t.target===e;D.focus.total+=1,n&&(D.focus.correct+=1),t.target&&!e&&(D.focus.missedTargets+=1),!t.target&&e&&(D.focus.decoyTaps+=1),t.afterSwitch&&!n&&(D.focus.switchErrors+=1),e&&D.focus.responseTimes.push(Date.now()-D.focus.presentedAt),D.focus.index+=1,D.focus.index>=w.length?D.focus.phase=`reflect`:D.focus.presentedAt=Date.now(),$()}function ge(e){let t=T[D.language.index];if(!t)return;let n=e===t.answer;D.language.answers.push({id:t.id,correct:n}),D.language.index+=1,k(`language_choice_made`,{id:t.id,correct:n}),$()}function _e(e){let t=E[D.logic.index];if(!t)return;let n=e===t.answer;D.logic.answers.push({id:t.id,correct:n}),D.logic.index+=1,k(`logic_puzzle_completed`,{id:t.id,correct:n}),$()}function J(){return D.memory.totalPositions?(D.memory.totalPositions?D.memory.correctPositions/D.memory.totalPositions:0)>=.86?`Memory signal: your symbol recall held across load and delay.`:D.memory.distractionErrors>D.memory.delayErrors?`Memory signal: recall shifted most when the vault distracted you.`:D.memory.delayErrors>0?`Memory signal: first recall appeared stronger than delayed recall.`:`Memory signal: Ori needs more evidence, but sequence load should be trained gently.`:`Memory signal: needs the Memory Vault trial before Ori can judge recall or retention.`}function ve(){return D.focus.total?D.focus.switchErrors>=2?`Focus signal: attention held early, but the rule switch pulled you back to the old pattern.`:D.focus.decoyTaps>=2?`Focus signal: action speed is strong. The next step is protecting accuracy before tapping.`:D.focus.missedTargets>=2?`Focus signal: some targets slipped during the pulse. Signal detection and re-centering should be trained.`:`Focus signal: your attention held through the pulse. Ori will check endurance over longer sessions later.`:`Focus signal: needs the Focus Tower pulse before Ori can judge attention or rule switching.`}function ye(){if(!D.language.answers.length)return`Reading signal: needs the Language Grove passage before Ori can judge comprehension or inference.`;let e=D.language.answers.some(e=>e.id===`inference`&&!e.correct),t=D.language.answers.filter(e=>e.correct).length;return e?`Reading signal: direct details were clearer than hidden meaning. Inference should be trained next.`:t>=4?`Reading signal: direct detail, sequence, inference, and main idea all held in this short passage.`:`Reading signal: Ori needs more evidence across vocabulary, inference, and retention.`}function be(){if(!D.logic.answers.length)return`Logic signal: needs the Logic Forge puzzles before Ori can judge numeracy or problem solving.`;let e=D.logic.answers.filter(e=>!e.correct);return e.some(e=>e.id===`fraction`)?`Logic signal: patterns and balance may be ahead of visual fraction intuition.`:e.some(e=>e.id===`balance`)?`Logic signal: number patterns are waking up. Balance reasoning needs support.`:e.length===0?`Logic signal: pattern and balance reasoning were strong in this first forge run.`:`Logic signal: Ori will separate concept gaps from speed, reading load, and working memory.`}function Y(){let e=D.language.answers.filter(e=>e.correct).length,t=D.logic.answers.filter(e=>e.correct).length;return{goal:D.primaryGoal,secondaryGoal:D.secondaryGoal,freeGoal:D.freeGoal,reflectionFeeling:D.reflection.feeling,reflectionStrongest:D.reflection.strongest,memory:{correctPositions:D.memory.correctPositions,totalPositions:D.memory.totalPositions,delayErrors:D.memory.delayErrors,distractionErrors:D.memory.distractionErrors,errorPositions:D.memory.errorPositions},focus:{correct:D.focus.correct,total:D.focus.total,missedTargets:D.focus.missedTargets,decoyTaps:D.focus.decoyTaps,switchErrors:D.focus.switchErrors,responseTimes:D.focus.responseTimes},reading:{correct:e,total:D.language.answers.length,missedInference:D.language.answers.some(e=>e.id===`inference`&&!e.correct),reread:D.language.reread,audio:D.language.audio},math:{correct:t,total:D.logic.answers.length,missedFraction:D.logic.answers.some(e=>e.id===`fraction`&&!e.correct),missedBalance:D.logic.answers.some(e=>e.id===`balance`&&!e.correct)}}}function xe(e){return[{label:`Goal`,value:D.primaryGoal||`Become a super learner`},{label:`Assessment`,value:`${e.assessmentStatus.coverageLabel}; ${e.assessmentStatus.confidence} confidence`},{label:`Memory`,value:J().replace(`Memory signal: `,``)},{label:`Focus`,value:ve().replace(`Focus signal: `,``)},{label:`Reading`,value:ye().replace(`Reading signal: `,``)},{label:`Logic`,value:be().replace(`Logic signal: `,``)},{label:`Strategy`,value:Se()},{label:`First path`,value:Z()},{label:`Daily time`,value:e.dailyMinutes}]}function Se(){if(!D.reflection.strongest)return`Needs one reflection check.`;let e=Ce(),t=Math.max(...Object.values(e)),n=e[D.reflection.strongest];if(n!==void 0&&t-n<=.05)return`Your self-read matched your strongest signal today.`;let r=X();return`You felt strongest in ${D.reflection.strongest}, while Ori saw the strongest signal in ${r}.`}function X(){let e=Ce();return[[`Memory`,e.Memory],[`Focus`,e.Focus],[`Reading`,e.Reading],[`Math`,e.Math]].reduce((e,t)=>t[1]>e[1]?t:e)[0]}function Ce(){return{Memory:D.memory.totalPositions?D.memory.correctPositions/D.memory.totalPositions:0,Focus:D.focus.total?D.focus.correct/D.focus.total:0,Reading:D.language.answers.length?D.language.answers.filter(e=>e.correct).length/D.language.answers.length:0,Math:D.logic.answers.length?D.logic.answers.filter(e=>e.correct).length/D.logic.answers.length:0}}function we(){return!!(D.memory.totalPositions||D.focus.total||D.language.answers.length||D.logic.answers.length)}function Z(){return we()?D.focus.switchErrors>=2||D.focus.decoyTaps>=2?`Focus Recovery + Memory Anchors + Inference Clues`:D.memory.delayErrors>0||D.memory.distractionErrors>0?`Memory Anchors + Focus Pulse + Logic Patterns`:D.language.answers.some(e=>e.id===`inference`&&!e.correct)?`Inference Clues + Delayed Recall + Logic Patterns`:D.logic.answers.some(e=>!e.correct)?`Logic Forge Basics + Pace Control + Reading Clues`:`Advanced Recall + Flexible Focus + Transfer Quests`:`Complete Baseline + Ready-Show-Retrieve Loop`}function Q(){let e=Z();return e.startsWith(`Complete`)?`Baseline Quest`:e.startsWith(`Focus`)?`Steady Signal Quest`:e.startsWith(`Memory`)?`Memory Anchor Quest`:e.startsWith(`Inference`)?`Hidden Clue Quest`:e.startsWith(`Logic`)?`Balance Gate Quest`:`Transfer Trial Quest`}function Te(){let e=Z();return e.startsWith(`Complete`)?`You play one short baseline round so Ori can measure memory, focus, reading, and logic before building a serious path.`:e.startsWith(`Focus`)?`You practice one breath before action, then repeat a shorter signal round where accuracy comes before speed.`:e.startsWith(`Memory`)?`You group symbols into anchors, replay them as a tiny story, then retrieve them after a short delay.`:e.startsWith(`Inference`)?`You compare what the scroll says directly with what it implies, then choose a path from the hidden clue.`:e.startsWith(`Logic`)?`You use a visual balance gate before seeing the number sentence, so the concept lands before notation.`:`You combine recall, focus, reading, and logic in one small mixed challenge.`}async function Ee(){let e=document.querySelector(`#brainScene`);if(e){O?.(),O=null;try{let t=await te(()=>import(`./three.module-kyxZOpvy.js`),[]);if(!document.body.contains(e))return;let n=new t.WebGLRenderer({alpha:!0,antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(n.domElement);let r=new t.Scene,i=new t.PerspectiveCamera(38,1,.1,100);i.position.set(0,-.42,8.45);let a=new t.Group;r.add(a);let o=new t.Group;o.position.set(0,.34,0),o.scale.setScalar(.86),a.add(o);let s=new t.Group;o.add(s);let c=new t.MeshStandardMaterial({color:8051682,emissive:1192763,roughness:.24,metalness:.02,transparent:!0,opacity:.18,depthWrite:!1}),l=new t.MeshStandardMaterial({color:15190667,emissive:3089424,roughness:.46,metalness:.04,transparent:!0,opacity:.2,depthWrite:!1}),ee=new t.MeshStandardMaterial({color:16767352,emissive:16758861,roughness:.24,metalness:.18,transparent:!0,opacity:.84}),u=new t.MeshBasicMaterial({color:16314847,transparent:!0,opacity:.82,depthWrite:!1}),d=new t.MeshBasicMaterial({color:10482909,transparent:!0,opacity:.58,depthWrite:!1}),f=new t.MeshBasicMaterial({color:460041,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),p=new t.MeshBasicMaterial({color:16773311,transparent:!0,opacity:.55,depthTest:!1,depthWrite:!1}),m=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.26,depthWrite:!1}),h=new t.MeshBasicMaterial({color:6936750,wireframe:!0,transparent:!0,opacity:.12,depthWrite:!1}),g=D.bodyForm===`female`;s.visible=!0;let _=g?.82:1.14,v=g?.76:.6,y=g?[.86,.75,.52]:[1.18,.82,.6],b=g?[.46,.78,.43]:[.64,.84,.5],ne=[],x=e=>(ne.push(e),s.add(e),e),S=(e,n,r)=>{let i=new t.Vector3(...e),a=new t.Vector3(...n),o=a.clone().sub(i),s=o.length(),c=new t.Mesh(new t.CapsuleGeometry(r,Math.max(.04,s-r*2),10,20),l);return c.position.copy(i.add(a).multiplyScalar(.5)),c.quaternion.setFromUnitVectors(new t.Vector3(0,1,0),o.normalize()),x(c)},C=(e,n,r=.012,i=s,a=42)=>{let o=new t.CatmullRomCurve3(e.map(e=>new t.Vector3(...e))),c=new t.Mesh(new t.TubeGeometry(o,a,r,8,!1),n);return i.add(c),c},w=(e,n,r,i=u,a=.5,o=.01)=>{let c=new t.Mesh(new t.TorusGeometry(a,o,10,96),i);return c.position.set(...e),c.scale.set(...n),c.rotation.set(...r),s.add(c),c},T=(e,t,n=.012,r=52)=>{C(e,t,n,s,r),C(e.map(e=>[-e[0],e[1],e[2]]).reverse(),t,n,s,r)},E=(e,t,n,r,i=.008,a=0,o=Math.PI*2,c=72)=>{let l=[];for(let r=0;r<=c;r+=1){let i=a+(o-a)*r/c;l.push([e[0]+Math.cos(i)*t,e[1]+Math.sin(i)*n,e[2]])}return C(l,r,i,s,c)},re=(e,n,r)=>{let i=document.createElement(`canvas`);i.width=640,i.height=220;let a=i.getContext(`2d`);if(!a)return;a.clearRect(0,0,i.width,i.height),((e,t,n,r,i)=>{a.beginPath(),a.moveTo(e+i,t),a.lineTo(e+n-i,t),a.quadraticCurveTo(e+n,t,e+n,t+i),a.lineTo(e+n,t+r-i),a.quadraticCurveTo(e+n,t+r,e+n-i,t+r),a.lineTo(e+i,t+r),a.quadraticCurveTo(e,t+r,e,t+r-i),a.lineTo(e,t+i),a.quadraticCurveTo(e,t,e+i,t),a.closePath()})(18,18,i.width-36,i.height-36,28),a.fillStyle=`rgba(4, 8, 13, 0.86)`,a.fill(),a.lineWidth=5,a.strokeStyle=r,a.stroke(),a.fillStyle=r,a.font=`800 48px Inter, Arial, sans-serif`,a.textBaseline=`top`,a.fillText(e.toUpperCase(),48,48),a.fillStyle=`rgba(248, 241, 223, 0.92)`,a.font=`520 32px Inter, Arial, sans-serif`,a.fillText(n,50,118);let o=new t.CanvasTexture(i);return o.colorSpace=t.SRGBColorSpace,o.needsUpdate=!0,o},k=new t.Mesh(new t.SphereGeometry(.78,42,28),c);k.position.set(0,-.26,-.18),k.scale.set(...y),x(k);let A=new t.Mesh(new t.CapsuleGeometry(.42,.74,18,26),c);A.position.set(0,-.9,-.18),A.scale.set(...b),x(A);let ie=new t.Mesh(new t.SphereGeometry(.5,36,24),c);ie.position.set(0,-1.42,-.14),ie.scale.set(v*1.42,.44,.46),x(ie);let ae=new t.Mesh(new t.CapsuleGeometry(.18,.36,14,18),c);ae.position.set(0,.52,-.08),ae.scale.set(1,1,.65),x(ae);let oe=new t.Mesh(new t.SphereGeometry(.44,52,34),c);oe.position.set(0,1.35,.02),oe.scale.set(.9,1.06,.76),x(oe),S([-_,.22,-.08],[-1.42,.22,0],g?.065:.085),S([-1.42,.22,0],[-2.03,.2,.12],g?.058:.07),S([_,.22,-.08],[1.42,.22,0],g?.065:.085),S([1.42,.22,0],[2.03,.2,.12],g?.058:.07),S([-v*.45,-1.58,-.12],[-.33,-2.42,-.04],g?.085:.105),S([-.33,-2.42,-.04],[-.28,-3.14,.03],g?.064:.078),S([v*.45,-1.58,-.12],[.33,-2.42,-.04],g?.085:.105),S([.33,-2.42,-.04],[.28,-3.14,.03],g?.064:.078);let j=new t.Mesh(new t.SphereGeometry(.18,28,20),l);j.position.set(-2.16,.19,.15),j.scale.set(g?1.25:1.38,.34,.44),x(j);let M=j.clone();M.position.x=2.16,x(M);let se=e=>{[-.055,-.018,.018,.055].forEach((t,n)=>{let r=S([e*2.2,.19+t,.2],[e*(2.42+n*.018),.19+t*.82,.22],g?.012:.014);r.material=d});let t=S([e*2.07,.11,.2],[e*2.27,.04,.25],g?.014:.016);t.material=d};se(-1),se(1);let N=new t.Mesh(new t.SphereGeometry(.16,24,18),l);N.position.set(-.29,-3.22,.2),N.scale.set(1.22,.34,.62),x(N);let ce=N.clone();if(ce.position.x=.29,x(ce),g){let e=new t.Mesh(new t.SphereGeometry(.48,38,24),l);e.position.set(0,1.35,-.12),e.scale.set(.88,1.08,.6),x(e)}w([0,1.35,.56],[.9,1.06,.08],[0,0,0],u,.43,.01),w([-.39,1.34,.12],[.14,.22,.05],[0,Math.PI/2,0],d,.42,.005),w([.39,1.34,.12],[.14,.22,.05],[0,Math.PI/2,0],d,.42,.005),C([[-.35,.92,.6],[-.18,.78,.63],[0,.75,.65],[.18,.78,.63],[.35,.92,.6]],u,.01),C([[.02,1.45,.64],[.12,1.32,.71],[.05,1.19,.66]],d,.008),C([[-2.12,.22,.25],[-1.48,.26,.18],[-_,.25,.1],[-.42,.24,.02],[0,.18,.04],[.42,.24,.02],[_,.25,.1],[1.48,.26,.18],[2.12,.22,.25]],u,.016),C([[-_*.58,.18,.42],[-y[0]*.48,-.38,.46],[-v*.55,-1.17,.42],[-v*.74,-1.44,.34]],u,.014),C([[_*.58,.18,.42],[y[0]*.48,-.38,.46],[v*.55,-1.17,.42],[v*.74,-1.44,.34]],u,.014),C([[-.36,.02,.5],[-.18,-.04,.54],[0,-.06,.55],[.18,-.04,.54],[.36,.02,.5]],d,.008),C([[0,.06,.55],[0,-.35,.57],[0,-.82,.54],[0,-1.16,.48]],d,.008),[-.18,0,.18].forEach(e=>{C([[-.28,-.48+e,.56],[-.1,-.52+e,.59],[.1,-.52+e,.59],[.28,-.48+e,.56]],d,.006)}),C([[-.34,-1.48,.4],[-.45,-2.14,.35],[-.35,-2.86,.3],[-.31,-3.22,.32]],u,.012),C([[.34,-1.48,.4],[.45,-2.14,.35],[.35,-2.86,.3],[.31,-3.22,.32]],u,.012),w([-2.11,.2,.28],[.42,.16,.08],[0,0,0],u,.32,.008),w([2.11,.2,.28],[.42,.16,.08],[0,0,0],u,.32,.008),w([-.31,-3.23,.34],[.48,.16,.08],[0,0,-.05],u,.32,.008),w([.31,-3.23,.34],[.48,.16,.08],[0,0,.05],u,.32,.008);let P=.72,F=.755,le=g?.92:1.08,ue=g?.62:.76,de=g?.38:.58,fe=g?.78:.62;E([0,1.35,P],.35,.48,u,.01,0,Math.PI*2,96),C([[-.2,1.47,F],[-.23,1.32,F],[-.16,1.16,F],[0,1.1,F],[.16,1.16,F],[.23,1.32,F],[.2,1.47,F]],d,.0055,s,46),E([-.36,1.34,P-.02],.045,.11,u,.0048,0,Math.PI*2,36),E([.36,1.34,P-.02],.045,.11,u,.0048,0,Math.PI*2,36),C([[0,1.49,F],[.045,1.37,.775],[.01,1.26,F]],d,.0048),C([[-.13,1.2,F],[0,1.16,F],[.13,1.2,F]],d,.004),g?T([[-.34,1.83,P-.03],[-.53,1.55,P],[-.55,1.13,P],[-.36,.86,P]],d,.009,48):C([[-.32,1.65,F],[-.12,1.73,F],[.12,1.73,F],[.32,1.65,F]],d,.008),T([[-.18,.86,P],[-.23,.61,P],[-.45,.42,P],[-le,.31,P]],u,.012,44),T([[-.14,.72,F],[-.3,.54,F],[-.58,.43,F],[-.88,.34,F]],d,.007,38),T([[-le,.34,P],[-1.22,.31,P],[-1.62,.26,P],[-2.05,.22,P],[-2.34,.19,P]],u,.014,60),T([[-.82,.13,P],[-1.2,.11,P],[-1.62,.11,P],[-2.05,.13,P],[-2.33,.16,P]],u,.012,60),T([[-1.34,.3,F],[-1.43,.19,F],[-1.34,.1,F]],d,.005,24),[-1,1].forEach(e=>{E([e*2.39,.18,P],.17,.075,u,.007,0,Math.PI*2,34),[-.05,-.017,.017,.05].forEach(t=>{C([[e*2.27,.18+t,F],[e*2.49,.18+t*.85,F]],d,.004,s,12)})}),T([[-ue,.18,P],[-.6,-.18,P],[-de,-.76,P],[-.5,-1.08,P],[-fe,-1.42,P]],u,.015,58),C([[-.42,.12,F],[-.2,.02,F],[0,-.01,F],[.2,.02,F],[.42,.12,F]],d,.007,s,34),g?(E([-.24,-.13,F],.2,.12,d,.005,Math.PI*.05,Math.PI*1.02,34),E([.24,-.13,F],.2,.12,d,.005,Math.PI*-.02,Math.PI*.95,34)):C([[-.48,-.08,F],[-.2,-.16,F],[0,-.14,F],[.2,-.16,F],[.48,-.08,F]],d,.006),C([[0,.05,F],[0,-.38,F],[0,-.86,F],[0,-1.24,F]],d,.007),[-.12,-.38,-.64].forEach(e=>{C([[-.28,e,F],[-.1,e-.04,F],[.1,e-.04,F],[.28,e,F]],d,.005,s,28)}),C([[-.35,-1.18,F],[-.14,-1.38,F],[0,-1.48,F],[.14,-1.38,F],[.35,-1.18,F]],d,.006,s,32),T([[-fe*.58,-1.42,P],[-.58,-1.92,P],[-.54,-2.42,P],[-.42,-2.94,P],[-.34,-3.2,P]],u,.013,62),T([[-.16,-1.52,P],[-.19,-2.03,P],[-.18,-2.52,P],[-.22,-3.06,P]],u,.011,58),T([[-.45,-2.28,F],[-.34,-2.39,F],[-.22,-2.29,F]],d,.005,24),T([[-.24,-3.18,P],[-.52,-3.22,P],[-.62,-3.31,P],[-.4,-3.39,P],[-.18,-3.34,P]],u,.008,38),[-1,1].forEach(e=>{[-.08,-.02,.04].forEach(t=>{C([[e*.37,-3.29+t,F],[e*.6,-3.31+t*.5,F]],d,.0035,s,8)})}),ne.forEach(e=>{let n=new t.Mesh(e.geometry,h);n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale).multiplyScalar(1.012),s.add(n)});let I=new t.Group;I.position.set(0,g?1.52:1.5,.42),I.rotation.set(-.02,-.05,.02),I.scale.setScalar(g?.17:.165),o.add(I);let L=new t.Mesh(new t.SphereGeometry(.7,56,36),ee),pe=new t.Vector3(1.22,.78,.58);L.scale.copy(pe),L.material.opacity=.08,I.add(L);let R=[],z=(e,n,r,i,a,o=.035)=>{let s=new t.MeshStandardMaterial({color:e,emissive:n,roughness:.36,metalness:.08,transparent:!0,opacity:.96}),c=new t.Mesh(new t.SphereGeometry(.34,48,30),s);return c.position.set(...r),c.scale.set(...i),I.add(c),R.push({mesh:c,phase:a,pulse:o,baseScale:i}),c};z(15952548,7280446,[-.42,.12,.08],[1.28,.86,.68],0),z(9098063,2975772,[.05,.29,0],[1.12,.75,.62],.7),z(16181340,7694870,[.16,.14,.2],[.38,.92,.34],1.25,.025),z(9402584,3154015,[-.16,-.23,.12],[1.16,.55,.62],1.8),z(6147297,1464426,[.48,.02,-.04],[.78,.73,.58],2.25),z(16749179,7548963,[.31,-.47,-.1],[.72,.38,.46],2.75,.018);let B=new t.Mesh(new t.CapsuleGeometry(.09,.5,14,22),new t.MeshStandardMaterial({color:16756876,emissive:6237730,roughness:.38,metalness:.04,transparent:!0,opacity:.94}));B.position.set(.36,-.72,-.08),B.rotation.z=-.18,I.add(B),R.push({mesh:B,phase:3.2,pulse:.012,baseScale:[1,1,1]});let V=new t.Mesh(new t.SphereGeometry(.12,28,18),new t.MeshStandardMaterial({color:16767352,emissive:8082709,roughness:.28,metalness:.12,transparent:!0,opacity:.95}));V.position.set(-.12,-.2,.44),V.scale.set(1.5,.5,.62),I.add(V),R.push({mesh:V,phase:3.8,pulse:.055,baseScale:[1.5,.5,.62]});let H=new t.Mesh(new t.SphereGeometry(.1,26,18),new t.MeshStandardMaterial({color:6936750,emissive:1530953,roughness:.25,metalness:.14,transparent:!0,opacity:.96}));H.position.set(-.5,.18,.43),H.scale.set(1.15,.82,.62),I.add(H),R.push({mesh:H,phase:4.2,pulse:.065,baseScale:[1.15,.82,.62]});let U=(e,t=f,n=.01,r=36)=>C(e,t,n,I,r);U([[-.76,.02,.29],[-.6,.38,.28],[-.2,.54,.24],[.28,.48,.17],[.68,.18,.1],[.64,-.12,.12],[.36,-.35,.16],[-.08,-.42,.24],[-.52,-.24,.3],[-.76,.02,.29]],p,.01,60),U([[.06,.52,.31],[.02,.32,.36],[.04,.12,.38],[.1,-.05,.36]],f,.011),U([[-.72,.27,.37],[-.52,.39,.41],[-.28,.32,.42],[-.14,.44,.39]]),U([[-.72,.08,.42],[-.5,.18,.45],[-.26,.1,.46],[-.08,.2,.43]]),U([[-.65,-.1,.4],[-.42,-.02,.46],[-.2,-.08,.48],[-.02,.03,.44]]),U([[-.52,-.29,.36],[-.26,-.22,.44],[0,-.28,.43],[.18,-.18,.35]]),U([[-.22,.5,.33],[.02,.4,.38],[.24,.44,.3],[.44,.3,.24]]),U([[.1,.29,.42],[.28,.23,.43],[.44,.14,.35],[.6,.03,.24]]),U([[.18,.02,.42],[.36,-.02,.4],[.5,-.13,.28],[.57,-.24,.16]]),U([[-.52,-.31,.3],[-.3,-.39,.37],[-.05,-.37,.36],[.18,-.43,.25]]),[-.16,-.08,0,.08].forEach(e=>{U([[.04,-.47+e,.27],[.24,-.43+e,.26],[.48,-.45+e,.12]],f,.006,22)});let me=e=>new t.MeshBasicMaterial({color:e,transparent:!0,opacity:.84,depthTest:!1,depthWrite:!1}),he=g?.17:.165,W=[0,g?1.52:1.5,.42],G=e=>[W[0]+e[0]*he,W[1]+e[1]*he,W[2]+e[2]*he],K=(e,n,r,i,a,s)=>{let c=re(e,n,r);if(!c)return;let l=new t.Mesh(new t.PlaneGeometry(.76,.26),new t.MeshBasicMaterial({map:c,transparent:!0,depthTest:!1,depthWrite:!1,side:t.DoubleSide}));l.position.set(...s),l.renderOrder=30,o.add(l);let ee=s[0]>=a[0]?-1:1,u=[s[0]+ee*.38,s[1],s[2]],d=C([a,[(a[0]+u[0])/2,Math.max(a[1],u[1])+.08,Math.max(a[2],u[2])+.05],u],me(i),.006,o,24);d.renderOrder=24;let f=new t.Mesh(new t.SphereGeometry(.025,18,12),me(i));f.position.set(...a),f.renderOrder=25,o.add(f)};K(`Focus`,`planning and impulse control`,`#69d8ae`,6936750,G([-.5,.18,.5]),[-1.14,1.85,.86]),K(`Memory`,`recall and retrieval`,`#ffd978`,16767352,G([-.12,-.2,.5]),[-1.14,1.53,.88]),K(`Math`,`spatial number sense`,`#8ad34f`,9098063,G([.12,.31,.34]),[1.14,1.85,.86]),K(`Reading`,`language and meaning`,`#7adbe2`,8051682,G([-.18,-.24,.48]),[1.14,1.53,.88]),K(`Timing`,`rhythm and automaticity`,`#ff927b`,16749179,G([.32,-.49,.12]),[1.02,1.23,.78]);let q=new t.Mesh(new t.TorusGeometry(1.22,.008,12,110),m);q.position.set(-.2,.02,.42),q.rotation.set(Math.PI/2.35,.18,0),o.add(q);let ge=q.clone();ge.position.x=.2,ge.rotation.y=-.18,o.add(ge);let _e=new t.Mesh(new t.TorusGeometry(1.72,.008,12,150),m);_e.rotation.x=Math.PI/2,o.add(_e);let J=new t.Group;J.position.set(0,-2.73,.1),J.scale.setScalar(.86),a.add(J);let ve=new t.MeshBasicMaterial({color:6936750,transparent:!0,opacity:.44,depthWrite:!1}),ye=new t.MeshBasicMaterial({color:16767352,transparent:!0,opacity:.38,depthWrite:!1});[.72,1.18,1.62].forEach((e,n)=>{let r=new t.Mesh(new t.TorusGeometry(e,n===1?.01:.006,10,160),n===1?ye:ve);r.rotation.x=Math.PI/2,J.add(r)});let be=new t.LineBasicMaterial({color:10482909,transparent:!0,opacity:.22}),Y=[];for(let e=0;e<24;e+=1){let t=Math.PI*2*e/24;Y.push(Math.cos(t)*.34,0,Math.sin(t)*.34),Y.push(Math.cos(t)*1.72,0,Math.sin(t)*1.72)}let xe=new t.BufferGeometry;xe.setAttribute(`position`,new t.Float32BufferAttribute(Y,3)),J.add(new t.LineSegments(xe,be));let Se=new t.BufferGeometry,X=new Float32Array(540);for(let e=0;e<X.length;e+=3)X[e]=(Math.random()-.5)*4.8,X[e+1]=(Math.random()-.5)*4.2,X[e+2]=(Math.random()-.5)*3.4;Se.setAttribute(`position`,new t.BufferAttribute(X,3));let Ce=new t.Points(Se,new t.PointsMaterial({color:15190667,size:.018,transparent:!0,opacity:.58}));r.add(Ce),r.add(new t.AmbientLight(14602926,1.5));let we=new t.PointLight(16767352,4.2,10);we.position.set(2.6,3.2,3.4),r.add(we);let Z=new t.PointLight(6936750,2.3,9);Z.position.set(-2.8,.4,2.2),r.add(Z);let Q=()=>{let t=e.getBoundingClientRect(),r=Math.max(1,t.width),a=Math.max(1,t.height);n.setSize(r,a,!1),i.aspect=r/a,i.updateProjectionMatrix()},Te=0,Ee=new ResizeObserver(()=>{window.cancelAnimationFrame(Te),Te=window.requestAnimationFrame(Q)});Ee.observe(e),Q();let $=0,De=!0,Oe=0,ke=()=>{c.opacity=.18,l.opacity=.2,h.opacity=.12,u.opacity=.82,d.opacity=.58},Ae=(e=0)=>{if(!De)return;Oe||=e;let t=e-Oe;D.reducedMotion?a.rotation.y=0:a.rotation.y=t*42e-5%(Math.PI*2),ke(),D.reducedMotion||(L.scale.copy(pe),R.forEach(({mesh:e,baseScale:t})=>{e.scale.set(...t)}),Ce.rotation.y-=.0015),n.render(r,i),$=window.requestAnimationFrame(Ae)};Ae(),O=()=>{De=!1,window.cancelAnimationFrame($),window.cancelAnimationFrame(Te),Ee.disconnect(),n.dispose(),Se.dispose(),e.innerHTML=``}}catch{e.innerHTML=`
      <div class="scene-fallback">
        <div class="fallback-body" aria-label="Symbolic body and mind map"></div>
      </div>
    `}}}function $(){O&&=(O(),null);let e={intro:ce,ori:P,subjects:F,goals:le,realms:ue,memory:de,focus:fe,language:I,logic:L,reflection:pe,report:R,quest:z,path:B}[D.screen];y.innerHTML=e(),me(),he(),D.screen===`intro`&&Ee()}k(`onboarding_started`),$();