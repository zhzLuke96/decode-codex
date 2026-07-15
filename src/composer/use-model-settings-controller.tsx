// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Controller for mutating composer model and reasoning-effort settings.

import React, { useCallback } from "react";
import { useIntl } from "../vendor/react-intl";

import { useAuthForHost } from "../auth/use-auth";
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import {
  appScopeA as useAppScopeFamilyValue,
  appScopeO as useAppScopeStore,
  appScopeS as useAppScopeValue,
  appScopeT as appScopeRoot,
} from "../boundaries/app-scope";
import { userSavedConfigQueryOptions } from "../config/user-saved-config-query";
import {
  MULTI_AGENT_MODE,
  OpenConfigLinkButton,
  hasConversationSignal,
  logger,
  modelSelectionWriteQueueFamily,
  nextTurnModelOverrideSignal,
  pendingModelSelectionSignal,
  persistScopedSignalValue,
  registeredAppServerHostIdsSignal,
  threadSettingsByIdSignal,
  toastControllerSignal,
} from "../boundaries/onboarding-commons-externals.facade";
import { useActiveWorkspace } from "./use-active-workspace";
import {
  isConfigValidationError,
  modelSelectionTargetKey,
  userSavedConfigQueryKeyFor,
  type ModelSettings,
  type NextTurnModelOverride,
} from "./model-settings-core";
import {
  useCopilotDefaultModelSettings,
  useInvalidateUserSavedConfig,
  useResolvedModelSettings,
} from "./use-resolved-model-settings";

function formatModelSettingsError(
  intl: ReturnType<typeof useIntl>,
  error: unknown,
): string {
  return isConfigValidationError(error)
    ? intl.formatMessage(
        {
          id: "composer.modelSettings.errorConfigValidation",
          defaultMessage:
            "Couldn’t update model settings. Check your config.toml.{br}{br}{message}",
          description:
            "Error shown when updating model settings fails because the configuration is invalid",
        },
        {
          br: <br />,
          message: error.message,
        },
      )
    : intl.formatMessage({
        id: "composer.modelSettings.errorGeneric",
        defaultMessage: "Couldn’t update model settings",
        description:
          "Error shown when updating model settings fails for a non-auth reason",
      });
}

function enqueueModelSelectionWrite(
  store: { get: (...args: unknown[]) => (event: unknown) => void },
  target: unknown,
  selection: unknown,
  write: () => Promise<void> | void,
): Promise<void> {
  return new Promise((resolve) => {
    store.get(
      modelSelectionWriteQueueFamily,
      JSON.stringify(target),
    )({
      resolve,
      selection,
      target,
      write,
    });
  });
}

export interface ModelSettingsController {
  setModelAndReasoningEffortForNextTurn: (
    model: string,
    reasoningEffort: string,
  ) => Promise<void>;
  setModelAndReasoningEffort: (
    model: string,
    reasoningEffort: string,
  ) => Promise<void>;
  modelSettings: ModelSettings;
}

export function initUseModelSettingsControllerChunk(): void {}

