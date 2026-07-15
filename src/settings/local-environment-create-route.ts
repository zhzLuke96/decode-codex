// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Route helpers for creating local environment settings entries.
export const LOCAL_ENVIRONMENT_CREATE_ROUTE =
  "/settings/local-environments/create";

export type LocalEnvironmentCreateRouteParams = {
  hostId: string;
  returnTo: string;
};

export type LocalEnvironmentCreateRouteQuery = {
  configPath: string | null;
  workspaceRoot: string;
};

export type LocalEnvironmentCreateRouteState =
  LocalEnvironmentCreateRouteParams & LocalEnvironmentCreateRouteQuery;

export function initLocalEnvironmentCreateRouteChunk(): void {}

export function buildLocalEnvironmentCreateRoute({
  configPath,
  workspaceRoot,
}: LocalEnvironmentCreateRouteQuery): string {
  const searchParams = new URLSearchParams({ workspaceRoot });
  if (configPath != null) {
    searchParams.set("configPath", configPath);
  }
  return `${LOCAL_ENVIRONMENT_CREATE_ROUTE}?${searchParams.toString()}`;
}

export function parseLocalEnvironmentCreateRoute(
  searchParams: URLSearchParams,
  params: Partial<LocalEnvironmentCreateRouteParams>,
): LocalEnvironmentCreateRouteState | null {
  const hostId = params.hostId;
  const returnTo = params.returnTo;
  const workspaceRoot = searchParams.get("workspaceRoot");
  if (
    hostId == null ||
    hostId.length === 0 ||
    returnTo == null ||
    !isSafeAbsoluteReturnPath(returnTo) ||
    workspaceRoot == null ||
    workspaceRoot.length === 0
  ) {
    return null;
  }
  const configPath = searchParams.get("configPath");
  if (configPath != null && configPath.length === 0) {
    return null;
  }
  return {
    configPath,
    hostId,
    returnTo,
    workspaceRoot,
  };
}

function isSafeAbsoluteReturnPath(path: string): boolean {
  return path.startsWith("/") && !path.startsWith("//");
}
