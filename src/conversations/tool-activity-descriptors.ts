// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Registry of dynamic tool-activity descriptors (rendering / grouping behavior
// keyed by namespace + tool) for the local conversation activity stream, plus
// the lookup helpers used across the grouping pipeline (localConversation domain).
import {
  codexAppToolNamespace,
  getThreadsForkSummaryPartKey,
  getThreadsReadSummaryPartKey,
  getThreadsListSummaryPartKey,
  threadsForkTool,
  threadsForkInWorktreeTool,
  threadsReadTool,
  threadsListTool,
  threadsCreateTool,
  threadsCreateInWorktreeTool,
  threadsSendMessageTool,
  threadsSetArchivedTool,
  threadsSetPinnedTool,
  threadsSetTitleTool,
  coreToolActivityDescriptors,
  subagentToolActivityDescriptors,
} from "./tool-activity-runtime";

export type DynamicToolCallItem = {
  namespace: string;
  tool: string;
  completed?: boolean;
  callId?: string;
  [key: string]: unknown;
};

export type ToolActivityVariant = "row" | "summary" | "summary-text";

export type ToolActivityDescriptor = {
  namespace: string;
  tool: unknown;
  render?: (item: DynamicToolCallItem, variant: ToolActivityVariant) => unknown;
  getCompletedSummaryPartKey?: (
    item: DynamicToolCallItem,
  ) => string | undefined;
  continuesLiveActivityBetweenCalls?: boolean;
  summaryOnlyInConversationGroup?: boolean;
  standaloneInConversation?: boolean;
};

export const appControlToolActivityDescriptors: ToolActivityDescriptor[] = [
  {
    getCompletedSummaryPartKey: getThreadsForkSummaryPartKey,
    namespace: codexAppToolNamespace,
    tool: threadsForkTool,
  },
  {
    getCompletedSummaryPartKey: getThreadsForkSummaryPartKey,
    namespace: codexAppToolNamespace,
    tool: threadsForkInWorktreeTool,
  },
  {
    getCompletedSummaryPartKey: getThreadsReadSummaryPartKey,
    namespace: codexAppToolNamespace,
    standaloneInConversation: true,
    tool: threadsReadTool,
  },
  {
    getCompletedSummaryPartKey: getThreadsListSummaryPartKey,
    namespace: codexAppToolNamespace,
    summaryOnlyInConversationGroup: true,
    tool: threadsListTool,
  },
  {
    continuesLiveActivityBetweenCalls: true,
    namespace: codexAppToolNamespace,
    tool: threadsCreateTool,
  },
  {
    continuesLiveActivityBetweenCalls: true,
    namespace: codexAppToolNamespace,
    tool: threadsCreateInWorktreeTool,
  },
  {
    namespace: codexAppToolNamespace,
    tool: threadsSendMessageTool,
  },
  {
    namespace: codexAppToolNamespace,
    tool: threadsSetArchivedTool,
  },
  {
    namespace: codexAppToolNamespace,
    tool: threadsSetPinnedTool,
  },
  {
    namespace: codexAppToolNamespace,
    tool: threadsSetTitleTool,
  },
];

// Oit: the full descriptor registry, in lookup priority order.
export const toolActivityDescriptors: ToolActivityDescriptor[] = [
  ...coreToolActivityDescriptors,
  ...appControlToolActivityDescriptors,
  ...subagentToolActivityDescriptors,
];

// WG: find the descriptor matching an item's namespace + tool.
export function findToolActivityDescriptor(
  item: DynamicToolCallItem,
): ToolActivityDescriptor | undefined {
  return toolActivityDescriptors.find(
    (descriptor) =>
      descriptor.namespace === item.namespace && descriptor.tool === item.tool,
  );
}

// Tit: whether the tool keeps a single live activity across repeated calls.
export function continuesLiveActivityBetweenCalls(
  item: DynamicToolCallItem,
): boolean {
  return (
    findToolActivityDescriptor(item)?.continuesLiveActivityBetweenCalls === true
  );
}

// Eit: whether the tool only contributes a summary line within a group.
export function isSummaryOnlyInConversationGroup(
  item: DynamicToolCallItem,
): boolean {
  return (
    findToolActivityDescriptor(item)?.summaryOnlyInConversationGroup === true
  );
}

// Dit: build the dedupe key for a completed dynamic tool call summary.
export function buildCompletedSummaryPartKey(
  item: DynamicToolCallItem,
): string {
  const part =
    findToolActivityDescriptor(item)?.getCompletedSummaryPartKey?.(item);
  return `${item.namespace}:${item.tool}:${part ?? ""}`;
}
