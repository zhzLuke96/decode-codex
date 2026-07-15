// Restored from ref/webview/assets/pull-request-check-rows-B2iGS9CB.js
// Pull request side-panel analytics helpers.
import { once } from "../../runtime/commonjs-interop";
import {
  initPullRequestActionEventRuntime,
  initPullRequestViewedEventRuntime,
  logScopedProductEvent,
  pullRequestActionEvent,
  pullRequestKindActionEvent,
  pullRequestViewedFromSidePanelEvent,
} from "../../runtime/pull-request-actions-runtime";
import type { PullRequestBoardItem, PullRequestSurface } from "./types";

type PullRequestActionParams = {
  action: string;
  item: PullRequestBoardItem;
  surface: PullRequestSurface;
};

type PullRequestKindActionParams = {
  kind: string;
  surface: PullRequestSurface;
};

export function trackPullRequestAction(
  scope: unknown,
  { action, item, surface }: PullRequestActionParams,
): void {
  logScopedProductEvent(scope, pullRequestActionEvent, {
    action,
    surface,
    state: item.state,
    isAuthor: item.isAuthor,
  });
}

export function logPullRequestViewedFromSidePanel(
  scope: unknown,
  { item, surface }: Omit<PullRequestActionParams, "action">,
): void {
  logScopedProductEvent(scope, pullRequestViewedFromSidePanelEvent, {
    surface,
    state: item.state,
    isAuthor: item.isAuthor,
  });
}

export function trackPullRequestKindAction(
  scope: unknown,
  { kind, surface }: PullRequestKindActionParams,
): void {
  logScopedProductEvent(scope, pullRequestKindActionEvent, { kind, surface });
}

export const initPullRequestAnalyticsChunk = once(() => {
  initPullRequestActionEventRuntime();
  initPullRequestViewedEventRuntime();
});
