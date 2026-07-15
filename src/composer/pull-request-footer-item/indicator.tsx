// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js
// Pull request footer pending and chevron indicators.
import clsx from "clsx";

import { ChevronIcon } from "../../icons/chevron-icon";
import { Spinner } from "../../ui/spinner";
import { pullRequestFooterClasses } from "./classes";
import type { ComposerFooterControlIndicator } from "../project-selector/types";

export interface PullRequestFooterIndicatorProps {
  chevronSizeClassName: string;
  indicator: ComposerFooterControlIndicator;
}

export function PullRequestFooterIndicator({
  chevronSizeClassName,
  indicator,
}: PullRequestFooterIndicatorProps) {
  switch (indicator) {
    case "none":
      return null;
    case "pending":
      return (
        <Spinner className="icon-xs shrink-0 text-token-input-placeholder-foreground" />
      );
    case "chevron": {
      const className = clsx(
        pullRequestFooterClasses.externalFooterItemChevron,
        chevronSizeClassName,
        "shrink-0 text-token-input-placeholder-foreground",
      );
      return <ChevronIcon className={className} />;
    }
    case "collapsible-chevron": {
      const className = clsx(
        chevronSizeClassName,
        "shrink-0 text-token-input-placeholder-foreground",
      );
      return (
        <span
          className={clsx(
            pullRequestFooterClasses.secondaryChevron,
            pullRequestFooterClasses.externalFooterItemChevron,
            "inline-flex",
          )}
        >
          <ChevronIcon className={className} />
        </span>
      );
    }
  }
}
