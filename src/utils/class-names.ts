// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js

export type ClassNameValue =
  | ClassNameValue[]
  | Record<string, unknown>
  | boolean
  | null
  | number
  | string
  | undefined;

export function initClassNameRuntime(): void {}

export function classNames(...values: ClassNameValue[]): string {
  return values.flatMap(normalizeClassNameValue).join(" ");
}

export const clsx = classNames;

function normalizeClassNameValue(value: ClassNameValue): string[] {
  if (value == null || value === false) return [];
  if (Array.isArray(value)) return value.flatMap(normalizeClassNameValue);
  if (typeof value === "object") {
    return Object.entries(value).flatMap(([key, enabled]) =>
      enabled ? [key] : [],
    );
  }
  if (typeof value === "number" && value === 0) return [];
  return String(value).trim().length === 0 ? [] : [String(value)];
}
