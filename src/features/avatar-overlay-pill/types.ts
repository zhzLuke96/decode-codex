// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Typed surfaces shared by the avatar overlay pill modules.
import type { CSSProperties } from "react";
import type {
  AvatarOverlayActivityStatus,
  CompactWaitingRequest,
  CompactWaitingRequestAction,
  IntlShapeLike,
} from "../avatar-overlay-realtime-voice-button/types";

export type {
  AvatarOverlayActivityStatus,
  CompactWaitingRequest,
  CompactWaitingRequestAction,
  IntlShapeLike,
};

export type AvatarOverlayActivityItem = {
  actionPath: string;
  controlTarget:
    | {
        type: "app-server-conversation";
        conversationId: string;
      }
    | {
        type: "cloud-task";
        taskId: string;
        turnId: string;
      }
    | null;
  hostId: string | null;
  key: string;
  localConversationId: string | null;
  showInNotificationTray: boolean;
  sortAtMs: number;
  source: "local" | "remote-host" | "cloud";
  status: AvatarOverlayActivityStatus;
  subtitle: string | null;
  title: string;
  turnKey: string | null;
  updatedAtMs: number;
  waitingRequest: CompactWaitingRequest | null;
};

export type BuildAvatarOverlayPillActivityItemsOptions = {
  excludedConversationId?: string | null;
  includeCompactWaitingRequests: boolean;
  includeMcpElicitationCancelAction?: boolean;
  intl: IntlShapeLike;
  localConversations: any[];
  remoteTasks: any[];
};

export type AvatarOverlayPillVisibilityMode = "hidden" | "pet" | "voice-orb";

export type AvatarMascotWidthState = {
  mascotWidthPx: number | null;
  setMascotWidthPx(widthPx: number | null): void;
};

export type AvatarOverlayDismissButtonProps = {
  ariaLabel: string;
  onClick: () => void;
};

export type AvatarMascotWidthStyle = CSSProperties & {
  "--codex-avatar-width"?: string;
};
