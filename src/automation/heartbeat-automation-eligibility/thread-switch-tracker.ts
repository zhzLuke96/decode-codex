// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-Dgn7MiTN.js.
import {
  codexThreadSwitchCompletedEvent,
  codexThreadSwitchKind,
  logProductEvent,
} from "../../analytics/product-logger";
import type {
  ProductLoggerScope,
  ThreadSwitchCompletion,
  ThreadSwitchDefaults,
} from "./types";
type PendingThreadSwitch = {
  defaults: ThreadSwitchDefaults;
  startedAtMs: number;
};
type ThreadSwitchEventName = "thread_switch_completed";
class ThreadSwitchTimingTracker {
  private pendingThreadSwitch: PendingThreadSwitch | null = null;
  constructor(private readonly now: () => number = () => performance.now()) {}
  start(
    eventName: ThreadSwitchEventName,
    defaults: ThreadSwitchDefaults,
  ): void {
    switch (eventName) {
      case "thread_switch_completed":
        this.pendingThreadSwitch = {
          defaults,
          startedAtMs: this.now(),
        };
        return;
    }
  }
  complete(
    scope: ProductLoggerScope,
    eventName: ThreadSwitchEventName,
    completion: ThreadSwitchCompletion,
  ): void {
    switch (eventName) {
      case "thread_switch_completed": {
        const pending = this.pendingThreadSwitch;
        if (
          pending == null ||
          pending.defaults.conversationId !== completion.conversationId
        ) {
          return;
        }
        this.pendingThreadSwitch = null;
        logProductEvent(scope, codexThreadSwitchCompletedEvent, {
          durationMs: Math.max(0, Math.round(this.now() - pending.startedAtMs)),
          switchKind: mapThreadSwitchKind(
            pending.defaults.needsResume ? "cold" : "hot",
          ),
          turnCount: completion.turnCount,
        });
        return;
      }
    }
  }
}
function mapThreadSwitchKind(kind: "cold" | "hot"): string | undefined {
  switch (kind) {
    case "hot":
      return codexThreadSwitchKind.CODEX_THREAD_SWITCH_KIND_HOT;
    case "cold":
      return codexThreadSwitchKind.CODEX_THREAD_SWITCH_KIND_COLD;
  }
}
export const threadSwitchTimingTracker = new ThreadSwitchTimingTracker();

export function initThreadSwitchTimingTrackerChunk(): void {}
