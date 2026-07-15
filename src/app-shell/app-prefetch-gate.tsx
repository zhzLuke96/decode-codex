// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Delays mounting the (code-split) app prefetch implementation until the app has
// been idle for a few seconds, so background prefetching never competes with
// initial render.

import React from "react";
import { preloadDynamicImport } from "../runtime/dynamic-module-preload";
import { lazyLoadWithSuspense } from "../runtime/appgen-library-hot-producer-runtime";

const APP_PREFETCH_DELAY_MS = 5000;
const APP_PREFETCH_IDLE_TIMEOUT_MS = 2000;

const LazyAppPrefetchImpl = lazyLoadWithSuspense(async () => {
  const loadedModule = await preloadDynamicImport(
    () =>
      import(
        "../runtime/current-app-initial/app-prefetch-impl-current-runtime"
      ),
    [],
    import.meta.url,
  );
  return loadedModule.appPrefetchImpl;
});

export function AppPrefetchGate() {
  const [shouldPrefetch, setShouldPrefetch] = React.useState(false);

  React.useEffect(() => {
    let cancelPendingIdle: (() => void) | undefined;
    const delayTimeout = globalThis.setTimeout(() => {
      const requestIdle = window.requestIdleCallback?.bind(window);
      const cancelIdle = window.cancelIdleCallback?.bind(window);
      const startPrefetch = () => {
        setShouldPrefetch(true);
      };
      if (requestIdle && cancelIdle) {
        const idleHandle = requestIdle(startPrefetch, {
          timeout: APP_PREFETCH_IDLE_TIMEOUT_MS,
        });
        cancelPendingIdle = () => {
          cancelIdle(idleHandle);
        };
        return;
      }
      const fallbackTimeout = globalThis.setTimeout(startPrefetch, 0);
      cancelPendingIdle = () => {
        globalThis.clearTimeout(fallbackTimeout);
      };
    }, APP_PREFETCH_DELAY_MS);

    return () => {
      globalThis.clearTimeout(delayTimeout);
      cancelPendingIdle?.();
    };
  }, []);

  if (!shouldPrefetch) return null;
  return <LazyAppPrefetchImpl />;
}
