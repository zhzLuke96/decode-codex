// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Responsive root wrapper for pull request footer items.
import type { ComponentPropsWithRef } from "react";
import clsx from "clsx";

import {
  initPullRequestFooterClassesChunk,
  pullRequestFooterClasses,
} from "./classes";
import { PullRequestFooterLabel } from "./label";

export type PullRequestFooterRootProps = ComponentPropsWithRef<"div"> & {
  responsive?: boolean;
};

export function PullRequestFooterRoot({
  className,
  responsive = true,
  ...divProps
}: PullRequestFooterRootProps) {
  return (
    <div
      className={clsx(
        "select-none",
        responsive && pullRequestFooterClasses.footer,
        className,
      )}
      {...divProps}
    />
  );
}

export function initPullRequestFooterLayoutChunk(): void {
  initPullRequestFooterClassesChunk();
  void PullRequestFooterRoot;
  void PullRequestFooterLabel;
}
