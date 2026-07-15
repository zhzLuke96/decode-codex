// Restored from ref/webview/assets/upgrade-plan-dialog-CtSyWdd4.js
// Upgrade-plan comparison dialog and in-app subscription update flow.
import React, { type MouseEvent } from "react";
import { getStatsigClient as getStatsigClientRaw } from "../vendor/statsig-current-runtime";
import clsx from "clsx";

import { useAuth } from "../auth/use-auth";
import { useSelectedAccountQuery } from "../runtime/codex-api";
import {
  isOpenInBrowserEvent,
  openInBrowser,
  openInBrowserFromEvent,
} from "../runtime/pull-request-actions-runtime";
import { useQueryClient } from "../runtime/query-client/react-query-context";
import {
  DialogDescription,
  DialogLayout,
  DialogTitle,
} from "../ui/dialog-layout";
import { addLoginHintToChatGptPurchaseUrl } from "../utils/format-currency";
import {
  CODEX_TEAM_PURCHASE_URL,
  TEAM_PURCHASE_URL,
  isPaidCodexPlan,
} from "../utils/plan-management-state";
import { Sku } from "../utils/skus";
import { useCodexPricingUrl } from "../utils/use-codex-pricing";
import type { ExternalLinkClickEvent } from "../utils/external-link/types";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  PlanBillingPeriodSegmentedControl,
  SubscriptionUpdatePlanDialog,
  skuToSubscriptionPlanId,
  type PricingInfo as SubscriptionDialogPricingInfo,
  type SubscriptionPlanId,
  type SubscriptionUpdate,
} from "./subscription-update-plan";
import { useBillingCurrencyQuery } from "./usage-queries/account";
import {
  cancelPendingSubscriptionUpdate,
  subscriptionUpdatePreviewQueryOptions,
  updateSubscriptionPlan,
  usePlanPricingQuery,
} from "./usage-queries/pricing";
import {
  BusinessPlanCard,
  PersonalPlanCard,
  ProDetailsLabel,
  ProPlanTitle,
  businessCodexFeatures,
  businessTeamFeatures,
  formatBusinessSeatPrice,
  formatPersonalPlanPrice,
  freePlanFeatures,
  getProPlanFeatures,
  plusPlanFeatures,
} from "./upgrade-plan-dialog-cards";
import type {
  PaidConsumerPlanSku,
  PlanChangeAction,
  PlanSku,
  PricingIntl,
  ProPlanSku,
  UpgradePlanDefaultTab,
  UpgradePlanPricingInfo,
} from "./upgrade-plan-dialog-types";

const OPEN_IN_BROWSER_INITIATOR = "open_in_browser_bridge";

type SelectedAccount = {
  id: string;
  plan_type?: string | null;
};
type StatsigClientLike = Parameters<
  typeof addLoginHintToChatGptPurchaseUrl
>[0]["statsigClient"];
type SubscriptionUpdatePreview = {
  amount_due: {
    amount: number;
    amount_excluding_tax: number;
    tax_amount: number;
  };
  currency: string;
  default_payment_method?: {
    card_brand?: string | null;
    card_last4?: string | null;
  } | null;
  positive_line_item_total: number;
  renewal_date?: string | null;
};
type SubscriptionUpdateResponse = {
  status?: string | null;
};
type SavedCardUpgradeState = Extract<
  SubscriptionUpdate,
  { kind: "saved_card_upgrade" }
> & {
  webUrl: string;
};
type ScheduledDowngradeState = Extract<
  SubscriptionUpdate,
  { kind: "scheduled_downgrade" }
> & {
  updatedPlan: SubscriptionPlanId;
  webUrl: string;
};
type SubscriptionUpdateState = SavedCardUpgradeState | ScheduledDowngradeState;

export type UpgradePlanDialogProps = {
  currentPlan: PlanSku;
  defaultTab?: UpgradePlanDefaultTab;
  getPlansUrl: () => string;
  loadingTargetPlan?: PlanSku | null;
  onCtaClick(action: PlanChangeAction, targetPlan: PlanSku): void;
  onOpenChange(open: boolean): void;
  onOpenUrl(
    url: string,
    targetPlan: PlanSku | undefined,
    event?: MouseEvent<HTMLButtonElement>,
  ): void;
  open: boolean;
  pricingInfo?: UpgradePlanPricingInfo | null;
};

