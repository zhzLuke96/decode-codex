// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import React from "react";
import type {
  PendingWorktreeConversationStart,
  PendingWorktreeConversationStartRecord,
} from "./types";
const pendingWorktreeConversationStartSubscribers = new Set<() => void>();
const pendingWorktreeConversationStartsById = new Map<
  string,
  PendingWorktreeConversationStartRecord
>();
let pendingWorktreeConversationStartSnapshot: PendingWorktreeConversationStart[] =
  [];

export function initPendingWorktreeConversationStartsChunk(): void {
  void pendingWorktreeConversationStartSubscribers;
  void pendingWorktreeConversationStartsById;
}

export function usePendingWorktreeConversationStarts() {
  return React.useSyncExternalStore(
    subscribePendingWorktreeConversationStarts,
    getPendingWorktreeConversationStartSnapshot,
  );
}
export function getPendingWorktreeConversationStartActions() {
  return {
    addPendingWorktreeConversationStart,
    beginPendingWorktreeConversationStart: (pendingWorktreeId: string) =>
      pendingWorktreeConversationStartsById.get(pendingWorktreeId)?.state ===
      "waiting"
        ? (pendingWorktreeConversationStartsById.set(pendingWorktreeId, {
            state: "starting",
          }),
          emitPendingWorktreeConversationStartChange(),
          true)
        : false,
    failPendingWorktreeConversationStart: (pendingWorktreeId: string) => {
      if (pendingWorktreeConversationStartsById.has(pendingWorktreeId)) {
        pendingWorktreeConversationStartsById.set(pendingWorktreeId, {
          state: "failed",
        });
        emitPendingWorktreeConversationStartChange();
      }
    },
    succeedPendingWorktreeConversationStart: (
      pendingWorktreeId: string,
      conversationId: string,
    ) => {
      if (pendingWorktreeConversationStartsById.has(pendingWorktreeId)) {
        pendingWorktreeConversationStartsById.set(pendingWorktreeId, {
          state: "succeeded",
          conversationId,
        });
        emitPendingWorktreeConversationStartChange();
      }
    },
    retryPendingWorktreeConversationStart: (pendingWorktreeId: string) => {
      if (pendingWorktreeConversationStartsById.has(pendingWorktreeId)) {
        pendingWorktreeConversationStartsById.set(pendingWorktreeId, {
          state: "waiting",
        });
        emitPendingWorktreeConversationStartChange();
      }
    },
    removePendingWorktreeConversationStart: (pendingWorktreeId: string) => {
      if (pendingWorktreeConversationStartsById.delete(pendingWorktreeId)) {
        emitPendingWorktreeConversationStartChange();
      }
    },
  };
}
export function addPendingWorktreeConversationStart(pendingWorktreeId: string) {
  pendingWorktreeConversationStartsById.set(pendingWorktreeId, {
    state: "waiting",
  });
  emitPendingWorktreeConversationStartChange();
}
function subscribePendingWorktreeConversationStarts(callback: () => void) {
  pendingWorktreeConversationStartSubscribers.add(callback);
  return () => {
    pendingWorktreeConversationStartSubscribers.delete(callback);
  };
}
function getPendingWorktreeConversationStartSnapshot() {
  return pendingWorktreeConversationStartSnapshot;
}
function emitPendingWorktreeConversationStartChange() {
  pendingWorktreeConversationStartSnapshot = Array.from(
    pendingWorktreeConversationStartsById,
    ([pendingWorktreeId, state]) => ({
      pendingWorktreeId,
      ...state,
    }),
  );
  pendingWorktreeConversationStartSubscribers.forEach((subscriber) => {
    subscriber();
  });
}
