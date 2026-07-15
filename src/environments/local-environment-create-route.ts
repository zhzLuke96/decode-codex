// Restored from ref/webview/assets/local-environment-create-route-DWRBzOzJ.js

type LocalEnvironmentCreateQuery = {
  configPath: string | null;
  workspaceRoot: string;
};
type LocalEnvironmentCreateRouteState = {
  hostId: string;
  returnTo: string;
};
type LocalEnvironmentCreateRouteParams = LocalEnvironmentCreateQuery &
  LocalEnvironmentCreateRouteState;
const LOCAL_ENVIRONMENT_CREATE_SETTINGS_SECTION = "local-environments/create";
const LOCAL_ENVIRONMENT_CREATE_ROUTE = `/settings/${LOCAL_ENVIRONMENT_CREATE_SETTINGS_SECTION}`;
function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0;
}
function isSafeReturnPath(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.startsWith("/") &&
    !value.startsWith("//")
  );
}
function buildLocalEnvironmentCreateRoute({
  configPath,
  workspaceRoot,
}: LocalEnvironmentCreateQuery) {
  const searchParams = new URLSearchParams({
    workspaceRoot,
  });
  if (configPath != null) searchParams.set("configPath", configPath);
  return `${LOCAL_ENVIRONMENT_CREATE_ROUTE}?${searchParams.toString()}`;
}
function parseLocalEnvironmentCreateRouteParams(
  searchParams: URLSearchParams,
  state: unknown,
): LocalEnvironmentCreateRouteParams | null {
  if (
    typeof state !== "object" ||
    state === null ||
    !isNonEmptyString(
      (
        state as {
          hostId?: unknown;
        }
      ).hostId,
    ) ||
    !isSafeReturnPath(
      (
        state as {
          returnTo?: unknown;
        }
      ).returnTo,
    )
  ) {
    return null;
  }
  const configPath = searchParams.get("configPath");
  const workspaceRoot = searchParams.get("workspaceRoot");
  if (
    (configPath !== null && !isNonEmptyString(configPath)) ||
    !isNonEmptyString(workspaceRoot)
  ) {
    return null;
  }
  return {
    hostId: (
      state as {
        hostId: string;
      }
    ).hostId,
    returnTo: (
      state as {
        returnTo: string;
      }
    ).returnTo,
    configPath,
    workspaceRoot,
  };
}
export {
  parseLocalEnvironmentCreateRouteParams,
  LOCAL_ENVIRONMENT_CREATE_SETTINGS_SECTION,
  buildLocalEnvironmentCreateRoute,
  LOCAL_ENVIRONMENT_CREATE_ROUTE,
};
