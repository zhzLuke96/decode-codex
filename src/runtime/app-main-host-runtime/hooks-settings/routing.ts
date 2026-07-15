// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// Hooks-settings URL and selection helpers.

import {
  HOOKS_SETTINGS_ROUTE_PREFIX,
  HOOKS_SETTINGS_SECTION_ID,
} from "./constants";
import { getSingleHookSourceKind } from "./grouping";
import type {
  HookConfig,
  HookConfigEntry,
  HookSourceEntry,
  HooksSettingsSelection,
  NormalizedHookSource,
} from "./types";

export function parseHooksSettingsRouteSelection({
  pluginId,
  projectRoot,
  projectRoots,
  source,
}: {
  pluginId?: string | null;
  projectRoot?: string | null;
  projectRoots?: readonly string[] | null;
  source?: string | null;
}): HooksSettingsSelection | null {
  const normalizedSource = normalizeHookSourceForSettings(source);
  if (
    (normalizedSource === "project" ||
      (normalizedSource == null && source == null)) &&
    projectRoot != null &&
    projectRoots?.includes(projectRoot) === true
  ) {
    return { source: "project", projectRoot };
  }
  if (normalizedSource == null || normalizedSource === "project") return null;
  if (normalizedSource === "plugin") {
    return pluginId == null
      ? { source: "plugin" }
      : {
          source: "plugin",
          pluginId: pluginId === "__unknown__" ? null : pluginId,
        };
  }
  return { source: normalizedSource };
}

export function resolveHooksSettingsEntry(
  sections: readonly HookSourceEntry[],
  selection: HooksSettingsSelection | null,
): HookConfigEntry | null {
  if (selection == null) return null;
  const section = sections.find((section) => section.id === selection.source);
  if (section == null) return null;
  if (selection.source === "project") {
    return section.id === "project"
      ? (section.projectEntries.find(
          (entry) => entry.cwd === selection.projectRoot,
        ) ?? null)
      : null;
  }
  if (selection.source === "plugin") {
    if (section.id !== "plugin") return null;
    return selection.pluginId === undefined
      ? section.entry
      : (section.pluginEntries.find(
          (entry) => entry.pluginId === selection.pluginId,
        )?.entry ?? null);
  }
  return section.id === selection.source ? section.entry : null;
}

export function createHooksSettingsSectionSearchParams({
  hostId,
  pluginId,
  projectRoot,
  source,
}: {
  hostId?: string | null;
  pluginId?: string | null;
  projectRoot?: string | null;
  source?: NormalizedHookSource | null;
}): string {
  const searchParams = new URLSearchParams();
  if (hostId != null) searchParams.set("hostId", hostId);
  if (source != null) searchParams.set("source", source);
  if (source != null && projectRoot != null) {
    searchParams.set("projectRoot", projectRoot);
  }
  if (source === "plugin" && pluginId !== undefined) {
    searchParams.set("pluginId", pluginId ?? "__unknown__");
  }
  const queryString = searchParams.toString();
  return queryString === ""
    ? HOOKS_SETTINGS_SECTION_ID
    : `${HOOKS_SETTINGS_SECTION_ID}?${queryString}`;
}

export function createHooksSettingsPathFromHooks({
  hooks,
  hostId,
  projectRoot,
}: {
  hooks: readonly HookConfig[];
  hostId?: string | null;
  projectRoot?: string | null;
}): string {
  const source = getSourceForHookSelection(hooks, projectRoot);
  return createHooksSettingsSectionSearchParams({
    hostId,
    pluginId: source === "plugin" ? getSinglePluginId(hooks) : undefined,
    projectRoot,
    source,
  });
}

export function buildHooksSettingsPath(input: {
  hostId?: string | null;
  pluginId?: string | null;
  projectRoot?: string | null;
  source?: NormalizedHookSource | null;
}): string {
  return `${HOOKS_SETTINGS_ROUTE_PREFIX}/${createHooksSettingsSectionSearchParams(
    input,
  )}`;
}

export function applyHooksSettingsSearchParams(
  searchParams: URLSearchParams,
  hostId: string,
  selection: HooksSettingsSelection | null,
): void {
  searchParams.delete("hostId");
  searchParams.delete("pluginId");
  searchParams.delete("projectRoot");
  searchParams.delete("source");

  if (selection == null) return;
  searchParams.set("hostId", hostId);
  searchParams.set("source", selection.source);
  if (selection.source === "project") {
    searchParams.set("projectRoot", selection.projectRoot);
  } else if (
    selection.source === "plugin" &&
    selection.pluginId !== undefined
  ) {
    searchParams.set("pluginId", selection.pluginId ?? "__unknown__");
  }
}

export function getSourceForHookSelection(
  hooks: readonly HookConfig[],
  projectRoot: string | null,
): NormalizedHookSource | null {
  const source = getSingleHookSourceKind(hooks.map((hook) => hook.source));
  return source === "project" && projectRoot == null ? null : source;
}

export function getSinglePluginId(
  hooks: readonly HookConfig[],
): string | null | undefined {
  const pluginIds = new Set(hooks.map((hook) => hook.pluginId));
  return pluginIds.size === 1 ? pluginIds.values().next().value : undefined;
}

export function navigateToHooksSettingsSection({
  hostId,
  navigate,
  section,
  setSelectedHostId,
}: {
  hostId: string;
  navigate: (path: string) => void;
  section: string;
  setSelectedHostId: (hostId: string) => void;
}): void {
  setSelectedHostId(hostId);
  navigate(`/settings/${section}`);
}

function normalizeHookSourceForSettings(
  source: string | null | undefined,
): NormalizedHookSource | null {
  switch (source) {
    case "plugin":
    case "user":
    case "admin":
    case "project":
    case "sessionFlags":
    case "unknown":
      return source;
    case null:
    case undefined:
      return null;
    default:
      return null;
  }
}
