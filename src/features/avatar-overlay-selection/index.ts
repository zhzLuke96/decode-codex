// Restored from ref/webview/assets/use-avatar-overlay-selection-CUecA6qh.js
// Shared avatar overlay pointer, notification, and avatar selection helpers.
import { useMemo } from "react";

import { _appScopeA as useScopedSignalValue } from "../../boundaries/app-scope";
import { once } from "../../runtime/commonjs-interop";
import {
  initUseAvatarOptionsChunk,
  useAvatarOptions,
} from "../../utils/use-avatar-options";
import {
  formatWaitingRequestAccessibleLabel,
  getWaitingRequestSearchText,
  initCompactWaitingRequestChunk,
  type AvatarOverlayActivityItem,
  type AvatarOverlayActivityStatus,
  type CompactWaitingRequest,
  type IntlShapeLike,
} from "../avatar-overlay-pill";
import {
  initAvatarSelectionStateChunk,
  initCustomAvatarsQueryChunk,
  isSelectedCustomAvatarMissing,
  selectedCustomAvatarRefreshQuery,
  useSelectedAvatar,
} from "../custom-avatars-query";

const MAX_RELEASE_VELOCITY_PX_PER_SECOND = 1600;
const RECENT_POINTER_SAMPLE_WINDOW_MS = 160;
const MIN_POINTER_SAMPLE_DURATION_MS = 8;
const MIN_RELEASE_VELOCITY_PX_PER_SECOND = 320;
const POINTER_MOVE_THRESHOLD_PX = 4;

const RUNNING_NOTIFICATION_TTL_MS = 180 * 1000;
const FAILED_NOTIFICATION_TTL_MS = 60 * 60 * 1000;
const WAITING_NOTIFICATION_TTL_MS = 24 * 60 * 60 * 1000;
const REVIEW_NOTIFICATION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const FIRST_AWAKE_NOTIFICATION_TTL_MS = 8 * 1000;

export type AvatarOverlayPointerSample = {
  screenX: number;
  screenY: number;
  timeMs: number;
};

export type AvatarOverlayPointerVelocity = {
  x: number;
  y: number;
};

export type AvatarOverlayPointerDragState = {
  hasMoved: boolean;
  samples: AvatarOverlayPointerSample[];
};

export type AvatarOverlayPointerReleaseState = {
  hasMoved: boolean;
  releaseSample: AvatarOverlayPointerSample | undefined;
  velocity: AvatarOverlayPointerVelocity | null;
};

export type AvatarOverlayNotificationLevel =
  | "danger"
  | "info"
  | "success"
  | "warning";

export type AvatarOverlayNotification = {
  action: { path: string } | null;
  body: string | null;
  controlTarget: AvatarOverlayActivityItem["controlTarget"] | null;
  expiresAtMs: number | null;
  id: string;
  isLoading: boolean;
  kind: string;
  level: AvatarOverlayNotificationLevel;
  localConversationId: string | null;
  source: AvatarOverlayActivityItem["source"] | "local";
  title: string;
  turnKey: string | null;
  updatedAtMs: number;
  waitingRequest: CompactWaitingRequest | null;
};

export type CollectAvatarOverlayNotificationsOptions = {
  dismissedNotificationTurnKeys?: ReadonlyMap<string, string | null>;
  extraNotifications?: AvatarOverlayNotification[];
  latestActivityFirst?: boolean;
  nowMs?: number;
  sessions: AvatarOverlayActivityItem[];
};

export type CollectedAvatarOverlayNotifications = {
  nextNotificationExpiresAtMs: number | null;
  notifications: AvatarOverlayNotification[];
};

type AvatarOverlayNotificationEntry = {
  expiresAtMs: number | null;
  key: string;
  notification: AvatarOverlayNotification;
  notificationPriority: number;
  sortAtMs: number;
  updatedAtMs: number;
};

type PointerEventLike = {
  screenX: number;
  screenY: number;
  timeStamp: number;
};

type CustomAvatarRefreshQueryState = {
  isFetching?: boolean;
};

type SelectedAvatar = ReturnType<typeof useSelectedAvatar>["selectedAvatar"];

export function createAvatarOverlayPointerSample(
  event: PointerEventLike,
): AvatarOverlayPointerSample {
  return {
    screenX: event.screenX,
    screenY: event.screenY,
    timeMs: event.timeStamp,
  };
}

