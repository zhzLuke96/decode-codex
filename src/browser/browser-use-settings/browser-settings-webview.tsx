// Restored from ref/webview/assets/browser-use-settings-Ct3jD7gG.js
// Embedded Chromium settings webview and Browser Use settings route helpers.

import React from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { useLocation, useNavigate, useParams } from "../../vendor/react-router";
import { BackForwardNavigationButtons } from "../../ui/back-forward-navigation-buttons";
import {
  BROWSER_CONTACT_INFO_SETTINGS_PATH,
  BROWSER_DOWNLOADS_SETTINGS_PATH,
  BROWSER_EXTENSIONS_SETTINGS_PATH,
  BROWSER_PASSWORD_SETTINGS_PATH,
  BROWSER_SITE_SETTINGS_ROUTE_PATTERN,
  CHROME_CONTACT_INFO_URL,
  CHROME_COOKIES_URL,
  CHROME_DOWNLOADS_URL,
  CHROME_EXTENSIONS_URL,
  CHROME_PASSWORD_MANAGER_URL,
  CHROME_PASSWORDS_URL,
  CHROME_PROTOCOL_HANDLERS_URL,
  CHROME_SITE_SETTINGS_URL,
  CONTACT_INFO_PARTITION,
  CONTACT_INFO_ROOT_URLS,
  EXTENSION_SETTINGS_PARTITION,
  getChromeSiteDetailsUrlForSite,
  HISTORY_SETTINGS_PARTITION,
  PASSWORD_MANAGER_PARTITION,
  SITE_SETTINGS_PARTITION,
} from "./chrome-settings-runtime.facade";
import type {
  BrowserSettingsHistoryState,
  BrowserSettingsKind,
  BrowserSettingsNavigationState,
  BrowserSettingsPageTitle,
  BrowserSettingsRouteConfigs,
  BrowserSettingsWebviewElement,
} from "./types";

const CHROME_HISTORY_URL = "chrome://history/";
const BROWSER_HISTORY_SETTINGS_PATH = "/settings/browser-use/history";
const BROWSER_SITE_SETTINGS_PATH = BROWSER_SITE_SETTINGS_ROUTE_PATTERN.replace(
  "/*",
  "",
);

type ElectronBridge = {
  sendMessageFromView?: (message: Record<string, unknown>) => Promise<unknown>;
};

declare global {
  interface Window {
    electronBridge?: ElectronBridge;
  }
}

export const browserSettingsRouteConfigs: BrowserSettingsRouteConfigs = {
  contactInfo: {
    breadcrumbLabel: (
      <FormattedMessage
        id="settings.browserUse.contactInfo.breadcrumb"
        defaultMessage="Contact info"
        description="Contact info breadcrumb label for embedded browser settings"
      />
    ),
    path: BROWSER_CONTACT_INFO_SETTINGS_PATH,
    partition: CONTACT_INFO_PARTITION,
    rootUrls: [...CONTACT_INFO_ROOT_URLS],
    url: CHROME_CONTACT_INFO_URL,
    webviewLabel: "Contact info settings",
  },
  downloads: {
    breadcrumbLabel: (
      <FormattedMessage
        id="settings.browserUse.downloads.breadcrumb"
        defaultMessage="Downloads"
        description="Downloads breadcrumb label for embedded browser settings"
      />
    ),
    path: BROWSER_DOWNLOADS_SETTINGS_PATH,
    partition: HISTORY_SETTINGS_PARTITION,
    rootUrls: [CHROME_DOWNLOADS_URL],
    url: CHROME_DOWNLOADS_URL,
    webviewLabel: "Downloads",
  },
  extensions: {
    breadcrumbLabel: (
      <FormattedMessage
        id="settings.browserUse.extensions.breadcrumb"
        defaultMessage="Extensions"
        description="Extensions breadcrumb label for embedded browser settings"
      />
    ),
    path: BROWSER_EXTENSIONS_SETTINGS_PATH,
    partition: EXTENSION_SETTINGS_PARTITION,
    rootUrls: [CHROME_EXTENSIONS_URL],
    url: CHROME_EXTENSIONS_URL,
    webviewLabel: "Extensions settings",
  },
  history: {
    breadcrumbLabel: (
      <FormattedMessage
        id="settings.browserUse.history.breadcrumb"
        defaultMessage="History"
        description="History breadcrumb label for embedded browser history"
      />
    ),
    path: BROWSER_HISTORY_SETTINGS_PATH,
    partition: HISTORY_SETTINGS_PARTITION,
    rootUrls: [CHROME_HISTORY_URL],
    url: CHROME_HISTORY_URL,
    webviewLabel: "History",
  },
  passwordManager: {
    breadcrumbLabel: (
      <FormattedMessage
        id="settings.browserUse.passwordManager.breadcrumb"
        defaultMessage="Password manager"
        description="Password manager breadcrumb label for embedded browser settings"
      />
    ),
    path: BROWSER_PASSWORD_SETTINGS_PATH,
    partition: PASSWORD_MANAGER_PARTITION,
    rootUrls: [CHROME_PASSWORD_MANAGER_URL, CHROME_PASSWORDS_URL],
    url: CHROME_PASSWORD_MANAGER_URL,
    webviewLabel: "Password manager settings",
  },
  siteSettings: {
    breadcrumbLabel: (
      <FormattedMessage
        id="settings.browserUse.siteSettings.breadcrumb"
        defaultMessage="Site settings"
        description="Site settings breadcrumb label for embedded browser settings"
      />
    ),
    path: BROWSER_SITE_SETTINGS_PATH,
    partition: SITE_SETTINGS_PARTITION,
    rootUrls: [CHROME_SITE_SETTINGS_URL],
    url: CHROME_SITE_SETTINGS_URL,
    webviewLabel: "Site settings",
  },
};

