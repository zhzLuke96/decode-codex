// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Primary heading shown on the Electron home page, selecting the prompt copy
// based on the active project, repository state, and work mode.
import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";

const MAX_INLINE_PROJECT_NAME_LENGTH = 15;

export type HomeHeroProjectKind = "none" | "git" | "directory";

export interface HomeHeroProjectContext {
  kind: HomeHeroProjectKind;
  cwd: string;
}

export interface HomeHeroWorkspaceGroup {
  projectId: string;
  path: string;
  label?: string | null;
  projectKind?: string;
  isLocalProject?: boolean;
  repositoryData?: unknown;
}

export interface HomeHeroHeadingProps {
  activeProjectId: string | null;
  isEverydayWorkMode: boolean;
  isProjectSelectionPending?: boolean;
  projectContext: HomeHeroProjectContext;
  workspaceGroups: readonly HomeHeroWorkspaceGroup[];
}

function formatProjectDisplayName(
  path: string,
  label?: string | null,
): string | null {
  if (label != null && label.length > 0) return label;
  if (path.length === 0) return null;
  const segments = path.split(/[\\/]/).filter(Boolean);
  return segments.length > 0 ? segments[segments.length - 1] : path;
}

function isGitRepositoryProject(
  projectContext: HomeHeroProjectContext,
  workspaceGroups: readonly HomeHeroWorkspaceGroup[],
  activeProjectId: string | null,
): boolean {
  const group =
    workspaceGroups.find((group) => group.projectId === activeProjectId) ??
    null;
  if (
    group != null &&
    (group.projectKind !== "local" || !group.isLocalProject)
  ) {
    return group.repositoryData != null;
  }
  return projectContext.kind === "git";
}

function renderProjectSelect(chunks: ReactNode): ReactElement {
  return (
    <button
      type="button"
      className="relative z-0 inline-block cursor-interaction whitespace-pre after:absolute after:-inset-x-1.5 after:-inset-y-0 after:-z-10 after:rounded-xl after:content-[''] group-hover/title:after:bg-token-foreground/5 hover:after:bg-token-foreground/10 data-[state=open]:after:bg-token-foreground/5 data-[state=open]:hover:after:bg-token-foreground/10"
    >
      {Array.isArray(chunks) ? chunks.join("") : chunks}
    </button>
  );
}

function renderProjectHeading(
  projectContext: HomeHeroProjectContext,
  workspaceGroups: readonly HomeHeroWorkspaceGroup[],
  activeProjectId: string | null,
): ReactNode {
  const activeGroup =
    workspaceGroups.find((group) => group.projectId === activeProjectId) ??
    null;
  const projectName =
    activeGroup == null
      ? projectContext.kind === "none"
        ? null
        : formatProjectDisplayName(projectContext.cwd)
      : formatProjectDisplayName(activeGroup.path, activeGroup.label);
  const isGitRepository = isGitRepositoryProject(
    projectContext,
    workspaceGroups,
    activeProjectId,
  );
  const isProjectNameTooLong =
    projectName == null || projectName.length > MAX_INLINE_PROJECT_NAME_LENGTH;

  if (isGitRepository) {
    return isProjectNameTooLong ? (
      <FormattedMessage
        id="home.hero.whatShouldWeBuild"
        defaultMessage="What should we build?"
        description="Primary heading on the electron home page when the active git repository project name is too long"
      />
    ) : (
      <FormattedMessage
        id="home.hero.whatShouldWeBuildInProject"
        defaultMessage="What should we build in <projectSelect>{projectName}</projectSelect>?"
        description="Primary heading on the electron home page when the active project is a git repository"
        values={{ projectName, projectSelect: renderProjectSelect }}
      />
    );
  }

  return projectContext.kind === "none" || isProjectNameTooLong ? (
    <FormattedMessage
      id="home.hero.whatShouldWeWorkOn"
      defaultMessage="What should we work on?"
      description="Primary heading on the electron home page when there is no git repository or the active project name is too long"
    />
  ) : (
    <FormattedMessage
      id="home.hero.whatShouldWeWorkOnInProject"
      defaultMessage="What should we work on in <projectSelect>{projectName}?</projectSelect>"
      description="Primary heading on the electron home page when the active project is not a git repository"
      values={{ projectName, projectSelect: renderProjectSelect }}
    />
  );
}

export function HomeHeroHeading({
  activeProjectId,
  isEverydayWorkMode,
  isProjectSelectionPending = false,
  projectContext,
  workspaceGroups,
}: HomeHeroHeadingProps): ReactElement {
  let heading: ReactNode;
  if (isEverydayWorkMode) {
    heading = (
      <FormattedMessage
        id="home.hero.whatShouldWeGetDone"
        defaultMessage="What should we get done?"
        description="Primary heading on the electron home page in everyday work mode"
      />
    );
  } else if (isProjectSelectionPending) {
    heading = null;
  } else {
    heading = renderProjectHeading(
      projectContext,
      workspaceGroups,
      activeProjectId,
    );
  }

  return (
    <div
      className="heading-xl flex max-w-full min-w-0 items-end justify-center text-center font-normal whitespace-pre-wrap text-token-foreground select-none"
      data-feature={undefined}
    >
      <span className="group/title inline-block max-w-full">{heading}</span>
    </div>
  );
}

let heroHeadingChunkInitialized = false;

export function initHomeHeroHeadingChunk(): void {
  if (heroHeadingChunkInitialized) return;
  heroHeadingChunkInitialized = true;
}
