// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Lightweight review panel view-state atoms.
import * as React from "react";
import {
  _appScopeC as appScopeC,
  appScopeRoot,
  appScopeUnderscore,
} from "../boundaries/app-scope";
import { rightAppShellTabController } from "../app-shell/app-shell-tab-controller";
import { useMotionValue, type MotionValue } from "../utils/use-transform";

export const hideWhitespaceAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);

export const reviewExpandedAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);

export const reviewExpandedActionsPortalContext =
  React.createContext<HTMLElement | null>(null);

export const reviewSourceAtom = appScopeUnderscore(
  appScopeRoot,
  () => "last-turn",
);

export const reviewTargetConversationIdAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const reviewFocusedFilePathAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const activeReviewFilePathAtom = reviewFocusedFilePathAtom;

export const activeReviewSearchMatchAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const activeReviewDiffSearchResultAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const pendingReviewCommentAtom = appScopeUnderscore(
  appScopeRoot,
  () => undefined,
);

export const reviewFileFilterQueryAtom = appScopeUnderscore(
  appScopeRoot,
  () => "",
);

export const reviewChangedFileEntriesAtom = appScopeUnderscore(
  appScopeRoot,
  () => [],
);

export const reviewHostAtom = appScopeUnderscore(appScopeRoot, () => ({
  id: "local",
}));

export const fileTreeOpenAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);

export const reviewSidePanelAnimationAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const reviewSidePanelWidthAtom = appScopeUnderscore(
  appScopeRoot,
  () => 320,
);

export const reviewReserveBottomPaddingAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);

export const reviewReserveBottomPaddingWidthThresholdAtom =
  appScopeUnderscore(appScopeRoot, () => 360);

export const reviewGitActionsAllowedAtom = appScopeUnderscore(
  appScopeRoot,
  () => true,
);

export const reviewGitActionsSupportedAtom = appScopeUnderscore(
  appScopeRoot,
  () => true,
);

export const isReviewDiffOpenAtom = appScopeC(
  appScopeRoot,
  ({ get }: { get<TValue = unknown>(signal: unknown): TValue }) =>
    get<{ tabId?: string } | null>(rightAppShellTabController.activeTab$)
      ?.tabId === "diff",
);

export function navigateToReviewFilePath(
  store: { set(atom: unknown, value: unknown): void },
  path: string,
): void {
  store.set(reviewFocusedFilePathAtom, path);
}

export function setReviewFileFilterQuery(
  store: { set(atom: unknown, value: unknown): void },
  query: string,
): void {
  store.set(reviewFileFilterQueryAtom, query);
}

export function scrollReviewFileIntoView(
  _store: unknown,
  path: string,
  attempts: number = 1,
): void {
  if (typeof document === "undefined") return;
  const escapedPath =
    typeof CSS !== "undefined" && typeof CSS.escape === "function"
      ? CSS.escape(path)
      : path.replace(/["\\]/g, "\\$&");
  const selector = `[data-review-file-path="${escapedPath}"]`;
  const element = document.querySelector(selector);
  if (element != null) {
    element.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  if (attempts > 0) {
    requestAnimationFrame(() => {
      scrollReviewFileIntoView(_store, path, attempts - 1);
    });
  }
}

export function reviewSidePanelTabDefaultState(): Record<string, never> {
  return {};
}

export function setFileTreeOpen(
  store: { set(atom: unknown, value: unknown): void },
  open: boolean,
  options?: { animate?: boolean },
): void {
  store.set(fileTreeOpenAtom, open);
  store.set(
    reviewSidePanelAnimationAtom,
    options?.animate === false ? null : open ? "open" : "close",
  );
}

export function reviewBaseBranchOverrideKey(value: unknown): string {
  if (value == null) return "review:global";
  if (typeof value === "string") return `review:${value}`;
  if (typeof value !== "object") return `review:${String(value)}`;

  const record = value as Record<string, unknown>;
  const routeKind = stringValue(record.routeKind) ?? "scope";
  const identity =
    stringValue(record.conversationId) ??
    stringValue(record.threadId) ??
    stringValue(record.taskId) ??
    stringValue(record.cwd) ??
    stringValue(record.workspaceRoot) ??
    stringValue(record.hostId) ??
    stableScopeSuffix(record);

  return `review:${routeKind}:${identity}`;
}

export function reviewFilterSupportsGitActions(filter: unknown): boolean {
  return filter === "staged" || filter === "unstaged";
}

export function scaleToDevicePx(value: number): number {
  return Math.round(value);
}

export function useResizableSize(size: number): MotionValue<number> {
  const motionSize = useMotionValue(size);
  React.useEffect(() => {
    motionSize.set(size);
  }, [motionSize, size]);
  return motionSize;
}

export function usePanelResizeAnimation({
  size,
  isVisible,
}: {
  animation?: unknown;
  size: MotionValue<number>;
  isVisible: boolean;
}): {
  animatedSize: MotionValue<number>;
  isMounted: boolean;
  opacity: number;
} {
  return {
    animatedSize: size,
    isMounted: isVisible,
    opacity: isVisible ? 1 : 0,
  };
}

type PanelResizeHandleProps = {
  defaultSize: number;
  edge?: "left" | "right";
  getCurrentSize?: () => number;
  setSize: (size: number) => void;
};

export function PanelResizeHandle({
  defaultSize,
  edge = "right",
  getCurrentSize,
  setSize,
}: PanelResizeHandleProps): React.ReactElement {
  const onPointerDown = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.preventDefault();
      const startX = event.clientX;
      const startSize = getCurrentSize?.() ?? defaultSize;
      const onPointerMove = (moveEvent: PointerEvent) => {
        const delta =
          edge === "left"
            ? startX - moveEvent.clientX
            : moveEvent.clientX - startX;
        setSize(startSize + delta);
      };
      const onPointerUp = () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
      };
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp, { once: true });
    },
    [defaultSize, edge, getCurrentSize, setSize],
  );

  return React.createElement("div", {
    "aria-hidden": true,
    className:
      edge === "left"
        ? "absolute left-0 top-0 z-10 h-full w-2 -translate-x-1 cursor-col-resize touch-none"
        : "absolute right-0 top-0 z-10 h-full w-2 translate-x-1 cursor-col-resize touch-none",
    onPointerDown,
  });
}

function stringValue(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function stableScopeSuffix(record: Record<string, unknown>): string {
  try {
    return JSON.stringify(record);
  } catch {
    return "global";
  }
}
