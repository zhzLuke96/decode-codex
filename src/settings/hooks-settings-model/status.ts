// Restored from ref/webview/assets/hooks-settings-model-CesfUzEC.js
// hooks-settings-model-CesfUzEC chunk restored from the Codex webview bundle.
import type {
  HookConfigEntry,
  HookDefinition,
  HookError,
  HookSourceGroupId,
} from "./types";

function hookNeedsReview(hook: HookDefinition) {
  return hook.trustStatus === "untrusted" || hook.trustStatus === "modified";
}

function isHookActive(hook: HookDefinition) {
  return (
    hook.trustStatus === "managed" ||
    (hook.enabled && hook.trustStatus === "trusted")
  );
}

function normalizeRawHookSource(source: string) {
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
    default:
      return undefined;
  }
}

function normalizeHookSourceGroupId(
  source: string | null | undefined,
): HookSourceGroupId | null {
  switch (source) {
    case "plugin":
    case "user":
    case "admin":
    case "project":
    case "sessionFlags":
    case "unknown":
      return source;
    case null:
      return null;
    default:
      return null;
  }
}

function uniqueHooksByKey(hooks: HookDefinition[]) {
  const hooksByKey = new Map<string, HookDefinition>();
  for (const hook of hooks) {
    if (!hooksByKey.has(hook.key)) hooksByKey.set(hook.key, hook);
  }
  return Array.from(hooksByKey.values());
}

function uniqueHookErrors(errors: HookError[]) {
  const errorsByLocationAndMessage = new Map<string, HookError>();
  for (const error of errors) {
    errorsByLocationAndMessage.set(`${error.path}:${error.message}`, error);
  }
  return Array.from(errorsByLocationAndMessage.values());
}

function hasOnlyConfigIssues(entry: HookConfigEntry) {
  return (
    entry.hooks.length === 0 &&
    (entry.warnings.length > 0 || entry.errors.length > 0)
  );
}

export {
  hasOnlyConfigIssues,
  hookNeedsReview,
  isHookActive,
  normalizeHookSourceGroupId,
  normalizeRawHookSource,
  uniqueHookErrors,
  uniqueHooksByKey,
};
