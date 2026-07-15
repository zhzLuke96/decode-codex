// Restored from ref/webview/assets/keyboard-shortcuts-settings-BuLGCo4B.js
import React from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import { Tooltip, TooltipShortcut } from "../../ui/tooltip-b";
import { PencilIcon } from "../../icons/pencil-icon";
import { TrashIcon } from "../../icons/trash-icon";
import { UndoIcon } from "../../icons/undo-icon";
import type { CaptureMode } from "./types";

export function ShortcutLabel({
  shortcutLabel,
}: {
  shortcutLabel: string | null;
}) {
  return (
    <span className="flex min-h-8 items-center gap-1 text-token-text-secondary">
      {shortcutLabel == null ? (
        <FormattedMessage
          id="settings.keyboardShortcuts.unassigned"
          defaultMessage="Unassigned"
          description="Label shown when an action has no shortcut"
        />
      ) : (
        <TooltipShortcut
          className="!px-2 !py-1 !text-sm"
          keysLabel={shortcutLabel}
        />
      )}
    </span>
  );
}

export function ShortcutRowActions({
  commandTitle,
  hasCustomBinding,
  hasShortcut,
  isPending,
  showReset,
  onClear,
  onReset,
}: {
  commandTitle: string;
  hasCustomBinding: boolean;
  hasShortcut: boolean;
  isPending: boolean;
  showReset: boolean;
  onClear(): void;
  onReset(): void;
}) {
  const intl = useIntl();
  const clearLabel = intl.formatMessage(
    {
      id: "settings.keyboardShortcuts.clearAriaLabel",
      defaultMessage: "Clear shortcut for {commandTitle}",
      description: "Aria label for clearing a shortcut",
    },
    { commandTitle },
  );
  const resetLabel = intl.formatMessage(
    {
      id: "settings.keyboardShortcuts.resetAriaLabel",
      defaultMessage: "Reset shortcut for {commandTitle}",
      description: "Aria label for resetting a shortcut to its default",
    },
    { commandTitle },
  );
  return (
    <div className="flex items-center justify-end gap-1">
      {hasShortcut ? (
        <Tooltip tooltipContent={clearLabel}>
          <Button
            aria-label={clearLabel}
            className="disabled:!opacity-100"
            color="ghost"
            size="toolbar"
            uniform
            disabled={isPending}
            onClick={onClear}
          >
            <TrashIcon className="icon-xs" />
          </Button>
        </Tooltip>
      ) : null}
      {showReset && hasCustomBinding ? (
        <Tooltip tooltipContent={resetLabel}>
          <Button
            aria-label={resetLabel}
            className="disabled:!opacity-100"
            color="ghost"
            size="toolbar"
            uniform
            disabled={isPending}
            onClick={onReset}
          >
            <UndoIcon className="icon-xs" />
          </Button>
        </Tooltip>
      ) : null}
    </div>
  );
}

export function StartCaptureButton({
  canAppend,
  commandTitle,
  hasShortcut,
  isPending,
  onStartCapture,
}: {
  canAppend: boolean;
  commandTitle: string;
  hasShortcut: boolean;
  isPending: boolean;
  onStartCapture(mode: CaptureMode): void;
}) {
  const intl = useIntl();
  const [shiftAppendPreview, setShiftAppendPreview] = React.useState(false);
  const ariaLabel = !hasShortcut
    ? intl.formatMessage(
        {
          id: "settings.keyboardShortcuts.setAriaLabel",
          defaultMessage: "Set shortcut for {commandTitle}",
          description: "Aria label for setting a shortcut for a command",
        },
        { commandTitle },
      )
    : shiftAppendPreview
      ? intl.formatMessage(
          {
            id: "settings.keyboardShortcuts.createAriaLabel",
            defaultMessage: "Create new shortcut for {commandTitle}",
            description: "Aria label for adding another shortcut for a command",
          },
          { commandTitle },
        )
      : intl.formatMessage(
          {
            id: "settings.keyboardShortcuts.changeAriaLabel",
            defaultMessage: "Change shortcut for {commandTitle}",
            description: "Aria label for changing a shortcut for a command",
          },
          { commandTitle },
        );
  const updateAppendPreview = (event: React.MouseEvent) => {
    setShiftAppendPreview(canAppend && hasShortcut && event.shiftKey);
  };
  return (
    <Tooltip tooltipContent={ariaLabel}>
      <Button
        aria-label={ariaLabel}
        className="opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 disabled:!opacity-0 group-focus-within:disabled:!opacity-40 group-hover:disabled:!opacity-40"
        color="ghost"
        size="toolbar"
        uniform
        disabled={isPending}
        onMouseEnter={updateAppendPreview}
        onMouseMove={updateAppendPreview}
        onMouseLeave={() => {
          setShiftAppendPreview(false);
        }}
        onClick={(event) => {
          onStartCapture(
            hasShortcut
              ? canAppend && event.shiftKey
                ? "append"
                : "replace"
              : "set",
          );
        }}
      >
        <PencilIcon className="icon-xs" />
      </Button>
    </Tooltip>
  );
}
