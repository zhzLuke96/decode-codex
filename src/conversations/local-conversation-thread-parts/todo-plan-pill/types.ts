// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

export type PlanStepStatus = "pending" | "in_progress" | "completed";

export interface PlanStep {
  step: string;
  status: PlanStepStatus;
}

export interface TodoPlanItem {
  plan: PlanStep[];
}
