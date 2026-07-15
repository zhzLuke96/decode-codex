// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Submit/start handlers for the home (new-thread) composer.
//
// `useNewThreadSubmitHandlers` returns the two callbacks the composer body
// invokes: `handleSubmitLocal` (start a new local conversation, or send a
// follow-up / resume a cloud task when one is active) and
// `handleNewWorktreeConversation` (enqueue a pending worktree and navigate to
// worktree-init). `useStartConversationWithPrimaryRuntimeForFirstTurn` builds
// the low-level start-conversation request, opting into runtime prewarm for
// the very first local turn when eligible.
//
// Deep leaf dependencies (params builders, thread-goal lifecycle, follow-up /
// steer transport, browser-tab transfer, analytics, toast/error mapping) are
// forwarded through the onboarding-commons externals facade until their owning
// modules are restored.
import { startTransition } from "react";
import type { CollaborationMode } from "../collaboration/use-collaboration-mode";
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../boundaries/use-host-config.facade";
import { buildStartConversationParams } from "../utils/build-start-conversation-params";
import { materializeThreadGoalDraft } from "../threads/pending-worktree-store/thread-goal-materialize";
import type { CreatePendingWorktreeInput } from "../threads/pending-worktree-store/types";
import {
  afterLocalConversationCreated,
  appendUserMessageToConversation,
  attachThreadGoalObjectiveToConversation,
  browserSidebarAvailabilitySignal,
  buildComposerImageInputItems,
  buildConversationParamsFromContext,
  buildPriorConversationFromTask,
  buildRestoreMessageFromContext,
  buildWorktreeLabelFromInput,
  cleanupMaterializedThreadGoal,
  commitThreadGoalDraft,
  experimentalFeaturesQuery,
  getConversationBrowserTabIdsForTransfer,
  getLastFocusedBrowserTabId,
  getTaskErrorMessage,
  hotkeyWindowBridge,
  isHotkeyWindowContext,
  isPreparePrimaryRuntimeEnabled,
  isProjectlessWorkspaceRoots,
  localConversationTurnsSignal,
  localConversationWorkspaceKindSignal,
  logger,
  memoryPreferencesDraftAtom,
  newThreadFirstRunCompletedSignal,
  newThreadFirstRunStartedSignal,
  normalizeConversationAttachments,
  pendingWorktreeInitPath,
  projectContextQuerySignal,
  promptTextFromContext,
  promptTextFromObjective,
  recordNewThreadSubmitAnalytics,
  reserveProjectWorkspaceForFirstTurn,
  resolveProjectlessWorkspace,
  resolveServiceTierAndCollaborationMode,
  sendMessageToLocalConversation,
  steerLocalConversation,
  toastApiSignal,
  toUserMessageInput,
  updateConversationProjectContext,
  useAppScopeFamilyValue,
  useAppScopeValue,
  writePersistedValue,
} from "../boundaries/onboarding-commons-externals.facade";

const MULTI_AGENT_COMPOSER_BANNER_KEY = "has-seen-multi-agent-composer-banner";

/** Resolved local-preparation vs. thread-creation hosts for a new thread. */
interface ThreadCreationTargets {
  localPreparationHostId: string;
  threadCreationHostId: string;
  threadStartKind?: string | null;
}

function deriveThreadCreationTargets(
  _context: unknown,
  hostId: string,
): ThreadCreationTargets {
  return {
    localPreparationHostId: hostId,
    threadCreationHostId: hostId,
  };
}

function threadStartHostId({
  localPreparationHostId,
  threadCreationHostId,
}: ThreadCreationTargets): string | undefined {
  return threadCreationHostId === localPreparationHostId
    ? undefined
    : threadCreationHostId;
}

function markMultiAgentComposerBannerSeen(): void {
  if (location.pathname === "/") {
    writePersistedValue(MULTI_AGENT_COMPOSER_BANNER_KEY, true);
  }
}

interface ReserveWorkspaceOptions {
  hostId: string;
  prompt: string;
  projectlessPrewarmReservation: {
    reserve(prompt: string): {
      selection: Promise<{
        cwd: string | null;
        projectlessOutputDirectory: string | null;
        workspaceRoots: string[];
      }>;
    };
  };
  workspaceRoots: string[];
}

