// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Keeps terminal side-panel tabs in sync with conversation terminal snapshots.
import { terminalSessionManager } from "../runtime/terminal-session-manager-runtime";
import type {
  TerminalPanelPlacement,
  TerminalPanelScope,
  TerminalPanelTarget,
} from "./terminal-panel-target-runtime";
import { syncTerminalPanelTabs } from "./terminal-panel-tabs-sync-runtime";

const terminalPanelSubscriptions = new Map<
  string,
  {
    panels: Set<TerminalPanelPlacement>;
    target: TerminalPanelTarget;
    unsubscribe: () => void;
  }
>();

export function registerTerminalPanelSubscription(
  scope: TerminalPanelScope,
  target: TerminalPanelTarget,
  placement: TerminalPanelPlacement,
): void {
  const key = String(target.conversationId);
  const existing = terminalPanelSubscriptions.get(key);
  if (existing != null) {
    existing.target = target;
    existing.panels.add(placement);
    return;
  }

  const panels = new Set<TerminalPanelPlacement>([placement]);
  const unsubscribe = terminalSessionManager.subscribeToConversation(
    target.conversationId,
    () => {
      const snapshot = terminalSessionManager.getConversationSnapshot(
        target.conversationId,
      );
      const subscription = terminalPanelSubscriptions.get(key);
      if (subscription == null) return;
      if (snapshot == null) {
        for (const panel of subscription.panels) {
          syncTerminalPanelTabs(scope, subscription.target, "", false, panel);
        }
        subscription.unsubscribe();
        terminalPanelSubscriptions.delete(key);
        return;
      }
      for (const panel of subscription.panels) {
        syncTerminalPanelTabs(
          scope,
          subscription.target,
          snapshot.activeSessionId,
          false,
          panel,
        );
      }
    },
  );
  terminalPanelSubscriptions.set(key, { panels, target, unsubscribe });
}
