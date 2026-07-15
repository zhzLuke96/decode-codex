// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// Summary hook that decides whether Windows sandbox setup or update is required.
import * as React from "react";

import { generalSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import { useGlobalSettingValue } from "../../runtime/git-branch-switcher-runtime";
import {
  initWindowsSandboxModeRuntime,
  useWindowsSandboxReadinessQuery,
} from "./queries";
import { useOsInfoQuery } from "./os-info";
import type { WindowsSandboxRequirement } from "./types";

export type WindowsSandboxRequirementSummary = {
  hasError: boolean;
  isPending: boolean;
  isRequired: boolean;
  requirement: WindowsSandboxRequirement | null;
  retry(): void;
};

export function useWindowsSandboxRequirementSummary(options?: {
  enabled?: boolean;
}): WindowsSandboxRequirementSummary {
  const enabled = options?.enabled ?? true;
  const osInfo = useOsInfoQuery();
  const runInWslEnabled = useGlobalSettingValue<boolean>(
    generalSettingDefinitions.runCodexInWsl,
  );
  const shouldCheck =
    enabled &&
    osInfo.data?.platform === "win32" &&
    !osInfo.data.isVsCodeRunningInsideWsl &&
    runInWslEnabled !== true;
  const readiness = useWindowsSandboxReadinessQuery({ enabled: shouldCheck });
  const hasError = shouldCheck && readiness.isError === true;
  const isPending =
    (enabled && osInfo.isLoading) || (shouldCheck && readiness.isPending);
  const requirement =
    !isPending && shouldCheck && readiness.data === "notConfigured"
      ? "setup"
      : !isPending && shouldCheck && readiness.data === "updateRequired"
        ? "update"
        : null;
  const retry = React.useCallback(() => {
    readiness.refetch();
  }, [readiness]);

  return React.useMemo(
    () => ({
      hasError,
      isPending,
      isRequired: requirement != null,
      requirement,
      retry,
    }),
    [hasError, isPending, requirement, retry],
  );
}

export function initWindowsSandboxRequirementSummaryRuntime(): void {
  initWindowsSandboxModeRuntime();
}
