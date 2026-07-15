// Restored from ref/webview/assets/app-initial~app-main~new-thread-panel-page-mHfWlM6S.js
// New-thread loading fallback and first-run NUX gate.
import type { ReactNode } from "react";
import { useNux } from "../../app-shell/nux-state";
import { AppPreloader, initAppPreloaderChunk } from "../../ui/app-preloader";
import { Navigate } from "../../vendor/react-router";

export type NewThreadDebugLoadingProps = {
  debugName?: string;
};

export type NewThreadNuxGateProps = {
  children?: ReactNode;
};

export function initNewThreadDebugLoadingChunk(): void {
  initAppPreloaderChunk();
}

export function initNewThreadNuxGateChunk(): void {
  initNewThreadDebugLoadingChunk();
}

export function NewThreadDebugLoading({
  debugName,
}: NewThreadDebugLoadingProps) {
  return <AppPreloader debugName={debugName} />;
}

export function NewThreadNuxGate({ children }: NewThreadNuxGateProps) {
  const nuxState = useNux();

  if (nuxState == null) {
    return <NewThreadDebugLoading />;
  }
  if (nuxState !== "none") {
    return <Navigate to="/first-run" replace />;
  }

  return <>{children}</>;
}
