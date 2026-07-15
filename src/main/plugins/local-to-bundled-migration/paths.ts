// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Path comparisons used by local plugin migration cleanup.

import { dirname, resolve, sep } from "node:path";

export function areSameResolvedPath(first: string, second: string): boolean {
  return resolve(first) === resolve(second);
}

export function isPathInsideRoot(path: string, root: string): boolean {
  const resolvedPath = resolve(path);
  const resolvedRoot = resolve(root);
  return (
    resolvedPath === resolvedRoot ||
    resolvedPath.startsWith(`${resolvedRoot}${sep}`)
  );
}

export function matchesStoredLocalPluginPath({
  codexHome,
  localPluginPath,
  sourcePath,
}: {
  codexHome: string;
  localPluginPath: string;
  sourcePath: string;
}): boolean {
  return [
    resolve(sourcePath),
    resolve(codexHome, sourcePath),
    resolve(dirname(codexHome), sourcePath),
  ].some((candidate) => areSameResolvedPath(candidate, localPluginPath));
}
