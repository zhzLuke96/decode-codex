// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Worktree initialization activity list shown while creating a worktree,
// preparing its environment, and starting the child conversation.
import type { ReactNode } from "react";
import clsx from "clsx";

import { ChatBubblesIcon } from "../icons/chat-bubbles-icon";
import { SettingsGearIcon } from "../icons/settings-gear-icon";
import { WorktreeIcon } from "../icons/worktree-icon";
import { FormattedMessage } from "../vendor/react-intl";
import {
  initToolActivityDisclosureChunk,
  ThinkingShimmerMessage,
  ToolActivityCard,
} from "./activity-disclosure";

type WorktreeInitActivityKind = "worktree" | "setup" | "conversation";
type WorktreeInitActivityStatus =
  | "running"
  | "completed"
  | "skipped"
  | "failed";

interface WorktreeInitActivity {
  id: string;
  kind: WorktreeInitActivityKind;
  outputText: string;
  status: WorktreeInitActivityStatus;
}

interface WorktreeInitActivityListProps {
  activities: WorktreeInitActivity[];
  children?: ReactNode;
}

interface WorktreeInitActivityIconProps {
  kind: WorktreeInitActivityKind;
  status: WorktreeInitActivityStatus;
}

interface WorktreeInitActivityLabelProps {
  kind: WorktreeInitActivityKind;
  status: WorktreeInitActivityStatus;
}

export function initWorktreeInitActivityListChunk(): void {
  initToolActivityDisclosureChunk();
}

export function WorktreeInitActivityList({
  activities,
  children,
}: WorktreeInitActivityListProps) {
  const lastActivityId =
    children == null ? null : (activities.at(-1)?.id ?? null);

  return (
    <div className="flex w-full max-w-3xl flex-col gap-2">
      {activities.map((activity) => {
        const isLastActivity = activity.id === lastActivityId;
        if (activity.kind === "conversation" && activity.status === "running") {
          return (
            <div key={activity.id} className="mt-3 min-w-0">
              <ThinkingShimmerMessage
                message={
                  <WorktreeInitActivityLabel
                    kind={activity.kind}
                    status={activity.status}
                  />
                }
              />
            </div>
          );
        }

        const footer = isLastActivity ? (
          <div
            className={clsx(
              "flex items-center justify-end gap-2",
              activity.outputText.length > 0 && "px-3 pb-3",
            )}
          >
            {children}
          </div>
        ) : null;

        return (
          <ToolActivityCard
            key={`${activity.id}:${isLastActivity}`}
            defaultExpanded={isLastActivity}
            indentContent={false}
            icon={
              <WorktreeInitActivityIcon
                kind={activity.kind}
                status={activity.status}
              />
            }
            status={
              activity.status === "skipped" ? "completed" : activity.status
            }
            summary={
              <WorktreeInitActivityLabel
                kind={activity.kind}
                status={activity.status}
              />
            }
          >
            {activity.outputText.length > 0 ? (
              <PlainActivityOutput
                footer={footer}
                isInProgress={activity.status === "running"}
                output={activity.outputText}
              />
            ) : (
              footer
            )}
          </ToolActivityCard>
        );
      })}
    </div>
  );
}

function WorktreeInitActivityIcon({
  kind,
  status,
}: WorktreeInitActivityIconProps) {
  const className = clsx(
    "icon-xs shrink-0",
    status === "failed"
      ? "text-token-editor-error-foreground"
      : "text-token-text-secondary",
  );

  switch (kind) {
    case "worktree":
      return <WorktreeIcon className={className} />;
    case "setup":
      return <SettingsGearIcon className={className} />;
    case "conversation":
      return <ChatBubblesIcon className={className} />;
  }
}

function WorktreeInitActivityLabel({
  kind,
  status,
}: WorktreeInitActivityLabelProps) {
  switch (kind) {
    case "worktree":
      switch (status) {
        case "running":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.worktree.running"
              defaultMessage="Creating a worktree"
              description="Tool activity label shown while a worktree is being created"
            />
          );
        case "completed":
        case "skipped":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.worktree.completed"
              defaultMessage="Worktree created"
              description="Tool activity label shown after a worktree has been created"
            />
          );
        case "failed":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.worktree.failed"
              defaultMessage="Failed to create worktree"
              description="Tool activity label shown after worktree creation fails"
            />
          );
      }
      break;
    case "setup":
      switch (status) {
        case "running":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.setup.running"
              defaultMessage="Setting up the environment"
              description="Tool activity label shown while a worktree environment is being set up"
            />
          );
        case "completed":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.setup.completed"
              defaultMessage="Environment set up"
              description="Tool activity label shown after a worktree environment is set up"
            />
          );
        case "skipped":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.setup.skipped"
              defaultMessage="Environment setup skipped"
              description="Tool activity label shown when worktree environment setup is skipped"
            />
          );
        case "failed":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.setup.failed"
              defaultMessage="Failed to set up the environment"
              description="Tool activity label shown after worktree environment setup fails"
            />
          );
      }
      break;
    case "conversation":
      switch (status) {
        case "running":
        case "completed":
        case "skipped":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.conversation.running"
              defaultMessage="Starting the conversation"
              description="Tool activity label shown while the worktree conversation is starting"
            />
          );
        case "failed":
          return (
            <FormattedMessage
              id="worktreeInitV2.activity.conversation.failed"
              defaultMessage="Failed to start the conversation"
              description="Tool activity label shown after the worktree conversation fails to start"
            />
          );
      }
      break;
  }
}

function PlainActivityOutput({
  footer,
  isInProgress,
  output,
}: {
  footer?: ReactNode;
  isInProgress: boolean;
  output: string;
}) {
  return (
    <div
      aria-busy={isInProgress}
      className="overflow-hidden rounded-md border border-token-border-light bg-token-main-surface-primary"
    >
      <pre className="max-h-80 overflow-auto px-3 py-2 font-mono text-xs leading-5 whitespace-pre-wrap text-token-text-secondary">
        {output}
      </pre>
      {footer}
    </div>
  );
}
