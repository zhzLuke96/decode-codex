// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Browser Use PiP helper types.

export type BrowserUsePipBackend = "cdp" | "chrome" | "iab";

export type BrowserUseToolSurface = {
  backend: BrowserUsePipBackend;
  browserId: string;
  kind: "browserUse";
  openTabIds?: string[];
  screenshot?: {
    tabId: string;
    url: string;
  };
  sessionEnded?: true;
};

export type BrowserUsePipMetadata = {
  surface: BrowserUseToolSurface;
  threadID: string;
};

export type BrowserUsePipLogger = {
  info(message: string, details?: Record<string, unknown>): void;
  warning(message: string, details?: Record<string, unknown>): void;
};

export type BrowserUsePipAddon = {
  completeRemoteHostedPIPContentThread?(id: string): boolean;
  hasRemoteHostedPIPContentActivePresentation?(): boolean;
  hasRemoteHostedPIPContentAnyPresentation?(): boolean;
  invalidateBrowserUsePIPContent?(presentationId: string): boolean;
  registerRemoteHostedPIPContentHost?(options: unknown): boolean;
  setRemoteHostedPIPContentActiveThreadID?(threadId: string | null): boolean;
  setRemoteHostedPIPContentVisible?(visible: boolean): boolean;
  setRemoteHostedPIPContentVisibilityRequestHandler?(handler: unknown): boolean;
  startRemoteHostedPIPContentHost?(): boolean;
  unregisterRemoteHostedPIPContentHost?(id: string): boolean;
  upsertBrowserUsePIPContent?(
    presentationId: string,
    threadId: string,
    screenshotDataUrl: string,
    backendIconPath: string | null,
  ): boolean;
};

export type BrowserUsePipWindowLike = {
  getContentBounds(): unknown;
  getNativeWindowHandle?(): unknown;
  getTitle(): string;
};

export type BrowserUsePipAppServerConnection = {
  registerInternalNotificationHandler(
    handler: (notification: unknown) => void,
  ): () => void;
};
