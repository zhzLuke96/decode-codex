// Restored from ref/webview/assets/avatar-overlay-analytics-Ene8S7OJ.js
// avatar-overlay-analytics-Ene8S7OJ chunk restored from the Codex webview bundle.
import {
  CodexAvatarOverlayNotificationSource,
  CodexAvatarOverlayPetKind,
} from "../analytics/product-logger";
type AvatarOverlayNotification = {
  source: "cloud" | "local" | string;
};
type AvatarOverlayAvatar = {
  id: string;
};
export type AvatarOverlayAnalyticsInput = {
  action: unknown;
  hasRunningCloudSession?: boolean | null;
  hasRunningLocalSession?: boolean | null;
  isNotificationTrayOpen?: boolean | null;
  notification?: AvatarOverlayNotification | null;
  notificationCount?: number | null;
  selectedAvatar: AvatarOverlayAvatar;
  source: unknown;
};
export type AvatarOverlayAnalyticsPayload = {
  action: unknown;
  builtInPetId?: string;
  hasRunningCloudSession?: boolean;
  hasRunningLocalSession?: boolean;
  isNotificationTrayOpen?: boolean;
  notificationCount?: number;
  notificationSource?: string;
  petKind: string;
  source: unknown;
};
export function avatarOverlayAnalytics({
  action,
  hasRunningCloudSession,
  hasRunningLocalSession,
  isNotificationTrayOpen,
  notification,
  notificationCount,
  selectedAvatar,
  source,
}: AvatarOverlayAnalyticsInput): AvatarOverlayAnalyticsPayload {
  const isCustomAvatar = selectedAvatar.id.startsWith("custom:");
  const payload: AvatarOverlayAnalyticsPayload = {
    action,
    source,
    petKind: isCustomAvatar
      ? CodexAvatarOverlayPetKind.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM
      : CodexAvatarOverlayPetKind.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN,
  };
  if (!isCustomAvatar) {
    payload.builtInPetId = selectedAvatar.id;
  }
  if (notificationCount != null) {
    payload.notificationCount = notificationCount;
  }
  if (notification != null) {
    payload.notificationSource =
      notification.source === "cloud"
        ? CodexAvatarOverlayNotificationSource.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_CLOUD
        : CodexAvatarOverlayNotificationSource.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL;
  }
  if (hasRunningLocalSession != null) {
    payload.hasRunningLocalSession = hasRunningLocalSession;
  }
  if (hasRunningCloudSession != null) {
    payload.hasRunningCloudSession = hasRunningCloudSession;
  }
  if (isNotificationTrayOpen != null) {
    payload.isNotificationTrayOpen = isNotificationTrayOpen;
  }
  return payload;
}

export function initAvatarOverlayAnalyticsChunk(): void {}
