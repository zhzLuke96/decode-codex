// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Low-level accessors, predicates and key builders that the conversation
// activity grouping passes use to inspect units (localConversation domain).
import {
  getMultiAgentToolGroupKey,
  resolveAppForToolCall,
  shouldHideMcpToolCall,
  shouldAutoExpandMcpToolCall,
} from "./tool-activity-runtime";
import {
  continuesLiveActivityBetweenCalls,
  type DynamicToolCallItem,
} from "./tool-activity-descriptors";

const MIN_COLLAPSIBLE_DYNAMIC_TOOL_CALLS = 3;

type AnyUnit = any;

// nat: extract the MCP tool call item from an entry unit, if any.
export function getMcpToolCallItem(unit: AnyUnit): any | null {
  return unit?.kind === "entry" &&
    unit.entry.kind === "item" &&
    unit.entry.item.type === "mcp-tool-call"
    ? unit.entry.item
    : null;
}

// rat: extract the dynamic tool call item from an entry unit, if any.
export function getDynamicToolCallItem(
  unit: AnyUnit,
): DynamicToolCallItem | null {
  return unit?.kind === "entry" &&
    unit.entry.kind === "item" &&
    unit.entry.item.type === "dynamic-tool-call"
    ? unit.entry.item
    : null;
}

// eat: group key for an MCP tool call (multi-agent group, resolved app, or server).
export function getMcpToolCallGroupKey({
  item,
  resolvedApps,
}: {
  item: any;
  resolvedApps: unknown;
}): string {
  const multiAgentGroup = getMultiAgentToolGroupKey({ item });
  if (multiAgentGroup != null) return multiAgentGroup.groupKey;
  if (resolvedApps != null) {
    const app = resolveAppForToolCall({
      apps: resolvedApps,
      functionName: item.functionName,
      serverName: item.invocation.server,
      toolName: item.invocation.tool,
    });
    if (app != null) return `app:${app.id}`;
  }
  return `server:${item.invocation.server}`;
}

// tat: whether an MCP tool call is excluded from pending-call grouping.
export function isMcpToolCallExcludedFromGrouping(
  item: any,
  mcpServerStatuses: unknown,
  shouldAutoExpandMcpApps: boolean,
): boolean {
  if (getMultiAgentToolGroupKey({ item }) != null) return false;
  if (
    item.invocation.server === "computer-use" ||
    shouldHideMcpToolCall({ item, mcpServerStatuses })
  )
    return true;
  return (
    shouldAutoExpandMcpApps &&
    shouldAutoExpandMcpToolCall({ item, mcpServerStatuses })
  );
}

// iat: index immediately after the last assistant message (or 0).
export function findIndexAfterLastAssistantMessage(units: AnyUnit[]): number {
  for (let index = units.length - 1; index >= 0; index -= 1) {
    if (units[index]?.type === "assistant-message") return index + 1;
  }
  return 0;
}

// Qit: whether a unit is a dynamic tool call entry.
export function isDynamicToolCallUnit(unit: AnyUnit): boolean {
  return (
    unit.kind === "entry" &&
    unit.entry.kind === "item" &&
    unit.entry.item.type === "dynamic-tool-call"
  );
}

// Zit: whether a grouped run of units should collapse into a summary.
export function shouldCollapseGroupedUnits(units: AnyUnit[]): boolean {
  const dynamicToolCallCount = units.filter(isDynamicToolCallUnit).length;
  if (dynamicToolCallCount === 0) return true;
  if (dynamicToolCallCount === units.length) return false;
  return units.length > MIN_COLLAPSIBLE_DYNAMIC_TOOL_CALLS;
}

// JG: stable key for a collapsed-activity group derived from its first unit.
export function buildCollapsedActivityKey(
  unit: AnyUnit,
  index: number,
): string {
  if (unit.kind === "collapsed-tool-activity")
    return `collapsed-tool-activity:${unit.key}:${index}`;
  if (unit.kind === "pending-mcp-tool-calls")
    return `pending-mcp-tool-calls:${unit.key}:${index}`;
  if (unit.kind === "dynamic-tool-call-group")
    return `dynamic-tool-call-group:${unit.key}:${index}`;
  if (unit.kind === "multi-agent-group") {
    const first = unit.items[0];
    return `multi-agent-group:${first?.action ?? "unknown"}:${first?.id ?? index}`;
  }
  if (unit.kind === "web-search-group")
    return `web-search-group:${unit.items[0]?.query ?? "unknown"}:${index}`;
  if (unit.entry.kind === "exploration") {
    const first = unit.entry.items[0];
    return `exploration:${
      first?.type === "exec"
        ? first.callId
        : `${first?.type ?? "none"}-${index}`
    }`;
  }
  const item = unit.entry.item;
  return "id" in item && typeof item.id === "string"
    ? `item:${item.type}:${item.id}`
    : "callId" in item && typeof item.callId === "string"
      ? `item:${item.type}:${item.callId}`
      : `item:${item.type}:${index}`;
}

// $it: keep an in-progress web-search group's running count in the summary.
export function adjustCollapsedActivitySummary({
  groupedUnits,
  isCurrentToolActivity,
  summary,
}: {
  groupedUnits: AnyUnit[];
  isCurrentToolActivity: boolean;
  summary: any;
}): any {
  return !isCurrentToolActivity ||
    groupedUnits.at(-1)?.kind !== "web-search-group"
    ? summary
    : { ...summary, runningWebSearchCount: summary.webSearchCount };
}

// kit: whether the latest tool activity is still live for an active slice.
export function hasActiveLiveActivity({
  items,
  isActive,
}: {
  items: DynamicToolCallItem[];
  isActive: boolean;
}): boolean {
  if (!isActive) return false;
  if (items.some((item) => !item.completed)) return true;
  const last = items.at(-1);
  return last != null && continuesLiveActivityBetweenCalls(last);
}

// Ait: whether a run of dynamic tool calls should render as a group.
export function shouldGroupDynamicToolCalls({
  items,
  keepLatestLiveActivityInGroup,
}: {
  items: DynamicToolCallItem[];
  keepLatestLiveActivityInGroup: boolean;
}): boolean {
  const last = items.at(-1);
  return (
    items.length > 1 ||
    (keepLatestLiveActivityInGroup &&
      last != null &&
      continuesLiveActivityBetweenCalls(last))
  );
}
