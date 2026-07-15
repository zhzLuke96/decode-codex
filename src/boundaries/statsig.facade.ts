// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Compatibility facade for restored modules that imported Statsig through a
// cross-slice boundary before the current vendor runtime was isolated.

export { useFeatureGate } from "../statsig/use-feature-gate";
export {
  StableID,
  StatsigClient,
  StatsigMetadataProvider,
  StatsigProvider,
  StatsigSession,
  useClientAsyncInit,
  useDynamicConfig,
  useGateValue,
  useLayer,
  useStatsigClient,
} from "../vendor/statsig-current-runtime";
