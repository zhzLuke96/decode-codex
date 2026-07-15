// Restored from ref/webview/assets/avatar-overlay-native-page-CAxsNCX7.js
// Semantic avatar overlay native page restored from the current Codex webview bundle.

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperJLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUpperULowerI,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotUpperVLowerI,
  currentAppInitialSharedCompatSlotUpperVLowerO,
  currentAppInitialSharedCompatSlotUpperWLowerI,
  currentAppInitialSharedCompatSlotLowerY,
  currentAppInitialSharedCompatSlotLowerZLowerI,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperRLowerC,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperELowerS,
  worktreeNewThreadQueryCompatSlotLowerGLowerP,
  worktreeNewThreadQueryCompatSlotLowerILowerC,
  worktreeNewThreadQueryCompatSlotUpperJLowerD,
  worktreeNewThreadQueryCompatSlotLowerMLowerF,
  worktreeNewThreadQueryCompatSlotLowerMLowerP,
  worktreeNewThreadQueryCompatSlotLowerRLowerF,
  worktreeNewThreadQueryCompatSlotLowerSLowerC,
  worktreeNewThreadQueryCompatSlotUpperTLowerS,
  worktreeNewThreadQueryCompatSlotUpperXLowerD,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedFunction0034,
  currentAppInitialSharedAcceptDeclineCancelFunction,
  currentAppInitialSharedMember0542,
  currentAppInitialSharedMember0547,
  currentAppInitialSharedMember0097,
  initPersistedAtomStorageRuntime,
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
  pullRequestNewThreadCompatSlotUpperD,
  pullRequestNewThreadCompatSlotLowerY,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotLowerBLowerM,
  appMainCurrentCompatSlotUnderscoreLowerF,
  appMainCurrentCompatSlotLowerOLowerD,
  appMainCurrentCompatSlotLowerSLowerD,
  appMainCurrentCompatSlotLowerVLowerF,
  appMainCurrentCompatSlotLowerXLowerM,
} from "../../vendor/app-main-current-runtime";
import {
  initAvatarOverlayNativeFrameCopyChunk,
  initAvatarOverlayNativeFrameChunk,
  buildAvatarOverlayNativeNotificationCopy,
  AvatarOverlayNativeFrame,
} from "../avatar-overlay-native-frame";
import {
  createAvatarOverlayMascotWidthStyle,
  initAvatarOverlayPillActivityItemsChunk,
  clampAvatarOverlayMascotWidth,
  initAvatarOverlayMascotWidthChunk,
  AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
  useAvatarOverlayMascotWidth,
  buildAvatarOverlayPillActivityItems,
} from "../avatar-overlay-pill";
import {
  isSelectedCustomAvatarMissing,
  initAvatarSelectionStateChunk,
} from "../custom-avatars-query";
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
} from "../avatar-overlay-selection";
function buildNativeSurfacePresentations({
  activityStackPresentation,
  isNotificationStackExpanded,
  measuredSurfaces,
  policies,
}) {
  return measuredSurfaces.flatMap((item) => {
    let surfacePolicy = policies.find(
      (policy) => policy.id === item.id,
    );
    if (surfacePolicy == null) return [];
    let activityStackSlot = activityStackPresentation.slots.find(
      (slot) => slot.slotId === item.id,
    );
    if (activityStackSlot == null)
      return [
        {
          ...item,
          ...surfacePolicy,
          chromiumPresentationRect: item.rect,
          edgeZone: null,
          opacity: 1,
          platterRect: item.rect,
          presentationRect: item.rect,
        },
      ];
    let presentationRect = translateNativeSurfaceRect(
      item.rect,
      activityStackSlot.visibleRect,
      activityStackSlot.presentationRect,
    );
    return [
      {
        ...item,
        ...surfacePolicy,
        chromiumPresentationRect: isNotificationStackExpanded
          ? item.rect
          : translateNativeSurfaceRect(
              item.rect,
              activityStackSlot.contentRect,
              activityStackSlot.presentationRect,
            ),
        edgeZone: activityStackSlot.edgeZone,
        opacity:
          !isNotificationStackExpanded ||
          activityStackSlot.visibleRect.height > 0
            ? 1
            : 0,
        platterRect: item.rect,
        presentationRect: presentationRect,
      },
    ];
  });
}
function translateNativeSurfaceRect(
  surfaceRect,
  contentRect,
  presentationRect,
) {
  return {
    height: contentRect.height,
    left:
      surfaceRect.left +
      contentRect.left -
      presentationRect.left,
    top:
      surfaceRect.top +
      contentRect.top -
      presentationRect.top,
    width: contentRect.width,
  };
}
function initAvatarOverlayNativePageSupportChunk() {}
function measureNativeOverlayContent(
  overlayRoot,
  { includeInertSurfaces = false } = {},
) {
  if (overlayRoot == null) return null;
  let mascotSize = measureVisibleElementSize(
      overlayRoot.querySelector(
        AVATAR_ROOT_SELECTOR,
      ),
    ),
    traySize = measureNotificationTraySize(
      overlayRoot.querySelector(
        NOTIFICATION_TRAY_SELECTOR,
      ),
      includeInertSurfaces,
    );
  return mascotSize == null
    ? null
    : {
        mascot: mascotSize,
        tray: traySize,
      };
}
function collectNativeSurfaceMeasurements(
  overlayRoot,
  orderedSurfaceIds,
  { includeInert = false } = {},
) {
  return overlayRoot == null
    ? []
    : Array.from(
        overlayRoot.querySelectorAll(
          NATIVE_SURFACE_SELECTOR,
        ),
      )
        .flatMap((item) => {
          if (
            (!includeInert && item.closest("[inert]") != null) ||
            isElementDisplayNone(item)
          )
            return [];
          let surfaceId =
              item.dataset.avatarOverlayNativeSurfaceId,
            orderedSurfaceId =
              orderedSurfaceIds.find(
                (orderedId) => orderedId === surfaceId,
              ),
            surfaceRect = item.getBoundingClientRect();
          if (
            orderedSurfaceId == null ||
            surfaceRect.width <= 0 ||
            surfaceRect.height <= 0
          )
            return [];
          let measuredRect = {
              height: surfaceRect.height,
              left: surfaceRect.left,
              top: surfaceRect.top,
              width: surfaceRect.width,
            },
            cornerRadius = Number(
              item.dataset.avatarOverlayNativeCornerRadius,
            ),
            cumulativeOpacity =
              calculateCumulativeElementOpacity(item);
          if (
            !Number.isFinite(cornerRadius) ||
            !Number.isFinite(cumulativeOpacity)
          )
            return [];
          let chromiumOverflowElement = item.querySelector(
              CHROMIUM_OVERFLOW_SELECTOR,
            ),
            chromiumOverflowRect =
              chromiumOverflowElement?.getBoundingClientRect();
          return [
            {
              ...(chromiumOverflowElement != null &&
              chromiumOverflowRect != null &&
              !isElementDisplayNone(
                chromiumOverflowElement,
              ) &&
              chromiumOverflowRect.width > 0 &&
              chromiumOverflowRect.height > 0
                ? {
                    chromiumOverflowCornerRadius:
                      Math.min(
                        chromiumOverflowRect.width,
                        chromiumOverflowRect.height,
                      ) / 2,
                    chromiumOverflowRect: {
                      height: chromiumOverflowRect.height,
                      left: chromiumOverflowRect.left,
                      top: chromiumOverflowRect.top,
                      width: chromiumOverflowRect.width,
                    },
                  }
                : {}),
              cornerRadius: cornerRadius,
              id: orderedSurfaceId,
              opacity: cumulativeOpacity,
              rect: measuredRect,
            },
          ];
        })
        .sort(
          (leftSurfaceMeasurement, rightSurfaceMeasurement) =>
            orderedSurfaceIds.indexOf(
              leftSurfaceMeasurement.id,
            ) -
            orderedSurfaceIds.indexOf(
              rightSurfaceMeasurement.id,
            ),
        );
}
function queryNativeOverlayMeasurementTargets(overlayRoot) {
  return Array.from(
    overlayRoot.querySelectorAll(
      NATIVE_MEASUREMENT_SELECTORS.join(", "),
    ),
  );
}
function measureVisibleElementSize(element) {
  if (
    element == null ||
    isElementDisplayNone(element)
  )
    return null;
  let elementRect =
    element.getBoundingClientRect();
  return elementRect.width <= 0 ||
    elementRect.height <= 0
    ? null
    : {
        width: Math.ceil(elementRect.width),
        height: Math.ceil(elementRect.height),
      };
}
function measureActivityStackLayoutHeights(overlayRoot) {
  return {
    backing:
      measureVisibleElementSize(
        overlayRoot?.querySelector(
          NOTIFICATION_STACK_BACKING_LAYOUT_SELECTOR,
        ) ?? null,
      )?.height ?? 0,
    visible:
      measureVisibleElementSize(
        overlayRoot?.querySelector(
          NOTIFICATION_STACK_VISIBLE_LAYOUT_SELECTOR,
        ) ?? null,
      )?.height ?? 0,
  };
}
function measureNotificationTraySize(
  trayElement,
  includeInertSurfaces,
) {
  if (
    trayElement == null ||
    isElementDisplayNone(trayElement)
  )
    return null;
  let trayRect =
    trayElement.getBoundingClientRect();
  if (
    trayRect.width <= 0 ||
    trayRect.height <= 0
  )
    return null;
  let childSurfaceRects = Array.from(
      trayElement.querySelectorAll(
        NATIVE_SURFACE_SELECTOR,
      ),
    )
      .filter(
        (item) =>
          (includeInertSurfaces || item.closest("[inert]") == null) &&
          !isElementDisplayNone(item),
      )
      .map((item) => item.getBoundingClientRect()),
    trayWidth = Math.ceil(
      Math.max(
        trayElement.offsetWidth > 0
          ? trayElement.offsetWidth
          : trayRect.width,
        Math.max(
          trayRect.right,
          ...childSurfaceRects.map((item) => item.right),
        ) -
          Math.min(
            trayRect.left,
            ...childSurfaceRects.map((item) => item.left),
          ),
      ),
    ),
    trayHeaderElement =
      trayElement.querySelector(
        NOTIFICATION_TRAY_HEADER_SELECTOR,
      ),
    trayListElement =
      trayElement.querySelector(
        NOTIFICATION_TRAY_LIST_SELECTOR,
      );
  if (
    trayHeaderElement == null ||
    trayListElement == null
  )
    return {
      height: Math.ceil(trayRect.height),
      width: trayWidth,
    };
  let trayListRect =
      trayListElement.getBoundingClientRect(),
    backingCanvasOverflow = Math.max(
      0,
      ...Array.from(
        trayListElement.querySelectorAll(
          BACKING_CANVAS_SELECTOR,
        ),
      ).map(
        (item) =>
          item.getBoundingClientRect().bottom -
          trayListRect.bottom,
      ),
    );
  return {
    height: Math.ceil(
      trayHeaderElement.getBoundingClientRect().height +
        trayListElement.scrollHeight -
        backingCanvasOverflow,
    ),
    width: trayWidth,
  };
}
function isElementDisplayNone(element) {
  return (
    window.getComputedStyle(element).display === "none"
  );
}
function calculateCumulativeElementOpacity(element) {
  let opacityProduct = 1;
  for (
    let opacityElement = element;
    opacityElement != null;
    opacityElement =
      opacityElement.parentElement
  )
    opacityProduct *= Number(
      window.getComputedStyle(opacityElement).opacity || "1",
    );
  return opacityProduct;
}
var AVATAR_ROOT_SELECTOR,
  NOTIFICATION_TRAY_SELECTOR,
  NOTIFICATION_TRAY_HEADER_SELECTOR,
  NOTIFICATION_TRAY_LIST_SELECTOR,
  NOTIFICATION_TRAY_ROW_SELECTOR,
  NOTIFICATION_STACK_BACKING_LAYOUT_SELECTOR,
  NOTIFICATION_STACK_VISIBLE_LAYOUT_SELECTOR,
  NATIVE_SURFACE_SELECTOR,
  CHROMIUM_OVERFLOW_SELECTOR,
  BACKING_CANVAS_SELECTOR,
  NATIVE_MEASUREMENT_SELECTORS,
  initNativeMeasurementSelectors = () => {
    AVATAR_ROOT_SELECTOR = ".codex-avatar-root";
    NOTIFICATION_TRAY_SELECTOR =
      "[data-avatar-overlay-size='notification-tray']";
    NOTIFICATION_TRAY_HEADER_SELECTOR =
      "[data-avatar-overlay-size='notification-tray-header']";
    NOTIFICATION_TRAY_LIST_SELECTOR =
      "[data-avatar-overlay-size='notification-tray-list']";
    NOTIFICATION_TRAY_ROW_SELECTOR =
      "[data-avatar-overlay-measure='notification-tray-row']";
    NOTIFICATION_STACK_BACKING_LAYOUT_SELECTOR =
      "[data-avatar-overlay-size='notification-stack-backing-layout']";
    NOTIFICATION_STACK_VISIBLE_LAYOUT_SELECTOR =
      "[data-avatar-overlay-size='notification-stack-visible-layout']";
    NATIVE_SURFACE_SELECTOR = "[data-avatar-overlay-native-surface-id]";
    CHROMIUM_OVERFLOW_SELECTOR =
      "[data-avatar-overlay-chromium-overflow='true']";
    BACKING_CANVAS_SELECTOR =
      "[data-avatar-overlay-backing-canvas='true']";
    NATIVE_MEASUREMENT_SELECTORS = [
      AVATAR_ROOT_SELECTOR,
      NOTIFICATION_TRAY_SELECTOR,
      NOTIFICATION_TRAY_HEADER_SELECTOR,
      NOTIFICATION_TRAY_LIST_SELECTOR,
      NOTIFICATION_TRAY_ROW_SELECTOR,
      NOTIFICATION_STACK_BACKING_LAYOUT_SELECTOR,
      NOTIFICATION_STACK_VISIBLE_LAYOUT_SELECTOR,
      NATIVE_SURFACE_SELECTOR,
      CHROMIUM_OVERFLOW_SELECTOR,
    ];
  };
