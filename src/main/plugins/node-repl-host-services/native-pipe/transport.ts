// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Socket transport for native-pipe JSON-RPC messages.

import net, { Socket } from "node:net";
import type {
  JsonRpcId,
  JsonRpcMessage,
  SocketPeerAuthorization,
} from "../types";
import { decodeNativePipeMessages, encodeNativePipeMessage } from "./framing";
import {
  prepareNativePipePath,
  removeNativePipePath,
  resolveNativePipePath,
} from "./paths";

const REQUEST_ID_PREFIX = "__native_pipe_request_";

export type NativePipeEvents = {
  onAuthorizationError?(error: unknown): void;
  onInvalidFrame?(): void;
  onListening?(pipePath: string): void;
  onRejectedSocket?(result: SocketPeerAuthorization): void;
  onSocketError?(error: Error): void;
};

export type NativePipeTransport = {
  close(): Promise<void>;
  pipePath: string;
  sendMessage(message: JsonRpcMessage): void;
  setMessageCallback(callback: (message: JsonRpcMessage) => void): void;
};

export async function startNativePipeTransport({
  events = {},
  nativePipeDirectory,
  pipePath,
  socketPeerAuthorizer = () => ({ authorized: true }),
}: {
  events?: NativePipeEvents;
  nativePipeDirectory?: string;
  pipePath?: string;
  socketPeerAuthorizer?: (socket: Socket) => SocketPeerAuthorization;
} = {}): Promise<NativePipeTransport> {
  const transport = new NativePipeTransportImpl(
    pipePath ?? (await resolveNativePipePath(nativePipeDirectory)),
    socketPeerAuthorizer,
    events,
  );
  try {
    await transport.start();
    return transport;
  } catch (error) {
    await transport.close();
    throw error;
  }
}

class NativePipeTransportImpl implements NativePipeTransport {
  private readonly clientIdsBySocket = new Map<Socket, string>();
  private messageCallback: ((message: JsonRpcMessage) => void) | null = null;
  private nextClientId = 1;
  private ownsPipePath = false;
  private readonly pendingDataBySocket = new Map<Socket, Buffer>();
  readonly pipePath: string;
  private readonly server = net.createServer((socket) => {
    this.handleSocketConnection(socket);
  });
  private readonly socketPeerAuthorizer: (
    socket: Socket,
  ) => SocketPeerAuthorization;
  private readonly sockets = new Set<Socket>();
  private readonly socketsByClientId = new Map<string, Socket>();
  private started = false;

  constructor(
    pipePath: string,
    socketPeerAuthorizer: (socket: Socket) => SocketPeerAuthorization,
    private readonly events: NativePipeEvents,
  ) {
    this.pipePath = pipePath;
    this.socketPeerAuthorizer = socketPeerAuthorizer;
  }

  async start(): Promise<void> {
    await prepareNativePipePath(this.pipePath);
    await new Promise<void>((resolve, reject) => {
      this.server.once("error", reject);
      this.server.listen(this.pipePath, () => {
        this.server.off("error", reject);
        resolve();
      });
    });
    this.started = true;
    this.ownsPipePath = true;
    this.events.onListening?.(this.pipePath);
  }

  sendMessage(message: JsonRpcMessage): void {
    if (isRequestLikeMessage(message)) {
      const encoded = encodeNativePipeMessage(JSON.stringify(message));
      for (const socket of this.sockets) {
        if (!socket.destroyed) socket.write(encoded);
      }
      return;
    }

    const target = parseWrappedRequestId(message);
    if (target == null) return;
    const socket = this.socketsByClientId.get(target.clientId);
    if (socket == null) return;
    message.id = target.messageId;
    const encoded = encodeNativePipeMessage(JSON.stringify(message));
    if (!socket.destroyed) socket.write(encoded);
  }

  setMessageCallback(callback: (message: JsonRpcMessage) => void): void {
    this.messageCallback = callback;
  }

