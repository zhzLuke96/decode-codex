// Restored from ref/.vite/build/src-CoIhwwHr.js
// Disabled bundled-plugin config for ambient suggestion generation threads.

import { posix as posixPath } from "node:path";
import {
  assertSinglePathSegment,
  getRecordProperty,
  getStringProperty,
  parseRecord,
  readAppServerTextFile,
} from "./record-utils";
import type {
  AmbientAppServerConnection,
  AmbientConnectedAppState,
  AmbientDisabledPluginConfig,
  AppServerMarketplace,
  AppServerMarketplacePlugin,
} from "../types";

const DISABLED_APP_TOOL_CONFIG = {
  enabled: false,
  destructive_enabled: false,
  open_world_enabled: false,
};
const AMBIENT_DISABLED_BUNDLED_PLUGIN_NAMES = new Set([
  "browser",
  "browser-use",
  "chrome",
  "chrome-dev",
  "chrome-internal",
  "computer-use",
]);

export async function getAmbientDisabledBundledPluginConfig(
  client: AmbientAppServerConnection,
  projectRoot: string,
): Promise<AmbientDisabledPluginConfig | null> {
  const pluginFilter = projectRoot.length > 0 ? { cwds: [projectRoot] } : {};
  const [{ marketplaces }, codexHome] = await Promise.all([
    client.listPlugins(pluginFilter),
    client.codexHome(),
  ]);
  const disabledPlugins = findAmbientDisabledBundledPlugins({
    codexHome,
    marketplaces,
  });
  if (disabledPlugins.length === 0) return null;

  const pathApi = await client.platformPath();
  const configEntries = await Promise.all(
    disabledPlugins.map((plugin) =>
      readPluginMcpServerConfig({
        client,
        pathApi,
        pluginRoot: plugin.root,
      }).catch(() => ({})),
    ),
  );
  const disabledMcpServerConfigs: Record<string, unknown> = {};
  for (const config of configEntries) {
    for (const [key, value] of Object.entries(config)) {
      disabledMcpServerConfigs[key] ??= value;
    }
  }

  return {
    disabledMcpServerConfigs,
    disabledPluginIds: disabledPlugins.map((plugin) => plugin.id),
  };
}

export function buildAmbientThreadConfigOverrides(
  connectedAppState: AmbientConnectedAppState | null,
  disabledPluginConfig: AmbientDisabledPluginConfig | null,
): Record<string, unknown> | null {
  const config: Record<string, unknown> = {};
  if (disabledPluginConfig != null) {
    for (const pluginId of disabledPluginConfig.disabledPluginIds) {
      config[`plugins.${pluginId}.enabled`] = false;
    }
    for (const [key, value] of Object.entries(
      disabledPluginConfig.disabledMcpServerConfigs,
    )) {
      config[`mcp_servers.${key}`] = value;
    }
  }
  if (connectedAppState?.disableAllApps) {
    return { ...config, apps: { _default: DISABLED_APP_TOOL_CONFIG } };
  }
  for (const appId of connectedAppState?.disabledAppIds ?? []) {
    config[`apps.${appId}.enabled`] = false;
  }
  return Object.keys(config).length > 0 ? config : null;
}

function findAmbientDisabledBundledPlugins({
  codexHome,
  marketplaces,
}: {
  codexHome: string;
  marketplaces: AppServerMarketplace[];
}): Array<{ id: string; root: string }> {
  const plugins: Array<{ id: string; root: string }> = [];
  for (const marketplace of marketplaces) {
    for (const plugin of marketplace.plugins) {
      if (isAmbientDisabledBundledPlugin(plugin)) {
        plugins.push({
          id: plugin.id,
          root: getLocalPluginRoot({
            codexHome,
            localVersion: plugin.localVersion,
            marketplaceName: marketplace.name,
            pluginName: plugin.name,
          }),
        });
      }
    }
  }
  return plugins;
}

function isAmbientDisabledBundledPlugin(
  plugin: AppServerMarketplacePlugin,
): boolean {
  return (
    AMBIENT_DISABLED_BUNDLED_PLUGIN_NAMES.has(plugin.name) &&
    plugin.installed === true &&
    plugin.enabled === true &&
    plugin.source?.type === "local"
  );
}

function getLocalPluginRoot({
  codexHome,
  localVersion,
  marketplaceName,
  pluginName,
}: {
  codexHome: string;
  localVersion: unknown;
  marketplaceName: string;
  pluginName: string;
}): string {
  const normalizedCodexHome = codexHome.replace(/\\/g, "/").replace(/\/+$/, "");
  const localVersionSegment =
    typeof localVersion === "string" && localVersion.trim().length > 0
      ? localVersion.trim()
      : "local";
  const joinedPath = posixPath.join(
    normalizedCodexHome,
    "plugins",
    "cache",
    assertSinglePathSegment(marketplaceName),
    assertSinglePathSegment(pluginName),
    assertSinglePathSegment(localVersionSegment),
  );
  return normalizedCodexHome.startsWith("//") ? `/${joinedPath}` : joinedPath;
}

async function readPluginMcpServerConfig({
  client,
  pathApi,
  pluginRoot,
}: {
  client: AmbientAppServerConnection;
  pathApi: {
    join(...segments: string[]): string;
    resolve(...segments: string[]): string;
  };
  pluginRoot: string;
}): Promise<Record<string, unknown>> {
  const pluginManifestPath = pathApi.join(
    pluginRoot,
    ".codex-plugin",
    "plugin.json",
  );
  const pluginManifest = parseRecord(
    JSON.parse(await readAppServerTextFile(client, pluginManifestPath)),
  );
  const mcpServersPath = getStringProperty(pluginManifest, "mcpServers");
  const configPath = pathApi.resolve(pluginRoot, mcpServersPath);
  const parsedConfig = JSON.parse(
    await readAppServerTextFile(client, configPath),
  );
  const configRecord = parseRecord(parsedConfig);
  const mcpServers =
    parseRecordOrFallback(getRecordProperty(configRecord, "mcpServers")) ??
    configRecord;
  const disabledConfig: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(mcpServers)) {
    disabledConfig[key] = { ...parseRecord(value), enabled: false };
  }
  return disabledConfig;
}

function parseRecordOrFallback(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
