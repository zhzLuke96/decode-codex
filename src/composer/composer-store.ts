// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Composer store wiring: the React context that carries the rich-text composer
// store, the factory that builds one for a given default text, and the hook that
// reads the ambient Jotai store used by the composer submit flow. The context is
// reconstructed inline; the factory and store hook resolve to the vendored
// worktree new-thread / shared runtime bundles they were code-split from.
import { createContext, type Context } from "react";
import { Ga as createComposerStoreImpl } from "../vendor/worktree-new-thread-orchestrator-current-bundle";
import { useStore as useAmbientJotaiStore } from "../vendor/jotai-runtime";

/**
 * The rich-text (ProseMirror) composer store. Exposes at least the enter-behavior
 * setter used by the home composer; other members are store-internal.
 */
export interface ComposerStore {
  setEnterBehavior(behavior: unknown): void;
  readonly [member: string]: unknown;
}

export interface CreateComposerStoreOptions {
  defaultTextKind?: "plain" | "prompt";
  enableSelectedTextLinks?: boolean;
}

/** Minimal shape of the ambient Jotai store returned by {@link useComposerStore}. */
export interface JotaiStore {
  get(atom: unknown): unknown;
  set(atom: unknown, ...args: unknown[]): unknown;
  sub(atom: unknown, listener: () => void): () => void;
}

/** Context that provides the current composer store to descendant components. */
export const ComposerStoreContext: Context<ComposerStore | null> =
  createContext<ComposerStore | null>(null);

/** Build a composer store seeded with the given default draft text. */
export function createComposerStore(
  defaultText: unknown,
  options?: CreateComposerStoreOptions,
): ComposerStore {
  return createComposerStoreImpl(defaultText, options);
}

/** Read the ambient Jotai store used by the composer submit/state flow. */
export function useComposerStore(): JotaiStore {
  return useAmbientJotaiStore();
}
