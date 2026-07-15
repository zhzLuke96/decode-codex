// Restored from ref/webview/assets/error-boundary-BOla93vo.js
// Renderer Sentry initialization and capture helpers.
import * as SentryRenderer from "@sentry/electron/renderer";
import {
  formatRendererSentryRelease,
  isRendererTracingBuildFlavor,
  normalizeRendererSentryVersion,
  rendererSentryDsn,
} from "../../boundaries/src-l0hb-mz-p";
import {
  parseDirectivesD as buildSentryErrorEvent,
  parseDirectivesE as mergeDirectiveSentryData,
  parseDirectivesK as registerDirectiveSentryCapture,
} from "../../utils/parse-directives";
import type { RendererElectronBridge, SentryUserIdentity } from "./types";
declare global {
  interface Window {
    __SENTRY__RENDERER_INIT__?: boolean;
    electronBridge?: RendererElectronBridge;
  }
}
type SentryRendererApi = {
  BrowserTracing?: new () => unknown;
  browserTracingIntegration?: () => unknown;
  captureException: (
    exception: unknown,
    hint?: Record<string, unknown>,
  ) => string;
  init: (options: Record<string, unknown>) => void;
  setTag: (key: string, value: unknown) => void;
  setUser: (user: Record<string, unknown> | null) => void;
};
const sentryRenderer = SentryRenderer as unknown as SentryRendererApi;
let rendererSentryInitialized = false;
export function initializeRendererSentry(): void {
  if (rendererSentryInitialized) return;
  rendererSentryInitialized = true;
  const initOptions = window.electronBridge?.getSentryInitOptions?.();
  if (!initOptions) return;
  const normalizedVersion = normalizeRendererSentryVersion(
    initOptions.appVersion,
  );
  const preRelease = initOptions.buildFlavor !== "prod";
  initRendererSdk({
    beforeSend: mergeDirectiveSentryData,
    dist: initOptions.buildNumber ?? undefined,
    dsn: rendererSentryDsn,
    environment: "prod",
    integrations: (defaultIntegrations: unknown[]) =>
      isRendererTracingBuildFlavor(initOptions.buildFlavor)
        ? [...defaultIntegrations, createBrowserTracingIntegration()]
        : defaultIntegrations,
    release: formatRendererSentryRelease(normalizedVersion.version),
    tracesSampleRate: 0,
  });
  sentryRenderer.setTag("sessionId", initOptions.codexAppSessionId);
  sentryRenderer.setTag("buildFlavor", initOptions.buildFlavor);
  sentryRenderer.setTag("preRelease", preRelease);
  sentryRenderer.setTag("bundle", "webview");
  sentryRenderer.setTag("host", "app");
  registerDirectiveSentryCapture(captureDirectiveException);
}
export function setSentryUser(identity: SentryUserIdentity): void {
  sentryRenderer.setUser(
    identity.authMethod == null
      ? null
      : {
          account_id: identity.accountId ?? undefined,
          authMethod: identity.authMethod,
          id: identity.userId ?? undefined,
        },
  );
}
export function captureErrorBoundaryException(
  error: Error,
  context: {
    boundaryName?: string;
    componentStack: string;
  },
): string {
  try {
    const sentryEvent = buildSentryErrorEvent(error, context);
    return sentryRenderer.captureException(sentryEvent.error, sentryEvent);
  } catch {
    return "";
  }
}
function captureDirectiveException(
  exception: unknown,
  hint?: Record<string, unknown>,
): string {
  try {
    return sentryRenderer.captureException(exception, hint);
  } catch {
    return "";
  }
}
function initRendererSdk(options: Record<string, unknown>): void {
  if (window.__SENTRY__RENDERER_INIT__) return;
  window.__SENTRY__RENDERER_INIT__ = true;
  sentryRenderer.init({
    defaultIntegrations: undefined,
    dsn: "https://12345@dummy.dsn/12345",
    ipcNamespace: "sentry-ipc",
    sendClientReports: false,
    transport: undefined,
    ...options,
  });
}
function createBrowserTracingIntegration(): unknown {
  if (sentryRenderer.browserTracingIntegration) {
    return sentryRenderer.browserTracingIntegration();
  }
  return sentryRenderer.BrowserTracing
    ? new sentryRenderer.BrowserTracing()
    : null;
}
