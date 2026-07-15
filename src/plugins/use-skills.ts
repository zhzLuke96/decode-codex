// Restored from ref/webview/assets/use-skills-C9xSD3RA.js
// use-skills-C9xSD3RA chunk restored from the Codex webview bundle.
import React from "react";
import { useAppScopeValue } from "../boundaries/app-scope";
import {
  selectedHostIdSignal,
  workspaceRootOptionsQuery,
} from "../boundaries/thread-context-inputs.facade";
import {
  sendAppServerRequest,
  useSharedObjectState,
} from "../boundaries/use-host-config.facade";
import { vscodeApiA, vscodeApiU, vscodeApiV } from "../boundaries/vscode-api";
import { useRegisterCommand } from "../utils/use-register-command";
export type Skill = {
  name: string;
  [key: string]: unknown;
};
type SkillGroup = {
  skills: Skill[];
};
type ListSkillsResponse = {
  data?: SkillGroup[];
};
type WorkspaceRootOptionsQuery = {
  data?: {
    roots?: string[];
  };
  isFetched?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
};
type UseSkillsOptions = {
  enabled?: boolean;
};
type UseSkillsResult = {
  skills: Skill[];
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => unknown;
  forceReload: () => Promise<void>;
  findSkillByName: (name: string) => Skill | null;
};
export const skillsQueryKey = ["skills"];
export function useSkills(
  cwdOrCwds?: string | string[],
  hostIdOverride?: string,
  options: UseSkillsOptions = {},
): UseSkillsResult {
  const defaultHostId = useAppScopeValue(selectedHostIdSignal) as string;
  const hostId = hostIdOverride ?? defaultHostId;
  const queryClient = vscodeApiA();
  const [refreshNonce] = useSharedObjectState("skills_refresh_nonce") as [
    unknown,
    unknown,
  ];
  const workspaceRootsQuery = useAppScopeValue(
    workspaceRootOptionsQuery,
  ) as WorkspaceRootOptionsQuery;
  const usingWorkspaceRoots = cwdOrCwds === undefined;
  const cwdList = React.useMemo(
    () => resolveSkillCwds(cwdOrCwds, workspaceRootsQuery.data?.roots),
    [cwdOrCwds, workspaceRootsQuery.data?.roots],
  );
  const enabled =
    (options.enabled ?? true) &&
    (cwdOrCwds !== undefined || Boolean(workspaceRootsQuery.isFetched));
  const queryKey = React.useMemo(
    () => [...skillsQueryKey, hostId, cwdList],
    [hostId, cwdList],
  );
  const query = vscodeApiV({
    queryKey,
    queryFn: () =>
      sendAppServerRequest("list-skills-for-host", {
        hostId,
        cwds: cwdList,
      }),
    enabled,
    staleTime: vscodeApiU.FIVE_MINUTES,
    gcTime: Infinity,
  });
  const groupedSkills =
    (query.data as ListSkillsResponse | undefined)?.data ?? [];
  const skills = React.useMemo(
    () => groupedSkills.flatMap((group) => group.skills),
    [groupedSkills],
  );
  React.useEffect(() => {
    if (refreshNonce != null) {
      queryClient.invalidateQueries({
        queryKey: skillsQueryKey,
      });
    }
  }, [queryClient, refreshNonce]);
  const forceReload = React.useCallback(async () => {
    const nextSkills = await sendAppServerRequest("list-skills-for-host", {
      hostId,
      cwds: cwdList,
      forceReload: true,
    });
    queryClient.setQueryData(queryKey, nextSkills);
  }, [cwdList, hostId, queryClient, queryKey]);
  useRegisterCommand("forceReloadSkills", () => {
    void forceReload();
  });
  const findSkillByName = React.useCallback(
    (name: string) => {
      const normalizedName = name.toLowerCase();
      return (
        skills.find((skill) => skill.name.toLowerCase() === normalizedName) ??
        null
      );
    },
    [skills],
  );
  const refetch = React.useCallback(() => query.refetch(), [query]);
  return React.useMemo(
    () => ({
      skills,
      isLoading:
        (usingWorkspaceRoots && Boolean(workspaceRootsQuery.isLoading)) ||
        Boolean(query.isLoading),
      isFetching:
        (usingWorkspaceRoots && Boolean(workspaceRootsQuery.isFetching)) ||
        Boolean(query.isFetching),
      refetch,
      forceReload,
      findSkillByName,
    }),
    [
      findSkillByName,
      forceReload,
      query.isFetching,
      query.isLoading,
      refetch,
      skills,
      usingWorkspaceRoots,
      workspaceRootsQuery.isFetching,
      workspaceRootsQuery.isLoading,
    ],
  );
}
function resolveSkillCwds(
  cwdOrCwds: string | string[] | undefined,
  workspaceRoots?: string[],
): string[] {
  if (Array.isArray(cwdOrCwds)) return cwdOrCwds;
  if (typeof cwdOrCwds === "string") return [cwdOrCwds];
  return workspaceRoots ?? [];
}
