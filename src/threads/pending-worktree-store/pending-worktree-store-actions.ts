// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { useHostConfigO as useHostConfigValue } from "../../boundaries/use-host-config.facade";
import { vscodeApiF as vscodeBridge } from "../../boundaries/vscode-api";
import {
  addPendingWorktreeConversationStart,
  getPendingWorktreeConversationStartActions,
} from "./pending-worktree-conversation-starts";
import { createPendingWorktreeInDesktopWithId } from "./pending-worktree-desktop";
import { createPendingWorktreeEntry } from "./pending-worktree-entry";
import {
  createPendingWorktreeId,
  getHostIdFromPendingWorktreeId,
} from "./pending-worktree-ids";
import { applyPendingWorktreeMetadataUpdates } from "./pending-worktree-metadata";
import { cleanupThreadGoalDraftPastedTextAttachments } from "./thread-goal";
import type {
  CreatePendingWorktreeInput,
  PendingWorktree,
  PendingWorktreeMetadataUpdate,
  PendingWorktreeStoreActions,
} from "./types";
declare global {
  interface Window {
    electronBridge?: unknown;
  }
}
export function usePendingWorktreeStore(): PendingWorktreeStoreActions {
  const [pendingWorktrees, setPendingWorktrees] = useHostConfigValue(
    "pending_worktrees",
  ) as [
    PendingWorktree[] | undefined,
    (
      updater: (
        pendingWorktrees: PendingWorktree[] | undefined,
      ) => PendingWorktree[],
    ) => void,
  ];
  const {
    removePendingWorktreeConversationStart,
    retryPendingWorktreeConversationStart,
  } = getPendingWorktreeConversationStartActions();
  const createPendingWorktree = (input: CreatePendingWorktreeInput) => {
    const id = createPendingWorktreeId(input.hostId);
    const pendingWorktree = createPendingWorktreeEntry(id, input);
    return window.electronBridge == null
      ? (pendingWorktree.launchMode !== "create-stable-worktree" &&
          addPendingWorktreeConversationStart(id),
        setPendingWorktrees((current) => [
          ...(current === undefined ? [] : current),
          pendingWorktree,
        ]),
        id)
      : createPendingWorktreeInDesktopWithId(id, input);
  };
  const updatePendingWorktreeMetadata = (
    id: string,
    updates: PendingWorktreeMetadataUpdate[],
  ) => {
    if (updates.length === 0) return;
    if (window.electronBridge == null) {
      setPendingWorktrees((current) =>
        (current === undefined ? [] : current).map((item) =>
          item.id === id
            ? applyPendingWorktreeMetadataUpdates(item, updates)
            : item,
        ),
      );
      return;
    }
    updates.forEach((update) => {
      vscodeBridge.dispatchMessage("pending-worktree-update-metadata", {
        hostId: getHostIdFromPendingWorktreeId(id),
        id,
        update,
      });
    });
  };
  const renamePendingWorktree = (id: string, label: string) => {
    updatePendingWorktreeMetadata(id, [
      {
        type: "label",
        label,
      },
      {
        type: "labelEdited",
        labelEdited: true,
      },
    ]);
  };
  const setPendingWorktreePinned = (id: string, isPinned: boolean) => {
    updatePendingWorktreeMetadata(
      id,
      isPinned
        ? [
            {
              type: "isPinned",
              isPinned,
            },
          ]
        : [
            {
              type: "isPinned",
              isPinned,
            },
            {
              type: "pinnedBeforeThreadId",
              beforeThreadId: null,
            },
          ],
    );
  };
  const setPendingWorktreePinnedBeforeThreadId = (
    id: string,
    beforeThreadId: string | null,
  ) => {
    updatePendingWorktreeMetadata(id, [
      {
        type: "pinnedBeforeThreadId",
        beforeThreadId,
      },
    ]);
  };
  const clearPendingWorktreeAttention = (id: string) => {
    updatePendingWorktreeMetadata(id, [
      {
        type: "needsAttention",
        needsAttention: false,
      },
    ]);
  };
  const retryPendingWorktree = (id: string) => {
    retryPendingWorktreeConversationStart(id);
    if (window.electronBridge == null) {
      setPendingWorktrees((current) =>
        (current === undefined ? [] : current).map((item) =>
          item.id === id
            ? {
                ...item,
                attempt: item.attempt + 1,
                phase: "queued",
                outputText: "",
                worktreeOutputText: "",
                setupOutputText: "",
                errorMessage: null,
                worktreeWorkspaceRoot: null,
                worktreeGitRoot: null,
                needsAttention: false,
              }
            : item,
        ),
      );
      return;
    }
    vscodeBridge.dispatchMessage("pending-worktree-retry", {
      hostId: getHostIdFromPendingWorktreeId(id),
      id,
    });
  };
  const continuePendingWorktree = (id: string) => {
    addPendingWorktreeConversationStart(id);
    if (window.electronBridge == null) {
      setPendingWorktrees((current) =>
        (current === undefined ? [] : current).map((item) =>
          item.id === id &&
          item.phase === "failed" &&
          item.worktreeGitRoot != null &&
          item.worktreeWorkspaceRoot != null
            ? {
                ...item,
                phase: "worktree-ready",
                needsAttention: false,
              }
            : item,
        ),
      );
      return;
    }
    vscodeBridge.dispatchMessage("pending-worktree-continue", {
      hostId: getHostIdFromPendingWorktreeId(id),
      id,
    });
  };
  const cleanupThreadGoalDraft = (id: string) => {
    const pendingWorktree = pendingWorktrees?.find((item) => item.id === id);
    if (
      pendingWorktree?.launchMode === "start-conversation" &&
      pendingWorktree.threadGoalDraft != null
    ) {
      void cleanupThreadGoalDraftPastedTextAttachments({
        draft: pendingWorktree.threadGoalDraft,
        fallbackHostId: pendingWorktree.hostId,
      });
    }
  };
  const cancelPendingWorktree = (id: string) => {
    removePendingWorktreeConversationStart(id);
    cleanupThreadGoalDraft(id);
    if (window.electronBridge == null) {
      setPendingWorktrees((current) =>
        (current === undefined ? [] : current).filter((item) => item.id !== id),
      );
      return;
    }
    vscodeBridge.dispatchMessage("pending-worktree-cancel", {
      hostId: getHostIdFromPendingWorktreeId(id),
      id,
    });
  };
  const dismissPendingWorktree = (id: string) => {
    removePendingWorktreeConversationStart(id);
    cleanupThreadGoalDraft(id);
    if (window.electronBridge == null) {
      setPendingWorktrees((current) =>
        (current === undefined ? [] : current).filter((item) => item.id !== id),
      );
      return;
    }
    vscodeBridge.dispatchMessage("pending-worktree-dismiss", {
      hostId: getHostIdFromPendingWorktreeId(id),
      id,
    });
  };
  return {
    createPendingWorktree,
    renamePendingWorktree,
    setPendingWorktreePinned,
    setPendingWorktreePinnedBeforeThreadId,
    clearPendingWorktreeAttention,
    retryPendingWorktree,
    continuePendingWorktree,
    cancelPendingWorktree,
    dismissPendingWorktree,
  };
}