export type UpgradePlanDialogModalProps = {
  currentPlan: PlanSku;
  defaultTab?: UpgradePlanDefaultTab;
  onClose?: () => void;
  source?: string;
};

export function UpgradePlanDialog({
  currentPlan,
  defaultTab = "personal",
  getPlansUrl,
  loadingTargetPlan = null,
  onCtaClick,
  onOpenChange,
  onOpenUrl,
  open,
  pricingInfo = null,
}: UpgradePlanDialogProps) {
  const intl = useIntl() as PricingIntl;
  const [selectedTab, setSelectedTab] =
    React.useState<UpgradePlanDefaultTab>(defaultTab);
  const [selectedProTier, setSelectedProTier] = React.useState<ProPlanSku>(
    currentPlan === Sku.PRO ? Sku.PRO : Sku.PROLITE,
  );
  const currentPlanIsPaid = isPaidCodexPlan(currentPlan);

  const categoryOptions = [
    {
      id: "personal",
      label: (
        <FormattedMessage
          id="settings.usage.upgradePlan.tabs.personal"
          defaultMessage="Personal"
          description="Label for personal plans tab"
        />
      ),
    },
    {
      id: "business",
      label: (
        <FormattedMessage
          id="settings.usage.upgradePlan.tabs.business"
          defaultMessage="Business"
          description="Label for business plans tab"
        />
      ),
    },
  ];

  return (
    <DialogLayout
      open={open}
      onOpenChange={onOpenChange}
      contentClassName="!w-[min(800px,calc(100vw-2rem))]"
    >
      <div className="max-h-[calc(100vh-2rem)] gap-3 overflow-y-auto px-5 py-4 [--pricing-plan-highlight:#635ef4]">
        <DialogTitle className="text-lg font-medium">
          <FormattedMessage
            id="settings.usage.upgradePlan.title"
            defaultMessage="Upgrade plan"
            description="Title for the plan upgrade dialog"
          />
        </DialogTitle>
        <DialogDescription className="sr-only">
          <FormattedMessage
            id="settings.usage.upgradePlan.description"
            defaultMessage="Compare personal and business plans"
            description="Screen reader description for the plan upgrade dialog"
          />
        </DialogDescription>
        <PlanBillingPeriodSegmentedControl
          ariaLabel={intl.formatMessage({
            id: "settings.usage.upgradePlan.tabs.ariaLabel",
            defaultMessage: "Choose plan category",
            description: "Aria label for the plan category toggle",
          })}
          className="w-fit"
          selectedId={selectedTab}
          onSelect={(tabId) => {
            if (tabId === "personal" || tabId === "business") {
              setSelectedTab(tabId);
            }
          }}
          options={categoryOptions}
        />
        <div className="grid">
          <div
            aria-hidden={selectedTab !== "personal"}
            className={clsx(
              "col-start-1 row-start-1 grid gap-2.5 md:grid-cols-3",
              selectedTab !== "personal" && "invisible pointer-events-none",
            )}
          >
            {currentPlanIsPaid ? null : (
              <PersonalPlanCard
                currentPlan={currentPlan}
                targetPlan={Sku.FREE}
                title={
                  <FormattedMessage
                    id="settings.usage.upgradePlan.personal.free.title"
                    defaultMessage="Free"
                    description="Title for the Free personal plan card"
                  />
                }
                price={formatPersonalPlanPrice({
                  intl,
                  plan: Sku.FREE,
                  pricingInfo,
                })}
                features={freePlanFeatures}
                getPlansUrl={getPlansUrl}
                onCtaClick={onCtaClick}
                onOpenUrl={onOpenUrl}
              />
            )}
            <PersonalPlanCard
              currentPlan={currentPlan}
              targetPlan={Sku.PLUS}
              title={
                <FormattedMessage
                  id="settings.usage.upgradePlan.personal.plus.title"
                  defaultMessage="Plus"
                  description="Title for the Plus personal plan card"
                />
              }
              price={formatPersonalPlanPrice({
                intl,
                plan: Sku.PLUS,
                pricingInfo,
              })}
              features={plusPlanFeatures}
              getPlansUrl={getPlansUrl}
              isLoading={loadingTargetPlan === Sku.PLUS}
              onCtaClick={onCtaClick}
              onOpenUrl={onOpenUrl}
              planDetailsLabel={
                <FormattedMessage
                  id="settings.usage.upgradePlan.more.plus"
                  defaultMessage="View more details for Plus plan"
                  description="Screen reader label for the Plus plan details link"
                />
              }
            />
            {currentPlanIsPaid ? (
              <>
                <PersonalPlanCard
                  currentPlan={currentPlan}
                  targetPlan={Sku.PROLITE}
                  title={
                    <ProPlanTitle
                      tier={
                        <FormattedMessage
                          id="settings.usage.upgradePlan.personal.proLite.tier"
                          defaultMessage="5x"
                          description="Tier suffix for the Pro 5x personal plan card"
                        />
                      }
                    />
                  }
                  price={formatPersonalPlanPrice({
                    intl,
                    plan: Sku.PROLITE,
                    pricingInfo,
                  })}
                  features={getProPlanFeatures(Sku.PROLITE)}
                  getPlansUrl={getPlansUrl}
                  isLoading={loadingTargetPlan === Sku.PROLITE}
                  onCtaClick={onCtaClick}
                  onOpenUrl={onOpenUrl}
                  planDetailsLabel={<ProDetailsLabel plan={Sku.PROLITE} />}
                />
                <PersonalPlanCard
                  currentPlan={currentPlan}
                  targetPlan={Sku.PRO}
                  title={
                    <ProPlanTitle
                      tier={
                        <FormattedMessage
                          id="settings.usage.upgradePlan.personal.pro.tier"
                          defaultMessage="20x"
                          description="Tier suffix for the Pro 20x personal plan card"
                        />
                      }
                    />
                  }
                  price={formatPersonalPlanPrice({
                    intl,
                    plan: Sku.PRO,
                    pricingInfo,
                  })}
                  features={getProPlanFeatures(Sku.PRO)}
                  getPlansUrl={getPlansUrl}
                  isLoading={loadingTargetPlan === Sku.PRO}
                  onCtaClick={onCtaClick}
                  onOpenUrl={onOpenUrl}
                  planDetailsLabel={<ProDetailsLabel plan={Sku.PRO} />}
                />
              </>
            ) : (
              <PersonalPlanCard
                currentPlan={currentPlan}
                targetPlan={selectedProTier}
                title={
                  <div className="flex items-center justify-between gap-4">
                    <FormattedMessage
                      id="settings.usage.upgradePlan.personal.pro.title"
                      defaultMessage="Pro"
                      description="Title for the Pro personal plan card"
                    />
                    <PlanBillingPeriodSegmentedControl
                      ariaLabel={intl.formatMessage({
                        id: "settings.usage.upgradePlan.personal.proTier.ariaLabel",
                        defaultMessage: "Choose Pro plan tier",
                        description: "Aria label for the Pro tier toggle",
                      })}
                      className="shrink-0"
                      selectedId={selectedProTier}
                      onSelect={(planId) => {
                        if (planId === Sku.PROLITE || planId === Sku.PRO) {
                          setSelectedProTier(planId);
                        }
                      }}
                      options={[
                        {
                          id: Sku.PROLITE,
                          label: (
                            <FormattedMessage
                              id="settings.usage.upgradePlan.personal.proTier.fiveX"
                              defaultMessage="5x"
                              description="Label for the Pro 5x tier toggle"
                            />
                          ),
                        },
                        {
                          id: Sku.PRO,
                          label: (
                            <FormattedMessage
                              id="settings.usage.upgradePlan.personal.proTier.twentyX"
                              defaultMessage="20x"
                              description="Label for the Pro 20x tier toggle"
                            />
                          ),
                        },
                      ]}
                    />
                  </div>
                }
                price={formatPersonalPlanPrice({
                  intl,
                  plan: selectedProTier,
                  pricingInfo,
                })}
                features={getProPlanFeatures(selectedProTier)}
                getPlansUrl={getPlansUrl}
                isLoading={loadingTargetPlan === selectedProTier}
                onCtaClick={onCtaClick}
                onOpenUrl={onOpenUrl}
                planDetailsLabel={<ProDetailsLabel plan={selectedProTier} />}
              />
            )}
          </div>
          <div
            aria-hidden={selectedTab !== "business"}
            className={clsx(
              "col-start-1 row-start-1 grid gap-2.5 md:grid-cols-2",
              selectedTab !== "business" && "invisible pointer-events-none",
            )}
          >
            <BusinessPlanCard
              cta={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.addWorkspace"
                  defaultMessage="Add Business workspace"
                  description="CTA to add a business workspace"
                />
              }
              description={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.codex.description"
                  defaultMessage="No fixed seat. Pay as you go based on usage"
                  description="Description for the Codex Business plan card"
                />
              }
              features={businessCodexFeatures}
              getPlansUrl={getPlansUrl}
              onCtaClick={onCtaClick}
              onOpenUrl={onOpenUrl}
              planDetailsLabel={
                <FormattedMessage
                  id="settings.usage.upgradePlan.more.businessCodex"
                  defaultMessage="View more details for Business Codex plan"
                  description="Screen reader label for the Business Codex plan details link"
                />
              }
              priceLabel={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.codex.price"
                  defaultMessage="Usage pricing"
                  description="Price label for the Codex Business plan card"
                />
              }
              purchaseUrl={CODEX_TEAM_PURCHASE_URL}
              subtitle={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.codex.subtitle"
                  defaultMessage="Codex"
                  description="Subtitle for the Codex Business plan card"
                />
              }
              targetPlan={Sku.SELF_SERVE_BUSINESS_USAGE_BASED}
              title={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.codex.title"
                  defaultMessage="Business"
                  description="Title for the Codex Business plan card"
                />
              }
            />
            <BusinessPlanCard
              cta={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.addWorkspace"
                  defaultMessage="Add Business workspace"
                  description="CTA to add a business workspace"
                />
              }
              description={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.team.description"
                  defaultMessage="When billed annually. Minimum of 2 users"
                  description="Description for the ChatGPT and Codex Business plan card"
                />
              }
              features={businessTeamFeatures}
              getPlansUrl={getPlansUrl}
              onCtaClick={onCtaClick}
              onOpenUrl={onOpenUrl}
              planDetailsLabel={
                <FormattedMessage
                  id="settings.usage.upgradePlan.more.businessTeam"
                  defaultMessage="View more details for Business ChatGPT and Codex plan"
                  description="Screen reader label for the Business ChatGPT and Codex plan details link"
                />
              }
              priceLabel={formatBusinessSeatPrice({ intl, pricingInfo })}
              purchaseUrl={TEAM_PURCHASE_URL}
              subtitle={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.team.subtitle"
                  defaultMessage="ChatGPT & Codex"
                  description="Subtitle for the ChatGPT and Codex Business plan card"
                />
              }
              targetPlan={Sku.SELF_SERVE_BUSINESS}
              title={
                <FormattedMessage
                  id="settings.usage.upgradePlan.business.team.title"
                  defaultMessage="Business"
                  description="Title for the ChatGPT and Codex Business plan card"
                />
              }
            />
          </div>
        </div>
      </div>
    </DialogLayout>
  );
}

