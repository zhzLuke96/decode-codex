// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// External-agent config path compatibility exports.
import {
  dirnameExternalAgentConfigPath,
  joinExternalAgentConfigPath,
} from "../../utils/external-agent-config-paths";

export function joinImportedAgentConfigPath(
  rootPath: string,
  ...segments: string[]
): string {
  return joinExternalAgentConfigPath(rootPath, ...segments);
}

export function dirnameImportedAgentConfigPath(path: string): string {
  return dirnameExternalAgentConfigPath(path);
}

export function initExternalAgentConfigPathRuntimeChunk(): void {}
