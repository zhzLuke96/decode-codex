// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Plugin marketplace query hooks.

import { readStatsigGateValue } from "../../vendor/statsig-current-runtime";
import { useAppScopeValue } from "../../boundaries/app-scope";
import {
  registeredAppServerHostIdsSignal,
  workspaceRootOptionsQuery,
} from "../../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiU as queryTimes,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import {
  isAbsoluteFilesystemPath,
  joinFilesystemPath,
} from "../../boundaries/rpc.facade";
import { useAuthForHost } from "../../auth/use-auth";
import { useCodexHome } from "../../utils/use-codex-home";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
import {
  useComputerUseAvailability,
  useExternalBrowserUseAvailability,
  useInAppBrowserUseAvailability,
  usePluginsEnabled,
} from "../use-is-plugins-enabled";
import { inlineLocalPluginImageDataUrl } from "./local-images";
import {
  CURATED_MARKETPLACE_GATE,
  EMPTY_FEATURED_PLUGIN_IDS,
  EMPTY_MARKETPLACE_LOAD_ERRORS,
  EMPTY_MARKETPLACES,
  EMPTY_PLUGIN_ITEMS,
  HIDDEN_CURATED_MARKETPLACES_QUERY_KEY,
  LOCAL_INTERNAL_TESTING_MARKETPLACE_RELATIVE_PATH,
  PLUGIN_IMAGE_INLINE_CONCURRENCY,
  getBuildFlavor,
  getCuratedMarketplaceName,
  pluginsQueryKey,
} from "./marketplace-constants";
import {
  emptyLoadedPluginsData,
  normalizePluginsFromMarketplaces,
  summarizeMarketplaces,
} from "./marketplace-normalization";
import {
  filterBlockedFeaturedPluginIds,
  filterFeaturedPluginIdsByAvailability,
  filterFeaturedPluginIdsByBuildFlavor,
  filterMarketplacesByName,
  filterPluginsByAvailability,
  filterPluginsByBuildFlavor,
  getHiddenMarketplaceNames,
  getInstalledPlugins,
  supportsPluginAuthMethod,
} from "./plugin-filters";
import type {
  ListPluginsResponse,
  LoadedPluginsData,
  PluginAvailability,
  PluginDisplayItem,
  PluginMarketplace,
  QueryClientLike,
  UseMarketplaceKindPluginsOptions,
  UsePluginsOptions,
  UsePluginsResult,
} from "./types";
const EMPTY_ADDITIONAL_MARKETPLACE_KINDS: string[] = [];
type WorkspaceRootsQueryValue = {
  roots?: string[];
};
type WorkspaceRootsQueryResult = {
  data?: WorkspaceRootsQueryValue;
  isFetched?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
};
type InstalledPluginSuggestionsResponse = {
  marketplaceLoadErrors: unknown[];
  marketplaces: PluginMarketplace[];
};
type UseQueryResult<TData> = {
  data?: TData;
  error?: Error | null;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => Promise<{
    data?: TData;
  }>;
};
export function usePlugins(
  hostId: string,
  rootsOverrideCwd?: string | string[],
  options?: UsePluginsOptions,
): UsePluginsResult {
  const pluginsFeatureEnabled =
    usePluginsEnabled({
      hostId,
    }) &&
    (options?.enabled ?? true);
  const additionalMarketplaceKinds =
    options?.additionalMarketplaceKinds ?? EMPTY_ADDITIONAL_MARKETPLACE_KINDS;
  const installSuggestionPluginNames =
    options?.installSuggestionPluginNames ?? null;
  const curatedMarketplaceGateEnabled = readStatsigGateValue(
    CURATED_MARKETPLACE_GATE,
  );
  const supportsRemotePluginCatalog = supportsPluginAuthMethod(
    useAuthForHost(hostId)?.authMethod ?? null,
  );
  const hiddenMarketplaceNames = getHiddenMarketplaceNames({
    hideCuratedMarketplaces: supportsRemotePluginCatalog,
    supportsRemotePluginCatalog,
    curatedMarketplaceGateEnabled,
  });
  const marketplaceKinds = resolveMarketplaceKinds({
    additionalMarketplaceKinds,
    includeRemoteCatalog: options?.includeRemoteCatalog ?? true,
    includeVerticalCatalog: !curatedMarketplaceGateEnabled,
  });
  const invalidateAndBroadcast = invalidateQueriesAndBroadcast();
  const queryClient = useQueryClient() as QueryClientLike;
  const workspaceRootsQuery = useAppScopeValue(
    workspaceRootOptionsQuery,
  ) as WorkspaceRootsQueryResult;
  const codexHome = useCodexHome(hostId);
  const registeredHostIds = useAppScopeValue(
    registeredAppServerHostIdsSignal,
  ) as string[];
  const hostRegistered = registeredHostIds.includes(hostId);
  const shouldRunAvailabilityQueries = pluginsFeatureEnabled && hostRegistered;
  const computerUseAvailability = useComputerUseAvailability({
    enabled: shouldRunAvailabilityQueries,
    hostId,
  });
  const inAppBrowserAvailability = useInAppBrowserUseAvailability({
    hostId,
  });
  const externalBrowserAvailability = useExternalBrowserUseAvailability({
    hostId,
  });
  const waitsForWorkspaceRoots = rootsOverrideCwd === undefined;
  const pluginRoots = resolvePluginRoots({
    codexHome,
    hostId,
    rootsOverrideCwd,
    workspaceRoots: workspaceRootsQuery.data?.roots,
  });
  const queryEnabled =
    pluginsFeatureEnabled &&
    hostRegistered &&
    (rootsOverrideCwd !== undefined || workspaceRootsQuery.isFetched);
  const buildFlavor = getBuildFlavor();
  const pluginQueryKey =
    installSuggestionPluginNames == null
      ? buildMarketplacePluginsQueryKey(
          hostId,
          pluginRoots,
          marketplaceKinds,
          curatedMarketplaceGateEnabled,
          supportsRemotePluginCatalog,
        )
      : buildInstalledPluginsQueryKey(
          hostId,
          pluginRoots,
          EMPTY_ADDITIONAL_MARKETPLACE_KINDS,
          installSuggestionPluginNames,
          curatedMarketplaceGateEnabled,
          supportsRemotePluginCatalog,
        );
  const pluginsQuery = useQuery({
    queryKey: pluginQueryKey,
    queryFn: async () =>
      installSuggestionPluginNames == null
        ? loadMarketplacePlugins({
            buildFlavor,
            hiddenMarketplaceNames,
            hostId,
            marketplaceKinds,
            pluginRoots,
            queryClient,
          })
        : loadInstallSuggestionPlugins({
            hiddenMarketplaceNames,
            hostId,
            installSuggestionPluginNames,
            pluginRoots,
            queryClient,
          }),
    enabled: queryEnabled,
    staleTime: queryTimes.FIVE_MINUTES,
    gcTime: Infinity,
  }) as UseQueryResult<LoadedPluginsData>;
  if (!pluginsFeatureEnabled || !hostRegistered) {
    return {
      availablePlugins: EMPTY_PLUGIN_ITEMS,
      featuredPluginIds: EMPTY_FEATURED_PLUGIN_IDS,
      installedPlugins: EMPTY_PLUGIN_ITEMS,
      marketplaceLoadErrors: EMPTY_MARKETPLACE_LOAD_ERRORS,
      marketplaces: EMPTY_MARKETPLACES,
      errorMessage: null,
      isLoading: false,
      isFetching: false,
      refetch: emptyRefetch,
      forceReload: emptyForceReload,
    };
  }
  const availability: PluginAvailability = {
    isComputerUseAvailable: computerUseAvailability.available,
    isExternalBrowserUseAvailable: externalBrowserAvailability.available,
    isInAppBrowserUseAvailable: inAppBrowserAvailability.available,
  };
  const plugins = pluginsQuery.data?.plugins ?? EMPTY_PLUGIN_ITEMS;
  const availablePlugins = filterPluginsByAvailability({
    plugins,
    ...availability,
  });
  const featuredPluginIds = filterFeaturedPluginIdsByAvailability({
    featuredPluginIds:
      pluginsQuery.data?.featuredPluginIds ?? EMPTY_FEATURED_PLUGIN_IDS,
    ...availability,
  });
  const installedPlugins = getInstalledPlugins(plugins);
  const marketplaceLoadErrors =
    pluginsQuery.data?.marketplaceLoadErrors ?? EMPTY_MARKETPLACE_LOAD_ERRORS;
  const marketplaces = pluginsQuery.data?.marketplaces ?? EMPTY_MARKETPLACES;
  const errorMessage = pluginsQuery.error
    ? String(pluginsQuery.error.message)
    : null;
  const isLoading =
    (waitsForWorkspaceRoots && workspaceRootsQuery.isLoading) ||
    pluginsQuery.isLoading ||
    inAppBrowserAvailability.isLoading ||
    externalBrowserAvailability.isLoading ||
    computerUseAvailability.isLoading;
  const isFetching =
    (waitsForWorkspaceRoots && workspaceRootsQuery.isFetching) ||
    pluginsQuery.isFetching ||
    computerUseAvailability.isLoading;
  return {
    availablePlugins,
    featuredPluginIds,
    installedPlugins,
    marketplaceLoadErrors,
    marketplaces,
    errorMessage,
    isLoading,
    isFetching,
    refetch: async () => {
      const nextPlugins =
        (await pluginsQuery.refetch()).data?.plugins ?? EMPTY_PLUGIN_ITEMS;
      return {
        availablePlugins: filterPluginsByAvailability({
          plugins: nextPlugins,
          ...availability,
        }),
        installedPlugins: getInstalledPlugins(nextPlugins),
      };
    },
    forceReload: () => invalidateAndBroadcast(pluginsQueryKey),
  };
}
export function useMarketplaceKindPlugins({
  enabled = true,
  hostId,
  marketplaceKind,
}: UseMarketplaceKindPluginsOptions): unknown {
  const pluginsFeatureEnabled = usePluginsEnabled({
    hostId,
  });
  return useQuery({
    queryKey: [...pluginsQueryKey, "marketplace-kind", hostId, marketplaceKind],
    queryFn: async () =>
      normalizePluginsFromMarketplaces(
        (
          (await sendAppServerRequest("list-plugins", {
            hostId,
            marketplaceKinds: [marketplaceKind],
          })) as ListPluginsResponse
        ).marketplaces,
      ),
    enabled: enabled && pluginsFeatureEnabled,
    staleTime: queryTimes.FIVE_MINUTES,
  });
}
async function loadInstallSuggestionPlugins({
  hiddenMarketplaceNames,
  hostId,
  installSuggestionPluginNames,
  pluginRoots,
  queryClient,
}: {
  hiddenMarketplaceNames: readonly string[];
  hostId: string;
  installSuggestionPluginNames: readonly string[];
  pluginRoots: readonly string[];
  queryClient: QueryClientLike;
}): Promise<LoadedPluginsData> {
  const response = (await sendAppServerRequest("send-cli-request-for-host", {
    hostId,
    method: "plugin/installed",
    params: {
      ...(pluginRoots.length > 0
        ? {
            cwds: pluginRoots,
          }
        : {}),
      installSuggestionPluginNames,
    },
  })) as InstalledPluginSuggestionsResponse;
  const visibleMarketplaces = filterMarketplacesByName(
    response.marketplaces,
    hiddenMarketplaceNames,
  );
  const plugins = normalizePluginsFromMarketplaces(visibleMarketplaces);
  return {
    featuredPluginIds: EMPTY_FEATURED_PLUGIN_IDS,
    marketplaceLoadErrors: response.marketplaceLoadErrors,
    marketplaces: summarizeMarketplaces(visibleMarketplaces),
    plugins: await inlinePluginImages({
      hostId,
      plugins,
      queryClient,
    }),
  };
}
async function loadMarketplacePlugins({
  buildFlavor,
  hiddenMarketplaceNames,
  hostId,
  marketplaceKinds,
  pluginRoots,
  queryClient,
}: {
  buildFlavor: string | null;
  hiddenMarketplaceNames: readonly string[];
  hostId: string;
  marketplaceKinds: string[] | null;
  pluginRoots: readonly string[];
  queryClient: QueryClientLike;
}): Promise<LoadedPluginsData> {
  const response = (await sendAppServerRequest(
    "list-plugins",
    marketplaceKinds == null
      ? {
          hostId,
          ...(pluginRoots.length > 0
            ? {
                cwds: pluginRoots,
              }
            : {}),
        }
      : {
          hostId,
          ...(pluginRoots.length > 0
            ? {
                cwds: pluginRoots,
              }
            : {}),
          marketplaceKinds,
        },
  )) as ListPluginsResponse;
  const visibleMarketplaces = filterMarketplacesByName(
    response.marketplaces,
    hiddenMarketplaceNames,
  );
  const allPlugins = normalizePluginsFromMarketplaces(visibleMarketplaces);
  const buildFilteredPlugins =
    buildFlavor == null
      ? allPlugins
      : filterPluginsByBuildFlavor({
          buildFlavor,
          plugins: allPlugins,
        });
  const visibleFeaturedIds = filterBlockedFeaturedPluginIds(
    response.featuredPluginIds,
  ).filter(
    (pluginId) =>
      !hiddenMarketplaceNames.some((hiddenName) =>
        pluginId.endsWith(`@${hiddenName}`),
      ),
  );
  return {
    featuredPluginIds:
      buildFlavor == null
        ? visibleFeaturedIds
        : filterFeaturedPluginIdsByBuildFlavor({
            buildFlavor,
            featuredPluginIds: visibleFeaturedIds,
          }),
    marketplaceLoadErrors: response.marketplaceLoadErrors,
    marketplaces: summarizeMarketplaces(visibleMarketplaces),
    plugins: await inlinePluginImages({
      hostId,
      plugins: buildFilteredPlugins,
      queryClient,
    }),
  };
}
function buildInstalledPluginsQueryKey(
  hostId: string,
  cwds: readonly string[],
  additionalMarketplaceKinds: readonly string[] = EMPTY_ADDITIONAL_MARKETPLACE_KINDS,
  installSuggestionPluginNames: readonly string[] | null = null,
  curatedMarketplaceGateEnabled = false,
  hideOpenAiCuratedMarketplaces = false,
): readonly unknown[] {
  if (installSuggestionPluginNames == null) {
    return buildMarketplacePluginsQueryKey(
      hostId,
      cwds,
      resolveMarketplaceKinds({
        additionalMarketplaceKinds,
        includeRemoteCatalog: true,
        includeVerticalCatalog: !curatedMarketplaceGateEnabled,
      }),
      curatedMarketplaceGateEnabled,
      hideOpenAiCuratedMarketplaces,
    );
  }
  return appendCuratedHiddenKey(
    [
      ...pluginsQueryKey,
      hostId,
      cwds,
      "installed",
      installSuggestionPluginNames,
      "curated-marketplace",
      getCuratedMarketplaceName(curatedMarketplaceGateEnabled),
    ],
    hideOpenAiCuratedMarketplaces,
  );
}
function appendCuratedHiddenKey(
  queryKey: readonly unknown[],
  hideOpenAiCuratedMarketplaces: boolean,
): readonly unknown[] {
  return hideOpenAiCuratedMarketplaces
    ? [...queryKey, HIDDEN_CURATED_MARKETPLACES_QUERY_KEY]
    : queryKey;
}
function resolveMarketplaceKinds({
  additionalMarketplaceKinds,
  includeRemoteCatalog,
  includeVerticalCatalog,
}: {
  additionalMarketplaceKinds: readonly string[];
  includeRemoteCatalog: boolean;
  includeVerticalCatalog: boolean;
}): string[] | null {
  return includeRemoteCatalog &&
    !includeVerticalCatalog &&
    additionalMarketplaceKinds.length === 0
    ? null
    : includeVerticalCatalog
      ? ["local", "vertical", ...additionalMarketplaceKinds]
      : ["local", ...additionalMarketplaceKinds];
}
function buildMarketplacePluginsQueryKey(
  hostId: string,
  cwds: readonly string[],
  marketplaceKinds: readonly string[] | null,
  curatedMarketplaceGateEnabled: boolean,
  hideOpenAiCuratedMarketplaces: boolean,
): readonly unknown[] {
  return appendCuratedHiddenKey(
    marketplaceKinds == null
      ? [
          ...pluginsQueryKey,
          hostId,
          cwds,
          "curated-marketplace",
          getCuratedMarketplaceName(curatedMarketplaceGateEnabled),
        ]
      : [
          ...pluginsQueryKey,
          hostId,
          cwds,
          "marketplace-kinds",
          marketplaceKinds,
          "curated-marketplace",
          getCuratedMarketplaceName(curatedMarketplaceGateEnabled),
        ],
    hideOpenAiCuratedMarketplaces,
  );
}
async function inlinePluginImages({
  hostId,
  plugins,
  queryClient,
}: {
  hostId: string;
  plugins: readonly PluginDisplayItem[];
  queryClient: QueryClientLike;
}): Promise<PluginDisplayItem[]> {
  const nextPlugins = [...plugins];
  async function inlineAtIndex(pluginIndex: number): Promise<void> {
    const plugin = plugins[pluginIndex];
    if (plugin == null) return;
    const [composerIconPath, logoPath] = await Promise.all([
      inlineLocalPluginImageDataUrl(
        plugin.composerIconPath,
        hostId,
        queryClient,
      ),
      inlineLocalPluginImageDataUrl(plugin.logoPath, hostId, queryClient),
    ]);
    if (composerIconPath != null || logoPath != null) {
      nextPlugins[pluginIndex] = {
        ...plugin,
        composerIconPath: composerIconPath ?? plugin.composerIconPath,
        logoPath: logoPath ?? plugin.logoPath,
        plugin: plugin.plugin.interface
          ? {
              ...plugin.plugin,
              interface: {
                ...plugin.plugin.interface,
                ...(composerIconPath == null
                  ? {}
                  : {
                      composerIcon: composerIconPath,
                    }),
                ...(logoPath == null
                  ? {}
                  : {
                      logo: logoPath,
                    }),
              },
            }
          : plugin.plugin,
      };
    }
    await inlineAtIndex(pluginIndex + PLUGIN_IMAGE_INLINE_CONCURRENCY);
  }
  await Promise.all(
    Array.from(
      {
        length: Math.min(PLUGIN_IMAGE_INLINE_CONCURRENCY, plugins.length),
      },
      (_unused, pluginIndex) => inlineAtIndex(pluginIndex),
    ),
  );
  return nextPlugins;
}
function resolvePluginRoots({
  codexHome,
  hostId,
  rootsOverrideCwd,
  workspaceRoots,
}: {
  codexHome: string | null | undefined;
  hostId: string;
  rootsOverrideCwd?: string | string[];
  workspaceRoots?: string[];
}): string[] {
  const localTestingMarketplacePath =
    hostId === "local" && codexHome != null
      ? joinFilesystemPath(
          codexHome,
          LOCAL_INTERNAL_TESTING_MARKETPLACE_RELATIVE_PATH,
        )
      : null;
  return normalizePluginRoots(
    [
      ...(typeof rootsOverrideCwd === "string"
        ? [rootsOverrideCwd]
        : (rootsOverrideCwd ?? workspaceRoots ?? [])),
      ...(localTestingMarketplacePath == null
        ? []
        : [localTestingMarketplacePath]),
    ],
    codexHome,
  );
}
function normalizePluginRoots(
  roots: readonly string[],
  codexHome: string | null | undefined,
): string[] {
  return Array.from(
    new Set(
      roots
        .map((root) => root.trim())
        .filter(
          (root) =>
            isAbsoluteFilesystemPath(root) &&
            isCompatibleRootForHost(root, codexHome),
        ),
    ),
  );
}
function isCompatibleRootForHost(
  root: string,
  codexHome: string | null | undefined,
): boolean {
  return codexHome == null
    ? true
    : isWindowsDrivePath(codexHome) || isWindowsNetworkPath(codexHome)
      ? isWindowsDrivePath(root) || isWindowsNetworkPath(root)
      : root.startsWith("/") && !root.startsWith("//");
}
function isWindowsDrivePath(path: string): boolean {
  return /^[A-Za-z]:[\\/]/u.test(path);
}
function isWindowsNetworkPath(path: string): boolean {
  return /^\\\\[^\\]+\\[^\\]+/u.test(path) || /^\/\/[^/]+\/[^/]+/u.test(path);
}
async function emptyForceReload(): Promise<void> {}
async function emptyRefetch(): Promise<{
  availablePlugins: PluginDisplayItem[];
  installedPlugins: PluginDisplayItem[];
}> {
  const emptyData = emptyLoadedPluginsData();
  return {
    availablePlugins: emptyData.plugins,
    installedPlugins: emptyData.plugins,
  };
}
