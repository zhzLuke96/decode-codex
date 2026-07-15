// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js
// Determines whether the current user is eligible to be shown upgrade CTAs.

export interface UpgradeEligibilityInput {
  authMethod: string | null | undefined;
  email: string | null | undefined;
  plan: string | null | undefined;
}

const UPGRADE_ELIGIBLE_PLANS = [
  "plus",
  "pro",
  "business",
  "team",
  "self_serve_business_usage_based",
];

function isOpenAiEmail(email: string | null | undefined): boolean {
  return email?.toLowerCase().endsWith("@openai.com") === true;
}

function isChatgptUpgradeEligible({
  email,
  plan,
}: Pick<UpgradeEligibilityInput, "email" | "plan">): boolean {
  return (
    isOpenAiEmail(email) ||
    UPGRADE_ELIGIBLE_PLANS.some((eligiblePlan) => eligiblePlan === plan)
  );
}

export function useIsUpgradeEligible({
  authMethod,
  email,
  plan,
}: UpgradeEligibilityInput): boolean {
  return authMethod === "apikey"
    ? true
    : authMethod === "chatgpt"
      ? isChatgptUpgradeEligible({ email, plan })
      : false;
}
