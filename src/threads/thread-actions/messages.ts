// Restored from ref/webview/assets/thread-actions-DctPk86-.js
// thread-actions-DctPk86- chunk restored from the Codex webview bundle.
import { defineMessages } from "../../vendor/react-intl";
export const threadActionMessages = defineMessages({
  archiveThreadError: {
    id: "sidebarElectron.archiveThreadError",
    defaultMessage: "Failed to archive chat",
    description: "Error message when archiving a local thread",
  },
  interruptThreadError: {
    id: "sidebarElectron.interruptThreadError",
    defaultMessage: "Failed to stop chat",
    description: "Error message when stopping an in-progress local thread",
  },
  renameThreadError: {
    id: "sidebarElectron.renameThreadError",
    defaultMessage: "Failed to rename chat",
    description: "Error message when renaming a local thread",
  },
  copyWorkingDirectory: {
    id: "threadHeader.copyWorkingDirectory",
    defaultMessage: "Copy working directory",
    description: "Menu item to copy the current working directory",
  },
  copyWorkingDirectorySuccess: {
    id: "threadHeader.copyWorkingDirectorySuccess",
    defaultMessage: "Copied working directory",
    description:
      "Toast shown after copying the current working directory to the clipboard",
  },
  copyWorkingDirectoryError: {
    id: "threadHeader.copyWorkingDirectoryError",
    defaultMessage: "Failed to copy working directory",
    description:
      "Toast shown when copying the current working directory to the clipboard fails",
  },
  copySessionId: {
    id: "threadHeader.copySessionId",
    defaultMessage: "Copy session ID",
    description: "Menu item to copy the current session ID",
  },
  copyAppLink: {
    id: "threadHeader.copyAppLink",
    defaultMessage: "Copy deeplink",
    description: "Menu item to copy a deeplink to this thread",
  },
  copyConversationMarkdown: {
    id: "threadHeader.copyConversationMarkdown",
    defaultMessage: "Copy as Markdown",
    description: "Menu item to copy the current conversation as Markdown",
  },
  copyConversationMarkdownSuccess: {
    id: "threadHeader.copyConversationMarkdownSuccess",
    defaultMessage: "Copied conversation as Markdown",
    description:
      "Toast shown after copying the current conversation as Markdown to the clipboard",
  },
  copyConversationMarkdownError: {
    id: "threadHeader.copyConversationMarkdownError",
    defaultMessage: "Failed to copy conversation as Markdown",
    description:
      "Toast shown when copying the current conversation as Markdown to the clipboard fails",
  },
  openInNewWindow: {
    id: "threadHeader.openInNewWindow",
    defaultMessage: "Open in new window",
    description: "Menu item to open the current thread in a new window",
  },
  moreActions: {
    id: "threadHeader.moreActions",
    defaultMessage: "Chat actions",
    description: "Aria label for thread actions dropdown",
  },
  renameThread: {
    id: "sidebarElectron.renameThread",
    defaultMessage: "Rename chat",
    description: "Menu item to rename a local thread",
  },
  archiveThread: {
    id: "sidebarElectron.archiveThread",
    defaultMessage: "Archive chat",
    description: "Menu item to archive a local thread",
  },
  addAutomation: {
    id: "sidebarElectron.addAutomation",
    defaultMessage: "Add automation…",
    description:
      "Menu item to create a new heartbeat automation attached to a local thread",
  },
  editAutomation: {
    id: "sidebarElectron.editAutomation",
    defaultMessage: "Edit automation…",
    description:
      "Menu item to edit the heartbeat automation attached to a local thread",
  },
  markThreadUnread: {
    id: "sidebarElectron.markThreadUnread",
    defaultMessage: "Mark as unread",
    description: "Menu item to mark a local thread as unread",
  },
  forkIntoLocal: {
    id: "threadHeader.forkIntoLocal",
    defaultMessage: "Fork into local",
    description: "Menu item to fork a local thread into the current workspace",
  },
  forkIntoSameWorktree: {
    id: "threadHeader.forkIntoSameWorktree",
    defaultMessage: "Fork into same worktree",
    description: "Menu item to fork a worktree thread into the same worktree",
  },
  forkIntoWorktree: {
    id: "threadHeader.forkIntoWorktree",
    defaultMessage: "Fork into new worktree",
    description: "Menu item to fork a local thread into a new worktree",
  },
  forkThreadError: {
    id: "threadHeader.forkThreadError",
    defaultMessage: "Failed to fork chat",
    description: "Error message shown when forking a local thread fails",
  },
  forkThreadRequiresGitRepo: {
    id: "threadHeader.forkThreadRequiresGitRepo",
    defaultMessage: "Fork into new worktree requires a git repository",
    description:
      "Error message shown when trying to fork into a worktree outside a git repository",
  },
  forkPendingWorktreeTitle: {
    id: "threadHeader.forkPendingWorktreeTitle",
    defaultMessage: "Forked conversation",
    description:
      "Default pending worktree label when forking a conversation from a thread menu",
  },
  forkPendingWorktreePrompt: {
    id: "threadHeader.forkPendingWorktreePrompt",
    defaultMessage: "Fork this conversation into a new worktree.",
    description:
      "Prompt text shown on the worktree init page for thread-menu fork actions",
  },
});
