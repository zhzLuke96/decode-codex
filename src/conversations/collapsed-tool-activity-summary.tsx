// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the collapsed summary line for a run of grouped tool activity: picks a
// leading icon, builds the localized summary text (with optional shimmer + added
// line count), and wires it into the collapsible disclosure (localConversation domain).
import type { ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { ThinkingShimmer } from "../ui/thinking-shimmer";
import {
  AnimatedNumber,
  ToolActivityIcon,
} from "../boundaries/onboarding-commons-externals.facade";
import { CollapsibleActivitySummary } from "./collapsible-activity-summary";
import {
  ToolActivitySourceIcon,
  type ToolActivitySource,
} from "./tool-activity-source-icon";
import {
  buildToolActivitySummaryText,
  buildAddedLinesText,
} from "./tool-activity-summary-text";
import type { ToolActivitySummary } from "./tool-activity-summary-accumulator";

type CollapsedActivitySourceSummary = {
  sources: ToolActivitySource[];
};

type CollapsedToolActivitySummaryProps = {
  summary: ToolActivitySummary;
  activeSummary?: ReactNode | null;
  activeSummaryKey?: string | null;
  icon?: string | null;
  sourceSummary?: CollapsedActivitySourceSummary | null;
  isTurnInProgress?: boolean;
  showRunningCommandSummary?: boolean;
  shouldAnimateSummaryChanges?: boolean;
  showFileChangeLineCount?: boolean;
  canExpand?: boolean;
  onExpand?: () => void;
  children?: ReactNode;
};

// Dat: whether the summary reflects any web-search activity.
function hasWebSearchSummary(summary: ToolActivitySummary): boolean {
  return (
    summary.webSearchCount > 0 ||
    summary.runningWebSearchCount > 0 ||
    summary.completedWebSearchCommandCount > 0 ||
    summary.runningWebSearchCommandCount > 0
  );
}

// Oat: whether the summary reflects any exploration (read/search/list) activity.
function hasExplorationSummary(summary: ToolActivitySummary): boolean {
  return (
    summary.exploredFileCount > 0 ||
    summary.runningExploredFileCount > 0 ||
    summary.searchCount > 0 ||
    summary.runningSearchCount > 0 ||
    summary.listCount > 0 ||
    summary.runningListCount > 0
  );
}

// kat: choose the icon name for exploration activity.
function resolveExplorationIconName(summary: ToolActivitySummary): string {
  return summary.searchCount > 0 || summary.runningSearchCount > 0
    ? "code-searching"
    : summary.listCount > 0 || summary.runningListCount > 0
      ? "list-files"
      : "run-command";
}

// Aat: whether the summary reflects any file change activity.
function hasFileChangeSummary(summary: ToolActivitySummary): boolean {
  return (
    summary.createdFileCount > 0 ||
    summary.runningCreatedFileCount > 0 ||
    summary.editedFileCount > 0 ||
    summary.runningEditedFileCount > 0 ||
    summary.deletedFileCount > 0 ||
    summary.runningDeletedFileCount > 0 ||
    summary.stoppedCreatedFileCount > 0
  );
}

// jat: whether the summary reflects any non-web-search shell command activity.
function hasCommandSummary(summary: ToolActivitySummary): boolean {
  const completedCommands =
    summary.commandCount -
    summary.completedWebSearchCommandCount -
    summary.runningWebSearchCommandCount;
  const runningCommands =
    summary.runningCommandCount -
    summary.runningWebSearchCommandCount -
    summary.runningFolderCreationCommandCount;
  return completedCommands > 0 || runningCommands > 0;
}

// Cat: pick the leading icon for a tool-activity summary.
function resolveActivitySummaryIcon(
  summary: ToolActivitySummary,
  icon: string | null | undefined,
): ReactNode {
  if (icon != null) return <ToolActivityIcon icon={icon} />;
  if (hasWebSearchSummary(summary))
    return <ToolActivityIcon icon="web-search" />;
  if (hasExplorationSummary(summary))
    return <ToolActivityIcon icon={resolveExplorationIconName(summary)} />;
  if (hasFileChangeSummary(summary))
    return <ToolActivityIcon icon="edit-files" />;
  if (hasCommandSummary(summary))
    return <ToolActivityIcon icon="run-command" />;
  const firstSource = summary.mcpToolCallSources[0];
  return firstSource == null ? null : (
    <ToolActivitySourceIcon source={firstSource} />
  );
}

// wat: icon for a source-only summary.
function resolveSourceSummaryIcon(sources: ToolActivitySource[]): ReactNode {
  const firstSource = sources[0];
  return firstSource == null ? null : (
    <ToolActivitySourceIcon source={firstSource} />
  );
}

// vat: a source's display name.
function getSourceName(source: ToolActivitySource): string {
  return source.name ?? "";
}

// bat: stable key for a source-only summary.
function buildSourceSummaryKey(
  sourceSummary: CollapsedActivitySourceSummary,
): string {
  return `sources:${sourceSummary.sources.map((source) => source.key).join("|")}`;
}

// xat: stable key for a completed activity summary.
function buildCompletedSummaryKey(summary: ToolActivitySummary): string {
  return [
    "completed",
    summary.createdFileCount,
    summary.stoppedCreatedFileCount,
    summary.changedLineCount,
    summary.editedFileCount,
    summary.deletedFileCount,
    summary.exploredFileCount,
    summary.loadedToolCount,
    summary.searchCount,
    summary.listCount,
    summary.deniedRequestCount,
    summary.timedOutRequestCount,
    summary.commandCount,
    summary.completedWebSearchCommandCount,
    (summary as any).visualizationActivity?.kind,
    (summary as any).visualizationActivity?.isInProgress,
    summary.mcpToolCallCount,
    summary.webSearchCount,
    summary.mcpToolCallSources
      .map((source: any) => `${source.key}:${source.count}`)
      .join(","),
  ].join(":");
}

// Sat: wrap a summary node with an optional leading icon.
function ActivitySummaryWithIcon({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  if (icon == null) return <>{children}</>;
  return (
    <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 overflow-hidden">
      {icon}
      <span className="min-w-0 flex-1 truncate">{children}</span>
    </span>
  );
}

// yat: optionally apply the shimmer treatment to the summary text.
function renderShimmeringSummary({
  runningCreatedLineText,
  shouldShimmer,
  summaryText,
}: {
  runningCreatedLineText: string | null;
  shouldShimmer: boolean;
  summaryText: string;
}): ReactNode {
  if (!shouldShimmer) return summaryText;
  if (runningCreatedLineText == null)
    return <ThinkingShimmer>{summaryText}</ThinkingShimmer>;

  const lineSegment = ` • ${runningCreatedLineText}`;
  const segmentIndex = summaryText.indexOf(lineSegment);
  if (segmentIndex === -1)
    return <ThinkingShimmer>{summaryText}</ThinkingShimmer>;

  const before = summaryText.slice(0, segmentIndex);
  const after = summaryText.slice(segmentIndex + lineSegment.length);
  return (
    <>
      {before.length > 0 ? <ThinkingShimmer>{before}</ThinkingShimmer> : null}
      <span>{lineSegment}</span>
      {after.length > 0 ? <ThinkingShimmer>{after}</ThinkingShimmer> : null}
    </>
  );
}

// _at: the collapsed tool-activity summary disclosure.
function CollapsedToolActivitySummary({
  summary,
  activeSummary,
  activeSummaryKey,
  icon,
  sourceSummary,
  isTurnInProgress,
  showRunningCommandSummary,
  shouldAnimateSummaryChanges = false,
  showFileChangeLineCount,
  canExpand,
  onExpand,
  children,
}: CollapsedToolActivitySummaryProps) {
  const intl = useIntl();
  let summaryNode: ReactNode;
  let summaryKey: string | null | undefined;
  let summaryTransition: "static" | "immediate" | "deferred" = "static";

  if (activeSummary != null) {
    summaryNode = activeSummary;
    summaryKey = activeSummaryKey;
    summaryTransition = shouldAnimateSummaryChanges ? "deferred" : "static";
  } else if (sourceSummary != null) {
    const sourceIcon = resolveSourceSummaryIcon(sourceSummary.sources);
    const sources = intl.formatList(sourceSummary.sources.map(getSourceName), {
      type: "conjunction",
    });
    summaryNode = (
      <ActivitySummaryWithIcon icon={sourceIcon}>
        <FormattedMessage
          id="localConversation.toolActivitySummary.usedSources"
          defaultMessage="Used {sources} {sourceCount, plural, one {integration} other {integrations}}"
          description="Collapsed summary for a group of tool activity that only read connector skills"
          values={{ sources, sourceCount: sourceSummary.sources.length }}
        />
      </ActivitySummaryWithIcon>
    );
    summaryKey = buildSourceSummaryKey(sourceSummary);
    summaryTransition = shouldAnimateSummaryChanges ? "immediate" : "static";
  } else {
    const hasRunningActivity =
      summary.runningCreatedFileCount > 0 ||
      summary.runningEditedFileCount > 0 ||
      summary.runningDeletedFileCount > 0 ||
      summary.runningExploredFileCount > 0 ||
      summary.runningLoadedToolCount > 0 ||
      summary.runningSearchCount > 0 ||
      summary.runningListCount > 0 ||
      summary.runningWebSearchCount > 0;
    const hasRunningWebSearch = summary.runningWebSearchCount > 0;
    const hasRunningCommand =
      showRunningCommandSummary === true && summary.runningCommandCount > 0;
    const summaryIcon = resolveActivitySummaryIcon(summary, icon);
    const showLineCount =
      showFileChangeLineCount && hasFileChangeSummary(summary);

    const summaryText = buildToolActivitySummaryText(summary, intl, {
      showRunningCommandSummary,
      isWebSearchInProgress: hasRunningWebSearch,
      showRunningCreatedLineCount: !showLineCount,
    });
    const shimmeringSummary = renderShimmeringSummary({
      runningCreatedLineText: showLineCount
        ? null
        : buildAddedLinesText(summary, intl),
      shouldShimmer: hasRunningActivity || hasRunningCommand,
      summaryText,
    });

    const changedLines = showLineCount ? (
      <FormattedMessage
        id="localConversation.toolActivitySummary.changedLines"
        defaultMessage=" • {lineCount} {count, plural, one {line} other {lines}}"
        description="Total number of added and removed lines shown after a consolidated file activity summary"
        values={{
          count: summary.changedLineCount,
          lineCount: (
            <AnimatedNumber
              key="lineCount"
              value={summary.changedLineCount}
              variant="inline"
            />
          ),
        }}
      />
    ) : null;

    summaryNode = (
      <ActivitySummaryWithIcon icon={summaryIcon}>
        {shimmeringSummary}
        {changedLines}
      </ActivitySummaryWithIcon>
    );
    summaryKey = buildCompletedSummaryKey(summary);
    if (shouldAnimateSummaryChanges)
      summaryTransition =
        hasRunningActivity || hasRunningCommand ? "deferred" : "immediate";
  }

  const shouldAnimateInitialCollapse =
    (isTurnInProgress ?? false) && activeSummaryKey !== "thinking";

  return (
    <CollapsibleActivitySummary
      summary={summaryNode}
      summaryKey={summaryKey}
      summaryTransition={summaryTransition}
      shouldAnimateInitialCollapse={shouldAnimateInitialCollapse}
      canExpand={canExpand}
      defaultExpanded={false}
      onExpand={onExpand}
    >
      {children}
    </CollapsibleActivitySummary>
  );
}
