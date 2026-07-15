// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Browser settings availability, Chromium internal page ids, and menu navigation helpers.
import React from "react";

import { appScopeS } from "../boundaries/app-scope";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import { useNavigate as useRouterNavigate } from "../conversations/local-conversation-route-runtime";
import { ArrowRotateCcwIcon } from "../icons/arrow-rotate-ccw-icon";
import { useInAppBrowserUseAvailability } from "../plugins/use-is-plugins-enabled";
import {
  CHROME_CONTACT_INFO_URL,
  CHROME_EXTENSIONS_URL,
  CHROME_PASSWORDS_URL,
} from "./browser-use-settings/chrome-settings-runtime.facade";
import { browserHostIdAtom } from "./browser-tab-runtime";

export const passwordManagerChromiumPageId = CHROME_PASSWORDS_URL;
export const contactInfoChromiumPageId = CHROME_CONTACT_INFO_URL;
export const historyChromiumPageId = "chrome://history/";
export const extensionsChromiumPageId = CHROME_EXTENSIONS_URL;

export const ResetZoomIcon = ArrowRotateCcwIcon;

type BrowserSettingsFeatureAvailability = {
  enabled: boolean;
  isLoading: boolean;
};

export type BrowserSettingsAvailability = {
  contactInfo: BrowserSettingsFeatureAvailability;
  downloads: BrowserSettingsFeatureAvailability;
  extensions: BrowserSettingsFeatureAvailability;
  history: BrowserSettingsFeatureAvailability;
  passwordManager: BrowserSettingsFeatureAvailability;
  siteSettings: BrowserSettingsFeatureAvailability;
};

type InAppBrowserAvailability = {
  available: boolean;
  isLoading: boolean;
};

const enabledFeature: BrowserSettingsFeatureAvailability = {
  enabled: true,
  isLoading: false,
};

const baseFeatureAvailability = {
  autofillAndPasswords: enabledFeature,
  downloads: enabledFeature,
  extensions: enabledFeature,
  history: enabledFeature,
  siteSettings: enabledFeature,
};

function mergeFeatureAvailability({
  feature,
  inAppBrowser,
}: {
  feature: BrowserSettingsFeatureAvailability;
  inAppBrowser: InAppBrowserAvailability;
}): BrowserSettingsFeatureAvailability {
  return {
    enabled:
      inAppBrowser.available && !inAppBrowser.isLoading && feature.enabled,
    isLoading: inAppBrowser.isLoading || feature.isLoading,
  };
}

export function useSelectedBrowserHostId(): { selectedHostId: string } {
  const selectedHostId = appScopeS<string | null>(browserHostIdAtom);
  return React.useMemo(
    () => ({ selectedHostId: selectedHostId ?? LOCAL_HOST_ID }),
    [selectedHostId],
  );
}

export function useBrowserSettingsAvailability({
  hostId,
}: {
  hostId?: string | null;
}): BrowserSettingsAvailability {
  const inAppBrowserUseAvailability = useInAppBrowserUseAvailability({
    hostId: hostId ?? LOCAL_HOST_ID,
  });
  const inAppBrowser = React.useMemo(
    () => ({
      available: inAppBrowserUseAvailability.available,
      isLoading: inAppBrowserUseAvailability.isLoading,
    }),
    [
      inAppBrowserUseAvailability.available,
      inAppBrowserUseAvailability.isLoading,
    ],
  );

  return React.useMemo(() => {
    const autofillAndPasswords = mergeFeatureAvailability({
      feature: baseFeatureAvailability.autofillAndPasswords,
      inAppBrowser,
    });
    return {
      contactInfo: autofillAndPasswords,
      downloads: mergeFeatureAvailability({
        feature: baseFeatureAvailability.downloads,
        inAppBrowser,
      }),
      extensions: mergeFeatureAvailability({
        feature: baseFeatureAvailability.extensions,
        inAppBrowser,
      }),
      history: mergeFeatureAvailability({
        feature: baseFeatureAvailability.history,
        inAppBrowser,
      }),
      passwordManager: autofillAndPasswords,
      siteSettings: mergeFeatureAvailability({
        feature: baseFeatureAvailability.siteSettings,
        inAppBrowser,
      }),
    };
  }, [inAppBrowser]);
}

export { useRouterNavigate };
