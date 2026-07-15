// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser sidebar state atoms, feature queries, layout helpers, and host commands.
import React from "react";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { vscodeApiF } from "../boundaries/vscode-api";
import { createParametricAtom } from "../runtime/onboarding-scope-runtime";
import { formatKeyboardShortcut } from "../utils/keyboard-shortcuts-runtime";
import type { BrowserSidebarBoundsRect } from "./browser-sidebar-host-utils";
import {
  getAdoptedWebContentsId,
  getBrowserSidebarAdoptionLease,
  getBrowserSidebarInitiator,
  peekBrowserSidebarSource,
} from "./browser-sidebar-open-source";

type BrowserComment = Record<string, unknown>;
type DeviceToolbarState = {
  height: number;
  isEnabled: boolean;
  width: number;
};
type DeviceToolbarLayout = {
  fitHeight: number;
  fitWidth: number;
  scale: number;
  visualBounds: BrowserSidebarBoundsRect;
  webviewBounds: BrowserSidebarBoundsRect;
};

const browserCommentsByConversation = new Map<string, BrowserComment[]>();

export const browserManagedQueryAtom = createParametricAtom(
  appScopeRoot,
  () => true,
);

export const featureFlagQuery = createParametricAtom(
  appScopeRoot,
  (featureName: unknown) => ({
    data:
      featureName === "browserPrint" ||
      featureName === browserPrintEnabledFlag ||
      featureName === browserOwlPermissionsFlag
        ? false
        : featureName === "openAiGoLinks"
          ? false
          : undefined,
  }),
);

export const rightPanelComposerReserveAtom = appScopeUnderscore(
  appScopeRoot,
  () => 0,
);

export const focusBrowserConversationScope = appScopeRoot;
export const browserOwlPermissionsFlag = "browserOwlPermissions";
export const browserPrintEnabledFlag = "browserPrint";
export const persistedBrowserTabsGateId = "persisted-browser-tabs";

export function getConversationScopeValue(scopeValue: unknown): string | null {
  if (scopeValue == null || typeof scopeValue !== "object") return null;
  const record = scopeValue as Record<string, unknown>;
  const id = record.conversationId ?? record.threadId ?? record.id;
  return typeof id === "string" && id.trim().length > 0 ? id : null;
}

export function useBrowserSidebarComments(conversationId: string): {
  comments: BrowserComment[];
  setComments: React.Dispatch<React.SetStateAction<BrowserComment[]>>;
} {
  const [comments, setLocalComments] = React.useState<BrowserComment[]>(
    () => browserCommentsByConversation.get(conversationId) ?? [],
  );
  React.useEffect(() => {
    setLocalComments(browserCommentsByConversation.get(conversationId) ?? []);
  }, [conversationId]);
  const setComments: React.Dispatch<React.SetStateAction<BrowserComment[]>> =
    React.useCallback(
      (next) => {
        setLocalComments((current) => {
          const resolved = typeof next === "function" ? next(current) : next;
          browserCommentsByConversation.set(conversationId, resolved);
          return resolved;
        });
      },
      [conversationId],
    );
  return { comments, setComments };
}

export function getAnnotationFlowConfig(flow: unknown): {
  defaultSubmitMode: "direct" | "saved";
  persistent: boolean;
} {
  return flow === "single"
    ? { defaultSubmitMode: "direct", persistent: false }
    : { defaultSubmitMode: "saved", persistent: true };
}

export function hasPendingBrowserComments(comments: unknown): boolean {
  return Array.isArray(comments) && comments.length > 0;
}

export function hasQueuedDesignTweaks(comments: unknown): boolean {
  return (
    Array.isArray(comments) &&
    comments.some((comment) => {
      if (comment == null || typeof comment !== "object") return false;
      const record = comment as Record<string, unknown>;
      return (
        record.kind === "design" ||
        record.type === "design" ||
        record.mode === "design" ||
        record.isDesignTweak === true
      );
    })
  );
}

export function computeBrowserDeviceToolbarLayout(
  panelBounds: BrowserSidebarBoundsRect | null,
  toolbarState: DeviceToolbarState | null,
): DeviceToolbarLayout | null {
  if (panelBounds == null || toolbarState == null || !toolbarState.isEnabled) {
    return null;
  }
  const toolbarHeight = 34;
  const availableWidth = Math.max(1, panelBounds.width);
  const availableHeight = Math.max(1, panelBounds.height - toolbarHeight);
  const fitWidth = Math.max(1, toolbarState.width);
  const fitHeight = Math.max(1, toolbarState.height);
  const scale = Math.min(
    1,
    availableWidth / fitWidth,
    availableHeight / fitHeight,
  );
  const visualWidth = fitWidth * scale;
  const visualHeight = fitHeight * scale;
  const visualBounds = {
    x: panelBounds.x + Math.max(0, (availableWidth - visualWidth) / 2),
    y: panelBounds.y + toolbarHeight,
    width: visualWidth,
    height: visualHeight,
  };
  return {
    fitHeight,
    fitWidth,
    scale,
    visualBounds,
    webviewBounds: visualBounds,
  };
}

export function computeEmulatedViewport({
  fitHeight,
  height,
  width,
}: {
  fitHeight?: number;
  height: number;
  width: number;
}): { height: number; width: number } {
  return {
    height: Math.max(1, Math.round(fitHeight ?? height)),
    width: Math.max(1, Math.round(width)),
  };
}

export function resolveBrowserZoomPercent(
  zoomPercent: number | null | undefined,
  viewportScale: number = 1,
): number {
  const baseZoom = Number.isFinite(zoomPercent) ? Number(zoomPercent) : 100;
  const scaledZoom =
    baseZoom * (Number.isFinite(viewportScale) ? viewportScale : 1);
  return Math.max(25, Math.min(500, Math.round(scaledZoom)));
}

export function getBrowserAdoptionLease(
  conversationId: string,
  browserTabId: string,
): string | null {
  const lease = getBrowserSidebarAdoptionLease(conversationId, browserTabId);
  return lease == null ? null : String(lease);
}

export function getBrowserAdoptedWebContentsId(
  conversationId: string,
  browserTabId: string,
): number | null {
  const id = getAdoptedWebContentsId(conversationId, browserTabId);
  return typeof id === "number" ? id : null;
}

export function getBrowserOpenSource(
  conversationId: string,
  browserTabId: string,
): string | null {
  const source = peekBrowserSidebarSource(conversationId, browserTabId);
  return typeof source === "string" ? source : null;
}

export function getBrowserOpenReason(
  conversationId: string,
  browserTabId: string,
): string | null {
  const reason = getBrowserSidebarInitiator(conversationId, browserTabId);
  return typeof reason === "string" ? reason : null;
}

export function openChromiumInternalPage({
  browserTabId,
  conversationId,
  url,
}: {
  browserTabId: string;
  conversationId: string;
  isMultiBrowserTabsEnabled?: boolean;
  url: string;
}): void {
  vscodeApiF.dispatchMessage("browser-sidebar-command", {
    browserTabId,
    conversationId,
    command: { type: "navigate", url },
  });
}

export function submitBrowserAnnotationComments(conversationId: string): void {
  vscodeApiF.dispatchMessage("browser-sidebar-command", {
    conversationId,
    command: { type: "submit-annotation-comments" },
  });
}

export function useFormattedAcceleratorLabel(accelerator: string): string {
  return React.useMemo(
    () => formatKeyboardShortcut(accelerator),
    [accelerator],
  );
}
