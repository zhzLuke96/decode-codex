// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~ovcriy74-BgNrphm6.js
// Conversation fork and pending-worktree actions used by sidebar project flows.
import { resolveLocalEnvironmentSelection } from "./local-environments";
import {
  createSignalToken,
  type ForkConversationStore,
  type LocalEnvironmentConfig,
  type LocalEnvironmentSelectionState,
  type PendingWorktreeForkOptions,
} from "./types";

export function seedWorktreeProjectRootQuery(
  queryHost: {
    query?: {
      snapshot?: (
        key: unknown,
        options: unknown,
      ) => {
        invalidate(): void;
        setData(value: unknown): void;
      };
    };
  },
  workspaceRoot: { commonDir?: string; root: string },
  hostConfig: unknown,
  value: unknown,
  operationSource: string,
): void {
  const snapshot = queryHost.query?.snapshot?.("workspace-root-options", {
    commonDir: workspaceRoot.commonDir,
    hostConfig,
    key: "workspace-root-options",
    operationSource,
    root: workspaceRoot.root,
    scope: "worktree",
  });
  snapshot?.setData({ value });
  snapshot?.invalidate();
}

export async function forkLocalConversationFromLatestTurn(
  store: ForkConversationStore,
  {
    sourceConversationId,
    sourceWorkspaceRoot,
  }: {
    sourceConversationId: string | null;
    sourceWorkspaceRoot?: string | null;
  },
): Promise<string | null> {
  if (sourceConversationId == null) return null;
  try {
    const hostId = readStoreValue<string | null>(
      store,
      "conversation-host-id",
      sourceConversationId,
    );
    const collaborationMode = readStoreValue<string | null>(
      store,
      "conversation-collaboration-mode",
      sourceConversationId,
    );
    const targetConversationId = await store.request?.<string>(
      "fork-conversation-from-latest",
      {
        collaborationMode,
        conversationId: sourceConversationId,
        cwd: sourceWorkspaceRoot ?? undefined,
        hostId,
        workspaceRoots:
          sourceWorkspaceRoot == null ? undefined : [sourceWorkspaceRoot],
      },
    );
    return targetConversationId ?? null;
  } catch {
    store.toast?.danger("Could not fork the conversation.");
    return null;
  }
}

export async function createPendingWorktreeForkFromConversation(
  store: ForkConversationStore,
  {
    localEnvironmentSelectionsByWorkspace,
    sourceConversationId,
    sourceWorkspaceRoot,
  }: PendingWorktreeForkOptions,
): Promise<string | null> {
  if (sourceConversationId == null || sourceWorkspaceRoot == null) return null;
  try {
    const hostId =
      readStoreValue<string | null>(
        store,
        "conversation-host-id",
        sourceConversationId,
      ) ?? "local";
    const localEnvironmentConfigPath = await resolveForkLocalEnvironmentPath({
      hostId,
      localEnvironmentSelectionsByWorkspace,
      sourceWorkspaceRoot,
      store,
    });
    return (
      (await store.request?.<string>("create-pending-worktree", {
        hostId,
        launchMode: "fork-conversation",
        localEnvironmentConfigPath,
        sourceConversationId,
        sourceWorkspaceRoot,
      })) ?? null
    );
  } catch {
    store.toast?.danger("Could not create a worktree for the conversation.");
    return null;
  }
}

export function initForkConversationActionsChunk(): void {}

async function resolveForkLocalEnvironmentPath({
  hostId,
  localEnvironmentSelectionsByWorkspace,
  sourceWorkspaceRoot,
  store,
}: {
  hostId: string;
  localEnvironmentSelectionsByWorkspace: LocalEnvironmentSelectionState;
  sourceWorkspaceRoot: string;
  store: ForkConversationStore;
}): Promise<string | null> {
  try {
    const response = await store.request?.<{
      environments: LocalEnvironmentConfig[];
    }>("local-environments", {
      params: { hostId, workspaceRoot: sourceWorkspaceRoot },
    });
    return resolveLocalEnvironmentSelection({
      canValidateSelection: true,
      environments: response?.environments ?? [],
      hostId,
      selectionsByWorkspace: localEnvironmentSelectionsByWorkspace,
      workspaceRoot: sourceWorkspaceRoot,
    }).resolvedConfigPath;
  } catch {
    return resolveLocalEnvironmentSelection({
      canValidateSelection: false,
      environments: [],
      hostId,
      selectionsByWorkspace: localEnvironmentSelectionsByWorkspace,
      workspaceRoot: sourceWorkspaceRoot,
    }).resolvedConfigPath;
  }
}

function readStoreValue<TValue>(
  store: ForkConversationStore,
  key: string,
  parameter: unknown,
): TValue | null {
  try {
    return store.get(createSignalToken<TValue | null>(key, null), parameter);
  } catch {
    return null;
  }
}
