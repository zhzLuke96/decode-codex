// Restored from ref/webview/assets/use-autocomplete-overlay-placement-BQMUEWEU.js
// use-autocomplete-overlay-placement-BQMUEWEU chunk restored from the Codex webview bundle.
import React from "react";
export type AutocompleteOverlayPlacement = "top" | "bottom";
export type UseAutocompleteOverlayPlacementOptions = {
  anchorRef: React.RefObject<HTMLElement | null>;
  isActive: boolean;
};
const noopSubscribe = (): void => {};
function getServerSnapshot(): AutocompleteOverlayPlacement {
  return "bottom";
}
function getPlacement(
  anchorElement: HTMLElement | null,
): AutocompleteOverlayPlacement {
  if (typeof window === "undefined" || anchorElement == null) return "bottom";
  const anchorRect = anchorElement.getBoundingClientRect();
  const spaceAbove = anchorRect.top;
  const spaceBelow = window.innerHeight - anchorRect.bottom;
  return spaceBelow < 240 && spaceAbove > spaceBelow ? "top" : "bottom";
}
export function useAutocompleteOverlayPlacement({
  anchorRef,
  isActive,
}: UseAutocompleteOverlayPlacementOptions): AutocompleteOverlayPlacement {
  const subscribe = (onStoreChange: () => void) => {
    if (!isActive || typeof window === "undefined") return noopSubscribe;
    window.addEventListener("resize", onStoreChange);
    window.addEventListener("scroll", onStoreChange, true);
    return () => {
      window.removeEventListener("resize", onStoreChange);
      window.removeEventListener("scroll", onStoreChange, true);
    };
  };
  return React.useSyncExternalStore(
    subscribe,
    () => getPlacement(anchorRef.current),
    getServerSnapshot,
  );
}
