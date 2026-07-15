// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
import type { ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import type {
  ComposerMode,
  DropdownOption,
  FooterRemoteState,
  ThreadHandoffSummary,
} from "./types";

export function RunLocationMenu({
  description,
  onSelect,
  options,
  selectedMode,
}: {
  description?: ReactNode;
  onSelect: (mode: ComposerMode) => void;
  options: DropdownOption[];
  selectedMode: ComposerMode;
}): JSX.Element {
  return (
    <div className="absolute top-full left-0 z-50 mt-1 flex w-64 flex-col overflow-hidden rounded-md border border-token-border bg-token-bg-primary py-1 text-sm shadow-lg">
      {description ? (
        <div className="border-b border-token-border px-3 py-2 text-xs text-token-text-secondary">
          {description}
        </div>
      ) : null}
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={option.disabled}
          className="flex min-w-0 flex-col gap-0.5 px-3 py-2 text-left text-token-foreground hover:bg-token-list-hover-background disabled:cursor-default disabled:opacity-50"
          onClick={() => onSelect(option.id)}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="min-w-0 truncate">{option.label}</span>
            {selectedMode === option.id ? (
              <span className="text-token-text-tertiary" aria-hidden={true}>
                *
              </span>
            ) : null}
          </span>
          {option.description ? (
            <span className="line-clamp-2 text-xs text-token-text-secondary">
              {option.description}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  );
}

export function getTriggerClassName(isSummaryPanel: boolean): string {
  return isSummaryPanel
    ? "flex h-7 min-w-0 items-center gap-1 rounded-md px-1.5 text-sm text-token-foreground hover:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-40"
    : "flex h-token-button-composer min-w-0 items-center gap-1 rounded-full border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground disabled:cursor-not-allowed disabled:opacity-40";
}

export function getComposerModeLabel({
  composerMode,
  isRemoteThread,
  worktreeLabelOnly,
}: {
  composerMode: ComposerMode;
  isRemoteThread: boolean;
  worktreeLabelOnly: boolean;
}): ReactNode {
  if (composerMode === "cloud") {
    return (
      <FormattedMessage
        id="composer.mode.runInCloud"
        defaultMessage="Cloud"
        description="Remote mode label when a Codex task will be run in the cloud"
      />
    );
  }
  if (composerMode === "worktree" || worktreeLabelOnly) {
    return isRemoteThread ? (
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
    );
  }
  if (isRemoteThread) {
    return (
      <FormattedMessage
        id="composer.mode.remote"
        defaultMessage="Remote"
        description="Remote mode label"
      />
    );
  }
  return (
    <FormattedMessage
      id="composer.mode.local.short"
      defaultMessage="Local"
      description="Short local mode label"
    />
  );
}

export function getModeDescription({
  composerMode,
  isRemoteThread,
  threadHandoff,
}: {
  composerMode: ComposerMode;
  isRemoteThread: boolean;
  threadHandoff: ThreadHandoffSummary | null;
}): ReactNode {
  if (threadHandoff != null) {
    return (
      <span className="block truncate">
        {threadHandoff.conversationTitle ?? threadHandoff.cwd}
      </span>
    );
  }
  if (composerMode === "cloud") {
    return (
      <FormattedMessage
        id="composer.mode.cloudSlashCommand.description"
        defaultMessage="Run this chat in the cloud"
        description="Description for the cloud mode slash command"
      />
    );
  }
  if (isRemoteThread) return null;
  return (
    <FormattedMessage
      id="composer.mode.localRemoteWhereRun"
      defaultMessage="Select where to run the task"
      description="Tooltip content for local/remote dropdown"
    />
  );
}

export function getRemoteThreadState(
  footerRemoteState: FooterRemoteState | null,
): FooterRemoteState["existingRemoteThreadState"] | null {
  let remoteThreadState = footerRemoteState?.existingRemoteThreadState ?? null;
  return remoteThreadState?.hostId != null &&
    remoteThreadState.hostId !== "local"
    ? remoteThreadState
    : null;
}

export function getRemoteThreadDescription(
  footerRemoteState: FooterRemoteState | null,
): ReactNode {
  let remoteThreadState = getRemoteThreadState(footerRemoteState);
  if (remoteThreadState == null) return null;
  return (
    remoteThreadState.connectionDisplayName ?? remoteThreadState.projectPath
  );
}
