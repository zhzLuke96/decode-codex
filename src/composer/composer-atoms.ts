// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Composer scope state: the discriminated route value carried by the composer
// scope, the draft-text and active-follow-up scope atoms, the remount-key
// derivation, and the draft-text / draft-thread-id predicates used by the home
// composer. The derived atoms and the (rich-text) prompt predicate resolve to the
// vendored worktree new-thread bundle they were code-split from; the pure route
// helpers are reconstructed inline.
import {
  Zl as composerDraftTextAtomImpl,
  Td as activeFollowUpAtomImpl,
  Fd as getComposerRemountKeyImpl,
  Ru as isPromptDraftTextImpl,
} from "../vendor/worktree-new-thread-query-current-bundle";

/** Opaque handle for a value stored on the composer scope. */
export type ScopeAtom<Value> = {
  readonly __composerScopeAtomValue?: Value;
};

export type ComposerNewEntrypoint = "home" | "panel" | "library-preview";

export interface ComposerImplicitAttachment {
  readonly kind: string;
  readonly [field: string]: unknown;
}

/**
 * Value carried by the composer scope for a given surface. Mirrors the route →
 * scope-value mapping produced when a composer mounts (home/panel/library-preview
 * drafts, an open local conversation, a cloud task, or an unrelated surface).
 */
export type ComposerScopeValue =
  | {
      kind: "new";
      entrypoint: "home";
      clientThreadId: string;
      aeonStartTarget: unknown;
      focusComposerNonce?: number;
      routeConversationId: string | null;
    }
  | {
      kind: "new";
      entrypoint: "panel";
      clientThreadId: string;
      aeonStartTarget: null;
      routeConversationId: string | null;
    }
  | {
      kind: "new";
      entrypoint: "library-preview";
      clientThreadId: string;
      implicitAttachment: ComposerImplicitAttachment;
      aeonStartTarget: null;
      routeConversationId: string | null;
    }
  | {
      kind: "local";
      conversationId: string;
      placement: string;
      routeConversationId: string | null;
    }
  | {
      kind: "cloud";
      taskId: string;
      routeConversationId: string | null;
    }
  | {
      kind: "other";
      routeConversationId: string | null;
    };

export interface CloudTaskAssistantTurn {
  readonly id: string;
  readonly [field: string]: unknown;
}

export interface CloudTaskDetails {
  readonly task: { readonly id: string; readonly [field: string]: unknown };
  readonly current_assistant_turn?: CloudTaskAssistantTurn | null;
  readonly [field: string]: unknown;
}

/** The turn the composer is currently steering/queuing behind, if any. */
export type ActiveFollowUp =
  | { type: "local"; localConversationId: string }
  | {
      type: "cloud";
      hasAppliedCodeLocally: boolean;
      taskDetails: CloudTaskDetails;
      selectedTurnId: string;
      selectedTurn: unknown;
    };

/** Draft prompt text for the current composer scope (`""` when empty). */
export const composerDraftTextAtom: ScopeAtom<string> =
  composerDraftTextAtomImpl;

/** Active follow-up turn for the current composer scope, if any. */
export const activeFollowUpAtom: ScopeAtom<ActiveFollowUp | undefined> =
  activeFollowUpAtomImpl;

/**
 * Stable key that forces the composer to remount when the underlying surface
 * changes (new home/panel draft, a specific local/cloud conversation, etc.).
 */
export function getComposerRemountKey(
  scopeValue: ComposerScopeValue,
): string | undefined {
  return getComposerRemountKeyImpl(scopeValue);
}

/**
 * True when the draft text carries prompt content (rich-text values or embedded
 * composer text links) rather than plain text.
 */
export function isPromptDraftText(value: unknown): boolean {
  return isPromptDraftTextImpl(value);
}

const DRAFT_THREAD_ID_PREFIX = "client-new-thread:";

/** True when a thread id is a client-generated draft id for a not-yet-created thread. */
export function isDraftThreadId(threadId: string): boolean {
  return threadId.startsWith(DRAFT_THREAD_ID_PREFIX);
}
