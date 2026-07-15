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
import { AvatarOverlaySurfaceModule } from "./surface";

export function AvatarOverlayPage() {
  let {
      selectedAvatar,
      selectedAvatarId
    } = useAvatarOverlaySelection(),
    avatarOverlayBinding298 = selectedAvatar == null,
    avatarOverlayBinding299,
    avatarOverlayBinding300;
  if (avatarOverlayBinding299 = () => {
    avatarOverlayBinding298 && currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-pointer-interaction-changed", {
      isInteractive: false
    });
  }, avatarOverlayBinding300 = [avatarOverlayBinding298], avatarOverlayReact.useEffect(avatarOverlayBinding299, avatarOverlayBinding300), selectedAvatar == null) return null;
  let avatarOverlayBinding301 = getAvatarOverlayReadinessKey(selectedAvatar, selectedAvatarId);
  return React.createElement(AvatarOverlayController, {
    key: avatarOverlayBinding301,
    selectedAvatar,
    selectedAvatarId
  });
}
function AvatarOverlayController({
  selectedAvatar,
  selectedAvatarId
}) {
  let avatarOverlayBinding30 = currentAppInitialSharedCompatSlotUpperKLowerO(currentAppInitialSharedCompatSlotUpperE),
    avatarOverlayBinding31 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding32 = currentAppInitialSharedMember0781("451951815"),
    avatarOverlayBinding33 = currentAppInitialSharedCompatSlotLowerQLowerO(analyticsMember0137),
    avatarOverlayBinding34 = currentAppInitialSharedCompatSlotLowerQLowerO(avatarOverlayResizeButtonHiddenSignal),
    avatarOverlayBinding35 = avatarOverlayBinding19,
    avatarOverlayBinding36 = avatarOverlayBinding35.phase !== "inactive" && true;
  currentAppInitialSharedCompatSlotUpperGLowerO(currentAppInitialSharedMember0547, undefined);
  let {
      data
    } = worktreeNewThreadQueryCompatSlotLowerSLowerC({
      enabled: avatarOverlayBinding36,
      hostId: undefined
    }),
    avatarOverlayBinding37 = avatarOverlayBinding36,
    [avatarOverlayBinding38, avatarOverlayBinding39] = avatarOverlayReact.useState(avatarOverlayBinding29),
    [avatarOverlayBinding40, avatarOverlayBinding41] = avatarOverlayReact.useState(null),
    [avatarOverlayBinding42, avatarOverlayBinding43] = avatarOverlayReact.useState(true),
    [avatarOverlayBinding44, avatarOverlayBinding45] = avatarOverlayReact.useState(false),
    [avatarOverlayBinding46, avatarOverlayBinding47] = avatarOverlayReact.useState(false),
    [avatarOverlayBinding48, avatarOverlayBinding49] = avatarOverlayReact.useState(false),
    [avatarOverlayBinding50, avatarOverlayBinding51] = avatarOverlayReact.useState(null),
    {
      mascotWidthPx,
      setMascotWidthPx
    } = useAvatarOverlayMascotWidth(),
    [avatarOverlayBinding52, avatarOverlayBinding53] = avatarOverlayReact.useState(() => new Map()),
    [avatarOverlayBinding54, avatarOverlayBinding55] = avatarOverlayReact.useState(() => Date.now()),
    [avatarOverlayBinding56] = avatarOverlayReact.useState(() => createFirstAwakeNotificationSeed(selectedAvatar, selectedAvatarId)),
    {
      data: _data = [],
      refetch
    } = pullRequestNewThreadCompatSlotUpperD(),
    {
      data: __data = [],
      refetch: _refetch
    } = worktreeNewThreadQueryCompatSlotLowerMLowerF({
      taskFilter: "current",
      limit: 20
    }),
    avatarOverlayBinding57 = buildAvatarOverlayPillActivityItems({
      includeCompactWaitingRequests: avatarOverlayBinding32,
      intl: avatarOverlayBinding31,
      localConversations: _data,
      excludedConversationId: null,
      remoteTasks: __data
    }),
    avatarOverlayBinding58 = avatarOverlayBinding56 == null ? null : createFirstAwakeAvatarOverlayNotification({
      intl: avatarOverlayBinding31,
      petName: avatarOverlayBinding56.petName,
      startedAtMs: avatarOverlayBinding56.startedAtMs
    }),
    avatarOverlayBinding59 = [],
    {
      nextNotificationExpiresAtMs,
      notifications
    } = collectAvatarOverlayNotifications({
      dismissedNotificationTurnKeys: avatarOverlayBinding52,
      extraNotifications: avatarOverlayBinding36 ? [...[], ...avatarOverlayBinding59] : avatarOverlayBinding58 == null ? [] : [avatarOverlayBinding58],
      nowMs: avatarOverlayBinding54,
      sessions: avatarOverlayBinding36 ? [] : avatarOverlayBinding57
    }),
    avatarOverlayBinding60 = buildAvatarOverlayNotificationSearchKey(notifications, avatarOverlayBinding31),
    avatarOverlayBinding61 = avatarOverlayBinding57.some(item => item.source !== "cloud" && item.status === "running"),
    avatarOverlayBinding62 = avatarOverlayBinding57.some(item => item.source === "cloud" && item.status === "running"),
    avatarOverlayBinding63 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding64 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding65 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding66 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding67 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding68 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding69 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding70 = avatarOverlayReact.useRef(null),
    avatarOverlayBinding71 = avatarOverlayReact.useRef(false),
    avatarOverlayBinding72 = avatarOverlayReact.useCallback((avatarOverlayOperand23, avatarOverlayOperand24, avatarOverlayOperand25, avatarOverlayOperand26 = avatarOverlayBinding42) => {
      avatarOverlayBinding33.logProductEvent(currentAppInitialSharedMember0097, avatarOverlayAnalytics({
        action: avatarOverlayOperand23,
        hasRunningCloudSession: avatarOverlayBinding62,
        hasRunningLocalSession: avatarOverlayBinding61,
        isNotificationTrayOpen: avatarOverlayOperand26,
        notification: avatarOverlayOperand25,
        notificationCount: notifications.length,
        selectedAvatar,
        source: avatarOverlayOperand24
      }));
    }, [avatarOverlayBinding61, avatarOverlayBinding62, avatarOverlayBinding42, notifications.length, avatarOverlayBinding33, selectedAvatar]);
  avatarOverlayReact.useEffect(() => {
    if (avatarOverlayBinding56 == null) return;
    let avatarOverlayBinding375 = createSignalGetterAtom(avatarOverlayBinding18, []);
    avatarOverlayBinding375.includes(avatarOverlayBinding56.avatarId) || currentAppInitialSharedFunction0034(avatarOverlayBinding18, [...avatarOverlayBinding375, avatarOverlayBinding56.avatarId]);
  }, [avatarOverlayBinding56]);
  avatarOverlayReact.useEffect(() => {
    avatarOverlayBinding71.current || avatarOverlayBinding33 !== extractJsonSchemaRequiredFields && (avatarOverlayBinding71.current = true, avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_OPENED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED));
  }, [avatarOverlayBinding33, avatarOverlayBinding72]);
  useFloatingWindowPointerInteractivity({
    interactiveRegionRef: avatarOverlayBinding69,
    isPaused: () => avatarOverlayBinding63.current != null || avatarOverlayBinding64.current != null,
    onInteractiveChange: avatarOverlayOperand50 => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-pointer-interaction-changed", {
        isInteractive: avatarOverlayOperand50
      });
    },
    regionElementSelectors: avatarOverlayBinding20
  });
  let avatarOverlayBinding73 = avatarOverlayReact.useCallback(() => {
      if (avatarOverlayBinding64.current != null || avatarOverlayBinding67.current != null) return;
      let avatarOverlayBinding344 = measureAvatarOverlayElements(avatarOverlayBinding69.current);
      if (avatarOverlayBinding344 == null) return;
      let avatarOverlayBinding345 = {
        ...avatarOverlayBinding344,
        isTrayVisible: avatarOverlayBinding42 && notifications.length > 0 || avatarOverlayBinding35.caption != null
      };
      areOverlayElementMeasurementsEqual(avatarOverlayBinding70.current, avatarOverlayBinding345) || (avatarOverlayBinding70.current = avatarOverlayBinding345, currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-element-size-changed", {
        isTrayVisible: avatarOverlayBinding345.isTrayVisible,
        mascot: avatarOverlayBinding345.mascot,
        tray: avatarOverlayBinding345.tray
      }));
    }, [avatarOverlayBinding42, notifications.length, avatarOverlayBinding35.caption]),
    avatarOverlayBinding74 = avatarOverlayReact.useCallback(() => {
      avatarOverlayBinding68.current != null && (window.clearTimeout(avatarOverlayBinding68.current), avatarOverlayBinding68.current = null);
    }, []),
    avatarOverlayBinding75 = avatarOverlayReact.useCallback(() => {
      avatarOverlayBinding65.current != null && (window.cancelAnimationFrame(avatarOverlayBinding65.current), avatarOverlayBinding65.current = null);
      avatarOverlayBinding66.current = null;
    }, []),
    avatarOverlayBinding76 = avatarOverlayReact.useCallback(avatarOverlayOperand28 => {
      avatarOverlayBinding66.current = avatarOverlayOperand28;
      avatarOverlayBinding65.current ??= window.requestAnimationFrame(() => {
        avatarOverlayBinding65.current = null;
        let avatarOverlayBinding354 = avatarOverlayBinding66.current;
        avatarOverlayBinding66.current = null;
        !(avatarOverlayBinding354 == null || avatarOverlayBinding64.current == null) && currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-mascot-resize-move", {
          width: avatarOverlayBinding354
        });
      });
    }, []),
    avatarOverlayBinding77 = avatarOverlayReact.useCallback(avatarOverlayOperand39 => {
      avatarOverlayBinding67.current = avatarOverlayOperand39;
      avatarOverlayBinding74();
      avatarOverlayBinding68.current = window.setTimeout(() => {
        avatarOverlayBinding68.current = null;
        avatarOverlayBinding67.current = null;
        avatarOverlayBinding51(null);
        avatarOverlayBinding73();
      }, 100);
    }, [avatarOverlayBinding74, avatarOverlayBinding73]),
    avatarOverlayBinding78 = avatarOverlayReact.useCallback(() => measureElementSize(avatarOverlayBinding69.current?.querySelector(avatarMascotRootSelector) ?? null)?.width ?? mascotWidthPx ?? 112, [mascotWidthPx]),
    avatarOverlayBinding79 = avatarOverlayReact.useCallback((avatarOverlayOperand37, avatarOverlayOperand38) => {
      let avatarOverlayBinding364 = avatarOverlayBinding64.current;
      avatarOverlayBinding364 == null || avatarOverlayBinding364.pointerId !== avatarOverlayOperand37 || (avatarOverlayBinding64.current = null, avatarOverlayBinding47(false), avatarOverlayOperand38?.hasPointerCapture?.(avatarOverlayOperand37) && avatarOverlayOperand38.releasePointerCapture?.(avatarOverlayOperand37));
    }, []),
    avatarOverlayBinding80 = avatarOverlayReact.useCallback((avatarOverlayOperand29, avatarOverlayOperand30) => {
      let avatarOverlayBinding351 = avatarOverlayBinding64.current;
      if (avatarOverlayBinding351 == null || avatarOverlayBinding351.pointerId !== avatarOverlayOperand29) return;
      let avatarOverlayBinding352 = avatarOverlayOperand30 == null ? avatarOverlayBinding351.currentWidthPx : getMascotWidthFromResizeDrag(avatarOverlayBinding351, avatarOverlayOperand30);
      avatarOverlayBinding351.currentWidthPx = avatarOverlayBinding352;
      avatarOverlayBinding75();
      avatarOverlayBinding51(avatarOverlayBinding352);
      setMascotWidthPx(avatarOverlayBinding352);
      avatarOverlayBinding77(avatarOverlayBinding352);
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-mascot-resize-end", {
        width: avatarOverlayBinding352
      });
    }, [avatarOverlayBinding75, setMascotWidthPx, avatarOverlayBinding77]),
    avatarOverlayBinding81 = avatarOverlayReact.useCallback((avatarOverlayOperand10, {
      releaseSample,
      shouldPreserveOrbMomentum = false,
      shouldOpenMainWindow
    }) => {
      let avatarOverlayBinding270 = avatarOverlayBinding63.current;
      if (avatarOverlayBinding270 == null || avatarOverlayBinding270.pointerId !== avatarOverlayOperand10) return;
      avatarOverlayBinding63.current = null;
      avatarOverlayBinding45(false);
      avatarOverlayBinding41(null);
      let {
        hasMoved,
        releaseSample: _releaseSample,
        velocity
      } = resolveAvatarOverlayPointerDragRelease(avatarOverlayBinding270, releaseSample, shouldPreserveOrbMomentum && avatarOverlayBinding270.usesOrbPhysics);
      if (avatarOverlayBinding69.current?.hasPointerCapture?.(avatarOverlayOperand10) && avatarOverlayBinding69.current.releasePointerCapture?.(avatarOverlayOperand10), hasMoved && !avatarOverlayBinding270.hasMoved && _releaseSample != null && currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-drag-move", {
        pointerScreenX: _releaseSample.screenX,
        pointerScreenY: _releaseSample.screenY
      }), shouldOpenMainWindow && avatarOverlayBinding270.startedOnMascot && !hasMoved && (avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT), currentAppInitialSharedCompatSlotLowerV.dispatchMessage("open-current-main-window", {})), currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-drag-end", {
        pointerScreenX: _releaseSample?.screenX ?? avatarOverlayBinding270.screenX,
        pointerScreenY: _releaseSample?.screenY ?? avatarOverlayBinding270.screenY
      }), hasMoved && avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT), velocity != null) {
        let avatarOverlayBinding357 = avatarOverlayBinding270.usesOrbPhysics ? 3 : 1;
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-drag-release", {
          shouldBounce: avatarOverlayBinding270.usesOrbPhysics,
          velocityX: velocity.x * avatarOverlayBinding357,
          velocityY: velocity.y * avatarOverlayBinding357
        });
      }
    }, [avatarOverlayBinding36, undefined, null, avatarOverlayBinding72]),
    avatarOverlayBinding82 = event => {
      event.button !== 0 || !(event.target instanceof Element) || event.target.closest(".no-drag") != null || (event.preventDefault(), event.currentTarget.setPointerCapture?.(event.pointerId), avatarOverlayBinding63.current = {
        startedOnMascot: event.target.closest('[data-avatar-mascot="true"]') != null,
        hasMoved: false,
        pointerId: event.pointerId,
        samples: [createAvatarOverlayPointerSample(event)],
        screenX: event.screenX,
        screenY: event.screenY,
        usesOrbPhysics: avatarOverlayBinding37
      }, currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-drag-start", {
        pointerScreenX: event.screenX,
        pointerScreenY: event.screenY,
        pointerWindowX: event.clientX,
        pointerWindowY: event.clientY,
        usesOrbPhysics: avatarOverlayBinding37
      }), avatarOverlayBinding45(true), avatarOverlayBinding41(null));
    },
    avatarOverlayBinding83 = event => {
      let avatarOverlayBinding332 = avatarOverlayBinding63.current;
      if (avatarOverlayBinding332 == null || avatarOverlayBinding332.pointerId !== event.pointerId) return;
      let avatarOverlayBinding333 = createAvatarOverlayPointerSample(event);
      avatarOverlayBinding332.samples = trimRecentAvatarOverlayPointerSamples([...avatarOverlayBinding332.samples, avatarOverlayBinding333]);
      let avatarOverlayBinding334 = avatarOverlayBinding333.screenX - avatarOverlayBinding332.screenX,
        avatarOverlayBinding335 = avatarOverlayBinding333.screenY - avatarOverlayBinding332.screenY;
      Math.abs(avatarOverlayBinding334) < 4 && Math.abs(avatarOverlayBinding335) < 4 || (avatarOverlayBinding332.hasMoved = true, avatarOverlayBinding332.screenX = avatarOverlayBinding333.screenX, avatarOverlayBinding332.screenY = avatarOverlayBinding333.screenY, avatarOverlayBinding41(avatarOverlayOperand84 => getMascotDragAnimationState({
        currentDragState: avatarOverlayOperand84,
        deltaX: avatarOverlayBinding334
      })), currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-drag-move", {
        pointerScreenX: avatarOverlayBinding333.screenX,
        pointerScreenY: avatarOverlayBinding333.screenY
      }));
    },
    avatarOverlayBinding84 = event => {
      avatarOverlayBinding81(event.pointerId, {
        releaseSample: createAvatarOverlayPointerSample(event),
        shouldOpenMainWindow: true
      });
    },
    avatarOverlayBinding85 = event => {
      avatarOverlayBinding81(event.pointerId, {
        shouldPreserveOrbMomentum: true,
        shouldOpenMainWindow: false
      });
    },
    avatarOverlayBinding86 = event => {
      avatarOverlayBinding81(event.pointerId, {
        shouldPreserveOrbMomentum: true,
        shouldOpenMainWindow: false
      });
    },
    avatarOverlayBinding87 = event => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let avatarOverlayBinding340 = avatarOverlayBinding78();
      avatarOverlayBinding74();
      avatarOverlayBinding75();
      avatarOverlayBinding67.current = null;
      avatarOverlayBinding64.current = {
        currentWidthPx: avatarOverlayBinding340,
        pointerId: event.pointerId,
        startScreenX: event.screenX,
        startWidthPx: avatarOverlayBinding340
      };
      avatarOverlayBinding51(avatarOverlayBinding340);
      avatarOverlayBinding47(true);
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-mascot-resize-start", {
        width: avatarOverlayBinding340
      });
    },
    avatarOverlayBinding88 = event => {
      let avatarOverlayBinding359 = avatarOverlayBinding64.current;
      if (avatarOverlayBinding359 == null || avatarOverlayBinding359.pointerId !== event.pointerId) return;
      event.preventDefault();
      event.stopPropagation();
      let avatarOverlayBinding360 = getMascotWidthFromResizeDrag(avatarOverlayBinding359, event.screenX);
      avatarOverlayBinding359.currentWidthPx = avatarOverlayBinding360;
      avatarOverlayBinding51(avatarOverlayBinding360);
      avatarOverlayBinding76(avatarOverlayBinding360);
    },
    avatarOverlayBinding89 = event => {
      avatarOverlayBinding80(event.pointerId, event.screenX);
      avatarOverlayBinding79(event.pointerId, event.currentTarget);
    },
    avatarOverlayBinding90 = event => {
      event.stopPropagation();
      avatarOverlayBinding80(event.pointerId);
      avatarOverlayBinding79(event.pointerId, event.currentTarget);
    },
    handleResizeLostPointerCapture = event => {
      avatarOverlayBinding80(event.pointerId);
      avatarOverlayBinding79(event.pointerId);
    },
    avatarOverlayBinding91 = (avatarOverlayOperand5, avatarOverlayOperand6) => {
      let avatarOverlayBinding223 = avatarOverlayOperand5.waitingRequest;
      if (avatarOverlayOperand5.localConversationId != null && avatarOverlayOperand6 != null) {
        let avatarOverlayBinding242 = avatarOverlayOperand5.localConversationId;
        switch (avatarOverlayOperand6.intent) {
          case "command-approval":
            if (avatarOverlayOperand6.commandDecision != null && (avatarOverlayBinding223?.kind === "exec" || avatarOverlayBinding223?.kind === "network")) {
              currentAppInitialSharedFunction0895("reply-with-command-execution-approval-decision", {
                conversationId: avatarOverlayBinding242,
                requestId: avatarOverlayBinding223.requestId,
                decision: avatarOverlayOperand6.commandDecision
              }).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "file-approval":
            if (avatarOverlayOperand6.fileDecision != null && avatarOverlayBinding223?.kind === "patch") {
              currentAppInitialSharedFunction0895("reply-with-file-change-approval-decision", {
                conversationId: avatarOverlayBinding242,
                requestId: avatarOverlayBinding223.requestId,
                decision: avatarOverlayOperand6.fileDecision
              }).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "permission-response":
            if (avatarOverlayOperand6.permissionResponse != null && avatarOverlayBinding223?.kind === "permission") {
              currentAppInitialSharedFunction0895("reply-with-permissions-request-approval-response", {
                conversationId: avatarOverlayBinding242,
                requestId: avatarOverlayBinding223.requestId,
                response: avatarOverlayOperand6.permissionResponse
              }).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "mcp-elicitation":
            if (avatarOverlayOperand6.mcpElicitationAction != null && avatarOverlayBinding223?.kind === "tool") {
              currentAppInitialSharedFunction0895("reply-with-mcp-server-elicitation-response", {
                conversationId: avatarOverlayBinding242,
                requestId: avatarOverlayBinding223.requestId,
                response: currentAppInitialSharedAcceptDeclineCancelFunction(avatarOverlayOperand6.mcpElicitationAction)
              }).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "plan-start":
            if (avatarOverlayBinding223?.kind === "plan" && avatarOverlayOperand6.planStartCollaborationMode != null) {
              currentAppInitialSharedFunction0895("update-thread-settings-for-next-turn", {
                conversationId: avatarOverlayBinding242,
                threadSettings: {
                  collaborationMode: avatarOverlayOperand6.planStartCollaborationMode
                }
              }).then(() => currentAppInitialSharedFunction0895("remove-plan-implementation-request", {
                conversationId: avatarOverlayBinding242,
                turnId: avatarOverlayBinding223.turnId
              })).then(async () => currentAppInitialSharedFunction0895("send-follow-up-message", {
                conversationId: avatarOverlayBinding242,
                prompt: `${currentAppInitialSharedMember0864}\n${avatarOverlayBinding223.planContent}`,
                serviceTier: await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(avatarOverlayBinding30, avatarOverlayBinding30.get(currentAppInitialSharedMember0210, avatarOverlayBinding242) ?? "local", avatarOverlayOperand6.planStartCollaborationMode?.settings.model ?? null)
              })).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "open":
            break;
        }
      }
      avatarOverlayOperand6 != null && avatarOverlayOperand6.intent !== "open" || avatarOverlayOperand5.action != null && (avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW, avatarOverlayOperand5), currentAppInitialSharedCompatSlotLowerV.dispatchMessage("open-in-main-window", {
        path: avatarOverlayOperand5.action.path
      }));
    },
    avatarOverlayBinding92 = (avatarOverlayOperand21, avatarOverlayOperand22) => {
      let avatarOverlayBinding350 = avatarOverlayOperand21.waitingRequest;
      avatarOverlayOperand21.localConversationId == null || avatarOverlayBinding350?.kind !== "question" || currentAppInitialSharedFunction0895("reply-with-user-input-response", {
        conversationId: avatarOverlayOperand21.localConversationId,
        requestId: avatarOverlayBinding350.requestId,
        response: {
          answers: {
            [avatarOverlayOperand22.questionId]: {
              answers: [avatarOverlayOperand22.label]
            }
          }
        }
      }).then(() => {
        refetch();
      });
    },
    avatarOverlayBinding93 = avatarOverlayOperand31 => {
      avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW, avatarOverlayOperand31);
      avatarOverlayBinding53(avatarOverlayOperand47 => {
        if (avatarOverlayOperand47.get(avatarOverlayOperand31.id) === avatarOverlayOperand31.turnKey) return avatarOverlayOperand47;
        let avatarOverlayBinding370 = new Map(avatarOverlayOperand47);
        return avatarOverlayBinding370.set(avatarOverlayOperand31.id, avatarOverlayOperand31.turnKey), avatarOverlayBinding370;
      });
    },
    avatarOverlayBinding94 = async (avatarOverlayOperand15, avatarOverlayOperand16) => {
      if (avatarOverlayOperand15.controlTarget?.type !== "app-server-conversation") return;
      let avatarOverlayBinding326 = avatarOverlayOperand16.trim();
      avatarOverlayBinding326.length !== 0 && (avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY, avatarOverlayOperand15), await currentAppInitialSharedFunction0895("send-follow-up-message", {
        conversationId: avatarOverlayOperand15.controlTarget.conversationId,
        prompt: avatarOverlayBinding326,
        serviceTier: await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(avatarOverlayBinding30, avatarOverlayBinding30.get(currentAppInitialSharedMember0210, avatarOverlayOperand15.controlTarget.conversationId) ?? "local", null)
      }));
    },
    avatarOverlayBinding95 = avatarOverlayReact.useCallback(avatarOverlayOperand58 => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-keyboard-interaction-changed", {
        isInteractive: avatarOverlayOperand58
      });
    }, []);
  return currentAppInitialSharedCompatSlotLowerY("avatar-overlay-layout-changed", ({
    layout
  }) => {
    avatarOverlayBinding39(layout);
    avatarOverlayBinding67.current === layout.mascot.width && (avatarOverlayBinding67.current = null, avatarOverlayBinding74(), avatarOverlayBinding51(null), window.requestAnimationFrame(avatarOverlayBinding73));
  }, [avatarOverlayBinding74, avatarOverlayBinding73]), avatarOverlayReact.useLayoutEffect(() => {
    let avatarOverlayBinding353 = !avatarOverlayBinding34 && avatarOverlayBinding48 || avatarOverlayBinding46;
    return document.documentElement.classList.toggle(avatarOverlayBinding27, avatarOverlayBinding353), document.body.classList.toggle(avatarOverlayBinding27, avatarOverlayBinding353), () => {
      document.documentElement.classList.remove(avatarOverlayBinding27);
      document.body.classList.remove(avatarOverlayBinding27);
    };
  }, [avatarOverlayBinding34, avatarOverlayBinding48, avatarOverlayBinding46]), avatarOverlayReact.useEffect(() => () => {
    avatarOverlayBinding74();
    avatarOverlayBinding75();
  }, [avatarOverlayBinding75, avatarOverlayBinding74]), avatarOverlayReact.useEffect(() => {
    let avatarOverlayBinding324 = event => {
        avatarOverlayBinding81(event.pointerId, {
          releaseSample: createAvatarOverlayPointerSample(event),
          shouldOpenMainWindow: true
        });
        avatarOverlayBinding80(event.pointerId, event.screenX);
        avatarOverlayBinding79(event.pointerId);
      },
      avatarOverlayBinding325 = event => {
        avatarOverlayBinding81(event.pointerId, {
          shouldPreserveOrbMomentum: true,
          shouldOpenMainWindow: false
        });
        avatarOverlayBinding80(event.pointerId);
        avatarOverlayBinding79(event.pointerId);
      };
    return window.addEventListener("pointerup", avatarOverlayBinding324), window.addEventListener("pointercancel", avatarOverlayBinding325), () => {
      window.removeEventListener("pointerup", avatarOverlayBinding324);
      window.removeEventListener("pointercancel", avatarOverlayBinding325);
    };
  }, [avatarOverlayBinding80, avatarOverlayBinding81, avatarOverlayBinding79]), avatarOverlayReact.useLayoutEffect(() => {
    let avatarOverlayBinding336 = null,
      avatarOverlayBinding337 = () => {
        avatarOverlayBinding336 ??= window.requestAnimationFrame(() => {
          avatarOverlayBinding336 = null;
          avatarOverlayBinding73();
        });
      },
      avatarOverlayBinding338 = new ResizeObserver(avatarOverlayBinding337),
      avatarOverlayBinding339 = avatarOverlayBinding69.current;
    if (avatarOverlayBinding339 != null) {
      avatarOverlayBinding338.observe(avatarOverlayBinding339);
      for (let avatarOverlayBinding383 of getAvatarOverlayMeasuredElements(avatarOverlayBinding339)) avatarOverlayBinding338.observe(avatarOverlayBinding383);
    }
    return window.addEventListener("resize", avatarOverlayBinding337), avatarOverlayBinding337(), () => {
      avatarOverlayBinding336 != null && window.cancelAnimationFrame(avatarOverlayBinding336);
      avatarOverlayBinding338.disconnect();
      window.removeEventListener("resize", avatarOverlayBinding337);
    };
  }, [avatarOverlayBinding73, selectedAvatar.id, avatarOverlayBinding60]), avatarOverlayReact.useLayoutEffect(() => {
    avatarOverlayBinding73();
  }, [avatarOverlayBinding42, avatarOverlayBinding73, selectedAvatar.id, avatarOverlayBinding60, avatarOverlayBinding35.caption, mascotWidthPx]), avatarOverlayReact.useEffect(() => {
    if (nextNotificationExpiresAtMs == null) return;
    let avatarOverlayBinding355 = Math.max(0, nextNotificationExpiresAtMs - Date.now()),
      avatarOverlayBinding356 = window.setTimeout(() => {
        avatarOverlayBinding55(avatarOverlayOperand85 => Math.max(Date.now(), avatarOverlayOperand85 + 1));
      }, avatarOverlayBinding355);
    return () => {
      window.clearTimeout(avatarOverlayBinding356);
    };
  }, [nextNotificationExpiresAtMs]), avatarOverlayReact.useEffect(() => {
    if (!avatarOverlayBinding61 && !avatarOverlayBinding62) return;
    let avatarOverlayBinding358 = window.setTimeout(() => {
      avatarOverlayBinding55(avatarOverlayOperand86 => Math.max(Date.now(), avatarOverlayOperand86 + 1));
      avatarOverlayBinding61 && refetch();
      avatarOverlayBinding62 && _refetch();
    }, avatarOverlayBinding17);
    return () => {
      window.clearTimeout(avatarOverlayBinding358);
    };
  }, [avatarOverlayBinding61, avatarOverlayBinding62, refetch, _refetch]), React.createElement(AvatarOverlaySurfaceModule.AvatarOverlaySurface, {
    avatar: selectedAvatar,
    avatarMenuItems: [{
      id: "close-avatar",
      message: currentAppInitialSharedMember0273({
        id: "petOverlay.closePet",
        defaultMessage: "Close pet",
        description: "Context menu item that closes the floating Codex pet"
      }),
      onSelect: () => {
        avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU);
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage("avatar-overlay-close", {});
      }
    }],
    interactiveRegionRef: avatarOverlayBinding69,
    restrictedSurface: undefined,
    isDragging: avatarOverlayBinding44,
    isNotificationTrayOpen: avatarOverlayBinding42,
    layout: avatarOverlayBinding38,
    mascotDragState: avatarOverlayBinding40,
    mascotLayout: avatarOverlayBinding46 && avatarOverlayBinding50 != null ? {
      ...avatarOverlayBinding38.mascot,
      height: Math.ceil(avatarOverlayBinding50 / AVATAR_OVERLAY_MASCOT_ASPECT_RATIO),
      width: avatarOverlayBinding50
    } : avatarOverlayBinding38.mascot,
    mascotResizeHandle: avatarOverlayBinding34 ? undefined : {
      onLostPointerCapture: handleResizeLostPointerCapture,
      onPointerCancel: avatarOverlayBinding90,
      onPointerDown: avatarOverlayBinding87,
      onPointerEnter: () => {
        avatarOverlayBinding49(true);
      },
      onPointerLeave: () => {
        avatarOverlayBinding49(false);
      },
      onPointerMove: avatarOverlayBinding88,
      onPointerUp: avatarOverlayBinding89
    },
    mascotStyle: createAvatarOverlayMascotWidthStyle(avatarOverlayBinding50 ?? mascotWidthPx),
    notifications,
    onCloseNotificationTray: () => {
      avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE, undefined, false);
      avatarOverlayBinding43(false);
    },
    onLostPointerCapture: avatarOverlayBinding86,
    onPointerCancel: avatarOverlayBinding85,
    onPointerDown: avatarOverlayBinding82,
    onPointerMove: avatarOverlayBinding83,
    onPointerUp: avatarOverlayBinding84,
    onDismissNotification: avatarOverlayBinding93,
    onNotificationReplyEditorActiveChange: avatarOverlayBinding95,
    onOpenNotificationReply: avatarOverlayOperand40 => {
      avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY, avatarOverlayOperand40);
    },
    onRunNotificationAction: avatarOverlayBinding91,
    onSubmitQuestionOption: avatarOverlayBinding92,
    onSubmitNotificationReply: avatarOverlayBinding94,
    onOpenNotificationTray: () => {
      avatarOverlayBinding72(currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED, currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE, undefined, true);
      avatarOverlayBinding43(true);
    }
  });
}
function getMascotWidthFromResizeDrag(avatarOverlayOperand78, avatarOverlayOperand79) {
  return clampAvatarOverlayMascotWidth(avatarOverlayOperand78.startWidthPx + avatarOverlayOperand79 - avatarOverlayOperand78.startScreenX);
}
function createFirstAwakeNotificationSeed(avatarOverlayOperand43, avatarOverlayOperand44) {
  return isSelectedCustomAvatarMissing(avatarOverlayOperand43, avatarOverlayOperand44) || createSignalGetterAtom(avatarOverlayBinding18, []).includes(avatarOverlayOperand43.id) ? null : {
    avatarId: avatarOverlayOperand43.id,
    petName: avatarOverlayOperand43.displayName,
    startedAtMs: Date.now()
  };
}
function getAvatarOverlayReadinessKey(avatarOverlayOperand72, avatarOverlayOperand73) {
  return isSelectedCustomAvatarMissing(avatarOverlayOperand72, avatarOverlayOperand73) ? "pending-custom-avatar" : "ready";
}
function getMascotDragAnimationState({
  currentDragState,
  deltaX
}) {
  return deltaX >= 4 ? "running-right" : deltaX <= -4 ? "running-left" : currentDragState;
}
function measureAvatarOverlayElements(avatarOverlayOperand42) {
  if (avatarOverlayOperand42 == null) return null;
  let avatarOverlayBinding367 = measureElementSize(avatarOverlayOperand42.querySelector(avatarMascotRootSelector)),
    avatarOverlayBinding368 = measureNotificationTraySize(avatarOverlayOperand42.querySelector(avatarOverlayBinding21));
  return avatarOverlayBinding367 == null ? null : {
    mascot: avatarOverlayBinding367,
    tray: avatarOverlayBinding368
  };
}
function getAvatarOverlayMeasuredElements(avatarOverlayOperand74) {
  return Array.from(avatarOverlayOperand74.querySelectorAll(avatarOverlayBinding28.join(", ")));
}
function measureElementSize(avatarOverlayOperand34) {
  if (avatarOverlayOperand34 == null || isElementDisplayNone(avatarOverlayOperand34)) return null;
  let avatarOverlayBinding363 = avatarOverlayOperand34.getBoundingClientRect();
  return avatarOverlayBinding363.width <= 0 || avatarOverlayBinding363.height <= 0 ? null : {
    width: Math.ceil(avatarOverlayBinding363.width),
    height: Math.ceil(avatarOverlayBinding363.height)
  };
}
function measureNotificationTraySize(avatarOverlayOperand13) {
  if (avatarOverlayOperand13 == null || isElementDisplayNone(avatarOverlayOperand13)) return null;
  let avatarOverlayBinding317 = avatarOverlayOperand13.getBoundingClientRect();
  if (avatarOverlayBinding317.width <= 0 || avatarOverlayBinding317.height <= 0) return null;
  let avatarOverlayBinding318 = Math.ceil(avatarOverlayOperand13.offsetWidth > 0 ? avatarOverlayOperand13.offsetWidth : avatarOverlayBinding317.width),
    avatarOverlayBinding319 = avatarOverlayOperand13.querySelector(avatarOverlayBinding22),
    avatarOverlayBinding320 = avatarOverlayOperand13.querySelector(avatarOverlayBinding23),
    avatarOverlayBinding321 = avatarOverlayOperand13.querySelector(avatarOverlayBinding24),
    avatarOverlayBinding322 = avatarOverlayOperand13.querySelector(avatarOverlayBinding25);
  if (avatarOverlayBinding319 == null || avatarOverlayBinding320 == null && avatarOverlayBinding321 == null) return {
    width: avatarOverlayBinding318,
    height: Math.ceil(avatarOverlayBinding317.height)
  };
  let avatarOverlayBinding323 = avatarOverlayBinding320 != null && (avatarOverlayBinding321 == null ? 0 : 1) + (avatarOverlayBinding322 == null ? 0 : 1) > 1 ? getComputedRowGap(avatarOverlayBinding320) : 0;
  return {
    width: avatarOverlayBinding318,
    height: Math.ceil(avatarOverlayBinding319.getBoundingClientRect().height + (avatarOverlayBinding321?.scrollHeight ?? 0) + (avatarOverlayBinding322 == null ? 0 : avatarOverlayBinding322.getBoundingClientRect().height) + avatarOverlayBinding323)
  };
}
function getComputedRowGap(avatarOverlayOperand62) {
  let avatarOverlayBinding376 = Number.parseFloat(window.getComputedStyle(avatarOverlayOperand62).rowGap);
  return Number.isFinite(avatarOverlayBinding376) ? avatarOverlayBinding376 : 0;
}
function areOverlayElementMeasurementsEqual(avatarOverlayOperand35, avatarOverlayOperand36) {
  return avatarOverlayOperand35 != null && avatarOverlayOperand35.isTrayVisible === avatarOverlayOperand36.isTrayVisible && avatarOverlayOperand35.mascot.width === avatarOverlayOperand36.mascot.width && avatarOverlayOperand35.mascot.height === avatarOverlayOperand36.mascot.height && areOptionalElementSizesEqual(avatarOverlayOperand35.tray, avatarOverlayOperand36.tray);
}
function areOptionalElementSizesEqual(avatarOverlayOperand51, avatarOverlayOperand52) {
  return avatarOverlayOperand51 === avatarOverlayOperand52 || avatarOverlayOperand51 != null && avatarOverlayOperand52 != null && avatarOverlayOperand51.width === avatarOverlayOperand52.width && avatarOverlayOperand51.height === avatarOverlayOperand52.height;
}
function isElementDisplayNone(avatarOverlayOperand75) {
  return window.getComputedStyle(avatarOverlayOperand75).display === "none";
}
var avatarOverlayBinding15, avatarOverlayReact, avatarOverlayBinding16, avatarOverlayBinding17, avatarOverlayBinding18, avatarOverlayBinding19, avatarOverlayBinding20, avatarMascotRootSelector, avatarOverlayBinding21, avatarOverlayBinding22, avatarOverlayBinding23, avatarOverlayBinding24, avatarOverlayBinding25, avatarOverlayBinding26, avatarOverlayBinding27, avatarOverlayBinding28, avatarOverlayBinding29;
once(() => {
  avatarOverlayBinding15 = currentAppInitialSharedCompatSlotLowerGLowerC();
  remoteControlRefreshSourceEnum();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  avatarOverlayReact = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
  intlFormatDateTimeRuntime();
  pullRequestNewThreadCompatSlotLowerY();
  appServerDisconnectedAppServerSignal();
  currentAppInitialSharedRuntime0840();
  toolSuggestionAndConnectorSchema();
  currentAppInitialSharedImplementPlanImplementationRuntime();
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC();
  initAvatarOverlayOpenStateChunk();
  initAvatarSelectionStateChunk();
  worktreeNewThreadQueryCompatSlotUpperJLowerD();
  initFloatingWindowPointerInteractivityChunk();
  currentAppInitialSharedCompatSlotUnderscore();
  remoteConnectionRuntime0298();
  worktreeNewThreadQueryCompatSlotLowerILowerC();
  currentAppInitialSharedCompatSlotUpperD();
  currentAppInitialSharedDisplayRuntime();
  createSignalGetterAtom();
  initPersistedAtomStorageRuntime();
  initAvatarOverlayDebugStateChunk();
  initAvatarOverlayPointerDragChunk();
  AvatarOverlaySharedModule.avatarOverlayBinding14();
  initAvatarOverlayNotificationSearchKeyChunk();
  initAvatarOverlayMascotWidthChunk();
  initAvatarOverlayNotificationTrayChunk();
  initAvatarOverlayPillActivityItemsChunk();
  initUseAvatarOverlaySelectionChunk();
  avatarOverlayBinding16 = currentAppInitialSharedCompatSlotLowerLLowerC();
  avatarOverlayBinding17 = 15e3;
  avatarOverlayBinding18 = "first-awake-pet-notification-avatar-ids";
  avatarOverlayBinding19 = {
    audioStream: null,
    canStart: false,
    caption: null,
    conversationId: null,
    phase: "inactive",
    isMicrophoneMuted: false,
    isMuted: false,
    start: () => Promise.resolve(),
    stop: () => Promise.resolve(),
    voiceActivity: "idle",
    toggleMicrophoneMute: () => {},
    toggleMute: () => {},
    waveformCanvasRef: {
      current: null
    }
  };
  avatarOverlayBinding20 = ["[data-avatar-overlay-hit-region]", "[data-avatar-mascot='true']"];
  avatarMascotRootSelector = ".codex-avatar-root";
  avatarOverlayBinding21 = "[data-avatar-overlay-size='notification-tray']";
  avatarOverlayBinding22 = "[data-avatar-overlay-size='notification-tray-header']";
  avatarOverlayBinding23 = "[data-avatar-overlay-size='notification-tray-content']";
  avatarOverlayBinding24 = "[data-avatar-overlay-size='notification-tray-list']";
  avatarOverlayBinding25 = "[data-avatar-overlay-size='notification-tray-caption']";
  avatarOverlayBinding26 = "[data-avatar-overlay-measure='notification-tray-row']";
  avatarOverlayBinding27 = "codex-avatar-overlay-force-resize-cursor";
  avatarOverlayBinding28 = [avatarMascotRootSelector, avatarOverlayBinding21, avatarOverlayBinding22, avatarOverlayBinding23, avatarOverlayBinding24, avatarOverlayBinding25, avatarOverlayBinding26];
  avatarOverlayBinding29 = {
    mascot: {
      left: 244,
      top: 191,
      width: 112,
      height: 121
    },
    placement: "top-end",
    tray: {
      left: 80,
      top: 56,
      width: 276,
      height: 131
    },
    viewport: {
      width: 356,
      height: 320
    }
  };
})();
