// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Empty-state body and suggested artifact list for the right panel New tab view.
import { useState, type MouseEvent } from "react";
import {
  getArtifactDisplayTitle,
  getArtifactStableKey,
  getArtifactTooltipTitle,
  ThreadPanelArtifactIcon,
} from "./artifacts";
import { buildThreadPanelNewTabModel } from "./new-tab-model";
import type {
  OutputArtifact,
  ThreadPanelAction,
  ThreadPanelNewTabModelOptions,
} from "./types";

export interface RightPanelEmptyStateProps
  extends Omit<ThreadPanelNewTabModelOptions, "target"> {
  onClose?: () => void;
}

export function RightPanelEmptyState({
  onClose,
  ...modelOptions
}: RightPanelEmptyStateProps) {
  const model = buildThreadPanelNewTabModel({
    ...modelOptions,
    onClose,
    target: "right",
  });

  return (
    <ThreadPanelEmptyStateBody
      actions={model.actions}
      onOpenArtifact={model.onOpenArtifact}
      outputArtifacts={model.outputArtifacts}
    />
  );
}

export interface ThreadPanelEmptyStateBodyProps {
  actions: readonly ThreadPanelAction[];
  onOpenArtifact: (
    artifact: OutputArtifact,
    event?: MouseEvent<HTMLElement>,
  ) => void;
  outputArtifacts?: readonly OutputArtifact[];
}

export function ThreadPanelEmptyStateBody({
  actions,
  onOpenArtifact,
  outputArtifacts = [],
}: ThreadPanelEmptyStateBodyProps) {
  const hasArtifacts = outputArtifacts.length > 0;

  return (
    <div className="flex h-full min-h-0 flex-col overflow-x-hidden overflow-y-auto bg-token-main-surface-primary p-2 select-none">
      <div className="sticky top-0 z-10 flex flex-col gap-6 bg-token-main-surface-primary">
        {actions.length > 0 ? (
          <div className="mx-auto flex w-full max-w-xl flex-col gap-1 px-panel">
            {actions.map((action) => (
              <NewTabActionButton key={action.id} action={action} />
            ))}
          </div>
        ) : (
          <div className="mx-auto w-full max-w-xl rounded-lg border border-token-border-default p-3 text-sm text-token-text-secondary">
            <span data-message-id="thread.sidePanel.newTab.empty">
              No tabs are available for this thread
            </span>
          </div>
        )}
        {hasArtifacts ? (
          <div className="mx-auto w-full max-w-xl px-panel pb-1">
            <h3 className="pl-2.5 text-sm font-normal text-token-text-secondary">
              <span data-message-id="thread.sidePanel.newTab.suggested.heading">
                Suggested
              </span>
            </h3>
          </div>
        ) : null}
      </div>
      {hasArtifacts ? (
        <SuggestedArtifactList
          artifacts={outputArtifacts}
          onOpen={onOpenArtifact}
        />
      ) : null}
    </div>
  );
}

interface NewTabActionButtonProps {
  action: ThreadPanelAction;
}

function NewTabActionButton({ action }: NewTabActionButtonProps) {
  return (
    <button
      type="button"
      className="cursor-interaction flex min-h-10 w-full items-center gap-2 rounded-md bg-token-bg-secondary px-2.5 py-2 text-left hover:bg-token-list-hover-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-border-xstrong"
      onClick={() => action.onSelect()}
    >
      <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
        {action.mcpServerIcon ?? action.icon}
      </span>
      <span className="min-w-0 flex-1 truncate text-sm font-normal text-token-text-primary">
        {action.title}
      </span>
      {action.keyboardShortcut ? (
        <span className="ml-auto shrink-0 pl-2 text-token-text-secondary">
          {action.keyboardShortcut}
        </span>
      ) : null}
    </button>
  );
}

interface SuggestedArtifactListProps {
  artifacts: readonly OutputArtifact[];
  onOpen: (artifact: OutputArtifact, event?: MouseEvent<HTMLElement>) => void;
}

function SuggestedArtifactList({
  artifacts,
  onOpen,
}: SuggestedArtifactListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ul className="mx-auto flex w-full max-w-xl flex-col px-panel">
      {artifacts.map((artifact, artifactIndex) => (
        <SuggestedArtifactRow
          key={getArtifactStableKey(artifact)}
          active={activeIndex === artifactIndex}
          artifact={artifact}
          onActiveChange={(active) =>
            setActiveIndex(active ? artifactIndex : null)
          }
          onOpen={onOpen}
        />
      ))}
    </ul>
  );
}

interface SuggestedArtifactRowProps {
  active: boolean;
  artifact: OutputArtifact;
  onActiveChange: (active: boolean) => void;
  onOpen: (artifact: OutputArtifact, event?: MouseEvent<HTMLElement>) => void;
}

function SuggestedArtifactRow({
  active,
  artifact,
  onActiveChange,
  onOpen,
}: SuggestedArtifactRowProps) {
  const rowClassName = [
    "relative flex w-full after:absolute after:inset-x-3 after:bottom-0 after:h-px after:bg-token-border-light after:content-[''] last:after:hidden",
    active ? "after:hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={rowClassName}>
      <button
        type="button"
        title={getArtifactTooltipTitle(artifact)}
        className="cursor-interaction relative min-h-10 w-full rounded-md px-2.5 py-2 text-left hover:bg-token-list-hover-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-token-border-xstrong"
        onBlur={() => onActiveChange(false)}
        onFocus={() => onActiveChange(true)}
        onMouseEnter={() => onActiveChange(true)}
        onMouseLeave={() => onActiveChange(false)}
        onClick={(event) => onOpen(artifact, event)}
      >
        <span className="flex min-w-0 items-center gap-2">
          <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
            <ThreadPanelArtifactIcon
              artifact={artifact}
              iconClassName="icon-xs"
              imageClassName="size-full rounded"
            />
          </span>
          <span className="min-w-0 flex-1 truncate text-sm font-normal text-token-text-primary">
            {getArtifactDisplayTitle(artifact)}
          </span>
        </span>
      </button>
    </li>
  );
}
