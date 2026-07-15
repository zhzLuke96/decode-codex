// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Sidebar unread-activity inputs used by the onboarding boundary.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";

export const automationActivitySummarySignal = appScopeUnderscore(
  appScopeRoot,
  () => ({
    automationThreadIds: new Set<string>(),
    unreadRunCount: 0,
  }),
);

export const pendingActivityThreadsSignal = appScopeUnderscore(
  appScopeRoot,
  () => [] as unknown[],
);

export function getAutomationThreadId(thread: unknown): string | null {
  if (thread == null || typeof thread !== "object") return null;
  const candidate = thread as {
    automationThreadId?: unknown;
    targetThreadId?: unknown;
    threadId?: unknown;
  };
  for (const value of [
    candidate.automationThreadId,
    candidate.targetThreadId,
    candidate.threadId,
  ]) {
    if (typeof value === "string" && value.length > 0) return value;
  }
  return null;
}
