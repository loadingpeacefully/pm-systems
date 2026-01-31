import{r as i,j as e,L as l}from"./index-Dd4baVsc.js";function d(){return i.useEffect(()=>{const r={threshold:.1},t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&a.target.classList.add("active")})},r);return document.querySelectorAll(".scroll-reveal").forEach(s=>t.observe(s)),()=>t.disconnect()},[]),e.jsxs("div",{className:"bg-[#050505] text-[#d1d1d1] font-sans overflow-x-hidden selection:bg-[#A855F7] selection:text-white",children:[e.jsx("style",{children:`
        :root {
            --purple: #A855F7;
            --crimson: #FF3131;
            --cyber-blue: #0EA5E9;
            --bg: #050505;
        }
        
        .mono { font-family: 'JetBrains Mono', monospace; }
        .text-purple { color: var(--purple); text-shadow: 0 0 15px rgba(168, 85, 247, 0.4); }
        .text-crimson { color: var(--crimson); text-shadow: 0 0 10px rgba(255, 49, 49, 0.3); }
        
        .grid-overlay {
            background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 40px 40px;
        }

        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .scroll-reveal.active {
            opacity: 1;
            transform: translateY(0);
        }

        .terminal-block {
            background: #0a0a0a;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        }

        .scanline {
            width: 100%;
            height: 2px;
            background: rgba(168, 85, 247, 0.05);
            position: absolute;
            top: 0; left: 0; z-index: 50;
            animation: scan 4s linear infinite;
            pointer-events: none;
        }

        @keyframes scan { from { top: 0; } to { top: 100%; } }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: var(--purple); }

        .hud-border {
            border: 1px solid rgba(255,255,255,0.1);
            position: relative;
        }

        .hud-border::before, .hud-border::after {
            content: '';
            position: absolute;
            width: 10px; height: 10px;
            border-color: var(--purple);
            border-style: solid;
        }

        .hud-border-top::before { top: -1px; left: -1px; border-width: 1px 0 0 1px; }
        .hud-border-top::after { top: -1px; right: -1px; border-width: 1px 1px 0 0; }

        .insight-underline {
            position: relative;
            display: inline-block;
        }
        .insight-underline::after {
            content: '';
            position: absolute;
            bottom: 2px; left: 0; width: 100%; height: 1px;
            background: var(--purple);
            opacity: 0.6;
        }

        .data-node {
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            padding-left: 1.5rem;
            position: relative;
        }
        .data-node::before {
            content: '';
            position: absolute;
            left: -1px;
            top: 0;
            width: 1px;
            height: 40%;
            background: var(--crimson);
            box-shadow: 0 0 10px var(--crimson);
        }

        .alert-pulse {
            animation: alert-blink 2s infinite;
        }
        @keyframes alert-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        .diagram-container {
            font-size: 11px;
            line-height: 1.6;
            color: rgba(255,255,255,0.4);
            border: 1px solid rgba(255,255,255,0.05);
            padding: 2rem;
            background: rgba(0,0,0,0.4);
        }
      `}),e.jsxs("div",{className:"grid-overlay min-h-screen",children:[e.jsxs("header",{className:"min-h-screen flex flex-col px-6 md:px-20 relative overflow-hidden bg-[#050505] border-b border-white/5",children:[e.jsx("div",{className:"scanline"}),e.jsx("div",{className:"w-full pt-10 flex items-start justify-start z-20",children:e.jsx(l,{to:"/",className:"text-[10px] font-mono uppercase tracking-[0.4em] text-[#A855F7] hover:opacity-80 transition-opacity",children:"<< RETURN_TO_DASHBOARD"})}),e.jsx("div",{className:"flex-grow flex flex-col justify-center relative z-10 py-6 md:py-12",children:e.jsxs("div",{className:"max-w-7xl space-y-4 md:space-y-6",children:[e.jsxs("h1",{className:"text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase text-white",children:["PROJECT ",e.jsx("br",{})," ",e.jsx("span",{className:"text-purple",children:"ADHYAYAN"})]}),e.jsx("p",{className:"text-xl md:text-3xl text-white/70 leading-relaxed font-bold max-w-5xl uppercase tracking-tight",children:"Replacing static Slides with student-led interactive mastery through a decoupled JSON rendering engine."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-7xl",children:[e.jsxs("div",{className:"bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top",children:[e.jsx("div",{className:"text-[28px] font-bold text-white mono tracking-tighter uppercase",children:"90% Completion"}),e.jsx("div",{className:"text-[10px] uppercase tracking-widest text-white/40 mt-2",children:"Up from 40% (Quiz Galaxy)"})]}),e.jsxs("div",{className:"bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top",children:[e.jsx("div",{className:"text-[28px] font-bold text-white mono tracking-tighter uppercase",children:"2000+ Lessons"}),e.jsx("div",{className:"text-[10px] uppercase tracking-widest text-white/40 mt-2 uppercase",children:"Launched via 0-Code CMS"})]}),e.jsxs("div",{className:"bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top",children:[e.jsx("div",{className:"text-[28px] font-bold text-white mono tracking-tighter uppercase",children:"<3% Refund"}),e.jsx("div",{className:"text-[10px] uppercase tracking-widest text-white/40 mt-2 uppercase",children:"FinLit Retention Success"})]}),e.jsxs("div",{className:"bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top",children:[e.jsx("div",{className:"text-[28px] font-bold text-white mono tracking-tighter uppercase font-mono uppercase",children:"14.1% Conv"}),e.jsx("div",{className:"text-[10px] uppercase tracking-widest text-white/40 mt-2 uppercase",children:"Growth Sustained 6+ Mos"})]})]})]})}),e.jsx("div",{className:"pb-10 flex flex-col items-center justify-center z-10 w-full",children:e.jsx("div",{className:"animate-bounce opacity-40",children:e.jsx("svg",{className:"w-10 h-10",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})})]}),e.jsxs("section",{className:"min-h-screen py-24 md:py-40 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center scroll-reveal",children:[e.jsxs("div",{className:"mb-20 space-y-4",children:[e.jsx("span",{className:"text-crimson/60 font-bold uppercase tracking-[0.6em] text-[10px] block",children:"// DIAGNOSTIC_OVERRIDE: ENG_DEPENDENCY_CRISIS"}),e.jsxs("h2",{className:"text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]",children:["WHY STATIC SYSTEMS ",e.jsx("br",{}),e.jsx("span",{className:"text-crimson",children:"COLLAPSE AT SCALE"})]})]}),e.jsxs("div",{className:"grid lg:grid-cols-12 gap-12 md:gap-24 items-start",children:[e.jsxs("div",{className:"lg:col-span-7 space-y-16",children:[e.jsx("div",{className:"max-w-[600px]",children:e.jsx("p",{className:"text-xl md:text-2xl text-white/80 leading-relaxed italic font-light",children:"Manual workflows didn’t fail because of people — they failed because the architecture was never designed for scale. Passive observation created an engagement void that translated directly into business attrition."})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12",children:[e.jsxs("div",{className:"data-node",children:[e.jsx("span",{className:"text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2",children:"FINLIT_REFUND_RATE"}),e.jsxs("div",{className:"text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase",children:["20.0% ",e.jsx("span",{className:"text-[11px] text-crimson font-black uppercase tracking-widest ml-2",children:"[CRITICAL]"})]}),e.jsx("p",{className:"text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight",children:"Students idle on text-heavy jargon slides resulted in systematic churn."})]}),e.jsxs("div",{className:"data-node",children:[e.jsx("span",{className:"text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2",children:"CONVERSION_FLOOR"}),e.jsxs("div",{className:"text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase",children:["8.5% ",e.jsx("span",{className:"text-[11px] text-crimson font-black uppercase tracking-widest ml-2",children:"[THROTTLED]"})]}),e.jsx("p",{className:"text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight",children:"Passive learning models failed to convert high-intent leads into long-term users."})]}),e.jsxs("div",{className:"data-node",children:[e.jsx("span",{className:"text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2",children:"QUIZ_COMPLETION"}),e.jsxs("div",{className:"text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase",children:["40.0% ",e.jsx("span",{className:"text-[11px] text-crimson font-black uppercase tracking-widest ml-2",children:"[DISMAL]"})]}),e.jsx("p",{className:"text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight",children:"Disconnected Google Forms created friction that dismantled post-class engagement."})]}),e.jsxs("div",{className:"data-node",children:[e.jsx("span",{className:"text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2",children:"ENG_VELOCITY_CAP"}),e.jsxs("div",{className:"text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase",children:["~10/WK ",e.jsx("span",{className:"text-[11px] text-crimson font-black uppercase tracking-widest ml-2",children:"[LOCKED]"})]}),e.jsx("p",{className:"text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight",children:"Every interactive screen required a dedicated engineering sprint, capping scale."})]})]})]}),e.jsx("div",{className:"lg:col-span-5 lg:sticky lg:top-40",children:e.jsx("div",{className:"terminal-block p-1 bg-gradient-to-br from-crimson/20 to-transparent rounded-sm",children:e.jsxs("div",{className:"bg-[#080808] p-8 md:p-10 rounded-sm mono text-[11px] leading-relaxed",children:[e.jsxs("div",{className:"flex justify-between items-center mb-10 pb-4 border-b border-white/5",children:[e.jsx("span",{className:"text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] font-black",children:"SYSTEM_STRESS_ANALYSIS"}),e.jsx("div",{className:"w-2 h-2 bg-crimson rounded-full alert-pulse"})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-white/30 uppercase text-[9px] font-bold",children:[e.jsx("span",{children:"Logic_Module"}),e.jsx("span",{className:"text-crimson",children:"[ FAILURE ]"})]}),e.jsx("div",{className:"p-4 bg-white/5 border border-white/10 italic text-white/70 uppercase",children:'"Static Slide: Intro to SIPs"'})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-white/30 uppercase text-[9px] font-bold",children:[e.jsx("span",{children:"Interaction_State"}),e.jsx("span",{className:"text-crimson",children:"[ NULL ]"})]}),e.jsx("div",{className:"h-2 w-full bg-white/5 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-crimson/40 w-full animate-pulse"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-white/30 uppercase text-[9px] font-bold",children:[e.jsx("span",{children:"Assessment_Bridge"}),e.jsx("span",{className:"text-crimson font-black",children:"[ BROKEN ]"})]}),e.jsx("div",{className:"p-4 border border-crimson/20 bg-crimson/5 text-crimson font-black uppercase tracking-widest text-center",children:"GOOGLE_FORM_DROPOUT"})]}),e.jsxs("div",{className:"pt-6 border-t border-white/5 space-y-4",children:[e.jsx("div",{className:"text-[9px] text-white/20 uppercase font-black tracking-widest",children:"BUSINESS_ATTRITION_LOG"}),e.jsxs("div",{className:"flex gap-1 h-12 items-end",children:[e.jsx("div",{className:"flex-1 bg-crimson/60 h-full"}),e.jsx("div",{className:"flex-1 bg-crimson/30 h-3/4"}),e.jsx("div",{className:"flex-1 bg-crimson/50 h-5/6"}),e.jsx("div",{className:"flex-1 bg-crimson/20 h-1/2"}),e.jsx("div",{className:"flex-1 bg-crimson/40 h-2/3"}),e.jsx("div",{className:"flex-1 bg-crimson/70 h-full animate-pulse"})]})]})]})]})})})]})]}),e.jsx("section",{className:"py-24 md:py-32 bg-white/[0.02] border-y border-white/5 px-6 md:px-20 scroll-reveal",children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("span",{className:"text-purple font-black uppercase tracking-[0.4em] text-[10px] md:text-xs",children:"// SYSTEM ARCHITECTURE: THE PLAYER"}),e.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter",children:["MODULAR ",e.jsx("span",{className:"text-purple",children:"POLYMOPRHIC ENGINE"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-0",children:[e.jsxs("div",{className:"p-8 border border-white/10 bg-black rounded-sm space-y-4 relative group hover:border-purple-500/50 transition-colors",children:[e.jsx("div",{className:"text-purple font-bold text-[10px] tracking-widest uppercase",children:'The "Task" Object'}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase mono",children:"Polymorphism"}),e.jsxs("p",{className:"text-xs text-white/40 leading-relaxed italic uppercase",children:["System reads ",e.jsx("code",{children:"templateType"})," and mounts corresponding game engines (Card-Flips, Crosswords) instantly."]})]}),e.jsxs("div",{className:"p-8 border border-white/10 bg-black rounded-sm space-y-4 group hover:border-purple-500/50 transition-colors",children:[e.jsx("div",{className:"text-purple font-bold text-[10px] tracking-widest uppercase",children:"Logic-as-Data"}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase mono",children:"JSON Flags"}),e.jsxs("p",{className:"text-xs text-white/40 leading-relaxed italic uppercase",children:["Mechanics like ",e.jsx("code",{children:"selectUntilCorrect"}),' switch tasks from "Test Mode" to "Mastery Loops" via JSON flags.']})]}),e.jsxs("div",{className:"p-8 border border-white/10 bg-black rounded-sm space-y-4 group hover:border-purple-500/50 transition-colors",children:[e.jsx("div",{className:"text-purple font-bold text-[10px] tracking-widest uppercase",children:"Global Parity"}),e.jsx("h3",{className:"text-xl font-bold text-white uppercase mono",children:"Lottie Runtimes"}),e.jsx("p",{className:"text-xs text-white/40 leading-relaxed italic uppercase",children:"Prioritized JSON animations over MP4, enabling gamification in low-bandwidth regions at 1/10th the cost."})]})]}),e.jsx("div",{className:"diagram-container mono whitespace-pre overflow-x-auto text-center rounded-sm",children:`[ADHYAYAN CMS] --(0-CODE CONFIG)--> [POLYMOPRHIC JSON]
                                          |
                                          v
[THE PLAYER ENGINE] <----------- [DYNAMIC TEMPLATE MOUNT]
        |                                 |
        v                                 v
[LOTTIE ANIMATION LAYER] <---- [USER INTERACTION LOOP] ----> [DB: TASK_COMPLETE]`})]})}),e.jsx("section",{className:"py-24 md:py-32 px-6 md:px-20 max-w-7xl mx-auto space-y-40",children:e.jsx("div",{className:"scroll-reveal",children:e.jsxs("div",{className:"grid lg:grid-cols-2 gap-20 items-center",children:[e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold border border-purple-500/30 uppercase tracking-widest font-black",children:"CONTENT_OPS"}),e.jsx("h3",{className:"text-3xl font-bold text-white uppercase tracking-tight",children:"The Adhyayan CMS"})]}),e.jsx("p",{className:"text-lg text-white/40 italic leading-relaxed uppercase",children:"Empowered non-technical content teams to build 2,000+ interactive lessons without engineering sprints."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border-l-2 border-purple-500 bg-purple-500/5",children:[e.jsx("span",{className:"text-[10px] font-black text-purple-400 uppercase block mb-1",children:"Split-Screen Preview"}),e.jsx("p",{className:"text-xs text-white/60 uppercase italic font-bold",children:"Live JSON editing on left → Real-time React component rendering on right."})]}),e.jsxs("div",{className:"p-4 border-l-2 border-purple-500 bg-purple-500/5",children:[e.jsx("span",{className:"text-[10px] font-black text-purple-400 uppercase block mb-1",children:"Versioning Engine"}),e.jsx("p",{className:"text-xs text-white/60 uppercase italic font-bold",children:'"Zero-Lesson" rule auto-upgrades students to latest curriculum versions.'})]})]})]}),e.jsxs("div",{className:"terminal-block p-10 rounded-sm relative overflow-hidden",children:[e.jsx("div",{className:"text-[9px] uppercase tracking-widest text-white/20 mb-6 font-bold uppercase font-black",children:"Stage_Viewer // v3.0"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 h-48",children:[e.jsxs("div",{className:"border border-white/5 bg-black p-4 space-y-2",children:[e.jsx("div",{className:"h-1.5 w-full bg-purple-500/30"}),e.jsx("div",{className:"h-1.5 w-3/4 bg-purple-500/10"}),e.jsx("div",{className:"h-1.5 w-full bg-purple-500/30"})]}),e.jsx("div",{className:"border border-purple-500/20 bg-purple-500/5 flex items-center justify-center",children:e.jsx("span",{className:"text-[10px] font-black text-purple-500 animate-pulse uppercase",children:"Rendering..."})})]})]})]})})}),e.jsx("section",{className:"py-24 md:py-40 bg-white/[0.02] border-y border-white/5 px-6 md:px-20 scroll-reveal",children:e.jsxs("div",{className:"max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center",children:[e.jsxs("div",{className:"order-2 lg:order-1 terminal-block p-10 rounded-sm relative",children:[e.jsx("div",{className:"text-[10px] mono text-white/20 tracking-[0.4em] uppercase mb-8 text-center font-black",children:"GALACTIC_NAV_SYSTEM"}),e.jsxs("div",{className:"flex justify-center gap-6 mb-12",children:[e.jsx("div",{className:"w-14 h-14 rounded-full border-2 border-purple-500 flex items-center justify-center mono text-xs text-purple-400 shadow-[0_0_20px_#A855F7]",children:"P1"}),e.jsx("div",{className:"w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mono text-xs text-white/20 opacity-40 uppercase",children:"LOCK"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between text-[10px] mono uppercase text-white/40 font-bold",children:[e.jsx("span",{children:"Conquer Threshold: 75%"}),e.jsx("span",{className:"text-purple-500 font-black",children:"Planet_Active"})]}),e.jsx("div",{className:"h-1 bg-white/5 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-purple-500 w-[75%]"})})]})]}),e.jsxs("div",{className:"order-1 lg:order-2 space-y-10",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold border border-purple-500/30 uppercase tracking-widest font-black",children:"ARCADE_MODE"}),e.jsx("h3",{className:"text-3xl font-bold text-white uppercase tracking-tight",children:"Quiz Galaxy"})]}),e.jsx("p",{className:"text-lg text-white/40 italic leading-relaxed uppercase",children:"Reimagined post-class quizzes as a space arcade. Completion jumped from 40% to 90% by gating planets behind class attendance and mastery thresholds."}),e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{className:"p-4 bg-purple-500/5 border border-purple-500/10 text-xs text-white/60 italic uppercase font-bold tracking-tight",children:"Revision Flashcards inserted pre-assessment for confidence boost."}),e.jsx("div",{className:"p-4 bg-purple-500/5 border border-purple-500/10 text-xs text-white/60 italic uppercase font-bold tracking-tight",children:"Attendance persistence logic ensures planets stay locked until ready."})]})]})]})}),e.jsx("footer",{className:"py-24 md:py-48 text-center bg-[#080808]",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-6 space-y-12",children:[e.jsx("p",{className:"text-[10px] text-white/20 uppercase tracking-[1em] font-black",children:"BUSINESS_IMPACT_LOG"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-y border-white/5 py-12",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-4xl font-bold text-white font-mono tracking-tighter uppercase",children:"2,000+"}),e.jsx("span",{className:"text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1",children:"Lessons Scaled"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-4xl font-bold text-purple font-mono tracking-tighter uppercase",children:"90%"}),e.jsx("span",{className:"text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1",children:"Quiz Comp"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-4xl font-bold text-white font-mono tracking-tighter uppercase",children:"<3%"}),e.jsx("span",{className:"text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1",children:"Refund Rate"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-4xl font-bold text-purple font-mono tracking-tighter uppercase",children:"14.1%"}),e.jsx("span",{className:"text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1",children:"Sales Conv"})]})]}),e.jsxs("h2",{className:"text-3xl md:text-6xl font-black text-white italic leading-[1.1] uppercase tracking-tighter",children:['"I architected the ',e.jsx("span",{className:"text-purple uppercase",children:"Purple Platform"})," to decouple pedagogy from code and enable ",e.jsx("span",{className:"insight-underline",children:"global scale"}),'."']}),e.jsxs("div",{className:"pt-20 flex flex-wrap justify-center gap-10 opacity-20 text-[10px] tracking-[0.4em] font-bold uppercase mono font-black tracking-widest",children:[e.jsx("span",{children:"Node: Adhyayan"}),e.jsx("span",{children:"Security: AES-256"}),e.jsx("span",{children:"Status: Optimal"})]})]})})]})]})}export{d as default};
