// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Validates a value's `url` field as an https:// URL string, returning a
// fallback when it is missing or invalid.
import { z } from "zod";

const httpsUrlSchema = z
  .string()
  .url()
  .refine((value) => value.startsWith("https://"));

export function initParseHttpsUrlChunk(): void {}

export function parseHttpsUrl<TFallback = undefined>(
  value: { url?: unknown },
  fallback?: TFallback,
): string | TFallback {
  const result = httpsUrlSchema.safeParse(value.url);
  return result.success ? result.data : fallback;
}
