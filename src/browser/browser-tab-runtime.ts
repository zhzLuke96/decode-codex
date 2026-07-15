// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared browser tab ids, placement helpers, display helpers, and toolbar analytics constants.
import { createElement } from "react";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { getBrowserTabLegacyKey } from "../runtime/persisted-signal";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabRecord,
} from "../app-shell/app-shell-tab-controller/types";
import { browserSidebarManager } from "./sidebar-manager";

export const multiBrowserTabsEnabledAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const activeCwdAtom = appScopeUnderscore(appScopeRoot, () => null);
export const allowBrowserTabWithoutPlacementAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const browserHostIdAtom = appScopeUnderscore(
  appScopeRoot,
  () => LOCAL_HOST_ID,
);
export const browserHostConfigAtom = appScopeUnderscore(appScopeRoot, () => ({
  display_name: "Local",
  id: LOCAL_HOST_ID,
  kind: "local",
}));

export const browserToolbarActionEvent = "codex_in_app_browser_toolbar_action";

export const browserToolbarActionType = {
  CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_CAPTURE_SCREENSHOT_CLICKED:
    "capture_screenshot_clicked",
  CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_DIMENSIONS_DRAG_CHANGED:
    "device_toolbar_dimensions_drag_changed",
  CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_DIMENSIONS_INPUT_CHANGED:
    "device_toolbar_dimensions_input_changed",
  CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_MODE_ENTERED:
    "device_toolbar_mode_entered",
  CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_ROTATED:
    "device_toolbar_rotated",
  CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_OPENED_IN_EXTERNAL_BROWSER:
    "opened_in_external_browser",
} as const;

export const browserTabType = {
  NEW_TAB_PAGE: "new-tab-page",
  WEB: "web",
} as const;

export function initBrowserTabRuntimeChunk(): void {}

export const BrowserTabType = browserTabType;

export const newTabPageTitle = "New tab";

export const browserHostServices: {
  browserSidebarAutocomplete?: unknown;
  browserSiteInfo?: {
    open(options: Record<string, unknown>): Promise<boolean>;
  };
} | null =
  typeof globalThis === "undefined"
    ? null
    : (((globalThis as Record<string, unknown>).browserHostServices ??
        null) as {
        browserSidebarAutocomplete?: unknown;
        browserSiteInfo?: {
          open(options: Record<string, unknown>): Promise<boolean>;
        };
      } | null);

export const browserSidebarTabManager = browserSidebarManager;

export function toBrowserTabId(id: string): string {
  return id.startsWith("browser:") ? id : `browser:${id}`;
}

export function getDefaultBrowserTabId(
  conversationId: string,
  browserTabId?: string | null,
): string {
  return browserTabId ?? getBrowserTabLegacyKey(conversationId);
}

function findTabPlacement(
  store: AppShellStore,
  controller: AppShellTabController,
  target: "bottom" | "right",
  tabId: string,
) {
  const tab =
    store.get<AppShellTabRecord | null>(controller.tabById$, tabId) ??
    store
      .get<AppShellTabRecord[]>(controller.tabs$)
      .find((candidate) => candidate.tabId === tabId) ??
    null;
  return tab == null ? null : { tab, target };
}

export function getBrowserTabPlacement(
  store: AppShellStore,
  _conversationId: string,
  browserTabId: string,
  preferredTarget?: string | null,
): { tab: AppShellTabRecord; target: "bottom" | "right" } | null {
  if (preferredTarget === "bottom") {
    return (
      findTabPlacement(
        store,
        bottomAppShellTabController,
        "bottom",
        browserTabId,
      ) ??
      findTabPlacement(store, rightAppShellTabController, "right", browserTabId)
    );
  }
  return (
    findTabPlacement(
      store,
      rightAppShellTabController,
      "right",
      browserTabId,
    ) ??
    findTabPlacement(store, bottomAppShellTabController, "bottom", browserTabId)
  );
}

export function isKnownBrowserTab(
  store: AppShellStore,
  conversationId: string,
  browserTabId: string,
): boolean {
  return (
    browserTabId === getDefaultBrowserTabId(conversationId) ||
    getBrowserTabPlacement(store, conversationId, browserTabId) != null ||
    browserSidebarManager.getSnapshot(conversationId, browserTabId) != null
  );
}

export function resolveActiveBrowserConversationId(
  store: AppShellStore,
): string | null {
  const route = store.value as Record<string, unknown>;
  return typeof route.conversationId === "string"
    ? route.conversationId
    : typeof route.threadId === "string"
      ? route.threadId
      : null;
}

export type BrowserTabDisplayInput = {
  browserSnapshot?: {
    faviconUrl?: string | null;
    isAudible?: boolean | null;
    isCapturingUserMedia?: boolean | null;
    tabType?: string | null;
    title?: string | null;
    url?: string | null;
  } | null;
  browserTabFallbackTitle?: string | null;
  isBrowserUseActive?: boolean;
  isBrowserUseTab?: boolean;
};

export type BrowserTabDisplay = {
  faviconUrl: string | null;
  isAudible: boolean;
  isCapturingUserMedia: boolean;
  isHighlighted: boolean;
  preserveExistingTitle: boolean;
  title: string;
};

export function deriveBrowserTabDisplay({
  browserSnapshot,
  browserTabFallbackTitle,
  isBrowserUseActive = false,
  isBrowserUseTab = false,
}: BrowserTabDisplayInput): BrowserTabDisplay {
  const snapshotTitle = browserSnapshot?.title?.trim() ?? "";
  const snapshotUrl = browserSnapshot?.url?.trim() ?? "";
  const fallbackTitle = browserTabFallbackTitle?.trim() ?? "";
  const isWebTab =
    browserSnapshot?.tabType === browserTabType.WEB || snapshotUrl.length > 0;
  const title =
    snapshotTitle ||
    fallbackTitle ||
    (isWebTab ? formatBrowserTabHostname(snapshotUrl) : newTabPageTitle);
  return {
    faviconUrl: browserSnapshot?.faviconUrl ?? null,
    isAudible: browserSnapshot?.isAudible === true,
    isCapturingUserMedia: browserSnapshot?.isCapturingUserMedia === true,
    isHighlighted: isBrowserUseActive,
    preserveExistingTitle:
      snapshotTitle.length === 0 && isBrowserUseTab && !isBrowserUseActive,
    title,
  };
}

export function formatBrowserTabHostname(
  url: string | null | undefined,
): string {
  if (url == null || url.trim().length === 0) return newTabPageTitle;
  try {
    const parsed = new URL(url);
    return parsed.hostname || parsed.href;
  } catch {
    return url;
  }
}

export function getBrowserSitePermissionsOrigin(
  url: string | null | undefined,
): string | null {
  if (url == null || url.trim().length === 0) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:"
      ? parsed.origin
      : null;
  } catch {
    return null;
  }
}

export function BrowserTabTrailingIndicators({
  isAudible,
  isCapturingUserMedia,
}: {
  isAudible?: boolean;
  isCapturingUserMedia?: boolean;
}) {
  if (!isAudible && !isCapturingUserMedia) return null;
  return createElement(
    "span",
    {
      className:
        "text-token-text-secondary inline-flex items-center gap-1 text-[10px] leading-none",
    },
    isAudible
      ? createElement("span", {
          "aria-label": "Tab is playing audio",
          className: "size-1.5 rounded-full bg-current",
          title: "Audio",
        })
      : null,
    isCapturingUserMedia
      ? createElement("span", {
          "aria-label": "Tab is using camera or microphone",
          className: "size-1.5 rounded-full border border-current",
          title: "Capture",
        })
      : null,
  );
}
