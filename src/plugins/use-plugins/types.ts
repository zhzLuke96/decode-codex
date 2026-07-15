// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Shared types for the restored plugin marketplace hooks.

export type PluginInterface = {
  displayName?: string | null;
  shortDescription?: string | null;
  composerIcon?: string | null;
  composerIconUrl?: string | null;
  logo?: string | null;
  logoUrl?: string | null;
  [key: string]: unknown;
};
export type PluginSummary = {
  id: string;
  name: string;
  installed?: boolean;
  remotePluginId?: string | null;
  keywords?: string[];
  interface?: PluginInterface | null;
  [key: string]: unknown;
};
export type PluginMarketplace = {
  name: string;
  path?: string | null;
  interface?: {
    displayName?: string | null;
    [key: string]: unknown;
  } | null;
  plugins: PluginSummary[];
  [key: string]: unknown;
};
export type PluginIconPaths = {
  composerIconPath: string;
  logoPath: string;
};
export type PluginMarketplaceSource = {
  marketplacePath?: string | null;
  remoteMarketplaceName?: string | null;
};
export type MarketplaceRequestSource =
  | {
      marketplacePath: string;
    }
  | {
      remoteMarketplaceName: string;
    };
export type PluginDisplayItem = PluginIconPaths & {
  description: string | null;
  displayName: string | null;
  marketplaceDisplayName: string | null;
  marketplaceName: string;
  marketplacePath: string | null;
  remoteMarketplaceName: string | null;
  plugin: PluginSummary;
  keywords?: string[];
  [key: string]: unknown;
};
export type SuggestedPlugin = {
  summary: PluginSummary;
  marketplaceName: string;
  marketplacePath?: string | null;
  description?: string | null;
};
export type PluginInstallRequest = MarketplaceRequestSource & {
  pluginName: string;
};
export type MarketplaceDisplaySummary = {
  displayName: string | null;
  isBuiltIn: boolean;
  name: string;
  path?: string | null;
  pluginCount: number;
};
export type ListPluginsResponse = {
  featuredPluginIds: string[];
  marketplaceLoadErrors: unknown[];
  marketplaces: PluginMarketplace[];
};
export type LoadedPluginsData = {
  featuredPluginIds: string[];
  marketplaceLoadErrors: unknown[];
  marketplaces: MarketplaceDisplaySummary[];
  plugins: PluginDisplayItem[];
};
export type QueryClientLike = {
  fetchQuery<TData>(options: {
    queryKey: readonly unknown[];
    queryFn: (context: { signal?: AbortSignal }) => Promise<TData>;
    retry?: boolean;
    staleTime?: unknown;
    gcTime?: unknown;
  }): Promise<TData>;
};
export type UsePluginsOptions = {
  enabled?: boolean;
  additionalMarketplaceKinds?: string[];
  installSuggestionPluginNames?: string[] | null;
  includeRemoteCatalog?: boolean;
};
export type PluginAvailability = {
  isComputerUseAvailable: boolean;
  isExternalBrowserUseAvailable: boolean;
  isInAppBrowserUseAvailable: boolean;
};
export type UsePluginsResult = {
  availablePlugins: PluginDisplayItem[];
  featuredPluginIds: string[];
  installedPlugins: PluginDisplayItem[];
  marketplaceLoadErrors: unknown[];
  marketplaces: MarketplaceDisplaySummary[];
  errorMessage: string | null;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => Promise<{
    availablePlugins: PluginDisplayItem[];
    installedPlugins: PluginDisplayItem[];
  }>;
  forceReload: () => Promise<void>;
};
export type UseMarketplaceKindPluginsOptions = {
  enabled?: boolean;
  hostId: string;
  marketplaceKind: string;
};
