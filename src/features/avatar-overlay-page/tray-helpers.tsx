// Restored from ref/webview/assets/avatar-overlay-page-DdqF43YR.js
// Avatar overlay page restored from the current Codex webview chunk.

import React from "react";
import { once, toEsModule } from "../../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotUpperVLowerO,
  currentAppInitialSharedCompatSlotLowerY,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerG,
  worktreeNewThreadOrchestratorCompatSlotUpperWLowerG,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperDLowerM,
  worktreeNewThreadQueryCompatSlotUpperDLowerP,
  worktreeNewThreadQueryCompatSlotUpperELowerM,
  worktreeNewThreadQueryCompatSlotUpperELowerP,
  worktreeNewThreadQueryCompatSlotLowerFLowerH,
  worktreeNewThreadQueryCompatSlotLowerHLowerH,
  worktreeNewThreadQueryCompatSlotLowerILowerC,
  worktreeNewThreadQueryCompatSlotLowerILowerH,
  worktreeNewThreadQueryCompatSlotUpperJLowerD,
  worktreeNewThreadQueryCompatSlotLowerMLowerF,
  worktreeNewThreadQueryCompatSlotLowerMLowerH,
  worktreeNewThreadQueryCompatSlotLowerOLowerH,
  worktreeNewThreadQueryCompatSlotUpperOLowerM,
  worktreeNewThreadQueryCompatSlotLowerPLowerH,
  worktreeNewThreadQueryCompatSlotUpperQLowerM,
  worktreeNewThreadQueryCompatSlotLowerSLowerC,
  worktreeNewThreadQueryCompatSlotUpperSLowerS,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotUpperXLowerM,
  worktreeNewThreadQueryCompatSlotLowerXLowerP,
  worktreeNewThreadQueryCompatSlotLowerXLowerS,
  worktreeNewThreadQueryCompatSlotLowerYLowerP,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedFunction0034,
  currentAppInitialSharedAcceptDeclineCancelFunction,
  currentAppInitialSharedMember0547,
  currentAppInitialSharedMember0097,
  initPersistedAtomStorageRuntime,
  createScopedSignalAtom,
  analyticsMember0137,
  intlFormatDateTimeRuntime,
  remoteControlRefreshSourceEnum,
  currentAppInitialSharedMember0654,
  currentAppInitialSharedMember0210,
  appServerDisconnectedAppServerSignal,
  toolSuggestionAndConnectorSchema,
  currentAppInitialSharedMember0273,
  currentAppInitialSharedDisplayRuntime,
  remoteConnectionRuntime0298,
  currentAppInitialSharedMember0781,
  currentAppInitialSharedImplementPlanImplementationRuntime,
  currentAppInitialSharedMember0342,
  createSignalGetterAtom,
  currentAppInitialSharedRuntime0840,
  extractJsonSchemaRequiredFields,
  currentAppInitialSharedFunction0375,
  currentAppInitialSharedMember0864,
  currentAppInitialSharedFunction0895,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initAvatarOverlayOpenStateChunk,
  avatarOverlayAnalytics,
} from "../../vendor/automations-page-current-runtime";
import {
  initAvatarMascotButtonChunk,
  AvatarMascotButton,
} from "../../ui/avatar-mascot-button";
import {
  initBulletSeparatorChunk,
  BulletSeparator,
} from "../../runtime/current-app-initial/thread-app-shell-rate-limit-runtime";
import {
  pullRequestNewThreadCompatSlotUpperD,
  pullRequestNewThreadCompatSlotLowerY,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotLowerALowerM,
  appMainCurrentCompatSlotLowerGLowerP,
  useComposedRefs,
  appMainCurrentCompatSlotLowerILowerM,
  appMainCurrentCompatSlotLowerOLowerM,
  appMainCurrentCompatSlotLowerRLowerM,
} from "../../vendor/app-main-current-runtime/index";
import {
  projectHoverCardCurrentCompatSlotUpperT,
  projectHoverCardCurrentCompatSlotLowerW,
} from "../../runtime/current-app-initial/project-hover-card-current-runtime";
import {
  createAvatarOverlayMascotWidthStyle,
  getAvatarOverlayPillVisibilityMode,
  getLatestAvatarOverlayActivitySubtitle,
  initAvatarOverlayPillActivityItemsChunk,
  getAvatarOverlayActivityStatusConfig,
  initCompactWaitingRequestChunk,
  clampAvatarOverlayMascotWidth,
  initAvatarOverlayPillEmptyChunk,
  getWaitingRequestSearchText,
  initAvatarOverlayPillDismissButtonChunk,
  initAvatarOverlayMascotWidthChunk,
  AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
  useAvatarOverlayMascotWidth,
  AvatarOverlayPillDismissButton,
  buildAvatarOverlayPillActivityItems,
  initAvatarOverlayActivityStatusChunk,
  observeElementSize,
  initAvatarOverlayPillChunk,
} from "../../features/avatar-overlay-pill";
import {
  isSelectedCustomAvatarMissing,
  initAvatarSelectionStateChunk,
} from "../../features/custom-avatars-query";
import {
  useFloatingWindowPointerInteractivity,
  initFloatingWindowPointerInteractivityChunk,
} from "../../utils/use-floating-window-pointer-interactivity";
import {
  initAvatarOverlayDebugStateChunk,
  avatarOverlayResizeButtonHiddenSignal,
} from "../../utils/avatar-overlay-debug-state";
import {
  initAvatarOverlayNotificationTrayChunk,
  resolveAvatarOverlayPointerDragRelease,
  initAvatarOverlayPointerDragChunk,
  collectAvatarOverlayNotifications,
  createAvatarOverlayPointerSample,
  useAvatarOverlaySelection,
  buildAvatarOverlayNotificationSearchKey,
  createFirstAwakeAvatarOverlayNotification,
  initAvatarOverlayNotificationSearchKeyChunk,
  initUseAvatarOverlaySelectionChunk,
  trimRecentAvatarOverlayPointerSamples,
} from "../../features/avatar-overlay-selection";
import { AvatarOverlaySharedModule } from "./shared";

