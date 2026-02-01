import React, { useState, useEffect, Suspense } from 'react';
import { 
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  useLocation
} from 'react-router-dom';
import { 
  ArrowUpRight, 
  Activity, 
  Zap, 
  Box, 
  Cpu, 
  Terminal, 
  Globe, 
  Database, 
  Command, 
  Briefcase, 
  Mic, 
  Scan, 
  MapPin, 
  HeartPulse, 
  Palette, 
  Plane, 
  Footprints, 
  Award, 
  ChevronRight, 
  Layout, 
  Server, 
  Code, 
  X, 
  Layers, 
  Aperture, 
  MessageSquare, 
  Trophy 
} from 'lucide-react';

// Import Registry
import { PROJECT_PAGE_MAP } from "./pages/projects/registry";

// --- DATA: THE ARCHIVE ---

type ProjectId =
  | "P1" | "P2" | "P3" | "P4" | "P5"
  | "P6" | "P7" | "P8" | "P9" | "P10"
  | "P11" | "P12" | "P13"; // Added P13 for Digital KYC

const PROJECTS = [
  // ✅ P1: GEETA AI (PRESERVED: Neon Green)
  { 
    id: "P1", 
    title: "GEETA_AI", 
    type: "AI_PIPELINE", 
    icon: Cpu, 
    desc: "Autonomous content factory scaling worksheet production.", 
    color: "text-[#39FF14]", // Neon Green
    border: "border-[#39FF14]", 
    stack: "Python, OpenAI, RAG", 
    metrics: ["15x Scale", "90% Cost Redux"] 
  },
  
  // ✅ P2: ADHYAYAN (PRESERVED: Purple)
  { 
    id: "P2", 
    title: "ADHYAYAN", 
    type: "GAMIFIED_LMS", 
    icon: Globe, 
    desc: "Unified Global EdTech Operating System for 30+ countries.", 
    color: "text-[#A855F7]", // Purple
    border: "border-[#A855F7]", 
    stack: "React, Node.js, AWS", 
    metrics: ["30+ Countries", "Unified Stack"] 
  },

  // NEW PROJECTS (From your list)
  { id: "P5", title: "AGENT_SWARM", type: "AUTOMATION", icon: Zap, desc: "LLM agents handling Tier-1 support & ops triage.", color: "text-red-400", border: "border-red-500", stack: "LangChain, Vector DB", metrics: ["65% Deflection", "Zero Touch"] },
  { id: "P3", title: "FLEET_INTEL", type: "DATA_OPS", icon: Activity, desc: "High-frequency sensor ingestion for logistics fleets.", color: "text-amber-400", border: "border-amber-500", stack: "Kafka, Go, TimescaleDB", metrics: ["1M Events/Sec", "Real-Time"] },
  { id: "P13", title: "DIGITAL_KYC", type: "ONBOARDING", icon: Scan, desc: "Mobile-first driver verification reducing onboarding to 10m.", color: "text-indigo-400", border: "border-indigo-500", stack: "React Native, OpenCV", metrics: ["10m Onboarding", "100% Digital"] },
  { id: "P9", title: "DESIGN_OPS", type: "WORKFLOW", icon: Command, desc: "Parametric scripts automating architectural layouts.", color: "text-purple-400", border: "border-purple-500", stack: "Rhino, Grasshopper, Python", metrics: ["95% Time Saved", "Automated"] },
  { id: "P7", title: "URBAN_LENS", type: "MEDIA", icon: Box, desc: "WebGL visualization of urban density data.", color: "text-cyan-400", border: "border-cyan-500", stack: "Three.js, Mapbox", metrics: ["Data Viz", "Interactive"] },
  { id: "P4", title: "COMMERCE_V2", type: "GROWTH", icon: Database, desc: "Algorithmic pricing engine boosting revenue by 18%.", color: "text-pink-400", border: "border-pink-500", stack: "Next.js, Stripe, Redis", metrics: ["+18% Rev", "Dynamic Pricing"] },
  
  // Lab Projects
  { id: "P6", title: "SYNTH_LAB", type: "AUDIO", icon: Layers, desc: "WebAudio API experiments.", color: "text-pink-400", border: "border-pink-500", stack: "WebAudio, React", metrics: ["Audio DSP", "Experimental"] },
  { id: "P8", title: "ZERO_LAT", type: "INFRA", icon: Terminal, desc: "Edge networking R&D.", color: "text-zinc-400", border: "border-zinc-500", stack: "Rust, WASM", metrics: ["<10ms Latency", "Edge Compute"] },
  { id: "P10", title: "HEALTH_UI", type: "VIS", icon: HeartPulse, desc: "Health data viz.", color: "text-teal-400", border: "border-teal-500", stack: "D3.js", metrics: ["Real-time", "Data Viz"] },
  { id: "P11", title: "CRYPTO_V1", type: "WEB3", icon: Aperture, desc: "Chain analytics.", color: "text-yellow-400", border: "border-yellow-500", stack: "Solidity", metrics: ["On-Chain", "Analytics"] },
  { id: "P12", title: "PODCAST", type: "CONTENT", icon: Mic, desc: "Tech talks.", color: "text-orange-400", border: "border-orange-500", stack: "RSS", metrics: ["Content", "Audio"] }
];

