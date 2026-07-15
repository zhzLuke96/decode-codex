// Restored from ref/webview/assets/automatic-approval-review-Cv04Ul6t.js
// Formats automatic approval review titles, summaries, and action labels.
import React from "react";
import { defineMessages, type IntlShape } from "react-intl";
type UseEffectEvent = <Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
) => (...args: Args) => Return;
type AutomaticApprovalReviewStatus =
  | "inProgress"
  | "approved"
  | "denied"
  | "timedOut"
  | "aborted";
type AutomaticApprovalReview = {
  rationale?: string | null;
  riskLevel?: string | null;
  status: AutomaticApprovalReviewStatus;
};
type AutomaticApprovalReviewAction =
  | {
      command: string;
      type: "command";
    }
  | {
      argv: string[];
      program: string;
      type: "execve";
    }
  | {
      files: string[];
      type: "applyPatch";
    }
  | {
      target: string;
      type: "networkAccess";
    }
  | {
      connectorName?: string | null;
      server: string;
      toolName: string;
      type: "mcpToolCall";
    }
  | {
      reason?: string | null;
      type: "requestPermissions";
    };
const useEffectEvent = (
  React as typeof React & {
    useEffectEvent: UseEffectEvent;
  }
).useEffectEvent;

export function initAutomaticApprovalReviewMessagesChunk(): void {}

