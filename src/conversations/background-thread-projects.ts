// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Project listing for background thread creation.
import {
  workspaceGroupsSignal,
  type WorkspaceGroup,
} from "../runtime/workspace-signals";
import type { BackgroundThreadAppScope } from "./background-thread-types";

function normalizeProject(group: WorkspaceGroup) {
  if (group.projectKind === "remote") {
    if (group.hostId == null) {
      throw Error(`Remote project has no hostId: ${group.projectId}`);
    }
    return {
      projectId: group.projectId,
      projectKind: "remote",
      label: group.label,
      path: group.path,
      hostId: group.hostId,
      hostDisplayName:
        (group as { hostDisplayName?: string | null }).hostDisplayName ?? null,
    };
  }
  return {
    projectId: group.projectId,
    projectKind: "local",
    label: group.label,
    path: group.path ?? undefined,
    hostId: "local",
    hostDisplayName: null,
  };
}

export function getBackgroundProjects(scope: BackgroundThreadAppScope) {
  const groups =
    (scope.get(workspaceGroupsSignal) as WorkspaceGroup[] | null) ?? [];
  return groups.map(normalizeProject);
}

export async function listBackgroundProjects({
  scope,
}: {
  scope: BackgroundThreadAppScope;
}) {
  return {
    schemaVersion: 1,
    projects: getBackgroundProjects(scope),
  };
}
