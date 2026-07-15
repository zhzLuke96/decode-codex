// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Opens the "create remote project" modal by dispatching a host bridge message to local subscribers.
import { hostMessageBridge } from "../runtime/app-main-host-runtime";

export interface OpenRemoteProjectModalOptions {
  hostId?: string;
  setActive?: boolean;
}

export function openRemoteProjectModal({
  hostId,
  setActive,
}: OpenRemoteProjectModalOptions = {}): void {
  hostMessageBridge.dispatchHostMessage({
    type: "open-create-remote-project-modal",
    hostId,
    setActive,
  });
}
