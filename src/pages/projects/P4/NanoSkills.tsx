import React, { useEffect, useState } from "react";
import { ProjectNav } from "@/components/ProjectNav";
import {
  ArrowUp,
  ShoppingBag,
  TrendingUp,
  Zap,
  AlertTriangle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Terminal,
  BarChart2,
  Globe,
  Mail,
} from "lucide-react";

export default function NanoSkills() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const problemPoints = [
    {
      title: "DIAMOND_HOARDING",
      icon: <BarChart2 size={18} />,
      desc: "Over 30% of students held more than 100 diamonds but hadn't enrolled in anything new. Only 19.2% of purchased diamonds were being consumed. High intent, zero action — a monetization black hole.",
    },
    {
      title: "ZERO_CONVERSION_WALL",
      icon: <XCircle size={18} />,
      desc: "When a student clicked 'Enroll' and didn't have enough diamonds, they hit a dead end. No prompt. No top-up option. No fallback. The screen simply blocked them — and 100% of those students bounced.",
    },
    {
      title: "68%_ENROLLMENT_DROPOUT",
      icon: <AlertTriangle size={18} />,
      desc: "68.4% of students who spent their diamonds to enroll never started their first lesson. The product celebrated the purchase but abandoned the student immediately after. Completion was an afterthought.",
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
    <div className="overflow-x-hidden" style={{ background: 'var(--t-bg)', color: 'var(--t-text)' }}>
      <style>{`
        :root {
          --pink: #F472B6;
          --crimson: #FF3131;
        }
        .mono { font-family: 'JetBrains Mono', monospace; }
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
          box-shadow: 0 20px 50px var(--t-shadow);
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
          border-top: 1px solid var(--pink);
          border-left: 1px solid var(--pink);
        }
        .hud-border-top::after {
          content: '';
          position: absolute;
          top: -1px; right: -1px;
          width: 10px; height: 10px;
          border-top: 1px solid var(--pink);
          border-right: 1px solid var(--pink);
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
          background: var(--pink);
          box-shadow: 0 0 10px var(--pink);
        }
        .diagram-container {
          font-size: 11px;
          line-height: 1.6;
          color: var(--t-text-faint);
          border: 1px solid var(--t-border);
          padding: 2rem;
          background: var(--t-badge-bg);
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
        .diamond-pulse { animation: diamond-glow 2s ease-in-out infinite; }
        @keyframes diamond-glow {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 6px #F472B6); }
          50% { opacity: 0.6; filter: drop-shadow(0 0 2px #F472B6); }
        }
        ::selection { background: var(--t-selection-bg); color: var(--t-selection-text); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--t-bg); }
        ::-webkit-scrollbar-thumb { background: var(--t-text-ghost); }
        ::-webkit-scrollbar-thumb:hover { background: var(--pink); }
      `}</style>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 hover:border-pink-400 hover:text-pink-400 transition-all shadow-lg group"
          style={{ background: 'var(--t-bg)', border: '1px solid var(--t-border)', color: 'var(--t-heading)' }}
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <div className="grid-overlay min-h-screen">

        <ProjectNav nextTo="/p/P8" nextLabel="MATH_0_TO_1" nextColor="text-purple-400" />

        {/* ── SECTION 1: HERO ── */}
        <header className="min-h-screen flex flex-col px-4 sm:px-6 md:px-20 relative overflow-hidden" style={{ background: 'var(--t-bg)', borderBottom: '1px solid var(--t-border)' }}>
          <div className="scanline" />

          <div className="flex-grow flex flex-col justify-center relative z-10 pt-14 sm:pt-16 py-6 md:py-12">
            <div className="max-w-7xl space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-pink-400/30 bg-pink-400/5 text-pink-400 text-[9px] font-bold tracking-[0.2em] uppercase">
                <ShoppingBag size={10} /> // D2C · PRODUCT-LED GROWTH · VIRTUAL ECONOMY
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.85] uppercase" style={{ color: 'var(--t-heading)' }}>
                NANO <br />
                <span className="text-pink-400">SKILLS</span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-bold max-w-5xl uppercase tracking-tight" style={{ color: 'var(--t-text-muted)' }}>
                Turning 30% of students who hoarded diamonds but never spent them
                into a self-serve monetization engine. 3,000+ enrollments.
                5% gross margin uplift. Zero sales agents.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 max-w-7xl">
                {[
                  { big: "3,000+", small: "Course enrollments" },
                  { big: "19% → 80%+", small: "Diamond consumption rate" },
                  { big: "+5%", small: "Gross margin uplift" },
                  { big: "0", small: "Sales agents needed" },
                ].map((item, i) => (
                  <div key={i} className="p-6 hud-border hud-border-top relative" style={{ background: 'var(--t-panel-hover)' }}>
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
              // DIAGNOSTIC_OVERRIDE: REVENUE_LEFT_ON_TABLE
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]" style={{ color: 'var(--t-heading)' }}>
              WHY STUDENTS HOARDED <br />
              DIAMONDS AND{" "}
              <span className="text-crimson animate-glitch inline-block">NEVER SPENT</span>
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
                          <p className="text-xl leading-relaxed font-light" style={{ color: 'var(--t-text)' }}>{point.desc}</p>
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
                          i === currentProblemIndex
                            ? "w-8 bg-pink-400"
                            : "w-2 bg-pink-900/30"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePrev}
                      className="p-3 border border-pink-900/30 text-pink-400 hover:bg-pink-400 hover:text-black transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="font-mono text-xs text-pink-400 tracking-widest">
                      0{currentProblemIndex + 1} / 0{problemPoints.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-3 border border-pink-900/30 text-pink-400 hover:bg-pink-400 hover:text-black transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: FUNNEL TERMINAL */}
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
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--t-text-ghost)' }}>FUNNEL_ANALYSIS.log</div>
                </div>
                <div className="p-8 font-mono text-xs leading-loose space-y-3">
                  <div className="flex gap-4 pb-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <span style={{ color: 'var(--t-text-ghost)' }}>01</span>
                    <div><span className="text-blue-400">STUDENTS_WITH_100+_DIAMONDS</span> <span style={{ color: 'var(--t-heading)' }}>→ 30.2% of base</span></div>
                  </div>
                  <div className="flex gap-4 pb-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <span style={{ color: 'var(--t-text-ghost)' }}>02</span>
                    <div><span className="text-blue-400">DIAMOND_CONSUMPTION_RATE</span> <span style={{ color: 'var(--t-heading)' }}>→ 19.2%</span> <span className="text-crimson font-bold ml-2">[CRITICAL: LOW]</span></div>
                  </div>
                  <div className="bg-red-500/10 -mx-8 px-8 py-3 border-l-2 border-red-500 space-y-1">
                    <div className="flex gap-4">
                      <span style={{ color: 'var(--t-text-ghost)' }}>03</span>
                      <div>
                        <span className="text-blue-400">ENROLL_CLICK (insufficient ◆)</span> <span className="text-crimson font-bold">→ DEAD_END</span>
                        <div className="pl-0 mt-1 space-y-0.5" style={{ color: 'var(--t-text-subtle)' }}>
                          <div>&gt;&gt; conversion: <span className="text-crimson font-bold">0.0%</span></div>
                          <div>&gt;&gt; bounce: 100%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pb-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <span style={{ color: 'var(--t-text-ghost)' }}>04</span>
                    <div>
                      <span className="text-blue-400">POST_ENROLL_LESSON_START</span> <span style={{ color: 'var(--t-heading)' }}>→ 31.6%</span>
                      <div className="mt-1 space-y-0.5" style={{ color: 'var(--t-text-subtle)' }}>
                        <div>&gt;&gt; dropout before lesson 1: 68.4%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pb-3" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <span style={{ color: 'var(--t-text-ghost)' }}>05</span>
                    <div>
                      <span className="text-blue-400">PARENT_VISIBILITY_SCORE</span> <span style={{ color: 'var(--t-heading)' }}>→ NULL</span>
                      <div className="mt-1 space-y-0.5" style={{ color: 'var(--t-text-subtle)' }}>
                        <div>&gt;&gt; weekly reports sent: 0</div>
                        <div>&gt;&gt; renewal triggers: 0</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 space-y-1">
                    <div className="text-crimson font-bold animate-pulse">&gt;&gt; REVENUE_LEAK DETECTED</div>
                    <div className="pl-4" style={{ color: 'var(--t-text-faint)' }}>Unrealized GMV: significant</div>
                    <div className="pl-4" style={{ color: 'var(--t-text-faint)' }}>Fix required: <span className="text-pink-400 font-bold">Smart modal + recovery loop</span> <span className="animate-pulse">█</span></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 border border-pink-400 px-6 py-4 shadow-[0_0_30px_rgba(244,114,182,0.15)]" style={{ background: 'var(--t-bg)' }}>
                <div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--t-text-faint)' }}>Proposed Solution</div>
                <div className="text-pink-400 font-bold font-mono">SMART MODAL ENGINE &gt;&gt;</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: ARCHITECTURE — DIAMOND ECONOMY ── */}
        <section className="py-14 sm:py-20 md:py-32 px-4 sm:px-6 md:px-20 scroll-reveal" style={{ background: 'var(--t-panel-hover)', borderTop: '1px solid var(--t-border)', borderBottom: '1px solid var(--t-border)' }}>
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="text-pink-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                // SYSTEM ARCHITECTURE: THE DIAMOND ECONOMY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter" style={{ color: 'var(--t-heading)' }}>
                EARN. SPEND. <span className="text-pink-400">SCALE.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              <div className="p-8 rounded-sm space-y-4 pipeline-arrow group hover:border-pink-500/50 transition-colors" style={{ border: '1px solid var(--t-border)', background: 'var(--t-bg)' }}>
                <div className="text-pink-400 font-bold text-[10px] tracking-widest uppercase">The Earn Side</div>
                <h3 className="text-xl font-bold uppercase" style={{ color: 'var(--t-heading)' }}>DIAMOND_ENGINE</h3>
                <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-faint)' }}>
                  Students earn Diamonds through class attendance, quiz completions, and referrals. Parents top up via
                  geo-localized bundles (30 / 80 / 150 / 300 ◆) priced dynamically per region. Base rate: ~$0.30 USD per diamond.
                </p>
              </div>
              <div className="p-8 rounded-sm space-y-4 pipeline-arrow group hover:border-pink-500/50 transition-colors" style={{ border: '1px solid var(--t-border)', background: 'var(--t-bg)' }}>
                <div className="text-pink-400 font-bold text-[10px] tracking-widest uppercase">The Spend Side</div>
                <h3 className="text-xl font-bold uppercase" style={{ color: 'var(--t-heading)' }}>COURSE_MARKETPLACE</h3>
                <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-faint)' }}>
                  20+ self-paced micro-courses across 5 categories. Standard courses: 50–70 ◆. Harvard-certified premium: 200 ◆.
                  Sorted by 30-day enrollment. New courses pinned for 15 days.
                </p>
              </div>
              <div className="p-8 rounded-sm space-y-4 group hover:border-pink-500/50 transition-colors" style={{ border: '1px solid var(--t-border)', background: 'var(--t-bg)' }}>
                <div className="text-pink-400 font-bold text-[10px] tracking-widest uppercase">The Loop</div>
                <h3 className="text-xl font-bold uppercase" style={{ color: 'var(--t-heading)' }}>ABANDONMENT_ENGINE</h3>
                <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-faint)' }}>
                  48-hour recovery: email to parent (20% discount) + dashboard banner + student feed post.
                  Launch campaigns: 15-day early adopter discount on all new courses.
                </p>
              </div>
            </div>

            <div className="diagram-container mono whitespace-pre overflow-x-auto rounded-sm">
{`[STUDENT EARNS ◆] ──► [NANO SKILLS STORE] ──► [ENROLL → START NOW]
       ▲                      │                        │
       │              [INSUFFICIENT ◆?]         [68% DROP-OFF?]
       │                      │                        │
[PARENT BUYS BUNDLE] ◄── [SMART MODAL]    [WEEKLY PARENT REPORT]
       │                 [4 BUNDLE OPTIONS]    [QUICK RESUME CTA]
       │                 [AUTO-ENROLL ✓]             │
       └─────────────────────────────────────────────┘
                    CLOSED LOOP ECONOMY`}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: DEEP DIVE A — ENROLLMENT FUNNEL ── */}
        <section className="py-14 sm:py-20 md:py-32 px-4 sm:px-6 md:px-20 max-w-7xl mx-auto scroll-reveal">
          <div className="mb-16 space-y-4">
            <span className="text-pink-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              CONVERSION_SYSTEM
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ color: 'var(--t-heading)' }}>
              FROM DEAD END TO <br />
              <span className="text-pink-400">CLOSED LOOP</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
            {/* LEFT: DATA NODES */}
            <div className="space-y-12">
              {[
                {
                  label: "SMART_TOP_UP_MODAL",
                  desc: "When a student clicks 'Enroll' with insufficient diamonds, a context-aware modal surfaces immediately — showing 4 diamond bundle options with geo-localized pricing. Purchasing a bundle auto-enrolls the student. Zero dead ends.",
                },
                {
                  label: "START_NOW_HOOK",
                  desc: "Post-enrollment success modal includes a prominent 'Start Now' CTA that opens the first lesson instantly in a new tab. Designed to collapse the gap between payment intent and first action — the moment students are most motivated.",
                },
                {
                  label: "48HR_RECOVERY_ENGINE",
                  desc: "Students who bounced without purchasing triggered a 3-pronged sequence after 48 hours: parent email with 20% discount, personalized dashboard banner, and a student feed post. All three fire simultaneously — not sequentially.",
                },
              ].map((node, i) => (
                <div key={i} className="data-node">
                  <span className="text-[10px] font-black text-pink-400 uppercase tracking-[0.3em] block mb-2">
                    {node.label}
                  </span>
                  <p className="text-sm leading-relaxed italic uppercase font-bold tracking-tight" style={{ color: 'var(--t-text-faint)' }}>
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT: SMART MODAL TERMINAL */}
            <div className="lg:sticky lg:top-40">
              <div className="terminal-block p-1 bg-gradient-to-br from-pink-500/20 to-transparent rounded-sm">
                <div className="p-8 md:p-10 rounded-sm mono text-[11px] leading-relaxed" style={{ background: 'var(--t-terminal-bg)' }}>
                  <div className="flex justify-between items-center mb-6 pb-4" style={{ borderBottom: '1px solid var(--t-border)' }}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--t-text-ghost)' }}>SMART_MODAL_v2</span>
                    <span className="text-[9px]" style={{ color: 'var(--t-text-ghost)' }}>Triggered on: insufficient ◆</span>
                  </div>

                  <div className="border border-pink-500/30 bg-pink-500/5 p-5 rounded-sm space-y-4">
                    <div className="space-y-1">
                      <div className="font-bold" style={{ color: 'var(--t-heading)' }}>
                        <span className="text-pink-400 diamond-pulse">◆</span> You need 70 diamonds to enroll.
                      </div>
                      <div style={{ color: 'var(--t-text-subtle)' }}>You have: 42 ◆</div>
                    </div>

                    <div>
                      <div className="text-[9px] uppercase tracking-widest mb-3" style={{ color: 'var(--t-text-ghost)' }}>TOP UP YOUR DIAMONDS</div>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { d: "30 ◆", p: "$9" },
                          { d: "80 ◆", p: "$22" },
                          { d: "150◆", p: "$39" },
                          { d: "300◆", p: "$75" },
                        ].map((bundle, i) => (
                          <div
                            key={i}
                            className={`border p-2 text-center text-[9px] transition-colors cursor-pointer ${
                              i === 3
                                ? "border-pink-500/50 bg-pink-500/10"
                                : "hover:border-pink-500/30"
                            }`}
                            style={i !== 3 ? { background: 'var(--t-badge-bg)', borderColor: 'var(--t-border)' } : { background: undefined }}
                          >
                            <div className="font-bold" style={{ color: 'var(--t-heading)' }}>{bundle.d}</div>
                            <div style={{ color: 'var(--t-text-faint)' }}>{bundle.p}</div>
                          </div>
                        ))}
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-pink-400 font-black text-[9px]">[BEST VAL]</span>
                      </div>
                    </div>

                    <div className="border border-pink-400/40 bg-pink-400/10 p-3 text-center text-[10px] font-bold text-pink-400 cursor-pointer hover:bg-pink-400/20 transition-colors">
                      [ BUY &amp; ENROLL INSTANTLY → ]
                    </div>
                    <div className="text-center text-[9px]" style={{ color: 'var(--t-text-ghost)' }}>Auto-enrolled after purchase ✓</div>
                  </div>

                  <div className="mt-6 pt-4 space-y-1 text-[10px]" style={{ borderTop: '1px solid var(--t-border)', color: 'var(--t-text-ghost)' }}>
                    <div>STATUS: Modal_Active | Geo: IN | Currency: INR</div>
                    <div className="flex items-center gap-2">
                      Abandoned 48h ago? → Recovery_Loop: QUEUED
                      <span className="text-pink-400 animate-pulse">●</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: DEEP DIVE B — DISCOVERY ENGINE ── */}
        <section className="py-14 sm:py-20 md:py-40 px-4 sm:px-6 md:px-20 scroll-reveal" style={{ background: 'var(--t-panel-hover)', borderTop: '1px solid var(--t-border)', borderBottom: '1px solid var(--t-border)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 space-y-4">
              <span className="text-pink-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                DISCOVERY_SYSTEM
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ color: 'var(--t-heading)' }}>
                THE LOCALIZED <br />
                <span className="text-pink-400">MARKETPLACE</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
              {/* LEFT: HOMEPAGE TRAY TERMINAL */}
              <div className="terminal-block rounded-sm overflow-hidden">
                <div className="px-4 py-3 flex items-center justify-between" style={{ background: 'var(--t-badge-bg)', borderBottom: '1px solid var(--t-border)' }}>
                  <div className="flex gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--t-text-ghost)' }}>NANO_SKILLS_HOMEPAGE</div>
                </div>
                <div className="p-6 mono text-[11px] leading-relaxed space-y-5">
                  <div className="text-[9px]" style={{ color: 'var(--t-text-ghost)' }}>// NANO_SKILLS_HOMEPAGE — User: Nguyen T. | Lang: VI</div>

                  <div>
                    <div className="text-pink-400 font-black text-[10px] uppercase mb-2 flex items-center gap-2">
                      📌 POPULAR IN VIETNAMESE
                      <span className="text-[8px] border border-pink-400/40 px-1.5 py-0.5 text-pink-400">[NEW]</span>
                    </div>
                    <div className="pl-4 space-y-1" style={{ color: 'var(--t-text-subtle)' }}>
                      <div className="flex justify-between"><span>▶ Digital Storytelling</span><span className="text-pink-400">70 ◆</span></div>
                      <div className="flex justify-between"><span>▶ Gen AI for Kids</span><span className="text-pink-400">50 ◆</span></div>
                      <div className="flex justify-between"><span>▶ Become a YouTuber</span><span className="text-pink-400">60 ◆</span></div>
                    </div>
                  </div>

                  <div>
                    <div className="text-pink-400 font-black text-[10px] uppercase mb-2">📌 PICK UP WHERE YOU LEFT OFF</div>
                    <div className="pl-4 space-y-2" style={{ color: 'var(--t-text-subtle)' }}>
                      <div className="flex justify-between items-center">
                        <span>▶ Vedic Maths — Lesson 3/8</span>
                        <span className="text-pink-400 text-[9px] border border-pink-400/30 px-1">[RESUME →]</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'var(--t-badge-bg)' }}>
                        <div className="h-full bg-pink-400 w-[58%]" />
                      </div>
                      <div className="text-[9px]" style={{ color: 'var(--t-text-ghost)' }}>58% complete</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-pink-400 font-black text-[10px] uppercase mb-2">📌 TEACHER RECOMMENDED</div>
                    <div className="pl-4 space-y-1" style={{ color: 'var(--t-text-subtle)' }}>
                      <div className="italic text-[10px]">▶ "Great work Nguyen! Try this:"</div>
                      <div className="flex justify-between items-center">
                        <span>Harvard: Smart Investing</span>
                        <span className="text-yellow-400/80 font-bold">200 ◆ <span className="text-yellow-400">★</span></span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-pink-400 font-black text-[10px] uppercase mb-2 flex items-center gap-2">
                      📌 TRENDING THIS WEEK
                      <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse inline-block" />
                    </div>
                    <div className="pl-4 space-y-1" style={{ color: 'var(--t-text-subtle)' }}>
                      <div className="flex justify-between"><span>▶ Rubik's Cube Speed Solving</span><span className="text-pink-400">50 ◆</span></div>
                      <div className="flex justify-between"><span>▶ Anti-Bullying Bootcamp</span><span className="text-pink-400">55 ◆</span></div>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-between text-[10px]" style={{ borderTop: '1px solid var(--t-border)' }}>
                    <span className="text-pink-400 font-bold">◆ Balance: 847</span>
                    <span className="cursor-pointer hover:text-pink-400 transition-colors" style={{ color: 'var(--t-text-ghost)' }}>[Buy More Diamonds]</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: NARRATIVE + FEATURE CARDS */}
              <div className="space-y-8">
                <p className="text-lg italic leading-relaxed uppercase" style={{ color: 'var(--t-text-faint)' }}>
                  The Nano Skills homepage isn't static. It reads the user's system language, diamond balance,
                  enrollment history, and class teacher's last recommendation — then assembles a personalized
                  tray view for every session.
                </p>

                <div className="space-y-4">
                  <div className="p-6 border-l-2 border-pink-500 bg-pink-500/5">
                    <span className="text-[10px] font-black text-pink-400 uppercase block mb-2 tracking-widest">LOCALIZATION_ENGINE</span>
                    <h4 className="text-lg font-bold uppercase mb-3" style={{ color: 'var(--t-heading)' }}>Vietnamese-First Discovery</h4>
                    <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-subtle)' }}>
                      Vietnamese users held 70% of the total diamond balance globally. The homepage auto-detected
                      system language and surfaced a 'Popular in Vietnamese' tray as the first visible row —
                      driving immediate relevance for the highest-intent cohort.
                    </p>
                  </div>
                  <div className="p-6 border-l-2 border-pink-500 bg-pink-500/5">
                    <span className="text-[10px] font-black text-pink-400 uppercase block mb-2 tracking-widest">TEACHER_LOOP</span>
                    <h4 className="text-lg font-bold uppercase mb-3" style={{ color: 'var(--t-heading)' }}>Star Teacher Recommendations</h4>
                    <p className="text-xs italic leading-relaxed uppercase" style={{ color: 'var(--t-text-subtle)' }}>
                      Teachers act as Nano Skills ambassadors through the Star Teacher Program. Post-class, a
                      personalized recommendation strip appears on the student dashboard — teacher's name, their
                      specific message, and a direct 'Avail Now' CTA. Parents see it too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FOOTER — IMPACT LOG ── */}
        <footer className="py-14 sm:py-20 md:py-40 text-center" style={{ borderTop: '1px solid var(--t-border)', background: 'var(--t-bg2)' }}>
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <p className="text-[10px] uppercase tracking-[0.8em] font-bold" style={{ color: 'var(--t-text-ghost)' }}>IMPACT_SUMMARY_LOG</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-12" style={{ borderTop: '1px solid var(--t-border)', borderBottom: '1px solid var(--t-border)' }}>
              {[
                { val: "3,000+", label: "Enrollments" },
                { val: "+5%", label: "Gross Margin" },
                { val: "250", label: "Month-1 Signups" },
                { val: "20+", label: "Courses Launched" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-4xl font-bold font-mono tracking-tighter uppercase block" style={{ color: 'var(--t-heading)' }}>{item.val}</span>
                  <span className="text-[10px] block uppercase font-bold tracking-widest mt-1" style={{ color: 'var(--t-text-ghost)' }}>{item.label}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-5xl font-black italic leading-tight uppercase tracking-tighter" style={{ color: 'var(--t-heading)' }}>
              "I turned a virtual currency nobody was spending into a{" "}
              <span className="text-pink-400">self-serve monetization engine</span>{" "}
              — with zero sales agents."
            </h2>

            <div className="pt-10 flex flex-wrap justify-center gap-6 md:gap-10 opacity-20 text-[10px] tracking-[0.2em] font-bold uppercase mono">
              <span>Node: Nano_Skills</span>
              <span>Stack: React/Payment_Gtwy</span>
              <span>Status: Revenue_Active</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
