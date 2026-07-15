// Restored from ref/webview/assets/thread-actions-DctPk86-.js
// thread-actions-DctPk86- chunk restored from the Codex webview bundle.
import { useMemo } from "react";
import {
  appScopeO as useAppScope,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { useIntl } from "../../vendor/react-intl";
import { toastApiSignal } from "../../ui/toast-signal";
import { copyToClipboard } from "../../utils/copy-to-clipboard";
import { threadActionMessages } from "./messages";
import type {
  AppScopeLike,
  ArchiveThreadOptions,
  CopyConversationMarkdownOptions,
  IntlLike,
  InterruptThreadOptions,
  MarkThreadUnreadOptions,
  RenameThreadOptions,
  ThreadActions,
} from "./types";
export function useThreadActions(): ThreadActions {
  const scope = useAppScope(appScopeRoot);
  const intl = useIntl();
  return useMemo(
    () => ({
      archiveThread({
        conversationId,
        hostId,
        source,
        onArchiveStart,
        onArchiveSuccess,
        onArchiveError,
      }: ArchiveThreadOptions) {
        onArchiveStart?.();
        sendAppServerRequest("archive-conversation", {
          conversationId,
          ...(hostId == null
            ? {}
            : {
                hostId,
              }),
          source,
        })
          .then(() => {
            onArchiveSuccess?.();
          })
          .catch(() => {
            onArchiveError?.();
            scope
              .get(toastApiSignal)
              .danger(
                intl.formatMessage(threadActionMessages.archiveThreadError),
              );
          });
      },
      interruptThread({ conversationId }: InterruptThreadOptions) {
        sendAppServerRequest("interrupt-conversation", {
          conversationId,
          initiatedBy: "user",
        }).catch(() => {
          scope
            .get(toastApiSignal)
            .danger(
              intl.formatMessage(threadActionMessages.interruptThreadError),
            );
        });
      },
      markThreadAsUnread,
      renameThread({ conversationId, hostId, title }: RenameThreadOptions) {
        sendAppServerRequest("set-thread-title", {
          conversationId,
          ...(hostId == null
            ? {}
            : {
                hostId,
              }),
          title,
        }).catch(() => {
          scope
            .get(toastApiSignal)
            .danger(intl.formatMessage(threadActionMessages.renameThreadError));
        });
      },
      copyWorkingDirectory(cwd?: string | null) {
        copyWorkingDirectoryWithToast({
          scope,
          cwd,
          intl,
        });
      },
      copySessionId,
      copyAppLink,
      copyConversationMarkdown(options: CopyConversationMarkdownOptions) {
        copyConversationMarkdownWithToast({
          ...options,
          scope,
          intl,
        });
      },
    }),
    [intl, scope],
  );
}
export function copySessionId(sessionId?: string | null) {
  if (sessionId) void copyToClipboard(sessionId);
}
export function copyAppLink(conversationId?: string | null) {
  if (conversationId) void copyToClipboard(`codex://threads/${conversationId}`);
}
function copyWorkingDirectoryWithToast({
  scope,
  cwd,
  intl,
}: {
  cwd?: string | null;
  intl: IntlLike;
  scope: AppScopeLike;
}) {
  if (!cwd) return;
  copyToClipboard(cwd).then(
    () => {
      scope
        .get(toastApiSignal)
        .success(
          intl.formatMessage(threadActionMessages.copyWorkingDirectorySuccess),
        );
    },
    () => {
      scope
        .get(toastApiSignal)
        .danger(
          intl.formatMessage(threadActionMessages.copyWorkingDirectoryError),
        );
    },
  );
}
function copyConversationMarkdownWithToast({
  conversationId,
  parentConversationId,
  scope,
  getMarkdown,
  intl,
}: CopyConversationMarkdownOptions & {
  intl: IntlLike;
  scope: AppScopeLike;
}) {
  (async () => {
    await sendAppServerRequest("ensure-conversation-history-loaded", {
      conversationId,
      dependentConversationIds:
        parentConversationId == null ? [] : [parentConversationId],
    });
    const markdown = await getMarkdown();
    if (markdown == null || markdown.trim().length === 0) return;
    await copyToClipboard(markdown);
    scope
      .get(toastApiSignal)
      .success(
        intl.formatMessage(
          threadActionMessages.copyConversationMarkdownSuccess,
        ),
      );
  })().catch(() => {
    scope
      .get(toastApiSignal)
      .danger(
        intl.formatMessage(threadActionMessages.copyConversationMarkdownError),
      );
  });
}
function markThreadAsUnread({
  conversationId,
  hostId,
}: MarkThreadUnreadOptions) {
  void sendAppServerRequest("mark-conversation-as-unread", {
    conversationId,
    ...(hostId == null
      ? {}
      : {
          hostId,
        }),
  });
}
export function initThreadActionsRuntimeChunk(): void {}
