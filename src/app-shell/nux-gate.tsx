// Restored from ref/webview/assets/nux-gate-ncVyDQKh.js
// Route gate that sends users through the onboarding NUX when required.
import type { ReactNode } from "react";
import { Navigate } from "../vendor/react-router";
import { AppPreloader } from "../ui/app-preloader";
import { useNux, type NuxState } from "./nux-state";
type NuxGateProps = {
  children: ReactNode;
};
export function NuxGate({ children }: NuxGateProps): JSX.Element {
  const nuxState = useNux() as NuxState | null | undefined;
  if (nuxState == null) {
    return <AppPreloader />;
  }
  if (nuxState !== "none") {
    return <Navigate to="/first-run" replace />;
  }
  return <>{children}</>;
}

export function initNuxGateChunk(): void {}
