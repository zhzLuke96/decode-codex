// Restored from ref/webview/assets/local-environment-selection-Dz7Qei2P.js
// Worktree git-config writer for the selected local environment path.

import { resolveGitQueryOptions } from "../../boundaries/thread-context-inputs.facade";
import { gitConfigValueByMetadataQuerySignal } from "../../github/git-config-value-query-b-kg-flj-zw";
import type { AppScopeQueryStore, GitMetadata } from "./types";
const LOCAL_ENVIRONMENT_CONFIG_PATH_GIT_KEY =
  "codex.localEnvironmentConfigPath";
export function setWorktreeLocalEnvironmentConfigPath(
  appScope: AppScopeQueryStore,
  gitMetadata: GitMetadata,
  hostConfig: unknown,
  configPath: string | null,
  operationSource: unknown,
): void {
  const querySnapshot = appScope.query.snapshot(
    gitConfigValueByMetadataQuerySignal,
    {
      commonDir: gitMetadata.commonDir,
      root: gitMetadata.root,
      hostConfig,
      key: LOCAL_ENVIRONMENT_CONFIG_PATH_GIT_KEY,
      operationSource,
      scope: "worktree",
      ...resolveGitQueryOptions(undefined, null),
    },
  );
  querySnapshot.setData({
    value: configPath,
  });
  querySnapshot.invalidate();
}
