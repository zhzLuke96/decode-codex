// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// React hooks and pure helpers for background thread row/turn-map/mention data.
import { useMemo, useRef, useSyncExternalStore } from "react";
import { normalizeConversationId } from "../boundaries/src-l0hb-mz-p";
import { getLatestWaitingRequest } from "../boundaries/use-host-config.facade";
import { createAgentMentionItem } from "../composer/mention-item/mention-item-impl";
import { currentTurnKeyForConversation } from "./background-thread-turn-key";

function getConversationTurns(conversation: any): any[] {
  return conversation?.turns ?? [];
}

function getLatestConversationTurn(conversation: any): any {
  return conversation?.turns?.at(-1) ?? null;
}

function getConversationProgress(
  conversation: any,
): "inProgress" | "notInProgress" | "unknown" {
  const latestTurn =
    conversation == null ? null : getLatestConversationTurn(conversation);
  return latestTurn == null
    ? "unknown"
    : latestTurn.status === "inProgress"
      ? "inProgress"
      : "notInProgress";
}

function getReceiverThreadsMap(item: any): Map<string, any> {
  return new Map(
    (item.receiverThreads ?? []).map((thread: any) => [
      thread.threadId,
      thread.thread,
    ]),
  );
}

function getThreadMemberships(
  conversation: any,
): Array<{ conversationId: string; thread: any }> {
  if (conversation == null) return [];
  const seen = new Map<string, { conversationId: string; thread: any }>();
  for (const turn of getConversationTurns(conversation)) {
    for (const item of turn?.items ?? []) {
      if (item.type !== "collabAgentToolCall" || item.tool !== "spawnAgent")
        continue;
      const threadsById = getReceiverThreadsMap(item);
      for (const threadId of item.receiverThreadIds ?? []) {
        const conversationId = normalizeConversationId(threadId);
        if (!seen.has(conversationId)) {
          seen.set(conversationId, {
            conversationId,
            thread: threadsById.get(threadId) ?? null,
          });
        }
      }
    }
  }
  return Array.from(seen.values());
}

function getTurnKey(turn: any, index: number): string {
  return turn?.turnId == null ? `${index + 1}` : turn.turnId;
}

function buildTurnMap(conversation: any, memberships: any[]): Map<string, any> {
  if (conversation == null || memberships.length === 0) return new Map();
  const membershipById = new Map(
    memberships.map((membership: any) => [
      membership.conversationId,
      membership,
    ]),
  );
  const result = new Map<string, any>();
  const turns = getConversationTurns(conversation);
  for (let index = 0; index < turns.length; index++) {
    const turn = turns[index];
    if (turn == null) continue;
    for (const item of turn.items ?? []) {
      if (item.type !== "collabAgentToolCall") continue;
      const threadsById = getReceiverThreadsMap(item);
      const parentTurnKey = getTurnKey(turn, index);
      for (const threadId of item.receiverThreadIds ?? []) {
        const conversationId = normalizeConversationId(threadId);
        if (!membershipById.has(conversationId)) continue;
        const existing = result.get(conversationId);
        result.set(conversationId, {
          tool:
            item.tool === "wait" ? (existing?.tool ?? item.tool) : item.tool,
          parentTurnKey,
          thread:
            threadsById.get(threadId) ??
            existing?.thread ??
            membershipById.get(conversationId)?.thread,
          agentState:
            item.agentsStates?.[threadId] ?? existing?.agentState ?? null,
          spawnModel:
            item.tool === "spawnAgent"
              ? (item.model ?? existing?.spawnModel ?? null)
              : (existing?.spawnModel ?? null),
        });
      }
    }
  }
  return result;
}

function mapAgentStateStatus(
  status: any,
): "waiting" | "active" | "done" | "hidden" | "unknown" {
  switch (status) {
    case "pendingInit":
      return "waiting";
    case "running":
      return "active";
    case "completed":
      return "done";
    case null:
    case undefined:
      return "unknown";
    default:
      return "hidden";
  }
}

