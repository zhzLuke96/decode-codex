// Restored from ref/webview/assets/app-server-manager-hooks-D4-J16ZL.js
// app-server-manager-hooks-D4-J16ZL chunk restored from the Codex webview bundle.
import React from "react";
import { featureGateSignal as readStatsigGate } from "../../runtime/feature-gate-runtime";
import {
  _appScopeA as useScopedAppValue,
  _appScopeO as useAppScope,
  appScopeRoot,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiU as queryTimes,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { useSelectableRemoteConnectionsState } from "../../remote/remote-connection-visibility";
import {
  DEFAULT_SIDEBAR_THREAD_SORT_KEY,
  sidebarThreadSortKeySignal,
} from "../../threads/sidebar-signals";
import {
  AppScopeLike,
  AppServerManager,
  AppServerManagerRegistry,
  HostId,
  RecentConversation,
  useAppServerManagerRegistry,
} from "./registry";
import {
  connectedOrLoginRequiredManagers,
  managersVisibleForRemoteHosts,
  subscribeToRegistryAndManagers,
} from "./registry-subscriptions";
type RecentConversationSortKey = "created_at" | "updated_at" | "recency_at";
type RecentConversationQueryKind =
  | "recent-conversations"
  | "recent-conversations-meta";
async function refreshRecentConversationsForHost(
  hostId: HostId,
  sortKey: RecentConversationSortKey,
): Promise<boolean> {
  return sendAppServerRequest("refresh-recent-conversations-for-host", {
    hostId,
    sortKey,
  })
    .then(() => true)
    .catch((error) => {
      vscodeLogger.warning("recent_conversations_refresh_failed", {
        safe: {
          sortKey,
        },
        sensitive: {
          error,
          hostId,
        },
      });
      return false;
    });
}
function serializeHostIdSet(hostIds: Set<HostId>): string {
  return JSON.stringify(
    Array.from(hostIds).sort((left, right) => left.localeCompare(right)),
  );
}
function deserializeHostIdSet(serializedHostIds: string): Set<HostId> {
  return new Set(JSON.parse(serializedHostIds));
}
function sortRecentConversations(
  conversations: RecentConversation[],
  sortKey: RecentConversationSortKey,
): RecentConversation[] {
  return conversations.sort((left, right) => {
    switch (sortKey) {
      case "created_at":
        return right.createdAt - left.createdAt;
      case "updated_at":
        return right.updatedAt - left.updatedAt;
      case "recency_at":
        return (
          (right.recencyAt ?? right.updatedAt) -
          (left.recencyAt ?? left.updatedAt)
        );
    }
  });
}
function getVisibleRecentConversations({
  appServerRegistry,
  enabledRemoteHostIds,
  sortKey,
}: {
  appServerRegistry: AppServerManagerRegistry;
  enabledRemoteHostIds: Set<HostId>;
  sortKey: RecentConversationSortKey;
}): RecentConversation[] {
  return sortRecentConversations(
    managersVisibleForRemoteHosts({
      appServerRegistry,
      enabledRemoteHostIds,
    }).flatMap((manager) => manager.getRecentConversations()),
    sortKey,
  );
}
async function refreshRecentConversations({
  scope,
  appServerRegistry,
  enabledRemoteHostIds,
  sortKey,
}: {
  scope: AppScopeLike;
  appServerRegistry: AppServerManagerRegistry;
  enabledRemoteHostIds: Set<HostId>;
  sortKey: RecentConversationSortKey;
}): Promise<RecentConversation[]> {
  const refreshed = await Promise.all(
    connectedOrLoginRequiredManagers(scope, appServerRegistry).map((manager) =>
      refreshRecentConversationsForHost(manager.getHostId(), sortKey),
    ),
  );
  if (!refreshed.includes(true)) {
    throw Error("Failed to refresh recent conversations");
  }
  return getVisibleRecentConversations({
    appServerRegistry,
    enabledRemoteHostIds,
    sortKey,
  });
}
function refreshMissingRecentConversations({
  scope,
  appServerRegistry,
  sortKey,
  refreshesInFlightHostIds,
}: {
  scope: AppScopeLike;
  appServerRegistry: AppServerManagerRegistry;
  sortKey: RecentConversationSortKey;
  refreshesInFlightHostIds: Set<HostId>;
}): void {
  for (const manager of connectedOrLoginRequiredManagers(
    scope,
    appServerRegistry,
  )) {
    const hostId = manager.getHostId();
    if (
      manager.hasFetchedRecentConversations ||
      refreshesInFlightHostIds.has(hostId)
    ) {
      continue;
    }
    refreshesInFlightHostIds.add(hostId);
    refreshRecentConversationsForHost(hostId, sortKey).finally(() => {
      refreshesInFlightHostIds.delete(hostId);
    });
  }
}
function subscribeToRecentConversationKind(
  queryKind: RecentConversationQueryKind,
  appServerRegistry: AppServerManagerRegistry,
  onStoreChange: () => void,
) {
  return subscribeToRegistryAndManagers({
    appServerRegistry,
    onStoreChange,
    subscribeToManager: (manager: AppServerManager, callback: () => void) => {
      switch (queryKind) {
        case "recent-conversations":
          return manager.addAnyConversationCallback(callback);
        case "recent-conversations-meta":
          return manager.addAnyConversationMetaCallback(callback);
      }
    },
  });
}
function useRecentConversationQuery(queryKind: RecentConversationQueryKind) {
  const scope = useAppScope(appScopeRoot) as AppScopeLike;
  const appServerRegistry = useAppServerManagerRegistry();
  const { enabledRemoteHostIdSet } = useSelectableRemoteConnectionsState();
  const serializedEnabledRemoteHostIds = serializeHostIdSet(
    enabledRemoteHostIdSet,
  );
  const useDefaultSortKey = useScopedAppValue(readStatsigGate, "12346831");
  const sidebarSortKey = useAppScopeValue(sidebarThreadSortKeySignal);
  const sortKey = (
    useDefaultSortKey ? DEFAULT_SIDEBAR_THREAD_SORT_KEY : sidebarSortKey
  ) as RecentConversationSortKey;
  const queryClient = useQueryClient();
  const refreshesInFlightHostIdsRef = React.useRef(new Set<HostId>());
  React.useEffect(() => {
    const updateCachedConversations = () => {
      const enabledRemoteHostIds = deserializeHostIdSet(
        serializedEnabledRemoteHostIds,
      );
      queryClient.setQueryData(
        [queryKind, sortKey, serializedEnabledRemoteHostIds],
        getVisibleRecentConversations({
          appServerRegistry,
          enabledRemoteHostIds,
          sortKey,
        }),
      );
      refreshMissingRecentConversations({
        scope,
        appServerRegistry,
        sortKey,
        refreshesInFlightHostIds: refreshesInFlightHostIdsRef.current,
      });
    };
    updateCachedConversations();
    return subscribeToRecentConversationKind(
      queryKind,
      appServerRegistry,
      updateCachedConversations,
    );
  }, [
    appServerRegistry,
    queryClient,
    queryKind,
    scope,
    serializedEnabledRemoteHostIds,
    sortKey,
  ]);
  return useQuery({
    queryKey: [queryKind, sortKey, serializedEnabledRemoteHostIds],
    refetchOnWindowFocus: "always",
    staleTime: queryTimes.INFINITE,
    structuralSharing: preserveArrayReferenceIfEqual,
    queryFn: () =>
      refreshRecentConversations({
        scope,
        appServerRegistry,
        enabledRemoteHostIds: deserializeHostIdSet(
          serializedEnabledRemoteHostIds,
        ),
        sortKey,
      }),
  });
}
function preserveArrayReferenceIfEqual<T>(previous: T, next: T): T {
  return Array.isArray(previous) &&
    Array.isArray(next) &&
    previous.length === next.length &&
    previous.every((item, index) => item === next[index])
    ? previous
    : next;
}
export function useRecentConversationsQuery() {
  return useRecentConversationQuery("recent-conversations");
}
export function useRecentConversationMetadataQuery() {
  return useRecentConversationQuery("recent-conversations-meta");
}
