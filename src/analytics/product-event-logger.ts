// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Product-event logging built on top of the structured AnalyticsLogger. Buffers
// product events while the analytics-enabled gate is pending (dropping the oldest
// when the queue is full), flushes them once ready, drops them when analytics is
// disabled, and records every transition in the product-event debug log. The
// registration component publishes the active logger into app scope so the rest
// of the app can log product events, count metrics, flush, and (for ChatGPT
// sessions) submit Codex analytics events.
import {
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import { appLogger as logger } from "../runtime/app-logger";
import {
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../boundaries/app-scope";
import { __productLoggerR as globalProductLoggerSignal } from "./product-logger";
import {
  codexMetadataEventProtoNamespaces,
  emptyCodexEventDescriptor,
  useAnalyticsEnabledQuery,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  appendProductEventDebugLogEntry,
  updateProductEventDebugLogEntry,
  type ProductEventInfo,
} from "./product-event-debug-log";
import { submitCodexAnalyticsEvent } from "./codex-analytics-event";
import type {
  AnalyticsLoggerHandle,
  TrackStructuredEventResult,
} from "./analytics-logger";

const MAX_PENDING_PRODUCT_EVENTS = 50;
const ANALYTICS_DISABLED_REASON = "Analytics disabled";
const PRODUCT_EVENT_QUEUE_LIMIT_REASON = "Product event queue limit reached";

type CodexEventDescriptor = { $type: string };

export type CodexEventMetadata = {
  authMethod?: string;
  codexWindowType?: string;
  codexBuildFlavor?: string;
};

type ProductEventLogInput = {
  messageType: CodexEventDescriptor;
  payload: unknown;
};

type QueuedProductEventLogInput = ProductEventLogInput & {
  debugEntryId: string;
};

type AppScopeHandle = {
  set: (signal: unknown, value: unknown) => void;
};

const codexMetadataEligibleEventTypes = new Set<string>(
  codexMetadataEventProtoNamespaces.flatMap((protoNamespace: unknown) =>
    Object.values(protoNamespace as Record<string, unknown>).flatMap(
      (descriptor) =>
        isCodexEventDescriptor(descriptor) ? [descriptor.$type] : [],
    ),
  ),
);

function isCodexEventDescriptor(value: unknown): value is CodexEventDescriptor {
  if (typeof value !== "object" || !value) return false;
  return (
    "$type" in value &&
    typeof (value as { $type: unknown }).$type === "string" &&
    (value as { $type: string }).$type !== emptyCodexEventDescriptor.$type
  );
}

function attachCodexMetadata(
  messageType: CodexEventDescriptor,
  payload: unknown,
  codexEventMetadata: CodexEventMetadata,
): unknown {
  if (!codexMetadataEligibleEventTypes.has(messageType.$type)) return payload;
  const codexMetadata = extractCodexMetadata(codexEventMetadata);
  if (codexMetadata == null) return payload;
  return { ...(payload as Record<string, unknown>), codexMetadata };
}

function extractCodexMetadata(
  codexEventMetadata: CodexEventMetadata | null | undefined,
): CodexEventMetadata | null {
  if (codexEventMetadata == null) return null;
  const codexMetadata: CodexEventMetadata = {};
  if (codexEventMetadata.authMethod) {
    codexMetadata.authMethod = codexEventMetadata.authMethod;
  }
  if (codexEventMetadata.codexWindowType) {
    codexMetadata.codexWindowType = codexEventMetadata.codexWindowType;
  }
  if (codexEventMetadata.codexBuildFlavor) {
    codexMetadata.codexBuildFlavor = codexEventMetadata.codexBuildFlavor;
  }
  return Object.keys(codexMetadata).length > 0 ? codexMetadata : null;
}

function toProductEventInfo(logInput: ProductEventLogInput): ProductEventInfo {
  return {
    eventType: logInput.messageType.$type,
    payload: logInput.payload,
  };
}

function logStructuredProductEvent(
  analyticsLogger: AnalyticsLoggerHandle,
  messageType: CodexEventDescriptor,
  payload: unknown,
  debugEntryId: string,
): void {
  analyticsLogger
    .trackStructuredEvent(messageType, payload)
    .then((result) => {
      applyProductEventResult(debugEntryId, result);
    })
    .catch((error: unknown) => {
      updateProductEventDebugLogEntry({
        id: debugEntryId,
        statsigUser: safeGetStatsigUserSnapshot(analyticsLogger),
        status: "failed",
        reason: "Structured product event logging failed",
      });
      logger.error("Failed to log structured product event", {
        safe: { eventType: messageType.$type },
        sensitive: { error },
      });
    });
}

function applyProductEventResult(
  debugEntryId: string,
  result: TrackStructuredEventResult,
): void {
  switch (result.status) {
    case "dropped":
    case "failed":
      updateProductEventDebugLogEntry({
        id: debugEntryId,
        statsigUser: result.statsigUser,
        status: result.status,
        reason: result.reason,
      });
      break;
    case "sent":
      updateProductEventDebugLogEntry({
        id: debugEntryId,
        statsigUser: result.statsigUser,
        status: "sent",
      });
      break;
  }
}

function safeGetStatsigUserSnapshot(
  analyticsLogger: AnalyticsLoggerHandle,
): unknown {
  try {
    return analyticsLogger.getStatsigUserSnapshot();
  } catch {
    return undefined;
  }
}

export type UseProductEventLoggerOptions = {
  analyticsLogger: AnalyticsLoggerHandle;
  codexEventMetadata: CodexEventMetadata;
};

export type ProductEventLoggerHandle = {
  logProductEvent: (
    messageType: CodexEventDescriptor,
    payload: unknown,
  ) => void;
};

export function useProductEventLogger({
  analyticsLogger,
  codexEventMetadata,
}: UseProductEventLoggerOptions): ProductEventLoggerHandle {
  const { data, status } = useAnalyticsEnabledQuery();
  const pendingProductEventsRef = useRef<QueuedProductEventLogInput[]>([]);
  const analyticsReady = status === "success" && data;

  const flushPendingProductEvent = (queueItem: QueuedProductEventLogInput) => {
    logStructuredProductEvent(
      analyticsLogger,
      queueItem.messageType,
      queueItem.payload,
      queueItem.debugEntryId,
    );
  };

  const flushPendingProductEvents = () => {
    const queuedProductEvents = pendingProductEventsRef.current;
    pendingProductEventsRef.current = [];
    queuedProductEvents.forEach((queueItem) => {
      flushPendingProductEvent(queueItem);
    });
  };

  const flushPendingProductEventsEffectEvent = useEffectEvent(
    flushPendingProductEvents,
  );

  const dropPendingProductEvents = (reason: string) => {
    const queuedProductEvents = pendingProductEventsRef.current;
    pendingProductEventsRef.current = [];
    queuedProductEvents.forEach((queueItem) => {
      updateProductEventDebugLogEntry({
        id: queueItem.debugEntryId,
        statsigUser: safeGetStatsigUserSnapshot(analyticsLogger),
        status: "dropped",
        reason,
      });
    });
  };

  useEffect(() => {
    if (data === false) {
      dropPendingProductEvents(ANALYTICS_DISABLED_REASON);
      return;
    }
    if (analyticsReady) flushPendingProductEventsEffectEvent();
  }, [data, analyticsReady, dropPendingProductEvents]);

  const enqueueOrSendProductEvent = (logInput: ProductEventLogInput) => {
    if (data === false) {
      dropPendingProductEvents(ANALYTICS_DISABLED_REASON);
      appendProductEventDebugLogEntry({
        event: toProductEventInfo(logInput),
        statsigUser: safeGetStatsigUserSnapshot(analyticsLogger),
        status: "dropped",
        reason: ANALYTICS_DISABLED_REASON,
      });
      return;
    }
    switch (status) {
      case "error":
      case "pending": {
        if (
          pendingProductEventsRef.current.length >= MAX_PENDING_PRODUCT_EVENTS
        ) {
          const droppedProductEvent = pendingProductEventsRef.current.shift();
          if (droppedProductEvent != null) {
            updateProductEventDebugLogEntry({
              id: droppedProductEvent.debugEntryId,
              statsigUser: safeGetStatsigUserSnapshot(analyticsLogger),
              status: "dropped",
              reason: PRODUCT_EVENT_QUEUE_LIMIT_REASON,
            });
          }
        }
        const debugEntryId = appendProductEventDebugLogEntry({
          event: toProductEventInfo(logInput),
          statsigUser: safeGetStatsigUserSnapshot(analyticsLogger),
          status: "enqueued",
        });
        pendingProductEventsRef.current.push({ ...logInput, debugEntryId });
        return;
      }
      case "success":
        flushPendingProductEvent({
          ...logInput,
          debugEntryId: appendProductEventDebugLogEntry({
            event: toProductEventInfo(logInput),
            statsigUser: safeGetStatsigUserSnapshot(analyticsLogger),
            status: "enqueued",
          }),
        });
        return;
    }
  };

  const logProductEvent = (
    messageType: CodexEventDescriptor,
    payload: unknown,
  ): void => {
    enqueueOrSendProductEvent({
      messageType,
      payload: attachCodexMetadata(messageType, payload, codexEventMetadata),
    });
  };

  return { logProductEvent };
}

export type ProductEventLoggerRegistrationProps = {
  analyticsLogger: AnalyticsLoggerHandle;
  authMethod?: string;
  hostBuildFlavor?: string;
};

export function ProductEventLoggerRegistration({
  analyticsLogger,
  authMethod = undefined,
  hostBuildFlavor,
}: ProductEventLoggerRegistrationProps): ReactNode {
  const appScope = useAppScope(appScopeRoot) as AppScopeHandle;
  const codexEventMetadata: CodexEventMetadata = {
    authMethod,
    codexWindowType: "electron",
    codexBuildFlavor: hostBuildFlavor,
  };
  const { logProductEvent } = useProductEventLogger({
    analyticsLogger,
    codexEventMetadata,
  });

  useLayoutEffect(() => {
    appScope.set(globalProductLoggerSignal, {
      logProductEvent,
      trackCounter: analyticsLogger.trackCounter,
      flush: analyticsLogger.flush,
      submitCodexAnalyticsEvent:
        authMethod === "chatgpt" ? submitCodexAnalyticsEvent : null,
    });
    return () => {
      appScope.set(
        globalProductLoggerSignal,
        globalProductLoggerSignal.defaultValue,
      );
    };
  }, [analyticsLogger, authMethod, logProductEvent, appScope]);

  return null;
}
