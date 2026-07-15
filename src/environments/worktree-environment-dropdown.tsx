// Restored from ref/webview/assets/worktree-environment-dropdown-CLHJ2WYr.js
// Updated with exports from ref/webview/assets/worktree-environment-dropdown-BwnkHMlh.js.
// Worktree local-environment selector dropdown for the composer footer.

import React, { type ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { normalizeFilesystemPath } from "../boundaries/rpc.facade";
import { selectDefaultLocalEnvironment } from "./local-environment-selection";
import type { LocalEnvironment } from "./local-environment-selection";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { CheckMdIcon } from "../icons/check-md-icon";
import { Tooltip } from "../ui/tooltip-b";
import {
  ComposerFooterLabel,
  ComposerFooterSecondaryChevron,
} from "../composer/composer-footer";
import { ChevronIcon } from "../icons/chevron-icon";
import { LinkExternalIcon } from "../icons/link-external-icon";
import { SettingsCogIcon } from "../icons/settings-cog-icon";
import { Dropdown } from "../ui/dropdown";
import { StarIcon } from "../icons/star-icon";
import { once } from "../runtime/commonjs-interop";
type WorktreeEnvironment = LocalEnvironment & {
  environment?: {
    name?: string | null;
  } | null;
};
export type WorktreeEnvironmentDropdownProps = {
  align?: "center" | "end" | "start";
  className?: string;
  environments: WorktreeEnvironment[];
  hasError?: boolean;
  hideLabel?: boolean;
  isLoading?: boolean;
  labelClassName?: string;
  onOpenSettings: () => void;
  onSelectConfigPath: (configPath: string | null) => void;
  selectedConfigPath: string | null;
  showDefaultOption?: boolean;
  showIcon?: boolean;
  side?: "bottom" | "left" | "right" | "top";
};
export const initWorktreeEnvironmentDropdownChunk = once(() => {});
export function WorktreeEnvironmentDropdown({
  className,
  labelClassName,
  environments,
  isLoading = false,
  hasError = false,
  side = "top",
  align = "start",
  showIcon = true,
  hideLabel = false,
  selectedConfigPath,
  onSelectConfigPath,
  onOpenSettings,
  showDefaultOption = true,
}: WorktreeEnvironmentDropdownProps) {
  const [open, setOpen] = React.useState(false);
  const defaultEnvironment = selectDefaultLocalEnvironment(environments);
  const selectedConfigPathNormalized = selectedConfigPath
    ? normalizeFilesystemPath(selectedConfigPath)
    : null;
  const selectedEnvironment =
    environments.find(
      (environment) =>
        normalizeFilesystemPath(environment.configPath) ===
        selectedConfigPathNormalized,
    ) ?? null;
  const canSelectEnvironment = !isLoading && !hasError;
  const listedEnvironments =
    defaultEnvironment != null && showDefaultOption
      ? environments.filter(
          (environment) =>
            normalizeFilesystemPath(environment.configPath) !==
            normalizeFilesystemPath(defaultEnvironment.configPath),
        )
      : environments;
  const triggerLabel = getTriggerLabel({
    isLoading,
    selectedEnvironment,
  });
  const triggerButton = (
    <Tooltip
      tooltipContent={
        <FormattedMessage
          id="composer.worktreeEnvironment.tooltip"
          defaultMessage="Select a local environment"
          description="Tooltip for local environment selector"
        />
      }
    >
      <Button
        className={clsx("whitespace-nowrap", className)}
        size="composerSm"
        color="ghost"
      >
        {showIcon ? <SettingsCogIcon className="icon-xs" /> : null}
        {hideLabel ? null : (
          <ComposerFooterLabel
            collapse={labelClassName == null ? "secondary" : "sm"}
            className={clsx(
              "max-w-40 truncate whitespace-nowrap",
              labelClassName,
            )}
          >
            {triggerLabel}
          </ComposerFooterLabel>
        )}
        {isLoading ? (
          <Spinner className="icon-xs text-token-input-placeholder-foreground" />
        ) : (
          <ComposerFooterSecondaryChevron>
            <ChevronIcon className="icon-2xs text-token-input-placeholder-foreground" />
          </ComposerFooterSecondaryChevron>
        )}
      </Button>
    </Tooltip>
  );
  const noEnvironmentItem = canSelectEnvironment ? (
    <Dropdown.Item
      RightIcon={selectedConfigPath == null ? CheckMdIcon : undefined}
      onClick={() => {
        onSelectConfigPath(null);
        setOpen(false);
      }}
    >
      <FormattedMessage
        id="codex.environmentSelector.noEnvironment"
        defaultMessage="No environment"
        description="No environment selected message"
      />
    </Dropdown.Item>
  ) : null;
  const defaultEnvironmentItem =
    showDefaultOption && defaultEnvironment != null ? (
      <Dropdown.Item
        RightIcon={
          selectedConfigPathNormalized != null &&
          normalizeFilesystemPath(defaultEnvironment.configPath) ===
            selectedConfigPathNormalized
            ? CheckMdIcon
            : undefined
        }
        onClick={() => {
          onSelectConfigPath(defaultEnvironment.configPath);
          setOpen(false);
        }}
      >
        <div className="flex min-w-0 items-center gap-2">
          <Tooltip
            tooltipContent={
              <FormattedMessage
                id="composer.worktreeEnvironment.default"
                defaultMessage="Default environment"
                description="Tooltip for default local environment icon"
              />
            }
          >
            <StarIcon className="icon-xxs shrink-0 text-token-description-foreground" />
          </Tooltip>
          <span className="truncate">
            {getEnvironmentDisplayName(defaultEnvironment)}
          </span>
        </div>
      </Dropdown.Item>
    ) : null;
  const environmentListContent = getEnvironmentListContent({
    environments,
    hasError,
    isLoading,
    listedEnvironments,
    onSelectConfigPath,
    selectedConfigPathNormalized,
    setOpen,
  });
  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      side={side}
      align={align}
      triggerButton={triggerButton}
    >
      <div className="flex w-64 flex-col overflow-hidden">
        <Dropdown.Title>
          <FormattedMessage
            id="composer.worktreeEnvironment.title"
            defaultMessage="Local environment"
            description="Title for worktree environment dropdown"
          />
        </Dropdown.Title>
        <div className="vertical-scroll-fade-mask flex max-h-[220px] flex-col overflow-y-auto">
          {noEnvironmentItem}
          {defaultEnvironmentItem}
          {environmentListContent}
        </div>
        <Dropdown.Separator />
        <Dropdown.Section className="flex flex-col pb-1">
          <Dropdown.Item
            LeftIcon={LinkExternalIcon}
            onClick={() => {
              onOpenSettings();
              setOpen(false);
            }}
          >
            <FormattedMessage
              id="composer.worktreeEnvironment.create"
              defaultMessage="Create local environment"
              description="CTA to open local environment settings from worktree dropdown"
            />
          </Dropdown.Item>
        </Dropdown.Section>
      </div>
    </Dropdown>
  );
}
WorktreeEnvironmentDropdown.displayName = "WorktreeEnvironmentDropdown";
function getEnvironmentListContent({
  environments,
  hasError,
  isLoading,
  listedEnvironments,
  onSelectConfigPath,
  selectedConfigPathNormalized,
  setOpen,
}: {
  environments: WorktreeEnvironment[];
  hasError: boolean;
  isLoading: boolean;
  listedEnvironments: WorktreeEnvironment[];
  onSelectConfigPath: (configPath: string | null) => void;
  selectedConfigPathNormalized: string | null;
  setOpen: (open: boolean) => void;
}): ReactNode {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <Spinner className="icon-xxs" />
      </div>
    );
  }
  if (hasError) {
    return (
      <Dropdown.Message compact={true} tone="error">
        <FormattedMessage
          id="composer.worktreeEnvironment.error"
          defaultMessage="Error loading environments"
          description="Error state for worktree environment dropdown"
        />
      </Dropdown.Message>
    );
  }
  if (listedEnvironments.length > 0) {
    return (
      <div className="flex flex-col">
        {listedEnvironments.map((environment) => {
          const isSelected =
            selectedConfigPathNormalized != null &&
            normalizeFilesystemPath(environment.configPath) ===
              selectedConfigPathNormalized;
          return (
            <Dropdown.Item
              key={environment.configPath}
              RightIcon={isSelected ? CheckMdIcon : undefined}
              onClick={() => {
                onSelectConfigPath(environment.configPath);
                setOpen(false);
              }}
            >
              <span className="min-w-0 truncate">
                {getEnvironmentDisplayName(environment)}
              </span>
            </Dropdown.Item>
          );
        })}
      </div>
    );
  }
  if (environments.length === 0) {
    return (
      <Dropdown.Message compact={true}>
        <FormattedMessage
          id="codex.environments.noEnvironmentsFound"
          defaultMessage="No environments found"
          description="Message shown when no Codex environments were found"
        />
      </Dropdown.Message>
    );
  }
  return null;
}
function getConfigPathFilename(configPath: string): string {
  const normalizedPath = normalizeFilesystemPath(configPath);
  const pathSegments = normalizedPath.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1] ?? normalizedPath;
}
function getEnvironmentDisplayName(environment: WorktreeEnvironment): string {
  if (environment.type === "success") {
    const environmentName = environment.environment?.name?.trim() ?? "";
    return environmentName.length > 0
      ? environmentName
      : getConfigPathFilename(environment.configPath);
  }
  return getConfigPathFilename(environment.configPath);
}
function getTriggerLabel({
  isLoading,
  selectedEnvironment,
}: {
  isLoading: boolean;
  selectedEnvironment: WorktreeEnvironment | null;
}): ReactNode {
  if (isLoading) {
    return (
      <FormattedMessage
        id="composer.worktreeEnvironment.loading"
        defaultMessage="Loading environments…"
        description="Loading label for worktree environment dropdown"
      />
    );
  }
  if (selectedEnvironment?.type === "success") {
    return <>{selectedEnvironment.environment?.name ?? ""}</>;
  }
  return (
    <FormattedMessage
      id="codex.environmentSelector.noEnvironment"
      defaultMessage="No environment"
      description="No environment selected message"
    />
  );
}
