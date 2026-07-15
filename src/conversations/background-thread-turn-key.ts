// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Pure helper that derives a stable string key for the current turn of a conversation.

function getConversationTurns(conversation: any): any[] {
  return conversation?.turns ?? [];
}

function getTurnKey(turn: any, index: number): string {
  return turn?.turnId == null ? `${index + 1}` : turn.turnId;
}

export function currentTurnKeyForConversation(conversation: any): string {
  if (conversation == null) return "0";
  const latestTurn = conversation?.turns?.at(-1) ?? null;
  if (latestTurn == null) return "0";
  const turns = getConversationTurns(conversation);
  const latestIndex = turns.findIndex((turn) => turn === latestTurn);
  return getTurnKey(
    latestTurn,
    latestIndex >= 0 ? latestIndex : turns.length - 1,
  );
}
