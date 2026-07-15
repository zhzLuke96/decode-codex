// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Project-assignment normalization used when starting or handing off threads.
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";

type ProjectAssignment = {
  cwd?: unknown;
  hostId?: string | null;
  path?: string | null;
  pendingCoreUpdate?: boolean;
  projectId?: string | null;
  projectKind?: string | null;
  [key: string]: unknown;
};

type BuildProjectAssignmentInput =
  | {
      type: "local-project";
      projectId?: string | null;
    }
  | {
      type: "remote-project";
      hostId: string;
      path: string;
      projectId: string;
    }
  | {
      type: "assignment";
      assignment?: ProjectAssignment | null;
      executionHostId: string;
    };

export function buildProjectAssignment(
  input: BuildProjectAssignmentInput,
): ProjectAssignment | undefined {
  switch (input.type) {
    case "local-project":
      return input.projectId == null || input.projectId === "~"
        ? undefined
        : {
            pendingCoreUpdate: false,
            projectId: input.projectId,
            projectKind: "local",
          };
    case "remote-project":
      return {
        hostId: input.hostId,
        path: input.path,
        pendingCoreUpdate: false,
        projectId: input.projectId,
        projectKind: "remote",
      };
    case "assignment": {
      if (!isCompatibleAssignment(input.assignment, input.executionHostId)) {
        return undefined;
      }
      const { cwd: _cwd, ...assignment } = input.assignment;
      return {
        ...assignment,
        pendingCoreUpdate: false,
      };
    }
  }
}

function isCompatibleAssignment(
  assignment: ProjectAssignment | null | undefined,
  executionHostId: string,
): assignment is ProjectAssignment {
  if (assignment == null) return false;
  if (assignment.projectKind === "local") {
    return executionHostId === LOCAL_HOST_ID;
  }
  return (
    assignment.projectKind === "remote" &&
    executionHostId !== LOCAL_HOST_ID &&
    (assignment.hostId == null || assignment.hostId === executionHostId)
  );
}
