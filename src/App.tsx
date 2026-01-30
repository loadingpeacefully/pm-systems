import React, { useEffect, useMemo, useState } from "react";
import {
  Terminal,
  Zap,
  Activity,
  ShieldAlert,
  Database,
  ArrowRight,
  Share2,
  Layers,
  User,
  Linkedin,
  Target,
  ChevronRight,
  Link as LinkIcon,
} from "lucide-react";

/** -----------------------------
 * UI bits
 * ------------------------------*/
function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 text-rose-500 translate-x-1 opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-all">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 text-cyan-500 -translate-x-1 opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-all">
        {text}
      </span>
    </span>
  );
}

type Section =
  | "OVERVIEW"
  | "EXPERIENCE"
  | "PROJECTS (DEEP DIVES)"
  | "SKILLS & GROWTH"
  | "CHALLENGES & LEARNINGS";

type Metric = { label: string; val: string; desc: string; color: string };

type Role = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  scopeLine: string;
  outcomes: Array<{ label: string; value: string }>;
  featuredProjectIds: string[];
};

type ProjectDeepDive = {
  id: string;
  name: string;
  company: string;
  role: string;
  timeline: string;
  usersImpacted: string;
  goal: string;
  scope: string;
  problem: string[];
  constraints: string[];
  mechanics: {
    inputs: string[];
    rulesLogic: string[];
    outputs: string[];
    integrations: string[];
  };
  delivery: {
    milestones: string[];
    stakeholders: string[];
    riskMitigation: string[];
  };
  results: Array<{ metric: string; before?: string; after?: string; note?: string }>;
  decisions: string[];
  tradeoffs: string[];
  learnings: string[];
  artifacts?: Array<{ label: string; href: string }>;
  impactBadges: string[]; // 2-3 mini badges for cards
};

type SkillEvidence = {
  skill: string;
  evidence: string;
  outcome: string;
};

