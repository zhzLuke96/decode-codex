// Restored from ref/webview/assets/local-environments-utils-CkypnJBW.js
// Selection helper used after refreshing local environment config.

import type { SelectLocalEnvironmentAfterRefreshOptions } from "./types";

export async function selectLocalEnvironmentAfterRefresh({
  codexWorktree,
  configPath,
  gitRoot,
  refreshEnvironments,
  selectForWorkspace,
  selectForWorktree,
}: SelectLocalEnvironmentAfterRefreshOptions): Promise<boolean> {
  await refreshEnvironments();
  if (codexWorktree) {
    return gitRoot == null ? false : selectForWorktree(gitRoot, configPath);
  }
  selectForWorkspace(configPath);
  return true;
}
