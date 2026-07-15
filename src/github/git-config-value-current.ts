// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~new-thread-panel-page~proj~jolrh1c9-UBdbdM9i.js
// Current git config query signal surface with restored dependency imports.

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntimeChunk,
  currentAppInitialSharedCompatSlotUpperVLowerO as initReactQueryRuntimeChunk,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  gitUpstreamBranchBaseRuntime as initGitUpstreamBranchBaseRuntimeChunk,
  workspaceRuntime0726 as initWorkspaceRuntimeChunk,
  workspaceWatchRepoUnwatchSignal as initWorkspaceRepoWatcherRuntimeChunk,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import { gitQuerySignal } from "../utils/git-query-signal";

type GitConfigValueMetadata = {
  commonDir: string;
  enabled: boolean;
  hostConfig: unknown;
  key: string;
  operationSource: string;
  refetchOnWindowFocus?: boolean;
  root: string;
  scope?: string;
  staleTime?: number | null;
};

type GitConfigValueResponse = {
  value: unknown;
};

type CurrentGitQuerySignals = {
  fromCwd$: unknown;
  fromMetadata$: unknown;
  queryByMetadata$: unknown;
};

export const createCurrentGitQuerySignal = gitQuerySignal;

export const initGitConfigValueCurrentRuntimeDependencies = runOnce(() => {
  initReactQueryRuntimeChunk();
  initAppScopeRuntimeChunk();
  initGitUpstreamBranchBaseRuntimeChunk();
  initWorkspaceRepoWatcherRuntimeChunk();
  initWorkspaceRuntimeChunk();
});

let gitConfigValueSignals: CurrentGitQuerySignals | undefined;
export let gitConfigValueFromCwdSignal: unknown;
export let gitConfigValueByMetadataQuerySignal: unknown;

export const initGitConfigValueCurrentChunk = runOnce(() => {
  initGitConfigValueCurrentRuntimeDependencies();
  gitConfigValueSignals = createCurrentGitQuerySignal({
    method: "config-value",
    getParams: (metadata: GitConfigValueMetadata) => ({
      key: metadata.key,
      operationSource: metadata.operationSource,
      root: metadata.root,
      scope: metadata.scope,
    }),
    getOptions: (metadata: GitConfigValueMetadata) => ({
      refetchOnWindowFocus: metadata.refetchOnWindowFocus,
      select: (response: GitConfigValueResponse) => response.value,
      ...(metadata.staleTime == null
        ? {}
        : {
            staleTime: metadata.staleTime,
          }),
    }),
  }) as CurrentGitQuerySignals;
  gitConfigValueFromCwdSignal = gitConfigValueSignals.fromCwd$;
  gitConfigValueByMetadataQuerySignal = gitConfigValueSignals.queryByMetadata$;
});
