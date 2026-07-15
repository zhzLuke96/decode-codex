// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared browser sidebar state, analytics tokens, and small host-action helpers.
import { useEffect, useState } from "react";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { createParametricAtom } from "../runtime/onboarding-scope-runtime";
import { browserProfileImportDialogOpenAtom } from "./browser-profile-import-dialog-state";

export const BROWSER_ZOOM_LEVELS = [
  25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500,
];
export const MAX_BROWSER_ZOOM_PERCENT = 500;

export const annotationFlowKind = {
  BATCH: "batch",
  SINGLE: "single",
} as const;

export const annotationModeEntrySource = {
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_ANNOTATE:
    "context_menu_annotate",
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_CONTEXT_MENU_QUICK_ANNOTATE:
    "context_menu_quick_annotate",
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_KEYBOARD_SHORTCUT:
    "keyboard_shortcut",
  CODEX_IN_APP_BROWSER_ANNOTATION_MODE_ENTRY_SOURCE_TOOLBAR_BUTTON:
    "toolbar_button",
} as const;

export const browserAnnotationModeChangedEvent =
  "codex_in_app_browser_annotation_mode_changed";
export const browserNavigatedEvent = "codex_in_app_browser_navigated";
export const browserPanelOpenedEvent = "codex_in_app_browser_panel_opened";

export const emptyBrowserFindState = {
  active: false,
  activeMatchIndex: null,
  query: "",
  totalMatches: 0,
};

export const activeBrowserFindTargetAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const activeBrowserTabSignal = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const activeBrowserTabIdQuery = createParametricAtom(
  appScopeRoot,
  (_conversationId: string, { get }) => {
    const activeTab = get<{ tabId?: string | null } | null>(
      activeBrowserTabSignal,
    );
    return activeTab?.tabId ?? null;
  },
);
export const activeSidePanelKindAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const annotationAddModifierPressedAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const browserDeviceToolbarLayoutAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const browserDeviceToolbarBackgroundColor = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const browserFindFocusRequestAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const browserFindStateAtom = appScopeUnderscore(
  appScopeRoot,
  () => emptyBrowserFindState,
);
export const designModifierPressedAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const isSidePanelVisibleAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);

type StoreLike = {
  get<TValue = unknown>(atom: unknown, key?: unknown): TValue;
  set(atom: unknown, keyOrValue: unknown, value?: unknown): void;
};

type BrowserCommentLike = Record<string, unknown>;

export interface AsyncQueryOptions<TData> {
  enabled?: boolean;
  queryFn?: () => Promise<TData>;
}

export interface AsyncQueryValue<TData> {
  data: TData | undefined;
  error: unknown;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

export function clampBrowserZoomPercent(value: number): number {
  if (!Number.isFinite(value)) return 100;
  return Math.min(MAX_BROWSER_ZOOM_PERCENT, Math.max(25, Math.round(value)));
}

export function clearBrowserFindFocus(store: StoreLike): void {
  store.set(browserFindFocusRequestAtom, null);
}

export function clearBrowserPendingNavigation(): void {}

export function clearBrowserPendingOpen(): void {}

export function getPendingBrowserAddressOverride(): string | null {
  return null;
}

export function getPendingBrowserOpenReason(): string | null {
  return null;
}

export function getPendingBrowserOpenSource(): string | null {
  return null;
}

export function importBrowserProfiles(
  store: StoreLike,
  _browserProfileImportService: unknown,
): boolean {
  store.set(browserProfileImportDialogOpenAtom, true);
  return true;
}

function readBrowserTabId(comment: BrowserCommentLike): string | null {
  const direct = comment.browserTabId ?? comment.browser_tab_id;
  if (direct != null) return String(direct);
  const metadata = comment.metadata;
  if (metadata != null && typeof metadata === "object") {
    const tabId = (metadata as Record<string, unknown>).browserTabId;
    if (tabId != null) return String(tabId);
  }
  return null;
}

export function extractBrowserComments(
  comments: unknown,
  _includeDesignTweaks: boolean,
): BrowserCommentLike[] {
  return Array.isArray(comments)
    ? comments.filter(
        (comment): comment is BrowserCommentLike =>
          comment != null && typeof comment === "object",
      )
    : [];
}

export function isCommentForBrowserTab(
  comment: unknown,
  browserTabId: string,
): boolean {
  return (
    comment != null &&
    typeof comment === "object" &&
    readBrowserTabId(comment as BrowserCommentLike) === browserTabId
  );
}

export function markBrowserTabVisited(
  store: StoreLike,
  browserTabId: string,
): void {
  store.set(activeBrowserTabSignal, { tabId: browserTabId });
}

export function openBrowserFind(store: StoreLike): void {
  store.set(activeSidePanelKindAtom, "browser");
}

export function openBrowserPanelForTab(
  _conversationId: string,
  _browserTabId: string,
  _options?: { initiator?: string; source?: string },
): void {}

export function setActiveBrowserFindTarget(
  store: StoreLike,
  target: unknown,
): void {
  store.set(activeBrowserFindTargetAtom, target);
}

export function setActiveSidePanelKind(store: StoreLike, kind: string): void {
  store.set(activeSidePanelKindAtom, kind);
}

export function setBrowserFindState(store: StoreLike, state: unknown): void {
  store.set(browserFindStateAtom, state);
}

export function toBrowserCommentAttachment(
  comment: BrowserCommentLike,
  index: number,
  browserTabId: string,
): BrowserCommentLike {
  return {
    ...comment,
    browserTabId,
    id: comment.id ?? `browser-comment-${browserTabId}-${index}`,
    metadata: {
      ...(comment.metadata != null && typeof comment.metadata === "object"
        ? (comment.metadata as Record<string, unknown>)
        : {}),
      browserTabId,
    },
  };
}

export function syncBrowserOpenState(
  store: StoreLike,
  _conversationId: string,
  browserTabId: string,
  options: { isOpen: boolean; url?: string | null },
): void {
  if (options.isOpen) {
    store.set(activeBrowserTabSignal, {
      tabId: browserTabId,
      url: options.url,
    });
  }
  store.set(isSidePanelVisibleAtom, options.isOpen);
}

export function useAsyncQueryValue<TData>(
  queryOptions: AsyncQueryOptions<TData> | null | undefined,
): AsyncQueryValue<TData> {
  const enabled = queryOptions?.enabled !== false;
  const [state, setState] = useState<AsyncQueryValue<TData>>({
    data: undefined,
    error: null,
    isError: false,
    isLoading: enabled,
    isSuccess: false,
  });

  useEffect(() => {
    if (!enabled || queryOptions?.queryFn == null) {
      setState({
        data: undefined,
        error: null,
        isError: false,
        isLoading: false,
        isSuccess: false,
      });
      return;
    }
    let cancelled = false;
    setState((previous) => ({ ...previous, isLoading: true }));
    void queryOptions
      .queryFn()
      .then((data) => {
        if (!cancelled) {
          setState({
            data,
            error: null,
            isError: false,
            isLoading: false,
            isSuccess: true,
          });
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setState({
            data: undefined,
            error,
            isError: true,
            isLoading: false,
            isSuccess: false,
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [enabled, queryOptions]);

  return state;
}

export function initBrowserCommonsRuntime(): void {}
