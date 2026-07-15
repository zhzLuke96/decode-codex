// Restored from ref/webview/assets/primary-runtime-install-action-Cpk3XYUC.js
import * as productLoggerEnums from "../analytics/product-logger";
import { vscodeApiH as vscodeLogger } from "../boundaries/vscode-api";
import { requestPrimaryRuntimeInstall } from "./primary-runtime-install-state";
type PrimaryRuntimeRelease = "latest" | "latest-alpha" | string;
type PrimaryRuntimeInstallResultStatus =
  | "already-current"
  | "canceled"
  | "failed"
  | "installed";
type EventPayload = Record<string, unknown>;
type ProductLogger = {
  logProductEvent(eventName: unknown, payload: EventPayload): void;
};
type ToastHandle = {
  close(): void;
};
type ToastOptions = {
  duration?: number;
  hasCloseButton?: boolean;
  id?: string;
};
type ToastApi = {
  info(message: string, options?: ToastOptions): ToastHandle;
  success(message: string, options?: ToastOptions): unknown;
  danger(message: string, options?: ToastOptions): unknown;
};
type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description: string;
};
type FormatMessage = (descriptor: MessageDescriptor) => string;
type RuntimeDiagnostics = {
  installed: boolean;
  problems: unknown[];
  bundleVersion?: string | null;
};
export const PRIMARY_RUNTIME_SETTINGS_FEATURE_ID = "3026692602";
export const PRIMARY_RUNTIME_INSTALL_COMMAND_FEATURE_ID = "3502101112";

export function initPrimaryRuntimeFeatureFlagsChunk(): void {}

export function initPrimaryRuntimeInstallEventFormattersChunk(): void {}

export function initPrimaryRuntimeInstallActionChunk(): void {}

