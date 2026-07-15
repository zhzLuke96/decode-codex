// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Statsig ready context, lightweight analytics logger bridge, and app-scope
// product analytics registration.
import * as React from "react";

import { __productLoggerR as productLoggerSignal } from "../analytics/product-logger";
import { _appScopeO as getAppScopeStore } from "../boundaries/app-scope";
import { appLogger } from "../runtime/app-logger";

export const statsigLogEventUrl = "https://chatgpt.com/ces/v1/rgstr";
export const statsigReadyContext = React.createContext(false);

export type TrackStructuredEventResult = {
  reason?: string;
  statsigUser?: unknown;
  status: "sent" | "dropped" | "failed";
};

export type StatsigClientForAnalytics = {
  flush?: (reason?: unknown) => void | Promise<void>;
  getContext: () => { user?: unknown };
  logEvent?: (...args: unknown[]) => void;
};

export interface UseStatsigAnalyticsLoggerOptions {
  appVersion?: string;
  client: StatsigClientForAnalytics;
  deviceId?: string;
  enabled: boolean;
}

export interface StatsigAnalyticsLoggerHandle {
  flush: (flushReason?: unknown) => Promise<void>;
  getStatsigUserSnapshot: () => unknown;
  trackCounter: (counter: unknown, value?: unknown) => Promise<void>;
  trackStructuredEvent: (
    event: unknown,
    payload?: unknown,
  ) => Promise<TrackStructuredEventResult>;
}

export function useStatsigAnalyticsLogger({
  client,
  enabled,
}: UseStatsigAnalyticsLoggerOptions): StatsigAnalyticsLoggerHandle {
  const getStatsigUserSnapshot = React.useCallback((): unknown => {
    try {
      const user = client.getContext().user ?? null;
      return typeof structuredClone === "function"
        ? structuredClone(user)
        : JSON.parse(JSON.stringify(user));
    } catch {
      return null;
    }
  }, [client]);

  const trackStructuredEvent = React.useCallback(
    async (
      event: unknown,
      payload?: unknown,
    ): Promise<TrackStructuredEventResult> => {
      const statsigUser = getStatsigUserSnapshot();
      if (!enabled) {
        return {
          reason: "Structured analytics disabled",
          statsigUser,
          status: "dropped",
        };
      }
      if (typeof client.logEvent !== "function") {
        return {
          reason: "Statsig client does not expose logEvent",
          statsigUser,
          status: "dropped",
        };
      }
      try {
        client.logEvent(getStructuredEventName(event), undefined, payload);
        return { statsigUser, status: "sent" };
      } catch (error) {
        appLogger.error("Failed to log Statsig structured event", {
          safe: { eventName: getStructuredEventName(event) },
          sensitive: { error },
        });
        return {
          reason: "Structured analytics event logging failed",
          statsigUser,
          status: "failed",
        };
      }
    },
    [client, enabled, getStatsigUserSnapshot],
  );

  const trackCounter = React.useCallback(
    async (counter: unknown, value?: unknown): Promise<void> => {
      if (!enabled || typeof client.logEvent !== "function") return;
      client.logEvent(getStructuredEventName(counter), value);
    },
    [client, enabled],
  );

  const flush = React.useCallback(
    async (flushReason?: unknown): Promise<void> => {
      if (!enabled || typeof client.flush !== "function") return;
      await client.flush(flushReason);
    },
    [client, enabled],
  );

  return React.useMemo(
    () => ({
      flush,
      getStatsigUserSnapshot,
      trackCounter,
      trackStructuredEvent,
    }),
    [flush, getStatsigUserSnapshot, trackCounter, trackStructuredEvent],
  );
}

function getStructuredEventName(event: unknown): string {
  if (event != null && typeof event === "object") {
    const record = event as Record<string, unknown>;
    if (typeof record.$type === "string") return record.$type;
    if (typeof record.eventName === "string") return record.eventName;
  }
  return String(event);
}

export interface StatsigAnalyticsBridgeProps {
  analyticsLogger: StatsigAnalyticsLoggerHandle;
  authMethod?: string;
  hostBuildFlavor?: string;
}

export function StatsigAnalyticsBridge({
  analyticsLogger,
  authMethod,
  hostBuildFlavor,
}: StatsigAnalyticsBridgeProps): null {
  const appScope = getAppScopeStore();
  const codexEventMetadata = React.useMemo(
    () => ({
      authMethod: authMethod ?? undefined,
      codexBuildFlavor: hostBuildFlavor,
      codexWindowType: "electron",
    }),
    [authMethod, hostBuildFlavor],
  );
  const logProductEvent = React.useCallback(
    (messageType: unknown, payload?: unknown): void => {
      void analyticsLogger.trackStructuredEvent(
        messageType,
        attachCodexEventMetadata(payload, codexEventMetadata),
      );
    },
    [analyticsLogger, codexEventMetadata],
  );

  React.useLayoutEffect(() => {
    appScope.set(productLoggerSignal, {
      logProductEvent,
      trackCounter: analyticsLogger.trackCounter,
      flush: analyticsLogger.flush,
      submitCodexAnalyticsEvent:
        authMethod === "chatgpt" ? submitCodexAnalyticsEventFromRuntime : null,
    });
    return () => {
      appScope.set(productLoggerSignal, productLoggerSignal.defaultValue);
    };
  }, [analyticsLogger, appScope, authMethod, logProductEvent]);

  return null;
}

function attachCodexEventMetadata(
  payload: unknown,
  codexEventMetadata: Record<string, unknown>,
): unknown {
  const metadata = omitUndefined(codexEventMetadata);
  if (Object.keys(metadata).length === 0) return payload;
  return {
    ...(payload != null && typeof payload === "object"
      ? (payload as Record<string, unknown>)
      : { value: payload }),
    codexMetadata: metadata,
  };
}

function omitUndefined<T extends Record<string, unknown>>(
  value: T,
): Partial<T> {
  const result: Partial<T> = {};
  for (const key of Object.keys(value) as Array<keyof T>) {
    if (value[key] !== undefined) result[key] = value[key];
  }
  return result;
}

async function submitCodexAnalyticsEventFromRuntime(
  event: unknown,
): Promise<void> {
  const { submitCodexAnalyticsEvent } = await import(
    "../analytics/codex-analytics-event"
  );
  await submitCodexAnalyticsEvent(event as never);
}
