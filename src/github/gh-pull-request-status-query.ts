// Restored from ref/webview/assets/gh-pull-request-status-query-CCiuBiO5.js
import {
  _appScopeL,
  _appScopeP,
  _appScopeT,
  appScopeG,
} from "../boundaries/app-scope";
import {
  vscodeApiI,
  vscodeApiN,
  vscodeApiR,
  vscodeApiU,
} from "../boundaries/vscode-api";
import * as sourceRuntime from "../boundaries/src-l0hb-mz-p";
type GhCliAvailability =
  | "available"
  | "error"
  | "loading"
  | "missing"
  | "unauthenticated";
type GhPullRequestOperationSource =
  | "local_conversation_git_summary"
  | "sidebar_task_pr_chip"
  | string;
type GhPullRequestStatusParams = {
  cwd: string | null | undefined;
  headBranch: string;
  hostId: string;
  operationSource: GhPullRequestOperationSource;
};
type GhPullRequestSuccessStatus = {
  status: "success";
  hasOpenPr: boolean;
  mergeBlocker?: "conflicts" | "unknown" | string | null;
  url: string | null;
};
type GhPullRequestStatus =
  | GhPullRequestSuccessStatus
  | {
      status: "not-found";
    }
  | Record<string, unknown>;
const ghCliStatusQuery = vscodeApiI(
  _appScopeT,
  "gh-cli-status",
  (hostId: string) => ({
    gcTime: vscodeApiU.INFINITE,
    params: {
      hostId,
    },
    staleTime: (query: {
      state: {
        data?: {
          isAuthenticated?: boolean;
          isInstalled?: boolean;
        };
      };
    }) =>
      query.state.data?.isInstalled === true &&
      query.state.data.isAuthenticated === true
        ? vscodeApiU.INFINITE
        : vscodeApiU.FIVE_SECONDS,
  }),
);

function initGhCliStatusQueryChunk(): void {}

const ghCliAvailabilitySignal = _appScopeL(
  _appScopeT,
  (hostId: string, { get }): GhCliAvailability => {
    const ghCliStatus = get(ghCliStatusQuery, hostId);
    return ghCliStatus.isError
      ? "error"
      : ghCliStatus.data == null
        ? "loading"
        : ghCliStatus.data.isInstalled
          ? ghCliStatus.data.isAuthenticated
            ? "available"
            : "unauthenticated"
          : "missing";
  },
);
function invalidateGhCliStatus(
  scope: {
    query: {
      invalidate: (query: unknown, hostId: string) => void;
    };
  },
  hostId: string,
) {
  scope.query.invalidate(ghCliStatusQuery, hostId);
}
const ghPullRequestStatusQuery = _appScopeP(
  _appScopeT,
  (params: GhPullRequestStatusParams, { get }) => ({
    enabled:
      params.cwd != null &&
      params.headBranch.length > 0 &&
      get(ghCliAvailabilitySignal, params.hostId) === "available",
    queryFn: () =>
      vscodeApiN("gh-pr-status", {
        source: params.operationSource,
        params: {
          cwd: sourceRuntime._srcN(params.cwd ?? "/"),
          headBranch: params.headBranch,
          hostId: params.hostId,
        },
      }),
    queryKey: vscodeApiR("gh-pr-status", {
      cwd: sourceRuntime._srcN(params.cwd ?? "/"),
      headBranch: params.headBranch,
      hostId: params.hostId,
    }),
    staleTime: getGhPullRequestStatusStaleTime(params.operationSource),
    structuralSharing: mergeGhPullRequestStatus,
  }),
);
const ghPullRequestStatusResultSignal = _appScopeL(
  _appScopeT,
  (params: GhPullRequestStatusParams, { get }) => {
    const statusQuery = get(ghPullRequestStatusQuery, params);
    return statusQuery.isError
      ? {
          type: "error" as const,
        }
      : statusQuery.isLoading || statusQuery.data == null
        ? {
            type: "loading" as const,
          }
        : statusQuery.data.status === "not-found"
          ? {
              type: "not-found" as const,
            }
          : {
              type: "success" as const,
              data: statusQuery.data,
            };
  },
);
const hasOpenPullRequestSignal = _appScopeL(
  _appScopeT,
  (params: GhPullRequestStatusParams, { get }) => {
    const statusQuery = get(ghPullRequestStatusQuery, params);
    return statusQuery.data?.status === "success" && statusQuery.data.hasOpenPr;
  },
);
const ghPullRequestUrlSignal = _appScopeL(
  _appScopeT,
  (params: GhPullRequestStatusParams, { get }) => {
    const statusQuery = get(ghPullRequestStatusQuery, params);
    return statusQuery.data?.status === "success" ? statusQuery.data.url : null;
  },
);
function mergeGhPullRequestStatus(
  previousStatus: GhPullRequestStatus | undefined,
  nextStatus: GhPullRequestStatus | undefined,
) {
  return isSuccessfulPullRequestStatus(previousStatus) &&
    previousStatus.mergeBlocker === "conflicts" &&
    isSuccessfulPullRequestStatus(nextStatus) &&
    previousStatus.url != null &&
    previousStatus.url === nextStatus.url &&
    nextStatus.mergeBlocker === "unknown"
    ? appScopeG(previousStatus, {
        ...nextStatus,
        mergeBlocker: "conflicts",
      })
    : appScopeG(previousStatus, nextStatus);
}
function isSuccessfulPullRequestStatus(
  value: unknown,
): value is GhPullRequestSuccessStatus {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value &&
    value.status === "success" &&
    "mergeBlocker" in value &&
    "url" in value
  );
}
function getGhPullRequestStatusStaleTime(
  operationSource: GhPullRequestOperationSource,
) {
  return operationSource === "sidebar_task_pr_chip"
    ? vscodeApiU.ONE_MINUTE
    : operationSource === "local_conversation_git_summary"
      ? vscodeApiU.FIFTEEN_SECONDS
      : vscodeApiU.FIVE_SECONDS;
}
export {
  ghCliAvailabilitySignal,
  ghPullRequestUrlSignal,
  ghPullRequestStatusResultSignal,
  initGhCliStatusQueryChunk,
  invalidateGhCliStatus,
  ghPullRequestStatusQuery,
  hasOpenPullRequestSignal,
};
