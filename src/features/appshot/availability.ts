// Restored from ref/webview/assets/appshot-availability-BgG_Trde.js
// Appshot availability is gated by platform, Statsig, and per-host config requirements.
import { featureGateSignal as readStatsigGate } from "../../runtime/feature-gate-runtime";
import {
  _appScopeC as createAppScopeSelector,
  _appScopeL as createAppScopeFamily,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { selectedHostIdSignal } from "../../boundaries/thread-context-inputs.facade";
import { configRequirementsQueryOptions } from "../../config/config-queries";
import { platformSignal } from "../../runtime/platform";
const APP_SHOT_FEATURE_GATE = "1304276663";
const appshotAvailabilityByHost = createAppScopeFamily(
  appScopeRoot,
  (
    hostId: string,
    {
      get,
    }: {
      get: <Value>(signal: unknown, key?: unknown) => Value;
    },
  ) => {
    if (
      get(platformSignal) !== "macOS" ||
      !get(readStatsigGate, APP_SHOT_FEATURE_GATE)
    ) {
      return false;
    }
    const { data } = get<{
      data?: {
        requirements?: {
          allowAppshots?: boolean;
        } | null;
      } | null;
    }>(configRequirementsQueryOptions, {
      hostId,
    });
    return data != null && data.requirements?.allowAppshots !== false;
  },
);
const selectedHostAppshotAvailability = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get: <Value>(signal: unknown, key?: unknown) => Value }) =>
    get(appshotAvailabilityByHost, get(selectedHostIdSignal)),
);
export { appshotAvailabilityByHost, selectedHostAppshotAvailability };
