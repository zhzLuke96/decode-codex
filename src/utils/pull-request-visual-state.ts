// Restored from ref/webview/assets/pull-request-visual-state-DB2RsvTJ.js
// pull-request-visual-state-DB2RsvTJ chunk restored from the Codex webview bundle.
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~l5ab2ey0-8q2fQ40X.js.
import React from "react";
import clsx from "clsx";
import { XIcon } from "../icons/x-icon";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { Badge } from "./badge";

export function initPullRequestVisualStateChunk(): void {}

export function initPullRequestStatusTooltipChunk(): void {}

type PullRequestStatusTooltipProps = {
  align?: "start" | "center" | "end";
  badge?: React.ReactNode;
  children: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  dismissLabel?: string;
  fallbackShortcut?: React.ReactNode;
  fallbackTooltipContent?: React.ReactNode;
  onDismiss?: () => void;
  open?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  title?: React.ReactNode;
  tooltipClassName?: string;
};

const PULL_REQUEST_STATUS_RICH_TOOLTIP_CLASS_NAME =
  "relative max-w-64 !rounded-2xl !border-0 !bg-token-charts-blue px-4 py-3 !text-token-button-foreground shadow-lg dark:!text-token-foreground before:pointer-events-none before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rotate-45 before:rounded-[1px] before:!bg-token-charts-blue before:content-['']";
const PULL_REQUEST_STATUS_TOOLTIP_BADGE_CLASS_NAME =
  "!bg-token-dropdown-background px-1.5 py-0.5 text-xs font-bold leading-[13px] tracking-[0.06px] !text-token-charts-blue dark:!text-token-foreground";
const PULL_REQUEST_STATUS_DISMISS_BUTTON_CLASS_NAME =
  "-me-1 -mt-1 h-6 w-6 !rounded-md !p-0 !text-token-button-foreground hover:!bg-token-button-foreground/10 hover:!text-token-button-foreground dark:!text-token-foreground dark:hover:!bg-token-foreground/10 dark:hover:!text-token-foreground";

export function PullRequestStatusTooltip({
  align,
  badge,
  children,
  description,
  disabled = false,
  dismissLabel,
  fallbackShortcut,
  fallbackTooltipContent,
  onDismiss,
  open,
  side,
  sideOffset,
  title,
  tooltipClassName,
}: PullRequestStatusTooltipProps): React.ReactElement {
  const [fallbackOpen, setFallbackOpen] = React.useState(false);
  const hasFallbackTooltip = fallbackTooltipContent != null;
  const richTooltipOpen = open === true;
  const tooltipOpen = richTooltipOpen || (hasFallbackTooltip && fallbackOpen);

  return React.createElement(Tooltip, {
    align: richTooltipOpen ? align : undefined,
    disabled,
    interactive: richTooltipOpen,
    onOpenChange:
      richTooltipOpen || !hasFallbackTooltip ? undefined : setFallbackOpen,
    open: tooltipOpen,
    shortcut: richTooltipOpen ? undefined : fallbackShortcut,
    side: richTooltipOpen ? side : undefined,
    sideOffset: richTooltipOpen ? sideOffset : undefined,
    tooltipBodyClassName: richTooltipOpen ? "w-full" : undefined,
    tooltipClassName: richTooltipOpen
      ? clsx(PULL_REQUEST_STATUS_RICH_TOOLTIP_CLASS_NAME, tooltipClassName)
      : undefined,
    tooltipContent: richTooltipOpen
      ? React.createElement(PullRequestStatusTooltipBody, {
          badge,
          description,
          dismissLabel,
          onDismiss,
          title,
        })
      : (fallbackTooltipContent ?? ""),
    children,
  });
}

type PullRequestStatusTooltipBodyProps = {
  badge?: React.ReactNode;
  description?: React.ReactNode;
  dismissLabel?: string;
  onDismiss?: () => void;
  title?: React.ReactNode;
};

function PullRequestStatusTooltipBody({
  badge,
  description,
  dismissLabel,
  onDismiss,
  title,
}: PullRequestStatusTooltipBodyProps): React.ReactElement {
  const handleDismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onDismiss?.();
  };
  const badgeNode = badge
    ? React.createElement(
        Badge,
        { className: PULL_REQUEST_STATUS_TOOLTIP_BADGE_CLASS_NAME },
        badge,
      )
    : null;
  const titleNode = React.createElement(
    "div",
    {
      className:
        "truncate text-base leading-[18px] font-medium tracking-[-0.08px]",
    },
    title,
  );
  const header = React.createElement(
    "div",
    { className: "flex min-w-0 flex-1 items-center gap-2" },
    badgeNode,
    titleNode,
  );
  const dismissButton = React.createElement(
    Button,
    {
      className: PULL_REQUEST_STATUS_DISMISS_BUTTON_CLASS_NAME,
      color: "ghost",
      size: "icon",
      "aria-label": dismissLabel,
      onClick: handleDismiss,
    },
    React.createElement(XIcon, { className: "icon-xs" }),
  );
  const descriptionNode = description
    ? React.createElement(
        "div",
        { className: "pe-4 text-base leading-[18px] tracking-[-0.08px]" },
        description,
      )
    : null;

  return React.createElement(
    "div",
    { className: "flex w-full min-w-0 flex-col gap-2" },
    React.createElement(
      "div",
      { className: "flex items-start gap-3" },
      header,
      dismissButton,
    ),
    descriptionNode,
  );
}

export function getPullRequestMergeVisualState({
  canMerge,
  ciStatus,
  hasMergeConflicts = false,
  status,
}: {
  canMerge: boolean;
  ciStatus: "passing" | "failing" | string | null;
  hasMergeConflicts?: boolean;
  status: "merged" | "draft" | string | null;
}): "merged" | "draft" | "failing" | "successful" | "ready" | "in_progress" {
  return status === "merged"
    ? "merged"
    : status === "draft"
      ? "draft"
      : hasMergeConflicts || ciStatus === "failing"
        ? "failing"
        : ciStatus === "passing" && !canMerge
          ? "successful"
          : canMerge
            ? "ready"
            : "in_progress";
}

export function getPullRequestVisualState({
  hasOpenPr,
  isDraft,
  url,
}: {
  hasOpenPr: boolean;
  isDraft: boolean;
  url?: string | null;
}): "draft" | "open" | "merged" | null {
  return hasOpenPr
    ? isDraft
      ? "draft"
      : "open"
    : url == null
      ? null
      : "merged";
}
