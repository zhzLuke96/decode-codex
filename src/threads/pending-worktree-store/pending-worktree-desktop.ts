// Restored from ref/webview/assets/pending-worktree-store-DeJU9wZe.js
// pending-worktree-store-DeJU9wZe chunk restored from the Codex webview bundle.
import { vscodeApiF as vscodeBridge } from "../../boundaries/vscode-api";
import { addPendingWorktreeConversationStart } from "./pending-worktree-conversation-starts";
import {
  createPendingWorktreeEntry,
  createPendingWorktreeRequest,
} from "./pending-worktree-entry";
import { createPendingWorktreeId } from "./pending-worktree-ids";
import type { CreatePendingWorktreeInput } from "./types";
declare global {
  interface Window {
    electronBridge?: unknown;
  }
}
export function createPendingWorktreeInDesktop(
  input: CreatePendingWorktreeInput,
) {
  return createPendingWorktreeInDesktopWithId(
    createPendingWorktreeId(input.hostId),
    input,
  );
}
export function createPendingWorktreeInDesktopWithId(
  id: string,
  input: CreatePendingWorktreeInput,
) {
  if (window.electronBridge == null) {
    throw Error("Worktree app actions require the Codex desktop app");
  }
  if (
    createPendingWorktreeEntry(id, input).launchMode !==
    "create-stable-worktree"
  ) {
    addPendingWorktreeConversationStart(id);
  }
  vscodeBridge.dispatchMessage("pending-worktree-create", {
    hostId: input.hostId,
    request: createPendingWorktreeRequest(id, input),
  });
  return id;
}
