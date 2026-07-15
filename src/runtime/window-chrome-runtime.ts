// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Window chrome and route context helpers used by the Electron app-main bootstrap.
import { threadHostIdSignal } from "../threads/thread-context";
import { setDefaultAgentModeForHost } from "../utils/permissions-mode-defaults";
import { once } from "./commonjs-interop";

export type CodexWindowType = "electron" | string;
export type CodexOs = "win32" | "darwin" | "linux" | "unknown";
export type CodexWindowChrome = "application-menu" | "native";

export const currentRouteHostIdSignal = threadHostIdSignal;

export function getCodexWindowChrome(
  windowType: CodexWindowType,
  codexOs: CodexOs,
): CodexWindowChrome {
  if (windowType !== "electron") return "native";

  switch (codexOs) {
    case "win32":
    case "linux":
      return "application-menu";
    case "darwin":
    case "unknown":
      return "native";
  }
}

export const initAppFeatureRuntimeChunk = once(() => {});

export const initBrowserCommentAttachmentRuntime = once(() => {});

export const initTerminalFontSettingsChunk = once(() => {});

export const initTerminalLinkHandlerChunk = once(() => {});

export const initWebLinksAddonChunk = once(() => {});

export const initFitAddonChunk = once(() => {});

export const initPanelTabStoresChunk = once(() => {});

export const initTerminalRuntimeChunk = once(() => {});

export const initXtermTerminalChunk = once(() => {});

export const initThreadFindStateRuntime = once(() => {});

export const initConversationSummarySelectorsChunk = once(() => {});

export const initTerminalMousePatchRuntime = once(() => {});

export const initCommandExecutionTextRuntime = once(() => {});

export const initTerminalSurfaceRuntime = once(() => {});

export const initTerminalMouseCoordinatePatchRuntime = once(() => {});

export function initPermissionsModeDefaultsRuntime(): void {}

export function normalizeTerminalLineEndings(value: string): string {
  return value.replace(/\r?\n/g, "\r\n");
}

export function getCommandExecutionText(command: {
  command?: string | null;
  text?: string | null;
}): string {
  return command.command ?? command.text ?? "";
}

export function setThreadAppShellSources(
  scope:
    | {
        setThreadAppShellSources?: (sources: unknown) => unknown;
      }
    | null
    | undefined,
  sources: unknown,
): unknown {
  return scope?.setThreadAppShellSources?.(sources);
}

export { setDefaultAgentModeForHost };

export { FitAddon } from "@xterm/addon-fit";
export { WebLinksAddon } from "@xterm/addon-web-links";
export { Terminal } from "@xterm/xterm";

export {
  ensureBottomPanelLauncherVisibilityDefault,
  initAppShellStateRuntimeChunk,
} from "../app-shell/app-shell-state";

export {
  FastServiceTierIcon,
  initFastServiceTierIcon,
  initUltraFastServiceTierIcon,
  UltraFastServiceTierIcon,
} from "../composer/service-tier-speed-icon";

export {
  initNewThreadRouteContextChunk,
  resetNewThreadRouteContext,
} from "../composer/new-thread-route-context";

export { latestTurnByConversationIdSignal as conversationTitleByIdSignal } from "../boundaries/thread-context-inputs.facade";

export { terminalSessionSnapshotStore } from "../conversations/fork-conversation-panel-state-deps";

export { fontSettings } from "../utils/font-settings";

export {
  activateTerminalLink,
  terminalLinkHandler,
} from "../terminal/terminal-link-handler";

export { handleTerminalKeyEvent } from "../terminal/terminal-key-event-handler";

export {
  ensureTerminalFontLoaded,
  isTerminalScrolledToBottom,
  normalizeTerminalFontFamily,
  patchTerminalMouseCoordsForZoom,
  readTerminalThemeFromCss,
} from "../terminal/terminal-view-utils";

export { useConversationTerminalSnapshot } from "../terminal/use-conversation-terminal-snapshot";
