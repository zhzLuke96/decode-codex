// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
// Composer run-location controls used by the local-conversation summary panel.
import React from "react";
import { appScopeO as useAppScopeStore } from "../../boundaries/app-scope";
import { selectedEnvironmentSignal } from "../../composer/composer-view-state";
import type { ScopeStore } from "../../composer/composer-view-state/types";
import { composerPromptScope } from "../../composer/prompt-text";
import { useGitRootQuery } from "../../github/git-root-query";
import { useCodexCloudAccess } from "../../remote/local-remote-selection";
import { useScopedValue, useSignalValue } from "../../runtime/app-scope-hooks";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
} from "../../runtime/conversation-state-runtime";
import type { CloudEnvironmentRecord } from "../../runtime/codex-api/types";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  getCloudEnvironmentId,
  useCloudEnvironmentOptions,
} from "./cloud-environment-options";
import { LOCAL_REMOTE_DROPDOWN_SOURCE } from "./constants";
import {
  getComposerModeLabel,
  getModeDescription,
  getRemoteThreadDescription,
  getRemoteThreadState,
  getTriggerClassName,
  RunLocationMenu,
} from "./run-location-menu";
import type { DropdownOption, LocalRemoteDropdownProps } from "./types";
import { useLocalRemoteModeCommands } from "./use-local-remote-mode-commands";

