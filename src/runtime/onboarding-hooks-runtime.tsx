// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hook helpers for route matching, host platform access, shared state, and hotkeys.
import { useCallback, useEffect, useMemo } from "react";

import {
  appScopeO as useAppScopeStore,
  appScopeRoot,
} from "../boundaries/app-scope";
import { useLocation } from "../conversations/local-conversation-route-runtime";
import {
  type SharedObjectScope,
  type SharedObjectUpdate,
  updateSharedObjectValue,
  useSharedObjectState,
} from "./shared-object-host-runtime";

type RouteMatch = { params: Record<string, string>; pathname: string };

function normalizePlatform(value: string | undefined): string {
  switch (value) {
    case "darwin":
    case "mac":
    case "macos":
      return "macOS";
    case "win32":
    case "windows":
      return "windows";
    case "linux":
      return "linux";
    default:
      return value ?? "unknown";
  }
}

function matchRoute(pattern: string, pathname: string): RouteMatch | null {
  const names: string[] = [];
  const source = pattern
    .replace(/\/+$/u, "")
    .split("/")
    .map((segment) => {
      if (!segment.startsWith(":"))
        return segment.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
      names.push(segment.slice(1));
      return "([^/]+)";
    })
    .join("/");
  const expression = new RegExp(`^${source || "/"}\\/?$`, "u");
  const match = expression.exec(pathname.replace(/\/+$/u, "") || "/");
  if (match == null) return null;
  return {
    pathname: match[0],
    params: Object.fromEntries(
      names.map((name, index) => [
        name,
        decodeURIComponent(match[index + 1] ?? ""),
      ]),
    ),
  };
}

export function useRouteMatch(pattern: string): RouteMatch | null {
  const location = useLocation();
  return useMemo(
    () => matchRoute(pattern, location.pathname),
    [pattern, location.pathname],
  );
}

export function useSetSignal<TValue = unknown>(
  signal: unknown,
): (value: TValue | ((current: TValue) => TValue)) => void {
  const store = useAppScopeStore(appScopeRoot);
  return useCallback(
    (value) => {
      const nextValue =
        typeof value === "function"
          ? (value as (current: TValue) => TValue)(store.get(signal) as TValue)
          : value;
      store.set(signal, nextValue);
    },
    [signal, store],
  );
}

export function useSharedStateValue<TValue = unknown>(key: string) {
  return useSharedObjectState<TValue>(key);
}

export function setSharedObjectValue<TValue>(
  scope: SharedObjectScope,
  key: string,
  nextValue: SharedObjectUpdate<TValue>,
): void {
  updateSharedObjectValue(scope, key, nextValue);
}

export function useHostPlatform(): { isLoading: boolean; platform: string } {
  const platform =
    typeof document === "undefined"
      ? undefined
      : document.documentElement.dataset.codexOs;
  return { isLoading: false, platform: normalizePlatform(platform) };
}

export function useHost(hostId: string | null | undefined) {
  const id = hostId ?? "local";
  return useMemo(
    () => ({
      id,
      kind: id === "local" ? "local" : "remote",
      getHostId: () => id,
      getConversation: () => null,
      addTurnCompletedListener: () => undefined,
      addApprovalRequestListener: () => undefined,
      addUserInputRequestListener: () => undefined,
    }),
    [id],
  );
}

export function useSessionState() {
  return {
    accountId: null,
    authMethod: null,
    computeResidency: null,
    email: null,
    isLoading: false,
    openAIAuth: null,
    planAtLogin: null,
    requiresAuth: true,
    userId: null,
  };
}

export function useStatsigDynamicConfig(_name: string) {
  return {
    get: (_key: string, fallback?: unknown) => fallback,
  };
}

export function usePushToTalkHotkey(options: {
  accelerator?: string | null;
  enabled?: boolean;
  ignoreWithin?: string | null;
  keyboardEventTarget?: Window | null;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}): void {
  const {
    accelerator,
    enabled = true,
    keyboardEventTarget,
    onKeyDown,
    onKeyUp,
  } = options;

  useEffect(() => {
    const target = keyboardEventTarget ?? window;
    if (!enabled || accelerator == null || accelerator.length === 0) return;
    const handleKeyDown = (event: KeyboardEvent) => onKeyDown?.(event);
    const handleKeyUp = (event: KeyboardEvent) => onKeyUp?.(event);
    target.addEventListener("keydown", handleKeyDown);
    target.addEventListener("keyup", handleKeyUp);
    return () => {
      target.removeEventListener("keydown", handleKeyDown);
      target.removeEventListener("keyup", handleKeyUp);
    };
  }, [accelerator, enabled, keyboardEventTarget, onKeyDown, onKeyUp]);
}
