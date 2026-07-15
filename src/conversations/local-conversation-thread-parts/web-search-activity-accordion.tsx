// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Web-search activity accordion: collapsible disclosure of Codex web-search actions with shimmer header and favicon line list.

import React from "react";
import { motion } from "framer-motion";
import { classNames } from "../../utils/class-names";
import { FormattedMessage } from "../../vendor/react-intl";
import {
  ShimmerText,
  FaviconImage,
  useMeasuredElementHeight,
  defaultLayoutTransition,
  WebSearchIcon,
  AutoScrollingActivityList,
  buildWebSearchDetail,
  webSearchFaviconUrl,
  useRemUnitMultiplier,
  ActivityDisclosureLayout,
  ActivityDisclosureHeaderRow,
  ActivityDisclosurePaddedRegion,
} from "../../boundaries/onboarding-commons-externals.facade";

type DisclosureViewState = "collapsed" | "preview" | "expanded";

interface WebSearchAction {
  action: unknown;
  query: string;
  completed: boolean;
}

interface WebSearchLine {
  key: string;
  detail: string;
  completed: boolean;
  faviconUrl: string | null;
}

export interface WebSearchActivityAccordionProps {
  items: WebSearchAction[];
  hideHeader?: boolean;
  isActive?: boolean;
}

const maxHeightByViewState: Record<DisclosureViewState, string> = {
  preview: "7rem",
  expanded: "20rem",
  collapsed: "0px",
};

export function toggleNextViewState(
  viewState: DisclosureViewState,
): DisclosureViewState {
  return viewState === "expanded" ? "collapsed" : "expanded";
}

function mapWebSearchLine(
  action: WebSearchAction,
  index: number,
): WebSearchLine[] {
  const detail = buildWebSearchDetail(action.action, action.query).trim();
  if (detail.length === 0) return [];
  return [
    {
      key: `${detail}:${index}`,
      detail,
      completed: action.completed,
      faviconUrl: webSearchFaviconUrl(action),
    },
  ];
}

function pickActiveDetail(lines: WebSearchLine[]): string | null {
  for (let index = lines.length - 1; index >= 0; --index) {
    const line = lines[index];
    if (!line.completed) return line.detail;
  }
  return lines.at(-1)?.detail ?? null;
}

function renderShimmerChunk(chunks: React.ReactNode): React.ReactNode {
  return (
    <ShimmerText
      key="searching"
      className={classNames(
        "text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground",
        "shrink-0 whitespace-nowrap",
      )}
    >
      {chunks}
    </ShimmerText>
  );
}

function renderShimmerChunkWithDetail(
  chunks: React.ReactNode,
): React.ReactNode {
  return (
    <ShimmerText
      key="searching"
      className={classNames(
        "text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground",
        "shrink-0 whitespace-nowrap",
      )}
    >
      {chunks}
    </ShimmerText>
  );
}

function renderQueryChunk(chunks: React.ReactNode): React.ReactNode {
  return (
    <span key="query" className="min-w-0 truncate">
      {chunks}
    </span>
  );
}

interface WebSearchHeaderLabelProps {
  isSearching: boolean;
  activeDetail: string | null;
}

function WebSearchHeaderLabel({
  isSearching,
  activeDetail,
}: WebSearchHeaderLabelProps) {
  if (isSearching) {
    if (activeDetail != null) {
      return (
        <span className="inline-flex min-w-0 items-center gap-1.5">
          <WebSearchIcon
            aria-hidden={true}
            className="icon-xs shrink-0 text-token-text-secondary"
          />
          <FormattedMessage
            id="localConversationTurn.webSearch.accordion.header.activeWithDetail"
            defaultMessage="<searching>Searching the web</searching> <query>for {detail}</query>"
            description="Header for the web search accordion while Codex is searching the web for a query"
            values={{
              detail: activeDetail,
              query: renderQueryChunk,
              searching: renderShimmerChunkWithDetail,
            }}
          />
        </span>
      );
    }
    return (
      <span className="inline-flex min-w-0 items-center gap-1.5">
        <WebSearchIcon
          aria-hidden={true}
          className="icon-xs shrink-0 text-token-text-secondary"
        />
        <FormattedMessage
          id="localConversationTurn.webSearch.accordion.header.active"
          defaultMessage="<searching>Searching the web</searching>"
          description="Header for the web search accordion while Codex is searching the web"
          values={{ searching: renderShimmerChunk }}
        />
      </span>
    );
  }
  return (
    <span className="inline-flex min-w-0 items-center gap-1.5">
      <WebSearchIcon
        aria-hidden={true}
        className="icon-xs shrink-0 text-token-text-secondary"
      />
      <span
        className={classNames(
          "text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground",
          "whitespace-nowrap",
        )}
      >
        <FormattedMessage
          id="localConversationTurn.webSearch.accordion.header.complete"
          defaultMessage="Searched the web"
          description="Header for the web search accordion after Codex finishes searching the web"
        />
      </span>
    </span>
  );
}

