// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Backend error parsing and analytics bucketing for referral invite failures.

import { _vscodeApiC as VscodeApiError } from "../../boundaries/vscode-api";
import {
  _productLoggerJn as referralInviteBackendErrorType,
  productLoggerYn as referralInviteErrorResponsibility,
} from "../../analytics/product-logger";
import type {
  ParsedReferralBackendError,
  ReferralBackendErrorAnalytics,
} from "./types";
type ReferralVscodeApiError = Error & {
  status?: number;
};
type BackendDetailObject = {
  failed_emails?: unknown;
  message?: unknown;
};
export function parseReferralInviteBackendError(
  error: unknown,
): ParsedReferralBackendError | null {
  if (!(error instanceof VscodeApiError)) return null;
  const apiError = error as ReferralVscodeApiError;
  try {
    const parsedBody = JSON.parse(apiError.message) as {
      detail?: unknown;
    };
    const detail = isObject(parsedBody) ? parsedBody.detail : undefined;
    const hasBackendDetail = detail != null;
    if (typeof detail === "string") {
      return {
        backendErrorAnalytics: createBackendErrorAnalytics({
          hasBackendDetail,
          message: detail,
          status: apiError.status,
        }),
        failedEmails: undefined,
        message: detail,
      };
    }
    const detailObject = isObject(detail)
      ? (detail as BackendDetailObject)
      : undefined;
    const message =
      typeof detailObject?.message === "string"
        ? detailObject.message
        : undefined;
    return {
      backendErrorAnalytics: createBackendErrorAnalytics({
        hasBackendDetail,
        message,
        status: apiError.status,
      }),
      failedEmails: readFailedEmails(detailObject?.failed_emails),
      message,
    };
  } catch {
    return {
      backendErrorAnalytics: createBackendErrorAnalytics({
        hasBackendDetail: false,
        status: apiError.status,
      }),
      failedEmails: undefined,
      message: undefined,
    };
  }
}
function readFailedEmails(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const emails = value.filter(
    (item): item is string => typeof item === "string",
  );
  return emails.length > 0 ? emails : undefined;
}
function createBackendErrorAnalytics({
  hasBackendDetail,
  message,
  status,
}: {
  hasBackendDetail: boolean;
  message?: string;
  status?: number;
}): ReferralBackendErrorAnalytics {
  const errorType = inferBackendErrorType({
    message,
    status,
  });
  return {
    errorResponsibility: inferErrorResponsibility(errorType),
    errorType,
    hasBackendDetail,
    httpStatus: status,
  };
}
function inferBackendErrorType({
  message,
  status,
}: {
  message?: string;
  status?: number;
}) {
  if (isReferralAlreadyExistsMessage(message)) {
    return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS;
  }
  if (status === 400) {
    return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_VALIDATION_FAILED;
  }
  if (status === 401) {
    return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_AUTHENTICATION_REQUIRED;
  }
  if (status === 403) {
    return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_PERMISSION_DENIED;
  }
  if (status === 409) {
    return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS;
  }
  if (status === 429) {
    return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_RATE_LIMITED;
  }
  if (typeof status === "number" && status >= 500 && status < 600) {
    return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_BACKEND_ISSUE;
  }
  return referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNKNOWN_BACKEND_ERROR;
}
function inferErrorResponsibility(errorType: unknown): unknown {
  switch (errorType) {
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_AUTHENTICATION_REQUIRED:
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_PERMISSION_DENIED:
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_RATE_LIMITED:
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS:
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_VALIDATION_FAILED:
      return referralInviteErrorResponsibility.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_USER;
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_BACKEND_ISSUE:
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNKNOWN_BACKEND_ERROR:
      return referralInviteErrorResponsibility.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_SYSTEM;
    case referralInviteBackendErrorType.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNSPECIFIED:
    case referralInviteBackendErrorType.UNRECOGNIZED:
      return referralInviteErrorResponsibility.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_UNSPECIFIED;
    default:
      return referralInviteErrorResponsibility.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_UNSPECIFIED;
  }
}
function isReferralAlreadyExistsMessage(message: string | undefined): boolean {
  return message == null
    ? false
    : /already/i.test(message) && /(referral|invite)/i.test(message);
}
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