  async close(): Promise<void> {
    const shouldRemovePipePath = this.ownsPipePath;
    for (const socket of this.sockets) socket.destroy();
    this.sockets.clear();
    this.pendingDataBySocket.clear();
    this.clientIdsBySocket.clear();
    this.socketsByClientId.clear();
    if (this.started) {
      await new Promise<void>((resolve) => {
        this.server.close(() => resolve());
      });
      this.started = false;
    }
    this.ownsPipePath = false;
    if (shouldRemovePipePath) removeNativePipePath(this.pipePath);
  }

  private handleSocketConnection(socket: Socket): void {
    let authorization: SocketPeerAuthorization;
    try {
      authorization = this.socketPeerAuthorizer(socket);
    } catch (error) {
      this.events.onAuthorizationError?.(error);
      socket.destroy();
      return;
    }
    if (!authorization.authorized) {
      this.events.onRejectedSocket?.(authorization);
      socket.destroy();
      return;
    }
    this.sockets.add(socket);
    this.pendingDataBySocket.set(socket, Buffer.alloc(0));
    const clientId = String(this.nextClientId);
    this.nextClientId += 1;
    this.clientIdsBySocket.set(socket, clientId);
    this.socketsByClientId.set(clientId, socket);
    socket.on("data", (chunk) => this.handleSocketData(socket, chunk));
    socket.on("error", (error) => this.events.onSocketError?.(error));
    socket.on("close", () => this.handleSocketClose(socket));
  }

  private handleSocketClose(socket: Socket): void {
    this.sockets.delete(socket);
    this.pendingDataBySocket.delete(socket);
    const removedClientId = this.clientIdsBySocket.get(socket);
    if (removedClientId != null) {
      this.clientIdsBySocket.delete(socket);
      this.socketsByClientId.delete(removedClientId);
    }
  }

  private handleSocketData(socket: Socket, chunk: Buffer | string): void {
    const data = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    const buffered = this.pendingDataBySocket.get(socket) ?? Buffer.alloc(0);
    const decoded = decodeNativePipeMessages(Buffer.concat([buffered, data]));
    if (decoded == null) {
      this.events.onInvalidFrame?.();
      this.pendingDataBySocket.delete(socket);
      socket.destroy();
      return;
    }
    this.pendingDataBySocket.set(socket, decoded.remainingData);
    for (const messageText of decoded.messages) {
      this.handleIncomingMessage(socket, messageText);
    }
  }

  private handleIncomingMessage(socket: Socket, messageText: string): void {
    let message: JsonRpcMessage;
    try {
      message = parseTransportMessage(messageText);
    } catch {
      return;
    }
    if (shouldWrapRequestId(message)) {
      const clientId = this.clientIdsBySocket.get(socket);
      if (clientId == null) return;
      message.id = wrapRequestId(clientId, message.id);
    }
    this.messageCallback?.(message);
  }
}

function wrapRequestId(clientId: string, id: JsonRpcId | undefined): string {
  return `${REQUEST_ID_PREFIX}${clientId}:${JSON.stringify(id)}`;
}

function parseWrappedRequestId(
  message: JsonRpcMessage,
): { clientId: string; messageId: JsonRpcId } | undefined {
  if (typeof message.id !== "string") return;
  if (!message.id.startsWith(REQUEST_ID_PREFIX)) return;
  const rest = message.id.slice(REQUEST_ID_PREFIX.length);
  const separator = rest.indexOf(":");
  if (separator < 1) return;
  const clientId = rest.slice(0, separator);
  try {
    const messageId = JSON.parse(rest.slice(separator + 1));
    if (isJsonRpcId(messageId)) return { clientId, messageId };
  } catch {
    return;
  }
}

function parseTransportMessage(messageText: string): JsonRpcMessage {
  const value = JSON.parse(messageText);
  if (typeof value !== "object" || value == null || Array.isArray(value)) {
    throw Error("invalid transport message");
  }
  return value as JsonRpcMessage;
}

function shouldWrapRequestId(message: JsonRpcMessage): boolean {
  return isRequestLikeMessage(message) && isJsonRpcId(message.id);
}

function isRequestLikeMessage(message: JsonRpcMessage): boolean {
  return "method" in message && typeof message.method === "string";
}

function isJsonRpcId(value: unknown): value is JsonRpcId {
  return typeof value === "string" || typeof value === "number";
}
