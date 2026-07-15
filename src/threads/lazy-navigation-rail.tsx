// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js
// Lazy component helper used by the thread-find navigation rail.
import React, { type ComponentType, type ReactNode } from "react";

export type LazyNavigationRailOptions = {
  fallback?: ReactNode;
  suspendToParent?: boolean;
};

export function createLazyNavigationRailComponent<TProps>(
  loader: () => Promise<ComponentType<TProps>>,
  { fallback = null, suspendToParent = false }: LazyNavigationRailOptions = {},
): ComponentType<TProps> {
  const LazyComponent = React.lazy(async () => ({
    default: await loader(),
  }));

  if (suspendToParent) return LazyComponent;

  return function LazyNavigationRail(props: TProps) {
    return (
      <React.Suspense fallback={fallback}>
        <LazyComponent {...(props as TProps & object)} />
      </React.Suspense>
    );
  };
}

export function initLazyNavigationRailRuntime(): void {}
