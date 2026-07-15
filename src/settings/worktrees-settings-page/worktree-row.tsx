// Restored from ref/webview/assets/worktrees-settings-page-KeLyIYZM.js
// Settings page for inspecting and deleting Codex-managed git worktrees.
import { useState } from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import {
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  getThreadTitle,
  sendAppServerRequest,
  useHostConfigById,
} from "../../boundaries/use-host-config.facade";
import { formatUnknownError } from "../../boundaries/src-l0hb-mz-p";
import {
  callCodexVscodeApi,
  vscodeApiH as vscodeLogger,
} from "../../boundaries/vscode-api";
import { useNavigateToLocalConversation } from "../../utils/use-navigate-to-local-conversation";
import { toastApiSignal } from "../../ui/toast-signal";
import { Button } from "../../ui/button";
import { Spinner } from "../../ui/spinner";
import type { CodexWorktree, WorktreeConversation } from "./worktree-utils";
type AppScopeWithGet = {
  get<T>(signal: unknown): T;
};
type HostConfigWithId = {
  id?: string;
};
type ToastApi = {
  danger(message: string): void;
};
type WorktreeRowProps = {
  allConversations: WorktreeConversation[];
  hostId: string;
  isConversationsLoading: boolean;
  onWorktreeDeleted: () => void;
  visibleConversations: WorktreeConversation[];
  worktree: CodexWorktree;
};
export function WorktreeRow({
  allConversations,
  hostId,
  isConversationsLoading,
  onWorktreeDeleted,
  visibleConversations,
  worktree,
}: WorktreeRowProps): JSX.Element {
  const appScope = useAppScope(appScopeRoot) as AppScopeWithGet;
  const navigateToLocalConversation = useNavigateToLocalConversation();
  const intl = useIntl();
  const [isDeleting, setIsDeleting] = useState(false);
  const hostConfig = useHostConfigById(hostId) as HostConfigWithId;
  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      if (allConversations.length > 0) {
        await Promise.all(
          allConversations.map((conversation) =>
            sendAppServerRequest("archive-conversation", {
              cleanupWorktree: false,
              conversationId: conversation.id,
              source: "worktree_delete",
            }),
          ),
        );
      }
      await callCodexVscodeApi("worktree-delete", {
        params: {
          hostId: hostConfig.id ?? hostId,
          reason: "settings-delete-targeted",
          worktree: worktree.dir,
        },
      });
      onWorktreeDeleted();
    } catch (error) {
      vscodeLogger.error("Failed to delete worktree", {
        safe: {},
        sensitive: {
          error: formatUnknownError(error),
        },
      });
      appScope.get<ToastApi>(toastApiSignal).danger(
        intl.formatMessage({
          id: "settings.worktrees.delete.error",
          defaultMessage: "Failed to delete worktree",
          description: "Error message when deleting a worktree from settings",
        }),
      );
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="flex flex-col gap-2 p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-medium text-token-text-primary">
            <FormattedMessage
              id="settings.worktrees.row.title"
              defaultMessage="Worktree"
              description="Label for a worktree row"
            />
          </div>
          <div className="mt-1 truncate font-mono text-xs text-token-text-secondary">
            {worktree.dir}
          </div>
        </div>
        <Button
          className="shrink-0"
          color="danger"
          loading={isDeleting}
          onClick={handleDelete}
          size="toolbar"
        >
          <FormattedMessage
            id="settings.worktrees.row.delete"
            defaultMessage="Delete"
            description="Delete button label for a worktree row"
          />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-token-text-secondary">
          <FormattedMessage
            id="settings.worktrees.row.conversations"
            defaultMessage="Conversations"
            description="Label for conversations list within a worktree row"
          />
        </div>
        {isConversationsLoading ? (
          <div className="flex items-center gap-2 text-xs text-token-text-secondary">
            <Spinner className="icon-xxs" />
            <FormattedMessage
              id="settings.worktrees.row.conversations.loading"
              defaultMessage="Loading conversations…"
              description="Loading label for conversations list"
            />
          </div>
        ) : visibleConversations.length === 0 ? (
          <div className="text-xs text-token-text-secondary">
            <FormattedMessage
              id="settings.worktrees.row.conversations.empty"
              defaultMessage="No conversations linked to this worktree."
              description="Empty state for conversations list in worktree row"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {visibleConversations.map((conversation) => (
              <button
                key={conversation.id}
                className="focus-visible:outline-token-focus flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-left text-sm text-token-text-primary hover:bg-token-list-hover-background hover:text-token-text-primary/80 focus-visible:outline-1 focus-visible:outline-offset-[-2px]"
                onClick={() => navigateToLocalConversation(conversation.id)}
                type="button"
              >
                <span className="truncate">
                  {getThreadTitle(conversation) || (
                    <FormattedMessage
                      id="settings.worktrees.conversation.untitled"
                      defaultMessage="Untitled conversation"
                      description="Fallback title for a conversation"
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
