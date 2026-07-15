// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Exploration activity accordion: a collapsible disclosure summarizing Codex's
// file reads, searches and listings during a turn, with an in-progress header
// label and an auto-scrolling list of per-command summaries.
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { classNames } from "../../utils/class-names";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { useRemUnitMultiplier } from "../use-rem-unit-multiplier";
import {
  AutoScrollingActivityList,
  ActivityDisclosureLayout,
  ActivityDisclosureHeaderRow,
  ActivityDisclosurePaddedRegion,
  AnimatedActivityLabel,
  ToolActivityIcon,
  useMeasuredElementHeight,
  defaultLayoutTransition,
  resolveActiveExplorationLabel,
  basename,
  joinPath,
  STEPS_DETAIL_LEVEL,
  STEPS_COMMANDS_DETAIL_LEVEL,
  summarizeExplorationCommand,
  formatRedactedSearchQuery,
} from "../../boundaries/onboarding-commons-externals.facade";

type DisclosureViewState = "collapsed" | "preview" | "expanded";

type ParsedCommandType =
  | "read"
  | "search"
  | "list_files"
  | "format"
  | "test"
  | "lint"
  | "noop"
  | "unknown";

interface ParsedCommand {
  type: ParsedCommandType;
  path?: string | null;
  name?: string;
  query?: string | null;
  cmd?: string;
}

interface ExplorationExecItem {
  type: "exec";
  callId: string;
  cwd?: string | null;
  parsedCmd: ParsedCommand;
}

interface ExplorationReasoningItem {
  type: "reasoning";
  [key: string]: unknown;
}

type ExplorationItem = ExplorationExecItem | ExplorationReasoningItem;

interface KeyedExplorationItem {
  item: ExplorationItem;
  key: string;
}

interface ExplorationActivityCounts {
  uniqueReadFileCount: number;
  searchCount: number;
  listCount: number;
}

interface KeyedExplorationItems extends ExplorationActivityCounts {
  keyedItems: KeyedExplorationItem[];
}

interface ExplorationCountPart {
  key: string;
  node: ReactNode;
}

interface ActiveExplorationLabel {
  icon: unknown;
  message: Record<string, unknown>;
  values?: Record<string, unknown>;
}

type IntlShape = ReturnType<typeof useIntl>;
type FormatTermList = (terms: string[]) => string;

const EXPANDED_HEIGHT_REM = 20;

const maxHeightByViewState: Record<DisclosureViewState, string> = {
  preview: "7rem",
  expanded: `${EXPANDED_HEIGHT_REM}rem`,
  collapsed: "0px",
};

export interface ExplorationActivityProps {
  items: ExplorationItem[];
  status: string;
  hideHeader?: boolean;
  threadDetailLevel?: string;
}

export function ExplorationActivity({
  items,
  status,
  hideHeader = false,
  threadDetailLevel,
}: ExplorationActivityProps) {
  const detailLevel =
    threadDetailLevel === undefined
      ? STEPS_COMMANDS_DETAIL_LEVEL
      : threadDetailLevel;
  const isExploring = status === "exploring";
  const { keyedItems, uniqueReadFileCount, searchCount, listCount } =
    buildExplorationKeyedItems(items);
  const intl = useIntl();
  const formatTermList: FormatTermList = (terms) =>
    intl.formatList(terms, { type: "conjunction" });

  const activityNodes = buildExplorationActivityNodes({
    items: keyedItems,
    intl,
    threadDetailLevel: detailLevel,
    formatSearchQueryTermList: formatTermList,
  });

  const activeLabel: ActiveExplorationLabel | null =
    resolveActiveExplorationLabel({
      items: keyedItems.map(unwrapKeyedItem),
      threadDetailLevel: detailLevel,
      formatSearchQueryTermList: formatTermList,
    });

  const countParts =
    isExploring && keyedItems.length === 1
      ? []
      : buildExplorationCountParts({
          uniqueReadFileCount,
          searchCount,
          listCount,
        });

  if (hideHeader) {
    return (
      <ActivityDisclosurePaddedRegion padding="offset">
        <div className="pt-0 text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant">
          <div className="-mx-2.5">
            <AutoScrollingActivityList
              items={activityNodes}
              autoScrollToBottom={isExploring}
              className="text-size-chat rounded-none border-0 px-2.5 font-sans text-token-description-foreground/80 [&_*]:text-token-description-foreground/80"
              maxHeightByState={maxHeightByViewState}
              viewState="expanded"
            />
          </div>
        </div>
      </ActivityDisclosurePaddedRegion>
    );
  }

  const header = (
    <ExplorationHeaderLabel
      isExploring={isExploring}
      countParts={countParts}
      activeLabel={activeLabel}
    />
  );
  const renderBody = (viewState: DisclosureViewState) => (
    <div className="-mx-2.5 mt-1">
      <AutoScrollingActivityList
        items={activityNodes}
        autoScrollToBottom={false}
        className="text-size-chat rounded-none border-0 px-2.5 font-sans text-token-description-foreground/80 [&_*]:text-token-description-foreground/80"
        maxHeightByState={maxHeightByViewState}
        viewState={viewState}
      />
    </div>
  );

  return (
    <ExplorationAccordionShell header={header}>
      {renderBody}
    </ExplorationAccordionShell>
  );
}

