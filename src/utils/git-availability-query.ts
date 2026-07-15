// Restored from ref/webview/assets/git-availability-query-Bg0jv6sY.js
// GitAvailabilityQuery chunk restored from the Codex webview bundle.
import { _appScopeH, appScopeRoot } from "../boundaries/app-scope";
import { er, Zn } from "../boundaries/thread-context-inputs.facade";
import { vscodeApiU } from "../boundaries/vscode-api";
export const gitAvailabilityQuery = _appScopeH(
  appScopeRoot,
  ({ hostConfig, operationSource }) => ({
    queryKey: ["git", "availability", Zn(hostConfig)],
    queryFn: ({ signal }) =>
      er("git").request({
        method: "availability",
        params: {
          hostConfig,
          operationSource,
        },
        signal,
      }),
    refetchOnWindowFocus: true,
    staleTime: vscodeApiU.THIRTY_SECONDS,
  }),
  {
    excludeFieldsFromKey: ["operationSource"],
  },
);
