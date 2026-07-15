// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// Config requirements and read-config helpers used by Windows sandbox setup.
import {
  initAppServerRequestRuntime,
  sendAppServerRequest,
} from "../../runtime/app-server-request";
import { appMainLogger } from "../../runtime/app-main-host-runtime";
import { createAppScopedSignalFamily } from "../../runtime/app-scope-runtime";
import { queryDurations } from "../../runtime/host-query-runtime";
import {
  initReactQueryRuntimeChunk,
  useQuery,
  type QueryOptions,
  type RuntimeQueryClient,
} from "../../runtime/query-client/react-query-runtime";
import type { WindowsSandboxRequirementsResponse } from "./types";

export type ConfigReadResponse = {
  config: {
    windows?: unknown;
  };
  layers?: unknown;
  origins?: unknown;
};

export const configRequirementsByHostAuthSignal = createAppScopedSignalFamily<
  { authMethod?: string | null; hostId: string },
  QueryOptions<WindowsSandboxRequirementsResponse>
>((params) => buildConfigRequirementsQueryOptions(params));

export function buildConfigRequirementsQueryKey({
  authMethod,
  hostId,
}: {
  authMethod?: string | null;
  hostId: string;
}): readonly unknown[] {
  return ["config", "requirements", hostId, "auth", authMethod ?? null];
}

export function buildConfigRequirementsQueryOptions({
  authMethod,
  hostId,
}: {
  authMethod?: string | null;
  hostId: string;
}): QueryOptions<WindowsSandboxRequirementsResponse> {
  return {
    queryKey: buildConfigRequirementsQueryKey({ authMethod, hostId }),
    queryFn: async () => {
      try {
        return await sendAppServerRequest<WindowsSandboxRequirementsResponse>(
          "get-config-requirements-for-host",
          { hostId },
        );
      } catch (error) {
        appMainLogger.error("Failed to load config requirements", {
          safe: {},
          sensitive: { error },
        });
        return { requirements: null };
      }
    },
    staleTime: queryDurations.FIVE_MINUTES,
  };
}

export function useConfigRequirementsQuery(hostId: string) {
  return useQuery(buildConfigRequirementsQueryOptions({ hostId }));
}

export async function readHostConfigForHost(
  queryClient: RuntimeQueryClient,
  hostId: string,
  cwd: string | null = null,
  includeLayers: boolean = false,
): Promise<ConfigReadResponse> {
  const options: QueryOptions<ConfigReadResponse> = {
    queryKey: ["config", "read-response", hostId, cwd, includeLayers],
    queryFn: () =>
      sendAppServerRequest<ConfigReadResponse>("read-config-for-host", {
        cwd,
        hostId,
        includeLayers,
      }),
    staleTime: 0,
  };

  return queryClient.fetchQuery == null
    ? options.queryFn!({ queryKey: options.queryKey! })
    : queryClient.fetchQuery(options);
}

export function initWindowsSandboxConfigQueryRuntime(): void {
  initAppServerRequestRuntime();
  initReactQueryRuntimeChunk();
}
