// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Conversion helpers from conversation turns and persisted process records into process rows.
import type {
  CommandExecutionItem,
  ConversationProcessRow,
  ConversationProcessSource,
  ConversationProcessThread,
  ConversationProcessStopAction,
  ConversationTurnSnapshot,
  RegisteredConversationProcess,
} from "./types";

export function collectConversationProcessRows(
  conversations: readonly ConversationProcessThread[],
): ConversationProcessRow[] {
  const processRows: ConversationProcessRow[] = [];

  for (const conversation of conversations) {
    const turns = conversation.turns ?? [];
    const latestTurnIndex = turns.length - 1;

    for (let turnIndex = latestTurnIndex; turnIndex >= 0; --turnIndex) {
      const turn = turns[turnIndex];
      if (turn == null) continue;

      const isLatestInProgressTurn =
        turnIndex === latestTurnIndex && turn.status === "inProgress";

      for (const item of turn.items ?? []) {
        if (!isCommandExecutionItem(item)) continue;

        const processState = getCommandExecutionProcessState(
          item,
          turn,
          isLatestInProgressTurn,
        );
        if (processState == null) continue;

        const command = getCommandExecutionText(item);
        if (command.length === 0) continue;

        const commandStartedAtMs =
          turn.commandExecutionStartedAtMsById?.[item.id] ?? null;

        processRows.push({
          chatTitle: conversation.title ?? null,
          command,
          commandExecutionStartedAtMs: commandStartedAtMs,
          conversationId: conversation.id,
          cwd: item.cwd ?? conversation.cwd ?? null,
          hostId: conversation.hostId ?? "local",
          id: `${conversation.id}:${turn.turnId ?? turnIndex}:${item.id}`,
          itemId: item.id,
          osPid: item.osPid ?? null,
          processId: item.processId ?? null,
          source: processState.source,
          startedAtMs:
            commandStartedAtMs ??
            turn.firstTurnWorkItemStartedAtMs ??
            turn.turnStartedAtMs ??
            null,
          stopAction: processState.stopAction,
          turnId: turn.turnId ?? null,
        });
      }
    }
  }

  return processRows;
}

export function restoreRegisteredProcessRows(
  records: readonly RegisteredConversationProcess[],
  conversations: readonly ConversationProcessThread[],
): ConversationProcessRow[] {
  const conversationsById = new Map(
    conversations.map((conversation) => [conversation.id, conversation]),
  );

  return records.map((record) => {
    const conversation = conversationsById.get(record.conversationId);
    return {
      chatTitle: conversation?.title ?? record.chatTitle ?? null,
      command: record.command,
      commandExecutionStartedAtMs: record.startedAtMs ?? null,
      conversationId: record.conversationId,
      cwd: record.cwd ?? conversation?.cwd ?? null,
      hostId: conversation?.hostId ?? record.hostId ?? "local",
      id: record.id,
      itemId: record.itemId,
      osPid: record.osPid ?? null,
      processId: record.processId ?? null,
      source: "restored-process",
      startedAtMs: record.startedAtMs ?? null,
      stopAction: "kill-child-process",
      turnId: record.turnId ?? null,
    };
  });
}

export function mergeProcessRows(
  restoredRows: readonly ConversationProcessRow[],
  liveRows: readonly ConversationProcessRow[],
): ConversationProcessRow[] {
  const liveRowsById = new Map(liveRows.map((row) => [row.id, row]));

  return [
    ...restoredRows.map((restoredRow) => {
      const liveRow = liveRowsById.get(restoredRow.id);
      if (liveRow == null) return restoredRow;

      liveRowsById.delete(restoredRow.id);
      return restoredRow.source === "restored-process"
        ? liveRow
        : {
            ...restoredRow,
            chatTitle: restoredRow.chatTitle ?? liveRow.chatTitle,
            commandExecutionStartedAtMs:
              liveRow.commandExecutionStartedAtMs ??
              restoredRow.commandExecutionStartedAtMs,
            cwd: restoredRow.cwd ?? liveRow.cwd,
            osPid: restoredRow.osPid ?? liveRow.osPid,
            processId: restoredRow.processId ?? liveRow.processId,
            startedAtMs:
              liveRow.commandExecutionStartedAtMs ??
              restoredRow.startedAtMs ??
              liveRow.startedAtMs,
          };
    }),
    ...liveRowsById.values(),
  ];
}

export function isSameProcessRow(
  leftProcess: ConversationProcessRow,
  rightProcess: ConversationProcessRow,
): boolean {
  return leftProcess.id === rightProcess.id
    ? true
    : leftProcess.command === rightProcess.command &&
        leftProcess.conversationId === rightProcess.conversationId &&
        leftProcess.cwd === rightProcess.cwd &&
        leftProcess.hostId === rightProcess.hostId &&
        leftProcess.stopAction === rightProcess.stopAction &&
        leftProcess.turnId === rightProcess.turnId;
}

function getCommandExecutionProcessState(
  item: CommandExecutionItem,
  turn: ConversationTurnSnapshot,
  isLatestInProgressTurn: boolean,
): {
  source: ConversationProcessSource;
  stopAction: ConversationProcessStopAction;
} | null {
  if (turn.interruptedCommandExecutionItemIds?.includes(item.id)) return null;

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

function isCommandExecutionItem(item: unknown): item is CommandExecutionItem {
  return (
    typeof item === "object" &&
    item != null &&
    (item as { type?: unknown }).type === "commandExecution" &&
    typeof (item as { id?: unknown }).id === "string"
  );
}

function getCommandExecutionText(item: CommandExecutionItem): string {
  return (item.command ?? item.aggregatedCommand ?? "").trim();
}
