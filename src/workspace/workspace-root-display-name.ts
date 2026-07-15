// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js
// Workspace-root display-name helper.

export function getWorkspaceRootDisplayName(
  workspaceRoot?: string | null,
  titleOverride?: string | null,
): string | null {
  if (titleOverride != null && titleOverride.trim().length > 0) {
    return truncateWorkspaceRootDisplayName(titleOverride);
  }
  if (workspaceRoot == null) return null;

  const trimmedRoot = workspaceRoot.trim();
  if (trimmedRoot.length === 0) return null;

  const segments = trimmedRoot.split(/[/\\]+/).filter(Boolean);
  return truncateWorkspaceRootDisplayName(
    segments[segments.length - 1] ?? trimmedRoot,
  );
}

function truncateWorkspaceRootDisplayName(value: string): string {
  const trimmedValue = value.trim();
  const words = trimmedValue.split(/\s+/).filter(Boolean);
  return words.length <= 3 ? trimmedValue : words.slice(0, 3).join(" ");
}

export function initWorkspaceRootDisplayNameRuntime(): void {}
