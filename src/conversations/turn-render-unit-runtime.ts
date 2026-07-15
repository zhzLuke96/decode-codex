// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Render-unit helpers for grouped local conversation turns.

import { toToolActivitySummaryUnit } from "./tool-activity-runtime";
import { buildToolActivitySummaries } from "./tool-activity-summary-accumulator";
import { buildCollapsedActivityKey } from "./tool-activity-grouping-helpers";

type AnyRecord = Record<string, any>;

export const codexPreviousTurnExpandedEvent = {
  $type: "protobuf_analytics_events.v1.CodexPreviousTurnExpanded",
};

export const productEventTargets = {
  CODEX_PREVIOUS_TURN_EXPANDED_TARGET_TOOL_CALL: "tool_call",
};

export function resolveTurnRenderUnits({
  entries,
  isActivitySliceClosed,
  mcpServerStatuses,
  resolvedApps,
  shouldAutoExpandMcpApps,
  isTurnCancelled,
}: AnyRecord): AnyRecord[] {
  const rawUnits = (entries ?? []).map(normalizeEntryToRenderUnit);
  const groupedUnits = groupAdjacentActivityUnits(rawUnits);
  const summaryUnits = groupedUnits.map((unit) =>
    toToolActivitySummaryUnit(unit, {
      isTurnCancelled,
      mcpServerStatuses,
      resolvedApps,
      shouldKeepMcpAppToolCallsExpandedByDefault: shouldAutoExpandMcpApps,
    }),
  );
  const summaryRanges = buildToolActivitySummaries({
    units: summaryUnits,
    isActivitySliceClosed: Boolean(isActivitySliceClosed),
  });
  if (summaryRanges.length === 0) return groupedUnits;

  const output: AnyRecord[] = [];
  let cursor = 0;
  for (const range of summaryRanges) {
    while (cursor < range.startIndex) output.push(groupedUnits[cursor++]);
    const units = groupedUnits.slice(range.startIndex, range.endIndex);
    output.push({
      kind: "collapsed-tool-activity",
      key: getRenderUnitKey(units[0] ?? {}, range.startIndex),
      summary: range.summary,
      units,
    });
    cursor = range.endIndex;
  }
  while (cursor < groupedUnits.length) output.push(groupedUnits[cursor++]);
  return output;
}

export function getRenderUnitKey(unit: AnyRecord, index: number): string {
  try {
    return buildCollapsedActivityKey(unit, index);
  } catch {
    return `${unit.kind ?? "unit"}:${index}`;
  }
}

export function shouldShowThinkingFallbackForUnit(unit: AnyRecord): boolean {
  if (unit.kind === "pending-mcp-tool-calls") return true;
  if (unit.kind === "dynamic-tool-call-group") {
    return (unit.items ?? []).some(
      (item: AnyRecord) => item.completed !== true,
    );
  }
  if (unit.kind === "collapsed-tool-activity") {
    return (unit.units ?? []).some(shouldShowThinkingFallbackForUnit);
  }
  const item = unit.entry?.item ?? unit.item;
  return item?.type === "reasoning" || item?.status === "in_progress";
}

export function getTimelineTargetProps(unit: AnyRecord): AnyRecord | null {
  const item = unit.entry?.item ?? unit.item ?? unit.items?.[0];
  const id = item?.id ?? item?.callId;
  return typeof id === "string"
    ? { "data-conversation-timeline-target": id }
    : null;
}

export function canExpandCollapsedActivity({
  conversationDetailLevel,
  units,
  hasSourceSummary,
}: AnyRecord): boolean {
  if (conversationDetailLevel === "STEPS_PROSE" && !hasSourceSummary) {
    return false;
  }
  return Array.isArray(units) && units.length > 0;
}

export function buildToolActivityDetailLines(
  summary: AnyRecord,
  intl: {
    formatMessage?: (descriptor: AnyRecord, values?: AnyRecord) => string;
  },
): string[] {
  const lines: string[] = [];
  pushCountLine(lines, summary.commandCount, "Ran command", "Ran commands");
  pushCountLine(lines, summary.mcpToolCallCount, "Used tool", "Used tools");
  pushCountLine(lines, summary.webSearchCount, "Searched web", "Searched web");
  pushCountLine(
    lines,
    summary.changedLineCount,
    "Changed line",
    "Changed lines",
  );
  return lines.map(
    (line) => intl.formatMessage?.({ id: line, defaultMessage: line }) ?? line,
  );
}