function ContactInfoBrowserSettingsWebview() {
  return <BrowserSettingsWebview kind="contactInfo" />;
}

function DownloadsBrowserSettingsWebview() {
  return <BrowserSettingsWebview kind="downloads" />;
}

function ExtensionsBrowserSettingsWebview() {
  return <BrowserSettingsWebview kind="extensions" />;
}

function HistoryBrowserSettingsWebview() {
  return <BrowserSettingsWebview kind="history" />;
}

function PasswordManagerBrowserSettingsWebview() {
  return <BrowserSettingsWebview kind="passwordManager" />;
}

function SiteSettingsBrowserSettingsWebview() {
  return <BrowserSettingsWebview kind="siteSettings" />;
}

export function BrowserSettingsWebview({
  kind,
}: {
  kind: BrowserSettingsKind;
}) {
  const intl = useIntl();
  const location = useLocation();
  const navigate = useNavigate();
  const routeParams = useParams();
  const hostRef = React.useRef<HTMLDivElement | null>(null);
  const webviewRef = React.useRef<BrowserSettingsWebviewElement | null>(null);
  const historyRef = React.useRef<BrowserSettingsHistoryState | null>(null);
  const expectedHistoryIndexRef = React.useRef<number | null>(null);
  const [navigationState, setNavigationState] =
    React.useState<BrowserSettingsNavigationState | null>(null);
  const [pageTitle, setPageTitle] =
    React.useState<BrowserSettingsPageTitle | null>(null);
  const config = browserSettingsRouteConfigs[kind];
  const initialUrl = resolveInitialBrowserSettingsUrl({
    kind,
    search: location.search,
    siteSettingsRoutePath: routeParams["*"] ?? null,
  });
  const mountUrl = getBrowserSettingsMountUrl(kind, initialUrl);
  const mountedNavigationState =
    navigationState?.initialUrl === initialUrl ? navigationState : null;
  const currentUrl = mountedNavigationState?.url ?? initialUrl;
  const currentPageTitle =
    pageTitle?.url === currentUrl ? pageTitle.title : null;
  const browserSettingsFallbackRoute = getBrowserSettingsFallbackRoute(
    kind,
    currentUrl,
  );
  const backLabel = intl.formatMessage({
    id: "settings.browserUse.browserSettings.navigation.back",
    defaultMessage: "Back",
    description: "Accessible label for embedded browser settings back button",
  });
  const forwardLabel = intl.formatMessage({
    id: "settings.browserUse.browserSettings.navigation.forward",
    defaultMessage: "Forward",
    description:
      "Accessible label for embedded browser settings forward button",
  });

  React.useLayoutEffect(() => {
    const hostElement = hostRef.current;
    if (hostElement == null) return;
    const mountId = crypto.randomUUID();
    let didMountInBridge = false;
    let cancelled = false;
    let webview: BrowserSettingsWebviewElement | null = null;
    let deferredTargetUrl = mountUrl === initialUrl ? null : initialUrl;
    const navigationEvents = [
      "did-navigate",
      "did-navigate-in-page",
      "did-stop-loading",
    ];
    const unmountFromBridge = () => {
      if (!didMountInBridge) return;
      didMountInBridge = false;
      window.electronBridge?.sendMessageFromView?.({
        mountId,
        type: "browser-settings-webview-unmounted",
      });
    };
    const syncTitle = (url: string) => {
      const activeWebview = webview;
      if (activeWebview == null) return;
      readBrowserSettingsPageTitle(activeWebview).then((title) => {
        if (
          !cancelled &&
          webview === activeWebview &&
          getWebviewUrl(activeWebview, initialUrl) === url
        ) {
          setPageTitle(title == null ? null : { title, url });
        }
      });
    };
    const syncNavigationState = () => {
      if (webview == null || cancelled) return;
      const currentWebviewState = getWebviewNavigationState(
        webview,
        initialUrl,
      );
      const targetState =
        deferredTargetUrl != null && currentWebviewState.url === mountUrl
          ? {
              ...currentWebviewState,
              url: deferredTargetUrl,
            }
          : currentWebviewState;
      const expectedHistoryIndex = expectedHistoryIndexRef.current;
      const nextHistory = mergeBrowserSettingsHistory(
        historyRef.current ?? createBrowserSettingsHistory(kind, initialUrl),
        targetState.url,
        expectedHistoryIndex,
      );
      if (
        expectedHistoryIndex != null &&
        nextHistory.index === expectedHistoryIndex &&
        nextHistory.entries[expectedHistoryIndex] === targetState.url
      ) {
        expectedHistoryIndexRef.current = null;
      }
      historyRef.current = nextHistory;
      const nextState = applyBrowserSettingsHistory(targetState, nextHistory);
      syncTitle(nextState.url);
      setNavigationState((previousState) =>
        previousState != null &&
        previousState.initialUrl === nextState.initialUrl &&
        previousState.url === nextState.url &&
        previousState.canGoBack === nextState.canGoBack &&
        previousState.canGoForward === nextState.canGoForward
          ? previousState
          : nextState,
      );
    };
    const handleDomReady = () => {
      syncNavigationState();
      if (webview == null || deferredTargetUrl == null) return;
      const targetUrl = deferredTargetUrl;
      deferredTargetUrl = null;
      navigateBrowserSettingsWebview({
        sourceUrl: mountUrl,
        targetUrl,
        webview,
      });
    };
    const mount = async () => {
      try {
        await window.electronBridge?.sendMessageFromView?.({
          mountId,
          themeVariant: document.documentElement.dataset.theme ?? null,
          type: "browser-settings-webview-mounted",
        });
        didMountInBridge = true;
        if (cancelled) {
          unmountFromBridge();
          return;
        }
        webview = document.createElement(
          "webview",
        ) as BrowserSettingsWebviewElement;
        webview.className =
          "no-drag h-full w-full bg-token-main-surface-primary";
        webview.setAttribute("aria-label", config.webviewLabel);
        webview.setAttribute("partition", config.partition);
        webview.setAttribute("src", mountUrl);
        webview.addEventListener("dom-ready", handleDomReady);
        for (const eventName of navigationEvents) {
          webview.addEventListener(eventName, syncNavigationState);
        }
        webviewRef.current = webview;
        hostElement.append(webview);
        syncNavigationState();
      } catch {
        setNavigationState(null);
      }
    };
    historyRef.current = createBrowserSettingsHistory(kind, initialUrl);
    expectedHistoryIndexRef.current = null;
    mount();
    return () => {
      cancelled = true;
      if (webviewRef.current === webview) {
        webviewRef.current = null;
        historyRef.current = null;
        expectedHistoryIndexRef.current = null;
      }
      webview?.removeEventListener("dom-ready", handleDomReady);
      for (const eventName of navigationEvents) {
        webview?.removeEventListener(eventName, syncNavigationState);
      }
      webview?.remove();
      destroyWebview(webview);
      unmountFromBridge();
    };
  }, [config.partition, config.webviewLabel, initialUrl, kind, mountUrl]);

  React.useLayoutEffect(() => {
    window.electronBridge?.sendMessageFromView?.({
      themeVariant: document.documentElement.dataset.theme ?? null,
      type: "browser-settings-webview-theme-changed",
    });
  }, [kind]);

  const goToHistoryIndex = React.useCallback(
    (nextIndex: number) => {
      const webview = webviewRef.current;
      const history = historyRef.current;
      if (webview == null || history == null) return false;
      const targetUrl = history.entries[nextIndex];
      const sourceUrl = history.entries[history.index];
      if (targetUrl == null) return false;
      const nextHistory = {
        ...history,
        index: nextIndex,
      };
      historyRef.current = nextHistory;
      expectedHistoryIndexRef.current = nextIndex;
      setNavigationState(
        applyBrowserSettingsHistory(
          {
            ...getWebviewNavigationState(webview, initialUrl),
            url: targetUrl,
          },
          nextHistory,
        ),
      );
      navigateBrowserSettingsWebview({
        sourceUrl,
        targetUrl,
        webview,
      });
      return true;
    },
    [initialUrl],
  );
  const stepHistory = React.useCallback(
    (offset: number) => {
      const history = historyRef.current;
      if (history == null) return false;
      return goToHistoryIndex(history.index + offset);
    },
    [goToHistoryIndex],
  );
  const handleCurrentSectionClick = React.useCallback(() => {
    const config = browserSettingsRouteConfigs[kind];
    if (
      kind === "siteSettings" &&
      location.pathname === config.path &&
      location.search.length === 0 &&
      parseChromeSiteSettingsPath(currentUrl) != null &&
      goToHistoryIndex(0)
    ) {
      return;
    }
    navigate(config.path);
  }, [
    currentUrl,
    goToHistoryIndex,
    kind,
    location.pathname,
    location.search,
    navigate,
  ]);
  const handleBack = React.useCallback(() => {
    const webview = webviewRef.current;
    if (
      !(historyRef.current?.preferHistoryControls === true && stepHistory(-1))
    ) {
      if (webview != null && canWebviewGoBack(webview)) {
        webview.goBack?.();
        return;
      }
      stepHistory(-1) ||
        (browserSettingsFallbackRoute != null &&
          navigate(browserSettingsFallbackRoute));
    }
  }, [browserSettingsFallbackRoute, navigate, stepHistory]);
  const handleForward = React.useCallback(() => {
    const webview = webviewRef.current;
    if (webview != null && canWebviewGoForward(webview)) {
      webview.goForward?.();
      return;
    }
    (historyRef.current?.preferHistoryControls === true && stepHistory(1)) ||
      stepHistory(1);
  }, [stepHistory]);
  const canGoBack =
    mountedNavigationState?.canGoBack === true ||
    browserSettingsFallbackRoute != null;
  const canGoForward = mountedNavigationState?.canGoForward ?? false;
  return (
    <div className="main-surface flex h-full min-h-0 flex-col overflow-hidden">
      <div className="relative flex h-toolbar shrink-0 items-center gap-2 border-b border-token-border px-2">
        <div aria-hidden={true} className="draggable absolute inset-0" />
        <div className="no-drag relative z-10 flex items-center gap-px">
          <BackForwardNavigationButtons
            backLabel={backLabel}
            canGoBack={canGoBack}
            canGoForward={canGoForward}
            forwardLabel={forwardLabel}
            onBack={handleBack}
            onForward={handleForward}
          />
        </div>
        <BrowserSettingsBreadcrumb
          currentPageTitle={currentPageTitle}
          currentUrl={currentUrl}
          kind={kind}
          onCurrentSectionClick={handleCurrentSectionClick}
        />
      </div>
      <div
        ref={hostRef}
        className="no-drag min-h-0 w-full flex-1 bg-token-main-surface-primary"
      />
    </div>
  );
}

