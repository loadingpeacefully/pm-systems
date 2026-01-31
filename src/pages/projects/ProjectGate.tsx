import React, { Suspense, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { PROJECTS, type ProjectId, PROJECT_PAGE_MAP } from "./registry";

export default function ProjectGate() {
  const { id } = useParams();
  const pid = id as ProjectId | undefined;

  const exists = useMemo(() => PROJECTS.some((p) => p.id === pid), [pid]);
  if (!pid || !exists) return <Navigate to="/" replace />;

  const Page = PROJECT_PAGE_MAP[pid];
  if (!Page) return <Navigate to="/" replace />;

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050505] text-white p-10">Loading…</div>}>
      <Page />
    </Suspense>
  );
}
