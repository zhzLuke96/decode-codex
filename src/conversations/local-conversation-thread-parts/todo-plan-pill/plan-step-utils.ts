// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import type { PlanStep } from "./types";

export function isCompletedAsNumber(step: PlanStep): number {
  return step.status === "completed" ? 1 : 0;
}

export function isNotCompleted(step: PlanStep): boolean {
  return step.status !== "completed";
}

export function isInProgress(step: PlanStep): boolean {
  return step.status === "in_progress";
}

export function negate(value: boolean): boolean {
  return !value;
}
