// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~mhwq036p-Bf7sOiut.js
// Also covers ref/webview/assets/sidebar-onboarding-checklist-state-DcFn_T2V.js.
import {
  createPersistentSignal,
  initPersistentSignalRuntime,
} from "../../runtime/app-host-services-runtime";
import {
  createDerived,
  createSignal,
  initScopeRuntimeChunk,
  type ScopeToken,
} from "../../runtime/scope-signal-runtime";
import {
  initSharedObjectAppScopeRoot,
  sharedObjectAppScopeRoot,
} from "../../runtime/shared-object-host-runtime";

import type {
  ExternalAgentImportStatus,
  SidebarOnboardingChecklistItemId,
  SidebarOnboardingChecklistReader,
  SidebarOnboardingChecklistState,
  SidebarOnboardingChecklistStateByAccountId,
} from "./types";

export const sidebarOnboardingChecklistItemIds: SidebarOnboardingChecklistItemId[] =
  [
    "enable_notifications",
    "create_automation",
    "summarize_inbox",
    "triage_github_prs",
    "catch_up_updates_and_blockers",
    "catch_up_linear",
    "review_latest_plans",
    "summarize_current_priorities",
  ];

export const defaultSidebarOnboardingChecklistState: SidebarOnboardingChecklistState =
  {
    collapsed: false,
    completedItemIds: [],
  };

export const emptySidebarOnboardingChecklistStateByAccountId: SidebarOnboardingChecklistStateByAccountId =
  {};

const sidebarOnboardingScope = sharedObjectAppScopeRoot as ScopeToken;

export const externalAgentImportInitialStatus: ExternalAgentImportStatus = {
  status: "idle",
};

export const externalAgentImportStatusSignal =
  createSignal<ExternalAgentImportStatus>(
    sidebarOnboardingScope,
    externalAgentImportInitialStatus,
  );

export const sidebarOnboardingChecklistStateByAccountIdSignal =
  createPersistentSignal<SidebarOnboardingChecklistStateByAccountId>(
    "sidebar-onboarding-checklist-state-by-account-id-v1",
    emptySidebarOnboardingChecklistStateByAccountId,
  );

export const claudeImportCompletedOverrideSignal = createSignal<boolean | null>(
  sidebarOnboardingScope,
  null,
);

export const isClaudeImportCompletedSignal = createDerived<boolean>(
  sidebarOnboardingScope,
  (context) => {
    const { get } = context as unknown as SidebarOnboardingChecklistReader;
    return (
      get<boolean | null>(claudeImportCompletedOverrideSignal) ??
      get<ExternalAgentImportStatus>(externalAgentImportStatusSignal).status ===
        "success"
    );
  },
);

export const sidebarOnboardingChecklistDebugEnabledSignal =
  createPersistentSignal<boolean>(
    "sidebar-onboarding-checklist-debug-enabled",
    false,
  );

export function initExternalAgentImportStatusChunk(): void {
  initScopeRuntimeChunk();
  initSharedObjectAppScopeRoot();
}

export function initSidebarOnboardingChecklistStateChunk(): void {
  initScopeRuntimeChunk();
  initExternalAgentImportStatusChunk();
  initSharedObjectAppScopeRoot();
  initPersistentSignalRuntime();
}
