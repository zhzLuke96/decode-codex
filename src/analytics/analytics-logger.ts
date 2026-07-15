// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// ChatGPT CES (Customer Event Service) structured analytics logger. Lazily
// constructs a Segment-backed AnalyticsLogger behind the structured-analytics
// feature gate, wires it to the current Statsig client, and exposes track/flush
// callbacks that resolve to a structured result plus the Statsig user snapshot.
import { useCallback, useEffect, useMemo, useRef } from "react";
import { appLogger as logger } from "../runtime/app-logger";
import {
  AnalyticsLogger,
  useAnalyticsEnabledQuery,
} from "../boundaries/onboarding-commons-externals.facade";

const CES_REGISTER_URL = "https://chatgpt.com/ces/v1/rgstr";
const CES_BASE_URL = "https://chatgpt.com/ces/v1";

type SegmentAnalyticsConfig = {
  cdnURL: string;
  initOptions: {
    disableClientPersistence: boolean;
    integrations: {
      "Segment.io": { apiHost: string; protocol: string };
    };
  };
  settings: { writeKey: string; cdnURL: string };
};

function buildSegmentAnalyticsConfig(cdnURL: string): SegmentAnalyticsConfig {
  const url = new URL(cdnURL);
  const protocol = url.protocol === "http:" ? "http" : "https";
  const apiHost = url.host + url.pathname;
  return {
    cdnURL,
    initOptions: {
      disableClientPersistence: true,
      integrations: {
        "Segment.io": { apiHost, protocol },
      },
    },
    settings: { writeKey: "oai", cdnURL },
  };
}

const segmentAnalyticsConfig = buildSegmentAnalyticsConfig(CES_BASE_URL);
const segmentSettings = segmentAnalyticsConfig.settings;
const segmentInitOptions = segmentAnalyticsConfig.initOptions;

export type StatsigClientLike = {
  getContext: () => { user?: unknown };
  logEvent: (...args: unknown[]) => void;
  flush: () => void;
};

type WrappedStatsigClient = {
  getContext: () => { user?: unknown };
  logEvent: (...args: unknown[]) => void;
  flush: () => void;
  networkConfig: { logEventUrl: string };
};

type AnalyticsLoggerInstance = {
  initialize: (init: {
    user: unknown;
    statsigClient: WrappedStatsigClient;
  }) => Promise<unknown>;
  trackStructuredEvent: (event: unknown, payload?: unknown) => Promise<unknown>;
  trackCounter: (counter: unknown, value?: unknown) => Promise<unknown>;
  flush: (flushReason?: unknown) => Promise<unknown>;
};

export type TrackStructuredEventResult = {
  status: "sent" | "dropped" | "failed";
  statsigUser?: unknown;
  reason?: string;
};

const STRUCTURED_ANALYTICS_DISABLED_RESULT: TrackStructuredEventResult = {
  status: "dropped",
  reason: "Structured analytics disabled",
};
const STRUCTURED_ANALYTICS_INIT_FAILED_RESULT: TrackStructuredEventResult = {
  status: "failed",
  reason: "Structured analytics logger initialization failed",
};

function wrapStatsigClientForAnalytics(
  client: StatsigClientLike,
): WrappedStatsigClient {
  return {
    getContext: () => client.getContext(),
    logEvent: (...args: unknown[]) => client.logEvent(...args),
    flush: () => client.flush(),
    networkConfig: { logEventUrl: CES_REGISTER_URL },
  };
}

export type UseAnalyticsLoggerOptions = {
  appVersion?: string;
  client: StatsigClientLike;
  deviceId?: string;
  enabled: boolean;
};

export type AnalyticsLoggerHandle = {
  flush: (flushReason?: unknown) => Promise<void>;
  getStatsigUserSnapshot: () => unknown;
  trackCounter: (counter: unknown, value?: unknown) => Promise<void>;
  trackStructuredEvent: (
    event: unknown,
    payload?: unknown,
  ) => Promise<TrackStructuredEventResult>;
};

