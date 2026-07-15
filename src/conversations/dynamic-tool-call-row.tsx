// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Generic row + label for a dynamic tool call that lacks a specialized renderer,
// and the dispatcher that prefers a descriptor's renderer (localConversation domain).
import type { ReactNode } from "react";
import { noCase } from "no-case";
import { upperCaseFirst } from "upper-case-first";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { ThinkingShimmer } from "../ui/thinking-shimmer";
import { Button } from "../ui/button";
import { CodexAppToolIcon } from "../boundaries/onboarding-commons-externals.facade";
import {
  findToolActivityDescriptor,
  type DynamicToolCallItem,
  type ToolActivityVariant,
} from "./tool-activity-descriptors";

// Bat: completed-state labels for dynamic tools with known phrasing.
export const dynamicToolCallCompletedLabels: Record<string, string> = {
  automation_update: "Scheduled task updated",
  load_workspace_dependencies: "Loaded workspace dependencies",
  pia_slackbot_dm: "Pia Slackbot DM",
  read_thread_terminal: "Read thread terminal",
};

// Vat: in-progress labels for dynamic tools with known phrasing.
export const dynamicToolCallActiveLabels: Record<string, string> = {
  automation_update: "Updating scheduled task",
  load_workspace_dependencies: "Loading workspace dependencies",
  pia_slackbot_dm: "Pia Slackbot DM",
  read_thread_terminal: "Reading thread terminal",
};

function humanizeToolName(tool: string): string {
  return upperCaseFirst(noCase(tool));
}

// Rat: the localized synthetic label for a dynamic tool call.
export function DynamicToolCallLabel(item: DynamicToolCallItem) {
  const toolName = item.completed
    ? (dynamicToolCallCompletedLabels[item.tool] ?? humanizeToolName(item.tool))
    : (dynamicToolCallActiveLabels[item.tool] ?? humanizeToolName(item.tool));
  return (
    <FormattedMessage
      id="localConversation.dynamicToolCall"
      defaultMessage="{toolName}"
      description="Synthetic item shown for a dynamic tool call without a specialized renderer."
      values={{ toolName }}
    />
  );
}

export type DynamicToolCallRowProps = {
  item: DynamicToolCallItem;
  onClick?: () => void;
  variant?: ToolActivityVariant;
};

// Lat: fallback row/summary for a dynamic tool call.
export function DynamicToolCallRow({
  item,
  onClick,
  variant = "row",
}: DynamicToolCallRowProps) {
  const isCodexApp =
    item.namespace === "codex_app" && variant !== "summary-text";
  const hoverClassName =
    variant === "row"
      ? "group-hover:text-token-foreground"
      : "group-hover/activity-header:text-token-foreground";
  const labelClassName = clsx(
    "text-size-chat text-token-conversation-summary-trailing",
    isCodexApp && "flex min-w-0 items-center gap-2",
    hoverClassName,
  );

  const icon = isCodexApp ? (
    <CodexAppToolIcon className="icon-xs shrink-0 text-token-text-secondary" />
  ) : null;

  const shimmer = (
    <ThinkingShimmer
      active={!item.completed}
      className={clsx(isCodexApp && "min-w-0 truncate")}
    >
      <DynamicToolCallLabel {...item} />
    </ThinkingShimmer>
  );

  const content: ReactNode = (
    <span className={labelClassName}>
      {icon}
      {shimmer}
    </span>
  );

  if (variant !== "row") return content;

  if (onClick != null) {
    return (
      <Button
        color="ghostTertiary"
        className="group !inline-flex max-w-full !gap-0 !rounded-none !border-0 !bg-transparent !p-0 text-left !whitespace-normal [font:inherit] focus-visible:ring-1 focus-visible:ring-token-focus-border"
        onClick={onClick}
      >
        {content}
      </Button>
    );
  }

  return <div className="group">{content}</div>;
}

export type DynamicToolCallRendererProps = {
  conversationId?: string;
  enableTimelineTargets?: boolean;
  item: DynamicToolCallItem;
  variant?: ToolActivityVariant;
};

// bK: render a dynamic tool call, preferring its descriptor's renderer.
export function DynamicToolCallRenderer({
  item,
  variant = "row",
}: DynamicToolCallRendererProps) {
  const rendered = findToolActivityDescriptor(item)?.render?.(item, variant);
  if (rendered != null) return rendered as ReactNode;
  return <DynamicToolCallRow item={item} variant={variant} />;
}
