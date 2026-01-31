import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Terminal, XCircle, Activity, EyeOff, AlertOctagon, ChevronLeft, ChevronRight } from "lucide-react";

export default function GeetaAI() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const problemPoints = [
    {
      title: "VELOCITY_BOTTLENECK",
      icon: <Activity size={18} />,
      desc: "Manual creation was capped at ~10 worksheets/week. Highly paid SMEs spent 80% of their time wrestling with JSON syntax rather than focusing on pedagogical design."
    },
    {
      title: "BLIND_REVIEW_SYNDROME",
      icon: <EyeOff size={18} />,
      desc: "Reviewers approved text in Google Sheets, but the app renders dynamic UI. Critical layout overflows and broken input logic were invisible until production deployment."
    },
    {
      title: "PRODUCTION_CRASHES",
      icon: <AlertOctagon size={18} />,
      desc: "Manual data entry led to a 14% syntax crash rate. Missing keys and malformed tags caused the student app to freeze, leading to massive engagement drops."
    }
  ];

  const handleNext = () => {
    setCurrentProblemIndex((prev) => (prev + 1) % problemPoints.length);
  };

  const handlePrev = () => {
    setCurrentProblemIndex((prev) => (prev === 0 ? problemPoints.length - 1 : prev - 1));
  };

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

  return (
    <div className="bg-[#050505] text-[#d1d1d1] overflow-x-hidden selection:bg-[#39FF14] selection:text-black">
      <style>{`
        :root { --neon-green: #39FF14; --crimson: #FF3131; --cyber-blue: #0EA5E9; --bg: #050505; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .text-neon { color: var(--neon-green); text-shadow: 0 0 10px rgba(57, 255, 20, 0.3); }
        .text-crimson { color: var(--crimson); text-shadow: 0 0 10px rgba(255, 49, 49, 0.3); }
        .text-cyber { color: var(--cyber-blue); }
        
        .grid-overlay {
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .scroll-reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .scroll-reveal.active { opacity: 1; transform: translateY(0); }

        .terminal-block { background: #0a0a0a; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }

        .scanline {
          width: 100%; height: 2px; background: rgba(57, 255, 20, 0.05);
          position: absolute; top: 0; left: 0; z-index: 50;
          animation: scan 4s linear infinite; pointer-events: none;
        }
        @keyframes scan { from { top: 0; } to { top: 100%; } }

        .hud-border { border: 1px solid rgba(255,255,255,0.1); position: relative; }
        .hud-border-top::before { content:''; position: absolute; top: -1px; left: -1px; width: 10px; height: 10px; border-top: 1px solid var(--neon-green); border-left: 1px solid var(--neon-green); }
        .hud-border-top::after { content:''; position: absolute; top: -1px; right: -1px; width: 10px; height: 10px; border-top: 1px solid var(--neon-green); border-right: 1px solid var(--neon-green); }

        .pipeline-arrow { position: relative; }
        .pipeline-arrow::after {
          content: '>>'; position: absolute; right: -25px; top: 50%; transform: translateY(-50%);
          color: rgba(255,255,255,0.1); font-family: 'JetBrains Mono'; font-size: 14px;
        }

        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
        .animate-glitch {
          animation: glitch 3s infinite;
          animation-timing-function: steps(2, end);
        }

        @keyframes glitch-in {
          0% { opacity: 0; transform: translateX(-10px); clip-path: inset(0 100% 0 0); }
          20% { opacity: 1; transform: translateX(0); clip-path: inset(0 0 0 0); }
          40% { clip-path: inset(0 40% 0 0); transform: translateX(2px); }
          60% { clip-path: inset(0 0 0 0); transform: translateX(0); }
          100% { opacity: 1; }
        }
        .animate-glitch-in {
          animation: glitch-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}</style>

      <div className="grid-overlay min-h-screen">
        <header className="min-h-screen flex flex-col px-6 md:px-20 relative overflow-hidden bg-[#050505] border-b border-white/5">
          <div className="scanline" />

          {/* TOP NAV: Simple Return Link */}
          <div className="w-full pt-10 flex items-start justify-start z-20">
            <Link
              to="/"
              className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#39FF14] hover:opacity-80 transition-opacity"
            >
              &lt;&lt; RETURN_TO_DASHBOARD
            </Link>
          </div>
          
          {/* HERO CONTENT */}
          <div className="flex-grow flex flex-col justify-center relative z-10 py-6 md:py-12">
            <div className="max-w-7xl space-y-4 md:space-y-6">
              <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase text-white">
                GEETA-AI <span className="text-neon">CONTENT FACTORY</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-white/70 leading-relaxed font-bold max-w-5xl uppercase tracking-tight">
                A self-healing content production system that turned human bottlenecks into autonomous scale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
                {[
                  { big: "15× Scale", small: "10 → 150+ worksheets/week" },
                  { big: "0% Failures", small: "Code-validated pipeline" },
                  { big: "–90% Cost", small: "Manual entry eliminated" },
                  { big: "TAT: Hours", small: "Reduced from days" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/10 p-6 hud-border hud-border-top relative">
                    <div className="text-[28px] font-bold text-white mono tracking-tighter uppercase">{item.big}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mt-2">{item.small}</div>
                  </div>
                ))}
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

        {/* SECTION 2: PROBLEM (MANUAL NAVIGATION) */}
        <section className="py-24 md:py-32 px-6 md:px-20 max-w-7xl mx-auto scroll-reveal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT COLUMN: The Narrative (Manual Nav) */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-crimson mb-2">
                  <AlertTriangle size={16} />
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-bold">System_Critical_Failure</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                  Why Manual <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900 animate-pulse">Systems</span> <br/>
                  <span className="text-crimson animate-glitch inline-block">Break at Scale</span>
                </h2>
              </div>
              
              {/* Manual Nav Container */}
              <div className="relative min-h-[300px] flex flex-col justify-between">
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-red-900/30"></div>
                
                {/* Content Area */}
                <div>
                  {problemPoints.map((point, index) => (
                    index === currentProblemIndex && (
                      <div key={index} className="animate-glitch-in space-y-6">
                        <div className="flex items-center gap-3 text-crimson font-mono font-bold tracking-widest text-sm uppercase">
                          {point.icon}
                          <span>DIAGNOSTIC_0{index + 1}: {point.title}</span>
                        </div>
                        <p className="text-xl text-white/80 leading-relaxed font-light">
                          {point.desc}
                        </p>
                      </div>
                    )
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-12 border-t border-red-900/20 pt-6">
                  <div className="flex items-center gap-2">
                    {/* Progress Dots */}
                    {problemPoints.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 transition-all duration-300 ${i === currentProblemIndex ? "w-8 bg-crimson" : "w-2 bg-red-900/30"}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <button 
                      onClick={handlePrev}
                      className="p-3 border border-red-900/30 text-crimson hover:bg-crimson hover:text-black transition-all group"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-mono text-xs text-crimson tracking-widest">
                      0{currentProblemIndex + 1} / 0{problemPoints.length}
                    </span>
                    <button 
                      onClick={handleNext}
                      className="p-3 border border-red-900/30 text-crimson hover:bg-crimson hover:text-black transition-all group"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: The Evidence (Terminal) */}
            <div className="relative mt-8 lg:mt-0">
              {/* Decorative 'Connectors' */}
              <div className="absolute -left-8 top-10 w-8 h-[1px] bg-red-900/50 hidden lg:block"></div>
              <div className="absolute -left-8 top-10 w-[1px] h-20 bg-red-900/50 hidden lg:block"></div>

              <div className="terminal-block bg-[#080808] border border-white/10 rounded-md overflow-hidden shadow-2xl relative">
                {/* Mac-style Window Header */}
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">ERROR_LOG_DUMP.json</div>
                </div>

                {/* Terminal Content */}
                <div className="p-8 font-mono text-xs leading-loose">
                  <div className="flex gap-4 border-b border-white/5 pb-4 mb-4">
                    <div className="text-white/30">01</div>
                    <div>
                      <span className="text-blue-400">INPUT_SOURCE:</span> <span className="text-white">"If 3x + 2 = 11, find x"</span>
                    </div>
                  </div>

                  <div className="flex gap-4 border-b border-white/5 pb-4 mb-4 opacity-50">
                    <div className="text-white/30">02</div>
                    <div>
                      <span className="text-green-400">SHEET_PARSER:</span> [VALID_STRING]
                    </div>
                  </div>

                  <div className="flex gap-4 bg-red-500/10 -mx-8 px-8 py-2 border-l-2 border-red-500">
                    <div className="text-red-500/50">03</div>
                    <div className="space-y-1">
                      <div className="text-crimson font-bold flex items-center gap-2">
                        <XCircle size={12} /> CRITICAL_RENDER_FAILURE
                      </div>
                      <div className="text-red-300/60 pl-5">
                        Error: Component overflow at line 14.<br/>
                        Mobile viewport width exceeded.<br/>
                        &gt; User drop-off detected (92%)
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-white/10 text-white/40 italic flex items-center gap-2">
                    <Terminal size={12} />
                    <span>Awaiting patch...</span>
                    <span className="w-2 h-4 bg-neon-green animate-pulse inline-block ml-1"></span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-black border border-neon-green px-6 py-4 shadow-[0_0_30px_rgba(57,255,20,0.15)]">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Proposed Solution</div>
                <div className="text-neon font-bold font-mono">WYSIWYG INTERFACE &gt;&gt;</div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: ARCHITECTURE */}
        <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5 px-6 md:px-20 scroll-reveal">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-neon font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">// SYSTEM ARCHITECTURE: THE TRIAD</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">DECOUPLED <span className="text-neon">ETL PIPELINE</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              <div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 pipeline-arrow">
                <div className="text-neon font-bold text-[10px] tracking-widest uppercase">Phase 01 / Generation</div>
                <h3 className="text-xl font-bold text-white uppercase">GEETA-AI ENGINE</h3>
                <p className="text-xs text-white/40 italic uppercase">Python (FastAPI) + OpenAI. Raw manufacturing using context-aware RAG-lite.</p>
              </div>
              <div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 pipeline-arrow">
                <div className="text-neon font-bold text-[10px] tracking-widest uppercase">Phase 02 / Validation</div>
                <h3 className="text-xl font-bold text-white uppercase">REGEX MIDDLEWARE</h3>
                <p className="text-xs text-white/40 italic uppercase">Node.js. The "Syntax Police." Verifies structure before human review.</p>
              </div>
              <div className="p-8 border border-white/10 bg-black rounded-sm space-y-4">
                <div className="text-neon font-bold text-[10px] tracking-widest uppercase">Phase 03 / Review</div>
                <h3 className="text-xl font-bold text-white uppercase">STAGE VIEWER</h3>
                <p className="text-xs text-white/40 italic uppercase">React/Node.js. WYSIWYG Acceptance Testing with bi-directional sync.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: DEEP DIVES */}
        <section className="py-24 md:py-32 px-6 md:px-20 max-w-7xl mx-auto space-y-40">
            {/* GEN ENGINE */}
            <div className="scroll-reveal">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="px-2 py-1 bg-[#39FF14]/10 text-[#39FF14] text-[10px] font-bold border border-[#39FF14]/30 uppercase">PHASE_01</span>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">The "Tag" System</h3>
                        </div>
                        <p className="text-sm text-white/40 italic leading-relaxed uppercase">
                            To ensure output works in Numon, the LLM is constrained to output Proprietary UI Tags instead of standard text. This turns unstructured text into structured code.
                        </p>
                        <ul className="space-y-4 mono text-[11px]">
                            <li className="flex justify-between border-b border-white/5 pb-2 uppercase"><span>[blank1:num]</span> <span className="text-white/40">Numeric Input Box</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2 uppercase"><span>[fraction:blank1]</span> <span className="text-white/40">Fraction Widget</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2 uppercase"><span>[break]</span> <span className="text-white/40">Force New Line</span></li>
                        </ul>
                    </div>
                    <div className="bg-white/[0.02] border border-white/10 p-8 rounded-sm">
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6 italic uppercase">RAG-Lite Injection</div>
                        <p className="text-xs text-white/60 leading-relaxed mb-6 uppercase">
                            System reads Master Skill Sheets and extracts sample questions. If samples are arithmetic, the prompt explicitly forbids word problems.
                        </p>
                        <div className="p-4 border border-white/10 bg-black text-[10px] text-[#39FF14]/60 uppercase mono uppercase">
                            Status: SSE_Streaming_Active <br/>
                            Batch: 8_Easy | 6_Med | 6_Hard
                        </div>
                    </div>
                </div>
            </div>

            {/* STAGE VIEWER */}
            <div className="scroll-reveal">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="terminal-block p-1 bg-[#0EA5E9]/20 rounded-sm">
                        <div className="bg-black p-8 md:p-12 rounded-sm space-y-8">
                            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/40 uppercase">
                                <span>Stage_Viewer_v2</span>
                                <span className="text-cyber-blue uppercase">Bi-Directional_Link_Active</span>
                            </div>
                            <div className="space-y-4">
                                <div className="text-[10px] uppercase text-white/20 uppercase">Component Render</div>
                                <div className="border border-white/10 p-6 italic text-sm text-white/80 uppercase">
                                    3x + 2 = 11. Find x: <br/>
                                    <div className="mt-4 w-20 h-8 border border-[#0EA5E9]/50 flex items-center justify-center text-cyber-blue uppercase">3</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 p-3 bg-white/5 border border-white/10 text-center text-[10px] uppercase font-bold text-white/40 uppercase">Edit_Text</div>
                                <div className="flex-1 p-3 bg-[#39FF14]/10 border border-[#39FF14]/30 text-center text-[10px] uppercase font-bold text-neon-green shadow-[0_0_15px_rgba(57,255,20,0.1)] uppercase">Sync_to_Sheet</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="px-2 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] text-[10px] font-bold border border-[#0EA5E9]/30 uppercase">PHASE_03</span>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight uppercase">WYSIWYG Empathy</h3>
                        </div>
                        <p className="text-sm text-white/40 italic leading-relaxed uppercase">
                            The Viewer renders raw JSON into actual React components. Reviewers can type into boxes to test validation logic. The Google Sheet remains the Single Source of Truth, updated instantly via API.
                        </p>
                        <div className="p-4 border-l-2 border-cyber-blue bg-[#0EA5E9]/5 uppercase">
                            <span className="text-[10px] font-bold text-cyber-blue uppercase block mb-1 uppercase">Sweeper Cron</span>
                            <p className="text-[11px] text-white/60 uppercase">Node.js job scans for 'Approved' rows and promotes them to Production MySQL automatically.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 5: SELF HEALING */}
        <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5 px-6 md:px-20 scroll-reveal">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="space-y-4">
                        <span className="text-neon font-black uppercase tracking-[0.4em] text-[10px] md:text-xs uppercase italic">// ADVANCED_MODULE: SELF_HEALING</span>
                        <h2 className="text-4xl font-bold text-white uppercase tracking-tighter uppercase">THE FEEDBACK <span className="text-neon uppercase">LOOP</span></h2>
                    </div>
                    <p className="text-sm text-white/40 italic max-w-md uppercase">System handles maintenance autonomously by closing the gap between student bug reports and AI-driven fixes.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 terminal-block p-8 mono text-[11px] space-y-6">
                        <div className="flex items-center gap-2 text-white/30 border-b border-white/5 pb-4 uppercase uppercase">
                            <span className="text-[#4A154B] font-black uppercase">#</span> slack_content-bugs
                        </div>
                        <div className="space-y-4">
                            <p><span className="text-cyber-blue font-bold uppercase">Numon_Bot</span> <span className="text-white/20 uppercase">10:42 AM</span></p>
                            <div className="p-3 bg-white/5 border border-white/10 text-white/60 uppercase">
                                NEW_BUG_DETECTED: <br/>
                                ID: QID_123 | Type: Content/Accuracy | Field: Hint
                            </div>
                            <p><span className="text-neon-green font-bold uppercase">Geeta_Agent</span> <span className="text-white/20 uppercase">10:42 AM</span></p>
                            <div className="p-3 bg-neon-green/5 border border-neon-green/20 text-neon-green uppercase">
                                REGENERATING_FIELD... <br/>
                                DIFF_LOG: "Old Hint" &gt;&gt; "New Logic-Fixed Hint" <br/>
                                PUSH_STATUS: SUCCESS_PROD_DEPLOYED
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 grid grid-rows-2 gap-4">
                        <div className="p-6 border border-white/10 bg-black rounded-sm uppercase">
                            <span className="text-neon font-bold text-[10px] uppercase block mb-2 uppercase">Smart Routing</span>
                            <p className="text-xs text-white/40 leading-relaxed italic uppercase">Content bugs assigned to AI Agent for instant regeneration. UI bugs generate Deep Links for Designers.</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-black rounded-sm uppercase">
                            <span className="text-neon font-bold text-[10px] uppercase block mb-2 uppercase">Manual Deep-Link</span>
                            <p className="text-xs text-white/40 leading-relaxed italic uppercase">Designers click unique links (domain.com/verify?qid=123) to open Stage Viewer and fix layout visually in seconds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 md:py-40 text-center border-t border-white/5 bg-[#080808]">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.8em] font-bold uppercase">IMPACT_SUMMARY_LOG</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <div className="space-y-1">
                    <span className="text-xl font-bold text-white uppercase font-bold uppercase">150+</span>
                    <span className="text-[9px] block text-white/30 uppercase uppercase font-bold">Worksheets/Wk</span>
                </div>
                <div className="space-y-1">
                    <span className="text-xl font-bold text-white uppercase font-bold uppercase">0%</span>
                    <span className="text-[9px] block text-white/30 uppercase uppercase font-bold">Syntax Errors</span>
                </div>
                <div className="space-y-1">
                    <span className="text-xl font-bold text-white uppercase font-bold uppercase">–90%</span>
                    <span className="text-[9px] block text-white/30 uppercase uppercase font-bold">Ops Costs</span>
                </div>
                <div className="space-y-1">
                    <span className="text-xl font-bold text-white uppercase font-bold uppercase uppercase">Hours</span>
                    <span className="text-[9px] block text-white/30 uppercase uppercase font-bold">Bug TAT</span>
                </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white italic leading-tight uppercase tracking-tighter uppercase">
              "I architected a <span className="text-neon uppercase">Self-Healing Pipeline</span> that turned manual friction into autonomous scale."
            </h2>
            <div className="pt-10 flex flex-wrap justify-center gap-6 md:gap-10 opacity-20 text-[10px] tracking-[0.2em] font-bold uppercase mono uppercase font-bold">
              <span>Node: Geeta-AI</span>
              <span>Cluster: Numon</span>
              <span>Status: Optimal</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}