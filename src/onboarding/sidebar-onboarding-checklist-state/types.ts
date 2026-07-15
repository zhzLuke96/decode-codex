// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~mhwq036p-Bf7sOiut.js
// Also covers ref/webview/assets/sidebar-onboarding-checklist-state-DcFn_T2V.js.
import type { ConversationalOnboardingTaskId } from "../conversational-onboarding-task-registry";

export type SidebarOnboardingChecklistItemId =
  | "enable_notifications"
  | "create_automation"
  | "summarize_inbox"
  | "triage_github_prs"
  | "catch_up_updates_and_blockers"
  | "catch_up_linear"
  | "review_latest_plans"
  | "summarize_current_priorities"
  | string;

export type SidebarOnboardingChecklistState = {
  collapsed: boolean;
  completedConversationalOnboardingTaskId?: ConversationalOnboardingTaskId;
  completedItemIds: SidebarOnboardingChecklistItemId[];
  dismissed?: boolean;
};

export type SidebarOnboardingChecklistStateByAccountId = Record<
  string,
  SidebarOnboardingChecklistState
>;

export type ExternalAgentImportStatus =
  | { status: "idle" }
  | { startedAtMs: number; status: "importing" }
  | { completedAtMs: number; status: "success" }
  | { completedAtMs: number; status: "error" };

export type SidebarOnboardingChecklistStore = {
  get?<TValue>(signal: unknown): TValue;
  set<TValue>(
    signal: unknown,
    value: TValue | ((previous: TValue | null | undefined) => TValue),
  ): void;
};

export type SidebarOnboardingChecklistReader = {
  get<TValue>(signal: unknown): TValue;
};
