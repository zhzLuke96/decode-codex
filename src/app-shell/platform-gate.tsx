// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Electron shell build of the platform gate: renders children only when the `electron` flag is set.
import type { ReactNode } from "react";

export interface PlatformGateProps {
  browser?: boolean;
  chromeExtension?: boolean;
  extension?: boolean;
  electron?: boolean;
  children?: ReactNode;
}

export function PlatformGate({
  electron,
  children,
}: PlatformGateProps): JSX.Element | null {
  if (!electron) {
    return null;
  }
  return <>{children}</>;
}
