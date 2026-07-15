// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Path basename helper shared by artifact and conversation summary surfaces.

export function getPathBasename(path: string): string {
  let normalizedPath = path.replaceAll("\\", "/").replace(/\/+$/, "");
  if (normalizedPath.length === 0) return "";
  let separatorIndex = normalizedPath.lastIndexOf("/");
  return separatorIndex === -1
    ? normalizedPath
    : normalizedPath.slice(separatorIndex + 1);
}
