// Restored from ref/webview/assets/use-stable-callback-BtVbB7Gq.js
// use-stable-callback-BtVbB7Gq chunk restored from the Codex webview bundle.
import React from "react";
type ReactSharedInternals = {
  H?: {
    useState?: unknown;
    useReducer?: unknown;
  };
};
const reactInternals =
  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE as
    | ReactSharedInternals
    | undefined;
if (!reactInternals) {
  throw new Error("Missing react shared internals. Check version.");
}
function isRendering(): boolean {
  const dispatcher = reactInternals.H;
  return dispatcher != null && dispatcher.useState !== dispatcher.useReducer;
}
function throwIfRendering(): void {
  throw new Error(
    "A function wrapped in useStableCallback can't be called during rendering.",
  );
}

export function initUseStableCallback(): void {}

export function useStableCallback<TArgs extends unknown[], TReturn>(
  callback: (...args: TArgs) => TReturn,
): (...args: TArgs) => TReturn {
  const callbackRef = React.useRef(callback);
  React.useInsertionEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return (...args: TArgs): TReturn => {
    if (isRendering()) throwIfRendering();
    return callbackRef.current(...args);
  };
}
