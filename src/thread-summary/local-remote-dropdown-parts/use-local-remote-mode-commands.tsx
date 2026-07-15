// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
import React from "react";
import { CloudIcon } from "../../icons/cloud-icon";
import { LaptopIcon } from "../../icons/laptop-icon";
import { WorktreeIcon } from "../../icons/worktree-icon";
import {
  type LocalRemoteCommandContentProps,
  type LocalRemoteCommandRegistration,
  useRegisterPromptLocalRemoteCommand,
} from "../../remote/local-remote-selection";
import type { CloudEnvironmentRecord } from "../../runtime/codex-api/types";
import { useIntl } from "../../vendor/react-intl";
import { CloudEnvironmentSlashCommandContent } from "./cloud-environment-menu";
import type { ComposerMode } from "./types";

export function useLocalRemoteModeCommands({
  canOpen,
  canRunInCloud,
  canRunInWorktree,
  composerMode,
  isRemoteThread,
  onSelectCloud,
  onSelectLocal,
  onSelectWorktree,
  selectedEnvironment,
  selectedEnvironmentId,
  setComposerMode,
  setSelectedEnvironment,
}: {
  canOpen: boolean;
  canRunInCloud: boolean;
  canRunInWorktree: boolean;
  composerMode: ComposerMode;
  isRemoteThread: boolean;
  onSelectCloud: () => void | Promise<void>;
  onSelectLocal: () => void | Promise<void>;
  onSelectWorktree: () => void | Promise<void>;
  selectedEnvironment: CloudEnvironmentRecord | null;
  selectedEnvironmentId: string | null;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  setSelectedEnvironment: (environment: CloudEnvironmentRecord) => void;
}): void {
  let intl = useIntl(),
    CloudEnvironmentCommandContent = React.useCallback(
      ({ onClose, search }: LocalRemoteCommandContentProps) => (
        <CloudEnvironmentSlashCommandContent
          onClose={onClose}
          searchQuery={search ?? ""}
          selectedEnvironmentId={selectedEnvironmentId}
          setComposerMode={setComposerMode}
          setSelectedEnvironment={setSelectedEnvironment}
        />
      ),
      [selectedEnvironmentId, setComposerMode, setSelectedEnvironment],
    );

  useLocalRemoteSlashCommand({
    Icon: isRemoteThread ? CloudIcon : LaptopIcon,
    description: intl.formatMessage({
      id: "composer.mode.localSlashCommand.description",
      defaultMessage: "Run this chat locally",
      description: "Description for the local mode slash command",
    }),
    enabled: canOpen && composerMode !== "local",
    id: "local",
    onSelect: onSelectLocal,
    title: intl.formatMessage({
      id: isRemoteThread ? "composer.mode.remote" : "composer.mode.workLocally",
      defaultMessage: isRemoteThread ? "Remote" : "Work locally",
      description: isRemoteThread ? "Remote mode label" : "Local mode label",
    }),
  });

  useLocalRemoteSlashCommand({
    Icon: WorktreeIcon,
    description: intl.formatMessage({
      id: "composer.mode.worktreeSlashCommand.description",
      defaultMessage: "Run this chat in a new worktree",
      description: "Description for the worktree mode slash command",
    }),
    enabled: canOpen && canRunInWorktree && composerMode !== "worktree",
    id: "worktree",
    onSelect: onSelectWorktree,
    title: intl.formatMessage({
      id: isRemoteThread
        ? "composer.mode.remoteWorktree"
        : "composer.mode.worktree",
      defaultMessage: isRemoteThread ? "New remote worktree" : "New worktree",
      description: "Worktree mode label",
    }),
  });

  useLocalRemoteSlashCommand({
    Icon: CloudIcon,
    description: intl.formatMessage({
      id: "composer.mode.cloudSlashCommand.description",
      defaultMessage: "Run this chat in the cloud",
      description: "Description for the cloud mode slash command",
    }),
    enabled: canOpen && canRunInCloud && composerMode !== "cloud",
    id: "cloud",
    onSelect: onSelectCloud,
    title: intl.formatMessage({
      id: "composer.mode.runInCloud",
      defaultMessage: "Cloud",
      description:
        "Remote mode label when a Codex task will be run in the cloud",
    }),
  });

  useLocalRemoteSlashCommand({
    Content: CloudEnvironmentCommandContent,
    Icon: CloudIcon,
    dependencies: [selectedEnvironmentId],
    description:
      selectedEnvironment?.label ??
      intl.formatMessage({
        id: "composer.slashCommands.cloudEnvironment.description",
        defaultMessage: "Choose the cloud environment",
        description:
          "Description for the cloud environment slash command when no environment is selected",
      }),
    enabled: canOpen && canRunInCloud && composerMode === "cloud",
    id: "cloud-environment",
    title: intl.formatMessage({
      id: "composer.slashCommands.cloudEnvironment.title",
      defaultMessage: "Cloud environment",
      description:
        "Title for a composer slash command that makes Codex run in the cloud with a specific environment.",
    }),
  });
}

function useLocalRemoteSlashCommand({
  dependencies = [],
  ...command
}: LocalRemoteCommandRegistration): void {
  useRegisterPromptLocalRemoteCommand({
    requiresEmptyComposer: false,
    ...command,
    dependencies,
  });
}
