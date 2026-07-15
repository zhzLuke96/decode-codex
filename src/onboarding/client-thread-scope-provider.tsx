// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scope provider that resolves a route into its client-thread id, exposes it on
// the client-thread scope, and normalizes a `client-local-thread` route into a
// concrete `local-thread` route once the backing conversation id is known.
import type { ReactNode } from "react";
// Scope primitives + thread signals (aliases `pe`, `ye`, `X`, `jn`, `Pa`, `Z`,
// `Xs`, `us`, `ml`, `Ge`) come from the sibling scope chunk that has not been
// restored yet; imported here by role.
import {
  ScopeProvider,
  clientThreadScope,
  routeScope,
  clientThreadByIdSignal,
  clientThreadIdByRouteSignal,
  getClientThreadScopeKey,
  isNonEmptyClientThreadId,
  useScopedSignalValue,
  useAppScopeValue,
  createComputedSignal,
} from "../boundaries/thread-scope.facade";

type ClientThreadRoute = {
  routeKind: string;
  pathname: string;
  routeTemplate: string;
  search: string;
  conversationId?: string | null;
  projectContext?: unknown;
};

type ClientThreadScopeProviderProps = {
  children: ReactNode;
  route: ClientThreadRoute;
};

const resolvedClientThreadIdSignal = createComputedSignal(
  clientThreadScope,
  ({
    get,
    scope,
  }: {
    get: <T>(signal: unknown, key: string) => T;
    scope: { value: { clientThreadId: string } };
  }) => {
    const { clientThreadId } = scope.value;
    return isNonEmptyClientThreadId(clientThreadId)
      ? get<string | null>(clientThreadByIdSignal, clientThreadId)
      : null;
  },
);

export function ClientThreadScopeProvider({
  children,
  route,
}: ClientThreadScopeProviderProps) {
  const scopeKey = getClientThreadScopeKey(route);
  const clientThreadId = useScopedSignalValue<string>(
    clientThreadIdByRouteSignal,
    scopeKey,
  );
  return (
    <ScopeProvider scope={clientThreadScope} value={{ clientThreadId }}>
      <ClientThreadRouteScope route={route}>{children}</ClientThreadRouteScope>
    </ScopeProvider>
  );
}

function ClientThreadRouteScope({
  children,
  route,
}: ClientThreadScopeProviderProps) {
  const resolvedConversationId = useAppScopeValue<string | null>(
    resolvedClientThreadIdSignal,
  );
  const resolvedRoute: ClientThreadRoute =
    route.routeKind !== "client-local-thread" || resolvedConversationId == null
      ? route
      : {
          conversationId: resolvedConversationId,
          pathname: route.pathname,
          projectContext: null,
          routeKind: "local-thread",
          routeTemplate: route.routeTemplate,
          search: route.search,
        };
  return (
    <ScopeProvider scope={routeScope} value={resolvedRoute}>
      {children}
    </ScopeProvider>
  );
}

export function initClientThreadScopeProviderChunk(): void {}
