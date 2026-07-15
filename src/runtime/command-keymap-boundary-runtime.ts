// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Command-keymap boundary helpers for platform and keyboard modifier state.
import {
  appStoreScope,
  createScopedAtom,
} from "./onboarding-scope-runtime";

export type CommandPlatform = "linux" | "macOS" | "windows";

interface CommandKeymapModifierState {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
}

const defaultModifierState: CommandKeymapModifierState = {
  altKey: false,
  ctrlKey: false,
  metaKey: false,
  shiftKey: false,
};

export const platformAtom = createScopedAtom(
  appStoreScope,
  detectCommandPlatform,
);

const commandKeymapModifierStateAtom = createScopedAtom(
  appStoreScope,
  defaultModifierState,
);

export function assertKnownCommandId(commandId: string): void {
  if (typeof commandId !== "string" || commandId.trim().length === 0) {
    throw Error(`Unknown command id: ${String(commandId)}`);
  }
}

export function updateCommandKeymapState(
  store: { set?: (atom: unknown, value: unknown) => void } | null | undefined,
  event: KeyboardEvent,
): void {
  store?.set?.(commandKeymapModifierStateAtom, {
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    metaKey: event.metaKey,
    shiftKey: event.shiftKey,
  });
}

export function resetCommandKeymapState(
  store: { set?: (atom: unknown, value: unknown) => void } | null | undefined,
): void {
  store?.set?.(commandKeymapModifierStateAtom, defaultModifierState);
}

function detectCommandPlatform(): CommandPlatform {
  if (typeof navigator === "undefined") return "macOS";
  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();
  if (platform.includes("mac") || userAgent.includes("mac os")) return "macOS";
  if (platform.includes("win") || userAgent.includes("windows")) return "windows";
  return "linux";
}
