import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectNavProps {
  nextTo: string;
  nextLabel: string;
  nextColor?: string; // e.g. "text-blue-400"
}

export function ProjectNav({ nextTo, nextLabel, nextColor = "text-zinc-400" }: ProjectNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/98 border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          : "bg-[#050505]/80 border-white/5"
      }`}
    >
      <div className="w-full px-4 sm:px-8 h-12 sm:h-14 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#39FF14] hover:opacity-70 transition-opacity"
        >
          <ChevronLeft size={11} strokeWidth={2.5} />
          Dashboard
        </Link>

        <Link
          to={nextTo}
          className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] hover:opacity-70 transition-opacity border-b border-current/20 pb-px ${nextColor}`}
        >
          <span className="hidden xs:inline">Next:</span>
          <span>{nextLabel}</span>
          <ChevronRight size={11} strokeWidth={2.5} />
        </Link>
      </div>
    </nav>
  );
}
