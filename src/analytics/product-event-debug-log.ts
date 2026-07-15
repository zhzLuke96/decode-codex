// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// In-memory debug log of structured product-analytics events. Keeps a bounded
// ring buffer of the most recent entries (exposed to React via
// useSyncExternalStore) plus a larger bounded map of still-pending entries so an
// enqueued event can be resolved (sent/dropped/failed) even after it scrolls out
// of the visible ring. Each entry may carry a cloned Statsig user snapshot.
import { useSyncExternalStore } from "react";

export type ProductEventDebugLogStatus =
  | "enqueued"
  | "sent"
  | "dropped"
  | "failed";

export type ProductEventInfo = {
  eventType: string;
  payload: unknown;
};

export type ProductEventDebugLogEntry = {
  id: string;
  timestampMs: number;
  event: ProductEventInfo;
  status: ProductEventDebugLogStatus;
  reason?: string;
  statsigUser?: unknown;
};

export type AppendProductEventDebugLogEntryInput = {
  event: ProductEventInfo;
  status: ProductEventDebugLogStatus;
  reason?: string;
  statsigUser?: unknown;
};

export type UpdateProductEventDebugLogEntryInput = {
  id: string;
  status: ProductEventDebugLogStatus;
  reason?: string;
  statsigUser?: unknown;
};

type CreateProductEventDebugLogEntryInput = {
  event: ProductEventInfo;
  status: ProductEventDebugLogStatus;
  reason?: string;
  statsigUser?: unknown;
};

const MAX_PRODUCT_EVENT_DEBUG_LOG_ENTRIES = 100;
const MAX_PENDING_PRODUCT_EVENT_DEBUG_LOG_ENTRIES = 200;

const productEventDebugLogInstanceId =
  typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
    ? crypto.randomUUID()
    : "product-event-debug-log";

const productEventDebugLogListeners = new Set<() => void>();
const pendingProductEventDebugLogEntries = new Map<
  string,
  ProductEventDebugLogEntry
>();
let productEventDebugLogEntries: ProductEventDebugLogEntry[] = [];
let productEventDebugLogSequence = 0;

export function useProductEventDebugLogEntries(): ProductEventDebugLogEntry[] {
  return useSyncExternalStore(
    subscribeProductEventDebugLog,
    getProductEventDebugLogSnapshot,
  );
}

function getProductEventDebugLogSnapshot(): ProductEventDebugLogEntry[] {
  return productEventDebugLogEntries;
}

export function appendProductEventDebugLogEntry({
  event,
  statsigUser,
  status,
  reason,
}: AppendProductEventDebugLogEntryInput): string {
  const clonedStatsigUser = cloneStatsigUser(statsigUser);
  const entry = createProductEventDebugLogEntry({
    event,
    status,
    reason,
    ...(clonedStatsigUser === undefined
      ? {}
      : { statsigUser: clonedStatsigUser }),
  });
  productEventDebugLogEntries = [...productEventDebugLogEntries, entry].slice(
    -MAX_PRODUCT_EVENT_DEBUG_LOG_ENTRIES,
  );
  if (status === "enqueued") trackPendingProductEventDebugLogEntry(entry);
  notifyProductEventDebugLogListeners();
  return entry.id;
}

export function updateProductEventDebugLogEntry({
  id,
  statsigUser,
  status,
  reason,
}: UpdateProductEventDebugLogEntryInput): void {
  const existingEntry =
    productEventDebugLogEntries.find((entry) => entry.id === id) ??
    pendingProductEventDebugLogEntries.get(id);
  if (existingEntry == null) return;
  const clonedStatsigUser = cloneStatsigUser(statsigUser);
  const updatedEntry: ProductEventDebugLogEntry = {
    id: existingEntry.id,
    timestampMs: Date.now(),
    event: existingEntry.event,
    status,
    ...(reason == null ? {} : { reason }),
    ...(clonedStatsigUser === undefined
      ? {}
      : { statsigUser: clonedStatsigUser }),
  };
  productEventDebugLogEntries = [
    ...productEventDebugLogEntries.filter((entry) => entry.id !== id),
    updatedEntry,
  ].slice(-MAX_PRODUCT_EVENT_DEBUG_LOG_ENTRIES);
  if (status === "enqueued") {
    trackPendingProductEventDebugLogEntry(updatedEntry);
  } else {
    pendingProductEventDebugLogEntries.delete(id);
  }
  notifyProductEventDebugLogListeners();
}

function subscribeProductEventDebugLog(listener: () => void): () => void {
  productEventDebugLogListeners.add(listener);
  return () => {
    productEventDebugLogListeners.delete(listener);
  };
}

function createProductEventDebugLogEntry(
  input: CreateProductEventDebugLogEntryInput,
): ProductEventDebugLogEntry {
  const id = `${productEventDebugLogInstanceId}:${String(
    productEventDebugLogSequence,
  ).padStart(10, "0")}`;
  productEventDebugLogSequence += 1;
  return {
    id,
    timestampMs: Date.now(),
    ...input,
  };
}

function notifyProductEventDebugLogListeners(): void {
  productEventDebugLogListeners.forEach((listener) => {
    listener();
  });
}

function cloneStatsigUser(statsigUser: unknown): unknown {
  if (statsigUser === undefined) return undefined;
  try {
    return structuredClone(statsigUser);
  } catch {
    return undefined;
  }
}

function trackPendingProductEventDebugLogEntry(
  entry: ProductEventDebugLogEntry,
): void {
  pendingProductEventDebugLogEntries.delete(entry.id);
  pendingProductEventDebugLogEntries.set(entry.id, entry);
  if (
    pendingProductEventDebugLogEntries.size <=
    MAX_PENDING_PRODUCT_EVENT_DEBUG_LOG_ENTRIES
  ) {
    return;
  }
  const oldestPendingKey = pendingProductEventDebugLogEntries
    .keys()
    .next().value;
  if (oldestPendingKey != null) {
    pendingProductEventDebugLogEntries.delete(oldestPendingKey);
  }
}

export function initProductEventDebugLogEntriesChunk(): void {}
