// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Nested settings route outlet with the original loading fallback behavior.
import * as React from "react";
import { SettingsContentLayout } from "../../runtime/current-app-initial/settings-section-layout-runtime";
import { SettingsRouteOutlet as RuntimeSettingsRouteOutlet } from "./runtime";

export type SettingsRouteOutletProps = {
  selectedHostId: string | null;
  shouldRenderRouteContent: boolean;
};

export function SettingsRouteOutlet({
  selectedHostId,
  shouldRenderRouteContent,
}: SettingsRouteOutletProps) {
  if (!shouldRenderRouteContent) {
    return <SettingsContentLayout />;
  }

  return (
    <React.Suspense fallback={<SettingsContentLayout />}>
      <RuntimeSettingsRouteOutlet key={selectedHostId} />
    </React.Suspense>
  );
}
