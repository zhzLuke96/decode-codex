// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// State atoms and pure helpers used by the split NewThreadComposerBody runtime.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { activeFollowUpAtom } from "./composer-atoms";

export const appConnectClaimedFollowUpQuery = appScopeUnderscore(
  appScopeRoot,
  () => ({ isAppConnectCallbackClaimed: false }),
);

export function buildComposerAnalyticsId(value: unknown): string | null {
  if (typeof value === "string" && value.length > 0) return value;
  if (value == null || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const id =
    record.conversationId ??
    record.localConversationId ??
    record.taskId ??
    record.id;
  return typeof id === "string" && id.length > 0 ? id : null;
}

export function buildNewThreadClientId({
  entrypoint,
}: {
  entrypoint?: string | null;
} = {}): string {
  const suffix =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `client-new-thread:${entrypoint ?? "home"}:${suffix}`;
}

export function buildContextualLeadingItems(items: unknown): unknown[] {
  return Array.isArray(items) ? items : [];
}

Object.assign(buildContextualLeadingItems, {
  id: "composer-contextual-leading-items",
  read: () => [],
});

export const composerDropTargetPortalContext = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const composerEnterBehaviorFamily = appScopeUnderscore(
  appScopeRoot,
  () => "send",
);
export const composerModeForScopeAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const composerPrefillCwdAtom = appScopeUnderscore(
  appScopeRoot,
  () => null,
);
export const isBackgroundThreadHydratedAtom = appScopeUnderscore(
  appScopeRoot,
  () => false,
);
export const isFollowUpHydratedAtom = activeFollowUpAtom;
export const projectAssignmentsQuery = appScopeUnderscore(
  appScopeRoot,
  () => ({}),
);
