// Restored from ref/webview/assets/use-register-command-T-86rz-c.js
// use-register-command-T-86rz-c chunk restored from the Codex webview bundle.
import React from "react";
import { _appScopeO, appScopeRoot } from "../boundaries/app-scope";
import { commandMenuStacksSignal } from "./command-menu-state";
import { useStableCallback } from "./use-stable-callback";
import { registerCommandHandler } from "./run-command";
type CommandHandler = () => void;
type KeyboardHandler = (
  keyboardEvent: unknown,
  context: unknown,
) => boolean | void;
type CommandMenuEntry = {
  menuItem?: unknown;
  [key: string]: unknown;
};
type CommandMenuStacks = Record<string, CommandMenuEntry[]>;
type AppScopeStore = {
  set: (
    signal: unknown,
    updater: (currentStacks: CommandMenuStacks) => CommandMenuStacks,
  ) => void;
};
type UseRegisterCommandOptions = {
  contextHandler?: (context: unknown) => void;
  enabled?: boolean;
  isActive?: () => boolean;
  keyboardHandler?: KeyboardHandler;
  menuItem?: unknown;
};
export function useRegisterCommand(
  commandId: string,
  handler: CommandHandler,
  options: UseRegisterCommandOptions = {},
): void {
  const {
    contextHandler,
    enabled = true,
    isActive,
    keyboardHandler,
    menuItem,
  } = options;
  const appScopeStore = _appScopeO(appScopeRoot) as AppScopeStore;
  const isActiveCallback = useStableCallback(() => isActive?.() ?? true);
  const commandHandler = (
    React as typeof React & {
      useEffectEvent: <TCallback extends (...args: never[]) => unknown>(
        callback: TCallback,
      ) => TCallback;
    }
  ).useEffectEvent((keyboardEvent?: unknown, context?: unknown) => {
    if (keyboardEvent != null) {
      const keyboardResult = keyboardHandler?.(keyboardEvent, context);
      if (keyboardResult === false) return false;
      if (keyboardResult === true) return;
    }
    if (contextHandler != null) {
      contextHandler(context);
      return;
    }
    handler();
  });
  React.useEffect(() => {
    if (!enabled) return;
    const menuEntry =
      menuItem == null
        ? {}
        : {
            menuItem,
          };
    const unregisterCommand = registerCommandHandler(
      commandId,
      commandHandler,
      {
        isActive: isActiveCallback,
      },
    );
    appScopeStore.set(commandMenuStacksSignal, (currentStacks) =>
      addCommandMenuEntry(currentStacks, commandId, menuEntry),
    );
    return () => {
      unregisterCommand();
      appScopeStore.set(commandMenuStacksSignal, (currentStacks) =>
        removeCommandMenuEntry(currentStacks, commandId, menuEntry),
      );
    };
  }, [
    appScopeStore,
    commandHandler,
    commandId,
    enabled,
    isActiveCallback,
    menuItem,
  ]);
}
function addCommandMenuEntry(
  currentStacks: CommandMenuStacks,
  commandId: string,
  menuEntry: CommandMenuEntry,
): CommandMenuStacks {
  return {
    ...currentStacks,
    [commandId]: [...(currentStacks[commandId] ?? []), menuEntry],
  };
}
function removeCommandMenuEntry(
  currentStacks: CommandMenuStacks,
  commandId: string,
  menuEntry: CommandMenuEntry,
): CommandMenuStacks {
  const commandStack = currentStacks[commandId];
  if (commandStack == null) return currentStacks;
  const entryIndex = commandStack.lastIndexOf(menuEntry);
  if (entryIndex === -1) return currentStacks;
  if (commandStack.length === 1) {
    const nextStacks = {
      ...currentStacks,
    };
    delete nextStacks[commandId];
    return nextStacks;
  }
  const nextStack = [...commandStack];
  nextStack.splice(entryIndex, 1);
  return {
    ...currentStacks,
    [commandId]: nextStack,
  };
}