function getRowDisplayName(
  membership: any,
  reference: any,
  childConversation: any,
): string {
  const raw =
    reference?.thread?.name ??
    reference?.thread?.nickname ??
    membership?.thread?.name ??
    membership?.thread?.nickname ??
    childConversation?.source?.agentNickname ??
    `${membership.conversationId}`;
  const trimmed = raw.trim();
  return trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
}

function getRowAgentRole(
  membership: any,
  reference: any,
  childConversation: any,
): string | null {
  const role =
    reference?.thread?.agentRole ??
    membership?.thread?.agentRole ??
    childConversation?.source?.agentRole;
  const trimmed = role?.trim();
  return !trimmed || trimmed === "default" ? null : trimmed;
}

function buildSingleRow(opts: {
  membership: any;
  latestReference: any;
  childConversation: any;
  isSuppressedAfterArchive: boolean;
  currentParentTurnKey: string;
  isCurrentParentTurnInProgress: boolean;
}): any | null {
  const {
    membership,
    latestReference: reference,
    childConversation: child,
    isSuppressedAfterArchive,
    currentParentTurnKey,
    isCurrentParentTurnInProgress,
  } = opts;
  if (isSuppressedAfterArchive || reference == null) return null;
  const agentStatus = mapAgentStateStatus(reference.agentState?.status);
  if (reference.tool === "closeAgent" || agentStatus === "hidden") return null;
  const isCurrent = reference.parentTurnKey === currentParentTurnKey;
  const childProgress = getConversationProgress(child);
  const isActive =
    childProgress === "inProgress" ||
    (agentStatus === "active" && isCurrent) ||
    (agentStatus === "unknown" && isCurrent && isCurrentParentTurnInProgress);
  const isWaiting = !isActive && agentStatus === "waiting";
  const isDone =
    !isActive &&
    !isWaiting &&
    (agentStatus === "done" || childProgress === "notInProgress");
  if (!isActive && !isWaiting && !isDone) return null;
  const displayName = getRowDisplayName(membership, reference, child);
  const agentRole = getRowAgentRole(membership, reference, child);
  const baseRow = {
    conversationId: membership.conversationId,
    displayName,
    agentRole,
    spawnModel: reference.spawnModel,
    diffStats: null,
  };
  if (isDone) return { ...baseRow, status: "done", statusSummary: null };
  if (isWaiting) return { ...baseRow, status: "waiting", statusSummary: null };
  return { ...baseRow, status: "active", statusSummary: null };
}

function buildAllRows(opts: {
  conversation: any;
  memberships: any[];
  childConversations: any[];
  childConversationSuppressedStates: boolean[];
}): any[] {
  const turnMap = buildTurnMap(opts.conversation, opts.memberships);
  const currentTurnKey = currentTurnKeyForConversation(opts.conversation);
  const isInProgress =
    getConversationProgress(opts.conversation) === "inProgress";
  const rows: any[] = [];
  for (let index = 0; index < opts.memberships.length; index++) {
    const membership = opts.memberships[index];
    if (membership == null) continue;
    const childConversation = opts.childConversations[index] ?? null;
    const childForRow =
      childConversation == null
        ? null
        : {
            source: childConversation.source,
            turns: getConversationTurns(childConversation),
          };
    const row = buildSingleRow({
      membership,
      latestReference: turnMap.get(membership.conversationId) ?? null,
      childConversation: childForRow,
      isSuppressedAfterArchive:
        opts.childConversationSuppressedStates[index] ?? false,
      currentParentTurnKey: currentTurnKey,
      isCurrentParentTurnInProgress: isInProgress,
    });
    if (row != null) rows.push(row);
  }
  return rows;
}

