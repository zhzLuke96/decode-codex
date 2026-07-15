// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import type { ReactNode } from "react";
import { classNames } from "../../../utils/class-names";

export interface PlanPillBarProps {
  children: ReactNode;
  action?: ReactNode;
  onClick?: () => void;
  expandedContent?: ReactNode;
  backgroundColorClassName?: string;
}

export function PlanPillBar({
  children,
  action,
  onClick,
  expandedContent,
  backgroundColorClassName,
}: PlanPillBarProps) {
  const interactionClassName = onClick && "cursor-interaction";
  const containerClassName = classNames(
    "bg-token-input-background/70 text-token-foreground border-token-border/80 relative overflow-clip border-x border-t backdrop-blur-sm transition-colors first:rounded-t-2xl",
    interactionClassName,
    backgroundColorClassName,
  );
  return (
    <div className={containerClassName} onClick={onClick}>
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between gap-1.5 py-1.5 pr-2 pl-3 text-sm font-normal">
          <div className="flex min-w-0 flex-1 items-center gap-1.5">
            {children}
          </div>
          <div className="flex min-w-fit shrink-0 items-center gap-1.5 select-none sm:ml-auto">
            {action}
          </div>
        </div>
        {expandedContent}
      </div>
    </div>
  );
}
