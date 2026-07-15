// Restored from ref/.vite/build/worker.js
// Worker feature-context mapping and Computer Use capture request dispatcher.

import {
  createWorkerExecutionHostClient,
  type WorkerExecutionHostClient,
  type WorkerExecutionHostConfig,
} from "./worker-execution-host-client";
import {
  getNextComputerUseCaptureUpdate,
  startComputerUseCaptureNativeBridge,
} from "./computer-use-native-bridge";
import type { WorkerMainRpcRequester } from "./worker-main-rpc-client";

type RpcResult =
  | { type: "ok"; value?: unknown }
  | { type: "error"; error: { message: string; code?: string } };

type WorkerRequest = {
  id: string;
  method: string;
  params?: unknown;
};

type WorkerOutboundMessage =
  | {
      type: "worker-response";
      workerId: string;
      response: { id: string; method: string; result: RpcResult };
    }
  | { type: "worker-event"; workerId: string; event: unknown };

export type WorkerRequestDispatcher = {
  handleRequest(request: WorkerRequest): void;
  handleCancel(requestId: string): void;
};

export type ShortcutLink = {
  target?: string | null;
  icon?: string | null;
};

export type WorkerFeatureContext = {
  computerUseCapture?: ComputerUseCaptureWorkerDependencies;
  git?: {
    createExecutionHost(
      hostConfig: WorkerExecutionHostConfig,
    ): WorkerExecutionHostClient;
  };
  openIn?: {
    readShortcutLink(path: string): Promise<ShortcutLink>;
  };
};

type ComputerUseCaptureWorkerDependencies = {
  getNextCaptureUpdate?(
    params: Record<string, unknown>,
  ): Promise<Record<string, unknown> & { type: string }>;
  startCapture?(params: Record<string, unknown>): Promise<unknown>;
};

export class ComputerUseCaptureWorkerRequestDispatcher
  implements WorkerRequestDispatcher
{
  constructor(
    private readonly workerId: string,
    private readonly postMessage: (message: WorkerOutboundMessage) => void,
    private readonly dependencies: ComputerUseCaptureWorkerDependencies = {},
  ) {}

  handleRequest(request: WorkerRequest): void {
    void this.handleRequestAsync(request);
  }

  handleCancel(): void {}

  private async handleRequestAsync(request: WorkerRequest): Promise<void> {
    try {
      switch (request.method) {
        case "start": {
          const params = requireRecordParams(request);
          this.postResponse(request, {
            type: "ok",
            value: await this.startCapture({
              animationTarget: params.animationTarget,
              app: params.bundleIdentifier,
              permissionRequestId: params.permissionRequestId,
              requestId: params.requestId,
            }),
          });
          return;
        }
        case "watchUpdates": {
          const params = requireRecordParams(request);
          const requestId = requireStringValue(params.requestId, "requestId");
          this.postResponse(request, { type: "ok" });
          void this.readCaptureUpdates(requestId);
          return;
        }
      }
      throw openRestorationBoundaryError(
        `Computer Use capture worker method '${request.method}' is not restored.`,
      );
    } catch (error) {
      this.postResponse(request, toRpcError(error));
    }
  }

  private async readCaptureUpdates(requestId: string): Promise<void> {
    try {
      const update = await this.getNextCaptureUpdate({ requestId });
      this.postMessage({
        type: "worker-event",
        workerId: this.workerId,
        event: {
          type: "update",
          requestId,
          update,
        },
      });
      if (update.type !== "completed" && update.type !== "failed") {
        await this.readCaptureUpdates(requestId);
      }
    } catch {
      this.postMessage({
        type: "worker-event",
        workerId: this.workerId,
        event: {
          type: "update",
          requestId,
          update: {
            type: "failed",
            failureReason: "update_poll_failed",
          },
        },
      });
    }
  }

  private async startCapture(
    params: Record<string, unknown>,
  ): Promise<unknown> {
    if (this.dependencies.startCapture == null) {
      throw openRestorationBoundaryError(
        "Computer Use capture native bridge is not restored.",
      );
    }
    return this.dependencies.startCapture(params);
  }

  private async getNextCaptureUpdate(
    params: Record<string, unknown>,
  ): Promise<Record<string, unknown> & { type: string }> {
    if (this.dependencies.getNextCaptureUpdate == null) {
      throw openRestorationBoundaryError(
        "Computer Use capture native bridge is not restored.",
      );
    }
    return this.dependencies.getNextCaptureUpdate(params);
  }

  private postResponse(request: WorkerRequest, result: RpcResult): void {
    this.postMessage({
      type: "worker-response",
      workerId: this.workerId,
      response: { id: request.id, method: request.method, result },
    });
  }
}

