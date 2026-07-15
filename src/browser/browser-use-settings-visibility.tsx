// Restored from ref/webview/assets/browser-use-settings-visibility-D4TmRWJy.js
// Browser settings visibility and browser profile import dialog entry points.
import React, { type ComponentType } from "react";
import { _appScopeA as useAppScopeQueryValue } from "../boundaries/app-scope";
import { Or as browserCapabilityQueryOptions } from "../boundaries/thread-context-inputs.facade";
import {
  browserAutofillAndPasswordsCapabilityName,
  browserDownloadsCapabilityName,
  browserExtensionsCapabilityName,
  browserPermissionsCapabilityName,
  browserWebViewEnhancementsCapabilityName,
} from "../boundaries/src-l0hb-mz-p";
import { openModalControllerModal } from "../ui/modal-controller-state";
import { useExperimentalFeatureAvailability } from "../plugins/use-is-plugins-enabled";
type BrowserProfileImportService = {
  importBrowserProfile?: unknown;
  listImportableBrowserProfiles?: unknown;
  [key: string]: unknown;
};
type BrowserProfileImportDialogProps = {
  service: BrowserProfileImportService | null | undefined;
};
type ModalStore = Parameters<typeof openModalControllerModal>[0];
type BrowserSettingVisibility = {
  enabled: boolean;
  isLoading: boolean;
};
type BrowserUseSettingsVisibility = {
  contactInfo: BrowserSettingVisibility;
  downloads: BrowserSettingVisibility;
  extensions: BrowserSettingVisibility;
  passwordManager: BrowserSettingVisibility;
  siteSettings: BrowserSettingVisibility;
};
type BrowserUseSettingsVisibilityOptions = {
  hostId: string;
};
type BrowserCapabilityQueryResult = {
  data?: boolean;
  isLoading: boolean;
};
const BrowserProfileImportDialogModal = React.lazy(async () => {
  const { BrowserProfileImportDialogModal } = await import(
    "../ui/browser-profile-import-dialog"
  );
  return {
    default:
      BrowserProfileImportDialogModal as ComponentType<BrowserProfileImportDialogProps>,
  };
});
function openBrowserProfileImportDialog(
  store: ModalStore,
  service: BrowserProfileImportService | null | undefined,
): boolean {
  if (service == null) return false;
  openModalControllerModal(store, BrowserProfileImportDialogModal, {
    service,
  });
  return true;
}
function useBrowserUseSettingsVisibility({
  hostId,
}: BrowserUseSettingsVisibilityOptions): BrowserUseSettingsVisibility {
  const inAppBrowserAvailability = useExperimentalFeatureAvailability({
    featureName: "in_app_browser",
    hostId,
  });
  const browserCapabilities = useBrowserCapabilityVisibility();
  return {
    contactInfo: resolveBrowserSettingVisibility({
      featureEnabled: browserCapabilities.contactInfo.enabled,
      inAppBrowser: inAppBrowserAvailability,
      isFeatureLoading: browserCapabilities.contactInfo.isLoading,
    }),
    downloads: resolveBrowserSettingVisibility({
      featureEnabled: browserCapabilities.downloads.enabled,
      inAppBrowser: inAppBrowserAvailability,
      isFeatureLoading: browserCapabilities.downloads.isLoading,
    }),
    extensions: resolveBrowserSettingVisibility({
      featureEnabled: browserCapabilities.extensions.enabled,
      inAppBrowser: inAppBrowserAvailability,
      isFeatureLoading: browserCapabilities.extensions.isLoading,
    }),
    passwordManager: resolveBrowserSettingVisibility({
      featureEnabled: browserCapabilities.passwordManager.enabled,
      inAppBrowser: inAppBrowserAvailability,
      isFeatureLoading: browserCapabilities.passwordManager.isLoading,
    }),
    siteSettings: resolveBrowserSettingVisibility({
      featureEnabled: browserCapabilities.siteSettings.enabled,
      inAppBrowser: inAppBrowserAvailability,
      isFeatureLoading: browserCapabilities.siteSettings.isLoading,
    }),
  };
}
function useBrowserCapabilityVisibility(): BrowserUseSettingsVisibility {
  const webViewEnhancements = useBrowserCapability(
    browserWebViewEnhancementsCapabilityName,
  );
  const extensions = useBrowserCapability(browserExtensionsCapabilityName);
  const downloads = useBrowserCapability(browserDownloadsCapabilityName);
  const autofillAndPasswords = useBrowserCapability(
    browserAutofillAndPasswordsCapabilityName,
  );
  const permissions = useBrowserCapability(browserPermissionsCapabilityName);
  const autofillVisibility = combineBrowserCapabilities(
    webViewEnhancements,
    autofillAndPasswords,
  );
  return {
    contactInfo: autofillVisibility,
    downloads: {
      enabled: downloads.data === true,
      isLoading: downloads.isLoading,
    },
    extensions: combineBrowserCapabilities(webViewEnhancements, extensions),
    passwordManager: autofillVisibility,
    siteSettings: combineBrowserCapabilities(webViewEnhancements, permissions),
  };
}
function useBrowserCapability(
  capabilityName: string,
): BrowserCapabilityQueryResult {
  return useAppScopeQueryValue(
    browserCapabilityQueryOptions,
    capabilityName,
  ) as BrowserCapabilityQueryResult;
}
function combineBrowserCapabilities(
  first: BrowserCapabilityQueryResult,
  second: BrowserCapabilityQueryResult,
): BrowserSettingVisibility {
  return {
    enabled: first.data === true && second.data === true,
    isLoading: first.isLoading || second.isLoading,
  };
}
function resolveBrowserSettingVisibility({
  featureEnabled,
  inAppBrowser,
  isFeatureLoading,
}: {
  featureEnabled: boolean;
  inAppBrowser: BrowserSettingVisibility;
  isFeatureLoading: boolean;
}): BrowserSettingVisibility {
  return {
    enabled: inAppBrowser.enabled && !inAppBrowser.isLoading && featureEnabled,
    isLoading: inAppBrowser.isLoading || isFeatureLoading,
  };
}
export { openBrowserProfileImportDialog, useBrowserUseSettingsVisibility };

export function initBrowserUseSettingsVisibilityChunk(): void {
  void useBrowserUseSettingsVisibility;
}
