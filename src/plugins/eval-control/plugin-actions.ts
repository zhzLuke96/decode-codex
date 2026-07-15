// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Eval-control "plugins.*" actions: list installed/marketplace plugins and
// configure (install / enable / disable) a plugin through the local app server.

import { z } from "zod";
import { LOCAL_APP_SERVER_HOST_ID } from "../../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import {
  getAppBuildChannel,
  parseHostConfigDocument,
  waitForPluginInstalled,
} from "../../boundaries/onboarding-commons-externals.facade";
import { getBundledMarketplaceName } from "../use-plugins/marketplace-constants";
import { createPluginEnabledConfigEdit } from "../plugin-config-edits";

export const pluginsListActionSchema = z.object({
  type: z.literal("plugins.list"),
});

export const pluginsConfigureActionSchema = z.object({
  type: z.literal("plugins.configure"),
  pluginName: z.string().min(1),
  marketplaceName: z.string().min(1).optional(),
  useBundledMarketplace: z.boolean().optional(),
  install: z.boolean().optional(),
  enabled: z.boolean().optional(),
});

export type PluginsListAction = z.infer<typeof pluginsListActionSchema>;
export type PluginsConfigureAction = z.infer<
  typeof pluginsConfigureActionSchema
>;

interface MarketplacePlugin {
  enabled: boolean;
  id: string;
  installed: boolean;
  name: string;
}

interface PluginMarketplace {
  name: string;
  path: string | null;
  plugins: MarketplacePlugin[];
}

interface ConfiguredPlugin {
  id: string;
  name: string;
}

export async function runPluginsListAction(): Promise<
  Record<string, unknown> & { configuredPlugins: ConfiguredPlugin[] }
> {
  const [listResult, configResult] = (await Promise.all([
    sendAppServerRequest("list-plugins", { hostId: LOCAL_APP_SERVER_HOST_ID }),
    sendAppServerRequest("read-config-for-host", {
      hostId: LOCAL_APP_SERVER_HOST_ID,
      includeLayers: false,
      cwd: null,
    }),
  ])) as [Record<string, unknown>, { config: unknown }];
  return {
    ...listResult,
    configuredPlugins: listConfiguredPlugins(
      parseHostConfigDocument(configResult.config),
    ),
  };
}

export async function runPluginsConfigureAction(
  action: PluginsConfigureAction,
): Promise<{
  plugin: {
    enabled: boolean;
    id: string;
    installed: boolean;
    marketplaceName: string;
    marketplacePath: string | null;
    name: string;
  };
}> {
  if (action.useBundledMarketplace === true && action.marketplaceName != null) {
    throw new Error("plugins.configure accepts one marketplace selector");
  }
  if (action.useBundledMarketplace !== true && action.marketplaceName == null) {
    throw new Error(
      "plugins.configure requires marketplaceName or useBundledMarketplace",
    );
  }
  const marketplaceName =
    action.marketplaceName ?? getBundledMarketplaceName(getAppBuildChannel());
  let { marketplace, plugin } = await findMarketplacePlugin({
    marketplaceName,
    pluginName: action.pluginName,
  });

  if (action.install === true && !plugin.installed) {
    if (marketplace.path == null) {
      throw new Error(
        `Cannot install ${action.pluginName} from marketplace ${marketplaceName}: no local marketplace path`,
      );
    }
    await sendAppServerRequest("install-plugin", {
      hostId: LOCAL_APP_SERVER_HOST_ID,
      marketplacePath: marketplace.path,
      pluginName: action.pluginName,
    });
    await waitForPluginInstalled({
      hostId: LOCAL_APP_SERVER_HOST_ID,
      marketplacePath: marketplace.path,
      pluginName: action.pluginName,
    });
    ({ marketplace, plugin } = await findMarketplacePlugin({
      marketplaceName,
      pluginName: action.pluginName,
    }));
  }

  if (action.enabled != null) {
    if (!plugin.installed) {
      throw new Error(
        `Cannot configure ${action.pluginName}: plugin is not installed`,
      );
    }
    await sendAppServerRequest("batch-write-config-value", {
      hostId: LOCAL_APP_SERVER_HOST_ID,
      edits: createPluginEnabledConfigEdit({
        pluginId: plugin.id,
        enabled: action.enabled,
      }),
      filePath: null,
      expectedVersion: null,
      reloadUserConfig: true,
    });
    ({ marketplace, plugin } = await findMarketplacePlugin({
      marketplaceName,
      pluginName: action.pluginName,
    }));
  }

  return {
    plugin: {
      enabled: plugin.enabled,
      id: plugin.id,
      installed: plugin.installed,
      marketplaceName: marketplace.name,
      marketplacePath: marketplace.path ?? null,
      name: plugin.name,
    },
  };
}

async function findMarketplacePlugin({
  marketplaceName,
  pluginName,
}: {
  marketplaceName: string;
  pluginName: string;
}): Promise<{ marketplace: PluginMarketplace; plugin: MarketplacePlugin }> {
  const { marketplaces } = (await sendAppServerRequest("list-plugins", {
    hostId: LOCAL_APP_SERVER_HOST_ID,
  })) as { marketplaces: PluginMarketplace[] };
  const marketplace = marketplaces.find(
    (item) => item.name === marketplaceName,
  );
  if (marketplace == null) {
    throw new Error(`Unknown plugin marketplace: ${marketplaceName}`);
  }
  const plugin = marketplace.plugins.find((item) => item.name === pluginName);
  if (plugin == null) {
    throw new Error(
      `Unknown plugin ${pluginName} in marketplace ${marketplaceName}`,
    );
  }
  return { marketplace, plugin };
}

function listConfiguredPlugins(config: {
  plugins?: unknown;
}): ConfiguredPlugin[] {
  const plugins = config.plugins;
  if (typeof plugins !== "object" || !plugins || Array.isArray(plugins)) {
    return [];
  }
  return Object.keys(plugins)
    .sort()
    .map((id) => ({ id, name: getPluginDisplayName(id) }));
}

function getPluginDisplayName(pluginId: string): string {
  const marketplaceSeparator = pluginId.indexOf("@");
  return marketplaceSeparator === -1
    ? pluginId
    : pluginId.slice(0, marketplaceSeparator);
}
