// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Host app-server request bridge used by conversation feature modules.
import { sendAppServerRequest as sendHostAppServerRequest } from "../boundaries/use-host-config.facade";

export type AppServerRequestParams = Record<string, unknown>;

export function initAppServerRequestRuntime(): void {}

export function sendAppServerRequest<TResponse = unknown>(
  method: string,
  params?: AppServerRequestParams,
): Promise<TResponse> {
  return sendHostAppServerRequest(method, params ?? {}) as Promise<TResponse>;
}