function lineToNode(line: WebSearchLine): {
  key: string;
  node: React.ReactNode;
} {
  return {
    key: line.key,
    node: (
      <div className="text-size-chat flex items-start gap-1.5 font-sans text-token-description-foreground/80">
        {line.faviconUrl == null ? null : (
          <FaviconImage
            src={line.faviconUrl}
            className="mt-[3px] size-3.5 text-token-text-secondary"
          />
        )}
        <span className="min-w-0 break-words">{line.detail}</span>
      </div>
    ),
  };
}

interface WebSearchLinesBodyProps {
  lines: WebSearchLine[];
  viewState: DisclosureViewState;
}

function WebSearchLinesBody({ lines, viewState }: WebSearchLinesBodyProps) {
  const nodes = lines.map(lineToNode);
  return (
    <div className="pt-0 text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant">
      <div className="-mx-2.5 mt-1">
        <AutoScrollingActivityList
          items={nodes}
          autoScrollToBottom={false}
          className="text-size-chat rounded-none border-0 px-2.5 font-sans text-token-description-foreground/80 [&_*]:text-token-description-foreground/80"
          maxHeightByState={maxHeightByViewState}
          viewState={viewState}
        />
      </div>
    </div>
  );
}

export function WebSearchActivityAccordion(
  props: WebSearchActivityAccordionProps,
) {
  const { items, hideHeader = false, isActive = false } = props;
  const lines = items.flatMap(mapWebSearchLine);
  const [viewState, setViewState] =
    React.useState<DisclosureViewState>("collapsed");
  const unitMultiplier = useRemUnitMultiplier();
  const { elementHeightPx, elementRef } = useMeasuredElementHeight();

  if (lines.length === 0) return null;

  const activeDetail = pickActiveDetail(lines);
  const isExpanded = viewState === "expanded";
  const maxExpandedHeight = isExpanded ? 20 * unitMultiplier : 0;
  const bodyHeight = isExpanded
    ? Math.min(elementHeightPx, maxExpandedHeight)
    : 0;

  if (hideHeader) {
    return (
      <ActivityDisclosurePaddedRegion padding="offset">
        <WebSearchLinesBody lines={lines} viewState="expanded" />
      </ActivityDisclosurePaddedRegion>
    );
  }

  const toggleView = () => {
    setViewState(toggleNextViewState);
  };
  const disclosure = { expanded: isExpanded, onToggle: toggleView };

  const header = (
    <ActivityDisclosureHeaderRow disclosure={disclosure} className="w-full">
      <span className="min-w-0 truncate text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground">
        <WebSearchHeaderLabel
          isSearching={isActive}
          activeDetail={activeDetail}
        />
      </span>
    </ActivityDisclosureHeaderRow>
  );

  const bodyStyle: React.CSSProperties = {
    pointerEvents: isExpanded ? "auto" : "none",
    visibility: isExpanded ? "visible" : "hidden",
  };
  const measuredRef = isExpanded ? elementRef : null;

  const body = (
    <motion.div
      initial={false}
      animate={{ height: bodyHeight, opacity: isExpanded ? 1 : 0 }}
      transition={defaultLayoutTransition}
      className={isExpanded ? "overflow-visible" : "overflow-hidden"}
      style={bodyStyle}
    >
      <div ref={measuredRef}>
        <WebSearchLinesBody lines={lines} viewState={viewState} />
      </div>
    </motion.div>
  );

  return <ActivityDisclosureLayout header={header} body={body} />;
}
