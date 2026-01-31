import React from "react";

export type ProjectId =
  | "P1" | "P2" | "P3" | "P4" | "P5"
  | "P6" | "P7" | "P8" | "P9" | "P10";

export const PROJECTS: Array<{ id: ProjectId; title: string; category: string }> = [
  { id: "P1", title: "Geeta AI", category: "AI Product" },
  { id: "P2", title: "Adhyayan", category: "Gamified LMS" }, // ✅ RENAMED from Numon OS
  { id: "P3", title: "Fleet Intel", category: "Data Ops" },
  { id: "P4", title: "Commerce V2", category: "Growth" },
  { id: "P5", title: "Agent Swarm", category: "Automation" },
  { id: "P6", title: "Synth Lab", category: "Audio" },
  { id: "P7", title: "Urban Lens", category: "Media" },
  { id: "P8", title: "Zero Lat", category: "Infra" },
  { id: "P9", title: "Design Ops", category: "Workflow" },
  { id: "P10", title: "Health UI", category: "Visuals" },
];

export const PROJECT_PAGE_MAP: Record<
  ProjectId,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  // ✅ P1: Geeta AI (Unlocked)
  P1: React.lazy(() => import("./P1/GeetaAI")),

  // ✅ P2: Adhyayan (Unlocked)
  P2: React.lazy(() => import("./P2/Adhyayan")),

  // 🔒 P3 - P10: Locked Modules
  P3: React.lazy(() => import("./P3/Locked")),
  P4: React.lazy(() => import("./P4/Locked")),
  P5: React.lazy(() => import("./P5/Locked")),
  P6: React.lazy(() => import("./P6/Locked")),
  P7: React.lazy(() => import("./P7/Locked")),
  P8: React.lazy(() => import("./P8/Locked")),
  P9: React.lazy(() => import("./P9/Locked")),
  P10: React.lazy(() => import("./P10/Locked")),
};