// Restored from ref/webview/assets/subscription-update-plan-D2uMfgET.js
// subscription-update-plan-D2uMfgET chunk restored from the Codex webview bundle.
import type { FormEvent, ReactNode } from "react";
import clsx from "clsx";
import {
  FormattedDate,
  FormattedMessage,
  useIntl,
} from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
} from "../../ui/dialog-layout";
import { formatCurrency } from "../../utils/format-currency";
import { formatPlanPriceParts } from "../../utils/plan-pricing";
import { getSubscriptionPlanLabel } from "./plan-id";
import type {
  SavedCardSubscriptionUpdate,
  ScheduledDowngradeSubscriptionUpdate,
  SubscriptionUpdatePlanDialogProps,
} from "./types";
type IntlCurrencyFormatter = Parameters<typeof formatCurrency>[0]["intl"];
export function SubscriptionUpdatePlanDialog({
  isUpdating,
  onCancel,
  onConfirm,
  onGoToWeb,
  onOpenChange,
  pricingInfo,
  subscriptionUpdate,
}: SubscriptionUpdatePlanDialogProps) {
  const intl = useIntl() as IntlCurrencyFormatter;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onConfirm();
  };
  const dialogContent =
    subscriptionUpdate.kind === "saved_card_upgrade"
      ? getSavedCardUpgradeContent(subscriptionUpdate, intl)
      : getScheduledDowngradeContent(subscriptionUpdate, pricingInfo, intl);
  return (
    <DialogLayout
      open
      showDialogClose={!isUpdating}
      size="default"
      onOpenChange={onOpenChange}
    >
      <DialogBody as="form" onSubmit={handleSubmit}>
        <DialogSection>
          <DialogHeader
            title={
              <FormattedMessage
                id="settings.usage.pricingPlanPage.subscriptionUpdate.title"
                defaultMessage="Confirm plan changes"
                description="Title for the Pro subscription update dialog"
              />
            }
            subtitle={dialogContent.description}
          />
        </DialogSection>
        <DialogSection>{dialogContent.body}</DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button
              color="ghost"
              disabled={isUpdating}
              type="button"
              onClick={onCancel}
            >
              <FormattedMessage
                id="settings.usage.pricingPlanPage.subscriptionUpdate.cancel"
                defaultMessage="Cancel"
                description="Button canceling a Pro subscription update"
              />
            </Button>
            {subscriptionUpdate.kind === "scheduled_downgrade" ? (
              <Button
                color="secondary"
                disabled={isUpdating}
                type="button"
                onClick={onGoToWeb}
              >
                <FormattedMessage
                  id="settings.usage.pricingPlanPage.subscriptionUpdate.goToWeb"
                  defaultMessage="Go to web"
                  description="Button continuing a Pro subscription update on the web"
                />
              </Button>
            ) : null}
            <Button color="primary" loading={isUpdating} type="submit">
              {dialogContent.confirmLabel}
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
function getSavedCardUpgradeContent(
  subscriptionUpdate: SavedCardSubscriptionUpdate,
  intl: IntlCurrencyFormatter,
): {
  description: ReactNode;
  body: ReactNode;
  confirmLabel: ReactNode;
} {
  const targetPlan = getSubscriptionPlanLabel(subscriptionUpdate.updatedPlan);
  const { preview } = subscriptionUpdate;
  const paymentMethodLabel = formatSavedPaymentMethod(
    subscriptionUpdate.paymentMethod,
  );
  const subscriptionPrice = formatMinorUnitCurrency(
    intl,
    preview.positive_line_item_total,
    preview.currency,
    subscriptionUpdate.minorUnitExponent,
  );
  const subtotal = formatMinorUnitCurrency(
    intl,
    preview.amount_due.amount_excluding_tax,
    preview.currency,
    subscriptionUpdate.minorUnitExponent,
  );
  const tax = formatMinorUnitCurrency(
    intl,
    preview.amount_due.tax_amount,
    preview.currency,
    subscriptionUpdate.minorUnitExponent,
  );
  const totalDueToday = formatMinorUnitCurrency(
    intl,
    preview.amount_due.amount,
    preview.currency,
    subscriptionUpdate.minorUnitExponent,
  );
  return {
    description: (
      <FormattedMessage
        id="settings.usage.pricingPlanPage.savedCardUpgrade.description"
        defaultMessage="You're upgrading to ChatGPT {targetPlan}. This will charge your saved payment method."
        description="Description for the dialog confirming a Pro upgrade using a saved credit card"
        values={{
          targetPlan,
        }}
      />
    ),
    body: (
      <div className="flex flex-col text-sm">
        <div className="flex justify-between gap-4 font-semibold">
          <FormattedMessage
            id="settings.usage.pricingPlanPage.subscriptionUpdate.subscription"
            defaultMessage="ChatGPT {targetPlan} subscription"
            description="Subscription selected in the Pro plan update dialog"
            values={{
              targetPlan,
            }}
          />
          <span>{subscriptionPrice}</span>
        </div>
        <span className="mt-0.5 text-xs text-token-text-secondary">
          <FormattedMessage
            id="settings.usage.pricingPlanPage.subscriptionUpdate.billingCycle"
            defaultMessage="Billed monthly, starting today"
            description="Billing cycle information in the Pro upgrade dialog"
          />
        </span>
        <hr className="my-4 border-token-border-default" />
        {preview.amount_due.tax_amount > 0 ? (
          <>
            <div className="flex justify-between gap-4">
              <FormattedMessage
                id="settings.usage.pricingPlanPage.subscriptionUpdate.subtotal"
                defaultMessage="Subtotal"
                description="Subtotal in the Pro upgrade dialog"
              />
              <span>{subtotal}</span>
            </div>
            <div className="mt-2 flex justify-between gap-4">
              <FormattedMessage
                id="settings.usage.pricingPlanPage.subscriptionUpdate.tax"
                defaultMessage="Tax"
                description="Tax in the Pro upgrade dialog"
              />
              <span>{tax}</span>
            </div>
          </>
        ) : null}
        <div
          className={clsx(
            "flex justify-between gap-4 font-semibold",
            preview.amount_due.tax_amount > 0 && "mt-2",
          )}
        >
          <FormattedMessage
            id="settings.usage.pricingPlanPage.subscriptionUpdate.totalDueToday"
            defaultMessage="Total due today"
            description="Total due today in the Pro upgrade dialog"
          />
          <span>{totalDueToday}</span>
        </div>
        <hr className="my-4 border-token-border-default" />
        <div className="flex items-center justify-between gap-4">
          <span className="font-semibold">
            <FormattedMessage
              id="settings.usage.pricingPlanPage.subscriptionUpdate.paymentMethod"
              defaultMessage="Payment method"
              description="Payment method label in the Pro upgrade dialog"
            />
          </span>
          <span className="truncate text-token-text-secondary">
            {paymentMethodLabel}
          </span>
        </div>
      </div>
    ),
    confirmLabel:
      preview.amount_due.amount > 0 ? (
        <FormattedMessage
          id="settings.usage.pricingPlanPage.savedCardUpgrade.payNow"
          defaultMessage="Pay now"
          description="Button paying for a Pro upgrade using the saved payment method"
        />
      ) : (
        <FormattedMessage
          id="settings.usage.pricingPlanPage.savedCardUpgrade.confirm"
          defaultMessage="Confirm"
          description="Button confirming a Pro upgrade with no immediate payment due"
        />
      ),
  };
}
function getScheduledDowngradeContent(
  subscriptionUpdate: ScheduledDowngradeSubscriptionUpdate,
  pricingInfo: SubscriptionUpdatePlanDialogProps["pricingInfo"],
  intl: IntlCurrencyFormatter,
): {
  description: ReactNode;
  body: ReactNode;
  confirmLabel: ReactNode;
} {
  const renewalDate = subscriptionUpdate.preview.renewal_date;
  const proLitePrice =
    pricingInfo == null
      ? null
      : formatPlanPriceParts({
          amount: pricingInfo.monthlyAmounts.prolite,
          currencyCode: pricingInfo.currencyCode,
          intl,
          minorUnitExponent: pricingInfo.minorUnitExponent,
        });
  return {
    description:
      renewalDate == null ? (
        <FormattedMessage
          id="settings.usage.pricingPlanPage.proLiteDowngrade.descriptionWithoutDate"
          defaultMessage="Your Pro 20x subscription will change to Pro 5x at the end of your current billing period."
          description="Description for a Pro 20x to Pro 5x downgrade when the renewal date is unavailable"
        />
      ) : (
        <FormattedMessage
          id="settings.usage.pricingPlanPage.proLiteDowngrade.description"
          defaultMessage="Your Pro 20x subscription will remain active until {renewalDate}, when it will change to Pro 5x."
          description="Description for a scheduled downgrade from Pro 20x to Pro 5x"
          values={{
            renewalDate: (
              <FormattedDate
                value={new Date(renewalDate)}
                year="numeric"
                month="long"
                day="numeric"
              />
            ),
          }}
        />
      ),
    body: (
      <div className="bg-token-main-surface-secondary rounded-xl border border-token-border-default p-4 text-sm">
        <div className="flex justify-between gap-4 font-semibold">
          <FormattedMessage
            id="settings.usage.pricingPlanPage.proLiteDowngrade.newPlan"
            defaultMessage="ChatGPT Pro 5x"
            description="New plan in the Pro 20x to Pro 5x downgrade dialog"
          />
          {proLitePrice == null ? null : (
            <FormattedMessage
              id="settings.usage.pricingPlanPage.proLiteDowngrade.newPlanPrice"
              defaultMessage="{price} / month"
              description="Monthly price of Pro 5x in the downgrade dialog"
              values={{
                price: proLitePrice.formatted,
              }}
            />
          )}
        </div>
        <div className="mt-1 text-xs text-token-text-secondary">
          {renewalDate == null ? (
            <FormattedMessage
              id="settings.usage.pricingPlanPage.proLiteDowngrade.billingStartWithoutDate"
              defaultMessage="Billing will start at the end of your current billing period"
              description="Billing start information when the renewal date is unavailable"
            />
          ) : (
            <FormattedMessage
              id="settings.usage.pricingPlanPage.proLiteDowngrade.billingStart"
              defaultMessage="Billing will start on {renewalDate}"
              description="Billing start date in the Pro 5x downgrade dialog"
              values={{
                renewalDate: (
                  <FormattedDate
                    value={new Date(renewalDate)}
                    year="numeric"
                    month="long"
                    day="numeric"
                  />
                ),
              }}
            />
          )}
        </div>
      </div>
    ),
    confirmLabel: (
      <FormattedMessage
        id="settings.usage.pricingPlanPage.proLiteDowngrade.confirm"
        defaultMessage="Confirm"
        description="Button confirming a downgrade from Pro 20x to Pro 5x"
      />
    ),
  };
}
function formatSavedPaymentMethod({
  card_brand: cardBrand,
  card_last4: cardLast4,
}: SavedCardSubscriptionUpdate["paymentMethod"]): string {
  const brand = cardBrand?.trim() ?? "";
  const lastFour = cardLast4?.trim() ?? "";
  if (brand && lastFour) {
    return `${brand.toUpperCase()} *${lastFour}`;
  }
  return lastFour ? `*${lastFour}` : brand;
}
function formatMinorUnitCurrency(
  intl: IntlCurrencyFormatter,
  amount: number,
  currency: string,
  minorUnitExponent: number,
): string {
  return formatCurrency({
    intl,
    amount: amount / 10 ** minorUnitExponent,
    currencyCode: currency.toUpperCase(),
    currencyFractionDigits: minorUnitExponent,
  });
}
