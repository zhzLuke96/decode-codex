// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types and constants for thread handoff handlers.

import type { HandoffHostConfig } from "./available-handoff-hosts";
import type { buildInitialHandoffProgress } from "./thread-handoff-progress";

export const CROSS_HOST_HANDOFF_FEATURE_GATE = "2256010998";
export const HANDOFF_OPERATION_SOURCE = "local_remote_dropdown";

export type AppScope = {
  get: (...args: unknown[]) => any;
  set: (...args: unknown[]) => void;
};

export type AppServerConversation = {
  cwd?: string | null;
  title?: string | null;
  rolloutPath: string;
  [key: string]: unknown;
};

export type AppServerManager = {
  getHostId(): string;
  getConversation(conversationId: string): AppServerConversation | null;
};

export type AppServerRegistry = {
  getMaybeForConversationId(conversationId: string): AppServerManager | null;
  getDefault(): AppServerManager;
};

export type ToolResult = {
  contentItems: { type: string; text: string }[];
  success: boolean;
};

export type HandoffContext = {
  operationId: string;
  scope: AppScope;
  queryClient: unknown;
  threadId: string;
  threadTitle: string;
  conversation: AppServerConversation;
  manager: AppServerManager;
  hostConfig: HandoffHostConfig;
  cwd: string;
  gitRoot: string;
  currentBranch: string | null;
};

export type MoveThreadResult =
  | { status: "success"; conversationId: string }
  | { status: "error"; message: string; execOutput?: unknown };

export type HandoffPlan = {
  destinationHostId: string;
  progress: ReturnType<typeof buildInitialHandoffProgress>;
  run: () => Promise<MoveThreadResult>;
};

export type HandleHandoffThreadOptions = {
  scope: AppScope;
  appServerRegistry: AppServerRegistry;
  argumentsValue: unknown;
  callId: string;
  callingThreadId: string | null;
  crossHostHandoffEnabled?: boolean;
  queryClient: unknown;
};
