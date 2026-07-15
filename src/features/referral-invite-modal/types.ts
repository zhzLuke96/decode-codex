// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Shared types for the Codex referral invite modal.

export type ReferralGrantType =
  | "rate_limit_reset_credit"
  | "workspace_credits"
  | null
  | undefined;
export type ReferralRewardType = "credits" | "rateLimitReset";
export type ReferralInviteModalProps = {
  grantAmount?: number;
  hasReachedReferralLimit?: boolean;
  hasReachedWorkspaceReferralLimit?: boolean;
  isPersonalAccount?: boolean;
  onClose: () => void;
  referralBeaconType?: string;
  referralGrantType?: ReferralGrantType;
  referralKey: string;
  referralRedemptionAction?: string;
  remainingReferrals?: number | null;
};
export type SubmissionState =
  | "idle"
  | "submitting"
  | "sendAnimation"
  | "success";
export type FeedbackState =
  | {
      message: string;
      reason: "failedInvite" | "invalidEmails" | "maxEmails";
      type: "error";
    }
  | {
      emails: string[];
      type: "success";
    }
  | null;
export type ReferralEligibilityTimeFrameRule = {
  invites_sent: number;
  invites_total: number;
  type: "user" | "workspace" | string;
};
export type ReferralEligibilityRulesResponse = {
  requires_explicit_confirmation?: boolean;
  rules: string[];
  time_frame_rules: ReferralEligibilityTimeFrameRule[];
};
export type ReferralInviteMutationResult = {
  invites: Array<{
    email: string;
  }>;
};
export type ReferralLimitScope = "user" | "workspace";
export type ReferralBackendErrorAnalytics = {
  errorResponsibility: unknown;
  errorType: unknown;
  hasBackendDetail: boolean;
  httpStatus?: number;
};
export type ParsedReferralBackendError = {
  backendErrorAnalytics: ReferralBackendErrorAnalytics;
  failedEmails?: string[];
  message?: string;
};
export type ReferralInviteEventPayload = Record<string, unknown>;
export type ProductLogger = {
  logProductEvent: (
    eventDefinition: unknown,
    payload: ReferralInviteEventPayload,
  ) => void;
};
export type IntlFormatter = {
  formatMessage: (
    descriptor: {
      defaultMessage: string;
      description?: string;
      id: string;
    },
    values?: Record<string, unknown>,
  ) => string;
};
