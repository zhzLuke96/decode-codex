// Restored from ref/.vite/build/main-Cfnoc8EH.js
// node_repl host-services native pipe and ensureService handler.

import { randomUUID } from "node:crypto";
import {
  chmodOwnerReadWrite,
  startNativePipeTransport,
  type NativePipeTransport,
} from "./native-pipe";
import type {
  HostServiceHandler,
  JsonRpcId,
  JsonRpcMessage,
  NodeReplHostServicesLogger,
  SocketPeerAuthorization,
} from "./types";

export function createDefaultHostServicesPipePath(): string {
  return `/tmp/codex-host-services-${randomUUID()}.sock`;
}

export async function startNodeReplHostServicesPipe({
  logger,
  pipePath = createDefaultHostServicesPipePath(),
  services,
  socketPeerAuthorizer = () => ({ authorized: true }),
  startTransport = startNativePipeTransport,
}: {
  logger: NodeReplHostServicesLogger;
  pipePath?: string;
  services: Map<string, HostServiceHandler>;
  socketPeerAuthorizer?: (socket: unknown) => SocketPeerAuthorization;
  startTransport?: typeof startNativePipeTransport;
}): Promise<{ dispose(): Promise<void> | void; pipePath: string }> {
  const transport = await startTransport({
    events: {
      onAuthorizationError: (error) => {
        logger.warning("node_repl_host_services_peer_authorization_failed", {
          safe: {},
          sensitive: { error },
        });
      },
      onListening: (listeningPipePath) => {
        chmodOwnerReadWrite(listeningPipePath);
        logger.info("node_repl_host_services_listening", {
          safe: {},
          sensitive: { pipePath: listeningPipePath },
        });
      },
      onRejectedSocket: (result) => {
        logger.warning("node_repl_host_services_peer_rejected", {
          safe: { reason: result.reason ?? "unauthorized" },
          sensitive: {},
        });
      },
      onSocketError: (error) => {
        logger.warning("node_repl_host_services_socket_error", {
          safe: {},
          sensitive: { error },
        });
      },
    },
    pipePath,
    socketPeerAuthorizer: socketPeerAuthorizer as Parameters<
      typeof startNativePipeTransport
    >[0]["socketPeerAuthorizer"],
  });
  transport.setMessageCallback((message) => {
    void handleNodeReplHostServiceMessage({
      logger,
      message,
      sendResponse: (response) => {
        transport.sendMessage(response);
      },
      services,
    });
  });
  return {
    dispose: () => transport.close(),
    pipePath: transport.pipePath,
  };
}

export async function handleNodeReplHostServiceMessage({
  logger,
  message,
  sendResponse,
  services,
}: {
  logger: NodeReplHostServicesLogger;
  message: JsonRpcMessage;
  sendResponse(message: JsonRpcMessage): void;
  services: Map<string, HostServiceHandler>;
}): Promise<void> {
  const request = parseEnsureServiceRequest(message);
  if (request == null) {
    const id = getJsonRpcId(message);
    if (id != null) {
      sendResponse({
        error: { code: -32602, message: "Invalid host service request" },
        id,
        jsonrpc: "2.0",
      });
    }
    return;
  }

  const handler = services.get(request.service);
  if (handler == null) {
    sendResponse({
      error: {
        code: -32602,
        message: `Unsupported host service: ${request.service}`,
      },
      id: request.id,
      jsonrpc: "2.0",
    });
    return;
  }

  try {
    const result = await handler();
    sendResponse({ id: request.id, jsonrpc: "2.0", result: result ?? {} });
  } catch (error) {
    logger.warning("node_repl_host_service_ensure_failed", {
      safe: { service: request.service },
      sensitive: { error },
    });
    sendResponse({
      error: { code: -32000, message: "Host service ensure failed" },
      id: request.id,
      jsonrpc: "2.0",
    });
  }
}

export function createComputerUseHostService(
  ensureServicePid: () => Promise<unknown> | unknown,
): HostServiceHandler {
  return async () => {
    await ensureServicePid();
    return {};
  };
}

function parseEnsureServiceRequest(
  message: JsonRpcMessage,
): { id: JsonRpcId; service: string } | null {
  const params = asRecord(message.params);
  if (
    message.jsonrpc !== "2.0" ||
    message.method !== "ensureService" ||
    !isJsonRpcId(message.id) ||
    params == null ||
    typeof params.service !== "string" ||
    params.service.trim().length === 0 ||
    params.service.length > 128
  ) {
    return null;
  }
  return { id: message.id, service: params.service };
}

function getJsonRpcId(message: JsonRpcMessage): JsonRpcId | null {
  return isJsonRpcId(message.id) ? message.id : null;
}

function isJsonRpcId(value: unknown): value is JsonRpcId {
  return typeof value === "string" || typeof value === "number";
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