function BrowserSettingsBreadcrumb({
  currentPageTitle,
  currentUrl,
  kind,
  onCurrentSectionClick,
}: {
  currentPageTitle: string | null;
  currentUrl: string;
  kind: BrowserSettingsKind;
  onCurrentSectionClick: () => void;
}) {
  const intl = useIntl();
  const navigate = useNavigate();
  const config = browserSettingsRouteConfigs[kind];
  const trailingTitle = getBrowserSettingsBreadcrumbTitle({
    currentPageTitle,
    currentUrl,
    kind,
  });
  const ariaLabel = intl.formatMessage({
    id: "settings.browserUse.browserSettings.breadcrumb.ariaLabel",
    defaultMessage: "Breadcrumb",
    description: "Accessible label for embedded browser settings breadcrumbs",
  });
  return (
    <nav
      aria-label={ariaLabel}
      className="no-drag pointer-events-auto relative z-10 flex items-center gap-1 text-sm font-medium text-token-text-secondary"
    >
      <BreadcrumbButton onClick={() => navigate("/settings/general-settings")}>
        <FormattedMessage
          id="settings.browserUse.browserSettings.breadcrumb.settings"
          defaultMessage="Settings"
          description="Settings breadcrumb label for embedded browser settings"
        />
      </BreadcrumbButton>
      <BreadcrumbSeparator />
      <BreadcrumbButton onClick={() => navigate("/settings/browser-use")}>
        <FormattedMessage
          id="settings.browserUse.browserSettings.breadcrumb.browser"
          defaultMessage="Browser"
          description="Browser breadcrumb label for embedded browser settings"
        />
      </BreadcrumbButton>
      <BreadcrumbSeparator />
      {trailingTitle == null ? (
        <span className="text-token-text-primary">
          {config.breadcrumbLabel}
        </span>
      ) : (
        <>
          <BreadcrumbButton onClick={onCurrentSectionClick}>
            {config.breadcrumbLabel}
          </BreadcrumbButton>
          <BreadcrumbSeparator />
          <span className="text-token-text-primary">{trailingTitle}</span>
        </>
      )}
    </nav>
  );
}

function BreadcrumbButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="cursor-interaction rounded-sm hover:text-token-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function BreadcrumbSeparator() {
  return <span className="text-token-text-secondary">/</span>;
}

function getBrowserSettingsBreadcrumbTitle({
  currentPageTitle,
  currentUrl,
  kind,
}: {
  currentPageTitle: string | null;
  currentUrl: string;
  kind: BrowserSettingsKind;
}) {
  const config = browserSettingsRouteConfigs[kind];
  if (isRootBrowserSettingsUrl(config.rootUrls, currentUrl)) return null;
  return kind === "siteSettings"
    ? (getSiteSettingsBreadcrumbTitle(currentUrl, currentPageTitle) ??
        currentPageTitle)
    : currentPageTitle;
}

function resolveInitialBrowserSettingsUrl({
  kind,
  search,
  siteSettingsRoutePath,
}: {
  kind: BrowserSettingsKind;
  search: string;
  siteSettingsRoutePath: string | null;
}) {
  const config = browserSettingsRouteConfigs[kind];
  if (kind !== "siteSettings") return config.url;
  return (
    getChromeSiteDetailsUrlForSite(
      new URLSearchParams(search).get("site") ?? undefined,
    ) ??
    resolveSiteSettingsSubroute(siteSettingsRoutePath) ??
    config.url
  );
}

