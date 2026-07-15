// Restored from ref/webview/assets/rate-limit-reset-modal-bsUY5-t3.js
// Stateful controller for redeeming Codex rate limit reset credits.

import React from "react";
import { useAppScopeValue } from "../../boundaries/app-scope";
import {
  __productLoggerR as productLoggerSignal,
  _productLoggerUn as rateLimitResetCreditRedeemedEvent,
} from "../../analytics/product-logger";
import {
  useConsumeRateLimitResetCreditMutation,
  useSelectedAccountQuery,
} from "../../runtime/codex-api";
import { useIntl } from "../../vendor/react-intl";
import { RateLimitResetCardStackModal } from "./card-stack-modal";
import { CompactRateLimitResetPromptModal } from "./compact-prompt-modal";
import type {
  ProductLogger,
  RateLimitResetComponentType,
  RateLimitResetControllerProps,
  RateLimitResetCreditConsumeResult,
  RateLimitResetModalProps,
} from "./types";
const PERSONAL_RATE_LIMIT_RESET_LAYER = "1038162578";
const WORKSPACE_RATE_LIMIT_RESET_LAYER = "3648137593";
const DEFAULT_COMPONENT_TYPE: RateLimitResetComponentType = "modal";
type SelectedAccount = {
  structure?: string | null;
};
export function RateLimitResetModal(
  props: RateLimitResetModalProps,
): JSX.Element {
  const selectedAccountQuery = useSelectedAccountQuery();
  const selectedAccount = selectedAccountQuery.data as
    | SelectedAccount
    | undefined;
  const accountStructure = selectedAccount?.structure?.toLowerCase();
  const layerName =
    accountStructure === "workspace"
      ? WORKSPACE_RATE_LIMIT_RESET_LAYER
      : accountStructure === "personal"
        ? PERSONAL_RATE_LIMIT_RESET_LAYER
        : null;
  const componentType = useRateLimitResetComponentType(layerName);
  return <RateLimitResetController {...props} componentType={componentType} />;
}
function useRateLimitResetComponentType(
  layerName: string | null,
): RateLimitResetComponentType {
  return React.useMemo(() => {
    if (layerName == null) return DEFAULT_COMPONENT_TYPE;
    const layer = getStatsigLayer(layerName);
    return layer?.get?.("component_type", DEFAULT_COMPONENT_TYPE) ===
      "card_stack"
      ? "card_stack"
      : DEFAULT_COMPONENT_TYPE;
  }, [layerName]);
}
function getStatsigLayer(layerName: string): {
  get?: (key: string, fallback: string) => string;
} | null {
  const statsigGlobal = (
    globalThis as {
      statsig?: {
        getLayer?: (name: string) => {
          get?: (key: string, fallback: string) => string;
        };
      };
    }
  ).statsig;
  return statsigGlobal?.getLayer?.(layerName) ?? null;
}
function RateLimitResetController({
  componentType,
  initialAvailableCount,
  isRateLimitReached = false,
  onClose,
  onResetComplete,
}: RateLimitResetControllerProps): JSX.Element {
  const intl = useIntl();
  const productLogger = useAppScopeValue(productLoggerSignal) as ProductLogger;
  const [redeemRequestId] = React.useState(createRedeemRequestId);
  const hasLoggedRedemptionRef = React.useRef(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const consumeCreditMutation = useConsumeRateLimitResetCreditMutation();
  const isResetting = Boolean(consumeCreditMutation.isPending);
  function closeWhenIdle() {
    if (!isResetting) onClose();
  }
  async function redeemResetCredit(
    creditId?: string,
    availableCountOverride?: number,
  ) {
    const availableCountBefore =
      availableCountOverride ?? initialAvailableCount ?? 0;
    if (isResetting || availableCountBefore === 0) return;
    setErrorMessage(null);
    try {
      const response = (await consumeCreditMutation.mutateAsync({
        creditId: creditId as string,
        redeemRequestId,
      })) as RateLimitResetCreditConsumeResult;
      if (response.code !== "reset") {
        setErrorMessage(formatResetError(response.code, intl));
        return;
      }
      const remainingCount = Math.max(availableCountBefore - 1, 0);
      if (!hasLoggedRedemptionRef.current) {
        hasLoggedRedemptionRef.current = true;
        productLogger.logProductEvent(rateLimitResetCreditRedeemedEvent, {
          availableCountBefore,
          componentType,
          isRateLimitReached,
          redemptionMethod: creditId == null ? "automatic" : "selected_credit",
          remainingCount,
        });
      }
      onResetComplete(remainingCount);
      onClose();
    } catch {
      setErrorMessage(
        intl.formatMessage({
          id: "codex.rateLimitResetModal.error",
          defaultMessage: "Couldn't reset usage. Please try again",
          description: "Error shown when resetting Codex usage fails",
        }),
      );
    }
  }
  if (componentType !== "card_stack") {
    const availableCount = initialAvailableCount ?? 0;
    return (
      <CompactRateLimitResetPromptModal
        availableCount={availableCount}
        errorMessage={errorMessage}
        isResetDisabled={isResetting || availableCount === 0}
        isResetting={isResetting}
        onClose={closeWhenIdle}
        onReset={() => redeemResetCredit(undefined, availableCount)}
      />
    );
  }
  return (
    <RateLimitResetCardStackModal
      errorMessage={errorMessage}
      initialAvailableCount={initialAvailableCount}
      isRateLimitReached={isRateLimitReached}
      isResetting={isResetting}
      onClose={closeWhenIdle}
      onReset={redeemResetCredit}
    />
  );
}
function createRedeemRequestId(): string {
  return crypto.randomUUID();
}
function formatResetError(
  code: string | null | undefined,
  intl: ReturnType<typeof useIntl>,
): string | undefined {
  switch (code) {
    case "already_redeemed":
      return intl.formatMessage({
        id: "codex.rateLimitResetModal.alreadyRedeemed",
        defaultMessage: "This reset was already used",
        description:
          "Error shown when a Codex rate limit reset request was already redeemed",
      });
    case "no_credit":
      return intl.formatMessage({
        id: "codex.rateLimitResetModal.noCredit",
        defaultMessage: "No resets are available",
        description:
          "Error shown when the user has no Codex rate limit resets available",
      });
    case "nothing_to_reset":
      return intl.formatMessage({
        id: "codex.rateLimitResetModal.nothingToReset",
        defaultMessage: "Your usage does not need a reset right now",
        description:
          "Error shown when the user's Codex usage does not need a rate limit reset",
      });
    default:
      return undefined;
  }
}
