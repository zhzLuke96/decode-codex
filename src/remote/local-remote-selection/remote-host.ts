// Restored from ref/webview/assets/local-remote-selection-DRnEOc8g.js
// local-remote-selection-DRnEOc8g chunk restored from the Codex webview bundle.
import type { DraftRemoteHostInput, RemoteHostSelectionInput } from "./types";
export function getEffectiveRemoteHostId({
  attachedRemoteHostId,
  browserRemoteHostId,
  followUpType,
  selectedRemoteProjectHostId,
}: RemoteHostSelectionInput) {
  return (
    attachedRemoteHostId ??
    (followUpType === "local"
      ? null
      : (selectedRemoteProjectHostId ?? browserRemoteHostId))
  );
}
export function shouldUseDraftRemoteHost({
  composerMode,
  draftRemoteHostId,
  followUpType,
  hasStartedBranchConversation,
}: DraftRemoteHostInput) {
  return (
    composerMode === "local" &&
    draftRemoteHostId !== "local" &&
    followUpType !== "local" &&
    (!hasStartedBranchConversation || followUpType === "cloud")
  );
}
