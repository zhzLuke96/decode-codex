// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Window-level event bridge for the review "expand/collapse all diffs" command.
import { useEffect } from "react";

const TOGGLE_ALL_DIFFS_EVENT = "wham-toggle-all-diffs";

type ToggleAllDiffsDetail = {
  open: boolean;
  scope?: string;
};

export function useToggleAllDiffsEvent(
  setOpen: (open: boolean) => void,
  scope?: string,
): (open: boolean) => void {
  useEffect(() => {
    const listener = (event: Event) => {
      const { detail } = event as CustomEvent<ToggleAllDiffsDetail>;
      const eventScope = detail.scope;
      if ((scope && eventScope !== scope) || (!scope && eventScope)) return;
      setOpen(detail.open);
    };

    window.addEventListener(TOGGLE_ALL_DIFFS_EVENT, listener);
    return () => {
      window.removeEventListener(TOGGLE_ALL_DIFFS_EVENT, listener);
    };
  }, [scope, setOpen]);

  return (open) => {
    window.dispatchEvent(
      new CustomEvent<ToggleAllDiffsDetail>(TOGGLE_ALL_DIFFS_EVENT, {
        detail: { open, scope },
      }),
    );
  };
}

export function initToggleAllDiffsEventChunk(): void {}
