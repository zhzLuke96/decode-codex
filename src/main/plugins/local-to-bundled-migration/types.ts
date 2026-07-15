// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for local plugin to bundled plugin migrations.

export type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

export type LocalMigrationLogger = {
  debug?(message: string, details?: StructuredLogDetails): void;
  info(message: string, details?: StructuredLogDetails): void;
  warning(message: string, details?: StructuredLogDetails): void;
};

export type MarketplacePluginSource = {
  path?: string;
  source?: string;
  type?: string;
};

export type MarketplacePlugin = {
  id?: string;
  installed?: boolean;
  name: string;
  source?: MarketplacePluginSource;
};

export type Marketplace = {
  name: string;
  path?: string | null;
  plugins: MarketplacePlugin[];
};

export type MarketplaceWithPath = Marketplace & { path: string };

export type MarketplacePluginMatch = {
  marketplace: MarketplaceWithPath;
  plugin: MarketplacePlugin;
};

export type InstalledLocalPluginMatch = {
  marketplace: MarketplaceWithPath;
  plugin: MarketplacePlugin & {
    id: string;
    installed: true;
    source: MarketplacePluginSource & { path: string; type: "local" };
  };
};

export type AppServerPluginConnection = {
  installPlugin(options: {
    marketplacePath: string;
    pluginName: string;
  }): Promise<void> | void;
  listPlugins(options?: unknown): Promise<{ marketplaces: Marketplace[] }>;
  uninstallPlugin(options: { pluginId: string }): Promise<void> | void;
};

export type LocalToBundledMigrationOptions = {
  appServerConnection: AppServerPluginConnection;
  codexHome: string;
  listPluginsOptions?: unknown;
  logger: LocalMigrationLogger;
  marketplaceName?: string;
  trashItem(path: string): Promise<void> | void;
};

export type IsMacAppNotarized = (appPath: string) => Promise<boolean> | boolean;