function unwrapKeyedItem(keyed: KeyedExplorationItem): ExplorationItem {
  return keyed.item;
}

interface ExplorationAccordionShellProps {
  header: ReactNode;
  defaultViewState?: DisclosureViewState;
  children: ReactNode | ((viewState: DisclosureViewState) => ReactNode);
}

function ExplorationAccordionShell({
  header,
  defaultViewState,
  children,
}: ExplorationAccordionShellProps) {
  const [viewState, setViewState] = useState<DisclosureViewState>(
    defaultViewState === undefined ? "collapsed" : defaultViewState,
  );
  const unitMultiplier = useRemUnitMultiplier();
  const { elementHeightPx, elementRef } = useMeasuredElementHeight();

  const isExpanded = viewState === "expanded";
  const maxExpandedHeight = isExpanded
    ? EXPANDED_HEIGHT_REM * unitMultiplier
    : 0;
  const bodyHeight = isExpanded
    ? Math.min(elementHeightPx, maxExpandedHeight)
    : 0;

  const toggleView = () => {
    setViewState(toggleNextViewState);
  };
  const disclosure = { expanded: isExpanded, onToggle: toggleView };

  const headerLabel = (
    <span
      className={classNames(
        "text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground",
        "min-w-0 truncate",
      )}
    >
      {header}
    </span>
  );
  const headerRow = (
    <ActivityDisclosureHeaderRow disclosure={disclosure} className="w-full">
      {headerLabel}
    </ActivityDisclosureHeaderRow>
  );

  const measuredRef = isExpanded ? elementRef : null;
  const bodyContent =
    typeof children === "function" ? children(viewState) : children;
  const body = (
    <motion.div
      data-testid="exploration-accordion-body"
      initial={false}
      animate={{ height: bodyHeight, opacity: isExpanded ? 1 : 0 }}
      transition={defaultLayoutTransition}
      className={isExpanded ? "overflow-visible" : "overflow-hidden"}
      style={{ pointerEvents: isExpanded ? "auto" : "none" }}
    >
      <div
        ref={measuredRef}
        className="pt-0 text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant"
      >
        {bodyContent}
      </div>
    </motion.div>
  );

  return <ActivityDisclosureLayout header={headerRow} body={body} />;
}

export function toggleNextViewState(
  viewState: DisclosureViewState,
): DisclosureViewState {
  return viewState === "expanded" ? "collapsed" : "expanded";
}

function buildExplorationKeyedItems(
  items: ExplorationItem[],
): KeyedExplorationItems {
  const seenReadPaths = new Set<string>();
  const keyedItems: KeyedExplorationItem[] = [];
  let searchCount = 0;
  let listCount = 0;

  for (let index = items.length - 1; index >= 0; --index) {
    const item = items[index];
    if (item.type === "exec" && item.parsedCmd.type === "search") {
      searchCount += 1;
    }
    if (item.type === "exec" && item.parsedCmd.type === "list_files") {
      listCount += 1;
    }
    if (item.type === "exec" && item.parsedCmd.type === "read") {
      const readKey = resolveReadPathKey(
        item.parsedCmd.path ?? item.parsedCmd.name,
        item.cwd,
      );
      if (seenReadPaths.has(readKey)) continue;
      seenReadPaths.add(readKey);
    }
    const key =
      item.type === "exec" ? `exec:${item.callId}` : `reasoning:${index}`;
    keyedItems.push({ item, key });
  }

  keyedItems.reverse();
  return {
    keyedItems,
    uniqueReadFileCount: seenReadPaths.size,
    searchCount,
    listCount,
  };
}

