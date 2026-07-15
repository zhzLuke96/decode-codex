// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-scoped state signals referenced by split onboarding/common modules.
import {
  appStoreScope,
  createParametricStateAtom,
  createScopedStateAtom,
} from "./onboarding-scope-runtime";

export const pendingAutomationDirectiveSignal = createScopedStateAtom(
  appStoreScope,
  () => null,
);

export const activeAutomationSeedSignal = createScopedStateAtom(
  appStoreScope,
  () => null,
);

export const threadSettingsByIdSignal = createParametricStateAtom(
  appStoreScope,
  () => null,
);
