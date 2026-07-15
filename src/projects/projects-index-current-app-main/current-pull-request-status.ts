// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~projects-index-page-px21igmO.js
// Current projects index pull request status helpers.

import { getPullRequestStatus } from "../../github/pull-request-status-utils";
import type { PullRequestStatus, UnknownRecord } from "./types";

function asRecord(value: unknown): UnknownRecord | null {
  return value != null && typeof value === "object" && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null;
}

export function getProjectIndexPullRequestStatus(pullRequest: {
  draft?: boolean;
  merged?: boolean;
  state: string;
}): PullRequestStatus {
  return getPullRequestStatus(pullRequest);
}

export function getProjectIndexTaskPullRequestStatus(
  taskRow: unknown,
): PullRequestStatus | null {
  const row = asRecord(taskRow);
  const task = asRecord(row?.task);
  const pullRequests = task?.pull_requests;
  if (!Array.isArray(pullRequests)) return null;

  const firstPullRequest = asRecord(pullRequests[0]);
  const pullRequest = asRecord(firstPullRequest?.pull_request);
  return typeof pullRequest?.state === "string"
    ? getProjectIndexPullRequestStatus({
        draft: pullRequest.draft === true,
        merged: pullRequest.merged === true,
        state: pullRequest.state,
      })
    : null;
}
