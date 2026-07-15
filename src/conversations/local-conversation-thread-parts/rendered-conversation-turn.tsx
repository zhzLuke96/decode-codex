// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the grouped render units of a single conversation turn (entries, collapsed tool activity, web search, etc.).
import React, { type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { WebSearchActivityAccordion } from "./web-search-activity-accordion";
import {
  ConversationActivitySpacer,
  ConversationEntryRenderer,
  CollapsedToolActivityCard,
  DynamicToolCallGroup,
  ExplorationActivity,
  MultiAgentGroup,
  PendingMcpToolCalls,
  TodoListActivity,
  ToolActivityIcon,
  FileReferenceLink,
  FaviconImage,
  DiffLineStats,
  ShimmerText,
  basename,
  buildFileReference,
  codexAnalyticsConfigAtom,
  defaultLayoutTransition,
  useAtomValue,
  resolveTurnRenderUnits,
  getRenderUnitKey,
  resolveActiveCommandLabel,
  resolveCollapsedActivitySourceSummary,
  buildToolActivityDetailLines,
  canExpandCollapsedActivity,
  getTimelineTargetProps,
  shouldShowThinkingFallbackForUnit,
  STEPS_DETAIL_LEVEL,
  codexPreviousTurnExpandedEvent,
  productEventTargets,
} from "../../boundaries/onboarding-commons-externals.facade";

const TOOL_ASSISTANT_GAP = "var(--conversation-tool-assistant-gap, 8px)";
const PATCH_FILE_GAP = "4px";

export function initRenderedConversationTurnChunk(): void {}

type RenderUnit = {
  kind: string;
  [key: string]: unknown;
};

export type RenderedConversationTurnProps = {
  entries: readonly RenderUnit[];
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isTurnCancelled?: boolean;
  isActivitySliceClosed: boolean;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  mcpServerStatuses?: unknown;
  shouldAutoExpandMcpApps?: boolean;
  collapseMixedDynamicToolActivity?: boolean;
  toolActivityTurnKey?: string;
  modelProvider?: string;
  hideCommandDetails?: boolean;
  compactUserMessageActions?: boolean;
  allowAddSelectedTextToChat?: boolean;
  hookStats?: unknown;
  wrapSearchableContent?: (input: {
    item: unknown;
    content: ReactNode;
  }) => ReactNode;
  previousTurnNumber?: number;
  totalTurnCount?: number;
  latestTurnFollowContentRef?: React.Ref<HTMLDivElement>;
  contentAfterWorkedFor?: ReactNode;
  showThinkingFallback?: boolean;
  thinkingFallbackMessage?: ReactNode;
  thinkingFallbackAction?: ReactNode;
  isEverydayWorkMode?: boolean;
  subagentActivityContentByItemId?: Map<string, ReactNode>;
};

export function RenderedConversationTurn(
  props: RenderedConversationTurnProps,
): ReactNode {
  const {
    entries,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isTurnCancelled = false,
    isActivitySliceClosed,
    cwd,
    resolvedApps,
    renderMcpApps,
    mcpServerStatuses,
    shouldAutoExpandMcpApps,
    collapseMixedDynamicToolActivity,
    toolActivityTurnKey,
    modelProvider,
    hideCommandDetails,
    compactUserMessageActions,
    allowAddSelectedTextToChat,
    hookStats,
    wrapSearchableContent,
    previousTurnNumber,
    totalTurnCount,
    latestTurnFollowContentRef,
    contentAfterWorkedFor,
    showThinkingFallback,
    thinkingFallbackMessage,
    thinkingFallbackAction,
    isEverydayWorkMode,
    subagentActivityContentByItemId,
  } = props;

  const apps = resolvedApps === undefined ? [] : resolvedApps;
  const renderMcp = renderMcpApps === undefined ? true : renderMcpApps;
  const autoExpandMcp =
    shouldAutoExpandMcpApps === undefined ? false : shouldAutoExpandMcpApps;
  const collapseMixed =
    collapseMixedDynamicToolActivity === undefined
      ? false
      : collapseMixedDynamicToolActivity;
  const hideCommands =
    hideCommandDetails === undefined ? false : hideCommandDetails;
  const compactUserActions =
    compactUserMessageActions === undefined ? false : compactUserMessageActions;
  const allowThinkingFallback =
    showThinkingFallback === undefined ? false : showThinkingFallback;

  const renderedNodes: ReactNode[] = [];
  const renderUnits = resolveTurnRenderUnits({
    entries,
    conversationDetailLevel,
    isTurnInProgress,
    isActivitySliceClosed,
    mcpServerStatuses,
    resolvedApps: apps,
    shouldAutoExpandMcpApps: autoExpandMcp,
    modelProvider,
    isTurnCancelled,
    collapseMixedDynamicToolActivity: collapseMixed && false,
  });
  const showProcessBadges =
    conversationDetailLevel !== "STEPS_PROSE" &&
    entries.some(hasRunningProcessExec);

  for (const [unitIndex, unit] of renderUnits.entries()) {
    const renderKey = getRenderUnitKey(unit, unitIndex);
    const isLatestRenderUnit = unitIndex === renderUnits.length - 1;
    const isFollowTarget =
      latestTurnFollowContentRef != null && isFollowableRenderUnit(unit);
    const renderUnitNode = (
      <ConversationTurnRenderUnit
        key={renderKey}
        unit={unit}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={conversationDetailLevel}
        isTurnInProgress={isTurnInProgress}
        isActivitySliceClosed={isActivitySliceClosed}
        isTurnCancelled={isTurnCancelled}
        hasFollowingRenderUnit={unitIndex < renderUnits.length - 1}
        renderIndex={unitIndex}
        isLatestRenderUnit={isLatestRenderUnit}
        renderKey={renderKey}
        cwd={cwd}
        resolvedApps={apps}
        renderMcpApps={renderMcp}
        shouldAutoExpandMcpApps={autoExpandMcp}
        toolActivityTurnKey={toolActivityTurnKey}
        hideCommandDetails={hideCommands}
        compactUserMessageActions={compactUserActions}
        allowAddSelectedTextToChat={allowAddSelectedTextToChat}
        hookStats={hookStats}
        wrapSearchableContent={wrapSearchableContent}
        previousTurnNumber={previousTurnNumber}
        totalTurnCount={totalTurnCount}
        enableTimelineTargets={false}
        showProcessBadges={showProcessBadges}
        showAssistantTimestampWithoutActions={false}
        showThinkingFallback={
          allowThinkingFallback &&
          isLatestRenderUnit &&
          shouldShowThinkingFallbackForUnit(unit)
        }
        thinkingFallbackMessage={thinkingFallbackMessage}
        thinkingFallbackAction={thinkingFallbackAction}
        isEverydayWorkMode={isEverydayWorkMode}
        subagentActivityContentByItemId={subagentActivityContentByItemId}
      />
    );

    if (
      unit.kind === "pending-mcp-tool-calls" ||
      unit.kind === "dynamic-tool-call-group"
    ) {
      renderedNodes.push(
        isFollowTarget ? (
          <div key={renderKey} ref={latestTurnFollowContentRef}>
            {renderUnitNode}
          </div>
        ) : (
          renderUnitNode
        ),
      );
      continue;
    }

    const isSubagentActivity =
      unit.kind === "entry" &&
      (unit as { entry?: { kind?: string; item?: { type?: string } } }).entry
        ?.kind === "item" &&
      (unit as { entry?: { item?: { type?: string } } }).entry?.item?.type ===
        "subagent-activity";

    renderedNodes.push(
      <motion.div
        key={renderKey}
        className={isSubagentActivity ? "-mx-1.5 px-1.5" : undefined}
        ref={isFollowTarget ? latestTurnFollowContentRef : undefined}
        exit={{ opacity: 0, height: 0 }}
        transition={defaultLayoutTransition}
        style={{ overflow: "hidden" }}
      >
        {renderUnitNode}
      </motion.div>,
    );

    const isWorkedForEntry =
      unit.kind === "entry" &&
      (unit as { entry?: { kind?: string; item?: { type?: string } } }).entry
        ?.kind === "item" &&
      (unit as { entry?: { item?: { type?: string } } }).entry?.item?.type ===
        "worked-for";
    if (contentAfterWorkedFor != null && isWorkedForEntry) {
      renderedNodes.push(
        <div key="content-after-worked-for">
          <ConversationActivitySpacer size={TOOL_ASSISTANT_GAP} />
          {contentAfterWorkedFor}
        </div>,
      );
    }
  }

  return (
    <div className="flex flex-col space-y-0">
      <AnimatePresence initial={false}>{renderedNodes}</AnimatePresence>
    </div>
  );
}

function hasRunningProcessExec(unit: RenderUnit): boolean {
  const item = (unit as { item?: { type?: string; processId?: unknown } }).item;
  return (
    unit.kind === "item" && item?.type === "exec" && item.processId != null
  );
}

function isFollowableRenderUnit(unit: RenderUnit): boolean {
  if (unit.kind !== "entry") {
    return true;
  }
  const entry = (
    unit as { entry?: { kind?: string; item?: { type?: string } } }
  ).entry;
  return entry?.kind !== "item" || entry.item?.type !== "user-message";
}

type ConversationTurnRenderUnitProps = {
  unit: RenderUnit;
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isActivitySliceClosed: boolean;
  isTurnCancelled: boolean;
  hasFollowingRenderUnit: boolean;
  renderIndex: number;
  isLatestRenderUnit: boolean;
  renderKey: string;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApps?: boolean;
  toolActivityTurnKey?: string;
  execSummaryTone?: string;
  showExecSummaryIcon?: boolean;
  hideCommandDetails?: boolean;
  compactUserMessageActions?: boolean;
  allowAddSelectedTextToChat?: boolean;
  hookStats?: unknown;
  wrapSearchableContent?: (input: {
    item: unknown;
    content: ReactNode;
  }) => ReactNode;
  previousTurnNumber?: number;
  totalTurnCount?: number;
  enableTimelineTargets?: boolean;
  showProcessBadges?: boolean;
  showAssistantTimestampWithoutActions?: boolean;
  showThinkingFallback?: boolean;
  thinkingFallbackMessage?: ReactNode;
  thinkingFallbackAction?: ReactNode;
  isEverydayWorkMode?: boolean;
  subagentActivityContentByItemId?: Map<string, ReactNode>;
};

export function ConversationTurnRenderUnit(
  props: ConversationTurnRenderUnitProps,
): ReactNode {
  const {
    unit,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isActivitySliceClosed,
    isTurnCancelled,
    hasFollowingRenderUnit,
    renderIndex,
    isLatestRenderUnit,
    renderKey,
    cwd,
    resolvedApps = [],
    renderMcpApps = true,
    shouldAutoExpandMcpApps = false,
    toolActivityTurnKey,
    execSummaryTone = "default",
    showExecSummaryIcon = true,
    hideCommandDetails = false,
    compactUserMessageActions = false,
    allowAddSelectedTextToChat,
    hookStats,
    wrapSearchableContent,
    previousTurnNumber,
    totalTurnCount,
    enableTimelineTargets,
    showProcessBadges,
    showAssistantTimestampWithoutActions,
    showThinkingFallback = false,
    thinkingFallbackMessage,
    thinkingFallbackAction,
    isEverydayWorkMode,
    subagentActivityContentByItemId,
  } = props;

  const apps = resolvedApps;
  let renderedContent: ReactNode;

  if (unit.kind === "collapsed-tool-activity") {
    renderedContent = (
      <CollapsedToolActivityRenderUnit
        unit={unit}
        conversationId={conversationId}
        hostId={hostId}
        conversationDetailLevel={conversationDetailLevel}
        isTurnInProgress={isTurnInProgress}
        isActivitySliceClosed={isActivitySliceClosed}
        isTurnCancelled={isTurnCancelled}
        isLatestRenderUnit={isLatestRenderUnit}
        cwd={cwd}
        resolvedApps={apps}
        renderMcpApps={renderMcpApps}
        shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
        toolActivityTurnKey={toolActivityTurnKey}
        hideCommandDetails={hideCommandDetails}
        allowAddSelectedTextToChat={allowAddSelectedTextToChat}
        previousTurnNumber={previousTurnNumber}
        totalTurnCount={totalTurnCount}
        showAssistantTimestampWithoutActions={
          showAssistantTimestampWithoutActions
        }
        showThinkingFallback={showThinkingFallback}
        thinkingFallbackMessage={thinkingFallbackMessage}
        isEverydayWorkMode={isEverydayWorkMode}
      />
    );
  } else if (unit.kind === "pending-mcp-tool-calls") {
    renderedContent = (
      <PendingMcpToolCalls
        items={(unit as { items: readonly unknown[] }).items}
        conversationId={conversationId}
        hostId={hostId}
        hasFollowingRenderUnit={hasFollowingRenderUnit}
        isTurnInProgress={isTurnInProgress}
        renderMcpApps={renderMcpApps}
        resolvedApps={apps}
        shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
        toolActivityTurnKey={toolActivityTurnKey}
        showThinkingHeader={showThinkingFallback}
        thinkingMessage={thinkingFallbackMessage}
      />
    );
  } else if (unit.kind === "dynamic-tool-call-group") {
    const isActive =
      isTurnInProgress && !isActivitySliceClosed && isLatestRenderUnit;
    renderedContent = (
      <DynamicToolCallGroup
        conversationId={conversationId}
        enableTimelineTargets={enableTimelineTargets}
        items={(unit as { items: readonly unknown[] }).items}
        isActive={isActive}
        showThinkingFallback={showThinkingFallback}
        thinkingFallbackMessage={thinkingFallbackMessage}
      />
    );
  } else if (unit.kind === "multi-agent-group") {
    renderedContent = (
      <MultiAgentGroup
        conversationId={conversationId}
        items={(unit as { items: readonly unknown[] }).items}
      />
    );
  } else if (unit.kind === "web-search-group") {
    const isActive = isTurnInProgress && isLatestRenderUnit;
    renderedContent = (
      <WebSearchActivityAccordion
        items={(unit as { items: readonly unknown[] }).items}
        isActive={isActive}
      />
    );
  } else if (
    (unit as { entry?: { kind?: string } }).entry?.kind === "exploration"
  ) {
    const entry = (
      unit as {
        entry: { items: readonly unknown[]; status: unknown };
      }
    ).entry;
    renderedContent = (
      <ExplorationActivity
        items={entry.items}
        status={entry.status}
        threadDetailLevel={conversationDetailLevel}
      />
    );
  } else {
    const item = (
      unit as {
        entry: { item: { type: string; id: string; hookFeedback?: boolean } };
      }
    ).entry.item;
    if (item.type === "subagent-activity") {
      renderedContent = subagentActivityContentByItemId?.get(item.id) ?? null;
    } else if (item.type === "todo-list") {
      renderedContent = <TodoListActivity item={item} />;
    } else if (item.type === "reasoning") {
      renderedContent = null;
    } else {
      const itemHookStats =
        item.type === "user-message" && item.hookFeedback === true
          ? hookStats
          : null;
      const entryContent = (
        <ConversationEntryRenderer
          item={item}
          conversationId={conversationId}
          hostId={hostId}
          conversationDetailLevel={conversationDetailLevel}
          isTurnInProgress={isTurnInProgress}
          isTurnCancelled={isTurnCancelled}
          cwd={cwd}
          reportEntityType="thread"
          resolvedApps={apps}
          renderMcpApps={renderMcpApps}
          shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
          toolActivityTurnKey={toolActivityTurnKey}
          execSummaryTone={execSummaryTone}
          showExecSummaryIcon={showExecSummaryIcon}
          compactUserMessageActions={compactUserMessageActions}
          showAssistantMessageActionRow={false}
          allowAddSelectedTextToChat={allowAddSelectedTextToChat}
          hookStats={itemHookStats}
          previousTurnNumber={previousTurnNumber}
          enableTimelineTargets={enableTimelineTargets}
          showProcessBadges={showProcessBadges}
          showAssistantTimestampWithoutActions={
            showAssistantTimestampWithoutActions
          }
        />
      );
      renderedContent =
        wrapSearchableContent == null
          ? entryContent
          : wrapSearchableContent({ item, content: entryContent });
    }
  }

  const contentWithThinkingAction =
    showThinkingFallback &&
    thinkingFallbackAction != null &&
    renderedContent != null ? (
      <div className="group/thread-details flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">{renderedContent}</div>
        {thinkingFallbackAction}
      </div>
    ) : (
      renderedContent
    );

  const leadingGap = renderIndex !== 0 && renderedContent && (
    <ConversationActivitySpacer
      key={`agent-gap-${renderKey}`}
      size={TOOL_ASSISTANT_GAP}
    />
  );

  const unitOutput = (
    <>
      {leadingGap}
      {contentWithThinkingAction}
    </>
  );

  if (enableTimelineTargets && renderedContent != null) {
    const timelineTargetProps = getTimelineTargetProps(unit);
    if (timelineTargetProps != null) {
      return (
        <div {...timelineTargetProps} className="outline-none" tabIndex={-1}>
          {unitOutput}
        </div>
      );
    }
  }
  return unitOutput;
}

type CollapsedToolActivityRenderUnitProps = {
  unit: RenderUnit & { summary: any; units: readonly RenderUnit[] };
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isActivitySliceClosed: boolean;
  isTurnCancelled: boolean;
  isLatestRenderUnit: boolean;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApps?: boolean;
  toolActivityTurnKey?: string;
  hideCommandDetails?: boolean;
  allowAddSelectedTextToChat?: boolean;
  previousTurnNumber?: number;
  totalTurnCount?: number;
  showAssistantTimestampWithoutActions?: boolean;
  showThinkingFallback?: boolean;
  thinkingFallbackMessage?: ReactNode;
  isEverydayWorkMode?: boolean;
};

function CollapsedToolActivityRenderUnit(
  props: CollapsedToolActivityRenderUnitProps,
): ReactNode {
  const {
    unit,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isActivitySliceClosed,
    isTurnCancelled,
    isLatestRenderUnit,
    cwd,
    resolvedApps,
    renderMcpApps,
    shouldAutoExpandMcpApps,
    toolActivityTurnKey,
    hideCommandDetails,
    allowAddSelectedTextToChat,
    previousTurnNumber,
    totalTurnCount,
    showAssistantTimestampWithoutActions,
    showThinkingFallback,
    thinkingFallbackMessage,
    isEverydayWorkMode,
  } = props;

  const intl = useIntl();
  const analyticsConfig = useAtomValue(codexAnalyticsConfigAtom);
  const effectiveDetailLevel = isEverydayWorkMode
    ? STEPS_DETAIL_LEVEL
    : conversationDetailLevel;
  const isActiveToolActivity =
    isTurnInProgress && !isActivitySliceClosed && isLatestRenderUnit;
  const summary = unit.summary;
  const formatSearchQueryTermList = (terms: readonly string[]) =>
    intl.formatList(terms, { type: "conjunction" });

  const showGenericCommandDetails = !hideCommandDetails;
  const activeCommandLabel = resolveActiveCommandLabel({
    units: unit.units,
    threadDetailLevel: effectiveDetailLevel,
    formatSearchQueryTermList,
    preferRunningCommandLabel: isActiveToolActivity,
    showGenericCommandDetails,
  });

  const isPatchFileLabel =
    isEverydayWorkMode && activeCommandLabel?.patchFile != null;
  const showThinkingHeader =
    !isPatchFileLabel &&
    showThinkingFallback &&
    !(
      isActiveToolActivity &&
      activeCommandLabel?.icon === "run-command" &&
      summary.runningCommandCount > 0
    );

  let activeSummaryContent: ReactNode = null;
  let activeSummaryKey: string | undefined;
  if (showThinkingHeader) {
    const thinkingMessage = thinkingFallbackMessage ?? (
      <FormattedMessage
        id="thinkingShimmer.default"
        defaultMessage="Thinking"
        description="Default placeholder shown while the assistant is thinking"
      />
    );
    activeSummaryContent = (
      <span className="inline-flex max-w-full min-w-0 items-center overflow-hidden">
        <span aria-hidden={true} className="h-4 w-0 shrink-0" />
        <ShimmerText className="min-w-0 flex-1 truncate">
          {thinkingMessage}
        </ShimmerText>
      </span>
    );
    activeSummaryKey = "thinking";
  } else if (
    !isPatchFileLabel &&
    activeCommandLabel != null &&
    isActiveToolActivity
  ) {
    activeSummaryContent = (
      <ActiveToolActivityLabel
        label={activeCommandLabel}
        cwd={cwd}
        hostId={hostId}
      />
    );
    activeSummaryKey = activeCommandLabel.activityKey;
  }

  const sourceSummary =
    activeSummaryContent == null
      ? resolveCollapsedActivitySourceSummary({
          units: unit.units,
          resolvedApps,
        })
      : null;
  const hasRunningWebSearch = summary.runningWebSearchCount > 0;
  const hasDetailLines =
    buildToolActivityDetailLines(summary, intl, {
      showRunningCommandSummary: effectiveDetailLevel === STEPS_DETAIL_LEVEL,
      isWebSearchInProgress: hasRunningWebSearch,
    }).length > 0;

  if (
    hideCommandDetails &&
    activeSummaryContent == null &&
    sourceSummary == null &&
    !hasDetailLines
  ) {
    return null;
  }

  const hasSourceSummary = sourceSummary != null;
  const canExpand = canExpandCollapsedActivity({
    conversationDetailLevel: effectiveDetailLevel,
    units: unit.units,
    summary,
    hasSourceSummary,
    isActiveToolActivity,
  });

  const onExpand =
    previousTurnNumber != null &&
    totalTurnCount != null &&
    summary.mcpToolCallCount > 0
      ? () => {
          analyticsConfig.logProductEvent(codexPreviousTurnExpandedEvent, {
            target:
              productEventTargets.CODEX_PREVIOUS_TURN_EXPANDED_TARGET_TOOL_CALL,
            turnNumber: previousTurnNumber,
            totalTurnCount,
          });
        }
      : undefined;

  const childUnits = unit.units.map((childUnit, childIndex) => {
    const childKey = getRenderUnitKey(childUnit, childIndex);
    if (effectiveDetailLevel === "STEPS_PROSE" && isExecEntryUnit(childUnit)) {
      return null;
    }
    return (
      <div key={childKey}>
        <ConversationActivitySpacer size={PATCH_FILE_GAP} />
        <CollapsedToolActivityChildRenderUnit
          unit={childUnit}
          conversationId={conversationId}
          hostId={hostId}
          conversationDetailLevel={effectiveDetailLevel}
          isTurnInProgress={isTurnInProgress}
          isTurnCancelled={isTurnCancelled}
          cwd={cwd}
          resolvedApps={resolvedApps}
          renderMcpApps={renderMcpApps}
          shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
          toolActivityTurnKey={toolActivityTurnKey}
          allowAddSelectedTextToChat={allowAddSelectedTextToChat}
          showAssistantTimestampWithoutActions={
            showAssistantTimestampWithoutActions
          }
        />
      </div>
    );
  });

  return (
    <CollapsedToolActivityCard
      summary={summary}
      activeSummary={activeSummaryContent}
      activeSummaryKey={activeSummaryKey}
      icon={activeCommandLabel?.icon}
      sourceSummary={sourceSummary}
      isTurnInProgress={isTurnInProgress}
      showRunningCommandSummary={effectiveDetailLevel === STEPS_DETAIL_LEVEL}
      shouldAnimateSummaryChanges={isActiveToolActivity}
      showFileChangeLineCount={isEverydayWorkMode}
      canExpand={canExpand}
      onExpand={onExpand}
    >
      <div
        className="flex flex-col"
        style={
          {
            "--conversation-patch-file-gap": PATCH_FILE_GAP,
          } as React.CSSProperties
        }
      >
        {childUnits}
      </div>
    </CollapsedToolActivityCard>
  );
}

type CollapsedToolActivityChildRenderUnitProps = {
  unit: RenderUnit;
  conversationId: string;
  hostId: string;
  conversationDetailLevel: string;
  isTurnInProgress: boolean;
  isTurnCancelled: boolean;
  cwd: string | null;
  resolvedApps?: readonly unknown[];
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApps?: boolean;
  toolActivityTurnKey?: string;
  allowAddSelectedTextToChat?: boolean;
  showAssistantTimestampWithoutActions?: boolean;
};

function CollapsedToolActivityChildRenderUnit(
  props: CollapsedToolActivityChildRenderUnitProps,
): ReactNode {
  const {
    unit,
    conversationId,
    hostId,
    conversationDetailLevel,
    isTurnInProgress,
    isTurnCancelled,
    cwd,
    resolvedApps = [],
    renderMcpApps = true,
    shouldAutoExpandMcpApps = false,
    toolActivityTurnKey,
    allowAddSelectedTextToChat,
    showAssistantTimestampWithoutActions,
  } = props;

  const entry = (
    unit as {
      entry?: {
        kind?: string;
        items?: readonly unknown[];
        status?: unknown;
        item?: { type?: string };
      };
    }
  ).entry;

  if (unit.kind === "entry" && entry?.kind === "exploration") {
    return (
      <ExplorationActivity
        items={entry.items}
        status={entry.status}
        threadDetailLevel={conversationDetailLevel}
        hideHeader={true}
      />
    );
  }
  if (unit.kind === "web-search-group") {
    return (
      <WebSearchActivityAccordion
        items={(unit as { items: readonly unknown[] }).items}
        hideHeader={true}
      />
    );
  }
  if (
    conversationDetailLevel === "STEPS_PROSE" &&
    unit.kind === "entry" &&
    entry?.kind === "item" &&
    entry.item?.type === "exec"
  ) {
    return null;
  }

  const renderKey = getRenderUnitKey(unit, 0);
  return (
    <ConversationTurnRenderUnit
      unit={unit}
      conversationId={conversationId}
      hostId={hostId}
      conversationDetailLevel={conversationDetailLevel}
      isTurnInProgress={isTurnInProgress}
      isActivitySliceClosed={true}
      isTurnCancelled={isTurnCancelled}
      hasFollowingRenderUnit={false}
      renderIndex={0}
      isLatestRenderUnit={false}
      renderKey={renderKey}
      cwd={cwd}
      resolvedApps={resolvedApps}
      renderMcpApps={renderMcpApps}
      shouldAutoExpandMcpApps={shouldAutoExpandMcpApps}
      toolActivityTurnKey={toolActivityTurnKey}
      execSummaryTone="muted"
      showExecSummaryIcon={false}
      allowAddSelectedTextToChat={allowAddSelectedTextToChat}
      enableTimelineTargets={false}
      showProcessBadges={false}
      isEverydayWorkMode={false}
      showAssistantTimestampWithoutActions={
        showAssistantTimestampWithoutActions
      }
    />
  );
}

type ActiveCommandLabel = {
  patchFile?: {
    path: string;
    grantRoot?: string | null;
    diffStats?: { linesAdded: number; linesRemoved: number } | null;
  } | null;
  message: { id: string; defaultMessage: string; description?: string };
  values?: Record<string, unknown>;
  faviconUrl?: string | null;
  icon?: string;
  activityKey?: string;
};

function ActiveToolActivityLabel({
  label,
  cwd,
  hostId,
}: {
  label: ActiveCommandLabel;
  cwd: string | null;
  hostId: string;
}): ReactNode {
  const patchFile = label.patchFile;
  const renderDetail = (detail: ReactNode) =>
    patchFile == null ? (
      <span key="detail" className="min-w-0 truncate">
        {detail}
      </span>
    ) : (
      <span
        key="detail"
        className="ml-1.5 inline-flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden align-bottom whitespace-nowrap"
      >
        <FileReferenceLink
          reference={buildFileReference(patchFile.path)}
          className="min-w-0 flex-1 cursor-interaction truncate text-start text-token-text-link-foreground select-text hover:underline [&>span]:block [&>span]:truncate [&>span]:whitespace-nowrap"
          cwd={patchFile.grantRoot ?? cwd}
          hostId={hostId}
        >
          {basename(patchFile.path)}
        </FileReferenceLink>
        {patchFile.diffStats == null ? null : (
          <DiffLineStats
            className="shrink-0"
            linesAdded={patchFile.diffStats.linesAdded}
            linesRemoved={patchFile.diffStats.linesRemoved}
          />
        )}
      </span>
    );

  const labelMessage =
    patchFile == null ? (
      <ShimmerText className="min-w-0 flex-1 truncate">
        <FormattedMessage
          {...label.message}
          values={{
            ...label.values,
            action: renderActiveLabelActionShimmer,
            detail: renderDetail,
          }}
        />
      </ShimmerText>
    ) : (
      <span className="inline-flex min-w-0 flex-1 items-center overflow-hidden">
        <FormattedMessage
          {...label.message}
          values={{
            ...label.values,
            action: renderActiveLabelAction,
            detail: renderDetail,
          }}
        />
      </span>
    );

  const labelIcon =
    label.faviconUrl == null ? (
      <ToolActivityIcon icon={label.icon} />
    ) : (
      <FaviconImage
        src={label.faviconUrl}
        className="icon-xs text-token-input-placeholder-foreground"
        showFallbackWhileLoading={false}
      />
    );

  return (
    <span className="inline-flex max-w-full min-w-0 items-center gap-1.5 overflow-hidden">
      {labelIcon}
      {labelMessage}
    </span>
  );
}

function renderActiveLabelAction(content: ReactNode): ReactNode {
  return (
    <ShimmerText key="action" className="shrink-0 whitespace-nowrap">
      {content}
    </ShimmerText>
  );
}

function renderActiveLabelActionShimmer(content: ReactNode): ReactNode {
  return (
    <span key="action" className="shrink-0 whitespace-nowrap">
      {content}
    </span>
  );
}

function isExecEntryUnit(unit: RenderUnit): boolean {
  const entry = (
    unit as { entry?: { kind?: string; item?: { type?: string } } }
  ).entry;
  return (
    unit.kind === "entry" &&
    entry?.kind === "item" &&
    entry.item?.type === "exec"
  );
}
