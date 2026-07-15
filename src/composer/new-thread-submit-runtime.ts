// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Leaf runtime for new-thread submit/start handlers.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { createParametricAtom } from "../runtime/onboarding-scope-runtime";
import { appLogger } from "../runtime/app-logger";
import { setThreadGoal } from "../threads/pending-worktree-store/thread-goal";

type ConversationContext = {
  attachments?: unknown[];
  cwd?: string | null;
  imageAttachments?: unknown[];
  input?: unknown;
  pastedTextAttachments?: unknown[];
  prompt?: string | null;
  selectedTextAttachments?: unknown[];
  workspaceRoots?: string[];
  [key: string]: unknown;
};
type ConversationParamsInput = {
  agentMode?: unknown;
  collaborationMode?: unknown;
  context: ConversationContext;
  cwd: string | null;
  hostId: string;
  memoryPreferences?: unknown;
  permissionProfileId?: unknown;
  projectAssignment?: unknown;
  projectlessOutputDirectory?: string | null;
  prompt: string;
  serviceTier?: unknown;
  workspaceKind?: string;
  workspaceRoots: string[];
};
type ServiceTierModeInput = {
  activeCollaborationMode: unknown;
  serviceTier: unknown;
};

export const browserSidebarAvailabilitySignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const memoryPreferencesDraftAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const newThreadFirstRunCompletedSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const newThreadFirstRunStartedSignal = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const localConversationTurnsSignal = appScopeUnderscore(
  appScopeRoot,
  () => [],
);
export const localConversationWorkspaceKindSignal = appScopeUnderscore(
  appScopeRoot,
  () => "project",
);
export const projectContextQuerySignal = appScopeUnderscore(
  appScopeRoot,
  () => ({
    refetch: async () => ({ data: null }),
  }),
);
export const experimentalFeaturesQuery = createParametricAtom(
  appScopeRoot,
  () => ({ data: [] }),
);

export function isPreparePrimaryRuntimeEnabled(features: unknown): boolean {
  return (
    Array.isArray(features) &&
    features.some(
      (feature) =>
        feature != null &&
        typeof feature === "object" &&
        (feature as { name?: unknown }).name === "prepare-primary-runtime" &&
        (feature as { enabled?: unknown }).enabled === true,
    )
  );
}

export function isProjectlessWorkspaceRoots(workspaceRoots: string[]): boolean {
  return (
    workspaceRoots.length === 0 ||
    (workspaceRoots.length === 1 && workspaceRoots[0] === "~")
  );
}

export function promptTextFromContext(context: ConversationContext): string {
  if (typeof context.prompt === "string") return context.prompt;
  if (typeof context.input === "string") return context.input;
  if (
    context.input != null &&
    typeof context.input === "object" &&
    typeof (context.input as { text?: unknown }).text === "string"
  ) {
    return String((context.input as { text: string }).text);
  }
  return "";
}

export function promptTextFromObjective(objective: unknown): string {
  if (typeof objective === "string") return objective;
  if (objective != null && typeof objective === "object") {
    const record = objective as Record<string, unknown>;
    if (typeof record.text === "string") return record.text;
    if (typeof record.title === "string") return record.title;
    if (typeof record.objective === "string") return record.objective;
  }
  return objective == null ? "" : String(objective);
}

export async function buildConversationParamsFromContext({
  context,
  prompt,
  workspaceRoots,
  cwd,
  hostId,
  agentMode,
  permissionProfileId,
  serviceTier,
  collaborationMode,
  memoryPreferences,
  workspaceKind,
  projectlessOutputDirectory,
  projectAssignment,
}: ConversationParamsInput): Promise<Record<string, unknown>> {
  return {
    agentMode,
    attachments: [
      ...(context.attachments ?? []),
      ...(context.pastedTextAttachments ?? []),
      ...(context.selectedTextAttachments ?? []),
    ],
    collaborationMode,
    config: { memoryPreferences },
    cwd,
    hostId,
    input: toUserMessageInput(prompt),
    permissionProfileId,
    projectAssignment,
    projectlessOutputDirectory,
    prompt,
    serviceTier,
    workspaceKind,
    workspaceRoots,
  };
}

export function buildRestoreMessageFromContext({
  context,
  cwd,
}: {
  context: ConversationContext;
  cwd: string;
}): Record<string, unknown> {
  return {
    ...toUserMessageInput(promptTextFromContext(context)),
    cwd,
  };
}

export function toUserMessageInput(prompt: string): Record<string, unknown> {
  return {
    role: "user",
    content: [{ type: "input_text", text: prompt }],
  };
}

export async function resolveServiceTierAndCollaborationMode({
  activeCollaborationMode,
  serviceTier,
}: ServiceTierModeInput): Promise<{
  collaborationMode: unknown;
  serviceTier: unknown;
}> {
  return {
    collaborationMode: activeCollaborationMode,
    serviceTier,
  };
}

export async function reserveProjectWorkspaceForFirstTurn({
  projectId,
}: {
  projectId: string;
  prompt: string;
}): Promise<{
  cwd: string;
  projectAssignment: Record<string, unknown>;
  projectlessOutputDirectory: null;
  workspaceRoots: string[];
}> {
  return {
    cwd: projectId,
    projectAssignment: {
      path: projectId,
      projectId,
      projectKind: "local",
    },
    projectlessOutputDirectory: null,
    workspaceRoots: [projectId],
  };
}

export function getTaskErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Unable to start task";
}

export function recordNewThreadSubmitAnalytics(
  _store: unknown,
  conversationId: string,
  hostId: string,
): void {
  appLogger.info("New thread submitted", {
    safe: { conversationId, hostId },
    sensitive: {},
  });
}

export async function updateConversationProjectContext(): Promise<void> {}

export async function attachThreadGoalObjectiveToConversation({
  scope,
  appendTranscriptItem,
  conversationId,
  hostId,
  intl,
  objective,
}: {
  appendTranscriptItem: boolean;
  conversationId: string;
  hostId: string;
  intl: unknown;
  objective: unknown;
  scope: unknown;
}): Promise<boolean> {
  return setThreadGoal({
    appendTranscriptItem,
    conversationId,
    hostId,
    intl: intl as never,
    objective,
    scope: scope as never,
  });
}

export async function commitThreadGoalDraft(): Promise<void> {}
