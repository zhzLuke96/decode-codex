// Restored from ref/webview/assets/use-hotkey-D1ZoA2rx.js
// Keyboard accelerator matching and hotkey subscription hook.
import * as React from "react";
import {
  initElectronMenuShortcutsChunk,
  KEYBINDING_LABEL_DEBOUNCE_MS,
  isMacOSPlatform,
  splitAcceleratorSequence,
} from "./electron-menu-shortcuts";
import {
  initKeyboardLayoutMapChunk,
  resolveKeyboardLayoutKey,
} from "./keyboard-layout-map";
type ParsedAcceleratorChord = {
  key: string;
  requireAlt: boolean;
  requireCtrl: boolean;
  requireMeta: boolean;
  requireShift: boolean;
};
type UseHotkeyOptions = {
  accelerator: string;
  allowRepeat?: boolean;
  capture?: boolean;
  enabled?: boolean;
  ignoreWithin?: string;
  keyboardEventTarget?: EventTarget | null;
  onKeyDown: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
};
const SHORTCUT_CAPTURE_SELECTOR = "[data-codex-shortcut-capture]";
const TEXT_INPUT_SELECTOR =
  "input,textarea,select,[contenteditable='true'],[data-codex-composer],[data-codex-terminal]";
function parseAcceleratorChord(
  acceleratorChord: string,
  isMacOS: boolean,
): ParsedAcceleratorChord {
  const parts = acceleratorChord.split("+").filter(Boolean);
  let key: string | null = null;
  let requireCtrl = false;
  let requireMeta = false;
  let requireAlt = false;
  let requireShift = false;
  for (const part of parts) {
    switch (part) {
      case "CmdOrCtrl":
        if (isMacOS) requireMeta = true;
        else requireCtrl = true;
        break;
      case "Command":
      case "Cmd":
        requireMeta = true;
        break;
      case "Control":
      case "Ctrl":
        requireCtrl = true;
        break;
      case "Alt":
      case "Option":
        requireAlt = true;
        break;
      case "Shift":
        requireShift = true;
        break;
      default:
        key = part.toLowerCase();
        break;
    }
  }
  return {
    key: normalizeAcceleratorKey(key ?? ""),
    requireAlt,
    requireCtrl,
    requireMeta,
    requireShift,
  };
}
function normalizeAcceleratorKey(key: string) {
  switch (key) {
    case "esc":
    case "escape":
      return "escape";
    case "up":
    case "arrowup":
      return "arrowup";
    case "down":
    case "arrowdown":
      return "arrowdown";
    case "left":
    case "arrowleft":
      return "arrowleft";
    case "right":
    case "arrowright":
      return "arrowright";
    case "space":
      return " ";
    case "plus":
      return "+";
    default:
      return key;
  }
}
function eventTargetMatchesSelector(event: KeyboardEvent, selector: string) {
  return (
    typeof Element !== "undefined" &&
    event.target instanceof Element &&
    event.target.closest(selector) != null
  );
}
function eventKeyMatchesChord(
  event: KeyboardEvent,
  chord: ParsedAcceleratorChord,
) {
  return (
    resolveKeyboardLayoutKey(event).toLowerCase() === chord.key ||
    (chord.key === "=" && chord.requireShift && event.key === "+")
  );
}
function keyboardEventMatchesChord(
  event: KeyboardEvent,
  chord: ParsedAcceleratorChord,
) {
  return !(
    !chord.key ||
    !eventKeyMatchesChord(event, chord) ||
    event.ctrlKey !== chord.requireCtrl ||
    event.metaKey !== chord.requireMeta ||
    event.altKey !== chord.requireAlt ||
    event.shiftKey !== chord.requireShift
  );
}
function keyboardEventMatchesAccelerator(
  event: KeyboardEvent,
  accelerator: string,
) {
  const acceleratorChords = splitAcceleratorSequence(accelerator);
  const firstChord = acceleratorChords[0];
  return firstChord == null || acceleratorChords.length !== 1
    ? false
    : keyboardEventMatchesChord(
        event,
        parseAcceleratorChord(firstChord, isMacOSPlatform()),
      );
}
function chordRequiresModifier(chord: ParsedAcceleratorChord) {
  return chord.requireCtrl || chord.requireMeta || chord.requireAlt;
}
function useHotkey({
  accelerator,
  allowRepeat = false,
  enabled = true,
  onKeyDown,
  onKeyUp,
  capture = true,
  ignoreWithin,
  keyboardEventTarget,
}: UseHotkeyOptions) {
  const parsedChords = React.useMemo(() => {
    const isMacOS = isMacOSPlatform();
    return splitAcceleratorSequence(accelerator).map((item) =>
      parseAcceleratorChord(item, isMacOS),
    );
  }, [accelerator]);
  const isSequence = parsedChords.length > 1;
  const keyDownActiveRef = React.useRef(false);
  const activeChordRef = React.useRef<ParsedAcceleratorChord | null>(null);
  const sequenceIndexRef = React.useRef(0);
  const sequenceResetTimeoutRef = React.useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const hasKeyUpHandler = onKeyUp != null;
  const resetSequence = React.useCallback(() => {
    sequenceIndexRef.current = 0;
    if (sequenceResetTimeoutRef.current != null) {
      clearTimeout(sequenceResetTimeoutRef.current);
      sequenceResetTimeoutRef.current = null;
    }
  }, []);
  const clearPressedState = React.useCallback(() => {
    keyDownActiveRef.current = false;
    activeChordRef.current = null;
    resetSequence();
  }, [resetSequence]);
  const scheduleSequenceReset = React.useCallback(() => {
    if (sequenceResetTimeoutRef.current != null) {
      clearTimeout(sequenceResetTimeoutRef.current);
    }
    sequenceResetTimeoutRef.current = setTimeout(
      resetSequence,
      KEYBINDING_LABEL_DEBOUNCE_MS,
    );
  }, [resetSequence]);
  const handleKeyDown = React.useEffectEvent((event: KeyboardEvent) => {
    if (
      !enabled ||
      (!allowRepeat && event.repeat) ||
      eventTargetMatchesSelector(event, SHORTCUT_CAPTURE_SELECTOR) ||
      (ignoreWithin != null && eventTargetMatchesSelector(event, ignoreWithin))
    ) {
      return;
    }
    const currentChord = parsedChords[sequenceIndexRef.current];
    if (
      currentChord == null ||
      (eventTargetMatchesSelector(event, TEXT_INPUT_SELECTOR) &&
        (isSequence || !chordRequiresModifier(currentChord)))
    ) {
      return;
    }
    if (!keyboardEventMatchesChord(event, currentChord)) {
      if (!isSequence) return;
      resetSequence();
      const firstChord = parsedChords[0];
      if (firstChord == null || !keyboardEventMatchesChord(event, firstChord)) {
        return;
      }
    }
    if (!isSequence) {
      keyDownActiveRef.current = true;
      activeChordRef.current = currentChord;
      onKeyDown(event);
      return;
    }
    event.preventDefault();
    sequenceIndexRef.current += 1;
    if (sequenceIndexRef.current < parsedChords.length) {
      scheduleSequenceReset();
      return;
    }
    keyDownActiveRef.current = true;
    activeChordRef.current = parsedChords[parsedChords.length - 1] ?? null;
    resetSequence();
    onKeyDown(event);
  });
  const handleKeyUp = React.useEffectEvent((event: KeyboardEvent) => {
    if (!keyDownActiveRef.current) return;
    const activeChord = activeChordRef.current;
    if (activeChord != null && eventKeyMatchesChord(event, activeChord)) {
      keyDownActiveRef.current = false;
      activeChordRef.current = null;
      onKeyUp?.(event);
    }
  });
  React.useEffect(() => {
    if (!enabled) {
      clearPressedState();
      return;
    }
    const eventTarget =
      keyboardEventTarget ?? (typeof window > "u" ? null : window);
    if (eventTarget == null) {
      clearPressedState();
      return;
    }
    eventTarget.addEventListener("keydown", handleKeyDown, {
      capture,
    });
    if (hasKeyUpHandler) {
      eventTarget.addEventListener("keyup", handleKeyUp, {
        capture,
      });
    }
    return () => {
      eventTarget.removeEventListener("keydown", handleKeyDown, {
        capture,
      });
      if (hasKeyUpHandler) {
        eventTarget.removeEventListener("keyup", handleKeyUp, {
          capture,
        });
      }
      clearPressedState();
    };
  }, [
    accelerator,
    capture,
    clearPressedState,
    enabled,
    handleKeyDown,
    handleKeyUp,
    hasKeyUpHandler,
    keyboardEventTarget,
  ]);
}
function initUseHotkeyChunk(): void {
  initElectronMenuShortcutsChunk();
  initKeyboardLayoutMapChunk();
}

export { useHotkey, keyboardEventMatchesAccelerator, initUseHotkeyChunk };