async function reserveWorkspaceForFirstTurn({
  hostId,
  prompt,
  projectlessPrewarmReservation,
  workspaceRoots,
}: ReserveWorkspaceOptions) {
  if (
    hostId === "local" &&
    workspaceRoots.length === 1 &&
    workspaceRoots[0] === "~"
  ) {
    try {
      return await projectlessPrewarmReservation.reserve(prompt).selection;
    } catch (error) {
      logger.warning("Failed to use reserved projectless workspace", {
        safe: {},
        sensitive: { error },
      });
      return resolveProjectlessWorkspace(workspaceRoots, { prompt });
    }
  }
  if (
    hostId !== "local" ||
    workspaceRoots.length !== 1 ||
    isProjectlessWorkspaceRoots(workspaceRoots)
  ) {
    return resolveProjectlessWorkspace(workspaceRoots, { prompt });
  }
  const projectId = workspaceRoots[0];
  return (
    (await reserveProjectWorkspaceForFirstTurn({ projectId, prompt })) ??
    resolveProjectlessWorkspace(workspaceRoots, { prompt })
  );
}

export interface StartConversationRequestInput {
  attachments: unknown[];
  baseParams: Record<string, unknown>;
  hostId?: string;
}

/**
 * Build the `start-conversation` request for a first turn, enabling runtime
 * prewarm when the host is local, the feature is enabled, and the new-thread
 * first-run flow has started but not yet completed.
 */
export function useStartConversationWithPrimaryRuntimeForFirstTurn() {
  const { data } = useAppScopeFamilyValue(
    experimentalFeaturesQuery,
    LOCAL_HOST_ID,
  ) as { data: unknown };
  const firstRunStarted = useAppScopeValue(
    newThreadFirstRunStartedSignal,
  ) as boolean;
  const firstRunCompleted = useAppScopeValue(
    newThreadFirstRunCompletedSignal,
  ) as boolean;
  return ({ attachments, baseParams, hostId }: StartConversationRequestInput) =>
    sendAppServerRequest("start-conversation", {
      hostId,
      ...baseParams,
      attachments,
      preparePrimaryRuntimeForFirstTurn:
        isPreparePrimaryRuntimeEnabled(data) &&
        hostId === "local" &&
        firstRunStarted &&
        !firstRunCompleted,
    });
}

interface PermissionOverrides {
  agentMode: unknown;
  permissionProfileId: unknown;
  shouldSendPermissionOverrides: boolean;
}

interface StartLocationOptions {
  workspaceRoots?: string[];
  hostId?: string;
  agentMode?: unknown;
  permissions?: PermissionOverrides;
}

interface SubmitResult {
  threadId: string;
  turnId: string | null;
}

export interface UseNewThreadSubmitHandlersOptions {
  scope: any;
  activeCollaborationMode: CollaborationMode;
  agentMode: unknown;
  permissionProfileId: unknown;
  shouldSendPermissionOverrides: boolean;
  browserConversationId?: string | null;
  clientThreadId?: string | null;
  createPendingWorktree: (input: CreatePendingWorktreeInput) => string;
  followUp?: { type?: "local" | "cloud"; [key: string]: unknown } | null;
  intl: unknown;
  isResponseInProgress: boolean;
  isMounted: () => boolean;
  mcpManager: unknown;
  navigate: (path: string) => void;
  onLocalConversationCreated?: (conversationId: string) => void | Promise<void>;
  onLocalSubmitError?: () => void;
  onLocalSubmitStart?: () => void;
  projectlessPrewarmReservation: ReserveWorkspaceOptions["projectlessPrewarmReservation"];
  resolvedHostId: string;
  serviceTier: unknown;
  setEffectiveCollaborationMode: (mode: CollaborationMode | null) => void;
  startConversationWithPrimaryRuntimeForFirstTurn: (
    input: StartConversationRequestInput,
  ) => Promise<string>;
  store: unknown;
}

