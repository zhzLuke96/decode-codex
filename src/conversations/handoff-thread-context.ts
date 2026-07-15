// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Source thread loading and validation for thread handoff.

import type { HandoffHostConfig } from "./available-handoff-hosts";
import { serviceClientForHost } from "../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import {
  composerPendingEditCountAtom,
  readSharedValue,
  sharedStateKeys,
  toWorkspaceRootPath,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  HANDOFF_OPERATION_SOURCE,
  type AppScope,
  type AppServerRegistry,
  type HandoffContext,
} from "./handoff-thread-types";

export type LoadHandoffContextOptions = {
  scope: AppScope;
  appServerRegistry: AppServerRegistry;
  operationId: string;
  hosts: HandoffHostConfig[];
  queryClient: unknown;
  threadId: string;
};

export async function loadHandoffContext({
  scope,
  appServerRegistry,
  operationId,
  hosts,
  queryClient,
  threadId,
}: LoadHandoffContextOptions): Promise<HandoffContext> {
  const manager =
    appServerRegistry.getMaybeForConversationId(threadId) ??
    appServerRegistry.getDefault();
  await sendAppServerRequest("maybe-resume-conversation", {
    hostId: manager.getHostId(),
    conversationId: threadId,
    model: null,
    serviceTier: null,
    reasoningEffort: null,
    workspaceRoots: ["/"],
    collaborationMode: null,
    showThreadGoalResumeConfirmation: false,
  });
  const conversation = manager.getConversation(threadId);
  if (conversation == null) {
    throw Error(`Thread ${threadId} could not be loaded for handoff.`);
  }
  const queuedFollowUps = readSharedValue(
    scope.get,
    sharedStateKeys.QUEUED_FOLLOW_UPS,
  );
  if (
    scope.get(composerPendingEditCountAtom, threadId) > 0 ||
    (queuedFollowUps?.[threadId]?.length ?? 0) > 0
  ) {
    throw Error(
      `Thread ${threadId} has pending composer state. Send or remove it before handing the thread off.`,
    );
  }
  const cwd = conversation.cwd?.trim() ?? "";
  if (cwd.length === 0) {
    throw Error(`Thread ${threadId} does not have a workspace to hand off.`);
  }
  const hostConfig = hosts.find((host) => host.id === manager.getHostId());
  if (hostConfig == null) {
    throw Error(`The source host for thread ${threadId} is not available.`);
  }
  const workspaceRoot = toWorkspaceRootPath(cwd);
  const gitMetadata = await serviceClientForHost("git").request({
    method: "stable-metadata",
    params: {
      cwd: workspaceRoot,
      hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  if (gitMetadata == null) {
    throw Error("The source thread workspace is not a git repository.");
  }
  const { branch } = await serviceClientForHost("git").request({
    method: "current-branch",
    params: {
      root: gitMetadata.root,
      hostConfig,
      operationSource: HANDOFF_OPERATION_SOURCE,
    },
  });
  const title = conversation.title?.trim() ?? "";
  return {
    operationId,
    scope,
    queryClient,
    threadId,
    threadTitle: title.length > 0 ? title : threadId,
    conversation,
    manager,
    hostConfig,
    cwd: workspaceRoot,
    gitRoot: gitMetadata.root,
    currentBranch: branch,
  };
}
