// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js
// Pull request prompt actions backed by the restored composer view state.

import { focusComposerInput } from "./focus-composer";
import {
  setPromptText,
  updateComposerViewState,
  type ComposerViewState,
  type ScopeStore,
} from "./composer-view-state";

export function submitPullRequestPrompt(
  scopeStore: ScopeStore,
  promptOrUpdater: string | ((prompt: string) => string),
): void {
  setPromptText(scopeStore, promptOrUpdater);
}

export function updatePullRequestChatContext(
  scopeStore: ScopeStore,
  updater: (state: ComposerViewState) => void,
): void {
  updateComposerViewState(scopeStore, updater);
}

export const focusComposerAfterPullRequestPrompt = focusComposerInput;

export function initPullRequestPromptActionsChunk(): void {}

export function initPullRequestComposerContextChunk(): void {}
