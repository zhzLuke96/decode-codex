// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js
// Searchable project list used by the composer project selector dropdown.

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Tooltip } from "../../ui/tooltip-b";
import { CheckIcon } from "../composer-footer-branch-switcher";
import { ProjectIcon } from "./icons";
import type {
  ComposerProjectAction,
  ComposerProjectGroup,
  ProjectAppearance,
} from "./types";

export interface ComposerProjectListProps {
  emptyMessage: ReactNode;
  footerActions?: readonly ComposerProjectAction[];
  groups: readonly ComposerProjectGroup[];
  projectAppearances?: Record<string, ProjectAppearance | null | undefined>;
  searchPlaceholder: string;
  selectedProjectIds?: readonly string[];
  onSelectProjectId: (projectId: string, project: ComposerProjectGroup) => void;
}

export function ComposerProjectList({
  emptyMessage,
  footerActions = [],
  groups,
  projectAppearances = {},
  searchPlaceholder,
  selectedProjectIds = [],
  onSelectProjectId,
}: ComposerProjectListProps) {
  const [searchText, setSearchText] = useState("");
  const duplicateLabels = useMemo(
    () => findDuplicateProjectLabels(groups),
    [groups],
  );
  const normalizedQuery = searchText.trim().toLowerCase();
  const visibleGroups = groups.filter((group) => {
    if (normalizedQuery.length === 0) return true;
    return [
      group.label,
      group.path,
      group.repositoryData?.rootFolder,
      group.hostDisplayName,
    ].some((value) => value?.toLowerCase().includes(normalizedQuery));
  });

  return (
    <>
      <label className="sr-only" htmlFor="composer-project-search">
        {searchPlaceholder}
      </label>
      <input
        id="composer-project-search"
        className="border-token-border mb-1 h-8 rounded-lg border bg-transparent px-2.5 text-sm outline-none placeholder:text-token-description-foreground"
        placeholder={searchPlaceholder}
        value={searchText}
        onChange={(event) => setSearchText(event.currentTarget.value)}
      />
      <div className="vertical-scroll-fade-mask flex max-h-[220px] flex-col overflow-y-auto text-sm [--edge-fade-distance:1.5rem]">
        {visibleGroups.length === 0 ? (
          <div className="px-3 py-2 text-sm text-token-description-foreground">
            {emptyMessage}
          </div>
        ) : (
          visibleGroups.map((project) => (
            <ProjectMenuItem
              key={project.projectId}
              duplicateLabels={duplicateLabels}
              project={project}
              projectAppearance={projectAppearances[project.projectId] ?? null}
              selected={selectedProjectIds.includes(project.projectId)}
              onSelect={() => onSelectProjectId(project.projectId, project)}
            />
          ))
        )}
      </div>
      {footerActions.length > 0 ? (
        <>
          <div className="bg-token-border my-1 h-px" />
          <div className="flex flex-col">
            {footerActions.map((action, index) => (
              <ProjectActionButton
                key={index}
                icon={action.icon}
                label={action.label}
                onSelect={action.onSelect}
              />
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}

interface ProjectMenuItemProps {
  duplicateLabels: ReadonlyMap<string, readonly string[]>;
  project: ComposerProjectGroup;
  projectAppearance: ProjectAppearance | null;
  selected: boolean;
  onSelect: () => void;
}

function ProjectMenuItem({
  duplicateLabels,
  project,
  projectAppearance,
  selected,
  onSelect,
}: ProjectMenuItemProps) {
  const rootFolder = project.repositoryData?.rootFolder ?? null;
  const showRootFolder = rootFolder != null && rootFolder !== project.label;
  const duplicatePaths = duplicateLabels.get(project.label) ?? [];
  const tooltipText =
    duplicatePaths.length > 1 && project.path != null
      ? project.path
      : undefined;

  const row = (
    <button
      type="button"
      className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-token-foreground hover:bg-token-list-hover-background"
      onClick={onSelect}
    >
      <ProjectAvatar
        appearance={projectAppearance}
        isRemoteProject={project.projectKind === "remote"}
      />
      <span className="flex min-w-0 flex-1 items-center gap-1">
        <span className="truncate">{project.label}</span>
        {project.hostDisplayName == null ? null : (
          <span className="truncate text-sm text-token-description-foreground">
            {project.hostDisplayName}
          </span>
        )}
        {showRootFolder ? (
          <span className="truncate text-sm text-token-description-foreground">
            {rootFolder}
          </span>
        ) : null}
      </span>
      {selected ? <CheckIcon className="icon-xs shrink-0" /> : null}
    </button>
  );

  if (tooltipText == null) return row;

  return <Tooltip tooltipContent={tooltipText}>{row}</Tooltip>;
}

interface ProjectAvatarProps {
  appearance: ProjectAppearance | null;
  isRemoteProject: boolean;
}

function ProjectAvatar({ appearance, isRemoteProject }: ProjectAvatarProps) {
  const label = appearance?.label?.trim();
  if (label != null && label.length > 0) {
    return (
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold"
        style={{
          backgroundColor: appearance?.backgroundColor ?? undefined,
          color: appearance?.color ?? undefined,
        }}
      >
        {label.slice(0, 2)}
      </span>
    );
  }

  return (
    <ProjectIcon
      className="icon-xs shrink-0"
      isRemoteProject={isRemoteProject}
    />
  );
}

interface ProjectActionButtonProps {
  icon?: ReactNode;
  label: ReactNode;
  onSelect: () => void;
}

function ProjectActionButton({
  icon,
  label,
  onSelect,
}: ProjectActionButtonProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-token-foreground hover:bg-token-list-hover-background"
      onClick={onSelect}
    >
      {icon == null ? null : <span className="shrink-0">{icon}</span>}
      <span className="min-w-0 truncate">{label}</span>
    </button>
  );
}

function findDuplicateProjectLabels(
  groups: readonly ComposerProjectGroup[],
): ReadonlyMap<string, readonly string[]> {
  const pathsByLabel = new Map<string, string[]>();
  for (const group of groups) {
    if (group.path == null) continue;
    const paths = pathsByLabel.get(group.label);
    if (paths == null) {
      pathsByLabel.set(group.label, [group.path]);
    } else {
      paths.push(group.path);
    }
  }
  return pathsByLabel;
}

let composerProjectListChunkInitialized = false;

export function initComposerProjectListChunk(): void {
  if (composerProjectListChunkInitialized) return;
  composerProjectListChunkInitialized = true;
}
