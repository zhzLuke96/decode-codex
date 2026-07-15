// Restored from ref/webview/assets/browser-sidebar-state-C7hH17Ps.js
import {
  _useHostConfigJ as isBrowserCommentAttachment,
  _useHostConfigX as getBrowserCommentTabId,
} from "../boundaries/use-host-config.facade";
import { vscodeApiF } from "../boundaries/vscode-api";
import { uniq } from "../utils/uniq";
type BrowserCommentAttachment = Record<string, unknown>;
type ClearBrowserSidebarCommentsOptions = {
  browserTabId?: number | string | null;
  browserConversationId?: string | null;
  fallbackBrowserConversationId?: string | null;
  comments: readonly BrowserCommentAttachment[];
  onCommentsChange: (comments: BrowserCommentAttachment[]) => void;
};
export function clearBrowserSidebarComments({
  browserTabId,
  browserConversationId,
  fallbackBrowserConversationId,
  comments,
  onCommentsChange,
}: ClearBrowserSidebarCommentsOptions): boolean {
  if (comments.length === 0) {
    return false;
  }
  onCommentsChange([]);
  const conversationId = browserConversationId ?? fallbackBrowserConversationId;
  const browserComments = comments.filter((comment) =>
    isBrowserCommentAttachment(comment),
  );
  if (conversationId == null || browserComments.length === 0) {
    return true;
  }
  const browserTabIds = uniq(
    browserComments
      .map(
        (comment) => getBrowserCommentTabId(comment) as number | string | null,
      )
      .filter((tabId): tabId is number | string => tabId != null),
  );
  const hasCommentWithoutTabId = browserComments.some(
    (comment) => getBrowserCommentTabId(comment) == null,
  );
  if (
    browserTabId != null &&
    hasCommentWithoutTabId &&
    !browserTabIds.includes(browserTabId)
  ) {
    browserTabIds.push(browserTabId);
  }
  if (browserTabIds.length === 0) {
    vscodeApiF.dispatchMessage("browser-sidebar-command", {
      browserTabId: browserTabId ?? undefined,
      conversationId,
      command: {
        type: "clear-comments",
      },
    });
    return true;
  }
  for (const tabId of browserTabIds) {
    vscodeApiF.dispatchMessage("browser-sidebar-command", {
      browserTabId: tabId,
      conversationId,
      command: {
        type: "clear-comments",
      },
    });
  }
  return true;
}
export const browserSidebarMode = {
  BROWSE: "browse",
  COMMENT: "comment",
} as const;

export function initBrowserSidebarStateChunk(): void {
  void browserSidebarMode;
}

export type BrowserSidebarMode =
  (typeof browserSidebarMode)[keyof typeof browserSidebarMode];