export function AvatarOverlayNativePage() {
  let { selectedAvatar, selectedAvatarId } = useAvatarOverlaySelection(),
    hasNoSelectedAvatar = selectedAvatar == null,
    notifyPointerNonInteractive,
    pointerResetEffectDeps;
  notifyPointerNonInteractive = () => {
    hasNoSelectedAvatar &&
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-pointer-interaction-changed",
        {
          isInteractive: false,
        },
      );
  };
  pointerResetEffectDeps = [hasNoSelectedAvatar];
  useEffect(
    notifyPointerNonInteractive,
    pointerResetEffectDeps,
  );
  let notifyEmptyComposition, compositionResetEffectDeps;
  if (
    ((notifyEmptyComposition = () => {
      hasNoSelectedAvatar &&
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-composition-changed",
          {
            state: null,
          },
        );
    }),
    (compositionResetEffectDeps = [hasNoSelectedAvatar]),
    useLayoutEffect(
      notifyEmptyComposition,
      compositionResetEffectDeps,
    ),
    selectedAvatar == null)
  )
    return null;
  let selectedAvatarRenderKey = getAvatarOverlayNativePageKey(
    selectedAvatar,
    selectedAvatarId,
  );
  return React.createElement(AvatarOverlayNativePageController, {
    key: selectedAvatarRenderKey,
    selectedAvatar,
    selectedAvatarId,
  });
}
function AvatarOverlayNativePageController({ selectedAvatar, selectedAvatarId }) {
  let appScope =
      currentAppInitialSharedCompatSlotUpperKLowerO(
        currentAppInitialSharedCompatSlotUpperE,
      ),
    intl = currentAppInitialSharedFunction0375(),
    isDarkAppearance =
      worktreeNewThreadQueryCompatSlotUpperELowerS() === true,
    compactWaitingRequestsEnabled =
      currentAppInitialSharedMember0781("451951815"),
    isQuickChatEnabled =
      currentAppInitialSharedMember0781("665486075"),
    isGlobalDictationOrbEnabled =
      currentAppInitialSharedMember0781("1380537759"),
    isDictationStreamingEnabled = currentAppInitialSharedMember0781(
      appMainCurrentCompatSlotLowerBLowerM,
    ),
    dictationSupportStateValue = appMainCurrentCompatSlotLowerSLowerD(
      currentAppInitialSharedMember0542,
    ),
    productLoggerValue =
      currentAppInitialSharedCompatSlotLowerQLowerO(analyticsMember0137),
    { mascotWidthPx, setMascotWidthPx } = useAvatarOverlayMascotWidth(),
    { data: localConversationRows = [], refetch } =
      pullRequestNewThreadCompatSlotUpperD(),
    { data: remoteTaskRows = [], refetch: refetchRemoteTasks } =
      worktreeNewThreadQueryCompatSlotLowerMLowerF({
        taskFilter: "current",
        limit: 20,
      }),
    stopCloudTaskMutation =
      worktreeNewThreadQueryCompatSlotUpperXLowerD(),
    submitCloudFollowUpMutation =
      worktreeNewThreadQueryCompatSlotLowerRLowerF(),
    activitySessions = buildAvatarOverlayPillActivityItems({
      includeCompactWaitingRequests: compactWaitingRequestsEnabled,
      includeMcpElicitationCancelAction: true,
      intl: intl,
      localConversations: localConversationRows,
      excludedConversationId: null,
      remoteTasks: remoteTaskRows,
    });
  return React.createElement(AvatarOverlayNativePageContent, {
    isDarkAppearance: isDarkAppearance,
    dictationCleanupEnabled: false,
    dictationStreamingEnabled: isDictationStreamingEnabled,
    dictationSupportState: dictationSupportStateValue,
    latestTurnItems: (conversationId) =>
      conversationId == null
        ? undefined
        : appScope.get(
            currentAppInitialSharedMember0547,
            conversationId,
          )?.items,
    mascotWidthPx,
    productLogger: productLoggerValue,
    globalDictationOrbEnabled: isGlobalDictationOrbEnabled,
    quickChatEnabled: isQuickChatEnabled,
    selectedAvatar,
    selectedAvatarId,
    sessions: activitySessions,
    onClosePet: () => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-close",
        {},
      );
    },
    onMascotClick: () => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "open-current-main-window",
        {},
      );
    },
    onMascotWidthChange: setMascotWidthPx,
    onRefreshLocalSessions: refetch,
    onRefreshRemoteSessions: refetchRemoteTasks,
    onRunNotificationControl: async (
      notificationForOuterControl,
      outerControlAction,
    ) => {
      let outerControlTarget =
        notificationForOuterControl.controlTarget;
      switch (outerControlAction.type) {
        case "close-follow-up":
        case "open-follow-up":
          return;
        case "stop":
          if (outerControlTarget == null) return;
          switch (outerControlTarget.type) {
            case "app-server-conversation":
              await currentAppInitialSharedFunction0895(
                "interrupt-conversation",
                {
                  conversationId:
                    outerControlTarget.conversationId,
                  initiatedBy: "user",
                },
              );
              Promise.resolve(refetch()).catch(() => {});
              return;
            case "cloud-task":
              await stopCloudTaskMutation.mutateAsync(
                outerControlTarget.taskId,
              );
              Promise.resolve(refetchRemoteTasks()).catch(() => {});
              return;
          }
        case "submit-follow-up": {
          let followUpPrompt =
            outerControlAction.prompt.trim();
          if (
            outerControlTarget == null ||
            followUpPrompt.length === 0
          )
            return;
          switch (outerControlTarget.type) {
            case "app-server-conversation":
              await currentAppInitialSharedFunction0895(
                "send-follow-up-message",
                {
                  conversationId:
                    outerControlTarget.conversationId,
                  prompt: followUpPrompt,
                  serviceTier:
                    await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(
                      appScope,
                      appScope.get(
                        currentAppInitialSharedMember0210,
                        outerControlTarget.conversationId,
                      ) ?? "local",
                      null,
                    ),
                },
              );
              Promise.resolve(refetch()).catch(() => {});
              return;
            case "cloud-task":
              await submitCloudFollowUpMutation.mutateAsync({
                taskId: outerControlTarget.taskId,
                turnId: outerControlTarget.turnId,
                prompt: followUpPrompt,
                ideContext: "",
                runEnvironmentInQaMode: false,
                priorConversation: null,
                images: null,
              });
              Promise.resolve(refetchRemoteTasks()).catch(() => {});
              return;
          }
        }
      }
    },
    onRunNotificationAction: (
      notificationForAction,
      notificationAction,
    ) => {
      let waitingRequest =
        notificationForAction.waitingRequest;
      if (
        notificationForAction.localConversationId != null &&
        notificationAction != null
      ) {
        let localConversationId =
          notificationForAction.localConversationId;
        switch (notificationAction.intent) {
          case "command-approval":
            if (
              notificationAction.commandDecision != null &&
              (waitingRequest?.kind === "exec" ||
                waitingRequest?.kind === "network")
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-command-execution-approval-decision",
                {
                  conversationId: localConversationId,
                  requestId: waitingRequest.requestId,
                  decision: notificationAction.commandDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "file-approval":
            if (
              notificationAction.fileDecision != null &&
              waitingRequest?.kind === "patch"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-file-change-approval-decision",
                {
                  conversationId: localConversationId,
                  requestId: waitingRequest.requestId,
                  decision: notificationAction.fileDecision,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "permission-response":
            if (
              notificationAction.permissionResponse != null &&
              waitingRequest?.kind === "permission"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-permissions-request-approval-response",
                {
                  conversationId: localConversationId,
                  requestId: waitingRequest.requestId,
                  response: notificationAction.permissionResponse,
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "mcp-elicitation":
            if (
              notificationAction.mcpElicitationAction != null &&
              waitingRequest?.kind === "tool"
            ) {
              currentAppInitialSharedFunction0895(
                "reply-with-mcp-server-elicitation-response",
                {
                  conversationId: localConversationId,
                  requestId: waitingRequest.requestId,
                  response: currentAppInitialSharedAcceptDeclineCancelFunction(
                    notificationAction.mcpElicitationAction,
                  ),
                },
              ).then(() => {
                refetch();
              });
              return;
            }
            break;
          case "plan-start":
            if (
              waitingRequest?.kind === "plan" &&
              notificationAction.planStartCollaborationMode != null
            ) {
              currentAppInitialSharedFunction0895(
                "update-thread-settings-for-next-turn",
                {
                  conversationId: localConversationId,
                  threadSettings: {
                    collaborationMode:
                      notificationAction.planStartCollaborationMode,
                  },
                },
              )
                .then(() =>
                  currentAppInitialSharedFunction0895(
                    "remove-plan-implementation-request",
                    {
                      conversationId: localConversationId,
                      turnId: waitingRequest.turnId,
                    },
                  ),
                )
                .then(async () =>
                  currentAppInitialSharedFunction0895(
                    "send-follow-up-message",
                    {
                      conversationId: localConversationId,
                      prompt: `${currentAppInitialSharedMember0864}\n${waitingRequest.planContent}`,
                      serviceTier:
                        await worktreeNewThreadOrchestratorCompatSlotUpperRLowerC(
                          appScope,
                          appScope.get(
                            currentAppInitialSharedMember0210,
                            localConversationId,
                          ) ?? "local",
                          notificationAction
                            .planStartCollaborationMode?.settings.model ?? null,
                        ),
                    },
                  ),
                )
                .then(() => {
                  refetch();
                });
              return;
            }
            break;
          case "open":
            break;
        }
      }
      (notificationAction != null &&
        notificationAction.intent !== "open") ||
        (notificationForAction.action != null &&
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "open-in-main-window",
            {
              path: notificationForAction.action.path,
            },
          ));
    },
    onSubmitQuestionOption: (
      questionNotification,
      selectedQuestionOption,
    ) => {
      let questionWaitingRequest =
        questionNotification.waitingRequest;
      questionNotification.localConversationId == null ||
        questionWaitingRequest?.kind !== "question" ||
        currentAppInitialSharedFunction0895("reply-with-user-input-response", {
          conversationId: questionNotification.localConversationId,
          requestId: questionWaitingRequest.requestId,
          response: {
            answers: {
              [selectedQuestionOption.questionId]: {
                answers: [selectedQuestionOption.label],
              },
            },
          },
        }).then(() => {
          refetch();
        });
    },
    onSubmitQuickChat: async (quickChatPrompt) => {
      await appMainCurrentCompatSlotUnderscoreLowerF({
        model: undefined,
        prompt: quickChatPrompt,
        scope: appScope,
        target: {
          type: "projectless",
        },
        thinking: undefined,
      });
      await refetch();
    },
  });
}
function AvatarOverlayNativePageContent({
  dictationCleanupEnabled,
  dictationStreamingEnabled,
  dictationSupportState,
  firstAwakeNotificationEnabled = true,
  globalDictationOrbEnabled = false,
  isDarkAppearance,
  latestTurnItems,
  mascotWidthPx,
  productLogger,
  quickChatEnabled,
  selectedAvatar,
  selectedAvatarId,
  sessions,
  onClosePet,
  onMascotClick,
  onMascotWidthChange,
  onRefreshLocalSessions,
  onRefreshRemoteSessions,
  onRunNotificationControl,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onSubmitQuickChat,
}) {
  let contentAppScope =
      currentAppInitialSharedCompatSlotUpperKLowerO(
        currentAppInitialSharedCompatSlotUpperE,
      ),
    hideResizeHandle = currentAppInitialSharedCompatSlotLowerQLowerO(
      avatarOverlayResizeButtonHiddenSignal,
    ),
    realtimeVoiceActive =
      INACTIVE_DICTATION_STATE.phase !== "inactive" && true;
  currentAppInitialSharedCompatSlotUpperGLowerO(
    currentAppInitialSharedMember0547,
    undefined,
  );
  let { data } = worktreeNewThreadQueryCompatSlotLowerSLowerC({
      enabled: realtimeVoiceActive,
      hostId: undefined,
    }),
    contentIntl = currentAppInitialSharedFunction0375(),
    [nativeLayout, setNativeLayout] =
      useState(DEFAULT_NATIVE_LAYOUT),
    [nativeMaterialAttached, setNativeMaterialAttached] =
      useState(false),
    [activityPillsVisible, setActivityPillsVisible] =
      useState(true),
    [notificationTrayOpen, setNotificationTrayOpen] =
      useState(false),
    [quickChatEditorActive, setQuickChatEditorActive] =
      useState(false),
    [quickChatSurfaceVisible, setQuickChatSurfaceVisible] =
      useState(false),
    [quickChatSurfaceHovered, setQuickChatSurfaceHovered] =
      useState(false),
    [pointerSurfaceId, setPointerSurfaceId] =
      useState(null),
    [quickChatDraft, setQuickChatDraft] =
      useState(""),
    [quickChatResetRevision, setQuickChatResetRevision] =
      useState(0),
    [notificationFollowUp, setNotificationFollowUp] =
      useState(null),
    [expandedNotificationIds, setExpandedNotificationIds] =
      useState([]),
    [notificationRowHeights, setNotificationRowHeights] =
      useState({}),
    [activityStackScrollOffset, setActivityStackScrollOffset] =
      useState(0),
    [mascotResizeActive, setMascotResizeActive] =
      useState(false),
    [mascotDragState, setMascotDragState] =
      useState(null),
    [mascotResizeHovered, setMascotResizeHovered] =
      useState(false),
    [pendingMascotWidthPx, setPendingMascotWidthPx] =
      useState(null),
    [dismissedNotificationTurnKeys, setDismissedNotificationTurnKeys] =
      useState(() => new Map()),
    [nowMs, setNowMs] =
      useState(() => Date.now()),
    [firstAwakeNotificationSeed] = useState(
      () =>
        firstAwakeNotificationEnabled
          ? buildFirstAwakeNotificationSeed(selectedAvatar, selectedAvatarId)
          : null,
    ),
    firstAwakeNotification =
      firstAwakeNotificationSeed == null
        ? null
        : createFirstAwakeAvatarOverlayNotification({
            intl: contentIntl,
            petName: firstAwakeNotificationSeed.petName,
            startedAtMs: firstAwakeNotificationSeed.startedAtMs,
          }),
    realtimeExtraNotifications = [],
    { nextNotificationExpiresAtMs, notifications } =
      collectAvatarOverlayNotifications({
        dismissedNotificationTurnKeys: dismissedNotificationTurnKeys,
        extraNotifications: realtimeVoiceActive
          ? [...[], ...realtimeExtraNotifications]
          : firstAwakeNotification == null
            ? []
            : [firstAwakeNotification],
        latestActivityFirst: true,
        nowMs: nowMs,
        sessions: realtimeVoiceActive ? [] : sessions,
      }),
    activityCopies = notifications.map((item) => ({
      copy: buildAvatarOverlayNativeNotificationCopy({
        intl: contentIntl,
        latestTurnItems:
          item.source === "local" && !item.id.startsWith("realtime-")
            ? latestTurnItems(item.localConversationId)
            : undefined,
        notification: item,
        notificationCount: notifications.length,
      }),
      notification: item,
    })),
    notificationSearchKey = buildAvatarOverlayNotificationSearchKey(
      notifications,
      contentIntl,
    ),
    activityStackItems = activityPillsVisible
      ? notifications.map(({ id }) => ({
          height: notificationRowHeights[id] ?? 54,
          id,
        }))
      : EMPTY_ACTIVITY_STACK_ITEMS,
    activityStackPresentation =
      currentAppInitialSharedCompatSlotUpperULowerI({
        expanded:
          nativeMaterialAttached || notificationTrayOpen,
        items: activityStackItems,
        scrollOffset: activityStackScrollOffset,
        viewportRect: {
          height: ACTIVITY_STACK_VIEWPORT_HEIGHT,
          left: 0,
          top: 0,
          width: 345,
        },
      }),
    hasRunningLocalSession = sessions.some(
      (item) => item.source !== "cloud" && item.status === "running",
    ),
    hasRunningCloudSession = sessions.some(
      (item) => item.source === "cloud" && item.status === "running",
    ),
    quickChatVisible =
      quickChatEnabled &&
      (quickChatEditorActive ||
        quickChatSurfaceVisible ||
        quickChatSurfaceHovered),
    mascotDragRef = useRef(null),
    mascotResizeRef =
      useRef(null),
    mascotResizeMoveFrameRef =
      useRef(null),
    mascotResizePendingWidthRef =
      useRef(null),
    pendingLayoutMascotWidthRef =
      useRef(null),
    layoutSettleTimeoutRef =
      useRef(null),
    interactiveRegionRef =
      useRef(null),
    lastMeasuredContentSizeRef =
      useRef(null),
    elementSizeRevisionRef = useRef(0),
    pendingElementSizeRevisionRef =
      useRef(null),
    lastCompositionStateRef =
      useRef(null),
    loggedOpenEventRef =
      useRef(false),
    logOverlayAction = useCallback(
      (
        analyticsAction,
        analyticsSource,
        analyticsNotification,
        analyticsTrayOpen = notificationTrayOpen,
      ) => {
        productLogger.logProductEvent(
          currentAppInitialSharedMember0097,
          avatarOverlayAnalytics({
            action: analyticsAction,
            hasRunningCloudSession: hasRunningCloudSession,
            hasRunningLocalSession: hasRunningLocalSession,
            isNotificationTrayOpen: analyticsTrayOpen,
            notification: analyticsNotification,
            notificationCount: notifications.length,
            selectedAvatar,
            source: analyticsSource,
          }),
        );
      },
      [
        hasRunningLocalSession,
        hasRunningCloudSession,
        notificationTrayOpen,
        notifications.length,
        productLogger,
        selectedAvatar,
      ],
    );
  useEffect(() => {
    if (firstAwakeNotificationSeed == null) return;
    let seenAvatarIds = createSignalGetterAtom(
      FIRST_AWAKE_NOTIFICATION_STORAGE_KEY,
      [],
    );
    seenAvatarIds.includes(
      firstAwakeNotificationSeed.avatarId,
    ) ||
      currentAppInitialSharedFunction0034(FIRST_AWAKE_NOTIFICATION_STORAGE_KEY, [
        ...seenAvatarIds,
        firstAwakeNotificationSeed.avatarId,
      ]);
  }, [firstAwakeNotificationSeed]);
  useEffect(() => {
    loggedOpenEventRef.current ||
      (productLogger !== extractJsonSchemaRequiredFields &&
        ((loggedOpenEventRef.current = true),
        logOverlayAction(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
        )));
  }, [productLogger, logOverlayAction]);
  useFloatingWindowPointerInteractivity({
    interactiveRegionRef: interactiveRegionRef,
    isPaused: () =>
      mascotDragRef.current != null ||
      mascotResizeRef.current != null,
    onInteractiveChange: (isInteractive) => {
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-pointer-interaction-changed",
        {
          isInteractive: isInteractive,
        },
      );
    },
    regionElementSelectors: FLOATING_WINDOW_INTERACTIVE_SELECTORS,
  });
  let dispatchCompositionState =
      useCallback(() => {
        let contentMeasurements = measureNativeOverlayContent(
          interactiveRegionRef.current,
          {
            includeInertSurfaces: true,
          },
        );
        if (contentMeasurements == null) return;
        let stackLayoutHeights = measureActivityStackLayoutHeights(
            interactiveRegionRef.current,
          ),
          surfacePresentations = buildNativeSurfacePresentations({
            activityStackPresentation: activityStackPresentation,
            isNotificationStackExpanded:
              nativeMaterialAttached || notificationTrayOpen,
            measuredSurfaces: collectNativeSurfaceMeasurements(
              interactiveRegionRef.current,
              currentAppInitialSharedCompatSlotLowerZLowerI,
              {
                includeInert: true,
              },
            ),
            policies: currentAppInitialSharedCompatSlotUpperVLowerI({
              activityStackPresentation: activityStackPresentation,
              isNotificationStackExpanded:
                nativeMaterialAttached ||
                notificationTrayOpen,
              isQuickChatVisible: quickChatVisible,
              showsNotificationBadge: activityCopies.length > 0,
            }),
          }),
          nextRowHeights = {
            ...notificationRowHeights,
            ...Object.fromEntries(
              activityStackPresentation.slots.flatMap(
                ({ itemId, slotId }) => {
                  let matchingSlotSurface =
                    surfacePresentations.find(
                      (item) => item.id === slotId,
                    );
                  return matchingSlotSurface == null
                    ? []
                    : [
                        [
                          itemId,
                          Math.ceil(
                            matchingSlotSurface.rect.height,
                          ),
                        ],
                      ];
                },
              ),
            ),
          };
        if (
          !isEqual(
            notificationRowHeights,
            nextRowHeights,
          ) &&
          (setNotificationRowHeights(nextRowHeights),
          nativeMaterialAttached)
        )
          return;
        let measurements = {
            activityStackBackingLayoutHeight:
              stackLayoutHeights.backing,
            activityStackItems: activityStackItems,
            activityStackPresentation: activityStackPresentation,
            activityStackScrollOffset: activityStackScrollOffset,
            activityStackVisibleLayoutHeight:
              stackLayoutHeights.visible,
            mascot: contentMeasurements.mascot,
            surfaces: surfacePresentations,
            tray: contentMeasurements.tray,
          },
          nextCompositionState = {
            contentState: {
              activities: activityCopies,
              activityStackBackingLayoutHeight:
                measurements.activityStackBackingLayoutHeight,
              activityStackItems:
                measurements.activityStackItems,
              activityStackPresentation:
                measurements.activityStackPresentation,
              activityStackScrollOffset:
                measurements.activityStackScrollOffset,
              activityStackVisibleLayoutHeight:
                measurements.activityStackVisibleLayoutHeight,
              expandedNotificationIds: expandedNotificationIds,
              isDarkAppearance,
              isNotificationStackExpanded: notificationTrayOpen,
              isQuickChatVisible: quickChatVisible,
              layout: nativeLayout,
              locale: contentIntl.locale,
              notificationFollowUp: notificationFollowUp,
              pointerSurfaceId: pointerSurfaceId,
              quickChatDictation: {
                cleanupEnabled: dictationCleanupEnabled,
                streamingEnabled: dictationStreamingEnabled,
                supportState: dictationSupportState,
              },
              quickChatDraft: quickChatDraft,
              quickChatResetRevision: quickChatResetRevision,
            },
            measurements: measurements,
          };
        isEqual(
          nextCompositionState,
          lastCompositionStateRef.current,
        ) ||
          ((lastCompositionStateRef.current =
            nextCompositionState),
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-composition-changed",
            {
              state: nextCompositionState,
            },
          ));
      }, [
        activityCopies,
        notificationRowHeights,
        activityStackItems,
        activityStackPresentation,
        activityStackScrollOffset,
        expandedNotificationIds,
        contentIntl.locale,
        isDarkAppearance,
        notificationTrayOpen,
        quickChatVisible,
        nativeLayout,
        nativeMaterialAttached,
        notificationFollowUp,
        pointerSurfaceId,
        dictationCleanupEnabled,
        dictationStreamingEnabled,
        dictationSupportState,
        quickChatDraft,
        quickChatResetRevision,
      ]),
    measureAndDispatchElementSize =
      useCallback(() => {
        if (
          mascotResizeRef.current != null ||
          pendingLayoutMascotWidthRef.current != null
        )
          return;
        let currentContentSize = measureNativeOverlayContent(
          interactiveRegionRef.current,
        );
        if (currentContentSize == null) return;
        if (
          hasSameNativeOverlayElementSize(
            lastMeasuredContentSizeRef.current,
            currentContentSize,
          )
        ) {
          if (
            nativeMaterialAttached &&
            pendingElementSizeRevisionRef.current != null
          )
            return;
          nativeMaterialAttached ||
            (pendingElementSizeRevisionRef.current = null);
          dispatchCompositionState();
          return;
        }
        let isFirstMeasurement =
          lastMeasuredContentSizeRef.current == null;
        lastMeasuredContentSizeRef.current =
          currentContentSize;
        let nextElementSizeRevision =
          nativeMaterialAttached && !isFirstMeasurement
            ? elementSizeRevisionRef.current + 1
            : null;
        nextElementSizeRevision != null &&
          (elementSizeRevisionRef.current =
            nextElementSizeRevision);
        pendingElementSizeRevisionRef.current =
          nextElementSizeRevision;
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-element-size-changed",
          {
            ...(nextElementSizeRevision == null
              ? {}
              : {
                  elementSizeRevision: nextElementSizeRevision,
                }),
            mascot: currentContentSize.mascot,
            tray: currentContentSize.tray,
          },
        );
        isFirstMeasurement && dispatchCompositionState();
      }, [nativeMaterialAttached, dispatchCompositionState]),
    clearLayoutSettleTimeout =
      useCallback(() => {
        layoutSettleTimeoutRef.current != null &&
          (window.clearTimeout(layoutSettleTimeoutRef.current),
          (layoutSettleTimeoutRef.current = null));
      }, []),
    cancelMascotResizeMoveFrame =
      useCallback(() => {
        mascotResizeMoveFrameRef.current != null &&
          (window.cancelAnimationFrame(mascotResizeMoveFrameRef.current),
          (mascotResizeMoveFrameRef.current = null));
        mascotResizePendingWidthRef.current = null;
      }, []),
    scheduleMascotResizeMove = useCallback(
      (resizeWidthPx) => {
        mascotResizePendingWidthRef.current = resizeWidthPx;
        mascotResizeMoveFrameRef.current ??= window.requestAnimationFrame(
          () => {
            mascotResizeMoveFrameRef.current = null;
            let widthForResizeMove =
              mascotResizePendingWidthRef.current;
            mascotResizePendingWidthRef.current = null;
            !(
              widthForResizeMove == null ||
              mascotResizeRef.current == null
            ) &&
              currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
                "avatar-overlay-mascot-resize-move",
                {
                  width: widthForResizeMove,
                },
              );
          },
        );
      },
      [],
    ),
    settleMascotResizeWidth = useCallback(
      (settledWidthPx) => {
        pendingLayoutMascotWidthRef.current = settledWidthPx;
        clearLayoutSettleTimeout();
        layoutSettleTimeoutRef.current = window.setTimeout(() => {
          layoutSettleTimeoutRef.current = null;
          pendingLayoutMascotWidthRef.current = null;
          setPendingMascotWidthPx(null);
          measureAndDispatchElementSize();
        }, 100);
      },
      [clearLayoutSettleTimeout, measureAndDispatchElementSize],
    ),
    readCurrentMascotWidth = useCallback(
      () =>
        measureVisibleElementSize(
          interactiveRegionRef.current?.querySelector(
            ".codex-avatar-root",
          ) ?? null,
        )?.width ??
        mascotWidthPx ??
        112,
      [mascotWidthPx],
    ),
    releaseMascotResizePointer = useCallback(
      (pointerId, captureElement) => {
        let resizePointerState =
          mascotResizeRef.current;
        resizePointerState == null ||
          resizePointerState.pointerId !==
            pointerId ||
          ((mascotResizeRef.current = null),
          setMascotResizeActive(false),
          captureElement?.hasPointerCapture?.(
            pointerId,
          ) &&
            captureElement.releasePointerCapture?.(
              pointerId,
            ));
      },
      [],
    ),
    finishMascotResize = useCallback(
      (pointerId, screenX) => {
        let resizeState =
          mascotResizeRef.current;
        if (
          resizeState == null ||
          resizeState.pointerId !==
            pointerId
        )
          return;
        let finalMascotWidth =
          screenX == null
            ? resizeState.currentWidthPx
            : getClampedMascotResizeWidth(
                resizeState,
                screenX,
              );
        resizeState.currentWidthPx =
          finalMascotWidth;
        cancelMascotResizeMoveFrame();
        setPendingMascotWidthPx(finalMascotWidth);
        onMascotWidthChange(finalMascotWidth);
        settleMascotResizeWidth(finalMascotWidth);
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-mascot-resize-end",
          {
            width: finalMascotWidth,
          },
        );
      },
      [
        cancelMascotResizeMoveFrame,
        onMascotWidthChange,
        settleMascotResizeWidth,
      ],
    ),
    finishMascotDrag =
      useCallback(
        (event, shouldTreatAsClick) => {
          let dragState =
            mascotDragRef.current;
          if (
            dragState == null ||
            dragState.pointerId !== event.pointerId
          )
            return;
          mascotDragRef.current = null;
          setMascotDragState(null);
          let pointerCaptureElement = null;
          event.currentTarget instanceof HTMLElement
            ? (pointerCaptureElement = event.currentTarget)
            : event.target instanceof HTMLElement &&
              (pointerCaptureElement = event.target);
          pointerCaptureElement?.hasPointerCapture?.(
            event.pointerId,
          ) &&
            pointerCaptureElement.releasePointerCapture?.(
              event.pointerId,
            );
          let { hasMoved, releaseSample, velocity } =
            resolveAvatarOverlayPointerDragRelease(
              dragState,
              shouldTreatAsClick
                ? createAvatarOverlayPointerSample(event)
                : undefined,
              !shouldTreatAsClick &&
                dragState.usesOrbPhysics,
            );
          shouldTreatAsClick &&
            !hasMoved &&
            (logOverlayAction(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
            onMascotClick());
          hasMoved &&
            !dragState.hasMoved &&
            releaseSample != null &&
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "avatar-overlay-drag-move",
              {
                pointerScreenX: releaseSample.screenX,
                pointerScreenY: releaseSample.screenY,
              },
            );
          let dragEndSample =
            releaseSample ?? dragState;
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-drag-end",
            {
              pointerScreenX: dragEndSample.screenX,
              pointerScreenY: dragEndSample.screenY,
            },
          );
          dragState.usesOrbPhysics &&
            velocity != null &&
            currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
              "avatar-overlay-drag-release",
              {
                shouldBounce: true,
                velocityX: velocity.x * 3,
                velocityY: velocity.y * 3,
              },
            );
        },
        [
          realtimeVoiceActive,
          onMascotClick,
          undefined,
          null,
          logOverlayAction,
        ],
      ),
    handleMascotPointerDown = (event) => {
      if (
        event.button !== 0 ||
        event.ctrlKey ||
        !(event.target instanceof Element) ||
        event.target.closest(".no-drag") != null
      )
        return;
      event.preventDefault();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let usesOrbPhysics = realtimeVoiceActive;
      mascotDragRef.current = {
        hasMoved: false,
        pointerId: event.pointerId,
        samples: [createAvatarOverlayPointerSample(event)],
        screenX: event.screenX,
        screenY: event.screenY,
        usesOrbPhysics: usesOrbPhysics,
      };
      setMascotDragState(null);
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-drag-start",
        {
          pointerScreenX: event.screenX,
          pointerScreenY: event.screenY,
          pointerWindowX: event.clientX,
          pointerWindowY: event.clientY,
          usesOrbPhysics: usesOrbPhysics,
        },
      );
    },
    handleMascotPointerMove = (event) => {
      let activeDragState = mascotDragRef.current;
      if (
        activeDragState == null ||
        activeDragState.pointerId !== event.pointerId
      )
        return;
      let pointerSample =
        createAvatarOverlayPointerSample(event);
      activeDragState.samples =
        trimRecentAvatarOverlayPointerSamples([
          ...activeDragState.samples,
          pointerSample,
        ]);
      let deltaX =
          pointerSample.screenX -
          activeDragState.screenX,
        deltaY =
          pointerSample.screenY -
          activeDragState.screenY;
      (Math.abs(deltaX) < 4 &&
        Math.abs(deltaY) < 4) ||
        ((activeDragState.hasMoved = true),
        (activeDragState.screenX =
          pointerSample.screenX),
        (activeDragState.screenY =
          pointerSample.screenY),
        activeDragState.usesOrbPhysics ||
          (deltaX >= 4
            ? setMascotDragState("running-right")
            : deltaX <= -4 &&
              setMascotDragState("running-left")),
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-drag-move",
          {
            pointerScreenX: pointerSample.screenX,
            pointerScreenY: pointerSample.screenY,
          },
        ));
    },
    handleMascotResizePointerDown = (event) => {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.setPointerCapture?.(event.pointerId);
      let startMascotWidth = readCurrentMascotWidth();
      clearLayoutSettleTimeout();
      cancelMascotResizeMoveFrame();
      pendingLayoutMascotWidthRef.current = null;
      mascotResizeRef.current = {
        currentWidthPx: startMascotWidth,
        pointerId: event.pointerId,
        startScreenX: event.screenX,
        startWidthPx: startMascotWidth,
      };
      setPendingMascotWidthPx(startMascotWidth);
      setMascotResizeActive(true);
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-mascot-resize-start",
        {
          width: startMascotWidth,
        },
      );
    },
    handleMascotResizePointerMove = (event) => {
      let activeResizeState =
        mascotResizeRef.current;
      if (
        activeResizeState == null ||
        activeResizeState.pointerId !== event.pointerId
      )
        return;
      event.preventDefault();
      event.stopPropagation();
      let nextMascotWidth = getClampedMascotResizeWidth(
        activeResizeState,
        event.screenX,
      );
      activeResizeState.currentWidthPx =
        nextMascotWidth;
      setPendingMascotWidthPx(nextMascotWidth);
      scheduleMascotResizeMove(nextMascotWidth);
    },
    handleMascotResizePointerUp = (event) => {
      finishMascotResize(event.pointerId, event.screenX);
      releaseMascotResizePointer(event.pointerId, event.currentTarget);
    },
    handleMascotResizePointerCancel = (event) => {
      event.stopPropagation();
      finishMascotResize(event.pointerId);
      releaseMascotResizePointer(event.pointerId, event.currentTarget);
    },
    handleMascotResizeLostPointerCapture = (event) => {
      finishMascotResize(event.pointerId);
      releaseMascotResizePointer(event.pointerId);
    },
    runNotificationAction = (
      notificationForRun,
      actionForRun,
    ) => {
      notificationForRun.action != null &&
        (actionForRun == null ||
          actionForRun.intent === "open") &&
        logOverlayAction(
          currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
          currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          notificationForRun,
        );
      onRunNotificationAction(
        notificationForRun,
        actionForRun,
      );
    },
    submitQuestionOption = (
      notificationForQuestion,
      questionOption,
    ) => {
      onSubmitQuestionOption(
        notificationForQuestion,
        questionOption,
      );
    },
    dismissNotification = (notificationToDismiss) => {
      logOverlayAction(
        currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        notificationToDismiss,
      );
      setDismissedNotificationTurnKeys((previousDismissedTurnKeys) => {
        if (
          previousDismissedTurnKeys.get(
            notificationToDismiss.id,
          ) === notificationToDismiss.turnKey
        )
          return previousDismissedTurnKeys;
        let nextDismissedTurnKeys = new Map(
          previousDismissedTurnKeys,
        );
        return (
          nextDismissedTurnKeys.set(
            notificationToDismiss.id,
            notificationToDismiss.turnKey,
          ),
          nextDismissedTurnKeys
        );
      });
    },
    openNotificationStackFromRow = () => {
      logOverlayAction(
        currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
        currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        undefined,
        true,
      );
      currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
        "avatar-overlay-composition-surface-action",
        {
          action: {
            type: "open-notification-stack",
          },
        },
      );
      setNotificationTrayOpen(true);
    },
    setNotificationExpanded = (
      notificationId,
      isExpanded,
    ) => {
      setExpandedNotificationIds((previousExpandedIds) =>
        isExpanded
          ? previousExpandedIds.includes(
              notificationId,
            )
            ? previousExpandedIds
            : [
                ...previousExpandedIds,
                notificationId,
              ]
          : previousExpandedIds.filter(
              (item) => item !== notificationId,
            ),
      );
    },
    activateNotification = (notificationId) => {
      let activatedNotification = notifications.find(
        ({ id }) => id === notificationId,
      );
      if (activatedNotification != null) {
        if (!notificationTrayOpen && notifications.length > 1) {
          openNotificationStackFromRow();
          return;
        }
        runNotificationAction(activatedNotification);
      }
    },
    submitQuickChat = async (
      prompt,
    ) => {
      if (!quickChatEnabled) return;
      let trimmedQuickChatPrompt =
        prompt.trim();
      trimmedQuickChatPrompt.length !== 0 &&
        (await onSubmitQuickChat(trimmedQuickChatPrompt),
        setQuickChatDraft(""),
        setQuickChatResetRevision(
          (revision) =>
            revision + 1,
        ));
    },
    setKeyboardInteractive = useCallback(
      (isInteractive) => {
        currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
          "avatar-overlay-keyboard-interaction-changed",
          {
            isInteractive: isInteractive,
          },
        );
      },
      [],
    ),
    runNotificationControl = (
      notificationForControl,
      controlAction,
      updateKeyboardState = true,
    ) => {
      let controlTarget =
        notificationForControl.controlTarget;
      switch (controlAction.type) {
        case "close-follow-up":
          setNotificationFollowUp(null);
          updateKeyboardState && setKeyboardInteractive(false);
          return;
        case "open-follow-up":
          if (
            !notificationForControl.isLoading ||
            controlTarget == null
          )
            return;
          setNotificationFollowUp({
            notificationId: notificationForControl.id,
            submissionStatus: "idle",
            turnKey: notificationForControl.turnKey,
          });
          updateKeyboardState && setKeyboardInteractive(true);
          return;
        case "stop":
          if (controlTarget == null) return;
          setNotificationFollowUp(null);
          Promise.resolve(
            onRunNotificationControl(
              notificationForControl,
              controlAction,
            ),
          ).catch(() => {
            contentAppScope
              .get(worktreeNewThreadQueryCompatSlotLowerGLowerP)
              .danger(
                contentIntl.formatMessage({
                  id: "avatarOverlay.stopNotificationError",
                  defaultMessage: "Unable to stop activity",
                  description:
                    "Error shown when stopping a running activity from the floating avatar overlay fails",
                }),
              );
          });
          return;
        case "submit-follow-up": {
          let trimmedFollowUpPrompt =
            controlAction.prompt.trim();
          if (
            controlTarget == null ||
            trimmedFollowUpPrompt.length === 0
          )
            return;
          setNotificationFollowUp((followUpState) =>
            followUpState?.notificationId ===
              notificationForControl.id &&
            followUpState.turnKey ===
              notificationForControl.turnKey
              ? {
                  ...followUpState,
                  submissionStatus: "submitting",
                }
              : followUpState,
          );
          Promise.resolve(
            onRunNotificationControl(notificationForControl, {
              type: "submit-follow-up",
              prompt: trimmedFollowUpPrompt,
            }),
          )
            .then(() => {
              setNotificationFollowUp(
                (followUpState) =>
                  followUpState?.notificationId ===
                    notificationForControl.id &&
                  followUpState.turnKey ===
                    notificationForControl.turnKey
                    ? null
                    : followUpState,
              );
              updateKeyboardState && setKeyboardInteractive(false);
            })
            .catch(() => {
              setNotificationFollowUp(
                (followUpState) =>
                  followUpState?.notificationId ===
                    notificationForControl.id &&
                  followUpState.turnKey ===
                    notificationForControl.turnKey
                    ? {
                        ...followUpState,
                        submissionStatus: "error",
                      }
                    : followUpState,
              );
            });
          return;
        }
      }
    };
  return (
    currentAppInitialSharedCompatSlotLowerY(
      "avatar-overlay-composition-action",
      ({ action }) => {
        switch (action.type) {
          case "activate-notification":
            activateNotification(action.notificationId);
            return;
          case "activity-stack-scroll-offset-changed":
            setActivityStackScrollOffset(action.offset);
            return;
          case "close-notification-stack":
            setNotificationTrayOpen(false);
            return;
          case "composition-pointer-surface-changed":
            setPointerSurfaceId(action.surfaceId);
            return;
          case "open-notification-stack":
            setNotificationTrayOpen(true);
            return;
          case "notification-expansion-changed":
            setNotificationExpanded(
              action.notificationId,
              action.isExpanded,
            );
            return;
          case "quick-chat-active-changed":
            return;
          case "quick-chat-draft-changed":
            if (!quickChatEnabled) return;
            setQuickChatDraft(action.draft);
            return;
          case "quick-chat-surface-hover-changed":
            if (!quickChatEnabled) return;
            setQuickChatSurfaceHovered(action.isHovered);
            return;
          case "quick-chat-visibility-changed":
            if (!quickChatEnabled) return;
            setQuickChatSurfaceVisible(action.isVisible);
            return;
          case "scroll-activity-stack":
            setActivityStackScrollOffset((previousScrollOffset) =>
              currentAppInitialSharedCompatSlotUpperWLowerI({
                contentHeight: activityStackPresentation.contentHeight,
                deltaY: action.deltaY,
                scrollOffset: previousScrollOffset,
                viewportHeight:
                  activityStackPresentation.viewportRect.height,
              }),
            );
            return;
          case "submit-quick-chat":
            submitQuickChat(action.prompt);
            return;
          case "dismiss-notification": {
            let notificationToDismiss = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            notificationToDismiss != null &&
              dismissNotification(notificationToDismiss);
            return;
          }
          case "run-notification-control": {
            let notificationForControlAction = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            notificationForControlAction == null
              ? action.action.type === "close-follow-up" &&
                setNotificationFollowUp(null)
              : runNotificationControl(
                  notificationForControlAction,
                  action.action,
                  false,
                );
            return;
          }
          case "run-notification-action": {
            let notificationForActionRun = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            notificationForActionRun != null &&
              runNotificationAction(
                notificationForActionRun,
                action.action,
              );
            return;
          }
          case "submit-question-option": {
            let notificationForQuestionResponse = notifications.find(
              ({ id }) => id === action.notificationId,
            );
            notificationForQuestionResponse != null &&
              submitQuestionOption(
                notificationForQuestionResponse,
                action.option,
              );
          }
        }
      },
      [notificationTrayOpen, notifications],
    ),
    currentAppInitialSharedCompatSlotLowerY(
      "avatar-overlay-layout-changed",
      ({ elementSizeRevision, layout, nativeMaterialAttached }) => {
        elementSizeRevision === pendingElementSizeRevisionRef.current &&
          (pendingElementSizeRevisionRef.current = null);
        setNativeLayout(layout);
        setNativeMaterialAttached(nativeMaterialAttached);
        pendingLayoutMascotWidthRef.current === layout.mascot.width &&
          ((pendingLayoutMascotWidthRef.current = null),
          clearLayoutSettleTimeout(),
          setPendingMascotWidthPx(null));
      },
      [clearLayoutSettleTimeout],
    ),
    useLayoutEffect(() => {
      let shouldForceResizeCursor =
        (!hideResizeHandle && mascotResizeHovered) ||
        mascotResizeActive;
      return (
        document.documentElement.classList.toggle(
          FORCE_RESIZE_CURSOR_CLASS_NAME,
          shouldForceResizeCursor,
        ),
        document.body.classList.toggle(
          FORCE_RESIZE_CURSOR_CLASS_NAME,
          shouldForceResizeCursor,
        ),
        () => {
          document.documentElement.classList.remove(
            FORCE_RESIZE_CURSOR_CLASS_NAME,
          );
          document.body.classList.remove(FORCE_RESIZE_CURSOR_CLASS_NAME);
        }
      );
    }, [hideResizeHandle, mascotResizeHovered, mascotResizeActive]),
    useEffect(
      () => () => {
        clearLayoutSettleTimeout();
        cancelMascotResizeMoveFrame();
      },
      [cancelMascotResizeMoveFrame, clearLayoutSettleTimeout],
    ),
    useEffect(() => {
      let handleWindowPointerUp = (event) => {
          finishMascotDrag(event, true);
          finishMascotResize(event.pointerId, event.screenX);
          releaseMascotResizePointer(event.pointerId);
        },
        handleWindowPointerCancel = (event) => {
          finishMascotDrag(event, false);
          finishMascotResize(event.pointerId);
          releaseMascotResizePointer(event.pointerId);
        };
      return (
        window.addEventListener("pointerup", handleWindowPointerUp),
        window.addEventListener(
          "pointercancel",
          handleWindowPointerCancel,
        ),
        () => {
          window.removeEventListener(
            "pointerup",
            handleWindowPointerUp,
          );
          window.removeEventListener(
            "pointercancel",
            handleWindowPointerCancel,
          );
        }
      );
    }, [
      finishMascotResize,
      finishMascotDrag,
      releaseMascotResizePointer,
    ]),
    useLayoutEffect(() => {
      let resizeAnimationFrame = null,
        scheduleResizeMeasurement = () => {
          resizeAnimationFrame ??= window.requestAnimationFrame(
            () => {
              resizeAnimationFrame = null;
              measureAndDispatchElementSize();
            },
          );
        },
        resizeObserver = new ResizeObserver(
          scheduleResizeMeasurement,
        ),
        overlayRootElement =
          interactiveRegionRef.current;
      if (overlayRootElement != null) {
        resizeObserver.observe(
          overlayRootElement,
        );
        for (let observedElement of queryNativeOverlayMeasurementTargets(
          overlayRootElement,
        ))
          resizeObserver.observe(
            observedElement,
          );
      }
      return (
        window.addEventListener("resize", scheduleResizeMeasurement),
        scheduleResizeMeasurement(),
        () => {
          resizeAnimationFrame != null &&
            window.cancelAnimationFrame(resizeAnimationFrame);
          resizeObserver.disconnect();
          window.removeEventListener("resize", scheduleResizeMeasurement);
        }
      );
    }, [
      measureAndDispatchElementSize,
      selectedAvatar.id,
      notificationSearchKey,
    ]),
    useLayoutEffect(() => {
      measureAndDispatchElementSize();
    }, [
      notificationTrayOpen,
      nativeLayout,
      measureAndDispatchElementSize,
      selectedAvatar.id,
      notificationSearchKey,
      mascotWidthPx,
    ]),
    useEffect(() => {
      if (nextNotificationExpiresAtMs == null) return;
      let notificationExpiryDelayMs = Math.max(
          0,
          nextNotificationExpiresAtMs - Date.now(),
        ),
        notificationExpiryTimeout = window.setTimeout(() => {
          setNowMs((previousNowMs) =>
            Math.max(Date.now(), previousNowMs + 1),
          );
        }, notificationExpiryDelayMs);
      return () => {
        window.clearTimeout(notificationExpiryTimeout);
      };
    }, [nextNotificationExpiresAtMs]),
    useEffect(() => {
      if (!hasRunningLocalSession && !hasRunningCloudSession)
        return;
      let sessionRefreshTimeout = window.setTimeout(() => {
        setNowMs((previousNowMs) =>
          Math.max(Date.now(), previousNowMs + 1),
        );
        hasRunningLocalSession && onRefreshLocalSessions();
        hasRunningCloudSession && onRefreshRemoteSessions();
      }, ACTIVITY_REFRESH_INTERVAL_MS);
      return () => {
        window.clearTimeout(sessionRefreshTimeout);
      };
    }, [
      hasRunningLocalSession,
      hasRunningCloudSession,
      onRefreshLocalSessions,
      onRefreshRemoteSessions,
    ]),
    React.createElement(AvatarOverlayNativeFrame, {
      activityCopies: activityCopies.map(({ copy }) => copy),
      activityStackPresentation: activityStackPresentation,
      areActivityPillsVisible: activityPillsVisible,
      avatar: selectedAvatar,
      avatarMenuItems: [
        {
          id: "close-avatar",
          message: currentAppInitialSharedMember0273({
            id: "petOverlay.closePet",
            defaultMessage: "Close pet",
            description: "Context menu item that closes the floating Codex pet",
          }),
          onSelect: () => {
            logOverlayAction(
              currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            );
            onClosePet();
          },
        },
      ],
      globalDictationOrbEnabled,
      interactiveRegionRef: interactiveRegionRef,
      isNotificationTrayOpen: notificationTrayOpen,
      layout: nativeLayout,
      mascotDragState: mascotDragState,
      nativeMaterialAttached: nativeMaterialAttached,
      expandedNotificationIds: expandedNotificationIds,
      notificationStackContentExpanded: nativeMaterialAttached
        ? true
        : undefined,
      mascotLayout:
        mascotResizeActive && pendingMascotWidthPx != null
          ? {
              ...nativeLayout.mascot,
              height: Math.ceil(
                pendingMascotWidthPx /
                  AVATAR_OVERLAY_MASCOT_ASPECT_RATIO,
              ),
              width: pendingMascotWidthPx,
            }
          : nativeLayout.mascot,
      mascotResizeHandle: hideResizeHandle
        ? undefined
        : {
            onLostPointerCapture: handleMascotResizeLostPointerCapture,
            onPointerCancel: handleMascotResizePointerCancel,
            onPointerDown: handleMascotResizePointerDown,
            onPointerEnter: () => {
              setMascotResizeHovered(true);
            },
            onPointerLeave: () => {
              setMascotResizeHovered(false);
            },
            onPointerMove: handleMascotResizePointerMove,
            onPointerUp: handleMascotResizePointerUp,
          },
      mascotStyle: createAvatarOverlayMascotWidthStyle(
        pendingMascotWidthPx ?? mascotWidthPx,
      ),
      notifications,
      pointerSurfaceId: pointerSurfaceId,
      quickChatDictation: {
        cleanupEnabled: dictationCleanupEnabled,
        streamingEnabled: dictationStreamingEnabled,
        supportState: dictationSupportState,
      },
      onActivityStackScroll: (deltaY) => {
        setActivityStackScrollOffset((previousScrollOffset) =>
          currentAppInitialSharedCompatSlotUpperWLowerI({
            contentHeight: activityStackPresentation.contentHeight,
            deltaY: deltaY,
            scrollOffset: previousScrollOffset,
            viewportHeight: activityStackPresentation.viewportRect.height,
          }),
        );
      },
      onActivateNotification: activateNotification,
      onHideActivityPills: () => {
        if (
          (setKeyboardInteractive(false), notificationTrayOpen && notifications.length > 1)
        ) {
          logOverlayAction(
            currentAppInitialSharedMember0342.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
            currentAppInitialSharedMember0654.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            undefined,
            false,
          );
          currentAppInitialSharedCompatSlotLowerV.dispatchMessage(
            "avatar-overlay-composition-surface-action",
            {
              action: {
                type: "close-notification-stack",
              },
            },
          );
          setNotificationTrayOpen(false);
          return;
        }
        setNotificationTrayOpen(false);
        setActivityPillsVisible(false);
      },
      onMascotLostPointerCapture: (event) => {
        finishMascotDrag(event, false);
      },
      onMascotPointerCancel: (event) => {
        finishMascotDrag(event, false);
      },
      onMascotPointerDown: handleMascotPointerDown,
      onMascotPointerMove: handleMascotPointerMove,
      onMascotPointerUp: (event) => {
        finishMascotDrag(event, true);
      },
      onNotificationExpansionChange: setNotificationExpanded,
      onDismissNotification: dismissNotification,
      notificationFollowUp: notificationFollowUp,
      onQuickChatEditorActiveChange: setKeyboardInteractive,
      onQuickChatDraftChange: quickChatEnabled
        ? setQuickChatDraft
        : undefined,
      onQuickChatVisibilityChange: quickChatEnabled
        ? setQuickChatEditorActive
        : undefined,
      onRunNotificationControl: runNotificationControl,
      onRunNotificationAction: runNotificationAction,
      onSubmitQuestionOption: submitQuestionOption,
      onSubmitQuickChat: submitQuickChat,
      onShowActivityPills: () => {
        setActivityPillsVisible(true);
      },
      quickChatDraft: quickChatDraft,
      quickChatVisible: quickChatVisible,
      restrictedSurface: undefined,
      renderMode: {
        type: "native-root",
      },
    })
  );
}
function getClampedMascotResizeWidth(
  resizeState,
  screenX,
) {
  return clampAvatarOverlayMascotWidth(
    resizeState.startWidthPx +
      screenX -
      resizeState.startScreenX,
  );
}
function buildFirstAwakeNotificationSeed(
  selectedAvatar,
  selectedAvatarId,
) {
  return isSelectedCustomAvatarMissing(
    selectedAvatar,
    selectedAvatarId,
  ) ||
    createSignalGetterAtom(FIRST_AWAKE_NOTIFICATION_STORAGE_KEY, []).includes(
      selectedAvatar.id,
    )
    ? null
    : {
        avatarId: selectedAvatar.id,
        petName: selectedAvatar.displayName,
        startedAtMs: Date.now(),
      };
}
function getAvatarOverlayNativePageKey(
  selectedAvatar,
  selectedAvatarId,
) {
  return isSelectedCustomAvatarMissing(
    selectedAvatar,
    selectedAvatarId,
  )
    ? "pending-custom-avatar"
    : "ready";
}
function hasSameNativeOverlayElementSize(
  previousSize,
  nextSize,
) {
  return (
    previousSize != null &&
    previousSize.mascot.width ===
      nextSize.mascot.width &&
    previousSize.mascot.height ===
      nextSize.mascot.height &&
    hasSameMeasuredSize(
      previousSize.tray,
      nextSize.tray,
    )
  );
}
function hasSameMeasuredSize(
  previousTraySize,
  nextTraySize,
) {
  return (
    previousTraySize === nextTraySize ||
    (previousTraySize != null &&
      nextTraySize != null &&
      previousTraySize.width ===
        nextTraySize.width &&
      previousTraySize.height ===
        nextTraySize.height)
  );
}
var queryClientRuntimeInit,
  isEqual,
  ACTIVITY_REFRESH_INTERVAL_MS,
  ACTIVITY_STACK_VIEWPORT_HEIGHT,
  EMPTY_ACTIVITY_STACK_ITEMS,
  FIRST_AWAKE_NOTIFICATION_STORAGE_KEY,
  INACTIVE_DICTATION_STATE,
  FLOATING_WINDOW_INTERACTIVE_SELECTORS,
  FORCE_RESIZE_CURSOR_CLASS_NAME,
  DEFAULT_NATIVE_LAYOUT;