function resolveSiteSettingsSubroute(routePath: string | null) {
  if (routePath == null || routePath.length === 0) return null;
  if (routePath === "cookies" || routePath === "third-party-cookies") {
    return CHROME_COOKIES_URL;
  }
  if (routePath === "handlers" || routePath === "protocol-handlers") {
    return CHROME_PROTOCOL_HANDLERS_URL;
  }
  return /^[A-Za-z0-9-]+$/.test(routePath)
    ? `${CHROME_SITE_SETTINGS_URL}/${routePath}`
    : null;
}

function getBrowserSettingsMountUrl(
  kind: BrowserSettingsKind,
  targetUrl: string,
) {
  return kind === "siteSettings" &&
    parseChromeSiteSettingsPath(targetUrl) === "siteDetails"
    ? CHROME_SITE_SETTINGS_URL
    : targetUrl;
}

function createBrowserSettingsHistory(
  kind: BrowserSettingsKind,
  url: string,
): BrowserSettingsHistoryState {
  if (kind !== "siteSettings" || parseChromeSiteSettingsPath(url) == null) {
    return {
      entries: [url],
      index: 0,
      preferHistoryControls: kind === "siteSettings",
    };
  }
  return {
    entries: [CHROME_SITE_SETTINGS_URL, url],
    index: 1,
    preferHistoryControls: true,
  };
}

function mergeBrowserSettingsHistory(
  history: BrowserSettingsHistoryState,
  url: string,
  expectedIndex: number | null,
): BrowserSettingsHistoryState {
  if (expectedIndex != null && history.entries[expectedIndex] === url) {
    return {
      ...history,
      index: expectedIndex,
    };
  }
  if (history.entries[history.index] === url) return history;
  const existingIndex = history.entries.indexOf(url);
  if (existingIndex !== -1) {
    return {
      ...history,
      index: existingIndex,
    };
  }
  return {
    entries: [...history.entries.slice(0, history.index + 1), url],
    index: history.index + 1,
    preferHistoryControls: history.preferHistoryControls,
  };
}

