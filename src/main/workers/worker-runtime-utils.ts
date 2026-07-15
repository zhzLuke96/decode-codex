// Restored from ref/.vite/build/worker.js
// Small runtime helpers shared by worker request dispatchers.

import type { RpcResult } from "./worker-main-rpc-client";

export class WorkerAppEventBus {
  private readonly latestEventAt = new Map<string, number | undefined>();

  emit(type: string, at: number | undefined): void {
    this.latestEventAt.set(type, at);
  }

  getLastEventAt(type: string): number | undefined {
    return this.latestEventAt.get(type);
  }
}

export class SimpleSemaphore {
  private permits: number;
  private readonly waiters: Array<() => void> = [];

  constructor(permits: number) {
    this.permits = permits;
  }

  acquire(): Promise<void> {
    if (this.permits > 0) {
      this.permits -= 1;
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      this.waiters.push(() => {
        this.permits -= 1;
        resolve();
      });
    });
  }

  release(): void {
    this.permits += 1;
    const next = this.waiters.shift();
    if (next) next();
  }
}

export function toRpcError(error: unknown): RpcResult {
  return {
    type: "error",
    error: {
      message: error instanceof Error ? error.message : String(error),
      code:
        error instanceof Error &&
        "code" in error &&
        typeof error.code === "string"
          ? error.code
          : "OPEN_RESTORATION_BOUNDARY",
    },
  };
}
