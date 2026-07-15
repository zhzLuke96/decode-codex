// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Query signal for the host-provided list-automations endpoint.

import {
  appScopeRoot,
  createVscodeQueryOptions,
  initAppScopeRuntime,
  initQueryDurationConstants,
  initVscodeApiBridge,
  queryDurations,
} from "../../runtime/automation-schedule-runtime";
import { once } from "../../runtime/commonjs-interop";

export let automationsQuerySignal: unknown;

export const initAutomationsQueryChunk = once(() => {
  initAppScopeRuntime();
  initQueryDurationConstants();
  initVscodeApiBridge();
  automationsQuerySignal = createVscodeQueryOptions(
    appScopeRoot,
    "list-automations",
    {
      enabled: true,
      refetchInterval: queryDurations.ONE_MINUTE,
      staleTime: queryDurations.ONE_MINUTE,
    },
  );
});
