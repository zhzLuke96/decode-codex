// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~onboarding-page~hotkey-~fnaniary-xAHK9tNq.js
// Shared activity disclosure primitives used by conversation, onboarding, and automation activity rows.
import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { ChevronRightIcon } from "../icons/chevron-right-icon";
import {
  initThinkingShimmerChunk,
  ShimmerText,
  ThinkingShimmerMessage,
} from "../ui/thinking-shimmer";
import { getResizeObserverEntrySize } from "../utils/get-resize-observer-entry-size";
import { useResizeObserverRef } from "../utils/use-resize-observer";

export const defaultLayoutTransition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1],
};

export const activityDisclosureTransition = defaultLayoutTransition;

export interface ActivityDisclosurePaddedRegionProps {
  children?: React.ReactNode;
  className?: string;
  padding?: "default" | "offset";
}

export interface ActivityDisclosureState {
  expanded: boolean;
  onToggle: () => void;
}

export interface ActivityDisclosureChevronProps {
  expanded?: boolean;
}

export interface ActivityDisclosureHeaderRowProps {
  accessory?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  disclosure?: ActivityDisclosureState | null;
  testId?: string;
}

export interface ActivityDisclosureLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  body?: React.ReactNode;
  header?: React.ReactNode;
}

export interface ToolActivityCardProps {
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ReactNode;
  indentContent?: boolean;
  status?: string;
  summary: React.ReactNode;
}

export function ActivityDisclosurePaddedRegion({
  children,
  className,
  padding = "default",
}: ActivityDisclosurePaddedRegionProps) {
  const containerClassName = clsx("min-w-0 text-size-chat", className);
  if (padding === "offset") {
    return (
      <div
        className={clsx(containerClassName, "relative overflow-visible py-0")}
      >
        {children}
      </div>
    );
  }
  return <div className={clsx(containerClassName, "py-0")}>{children}</div>;
}

export function ActivityDisclosureChevron({
  expanded,
}: ActivityDisclosureChevronProps) {
  return (
    <ChevronRightIcon
      aria-hidden={true}
      className={clsx(
        "icon-2xs shrink-0 text-token-input-placeholder-foreground opacity-0",
        "group-hover/activity-header:opacity-100 group-hover/activity-header:text-token-foreground",
        "group-focus-visible/activity-header:opacity-100 group-focus-visible/activity-header:text-token-foreground",
        "transition-transform duration-300",
        expanded && "rotate-90 opacity-100",
      )}
    />
  );
}

export function ActivityDisclosureHeaderRow({
  accessory,
  children,
  className,
  disclosure,
  testId,
}: ActivityDisclosureHeaderRowProps) {
  const content = (
    <>
      <span className="text-size-chat flex min-w-0 shrink items-center gap-1.5 truncate">
        {children}
      </span>
      {accessory}
      {disclosure == null ? null : (
        <ActivityDisclosureChevron expanded={disclosure.expanded} />
      )}
    </>
  );
  const interactiveClassName = disclosure != null && "cursor-interaction";
  const headerClassName = clsx(
    "group/activity-header inline-flex min-w-0 max-w-full self-start items-center gap-1.5 p-0 text-left",
    interactiveClassName,
    className,
  );
  if (disclosure == null) {
    return (
      <div className={headerClassName} data-testid={testId}>
        {content}
      </div>
    );
  }
  return (
    <button
      type="button"
      className={headerClassName}
      data-testid={testId}
      aria-expanded={disclosure.expanded}
      onClick={disclosure.onToggle}
    >
      {content}
    </button>
  );
}

export const ToolActivityDisclosureHeader = ActivityDisclosureHeaderRow;

export function ActivityDisclosureLayout({
  body,
  className,
  header,
  ...rest
}: ActivityDisclosureLayoutProps) {
  return (
    <ActivityDisclosurePaddedRegion padding="offset">
      <div {...rest} className={clsx("flex min-w-0 flex-col", className)}>
        {header}
        {body}
      </div>
    </ActivityDisclosurePaddedRegion>
  );
}

export function useMeasuredElementHeight<
  TElement extends HTMLElement = HTMLElement,
>() {
  const [elementHeightPx, setElementHeightPx] = React.useState(0);
  const setMeasuredHeight = React.useCallback((nextHeightPx: number) => {
    setElementHeightPx((currentHeightPx) =>
      currentHeightPx === nextHeightPx ? currentHeightPx : nextHeightPx,
    );
  }, []);
  const resizeObserverRef = useResizeObserverRef<TElement>((entry, element) => {
    setMeasuredHeight(
      getResizeObserverEntrySize(entry).height || element.scrollHeight,
    );
  });
  const elementRef = React.useCallback(
    (element: TElement | null) => {
      if (element != null) setMeasuredHeight(element.scrollHeight);
      resizeObserverRef(element);
    },
    [resizeObserverRef, setMeasuredHeight],
  );
  return {
    elementHeightPx,
    elementRef,
  };
}

export const useDisclosureContentHeight = useMeasuredElementHeight;

export function ToolActivityCard({
  children,
  defaultExpanded = false,
  icon,
  indentContent = true,
  status,
  summary,
}: ToolActivityCardProps) {
  const [runningCollapsed, setRunningCollapsed] = React.useState(false);
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const { elementHeightPx, elementRef } = useMeasuredElementHeight();
  const isRunning = status === "running";
  const hasBody = children != null;
  const isExpanded = hasBody && (isRunning ? !runningCollapsed : expanded);
  const disclosure = hasBody
    ? {
        expanded: isExpanded,
        onToggle: () => {
          if (isRunning) {
            setRunningCollapsed((value) => !value);
          } else {
            setExpanded((value) => !value);
          }
        },
      }
    : undefined;
  const shimmerSummary = (
    <ShimmerText
      active={isRunning}
      className="text-size-chat min-w-0 truncate text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground"
    >
      {summary}
    </ShimmerText>
  );
  const header = (
    <ActivityDisclosureHeaderRow disclosure={disclosure}>
      {icon}
      {shimmerSummary}
    </ActivityDisclosureHeaderRow>
  );
  const body = hasBody ? (
    <motion.div
      initial={false}
      animate={{
        height: isExpanded ? elementHeightPx : 0,
        opacity: isExpanded ? 1 : 0,
      }}
      aria-hidden={!isExpanded}
      inert={!isExpanded}
      className={isExpanded ? "overflow-visible" : "overflow-hidden"}
      style={{ pointerEvents: isExpanded ? "auto" : "none" }}
      transition={activityDisclosureTransition}
    >
      <div
        ref={elementRef}
        className={clsx(
          "flex flex-col gap-2 pt-2 pb-1",
          indentContent && "pl-6",
        )}
      >
        {children}
      </div>
    </motion.div>
  ) : null;
  return <ActivityDisclosureLayout header={header} body={body} />;
}

export function initActivityDisclosureChevronChunk(): void {}

export function initActivityDisclosureHeaderRowChunk(): void {}

export function initActivityDisclosureLayoutChunk(): void {}

export function initActivityDisclosurePaddedRegionChunk(): void {}

export function initDisclosureContentHeightChunk(): void {}

export function initToolActivityDisclosureChunk(): void {
  initThinkingShimmerChunk();
  initActivityDisclosureChevronChunk();
  initActivityDisclosureHeaderRowChunk();
  initActivityDisclosureLayoutChunk();
  initActivityDisclosurePaddedRegionChunk();
  initDisclosureContentHeightChunk();
}

export { initThinkingShimmerChunk, ShimmerText, ThinkingShimmerMessage };