const MISSIONS = [
  {
    id: "M03",
    company: "BRIGHTCHAMPS",
    role: "SR. PRODUCT MANAGER",
    period: "2023 — PRESENT",
    status: "ACTIVE_OPERATION",
    color: "text-[#39FF14]",
    accent: "bg-[#39FF14]",
    border: "border-[#39FF14]",
    bg: "bg-[#39FF14]/5",
    stack: ["React", "Python/RAG", "SQL", "Redis"],
    linkedProjects: ["P1", "P2", "P5"] 
  },
  {
    id: "M02",
    company: "WHEELSEYE",
    role: "PRODUCT MANAGER",
    period: "2022 — 2023",
    status: "MISSION_COMPLETE",
    color: "text-blue-400",
    accent: "bg-blue-400",
    border: "border-blue-400",
    bg: "bg-blue-400/5",
    brief: "Transforming manual logistics into a real-time marketplace. Reduced booking times from 8 hours to 5 minutes via algorithmic allocation.",
    metrics: ["1M Events/Sec", "Real-Time Alloc", "Digital KYC"],
    stack: ["Kafka", "Golang", "Postgres", "Google Maps API"],
    linkedProjects: ["P3", "P13"]
  },
  {
    id: "M01",
    company: "ARTH DESIGN",
    role: "FOUNDER / PM",
    period: "2020 — 2022",
    status: "FOUNDATION_LAID",
    color: "text-purple-400",
    accent: "bg-purple-400",
    border: "border-purple-400",
    bg: "bg-purple-400/5",
    brief: "Building 'BuildwIT', a B2B PaaS for automated architectural proposals. Slashed generation time by 95% using computational design scripts.",
    metrics: ["95% Time Saved", "B2B SaaS", "Parametric Design"],
    stack: ["Rhino/Grasshopper", "Python", "Three.js", "C#"],
    linkedProjects: ["P9", "P7"]
  }
];

const FACTS_STREAM_1 = [
  { text: "Balashree Medalist", sub: "Presidential Honor", icon: Award, color: "text-yellow-400" },
  { text: "10+ Countries", sub: "Global Explorer", icon: Globe, color: "text-cyan-400" },
  { text: "Ironman 70.3", sub: "Training In Progress", icon: HeartPulse, color: "text-red-400" },
  { text: "Designer Since 2006", sub: "Fine Arts Scholar", icon: Palette, color: "text-purple-400" },
];

const FACTS_STREAM_2 = [
  { text: "Manhattan Run", sub: "13 Miles / 6 Hours", icon: Footprints, color: "text-orange-400" },
  { text: "Design Intern @ NYC", sub: "Milestone Arch", icon: Briefcase, color: "text-blue-400" },
  { text: "Copenhagen Stint", sub: "COBE Architects", icon: MapPin, color: "text-emerald-400" },
  { text: "Mexico City Stint", sub: "Serrano Monjaraz", icon: MapPin, color: "text-pink-400" },
];

const AWARDS = [
  { title: "Best Executed Project", org: "Tata Projects Limited", year: "2021", icon: Trophy },
  { title: "Above & Beyond Award", org: "Arth Design Build", year: "2020", icon: Award },
  { title: "National Winner", org: "Art de Vous Design", year: "2017", icon: Award },
  { title: "National Finalist", org: "INSDAG Design", year: "2018", icon: Award },
  { title: "Indian Delegate", org: "HPAIR (Harvard Project)", year: "2016", icon: Globe },
  { title: "Silver Medalist", org: "Inter-IIT Product Design", year: "2015", icon: Trophy },
  { title: "National Winner", org: "Beat-D-Euclid", year: "2014", icon: Award },
  { title: "Zonal Winner", org: "Ethos Transparence", year: "2014", icon: Award },
];

