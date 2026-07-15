// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js
// Static pull request composer footer item primitive.
import type { ReactNode } from "react";
import clsx from "clsx";

import { pullRequestFooterClasses } from "./classes";
import { PullRequestFooterItemContent } from "./content";
import type { ComposerFooterControlCollapse } from "../project-selector/types";

export interface PullRequestFooterItemProps {
  categoryLabel?: ReactNode;
  className?: string;
  collapse?: ComposerFooterControlCollapse;
  icon?: ReactNode;
  value?: ReactNode;
  valueClassName?: string;
}

export function PullRequestFooterItem({
  categoryLabel,
  className,
  collapse = "none",
  icon,
  value,
  valueClassName,
}: PullRequestFooterItemProps) {
  return (
    <div
      className={clsx(
        pullRequestFooterClasses.externalFooterItem,
        "flex min-w-0 items-center gap-1",
        className,
      )}
    >
      <PullRequestFooterItemContent
        categoryLabel={categoryLabel}
        collapse={collapse}
        icon={icon}
        indicator="none"
        value={value}
        valueClassName={valueClassName}
      />
    </div>
  );
}
