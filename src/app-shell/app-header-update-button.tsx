// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Compact update affordance rendered in the app header.

import { appServices } from "../boundaries/rpc.facade";
import { DownloadIcon } from "../icons/download-icon";
import {
  appUpdateDownloadProgressPercent,
  appUpdateLifecycleState,
  isAppUpdateRecoveryActionActive,
} from "../runtime/error-boundary";
import type { AppUpdateLifecycleState } from "../runtime/error-boundary/types";
import { useAppScopeValue } from "../boundaries/app-scope";
import { Spinner } from "../ui/spinner";
import { useIntl } from "../vendor/react-intl";

export type AppHeaderUpdateButtonProps = {
  overrideAppUpdateLifecycleState?: AppUpdateLifecycleState;
};

export function AppHeaderUpdateButton({
  overrideAppUpdateLifecycleState,
}: AppHeaderUpdateButtonProps = {}) {
  const intl = useIntl();
  const currentLifecycleState = useAppScopeValue(appUpdateLifecycleState);
  const downloadProgressPercent = useAppScopeValue(
    appUpdateDownloadProgressPercent,
  );
  const lifecycleState =
    overrideAppUpdateLifecycleState ??
    (currentLifecycleState as AppUpdateLifecycleState);

  if (!isAppUpdateRecoveryActionActive(lifecycleState)) return null;

  const roundedProgress =
    typeof downloadProgressPercent === "number"
      ? Math.min(100, Math.max(0, Math.round(downloadProgressPercent)))
      : null;
  const label = getAppHeaderUpdateLabel(lifecycleState, roundedProgress, intl);
  const visibleLabel =
    lifecycleState === "downloading" && roundedProgress != null
      ? intl.formatNumber(roundedProgress / 100, {
          style: "percent",
        })
      : label;
  const isBusy = lifecycleState !== "ready";

  return (
    <button
      aria-label={label}
      className="no-drag ease-basic relative flex h-5 max-w-5 min-w-5 shrink-0 cursor-interaction items-center justify-center overflow-hidden rounded-full bg-token-charts-blue px-2.5 text-[10px] leading-3 font-semibold text-white shadow-sm transition-[max-width,background-color] duration-relaxed [will-change:max-width] contain-layout contain-paint contain-style active:bg-token-charts-blue/80 enabled:hover:bg-[color-mix(in_srgb,var(--color-token-charts-blue)_92%,black_8%)] motion-reduce:transition-none @[180px]:max-w-36 @[180px]:min-w-10"
      disabled={isBusy}
      onClick={installAvailableUpdate}
      title={label}
    >
      {isBusy ? (
        <Spinner
          className="h-3 w-3"
          containerClassName="ease-basic absolute left-1/2 h-3 w-3 shrink-0 -translate-x-1/2 transition-opacity duration-relaxed [will-change:opacity] motion-reduce:transition-none @[180px]:opacity-0"
        />
      ) : (
        <DownloadIcon className="ease-basic absolute left-1/2 h-3 w-3 shrink-0 -translate-x-1/2 transition-opacity duration-relaxed [will-change:opacity] motion-reduce:transition-none @[180px]:opacity-0" />
      )}
      <span className="ease-basic min-w-0 truncate tabular-nums opacity-0 transition-opacity duration-relaxed [will-change:opacity] motion-reduce:transition-none @[180px]:opacity-100">
        {visibleLabel}
      </span>
    </button>
  );
}

function getAppHeaderUpdateLabel(
  lifecycleState: AppUpdateLifecycleState,
  downloadProgressPercent: number | null,
  intl: ReturnType<typeof useIntl>,
): string {
  switch (lifecycleState) {
    case "ready":
      return intl.formatMessage({
        id: "appHeader.installUpdate",
        defaultMessage: "Update",
        description:
          "Button label that installs a downloaded desktop app update",
      });
    case "installing":
      return intl.formatMessage({
        id: "appHeader.installingUpdate",
        defaultMessage: "Installing",
        description: "Button label while a desktop app update is installing",
      });
    case "downloading":
      if (downloadProgressPercent == null) {
        return intl.formatMessage({
          id: "appHeader.downloadingUpdate",
          defaultMessage: "Downloading",
          description: "Button label while a desktop app update is downloading",
        });
      }
      return intl.formatMessage(
        {
          id: "appHeader.downloadingUpdatePercent",
          defaultMessage: "Downloading {downloadProgressPercent}%",
          description:
            "Button label while a desktop app update is downloading with progress",
        },
        {
          downloadProgressPercent,
        },
      );
    case "checking":
    case "idle":
      return "";
  }
}

function installAvailableUpdate(): void {
  appServices.appUpdates?.installUpdate();
}

export function initAppHeaderUpdateButtonChunk(): void {}
