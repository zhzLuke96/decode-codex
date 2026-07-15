// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Desktop notifications service: requests OS notification permission and shows
// turn-complete, approval, and question notifications for local and remote hosts,
// plus remote-task "finished a turn" notifications driven by the current task list.
import { useEffect, useEffectEvent, useLayoutEffect, useRef } from "react";
import {
  allHostServicesAtom,
  appStore,
  findOpenConversationView,
  getConversationNavigationPath,
  getConversationTitle,
  getRemoteTaskNavigationPath,
  isConversationMuted,
  isWindowFocusedAtom,
  LOCAL_HOST_ID,
  logger,
  notificationSettings,
  pendingApprovalsAtom,
  resolveServiceTier,
  sendHostRequest,
  useAtomValue,
  useHost,
  useRemoteTasksQuery,
  useSetting,
  useStore,
} from "../boundaries/onboarding-commons-externals.facade";
import { appServices } from "../boundaries/rpc.facade";
import {
  useLocation,
  useNavigate,
} from "../conversations/local-conversation-route-runtime";

type TurnMode = "off" | "always" | "unfocused";

interface AppStoreScope {
  get: <T = unknown>(atom: unknown, ...args: unknown[]) => T;
}

interface ConversationSummary {
  sideConversationParentNavigationPath?: string | null;
  [key: string]: unknown;
}

interface ConversationHostService {
  getHostId: () => string;
  getConversation: (
    conversationId: string,
  ) => ConversationSummary | null | undefined;
  addTurnCompletedListener: (
    listener: (event: TurnCompletedEvent) => void,
  ) => (() => void) | undefined;
  addApprovalRequestListener: (
    listener: (event: ApprovalRequestEvent) => void,
  ) => (() => void) | undefined;
  addUserInputRequestListener: (
    listener: (event: UserInputRequestEvent) => void,
  ) => (() => void) | undefined;
}

interface DesktopNotificationServiceOptions {
  scope: AppStoreScope;
  navigate: (path: string, options?: { state?: unknown }) => void;
  includeTurnNotifications?: boolean;
  getActiveConversationId: () => string | null;
  getIsConversationVisible?: (conversationId: string) => boolean;
  getIsWindowFocused: () => boolean;
  getTurnMode?: () => TurnMode;
  getPermissionsEnabled?: () => boolean;
  getQuestionsEnabled?: () => boolean;
}

interface TurnCompletedEvent {
  conversationId: string;
  turnId?: string | null;
  hasPendingContinuation?: boolean;
  heartbeatAssistantMessage?: {
    decision?: "NOTIFY" | "DONT_NOTIFY";
    notificationMessage?: string | null;
    visibleText?: string | null;
  } | null;
  lastAgentMessage?: string | null;
}

interface ApprovalRequestEvent {
  conversationId: string;
  requestId: string;
  kind: string;
  reason?: string | null;
}

interface UserInputRequestEvent {
  conversationId: string;
  requestId: string;
  questionCount: number;
}

interface NotificationAction {
  id: string;
  title: string;
  actionType: string;
}

interface DesktopNotificationPayload {
  id: string;
  kind: "turn-complete" | "permission" | "question";
  title: string;
  body: string;
  conversationId: string;
  navigationPath: string;
  hostId?: string;
  requestId?: string;
  replyPlaceholder?: string;
  actions?: readonly NotificationAction[];
}

interface NotificationActionEvent {
  type: string;
  reply?: string;
}

interface ApprovalRequestRecord {
  id: string;
  method: string;
}

interface RemoteTask {
  id: string;
  title?: string | null;
  has_unread_turn: boolean;
  task_status_display?: {
    latest_turn_status_display?: { turn_id?: string | null } | null;
  } | null;
}

type DisposableNotificationHandle =
  | { [Symbol.dispose]?: () => void; dispose?: () => void }
  | null
  | undefined;

const APPROVAL_NOTIFICATION_ACTIONS: readonly NotificationAction[] = [
  { id: "approve", title: "Approve", actionType: "approve" },
  {
    id: "approve-session",
    title: "Approve for session",
    actionType: "approve-for-session",
  },
  { id: "decline", title: "Decline", actionType: "decline" },
];

