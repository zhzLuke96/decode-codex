// Restored from ref/webview/assets/browser-use-origin-state-queries-D3hIgMi-.js

import { _appScopeT } from "../boundaries/app-scope";
import { appServices } from "../boundaries/rpc.facade";
import { useHostConfigBt as callHostConfigCommand } from "../boundaries/use-host-config.facade";
import {
  createVscodeQueryOptions,
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiN as callVscodeApi,
  vscodeApiR as createVscodeQueryKey,
  vscodeApiU as queryTimings,
  vscodeApiUnderscore as useMutation,
} from "../boundaries/vscode-api";
import {
  invalidateQueriesAndBroadcast,
  type QueryClientLike,
} from "../utils/invalidate-queries-and-broadcast";
type BrowserUseHostOptions = {
  hostId: string;
};
type BrowserUseApprovalMode = string;
type BrowserUseOriginKind = string;
type BrowserUseFileTransferKind = string;
type BrowserUseFileTransferApprovalModeInput = {
  approvalMode: BrowserUseApprovalMode;
  kind: BrowserUseFileTransferKind;
};
type BrowserUseOriginMutationInput = {
  kind: BrowserUseOriginKind;
  origin: string;
};
type BrowserUseFileTransferOriginMutationInput =
  BrowserUseOriginMutationInput & {
    transferKind: BrowserUseFileTransferKind;
  };
