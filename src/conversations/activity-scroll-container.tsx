// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scrollable container with a vertical fade mask that hosts thinking / tool
// activity nodes, sizing itself by view state (thinkingShimmer domain).
import clsx from "clsx";
import type { ReactNode } from "react";

export type ActivityScrollViewState = "preview" | "collapsed" | "expanded";

export type ActivityScrollItem = {
  key: string;
  node: ReactNode;
};

export type ActivityScrollMaxHeightByState = {
  preview: number | string;
  collapsed: number | string;
  expanded: number | string;
};

export type ActivityScrollContainerProps = {
  items: ActivityScrollItem[];
  className?: string;
  contentClassName?: string;
  maxHeightByState: ActivityScrollMaxHeightByState;
  viewState?: ActivityScrollViewState;
  autoScrollToBottom?: boolean;
  disableMaxHeight?: boolean;
  allowHorizontalScroll?: boolean;
};

function ActivityScrollItemRow({ key, node }: ActivityScrollItem) {
  return <div key={key}>{node}</div>;
}

export function ActivityScrollContainer({
  items,
  className,
  contentClassName,
  maxHeightByState,
  viewState = "preview",
  autoScrollToBottom = true,
  disableMaxHeight = false,
  allowHorizontalScroll = false,
}: ActivityScrollContainerProps) {
  const maxHeight =
    viewState === "expanded"
      ? maxHeightByState.expanded
      : viewState === "collapsed"
        ? maxHeightByState.collapsed
        : maxHeightByState.preview;

  const containerClassName = clsx(
    "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem] overflow-y-auto",
    autoScrollToBottom && "flex flex-col-reverse",
    !allowHorizontalScroll && "overflow-x-hidden",
    className,
  );

  const containerStyle = disableMaxHeight ? undefined : { maxHeight };

  const contentClass = clsx(
    "flex flex-col gap-1",
    contentClassName,
    viewState === "preview" && "pb-1",
  );

  const content =
    viewState === "collapsed"
      ? null
      : items.map((item) => ActivityScrollItemRow(item));

  return (
    <div className={containerClassName} style={containerStyle}>
      <div className={contentClass}>{content}</div>
    </div>
  );
}

export function initActivityScrollContainerChunk(): void {}
