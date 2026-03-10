import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-300 overflow-hidden group"
      style={{
        borderColor: "var(--t-border)",
        background: "var(--t-bg2)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--t-panel-hover)" }}
      />
      <div className="relative z-10">
        {theme === "dark" ? (
          <Sun size={14} style={{ color: "var(--t-text-subtle)" }} className="group-hover:scale-110 transition-transform" />
        ) : (
          <Moon size={14} style={{ color: "var(--t-text-subtle)" }} className="group-hover:scale-110 transition-transform" />
        )}
      </div>
    </button>
  );
}
