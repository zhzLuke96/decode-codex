// Restored from ref/webview/assets/profile-queries-BWvaDOFi.js
// profile-queries-BWvaDOFi chunk restored from the Codex webview bundle.
import { vscodeApiL as VscodeFetchBridge } from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import { CODEX_BASE64_HEADER, encodeBase64Bytes } from "../../utils/base64";
import {
  ProfileUsernameValidationError,
  stripUsernamePrefix,
  validateProfileUsername,
} from "./formatting";
import type {
  ProfileActivityInsights,
  ProfileUpdateInput,
  ProfileUsageData,
  QueryClientLike,
  WhamProfileResponse,
} from "./types";
export class ProfilePhotoUploadError extends Error {
  uploadError: unknown;
  constructor(uploadError: unknown) {
    super("Profile photo upload failed");
    this.uploadError = uploadError;
  }
}
export function getProfileUsageQueryKey({
  accountId,
  userId,
}: {
  accountId?: string | null;
  userId?: string | null;
}) {
  return ["profile", "usage", userId ?? null, accountId ?? null];
}
export async function fetchProfileUsage(): Promise<ProfileUsageData> {
  const response = (await codexRequest.safeGet(
    "/wham/profiles/me",
  )) as WhamProfileResponse;
  return {
    activityInsights: buildProfileActivityInsights(response.stats),
    dailyUsage:
      response.stats.daily_usage_buckets == null
        ? null
        : response.stats.daily_usage_buckets.map((bucket) => ({
            credits: bucket.tokens,
            date: bucket.start_date,
          })),
    displayName: response.profile.display_name?.trim() || null,
    hasStatsError: !!response.metadata.stats_error?.trim(),
    imageUrl: getProfilePictureUrl(response),
    summary: {
      currentStreakDays: response.stats.current_streak_days ?? null,
      longestStreakDays: response.stats.longest_streak_days ?? null,
      longestTaskDurationMs:
        response.stats.longest_running_turn_sec == null
          ? null
          : response.stats.longest_running_turn_sec * 1000,
      peakTokens: response.stats.peak_daily_tokens ?? null,
      totalTextTokens: response.stats.lifetime_tokens ?? null,
    },
    username: response.profile.username?.trim() || null,
  };
}
export async function uploadProfilePhotoAndGetUrl(photo: File) {
  return getProfilePictureUrl(
    await patchProfile({
      profile_asset_pointer: await uploadProfilePhoto(photo),
    }),
  );
}
export async function updateProfile(input: ProfileUpdateInput) {
  const requestBody: Record<string, unknown> = {};
  if (input.displayName != null) requestBody.display_name = input.displayName;
  if (input.photo != null) {
    try {
      requestBody.profile_asset_pointer = await uploadProfilePhoto(input.photo);
    } catch (error) {
      throw new ProfilePhotoUploadError(error);
    }
  }
  return patchProfile(requestBody);
}
export async function updateUsername(usernameInput: string) {
  const validation = validateProfileUsername(usernameInput);
  if (!validation.ok)
    throw new ProfileUsernameValidationError(validation.reason);
  await patchProfile({
    username: validation.username,
  });
}
export async function patchProfile(
  requestBody: Record<string, unknown>,
): Promise<WhamProfileResponse> {
  return codexRequest.safePatch("/wham/profiles/me", {
    requestBody,
  }) as Promise<WhamProfileResponse>;
}
export function updateCachedProfileFromResponse(
  queryClient: QueryClientLike,
  queryKey: readonly unknown[],
  response: WhamProfileResponse,
) {
  const cachedProfile = queryClient.getQueryData<ProfileUsageData>(queryKey);
  if (cachedProfile == null) return;
  queryClient.setQueryData(queryKey, {
    ...cachedProfile,
    activityInsights: buildProfileActivityInsights(response.stats),
    displayName: response.profile.display_name?.trim() || null,
    hasStatsError: !!response.metadata.stats_error?.trim(),
    imageUrl: getProfilePictureUrl(response),
  });
}
function getProfilePictureUrl(response: WhamProfileResponse) {
  return response.profile.profile_picture_url?.trim() || null;
}
function buildProfileActivityInsights(
  stats: WhamProfileResponse["stats"],
): ProfileActivityInsights {
  return {
    fastModePercent: stats.fast_mode_usage_percentage,
    invocations: stats.top_invocations,
    reasoningEffort: stats.most_used_reasoning_effort,
    reasoningEffortPercent: stats.most_used_reasoning_effort_percentage,
    skillsExplored: stats.unique_skills_used,
    totalSkillsUsed: stats.total_skills_used,
    totalThreads: stats.total_threads,
  };
}
async function uploadProfilePhoto(photo: File) {
  const boundary = createProfilePhotoBoundary();
  return (
    await VscodeFetchBridge.getInstance().post(
      "/wham/profiles/me/photo",
      encodeBase64Bytes(await buildProfilePhotoMultipartBody(photo, boundary)),
      {
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        [CODEX_BASE64_HEADER]: "1",
      },
    )
  ).body.asset_pointer as string;
}
async function buildProfilePhotoMultipartBody(photo: File, boundary: string) {
  const encoder = new TextEncoder();
  const fileBytes = new Uint8Array(await photo.arrayBuffer());
  const contentType = photo.type.trim() || "application/octet-stream";
  const filename = photo.name.trim().replace(/[\r\n"]/g, "") || "profile-photo";
  return concatBytes([
    encoder.encode(`--${boundary}\r\n`),
    encoder.encode(
      `Content-Disposition: form-data; name="file"; filename="${filename}"\r\n`,
    ),
    encoder.encode(`Content-Type: ${contentType}\r\n\r\n`),
    fileBytes,
    encoder.encode(`\r\n--${boundary}--\r\n`),
  ]);
}
function createProfilePhotoBoundary() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? `----codex-profile-photo-${crypto.randomUUID()}`
    : `----codex-profile-photo-${Math.random().toString(36).slice(2)}`;
}
function concatBytes(parts: Uint8Array[]) {
  let byteLength = 0;
  for (const part of parts) byteLength += part.byteLength;
  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const part of parts) {
    bytes.set(part, offset);
    offset += part.byteLength;
  }
  return bytes;
}
export { stripUsernamePrefix };
