// Restored from ref/webview/assets/persisted-signal-Djfqb095.js
// persisted-signal-Djfqb095 chunk restored from the Codex webview bundle.
import {
  appScopeG as createAppScopeSignal,
  appScopeH as createScopedScope,
  appScopeL as createDerivedScopedAtom,
  appScopeT as appScopeRoot,
  appScopeU as createScopedResolver,
  appScopeUnderscore as createScopedAtom,
} from "../../boundaries/app-scope";
import {
  getPersistedAtomValue,
  setPersistedAtomItem,
  subscribePersistedAtomValue,
} from "../../utils/persisted-atom-store";
import {
  createClientThreadId,
  getDraftThreadLocationIdForEntrypoint,
  isClientThreadId,
  isDraftThreadLocationId,
  normalizeConversationId,
  toLocalThreadLocationId,
} from "./route-ids";
import { getRouteThreadId } from "./routes";
import type {
  CommitClientThreadOptions,
  PersistedSignalInitialValue,
  PersistedSignalSubscriber,
  RouteLocation,
  ScopedAtomMountEvent,
  ScopedAtomSetter,
  ThreadRouteScopeValue,
  ThreadScopeStore,
} from "./types";
export const threadScope = createScopedScope("ThreadScope", {
  key: (value: ThreadRouteScopeValue) => value.clientThreadId,
  parent: appScopeRoot,
  retain: {
    max: 20,
  },
});
const conversationThreadIdAtom = createScopedAtom(
  appScopeRoot,
  () => null as string | null,
);
const draftThreadIdAtom = createScopedAtom(appScopeRoot, createClientThreadId);
export const resolvedThreadLocationIdAtom = createDerivedScopedAtom(
  appScopeRoot,
  (
    locationId: string,
    {
      get,
    }: {
      get<TValue>(atom: unknown, key: string): TValue;
    },
  ) =>
    isDraftThreadLocationId(locationId)
      ? get<string>(draftThreadIdAtom, locationId)
      : (get<string | null>(conversationThreadIdAtom, locationId) ??
        locationId),
);
export function commitClientThreadToConversation(
  threadScopeStore: ThreadScopeStore,
  { conversationId, draftThreadLocationId }: CommitClientThreadOptions,
): void {
  const { clientThreadId } = threadScopeStore.value;
  if (!isClientThreadId(clientThreadId)) {
    throw Error("Expected a client-created thread");
  }
  threadScopeStore.set(
    conversationThreadIdAtom,
    toLocalThreadLocationId(conversationId),
    clientThreadId,
  );
  refreshDraftThreadId(threadScopeStore, {
    clientThreadId,
    draftThreadLocationId,
  });
}
function refreshDraftThreadId(
  threadScopeStore: ThreadScopeStore,
  {
    clientThreadId,
    draftThreadLocationId,
  }: {
    clientThreadId: string;
    draftThreadLocationId: string;
  },
): void {
  if (
    threadScopeStore.get<string>(draftThreadIdAtom, draftThreadLocationId) ===
    clientThreadId
  ) {
    threadScopeStore.set(
      draftThreadIdAtom,
      draftThreadLocationId,
      createClientThreadId(),
    );
  }
}
export function getCurrentThreadIdForConversation(
  threadScopeStore: ThreadScopeStore,
  conversationId: string,
): string {
  return threadScopeStore.get(
    resolvedThreadLocationIdAtom,
    toLocalThreadLocationId(conversationId),
  );
}
export function isDraftClientThreadIdActive(
  threadScopeStore: ThreadScopeStore,
  threadId: string,
): boolean {
  return isClientThreadId(threadId)
    ? threadScopeStore.get<string>(
        draftThreadIdAtom,
        getDraftThreadLocationIdForEntrypoint({
          entrypoint: "home",
        }),
      ) === threadId ||
        threadScopeStore.get<string>(
          draftThreadIdAtom,
          getDraftThreadLocationIdForEntrypoint({
            entrypoint: "panel",
          }),
        ) === threadId
    : false;
}
export const routeScope = createScopedScope("RouteScope", {
  key: ({ pathname, search }: Pick<RouteLocation, "pathname" | "search">) =>
    `${pathname}${search ?? ""}`,
  parent: threadScope,
  retain: {
    max: 20,
  },
});
export function getThreadIdFromRouteScopeValue({
  value,
}: {
  value: ThreadRouteScopeValue;
}): string | null {
  const routeThreadId = getRouteThreadId(value);
  return routeThreadId == null
    ? null
    : isClientThreadId(value.clientThreadId)
      ? value.clientThreadId
      : routeThreadId;
}
export function resolveThreadIdToClientDraft(
  threadScopeStore: ThreadScopeStore,
  threadId: string,
): string {
  if (isClientThreadId(threadId)) {
    return threadId;
  }
  const resolvedThreadId = getCurrentThreadIdForConversation(
    threadScopeStore,
    normalizeConversationId(threadId),
  );
  return isClientThreadId(resolvedThreadId) ? resolvedThreadId : threadId;
}
export function createPersistedSignal<TValue>(
  key: string,
  initialValue: TValue,
) {
  registerPersistedSignalInitialValue({
    initialValue,
    key,
  });
  return {
    cache: "signal",
    resolve(scope: unknown, chain: unknown) {
      return dynamicSignalResolver.resolve(scope, chain, key).value$.atom;
    },
    scope: appScopeRoot,
  };
}
export function createPersistedAtomSignal<TKey, TValue>(
  storageKeyForScopeKey: (key: TKey) => string,
  defaultValue: TValue,
) {
  const persistedAtom = createScopedAtom(
    appScopeRoot,
    (scopeKey: TKey) =>
      getPersistedAtomValue(storageKeyForScopeKey(scopeKey), defaultValue),
    {
      onMount(
        setAtomValue: ScopedAtomSetter<TValue>,
        event: ScopedAtomMountEvent<TKey>,
      ) {
        const storageKey = storageKeyForScopeKey(event.key);
        let updatingFromStorage = false;
        let currentValue = getPersistedAtomValue(storageKey, defaultValue);
        setAtomValue(currentValue);
        const unsubscribeStorage = subscribePersistedAtomValue(
          storageKey,
          defaultValue,
          (nextValue: TValue) => {
            updatingFromStorage = true;
            currentValue = nextValue;
            try {
              setAtomValue(nextValue);
            } finally {
              updatingFromStorage = false;
            }
          },
        );
        const unwatchScope = event.watch(({ get }) => {
          const nextValue = get<TValue>(persistedAtom, event.key);
          if (!updatingFromStorage && !Object.is(nextValue, currentValue)) {
            currentValue = nextValue;
            setPersistedAtomItem(storageKey, nextValue);
          }
        });
        return () => {
          unsubscribeStorage();
          unwatchScope();
        };
      },
    },
  );
  return persistedAtom;
}
const persistedSignalInitialValueMap = new Map<
  string,
  PersistedSignalInitialValue
