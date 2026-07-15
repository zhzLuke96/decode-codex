// Restored from ref/.vite/build/worker.js
// Parsers for review unified diff headers.

type ParsedDiffPaths = {
  oldPath: string;
  newPath: string;
};

export function parseDiffHeaderPaths(line: string): ParsedDiffPaths | null {
  if (!line.startsWith("diff --git ")) return null;
  const payload = line.slice("diff --git ".length);
  if (payload.startsWith('"')) return parseQuotedDiffHeaderPaths(payload);

  const separator = payload.lastIndexOf(" b/");
  return separator < 0
    ? null
    : stripDiffPrefixes(
        payload.slice(0, separator),
        payload.slice(separator + 1),
      );
}

function parseQuotedDiffHeaderPaths(payload: string): ParsedDiffPaths | null {
  const first = parseGitQuotedPath(payload, 0);
  if (first == null) return null;
  const second = parseGitQuotedPath(payload, first.nextIndex + 1);
  return second == null || second.nextIndex !== payload.length
    ? null
    : stripDiffPrefixes(first.path, second.path);
}

function parseGitQuotedPath(
  value: string,
  startIndex: number,
): { path: string; nextIndex: number } | null {
  if (value[startIndex] !== '"') return null;
  let index = startIndex + 1;
  let path = "";
  while (index < value.length) {
    const char = value[index];
    if (char === '"') return { path, nextIndex: index + 1 };
    if (char !== "\\") {
      path += char;
      index += 1;
      continue;
    }
    const next = value[index + 1];
    if (next == null) return null;
    path += next;
    index += 2;
  }
  return null;
}

function stripDiffPrefixes(
  oldPath: string,
  newPath: string,
): ParsedDiffPaths | null {
  if (!oldPath.startsWith("a/") || !newPath.startsWith("b/")) return null;
  return { oldPath: oldPath.slice(2), newPath: newPath.slice(2) };
}
