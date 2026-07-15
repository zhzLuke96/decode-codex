// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Shared composer interaction state exported by the current app-main aggregator.
import { appScopeX as createAtom } from "../boundaries/app-scope";
import { createPersistedSignal } from "../runtime/persisted-signal";

export type ComposerPromptHistoryState =
  | string[]
  | Record<string, readonly unknown[]>;

export const skipFullAccessConfirmSignal = createPersistedSignal(
  "skip-full-access-confirm",
  false,
);

export const composerPromptHistorySignal =
  createPersistedSignal<ComposerPromptHistoryState>("prompt-history", []);

export const draftCollaborationModeAtom = createAtom<string | null>(null);

export const aboveComposerSuggestionDismissalsAtom = createAtom<
  Record<string, string[]>
>({});

export function initComposerInteractionStateChunk(): void {
  void skipFullAccessConfirmSignal;
  void composerPromptHistorySignal;
  void draftCollaborationModeAtom;
  void aboveComposerSuggestionDismissalsAtom;
}
