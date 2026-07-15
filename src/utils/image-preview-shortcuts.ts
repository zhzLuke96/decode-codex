// Restored from ref/webview/assets/image-preview-shortcuts-Bl8w6jhv.js
// image-preview-shortcuts-Bl8w6jhv chunk restored from the Codex webview bundle.
type ShortcutHandler = (event: KeyboardEvent) => void;
type ShortcutStateListener = () => void;

let activeShortcutHandler: ShortcutHandler | null = null;
let shortcutSuspensionCount = 0;
const shortcutStateListeners = new Set<ShortcutStateListener>();

export function subscribeImagePreviewShortcutState(
  listener: ShortcutStateListener,
) {
  shortcutStateListeners.add(listener);
  return () => {
    shortcutStateListeners.delete(listener);
  };
}

export function setImagePreviewShortcutHandler(handler: ShortcutHandler) {
  activeShortcutHandler = handler;
  return () => {
    if (activeShortcutHandler === handler) activeShortcutHandler = null;
  };
}

export function suspendImagePreviewShortcuts() {
  let active = true;
  shortcutSuspensionCount += 1;
  notifyImagePreviewShortcutState();
  return () => {
    if (!active) return;
    active = false;
    shortcutSuspensionCount = Math.max(0, shortcutSuspensionCount - 1);
    notifyImagePreviewShortcutState();
  };
}

export function dispatchImagePreviewShortcut(event: KeyboardEvent) {
  activeShortcutHandler?.(event);
}

export function areImagePreviewShortcutsSuspended() {
  return shortcutSuspensionCount > 0;
}

function notifyImagePreviewShortcutState() {
  for (const listener of shortcutStateListeners) listener();
}
