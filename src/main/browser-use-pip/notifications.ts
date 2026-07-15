// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Browser Use PiP tool metadata parsing and presentation lifecycle.

import {
  invalidateBrowserUsePipContent,
  upsertBrowserUsePipContent,
} from "./native";
import type {
  BrowserUsePipAppServerConnection,
  BrowserUsePipBackend,
  BrowserUsePipLogger,
  BrowserUsePipMetadata,
  BrowserUseToolSurface,
} from "./types";

export function createBrowserUsePipNotificationDisposer({
  appServerConnection,
  invalidatePresentation = invalidateBrowserUsePipContent,
  logger = null,
  upsertPresentation = upsertBrowserUsePipContent,
}: {
  appServerConnection: BrowserUsePipAppServerConnection;
  invalidatePresentation?: (presentationId: string) => boolean;
  logger?: BrowserUsePipLogger | null;
  upsertPresentation?: (
    presentationId: string,
    threadId: string,
    screenshotDataUrl: string,
    backend: BrowserUsePipBackend,
  ) => boolean;
}): () => void {
  const stateByBrowserKey = new Map<
    string,
    { presentationIDsByTabID: Map<string, string>; threadID: string }
  >();
  const invalidateBrowser = (browserKey: string): void => {
    const state = stateByBrowserKey.get(browserKey);
    if (state == null) return;
    for (const presentationId of state.presentationIDsByTabID.values()) {
      invalidatePresentation(presentationId);
    }
    stateByBrowserKey.delete(browserKey);
  };
  const invalidateThread = (threadId: string): void => {
    for (const [browserKey, state] of stateByBrowserKey) {
      if (state.threadID === threadId) invalidateBrowser(browserKey);
    }
  };
  const unregister = appServerConnection.registerInternalNotificationHandler(
    (notification) => {
      const metadata = parseBrowserUsePipMetadataNotification(notification);
      if (metadata != null) {
        const { surface, threadID } = metadata;
        const browserKey = JSON.stringify([threadID, surface.browserId]);
        if (surface.sessionEnded === true) {
          invalidateBrowser(browserKey);
          return;
        }
        let state = stateByBrowserKey.get(browserKey);
        if (surface.screenshot != null) {
          const presentationId = `browser:${JSON.stringify([
            threadID,
            surface.browserId,
            surface.screenshot.tabId,
          ])}`;
          if (
            upsertPresentation(
              presentationId,
              threadID,
              surface.screenshot.url,
              surface.backend,
            )
          ) {
            state ??= {
              presentationIDsByTabID: new Map(),
              threadID,
            };
            state.presentationIDsByTabID.set(
              surface.screenshot.tabId,
              presentationId,
            );
            stateByBrowserKey.set(browserKey, state);
          } else {
            logger?.warning("Failed to upsert Browser Use PiP content", {
              safe: {
                backend: surface.backend,
                tabID: surface.screenshot.tabId,
              },
            });
          }
        }
        if (surface.openTabIds != null && state != null) {
          const openTabIds = new Set(surface.openTabIds);
          for (const [tabId, presentationId] of state.presentationIDsByTabID) {
            if (!openTabIds.has(tabId)) {
              invalidatePresentation(presentationId);
              state.presentationIDsByTabID.delete(tabId);
            }
          }
          if (state.presentationIDsByTabID.size === 0) {
            stateByBrowserKey.delete(browserKey);
          }
        }
        return;
      }
      const route = asRecord(notification);
      if (
        (route?.method === "thread/archived" ||
          route?.method === "thread/closed") &&
        typeof asRecord(route.params)?.threadId === "string"
      ) {
        invalidateThread(asRecord(route.params)?.threadId as string);
      }
    },
  );
  return () => {
    unregister();
    for (const browserKey of stateByBrowserKey.keys())
      invalidateBrowser(browserKey);
  };
}

export function parseBrowserUsePipMetadataNotification(
  notification: unknown,
  logger?: BrowserUsePipLogger | null,
): BrowserUsePipMetadata | null {
  const route = asRecord(notification);
  const params = asRecord(route?.params);
  const item = asRecord(params?.item);
  const result = asRecord(item?.result);
  if (
    route?.method !== "item/completed" ||
    typeof params?.threadId !== "string" ||
    item?.type !== "mcpToolCall" ||
    item.server !== "node_repl" ||
    result == null ||
    !Object.prototype.hasOwnProperty.call(result, "_meta")
  ) {
    return null;
  }
  const surface = parseBrowserUseToolSurface(
    asRecord(result._meta)?.["codex/toolSurface"],
  );
  if (surface == null) return null;
  logger?.info("Received Browser Use PiP metadata", {
    safe: {
      backend: surface.backend,
      browserID: surface.browserId,
      tabID: surface.screenshot?.tabId,
      threadID: params.threadId,
    },
  });
  return { surface, threadID: params.threadId };
}

export function parseBrowserUseToolSurface(
  value: unknown,
): BrowserUseToolSurface | null {
  const surface = asRecord(value);
  if (
    surface?.kind !== "browserUse" ||
    !isBrowserUsePipBackend(surface.backend) ||
    typeof surface.browserId !== "string" ||
    surface.browserId.trim().length === 0
  ) {
    return null;
  }
  const openTabIds =
    Array.isArray(surface.openTabIds) &&
    surface.openTabIds.every(
      (tabId) => typeof tabId === "string" && tabId.trim(),
    )
      ? surface.openTabIds
      : undefined;
  const screenshot = parseBrowserUseScreenshot(surface.screenshot);
  return {
    backend: surface.backend,
    browserId: surface.browserId.trim(),
    kind: "browserUse",
    ...(openTabIds == null ? {} : { openTabIds }),
    ...(screenshot == null ? {} : { screenshot }),
    ...(surface.sessionEnded === true ? { sessionEnded: true } : {}),
  };
}

function parseBrowserUseScreenshot(
  value: unknown,
): BrowserUseToolSurface["screenshot"] | undefined {
  const screenshot = asRecord(value);
  return typeof screenshot?.tabId === "string" &&
    screenshot.tabId.trim().length > 0 &&
    typeof screenshot.url === "string" &&
    screenshot.url.startsWith("data:image/")
    ? { tabId: screenshot.tabId.trim(), url: screenshot.url }
    : undefined;
}

function isBrowserUsePipBackend(value: unknown): value is BrowserUsePipBackend {
  return value === "chrome" || value === "iab" || value === "cdp";
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