export function LocalRemoteDropdown({
  allowWorktree = false,
  composerMode,
  conversationId,
  disabled = false,
  footerRemoteState = null,
  hideModeDropdown = false,
  onOpenChange,
  setComposerMode,
  threadHandoff = null,
  triggerVariant = "composer",
  worktreeLabelOnly = false,
}: LocalRemoteDropdownProps): JSX.Element | null {
  let intl = useIntl(),
    conversationCwd = useScopedValue<string | null | undefined>(
      conversationCwdSignal,
      conversationId,
    ),
    conversationHostId =
      useScopedValue<string | null | undefined>(
        conversationHostIdSignal,
        conversationId,
      ) ?? "local",
    { access: cloudAccess } = useCodexCloudAccess(),
    { gitRoot } = useGitRootQuery(conversationCwd, {
      enabled: !disabled && !hideModeDropdown,
      hostId: conversationHostId,
      source: LOCAL_REMOTE_DROPDOWN_SOURCE,
    }),
    [isOpen, setIsOpen] = React.useState(false),
    isRemoteThread = getRemoteThreadState(footerRemoteState) != null,
    isSummaryPanel = triggerVariant === "summary-panel",
    modeLabel = getComposerModeLabel({
      composerMode,
      isRemoteThread,
      worktreeLabelOnly,
    }),
    modeDescription = getModeDescription({
      composerMode,
      isRemoteThread,
      threadHandoff,
    }),
    canOpen = !disabled && !hideModeDropdown,
    hasGitRepository = gitRoot != null,
    canRunInCloud = cloudAccess === "enabled" && hasGitRepository,
    canRunInWorktree =
      hasGitRepository &&
      (allowWorktree || worktreeLabelOnly || threadHandoff != null);

  let composerScopeStore = useAppScopeStore(composerPromptScope) as ScopeStore,
    selectedEnvironment =
      useSignalValue<CloudEnvironmentRecord | null>(
        selectedEnvironmentSignal,
      ) ?? null,
    selectedEnvironmentId = getCloudEnvironmentId(selectedEnvironment),
    setSelectedEnvironment = React.useCallback(
      (environment: CloudEnvironmentRecord | null) => {
        composerScopeStore.set(selectedEnvironmentSignal, environment);
      },
      [composerScopeStore],
    ),
    selectLocalMode = React.useCallback(
      () => setComposerMode("local"),
      [setComposerMode],
    ),
    selectWorktreeMode = React.useCallback(
      () => setComposerMode("worktree"),
      [setComposerMode],
    ),
    selectCloudMode = React.useCallback(
      () => setComposerMode("cloud"),
      [setComposerMode],
    ),
    defaultEnvironmentOptions = useCloudEnvironmentOptions({
      enabled:
        canRunInCloud &&
        composerMode === "cloud" &&
        selectedEnvironment == null,
      searchQuery: "",
      selectedEnvironmentId,
    });

  let updateOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!canOpen && nextOpen) return;
      setIsOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [canOpen, onOpenChange],
  );

  React.useEffect(() => {
    if (
      !canRunInCloud ||
      composerMode !== "cloud" ||
      selectedEnvironment != null ||
      defaultEnvironmentOptions.environments.length === 0
    ) {
      return;
    }
    setSelectedEnvironment(defaultEnvironmentOptions.environments[0]);
  }, [
    canRunInCloud,
    composerMode,
    defaultEnvironmentOptions.environments,
    selectedEnvironment,
    setSelectedEnvironment,
  ]);

  useLocalRemoteModeCommands({
    canOpen,
    canRunInCloud,
    canRunInWorktree,
    composerMode,
    isRemoteThread,
    onSelectCloud: selectCloudMode,
    onSelectLocal: selectLocalMode,
    onSelectWorktree: selectWorktreeMode,
    selectedEnvironment,
    selectedEnvironmentId,
    setComposerMode,
    setSelectedEnvironment,
  });

  if (hideModeDropdown && !worktreeLabelOnly) return null;

  let options: DropdownOption[] = [
    {
      id: "local",
      label: isRemoteThread ? (
        <FormattedMessage
          id="composer.mode.remote"
          defaultMessage="Remote"
          description="Remote mode label"
        />
      ) : (
        <FormattedMessage
          id="composer.mode.workLocally"
          defaultMessage="Work locally"
          description="Local mode label"
        />
      ),
      description: isRemoteThread ? (
        getRemoteThreadDescription(footerRemoteState)
      ) : (
        <FormattedMessage
          id="composer.mode.localSlashCommand.description"
          defaultMessage="Run this chat locally"
          description="Description for the local mode slash command"
        />
      ),
      disabled: composerMode === "local",
    },
    {
      id: "cloud",
      label: (
        <FormattedMessage
          id="composer.mode.runInCloud"
          defaultMessage="Cloud"
          description="Remote mode label when a Codex task will be run in the cloud"
        />
      ),
      description: (
        <FormattedMessage
          id="composer.mode.cloudSlashCommand.description"
          defaultMessage="Run this chat in the cloud"
          description="Description for the cloud mode slash command"
        />
      ),
      disabled: composerMode === "cloud" || !canRunInCloud,
    },
  ];

  if (allowWorktree || worktreeLabelOnly || threadHandoff != null) {
    options.splice(1, 0, {
      id: "worktree",
      label: isRemoteThread ? (
        <FormattedMessage
          id="composer.mode.remoteWorktree"
          defaultMessage="New remote worktree"
          description="Worktree mode label when the selected workspace is remote"
        />
      ) : (
        <FormattedMessage
          id="composer.mode.worktree"
          defaultMessage="New worktree"
          description="Worktree mode label"
        />
      ),
      description: (
        <FormattedMessage
          id={
            isRemoteThread
              ? "composer.mode.remoteWorktree.tooltip"
              : "composer.mode.worktree.tooltip"
          }
          defaultMessage={
            isRemoteThread
              ? "Create a copy of your remote project to work in parallel"
              : "Create a copy of your local project to work in parallel"
          }
          description="Tooltip content for worktree mode dropdown item"
        />
      ),
      disabled: composerMode === "worktree" || !canRunInWorktree,
    });
  }

  return (
    <div className="relative inline-flex min-w-0">
      <button
        type="button"
        className={getTriggerClassName(isSummaryPanel)}
        disabled={!canOpen}
        title={intl.formatMessage({
          id: "composer.mode.localRemoteWhereRun",
          defaultMessage: "Select where to run the task",
          description: "Tooltip content for local/remote dropdown",
        })}
        onClick={() => updateOpen(!isOpen)}
      >
        <span className="min-w-0 truncate">{modeLabel}</span>
        {canOpen ? (
          <span className="text-token-text-tertiary" aria-hidden={true}>
            v
          </span>
        ) : null}
      </button>
      {isOpen ? (
        <RunLocationMenu
          description={modeDescription}
          options={options}
          selectedMode={composerMode}
          onSelect={(nextMode) => {
            void setComposerMode(nextMode);
            updateOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}
