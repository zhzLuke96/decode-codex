// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for bundled plugin descriptor helpers.

import type {
  migrateBrowserUseLocalToBundled,
  migrateComputerUseLocalToBundled,
} from "../../local-to-bundled-migration";

export type EnvironmentLike =
  | NodeJS.ProcessEnv
  | Record<string, string | undefined>;

export type BuildFlavorValue =
  | "agent"
  | "dev"
  | "internal-alpha"
  | "nightly"
  | "prod"
  | "public-beta"
  | string;

export type BundledPluginAvailabilityFeatures = {
  computerUse: boolean;
  computerUseNodeRepl?: boolean;
  externalBrowserUseAllowed: boolean;
  inAppBrowserUseAllowed: boolean;
  multiBrowserTabs?: boolean;
  recordAndReplay: boolean;
  sites: boolean;
};

export type BundledPluginAvailabilityContext = {
  buildFlavor: BuildFlavorValue;
  env?: EnvironmentLike;
  features: BundledPluginAvailabilityFeatures;
  platform: NodeJS.Platform | string;
};

export type BundledPluginMigration =
  | typeof migrateBrowserUseLocalToBundled
  | typeof migrateComputerUseLocalToBundled;

export type BundledPluginDescriptor = {
  autoInstallOptOutKey?: string;
  installWhenMissing?: boolean;
  installWhenMissingRequiresOptIn?: boolean;
  isAvailable(context: BundledPluginAvailabilityContext): boolean;
  migrate?: BundledPluginMigration;
  name: string;
  syncInstallStateWithChromeExtension?: boolean;
};

export type BundledPluginInstallStateObservationInput = {
  autoInstallWhenMissing: boolean;
  chromeExtensionInstalled: boolean | null;
  chromeExtensionSyncManaged: boolean;
  eligibilityReason: string;
  installedAfter: boolean;
  installedBefore: boolean;
  pluginName: string;
  reconcileReason: string;
};

export type BundledPluginInstallStateObservation = {
  eligibilityReason: string;
  expectationReason:
    | "auto_install"
    | "chrome_extension_installed"
    | "chrome_extension_removed"
    | "installed_before"
    | "not_installed";
  expectedInstalled: boolean;
  installedAfter: boolean;
  installedBefore: boolean;
  pluginName: string;
  reconcileReason: string;
};
