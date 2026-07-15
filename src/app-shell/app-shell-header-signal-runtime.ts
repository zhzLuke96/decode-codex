// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// Header slot signal aliases used by onboarding/app-shell boundary consumers.
import {
  _appScopeC as appScopeC,
  appScopeUnderscore,
  createAppScopeSignal,
} from "../boundaries/app-scope";
import { routeScope } from "../runtime/persisted-signal";
import { headerActionRegistries } from "./app-shell-state/action-registries";

type HeaderEntryRegistry = {
  byId: unknown;
  entries$: unknown;
  ids$: unknown;
};

function signalWithRegistry<TSignal extends object>(
  registry: HeaderEntryRegistry,
): TSignal & { byId: unknown; ids$: unknown } {
  return Object.assign(registry.entries$ as TSignal, {
    byId: registry.byId,
    ids$: registry.ids$,
  });
}

function createHeaderContextMenuRegistry(): HeaderEntryRegistry {
  const ids$ = createAppScopeSignal(routeScope, [] as string[]);
  const byId = appScopeUnderscore(routeScope, () => null);
  const entries$ = appScopeC(routeScope, ({ get }) =>
    get<string[]>(ids$).flatMap((id) => {
      const item = get(byId, id);
      return item == null ? [] : [item];
    }),
  );
  return { byId, entries$, ids$ };
}

export const appShellHeaderActionEntriesSignal = signalWithRegistry(
  headerActionRegistries.center,
);
export const appShellHeaderStartEntriesSignal = signalWithRegistry(
  headerActionRegistries.left,
);
export const appShellHeaderEndEntriesSignal = signalWithRegistry(
  headerActionRegistries.right,
);
export const appShellHeaderContextMenuItemsSignal = signalWithRegistry(
  createHeaderContextMenuRegistry(),
);
