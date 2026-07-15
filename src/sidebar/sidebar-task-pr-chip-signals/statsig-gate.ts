// Restored from ref/webview/assets/sidebar-task-pr-chip-signals-CaOVWYGm.js
// sidebar-task-pr-chip-signals-CaOVWYGm chunk restored from the Codex webview bundle.
import { _appScopeL, appScopeRoot } from "../../boundaries/app-scope";
import type { StatsigClientLike, StatsigGlobalLike } from "./types";
function getStatsigGlobal(): StatsigGlobalLike | null {
  return (
    (
      globalThis as {
        __STATSIG__?: StatsigGlobalLike;
      }
    ).__STATSIG__ ?? null
  );
}
function getStatsigClient(): StatsigClientLike | null {
  const statsigGlobal = getStatsigGlobal();
  if (statsigGlobal == null) return null;
  const globalInstance = statsigGlobal.instance?.();
  if (globalInstance != null) return globalInstance;
  if (statsigGlobal.firstInstance != null) return statsigGlobal.firstInstance;
  const [firstNamedInstance] = Object.values(statsigGlobal.instances ?? {});
  return firstNamedInstance ?? null;
}
function getStatsigGateValue(gateName: string): boolean {
  return getStatsigClient()?.checkGate(gateName) ?? false;
}
export const sidebarPullRequestIconGateSignal = _appScopeL(
  appScopeRoot,
  (gateName: string): boolean => getStatsigGateValue(gateName),
);
