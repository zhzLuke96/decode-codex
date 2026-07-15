// Restored from ref/webview/assets/project-context-signal-IsmVossZ.js
// Route-scoped project context and git branch signals for local conversation threads.
import {
  _appScopeC as createComputedSignal,
  _appScopeM as createQuerySignal,
} from "../../boundaries/app-scope";
import * as sourceRuntime from "../../boundaries/src-l0hb-mz-p";
import * as threadContextInputs from "../../boundaries/thread-context-inputs.facade";
import { routeScope } from "../../runtime/persisted-signal";
import {
  threadCodexHomeSignal,
  threadCwdSignal,
  threadHostConfigSignal,
  threadHostConfigWorktreeKeySignal,
  threadHostIdSignal,
} from "../thread-context";
import { gitCurrentBranchByMetadataQuerySignal } from "../../github/git-current-branch-query";
import { gitAvailabilityQuery } from "../../utils/git-availability-query";
type AppScopeGetter = {
  get<TValue = unknown>(signal: unknown, params?: unknown): TValue;
};
type QueryResultLike<TData> = {
  data?: TData | null;
};
type GitAvailability = {
  available?: boolean;
};
type GitMetadata = {
  commonDir: string;
  root: string;
};
type GitCurrentBranchQueryParams = GitMetadata & {
  enabled: boolean;
  hostConfig: unknown;
  operationSource: "local_conversation_thread";
  refetchOnWindowFocus: boolean;
  staleTime: null;
};
type ProjectContext =
  | {
      codexHome: string | null;
      cwd: null;
      git: null;
      hostId: string | null;
      isCodexWorktree: false;
      kind: "none";
    }
  | {
      codexHome: string | null;
      cwd: string;
      git: null;
      hostId: string | null;
      isCodexWorktree: false;
      kind: "plain";
    }
  | {
      codexHome: string | null;
      cwd: string;
      git: GitMetadata;
      hostId: string | null;
      isCodexWorktree: boolean;
      kind: "git";
    };
const isCodexWorktreePath = sourceRuntime.srcJ as (
  cwd: string | null | undefined,
  codexHome?: string,
) => boolean;
const createThreadGitMetadataQuery = threadContextInputs.Qn as (
  cwd: string | null | undefined,
  hostConfigWorktreeKey: unknown,
  hostConfig: unknown,
  operationSource: "local_conversation_thread",
  options: {
    enabled: boolean;
    watchForGitInit: boolean;
  },
) => unknown;
const pendingGitQueryResult = threadContextInputs.pendingGitQueryResult as <
  TData,
>(
  queryResult: QueryResultLike<TData>,
) => unknown;
function createProjectContext({
  codexHome,
  cwd,
  gitMetadata,
  hostId,
}: {
  codexHome: string | null;
  cwd: string | null | undefined;
  gitMetadata: GitMetadata | null;
  hostId: string | null;
}): ProjectContext {
  if (cwd == null) {
    return {
      codexHome,
      cwd: null,
      git: null,
      hostId,
      isCodexWorktree: false,
      kind: "none",
    };
  }
  if (gitMetadata == null) {
    return {
      codexHome,
      cwd,
      git: null,
      hostId,
      isCodexWorktree: false,
      kind: "plain",
    };
  }
  return {
    codexHome,
    cwd,
    git: gitMetadata,
    hostId,
    isCodexWorktree: isCodexWorktreePath(cwd, codexHome ?? undefined),
    kind: "git",
  };
}
const threadGitMetadataQuerySignal = createQuerySignal(
  routeScope,
  ({ get }: { get: AppScopeGetter["get"] }) => {
    const hostConfig = get(threadHostConfigSignal);
    const gitAvailable =
      get<QueryResultLike<GitAvailability>>(gitAvailabilityQuery, {
        hostConfig,
        operationSource: "local_conversation_thread",
      }).data?.available === true;
    return createThreadGitMetadataQuery(
      get(threadCwdSignal),
      get(threadHostConfigWorktreeKeySignal),
      hostConfig,
      "local_conversation_thread",
      {
        enabled: gitAvailable,
        watchForGitInit: true,
      },
    );
  },
);
const threadCurrentBranchQuerySignal = createComputedSignal(
  routeScope,
  ({ get }: { get: AppScopeGetter["get"] }) => {
    const metadataQuery = get<QueryResultLike<GitMetadata>>(
      threadGitMetadataQuerySignal,
    );
    const gitMetadata = metadataQuery.data ?? null;
    if (gitMetadata == null) {
      return pendingGitQueryResult(metadataQuery);
    }
    return get<unknown>(gitCurrentBranchByMetadataQuerySignal, {
      commonDir: gitMetadata.commonDir,
      enabled: true,
      hostConfig: get(threadHostConfigSignal),
      operationSource: "local_conversation_thread",
      refetchOnWindowFocus: false,
      root: gitMetadata.root,
      staleTime: null,
    } satisfies GitCurrentBranchQueryParams);
  },
);
const threadProjectContextSignal = createComputedSignal(
  routeScope,
  ({ get }: { get: AppScopeGetter["get"] }) => {
    const gitMetadata =
      get<QueryResultLike<GitMetadata>>(threadGitMetadataQuerySignal).data ??
      null;
    return createProjectContext({
      codexHome: get<string | null>(threadCodexHomeSignal),
      cwd: get<string | null | undefined>(threadCwdSignal),
      gitMetadata,
      hostId: get<string | null>(threadHostIdSignal),
    });
  },
);
export {
  threadCurrentBranchQuerySignal,
  threadGitMetadataQuerySignal,
  threadProjectContextSignal,
};
