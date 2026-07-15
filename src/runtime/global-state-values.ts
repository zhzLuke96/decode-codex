// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js
// Default-value and compatibility normalization for global-state query results.
import { globalSettingKeys as GLOBAL_STATE_KEYS } from "../boundaries/src-l0hb-mz-p";

const SIDEBAR_SORT_KEYS = new Set(["created_at", "updated_at"]);

const DEFAULT_GLOBAL_STATE_VALUES: Record<string, unknown> = {
  [GLOBAL_STATE_KEYS.ADDED_REMOTE_CONTROL_ENV_IDS]: [],
  [GLOBAL_STATE_KEYS.AMBIENT_SUGGESTIONS_ENABLED]: true,
  [GLOBAL_STATE_KEYS.BROWSER_ANNOTATION_SCREENSHOTS_MODE]: "always",
  [GLOBAL_STATE_KEYS.BROWSER_DOWNLOAD_DIRECTORY]: null,
  [GLOBAL_STATE_KEYS.BROWSER_DOWNLOAD_PROMPT_ENABLED]: false,
  [GLOBAL_STATE_KEYS.CODEX_MOBILE_SETUP_COMPLETED]: false,
  [GLOBAL_STATE_KEYS.DOCK_ICON_PREFERENCE]: "app-default",
  [GLOBAL_STATE_KEYS.GIT_ALWAYS_FORCE_PUSH]: false,
  [GLOBAL_STATE_KEYS.GIT_BRANCH_PREFIX]: "codex/",
  [GLOBAL_STATE_KEYS.GIT_COMMIT_INSTRUCTIONS]: "",
  [GLOBAL_STATE_KEYS.GIT_CREATE_PULL_REQUEST_AS_DRAFT]: true,
  [GLOBAL_STATE_KEYS.GIT_PR_INSTRUCTIONS]: "",
  [GLOBAL_STATE_KEYS.GIT_PULL_REQUEST_MERGE_METHOD]: "merge",
  [GLOBAL_STATE_KEYS.GLOBAL_DICTATION_KEEP_VISIBLE]: false,
  [GLOBAL_STATE_KEYS.HOTKEY_WINDOW_PROJECTLESS_DEFAULT_ENABLED]: false,
  [GLOBAL_STATE_KEYS.IA_WAITING_ON_USER_FOLLOWUP_SECONDS]: 1800,
  [GLOBAL_STATE_KEYS.PROJECT_APPEARANCES]: {},
  [GLOBAL_STATE_KEYS.REDUCED_MOTION_PREFERENCE]: "system",
  [GLOBAL_STATE_KEYS.SIDEBAR_PROJECT_THREAD_ORDERS]: {},
  [GLOBAL_STATE_KEYS.WORKTREE_AUTO_CLEANUP_ENABLED]: true,
  [GLOBAL_STATE_KEYS.WORKTREE_KEEP_COUNT]: 15,
};

export type GlobalStateHostResponse<TData = unknown> = {
  value?: TData;
};

export type GlobalStateQueryResult<TData = unknown> = {
  data?: TData;
  error?: unknown;
  isFetching?: boolean;
  isLoading?: boolean;
};

export function isRecord(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === "object" && !Array.isArray(value);
}

function getDefaultGlobalStateValue(key: string): unknown {
  return DEFAULT_GLOBAL_STATE_VALUES[key];
}

function normalizeSidebarProjectThreadOrders(value: unknown) {
  if (!isRecord(value)) return {};

  return Object.fromEntries(
    Object.entries(value).flatMap(([projectId, order]) => {
      if (!isRecord(order) || !Array.isArray(order.threadIds)) return [];
      if (!order.threadIds.every((threadId) => typeof threadId === "string")) {
        return [];
      }
      if (
        order.sortKey != null &&
        (typeof order.sortKey !== "string" ||
          !SIDEBAR_SORT_KEYS.has(order.sortKey))
      ) {
        return [];
      }

      return [
        [
          projectId,
          {
            threadIds: order.threadIds,
            ...(order.sortKey == null ? {} : { sortKey: order.sortKey }),
          },
        ],
      ];
    }),
  );
}

export function normalizeGlobalStateValue<TData = unknown>(
  key: unknown,
  value: unknown,
): TData | undefined {
  const settingKey = String(key);
  const normalizedValue =
    settingKey === GLOBAL_STATE_KEYS.SIDEBAR_PROJECT_THREAD_ORDERS
      ? normalizeSidebarProjectThreadOrders(value)
      : value;

  return (normalizedValue ?? getDefaultGlobalStateValue(settingKey)) as
    | TData
    | undefined;
}

export function unwrapGlobalStateHostResponse(value: unknown): unknown {
  return isRecord(value) && "value" in value ? value.value : value;
}

export function normalizeGlobalStateQueryResult<TData = unknown>(
  key: unknown,
  queryResult: GlobalStateQueryResult<GlobalStateHostResponse> | undefined,
): GlobalStateQueryResult<TData> {
  return {
    ...queryResult,
    data: normalizeGlobalStateValue<TData>(
      key,
      unwrapGlobalStateHostResponse(queryResult?.data),
    ),
  };
}
