// Restored from ref/webview/assets/keyboard-shortcuts-settings-BuLGCo4B.js
import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { Tooltip } from "../../ui/tooltip-b";
import { getKeyboardShortcutCommandCopy } from "../../features/keyboard-shortcuts";
import { allowsBareModifierGlobalShortcut } from "../../utils/electron-menu-shortcuts";
import { getCommandKeybindingOptions } from "../../utils/command-keybindings";
import {
  getTopCommandMenuItem,
  type CommandMenuStackByScope,
} from "../../utils/command-menu-state";
import { ShortcutCaptureInput } from "./shortcut-capture-input";
import {
  ShortcutLabel,
  ShortcutRowActions,
  StartCaptureButton,
} from "./shortcut-row-controls";
import {
  areEquivalentAccelerators,
  findConflictingCommandTitle,
  getResetShortcutIndex,
  keyboardShortcutCellClassName,
  updateCommandKeybinding,
} from "./keyboard-shortcuts-utils";
import type {
  CaptureState,
  CommandWithTitle,
  ErrorByCommandId,
  IntlLike,
  KeymapState,
  MutationLike,
} from "./types";

export function KeyboardShortcutTable({
  allCommands,
  captureState,
  errorByCommandId,
  intl,
  keymapState,
  platform,
  registeredCommands,
  setCaptureState,
  setErrorByCommandId,
  setKeybindingMutation,
  visibleCommands,
}: {
  allCommands: CommandWithTitle[];
  captureState: CaptureState | null;
  errorByCommandId: ErrorByCommandId;
  intl: IntlLike;
  keymapState: KeymapState;
  platform: string;
  registeredCommands: CommandMenuStackByScope;
  setCaptureState: React.Dispatch<React.SetStateAction<CaptureState | null>>;
  setErrorByCommandId: React.Dispatch<React.SetStateAction<ErrorByCommandId>>;
  setKeybindingMutation: MutationLike;
  visibleCommands: CommandWithTitle[];
}) {
  return (
    <table className="w-full table-fixed border-collapse text-sm">
      <colgroup>
        <col />
        <col className="w-64" />
        <col className="w-32" />
      </colgroup>
      <thead className="text-left text-token-text-tertiary">
        <tr className="border-b border-token-border">
          <th className="px-4 py-2 font-medium">
            <FormattedMessage
              id="settings.keyboardShortcuts.table.command"
              defaultMessage="Command"
              description="Column heading for keyboard shortcut commands"
            />
          </th>
          <th className="px-4 py-2 font-medium">
            <FormattedMessage
              id="settings.keyboardShortcuts.table.keybinding"
              defaultMessage="Keybinding"
              description="Column heading for keyboard shortcut keybindings"
            />
          </th>
          <th className="px-4 py-2">
            <span className="sr-only">
              <FormattedMessage
                id="settings.keyboardShortcuts.table.actions"
                defaultMessage="Actions"
                description="Accessible heading for keyboard shortcut row actions"
              />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {visibleCommands.length === 0 ? (
          <tr>
            <td className="px-4 py-3 text-token-text-secondary" colSpan={3}>
              <FormattedMessage
                id="settings.keyboardShortcuts.noMatches"
                defaultMessage="No matching shortcuts"
                description="Empty state shown when the keyboard shortcuts search has no matches"
              />
            </td>
          </tr>
        ) : null}
        {visibleCommands.map(({ command, title }, rowIndex) => {
          const description = getKeyboardShortcutCommandCopy(
            command,
            intl,
            getTopCommandMenuItem(registeredCommands, command.id) as never,
          ).description;
          const shortcutEntries = getCommandKeybindingOptions(
            command.id,
            keymapState,
            platform,
          );
          const hasCustomBinding = keymapState.bindings.some(
            (binding) => binding.command === command.id,
          );
          const resetShortcutIndex = getResetShortcutIndex({
            commandId: command.id,
            hasCustomBinding,
            platform,
            shortcutEntries,
          });
          const isAppending =
            captureState?.commandId === command.id &&
            captureState.mode === "append";
          const rowEntries =
            shortcutEntries.length === 0 ? [null] : shortcutEntries;
          const renderedEntries =
            isAppending && shortcutEntries.length > 0
              ? [...shortcutEntries, null]
              : rowEntries;
          return (
            <React.Fragment key={command.id}>
              {renderedEntries.map((entry, entryIndex) => {
                const firstRow = entryIndex === 0;
                const cellClassName = keyboardShortcutCellClassName(
                  renderedEntries.length,
                  entryIndex,
                );
                const isCapturing =
                  captureState?.commandId === command.id &&
                  (captureState.mode === "append"
                    ? entry == null && entryIndex === shortcutEntries.length
                    : captureState.accelerator ===
                      (entry?.accelerator ?? null));
                return (
                  <tr
                    key={`${command.id}-${entry?.accelerator ?? "unassigned"}`}
                    className={
                      firstRow && rowIndex > 0
                        ? "group border-t border-token-border align-middle"
                        : "group align-middle"
                    }
                  >
                    <td className={cellClassName}>
                      {firstRow ? (
                        <>
                          <span className="block truncate text-token-text-primary">
                            {title}
                          </span>
                          {description === "" ? null : (
                            <Tooltip
                              openWhen="trigger-overflows"
                              tooltipContent={description}
                            >
                              <span className="mt-0.5 block truncate text-xs text-token-text-secondary">
                                {description}
                              </span>
                            </Tooltip>
                          )}
                          {errorByCommandId[command.id] == null ? null : (
                            <span className="mt-0.5 block text-xs text-token-error-foreground">
                              {errorByCommandId[command.id]}
                            </span>
                          )}
                        </>
                      ) : null}
                    </td>
                    <td
                      className={cellClassName}
                      colSpan={isCapturing ? 2 : undefined}
                    >
                      {isCapturing && captureState != null ? (
                        <ShortcutCaptureInput
                          allowsBareModifiers={allowsBareModifierGlobalShortcut(
                            command,
                          )}
                          allowsSequences={command.kind === "webview"}
                          commandTitle={title}
                          conflictingCommandTitle={
                            captureState.conflictingCommandTitle
                          }
                          onCancel={() => {
                            setCaptureState(null);
                          }}
                          onCapture={(accelerator) => {
                            if (
                              entry != null &&
                              areEquivalentAccelerators(
                                entry.accelerator,
                                accelerator,
                                platform === "macOS",
                              )
                            ) {
                              setCaptureState(null);
                              return;
                            }
                            const conflictingCommandTitle =
                              findConflictingCommandTitle({
                                accelerator,
                                allCommands,
                                commandId: command.id,
                                intl,
                                keymapState,
                                platform,
                                registeredCommands,
                              });
                            if (conflictingCommandTitle != null) {
                              setCaptureState((current) =>
                                current?.commandId === command.id
                                  ? { ...current, conflictingCommandTitle }
                                  : current,
                              );
                              return;
                            }
                            const update =
                              captureState.mode === "append"
                                ? { type: "append" as const, accelerator }
                                : entry == null
                                  ? { type: "set" as const, accelerator }
                                  : {
                                      type: "replace" as const,
                                      previousAccelerator: entry.accelerator,
                                      accelerator,
                                    };
                            updateCommandKeybinding({
                              commandId: command.id,
                              intl,
                              setCommandKeybinding: setKeybindingMutation,
                              setErrorByCommandId,
                              update,
                            }).finally(() => {
                              setCaptureState((current) =>
                                current === captureState ? null : current,
                              );
                            });
                          }}
                        />
                      ) : (
                        <div className="flex items-center gap-1">
                          <ShortcutLabel shortcutLabel={entry?.label ?? null} />
                          <StartCaptureButton
                            canAppend={
                              !allowsBareModifierGlobalShortcut(command)
                            }
                            commandTitle={title}
                            hasShortcut={entry != null}
                            isPending={setKeybindingMutation.isPending}
                            onStartCapture={(mode) => {
                              setErrorByCommandId((current) => ({
                                ...current,
                                [command.id]: undefined,
                              }));
                              setCaptureState({
                                commandId: command.id,
                                accelerator:
                                  mode === "append"
                                    ? null
                                    : (entry?.accelerator ?? null),
                                conflictingCommandTitle: null,
                                mode,
                              });
                            }}
                          />
                        </div>
                      )}
                    </td>
                    {isCapturing ? null : (
                      <td className={cellClassName}>
                        <ShortcutRowActions
                          commandTitle={title}
                          hasCustomBinding={hasCustomBinding}
                          hasShortcut={entry != null}
                          isPending={setKeybindingMutation.isPending}
                          showReset={entryIndex === resetShortcutIndex}
                          onClear={() => {
                            if (entry == null) return;
                            void updateCommandKeybinding({
                              commandId: command.id,
                              intl,
                              setCommandKeybinding: setKeybindingMutation,
                              setErrorByCommandId,
                              update: {
                                type: "remove",
                                accelerator: entry.accelerator,
                              },
                            });
                          }}
                          onReset={() => {
                            void updateCommandKeybinding({
                              commandId: command.id,
                              intl,
                              setCommandKeybinding: setKeybindingMutation,
                              setErrorByCommandId,
                              update: { type: "reset" },
                            });
                          }}
                        />
                      </td>
                    )}
                  </tr>
                );
              })}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
