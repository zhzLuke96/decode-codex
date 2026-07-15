// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Helpers for app-shell route-derived thread identity and browser tab ids.
import { getDraftThreadLocationIdForEntrypoint } from "../runtime/persisted-signal/route-ids";

export type AppViewRouteForThreadId =
  | {
      routeKind: "client-local-thread";
      clientThreadId: string;
    }
  | {
      routeKind: "local-thread" | "chatgpt-thread";
      conversationId: string;
    }
  | {
      routeKind: "remote-thread";
      taskId: string;
    }
  | {
      routeKind: "home" | "new-thread-panel" | "other";
    };

export function getRouteThreadId(
  route: AppViewRouteForThreadId,
): string | null {
  switch (route.routeKind) {
    case "home":
      return getDraftThreadLocationIdForEntrypoint({ entrypoint: "home" });
    case "new-thread-panel":
      return getDraftThreadLocationIdForEntrypoint({ entrypoint: "panel" });
    case "client-local-thread":
      return route.clientThreadId;
    case "local-thread":
    case "chatgpt-thread":
      return route.conversationId;
    case "remote-thread":
      return route.taskId;
    case "other":
      return null;
  }
}

export function normalizeBrowserTabId(browserTabId: string): string {
  return browserTabId;
}