function formatPrimaryRuntimeInstallEvent({
  bundleVersion,
  durationMs,
  release,
  status,
}: {
  bundleVersion?: string | null;
  durationMs: number;
  release: PrimaryRuntimeRelease;
  status: PrimaryRuntimeInstallResultStatus;
}): EventPayload {
  return {
    durationMs,
    release: mapPrimaryRuntimeRelease(release),
    status: mapPrimaryRuntimeInstallStatus(status),
    ...formatBundleVersion(bundleVersion),
  };
}
export function formatPrimaryRuntimeDiagnosticsEvent({
  diagnostics,
  durationMs,
}: {
  diagnostics: RuntimeDiagnostics;
  durationMs: number;
}): EventPayload {
  return {
    durationMs,
    problemCount: diagnostics.problems.length,
    status: diagnostics.installed
      ? productLoggerEnums.productLoggerCn
          .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
      : productLoggerEnums.productLoggerCn
          .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
    ...formatBundleVersion(diagnostics.bundleVersion),
  };
}
export function formatPrimaryRuntimeDiagnosticsFailedEvent({
  durationMs,
}: {
  durationMs: number;
}): EventPayload {
  return {
    durationMs,
    status:
      productLoggerEnums.productLoggerCn
        .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED,
  };
}
export function formatPrimaryRuntimeDependenciesResetEvent({
  bundleVersion,
  durationMs,
  status,
}: {
  bundleVersion?: string | null;
  durationMs: number;
  status: PrimaryRuntimeInstallResultStatus;
}): EventPayload {
  return {
    durationMs,
    status: mapPrimaryRuntimeDependenciesResetStatus(status),
    ...formatBundleVersion(bundleVersion),
  };
}
function mapPrimaryRuntimeRelease(release: PrimaryRuntimeRelease): unknown {
  switch (release) {
    case "latest":
      return productLoggerEnums.productLoggerOn
        .CODEX_PRIMARY_RUNTIME_RELEASE_LATEST;
    case "latest-alpha":
      return productLoggerEnums.productLoggerOn
        .CODEX_PRIMARY_RUNTIME_RELEASE_LATEST_ALPHA;
  }
}
function mapPrimaryRuntimeInstallStatus(
  status: PrimaryRuntimeInstallResultStatus,
): unknown {
  switch (status) {
    case "already-current":
      return productLoggerEnums.productLoggerDn
        .CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_ALREADY_CURRENT;
    case "canceled":
      return productLoggerEnums.productLoggerDn
        .CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_CANCELED;
    case "failed":
      return productLoggerEnums.productLoggerDn
        .CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_FAILED;
    case "installed":
      return productLoggerEnums.productLoggerDn
        .CODEX_PRIMARY_RUNTIME_INSTALL_RESULT_STATUS_INSTALLED;
  }
}
function mapPrimaryRuntimeDependenciesResetStatus(
  status: PrimaryRuntimeInstallResultStatus,
): unknown {
  switch (status) {
    case "already-current":
      return productLoggerEnums.productLoggerTn
        .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT;
    case "canceled":
      return productLoggerEnums.productLoggerTn
        .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED;
    case "failed":
      return productLoggerEnums.productLoggerTn
        .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED;
    case "installed":
      return productLoggerEnums.productLoggerTn
        .CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED;
  }
}
function formatBundleVersion(
  bundleVersion: string | null | undefined,
): EventPayload {
  return bundleVersion == null || bundleVersion.length === 0
    ? {}
    : {
        bundleVersion,
      };
}
export async function installPrimaryRuntime({
  formatMessage,
  hostId,
  productLogger,
  release,
  toast,
}: {
  formatMessage: FormatMessage;
  hostId: string;
  productLogger: ProductLogger;
  release: PrimaryRuntimeRelease;
  toast: ToastApi;
}): Promise<void> {
  const startedAt = Date.now();
  const installingToast = toast.info(
    formatMessage({
      id: "codex.command.installPrimaryRuntime.installing",
      defaultMessage: "Installing Codex runtime…",
      description: "Toast shown while the Codex runtime installer is running",
    }),
    {
      duration: 120,
      hasCloseButton: false,
      id: "install-primary-runtime",
    },
  );
  try {
    const installResult = await requestPrimaryRuntimeInstall({
      hostId,
      release,
      request: "install",
    });
    productLogger.logProductEvent(
      productLoggerEnums.productLoggerEn,
      formatPrimaryRuntimeInstallEvent({
        bundleVersion: installResult.bundleVersion,
        durationMs: Date.now() - startedAt,
        release,
        status: installResult.status as PrimaryRuntimeInstallResultStatus,
      }),
    );
    if (installResult.status === "already-current") {
      toast.info(
        formatMessage({
          id: "codex.command.installPrimaryRuntime.alreadyDownloaded",
          defaultMessage: "Latest Codex runtime is already downloaded",
          description:
            "Toast shown when the Codex runtime installer exits because the latest runtime is already downloaded",
        }),
        {
          id: "install-primary-runtime",
        },
      );
      return;
    }
    toast.success(
      formatMessage({
        id: "codex.command.installPrimaryRuntime.installed",
        defaultMessage: "Codex runtime installed",
        description: "Toast shown when the Codex runtime finishes installing",
      }),
      {
        id: "install-primary-runtime",
      },
    );
  } catch (error) {
    if (isPrimaryRuntimeInstallAbortError(error)) {
      productLogger.logProductEvent(
        productLoggerEnums.productLoggerEn,
        formatPrimaryRuntimeInstallEvent({
          bundleVersion: null,
          durationMs: Date.now() - startedAt,
          release,
          status: "canceled",
        }),
      );
      toast.info(
        formatMessage({
          id: "codex.command.installPrimaryRuntime.canceled",
          defaultMessage: "Codex runtime install canceled",
          description:
            "Toast shown when the Codex runtime installer is canceled",
        }),
        {
          id: "install-primary-runtime",
        },
      );
      return;
    }
    vscodeLogger.error("Error installing primary runtime", {
      safe: {
        release,
      },
      sensitive: {
        error,
      },
    });
    productLogger.logProductEvent(
      productLoggerEnums.productLoggerEn,
      formatPrimaryRuntimeInstallEvent({
        bundleVersion: null,
        durationMs: Date.now() - startedAt,
        release,
        status: "failed",
      }),
    );
    toast.danger(
      formatMessage({
        id: "codex.command.installPrimaryRuntime.failed",
        defaultMessage: "Couldn’t install Codex runtime",
        description: "Toast shown when the Codex runtime installer fails",
      }),
      {
        id: "install-primary-runtime",
      },
    );
  } finally {
    installingToast.close();
  }
}
export function isPrimaryRuntimeInstallAbortError(error: unknown): boolean {
  return error instanceof Error || error instanceof DOMException
    ? error.name === "AbortError" ||
        error.message.toLowerCase().includes("aborted")
    : false;
}
