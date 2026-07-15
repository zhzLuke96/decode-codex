// Restored from ref/webview/assets/app-shell-state-QDRlZ5bT.js
// Semantic implementation for app shell action registries.
import {
  appScopeUnderscore,
  createAppScopeSignal as appScopeG,
  _appScopeC as appScopeC,
} from "../../../boundaries/app-scope";
import { routeScope as persistedSignalF } from "../../../runtime/persisted-signal";

function createOrderedActionRegistry() {
  let actionIds = appScopeG(persistedSignalF, []),
    actionById = appScopeUnderscore(persistedSignalF, (actionId) => null);
  return {
    entries$: appScopeC(persistedSignalF, ({ get: get }) =>
      get(actionIds)
        .map((item) => ({
          action: get(actionById, item),
          actionId: item,
        }))
        .filter((item) => item.action != null)
        .sort((entryA, entryB) => entryA.action.order - entryB.action.order)
        .map(({ action: action, actionId: actionId }) => ({
          align: action.align,
          actionId: actionId,
          node: action.node,
          order: action.order,
        })),
    ),
    byId: actionById,
    ids$: actionIds,
  };
}

function createActionListRegistry() {
  let actionIds = appScopeG(persistedSignalF, []),
    actionById = appScopeUnderscore(persistedSignalF, (actionId) => null);
  return {
    byId: actionById,
    entries$: appScopeC(persistedSignalF, ({ get: get }) =>
      get(actionIds).flatMap((item) => {
        let action = get(actionById, item);
        return action == null ? [] : [action];
      }),
    ),
    ids$: actionIds,
  };
}

const centerActionRegistry = createOrderedActionRegistry();
const leftActionRegistry = createOrderedActionRegistry();
const rightActionRegistry = createOrderedActionRegistry();
const panelLauncherActionRegistry = createActionListRegistry();
const headerActionRegistries = {
  center: centerActionRegistry,
  left: leftActionRegistry,
  right: rightActionRegistry,
};
const rightHeaderActionsSignal = rightActionRegistry.entries$;
const leftHeaderActionsSignal = leftActionRegistry.entries$;
const panelLauncherActionsSignal = panelLauncherActionRegistry.entries$;
const centerHeaderActionsSignal = centerActionRegistry.entries$;

export {
  centerHeaderActionsSignal,
  headerActionRegistries,
  leftHeaderActionsSignal,
  panelLauncherActionRegistry,
  panelLauncherActionsSignal,
  rightHeaderActionsSignal,
};
