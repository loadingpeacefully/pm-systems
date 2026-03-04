import React, { useEffect, useState } from "react";
import { ProjectNav } from "@/components/ProjectNav";
import {
  AlertTriangle,
  Server,
  GitMerge,
  Database,
  Layers,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Terminal,
  XCircle,
} from "lucide-react";

export default function UnifiedCore() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const problemPoints = [
    {
      title: "SEVEN_SILO_PROBLEM",
      icon: <Layers size={18} />,
      desc: "Students enrolled in Coding, Robotics, FinLit, and Schola each had separate dashboards, separate logins, and separate progress tracking. A parent with two courses had two entirely different apps.",
    },
    {
      title: "OPS_AT_20_HUMANS",
      icon: <AlertTriangle size={18} />,
      desc: "Demo scheduling ran entirely on Google Sheets and phone calls. ~20 Ops staff manually matched students to teachers across time zones. Teachers waited in empty classrooms. No automated no-show detection existed.",
    },
    {
      title: "DEAD_END_ARCHITECTURE",
      icon: <XCircle size={18} />,
      desc: "Onboarding any new course vertical required rebuilding user flows from scratch. Legacy data lived across MySQL, MongoDB, and Google Sheets simultaneously — with no single source of truth.",
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

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-[#050505] text-[#d1d1d1] overflow-x-hidden selection:bg-blue-400 selection:text-black">
      <style>{`
        :root {
          --blue: #3B82F6;
          --crimson: #FF3131;
          --bg: #050505;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .text-blue-accent { color: var(--blue); text-shadow: 0 0 10px rgba(59,130,246,0.3); }
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
          background: rgba(59,130,246,0.05);
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
          border-top: 1px solid var(--blue);
          border-left: 1px solid var(--blue);
        }
        .hud-border-top::after {
          content: '';
          position: absolute;
          top: -1px; right: -1px;
          width: 10px; height: 10px;
          border-top: 1px solid var(--blue);
          border-right: 1px solid var(--blue);
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
          background: var(--blue);
          box-shadow: 0 0 10px var(--blue);
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
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: var(--blue); }
      `}</style>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-black border border-white/20 text-white hover:border-blue-400 hover:text-blue-400 transition-all shadow-lg group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <div className="grid-overlay min-h-screen">

        <ProjectNav nextTo="/p/P2" nextLabel="ADHYAYAN_OS" nextColor="text-purple-400" />

        {/* ── SECTION 1: HERO ── */}
        <header className="min-h-screen flex flex-col px-4 sm:px-6 md:px-20 relative overflow-hidden bg-[#050505] border-b border-white/5">
          <div className="scanline" />

          <div className="flex-grow flex flex-col justify-center relative z-10 pt-14 sm:pt-16 py-6 md:py-12">
            <div className="max-w-7xl space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-blue-400/30 bg-blue-400/5 text-blue-400 text-[9px] font-bold tracking-[0.2em] uppercase">
                <Server size={10} /> // INFRA · PLATFORM CONSOLIDATION · ZERO DOWNTIME
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase text-white">
                UNIFIED <br />
                <span className="text-blue-400">CORE</span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-white/70 leading-relaxed font-bold max-w-5xl uppercase tracking-tight">
                Merging 3 companies, 7 product lines, and ~20 fragmented ops workflows
                into one MySQL/Redis architecture. Zero downtime. 100% migration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
                {[
                  { big: "3 → 1", small: "Companies unified" },
                  { big: "100% Migration", small: "Zero data loss" },
                  { big: "20 → 3 Staff", small: "Ops headcount reduced" },
                  { big: "Zero Downtime", small: "Parallel systems strategy" },
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
              // DIAGNOSTIC_OVERRIDE: THREE_COMPANY_COLLAPSE
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
              WHY FRAGMENTED <br />
              <span className="text-crimson">SYSTEMS COST SCALE</span>
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
                          i === currentProblemIndex ? "w-8 bg-blue-400" : "w-2 bg-blue-900/30"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrev}
                      className="p-3 border border-blue-900/30 text-blue-400 hover:bg-blue-400 hover:text-black transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-mono text-xs text-blue-400 tracking-widest">
                      0{currentProblemIndex + 1} / 0{problemPoints.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-3 border border-blue-900/30 text-blue-400 hover:bg-blue-400 hover:text-black transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: TERMINAL */}
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
                  <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">SCHEMA_CONFLICT_REPORT.log</div>
                </div>
                <div className="p-8 font-mono text-xs leading-loose">
                  <div className="text-white/30 mb-4">// SCHEMA_CONFLICT_REPORT.log</div>
                  <div className="flex gap-4 border-b border-white/5 pb-3 mb-3">
                    <div className="text-white/30">01</div>
                    <div><span className="text-white/60">STUDENT_TABLE: brightchamps_db</span><span className="text-white/30 ml-4">← ID format: BC_001</span></div>
                  </div>
                  <div className="flex gap-4 border-b border-white/5 pb-3 mb-3">
                    <div className="text-white/30">02</div>
                    <div><span className="text-white/60">STUDENT_TABLE: education10x_db</span><span className="text-white/30 ml-4">← ID format: EX_10045</span></div>
                  </div>
                  <div className="flex gap-4 border-b border-white/5 pb-3 mb-6">
                    <div className="text-white/30">03</div>
                    <div><span className="text-white/60">STUDENT_TABLE: schola_db</span><span className="text-white/30 ml-4">← ID format: SCH_A_99</span></div>
                  </div>
                  <div className="bg-red-500/10 -mx-8 px-8 py-4 border-l-2 border-red-500 space-y-2">
                    <div className="text-crimson font-bold flex items-center gap-2">
                      <XCircle size={12} /> MERGE_ATTEMPT: FAILED
                    </div>
                    <div className="text-red-300/60 pl-5 space-y-1">
                      <div>Reason: Incompatible ID schemas</div>
                      <div>Duplicate emails: 2,847 found</div>
                      <div>Orphaned records: 14,332</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 text-white/40 italic flex items-center gap-2">
                    <Terminal size={12} />
                    <span>Awaiting: normalization pipeline...</span>
                    <span className="w-2 h-4 bg-blue-400 animate-pulse inline-block ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black border border-blue-400 px-6 py-4 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Proposed Solution</div>
                <div className="text-blue-400 font-bold font-mono">ETL PIPELINE &gt;&gt;</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: ARCHITECTURE — ETL PIPELINE ── */}
        <section className="py-14 sm:py-20 md:py-32 bg-white/[0.02] border-y border-white/5 px-4 sm:px-6 md:px-20 scroll-reveal">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                // SYSTEM ARCHITECTURE: THE ETL TRIAD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
                EXTRACT. TRANSFORM. <span className="text-blue-400">UNIFY.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              <div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 pipeline-arrow group hover:border-blue-500/50 transition-colors">
                <div className="text-blue-400 font-bold text-[10px] tracking-widest uppercase">Phase 01 / Extract</div>
                <h3 className="text-xl font-bold text-white uppercase">RAW_DATA_PULL</h3>
                <p className="text-xs text-white/40 italic leading-relaxed uppercase">
                  SQL dumps, Python scripts, and Sheets API calls pulled 3 company databases simultaneously.
                  Fragmented across MySQL, MongoDB, and Google Sheets.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 pipeline-arrow group hover:border-blue-500/50 transition-colors">
                <div className="text-blue-400 font-bold text-[10px] tracking-widest uppercase">Phase 02 / Transform</div>
                <h3 className="text-xl font-bold text-white uppercase">NORMALIZATION_ENGINE</h3>
                <p className="text-xs text-white/40 italic leading-relaxed uppercase">
                  Deduplication of 2,847 duplicate emails. ID schema standardization.
                  Teacher schedule normalization across verticals.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-black rounded-sm space-y-4 group hover:border-blue-500/50 transition-colors">
                <div className="text-blue-400 font-bold text-[10px] tracking-widest uppercase">Phase 03 / Load</div>
                <h3 className="text-xl font-bold text-white uppercase">UNIFIED_SCHEMA</h3>
                <p className="text-xs text-white/40 italic leading-relaxed uppercase">
                  Single MySQL core + Redis cache. Node.js/Python APIs.
                  React/Vite frontends for Student, Teacher, and Admin dashboards.
                </p>
              </div>
            </div>

            <div className="diagram-container mono whitespace-pre overflow-x-auto rounded-sm">
{`[BRIGHTCHAMPS DB] ─┐
[EDUCATION10X DB] ─┤──► [ETL PIPELINE] ──► [UNIFIED MYSQL + REDIS]
[SCHOLA DB]       ─┘         │                      │
                              │                      ▼
                         [INTEGRITY          [STUDENT DASHBOARD]
                          CHECKS +           [TEACHER DASHBOARD]
                          ROLLBACK]          [ADMIN DASHBOARD]`}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: DEEP DIVE A — MIGRATION STRATEGY ── */}
        <section className="py-14 sm:py-20 md:py-32 px-4 sm:px-6 md:px-20 max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16 space-y-4">
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              MIGRATION_STRATEGY
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              HOW YOU MOVE <span className="text-blue-400">3 COMPANIES</span> <br />
              WITHOUT STOPPING THE CLOCK
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
            {/* LEFT: DATA NODES */}
            <div className="space-y-12">
              {[
                {
                  phase: "PHASE_ONE",
                  title: "NEW_USERS_FIRST",
                  desc: "Routed only new student signups into the UnifiedFlow. Zero migration risk. Pure validation of the new architecture.",
                },
                {
                  phase: "PHASE_TWO",
                  title: "LOW_RISK_VERTICALS",
                  desc: "Robotics and FinLit migrated first — smaller user bases, simpler data schemas. Parallel systems kept live as fallback.",
                },
                {
                  phase: "PHASE_THREE",
                  title: "FULL_BATCH_CUTOVER",
                  desc: "Batch migration of all existing paid students. Automated integrity checks + rollback scripts on every run. 100% migration achieved. Legacy systems deprecated.",
                },
              ].map((node, i) => (
                <div key={i} className="data-node">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] block mb-2">
                    {node.phase}
                  </span>
                  <div className="text-2xl font-bold text-white mono mb-3 tracking-tighter uppercase">
                    {node.title}
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed italic uppercase font-bold tracking-tight">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT: STICKY TERMINAL */}
            <div className="lg:sticky lg:top-40">
              <div className="terminal-block p-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-sm">
                <div className="bg-[#080808] p-8 md:p-10 rounded-sm mono text-[11px] leading-relaxed">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">MIGRATION_PROGRESS_LOG</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="text-white/50">PHASE_01: NEW_USERS <span className="text-white/20">.............</span> <span className="text-blue-400">✓ COMPLETE</span></div>
                      <div className="pl-4 text-white/30 space-y-1">
                        <div>&gt; 0 rollbacks triggered</div>
                        <div>&gt; UnifiedFlow stability: 99.2%</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-white/50">PHASE_02: LOW_RISK_VERTICALS <span className="text-white/20">....</span> <span className="text-blue-400">✓ COMPLETE</span></div>
                      <div className="pl-4 text-white/30 space-y-1">
                        <div>&gt; Robotics: 100% migrated</div>
                        <div>&gt; FinLit:   100% migrated</div>
                        <div>&gt; Parallel systems: ACTIVE <span className="text-white/20">← safety net</span></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-white/50">PHASE_03: FULL_BATCH_CUTOVER <span className="text-white/20">....</span> <span className="text-blue-400">✓ COMPLETE</span></div>
                      <div className="pl-4 text-white/30 space-y-1">
                        <div>&gt; Students migrated: 100%</div>
                        <div>&gt; Teachers migrated: 100%</div>
                        <div>&gt; Duplicate emails resolved: 2,847</div>
                        <div>&gt; Orphaned records cleaned: 14,332</div>
                        <div>&gt; Legacy systems: DEPRECATED</div>
                        <div>&gt; Rollbacks triggered: 0</div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 space-y-3">
                      <div className="flex justify-between text-[10px] font-bold uppercase">
                        <span className="text-white/40">STATUS: MISSION_COMPLETE</span>
                        <span className="text-blue-400">100%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: DEEP DIVE B — UNIFIED CONTROL PLANE ── */}
        <section className="py-14 sm:py-20 md:py-40 bg-white/[0.02] border-y border-white/5 px-4 sm:px-6 md:px-20 scroll-reveal">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 space-y-4">
              <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                PRODUCT_SYSTEM
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                THE UNIFIED <span className="text-blue-400">CONTROL PLANE</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
              {/* LEFT: DASHBOARD TERMINAL */}
              <div className="terminal-block rounded-sm overflow-hidden">
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">UNIFIED_DASHBOARD_v1.0</div>
                </div>
                <div className="p-8 mono text-[11px] leading-relaxed">
                  <div className="text-white/30 mb-4">// UNIFIED_DASHBOARD_v1.0</div>
                  <div className="border border-white/10 p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-400 font-bold">[ ● SUNEET J. ]</span>
                      <span className="text-white/30">Coding + FinLit + Robotics</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 mb-3">
                      <div className="grid grid-cols-3 gap-2 text-center text-white/30 text-[10px] mb-3">
                        <span>MY CLASSES</span>
                        <span>PROGRESS</span>
                        <span>SCHEDULE</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-white/40">
                        <div>↓</div><div>↓</div><div>↓</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] mt-1">
                        <div className="border border-blue-400/20 p-2 text-white/60">[Live now]<br/>Coding</div>
                        <div className="border border-white/10 p-2 text-white/60">[Quiz Galaxy]<br/>72% complete</div>
                        <div className="border border-white/10 p-2 text-white/60">[Tue 4PM ✓]<br/>[Thu 4PM ✓]</div>
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-3 text-white/40">
                      MPIN: ● ● ● ● ●● &nbsp;&nbsp;[ Auto-detected: +91 ▼ ]
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-white/30">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse inline-block" />
                    STATUS: Session_Active | SSO_Verified ✓
                  </div>
                </div>
              </div>

              {/* RIGHT: FEATURE CARDS */}
              <div className="space-y-6">
                <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                  <span className="text-[10px] font-black text-blue-400 uppercase block mb-2 tracking-widest">GLOBAL_LOGIN</span>
                  <h4 className="text-lg font-bold text-white uppercase mb-3">IP-Detected SSO</h4>
                  <p className="text-xs text-white/50 italic leading-relaxed uppercase">
                    Centralized login rebuilt from scratch. IP-based auto-detection of dial codes eliminated
                    international login friction. Flexible 4 or 6-digit MPIN support unified all legacy auth flows.
                  </p>
                </div>
                <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                  <span className="text-[10px] font-black text-blue-400 uppercase block mb-2 tracking-widest">UNIFIED_SCHEDULING</span>
                  <h4 className="text-lg font-bold text-white uppercase mb-3">Single Availability Engine</h4>
                  <p className="text-xs text-white/50 italic leading-relaxed uppercase">
                    Teachers across multiple verticals now mark Long Term Availability and One-Time slots in one
                    interface. No more cross-vertical scheduling conflicts. Real-time no-show alerts eliminated
                    teachers waiting in empty classrooms.
                  </p>
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
                { val: "3 → 1", label: "Unified Platform" },
                { val: "100%", label: "Migration Rate" },
                { val: "80%", label: "Ops Cost Reduction" },
                { val: "0", label: "Rollbacks Triggered" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-4xl font-bold text-white font-mono tracking-tighter uppercase block">{item.val}</span>
                  <span className="text-[10px] block text-white/30 uppercase font-bold tracking-widest mt-1">{item.label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white italic leading-tight uppercase tracking-tighter">
              "I built the backbone that turned 3 fragmented companies into{" "}
              <span className="text-blue-400">one scalable platform</span>{" "}
              — without stopping the clock for a single student."
            </h2>

            <div className="pt-10 flex flex-wrap justify-center gap-6 md:gap-10 opacity-20 text-[10px] tracking-[0.2em] font-bold uppercase mono font-bold">
              <span>Node: Unified_Core</span>
              <span>Stack: MySQL/Redis</span>
              <span>Status: Backbone_Active</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
