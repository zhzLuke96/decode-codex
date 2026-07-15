// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page-14pJ3ozX.js
// Runtime init shims and signal/context exports for the project sidebar.

import type { PendingThreadDrop } from "./types";

export const taskPullRequestBadgeSignal = {
  key: "task-pull-request-badge",
};
export const localTaskPullRequestBadgeSignal = {
  key: "local-task-pull-request-badge",
};
export const sidebarShortcutLabelContextDefault = new Map<string, string>();
export const ShortcutLabelContext = {
  defaultValue: sidebarShortcutLabelContextDefault,
  displayName: "SidebarShortcutLabelContext",
};
export const sidebarShortcutLabelContext = ShortcutLabelContext;
export const pendingThreadDropsContext = {
  displayName: "PendingThreadDropsContext",
  value: [] as PendingThreadDrop[],
};

export function initThreadEnvironmentIconsRuntime(): void {}

export function initSidebarThreadSwitchRuntime(): void {}

export function initSidebarDragDropRuntime(): void {
  initSidebarDndContextRuntime();
  initSidebarDragHelpers();
}

export function initSidebarShortcutLabelContext(): void {}

export function initSidebarDndContextRuntime(): void {}

export function initCloudTaskRowRuntime(): void {}

export function initPullRequestStatusHelpers(): void {}

export function initThreadEnvironmentIconRuntime(): void {
  initThreadEnvironmentIconsRuntime();
}

export function initSidebarAddProjectStateRuntime(): void {}

export function initProjectGroupCollapseHelpers(): void {}

export function initProjectIconBadgeRuntime(): void {}

export function initRemoteConnectionStatusBadgeRuntime(): void {}

export function initOpenProjectRouteRuntime(): void {}

export function initSidebarThreadStatusRuntime(): void {}

export function initProjectDisclosureIconRuntime(): void {}

export function initPinnedProjectHelpers(): void {}

export function initRemoteConnectionStatusSnapshotRuntime(): void {}

export function initProjectSourceIconRuntime(): void {}

export function initProjectsSidebarRuntime(): void {
  initSidebarDragDropRuntime();
  initSidebarThreadListRuntime();
}

export function initThreadListDragOrderingRuntime(): void {}

export function initTaskPullRequestBadgeRuntime(): void {
  initPullRequestStatusHelpers();
}

export function initCreateProjectTypeDialogRuntime(): void {}

export function initSidebarDragHelpers(): void {}

export function initProjectHoverCardRuntime(): void {}

export function initNewChatToolbarButtonRuntime(): void {}

export function initProjectSourceLabelHelpers(): void {}

export function initSidebarDragTransformModifiersChunk(): void {}

export function initSidebarDropIndicatorRuntime(): void {}

export function initCollapsibleSidebarSectionRuntime(): void {}

export function initProjectThreadOrderPersistenceRuntime(): void {}

export function initProjectThreadOrderActionsRuntime(): void {}

export function initSidebarThreadListRuntime(): void {}

export function initProjectAppearanceRuntime(): void {}

export function initSidebarNavigationActionsRuntime(): void {}

export function initStartProjectConversationRuntime(): void {}
