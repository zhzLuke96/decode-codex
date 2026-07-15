// Restored from ref/webview/assets/codex-api-AUWtp9Y7.js
// Codex web API query and mutation hooks.

import Fuse from "fuse.js";
import { appScopeB as keepPreviousQueryData } from "../../boundaries/app-scope";
import {
  callCodexVscodeApi,
  vscodeApiA as useQueryClient,
  vscodeApiU as queryTimings,
  vscodeApiUnderscore as useMutation,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { Aa as useInfiniteQuery } from "../../boundaries/thread-context-inputs.facade";
import { serializeCommentAttachmentInputItem } from "../../boundaries/src-l0hb-mz-p";
import { useAuth } from "../../auth/use-auth";
import { parseOwnerRepo } from "../../github/parse-owner-repo";
import { codexRequest } from "../request";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
import { baseOrderBy } from "../../utils/base-order-by";
import { useDebouncedValue } from "../../utils/use-debounced-value";
import type {
  AccountCheckResponse,
  CloudEnvironmentRecord,
  CommentAttachment,
  ConsumeRateLimitResetCreditInput,
  CreatePullRequestInput,
  CreateReferralInviteInput,
  CreateTaskInput,
  FinishSnapshotUploadInput,
  FollowUpTaskInput,
  GitOrigin,
  OwnerRepo,
  QueryEnabledOptions,
  RefetchOptions,
  TaskListOptions,
  TaskRecord,
  UploadSnapshotUrlInput,
} from "./types";
const PERSISTENT_REFERRAL_INVITE_KEY = "codex_referral_persistent_invite";
function createTaskQueryOptions(taskId: string | null | undefined) {
  return {
    enabled: taskId != null,
    queryFn: async () =>
      codexRequest.safeGet("/wham/tasks/{task_id}", {
        parameters: {
          path: {
            task_id: taskId ?? "",
          },
        },
      }),
    queryKey: ["task", taskId],
    staleTime: queryTimings.FIVE_SECONDS,
  };
}
export function createTaskTurnsQueryOptions(taskId: string | null | undefined) {
  return {
    enabled: taskId != null,
    queryFn: async () =>
      codexRequest.safeGet("/wham/tasks/{task_id}/turns", {
        parameters: {
          path: {
            task_id: taskId ?? "",
          },
        },
      }),
    queryKey: ["task", taskId, "turns"],
    staleTime: queryTimings.FIVE_SECONDS,
  };
}
export function useTasksQuery(options?: TaskListOptions) {
  const { authMethod } = useAuth();
  const limit = options?.limit;
  const taskFilter = options?.taskFilter;
  const select =
    options?.environmentLabel == null
      ? undefined
      : (tasks: TaskRecord[]) =>
          tasks.filter(
            (task) =>
              task.task_status_display?.environment_label ===
              options.environmentLabel,
          );
  return useQuery({
    enabled: options?.enabled !== false && authMethod === "chatgpt",
    placeholderData: keepPreviousQueryData,
    queryFn: async () =>
      (
        (await codexRequest.safeGet("/wham/tasks/list", {
          parameters: {
            query: {
              limit,
              task_filter: taskFilter,
            },
          },
        })) as {
          items?: TaskRecord[];
        }
      ).items ?? [],
    queryKey: ["tasks", limit, taskFilter],
    refetchInterval: getTaskListRefetchInterval,
    refetchIntervalInBackground: true,
    select,
    staleTime: queryTimings.ONE_MINUTE,
  });
}
export function useTaskQuery(taskId: string | null | undefined) {
  return useQuery(createTaskQueryOptions(taskId));
}
export function useTaskTurnQuery(
  taskId: string | null | undefined,
  turnId: string | null | undefined,
  options?: RefetchOptions,
) {
  return useQuery({
    enabled: Boolean(taskId && turnId) && (options?.enabled ?? true),
    queryFn: async () =>
      codexRequest.safeGet("/wham/tasks/{task_id}/turns/{task_turn_id}", {
        parameters: {
          path: {
            task_id: taskId ?? "",
            task_turn_id: turnId ?? "",
          },
        },
      }),
    queryKey: ["task", taskId, "turn", turnId],
    refetchInterval: options?.refetchInterval,
    staleTime: queryTimings.FIVE_SECONDS,
  });
}
export function useTaskTurnLogsQuery(
  taskId: string | null | undefined,
  turnId: string | null | undefined,
  options?: QueryEnabledOptions,
) {
  return useQuery({
    enabled: Boolean(taskId && turnId) && (options?.enabled ?? true),
    queryFn: async () =>
      codexRequest.safeGet("/wham/tasks/{task_id}/turns/{task_turn_id}/logs", {
        parameters: {
          path: {
            task_id: taskId ?? "",
            task_turn_id: turnId ?? "",
          },
        },
      }),
    queryKey: ["task", taskId, "turn", turnId, "logs"],
    staleTime: queryTimings.FIVE_SECONDS,
  });
}
export function useCloudEnvironmentsQuery(options: QueryEnabledOptions = {}) {
  const { authMethod } = useAuth();
  return useQuery({
    enabled: (options.enabled ?? true) && authMethod === "chatgpt",
    placeholderData: keepPreviousQueryData,
    queryFn: fetchCloudEnvironments,
    queryKey: ["environments"],
    staleTime: queryTimings.ONE_MINUTE,
  });
}
export function useWorkspaceEnvironmentSearchQuery(
  searchQuery: string,
  options: QueryEnabledOptions,
) {
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 200);
  const trimmedQuery = debouncedSearchQuery.trim();
  return useQuery({
    enabled: (options.enabled ?? true) && trimmedQuery.length > 0,
    queryFn: async () => {
      const environments =
        (await fetchCloudEnvironments()) as CloudEnvironmentRecord[];
      return rankEnvironmentSearchResults(environments, trimmedQuery);
    },
    queryKey: ["workspace", "environments-search", debouncedSearchQuery],
    staleTime: queryTimings.FIVE_MINUTES,
  });
}
export function useWorkspaceEnvironmentsByRepositoryQuery(
  options: QueryEnabledOptions = {},
) {
  const { authMethod } = useAuth();
  const enabled = (options.enabled ?? true) && authMethod === "chatgpt";
  const originsQuery = useQuery({
    enabled,
    queryFn: readWorkspaceOwnerRepos,
    queryKey: ["workspace", "environments-by-repo"],
    staleTime: queryTimings.ONE_MINUTE,
  });
  const repositoryKeyParts = (originsQuery.data ?? []).flatMap(
    ({ owner, repoName }: OwnerRepo) => [owner, repoName],
  );
  return useQuery({
    enabled: enabled && originsQuery.data != null,
    queryFn: async () => {
      const environments = (
        await Promise.all(
          (originsQuery.data ?? []).map(fetchEnvironmentsForRepository),
        )
      ).flat() as CloudEnvironmentRecord[];
      return orderByCollection(
        environments,
        ["is_pinned", "task_count", "label"],
        ["desc", "desc", "asc"],
      );
    },
    queryKey: ["workspace", "environments-by-repo", ...repositoryKeyParts],
    staleTime: queryTimings.ONE_MINUTE,
  });
}
export async function createWorktreeSnapshotUploadUrl({
  anticipatedFileSize,
  contentType,
  filename,
  repoName,
}: UploadSnapshotUrlInput) {
  return codexRequest.safePost("/wham/worktree_snapshots/upload_url", {
    requestBody: {
      anticipated_file_size: anticipatedFileSize,
      content_type: contentType,
      filename,
      repo_name: repoName,
    },
  });
}
export async function finishWorktreeSnapshotUpload({
  etag,
  fileId,
}: FinishSnapshotUploadInput) {
  return codexRequest.safePost("/wham/worktree_snapshots/finish_upload", {
    requestBody: {
      etag,
      file_id: fileId,
    },
  });
}
export function useCreateTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTaskRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}
export function useCreatePullRequestMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPullRequestForTurn,
    onSuccess: (_response: unknown, variables: CreatePullRequestInput) => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      queryClient.invalidateQueries({
        queryKey: ["task", variables.taskId],
      });
      queryClient.invalidateQueries({
        queryKey: ["task", variables.taskId, "turns"],
      });
      queryClient.invalidateQueries({
        queryKey: ["task", variables.taskId, "turn", variables.turnId],
      });
    },
  });
}
export function useReferralInviteMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createReferralInvite,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["persistent-referral-invite-eligibility"],
      });
    },
  });
}
export function useReferralEligibilityRulesQuery({
  referralKey,
}: {
  referralKey: string;
}) {
  return useQuery({
    queryFn: () =>
      codexRequest.safeGet("/wham/referrals/eligibility_rules", {
        parameters: {
          query: {
            referral_key: referralKey,
          },
        },
      }),
    queryKey: ["referral-eligibility-rules", referralKey],
    staleTime: queryTimings.FIVE_SECONDS,
  });
}
export function usePersistentReferralInviteEligibilityQuery(
  options: QueryEnabledOptions = {},
) {
  return useQuery({
    enabled: options.enabled ?? true,
    queryFn: fetchPersistentReferralInviteEligibility,
    queryKey: ["persistent-referral-invite-eligibility"],
    staleTime: queryTimings.FIVE_SECONDS,
  });
}
export function useRateLimitResetCreditsQuery() {
  return useQuery({
    queryFn: () => codexRequest.safeGet("/wham/rate-limit-reset-credits"),
    queryKey: ["rate-limit-reset-credits"],
    staleTime: queryTimings.FIVE_SECONDS,
  });
}
export function useConsumeRateLimitResetCreditMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: consumeRateLimitResetCredit,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["rate-limit-status"],
      });
      queryClient.invalidateQueries({
        queryKey: ["rate-limit-reset-credits"],
      });
    },
  });
}
export function useFollowUpTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createFollowUpTaskRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}
export function useCancelTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cancelTask,
    onSuccess: (_response: unknown, taskId: string) => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      queryClient.invalidateQueries({
        queryKey: ["task", taskId],
      });
    },
  });
}
export function useGitHubBranchSearchInfiniteQuery(
  repositoryId: string | null | undefined,
  query: string,
  options: QueryEnabledOptions = {},
) {
  return useInfiniteQuery({
    enabled: Boolean(repositoryId) && (options.enabled ?? true),
    getNextPageParam: (
      page: {
        cursor?: string | null;
      } | null,
    ) => page?.cursor ?? null,
    initialPageParam: null,
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      searchRepositoryBranches(
        repositoryId ?? "",
        query,
        20,
        pageParam ?? null,
      ),
    queryKey: ["search-branches", repositoryId, query],
    select: (data: {
      pages: Array<{
        items?: Array<{
          branch: string;
        }>;
      }>;
    }) =>
      data.pages.flatMap(
        (page) => page.items?.map((item) => item.branch) ?? [],
      ),
    staleTime: queryTimings.ONE_MINUTE,
  });
}
export function useMarkTaskReadMutation(taskId: string) {
  const invalidateAndBroadcast = invalidateQueriesAndBroadcast();
  return useMutation({
    mutationFn: () =>
      codexRequest.safePost("/wham/tasks/{task_id}/mark_read", {
        parameters: {
          path: {
            task_id: taskId,
          },
        },
      }),
    onSuccess: async () => {
      await Promise.all([
        invalidateAndBroadcast(["tasks"]),
        invalidateAndBroadcast(["task", taskId]),
      ]);
    },
  });
}
export function useOnboardingContextQuery(options: QueryEnabledOptions = {}) {
  const { accountId, authMethod } = useAuth();
  return useQuery({
    enabled: (options.enabled ?? true) && authMethod === "chatgpt",
    queryFn: () => codexRequest.safeGet("/wham/onboarding/context"),
    queryKey: ["onboarding", "context", authMethod, accountId],
    staleTime: queryTimings.TEN_MINUTES,
  });
}
export function bootstrapStatsigForCodex(requestBody: unknown) {
  return codexRequest.safePost("/wham/statsig/bootstrap", {
    requestBody,
  });
}
export function useSelectedAccountQuery(refetchOnMount?: boolean) {
  const { data, errorUpdatedAt, isError, isLoading } =
    useAccountCheckQuery(refetchOnMount);
  const firstAccountId =
    data?.account_ordering && data.account_ordering.length > 0
      ? data.account_ordering[0]
      : undefined;
  const account =
    firstAccountId && data?.accounts
      ? data.accounts.find((item) => item.id === firstAccountId)
      : undefined;
  return {
    data: account,
    hasEverErrored: errorUpdatedAt !== 0,
    isError,
    isLoading,
  };
}
export function initSelectedAccountQueryChunk(): void {}
function useAccountCheckQuery(refetchOnMount?: boolean) {
  const { authMethod } = useAuth();
  return useQuery({
    enabled: authMethod === "chatgpt",
    queryFn: fetchAccountCheck,
    queryKey: ["accounts", "check"],
    refetchOnMount,
    staleTime: queryTimings.ONE_MINUTE,
  });
}
function getTaskListRefetchInterval(query: {
  state: {
    data?: TaskRecord[];
  };
}) {
  return query.state.data?.some(isTaskActive) ? 15000 : 60000;
}
function isTaskActive(task: TaskRecord) {
  const turnStatus =
    task.task_status_display?.latest_turn_status_display?.turn_status;
  return turnStatus === "pending" || turnStatus === "in_progress";
}
async function fetchCloudEnvironments() {
  return codexRequest.safeGet("/wham/environments");
}
function rankEnvironmentSearchResults(
  environments: CloudEnvironmentRecord[],
  searchQuery: string,
) {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const fuse = new Fuse(environments, {
    keys: ["label", "repos"],
    threshold: 0.4,
  });
  const prefixRank = (label: string) => {
    const normalizedLabel = label.toLowerCase();
    if (normalizedLabel === normalizedQuery) return 0;
    return normalizedLabel.startsWith(normalizedQuery) ? 1 : 2;
  };
  return fuse
    .search(searchQuery)
    .map((result) => result.item)
    .sort((left, right) => {
      if (left.is_pinned !== right.is_pinned) return left.is_pinned ? -1 : 1;
      const rankDiff = prefixRank(left.label) - prefixRank(right.label);
      return rankDiff === 0 ? left.label.localeCompare(right.label) : rankDiff;
    });
}
async function fetchEnvironmentsForRepository({ owner, repoName }: OwnerRepo) {
  return codexRequest.safeGet(
    "/wham/environments/by-repo/{provider}/{repo_owner}/{repo_name}",
    {
      parameters: {
        path: {
          provider: "github",
          repo_name: repoName,
          repo_owner: owner,
        },
      },
    },
  );
}
async function readWorkspaceOwnerRepos() {
  const response = (await callCodexVscodeApi("git-origins", {
    source: "workspace_repo_owner_names",
  })) as {
    origins?: GitOrigin[];
  };
  return parseUniqueGitOrigins(response.origins ?? []);
}
function parseUniqueGitOrigins(origins: GitOrigin[]) {
  const seen = new Set<string>();
  const repositories: OwnerRepo[] = [];
  for (const { originUrl } of origins) {
    if (!originUrl) continue;
    const parsed = parseOwnerRepo(originUrl);
    if (!parsed) continue;
    const key = `${parsed.owner}/${parsed.repoName}`;
    if (seen.has(key)) continue;
    seen.add(key);
    repositories.push(parsed);
  }
  return repositories;
}
function createTaskRequest(input: CreateTaskInput) {
  const newTask: Record<string, unknown> = {
    branch: input.ref,
    environment_id: input.environmentId,
    run_environment_in_qa_mode: input.runEnvironmentInQaMode,
  };
  if (input.environment != null) newTask.environment = input.environment;
  if (input.environmentId == null) delete newTask.environment_id;
  return codexRequest.safePost("/wham/tasks", {
    requestBody: {
      input_items: buildTaskInputItems(input, true),
      ...(input.modelSlug
        ? {
            metadata: {
              model_slug: input.modelSlug,
            },
          }
        : {}),
      new_task: newTask,
    },
  });
}
function createFollowUpTaskRequest(input: FollowUpTaskInput) {
  return codexRequest.safePost("/wham/tasks", {
    requestBody: {
      follow_up: {
        environment_mode: input.runEnvironmentInQaMode ? "ask" : "code",
        task_id: input.taskId,
        turn_id: input.turnId,
      },
      input_items: buildTaskInputItems(input, false),
      ...(input.modelSlug
        ? {
            metadata: {
              model_slug: input.modelSlug,
            },
          }
        : {}),
    },
  });
}
function buildTaskInputItems(
  input: Pick<
    CreateTaskInput,
    | "commentAttachments"
    | "ideContext"
    | "images"
    | "modelSlug"
    | "prompt"
    | "startingDiff"
  > & {
    priorConversation?: CreateTaskInput["priorConversation"];
  },
  includeStartingContext: boolean,
) {
  const inputItems: unknown[] = [];
  if (input.ideContext) {
    inputItems.push({
      context: input.ideContext,
      type: "ide_context",
    });
  }
  inputItems.push({
    content: [
      {
        content_type: "text",
        text: input.prompt,
      },
    ],
    role: "user",
    type: "message",
  });
  for (const image of input.images ?? []) inputItems.push(image);
  if (includeStartingContext && input.startingDiff) {
    inputItems.push({
      output_diff: {
        diff: input.startingDiff,
      },
      type: "pre_apply_patch",
    });
  }
  if (includeStartingContext && input.priorConversation?.conversation?.length) {
    inputItems.push({
      conversation: input.priorConversation.conversation,
      diff: input.priorConversation.diff,
      type: "prior_conversation",
    });
  }
  for (const attachment of input.commentAttachments ?? []) {
    inputItems.push(serializeCodexCommentAttachment(attachment));
  }
  return inputItems;
}
function serializeCodexCommentAttachment(attachment: CommentAttachment) {
  return serializeCommentAttachmentInputItem(attachment);
}
function createPullRequestForTurn(input: CreatePullRequestInput) {
  return codexRequest.safePost(
    "/wham/tasks/{task_id}/turns/{task_turn_id}/pr",
    {
      parameters: {
        path: {
          task_id: input.taskId,
          task_turn_id: input.turnId,
        },
      },
      requestBody: {
        add_codex_tag: input.addCodexTag,
        additional_labels: input.additionalLabels,
        hide_pr_title_and_body: input.hidePrTitleAndBody,
        mode: input.mode,
      },
    },
  );
}
function createReferralInvite(input: CreateReferralInviteInput) {
  return codexRequest.safePost("/wham/referrals/invite", {
    requestBody: {
      emails: input.emails,
      referral_key: input.referralKey,
    },
  });
}
function fetchPersistentReferralInviteEligibility() {
  return codexRequest.safeGet("/referrals/invite/eligibility", {
    parameters: {
      query: {
        referral_key: PERSISTENT_REFERRAL_INVITE_KEY,
      },
    },
  });
}
function consumeRateLimitResetCredit({
  creditId,
  redeemRequestId,
}: ConsumeRateLimitResetCreditInput) {
  return codexRequest.safePost("/wham/rate-limit-reset-credits/consume", {
    requestBody: {
      credit_id: creditId,
      redeem_request_id: redeemRequestId,
    },
  });
}
async function cancelTask(taskId: string) {
  await codexRequest.safePost("/wham/tasks/{task_id}/cancel", {
    parameters: {
      path: {
        task_id: taskId,
      },
    },
  });
}
function searchRepositoryBranches(
  repositoryId: string,
  query: string,
  pageSize: number = 20,
  cursor: string | null = null,
) {
  return codexRequest.safeGet("/wham/github/branches/{repo_id}/search", {
    parameters: {
      path: {
        repo_id: `github-${repositoryId}`,
      },
      query: {
        cursor,
        page_size: pageSize,
        query,
      },
    },
  });
}
function fetchAccountCheck(): Promise<AccountCheckResponse> {
  return codexRequest.safeGet(
    "/wham/accounts/check",
  ) as Promise<AccountCheckResponse>;
}
function createOrderByModule() {
  return orderByCollection;
}
function orderByCollection<TValue>(
  collection:
    | ArrayLike<TValue>
    | Record<PropertyKey, TValue>
    | null
    | undefined,
  iteratees: Array<string | number | symbol | ((value: TValue) => unknown)>,
  orders?: string[] | string | null,
  guard?: unknown,
) {
  const normalizedIteratees =
    iteratees == null ? [] : Array.isArray(iteratees) ? iteratees : [iteratees];
  const normalizedOrders =
    guard || orders == null ? [] : Array.isArray(orders) ? orders : [orders];
  return baseOrderBy(collection, normalizedIteratees, normalizedOrders);
}
export {
  createTaskQueryOptions,
  useAccountCheckQuery,
  createOrderByModule,
  parseUniqueGitOrigins,
  PERSISTENT_REFERRAL_INVITE_KEY,
};
