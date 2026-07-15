// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Opens (or focuses) a side-panel tab that previews a workspace file artifact,
// wiring up icon, context menu, navigation target and open-tab synchronization.
import { createElement } from "react";
import {
  resolveArtifactDescriptor,
  getArtifactIconComponent,
  getArtifactTitle,
  getSidePanelController,
  findTabPanelId,
  prefetchArtifactFileQueries,
  buildArtifactContextMenuItems,
  rightPanelExpandedAtom,
  setMainSidebarLayout,
  relativizePath,
  isAbsolutePath,
  formatWorkspacePathLabel,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  workspaceFileTabKindPrefix,
  resolveActiveRouteCwd,
  syncOpenReviewFileSourceTabs,
} from "./workspace-file-source-tabs";
import {
  createArtifactNavigator,
  deleteArtifactNavigation,
  type ArtifactNavigationTarget,
} from "./artifact-tab-navigation";
import { ArtifactTabPreview } from "./artifact-tab-preview";

export interface OpenArtifactTabOptions {
  activate?: boolean;
  artifactNavigationTarget?: ArtifactNavigationTarget;
  hostId: string;
  icon?: unknown;
  isPreview?: boolean;
  syncOpenTabs?: boolean;
  target?: "left" | "right" | "main";
  tabId?: string;
  title?: string;
}

export function initOpenArtifactTabChunk(): void {}

function workspaceFilePathLabel({
  cwd,
  path,
}: {
  cwd: string | null;
  path: string;
}): string {
  if (cwd == null) return path;
  const relative = relativizePath(path, cwd);
  return isAbsolutePath(relative)
    ? relative
    : formatWorkspacePathLabel({
        root: cwd,
        relativePath: relative,
        includeWorkspaceRootLabel: true,
      });
}

export function openArtifactTab(
  store: any,
  path: string,
  options: OpenArtifactTabOptions,
): boolean {
  const {
    activate = true,
    artifactNavigationTarget,
    hostId,
    icon,
    isPreview,
    syncOpenTabs = true,
    target = "right",
    tabId,
    title,
  } = options;

  const descriptor = resolveArtifactDescriptor(path);
  if (descriptor == null) return false;

  const iconComponent = getArtifactIconComponent(path);
  const tabTitle = title ?? getArtifactTitle(path);
  const resolvedTabId = tabId ?? `artifact:${hostId}:${path}`;
  const panelController = getSidePanelController(
    findTabPanelId(store, resolvedTabId) ?? target,
  );
  const cwd = resolveActiveRouteCwd(store);
  const tabProps = {
    ...descriptor,
    hostId,
    path,
    tabId: resolvedTabId,
    title: tabTitle,
  };

  prefetchArtifactFileQueries(store, { cwd, hostId, path });

  panelController.openTab(store, ArtifactTabPreview, {
    activate,
    contextMenuItems: (menuStore: unknown) =>
      buildArtifactContextMenuItems(menuStore, { cwd, hostId, path }),
    icon:
      icon ?? createElement(iconComponent, { className: "icon-xs shrink-0" }),
    isPreview,
    kind: `${workspaceFileTabKindPrefix}${hostId}`,
    props: tabProps,
    onClose: (closeStore: any, closedTarget: string) => {
      deleteArtifactNavigation(resolvedTabId);
      if (
        closedTarget === "right" &&
        closeStore.get(getSidePanelController(closedTarget).activeTab$)
          ?.tabId === resolvedTabId &&
        closeStore.get(rightPanelExpandedAtom)
      ) {
        closeStore.set(rightPanelExpandedAtom, false);
        setMainSidebarLayout(closeStore, "main");
      }
      syncOpenReviewFileSourceTabs(closeStore, {
        excludeTab: { panelId: closedTarget, tabId: resolvedTabId },
      });
    },
    id: resolvedTabId,
    title: tabTitle,
    tooltip: workspaceFilePathLabel({ cwd, path }),
  });

  if (artifactNavigationTarget != null) {
    createArtifactNavigator(resolvedTabId).navigateTo(artifactNavigationTarget);
  }
  if (syncOpenTabs) syncOpenReviewFileSourceTabs(store);
  return true;
}