>();
const persistedSignalSubscribers = new Set<PersistedSignalSubscriber>();
let notifyPersistedSignalSubscribersQueued = false;
export const persistedSignalInitialValuesSignal = createAppScopeSignal(
  appScopeRoot,
  [],
);
export const dynamicSignalResolver = createScopedResolver(
  appScopeRoot,
  (
    key: string,
    {
      signal,
    }: {
      signal<TValue>(value: TValue): TValue;
    },
  ) => ({
    key,
    value$: signal(undefined),
  }),
);
export function subscribePersistedSignalInitialValues(
  subscriber: PersistedSignalSubscriber,
): () => void {
  persistedSignalSubscribers.add(subscriber);
  subscriber(Array.from(persistedSignalInitialValueMap.values()));
  return () => {
    persistedSignalSubscribers.delete(subscriber);
  };
}
function registerPersistedSignalInitialValue(
  initialValue: PersistedSignalInitialValue,
): void {
  if (!persistedSignalInitialValueMap.has(initialValue.key)) {
    persistedSignalInitialValueMap.set(initialValue.key, initialValue);
    queuePersistedSignalSubscribersNotification();
  }
}
function queuePersistedSignalSubscribersNotification(): void {
  if (notifyPersistedSignalSubscribersQueued) {
    return;
  }
  notifyPersistedSignalSubscribersQueued = true;
  queueMicrotask(() => {
    notifyPersistedSignalSubscribersQueued = false;
    notifyPersistedSignalSubscribers();
  });
}
function notifyPersistedSignalSubscribers(): void {
  const values = Array.from(persistedSignalInitialValueMap.values());
  persistedSignalSubscribers.forEach((subscriber) => subscriber(values));
}