type Challenge = { title: string; challenge: string; fix: string; code: string };

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("OVERVIEW");
  const [loading, setLoading] = useState(true);
  const [selectedProjectId, setSelectedProjectId] = useState<string>("NANO_SKILLS");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  /** -----------------------------
   * CONTENT MODEL (single place)
   * Replace text here later — no UI edits needed.
   * ------------------------------*/
  const metrics: Metric[] = [
    { label: "COST REDUCTION", val: "-90%", desc: "AI AUTOMATION", color: "text-emerald-400" },
    { label: "PLATFORM MIGRATION", val: "100%", desc: "ZERO DOWNTIME", color: "text-cyan-400" },
    { label: "CYCLE TIME REDUCTION", val: "99%", desc: "8HR → 5MIN", color: "text-amber-400" },
    { label: "REVENUE / MARGIN IMPACT", val: "+5%", desc: "PLG ENGINE", color: "text-rose-400" },
  ];

  const roles: Role[] = [
    {
      company: "BrightCHAMPS",
      title: "Sr. Product Manager",
      dates: "2023–2026",
      location: "Remote / India",
      scopeLine:
        "Owned platform + monetization systems across learning journeys, AI automation, and multi-vertical migration.",
      outcomes: [
        { label: "Enrollments", value: "3,000+ (Nano Skills)" },
        { label: "GM Uplift", value: "+5% (overall)" },
        { label: "Cost Down", value: "-90% (content ops automation)" },
      ],
      featuredProjectIds: ["NANO_SKILLS", "UNIFIED_MIGRATION", "AI_CONTENT_FACTORY"],
    },
    {
      company: "Wheelseye",
      title: "Product Manager",
      dates: "2022–2023",
      location: "India",
      scopeLine: "Built core funnel + ops tooling to improve booking reliability and operational throughput.",
      outcomes: [
        { label: "Latency / Reliability", value: "Reduced demo failures" },
        { label: "Ops Efficiency", value: "Process automation" },
        { label: "Scope", value: "Multi-stakeholder delivery" },
      ],
      featuredProjectIds: [],
    },
    {
      company: "Arth Design",
      title: "Sr. Product Manager",
      dates: "2020–2022",
      location: "India",
      scopeLine: "Led product execution across B2B workflows and internal systems; shipped fast under constraints.",
      outcomes: [
        { label: "Delivery", value: "0→1 systems" },
        { label: "Time-to-ship", value: "Tight iteration cycles" },
        { label: "Stakeholders", value: "Cross-functional alignment" },
      ],
      featuredProjectIds: [],
    },
  ];

  const projects: ProjectDeepDive[] = [
    {
      id: "NANO_SKILLS",
      name: "Nano Skills Marketplace",
      company: "BrightCHAMPS",
      role: "Sr. PM (0→1 owner)",
      timeline: "Aug 2023 – Mar 2024",
      usersImpacted: "Students + Parents (global) · 3,000+ enrollments",
      goal: "Build a self-serve monetization loop using paid currency (diamonds) to reduce renewal dependency on sales.",
      scope: "Marketplace listing + purchase flows + diamond economy + certificates + admin tooling + instrumentation.",
      problem: [
        "High sales dependency for renewals and weak self-serve monetization.",
        "Diamond hoarding diluted perceived value and reduced engagement sinks.",
      ],
      constraints: [
        "Reuse existing React components and platform architecture (speed over perfection).",
        "Virtual economy needed balance without breaking parent trust.",
      ],
      mechanics: {
        inputs: ["Diamond balance", "Course catalog + pricing", "Eligibility + purchase triggers"],
        rulesLogic: [
          "Diamond redemption for enrollment (no earning via core courses).",
          "High-value sinks to reduce hoarding + drive top-ups.",
          "Certificate unlock only after completion; badges not in MVP.",
        ],
        outputs: ["Course enrollment", "Completion → certificate download", "Revenue via diamond purchase"],
        integrations: ["Payments (diamond purchase links)", "Admin panel", "Analytics events"],
      },
      delivery: {
        milestones: ["MVP listing + purchase", "V1 economy balancing", "Post-launch instrumentation + iteration"],
        stakeholders: ["Engineering", "Design", "Sales/Ops", "Content"],
        riskMitigation: ["Guardrails on pricing + triggers", "Manual admin overrides for edge cases"],
      },
      results: [
        { metric: "Enrollments", after: "3,000+" },
        { metric: "GM impact", after: "+5% (overall uplift contribution)" },
        { metric: "Certificate downloads", after: "~72% of completers" },
      ],
      decisions: [
        "Prioritized currency sinks + self-serve loop over cosmetic gamification (badges later).",
        "Shipped with reusable components to hit timeline; optimized UX incrementally.",
      ],
      tradeoffs: [
        "Skipped adaptive personalization in MVP.",
        "Kept deep social mechanics out (focus: conversion + completion).",
      ],
      learnings: [
        "Virtual currencies need deliberate sinks; otherwise value collapses.",
        "Instrumentation is the product — without it, iteration is guessing.",
      ],
      artifacts: [
        { label: "PRD (placeholder)", href: "#" },
        { label: "Dashboard (placeholder)", href: "#" },
      ],
      impactBadges: ["3,000+ enrollments", "+5% GM uplift", "Self-serve loop"],
    },
    {
      id: "UNIFIED_MIGRATION",
      name: "Unified Migration Platform",
      company: "BrightCHAMPS",
      role: "Sr. PM (platform owner)",
      timeline: "2023–2024",
      usersImpacted: "Multi-vertical (7 courses) · global rollout",
      goal: "Unify fragmented verticals into a single platform enabling cross-sell, shared scheduling, and scalable delivery.",
      scope: "Unified auth, dashboard, universal calendar, course migrations, stability guardrails.",
      problem: [
        "Fragmented platforms prevented scalable growth and cross-sell.",
        "Legacy inconsistency made ops + support expensive and slow.",
      ],
      constraints: ["Stability > parity; avoid downtime.", "Multiple legacy systems with incompatible assumptions."],
      mechanics: {
        inputs: ["Legacy course systems", "User identity + scheduling", "Course content + delivery rules"],
        rulesLogic: ["Universal calendar logic", "Unified dashboard rails", "Migration sequencing with rollback safety"],
        outputs: ["Single platform experience", "Centralized scheduling + delivery"],
        integrations: ["Zoom / scheduling", "Dashboards", "Ops tooling"],
      },
      delivery: {
        milestones: ["Infra rails", "Phased migrations", "Stability hardening"],
        stakeholders: ["Engineering", "Ops/Support", "Sales", "Academy teams"],
        riskMitigation: ["Phased rollout", "Fallback paths for critical failures"],
      },
      results: [
        { metric: "Migration", after: "100% user migration" },
        { metric: "Downtime", after: "Zero downtime (target)" },
      ],
      decisions: ["Chose universal scheduling logic over isolated feature parity."],
      tradeoffs: ["Delayed non-critical parity features to ship stable core."],
      learnings: ["A unified platform is a sequencing problem as much as a build problem."],
      impactBadges: ["100% migration", "Zero downtime", "Unified calendar"],
    },
    {
      id: "AI_CONTENT_FACTORY",
      name: "AI-Driven Content Creation System",
      company: "BrightCHAMPS",
      role: "Sr. PM (system architect)",
      timeline: "Jul 2024 – Sep 2024",
      usersImpacted: "Internal content + design teams (global scale)",
      goal: "Automate content generation with strict validation to cut cost while keeping output deployable.",
      scope: "Prompting + structured output + validation layer + pipeline workflow.",
      problem: [
        "Human-dependent content creation was expensive and speed-limited.",
        "Quality risk: AI outputs can be inconsistent without guardrails.",
      ],
      constraints: ["Need deployable outputs (syntax/format correctness).", "Team adoption requires reliability."],
      mechanics: {
        inputs: ["Curriculum metadata", "Question patterns", "Skill constraints"],
        rulesLogic: ["LLM generation → JSON/schema validation → auto-fix loop"],
        outputs: ["Deployable content artifacts", "Reduced manual QA effort"],
        integrations: ["Internal tooling", "Content workflow"],
      },
      delivery: {
        milestones: ["MVP generator", "Validation layer", "Scale rollout to teams"],
        stakeholders: ["Engineering", "Content", "Design", "QA"],
        riskMitigation: ["Hard validation gates", "Error detection + re-generation loops"],
      },
      results: [{ metric: "Cost reduction", after: "50%+ (team-level)" }],
      decisions: ["Built validation as a first-class layer (not optional)."],
      tradeoffs: ["Less creative freedom; higher determinism."],
      learnings: ["Automation wins only when it’s boringly reliable."],
      impactBadges: ["50% cost down", "Validation gates", "Scale tooling"],
    },
  ];

  const skills: SkillEvidence[] = [
    {
      skill: "Monetization & Pricing",
      evidence: "Nano Skills diamond economy + purchase loop",
      outcome: "3,000+ enrollments · +5% GM uplift contribution",
    },
    {
      skill: "Platform/System Thinking",
      evidence: "Unified migration + universal scheduling",
      outcome: "100% migration · stability-first rollout",
    },
    {
      skill: "AI Automation Pipelines",
      evidence: "LLM generation + validation + auto-fix loops",
      outcome: "Cost reduction + scalable content velocity",
    },
    {
      skill: "Analytics & Instrumentation",
      evidence: "Event tracking + funnel + behavior insights",
      outcome: "Iteration driven by data, not anecdotes",
    },
  ];

  const achievements = [
    "Built Nano Skills marketplace → 3,000+ enrollments and self-serve revenue loop.",
    "Architected AI content automation system → 50%+ content cost reduction via validation-led pipeline.",
    "Led multi-vertical unified migration → centralized scheduling + stable rollout targeting zero downtime.",
    "Designed gamified quiz system → 87% completion rate and improved scores (70%+ >80%).",
  ];

  const challenges: Challenge[] = [
    {
      title: "STABILITY VS COST",
      challenge: "Latency and reliability issues caused failed demos in critical markets.",
      fix: "Stability-first decision: restored reliable path and hardened rollout sequencing.",
      code: "ERR_STABILITY",
    },
    {
      title: "CURRENCY INFLATION",
      challenge: "Diamond hoarding reduced engagement and diluted value perception.",
      fix: "Introduced high-value sinks + marketplace mechanics to balance economy and drive top-ups.",
      code: "ERR_ECON_IMBALANCE",
    },
    {
      title: "FUNNEL SYNC",
      challenge: "Conversion dips due to misalignment between product changes and sales pitch.",
      fix: "Analyzed funnel + realigned collateral and enablement workflows to match product truth.",
      code: "ERR_FUNNEL_ASYNC",
    },
  ];

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? projects[0],
    [projects, selectedProjectId]
  );

  /** -----------------------------
   * LOADING SCREEN
   * ------------------------------*/
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono text-emerald-500">
        <div className="w-64 h-1 bg-zinc-900 overflow-hidden relative mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-emerald-500 animate-[loading_0.9s_ease-in-out]"
            style={{ width: "100%" }}
          />
        </div>
        <p className="text-xs animate-pulse tracking-widest">LOADING_RECRUITER_INTEL...</p>
        <style dangerouslySetInnerHTML={{ __html: `@keyframes loading {0%{width:0%}100%{width:100%}}` }} />
      </div>
    );
  }

  /** -----------------------------
   * PAGE
   * ------------------------------*/
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-mono selection:bg-emerald-500 selection:text-black">
      {/* SCANLINE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* STICKY HEADER */}
      <nav className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
              <User size={16} className="text-emerald-500" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tighter text-white uppercase">
                Suneet Jagdev // <span className="text-emerald-500">PM_SYSTEMS</span>
              </h1>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                Senior Product Manager // Learning Platforms · Monetization · AI Automation
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest">
            {(
              [
                "OVERVIEW",
                "EXPERIENCE",
                "PROJECTS (DEEP DIVES)",
                "SKILLS & GROWTH",
                "CHALLENGES & LEARNINGS",
              ] as Section[]
            ).map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`transition-all hover:text-emerald-400 ${
                  activeSection === sec ? "text-emerald-500 border-b border-emerald-500 pb-1" : "text-zinc-500"
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <button className="bg-emerald-500/10 border border-emerald-500 text-emerald-500 px-3 py-1 text-[10px] font-bold hover:bg-emerald-500 hover:text-black transition-all uppercase">
              Download_PDF
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* PROOF STRIP (stays top across sections) */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-zinc-900/40 border border-zinc-800 p-4 relative group hover:border-emerald-500/50 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-100 transition-opacity">
                <Activity size={12} className={m.color} />
              </div>
              <p className="text-[10px] font-bold text-zinc-500 mb-1 tracking-tight">{m.label}</p>
              <h3 className={`text-3xl font-black ${m.color}`}>{m.val}</h3>
              <p className="text-[10px] tracking-widest font-mono text-zinc-400">{m.desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-800 group-hover:bg-emerald-500/50 transition-all" />
            </div>
          ))}
        </section>

        {/* =========================
            OVERVIEW
        ========================== */}
        {activeSection === "OVERVIEW" && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-rose-500">
                  <Terminal size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase">Overview</span>
                </div>

                <h2 className="text-5xl font-black text-white leading-tight uppercase">
                  Senior Product Manager <br />
                  <span className="text-emerald-500">Platforms</span> · <GlitchText text="Monetization" /> · AI Automation
                </h2>

                <p className="text-lg text-zinc-400 leading-relaxed font-light">
                  I build scalable learning + commerce systems: unified platforms, economy loops, and automation
                  pipelines that ship reliably and compound over time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  {[
                    { k: "Domain", v: "Consumer EdTech / B2C Platforms" },
                    { k: "Strength", v: "Systems thinking + fast execution" },
                    { k: "Mode", v: "Metrics-first, iteration-driven" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="border border-zinc-800 p-4 rounded-sm bg-zinc-900/20 hover:border-emerald-500/30 transition-colors"
                    >
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{x.k}</p>
                      <p className="mt-2 text-sm text-zinc-200">{x.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPERIENCE TIMELINE (mini) */}
              <div className="border border-zinc-800 bg-zinc-900/40 p-6 space-y-8 relative">
                <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[9px] font-bold px-2 py-0.5">
                  CURRENT_STATUS
                </div>
                <h3 className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase">Experience Timeline</h3>

                <div className="space-y-6">
                  {roles.slice(0, 3).map((r) => (
                    <div key={r.company} className="flex gap-4 group">
                      <span className="text-emerald-500 text-[10px] font-bold mt-1">{r.dates}</span>
                      <div>
                        <h4 className="text-white text-sm font-bold group-hover:text-emerald-400 transition-colors uppercase">
                          {r.company}
                        </h4>
                        <p className="text-[10px] text-zinc-500 uppercase font-medium">{r.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveSection("EXPERIENCE")}
                  className="w-full mt-2 bg-zinc-800 border border-zinc-700 py-3 text-[10px] font-bold hover:bg-zinc-700 transition-all uppercase flex items-center justify-center gap-2"
                >
                  View_Experience <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================
            EXPERIENCE (resume standard)
        ========================== */}
        {activeSection === "EXPERIENCE" && (
          <div className="animate-in fade-in duration-500 space-y-8">
            <div className="flex items-center gap-3">
              <Layers className="text-emerald-500" size={18} />
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">Experience</h2>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Timeline · scope · outcomes</span>
            </div>

            <div className="space-y-6">
              {roles.map((r) => (
                <div key={r.company} className="bg-zinc-900/40 border border-zinc-800 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3 className="text-white text-lg font-black uppercase">{r.company}</h3>
                      <p className="text-[11px] text-zinc-400 uppercase tracking-widest font-bold">
                        {r.title} · {r.dates} {r.location ? `· ${r.location}` : ""}
                      </p>
                      <p className="mt-3 text-sm text-zinc-400">{r.scopeLine}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {r.outcomes.map((o) => (
                        <div key={o.label} className="border border-zinc-800 bg-black/30 p-3">
                          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{o.label}</p>
                          <p className="mt-2 text-[11px] text-zinc-200 font-bold">{o.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {r.featuredProjectIds.length > 0 && (
                    <div className="mt-5">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">
                        Featured Projects
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {r.featuredProjectIds.map((pid) => {
                          const p = projects.find((x) => x.id === pid);
                          if (!p) return null;
                          return (
                            <button
                              key={pid}
                              onClick={() => {
                                setSelectedProjectId(pid);
                                setActiveSection("PROJECTS (DEEP DIVES)");
                              }}
                              className="px-3 py-2 border border-zinc-800 bg-zinc-950/30 hover:border-emerald-500/40 transition-colors text-[10px] font-bold uppercase text-zinc-300"
                            >
                              {p.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================
            PROJECTS (deep dive mechanism)
        ========================== */}
        {activeSection === "PROJECTS (DEEP DIVES)" && (
          <div className="animate-in fade-in duration-500 space-y-8">
            <div className="flex items-center gap-3">
              <Database className="text-emerald-500" size={18} />
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">Selected Projects</h2>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                Cards → Deep Dive Panel
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Project cards */}
              <div className="lg:col-span-5 space-y-4">
                {projects.map((p) => {
                  const active = p.id === selectedProjectId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProjectId(p.id)}
                      className={`w-full text-left bg-zinc-900/40 border p-5 transition-all ${
                        active ? "border-emerald-500/50" : "border-zinc-800 hover:border-zinc-600"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{p.company}</p>
                          <h3 className="text-white text-lg font-black uppercase">{p.name}</h3>
                          <p className="mt-2 text-sm text-zinc-400">{p.goal}</p>
                        </div>
                        <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">
                          Open_DeepDive
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.impactBadges.slice(0, 3).map((b) => (
                          <span
                            key={b}
                            className="px-3 py-1 bg-zinc-950/30 border border-zinc-800 text-zinc-300 text-[9px] font-bold uppercase"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Deep dive panel */}
              <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 p-7 relative">
                <div className="absolute top-4 right-4 text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                  DeepDive_Panel
                </div>

                {/* Snapshot */}
                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                      {selectedProject.company} · {selectedProject.role}
                    </p>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tight">{selectedProject.name}</h2>
                    <p className="mt-2 text-sm text-zinc-400">{selectedProject.timeline}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { k: "Users impacted", v: selectedProject.usersImpacted },
                      { k: "Scope", v: selectedProject.scope },
                      { k: "Goal", v: selectedProject.goal },
                      { k: "Timeline", v: selectedProject.timeline },
                    ].map((x) => (
                      <div key={x.k} className="border border-zinc-800 bg-black/30 p-4">
                        <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{x.k}</p>
                        <p className="mt-2 text-[12px] text-zinc-200">{x.v}</p>
                      </div>
                    ))}
                  </div>

                  {/* Problem + Constraints */}
                  <div className="p-4 bg-rose-500/5 border-l-4 border-rose-500 flex gap-4">
                    <ShieldAlert className="text-rose-500 shrink-0" size={20} />
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Problem</p>
                      <ul className="text-sm text-zinc-400 list-disc pl-4 space-y-1">
                        {selectedProject.problem.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                      {selectedProject.constraints.length > 0 && (
                        <>
                          <p className="mt-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            Constraints
                          </p>
                          <ul className="text-[11px] text-zinc-400 list-disc pl-4 space-y-1">
                            {selectedProject.constraints.map((x, i) => (
                              <li key={i}>{x}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Mechanics (not “features”) */}
                  <div className="border border-zinc-800 p-5 bg-zinc-950/20">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4">
                      Approach / How I Built It (Mechanics)
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 border border-zinc-700 flex items-center justify-center text-zinc-500 relative">
                        <div className="absolute -top-3 text-[8px] font-bold uppercase">Inputs</div>
                        <Database size={22} />
                      </div>

                      <ArrowRight className="text-emerald-500 animate-[pulse_2s_infinite]" />

                      <div className="flex-1 p-4 border border-emerald-500/50 bg-emerald-500/5 text-emerald-400 text-xs font-bold text-center uppercase leading-tight">
                        Rules / Logic Layer
                      </div>

                      <ArrowRight className="text-emerald-500 animate-[pulse_2s_infinite]" />

                      <div className="w-14 h-14 border border-emerald-500 flex items-center justify-center text-emerald-500 relative shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <div className="absolute -top-3 text-[8px] font-bold uppercase">Outputs</div>
                        <Layers size={22} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px]">
                      <div className="border border-zinc-800 p-4">
                        <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Inputs</p>
                        <ul className="mt-2 list-disc pl-4 space-y-1 text-zinc-300">
                          {selectedProject.mechanics.inputs.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="border border-zinc-800 p-4">
                        <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Rules / Logic</p>
                        <ul className="mt-2 list-disc pl-4 space-y-1 text-zinc-300">
                          {selectedProject.mechanics.rulesLogic.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="border border-zinc-800 p-4">
                        <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Outputs</p>
                        <ul className="mt-2 list-disc pl-4 space-y-1 text-zinc-300">
                          {selectedProject.mechanics.outputs.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="border border-zinc-800 p-4">
                        <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Integrations</p>
                        <ul className="mt-2 list-disc pl-4 space-y-1 text-zinc-300">
                          {selectedProject.mechanics.integrations.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border border-zinc-800 p-5 bg-black/30">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4">Results</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {selectedProject.results.map((r, i) => (
                        <div key={i} className="border border-zinc-800 bg-zinc-950/30 p-4">
                          <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{r.metric}</p>
                          <p className="mt-2 text-[12px] text-zinc-200 font-bold">
                            {r.after ?? r.note ?? "—"}
                          </p>
                          {(r.before || r.after) && (r.before || r.note) && (
                            <p className="mt-1 text-[10px] text-zinc-500">
                              {r.before ? `Before: ${r.before}` : ""}
                              {r.before && r.after ? " · " : ""}
                              {r.after && r.before ? `After: ${r.after}` : ""}
                              {r.note ? ` · ${r.note}` : ""}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decisions + Tradeoffs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-zinc-800 p-5 bg-zinc-900/40">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">
                        Decisions
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-[11px] text-zinc-300">
                        {selectedProject.decisions.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-zinc-800 p-5 bg-zinc-900/40">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">
                        Tradeoffs
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-[11px] text-zinc-300">
                        {selectedProject.tradeoffs.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Artifacts */}
                  <div className="flex flex-col md:flex-row gap-3">
                    <button className="flex-1 bg-zinc-800 border border-zinc-700 py-3 text-[10px] font-bold hover:bg-zinc-700 transition-all uppercase">
                      Detailed_Specs
                    </button>
                    <button className="flex-1 bg-emerald-500 text-black py-3 text-[10px] font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 uppercase">
                      <Share2 size={14} /> Contact
                    </button>
                  </div>

                  {selectedProject.artifacts && selectedProject.artifacts.length > 0 && (
                    <div className="border border-zinc-800 bg-zinc-950/20 p-5">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">Artifacts</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.artifacts.map((a) => (
                          <a
                            key={a.label}
                            href={a.href}
                            className="inline-flex items-center gap-2 px-3 py-2 border border-zinc-800 bg-black/30 hover:border-emerald-500/40 transition-colors text-[10px] font-bold uppercase text-zinc-200"
                          >
                            <LinkIcon size={14} />
                            {a.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================
            SKILLS (evidence-based)
        ========================== */}
        {activeSection === "SKILLS & GROWTH" && (
          <div className="animate-in fade-in duration-500 space-y-8">
            <div className="flex items-center gap-3">
              <Zap className="text-emerald-500" size={18} />
              <h2 className="text-xl font-bold text-white uppercase tracking-widest">Skills & Growth</h2>
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                Evidence-based (resume readable)
              </span>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 overflow-hidden">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-zinc-950/50 border-b border-zinc-800">
                  <tr>
                    <th className="p-6 text-zinc-500 font-bold uppercase tracking-widest">Core Skill</th>
                    <th className="p-6 text-zinc-300 font-bold uppercase tracking-widest">Evidence</th>
                    <th className="p-6 text-emerald-400 font-bold uppercase tracking-widest">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {skills.map((s, i) => (
                    <tr key={i} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="p-6 font-black text-zinc-500 border-r border-zinc-800 uppercase tracking-tighter">
                        {s.skill}
                      </td>
                      <td className="p-6 text-zinc-400 uppercase leading-relaxed">{s.evidence}</td>
                      <td className="p-6 text-zinc-200 bg-emerald-500/5 uppercase leading-relaxed font-bold">
                        {s.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">
                Key Achievements (copy-paste ready)
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-300">
                {achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* =========================
            CHALLENGES & LEARNINGS
        ========================== */}
        {activeSection === "CHALLENGES & LEARNINGS" && (
          <div className="animate-in fade-in duration-500 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-rose-500 mb-2 flex items-center gap-4 uppercase tracking-tight">
                <ShieldAlert /> Challenges & Learnings
              </h2>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-8 font-bold">
                Post-mortems · decisions · maturity signals
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {challenges.map((f, i) => (
                  <div
                    key={i}
                    className="bg-zinc-900/40 border border-rose-500/20 p-6 relative group overflow-hidden hover:border-rose-500/50 transition-all"
                  >
                    <div className="absolute top-0 right-0 p-2 text-[8px] text-rose-500 font-mono font-bold opacity-30">
                      {f.code}
                    </div>
                    <h3 className="text-rose-500 font-black mb-3 text-sm uppercase tracking-tight">{f.title}</h3>
                    <p className="text-[10px] text-zinc-400 mb-4 font-bold uppercase leading-relaxed">{f.challenge}</p>
                    <div className="border-t border-zinc-800 pt-4">
                      <p className="text-[9px] font-bold text-emerald-500 uppercase mb-1">What changed</p>
                      <p className="text-zinc-300 text-[11px] leading-relaxed italic">"{f.fix}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
              <div>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Toolbox</h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "INSTRUMENTATION", "LLM_VALIDATION", "PLG", "ECONOMY_DESIGN", "SYSTEMS_ARCH", "ROADMAPS"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[9px] font-bold hover:border-emerald-500 transition-colors uppercase"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="bg-emerald-500/5 p-8 border border-emerald-500/20 rounded-sm relative overflow-hidden group">
                <Target className="absolute -bottom-4 -right-4 text-emerald-500/10 group-hover:scale-110 transition-transform" size={120} />
                <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-4">Next Role Fit</h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed uppercase font-medium">
                  Best fit for environments that need <span className="text-emerald-400">platform clarity</span>,{" "}
                  <span className="text-emerald-400">monetization loops</span>, and{" "}
                  <span className="text-emerald-400">automation at scale</span> — where systems are the growth lever.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 mt-20 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[9px] font-bold text-emerald-500 tracking-widest uppercase">
                System Status: Stable
              </span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800 hidden md:block" />
            <span className="text-[9px] text-zinc-600 font-mono hidden md:block uppercase">Node: Bengaluru</span>
          </div>
          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] font-bold">
            © 2026 Suneet Jagdev // Resume Console // Built Fast.
          </p>
        </div>
      </footer>
    </div>
  );
}
