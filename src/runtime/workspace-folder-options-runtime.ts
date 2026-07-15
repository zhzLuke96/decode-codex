// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Workspace folder option builder shared by automation and worktree selectors.
export interface WorkspaceFolderOption {
  description?: string;
  isCodexWorktree?: boolean;
  label: string;
  value: string;
}

interface WorkspaceGroupLike {
  isCodexWorktree?: boolean;
  label?: string | null;
  path?: string | null;
  projectKind?: string | null;
  repositoryData?: {
    rootFolder?: string | null;
  } | null;
}

export function buildWorkspaceFolderOptions({
  workspaceGroups,
  roots,
  formatRootLabel,
}: {
  workspaceGroups?: readonly WorkspaceGroupLike[] | null;
  roots: readonly string[];
  formatRootLabel: (root: string) => string;
}): WorkspaceFolderOption[] {
  return workspaceGroups != null
    ? workspaceGroups
        .filter((group) => group.projectKind === "local" && group.path != null)
        .map((group) => {
          const rootFolder = group.repositoryData?.rootFolder ?? undefined;
          const label = group.label ?? group.path ?? "";
          return {
            value: group.path ?? "",
            label,
            description:
              rootFolder != null && rootFolder !== label ? rootFolder : undefined,
            isCodexWorktree: group.isCodexWorktree,
          };
        })
    : roots.map((root) => ({
        value: root,
        label: formatRootLabel(root),
      }));
}
