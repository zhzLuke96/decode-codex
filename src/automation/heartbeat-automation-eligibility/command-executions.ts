// Restored from ref/webview/assets/heartbeat-automation-eligibility-C1_JL34W.js
import {
  _appScopeC as createComputedSignal,
  appScopeRoot,
} from "../../boundaries/app-scope";
import {
  A as conversationCwdSignal,
  Lt as conversationTurnsSignal,
  gt as hostIdsSignal,
  ht as conversationIdsByHostSignal,
} from "../../boundaries/thread-context-inputs.facade";
import { localConversationTitleSignal } from "../../threads/local-conversation-title-signals";
import { commandExecutionCommand } from "../../utils/command-execution-command";
import type {
  AppScopeGetter,
  CommandExecutionItem,
  RestoredTerminalProcess,
  TerminalProcessCandidate,
  TerminalProcessSource,
  TerminalProcessStopAction,
  ThreadCommandSummary,
  ThreadTurn,
} from "./types";
type StopInfo = {
  source: TerminalProcessSource;
  stopAction: TerminalProcessStopAction;
};
export const allThreadCommandExecutionsSignal = createComputedSignal(
  appScopeRoot,
  ({ get }: AppScopeGetter): ThreadCommandSummary[] => {
    const threadSummaries: ThreadCommandSummary[] = [];
    for (const hostId of get<string[]>(hostIdsSignal)) {
      for (const conversationId of get<string[]>(
        conversationIdsByHostSignal,
        hostId,
      )) {
        threadSummaries.push({
          cwd: get<string | null | undefined>(
            conversationCwdSignal,
            conversationId,
          ),
          hostId,
          id: conversationId,
          title: get<string | null | undefined>(
            localConversationTitleSignal,
            conversationId,
          ),
          turns:
            get<readonly ThreadTurn[] | null | undefined>(
              conversationTurnsSignal,
              conversationId,
            ) ?? [],
        });
      }
    }
    return threadSummaries;
  },
);
export function collectThreadCommandExecutions(
  threadSummaries: readonly ThreadCommandSummary[],
): TerminalProcessCandidate[] {
  const commandExecutions: TerminalProcessCandidate[] = [];
  for (const threadSummary of threadSummaries) {
    const latestTurnIndex = threadSummary.turns.length - 1;
    for (let turnIndex = latestTurnIndex; turnIndex >= 0; turnIndex -= 1) {
      const turn = threadSummary.turns[turnIndex];
      if (turn == null) continue;
      const isLatestInProgressTurn =
        turnIndex === latestTurnIndex && turn.status === "inProgress";
      for (const item of turn.items) {
        if (item?.type !== "commandExecution") continue;
        const stopInfo = getCommandExecutionStopInfo(
          item,
          turn,
          isLatestInProgressTurn,
        );
        if (stopInfo == null) continue;
        const command = commandExecutionCommand(item);
        if (command.length === 0) continue;
        const commandExecutionStartedAtMs =
          turn.commandExecutionStartedAtMsById?.[item.id];
        commandExecutions.push({
          chatTitle: threadSummary.title,
          command,
          ...(commandExecutionStartedAtMs == null
            ? {}
            : {
                commandExecutionStartedAtMs,
              }),
          conversationId: threadSummary.id,
          cwd: item.cwd ?? threadSummary.cwd,
          hostId: threadSummary.hostId,
          id: `${threadSummary.id}:${turn.turnId ?? turnIndex}:${item.id}`,
          itemId: item.id,
          osPid: null,
          processId: item.processId,
          source: stopInfo.source,
          startedAtMs:
            commandExecutionStartedAtMs ??
            turn.firstTurnWorkItemStartedAtMs ??
            turn.turnStartedAtMs ??
            null,
          stopAction: stopInfo.stopAction,
          turnId: turn.turnId,
        });
      }
    }
  }
  return commandExecutions;
}
export function restoreTrackedProcessesForThreads(
  restoredProcesses: readonly RestoredTerminalProcess[],
  threadSummaries: readonly ThreadCommandSummary[],
): TerminalProcessCandidate[] {
  const threadSummaryById = new Map(
    threadSummaries.map((threadSummary) => [threadSummary.id, threadSummary]),
  );
  return restoredProcesses.map((process) => {
    const threadSummary = threadSummaryById.get(process.conversationId);
    return {
      chatTitle: threadSummary?.title ?? process.chatTitle,
      command: process.command,
      commandExecutionStartedAtMs: process.startedAtMs,
      conversationId: process.conversationId,
      cwd: process.cwd ?? threadSummary?.cwd ?? null,
      hostId: threadSummary?.hostId ?? "local",
      id: process.id,
      itemId: process.itemId,
      osPid: process.osPid,
      processId: process.processId,
      source: "restored-process",
      startedAtMs: process.startedAtMs,
      stopAction: "kill-child-process",
      turnId: process.turnId,
    };
  });
}
export function mergeTerminalProcessCandidates(
  currentCandidates: readonly TerminalProcessCandidate[],
  restoredCandidates: readonly TerminalProcessCandidate[],
): TerminalProcessCandidate[] {
  const restoredById = new Map(
    restoredCandidates.map((candidate) => [candidate.id, candidate]),
  );
  return [
    ...currentCandidates.map((candidate) => {
      const restoredCandidate = restoredById.get(candidate.id);
      if (restoredCandidate == null) return candidate;
      restoredById.delete(candidate.id);
      if (candidate.source === "restored-process") return restoredCandidate;
      return {
        ...candidate,
        chatTitle: candidate.chatTitle ?? restoredCandidate.chatTitle,
        ...(restoredCandidate.commandExecutionStartedAtMs == null
          ? {}
          : {
              commandExecutionStartedAtMs:
                restoredCandidate.commandExecutionStartedAtMs,
            }),
        cwd: candidate.cwd ?? restoredCandidate.cwd,
        osPid: candidate.osPid ?? restoredCandidate.osPid,
        processId: candidate.processId ?? restoredCandidate.processId,
        startedAtMs:
          restoredCandidate.commandExecutionStartedAtMs ??
          candidate.startedAtMs ??
          restoredCandidate.startedAtMs,
      };
    }),
    ...restoredById.values(),
  ];
}
function getCommandExecutionStopInfo(
  item: CommandExecutionItem,
  turn: ThreadTurn,
  isLatestInProgressTurn: boolean,
): StopInfo | null {
  if (turn.interruptedCommandExecutionItemIds?.includes(item.id)) {
    return null;
  }
  if (item.status === "inProgress") {
    return isLatestInProgressTurn
      ? {
          source: "active-turn",
          stopAction: "interrupt-conversation",
        }
      : {
          source: "background-terminal",
          stopAction: "kill-child-process",
        };
  }
  return item.status === "completed"
    ? {
        source: "restored-process",
        stopAction: "kill-child-process",
      }
    : null;
}
