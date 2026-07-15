// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Shell title cleanup helpers for terminal session snapshots.

const CONTROL_CHARS_PATTERN = /[\u0000-\u001F\u007F]/g;
const TITLE_SEPARATORS = [": ", " \u2014 ", " - ", " | "];

export function sanitizeTerminalTitle(
  value: string | null | undefined,
): string {
  return (value ?? "").replace(CONTROL_CHARS_PATTERN, "").trim();
}

function basename(value: string): string {
  const normalized = value.replace(/\\/g, "/");
  return normalized.split("/").filter(Boolean).pop() ?? normalized;
}

function stripCwdPrefix(title: string, cwd: string): string {
  const cwdBaseName = basename(cwd);
  for (const separator of TITLE_SEPARATORS) {
    const fullPrefix = `${cwd}${separator}`;
    if (title.startsWith(fullPrefix)) {
      return title.slice(fullPrefix.length).trim();
    }
    const basePrefix = `${cwdBaseName}${separator}`;
    if (title.startsWith(basePrefix)) {
      return title.slice(basePrefix.length).trim();
    }
  }
  return title;
}

export function normalizeShellTitle(
  rawTitle: string | null | undefined,
  cwd: string | null | undefined,
): string | null {
  const title = sanitizeTerminalTitle(rawTitle);
  if (title.length === 0) return null;
  const cleanCwd = sanitizeTerminalTitle(cwd);
  if (cleanCwd.length === 0) return title;
  if (title === cleanCwd || title === basename(cleanCwd)) return null;
  return stripCwdPrefix(title, cleanCwd);
}

export function readString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

export function readNumber(value: unknown): number | null {
  return typeof value === "number" ? value : null;
}
