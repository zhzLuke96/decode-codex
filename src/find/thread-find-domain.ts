// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Domain helpers for cycling the thread find bar between conversation, diff, and browser search.
import type { ThreadFindDomain } from "./thread-find-atoms";

export type ThreadFindDomainAvailability = {
  currentDomain: ThreadFindDomain;
  hasBrowserTarget: boolean;
  hasDiffSource: boolean;
};

export function getNextThreadFindDomain({
  currentDomain,
  hasBrowserTarget,
  hasDiffSource,
}: ThreadFindDomainAvailability): ThreadFindDomain {
  const availableDomains: ThreadFindDomain[] = ["conversation"];
  if (hasDiffSource) {
    availableDomains.push("diff");
  }
  if (hasBrowserTarget) {
    availableDomains.push("browser");
  }
  return (
    availableDomains[
      (availableDomains.indexOf(currentDomain) + 1) % availableDomains.length
    ] ?? "conversation"
  );
}