export function resolveCollapsedActivitySourceSummary({
  units,
  resolvedApps,
}: AnyRecord): { sources: AnyRecord[] } | null {
  const sources = new Map<string, AnyRecord>();
  for (const unit of units ?? []) {
    const item = unit.entry?.item ?? unit.item;
    if (item?.type !== "mcp-tool-call") continue;
    const server = item.invocation?.server ?? item.serverName ?? "mcp";
    const app = findResolvedApp(resolvedApps, item);
    const key = app?.id ?? server;
    sources.set(key, {
      key,
      logoUrl: app?.logoUrl,
      logoUrlDark: app?.logoUrlDark,
      name: app?.name ?? server,
    });
  }
  return sources.size === 0 ? null : { sources: [...sources.values()] };
}

export function resolveActiveCommandLabel({
  units,
}: AnyRecord): AnyRecord | null {
  const item = [...(units ?? [])].reverse().map(readUnitItem).find(Boolean);
  if (item == null) return null;
  if (item.type === "patch") {
    const path = Object.keys(item.changes ?? {})[0];
    return {
      activityKey: `patch:${path ?? item.id ?? ""}`,
      icon: "edit-files",
      patchFile: path == null ? null : { path, diffStats: item.diffStats },
      message: {
        id: "localConversation.activeToolActivity.patch",
        defaultMessage: "Editing {detail}",
      },
    };
  }
  if (item.type === "web-search") {
    return activeLabel("web-search", "Searching the web", "web-search");
  }
  if (item.type === "mcp-tool-call") {
    return activeLabel(
      "mcp",
      item.invocation?.tool ?? "Using tool",
      "mcp-tool-call",
    );
  }
  if (item.type === "exec") {
    return activeLabel(
      "exec",
      item.command ?? "Running command",
      "run-command",
    );
  }
  return null;
}

function normalizeEntryToRenderUnit(entry: AnyRecord): AnyRecord {
  if (entry.kind === "entry" || entry.kind?.endsWith?.("-group")) return entry;
  if (entry.kind === "exploration") return { kind: "entry", entry };
  if (entry.kind === "item") return { kind: "entry", entry };
  if (entry.item != null) return { kind: "entry", entry };
  return { kind: "entry", entry: { kind: "item", item: entry } };
}

function groupAdjacentActivityUnits(units: AnyRecord[]): AnyRecord[] {
  const output: AnyRecord[] = [];
  for (const unit of units) {
    const item = readUnitItem(unit);
    const previous = output.at(-1);
    if (item?.type === "dynamic-tool-call") {
      appendGroupedUnit(output, previous, "dynamic-tool-call-group", item);
    } else if (item?.type === "web-search") {
      appendGroupedUnit(output, previous, "web-search-group", item);
    } else if (item?.type === "mcp-tool-call" && item.completed !== true) {
      appendGroupedUnit(output, previous, "pending-mcp-tool-calls", item);
    } else {
      output.push(unit);
    }
  }
  return output;
}

function appendGroupedUnit(
  output: AnyRecord[],
  previous: AnyRecord | undefined,
  kind: string,
  item: AnyRecord,
): void {
  if (previous?.kind === kind) previous.items.push(item);
  else output.push({ kind, key: `${kind}:${output.length}`, items: [item] });
}

function readUnitItem(unit: AnyRecord): AnyRecord | null {
  return unit.entry?.kind === "item" ? unit.entry.item : (unit.item ?? null);
}

function pushCountLine(
  lines: string[],
  count: number | undefined,
  singular: string,
  plural: string,
): void {
  if (!count) return;
  lines.push(`${count} ${count === 1 ? singular : plural}`);
}

function findResolvedApp(
  resolvedApps: unknown,
  item: AnyRecord,
): AnyRecord | null {
  const apps = Array.isArray(resolvedApps) ? resolvedApps : [];
  return (
    apps.find((app: AnyRecord) =>
      [
        item.invocation?.server,
        item.invocation?.tool,
        item.functionName,
      ].includes(app?.id),
    ) ?? null
  );
}

function activeLabel(key: string, text: string, icon: string): AnyRecord {
  return {
    activityKey: key,
    icon,
    message: {
      id: `localConversation.activeToolActivity.${key}`,
      defaultMessage: text,
    },
  };
}
