// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Browser feature flags and route helpers used by local thread summaries.
import { browserSidebarAvailability } from "../browser/browser-sidebar-availability";
import { multiBrowserTabsEnabledAtom } from "../boundaries/onboarding-commons-externals.facade";
import { T_ as getRouteConversationIdRaw } from "../vendor/projects-app-shared-runtime";

export const NEW_TAB_TITLE = "New tab";

export const browserSidebarEnabledSignal = browserSidebarAvailability;
export const multiBrowserTabsEnabledSignal = multiBrowserTabsEnabledAtom;

export function getRouteConversationId(
  routeScopeSnapshot: unknown,
): string | null {
  return getRouteConversationIdRaw(routeScopeSnapshot) ?? null;
}

export function initBrowserFeatureAvailabilityRuntime(): void {}
