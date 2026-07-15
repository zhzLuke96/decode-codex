// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Home page composer. Renders the shared new-thread composer body inside a
// composer scope provider and wires up submit/stop handlers, collaboration
// modes, service-tier settings, and the above-composer portals used by the home
// surface (extension, browser, and Electron shells).
import { useLayoutEffect, useState, type ReactNode } from "react";
import { useIntl } from "../vendor/react-intl";
import {
  aboveComposerPortalId,
  aboveComposerQueuePortalId,
} from "./composer-portals";
import {
  activeFollowUpAtom,
  composerDraftTextAtom,
  getComposerRemountKey,
  isDraftThreadId,
  isPromptDraftText,
} from "./composer-atoms";
import { classNames as clsx } from "../utils/class-names";
import {
  ComposerStoreContext,
  createComposerStore,
  useComposerStore,
} from "./composer-store";
import { composerScope } from "./composer-scope-runtime";
import { createProjectlessPrewarmReservation } from "./projectless-prewarm-reservation";
import { sendAppServerRequest as dispatchLocalRuntimeCommand } from "../boundaries/use-host-config.facade";
import {
  isDefaultCollaborationMode,
  isPlanCollaborationMode,
  runTogglePlanMode,
} from "./collaboration-modes";
import { NewThreadComposerBody } from "./new-thread-composer-body";
import { settingsAtoms, useSettingValue } from "./composer-settings";
import { usePermissionsMode as useAgentModeSettings } from "../utils/use-permissions-mode/use-permissions-mode";
import { useCancelTaskMutation as useCancelCloudTaskMutation } from "../runtime/codex-api";
import { useCollaborationMode as useCollaborationModes } from "../collaboration/use-collaboration-mode";
import { useCreatePendingWorktree } from "../threads/use-create-pending-worktree";
import { useIsMounted } from "../utils/use-is-mounted";
import { useAppServerManager as useMcpManager } from "../app-server/app-server-manager-hooks/registry";
import { useNavigate } from "../conversations/local-conversation-route-runtime";
import {
  useNewThreadSubmitHandlers,
  useStartConversationWithPrimaryRuntimeForFirstTurn,
} from "./new-thread-submit-handlers";
import { useRegisterCommand } from "../utils/use-register-command";
import {
  useScopeConversationId,
  useScopedAtomValue,
  useScopedQuery,
  useScopeStore,
} from "./composer-scope-hooks";
import { useServiceTierSettings } from "./use-service-tier-settings";
// resolvedHostIdQuery still lives in the thread-context-inputs runtime (not yet
// scoped for restore); keep it on the boundary facade until that chunk is drained.
import { resolvedHostIdQuery } from "../boundaries/onboarding-commons-externals.facade";

export type ComposerLayoutMode =
  | "multiline"
  | "auto-single-line"
  | "single-line";
export type AboveComposerContentLayout = "floating" | "header";
export type ComposerExternalFooterVariant = "default" | "home";
export type ComposerFooterBranchVisibility = "local" | "always";
export type LocalWorkspaceMaterialization =
  | "available"
  | "loading"
  | "restorable"
  | "unavailable"
  | "gone";

export interface HomeRunLocationRemoteProject {
  id?: string | null;
  hostId?: string | null;
  label?: string | null;
  remotePath?: string | null;
}

export interface HomeComposerProps {
  browserConversationId?: string | null;
  className?: string;
  aboveComposerContent?: ReactNode;
  aboveComposerContentLayout?: AboveComposerContentLayout;
  belowComposerContent?: (context?: unknown) => ReactNode;
  isResponseInProgress?: boolean;
  showWorkspaceDropdownInFooter?: boolean;
  showExternalFooter?: boolean;
  externalFooterVariant?: ComposerExternalFooterVariant;
  surfaceClassName?: string;
  showFooterBranchWhen?: ComposerFooterBranchVisibility;
  freeUpsellButton?: ReactNode;
  onLocalConversationCreated?: (
    conversationId: string,
    state: unknown,
  ) => void | Promise<void>;
  onLocalSubmitStart?: () => void;
  onLocalSubmitError?: (error: unknown) => void;
  hideArtifactPluginSuggestions?: boolean;
  showPlanKeywordSuggestion?: boolean;
  hideRunLocationDropdownOverride?: boolean;
  composerModeAvailability?: unknown;
  placeholderText?: string;
  composerLayoutMode?: ComposerLayoutMode;
  hotkeyWindowHomeFooterControls?: ReactNode;
  homeRunLocationRemoteProject?: HomeRunLocationRemoteProject | null;
  defaultCwd?: string | null;
  lockedCollaborationMode?: unknown;
  localWorkspaceMaterialization?: LocalWorkspaceMaterialization;
  onCreateSideConversation?: (...args: unknown[]) => void;
}

