// Restored from ref/webview/assets/app-server-notification-debug-signals-DCt-THUZ.js
import * as React from "react";
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";
import { formatDebugParamsPreview } from "../boundaries/thread-context-inputs.facade";
type ProductEventDebugLogStatus = string;
type ProductEventDebugLogInput = {
  event: unknown;
  reason?: string | null;
  status: ProductEventDebugLogStatus;
};
type ProductEventDebugLogEntry = ProductEventDebugLogInput & {
  id: string;
  timestampMs: number;
  updatedTimestampMs: number;
};
type ProductEventDebugLogUpdate = {
  id: string;
  reason?: string | null;
  status: ProductEventDebugLogStatus;
};
type AppServerNotificationDebugSeverity = "default" | "error" | "noisy";
type AppServerNotificationDebugEntry = {
  hostId: string;
  id: string;
  isNoisy: boolean;
  method: string;
  paramsPreview: string;
  receivedAtMs: number;
  severity: AppServerNotificationDebugSeverity;
  threadId: string | null;
};
type AppServerNotificationDebugInput = {
  hostId: string;
  id: string;
  method: string;
  params: unknown;
  receivedAtMs: number;
};
type AppScopeStore = {
  get<TValue>(signal: unknown): TValue;
  set<TValue>(
    signal: unknown,
    value: TValue | ((previous: TValue) => TValue),
  ): void;
};
const maxProductEventDebugLogEntries = 100;
const productEventDebugLogInstanceId =
  typeof globalThis.crypto?.randomUUID === "function"
    ? globalThis.crypto.randomUUID()
    : "product-event-debug-log";
const productEventDebugLogListeners = new Set<() => void>();
let productEventDebugLogEntries: ProductEventDebugLogEntry[] = [];
let productEventDebugLogSequence = 0;
function useProductEventDebugLogEntries(): ProductEventDebugLogEntry[] {
  return React.useSyncExternalStore(
    subscribeProductEventDebugLog,
    getProductEventDebugLogSnapshot,
  );
}
function getProductEventDebugLogSnapshot(): ProductEventDebugLogEntry[] {
  return productEventDebugLogEntries;
}
function appendProductEventDebugLogEntry(
  input: ProductEventDebugLogInput,
): string {
  const entry = createProductEventDebugLogEntry(input);
  productEventDebugLogEntries = [...productEventDebugLogEntries, entry].slice(
    -maxProductEventDebugLogEntries,
  );
  notifyProductEventDebugLogListeners();
  return entry.id;
}
function updateProductEventDebugLogEntry({
  id,
  status,
  reason,
}: ProductEventDebugLogUpdate): void {
  const existingEntry = productEventDebugLogEntries.find(
    (entry) => entry.id === id,
  );
  if (existingEntry == null) return;
  const updatedEntry = {
    ...existingEntry,
    status,
    updatedTimestampMs: Date.now(),
    ...(reason == null
      ? {}
      : {
          reason,
        }),
  };
  productEventDebugLogEntries = [
    ...productEventDebugLogEntries.filter((entry) => entry.id !== id),
    updatedEntry,
  ];
  notifyProductEventDebugLogListeners();
}
function subscribeProductEventDebugLog(listener: () => void): () => void {
  productEventDebugLogListeners.add(listener);
  return () => {
    productEventDebugLogListeners.delete(listener);
  };
}
function createProductEventDebugLogEntry(
  input: ProductEventDebugLogInput,
): ProductEventDebugLogEntry {
  const id = `${productEventDebugLogInstanceId}:${String(productEventDebugLogSequence).padStart(10, "0")}`;
  productEventDebugLogSequence += 1;
  const timestampMs = Date.now();
  return {
    id,
    timestampMs,
    updatedTimestampMs: timestampMs,
    ...input,
  };
}
function notifyProductEventDebugLogListeners(): void {
  productEventDebugLogListeners.forEach((listener) => {
    listener();
  });
}
function createAppServerNotificationDebugEntry({
  hostId,
  id,
  method,
  params,
  receivedAtMs,
}: AppServerNotificationDebugInput): AppServerNotificationDebugEntry {
  const paramsPreview = formatDebugParamsPreview(params) as string;
  const isNoisy = isNoisyNotificationMethod(method);
  return {
    hostId,
    id,
    isNoisy,
    method,
    paramsPreview,
    receivedAtMs,
    severity: getNotificationDebugSeverity(method, isNoisy),
    threadId: getThreadIdFromNotificationParams(params),
  };
}
function getThreadIdFromNotificationParams(params: unknown): string | null {
  if (params == null || typeof params !== "object" || Array.isArray(params)) {
    return null;
  }
  const threadId = (
    params as {
      threadId?: unknown;
    }
  ).threadId;
  return typeof threadId === "string" ? threadId : null;
}
function getNotificationDebugSeverity(
  method: string,
  isNoisy: boolean,
): AppServerNotificationDebugSeverity {
  if (
    method === "error" ||
    method.includes("/error") ||
    method.includes("failed")
  ) {
    return "error";
  }
  return isNoisy ? "noisy" : "default";
}
function isNoisyNotificationMethod(method: string): boolean {
  return (
    method.includes("/delta") ||
    method.includes("Delta") ||
    method.endsWith("/output")
  );
}
const maxAppServerNotificationDebugEntries = 300;
const notificationDebugPanelMountedSignal = createAppScopeSignal(
  appScopeRoot,
  false,
);
const appServerNotificationDebugEntriesSignal = createAppScopeSignal(
  appScopeRoot,
  () => [] as AppServerNotificationDebugEntry[],
  {
    onMount: (
      _set: (value: AppServerNotificationDebugEntry[]) => void,
      scope: AppScopeStore,
    ) => {
      scope.set(notificationDebugPanelMountedSignal, true);
      return () => {
        scope.set(notificationDebugPanelMountedSignal, false);
      };
    },
  },
);
const notificationDebugSequenceSignal = createAppScopeSignal(appScopeRoot, 0);
function initProductEventDebugLogEntriesChunk(): void {}
function initAppServerNotificationDebugSignalsChunk(): void {}
function recordAppServerNotificationDebugEntry(
  scope: AppScopeStore,
  {
    hostId,
    method,
    params,
  }: {
    hostId: string;
    method: string;
    params: unknown;
  },
): void {
  if (!scope.get<boolean>(notificationDebugPanelMountedSignal)) return;
  const receivedAtMs = Date.now();
  const sequence = scope.get<number>(notificationDebugSequenceSignal);
  const entry = createAppServerNotificationDebugEntry({
    hostId,
    id: `${receivedAtMs}:${sequence}`,
    method,
    params,
    receivedAtMs,
  });
  scope.set(notificationDebugSequenceSignal, sequence + 1);
  scope.set<AppServerNotificationDebugEntry[]>(
    appServerNotificationDebugEntriesSignal,
    (entries) =>
      [entry, ...entries].slice(0, maxAppServerNotificationDebugEntries),
  );
}
function clearNotificationDebugEntriesForHost(
  scope: AppScopeStore,
  hostId: string,
): void {
  scope.set<AppServerNotificationDebugEntry[]>(
    appServerNotificationDebugEntriesSignal,
    (entries) => entries.filter((entry) => entry.hostId !== hostId),
  );
}
export {
  updateProductEventDebugLogEntry,
  appendProductEventDebugLogEntry,
  clearNotificationDebugEntriesForHost,
  initAppServerNotificationDebugSignalsChunk,
  initProductEventDebugLogEntriesChunk,
  useProductEventDebugLogEntries,
  recordAppServerNotificationDebugEntry,
  appServerNotificationDebugEntriesSignal,
};
