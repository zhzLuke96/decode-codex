// Restored from ref/webview/assets/app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings-CsI-U3JO.js
// app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings-CsI-U3JO chunk restored from the Codex webview bundle.
import { _vscodeApiC as VscodeApiError } from "../../boundaries/vscode-api";
import {
  handleLocalRemoteControlEnableError,
  initLocalRemoteControlEnabledChunk,
  initLocalRemoteControlErrorHandlingChunk,
  initSetRemoteControlEnabledForHostChunk,
  isRemoteControlTokenInvalidatedError,
  setLocalRemoteControlEnabled,
  setRemoteControlEnabledForHost,
} from "../../remote/local-remote-control-enabled-sync";
const REMOTE_CONNECTIONS_AUTH_CLIENT_ID =
  "client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR";
function initRemoteConnectionsAuthClientIdChunk(): void {}
function isHandledLocalRemoteControlEnableError(error: unknown): boolean {
  return (
    isRemoteControlTokenInvalidatedError(error) ||
    error instanceof VscodeApiError
  );
}
export {
  setLocalRemoteControlEnabled,
  REMOTE_CONNECTIONS_AUTH_CLIENT_ID,
  initLocalRemoteControlEnabledChunk,
  initRemoteConnectionsAuthClientIdChunk,
  isHandledLocalRemoteControlEnableError,
  initSetRemoteControlEnabledForHostChunk,
  handleLocalRemoteControlEnableError,
  setRemoteControlEnabledForHost,
  initLocalRemoteControlErrorHandlingChunk,
};
