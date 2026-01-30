// src/App.tsx
import "./App.css";

type Status = "Live" | "Draft" | "Planned";
<h1 className="text-4xl font-bold text-emerald-400">PM Systems</h1>

type SystemLink = {
  title: string;
  description: string;
  status: Status;
  href: string; // later can be internal routes too
  tags: string[];
};

const systems: SystemLink[] = [
  {
    title: "Hiring OS",
    description: "Stages, gates, scorecards, automations, and dashboards for hiring pipelines.",
    status: "Draft",
    href: "#",
    tags: ["Recruit", "CRM", "Automation"],
  },
  {
    title: "Teacher Quality OS",
    description: "DQS, conversion coaching loops, risk matrix, batching, weekly review rituals.",
    status: "Planned",
    href: "#",
    tags: ["DQS", "Conversion", "Coaching"],
  },
  {
    title: "Content Ops OS",
    description: "Content creation pipelines, CMS thinking, QA loops, scale playbooks.",
    status: "Planned",
    href: "#",
    tags: ["CMS", "Templates", "Scale"],
  },
  {
    title: "Personal PM OS",
    description: "Daily journal, weekly review, decision logs, projects dashboard.",
    status: "Draft",
    href: "#",
    tags: ["Rituals", "Planning", "Tracking"],
  },
];

function StatusPill({ status }: { status: Status }) {
  return <span className={`pill pill--${status.toLowerCase()}`}>{status}</span>;
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__inner">
          <p className="kicker">PM SYSTEMS</p>
          <h1>Product Architect · Scale & Automation</h1>
          <p className="sub">
            A living library of operating systems for shipping faster, scaling teams, and building repeatable outcomes.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="sectionHead">
          <h2>Systems</h2>
          <p>Pick a system. Each will evolve into a dedicated page with templates, docs, and workflows.</p>
        </section>

        <section className="grid">
          {systems.map((s) => (
            <article key={s.title} className="card">
              <div className="card__top">
                <div>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.description}</p>
                </div>
                <StatusPill status={s.status} />
              </div>

              <div className="tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="card__bottom">
                <a className="btn" href={s.href}>
                  Open →
                </a>
                <span className="small muted">Last updated: today</span>
              </div>
            </article>
          ))}
        </section>

        <footer className="footer">
          <span className="muted">Built on Vite + GitHub Pages · loadingpeacefully</span>
        </footer>
      </main>
    </div>
  );
}