export function useAnalyticsLogger({
  appVersion,
  client,
  deviceId,
  enabled,
}: UseAnalyticsLoggerOptions): AnalyticsLoggerHandle {
  const { data, status } = useAnalyticsEnabledQuery();
  const analyticsEnabled = enabled && status === "success" && data === true;
  const wrappedStatsigClient = useMemo(
    () => wrapStatsigClientForAnalytics(client),
    [client],
  );
  const analyticsEnabledRef = useRef(analyticsEnabled);
  const analyticsLoggerRef = useRef<AnalyticsLoggerInstance | null>(null);
  const wrappedStatsigClientRef = useRef(wrappedStatsigClient);
  const initializePromiseRef = useRef<Promise<boolean> | null>(null);
  analyticsEnabledRef.current = analyticsEnabled;
  wrappedStatsigClientRef.current = wrappedStatsigClient;

  const getOrCreateAnalyticsLogger =
    useCallback((): AnalyticsLoggerInstance => {
      const existing = analyticsLoggerRef.current;
      if (existing != null) return existing;
      const created: AnalyticsLoggerInstance = new AnalyticsLogger({
        appName: "codex",
        appVersion: appVersion ?? "unknown",
        browserLocale:
          typeof navigator === "undefined" ? "unknown" : navigator.language,
        deviceId: deviceId ?? "unknown",
        options: segmentInitOptions,
        settings: segmentSettings,
      });
      analyticsLoggerRef.current = created;
      return created;
    }, [appVersion, deviceId]);

  const ensureAnalyticsLoggerInitialized =
    useCallback((): Promise<boolean> | null => {
      if (!analyticsEnabledRef.current) return null;
      return (initializePromiseRef.current ??= getOrCreateAnalyticsLogger()
        .initialize({
          user: undefined,
          statsigClient: wrappedStatsigClientRef.current,
        })
        .then(() => true)
        .catch((error: unknown) => {
          initializePromiseRef.current = null;
          logger.error("Failed to initialize AnalyticsLogger", {
            safe: {},
            sensitive: { error },
          });
          return false;
        }));
    }, [getOrCreateAnalyticsLogger]);

  useEffect(() => {
    ensureAnalyticsLoggerInitialized();
  }, [analyticsEnabled, ensureAnalyticsLoggerInitialized]);

  useEffect(
    () => () => {
      const initializePromise = initializePromiseRef.current;
      const analyticsLogger = analyticsLoggerRef.current;
      if (
        !analyticsEnabledRef.current ||
        initializePromise == null ||
        analyticsLogger == null
      ) {
        return;
      }
      initializePromise
        .then((initialized) => {
          if (initialized) return analyticsLogger.flush();
        })
        .catch((error: unknown) => {
          logger.error("Failed to flush AnalyticsLogger", {
            safe: {},
            sensitive: { error },
          });
        });
    },
    [],
  );

  const getStatsigUserSnapshot = useCallback((): unknown => {
    try {
      return structuredClone(client.getContext().user ?? null);
    } catch {
      return null;
    }
  }, [client]);

  const trackStructuredEvent = useCallback(
    async (
      event: unknown,
      payload?: unknown,
    ): Promise<TrackStructuredEventResult> => {
      if (!analyticsEnabledRef.current) {
        return {
          ...STRUCTURED_ANALYTICS_DISABLED_RESULT,
          statsigUser: getStatsigUserSnapshot(),
        };
      }
      const initializePromise = ensureAnalyticsLoggerInitialized();
      if (initializePromise == null) {
        return {
          ...STRUCTURED_ANALYTICS_DISABLED_RESULT,
          statsigUser: getStatsigUserSnapshot(),
        };
      }
      const initialized = await initializePromise;
      if (!initialized || !analyticsEnabledRef.current) {
        return {
          ...(initialized
            ? STRUCTURED_ANALYTICS_DISABLED_RESULT
            : STRUCTURED_ANALYTICS_INIT_FAILED_RESULT),
          statsigUser: getStatsigUserSnapshot(),
        };
      }
      const statsigUser = getStatsigUserSnapshot();
      try {
        await analyticsLoggerRef.current?.trackStructuredEvent(event, payload);
        return { statsigUser, status: "sent" };
      } catch (error) {
        logger.error("Failed to track AnalyticsLogger event", {
          safe: {},
          sensitive: { error },
        });
        return {
          reason: "Structured analytics event logging failed",
          statsigUser,
          status: "failed",
        };
      }
    },
    [ensureAnalyticsLoggerInitialized, getStatsigUserSnapshot],
  );

  const trackCounter = useCallback(
    async (counter: unknown, value?: unknown): Promise<void> => {
      if (!analyticsEnabledRef.current) return;
      const initializePromise = ensureAnalyticsLoggerInitialized();
      if (
        initializePromise != null &&
        !(!(await initializePromise) || !analyticsEnabledRef.current)
      ) {
        try {
          await analyticsLoggerRef.current?.trackCounter(counter, value);
        } catch (error) {
          logger.error("Failed to track AnalyticsLogger counter", {
            safe: {},
            sensitive: { error },
          });
        }
      }
    },
    [ensureAnalyticsLoggerInitialized],
  );

  const flush = useCallback(
    async (flushReason?: unknown): Promise<void> => {
      if (!analyticsEnabledRef.current) return;
      const initializePromise = ensureAnalyticsLoggerInitialized();
      if (
        initializePromise != null &&
        !(!(await initializePromise) || !analyticsEnabledRef.current)
      ) {
        try {
          await analyticsLoggerRef.current?.flush(flushReason);
        } catch (error) {
          logger.error("Failed to flush AnalyticsLogger", {
            safe: {},
            sensitive: { error },
          });
        }
      }
    },
    [ensureAnalyticsLoggerInitialized],
  );

  return useMemo(
    () => ({
      flush,
      getStatsigUserSnapshot,
      trackCounter,
      trackStructuredEvent,
    }),
    [flush, getStatsigUserSnapshot, trackCounter, trackStructuredEvent],
  );
}

