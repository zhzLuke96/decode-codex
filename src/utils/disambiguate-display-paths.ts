// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Disambiguates file display paths that collide with an ancestor directory path
// (e.g. a file "a/b" alongside a directory "a/b") by suffixing an invisible marker.

// Zero-width invisible separator appended to break display-path collisions.
const INVISIBLE_PATH_MARKER = "⁣";

export interface DisplayPathEntry {
  displayPath: string;
  [key: string]: unknown;
}

export function disambiguateDisplayPaths<TEntry extends DisplayPathEntry>(
  entries: TEntry[],
): TEntry[] {
  const ancestorDirectories = new Set<string>();
  for (const { displayPath } of entries) {
    const segments = displayPath.split("/");
    for (let depth = 1; depth < segments.length; depth += 1) {
      ancestorDirectories.add(segments.slice(0, depth).join("/"));
    }
  }

  if (!entries.some((entry) => ancestorDirectories.has(entry.displayPath))) {
    return entries;
  }

  const usedDisplayPaths = new Set(entries.map((entry) => entry.displayPath));
  return entries.map((entry) => {
    if (!ancestorDirectories.has(entry.displayPath)) return entry;
    let candidate = `${entry.displayPath}${INVISIBLE_PATH_MARKER}`;
    while (
      usedDisplayPaths.has(candidate) ||
      ancestorDirectories.has(candidate)
    ) {
      candidate = `${candidate}${INVISIBLE_PATH_MARKER}`;
    }
    usedDisplayPaths.add(candidate);
    return { ...entry, displayPath: candidate };
  });
}