export function resolveAvatarOverlayPointerDragRelease(
  dragState: AvatarOverlayPointerDragState,
  releaseSample: AvatarOverlayPointerSample | undefined,
  shouldUseLastSampleAsRelease: boolean,
): AvatarOverlayPointerReleaseState {
  const resolvedReleaseSample =
    releaseSample ??
    (shouldUseLastSampleAsRelease ? dragState.samples.at(-1) : undefined);

  return {
    hasMoved:
      resolvedReleaseSample == null
        ? dragState.hasMoved
        : hasPointerMoved(dragState, resolvedReleaseSample),
    releaseSample: resolvedReleaseSample,
    velocity:
      resolvedReleaseSample == null
        ? null
        : calculateAvatarOverlayReleaseVelocity(
            dragState,
            resolvedReleaseSample,
          ),
  };
}

function calculateAvatarOverlayReleaseVelocity(
  dragState: AvatarOverlayPointerDragState,
  releaseSample: AvatarOverlayPointerSample,
): AvatarOverlayPointerVelocity | null {
  if (!hasPointerMoved(dragState, releaseSample)) return null;

  return calculatePointerVelocity(
    trimRecentAvatarOverlayPointerSamples([
      ...dragState.samples,
      releaseSample,
    ]),
  );
}

function hasPointerMoved(
  dragState: AvatarOverlayPointerDragState,
  sample: AvatarOverlayPointerSample,
): boolean {
  if (dragState.hasMoved) return true;

  const firstSample = dragState.samples[0];
  return (
    firstSample != null &&
    (Math.abs(sample.screenX - firstSample.screenX) >=
      POINTER_MOVE_THRESHOLD_PX ||
      Math.abs(sample.screenY - firstSample.screenY) >=
        POINTER_MOVE_THRESHOLD_PX)
  );
}

export function trimRecentAvatarOverlayPointerSamples(
  samples: AvatarOverlayPointerSample[],
): AvatarOverlayPointerSample[] {
  const latestSample = samples.at(-1);
  return latestSample == null
    ? samples
    : samples.filter(
        (sample) =>
          latestSample.timeMs - sample.timeMs <=
          RECENT_POINTER_SAMPLE_WINDOW_MS,
      );
}

function calculatePointerVelocity(
  samples: AvatarOverlayPointerSample[],
): AvatarOverlayPointerVelocity | null {
  const velocityEndSample = findVelocityEndSample(samples);
  if (velocityEndSample == null) return null;

  const velocityStartSample = samples.find(
    (sample) => velocityEndSample.timeMs - sample.timeMs > 0,
  );
  if (velocityStartSample == null) return null;

  const durationSeconds =
    Math.max(
      velocityEndSample.timeMs - velocityStartSample.timeMs,
      MIN_POINTER_SAMPLE_DURATION_MS,
    ) / 1000;
  const velocity = {
    x:
      (velocityEndSample.screenX - velocityStartSample.screenX) /
      durationSeconds,
    y:
      (velocityEndSample.screenY - velocityStartSample.screenY) /
      durationSeconds,
  };
  const speed = Math.hypot(velocity.x, velocity.y);

  if (speed < MIN_RELEASE_VELOCITY_PX_PER_SECOND) return null;
  if (speed <= MAX_RELEASE_VELOCITY_PX_PER_SECOND) return velocity;

  const scale = MAX_RELEASE_VELOCITY_PX_PER_SECOND / speed;
  return {
    x: velocity.x * scale,
    y: velocity.y * scale,
  };
}

function findVelocityEndSample(
  samples: AvatarOverlayPointerSample[],
): AvatarOverlayPointerSample | undefined {
  const latestSample = samples.at(-1);
  if (latestSample == null) return undefined;

  let endIndex = samples.length - 1;
  while (endIndex > 0) {
    const previousSample = samples[endIndex - 1];
    if (
      previousSample == null ||
      Math.abs(latestSample.screenX - previousSample.screenX) >=
        POINTER_MOVE_THRESHOLD_PX ||
      Math.abs(latestSample.screenY - previousSample.screenY) >=
        POINTER_MOVE_THRESHOLD_PX
    ) {
      break;
    }
    endIndex -= 1;
  }
  return samples[endIndex];
}

export const initAvatarOverlayPointerDragChunk = once(() => {});

