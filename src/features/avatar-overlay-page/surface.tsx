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
import { AvatarOverlayTrayModule } from "./tray";

function AvatarOverlaySurface({
  avatar,
  avatarMenuItems,
  interactiveRegionRef,
  isDragging = false,
  isNotificationTrayOpen = true,
  restrictedSurface,
  layout,
  mascotLayout = layout.mascot,
  mascotStyle,
  mascotDragState,
  mascotResizeHandle,
  notifications,
  onLostPointerCapture,
  onCloseNotificationTray,
  onPointerCancel,
  onPointerDown,
  onPointerMove: avatarOverlayOperand3,
  onPointerUp,
  onDismissNotification,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onNotificationReplyEditorActiveChange,
  onOpenNotificationReply,
  onSubmitNotificationReply,
  onOpenNotificationTray
}) {
  let avatarOverlayBinding188 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding189 = worktreeNewThreadQueryCompatSlotUpperQLowerM(),
    avatarOverlayBinding190 = getAvatarOverlayActivityStatusConfig(notifications[0]),
    avatarOverlayBinding191 = notifications.length > 0,
    avatarOverlayBinding192 = restrictedSurface?.phase ?? "inactive",
    avatarOverlayBinding193 = getAvatarOverlayPillVisibilityMode(restrictedSurface?.isSessionActive ?? false, avatarOverlayBinding192 !== "inactive"),
    avatarOverlayBinding194 = avatarOverlayBinding193 === "voice-orb",
    avatarOverlayBinding195 = avatarOverlayBinding193 === "hidden",
    avatarOverlayBinding196 = avatarOverlayBinding193 === "pet" ? mascotLayout : {
      ...mascotLayout,
      height: 121,
      width: 112
    },
    avatarOverlayBinding197 = avatarOverlayBinding191 && isNotificationTrayOpen;
  restrictedSurface?.controlsHovered;
  let avatarOverlayBinding198 = restrictedSurface?.caption ?? null,
    avatarOverlayBinding199 = avatarOverlayBinding197 || avatarOverlayBinding198 != null,
    avatarOverlayBinding200 = avatarOverlayBinding191 || avatarOverlayBinding199,
    avatarOverlayBinding201 = layout.placement.startsWith("top"),
    avatarOverlayBinding202 = layout.placement.endsWith("end"),
    avatarOverlayBinding203 = notifications.length > AvatarOverlaySharedModule.avatarOverlayBinding5,
    avatarOverlayBinding204 = layout.tray == null ? undefined : Math.max(0, layout.tray.height),
    avatarOverlayBinding205 = `${avatarOverlayBinding201 ? "bottom" : "top"} ${avatarOverlayBinding202 ? "right" : "left"}`,
    avatarOverlayBinding206;
  avatarOverlayBinding197 ? avatarOverlayBinding206 = {
    ariaLabel: avatarOverlayBinding188.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.collapseNotificationTray),
    backgroundColor: "var(--color-token-bg-primary)",
    content: React.createElement(worktreeNewThreadQueryCompatSlotLowerFLowerH, {
      className: "icon-xs opacity-80"
    }),
    foregroundColor: "var(--color-token-text-secondary)",
    isIconOnly: true,
    onClick: onCloseNotificationTray
  } : avatarOverlayBinding191 && (avatarOverlayBinding206 = {
    ariaLabel: avatarOverlayBinding188.formatMessage({
      id: "avatarOverlay.toggleNotificationTray",
      defaultMessage: "Open activity tray, {count, plural, one {# item} other {# items}}",
      description: "Accessible label for the floating avatar activity count button"
    }, {
      count: notifications.length
    }),
    backgroundColor: avatarOverlayBinding190.badgeBackgroundColor,
    content: notifications.length,
    foregroundColor: avatarOverlayBinding190.badgeForegroundColor,
    onClick: onOpenNotificationTray
  });
  let avatarOverlayBinding207 = React.createElement(AvatarMascotButton, {
    ariaLabel: avatarOverlayBinding188.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.mascotLabel, {
      petName: avatar.displayName
    }),
    assetRef: avatar.assetRef,
    spritesheetUrl: avatar.spritesheetUrl,
    notificationBadge: avatarOverlayBinding206,
    resizeHandle: mascotResizeHandle == null ? undefined : {
      ariaLabel: avatarOverlayBinding188.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.resizeMascot),
      ...mascotResizeHandle
    },
    state: avatarOverlayBinding190.mascotState,
    style: mascotStyle,
    transientState: mascotDragState
  });
  return <main className="relative h-screen w-screen overflow-hidden bg-transparent">
      <section ref={interactiveRegionRef} data-avatar-overlay-content-frame="true" className="relative h-full w-full cursor-grab active:cursor-grabbing" onLostPointerCapture={onLostPointerCapture} onPointerCancel={onPointerCancel} onPointerDown={onPointerDown} onPointerMove={avatarOverlayOperand3} onPointerUp={onPointerUp}>
        {avatarOverlayBinding200 ? <div aria-hidden={avatarOverlayBinding199 ? undefined : true} data-avatar-overlay-hit-region="notification-tray" inert={!avatarOverlayBinding199} className={worktreeNewThreadQueryCompatSlotLowerMLowerH("absolute flex cursor-interaction text-sm text-token-foreground", avatarOverlayBinding201 ? "items-end" : "items-start")} style={{
        height: layout.tray?.height,
        left: layout.tray?.left,
        pointerEvents: avatarOverlayBinding199 ? undefined : "none",
        top: layout.tray?.top,
        visibility: layout.tray == null ? "hidden" : undefined,
        width: layout.tray?.width
      }}>
            {React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
          animate: {
            opacity: avatarOverlayBinding199 ? 1 : 0,
            scale: avatarOverlayBinding199 || avatarOverlayBinding189 ? 1 : 0.97,
            y: avatarOverlayBinding199 || avatarOverlayBinding189 ? 0 : 8
          },
          className: "relative w-full overflow-hidden [corner-shape:var(--codex-corner-shape)]",
          "data-avatar-overlay-size": "notification-tray",
          initial: false,
          style: avatarOverlayBinding203 ? {
            maxHeight: avatarOverlayBinding204,
            transformOrigin: avatarOverlayBinding205
          } : {
            transformOrigin: avatarOverlayBinding205
          },
          transition: avatarOverlayBinding189 ? {
            duration: 0
          } : {
            damping: 26,
            mass: 0.8,
            stiffness: 360,
            type: "spring"
          }
        }, <div className="h-0 overflow-hidden" data-avatar-overlay-size="notification-tray-header" />, <div>
                    {React.createElement(AvatarOverlayTrayModule.AvatarOverlayNotificationTray, {
            areNotificationsVisible: avatarOverlayBinding197,
            isTrayAboveMascot: avatarOverlayBinding201,
            isNotificationTrayVisible: avatarOverlayBinding199,
            notifications,
            prefersReducedMotion: !!avatarOverlayBinding189,
            restrictedCaption: avatarOverlayBinding198,
            trayMaxHeight: avatarOverlayBinding204,
            onDismissNotification,
            onRunNotificationAction,
            onSubmitQuestionOption,
            onNotificationReplyEditorActiveChange,
            onOpenNotificationReply,
            onSubmitNotificationReply
          })}
                  </div>)}
          </div> : null}
        {React.createElement(worktreeNewThreadOrchestratorCompatSlotUpperULowerG, {
        items: avatarMenuItems
      }, <div data-avatar-overlay-hit-region={avatarOverlayBinding195 ? undefined : "mascot"} className={worktreeNewThreadQueryCompatSlotLowerMLowerH("group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none", avatarOverlayBinding195 && "pointer-events-none", isDragging && !avatarOverlayBinding194 ? "scale-95 transition-transform" : "transition-none")} style={{
        height: avatarOverlayBinding196.height,
        left: avatarOverlayBinding196.left,
        top: avatarOverlayBinding196.top,
        width: avatarOverlayBinding196.width
      }}>
                {avatarOverlayBinding207}
              </div>)}
      </section>
    </main>;
}

export class AvatarOverlaySurfaceModule {
  static AvatarOverlaySurface = AvatarOverlaySurface;
}
