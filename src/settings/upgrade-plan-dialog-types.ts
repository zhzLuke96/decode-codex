// Restored from ref/webview/assets/upgrade-plan-dialog-CtSyWdd4.js
// Shared types for the upgrade-plan dialog split modules.
import type { MouseEvent, ReactNode } from "react";

import { Sku } from "../utils/skus";
import type { IntlShape } from "../vendor/react-intl";

export type PlanSku = (typeof Sku)[keyof typeof Sku];
export type ConsumerPlanSku =
  | typeof Sku.FREE
  | typeof Sku.GO
  | typeof Sku.PLUS
  | typeof Sku.PROLITE
  | typeof Sku.PRO;
export type PaidConsumerPlanSku =
  | typeof Sku.GO
  | typeof Sku.PLUS
  | typeof Sku.PROLITE
  | typeof Sku.PRO;
export type ProPlanSku = typeof Sku.PROLITE | typeof Sku.PRO;
export type UpgradePlanDefaultTab = "business" | "personal";
export type PlanChangeAction = "current" | "downgrade" | "upgrade";
export type PlanFeature = {
  icon: ReactNode;
  label: ReactNode;
};
export type PricingIntl = IntlShape & {
  formatNumberToParts(
    value: number,
    options?: Intl.NumberFormatOptions,
  ): Intl.NumberFormatPart[];
};
export type UpgradePlanPricingInfo = {
  businessCurrencyCode: string;
  businessMinorUnitExponent?: number | null;
  currencyCode: string;
  minorUnitExponent?: number | null;
  monthlyAmounts: {
    business: number | null;
    free: number | null;
    go: number | null;
    plus: number | null;
    pro: number | null;
    prolite: number | null;
  };
};
export type UpgradePlanUrlHandler = (
  url: string,
  targetPlan: PlanSku | undefined,
  event?: MouseEvent<HTMLButtonElement>,
) => void;
export type UpgradePlanCtaHandler = (
  action: PlanChangeAction,
  targetPlan: PlanSku,
) => void;
