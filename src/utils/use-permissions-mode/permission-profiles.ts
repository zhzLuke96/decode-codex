// Restored from ref/webview/assets/use-permissions-mode-H7h2gKaw.js
// use-permissions-mode-H7h2gKaw chunk restored from the Codex webview bundle.
import {
  appScopeP as createAppScopeQueryFamily,
  appScopeT as appScopeRoot,
} from "../../boundaries/app-scope";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import { vscodeApiU as queryTimes } from "../../boundaries/vscode-api";
import {
  PERMISSION_PROFILES_PAGE_SIZE,
  READ_ONLY_PERMISSION_PROFILE_ID,
  WORKSPACE_PERMISSION_PROFILE_ID,
} from "./constants";
import type {
  ConfigRequirements,
  HostId,
  PermissionProfile,
  PermissionProfilesResponse,
} from "./types";
async function listPermissionProfiles(
  hostId: HostId,
  cwd?: string | null,
): Promise<PermissionProfile[]> {
  const profiles: PermissionProfile[] = [];
  let cursor: string | null = null;
  do {
    const response = (await sendAppServerRequest("list-permission-profiles", {
      hostId,
      cursor,
      limit: PERMISSION_PROFILES_PAGE_SIZE,
      cwd,
    })) as PermissionProfilesResponse;
    profiles.push(...response.data);
    cursor = response.nextCursor ?? null;
  } while (cursor != null);
  return profiles;
}
function buildPermissionProfilesQueryKey(hostId: HostId, cwd?: string | null) {
  return ["permission-profiles", "list", hostId, cwd ?? "no-cwd"];
}
export function selectAvailablePermissionProfiles(
  profiles: PermissionProfile[],
  requirements: ConfigRequirements,
  configuredDefaultProfileId: string | null,
) {
  const allowedPermissionProfiles = requirements?.allowedPermissionProfiles;
  const availableProfiles =
    allowedPermissionProfiles == null
      ? profiles
      : profiles.filter(({ id }) => allowedPermissionProfiles[id] === true);
  const configuredDefaultIsAvailable = availableProfiles.some(
    ({ id }) => id === configuredDefaultProfileId,
  );
  const fallbackDefaultProfileId =
    requirements?.defaultPermissions ??
    (configuredDefaultIsAvailable ? configuredDefaultProfileId : null) ??
    (allowedPermissionProfiles?.[READ_ONLY_PERMISSION_PROFILE_ID] === true &&
    allowedPermissionProfiles[WORKSPACE_PERMISSION_PROFILE_ID] === true
      ? WORKSPACE_PERMISSION_PROFILE_ID
      : null);
  return {
    profiles: availableProfiles,
    defaultProfileId:
      fallbackDefaultProfileId != null &&
      availableProfiles.some(({ id }) => id === fallbackDefaultProfileId)
        ? fallbackDefaultProfileId
        : null,
  };
}
export const permissionProfilesQuery = createAppScopeQueryFamily(
  appScopeRoot,
  ({ hostId, cwd }: { cwd?: string | null; hostId: HostId }) => ({
    queryKey: buildPermissionProfilesQueryKey(hostId, cwd),
    queryFn: () => listPermissionProfiles(hostId, cwd),
    staleTime: queryTimes.ONE_MINUTE,
  }),
);

export function initPermissionProfilesQueryChunk(): void {
  void permissionProfilesQuery;
}
