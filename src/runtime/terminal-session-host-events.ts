// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Host terminal event subscriptions for the restored terminal session manager.

import { VscodeHostMessageBridge } from "../boundaries/vscode-api";
import { readNumber, readString } from "./terminal-title-runtime";
import type {
  TerminalAttachedMessage,
  TerminalDataMessage,
  TerminalErrorMessage,
  TerminalExitMessage,
  TerminalInitLogMessage,
  Unsubscribe,
} from "./terminal-session-types";

export type TerminalHostEventTarget = {
  handleHostAttached(
    sessionId: string,
    cwd: string | null,
    shell: string | null,
  ): void;
  handleHostClearActive(): void;
  handleHostData(sessionId: string, data: string): void;
  handleHostError(sessionId: string, message: string): void;
  handleHostExit(
    sessionId: string,
    code: number | null,
    signal: string | null,
  ): void;
  handleHostInitLog(sessionId: string, log: string): void;
};

export function subscribeTerminalHostEvents(
  target: TerminalHostEventTarget,
): Unsubscribe[] {
  if (typeof window === "undefined") return [];
  const bridge = VscodeHostMessageBridge.getInstance();
  return [
    bridge.subscribe("terminal-data", (message) => {
      const { sessionId, data } = message as TerminalDataMessage;
      const id = readString(sessionId);
      const text = readString(data);
      if (id == null || text == null) return;
      target.handleHostData(id, text);
    }),
    bridge.subscribe("terminal-exit", (message) => {
      const { sessionId, code, signal } = message as TerminalExitMessage;
      const id = readString(sessionId);
      if (id == null) return;
      target.handleHostExit(id, readNumber(code), readString(signal));
    }),
    bridge.subscribe("terminal-error", (message) => {
      const { sessionId, message: errorMessage } =
        message as TerminalErrorMessage;
      const id = readString(sessionId);
      if (id == null) return;
      target.handleHostError(id, readString(errorMessage) ?? "");
    }),
    bridge.subscribe("terminal-init-log", (message) => {
      const { sessionId, log } = message as TerminalInitLogMessage;
      const id = readString(sessionId);
      const text = readString(log);
      if (id == null || text == null) return;
      target.handleHostInitLog(id, text);
    }),
    bridge.subscribe("terminal-attached", (message) => {
      const { sessionId, cwd, shell } = message as TerminalAttachedMessage;
      const id = readString(sessionId);
      if (id == null) return;
      target.handleHostAttached(id, readString(cwd), readString(shell));
    }),
    bridge.subscribe("clear-active-terminal", () => {
      target.handleHostClearActive();
    }),
  ];
}
