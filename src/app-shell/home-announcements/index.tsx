// Restored from ref/webview/assets/home-announcements-Dizo-1Ny.js
// Home announcement banner orchestration for the Codex webview home composer.

import type { ComponentType, MouseEvent, ReactElement, ReactNode } from "react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";

import {
  appScopeO as useAppScopeStore,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import {
  openDialog,
  openExternalLinkFromEvent,
  recordProductEvent,
  useAvailablePlugins,
  useModelsQuery,
  useStatsigDynamicConfig,
} from "../../boundaries/onboarding-commons-externals.facade";
import { vscodeApiV as useQuery } from "../../boundaries/vscode-api";
import {
  hasSeenAmbientSuggestionsConnectedAppsConsentSignal,
  filterAccessibleEnabledAmbientSuggestionApps,
} from "../../composer/ambient-suggestions-connected-apps-consent";
import { useServiceTierSettings } from "../../composer/use-service-tier-settings";
import { FastModeHomeBannerIcon } from "../../features/use-fast-mode-personalized-estimate";
import {
  fastModePersonalizedEstimateMessages,
  useFastModePersonalizedEstimate,
} from "../../features/use-fast-mode-personalized-estimate";
import { RateLimitResetModal } from "../../features/rate-limit-reset-modal";
import { codexAppImageUrl } from "../../features/rate-limit-reset-modal/assets";
import { CloudTerminalIcon } from "../../icons/cloud-terminal-icon";
import { GlobeIcon } from "../../icons/globe-icon";
import { ShoppingBagPlusIcon } from "../../icons/shopping-bag-plus-icon";
import { TeamIcon } from "../../icons/team-icon";
import { UsageGaugeIcon } from "../../icons/usage-gauge-icon";
import { XIcon } from "../../icons/x-icon";
import {
  remoteConnectionsHomeAnnouncementSeenSignal,
  initRemoteConnectionsOnboardingSignalsChunk,
} from "../../onboarding/remote-connections-onboarding-signals";
import {
  hideFirstNewThreadOnboardingPromosAtom,
  shouldHideFirstNewThreadOnboardingPromos,
  welcomeV2OnboardingStorageKey,
} from "../../onboarding/onboarding-state";
import {
  useIsRemoteConnectionsVisible,
  useSelectableRemoteConnectionsState,
} from "../../remote/remote-connection-visibility";
import { codexRequest } from "../../runtime/request";
import { useRateLimitResetCreditsQuery } from "../../runtime/codex-api";
import { Button } from "../../ui/button";
import { persistedAtom } from "../../utils/persisted-atom";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { useLocation, useNavigate } from "../../vendor/react-router";
import { useAuth } from "../../auth/use-auth";

type ButtonColor = React.ComponentProps<typeof Button>["color"];
type ButtonSize = React.ComponentProps<typeof Button>["size"];

type HomeAnnouncementAction = {
  ariaLabel?: string;
  className?: string;
  color?: ButtonColor;
  disabled?: boolean;
  icon?: ComponentType<{ className?: string }>;
  label?: ReactNode;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  uniform?: boolean;
};

type HomeAnnouncementBannerProps = {
  actionsClassName?: string;
  actionsPlacement?: "aside" | "body" | "bodyOnNarrow";
  badge?: ReactNode;
  bodyClassName?: string;
  className?: string;
  description: ReactNode;
  dismissAction?: HomeAnnouncementAction | null;
  leadingClassName?: string;
  leadingVisual?: ReactNode;
  primaryAction?: HomeAnnouncementAction | null;
  secondaryAction?: HomeAnnouncementAction | null;
  title: ReactNode;
};

type AnnouncementEntry = {
  content: ReactNode;
  isEligible: boolean;
  isLoading: boolean;
};

type BeaconAction = {
  action_v2: { url?: string | null; web_url?: string | null };
  id: string;
  text?: string | null;
  type?: "primary" | "secondary" | string | null;
};

type HomeBeacon = {
  action_items: BeaconAction[];
  beacon_id: string;
  ui_info: {
    description: ReactNode;
    icon_image_url?: string | null;
    title: ReactNode;
    type: "beacon_banner_info";
  };
};

type HomeBeaconResponse = {
  beacon_ui_response?: HomeBeacon | null;
};

type HomeBeaconQueryData = {
  accountId: string | null;
  beacon: HomeBeacon | null;
  shouldKeepLastServedBeacon: boolean;
};

type HomeBeaconRawQueryData = {
  accountId: string | null;
  response: HomeBeaconResponse;
};

type LocalBeaconActionHandler = (input: {
  action: BeaconAction;
  beacon: HomeBeacon;
}) => boolean | void;

type LocalBeaconActionHandlers = Record<string, LocalBeaconActionHandler>;

type HomeAnnouncementAppScopeStore = {
  get(signal: unknown): unknown;
  set(signal: unknown, value: unknown): void;
};

type ConnectedAppSuggestion = {
  isAccessible: boolean;
  isEnabled: boolean;
};

type AccountInfo = {
  email?: string | null;
  plan?: string | null;
};

type RateLimitCreditsResponse = {
  available_count?: number;
  rate_limit_reset_credits?: {
    available_count?: number;
  };
};

type FastModeBannerState = AnnouncementEntry & {
  fastModeModel: { serviceTiers?: Array<{ id: string }> } | null;
  intl: ReturnType<typeof useIntl>;
  isSubmitting: boolean;
  setHasSeenFastModeHomeBanner: (seen: boolean) => void;
  setIsSubmitting: (isSubmitting: boolean) => void;
  setServiceTier: (serviceTier: string | null, source: string) => Promise<void>;
};

const CODEX_APP_DOWNLOAD_URL =
  "https://persistent.oaistatic.com/codex-app-prod/Codex.dmg";
const CODEX_PRODUCT_NAME = "Codex";
const CONNECTED_APPS_CONSENT_GATE = "2425897452";
const MULTI_AGENT_PLUGIN_NAME = "multi_agent";
const RATE_LIMIT_RESET_DISMISSAL_TTL_MS = 24 * 60 * 60 * 1000;

const hasSeenAppUpsellBannerAtom = persistedAtom(
  "has-seen-app-upsell-banner",
  false,
);
const hasSeenFastModeHomeBannerAtom = persistedAtom(
  "has-seen-fast-mode-home-banner",
  false,
);
const hasSeenMultiAgentComposerBannerAtom = persistedAtom(
  "has-seen-multi-agent-composer-banner",
  false,
);
const giftCreditsHomeBannerDismissedAtom = persistedAtom(
  "has-dismissed-gift-credits-home-banner",
  false,
);
const giftCreditsPurchaseFlowOpenedAtom = persistedAtom(
  "has-opened-gift-credits-purchase-flow",
  false,
);
const rateLimitResetDismissalByAccountAtom = persistedAtom<
  Record<string, { availableCount: number; dismissedAtMs: number }>
>("rate-limit-reset-home-announcement-dismissal-by-account-id", {});

const currentBeaconAccountSignal = {
  id: "home-announcement-current-beacon-account",
};
const isBeaconEligibleSignal = { id: "home-announcement-beacon-eligible" };
const viewedBeaconIdsSignal = { id: "home-announcement-viewed-beacon-ids" };
const dismissedBeaconIdsSignal = {
  id: "home-announcement-dismissed-beacon-ids",
};
const lastServedBeaconSignal = { id: "home-announcement-last-served-beacon" };

export function initHomeAnnouncementsChunk(): void {
  initRemoteConnectionsOnboardingSignalsChunk();
}

function HomeAnnouncementActionButton({
  action,
}: {
  action: HomeAnnouncementAction;
}) {
  const Icon = action.icon;
  return (
    <Button
      aria-label={action.ariaLabel}
      className={action.className}
      color={action.color ?? "primary"}
      disabled={action.disabled}
      loading={action.loading}
      onClick={action.onClick}
      size={action.size ?? "composerSm"}
      uniform={action.uniform}
    >
      {Icon ? <Icon className="icon-xs" /> : null}
      {action.label}
    </Button>
  );
}

function HomeAnnouncementBanner({
  actionsClassName,
  actionsPlacement = "aside",
  badge,
  bodyClassName,
  className,
  description,
  dismissAction,
  leadingClassName,
  leadingVisual,
  primaryAction,
  secondaryAction,
  title,
}: HomeAnnouncementBannerProps) {
  const hasActions =
    primaryAction != null || secondaryAction != null || dismissAction != null;
  const renderActions = (responsiveClassName?: string) => (
    <div
      className={clsx(
        "flex items-center gap-2",
        actionsPlacement === "body" || actionsPlacement === "bodyOnNarrow"
          ? "mt-3 justify-start"
          : "self-center max-[400px]:w-full max-[400px]:justify-center max-[400px]:self-stretch",
        actionsClassName,
        responsiveClassName,
      )}
    >
      {secondaryAction ? (
        <HomeAnnouncementActionButton action={secondaryAction} />
      ) : null}
      {primaryAction ? (
        <HomeAnnouncementActionButton action={primaryAction} />
      ) : null}
      {dismissAction ? (
        <HomeAnnouncementActionButton action={dismissAction} />
      ) : null}
    </div>
  );

  const bodyActions =
    hasActions && actionsPlacement === "body" ? renderActions() : null;
  const narrowBodyActions =
    hasActions && actionsPlacement === "bodyOnNarrow"
      ? renderActions("hidden max-[400px]:flex")
      : null;
  const asideActions =
    hasActions && actionsPlacement === "aside" ? renderActions() : null;
  const wideAsideActions =
    hasActions && actionsPlacement === "bodyOnNarrow"
      ? renderActions("max-[400px]:hidden")
      : null;

  return (
    <div
      className={clsx(
        "flex min-w-0 items-center justify-between gap-3 rounded-3xl border border-token-input-border bg-token-input-background/70 py-3 pr-3 text-sm dark:border-token-input-border max-[400px]:items-start max-[400px]:flex-col",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-2 max-[400px]:items-start">
        {leadingVisual ? (
          <div
            className={clsx(
              "text-token-text-secondary ml-1 flex h-6 w-6 shrink-0 items-center justify-center self-center",
              leadingClassName,
            )}
          >
            {leadingVisual}
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="min-w-0 text-base font-medium text-token-text-primary">
              {title}
            </div>
            {badge ? (
              <span className="rounded-full border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary">
                {badge}
              </span>
            ) : null}
          </div>
          <div
            className={clsx(
              "text-token-text-secondary mt-0.5 text-base leading-relaxed text-pretty",
              bodyClassName,
            )}
          >
            {description}
          </div>
          {bodyActions}
          {narrowBodyActions}
        </div>
      </div>
      {asideActions ?? wideAsideActions}
    </div>
  );
}

function ConnectedAppsConsentBanner({
  onDisable,
  onDismiss,
}: {
  onDisable: () => void;
  onDismiss: () => void;
}) {
  return (
    <HomeAnnouncementBanner
      title={
        <FormattedMessage
          id="home.ambientSuggestions.connectedAppsConsent.title"
          defaultMessage="Personalize Codex"
          description="Title for the ambient suggestions connected apps home banner"
        />
      }
      description={
        <FormattedMessage
          id="home.ambientSuggestions.connectedAppsConsent.body"
          defaultMessage="Codex suggests what to do next by searching project files and connected apps"
          description="Body for the ambient suggestions connected apps home banner"
        />
      }
      leadingVisual={<UsageGaugeIcon className="icon-sm" />}
      secondaryAction={{
        label: (
          <FormattedMessage
            id="home.ambientSuggestions.connectedAppsConsent.disable"
            defaultMessage="Disable"
            description="Button label for disabling ambient suggestions from the home banner"
          />
        ),
        onClick: onDisable,
        color: "ghost",
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
      primaryAction={{
        label: (
          <FormattedMessage
            id="home.ambientSuggestions.connectedAppsConsent.ok"
            defaultMessage="OK"
            description="Button label for accepting the ambient suggestions connected apps home banner"
          />
        ),
        onClick: onDismiss,
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
    />
  );
}

function useConnectedAppsConsentAnnouncement() {
  const appScope = useAppScopeStore();
  const { authMethod, email, isLoading, planAtLogin } = useAuth();
  const hasSeenConsent = useAppScopeValue<boolean | null>(
    hasSeenAmbientSuggestionsConnectedAppsConsentSignal,
  );
  const dynamicConfig = useStatsigDynamicConfig?.(CONNECTED_APPS_CONSENT_GATE);
  const connectedAppsGateEnabled =
    dynamicConfig?.get?.("enabled", false) ?? dynamicConfig === true;
  const shouldLoadApps =
    authMethod === "chatgpt" &&
    connectedAppsGateEnabled &&
    hasSeenConsent === false &&
    isEligiblePlanForConnectedAppSuggestions({
      authMethod,
      email,
      plan: planAtLogin,
    });
  const accountInfoQuery = useQuery<AccountInfo>({
    enabled: authMethod === "chatgpt",
    queryFn: () => codexRequest.safeGet("account-info") as Promise<AccountInfo>,
    queryKey: ["account-info"],
  });
  const connectedAppsQuery = useQuery<ConnectedAppSuggestion[]>({
    enabled: shouldLoadApps,
    queryFn: () =>
      codexRequest.safeGet("/aip/connectors") as Promise<
        ConnectedAppSuggestion[]
      >,
    queryKey: ["ambient-suggestion-connected-apps"],
  });
  const connectedApps = filterAccessibleEnabledAmbientSuggestionApps(
    Array.isArray(connectedAppsQuery.data)
      ? (connectedAppsQuery.data as ConnectedAppSuggestion[])
      : [],
  );
  const isLoadingEligibilityInputs =
    isLoading || hasSeenConsent == null || accountInfoQuery.isLoading;
  const isLoadingApps = shouldLoadApps && connectedAppsQuery.isLoading;
  const isLoadingAnnouncement = isLoadingEligibilityInputs || isLoadingApps;

  return {
    isEligible:
      !isLoadingAnnouncement && shouldLoadApps && connectedApps.length > 0,
    isLoading: isLoadingAnnouncement,
    onDismiss: () => {
      appScope.set(hasSeenAmbientSuggestionsConnectedAppsConsentSignal, true);
    },
    onDisable: () => {
      appScope.set(hasSeenAmbientSuggestionsConnectedAppsConsentSignal, true);
    },
  };
}

function isEligiblePlanForConnectedAppSuggestions({
  authMethod,
  email,
  plan,
}: {
  authMethod: string | null;
  email?: string | null;
  plan?: string | null;
}) {
  return authMethod === "chatgpt" && (email != null || plan != null);
}

function buildBeaconActionHandlerKey({
  actionId,
  beaconId,
}: {
  actionId: string;
  beaconId: string;
}) {
  return `${beaconId}:${actionId}`;
}

function selectHomeBeacon(response: HomeBeaconResponse): HomeBeacon | null {
  const beacon = response.beacon_ui_response;
  return beacon?.ui_info.type === "beacon_banner_info" ? beacon : null;
}

function normalizeHomeBeaconResponse({
  accountId,
  response,
}: {
  accountId: string | null;
  response: HomeBeaconResponse;
}): HomeBeaconQueryData {
  return response.beacon_ui_response == null
    ? { accountId, beacon: null, shouldKeepLastServedBeacon: true }
    : {
        accountId,
        beacon: selectHomeBeacon(response),
        shouldKeepLastServedBeacon: false,
      };
}

function readBeaconActionUrl(action: BeaconAction): string | null {
  const url =
    action.action_v2.url != null
      ? action.action_v2.url
      : (action.action_v2.web_url ?? null);
  if (url == null) return null;
  return isSafeBeaconActionUrl(url) ? url : null;
}

function isSafeBeaconActionUrl(url: string): boolean {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    (url.startsWith("/") && !url.startsWith("//"))
  );
}

function shouldLoadHomeBeacon({
  accountId,
  authMethod,
  isAuthLoading,
}: {
  accountId: string | null;
  authMethod: string | null;
  isAuthLoading: boolean;
}) {
  return !isAuthLoading && authMethod === "chatgpt" && accountId != null;
}

function shouldWaitForHomeBeaconAuth({
  isAuthLoading,
}: {
  isAuthLoading: boolean;
}) {
  return isAuthLoading;
}

async function sendBeaconEvent(
  beacon: HomeBeacon,
  eventType: "click" | "dismiss" | "view",
  ctaId?: string,
) {
  try {
    await codexRequest.safePost("/beacons/event", {
      requestBody:
        ctaId == null
          ? {
              beacon_id: beacon.beacon_id,
              event_type: eventType,
            }
          : {
              beacon_id: beacon.beacon_id,
              event_cta_id: ctaId,
              event_type: eventType,
            },
    });
  } catch {
    // Best-effort analytics path.
  }
}

function getBeaconAccountKey(accountId: string, beaconId: string) {
  return `${accountId}:${beaconId}`;
}

function markBeaconViewed(
  appScope: HomeAnnouncementAppScopeStore,
  accountId: string,
  beacon: HomeBeacon,
) {
  const beaconKey = getBeaconAccountKey(accountId, beacon.beacon_id);
  const viewedBeaconIds =
    (appScope.get(viewedBeaconIdsSignal) as Set<string> | undefined) ??
    new Set<string>();
  if (viewedBeaconIds.has(beaconKey)) return;
  appScope.set(viewedBeaconIdsSignal, new Set(viewedBeaconIds).add(beaconKey));
  void sendBeaconEvent(beacon, "view");
}

function markBeaconDismissed(
  appScope: HomeAnnouncementAppScopeStore,
  accountId: string,
  beacon: HomeBeacon,
) {
  const beaconKey = getBeaconAccountKey(accountId, beacon.beacon_id);
  const dismissedBeaconIds =
    (appScope.get(dismissedBeaconIdsSignal) as Set<string> | undefined) ??
    new Set<string>();
  appScope.set(
    dismissedBeaconIdsSignal,
    new Set(dismissedBeaconIds).add(beaconKey),
  );
  void sendBeaconEvent(beacon, "dismiss");
}

function useBackendHomeBeaconAnnouncement() {
  const appScope = useAppScopeStore();
  const { accountId, authMethod, isLoading: isAuthLoading, userId } = useAuth();
  const dismissedBeaconIds =
    useAppScopeValue<Set<string>>(dismissedBeaconIdsSignal) ??
    new Set<string>();
  const cachedAccountId = useAppScopeValue<string | null>(
    currentBeaconAccountSignal,
  );
  const isEligibleAccount = useAppScopeValue<boolean>(isBeaconEligibleSignal);
  const lastServedBeacon = useAppScopeValue<{
    accountId: string;
    beacon: HomeBeacon;
  } | null>(lastServedBeaconSignal);
  const resolvedAccountId = accountId ?? userId ?? null;
  const canLoadBeacon = shouldLoadHomeBeacon({
    accountId: resolvedAccountId,
    authMethod,
    isAuthLoading,
  });
  const isWaitingForAuth = shouldWaitForHomeBeaconAuth({ isAuthLoading });

  useEffect(() => {
    appScope.set(currentBeaconAccountSignal, resolvedAccountId);
    appScope.set(isBeaconEligibleSignal, canLoadBeacon);
  }, [appScope, canLoadBeacon, resolvedAccountId]);

  const query = useQuery<HomeBeaconRawQueryData>({
    enabled: canLoadBeacon,
    queryFn: async () => ({
      accountId: resolvedAccountId,
      response: (await codexRequest.safeGet("/beacons/home", {
        additionalHeaders: { "Cache-Control": "no-store" },
        parameters: { query: { product: "codex" } },
      })) as HomeBeaconResponse,
    }),
    queryKey: ["codex-app-home-beacon", resolvedAccountId],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 60_000,
    select: normalizeHomeBeaconResponse,
  });

  useEffect(() => {
    const data = query.data as HomeBeaconQueryData | undefined;
    if (data?.accountId != null && data.beacon != null) {
      appScope.set(lastServedBeaconSignal, {
        accountId: data.accountId,
        beacon: data.beacon,
      });
    }
  }, [appScope, query.data]);

  const queryData =
    (query.data as HomeBeaconQueryData | undefined)?.accountId ===
    resolvedAccountId
      ? (query.data as HomeBeaconQueryData | undefined)
      : undefined;
  const servedBeacon =
    queryData?.beacon ??
    (queryData?.shouldKeepLastServedBeacon &&
    lastServedBeacon?.accountId === resolvedAccountId
      ? lastServedBeacon.beacon
      : null);
  const beaconKey =
    servedBeacon != null && resolvedAccountId != null
      ? getBeaconAccountKey(resolvedAccountId, servedBeacon.beacon_id)
      : null;
  const visibleBeacon =
    canLoadBeacon &&
    servedBeacon != null &&
    beaconKey != null &&
    !dismissedBeaconIds.has(beaconKey)
      ? servedBeacon
      : null;
  const shouldSuppressVanillaPromos = isWaitingForAuth || visibleBeacon != null;

  return {
    accountId: resolvedAccountId,
    beacon: visibleBeacon,
    isEligible: visibleBeacon != null,
    isLoading:
      isWaitingForAuth ||
      (canLoadBeacon && (!isEligibleAccount || query.isLoading)),
    shouldSuppressVanillaPromos,
    cachedAccountId,
  };
}

function BackendHomeBeaconAnnouncement({
  accountId,
  beacon,
  localActionHandlers,
}: {
  accountId: string;
  beacon: HomeBeacon;
  localActionHandlers?: LocalBeaconActionHandlers;
}) {
  const appScope = useAppScopeStore();
  useEffect(() => {
    markBeaconViewed(appScope, accountId, beacon);
  }, [accountId, appScope, beacon]);

  return (
    <BackendHomeBeaconBanner
      beacon={beacon}
      localActionHandlers={localActionHandlers}
      onDismiss={() => {
        markBeaconDismissed(appScope, accountId, beacon);
      }}
    />
  );
}

function BackendHomeBeaconBanner({
  beacon,
  localActionHandlers,
  onDismiss,
}: {
  beacon: HomeBeacon;
  localActionHandlers?: LocalBeaconActionHandlers;
  onDismiss: () => void;
}) {
  const intl = useIntl();
  const navigate = useNavigate();
  const primaryAction = beacon.action_items.find(isPrimaryBeaconAction);
  const secondaryAction = beacon.action_items.find(isSecondaryBeaconAction);
  const buildAction = (
    action: BeaconAction | undefined,
  ): HomeAnnouncementAction | null => {
    if (action == null || action.text == null) return null;
    const localHandler =
      localActionHandlers?.[
        buildBeaconActionHandlerKey({
          actionId: action.id,
          beaconId: beacon.beacon_id,
        })
      ];
    const safeUrl = readBeaconActionUrl(action);
    if (safeUrl == null && localHandler == null) return null;
    return {
      label: action.text,
      onClick: (event) => {
        void sendBeaconEvent(beacon, "click", action.id);
        if (localHandler?.({ action, beacon }) === true || safeUrl == null) {
          return;
        }
        if (safeUrl.startsWith("/")) navigate(safeUrl);
        else {
          openExternalLinkFromEvent?.({
            event,
            href: safeUrl,
            initiator: "open_in_browser_bridge",
          });
        }
      },
      className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
    };
  };
  const dismissLabel = intl.formatMessage(
    {
      id: "codexAppHomeBeaconAnnouncement.dismiss",
      defaultMessage: "Dismiss {appName} beacon banner",
      description:
        "Accessible label for dismissing the backend-driven Codex app home banner",
    },
    { appName: CODEX_PRODUCT_NAME },
  );

  return (
    <HomeAnnouncementBanner
      title={beacon.ui_info.title}
      description={beacon.ui_info.description}
      leadingVisual={
        beacon.ui_info.icon_image_url ? (
          <img
            alt=""
            src={beacon.ui_info.icon_image_url}
            className="h-8 w-8 shrink-0"
          />
        ) : undefined
      }
      leadingClassName="ml-0 h-8 w-8"
      primaryAction={buildAction(primaryAction)}
      secondaryAction={buildAction(secondaryAction)}
      dismissAction={{
        ariaLabel: dismissLabel,
        color: "ghost",
        icon: XIcon,
        onClick: onDismiss,
        uniform: true,
        className:
          "!border-transparent text-token-description-foreground hover:text-token-foreground",
      }}
    />
  );
}

function isSecondaryBeaconAction(action: BeaconAction) {
  return action.type === "secondary";
}

function isPrimaryBeaconAction(action: BeaconAction) {
  return action.type == null || action.type === "primary";
}

function AppUpsellBanner({
  message,
  setHasSeenAppUpsellBanner,
}: {
  message: ReactNode;
  setHasSeenAppUpsellBanner: (hasSeen: boolean) => void;
}) {
  const intl = useIntl();
  return (
    <HomeAnnouncementBanner
      title={
        <FormattedMessage
          id="codex.appUpsellBanner.title"
          defaultMessage="Codex app"
          description="Title shown in the app upsell banner"
        />
      }
      description={message}
      leadingVisual={
        <img alt="" src={codexAppImageUrl} className="h-8 w-8 shrink-0" />
      }
      leadingClassName="ml-0 h-8 w-8"
      primaryAction={{
        label: (
          <FormattedMessage
            id="codex.appUpsellBanner.download"
            defaultMessage="Download"
            description="Primary action label to download the Codex app"
          />
        ),
        onClick: (event) => {
          setHasSeenAppUpsellBanner(true);
          openExternalLinkFromEvent?.({
            event,
            href: CODEX_APP_DOWNLOAD_URL,
            initiator: "open_in_browser_bridge",
          });
        },
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
      dismissAction={{
        ariaLabel: intl.formatMessage({
          id: "codex.appUpsellBanner.dismissLabel",
          defaultMessage: "Dismiss Codex app banner",
          description:
            "Accessible label for dismissing the Codex app upsell banner",
        }),
        color: "ghost",
        icon: XIcon,
        onClick: () => {
          setHasSeenAppUpsellBanner(true);
        },
        uniform: true,
        className:
          "!border-transparent text-token-description-foreground hover:text-token-foreground",
      }}
    />
  );
}

function useAppUpsellAnnouncement() {
  const [hasSeenAppUpsellBanner, setHasSeenAppUpsellBanner] = useAtom(
    hasSeenAppUpsellBannerAtom as never,
  ) as [boolean, (hasSeen: boolean) => void];
  const { authMethod, isLoading, planAtLogin } = useAuth();
  const platform = readNavigatorPlatform();
  const accountInfoQuery = useQuery<AccountInfo>({
    enabled: authMethod === "chatgpt" || authMethod === "apikey",
    queryFn: () => codexRequest.safeGet("account-info") as Promise<AccountInfo>,
    queryKey: ["account-info"],
  });
  const plan =
    (accountInfoQuery.data as AccountInfo | undefined)?.plan ?? planAtLogin;
  const isPaidChatGptPlan =
    authMethod === "chatgpt" && plan !== "free" && plan !== "go";
  const canUseDesktopApp =
    platform === "macOS" &&
    !hasSeenAppUpsellBanner &&
    authMethod !== "copilot" &&
    (isPaidChatGptPlan || authMethod === "apikey");
  const isLoadingAnnouncement =
    !hasSeenAppUpsellBanner &&
    (isLoading || (authMethod === "chatgpt" && accountInfoQuery.isLoading));
  const message = canUseDesktopApp ? (
    <FormattedMessage
      id="codex.appUpsellBanner.cbpApi.message"
      defaultMessage="Build faster with the Codex app. Download now or {learnMoreLink}"
      description="Message shown in the app upsell banner for paid ChatGPT and API key users"
      values={{
        learnMoreLink: (
          <a
            className="text-token-link focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none"
            href="https://chatgpt.com/codex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id="codex.appUpsellBanner.learnMoreLowercase"
              defaultMessage="learn more"
              description="Lowercase learn more link text in the app upsell banner"
            />
          </a>
        ) as unknown as string,
      }}
    />
  ) : null;

  return {
    isEligible: message != null,
    isLoading: isLoadingAnnouncement,
    message,
    setHasSeenAppUpsellBanner,
  };
}

function readNavigatorPlatform() {
  const userAgentDataPlatform =
    typeof navigator !== "undefined" &&
    "userAgentData" in navigator &&
    typeof (navigator as { userAgentData?: { platform?: string } })
      .userAgentData?.platform === "string"
      ? (navigator as { userAgentData?: { platform?: string } }).userAgentData
          ?.platform
      : null;
  const platform = (
    userAgentDataPlatform ??
    navigator?.platform ??
    ""
  ).toLowerCase();
  if (platform.includes("mac")) return "macOS";
  if (platform.includes("win")) return "windows";
  if (platform.includes("linux")) return "linux";
  return "unknown";
}

function FastModeBanner({
  content,
  fastModeModel,
  intl,
  isSubmitting,
  setHasSeenFastModeHomeBanner,
  setIsSubmitting,
  setServiceTier,
}: FastModeBannerState) {
  const appScope = useAppScopeStore();
  const enableFastMode = () => {
    if (fastModeModel == null) return;
    setIsSubmitting(true);
    recordProductEvent?.(appScope, "codex_fast_mode_home_banner_enable", {});
    setServiceTier(
      getPriorityServiceTierId(fastModeModel) ?? "priority",
      "home_banner",
    ).finally(() => {
      setHasSeenFastModeHomeBanner(true);
      setIsSubmitting(false);
    });
  };
  const dismissLabel = intl.formatMessage({
    id: "codex.fastModeHomeBanner.dismissLabel",
    defaultMessage: "Dismiss Fast mode banner",
    description: "Accessible label for dismissing the Fast mode home banner",
  });

  return (
    <HomeAnnouncementBanner
      title={
        <FormattedMessage
          id="codex.fastModeHomeBanner.title"
          defaultMessage="Enable Fast mode"
          description="Title shown in the Fast mode home banner"
        />
      }
      description={content}
      leadingVisual={
        <FastModeHomeBannerIcon className="icon-sm text-[#FFC93C]" />
      }
      primaryAction={{
        label: (
          <FormattedMessage
            id="codex.fastModeHomeBanner.cta.primary"
            defaultMessage="Enable now"
            description="Primary CTA shown in the Fast mode home banner"
          />
        ),
        onClick: enableFastMode,
        disabled: isSubmitting,
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
      dismissAction={{
        ariaLabel: dismissLabel,
        color: "ghost",
        icon: XIcon,
        onClick: () => {
          recordProductEvent?.(
            appScope,
            "codex_fast_mode_home_banner_dismiss",
            {},
          );
          setHasSeenFastModeHomeBanner(true);
        },
        disabled: isSubmitting,
        uniform: true,
        className:
          "!border-transparent text-token-description-foreground hover:text-token-foreground",
      }}
    />
  );
}

function useFastModeAnnouncement(): FastModeBannerState {
  const appScope = useAppScopeStore();
  const intl = useIntl();
  const [hasSeenFastModeHomeBanner, setHasSeenFastModeHomeBanner] = useAtom(
    hasSeenFastModeHomeBannerAtom as never,
  ) as [boolean, (hasSeen: boolean) => void];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const didLogImpressionRef = useRef(false);
  const { data: modelsData } = useModelsQuery?.({}) ?? {};
  const { serviceTierSettings, setServiceTier } = useServiceTierSettings(null);
  const fastModeModel = findFastModeModel(modelsData?.models);
  const isEligibleForEstimate =
    fastModeModel != null &&
    !hasSeenFastModeHomeBanner &&
    serviceTierSettings.selectedServiceTier == null &&
    !serviceTierSettings.isLoading;
  const { estimate, estimateStatus } = useFastModePersonalizedEstimate(
    isEligibleForEstimate,
  );
  const isEligible =
    isEligibleForEstimate && estimateStatus === "ready" && estimate != null;
  const isLoading =
    !hasSeenFastModeHomeBanner &&
    isEligibleForEstimate &&
    estimateStatus !== "ready" &&
    estimateStatus !== "failed";

  useEffect(() => {
    if (!isEligible || didLogImpressionRef.current) return;
    didLogImpressionRef.current = true;
    recordProductEvent?.(
      appScope,
      "codex_fast_mode_home_banner_impression",
      {},
    );
  }, [appScope, isEligible]);

  const content =
    estimate == null ? null : (
      <FormattedMessage
        {...fastModePersonalizedEstimateMessages.bodyPersonalized}
        values={{
          duration: estimate.savedDuration,
          threadCountLabel: estimate.threadCountLabel,
        }}
      />
    );

  return {
    content,
    fastModeModel,
    intl,
    isEligible,
    isLoading,
    isSubmitting,
    setHasSeenFastModeHomeBanner,
    setIsSubmitting,
    setServiceTier,
  };
}

function findFastModeModel(
  models: unknown,
): { serviceTiers?: Array<{ id: string }> } | null {
  return (
    (Array.isArray(models)
      ? models.find((model) =>
          (
            model as { serviceTiers?: Array<{ id: string }> }
          ).serviceTiers?.some((tier) => tier.id === "priority"),
        )
      : null) ?? null
  );
}

function getPriorityServiceTierId(model: {
  serviceTiers?: Array<{ id: string }>;
}) {
  return model.serviceTiers?.find((tier) => tier.id === "priority")?.id;
}

function useMultiAgentComposerAnnouncement() {
  const pluginsQuery = useAvailablePlugins?.({ hostId: "local" }) ?? {};
  const [hasSeenMultiAgentComposerBanner] = useAtom(
    hasSeenMultiAgentComposerBannerAtom as never,
  ) as [boolean, (hasSeen: boolean) => void];
  const plugins = Array.isArray(pluginsQuery.data) ? pluginsQuery.data : [];
  const hasMultiAgentPlugin = plugins.some(isMultiAgentPluginEnabled);
  return {
    isEligible: !hasSeenMultiAgentComposerBanner && !hasMultiAgentPlugin,
    isLoading:
      !hasSeenMultiAgentComposerBanner &&
      pluginsQuery.data == null &&
      Boolean(pluginsQuery.isLoading),
  };
}

function isMultiAgentPluginEnabled(plugin: unknown) {
  return (
    (plugin as { enabled?: boolean; name?: string }).name ===
      MULTI_AGENT_PLUGIN_NAME &&
    (plugin as { enabled?: boolean }).enabled === true
  );
}

function MultiAgentComposerBanner({ onTryNow }: { onTryNow?: () => void }) {
  const appScope = useAppScopeStore();
  const intl = useIntl();
  const navigate = useNavigate();
  const [hasSeenMultiAgentComposerBanner, setHasSeenMultiAgentComposerBanner] =
    useAtom(hasSeenMultiAgentComposerBannerAtom as never) as [
      boolean,
      (hasSeen: boolean) => void,
    ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const didLogImpressionRef = useRef(false);
  const isVisible = !hasSeenMultiAgentComposerBanner;

  useEffect(() => {
    if (!isVisible || didLogImpressionRef.current) return;
    didLogImpressionRef.current = true;
    recordProductEvent?.(appScope, "codex_multi_agent_banner_impression", {});
  }, [appScope, isVisible]);

  if (!isVisible) return null;

  const tryNow = () => {
    setIsSubmitting(true);
    recordProductEvent?.(appScope, "codex_multi_agent_banner_try_now", {});
    Promise.resolve(
      openDialog?.("enable-plugin", { featureName: MULTI_AGENT_PLUGIN_NAME }),
    ).finally(() => {
      if (onTryNow) onTryNow();
      else
        navigate("/", {
          state: { composerPrefill: "Spawn a subagent to explore this repo." },
        });
      setHasSeenMultiAgentComposerBanner(true);
      setIsSubmitting(false);
    });
  };

  return (
    <HomeAnnouncementBanner
      title={
        <FormattedMessage
          id="codex.multiAgentComposerBanner.title"
          defaultMessage="Subagents in Codex"
          description="Title shown in the multi-agent composer banner"
        />
      }
      description={
        <FormattedMessage
          id="codex.multiAgentComposerBanner.body"
          defaultMessage="Delegate work to subagents that work in parallel. Note: may increase token usage."
          description="Body shown in the multi-agent composer banner"
        />
      }
      leadingVisual={<TeamIcon className="icon-sm" />}
      primaryAction={{
        label: (
          <FormattedMessage
            id="codex.multiAgentComposerBanner.cta.primary"
            defaultMessage="Try now"
            description="Primary CTA shown in the multi-agent composer banner"
          />
        ),
        onClick: tryNow,
        disabled: isSubmitting,
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
      dismissAction={{
        ariaLabel: intl.formatMessage({
          id: "codex.multiAgentComposerBanner.dismissLabel",
          defaultMessage: "Dismiss subagent banner",
          description:
            "Accessible label for dismissing the multi-agent composer banner",
        }),
        color: "ghost",
        icon: XIcon,
        onClick: () => {
          recordProductEvent?.(
            appScope,
            "codex_multi_agent_banner_dismiss",
            {},
          );
          setHasSeenMultiAgentComposerBanner(true);
        },
        disabled: isSubmitting,
        uniform: true,
        className:
          "!border-transparent text-token-description-foreground hover:text-token-foreground",
      }}
    />
  );
}

function GiftCreditsBanner({
  onDismiss,
  onOpenGiftCredits,
}: {
  onDismiss: () => void;
  onOpenGiftCredits: () => void;
}) {
  const intl = useIntl();
  return (
    <HomeAnnouncementBanner
      bodyClassName="!text-sm !leading-5"
      title={
        <span className="text-sm">
          <FormattedMessage
            id="codex.giftCredits.homeBanner.title"
            defaultMessage="Give the gift of Codex"
            description="Title shown in the Codex home banner promoting gift credits"
          />
        </span>
      }
      description={
        <FormattedMessage
          id="codex.giftCredits.homeBanner.description"
          defaultMessage="Send Codex credits to a friend to help them turn their ideas into reality."
          description="Description shown in the Codex home banner promoting gift credits"
        />
      }
      leadingVisual={<ShoppingBagPlusIcon className="icon-sm" />}
      primaryAction={{
        label: (
          <FormattedMessage
            id="codex.giftCredits.homeBanner.action"
            defaultMessage="Gift credits"
            description="Button label that opens the ChatGPT gift credits purchase flow"
          />
        ),
        onClick: onOpenGiftCredits,
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
      dismissAction={{
        ariaLabel: intl.formatMessage({
          id: "codex.giftCredits.homeBanner.dismiss",
          defaultMessage: "Dismiss gift credits banner",
          description:
            "Accessible label for dismissing the Codex gift credits home banner",
        }),
        color: "ghost",
        icon: XIcon,
        onClick: onDismiss,
        uniform: true,
        className:
          "!border-transparent text-token-description-foreground hover:text-token-foreground",
      }}
    />
  );
}

function useGiftCreditsAnnouncement() {
  const [isDismissed, setIsDismissed] = useAtom(
    giftCreditsHomeBannerDismissedAtom as never,
  ) as [boolean, (dismissed: boolean) => void];
  const [, setGiftCreditsPurchaseFlowOpened] = useAtom(
    giftCreditsPurchaseFlowOpenedAtom as never,
  ) as [boolean, (opened: boolean) => void];
  const dynamicConfig = useStatsigDynamicConfig?.(
    "codex_gift_credits_home_banner",
  );
  const isEnabled = dynamicConfig?.get?.("enabled", false) ?? false;
  return {
    dismiss: () => {
      setIsDismissed(true);
      setGiftCreditsPurchaseFlowOpened(true);
    },
    isEligible: Boolean(isEnabled) && !isDismissed,
    isLoading: false,
    openGiftCredits: () => {
      setIsDismissed(true);
      openExternalLinkFromEvent?.({
        href: "https://chatgpt.com/codex/gift",
        initiator: "open_in_browser_bridge",
      });
    },
  };
}

function RateLimitResetHomeBanner({
  availableCount,
  onDismiss,
}: {
  availableCount: number;
  onDismiss: () => void;
}) {
  const appScope = useAppScopeStore();
  const openResets = () => {
    openDialog?.(appScope, RateLimitResetModal, {
      initialAvailableCount: availableCount,
      isRateLimitReached: false,
      onResetComplete: () => {},
    });
  };
  return (
    <RateLimitResetBannerContent
      onDismiss={onDismiss}
      onSeeResets={openResets}
    />
  );
}

function RateLimitResetBannerContent({
  onDismiss,
  onSeeResets,
}: {
  onDismiss: () => void;
  onSeeResets: () => void;
}) {
  const intl = useIntl();
  return (
    <HomeAnnouncementBanner
      title={
        <FormattedMessage
          id="codex.rateLimitResetHomeBanner.title"
          defaultMessage="You have a new rate limit reset available"
          description="Title shown in the home banner when a Codex rate limit reset credit is available"
        />
      }
      description={
        <FormattedMessage
          id="codex.rateLimitResetHomeBanner.description"
          defaultMessage="You were granted a rate limit reset that will expire in 30 days."
          description="Description shown in the home banner when a Codex rate limit reset credit is available"
        />
      }
      leadingVisual={<CloudTerminalIcon className="size-8" />}
      leadingClassName="ml-0 h-8 w-8"
      primaryAction={{
        label: (
          <FormattedMessage
            id="codex.rateLimitResetHomeBanner.seeResets"
            defaultMessage="See resets"
            description="Button label that opens the available Codex rate limit resets modal"
          />
        ),
        onClick: onSeeResets,
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
      dismissAction={{
        ariaLabel: intl.formatMessage({
          id: "codex.rateLimitResetHomeBanner.dismiss",
          defaultMessage: "Dismiss rate limit reset banner",
          description:
            "Accessible label for dismissing the Codex rate limit reset home banner",
        }),
        color: "ghost",
        icon: XIcon,
        onClick: onDismiss,
        uniform: true,
        className:
          "!border-transparent text-token-description-foreground hover:text-token-foreground",
      }}
    />
  );
}

function useRateLimitResetAnnouncement() {
  const appScope = useAppScopeStore();
  const { accountId, isLoading: isAuthLoading } = useAuth();
  const [dismissalByAccount, setDismissalByAccount] = useAtom(
    rateLimitResetDismissalByAccountAtom as never,
  ) as [
    Record<string, { availableCount: number; dismissedAtMs: number }>,
    (
      updater:
        | Record<string, { availableCount: number; dismissedAtMs: number }>
        | ((
            current: Record<
              string,
              { availableCount: number; dismissedAtMs: number }
            >,
          ) => Record<
            string,
            { availableCount: number; dismissedAtMs: number }
          >),
    ) => void,
  ];
  const creditsQuery = useRateLimitResetCreditsQuery() as {
    data?: RateLimitCreditsResponse | null;
    isLoading?: boolean;
  };
  const availableCount =
    creditsQuery.data?.rate_limit_reset_credits?.available_count ??
    creditsQuery.data?.available_count ??
    0;
  const dismissal = accountId == null ? null : dismissalByAccount[accountId];
  const isEligible =
    accountId != null &&
    availableCount > 0 &&
    (dismissal == null ||
      dismissal.availableCount < availableCount ||
      Date.now() - dismissal.dismissedAtMs >=
        RATE_LIMIT_RESET_DISMISSAL_TTL_MS);
  const dismiss = () => {
    if (accountId == null) return;
    setDismissalByAccount((current) => ({
      ...current,
      [accountId]: {
        availableCount,
        dismissedAtMs: Date.now(),
      },
    }));
    appScope.set(rateLimitResetDismissalByAccountAtom, dismissalByAccount);
  };

  return {
    availableCount,
    dismiss,
    isEligible,
    isLoading:
      isAuthLoading || (creditsQuery.data == null && creditsQuery.isLoading),
  };
}

function RemoteConnectionsBanner({
  navigate,
}: {
  navigate: (path: string) => void;
}) {
  const appScope = useAppScopeStore();
  const intl = useIntl();
  const markSeen = () => {
    appScope.set(remoteConnectionsHomeAnnouncementSeenSignal, true);
  };
  return (
    <HomeAnnouncementBanner
      title={
        <FormattedMessage
          id="remoteConnections.homeBanner.title"
          defaultMessage="Let Codex work while you're away"
          description="Title shown in the remote connections banner above the home composer"
        />
      }
      description={
        <FormattedMessage
          id="remoteConnections.homeBanner.body"
          defaultMessage="Run your chats on a remote machine and pick back up when you return"
          description="Body shown in the remote connections banner above the home composer"
        />
      }
      leadingVisual={<GlobeIcon className="icon-sm" />}
      primaryAction={{
        label: (
          <FormattedMessage
            id="remoteConnections.homeBanner.primary"
            defaultMessage="Add Connections"
            description="Primary CTA shown in the remote connections banner above the home composer"
          />
        ),
        onClick: () => {
          markSeen();
          navigate("/settings/connections");
        },
        className: "px-3 max-[400px]:flex-1 max-[400px]:justify-center",
      }}
      dismissAction={{
        ariaLabel: intl.formatMessage({
          id: "remoteConnections.homeBanner.dismiss",
          defaultMessage: "Dismiss remote connections banner",
          description:
            "Accessible label for dismissing the remote connections banner above the home composer",
        }),
        color: "ghost",
        icon: XIcon,
        onClick: markSeen,
        uniform: true,
        className:
          "!border-transparent text-token-description-foreground hover:text-token-foreground",
      }}
    />
  );
}

function useRemoteConnectionsAnnouncement() {
  const navigate = useNavigate();
  const hasSeenAnnouncement =
    useAppScopeValue<boolean | null>(
      remoteConnectionsHomeAnnouncementSeenSignal,
    ) ?? false;
  const isRemoteConnectionsVisible = useIsRemoteConnectionsVisible();
  const { remoteConnections } = useSelectableRemoteConnectionsState();
  const hasDiscoveredConnection = remoteConnections.some(
    (connection) =>
      (connection as { source?: string | null }).source === "discovered",
  );
  const isLoading = !hasSeenAnnouncement && remoteConnections == null;
  return {
    isEligible:
      !isLoading &&
      isRemoteConnectionsVisible &&
      !hasSeenAnnouncement &&
      hasDiscoveredConnection,
    isLoading,
    navigate,
  };
}

function chooseFirstEligibleEntry(entries: AnnouncementEntry[]) {
  for (const [index, entry] of entries.entries()) {
    if (entry.isEligible) return index;
    if (entry.isLoading) return undefined;
  }
  return null;
}

function FirstEligibleAnnouncement({
  entries,
}: {
  entries: AnnouncementEntry[];
}) {
  const selectedIndexRef = useRef<number | null | undefined>(undefined);
  let selectedIndex = selectedIndexRef.current;
  if (selectedIndex === undefined) {
    const nextIndex = chooseFirstEligibleEntry(entries);
    if (nextIndex !== undefined) {
      selectedIndexRef.current = nextIndex;
      selectedIndex = nextIndex;
    }
  }
  if (selectedIndex == null) return null;
  const selectedEntry = entries[selectedIndex];
  return selectedEntry == null ||
    selectedEntry.isLoading ||
    !selectedEntry.isEligible
    ? null
    : (selectedEntry.content as ReactElement);
}

function HomeRuntimeGate({
  children,
  electron,
  extension,
}: {
  children: ReactNode;
  electron?: boolean;
  extension?: boolean;
}) {
  const windowType =
    typeof document === "undefined"
      ? "electron"
      : document.documentElement.dataset.codexWindowType;
  const isExtension =
    windowType === "extension" || windowType === "chrome-extension";
  if (extension && isExtension) return <>{children}</>;
  if (electron && !isExtension) return <>{children}</>;
  return null;
}

export function HomeAnnouncements() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hideFirstNewThreadOnboardingPromos] = useAtom(
    hideFirstNewThreadOnboardingPromosAtom as never,
  ) as [boolean];
  const shouldHideOnboardingPromos = shouldHideFirstNewThreadOnboardingPromos({
    hideFirstNewThreadOnboardingPromos,
    pathname: location.pathname,
  });
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const clearWelcomeV2OnboardingParam = () => {
    if (!searchParams.has("welcomeV2Onboarding")) return;
    searchParams.delete(welcomeV2OnboardingStorageKey);
    const search = searchParams.toString();
    navigate(
      {
        pathname: location.pathname,
        search: search === "" ? "" : `?${search}`,
        hash: location.hash,
      },
      { replace: true, state: location.state },
    );
  };

  return (
    <>
      <HomeRuntimeGate electron>
        <ElectronHomeAnnouncements
          clearWelcomeV2OnboardingParam={clearWelcomeV2OnboardingParam}
          shouldHideOnboardingPromos={shouldHideOnboardingPromos}
        />
      </HomeRuntimeGate>
      <HomeRuntimeGate extension>
        <ExtensionHomeAnnouncements
          shouldHideOnboardingPromos={shouldHideOnboardingPromos}
        />
      </HomeRuntimeGate>
    </>
  );
}

function ElectronHomeAnnouncements({
  clearWelcomeV2OnboardingParam,
  shouldHideOnboardingPromos,
}: {
  clearWelcomeV2OnboardingParam: () => void;
  shouldHideOnboardingPromos: boolean;
}) {
  const connectedAppsConsent = useConnectedAppsConsentAnnouncement();
  const rateLimitReset = useRateLimitResetAnnouncement();
  const giftCredits = useGiftCreditsAnnouncement();
  const backendBeacon = useBackendHomeBeaconAnnouncement();
  const remoteConnections = useRemoteConnectionsAnnouncement();
  const multiAgentComposer = useMultiAgentComposerAnnouncement();
  const fastMode = useFastModeAnnouncement();
  const shouldShowVanillaPromos = !backendBeacon.shouldSuppressVanillaPromos;

  return (
    <FirstEligibleAnnouncement
      entries={[
        {
          isEligible:
            !shouldHideOnboardingPromos && connectedAppsConsent.isEligible,
          isLoading:
            !shouldHideOnboardingPromos && connectedAppsConsent.isLoading,
          content: (
            <ConnectedAppsConsentBanner
              onDismiss={() => {
                connectedAppsConsent.onDismiss();
                clearWelcomeV2OnboardingParam();
              }}
              onDisable={() => {
                connectedAppsConsent.onDisable();
                clearWelcomeV2OnboardingParam();
              }}
            />
          ),
        },
        {
          isEligible: !shouldHideOnboardingPromos && giftCredits.isEligible,
          isLoading: !shouldHideOnboardingPromos && giftCredits.isLoading,
          content: giftCredits.isEligible ? (
            <GiftCreditsBanner
              onDismiss={giftCredits.dismiss}
              onOpenGiftCredits={giftCredits.openGiftCredits}
            />
          ) : null,
        },
        {
          isEligible: rateLimitReset.isEligible,
          isLoading: rateLimitReset.isLoading,
          content: (
            <RateLimitResetHomeBanner
              availableCount={rateLimitReset.availableCount}
              onDismiss={rateLimitReset.dismiss}
            />
          ),
        },
        {
          isEligible: !shouldHideOnboardingPromos && backendBeacon.isEligible,
          isLoading: !shouldHideOnboardingPromos && backendBeacon.isLoading,
          content:
            backendBeacon.beacon != null && backendBeacon.accountId != null ? (
              <BackendHomeBeaconAnnouncement
                accountId={backendBeacon.accountId}
                beacon={backendBeacon.beacon}
              />
            ) : null,
        },
        {
          isEligible:
            !shouldHideOnboardingPromos &&
            shouldShowVanillaPromos &&
            remoteConnections.isEligible,
          isLoading:
            !shouldHideOnboardingPromos &&
            shouldShowVanillaPromos &&
            remoteConnections.isLoading,
          content: (
            <RemoteConnectionsBanner navigate={remoteConnections.navigate} />
          ),
        },
        {
          isEligible:
            !shouldHideOnboardingPromos &&
            shouldShowVanillaPromos &&
            multiAgentComposer.isEligible,
          isLoading:
            !shouldHideOnboardingPromos &&
            shouldShowVanillaPromos &&
            multiAgentComposer.isLoading,
          content: <MultiAgentComposerBanner />,
        },
        {
          isEligible:
            !shouldHideOnboardingPromos &&
            shouldShowVanillaPromos &&
            fastMode.isEligible,
          isLoading:
            !shouldHideOnboardingPromos &&
            shouldShowVanillaPromos &&
            fastMode.isLoading,
          content:
            fastMode.content == null ? null : <FastModeBanner {...fastMode} />,
        },
      ]}
    />
  );
}

function ExtensionHomeAnnouncements({
  shouldHideOnboardingPromos,
}: {
  shouldHideOnboardingPromos: boolean;
}) {
  const appUpsell = useAppUpsellAnnouncement();
  const multiAgentComposer = useMultiAgentComposerAnnouncement();
  const fastMode = useFastModeAnnouncement();
  return (
    <FirstEligibleAnnouncement
      entries={[
        {
          isEligible: !shouldHideOnboardingPromos && appUpsell.isEligible,
          isLoading: !shouldHideOnboardingPromos && appUpsell.isLoading,
          content:
            appUpsell.message == null ? null : (
              <AppUpsellBanner
                message={appUpsell.message}
                setHasSeenAppUpsellBanner={appUpsell.setHasSeenAppUpsellBanner}
              />
            ),
        },
        {
          isEligible:
            !shouldHideOnboardingPromos && multiAgentComposer.isEligible,
          isLoading:
            !shouldHideOnboardingPromos && multiAgentComposer.isLoading,
          content: <MultiAgentComposerBanner />,
        },
        {
          isEligible: !shouldHideOnboardingPromos && fastMode.isEligible,
          isLoading: !shouldHideOnboardingPromos && fastMode.isLoading,
          content:
            fastMode.content == null ? null : <FastModeBanner {...fastMode} />,
        },
      ]}
    />
  );
}

export {
  HomeAnnouncementBanner,
  HomeAnnouncementActionButton,
  BackendHomeBeaconAnnouncement,
  ConnectedAppsConsentBanner,
  ExtensionHomeAnnouncements,
  ElectronHomeAnnouncements,
  FirstEligibleAnnouncement,
};
