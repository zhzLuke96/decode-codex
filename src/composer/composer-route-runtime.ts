// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Route builders and hotkey-window navigation helpers shared by the composer.
import { appServices } from "../boundaries/rpc.facade";
import { appMessenger } from "../runtime/onboarding-common-runtime";
import { isHotkeyWindowContext } from "../utils/is-hotkey-window-context";

type HotkeyWindowBridge = {
  hotkeyWindowHotkeys?: {
    open?: (options: { path: string }) => void | Promise<void>;
  };
};

function trimNonEmpty(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

export function parseThreadId(value: unknown): string {
  const directValue = trimNonEmpty(value);
  if (directValue != null) return directValue;
  if (value == null || typeof value !== "object") return "";
  const record = value as Record<string, unknown>;
  return (
    trimNonEmpty(record.threadId) ??
    trimNonEmpty(record.conversationId) ??
    trimNonEmpty(record.localConversationId) ??
    trimNonEmpty(record.id) ??
    ""
  );
}

export function conversationRoutePath(threadId: unknown): string {
  return `/local/${encodeURIComponent(parseThreadId(threadId))}`;
}

export const buildConversationRoute = conversationRoutePath;
export const hostConversationRoutePath = conversationRoutePath;

export function openThreadPath(threadId: unknown): string {
  return conversationRoutePath(threadId);
}

export function openTaskPath(taskId: unknown): string {
  const normalizedTaskId = trimNonEmpty(taskId) ?? "";
  return `/remote/${encodeURIComponent(normalizedTaskId)}`;
}

export function pendingWorktreeInitPath(pendingWorktreeId: unknown): string {
  const normalizedPendingWorktreeId = trimNonEmpty(pendingWorktreeId) ?? "";
  return `/worktree-init-v2/${encodeURIComponent(normalizedPendingWorktreeId)}`;
}

export function isHotkeyWindow(): boolean {
  return isHotkeyWindowContext();
}

export const hotkeyWindowBridge = appServices as HotkeyWindowBridge;

export function openHotkeyWindowThread({ path }: { path: string }): void {
  const hotkeyPath = toHotkeyWindowPath(path);
  if (hotkeyWindowBridge.hotkeyWindowHotkeys?.open != null) {
    void hotkeyWindowBridge.hotkeyWindowHotkeys.open({ path: hotkeyPath });
    return;
  }

  appMessenger.dispatchMessage("navigate-to-route", { path: hotkeyPath });
}

function toHotkeyWindowPath(path: string): string {
  if (path.startsWith("/hotkey-window/") || path === "/hotkey-window") {
    return path;
  }
  if (path.startsWith("/local/")) {
    return `/hotkey-window/thread/${path.slice("/local/".length)}`;
  }
  if (path.startsWith("/remote/")) {
    return `/hotkey-window/remote/${path.slice("/remote/".length)}`;
  }
  if (path.startsWith("/worktree-init-v2/")) {
    return `/hotkey-window${path}`;
  }
  return path;
}
