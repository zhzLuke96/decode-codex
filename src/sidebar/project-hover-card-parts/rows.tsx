// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Shared project hover card row primitives.
import type { ReactNode } from "react";
import {
  classNames,
  RowActionChevronIcon,
} from "../../runtime/project-hover-card-runtime";
import type { RenderableProjectSourceRow } from "./types";

export function ProjectHoverCardInfoRow({
  allowWrap,
  icon,
  label,
}: {
  allowWrap?: boolean;
  icon: ReactNode;
  label: string;
}) {
  const labelClassName = classNames(
    "min-w-0 text-sm leading-5 text-token-foreground",
    allowWrap === true ? "break-words" : "truncate",
  );

  return (
    <ProjectHoverCardRow icon={icon}>
      <span className={labelClassName}>{label}</span>
    </ProjectHoverCardRow>
  );
}

export function ProjectHoverCardSourceRow({
  row,
}: {
  row: RenderableProjectSourceRow;
}) {
  const valueClassName = classNames(
    "min-w-0 flex-1 text-token-foreground",
    row.allowBreak === true ? "break-all" : "truncate",
  );

  return (
    <ProjectHoverCardRow
      actionLabel={row.actionLabel}
      icon={row.icon}
      onClick={row.onClick}
    >
      <span className="flex min-w-0 items-baseline text-sm leading-5">
        <span className={valueClassName}>{row.value}</span>
      </span>
    </ProjectHoverCardRow>
  );
}

export function ProjectHoverCardRow({
  actionLabel,
  align = "start",
  children,
  className,
  icon,
  onClick,
  showActionIndicator = onClick != null,
}: {
  actionLabel?: string;
  align?: "center" | "start";
  children: ReactNode;
  className?: string;
  icon: ReactNode;
  onClick?: () => void;
  showActionIndicator?: boolean;
}) {
  const rowClassName = classNames(
    "group/project-hover-card-row grid min-w-0 gap-x-1.5 rounded-md",
    align === "center" ? "items-center" : "items-start",
    showActionIndicator
      ? "grid-cols-[1rem_minmax(0,1fr)_1.25rem]"
      : "grid-cols-[1rem_minmax(0,1fr)]",
    onClick != null &&
      "cursor-interaction hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    className,
  );
  const content = (
    <>
      <span className="[&svg]:icon-xs flex h-5 w-4 shrink-0 items-center justify-center text-token-description-foreground">
        {icon}
      </span>
      <span className="min-w-0">{children}</span>
      {showActionIndicator ? (
        <span className="flex h-5 w-5 items-center justify-center text-token-description-foreground opacity-0 group-hover/project-hover-card-row:opacity-100 group-focus-visible/project-hover-card-row:opacity-100">
          <RowActionChevronIcon className="icon-2xs" aria-hidden={true} />
        </span>
      ) : null}
    </>
  );

  return onClick == null ? (
    <div className={rowClassName}>{content}</div>
  ) : (
    <button
      type="button"
      className={classNames(rowClassName, "text-left")}
      aria-label={actionLabel}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
