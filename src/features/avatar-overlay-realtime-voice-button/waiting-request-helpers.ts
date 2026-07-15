// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
export function normalizeText(value?: string | null): string | null {
  const trimmed = value?.replace(/\s+/g, " ").trim() ?? "";
  return trimmed.length === 0 ? null : trimmed;
}
export function truncateCompactText(value: string): string | null {
  const normalized = normalizeText(value);
  return normalized == null
    ? null
    : normalized.length <= 48
      ? normalized
      : `${normalized.slice(0, 47)}…`;
}
export function normalizeConnectorName(value?: string | null): string | null {
  const parts = value
    ?.trim()
    .replace(/^connector[_-]/, "")
    .split(/[_-]+/)
    .filter(Boolean);
  return parts == null || parts.length === 0
    ? null
    : parts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}
export function getRequestedToolName(message: string): string | null {
  const runToolMatch = /\brun\s+tool\s+"([^"]+)"/i.exec(message);
  if (runToolMatch?.[1] != null) return normalizeText(runToolMatch[1]);
  const accessMatch = /\baccess\s+(.+?)\?*$/i.exec(message);
  return accessMatch?.[1] == null ? null : normalizeText(accessMatch[1]);
}
export function formatToolParamsPreview(
  params?: Record<string, unknown> | null,
) {
  if (params == null) return null;
  const firstParam = Object.entries(params)[0];
  if (firstParam == null) return null;
  const [name, value] = firstParam;
  const preview = formatUnknownValue(value);
  return normalizeText(preview == null ? name : `${name}: ${preview}`);
}
export function formatUrlPreview(url: string): string | null {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname === "/" ? "" : parsed.pathname;
    return truncateCompactText(`${parsed.hostname}${path}`);
  } catch {
    return truncateCompactText(url);
  }
}
export function getGenericElicitationOperation({
  message,
  metadata,
}: {
  message: string;
  metadata: unknown;
}) {
  const reason = getMetadataReason(metadata);
  const messageWithoutReason = stripTrailingReason(message, reason);
  return reason != null && isGenericApprovalMessage(messageWithoutReason)
    ? reason
    : normalizeText(messageWithoutReason);
}
export function stripEmptyPermissionKinds(permissions: any) {
  return {
    ...(permissions.network == null
      ? {}
      : {
          network: permissions.network,
        }),
    ...(permissions.fileSystem == null
      ? {}
      : {
          fileSystem: permissions.fileSystem,
        }),
  };
}
export function countPatchChanges(changes: Record<string, any>) {
  let additions = 0;
  let deletions = 0;
  for (const change of Object.values(changes)) {
    switch (change?.type) {
      case "add":
        additions += countLines(change.content);
        break;
      case "delete":
        deletions += countLines(change.content);
        break;
      case "update":
        for (const line of change.unified_diff.split(/\r?\n/)) {
          if (line.startsWith("+++") || line.startsWith("---")) continue;
          if (line.startsWith("+")) additions += 1;
          else if (line.startsWith("-")) deletions += 1;
        }
        break;
    }
  }
  return {
    additions,
    deletions,
  };
}
function formatUnknownValue(value: unknown): string | null {
  return typeof value === "string"
    ? truncateCompactText(value)
    : typeof value === "number" || typeof value === "boolean"
      ? String(value)
      : value == null
        ? null
        : truncateCompactText(JSON.stringify(value) ?? "");
}
function stripTrailingReason(message: string, reason: string | null): string {
  const trimmedMessage = message.trim();
  if (reason == null) return trimmedMessage;
  const reasonSuffix = `Reason: ${reason}`;
  if (!trimmedMessage.endsWith(reasonSuffix)) return trimmedMessage;
  const strippedMessage = trimmedMessage.slice(0, -reasonSuffix.length).trim();
  return strippedMessage.length > 0 ? strippedMessage : trimmedMessage;
}
function getMetadataReason(metadata: unknown) {
  if (
    metadata == null ||
    Array.isArray(metadata) ||
    typeof metadata !== "object"
  ) {
    return null;
  }
  const reason = (
    metadata as {
      reason?: unknown;
    }
  ).reason;
  return typeof reason === "string" ? normalizeText(reason) : null;
}
function isGenericApprovalMessage(message: string): boolean {
  const normalizedMessage = message.trim().toLowerCase();
  return (
    normalizedMessage === "tool call needs your approval." ||
    normalizedMessage === "tool call needs your approval"
  );
}
function countLines(content: string): number {
  if (content.length === 0) return 0;
  const lines = content.split(/\r?\n/);
  return lines.at(-1) === "" ? lines.length - 1 : lines.length;
}
