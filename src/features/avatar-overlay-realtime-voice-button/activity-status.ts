// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
import { defineMessages } from "../../vendor/react-intl";
export type AvatarOverlayNotificationActivity =
  | null
  | undefined
  | {
      kind: "first-awake";
      isLoading?: boolean;
      level?: string;
    }
  | {
      kind?: string;
      isLoading?: boolean;
      level?: "warning" | "danger" | "success" | "info";
    };
export type AvatarOverlayMascotState =
  | "idle"
  | "waving"
  | "running"
  | "waiting"
  | "failed"
  | "review";
export type AvatarOverlayActivityStatusConfig = {
  badgeBackgroundColor: string;
  badgeForegroundColor: string;
  fallbackBodyMessage: unknown;
  iconClassName: string;
  iconType: "clock" | "spinner" | "warning" | "check-circle";
  labelMessage: unknown;
  mascotState: AvatarOverlayMascotState;
};
const activityStatusMessages = defineMessages({
  running: {
    id: "avatarOverlay.statusRunning",
    defaultMessage: "Running",
    description: "Status label shown for a loading notification",
  },
  runningFallbackBody: {
    id: "avatarOverlay.statusRunningSubtitle",
    defaultMessage: "Thinking",
    description:
      "Fallback body shown for a loading notification when no richer activity text is available",
  },
  waiting: {
    id: "avatarOverlay.statusWaiting",
    defaultMessage: "Needs input",
    description: "Status label shown for a notification waiting on user input",
  },
  review: {
    id: "avatarOverlay.statusReview",
    defaultMessage: "Ready",
    description:
      "Status label shown for a notification with unread completed output",
  },
  failed: {
    id: "avatarOverlay.statusFailed",
    defaultMessage: "Blocked",
    description: "Status label shown for a notification that failed",
  },
  info: {
    id: "avatarOverlay.statusInfo",
    defaultMessage: "Info",
    description: "Status label shown for an informational notification",
  },
});
const idleActivityStatusConfig: AvatarOverlayActivityStatusConfig = {
  badgeBackgroundColor: "var(--color-token-activity-bar-badge-background)",
  badgeForegroundColor: "var(--color-token-activity-bar-badge-foreground)",
  fallbackBodyMessage: activityStatusMessages.info,
  iconClassName: "icon-xs shrink-0 text-token-text-secondary",
  iconType: "clock",
  labelMessage: activityStatusMessages.info,
  mascotState: "idle",
};
const firstAwakeActivityStatusConfig: AvatarOverlayActivityStatusConfig = {
  ...idleActivityStatusConfig,
  mascotState: "waving",
};
export function getAvatarOverlayActivityStatusConfig(
  activity: AvatarOverlayNotificationActivity,
): AvatarOverlayActivityStatusConfig {
  if (activity == null) return idleActivityStatusConfig;
  if (activity.kind === "first-awake") return firstAwakeActivityStatusConfig;
  if (activity.isLoading) {
    return {
      badgeBackgroundColor: "var(--color-token-activity-bar-badge-background)",
      badgeForegroundColor: "var(--color-token-activity-bar-badge-foreground)",
      fallbackBodyMessage: activityStatusMessages.runningFallbackBody,
      iconClassName: "icon-xs shrink-0 text-token-text-secondary",
      iconType: "spinner",
      labelMessage: activityStatusMessages.running,
      mascotState: "running",
    };
  }
  switch (activity.level) {
    case "warning":
      return {
        badgeBackgroundColor: "var(--color-token-editor-warning-foreground)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: activityStatusMessages.waiting,
        iconClassName: "icon-xs shrink-0 text-token-editor-warning-foreground",
        iconType: "clock",
        labelMessage: activityStatusMessages.waiting,
        mascotState: "waiting",
      };
    case "danger":
      return {
        badgeBackgroundColor: "var(--color-token-error-foreground)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: activityStatusMessages.failed,
        iconClassName: "icon-xs shrink-0 text-token-error-foreground",
        iconType: "warning",
        labelMessage: activityStatusMessages.failed,
        mascotState: "failed",
      };
    case "success":
      return {
        badgeBackgroundColor: "var(--color-token-charts-green)",
        badgeForegroundColor: "var(--color-token-bg-primary)",
        fallbackBodyMessage: activityStatusMessages.review,
        iconClassName: "icon-xs shrink-0 text-token-charts-green",
        iconType: "check-circle",
        labelMessage: activityStatusMessages.review,
        mascotState: "review",
      };
    case "info":
      return idleActivityStatusConfig;
  }
}
