// Restored from ref/webview/assets/hooks-settings-queries-5zPGjvwa.js
import {
  _appScopeD as createMutationSignalFamily,
  _appScopeP as createQuerySignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import { produceImmutableUpdate } from "../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { vscodeApiF, vscodeApiU } from "../boundaries/vscode-api";
type HooksQueryKey = readonly [
  "hooks",
  string,
  string | readonly string[] | null,
];
type HookStateEdit = {
  enabled?: boolean | null;
  key: string;
  trustedHash?: string | null;
};
type HookEntry = {
  currentHash?: string | null;
  enabled?: boolean | null;
  key: string;
  trustStatus?: string | null;
};
type HookGroup = {
  hooks: HookEntry[];
};
type HooksQueryResponse = {
  data: HookGroup[];
};
type QueryCacheEntry = readonly [unknown, unknown];
type QueryClientLike = {
  cancelQueries(options: {
    predicate(query: { queryKey: readonly unknown[] }): boolean;
  }): Promise<unknown>;
  getQueriesData(options: {
    predicate(query: { queryKey: readonly unknown[] }): boolean;
  }): QueryCacheEntry[];
  invalidateQueries(options: {
    predicate(query: { queryKey: readonly unknown[] }): boolean;
    refetchType?: unknown;
  }): Promise<unknown>;
  setQueriesData(
    options: {
      predicate(query: { queryKey: readonly unknown[] }): boolean;
    },
    updater: (
      previous: HooksQueryResponse | undefined,
    ) => HooksQueryResponse | undefined,
  ): void;
  setQueryData(queryKey: unknown, data: unknown): void;
};
type MutationContext = {
  previousResponses: QueryCacheEntry[];
};
type HooksMutationRuntime = {
  client: QueryClientLike;
};
type InvalidateHooksQueryOptions = {
  broadcast?: boolean;
  refetchType?: unknown;
};
const hooksQueryKey = ["hooks"] as const;
const hooksForProjectQueryOptions = createQuerySignalFamily(
  appScopeRoot,
  ({ hostId, cwd }: { cwd: string | null; hostId: string }) => ({
    queryKey: [...hooksQueryKey, hostId, cwd] satisfies HooksQueryKey,
    queryFn: () => {
      if (cwd == null) throw Error("Cannot list hooks without a project root");
      return sendAppServerRequest("list-hooks-for-host", {
        hostId,
        cwds: [cwd],
      });
    },
    staleTime: vscodeApiU.FIVE_MINUTES,
    refetchOnWindowFocus: "always",
    enabled: cwd != null,
  }),
);
const hooksForProjectsQueryOptions = createQuerySignalFamily(
  appScopeRoot,
  ({ hostId, cwds }: { cwds: readonly string[] | null; hostId: string }) => ({
    queryKey: [...hooksQueryKey, hostId, cwds] satisfies HooksQueryKey,
    queryFn: () => {
      if (cwds == null || cwds.length === 0) {
        throw Error("Cannot list hooks without project roots");
      }
      return sendAppServerRequest("list-hooks-for-host", {
        hostId,
        cwds,
      });
    },
    staleTime: vscodeApiU.FIVE_MINUTES,
    enabled: cwds != null && cwds.length > 0,
  }),
);
async function invalidateHooksQueries(
  queryClient: QueryClientLike,
  hostId: string,
  { broadcast = false, refetchType }: InvalidateHooksQueryOptions = {},
): Promise<void> {
  await queryClient.invalidateQueries({
    predicate: ({ queryKey }) => isHooksQueryForHost(queryKey, hostId),
    refetchType,
  });
  if (broadcast) {
    vscodeApiF.dispatchMessage("query-cache-invalidate", {
      queryKey: hooksQueryKey,
    });
  }
}
const hooksStateMutation = createMutationSignalFamily(
  appScopeRoot,
  (hostId: string) => ({
    mutationFn: (edits: HookStateEdit[]) =>
      sendAppServerRequest("batch-write-config-value", {
        hostId,
        edits: [
          {
            keyPath: "hooks.state",
            value: Object.fromEntries(
              edits.map(({ key, enabled, trustedHash }) => [
                key,
                {
                  ...(enabled == null
                    ? {}
                    : {
                        enabled,
                      }),
                  ...(trustedHash == null
                    ? {}
                    : {
                        trusted_hash: trustedHash,
                      }),
                },
              ]),
            ),
            mergeStrategy: "upsert",
          },
        ],
        filePath: null,
        expectedVersion: null,
        reloadUserConfig: true,
      }),
    onMutate: async (
      edits: HookStateEdit[],
      { client }: HooksMutationRuntime,
    ): Promise<MutationContext> => {
      await client.cancelQueries({
        predicate: ({ queryKey }) => isHooksQueryForHost(queryKey, hostId),
      });
      const previousResponses = client.getQueriesData({
        predicate: ({ queryKey }) => isHooksQueryForHost(queryKey, hostId),
      });
      client.setQueriesData(
        {
          predicate: ({ queryKey }) => isHooksQueryForHost(queryKey, hostId),
        },
        (previous) => applyOptimisticHookStateEdits(previous, edits),
      );
      return {
        previousResponses,
      };
    },
    onError: (
      _error: unknown,
      _edits: HookStateEdit[],
      context: MutationContext | undefined,
      { client }: HooksMutationRuntime,
    ) => {
      context?.previousResponses.forEach(([queryKey, response]) => {
        client.setQueryData(queryKey, response);
      });
    },
    onSettled: async (
      _response: unknown,
      _error: unknown,
      _edits: HookStateEdit[],
      _context: MutationContext | undefined,
      { client }: HooksMutationRuntime,
    ) => {
      await invalidateHooksQueries(client, hostId, {
        broadcast: true,
      });
    },
  }),
);
function isHooksQueryForHost(
  queryKey: readonly unknown[],
  hostId: string,
): boolean {
  return queryKey[0] === hooksQueryKey[0] && queryKey[1] === hostId;
}
function applyOptimisticHookStateEdits(
  response: HooksQueryResponse | undefined,
  edits: HookStateEdit[],
): HooksQueryResponse | undefined {
  if (response == null) return response;
  const editsByKey = new Map(edits.map((edit) => [edit.key, edit]));
  return produceImmutableUpdate(response, (draft: HooksQueryResponse) => {
    for (const group of draft.data) {
      for (const hook of group.hooks) {
        const edit = editsByKey.get(hook.key);
        if (edit == null) continue;
        if (edit.enabled != null) hook.enabled = edit.enabled;
        if (edit.trustedHash != null && edit.trustedHash === hook.currentHash) {
          hook.trustStatus = "trusted";
        }
      }
    }
  });
}
export {
  hooksStateMutation,
  invalidateHooksQueries,
  hooksForProjectQueryOptions,
  hooksForProjectsQueryOptions,
  hooksQueryKey,
};
