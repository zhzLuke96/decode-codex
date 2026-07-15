// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Diff highlighter provider/hook boundary used by hover previews.
import type { ComponentType, ReactNode } from "react";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperHLowerI as initDiffHighlighterProviderRuntime,
  worktreeNewThreadOrchestratorCompatSlotUpperVLowerI as DiffHighlighterProvider,
  worktreeNewThreadOrchestratorCompatSlotUnderscoreLowerA as useDiffHighlighterPool,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";

type DiffHighlighter = {
  primeDiffHighlightCache?: (fileDiff: unknown) => void;
};

const Provider = DiffHighlighterProvider as ComponentType<{
  children: ReactNode;
}>;

export function DiffHighlighterScope({ children }: { children: ReactNode }) {
  initDiffHighlighterProviderRuntime();
  return <Provider>{children}</Provider>;
}

export function useDiffHighlighter(): DiffHighlighter | null {
  initDiffHighlighterProviderRuntime();
  return (useDiffHighlighterPool() as DiffHighlighter | null) ?? null;
}
