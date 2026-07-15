// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Side-panel tab body for a single embedded terminal session: renders the
// terminal panel only while its session is still tracked by the conversation
// snapshot, and forwards new-tab requests with the current app scope.
import { TerminalPanel } from "./terminal-panel";
import { useConversationTerminalSnapshot } from "./use-conversation-terminal-snapshot";
import {
  appScopeAtom,
  useAppScope,
} from "../boundaries/onboarding-commons-externals.facade";

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

export type TerminalSessionTabProps = {
  conversationId: string;
  conversationTitle: string | null;
  cwd?: string | null;
  hostId?: string | null;
  onNewTerminalTab: (scope: AppScope) => void;
  sessionId: string;
};

export function TerminalSessionTab({
  conversationId,
  conversationTitle,
  cwd,
  hostId,
  onNewTerminalTab,
  sessionId,
}: TerminalSessionTabProps) {
  const scope = useAppScope<AppScope>(appScopeAtom);
  const snapshot = useConversationTerminalSnapshot({ conversationId });
  if (!snapshot?.sessionIds.includes(sessionId)) {
    return null;
  }
  return (
    <TerminalPanel
      conversationId={conversationId}
      conversationTitle={conversationTitle}
      cwd={cwd}
      hostId={hostId}
      sessionId={sessionId}
      onNewTerminalTab={() => {
        onNewTerminalTab(scope);
      }}
    />
  );
}
