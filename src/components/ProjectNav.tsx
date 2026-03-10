import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300"
      style={{
        background: scrolled ? 'var(--t-header-blur-bg)' : 'var(--t-header-blur-bg-light)',
        borderColor: scrolled ? 'var(--t-border)' : 'transparent',
        boxShadow: scrolled ? '0 2px 20px var(--t-shadow)' : 'none',
      }}
    >
      <div className="w-full px-4 sm:px-8 h-12 sm:h-14 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
          style={{ color: 'var(--t-neon)' }}
        >
          <ChevronLeft size={11} strokeWidth={2.5} />
          Dashboard
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to={nextTo}
            className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] hover:opacity-70 transition-opacity border-b border-current/20 pb-px ${nextColor}`}
          >
            <span className="hidden xs:inline">Next:</span>
            <span>{nextLabel}</span>
            <ChevronRight size={11} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
