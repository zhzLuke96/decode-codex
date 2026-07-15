// Restored from ref/webview/assets/persisted-signal-Djfqb095.js
// persisted-signal-Djfqb095 chunk restored from the Codex webview bundle.
import type { DraftThreadEntrypoint } from "./types";
const HOME_DRAFT_THREAD_LOCATION_ID = "new-conversation";
const PANEL_DRAFT_THREAD_LOCATION_ID = "panel-new-conversation";
const CLIENT_THREAD_ID_PREFIX = "client-new-thread:";
const LOCAL_THREAD_LOCATION_PREFIX = "local:";
const REMOTE_THREAD_LOCATION_PREFIX = "remote:";
const ROUTE_THREAD_LOCATION_PREFIX = "route:";
export type DraftThreadLocationId =
  | typeof HOME_DRAFT_THREAD_LOCATION_ID
  | typeof PANEL_DRAFT_THREAD_LOCATION_ID;
export function getDraftThreadLocationIdForEntrypoint({
  entrypoint,
}: {
  entrypoint: DraftThreadEntrypoint;
}): DraftThreadLocationId {
  return entrypoint === "home"
    ? HOME_DRAFT_THREAD_LOCATION_ID
    : PANEL_DRAFT_THREAD_LOCATION_ID;
}
export function isDraftThreadLocationId(locationId: string): boolean {
  return (
    locationId === HOME_DRAFT_THREAD_LOCATION_ID ||
    locationId === PANEL_DRAFT_THREAD_LOCATION_ID
  );
}
export function isClientThreadId(threadId: string): boolean {
  return threadId.startsWith(CLIENT_THREAD_ID_PREFIX);
}
export function createClientThreadId(): string {
  return `${CLIENT_THREAD_ID_PREFIX}${crypto.randomUUID()}`;
}
export function toLocalThreadLocationId(conversationId: string): string {
  return toStableThreadLocationId(
    `${LOCAL_THREAD_LOCATION_PREFIX}${conversationId}`,
  );
}
export function toRemoteThreadLocationId(taskId: string): string {
  return toStableThreadLocationId(`${REMOTE_THREAD_LOCATION_PREFIX}${taskId}`);
}
export function toRouteThreadLocationId(routeKey: string): string {
  return toStableThreadLocationId(`${ROUTE_THREAD_LOCATION_PREFIX}${routeKey}`);
}
export function toStableThreadLocationId(locationId: string): string {
  return locationId;
}
export function normalizeConversationId(conversationId: string): string {
  return conversationId;
}
