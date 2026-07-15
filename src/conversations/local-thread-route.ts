// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Local-thread route helpers shared by composer, app-shell source registration, and local conversation frames.
export type LocalThreadRouteValue = {
  conversationId?: string | null;
  routeKind: string;
};

export function getLocalThreadConversationIdFromRoute(
  route: LocalThreadRouteValue,
): string | null | undefined {
  return route.routeKind === "local-thread" ? route.conversationId : null;
}
