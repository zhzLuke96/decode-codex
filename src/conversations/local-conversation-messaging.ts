// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
import {
  startComposerTurn,
  sendRestoreMessage,
  type StartComposerTurnArgs,
  type SendRestoreMessageArgs,
} from "../composer/start-composer-turn";
import type {
  PriorConversation,
  PriorConversationMessage,
} from "../composer/prior-conversation";
import {
  createKeyedAtomFamily,
  appScopeAtom,
  generateId,
  conversationTurnsAtom,
} from "../boundaries/onboarding-commons-externals.facade";

// Keyed atom storing per-conversation prefill messages (side-chat prefill atom)
const composerPrefillMessagesAtom = (
  createKeyedAtomFamily as (scope: unknown, init: () => unknown[]) => unknown
)(appScopeAtom, () => []);

interface PrefillMessage {
  id: string;
  text: string;
}

interface AppScope {
  get(atom: unknown, key?: unknown): any;
  set(atom: unknown, key: unknown, updater: unknown): void;
}

interface CloudTaskInput {
  type?: string;
  content?: Array<{ content_type: string; text?: string }>;
}

interface CloudTaskTurn {
  input_items?: CloudTaskInput[];
  output_items?: Array<{
    type?: string;
    content?: Array<{ content_type: string; text?: string }>;
  }>;
}

interface CloudTaskDetails {
  current_user_turn?: CloudTaskTurn;
  current_assistant_turn?: CloudTaskTurn;
  current_diff_task_turn?: {
    output_items?: Array<{ type: string; diff?: string }>;
  };
}

/** Matches StartComposerTurnArgs without permissionProfileId (callers provide it via scope). */
export type SendMessageToLocalConversationArgs = Omit<
  StartComposerTurnArgs,
  "permissionProfileId"
>;

/** Matches SendRestoreMessageArgs without permissionProfileId. */
export type SteerLocalConversationArgs = Omit<
  SendRestoreMessageArgs,
  "permissionProfileId"
>;

export function sendMessageToLocalConversation(
  args: SendMessageToLocalConversationArgs,
): Promise<string> {
  return startComposerTurn({ ...args, permissionProfileId: null });
}

export function steerLocalConversation(
  args: SteerLocalConversationArgs,
): Promise<string> {
  return sendRestoreMessage({ ...args, permissionProfileId: null });
}

/** Appends a prefill text entry to the side-chat prompt atom for the given conversation. */
export function appendUserMessageToConversation(
  scope: AppScope,
  conversationId: string,
  text: string,
): void {
  const trimmed = text.trim();
  if (trimmed.length === 0) return;
  scope.set(
    composerPrefillMessagesAtom,
    conversationId,
    (prev: PrefillMessage[]) => [
      ...prev,
      { id: generateId() as string, text: trimmed },
    ],
  );
}

/** Extracts a PriorConversation transcript from a cloud task's turn data. */
export function buildPriorConversationFromTask(
  taskDetails: CloudTaskDetails,
): PriorConversation {
  const flatTextContent = (
    items:
      | Array<{
          type?: string;
          content?: Array<{ content_type: string; text?: string }>;
        }>
      | undefined,
  ): PriorConversationMessage["content"] =>
    (items ?? [])
      .flatMap((item) => (item.type === "message" ? (item.content ?? []) : []))
      .filter(
        (c) => c.content_type === "text",
      ) as PriorConversationMessage["content"];

  const userContent = flatTextContent(
    taskDetails.current_user_turn
      ?.input_items as typeof taskDetails.current_assistant_turn.output_items,
  );
  const assistantContent = flatTextContent(
    taskDetails.current_assistant_turn?.output_items,
  );

  const conversation: PriorConversationMessage[] = [];
  if (userContent.length > 0)
    conversation.push({ role: "user", content: userContent });
  if (assistantContent.length > 0)
    conversation.push({ role: "assistant", content: assistantContent });

  const diffItem = taskDetails.current_diff_task_turn?.output_items?.find(
    (item) => item.type === "output_diff",
  ) as { type: "output_diff"; diff?: string } | undefined;

  return {
    conversation,
    diff:
      diffItem != null
        ? { type: "output_diff", diff: diffItem.diff ?? "" }
        : null,
  };
}

interface SubmitContext {
  prompt?: unknown;
  collaborationMode?: unknown;
  cwd?: string;
  [key: string]: unknown;
}

interface ConversationManager {
  getHostId(): string;
  requestClient: unknown;
}

export interface SubmitFollowUpApprovalDeps {
  scope: AppScope;
  manager: ConversationManager;
  hostId: string;
  agentMode: unknown;
  serviceTier: unknown;
  shouldSendPermissionOverrides: boolean;
  activeCollaborationMode: unknown;
  cwd: string;
  buildContext: (
    prompt: unknown,
    mode: unknown,
    conversationId: string,
  ) => Promise<SubmitContext>;
}

/**
 * Submits a follow-up approval for a specific conversation: builds the send
 * context, optionally resumes the conversation, then steers or starts a turn.
 */
export async function submitFollowUpApproval(
  conversationId: string,
  prompt: unknown,
  mode: unknown,
  deps: SubmitFollowUpApprovalDeps,
): Promise<void> {
  const context = await deps.buildContext(prompt, mode, conversationId);
  const turns: any[] =
    deps.scope.get(conversationTurnsAtom, conversationId) ?? [];
  const inProgress = turns.at(-1)?.status === "inProgress";

  if (inProgress) {
    await steerLocalConversation({
      scope: deps.scope,
      manager: deps.manager,
      hostId: deps.hostId,
      targetConversationId: conversationId,
      agentMode: deps.agentMode,
      serviceTier: deps.serviceTier,
      shouldSendPermissionOverrides: deps.shouldSendPermissionOverrides,
      activeCollaborationMode: deps.activeCollaborationMode,
      restoreMessage: { cwd: deps.cwd, context },
    });
  } else {
    await sendMessageToLocalConversation({
      scope: deps.scope,
      manager: deps.manager,
      hostId: deps.hostId,
      context,
      targetConversationId: conversationId,
      cwd: deps.cwd,
      agentMode: deps.agentMode,
      serviceTier: deps.serviceTier,
      shouldSendPermissionOverrides: deps.shouldSendPermissionOverrides,
      activeCollaborationMode: deps.activeCollaborationMode,
    });
  }
}

export interface SubmitLocalApprovalDeps {
  onSubmitLocal: (context: SubmitContext, cwd: string) => Promise<void>;
  buildContext: (prompt: unknown, mode: unknown) => Promise<SubmitContext>;
  cwd: string;
}

/** Submits a local approval by building context and calling the host submit handler. */
export async function submitLocalApproval(
  prompt: unknown,
  mode: unknown,
  deps: SubmitLocalApprovalDeps,
): Promise<void> {
  const context = await deps.buildContext(prompt, mode);
  await deps.onSubmitLocal(context, deps.cwd);
}