function findFirstApproval(opts: {
  activeConversationId: string;
  memberships: any[];
  childConversations: any[];
}): any {
  for (let index = 0; index < opts.memberships.length; index++) {
    const membership = opts.memberships[index];
    const childConversation = opts.childConversations[index] ?? null;
    if (membership == null || childConversation == null) continue;
    if (membership.conversationId === opts.activeConversationId) continue;
    const pendingRequest = getLatestWaitingRequest(childConversation);
    if (pendingRequest != null) {
      const label =
        membership.thread?.name ??
        membership.thread?.nickname ??
        childConversation?.source?.agentNickname ??
        "Agent";
      const trimmedLabel = label.trim();
      return {
        conversationId: membership.conversationId,
        mentionLabel: trimmedLabel.startsWith("@")
          ? trimmedLabel.slice(1)
          : trimmedLabel,
        pendingRequest,
      };
    }
  }
  return null;
}

const NOOP_UNSUBSCRIBE = () => {};

function useChildConversations(
  manager: any,
  childConversationIds: string[],
): any[] {
  const cacheRef = useRef<{ key: string; value: any[] }>({
    key: "",
    value: [],
  });
  const idsKey = childConversationIds.join("\n");
  const getSnapshot = (): any[] => {
    if (childConversationIds.length === 0) {
      if (
        cacheRef.current.key !== idsKey ||
        cacheRef.current.value.length !== 0
      ) {
        cacheRef.current = { key: idsKey, value: [] };
      }
      return cacheRef.current.value;
    }
    const nextValue = childConversationIds.map((conversationId) =>
      manager.getConversation(conversationId),
    );
    const currentCache = cacheRef.current;
    if (
      currentCache.key === idsKey &&
      currentCache.value.length === nextValue.length &&
      nextValue.every(
        (entry, entryIndex) => entry === currentCache.value[entryIndex],
      )
    ) {
      return currentCache.value;
    }
    cacheRef.current = { key: idsKey, value: nextValue };
    return cacheRef.current.value;
  };
  const subscribe = (onStoreChange: () => void): (() => void) => {
    if (childConversationIds.length === 0) return NOOP_UNSUBSCRIBE;
    const unsubscribers = childConversationIds.map((conversationId) =>
      manager.addConversationCallback(conversationId, onStoreChange),
    );
    const unsubscribeAny = manager.addAnyConversationCallback(onStoreChange);
    return () => {
      unsubscribers.forEach((unsubscribe: () => void) => unsubscribe());
      unsubscribeAny();
    };
  };
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function useBackgroundThreadTurnMap(opts: {
  conversation: any;
  memberships: any[];
}): Map<string, { parentTurnKey: string }> {
  return useMemo(
    () => buildTurnMap(opts.conversation, opts.memberships),
    [opts.conversation, opts.memberships],
  );
}

export function useBackgroundThreadRows(opts: {
  activeConversationId: string;
  conversation: any;
  enabled: boolean;
  manager: any;
}): {
  memberships: any[];
  rows: any[];
  mentionItems: any[];
  firstApproval: any;
} {
  const memberships = opts.enabled
    ? getThreadMemberships(opts.conversation)
    : [];
  const childConversationIds = memberships.map(
    (membership: any) => membership.conversationId,
  );
  const childConversations = useChildConversations(
    opts.manager,
    childConversationIds,
  );
  const rows = opts.enabled
    ? buildAllRows({
        conversation: opts.conversation,
        memberships,
        childConversations,
        childConversationSuppressedStates: memberships.map((membership: any) =>
          opts.manager.isConversationSuppressedAfterArchive(
            membership.conversationId,
          ),
        ),
      })
    : [];
  const mentionItems = rows.map((row: any) => ({
    ...createAgentMentionItem({
      conversationId: row.conversationId,
      displayName: row.displayName,
    }),
    conversationId: row.conversationId,
    agentRole: row.agentRole,
    status: row.status,
    statusSummary: row.statusSummary,
  }));
  const firstApproval = opts.enabled
    ? findFirstApproval({
        activeConversationId: opts.activeConversationId,
        memberships,
        childConversations,
      })
    : null;
  return { memberships, rows, mentionItems, firstApproval };
}
