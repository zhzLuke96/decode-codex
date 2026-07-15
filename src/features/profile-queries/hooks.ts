// Restored from ref/webview/assets/profile-queries-BWvaDOFi.js
// profile-queries-BWvaDOFi chunk restored from the Codex webview bundle.
import { useDynamicConfig } from "../../vendor/statsig-current-runtime";
import {
  _vscodeApiC as VscodeApiError,
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiU as queryTimings,
  vscodeApiUnderscore as useMutation,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import {
  fetchProfileUsage,
  getProfileUsageQueryKey,
  updateCachedProfileFromResponse,
  updateProfile,
  updateUsername,
  uploadProfilePhotoAndGetUrl,
} from "./api";
import { stripUsernamePrefix } from "./formatting";
import type { ProfileIdentity, ProfileUsageData } from "./types";
const PROFILE_USAGE_DYNAMIC_CONFIG_ID = "3503973010";
const PROFILE_USAGE_STALE_TIME_PARAM = "profile_usage_query_stale_time_ms";
const PROFILE_USAGE_WARM_FETCH_PARAM = "profile_usage_warm_fetch_enabled";
export function useProfileUsageQuery({
  accountId,
  enabled,
  userId,
}: ProfileIdentity & {
  enabled: boolean;
}) {
  const dynamicConfig = useDynamicConfig(PROFILE_USAGE_DYNAMIC_CONFIG_ID);
  const staleTime = dynamicConfig.get(
    PROFILE_USAGE_STALE_TIME_PARAM,
    queryTimings.SIX_HOURS,
  );
  const queryKey = getProfileUsageQueryKey({
    accountId,
    userId,
  });
  const isEnabled = enabled && true;
  const queryFn = async () => {
    const hasAccountId = accountId != null;
    const hasUserId = userId != null;
    if (!hasAccountId || !hasUserId) {
      vscodeLogger.warning("profile_usage_query_started_without_identity", {
        safe: {
          hasAccountId,
          hasUserId,
        },
        sensitive: {},
      });
    }
    try {
      return await fetchProfileUsage();
    } catch (error) {
      vscodeLogger.warning("profile_usage_query_failed", {
        safe: {
          errorCode:
            error instanceof VscodeApiError ? (error.errorCode ?? null) : null,
          hasAccountId,
          hasUserId,
          status: error instanceof VscodeApiError ? error.status : null,
        },
        sensitive: {},
      });
      throw error;
    }
  };
  return useQuery({
    queryKey,
    enabled: isEnabled,
    queryFn,
    staleTime,
  });
}
export function useProfileUsageWarmFetchEnabled() {
  const dynamicConfig = useDynamicConfig(PROFILE_USAGE_DYNAMIC_CONFIG_ID);
  return dynamicConfig.get(PROFILE_USAGE_WARM_FETCH_PARAM, true);
}
export function useUpdateProfileMutation({
  accountId,
  userId,
}: ProfileIdentity) {
  const queryClient = useQueryClient();
  const queryKey = getProfileUsageQueryKey({
    accountId,
    userId,
  });
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (response) => {
      updateCachedProfileFromResponse(queryClient, queryKey, response);
    },
  });
}
export function useUpdateUsernameMutation({
  accountId,
  userId,
}: ProfileIdentity) {
  const queryClient = useQueryClient();
  const queryKey = getProfileUsageQueryKey({
    accountId,
    userId,
  });
  return useMutation({
    mutationFn: updateUsername,
    onSuccess: (_response, usernameInput) => {
      const cachedProfile =
        queryClient.getQueryData<ProfileUsageData>(queryKey);
      if (cachedProfile != null) {
        queryClient.setQueryData(queryKey, {
          ...cachedProfile,
          username: stripUsernamePrefix(usernameInput) || null,
        });
      }
    },
  });
}
export function useUpdateProfilePhotoMutation({
  accountId,
  userId,
}: ProfileIdentity) {
  const queryClient = useQueryClient();
  const queryKey = getProfileUsageQueryKey({
    accountId,
    userId,
  });
  return useMutation({
    mutationFn: async (photo: File) => {
      const imageUrl = await uploadProfilePhotoAndGetUrl(photo);
      const cachedProfile =
        queryClient.getQueryData<ProfileUsageData>(queryKey);
      if (cachedProfile != null) {
        queryClient.setQueryData(queryKey, {
          ...cachedProfile,
          imageUrl,
        });
      }
    },
  });
}

export function initProfileQueriesRuntimeChunk(): void {}
