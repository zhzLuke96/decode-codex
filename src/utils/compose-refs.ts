// Restored from ref/webview/assets/app-initial~app-main~settings-page~projects-index-page~notebook-preview-panel~docx-preview-panel-BHOEvyvO.js
// React ref utility used by settings/navigation primitives.
import type { MutableRefObject, Ref } from "react";

export type ComposedRefCallback<T> = (node: T | null) => void | (() => void);
export type PossibleRef<T> = Ref<T> | undefined | null;

function assignRef<T>(ref: PossibleRef<T>, node: T | null): void {
  if (typeof ref === "function") {
    ref(node);
    return;
  }
  if (ref != null) {
    (ref as MutableRefObject<T | null>).current = node;
  }
}

export function composeRefs<T>(
  ...refs: Array<PossibleRef<T>>
): ComposedRefCallback<T> {
  return (node) => {
    if (node == null) {
      for (const ref of refs) assignRef(ref, null);
      return;
    }

    const cleanupCallbacks: Array<() => void> = [];
    for (const ref of refs) {
      if (typeof ref === "function") {
        const cleanup = (ref as ComposedRefCallback<T>)(node);
        cleanupCallbacks.push(
          typeof cleanup === "function" ? cleanup : () => ref(null),
        );
        continue;
      }

      if (ref != null) {
        (ref as MutableRefObject<T | null>).current = node;
        cleanupCallbacks.push(() => {
          (ref as MutableRefObject<T | null>).current = null;
        });
      }
    }

    if (cleanupCallbacks.length === 0) return;
    return () => {
      for (const cleanup of cleanupCallbacks) cleanup();
    };
  };
}

export function initComposeRefsChunk(): void {}
