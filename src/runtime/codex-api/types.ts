// Restored from ref/webview/assets/codex-api-AUWtp9Y7.js

export type QueryEnabledOptions = {
  enabled?: boolean;
};
export type TaskListOptions = QueryEnabledOptions & {
  environmentLabel?: string;
  limit?: number;
  taskFilter?: string;
};
export type RefetchOptions = QueryEnabledOptions & {
  refetchInterval?: number | false | ((query: unknown) => number | false);
};
export type TaskRecord = {
  id?: string;
  task_id?: string;
  task_status_display?: {
    environment_label?: string | null;
    latest_turn_status_display?: {
      turn_status?: string | null;
    } | null;
  } | null;
};
export type CloudEnvironmentRecord = {
  id?: string;
  environment_id?: string;
  is_pinned?: boolean;
  label: string;
  repos?: string[];
  task_count?: number;
};
export type GitOrigin = {
  originUrl?: string | null;
};
export type OwnerRepo = {
  owner: string;
  repoName: string;
};
export type CommentAttachment = unknown;
export type CreateTaskInput = {
  commentAttachments?: CommentAttachment[];
  environment?: unknown;
  environmentId?: string | null;
  ideContext?: unknown;
  images?: unknown[];
  modelSlug?: string | null;
  priorConversation?: {
    conversation?: unknown[];
    diff?: unknown;
  } | null;
  prompt: string;
  ref?: string | null;
  runEnvironmentInQaMode?: boolean;
  startingDiff?: string | null;
};
export type FollowUpTaskInput = {
  commentAttachments?: CommentAttachment[];
  ideContext?: unknown;
  images?: unknown[];
  modelSlug?: string | null;
  prompt: string;
  runEnvironmentInQaMode?: boolean;
  taskId: string;
  turnId: string;
};
export type CreatePullRequestInput = {
  addCodexTag?: boolean;
  additionalLabels?: string[];
  hidePrTitleAndBody?: boolean;
  mode?: string;
  taskId: string;
  turnId: string;
};
export type CreateReferralInviteInput = {
  emails: string[];
  referralKey: string;
};
export type ConsumeRateLimitResetCreditInput = {
  creditId: string;
  redeemRequestId: string;
};
export type UploadSnapshotUrlInput = {
  anticipatedFileSize: number;
  contentType: string;
  filename: string;
  repoName: string;
};
export type FinishSnapshotUploadInput = {
  etag: string;
  fileId: string;
};
export type AccountCheckResponse = {
  account_ordering?: string[];
  accounts?: Array<{
    id?: string;
    [key: string]: unknown;
  }>;
};
