// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared runtime helpers and identity-bearing atoms used by the onboarding
// commons facade while the original shared chunk is split into semantic modules.
import * as React from "react";

import {
  appScopeH,
  appScopeM,
  appScopeRoot,
  appScopeUnderscore,
} from "../boundaries/app-scope";
import { logProductEvent } from "../analytics/product-logger";
import { useSettingValue } from "../settings/setting-storage";
import { toastApiSignal } from "../ui/toast-signal";
import { useStableCallback } from "../utils/use-stable-callback";
import { ElectronHostMessageBridge } from "./app-main-host-runtime";
import { createQueryKey } from "./app-server-mutation-runtime";
import { sendAppServerRequest } from "./app-server-request";
import { getPathBasename } from "./path-basename-runtime";
import { joinPath, normalizePath } from "./path-helpers-runtime";
import { queryDurations } from "./host-query-runtime";
import { sendHostRequest } from "./host-request-runtime";

type ExternalLinkRequest = {
  event?: { preventDefault?: () => void };
  href: string;
  initiator?: string;
};

type ToastStore = {
  get?<TValue>(signal: unknown): TValue;
};

type ToastOptions = Record<string, unknown>;
type HostMessagePayload = Record<string, unknown>;

export const threadAtomScope = appScopeH("threadAtomScope");
export const reviewMetadataScope = appScopeH("reviewMetadataScope");
export const conversationAtomScope = appScopeH("conversationAtomScope");

export const appMessenger = {
  dispatchMessage(type: string, payload: HostMessagePayload = {}): void {
    ElectronHostMessageBridge.getInstance().dispatchMessage(type, payload);
  },
};

export const intlAtom = appScopeUnderscore(appScopeRoot, () => ({
  formatMessage(message: { defaultMessage?: string; id?: string } | string) {
    return typeof message === "string"
      ? message
      : (message.defaultMessage ?? message.id ?? "");
  },
}));

export const conversationHostIdAtom = appScopeUnderscore(
  conversationAtomScope,
  () => "local",
);
export const workspaceRootAtom = appScopeUnderscore(appScopeRoot, () => null);
export const codexAnalyticsConfigAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

export const analyticsClickSource = {
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_UNSPECIFIED:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_UNSPECIFIED",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_CARD:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_CARD",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_EXPORT_MENU:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_EXPORT_MENU",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const pushStatusAtom = appScopeM(
  threadAtomScope,
  (input: { cwd?: string; hostConfig?: { id?: string } } = {}) => ({
    queryFn: () =>
      getRpcClient("git").request({
        method: "push-status",
        params: input,
      }),
    queryKey: buildQueryKey("git-push-status", {
      cwd: input.cwd,
      hostId: input.hostConfig?.id,
    }),
    staleTime: queryDurations.FIVE_SECONDS,
  }),
);

export const DURATIONS = queryDurations;
export const Durations = queryDurations;
export const buildQueryKey = createQueryKey;
export const basename = getPathBasename;
export const useSetting = useSettingValue;
export const trackScopedAnalyticsEvent = logProductEvent;

export function getThreadId(value: unknown): string | null {
  if (typeof value === "string" && value.trim().length > 0) return value;
  if (value == null || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const threadId =
    record.threadId ??
    record.conversationId ??
    record.localConversationId ??
    record.targetConversationId;
  return typeof threadId === "string" && threadId.trim().length > 0
    ? threadId
    : null;
}

export function createEphemeralConversationId(
  input: Record<string, unknown> = {},
): string {
  return `ephemeral:${JSON.stringify(input)}`;
}

export function useEffectEvent<TCallback extends (...args: never[]) => unknown>(
  callback: TCallback,
): TCallback {
  const reactUseEffectEvent = (
    React as typeof React & {
      useEffectEvent?: <T extends (...args: never[]) => unknown>(
        callback: T,
      ) => T;
    }
  ).useEffectEvent;
  return reactUseEffectEvent?.(callback) ?? useStableCallback(callback);
}

export function dispatchHostRequest<TResponse = unknown>(
  method: string,
  params?: Record<string, unknown>,
): Promise<TResponse> {
  return sendHostRequest<TResponse>(method, { params });
}

export function invokeAppServerRequest<TResponse = unknown>(
  method: string,
  params?: Record<string, unknown>,
): Promise<TResponse> {
  return sendAppServerRequest<TResponse>(method, params);
}

export function getHostKey(hostConfig: unknown): string {
  if (typeof hostConfig === "string") return hostConfig;
  if (hostConfig && typeof hostConfig === "object") {
    const record = hostConfig as Record<string, unknown>;
    return String(
      record.id ??
        record.hostId ??
        record.key ??
        record.name ??
        record.display_name ??
        "local",
    );
  }
  return "local";
}

export function getRpcClient(namespace: string): {
  request<TResponse = unknown>(request: {
    method: string;
    params?: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<TResponse>;
} {
  return {
    request: <TResponse = unknown>({
      method,
      params,
      signal,
    }: {
      method: string;
      params?: Record<string, unknown>;
      signal?: AbortSignal;
    }) =>
      sendHostRequest<TResponse>(`${namespace}-${method}`, {
        params,
        signal,
      }),
  };
}

export const getHostBridge = getRpcClient;

export function openExternalLink({
  event,
  href,
  initiator,
}: ExternalLinkRequest): void {
  event?.preventDefault?.();
  if (href.trim().length === 0) return;
  void sendHostRequest("open-external-link", {
    params: { href, initiator },
  }).catch(() => {
    globalThis.open?.(href, "_blank", "noopener,noreferrer");
  });
}

export const openExternalLinkFromEvent = openExternalLink;

export function showComposerToast(
  scope: ToastStore,
  message: React.ReactNode,
  options?: ToastOptions,
): void {
  const toastApi = scope.get?.<{
    danger(message: React.ReactNode, options?: ToastOptions): unknown;
  }>(toastApiSignal);
  toastApi?.danger(message, options);
}

export function pathIsWindowsStyle(path: string): boolean {
  return /^[A-Za-z]:[\\/]/.test(path) || path.includes("\\");
}

export function pathIsCaseInsensitive(path: string): boolean {
  return pathIsWindowsStyle(path);
}

export function canonicalizeRootPath(path: string): string {
  const normalized = normalizePath(path).replace(/\/+$/u, "");
  return pathIsCaseInsensitive(normalized) ? normalized.toLowerCase() : normalized;
}

export function isPathWithin(path: string, root: string): boolean {
  const normalizedPath = canonicalizeRootPath(path);
  const normalizedRoot = canonicalizeRootPath(root);
  return (
    normalizedPath === normalizedRoot ||
    normalizedPath.startsWith(`${normalizedRoot}/`)
  );
}

export const isPathWithinRoot = isPathWithin;

export function normalizeRequestCwd(
  cwd: string | null | undefined,
): string | undefined {
  return cwd == null || cwd.trim().length === 0 ? undefined : normalizePath(cwd);
}

export function workspaceRootToCwd(root: unknown): string {
  if (typeof root === "string") return normalizePath(root);
  if (root && typeof root === "object") {
    const record = root as Record<string, unknown>;
    const value = record.cwd ?? record.root ?? record.path ?? record.dir;
    if (typeof value === "string") return normalizePath(value);
  }
  return normalizePath(String(root ?? ""));
}

export function toWorkspaceRootPath(root: unknown): string {
  return workspaceRootToCwd(root);
}

export function joinWorkspacePath(...parts: string[]): string {
  return normalizePath(joinPath(...parts));
}
