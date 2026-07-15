// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js
// Composer project selector dropdown with typed project data and footer actions.

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import { Tooltip } from "../../ui/tooltip-b";
import { ChevronIcon } from "../../icons/chevron-icon";
import { AddProjectIcon, ClearProjectIcon, ProjectIcon } from "./icons";
import { ComposerFooterProjectButton } from "./footer-controls";
import { ComposerProjectList } from "./project-list";
import type {
  ComposerProjectAction,
  ComposerProjectGroup,
  ComposerProjectMenuLabels,
  ComposerProjectSelection,
  ComposerProjectSelectorVariant,
  ProjectAppearance,
} from "./types";

export interface ComposerProjectSelectorProps {
  activeProjectIdOverride?: string | null;
  allowLocalProjectActions?: boolean;
  allowLocalProjects?: boolean;
  allowRemoteProjects?: boolean;
  className?: string;
  disabled?: boolean;
  emptyMessage?: ReactNode;
  hideLabel?: boolean;
  isOpen?: boolean;
  labels?: Partial<ComposerProjectMenuLabels>;
  onAddLocalProject?: () => void;
  onAddRemoteProject?: () => void;
  onClearProject?: () => void;
  onCreateProject?: () => void;
  onOpenChange?: (open: boolean) => void;
  onSelectProjectId?: (
    projectId: string,
    project: ComposerProjectGroup,
  ) => void;
  onWorkspaceRootSelected?: (
    selection: ComposerProjectSelection | null,
  ) => void;
  projectAppearances?: Record<string, ProjectAppearance | null | undefined>;
  projects?: readonly ComposerProjectGroup[];
  selectedProjectId?: string | null;
  triggerButton?: ReactNode;
  variant?: ComposerProjectSelectorVariant;
}

export function ComposerProjectSelector({
  activeProjectIdOverride,
  allowLocalProjectActions,
  allowLocalProjects = true,
  allowRemoteProjects = true,
  className,
  disabled = false,
  emptyMessage,
  hideLabel = false,
  isOpen,
  labels: labelsOverride,
  onAddLocalProject,
  onAddRemoteProject,
  onClearProject,
  onCreateProject,
  onOpenChange,
  onSelectProjectId,
  onWorkspaceRootSelected,
  projectAppearances = {},
  projects = [],
  selectedProjectId,
  triggerButton,
  variant = "default",
}: ComposerProjectSelectorProps) {
  const labels = useMemo(
    () => ({ ...defaultProjectMenuLabels, ...labelsOverride }),
    [labelsOverride],
  );
  const filteredProjects = projects.filter((project) =>
    project.projectKind === "local" ? allowLocalProjects : allowRemoteProjects,
  );
  const activeProjectId =
    activeProjectIdOverride !== undefined
      ? activeProjectIdOverride
      : (selectedProjectId ?? filteredProjects[0]?.projectId ?? null);
  const activeProject =
    activeProjectId == null
      ? null
      : (filteredProjects.find(
          (project) => project.projectId === activeProjectId,
        ) ?? null);
  const canClearProject = activeProjectId != null && onClearProject != null;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = isOpen ?? uncontrolledOpen;
  const setOpen = (nextOpen: boolean) => {
    if (isOpen === undefined) setUncontrolledOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };
  const closeMenu = () => setOpen(false);
  const actions = buildProjectActions({
    allowLocalProjectActions:
      allowLocalProjectActions ?? (allowLocalProjects || allowRemoteProjects),
    allowRemoteProjects,
    labels,
    onAddLocalProject: onAddLocalProject ?? onCreateProject,
    onAddRemoteProject,
  });
  const selectProject = (projectId: string, project: ComposerProjectGroup) => {
    onSelectProjectId?.(projectId, project);
    onWorkspaceRootSelected?.({ project, projectId });
    closeMenu();
  };
  const clearProject = () => {
    onClearProject?.();
    onWorkspaceRootSelected?.(null);
    closeMenu();
  };
  const trigger =
    triggerButton ??
    renderDefaultTrigger({
      activeProject,
      activeProjectId,
      className,
      disabled,
      hideLabel,
      labels,
      projectAppearances,
      variant,
      onClick: () => setOpen(!open),
    });

  if (
    variant === "home" &&
    filteredProjects.length === 0 &&
    actions.length === 0
  ) {
    return null;
  }

  return (
    <div className="relative inline-flex min-w-0">
      {canClearProject && triggerButton == null && variant !== "hero" ? (
        <ClearProjectWrapper
          disabled={disabled || open}
          label={labels.clearProject}
          onClearProject={clearProject}
        >
          {trigger}
        </ClearProjectWrapper>
      ) : (
        trigger
      )}
      {open && !disabled ? (
        <div className="border-token-border bg-token-dropdown-background absolute bottom-full left-0 z-50 mb-2 flex w-80 max-w-[min(20rem,calc(100vw-1rem))] flex-col rounded-xl border p-2 shadow-lg">
          <ComposerProjectList
            emptyMessage={emptyMessage ?? labels.noProjectsFound}
            footerActions={actions}
            groups={filteredProjects}
            projectAppearances={projectAppearances}
            searchPlaceholder={labels.searchPlaceholder}
            selectedProjectIds={
              activeProjectId == null ? [] : [activeProjectId]
            }
            onSelectProjectId={selectProject}
          />
        </div>
      ) : null}
    </div>
  );
}

