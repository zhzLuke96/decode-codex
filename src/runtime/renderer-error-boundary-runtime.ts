// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-x1JD0lOF.js
// App-main facade for renderer Sentry, app-update recovery state, and ErrorBoundary modules.
import { InfoIcon } from "../icons/info-icon";
import { appIdentity, appIdentityId } from "../utils/app-identity";
import {
  AppUpdateRecoveryButton,
  ErrorBoundary,
  appUpdateDownloadProgressPercent,
  appUpdateInstallProgressPercent,
  appUpdateLifecycleState,
  appUpdateRelaunchNotice,
  appUpdateState,
  initializeRendererSentry,
  isAppUpdateReady,
  isAppUpdateRecoveryActionActive,
  setSentryUser,
} from "./error-boundary";

export const CODEX_APP_BRAND_ID = appIdentityId;
export const CODEX_APP_NAME = appIdentity;
export const InfoCircleIcon = InfoIcon;

export {
  AppUpdateRecoveryButton,
  ErrorBoundary,
  appUpdateDownloadProgressPercent,
  appUpdateInstallProgressPercent,
  appUpdateLifecycleState,
  appUpdateRelaunchNotice,
  appUpdateState,
  initializeRendererSentry,
  isAppUpdateReady,
  isAppUpdateRecoveryActionActive,
  setSentryUser,
};

// The bundled chunk exposed Rolldown init closures; the restored modules
// initialize through static imports, so these keep the app-main call order stable.
export function initRendererSentryRuntimeChunk(): void {}

export function initInfoCircleIconChunk(): void {}

export function initAppUpdateStateChunk(): void {}

export function initCodexAppIdentityChunk(): void {}

export function initAppUpdateRecoveryButtonChunk(): void {}

export function initErrorBoundaryRuntimeChunk(): void {}
