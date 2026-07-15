// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Local environment config-path normalization helpers.

export function initConfigPathRuntime(): void {}

export function normalizeConfigPath(path: string): string {
  const uncNamespace = path.match(/^\\\\\?\\UNC\\(.*)$/iu);
  const driveNamespace = path.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/u);
  const withoutNamespace =
    uncNamespace != null
      ? `\\\\${uncNamespace[1]}`
      : (driveNamespace?.[1] ?? path);
  return withoutNamespace.replace(/\\/gu, "/");
}
