// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Keyboard shortcut label formatting and registration hooks.
import { useEffect, useRef } from "react";

import { registerCommandHandler } from "./run-command";

const MODIFIER_LABELS: Record<string, string> = {
  Cmd: "⌘",
  Command: "⌘",
  CmdOrCtrl: "⌘",
  Ctrl: "Ctrl",
  Control: "Ctrl",
  Alt: "Alt",
  Option: "⌥",
  Shift: "⇧",
  Enter: "Enter",
  Return: "Enter",
  Escape: "Esc",
  Esc: "Esc",
  Backspace: "Backspace",
  Delete: "Del",
  Space: "Space",
};

const DEFAULT_KEYBINDINGS: Record<string, string> = {
  focusBrowserAddressBar: "CmdOrCtrl+L",
  "git.commit": "CmdOrCtrl+Enter",
  "git.createPullRequest": "CmdOrCtrl+Shift+Enter",
  navigateBack: "CmdOrCtrl+[",
  navigateForward: "CmdOrCtrl+]",
  searchChats: "CmdOrCtrl+K",
  toggleSidebar: "CmdOrCtrl+B",
};

export const keyboardShortcutRegistry = {
  getBindings(commandId: string): string[] {
    return resolveCommandBindings({ commandId });
  },
};

export function formatKeyboardShortcut(
  shortcut: string | null | undefined,
  isMacOS: boolean = true,
  _isLinux: boolean = false,
): string {
  if (shortcut == null || shortcut.trim() === "") return "";
  return shortcut
    .split("+")
    .map((part) => {
      const token = part.trim();
      if (token.length === 1) return token.toUpperCase();
      if (token === "CmdOrCtrl") return isMacOS ? "⌘" : "Ctrl";
      return MODIFIER_LABELS[token] ?? token;
    })
    .filter(Boolean)
    .join(" ");
}

export function getDefaultKeybindingsForCommand({
  commandId,
}: {
  commandId: string;
  isMacOS?: boolean;
}): string[] {
  const binding = DEFAULT_KEYBINDINGS[commandId];
  return binding == null ? [] : [binding];
}

export function resolveCommandBindings({
  commandId,
}: {
  commandId: string;
  keymapState?: unknown;
  isMacOS?: boolean;
}): string[] {
  return getDefaultKeybindingsForCommand({ commandId });
}

function resolveShortcutArgs(
  registryOrCommandId: unknown,
  commandIdOrHandler?: unknown,
): { commandId: string; handler?: (() => void) | null } {
  if (typeof registryOrCommandId === "string") {
    return {
      commandId: registryOrCommandId,
      handler:
        typeof commandIdOrHandler === "function"
          ? (commandIdOrHandler as () => void)
          : undefined,
    };
  }
  return {
    commandId: typeof commandIdOrHandler === "string" ? commandIdOrHandler : "",
  };
}

export function useCommandShortcut(
  registryOrCommandId: unknown,
  commandIdOrHandler?: unknown,
  options: { enabled?: boolean } = {},
): string | null {
  const { commandId, handler } = resolveShortcutArgs(
    registryOrCommandId,
    commandIdOrHandler,
  );
  const accelerator = DEFAULT_KEYBINDINGS[commandId] ?? null;
  useEffect(() => {
    if (handler == null || options.enabled === false) return;
    return undefined;
  }, [handler, options.enabled]);
  return accelerator == null ? null : formatKeyboardShortcut(accelerator);
}

export function useKeyboardAccelerator(
  commandOrOptions:
    | string
    | {
        commandId?: string;
        accelerator?: string;
        handler?: () => void;
        enabled?: boolean;
      },
): string | null {
  if (typeof commandOrOptions === "string") {
    return DEFAULT_KEYBINDINGS[commandOrOptions] ?? null;
  }
  return (
    commandOrOptions.accelerator ??
    (commandOrOptions.commandId == null
      ? null
      : (DEFAULT_KEYBINDINGS[commandOrOptions.commandId] ?? null))
  );
}

export function useNamedKeyboardShortcut(
  commandId: string,
  handler?: (() => void) | null,
  options: { enabled?: boolean } = {},
): string | null {
  return useCommandShortcut(commandId, handler, options);
}

export function useCommandHandler(
  commandId: string,
  handler: (keyboardEvent?: unknown, context?: unknown) => boolean | void,
  options: { enabled?: boolean; isActive?: () => boolean } = {},
): void {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    return registerCommandHandler(
      commandId,
      (keyboardEvent, context) => handlerRef.current(keyboardEvent, context),
      {
        isActive: () =>
          options.enabled !== false && (options.isActive?.() ?? true),
      },
    );
  }, [commandId, options.enabled, options.isActive]);
}
