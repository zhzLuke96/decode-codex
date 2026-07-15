// Restored from ref/webview/assets/persisted-signal-Djfqb095.js
// persisted-signal-Djfqb095 chunk restored from the Codex webview bundle.
import { matchPath } from "../../vendor/react-router";
import {
  getDraftThreadLocationIdForEntrypoint,
  normalizeConversationId,
  toLocalThreadLocationId,
  toRemoteThreadLocationId,
  toRouteThreadLocationId,
} from "./route-ids";
import type {
  ParseRouteLocationInput,
  ProjectRouteContext,
  RouteLocation,
} from "./types";
const LOCAL_THREAD_PATH_PATTERN = "/local/:conversationId";
const HOTKEY_LOCAL_THREAD_PATH_PATTERN =
  "/hotkey-window/thread/:conversationId";
const REMOTE_THREAD_PATH_PATTERN = "/remote/:taskId";
const HOTKEY_REMOTE_THREAD_PATH_PATTERN = "/hotkey-window/remote/:taskId";
const HOTKEY_NEW_THREAD_PATH = "/hotkey-window/new-thread";
export function getRouteThreadLocationId(routeLocation: RouteLocation): string {
  switch (routeLocation.routeKind) {
    case "home":
      return getDraftThreadLocationIdForEntrypoint({
        entrypoint: "home",
      });
    case "new-thread-panel":
      return getDraftThreadLocationIdForEntrypoint({
        entrypoint: "panel",
      });
    case "local-thread":
      return toLocalThreadLocationId(routeLocation.conversationId);
    case "remote-thread":
      return toRemoteThreadLocationId(routeLocation.taskId);
    case "chatgpt-thread":
      return toRouteThreadLocationId(`chatgpt:${routeLocation.conversationId}`);
    case "other":
      return toRouteThreadLocationId(routeLocation.routeTemplate);
  }
}
export function getLocalConversationId(
  routeLocation: RouteLocation,
): string | null {
  return routeLocation.routeKind === "local-thread"
    ? routeLocation.conversationId
    : null;
}
export function getRouteThreadId(routeLocation: RouteLocation): string | null {
  switch (routeLocation.routeKind) {
    case "home":
      return getDraftThreadLocationIdForEntrypoint({
        entrypoint: "home",
      });
    case "new-thread-panel":
      return getDraftThreadLocationIdForEntrypoint({
        entrypoint: "panel",
      });
    case "local-thread":
      return routeLocation.conversationId;
    case "chatgpt-thread":
      return routeLocation.conversationId;
    case "remote-thread":
      return routeLocation.taskId;
    case "other":
      return null;
  }
}
export function parseRouteLocation({
  pathname,
  routeTemplate,
  search = "",
}: ParseRouteLocationInput): RouteLocation {
  const localConversationId =
    matchPath(LOCAL_THREAD_PATH_PATTERN, pathname)?.params.conversationId ??
    matchPath(HOTKEY_LOCAL_THREAD_PATH_PATTERN, pathname)?.params
      .conversationId;
  if (localConversationId != null) {
    return {
      conversationId: normalizeConversationId(localConversationId),
      pathname,
      projectContext: parseProjectRouteContext(search),
      routeKind: "local-thread",
      routeTemplate,
      search,
    };
  }
  const remoteTaskId =
    matchPath(REMOTE_THREAD_PATH_PATTERN, pathname)?.params.taskId ??
    matchPath(HOTKEY_REMOTE_THREAD_PATH_PATTERN, pathname)?.params.taskId;
  if (remoteTaskId != null) {
    return {
      pathname,
      routeKind: "remote-thread",
      routeTemplate,
      search,
      taskId: remoteTaskId,
    };
  }
  if (pathname === "/projects") {
    const projectContext = parseProjectRouteContext(search);
    if (projectContext != null) {
      return {
        pathname,
        projectContext,
        routeKind: "home",
        routeTemplate,
        search,
      };
    }
  }
  if (pathname === "/" || pathname === "/hotkey-window") {
    return {
      pathname,
      projectContext: null,
      routeKind: "home",
      routeTemplate,
      search,
    };
  }
  if (
    pathname === "/extension/panel/new" ||
    pathname === HOTKEY_NEW_THREAD_PATH
  ) {
    return {
      pathname,
      routeKind: "new-thread-panel",
      routeTemplate,
      search,
    };
  }
  return {
    pathname,
    routeKind: "other",
    routeTemplate,
    search,
  };
}
function parseProjectRouteContext(search: string): ProjectRouteContext | null {
  const searchParams = new URLSearchParams(search);
  const projectId = searchParams.get("projectId");
  return projectId == null
    ? null
    : {
        hostId: searchParams.get("hostId"),
        projectId,
      };
}
