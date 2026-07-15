// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Resolves the workspace tuple used for projectless conversations.
import { sendHostRequest } from "./host-request-runtime";

export type ProjectlessWorkspaceSelection = {
  cwd: string | null;
  projectlessOutputDirectory: string | null;
  workspaceRoots: string[];
};

function isProjectlessWorkspaceRoots(workspaceRoots: string[]): boolean {
  return (
    workspaceRoots.length === 0 ||
    (workspaceRoots.length === 1 && workspaceRoots[0] === "~")
  );
}

export async function resolveProjectlessWorkspace(
  workspaceRoots: string[],
  {
    directoryName,
    prompt,
  }: { directoryName?: string | null; prompt?: string | null } = {},
): Promise<ProjectlessWorkspaceSelection> {
  if (!isProjectlessWorkspaceRoots(workspaceRoots)) {
    return {
      cwd: workspaceRoots[0] ?? null,
      projectlessOutputDirectory: null,
      workspaceRoots,
    };
  }

  const {
    cwd,
    outputDirectory,
    workspaceRoot,
  } = await sendHostRequest<{
    cwd: string | null;
    outputDirectory: string | null;
    workspaceRoot: string;
  }>("projectless-thread-cwd", {
    params: {
      directoryName,
      prompt: prompt ?? null,
    },
  });

  return {
    cwd,
    projectlessOutputDirectory: outputDirectory,
    workspaceRoots: [workspaceRoot],
  };
}
