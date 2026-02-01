import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Adhyayan() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, observerOptions);

    const nodes = document.querySelectorAll(".scroll-reveal");
    nodes.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Back to Top Logic
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-[#050505] text-[#d1d1d1] font-sans overflow-x-hidden selection:bg-[#A855F7] selection:text-white">
      <style>{`
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
      `}</style>

      {/* Back To Top Button */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 z-50 p-3 bg-black border border-white/20 text-white hover:border-[#A855F7] hover:text-[#A855F7] transition-all shadow-lg group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <div className="grid-overlay min-h-screen">
        {/* SECTION 1: SYSTEM DIRECTIVE (HERO) */}
        <header className="min-h-screen flex flex-col px-6 md:px-20 relative overflow-hidden bg-[#050505] border-b border-white/5">
            <div className="scanline"></div>

            {/* TOP NAV: Simple Return Link + Next Project */}
            <div className="w-full pt-10 flex items-center justify-between z-20">
                <Link
                  to="/"
                  className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#A855F7] hover:opacity-80 transition-opacity"
                >
                  &lt;&lt; RETURN_TO_DASHBOARD
                </Link>

                {/* NEXT PROJECT: NANO SKILLS (PINK) */}
                <Link 
                  to="/p/P4" 
                  className="text-[10px] font-mono uppercase tracking-[0.2em] text-pink-400 hover:opacity-80 transition-opacity border-b border-pink-400/30 pb-1"
                >
                  NEXT_INTEL: NANO_SKILLS &gt;&gt;
                </Link>
            </div>
            
            {/* CENTERPIECE (HERO) */}
            <div className="flex-grow flex flex-col justify-center relative z-10 py-6 md:py-12">
                <div className="max-w-7xl space-y-4 md:space-y-6">
                    <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase text-white">
                        PROJECT <br/> <span className="text-purple">ADHYAYAN</span>
                    </h1>
                    
                    <p className="text-xl md:text-3xl text-white/70 leading-relaxed font-bold max-w-5xl uppercase tracking-tight">
                        Replacing static Slides with student-led interactive mastery through a decoupled JSON rendering engine.
                    </p>

                    {/* PROOF STRIP */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-7xl">
                        <div className="bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top">
                            <div className="text-[28px] font-bold text-white mono tracking-tighter uppercase">90% Completion</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">Up from 40% (Quiz Galaxy)</div>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top">
                            <div className="text-[28px] font-bold text-white mono tracking-tighter uppercase">2000+ Lessons</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2 uppercase">Launched via 0-Code CMS</div>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top">
                            <div className="text-[28px] font-bold text-white mono tracking-tighter uppercase">&lt;3% Refund</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2 uppercase">FinLit Retention Success</div>
                        </div>
                        <div className="bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top">
                            <div className="text-[28px] font-bold text-white mono tracking-tighter uppercase font-mono uppercase">14.1% Conv</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2 uppercase">Growth Sustained 6+ Mos</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-10 flex flex-col items-center justify-center z-10 w-full">
                <div className="animate-bounce opacity-40">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </header>

        {/* SECTION 2: THE DIAGNOSTIC — SYSTEM COLLAPSE AT SCALE */}
        <section className="min-h-screen py-24 md:py-40 px-6 md:px-20 max-w-7xl mx-auto flex flex-col justify-center scroll-reveal">
            
            {/* Diagnostic Header */}
            <div className="mb-20 space-y-4">
                <span className="text-crimson/60 font-bold uppercase tracking-[0.6em] text-[10px] block">// DIAGNOSTIC_OVERRIDE: ENG_DEPENDENCY_CRISIS</span>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
                    WHY STATIC SYSTEMS <br/>
                    <span className="text-crimson">COLLAPSE AT SCALE</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
                
                {/* LEFT: CORE NARRATIVE (7 COLS) */}
                <div className="lg:col-span-7 space-y-16">
                    
                    <div className="max-w-[600px]">
                        <p className="text-xl md:text-2xl text-white/80 leading-relaxed italic font-light">
                            Manual workflows didn’t fail because of people — they failed because the architecture was never designed for scale. Passive observation created an engagement void that translated directly into business attrition.
                        </p>
                    </div>

                    {/* DIAGNOSTIC DATA NODES */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        <div className="data-node">
                            <span className="text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2">FINLIT_REFUND_RATE</span>
                            <div className="text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase">20.0% <span className="text-[11px] text-crimson font-black uppercase tracking-widest ml-2">[CRITICAL]</span></div>
                            <p className="text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight">Students idle on text-heavy jargon slides resulted in systematic churn.</p>
                        </div>
                        <div className="data-node">
                            <span className="text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2">CONVERSION_FLOOR</span>
                            <div className="text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase">8.5% <span className="text-[11px] text-crimson font-black uppercase tracking-widest ml-2">[THROTTLED]</span></div>
                            <p className="text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight">Passive learning models failed to convert high-intent leads into long-term users.</p>
                        </div>
                        <div className="data-node">
                            <span className="text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2">QUIZ_COMPLETION</span>
                            <div className="text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase">40.0% <span className="text-[11px] text-crimson font-black uppercase tracking-widest ml-2">[DISMAL]</span></div>
                            <p className="text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight">Disconnected Google Forms created friction that dismantled post-class engagement.</p>
                        </div>
                        <div className="data-node">
                            <span className="text-[10px] font-black text-crimson uppercase tracking-[0.3em] block mb-2">ENG_VELOCITY_CAP</span>
                            <div className="text-4xl font-bold text-white mono mb-2 tracking-tighter uppercase">~10/WK <span className="text-[11px] text-crimson font-black uppercase tracking-widest ml-2">[LOCKED]</span></div>
                            <p className="text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight">Every interactive screen required a dedicated engineering sprint, capping scale.</p>
                        </div>
                    </div>

                    

                    
                </div>

                {/* RIGHT: SYSTEM STRESS ANALYSIS TERMINAL (5 COLS) */}
                <div className="lg:col-span-5 lg:sticky lg:top-40">
                    <div className="terminal-block p-1 bg-gradient-to-br from-crimson/20 to-transparent rounded-sm">
                        <div className="bg-[#080808] p-8 md:p-10 rounded-sm mono text-[11px] leading-relaxed">
                            <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5">
                                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] font-black">SYSTEM_STRESS_ANALYSIS</span>
                                <div className="w-2 h-2 bg-crimson rounded-full alert-pulse"></div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-white/30 uppercase text-[9px] font-bold">
                                        <span>Logic_Module</span>
                                        <span className="text-crimson">[ FAILURE ]</span>
                                    </div>
                                    <div className="p-4 bg-white/5 border border-white/10 italic text-white/70 uppercase">
                                        "Static Slide: Intro to SIPs"
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-white/30 uppercase text-[9px] font-bold">
                                        <span>Interaction_State</span>
                                        <span className="text-crimson">[ NULL ]</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-crimson/40 w-full animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-white/30 uppercase text-[9px] font-bold">
                                        <span>Assessment_Bridge</span>
                                        <span className="text-crimson font-black">[ BROKEN ]</span>
                                    </div>
                                    <div className="p-4 border border-crimson/20 bg-crimson/5 text-crimson font-black uppercase tracking-widest text-center">
                                        GOOGLE_FORM_DROPOUT
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 space-y-4">
                                    <div className="text-[9px] text-white/20 uppercase font-black tracking-widest">BUSINESS_ATTRITION_LOG</div>
                                    <div className="flex gap-1 h-12 items-end">
                                        <div className="flex-1 bg-crimson/60 h-full"></div>
                                        <div className="flex-1 bg-crimson/30 h-3/4"></div>
                                        <div className="flex-1 bg-crimson/50 h-5/6"></div>
                                        <div className="flex-1 bg-crimson/20 h-1/2"></div>
                                        <div className="flex-1 bg-crimson/40 h-2/3"></div>
                                        <div className="flex-1 bg-crimson/70 h-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 3: THE PLAYER ARCHITECTURE */}

<section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5 px-6 md:px-20 scroll-reveal">

<div className="max-w-7xl mx-auto space-y-16">

<div className="text-center space-y-4">

<span className="text-purple font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">// SYSTEM ARCHITECTURE: THE PLAYER</span>

<h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">MODULAR <span className="text-purple">POLYMOPRHIC ENGINE</span></h2>

</div>



<div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">

<div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 relative group hover:border-purple-500/50 transition-colors">

<div className="text-purple font-bold text-[10px] tracking-widest uppercase">The "Task" Object</div>

<h3 className="text-xl font-bold text-white uppercase mono">Polymorphism</h3>

<p className="text-xs text-white/40 leading-relaxed italic uppercase">System reads <code>templateType</code> and mounts corresponding game engines (Card-Flips, Crosswords) instantly.</p>

</div>

<div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 group hover:border-purple-500/50 transition-colors">

<div className="text-purple font-bold text-[10px] tracking-widest uppercase">Logic-as-Data</div>

<h3 className="text-xl font-bold text-white uppercase mono">JSON Flags</h3>

<p className="text-xs text-white/40 leading-relaxed italic uppercase">Mechanics like <code>selectUntilCorrect</code> switch tasks from "Test Mode" to "Mastery Loops" via JSON flags.</p>

</div>

<div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 group hover:border-purple-500/50 transition-colors">

<div className="text-purple font-bold text-[10px] tracking-widest uppercase">Global Parity</div>

<h3 className="text-xl font-bold text-white uppercase mono">Lottie Runtimes</h3>

<p className="text-xs text-white/40 leading-relaxed italic uppercase">Prioritized JSON animations over MP4, enabling gamification in low-bandwidth regions at 1/10th the cost.</p>

</div>

</div>

                <div className="diagram-container mono whitespace-pre overflow-x-auto text-center rounded-sm">
{`[ADHYAYAN CMS] --(0-CODE CONFIG)--> [POLYMOPRHIC JSON]
                                          |
                                          v
[THE PLAYER ENGINE] <----------- [DYNAMIC TEMPLATE MOUNT]
        |                                 |
        v                                 v
[LOTTIE ANIMATION LAYER] <---- [USER INTERACTION LOOP] ----> [DB: TASK_COMPLETE]`}
                </div>
            </div>
        </section>

        {/* SECTION 4: THE ADHYAYAN CMS */}
        <section className="py-24 md:py-32 px-6 md:px-20 max-w-7xl mx-auto space-y-40">
            <div className="scroll-reveal">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold border border-purple-500/30 uppercase tracking-widest font-black">CONTENT_OPS</span>
                            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">The Adhyayan CMS</h3>
                        </div>
                        <p className="text-lg text-white/40 italic leading-relaxed uppercase">
                            Empowered non-technical content teams to build 2,000+ interactive lessons without engineering sprints.
                        </p>
                        <div className="space-y-4">
                            <div className="p-4 border-l-2 border-purple-500 bg-purple-500/5">
                                <span className="text-[10px] font-black text-purple-400 uppercase block mb-1">Split-Screen Preview</span>
                                <p className="text-xs text-white/60 uppercase italic font-bold">Live JSON editing on left → Real-time React component rendering on right.</p>
                            </div>
                            <div className="p-4 border-l-2 border-purple-500 bg-purple-500/5">
                                <span className="text-[10px] font-black text-purple-400 uppercase block mb-1">Versioning Engine</span>
                                <p className="text-xs text-white/60 uppercase italic font-bold">"Zero-Lesson" rule auto-upgrades students to latest curriculum versions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="terminal-block p-10 rounded-sm relative overflow-hidden">
                        <div className="text-[9px] uppercase tracking-widest text-white/20 mb-6 font-bold uppercase font-black">Stage_Viewer // v3.0</div>
                        <div className="grid grid-cols-2 gap-4 h-48">
                            <div className="border border-white/5 bg-black p-4 space-y-2">
                                <div className="h-1.5 w-full bg-purple-500/30"></div>
                                <div className="h-1.5 w-3/4 bg-purple-500/10"></div>
                                <div className="h-1.5 w-full bg-purple-500/30"></div>
                            </div>
                            <div className="border border-purple-500/20 bg-purple-500/5 flex items-center justify-center">
                                <span className="text-[10px] font-black text-purple-500 animate-pulse uppercase">Rendering...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 5: THE ARCADE (QUIZ GALAXY) */}
        <section className="py-24 md:py-40 bg-white/[0.02] border-y border-white/5 px-6 md:px-20 scroll-reveal">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 terminal-block p-10 rounded-sm relative">
                    <div className="text-[10px] mono text-white/20 tracking-[0.4em] uppercase mb-8 text-center font-black">GALACTIC_NAV_SYSTEM</div>
                    <div className="flex justify-center gap-6 mb-12">
                        <div className="w-14 h-14 rounded-full border-2 border-purple-500 flex items-center justify-center mono text-xs text-purple-400 shadow-[0_0_20px_#A855F7]">P1</div>
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center mono text-xs text-white/20 opacity-40 uppercase">LOCK</div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between text-[10px] mono uppercase text-white/40 font-bold">
                            <span>Conquer Threshold: 75%</span>
                            <span className="text-purple-500 font-black">Planet_Active</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-purple-500 w-[75%]"></div></div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-10">
                    <div className="flex items-center gap-4">
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] font-bold border border-purple-500/30 uppercase tracking-widest font-black">ARCADE_MODE</span>
                        <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Quiz Galaxy</h3>
                    </div>
                    <p className="text-lg text-white/40 italic leading-relaxed uppercase">
                        Reimagined post-class quizzes as a space arcade. Completion jumped from 40% to 90% by gating planets behind class attendance and mastery thresholds.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-purple-500/5 border border-purple-500/10 text-xs text-white/60 italic uppercase font-bold tracking-tight">Revision Flashcards inserted pre-assessment for confidence boost.</div>
                        <div className="p-4 bg-purple-500/5 border border-purple-500/10 text-xs text-white/60 italic uppercase font-bold tracking-tight">Attendance persistence logic ensures planets stay locked until ready.</div>
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER: IMPACT LOG */}
        <footer className="py-24 md:py-48 text-center bg-[#080808]">
            <div className="max-w-5xl mx-auto px-6 space-y-12">
                <p className="text-[10px] text-white/20 uppercase tracking-[1em] font-black">BUSINESS_IMPACT_LOG</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-y border-white/5 py-12">
                    <div className="space-y-1">
                        <span className="text-4xl font-bold text-white font-mono tracking-tighter uppercase">2,000+</span>
                        <span className="text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1">Lessons Scaled</span>
                    </div>
                    <div className="space-y-1">
                        <span className="text-4xl font-bold text-purple font-mono tracking-tighter uppercase">90%</span>
                        <span className="text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1">Quiz Comp</span>
                    </div>
                    <div className="space-y-1">
                        <span className="text-4xl font-bold text-white font-mono tracking-tighter uppercase">&lt;3%</span>
                        <span className="text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1">Refund Rate</span>
                    </div>
                    <div className="space-y-1">
                        <span className="text-4xl font-bold text-purple font-mono tracking-tighter uppercase">14.1%</span>
                        <span className="text-[10px] block text-white/30 uppercase font-black tracking-widest mt-1">Sales Conv</span>
                    </div>
                </div>
                <h2 className="text-3xl md:text-6xl font-black text-white italic leading-[1.1] uppercase tracking-tighter">
                    "I architected the <span className="text-purple uppercase">Purple Platform</span> to decouple pedagogy from code and enable <span className="insight-underline">global scale</span>."
                </h2>
                <div className="pt-20 flex flex-wrap justify-center gap-10 opacity-20 text-[10px] tracking-[0.4em] font-bold uppercase mono font-black tracking-widest">
                    <span>Node: Adhyayan</span>
                    <span>Security: AES-256</span>
                    <span>Status: Optimal</span>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
}