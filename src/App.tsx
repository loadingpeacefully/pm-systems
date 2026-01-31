import React, { useEffect, useMemo, useState, Suspense } from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  useLocation,
} from "react-router-dom";
import {
  Activity,
  Aperture,
  Award,
  Box,
  Briefcase,
  Command,
  Cpu,
  Database,
  Footprints,
  Globe,
  HeartPulse,
  Hexagon,
  Layers,
  MapPin,
  Mic,
  Palette,
  Scan,
  Terminal,
  Trophy,
  Zap,
} from "lucide-react";

// ✅ Import Registry
import { PROJECT_PAGE_MAP } from "./pages/projects/registry";

/** --------------------------------
 * DATA
 * -------------------------------- */

type ProjectId =
  | "P1" | "P2" | "P3" | "P4" | "P5"
  | "P6" | "P7" | "P8" | "P9" | "P10"
  | "P11" | "P12";

const EXPERIENCE = [
  {
    id: "EXP_BC",
    company: "BrightChamps",
    role: "Sr. Product Manager",
    year: "2023-Present",
    headline: "Global Unification",
    desc: "Led the migration of 14 fragmented regional tech stacks into a single, unified operating system.",
    projects: ["P1", "P2", "P5"] as ProjectId[],
  },
  {
    id: "EXP_WE",
    company: "Wheelseye",
    role: "Product Manager",
    year: "2022-2023",
    headline: "Data at Scale",
    desc: "Architected a telemetry pipeline processing 1 million events per second for predictive maintenance.",
    projects: ["P3"] as ProjectId[],
  },
  {
    id: "EXP_AD",
    company: "Arth Design",
    role: "Founder / PM",
    year: "2020-2022",
    headline: "Automated Ops",
    desc: "Built a self-serve design operations platform that automated administrative tasks for 50+ designers.",
    projects: ["P9", "P7"] as ProjectId[],
  },
];

const PROJECTS: Array<{
  id: ProjectId;
  title: string;
  category: string;
  color: string;
  border: string;
  shadow: string;
  icon: React.ComponentType<any>;
}> = [
  { id: "P1", title: "Geeta AI", category: "AI Product", color: "text-[#39FF14]", border: "group-hover:border-[#39FF14]", shadow: "roup-hover:shadow-[#39FF14]/50", icon: Cpu },
  { id: "P2", title: "Adhyayan", category: "Platform", color: "text-[#A855F7]", border: "group-hover:border-[#A855F7]", shadow: "group-hover:shadow-[#A855F7]/50", icon: Globe },
  { id: "P3", title: "Fleet Intel", category: "Data Ops", color: "text-amber-400", border: "group-hover:border-amber-500", shadow: "group-hover:shadow-amber-500/50", icon: Activity },
  { id: "P4", title: "Commerce V2", category: "Growth", color: "text-purple-400", border: "group-hover:border-purple-500", shadow: "group-hover:shadow-purple-500/50", icon: Database },
  { id: "P5", title: "Agent Swarm", category: "Auto", color: "text-red-400", border: "group-hover:border-red-500", shadow: "group-hover:shadow-red-500/50", icon: Zap },
  { id: "P6", title: "Synth Lab", category: "Audio", color: "text-pink-400", border: "group-hover:border-pink-500", shadow: "group-hover:shadow-pink-500/50", icon: Layers },
  { id: "P7", title: "Urban Lens", category: "Media", color: "text-cyan-400", border: "group-hover:border-cyan-500", shadow: "group-hover:shadow-cyan-500/50", icon: Box },
  { id: "P8", title: "Zero Lat", category: "Infra", color: "text-zinc-400", border: "group-hover:border-zinc-500", shadow: "group-hover:shadow-zinc-500/50", icon: Terminal },
  { id: "P9", title: "Design Ops", category: "Workflow", color: "text-indigo-400", border: "group-hover:border-indigo-500", shadow: "group-hover:shadow-indigo-500/50", icon: Command },
  { id: "P10", title: "Health UI", category: "Visuals", color: "text-teal-400", border: "group-hover:border-teal-500", shadow: "group-hover:shadow-teal-500/50", icon: Hexagon },
  { id: "P11", title: "Crypto V1", category: "Web3", color: "text-yellow-400", border: "group-hover:border-yellow-500", shadow: "group-hover:shadow-yellow-500/50", icon: Aperture },
  { id: "P12", title: "Podcast", category: "Content", color: "text-orange-400", border: "group-hover:border-orange-500", shadow: "group-hover:shadow-orange-500/50", icon: Mic },
];

