// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Native Browser Use PiP presentation wrappers.

import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { getSkyNativeAddonPaths } from "../native-app-icons/addons";
import type {
  BrowserUsePipAddon,
  BrowserUsePipBackend,
  BrowserUsePipWindowLike,
} from "./types";

const requireFromHere = createRequire(import.meta.url);

const BROWSER_USE_BACKEND_ASSETS: Record<
  BrowserUsePipBackend,
  { fileName: string; pluginNames: string[] } | null
> = {
  cdp: null,
  chrome: {
    fileName: "google-chrome.png",
    pluginNames: ["chrome-internal", "chrome-dev", "chrome"],
  },
  iab: null,
};

export function startRemoteHostedPipContentHost(
  options: NativePipOptions = {},
): boolean {
  return invokeDarwinBooleanAddonMethod(
    "startRemoteHostedPIPContentHost",
    [],
    options,
  );
}

export function setRemoteHostedPipContentActiveThreadId(
  threadId: string | null,
  options: NativePipOptions = {},
): boolean {
  return invokeDarwinBooleanAddonMethod(
    "setRemoteHostedPIPContentActiveThreadID",
    [threadId],
    options,
  );
}

export function hasRemoteHostedPipContentActivePresentation(
  options: NativePipOptions = {},
): boolean {
  return invokeDarwinBooleanAddonMethod(
    "hasRemoteHostedPIPContentActivePresentation",
    [],
    options,
  );
}

export function hasRemoteHostedPipContentAnyPresentation(
  options: NativePipOptions = {},
): boolean {
  return invokeDarwinBooleanAddonMethod(
    "hasRemoteHostedPIPContentAnyPresentation",
    [],
    options,
  );
}

export function setRemoteHostedPipContentVisible(
  visible: boolean,
  options: NativePipOptions = {},
): boolean {
  return invokeDarwinBooleanAddonMethod(
    "setRemoteHostedPIPContentVisible",
    [visible],
    options,
  );
}

export function setRemoteHostedPipContentVisibilityRequestHandler(
  handler: unknown,
  options: NativePipOptions = {},
): boolean {
  return invokeDarwinBooleanAddonMethod(
    "setRemoteHostedPIPContentVisibilityRequestHandler",
    [handler],
    options,
  );
}

export function registerRemoteHostedPipContentHost(
  id: string,
  window: BrowserUsePipWindowLike,
  {
    anchors = null,
    anchorRect = null,
    animated = false,
    presentationScope = "thread",
    ...options
  }: NativePipOptions & {
    anchors?: unknown;
    anchorRect?: unknown;
    animated?: boolean;
    presentationScope?: string;
  } = {},
): boolean {
  if (
    options.platform !== "darwin" &&
    (options.platform ?? process.platform) !== "darwin"
  ) {
    return false;
  }
  if (!id.trim()) return false;
  try {
    const addon = options.addon ?? loadBrowserUsePipAddon(options);
    return (
      addon.registerRemoteHostedPIPContentHost?.({
        anchors,
        anchorRect,
        animated,
        contentBounds: window.getContentBounds(),
        id,
        nativeWindowHandle:
          typeof window.getNativeWindowHandle === "function"
            ? window.getNativeWindowHandle()
            : null,
        presentationScope,
        title: window.getTitle(),
      }) === true
    );
  } catch {
    return false;
  }
}

export function unregisterRemoteHostedPipContentHost(
  id: string,
  options: NativePipOptions = {},
): boolean {
  if (!id.trim()) return false;
  return invokeDarwinBooleanAddonMethod(
    "unregisterRemoteHostedPIPContentHost",
    [id],
    options,
  );
}

export function completeRemoteHostedPipContentThread(
  id: string,
  options: NativePipOptions = {},
): boolean {
  if (!id.trim()) return false;
  return invokeDarwinBooleanAddonMethod(
    "completeRemoteHostedPIPContentThread",
    [id],
    options,
  );
}

export function upsertBrowserUsePipContent(
  presentationId: string,
  threadId: string,
  screenshotDataUrl: string,
  backend: BrowserUsePipBackend,
  options: NativePipOptions = {},
): boolean {
  const platform = options.platform ?? process.platform;
  if (
    platform !== "darwin" ||
    !presentationId.trim() ||
    !threadId.trim() ||
    !screenshotDataUrl.startsWith("data:image/")
  ) {
    return false;
  }
  try {
    const backendIconPath = resolveBrowserUsePipBackendIconPath({
      backend,
      resourcesPath: options.resourcesPath ?? process.resourcesPath,
    });
    return (
      (
        options.addon ?? loadBrowserUsePipAddon(options)
      ).upsertBrowserUsePIPContent?.(
        presentationId,
        threadId,
        screenshotDataUrl,
        backendIconPath,
      ) === true
    );
  } catch {
    return false;
  }
}

export function invalidateBrowserUsePipContent(
  presentationId: string,
  options: NativePipOptions = {},
): boolean {
  if (!presentationId.trim()) return false;
  return invokeDarwinBooleanAddonMethod(
    "invalidateBrowserUsePIPContent",
    [presentationId],
    options,
  );
}

export function resolveBrowserUsePipBackendIconPath({
  backend,
  resourcesPath,
}: {
  backend: BrowserUsePipBackend;
  resourcesPath?: string | null;
}): string | null {
  const asset = BROWSER_USE_BACKEND_ASSETS[backend];
  if (asset == null || resourcesPath == null) return null;
  return (
    asset.pluginNames
      .flatMap((pluginName) =>
        ["", "app.asar.unpacked"].map((asarSegment) =>
          path.join(
            resourcesPath,
            asarSegment,
            "plugins",
            "openai-bundled",
            "plugins",
            pluginName,
            "assets",
            asset.fileName,
          ),
        ),
      )
      .find((candidatePath) => existsSync(candidatePath)) ?? null
  );
}

export function loadBrowserUsePipAddon({
  electronAppPath,
  requireLike = requireFromHere,
  resourcesPath,
}: NativePipOptions & {
  requireLike?: (path: string) => unknown;
}): BrowserUsePipAddon {
  if (electronAppPath == null) throw Error("Electron app path is required");
  for (const candidatePath of getSkyNativeAddonPaths({
    electronAppPath,
    resourcesPath,
  })) {
    if (existsSync(candidatePath))
      return requireLike(candidatePath) as BrowserUsePipAddon;
  }
  throw Error("Sky native addon is unavailable");
}

type NativePipOptions = {
  addon?: BrowserUsePipAddon;
  electronAppPath?: string;
  platform?: string;
  resourcesPath?: string | null;
};

function invokeDarwinBooleanAddonMethod(
  method: keyof BrowserUsePipAddon,
  args: unknown[],
  options: NativePipOptions,
): boolean {
  if ((options.platform ?? process.platform) !== "darwin") return false;
  try {
    const addon = options.addon ?? loadBrowserUsePipAddon(options);
    const target = addon[method];
    return typeof target === "function"
      ? (target as (...args: unknown[]) => unknown)(...args) === true
      : false;
  } catch {
    return false;
  }
}
