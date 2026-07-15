// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Synchronous helpers for querying a command's keyboard bindings outside of the jotai atom graph.
import {
  formatKeyboardShortcut,
  getDefaultKeybindingsForCommand,
  resolveCommandBindings,
} from "../boundaries/onboarding-commons-externals.facade";

export type CommandPlatform = "macOS" | "windows" | "linux";

export function commandHasDefaultBinding(
  commandId: string,
  platform: CommandPlatform,
): boolean {
  return (
    getDefaultKeybindingsForCommand({
      commandId,
      isMacOS: platform === "macOS",
    }).length > 0
  );
}

export type CommandKeyBinding = {
  accelerator: string;
  label: string;
};

export function getCommandKeyBindings(
  commandId: string,
  keymapState: unknown,
  platform: CommandPlatform,
): CommandKeyBinding[] {
  return resolveCommandBindings({
    commandId,
    keymapState,
    isMacOS: platform === "macOS",
  }).map((accelerator: string) => ({
    accelerator,
    label: formatKeyboardShortcut(
      accelerator,
      platform === "macOS",
      platform === "linux",
    ),
  }));
}