const METRICS = [
  { label: "Shipped", value: "42+" },
  { label: "Users", value: "10M+" },
  { label: "Growth", value: "15x" },
];

const AWARDS = [
  { title: "Best Executed Project", org: "Tata Projects Limited", year: "2021" },
  { title: "Above & Beyond Award", org: "Arth Design Build", year: "2020" },
  { title: "National Winner", org: "Art de Vous Design Competition", year: "2017" },
  { title: "National Finalist", org: "INSDAG Design Competition", year: "2018" },
  { title: "Indian Delegate", org: "HPAIR (Harvard Project)", year: "2016" },
  { title: "Silver Medalist", org: "Inter-IIT Product Design", year: "2015" },
  { title: "National Winner", org: "Beat-D-Euclid (AutoCAD)", year: "2014" },
  { title: "Zonal Winner", org: "Ethos Transparence", year: "2014" },
];

const PERSONAL_FACTS = [
  { id: "FACT_01", text: "Balashree Medalist (Fine Arts)", sub: "National Honor", icon: Award, color: "text-yellow-400" },
  { id: "FACT_02", text: "Ran Length of Manhattan", sub: "13 Miles / 6 Hours", icon: Footprints, color: "text-red-400" },
  { id: "FACT_03", text: "10+ Countries Traveled", sub: "Global Explorer", icon: Globe, color: "text-cyan-400" },
  { id: "FACT_04", text: "Ironman 70.3 Training", sub: "Endurance Mode", icon: HeartPulse, color: "text-pink-400" },
  { id: "FACT_05", text: "Lifelong Artist & Designer", sub: "Since Childhood", icon: Palette, color: "text-purple-400" },
  { id: "FACT_06", text: "Design Intern @ NYC", sub: "Milestone Arch", icon: Briefcase, color: "text-blue-400" },
  { id: "FACT_07", text: "Copenhagen & Mexico City", sub: "Design Stints", icon: MapPin, color: "text-emerald-400" },
];

const SKILLS = ["Product Strategy", "System Design", "React", "Python", "Rust", "Kafka", "GraphQL", "Next.js", "Docker", "Figma"];

/** --------------------------------
 * Helpers
 * -------------------------------- */

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/** --------------------------------
 * Home components
 * -------------------------------- */

type HighlightState = "normal" | "active" | "dimmed";

