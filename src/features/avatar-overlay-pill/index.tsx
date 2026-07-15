// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Avatar overlay pill helpers restored from the Codex webview bundle.
export {
  getAvatarOverlayActivityStatusConfig,
  type AvatarOverlayActivityStatusConfig,
  type AvatarOverlayMascotState,
  type AvatarOverlayNotificationActivity,
} from "../avatar-overlay-realtime-voice-button/activity-status";
export {
  formatWaitingRequestAccessibleLabel,
  getWaitingRequestSearchText,
} from "../avatar-overlay-realtime-voice-button/waiting-request";
export { observeElementSize } from "../avatar-overlay-realtime-voice-button/resize-observer";
export {
  buildAvatarOverlayPillActivityItems,
  initAvatarOverlayPillActivityItemsChunk,
} from "./activity-items";
export { getLatestAvatarOverlayActivitySubtitle } from "./activity-subtitle";
export {
  AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
  AVATAR_OVERLAY_MAX_MASCOT_WIDTH_PX,
  AVATAR_OVERLAY_MIN_MASCOT_WIDTH_PX,
  AVATAR_OVERLAY_WIDTH_CSS_VARIABLE,
  clampAvatarOverlayMascotWidth,
  createAvatarOverlayMascotWidthStyle,
  getAvatarOverlayPillVisibilityMode,
  initAvatarOverlayMascotWidthChunk,
  useAvatarOverlayMascotWidth,
} from "./mascot-width";
export {
  AvatarOverlayPillDismissButton,
  initAvatarOverlayPillDismissButtonChunk,
} from "./dismiss-button";
export type {
  AvatarMascotWidthState,
  AvatarMascotWidthStyle,
  AvatarOverlayActivityItem,
  AvatarOverlayActivityStatus,
  AvatarOverlayDismissButtonProps,
  AvatarOverlayPillVisibilityMode,
  BuildAvatarOverlayPillActivityItemsOptions,
  CompactWaitingRequest,
  CompactWaitingRequestAction,
  IntlShapeLike,
} from "./types";

export function initAvatarOverlayActivityStatusChunk(): void {}
export function initCompactWaitingRequestChunk(): void {}
export function initAvatarOverlayPillEmptyChunk(): void {}
export function initAvatarOverlayPillChunk(): void {}