(() => {
  queryClientRuntimeInit =
    currentAppInitialSharedCompatSlotLowerGLowerC();
  remoteControlRefreshSourceEnum();
  let isEqualRuntime = currentAppInitialSharedCompatSlotUpperJLowerO();
  isEqual =
    typeof isEqualRuntime === "function"
      ? isEqualRuntime
      : isEqualRuntime.default;
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  intlFormatDateTimeRuntime();
  appMainCurrentCompatSlotLowerVLowerF();
  pullRequestNewThreadCompatSlotLowerY();
  appServerDisconnectedAppServerSignal();
  currentAppInitialSharedRuntime0840();
  toolSuggestionAndConnectorSchema();
  currentAppInitialSharedImplementPlanImplementationRuntime();
  worktreeNewThreadOrchestratorCompatSlotUpperLLowerC();
  initAvatarOverlayOpenStateChunk();
  initAvatarSelectionStateChunk();
  worktreeNewThreadQueryCompatSlotUpperJLowerD();
  worktreeNewThreadQueryCompatSlotLowerMLowerP();
  appMainCurrentCompatSlotLowerOLowerD();
  initFloatingWindowPointerInteractivityChunk();
  currentAppInitialSharedCompatSlotUnderscore();
  remoteConnectionRuntime0298();
  worktreeNewThreadQueryCompatSlotLowerILowerC();
  currentAppInitialSharedCompatSlotUpperD();
  currentAppInitialSharedDisplayRuntime();
  appMainCurrentCompatSlotLowerXLowerM();
  initPersistedAtomStorageRuntime();
  worktreeNewThreadQueryCompatSlotUpperTLowerS();
  initAvatarOverlayNativeFrameCopyChunk();
  initAvatarOverlayNativePageSupportChunk();
  initAvatarOverlayDebugStateChunk();
  initAvatarOverlayPointerDragChunk();
  initAvatarOverlayNotificationSearchKeyChunk();
  initAvatarOverlayMascotWidthChunk();
  initNativeMeasurementSelectors();
  initAvatarOverlayNativeFrameChunk();
  initAvatarOverlayNotificationTrayChunk();
  initAvatarOverlayPillActivityItemsChunk();
  initUseAvatarOverlaySelectionChunk();
  ACTIVITY_REFRESH_INTERVAL_MS = 15e3;
  ACTIVITY_STACK_VIEWPORT_HEIGHT = 208;
  EMPTY_ACTIVITY_STACK_ITEMS = [];
  FIRST_AWAKE_NOTIFICATION_STORAGE_KEY = "first-awake-pet-notification-avatar-ids";
  INACTIVE_DICTATION_STATE = {
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
      current: null,
    },
  };
  FLOATING_WINDOW_INTERACTIVE_SELECTORS = [
    "[data-avatar-overlay-hit-region]",
    "[data-avatar-mascot='true']",
  ];
  FORCE_RESIZE_CURSOR_CLASS_NAME = "codex-avatar-overlay-force-resize-cursor";
  DEFAULT_NATIVE_LAYOUT = {
    mascot: {
      left: 244,
      top: 207,
      width: 112,
      height: 121,
    },
    placement: "top-end",
    tray: {
      left: 19.5,
      top: 70,
      width: 345,
      height: 120,
    },
    viewport: {
      width: 384,
      height: 400,
    },
  };
})();