export function useModelSettingsController(
  conversationId: string | null = null,
): ModelSettingsController {
  const store = useAppScopeStore(appScopeRoot);
  const queryClient = store.queryClient;
  const workspace = useActiveWorkspace(conversationId);
  const hostId = workspace.hostId;
  const registeredHostIds = useAppScopeValue(
    registeredAppServerHostIdsSignal,
  ) as string[];
  const isHostRegistered = registeredHostIds.includes(hostId);
  const isCopilot = useAuthForHost(hostId)?.authMethod === "copilot";
  const intl = useIntl();
  const cwd = workspace.cwd;

  const resolvedSettings = useResolvedModelSettings({
    hostId,
    cwd,
    isHostRegistered,
  });
  const copilotDefaults = useCopilotDefaultModelSettings();
  const hasConversation = useAppScopeFamilyValue(
    hasConversationSignal,
    conversationId,
  ) as boolean;
  const pendingSelection = useAppScopeFamilyValue(
    pendingModelSelectionSignal,
    modelSelectionTargetKey({
      conversationId,
      hasConversation,
      hostId,
      cwd,
    }),
  ) as Partial<NextTurnModelOverride> | null;
  const threadSettings = useAppScopeFamilyValue(
    threadSettingsByIdSignal,
    conversationId,
  ) as {
    settings: { model?: string | null; reasoning_effort?: string | null };
  } | null;
  const threadModel = threadSettings?.settings.model ?? null;
  const normalizedThreadModel =
    threadModel != null && threadModel.trim().length > 0 ? threadModel : null;

  const updateNextTurnSettings = useCallback(
    async (model: string, reasoningEffort: string) => {
      if (conversationId == null || !hasConversation) return false;
      await sendAppServerRequest("update-thread-settings-for-next-turn", {
        conversationId,
        threadSettings: {
          model,
          effort: reasoningEffort,
          multiAgentMode: MULTI_AGENT_MODE,
        },
      });
      return true;
    },
    [conversationId, hasConversation],
  );

  const baseSettings = hasConversation
    ? {
        model: normalizedThreadModel ?? resolvedSettings.model,
        reasoningEffort: threadSettings?.settings.reasoning_effort ?? null,
        profile: resolvedSettings.profile,
        isLoading: resolvedSettings.isLoading && normalizedThreadModel == null,
      }
    : isCopilot
      ? copilotDefaults
      : resolvedSettings;
  const modelSettings =
    pendingSelection == null
      ? baseSettings
      : { ...baseSettings, ...pendingSelection };

  const invalidateUserSavedConfig = useInvalidateUserSavedConfig({
    hostId,
    cwd,
  });

  const handleError = useCallback(
    (error: unknown) => {
      logger.error("Failed to update model and reasoning effort", {
        safe: {},
        sensitive: { error },
      });
      const toastController = store.get(toastControllerSignal);
      const message = formatModelSettingsError(intl, error);
      if (isConfigValidationError(error)) {
        toastController.danger(message, {
          id: "composer.modelSettings.updateError",
          description: (
            <div className="mt-4">
              <OpenConfigLinkButton hostId={hostId} />
            </div>
          ),
        });
        return;
      }
      toastController.danger(message, {
        id: "composer.modelSettings.updateError",
      });
    },
    [hostId, intl, store],
  );

  const setModelAndReasoningEffortForNextTurn = useCallback(
    async (model: string, reasoningEffort: string) => {
      try {
        if (!(await updateNextTurnSettings(model, reasoningEffort))) {
          throw new Error(
            "No conversation available for next-turn model update",
          );
        }
      } catch (error) {
        handleError(error);
        throw error;
      }
    },
    [updateNextTurnSettings, handleError],
  );

  const setDefaultModelAndReasoningEffort = useCallback(
    async (model: string, reasoningEffort: string) => {
      let queryKey: unknown[] | null = null;
      let previousData: unknown;
      try {
        if (await updateNextTurnSettings(model, reasoningEffort)) return;
        if (isCopilot) {
          await persistScopedSignalValue(
            store,
            "copilot-default-model",
            model,
            { throwOnFailure: true },
          );
          return;
        }
        logger.info("Setting default model and reasoning effort", {
          safe: {
            newModel: model,
            newEffort: reasoningEffort,
            profile: resolvedSettings.profile,
          },
        });
        if (!isHostRegistered) {
          throw new Error("Model settings host is unavailable");
        }
        queryKey = userSavedConfigQueryKeyFor(hostId, cwd);
        const overrideTarget = { hostId, cwd };
        await queryClient.cancelQueries({ exact: true, queryKey });
        previousData = queryClient.getQueryData(queryKey);
        queryClient.setQueryData(queryKey, (current: unknown) =>
          current == null
            ? current
            : Object.assign(structuredClone(current), {
                model,
                model_reasoning_effort: reasoningEffort,
              }),
        );
        const result = await sendAppServerRequest(
          "set-default-model-config-for-host",
          {
            hostId,
            model,
            reasoningEffort,
            profile: resolvedSettings.profile,
          },
        );
        await sendAppServerRequest("clear-prewarmed-threads-for-host", {
          hostId,
        });
        if (result?.status === "okOverridden") {
          queryClient.setQueryData(queryKey, previousData);
          store.set(nextTurnModelOverrideSignal, overrideTarget, {
            model,
            reasoningEffort,
            profile: resolvedSettings.profile,
          });
          return;
        }
        store.set(nextTurnModelOverrideSignal, overrideTarget, null);
        await invalidateUserSavedConfig();
        await store.query.fetch(userSavedConfigQueryOptions, { hostId, cwd });
      } catch (error) {
        if (queryKey != null) queryClient.setQueryData(queryKey, previousData);
        handleError(error);
      }
    },
    [
      isCopilot,
      updateNextTurnSettings,
      resolvedSettings.profile,
      invalidateUserSavedConfig,
      isHostRegistered,
      hostId,
      queryClient,
      store,
      handleError,
      cwd,
    ],
  );

  const setModelAndReasoningEffort = useCallback(
    (model: string, reasoningEffort: string) =>
      enqueueModelSelectionWrite(
        store,
        modelSelectionTargetKey({
          conversationId,
          hasConversation,
          hostId,
          cwd,
        }),
        { model, reasoningEffort },
        () => setDefaultModelAndReasoningEffort(model, reasoningEffort),
      ),
    [
      conversationId,
      hasConversation,
      hostId,
      store,
      cwd,
      setDefaultModelAndReasoningEffort,
    ],
  );

  return {
    setModelAndReasoningEffortForNextTurn,
    setModelAndReasoningEffort,
    modelSettings,
  };
}
