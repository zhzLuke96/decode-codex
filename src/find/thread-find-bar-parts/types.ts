// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js
// Shared types for the restored thread find bar parts.
import type {
  ThreadFindBrowserStatus,
  ThreadFindBrowserTarget,
} from "../thread-find-atoms";

export type ThreadFindScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set<TValue>(
    signal: unknown,
    value: TValue | ((previous: TValue) => TValue),
    key?: unknown,
  ): void;
};

export type BrowserFindCommand = {
  query?: string;
  type: string;
};

export type BrowserFindStateMessage = {
  browserTabId?: string | null;
  conversationId?: string | null;
  state?: ThreadFindBrowserStatus;
};

export type { ThreadFindBrowserTarget };
