// Restored from ref/webview/assets/use-is-remote-host-CdAgT54v.js
// UseIsRemoteHost chunk restored from the Codex webview bundle.
import { useAppScopeValue } from "../boundaries/app-scope";
import { useHostConfigById } from "../boundaries/use-host-config.facade";
import { M } from "../boundaries/thread-context-inputs.facade";

export function initUseIsRemoteHostChunk(): void {}

export function useIsRemoteHost() {
  return useHostConfigById(useAppScopeValue(M)).kind !== "local";
}
