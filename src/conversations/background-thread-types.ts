// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types and signals for background-thread dynamic tools.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";

export interface BackgroundThreadAppScope {
  get(signal: unknown, key?: string): unknown;
}

export interface BackgroundThreadSummarySource {
  id: string;
  name?: string | null;
  preview: string;
  status: { type: string };
  cwd: string;
  createdAt: number;
  updatedAt: number;
  recencyAt?: number | null;
  branch?: string | null;
}

export interface BackgroundThreadManager {
  getHostId(): string;
  getConversation?(conversationId: string): { hasUnreadTurn?: boolean } | null;
  getThreadSummaries?(): Array<{
    conversationId: string;
    hasUnreadTurn?: boolean;
  }>;
  listAllThreads(query: {
    archived?: boolean;
    modelProviders: unknown;
  }): Promise<BackgroundThreadSummarySource[]>;
}

export interface ListedBackgroundThread {
  hasUnreadTurn: boolean;
  hostId: string;
  thread: BackgroundThreadSummarySource;
}

export const threadManagerListSignal = appScopeUnderscore<
  BackgroundThreadManager[]
>(appScopeRoot, () => []);
