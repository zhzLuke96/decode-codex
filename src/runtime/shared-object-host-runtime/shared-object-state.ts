// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js
// Shared-object host bridge state.
import { useCallback, useEffect, useMemo, useState } from "react";

import { appScopeRoot as sharedObjectAppScopeRoot } from "../../boundaries/app-scope";
import {
  hostMessageBridge,
  initAppRuntimeChunk,
} from "../app-main-host-runtime";

export type SharedObjectScope = {
  get<TValue = unknown>(signal: unknown, key: string): TValue | undefined;
  set<TValue = unknown>(signal: unknown, key: string, value: TValue): void;
};

export type SharedObjectUpdate<TValue> =
  | TValue
  | ((currentValue: TValue | undefined) => TValue);

export type SharedObjectState<TValue> = readonly [
  TValue | undefined,
  (nextValue: SharedObjectUpdate<TValue>) => void,
];

export type SharedObjectValueReader<TValue = unknown> = (
  signal: unknown,
  key: string,
) => TValue;

type WindowWithSharedObjectBridge = Window &
  typeof globalThis & {
    electronBridge?: {
      getSharedObjectSnapshotValue?: (key: string) => unknown;
    };
  };

type SharedObjectUpdatedMessage = {
  key?: string;
  value?: unknown;
};

const sharedObjectValues = new Map<string, unknown>();
const sharedObjectListeners = new Map<string, Set<(value: unknown) => void>>();
const sharedObjectStateSignal = { id: "shared-object-state" };

export const appScopeRoot = sharedObjectAppScopeRoot;
export { sharedObjectAppScopeRoot };

export function readSharedObjectSnapshotValue(key: string): unknown {
  if (typeof window === "undefined") return undefined;
  return (
    window as WindowWithSharedObjectBridge
  ).electronBridge?.getSharedObjectSnapshotValue?.(key);
}

function getSharedObjectValue<TValue>(key: string): TValue | undefined {
  return (
    sharedObjectValues.has(key)
      ? sharedObjectValues.get(key)
      : readSharedObjectSnapshotValue(key)
  ) as TValue | undefined;
}

function setCachedSharedObjectValue(key: string, value: unknown): void {
  sharedObjectValues.set(key, value);
  sharedObjectListeners.get(key)?.forEach((listener) => listener(value));
}

function dispatchSharedObjectMessage(
  type: string,
  key: string,
  value?: unknown,
) {
  hostMessageBridge.dispatchMessage(
    type,
    value === undefined ? { key } : { key, value },
  );
}

function subscribeToSharedObjectUpdates(
  key: string,
  listener: (value: unknown) => void,
): () => void {
  let listeners = sharedObjectListeners.get(key);
  if (listeners == null) {
    listeners = new Set();
    sharedObjectListeners.set(key, listeners);
  }
  listeners.add(listener);

  dispatchSharedObjectMessage("shared-object-subscribe", key);
  const unsubscribeHost = hostMessageBridge.subscribe(
    "shared-object-updated",
    (message: SharedObjectUpdatedMessage) => {
      if (message.key === key) setCachedSharedObjectValue(key, message.value);
    },
  );

  return () => {
    unsubscribeHost();
    listeners?.delete(listener);
    if (listeners?.size === 0) sharedObjectListeners.delete(key);
    dispatchSharedObjectMessage("shared-object-unsubscribe", key);
  };
}

export function initSharedObjectAppScopeRoot(): void {
  initAppRuntimeChunk();
}

export function initSharedObjectStateRuntime(): void {
  initAppRuntimeChunk();
}

export function initSharedObjectSignalFamilyRuntime(): void {
  initSharedObjectStateRuntime();
}

export function updateSharedObjectValue<TValue>(
  scope: SharedObjectScope,
  key: string,
  nextValue: SharedObjectUpdate<TValue>,
): void {
  const currentValue = scope.get<TValue>(sharedObjectStateSignal, key);
  const value =
    typeof nextValue === "function"
      ? (nextValue as (currentValue: TValue | undefined) => TValue)(
          currentValue,
        )
      : nextValue;

  dispatchSharedObjectMessage("shared-object-set", key, value);
  setCachedSharedObjectValue(key, value);
  scope.set(sharedObjectStateSignal, key, value);
}

export function readSharedObjectValueWithReader<TValue = unknown>(
  reader: SharedObjectValueReader<TValue>,
  key: string,
): TValue {
  return reader(sharedObjectStateSignal, key);
}

export function useSharedObjectState<TValue = unknown>(
  key: string,
): SharedObjectState<TValue> {
  const [value, setValue] = useState<TValue | undefined>(() =>
    getSharedObjectValue<TValue>(key),
  );

  useEffect(() => {
    setValue(getSharedObjectValue<TValue>(key));
    return subscribeToSharedObjectUpdates(key, (nextValue) => {
      setValue(nextValue as TValue | undefined);
    });
  }, [key]);

  const updateValue = useCallback(
    (nextValue: SharedObjectUpdate<TValue>) => {
      setValue((currentValue) => {
        const value =
          typeof nextValue === "function"
            ? (nextValue as (currentValue: TValue | undefined) => TValue)(
                currentValue,
              )
            : nextValue;
        dispatchSharedObjectMessage("shared-object-set", key, value);
        setCachedSharedObjectValue(key, value);
        return value;
      });
    },
    [key],
  );

  return useMemo(() => [value, updateValue] as const, [updateValue, value]);
}
