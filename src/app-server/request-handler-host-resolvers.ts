// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Higher-order wrappers that resolve an AppServerManager (by conversation id or
// host id) or an AppServerRequestClient from the host registry before invoking a
// request handler, throwing a descriptive error when nothing is registered.

export type HostId = string;
export type AppServerManager = unknown;
export type AppServerRequestClient = unknown;

export interface HostRegistry {
  getManagerForConversationId(conversationId: string): AppServerManager | null;
  getManagerForHostId(hostId: HostId): AppServerManager | null;
  getManagerForHostIdOrThrowWhenDefaultHost(
    hostId: HostId,
  ): AppServerManager | null;
  getRequestClientForHostId(hostId: HostId): AppServerRequestClient | null;
}

type WithHostId = { hostId?: string };
type WithConversationId = { conversationId: string; hostId?: string };

/**
 * Resolve the manager by explicit `hostId` when present, otherwise by the
 * request's `conversationId`.
 */
export function withManagerForConversationOrHost<
  TParams extends WithConversationId,
  TResult,
>(
  handler: (
    manager: AppServerManager,
    params: TParams,
    registry: HostRegistry,
  ) => Promise<TResult>,
): (registry: HostRegistry, params: TParams) => Promise<TResult> {
  return async (registry: HostRegistry, params: TParams): Promise<TResult> => {
    const hostId =
      "hostId" in params && typeof params.hostId === "string"
        ? params.hostId
        : undefined;
    const manager =
      hostId == null
        ? registry.getManagerForConversationId(params.conversationId)
        : registry.getManagerForHostIdOrThrowWhenDefaultHost(hostId);
    if (manager == null) {
      throw Error(
        hostId == null
          ? `No AppServerManager registered for conversationId: ${params.conversationId}`
          : `No AppServerManager registered for hostId: ${hostId}`,
      );
    }
    return handler(manager, params, registry);
  };
}

/** Resolve the manager by required `hostId`, forwarding the remaining params. */
export function withManagerForHost<TParams extends WithHostId, TResult>(
  handler: (
    manager: AppServerManager,
    params: Omit<TParams, "hostId">,
    registry: HostRegistry,
  ) => Promise<TResult>,
): (registry: HostRegistry, params: TParams) => Promise<TResult> {
  return async (registry: HostRegistry, params: TParams): Promise<TResult> => {
    const { hostId, ...rest } = params;
    const manager = registry.getManagerForHostId(hostId as HostId);
    if (manager == null) {
      throw Error(`No AppServerManager registered for hostId: ${hostId}`);
    }
    return handler(manager, rest, registry);
  };
}

/**
 * Resolve the request client by required `hostId`, forwarding the remaining
 * params.
 */
export function withRequestClientForHost<TParams extends WithHostId, TResult>(
  handler: (
    client: AppServerRequestClient,
    params: Omit<TParams, "hostId">,
  ) => Promise<TResult>,
): (registry: HostRegistry, params: TParams) => Promise<TResult> {
  return async (registry: HostRegistry, params: TParams): Promise<TResult> => {
    const { hostId, ...rest } = params;
    const client = registry.getRequestClientForHostId(hostId as HostId);
    if (client == null) {
      throw Error(`No AppServerRequestClient registered for hostId: ${hostId}`);
    }
    return handler(client, rest);
  };
}
