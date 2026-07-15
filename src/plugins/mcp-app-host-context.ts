// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds the "host context" object and supporting environment descriptors
// (user agent, container dimensions, safe-area insets) reported to an MCP app
// sandbox so it can lay itself out for the desktop host.

export interface SafeAreaInsets {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface SafeArea {
  insets: SafeAreaInsets;
}

export const DEFAULT_MCP_APP_SAFE_AREA: SafeArea = {
  insets: { bottom: 0, left: 0, right: 0, top: 0 },
};

export const MCP_APP_SAFE_AREA_WITH_NAVIGATION: SafeArea = {
  insets: { ...DEFAULT_MCP_APP_SAFE_AREA.insets, top: 48 },
};

export type McpAppDisplayMode = "inline" | "fullscreen";

export interface McpAppContainerDimensions {
  maxHeight: number;
  maxWidth: number;
}

export interface McpAppUserAgent {
  capabilities: { hover: boolean; touch: boolean };
  device: { os: string; platform: "native"; type: "desktop" };
}

export function resolveMcpAppSafeArea({
  displayMode,
  hasNavigationHistory,
}: {
  displayMode: McpAppDisplayMode;
  hasNavigationHistory: boolean;
}): SafeArea {
  return displayMode === "inline" && hasNavigationHistory
    ? MCP_APP_SAFE_AREA_WITH_NAVIGATION
    : DEFAULT_MCP_APP_SAFE_AREA;
}

export function measureMcpAppContainerDimensions(
  element: HTMLElement,
): McpAppContainerDimensions {
  return {
    maxHeight: element.clientHeight,
    maxWidth: element.clientWidth,
  };
}

function detectMcpAppOperatingSystem(): "macos" | "windows" | "unknown" {
  const platform = window.navigator.platform.toLowerCase();
  if (platform.includes("mac")) return "macos";
  if (platform.includes("win")) return "windows";
  return "unknown";
}

export function buildMcpAppUserAgent(): McpAppUserAgent {
  return {
    capabilities: {
      hover: window.matchMedia?.("(hover: hover)")?.matches ?? false,
      touch: window.matchMedia?.("(pointer: coarse)")?.matches ?? false,
    },
    device: {
      os: detectMcpAppOperatingSystem(),
      platform: "native",
      type: "desktop",
    },
  };
}

export function buildMcpAppHostContext({
  containerDimensions,
  displayMode,
  locale,
  safeAreaInsets,
  styleVariables,
  theme,
  userAgent,
}: {
  containerDimensions: McpAppContainerDimensions;
  displayMode: McpAppDisplayMode;
  locale: string;
  safeAreaInsets: SafeAreaInsets;
  styleVariables: Record<string, string | undefined>;
  theme: "dark" | "light";
  userAgent: McpAppUserAgent;
}) {
  return {
    availableDisplayModes: ["inline", "fullscreen"] as const,
    containerDimensions,
    deviceCapabilities: {
      hover: userAgent.capabilities.hover,
      touch: userAgent.capabilities.touch,
    },
    displayMode,
    locale,
    platform: "desktop" as const,
    safeAreaInsets,
    styles: {
      variables: styleVariables,
    },
    theme,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    userAgent: "chatgpt" as const,
  };
}
