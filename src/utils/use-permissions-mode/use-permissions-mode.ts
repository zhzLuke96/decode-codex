// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import { useAtom } from "jotai";
import {
  appScopeA as useAppScopeFamilyValue,
  appScopeO as useAppScopeStore,
  appScopeS as useAppScopeValue,
  appScopeT as appScopeRoot,
} from "../../boundaries/app-scope";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import {
  A as conversationCwdSignal,
  n as threadWorkspaceContextSignal,
} from "../../boundaries/thread-context-inputs.facade";
import {
  buildPermissionOverridesForAgentMode,
  getAllowedAgentModes,
  getAllowedBaseAgentModes,
  serializeThreadPermissionSettings,
} from "../../boundaries/src-l0hb-mz-p";
import { vscodeApiH as logger } from "../../boundaries/vscode-api";
import { agentModeByHostIdAtom } from "../permissions-mode-defaults";
import { useThreadDetailLevel } from "../thread-detail-level";
import { usePermissionsConfigData } from "./config-data";
import { UNSET_PERMISSION_PROFILE_ID } from "./constants";
import {
  getConfigAwareDefaultAgentMode,
  getDetailLevelDefaultAgentMode,
  permissionProfileIdToAgentMode,
  canAgentModeUseOverrides,
  resolveDefaultAgentModeForHost,
} from "./mode-rules";
import {
  draftAgentModeAtom,
  draftHasSetInitialAgentModeAtom,
  getThreadPermissionSelection,
  pendingThreadAgentModeAtomFamily,
  resolvePermissionStateTarget,
  temporaryPermissionProfileByCwdSignal,
} from "./state";
import {
  permissionProfilesQuery,
  selectAvailablePermissionProfiles,
} from "./permission-profiles";
import type {
  AgentMode,
  AgentModeByHostId,
  AppScopeStore,
  PermissionProfileId,
  QueryResult,
  SettableValue,
  ThreadDetailLevel,
  UsePermissionsModeOptions,
  UsePermissionsModeResult,
  WorkspaceContext,
} from "./types";
export function usePermissionsMode({
  conversationId,
  cwdOverride,
  hostId,
  stateScope = "composer",
}: UsePermissionsModeOptions): UsePermissionsModeResult {
  const appScopeStore = useAppScopeStore(appScopeRoot) as AppScopeStore;
  const conversationCwd = useAppScopeFamilyValue(
    conversationCwdSignal,
    conversationId,
  ) as string | null | undefined;
  const { data: workspaceContext } = useAppScopeValue(
    threadWorkspaceContextSignal,
  ) as QueryResult<WorkspaceContext>;
  const hasExplicitCwdOverride = cwdOverride !== undefined;
  const cwd = hasExplicitCwdOverride
    ? (cwdOverride ?? null)
    : (conversationCwd ?? workspaceContext?.roots?.[0] ?? null);
  const isCwdRequiredButMissing = hasExplicitCwdOverride && cwd == null;
  const detailLevel = useThreadDetailLevel() as ThreadDetailLevel;
  const configData = usePermissionsConfigData({
    conversationId,
    cwdOverride,
    hostId,
  });
  const permissionProfilesQueryState = useAppScopeFamilyValue(
    permissionProfilesQuery,
    {
      hostId,
      cwd,
    },
  ) as QueryResult<
    Array<{
      id: string;
    }>
  >;
  const arePermissionProfilesPending =
    permissionProfilesQueryState.isPending === true ||
    permissionProfilesQueryState.isError === true;
  const availableProfiles =
    permissionProfilesQueryState.data == null
      ? null
      : selectAvailablePermissionProfiles(
          permissionProfilesQueryState.data,
          configData.requirements,
          typeof configData.resolvedConfig?.default_permissions === "string"
            ? configData.resolvedConfig.default_permissions
            : null,
        );
  const detailDefaultMode = getConfigAwareDefaultAgentMode(
    detailLevel,
    configData,
  );
  const profileDefaultMode = permissionProfileIdToAgentMode(
    availableProfiles?.defaultProfileId,
    getDetailLevelDefaultAgentMode(detailLevel, configData),
  );
  const customDefaultPermissionProfileId =
    profileDefaultMode == null
      ? (availableProfiles?.defaultProfileId ?? null)
      : null;
  const configFallbackMode = profileDefaultMode ?? detailDefaultMode;
  const allowedAgentModes = getAllowedAgentModes(
    configData.requirements,
    configData.resolvedConfig,
  ) as AgentMode[];
  const requiresExplicitPermissionProfile =
    availableProfiles != null &&
    availableProfiles.profiles.length > 1 &&
    configData.requirements?.allowedPermissionProfiles != null &&
    (getAllowedBaseAgentModes(configData.requirements) as AgentMode[])
      .length === 0 &&
    customDefaultPermissionProfileId == null;
  const hasNoPermissionOverrides =
    !configData.isConfigDataPending &&
    !requiresExplicitPermissionProfile &&
    customDefaultPermissionProfileId == null &&
    allowedAgentModes.length === 0;
  const stateTarget = resolvePermissionStateTarget({
    conversationId,
    stateScope,
  });
  const isProjectlessComposerDraft =
    conversationId == null && stateScope === "composer";
  const [defaultAgentModeByHostId, setDefaultAgentModeByHostId] = useAtom(
    agentModeByHostIdAtom,
  ) as [AgentModeByHostId, (value: AgentModeByHostId) => void];
  const [draftAgentMode, setDraftAgentMode] = useAtom(draftAgentModeAtom) as [
    SettableValue<AgentMode>,
    (value: SettableValue<AgentMode>) => void,
  ];
  const temporaryProfileByCwd = useAppScopeValue(
    temporaryPermissionProfileByCwdSignal,
  ) as Record<string, SettableValue<PermissionProfileId>>;
  const profileStateKey = JSON.stringify([hostId, cwd]);
  const temporaryProfileEntry =
    temporaryProfileByCwd[profileStateKey] ?? UNSET_PERMISSION_PROFILE_ID;
  const temporaryPermissionProfileId = temporaryProfileEntry.isSet
    ? temporaryProfileEntry.value
    : customDefaultPermissionProfileId;
  const setTemporaryPermissionProfileId = (
    permissionProfileId: PermissionProfileId,
  ) => {
    appScopeStore.set(
      temporaryPermissionProfileByCwdSignal,
      (
        current: Record<string, SettableValue<PermissionProfileId>>,
      ): Record<string, SettableValue<PermissionProfileId>> => ({
        ...current,
        [profileStateKey]: {
          isSet: true,
          value: permissionProfileId,
        },
      }),
    );
  };
  const [hasSetDraftAgentMode, setHasSetDraftAgentMode] = useAtom(
    draftHasSetInitialAgentModeAtom,
  ) as [boolean, (value: boolean) => void];
  const [pendingThreadMode, setPendingThreadMode] = useAtom(
    pendingThreadAgentModeAtomFamily(conversationId),
  ) as [
    {
      mode: AgentMode | null;
      selectionSource: unknown;
    } | null,
    (
      value: {
        mode: AgentMode | null;
        selectionSource: unknown;
      } | null,
    ) => void,
  ];
  const {
    hasThreadSelection,
    selectionSource,
    threadPermissionProfileId,
    threadMode,
    threadSandboxPolicy,
  } = getThreadPermissionSelection(conversationId);
  const pendingAgentMode =
    pendingThreadMode?.selectionSource === selectionSource
      ? pendingThreadMode.mode
      : null;
  const savedDefaultAgentMode = defaultAgentModeByHostId[hostId];
  const hasSavedDefaultAgentMode = Object.hasOwn(
    defaultAgentModeByHostId,
    hostId,
  );
  const globalDefaultMode = resolveDefaultAgentModeForHost(
    hostId,
    defaultAgentModeByHostId,
    detailDefaultMode,
  );
  const initialAgentMode =
    profileDefaultMode != null &&
    (!isProjectlessComposerDraft || !temporaryProfileEntry.isSet) &&
    (savedDefaultAgentMode == null ||
      !canAgentModeUseOverrides(savedDefaultAgentMode, allowedAgentModes))
      ? profileDefaultMode
      : globalDefaultMode;
  const configCoversInitialMode =
    configData.isConfigDataPending ||
    allowedAgentModes.includes(initialAgentMode);
  const shouldWaitForInitialMode =
    (isCwdRequiredButMissing || configData.isConfigDataPending) &&
    (savedDefaultAgentMode == null ||
      savedDefaultAgentMode === "auto" ||
      savedDefaultAgentMode === "granular");
  const shouldResetThreadModeToDefault =
    conversationId != null &&
    threadMode != null &&
    threadMode !== "custom" &&
    (threadPermissionProfileId == null ||
      threadPermissionProfileId.startsWith(":")) &&
    (profileDefaultMode != null ||
      (savedDefaultAgentMode != null &&
        canAgentModeUseOverrides(savedDefaultAgentMode, allowedAgentModes))) &&
    threadMode !== initialAgentMode;
  const updateThreadAgentMode = (agentMode: AgentMode | null) => {
    if (conversationId == null) {
      return null;
    }
    const permissionOverrides = buildPermissionOverridesForAgentMode(
      agentMode,
      threadSandboxPolicy?.type === "workspaceWrite"
        ? threadSandboxPolicy.writableRoots
        : cwd == null
          ? []
          : [cwd],
      configData.resolvedConfig,
    );
    return sendAppServerRequest("update-thread-settings-for-next-turn", {
      conversationId,
      threadSettings: {
        approvalPolicy: permissionOverrides.approvalPolicy,
        approvalsReviewer: permissionOverrides.approvalsReviewer,
        ...serializeThreadPermissionSettings(permissionOverrides),
      },
    });
  };
  const logSetModeError = (error: unknown) => {
    logger.error("Failed to set thread permissions mode", {
      safe: {
        conversationId,
      },
      sensitive: {
        error,
      },
    });
  };
  if (stateTarget === "draft") {
    return buildDraftPermissionsState({
      draftAgentMode,
      initialAgentMode,
      hasSetDraftAgentMode,
      hasSavedDefaultAgentMode,
      shouldWaitForInitialMode,
      temporaryProfileEntry,
      arePermissionProfilesPending,
      hasNoPermissionOverrides,
      temporaryPermissionProfileId,
      requiresExplicitPermissionProfile,
      setTemporaryPermissionProfileId,
      setDraftAgentMode,
      setHasSetDraftAgentMode,
    });
  }
  if (stateTarget === "global-default") {
    const setAgentMode = (agentMode: AgentMode | null) => {
      if (isProjectlessComposerDraft) {
        setTemporaryPermissionProfileId(null);
      }
      if (defaultAgentModeByHostId[hostId] !== agentMode) {
        setDefaultAgentModeByHostId({
          ...defaultAgentModeByHostId,
          [hostId]: agentMode,
        });
      }
      updateThreadAgentMode(agentMode)?.catch(logSetModeError);
    };
    const setHasSetInitialAgentMode = (hasSetInitialAgentMode: boolean) => {
      if (hasSetInitialAgentMode) {
        setDefaultAgentModeByHostId({
          ...defaultAgentModeByHostId,
          [hostId]: globalDefaultMode,
        });
      }
    };
    const setPermissionProfileId = (
      permissionProfileId: PermissionProfileId,
    ) => {
      if (isProjectlessComposerDraft) {
        setTemporaryPermissionProfileId(permissionProfileId);
        setHasSetDraftAgentMode(true);
        return;
      }
      if (conversationId != null) {
        sendAppServerRequest("update-thread-settings-for-next-turn", {
          conversationId,
          threadSettings: {
            permissions: permissionProfileId,
          },
        }).catch(logSetModeError);
      }
    };
    if (
      conversationId != null &&
      threadMode != null &&
      !configCoversInitialMode
    ) {
      return {
        agentMode: threadMode,
        hasSetInitialAgentMode: true,
        isAgentModePending: false,
        permissionProfileId: threadPermissionProfileId,
        shouldSendPermissionOverrides: false,
        setAgentMode,
        setHasSetInitialAgentMode,
        setPermissionProfileId,
      };
    }
    return {
      agentMode: initialAgentMode,
      hasSetInitialAgentMode:
        hasSavedDefaultAgentMode ||
        (isProjectlessComposerDraft &&
          (temporaryProfileEntry.isSet ||
            customDefaultPermissionProfileId != null)),
      isAgentModePending:
        shouldWaitForInitialMode ||
        (isProjectlessComposerDraft &&
          !temporaryProfileEntry.isSet &&
          arePermissionProfilesPending) ||
        (isProjectlessComposerDraft &&
          !hasNoPermissionOverrides &&
          temporaryPermissionProfileId == null &&
          requiresExplicitPermissionProfile),
      permissionProfileId: isProjectlessComposerDraft
        ? temporaryPermissionProfileId
        : shouldResetThreadModeToDefault
          ? null
          : threadPermissionProfileId,
      shouldSendPermissionOverrides:
        shouldResetThreadModeToDefault ||
        (!hasNoPermissionOverrides &&
          (isProjectlessComposerDraft ||
            (threadPermissionProfileId == null && threadMode !== "custom"))),
      setAgentMode,
      setHasSetInitialAgentMode,
      setPermissionProfileId,
    };
  }
  if (conversationId == null) {
    throw Error("Thread permission state requires a conversation ID");
  }
  const setConversationAgentMode = (agentMode: AgentMode | null) => {
    setPendingThreadMode({
      mode: agentMode,
      selectionSource,
    });
    updateThreadAgentMode(agentMode)?.catch((error: unknown) => {
      setPendingThreadMode(null);
      logSetModeError(error);
    });
  };
  const setConversationPermissionProfileId = (
    permissionProfileId: PermissionProfileId,
  ) => {
    setPendingThreadMode(null);
    sendAppServerRequest("update-thread-settings-for-next-turn", {
      conversationId,
      threadSettings: {
        permissions: permissionProfileId,
      },
    }).catch(logSetModeError);
  };
  return {
    agentMode: pendingAgentMode ?? threadMode ?? configFallbackMode,
    hasSetInitialAgentMode: pendingAgentMode != null || hasThreadSelection,
    isAgentModePending:
      pendingAgentMode == null &&
      threadMode == null &&
      (isCwdRequiredButMissing || configData.isConfigDataPending),
    permissionProfileId: threadPermissionProfileId,
    shouldSendPermissionOverrides: pendingAgentMode != null,
    setAgentMode: setConversationAgentMode,
    setHasSetInitialAgentMode: noop,
    setPermissionProfileId: setConversationPermissionProfileId,
  };
}

