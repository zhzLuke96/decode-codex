// Restored from ref/webview/assets/use-merged-ref-BRG4-SOQ.js
// use-merged-ref-BRG4-SOQ chunk restored from the Codex webview bundle.
type RefCleanup = () => void;
type RefCallback<T> = (instance: T | null) => void | RefCleanup;
type RefObject<T> = {
  current: T | null;
};
type PossibleRef<T> = RefCallback<T> | RefObject<T> | null | undefined;

export const useMergedRef =
  <T>(...refs: PossibleRef<T>[]): RefCallback<T> =>
  (node: T | null): void | RefCleanup => {
    if (node == null) {
      refs.forEach((ref) => {
        if (typeof ref === "function") ref(null);
        else if (ref) ref.current = null;
      });
      return;
    }

    const cleanups: RefCleanup[] = [];
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        const cleanup = ref(node);
        cleanups.push(
          typeof cleanup === "function" ? cleanup : () => ref(null),
        );
      } else if (ref) {
        ref.current = node;
        cleanups.push(() => {
          ref.current = null;
        });
      }
    });

    if (cleanups.length !== 0) {
      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    }
  };
