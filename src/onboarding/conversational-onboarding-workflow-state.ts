// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Persisted state for the Electron conversational-onboarding workflow (role ->
// task -> permission -> execution) plus accessors that read and mutate it.

import { createPersistedSignal } from "../runtime/persisted-signal";
import { getPersistedAtomValue } from "../utils/persisted-atom-store";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";

export type ConversationalOnboardingWorkflowPhase =
  | "role"
  | "task"
  | "permission"
  | "execution";

export type ConversationalOnboardingPermissionStatus =
  | "not-requested"
  | "pending"
  | "allowed"
  | "denied";

export interface ConversationalOnboardingWorkflowState {
  declinedTasks: ConversationalOnboardingTaskId[];
  phase: ConversationalOnboardingWorkflowPhase;
  selectedRole: string | null;
  selectedTask: ConversationalOnboardingTaskId | null;
  permissionStatus: ConversationalOnboardingPermissionStatus;
}

interface ConversationalOnboardingWorkflowStore {
  get<TValue>(signal: unknown): TValue | null | undefined;
  set<TValue>(signal: unknown, value: TValue): void;
}

export const conversationalOnboardingWorkflowStorageKey =
  "electron:conversational-onboarding-workflow";

export const defaultConversationalOnboardingWorkflowState: ConversationalOnboardingWorkflowState =
  {
    declinedTasks: [],
    phase: "role",
    selectedRole: null,
    selectedTask: null,
    permissionStatus: "not-requested",
  };

export const conversationalOnboardingWorkflowSignal =
  createPersistedSignal<ConversationalOnboardingWorkflowState>(
    conversationalOnboardingWorkflowStorageKey,
    defaultConversationalOnboardingWorkflowState,
  );

export function initConversationalOnboardingWorkflowStateChunk(): void {}

export function getConversationalOnboardingWorkflowState(
  store: ConversationalOnboardingWorkflowStore,
): ConversationalOnboardingWorkflowState {
  return (
    store.get<ConversationalOnboardingWorkflowState>(
      conversationalOnboardingWorkflowSignal,
    ) ??
    getPersistedAtomValue(
      conversationalOnboardingWorkflowStorageKey,
      defaultConversationalOnboardingWorkflowState,
    )
  );
}

export function setConversationalOnboardingPermissionStatus(
  store: ConversationalOnboardingWorkflowStore,
  permissionStatus: ConversationalOnboardingPermissionStatus,
): void {
  store.set(conversationalOnboardingWorkflowSignal, {
    ...getConversationalOnboardingWorkflowState(store),
    permissionStatus,
  });
}

export function selectConversationalOnboardingRole(
  store: ConversationalOnboardingWorkflowStore,
  selectedRole: string,
): void {
  store.set(conversationalOnboardingWorkflowSignal, {
    declinedTasks: [],
    phase: "task",
    selectedRole,
    selectedTask: null,
    permissionStatus: "not-requested",
  });
}

export function selectConversationalOnboardingTask(
  store: ConversationalOnboardingWorkflowStore,
  selectedTask: ConversationalOnboardingTaskId,
): void {
  store.set(conversationalOnboardingWorkflowSignal, {
    ...getConversationalOnboardingWorkflowState(store),
    phase: selectedTask === "csv_chart" ? "execution" : "permission",
    selectedTask,
    permissionStatus:
      selectedTask === "csv_chart" ? "not-requested" : "pending",
  });
}

export function declineConversationalOnboardingTask(
  store: ConversationalOnboardingWorkflowStore,
  declinedTask: ConversationalOnboardingTaskId,
): void {
  const workflowState = getConversationalOnboardingWorkflowState(store);
  store.set(conversationalOnboardingWorkflowSignal, {
    ...workflowState,
    declinedTasks: [...(workflowState.declinedTasks ?? []), declinedTask],
    phase: "task",
    selectedTask: null,
    permissionStatus: "not-requested",
  });
}

export function resetConversationalOnboardingWorkflowState(
  store: ConversationalOnboardingWorkflowStore,
): void {
  store.set(
    conversationalOnboardingWorkflowSignal,
    defaultConversationalOnboardingWorkflowState,
  );
}
