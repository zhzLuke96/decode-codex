// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Command-menu "New chat in project" registration listing workspace projects.
import {
  CommandMenuItem,
  ProjectKindIcon,
  commandMenuWorkspaceGroupsAtom,
  useAtomValue,
  useCommandMenuRegistration,
  useCommandMenuState,
  useSelectProjectForNewThread,
} from "../boundaries/onboarding-commons-externals.facade";

export interface CommandMenuWorkspaceGroup {
  projectId: string;
  projectKind?: string;
  label?: string | null;
  path?: string | null;
  hostDisplayName?: string | null;
  isCodexWorktree?: boolean;
  repositoryData?: unknown;
}

function buildWorkspaceGroupKey(group: CommandMenuWorkspaceGroup): string {
  return [
    group.projectId,
    group.projectKind,
    group.label,
    group.path,
    group.hostDisplayName ?? "",
  ].join(":");
}

function getProjectDescription(group: CommandMenuWorkspaceGroup): string {
  return group.projectKind === "remote" && group.hostDisplayName
    ? `${group.hostDisplayName}: ${group.path}`
    : (group.path ?? group.projectId);
}

interface NewThreadProjectListProps {
  close: () => void;
  groups: CommandMenuWorkspaceGroup[];
  onSelectProject: (group: CommandMenuWorkspaceGroup) => void;
}

function NewThreadProjectList({
  close,
  groups,
  onSelectProject,
}: NewThreadProjectListProps) {
  const search = useCommandMenuState((state: { search: string }) =>
    state.search.trim(),
  ) as string;
  if (search.length === 0) return null;
  return (
    <>
      {groups.map((group) => (
        <CommandMenuItem
          key={group.projectId}
          value={`new chat project ${group.label} ${group.path} ${group.hostDisplayName ?? ""}`}
          keywords={["new chat", "project", "thread"]}
          title={group.label}
          description={getProjectDescription(group)}
          leftAccessory={
            <ProjectKindIcon
              className="icon-xs shrink-0"
              isCodexWorktree={group.isCodexWorktree}
              isGitRepository={group.repositoryData != null}
              isRemoteProject={group.projectKind === "remote"}
            />
          }
          onSelect={() => {
            onSelectProject(group);
            close();
          }}
        />
      ))}
    </>
  );
}

export function NewThreadInProjectCommand() {
  const groups = useAtomValue(
    commandMenuWorkspaceGroupsAtom,
  ) as CommandMenuWorkspaceGroup[];
  const onSelectProject = useSelectProjectForNewThread() as (
    group: CommandMenuWorkspaceGroup,
  ) => void;
  const dependencyKey = groups.map(buildWorkspaceGroupKey).join("|");

  useCommandMenuRegistration({
    id: "new-thread-in-project",
    groupKey: "codex.commandGroup.workspace",
    enabled: groups.length > 0,
    dependencies: [dependencyKey],
    order: -1,
    render: (close: () => void) => (
      <NewThreadProjectList
        close={close}
        groups={groups}
        onSelectProject={onSelectProject}
      />
    ),
  });

  return null;
}