export function createWorkerFeatureContext(
  workerId: string,
  mainRpcClient: WorkerMainRpcRequester,
  normalizeShortcutLink: (value: unknown) => ShortcutLink,
  options: { spawnInsideWsl?: boolean } = {},
): WorkerFeatureContext {
  switch (workerId) {
    case "computer-use-capture":
      return {
        computerUseCapture: createComputerUseCaptureDependencies(mainRpcClient),
      };
    case "git":
      return {
        git: {
          createExecutionHost: (hostConfig) =>
            createWorkerExecutionHostClient(hostConfig, mainRpcClient, options),
        },
      };
    case "open-in":
      return {
        openIn: {
          readShortcutLink: async (path) =>
            normalizeShortcutLink(
              await mainRpcClient.request("read-shortcut-link", { path }),
            ),
        },
      };
    default:
      return {};
  }
}

function createComputerUseCaptureDependencies(
  mainRpcClient: WorkerMainRpcRequester,
): ComputerUseCaptureWorkerDependencies {
  return {
    getNextCaptureUpdate: async (params) => {
      return getNextComputerUseCaptureUpdate({
        requestId: requireStringValue(params.requestId, "requestId"),
        serviceProcessIdentifier:
          await getComputerUseServiceProcessIdentifier(mainRpcClient),
      });
    },
    startCapture: async (params) => {
      const serviceProcessIdentifier =
        await getComputerUseServiceProcessIdentifier(mainRpcClient);
      try {
        return await startComputerUseCaptureNativeBridge({
          animationTarget: params.animationTarget,
          app: params.app,
          permissionRequestId: params.permissionRequestId,
          requestId: requireStringValue(params.requestId, "requestId"),
          serviceProcessIdentifier,
        });
      } catch (error) {
        if (!isComputerUseServiceUnavailableError(error)) throw error;
      }
      await mainRpcClient.request("computer-use-invalidate-service-pid", {
        processIdentifier: serviceProcessIdentifier,
      });
      return startComputerUseCaptureNativeBridge({
        animationTarget: params.animationTarget,
        app: params.app,
        permissionRequestId: params.permissionRequestId,
        requestId: requireStringValue(params.requestId, "requestId"),
        serviceProcessIdentifier:
          await getComputerUseServiceProcessIdentifier(mainRpcClient),
      });
    },
  };
}

async function getComputerUseServiceProcessIdentifier(
  mainRpcClient: WorkerMainRpcRequester,
): Promise<number> {
  const serviceProcessIdentifier = await mainRpcClient.request(
    "computer-use-service-pid",
    {},
  );
  if (
    typeof serviceProcessIdentifier !== "number" ||
    !Number.isFinite(serviceProcessIdentifier)
  ) {
    throw Error("Computer Use service process identifier must be a number");
  }
  return serviceProcessIdentifier;
}

function isComputerUseServiceUnavailableError(error: unknown): boolean {
  return (
    error instanceof Error &&
    /^AESendMessage failed with -600(?:\s|$)/.test(error.message)
  );
}

function requireRecordParams(request: WorkerRequest): Record<string, unknown> {
  if (!isRecord(request.params)) {
    throw Error(`Worker request '${request.method}' requires object params`);
  }
  return request.params;
}

function requireStringValue(value: unknown, name: string): string {
  if (typeof value !== "string" || value.length === 0) {
    throw Error(`Computer Use capture request requires '${name}'`);
  }
  return value;
}

function toRpcError(error: unknown): RpcResult {
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

function openRestorationBoundaryError(message: string): Error {
  return Object.assign(Error(message), { code: "OPEN_RESTORATION_BOUNDARY" });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
