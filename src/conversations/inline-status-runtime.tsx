// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared inline status divider used by synthetic conversation events.
import type { ReactNode, SVGProps } from "react";
import { classNames } from "../utils/class-names";

export interface InlineStatusDividerProps {
  className?: string;
  icon?: ReactNode;
  message: ReactNode;
  trailingContent?: ReactNode;
}

export function InlineStatusDivider({
  className,
  icon,
  message,
  trailingContent,
}: InlineStatusDividerProps) {
  return (
    <div
      className={classNames(
        "my-2 flex items-center justify-center gap-1.5 text-xs text-token-text-tertiary",
        className,
      )}
    >
      {icon ? <span className="inline-flex shrink-0">{icon}</span> : null}
      <span className="min-w-0 text-center">{message}</span>
      {trailingContent ? (
        <span className="inline-flex shrink-0 items-center">
          {trailingContent}
        </span>
      ) : null}
    </div>
  );
}

export function ModelChangedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.167 6.667H14.5M11.833 4l2.667 2.667-2.667 2.666"
        stroke="currentColor"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.833 13.333H5.5M8.167 10.667 5.5 13.333 8.167 16"
        stroke="currentColor"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function initInlineStatusRuntime(): void {}
