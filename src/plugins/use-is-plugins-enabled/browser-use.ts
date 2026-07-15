// Restored from ref/webview/assets/use-is-plugins-enabled-Dn_J-WZf.js
// use-is-plugins-enabled-Dn_J-WZf chunk restored from the Codex webview bundle.
import { useGateValue } from "../../vendor/statsig-current-runtime";
import { useAppScopeValue } from "../../boundaries/app-scope";
import { generalSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import { browserSidebarAvailability } from "../../browser/browser-sidebar-availability";
import { useSettingValue } from "../../settings/setting-storage";
import { useExperimentalFeatureAvailability } from "./experimental-feature";
import {
  EXTERNAL_BROWSER_USE_FEATURE_NAME,
  EXTERNAL_BROWSER_USE_GATE,
  IN_APP_BROWSER_USE_FEATURE_NAME,
  IN_APP_BROWSER_USE_GATE,
  type BrowserUseAvailabilityOptions,
  type BrowserUseReason,
  type WindowType,
} from "./types";
function useExternalBrowserUseAvailability({
  hostId,
  windowType = "electron",
}: BrowserUseAvailabilityOptions) {
  const isExternalBrowserGateEnabled = useGateValue(EXTERNAL_BROWSER_USE_GATE);
  const externalBrowserFeature = useExperimentalFeatureAvailability({
    featureName: EXTERNAL_BROWSER_USE_FEATURE_NAME,
    hostId,
  });
  const isAvailable =
    windowType === "chrome-extension" ||
    (isExternalBrowserGateEnabled &&
      externalBrowserFeature.enabled &&
      !externalBrowserFeature.isLoading);
  return {
    allowed: isAvailable,
    available: isAvailable,
    isLoading:
      windowType === "chrome-extension"
        ? false
        : externalBrowserFeature.isLoading,
  };
}
function resolveInAppBrowserUseReason({
  isBrowserAgentGateEnabled,
  isBrowserSidebarEnabled,
  isBrowserUseEnabled,
  isLoading,
  runCodexInWsl,
  windowType,
}: {
  isBrowserAgentGateEnabled: boolean;
  isBrowserSidebarEnabled: boolean;
  isBrowserUseEnabled: boolean;
  isLoading: boolean;
  runCodexInWsl: boolean;
  windowType: WindowType;
}): BrowserUseReason {
  if (windowType === "chrome-extension") return "window-type-disabled";
  if (isLoading) return "loading";
  if (!isBrowserSidebarEnabled) return "browser-pane-disabled";
  if (!isBrowserAgentGateEnabled) return "statsig-disabled";
  if (!isBrowserUseEnabled) return "config-requirement-disabled";
  return runCodexInWsl ? "wsl-disabled" : "available";
}
function useInAppBrowserUseAvailability({ hostId }: { hostId: string }) {
  const isBrowserSidebarEnabled = useAppScopeValue(
    browserSidebarAvailability,
  ) as boolean;
  const isBrowserAgentGateEnabled = useGateValue(IN_APP_BROWSER_USE_GATE);
  const browserUseFeature = useExperimentalFeatureAvailability({
    featureName: IN_APP_BROWSER_USE_FEATURE_NAME,
    hostId,
  });
  const runCodexInWsl =
    useSettingValue(generalSettingDefinitions.runCodexInWsl) === true;
  const reason = resolveInAppBrowserUseReason({
    isBrowserAgentGateEnabled,
    isBrowserSidebarEnabled,
    isBrowserUseEnabled:
      browserUseFeature.enabled && !browserUseFeature.isLoading,
    isLoading: browserUseFeature.isLoading,
    runCodexInWsl,
    windowType: "electron",
  });
  const isAvailable = reason === "available";
  return {
    allowed: isAvailable,
    available: isAvailable,
    isLoading: reason === "loading",
    reason,
  };
}
export { useExternalBrowserUseAvailability, useInAppBrowserUseAvailability };
