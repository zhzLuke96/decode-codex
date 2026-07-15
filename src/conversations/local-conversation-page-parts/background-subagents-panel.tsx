// Restored from ref/webview/assets/local-conversation-page-C379OsPf.js
import React from "react";

import {
  appShellIntlSignal,
  backgroundAgentSnapshotSignal,
  localConversationRouteScope,
  rightPanelController,
  sendAppServerRequest,
  useScope,
  useScopedValue,
} from "../local-conversation-page-runtime";
import { LocalConversationThread } from "../local-conversation-thread";
import type { IntlShape, Scope, SubagentThread } from "./types";
import { FormattedMessage } from "../../vendor/react-intl";

type BackgroundSubagentsPanelProps = {
  conversationId: string;
  selectedThreadId?: string | null;
};

export function BackgroundSubagentsPanel({
  conversationId,
  selectedThreadId,
}: BackgroundSubagentsPanelProps): React.ReactElement | null {
  const subagentSnapshot = useScopedValue(
    backgroundAgentSnapshotSignal,
    conversationId,
  ) as { threads?: SubagentThread[]; selectedThreadId?: string | null } | null;
  const selectedThread = React.useMemo(() => {
    const threadId = selectedThreadId ?? subagentSnapshot?.selectedThreadId;
    return subagentSnapshot?.threads?.find((thread) => thread.id === threadId);
  }, [selectedThreadId, subagentSnapshot]);

  if (!subagentSnapshot?.threads?.length) {
    return null;
  }

  if (selectedThread) {
    return (
      <div className="flex h-full min-h-0 flex-col">
        <SelectedBackgroundSubagentHeader thread={selectedThread} />
        <div className="min-h-0 flex-1 overflow-y-auto">
          <LocalConversationThread conversationId={selectedThread.id} />
        </div>
      </div>
    );
  }

  return (
    <BackgroundSubagentsList
      conversationId={conversationId}
      threads={subagentSnapshot.threads}
    />
  );
}

type BackgroundSubagentsListProps = {
  conversationId: string;
  threads: SubagentThread[];
};

function BackgroundSubagentsList({
  conversationId,
  threads,
}: BackgroundSubagentsListProps): React.ReactElement {
  const activeThreads = threads.filter(isActiveSubagent);
  const completedThreads = threads.filter(isCompletedSubagent);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-y-auto p-3">
      <BackgroundSubagentsSection
        conversationId={conversationId}
        threads={activeThreads}
        title={
          <FormattedMessage
            defaultMessage="In progress"
            id="localConversation.subagents.active"
          />
        }
      />
      <BackgroundSubagentsSection
        conversationId={conversationId}
        threads={completedThreads}
        title={
          <FormattedMessage
            defaultMessage="Completed"
            id="localConversation.subagents.completed"
          />
        }
      />
    </div>
  );
}

function shouldShowInlineActivitySubagent(thread: SubagentThread): boolean {
  return thread.status !== "archived";
}

function isCompletedSubagent(thread: SubagentThread): boolean {
  return thread.status === "completed" || thread.status === "failed";
}

function isActiveSubagent(thread: SubagentThread): boolean {
  return (
    shouldShowInlineActivitySubagent(thread) && !isCompletedSubagent(thread)
  );
}

type BackgroundSubagentsSectionProps = {
  conversationId: string;
  title: React.ReactNode;
  threads: SubagentThread[];
};

function BackgroundSubagentsSection({
  conversationId,
  title,
  threads,
}: BackgroundSubagentsSectionProps): React.ReactElement | null {
  const scope = useScope(localConversationRouteScope) as Scope;
  if (threads.length === 0) {
    return null;
  }

  return (
    <section className="mb-4">
      <h3 className="mb-2 px-1 text-xs font-medium uppercase text-token-text-tertiary">
        {title}
      </h3>
      <div className="space-y-1">
        {threads.map((thread) => (
          <button
            className="flex w-full min-w-0 items-center gap-2 rounded-md px-2 py-2 text-left hover:bg-token-bg-secondary"
            key={thread.id}
            onClick={() =>
              openBackgroundSubagentsPanel(scope, conversationId, thread.id)
            }
            type="button"
          >
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm text-token-text-primary">
                {thread.title || thread.id}
              </div>
              {thread.status ? (
                <div className="truncate text-xs text-token-text-tertiary">
                  {thread.status}
                </div>
              ) : null}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

type SelectedBackgroundSubagentHeaderProps = { thread: SubagentThread };

function SelectedBackgroundSubagentHeader({
  thread,
}: SelectedBackgroundSubagentHeaderProps): React.ReactElement {
  return (
    <div className="flex items-center border-b border-token-border-default px-3 py-2">
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-token-text-primary">
          {thread.title || thread.id}
        </div>
        {thread.status ? (
          <div className="truncate text-xs text-token-text-tertiary">
            {thread.status}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function openBackgroundSubagentsPanel(
  scope: Scope,
  conversationId: string,
  subagentThreadId: string,
): void {
  const intl = scope.get<IntlShape>(appShellIntlSignal);
  rightPanelController.openTab(scope, BackgroundSubagentsPanel, {
    id: `background-subagents:${conversationId}`,
    title: intl.formatMessage({
      id: "localConversation.subagents.tabTitle",
      defaultMessage: "Background tasks",
    }),
    props: { conversationId, selectedThreadId: subagentThreadId },
  });
  void ensureBackgroundSubagentThreadChainHydrated(subagentThreadId);
}

async function ensureBackgroundSubagentThreadChainHydrated(
  threadId: string,
): Promise<void> {
  await sendAppServerRequest("hydrate-background-thread-chain", { threadId });
}
