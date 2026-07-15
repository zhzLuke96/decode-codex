// Restored from ref/webview/assets/project-dropdown-options-yIKBFAMU.js
// Project picker dropdown used by composer and automation project selectors.
import type { ComponentProps, ComponentType, ReactNode } from "react";
import clsx from "clsx";
import { normalizeProjectRoot } from "../boundaries/src-l0hb-mz-p";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "./button";
import { CheckMdIcon } from "../icons/check-md-icon";
import { Tooltip } from "./tooltip-b";
import { ChevronIcon } from "../icons/chevron-icon";
import { useSelectableRemoteConnectionsState } from "../remote/remote-connection-visibility";
import { ChatsIcon } from "../icons/chats-icon";
import { InfoIcon } from "../icons/info-icon";
import { FolderIcon } from "../icons/folder-icon";
import { Dropdown, DropdownMenu } from "./dropdown";
import { WorktreeIcon } from "../icons/worktree-icon";
import { useConnectedRemoteConnections } from "../remote/use-connected-remote-connections";
type ProjectDropdownIcon = ComponentType<{
  className?: string;
}>;
export type ProjectDropdownOption = {
  description?: ReactNode;
  isCodexWorktree?: boolean;
  label: ReactNode;
  value: string;
};
export type ProjectDropdownOptionsProps = {
  align?: ComponentProps<typeof DropdownMenu>["align"];
  className?: string;
  includeChats?: boolean;
  localOnlyTooltip?: ReactNode;
  onChange: (roots: string[]) => void;
  options: ProjectDropdownOption[];
  placeholder?: ReactNode;
  selectedRoots: string[];
  selectionMode?: "multiple" | "single";
  showIcon?: boolean;
};
type WorkspaceGroup = {
  isCodexWorktree?: boolean;
  label: string;
  path?: string | null;
  projectKind?: string;
  repositoryData?: {
    rootFolder?: string | null;
  } | null;
};
export function ProjectDropdownOptions({
  selectedRoots,
  options,
  placeholder,
  align = "start",
  className,
  showIcon = true,
  includeChats = true,
  selectionMode = "multiple",
  localOnlyTooltip,
  onChange,
}: ProjectDropdownOptionsProps) {
  const intl = useIntl();
  const projectlessRoot = normalizeProjectRoot("~");
  const { remoteConnections } = useSelectableRemoteConnectionsState();
  const hasConnectedRemoteConnections =
    (useConnectedRemoteConnections(remoteConnections)?.length ?? 0) > 0;
  const chatsLabel = intl.formatMessage({
    id: "components.projectDropdown.projectless",
    defaultMessage: "Chats",
    description: "Label for selecting the chats target in the project dropdown",
  });
  const allOptions = includeChats
    ? [
        {
          value: projectlessRoot,
          label: chatsLabel,
        },
        ...options,
      ]
    : options;
  const optionByValue = new Map(allOptions.map(optionToMapEntry));
  const validSelectedRoots = selectedRoots.filter((item) =>
    optionByValue.has(item),
  );
  const selectedRootSet = new Set(validSelectedRoots);
  const firstSelectedOption =
    validSelectedRoots[0] == null
      ? undefined
      : optionByValue.get(validSelectedRoots[0]);
  const triggerLabel =
    validSelectedRoots.length > 1
      ? intl.formatMessage(
          {
            id: "components.projectDropdown.multiple",
            defaultMessage: "{count} projects",
            description:
              "Label shown in the project dropdown when multiple projects are selected",
          },
          {
            count: validSelectedRoots.length,
          },
        )
      : (firstSelectedOption?.label ?? selectedRoots[0] ?? placeholder);
  const chatsSelected = includeChats && selectedRootSet.has(projectlessRoot);
  const TriggerIcon = chatsSelected
    ? ChatsIcon
    : firstSelectedOption?.isCodexWorktree === true
      ? WorktreeIcon
      : FolderIcon;
  const triggerAriaLabel = intl.formatMessage({
    id: "components.projectDropdown.ariaLabel",
    defaultMessage: "Project",
    description: "Aria label for project dropdown",
  });
  const triggerButton = (
    <Button
      aria-label={triggerAriaLabel}
      className={clsx("min-w-0", className)}
      color="ghost"
      size="composerSm"
    >
      {showIcon ? <TriggerIcon className="icon-xs shrink-0" /> : null}
      <span className="truncate text-left text-token-foreground">
        {triggerLabel}
      </span>
      <ChevronIcon className="icon-2xs shrink-0 text-token-input-placeholder-foreground" />
    </Button>
  );
  const localOnlyTooltipTrigger = hasConnectedRemoteConnections ? (
    <Tooltip tooltipContent={localOnlyTooltip} side="top" align="center">
      <button
        type="button"
        className="inline-flex shrink-0 items-center justify-center text-token-description-foreground hover:text-token-foreground"
        aria-label={intl.formatMessage({
          id: "components.projectDropdown.localOnlyTooltipLabel",
          defaultMessage: "Project availability details",
          description:
            "Aria label for the project local-only info tooltip trigger",
        })}
      >
        <InfoIcon className="icon-2xs" />
      </button>
    </Tooltip>
  ) : null;
  return (
    <DropdownMenu
      align={align}
      contentWidth="workspace"
      contentMaxHeight="tall"
      contentClassName="pb-2"
      triggerButton={triggerButton}
    >
      <Dropdown.Title>
        <div className="flex min-w-0 items-center gap-1">
          <FormattedMessage
            id="components.projectDropdown.title"
            defaultMessage="Project"
            description="Header label above project options"
          />
          {localOnlyTooltipTrigger}
        </div>
      </Dropdown.Title>
      <Dropdown.Section className="flex flex-col [--edge-fade-distance:1.5rem]">
        {options.map((item) => (
          <ProjectDropdownOptionItem
            key={item.value}
            option={item}
            selectedRoots={validSelectedRoots}
            selectedRootSet={selectedRootSet}
            selectionMode={selectionMode}
            onChange={onChange}
          />
        ))}
        {options.length === 0 ? (
          <div className="text-token-muted-foreground px-3 py-2 text-sm">
            <FormattedMessage
              id="components.projectDropdown.empty"
              defaultMessage="No project folders available"
              description="Fallback label when no project options are available"
            />
          </div>
        ) : null}
      </Dropdown.Section>
      {includeChats ? (
        <>
          <Dropdown.Separator />
          <Dropdown.Section className="flex flex-col">
            <Dropdown.Item
              LeftIcon={ChatsIcon}
              RightIcon={chatsSelected ? CheckMdIcon : undefined}
              onSelect={() => {
                onChange(
                  selectionMode === "single" || !chatsSelected
                    ? [projectlessRoot]
                    : [],
                );
              }}
            >
              {chatsLabel}
            </Dropdown.Item>
          </Dropdown.Section>
        </>
      ) : null}
    </DropdownMenu>
  );
}
function optionToMapEntry(
  option: ProjectDropdownOption,
): [string, ProjectDropdownOption] {
  return [option.value, option];
}
function ProjectDropdownOptionItem({
  option,
  selectedRoots,
  selectedRootSet,
  selectionMode,
  onChange,
}: {
  onChange: (roots: string[]) => void;
  option: ProjectDropdownOption;
  selectedRootSet: Set<string>;
  selectedRoots: string[];
  selectionMode: "multiple" | "single";
}) {
  const normalizedValue = normalizeProjectRoot(option.value);
  const selected = selectedRootSet.has(normalizedValue);
  const LeftIcon: ProjectDropdownIcon =
    option.isCodexWorktree === true ? WorktreeIcon : FolderIcon;
  const RightIcon = selected ? CheckMdIcon : undefined;
  const handleSelect = () => {
    if (selectionMode === "single") {
      onChange([normalizedValue]);
      return;
    }
    onChange(
      selected
        ? selectedRoots.filter((item) => item !== normalizedValue)
        : [...selectedRoots, normalizedValue],
    );
  };
  return (
    <Dropdown.Item
      LeftIcon={LeftIcon}
      RightIcon={RightIcon}
      onSelect={handleSelect}
    >
      <div className="flex items-center gap-1">
        <span>{option.label}</span>
        {option.description ? (
          <span className="truncate text-sm text-token-description-foreground">
            {option.description}
          </span>
        ) : null}
      </div>
    </Dropdown.Item>
  );
}
export function buildProjectDropdownOptions({
  workspaceGroups,
  roots,
  formatRootLabel,
}: {
  formatRootLabel: (root: string) => ReactNode;
  roots: string[];
  workspaceGroups?: WorkspaceGroup[] | null;
}): ProjectDropdownOption[] {
  return workspaceGroups
    ? workspaceGroups
        .filter((item) => item.projectKind === "local" && item.path != null)
        .map((item) => {
          const rootFolder = item.repositoryData?.rootFolder ?? undefined;
          const showDescription =
            rootFolder != null && rootFolder !== item.label;
          return {
            value: item.path as string,
            label: item.label,
            description: showDescription ? rootFolder : undefined,
            isCodexWorktree: item.isCodexWorktree,
          };
        })
    : roots.map((item) => ({
        value: item,
        label: formatRootLabel(item),
      }));
}

export function initProjectDropdownOptionsChunk(): void {}