function applyBrowserSettingsHistory(
  state: BrowserSettingsNavigationState,
  history: BrowserSettingsHistoryState,
): BrowserSettingsNavigationState {
  if (history.preferHistoryControls) {
    return {
      ...state,
      canGoBack: history.index > 0,
      canGoForward: history.index < history.entries.length - 1,
    };
  }
  return {
    ...state,
    canGoBack: state.canGoBack || history.index > 0,
    canGoForward:
      state.canGoForward || history.index < history.entries.length - 1,
  };
}

function getBrowserSettingsFallbackRoute(
  kind: BrowserSettingsKind,
  url: string,
) {
  if (kind !== "siteSettings") return null;
  if (parseChromeSiteSettingsPath(url) == null) {
    return normalizeUrl(url) === normalizeUrl(CHROME_SITE_SETTINGS_URL)
      ? "/settings/browser-use"
      : null;
  }
  return BROWSER_SITE_SETTINGS_PATH;
}

function parseChromeSiteSettingsPath(url: string) {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.protocol !== "chrome:" || parsedUrl.host !== "settings") {
      return null;
    }
    const [section, detail] = parsedUrl.pathname
      .split("/")
      .filter((part) => part.length > 0);
    if (section === "cookies") return "cookies";
    if (section === "handlers") return "handlers";
    if (section === "content") return detail ?? null;
    return null;
  } catch {
    return null;
  }
}

function getSiteSettingsBreadcrumbTitle(
  url: string,
  currentPageTitle: string | null,
) {
  const siteSettingsPath = parseChromeSiteSettingsPath(url);
  if (siteSettingsPath === "siteDetails") {
    return (
      currentPageTitle ??
      getSiteDetailsHost(url) ?? (
        <FormattedMessage
          id="settings.browserUse.browserSettings.breadcrumb.siteSettings"
          defaultMessage="Site settings"
          description="Site settings breadcrumb label for embedded browser settings"
        />
      )
    );
  }
  if (siteSettingsPath == null) return null;
  return currentPageTitle ?? getSiteSettingsPathLabel(siteSettingsPath);
}

function getSiteSettingsPathLabel(siteSettingsPath: string) {
  switch (siteSettingsPath) {
    case "ads":
      return "Intrusive ads";
    case "automaticDownloads":
      return "Automatic downloads";
    case "backgroundSync":
      return "Background sync";
    case "camera":
      return "Camera";
    case "clipboard":
      return "Clipboard";
    case "cookies":
      return "Third-party cookies";
    case "embeddedContent":
    case "federatedIdentityApi":
      return "Embedded content";
    case "geolocation":
    case "location":
      return "Location";
    case "images":
      return "Images";
    case "javascript":
      return "JavaScript";
    case "microphone":
      return "Microphone";
    case "notifications":
      return "Notifications";
    case "popups":
      return "Pop-ups and redirects";
    case "handlers":
      return "Protocol handlers";
    case "protectedContent":
      return "Protected content IDs";
    case "sound":
      return "Sound";
    case "usbDevices":
      return "USB devices";
    default:
      return startCase(siteSettingsPath);
  }
}

function startCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((part, index) =>
      index === 0
        ? `${part.charAt(0).toUpperCase()}${part.slice(1)}`
        : part.toLowerCase(),
    )
    .join(" ");
}

function getSiteDetailsHost(url: string) {
  try {
    const site = new URL(url).searchParams.get("site");
    return site == null ? null : new URL(site).host;
  } catch {
    return null;
  }
}

function isRootBrowserSettingsUrl(rootUrls: string[], url: string) {
  return rootUrls.some(
    (rootUrl) => normalizeUrl(rootUrl) === normalizeUrl(url),
  );
}

function normalizeUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function destroyWebview(webview: BrowserSettingsWebviewElement | null) {
  if (typeof webview?.destroy === "function") webview.destroy();
}

function canWebviewGoBack(webview: BrowserSettingsWebviewElement) {
  try {
    return webview.canGoBack?.() === true;
  } catch {
    return false;
  }
}