let permissionCheckedNotification: typeof Notification | null = null;

function disposeNotificationHandle(handle: DisposableNotificationHandle): void {
  (handle?.[Symbol.dispose] ?? handle?.dispose)?.call(handle);
}

function useLatestRef<T>(value: T): { current: T } {
  const ref = useRef(value);
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref;
}

function getTaskId(task: RemoteTask): string {
  return task.id;
}

function isRemoteHostService(host: ConversationHostService): boolean {
  return host.getHostId() !== LOCAL_HOST_ID;
}

function normalizeNotificationText(text: unknown): string {
  if (typeof text === "string") {
    const normalized = text.replace(/\s+/g, " ").trim();
    if (normalized.length > 0) return normalized;
  }
  return "Codex finished a turn.";
}

function getTurnCompletionBody(event: TurnCompletedEvent): string | null {
  const heartbeat = event.heartbeatAssistantMessage;
  if (heartbeat?.decision === "DONT_NOTIFY") return null;
  if (heartbeat?.decision === "NOTIFY")
    return normalizeNotificationText(
      heartbeat.notificationMessage ?? heartbeat.visibleText,
    );
  return normalizeNotificationText(event.lastAgentMessage);
}

function getQuestionNotificationBody(event: UserInputRequestEvent): string {
  if (event.questionCount > 1)
    return `Answer ${event.questionCount} questions to proceed.`;
  if (event.questionCount === 1) return "Answer 1 question to proceed.";
  return "Answer a question to proceed.";
}

function ensureNotificationPermission(): void {
  try {
    if (typeof Notification === "undefined") {
      logger.warning("[desktop-notifications] Notification API missing");
      return;
    }
    if (permissionCheckedNotification === Notification) return;
    const permission = Notification.permission;
    if (permission === "default" && Notification.requestPermission) {
      logger.info("[desktop-notifications] requesting notification permission");
      Notification.requestPermission().then((result) => {
        logger.info("[desktop-notifications] permission result", {
          safe: { result: result ?? "unknown" },
          sensitive: {},
        });
      });
    } else {
      logger.debug("[desktop-notifications] permission state", {
        safe: { permission },
        sensitive: {},
      });
    }
    permissionCheckedNotification = Notification;
  } catch (error) {
    logger.error("[desktop-notifications] permission request failed", {
      safe: {},
      sensitive: { error },
    });
  }
}

