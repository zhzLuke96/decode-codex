// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Rounded floating pill used for review bulk actions, plus the portal wrapper that
// positions it (anchored when collapsed, or portaled to an expanded-actions target
// when the review panel is expanded).

import { createPortal } from "react-dom";
import { useContext } from "react";
import type { CSSProperties, ReactNode } from "react";
import { classNames } from "../utils/class-names";
import {
  useAtomValue,
  reviewExpandedAtom,
  reviewExpandedBottomInset,
  reviewExpandedActionsPortalContext,
} from "../boundaries/onboarding-commons-externals.facade";

interface FloatingActionPillProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function FloatingActionPill({
  children,
  className,
  style,
}: FloatingActionPillProps) {
  return (
    <div
      className={classNames("pointer-events-none -translate-x-1/2", className)}
      style={style}
    >
      <div className="pointer-events-auto flex items-center justify-center gap-2 rounded-full bg-token-dropdown-background/90 px-2 py-1 shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}

interface FloatingActionPortalProps {
  children?: ReactNode;
  expandedActionsPortalTarget?: HTMLElement | null;
}

export function FloatingActionPortal({
  children,
  expandedActionsPortalTarget,
}: FloatingActionPortalProps) {
  const isReviewExpanded = useAtomValue<boolean>(reviewExpandedAtom);
  const contextPortalTarget = useContext<HTMLElement | null>(
    reviewExpandedActionsPortalContext,
  );

  if (children == null) return null;

  if (!isReviewExpanded) {
    return (
      <FloatingActionPill className="absolute bottom-[20px] left-1/2 z-30">
        {children}
      </FloatingActionPill>
    );
  }

  const pill = (
    <FloatingActionPill
      className="absolute left-1/2 z-40"
      style={{ bottom: `calc(var(${reviewExpandedBottomInset}, 0px) + 8px)` }}
    >
      {children}
    </FloatingActionPill>
  );

  const target =
    expandedActionsPortalTarget ?? contextPortalTarget ?? document.body;
  return createPortal(pill, target);
}
