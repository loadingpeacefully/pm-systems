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
    <div className="overflow-x-hidden selection:bg-blue-400 selection:text-black" style={{ background: 'var(--t-bg)', color: 'var(--t-text)' }}>
      <style>{`
        :root {
          --blue: #3B82F6;
          --crimson: #FF3131;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .text-blue-accent { color: var(--blue); text-shadow: 0 0 10px rgba(59,130,246,0.3); }
        .text-crimson { color: var(--crimson); text-shadow: 0 0 10px rgba(255,49,49,0.3); }
        .grid-overlay {
          background-image: linear-gradient(var(--t-grid-line) 1px, transparent 1px),
                            linear-gradient(90deg, var(--t-grid-line) 1px, transparent 1px);
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
          background: var(--t-terminal-bg);
          border: 1px solid var(--t-terminal-border);
          box-shadow: var(--t-shadow);
        }
        .scanline {
          width: 100%; height: 2px;
          background: var(--t-scanline);
          position: absolute; top: 0; left: 0; z-index: 50;
          animation: scan 4s linear infinite;
          pointer-events: none;
        }
        @keyframes scan { from { top: 0; } to { top: 100%; } }
        .hud-border {
          border: 1px solid var(--t-border);
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
          color: var(--t-border);
          font-family: 'JetBrains Mono';
          font-size: 14px;
        }
        .data-node {
          border-left: 1px solid var(--t-border);
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
          color: var(--t-text-faint);
          border: 1px solid var(--t-border);
          padding: 2rem;
          background: var(--t-terminal-bg);
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
        ::-webkit-scrollbar-track { background: var(--t-bg); }
        ::-webkit-scrollbar-thumb { background: var(--t-border); }
        ::-webkit-scrollbar-thumb:hover { background: var(--blue); }
      `}</style>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 hover:border-blue-400 hover:text-blue-400 transition-all shadow-lg group"
          style={{ background: 'var(--t-bg)', border: '1px solid var(--t-border)', color: 'var(--t-heading)' }}
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <div className="grid-overlay min-h-screen">

        <ProjectNav nextTo="/p/P2" nextLabel="ADHYAYAN_OS" nextColor="text-purple-400" />

        {/* ── SECTION 1: HERO ── */}
        <header className="min-h-screen flex flex-col px-4 sm:px-6 md:px-20 relative overflow-hidden" style={{ background: 'var(--t-bg)', borderBottom: '1px solid var(--t-border)' }}>
          <div className="scanline" />

          <div className="flex-grow flex flex-col justify-center relative z-10 pt-14 sm:pt-16 py-6 md:py-12">
            <div className="max-w-7xl space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-blue-400/30 bg-blue-400/5 text-blue-400 text-[9px] font-bold tracking-[0.2em] uppercase">
                <Server size={10} /> // INFRA · PLATFORM CONSOLIDATION · ZERO DOWNTIME
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase" style={{ color: 'var(--t-heading)' }}>
                UNIFIED <br />
                <span className="text-blue-400">CORE</span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-bold max-w-5xl uppercase tracking-tight" style={{ color: 'var(--t-text-muted)' }}>
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
                  <div key={i} className="p-6 hud-border hud-border-top relative" style={{ background: 'var(--t-badge-bg)' }}>
                    <div className="text-[28px] font-bold mono tracking-tighter uppercase" style={{ color: 'var(--t-heading)' }}>{item.big}</div>
                    <div className="text-[10px] uppercase tracking-widest mt-2" style={{ color: 'var(--t-text-faint)' }}>{item.small}</div>
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
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]" style={{ color: 'var(--t-heading)' }}>
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
                          <p className="text-xl leading-relaxed font-light" style={{ color: 'var(--t-text-subtle)' }}>{point.desc}</p>
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
              <div className="terminal-block rounded-md overflow-hidden shadow-2xl relative">
                <div className="px-4 py-3 flex items-center justify-between" style={{ background: 'var(--t-badge-bg)', borderBottom: '1px solid var(--t-border)' }}>
                  <div className="flex gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--t-text-ghost)' }}>SCHEMA_CONFLICT_REPORT.log</div>
                </div>
                <div className="p-8 font-mono text-xs leading-loose">
                  <div className="mb-4" style={{ color: 'var(--t-text-ghost)' }}>// SCHEMA_CONFLICT_REPORT.log</div>
                  <div className="flex gap-4 pb-3 mb-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <div style={{ color: 'var(--t-text-ghost)' }}>01</div>
                    <div><span style={{ color: 'var(--t-text-muted)' }}>STUDENT_TABLE: brightchamps_db</span><span className="ml-4" style={{ color: 'var(--t-text-ghost)' }}>← ID format: BC_001</span></div>
                  </div>
                  <div className="flex gap-4 pb-3 mb-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <div style={{ color: 'var(--t-text-ghost)' }}>02</div>
                    <div><span style={{ color: 'var(--t-text-muted)' }}>STUDENT_TABLE: education10x_db</span><span className="ml-4" style={{ color: 'var(--t-text-ghost)' }}>← ID format: EX_10045</span></div>
                  </div>
                  <div className="flex gap-4 pb-3 mb-6" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <div style={{ color: 'var(--t-text-ghost)' }}>03</div>
                    <div><span style={{ color: 'var(--t-text-muted)' }}>STUDENT_TABLE: schola_db</span><span className="ml-4" style={{ color: 'var(--t-text-ghost)' }}>← ID format: SCH_A_99</span></div>
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
                  <div className="mt-6 pt-4 italic flex items-center gap-2" style={{ borderTop: '1px solid var(--t-border)', color: 'var(--t-text-faint)' }}>
                    <Terminal size={12} />
                    <span>Awaiting: normalization pipeline...</span>
                    <span className="w-2 h-4 bg-blue-400 animate-pulse inline-block ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 border border-blue-400 px-6 py-4 shadow-[0_0_30px_rgba(59,130,246,0.15)]" style={{ background: 'var(--t-bg)' }}>
                <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--t-text-faint)' }}>Proposed Solution</div>
                <div className="text-blue-400 font-bold font-mono">ETL PIPELINE &gt;&gt;</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: ARCHITECTURE — ETL PIPELINE ── */}
        <section className="py-14 sm:py-20 md:py-32 px-4 sm:px-6 md:px-20 scroll-reveal" style={{ background: 'var(--t-badge-bg)', borderTop: '1px solid var(--t-border)', borderBottom: '1px solid var(--t-border)' }}>
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                // SYSTEM ARCHITECTURE: THE ETL TRIAD
              </span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter" style={{ color: 'var(--t-heading)' }}>
                EXTRACT. TRANSFORM. <span className="text-blue-400">UNIFY.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              <div className="p-8 rounded-sm space-y-4 pipeline-arrow group hover:border-blue-500/50 transition-colors" style={{ border: '1px solid var(--t-border)', background: 'var(--t-bg)' }}>
                <div className="text-blue-400 font-bold text-[10px] tracking-widest uppercase">Phase 01 / Extract</div>
                <h3 className="text-xl font-bold uppercase" style={{ color: 'var(--t-heading)' }}>RAW_DATA_PULL</h3>
                <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-faint)' }}>
                  SQL dumps, Python scripts, and Sheets API calls pulled 3 company databases simultaneously.
                  Fragmented across MySQL, MongoDB, and Google Sheets.
                </p>
              </div>
              <div className="p-8 rounded-sm space-y-4 pipeline-arrow group hover:border-blue-500/50 transition-colors" style={{ border: '1px solid var(--t-border)', background: 'var(--t-bg)' }}>
                <div className="text-blue-400 font-bold text-[10px] tracking-widest uppercase">Phase 02 / Transform</div>
                <h3 className="text-xl font-bold uppercase" style={{ color: 'var(--t-heading)' }}>NORMALIZATION_ENGINE</h3>
                <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-faint)' }}>
                  Deduplication of 2,847 duplicate emails. ID schema standardization.
                  Teacher schedule normalization across verticals.
                </p>
              </div>
              <div className="p-8 rounded-sm space-y-4 group hover:border-blue-500/50 transition-colors" style={{ border: '1px solid var(--t-border)', background: 'var(--t-bg)' }}>
                <div className="text-blue-400 font-bold text-[10px] tracking-widest uppercase">Phase 03 / Load</div>
                <h3 className="text-xl font-bold uppercase" style={{ color: 'var(--t-heading)' }}>UNIFIED_SCHEMA</h3>
                <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-faint)' }}>
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
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ color: 'var(--t-heading)' }}>
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
                  <div className="text-2xl font-bold mono mb-3 tracking-tighter uppercase" style={{ color: 'var(--t-heading)' }}>
                    {node.title}
                  </div>
                  <p className="text-xs leading-relaxed italic uppercase font-bold tracking-tight" style={{ color: 'var(--t-text-faint)' }}>
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT: STICKY TERMINAL */}
            <div className="lg:sticky lg:top-40">
              <div className="terminal-block p-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-sm">
                <div className="p-8 md:p-10 rounded-sm mono text-[11px] leading-relaxed" style={{ background: 'var(--t-terminal-bg)' }}>
                  <div className="flex justify-between items-center mb-8 pb-4" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--t-text-ghost)' }}>MIGRATION_PROGRESS_LOG</span>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div style={{ color: 'var(--t-text-subtle)' }}>PHASE_01: NEW_USERS <span style={{ color: 'var(--t-text-ghost)' }}>.............</span> <span className="text-blue-400">✓ COMPLETE</span></div>
                      <div className="pl-4 space-y-1" style={{ color: 'var(--t-text-ghost)' }}>
                        <div>&gt; 0 rollbacks triggered</div>
                        <div>&gt; UnifiedFlow stability: 99.2%</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div style={{ color: 'var(--t-text-subtle)' }}>PHASE_02: LOW_RISK_VERTICALS <span style={{ color: 'var(--t-text-ghost)' }}>....</span> <span className="text-blue-400">✓ COMPLETE</span></div>
                      <div className="pl-4 space-y-1" style={{ color: 'var(--t-text-ghost)' }}>
                        <div>&gt; Robotics: 100% migrated</div>
                        <div>&gt; FinLit:   100% migrated</div>
                        <div>&gt; Parallel systems: ACTIVE <span style={{ color: 'var(--t-text-ghost)' }}>← safety net</span></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div style={{ color: 'var(--t-text-subtle)' }}>PHASE_03: FULL_BATCH_CUTOVER <span style={{ color: 'var(--t-text-ghost)' }}>....</span> <span className="text-blue-400">✓ COMPLETE</span></div>
                      <div className="pl-4 space-y-1" style={{ color: 'var(--t-text-ghost)' }}>
                        <div>&gt; Students migrated: 100%</div>
                        <div>&gt; Teachers migrated: 100%</div>
                        <div>&gt; Duplicate emails resolved: 2,847</div>
                        <div>&gt; Orphaned records cleaned: 14,332</div>
                        <div>&gt; Legacy systems: DEPRECATED</div>
                        <div>&gt; Rollbacks triggered: 0</div>
                      </div>
                    </div>

                    <div className="pt-6 space-y-3" style={{ borderTop: '1px solid var(--t-border)' }}>
                      <div className="flex justify-between text-[10px] font-bold uppercase">
                        <span style={{ color: 'var(--t-text-faint)' }}>STATUS: MISSION_COMPLETE</span>
                        <span className="text-blue-400">100%</span>
                      </div>
                      <div className="h-1 w-full rounded-full overflow-hidden" style={{ background: 'var(--t-badge-bg)' }}>
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
        <section className="py-14 sm:py-20 md:py-40 px-4 sm:px-6 md:px-20 scroll-reveal" style={{ background: 'var(--t-badge-bg)', borderTop: '1px solid var(--t-border)', borderBottom: '1px solid var(--t-border)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 space-y-4">
              <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                PRODUCT_SYSTEM
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ color: 'var(--t-heading)' }}>
                THE UNIFIED <span className="text-blue-400">CONTROL PLANE</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
              {/* LEFT: DASHBOARD TERMINAL */}
              <div className="terminal-block rounded-sm overflow-hidden">
                <div className="px-4 py-3 flex items-center justify-between" style={{ background: 'var(--t-badge-bg)', borderBottom: '1px solid var(--t-border)' }}>
                  <div className="flex gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--t-text-ghost)' }}>UNIFIED_DASHBOARD_v1.0</div>
                </div>
                <div className="p-8 mono text-[11px] leading-relaxed">
                  <div className="mb-4" style={{ color: 'var(--t-text-ghost)' }}>// UNIFIED_DASHBOARD_v1.0</div>
                  <div className="p-4 mb-4" style={{ border: '1px solid var(--t-border)' }}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-400 font-bold">[ ● SUNEET J. ]</span>
                      <span style={{ color: 'var(--t-text-ghost)' }}>Coding + FinLit + Robotics</span>
                    </div>
                    <div className="pt-3 mb-3" style={{ borderTop: '1px solid var(--t-border)' }}>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] mb-3" style={{ color: 'var(--t-text-ghost)' }}>
                        <span>MY CLASSES</span>
                        <span>PROGRESS</span>
                        <span>SCHEDULE</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]" style={{ color: 'var(--t-text-faint)' }}>
                        <div>↓</div><div>↓</div><div>↓</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px] mt-1">
                        <div className="border border-blue-400/20 p-2" style={{ color: 'var(--t-text-muted)' }}>[Live now]<br/>Coding</div>
                        <div className="p-2" style={{ border: '1px solid var(--t-border)', color: 'var(--t-text-muted)' }}>[Quiz Galaxy]<br/>72% complete</div>
                        <div className="p-2" style={{ border: '1px solid var(--t-border)', color: 'var(--t-text-muted)' }}>[Tue 4PM ✓]<br/>[Thu 4PM ✓]</div>
                      </div>
                    </div>
                    <div className="pt-3" style={{ borderTop: '1px solid var(--t-border)', color: 'var(--t-text-faint)' }}>
                      MPIN: ● ● ● ● ●● &nbsp;&nbsp;[ Auto-detected: +91 ▼ ]
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]" style={{ color: 'var(--t-text-ghost)' }}>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse inline-block" />
                    STATUS: Session_Active | SSO_Verified ✓
                  </div>
                </div>
              </div>

              {/* RIGHT: FEATURE CARDS */}
              <div className="space-y-6">
                <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                  <span className="text-[10px] font-black text-blue-400 uppercase block mb-2 tracking-widest">GLOBAL_LOGIN</span>
                  <h4 className="text-lg font-bold uppercase mb-3" style={{ color: 'var(--t-heading)' }}>IP-Detected SSO</h4>
                  <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-subtle)' }}>
                    Centralized login rebuilt from scratch. IP-based auto-detection of dial codes eliminated
                    international login friction. Flexible 4 or 6-digit MPIN support unified all legacy auth flows.
                  </p>
                </div>
                <div className="p-6 border-l-2 border-blue-500 bg-blue-500/5">
                  <span className="text-[10px] font-black text-blue-400 uppercase block mb-2 tracking-widest">UNIFIED_SCHEDULING</span>
                  <h4 className="text-lg font-bold uppercase mb-3" style={{ color: 'var(--t-heading)' }}>Single Availability Engine</h4>
                  <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-subtle)' }}>
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
        <footer className="py-14 sm:py-20 md:py-40 text-center" style={{ borderTop: '1px solid var(--t-border)', background: 'var(--t-terminal-bg)' }}>
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <p className="text-[10px] uppercase tracking-[0.8em] font-bold" style={{ color: 'var(--t-text-ghost)' }}>IMPACT_SUMMARY_LOG</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-12" style={{ borderTop: '1px solid var(--t-border)', borderBottom: '1px solid var(--t-border)' }}>
              {[
                { val: "3 → 1", label: "Unified Platform" },
                { val: "100%", label: "Migration Rate" },
                { val: "80%", label: "Ops Cost Reduction" },
                { val: "0", label: "Rollbacks Triggered" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-4xl font-bold font-mono tracking-tighter uppercase block" style={{ color: 'var(--t-heading)' }}>{item.val}</span>
                  <span className="text-[10px] block uppercase font-bold tracking-widest mt-1" style={{ color: 'var(--t-text-ghost)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-5xl font-black italic leading-tight uppercase tracking-tighter" style={{ color: 'var(--t-heading)' }}>
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