export function buildAvatarOverlayNotificationSearchKey(
  notifications: AvatarOverlayNotification[],
  intl: IntlShapeLike,
): string {
  return notifications
    .map((notification) =>
      [
        notification.id,
        notification.title,
        notification.body ?? "",
        notification.level,
        notification.isLoading ? "loading" : "done",
        notification.action?.path ?? "",
        notification.waitingRequest == null
          ? ""
          : getWaitingRequestSearchText(notification.waitingRequest, intl),
      ].join("\u0001"),
    )
    .join("\0");
}

export const initAvatarOverlayNotificationSearchKeyChunk = once(() => {
  initCompactWaitingRequestChunk();
});

export function collectAvatarOverlayNotifications({
  dismissedNotificationTurnKeys,
  extraNotifications = [],
  latestActivityFirst = false,
  nowMs = Date.now(),
  sessions,
}: CollectAvatarOverlayNotificationsOptions): CollectedAvatarOverlayNotifications {
  const entries = extraNotifications.flatMap((notification) =>
    (notification.expiresAtMs != null && nowMs >= notification.expiresAtMs) ||
    dismissedNotificationTurnKeys?.get(notification.id) === notification.turnKey
      ? []
      : [
          {
            expiresAtMs: notification.expiresAtMs,
            key: notification.id,
            notification,
            notificationPriority: 4,
            sortAtMs: notification.updatedAtMs,
            updatedAtMs: notification.updatedAtMs,
          },
        ],
  );

  for (const session of sessions) {
    const entry = buildSessionNotificationEntry(session, nowMs);
    if (
      entry != null &&
      dismissedNotificationTurnKeys?.get(entry.notification.id) !==
        entry.notification.turnKey
    ) {
      entries.push(entry);
    }
  }

  return {
    nextNotificationExpiresAtMs: entries.reduce<number | null>(
      (nextExpiresAtMs, entry) =>
        entry.expiresAtMs == null ||
        (nextExpiresAtMs != null && nextExpiresAtMs <= entry.expiresAtMs)
          ? nextExpiresAtMs
          : entry.expiresAtMs,
      null,
    ),
    notifications: entries
      .sort((entry, otherEntry) =>
        compareAvatarOverlayNotificationEntries(
          entry,
          otherEntry,
          latestActivityFirst,
        ),
      )
      .map((entry) => entry.notification),
  };
}

export function createFirstAwakeAvatarOverlayNotification({
  intl,
  petName,
  startedAtMs,
}: {
  intl: IntlShapeLike;
  petName: string;
  startedAtMs: number;
}): AvatarOverlayNotification {
  return {
    action: null,
    body: intl.formatMessage({
      id: "avatarOverlay.firstAwake.body",
      defaultMessage: "I'm here to help keep your Codex sessions moving",
      description:
        "Body of the temporary greeting shown when the floating Codex pet is first opened",
    }),
    controlTarget: null,
    expiresAtMs: startedAtMs + FIRST_AWAKE_NOTIFICATION_TTL_MS,
    id: "first-awake",
    isLoading: false,
    kind: "first-awake",
    level: "info",
    localConversationId: null,
    source: "local",
    title: intl.formatMessage(
      {
        id: "avatarOverlay.firstAwake.title",
        defaultMessage: "Hi, I'm {petName}",
        description:
          "Title of the temporary greeting shown when the floating Codex pet is first opened",
      },
      { petName },
    ),
    turnKey: null,
    updatedAtMs: startedAtMs,
    waitingRequest: null,
  };
}

function buildSessionNotificationEntry(
  session: AvatarOverlayActivityItem,
  nowMs: number,
): AvatarOverlayNotificationEntry | null {
  if (session.status === "idle" || !session.showInNotificationTray) {
    return null;
  }

  const expiresAtMs = getSessionNotificationExpiresAtMs(
    session.status,
    session.updatedAtMs,
  );
  if (expiresAtMs != null && nowMs >= expiresAtMs) return null;

  return {
    expiresAtMs,
    key: session.key,
    notification: {
      action: { path: session.actionPath },
      body: session.subtitle,
      controlTarget: session.controlTarget,
      expiresAtMs,
      id: session.key,
      isLoading: session.status === "running",
      kind: "session",
      level: getSessionNotificationLevel(session.status),
      localConversationId: session.localConversationId,
      source: session.source,
      title: getSessionNotificationTitle(session),
      turnKey: session.turnKey,
      updatedAtMs: session.updatedAtMs,
      waitingRequest:
        session.status === "waiting" ? session.waitingRequest : null,
    },
    notificationPriority: getSessionNotificationPriority(session.status),
    sortAtMs: session.sortAtMs,
    updatedAtMs: session.updatedAtMs,
  };
}