export function UpgradePlanDialogModal({
  currentPlan,
  defaultTab = "personal",
  onClose,
  source,
}: UpgradePlanDialogModalProps) {
  const queryClient = useQueryClient();
  const statsigClient = getStatsigClientRaw() as StatsigClientLike;
  const closeModal = React.useCallback(() => onClose?.(), [onClose]);
  const { email } = useAuth() as { email?: string | null };
  const selectedAccountQuery = useSelectedAccountQuery();
  const selectedAccount = selectedAccountQuery.data as SelectedAccount | null;
  const [subscriptionUpdate, setSubscriptionUpdate] =
    React.useState<SubscriptionUpdateState | null>(null);
  const [loadingTargetPlan, setLoadingTargetPlan] =
    React.useState<PlanSku | null>(null);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const { data: billingCurrency } = useBillingCurrencyQuery({ enabled: true });
  const { data: pricingInfo } = usePlanPricingQuery({
    billingCurrency: billingCurrency ?? "US",
    enabled: true,
  });
  const getPlansUrl = useCodexPricingUrl({ logExposure: false });
  const selectedPlanType = selectedAccount?.plan_type;

  React.useEffect(() => {
    if (selectedPlanType != null && selectedPlanType !== currentPlan) {
      closeModal();
    }
  }, [closeModal, currentPlan, selectedPlanType]);

  const openExternalUrl = React.useCallback(
    (url: string, event?: MouseEvent<HTMLButtonElement>) => {
      if (event != null) {
        openInBrowserFromEvent({
          event: event as ExternalLinkClickEvent,
          href: url,
          initiator: OPEN_IN_BROWSER_INITIATOR,
        });
        return;
      }
      openInBrowser({
        href: url,
        initiator: OPEN_IN_BROWSER_INITIATOR,
      });
    },
    [],
  );

  const handleOpenPlanUrl = React.useCallback(
    async (
      url: string,
      targetPlan: PlanSku | undefined,
      event?: MouseEvent<HTMLButtonElement>,
    ) => {
      const webUrl = addLoginHintToChatGptPurchaseUrl({
        loginHint: email,
        statsigClient,
        url,
      });

      if (
        event != null &&
        isOpenInBrowserEvent(event as ExternalLinkClickEvent)
      ) {
        openExternalUrl(webUrl, event);
        return;
      }

      if (
        selectedAccount == null ||
        currentPlan === Sku.FREE ||
        targetPlan == null ||
        !isInAppSubscriptionTarget(targetPlan)
      ) {
        openExternalUrl(webUrl, event);
        return;
      }

      const updatedPlan = skuToSubscriptionPlanId(targetPlan);
      if (
        updatedPlan == null ||
        !canPreviewSubscriptionUpdate({ currentPlan, targetPlan })
      ) {
        openExternalUrl(webUrl, event);
        return;
      }

      setLoadingTargetPlan(targetPlan);
      try {
        const preview = (await queryClient.fetchQuery?.(
          subscriptionUpdatePreviewQueryOptions({
            accountId: selectedAccount.id,
            updatedPlan,
          }),
        )) as SubscriptionUpdatePreview | undefined;

        if (preview == null) {
          openExternalUrl(webUrl, event);
          return;
        }

        if (currentPlan === Sku.PRO && targetPlan === Sku.PROLITE) {
          setSubscriptionUpdate({
            kind: "scheduled_downgrade",
            preview,
            updatedPlan: "chatgptprolite",
            webUrl,
          });
          return;
        }

        const paymentMethod = preview.default_payment_method;
        if (
          !paymentMethod?.card_last4?.trim() ||
          pricingInfo?.minorUnitExponent == null ||
          pricingInfo.currencyCode.toUpperCase() !==
            preview.currency.toUpperCase()
        ) {
          openExternalUrl(webUrl, event);
          return;
        }

        setSubscriptionUpdate({
          kind: "saved_card_upgrade",
          minorUnitExponent: pricingInfo.minorUnitExponent,
          paymentMethod,
          preview,
          updatedPlan,
          webUrl,
        });
      } catch {
        openExternalUrl(webUrl, event);
      } finally {
        setLoadingTargetPlan(null);
      }
    },
    [
      currentPlan,
      email,
      openExternalUrl,
      pricingInfo?.currencyCode,
      pricingInfo?.minorUnitExponent,
      queryClient,
      selectedAccount,
      statsigClient,
    ],
  );

  const confirmSubscriptionUpdate = React.useCallback(async () => {
    if (subscriptionUpdate == null || selectedAccount == null) return;

    setIsUpdating(true);
    try {
      const response = (await updateSubscriptionPlan({
        accountId: selectedAccount.id,
        updatedPlan: subscriptionUpdate.updatedPlan,
      })) as SubscriptionUpdateResponse;

      if (response.status == null || response.status === "pending") {
        setSubscriptionUpdate(null);
        if (
          response.status == null &&
          subscriptionUpdate.kind === "saved_card_upgrade"
        ) {
          closeModal();
        }
        await Promise.all([
          queryClient.invalidateQueries?.({ queryKey: ["accounts", "check"] }),
          queryClient.invalidateQueries?.({ queryKey: ["rate-limit-status"] }),
        ]);
        return;
      }

      await cancelPendingSubscriptionUpdate({ accountId: selectedAccount.id });
      openExternalUrl(subscriptionUpdate.webUrl);
      setSubscriptionUpdate(null);
    } catch {
      openExternalUrl(subscriptionUpdate.webUrl);
      setSubscriptionUpdate(null);
    } finally {
      setIsUpdating(false);
    }
  }, [
    closeModal,
    openExternalUrl,
    queryClient,
    selectedAccount,
    subscriptionUpdate,
  ]);

  return (
    <>
      <UpgradePlanDialog
        open={subscriptionUpdate == null}
        currentPlan={currentPlan}
        defaultTab={defaultTab}
        loadingTargetPlan={loadingTargetPlan}
        pricingInfo={pricingInfo ?? null}
        getPlansUrl={getPlansUrl}
        onCtaClick={(ctaAction, targetPlan) => {
          void ctaAction;
          void targetPlan;
          void source;
        }}
        onOpenChange={(isOpen) => {
          if (!isOpen && subscriptionUpdate == null) closeModal();
        }}
        onOpenUrl={(url, targetPlan, event) => {
          void handleOpenPlanUrl(url, targetPlan, event);
        }}
      />
      {subscriptionUpdate == null ? null : (
        <SubscriptionUpdatePlanDialog
          isUpdating={isUpdating}
          pricingInfo={toSubscriptionDialogPricingInfo(pricingInfo ?? null)}
          subscriptionUpdate={subscriptionUpdate}
          onCancel={() => {
            setSubscriptionUpdate(null);
          }}
          onConfirm={() => {
            void confirmSubscriptionUpdate();
          }}
          onGoToWeb={(event?: ExternalLinkClickEvent) => {
            openExternalUrl(
              subscriptionUpdate.webUrl,
              event as MouseEvent<HTMLButtonElement> | undefined,
            );
            setSubscriptionUpdate(null);
          }}
          onOpenChange={(isOpen) => {
            if (isOpen) return;
            if (!isUpdating) setSubscriptionUpdate(null);
          }}
        />
      )}
    </>
  );
}

function isInAppSubscriptionTarget(plan: PlanSku): plan is PaidConsumerPlanSku {
  return plan === Sku.PLUS || plan === Sku.PROLITE || plan === Sku.PRO;
}

function canPreviewSubscriptionUpdate({
  currentPlan,
  targetPlan,
}: {
  currentPlan: PlanSku;
  targetPlan: PaidConsumerPlanSku;
}) {
  return (
    (currentPlan === Sku.GO && targetPlan === Sku.PLUS) ||
    (currentPlan === Sku.PLUS &&
      (targetPlan === Sku.PROLITE || targetPlan === Sku.PRO)) ||
    (currentPlan === Sku.PRO && targetPlan === Sku.PROLITE) ||
    (currentPlan === Sku.PROLITE && targetPlan === Sku.PRO)
  );
}

function toSubscriptionDialogPricingInfo(
  pricingInfo: UpgradePlanPricingInfo | null,
): SubscriptionDialogPricingInfo | null {
  if (pricingInfo == null) return null;
  return {
    currencyCode: pricingInfo.currencyCode,
    minorUnitExponent: pricingInfo.minorUnitExponent,
    monthlyAmounts: {
      prolite: pricingInfo.monthlyAmounts.prolite,
    },
  };
}
