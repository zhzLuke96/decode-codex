// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public entry point for sending a composer message; delegates to the
// (non-exported) start-turn implementation, returning the started turn id.
import { startComposerTurn } from "../boundaries/onboarding-commons-externals.facade";

export interface SendComposerMessageArgs {
  scope: unknown;
  manager: unknown;
  hostId: string;
  context: unknown;
  targetConversationId: string;
  cwd: string;
  agentMode: unknown;
  permissionProfileId: string | null;
  serviceTier: unknown;
  shouldSendPermissionOverrides: boolean;
  activeCollaborationMode: unknown;
  restoreMessage?: unknown;
}

export function sendComposerMessage(
  args: SendComposerMessageArgs,
): Promise<string> {
  return startComposerTurn(args);
}
