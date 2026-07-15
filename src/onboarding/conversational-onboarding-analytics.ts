// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Product-analytics emitters for the Electron conversational-onboarding flow:
// lifecycle, app-access, task-execution, role-selection and task-selection
// events. (The "access denied" emitter lives in
// ./conversational-onboarding-access-analytics.)
import { logProductEvent } from "../analytics/product-logger";
import type { ProductLoggerScope } from "../analytics/product-logger";
// Generated protobuf enums + event descriptors for conversational-onboarding
// analytics (aliases `Gn`, `Hu`, `gr`, `Qi`, `Ta`, `Tr`, `pi`, `Xc`, `yee`,
// `eo`, `pa`, `sa`, `Ir` in the source chunk). These live in a generated module
// owned by a sibling chunk that has not been restored yet; imported here by role.
import {
  ConversationalOnboardingLifecycleAction,
  ConversationalOnboardingAccessAction,
  ConversationalOnboardingExecutionAction,
  ConversationalOnboardingRoleAction,
  ConversationalOnboardingTaskAction,
  ConversationalOnboardingFailureKind,
  conversationalOnboardingLifecycleEvent,
  conversationalOnboardingAccessEvent,
  conversationalOnboardingExecutionEvent,
  conversationalOnboardingRoleEvent,
  conversationalOnboardingTaskEvent,
} from "./conversational-onboarding-product-events";
import {
  mapConversationalOnboardingAccessType,
  mapConversationalOnboardingTaskType,
} from "./conversational-onboarding-analytics-mappers";
import type { ConversationalOnboardingTaskId } from "./conversational-onboarding-task-registry";

type ConversationalOnboardingRoleType = string;

export function initConversationalOnboardingAnalyticsChunk(): void {}

// --- Lifecycle ---------------------------------------------------------------

export function trackConversationalOnboardingLifecycleStarted(
  scope: ProductLoggerScope,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.STARTED,
    scope,
  });
}

export function trackConversationalOnboardingLifecycleCompleted(
  scope: ProductLoggerScope,
  selectedTask?: ConversationalOnboardingTaskId | null,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.COMPLETED,
    scope,
    selectedTask,
  });
}

export function trackConversationalOnboardingLifecycleSkipped(
  scope: ProductLoggerScope,
  selectedTask?: ConversationalOnboardingTaskId | null,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.SKIPPED,
    scope,
    selectedTask,
  });
}

function trackConversationalOnboardingLifecycleStartFailed(
  scope: ProductLoggerScope,
  selectedTask?: ConversationalOnboardingTaskId | null,
): void {
  emitLifecycleEvent({
    action: ConversationalOnboardingLifecycleAction.FAILED,
    failureKind: ConversationalOnboardingFailureKind.START_FAILED,
    scope,
    selectedTask,
  });
}

function emitLifecycleEvent({
  action,
  failureKind,
  scope,
  selectedTask,
}: {
  action: unknown;
  failureKind?: unknown;
  scope: ProductLoggerScope;
  selectedTask?: ConversationalOnboardingTaskId | null;
}): void {
  logProductEvent(scope, conversationalOnboardingLifecycleEvent, {
    action,
    failureKind,
    taskType:
      selectedTask == null
        ? undefined
        : mapConversationalOnboardingTaskType(selectedTask),
  });
}

// --- App access --------------------------------------------------------------

function trackConversationalOnboardingAccessStarted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessEvent({
    accessType: mapConversationalOnboardingAccessType(task),
    action: ConversationalOnboardingAccessAction.STARTED,
    scope,
    task,
  });
}

function trackConversationalOnboardingAccessRequested(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessEvent({
    accessType: mapConversationalOnboardingAccessType(task),
    action: ConversationalOnboardingAccessAction.REQUESTED,
    scope,
    task,
  });
}

function trackConversationalOnboardingAccessCompleted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessEvent({
    accessType: mapConversationalOnboardingAccessType(task),
    action: ConversationalOnboardingAccessAction.COMPLETED,
    scope,
    task,
  });
}

function trackConversationalOnboardingAccessHostServiceUnavailable(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessFailure(
    scope,
    task,
    ConversationalOnboardingFailureKind.HOST_SERVICE_UNAVAILABLE,
  );
}

function trackConversationalOnboardingAccessPluginUnavailable(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitAccessFailure(
    scope,
    task,
    ConversationalOnboardingFailureKind.PLUGIN_UNAVAILABLE,
  );
}

function emitAccessFailure(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
  failureKind: unknown,
): void {
  emitAccessEvent({
    accessType: mapConversationalOnboardingAccessType(task),
    action: ConversationalOnboardingAccessAction.FAILED,
    failureKind,
    scope,
    task,
  });
}

function emitAccessEvent({
  accessType,
  action,
  failureKind,
  scope,
  task,
}: {
  accessType: unknown;
  action: unknown;
  failureKind?: unknown;
  scope: ProductLoggerScope;
  task: ConversationalOnboardingTaskId;
}): void {
  logProductEvent(scope, conversationalOnboardingAccessEvent, {
    accessType,
    action,
    failureKind,
    taskType: mapConversationalOnboardingTaskType(task),
  });
}

// --- Task execution ----------------------------------------------------------

function trackConversationalOnboardingExecutionStarted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.STARTED,
    scope,
    task,
  });
}

export function trackConversationalOnboardingExecutionCompleted(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.COMPLETED,
    scope,
    task,
  });
}

function trackConversationalOnboardingExecutionStartFailed(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.FAILED,
    failureKind: ConversationalOnboardingFailureKind.START_FAILED,
    scope,
    task,
  });
}

export function trackConversationalOnboardingExecutionCompletionMissing(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.FAILED,
    failureKind: ConversationalOnboardingFailureKind.COMPLETION_MISSING,
    scope,
    task,
  });
}

export function trackConversationalOnboardingExecutionCancelled(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  emitExecutionEvent({
    action: ConversationalOnboardingExecutionAction.CANCELLED,
    scope,
    task,
  });
}

function emitExecutionEvent({
  action,
  failureKind,
  scope,
  task,
}: {
  action: unknown;
  failureKind?: unknown;
  scope: ProductLoggerScope;
  task: ConversationalOnboardingTaskId;
}): void {
  logProductEvent(scope, conversationalOnboardingExecutionEvent, {
    action,
    failureKind,
    taskType: mapConversationalOnboardingTaskType(task),
  });
}

// --- Role / task selection ---------------------------------------------------

export function trackConversationalOnboardingRoleSelected(
  scope: ProductLoggerScope,
  roleType: ConversationalOnboardingRoleType,
): void {
  logProductEvent(scope, conversationalOnboardingRoleEvent, {
    action: ConversationalOnboardingRoleAction.SELECTED,
    roleType,
  });
}

export function trackConversationalOnboardingTaskSelected(
  scope: ProductLoggerScope,
  task: ConversationalOnboardingTaskId,
): void {
  logProductEvent(scope, conversationalOnboardingTaskEvent, {
    action: ConversationalOnboardingTaskAction.SELECTED,
    taskType: mapConversationalOnboardingTaskType(task),
  });
}
