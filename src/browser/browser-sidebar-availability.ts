// Restored from ref/webview/assets/browser-sidebar-availability-B0FcnqMw.js
// AppScope selector that controls whether browser sidebar surfaces are available.
import {
  _appScopeC as createAppScopeSelector,
  appScopeRoot,
} from "../boundaries/app-scope";
import { selectedHostIdSignal } from "../boundaries/thread-context-inputs.facade";
import { experimentalFeaturesQueryOptions } from "../features/experimental-features/queries";
const IN_APP_BROWSER_FEATURE_NAME = "in_app_browser";
type ExperimentalFeature = {
  enabled?: boolean;
  name: string;
};
const browserSidebarAvailability = createAppScopeSelector(
  appScopeRoot,
  ({
    get,
  }: {
    get: <Value>(signal: unknown, key?: unknown) => Value;
  }): boolean => {
    const { data } = get<{
      data?: ExperimentalFeature[] | null;
    }>(experimentalFeaturesQueryOptions, get(selectedHostIdSignal));
    const browserFeature = data?.find(
      (feature) => feature.name === IN_APP_BROWSER_FEATURE_NAME,
    );
    return data != null && browserFeature?.enabled !== false;
  },
);
export { browserSidebarAvailability };
