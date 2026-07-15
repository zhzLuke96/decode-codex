// Restored from ref/webview/assets/subscription-update-plan-D2uMfgET.js
// subscription-update-plan-D2uMfgET chunk restored from the Codex webview bundle.
import { Sku } from "../../utils/skus";
import type { SubscriptionPlanId } from "./types";
export function subscriptionPlanIdToSku(
  planId: SubscriptionPlanId,
): (typeof Sku)[keyof typeof Sku] | undefined {
  switch (planId) {
    case "chatgptplusplan":
      return Sku.PLUS;
    case "chatgptprolite":
      return Sku.PROLITE;
    case "chatgptpro":
      return Sku.PRO;
  }
}
export function skuToSubscriptionPlanId(
  sku: (typeof Sku)[keyof typeof Sku],
): SubscriptionPlanId | undefined {
  switch (sku) {
    case Sku.PLUS:
      return "chatgptplusplan";
    case Sku.PROLITE:
      return "chatgptprolite";
    case Sku.PRO:
      return "chatgptpro";
  }
}
export function getSubscriptionPlanLabel(planId: SubscriptionPlanId): string {
  switch (planId) {
    case "chatgptplusplan":
      return "Plus";
    case "chatgptprolite":
      return "Pro 5x";
    case "chatgptpro":
      return "Pro 20x";
  }
}
