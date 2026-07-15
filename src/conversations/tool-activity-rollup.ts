// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Top-level pipeline that turns a turn's render entries into grouped activity
// units, plus the predicates that decide whether/how to render and expand the
// resulting tool-activity slice (localConversation domain).
import {
  buildConversationActivityUnits,
  shouldRenderActivityGroup,
} from "./conversation-activity-grouping";
import type {
  ActivityGroup,
  ActivityUnit,
  BuildConversationActivityUnitsOptions,
  ConversationDetailLevel,
} from "./conversation-activity-types";

export { buildConversationActivityUnits };
export type { BuildConversationActivityUnitsOptions };

// Vit: whether a unit kind renders as a collapsed/grouped activity card.
export function isCollapsibleActivityKind(unit: ActivityUnit): boolean {
  return (
    unit.kind === "collapsed-tool-activity" ||
    unit.kind === "pending-mcp-tool-calls" ||
    unit.kind === "dynamic-tool-call-group"
  );
}

// Bit: whether the last unit produced by the pipeline is collapsible.
export function lastConversationActivityUnitIsCollapsible(
  options: BuildConversationActivityUnitsOptions,
): boolean {
  const last = buildConversationActivityUnits(options).at(-1);
  return last != null && isCollapsibleActivityKind(last);
}

// qit: whether any unit holds an unfinished exec command.
export function hasUnfinishedExecActivity(units: ActivityGroup[]): boolean {
  return units.some((unit) =>
    unit.kind !== "entry" ||
    (unit as any).entry.kind !== "item" ||
    (unit as any).entry.item.type !== "exec"
      ? false
      : !(unit as any).entry.item.parsedCmd.isFinished,
  );
}

// Jit: whether any unit holds an MCP tool call.
export function hasMcpToolCallActivity(units: ActivityGroup[]): boolean {
  return units.some(
    (unit) =>
      unit.kind === "entry" &&
      (unit as any).entry.kind === "item" &&
      (unit as any).entry.item.type === "mcp-tool-call",
  );
}

// Yit: count renderable activity items, honoring prose detail-level exclusions.
export function countRenderableActivityItems(
  conversationDetailLevel: ConversationDetailLevel,
  units: ActivityGroup[],
): number {
  return units.reduce((total, unit) => {
    switch (unit.kind) {
      case "entry":
        return (unit as any).entry.kind === "exploration"
          ? total + (unit as any).entry.items.length
          : conversationDetailLevel === "STEPS_PROSE" &&
              ((unit as any).entry.item.type === "automatic-approval-review" ||
                (unit as any).entry.item.type === "exec")
            ? total
            : total + 1;
      case "multi-agent-group":
        return total + (unit as any).items.length;
      case "web-search-group":
        return total + (unit as any).items.length;
      default:
        return total;
    }
  }, 0);
}

// Git: whether a group has renderable content at the given detail level.
export function hasRenderableToolActivity(
  conversationDetailLevel: ConversationDetailLevel,
  units: ActivityGroup[],
): boolean {
  return (
    shouldRenderActivityGroup(conversationDetailLevel, units) &&
    (countRenderableActivityItems(conversationDetailLevel, units) > 0 ||
      hasMcpToolCallActivity(units))
  );
}

export type ShouldExpandCollapsedToolActivityOptions = {
  conversationDetailLevel: ConversationDetailLevel;
  units: ActivityGroup[];
  summary?: { commandCount: number } | null;
  hasSourceSummary?: boolean;
  isActiveToolActivity: boolean;
};

// Kit: whether a collapsed tool-activity card should be expandable.
export function shouldExpandCollapsedToolActivity({
  conversationDetailLevel,
  units,
  summary,
  hasSourceSummary = false,
  isActiveToolActivity,
}: ShouldExpandCollapsedToolActivityOptions): boolean {
  if (
    isActiveToolActivity ||
    hasUnfinishedExecActivity(units) ||
    hasSourceSummary
  )
    return shouldRenderActivityGroup(conversationDetailLevel, units);
  if (
    conversationDetailLevel !== "STEPS_PROSE" &&
    summary != null &&
    summary.commandCount > 1
  )
    return true;
  return hasRenderableToolActivity(conversationDetailLevel, units);
}