function canWebviewGoForward(webview: BrowserSettingsWebviewElement) {
  try {
    return webview.canGoForward?.() === true;
  } catch {
    return false;
  }
}

function getWebviewUrl(
  webview: BrowserSettingsWebviewElement,
  fallbackUrl: string,
) {
  try {
    return webview.getURL?.() || webview.getAttribute("src") || fallbackUrl;
  } catch {
    return webview.getAttribute("src") || fallbackUrl;
  }
}

function getWebviewNavigationState(
  webview: BrowserSettingsWebviewElement,
  initialUrl: string,
): BrowserSettingsNavigationState {
  return {
    canGoBack: canWebviewGoBack(webview),
    canGoForward: canWebviewGoForward(webview),
    initialUrl,
    url: getWebviewUrl(webview, initialUrl),
  };
}

async function readBrowserSettingsPageTitle(
  webview: BrowserSettingsWebviewElement,
) {
  if (webview.executeJavaScript == null) return null;
  try {
    return cleanTitle(
      await webview.executeJavaScript(`
        (() => {
          const cleanTitle = (title) => {
            const text = title == null
              ? ""
              : String(title).replace(/\\s+/g, " ").trim();
            return text.length === 0 ? null : text;
          };
          const isVisible = (element) => {
            const style = globalThis.getComputedStyle?.(element);
            if (
              style != null &&
              (style.display === "none" || style.visibility === "hidden")
            ) {
              return false;
            }
            const rect = element.getBoundingClientRect?.();
            return rect == null || rect.width > 0 || rect.height > 0;
          };
          const getCandidateTitle = (element) => {
            if (!isVisible(element)) return null;
            if (element.tagName?.toLowerCase() === "settings-subpage") {
              return cleanTitle(element.getAttribute("page-title"));
            }
            return cleanTitle(element.textContent);
          };
          const visited = new Set();
          const findBrowserSettingsPageTitle = (root) => {
            if (root == null || visited.has(root)) return null;
            visited.add(root);
            const candidates = root.querySelectorAll == null
              ? []
              : Array.from(root.querySelectorAll(
                "settings-subpage, h1, h2, [slot='title'], #title, .page-title",
              ));
            for (const candidate of candidates) {
              const title = getCandidateTitle(candidate);
              if (title != null) return title;
            }
            const children = root.querySelectorAll == null
              ? []
              : Array.from(root.querySelectorAll("*"));
            for (const child of children) {
              const title = findBrowserSettingsPageTitle(child.shadowRoot);
              if (title != null) return title;
            }
            return null;
          };
          return findBrowserSettingsPageTitle(document);
        })()
      `),
    );
  } catch {
    return null;
  }
}

function cleanTitle(value: unknown) {
  const title =
    typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
  return title.length === 0 ? null : title;
}

async function navigateBrowserSettingsWebview({
  sourceUrl,
  targetUrl,
  webview,
}: {
  sourceUrl: string;
  targetUrl: string;
  webview: BrowserSettingsWebviewElement;
}) {
  if (
    targetUrl === CHROME_SITE_SETTINGS_URL &&
    parseChromeSiteSettingsPath(sourceUrl) != null &&
    (await clickSiteSettingsSubpageBackButton(webview))
  ) {
    return;
  }
  if (webview.loadURL != null) {
    await webview.loadURL(targetUrl);
    return;
  }
  webview.setAttribute("src", targetUrl);
}

async function clickSiteSettingsSubpageBackButton(
  webview: BrowserSettingsWebviewElement,
) {
  if (webview.executeJavaScript == null) return false;
  try {
    return (
      (await webview.executeJavaScript(`
        (() => {
          const visited = new Set();
          const findSubpageBackButton = (root) => {
            if (root == null || visited.has(root)) return null;
            visited.add(root);
            const subpage = root.querySelector?.("settings-subpage");
            const backButton =
              subpage?.shadowRoot?.querySelector("cr-icon-button#closeButton");
            if (backButton != null) return backButton;
            const children = root.querySelectorAll == null
              ? []
              : Array.from(root.querySelectorAll("*"));
            for (const child of children) {
              const shadowBackButton = findSubpageBackButton(child.shadowRoot);
              if (shadowBackButton != null) return shadowBackButton;
            }
            return null;
          };
          const backButton = findSubpageBackButton(document);
          if (backButton == null) return false;
          backButton.click();
          return true;
        })()
      `)) === true
    );
  } catch {
    return false;
  }
}
