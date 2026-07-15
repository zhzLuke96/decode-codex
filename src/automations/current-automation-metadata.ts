// Restored from ref/webview/assets/automations-page-CXHLOmAw.js
import {
  currentAppInitialSharedMember0459 as automationFailureReasonCodes,
  currentAppInitialSharedMember0690 as automationDeleteStatusCodes,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

type AutomationDraftStatus = "ACTIVE" | "PAUSED" | "DELETED";

type AutomationStatusRecord = {
  status: string;
};

type PreviousAutomationSnapshot = {
  items: unknown[];
};

export type AutomationRestoreSnapshot = {
  previousAutomations?: PreviousAutomationSnapshot;
  previousDraftStatus: AutomationDraftStatus | null;
};

export type AutomationDeleteStatus =
  | "deleted"
  | "not_found"
  | "invalid_id"
  | "store_unavailable"
  | "state_cleanup_failed"
  | "remove_failed";

export type AutomationDeleteAnalyticsMetadata = {
  deleteStatus?: unknown;
  failureReason?: unknown;
};

export function filterDeletedAutomation<
  TAutomation extends AutomationStatusRecord,
>(automation: TAutomation): TAutomation | null {
  return automation.status === "DELETED" ? null : automation;
}

export function parseAutomationRestoreSnapshot(
  value: unknown,
): AutomationRestoreSnapshot | null {
  if (typeof value !== "object" || value == null) return null;

  const record = value as Record<string, unknown>;
  let previousAutomations: PreviousAutomationSnapshot | undefined;
  let previousDraftStatus: AutomationDraftStatus | null = null;

  const previousAutomationsValue = record.previousAutomations;
  if (
    typeof previousAutomationsValue === "object" &&
    previousAutomationsValue != null
  ) {
    const previousAutomationsRecord = previousAutomationsValue as Record<
      string,
      unknown
    >;
    if (Array.isArray(previousAutomationsRecord.items)) {
      previousAutomations = {
        items: previousAutomationsRecord.items,
      };
    }
  }

  if ("previousDraftStatus" in record) {
    previousDraftStatus = parseAutomationDraftStatus(
      record.previousDraftStatus,
    );
  }

  return previousAutomations == null && previousDraftStatus == null
    ? null
    : {
        previousAutomations,
        previousDraftStatus,
      };
}

export function buildAutomationDeleteAnalyticsMetadata({
  status,
  success,
}: {
  status: AutomationDeleteStatus;
  success: boolean;
}): AutomationDeleteAnalyticsMetadata | undefined {
  let deleteStatus: unknown;

  if (status === "deleted") {
    deleteStatus =
      automationDeleteStatusCodes.CODEX_AUTOMATION_DELETE_STATUS_DELETED;
  } else if (status === "not_found") {
    deleteStatus =
      automationDeleteStatusCodes.CODEX_AUTOMATION_DELETE_STATUS_NOT_FOUND;
  }

  if (success || status === "deleted") {
    return deleteStatus == null ? {} : { deleteStatus };
  }

  switch (status) {
    case "not_found":
      return {
        deleteStatus,
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION,
      };
    case "invalid_id":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_INVALID_ID,
      };
    case "store_unavailable":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_STORAGE_UNAVAILABLE,
      };
    case "state_cleanup_failed":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_STATE_CLEANUP_FAILED,
      };
    case "remove_failed":
      return {
        failureReason:
          automationFailureReasonCodes.CODEX_AUTOMATION_FAILURE_REASON_REMOVE_FAILED,
      };
  }
}

function parseAutomationDraftStatus(
  value: unknown,
): AutomationDraftStatus | null {
  switch (value) {
    case "ACTIVE":
    case "PAUSED":
    case "DELETED":
      return value;
    default:
      return null;
  }
}
