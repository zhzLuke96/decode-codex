// Restored from ref/webview/assets/use-is-plugins-enabled-Dn_J-WZf.js
// use-is-plugins-enabled-Dn_J-WZf chunk restored from the Codex webview bundle.
import { _appScopeA as useAppScopeQueryValue } from "../../boundaries/app-scope";
import { experimentalFeaturesQueryOptions } from "../../features/experimental-features/queries";
import {
  PLUGINS_FEATURE_NAME,
  type ExperimentalFeaturesQueryResult,
} from "./types";
function usePluginsEnabled({ hostId }: { hostId: string }): boolean {
  const { data = [] } = useAppScopeQueryValue(
    experimentalFeaturesQueryOptions,
    hostId,
  ) as Pick<ExperimentalFeaturesQueryResult, "data">;
  return (
    data.find((feature) => feature.name === PLUGINS_FEATURE_NAME)?.enabled ??
    true
  );
}
export { usePluginsEnabled };
