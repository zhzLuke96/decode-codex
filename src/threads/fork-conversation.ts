// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Fork the current conversation from its latest state, either into the same
// directory (creating an immediate child thread) or into a freshly created
// worktree (asynchronous pending worktree). The source panel layout is
// captured so the child restores the same open tabs.

import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import {
  conversationHostIdByConversationIdSignal,
  latestCollaborationModeByConversationIdSignal,
} from "../boundaries/thread-context-inputs.facade";
import { conversationCwdByIdSignal } from "../boundaries/onboarding-commons-externals.facade";
import { appIntlSignal } from "../utils/app-intl-signal";
import { toConversationId } from "../conversations/local-conversation-thread-parts/conversation-title-runtime";
import {
  applyForkedConversationPanelState,
  stashPendingWorktreePanelState,
} from "../conversations/fork-conversation-panel-state";
import { createPendingWorktreeInDesktop } from "./pending-worktree-store/pending-worktree-desktop";
import { threadActionMessages } from "./thread-actions";

export const FORK_INTO_SAME_DIRECTORY_CONTINUATION =
  "The fork contains completed history only. If the source thread was running, the active turn and unfinished response are not in the child. Send a follow-up message to threadId only if the task requires work to continue there.";

export const FORK_INTO_WORKTREE_CONTINUATION =
  "The worktree is being created asynchronously, so no child thread id exists yet. Wait for pendingWorktreeId to finish, then send a follow-up message to the child only if the task requires work to continue there.";

type ForkConversationEnvironment =
  | { type: "same-directory" }
  | { type: "worktree" };

type IntlShapeLike = {
  formatMessage(descriptor: {
    id: string;
    defaultMessage: string;
    description?: string;
  }): string;
};

type AppScopeReader = {
  get<Value>(signal: unknown, key?: string): Value;
};

type ForkConversationOptions = {
  environment?: ForkConversationEnvironment;
  scope: AppScopeReader;
  sourceThreadId: string;
  targetThreadId?: string | null;
};

type ForkConversationResult =
  | {
      environment: ForkConversationEnvironment;
      sourceThreadId: string;
      threadId: string;
      continuation: string;
    }
  | {
      environment: { type: "worktree" };
      pendingWorktreeId: string;
      sourceThreadId: string;
      threadId: null;
      continuation: string;
    };

export async function forkConversation({
  environment = { type: "same-directory" },
  scope,
  sourceThreadId,
  targetThreadId,
}: ForkConversationOptions): Promise<ForkConversationResult> {
  const conversationId = toConversationId(targetThreadId ?? sourceThreadId);
  const hostId = scope.get<string>(
    conversationHostIdByConversationIdSignal,
    conversationId,
  );
  const cwd = scope.get<string | null>(
    conversationCwdByIdSignal,
    conversationId,
  );
  const collaborationMode = scope.get<unknown>(
    latestCollaborationModeByConversationIdSignal,
    conversationId,
  );

  switch (environment.type) {
    case "same-directory": {
      const targetConversationId = (await sendAppServerRequest(
        "fork-conversation-from-latest",
        {
          hostId,
          conversationId,
          cwd: cwd ?? undefined,
          workspaceRoots: cwd == null ? undefined : [cwd],
          collaborationMode,
          threadSource: "subagent",
        },
      )) as string;
      applyForkedConversationPanelState(scope, {
        sourceConversationId: conversationId,
        targetConversationId,
      });
      return {
        environment,
        sourceThreadId: conversationId,
        threadId: targetConversationId,
        continuation: FORK_INTO_SAME_DIRECTORY_CONTINUATION,
      };
    }
    case "worktree": {
      if (cwd == null) {
        throw Error(
          "Cannot fork into a worktree because the source thread has no current directory.",
        );
      }
      const intl = scope.get<IntlShapeLike>(appIntlSignal);
      const pendingWorktreeId = createPendingWorktreeInDesktop({
        hostId,
        label: intl.formatMessage(
          threadActionMessages.forkPendingWorktreeTitle,
        ),
        sourceWorkspaceRoot: cwd,
        startingState: { type: "working-tree" },
        localEnvironmentConfigPath: null,
        launchMode: "fork-conversation",
        prompt: intl.formatMessage(
          threadActionMessages.forkPendingWorktreePrompt,
        ),
        startConversationParamsInput: null,
        sourceConversationId: conversationId,
        sourceCollaborationMode: collaborationMode,
        targetTurnId: null,
        threadSource: "subagent",
        navigateOnSuccess: false,
      });
      stashPendingWorktreePanelState(scope, {
        pendingWorktreeId,
        sourceConversationId: conversationId,
        sourceWorkspaceRoot: cwd,
      });
      return {
        environment: { type: "worktree" },
        pendingWorktreeId,
        sourceThreadId: conversationId,
        threadId: null,
        continuation: FORK_INTO_WORKTREE_CONTINUATION,
      };
    }
  }
}
