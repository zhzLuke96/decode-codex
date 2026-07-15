// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Hook helpers used by the split NewThreadComposerBody runtime.
import { useCallback, useState } from "react";
import { appScopeRoot, useAppScopeValue } from "../boundaries/app-scope";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { useHostRequest } from "../runtime/file-open-runtime";
import { getEffectiveRemoteHostId } from "../remote/local-remote-selection/remote-host";
import type { RemoteProject } from "../features/remote-projects";

type FollowUp = {
  localConversationId?: string;
  taskDetails?: { task?: { id?: string } };
  type?: string;
};

export function localExecutionTargetForScope(_conversationId: string | null) {
  return {
    cwd: null,
    hostConfig: { id: "local" },
    hostId: "local",
    isActiveWorkspaceRootLoading: false,
  };
}

export function resolveLocalExecutionRemoteHostId(input: {
  attachedRemoteHostId?: string | null;
  browserRemoteHostId?: string | null;
  followUpType?: string | null;
  forceDefaultHost?: boolean;
  selectedRemoteProjectHostId?: string | null;
}): string | null {
  if (input.forceDefaultHost === true) return null;
  return getEffectiveRemoteHostId(input);
}

export function resolveCurrentRemoteCwd({
  homeRunLocationRemoteProject,
  localConversationCwd,
  localExecutionRemoteHostId,
  selectedRemoteProject,
}: {
  homeRunLocationRemoteProject?: RemoteProject | null;
  localConversationCwd?: string | null;
  localExecutionRemoteHostId?: string | null;
  mcpManagerHostId?: string | null;
  selectedRemoteProject?: RemoteProject | null;
}): string | null {
  if (localExecutionRemoteHostId == null) return null;
  return (
    selectedRemoteProject?.remotePath ??
    homeRunLocationRemoteProject?.remotePath ??
    localConversationCwd ??
    null
  );
}

export function useCloudAccess() {
  return { access: "enabled" };
}

export function useCloudTaskCreation() {
  return {
    mutateAsync: (params: unknown) =>
      sendAppServerRequest("create-cloud-task", params as never),
  };
}

export function useCloudTaskFollowUp() {
  return {
    mutateAsync: (params: unknown) =>
      sendAppServerRequest("follow-up-to-cloud-task", params as never),
  };
}

export function useComposerLog(signal: unknown): unknown {
  return useAppScopeValue(signal);
}

export function useConversationPending(_hostId: string | null) {
  return { isPending: false };
}

export function useComposerRateLimitBanner(_options: { selectedModel?: unknown }) {
  return {
    isUsageBannerEnabled: false,
    modelLimitName: null,
    modelLimitResetAt: null,
    rateLimit: null,
    rateLimitWarningThreshold: null,
    showCoreRateLimitUpsell: false,
    showModelLimitBanner: false,
    showWorkspaceUsageLimitBanner: false,
  };
}

export function useFollowUpToConversation(followUp: FollowUp | null) {
  if (followUp?.type === "local") return followUp.localConversationId ?? null;
  if (followUp?.type === "cloud") return followUp.taskDetails?.task?.id ?? null;
  return null;
}

export function useHasPendingApproval(pendingApproval: unknown): boolean {
  return pendingApproval != null;
}

export function useMcpManagerForHost(conversationId: string | null) {
  return {
    getHostId: () => conversationId ?? "local",
  };
}

export function useOpenFileMutation(method: string = "open-file") {
  return useHostRequest(method);
}

export function useProjectAssignment({
  activeLocalProjectId,
  existingAssignment,
  homeRemoteProject,
  selectedRemoteProject,
}: {
  activeLocalProjectId?: string | null;
  existingAssignment?: unknown;
  homeRemoteProject?: unknown;
  selectedRemoteProject?: unknown;
}) {
  return (
    existingAssignment ??
    selectedRemoteProject ??
    homeRemoteProject ??
    activeLocalProjectId ??
    null
  );
}

export function useRemoteConnectivityStates(remoteConnections: unknown) {
  return Array.isArray(remoteConnections) ? new Map() : {};
}

export function useResolvedPendingApproval(): null {
  return null;
}

export function useStopTurnConfirmation({
  onStop,
}: {
  onStop?: () => void | Promise<void>;
  turnId?: string | null;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const clear = useCallback(() => setIsVisible(false), []);
  return {
    clearStopTurnConfirmation: clear,
    confirmStopTurn: () => setIsVisible(true),
    handleStop: () => {
      if (isVisible) {
        clear();
        void onStop?.();
      } else {
        setIsVisible(true);
      }
    },
    isStopTurnConfirmationVisible: isVisible,
  };
}

export function useWorktreeGitContext({
  worktreeRepoRoot,
  worktreeSourceCwd,
}: {
  worktreeRepoRoot?: string | null;
  worktreeSourceCwd?: string | null;
}) {
  const root = worktreeRepoRoot ?? worktreeSourceCwd ?? null;
  return {
    worktreeGitContextRoot: root,
    workspaceRootForSubmit: worktreeSourceCwd ?? root,
  };
}

void appScopeRoot;
