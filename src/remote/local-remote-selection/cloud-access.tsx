// Restored from ref/webview/assets/local-remote-selection-DRnEOc8g.js
// local-remote-selection-DRnEOc8g chunk restored from the Codex webview bundle.
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~kj79zy13-7BmnrRC1.js
import React from "react";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import { useAtomValue, useSetAtom } from "jotai";
import {
  appScopeG as createScopedState,
  appScopeO as useAppScopeStore,
  appScopeRoot,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import {
  _vscodeApiC as VscodeApiError,
  _vscodeApiO as useVscodeQuery,
  vscodeApiH as vscodeLogger,
  vscodeApiU as queryTimings,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { useAuth } from "../../auth/use-auth";
import { useCloudEnvironmentsQuery } from "../../runtime/codex-api";
import { codexRequest } from "../../runtime/request";
import { persistedAtom } from "../../utils/persisted-atom";
import { isEnterpriseLikeSku } from "../../utils/skus";
import type { AppScopeSetter, CodexCloudAccess } from "./types";
type AccountInfo = {
  accountId?: string | null;
  plan?: string | null;
};
type AccountSettings = {
  beta_settings?: {
    wham_access?: boolean | null;
  } | null;
};
type AccessStatusOptions = {
  hasErrors: boolean;
  hasLoggedDisabledRef?: React.MutableRefObject<boolean>;
  hasWorkspaceEnabledCodex: boolean;
  isLoading: boolean;
  needsOnboarding: boolean;
};
type ComposerExecutionModeAvailabilityInput = {
  canCreateBrowserDefaultHostThreads: boolean;
  hasBrowserLocalExecutionHost: boolean;
  hasComposerModeGitRepo: boolean;
  hasFollowUp: boolean;
  isBrowser: boolean;
  isComposerModeGitMetadataLoading: boolean;
  isResponseInProgress: boolean;
  isStatsigLoading: boolean;
  isWorktreeExecutionTargetLoading: boolean;
  isWorktreePickerEnabled: boolean;
};
type ComposerExecutionModeAvailability = {
  fallbackMode: "cloud" | "local";
  isAvailabilityLoading: boolean;
  isCloudAvailable: boolean;
  isLocalAvailable: boolean;
  isWorktreeAvailable: boolean;
};
const persistedCodexCloudAccessAtom = persistedAtom<CodexCloudAccess | null>(
  "codexCloudAccess",
  null,
);
const codexCloudAccessState = createScopedState(
  appScopeRoot,
  () => null as CodexCloudAccess | null,
);
export function useCodexCloudAccess(): {
  access: CodexCloudAccess;
} {
  const { authMethod } = useAuth();
  const persistedAccess = useAtomValue(persistedCodexCloudAccessAtom);
  const scopedAccess = useAppScopeValue(codexCloudAccessState);
  if (authMethod !== "chatgpt") {
    return {
      access: "disabled",
    };
  }
  const liveAccess = scopedAccess ?? "loading";
  if (
    (liveAccess === "loading" || liveAccess === "error") &&
    persistedAccess != null
  ) {
    return {
      access: persistedAccess,
    };
  }
  return {
    access: liveAccess,
  };
}
export function CodexCloudAccessSyncer() {
  useSyncCodexCloudAccess();
  return null;
}
export function initCodexCloudAccessRuntime(): void {}
export function initComposerExecutionModeAvailabilityRuntime(): void {}
function useSyncCodexCloudAccess({
  enabled = true,
}: {
  enabled?: boolean;
} = {}) {
  const store = useAppScopeStore(appScopeRoot) as AppScopeSetter;
  const { authMethod } = useAuth();
  const setPersistedAccess = useSetAtom(persistedCodexCloudAccessAtom);
  const shouldFetch = enabled && authMethod === "chatgpt";
  const {
    data: accountInfo,
    isError: isAccountInfoError,
    isLoading: isAccountInfoLoading,
  } = useVscodeQuery("account-info", {
    queryConfig: {
      enabled: shouldFetch,
    },
  }) as {
    data?: AccountInfo;
    isError: boolean;
    isLoading: boolean;
  };
  const plan = accountInfo?.plan ?? undefined;
  const isEnterprisePlan = isEnterpriseLikeSku(plan);
  const accountSettingsQuery = useQuery({
    enabled:
      enabled &&
      Boolean(accountInfo?.accountId) &&
      isEnterprisePlan &&
      authMethod === "chatgpt",
    queryFn: async () =>
      codexRequest.safeGet("/accounts/{account_id}/settings", {
        parameters: {
          path: {
            account_id: accountInfo?.accountId ?? "",
          },
        },
      }) as Promise<AccountSettings>,
    queryKey: ["accounts", "settings", accountInfo?.accountId],
    staleTime: queryTimings.ONE_MINUTE,
  });
  const environmentsQuery = useCloudEnvironmentsQuery({
    enabled: shouldFetch,
  });
  const gateUsesNotFoundForOnboarding = useGateValue("1907601843");
  const isEnvironmentsNotFound =
    environmentsQuery.error instanceof VscodeApiError &&
    environmentsQuery.error.status === 404;
  const isLoading =
    isAccountInfoLoading ||
    accountSettingsQuery.isLoading ||
    environmentsQuery.isLoading;
  const access = getCodexCloudAccessStatus(plan, authMethod, {
    hasErrors:
      isAccountInfoError ||
      (isEnterprisePlan && accountSettingsQuery.isError) ||
      (Boolean(environmentsQuery.error) && !isEnvironmentsNotFound),
    hasWorkspaceEnabledCodex:
      !isEnterprisePlan ||
      (accountSettingsQuery.data?.beta_settings?.wham_access ?? false),
    isLoading,
    needsOnboarding: gateUsesNotFoundForOnboarding
      ? isEnvironmentsNotFound
      : getCloudEnvironmentCount(environmentsQuery.data) === 0 ||
        isEnvironmentsNotFound,
  });
  React.useEffect(() => {
    if (!enabled) return;
    store.set(codexCloudAccessState, access);
    if (access !== "loading" && access !== "error") {
      setPersistedAccess(access);
    }
  }, [access, enabled, setPersistedAccess, store]);
}
function getCodexCloudAccessStatus(
  plan: string | null | undefined,
  authMethod: string | null | undefined,
  {
    hasErrors,
    hasLoggedDisabledRef,
    hasWorkspaceEnabledCodex,
    isLoading,
    needsOnboarding,
  }: AccessStatusOptions,
): CodexCloudAccess {
  const isEnterprisePlan = isEnterpriseLikeSku(plan);
  const logDisabledOnce = (message: string) => {
    if (!hasLoggedDisabledRef || hasLoggedDisabledRef.current) return;
    vscodeLogger.info(message);
    hasLoggedDisabledRef.current = true;
  };
  if (authMethod !== "chatgpt") {
    logDisabledOnce(
      "Codex Cloud access disabled because user is not logged in via ChatGPT.",
    );
    return "disabled";
  }
  if (isLoading) return "loading";
  if (hasErrors) return "error";
  if (isEnterprisePlan && !hasWorkspaceEnabledCodex) {
    logDisabledOnce(
      "Codex Cloud access disabled because workspace has not enabled Codex.",
    );
    return "disabled";
  }
  return needsOnboarding ? "enabled_needs_setup" : "enabled";
}
function getCloudEnvironmentCount(data: unknown) {
  return Array.isArray(data) ? data.length : undefined;
}
export function getComposerExecutionModeAvailability({
  canCreateBrowserDefaultHostThreads,
  hasBrowserLocalExecutionHost,
  hasComposerModeGitRepo,
  hasFollowUp,
  isBrowser,
  isComposerModeGitMetadataLoading,
  isResponseInProgress,
  isStatsigLoading,
  isWorktreeExecutionTargetLoading,
  isWorktreePickerEnabled,
}: ComposerExecutionModeAvailabilityInput): ComposerExecutionModeAvailability {
  if (isBrowser) {
    const shouldPreferLocal =
      canCreateBrowserDefaultHostThreads && !hasFollowUp;
    return {
      fallbackMode: shouldPreferLocal ? "local" : "cloud",
      isAvailabilityLoading: false,
      isCloudAvailable: !shouldPreferLocal,
      isLocalAvailable:
        hasBrowserLocalExecutionHost || canCreateBrowserDefaultHostThreads,
      isWorktreeAvailable: false,
    };
  }
  return {
    fallbackMode: "local",
    isAvailabilityLoading:
      isComposerModeGitMetadataLoading ||
      isStatsigLoading ||
      isWorktreeExecutionTargetLoading,
    isCloudAvailable: hasComposerModeGitRepo,
    isLocalAvailable: true,
    isWorktreeAvailable:
      hasComposerModeGitRepo &&
      !hasFollowUp &&
      !isResponseInProgress &&
      isWorktreePickerEnabled,
  };
}
export function resolveComposerExecutionMode({
  cloudAccess,
  composerMode,
  fallbackMode,
  isAvailabilityLoading,
  isCloudAvailable,
  isLocalAvailable,
  isWorktreeAvailable,
}: ComposerExecutionModeAvailability & {
  cloudAccess: CodexCloudAccess;
  composerMode: "cloud" | "local" | "worktree" | string;
}) {
  if (composerMode === "cloud" && cloudAccess !== "enabled")
    return fallbackMode;
  if (isAvailabilityLoading) return composerMode;
  switch (composerMode) {
    case "cloud":
      return isCloudAvailable ? "cloud" : fallbackMode;
    case "local":
      return isLocalAvailable ? "local" : fallbackMode;
    case "worktree":
      return isWorktreeAvailable ? "worktree" : fallbackMode;
  }
}
