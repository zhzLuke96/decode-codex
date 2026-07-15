// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Downloads the internal (and large-internal) plugin marketplaces for the local
// Codex app server. `downloadInternalPlugins` de-dupes concurrent calls behind a
// single in-flight promise; `InternalPluginsDownloader` drives it from a Statsig
// dynamic config once the Statsig user matches the signed-in account.

import React from "react";
import {
  readStatsigGateValue,
  useDynamicConfig,
  useStatsigClient,
} from "../vendor/statsig-current-runtime";
import { LOCAL_APP_SERVER_HOST_ID } from "../boundaries/thread-context-inputs.facade";
import {
  INTERNAL_PLUGINS_CONFIG_KEY,
  PLUGIN_MARKETPLACES_REFRESHED_MARKER,
  internalPluginsConfigSchema,
  invokeMainProcessCommand,
  useCurrentAccountEmail,
  usePluginMarketplacesRefresher,
} from "../boundaries/onboarding-commons-externals.facade";
import { vscodeApiH as logger } from "../boundaries/vscode-api";

type UseEffectEvent = <Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
) => (...args: Args) => Return;

const useEffectEvent = (
  React as typeof React & { useEffectEvent: UseEffectEvent }
).useEffectEvent;

const INTERNAL_PLUGINS_DYNAMIC_CONFIG_ID = "2096615506";
const LARGE_INTERNAL_PLUGINS_CONFIG_KEY = "codex-large-internal-plugins";
const INTERNAL_PLUGINS_DOWNLOAD_GATE = "581682073";

interface InternalPluginsConfig {
  version?: string;
  [key: string]: unknown;
}

type InternalPluginsDownloadResult = "updated" | "unchanged" | "failed";

let inFlightInternalPluginsDownload: Promise<InternalPluginsDownloadResult> | null =
  null;

export function downloadInternalPlugins({
  config,
  largeInternalPluginsConfig,
  hostId = LOCAL_APP_SERVER_HOST_ID,
}: {
  config: InternalPluginsConfig;
  largeInternalPluginsConfig: InternalPluginsConfig | null;
  hostId?: string;
}): Promise<InternalPluginsDownloadResult> {
  inFlightInternalPluginsDownload ??= (async () => {
    try {
      const { marketplaceUpdated } = await invokeMainProcessCommand(
        "download-internal-plugins",
        { params: { config, hostId, largeInternalPluginsConfig } },
      );
      return marketplaceUpdated ? "updated" : "unchanged";
    } catch (error) {
      logger.error("Error downloading internal plugins", {
        safe: { version: config.version },
        sensitive: { error },
      });
      return "failed";
    } finally {
      inFlightInternalPluginsDownload = null;
    }
  })();
  return inFlightInternalPluginsDownload;
}

export function InternalPluginsDownloader(): null {
  const account = useCurrentAccountEmail();
  const refreshPluginMarketplaces = usePluginMarketplacesRefresher();
  const internalPluginsConfig = useDynamicConfig(
    INTERNAL_PLUGINS_DYNAMIC_CONFIG_ID,
  );
  const rawConfig = internalPluginsConfig.get(
    INTERNAL_PLUGINS_CONFIG_KEY,
    null,
  );
  const rawLargeConfig = internalPluginsConfig.get(
    LARGE_INTERNAL_PLUGINS_CONFIG_KEY,
    null,
  );
  const parsedConfig =
    rawConfig == null ? null : internalPluginsConfigSchema.safeParse(rawConfig);
  const parsedLargeConfig =
    rawLargeConfig == null
      ? null
      : internalPluginsConfigSchema.safeParse(rawLargeConfig);
  const config = parsedConfig?.success ? parsedConfig.data : null;
  const largeConfig = parsedLargeConfig?.success
    ? parsedLargeConfig.data
    : null;

  const { client, isLoading } = useStatsigClient();
  const readStatsigEmail = () => client.getContext().user?.email ?? null;
  const [statsigEmail, setStatsigEmail] = React.useState(readStatsigEmail);
  const isWaitingForStatsigUser =
    isLoading || (account.email != null && statsigEmail !== account.email);
  const isDownloadEnabled = readStatsigGateValue(
    client,
    INTERNAL_PLUGINS_DOWNLOAD_GATE,
  );

  React.useEffect(() => {
    if (isLoading) return;
    const syncStatsigEmail = () => {
      setStatsigEmail(client.getContext().user?.email ?? null);
    };
    syncStatsigEmail();
    client.on("values_updated", syncStatsigEmail);
    return () => {
      client.off("values_updated", syncStatsigEmail);
    };
  }, [client, isLoading]);

  const notifyPluginMarketplacesRefreshed = useEffectEvent(() => {
    refreshPluginMarketplaces(PLUGIN_MARKETPLACES_REFRESHED_MARKER);
  });

  React.useEffect(() => {
    if (isWaitingForStatsigUser) return;
    if (isDownloadEnabled && config != null) {
      downloadInternalPlugins({
        config,
        largeInternalPluginsConfig: largeConfig,
        hostId: LOCAL_APP_SERVER_HOST_ID,
      }).then((result) => {
        if (result !== "unchanged") notifyPluginMarketplacesRefreshed();
      });
    }
  }, [config, isDownloadEnabled, largeConfig, isWaitingForStatsigUser]);

  return null;
}
