// Restored from ref/webview/assets/avatar-overlay-native-frame-DrVLY9Bt.js
// avatar-overlay-native-frame-DrVLY9Bt chunk restored from the Codex webview bundle.
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type KeyboardEvent,
  type PointerEvent,
  type ReactElement,
  type ReactNode,
  type RefObject,
} from "react";
import { defineMessages } from "../../vendor/react-intl";
import {
  AvatarOverlayPillDismissButton,
  formatWaitingRequestAccessibleLabel,
  getAvatarOverlayActivityStatusConfig,
  getLatestAvatarOverlayActivitySubtitle,
  getWaitingRequestSearchText,
  type AvatarOverlayActivityItem,
  type CompactWaitingRequest,
  type CompactWaitingRequestAction,
  type IntlShapeLike,
} from "../avatar-overlay-pill";
type Rect = {
  height: number;
  left: number;
  top: number;
  width: number;
};
type AvatarOverlayPlacement = "top" | "bottom" | "top-start" | "bottom-start";
type AvatarOverlayNativeLayout = {
  mascot: Rect;
  placement: AvatarOverlayPlacement | string;
  tray: Rect | null;
};
type AvatarOverlayRenderMode =
  | {
      id?: string;
      type: "native-root" | "native-surface";
    }
  | {
      type: string;
      id?: string;
    }
  | null;
