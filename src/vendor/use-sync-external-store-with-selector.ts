// Restored from ref/webview/assets/app-initial~app-main~page~onboarding-page~skills-settings~plugins-settings~remote-connectio~c59x15mv-DDkvwlbO.js
// use-sync-external-store is a stock React compatibility package; preserve the
// historical loader shape while delegating to npm.

import { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector";

export type StoreSubscribe = (onStoreChange: () => void) => () => void;
export type SnapshotGetter<Snapshot> = () => Snapshot;
export type SnapshotSelector<Snapshot, Selection> = (
  snapshot: Snapshot,
) => Selection;
export type SelectionEquality<Selection> = (
  left: Selection,
  right: Selection,
) => boolean;

export interface UseSyncExternalStoreWithSelectorModule {
  useSyncExternalStoreWithSelector: typeof useSyncExternalStoreWithSelector;
}

export { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector";

export const useSyncExternalStoreWithSelectorModule: UseSyncExternalStoreWithSelectorModule =
  { useSyncExternalStoreWithSelector };

export function loadUseSyncExternalStoreWithSelectorModule(): UseSyncExternalStoreWithSelectorModule {
  return useSyncExternalStoreWithSelectorModule;
}
