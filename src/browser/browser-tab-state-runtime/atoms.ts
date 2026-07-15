// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser tab atoms, event descriptors, and lightweight host bridge aliases.
import {
  bottomPanelOpenSignal,
  rightPanelOpenSignal,
} from "../../app-shell/app-shell-state";
import { appScopeRoot, appScopeUnderscore } from "../../boundaries/app-scope";
import { vscodeApiF } from "../../boundaries/vscode-api";
import type { BrowserChromeInteraction, StoreLike } from "./types";

export const bottomPanelOpenAtom = bottomPanelOpenSignal;
export const rightPanelOpenAtom = rightPanelOpenSignal;
export const browserSidebarMessenger = vscodeApiF;

export const browserAnnotationTakeoverEvent = {
  eventName: "codex_in_app_browser_annotation_takeover",
};
export const browserCommentRouteKey = {
  eventName: "codex_in_app_browser_comment_route_context",
};
export const browserCommentSubmittedEvent = {
  eventName: "codex_in_app_browser_comment_submitted",
};
export const browserDesignRouteKey = {
  eventName: "codex_in_app_browser_design_route_context",
};
export const browserOpenedInExternalEvent = {
  eventName: "codex_in_app_browser_opened_in_external",
};

export const browserFloatingComposerVisibleAtom = appScopeUnderscore(
  appScopeRoot,
  () => true,
);
export const browserChromeForceVisibleAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const browserChromeAutoHideResetAtom = appScopeUnderscore(
  appScopeRoot,
  () => 0,
);
export const browserToolbarInteractionAtom = appScopeUnderscore(
  appScopeRoot,
  (): BrowserChromeInteraction => ({ hostKind: null, interactedAt: 0 }),
);
export const isBrowserSidebarEnabledSignal = appScopeUnderscore(
  appScopeRoot,
  () => true,
);
export const isBrowserSidebarEnabledAtom = isBrowserSidebarEnabledSignal;

export function toggleBrowserFloatingComposer(
  store: StoreLike,
  _options: { prefersReducedMotion?: boolean } = {},
): void {
  const isVisible = store.get?.<boolean>(browserFloatingComposerVisibleAtom);
  store.set?.(browserFloatingComposerVisibleAtom, !isVisible);
}

export function markBrowserToolbarInteracted(
  store: StoreLike,
  hostKind: string | null,
): void {
  store.set?.(browserToolbarInteractionAtom, {
    hostKind,
    interactedAt: Date.now(),
  });
}

export function resetBrowserChromeAutoHide(store: StoreLike): void {
  store.set?.(browserChromeAutoHideResetAtom, Date.now());
}

export function setBrowserChromeForceVisible(
  store: StoreLike,
  isVisible: boolean,
): void {
  store.set?.(browserChromeForceVisibleAtom, isVisible);
}
