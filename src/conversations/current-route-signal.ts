// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js
// The application "current route" scope signal (a `RouteScope`, keyed by
// pathname+search). Read with useStore to obtain the active route scope, whose
// `.value` describes the current location; the scope is also passed as the scope
// argument to route-scoped helpers (draft/diff mutations, onboarding logging).
import { Ri as currentRouteSignalRef } from "../vendor/projects-app-shared-runtime";

/** Shape of the active route location held on the route scope `.value`. */
export interface RouteLocation {
  pathname?: string;
  search?: string | null;
  routeKind?: string;
  projectContext?: { projectId?: string | null } | null;
  clientThreadId?: string | null;
  conversationId?: string | null;
}

/** Route scope handle returned by `useStore(currentRouteSignal)`. */
export interface RouteScope {
  value: RouteLocation;
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, ...args: unknown[]): void;
}

/** Signal identifying the active {@link RouteScope}; use with useStore. */
export const currentRouteSignal = currentRouteSignalRef;
