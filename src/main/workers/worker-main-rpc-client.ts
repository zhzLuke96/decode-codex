// Restored from ref/.vite/build/worker.js
// Worker-side client for request/response and event messages sent to Electron main.

import { randomUUID } from "node:crypto";

export type RpcResult =
  | { type: "ok"; value?: unknown }
  | { type: "error"; error: { message: string; code?: string } };

export type WorkerMainRpcMethod =
  | "worktree-cleanup-inputs"
  | "computer-use-invalidate-service-pid"
  | "computer-use-service-pid"
  | "codex-home"
  | "read-shortcut-link"
  | "platform-family"
  | "platform-os"
  | "process-start"
  | "process-write"
  | "process-resize"
  | "process-terminate"
  | "fs-read-file"
  | "fs-write-file"
  | "fs-create-directory"
  | "fs-get-metadata"
  | "fs-read-directory"
  | "fs-remove"
  | "fs-copy"
  | "fs-watch"
  | "fs-unwatch"
  | "worker-exit";

export type WorkerMainRpcEventMethod =
  | "process-output-delta"
  | "fs-watch-changed"
  | "fs-watch-closed";

export type WorkerMainRpcRequester = {
  request(method: WorkerMainRpcMethod, params: unknown): Promise<unknown>;
  subscribe(
    method: WorkerMainRpcEventMethod,
    listener: (params: unknown) => void,
  ): () => void;
};

export type WorkerMainRpcRequest = {
  type: "worker-main-rpc-request";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  params: unknown;
};

export type WorkerMainRpcResponse = {
  type: "worker-main-rpc-response";
  workerId: string;
  requestId: string;
  method: WorkerMainRpcMethod;
  result: RpcResult;
};

export type WorkerMainRpcEvent = {
  type: "worker-main-rpc-event";
  workerId: string;
  method: WorkerMainRpcEventMethod;
  params: unknown;
};

export class WorkerMainRpcClient {
  private readonly pending = new Map<
    string,
    {
      method: WorkerMainRpcMethod;
      resolve(value: unknown): void;
      reject(error: Error): void;
    }
  >();
  private readonly eventListeners = new Map<
    WorkerMainRpcEventMethod,
    Set<(params: unknown) => void>
  >();

  constructor(
    private readonly workerId: string,
    private readonly port: { postMessage(message: WorkerMainRpcRequest): void },
  ) {}

  request(method: WorkerMainRpcMethod, params: unknown): Promise<unknown> {
    const requestId = randomUUID();
    const message: WorkerMainRpcRequest = {
      type: "worker-main-rpc-request",
      workerId: this.workerId,
      requestId,
      method,
      params,
    };
    const response = new Promise<unknown>((resolve, reject) => {
      this.pending.set(requestId, { method, resolve, reject });
    });
    try {
      this.port.postMessage(message);
    } catch (error) {
      this.pending.delete(requestId);
      return Promise.reject(
        error instanceof Error
          ? error
          : Error(`Failed to send main RPC request: ${String(error)}`),
      );
    }
    return response;
  }

  requestWithScopedEvents({
    events,
    method,
    params,
  }: {
    events: Array<{
      method: WorkerMainRpcEventMethod;
      listener(params: unknown): void;
    }>;
    method: WorkerMainRpcMethod;
    params: unknown;
  }): Promise<unknown> {
    const unsubscribe = events.map((event) =>
      this.subscribe(event.method, event.listener),
    );
    const result = this.request(method, params);
    result.finally(() => {
      for (const dispose of unsubscribe) dispose();
    });
    return result;
  }

  subscribe(
    method: WorkerMainRpcEventMethod,
    listener: (params: unknown) => void,
  ): () => void {
    const listeners = this.eventListeners.get(method) ?? new Set();
    listeners.add(listener);
    this.eventListeners.set(method, listeners);
    return () => {
      const current = this.eventListeners.get(method);
      if (!current) return;
      current.delete(listener);
      if (current.size === 0) this.eventListeners.delete(method);
    };
  }

  handleMessage(message: unknown): boolean {
    if (isWorkerMainRpcEvent(message)) {
      if (message.workerId !== this.workerId) return false;
      const listeners = this.eventListeners.get(message.method);
      if (!listeners || listeners.size === 0) return true;
      for (const listener of listeners) listener(message.params);
      return true;
    }

    if (
      !isWorkerMainRpcResponse(message) ||
      message.workerId !== this.workerId
    ) {
      return false;
    }
    const pending = this.pending.get(message.requestId);
    if (!pending) return true;
    this.pending.delete(message.requestId);
    if (pending.method !== message.method) {
      pending.reject(Error("Mismatched main RPC response method"));
      return true;
    }
    if (message.result.type === "ok") {
      pending.resolve(message.result.value);
    } else {
      pending.reject(
        message.result.error.code == null
          ? Error(message.result.error.message)
          : Object.assign(Error(message.result.error.message), {
              code: message.result.error.code,
            }),
      );
    }
    return true;
  }

  dispose(): void {
    const error = Error("Worker main RPC client disposed");
    for (const pending of this.pending.values()) pending.reject(error);
    this.pending.clear();
    this.eventListeners.clear();
  }
}

function isWorkerMainRpcResponse(
  message: unknown,
): message is WorkerMainRpcResponse {
  if (!isRecord(message)) return false;
  return (
    message.type === "worker-main-rpc-response" &&
    typeof message.workerId === "string" &&
    typeof message.requestId === "string" &&
    isWorkerMainRpcMethod(message.method) &&
    isRecord(message.result) &&
    (message.result.type === "ok" || message.result.type === "error")
  );
}

function isWorkerMainRpcEvent(message: unknown): message is WorkerMainRpcEvent {
  if (!isRecord(message)) return false;
  return (
    message.type === "worker-main-rpc-event" &&
    typeof message.workerId === "string" &&
    isWorkerMainRpcEventMethod(message.method) &&
    isRecord(message.params)
  );
}

function isWorkerMainRpcMethod(method: unknown): method is WorkerMainRpcMethod {
  return (
    method === "worktree-cleanup-inputs" ||
    method === "computer-use-invalidate-service-pid" ||
    method === "computer-use-service-pid" ||
    method === "codex-home" ||
    method === "read-shortcut-link" ||
    method === "platform-family" ||
    method === "platform-os" ||
    method === "process-start" ||
    method === "process-write" ||
    method === "process-resize" ||
    method === "process-terminate" ||
    method === "fs-read-file" ||
    method === "fs-write-file" ||
    method === "fs-create-directory" ||
    method === "fs-get-metadata" ||
    method === "fs-read-directory" ||
    method === "fs-remove" ||
    method === "fs-copy" ||
    method === "fs-watch" ||
    method === "fs-unwatch" ||
    method === "worker-exit"
  );
}

function isWorkerMainRpcEventMethod(
  method: unknown,
): method is WorkerMainRpcEventMethod {
  return (
    method === "process-output-delta" ||
    method === "fs-watch-changed" ||
    method === "fs-watch-closed"
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
