// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// ReasoningItem disclosure: streaming "Thinking" label + collapsible markdown reasoning body.

import * as React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import {
  ActivityDisclosureLayout,
  ActivityDisclosureHeaderRow,
  AnimatedActivityLabel,
  AutoScrollingActivityList,
  ConversationMarkdown,
  useDisclosureContentHeight,
  activityDisclosureTransition,
} from "../../boundaries/onboarding-commons-externals.facade";
import {
  OrderedListGroup,
  groupOrderedListItems,
  stripBoldPrefix,
  stripReasoningHeadingPrefix,
} from "./reasoning-markdown-helpers";
import { renderThinkingLabel, useThinkingDuration } from "./reasoning-timing";

export {
  OrderedListGroup,
  extractReasoningHeading,
  groupOrderedListItems,
  orderedListPadding,
  stripBoldPrefix,
  stripReasoningHeadingPrefix,
} from "./reasoning-markdown-helpers";
export { renderThinkingLabel, useThinkingDuration } from "./reasoning-timing";

export function initReasoningItemChunk(): void {}

export interface ReasoningItemData {
  content: string;
  completed: boolean;
}

export interface ReasoningItemProps {
  item: ReasoningItemData;
  conversationId: string;
  cwd: string | null;
  hideCodeBlocks?: boolean;
}

export function ReasoningItem(props: ReasoningItemProps) {
  const { item, conversationId, cwd, hideCodeBlocks } = props;
  const isStreaming = !item.completed;
  const elapsed = useThinkingDuration(isStreaming);
  const strippedContent = stripReasoningHeadingPrefix(item.content);
  const label = renderThinkingLabel(isStreaming, elapsed);
  const [expanded, setExpanded] = React.useState(isStreaming);
  const hasPreview = !isStreaming && !!strippedContent;
  const streamingContent = stripBoldPrefix(item.content).trimStart();
  const shouldShowBody = isStreaming ? !!streamingContent : expanded;
  const bodyContent = isStreaming ? streamingContent : strippedContent;
  const { elementHeightPx, elementRef } = useDisclosureContentHeight();

  const collapseWhenIdle = React.useEffectEvent((value: boolean) =>
    setExpanded(value),
  );
  React.useEffect(() => {
    if (!isStreaming) collapseWhenIdle(false);
  }, [isStreaming]);

  const bodyHeight = shouldShowBody ? elementHeightPx : 0;
  const markdownClassName = clsx(
    "text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant",
    "break-words text-size-chat [&_*]:text-size-chat [&>h1]:mt-2 [&>h2]:mt-2 [&>h3]:mt-2 [&>h1+*]:mt-1 [&>h2+*]:mt-1 [&>h3+*]:mt-1 [&>p+p]:mt-1",
  );

  const markdownComponents = {
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="m-0 has-[.inline-markdown]:py-0.5">{children}</p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="m-0 font-semibold">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="m-0 font-semibold">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="m-0 font-semibold">{children}</h3>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-0 list-disc pl-4">{children}</ul>
    ),
    ol: ({
      children,
      start,
    }: {
      children?: React.ReactNode;
      start?: number;
    }) => (
      <>
        {groupOrderedListItems(React.Children.toArray(children), start).map(
          OrderedListGroup,
        )}
      </>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
      <li className="m-0">{children}</li>
    ),
  };

  const markdownNode = (
    <ConversationMarkdown
      className={markdownClassName}
      cwd={cwd}
      hideCodeBlocks={hideCodeBlocks}
      isStreaming={isStreaming}
      conversationId={conversationId}
      components={markdownComponents}
    >
      {bodyContent}
    </ConversationMarkdown>
  );

  const disclosure = hasPreview
    ? { expanded, onToggle: () => setExpanded((value) => !value) }
    : undefined;

  const headerClassName = clsx(
    "text-token-conversation-header",
    "text-size-chat truncate group-hover/activity-header:text-token-foreground",
  );
  const headerRow = (
    <ActivityDisclosureHeaderRow disclosure={disclosure}>
      <AnimatedActivityLabel active={isStreaming} className={headerClassName}>
        {label}
      </AnimatedActivityLabel>
    </ActivityDisclosureHeaderRow>
  );

  const animateStyle = { height: bodyHeight, opacity: shouldShowBody ? 1 : 0 };
  const overflowClassName = clsx(
    shouldShowBody ? "overflow-visible" : "overflow-hidden",
  );
  const bodyStyle: React.CSSProperties = {
    pointerEvents: shouldShowBody ? "auto" : "none",
  };

  const activityList = shouldShowBody ? (
    <AutoScrollingActivityList
      items={[{ key: "reasoning-markdown", node: markdownNode }]}
      autoScrollToBottom={isStreaming}
      contentClassName="gap-0"
      maxHeightByState={{
        preview: "8.75rem",
        expanded: "8.75rem",
        collapsed: "0px",
      }}
      viewState="expanded"
      className="[--edge-fade-distance:1rem]"
    />
  ) : null;

  const body = (
    <motion.div
      initial={false}
      animate={animateStyle}
      transition={activityDisclosureTransition}
      className={overflowClassName}
      style={bodyStyle}
    >
      <div ref={shouldShowBody ? elementRef : null} className="pb-0">
        {activityList}
      </div>
    </motion.div>
  );

  return <ActivityDisclosureLayout header={headerRow} body={body} />;
}
