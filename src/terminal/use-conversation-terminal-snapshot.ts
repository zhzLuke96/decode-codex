// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Subscribes a React component to the terminal session manager's snapshot for a
// given conversation via useSyncExternalStore, returning null when no
// conversation is targeted.
import { useSyncExternalStore } from "react";
import { terminalSessionManager } from "../boundaries/onboarding-commons-externals.facade";

export type ConversationTerminalSnapshot = {
  sessionIds: string[];
  activeSessionId: string | null;
  tabTitlesBySessionId: Record<string, string | undefined>;
  cwdBySessionId: Record<string, string | undefined>;
} | null;

export type UseConversationTerminalSnapshotOptions = {
  conversationId: string | null | undefined;
};

const noopUnsubscribe = (): void => {};

const getServerSnapshot = (): ConversationTerminalSnapshot => null;

export function useConversationTerminalSnapshot({
  conversationId,
}: UseConversationTerminalSnapshotOptions): ConversationTerminalSnapshot {
  const subscribe = (onStoreChange: () => void): (() => void) =>
    conversationId == null
      ? noopUnsubscribe
      : terminalSessionManager.subscribeToConversation(
          conversationId,
          onStoreChange,
        );
  const getSnapshot = (): ConversationTerminalSnapshot =>
    conversationId == null
      ? null
      : terminalSessionManager.getConversationSnapshot(conversationId);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
