// Restored from ref/webview/assets/keyboard-shortcuts-settings-BuLGCo4B.js
import React from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { vscodeApiN as callCodexVscodeApi } from "../../boundaries/vscode-api";
import { Button } from "../../ui/button";
import { formatAccelerator } from "../../utils/electron-menu-shortcuts";
import {
  keyboardEventAccelerator,
  pressedModifierAccelerator,
  releasedModifierAccelerator,
} from "../../utils/keyboard-event-accelerator";
import { usePlatform } from "../../utils/use-platform";
import { preventDefault } from "./keyboard-shortcuts-utils";
import { KEYBINDING_LABEL_DEBOUNCE_MS } from "./types";

export function ShortcutCaptureInput({
  allowsBareModifiers,
  allowsSequences,
  commandTitle,
  conflictingCommandTitle,
  onCancel,
  onCapture,
}: {
  allowsBareModifiers: boolean;
  allowsSequences: boolean;
  commandTitle: string;
  conflictingCommandTitle: string | null;
  onCancel(): void;
  onCapture(accelerator: string): void;
}) {
  const intl = useIntl();
  const { platform } = usePlatform();
  const captureGenerationRef = React.useRef(0);
  const pressedModifierRef = React.useRef<string | null>(null);
  const pendingSequenceRef = React.useRef<string | null>(null);
  const sequenceTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const [prompt, setPrompt] = React.useState<string | null>(null);

  const clearPendingSequence = React.useCallback(() => {
    if (sequenceTimeoutRef.current != null) {
      clearTimeout(sequenceTimeoutRef.current);
      sequenceTimeoutRef.current = null;
    }
    pendingSequenceRef.current = null;
    setPrompt(null);
  }, []);
  const completeCapture = React.useCallback(
    (accelerator: string) => {
      captureGenerationRef.current += 1;
      pressedModifierRef.current = null;
      clearPendingSequence();
      onCapture(accelerator);
    },
    [clearPendingSequence, onCapture],
  );
  const cancelCapture = React.useCallback(() => {
    captureGenerationRef.current += 1;
    pressedModifierRef.current = null;
    clearPendingSequence();
    onCancel();
  }, [clearPendingSequence, onCancel]);
  const captureAccelerator = React.useCallback(
    (accelerator: string) => {
      const pendingSequence = pendingSequenceRef.current;
      if (pendingSequence != null) {
        completeCapture(`${pendingSequence} ${accelerator}`);
        return;
      }
      if (!allowsSequences || accelerator.includes("+")) {
        completeCapture(accelerator);
        return;
      }
      pendingSequenceRef.current = accelerator;
      setPrompt(
        `${formatAccelerator(
          accelerator,
          platform === "macOS",
          platform === "linux",
        )} ...`,
      );
      sequenceTimeoutRef.current = setTimeout(() => {
        if (pendingSequenceRef.current === accelerator) {
          completeCapture(accelerator);
        }
      }, KEYBINDING_LABEL_DEBOUNCE_MS);
    },
    [allowsSequences, completeCapture, platform],
  );

  React.useEffect(() => {
    if (!allowsBareModifiers || platform !== "macOS") return undefined;
    captureGenerationRef.current += 1;
    const generation = captureGenerationRef.current;
    void callCodexVscodeApi("global-dictation-capture-fn-hotkey").then(
      ({ hotkey }: { hotkey?: string | null }) => {
        if (hotkey != null && captureGenerationRef.current === generation) {
          completeCapture(hotkey);
        }
      },
      () => undefined,
    );
    return () => {
      captureGenerationRef.current += 1;
      pressedModifierRef.current = null;
      clearPendingSequence();
    };
  }, [allowsBareModifiers, clearPendingSequence, completeCapture, platform]);
  React.useEffect(
    () => () => {
      if (sequenceTimeoutRef.current != null) {
        clearTimeout(sequenceTimeoutRef.current);
      }
      pendingSequenceRef.current = null;
    },
    [],
  );

  const displayValue =
    prompt ??
    intl.formatMessage({
      id: "settings.keyboardShortcuts.capturePrompt",
      defaultMessage: "Press shortcut",
      description:
        "Prompt shown while capturing a keyboard shortcut for a command",
    });
  const ariaLabel = intl.formatMessage(
    {
      id: "settings.keyboardShortcuts.captureAriaLabel",
      defaultMessage: "Shortcut capture for {commandTitle}",
      description: "Aria label for the shortcut capture input for a command",
    },
    { commandTitle },
  );

  return (
    <div className="flex w-full flex-col items-start gap-1">
      <div className="flex items-center gap-2">
        <input
          data-codex-shortcut-capture
          autoFocus
          readOnly
          value={displayValue}
          onBlur={cancelCapture}
          onKeyDown={(event) => {
            if (event.repeat) return;
            event.preventDefault();
            event.stopPropagation();
            if (event.key === "Escape") {
              cancelCapture();
              return;
            }
            if (allowsBareModifiers) {
              const modifier = pressedModifierAccelerator(event.nativeEvent);
              if (modifier != null) {
                pressedModifierRef.current = modifier;
                return;
              }
            }
            const accelerator = keyboardEventAccelerator(event.nativeEvent);
            if (accelerator != null) captureAccelerator(accelerator);
          }}
          onKeyUp={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (!allowsBareModifiers) return;
            const modifier = releasedModifierAccelerator(event.nativeEvent);
            if (modifier != null && pressedModifierRef.current === modifier) {
              completeCapture(modifier);
            }
          }}
          aria-label={ariaLabel}
          className="h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none"
        />
        <Button
          color="ghost"
          size="toolbar"
          onMouseDown={preventDefault}
          onClick={onCancel}
        >
          <FormattedMessage
            id="settings.keyboardShortcuts.captureCancel"
            defaultMessage="Cancel"
            description="Button label to cancel shortcut capture"
          />
        </Button>
      </div>
      {conflictingCommandTitle == null ? null : (
        <span className="text-xs text-token-editor-warning-foreground">
          <FormattedMessage
            id="settings.keyboardShortcuts.captureConflict"
            defaultMessage="Used by {commandTitle}"
            description="Warning shown while capturing a shortcut that is already used by another command"
            values={{ commandTitle: conflictingCommandTitle }}
          />
        </span>
      )}
    </div>
  );
}
