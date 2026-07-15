// Restored from ref/webview/assets/subscription-update-plan-D2uMfgET.js
// subscription-update-plan-D2uMfgET chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
export type SubscriptionPlanId =
  | "chatgptplusplan"
  | "chatgptprolite"
  | "chatgptpro";
export type BillingPeriodOption = {
  id: string;
  label: ReactNode;
  ariaLabel?: string;
};
export type PlanBillingPeriodSegmentedControlProps = {
  ariaLabel: string;
  className?: string;
  options: BillingPeriodOption[];
  selectedId: string;
  onSelect(id: string): void;
};
export type SavedCardSubscriptionUpdate = {
  kind: "saved_card_upgrade";
  updatedPlan: SubscriptionPlanId;
  minorUnitExponent: number;
  paymentMethod: {
    card_brand?: string | null;
    card_last4?: string | null;
  };
  preview: {
    currency: string;
    positive_line_item_total: number;
    amount_due: {
      amount: number;
      amount_excluding_tax: number;
      tax_amount: number;
    };
  };
};
export type ScheduledDowngradeSubscriptionUpdate = {
  kind: "scheduled_downgrade";
  preview: {
    renewal_date?: string | null;
  };
};
export type SubscriptionUpdate =
  | SavedCardSubscriptionUpdate
  | ScheduledDowngradeSubscriptionUpdate;
export type PricingInfo = {
  currencyCode: string;
  minorUnitExponent?: number | null;
  monthlyAmounts: {
    prolite: number | null;
  };
};
export type SubscriptionUpdatePlanDialogProps = {
  isUpdating: boolean;
  onCancel(): void;
  onConfirm(): void;
  onGoToWeb(): void;
  onOpenChange(open: boolean): void;
  pricingInfo?: PricingInfo | null;
  subscriptionUpdate: SubscriptionUpdate;
};
