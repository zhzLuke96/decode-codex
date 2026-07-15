// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// React signal-state hooks used by restored app-scope feature modules.
import {
  createAtom,
  initJotaiRuntimeChunk,
  useAtom,
  type Atom,
  type AtomStore,
} from "../vendor/jotai-runtime";

export type SignalStateUpdater<TValue> =
  | TValue
  | ((currentValue: unknown) => unknown);
export type SignalStateSetter<TValue> = (
  nextValue: SignalStateUpdater<TValue>,
) => void;

export function createAtomSignal<TValue>(initialValue: TValue): unknown {
  return createAtom(initialValue);
}

export function initSignalStateRuntime(): void {
  initJotaiRuntimeChunk();
}

export function useSignalState<TValue>(
  signal: unknown,
  options?: { store?: AtomStore },
): [TValue, SignalStateSetter<TValue>] {
  return useAtom(signal as Atom<TValue>, options) as [
    TValue,
    SignalStateSetter<TValue>,
  ];
}