const SKILLS = [
  "Product Strategy", "System Architecture", "React/Next.js", "Python/AI", "SQL/Data", "Figma/UX", "GTM Strategy"
];

// --- COMPONENTS ---

const GlitchText = ({ text }: { text: string }) => (
  <div className="relative inline-block group">
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -ml-[1px] translate-x-[2px] text-[#FF3131] opacity-0 group-hover:opacity-70 animate-pulse z-0 mix-blend-screen">{text}</span>
    <span className="absolute top-0 left-0 -ml-[1px] -translate-x-[2px] text-[#39FF14] opacity-0 group-hover:opacity-70 animate-pulse delay-75 z-0 mix-blend-screen">{text}</span>
  </div>
);

const ProjectTile = ({ project, compact = false, onClick, isSelected }: any) => {
  // Safe color parsing for hover effect
  const borderColor = project.border || 'border-white';
  const textColor = project.color || 'text-white';
  
  // Dynamic linking: if onClick is provided (for missions), it acts as a button. 
  // If not (main grid), it acts as a Link.
  const Content = (
    <>
      {/* Hover Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-transparent transition-colors duration-300 ${textColor.replace('text-', 'bg-')}`} />
      
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center z-10 ${compact ? 'p-3' : 'p-6'}`}>
        <project.icon 
          className={`text-zinc-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 ${isSelected ? textColor : ''} ${compact ? 'w-5 h-5 mb-2' : 'w-10 h-10 mb-4'}`} 
          strokeWidth={1.5}
        />
        <h3 className={`font-black text-white uppercase tracking-tight group-hover:tracking-widest transition-all ${compact ? 'text-[10px] mb-0.5' : 'text-sm mb-1'}`}>
          {project.title}
        </h3>
        <div className={`font-mono text-zinc-500 uppercase tracking-wider group-hover:text-[#39FF14] transition-colors ${compact ? 'text-[8px]' : 'text-[9px]'}`}>
          {project.type}
        </div>
      </div>

      {/* Selected Indicator Corner */}
      {isSelected && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white" />
        </>
      )}
    </>
  );

  const containerClasses = `group relative bg-[#0a0a0a] border hover:border-white/30 transition-all duration-300 overflow-hidden cursor-pointer 
    ${compact ? 'aspect-[4/3]' : 'aspect-square'}
    ${isSelected ? `${borderColor} shadow-[0_0_15px_rgba(255,255,255,0.1)]` : 'border-white/10'}
  `;

  if (onClick) {
    return (
      <div onClick={onClick} className={containerClasses}>
        {Content}
      </div>
    );
  }

  return (
    <Link to={`/p/${project.id}`} className={containerClasses}>
      {Content}
    </Link>
  );
};

