// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared constants and public props for the in-app browser sidebar.

import { browserSidebarMode } from "./browser-sidebar-state";
import {
  annotationFlowKind,
  annotationModeEntrySource,
  browserTabType,
  newTabPageTitle,
} from "../boundaries/onboarding-commons-externals.facade";

const DEFAULT_BROWSER_TAB_SNAPSHOT = {
  annotationFlow: annotationFlowKind.BATCH,
  tabType: browserTabType.NEW_TAB_PAGE,
  isSuspended: false,
  title: newTabPageTitle,
  url: "",
  faviconUrl: null,
  securityState: null,
  isLoading: false,
  canGoBack: false,
  canGoForward: false,
  zoomPercent: 100,
  commentModeDisabledReason: null,
  interactionMode: browserSidebarMode.BROWSE,
  isAudible: false,
  isCapturingUserMedia: false,
  annotationEditorMode: "comment",
  isAnnotationAddModifierPressed: false,
  isOriginalViewEnabled: false,
  isTweaksEditorOpen: false,
  comments: [],
};

const ANNOTATION_ENTRY_SOURCE_BY_TRIGGER: Record<string, unknown> = {
  "context-menu-annotate":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_ANNOTATE,
  "context-menu-quick-annotate":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_QUICK_ANNOTATE,
  "keyboard-shortcut":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_KEYBOARD_SHORTCUT,
  "toolbar-button":
    annotationModeEntrySource.CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_TOOLBAR_BUTTON,
};

export function getDefaultBrowserTabSnapshot() {
  return DEFAULT_BROWSER_TAB_SNAPSHOT;
}

export function resolveAnnotationEntrySource(
  trigger: string | undefined,
): unknown {
  return trigger == null
    ? undefined
    : ANNOTATION_ENTRY_SOURCE_BY_TRIGGER[trigger];
}

export type BrowserSidebarPanelTarget = "right" | "bottom";

export type BrowserSidebarProps = {
  autoFocusOnOpen?: boolean;
  conversationId: string;
  browserTabId?: string;
  hostDisplayName?: string;
  cwd?: string;
  isVisible: boolean;
  isAnnotationModeEnabled?: boolean;
  isDeviceToolbarEnabled?: boolean;
  isDeviceToolbarMenuItemVisible?: boolean;
  isScreenshotCaptureEnabled?: boolean;
  isFloatingComposerToggleVisible?: boolean;
  isFloatingComposerVisible?: boolean;
  isTweaksEnabled?: boolean;
  onToggleFloatingComposer?: () => void;
  panelTarget?: BrowserSidebarPanelTarget;
};
