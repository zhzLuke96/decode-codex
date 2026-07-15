// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for browser tab state bridge modules.

export type StoreLike = {
  get?<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set?(signal: unknown, value: unknown): void;
  value?: { routeKind?: unknown };
};

export type BrowserRouteEntry = {
  activeTab: string;
  routeKind: string | undefined;
};

export type BrowserOpenSourceOptions = {
  adoptedWebContentsId?: unknown;
  adoptionLease?: unknown;
  initialUrl?: string | null;
  initiator?: unknown;
  source?: unknown;
};

export type BrowserChromeInteraction = {
  hostKind: string | null;
  interactedAt: number;
};
