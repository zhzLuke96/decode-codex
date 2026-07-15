// Restored from ref/webview/assets/hooks-settings-route-29iNzgOb.js

import { getCommonHookSourceGroup } from "./hooks-settings-model";
type HookSettingsRouteSource =
  | "plugin"
  | "user"
  | "admin"
  | "project"
  | "sessionFlags"
  | "unknown";
type HookSettingsRouteOptions = {
  hostId?: string | null;
  pluginId?: string | null;
  projectRoot?: string | null;
  source?: HookSettingsRouteSource | null;
};
type HookSettingsRouteHook = {
  source: string;
  pluginId?: string | null;
};
type HookSettingsRouteSelection =
  | {
      source: "project";
      projectRoot: string;
    }
  | {
      source: "plugin";
      pluginId?: string | null;
    }
  | {
      source: Exclude<HookSettingsRouteSource, "project" | "plugin">;
    };
const HOOKS_SETTINGS_ROUTE = "hooks-settings";
const SETTINGS_ROUTE_PREFIX = "/settings";
const UNKNOWN_PLUGIN_ID = "__unknown__";
function buildHooksSettingsRoute({
  hostId,
  pluginId,
  projectRoot,
  source,
}: HookSettingsRouteOptions) {
  const searchParams = new URLSearchParams();
  if (hostId != null) searchParams.set("hostId", hostId);
  if (source != null) searchParams.set("source", source);
  if (source != null && projectRoot != null) {
    searchParams.set("projectRoot", projectRoot);
  }
  if (source === "plugin" && pluginId !== undefined) {
    searchParams.set("pluginId", pluginId ?? UNKNOWN_PLUGIN_ID);
  }
  const query = searchParams.toString();
  return query === ""
    ? HOOKS_SETTINGS_ROUTE
    : `${HOOKS_SETTINGS_ROUTE}?${query}`;
}
function buildHooksSettingsPath(options: HookSettingsRouteOptions) {
  return `${SETTINGS_ROUTE_PREFIX}/${buildHooksSettingsRoute(options)}`;
}
function buildHooksSettingsRouteForHooks({
  hooks,
  hostId,
  projectRoot,
}: {
  hooks: HookSettingsRouteHook[];
  hostId?: string | null;
  projectRoot?: string | null;
}) {
  const source = getHooksSettingsRouteSource(hooks, projectRoot);
  return buildHooksSettingsRoute({
    hostId,
    pluginId: source === "plugin" ? getSharedHooksPluginId(hooks) : undefined,
    projectRoot,
    source,
  });
}
function updateHooksSettingsSearchParams(
  searchParams: URLSearchParams,
  hostId: string,
  selection: HookSettingsRouteSelection | null | undefined,
) {
  searchParams.delete("hostId");
  searchParams.delete("pluginId");
  searchParams.delete("projectRoot");
  searchParams.delete("source");
  if (selection == null) return;
  searchParams.set("hostId", hostId);
  searchParams.set("source", selection.source);
  if (selection.source === "project") {
    searchParams.set("projectRoot", selection.projectRoot);
    return;
  }
  if (selection.source === "plugin" && selection.pluginId !== undefined) {
    searchParams.set("pluginId", selection.pluginId ?? UNKNOWN_PLUGIN_ID);
  }
}
function getHooksSettingsRouteSource(
  hooks: HookSettingsRouteHook[],
  projectRoot: string | null | undefined,
) {
  const source = getCommonHookSourceGroup(hooks.map((hook) => hook.source));
  return source === "project" && projectRoot == null ? null : source;
}
function getSharedHooksPluginId(hooks: HookSettingsRouteHook[]) {
  const pluginIds = new Set(hooks.map((hook) => hook.pluginId));
  if (pluginIds.size === 1) return pluginIds.values().next().value ?? null;
  return undefined;
}
function initHooksSettingsRouteChunk(): void {
  void HOOKS_SETTINGS_ROUTE;
}
function initHooksSettingsRouteDetectionChunk(): void {}
export {
  updateHooksSettingsSearchParams,
  buildHooksSettingsRouteForHooks,
  buildHooksSettingsRoute,
  buildHooksSettingsPath,
  initHooksSettingsRouteChunk,
  initHooksSettingsRouteDetectionChunk,
};
