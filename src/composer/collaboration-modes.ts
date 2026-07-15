// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Collaboration-mode predicates and the plan-mode toggle used by the home
// composer. A collaboration mode is "plan" (read-only planning turn) or
// "default" (normal turn); these helpers classify a mode and drive the
// composer.togglePlanMode command.
import type { CollaborationMode } from "../collaboration/use-collaboration-mode";

export function isDefaultCollaborationMode(mode: CollaborationMode): boolean {
  return mode.mode === "default";
}

export function isPlanCollaborationMode(mode: CollaborationMode): boolean {
  return mode.mode === "plan";
}

export interface RunTogglePlanModeOptions {
  hasPlanMode: boolean;
  hasDefaultMode: boolean;
  isPlanMode: boolean;
  setSelectedMode: (mode: string | null) => void;
}

/**
 * Toggle between plan and default collaboration modes.
 *
 * When plan mode is available: if plan is currently active, switch back to
 * default (or clear the selection when there is no default mode); otherwise
 * switch to plan. Returns whether a toggle occurred (false when plan mode is
 * unavailable).
 */
export function runTogglePlanMode({
  hasPlanMode,
  hasDefaultMode,
  isPlanMode,
  setSelectedMode,
}: RunTogglePlanModeOptions): boolean {
  if (!hasPlanMode) return false;
  if (isPlanMode) {
    setSelectedMode(hasDefaultMode ? "default" : null);
    return true;
  }
  setSelectedMode("plan");
  return true;
}
