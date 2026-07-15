// Restored from ref/webview/assets/keyboard-shortcuts-settings-BuLGCo4B.js
import type React from "react";
import {
  areEquivalentCommandIds,
  formatAccelerator,
  getDefaultKeybindingsForCommand,
  splitAcceleratorSequence,
} from "../../utils/electron-menu-shortcuts";
import { getCommandKeybindingOptions } from "../../utils/command-keybindings";
import {
  getKeyboardShortcutCommandCopy,
  type KeyboardShortcutCommand,
} from "../../features/keyboard-shortcuts";
import {
  getTopCommandMenuItem,
  type CommandMenuStackByScope,
} from "../../utils/command-menu-state";
import type {
  CommandWithTitle,
  ErrorByCommandId,
  IntlLike,
  KeymapState,
  MutationLike,
  ShortcutEntry,
  ShortcutUpdate,
} from "./types";

export function keyboardShortcutCellClassName(rowCount: number, index: number) {
  if (rowCount === 1) return "px-4 py-2";
  if (index === 0) return "px-4 pt-2 pb-0.5";
  return index === rowCount - 1 ? "px-4 pt-0.5 pb-2" : "px-4 py-0.5";
}

export function getResetShortcutIndex({
  commandId,
  hasCustomBinding,
  platform,
  shortcutEntries,
}: {
  commandId: string;
  hasCustomBinding: boolean;
  platform: string;
  shortcutEntries: ShortcutEntry[];
}) {
  if (!hasCustomBinding) return null;
  const defaultAccelerators = getDefaultKeybindingsForCommand({
    commandId,
    isMacOS: platform === "macOS",
  });
  const changedIndex = shortcutEntries.findIndex(
    (entry, index) => entry.accelerator !== defaultAccelerators[index],
  );
  return changedIndex === -1 ? 0 : changedIndex;
}

export function shortcutLabelStartsWith(label: string, query: string) {
  return label === query || label.startsWith(`${query} `);
}

export function findConflictingCommandTitle({
  accelerator,
  allCommands,
  commandId,
  intl,
  keymapState,
  platform,
  registeredCommands,
}: {
  accelerator: string;
  allCommands: CommandWithTitle[];
  commandId: string;
  intl: IntlLike;
  keymapState: KeymapState;
  platform: string;
  registeredCommands: CommandMenuStackByScope;
}) {
  for (const { command } of allCommands) {
    if (
      command.id !== commandId &&
      !areEquivalentCommandIds(command.id, commandId) &&
      getCommandKeybindingOptions(command.id, keymapState, platform).some(
        (entry) =>
          acceleratorSequencesOverlap(
            entry.accelerator,
            accelerator,
            platform === "macOS",
          ),
      )
    ) {
      return getKeyboardShortcutCommandCopy(
        command,
        intl,
        getTopCommandMenuItem(registeredCommands, command.id) as never,
      ).title;
    }
  }
  return null;
}

export function areEquivalentAccelerators(
  firstAccelerator: string,
  secondAccelerator: string,
  isMacOS: boolean,
) {
  return (
    formatAccelerator(firstAccelerator, isMacOS) ===
    formatAccelerator(secondAccelerator, isMacOS)
  );
}

function acceleratorSequencesOverlap(
  firstAccelerator: string,
  secondAccelerator: string,
  isMacOS: boolean,
) {
  const firstSequence = splitAcceleratorSequence(firstAccelerator).map((item) =>
    formatAccelerator(item, isMacOS),
  );
  const secondSequence = splitAcceleratorSequence(secondAccelerator).map(
    (item) => formatAccelerator(item, isMacOS),
  );
  const overlapLength = Math.min(firstSequence.length, secondSequence.length);
  return (
    overlapLength > 0 &&
    (firstSequence.length === overlapLength ||
      secondSequence.length === overlapLength) &&
    firstSequence
      .slice(0, overlapLength)
      .every((item, index) => item === secondSequence[index])
  );
}

export async function updateCommandKeybinding({
  commandId,
  intl,
  setCommandKeybinding,
  setErrorByCommandId,
  update,
}: {
  commandId: string;
  intl: IntlLike;
  setCommandKeybinding: MutationLike;
  setErrorByCommandId: React.Dispatch<React.SetStateAction<ErrorByCommandId>>;
  update: ShortcutUpdate;
}) {
  setErrorByCommandId((current) => ({
    ...current,
    [commandId]: undefined,
  }));
  try {
    await setCommandKeybinding.mutateAsync({
      commandId,
      update,
    });
  } catch (error) {
    setErrorByCommandId((current) => ({
      ...current,
      [commandId]:
        error instanceof Error
          ? error.message
          : intl.formatMessage({
              id: "settings.keyboardShortcuts.updateError",
              defaultMessage: "Failed to update shortcut",
              description:
                "Fallback error shown when updating an action shortcut fails",
            }),
    }));
  }
}

export function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export type { KeyboardShortcutCommand };
