// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small basic externals that the onboarding commons facade re-exported.
import { z } from "zod";

import { isEqualN as isEqual } from "../vendor/lodash-is-equal";

export const appDisplayName = "Codex";
export const appName = appDisplayName;
export const httpsUrlSchema = z.url;
export { isEqual };

export function last<TValue>(
  values: ArrayLike<TValue> | null | undefined,
): TValue | undefined {
  return values == null || values.length === 0
    ? undefined
    : values[values.length - 1];
}

export function startCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part, index) =>
      index === 0
        ? `${part.charAt(0).toUpperCase()}${part.slice(1)}`
        : part.toLowerCase(),
    )
    .join(" ");
}
