// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Thread-start helpers for labels, permission-root merging, and config payloads.
import { appScopeL, appScopeRoot } from "../boundaries/app-scope";

type SandboxPolicy = {
  writableRoots?: unknown;
  [key: string]: unknown;
};

export const threadPermissionsSignal = appScopeL(
  appScopeRoot,
  () => null as Record<string, unknown> | null,
);

export function labelFromConversationInput(input: unknown): string {
  const label = collectInputText(input)
    .join("\n")
    .split(/\r?\n/u)
    .map((line) => line.trim())
    .find((line) => line.length > 0);
  return truncateLabel(label ?? "New thread");
}

export function mergeRuntimeWorkspaceRoots(
  existingRoots: unknown,
  nextRoots: readonly string[],
): string[] {
  return dedupeStringList([
    ...normalizeStringList(existingRoots),
    ...nextRoots,
  ]);
}

export function mergeSandboxPolicyRoots(
  sandboxPolicy: unknown,
  workspaceRoots: readonly string[],
): unknown {
  if (!isRecord(sandboxPolicy)) return sandboxPolicy ?? null;
  const policy = sandboxPolicy as SandboxPolicy;
  return {
    ...policy,
    writableRoots: mergeRuntimeWorkspaceRoots(
      policy.writableRoots,
      workspaceRoots,
    ),
  };
}

export function resolveRuntimeWorkspaceRoots(permissions: unknown): string[] {
  if (!isRecord(permissions)) return [];
  const directRoots = normalizeStringList(permissions.runtimeWorkspaceRoots);
  if (directRoots.length > 0) return directRoots;
  const sandboxPolicy = permissions.sandboxPolicy;
  return isRecord(sandboxPolicy)
    ? normalizeStringList(sandboxPolicy.writableRoots)
    : [];
}

export function sanitizeThreadConfig<TConfig>(config: TConfig): TConfig {
  return sanitizeJsonValue(config) as TConfig;
}

export const serializeConfig = sanitizeThreadConfig;

function collectInputText(input: unknown): string[] {
  if (typeof input === "string") return [input];
  if (Array.isArray(input)) return input.flatMap(collectInputText);
  if (!isRecord(input)) return [];
  const text = typeof input.text === "string" ? [input.text] : [];
  return [...text, ...collectInputText(input.content)];
}

function truncateLabel(label: string): string {
  const normalized = label.replace(/\s+/gu, " ").trim();
  return normalized.length <= 80 ? normalized : `${normalized.slice(0, 77)}...`;
}

function normalizeStringList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function dedupeStringList(values: readonly string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    if (seen.has(value)) continue;
    seen.add(value);
    result.push(value);
  }
  return result;
}

function sanitizeJsonValue(value: unknown): unknown {
  if (value === undefined || typeof value === "function") return undefined;
  if (value == null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(sanitizeJsonValue);
  const entries = Object.entries(value)
    .map(([key, entryValue]) => [key, sanitizeJsonValue(entryValue)] as const)
    .filter(([, entryValue]) => entryValue !== undefined);
  return Object.fromEntries(entries);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