export const browserUseOriginStateQueryKey = createVscodeQueryKey(
  "browser-use-origin-state-read",
);
export const browserUseOriginStateQuery = createVscodeQueryOptions(
  _appScopeT,
  "browser-use-origin-state-read",
  {
    staleTime: queryTimings.FIVE_SECONDS,
  },
);
export function useBrowserUseFullCdpAccessEnabledMutation({
  hostId,
}: BrowserUseHostOptions) {
  const invalidateAndBroadcast = invalidateQueriesAndBroadcast();
  const handleSuccess = async () => {
    await Promise.all([
      invalidateAndBroadcast(browserUseOriginStateQueryKey),
      callHostConfigCommand("clear-prewarmed-threads-for-host", {
        hostId,
      }),
    ]);
  };
  const handleError = (error: unknown) => {
    vscodeLogger.error("Failed to update Browser Use full CDP access", {
      safe: {},
      sensitive: {
        error: String(error),
      },
    });
    invalidateAndBroadcast(browserUseOriginStateQueryKey);
  };
  return useMutation({
    mutationFn: writeBrowserUseFullCdpAccessEnabled,
    onSuccess: handleSuccess,
    onError: handleError,
  });
}
function writeBrowserUseFullCdpAccessEnabled(enabled: boolean) {
  return callVscodeApi("browser-use-full-cdp-access-enabled-write", {
    params: {
      enabled,
    },
  });
}
export function useClearBrowserBrowsingDataMutation() {
  return useMutation({
    mutationFn: clearBrowserBrowsingData,
  });
}
export async function clearBrowserBrowsingData(dataTypes: unknown) {
  try {
    return await callVscodeApi("browser-browsing-data-clear", {
      params: {
        dataTypes,
      },
    });
  } catch (error) {
    vscodeLogger.error("Failed to clear browser browsing data", {
      safe: {
        error: String(error),
      },
      sensitive: {},
    });
    throw error;
  }
}
export function useUpdateBrowserUseOriginRulesMutation() {
  const invalidateAndBroadcast = invalidateQueriesAndBroadcast();
  return useMutation({
    mutationFn: updateBrowserUseOriginRules,
    scope: {
      id: "browser-use-origin-rules",
    },
    onSuccess: async () => {
      await invalidateAndBroadcast(browserUseOriginStateQueryKey);
    },
    onError: (error: unknown) => {
      vscodeLogger.error("Failed to update browser-use origin rules", {
        safe: {},
        sensitive: {
          error: String(error),
        },
      });
      invalidateAndBroadcast(browserUseOriginStateQueryKey);
    },
  });
}
function updateBrowserUseOriginRules(originRules: unknown) {
  const browserUseOriginState = appServices.browserUseOriginState;
  if (browserUseOriginState == null) {
    throw Error("Browser Use site permissions are not supported");
  }
  return browserUseOriginState.updateOriginRules(originRules);
}
function useBrowserUseOriginStateMutation<TInput>(
  mutationFn: (input: TInput) => unknown,
  errorMessage: string,
) {
  const queryClient = useQueryClient() as QueryClientLike;
  return useMutation({
    mutationFn,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: browserUseOriginStateQueryKey,
      });
    },
    onError: (error: unknown) => {
      vscodeLogger.error(errorMessage, {
        safe: {
          error: String(error),
        },
        sensitive: {},
      });
      queryClient.invalidateQueries({
        queryKey: browserUseOriginStateQueryKey,
      });
    },
  });
}
export function useUpdateBrowserUseApprovalModeMutation() {
  return useBrowserUseOriginStateMutation(
    writeBrowserUseApprovalMode,
    "Failed to update browser-use approval mode",
  );
}
function writeBrowserUseApprovalMode(approvalMode: BrowserUseApprovalMode) {
  return callVscodeApi("browser-use-approval-mode-write", {
    params: {
      approvalMode,
    },
  });
}
export function useUpdateBrowserUseHistoryApprovalModeMutation() {
  return useBrowserUseOriginStateMutation(
    writeBrowserUseHistoryApprovalMode,
    "Failed to update browser-use history approval mode",
  );
}
function writeBrowserUseHistoryApprovalMode(
  approvalMode: BrowserUseApprovalMode,
) {
  return callVscodeApi("browser-use-history-approval-mode-write", {
    params: {
      approvalMode,
    },
  });
}
export function useUpdateBrowserUseFileTransferApprovalModeMutation() {
  return useBrowserUseOriginStateMutation(
    writeBrowserUseFileTransferApprovalMode,
    "Failed to update browser-use file transfer approval mode",
  );
}
function writeBrowserUseFileTransferApprovalMode({
  approvalMode,
  kind,
}: BrowserUseFileTransferApprovalModeInput) {
  return callVscodeApi("browser-use-file-transfer-approval-mode-write", {
    params: {
      approvalMode,
      kind,
    },
  });
}
export function useAddBrowserUseOriginMutation() {
  return useBrowserUseOriginStateMutation(
    addBrowserUseOrigin,
    "Failed to update browser-use origin state",
  );
}
function addBrowserUseOrigin({ kind, origin }: BrowserUseOriginMutationInput) {
  return callVscodeApi("browser-use-origin-add", {
    params: {
      kind,
      targetOrigin: origin,
    },
  });
}
export function useAddBrowserUseFileTransferOriginMutation() {
  return useBrowserUseOriginStateMutation(
    addBrowserUseFileTransferOrigin,
    "Failed to update browser-use file transfer origin state",
  );
}
function addBrowserUseFileTransferOrigin({
  kind,
  origin,
  transferKind,
}: BrowserUseFileTransferOriginMutationInput) {
  return callVscodeApi("browser-use-file-transfer-origin-add", {
    params: {
      kind,
      targetOrigin: origin,
      transferKind,
    },
  });
}
export function useRemoveBrowserUseOriginMutation() {
  return useBrowserUseOriginStateMutation(
    removeBrowserUseOrigin,
    "Failed to update browser-use origin state",
  );
}
function removeBrowserUseOrigin({
  kind,
  origin,
}: BrowserUseOriginMutationInput) {
  return callVscodeApi("browser-use-origin-remove", {
    params: {
      kind,
      targetOrigin: origin,
    },
  });
}
export function useRemoveBrowserUseFileTransferOriginMutation() {
  return useBrowserUseOriginStateMutation(
    removeBrowserUseFileTransferOrigin,
    "Failed to update browser-use file transfer origin state",
  );
}
function removeBrowserUseFileTransferOrigin({
  kind,
  origin,
  transferKind,
}: BrowserUseFileTransferOriginMutationInput) {
  return callVscodeApi("browser-use-file-transfer-origin-remove", {
    params: {
      kind,
      targetOrigin: origin,
      transferKind,
    },
  });
}

export function initBrowserUseOriginStateQueriesChunk(): void {
  void browserUseOriginStateQuery;
  void browserUseOriginStateQueryKey;
}
