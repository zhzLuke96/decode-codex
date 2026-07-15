// Restored from ref/webview/assets/select-project-B2Uktcg1.js
// Selects a local, remote, or empty project target and updates active workspace state.
import {
  $i as globalSettingValueSignal,
  n as activeWorkspaceRootsQuery,
} from "../boundaries/thread-context-inputs.facade";
import { vscodeApiF as vscodeBridge } from "../boundaries/vscode-api";
import * as sourceRuntime from "../boundaries/src-l0hb-mz-p";
import { setActiveRemoteProjectId } from "../features/remote-projects";
import { localProjectActions } from "../features/local-projects";
type AppScopeStore = {
  query: {
    setData(signal: unknown, keyOrValue: unknown, value?: unknown): void;
  };
};
type LocalProjectSelection = {
  isLocalProject?: boolean;
  path?: string | null;
  projectId: string;
  projectKind: "local";
};
type RemoteProjectSelection = {
  projectId: string;
  projectKind: "remote";
};
type ProjectSelection =
  | LocalProjectSelection
  | RemoteProjectSelection
  | null
  | undefined;
const { globalSettingKeys } = sourceRuntime as {
  globalSettingKeys: Record<string, string>;
};
function selectProject(store: AppScopeStore, project: ProjectSelection): void {
  if (project?.projectKind === "local") {
    localProjectActions.select(store, project);
    return;
  }
  resetLocalWorkspaceSelection(store, project);
  if (project?.projectKind === "remote") {
    setActiveRemoteProjectId(store, project.projectId);
    return;
  }
  setActiveRemoteProjectId(store, null);
  vscodeBridge.dispatchMessage("electron-clear-active-workspace-root", {});
}
function resetLocalWorkspaceSelection(
  store: AppScopeStore,
  project: ProjectSelection,
): void {
  store.query.setData(
    globalSettingValueSignal,
    globalSettingKeys.ACTIVE_REMOTE_PROJECT_ID,
    {
      value: project?.projectId,
    },
  );
  store.query.setData(activeWorkspaceRootsQuery, {
    roots: [],
  });
}

function initSelectProjectRuntimeChunk(): void {}

export { initSelectProjectRuntimeChunk, selectProject };
