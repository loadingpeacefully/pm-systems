import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Locked() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#050505] text-[#d1d1d1] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <header className="relative px-6 md:px-20 py-14 border-b border-white/5">
        <div className="flex items-center justify-between gap-6">
          <Link
            to="/"
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#39FF14] hover:text-white transition-colors"
          >
            &lt;&lt; Return_To_Dashboard
          </Link>

          <a
            href="#"
            className="text-[10px] font-mono uppercase tracking-[0.4em] px-4 py-2 border border-[#39FF14]/40 text-[#39FF14] bg-[#39FF14]/5 hover:bg-[#39FF14]/10 hover:border-[#39FF14] transition-all"
          >
            Request_Access
          </a>
        </div>

        <h1 className="mt-10 text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          {id} <span className="text-[#39FF14]">LOCKED</span>
        </h1>

        <p className="mt-4 text-white/60 max-w-3xl">
          This casefile is staged. Full write-up will be published soon.
        </p>

        <div className="mt-10 border border-white/10 bg-white/[0.02] p-6">
          <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-2">
            // STATUS
          </div>
          <div className="text-sm text-white/70">
            Coming_Up: Hero → Failure → Architecture → Deep Dives → Impact
          </div>
        </div>
      </header>

      <footer className="relative px-6 md:px-20 py-10 border-t border-white/5 text-[10px] font-mono uppercase tracking-[0.35em] text-white/30">
        NODE_LOCKED // DEPLOY_PENDING
      </footer>
    </div>
  );
}
