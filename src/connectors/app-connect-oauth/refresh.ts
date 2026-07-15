// Restored from ref/webview/assets/app-connect-oauth-CaBlbuQW.js
import {
  callCodexVscodeApi,
  vscodeApiR as createVscodeQueryKey,
} from "../../boundaries/vscode-api";
import { normalizeProjectRoot } from "../../boundaries/src-l0hb-mz-p";
import { appsListQueryKey, type AppConnectApp } from "../apps-queries";
import type { AppConnectOAuthQueryClient } from "./types";
export async function refreshAppsAndMaybeAmbientSuggestions({
  hostId,
  queryClient,
  refreshAppsList,
}: {
  hostId: string;
  queryClient: AppConnectOAuthQueryClient;
  refreshAppsList: () => Promise<AppConnectApp[]>;
}): Promise<AppConnectApp[]> {
  const previousApps = queryClient.getQueryData<AppConnectApp[]>(
    appsListQueryKey(hostId),
  );
  const nextApps = await refreshAppsList();
  if (
    !hasNewlyAvailableApp({
      previousApps,
      nextApps,
    })
  ) {
    return nextApps;
  }
  await callCodexVscodeApi("ambient-suggestions-refresh", {
    params: {
      hostId,
      projectRoot: normalizeProjectRoot("~"),
      mode: "first-plugin-connect",
    },
  });
  await Promise.all([
    queryClient.invalidateQueries({
      queryKey: createVscodeQueryKey("ambient-suggestions"),
    }),
    queryClient.invalidateQueries({
      queryKey: createVscodeQueryKey("ambient-suggestions-refresh"),
    }),
  ]);
  return nextApps;
}
function hasNewlyAvailableApp({
  previousApps,
  nextApps,
}: {
  previousApps: AppConnectApp[] | null | undefined;
  nextApps: AppConnectApp[];
}): boolean {
  return (
    previousApps != null &&
    !previousApps.some(isAccessibleEnabledApp) &&
    nextApps.some(isAccessibleEnabledApp)
  );
}
function isAccessibleEnabledApp(app: AppConnectApp): boolean {
  return Boolean(app.isAccessible && app.isEnabled);
}
