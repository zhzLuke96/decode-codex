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
import { AvatarOverlayRowModule } from "./row";
import { AvatarOverlaySharedModule } from "./shared";
import { AvatarOverlayTrayHelpers } from "./tray-helpers";

function AvatarOverlayNotificationTray(avatarOverlayOperand1) {
  let {
      areNotificationsVisible,
      isTrayAboveMascot,
      isNotificationTrayVisible,
      notifications,
      onDismissNotification,
      onNotificationReplyEditorActiveChange,
      onOpenNotificationReply,
      onRunNotificationAction,
      onSubmitQuestionOption,
      onSubmitNotificationReply,
      prefersReducedMotion,
      restrictedCaption,
      trayMaxHeight
    } = avatarOverlayOperand1,
    avatarOverlayBinding135 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding136 = AvatarOverlaySharedModule.avatarOverlayBinding2.useRef(null),
    avatarOverlayBinding137 = buildAvatarOverlayNotificationSearchKey(notifications, avatarOverlayBinding135);
  let avatarOverlayBinding138 = avatarOverlayBinding137,
    avatarOverlayBinding139 = restrictedCaption == null ? "" : "caption",
    avatarOverlayBinding140 = isTrayAboveMascot ? "tray-above" : "tray-below",
    avatarOverlayBinding141 = [avatarOverlayBinding138, avatarOverlayBinding139, avatarOverlayBinding140];
  let avatarOverlayBinding142 = avatarOverlayBinding141.join("\0"),
    avatarOverlayBinding143 = notifications.length > AvatarOverlaySharedModule.avatarOverlayBinding5,
    avatarOverlayBinding144 = Math.max(0, notifications.length - AvatarOverlaySharedModule.avatarOverlayBinding5),
    avatarOverlayBinding145 = {
      hasScrollableContent: false,
      hasLatestNotificationsAbove: false,
      hiddenOlderNotificationCount: 0
    };
  let [avatarOverlayBinding146, avatarOverlayBinding147] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(avatarOverlayBinding145),
    [avatarOverlayBinding148, avatarOverlayBinding149] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(null),
    avatarOverlayBinding150 = AvatarOverlaySharedModule.avatarOverlayBinding2.useRef(null),
    avatarOverlayBinding151 = notifications.some(item => item.id === avatarOverlayBinding148) ? avatarOverlayBinding148 : null;
  let avatarOverlayBinding152 = avatarOverlayBinding151,
    avatarOverlayBinding153 = avatarOverlayBinding152 != null && areNotificationsVisible,
    avatarOverlayBinding154,
    avatarOverlayBinding155;
  avatarOverlayBinding154 = () => {
    if (avatarOverlayBinding153) return onNotificationReplyEditorActiveChange?.(true), () => {
      onNotificationReplyEditorActiveChange?.(false);
    };
  };
  avatarOverlayBinding155 = [avatarOverlayBinding153, onNotificationReplyEditorActiveChange];
  AvatarOverlaySharedModule.avatarOverlayBinding2.useEffect(avatarOverlayBinding154, avatarOverlayBinding155);
  let avatarOverlayBinding156, avatarOverlayBinding157;
  avatarOverlayBinding157 = () => {
    avatarOverlayBinding150.current?.focus();
  };
  avatarOverlayBinding156 = [];
  currentAppInitialSharedCompatSlotLowerY("avatar-overlay-keyboard-interaction-ready", avatarOverlayBinding157, avatarOverlayBinding156);
  let avatarOverlayBinding158 = Math.min(avatarOverlayBinding146.hiddenOlderNotificationCount, avatarOverlayBinding144),
    avatarOverlayBinding159 = avatarOverlayBinding146.hasScrollableContent,
    avatarOverlayBinding160 = areNotificationsVisible && avatarOverlayBinding159 && avatarOverlayBinding143 && avatarOverlayBinding146.hasLatestNotificationsAbove,
    avatarOverlayBinding161 = areNotificationsVisible && avatarOverlayBinding159 && avatarOverlayBinding143 && avatarOverlayBinding158 > 0,
    avatarOverlayBinding162 = areNotificationsVisible && avatarOverlayBinding159 && avatarOverlayBinding143,
    avatarOverlayBinding163 = areNotificationsVisible && avatarOverlayBinding159,
    avatarOverlayBinding164 = notifications.length > 0,
    avatarOverlayBinding165 = avatarOverlayBinding164 && avatarOverlayBinding143,
    avatarOverlayBinding166 = prefersReducedMotion ? {
      duration: 0
    } : {
      duration: 0.18,
      ease: [0.16, 1, 0.3, 1]
    };
  let avatarOverlayBinding167 = avatarOverlayBinding166,
    avatarOverlayBinding168 = restrictedCaption == null ? null : React.createElement(RestrictedCaptionPanel, {
      key: "restricted-caption",
      prefersReducedMotion,
      shouldInsetForScrollbar: avatarOverlayBinding163,
      text: restrictedCaption
    });
  let avatarOverlayBinding169 = avatarOverlayBinding168,
    avatarOverlayBinding170 = avatarOverlayOperand65 => {
      avatarOverlayBinding147(avatarOverlayOperand71 => {
        let avatarOverlayBinding381 = AvatarOverlayTrayHelpers.getNotificationTrayScrollState(avatarOverlayOperand65);
        return AvatarOverlayTrayHelpers.areNotificationTrayScrollStatesEqual(avatarOverlayOperand71, avatarOverlayBinding381) ? avatarOverlayOperand71 : avatarOverlayBinding381;
      });
    };
  let avatarOverlayBinding171 = avatarOverlayBinding170,
    avatarOverlayBinding172 = avatarOverlayOperand81 => {
      avatarOverlayBinding136.current = avatarOverlayOperand81;
      avatarOverlayOperand81 != null && avatarOverlayBinding171(avatarOverlayOperand81);
    };
  let avatarOverlayBinding173 = avatarOverlayBinding172,
    avatarOverlayBinding174 = () => {
      let avatarOverlayBinding346 = avatarOverlayBinding136.current;
      if (avatarOverlayBinding346 == null) return;
      avatarOverlayBinding171(avatarOverlayBinding346);
      let avatarOverlayBinding347 = window.requestAnimationFrame(() => {
          avatarOverlayBinding171(avatarOverlayBinding346);
        }),
        avatarOverlayBinding348 = new ResizeObserver(() => {
          avatarOverlayBinding171(avatarOverlayBinding346);
        });
      return avatarOverlayBinding348.observe(avatarOverlayBinding346), () => {
        window.cancelAnimationFrame(avatarOverlayBinding347);
        avatarOverlayBinding348.disconnect();
      };
    };
  let avatarOverlayBinding175;
  avatarOverlayBinding175 = [avatarOverlayBinding142, trayMaxHeight, avatarOverlayBinding171];
  AvatarOverlaySharedModule.avatarOverlayBinding2.useLayoutEffect(avatarOverlayBinding174, avatarOverlayBinding175);
  let _e = () => {
    let avatarOverlayBinding369 = avatarOverlayBinding136.current;
    avatarOverlayBinding369 != null && (avatarOverlayBinding369.scrollTo({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      top: 0
    }), avatarOverlayBinding147(AvatarOverlayTrayHelpers.getNotificationTrayScrollState(avatarOverlayBinding369, 0)));
  };
  let avatarOverlayBinding176 = _e,
    avatarOverlayBinding177 = () => {
      let avatarOverlayBinding365 = avatarOverlayBinding136.current;
      if (avatarOverlayBinding365 == null) return;
      let avatarOverlayBinding366 = AvatarOverlayTrayHelpers.getNotificationTrayScrollableHeight(avatarOverlayBinding365, avatarOverlayBinding158);
      avatarOverlayBinding365.scrollTo({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        top: avatarOverlayBinding366
      });
      avatarOverlayBinding147(AvatarOverlayTrayHelpers.getNotificationTrayScrollState(avatarOverlayBinding365, avatarOverlayBinding366));
    };
  let avatarOverlayBinding178 = avatarOverlayBinding177,
    avatarOverlayBinding179 = avatarOverlayBinding169 != null && "gap-1.5",
    avatarOverlayBinding180 = worktreeNewThreadQueryCompatSlotLowerMLowerH("relative flex w-full min-w-0 flex-col overflow-hidden", avatarOverlayBinding179);
  let be = avatarOverlayBinding165 ? {
    height: trayMaxHeight,
    maxHeight: trayMaxHeight
  } : undefined;
  let avatarOverlayBinding181 = isTrayAboveMascot ? null : avatarOverlayBinding169,
    avatarOverlayBinding182 = avatarOverlayBinding164 ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
      layout: avatarOverlayBinding165,
      className: "relative min-h-0 min-w-0 flex-1",
      transition: avatarOverlayBinding167
    }, React.createElement(worktreeNewThreadQueryCompatSlotLowerOLowerH, null, avatarOverlayBinding160 ? React.createElement(LatestNotificationsButton, {
      key: "latest",
      prefersReducedMotion,
      onClick: avatarOverlayBinding176
    }) : null), React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
      ref: avatarOverlayBinding173,
      animate: {
        opacity: isNotificationTrayVisible ? 1 : 0,
        y: isNotificationTrayVisible || prefersReducedMotion ? 0 : 3
      },
      "aria-label": avatarOverlayBinding135.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.notificationList),
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]", avatarOverlayBinding162 && "vertical-scroll-fade-mask snap-y snap-mandatory"),
      "data-avatar-overlay-size": "notification-tray-list",
      role: "list",
      initial: false,
      transition: prefersReducedMotion ? {
        duration: 0
      } : {
        duration: 0.16,
        ease: "easeOut"
      },
      onScroll: event => {
        let avatarOverlayBinding374 = AvatarOverlayTrayHelpers.getNotificationTrayScrollState(event.currentTarget);
        avatarOverlayBinding147(avatarOverlayOperand88 => AvatarOverlayTrayHelpers.areNotificationTrayScrollStatesEqual(avatarOverlayOperand88, avatarOverlayBinding374) ? avatarOverlayOperand88 : avatarOverlayBinding374);
      }
    }, notifications.map((item, index) => React.createElement(AvatarOverlayRowModule.AvatarOverlayNotificationRow, {
      key: item.id,
      isReplying: avatarOverlayBinding152 === item.id,
      notification: item,
      notificationIndex: index,
      onCloseReply: () => {
        avatarOverlayBinding149(avatarOverlayOperand87 => avatarOverlayOperand87 === item.id ? null : avatarOverlayOperand87);
      },
      onDismissNotification,
      onOpenReply: () => {
        onOpenNotificationReply?.(item);
        avatarOverlayBinding149(item.id);
      },
      onRunNotificationAction,
      onSubmitQuestionOption,
      onSubmitNotificationReply,
      prefersReducedMotion,
      replyInputRef: avatarOverlayBinding150
    }))), React.createElement(worktreeNewThreadQueryCompatSlotLowerOLowerH, null, avatarOverlayBinding161 ? React.createElement(OlderNotificationsButton, {
      key: "older",
      count: avatarOverlayBinding158,
      prefersReducedMotion,
      onClick: avatarOverlayBinding178
    }) : null)) : null;
  let avatarOverlayBinding183 = isTrayAboveMascot ? avatarOverlayBinding169 : null;
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
    layout: avatarOverlayBinding165,
    className: avatarOverlayBinding180,
    "data-avatar-overlay-size": "notification-tray-content",
    style: be,
    transition: avatarOverlayBinding167
  }, avatarOverlayBinding181, avatarOverlayBinding182, avatarOverlayBinding183);
}
function RestrictedCaptionPanel(avatarOverlayOperand9) {
  let {
      prefersReducedMotion,
      shouldInsetForScrollbar,
      text
    } = avatarOverlayOperand9,
    avatarOverlayBinding260 = AvatarOverlaySharedModule.avatarOverlayBinding2.useRef(null),
    avatarOverlayBinding261 = () => {
      let avatarOverlayBinding379 = avatarOverlayBinding260.current;
      avatarOverlayBinding379 != null && (avatarOverlayBinding379.scrollTop = avatarOverlayBinding379.scrollHeight);
    };
  let avatarOverlayBinding262;
  avatarOverlayBinding262 = [text];
  AvatarOverlaySharedModule.avatarOverlayBinding2.useLayoutEffect(avatarOverlayBinding261, avatarOverlayBinding262);
  let avatarOverlayBinding263 = {
    height: "auto",
    opacity: 1
  };
  let avatarOverlayBinding264 = shouldInsetForScrollbar && "[scrollbar-gutter:stable]",
    avatarOverlayBinding265 = worktreeNewThreadQueryCompatSlotLowerMLowerH("no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left", avatarOverlayBinding264);
  let avatarOverlayBinding266 = prefersReducedMotion ? false : {
    height: 0,
    opacity: 0
  };
  let avatarOverlayBinding267 = prefersReducedMotion ? {
    duration: 0
  } : {
    duration: 0.18,
    ease: [0.16, 1, 0.3, 1]
  };
  let avatarOverlayBinding268 = <div className="relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]">
      <div ref={avatarOverlayBinding260} className="text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground">
        {text}
      </div>
    </div>;
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
    "aria-live": "polite",
    animate: avatarOverlayBinding263,
    className: avatarOverlayBinding265,
    "data-avatar-overlay-size": "notification-tray-caption",
    initial: avatarOverlayBinding266,
    role: "status",
    transition: avatarOverlayBinding267
  }, avatarOverlayBinding268);
}
function LatestNotificationsButton(avatarOverlayOperand8) {
  let {
      onClick,
      prefersReducedMotion
    } = avatarOverlayOperand8,
    avatarOverlayBinding244 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding245 = avatarOverlayBinding244.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.showLatestNotifications);
  let avatarOverlayBinding246 = {
    opacity: 1,
    scale: 1,
    x: "-50%"
  };
  let avatarOverlayBinding247 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding248 = {
      opacity: 0,
      scale: avatarOverlayBinding247,
      x: "-50%"
    };
  let avatarOverlayBinding249 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding250 = {
      opacity: 0,
      scale: avatarOverlayBinding249,
      x: "-50%"
    };
  let avatarOverlayBinding251 = prefersReducedMotion ? {
    duration: 0
  } : {
    duration: 0.14,
    ease: "easeOut"
  };
  let avatarOverlayBinding252 = worktreeNewThreadQueryCompatSlotLowerMLowerH(AvatarOverlaySharedModule.avatarOverlayBinding12, "top-1 min-w-12");
  let avatarOverlayBinding253 = prefersReducedMotion ? undefined : {
    scale: 1.03
  };
  let avatarOverlayBinding254 = prefersReducedMotion ? undefined : {
    scale: 0.96
  };
  let avatarOverlayBinding255 = avatarOverlayBinding244.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.latestNotifications);
  let avatarOverlayBinding256 = <span>{avatarOverlayBinding255}</span>;
  let avatarOverlayBinding257 = React.createElement(worktreeNewThreadQueryCompatSlotUpperELowerP, {
    className: "icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block"
  });
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.button, {
    type: "button",
    "aria-label": avatarOverlayBinding245,
    "data-avatar-overlay-hit-region": "notification-scroll-control",
    animate: avatarOverlayBinding246,
    exit: avatarOverlayBinding248,
    initial: avatarOverlayBinding250,
    transition: avatarOverlayBinding251,
    className: avatarOverlayBinding252,
    whileHover: avatarOverlayBinding253,
    whileTap: avatarOverlayBinding254,
    onClick
  }, avatarOverlayBinding256, avatarOverlayBinding257);
}
function OlderNotificationsButton(avatarOverlayOperand7) {
  let {
      count,
      onClick,
      prefersReducedMotion
    } = avatarOverlayOperand7,
    avatarOverlayBinding225 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding226 = avatarOverlayBinding225.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.showOlderNotifications, {
      count
    });
  let avatarOverlayBinding227 = {
    opacity: 1,
    scale: 1,
    x: "-50%"
  };
  let avatarOverlayBinding228 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding229 = {
      opacity: 0,
      scale: avatarOverlayBinding228,
      x: "-50%"
    };
  let avatarOverlayBinding230 = prefersReducedMotion ? 1 : 0.96,
    avatarOverlayBinding231 = {
      opacity: 0,
      scale: avatarOverlayBinding230,
      x: "-50%"
    };
  let avatarOverlayBinding232 = prefersReducedMotion ? {
    duration: 0
  } : {
    duration: 0.14,
    ease: "easeOut"
  };
  let avatarOverlayBinding233 = worktreeNewThreadQueryCompatSlotLowerMLowerH(AvatarOverlaySharedModule.avatarOverlayBinding12, "bottom-1 min-w-9");
  let avatarOverlayBinding234 = prefersReducedMotion ? undefined : {
    scale: 1.03
  };
  let avatarOverlayBinding235 = prefersReducedMotion ? undefined : {
    scale: 0.96
  };
  let avatarOverlayBinding236 = avatarOverlayBinding225.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.compactOlderNotificationCount, {
    count
  });
  let avatarOverlayBinding237 = <span className="group-hover:hidden group-focus:hidden">
      {avatarOverlayBinding236}
    </span>;
  let avatarOverlayBinding238 = avatarOverlayBinding225.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.olderNotificationCount, {
    count
  });
  let avatarOverlayBinding239 = <span className="hidden group-hover:inline group-focus:inline">
      {avatarOverlayBinding238}
    </span>;
  let avatarOverlayBinding240 = React.createElement(worktreeNewThreadQueryCompatSlotUpperELowerP, {
    className: "icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block"
  });
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.button, {
    type: "button",
    "aria-label": avatarOverlayBinding226,
    "data-avatar-overlay-hit-region": "notification-scroll-control",
    animate: avatarOverlayBinding227,
    exit: avatarOverlayBinding229,
    initial: avatarOverlayBinding231,
    transition: avatarOverlayBinding232,
    className: avatarOverlayBinding233,
    whileHover: avatarOverlayBinding234,
    whileTap: avatarOverlayBinding235,
    onClick
  }, avatarOverlayBinding237, avatarOverlayBinding239, avatarOverlayBinding240);
}

export class AvatarOverlayTrayModule {
  static AvatarOverlayNotificationTray = AvatarOverlayNotificationTray;
}
