// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Sentry user-id extraction from cached auth tokens.

export function extractSentryUserIdFromAuthToken(
  token?: string | null,
): string | null {
  const payloadBase64 = token?.split(".", 3)[1];
  if (payloadBase64 == null) return null;
  try {
    const payload = JSON.parse(
      Buffer.from(payloadBase64, "base64url").toString("utf8"),
    );
    const auth = asRecord(payload)?.["https://api.openai.com/auth"];
    const chatgptUserId = asRecord(auth)?.chatgpt_user_id;
    return typeof chatgptUserId === "string" && chatgptUserId.length > 0
      ? chatgptUserId
      : null;
  } catch {
    return null;
  }
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
