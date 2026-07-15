// Restored from ref/webview/assets/plan-management-state-oe_4sqNh.js
// plan-management-state-oe_4sqNh chunk restored from the Codex webview bundle.
// Also covers ref/webview/assets/app-initial~app-main~remote-conversation-page~settings-page~hotkey-window-thread-page~usage~hc2m5m0u-Bxgc6LSO.js
import { Sku } from "../utils/skus";
const PLUS_PURCHASE_URL =
  "https://chatgpt.com/codex/purchase/plus?checkout_from=codex_app";
const GO_PURCHASE_URL =
  "https://chatgpt.com/codex/purchase/go?checkout_from=codex_app";
const PROLITE_PURCHASE_URL =
  "https://chatgpt.com/codex/purchase/pro5x?checkout_from=codex_app";
const PRO_PURCHASE_URL =
  "https://chatgpt.com/codex/purchase/pro?checkout_from=codex_app";
const CODEX_TEAM_PURCHASE_URL =
  "https://chatgpt.com/codex/purchase/codex_team?checkout_from=codex_app";
const TEAM_PURCHASE_URL =
  "https://chatgpt.com/codex/purchase/team?checkout_from=codex_app";
const BILLING_SETTINGS_URL = "https://chatgpt.com/#settings/Billing";
const IOS_SUBSCRIPTION_CANCELLATION_URL =
  "https://help.openai.com/en/articles/7905690-how-to-cancel-your-apple-subscription-for-chatgpt-in-the-chatgpt-ios-app";
const ANDROID_SUBSCRIPTION_CANCELLATION_URL =
  "https://help.openai.com/en/articles/8258076-how-to-cancel-a-subscription-in-the-chatgpt-android-app";
const CODEx_PLAN_RANK = {
  [Sku.FREE]: 0,
  [Sku.GO]: 1,
  [Sku.PLUS]: 2,
  [Sku.PROLITE]: 3,
  [Sku.PRO]: 4,
} as const;
function getMobileSubscriptionPlatform(subscriptionSource: string) {
  return subscriptionSource === "chatgpt_mobile_ios" ||
    subscriptionSource === "sora_mobile_ios"
    ? "ios"
    : subscriptionSource === "chatgpt_mobile_android"
      ? "android"
      : null;
}
function getCodexPlanDisplayState(plan: string) {
  if (!isCodexPlan(plan)) return null;
  switch (plan) {
    case Sku.FREE:
      return {
        displayPlan: "free",
        pricePlan: plan,
        cta: "upgrade",
      };
    case Sku.GO:
      return {
        displayPlan: "go",
        pricePlan: plan,
        cta: "upgrade",
      };
    case Sku.PLUS:
      return {
        displayPlan: "plus",
        pricePlan: plan,
        cta: "view",
      };
    case Sku.PROLITE:
    case Sku.PRO:
      return {
        displayPlan: "pro",
        pricePlan: plan,
        cta: "view",
      };
  }
}
function isPaidCodexPlan(plan: string) {
  return (
    plan === Sku.GO ||
    plan === Sku.PLUS ||
    plan === Sku.PROLITE ||
    plan === Sku.PRO
  );
}
function isCreditSettingsManageablePlan(plan: string) {
  return isPaidCodexPlan(plan) && plan !== Sku.GO;
}
function getPlanChangeKind({
  currentPlan,
  targetPlan,
}: {
  currentPlan: keyof typeof CODEx_PLAN_RANK;
  targetPlan: keyof typeof CODEx_PLAN_RANK;
}) {
  if (currentPlan === targetPlan) return "current";
  return CODEx_PLAN_RANK[targetPlan] < CODEx_PLAN_RANK[currentPlan]
    ? "downgrade"
    : "upgrade";
}
function getCodexPlanManagementUrl({
  currentPlan,
  targetPlan,
}: {
  currentPlan: keyof typeof CODEx_PLAN_RANK;
  targetPlan: keyof typeof CODEx_PLAN_RANK;
}) {
  const changeKind = getPlanChangeKind({
    currentPlan,
    targetPlan,
  });
  if (changeKind === "current") return null;
  if (changeKind === "downgrade") {
    return `https://chatgpt.com/codex/downgrade/${targetPlan === Sku.PROLITE ? "pro5x" : targetPlan}`;
  }
  return targetPlan === Sku.PLUS
    ? PLUS_PURCHASE_URL
    : targetPlan === Sku.GO
      ? GO_PURCHASE_URL
      : targetPlan === Sku.PROLITE
        ? PROLITE_PURCHASE_URL
        : PRO_PURCHASE_URL;
}
function isCodexPlan(plan: string) {
  return (
    plan === Sku.FREE ||
    plan === Sku.GO ||
    plan === Sku.PLUS ||
    plan === Sku.PROLITE ||
    plan === Sku.PRO
  );
}
function initPlanManagementStateChunk(): void {}
export {
  IOS_SUBSCRIPTION_CANCELLATION_URL,
  getCodexPlanDisplayState,
  CODEX_TEAM_PURCHASE_URL,
  getCodexPlanManagementUrl,
  BILLING_SETTINGS_URL,
  getMobileSubscriptionPlatform,
  TEAM_PURCHASE_URL,
  getPlanChangeKind,
  ANDROID_SUBSCRIPTION_CANCELLATION_URL,
  initPlanManagementStateChunk,
  isCreditSettingsManageablePlan,
  isPaidCodexPlan,
};
