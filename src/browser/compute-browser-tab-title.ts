// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Derives the display title and media/favicon metadata for a browser side-panel tab.
import {
  BrowserTabType,
  formatBrowserTabHostname,
} from "../boundaries/onboarding-commons-externals.facade";

const SIDEBAR_ATTACH_TOKEN_PREFIX =
  "about:blank#codex-browser-sidebar-attach-token=";

export type BrowserTabSnapshot = {
  tabType: unknown;
  url: string;
  title: string;
  faviconUrl: string | null;
  isAudible: boolean;
  isCapturingUserMedia: boolean;
};

export type ComputeBrowserTabTitleInput = {
  browserSnapshot: BrowserTabSnapshot | null | undefined;
  browserTabFallbackTitle: string;
  isBrowserUseActive: boolean;
  isBrowserUseTab: boolean;
};

export type BrowserTabTitleResult = {
  faviconUrl: string | null;
  isAudible: boolean;
  isCapturingUserMedia: boolean;
  isHighlighted: boolean;
  preserveExistingTitle: boolean;
  title: string;
};

export function computeBrowserTabTitle({
  browserSnapshot,
  browserTabFallbackTitle,
  isBrowserUseActive,
  isBrowserUseTab,
}: ComputeBrowserTabTitleInput): BrowserTabTitleResult {
  const isWebTab = browserSnapshot?.tabType === BrowserTabType.WEB;
  const isBlankBrowserUseTab =
    isBrowserUseTab &&
    isWebTab &&
    (browserSnapshot.url.length === 0 || browserSnapshot.url === "about:blank");
  const isSidebarAttachTab =
    isWebTab &&
    (browserSnapshot.url.startsWith(SIDEBAR_ATTACH_TOKEN_PREFIX) ||
      browserSnapshot.title.startsWith(SIDEBAR_ATTACH_TOKEN_PREFIX));
  const hostname =
    isWebTab && !isBlankBrowserUseTab && !isSidebarAttachTab
      ? formatBrowserTabHostname(browserSnapshot.url)
      : "";
  const trimmedTitle = isWebTab ? browserSnapshot.title.trim() : "";
  const titleIsPlaceholder =
    trimmedTitle.length === 0 ||
    trimmedTitle === "about:blank" ||
    trimmedTitle === browserTabFallbackTitle;
  const hasMeaningfulTitle =
    isWebTab &&
    !isBlankBrowserUseTab &&
    !isSidebarAttachTab &&
    trimmedTitle.length > 0;
  return {
    faviconUrl: isWebTab ? browserSnapshot.faviconUrl : null,
    isAudible: isWebTab && browserSnapshot.isAudible,
    isCapturingUserMedia: isWebTab && browserSnapshot.isCapturingUserMedia,
    isHighlighted: isBrowserUseActive,
    preserveExistingTitle: isSidebarAttachTab,
    title:
      hasMeaningfulTitle && !titleIsPlaceholder
        ? trimmedTitle
        : hostname || browserTabFallbackTitle,
  };
}
