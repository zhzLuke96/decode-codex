// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as path from "node:path";

export function getCurrentAppBundlePath(): string {
  let current = process.execPath;
  for (;;) {
    if (path.extname(current) === ".app") return current;
    const parent = path.dirname(current);
    if (parent === current) return process.execPath;
    current = parent;
  }
}

export function shouldUseSingleInstanceLock({
  isMacOS,
  isPackaged,
}: {
  isMacOS: boolean;
  isPackaged: boolean;
}): boolean {
  return isPackaged ? !isMacOS : false;
}
