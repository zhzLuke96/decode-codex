// Restored from ref/webview/assets/upgrade-plan-dialog-CtSyWdd4.js
// Personal plan cards and personal-plan price helpers.
import type { MouseEvent, ReactNode } from "react";

import { Button } from "../ui/button";
import { formatPlanPrice } from "../utils/plan-pricing";
import {
  getCodexPlanManagementUrl,
  getPlanChangeKind,
} from "../utils/plan-management-state";
import { Sku } from "../utils/skus";
import { FormattedMessage } from "../vendor/react-intl";
import {
  PlanCardFrame,
  PlanDetailsLink,
} from "./upgrade-plan-dialog-card-frame";
import type {
  ConsumerPlanSku,
  PlanChangeAction,
  PlanFeature,
  PlanSku,
  PricingIntl,
  ProPlanSku,
  UpgradePlanPricingInfo,
} from "./upgrade-plan-dialog-types";

type PersonalPlanCardProps = {
  currentPlan: PlanSku;
  features: PlanFeature[];
  getPlansUrl: () => string;
  isLoading?: boolean;
  onCtaClick(action: PlanChangeAction, targetPlan: PlanSku): void;
  onOpenUrl(
    url: string,
    targetPlan: PlanSku | undefined,
    event?: MouseEvent<HTMLButtonElement>,
  ): void;
  planDetailsLabel?: ReactNode;
  price: ReactNode;
  targetPlan: ConsumerPlanSku;
  title: ReactNode;
};

export function PersonalPlanCard({
  currentPlan,
  features,
  getPlansUrl,
  isLoading = false,
  onCtaClick,
  onOpenUrl,
  planDetailsLabel,
  price,
  targetPlan,
  title,
}: PersonalPlanCardProps) {
  const action = getConsumerPlanAction({ currentPlan, targetPlan });
  const planUrl = getConsumerPlanUrl({ currentPlan, targetPlan });
  const isHighlighted =
    (currentPlan === Sku.GO && targetPlan === Sku.PLUS) ||
    (currentPlan === Sku.PLUS && targetPlan === Sku.PROLITE);
  const detailsLink =
    planDetailsLabel == null ? null : (
      <PlanDetailsLink
        detailsLabel={planDetailsLabel}
        getPlansUrl={getPlansUrl}
        onOpenUrl={onOpenUrl}
      />
    );

  return (
    <PlanCardFrame
      highlighted={isHighlighted}
      title={title}
      priceLabel={price}
      features={features}
      featureSlotCount={3}
      detailsLink={detailsLink}
      footer={
        <Button
          className="w-full justify-center"
          color={action === "upgrade" ? "primary" : "outline"}
          disabled={action === "current"}
          loading={isLoading}
          size="large"
          onClick={(event) => {
            if (planUrl == null || action === "current") return;
            onCtaClick(action, targetPlan);
            onOpenUrl(planUrl, targetPlan, event);
          }}
        >
          {isLoading ? (
            <FormattedMessage
              id="settings.usage.upgradePlan.loadingPlanChange"
              defaultMessage="Loading…"
              description="Label shown in an upgrade plan button while loading its confirmation dialog"
            />
          ) : action === "current" ? (
            <FormattedMessage
              id="settings.usage.upgradePlan.current"
              defaultMessage="Current plan"
              description="Disabled CTA label for the user's current plan"
            />
          ) : action === "downgrade" ? (
            <FormattedMessage
              id="settings.usage.upgradePlan.downgrade"
              defaultMessage="Downgrade"
              description="CTA label for moving to a lower-tier plan"
            />
          ) : (
            <FormattedMessage
              id="settings.usage.upgradePlan.upgrade"
              defaultMessage="Upgrade plan"
              description="CTA label for moving to a higher-tier plan"
            />
          )}
        </Button>
      }
    />
  );
}

export function ProPlanTitle({ tier }: { tier: ReactNode }) {
  return (
    <div className="flex items-center gap-1">
      <FormattedMessage
        id="settings.usage.upgradePlan.personal.pro.title"
        defaultMessage="Pro"
        description="Title for the Pro personal plan card"
      />
      <span className="font-normal text-token-text-secondary">{tier}</span>
    </div>
  );
}

export function ProDetailsLabel({ plan }: { plan: ProPlanSku }) {
  return plan === Sku.PROLITE ? (
    <FormattedMessage
      id="settings.usage.upgradePlan.more.proLite"
      defaultMessage="View more details for Pro 5x plan"
      description="Screen reader label for the Pro 5x plan details link"
    />
  ) : (
    <FormattedMessage
      id="settings.usage.upgradePlan.more.pro"
      defaultMessage="View more details for Pro 20x plan"
      description="Screen reader label for the Pro 20x plan details link"
    />
  );
}

export function formatPersonalPlanPrice({
  intl,
  plan,
  pricingInfo,
}: {
  intl: PricingIntl;
  plan: ConsumerPlanSku;
  pricingInfo: UpgradePlanPricingInfo | null;
}) {
  if (pricingInfo == null) return null;
  return formatPlanPrice({
    intl,
    amount: pricingInfo.monthlyAmounts[plan],
    currencyCode: pricingInfo.currencyCode,
    minorUnitExponent: pricingInfo.minorUnitExponent,
  });
}

function getConsumerPlanAction({
  currentPlan,
  targetPlan,
}: {
  currentPlan: PlanSku;
  targetPlan: ConsumerPlanSku;
}): PlanChangeAction {
  if (!isConsumerPlan(currentPlan)) {
    return currentPlan === targetPlan ? "current" : "upgrade";
  }
  return getPlanChangeKind({ currentPlan, targetPlan });
}

function getConsumerPlanUrl({
  currentPlan,
  targetPlan,
}: {
  currentPlan: PlanSku;
  targetPlan: ConsumerPlanSku;
}): string | null {
  if (!isConsumerPlan(currentPlan)) {
    return targetPlan === Sku.FREE
      ? null
      : getCodexPlanManagementUrl({ currentPlan: Sku.FREE, targetPlan });
  }
  return getCodexPlanManagementUrl({ currentPlan, targetPlan });
}

function isConsumerPlan(plan: PlanSku): plan is ConsumerPlanSku {
  return (
    plan === Sku.FREE ||
    plan === Sku.GO ||
    plan === Sku.PLUS ||
    plan === Sku.PROLITE ||
    plan === Sku.PRO
  );
}
