// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js
// Pull request composer footer button primitive.
import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import { Button } from "../../ui/button";
import { pullRequestFooterClasses } from "./classes";
import { PullRequestFooterItemContent } from "./content";
import type {
  ComposerFooterControlCollapse,
  ComposerFooterControlIndicator,
} from "../project-selector/types";

export interface PullRequestFooterItemButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  categoryLabel?: ReactNode;
  collapse?: ComposerFooterControlCollapse;
  icon?: ReactNode;
  indicator?: ComposerFooterControlIndicator;
  value?: ReactNode;
  valueClassName?: string;
}

export function PullRequestFooterItemButton({
  categoryLabel,
  className,
  collapse = "none",
  icon,
  indicator = "none",
  value,
  valueClassName,
  ...buttonProps
}: PullRequestFooterItemButtonProps) {
  return (
    <Button
      className={clsx(
        pullRequestFooterClasses.externalFooterItem,
        "min-w-0",
        className,
      )}
      color="ghost"
      size="composerSm"
      {...buttonProps}
    >
      <PullRequestFooterItemContent
        categoryLabel={categoryLabel}
        collapse={collapse}
        icon={icon}
        indicator={indicator}
        value={value}
        valueClassName={valueClassName}
      />
    </Button>
  );
}
