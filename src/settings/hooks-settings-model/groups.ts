// Restored from ref/webview/assets/hooks-settings-model-CesfUzEC.js
// hooks-settings-model-CesfUzEC chunk restored from the Codex webview bundle.
import { HOOK_SOURCE_GROUP_IDS } from "./constants";
import {
  hasOnlyConfigIssues,
  normalizeRawHookSource,
  uniqueHookErrors,
  uniqueHooksByKey,
} from "./status";
import type {
  HookConfigEntry,
  HookDefinition,
  HookSourceGroup,
  HookSourceGroupId,
} from "./types";

function buildHookSourceGroups(entries: HookConfigEntry[]) {
  const groups: HookSourceGroup[] = [];
  for (const groupId of HOOK_SOURCE_GROUP_IDS) {
    const group = buildHookSourceGroup(entries, groupId);
    if (group != null) groups.push(group);
  }
  return groups;
}

function buildHookSourceGroup(
  entries: HookConfigEntry[],
  groupId: HookSourceGroupId,
): HookSourceGroup | null {
  switch (groupId) {
    case "project": {
      const projectEntries = entries
        .map(getProjectHooksEntry)
        .filter((entry): entry is HookConfigEntry => entry != null);
      return projectEntries.length === 0
        ? null
        : { id: groupId, projectEntries };
    }
    case "plugin": {
      const entry = buildFlatHookSourceEntry(entries, groupId);
      const pluginEntries = buildPluginHookEntries(entries);
      return entry == null || pluginEntries.length === 0
        ? null
        : { id: groupId, entry, pluginEntries };
    }
    case "user":
    case "admin":
    case "sessionFlags":
    case "unknown": {
      const entry = buildFlatHookSourceEntry(entries, groupId);
      return entry == null ? null : { id: groupId, entry };
    }
  }
}

function getProjectHooksEntry(entry: HookConfigEntry) {
  const hooks = entry.hooks.filter(
    (hook) => normalizeRawHookSource(hook.source) === "project",
  );
  return hooks.length === 0 ? null : { ...entry, hooks };
}

function buildPluginHookEntries(entries: HookConfigEntry[]) {
  const hooksByPluginId = new Map<
    string | null | undefined,
    HookDefinition[]
  >();

  for (const entry of entries) {
    for (const hook of entry.hooks) {
      if (normalizeRawHookSource(hook.source) !== "plugin") continue;

      const hooks = hooksByPluginId.get(hook.pluginId);
      hooks == null
        ? hooksByPluginId.set(hook.pluginId, [hook])
        : hooks.push(hook);
    }
  }

  return Array.from(hooksByPluginId.entries())
    .sort(([leftPluginId], [rightPluginId]) =>
      leftPluginId == null
        ? 1
        : rightPluginId == null
          ? -1
          : leftPluginId.localeCompare(rightPluginId),
    )
    .map(([pluginId, hooks]) => ({
      pluginId,
      entry: buildHookSourceEntry(entries, hooks),
    }));
}

function buildFlatHookSourceEntry(
  entries: HookConfigEntry[],
  sourceGroupId: HookSourceGroupId,
) {
  const hooks = entries.flatMap((entry) =>
    entry.hooks.filter(
      (hook) => normalizeRawHookSource(hook.source) === sourceGroupId,
    ),
  );
  const orphanedIssueEntries =
    sourceGroupId === "unknown" ? entries.filter(hasOnlyConfigIssues) : [];
  return hooks.length === 0 && orphanedIssueEntries.length === 0
    ? null
    : buildHookSourceEntry(entries, hooks, orphanedIssueEntries);
}

function buildHookSourceEntry(
  entries: HookConfigEntry[],
  hooks: HookDefinition[],
  extraIssueEntries: HookConfigEntry[] = [],
): HookConfigEntry {
  const uniqueHooks = uniqueHooksByKey(hooks);
  const uniqueHookKeys = new Set(uniqueHooks.map((hook) => hook.key));
  const issueEntries = [
    ...entries.filter((entry) =>
      entry.hooks.some((hook) => uniqueHookKeys.has(hook.key)),
    ),
    ...extraIssueEntries,
  ];

  return {
    cwd: "",
    hooks: uniqueHooks,
    warnings: Array.from(
      new Set(issueEntries.flatMap((entry) => entry.warnings)),
    ),
    errors: uniqueHookErrors(issueEntries.flatMap((entry) => entry.errors)),
  };
}

export { buildHookSourceGroups };
