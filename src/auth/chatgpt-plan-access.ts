// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Pure decision logic for whether the current ChatGPT-authenticated account may
// access a plan-gated surface, plus the set of supported plan types.

import { PlanType } from "../boundaries/onboarding-commons-externals.facade";

export interface ChatGptPlanAccessInput {
  accountId: string | null;
  accountLoading: boolean;
  authLoading: boolean;
  authMethod: string | null;
  authenticatedAccountId: string | null;
  plan: string | null;
  rolloutEnabled: boolean;
  supportedSurface: boolean;
}

export type ChatGptPlanAccessDeniedReason =
  | "missing-account"
  | "unsupported-plan"
  | "account-mismatch"
  | "not-chatgpt-auth"
  | "rollout-disabled"
  | "unsupported-surface";

export type ChatGptPlanAccessResult =
  | { status: "loading" }
  | { status: "allowed"; accountId: string; plan: string }
  | { status: "denied"; reason: ChatGptPlanAccessDeniedReason };

export const SUPPORTED_CHATGPT_PLAN_TYPES: readonly unknown[] = [
  PlanType.FREE,
  PlanType.GO,
  PlanType.PLUS,
  PlanType.PRO,
  PlanType.PROLITE,
  PlanType.SELF_SERVE_BUSINESS,
  PlanType.SELF_SERVE_BUSINESS_USAGE_BASED,
  PlanType.ENTERPRISE_CBP,
  PlanType.ENTERPRISE_CBP_USAGE_BASED,
  PlanType.ENTERPRISE_CBP_AUTOMATION,
  PlanType.FINSERV,
  PlanType.EDUCATION_CBP,
  PlanType.QUORUM,
  PlanType.DEPRECATED_ENTERPRISE,
  PlanType.HC,
  PlanType.DEPRECATED_ENTERPRISE_2,
  PlanType.DEPRECATED_EDU,
  PlanType.DEPRECATED_EDU_2,
];

export function isSupportedChatGptPlan(plan: string | null): boolean {
  return SUPPORTED_CHATGPT_PLAN_TYPES.some((supported) => supported === plan);
}

export function findAccountById<TAccount extends { id: string }>(
  accounts: readonly TAccount[] | null | undefined,
  accountId: string | null,
): TAccount | null {
  if (accountId == null) return null;
  return accounts?.find((account) => account.id === accountId) ?? null;
}

export function resolveChatGptPlanAccess(
  input: ChatGptPlanAccessInput,
): ChatGptPlanAccessResult {
  const {
    accountId,
    accountLoading,
    authLoading,
    authMethod,
    authenticatedAccountId,
    plan,
    rolloutEnabled,
    supportedSurface,
  } = input;

  if (!supportedSurface)
    return { status: "denied", reason: "unsupported-surface" };
  if (!rolloutEnabled) return { status: "denied", reason: "rollout-disabled" };
  if (authLoading && authMethod == null) return { status: "loading" };
  if (authMethod !== "chatgpt")
    return { status: "denied", reason: "not-chatgpt-auth" };
  if (accountLoading && (accountId == null || plan == null))
    return { status: "loading" };
  if (authenticatedAccountId == null || accountId == null) {
    return { status: "denied", reason: "missing-account" };
  }
  if (authenticatedAccountId !== accountId) {
    return { status: "denied", reason: "account-mismatch" };
  }
  if (plan == null || !isSupportedChatGptPlan(plan)) {
    return { status: "denied", reason: "unsupported-plan" };
  }
  return { status: "allowed", accountId, plan };
}
