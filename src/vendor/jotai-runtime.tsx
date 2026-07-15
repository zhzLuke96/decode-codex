// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Jotai is a bundled third-party atom state package; keep this boundary as a
// direct npm re-export shim instead of a local compatibility runtime.

import type { ReactNode } from "react";
import type { createStore } from "jotai/vanilla";

export type AtomStore = ReturnType<typeof createStore>;

export {
  atom as createAtom,
  Provider as JotaiProvider,
  useAtom,
  useAtomValue,
  useSetAtom,
  useStore,
} from "jotai";

export type {
  Atom,
  Getter,
  PrimitiveAtom,
  SetStateAction,
  Setter,
  WritableAtom,
} from "jotai";

export type JotaiProviderProps = {
  children?: ReactNode;
  store?: AtomStore;
};

export function initJotaiRuntimeChunk(): void {}
