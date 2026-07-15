// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Host message request bridge for webview-to-host commands.
import { vscodeApiL as VscodeFetchBridge } from "../boundaries/vscode-api";

export type HostRequestParams = Record<string, unknown>;
export type HostRequestOptions<TResponse = unknown> = Record<
  string,
  unknown
> & {
  params?: HostRequestParams;
  select?: (response: unknown) => TResponse;
  signal?: AbortSignal;
  source?: string;
};

type HostRequestBridge = {
  post<TResponse = unknown>(
    url: string,
    body?: unknown,
    headers?: Record<string, string>,
    signal?: AbortSignal,
  ): Promise<{ body: TResponse }>;
};

const SOURCE_HEADER = "x-codex-git-source";

function getSourceHeaders(source: string | undefined) {
  return source == null ? undefined : { [SOURCE_HEADER]: source };
}

export function initHostRequestRuntime(): void {}

export async function sendHostRequest<TResponse = unknown>(
  method: string,
  options?: HostRequestOptions<TResponse>,
): Promise<TResponse> {
  const { params, select, signal, source } = options ?? {};
  const response = await (
    VscodeFetchBridge.getInstance() as HostRequestBridge
  ).post<unknown>(
    `vscode://codex/${method}`,
    JSON.stringify(params),
    getSourceHeaders(source),
    signal,
  );

  return (select == null ? response.body : select(response.body)) as TResponse;
}
