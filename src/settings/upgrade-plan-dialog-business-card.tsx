// Restored from ref/webview/assets/upgrade-plan-dialog-CtSyWdd4.js
// Business plan card and per-seat price helper.
import type { MouseEvent, ReactNode } from "react";

import { Button } from "../ui/button";
import { formatPlanPrice } from "../utils/plan-pricing";
import { Sku } from "../utils/skus";
import { FormattedMessage } from "../vendor/react-intl";
import {
  PlanCardFrame,
  PlanDetailsLink,
} from "./upgrade-plan-dialog-card-frame";
import type {
  PlanChangeAction,
  PlanFeature,
  PlanSku,
  PricingIntl,
  UpgradePlanPricingInfo,
} from "./upgrade-plan-dialog-types";

type BusinessPlanCardProps = {
  cta: ReactNode;
  description: ReactNode;
  features: PlanFeature[];
  getPlansUrl: () => string;
  onCtaClick(action: PlanChangeAction, targetPlan: PlanSku): void;
  onOpenUrl(
    url: string,
    targetPlan: PlanSku | undefined,
    event?: MouseEvent<HTMLButtonElement>,
  ): void;
  planDetailsLabel: ReactNode;
  priceLabel: ReactNode;
  purchaseUrl: string;
  subtitle: ReactNode;
  targetPlan: PlanSku;
  title: ReactNode;
};

export function BusinessPlanCard({
  cta,
  description,
  features,
  getPlansUrl,
  onCtaClick,
  onOpenUrl,
  planDetailsLabel,
  priceLabel,
  purchaseUrl,
  subtitle,
  targetPlan,
  title,
}: BusinessPlanCardProps) {
  return (
    <PlanCardFrame
      highlighted={targetPlan === Sku.SELF_SERVE_BUSINESS}
      title={title}
      subtitle={subtitle}
      priceLabel={priceLabel}
      priceLabelSize="compact"
      description={description}
      features={features}
      featureSlotCount={4}
      detailsLink={
        <PlanDetailsLink
          detailsLabel={planDetailsLabel}
          getPlansUrl={getPlansUrl}
          onOpenUrl={onOpenUrl}
        />
      }
      footer={
        <Button
          className="w-full justify-center"
          size="large"
          onClick={(event) => {
            onCtaClick("upgrade", targetPlan);
            onOpenUrl(purchaseUrl, targetPlan, event);
          }}
        >
          {cta}
        </Button>
      }
    />
  );
}

export function formatBusinessSeatPrice({
  intl,
  pricingInfo,
}: {
  intl: PricingIntl;
  pricingInfo: UpgradePlanPricingInfo | null;
}) {
  if (pricingInfo == null) return null;

  const formattedPrice = formatPlanPrice({
    intl,
    amount: pricingInfo.monthlyAmounts.business,
    currencyCode: pricingInfo.businessCurrencyCode,
    minorUnitExponent: pricingInfo.businessMinorUnitExponent,
  });

  return formattedPrice == null ? null : (
    <FormattedMessage
      id="settings.usage.upgradePlan.business.team.price"
      defaultMessage="{price} / user / month"
      description="Localized monthly per-user price for the ChatGPT and Codex Business plan"
      values={{
        price: formattedPrice,
      }}
    />
  );
}
