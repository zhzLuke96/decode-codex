// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Custom xterm.js key-event handler: intercepts new-tab, copy/paste and
// macOS-style cursor shortcuts before they reach the PTY, translating them into
// clipboard operations or raw control sequences sent to the shell.

const CURSOR_TO_LINE_START = "\x01";
const CURSOR_TO_LINE_END = "\x05";
const DELETE_TO_LINE_END = "\v";
const DELETE_TO_LINE_START = "\x15";

type TerminalClipboard = {
  readText(): Promise<string>;
  writeText(text: string): Promise<void>;
};

type TerminalKeyEventTerm = {
  hasSelection(): boolean;
  getSelection(): string;
  paste(text: string): void;
};

export type TerminalKeyEventHandlerOptions = {
  clipboard: TerminalClipboard | undefined;
  event: KeyboardEvent;
  onNewTerminalTab: (() => void) | null | undefined;
  pasteOnCtrlV?: boolean;
  sendText: (text: string) => void;
  term: TerminalKeyEventTerm;
};

export function handleTerminalKeyEvent({
  clipboard,
  event,
  onNewTerminalTab,
  pasteOnCtrlV = false,
  sendText,
  term,
}: TerminalKeyEventHandlerOptions): boolean {
  if (event.type !== "keydown") {
    return true;
  }
  if (onNewTerminalTab != null && isMetaShortcut(event, ["t"])) {
    suppressEvent(event);
    onNewTerminalTab();
    return false;
  }
  if (clipboard != null) {
    if (isCopyShortcut(event, term.hasSelection())) {
      suppressEvent(event);
      const selection = term.getSelection();
      if (selection.length > 0) {
        clipboard.writeText(selection).catch(() => undefined);
      }
      return false;
    }
    if (isPasteShortcut(event, pasteOnCtrlV)) {
      suppressEvent(event);
      clipboard
        .readText()
        .then((value) => {
          if (value.length > 0) {
            term.paste(value);
          }
        })
        .catch(() => undefined);
      return false;
    }
  }
  const controlSequence = resolveCursorControlSequence(event);
  if (controlSequence == null) {
    return true;
  }
  suppressEvent(event);
  sendText(controlSequence);
  return false;
}

function suppressEvent(event: KeyboardEvent): void {
  event.preventDefault();
  event.stopPropagation();
}

function isCopyShortcut(event: KeyboardEvent, hasSelection: boolean): boolean {
  return (
    (hasSelection && isCtrlKey(event, "c")) ||
    isCtrlShiftKey(event, "c") ||
    isInsertCombo(event, { ctrlKey: true, shiftKey: false })
  );
}

function isPasteShortcut(event: KeyboardEvent, pasteOnCtrlV: boolean): boolean {
  return (
    (pasteOnCtrlV && isCtrlKey(event, "v")) ||
    isCtrlShiftKey(event, "v") ||
    isInsertCombo(event, { ctrlKey: false, shiftKey: true })
  );
}

function resolveCursorControlSequence(event: KeyboardEvent): string | null {
  if (isMetaShortcut(event, ["ArrowLeft", "ArrowUp"])) {
    return CURSOR_TO_LINE_START;
  }
  if (isMetaShortcut(event, ["ArrowRight", "ArrowDown"])) {
    return CURSOR_TO_LINE_END;
  }
  if (isMetaShortcut(event, ["Backspace"])) {
    return DELETE_TO_LINE_START;
  }
  if (isMetaShortcut(event, ["Delete"])) {
    return DELETE_TO_LINE_END;
  }
  return null;
}

function isCtrlShiftKey(event: KeyboardEvent, key: string): boolean {
  return (
    event.ctrlKey &&
    event.shiftKey &&
    !event.altKey &&
    !event.metaKey &&
    event.key.toLowerCase() === key
  );
}

function isCtrlKey(event: KeyboardEvent, key: string): boolean {
  return (
    event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    !event.metaKey &&
    event.key.toLowerCase() === key
  );
}

function isInsertCombo(
  event: KeyboardEvent,
  modifiers: { ctrlKey: boolean; shiftKey: boolean },
): boolean {
  return (
    event.ctrlKey === modifiers.ctrlKey &&
    event.shiftKey === modifiers.shiftKey &&
    !event.altKey &&
    !event.metaKey &&
    event.key.toLowerCase() === "insert"
  );
}

function isMetaShortcut(
  event: KeyboardEvent,
  keys: readonly string[],
): boolean {
  return (
    event.metaKey &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    keys.includes(event.key)
  );
}
