// Restored from ref/webview/assets/codex-api-error-_CzxEWtd.js
// codex-api-error-_CzxEWtd chunk restored from the Codex webview bundle.
export type CodexApiErrorDetail = {
  type: string | null;
  message: string;
};
export function parseCodexApiErrorDetail(error: { message: string }) {
  try {
    const parsed = JSON.parse(error.message) as unknown;
    if (!isRecord(parsed)) return null;
    return normalizeCodexApiErrorDetail(parsed.detail);
  } catch {
    return null;
  }
}
function normalizeCodexApiErrorDetail(
  detail: unknown,
): CodexApiErrorDetail | null {
  if (typeof detail === "string") {
    return {
      type: null,
      message: detail,
    };
  }
  if (!isRecord(detail) || typeof detail.message !== "string") return null;
  if (typeof detail.type === "string") {
    return {
      type: detail.type,
      message: detail.message,
    };
  }
  return {
    type: typeof detail.error_code === "string" ? detail.error_code : null,
    message: detail.message,
  };
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}
