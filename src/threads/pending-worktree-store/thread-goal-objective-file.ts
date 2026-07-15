// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { joinFilesystemPath } from "../../boundaries/rpc.facade";
import { vscodeApiN as callVscodeApi } from "../../boundaries/vscode-api";
import {
  GOAL_OBJECTIVE_ATTACHMENT_FILENAME,
  GOAL_OBJECTIVE_FILE_PREFIX,
  GOAL_OBJECTIVE_FILE_SUFFIX,
  UUID_DIRECTORY_RE,
} from "./thread-goal-constants";
export async function readMaterializedThreadGoalObjective({
  hostId,
  objective,
}: {
  hostId: string;
  objective: string;
}) {
  const objectivePath = await resolveStoredGoalObjectiveFile({
    hostId,
    objective,
  });
  if (objectivePath == null) return objective;
  const { contents } = await callVscodeApi("read-file", {
    params: {
      hostId,
      path: objectivePath,
    },
  });
  return contents;
}
async function resolveStoredGoalObjectiveFile({
  hostId,
  objective,
}: {
  hostId: string;
  objective: string;
}) {
  const path = parseGoalObjectiveFileReference(objective);
  if (path == null) return null;
  const { codexHome } = await callVscodeApi("codex-home", {
    params: {
      hostId,
    },
  });
  return isAllowedGoalObjectiveFilePath(path, codexHome) ? path : null;
}
function parseGoalObjectiveFileReference(objective: string): string | null {
  if (
    !objective.startsWith(GOAL_OBJECTIVE_FILE_PREFIX) ||
    !objective.endsWith(GOAL_OBJECTIVE_FILE_SUFFIX)
  ) {
    return null;
  }
  const path = objective.slice(
    GOAL_OBJECTIVE_FILE_PREFIX.length,
    -GOAL_OBJECTIVE_FILE_SUFFIX.length,
  );
  return path.length > 0 ? path : null;
}
function isAllowedGoalObjectiveFilePath(path: string, codexHome: string) {
  const directoryName = path.split(/[\\/]/u).filter(Boolean).at(-2);
  return directoryName == null || !UUID_DIRECTORY_RE.test(directoryName)
    ? false
    : path ===
        joinFilesystemPath(
          codexHome,
          "attachments",
          directoryName,
          GOAL_OBJECTIVE_ATTACHMENT_FILENAME,
        );
}