interface NewThreadComposerScopeProviderProps {
  children: ReactNode;
  defaultText: unknown;
  defaultTextKind?: "plain" | "prompt";
}

function NewThreadComposerScopeProvider({
  children,
  defaultText,
  defaultTextKind = "plain",
}: NewThreadComposerScopeProviderProps) {
  const enterBehavior = useSettingValue(settingsAtoms.composerEnterBehavior);
  const [store] = useState(() =>
    createComposerStore(defaultText, {
      defaultTextKind,
      enableSelectedTextLinks: true,
    }),
  );
  useLayoutEffect(() => {
    store.setEnterBehavior(enterBehavior);
  }, [store, enterBehavior]);
  return (
    <ComposerStoreContext.Provider value={store}>
      {children}
    </ComposerStoreContext.Provider>
  );
}

export function HomeComposer({
  browserConversationId,
  className,
  aboveComposerContent,
  aboveComposerContentLayout = "floating",
  belowComposerContent,
  isResponseInProgress = false,
  showWorkspaceDropdownInFooter = true,
  showExternalFooter = true,
  externalFooterVariant = "default",
  surfaceClassName,
  showFooterBranchWhen = "local",
  freeUpsellButton,
  onLocalConversationCreated,
  onLocalSubmitStart,
  onLocalSubmitError,
  hideArtifactPluginSuggestions = false,
  showPlanKeywordSuggestion = true,
  hideRunLocationDropdownOverride = false,
  composerModeAvailability,
  placeholderText,
  composerLayoutMode = "multiline",
  hotkeyWindowHomeFooterControls,
  homeRunLocationRemoteProject,
  defaultCwd,
  lockedCollaborationMode,
  localWorkspaceMaterialization = "available",
  onCreateSideConversation,
}: HomeComposerProps) {
  const scope = useScopeStore(composerScope);
  const [projectlessPrewarmReservation] = useState(
    createProjectlessPrewarmReservation,
  );
  const clientThreadId =
    scope.value.kind === "new" && isDraftThreadId(scope.value.clientThreadId)
      ? scope.value.clientThreadId
      : null;
  const intl = useIntl();
  const navigate = useNavigate();
  const isMounted = useIsMounted();
  const activeFollowUp = useScopedAtomValue(activeFollowUpAtom);
  const composerRemountKey = getComposerRemountKey(scope.value);
  const defaultText = scope.get(composerDraftTextAtom);
  const conversationId = useScopeConversationId(scope);
  const mcpManager = useMcpManager(conversationId);
  const resolvedHostId = useScopedQuery(resolvedHostIdQuery, conversationId);
  const { createPendingWorktree } = useCreatePendingWorktree();
  const cancelCloudTaskMutation = useCancelCloudTaskMutation();
  const [stoppingTurnId, setStoppingTurnId] = useState<string | null>(null);
  const { activeMode, modes, setSelectedMode, isLoading } =
    useCollaborationModes(conversationId, lockedCollaborationMode);
  const setEffectiveCollaborationMode = (mode: unknown) => {
    if (lockedCollaborationMode == null) setSelectedMode(mode);
  };
  const hasPlanMode = modes.some(isPlanCollaborationMode);
  const hasDefaultMode = modes.some(isDefaultCollaborationMode);
  const togglePlanMode = () => {
    runTogglePlanMode({
      hasPlanMode,
      hasDefaultMode,
      isPlanMode: activeMode.mode === "plan",
      setSelectedMode: setEffectiveCollaborationMode,
    });
  };
  const canTogglePlanMode =
    !isLoading && hasPlanMode && lockedCollaborationMode == null;
  useRegisterCommand("composer.togglePlanMode", togglePlanMode, {
    enabled: canTogglePlanMode,
  });
  const { serviceTierSettings } = useServiceTierSettings(conversationId);
  const { agentMode, permissionProfileId, shouldSendPermissionOverrides } =
    useAgentModeSettings({ conversationId, hostId: resolvedHostId });
  const store = useComposerStore();
  const startConversationWithPrimaryRuntimeForFirstTurn =
    useStartConversationWithPrimaryRuntimeForFirstTurn();
  const { handleNewWorktreeConversation, handleSubmitLocal } =
    useNewThreadSubmitHandlers({
      scope,
      activeCollaborationMode: activeMode,
      agentMode,
      permissionProfileId,
      shouldSendPermissionOverrides,
      browserConversationId,
      clientThreadId,
      createPendingWorktree,
      followUp: activeFollowUp,
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
      serviceTier: serviceTierSettings.serviceTierForRequest,
      setEffectiveCollaborationMode,
      startConversationWithPrimaryRuntimeForFirstTurn,
      store,
    });

  const handleStop = async () => {
    if (activeFollowUp?.type === "local") {
      await dispatchLocalRuntimeCommand("interrupt-conversation", {
        conversationId: activeFollowUp.localConversationId,
        initiatedBy: "user",
      });
      return;
    }
    if (activeFollowUp?.type === "cloud") {
      setStoppingTurnId(
        activeFollowUp.taskDetails.current_assistant_turn?.id ?? null,
      );
      try {
        await cancelCloudTaskMutation.mutateAsync(
          activeFollowUp.taskDetails.task.id,
        );
      } catch (error) {
        setStoppingTurnId(null);
        throw error;
      }
    }
  };

  const rootClassName = clsx("min-w-0", className);
  const aboveComposerConversationId = conversationId ?? undefined;
  const aboveComposerPortal = (
    <div
      id={aboveComposerPortalId}
      data-above-composer-portal={true}
      data-above-composer-conversation-id={aboveComposerConversationId}
      className="relative px-5 empty:hidden"
    />
  );
  const aboveComposerQueuePortal = (
    <div
      id={aboveComposerQueuePortalId}
      data-above-composer-queue-portal={true}
      data-above-composer-conversation-id={aboveComposerConversationId}
      className="relative px-5 empty:hidden"
    />
  );
  const defaultTextKind = isPromptDraftText(defaultText) ? "prompt" : "plain";
  const floatingAboveComposerContent =
    hotkeyWindowHomeFooterControls == null &&
    aboveComposerContent &&
    aboveComposerContentLayout === "floating" ? (
      <div className="px-5 pb-2 empty:hidden">{aboveComposerContent}</div>
    ) : null;
  const headerAboveComposerContent =
    hotkeyWindowHomeFooterControls == null &&
    aboveComposerContent &&
    aboveComposerContentLayout === "header"
      ? aboveComposerContent
      : undefined;
  const isStopping =
    activeFollowUp?.type === "cloud" &&
    isResponseInProgress &&
    activeFollowUp.taskDetails.current_assistant_turn?.id === stoppingTurnId;

  const composerBody = (
    <NewThreadComposerBody
      aboveComposerHeaderContent={headerAboveComposerContent}
      belowComposerContent={belowComposerContent}
      activeCollaborationMode={activeMode}
      browserConversationId={browserConversationId}
      collaborationModes={modes}
      serviceTier={serviceTierSettings.serviceTierForRequest}
      setSelectedCollaborationMode={setEffectiveCollaborationMode}
      isResponseInProgress={isResponseInProgress}
      onSubmitLocal={handleSubmitLocal}
      onSubmitWorktree={handleNewWorktreeConversation}
      onStop={handleStop}
      isStopping={isStopping}
      showWorkspaceDropdownInFooter={showWorkspaceDropdownInFooter}
      showExternalFooter={showExternalFooter}
      externalFooterVariant={externalFooterVariant}
      hideRunLocationDropdownOverride={hideRunLocationDropdownOverride}
      hideArtifactPluginSuggestions={hideArtifactPluginSuggestions}
      showPlanKeywordSuggestion={showPlanKeywordSuggestion}
      composerModeAvailability={composerModeAvailability}
      placeholderText={placeholderText}
      composerLayoutMode={composerLayoutMode}
      hotkeyWindowHomeFooterControls={hotkeyWindowHomeFooterControls}
      homeRunLocationRemoteProject={homeRunLocationRemoteProject}
      defaultCwd={defaultCwd}
      localWorkspaceMaterialization={localWorkspaceMaterialization}
      surfaceClassName={surfaceClassName}
      showFooterBranchWhen={showFooterBranchWhen}
      freeUpsellButton={freeUpsellButton}
      onCreateSideConversation={onCreateSideConversation}
      projectlessPrewarmReservation={projectlessPrewarmReservation}
    />
  );

  return (
    <div className={rootClassName}>
      {aboveComposerPortal}
      {aboveComposerQueuePortal}
      <NewThreadComposerScopeProvider
        key={composerRemountKey}
        defaultText={defaultText}
        defaultTextKind={defaultTextKind}
      >
        {floatingAboveComposerContent}
        {composerBody}
      </NewThreadComposerScopeProvider>
    </div>
  );
}