function CyberTile({ project, highlightState }: { project: (typeof PROJECTS)[number]; highlightState: HighlightState }) {
  const isDimmed = highlightState === "dimmed";
  const isActive = highlightState === "active";
  return (
    <Link
      to={`/p/${project.id}`}
      className={`relative group flex flex-col items-center justify-center gap-4 transition-all duration-500 ${isDimmed ? "opacity-20 scale-95 grayscale" : "opacity-100 scale-100"}`}
    >
      <div className={`relative w-24 h-24 rounded-2xl bg-[#0a0a0a] border transition-all duration-300 ease-out cursor-pointer overflow-hidden ${isActive ? "border-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.3)] scale-110 z-10" : `border-white/10 ${project.border} group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <project.icon strokeWidth={1.5} className={`w-8 h-8 transition-all duration-300 ${isActive ? "text-[#39FF14] scale-110" : "text-zinc-500 group-hover:text-white group-hover:scale-110"}`} />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] transition-transform duration-1000 group-hover:translate-y-[100%] ${isActive ? "animate-scan-fast" : ""}`} />
      </div>
      <div className="text-center transition-all duration-300">
        <div className={`text-xs font-bold uppercase tracking-tight ${isActive ? "text-[#39FF14]" : "text-zinc-300"}`}>{project.title}</div>
        <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">{project.category}</div>
      </div>
    </Link>
  );
}

function InteractiveCareer({ onActivateProjects }: { onActivateProjects: (ids: ProjectId[] | null) => void }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const handleToggle = (id: string, projects: ProjectId[]) => {
    if (activeId === id) {
      setActiveId(null);
      onActivateProjects(null);
    } else {
      setActiveId(id);
      onActivateProjects(projects);
    }
  };

  return (
    <div className="flex flex-col border-t border-white/10">
      {EXPERIENCE.map((exp, idx) => {
        const isActive = activeId === exp.id;
        return (
          <div key={exp.id} className={`group relative border-b border-white/10 transition-colors duration-300 ${isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"}`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#39FF14] transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"}`} />
            <div className="py-8 px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3">
                <div className={`text-[10px] font-mono tracking-widest mb-1 transition-colors ${isActive ? "text-[#39FF14]" : "text-zinc-600"}`}>0{idx + 1} // {exp.year}</div>
                <h3 className={`text-2xl font-bold uppercase transition-colors ${isActive ? "text-white" : "text-zinc-300"}`}>{exp.company}</h3>
              </div>
              <div className="md:col-span-6">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{exp.role}</div>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-xl group-hover:text-zinc-300 transition-colors">{exp.desc}</p>
              </div>
              <div className="md:col-span-3 flex justify-end">
                <button onClick={() => handleToggle(exp.id, exp.projects)} className={`flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest border px-4 py-2 rounded transition-all duration-300 ${isActive ? "border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10 shadow-[0_0_15px_rgba(57,255,20,0.3)]" : "border-white/10 text-zinc-600 hover:text-white hover:border-white/30"}`}>
                  <Scan size={14} className={isActive ? "animate-pulse" : ""} />
                  {isActive ? "Disconnect_Log" : `Linked_Ships: ${exp.projects.length}`}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AwardRow({ award }: { award: (typeof AWARDS)[number] }) {
  return (
    <div className="flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors group cursor-default">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF3131] group-hover:bg-[#FF3131]/10 transition-colors"><Trophy size={20} className="text-zinc-500 group-hover:text-[#FF3131]" /></div>
        <div><h3 className="text-xl font-bold text-white group-hover:text-[#FF3131] transition-colors">{award.title}</h3><p className="text-xs font-mono text-zinc-500 uppercase">{award.org}</p></div>
      </div>
      <div className="text-lg font-bold text-zinc-600 group-hover:text-white transition-colors">{award.year}</div>
    </div>
  );
}

function FactMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-white/[0.02] py-8 relative group">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
        {[...PERSONAL_FACTS, ...PERSONAL_FACTS, ...PERSONAL_FACTS].map((fact, i) => (
          <div key={`${fact.id}-${i}`} className="flex-shrink-0 w-[300px] bg-[#0a0a0a] border border-white/10 p-6 flex items-center gap-4 hover:border-white/30 hover:bg-white/[0.05] transition-all cursor-crosshair">
            <div className={`p-3 rounded-full bg-white/5 border border-white/5 ${fact.color}`}><fact.icon size={20} /></div>
            <div>
              <div className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-wider">{fact.sub}</div>
              <div className="text-sm font-bold text-white uppercase">{fact.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [highlightedProjects, setHighlightedProjects] = useState<ProjectId[] | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#d1d1d1] font-sans selection:bg-[#39FF14] selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .grid-bg { background-size: 60px 60px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px); }
        .spotlight { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(800px circle at var(--x) var(--y), rgba(57, 255, 20, 0.04), transparent 40%); pointer-events: none; z-index: 1; }
        @keyframes scan-fast { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-scan-fast { animation: scan-fast 1.5s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>

      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="spotlight" style={{ ["--x" as any]: `${mousePos.x}px`, ["--y" as any]: `${mousePos.y}px` }} />

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 h-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link to="/" className="text-lg font-black tracking-tighter text-white">SUNEET.JAGDEV</Link>
        <button className="px-6 py-2 bg-white text-black font-bold text-xs uppercase hover:bg-[#39FF14] transition-colors">Let's Talk</button>
      </nav>

      <main className="relative z-10 pt-40 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        <section className="mb-32">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-12">
            <div>
              <div className="inline-block mb-6 px-3 py-1 border border-[#FF3131] text-[#FF3131] text-[10px] font-bold tracking-widest uppercase">Product Manager & Builder</div>
              <h1 className="text-7xl md:text-[8rem] leading-[0.8] font-black text-white tracking-tighter uppercase mb-6">RAW <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">IMPACT.</span></h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">I bridge the gap between engineering and business. I don't just manage backlogs; I prototype, architect, and ship scalable engines.</p>
            </div>
            <div className="flex gap-8 md:gap-12">
              {METRICS.map((m, i) => (
                <div key={i} className="flex flex-col"><span className="text-4xl md:text-5xl font-black text-white">{m.value}</span><span className="text-[10px] uppercase tracking-widest text-[#39FF14] font-bold mt-1">{m.label}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-40">
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The Build Log</h2>
            <span className="font-mono text-xs text-zinc-500 uppercase">{highlightedProjects ? `// FILTERING: ${highlightedProjects.length} MODULES` : "// ALL SYSTEMS NORMAL"}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-12 transition-all duration-500">
            {PROJECTS.map((project) => {
              let state: HighlightState = "normal";
              if (highlightedProjects) state = highlightedProjects.includes(project.id) ? "active" : "dimmed";
              return <CyberTile key={project.id} project={project} highlightState={state} />;
            })}
          </div>
        </section>

        <section className="mb-40">
          <div className="mb-6 flex items-baseline justify-between"><h2 className="text-4xl font-black text-white uppercase tracking-tighter">Career History</h2><div className="text-[10px] font-mono text-zinc-500 uppercase hidden md:block">// CLICK TO TRACE PROJECT ORIGINS</div></div>
          <InteractiveCareer onActivateProjects={setHighlightedProjects} />
        </section>

        <section className="mb-40 bg-[#0a0a0a] border border-white/5 p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3"><h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">The <br /><span className="text-[#39FF14]">Arsenal.</span></h2><p className="text-sm text-zinc-400">I believe PMs should understand the metal. These are the tools I use to prototype ideas and speak the same language as my engineering teams.</p></div>
            <div className="md:w-2/3 flex flex-wrap gap-3">{SKILLS.map((skill, i) => (<span key={i} className="px-4 py-2 bg-[#1a1a1a] border border-white/10 text-zinc-300 text-sm font-mono font-bold uppercase hover:bg-white hover:text-black hover:border-white transition-all cursor-default">{skill}</span>))}</div>
          </div>
        </section>

        <section className="mb-40">
          <div className="mb-12 border-b border-white/10 pb-6 flex items-baseline justify-between"><h2 className="text-4xl font-black text-white uppercase tracking-tighter">Human O.S.</h2><div className="text-[10px] font-mono text-zinc-500 uppercase">// SYSTEM_BIOS_DIAGNOSTICS</div></div>
          <FactMarquee />
        </section>

        <section className="mb-32">
          <div className="mb-12 border-b border-white/10 pb-6"><h2 className="text-4xl font-black text-white uppercase tracking-tighter">Trophy Case</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2">{AWARDS.map((award, i) => (<div key={i} className="flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors group cursor-default"><div className="flex items-center gap-6"><div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF3131] group-hover:bg-[#FF3131]/10 transition-colors"><Trophy size={20} className="text-zinc-500 group-hover:text-[#FF3131]" /></div><div><h3 className="text-xl font-bold text-white group-hover:text-[#FF3131] transition-colors">{award.title}</h3><p className="text-xs font-mono text-zinc-500 uppercase">{award.org}</p></div></div><div className="text-lg font-bold text-zinc-600 group-hover:text-white transition-colors">{award.year}</div></div>))}</div>
        </section>

        <footer className="pt-20 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-8 hover:text-[#39FF14] transition-colors cursor-pointer">Get In <br /> Touch.</h2>
          <div className="flex gap-8 mb-12">{["LinkedIn", "Twitter", "Email", "Github"].map((link) => (<a key={link} href="#" className="text-sm font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors">{link}</a>))}</div>
          <div className="font-mono text-xs text-zinc-700 uppercase tracking-widest mb-12">© {new Date().getFullYear()} Suneet Jagdev. Built in React & Tailwind.</div>
        </footer>
      </main>
    </div>
  );
}

/** --------------------------------
 * Dynamic Route Handling (FIXED)
 * -------------------------------- */

function ProjectPage() {
  const { id } = useParams();
  const pid = id as ProjectId | undefined;

  // ✅ Retrieve component from Registry
  // Use `as any` to bypass P11/P12 type mismatch safely
  const Component = pid ? (PROJECT_PAGE_MAP as any)[pid] : null;

  if (!pid || !Component) return <Navigate to="/" replace />;

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#39FF14] font-mono">LOADING_NODE...</div>}>
      <Component />
    </Suspense>
  );
}

/** --------------------------------
 * App Routes
 * -------------------------------- */

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePortfolio />} />
        <Route path="/p/:id" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}