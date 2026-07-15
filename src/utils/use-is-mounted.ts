// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Returns a stable getter that reports whether the component is still mounted.
// Used to guard async callbacks (e.g. navigating only after an awaited step if
// the component has not unmounted in the meantime).
import { useCallback, useEffect, useRef } from "react";

export function useIsMounted(): () => boolean {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return useCallback(() => mountedRef.current, []);
}
