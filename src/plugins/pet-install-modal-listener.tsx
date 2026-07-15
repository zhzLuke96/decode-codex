// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Listens for the host "open-pet-install-modal" message and, when the feature
// gate is enabled, lazily loads the pet (plugin/extension) install modal host +
// session runtime, mounts the modal into the app scope, and starts the session.

import { useGateValue } from "../vendor/statsig-current-runtime";
import {
  appRootScope,
  loadPetInstallModalHost,
  loadPetInstallState,
  renderOverlayInScope,
  useScope,
} from "../boundaries/onboarding-commons-externals.facade";
import { useHostMessageSubscription } from "../runtime/app-main-host-runtime";

const PET_INSTALL_MODAL_GATE = "1848317837";

export function PetInstallModalListener(): null {
  const scope = useScope(appRootScope);
  const isPetInstallModalEnabled = useGateValue(PET_INSTALL_MODAL_GATE);

  useHostMessageSubscription("open-pet-install-modal", (request) => {
    if (!isPetInstallModalEnabled) return;
    Promise.all([loadPetInstallModalHost(), loadPetInstallState()]).then(
      ([{ PetInstallModalHost }, { startPetInstallSession }]) => {
        renderOverlayInScope(scope, PetInstallModalHost);
        startPetInstallSession(scope, {
          name: request.name,
          description: request.description,
          imageUrl: request.imageUrl,
        });
      },
    );
  });

  return null;
}