function startDesktopNotificationService(
  host: ConversationHostService,
  options: DesktopNotificationServiceOptions,
): () => void {
  logger.info("[desktop-notifications] service starting");
  ensureNotificationPermission();
  const { scope, navigate } = options;

  const removeTurnCompletedListener =
    options.includeTurnNotifications === false
      ? null
      : host.addTurnCompletedListener((event) => {
          const body = getTurnCompletionBody(event);
          if (body == null) {
            logger.debug(
              "[desktop-notifications] suppressed heartbeat turn-complete",
              {
                safe: { conversationId: event.conversationId },
                sensitive: {},
              },
            );
            return;
          }
          if (shouldSuppressTurnNotification(event)) {
            logger.debug("[desktop-notifications] suppressed turn-complete", {
              safe: { conversationId: event.conversationId },
              sensitive: {},
            });
            return;
          }
          const title = getConversationTitle(
            host.getConversation(event.conversationId),
          );
          const { navigationPath, navigateToNotification } =
            resolveNotificationNavigation(event.conversationId);
          const payload: DesktopNotificationPayload = {
            id: `turn-${event.turnId ?? crypto.randomUUID()}`,
            kind: "turn-complete",
            title: title ?? "Turn complete",
            body,
            hostId: host.getHostId(),
            conversationId: event.conversationId,
            navigationPath,
            replyPlaceholder: "Reply to Codex",
          };
          logger.info("[desktop-notifications] show turn-complete", {
            safe: {
              conversationId: event.conversationId,
              turnId: event.turnId ?? "unknown",
            },
            sensitive: {},
          });
          disposeNotificationHandle(
            appServices.notifications?.show(
              payload,
              (action: NotificationActionEvent) => {
                navigateToNotification();
                const hostId = host.getHostId();
                if (
                  action.type === "reply" &&
                  action.reply &&
                  typeof action.reply === "string" &&
                  action.reply.trim().length > 0
                ) {
                  const reply = action.reply.trim();
                  resolveServiceTier(scope, hostId, null)
                    .then((serviceTier: unknown) =>
                      sendHostRequest("start-turn-for-host", {
                        hostId,
                        conversationId: event.conversationId,
                        threadStartKind: undefined,
                        params: {
                          input: [
                            { type: "text", text: reply, text_elements: [] },
                          ],
                          serviceTier,
                        },
                      }),
                    )
                    .catch((error: unknown) => {
                      logger.error("[desktop-notifications] reply failed", {
                        safe: {},
                        sensitive: { error },
                      });
                    });
                }
              },
            ),
          );
        });

  const removeApprovalRequestListener = host.addApprovalRequestListener(
    (event) => {
      if (!arePermissionNotificationsEnabled()) {
        logger.debug(
          "[desktop-notifications] suppressed approval notifications disabled",
        );
        return;
      }
      if (shouldSuppressConversationNotification(event.conversationId)) {
        logger.debug("[desktop-notifications] suppressed approval", {
          safe: {
            conversationId: event.conversationId,
            requestId: event.requestId,
          },
          sensitive: {},
        });
        return;
      }
      const { navigationPath, navigateToNotification } =
        resolveNotificationNavigation(event.conversationId);
      const payload: DesktopNotificationPayload = {
        id: `approval-${host.getHostId()}-${event.requestId}`,
        kind: "permission",
        title:
          event.kind === "commandExecution"
            ? "Command approval"
            : "File edit approval",
        body: event.reason ?? "Approval required",
        hostId: host.getHostId(),
        conversationId: event.conversationId,
        navigationPath,
        requestId: event.requestId,
        actions: APPROVAL_NOTIFICATION_ACTIONS,
      };
      logger.info("[desktop-notifications] show approval", {
        safe: {
          conversationId: event.conversationId,
          requestId: event.requestId,
          kind: event.kind,
        },
        sensitive: {},
      });
      disposeNotificationHandle(
        appServices.notifications?.show(
          payload,
          (action: NotificationActionEvent) => {
            navigateToNotification();
            const decision =
              action.type === "approve"
                ? "accept"
                : action.type === "approve-for-session"
                  ? "acceptForSession"
                  : action.type === "decline"
                    ? "decline"
                    : null;
            if (decision) {
              const request = scope
                .get<
                  ApprovalRequestRecord[] | undefined
                >(pendingApprovalsAtom, event.conversationId)
                ?.find((item) => item.id === event.requestId);
              if (!request) {
                logger.error("Request not found", {
                  safe: { requestId: event.requestId },
                  sensitive: {},
                });
                return;
              }
              if (request.method === "item/commandExecution/requestApproval") {
                sendHostRequest(
                  "reply-with-command-execution-approval-decision",
                  {
                    conversationId: event.conversationId,
                    requestId: event.requestId,
                    decision,
                  },
                );
              } else if (request.method === "item/fileChange/requestApproval") {
                sendHostRequest("reply-with-file-change-approval-decision", {
                  conversationId: event.conversationId,
                  requestId: event.requestId,
                  decision,
                });
              } else {
                logger.error("Unknown approval request method", {
                  safe: { method: request.method },
                  sensitive: {},
                });
              }
            }
          },
        ),
      );
    },
  );

  const removeUserInputRequestListener = host.addUserInputRequestListener(
    (event) => {
      if (!areQuestionNotificationsEnabled()) {
        logger.debug(
          "[desktop-notifications] suppressed question notifications disabled",
        );
        return;
      }
      if (shouldSuppressConversationNotification(event.conversationId)) {
        logger.debug("[desktop-notifications] suppressed question", {
          safe: {
            conversationId: event.conversationId,
            requestId: event.requestId,
          },
          sensitive: {},
        });
        return;
      }
      const title =
        getConversationTitle(host.getConversation(event.conversationId)) ??
        "Need your input";
      const { navigationPath, navigateToNotification } =
        resolveNotificationNavigation(event.conversationId);
      const payload: DesktopNotificationPayload = {
        id: `question-${host.getHostId()}-${event.requestId}`,
        kind: "question",
        title,
        body: getQuestionNotificationBody(event),
        hostId: host.getHostId(),
        conversationId: event.conversationId,
        navigationPath,
        requestId: event.requestId,
      };
      logger.info("[desktop-notifications] show question", {
        safe: {
          conversationId: event.conversationId,
          requestId: event.requestId,
          questionCount: event.questionCount,
        },
        sensitive: {},
      });
      disposeNotificationHandle(
        appServices.notifications?.show(payload, navigateToNotification),
      );
    },
  );

  function shouldSuppressTurnNotification(event: TurnCompletedEvent): boolean {
    return isConversationMuted(host.getConversation(event.conversationId)) ||
      event.hasPendingContinuation
      ? true
      : shouldSuppressTurnNotificationByMode();
  }

  function shouldSuppressTurnNotificationByMode(): boolean {
    const turnMode: TurnMode = options.getTurnMode?.() ?? "unfocused";
    return turnMode === "off"
      ? true
      : turnMode === "always"
        ? false
        : options.getIsWindowFocused();
  }

  function shouldSuppressConversationNotification(
    conversationId: string,
  ): boolean {
    return isConversationMuted(host.getConversation(conversationId))
      ? true
      : options.getIsWindowFocused() && isConversationVisible(conversationId);
  }

  function isConversationVisible(conversationId: string): boolean {
    return (
      options.getIsConversationVisible?.(conversationId) ??
      options.getActiveConversationId() === conversationId
    );
  }

  function arePermissionNotificationsEnabled(): boolean {
    return options.getPermissionsEnabled?.() ?? true;
  }

  function areQuestionNotificationsEnabled(): boolean {
    return options.getQuestionsEnabled?.() ?? true;
  }

  function resolveNotificationNavigation(conversationId: string): {
    navigationPath: string;
    navigateToNotification: () => void;
  } {
    const sideParentNavigationPath =
      host.getConversation(conversationId)
        ?.sideConversationParentNavigationPath ?? null;
    const navigationPath =
      sideParentNavigationPath ?? getConversationNavigationPath(conversationId);
    const activateTabId =
      sideParentNavigationPath == null ? null : `sidechat:${conversationId}`;
    return {
      navigationPath,
      navigateToNotification: () => {
        navigate(navigationPath, {
          state: activateTabId ? { activateTabId } : null,
        });
      },
    };
  }

  return () => {
    removeTurnCompletedListener?.();
    removeApprovalRequestListener?.();
    removeUserInputRequestListener?.();
  };
}

