// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Local conversation route scope, path, navigation, and toast helpers.
import { initConversationPromptContextRuntime } from "../runtime/conversation-prompt-context-runtime";

import { initToastRuntime, toastSignal } from "../runtime/toast-runtime";

import { isHotkeyWindowContext } from "../utils/is-hotkey-window-context";
import {
  Ev as useLocationRaw,
  I_ as initRouteScope,
  M_ as localConversationRouteScope,
  O_ as initConversationRouteSourceHelpers,
  Ov as useNavigateRaw,
  yv as Navigate,
} from "../vendor/projects-app-shared-runtime";
import { initScopeRuntime } from "../runtime/app-scope-runtime";

export type NavigateOptions = {
  replace?: boolean;
  state?: unknown;
};

export type Navigate = (to: string, options?: NavigateOptions) => void;

export type RouteLocation = {
  hash: string;
  pathname: string;
  search: string;
  state?: unknown;
};

export { localConversationRouteScope, Navigate, toastSignal };

export function createLocalConversationRouteTarget(
  conversationId: string,
  surface: "main" | "side" | string,
  sourceConversationId?: string | null,
): unknown {
  return {
    conversationId,
    kind: "local",
    placement: surface,
    routeConversationId: sourceConversationId ?? conversationId,
  };
}

export function getLocalConversationPath(conversationId: string): string {
  return `/local/${conversationId}`;
}

export function getHotkeyWindowThreadPath(conversationId: string): string {
  return `/hotkey-window/thread/${conversationId}`;
}

export function getHotkeyWindowFallbackPath(
  hasConfiguredLauncherHotkey: boolean,
): string {
  return hasConfiguredLauncherHotkey
    ? "/hotkey-window"
    : "/hotkey-window/new-thread";
}

export function isHotkeyWindowRoute(): boolean {
  return isHotkeyWindowContext();
}

export function useNavigate(): Navigate {
  return useNavigateRaw() as Navigate;
}

export function useLocation(): RouteLocation {
  return useLocationRaw() as RouteLocation;
}

export function initLocalConversationRouteRuntime(): void {
  initScopeRuntime();
  initRouteScope();
}

export function initToastSignalRuntime(): void {
  initToastRuntime();
}

export function initConversationRouteSourceRuntime(): void {
  initConversationRouteSourceHelpers();
}

export function initLocalConversationNavigationRuntime(): void {
  initLocalConversationRouteRuntime();
  initConversationPromptContextRuntime();
  initToastRuntime();
}
