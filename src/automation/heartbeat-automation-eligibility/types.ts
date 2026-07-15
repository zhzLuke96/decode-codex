// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
import type { ReactNode } from "react";
export type AppScopeGetter = {
  get<T = unknown>(signal: unknown, key?: unknown): T;
};
export type AppScopeStore = AppScopeGetter & {
  set(signal: unknown, value: unknown): void;
};
export type ProductLoggerScope = {
  get(key: unknown): {
    logProductEvent(event: unknown, payload?: Record<string, unknown>): void;
  };
};
export type ThreadSwitchDefaults = {
  conversationId: string | null;
  needsResume?: boolean | null;
};
export type ThreadSwitchCompletion = {
  conversationId: string | null;
  turnCount: number;
};
export type ThreadPinButtonSlots = {
  rest: ReactNode | null;
  hover: ReactNode | null;
};
export type PinMenuItem = {
  id: "pin-thread" | "unpin-thread";
  message: unknown;
  onSelect(): void;
};
export type CommandExecutionItem = {
  command: string;
  commandActions: Array<
    | {
        command?: string | null;
      }
    | null
    | undefined
  >;
  cwd?: string | null;
  id: string;
  processId?: string | null;
  status?: "inProgress" | "completed" | string | null;
  type?: string | null;
};
export type ThreadTurn = {
  commandExecutionStartedAtMsById?: Record<string, number> | null;
  firstTurnWorkItemStartedAtMs?: number | null;
  interruptedCommandExecutionItemIds?: readonly string[] | null;
  items: readonly (CommandExecutionItem | null | undefined)[];
  status?: "inProgress" | string | null;
  turnId?: string | null;
  turnStartedAtMs?: number | null;
};
export type ThreadCommandSummary = {
  cwd?: string | null;
  hostId: string;
  id: string;
  title?: string | null;
  turns: readonly ThreadTurn[];
};
export type TerminalProcessSource =
  | "active-turn"
  | "background-terminal"
  | "restored-process";
export type TerminalProcessStopAction =
  | "interrupt-conversation"
  | "kill-child-process";
export type TerminalProcessCandidate = {
  chatTitle?: string | null;
  command: string;
  commandExecutionStartedAtMs?: number | null;
  conversationId: string;
  cwd?: string | null;
  hostId: string;
  id: string;
  itemId?: string | null;
  osPid?: number | null;
  processId?: string | null;
  source: TerminalProcessSource;
  startedAtMs?: number | null;
  status?: string | null;
  stopAction: TerminalProcessStopAction;
  turnId?: string | null;
};
export type RestoredTerminalProcess = {
  chatTitle?: string | null;
  command: string;
  conversationId: string;
  cwd?: string | null;
  id: string;
  itemId?: string | null;
  osPid?: number | null;
  processId?: string | null;
  startedAtMs?: number | null;
  turnId?: string | null;
};
export type ProcessListEntry = {
  ageSeconds?: number | null;
  command: string;
  cpuPercent?: number | null;
  depth: number;
  parentPid: number;
  pid: number;
  rssKb?: number | null;
};
export type MatchedTerminalProcess = {
  ageSeconds?: number | null;
  command: string;
  cpuPercent: number | null;
  pid: number;
  rssKb: number | null;
};
export type HeartbeatAutomationEligibilityReason =
  | "missing_conversation"
  | "missing_turn"
  | "pending_request"
  | "resuming"
  | "turn_in_progress"
  | "unsupported_host"
  | "waiting_on_approval"
  | "waiting_on_user_input";
export type HeartbeatAutomationEligibility =
  | {
      isEligible: true;
      reason: null;
    }
  | {
      isEligible: false;
      reason: HeartbeatAutomationEligibilityReason;
    };
