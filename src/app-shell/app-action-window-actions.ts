// Restored from ref/webview/assets/register-app-actions-CrtQ5J4S.js
// Window app action registry composition.
import { createWindowSummaryAndHelpActions } from "./app-action-window-summary";
import { createWindowControlAppActions } from "./app-action-window-controls";

export function createAppActionRegistryActions(
  getRegisteredActions: () => unknown[],
  appearanceActions: unknown[],
) {
  return [
    ...createWindowSummaryAndHelpActions(
      getRegisteredActions,
      appearanceActions,
    ),
    ...createWindowControlAppActions(),
  ];
}
