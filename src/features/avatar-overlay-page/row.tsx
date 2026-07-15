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

function AvatarOverlayNotificationRow({
  isReplying,
  notification,
  notificationIndex,
  onDismissNotification,
  onCloseReply,
  onOpenReply,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onSubmitNotificationReply,
  prefersReducedMotion,
  replyInputRef
}) {
  let avatarOverlayBinding96 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding97 = notification.source === "local" && notification.usesLiveConversationState !== false ? notification.localConversationId : null,
    avatarOverlayBinding98 = currentAppInitialSharedCompatSlotUpperGLowerO(currentAppInitialSharedMember0547, avatarOverlayBinding97),
    avatarOverlayBinding99 = avatarOverlayBinding98 == null ? null : getLatestAvatarOverlayActivitySubtitle(avatarOverlayBinding98.items, avatarOverlayBinding96),
    avatarOverlayBinding100 = getAvatarOverlayActivityStatusConfig(notification),
    avatarOverlayBinding101 = avatarOverlayBinding96.formatMessage(avatarOverlayBinding100.labelMessage),
    avatarOverlayBinding102 = avatarOverlayBinding99 ?? notification.body ?? avatarOverlayBinding96.formatMessage(avatarOverlayBinding100.fallbackBodyMessage),
    avatarOverlayBinding103 = notification.waitingRequest,
    avatarOverlayBinding104 = avatarOverlayBinding103 == null ? avatarOverlayBinding102 : getWaitingRequestSearchText(avatarOverlayBinding103, avatarOverlayBinding96),
    avatarOverlayBinding105 = avatarOverlayBinding104.replace(/[.?!]+$/, ""),
    avatarOverlayBinding106 = avatarOverlayBinding104 === avatarOverlayBinding101 ? avatarOverlayBinding101 : `${avatarOverlayBinding101}. ${avatarOverlayBinding105}`,
    avatarOverlayBinding107 = notification.action == null ? `${notification.title}. ${avatarOverlayBinding106}` : `${notification.title}. ${avatarOverlayBinding106}. ${avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.openNotification)}`,
    avatarOverlayBinding108 = notification.action != null,
    avatarOverlayBinding109 = notification.kind !== "activity" && onDismissNotification != null,
    [avatarOverlayBinding110, avatarOverlayBinding111] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding112, avatarOverlayBinding113] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding114, avatarOverlayBinding115] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(""),
    [avatarOverlayBinding116, avatarOverlayBinding117] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(null),
    [avatarOverlayBinding118, avatarOverlayBinding119] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    [avatarOverlayBinding120, avatarOverlayBinding121] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(0),
    [avatarOverlayBinding122, avatarOverlayBinding123] = AvatarOverlaySharedModule.avatarOverlayBinding2.useState(false),
    avatarOverlayBinding124 = AvatarOverlaySharedModule.avatarOverlayBinding2.useRef(avatarOverlayBinding110),
    avatarOverlayBinding125 = AvatarOverlaySharedModule.avatarOverlayBinding2.useRef(undefined),
    avatarOverlayBinding126 = avatarOverlayBinding103 == null ? AvatarOverlaySharedModule.avatarOverlayBinding8 : AvatarOverlaySharedModule.avatarOverlayBinding9,
    avatarOverlayBinding127 = AvatarOverlaySharedModule.avatarOverlayBinding2.useCallback(avatarOverlayOperand20 => {
      if (avatarOverlayBinding125.current?.(), avatarOverlayBinding125.current = undefined, avatarOverlayOperand20 == null) return;
      let avatarOverlayBinding349 = () => {
        let avatarOverlayBinding361 = avatarOverlayOperand20.scrollHeight;
        avatarOverlayBinding121(avatarOverlayOperand89 => avatarOverlayOperand89 === avatarOverlayBinding361 ? avatarOverlayOperand89 : avatarOverlayBinding361);
        let avatarOverlayBinding362 = hasHorizontallyOverflowingContent(avatarOverlayOperand20);
        avatarOverlayBinding123(avatarOverlayOperand66 => {
          let avatarOverlayBinding380 = avatarOverlayBinding124.current && avatarOverlayOperand66 || avatarOverlayBinding362;
          return avatarOverlayOperand66 === avatarOverlayBinding380 ? avatarOverlayOperand66 : avatarOverlayBinding380;
        });
      };
      avatarOverlayBinding349();
      avatarOverlayBinding125.current = observeElementSize({
        axis: "both",
        target: avatarOverlayOperand20,
        onChange: avatarOverlayBinding349
      });
    }, []);
  AvatarOverlaySharedModule.avatarOverlayBinding2.useLayoutEffect(() => {
    avatarOverlayBinding124.current = avatarOverlayBinding110;
  }, [avatarOverlayBinding110]);
  let avatarOverlayBinding128 = avatarOverlayBinding120 > avatarOverlayBinding126 + AvatarOverlaySharedModule.avatarOverlayBinding11 || avatarOverlayBinding122,
    avatarOverlayBinding129 = avatarOverlayBinding128 && avatarOverlayBinding110 && !isReplying,
    avatarOverlayBinding130 = notification.controlTarget?.type === "app-server-conversation" && onSubmitNotificationReply != null,
    avatarOverlayBinding131 = avatarOverlayBinding114.trim(),
    avatarOverlayBinding132 = prefersReducedMotion ? {
      duration: 0
    } : {
      duration: avatarOverlayBinding118 ? 0.2 : 0.28,
      ease: [0.16, 1, 0.3, 1]
    },
    avatarOverlayBinding133 = async event => {
      if (event.preventDefault(), event.stopPropagation(), !(!avatarOverlayBinding130 || avatarOverlayBinding131.length === 0 || avatarOverlayBinding112)) {
        avatarOverlayBinding113(true);
        avatarOverlayBinding117(null);
        try {
          await onSubmitNotificationReply(notification, avatarOverlayBinding131);
          avatarOverlayBinding115("");
          onCloseReply();
        } catch {
          avatarOverlayBinding117(avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.notificationReplyError));
        } finally {
          avatarOverlayBinding113(false);
        }
      }
    };
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
    animate: {
      opacity: 1,
      y: 0
    },
    initial: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 4
    },
    role: "listitem",
    className: "group no-drag relative w-full min-w-0 snap-start scroll-mt-2 text-left",
    "data-avatar-overlay-measure": "notification-tray-row",
    transition: prefersReducedMotion ? {
      duration: 0
    } : {
      delay: Math.min(notificationIndex, 3) * AvatarOverlaySharedModule.avatarOverlayBinding7,
      duration: 0.18,
      ease: "easeOut"
    },
    onBlurCapture: event => {
      let avatarOverlayBinding378 = event.relatedTarget;
      avatarOverlayBinding378 instanceof Node && event.currentTarget.contains(avatarOverlayBinding378) || avatarOverlayBinding119(false);
    },
    onFocusCapture: () => {
      avatarOverlayBinding119(true);
    },
    onPointerEnter: () => {
      avatarOverlayBinding119(true);
    },
    onPointerLeave: () => {
      avatarOverlayBinding119(false);
    }
  }, <div className={worktreeNewThreadQueryCompatSlotLowerMLowerH("relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]", avatarOverlayBinding108 && "transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-token-border/80 hover:bg-token-main-surface-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(0,0,0,0.1)] motion-reduce:transition-none")}>
          {React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
      role: avatarOverlayBinding108 ? "button" : undefined,
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]", avatarOverlayBinding109 ? "pl-5" : "pl-3", avatarOverlayBinding108 ? "cursor-interaction" : "cursor-default"),
      tabIndex: avatarOverlayBinding108 ? 0 : undefined,
      transition: prefersReducedMotion ? {
        duration: 0
      } : {
        duration: 0.12,
        ease: "easeOut"
      },
      whileTap: avatarOverlayBinding108 && !prefersReducedMotion ? {
        scale: 0.995
      } : undefined,
      "aria-label": avatarOverlayBinding108 ? avatarOverlayBinding107 : undefined,
      onClick: () => {
        avatarOverlayBinding108 && onRunNotificationAction?.(notification);
      },
      onKeyDown: event => {
        !avatarOverlayBinding108 || event.key !== "Enter" && event.key !== " " || (event.preventDefault(), onRunNotificationAction?.(notification));
      }
    }, <span className="flex min-w-0 items-center pr-7">
                  <span className={worktreeNewThreadQueryCompatSlotLowerMLowerH("text-size-chat min-w-0 truncate leading-[17px]", notification.kind === "activity" ? "text-token-text-secondary" : "font-semibold text-token-foreground")}>
                    {notification.title}
                  </span>
                </span>, React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
      ref: avatarOverlayBinding127,
      animate: {
        maxHeight: avatarOverlayBinding129 ? AvatarOverlaySharedModule.avatarOverlayBinding10 : avatarOverlayBinding126
      },
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground", notification.kind === "activity" && "hidden", avatarOverlayBinding129 ? "whitespace-pre-wrap" : avatarOverlayBinding103 == null ? "line-clamp-2" : undefined),
      "data-avatar-overlay-measure-body": "true",
      initial: false,
      transition: prefersReducedMotion ? {
        duration: 0
      } : {
        duration: 0.18,
        ease: "easeOut"
      }
    }, avatarOverlayBinding103 == null ? avatarOverlayBinding102 : React.createElement(CompactWaitingRequestBody, {
      isExpanded: avatarOverlayBinding129,
      localConversationId: avatarOverlayBinding97,
      request: avatarOverlayBinding103,
      onRunNotificationAction: avatarOverlayOperand76 => {
        onRunNotificationAction?.(notification, avatarOverlayOperand76);
      },
      onSubmitQuestionOption: avatarOverlayOperand77 => {
        onSubmitQuestionOption?.(notification, avatarOverlayOperand77);
      }
    })))}
          <span role="img" aria-label={avatarOverlayBinding103?.kind === "question" ? avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.questionStatusIcon) : avatarOverlayBinding101} className={worktreeNewThreadQueryCompatSlotLowerMLowerH("pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100", avatarOverlayBinding128 && avatarOverlayBinding118 && "opacity-0 transition-opacity duration-150 motion-reduce:transition-none")}>
            {avatarOverlayBinding103?.kind === "question" ? React.createElement(projectHoverCardCurrentCompatSlotLowerW, {
        className: avatarOverlayBinding100.iconClassName
      }) : AvatarOverlayStatusIcon(avatarOverlayBinding100)}
          </span>
          {avatarOverlayBinding128 ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
      animate: {
        opacity: avatarOverlayBinding118 ? 1 : 0,
        x: avatarOverlayBinding118 ? 0 : 6
      },
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("absolute top-1 right-1 z-10", avatarOverlayBinding118 ? "pointer-events-auto" : "pointer-events-none"),
      "data-avatar-overlay-control": "expand",
      initial: false,
      transition: avatarOverlayBinding132
    }, React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerP, {
      align: "end",
      side: "top",
      tooltipContent: avatarOverlayBinding96.formatMessage(avatarOverlayBinding110 ? AvatarOverlaySharedModule.avatarOverlayBinding4.collapseNotificationTooltip : AvatarOverlaySharedModule.avatarOverlayBinding4.expandNotificationTooltip)
    }, React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("size-6", AvatarOverlaySharedModule.avatarOverlayBinding13),
      color: "ghost",
      size: "icon",
      "aria-expanded": avatarOverlayBinding110,
      "aria-label": avatarOverlayBinding96.formatMessage(avatarOverlayBinding110 ? AvatarOverlaySharedModule.avatarOverlayBinding4.collapseNotification : AvatarOverlaySharedModule.avatarOverlayBinding4.expandNotification, {
        title: notification.title
      }),
      onClick: () => {
        avatarOverlayBinding111(avatarOverlayOperand90 => !avatarOverlayOperand90);
      }
    }, React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.span, {
      animate: {
        rotate: avatarOverlayBinding110 ? 90 : 0
      },
      transition: prefersReducedMotion ? {
        duration: 0
      } : {
        duration: 0.12,
        ease: "easeOut"
      }
    }, React.createElement(worktreeNewThreadQueryCompatSlotUpperELowerP, {
      className: "icon-xs"
    }))))) : null}
          {avatarOverlayBinding130 && !isReplying ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
      animate: {
        opacity: avatarOverlayBinding118 ? 1 : 0,
        x: avatarOverlayBinding118 ? 0 : 6
      },
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("no-drag absolute right-2 bottom-1 z-10", avatarOverlayBinding118 ? "pointer-events-auto" : "pointer-events-none"),
      "data-avatar-overlay-control": "reply",
      initial: false,
      transition: avatarOverlayBinding132
    }, <div className="flex justify-end pb-1">
                      {React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
        className: worktreeNewThreadQueryCompatSlotLowerMLowerH("h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]", AvatarOverlaySharedModule.avatarOverlayBinding13),
        color: "outline",
        size: "default",
        "aria-label": avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.replyNotification, {
          title: notification.title
        }),
        onClick: event => {
          event.stopPropagation();
          avatarOverlayBinding117(null);
          avatarOverlayBinding115("");
          onOpenReply();
          avatarOverlayBinding119(true);
        },
        onPointerDown: event => {
          event.stopPropagation();
        }
      }, avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.replyNotificationButton))}
                    </div>) : null}
          {isReplying ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.form, {
      className: "no-drag mx-3 mb-2 border-t border-token-border/60 pt-2",
      animate: {
        opacity: 1,
        y: 0
      },
      initial: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : -2
      },
      transition: prefersReducedMotion ? {
        duration: 0
      } : {
        duration: 0.16,
        ease: "easeOut"
      },
      onClick: event => {
        event.stopPropagation();
      },
      onPointerDown: event => {
        event.stopPropagation();
      },
      onSubmit: avatarOverlayOperand83 => {
        avatarOverlayBinding133(avatarOverlayOperand83);
      }
    }, <div className="flex min-w-0 items-center gap-1.5">
                      <input ref={replyInputRef} className="text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border" aria-label={avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.replyNotification, {
        title: notification.title
      })} autoFocus={true} placeholder={avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.notificationReplyPlaceholder)} value={avatarOverlayBinding114} onChange={event => {
        avatarOverlayBinding115(event.currentTarget.value);
        avatarOverlayBinding117(null);
      }} onKeyDown={event => {
        event.key !== "Escape" || avatarOverlayBinding112 || (event.stopPropagation(), onCloseReply(), avatarOverlayBinding117(null));
      }} />
                      {React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
        className: "h-6 px-2 text-xs",
        color: "primary",
        size: "default",
        type: "submit",
        "aria-label": avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.sendNotificationReply, {
          title: notification.title
        }),
        disabled: avatarOverlayBinding131.length === 0 || avatarOverlayBinding112,
        loading: avatarOverlayBinding112
      }, avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.replyNotificationButton))}
                    </div>, avatarOverlayBinding116 == null ? null : <div className="mt-1 text-[11px] leading-4 text-token-error-foreground" role="alert">
                        {avatarOverlayBinding116}
                      </div>) : null}
        </div>, avatarOverlayBinding109 && !isReplying ? <div className={worktreeNewThreadQueryCompatSlotLowerMLowerH("absolute -top-1 -left-1 z-20", avatarOverlayBinding118 ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")} data-avatar-overlay-control="dismiss">
            {React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerP, {
      align: "start",
      side: "top",
      tooltipContent: avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.dismissNotificationTooltip)
    }, React.createElement(AvatarOverlayPillDismissButton, {
      ariaLabel: avatarOverlayBinding96.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.dismissNotification, {
        title: notification.title
      }),
      onClick: () => {
        onDismissNotification?.(notification);
      }
    }))}
          </div> : null);
}
function CompactWaitingRequestBody(avatarOverlayOperand2) {
  let {
      isExpanded,
      localConversationId,
      onRunNotificationAction,
      onSubmitQuestionOption,
      request
    } = avatarOverlayOperand2,
    avatarOverlayBinding186 = avatarOverlayOperand82 => {
      "questionOption" in avatarOverlayOperand82 || onRunNotificationAction(avatarOverlayOperand82);
    };
  let avatarOverlayBinding187 = avatarOverlayBinding186;
  switch (request.kind) {
    case "question":
      {
        let avatarOverlayBinding284 = isExpanded ? "break-words whitespace-pre-wrap" : "truncate",
          avatarOverlayBinding285 = worktreeNewThreadQueryCompatSlotLowerMLowerH("min-w-0", avatarOverlayBinding284);
        let avatarOverlayBinding286 = <div className={avatarOverlayBinding285}>{request.prompt}</div>;
        let avatarOverlayBinding287 = request.options.map(mapQuestionOptionToAction);
        let avatarOverlayBinding288 = avatarOverlayOperand45 => {
          if ("questionOption" in avatarOverlayOperand45) {
            onSubmitQuestionOption?.(avatarOverlayOperand45.questionOption);
            return;
          }
          onRunNotificationAction(avatarOverlayOperand45);
        };
        let avatarOverlayBinding289 = React.createElement(CompactWaitingRequestActions, {
          actions: avatarOverlayBinding287,
          onRunNotificationAction: avatarOverlayBinding288
        });
        let avatarOverlayBinding290;
        return <div data-avatar-overlay-compact-waiting-request="question">
          {avatarOverlayBinding286}
          {avatarOverlayBinding289}
        </div>;
      }
    case "patch":
      {
        let avatarOverlayBinding291 = React.createElement(CompactPatchRequestSummary, {
          additions: request.additions,
          deletions: request.deletions,
          fileCount: request.fileCount,
          files: request.files,
          isExpanded,
          summary: request.summary
        });
        let avatarOverlayBinding292 = React.createElement(CompactWaitingRequestActions, {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187
        });
        let avatarOverlayBinding293;
        return <div data-avatar-overlay-compact-waiting-request="patch">
          {avatarOverlayBinding291}
          {avatarOverlayBinding292}
        </div>;
      }
    case "plan":
      {
        let avatarOverlayBinding343;
        return React.createElement(CompactPlanRequest, {
          isExpanded,
          localConversationId,
          onRunNotificationAction: avatarOverlayBinding187,
          request
        });
      }
    case "exec":
      {
        let avatarOverlayBinding310 = React.createElement(CompactWaitingRequestSummary, {
          isExpanded,
          text: request.summary
        });
        let avatarOverlayBinding311 = React.createElement(CompactWaitingRequestActions, {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187
        });
        let avatarOverlayBinding312;
        return <div data-avatar-overlay-compact-waiting-request="exec">
          {avatarOverlayBinding310}
          {avatarOverlayBinding311}
        </div>;
      }
    case "network":
      {
        let avatarOverlayBinding313 = React.createElement(CompactWaitingRequestSummary, {
          isExpanded,
          text: request.target
        });
        let avatarOverlayBinding314 = React.createElement(CompactWaitingRequestActions, {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187
        });
        let avatarOverlayBinding315;
        return <div data-avatar-overlay-compact-waiting-request="network">
          {avatarOverlayBinding313}
          {avatarOverlayBinding314}
        </div>;
      }
    case "permission":
      {
        let avatarOverlayBinding307 = React.createElement(CompactWaitingRequestSummary, {
          isExpanded,
          text: request.target
        });
        let avatarOverlayBinding308 = React.createElement(CompactWaitingRequestActions, {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187
        });
        let avatarOverlayBinding309;
        return <div data-avatar-overlay-compact-waiting-request="permission">
          {avatarOverlayBinding307}
          {avatarOverlayBinding308}
        </div>;
      }
    case "tool":
      {
        let avatarOverlayBinding303 = request.summary ?? request.target,
          avatarOverlayBinding304 = React.createElement(CompactWaitingRequestSummary, {
            isExpanded,
            text: avatarOverlayBinding303
          });
        let avatarOverlayBinding305 = React.createElement(CompactWaitingRequestActions, {
          actions: request.actions,
          onRunNotificationAction: avatarOverlayBinding187
        });
        let avatarOverlayBinding306;
        return <div data-avatar-overlay-compact-waiting-request="tool">
          {avatarOverlayBinding304}
          {avatarOverlayBinding305}
        </div>;
      }
  }
}
function mapQuestionOptionToAction(avatarOverlayOperand56, avatarOverlayOperand57) {
  return {
    label: avatarOverlayOperand56.label,
    tone: avatarOverlayOperand57 === 0 ? "primary" : "secondary",
    questionOption: avatarOverlayOperand56
  };
}
function CompactPlanRequest(avatarOverlayOperand11) {
  let {
      isExpanded,
      localConversationId,
      onRunNotificationAction,
      request
    } = avatarOverlayOperand11,
    {
      getModeForSelection
    } = appMainCurrentCompatSlotLowerGLowerP(localConversationId),
    avatarOverlayBinding272,
    avatarOverlayBinding273,
    avatarOverlayBinding274,
    avatarOverlayBinding275;
  {
    let avatarOverlayBinding327 = getModeForSelection("default");
    avatarOverlayBinding274 = request.kind;
    avatarOverlayBinding275 = React.createElement(CompactWaitingRequestSummary, {
      isExpanded,
      text: request.summary
    });
    avatarOverlayBinding272 = CompactWaitingRequestActions;
    avatarOverlayBinding273 = request.actions.map(item => item.intent === "plan-start" ? {
      ...item,
      planStartCollaborationMode: avatarOverlayBinding327
    } : item);
  }
  let avatarOverlayBinding276 = React.createElement(avatarOverlayBinding272, {
    actions: avatarOverlayBinding273,
    onRunNotificationAction
  });
  return <div data-avatar-overlay-compact-waiting-request={avatarOverlayBinding274}>
      {avatarOverlayBinding275}
      {avatarOverlayBinding276}
    </div>;
}
function CompactWaitingRequestSummary(avatarOverlayOperand17) {
  let {
      isExpanded,
      text
    } = avatarOverlayOperand17,
    avatarOverlayBinding329 = isExpanded ? "break-words whitespace-pre-wrap" : "truncate whitespace-nowrap",
    avatarOverlayBinding330 = worktreeNewThreadQueryCompatSlotLowerMLowerH("min-w-0 text-token-text-secondary", avatarOverlayBinding329);
  return <div className={avatarOverlayBinding330} data-avatar-overlay-compact-waiting-summary-text="true">
      {text}
    </div>;
}
function CompactPatchRequestSummary(avatarOverlayOperand4) {
  let {
      additions,
      deletions,
      fileCount,
      files,
      isExpanded,
      summary
    } = avatarOverlayOperand4,
    avatarOverlayBinding209 = currentAppInitialSharedFunction0375(),
    avatarOverlayBinding210 = avatarOverlayBinding209.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.compactPatchFileCount, {
      count: fileCount
    });
  let avatarOverlayBinding211 = avatarOverlayBinding210,
    avatarOverlayBinding212 = additions > 0 ? avatarOverlayBinding209.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.compactPatchAdditions, {
      count: additions
    }) : null;
  let avatarOverlayBinding213 = avatarOverlayBinding212,
    avatarOverlayBinding214 = deletions > 0 ? avatarOverlayBinding209.formatMessage(AvatarOverlaySharedModule.avatarOverlayBinding4.compactPatchDeletions, {
      count: deletions
    }) : null;
  let avatarOverlayBinding215 = avatarOverlayBinding214;
  if (!isExpanded) {
    let avatarOverlayBinding278 = <span>{avatarOverlayBinding211}</span>;
    let avatarOverlayBinding279 = avatarOverlayBinding213 == null ? null : <span className="ml-1.5 text-token-charts-green">
          {avatarOverlayBinding213}
        </span>;
    let avatarOverlayBinding280 = avatarOverlayBinding215 == null ? null : <span className="ml-1.5 text-token-error-foreground">
          {avatarOverlayBinding215}
        </span>;
    let avatarOverlayBinding281 = React.createElement(BulletSeparator, {
      className: "mx-1.5 text-token-text-tertiary"
    });
    let avatarOverlayBinding282 = <span>{summary}</span>;
    let avatarOverlayBinding283;
    return <div className="min-w-0 truncate whitespace-nowrap text-token-text-secondary" data-avatar-overlay-compact-waiting-summary-text="true">
        {avatarOverlayBinding278}
        {avatarOverlayBinding279}
        {avatarOverlayBinding280}
        {avatarOverlayBinding281}
        {avatarOverlayBinding282}
      </div>;
  }
  let avatarOverlayBinding216 = <span className="text-[11px] leading-4 text-token-text-secondary">
      {avatarOverlayBinding211}
    </span>;
  let avatarOverlayBinding217 = avatarOverlayBinding213 == null ? null : <span className="text-[11px] leading-4 text-token-charts-green">
        {avatarOverlayBinding213}
      </span>;
  let avatarOverlayBinding218 = avatarOverlayBinding215 == null ? null : <span className="text-[11px] leading-4 text-token-error-foreground">
        {avatarOverlayBinding215}
      </span>;
  let avatarOverlayBinding219 = <div className="mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">
      {avatarOverlayBinding216}
      {avatarOverlayBinding217}
      {avatarOverlayBinding218}
    </div>;
  let avatarOverlayBinding220 = files.map(CompactPatchFileRow);
  let avatarOverlayBinding221 = <div className="mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary">
      {avatarOverlayBinding220}
    </div>;
  return <div data-avatar-overlay-compact-waiting-summary-text="true">
      {avatarOverlayBinding219}
      {avatarOverlayBinding221}
    </div>;
}
function CompactPatchFileRow(avatarOverlayOperand61) {
  return <div key={avatarOverlayOperand61} className="leading-4 break-words">
      {avatarOverlayOperand61}
    </div>;
}
function CompactWaitingRequestActions(avatarOverlayOperand12) {
  let {
      actions,
      onRunNotificationAction
    } = avatarOverlayOperand12,
    avatarOverlayBinding295;
  {
    let avatarOverlayBinding316;
    avatarOverlayBinding316 = avatarOverlayOperand14 => React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      key: avatarOverlayOperand14.ariaLabel ?? avatarOverlayOperand14.label,
      className: "max-w-full min-w-0",
      color: getWaitingRequestActionButtonColor(avatarOverlayOperand14.tone),
      size: "toolbar",
      "aria-label": avatarOverlayOperand14.ariaLabel ?? avatarOverlayOperand14.label,
      title: avatarOverlayOperand14.ariaLabel ?? avatarOverlayOperand14.label,
      onClick: event => {
        event.stopPropagation();
        onRunNotificationAction(avatarOverlayOperand14);
      },
      onPointerDown: stopPointerEventPropagation
    }, <span className="truncate">{avatarOverlayOperand14.label}</span>);
    avatarOverlayBinding295 = actions.map(avatarOverlayBinding316);
  }
  return <div className="no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px">
      {avatarOverlayBinding295}
    </div>;
}
function stopPointerEventPropagation(event) {
  event.stopPropagation();
}
function getWaitingRequestActionButtonColor(avatarOverlayOperand41) {
  switch (avatarOverlayOperand41) {
    case "primary":
      return "secondary";
    case "danger":
      return "danger";
    case "secondary":
      return "secondary";
  }
}

function hasHorizontallyOverflowingContent(avatarOverlayOperand46) {
  return [avatarOverlayOperand46, ...Array.from(avatarOverlayOperand46.querySelectorAll("*"))].some(item => item.clientWidth > 0 && item.scrollWidth > item.clientWidth + AvatarOverlaySharedModule.avatarOverlayBinding11);
}

function AvatarOverlayStatusIcon(avatarOverlayOperand27) {
  switch (avatarOverlayOperand27.iconType) {
    case "check-circle":
      return React.createElement(worktreeNewThreadQueryCompatSlotLowerXLowerS, {
        className: avatarOverlayOperand27.iconClassName
      });
    case "clock":
      return React.createElement(appMainCurrentCompatSlotLowerALowerM, {
        className: avatarOverlayOperand27.iconClassName
      });
    case "spinner":
      return React.createElement(worktreeNewThreadQueryCompatSlotUpperDLowerM, {
        className: avatarOverlayOperand27.iconClassName
      });
    case "warning":
      return React.createElement(appMainCurrentCompatSlotLowerRLowerM, {
        className: avatarOverlayOperand27.iconClassName
      });
  }
}

export class AvatarOverlayRowModule {
  static AvatarOverlayNotificationRow = AvatarOverlayNotificationRow;
}
