// Restored from ref/webview/assets/app-server-manager-hooks-D4-J16ZL.js
// app-server-manager-hooks-D4-J16ZL chunk restored from the Codex webview bundle.
import React from "react";
import { subscribeToConversations } from "./registry-subscriptions";
import {
  _appScopeA as useScopedAppValue,
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  allAppServerManagersSignal,
  appServerConnectionManagerSignal,
  appServerRegistryVersionSignal,
  conversationAppServerManagerOverrideSignal,
  defaultAppServerManagerSignal,
  getAppServerManagerForConversationId,
  hostManagerStoreSignal,
  registeredAppServerHostIdsSignal,
  setAppServerConnectionState,
  wrapAppServerManager,
} from "../../boundaries/thread-context-inputs.facade";
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
export type HostId = string;
export type Unsubscribe = () => void;
export type AppScopeLike = {
  get<T = unknown>(signal: unknown, ...args: unknown[]): T;
  set(signal: unknown, ...args: unknown[]): void;
  watch(callback: (scope: AppScopeLike) => void): Unsubscribe;
};
export type RecentConversation = {
  createdAt: number;
  updatedAt: number;
  recencyAt?: number | null;
};
export type AppServerManager = {
  addAnyConversationCallback(callback: () => void): Unsubscribe;
  addAnyConversationMetaCallback(callback: () => void): Unsubscribe;
  addConfigNoticeCallback(callback: () => void): Unsubscribe;
  getConfigNotices(): unknown;
  getHostId(): HostId;
  getRecentConversations(): RecentConversation[];
  hasFetchedRecentConversations?: boolean;
};
export class AppServerManagerRegistry {
  constructor(private readonly scope: AppScopeLike) {}
  addManager(manager: AppServerManager): void {
    const hostId = manager.getHostId();
    this.scope.set(registeredAppServerHostIdsSignal, (hostIds: HostId[]) =>
      hostIds.includes(hostId) ? hostIds : [...hostIds, hostId],
    );
    this.scope.set(hostManagerStoreSignal, hostId, manager);
    this.scope.set(
      appServerConnectionManagerSignal,
      hostId,
      wrapAppServerManager(manager),
    );
    this.notifyRegistryChanged();
  }
  addRegistryCallback(callback: () => void): Unsubscribe {
    let didReadInitialSnapshot = false;
    return this.scope.watch((scope) => {
      scope.get(appServerRegistryVersionSignal);
      if (didReadInitialSnapshot) {
        callback();
      } else {
        didReadInitialSnapshot = true;
      }
    });
  }
  deleteManager(hostId: HostId): void {
    this.scope.set(registeredAppServerHostIdsSignal, (hostIds: HostId[]) =>
      hostIds.filter((item) => item !== hostId),
    );
    this.scope.set(appServerConnectionManagerSignal, hostId, null);
    this.scope.set(hostManagerStoreSignal, hostId, null);
    setAppServerConnectionState(this.scope, {
      error: null,
      hostId,
      source: "registry_delete_manager",
      state: "disconnected",
    });
    this.notifyRegistryChanged();
  }
  getAll(): AppServerManager[] {
    return this.scope.get(allAppServerManagersSignal);
  }
  getDefault(): AppServerManager {
    return this.scope.get(defaultAppServerManagerSignal);
  }
  getForConversationId(conversationId: string): AppServerManager {
    const manager = this.getMaybeForConversationId(conversationId);
    if (manager != null) return manager;
    throw Error(
      `No AppServerManager registered for conversationId: ${conversationId}`,
    );
  }
  getForHostId(hostId: HostId): AppServerManager | null {
    return this.scope
      .get<HostId[]>(registeredAppServerHostIdsSignal)
      .includes(hostId)
      ? this.scope.get(appServerConnectionManagerSignal, hostId)
      : null;
  }
  getImplForHostId(hostId: HostId): AppServerManager | null {
    return this.scope
      .get<HostId[]>(registeredAppServerHostIdsSignal)
      .includes(hostId)
      ? this.scope.get(hostManagerStoreSignal, hostId)
      : null;
  }
  getForHostIdOrThrow(hostId: HostId): AppServerManager {
    const manager = this.getForHostId(hostId);
    if (manager != null) return manager;
    throw Error(`No AppServerManager registered for hostId: ${hostId}`);
  }
  getForHostIdOrThrowWhenDefaultHost(hostId: HostId): AppServerManager | null {
    const manager = this.getForHostId(hostId);
    if (manager != null) return manager;
    if (hostId === LOCAL_HOST_ID) {
      throw Error(`No AppServerManager registered for hostId: ${hostId}`);
    }
    return null;
  }
  getMaybeForConversationId(conversationId: string): AppServerManager | null {
    return getAppServerManagerForConversationId(this.scope, conversationId);
  }
  notifyRegistryChanged(): void {
    this.scope.set(
      appServerRegistryVersionSignal,
      (version: number) => version + 1,
    );
  }
}
export function useAppServerManagerRegistry(): AppServerManagerRegistry {
  const scope = useAppScope(appScopeRoot) as AppScopeLike;
  const [registry] = React.useState(() => new AppServerManagerRegistry(scope));
  return React.useSyncExternalStore(
    (onStoreChange) => registry.addRegistryCallback(onStoreChange),
    () => registry,
  );
}
export function useAppServerManagerForHost(
  hostId: HostId,
): AppServerManager | null {
  const registry = useAppServerManagerRegistry();
  return React.useSyncExternalStore(
    (onStoreChange) => registry.addRegistryCallback(onStoreChange),
    () => registry.getForHostId(hostId),
  );
}
export function useRequiredAppServerManagerForHost(
  hostId: HostId,
): AppServerManager {
  const manager = useAppServerManagerForHost(hostId);
  if (manager == null) {
    throw Error(`AppServerManager for host ${hostId} not found`);
  }
  return manager;
}
export function useAppServerManager(
  conversationId?: string | null,
): AppServerManager {
  const overrideManager = useScopedAppValue(
    conversationAppServerManagerOverrideSignal,
    conversationId,
  ) as AppServerManager | null | undefined;
  const registry = useAppServerManagerRegistry();
  const subscribe = (onStoreChange: () => void) =>
    conversationId == null
      ? registry.addRegistryCallback(onStoreChange)
      : subscribeToConversations(registry, onStoreChange);
  const getSnapshot = () =>
    conversationId == null
      ? registry.getDefault()
      : registry.getForConversationId(conversationId);
  const registryManager = React.useSyncExternalStore(subscribe, getSnapshot);
  return overrideManager ?? registryManager;
}
function noopSubscribe(): void {}
function useMaybeAppServerManager(
  conversationId?: string | null,
): AppServerManager | null {
  const overrideManager = useScopedAppValue(
    conversationAppServerManagerOverrideSignal,
    conversationId,
  ) as AppServerManager | null | undefined;
  const registry = useAppServerManagerRegistry();
  const subscribe = (onStoreChange: () => void) =>
    conversationId == null
      ? noopSubscribe
      : subscribeToConversations(registry, onStoreChange);
  const getSnapshot = () =>
    conversationId == null
      ? null
      : registry.getMaybeForConversationId(conversationId);
  const registryManager = React.useSyncExternalStore(subscribe, getSnapshot);
  return overrideManager ?? registryManager;
}
export function useAppServerManagerWithLocalFallback(
  conversationId?: string | null,
): AppServerManager {
  return (
    useMaybeAppServerManager(conversationId) ??
    useRequiredAppServerManagerForHost(LOCAL_HOST_ID)
  );
}
