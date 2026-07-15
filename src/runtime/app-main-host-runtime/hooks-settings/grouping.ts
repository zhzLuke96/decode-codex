// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js
// Hooks-settings source grouping and review-summary helpers.

import { HOOK_EVENT_NAMES, HOOKS_SETTINGS_SOURCE_ORDER } from "./constants";
import {
  hasOnlyIssues,
  isPresent,
  uniqueHooksByKey,
  uniqueIssuesByPathAndMessage,
} from "./grouping-utils";
import type {
  HookConfig,
  HookConfigEntry,
  HookEventName,
  HookSource,
  HookSourceEntry,
  NormalizedHookSource,
  PluginHookEntry,
} from "./types";

export function summarizeHooksByEvent(hooks: readonly HookConfig[]): Array<{
  active: number;
  eventName: HookEventName;
  installed: number;
  needsReview: number;
}> {
  return HOOK_EVENT_NAMES.map((eventName) => {
    const eventHooks = hooks.filter((hook) => hook.eventName === eventName);
    return {
      eventName,
      active: eventHooks.filter(isHookActive).length,
      installed: eventHooks.length,
      needsReview: eventHooks.filter(isHookReviewNeeded).length,
    };
  });
}

export function countHooksNeedingReview(hooks: readonly HookConfig[]): number {
  return hooks.filter(isHookReviewNeeded).length;
}

export function getPluginHooksNeedingReview(
  entries: readonly HookConfigEntry[] | null | undefined,
  plugin: { hooks: readonly { key: string }[]; summary: { id: string } } | null,
): HookConfig[] {
  if (plugin == null) return [];
  const pluginHookKeys = new Set(plugin.hooks.map((hook) => hook.key));
  return uniqueHooksByKey(
    entries?.flatMap((entry) =>
      entry.hooks.filter(
        (hook) =>
          hook.source === "plugin" &&
          hook.pluginId === plugin.summary.id &&
          pluginHookKeys.has(hook.key) &&
          isHookReviewNeeded(hook),
      ),
    ) ?? [],
  );
}

export function getInstalledPluginHookReviewRows(
  plugin: HookConfigEntry | null | undefined,
  eventOrder: readonly HookEventName[],
  selectedEventName: HookEventName | null,
): HookConfig[] | undefined {
  if (
    plugin == null ||
    !plugin.summary?.installed ||
    plugin.hooks.length === 0
  ) {
    return undefined;
  }
  const selectedEvents = mergeHookSourceOrder(
    plugin.hooks.map((hook) => hook.eventName),
    eventOrder,
    selectedEventName,
  );
  return selectedEvents.length === 0
    ? undefined
    : uniqueHooksByKey(
        plugin.hooks.filter((hook) => selectedEvents.includes(hook.eventName)),
      );
}

export function summarizeHookConfigIssues(entry: HookConfigEntry): {
  issueCount: number;
  needsReview: number;
} {
  return {
    issueCount: entry.warnings.length + entry.errors.length,
    needsReview: entry.hooks.filter(isHookReviewNeeded).length,
  };
}

export function buildHooksSettingsSourceSections(
  entries: readonly HookConfigEntry[],
): HookSourceEntry[] {
  const sections: HookSourceEntry[] = [];
  for (const source of HOOKS_SETTINGS_SOURCE_ORDER) {
    const section = getHookSourceEntry(entries, source);
    if (section != null) sections.push(section);
  }
  return sections;
}

export function getHooksForEventSorted(
  hooks: readonly HookConfig[],
  eventName: HookEventName,
): HookConfig[] {
  return hooks
    .filter((hook) => hook.eventName === eventName)
    .sort((leftHook, rightHook) =>
      leftHook.displayOrder < rightHook.displayOrder
        ? -1
        : leftHook.displayOrder > rightHook.displayOrder
          ? 1
          : 0,
    );
}

export function isHookReviewNeeded(hook: HookConfig): boolean {
  return hook.trustStatus === "untrusted" || hook.trustStatus === "modified";
}

export function normalizeHookSource(source: HookSource): NormalizedHookSource {
  switch (source) {
    case "plugin":
      return "plugin";
    case "user":
      return "user";
    case "system":
    case "mdm":
    case "cloudRequirements":
    case "cloudManagedConfig":
    case "legacyManagedConfigFile":
    case "legacyManagedConfigMdm":
      return "admin";
    case "project":
      return "project";
    case "sessionFlags":
      return "sessionFlags";
    case "unknown":
      return "unknown";
    case "admin":
      return "admin";
  }
}

