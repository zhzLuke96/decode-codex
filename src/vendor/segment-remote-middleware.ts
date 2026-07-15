// Restored from ref/webview/assets/remote-middleware-PCES0C24.js
// Segment analytics remote middleware resolver used by analytics-next.
import { loadScriptI, loadScriptT, loadScriptU } from "./segment-load-script";

type SegmentRemoteMiddlewareRuntime = {
  log(level: string, ...messages: unknown[]): void;
  stats: {
    increment(metric: string): void;
  };
};

type SegmentRemoteMiddlewareSettings = {
  enabledMiddleware?: Record<string, boolean | null | undefined>;
};

export type SegmentRemoteMiddleware = (...args: unknown[]) => unknown;

type RemoteMiddlewareWindow = Window &
  Record<string, SegmentRemoteMiddleware | undefined>;

function getEnabledMiddlewareNames(
  enabledMiddleware: SegmentRemoteMiddlewareSettings["enabledMiddleware"],
): string[] {
  return Object.entries(enabledMiddleware ?? {})
    .filter(([, enabled]) => Boolean(enabled))
    .map(([name]) => name);
}

function removeSegmentScope(middlewareName: string): string {
  return middlewareName.replace("@segment/", "");
}

function encodeMiddlewareSlug(
  middlewareName: string,
  obfuscateMiddlewareNames: boolean,
): string {
  if (!obfuscateMiddlewareNames) return middlewareName;
  return btoa(middlewareName).replace(/=/g, "");
}

function getRemoteMiddlewareGlobalName(middlewareName: string): string {
  return `${middlewareName}Middleware`;
}

function isLoadedMiddleware(
  middleware: SegmentRemoteMiddleware | undefined,
): middleware is SegmentRemoteMiddleware {
  return Boolean(middleware);
}

async function loadRemoteMiddleware(
  analytics: SegmentRemoteMiddlewareRuntime,
  integrationsBaseUrl: string,
  middlewareName: string,
  obfuscateMiddlewareNames: boolean,
): Promise<SegmentRemoteMiddleware | undefined> {
  const globalMiddlewareName = removeSegmentScope(middlewareName);
  const middlewareSlug = encodeMiddlewareSlug(
    globalMiddlewareName,
    obfuscateMiddlewareNames,
  );
  const middlewareSource = `${integrationsBaseUrl}/middleware/${middlewareSlug}/latest/${middlewareSlug}.js.gz`;

  try {
    await loadScriptT(middlewareSource);
    return (window as unknown as RemoteMiddlewareWindow)[
      getRemoteMiddlewareGlobalName(globalMiddlewareName)
    ];
  } catch (error) {
    analytics.log("error", error);
    analytics.stats.increment("failed_remote_middleware");
    return undefined;
  }
}

export async function remoteMiddlewares(
  analytics: SegmentRemoteMiddlewareRuntime,
  settings: SegmentRemoteMiddlewareSettings,
  obfuscateMiddlewareNames: boolean = false,
): Promise<SegmentRemoteMiddleware[]> {
  if (loadScriptU()) return [];

  const integrationsBaseUrl = loadScriptI();
  const middlewareNames = getEnabledMiddlewareNames(settings.enabledMiddleware);
  const middlewareLoaders = middlewareNames.map((middlewareName) =>
    loadRemoteMiddleware(
      analytics,
      integrationsBaseUrl,
      middlewareName,
      obfuscateMiddlewareNames,
    ),
  );
  const loadedMiddleware = await Promise.all(middlewareLoaders);
  return loadedMiddleware.filter(isLoadedMiddleware);
}

export const remoteMiddleware = remoteMiddlewares;
