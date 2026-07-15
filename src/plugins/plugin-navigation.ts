// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Restored with route constants from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app-BnLvjK3w.js
// Plugin mention links use a lightweight `plugin://<pluginId>` scheme in the
// composer document, which resolves to the plugin detail route.

const PLUGIN_MENTION_PATH_PREFIX = "plugin://";
const PLUGIN_DETAIL_ROUTE_PREFIX = "/skills/plugins";

export interface PluginNavigationOptions {
  hostId?: string | null;
  source?: string | null;
}

export type PluginNavigationTarget = string;

export function parsePluginMentionPath(path: string): string | null {
  if (!path.startsWith(PLUGIN_MENTION_PATH_PREFIX)) return null;
  const pluginId = path.slice(PLUGIN_MENTION_PATH_PREFIX.length).trim();
  return pluginId.length === 0 ? null : pluginId;
}

function encodePluginRouteParam(pluginId: string): string {
  return encodeURIComponent(pluginId).replaceAll("%40", "@");
}

function buildPluginDetailSearch(options: PluginNavigationOptions): string {
  const searchParams = new URLSearchParams();
  if (options.source != null) searchParams.set("source", options.source);
  if (options.hostId != null) searchParams.set("hostId", options.hostId);
  const search = searchParams.toString();
  return search.length === 0 ? "" : `?${search}`;
}

export function buildPluginDetailPath({
  pluginId,
  ...options
}: PluginNavigationOptions & { pluginId: string }): PluginNavigationTarget {
  return `${PLUGIN_DETAIL_ROUTE_PREFIX}/${encodePluginRouteParam(pluginId)}${buildPluginDetailSearch(options)}`;
}

export function resolvePluginNavigationTarget(
  path: string,
  options: PluginNavigationOptions = {},
): PluginNavigationTarget | null {
  const pluginId = parsePluginMentionPath(path);
  return pluginId == null
    ? null
    : buildPluginDetailPath({ ...options, pluginId });
}
