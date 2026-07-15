// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import { useLayoutEffect } from "react";
import {
  appShellHeaderActionEntriesSignal,
  appShellHeaderContextMenuItemsSignal,
  appShellHeaderContextMenuSurfaceSignal,
  appShellHeaderEndEntriesSignal,
  appShellHeaderStartEntriesSignal,
  appStoreScope,
  useAppScope,
} from "../../boundaries/onboarding-commons-externals.facade";
import type { AppShellStore } from "../app-shell-tab-controller/types";
import { useRegisterSlotSignal } from "./slot-registration";
import type {
  AppShellHeaderActionProps,
  AppShellHeaderContextMenuItem,
  AppShellSlotProps,
  HeaderActionPosition,
  HeaderEntrySignalGroup,
} from "./slot-types";

const headerActionSlotsByPosition: Record<
  HeaderActionPosition,
  HeaderEntrySignalGroup
> = {
  start: appShellHeaderStartEntriesSignal as HeaderEntrySignalGroup,
  center: appShellHeaderActionEntriesSignal as HeaderEntrySignalGroup,
  end: appShellHeaderEndEntriesSignal as HeaderEntrySignalGroup,
};

export function AppShellHeaderSlot({ children }: AppShellSlotProps): null {
  useRegisterSlotSignal(
    useAppScope(appStoreScope) as AppShellStore,
    appShellHeaderContextMenuSurfaceSignal,
    children,
  );
  return null;
}

export function AppShellHeaderActionSlot({
  actionId,
  align = "start",
  children,
  order = 0,
  slotPosition = "center",
}: AppShellHeaderActionProps): null {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const slot = headerActionSlotsByPosition[slotPosition];
  useLayoutEffect(() => {
    store.set(slot.byId, actionId, { align, node: children, order });
  }, [actionId, align, children, order, slot, store]);
  useLayoutEffect(() => {
    store.set(slot.ids$, (ids: string[]) =>
      ids.includes(actionId) ? ids : [...ids, actionId],
    );
    return () => {
      store.set(slot.ids$, (ids: string[]) =>
        ids.filter((id) => id !== actionId),
      );
      store.set(slot.byId, actionId, null);
    };
  }, [actionId, slot, store]);
  return null;
}

export function AppShellHeaderContextMenuItemSlot(
  item: AppShellHeaderContextMenuItem,
): null {
  const store = useAppScope(appStoreScope) as AppShellStore;
  useLayoutEffect(() => {
    store.set(appShellHeaderContextMenuItemsSignal.byId, item.id, item);
  }, [item, store]);
  useLayoutEffect(() => {
    store.set(appShellHeaderContextMenuItemsSignal.ids$, (ids: string[]) =>
      ids.includes(item.id) ? ids : [...ids, item.id],
    );
    return () => {
      store.set(appShellHeaderContextMenuItemsSignal.ids$, (ids: string[]) =>
        ids.filter((id) => id !== item.id),
      );
      store.set(appShellHeaderContextMenuItemsSignal.byId, item.id, null);
    };
  }, [item.id, store]);
  return null;
}