function resolveReadPathKey(
  path: string | null | undefined,
  cwd: string | null | undefined,
): string {
  const name = basename(path);
  return cwd == null ? name : basename(joinPath(cwd, name));
}

function buildExplorationCountParts({
  uniqueReadFileCount,
  searchCount,
  listCount,
}: ExplorationActivityCounts): ExplorationCountPart[] {
  if (uniqueReadFileCount === 0 && searchCount === 0 && listCount === 0) {
    return [];
  }
  const renderCountText = (chunks: ReactNode) => (
    <span key="count-text">{chunks}</span>
  );
  const parts: ExplorationCountPart[] = [];
  if (uniqueReadFileCount > 0) {
    parts.push({
      key: "files",
      node: (
        <FormattedMessage
          id="localConversationTurn.exploration.accordion.count.files"
          defaultMessage="<countText>{count, plural, one {a file} other {# files}}</countText>"
          description="Count of unique files in exploration header"
          values={{ count: uniqueReadFileCount, countText: renderCountText }}
        />
      ),
    });
  }
  if (searchCount > 0) {
    parts.push({
      key: "searches",
      node: (
        <FormattedMessage
          id="localConversationTurn.exploration.accordion.count.searches"
          defaultMessage="<countText>{count, plural, one {a search} other {# searches}}</countText>"
          description="Count of searches in exploration header"
          values={{ count: searchCount, countText: renderCountText }}
        />
      ),
    });
  }
  if (listCount > 0) {
    parts.push({
      key: "lists",
      node: (
        <FormattedMessage
          id="localConversationTurn.exploration.accordion.count.lists"
          defaultMessage="<countText>{count, plural, one {a list} other {# lists}}</countText>"
          description="Count of list commands in exploration header"
          values={{ count: listCount, countText: renderCountText }}
        />
      ),
    });
  }
  return parts;
}

interface ExplorationHeaderLabelProps {
  isExploring: boolean;
  countParts: ExplorationCountPart[];
  activeLabel: ActiveExplorationLabel | null;
}

function ExplorationHeaderLabel({
  isExploring,
  countParts,
  activeLabel,
}: ExplorationHeaderLabelProps) {
  const hasCounts = countParts.length > 0;
  const countsNode = hasCounts ? (
    <span
      key="counts"
      className="text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground"
    >
      <ExplorationCountSummary countParts={countParts} />
    </span>
  ) : null;

  if (isExploring) {
    if (activeLabel != null) {
      const labelValues = {
        ...activeLabel.values,
        action: renderActionChunk,
        detail: renderDetailChunk,
      };
      return (
        <span className="inline-flex min-w-0 items-center gap-1.5">
          <ToolActivityIcon icon={activeLabel.icon} />
          <AnimatedActivityLabel className="min-w-0 truncate">
            <FormattedMessage {...activeLabel.message} values={labelValues} />
          </AnimatedActivityLabel>
        </span>
      );
    }
    return (
      <>
        <FormattedMessage
          id="localConversationTurn.exploration.accordion.header.active"
          defaultMessage="Exploring"
          description="Header for the exploration accordion while Codex is listing or reading files"
        >
          {renderExploringChunk}
        </FormattedMessage>
        {hasCounts ? (
          <span className="text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground">
            {" "}
          </span>
        ) : null}
        {hasCounts ? (
          <FormattedMessage
            id="localConversationTurn.exploration.accordion.header.active.withCounts"
            defaultMessage="{counts}"
            description="Counts shown in the exploration accordion header while Codex is listing or searching"
            values={{ counts: countsNode }}
          />
        ) : null}
      </>
    );
  }

  return hasCounts ? (
    <span className="text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground">
      <FormattedMessage
        id="localConversationTurn.exploration.accordion.header.complete.withCounts"
        defaultMessage="Explored {counts}"
        description="Header for the exploration accordion after Codex finishes listing or searching, including counts"
        values={{ counts: countsNode }}
      />
    </span>
  ) : (
    <span className="text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground">
      <FormattedMessage
        id="localConversationTurn.exploration.accordion.header.complete"
        defaultMessage="Explored"
        description="Header for the exploration accordion after Codex finishes listing or reading files"
      />
    </span>
  );
}

