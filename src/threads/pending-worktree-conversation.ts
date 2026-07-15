// Restored from ref/webview/assets/pending-worktree-conversation-TrIGnTKW.js
import {
  formatGoalObjectiveInput,
  sendAppServerRequest,
} from "../boundaries/use-host-config.facade";
import { vscodeApiH, vscodeApiN } from "../boundaries/vscode-api";
import { upsertBrowserSidebarTabSource } from "../browser/browser-sidebar-open-source";
import { buildStartConversationParams } from "../utils/build-start-conversation-params";
import { setPinnedThread } from "../utils/set-pinned-thread";
type ConversationInputItem = {
  type: string;
  text?: string;
  [key: string]: unknown;
};
type FileAttachment = {
  path?: string | null;
  [key: string]: unknown;
};
type ThreadGoalDraft = {
  pastedTextAttachments?: Array<{
    file: {
      path: string;
    };
  }>;
};
type StartConversationParamsInput = {
  input: ConversationInputItem[];
  fileAttachments: FileAttachment[];
  [key: string]: unknown;
};
type PendingWorktreeEntry = {
  launchMode: string;
  id?: string;
  attempt?: string | number;
  phase?: string;
  hostId: string;
  sourceConversationId?: string;
  sourceCollaborationMode?: unknown;
  targetTurnId?: string | null;
  threadSource?: unknown;
  threadStartHostId?: string | null;
  startConversationParamsInput: StartConversationParamsInput;
  initialThreadTitle?: string | null;
  labelEdited?: boolean;
  label?: string;
  threadGoalDraft?: ThreadGoalDraft | null;
  worktreeGitRoot?: string | null;
  worktreeOutputText?: string | null;
  localEnvironmentConfigPath?: string | null;
  errorMessage?: string | null;
  setupOutputText?: string | null;
  isPinned?: boolean;
  pinnedBeforeThreadId?: string | null;
  browserTransferSourceConversationId?: string | null;
  browserTransferSourceBrowserTabId?: string | null;
  browserTransferSourceBrowserTabIds?: string[] | null;
};
type PendingWorktreeHostConfig = {
  id: string;
};
export async function startPendingWorktreeConversation({
  entry,
  threadGoalObjective,
  workspaceRoot,
}: {
  entry: PendingWorktreeEntry;
  threadGoalObjective?: string | null;
  workspaceRoot: string;
}) {
  const worktreeInit = buildWorktreeInitPayload(entry);
  if (entry.launchMode === "fork-conversation") {
    const conversationId =
      entry.targetTurnId == null
        ? await sendAppServerRequest("fork-conversation-from-latest", {
            hostId: entry.hostId,
            conversationId: entry.sourceConversationId,
            cwd: workspaceRoot,
            workspaceRoots: [workspaceRoot],
            collaborationMode: entry.sourceCollaborationMode,
            threadSource: entry.threadSource,
          })
        : await sendAppServerRequest("fork-conversation-from-turn", {
            conversationId: entry.sourceConversationId,
            targetTurnId: entry.targetTurnId,
            cwd: workspaceRoot,
            workspaceRoots: [workspaceRoot],
            collaborationMode: entry.sourceCollaborationMode,
            threadSource: entry.threadSource,
          });
    if (worktreeInit != null) {
      await sendAppServerRequest("add-worktree-init-synthetic-turn", {
        conversationId,
        worktreeInit,
      });
    }
    return conversationId;
  }
  if (entry.launchMode !== "start-conversation") {
    throw Error(`Unsupported launch mode: ${entry.launchMode}`);
  }
  const startConversationInput =
    threadGoalObjective == null
      ? entry.startConversationParamsInput
      : {
          ...entry.startConversationParamsInput,
          fileAttachments: removeThreadGoalDraftPastedTextAttachments(entry),
          input: replaceFirstTextInput(
            entry.startConversationParamsInput.input,
            formatGoalObjectiveInput(threadGoalObjective),
          ),
        };
  const projectAssignment = startConversationInput.projectAssignment as
    | (Record<string, unknown> & { cwd?: string })
    | null
    | undefined;
  return sendAppServerRequest("start-conversation", {
    hostId: entry.threadStartHostId ?? entry.hostId,
    ...buildStartConversationParams({
      ...startConversationInput,
      workspaceRoots: [workspaceRoot],
      cwd: workspaceRoot,
      projectAssignment:
        projectAssignment == null
          ? projectAssignment
          : {
              ...projectAssignment,
              cwd: workspaceRoot,
            },
    } as Parameters<typeof buildStartConversationParams>[0]),
    skipAutoTitleGeneration: entry.initialThreadTitle != null,
    worktreeInit: worktreeInit ?? undefined,
  });
}
export function restorePendingWorktreeBrowserTransferSources(
  entry: PendingWorktreeEntry,
  conversationId: string,
): void {
  const transferSourceConversationId =
    entry.browserTransferSourceConversationId;
  if (transferSourceConversationId == null) {
    return;
  }
  const transferSourceBrowserTabIds = entry.browserTransferSourceBrowserTabIds;
  const hasExplicitTransferSourceTabs =
    transferSourceBrowserTabIds != null &&
    transferSourceBrowserTabIds.length > 0;
  const legacyTransferSourceTabId = `${transferSourceConversationId}:legacy`;
  const browserTabIds = hasExplicitTransferSourceTabs
    ? transferSourceBrowserTabIds
    : [entry.browserTransferSourceBrowserTabId ?? legacyTransferSourceTabId];
  const activeBrowserTabId =
    entry.browserTransferSourceBrowserTabId != null &&
    browserTabIds.includes(entry.browserTransferSourceBrowserTabId)
      ? entry.browserTransferSourceBrowserTabId
      : browserTabIds.at(-1);
  for (const transferSourceBrowserTabId of browserTabIds) {
    upsertBrowserSidebarTabSource(conversationId, {
      active: transferSourceBrowserTabId === activeBrowserTabId,
      browserTabId:
        hasExplicitTransferSourceTabs ||
        entry.browserTransferSourceBrowserTabId != null
          ? transferSourceBrowserTabId
          : `${conversationId}:legacy`,
      transferSourceBrowserTabId,
      transferSourceConversationId,
    });
  }
}
export async function finalizePendingWorktreeConversation({
  entry,
  conversationId,
  hostConfig,
  threadGoalObjective,
}: {
  entry: PendingWorktreeEntry;
  conversationId: string;
  hostConfig: PendingWorktreeHostConfig;
  threadGoalObjective?: string | null;
}): Promise<void> {
  if (entry.worktreeGitRoot != null) {
    try {
      await vscodeApiN("worktree-set-owner-thread", {
        params: {
          hostId: hostConfig.id,
          worktree: entry.worktreeGitRoot,
          conversationId,
        },
      });
    } catch (error) {
      vscodeApiH.warning(
        "Worktree created and conversation started, but failed to set worktree owner metadata: {}",
        {
          safe: {},
          sensitive: {
            error,
          },
        },
      );
    }
  }
  if (entry.isPinned) {
    try {
      await setPinnedThread(conversationId, true, entry.pinnedBeforeThreadId);
    } catch (error) {
      vscodeApiH.warning(
        "Worktree conversation started, but failed to set pinned metadata: {}",
        {
          safe: {},
          sensitive: {
            error,
          },
        },
      );
    }
  }
  if (
    entry.launchMode === "start-conversation" &&
    threadGoalObjective != null
  ) {
    await sendAppServerRequest("set-thread-goal", {
      appendTranscriptItem: false,
      conversationId,
      hostId: entry.threadStartHostId ?? hostConfig.id,
      objective: threadGoalObjective,
    });
  }
  const initialTitle = (
    entry.initialThreadTitle ?? (entry.labelEdited ? entry.label : "")
  ).trim();
  if (initialTitle.length !== 0) {
    await sendAppServerRequest("set-thread-title", {
      conversationId,
      title: initialTitle,
    });
  }
}
function removeThreadGoalDraftPastedTextAttachments(
  entry: PendingWorktreeEntry,
): FileAttachment[] {
  const pastedTextAttachmentPaths = new Set(
    entry.threadGoalDraft?.pastedTextAttachments?.map(
      (attachment) => attachment.file.path,
    ),
  );
  return entry.startConversationParamsInput.fileAttachments.filter(
    (attachment) =>
      !pastedTextAttachmentPaths.has(attachment.path ?? undefined),
  );
}
function replaceFirstTextInput(
  input: ConversationInputItem[],
  text: string,
): ConversationInputItem[] {
  let replacedTextInput = false;
  return input.map((item) =>
    !replacedTextInput && item.type === "text"
      ? ((replacedTextInput = true),
        {
          ...item,
          text,
        })
      : item,
  );
}

function buildWorktreeInitPayload(entry: PendingWorktreeEntry): {
  id: string;
  worktreeOutputText?: string | null;
  setup: null | {
    outcome: "completed" | "skipped";
    outputText?: string | null;
  };
} | null {
  if (entry.phase !== "worktree-ready") return null;
  return {
    id: `${entry.id}:${entry.attempt}`,
    worktreeOutputText: entry.worktreeOutputText,
    setup:
      entry.localEnvironmentConfigPath == null
        ? null
        : {
            outcome: entry.errorMessage == null ? "completed" : "skipped",
            outputText: entry.setupOutputText,
          },
  };
}

export function initPendingWorktreeConversationRuntimeChunk(): void {}