interface TriggerRenderProps {
  activeProject: ComposerProjectGroup | null;
  activeProjectId: string | null;
  className?: string;
  disabled: boolean;
  hideLabel: boolean;
  labels: ComposerProjectMenuLabels;
  projectAppearances: Record<string, ProjectAppearance | null | undefined>;
  variant: ComposerProjectSelectorVariant;
  onClick: () => void;
}

function renderDefaultTrigger({
  activeProject,
  activeProjectId,
  className,
  disabled,
  hideLabel,
  labels,
  projectAppearances,
  variant,
  onClick,
}: TriggerRenderProps) {
  const projectAppearance =
    activeProjectId == null
      ? null
      : (projectAppearances[activeProjectId] ?? null);
  const projectName =
    activeProject?.hostDisplayName == null
      ? activeProject?.label
      : `${activeProject.label} - ${activeProject.hostDisplayName}`;
  const label = projectName ?? labels.noActiveRoot;
  const icon = (
    <ProjectTriggerIcon
      activeProject={activeProject}
      projectAppearance={projectAppearance}
    />
  );

  if (variant === "hero") {
    return (
      <button
        className={clsx(
          "heading-xl ml-2 -mt-1 flex min-w-0 items-center gap-1 font-normal text-token-text-tertiary transition-colors hover:text-token-foreground",
          disabled ? "cursor-default opacity-60" : "cursor-interaction",
          className,
        )}
        disabled={disabled}
        type="button"
        onClick={onClick}
      >
        <span className="inline-flex max-w-[420px] min-w-0 items-center">
          <span className="min-w-0 truncate">{label}</span>
        </span>
        <ChevronIcon className="icon-sm mt-1 shrink-0 self-center text-token-input-placeholder-foreground" />
      </button>
    );
  }

  if (variant === "home") {
    const accessibleLabel = projectName ?? "Choose project";
    return (
      <Tooltip tooltipContent={projectName ?? labels.chooseProject}>
        <ComposerFooterProjectButton
          aria-label={accessibleLabel}
          className={clsx("min-w-0 gap-2", className)}
          collapse="xs"
          disabled={disabled}
          icon={icon}
          indicator="none"
          value={<span data-tooltip-visibility-target={true}>{label}</span>}
          valueClassName="!max-w-60 text-token-foreground"
          onClick={onClick}
        />
      </Tooltip>
    );
  }

  return (
    <Tooltip tooltipContent={labels.selectProjectTooltip}>
      <Button
        className={clsx("min-w-0", className)}
        color="ghost"
        disabled={disabled}
        size="composerSm"
        onClick={onClick}
      >
        {icon}
        {hideLabel ? null : (
          <span className="max-w-[240px] truncate text-left">
            {projectName ?? labels.newChat}
          </span>
        )}
        <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
      </Button>
    </Tooltip>
  );
}

interface ProjectTriggerIconProps {
  activeProject: ComposerProjectGroup | null;
  projectAppearance: ProjectAppearance | null;
}

function ProjectTriggerIcon({
  activeProject,
  projectAppearance,
}: ProjectTriggerIconProps) {
  const label = projectAppearance?.label?.trim();
  if (label != null && label.length > 0) {
    return (
      <span
        className="inline-flex size-4 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold"
        style={{
          backgroundColor: projectAppearance?.backgroundColor ?? undefined,
          color: projectAppearance?.color ?? undefined,
        }}
      >
        {label.slice(0, 2)}
      </span>
    );
  }

  return (
    <ProjectIcon
      className="icon-xs shrink-0"
      isRemoteProject={activeProject?.projectKind === "remote"}
    />
  );
}

