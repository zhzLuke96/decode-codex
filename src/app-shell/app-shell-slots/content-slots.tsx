// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { Suspense, useLayoutEffect } from "react";
import {
  appStoreScope,
  mainContentLayoutSignal,
  Spinner,
  useAppScope,
} from "../../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "../app-shell-tab-controller/types";
import type {
  AppShellMainContentLayoutProps,
  AppShellSlotProps,
} from "./slot-types";

export function AppShellContent({ children }: AppShellSlotProps) {
  const fallback = (
    <div className="absolute inset-0 flex items-center justify-center">
      <Spinner />
    </div>
  );
  return <Suspense fallback={fallback}>{children}</Suspense>;
}

export function AppShellMainContentLayout({
  layout,
}: AppShellMainContentLayoutProps): null {
  const store = useAppScope(appStoreScope) as AppShellStore;
  useLayoutEffect(() => {
    store.set(mainContentLayoutSignal, layout);
    return () => {
      store.set(mainContentLayoutSignal, "default");
    };
  }, [layout, store]);
  return null;
}
