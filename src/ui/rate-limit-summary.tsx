// Restored from ref/webview/assets/rate-limit-summary-BUSuPbw3.js
// Rate limit summary dropdown content.
import clsx from "clsx";
import { useGateValue } from "../vendor/statsig-current-runtime";
import { ChevronRightIcon } from "../icons/chevron-right-icon";
import { LinkExternalIcon } from "../icons/link-external-icon";
import { SpeedometerIcon } from "../icons/speedometer-icon";
import { BulletSeparator } from "../utils/bullet-separator";
import {
  formatRateLimitWindowLabel,
  formatRemainingPercent,
  formatResetDate,
} from "../utils/rate-limit-status/formatting";
import {
  hasRateLimitWindow,
  parseUnixSeconds,
  remainingUsagePercent,
} from "../utils/rate-limit-status/windows";
import { selectRateLimitAlertForEntries } from "../utils/use-rate-limit/entries";
import { isCoreLimitName } from "../utils/use-rate-limit/normalization";
import type {
  RateLimitBucket,
  RateLimitEntry,
  RateLimitSnapshot,
} from "../utils/use-rate-limit/types";
import { Dropdown, DropdownSubmenuItem } from "./dropdown";
import { Spinner } from "./spinner";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
type PlanType =
  | "business"
  | "education"
  | "edu"
  | "enterprise"
  | "enterprise_cbp_usage_based"
  | "finserv"
  | "free"
  | "free_workspace"
  | "go"
  | "guest"
  | "hc"
  | "k12"
  | "plus"
  | "pro"
  | "prolite"
  | "quorum"
  | "sci"
  | "self_serve_business_usage_based"
  | "team";
type RateLimitSummaryLayout = "compact" | "default";
type RateLimitSummaryProps = {
  activeLimitName?: string | null;
  availableRateLimitResetCount?: number;
  isLoading?: boolean;
  layout?: RateLimitSummaryLayout;
  onPlanUpgradeClick?: () => void;
  onRateLimitResetClick?: () => void;
  onRequestLimitIncreaseClick?: () => void;
  planType?: PlanType;
  rateLimits: RateLimitEntry[];
  selectedModel?: string | null;
  showLearnMore?: boolean;
  suppressUpsell?: boolean;
};
function RateLimitWindowLabel({
  minutes,
  variant,
}: {
  minutes?: number | null;
  variant?: "sentence" | "summary";
}) {
  const intl = useIntl();
  return (
    <>
      {formatRateLimitWindowLabel({
        intl,
        minutes: minutes ?? undefined,
        variant,
      })}
    </>
  );
}
export function RateLimitSummary({
  rateLimits,
  activeLimitName,
  planType,
  suppressUpsell,
  selectedModel,
  availableRateLimitResetCount = 0,
  onRateLimitResetClick,
  onPlanUpgradeClick,
  onRequestLimitIncreaseClick,
  isLoading = false,
  showLearnMore = true,
  layout = "default",
}: RateLimitSummaryProps) {
  const intl = useIntl();
  const showProPromoTooltip = useGateValue("1767204071");
  if (
    !isLoading &&
    rateLimits.length === 0 &&
    availableRateLimitResetCount === 0
  ) {
    return null;
  }
  const compact = layout === "compact";
  const alert = selectRateLimitAlertForEntries(rateLimits, {
    activeLimitName,
    selectedModel,
  });
  const hideUpsell = suppressUpsell ?? !isCoreLimitName(activeLimitName);
  const promoTooltip =
    showProPromoTooltip && canShowProPromotion(planType)
      ? intl.formatMessage({
          id: "composer.mode.rateLimit.proPromoTooltip",
          defaultMessage:
            "Upgrade to Pro for boosted Codex limits through May 31",
          description:
            "Limited-time Pro rate limit promotion shown as a tooltip on the rate limit summary menu item",
        })
      : undefined;
  const trigger = (
    <Dropdown.Item
      LeftIcon={SpeedometerIcon}
      RightIcon={ChevronRightIcon}
      tooltipText={promoTooltip}
      tooltipSide="left"
    >
      <span className="flex items-center gap-1">
        <FormattedMessage
          id="composer.mode.rateLimit.heading"
          defaultMessage="Usage remaining"
          description="Rate limit summary heading"
        />
        {alert ? (
          <span className="whitespace-nowrap text-token-input-placeholder-foreground opacity-60">
            {formatRemainingPercent(alert.remainingPercent)}
          </span>
        ) : null}
      </span>
    </Dropdown.Item>
  );
  return (
    <DropdownSubmenuItem trigger={trigger}>
      <div className="flex flex-col text-sm">
        {isLoading ? (
          <Dropdown.Item
            LeftIcon={Spinner}
            className={clsx(
              compact &&
                "pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]",
            )}
            disabled={true}
          >
            <FormattedMessage
              id="composer.mode.rateLimit.loading"
              defaultMessage="Loading usage..."
              description="Loading state for the rate limit summary submenu"
            />
          </Dropdown.Item>
        ) : (
          <>
            <div
              className={clsx(
                "grid items-center gap-y-1.5 py-1",
                compact
                  ? "grid-cols-[minmax(0,1fr)_auto] gap-x-3 pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]"
                  : "grid-cols-[auto_1fr] gap-x-16 px-[var(--padding-row-x)]",
              )}
            >
              {rateLimits.map((item, index) => (
                <RateLimitEntrySummary
                  key={`${item.limitName ?? "default"}-${index}`}
                  rateLimit={item.snapshot}
                  limitName={
                    isCoreLimitName(item.limitName) ? null : item.limitName
                  }
                  compact={compact}
                />
              ))}
            </div>
            {!hideUpsell ? (
              <RateLimitUpsellItem
                planType={planType}
                className={clsx(
                  compact &&
                    "pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]",
                )}
                onPlanUpgradeClick={onPlanUpgradeClick}
                onRequestLimitIncreaseClick={onRequestLimitIncreaseClick}
              />
            ) : null}
            {availableRateLimitResetCount > 0 ? (
              <Dropdown.Item
                RightIcon={ChevronRightIcon}
                className={clsx(
                  compact &&
                    "pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]",
                )}
                onClick={onRateLimitResetClick}
              >
                <FormattedMessage
                  id="composer.mode.rateLimit.resetsAvailable"
                  defaultMessage="{availableRateLimitResetCount, plural, one {# reset available} other {# resets available}}"
                  description="Menu item for opening available rate limit resets"
                  values={{
                    availableRateLimitResetCount,
                  }}
                />
              </Dropdown.Item>
            ) : null}
            {showLearnMore ? (
              <Dropdown.Item
                RightIcon={LinkExternalIcon}
                rightIconClassName={
                  compact
                    ? "icon-xs text-token-description-foreground"
                    : undefined
                }
                className={clsx(
                  compact &&
                    "pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]",
                )}
                href="https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan#h_8dd84c836b"
              >
                <span
                  className={clsx(
                    compact
                      ? "text-token-foreground"
                      : "text-token-description-foreground",
                  )}
                >
                  <FormattedMessage
                    id="composer.mode.local.learnMore"
                    defaultMessage="Learn more"
                    description="Learn more about rate limits"
                  />
                </span>
              </Dropdown.Item>
            ) : null}
          </>
        )}
      </div>
    </DropdownSubmenuItem>
  );
}

