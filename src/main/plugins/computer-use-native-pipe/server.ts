// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Computer Use Windows helper JSON-RPC native pipe server.

import net, { Socket } from "node:net";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";
import {
  createInvocationAnalyticsFields,
  createToolAnalyticsFields,
  parseTurnIdentity,
  turnKey,
} from "./analytics";
import { createComputerUseApprovalBridge } from "./approval-bridge";
import {
  CODEX_CLI_PATH_ENV,
  DEFAULT_COMPUTER_USE_NATIVE_PIPE_PATH,
} from "./env";
import {
  decodeNativePipeMessages,
  encodeNativePipeMessage,
  removeNativePipePath,
  removeStaleNativePipePath,
} from "./framing";
import type {
  ComputerUseApprovalBridge,
  ComputerUseNativePipeAnalyticsEvent,
  ComputerUseNativePipeLogger,
  ComputerUseNativePipeServer,
  ComputerUseNativePipeServerOptions,
  ComputerUseNativeRequest,
  ComputerUseToolAnalyticsFields,
  ComputerUseTurnIdentity,
  JsonRpcError,
  JsonRpcId,
  JsonRpcMessage,
  JsonRpcRequest,
  SendJsonRpcMessage,
  WindowsHelperTransport,
  WindowsHelperTransportConstructor,
} from "./types";

export async function startComputerUseNativePipeServer({
  codexCliPath,
  logger,
  nativePipeDirectory = DEFAULT_COMPUTER_USE_NATIVE_PIPE_PATH,
  onAnalyticsEvent,
  windowsHelperPath,
  windowsHelperTransportModulePath,
}: ComputerUseNativePipeServerOptions): Promise<ComputerUseNativePipeServer> {
  if (windowsHelperPath == null || windowsHelperTransportModulePath == null) {
    throw Error("Windows Computer Use helper paths are unavailable");
  }

  let helperTransport: WindowsHelperTransport | null = null;
  let hasActiveRequest = false;
  const activeTurnBySocket = new Map<Socket, string>();
  const activeTurnAnalyticsBySocket = new Map<
    Socket,
    ComputerUseToolAnalyticsFields
  >();

  const endSocketAnalytics = (socket: Socket): void => {
    const activeAnalytics = activeTurnAnalyticsBySocket.get(socket);
    if (activeAnalytics != null) {
      onAnalyticsEvent?.({ type: "ended", ...activeAnalytics });
      activeTurnAnalyticsBySocket.delete(socket);
    }
  };

  const getHelperTransport = async (): Promise<WindowsHelperTransport> => {
    if (helperTransport != null) return helperTransport;
    const transportModule = await import(
      pathToFileURL(windowsHelperTransportModulePath).href
    );
    const Transport =
      transportModule.WindowsHelperTransport as WindowsHelperTransportConstructor;
    helperTransport = new Transport({
      helperArgs: ["--parent-pid", String(process.pid)],
      helperCommand: windowsHelperPath,
      helperEnv:
        codexCliPath == null
          ? undefined
          : { [CODEX_CLI_PATH_ENV]: codexCliPath },
    });
    return helperTransport;
  };

  const closeHelperTransport = async (): Promise<void> => {
    const transport = helperTransport;
    if (transport == null) return;
    helperTransport = null;
    await transport.close();
    logger.debug("computer-use native pipe helper transport closed", {
      safe: {},
    });
  };

  const approvalBridge = createComputerUseApprovalBridge(onAnalyticsEvent);
  const pipeServer = await createComputerUseNativePipeSocketServer({
    logger,
    onLastSocketClosed: () => {
      logger.debug("computer-use native pipe last socket closed", { safe: {} });
      approvalBridge.rejectPendingApprovals(
        Error("Computer Use native pipe client disconnected"),
      );
      closeHelperTransport().catch((error) => {
        logger.warning("computer-use native pipe helper close failed", {
          safe: {},
          sensitive: { error },
        });
      });
    },
    onMessage: (message, sendResponse, socket) => {
      if (!isJsonRpcMessage(message)) return;
      if (approvalBridge.handleApprovalResponse(message)) return;
      const isCloseTurnMessage = isNativePipeCloseTurnMessage(message);
      if (hasActiveRequest && !isCloseTurnMessage) {
        sendBusyResponse(message, sendResponse);
        return;
      }
      if (!isCloseTurnMessage) hasActiveRequest = true;
      handleComputerUseNativePipeMessage({
        activeTurnAnalyticsBySocket,
        activeTurnBySocket,
        approvalBridge,
        closeHelperTransport,
        getHelperTransport,
        logger,
        message,
        onAnalyticsEvent,
        sendResponse,
        socket,
      }).finally(() => {
        if (!isCloseTurnMessage) hasActiveRequest = false;
      });
    },
    onSocketClose: (socket) => {
      endSocketAnalytics(socket);
      activeTurnBySocket.delete(socket);
    },
    onSocketError: (error) => {
      logger.warning("computer-use native pipe socket error", {
        safe: {},
        sensitive: { error },
      });
    },
    pipePath: nativePipeDirectory,
  });

  return {
    closeActiveTurn: async (turn) => {
      const key = turnKey(turn);
      if (!hasActiveTurn(activeTurnBySocket, turn)) return false;
      for (const [socket, activeTurn] of activeTurnBySocket) {
        if (activeTurn === key) activeTurnBySocket.delete(socket);
      }
      await closeHelperTransport();
      return true;
    },
    dispose: async () => {
      approvalBridge.rejectPendingApprovals(
        Error("Computer Use native pipe is shutting down"),
      );
      for (const socket of activeTurnAnalyticsBySocket.keys()) {
        endSocketAnalytics(socket);
      }
      try {
        await closeHelperTransport();
      } finally {
        helperTransport = null;
        hasActiveRequest = false;
        await pipeServer.dispose();
        activeTurnBySocket.clear();
        activeTurnAnalyticsBySocket.clear();
      }
    },
    hasActiveTurn: (turn) => hasActiveTurn(activeTurnBySocket, turn),
    pipePath: pipeServer.pipePath,
  };
}

