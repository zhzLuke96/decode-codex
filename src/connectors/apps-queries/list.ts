// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import {
  _appScopeA as useAppScopeQueryValue,
  appScopeP as createAppScopeQueryFamily,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { useHostConfigBt as callHostCommand } from "../../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as logger,
  vscodeApiU as queryTimings,
  vscodeApiUnderscore as useMutation,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { useAuth } from "../../auth/use-auth";
import { experimentalFeaturesQueryOptions } from "../../features/experimental-features/queries";
import { useAppsWithResolvedLogos } from "./logo";
import type { AppConnectApp, QueryClientLike } from "./types";
const APPS_LIST_QUERY_KEY = ["apps", "list"] as const;
const LIST_APPS_PAGE_SIZE = 1000;
type ExperimentalFeature = {
  enabled: boolean;
  name: string;
};
type ListAppsResponse = {
  data: AppConnectApp[];
  nextCursor?: string | null;
};
export const appsListQueryOptions = createAppScopeQueryFamily(
  appScopeRoot,
  (hostId: string) => ({
    queryKey: appsListQueryKey(hostId),
    queryFn: async () =>
      loadAppsListWithLogoResolution({
        forceRefetch: false,
        hostId,
      }),
    notifyOnChangeProps: [
      "data",
      "dataUpdatedAt",
      "error",
      "fetchStatus",
      "status",
    ],
    retry: false,
    staleTime: queryTimings.FIVE_MINUTES,
  }),
);
export async function hardRefreshAppsList({
  hostId,
  queryClient,
}: {
  hostId: string;
  queryClient: QueryClientLike;
}): Promise<AppConnectApp[]> {
  const apps = await loadAppsListWithLogoResolution({
    forceRefetch: true,
    hostId,
  });
  queryClient.setQueryData?.(appsListQueryKey(hostId), apps);
  return apps;
}
export function useAppsList({
  enabled = true,
  hostId = "local",
}: {
  enabled?: boolean;
  hostId?: string;
} = {}) {
  const auth = useAuth();
  const isAppsFeatureEnabled = useIsAppsFeatureEnabled({
    hostId,
  });
  const queryClient = useQueryClient();
  const isAuthenticated = !auth.isLoading && auth.userId != null;
  const queryKey = appsListQueryKey(hostId);
  const query = useQuery({
    queryKey,
    queryFn: async () =>
      loadAppsListWithLogoResolution({
        forceRefetch: false,
        hostId,
      }),
    enabled: enabled && isAppsFeatureEnabled && isAuthenticated,
    notifyOnChangeProps: [
      "data",
      "dataUpdatedAt",
      "error",
      "fetchStatus",
      "status",
    ],
    retry: false,
    staleTime: queryTimings.FIVE_MINUTES,
  });
  const hardRefetchMutation = useMutation({
    retry: false,
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey,
      });
    },
    mutationFn: async () =>
      hardRefreshAppsList({
        hostId,
        queryClient,
      }),
  });
  const hardRefetchError =
    hardRefetchMutation.error != null &&
    hardRefetchMutation.submittedAt > query.dataUpdatedAt
      ? hardRefetchMutation.error
      : null;
  return {
    ...query,
    data: isAppsFeatureEnabled ? query.data : [],
    hardRefetchAppsList: async () => hardRefetchMutation.mutateAsync(),
    isHardRefetchingAppsList: hardRefetchMutation.isPending,
    loadError: hardRefetchError ?? query.error ?? null,
  };
}
export function useAccessibleApps({
  hostId,
}: {
  hostId?: string;
} = {}): AppConnectApp[] {
  const { data = [] } = useAppsList({
    hostId,
  });
  return filterAccessibleEnabledApps(data);
}
export function useResolvedAccessibleApps({
  hostId,
}: {
  hostId?: string;
} = {}): AppConnectApp[] {
  const apps = useAccessibleApps({
    hostId,
  });
  return (
    useAppsWithResolvedLogos({
      apps,
    }) ?? apps
  );
}
export function useIsAppsFeatureEnabled({
  hostId,
}: {
  hostId: string;
}): boolean {
  const { data = [] } = useAppScopeQueryValue(
    experimentalFeaturesQueryOptions,
    hostId,
  ) as {
    data?: ExperimentalFeature[];
  };
  return data.some((feature) => feature.name === "apps" && feature.enabled);
}
export function filterAccessibleEnabledApps(
  apps: readonly AppConnectApp[],
): AppConnectApp[] {
  return apps.filter((app) => app.isAccessible && app.isEnabled);
}
async function loadAppsListFromHost({
  forceRefetch,
  hostId,
}: {
  forceRefetch: boolean;
  hostId: string;
}): Promise<AppConnectApp[]> {
  try {
    const loadPage = async (
      cursor: string | null,
    ): Promise<AppConnectApp[]> => {
      const response = (await callHostCommand("list-apps", {
        hostId,
        cursor,
        limit: LIST_APPS_PAGE_SIZE,
        forceRefetch,
      })) as ListAppsResponse;
      return response.nextCursor == null
        ? response.data
        : [...response.data, ...(await loadPage(response.nextCursor))];
    };
    return loadPage(null);
  } catch (error) {
    logger.error("Failed to load apps list", {
      safe: {
        error: String(error),
      },
      sensitive: {},
    });
    throw error instanceof Error ? error : Error(String(error));
  }
}
async function loadAppsListWithLogoResolution({
  forceRefetch,
  hostId,
}: {
  forceRefetch: boolean;
  hostId: string;
}): Promise<AppConnectApp[]> {
  try {
    return await loadAppsListFromHost({
      forceRefetch,
      hostId,
    });
  } catch {
    return loadAppsListFromHost({
      forceRefetch,
      hostId,
    });
  }
}
export function appsListQueryKey(hostId: string): readonly unknown[] {
  return [...APPS_LIST_QUERY_KEY, hostId];
}
