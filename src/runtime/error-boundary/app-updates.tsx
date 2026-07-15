// Restored from ref/webview/assets/error-boundary-BOla93vo.js
// App-update state selectors and the full-screen recovery action.
import {
  _appScopeC as createAppScopeSelector,
  appScopeRoot,
  createAppScopeSignal,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import { appServices } from "../../boundaries/rpc.facade";
import { DownloadIcon } from "../../icons/download-icon";
import { Spinner } from "../../ui/spinner";
import { Button } from "../../ui/button";
import { appIdentity } from "../../utils/app-identity";
import { usePlatform } from "../../utils/use-platform";
import { FormattedMessage } from "../../vendor/react-intl";
import type { AppUpdateLifecycleState, AppUpdateRecoveryState } from "./types";
export const appUpdateState = createAppScopeSignal(appScopeRoot, {
  downloadProgressPercent: null,
  installProgressPercent: null,
  isUpdateReady: false,
  lifecycleState: "idle",
  relaunchNotice: null,
} satisfies AppUpdateRecoveryState);
export const appUpdateLifecycleState = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get: <Value>(signal: unknown) => Value }) =>
    get<AppUpdateRecoveryState>(appUpdateState).lifecycleState,
);
export const appUpdateRelaunchNotice = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get: <Value>(signal: unknown) => Value }) =>
    get<AppUpdateRecoveryState>(appUpdateState).relaunchNotice,
);
export const appUpdateDownloadProgressPercent = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get: <Value>(signal: unknown) => Value }) =>
    get<AppUpdateRecoveryState>(appUpdateState).downloadProgressPercent,
);
export const isAppUpdateReady = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get: <Value>(signal: unknown) => Value }) =>
    get<AppUpdateRecoveryState>(appUpdateState).isUpdateReady,
);
export const appUpdateInstallProgressPercent = createAppScopeSelector(
  appScopeRoot,
  ({ get }: { get: <Value>(signal: unknown) => Value }) =>
    get<AppUpdateRecoveryState>(appUpdateState).installProgressPercent,
);
export function isAppUpdateRecoveryActionActive(
  state: AppUpdateLifecycleState,
): boolean {
  switch (state) {
    case "ready":
    case "downloading":
    case "installing":
      return true;
    case "checking":
    case "idle":
      return false;
  }
}
export function AppUpdateRecoveryButton({
  appUpdateLifecycleState: overrideLifecycleState,
}: {
  appUpdateLifecycleState?: AppUpdateLifecycleState;
}) {
  const { platform } = usePlatform();
  const currentLifecycleState = useAppScopeValue(appUpdateLifecycleState);
  switch (overrideLifecycleState ?? currentLifecycleState) {
    case "idle":
      return (
        <Button onClick={() => startUpdateRecoveryAction(platform)}>
          <DownloadIcon className="icon-xs" />
          <FormattedMessage
            id="appUpdate.recovery.updateCodex"
            defaultMessage="Update {appName}"
            description="Button label shown on the full-screen error page to install a desktop app update"
            values={{
              appName: appIdentity,
            }}
          />
        </Button>
      );
    case "ready":
      return (
        <Button onClick={installAvailableUpdate}>
          <DownloadIcon className="icon-xs" />
          <FormattedMessage
            id="appUpdate.recovery.updateCodex"
            defaultMessage="Update {appName}"
            description="Button label shown on the full-screen error page to install a desktop app update"
            values={{
              appName: appIdentity,
            }}
          />
        </Button>
      );
    case "checking":
      return (
        <Button color="outline" disabled>
          <Spinner className="icon-xs" />
          <FormattedMessage
            id="appUpdate.recovery.checkingForUpdates"
            defaultMessage="Checking for updates"
            description="Disabled status shown on the full-screen error page while checking for desktop app updates"
          />
        </Button>
      );
    case "downloading":
      return (
        <Button color="outline" disabled>
          <Spinner className="icon-xs" />
          <FormattedMessage
            id="appUpdate.recovery.downloadingUpdate"
            defaultMessage="Downloading update"
            description="Disabled status shown on the full-screen error page while downloading a desktop app update"
          />
        </Button>
      );
    case "installing":
      return (
        <Button color="outline" disabled>
          <Spinner className="icon-xs" />
          <FormattedMessage
            id="appUpdate.recovery.installingUpdate"
            defaultMessage="Installing update"
            description="Disabled status shown on the full-screen error page while installing a desktop app update"
          />
        </Button>
      );
  }
}
function startUpdateRecoveryAction(platform: string): void {
  if (platform === "macOS") {
    installAvailableUpdate();
    return;
  }
  appServices.appUpdates?.checkForUpdates();
}
function installAvailableUpdate(): void {
  appServices.appUpdates?.installUpdate();
}
