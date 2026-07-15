// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Headless bridge for the avatar (pet) overlay open state: mirrors the host's
// "changed" messages into the scoped open-state atom, logs a product event when
// the overlay transitions to closed, and requests the current state on mount.
import { useEffect } from "react";
import {
  hostMessageBridge,
  useHostMessageSubscription,
} from "../runtime/app-main-host-runtime";
import {
  appRootScope,
  avatarOverlayOpenStateAtom,
  AvatarOverlayActionProto,
  AvatarOverlayNotificationSourceProto,
  AvatarOverlayPetKindProto,
  AvatarOverlaySourceProto,
  AVATAR_OVERLAY_PRODUCT_EVENT_NAME,
  productEventLoggerAtom,
  useAtomValue,
  useScope,
  useSelectedAvatar,
} from "../boundaries/onboarding-commons-externals.facade";

interface SelectedAvatar {
  id: string;
}

interface AvatarOverlayProductEventInput {
  action: unknown;
  hasRunningCloudSession?: boolean | null;
  hasRunningLocalSession?: boolean | null;
  isNotificationTrayOpen?: boolean | null;
  notification?: { source?: string } | null;
  notificationCount?: number | null;
  selectedAvatar: SelectedAvatar;
  source: unknown;
}

function buildAvatarOverlayProductEventPayload({
  action,
  hasRunningCloudSession,
  hasRunningLocalSession,
  isNotificationTrayOpen,
  notification,
  notificationCount,
  selectedAvatar,
  source,
}: AvatarOverlayProductEventInput): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    action,
    source,
    petKind: selectedAvatar.id.startsWith("custom:")
      ? AvatarOverlayPetKindProto.CODEX_AVATAR_OVERLAY_PET_KIND_CUSTOM
      : AvatarOverlayPetKindProto.CODEX_AVATAR_OVERLAY_PET_KIND_BUILT_IN,
  };
  if (!selectedAvatar.id.startsWith("custom:")) {
    payload.builtInPetId = selectedAvatar.id;
  }
  if (notificationCount != null) payload.notificationCount = notificationCount;
  if (notification != null) {
    payload.notificationSource =
      notification.source === "cloud"
        ? AvatarOverlayNotificationSourceProto.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_CLOUD
        : AvatarOverlayNotificationSourceProto.CODEX_AVATAR_OVERLAY_NOTIFICATION_SOURCE_LOCAL;
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

function requestAvatarOverlayOpenState(): void {
  hostMessageBridge.dispatchMessage("avatar-overlay-open-state-request", {});
}

export function AvatarOverlayOpenStateBridge(): null {
  const scope = useScope(appRootScope);
  const productEventLogger = useAtomValue(productEventLoggerAtom);
  const { selectedAvatar } = useSelectedAvatar();

  useHostMessageSubscription(
    "avatar-overlay-open-state-changed",
    (message: { isOpen: boolean }) => {
      const wasOpen = scope.get(avatarOverlayOpenStateAtom);
      scope.set(avatarOverlayOpenStateAtom, message.isOpen);
      if (wasOpen !== message.isOpen && !message.isOpen) {
        productEventLogger.logProductEvent(
          AVATAR_OVERLAY_PRODUCT_EVENT_NAME,
          buildAvatarOverlayProductEventPayload({
            action: AvatarOverlayActionProto.CODEX_AVATAR_OVERLAY_ACTION_CLOSED,
            selectedAvatar,
            source:
              AvatarOverlaySourceProto.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
          }),
        );
      }
    },
    [productEventLogger, scope, selectedAvatar],
  );

  useEffect(requestAvatarOverlayOpenState, []);
  return null;
}
