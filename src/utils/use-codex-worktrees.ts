// Restored from ref/webview/assets/use-codex-worktrees-DzKC3qS4.js
// Codex worktrees query hook for git host configs.
import {
  normalizeHostConfigForWorktreeKey,
  serviceClientForHost,
} from "../boundaries/thread-context-inputs.facade";
import {
  vscodeApiU as queryDurations,
  vscodeApiV as useQuery,
} from "../boundaries/vscode-api";
import { once } from "../runtime/commonjs-interop";
import { codexWorktreesQueryKey } from "./worktree-query-keys";
type QueryFunctionContext = {
  signal?: AbortSignal;
};
const initUseCodexWorktreesChunk = once(() => {});
function useCodexWorktrees(hostConfig: unknown, operationSource?: string) {
  const normalizedHostKey = normalizeHostConfigForWorktreeKey(hostConfig);
  return useQuery({
    queryKey: codexWorktreesQueryKey(normalizedHostKey),
    queryFn: ({ signal }: QueryFunctionContext) =>
      serviceClientForHost("git").request({
        method: "codex-worktrees",
        params: {
          hostConfig,
          operationSource,
        },
        signal,
      }),
    staleTime: queryDurations.INFINITE,
    gcTime: 1_800_000,
  });
}
export { useCodexWorktrees, initUseCodexWorktreesChunk };
