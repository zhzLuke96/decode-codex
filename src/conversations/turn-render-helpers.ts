// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure helpers used by the local conversation turn renderer.
import { joinThreadFindItemId } from "../runtime/conversation-search-runtime";
import { isConversationItemInProgress } from "./local-conversation-thread-parts/conversation-item-in-progress";

type AnyRecord = Record<string, any>;

export const DEFAULT_RESOLVED_APPS: unknown[] = [];

export function buildToolActivityTurnKey(
  conversationId: string,
  turnKey: string,
): string {
  return `${conversationId}:${turnKey}:tool-activity`;
}

export function buildContentSearchKey(
  turnSearchKey: string,
  itemKey: string,
): string {
  return joinThreadFindItemId(turnSearchKey, itemKey);
}

export function getTurnMessageId(turn: AnyRecord): string | null {
  return (
    stringOrNull(turn.messageId) ??
    stringOrNull(turn.outputMessageId) ??
    stringOrNull(turn.responseMessageId) ??
    stringOrNull(turn.id)
  );
}

export function getTurnInputMessageId(turn: AnyRecord): string | null {
  return (
    stringOrNull(turn.inputMessageId) ??
    stringOrNull(turn.userMessageId) ??
    stringOrNull(turn.input?.messageId) ??
    null
  );
}

export function hasAssistantStarted(
  item: AnyRecord | null | undefined,
): boolean {
  return (
    item != null &&
    (item.completed === true || stringOrNull(item.content) != null)
  );
}

export function isAssistantContentStreaming(
  item: AnyRecord | null | undefined,
): boolean {
  return (
    item?.type === "assistant-message" &&
    item.completed !== true &&
    stringOrNull(item.content) != null
  );
}

export function isAssistantFinalAnswer(
  item: AnyRecord | null | undefined,
): boolean {
  if (item == null) return false;
  return (
    item.phase == null ||
    item.phase === "final_answer" ||
    item.phase === "final"
  );
}

export function summarizeHookRuns(hookRuns: unknown): AnyRecord | null {
  if (!Array.isArray(hookRuns) || hookRuns.length === 0) return null;
  return {
    totalCount: hookRuns.length,
    failedCount: hookRuns.filter(
      (run) => (run as AnyRecord)?.status === "failed",
    ).length,
    runs: hookRuns,
  };
}

export function computeProcessTargets({
  commandExecutionStartedAtMsById,
  conversationId,
  items,
  turnId,
}: {
  commandExecutionStartedAtMsById?: Record<string, number> | null;
  conversationId: string;
  items?: AnyRecord[] | null;
  turnId?: string | null;
}) {
  if (turnId == null) return [];
  return (items ?? [])
    .filter(
      (item) => item?.type === "exec" || item?.type === "commandExecution",
    )
    .map((item) => ({
      conversationId,
      turnId,
      itemId: item.id ?? item.callId ?? item.commandExecutionItemId,
      startedAtMs:
        commandExecutionStartedAtMsById?.[
          item.id ?? item.callId ?? item.commandExecutionItemId
        ] ?? item.startedAtMs,
    }));
}

export const isItemInProgress = isConversationItemInProgress;

export function computeTurnStatusIndicator({
  assistantItem,
  forceThinking,
  hasActiveDynamicToolCallSummary,
  hasActiveWebSearch,
  hasBlockingRequest,
  isAnyNonExploringAgentItemInProgress,
  isExploring,
  isTurnInProgress,
  proposedPlanItem,
}: AnyRecord) {
  if (forceThinking) return { type: "thinking", isVisible: true };
  if (!isTurnInProgress) return { type: "none" };
  if (isExploring) return { type: "exploring" };
  if (isConversationItemInProgress(proposedPlanItem))
    return { type: "planning" };
  if (
    hasBlockingRequest ||
    isAssistantContentStreaming(assistantItem) ||
    hasActiveWebSearch ||
    hasActiveDynamicToolCallSummary
  ) {
    return { type: "none" };
  }
  if (isConversationItemInProgress(assistantItem)) {
    return { type: "thinking", isVisible: true };
  }
  if (isAnyNonExploringAgentItemInProgress) return { type: "none" };
  return { type: "thinking", isVisible: true };
}

export function hasMcpAppActivity(entries: AnyRecord[]): boolean {
  return entries.some((entry) => {
    const item = entry.kind === "item" ? entry.item : entry;
    return item?.type === "mcp-tool-call" || item?.mcpAppResourceUri != null;
  });
}

export function extractWebSearchSources(items: AnyRecord[]): AnyRecord[] {
  return items.flatMap((item) => {
    if (item?.type !== "web-search") return [];
    if (Array.isArray(item.sources)) return item.sources;
    if (Array.isArray(item.results)) return item.results;
    return item.url == null
      ? []
      : [{ url: item.url, title: item.title ?? item.url }];
  });
}

export function collectDynamicToolCallItems(entries: AnyRecord[]): AnyRecord[] {
  return entries.flatMap((entry) => {
    if (entry.kind === "item" && entry.item?.type === "dynamic-tool-call") {
      return [entry.item];
    }
    if (Array.isArray(entry.items)) {
      return entry.items.filter(
        (item: AnyRecord) => item.type === "dynamic-tool-call",
      );
    }
    return [];
  });
}

export function hasActiveDynamicToolCallSummary({
  items,
  keepLatestLiveActivityInGroup,
}: {
  items: AnyRecord[];
  keepLatestLiveActivityInGroup?: boolean;
}): boolean {
  return items.some((item, index) => {
    const isLatest = index === items.length - 1;
    return (
      item.completed !== true &&
      (keepLatestLiveActivityInGroup === true || isLatest)
    );
  });
}

export function isDynamicToolCallSummaryActive({
  isActive,
  items,
}: {
  isActive?: boolean;
  items: AnyRecord[];
}): boolean {
  return isActive === true && items.some((item) => item.completed !== true);
}

export function getFirstNonEmptyEntryIndex(
  entries: AnyRecord[],
): number | null {
  const index = entries.findIndex((entry) => {
    const item = entry.kind === "item" ? entry.item : entry;
    if (item == null) return false;
    if (item.type === "reasoning")
      return String(item.summary ?? item.text ?? "").trim().length > 0;
    if (item.type === "assistant-message" || item.type === "user-message") {
      return String(item.content ?? item.message ?? "").trim().length > 0;
    }
    return true;
  });
  return index < 0 ? null : index;
}

export function shouldShowThinkingFallback({
  entries,
  isTurnCancelled,
}: {
  entries: AnyRecord[];
  isTurnCancelled?: boolean;
}): boolean {
  return (
    !isTurnCancelled &&
    entries.every((entry) => {
      const item = entry.kind === "item" ? entry.item : entry;
      return item?.type === "reasoning" || item?.type === "realtime-transcript";
    })
  );
}

export function openResourceFromAssistant({
  inputMessageId,
  messageId,
  openSource,
  productLogger,
  resourcePath,
  turnId,
  conversationId,
}: AnyRecord): void {
  const extension = resourcePath?.split(".").pop() ?? null;
  productLogger?.logProductEvent?.(
    { $type: "protobuf_analytics_events.v1.CodexAssistantResourceOpened" },
    {
      threadId: conversationId,
      turnId,
      fileExtension: extension,
      openSource,
      messageId: messageId ?? undefined,
      inputMessageId: inputMessageId ?? undefined,
    },
  );
}

function stringOrNull(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}
