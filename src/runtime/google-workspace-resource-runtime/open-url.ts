// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Opens Google Workspace connector results.

import { sendHostRequest } from "../host-request-runtime";

export function openGoogleWorkspaceUrl(
  href: string,
  intent: "alternate" | "default" = "default",
): void {
  void sendHostRequest("open-external-link", {
    params: {
      disposition: intent === "alternate" ? "new-tab" : undefined,
      href,
      initiator: "mcp_app_resource",
      openTargetIntent: intent,
    },
  }).catch(() => {
    globalThis.open?.(href, "_blank", "noopener,noreferrer");
  });
}
