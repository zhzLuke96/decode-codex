// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// App-scope signals that expose background subagent summaries.
import { once } from "../runtime/commonjs-interop";
import {
  createAppScopedDerivedSignalFamily,
  initAppScopeSignalRuntime,
  type ScopedSignalGetter,
} from "../runtime/app-scope-runtime";
import {
  conversationAppServerManagerSignal,
  conversationMetaEventSignal,
  conversationTurnsSignal,
  initConversationStateRuntime,
  threadSourceSignal,
} from "../runtime/conversation-state-runtime";
import { buildBackgroundAgents } from "./background-subagents-runtime";
import {
  createSourceLinkedSubagentThreadsSignal,
  type SourceLinkedSubagentThreadsSignal,
} from "./background-subagent-linked-threads";
import type {
  BackgroundAgentSummary,
  CachedConversation,
  ConversationTurn,
  SourceLinkedThread,
} from "./background-agent-types";

export type OpaqueSignalFamily<TKey, TValue> = {
  readonly __signalFamilyKey?: TKey;
  readonly __signalFamilyValue?: TValue;
};

export type BackgroundAgentsSignal = OpaqueSignalFamily<
  string | null,
  BackgroundAgentSummary[]
>;

type ConversationAppServerManager = {
  getCachedConversations(): readonly CachedConversation[];
};
type BuildBackgroundAgentsForParentOptions = {
  requireAppServerManager: boolean;
};

const emptyCachedConversations: readonly CachedConversation[] = [];
const emptyConversationTurns: readonly ConversationTurn[] = [];

let sourceLinkedSubagentThreadsSignal: SourceLinkedSubagentThreadsSignal;

export let backgroundAgentsSignal: BackgroundAgentsSignal;
export let summaryPanelBackgroundAgentsSignal: BackgroundAgentsSignal;

export const initBackgroundSubagentsRuntimeChunk = once(() => {
  initAppScopeSignalRuntime();
  initConversationStateRuntime();

  sourceLinkedSubagentThreadsSignal = createSourceLinkedSubagentThreadsSignal();

  backgroundAgentsSignal = createAppScopedDerivedSignalFamily<
    string | null,
    BackgroundAgentSummary[]
  >((parentConversationId, { get }) => {
    return buildBackgroundAgentsForParent(parentConversationId, get, {
      requireAppServerManager: false,
    });
  }) as BackgroundAgentsSignal;

  summaryPanelBackgroundAgentsSignal = createAppScopedDerivedSignalFamily<
    string | null,
    BackgroundAgentSummary[]
  >((parentConversationId, { get }) => {
    return buildBackgroundAgentsForParent(parentConversationId, get, {
      requireAppServerManager: true,
    });
  }) as BackgroundAgentsSignal;
});

function buildBackgroundAgentsForParent(
  parentConversationId: string | null,
  get: ScopedSignalGetter["get"],
  { requireAppServerManager }: BuildBackgroundAgentsForParentOptions,
): BackgroundAgentSummary[] {
  if (parentConversationId == null) return [];

  const conversationTurns =
    (get(conversationTurnsSignal, parentConversationId) as
      | readonly ConversationTurn[]
      | null
      | undefined) ?? emptyConversationTurns;
  if (conversationTurns.length === 0) return [];

  get(conversationMetaEventSignal);
  const appServerManager = get<ConversationAppServerManager | null>(
    conversationAppServerManagerSignal,
    parentConversationId,
  );
  if (appServerManager == null && requireAppServerManager) return [];

  return buildBackgroundAgents({
    cachedConversations:
      appServerManager?.getCachedConversations() ?? emptyCachedConversations,
    conversationTurns,
    getChildSource: (conversationId) => get(threadSourceSignal, conversationId),
    getChildTurns: (conversationId) =>
      get(conversationTurnsSignal, conversationId) as
        | readonly ConversationTurn[]
        | null
        | undefined,
    parentConversationId,
    sourceLinkedThreads: get(
      sourceLinkedSubagentThreadsSignal,
      parentConversationId,
    ) as readonly SourceLinkedThread[] | null | undefined,
  });
}
