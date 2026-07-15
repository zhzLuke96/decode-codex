// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js
// App wrapper around the Statsig feature-gate hook. Reads the gate's boolean
// value from the active StatsigClient provided by CodexStatsigProvider.
import { useGateValue } from "../vendor/statsig-current-runtime";

export function useFeatureGate(gateName: string): boolean {
  return useGateValue(gateName);
}
