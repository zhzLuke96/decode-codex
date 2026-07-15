// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Hook that resolves a native desktop app path to host-provided icon data URLs.
import { queryDurations, useHostQuery } from "./host-query-runtime";
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";

type NativeAppIconResponse = {
  iconLarge?: string | null;
  iconSmall?: string | null;
};

type AppshotIconKey = {
  bundleIdentifier: string;
  imageName?: string | null;
};

type AppshotIconScope = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, key: unknown, value: unknown): void;
  set(signal: unknown, value: unknown): void;
};

const APPSHOT_ICON_CACHE_LIMIT = 20;

const appshotIconCacheKeysAtom = appScopeUnderscore<AppshotIconKey[]>(
  appScopeRoot,
  [],
);

export const appshotIconDataUrlAtomFamily = appScopeUnderscore(
  appScopeRoot,
  () => null,
);

function appshotIconCacheKey({
  bundleIdentifier,
  imageName,
}: AppshotIconKey): string {
  return `${bundleIdentifier}\0${imageName ?? ""}`;
}

export function setAppshotIconDataUrl(
  scope: AppshotIconScope,
  bundleIdentifier: string,
  imageName: string | null | undefined,
  dataUrl: string | null | undefined,
): void {
  if (dataUrl == null || imageName == null) return;

  const iconKey = { bundleIdentifier, imageName };
  if (scope.get(appshotIconDataUrlAtomFamily, iconKey) === dataUrl) return;

  scope.set(appshotIconDataUrlAtomFamily, iconKey, dataUrl);
  const keyText = appshotIconCacheKey(iconKey);
  const nextKeys = [
    ...scope
      .get<AppshotIconKey[]>(appshotIconCacheKeysAtom)
      .filter((key) => appshotIconCacheKey(key) !== keyText),
    iconKey,
  ];
  const evictedKeys = nextKeys.slice(
    0,
    Math.max(0, nextKeys.length - APPSHOT_ICON_CACHE_LIMIT),
  );
  for (const evictedKey of evictedKeys) {
    scope.set(appshotIconDataUrlAtomFamily, evictedKey, null);
  }
  scope.set(appshotIconCacheKeysAtom, nextKeys.slice(evictedKeys.length));
}

export function useNativeAppIcon({ appPath }: { appPath?: string | null }): {
  iconLarge: string | null;
  iconSmall: string | null;
  isLoading: boolean;
} {
  const enabled = appPath != null && appPath.length > 0;
  const query = useHostQuery<NativeAppIconResponse>(
    "computer-use-native-desktop-app-icon",
    {
      params: { appPath },
      queryConfig: {
        enabled,
        refetchOnWindowFocus: false,
        staleTime: queryDurations.INFINITE,
      },
    },
  );

  return {
    iconLarge: enabled ? (query.data?.iconLarge ?? null) : null,
    iconSmall: enabled ? (query.data?.iconSmall ?? null) : null,
    isLoading: enabled && query.isLoading,
  };
}

export function initAppshotIconCacheChunk(): void {
  void appshotIconCacheKeysAtom;
  void appshotIconDataUrlAtomFamily;
}