interface ClearProjectWrapperProps {
  children: ReactNode;
  disabled: boolean;
  label: ReactNode;
  onClearProject: () => void;
}

function ClearProjectWrapper({
  children,
  disabled,
  label,
  onClearProject,
}: ClearProjectWrapperProps) {
  const accessibleLabel = "Don't work in a project";

  return (
    <span className="group/project-selector relative inline-flex min-w-0 shrink-0 rounded-full">
      {children}
      <Tooltip disabled={disabled} tooltipContent={label}>
        <button
          aria-label={accessibleLabel}
          className={clsx(
            "no-drag pointer-events-none absolute inset-y-0 left-0 z-10 flex aspect-square cursor-interaction items-center justify-center rounded-full text-token-text-tertiary opacity-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border hover:text-token-foreground",
            !disabled &&
              "group-hover/project-selector:pointer-events-auto group-hover/project-selector:opacity-100 group-focus-within/project-selector:pointer-events-auto group-focus-within/project-selector:opacity-100",
          )}
          data-clear-project-button={true}
          disabled={disabled}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onClearProject();
          }}
        >
          <ClearProjectIcon className="size-4" />
        </button>
      </Tooltip>
    </span>
  );
}

interface BuildProjectActionsOptions {
  allowLocalProjectActions: boolean;
  allowRemoteProjects: boolean;
  labels: ComposerProjectMenuLabels;
  onAddLocalProject?: () => void;
  onAddRemoteProject?: () => void;
}

function buildProjectActions({
  allowLocalProjectActions,
  allowRemoteProjects,
  labels,
  onAddLocalProject,
  onAddRemoteProject,
}: BuildProjectActionsOptions): ComposerProjectAction[] {
  if (!allowLocalProjectActions) return [];

  const actions: ComposerProjectAction[] = [];
  if (allowRemoteProjects && onAddRemoteProject != null) {
    actions.push({
      icon: <AddProjectIcon className="icon-xs" />,
      label: labels.addRemoteProject,
      onSelect: onAddRemoteProject,
    });
  }
  if (onAddLocalProject != null) {
    actions.push({
      icon: <AddProjectIcon className="icon-xs" />,
      label: allowRemoteProjects ? labels.addLocalProject : labels.newProject,
      onSelect: onAddLocalProject,
    });
  }
  return actions;
}

function renderMessage(id: string, defaultMessage: string) {
  return <span data-message-id={id}>{defaultMessage}</span>;
}

const defaultProjectMenuLabels: ComposerProjectMenuLabels = {
  addLocalProject: renderMessage(
    "composer.localCwdDropdown.addLocalWorkspaceRoot",
    "Add local project",
  ),
  addRemoteProject: renderMessage(
    "composer.localCwdDropdown.newRemoteProject",
    "New remote project",
  ),
  changeProject: renderMessage(
    "composer.localCwdDropdown.changeProjectTooltip",
    "Change project",
  ),
  chooseProject: renderMessage(
    "composer.localCwdDropdown.chooseProject",
    "Choose project",
  ),
  clearProject: renderMessage(
    "composer.localCwdDropdown.clearProject",
    "Don't work in a project",
  ),
  footerCategory: renderMessage(
    "composer.localCwdDropdown.footerCategory",
    "Project",
  ),
  newChat: renderMessage("composer.localCwdDropdown.newChat", "New chat"),
  newProject: renderMessage(
    "composer.localCwdDropdown.newProject",
    "New project",
  ),
  noActiveRoot: renderMessage(
    "composer.localCwdDropdown.noActiveRoot",
    "Select your project",
  ),
  noProjectsFound: renderMessage(
    "composer.localCwdDropdown.noProjectsFound",
    "No projects found",
  ),
  searchPlaceholder: "Search projects",
  selectProjectTooltip: renderMessage(
    "composer.localCwdDropdown.tooltip",
    "Select project",
  ),
  startFromScratch: renderMessage(
    "projectSetup.addProjectMenu.startFromScratch",
    "Start from scratch",
  ),
  useExistingFolder: renderMessage(
    "projectSetup.addProjectMenu.useExistingFolder",
    "Use an existing folder",
  ),
};

export default ComposerProjectSelector;
