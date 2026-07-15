// Restored from ref/webview/assets/slash-command-item-CjEpy4Fo.js
// slash-command-item-CjEpy4Fo chunk restored from the Codex webview bundle.
import React from "react";
import { _appScopeA as useScopedSignalValue } from "../../boundaries/app-scope";
import {
  vscodeApiH as logger,
  vscodeApiN as callVscodeApi,
} from "../../boundaries/vscode-api";
import { normalizeGitRoot } from "../../boundaries/src-l0hb-mz-p";
import { gitOriginsQuery } from "../../features/remote-projects";
import { parseOwnerRepo } from "../../github/parse-owner-repo";
import {
  getEnvironmentPrimaryRepo,
  useEnvironment,
} from "../../utils/use-environment";
import { isEqualT as isEqualModule } from "../../vendor/lodash-is-equal";
import type {
  ActiveWorkspaceRootsData,
  DirectoryGitRootOptions,
  GitOrigin,
  GitOriginsData,
  GitRootLookupOptions,
  LookupState,
} from "./types";
const isEqual = isEqualModule();
function useEnvironmentGitRoot(options?: GitRootLookupOptions) {
  const environment = useEnvironment();
  const primaryRepo = getEnvironmentPrimaryRepo(environment);
  const cloneUrl =
    primaryRepo == null
      ? undefined
      : (
          environment?.repo_map?.[primaryRepo] as {
            clone_url?: string;
          } | null
        )?.clone_url;
  return useGitRootForOriginUrl(cloneUrl, options);
}
function useGitRootForOriginUrl(
  originUrl: string | null | undefined,
  options?: GitRootLookupOptions,
) {
  const enabled = options?.enabled ?? true;
  const activeOriginUrl = enabled ? originUrl : undefined;
  const lookupKey = React.useMemo(
    () => Symbol(activeOriginUrl),
    [activeOriginUrl],
  );
  const [lookupState, setLookupState] = React.useState<LookupState | null>(
    null,
  );
  React.useEffect(() => {
    if (!originUrl || !enabled) return;
    let cancelled = false;
    resolveGitRootForOriginUrl(originUrl).then((gitRoot) => {
      if (!cancelled) {
        setLookupState({
          lookupKey,
          gitRoot,
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [originUrl, enabled, lookupKey]);
  return enabled && lookupState?.lookupKey === lookupKey
    ? lookupState.gitRoot
    : null;
}
async function resolveGitRootForOriginUrl(
  originUrl: string | null | undefined,
) {
  const activeWorkspaceRoots =
    await callVscodeApi<ActiveWorkspaceRootsData | null>(
      "active-workspace-roots",
    );
  if (!originUrl || !activeWorkspaceRoots) return null;
  const gitOrigins = await callVscodeApi<GitOriginsData>("git-origins", {
    source: "git_root_lookup",
  });
  return findGitRootForOriginUrl(
    originUrl,
    activeWorkspaceRoots.roots,
    gitOrigins.origins,
  );
}
async function findGitRootForOriginUrl(
  originUrl: string,
  workspaceRoots: string[],
  gitOrigins: GitOrigin[] | null | undefined,
) {
  const targetRepo = parseOwnerRepo(originUrl);
  const matchingOrigin = (gitOrigins ?? []).find((origin) =>
    origin.originUrl
      ? isEqual.default(parseOwnerRepo(origin.originUrl), targetRepo)
      : false,
  );
  if (matchingOrigin?.root) return matchingOrigin.root;
  logger.warning("No matching origin found", {
    safe: {},
    sensitive: {
      originUrl,
    },
  });
  return workspaceRoots[0] ?? null;
}
function useGitRootForDirectory(
  directory: string | null | undefined,
  options: DirectoryGitRootOptions,
) {
  const enabled = Boolean(directory) && (options.enabled ?? true);
  const params =
    !enabled || directory == null
      ? {
          dirs: [] as string[],
        }
      : options.hostId == null
        ? {
            dirs: [directory],
          }
        : {
            dirs: [directory],
            hostId: options.hostId,
          };
  const { data, isLoading } = useScopedSignalValue(gitOriginsQuery, {
    params,
    source: options.source,
  }) as {
    data?: GitOriginsData | null;
    isLoading: boolean;
  };
  const root =
    data?.origins?.find((origin) => origin.dir === directory)?.root ??
    data?.origins?.[0]?.root ??
    null;
  return {
    gitRoot: root ? normalizeGitRoot(root) : null,
    isLoading,
  };
}

function initSlashCommandGitRootRuntime(): void {}

export {
  useGitRootForDirectory,
  useGitRootForOriginUrl,
  useEnvironmentGitRoot,
  resolveGitRootForOriginUrl,
  initSlashCommandGitRootRuntime,
};
