// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Workspace file tab controller glue: resolves side-panel tab controllers,
// formats file-tab labels/tooltips, and builds the tab context menu.

import {
  bottomAppShellTabController,
  rightAppShellTabController,
} from "../app-shell/app-shell-tab-controller";
import type {
  AppShellPanelId,
  AppShellStore,
  AppShellTabController,
} from "../app-shell/app-shell-tab-controller/types";
import { getSidePanelTabControllerForTarget } from "../app-shell/side-panel-runtime";
import {
  buildWorkspaceFileContextMenuItems,
  fetchWorkspaceFileContextMenuItems,
  prefetchOpenInTargets,
  type ContextMenuItem,
  type WorkspaceFileContextMenuRequest,
  type WorkspaceFileContextMenuScope,
} from "../appgen/publication-terms/file-reference-actions";
import { formatWorkspaceRelativePath } from "../boundaries/rpc.facade";
import { hostConfigByIdAtom } from "../review/review-route-runtime";
import { createQueryKey } from "../runtime/app-server-mutation-runtime";
import { basename, isPathWithin } from "../runtime/onboarding-common-runtime";
import { normalizePath } from "../runtime/path-helpers-runtime";
import {
  syncOpenReviewFileSourceTabs,
  workspaceFileTabKindPrefix,
} from "./workspace-file-source-tabs";

export type AppStore = AppShellStore & WorkspaceFileContextMenuScope;
export type FileTabController = AppShellTabController;

export const FILE_TAB_KIND_PREFIX = workspaceFileTabKindPrefix;

export function resolveTabController(
  target: string | null | undefined,
): FileTabController {
  return getSidePanelTabControllerForTarget(target);
}

export function findTabPanelForTab(
  store: AppStore,
  tabId: string,
): AppShellPanelId | null {
  return (
    (["right", "bottom"] as const).find((panelId) => {
      const controller =
        panelId === "bottom"
          ? bottomAppShellTabController
          : rightAppShellTabController;
      return store.get(controller.tabById$, tabId) != null;
    }) ?? null
  );
}

export function formatWorkspacePathTooltip({
  cwd,
  path,
}: {
  cwd?: string | null;
  path: string;
}): string {
  if (cwd == null) return path;

  const normalizedPath = normalizePath(path);
  const normalizedCwd = normalizePath(cwd);
  if (!isPathWithin(normalizedPath, normalizedCwd)) return path;

  const relativePath = normalizedPath
    .slice(normalizedCwd.replace(/\/+$/u, "").length)
    .replace(/^\/+/u, "");
  if (relativePath.length === 0) return basename(normalizedPath);

  return formatWorkspaceRelativePath({
    root: normalizedCwd,
    relativePath,
    includeWorkspaceRootLabel: true,
  });
}

export function defaultFileTabState(): {
  scrollLeft: number | null;
  scrollTop: number | null;
} {
  return { scrollLeft: null, scrollTop: null };
}

export function trackRecentlyOpenedFile(
  store: AppStore,
  request: { cwd?: string | null; hostId?: string | null; path: string },
): void {
  prefetchOpenInTargets(store, request);
}

export function syncOpenTabs(
  store: AppStore,
  options: { excludeTab?: { panelId: unknown; tabId: string } } = {},
): void {
  syncOpenReviewFileSourceTabs(store, options);
}

export function buildFileTabContextMenuItems(
  store: AppStore,
  request: Pick<WorkspaceFileContextMenuRequest, "cwd" | "hostId" | "path">,
): Promise<ContextMenuItem[] | undefined> | ContextMenuItem[] | undefined {
  const contextRequest: WorkspaceFileContextMenuRequest = {
    ...request,
    hostConfig: readHostConfig(store, request.hostId),
    platform: readHostPlatform(store),
  };
  const fetched = fetchWorkspaceFileContextMenuItems(store, contextRequest);
  if (fetched != null) return fetched;
  return buildWorkspaceFileContextMenuItems(store, contextRequest);
}

function readHostConfig(store: AppStore, hostId?: string | null): unknown {
  try {
    return store.get(hostConfigByIdAtom, hostId ?? "local") ?? null;
  } catch {
    return null;
  }
}

function readHostPlatform(store: AppStore): string | null {
  const platformInfo = store.queryClient?.getQueryData?.<{
    platform?: string | null;
  }>(createQueryKey("os-info"));
  return platformInfo?.platform ?? null;
}
