// Restored from ref/webview/assets/ambient-suggestion-apps-DdP0OibX.js
import {
  _appScopeA as useScopedSignalValue,
  _appScopeL as createComputedSignalFamily,
  appScopeRoot,
} from "../boundaries/app-scope";
import { useAuth } from "../auth/use-auth";
import {
  appsListQueryOptions,
  useIsAppsFeatureEnabled,
  type AppConnectApp,
} from "./apps-queries";
import { getKnownAppIconByName } from "../icons/known-app-icon";
export type AmbientSuggestionAppIndex = Map<string, AppConnectApp>;
type AmbientSuggestionAppsOptions = {
  appIds: readonly string[];
  enabled?: boolean;
  hostId?: string | null;
};
type AppScopeGetter = {
  get<T>(
    signal: unknown,
    key: string,
  ): {
    data?: T;
  };
};
const ambientSuggestionAppIndexSignal = createComputedSignalFamily(
  appScopeRoot,
  (hostId: string, { get }: AppScopeGetter) => {
    const apps = get<AppConnectApp[]>(appsListQueryOptions, hostId).data;
    return apps == null ? undefined : buildAmbientSuggestionAppIndex(apps);
  },
);
export function useAmbientSuggestionApps({
  appIds,
  enabled = true,
  hostId = "local",
}: AmbientSuggestionAppsOptions): AppConnectApp[] | undefined {
  const resolvedHostId = hostId ?? "local";
  const auth = useAuth();
  const isAppsFeatureEnabled = useIsAppsFeatureEnabled({
    hostId: resolvedHostId,
  });
  const shouldLoadApps =
    enabled && isAppsFeatureEnabled && !auth.isLoading && auth.userId != null;
  const appIndex = useScopedSignalValue(
    ambientSuggestionAppIndexSignal,
    resolvedHostId,
    {
      enabled: shouldLoadApps,
    },
  ) as AmbientSuggestionAppIndex | undefined;
  if (appIndex == null) return undefined;
  return findAmbientSuggestionApps(appIndex, appIds);
}
export function hasUnknownAmbientSuggestionAppIcon(
  appIds: readonly string[],
): boolean {
  for (const appId of appIds) {
    return getKnownAppIconByName(appId) == null;
  }
  return false;
}
export function buildAmbientSuggestionAppIndex(
  apps: readonly AppConnectApp[],
): AmbientSuggestionAppIndex {
  const appByKey: AmbientSuggestionAppIndex = new Map();
  for (const app of apps) {
    const keys = [
      app.id,
      normalizeAmbientSuggestionAppKey(app.id),
      normalizeAmbientSuggestionAppKey(app.name),
      ...(app.pluginDisplayNames ?? []).map(normalizeAmbientSuggestionAppKey),
    ];
    if (app.id.startsWith("connector_")) {
      keys.push(normalizeAmbientSuggestionAppKey(app.id.slice(10)));
    }
    for (const key of keys) {
      if (key.length > 0 && !appByKey.has(key)) {
        appByKey.set(key, app);
      }
    }
  }
  return appByKey;
}
export function findAmbientSuggestionApps(
  appByKey: AmbientSuggestionAppIndex,
  appIds: readonly string[],
): AppConnectApp[] {
  const apps = new Set<AppConnectApp>();
  for (const appId of appIds) {
    const app =
      appByKey.get(appId) ??
      appByKey.get(normalizeAmbientSuggestionAppKey(appId));
    if (app != null) {
      apps.add(app);
    }
  }
  return Array.from(apps);
}
export function normalizeAmbientSuggestionAppKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}

export function initAmbientSuggestionAppsChunk(): void {
  void ambientSuggestionAppIndexSignal;
}
