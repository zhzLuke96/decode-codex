// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Remap captured panel tabs from a source conversation/workspace to a target.
import { posix as posixPath } from "node:path";
import {
  browserTabIdForConversation,
  isUncPath,
  isWindowsStyleAbsolutePath,
  isWorkspaceFilePath,
  normalizeFilesystemPath,
  terminalSessionSnapshotStore,
  terminalTabIdForSession,
} from "./fork-conversation-panel-state-deps";
import type {
  CapturedPanelState,
  CapturedPanelTab,
} from "./fork-conversation-panel-state-types";

export function remapPanelStateToTarget(
  state: CapturedPanelState,
  targetBrowserConversationId: string,
  sourceWorkspaceRoot?: string,
  targetWorkspaceRoot?: string,
): CapturedPanelState {
  const copiedTargetsByTabId = new Map<
    string | number,
    { tabId: string | number; terminalSessionId?: string }
  >();
  for (const tab of state.tabs) {
    copiedTargetsByTabId.set(
      tab.tabId,
      remapTabIdentity(
        tab,
        state.sourceBrowserConversationId,
        targetBrowserConversationId,
        sourceWorkspaceRoot,
        targetWorkspaceRoot,
      ),
    );
  }
  return {
    ...state,
    tabs: state.tabs.map((tab) =>
      remapTab(
        tab,
        copiedTargetsByTabId,
        state.sourceBrowserConversationId,
        targetBrowserConversationId,
        sourceWorkspaceRoot,
        targetWorkspaceRoot,
      ),
    ),
    targetBrowserConversationId,
  };
}

function remapTabIdentity(
  tab: CapturedPanelTab,
  sourceBrowserConversationId: string,
  targetBrowserConversationId: string,
  sourceWorkspaceRoot: string | undefined,
  targetWorkspaceRoot: string | undefined,
): { tabId: string | number; terminalSessionId?: string } {
  if (tab.kind === "terminal") {
    const terminalSessionId = terminalSessionSnapshotStore.createSessionId();
    return {
      tabId: terminalTabIdForSession(terminalSessionId),
      terminalSessionId,
    };
  }
  if (
    tab.kind === "browser" &&
    tab.browserTabId ===
      browserTabIdForConversation(sourceBrowserConversationId)
  ) {
    return { tabId: browserTabIdForConversation(targetBrowserConversationId) };
  }
  const remappedPath = remapWorkspacePath(
    tab,
    sourceWorkspaceRoot,
    targetWorkspaceRoot,
  );
  if (remappedPath == null) return { tabId: tab.tabId };
  switch (tab.kind) {
    case "artifact":
      return { tabId: `artifact:${tab.hostId}:${remappedPath}` };
    case "review-file":
      return { tabId: `file:${tab.hostId}:${remappedPath}` };
    case "text-editor":
      return { tabId: `text-editor:${tab.hostId}:${remappedPath}` };
    case "browser":
      return { tabId: tab.tabId };
  }
}

function remapTab(
  tab: CapturedPanelTab,
  copiedTargetsByTabId: Map<
    string | number,
    { tabId: string | number; terminalSessionId?: string }
  >,
  sourceBrowserConversationId: string,
  targetBrowserConversationId: string,
  sourceWorkspaceRoot: string | undefined,
  targetWorkspaceRoot: string | undefined,
): CapturedPanelTab {
  const copiedTarget = copiedTargetsByTabId.get(tab.tabId);
  if (copiedTarget == null) throw Error("Expected copied tab target");
  const remappedInsertAfterTabId =
    tab.insertAfterTabId == null
      ? null
      : (copiedTargetsByTabId.get(tab.insertAfterTabId)?.tabId ??
        tab.insertAfterTabId);
  const remappedPath = remapWorkspacePath(
    tab,
    sourceWorkspaceRoot,
    targetWorkspaceRoot,
  );
  switch (tab.kind) {
    case "browser":
      return {
        ...tab,
        browserTabId:
          tab.browserTabId ===
          browserTabIdForConversation(sourceBrowserConversationId)
            ? browserTabIdForConversation(targetBrowserConversationId)
            : tab.browserTabId,
        insertAfterTabId: remappedInsertAfterTabId,
        tabId: copiedTarget.tabId,
      };
    case "terminal":
      if (copiedTarget.terminalSessionId == null) {
        throw Error("Expected copied terminal session");
      }
      return {
        ...tab,
        insertAfterTabId: remappedInsertAfterTabId,
        sessionId: copiedTarget.terminalSessionId,
        tabId: copiedTarget.tabId,
      };
    case "artifact":
    case "text-editor":
      return {
        ...tab,
        insertAfterTabId: remappedInsertAfterTabId,
        path: remappedPath ?? tab.path,
        tabId: copiedTarget.tabId,
      };
    case "review-file":
      return {
        ...tab,
        insertAfterTabId: remappedInsertAfterTabId,
        path: remappedPath as string,
        tabId: copiedTarget.tabId,
        workspaceRoot: targetWorkspaceRoot ?? tab.workspaceRoot,
      };
  }
}

function remapWorkspacePath(
  tab: CapturedPanelTab,
  sourceWorkspaceRoot: string | undefined,
  targetWorkspaceRoot: string | undefined,
): string | null {
  if (
    tab.kind === "browser" ||
    tab.kind === "terminal" ||
    (tab as { path?: string }).path == null ||
    sourceWorkspaceRoot == null ||
    targetWorkspaceRoot == null
  ) {
    return "path" in tab ? (tab as { path: string }).path : null;
  }
  const normalizedPath = normalizeFilesystemPath(tab.path);
  const normalizedSourceRoot = normalizeFilesystemPath(sourceWorkspaceRoot);
  const caseInsensitive =
    isWindowsStyleAbsolutePath(normalizedSourceRoot) ||
    isUncPath(normalizedSourceRoot);
  const relativePath = posixPath.relative(
    caseInsensitive ? normalizedSourceRoot.toLowerCase() : normalizedSourceRoot,
    caseInsensitive ? normalizedPath.toLowerCase() : normalizedPath,
  );
  if (
    !isWorkspaceFilePath(tab.path) ||
    relativePath === ".." ||
    relativePath.startsWith(`..${posixPath.sep}`) ||
    posixPath.isAbsolute(relativePath)
  ) {
    return tab.path;
  }
  const relativeSegmentCount = relativePath
    .split(posixPath.sep)
    .filter(Boolean).length;
  const trailingSourceSegments =
    relativeSegmentCount === 0
      ? ""
      : normalizedPath
          .split(posixPath.sep)
          .slice(-relativeSegmentCount)
          .join(posixPath.sep);
  const remappedPath = normalizeFilesystemPath(
    posixPath.join(targetWorkspaceRoot, trailingSourceSegments),
  );
  return isUncPath(targetWorkspaceRoot)
    ? `//${remappedPath.replace(/^\/+/, "")}`
    : remappedPath;
}
