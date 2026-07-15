// Restored from ref/webview/assets/upgrade-plan-dialog-CtSyWdd4.js
// Shared card frame and details link for upgrade-plan cards.
import type { MouseEvent, ReactNode } from "react";
import clsx from "clsx";

import { FormattedMessage } from "../vendor/react-intl";
import type { PlanFeature, PlanSku } from "./upgrade-plan-dialog-types";

type PlanCardFrameProps = {
  description?: ReactNode;
  detailsLink?: ReactNode;
  features: PlanFeature[];
  featureSlotCount: number;
  footer: ReactNode;
  highlighted: boolean;
  priceLabel: ReactNode;
  priceLabelSize?: "compact" | "large";
  subtitle?: ReactNode;
  title: ReactNode;
};

export function PlanCardFrame({
  description,
  detailsLink,
  features,
  featureSlotCount,
  footer,
  highlighted,
  priceLabel,
  priceLabelSize = "large",
  subtitle,
  title,
}: PlanCardFrameProps) {
  return (
    <section
      className={clsx(
        "flex h-full min-h-0 flex-col rounded-2xl border p-4",
        highlighted
          ? "border-[color-mix(in_srgb,var(--pricing-plan-highlight)_30%,transparent)] bg-[color-mix(in_srgb,var(--pricing-plan-highlight)_6%,transparent)]"
          : "border-token-border",
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-1",
          priceLabelSize === "large" && "h-10 justify-center",
        )}
      >
        <div className="text-base font-semibold text-token-text-primary">
          {title}
        </div>
        {subtitle == null ? null : (
          <div className="text-sm font-medium text-token-text-secondary">
            {subtitle}
          </div>
        )}
      </div>
      <div
        className={clsx(
          "mt-3 flex flex-col",
          priceLabelSize === "large" && "h-12 justify-center",
        )}
      >
        {priceLabel == null ? null : (
          <div
            className={clsx(
              "text-token-text-primary",
              priceLabelSize === "large"
                ? "text-2xl font-normal"
                : "text-base font-medium",
            )}
          >
            {priceLabel}
          </div>
        )}
        {description == null ? null : (
          <div className="mt-1 text-xs text-token-text-secondary">
            {description}
          </div>
        )}
      </div>
      <div className="mt-3 flex flex-col">
        {Array.from({ length: featureSlotCount }, (_, featureIndex) => {
          const feature = features[featureIndex];
          return (
            <div
              key={featureIndex}
              className={clsx(
                "flex items-center gap-3 text-sm text-token-text-primary",
                priceLabelSize === "large" ? "h-10" : "h-8",
              )}
            >
              {feature == null ? null : (
                <>
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center">
                    {feature.icon}
                  </span>
                  <span>{feature.label}</span>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div
        className={clsx(
          "mt-3 flex flex-col",
          detailsLink == null ? "pt-8" : "gap-3",
        )}
      >
        {detailsLink == null ? null : (
          <div className="flex h-5 items-center">{detailsLink}</div>
        )}
        {footer}
      </div>
    </section>
  );
}

export function PlanDetailsLink({
  detailsLabel,
  getPlansUrl,
  onOpenUrl,
}: {
  detailsLabel: ReactNode;
  getPlansUrl: () => string;
  onOpenUrl(
    url: string,
    targetPlan: PlanSku | undefined,
    event?: MouseEvent<HTMLButtonElement>,
  ): void;
}) {
  return (
    <button
      className="w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-token-text-primary underline underline-offset-2"
      type="button"
      onClick={(event) => {
        onOpenUrl(getPlansUrl(), undefined, event);
      }}
    >
      <span aria-hidden="true">
        <FormattedMessage
          id="settings.usage.upgradePlan.more"
          defaultMessage="+ more"
          description="Link to view more plan details from a plan card"
        />
      </span>
      <span className="sr-only">{detailsLabel}</span>
    </button>
  );
}
