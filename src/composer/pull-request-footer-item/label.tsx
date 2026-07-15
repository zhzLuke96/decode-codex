// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js
// Responsive label wrapper for pull request footer item values.
import type { ComponentPropsWithRef } from "react";
import clsx from "clsx";

import { pullRequestFooterClasses } from "./classes";
import type { ComposerFooterControlCollapse } from "../project-selector/types";

export type PullRequestFooterLabelProps = ComponentPropsWithRef<"span"> & {
  collapse?: ComposerFooterControlCollapse;
};

export function PullRequestFooterLabel({
  className,
  collapse = "none",
  ...spanProps
}: PullRequestFooterLabelProps) {
  let collapseClassName: string | undefined;
  switch (collapse) {
    case "none":
      collapseClassName = undefined;
      break;
    case "sm":
      collapseClassName = pullRequestFooterClasses.labelSm;
      break;
    case "xs":
      collapseClassName = pullRequestFooterClasses.labelXs;
      break;
    case "secondary":
      collapseClassName = clsx(
        pullRequestFooterClasses.labelSm,
        pullRequestFooterClasses.secondaryLabel,
      );
      break;
  }

  return <span className={clsx(collapseClassName, className)} {...spanProps} />;
}