export function initUsePermissionsModeChunk(): void {}
function buildDraftPermissionsState({
  draftAgentMode,
  initialAgentMode,
  hasSetDraftAgentMode,
  hasSavedDefaultAgentMode,
  shouldWaitForInitialMode,
  temporaryProfileEntry,
  arePermissionProfilesPending,
  hasNoPermissionOverrides,
  temporaryPermissionProfileId,
  requiresExplicitPermissionProfile,
  setTemporaryPermissionProfileId,
  setDraftAgentMode,
  setHasSetDraftAgentMode,
}: {
  draftAgentMode: SettableValue<AgentMode>;
  initialAgentMode: AgentMode;
  hasSetDraftAgentMode: boolean;
  hasSavedDefaultAgentMode: boolean;
  shouldWaitForInitialMode: boolean;
  temporaryProfileEntry: SettableValue<PermissionProfileId>;
  arePermissionProfilesPending: boolean;
  hasNoPermissionOverrides: boolean;
  temporaryPermissionProfileId: PermissionProfileId;
  requiresExplicitPermissionProfile: boolean;
  setTemporaryPermissionProfileId(value: PermissionProfileId): void;
  setDraftAgentMode(value: SettableValue<AgentMode>): void;
  setHasSetDraftAgentMode(value: boolean): void;
}): UsePermissionsModeResult {
  const agentMode = draftAgentMode.value ?? initialAgentMode;
  return {
    agentMode,
    hasSetInitialAgentMode: hasSetDraftAgentMode || hasSavedDefaultAgentMode,
    isAgentModePending:
      (draftAgentMode.value == null &&
        (shouldWaitForInitialMode ||
          (!temporaryProfileEntry.isSet && arePermissionProfilesPending))) ||
      (!hasNoPermissionOverrides &&
        temporaryPermissionProfileId == null &&
        requiresExplicitPermissionProfile),
    permissionProfileId: temporaryPermissionProfileId,
    shouldSendPermissionOverrides: !hasNoPermissionOverrides,
    setAgentMode: (agentMode) => {
      setTemporaryPermissionProfileId(null);
      setDraftAgentMode({
        isSet: true,
        value: agentMode,
      });
      setHasSetDraftAgentMode(true);
    },
    setHasSetInitialAgentMode: setHasSetDraftAgentMode,
    setPermissionProfileId: (permissionProfileId) => {
      setTemporaryPermissionProfileId(permissionProfileId);
      setHasSetDraftAgentMode(true);
    },
  };
}
function noop() {}
