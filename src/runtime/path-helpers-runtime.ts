// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Path helpers shared by local conversation environment surfaces.

export function initPathHelpersRuntime(): void {}

export function normalizePath(path: string): string {
  return path.replace(/\\/g, "/").replace(/\/+/g, "/");
}

export function joinPath(...parts: string[]): string {
  return parts.reduce(
    (joinedPath, part) =>
      joinedPath
        ? part
          ? `${joinedPath.replace(/\/+$/u, "")}/${part.replace(/^\/+/u, "")}`
          : joinedPath
        : part,
    "",
  );
}

export function normalizeWorkspaceBrowserRoot(path: string): string {
  return path;
}
