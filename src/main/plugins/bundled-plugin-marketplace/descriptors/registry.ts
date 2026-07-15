// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Bundled plugin descriptor registry and availability filtering.

import {
  migrateBrowserUseLocalToBundled,
  migrateComputerUseLocalToBundled,
} from "../../local-to-bundled-migration";
import {
  BROWSER_BUNDLED_PLUGIN_NAME,
  CHROME_DEV_PLUGIN_NAME,
  CHROME_INTERNAL_PLUGIN_NAME,
  CHROME_PLUGIN_NAME,
  COMPUTER_USE_PLUGIN_NAME,
} from "../content-variants";
import {
  LATEX_PLUGIN_NAME,
  RECORD_AND_REPLAY_PLUGIN_NAME,
  SITE_CREATOR_PLUGIN_NAME,
  getBundledPluginAutoInstallOptOutKey,
  shouldUseChromeDevPlugin,
  shouldUseChromeInternalPlugin,
  shouldUsePublicChromePlugin,
} from "./constants";
import type {
  BundledPluginAvailabilityContext,
  BundledPluginDescriptor,
  BundledPluginMigration,
} from "./types";

export function createBundledPluginDescriptors({
  browserUseMigration = migrateBrowserUseLocalToBundled,
  computerUseMigration = migrateComputerUseLocalToBundled,
}: {
  browserUseMigration?: BundledPluginMigration;
  computerUseMigration?: BundledPluginMigration;
} = {}): BundledPluginDescriptor[] {
  return [
    {
      autoInstallOptOutKey: getBundledPluginAutoInstallOptOutKey(
        SITE_CREATOR_PLUGIN_NAME,
      ),
      installWhenMissing: true,
      isAvailable: ({ features }) => features.sites,
      name: SITE_CREATOR_PLUGIN_NAME,
    },
    {
      autoInstallOptOutKey: getBundledPluginAutoInstallOptOutKey(
        BROWSER_BUNDLED_PLUGIN_NAME,
      ),
      installWhenMissing: true,
      isAvailable: ({ features }) => features.inAppBrowserUseAllowed,
      migrate: browserUseMigration,
      name: BROWSER_BUNDLED_PLUGIN_NAME,
    },
    {
      isAvailable: ({ buildFlavor, env, features }) =>
        shouldUseChromeDevPlugin({ buildFlavor, env }) &&
        features.externalBrowserUseAllowed,
      name: CHROME_DEV_PLUGIN_NAME,
      syncInstallStateWithChromeExtension: true,
    },
    {
      isAvailable: ({ buildFlavor, env, features }) =>
        shouldUseChromeInternalPlugin({ buildFlavor, env }) &&
        features.externalBrowserUseAllowed,
      name: CHROME_INTERNAL_PLUGIN_NAME,
      syncInstallStateWithChromeExtension: true,
    },
    {
      isAvailable: ({ buildFlavor, features }) =>
        features.externalBrowserUseAllowed &&
        shouldUsePublicChromePlugin(buildFlavor),
      name: CHROME_PLUGIN_NAME,
      syncInstallStateWithChromeExtension: true,
    },
    {
      autoInstallOptOutKey: getBundledPluginAutoInstallOptOutKey(
        COMPUTER_USE_PLUGIN_NAME,
      ),
      installWhenMissing: true,
      installWhenMissingRequiresOptIn: true,
      isAvailable: ({ features, platform }) =>
        platform === "darwin" && features.computerUse,
      migrate: computerUseMigration,
      name: COMPUTER_USE_PLUGIN_NAME,
    },
    {
      autoInstallOptOutKey: getBundledPluginAutoInstallOptOutKey(
        COMPUTER_USE_PLUGIN_NAME,
      ),
      installWhenMissing: true,
      installWhenMissingRequiresOptIn: true,
      isAvailable: ({ features, platform }) =>
        platform === "win32" && features.computerUse,
      name: COMPUTER_USE_PLUGIN_NAME,
    },
    {
      isAvailable: ({ features, platform }) =>
        platform === "darwin" && features.recordAndReplay,
      name: RECORD_AND_REPLAY_PLUGIN_NAME,
    },
    {
      isAvailable: () => true,
      name: LATEX_PLUGIN_NAME,
    },
  ];
}

export const BUNDLED_PLUGIN_DESCRIPTORS = createBundledPluginDescriptors();

export function getAvailableBundledPluginDescriptors({
  descriptors = BUNDLED_PLUGIN_DESCRIPTORS,
  ...context
}: BundledPluginAvailabilityContext & {
  descriptors?: readonly BundledPluginDescriptor[];
}): BundledPluginDescriptor[] {
  return descriptors.filter((descriptor) => descriptor.isAvailable(context));
}

export function getBundledPluginNames(
  descriptors: readonly BundledPluginDescriptor[],
): string[] {
  return descriptors.map((descriptor) => descriptor.name);
}

export function getChromeExtensionSyncPluginNames(
  descriptors: readonly BundledPluginDescriptor[],
): string[] {
  return descriptors
    .filter(
      (descriptor) => descriptor.syncInstallStateWithChromeExtension === true,
    )
    .map((descriptor) => descriptor.name);
}
