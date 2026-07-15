// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Selects the active review file and scrolls it into view, clearing any pending
// comment focus and resetting the thread-find / file-filter queries first.
import { setThreadFindQuery } from "../find/thread-find-store";
import {
  activeReviewFilePathAtom,
  pendingReviewCommentAtom,
  scrollReviewFileIntoView,
  setReviewFileFilterQuery,
} from "../boundaries/onboarding-commons-externals.facade";

const SCROLL_REVIEW_FILE_MAX_ATTEMPTS = 200;

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

export function setActiveReviewFilePath(
  scope: AppScope,
  path: string | undefined,
): void {
  scope.set(pendingReviewCommentAtom, undefined);
  scope.set(activeReviewFilePathAtom, path);
}

export function revealReviewFile(scope: AppScope, path: string): void {
  setActiveReviewFilePath(scope, path);
  setThreadFindQuery(scope, "");
  setReviewFileFilterQuery(scope, "");
  requestAnimationFrame(() => {
    scrollReviewFileIntoView(scope, path, SCROLL_REVIEW_FILE_MAX_ATTEMPTS);
  });
}
