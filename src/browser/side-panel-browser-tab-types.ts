// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared side-panel browser tab command types.

export interface AppStore {
  get(atom: unknown, key?: unknown): any;
  set(atom: unknown, value: unknown): void;
}

export type SidePanelTarget = string;

export interface OpenBrowserTabOptions {
  browserConversationId?: string | null;
  browserTabId?: string;
  browserHostDisplayName?: string;
  cwd?: string;
  insertAfterTabId?: string;
  browserTransferSourceConversationId?: string | null;
  browserTransferSourceBrowserTabId?: string;
}

export interface OpenOrCreateBrowserTabOptions {
  browserConversationId?: string | null;
  browserHostDisplayName?: string;
  browserTabId?: string;
  cwd?: string;
  hostId?: string;
  initialUrl?: string;
  initiator?: string;
  insertAfterTabId?: string;
  restore?: { browserStorageId: string } | null;
  source?: string;
  target?: SidePanelTarget;
}