export function initRateLimitSummaryChunk(): void {}

function RateLimitEntrySummary({
  rateLimit,
  limitName,
  compact,
}: {
  compact: boolean;
  limitName: string | null;
  rateLimit: RateLimitSnapshot;
}) {
  const hasPrimary = hasRateLimitWindow(rateLimit.primary);
  const hasSecondary = hasRateLimitWindow(rateLimit.secondary);
  if (!hasPrimary && !hasSecondary) return null;
  return (
    <>
      {limitName != null ? (
        <span
          title={formatLimitName(limitName)}
          className={clsx(
            "text-token-foreground col-span-2 min-w-0 truncate font-medium",
            compact ? "mt-1" : "mt-2",
          )}
        >
          <FormattedMessage
            id="composer.mode.rateLimit.modelSectionLabel"
            defaultMessage="{modelName} limit:"
            description="Section label shown before model-specific rate limit windows in summaries"
            values={{
              modelName: formatLimitName(limitName),
            }}
          />
        </span>
      ) : null}
      {hasPrimary ? (
        <RateLimitBucketSummary bucket={rateLimit.primary} compact={compact} />
      ) : null}
      {hasSecondary ? (
        <RateLimitBucketSummary
          bucket={rateLimit.secondary}
          compact={compact}
        />
      ) : null}
    </>
  );
}
function RateLimitBucketSummary({
  bucket,
  compact,
}: {
  bucket: RateLimitBucket | null;
  compact: boolean;
}) {
  if (!hasRateLimitWindow(bucket)) return null;
  const resetAt = parseUnixSeconds(bucket?.resetsAt ?? null);
  const resetLabel = resetAt == null ? null : formatResetDate(resetAt);
  const remainingPercent = remainingUsagePercent(bucket?.usedPercent ?? 0);
  return (
    <>
      <span
        className={clsx(
          "text-token-foreground font-medium",
          compact && "flex min-w-0 items-center gap-1",
        )}
      >
        <span className={clsx(compact && "shrink-0")}>
          <RateLimitWindowLabel minutes={bucket?.windowDurationMins ?? null} />
        </span>
      </span>
      <span
        className={clsx(
          "text-token-description-foreground flex gap-1 text-end",
          compact
            ? "min-w-0 items-center justify-end"
            : "w-full min-w-0 items-center justify-end overflow-hidden",
        )}
      >
        <span className="shrink-0">
          {formatRemainingPercent(remainingPercent)}
        </span>
        {resetLabel ? (
          <>
            <span className="shrink-0">
              <BulletSeparator />
            </span>
            <span
              title={resetLabel}
              className="text-token-description-foreground flex min-w-0 items-center gap-1 truncate text-right"
            >
              {resetLabel}
            </span>
          </>
        ) : null}
      </span>
    </>
  );
}
function formatLimitName(limitName: string) {
  return limitName.replace(/_/g, "-");
}
function RateLimitUpsellItem({
  planType,
  className,
  onPlanUpgradeClick,
  onRequestLimitIncreaseClick,
}: {
  className?: string;
  onPlanUpgradeClick?: () => void;
  onRequestLimitIncreaseClick?: () => void;
  planType?: PlanType;
}) {
  if (onRequestLimitIncreaseClick != null) {
    return (
      <Dropdown.Item
        className={className}
        onClick={onRequestLimitIncreaseClick}
      >
        <FormattedMessage
          id="settings.usage.limits.requestIncrease"
          defaultMessage="Request limit increase"
          description="Button to request a workspace monthly usage limit increase"
        />
      </Dropdown.Item>
    );
  }
  switch (planType) {
    case "free":
    case "go":
      return (
        <PricingUpgradeItem
          className={className}
          onPlanUpgradeClick={onPlanUpgradeClick}
          message="plus"
        />
      );
    case "plus":
      return (
        <PricingUpgradeItem
          className={className}
          onPlanUpgradeClick={onPlanUpgradeClick}
          message="pro"
        />
      );
    case "prolite":
      return (
        <PricingUpgradeItem
          className={className}
          onPlanUpgradeClick={onPlanUpgradeClick}
          message="more-usage"
        />
      );
    case "team":
    case "self_serve_business_usage_based":
    case "business":
    case "enterprise_cbp_usage_based":
    case "education":
    case "quorum":
    case "sci":
    case "enterprise":
    case "edu":
    case "hc":
    case "finserv":
      return (
        <Dropdown.Item className={className} allowWrap={true}>
          <span className="text-token-description-foreground">
            <FormattedMessage
              id="composer.mode.contactAdmin"
              defaultMessage="To get more access, contact your admin"
              description="Suggest contacting admin for increased access"
            />
          </span>
        </Dropdown.Item>
      );
    case "pro":
    case "free_workspace":
    case "guest":
    case "k12":
    case undefined:
      return null;
  }
}
function PricingUpgradeItem({
  className,
  message,
  onPlanUpgradeClick,
}: {
  className?: string;
  message: "more-usage" | "plus" | "pro";
  onPlanUpgradeClick?: () => void;
}) {
  const messages = {
    plus: (
      <FormattedMessage
        id="composer.mode.upgradeToPlus"
        defaultMessage="Upgrade to Plus"
        description="Upgrade to Plus message for free plan"
      />
    ),
    pro: (
      <FormattedMessage
        id="composer.mode.upgradeToPro"
        defaultMessage="Upgrade to Pro"
        description="Upgrade to Pro"
      />
    ),
    "more-usage": (
      <FormattedMessage
        id="composer.mode.upgradeForMoreUsage"
        defaultMessage="Upgrade for more usage"
        description="Upgrade for more usage"
      />
    ),
  };
  return (
    <Dropdown.Item
      RightIcon={LinkExternalIcon}
      className={className}
      href="https://openai.com/chatgpt/pricing"
      onClick={onPlanUpgradeClick}
    >
      {messages[message]}
    </Dropdown.Item>
  );
}
function canShowProPromotion(planType: PlanType | undefined) {
  switch (planType) {
    case "free":
    case "go":
    case "plus":
      return true;
    case "prolite":
    case "pro":
    case "team":
    case "self_serve_business_usage_based":
    case "business":
    case "enterprise_cbp_usage_based":
    case "education":
    case "quorum":
    case "sci":
    case "enterprise":
    case "edu":
    case "hc":
    case "finserv":
    case "free_workspace":
    case "guest":
    case "k12":
    case undefined:
      return false;
  }
}
