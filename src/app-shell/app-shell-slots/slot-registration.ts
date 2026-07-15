// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactNode } from "react";
import { useLayoutEffect } from "react";
import type { AppShellStore } from "../app-shell-tab-controller/types";

export function useRegisterSlotSignal(
  store: AppShellStore,
  signal: unknown,
  value: ReactNode,
): void {
  useLayoutEffect(() => {
    store.set(signal, value);
  }, [value, store, signal]);
  useLayoutEffect(
    () => () => {
      store.set(signal, null);
    },
    [store, signal],
  );
}
