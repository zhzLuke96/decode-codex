// Restored from ref/webview/assets/error-boundary-BOla93vo.js
// Renderer Sentry setup, app-update recovery state, and React ErrorBoundary.
import {
  appUpdateLifecycleState,
  appUpdateState,
  appUpdateInstallProgressPercent,
  isAppUpdateRecoveryActionActive,
  AppUpdateRecoveryButton,
  isAppUpdateReady,
  appUpdateDownloadProgressPercent,
  appUpdateRelaunchNotice,
} from "./app-updates";
import { ErrorBoundary } from "./error-boundary";
import { initializeRendererSentry, setSentryUser } from "./sentry";
export {
  appUpdateLifecycleState,
  appUpdateState,
  setSentryUser,
  appUpdateInstallProgressPercent,
  isAppUpdateRecoveryActionActive,
  AppUpdateRecoveryButton,
  isAppUpdateReady,
  appUpdateDownloadProgressPercent,
  appUpdateRelaunchNotice,
  ErrorBoundary,
  initializeRendererSentry,
};
