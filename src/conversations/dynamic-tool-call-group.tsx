// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Collapsible group of dynamic tool calls: shows a live/summary header (or a
// thinking fallback) and an expandable scrollable list of each call's row
// (localConversation / thinkingShimmer domains).
import type { ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { ThinkingShimmer } from "../ui/thinking-shimmer";
import {
  CodexAppToolIcon,
  AppPlaceholderIcon,
  findLatestLiveDynamicToolCall,
  dynamicToolCallGroupMaxHeight,
  codexAppToolNamespace,
} from "../boundaries/onboarding-commons-externals.facade";
import { ActivityScrollContainer } from "./activity-scroll-container";
import { CollapsibleActivitySummary } from "./collapsible-activity-summary";
import { DynamicToolCallRenderer } from "./dynamic-tool-call-row";
import { hasActiveLiveActivity } from "./tool-activity-grouping-helpers";
import {
  isSummaryOnlyInConversationGroup,
  buildCompletedSummaryPartKey,
  type DynamicToolCallItem,
  type ToolActivityVariant,
} from "./tool-activity-descriptors";

type GroupedDynamicToolCall = {
  item: DynamicToolCallItem;
  count: number;
  key: string;
};

// Zat: collapse repeated identical dynamic tool calls into counted entries.
export function dedupeDynamicToolCallItems(
  items: DynamicToolCallItem[],
): GroupedDynamicToolCall[] {
  const grouped: GroupedDynamicToolCall[] = [];
  for (const item of items) {
    const key = buildCompletedSummaryPartKey(item);
    const existing = grouped.find((entry) => entry.key === key);
    if (existing == null) grouped.push({ item, count: 1, key });
    else existing.count += 1;
  }
  return grouped;
}

// Yat: whether a dynamic tool call belongs to the Codex app namespace.
export function isCodexAppNamespace(item: DynamicToolCallItem): boolean {
  return item.namespace === codexAppToolNamespace;
}

// Xat: a single (optionally counted) dynamic tool call summary item.
export function DynamicToolCallSummaryItem({
  item,
  count,
  variant,
}: {
  item: DynamicToolCallItem;
  count: number;
  variant: ToolActivityVariant;
}) {
  const label = <DynamicToolCallRenderer item={item} variant={variant} />;
  const repeat =
    count > 1 ? (
      <span className="shrink-0 text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground">
        <FormattedMessage
          id="localConversation.dynamicToolCallGroup.repeatCount"
          defaultMessage=" {count} times"
          description="Repeat count shown after an activity label in a compact dynamic tool-call summary"
          values={{ count }}
        />
      </span>
    ) : null;
  return (
    <span className="inline-flex min-w-0 items-center gap-1">
      {label}
      {repeat}
    </span>
  );
}

// Jat: a separated summary segment within a compact group summary.
export function dynamicToolCallSummarySegment(
  entry: GroupedDynamicToolCall,
  index: number,
): ReactNode {
  return (
    <>
      {index > 0 ? (
        <FormattedMessage
          id="localConversation.dynamicToolCallGroup.separator"
          defaultMessage=" · "
          description="Separator between activities in a compact dynamic tool-call summary"
        />
      ) : null}
      <DynamicToolCallSummaryItem
        item={entry.item}
        count={entry.count}
        variant="summary-text"
      />
    </>
  );
}

// qat: the collapsed summary line for a dynamic tool call group.
export function CollapsedDynamicToolCallSummary({
  items,
}: {
  items: DynamicToolCallItem[];
}) {
  const grouped = dedupeDynamicToolCallItems(items);
  const first = grouped.at(0);
  if (first == null) return null;
  if (grouped.length === 1)
    return (
      <DynamicToolCallSummaryItem
        item={first.item}
        count={first.count}
        variant="summary"
      />
    );

  const allCodexApp = items.every(isCodexAppNamespace);
  const icon = allCodexApp ? (
    <CodexAppToolIcon className="icon-xs shrink-0 text-token-text-secondary" />
  ) : (
    <AppPlaceholderIcon className="icon-xs shrink-0 text-token-text-secondary" />
  );
  return (
    <span className="text-size-chat inline-flex min-w-0 items-center gap-2">
      {icon}
      <span className="truncate text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground">
        {grouped.map(dynamicToolCallSummarySegment)}
      </span>
    </span>
  );
}

export type DynamicToolCallGroupProps = {
  conversationId?: string;
  enableTimelineTargets?: boolean;
  items: DynamicToolCallItem[];
  isActive: boolean;
  showThinkingFallback?: boolean;
  thinkingFallbackMessage?: ReactNode;
};

// Kat: the collapsible group of dynamic tool calls.
export function DynamicToolCallGroup({
  conversationId,
  enableTimelineTargets = false,
  items,
  isActive,
  showThinkingFallback = false,
  thinkingFallbackMessage,
}: DynamicToolCallGroupProps) {
  const lastItem = items.at(-1);
  if (lastItem == null) return null;

  const hasLiveActivity = hasActiveLiveActivity({ items, isActive });
  const activeItem = hasLiveActivity
    ? (findLatestLiveDynamicToolCall(items) ?? lastItem)
    : null;
  const allSummaryOnly = items.every(isSummaryOnlyInConversationGroup);
  const canExpand = !allSummaryOnly;

  const summaryKey = showThinkingFallback
    ? "thinking"
    : activeItem == null
      ? `completed:${lastItem.callId}:${items.length}`
      : `active:${activeItem.callId}`;

  const summary = showThinkingFallback ? (
    <span className="text-size-chat inline-flex min-w-0 items-center text-token-conversation-summary-trailing group-hover/activity-header:text-token-foreground">
      <span aria-hidden={true} className="h-4 w-0 shrink-0" />
      <ThinkingShimmer className="min-w-0 truncate">
        {thinkingFallbackMessage ?? (
          <FormattedMessage
            id="thinkingShimmer.default"
            defaultMessage="Thinking"
            description="Default placeholder shown while the assistant is thinking"
          />
        )}
      </ThinkingShimmer>
    </span>
  ) : activeItem == null ? (
    <CollapsedDynamicToolCallSummary items={items} />
  ) : (
    <DynamicToolCallRenderer
      item={{ ...activeItem, completed: false }}
      variant="summary"
    />
  );

  const summaryTransition = isActive
    ? showThinkingFallback || activeItem != null
      ? "deferred"
      : "immediate"
    : "static";
  const shouldAnimateInitialCollapse =
    isActive && canExpand && summaryKey !== "thinking";

  const scrollItems = items.map((item) => ({
    key: item.callId ?? "",
    node: (
      <DynamicToolCallRenderer
        conversationId={conversationId}
        enableTimelineTargets={enableTimelineTargets}
        item={item}
      />
    ),
  }));

  const body = (
    <div
      data-testid="dynamic-tool-call-group-body"
      className="-mx-2.5 mt-1 text-token-conversation-body [&_*]:text-token-non-assistant-body-descendant"
    >
      <ActivityScrollContainer
        items={scrollItems}
        autoScrollToBottom={false}
        className="text-size-chat rounded-none border-0 px-2.5 font-sans text-token-description-foreground/80 [&_*]:text-token-description-foreground/80"
        maxHeightByState={dynamicToolCallGroupMaxHeight}
        viewState="expanded"
      />
    </div>
  );

  return (
    <CollapsibleActivitySummary
      canExpand={canExpand}
      summary={summary}
      summaryKey={summaryKey}
      summaryTransition={summaryTransition}
      shouldAnimateInitialCollapse={shouldAnimateInitialCollapse}
    >
      {body}
    </CollapsibleActivitySummary>
  );
}
