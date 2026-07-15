// Restored from ref/webview/assets/error-boundary-BOla93vo.js
// Shared types for renderer Sentry setup, app-update recovery UI, and React error boundaries.
import type React from "react";
export type RendererSentryInitOptions = {
  appVersion: string;
  buildFlavor: string;
  buildNumber?: string | number | null;
  codexAppSessionId?: string | null;
};
export type RendererElectronBridge = {
  getSentryInitOptions?: () => RendererSentryInitOptions | null | undefined;
};
export type SentryUserIdentity = {
  accountId?: string | null;
  authMethod?: string | null;
  userId?: string | null;
};
export type AppUpdateLifecycleState =
  | "checking"
  | "downloading"
  | "idle"
  | "installing"
  | "ready";
export type AppUpdateRecoveryState = {
  downloadProgressPercent: number | null;
  installProgressPercent: number | null;
  isUpdateReady: boolean;
  lifecycleState: AppUpdateLifecycleState;
  relaunchNotice: string | null;
};
export type ErrorBoundaryFallbackArgs = {
  componentStack: string;
  error: Error;
  eventId: string;
  resetError: () => void;
};
export type ErrorBoundaryFallback =
  | React.ReactNode
  | ((args: ErrorBoundaryFallbackArgs) => React.ReactNode);
export type ErrorBoundaryProps = React.PropsWithChildren<{
  fallback?: ErrorBoundaryFallback;
  name?: string;
  onError?: (error: Error, componentStack: string, eventId: string) => void;
  onReset?: (
    error: Error | null,
    componentStack: string,
    eventId: string,
  ) => void;
  resetKey?: unknown;
}>;
export type ErrorBoundaryState = {
  componentStack: string | null;
  error: Error | null;
  eventId: string;
};
