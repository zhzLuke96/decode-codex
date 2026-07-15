// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Barrel for remote project setup helpers consumed through onboarding commons.
import { vscodeApiO as useAppServerQuery } from "../boundaries/vscode-api";

export * from "./remote-directory-path-input";
export * from "./remote-host-runtime";
export * from "./remote-project-paths";
export * from "./remote-ssh-analytics";
export { useAppServerQuery };

export function useIsRemoteProjectsEnabled(): boolean {
  return true;
}

export function useIsWorkspaceOnboardingActive(): boolean {
  return false;
}
