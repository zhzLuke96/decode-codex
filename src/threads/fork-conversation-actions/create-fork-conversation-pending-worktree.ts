// Restored from ref/webview/assets/chat-reply-plus-HRBzDa8r.js
// chat-reply-plus-HRBzDa8r chunk restored from the Codex webview bundle.
import { conversationHostIdByConversationIdSignal } from "../../boundaries/thread-context-inputs.facade";
import { callCodexVscodeApi } from "../../boundaries/vscode-api";
import { resolveLocalEnvironmentSelection } from "../../environments/local-environment-selection";
import { appIntlSignal } from "../../utils/app-intl-signal";
import { threadActionMessages } from "../thread-actions";
import {
  getSourceCollaborationMode,
  showThreadActionError,
} from "./fork-conversation-from-latest";
import type {
  AppScopeReader,
  CreateForkConversationPendingWorktreeOptions,
  GitOriginsResponse,
  IntlShapeLike,
  LocalEnvironmentsResponse,
  ResolveSourceEnvironmentConfigPathOptions,
} from "./types";
export async function createForkConversationPendingWorktree(
  appScope: AppScopeReader,
  {
    createPendingWorktree,
    localEnvironmentSelectionsByWorkspace,
    sourceConversationId,
    sourceWorkspaceRoot,
  }: CreateForkConversationPendingWorktreeOptions,
) {
  if (sourceConversationId == null || sourceWorkspaceRoot == null) return null;
  const hostId = appScope.get<string>(
    conversationHostIdByConversationIdSignal,
    sourceConversationId,
  );
  const gitOrigins = (await callCodexVscodeApi("git-origins", {
    params: {
      dirs: [sourceWorkspaceRoot],
      hostId,
    },
    source: "fork_conversation_actions",
  })) as GitOriginsResponse;
  if (findWorkspaceGitRoot(gitOrigins, sourceWorkspaceRoot) == null) {
    showThreadActionError(
      appScope,
      threadActionMessages.forkThreadRequiresGitRepo,
    );
    return null;
  }
  const localEnvironmentConfigPath = await resolveSourceEnvironmentConfigPath({
    hostId,
    localEnvironmentSelectionsByWorkspace,
    sourceWorkspaceRoot,
  });
  const intl = appScope.get<IntlShapeLike>(appIntlSignal);
  const sourceCollaborationMode = getSourceCollaborationMode(
    appScope,
    sourceConversationId,
  );
  return createPendingWorktree({
    hostId,
    label: intl.formatMessage(threadActionMessages.forkPendingWorktreeTitle),
    sourceWorkspaceRoot,
    startingState: {
      type: "working-tree",
    },
    localEnvironmentConfigPath,
    launchMode: "fork-conversation",
    prompt: intl.formatMessage(threadActionMessages.forkPendingWorktreePrompt),
    startConversationParamsInput: null,
    sourceConversationId,
    sourceCollaborationMode,
    targetTurnId: null,
  });
}
function findWorkspaceGitRoot(
  gitOrigins: GitOriginsResponse,
  sourceWorkspaceRoot: string,
) {
  return (
    gitOrigins.origins.find((origin) => origin.dir === sourceWorkspaceRoot)
      ?.root ??
    gitOrigins.origins[0]?.root ??
    null
  );
}
async function resolveSourceEnvironmentConfigPath({
  hostId,
  localEnvironmentSelectionsByWorkspace,
  sourceWorkspaceRoot,
}: ResolveSourceEnvironmentConfigPathOptions) {
  const resolvedHostId = hostId ?? "local";
  try {
    const { environments } = (await callCodexVscodeApi("local-environments", {
      params: {
        hostId: resolvedHostId,
        workspaceRoot: sourceWorkspaceRoot,
      },
    })) as LocalEnvironmentsResponse;
    return resolveLocalEnvironmentSelection({
      canValidateSelection: true,
      environments,
      hostId: resolvedHostId,
      selectionsByWorkspace: localEnvironmentSelectionsByWorkspace,
      workspaceRoot: sourceWorkspaceRoot,
    }).resolvedConfigPath;
  } catch {
    return resolveLocalEnvironmentSelection({
      canValidateSelection: false,
      environments: [],
      hostId: resolvedHostId,
      selectionsByWorkspace: localEnvironmentSelectionsByWorkspace,
      workspaceRoot: sourceWorkspaceRoot,
    }).resolvedConfigPath;
  }
}