const ProjectIntelPanel = ({ project }: any) => {
  if (!project) return null;

  return (
    <div className="mt-4 border-t border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-sm relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
        />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 ${project.color}`}>
                {project.type}
              </span>
              <div className="h-px w-8 bg-white/10" />
            </div>
            <h4 className="text-sm font-bold text-white uppercase mb-2 tracking-tight">PROJECT_OBJECTIVE</h4>
            <p className="text-xs text-zinc-400 font-mono leading-relaxed">
              {project.desc}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Impact_Metrics</div>
              <div className="flex flex-wrap gap-2">
                {project.metrics && project.metrics.map((m: string, i: number) => (
                  <span key={i} className="text-[10px] font-bold text-white bg-white/5 border border-white/5 px-2 py-1">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest mb-1">Core_Stack</div>
              <div className={`text-[10px] font-mono ${project.color}`}>
                {project.stack}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionCard = ({ mission }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);
  
  const linkedProjects = PROJECTS.filter(p => mission.linkedProjects.includes(p.id));

  return (
    <div className="group relative border-l-2 border-white/10 pl-8 pb-16 last:pb-0">
      {/* Timeline Node */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-[#050505] transition-colors duration-300 ${isOpen ? mission.border + ' ' + mission.bg : 'border-zinc-700 group-hover:border-white'}`} />
      
      {/* Header */}
      <div 
        className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer mb-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-[10px] font-mono font-bold tracking-[0.2em] ${mission.color}`}>
              //{mission.id}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              {mission.period}
            </span>
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-zinc-200 transition-colors">
            {mission.company}
          </h3>
          <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-1">
            {mission.role}
          </div>
        </div>

        <div className={`mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full transition-all ${isOpen ? mission.bg : 'bg-transparent'}`}>
          <div className={`w-2 h-2 rounded-full ${isOpen ? 'animate-pulse ' + mission.accent : 'bg-zinc-600'}`} />
          <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${isOpen ? 'text-white' : 'text-zinc-500'}`}>
            {mission.status.replace(/_/g, ' ')}
          </span>
          <ChevronRight size={14} className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </div>

      {/* Expanded Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-50'}`}>
        <div className="bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-sm mb-6">
          <div className="grid grid-cols-1 gap-8">
            
            {/* Top: Brief */}
            {mission.brief && (
              <div className="border-b border-white/10 pb-6">
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-2">Mission Brief</div>
                <p className="text-sm text-zinc-300 leading-relaxed font-mono">
                  {mission.brief}
                </p>
              </div>
            )}

            {/* Bottom: Project Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                  Key Projects Delivered <span className="text-zinc-700 ml-2">// CLICK TO VIEW DETAILS</span>
                </div>
                <div className="text-[9px] font-mono text-zinc-600">
                  [{linkedProjects.length} MODULES]
                </div>
              </div>
              
              {linkedProjects.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {linkedProjects.map(p => (
                    <div 
                      key={p.id}
                      // Special handler for tiles INSIDE missions (expand detail, don't nav)
                      onClick={(e) => {
                        e.preventDefault(); 
                        e.stopPropagation();
                        setActiveProject(activeProject?.id === p.id ? null : p);
                      }}
                    >
                      <ProjectTile 
                        project={p} 
                        compact={true} 
                        isSelected={activeProject?.id === p.id}
                        // We pass onClick to the tile so it renders as a div, not a Link
                        onClick={() => {}}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-20 flex items-center justify-center border border-white/5 border-dashed rounded bg-white/[0.01]">
                  <span className="text-[10px] font-mono text-zinc-700 uppercase">No Public Modules</span>
                </div>
              )}

              {/* Project Detail Expansion */}
              <ProjectIntelPanel project={activeProject} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const AwardTile = ({ award }: any) => (
  <div className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#39FF14]/30 hover:bg-white/[0.02] transition-all group">
    <div className="flex items-center gap-4">
      <div className="p-2 rounded bg-white/5 text-zinc-500 group-hover:text-[#39FF14] transition-colors">
        <award.icon size={18} />
      </div>
      <div>
        <h4 className="text-xs font-bold text-white uppercase tracking-wide group-hover:text-[#39FF14] transition-colors">
          {award.title}
        </h4>
        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
          {award.org}
        </div>
      </div>
    </div>
    <div className="text-[10px] font-mono font-bold text-zinc-600 group-hover:text-white transition-colors">
      {award.year}
    </div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function HomePortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#d1d1d1] font-sans selection:bg-[#39FF14] selection:text-black overflow-x-hidden">
      
      {/* GLOBAL STYLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        
        .grid-bg {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        
        .scanline {
          position: fixed; top: 0; left: 0; width: 100%; height: 2px;
          background: rgba(57, 255, 20, 0.1);
          animation: scan 4s linear infinite; pointer-events: none; z-index: 50;
        }
        @keyframes scan { 0% { top: -10px; } 100% { top: 100vh; } }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
      `}</style>

      {/* BACKGROUND */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />
      <div className="scanline" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#39FF14] shadow-[0_0_10px_#39FF14] animate-pulse" />
            <div className="text-sm font-black tracking-widest text-white uppercase">SUNEET.JAGDEV</div>
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-white/10 text-[10px] font-bold tracking-widest text-white hover:bg-white hover:text-black transition-all uppercase">
            <MessageSquare size={12} /> Contact Me
          </button>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* 1. HERO SECTION */}
        <section className="mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-[#39FF14]/30 bg-[#39FF14]/5 text-[#39FF14] text-[9px] font-bold tracking-[0.2em] uppercase">
                <Terminal size={10} /> System Architect // Product Builder
              </div>
              <h1 className="text-6xl md:text-[7rem] leading-[0.85] font-black text-white tracking-tighter uppercase mb-8">
                <GlitchText text="ARCHITECTING" /> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700">SCALE.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-medium leading-relaxed">
                I transform fragmented chaos into unified systems. Specializing in <span className="text-white">Platform Consolidation</span>, <span className="text-white">AI Automation</span>, and <span className="text-white">Monetization Engines</span>.
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {[
                { label: "Global Users", val: "10M+" },
                { label: "Systems Unified", val: "14+" },
                { label: "Revenue Impact", val: "+18%" }
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{s.label}</span>
                  <span className="text-xl font-bold text-[#39FF14] mono">{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. THE MISSION LOG (EXPERIENCE) */}
        <section className="mb-40">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
              <Server size={32} className="text-[#39FF14]" />
              Mission Log
            </h2>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden md:block">
              // DECRYPTING_CAREER_HISTORY...
            </span>
          </div>

          <div className="max-w-5xl mx-auto">
            {MISSIONS.map((mission) => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </section>

        {/* 3. THE ARSENAL (PROJECTS) */}
        <section className="mb-40">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
              <Layout size={32} className="text-[#39FF14]" />
              The Build Grid
            </h2>
            <button className="text-xs font-bold text-white border-b border-[#39FF14] pb-1 uppercase tracking-widest hover:opacity-80">
              View All 42+ Ships
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {PROJECTS.map((project) => (
              <ProjectTile key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 4. BIO-METRICS (PERSONAL) */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
              <Activity size={32} className="text-[#39FF14]" />
              Human O.S.
            </h2>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden md:block">
              // DIAGNOSTICS_ONLINE
            </span>
          </div>

          {/* Marquee Container */}
          <div className="w-full overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-12 relative group">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
            
            {/* Stream 1: Left */}
            <div className="flex gap-6 animate-marquee mb-6 hover:[animation-play-state:paused]">
              {[...FACTS_STREAM_1, ...FACTS_STREAM_1, ...FACTS_STREAM_1].map((fact, i) => (
                <div 
                  key={`r1-${i}`} 
                  className="flex-shrink-0 w-[280px] bg-[#050505] border border-white/10 p-5 flex items-center gap-4 hover:border-white/30 hover:bg-white/[0.02] transition-all"
                >
                  <div className={`p-2.5 rounded bg-white/5 border border-white/5 ${fact.color}`}>
                    <fact.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">{fact.sub}</div>
                    <div className="text-xs font-bold text-white uppercase">{fact.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stream 2: Right */}
            <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
              {[...FACTS_STREAM_2, ...FACTS_STREAM_2, ...FACTS_STREAM_2].map((fact, i) => (
                <div 
                  key={`r2-${i}`} 
                  className="flex-shrink-0 w-[280px] bg-[#050505] border border-white/10 p-5 flex items-center gap-4 hover:border-white/30 hover:bg-white/[0.02] transition-all"
                >
                  <div className={`p-2.5 rounded bg-white/5 border border-white/5 ${fact.color}`}>
                    <fact.icon size={18} />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-zinc-500 mb-1 uppercase tracking-wider">{fact.sub}</div>
                    <div className="text-xs font-bold text-white uppercase">{fact.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TROPHY CASE (AWARDS) */}
        <section className="mb-40">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
              <Trophy size={32} className="text-[#39FF14]" />
              Trophy Case
            </h2>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden md:block">
              // HALL_OF_RECORDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AWARDS.map((award, i) => (
              <AwardTile key={i} award={award} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 border-t border-white/10 flex flex-col items-center justify-center text-center">
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase mb-8 hover:text-[#39FF14] transition-colors cursor-pointer">
            Get In <br /> Touch.
          </h2>
          <div className="flex gap-8 mb-12">
            {["LinkedIn", "Twitter", "Email", "Github"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-bold text-zinc-500 hover:text-white uppercase tracking-widest transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="font-mono text-xs text-zinc-700 uppercase tracking-widest mb-12">
            © {new Date().getFullYear()} Suneet Jagdev. Built in React & Tailwind.
          </div>
        </footer>

      </main>
    </div>
  );
}

// --- APP ROUTING INFRA ---

function ProjectPage() {
  const { id } = useParams();
  const pid = id as string;

  // Retrieve component from Registry
  const Component = pid ? (PROJECT_PAGE_MAP as any)[pid] : null;

  if (!pid || !Component) return <Navigate to="/" replace />;

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#39FF14] font-mono animate-pulse">
        LOADING_NODE...
      </div>
    }>
      <Component />
    </Suspense>
  );
}

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