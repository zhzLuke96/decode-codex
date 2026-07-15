// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~fkswc4hr-BRaBmaS8.js
// Upgrade-plan surface selection, route state handoff, and browser fallback helpers.
import React, { type ComponentType } from "react";
import { getStatsigClient as getStatsigClientRaw } from "../vendor/statsig-current-runtime";
import { useAuth } from "../auth/use-auth";
import { codexRequest } from "../runtime/request";
import {
  isOpenInBrowserEvent,
  openInBrowser,
  openInBrowserFromEvent,
} from "../runtime/pull-request-actions-runtime";
import { Sku } from "../utils/skus";
import { openModalControllerModal } from "../ui/modal-controller-state";
import type { ExternalLinkClickEvent } from "../utils/external-link/types";
import { useLocation, useNavigate } from "../vendor/react-router";
import type { UpgradePlanDialogModalProps } from "./upgrade-plan-dialog";

export const PRICING_PLAN_ROUTE = "/pricing-plan";

const UPGRADE_PLAN_EXPERIMENT = "1640366510";
const OPEN_IN_BROWSER_INITIATOR = "open_in_browser_bridge";
const professionalEmailDomainCache = new Map<string, Promise<boolean>>();

export type UpgradePlanDefaultTab = "business" | "personal";
export type UpgradePlanSurface = "dialog" | "page" | "web";
type CodexPlanSku = (typeof Sku)[keyof typeof Sku];
type ModalControllerStore = Parameters<typeof openModalControllerModal>[0];
type StatsigExperiment = {
  get<TValue>(field: string, fallback: TValue): TValue;
};
type StatsigClient = {
  getExperiment(
    experimentName: string,
    options?: { disableExposureLog: boolean },
  ): StatsigExperiment;
};
export type OpenUpgradePlanInAppOptions = {
  currentPlan: CodexPlanSku | null | undefined;
  defaultTab?: UpgradePlanDefaultTab | null;
  scope: ModalControllerStore;
  source?: string;
};
export type OpenUpgradePlanOptions = OpenUpgradePlanInAppOptions & {
  event?: ExternalLinkClickEvent | null;
  getPricingUrl: () => string;
};

const UpgradePlanDialogModalLazy = React.lazy(async () => {
  const { UpgradePlanDialogModal } = await import("./upgrade-plan-dialog");
  return { default: UpgradePlanDialogModal };
}) as ComponentType<UpgradePlanDialogModalProps>;

function getStatsigClient(): StatsigClient {
  return getStatsigClientRaw() as StatsigClient;
}

function readUpgradePlanSurface(
  statsigClient: StatsigClient,
  disableExposureLog: boolean,
): UpgradePlanSurface {
  const surface = statsigClient
    .getExperiment(UPGRADE_PLAN_EXPERIMENT, { disableExposureLog })
    .get("surface", "web");
  return surface === "dialog" || surface === "page" ? surface : "web";
}

function readDefaultPlusUpgradeTab(statsigClient: StatsigClient): boolean {
  return statsigClient
    .getExperiment(UPGRADE_PLAN_EXPERIMENT, { disableExposureLog: false })
    .get("default_plus_to_business", false);
}

function isProfessionalEmailDomainResponse(
  value: unknown,
): value is { email_domain_type: string } {
  return (
    value != null &&
    typeof value === "object" &&
    typeof (value as { email_domain_type?: unknown }).email_domain_type ===
      "string"
  );
}

function hasProfessionalEmailDomain(userId: string): Promise<boolean> {
  const cachedResult = professionalEmailDomainCache.get(userId);
  if (cachedResult != null) return cachedResult;

  const result = codexRequest.safeGet("/me").then((response) => {
    return (
      isProfessionalEmailDomainResponse(response) &&
      response.email_domain_type === "professional"
    );
  });
  professionalEmailDomainCache.set(userId, result);
  return result;
}

async function resolveUpgradePlanDefaultTab({
  currentPlan,
  defaultTab,
  statsigClient,
  userId,
}: {
  currentPlan: CodexPlanSku;
  defaultTab?: UpgradePlanDefaultTab | null;
  statsigClient: StatsigClient;
  userId: string | null;
}): Promise<UpgradePlanDefaultTab> {
  let resolvedTab = defaultTab ?? "personal";
  if (currentPlan === Sku.PLUS) {
    resolvedTab = readDefaultPlusUpgradeTab(statsigClient)
      ? "business"
      : "personal";
  }
  if (userId == null) return resolvedTab;

  try {
    return (await hasProfessionalEmailDomain(userId))
      ? "business"
      : resolvedTab;
  } catch {
    return resolvedTab;
  }
}

export function useUpgradePlanSurface(): UpgradePlanSurface {
  return readUpgradePlanSurface(getStatsigClient(), true);
}

export function useOpenUpgradePlanInApp(): (
  options: OpenUpgradePlanInAppOptions,
) => boolean {
  const { userId } = useAuth() as { userId?: string | null };
  const statsigClient = getStatsigClient();
  const location = useLocation();
  const navigate = useNavigate();
  const returnPath = `${location.pathname}${location.search}${location.hash}`;

  return React.useCallback(
    ({ scope, currentPlan, defaultTab, source }) => {
      if (currentPlan == null) return false;

      const tabRequest = {
        currentPlan,
        defaultTab,
        statsigClient,
        userId: userId ?? null,
      };

      switch (readUpgradePlanSurface(statsigClient, false)) {
        case "dialog":
          void resolveUpgradePlanDefaultTab(tabRequest).then((resolvedTab) => {
            openModalControllerModal(scope, UpgradePlanDialogModalLazy, {
              currentPlan,
              defaultTab: resolvedTab,
              source,
            });
          });
          return true;
        case "page":
          void resolveUpgradePlanDefaultTab(tabRequest).then((resolvedTab) => {
            navigate(PRICING_PLAN_ROUTE, {
              state: {
                defaultTab: resolvedTab,
                returnPath,
                source,
              },
            });
          });
          return true;
        default:
          return false;
      }
    },
    [navigate, returnPath, statsigClient, userId],
  );
}

export function useOpenUpgradePlan(): (
  options: OpenUpgradePlanOptions,
) => void {
  const openUpgradePlanInApp = useOpenUpgradePlanInApp();

  return React.useCallback(
    ({ event, getPricingUrl, ...inAppOptions }) => {
      if (event != null && isOpenInBrowserEvent(event)) {
        openInBrowserFromEvent({
          event,
          href: getPricingUrl(),
          initiator: OPEN_IN_BROWSER_INITIATOR,
        });
        return;
      }

      if (openUpgradePlanInApp(inAppOptions)) return;

      const href = getPricingUrl();
      if (event == null) {
        openInBrowser({
          href,
          initiator: OPEN_IN_BROWSER_INITIATOR,
        });
        return;
      }

      openInBrowserFromEvent({
        event,
        href,
        initiator: OPEN_IN_BROWSER_INITIATOR,
      });
    },
    [openUpgradePlanInApp],
  );
}

export function initPricingPlanRouteChunk(): void {}

export function initUpgradePlanEntryChunk(): void {}
