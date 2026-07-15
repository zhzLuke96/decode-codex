// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Error handlers for the host<->webview message bridge: log a malformed inbound
// message, and a no-op used to swallow best-effort host request rejections.
import { vscodeLogger } from "../boundaries/vscode-api";

export function logInvalidHostMessage(error: unknown): void {
  vscodeLogger.error("Invalid message received", {
    safe: {},
    sensitive: { error },
  });
}

export function ignoreHostRequestError(): void {}
