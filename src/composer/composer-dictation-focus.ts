// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Predicate deciding whether the push-to-talk dictation hotkey should target a composer.
const DICTATION_TEXT_INPUT_SELECTOR =
  "input,textarea,[contenteditable]:not([contenteditable='false' i])";

export type ComposerDictationFocusState = {
  composerInput: HTMLElement;
  focusedElement: HTMLElement | null;
  isActiveComposer: boolean;
};

export function isComposerFocusedForDictation({
  composerInput,
  focusedElement,
  isActiveComposer,
}: ComposerDictationFocusState): boolean {
  return (
    isActiveComposer &&
    (composerInput.contains(focusedElement) ||
      focusedElement?.closest(DICTATION_TEXT_INPUT_SELECTOR) == null)
  );
}

export const isComposerDictationTarget = isComposerFocusedForDictation;