export function DesktopNotificationsService(): null {
  const scope = useStore(appStore) as AppStoreScope;
  const navigate = useNavigate();
  const localHost = useHost(LOCAL_HOST_ID) as ConversationHostService;
  const allHostServices = useAtomValue(
    allHostServicesAtom,
  ) as ConversationHostService[];
  const location = useLocation();
  const turnMode = useSetting(notificationSettings.turnMode) as TurnMode;
  const permissionsEnabled = useSetting(
    notificationSettings.permissionsEnabled,
  ) as boolean;
  const questionsEnabled = useSetting(
    notificationSettings.questionsEnabled,
  ) as boolean;
  const tasksQuery = useRemoteTasksQuery({
    taskFilter: "current",
    limit: 20,
  }) as { data?: RemoteTask[] };

  const getActiveConversationId = (): string | null => {
    const localMatch = location.pathname.match(/^\/local\/([^/]+)/);
    if (localMatch) return decodeURIComponent(localMatch[1]);
    const remoteMatch = location.pathname.match(/^\/remote\/([^/]+)/);
    return remoteMatch ? decodeURIComponent(remoteMatch[1]) : null;
  };

  const hideActiveConversationNotification = (): void => {
    const activeConversationId = getActiveConversationId();
    if (activeConversationId)
      appServices.notifications?.hide({
        conversationId: activeConversationId,
        navigationPath: `${location.pathname}${location.search}`,
      });
  };

  const isWindowFocused = useAtomValue(isWindowFocusedAtom) as boolean;
  const isWindowFocusedRef = useLatestRef(isWindowFocused);
  const onHideActiveConversationNotification = useEffectEvent(
    hideActiveConversationNotification,
  );

  useEffect(() => {
    hideActiveConversationNotification();
  }, [hideActiveConversationNotification]);

  useEffect(() => {
    if (isWindowFocused) onHideActiveConversationNotification();
  }, [isWindowFocused]);

  useEffect(() => {
    const serviceOptions: DesktopNotificationServiceOptions = {
      getActiveConversationId: () => getActiveConversationId(),
      getIsConversationVisible: (conversationId) =>
        document.visibilityState === "visible" &&
        (getActiveConversationId() === conversationId ||
          findOpenConversationView(scope.get, conversationId) != null),
      getIsWindowFocused: () => isWindowFocusedRef.current !== false,
      getTurnMode: () => turnMode,
      getPermissionsEnabled: () => permissionsEnabled,
      getQuestionsEnabled: () => questionsEnabled,
      navigate,
      scope,
    };
    const teardowns = [
      startDesktopNotificationService(localHost, serviceOptions),
      ...allHostServices.filter(isRemoteHostService).map((hostService) =>
        startDesktopNotificationService(hostService, {
          ...serviceOptions,
          includeTurnNotifications: false,
        }),
      ),
    ];
    return () => {
      for (const teardown of teardowns) teardown();
    };
  }, [
    allHostServices,
    getActiveConversationId,
    localHost,
    permissionsEnabled,
    questionsEnabled,
    scope,
    turnMode,
    isWindowFocusedRef,
    navigate,
  ]);

  const lastUnreadByTaskIdRef = useRef<Map<string, boolean>>(new Map());
  const hasInitializedUnreadRef = useRef(false);

  useEffect(() => {
    const tasks = tasksQuery.data;
    if (!tasks) return;
    const lastUnreadByTaskId = lastUnreadByTaskIdRef.current;
    if (!hasInitializedUnreadRef.current) {
      lastUnreadByTaskId.clear();
      for (const task of tasks)
        lastUnreadByTaskId.set(task.id, task.has_unread_turn);
      hasInitializedUnreadRef.current = true;
      return;
    }
    const windowFocused = isWindowFocusedRef.current !== false;
    const currentTurnMode: TurnMode = turnMode ?? "unfocused";
    const suppressRemoteTurnNotifications =
      currentTurnMode === "off" ||
      (currentTurnMode === "unfocused" && windowFocused);
    for (const task of tasks) {
      const previousUnread = lastUnreadByTaskId.get(task.id) ?? false;
      const currentUnread = task.has_unread_turn;
      lastUnreadByTaskId.set(task.id, currentUnread);
      if (previousUnread || !currentUnread || suppressRemoteTurnNotifications)
        continue;
      const navigationPath = getRemoteTaskNavigationPath(task.id);
      appServices.notifications?.show(
        {
          id: `remote-turn-${task.id}-${task.task_status_display?.latest_turn_status_display?.turn_id ?? crypto.randomUUID()}`,
          kind: "turn-complete",
          title: task.title || "New chat",
          body: "Codex finished a turn.",
          conversationId: task.id,
          navigationPath,
        },
        () => {
          navigate(navigationPath);
        },
      );
    }
    const currentTaskIds = new Set(tasks.map(getTaskId));
    for (const taskId of lastUnreadByTaskId.keys())
      if (!currentTaskIds.has(taskId)) lastUnreadByTaskId.delete(taskId);
  }, [navigate, tasksQuery.data, turnMode, isWindowFocusedRef]);

  return null;
}
