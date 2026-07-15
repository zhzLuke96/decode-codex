// Restored from ref/webview/assets/queued-follow-ups-store-rWZI8H1H.js
import React from "react";
import {
  _appScopeO as useAppScopeStore,
  appScopeRoot,
} from "../boundaries/app-scope";
import {
  nn as sendThreadFollowerRequest,
  ra as interruptedSteerPausedReason,
  rn as subscribeToThreadMessage,
  ta as setGlobalSettingData,
} from "../boundaries/thread-context-inputs.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiF as vscodeBridge,
  vscodeApiH as logger,
  vscodeApiR as createVscodeQueryKey,
} from "../boundaries/vscode-api";
import { globalSettingKeys } from "../boundaries/src-l0hb-mz-p";
import { useAppServerManager } from "../app-server/app-server-manager-hooks";
import { useGlobalState } from "./use-global-state";
import { uniq } from "./uniq";
import { uuidV4 } from "./uuid-v4";
type QueuedFollowUpMessage = {
  id: string;
  text: string;
  context?: unknown;
  cwd?: string | null;
  createdAt: number;
  pausedReason?: string;
};
type QueuedFollowUpsByConversation = Record<
  string,
  QueuedFollowUpMessage[] | undefined
>;
type QueuedFollowUpsGlobalState = {
  data?: QueuedFollowUpsByConversation | null;
  isLoading: boolean;
};
type QueuedFollowUpInput = {
  text: string;
  context?: unknown;
  cwd?: string | null;
};
type QueuedFollowUpActions = {
  enqueue(input: QueuedFollowUpInput): QueuedFollowUpMessage | null;
  remove(messageId: string): void;
  update(
    messageId: string,
    updater: (message: QueuedFollowUpMessage) => QueuedFollowUpMessage,
  ): void;
  resumeInterruptedSteers(): void;
  reorder(messageIds: string[]): void;
};
type UseQueuedFollowUpsResult = {
  messages: QueuedFollowUpMessage[];
  actions: QueuedFollowUpActions;
  isLoading: boolean;
};
type QueuedFollowUpsUpdater = (
  current: QueuedFollowUpsByConversation,
) => QueuedFollowUpsByConversation;
type ThreadStreamRole = {
  role: "owner" | "follower";
  ownerClientId?: string;
};
type AppServerManager = {
  getStreamRole(conversationId: string): ThreadStreamRole | null | undefined;
};
type SyncSource = "local-action" | "ipc-broadcast";
function omitConversationWhenEmpty(
  state: QueuedFollowUpsByConversation,
  conversationId: string,
  messages: QueuedFollowUpMessage[],
): QueuedFollowUpsByConversation {
  if (messages.length === 0) {
    const { [conversationId]: _removed, ...remainingState } = state;
    return remainingState;
  }
  return {
    ...state,
    [conversationId]: messages,
  };
}
function keyMessagesById(
  messages: QueuedFollowUpMessage[],
): Record<string, QueuedFollowUpMessage> {
  const byId: Record<string, QueuedFollowUpMessage> = {};
  for (const message of messages) {
    byId[message.id] = message;
  }
  return byId;
}
export function useQueuedFollowUpsStore(
  conversationId?: string | null,
): UseQueuedFollowUpsResult {
  const appScopeStore = useAppScopeStore(appScopeRoot);
  const appServerManager = useAppServerManager(
    conversationId,
  ) as AppServerManager;
  const { data: loadedQueuedFollowUps, isLoading } =
    useGlobalState<QueuedFollowUpsGlobalState>(
      globalSettingKeys.QUEUED_FOLLOW_UPS,
    );
  const queryClient = useQueryClient();
  const globalStateQueryKey = createVscodeQueryKey("get-global-state", {
    key: globalSettingKeys.QUEUED_FOLLOW_UPS,
  });
  const queuedFollowUpsRef = React.useRef<QueuedFollowUpsByConversation>({});
  const pendingUpdatesRef = React.useRef<QueuedFollowUpsUpdater[]>([]);
  const hasLoadedGlobalStateRef = React.useRef(false);
  React.useEffect(() => {
    if (isLoading) {
      if (loadedQueuedFollowUps != null) {
        queuedFollowUpsRef.current = loadedQueuedFollowUps;
      }
      return;
    }
    hasLoadedGlobalStateRef.current = true;
    queuedFollowUpsRef.current = loadedQueuedFollowUps ?? {};
    if (pendingUpdatesRef.current.length === 0) {
      return;
    }
    const nextQueuedFollowUps = pendingUpdatesRef.current.reduce(
      (state, update) => update(state),
      queuedFollowUpsRef.current,
    );
    pendingUpdatesRef.current = [];
    queuedFollowUpsRef.current = nextQueuedFollowUps;
    setGlobalSettingData(
      appScopeStore,
      globalSettingKeys.QUEUED_FOLLOW_UPS,
      nextQueuedFollowUps,
    );
  }, [loadedQueuedFollowUps, isLoading, appScopeStore]);
  const messages = React.useMemo(() => {
    if (!conversationId) {
      return [];
    }
    const stateForRender = isLoading
      ? queuedFollowUpsRef.current
      : (loadedQueuedFollowUps ?? queuedFollowUpsRef.current);
    return stateForRender[conversationId] ?? [];
  }, [conversationId, loadedQueuedFollowUps, isLoading]);
  const updateQueuedFollowUps = React.useCallback(
    (update: QueuedFollowUpsUpdater) => {
      const nextQueuedFollowUps = update(queuedFollowUpsRef.current);
      queuedFollowUpsRef.current = nextQueuedFollowUps;
      if (!hasLoadedGlobalStateRef.current) {
        pendingUpdatesRef.current = [...pendingUpdatesRef.current, update];
        return;
      }
      queryClient.setQueryData(globalStateQueryKey, {
        value: nextQueuedFollowUps,
      });
      setGlobalSettingData(
        appScopeStore,
        globalSettingKeys.QUEUED_FOLLOW_UPS,
        nextQueuedFollowUps,
      );
    },
    [queryClient, globalStateQueryKey, appScopeStore],
  );
  const setConversationMessages = React.useCallback(
    (nextMessages: QueuedFollowUpMessage[]) => {
      if (!conversationId) {
        return;
      }
      updateQueuedFollowUps((current) =>
        omitConversationWhenEmpty(current, conversationId, nextMessages),
      );
    },
    [conversationId, updateQueuedFollowUps],
  );
  const setConversationMessagesRefOnly = React.useCallback(
    (nextMessages: QueuedFollowUpMessage[]) => {
      if (!conversationId) {
        return;
      }
      queuedFollowUpsRef.current = omitConversationWhenEmpty(
        queuedFollowUpsRef.current,
        conversationId,
        nextMessages,
      );
    },
    [conversationId],
  );
  const syncMessages = React.useCallback(
    (nextMessages: QueuedFollowUpMessage[], source: SyncSource) => {
      if (!conversationId) {
        return;
      }
      const streamRole = appServerManager.getStreamRole(conversationId);
      if (source === "local-action" && streamRole?.role === "follower") {
        setConversationMessagesRefOnly(nextMessages);
        sendThreadFollowerRequest(
          "thread-follower-set-queued-follow-ups-state",
          {
            conversationId,
            state: queuedFollowUpsRef.current,
          },
          {
            targetClientId: streamRole.ownerClientId,
          },
        ).then((result: { resultType: string; error?: unknown }) => {
          if (result.resultType === "error") {
            logger.warning(
              "[queued-followups] Failed to sync queued messages",
              {
                safe: {},
                sensitive: {
                  conversationId,
                  error: result.error,
                },
              },
            );
          }
        });
        return;
      }
      setConversationMessages(nextMessages);
      if (source === "local-action" && streamRole?.role === "owner") {
        vscodeBridge.dispatchMessage("thread-queued-followups-changed", {
          conversationId,
          messages: nextMessages,
        });
      }
    },
    [
      conversationId,
      appServerManager,
      setConversationMessages,
      setConversationMessagesRefOnly,
    ],
  );
  React.useEffect(() => {
    if (!conversationId) {
      return;
    }
    return subscribeToThreadMessage(
      "thread-queued-followups-changed",
      (event: {
        params: {
          conversationId: string;
          messages: QueuedFollowUpMessage[];
        };
      }) => {
        if (event.params.conversationId === conversationId) {
          syncMessages(event.params.messages, "ipc-broadcast");
        }
      },
    );
  }, [conversationId, syncMessages]);
  const enqueue = React.useCallback(
    (input: QueuedFollowUpInput) => {
      if (!conversationId) {
        return null;
      }
      const message: QueuedFollowUpMessage = {
        id: uuidV4() as string,
        text: input.text,
        context: input.context,
        cwd: input.cwd,
        createdAt: Date.now(),
      };
      syncMessages(
        [...(queuedFollowUpsRef.current[conversationId] ?? []), message],
        "local-action",
      );
      return message;
    },
    [conversationId, syncMessages],
  );
  const remove = React.useCallback(
    (messageId: string) => {
      if (!conversationId) {
        return;
      }
      syncMessages(
        (queuedFollowUpsRef.current[conversationId] ?? []).filter(
          (message) => message.id !== messageId,
        ),
        "local-action",
      );
    },
    [conversationId, syncMessages],
  );
  const update = React.useCallback(
    (
      messageId: string,
      updater: (message: QueuedFollowUpMessage) => QueuedFollowUpMessage,
    ) => {
      if (!conversationId) {
        return;
      }
      syncMessages(
        (queuedFollowUpsRef.current[conversationId] ?? []).map((message) =>
          message.id === messageId ? updater(message) : message,
        ),
        "local-action",
      );
    },
    [conversationId, syncMessages],
  );
  const resumeMessagesByPausedReason = React.useCallback(
    (pausedReason: string) => {
      if (!conversationId) {
        return;
      }
      const currentMessages = queuedFollowUpsRef.current[conversationId] ?? [];
      let didResumeMessage = false;
      const nextMessages = currentMessages.map((message) => {
        if (message.pausedReason !== pausedReason) {
          return message;
        }
        didResumeMessage = true;
        const { pausedReason: _pausedReason, ...resumedMessage } = message;
        return resumedMessage;
      });
      if (didResumeMessage) {
        syncMessages(nextMessages, "local-action");
      }
    },
    [conversationId, syncMessages],
  );
  const reorder = React.useCallback(
    (messageIds: string[]) => {
      if (!conversationId) {
        return;
      }
      const currentMessages = queuedFollowUpsRef.current[conversationId] ?? [];
      if (currentMessages.length <= 1) {
        return;
      }
      const messagesById = keyMessagesById(currentMessages);
      const orderedMessages = uniq(messageIds)
        .map((messageId) => messagesById[messageId])
        .filter((message): message is QueuedFollowUpMessage => message != null);
      const orderedMessageIds = new Set(
        orderedMessages.map((message) => message.id),
      );
      syncMessages(
        [
          ...orderedMessages,
          ...currentMessages.filter(
            (message) => !orderedMessageIds.has(message.id),
          ),
        ],
        "local-action",
      );
    },
    [conversationId, syncMessages],
  );
  return {
    messages,
    actions: {
      enqueue,
      remove,
      update,
      resumeInterruptedSteers: () => {
        resumeMessagesByPausedReason(interruptedSteerPausedReason);
      },
      reorder,
    },
    isLoading,
  };
}

export function initQueuedFollowUpsStoreChunk(): void {}
