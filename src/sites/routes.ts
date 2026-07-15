// Restored from ref/webview/assets/sites-DPcqhqgt.js
// sites-DPcqhqgt chunk restored from the Codex webview bundle.
export const SITE_SETTINGS_ROUTE = "/sites/:projectId/settings";
export const SITES_LIBRARY_ROUTE = "/sites/library";
export function getSiteSettingsPath(projectId: string): string {
  return `/sites/${encodeURIComponent(projectId)}/settings`;
}
