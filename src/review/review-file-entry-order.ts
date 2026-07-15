// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers for ordering review file entries with directory/file display-path collisions.

import { disambiguateDisplayPaths } from "../utils/disambiguate-display-paths";

export interface DisplayPathEntry {
  displayPath: string;
}

export function orderReviewFileEntries<TEntry extends DisplayPathEntry>(
  entries: TEntry[],
): TEntry[] {
  const orderedDisplayPaths = disambiguateDisplayPaths(
    entries.map((entry, index) => ({ displayPath: entry.displayPath, index })),
  );
  const entriesByDisplayPath = new Map(
    orderedDisplayPaths.map((entry) => [
      entry.displayPath,
      entries[entry.index],
    ]),
  );

  return orderedDisplayPaths
    .map((entry) => entry.displayPath)
    .sort(compareTreeDisplayPaths)
    .flatMap((displayPath) => {
      const entry = entriesByDisplayPath.get(displayPath);
      return entry == null ? [] : [entry];
    });
}

function compareTreeDisplayPaths(left: string, right: string): number {
  const leftParts = left.split("/");
  const rightParts = right.split("/");
  const length = Math.min(leftParts.length, rightParts.length);
  for (let index = 0; index < length; index += 1) {
    const comparison = leftParts[index]!.localeCompare(rightParts[index]!);
    if (comparison !== 0) return comparison;
  }
  return leftParts.length - rightParts.length;
}
