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

var avatarOverlayBinding1,
  avatarOverlayBinding2,
  avatarOverlayBinding3,
  avatarOverlayBinding4,
  avatarOverlayBinding5,
  avatarOverlayBinding6,
  avatarOverlayBinding7,
  avatarOverlayBinding8,
  avatarOverlayBinding9,
  avatarOverlayBinding10,
  avatarOverlayBinding11,
  avatarOverlayBinding12,
  avatarOverlayBinding13,
  avatarOverlayBinding14 = once(() => {
    avatarOverlayBinding1 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    worktreeNewThreadQueryCompatSlotUpperXLowerM();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    avatarOverlayBinding2 = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
    intlFormatDateTimeRuntime();
    appServerDisconnectedAppServerSignal();
    initAvatarMascotButtonChunk();
    initBulletSeparatorChunk();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadOrchestratorCompatSlotUpperWLowerG();
    worktreeNewThreadQueryCompatSlotUpperOLowerM();
    worktreeNewThreadQueryCompatSlotLowerXLowerP();
    useComposedRefs();
    worktreeNewThreadQueryCompatSlotUpperSLowerS();
    worktreeNewThreadQueryCompatSlotUpperDLowerP();
    worktreeNewThreadQueryCompatSlotLowerPLowerH();
    appMainCurrentCompatSlotLowerOLowerM();
    projectHoverCardCurrentCompatSlotUpperT();
    appMainCurrentCompatSlotLowerILowerM();
    currentAppInitialSharedCompatSlotUnderscore();
    initAvatarOverlayPillChunk();
    initAvatarOverlayPillEmptyChunk();
    initAvatarOverlayNotificationSearchKeyChunk();
    initAvatarOverlayMascotWidthChunk();
    initAvatarOverlayActivityStatusChunk();
    initAvatarOverlayPillDismissButtonChunk();
    initAvatarOverlayPillActivityItemsChunk();
    initCompactWaitingRequestChunk();
    avatarOverlayBinding3 = currentAppInitialSharedCompatSlotLowerLLowerC();
    avatarOverlayBinding4 = createScopedSignalAtom({
      mascotLabel: {
        id: "petOverlay.mascotLabel",
        defaultMessage: "{petName} pet",
        description: "Accessible label for the floating Codex pet"
      },
      openNotification: {
        id: "avatarOverlay.openNotification",
        defaultMessage: "Open notification",
        description: "Accessible label for an actionable row in the floating avatar notification tray"
      },
      dismissNotification: {
        id: "avatarOverlay.dismissNotification",
        defaultMessage: "Dismiss {title}",
        description: "Accessible label for dismissing a notification in the floating avatar notification tray"
      },
      dismissNotificationTooltip: {
        id: "avatarOverlay.dismissNotificationTooltip",
        defaultMessage: "Dismiss",
        description: "Tooltip for the icon button that dismisses a floating avatar notification"
      },
      replyNotification: {
        id: "avatarOverlay.replyNotification",
        defaultMessage: "Reply to {title}",
        description: "Accessible label for replying to a floating avatar notification"
      },
      replyNotificationButton: {
        id: "avatarOverlay.replyNotificationButton",
        defaultMessage: "Reply",
        description: "Compact button label for replying to a floating avatar notification"
      },
      sendNotificationReply: {
        id: "avatarOverlay.sendNotificationReply",
        defaultMessage: "Send reply to {title}",
        description: "Accessible label for submitting a floating avatar notification reply"
      },
      notificationReplyPlaceholder: {
        id: "avatarOverlay.notificationReplyPlaceholder",
        defaultMessage: "Reply",
        description: "Placeholder for the one-line floating avatar notification reply input"
      },
      notificationReplyError: {
        id: "avatarOverlay.notificationReplyError",
        defaultMessage: "Unable to send reply",
        description: "Compact error shown when a floating avatar notification reply fails"
      },
      expandNotification: {
        id: "avatarOverlay.expandNotification",
        defaultMessage: "Expand {title}",
        description: "Accessible label for expanding a floating avatar notification row"
      },
      collapseNotification: {
        id: "avatarOverlay.collapseNotification",
        defaultMessage: "Collapse {title}",
        description: "Accessible label for collapsing a floating avatar notification row"
      },
      expandNotificationTooltip: {
        id: "avatarOverlay.expandNotificationTooltip",
        defaultMessage: "Expand",
        description: "Tooltip for the icon button that expands a floating avatar notification"
      },
      collapseNotificationTooltip: {
        id: "avatarOverlay.collapseNotificationTooltip",
        defaultMessage: "Collapse",
        description: "Tooltip for the icon button that collapses a floating avatar notification"
      },
      collapseNotificationTray: {
        id: "avatarOverlay.collapseNotificationTray",
        defaultMessage: "Collapse activity",
        description: "Accessible label and tooltip for the button that collapses the floating avatar activity tray"
      },
      resizeMascot: {
        id: "avatarOverlay.resizeMascot",
        defaultMessage: "Resize pet",
        description: "Accessible label for the handle that resizes the floating Codex pet"
      },
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description: "Accessible label for the list of floating avatar activity notifications"
      },
      latestNotifications: {
        id: "avatarOverlay.latestNotifications",
        defaultMessage: "Latest",
        description: "Label for the button that scrolls the floating avatar activity list back to the newest notifications"
      },
      showLatestNotifications: {
        id: "avatarOverlay.showLatestNotifications",
        defaultMessage: "Show latest activity",
        description: "Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications"
      },
      showOlderNotifications: {
        id: "avatarOverlay.showOlderNotifications",
        defaultMessage: "Show {count, plural, one {# older activity item} other {# older activity items}}",
        description: "Accessible label for the button that scrolls the floating avatar activity list toward older notifications"
      },
      olderNotificationCount: {
        id: "avatarOverlay.olderNotificationCount",
        defaultMessage: "{count, plural, one {# more} other {# more}}",
        description: "Label for the button that shows there are more floating avatar activity notifications below"
      },
      compactOlderNotificationCount: {
        id: "avatarOverlay.compactOlderNotificationCount",
        defaultMessage: "+{count}",
        description: "Compact label for the edge button that shows hidden floating avatar activity notifications"
      },
      questionStatusIcon: {
        id: "avatarOverlay.questionStatusIcon",
        defaultMessage: "Question",
        description: "Accessible label for a floating avatar notification waiting on a question answer"
      },
      compactPatchFileCount: {
        id: "avatarOverlay.compactPatchFileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
        description: "Compact file count for a patch request in the floating avatar notification tray"
      },
      compactPatchAdditions: {
        id: "avatarOverlay.compactPatchAdditions",
        defaultMessage: "+{count}",
        description: "Compact additions count for a patch request in the floating avatar notification tray"
      },
      compactPatchDeletions: {
        id: "avatarOverlay.compactPatchDeletions",
        defaultMessage: "-{count}",
        description: "Compact deletions count for a patch request in the floating avatar notification tray"
      }
    });
    avatarOverlayBinding5 = 2;
    avatarOverlayBinding6 = 2;
    avatarOverlayBinding7 = 0.035;
    avatarOverlayBinding8 = 32;
    avatarOverlayBinding9 = 84;
    avatarOverlayBinding10 = 512;
    avatarOverlayBinding11 = 1;
    avatarOverlayBinding12 = "group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]";
    avatarOverlayBinding13 = "!bg-token-main-surface-primary enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_94%,var(--color-token-foreground))]";
  });

export class AvatarOverlaySharedModule {
  static get avatarOverlayBinding2() {
    return avatarOverlayBinding2;
  }

  static get avatarOverlayBinding4() {
    return avatarOverlayBinding4;
  }

  static get avatarOverlayBinding5() {
    return avatarOverlayBinding5;
  }

  static get avatarOverlayBinding6() {
    return avatarOverlayBinding6;
  }

  static get avatarOverlayBinding7() {
    return avatarOverlayBinding7;
  }

  static get avatarOverlayBinding8() {
    return avatarOverlayBinding8;
  }

  static get avatarOverlayBinding9() {
    return avatarOverlayBinding9;
  }

  static get avatarOverlayBinding10() {
    return avatarOverlayBinding10;
  }

  static get avatarOverlayBinding11() {
    return avatarOverlayBinding11;
  }

  static get avatarOverlayBinding12() {
    return avatarOverlayBinding12;
  }

  static get avatarOverlayBinding13() {
    return avatarOverlayBinding13;
  }

  static get avatarOverlayBinding14() {
    return avatarOverlayBinding14;
  }
}
