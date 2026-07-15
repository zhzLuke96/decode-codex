// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Predicate determining whether a local conversation timeline item is still in progress.

type ExecOutput = { exitCode?: number };

export type ConversationTimelineItem =
  | { type: "user-message" }
  | { type: "realtime-transcript" }
  | { type: "turn-diff" }
  | { type: "system-error" }
  | { type: "stream-error" }
  | { type: "steered" }
  | { type: "remote-task-created" }
  | { type: "personality-changed" }
  | { type: "forked-from-conversation" }
  | { type: "model-changed" }
  | { type: "model-rerouted" }
  | { type: "auto-review-interruption-warning" }
  | { type: "automation-update" }
  | { type: "plan-implementation" }
  | { type: "worked-for" }
  | { type: "generated-image" }
  | { type: "worktree-init" }
  | { type: "subagent-activity" }
  | { type: "context-compaction"; completed: boolean }
  | { type: "assistant-message"; completed: boolean }
  | { type: "proposed-plan"; completed: boolean }
  | { type: "reasoning"; completed: boolean }
  | { type: "exec"; output?: ExecOutput | null }
  | { type: "patch"; success?: boolean | null }
  | { type: "mcp-tool-call"; completed: boolean }
  | { type: "dynamic-tool-call"; completed: boolean }
  | { type: "automatic-approval-review"; status: string }
  | { type: "multi-agent-action"; status: string }
  | { type: "web-search"; completed: boolean }
  | { type: "todo-list"; plan: Array<{ status: string }> }
  | { type: "userInput"; completed: boolean }
  | { type: "user-input-response"; completed: boolean }
  | { type: "mcp-server-elicitation"; completed: boolean }
  | { type: "permission-request"; completed: boolean };

export function isConversationItemInProgress(
  item: ConversationTimelineItem | null | undefined,
): boolean {
  if (!item) return false;
  switch (item.type) {
    case "user-message":
    case "realtime-transcript":
    case "turn-diff":
    case "system-error":
    case "stream-error":
    case "steered":
    case "remote-task-created":
    case "personality-changed":
    case "forked-from-conversation":
    case "model-changed":
    case "model-rerouted":
    case "auto-review-interruption-warning":
    case "automation-update":
    case "plan-implementation":
    case "worked-for":
    case "generated-image":
    case "worktree-init":
    case "subagent-activity":
      return false;
    case "context-compaction":
      return !item.completed;
    case "assistant-message":
    case "proposed-plan":
    case "reasoning":
      return !item.completed;
    case "exec":
      return item.output?.exitCode === undefined;
    case "patch":
      return item.success == null;
    case "mcp-tool-call":
    case "dynamic-tool-call":
      return !item.completed;
    case "automatic-approval-review":
      return item.status === "inProgress";
    case "multi-agent-action":
      return item.status === "inProgress";
    case "web-search":
      return !item.completed;
    case "todo-list":
      return item.plan.some((entry) => entry.status !== "completed");
    case "userInput":
      return !item.completed;
    case "user-input-response":
    case "mcp-server-elicitation":
    case "permission-request":
      return !item.completed;
    default:
      return undefined as never;
  }
}

export function initConversationItemProgressRuntimeChunk(): void {}
