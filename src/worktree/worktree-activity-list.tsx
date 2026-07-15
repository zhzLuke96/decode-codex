// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the worktree-init v2 tool-activity timeline (worktree creation, environment
// setup, conversation start) as collapsible activity rows.
import type { ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { WorktreeIcon } from "../icons/worktree-icon";
import {
  ConversationStatusRow,
  CollapsibleToolActivity,
  CommandOutputBlock,
  EnvironmentSetupIcon,
  ConversationActivityIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export type WorktreeActivityKind = "worktree" | "setup" | "conversation";
export type WorktreeActivityStatus =
  | "running"
  | "completed"
  | "skipped"
  | "failed";

export interface WorktreeActivity {
  id: string;
  kind: WorktreeActivityKind;
  status: WorktreeActivityStatus;
  outputText: string;
}

export interface WorktreeActivityListProps {
  activities: WorktreeActivity[];
  children?: ReactNode;
}

export function WorktreeActivityList({
  activities,
  children,
}: WorktreeActivityListProps) {
  const lastActivityId =
    children == null ? null : (activities.at(-1)?.id ?? null);

  const rows = activities.map((activity) => {
    const isLast = activity.id === lastActivityId;

    if (activity.kind === "conversation" && activity.status === "running") {
      return (
        <div key={activity.id} className="mt-3 min-w-0">
          <ConversationStatusRow
            message={
              <WorktreeActivityLabel
                kind={activity.kind}
                status={activity.status}
              />
            }
          />
        </div>
      );
    }

    const footer = isLast ? (
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
      <CollapsibleToolActivity
        key={`${activity.id}:${isLast}`}
        defaultExpanded={isLast}
        indentContent={false}
        icon={
          <WorktreeActivityIcon kind={activity.kind} status={activity.status} />
        }
        status={activity.status === "skipped" ? "completed" : activity.status}
        summary={
          <WorktreeActivityLabel
            kind={activity.kind}
            status={activity.status}
          />
        }
      >
        {activity.outputText.length > 0 ? (
          <CommandOutputBlock
            command=""
            output={activity.outputText}
            isInProgress={activity.status === "running"}
            surface="plain"
            footer={footer}
          />
        ) : (
          footer
        )}
      </CollapsibleToolActivity>
    );
  });

  return <div className="flex w-full max-w-3xl flex-col gap-2">{rows}</div>;
}

interface WorktreeActivityIconProps {
  kind: WorktreeActivityKind;
  status: WorktreeActivityStatus;
}

function WorktreeActivityIcon({ kind, status }: WorktreeActivityIconProps) {
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
      return <EnvironmentSetupIcon className={className} />;
    case "conversation":
      return <ConversationActivityIcon className={className} />;
  }
}

interface WorktreeActivityLabelProps {
  kind: WorktreeActivityKind;
  status: WorktreeActivityStatus;
}

function WorktreeActivityLabel({ kind, status }: WorktreeActivityLabelProps) {
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
  return null;
}
