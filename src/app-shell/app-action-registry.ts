// Restored from ref/webview/assets/register-app-actions-CrtQ5J4S.js
// Current app action registry used by the remote/projects runtime.
import { createWindowAppActionRunMap } from "./register-app-actions";
import { createAppearanceAppActions } from "./app-action-appearance";
import { createAppActionRegistryActions } from "./app-action-window-actions";

const appearanceActions = createAppearanceAppActions();
const registeredAppActions = createAppActionRegistryActions(
  () => registeredAppActions,
  appearanceActions,
);

export const appActionRegistry =
  createWindowAppActionRunMap(registeredAppActions);