export function getSingleHookSourceKind(
  sources: readonly HookSource[],
): NormalizedHookSource | null {
  if (sources.length === 0) return null;
  const normalizedSources = new Set(sources.map(normalizeHookSource));
  return normalizedSources.size === 1
    ? (normalizedSources.values().next().value ?? null)
    : null;
}

export function mergeHookSourceOrder<T extends string>(
  sourceOrder: readonly T[],
  preferredOrder: readonly T[],
  selectedValue: T | null,
): T[] {
  const preferredValues = new Set(preferredOrder);
  const orderedValues = [
    ...preferredValues,
    ...Array.from(new Set(sourceOrder))
      .filter((value) => !preferredValues.has(value))
      .sort((leftValue, rightValue) => leftValue.localeCompare(rightValue)),
  ];
  if (selectedValue != null && !orderedValues.includes(selectedValue)) {
    orderedValues.push(selectedValue);
  }
  return orderedValues;
}

function getHookSourceEntry(
  entries: readonly HookConfigEntry[],
  source: NormalizedHookSource,
): HookSourceEntry | null {
  switch (source) {
    case "project": {
      const projectEntries = entries.map(getProjectHookEntry).filter(isPresent);
      return projectEntries.length === 0
        ? null
        : { id: source, projectEntries };
    }
    case "plugin": {
      const entry = getGroupedHookEntry(entries, source);
      const pluginEntries = getPluginHookEntries(entries);
      return entry == null || pluginEntries.length === 0
        ? null
        : { id: source, entry, pluginEntries };
    }
    case "user":
    case "admin":
    case "sessionFlags":
    case "unknown": {
      const entry = getGroupedHookEntry(entries, source);
      return entry == null ? null : { id: source, entry };
    }
  }
}

function getProjectHookEntry(entry: HookConfigEntry): HookConfigEntry | null {
  const hooks = entry.hooks.filter(
    (hook) => normalizeHookSource(hook.source) === "project",
  );
  return hooks.length === 0 ? null : { ...entry, hooks };
}

function getPluginHookEntries(
  entries: readonly HookConfigEntry[],
): PluginHookEntry[] {
  const hooksByPluginId = new Map<string | null | undefined, HookConfig[]>();
  for (const entry of entries) {
    for (const hook of entry.hooks) {
      if (normalizeHookSource(hook.source) !== "plugin") continue;
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
      entry: createGroupedHookEntry(entries, hooks),
    }));
}

function getGroupedHookEntry(
  entries: readonly HookConfigEntry[],
  source: NormalizedHookSource,
): HookConfigEntry | null {
  const hooks = entries.flatMap((entry) =>
    entry.hooks.filter((hook) => normalizeHookSource(hook.source) === source),
  );
  const issueOnlyEntries =
    source === "unknown" ? entries.filter(hasOnlyIssues) : [];
  return hooks.length === 0 && issueOnlyEntries.length === 0
    ? null
    : createGroupedHookEntry(entries, hooks, issueOnlyEntries);
}

function createGroupedHookEntry(
  entries: readonly HookConfigEntry[],
  hooks: readonly HookConfig[],
  issueEntries: readonly HookConfigEntry[] = [],
): HookConfigEntry {
  const uniqueHooks = uniqueHooksByKey(hooks);
  const hookKeys = new Set(uniqueHooks.map((hook) => hook.key));
  const entriesWithHookIssues = [
    ...entries.filter((entry) =>
      entry.hooks.some((hook) => hookKeys.has(hook.key)),
    ),
    ...issueEntries,
  ];
  return {
    cwd: "",
    hooks: uniqueHooks,
    warnings: Array.from(
      new Set(entriesWithHookIssues.flatMap((entry) => entry.warnings)),
    ),
    errors: uniqueIssuesByPathAndMessage(
      entriesWithHookIssues.flatMap((entry) => entry.errors),
    ),
  };
}

function isHookActive(hook: HookConfig): boolean {
  return (
    hook.trustStatus === "managed" ||
    (hook.enabled && hook.trustStatus === "trusted")
  );
}
