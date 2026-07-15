// Restored from ref/webview/assets/usage-queries-CItzwIo9.js
// Auto top-up settings queries and mutations.

import {
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { Ln as usageSettingsSignal } from "../../boundaries/thread-context-inputs.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiU as queryTimings,
  vscodeApiUnderscore as useMutation,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import {
  ADD_CREDITS_NUDGE_EMAIL_MUTATION_KEY,
  AUTO_TOP_UP_QUERY_KEY,
} from "./query-keys";
import type {
  AutoTopUpSettings,
  AutoTopUpSettingsResponse,
  AutoTopUpUpdateInput,
  EnabledQueryInput,
} from "./types";
type AppScopeWithQuery = {
  query: {
    invalidate(signal: unknown): void;
  };
};
export function isImmediateTopUpFailureStatus(status: unknown): boolean {
  return status === "failed" || status === "payment_declined";
}
export function useAutoTopUpSettingsQuery({ enabled }: EnabledQueryInput) {
  return useQuery({
    queryKey: AUTO_TOP_UP_QUERY_KEY,
    queryFn: fetchAutoTopUpSettings,
    enabled,
    staleTime: queryTimings.ONE_MINUTE,
    refetchOnWindowFocus: false,
    select: normalizeAutoTopUpSettings,
  });
}
export function useAutoTopUpMutations(): {
  disableAutoTopUpMutation: unknown;
  enableAutoTopUpMutation: unknown;
  updateAutoTopUpMutation: unknown;
} {
  const appScope = useAppScope(appScopeRoot) as AppScopeWithQuery;
  const queryClient = useQueryClient();
  const onAutoTopUpSuccess = (response: AutoTopUpSettingsResponse) => {
    if (!isImmediateTopUpFailureStatus(response.immediate_top_up_status)) {
      updateAutoTopUpCache({
        appScope,
        queryClient,
        response,
      });
    }
  };
  return {
    enableAutoTopUpMutation: useMutation({
      mutationKey: [...AUTO_TOP_UP_QUERY_KEY, "enable"],
      mutationFn: enableAutoTopUp,
      onSuccess: onAutoTopUpSuccess,
    }),
    updateAutoTopUpMutation: useMutation({
      mutationKey: [...AUTO_TOP_UP_QUERY_KEY, "update"],
      mutationFn: updateAutoTopUp,
      onSuccess: onAutoTopUpSuccess,
    }),
    disableAutoTopUpMutation: useMutation({
      mutationKey: [...AUTO_TOP_UP_QUERY_KEY, "disable"],
      mutationFn: disableAutoTopUp,
      onSuccess: (response: AutoTopUpSettingsResponse) => {
        updateAutoTopUpCache({
          appScope,
          queryClient,
          response,
        });
      },
    }),
  };
}
export function useAddCreditsNudgeEmailMutation() {
  return useMutation({
    mutationKey: ADD_CREDITS_NUDGE_EMAIL_MUTATION_KEY,
    mutationFn: sendAddCreditsNudgeEmail,
  });
}
function fetchAutoTopUpSettings(): Promise<AutoTopUpSettingsResponse> {
  return codexRequest.safeGet("/subscriptions/auto_top_up/settings");
}
function enableAutoTopUp(
  input: AutoTopUpUpdateInput,
): Promise<AutoTopUpSettingsResponse> {
  return codexRequest.safePost("/subscriptions/auto_top_up/enable", {
    requestBody: input,
  });
}
function updateAutoTopUp(
  input: AutoTopUpUpdateInput,
): Promise<AutoTopUpSettingsResponse> {
  return codexRequest.safePost("/subscriptions/auto_top_up/update", {
    requestBody: {
      recharge_threshold: input.recharge_threshold,
      recharge_target: input.recharge_target,
      recharge_monthly_limit: input.recharge_monthly_limit,
    },
  });
}
function disableAutoTopUp(): Promise<AutoTopUpSettingsResponse> {
  return codexRequest.safePost("/subscriptions/auto_top_up/disable");
}
function sendAddCreditsNudgeEmail(input: unknown): Promise<unknown> {
  return codexRequest.safePost("/accounts/send_add_credits_nudge_email", {
    requestBody: input,
  });
}
function normalizeAutoTopUpSettings(
  response: AutoTopUpSettingsResponse,
): AutoTopUpSettings {
  return {
    isEnabled: response.is_enabled,
    rechargeThreshold: response.recharge_threshold ?? null,
    rechargeTarget: response.recharge_target ?? null,
    rechargeMonthlyLimit: response.recharge_monthly_limit ?? null,
  };
}
function updateAutoTopUpCache({
  appScope,
  queryClient,
  response,
}: {
  appScope: AppScopeWithQuery;
  queryClient: {
    setQueryData(queryKey: readonly unknown[], value: unknown): void;
  };
  response: AutoTopUpSettingsResponse;
}): void {
  queryClient.setQueryData(AUTO_TOP_UP_QUERY_KEY, response);
  if (response.immediate_top_up_status === "succeeded") {
    appScope.query.invalidate(usageSettingsSignal);
  }
}
