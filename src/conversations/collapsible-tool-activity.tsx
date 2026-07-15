// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Collapsible activity row used by tool-call timelines.
import { useState, type ReactNode } from "react";
import clsx from "clsx";
import { ChevronRightIcon } from "../icons/chevron-right-icon";

export type CollapsibleToolActivityStatus =
  | "running"
  | "completed"
  | "failed"
  | "error"
  | "warning"
  | "queued"
  | string;

export interface CollapsibleToolActivityProps {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
  defaultExpanded?: boolean;
  icon?: ReactNode;
  indentContent?: boolean;
  status?: CollapsibleToolActivityStatus;
  summary: ReactNode;
}

function statusClassName(status: CollapsibleToolActivityStatus | undefined) {
  switch (status) {
    case "running":
    case "queued":
      return "text-token-text-secondary";
    case "failed":
    case "error":
      return "text-token-text-error";
    case "warning":
      return "text-token-text-warning";
    case "completed":
      return "text-token-text-tertiary";
    default:
      return "text-token-text-secondary";
  }
}

export function CollapsibleToolActivity({
  children,
  className,
  contentClassName,
  defaultExpanded = false,
  icon,
  indentContent = true,
  status,
  summary,
}: CollapsibleToolActivityProps) {
  const hasContent = children != null;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const isExpanded = hasContent && expanded;

  return (
    <div
      className={clsx(
        "group/activity overflow-hidden rounded-lg border border-token-border bg-token-input-background/50 text-token-foreground",
        className,
      )}
    >
      <button
        type="button"
        className="flex h-9 w-full cursor-interaction items-center gap-2 px-3 text-left text-size-chat hover:bg-token-list-hover-background/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:ring-inset"
        aria-expanded={isExpanded}
        disabled={!hasContent}
        onClick={() => {
          if (hasContent) setExpanded((value) => !value);
        }}
      >
        <span
          className={clsx(
            "flex size-5 shrink-0 items-center justify-center",
            statusClassName(status),
          )}
        >
          {icon}
        </span>
        <span className="min-w-0 flex-1 truncate">{summary}</span>
        {hasContent ? (
          <ChevronRightIcon
            aria-hidden={true}
            className={clsx(
              "icon-xs shrink-0 text-token-text-tertiary transition-transform",
              isExpanded && "rotate-90",
            )}
          />
        ) : null}
      </button>
      {isExpanded ? (
        <div
          className={clsx(
            "min-w-0 border-t border-token-border-light",
            indentContent && "pl-10",
            contentClassName,
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
