// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js
// Hook for resolving the Git repository root that contains a workspace path.
import {
  initHostQueryRuntime,
  useHostQuery,
} from "../runtime/host-query-runtime";
import {
  initOutputArtifactRuntime,
  normalizeWorkspacePath,
} from "../conversations/output-artifact-runtime";

export type GitOrigin = {
  dir?: string | null;
  root?: string | null;
};

export type GitOriginsQueryData = {
  origins?: GitOrigin[] | null;
};

export type GitRootQueryOptions = {
  enabled?: boolean;
  hostId?: string | null;
  source?: string;
};

export type GitRootQueryResult = {
  gitRoot: string | null;
  isLoading: boolean;
};

type HostQueryResult = {
  data?: GitOriginsQueryData | null;
  isLoading?: boolean;
};

export function useGitRootQuery(
  workspaceRoot: string | null | undefined,
  options: GitRootQueryOptions = {},
): GitRootQueryResult {
  const enabled = !!workspaceRoot && (options.enabled ?? true);
  const params =
    !enabled || workspaceRoot == null
      ? { dirs: [] }
      : options.hostId == null
        ? { dirs: [workspaceRoot] }
        : { dirs: [workspaceRoot], hostId: options.hostId };
  const { data, isLoading = false } = useHostQuery<HostQueryResult>(
    "git-origins",
    {
      params,
      source: options.source,
    },
  );
  const rawGitRoot =
    data?.origins?.find((origin) => origin.dir === workspaceRoot)?.root ??
    data?.origins?.[0]?.root ??
    null;

  return {
    gitRoot: rawGitRoot == null ? null : normalizeWorkspacePath(rawGitRoot),
    isLoading,
  };
}

export function initGitRootQueryRuntime(): void {
  initHostQueryRuntime();
  initOutputArtifactRuntime();
}
