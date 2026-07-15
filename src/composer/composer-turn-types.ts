// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for composer turn lifecycle helpers.

export interface ComposerScope {
  get(atom: unknown, key?: unknown): any;
}

export interface ConversationManager {
  getHostId(): string;
  requestClient: unknown;
}

export interface StartComposerTurnArgs {
  scope: ComposerScope;
  manager: ConversationManager;
  hostId: string;
  context: any;
  targetConversationId: string;
  cwd: string;
  agentMode: unknown;
  permissionProfileId: string | null;
  serviceTier: unknown;
  shouldSendPermissionOverrides: boolean;
  activeCollaborationMode: unknown;
  restoreMessage?: any;
}

export interface SendRestoreMessageArgs
  extends Omit<StartComposerTurnArgs, "context" | "cwd" | "restoreMessage"> {
  restoreMessage: { cwd: string; context: any };
}
