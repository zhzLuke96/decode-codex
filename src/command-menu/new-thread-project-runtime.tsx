// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Helpers for the command-menu "new chat in project" action.
import { useCallback } from "react";
import { LocalRemoteProjectIcon as ProjectKindIcon } from "../remote/local-remote-selection/project-icon";
import { useOpenHomeRoute } from "../routes/open-home-route";

export { ProjectKindIcon };

type CommandMenuProject = {
  isLocalProject?: boolean;
  path?: string | null;
  projectId: string;
  projectKind?: string;
};

export function useSelectProjectForNewThread() {
  const openHomeRoute = useOpenHomeRoute();
  return useCallback(
    (project: CommandMenuProject) => {
      if (project.projectKind === "remote") {
        openHomeRoute({
          activeProject: {
            projectId: project.projectId,
            projectKind: "remote",
          },
          sidebarMode: "codex",
        });
        return;
      }

      openHomeRoute({
        activeProject: {
          isLocalProject: project.isLocalProject,
          path: project.path,
          projectId: project.projectId,
          projectKind: "local",
        },
        pendingLocalProjectPreviousWorkspaceRoot: null,
        prefillCwd: project.path ?? null,
        sidebarMode: "codex",
      });
    },
    [openHomeRoute],
  );
}