async function handleComputerUseNativePipeMessage({
  activeTurnAnalyticsBySocket,
  activeTurnBySocket,
  approvalBridge,
  closeHelperTransport,
  getHelperTransport,
  logger,
  message,
  onAnalyticsEvent,
  sendResponse,
  socket,
}: {
  activeTurnAnalyticsBySocket: Map<Socket, ComputerUseToolAnalyticsFields>;
  activeTurnBySocket: Map<Socket, string>;
  approvalBridge: ComputerUseApprovalBridge;
  closeHelperTransport(): Promise<void>;
  getHelperTransport(): Promise<WindowsHelperTransport>;
  logger: ComputerUseNativePipeLogger;
  message: JsonRpcMessage;
  onAnalyticsEvent?: (event: ComputerUseNativePipeAnalyticsEvent) => void;
  sendResponse: SendJsonRpcMessage;
  socket: Socket;
}): Promise<void> {
  const id = message.id;
  if (id == null || !("method" in message)) return;

  let startedAt: number | null = null;
  let invocationFields = null as ReturnType<
    typeof createInvocationAnalyticsFields
  > | null;
  let toolFields: ComputerUseToolAnalyticsFields | null = null;
  let terminalStatus: "completed" | "failed" | null = null;

  try {
    if (message.method === "ping") {
      sendResponse({ id, jsonrpc: "2.0", result: "pong" });
      return;
    }

    if (message.method === "close") {
      const activeAnalytics = activeTurnAnalyticsBySocket.get(socket);
      if (activeAnalytics != null) {
        onAnalyticsEvent?.({ type: "ended", ...activeAnalytics });
      }
      activeTurnAnalyticsBySocket.delete(socket);
      activeTurnBySocket.delete(socket);
      logger.debug("computer-use native pipe close requested", { safe: {} });
      await closeHelperTransport();
      sendResponse({ id, jsonrpc: "2.0", result: null });
      return;
    }

    if (message.method !== "request") {
      throw Error("Unsupported Computer Use native pipe method");
    }

    const request = parseNativePipeRequest(message.params);
    toolFields = createToolAnalyticsFields(
      request.method,
      request.params,
      request.codexTurnMetadata,
    );
    invocationFields = createInvocationAnalyticsFields(
      request.codexTurnMetadata,
    );
    updateActiveTurnAnalytics({
      activeTurnAnalyticsBySocket,
      activeTurnBySocket,
      analyticsFields: toolFields,
      onAnalyticsEvent,
      request,
      socket,
    });
    startedAt = performance.now();
    const result = await (
      await getHelperTransport()
    ).request(request.method, request.params, {
      codexTurnMetadata: request.codexTurnMetadata,
      createElicitation: (approvalRequest) =>
        approvalBridge.requestApprovalForSender(sendResponse, approvalRequest),
    });
    terminalStatus = "completed";
    sendResponse({ id, jsonrpc: "2.0", result });
  } catch (error) {
    if (startedAt != null && terminalStatus == null) terminalStatus = "failed";
    sendResponse(createNativePipeErrorResponse(id, error));
  } finally {
    if (
      startedAt != null &&
      invocationFields != null &&
      toolFields != null &&
      terminalStatus != null
    ) {
      onAnalyticsEvent?.({
        type: "tool-called",
        ...toolFields,
        ...invocationFields,
        durationMs: Math.round(performance.now() - startedAt),
        mcpErrorPresent: terminalStatus === "failed",
        terminalStatus,
      });
    }
  }
}

