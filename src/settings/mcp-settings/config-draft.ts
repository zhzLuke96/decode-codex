// Restored from ref/webview/assets/mcp-settings-Cq9pFeQZ.js
// Conversion helpers between persisted MCP config and the editable settings form.
import type {
  EditableMcpServerConfig,
  EditableMcpServerDraft,
  KeyValueEntry,
  TransportType,
} from "./types";

export function formatMcpTitle(value: string | undefined): string {
  if (!value) return "";
  if (value.trim().length === 0) return value;
  if (value !== value.toLowerCase()) return value;
  return `${value[0]?.toUpperCase() ?? ""}${value.slice(1)}`;
}

export function getErrorMessage(error: unknown, fallback: string): string {
  return error instanceof Error && error.message.trim().length > 0
    ? error.message
    : fallback;
}

export function toEditableMcpServerDraft(
  config: EditableMcpServerConfig,
  initialKey: string | null,
): EditableMcpServerDraft {
  const transportType: TransportType =
    "command" in config ? "stdio" : "streamable_http";
  return {
    base: {
      enabled: config.enabled ?? undefined,
      startup_timeout_sec: config.startup_timeout_sec ?? undefined,
      startup_timeout_ms: config.startup_timeout_ms ?? undefined,
      tool_timeout_sec: config.tool_timeout_sec ?? undefined,
      enabled_tools: config.enabled_tools ?? undefined,
      disabled_tools: config.disabled_tools ?? undefined,
    },
    label: initialKey ?? config.name ?? "",
    transportType,
    stdio: {
      command: "command" in config ? config.command : "",
      args:
        "command" in config && config.args && config.args.length > 0
          ? config.args
          : [],
      env:
        "command" in config && config.env ? toKeyValueEntries(config.env) : [],
      envVars:
        "command" in config && config.env_vars && config.env_vars.length > 0
          ? config.env_vars
          : [],
      cwd: "command" in config && config.cwd ? config.cwd : "",
    },
    http: {
      url: "url" in config ? config.url : "",
      bearerTokenEnvVar:
        "url" in config && config.bearer_token_env_var
          ? config.bearer_token_env_var
          : "",
      httpHeaders:
        "url" in config && config.http_headers
          ? toKeyValueEntries(config.http_headers)
          : [],
      envHttpHeaders:
        "url" in config && config.env_http_headers
          ? toKeyValueEntries(config.env_http_headers)
          : [],
    },
  };
}

export function fromEditableMcpServerDraft(
  draft: EditableMcpServerDraft,
): EditableMcpServerConfig {
  const baseConfig = draft.base;
  if (draft.transportType === "streamable_http") {
    const httpHeaders = fromKeyValueEntries(draft.http.httpHeaders);
    const envHttpHeaders = fromKeyValueEntries(draft.http.envHttpHeaders);
    return {
      ...baseConfig,
      url: draft.http.url,
      bearer_token_env_var:
        draft.http.bearerTokenEnvVar.trim().length > 0
          ? draft.http.bearerTokenEnvVar.trim()
          : undefined,
      http_headers:
        Object.keys(httpHeaders).length > 0 ? httpHeaders : undefined,
      env_http_headers:
        Object.keys(envHttpHeaders).length > 0 ? envHttpHeaders : undefined,
    };
  }

  const env = fromKeyValueEntries(draft.stdio.env);
  const envVars = draft.stdio.envVars
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  const args = draft.stdio.args
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  return {
    ...baseConfig,
    command: draft.stdio.command,
    args: args.length > 0 ? args : undefined,
    env: Object.keys(env).length > 0 ? env : undefined,
    env_vars: envVars.length > 0 ? envVars : undefined,
    cwd: draft.stdio.cwd.trim().length > 0 ? draft.stdio.cwd.trim() : undefined,
  };
}

export function getUniqueMcpServerKey(
  label: string | undefined,
  existingKeys: string[],
  excludedKey: string | null,
): string {
  const normalizedKey =
    label
      ?.trim()
      .replace(/\s+/gu, "_")
      .replace(/[^a-zA-Z0-9-_]+/gu, "-")
      .replace(/-+/gu, "-") ?? "";
  const baseKey =
    normalizedKey.length > 0 ? normalizedKey.toLowerCase() : "custom-server";
  const keysToCheck = existingKeys.filter((key) =>
    excludedKey == null ? true : key !== excludedKey,
  );
  if (!keysToCheck.includes(baseKey)) return baseKey;

  let suffix = 2;
  let candidateKey = `${baseKey}-${suffix}`;
  while (keysToCheck.includes(candidateKey)) {
    suffix += 1;
    candidateKey = `${baseKey}-${suffix}`;
  }
  return candidateKey;
}

function toKeyValueEntries(record: Record<string, string>): KeyValueEntry[] {
  const entries = Object.entries(record);
  return entries.length === 0
    ? [
        {
          key: "",
          value: "",
        },
      ]
    : entries.map(([key, value]) => ({
        key,
        value,
      }));
}

function fromKeyValueEntries(entries: KeyValueEntry[]): Record<string, string> {
  const record: Record<string, string> = {};
  entries.forEach(({ key, value }) => {
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();
    if (trimmedKey.length !== 0 && trimmedValue.length !== 0) {
      record[trimmedKey] = trimmedValue;
    }
  });
  return record;
}