export interface NewThreadSubmitHandlers {
  handleNewWorktreeConversation: (
    context: any,
    sourceWorkspaceRoot: string,
    startingState: unknown,
    localEnvironmentConfigPath: unknown,
    options?: StartLocationOptions,
  ) => Promise<void>;
  handleSubmitLocal: (
    context: any,
    cwd: string,
    startingState?: unknown,
    options?: StartLocationOptions,
    restoreMessage?: unknown,
  ) => Promise<SubmitResult | undefined>;
}

export function useNewThreadSubmitHandlers({
  scope,
  activeCollaborationMode,
  agentMode,
  permissionProfileId,
  shouldSendPermissionOverrides,
  browserConversationId,
  createPendingWorktree,
  followUp,
  intl,
  isResponseInProgress,
  isMounted,
  mcpManager,
  navigate,
  onLocalConversationCreated,
  onLocalSubmitError,
  onLocalSubmitStart,
  projectlessPrewarmReservation,
  resolvedHostId,
  serviceTier,
  setEffectiveCollaborationMode,
  startConversationWithPrimaryRuntimeForFirstTurn,
  store,
}: UseNewThreadSubmitHandlersOptions): NewThreadSubmitHandlers {
  const resolvePermissions = (
    options?: StartLocationOptions,
  ): PermissionOverrides =>
    options?.permissions ?? {
      agentMode,
      permissionProfileId,
      shouldSendPermissionOverrides,
    };

  const attachThreadGoalObjective = async (
    conversationId: string,
    hostId: string,
    objective: unknown,
  ) => {
    if (objective != null) {
      await attachThreadGoalObjectiveToConversation({
        scope,
        appendTranscriptItem: false,
        conversationId,
        hostId,
        intl,
        objective,
      });
    }
  };

  const materializeThreadGoal = async (context: any, hostId: string) => {
    if (context.threadGoalDraft == null) {
      return { context, goal: undefined };
    }
    const draft = context.threadGoalDraft;
    const materialized = await materializeThreadGoalDraft({ draft, hostId });
    const { threadGoalDraft: _threadGoalDraft, ...rest } = context;
    return {
      context: {
        ...rest,
        prompt: promptTextFromObjective(materialized.objective),
        pastedTextAttachments: [],
      },
      goal: { draft, materialized },
    };
  };

  const createLocalConversation = async (
    inputContext: any,
    cwd: string,
    skipNavigate: unknown,
    options?: StartLocationOptions,
  ): Promise<SubmitResult> => {
    const workspaceRoots = options?.workspaceRoots ??
      inputContext.workspaceRoots ?? ["~"];
    const isProjectless = isProjectlessWorkspaceRoots(workspaceRoots);
    const hostId = options?.hostId ?? resolvedHostId;
    const permissions = resolvePermissions(options);
    const { context, goal } = await materializeThreadGoal(inputContext, hostId);
    const threadTargets = deriveThreadCreationTargets(context, hostId);
    let created = false;
    const imageInputItems = buildComposerImageInputItems(
      context.imageAttachments,
    );
    const memoryPreferences = scope.get(memoryPreferencesDraftAtom);
    const promptText = promptTextFromContext(context);
    try {
      const reservation = await reserveWorkspaceForFirstTurn({
        hostId,
        prompt: promptText,
        projectlessPrewarmReservation,
        workspaceRoots,
      });
      const resolvedCwd = reservation.cwd ?? cwd;
      const tierAndMode = await resolveServiceTierAndCollaborationMode({
        activeCollaborationMode,
        context,
        hostId,
        scope,
        serviceTier,
      });
      const conversationParams = await buildConversationParamsFromContext({
        context,
        prompt: promptText,
        workspaceRoots: reservation.workspaceRoots,
        cwd: resolvedCwd,
        hostId,
        agentMode: permissions.agentMode,
        permissionProfileId: permissions.permissionProfileId,
        serviceTier: tierAndMode.serviceTier,
        collaborationMode: tierAndMode.collaborationMode,
        memoryPreferences: memoryPreferences ?? undefined,
        workspaceKind: isProjectless ? "projectless" : "project",
        projectlessOutputDirectory: reservation.projectlessOutputDirectory,
        projectAssignment: reservation.projectAssignment,
      });
      const startParams = buildStartConversationParams({
        ...conversationParams,
        shouldSendPermissionOverrides:
          permissions.shouldSendPermissionOverrides,
      });
      if (threadTargets.threadStartKind != null) {
        startParams.threadStartKind = threadTargets.threadStartKind;
      }
      const conversationId =
        await startConversationWithPrimaryRuntimeForFirstTurn({
          attachments: normalizeConversationAttachments([
            ...(startParams.attachments ?? []),
            ...imageInputItems,
          ]),
          baseParams: startParams,
          hostId: threadTargets.threadCreationHostId,
        });
      created = true;
      const turnId =
        scope.get(localConversationTurnsSignal, conversationId)?.at(-1)
          ?.turnId ?? null;
      afterLocalConversationCreated(
        scope,
        conversationId,
        memoryPreferences,
        conversationParams.config,
      );
      recordNewThreadSubmitAnalytics(store, conversationId, hostId);
      markMultiAgentComposerBannerSeen();
      setEffectiveCollaborationMode(null);
      if (!skipNavigate) {
        if (onLocalConversationCreated) {
          await onLocalConversationCreated(conversationId);
        } else if (isMounted()) {
          navigate(`/local/${conversationId}`);
        }
      }
      await attachThreadGoalObjective(
        conversationId,
        threadTargets.threadCreationHostId,
        goal?.materialized.objective,
      );
      if (goal != null) {
        await commitThreadGoalDraft({
          draft: goal.draft,
          fallbackHostId: hostId,
        });
      }
      return { threadId: conversationId, turnId };
    } catch (error) {
      if (goal != null && !created) {
        await cleanupMaterializedThreadGoal({
          hostId,
          materialized: goal.materialized,
        });
      }
      logger.error("Error creating local task", {
        safe: {},
        sensitive: { error },
      });
      const message = getTaskErrorMessage(error, intl);
      scope.get(toastApiSignal).danger(message, { id: "composer.taskError" });
      throw error;
    }
  };

  const handleNewWorktreeConversation = async (
    context: any,
    sourceWorkspaceRoot: string,
    startingState: unknown,
    localEnvironmentConfigPath: unknown,
    options?: StartLocationOptions,
  ): Promise<void> => {
    const workspaceRoots = options?.workspaceRoots ??
      context.workspaceRoots ?? [sourceWorkspaceRoot];
    const hostId = options?.hostId ?? resolvedHostId;
    const threadTargets = deriveThreadCreationTargets(context, hostId);
    const memoryPreferences = scope.get(memoryPreferencesDraftAtom);
    const promptText = promptTextFromContext(context);
    const conversationParams = await buildConversationParamsFromContext({
      context,
      prompt: promptText,
      workspaceRoots,
      cwd: sourceWorkspaceRoot,
      hostId,
      agentMode: options?.agentMode ?? agentMode,
      permissionProfileId,
      serviceTier,
      collaborationMode: activeCollaborationMode,
      memoryPreferences: memoryPreferences ?? undefined,
      workspaceKind: "project",
    });
    if (threadTargets.threadStartKind != null) {
      conversationParams.threadStartKind = threadTargets.threadStartKind;
    }
    let browserTransferSourceBrowserTabIds: string[] = [];
    let lastFocusedBrowserTabId: string | null = null;
    if (
      scope.value.routeKind === "home" &&
      browserConversationId != null &&
      scope.get(browserSidebarAvailabilitySignal)
    ) {
      browserTransferSourceBrowserTabIds =
        getConversationBrowserTabIdsForTransfer(scope, browserConversationId);
      if (browserTransferSourceBrowserTabIds.length > 0) {
        lastFocusedBrowserTabId = getLastFocusedBrowserTabId(
          scope,
          browserConversationId,
        );
      }
    }
    const browserTransferSourceBrowserTabId =
      lastFocusedBrowserTabId != null &&
      browserTransferSourceBrowserTabIds.includes(lastFocusedBrowserTabId)
        ? lastFocusedBrowserTabId
        : (browserTransferSourceBrowserTabIds.at(-1) ?? null);
    const pendingWorktreeId = createPendingWorktree({
      hostId,
      label: buildWorktreeLabelFromInput(conversationParams.input),
      ...(browserConversationId != null &&
      browserTransferSourceBrowserTabId != null
        ? {
            browserTransferSourceBrowserTabId,
            browserTransferSourceBrowserTabIds,
            browserTransferSourceConversationId: browserConversationId,
          }
        : {}),
      sourceWorkspaceRoot,
      startingState,
      localEnvironmentConfigPath,
      launchMode: "start-conversation",
      prompt: promptText,
      startConversationParamsInput: {
        ...conversationParams,
        shouldSendPermissionOverrides,
      },
      threadStartHostId: threadStartHostId(threadTargets),
      threadGoalDraft: context.threadGoalDraft,
      sourceConversationId: null,
      sourceCollaborationMode: null,
    } as CreatePendingWorktreeInput);
    scope.set(memoryPreferencesDraftAtom, null);
    markMultiAgentComposerBannerSeen();
    setEffectiveCollaborationMode(null);
    if (isHotkeyWindowContext()) {
      hotkeyWindowBridge.hotkeyWindowHotkeys?.open({
        path: pendingWorktreeInitPath(pendingWorktreeId),
      });
      return;
    }
    startTransition(() => {
      navigate(`/worktree-init-v2/${pendingWorktreeId}`);
    });
  };

  const refreshProjectContextForFollowUp = () => {
    if (
      followUp?.type !== "local" ||
      scope.value.routeKind !== "local-thread" ||
      scope.value.routeConversationId !== followUp.localConversationId ||
      scope.get(
        localConversationWorkspaceKindSignal,
        followUp.localConversationId,
      ) === "projectless"
    ) {
      return;
    }
    const conversationId = followUp.localConversationId;
    void (async () => {
      try {
        const projectContext = (
          await scope.get(projectContextQuerySignal).refetch()
        ).data;
        await updateConversationProjectContext(conversationId, projectContext);
      } catch {
        /* ignore */
      }
    })();
  };

  const sendFollowUpToLocalConversation = async (
    context: any,
    localFollowUp: any,
    cwd: string,
    restoreMessage: unknown,
  ): Promise<SubmitResult> => {
    const isFirstSideConversationTurn =
      scope.value.kind === "local" &&
      scope.value.placement === "side" &&
      scope.value.conversationId === localFollowUp.localConversationId &&
      (scope.get(
        localConversationTurnsSignal,
        localFollowUp.localConversationId,
      )?.length ?? 0) === 0;
    if (isResponseInProgress) {
      const turnId = await steerLocalConversation({
        scope,
        manager: mcpManager,
        hostId: resolvedHostId,
        targetConversationId: localFollowUp.localConversationId,
        agentMode,
        serviceTier,
        shouldSendPermissionOverrides,
        activeCollaborationMode,
        restoreMessage:
          restoreMessage ?? buildRestoreMessageFromContext({ context, cwd }),
      });
      refreshProjectContextForFollowUp();
      return { threadId: localFollowUp.localConversationId, turnId };
    }
    const turnId = await sendMessageToLocalConversation({
      scope,
      manager: mcpManager,
      hostId: resolvedHostId,
      context,
      targetConversationId: localFollowUp.localConversationId,
      cwd,
      agentMode,
      serviceTier,
      shouldSendPermissionOverrides,
      activeCollaborationMode,
      restoreMessage,
    });
    if (isFirstSideConversationTurn) {
      appendUserMessageToConversation(
        scope,
        localFollowUp.localConversationId,
        toUserMessageInput(promptTextFromContext(context)),
      );
    }
    refreshProjectContextForFollowUp();
    return { threadId: localFollowUp.localConversationId, turnId };
  };

  const resumeCloudTaskLocally = async (
    inputContext: any,
    cloudFollowUp: any,
    options?: StartLocationOptions,
  ): Promise<SubmitResult> => {
    const workspaceRoots = options?.workspaceRoots ??
      inputContext.workspaceRoots ?? ["~"];
    const isProjectless = isProjectlessWorkspaceRoots(workspaceRoots);
    const hostId = options?.hostId ?? resolvedHostId;
    const { context, goal } = await materializeThreadGoal(inputContext, hostId);
    const threadTargets = deriveThreadCreationTargets(context, hostId);
    let created = false;
    try {
      const priorConversation = buildPriorConversationFromTask(
        cloudFollowUp.selectedTurn &&
          cloudFollowUp.selectedTurn.id !==
            cloudFollowUp.taskDetails.current_assistant_turn?.id
          ? {
              ...cloudFollowUp.taskDetails,
              current_assistant_turn: cloudFollowUp.selectedTurn,
              current_diff_task_turn: cloudFollowUp.selectedTurn,
            }
          : cloudFollowUp.taskDetails,
      );
      const imageInputItems = buildComposerImageInputItems(
        context.imageAttachments,
      );
      const memoryPreferences = scope.get(memoryPreferencesDraftAtom);
      const promptText = promptTextFromContext({
        ...context,
        priorConversation,
      });
      const reservation = await reserveWorkspaceForFirstTurn({
        hostId,
        prompt: promptText,
        projectlessPrewarmReservation,
        workspaceRoots,
      });
      const resolvedCwd = reservation.cwd;
      if (!resolvedCwd) throw new Error("No project root found");
      const conversationParams = await buildConversationParamsFromContext({
        context,
        prompt: promptText,
        workspaceRoots: reservation.workspaceRoots,
        cwd: resolvedCwd,
        hostId,
        agentMode: options?.agentMode ?? agentMode,
        permissionProfileId,
        serviceTier,
        collaborationMode: activeCollaborationMode,
        memoryPreferences: memoryPreferences ?? undefined,
        workspaceKind: isProjectless ? "projectless" : "project",
        projectlessOutputDirectory: reservation.projectlessOutputDirectory,
        projectAssignment: reservation.projectAssignment,
      });
      const startParams = buildStartConversationParams({
        ...conversationParams,
        shouldSendPermissionOverrides,
      });
      if (threadTargets.threadStartKind != null) {
        startParams.threadStartKind = threadTargets.threadStartKind;
      }
      const conversationId = (await sendAppServerRequest("start-conversation", {
        hostId: threadTargets.threadCreationHostId,
        ...startParams,
        attachments: normalizeConversationAttachments([
          ...(startParams.attachments ?? []),
          ...imageInputItems,
        ]),
      })) as string;
      created = true;
      afterLocalConversationCreated(
        scope,
        conversationId,
        memoryPreferences,
        conversationParams.config,
      );
      setEffectiveCollaborationMode(null);
      if (onLocalConversationCreated) {
        await onLocalConversationCreated(conversationId);
      } else {
        navigate(`/local/${conversationId}`);
      }
      await attachThreadGoalObjective(
        conversationId,
        threadTargets.threadCreationHostId,
        goal?.materialized.objective,
      );
      if (goal != null) {
        await commitThreadGoalDraft({
          draft: goal.draft,
          fallbackHostId: hostId,
        });
      }
      return { threadId: conversationId, turnId: null };
    } catch (error) {
      if (goal != null && !created) {
        await cleanupMaterializedThreadGoal({
          hostId,
          materialized: goal.materialized,
        });
      }
      throw error;
    }
  };

  const handleSubmitLocal = async (
    context: any,
    cwd: string,
    startingState?: unknown,
    options?: StartLocationOptions,
    restoreMessage?: unknown,
  ): Promise<SubmitResult | undefined> => {
    const isNewLocalFollowUp =
      followUp?.type === "local" && !isResponseInProgress;
    if (isNewLocalFollowUp) onLocalSubmitStart?.();
    try {
      switch (followUp?.type) {
        case "local":
          return await sendFollowUpToLocalConversation(
            context,
            followUp,
            cwd,
            restoreMessage,
          );
        case "cloud":
          return await resumeCloudTaskLocally(context, followUp, options);
        case undefined:
          return await createLocalConversation(
            context,
            cwd,
            startingState,
            options,
          );
      }
    } catch (error) {
      if (isNewLocalFollowUp) onLocalSubmitError?.();
      throw error;
    }
  };

  return { handleNewWorktreeConversation, handleSubmitLocal };
}
