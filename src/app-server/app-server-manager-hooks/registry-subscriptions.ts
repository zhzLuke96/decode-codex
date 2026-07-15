// Restored from ref/webview/assets/app-server-manager-hooks-D4-J16ZL.js
// app-server-manager-hooks-D4-J16ZL chunk restored from the Codex webview bundle.
import { getAppServerConnectionStateForHost } from "../../boundaries/thread-context-inputs.facade";
import type {
  AppScopeLike,
  AppServerManager,
  AppServerManagerRegistry,
  HostId,
  Unsubscribe,
} from "./registry";

type ManagerSubscription = {
  manager: AppServerManager;
  unsubscribe: Unsubscribe;
};

type RegistrySubscribeOptions = {
  appServerRegistry: AppServerManagerRegistry;
  onStoreChange: () => void;
  subscribeToManager: (
    manager: AppServerManager,
    onStoreChange: () => void,
  ) => Unsubscribe;
};

export function composeUnsubscribes(unsubscribes: Unsubscribe[]): Unsubscribe {
  return () => {
    for (const unsubscribe of unsubscribes) unsubscribe();
  };
}

export function subscribeToRegistryAndManagers({
  appServerRegistry,
  onStoreChange,
  subscribeToManager,
}: RegistrySubscribeOptions): Unsubscribe {
  const subscriptions = new Map<HostId, ManagerSubscription>();
  const syncSubscriptions = () => {
    const managers = appServerRegistry.getAll();
    const hostIds = new Set(managers.map((manager) => manager.getHostId()));
    for (const [hostId, subscription] of subscriptions) {
      if (!hostIds.has(hostId)) {
        subscription.unsubscribe();
        subscriptions.delete(hostId);
      }
    }
    for (const manager of managers) {
      const hostId = manager.getHostId();
      const existing = subscriptions.get(hostId);
      if (existing?.manager !== manager) {
        existing?.unsubscribe();
        subscriptions.set(hostId, {
          manager,
          unsubscribe: subscribeToManager(manager, onStoreChange),
        });
      }
    }
  };

  syncSubscriptions();
  return composeUnsubscribes([
    appServerRegistry.addRegistryCallback(() => {
      syncSubscriptions();
      onStoreChange();
    }),
    () => {
      for (const { unsubscribe } of subscriptions.values()) unsubscribe();
    },
  ]);
}

export function subscribeToConversations(
  appServerRegistry: AppServerManagerRegistry,
  onStoreChange: () => void,
): Unsubscribe {
  return subscribeToRegistryAndManagers({
    appServerRegistry,
    onStoreChange,
    subscribeToManager: (manager, callback) =>
      composeUnsubscribes([
        manager.addAnyConversationCallback(callback),
        manager.addAnyConversationMetaCallback(callback),
      ]),
  });
}

export function managersVisibleForRemoteHosts({
  appServerRegistry,
  enabledRemoteHostIds,
}: {
  appServerRegistry: AppServerManagerRegistry;
  enabledRemoteHostIds: Set<HostId>;
}): AppServerManager[] {
  const defaultHostId = appServerRegistry.getDefault().getHostId();
  return appServerRegistry
    .getAll()
    .filter((manager) =>
      manager.getHostId() === defaultHostId
        ? true
        : enabledRemoteHostIds.has(manager.getHostId()),
    );
}

export function connectedOrLoginRequiredManagers(
  scope: AppScopeLike,
  appServerRegistry: AppServerManagerRegistry,
): AppServerManager[] {
  const defaultHostId = appServerRegistry.getDefault().getHostId();
  return appServerRegistry.getAll().filter((manager) => {
    const hostId = manager.getHostId();
    if (hostId === defaultHostId) return true;
    const { error, state } = getAppServerConnectionStateForHost(scope, hostId);
    return state === "connected" || error?.code === "login-required";
  });
}
