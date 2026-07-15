// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Lazily code-splits the debug modal and exposes open/toggle helpers that drive
// it through the app-scoped modal registry.

import React from "react";
import { preloadDynamicImport } from "../runtime/dynamic-module-preload";
import {
  closeAppModal,
  isAppModalOpen,
  openAppModal,
} from "../boundaries/onboarding-commons-externals.facade";

const LazyDebugModal = React.lazy(async () => ({
  default: (
    await preloadDynamicImport(
      async () => {
        const { DebugModal } = await import(
          "../runtime/current-app-initial/debug-modal-route-current-runtime"
        );
        return { DebugModal };
      },
      [],
      import.meta.url,
    )
  ).DebugModal,
}));

interface DebugModalHostProps {
  onClose: () => void;
}

function DebugModalHost({ onClose }: DebugModalHostProps) {
  return <LazyDebugModal onClose={onClose} />;
}

export function openDebugModal(scope: unknown): void {
  openAppModal(scope, DebugModalHost);
}

export function toggleDebugModal(scope: unknown): void {
  if (isAppModalOpen(scope, DebugModalHost)) {
    closeAppModal(scope, DebugModalHost);
    return;
  }
  openDebugModal(scope);
}