const automaticApprovalReviewMessages = defineMessages({
  actionSummaryEditingFile: {
    id: "localConversation.automaticApprovalReview.actionSummary.editingFile",
    defaultMessage: "Editing {file}",
    description:
      "Action summary shown when auto-review is evaluating an edit to one file.",
  },
  actionSummaryEditingFiles: {
    id: "localConversation.automaticApprovalReview.actionSummary.editingFiles",
    defaultMessage: "Editing {fileCount, plural, one {a file} other {# files}}",
    description:
      "Action summary shown when auto-review is evaluating edits to multiple files.",
  },
  actionSummaryMcpToolCall: {
    id: "localConversation.automaticApprovalReview.actionSummary.mcpToolCall",
    defaultMessage: "MCP {toolName} on {connector}",
    description:
      "Action summary shown when auto-review is evaluating an MCP tool call.",
  },
  actionSummaryNetworkAccess: {
    id: "localConversation.automaticApprovalReview.actionSummary.networkAccess",
    defaultMessage: "Network access to {target}",
    description:
      "Action summary shown when auto-review is evaluating a network access request.",
  },
  actionSummaryPermissionRequest: {
    id: "localConversation.automaticApprovalReview.actionSummary.permissionRequest",
    defaultMessage: "Permission request",
    description:
      "Action summary shown when auto-review is evaluating a permission request without a reason.",
  },
  actionSummaryPermissionRequestWithReason: {
    id: "localConversation.automaticApprovalReview.actionSummary.permissionRequestWithReason",
    defaultMessage: "Permission request: {reason}",
    description:
      "Action summary shown when auto-review is evaluating a permission request with a reason.",
  },
  actionSummaryRequest: {
    id: "localConversation.automaticApprovalReview.actionSummary.request",
    defaultMessage: "Request",
    description:
      "Fallback action summary shown when an automatic approval review has no action payload.",
  },
  summaryInProgress: {
    id: "localConversation.automaticApprovalReview.summary.inProgress",
    defaultMessage:
      "A carefully prompted reviewer agent is reviewing this request before Codex runs it.",
    description:
      "Fallback summary shown while an automatic approval review is in progress.",
  },
  summaryAborted: {
    id: "localConversation.automaticApprovalReview.summary.aborted",
    defaultMessage:
      "A carefully prompted reviewer agent stopped reviewing this request before Codex ran it.",
    description:
      "Fallback summary shown when an automatic approval review is aborted before the action runs.",
  },
  summaryTimedOut: {
    id: "localConversation.automaticApprovalReview.summary.timedOut",
    defaultMessage:
      "A carefully prompted reviewer agent timed out before Codex ran this request.",
    description:
      "Fallback summary shown when an automatic approval review times out before the action runs.",
  },
  summaryCompleted: {
    id: "localConversation.automaticApprovalReview.summary.completed",
    defaultMessage:
      "A carefully prompted reviewer agent reviewed this request.",
    description:
      "Fallback summary shown when an automatic approval review completes without a rationale.",
  },
  titleInProgress: {
    id: "localConversation.automaticApprovalReview.title.inProgress",
    defaultMessage: "Auto-reviewing",
    description:
      "Primary title shown while an automatic approval review is in progress.",
  },
  titleApproved: {
    id: "localConversation.automaticApprovalReview.title.approved",
    defaultMessage: "Auto-review approved",
    description:
      "Primary title shown when an automatic approval review approves an action.",
  },
  titleDenied: {
    id: "localConversation.automaticApprovalReview.title.denied",
    defaultMessage: "Auto-review denied",
    description:
      "Primary title shown when an automatic approval review denies an action.",
  },
  titleDeniedHighRisk: {
    id: "localConversation.automaticApprovalReview.title.deniedHighRisk",
    defaultMessage: "Auto-review denied high risk",
    description:
      "Primary title shown when an automatic approval review denies a high-risk action.",
  },
  titleTimedOut: {
    id: "localConversation.automaticApprovalReview.title.timedOut",
    defaultMessage: "Auto-review timed out",
    description:
      "Primary title shown when an automatic approval review times out.",
  },
  titleAborted: {
    id: "localConversation.automaticApprovalReview.title.aborted",
    defaultMessage: "Auto-review stopped",
    description:
      "Primary title shown when an automatic approval review is aborted.",
  },
});
function useAutomaticApprovalReviewInterval(
  callback: () => void,
  intervalMs: number | null | undefined,
) {
  const runCallback = useEffectEvent(callback);
  React.useEffect(() => {
    if (intervalMs == null) return;
    const intervalId = window.setInterval(() => {
      runCallback();
    }, intervalMs);
    return () => {
      window.clearInterval(intervalId);
    };
  }, [intervalMs]);
}
function getAutomaticApprovalReviewTitle(
  intl: IntlShape,
  review: AutomaticApprovalReview,
) {
  switch (review.status) {
    case "inProgress":
      return intl.formatMessage(
        automaticApprovalReviewMessages.titleInProgress,
      );
    case "approved":
      return intl.formatMessage(automaticApprovalReviewMessages.titleApproved);
    case "denied":
      return review.riskLevel === "high"
        ? intl.formatMessage(
            automaticApprovalReviewMessages.titleDeniedHighRisk,
          )
        : intl.formatMessage(automaticApprovalReviewMessages.titleDenied);
    case "timedOut":
      return intl.formatMessage(automaticApprovalReviewMessages.titleTimedOut);
    case "aborted":
      return intl.formatMessage(automaticApprovalReviewMessages.titleAborted);
  }
}
function getAutomaticApprovalReviewSummary(
  intl: IntlShape,
  review: AutomaticApprovalReview,
) {
  const rationale = review.rationale?.trim();
  if (rationale) return rationale;
  if (review.status === "inProgress") {
    return intl.formatMessage(
      automaticApprovalReviewMessages.summaryInProgress,
    );
  }
  if (review.status === "aborted") {
    return intl.formatMessage(automaticApprovalReviewMessages.summaryAborted);
  }
  if (review.status === "timedOut") {
    return intl.formatMessage(automaticApprovalReviewMessages.summaryTimedOut);
  }
  return intl.formatMessage(automaticApprovalReviewMessages.summaryCompleted);
}
function getAutomaticApprovalReviewActionSummary(
  intl: IntlShape,
  action: AutomaticApprovalReviewAction | null | undefined,
) {
  if (action == null) {
    return intl.formatMessage(
      automaticApprovalReviewMessages.actionSummaryRequest,
    );
  }
  switch (action.type) {
    case "command":
      return action.command;
    case "execve":
      return [action.program, ...action.argv].join(" ");
    case "applyPatch":
      return action.files.length === 1
        ? intl.formatMessage(
            automaticApprovalReviewMessages.actionSummaryEditingFile,
            {
              file: action.files[0],
            },
          )
        : intl.formatMessage(
            automaticApprovalReviewMessages.actionSummaryEditingFiles,
            {
              fileCount: action.files.length,
            },
          );
    case "networkAccess":
      return intl.formatMessage(
        automaticApprovalReviewMessages.actionSummaryNetworkAccess,
        {
          target: action.target,
        },
      );
    case "mcpToolCall":
      return intl.formatMessage(
        automaticApprovalReviewMessages.actionSummaryMcpToolCall,
        {
          connector: action.connectorName ?? action.server,
          toolName: action.toolName,
        },
      );
    case "requestPermissions":
      return action.reason == null
        ? intl.formatMessage(
            automaticApprovalReviewMessages.actionSummaryPermissionRequest,
          )
        : intl.formatMessage(
            automaticApprovalReviewMessages.actionSummaryPermissionRequestWithReason,
            {
              reason: action.reason,
            },
          );
  }
}
export {
  useAutomaticApprovalReviewInterval,
  getAutomaticApprovalReviewSummary,
  getAutomaticApprovalReviewTitle,
  getAutomaticApprovalReviewActionSummary,
};