export type CodexAnalyticsAuth = {
  accountId?: string | null;
  authMethod?: string;
  computeResidency?: string | null;
  email?: string | null;
  openAIAuth?: unknown;
  requiresAuth?: boolean;
  userId?: string | null;
};

export type CodexAnalyticsAccount = {
  account_user_id?: string | null;
  id?: string | null;
  structure?: string | null;
};

export type BuildCodexAnalyticsContextOptions = {
  appSessionId?: string;
  appVersion?: string;
  auth: CodexAnalyticsAuth;
  buildFlavor?: string;
  currentAccount: CodexAnalyticsAccount;
  locale?: string;
  planType?: string;
  stableId?: string | null;
  systemName?: string;
  systemVersion?: string;
};

export type CodexAnalyticsContext = {
  accountId?: string | null;
  accountUserId?: string | null;
  appSessionId?: string;
  appVersion?: string;
  authMethod?: string;
  buildFlavor?: string;
  computeResidency?: string | null;
  email?: string | null;
  locale?: string;
  openAIAuth?: unknown;
  planType?: string;
  requiresAuth?: boolean;
  stableId?: string | null;
  systemName?: string;
  systemVersion?: string;
  userId?: string | null;
  windowType: "electron";
  workspaceId: string | null;
};

export function buildCodexAnalyticsContext({
  appSessionId,
  appVersion,
  auth,
  buildFlavor,
  currentAccount,
  locale,
  planType,
  stableId,
  systemName,
  systemVersion,
}: BuildCodexAnalyticsContextOptions): CodexAnalyticsContext {
  return {
    accountId: auth.accountId ?? currentAccount.id,
    accountUserId: currentAccount.account_user_id,
    appSessionId,
    appVersion,
    authMethod: auth.authMethod,
    buildFlavor,
    computeResidency: auth.computeResidency,
    email: auth.email,
    locale,
    openAIAuth: auth.openAIAuth,
    planType,
    requiresAuth: auth.requiresAuth,
    stableId,
    systemName,
    systemVersion,
    userId: auth.userId,
    windowType: "electron",
    workspaceId:
      currentAccount.structure === "workspace"
        ? (currentAccount.id ?? null)
        : null,
  };
}
