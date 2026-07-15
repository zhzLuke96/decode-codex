// Restored from ref/webview/assets/metric-helpers-DG5zp00d.js
// LocalStorage-backed Segment PriorityQueue compatibility wrapper.
import { PriorityQueue } from "@segment/analytics-core";
import {
  Context as SegmentContext,
  type SegmentEvent,
} from "@segment/analytics-next";

import type { QueueItem, QueueStorage } from "./types";

const LOCK_TIMEOUT_MS = 50;
const MAX_LOCK_ATTEMPTS = 3;

const noopStorage: QueueStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
};

interface SerializedQueueItem {
  id: string;
  event?: SegmentEvent;
}

function getQueueStorage(): QueueStorage {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage;
    }
  } catch (error) {
    console.warn("Unable to access localStorage", error);
  }

  return noopStorage;
}

function parseStoredJson<T>(
  storage: QueueStorage,
  key: string,
  fallback: T,
): T {
  const rawValue = storage.getItem(key);
  if (!rawValue) return fallback;

  try {
    return JSON.parse(rawValue) as T;
  } catch (error) {
    console.error(error);
    return fallback;
  }
}

function isSerializedQueueItem(value: unknown): value is SerializedQueueItem {
  return (
    value != null &&
    typeof value === "object" &&
    typeof (value as SerializedQueueItem).id === "string"
  );
}

function reviveQueueItem<Item extends QueueItem>(
  item: SerializedQueueItem,
): Item {
  if (item.event != null) {
    return new SegmentContext(item.event, item.id) as unknown as Item;
  }

  return item as Item;
}

function readQueueItems<Item extends QueueItem>(
  storage: QueueStorage,
  key: string,
): Item[] {
  const storedItems = parseStoredJson<unknown[]>(storage, key, []);
  if (!Array.isArray(storedItems)) return [];

  return storedItems
    .filter(isSerializedQueueItem)
    .map((item) => reviveQueueItem<Item>(item));
}

function persistQueueItems<Item extends QueueItem>(
  storage: QueueStorage,
  key: string,
  items: readonly Item[],
): void {
  const existingItems = readQueueItems<Item>(storage, key);
  const mergedItems = new Map<string, Item>();

  for (const item of [...items, ...existingItems]) {
    mergedItems.set(item.id, item);
  }

  storage.setItem(key, JSON.stringify([...mergedItems.values()]));
}

function readSeen(storage: QueueStorage, key: string): Record<string, number> {
  const storedSeen = parseStoredJson<Record<string, unknown>>(storage, key, {});

  return Object.entries(storedSeen).reduce<Record<string, number>>(
    (seen, [itemId, attempts]) => {
      if (typeof attempts === "number") seen[itemId] = attempts;
      return seen;
    },
    {},
  );
}

function persistSeen(
  storage: QueueStorage,
  key: string,
  seen: Record<string, number>,
): void {
  storage.setItem(key, JSON.stringify({ ...readSeen(storage, key), ...seen }));
}

function removeStoredValue(storage: QueueStorage, key: string): void {
  storage.removeItem(key);
}

function readLockExpiresAt(storage: QueueStorage, key: string): number | null {
  const rawLock = storage.getItem(key);
  if (!rawLock) return null;

  try {
    const lockExpiresAt = JSON.parse(rawLock) as unknown;
    return typeof lockExpiresAt === "number" ? lockExpiresAt : null;
  } catch {
    return null;
  }
}

function hasLockExpired(lockExpiresAt: number | null): boolean {
  return lockExpiresAt == null || Date.now() > lockExpiresAt;
}

function withQueueLock(
  storage: QueueStorage,
  queueName: string,
  callback: () => void,
  attempt = 0,
): void {
  const lockKey = `persisted-queue:v1:${queueName}:lock`;
  const lockExpiresAt = readLockExpiresAt(storage, lockKey);

  if (hasLockExpired(lockExpiresAt)) {
    storage.setItem(lockKey, JSON.stringify(Date.now() + LOCK_TIMEOUT_MS));
    try {
      callback();
    } finally {
      storage.removeItem(lockKey);
    }
    return;
  }

  if (attempt < MAX_LOCK_ATTEMPTS) {
    setTimeout(() => {
      withQueueLock(storage, queueName, callback, attempt + 1);
    }, LOCK_TIMEOUT_MS);
    return;
  }

  console.error("Unable to retrieve lock");
}

export class PersistedPriorityQueue<
  Item extends QueueItem = SegmentContext,
> extends PriorityQueue<Item> {
  private readonly storage: QueueStorage;
  private readonly itemsKey: string;
  private readonly seenKey: string;

  constructor(maxAttempts: number, queueName: string) {
    super(maxAttempts, []);

    this.storage = getQueueStorage();
    this.itemsKey = `persisted-queue:v1:${queueName}:items`;
    this.seenKey = `persisted-queue:v1:${queueName}:seen`;

    this.restorePersistedState(queueName);
    this.registerPageHidePersistence(queueName);
  }

  private restorePersistedState(queueName: string): void {
    withQueueLock(this.storage, queueName, () => {
      try {
        const persistedItems = readQueueItems<Item>(
          this.storage,
          this.itemsKey,
        );
        const persistedSeen = readSeen(this.storage, this.seenKey);

        removeStoredValue(this.storage, this.itemsKey);
        removeStoredValue(this.storage, this.seenKey);

        this.queue = [...persistedItems, ...this.queue];
        this.seen = { ...persistedSeen, ...this.seen };
      } catch (error) {
        console.error(error);
      }
    });
  }

  private registerPageHidePersistence(queueName: string): void {
    if (typeof window === "undefined") return;

    window.addEventListener("pagehide", () => {
      if (this.todo <= 0) return;

      const pendingItems = [...this.queue, ...this.future];
      try {
        withQueueLock(this.storage, queueName, () => {
          persistQueueItems(this.storage, this.itemsKey, pendingItems);
          persistSeen(this.storage, this.seenKey, this.seen);
        });
      } catch (error) {
        console.error(error);
      }
    });
  }
}
