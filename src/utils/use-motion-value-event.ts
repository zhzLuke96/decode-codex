// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Framer Motion's useMotionValueEvent helper: subscribe during insertion
// effects so style-bound motion values see updates before layout effects run.
import React from "react";
import type { MotionValue } from "./use-transform";

function useMotionValueEvent<T>(
  motionValue: MotionValue<T>,
  eventName: string,
  handler: (latest: T) => void,
): void {
  React.useInsertionEffect(
    () => motionValue.on(eventName, handler),
    [motionValue, eventName, handler],
  );
}

export { useMotionValueEvent };
