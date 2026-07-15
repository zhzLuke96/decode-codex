// Restored from ref/webview/assets/keyboard-event-accelerator-DMT_0ZVa.js
// Also matches ref/webview/assets/keyboard-event-accelerator-AI-jxMPG.js.
// Also matches ref/webview/assets/keyboard-event-accelerator-Bfs2Rziw.js.
// Current Bfs2Rziw source rechecked against modifier and key accelerator formatting.
import { once } from "../runtime/commonjs-interop";
import { resolveKeyboardLayoutKey } from "./keyboard-layout-map";
type KeyboardLikeEvent = {
  altKey: boolean;
  code?: string | null;
  ctrlKey: boolean;
  key: string;
  location: number;
  metaKey: boolean;
  shiftKey: boolean;
};
type ModifierPhase = "pressed" | "released";
const MODIFIER_KEYS = new Set(["Meta", "Control", "Alt", "AltGraph", "Shift"]);
const DOM_KEY_LOCATION_LEFT = 1;
const DOM_KEY_LOCATION_RIGHT = 2;
const KEY_LABELS = new Map([
  ["Escape", "Esc"],
  ["ArrowUp", "Up"],
  ["ArrowDown", "Down"],
  ["ArrowLeft", "Left"],
  ["ArrowRight", "Right"],
]);
export const initKeyboardEventAcceleratorChunk = once(() => {});
export function pressedModifierAccelerator(event: KeyboardLikeEvent) {
  return modifierAccelerator(event, "pressed");
}
export function releasedModifierAccelerator(event: KeyboardLikeEvent) {
  return modifierAccelerator(event, "released");
}
export function keyboardEventAccelerator(event: KeyboardLikeEvent) {
  const key = acceleratorKey(event);
  if (key == null) {
    return null;
  }
  const parts: string[] = [];
  if (event.ctrlKey) parts.push("Ctrl");
  if (event.metaKey) parts.push("Command");
  if (event.altKey) parts.push("Alt");
  if (event.shiftKey) parts.push("Shift");
  parts.push(key);
  return parts.join("+");
}
function modifierAccelerator(event: KeyboardLikeEvent, phase: ModifierPhase) {
  if (event.key.toLowerCase() === "fn") {
    return "Fn";
  }
  const side =
    event.location === DOM_KEY_LOCATION_LEFT
      ? "Left"
      : event.location === DOM_KEY_LOCATION_RIGHT
        ? "Right"
        : null;
  if (side == null) {
    return null;
  }
  switch (event.key) {
    case "Alt":
      return phase === "released" ||
        (event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey)
        ? `${side}Option`
        : null;
    case "Meta":
      return phase === "released" ||
        (event.metaKey && !event.ctrlKey && !event.altKey && !event.shiftKey)
        ? `${side}Command`
        : null;
    case "Control":
      return side === "Left" &&
        (phase === "released" ||
          (event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey))
        ? "LeftControl"
        : null;
    default:
      return null;
  }
}
function acceleratorKey(event: KeyboardLikeEvent) {
  const key = resolveKeyboardLayoutKey(event);
  if (MODIFIER_KEYS.has(key)) {
    return null;
  }
  if (key === " ") {
    return "Space";
  }
  if (key === "+") {
    return "Plus";
  }
  return (
    KEY_LABELS.get(key) ??
    (/^f\d{1,2}$/i.test(key)
      ? key.toUpperCase()
      : key.toLowerCase() === "fn"
        ? "Fn"
        : key.length === 1
          ? key.toUpperCase()
          : (keyFromCode(event.code) ?? key))
  );
}
function keyFromCode(code?: string | null) {
  return code == null
    ? null
    : /^Key[A-Z]$/.test(code)
      ? code.slice(3)
      : /^Digit[0-9]$/.test(code)
        ? code.slice(5)
        : code === "Space"
          ? "Space"
          : null;
}
