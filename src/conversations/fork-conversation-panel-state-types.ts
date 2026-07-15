// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for fork/move conversation panel-state capture and remap helpers.
export type AppScope = {
  get<T>(key: unknown, subKey?: unknown): T;
  set(key: unknown, subKey: unknown, value: unknown): void;
};

export type PanelTarget = "right" | "bottom";

export type CapturedPanelTab =
  | {
      kind: "browser";
      tabId: string | number;
      browserTabId: string | number;
      deviceToolbarState: unknown;
      initialUrl: string | null;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    }
  | {
      kind: "terminal";
      tabId: string | number;
      sessionId: string;
      snapshot: unknown;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    }
  | {
      kind: "artifact";
      tabId: string | number;
      hostId: string;
      path: string;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    }
  | {
      kind: "review-file" | "text-editor";
      tabId: string | number;
      hostId: string;
      path: string;
      workspaceRoot?: string | null;
      insertAfterTabId: string | number | null;
      panel: PanelTarget;
      active: boolean;
    };

export type CapturedPanelState = {
  bottomPanelOpen: boolean;
  focusArea: string;
  rightPanelFullWidth: boolean;
  rightPanelOpen: boolean;
  sourceBrowserConversationId: string;
  targetBrowserConversationId: string;
  tabs: CapturedPanelTab[];
};

export type SourceTab = {
  tabId: string | number;
  kind?: string;
  props: Record<string, unknown>;
};
