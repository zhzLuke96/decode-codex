// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Error categorization for bundled marketplace reconciliation.

export type BundledPluginReconcileErrorCategory =
  | "local_plugin_source"
  | "other"
  | "plugin_cache_windows_file_lock"
  | "plugins_disabled";

export type PluginMarketplaceManifestReadErrorCategory =
  | "corrupt_json"
  | "invalid_schema"
  | "read_failed";

const PLUGIN_CACHE_OVERWRITE_FAILURE_MESSAGES = [
  "failed to back up plugin cache entry",
  "failed to activate updated plugin cache entry",
  "failed to activate plugin cache entry",
  "failed to remove existing plugin cache entry",
] as const;

const LOCAL_PLUGIN_SOURCE_ERROR_MESSAGES = [
  "plugin source path is not a directory",
  "missing plugin.json",
  "missing or invalid plugin.json",
  "local plugin source path",
  "failed to read plugin source directory",
  "failed to resolve local marketplace source path",
  "marketplace root does not contain a supported manifest",
  "marketplace file is not in a supported location",
] as const;

const WINDOWS_FILE_LOCK_ERROR_MESSAGES = [
  "access is denied",
  "being used by another process",
  "os error 32",
  "os error 5",
] as const;

export function categorizeBundledPluginReconcileError({
  error,
  platformFamily,
}: {
  error: unknown;
  platformFamily: string;
}): BundledPluginReconcileErrorCategory {
  const message = stringifyErrorMessage(error).toLowerCase();

  if (message.includes("codex plugins are disabled for this workspace")) {
    return "plugins_disabled";
  }

  if (
    platformFamily === "windows" &&
    (getPluginCacheOperationErrorCategory(error) ===
      "cache_overwrite_failure" ||
      includesAnyMessage(message, WINDOWS_FILE_LOCK_ERROR_MESSAGES))
  ) {
    return "plugin_cache_windows_file_lock";
  }

  return includesAnyMessage(message, LOCAL_PLUGIN_SOURCE_ERROR_MESSAGES)
    ? "local_plugin_source"
    : "other";
}

export function stringifyErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function getPluginCacheOperationErrorCategory(
  error: unknown,
): "cache_overwrite_failure" | "other" {
  const message = stringifyErrorMessage(error).toLowerCase();
  return includesAnyMessage(message, PLUGIN_CACHE_OVERWRITE_FAILURE_MESSAGES)
    ? "cache_overwrite_failure"
    : "other";
}

export function categorizePluginMarketplaceManifestReadError(
  error: unknown,
): PluginMarketplaceManifestReadErrorCategory {
  if (error instanceof SyntaxError) return "corrupt_json";
  return isSchemaValidationError(error) ? "invalid_schema" : "read_failed";
}

function includesAnyMessage(
  message: string,
  needles: readonly string[],
): boolean {
  return needles.some((needle) => message.includes(needle));
}

function isSchemaValidationError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  return (
    error.name === "ZodError" ||
    error.constructor.name === "$ZodError" ||
    (Array.isArray((error as { issues?: unknown }).issues) &&
      (error as { issues?: unknown[] }).issues?.length !== undefined)
  );
}