function getSessionNotificationTitle(
  session: AvatarOverlayActivityItem,
): string {
  return session.status !== "waiting" || session.waitingRequest == null
    ? session.title
    : formatWaitingRequestAccessibleLabel(
        session.title,
        session.waitingRequest,
      );
}

function getSessionNotificationExpiresAtMs(
  status: AvatarOverlayActivityStatus,
  updatedAtMs: number,
): number | null {
  switch (status) {
    case "running":
      return updatedAtMs + RUNNING_NOTIFICATION_TTL_MS;
    case "failed":
      return updatedAtMs + FAILED_NOTIFICATION_TTL_MS;
    case "waiting":
      return updatedAtMs + WAITING_NOTIFICATION_TTL_MS;
    case "review":
      return updatedAtMs + REVIEW_NOTIFICATION_TTL_MS;
    case "idle":
      return null;
  }
}

function getSessionNotificationLevel(
  status: AvatarOverlayActivityStatus,
): AvatarOverlayNotificationLevel {
  switch (status) {
    case "waiting":
      return "warning";
    case "failed":
      return "danger";
    case "running":
      return "info";
    case "review":
      return "success";
    case "idle":
      return "info";
  }
}

function compareAvatarOverlayNotificationEntries(
  entry: AvatarOverlayNotificationEntry,
  otherEntry: AvatarOverlayNotificationEntry,
  latestActivityFirst: boolean,
): number {
  const activityKindOrder =
    Number(otherEntry.notification.kind === "activity") -
    Number(entry.notification.kind === "activity");
  if (activityKindOrder !== 0) return activityKindOrder;

  if (latestActivityFirst) {
    const sortAtOrder = otherEntry.sortAtMs - entry.sortAtMs;
    if (sortAtOrder !== 0) return sortAtOrder;
  }

  const priorityOrder =
    entry.notificationPriority - otherEntry.notificationPriority;
  if (priorityOrder !== 0) return priorityOrder;

  if (!latestActivityFirst) {
    const updatedAtOrder = otherEntry.updatedAtMs - entry.updatedAtMs;
    if (updatedAtOrder !== 0) return updatedAtOrder;
  }

  return entry.key.localeCompare(otherEntry.key);
}

function getSessionNotificationPriority(
  status: AvatarOverlayActivityStatus,
): number {
  switch (status) {
    case "waiting":
      return 0;
    case "failed":
      return 1;
    case "review":
      return 2;
    case "running":
      return 3;
    case "idle":
      return 4;
  }
}

export const initAvatarOverlayNotificationTrayChunk = once(() => {
  initCompactWaitingRequestChunk();
});

export function useAvatarOverlaySelection(): {
  selectedAvatar: SelectedAvatar | null;
  selectedAvatarId: string | null | undefined;
} {
  const { avatarOptions, isFetching: isFetchingAvatarOptions } =
    useAvatarOptions();
  const { selectedAvatar, selectedAvatarId } = useSelectedAvatar(avatarOptions);
  const isSelectedCustomAvatarStillMissing = isSelectedCustomAvatarMissing(
    selectedAvatar,
    selectedAvatarId,
  );
  const refreshQueryState =
    useScopedSignalValue<CustomAvatarRefreshQueryState>(
      selectedCustomAvatarRefreshQuery,
      selectedAvatarId ?? selectedAvatar.id,
    ) ?? {};
  const visibleSelectedAvatar =
    isSelectedCustomAvatarStillMissing &&
    (isFetchingAvatarOptions || refreshQueryState.isFetching)
      ? null
      : selectedAvatar;

  return useMemo(
    () => ({
      selectedAvatar: visibleSelectedAvatar,
      selectedAvatarId,
    }),
    [selectedAvatarId, visibleSelectedAvatar],
  );
}

export const initUseAvatarOverlaySelectionChunk = once(() => {
  initAvatarSelectionStateChunk();
  initCustomAvatarsQueryChunk();
  initUseAvatarOptionsChunk();
});
