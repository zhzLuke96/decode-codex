// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Install-state observation payloads for bundled plugin reconciliation.

import type {
  BundledPluginInstallStateObservation,
  BundledPluginInstallStateObservationInput,
} from "./types";

export function createBundledPluginInstallStateObservation({
  autoInstallWhenMissing,
  chromeExtensionInstalled,
  chromeExtensionSyncManaged,
  eligibilityReason,
  installedAfter,
  installedBefore,
  pluginName,
  reconcileReason,
}: BundledPluginInstallStateObservationInput): BundledPluginInstallStateObservation {
  const expectationReason =
    chromeExtensionInstalled === false && chromeExtensionSyncManaged
      ? "chrome_extension_removed"
      : installedBefore
        ? "installed_before"
        : chromeExtensionInstalled === true
          ? "chrome_extension_installed"
          : autoInstallWhenMissing
            ? "auto_install"
            : "not_installed";

  return {
    eligibilityReason,
    expectationReason,
    expectedInstalled:
      expectationReason === "installed_before" ||
      expectationReason === "chrome_extension_installed" ||
      expectationReason === "auto_install",
    installedAfter,
    installedBefore,
    pluginName,
    reconcileReason,
  };
}