async function createComputerUseNativePipeSocketServer({
  logger,
  onLastSocketClosed,
  onMessage,
  onSocketClose,
  onSocketError,
  pipePath,
}: {
  logger: ComputerUseNativePipeLogger;
  onLastSocketClosed(): void;
  onMessage(
    message: unknown,
    sendResponse: SendJsonRpcMessage,
    socket: Socket,
  ): void;
  onSocketClose(socket: Socket): void;
  onSocketError(error: Error): void;
  pipePath: string;
}): Promise<{ dispose(): Promise<void>; pipePath: string }> {
  removeStaleNativePipePath(pipePath);
  const sockets = new Set<Socket>();
  const buffers = new Map<Socket, Buffer>();
  const server = net.createServer((socket) => {
    sockets.add(socket);
    buffers.set(socket, Buffer.alloc(0));
    const sendResponse = (message: JsonRpcMessage): void => {
      if (!socket.destroyed) {
        socket.write(encodeNativePipeMessage(JSON.stringify(message)));
      }
    };

    socket.on("data", (chunk) => {
      const chunkBuffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      const buffered = buffers.get(socket) ?? Buffer.alloc(0);
      const decoded = decodeNativePipeMessages(
        Buffer.concat([buffered, chunkBuffer]),
      );
      if (decoded == null) {
        buffers.delete(socket);
        socket.destroy();
        return;
      }
      buffers.set(socket, decoded.remainingData);
      for (const messageText of decoded.messages) {
        try {
          onMessage(JSON.parse(messageText), sendResponse, socket);
        } catch {
          continue;
        }
      }
    });
    socket.on("error", onSocketError);
    socket.on("close", () => {
      onSocketClose(socket);
      sockets.delete(socket);
      buffers.delete(socket);
      if (sockets.size === 0) onLastSocketClosed();
    });
  });

  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(pipePath, () => {
      server.off("error", reject);
      resolve();
    });
  });

  logger.debug("computer-use native pipe listening", {
    safe: {},
    sensitive: { pipePath },
  });

  return {
    dispose: async () => {
      for (const socket of sockets) socket.destroy();
      sockets.clear();
      buffers.clear();
      await new Promise<void>((resolve) => {
        server.close(() => resolve());
      });
      removeNativePipePath(pipePath);
    },
    pipePath,
  };
}

function updateActiveTurnAnalytics({
  activeTurnAnalyticsBySocket,
  activeTurnBySocket,
  analyticsFields,
  onAnalyticsEvent,
  request,
  socket,
}: {
  activeTurnAnalyticsBySocket: Map<Socket, ComputerUseToolAnalyticsFields>;
  activeTurnBySocket: Map<Socket, string>;
  analyticsFields: ComputerUseToolAnalyticsFields;
  onAnalyticsEvent?: (event: ComputerUseNativePipeAnalyticsEvent) => void;
  request: ComputerUseNativeRequest;
  socket: Socket;
}): void {
  const identity = parseTurnIdentity(request.codexTurnMetadata);
  if (
    identity == null ||
    activeTurnBySocket.get(socket) === turnKey(identity)
  ) {
    return;
  }
  const activeAnalytics = activeTurnAnalyticsBySocket.get(socket);
  if (activeAnalytics != null) {
    onAnalyticsEvent?.({ type: "ended", ...activeAnalytics });
  }
  activeTurnBySocket.set(socket, turnKey(identity));
  activeTurnAnalyticsBySocket.set(socket, analyticsFields);
  onAnalyticsEvent?.({ type: "started", ...analyticsFields });
}

function parseNativePipeRequest(params: unknown): ComputerUseNativeRequest {
  const value = asRecord(params);
  if (
    value == null ||
    typeof value.method !== "string" ||
    !value.method.trim()
  ) {
    throw Error("Invalid Computer Use native pipe request");
  }
  return {
    codexTurnMetadata: value.codexTurnMetadata,
    method: value.method,
    params: value.params,
  };
}

function isNativePipeCloseTurnMessage(message: JsonRpcMessage): boolean {
  if ("method" in message && message.method === "close") return true;
  if (!("method" in message) || message.method !== "request") return false;
  try {
    return parseNativePipeRequest(message.params).method === "end_turn";
  } catch {
    return false;
  }
}

function sendBusyResponse(
  message: JsonRpcMessage,
  sendResponse: SendJsonRpcMessage,
): void {
  if (message.id != null) {
    sendResponse({
      error: {
        code: -32000,
        message: "Computer Use helper already has an active request",
      },
      id: message.id,
      jsonrpc: "2.0",
    });
  }
}

function hasActiveTurn(
  activeTurnBySocket: Map<Socket, string>,
  turn: ComputerUseTurnIdentity,
): boolean {
  const key = turnKey(turn);
  for (const activeTurn of activeTurnBySocket.values()) {
    if (activeTurn === key) return true;
  }
  return false;
}

function createNativePipeErrorResponse(
  id: JsonRpcId,
  error: unknown,
): JsonRpcError {
  return {
    error: {
      code: -32000,
      message: error instanceof Error ? error.message : String(error),
    },
    id,
    jsonrpc: "2.0",
  };
}

function isJsonRpcMessage(value: unknown): value is JsonRpcMessage {
  const record = asRecord(value);
  return record?.jsonrpc === "2.0";
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
