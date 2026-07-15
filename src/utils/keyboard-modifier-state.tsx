// Restored from ref/webview/assets/keyboard-modifier-state-BqolqSr9.js
import { _appScopeC, _appScopeG, _appScopeT } from "../boundaries/app-scope";
type SignalStore = {
  set(signal: unknown, value: boolean): void;
};
type ModifierSnapshot = {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
};
const altKeySignal = _appScopeG(_appScopeT, false);
const ctrlKeySignal = _appScopeG(_appScopeT, false);
const metaKeySignal = _appScopeG(_appScopeT, false);
const shiftKeySignal = _appScopeG(_appScopeT, false);
const commandModifierActiveSignal = _appScopeC(
  _appScopeT,
  ({ get }) => get(metaKeySignal) || get(ctrlKeySignal),
);
function resetKeyboardModifierState(store: SignalStore) {
  store.set(altKeySignal, false);
  store.set(ctrlKeySignal, false);
  store.set(metaKeySignal, false);
  store.set(shiftKeySignal, false);
}
function updateKeyboardModifierState(
  store: SignalStore,
  { altKey, ctrlKey, metaKey, shiftKey }: ModifierSnapshot,
) {
  store.set(altKeySignal, altKey);
  store.set(ctrlKeySignal, ctrlKey);
  store.set(metaKeySignal, metaKey);
  store.set(shiftKeySignal, shiftKey);
}

export {
  updateKeyboardModifierState,
  metaKeySignal,
  altKeySignal,
  commandModifierActiveSignal,
  resetKeyboardModifierState,
};
