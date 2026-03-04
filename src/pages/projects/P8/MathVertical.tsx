import React, { useEffect, useState } from "react";
import { ProjectNav } from "@/components/ProjectNav";
import {
  ArrowUp,
  Brain,
  AlertTriangle,
  XCircle,
  Layers,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Zap,
  Users,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function MathVertical() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const problemPoints = [
    {
      title: "STATIC_PEDAGOGY",
      icon: <BookOpen size={18} />,
      desc: "Classes ran on Google Slides and Google Forms. Students sat idle watching numbers. No real-world application, no interactivity, no mastery tracking. Teachers described the experience as 'very, very boring' — and retention numbers proved it.",
    },
    {
      title: "CONTENT_CEILING_AT_10",
      icon: <XCircle size={18} />,
      desc: "Manual worksheet creation was capped at 10 per week. Highly-paid SMEs spent 80% of their time wrestling with JSON formatting instead of designing pedagogy. Every new problem set required an engineering sprint. The math curriculum simply could not scale.",
    },
    {
      title: "MARGIN_KILLER_1_TO_1",
      icon: <AlertTriangle size={18} />,
      desc: "The entire platform was built for 1:1 classes. One teacher, one student, one revenue stream. Every session required the same fixed teacher cost regardless of class size. There was no path to margin improvement without breaking the delivery model entirely.",
    },
  ];

  const layers = [
    {
      index: 0,
      label: "Layer 01",
      title: "MILESTONE",
      example: '"Understand Place Value"',
      detail:
        "Broad, year-long learning goals aligned to US Common Core grade standards. Grades 1–8 covered, with AI content infrastructure built to extend to Grade 10. 8–12 modules per grade, ~120 lessons per grade.",
      width: "w-full",
    },
    {
      index: 1,
      label: "Layer 02",
      title: "SKILL",
      example: '"Understand the role of digits in multi-digit numbers"',
      detail:
        "Core competencies that map to each milestone. Each skill represents a teachable unit — a 45-50 minute class session following the Recap → Spotlight → Guided Practice flow.",
      width: "w-4/5",
    },
    {
      index: 2,
      label: "Layer 03",
      title: "SUB-SKILL",
      example: '"Apply place value to write numbers in expanded form"',
      detail:
        "Granular, measurable objectives that build into skills. Each sub-skill maps directly to AI-generated worksheet questions — enabling the Numon practice engine to target exactly the right gap.",
      width: "w-3/5",
    },
    {
      index: 3,
      label: "Layer 04",
      title: "CONTENT ATOM",
      example: "AI-generated question variant: Easy / Medium / Hard",
      detail:
        "The smallest unit. Each sub-skill spawns 20 AI-generated question variations across 3 difficulty tiers. Number-swapping and name-substitution prevents rote memorization. 2,000+ atoms shipped.",
      width: "w-2/5",
    },
  ];

  const handleNext = () =>
    setCurrentProblemIndex((prev) => (prev + 1) % problemPoints.length);
  const handlePrev = () =>
    setCurrentProblemIndex((prev) =>
      prev === 0 ? problemPoints.length - 1 : prev - 1
    );

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

  useEffect(() => {
    const toggleVisibility = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-[#050505] text-[#d1d1d1] overflow-x-hidden selection:bg-violet-400 selection:text-white">
      <style>{`
        :root {
          --violet: #A78BFA;
          --crimson: #FF3131;
          --bg: #050505;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .text-crimson { color: var(--crimson); text-shadow: 0 0 10px rgba(255,49,49,0.3); }
        .grid-overlay {
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
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
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .scanline {
          width: 100%; height: 2px;
          background: rgba(167,139,250,0.05);
          position: absolute; top: 0; left: 0; z-index: 50;
          animation: scan 4s linear infinite;
          pointer-events: none;
        }
        @keyframes scan { from { top: 0; } to { top: 100%; } }
        .hud-border {
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
        }
        .hud-border-top::before {
          content: '';
          position: absolute;
          top: -1px; left: -1px;
          width: 10px; height: 10px;
          border-top: 1px solid var(--violet);
          border-left: 1px solid var(--violet);
        }
        .hud-border-top::after {
          content: '';
          position: absolute;
          top: -1px; right: -1px;
          width: 10px; height: 10px;
          border-top: 1px solid var(--violet);
          border-right: 1px solid var(--violet);
        }
        .pipeline-arrow {
          position: relative;
        }
        .pipeline-arrow::after {
          content: '>>';
          position: absolute;
          right: -25px; top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,0.1);
          font-family: 'JetBrains Mono';
          font-size: 14px;
        }
        .data-node {
          border-left: 1px solid rgba(255,255,255,0.1);
          padding-left: 1.5rem;
          position: relative;
        }
        .data-node::before {
          content: '';
          position: absolute;
          left: -1px; top: 0;
          width: 1px; height: 40%;
          background: var(--violet);
          box-shadow: 0 0 10px var(--violet);
        }
        .diagram-container {
          font-size: 11px;
          line-height: 1.6;
          color: rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 2rem;
          background: rgba(0,0,0,0.4);
        }
        @keyframes glitch-in {
          0% { opacity: 0; transform: translateX(-10px); clip-path: inset(0 100% 0 0); }
          20% { opacity: 1; transform: translateX(0); clip-path: inset(0 0 0 0); }
          40% { clip-path: inset(0 40% 0 0); transform: translateX(2px); }
          60% { clip-path: inset(0 0 0 0); transform: translateX(0); }
          100% { opacity: 1; }
        }
        .animate-glitch-in { animation: glitch-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch { animation: glitch 3s infinite; animation-timing-function: steps(2, end); }
        .milestone-bar {
          height: 2px;
          background: linear-gradient(90deg, #A78BFA 0%, rgba(167,139,250,0.1) 100%);
          transition: width 1s ease-in-out;
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: var(--violet); }
      `}</style>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-black border border-white/20 text-white hover:border-violet-400 hover:text-violet-400 transition-all shadow-lg group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <div className="grid-overlay min-h-screen">

        {/* ── SECTION 1: HERO ── */}
        <ProjectNav nextTo="/p/P6" nextLabel="SUMMER_CAMP" nextColor="text-yellow-400" />

        <header className="min-h-screen flex flex-col px-4 sm:px-6 md:px-20 relative overflow-hidden bg-[#050505] border-b border-white/5">
          <div className="scanline" />

          <div className="flex-grow flex flex-col justify-center relative z-10 pt-14 sm:pt-16 py-6 md:py-12">
            <div className="max-w-7xl space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-violet-400/30 bg-violet-400/5 text-violet-400 text-[9px] font-bold tracking-[0.2em] uppercase">
                <Brain size={10} /> // EDTECH · 0→1 BUILD · UNIT ECONOMICS
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase text-white">
                MATH <br />
                <span className="text-violet-400">0 TO 1</span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl text-white/70 leading-relaxed font-bold max-w-5xl uppercase tracking-tight">
                Building BrightChamps' proprietary Math vertical from a blank page —
                curriculum architecture, AI-powered content at scale, and a new delivery
                model that shifted 1:1 classes to 1:20 group sessions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
                {[
                  { big: "10 → 60/wk", small: "Lesson publishing speed" },
                  { big: "65%", small: "Teacher adoption, Phase 1" },
                  { big: "1 → 20", small: "Students per teacher session" },
                  { big: "Grades 1–8", small: "US Common Core aligned" },
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </header>

        {/* ── SECTION 2: DIAGNOSTIC ── */}
        <section className="py-14 sm:py-20 md:py-32 px-4 sm:px-6 md:px-20 max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16 space-y-4">
            <span className="text-crimson opacity-60 font-bold uppercase tracking-[0.6em] text-[10px] block">
              // DIAGNOSTIC_OVERRIDE: THREE_FAILURE_MODES
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.85]">
              WHY THE EXISTING MATH <br />
              PRODUCT WAS A{" "}
              <span className="text-crimson animate-glitch inline-block">DEAD END</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* LEFT: CAROUSEL */}
            <div className="space-y-12">
              <div className="relative min-h-[300px] flex flex-col justify-between">
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-red-900/30" />
                <div>
                  {problemPoints.map(
                    (point, index) =>
                      index === currentProblemIndex && (
                        <div key={index} className="animate-glitch-in space-y-6">
                          <div className="flex items-center gap-3 text-crimson font-mono font-bold tracking-widest text-sm uppercase">
                            {point.icon}
                            <span>DIAGNOSTIC_0{index + 1}: {point.title}</span>
                          </div>
                          <p className="text-xl text-white/80 leading-relaxed font-light">{point.desc}</p>
                        </div>
                      )
                  )}
                </div>
                <div className="flex items-center justify-between mt-12 border-t border-red-900/20 pt-6">
                  <div className="flex items-center gap-2">
                    {problemPoints.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 transition-all duration-300 ${
                          i === currentProblemIndex ? "w-8 bg-violet-400" : "w-2 bg-violet-900/30"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrev}
                      className="p-3 border border-violet-900/30 text-violet-400 hover:bg-violet-400 hover:text-black transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-mono text-xs text-violet-400 tracking-widest">
                      0{currentProblemIndex + 1} / 0{problemPoints.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-3 border border-violet-900/30 text-violet-400 hover:bg-violet-400 hover:text-black transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: AUDIT TERMINAL */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -left-8 top-10 w-8 h-[1px] bg-red-900/50 hidden lg:block" />
              <div className="absolute -left-8 top-10 w-[1px] h-20 bg-red-900/50 hidden lg:block" />
              <div className="terminal-block bg-[#080808] border border-white/10 rounded-md overflow-hidden shadow-2xl relative">
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">MATH_VERTICAL_AUDIT.log</div>
                </div>
                <div className="p-8 font-mono text-xs leading-loose space-y-3">
                  <div className="text-white/20 mb-2">// MATH_VERTICAL_AUDIT.log</div>
                  <div className="flex gap-4 border-b border-white/5 pb-2">
                    <span className="text-white/30">01</span>
                    <div><span className="text-blue-400">CONTENT_VELOCITY</span> <span className="text-white">→ 10 worksheets/wk</span> <span className="text-crimson font-bold">[CEILING HIT]</span></div>
                  </div>
                  <div className="flex gap-4 border-b border-white/5 pb-2">
                    <span className="text-white/30">02</span>
                    <div>
                      <span className="text-blue-400">SME_TIME_ON_PEDAGOGY</span> <span className="text-white">→ ~20%</span> <span className="text-crimson font-bold">[CRITICAL: LOW]</span>
                      <div className="text-white/40 mt-0.5">&gt;&gt; remaining 80%: JSON formatting</div>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-white/5 pb-2">
                    <span className="text-white/30">03</span>
                    <div><span className="text-blue-400">POST_CLASS_QUIZ_COMPLETION</span> <span className="text-white">→ 40%</span> <span className="text-crimson font-bold">[DISMAL]</span></div>
                  </div>
                  <div className="flex gap-4 border-b border-white/5 pb-2">
                    <span className="text-white/30">04</span>
                    <div><span className="text-blue-400">APP_CRASH_RATE (bad JSON)</span> <span className="text-white">→ 14%</span> <span className="text-crimson font-bold">[CRITICAL]</span></div>
                  </div>
                  <div className="flex gap-4 border-b border-white/5 pb-3">
                    <span className="text-white/30">05</span>
                    <div>
                      <span className="text-blue-400">DELIVERY_MODEL</span> <span className="text-white">→ 1:1</span>
                      <div className="text-white/40 mt-0.5 space-y-0.5">
                        <div>&gt;&gt; teacher cost per session: FIXED</div>
                        <div>&gt;&gt; margin expansion path: <span className="text-crimson font-bold">NULL</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 border-b border-white/5 pb-3">
                    <span className="text-white/30">06</span>
                    <div>
                      <span className="text-blue-400">COMPETITIVE_GAP</span>
                      <div className="mt-0.5 space-y-0.5 text-white/50">
                        <div>&gt;&gt; IXL: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adaptive AI practice <span className="text-violet-400">✓</span></div>
                        <div>&gt;&gt; Kumon: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;daily mastery system &nbsp;<span className="text-violet-400">✓</span></div>
                        <div>&gt;&gt; BrightChamps: static slides &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-crimson">✗</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 space-y-1">
                    <div className="text-crimson font-bold animate-pulse">&gt;&gt; NPI_TRIGGERED</div>
                    <div className="text-white/40 pl-4">Target: Beat IXL on engagement.</div>
                    <div className="text-white/40 pl-4">Beat Kumon on cost-per-lesson.</div>
                    <div className="text-violet-400 font-bold pl-4">Ship in 6 months. <span className="animate-pulse">█</span></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black border border-violet-400 px-6 py-4 shadow-[0_0_30px_rgba(167,139,250,0.15)]">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Proposed Solution</div>
                <div className="text-violet-400 font-bold font-mono">4-LAYER CURRICULUM &gt;&gt;</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CURRICULUM FRAMEWORK (4-LAYER CLICK-TO-EXPAND) ── */}
        <section className="py-14 sm:py-20 md:py-32 bg-white/[0.02] border-y border-white/5 px-4 sm:px-6 md:px-20 scroll-reveal">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-violet-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                // CURRICULUM ARCHITECTURE: THE 4-LAYER FRAMEWORK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
                BUILT TO SCALE <span className="text-violet-400">GLOBALLY.</span>
              </h2>
            </div>

            {/* 4-LAYER CLICK-TO-EXPAND */}
            <div className="max-w-4xl mx-auto space-y-2">
              {layers.map((layer) => (
                <div
                  key={layer.index}
                  onClick={() =>
                    setActiveLayer(activeLayer === layer.index ? -1 : layer.index)
                  }
                  className="border border-white/10 bg-[#0a0a0a] cursor-pointer hover:border-violet-500/40 transition-all overflow-hidden"
                >
                  <div className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-6 flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest w-16 shrink-0">
                        {layer.label}
                      </span>
                      <div className={`milestone-bar ${layer.width} shrink-0`} />
                      <span className="text-sm font-black text-white uppercase tracking-tight ml-4">
                        {layer.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest shrink-0 ml-4">
                      {activeLayer === layer.index ? "[ COLLAPSE ]" : "[ EXPAND ]"}
                    </span>
                  </div>

                  {activeLayer === layer.index && (
                    <div className="px-5 pb-6 border-t border-white/5 pt-4">
                      <div className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-2">
                        Example
                      </div>
                      <div className="text-sm text-white/80 italic mb-4 font-mono">
                        {layer.example}
                      </div>
                      <p className="text-xs text-white/40 leading-relaxed uppercase">
                        {layer.detail}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* LESSON STRUCTURE STRIP */}
            <div className="max-w-4xl mx-auto">
              <div className="text-[10px] text-white/30 font-mono uppercase tracking-widest mb-4 text-center">
                // CLASS SESSION STRUCTURE
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
                {[
                  { label: "Phase 01", title: "RECAP", time: "5–10min", desc: "Prior lesson review. Builds on existing schema." },
                  { label: "Phase 02", title: "SPOTLIGHT", time: "10min", desc: "New concept introduced via real-world context." },
                  { label: "Phase 03", title: "GUIDED PRACTICE", time: "15min", desc: "Teacher-led interactive problems. Live participation." },
                  { label: "Phase 04", title: "INDEPENDENT + WRAP", time: "10min", desc: "Student-led solo attempt. Exit ticket. Summary." },
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`border border-white/10 bg-black p-4 ${i < 3 ? "pipeline-arrow" : ""}`}
                  >
                    <div className="text-violet-400 text-[10px] font-bold uppercase mb-1">{step.label} / {step.time}</div>
                    <div className="text-white text-xs font-bold uppercase mb-2">{step.title}</div>
                    <div className="text-white/30 text-[10px] italic">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: DEEP DIVE A — GROUP CLASS INFRASTRUCTURE ── */}
        <section className="py-14 sm:py-20 md:py-32 px-4 sm:px-6 md:px-20 max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16 space-y-4">
            <span className="text-violet-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              DELIVERY_SYSTEM
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              FROM 1:1 <br />
              TO <span className="text-violet-400">1:20</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
            {/* LEFT: DATA NODES */}
            <div className="space-y-12">
              {[
                {
                  label: "WEBSOCKET_SYNC",
                  desc: "Real-time two-way sync handles up to 20 students per session simultaneously. Reconnection logic ensures no student drops from a live session mid-class. Teacher dashboard shows per-student progress in real time — not a post-class report, live.",
                },
                {
                  label: "MULTIPLAYER_QUIZZES",
                  desc: "10+ interactive template types — Leaderboards, Fast-Finger races, and live buzzer rounds — sync across all student devices instantly. Teachers trigger them mid-class. Students compete live. Avatar-based rewards fire automatically on correct answers.",
                },
                {
                  label: "FIRST_GROUP_CURRICULUM",
                  desc: "Math was the first BrightChamps vertical designed specifically for group delivery. Every lesson, every template, every gamified element was built with 1:Many in mind — not retrofitted. 65% teacher adoption in Phase 1.",
                },
              ].map((node, i) => (
                <div key={i} className="data-node">
                  <span className="text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] block mb-2">
                    {node.label}
                  </span>
                  <p className="text-sm text-white/40 leading-relaxed italic uppercase font-bold tracking-tight">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT: LIVE CLASS TERMINAL */}
            <div className="lg:sticky lg:top-40">
              <div className="terminal-block p-1 bg-gradient-to-br from-violet-500/20 to-transparent rounded-sm">
                <div className="bg-[#080808] p-8 md:p-10 rounded-sm mono text-[11px] leading-relaxed">
                  <div className="text-white/20 text-[9px] mb-1">// GROUP_CLASS_DASHBOARD — Live Session</div>
                  <div className="text-white/20 text-[9px] mb-6">// Math: Place Value | Grade 4 | 1 Teacher : 18 Students</div>

                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
                    <span className="text-white/50 font-bold uppercase text-[10px]">TEACHER VIEW</span>
                    <span className="text-violet-400 animate-pulse font-black text-[10px]">[● LIVE]</span>
                  </div>

                  <div className="flex gap-2 mb-6">
                    {["TRIGGER QUIZ", "NEXT SLIDE", "WHITEBOARD"].map((btn) => (
                      <span key={btn} className="border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-mono text-white/40 cursor-pointer hover:border-violet-500/30 hover:text-violet-400 transition-colors">
                        {btn}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="text-white/30 text-[9px] uppercase tracking-widest mb-3">STUDENT PROGRESS (18 connected)</div>
                    <div className="space-y-2">
                      {[
                        { name: "Aanya R.", q: "Q3", w: "100%" },
                        { name: "Rohan M.", q: "Q2", w: "77%" },
                        { name: "Sarah L.", q: "Q3", w: "88%" },
                        { name: "Kai T.", q: "Q1", w: "55%" },
                      ].map((s) => (
                        <div key={s.name} className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-violet-400" style={{ width: s.w }} />
                          </div>
                          <span className="text-white w-20 shrink-0">{s.name}</span>
                          <span className="text-violet-400">✓ {s.q}</span>
                        </div>
                      ))}
                      <div className="text-white/20 text-[9px] pl-0">... 14 more</div>
                    </div>
                  </div>

                  <div className="mb-6 border-t border-white/5 pt-4">
                    <div className="text-white/30 text-[9px] uppercase tracking-widest mb-2">LIVE LEADERBOARD</div>
                    <div className="space-y-1 text-[10px]">
                      <div className="flex justify-between"><span>🥇 Aanya R.</span><span className="text-violet-400">320 pts</span></div>
                      <div className="flex justify-between"><span>🥈 Sarah L.</span><span className="text-violet-400">305 pts</span></div>
                      <div className="flex justify-between"><span>🥉 Rohan M.</span><span className="text-violet-400">290 pts</span></div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 space-y-1 text-[10px]">
                    <div><span className="text-violet-400 font-bold">WebSocket: CONNECTED</span> <span className="text-white/50">| Latency: 42ms</span></div>
                    <div className="text-white/50">Reconnect attempts: 0 | Session: 38m</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: DEEP DIVE B — NUMON PRACTICE ZONE ── */}
        <section className="py-14 sm:py-20 md:py-40 bg-white/[0.02] border-y border-white/5 px-4 sm:px-6 md:px-20 scroll-reveal">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 space-y-4">
              <span className="text-violet-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                PRACTICE_SYSTEM
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                THE DAILY <br />
                <span className="text-violet-400">PRACTICE ENGINE</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
              {/* LEFT: NUMON TERMINAL */}
              <div className="terminal-block rounded-sm overflow-hidden">
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">NUMON_PRACTICE_ZONE</div>
                </div>
                <div className="p-6 mono text-[11px] leading-relaxed space-y-4">
                  <div className="text-white/20 text-[9px]">// NUMON_PRACTICE_ZONE — Student: Rohan M. | Grade 4</div>

                  <div className="border-b border-white/10 pb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white/50 font-bold uppercase text-[10px]">TODAY'S PRACTICE</span>
                      <span className="text-violet-400 font-black text-[10px]">[DAY 14 🔥]</span>
                    </div>
                    <div className="text-white/40 text-[10px] mb-2">SKILL: Place Value — Sub-Skill 3</div>
                    <div className="text-white/40 text-[10px] mb-1">Progress: <span className="text-violet-400">62% mastered</span></div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-400 w-[62%]" />
                    </div>
                  </div>

                  <div className="border border-white/10 p-4 space-y-3">
                    <div className="text-white/30 text-[9px] uppercase tracking-widest">[ QUESTION 4 OF 10 ]</div>
                    <div className="text-white font-bold">What is 4,506 in expanded form?</div>
                    <div className="text-white/60 font-mono">
                      4,000 + [&nbsp;&nbsp;&nbsp;&nbsp;] + 6
                    </div>
                    <div className="flex gap-4 text-[11px] mt-2">
                      <span className="text-white/40">○ 500</span>
                      <span className="text-violet-400 font-bold">● 500</span>
                      <span className="text-white/40">○ 50</span>
                    </div>
                    <div className="border border-violet-500/40 bg-violet-500/10 text-violet-400 text-center py-2 text-[10px] font-bold cursor-pointer hover:bg-violet-500/20 transition-colors">
                      [ CHECK ANSWER ]
                    </div>
                  </div>

                  <div className="space-y-1 text-[10px]">
                    <div className="text-violet-400/60">RETRY LOGIC: Wrong? Easier variant loads next.</div>
                    <div className="text-violet-400/60">MASTERY: 3 correct in a row → Sub-skill unlocked ✓</div>
                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <div className="text-white/30 text-[9px] uppercase tracking-widest mb-2">MILESTONE PROGRESS</div>
                    {[
                      { label: "Place Value", pct: 78, w: "w-[78%]" },
                      { label: "Fractions", pct: 24, w: "w-[24%]" },
                      { label: "Geometry", pct: 8, w: "w-[8%]" },
                    ].map((m) => (
                      <div key={m.label} className="flex items-center gap-3">
                        <span className="text-white/40 w-24 shrink-0">{m.label}</span>
                        <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full bg-violet-400 ${m.w}`} />
                        </div>
                        <span className="text-white/30 w-8 text-right">{m.pct}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <div className="text-pink-400 text-[10px]">[◆ Earn diamonds for streak days]</div>
                  </div>
                </div>
              </div>

              {/* RIGHT: NARRATIVE + FEATURE CARDS */}
              <div className="space-y-8">
                <p className="text-lg text-white/40 italic leading-relaxed uppercase">
                  Numon is the daily practice layer beneath the live class. Built Kumon-style —
                  short, focused, daily repetition with mastery gates. But AI-generated, so
                  every student gets a fresh problem set. Completing a streak earns Diamonds.
                </p>

                <div className="space-y-4">
                  <div className="p-6 border-l-2 border-violet-500 bg-violet-500/5">
                    <span className="text-[10px] font-black text-violet-400 uppercase block mb-2 tracking-widest">AI_GENERATION</span>
                    <h4 className="text-lg font-bold text-white uppercase mb-3">Zero Rote Learning</h4>
                    <p className="text-xs text-white/50 italic leading-relaxed uppercase">
                      An internal AI chatbot model auto-generates question variations — swapping numbers, names,
                      and contexts. 10+ math input types supported: fractions, mixed numbers, algebra expressions.
                      67% reduction in content creation costs. 2,000+ worksheets shipped.
                    </p>
                  </div>
                  <div className="p-6 border-l-2 border-violet-500 bg-violet-500/5">
                    <span className="text-[10px] font-black text-violet-400 uppercase block mb-2 tracking-widest">MASTERY_LOGIC</span>
                    <h4 className="text-lg font-bold text-white uppercase mb-3">Retry-Based Progression</h4>
                    <p className="text-xs text-white/50 italic leading-relaxed uppercase">
                      Wrong answers don't penalize — they trigger an easier variant of the same sub-skill.
                      3 correct answers in a row unlocks the next sub-skill and contributes to milestone
                      completion. Progress ties directly to the 4-layer curriculum framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FOOTER — IMPACT LOG ── */}
        <footer className="py-14 sm:py-20 md:py-40 text-center border-t border-white/5 bg-[#080808]">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.8em] font-bold">IMPACT_SUMMARY_LOG</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-white/5 py-12">
              {[
                { val: "10 → 60/wk", label: "Lesson velocity" },
                { val: "65%", label: "Teacher adoption Ph.1" },
                { val: "1:20", label: "New class ratio" },
                { val: "2,000+", label: "Worksheets shipped" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-4xl font-bold text-white font-mono tracking-tighter uppercase block">{item.val}</span>
                  <span className="text-[10px] block text-white/30 uppercase font-bold tracking-widest mt-1">{item.label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white italic leading-tight uppercase tracking-tighter">
              "I built the Math vertical from a blank page — curriculum, content engine,
              and delivery model — and{" "}
              <span className="text-violet-400">changed how the unit economics worked</span>."
            </h2>

            <div className="pt-10 flex flex-wrap justify-center gap-6 md:gap-10 opacity-20 text-[10px] tracking-[0.2em] font-bold uppercase mono">
              <span>Node: Math_Vertical</span>
              <span>Stack: WebSocket/AI</span>
              <span>Status: Group_Class_Active</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
