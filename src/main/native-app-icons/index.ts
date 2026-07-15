// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Cross-platform native desktop app icon helpers.

import {
  loadSkyNativeIconAddon,
  loadWindowsComputerUseAppIconsAddon,
} from "./addons";
import {
  createWindowsDesktopAppIconCacheKey,
  extractWindowsDesktopAppIconDataUrl,
  normalizeWindowsDesktopAppIconPath,
} from "./powershell";
import type { ExecFileLike, NativeIconAddon } from "./types";

const WINDOWS_POWERSHELL_ICON_CACHE_LIMIT = 100;
const NATIVE_ICON_CACHE_LIMIT = 100;

const windowsPowerShellIconCache = new Map<string, Promise<string | null>>();
const nativeIconCache = new Map<string, Promise<string | null>>();

export async function getWindowsDesktopAppIconDataUrl(
  appPath: string,
  options: {
    env?: NodeJS.ProcessEnv;
    execFileLike?: ExecFileLike;
  } = {},
): Promise<string | null> {
  const normalizedPath = normalizeWindowsDesktopAppIconPath(appPath);
  if (!normalizedPath) return null;
  const cacheKey = createWindowsDesktopAppIconCacheKey(normalizedPath);
  const cached = windowsPowerShellIconCache.get(cacheKey);
  if (cached != null) {
    windowsPowerShellIconCache.delete(cacheKey);
    windowsPowerShellIconCache.set(cacheKey, cached);
    return cached;
  }
  const promise = extractWindowsDesktopAppIconDataUrl({
    appPath: normalizedPath,
    ...options,
  }).then((dataUrl) => {
    if (dataUrl == null) windowsPowerShellIconCache.delete(cacheKey);
    return dataUrl;
  });
  windowsPowerShellIconCache.set(cacheKey, promise);
  pruneMapToLimit(
    windowsPowerShellIconCache,
    WINDOWS_POWERSHELL_ICON_CACHE_LIMIT,
  );
  return promise;
}

export async function getNativeDesktopAppIconDataUrl(
  appPath: string,
  {
    addon,
    electronAppPath,
    platform = process.platform,
    resourcesPath = process.resourcesPath,
  }: {
    addon?: NativeIconAddon;
    electronAppPath: string;
    platform?: string;
    resourcesPath?: string | null;
  },
): Promise<string | null> {
  const normalizedPath = normalizeNativeDesktopAppIconPath(appPath, platform);
  if (!normalizedPath) return null;
  const cacheKey = createNativeDesktopAppIconCacheKey(normalizedPath, platform);
  const cached = nativeIconCache.get(cacheKey);
  if (cached != null) {
    nativeIconCache.delete(cacheKey);
    nativeIconCache.set(cacheKey, cached);
    return cached;
  }
  const promise = resolveNativeDesktopAppIconDataUrl({
    addon,
    appPath: normalizedPath,
    electronAppPath,
    platform,
    resourcesPath,
  }).then((dataUrl) => {
    if (dataUrl == null) nativeIconCache.delete(cacheKey);
    return dataUrl;
  });
  nativeIconCache.set(cacheKey, promise);
  pruneMapToLimit(nativeIconCache, NATIVE_ICON_CACHE_LIMIT);
  return promise;
}

export function normalizeNativeDesktopAppIconPath(
  appPath: string,
  platform: string,
): string {
  if (platform === "win32") return normalizeWindowsDesktopAppIconPath(appPath);
  if (platform === "darwin") return appPath.trim();
  return "";
}

export function createNativeDesktopAppIconCacheKey(
  appPath: string,
  platform: string,
): string {
  return `${platform}:${platform === "win32" ? appPath.toLowerCase() : appPath}`;
}

export function clearNativeDesktopAppIconCaches(): void {
  windowsPowerShellIconCache.clear();
  nativeIconCache.clear();
}

export * from "./addons";
export * from "./powershell";
export * from "./types";

async function resolveNativeDesktopAppIconDataUrl({
  addon,
  appPath,
  electronAppPath,
  platform,
  resourcesPath,
}: {
  addon?: NativeIconAddon;
  appPath: string;
  electronAppPath: string;
  platform: string;
  resourcesPath?: string | null;
}): Promise<string | null> {
  try {
    if (platform === "darwin") {
      return await (
        addon ?? loadSkyNativeIconAddon({ electronAppPath, resourcesPath })
      ).iconSmallForAppPath(appPath);
    }
    if (platform === "win32") {
      return await (
        addon ??
        loadWindowsComputerUseAppIconsAddon({
          electronAppPath,
          resourcesPath,
        })
      ).iconSmallForAppPath(appPath);
    }
    return null;
  } catch {
    return null;
  }
}

function pruneMapToLimit<Key>(
  map: Map<Key, Promise<string | null>>,
  limit: number,
): void {
  while (map.size > limit) {
    const firstKey = map.keys().next().value;
    if (firstKey == null) return;
    map.delete(firstKey);
  }
}
