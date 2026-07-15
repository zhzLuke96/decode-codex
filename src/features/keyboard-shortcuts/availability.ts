// Restored from ref/webview/assets/keyboard-shortcuts-search-input-C1dmntOi.js
// keyboard-shortcuts-search-input-C1dmntOi chunk restored from the Codex webview bundle.
import { COMMAND_MENU_GROUP_ORDER } from "../../utils/electron-menu-shortcuts";
import type { KeyboardShortcutCommand } from "./types";
export type KeyboardShortcutFeatureAvailability = {
  modeSwitchAvailable: boolean;
  isGlobalDictationEnabled: boolean;
  isHotkeyWindowEnabled: boolean;
  isProcessManagerEnabled: boolean;
  isRealtimeConversationEnabled: boolean;
  isVoiceInputEnabled: boolean;
};
export type KeyboardShortcutAvailability =
  KeyboardShortcutFeatureAvailability & {
    browserSidebarEnabled: boolean;
    platform: string;
  };
export function isKeyboardShortcutCommandAvailable(
  commandId: string,
  {
    browserSidebarEnabled,
    modeSwitchAvailable,
    isGlobalDictationEnabled,
    isHotkeyWindowEnabled,
    isProcessManagerEnabled,
    isRealtimeConversationEnabled,
    isVoiceInputEnabled,
    platform,
  }: KeyboardShortcutAvailability,
): boolean {
  if (
    !isKeyboardShortcutCommandFeatureEnabled(commandId, {
      modeSwitchAvailable,
      isGlobalDictationEnabled,
      isHotkeyWindowEnabled,
      isProcessManagerEnabled,
      isRealtimeConversationEnabled,
      isVoiceInputEnabled,
    })
  ) {
    return false;
  }
  if (commandId === "copyConversationPath") return platform === "macOS";
  if (
    commandId === "hardReloadBrowserPage" ||
    commandId === "openBrowserTab" ||
    commandId === "reloadBrowserPage" ||
    commandId === "toggleBrowserPanel"
  ) {
    return browserSidebarEnabled;
  }
  return commandId !== "toggleTraceRecording";
}

export function initKeyboardShortcutAvailabilityChunk(): void {}

export function isKeyboardShortcutCommandFeatureEnabled(
  commandId: string,
  {
    modeSwitchAvailable,
    isGlobalDictationEnabled,
    isHotkeyWindowEnabled,
    isProcessManagerEnabled,
    isRealtimeConversationEnabled,
    isVoiceInputEnabled,
  }: KeyboardShortcutFeatureAvailability,
): boolean {
  if (commandId === "hotkeyWindow") return isHotkeyWindowEnabled;
  if (commandId === "switchToMode1" || commandId === "switchToMode2") {
    return modeSwitchAvailable;
  }
  if (commandId === "openProcessManager") return isProcessManagerEnabled;
  if (commandId === "realtimeVoice") return isRealtimeConversationEnabled;
  if (
    commandId === "globalDictationHold" ||
    commandId === "globalDictationToggle"
  ) {
    return isGlobalDictationEnabled && isVoiceInputEnabled;
  }
  return true;
}
export function compareKeyboardShortcutCommands(
  firstCommand: KeyboardShortcutCommand,
  secondCommand: KeyboardShortcutCommand,
): number {
  const groupDelta =
    getCommandMenuGroupRank(firstCommand) -
    getCommandMenuGroupRank(secondCommand);
  return groupDelta === 0
    ? firstCommand.id.localeCompare(secondCommand.id)
    : groupDelta;
}

export function initKeyboardShortcutCommandOrderingChunk(): void {}

function getCommandMenuGroupRank(command: KeyboardShortcutCommand): number {
  if (command.kind !== "webview" || command.commandMenuGroupKey == null) {
    return COMMAND_MENU_GROUP_ORDER.length;
  }
  return COMMAND_MENU_GROUP_ORDER.indexOf(command.commandMenuGroupKey);
}