function getNotificationTrayScrollableHeight(avatarOverlayOperand48, avatarOverlayOperand49) {
  if (avatarOverlayOperand49 <= AvatarOverlaySharedModule.avatarOverlayBinding5) return avatarOverlayOperand48.scrollHeight;
  let avatarOverlayBinding371 = getNotificationRowElements(avatarOverlayOperand48);
  return avatarOverlayBinding371[findNotificationRowIndexAtOffset(avatarOverlayBinding371, getNotificationScrollThreshold(avatarOverlayOperand48, avatarOverlayBinding371)) + AvatarOverlaySharedModule.avatarOverlayBinding5]?.offsetTop ?? avatarOverlayOperand48.scrollHeight;
}

function getNotificationTrayScrollState(avatarOverlayOperand18, avatarOverlayOperand19 = avatarOverlayOperand18.scrollTop) {
  if (!hasScrollableNotificationTray(avatarOverlayOperand18)) return {
    hasScrollableContent: false,
    hasLatestNotificationsAbove: false,
    hiddenOlderNotificationCount: 0
  };
  if (isNotificationTrayScrolledToEnd(avatarOverlayOperand18, avatarOverlayOperand19)) return {
    hasScrollableContent: true,
    hasLatestNotificationsAbove: true,
    hiddenOlderNotificationCount: 0
  };
  let avatarOverlayBinding341 = getNotificationRowElements(avatarOverlayOperand18),
    avatarOverlayBinding342 = getNotificationScrollThreshold(avatarOverlayOperand18, avatarOverlayBinding341, avatarOverlayOperand19);
  return {
    hasScrollableContent: true,
    hasLatestNotificationsAbove: avatarOverlayOperand19 > AvatarOverlaySharedModule.avatarOverlayBinding6,
    hiddenOlderNotificationCount: countHiddenOlderNotifications(avatarOverlayOperand18, avatarOverlayBinding341, avatarOverlayBinding342)
  };
}
function areNotificationTrayScrollStatesEqual(avatarOverlayOperand32, avatarOverlayOperand33) {
  return avatarOverlayOperand32.hasScrollableContent === avatarOverlayOperand33.hasScrollableContent && avatarOverlayOperand32.hasLatestNotificationsAbove === avatarOverlayOperand33.hasLatestNotificationsAbove && avatarOverlayOperand32.hiddenOlderNotificationCount === avatarOverlayOperand33.hiddenOlderNotificationCount;
}
function isNotificationTrayScrolledToEnd(avatarOverlayOperand59, avatarOverlayOperand60 = avatarOverlayOperand59.scrollTop) {
  let avatarOverlayBinding373 = Math.max(0, avatarOverlayOperand59.scrollHeight - avatarOverlayOperand59.clientHeight);
  return hasScrollableNotificationTray(avatarOverlayOperand59) && avatarOverlayOperand60 >= avatarOverlayBinding373 - AvatarOverlaySharedModule.avatarOverlayBinding6;
}
function hasScrollableNotificationTray(avatarOverlayOperand80) {
  return avatarOverlayOperand80.scrollHeight > avatarOverlayOperand80.clientHeight + AvatarOverlaySharedModule.avatarOverlayBinding6;
}

function countHiddenOlderNotifications(avatarOverlayOperand53, avatarOverlayOperand54, avatarOverlayOperand55) {
  let avatarOverlayBinding372 = avatarOverlayOperand55 + avatarOverlayOperand53.clientHeight - AvatarOverlaySharedModule.avatarOverlayBinding6;
  return avatarOverlayOperand54.filter(item => item.offsetTop + item.offsetHeight > avatarOverlayBinding372).length;
}
function getNotificationRowElements(avatarOverlayOperand67) {
  return Array.from(avatarOverlayOperand67.children).filter(item => item instanceof HTMLElement);
}
function getNotificationScrollThreshold(avatarOverlayOperand68, avatarOverlayOperand69, avatarOverlayOperand70 = avatarOverlayOperand68.scrollTop) {
  return avatarOverlayOperand70 + (avatarOverlayOperand69[0]?.offsetTop ?? 0) + AvatarOverlaySharedModule.avatarOverlayBinding6;
}
function findNotificationRowIndexAtOffset(avatarOverlayOperand63, avatarOverlayOperand64) {
  let avatarOverlayBinding377 = 0;
  for (let avatarOverlayBinding382 = 0; avatarOverlayBinding382 < avatarOverlayOperand63.length; avatarOverlayBinding382 += 1) avatarOverlayOperand63[avatarOverlayBinding382].offsetTop <= avatarOverlayOperand64 && (avatarOverlayBinding377 = avatarOverlayBinding382);
  return avatarOverlayBinding377;
}

export class AvatarOverlayTrayHelpers {
  static getNotificationTrayScrollableHeight = getNotificationTrayScrollableHeight;
  static getNotificationTrayScrollState = getNotificationTrayScrollState;
  static areNotificationTrayScrollStatesEqual = areNotificationTrayScrollStatesEqual;
}
