// Restored from ref/webview/assets/hooks-settings-model-CesfUzEC.js
// hooks-settings-model-CesfUzEC chunk restored from the Codex webview bundle.
import { UNKNOWN_PLUGIN_ID } from "./constants";
import { normalizeHookSourceGroupId } from "./status";
import type {
  HookConfigEntry,
  HookSourceGroup,
  HookSourceSelection,
} from "./types";

function getPreferredHookSourceSelection(
  pluginEntry: HookConfigEntry | null | undefined,
  currentSelections: HookSourceSelection[],
  fallbackSelection: HookSourceSelection | null | undefined,
) {
  if (
    pluginEntry == null ||
    !pluginEntry.summary?.installed ||
    pluginEntry.hooks.length === 0
  ) {
    return undefined;
  }
  if (currentSelections.length > 0) return currentSelections;
  if (fallbackSelection != null) return [fallbackSelection];
  return undefined;
}

function parseHookSourceSelection({
  pluginId,
  source,
  projectRoot,
  projectRoots,
}: {
  pluginId?: string | null;
  source?: string | null;
  projectRoot?: string | null;
  projectRoots?: string[] | null;
}): HookSourceSelection | null {
  const sourceGroupId = normalizeHookSourceGroupId(source);
  return (sourceGroupId === "project" ||
    (sourceGroupId == null && source == null)) &&
    projectRoot != null &&
    projectRoots?.includes(projectRoot) === true
    ? { source: "project", projectRoot }
    : sourceGroupId == null || sourceGroupId === "project"
      ? null
      : sourceGroupId === "plugin"
        ? pluginId == null
          ? { source: "plugin" }
          : pluginId === UNKNOWN_PLUGIN_ID
            ? { source: "plugin", pluginId: null }
            : { source: "plugin", pluginId }
        : { source: sourceGroupId };
}

function findHookSourceEntry(
  groups: HookSourceGroup[],
  selection: HookSourceSelection | null | undefined,
) {
  if (selection == null) return null;

  const group = groups.find((group) => group.id === selection.source);
  return group == null
    ? null
    : selection.source === "project"
      ? group.id === "project"
        ? (group.projectEntries.find(
            (entry) => entry.cwd === selection.projectRoot,
          ) ?? null)
        : null
      : selection.source === "plugin"
        ? group.id === "plugin"
          ? selection.pluginId === undefined
            ? group.entry
            : (group.pluginEntries.find(
                (entry) => entry.pluginId === selection.pluginId,
              )?.entry ?? null)
          : null
        : group.id === selection.source
          ? group.entry
          : null;
}

export {
  findHookSourceEntry,
  getPreferredHookSourceSelection,
  parseHookSourceSelection,
};
