// Restored from ref/webview/assets/local-remote-selection-DRnEOc8g.js
// local-remote-selection-DRnEOc8g chunk restored from the Codex webview bundle.
import {
  appScopeG as createScopedState,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { localProjectActions } from "../../features/local-projects";
import type { AppScopeSetter, LocalRemoteProjectSelection } from "./types";
export const selectedLocalRemoteCwdState = createScopedState(
  appScopeRoot,
  null as string | null,
);
export function setSelectedLocalRemoteCwd(
  store: AppScopeSetter,
  selectedProject: LocalRemoteProjectSelection | null | undefined,
) {
  let cwd = "~";
  if (selectedProject != null) {
    cwd =
      selectedProject.projectKind === "remote"
        ? selectedProject.path
        : localProjectActions.getThreadStartCwd(selectedProject);
  }
  store.set(selectedLocalRemoteCwdState, cwd);
  return cwd;
}

export function initSelectedLocalRemoteCwdStateChunk(): void {}