function renderExploringChunk(chunks: ReactNode): ReactNode {
  return (
    <AnimatedActivityLabel key="active-label">{chunks}</AnimatedActivityLabel>
  );
}

function renderDetailChunk(chunks: ReactNode): ReactNode {
  return <span className="min-w-0 truncate">{chunks}</span>;
}

function renderActionChunk(chunks: ReactNode): ReactNode {
  return <span className="shrink-0 whitespace-nowrap">{chunks}</span>;
}

interface ExplorationCountSummaryProps {
  countParts: ExplorationCountPart[];
}

function ExplorationCountSummary({ countParts }: ExplorationCountSummaryProps) {
  return <>{countParts.map(renderCountPart)}</>;
}

function renderCountPart(part: ExplorationCountPart, index: number): ReactNode {
  return (
    <span key={part.key} className="contents">
      {index > 0 ? (
        <FormattedMessage
          id="localConversationTurn.exploration.accordion.count.separator"
          defaultMessage=", "
          description="Separator between counts in the exploration header"
        />
      ) : null}
      {part.node}
    </span>
  );
}

interface BuildExplorationActivityNodesArgs {
  items: KeyedExplorationItem[];
  intl: IntlShape;
  threadDetailLevel: string;
  formatSearchQueryTermList: FormatTermList;
}

function buildExplorationActivityNodes({
  items,
  intl,
  threadDetailLevel,
  formatSearchQueryTermList,
}: BuildExplorationActivityNodesArgs): ExplorationCountPart[] {
  return items
    .map(({ item, key }) => {
      const node = renderExplorationItem({
        item,
        intl,
        threadDetailLevel,
        formatSearchQueryTermList,
      });
      return node == null ? null : { key, node };
    })
    .filter((entry): entry is ExplorationCountPart => entry != null);
}

interface RenderExplorationItemArgs {
  item: ExplorationItem;
  intl: IntlShape;
  threadDetailLevel: string;
  formatSearchQueryTermList: FormatTermList;
}

function renderExplorationItem({
  item,
  intl,
  threadDetailLevel,
  formatSearchQueryTermList,
}: RenderExplorationItemArgs): ReactNode {
  if (item.type !== "exec") return null;
  const isStepsLevel = threadDetailLevel === STEPS_DETAIL_LEVEL;
  const formatSearchQuery = isStepsLevel
    ? (query: string) =>
        formatRedactedSearchQuery(query, formatSearchQueryTermList)
    : undefined;
  const parsedCmd = item.parsedCmd;

  switch (parsedCmd.type) {
    case "read":
      return renderTruncatedSummary(
        summarizeExplorationCommand({
          summary: parsedCmd,
          cwd: item.cwd,
          intl,
          threadDetailLevel,
          formatSearchQuery,
        }) || `Read ${basename(parsedCmd.name)}`,
      );
    case "search": {
      const summary = summarizeExplorationCommand({
        summary: parsedCmd,
        cwd: item.cwd,
        intl,
        threadDetailLevel,
        formatSearchQuery,
      });
      if (summary) return renderTruncatedSummary(summary);
      if (parsedCmd.query && parsedCmd.path) {
        return renderTruncatedSummary(
          `Searched for ${
            isStepsLevel
              ? formatRedactedSearchQuery(
                  parsedCmd.query,
                  formatSearchQueryTermList,
                )
              : parsedCmd.query
          } in ${parsedCmd.path}`,
        );
      }
      if (parsedCmd.query) {
        return renderTruncatedSummary(
          `Searched for ${
            isStepsLevel
              ? formatRedactedSearchQuery(
                  parsedCmd.query,
                  formatSearchQueryTermList,
                )
              : parsedCmd.query
          }`,
        );
      }
      return renderTruncatedSummary("Searched for files");
    }
    case "list_files": {
      const summary = summarizeExplorationCommand({
        summary: parsedCmd,
        cwd: item.cwd,
        intl,
        threadDetailLevel,
        formatSearchQuery,
      });
      if (summary) return renderTruncatedSummary(summary);
      return renderTruncatedSummary(
        parsedCmd.path ? `Listed files in ${parsedCmd.path}` : "Listed files",
      );
    }
    case "format":
    case "test":
    case "lint":
    case "noop":
    case "unknown":
      return renderTruncatedSummary(parsedCmd.cmd);
  }
}

function renderTruncatedSummary(content: ReactNode): ReactNode {
  return <div className="truncate">{content}</div>;
}
