// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// Hook-level controller for Windows sandbox setup and update flows.
import * as React from "react";

import { generalSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import { hostMessageBridge } from "../../runtime/app-main-host-runtime";
import { useScope } from "../../runtime/app-scope-hooks";
import { sharedObjectAppScopeRoot } from "../../runtime/shared-object-host-runtime";
import { setGlobalSettingValue } from "../../runtime/project-hover-card-runtime";
import { useGlobalSettingValue } from "../../runtime/git-branch-switcher-runtime";
import { setDefaultAgentModeForHost } from "../../utils/permissions-mode-defaults";
import { initSharedObjectAppScopeRoot } from "../../runtime/shared-object-host-runtime";
import { initGlobalSettingsRuntime } from "../../runtime/project-hover-card-runtime";
import {
  sendAppServerRequest,
  initAppServerRequestRuntime,
} from "../../runtime/app-server-request";
import { useQueryClient } from "../../runtime/query-client/react-query-runtime";
import {
  getAllowedWindowsSandboxImplementations,
  getFailedWindowsSandboxPhase,
  getNextWindowsSandboxSetupMode,
  getWindowsSandboxErrorMessage,
  hasKnownWindowsSandboxImplementations,
  isWindowsSandboxModeAllowed,
  isWindowsSandboxSetupPendingPhase,
  shouldShowUnelevatedSetupAlternative,
  WINDOWS_SANDBOX_POST_ENABLE_DELAY_MS,
  WINDOWS_SANDBOX_SETUP_FAILED_MESSAGE,
  WINDOWS_SANDBOX_START_FAILED_MESSAGE,
  type WindowsSandboxAccountType,
  type WindowsSandboxMode,
  type WindowsSandboxSetupPhase,
} from "./types";
import {
  getWindowsSandboxReadinessQueryKey,
  initWindowsSandboxModeRuntime,
  useUpdateWindowsSandboxModeMutation,
} from "./queries";
import { useConfigRequirementsQuery } from "./config";
import { useOsInfoQuery } from "./os-info";

type SetupStartResult = {
  completion: Promise<WindowsSandboxMode | null>;
};

type StartSetupResponse = {
  completion?: Promise<{ error?: string | null; success: boolean }> | null;
  started: boolean;
};

export type WindowsSandboxSetupController = {
  accountType: WindowsSandboxAccountType;
  allowElevatedSetup: boolean;
  allowUnelevatedFallback: boolean;
  enableElevated(): Promise<boolean>;
  enableUnelevated(): Promise<boolean>;
  error: string | null;
  finalizeEnable(options: {
    postEnableDelayMs?: number;
    sandboxMode: WindowsSandboxMode | null;
    setAgentModeAuto?: boolean;
  }): Promise<void>;
  finalizeUpdate(): Promise<void>;
  isPending: boolean;
  isRequirementsError: boolean;
  isRequirementsPending: boolean;
  isSetupModePending: boolean;
  phase: WindowsSandboxSetupPhase;
  requiresElevatedSandboxByPolicy: boolean;
  resetError(): void;
  retryRequirements(): void;
  setLimitedAccessMode(): void;
  showUnelevatedSetupAlternative: boolean;
  startNext(): Promise<WindowsSandboxMode | null>;
  startUpdate(): Promise<WindowsSandboxMode | null>;
};

async function runWindowsSandboxSetup({
  allowUnelevatedFallback,
  mode,
  setError,
  setPhase,
  start,
}: {
  allowUnelevatedFallback: boolean;
  mode: WindowsSandboxMode;
  setError(error: string | null): void;
  setPhase(phase: WindowsSandboxSetupPhase): void;
  start(): Promise<StartSetupResponse>;
}): Promise<SetupStartResult | null> {
  const isUnelevated = mode === "unelevated";
  const fail = (error: string) => {
    setPhase(getFailedWindowsSandboxPhase(mode, allowUnelevatedFallback));
    setError(error);
    return null;
  };

  setPhase(isUnelevated ? "startingUnelevated" : "startingElevated");
  setError(null);

  try {
    const response = await start();
    if (!response.started || response.completion == null) {
      return fail(WINDOWS_SANDBOX_START_FAILED_MESSAGE);
    }

    setPhase(isUnelevated ? "waitingUnelevated" : "waitingElevated");
    setError(null);
    return {
      completion: response.completion
        .then((result) =>
          result.success
            ? mode
            : fail(result.error ?? WINDOWS_SANDBOX_SETUP_FAILED_MESSAGE),
        )
        .catch((error) => fail(getWindowsSandboxErrorMessage(error))),
    };
  } catch (error) {
    return fail(getWindowsSandboxErrorMessage(error));
  }
}

async function completeWindowsSandboxEnable({
  disableWsl,
  markReady,
  restart,
  runInWslEnabled,
  setAgentModeAuto,
  shouldSetAgentModeAuto,
  waitForRestart,
  writeMode,
}: {
  disableWsl(): Promise<void>;
  markReady(): void;
  restart(): void;
  runInWslEnabled: boolean;
  setAgentModeAuto(): void;
  shouldSetAgentModeAuto: boolean;
  waitForRestart(): Promise<void>;
  writeMode(): Promise<void>;
}) {
  await writeMode();
  if (shouldSetAgentModeAuto) setAgentModeAuto();
  if (runInWslEnabled) await disableWsl();
  await waitForRestart();
  if (!runInWslEnabled) restart();
  markReady();
}

export function useWindowsSandboxSetupController(
  hostId: string,
  cwd?: string,
): WindowsSandboxSetupController {
  const scope = useScope(sharedObjectAppScopeRoot);
  const osInfo = useOsInfoQuery();
  const requirementsQuery = useConfigRequirementsQuery(hostId);
  const updateMode = useUpdateWindowsSandboxModeMutation(hostId);
  const queryClient = useQueryClient();
  const runInWslEnabled = useGlobalSettingValue<boolean>(
    generalSettingDefinitions.runCodexInWsl,
  );
  const [phase, setPhase] = React.useState<WindowsSandboxSetupPhase>("idle");
  const [error, setError] = React.useState<string | null>(null);

  const allowedImplementations = getAllowedWindowsSandboxImplementations(
    requirementsQuery.data,
  );
  const isRequirementsError =
    !requirementsQuery.isPending &&
    !hasKnownWindowsSandboxImplementations(allowedImplementations);
  const isRequirementsPending =
    requirementsQuery.isPending ||
    (isRequirementsError && requirementsQuery.isFetching);
  const allowElevatedSetup = isWindowsSandboxModeAllowed(
    allowedImplementations,
    "elevated",
  );
  const allowUnelevatedFallback = isWindowsSandboxModeAllowed(
    allowedImplementations,
    "unelevated",
  );
  const accountType =
    osInfo.data?.windowsAccountType ?? ("unknown" as WindowsSandboxAccountType);
  const requiresElevatedSandboxByPolicy =
    allowElevatedSetup && !allowUnelevatedFallback;
  const showUnelevatedSetupAlternative = shouldShowUnelevatedSetupAlternative(
    accountType,
    allowElevatedSetup,
    allowUnelevatedFallback,
  );
  const isPending = isWindowsSandboxSetupPendingPhase(phase);
  const isSetupModePending = osInfo.isPending || isRequirementsPending;

  const markReady = React.useCallback(() => {
    queryClient.setQueryData?.(
      getWindowsSandboxReadinessQueryKey(hostId),
      "ready",
    );
  }, [hostId, queryClient]);

  const startSetup = React.useCallback(
    (mode: WindowsSandboxMode, allowFallback: boolean) =>
      isPending || !isWindowsSandboxModeAllowed(allowedImplementations, mode)
        ? Promise.resolve(null)
        : runWindowsSandboxSetup({
            allowUnelevatedFallback: allowFallback,
            mode,
            setError,
            setPhase,
            start: () =>
              sendAppServerRequest<StartSetupResponse>(
                "start-windows-sandbox-setup-for-host",
                {
                  cwd,
                  hostId,
                  mode,
                },
              ),
          }),
    [allowedImplementations, cwd, hostId, isPending],
  );

  const startSetupCompletion = React.useCallback(
    async (mode: WindowsSandboxMode, allowFallback: boolean) => {
      const result = await startSetup(mode, allowFallback);
      return result == null ? null : result.completion;
    },
    [startSetup],
  );

  const resetError = React.useCallback(() => {
    if (isWindowsSandboxSetupPendingPhase(phase)) return;
    setPhase("idle");
    setError(null);
  }, [phase]);

  const finalizeEnable = React.useCallback(
    async ({
      postEnableDelayMs = WINDOWS_SANDBOX_POST_ENABLE_DELAY_MS,
      sandboxMode,
      setAgentModeAuto = false,
    }: {
      postEnableDelayMs?: number;
      sandboxMode: WindowsSandboxMode | null;
      setAgentModeAuto?: boolean;
    }) => {
      try {
        await completeWindowsSandboxEnable({
          disableWsl: () =>
            setGlobalSettingValue(
              scope,
              generalSettingDefinitions.runCodexInWsl,
              false,
            ),
          markReady,
          restart: () => {
            hostMessageBridge.dispatchMessage("codex-app-server-restart", {
              hostId,
            });
          },
          runInWslEnabled: runInWslEnabled === true,
          setAgentModeAuto: () => {
            setDefaultAgentModeForHost(hostId, "auto");
          },
          shouldSetAgentModeAuto: setAgentModeAuto,
          waitForRestart: () =>
            new Promise((resolve) => {
              setTimeout(resolve, postEnableDelayMs);
            }),
          writeMode: async () => {
            await updateMode.mutateAsync(sandboxMode);
          },
        });
        setPhase("idle");
        setError(null);
      } catch (caughtError) {
        const errorMessage = getWindowsSandboxErrorMessage(caughtError);
        setPhase("failed");
        setError(errorMessage);
        throw caughtError;
      }
    },
    [hostId, markReady, runInWslEnabled, scope, updateMode],
  );

  const finalizeUpdate = React.useCallback(async () => {
    markReady();
    setPhase("idle");
    setError(null);
  }, [markReady]);

  const finalizeCompletion = React.useCallback(
    async (completion: Promise<WindowsSandboxMode | null>) => {
      const sandboxMode = await completion;
      if (sandboxMode == null) return false;
      try {
        await finalizeEnable({ sandboxMode, setAgentModeAuto: true });
        return true;
      } catch {
        return false;
      }
    },
    [finalizeEnable],
  );

  const enableMode = React.useCallback(
    async (mode: WindowsSandboxMode, returnAfterStart = false) => {
      const result = await startSetup(
        mode,
        mode === "elevated" && allowUnelevatedFallback,
      );
      if (result == null) return false;
      const completion = finalizeCompletion(result.completion);
      return returnAfterStart ? true : completion;
    },
    [allowUnelevatedFallback, finalizeCompletion, startSetup],
  );

  return React.useMemo(
    () => ({
      accountType,
      allowElevatedSetup,
      allowUnelevatedFallback,
      enableElevated: () => enableMode("elevated"),
      enableUnelevated: () => enableMode("unelevated", true),
      error,
      finalizeEnable,
      finalizeUpdate,
      isPending,
      isRequirementsError,
      isRequirementsPending,
      isSetupModePending,
      phase,
      requiresElevatedSandboxByPolicy,
      resetError,
      retryRequirements: () => {
        requirementsQuery.refetch();
      },
      setLimitedAccessMode: () => {
        setDefaultAgentModeForHost(hostId, "read-only");
      },
      showUnelevatedSetupAlternative,
      startNext: () => {
        const mode = getNextWindowsSandboxSetupMode(
          phase,
          allowElevatedSetup,
          allowUnelevatedFallback,
        );
        return mode == null
          ? Promise.resolve(null)
          : startSetupCompletion(mode, allowUnelevatedFallback);
      },
      startUpdate: () => startSetupCompletion("elevated", false),
    }),
    [
      accountType,
      allowElevatedSetup,
      allowUnelevatedFallback,
      enableMode,
      error,
      finalizeEnable,
      finalizeUpdate,
      hostId,
      isPending,
      isRequirementsError,
      isRequirementsPending,
      isSetupModePending,
      phase,
      requirementsQuery,
      requiresElevatedSandboxByPolicy,
      resetError,
      showUnelevatedSetupAlternative,
      startSetupCompletion,
    ],
  );
}

export function initWindowsSandboxSetupControllerRuntime(): void {
  initAppServerRequestRuntime();
  initGlobalSettingsRuntime();
  initSharedObjectAppScopeRoot();
  initWindowsSandboxModeRuntime();
}