type AvatarOverlayNotification = {
  action?: {
    path: string;
  } | null;
  body?: string | null;
  controlTarget?: AvatarOverlayActivityItem["controlTarget"] | null;
  id: string;
  isLoading?: boolean;
  kind: string;
  level?: "danger" | "info" | "success" | "warning" | string;
  title: string;
  turnKey?: string | null;
  waitingRequest?: CompactWaitingRequest | null;
};
type AvatarOverlayNotificationFollowUp = {
  notificationId: string;
  submissionStatus?: "error" | "idle" | "submitting" | string;
  turnKey: string | null;
};
type AvatarOverlayNotificationAction = CompactWaitingRequestAction & {
  questionOption?: {
    description: string | null;
    label: string;
    questionId: string;
  };
};
type AvatarOverlayNotificationCopy = {
  actionAriaLabel: string;
  collapseNotificationAriaLabel: string;
  dismissNotificationAriaLabel: string;
  expandNotificationAriaLabel: string;
  expandNotificationStackAriaLabel: string;
  notificationListAriaLabel: string;
  patchSummary: {
    additions: string | null;
    deletions: string | null;
    fileCount: string;
  } | null;
  statusIconAriaLabel: string;
  subtitle: string;
};
type QuickChatDictationState = {
  canRetryDictation?: boolean;
  isDictating?: boolean;
  isTranscribing?: boolean;
  supportState?: boolean;
};
type AvatarOverlayNativeFrameProps = {
  activityCopies?: AvatarOverlayNotificationCopy[];
  areActivityPillsVisible?: boolean;
  avatar?:
    | ReactNode
    | {
        label?: string;
        name?: string;
        src?: string;
      }
    | null;
  expandedNotificationIds?: string[];
  globalDictationOrbEnabled?: boolean;
  interactiveRegionRef?: RefObject<HTMLElement | null>;
  isNotificationTrayOpen?: boolean;
  layout: AvatarOverlayNativeLayout;
  mascotLayout?: Rect;
  mascotResizeHandle?: ReactNode;
  mascotStyle?: CSSProperties;
  nativeMaterialAttached?: boolean;
  notificationFollowUp?: AvatarOverlayNotificationFollowUp | null;
  notificationStackContentExpanded?: boolean;
  notificationStackControlsVisible?: boolean;
  notificationStackItemCount?: number;
  notifications: AvatarOverlayNotification[];
  quickChatDictation?: QuickChatDictationState;
  quickChatDraft?: string;
  quickChatVisible?: boolean;
  renderMode?: AvatarOverlayRenderMode;
  restrictedSurface?: {
    isSessionActive?: boolean;
    phase?: string;
  } | null;
  onActivateNotification?: (notification: AvatarOverlayNotification) => void;
  onDismissNotification?: (notification: AvatarOverlayNotification) => void;
  onHideActivityPills?: () => void;
  onMascotLostPointerCapture?: (event: PointerEvent<HTMLElement>) => void;
  onMascotPointerCancel?: (event: PointerEvent<HTMLElement>) => void;
  onMascotPointerDown?: (event: PointerEvent<HTMLElement>) => void;
  onMascotPointerMove?: (event: PointerEvent<HTMLElement>) => void;
  onMascotPointerUp?: (event: PointerEvent<HTMLElement>) => void;
  onNotificationExpansionChange?: (
    notificationId: string,
    isExpanded: boolean,
  ) => void;
  onQuickChatDraftChange?: (draft: string) => void;
  onQuickChatEditorActiveChange?: (isActive: boolean) => void;
  onQuickChatVisibilityChange?: (isVisible: boolean) => void;
  onRunNotificationAction?: (
    notification: AvatarOverlayNotification,
    action: AvatarOverlayNotificationAction,
  ) => void;
  onRunNotificationControl?: (
    notification: AvatarOverlayNotification,
    control: {
      prompt?: string;
      type: string;
    },
  ) => void;
  onShowActivityPills?: () => void;
  onSubmitQuestionOption?: (
    notification: AvatarOverlayNotification,
    option: AvatarOverlayNotificationAction["questionOption"],
  ) => void;
  onSubmitQuickChat?: (prompt: string) => Promise<void> | void;
};
const nativeFrameMessages = defineMessages({
  askPlaceholder: {
    id: "avatarOverlay.askPlaceholder",
    defaultMessage: "Ask",
  },
  collapseNotification: {
    id: "avatarOverlay.collapseNotification",
    defaultMessage: "Collapse {title}",
  },
  compactPatchAdditions: {
    id: "avatarOverlay.compactPatchAdditions",
    defaultMessage: "+{count}",
  },
  compactPatchDeletions: {
    id: "avatarOverlay.compactPatchDeletions",
    defaultMessage: "-{count}",
  },
  compactPatchFileCount: {
    id: "avatarOverlay.compactPatchFileCount",
    defaultMessage: "{count, plural, one {# file} other {# files}}",
  },
  dismissNotification: {
    id: "avatarOverlay.dismissNotification",
    defaultMessage: "Dismiss {title}",
  },
  expandNotification: {
    id: "avatarOverlay.expandNotification",
    defaultMessage: "Expand {title}",
  },
  expandNotificationStack: {
    id: "avatarOverlay.expandNotificationStack",
    defaultMessage:
      "Expand activity stack, {count, plural, one {# item} other {# items}}",
  },
  mascotLabel: {
    id: "petOverlay.mascotLabel",
    defaultMessage: "{petName} pet",
  },
  notificationList: {
    id: "avatarOverlay.notificationList",
    defaultMessage: "Activity notifications",
  },
  openNotification: {
    id: "avatarOverlay.openNotification",
    defaultMessage: "Open notification",
  },
  questionStatusIcon: {
    id: "avatarOverlay.questionStatusIcon",
    defaultMessage: "Question",
  },
  quickChat: {
    id: "avatarOverlay.quickChat",
    defaultMessage: "Quick Chat",
  },
  quickChatError: {
    id: "avatarOverlay.quickChatError",
    defaultMessage: "Unable to start task",
  },
  resizeMascot: {
    id: "avatarOverlay.resizeMascot",
    defaultMessage: "Resize pet",
  },
  sendQuickChat: {
    id: "avatarOverlay.sendQuickChat",
    defaultMessage: "Send Quick Chat",
  },
  startNewTaskPlaceholder: {
    id: "avatarOverlay.startNewTaskPlaceholder",
    defaultMessage: "Start new task",
  },
});
function initAvatarOverlayNativeFrameCopyChunk(): void {}
function initAvatarOverlayNativeFrameChunk(): void {
  initAvatarOverlayNativeFrameCopyChunk();
}
function buildAvatarOverlayNativeNotificationCopy({
  intl,
  latestTurnItems,
  notification,
  notificationCount = 1,
}: {
  intl: IntlShapeLike;
  latestTurnItems?: unknown[] | null;
  notification: AvatarOverlayNotification;
  notificationCount?: number;
}): AvatarOverlayNotificationCopy {
  const statusConfig = getAvatarOverlayActivityStatusConfig(notification);
  const statusLabel = intl.formatMessage(statusConfig.labelMessage);
  const activitySubtitle =
    latestTurnItems == null
      ? null
      : getLatestAvatarOverlayActivitySubtitle(latestTurnItems, intl);
  const fallbackSubtitle =
    activitySubtitle ??
    notification.body ??
    intl.formatMessage(statusConfig.fallbackBodyMessage);
  const waitingRequest = notification.waitingRequest ?? null;
  const resolvedSubtitle =
    waitingRequest == null
      ? fallbackSubtitle
      : formatWaitingRequestAccessibleLabel(waitingRequest, intl);
  const subtitleWithoutTerminalPunctuation = resolvedSubtitle.replace(
    /[.?!]+$/,
    "",
  );
  const patchRequest = waitingRequest?.kind === "patch" ? waitingRequest : null;
  return {
    actionAriaLabel: `${notification.title}. ${resolvedSubtitle === statusLabel ? statusLabel : `${statusLabel}. ${subtitleWithoutTerminalPunctuation}`}. ${intl.formatMessage(nativeFrameMessages.openNotification)}`,
    collapseNotificationAriaLabel: intl.formatMessage(
      nativeFrameMessages.collapseNotification,
      {
        title: notification.title,
      },
    ),
    dismissNotificationAriaLabel: intl.formatMessage(
      nativeFrameMessages.dismissNotification,
      {
        title: notification.title,
      },
    ),
    expandNotificationAriaLabel: intl.formatMessage(
      nativeFrameMessages.expandNotification,
      {
        title: notification.title,
      },
    ),
    expandNotificationStackAriaLabel: intl.formatMessage(
      nativeFrameMessages.expandNotificationStack,
      {
        count: notificationCount,
      },
    ),
    notificationListAriaLabel: intl.formatMessage(
      nativeFrameMessages.notificationList,
    ),
    patchSummary:
      patchRequest == null
        ? null
        : {
            additions:
              patchRequest.additions > 0
                ? intl.formatMessage(
                    nativeFrameMessages.compactPatchAdditions,
                    {
                      count: patchRequest.additions,
                    },
                  )
                : null,
            deletions:
              patchRequest.deletions > 0
                ? intl.formatMessage(
                    nativeFrameMessages.compactPatchDeletions,
                    {
                      count: patchRequest.deletions,
                    },
                  )
                : null,
            fileCount: intl.formatMessage(
              nativeFrameMessages.compactPatchFileCount,
              {
                count: patchRequest.fileCount,
              },
            ),
          },
    statusIconAriaLabel:
      waitingRequest?.kind === "question"
        ? intl.formatMessage(nativeFrameMessages.questionStatusIcon)
        : statusLabel,
    subtitle: fallbackSubtitle,
  };
}
function AvatarOverlayNativeFrame({
  activityCopies,
  areActivityPillsVisible = true,
  avatar,
  expandedNotificationIds = [],
  globalDictationOrbEnabled = false,
  interactiveRegionRef,
  isNotificationTrayOpen = true,
  layout,
  mascotLayout = layout.mascot,
  mascotResizeHandle,
  mascotStyle,
  nativeMaterialAttached = false,
  notificationFollowUp,
  notificationStackContentExpanded,
  notificationStackControlsVisible = true,
  notificationStackItemCount,
  notifications,
  quickChatDictation,
  quickChatDraft,
  quickChatVisible,
  renderMode,
  restrictedSurface,
  onActivateNotification,
  onDismissNotification,
  onHideActivityPills,
  onMascotLostPointerCapture,
  onMascotPointerCancel,
  onMascotPointerDown,
  onMascotPointerMove,
  onMascotPointerUp,
  onNotificationExpansionChange,
  onQuickChatDraftChange,
  onQuickChatEditorActiveChange,
  onQuickChatVisibilityChange,
  onRunNotificationAction,
  onRunNotificationControl,
  onShowActivityPills,
  onSubmitQuestionOption,
  onSubmitQuickChat,
}: AvatarOverlayNativeFrameProps): ReactElement {
  const intl = useFallbackIntl();
  const [internalQuickChatVisible, setInternalQuickChatVisible] =
    useState(false);
  const [internalQuickChatDraft, setInternalQuickChatDraft] = useState("");
  const [quickChatError, setQuickChatError] = useState<string | null>(null);
  const hideQuickChatTimerRef = useRef<number | null>(null);
  const hasNotifications = notifications.length > 0;
  const isNativeRoot =
    renderMode?.type === "native-root" && nativeMaterialAttached;
  const isQuickChatVisible =
    quickChatVisible ?? (internalQuickChatVisible || globalDictationOrbEnabled);
  const quickChatValue = quickChatDraft ?? internalQuickChatDraft;
  const visibleNotifications = areActivityPillsVisible ? notifications : [];
  const isStackExpanded =
    notificationStackContentExpanded ??
    (isNotificationTrayOpen && visibleNotifications.length > 1);
  const trayStyle = createAbsoluteRectStyle(layout.tray);
  const mascotFrameStyle = createAbsoluteRectStyle(mascotLayout);
  const mascotVisibilityMode = resolveMascotVisibilityMode(restrictedSurface);
  const notificationCopies = useMemo(
    () =>
      visibleNotifications.map((notification, index) => {
        return (
          activityCopies?.[index] ??
          buildAvatarOverlayNativeNotificationCopy({
            intl,
            notification,
            notificationCount:
              notificationStackItemCount ?? notifications.length,
          })
        );
      }),
    [
      activityCopies,
      intl,
      notificationStackItemCount,
      notifications.length,
      visibleNotifications,
    ],
  );
  const showQuickChat = useCallback(() => {
    if (hideQuickChatTimerRef.current != null) {
      window.clearTimeout(hideQuickChatTimerRef.current);
      hideQuickChatTimerRef.current = null;
    }
    if (quickChatVisible == null) setInternalQuickChatVisible(true);
    onQuickChatVisibilityChange?.(true);
  }, [onQuickChatVisibilityChange, quickChatVisible]);
  const scheduleQuickChatHide = useCallback(() => {
    if (quickChatVisible != null) return;
    hideQuickChatTimerRef.current = window.setTimeout(() => {
      setInternalQuickChatVisible(false);
      onQuickChatVisibilityChange?.(false);
    }, 300);
  }, [onQuickChatVisibilityChange, quickChatVisible]);
  const updateQuickChatDraft = useCallback(
    (nextDraft: string) => {
      if (quickChatDraft == null) setInternalQuickChatDraft(nextDraft);
      onQuickChatDraftChange?.(nextDraft);
      setQuickChatError(null);
    },
    [onQuickChatDraftChange, quickChatDraft],
  );
  const submitQuickChat = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const prompt = quickChatValue.trim();
      if (prompt.length === 0 || onSubmitQuickChat == null) return;
      try {
        await onSubmitQuickChat(prompt);
        updateQuickChatDraft("");
      } catch {
        setQuickChatError(
          intl.formatMessage(nativeFrameMessages.quickChatError),
        );
      }
    },
    [intl, onSubmitQuickChat, quickChatValue, updateQuickChatDraft],
  );
  const trayContent =
    visibleNotifications.length === 0 && !isQuickChatVisible ? null : (
      <div
        aria-hidden={isNativeRoot || undefined}
        className="absolute text-sm text-token-foreground"
        data-avatar-overlay-hit-region="notification-tray"
        data-avatar-overlay-size="notification-tray"
        inert={isNativeRoot || undefined}
        onPointerEnter={showQuickChat}
        onPointerLeave={scheduleQuickChatHide}
        style={trayStyle}
      >
        <div className="flex flex-col items-center gap-2">
          {notificationStackControlsVisible &&
          visibleNotifications.length > 1 ? (
            <button
              aria-expanded={isStackExpanded}
              aria-label={
                isStackExpanded
                  ? intl.formatMessage(
                      nativeFrameMessages.collapseNotification,
                      {
                        title: visibleNotifications[0]?.title ?? "",
                      },
                    )
                  : intl.formatMessage(
                      nativeFrameMessages.expandNotificationStack,
                      {
                        count: visibleNotifications.length,
                      },
                    )
              }
              className="no-drag h-7 rounded-full bg-token-main-surface-secondary px-3 text-xs text-token-text-secondary shadow-sm"
              type="button"
              onClick={
                isStackExpanded ? onHideActivityPills : onShowActivityPills
              }
            >
              {isStackExpanded ? "Collapse" : visibleNotifications.length}
            </button>
          ) : null}
          <div
            aria-label={
              notificationCopies[0]?.notificationListAriaLabel ??
              intl.formatMessage(nativeFrameMessages.notificationList)
            }
            className="flex w-[345px] max-w-full flex-col gap-2"
            role="list"
          >
            {visibleNotifications
              .slice(0, isStackExpanded ? visibleNotifications.length : 3)
              .map((notification, index) => (
                <AvatarOverlayNotificationRow
                  key={notification.id}
                  copy={notificationCopies[index]}
                  expanded={expandedNotificationIds.includes(notification.id)}
                  nativeMaterialAttached={nativeMaterialAttached}
                  notification={notification}
                  notificationFollowUp={notificationFollowUp}
                  onActivateNotification={onActivateNotification}
                  onDismissNotification={onDismissNotification}
                  onExpansionChange={onNotificationExpansionChange}
                  onRunNotificationAction={onRunNotificationAction}
                  onRunNotificationControl={onRunNotificationControl}
                  onSubmitQuestionOption={onSubmitQuestionOption}
                />
              ))}
          </div>
          {isQuickChatVisible ? (
            <form
              className="no-drag flex h-10 w-[344px] items-center gap-3 rounded-full bg-token-main-surface-primary px-3 shadow-lg"
              onFocus={() => onQuickChatEditorActiveChange?.(true)}
              onBlur={() => onQuickChatEditorActiveChange?.(false)}
              onSubmit={submitQuickChat}
            >
              <input
                aria-label={intl.formatMessage(nativeFrameMessages.quickChat)}
                className="min-w-0 flex-1 bg-transparent text-[14px] leading-[18px] font-medium outline-none"
                data-avatar-overlay-composition-autofocus="true"
                placeholder={intl.formatMessage(
                  hasNotifications
                    ? nativeFrameMessages.startNewTaskPlaceholder
                    : nativeFrameMessages.askPlaceholder,
                )}
                value={quickChatValue}
                onChange={(event) =>
                  updateQuickChatDraft(event.currentTarget.value)
                }
              />
              <button
                aria-label={intl.formatMessage(
                  nativeFrameMessages.sendQuickChat,
                )}
                className="inline-flex size-7 items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary disabled:opacity-50"
                disabled={quickChatValue.trim().length === 0}
                type="submit"
              >
                <span aria-hidden="true">↑</span>
              </button>
              {quickChatDictation?.supportState === true ? (
                <span
                  aria-label="Dictation available"
                  className="size-2 rounded-full bg-token-charts-green"
                  role="img"
                />
              ) : null}
              {quickChatError == null ? null : (
                <span className="sr-only" role="alert">
                  {quickChatError}
                </span>
              )}
            </form>
          ) : null}
        </div>
      </div>
    );
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-transparent">
      <section
        ref={interactiveRegionRef}
        className="relative h-full w-full"
        data-avatar-overlay-content-frame="true"
      >
        {trayContent}
        {avatar == null ? null : (
          <div
            className="group absolute cursor-grab active:cursor-grabbing"
            data-avatar-overlay-hit-region={
              mascotVisibilityMode === "hidden" ? undefined : "mascot"
            }
            style={{
              ...mascotFrameStyle,
              ...mascotStyle,
              pointerEvents:
                mascotVisibilityMode === "hidden"
                  ? "none"
                  : mascotStyle?.pointerEvents,
            }}
            onLostPointerCapture={onMascotLostPointerCapture}
            onPointerCancel={onMascotPointerCancel}
            onPointerDown={onMascotPointerDown}
            onPointerEnter={showQuickChat}
            onPointerLeave={scheduleQuickChatHide}
            onPointerMove={onMascotPointerMove}
            onPointerUp={onMascotPointerUp}
          >
            {renderAvatarMascot(avatar, intl)}
            {mascotResizeHandle == null ? null : (
              <div
                aria-label={intl.formatMessage(
                  nativeFrameMessages.resizeMascot,
                )}
                className="absolute right-0 bottom-0"
              >
                {mascotResizeHandle}
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
function AvatarOverlayNotificationRow({
  copy,
  expanded,
  nativeMaterialAttached,
  notification,
  notificationFollowUp,
  onActivateNotification,
  onDismissNotification,
  onExpansionChange,
  onRunNotificationAction,
  onRunNotificationControl,
  onSubmitQuestionOption,
}: {
  copy: AvatarOverlayNotificationCopy | undefined;
  expanded: boolean;
  nativeMaterialAttached: boolean;
  notification: AvatarOverlayNotification;
  notificationFollowUp?: AvatarOverlayNotificationFollowUp | null;
  onActivateNotification?: (notification: AvatarOverlayNotification) => void;
  onDismissNotification?: (notification: AvatarOverlayNotification) => void;
  onExpansionChange?: (notificationId: string, isExpanded: boolean) => void;
  onRunNotificationAction?: (
    notification: AvatarOverlayNotification,
    action: AvatarOverlayNotificationAction,
  ) => void;
  onRunNotificationControl?: (
    notification: AvatarOverlayNotification,
    control: {
      prompt?: string;
      type: string;
    },
  ) => void;
  onSubmitQuestionOption?: (
    notification: AvatarOverlayNotification,
    option: AvatarOverlayNotificationAction["questionOption"],
  ) => void;
}): ReactElement {
  const [isLocallyExpanded, setIsLocallyExpanded] = useState(false);
  const [replyDraft, setReplyDraft] = useState("");
  const isExpanded = expanded || isLocallyExpanded;
  const waitingRequest = notification.waitingRequest ?? null;
  const rowCopy = copy ?? createFallbackNotificationCopy(notification);
  const canActivate =
    onActivateNotification != null || notification.action != null;
  const isFollowUpOpen =
    notificationFollowUp?.notificationId === notification.id &&
    notificationFollowUp.turnKey === (notification.turnKey ?? null);
  const toggleExpanded = (event: PointerEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    const nextExpanded = !isExpanded;
    setIsLocallyExpanded(nextExpanded);
    onExpansionChange?.(notification.id, nextExpanded);
  };
  const handleRowKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (!canActivate || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    onActivateNotification?.(notification);
  };
  const submitReply = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const prompt = replyDraft.trim();
    if (prompt.length === 0) return;
    onRunNotificationControl?.(notification, {
      type: "submit-follow-up",
      prompt,
    });
    setReplyDraft("");
  };
  return (
    <article
      className={[
        "group no-drag relative rounded-[27px] px-[22px] py-[10px] text-left shadow-lg",
        nativeMaterialAttached
          ? "bg-white/65 text-[#1A1A1A] backdrop-blur-xl"
          : "bg-token-main-surface-primary text-token-foreground",
      ].join(" ")}
      data-avatar-overlay-measure="notification-tray-row"
      role="listitem"
    >
      <div
        aria-label={canActivate ? rowCopy.actionAriaLabel : undefined}
        className={canActivate ? "cursor-interaction" : undefined}
        role={canActivate ? "button" : undefined}
        tabIndex={canActivate ? 0 : undefined}
        onClick={() => onActivateNotification?.(notification)}
        onKeyDown={handleRowKeyDown}
      >
        <div className="truncate text-[13px] leading-[17px] font-medium">
          {notification.title}
        </div>
        <div className="mt-0.5 text-[13px] leading-[17px] text-token-text-secondary">
          {waitingRequest == null ? (
            rowCopy.subtitle
          ) : (
            <CompactWaitingRequestPreview
              copy={rowCopy}
              expanded={isExpanded}
              request={waitingRequest}
              onRunAction={(action) =>
                onRunNotificationAction?.(notification, action)
              }
              onSubmitQuestionOption={(option) =>
                onSubmitQuestionOption?.(notification, option)
              }
            />
          )}
        </div>
      </div>
      {waitingRequest == null ? null : (
        <button
          aria-expanded={isExpanded}
          aria-label={
            isExpanded
              ? rowCopy.collapseNotificationAriaLabel
              : rowCopy.expandNotificationAriaLabel
          }
          className="absolute top-[10px] right-[10px] z-20 inline-flex size-8 items-center justify-center rounded-full text-token-text-secondary hover:bg-token-bg-secondary"
          type="button"
          onPointerDown={toggleExpanded}
        >
          <span aria-hidden="true">{isExpanded ? "⌃" : "⌄"}</span>
        </button>
      )}
      {isFollowUpOpen ? (
        <form
          className="mt-2 flex h-10 items-center gap-2 rounded-full bg-token-bg-primary px-3"
          onSubmit={submitReply}
        >
          <input
            aria-label="Reply"
            className="min-w-0 flex-1 bg-transparent text-[13px] outline-none"
            value={replyDraft}
            onChange={(event) => setReplyDraft(event.currentTarget.value)}
          />
          <button
            className="inline-flex size-7 items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary disabled:opacity-50"
            disabled={replyDraft.trim().length === 0}
            type="submit"
          >
            <span aria-hidden="true">↑</span>
          </button>
        </form>
      ) : null}
      {onDismissNotification == null ? null : (
        <div className="absolute -top-1 -left-1 z-20 opacity-0 transition-opacity group-hover:opacity-100">
          <AvatarOverlayPillDismissButton
            ariaLabel={rowCopy.dismissNotificationAriaLabel}
            onClick={() => onDismissNotification(notification)}
          />
        </div>
      )}
    </article>
  );
}
function CompactWaitingRequestPreview({
  copy,
  expanded,
  request,
  onRunAction,
  onSubmitQuestionOption,
}: {
  copy: AvatarOverlayNotificationCopy;
  expanded: boolean;
  request: CompactWaitingRequest;
  onRunAction(action: AvatarOverlayNotificationAction): void;
  onSubmitQuestionOption(
    option: AvatarOverlayNotificationAction["questionOption"],
  ): void;
}): ReactElement {
  if (request.kind === "question") {
    return (
      <div data-avatar-overlay-compact-waiting-request="question">
        <div className={expanded ? "whitespace-pre-wrap" : "truncate"}>
          {request.prompt}
        </div>
        <WaitingRequestActions
          actions={request.options.map((option, index) => ({
            intent: "open",
            label: option.label,
            tone: index === 0 ? "primary" : "secondary",
            questionOption: option,
          }))}
          onRunAction={(action) =>
            action.questionOption == null
              ? onRunAction(action)
              : onSubmitQuestionOption(action.questionOption)
          }
        />
      </div>
    );
  }
  if (request.kind === "patch" && copy.patchSummary != null) {
    return (
      <div data-avatar-overlay-compact-waiting-request="patch">
        <div className={expanded ? "space-y-0.5" : "truncate"}>
          <span>{copy.patchSummary.fileCount}</span>
          {copy.patchSummary.additions == null ? null : (
            <span className="ml-1.5 text-token-charts-green">
              {copy.patchSummary.additions}
            </span>
          )}
          {copy.patchSummary.deletions == null ? null : (
            <span className="ml-1.5 text-token-error-foreground">
              {copy.patchSummary.deletions}
            </span>
          )}
          {expanded ? (
            <div className="mt-0.5 space-y-0.5">
              {request.files.map((fileName) => (
                <div key={fileName} className="break-words leading-4">
                  {fileName}
                </div>
              ))}
            </div>
          ) : (
            <span className="ml-1.5">{request.summary}</span>
          )}
        </div>
        <WaitingRequestActions
          actions={request.actions}
          onRunAction={onRunAction}
        />
      </div>
    );
  }
  return (
    <div data-avatar-overlay-compact-waiting-request={request.kind}>
      <div className={expanded ? "whitespace-pre-wrap" : "truncate"}>
        {getWaitingRequestSummary(request)}
      </div>
      {"actions" in request ? (
        <WaitingRequestActions
          actions={request.actions}
          onRunAction={onRunAction}
        />
      ) : null}
    </div>
  );
}
function WaitingRequestActions({
  actions,
  onRunAction,
}: {
  actions: AvatarOverlayNotificationAction[];
  onRunAction(action: AvatarOverlayNotificationAction): void;
}): ReactElement {
  const sortedActions = [
    ...actions.filter((action) => action.tone !== "primary"),
    ...actions.filter((action) => action.tone === "primary"),
  ];
  return (
    <div className="mt-1.5 flex min-w-0 flex-wrap items-center justify-end gap-2 pb-[3px]">
      {sortedActions.map((action) => (
        <button
          key={action.ariaLabel ?? action.label}
          aria-label={action.ariaLabel ?? action.label}
          className={[
            "max-w-full min-w-0 rounded-full px-3 py-1 text-[13px] font-medium",
            action.tone === "primary"
              ? "bg-token-charts-blue text-white"
              : "bg-token-bg-secondary text-token-text-secondary",
            action.tone === "danger" ? "text-token-error-foreground" : "",
          ].join(" ")}
          title={action.ariaLabel ?? action.label}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onRunAction(action);
          }}
        >
          <span className="truncate">{action.label}</span>
        </button>
      ))}
    </div>
  );
}
function createFallbackNotificationCopy(
  notification: AvatarOverlayNotification,
): AvatarOverlayNotificationCopy {
  const subtitle = notification.body ?? notification.title;
  return {
    actionAriaLabel: `${notification.title}. ${subtitle}`,
    collapseNotificationAriaLabel: `Collapse ${notification.title}`,
    dismissNotificationAriaLabel: `Dismiss ${notification.title}`,
    expandNotificationAriaLabel: `Expand ${notification.title}`,
    expandNotificationStackAriaLabel: "Expand activity stack",
    notificationListAriaLabel: "Activity notifications",
    patchSummary: null,
    statusIconAriaLabel: notification.title,
    subtitle,
  };
}
function createAbsoluteRectStyle(rect: Rect | null | undefined): CSSProperties {
  if (rect == null) return {};
  return {
    height: rect.height,
    left: rect.left,
    top: rect.top,
    width: rect.width,
  };
}
function getWaitingRequestSummary(request: CompactWaitingRequest): string {
  if ("summary" in request && request.summary != null) return request.summary;
  if ("target" in request) return request.target;
  if ("operation" in request) return request.operation;
  return getWaitingRequestSearchText(request);
}
function renderAvatarMascot(
  avatar: AvatarOverlayNativeFrameProps["avatar"],
  intl: IntlShapeLike,
): ReactNode {
  if (avatar == null) return null;
  if (typeof avatar === "string" || typeof avatar === "number") return avatar;
  if (isReactElement(avatar)) return avatar;
  if (typeof avatar === "object" && "src" in avatar && avatar.src != null) {
    const label = avatar.label ?? avatar.name ?? "Codex";
    return (
      <img
        alt={intl.formatMessage(nativeFrameMessages.mascotLabel, {
          petName: label,
        })}
        className="h-full w-full select-none object-contain"
        draggable={false}
        src={avatar.src}
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-token-bg-secondary text-token-text-secondary">
      {typeof avatar === "object" && "name" in avatar ? avatar.name : "Codex"}
    </div>
  );
}
function isReactElement(value: unknown): value is ReactElement {
  return (
    typeof value === "object" &&
    value !== null &&
    "$$typeof" in value &&
    "props" in value
  );
}
function resolveMascotVisibilityMode(
  restrictedSurface: AvatarOverlayNativeFrameProps["restrictedSurface"],
): "hidden" | "pet" {
  return restrictedSurface?.isSessionActive === false &&
    restrictedSurface.phase !== "inactive"
    ? "hidden"
    : "pet";
}
function useFallbackIntl(): IntlShapeLike {
  return useMemo(
    () => ({
      formatMessage(message: unknown, values?: Record<string, unknown>) {
        const descriptor =
          typeof message === "object" && message !== null ? message : null;
        const defaultMessage =
          descriptor != null && "defaultMessage" in descriptor
            ? String(descriptor.defaultMessage)
            : String(message ?? "");
        return interpolateMessage(defaultMessage, values);
      },
    }),
    [],
  );
}
function interpolateMessage(
  message: string,
  values: Record<string, unknown> | undefined,
): string {
  if (values == null) return message;
  return message.replace(/\{([^},]+)(?:,[^}]*)?\}/g, (_match, key: string) =>
    String(values[key.trim()] ?? ""),
  );
}
export default {
  AvatarOverlayNativeFrame,
  buildAvatarOverlayNativeNotificationCopy,
  initAvatarOverlayNativeFrameChunk,
  initAvatarOverlayNativeFrameCopyChunk,
};
