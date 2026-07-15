// Restored from ref/webview/assets/app-initial~app-main~personalization-settings~appearance-settings~general-settings-Qj6SXl5X.js
// Synced alias: ref/webview/assets/app-initial~app-main~personalization-settings~appearance-settings~general-settings-DCerg-br.js.
// App info query signal backed by the app-host service bridge.
import {
  initQueryDurationConstants,
  queryDurations,
} from "./host-query-runtime";
import {
  appHostServices,
  initAppHostServicesRuntimeChunk,
} from "./app-host-services-runtime";
import {
  appScopeRoot,
  initSharedObjectAppScopeRoot,
} from "./shared-object-host-runtime";
import {
  createQuerySignal,
  initScopeRuntimeChunk,
} from "./scope-signal-runtime";

export type AppInfoQueryResult = Awaited<
  ReturnType<typeof appHostServices.appInfo.get>
>;

export function initAppInfoQueryRuntime(): void {
  initScopeRuntimeChunk();
  initAppHostServicesRuntimeChunk();
  initSharedObjectAppScopeRoot();
  initQueryDurationConstants();

  appInfoQuerySignal ??= createQuerySignal(appScopeRoot, () => ({
    queryKey: ["app-info"],
    queryFn: () => appHostServices.appInfo.get(),
    staleTime: queryDurations.INFINITE,
  }));
}

export let appInfoQuerySignal: unknown;
