import { lazy } from "react";
import React from "react";

// Project Imports
// P1 & P2 are the only Unlocked Projects
const GeetaAI = lazy(() => import("./P1/GeetaAI"));
const Adhyayan = lazy(() => import("./P2/Adhyayan")); 

// Locked Component (Placeholder for all others)
// Assuming Locked.tsx exists in P3 folder or similar, 
// we can reuse one Locked component for all locked routes if preferred,
// but based on your structure, we lazy load from respective folders if they exist.
// For safety, we will point all locked ones to P3/Locked or similar if specific folders aren't made yet.
// However, to keep it clean, I will assume you want to map them to a generic Locked view.
// If you have specific folders for P3-P10, we keep them. For P11-P14, we map to P3/Locked for now.

const Locked = lazy(() => import("./P3/Locked"));
const UnifiedCore = lazy(() => import("./P14/UnifiedCore"));
const NanoSkills = lazy(() => import("./P4/NanoSkills"));
const MathVertical = lazy(() => import("./P8/MathVertical"));

export type ProjectId =
  | "P1" | "P2" | "P3" | "P4" | "P5"
  | "P6" | "P7" | "P8" | "P9" | "P10"
  | "P11" | "P12" | "P13" | "P14";

export const PROJECTS: Array<{ id: ProjectId; title: string; category: string }> = [
  { id: "P1", title: "Geeta AI", category: "AI Product" },
  { id: "P2", title: "Adhyayan", category: "Gamified LMS" },
  { id: "P3", title: "Fleet Intel", category: "Data Ops" },
  { id: "P4", title: "Nano Skills", category: "D2C Growth" },
  { id: "P5", title: "Agent Swarm", category: "Automation" },
  { id: "P6", title: "Summer Camp 2025", category: "Growth" },
  { id: "P7", title: "Urban Lens", category: "Media" },
  { id: "P8", title: "Math 0 to 1", category: "EdTech" },
  { id: "P9", title: "Design Ops", category: "Workflow" },
  { id: "P10", title: "PQS Revamp", category: "AI Evaluation" },
  { id: "P11", title: "Crypto V1", category: "Web3" },
  { id: "P12", title: "Podcast", category: "Content" },
  { id: "P13", title: "Digital KYC", category: "Onboarding" },
  { id: "P14", title: "Unified Core", category: "Platform Infra" },
];

export const PROJECT_PAGE_MAP: Record<
  ProjectId,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  // ✅ P1: Geeta AI (Unlocked)
  P1: GeetaAI,

  // ✅ P2: Adhyayan (Unlocked)
  P2: Adhyayan,

  // 🔒 Locked Modules (Mapped to existing Locked component)
  P3: lazy(() => import("./P3/Locked")),
  P4: NanoSkills,
  P5: lazy(() => import("./P5/Locked")),
  P6: lazy(() => import("./P6/Locked")),
  P7: lazy(() => import("./P7/Locked")),
  P8: MathVertical,
  P9: lazy(() => import("./P9/Locked")),
  P10: lazy(() => import("./P10/Locked")),
  
  // 🆕 New Projects (Mapped to P3 Locked for now to prevent crashes)
  P11: Locked,
  P12: Locked,
  P13: Locked,
  P14: UnifiedCore,
};