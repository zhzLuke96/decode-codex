// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~mhwq036p-Bf7sOiut.js
// Also covers ref/webview/assets/sidebar-onboarding-checklist-state-DcFn_T2V.js.
import type { ConversationalOnboardingTaskId } from "../conversational-onboarding-task-registry";

import {
  defaultSidebarOnboardingChecklistState,
  emptySidebarOnboardingChecklistStateByAccountId,
  externalAgentImportStatusSignal,
  sidebarOnboardingChecklistItemIds,
  sidebarOnboardingChecklistStateByAccountIdSignal,
} from "./signals";
import type {
  ExternalAgentImportStatus,
  SidebarOnboardingChecklistItemId,
  SidebarOnboardingChecklistState,
  SidebarOnboardingChecklistStateByAccountId,
  SidebarOnboardingChecklistStore,
} from "./types";

export async function runExternalAgentImportWithStatus(
  store: SidebarOnboardingChecklistStore,
  importSelection: () => Promise<void>,
): Promise<void> {
  store.set<ExternalAgentImportStatus>(externalAgentImportStatusSignal, {
    startedAtMs: Date.now(),
    status: "importing",
  });

  try {
    await importSelection();
    store.set<ExternalAgentImportStatus>(externalAgentImportStatusSignal, {
      completedAtMs: Date.now(),
      status: "success",
    });
  } catch (error) {
    store.set<ExternalAgentImportStatus>(externalAgentImportStatusSignal, {
      completedAtMs: Date.now(),
      status: "error",
    });
    throw error;
  }
}

export function getSidebarOnboardingChecklistState(
  stateByAccountId:
    | SidebarOnboardingChecklistStateByAccountId
    | null
    | undefined,
  accountId: string,
): SidebarOnboardingChecklistState {
  return (
    stateByAccountId?.[accountId] ?? defaultSidebarOnboardingChecklistState
  );
}

export function isSidebarOnboardingChecklistItemIdCompleted(
  state: SidebarOnboardingChecklistState,
  itemId: SidebarOnboardingChecklistItemId,
): boolean {
  return state.completedItemIds.includes(itemId);
}

export function isSidebarOnboardingChecklistItemComplete(
  state: SidebarOnboardingChecklistState,
  itemId: SidebarOnboardingChecklistItemId,
  areNotificationsEnabled: boolean,
): boolean {
  return itemId === "enable_notifications"
    ? areNotificationsEnabled
    : isSidebarOnboardingChecklistItemIdCompleted(state, itemId);
}

export function setSidebarOnboardingChecklistCollapsed(
  store: SidebarOnboardingChecklistStore,
  accountId: string,
  collapsed: boolean,
): void {
  updateChecklistStateForAccount(store, accountId, (currentState) => ({
    ...currentState,
    collapsed,
  }));
}

export function dismissSidebarOnboardingChecklist(
  store: SidebarOnboardingChecklistStore,
  accountId: string,
): void {
  updateChecklistStateForAccount(store, accountId, (currentState) => ({
    ...currentState,
    dismissed: true,
  }));
}

export function resetSidebarOnboardingChecklistState(
  store: SidebarOnboardingChecklistStore,
): void {
  store.set<SidebarOnboardingChecklistStateByAccountId>(
    sidebarOnboardingChecklistStateByAccountIdSignal,
    emptySidebarOnboardingChecklistStateByAccountId,
  );
}

export function markSidebarOnboardingChecklistItemComplete(
  store: SidebarOnboardingChecklistStore,
  accountId: string,
  itemId: SidebarOnboardingChecklistItemId,
): void {
  updateChecklistStateForAccount(store, accountId, (currentState) =>
    currentState.completedItemIds.includes(itemId)
      ? currentState
      : {
          ...currentState,
          completedItemIds: [...currentState.completedItemIds, itemId],
        },
  );
}

export function setCompletedConversationalOnboardingTask(
  store: SidebarOnboardingChecklistStore,
  accountId: string,
  taskId: ConversationalOnboardingTaskId,
): void {
  updateChecklistStateForAccount(store, accountId, (currentState) =>
    currentState.completedConversationalOnboardingTaskId === taskId
      ? currentState
      : {
          ...currentState,
          completedConversationalOnboardingTaskId: taskId,
        },
  );
}

export function markAllSidebarOnboardingChecklistItemsComplete(
  store: SidebarOnboardingChecklistStore,
  accountId: string,
): void {
  updateChecklistStateForAccount(store, accountId, (currentState) => ({
    ...currentState,
    completedItemIds: [...sidebarOnboardingChecklistItemIds],
  }));
}

function updateChecklistStateForAccount(
  store: SidebarOnboardingChecklistStore,
  accountId: string,
  update: (
    currentState: SidebarOnboardingChecklistState,
  ) => SidebarOnboardingChecklistState,
): void {
  store.set<SidebarOnboardingChecklistStateByAccountId>(
    sidebarOnboardingChecklistStateByAccountIdSignal,
    (stateByAccountId) => {
      const nextStateByAccountId =
        stateByAccountId ?? emptySidebarOnboardingChecklistStateByAccountId;
      const currentState = getSidebarOnboardingChecklistState(
        nextStateByAccountId,
        accountId,
      );
      const nextState = update(currentState);

      return nextState === currentState
        ? nextStateByAccountId
        : {
            ...nextStateByAccountId,
            [accountId]: nextState,
          };
    },
  );
}
