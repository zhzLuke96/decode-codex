// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Feature-gated Computer Use native pipe controller.

import { ensureComputerUseNotifyConfig } from "./notify-config";
import { startComputerUseNativePipeServer } from "./server";
import type {
  ComputerUseNativePipeAnalyticsEvent,
  ComputerUseNativePipeController,
  ComputerUseNativePipeFeatureAvailability,
  ComputerUseNativePipeLogger,
  ComputerUseNativePipeServer,
  ComputerUseNativePipeServerOptions,
  ComputerUseTurnIdentity,
  NotifyConfigStatus,
} from "./types";

let activeComputerUseNativePipeController: ComputerUseNativePipeController | null =
  null;

export function getComputerUseNativePipePath(): Promise<string | null> {
  return (
    activeComputerUseNativePipeController?.ensureReadyPipePath() ??
    Promise.resolve(null)
  );
}

export function createComputerUseNativePipeController({
  codexCliPath,
  codexHome,
  ensureNotifyConfig = ensureComputerUseNotifyConfig,
  logger,
  onAnalyticsEvent,
  platform = process.platform,
  resolveHelperPaths,
  startServer = startComputerUseNativePipeServer,
}: {
  codexCliPath?: string | null;
  codexHome: string;
  ensureNotifyConfig?: (options: {
    codexHome: string;
    windowsHelperPath: string;
  }) => Promise<{ status: NotifyConfigStatus }>;
  logger: ComputerUseNativePipeLogger;
  onAnalyticsEvent?(event: ComputerUseNativePipeAnalyticsEvent): void;
  platform?: NodeJS.Platform | string;
  resolveHelperPaths(): {
    windowsHelperPath?: string | null;
    windowsHelperTransportModulePath?: string | null;
  };
  startServer?(
    options: ComputerUseNativePipeServerOptions,
  ): Promise<ComputerUseNativePipeServer>;
}): ComputerUseNativePipeController {
  let enabled = false;
  let server: ComputerUseNativePipeServer | null = null;
  let lastHelperPaths: {
    windowsHelperPath?: string | null;
    windowsHelperTransportModulePath?: string | null;
  } | null = null;
  let featureAvailability: ComputerUseNativePipeFeatureAvailability = {};
  let startupPromise: Promise<void> | null = null;
  let refreshPromise: Promise<void> | null = null;

  const disposeServer = async (): Promise<void> => {
    const currentServer = server;
    server = null;
    lastHelperPaths = null;
    if (currentServer != null) await currentServer.dispose();
  };

  const start = (
    helperPaths = resolveHelperPaths(),
  ): Promise<void> | undefined => {
    if (!enabled || platform !== "win32" || server != null)
      return Promise.resolve();
    if (startupPromise != null) return startupPromise;
    const promise = Promise.resolve()
      .then(async () => {
        try {
          const { windowsHelperPath, windowsHelperTransportModulePath } =
            helperPaths;
          if (!enabled || platform !== "win32") return;
          if (
            windowsHelperPath == null ||
            windowsHelperTransportModulePath == null
          ) {
            logger.info("computer-use native pipe helper paths unavailable", {
              safe: {
                missingHelperPath: windowsHelperPath == null,
                missingTransportModulePath:
                  windowsHelperTransportModulePath == null,
                platform,
              },
            });
            return;
          }
          try {
            const notifyStatus = await ensureNotifyConfig({
              codexHome,
              windowsHelperPath,
            });
            logger.info("computer-use notify config ensure finished", {
              safe: { platform, status: notifyStatus.status },
            });
          } catch (error) {
            logger.warning("computer-use notify config ensure failed", {
              safe: { platform },
              sensitive: { error },
            });
            throw error;
          }

          const nextServer = await startServer({
            codexCliPath,
            logger,
            onAnalyticsEvent,
            windowsHelperPath,
            windowsHelperTransportModulePath,
          });
          if (!enabled || platform !== "win32") {
            await nextServer.dispose();
            return;
          }
          server = nextServer;
          lastHelperPaths = helperPaths;
          logger.info("computer-use native pipe startup ready", {
            safe: { platform },
            sensitive: { pipePath: server.pipePath },
          });
        } catch (error) {
          logger.warning("computer-use native pipe startup failed", {
            safe: { platform },
            sensitive: { error },
          });
        }
      })
      .finally(() => {
        if (startupPromise === promise) startupPromise = null;
      });
    startupPromise = promise;
    return promise;
  };

  const refresh = (): Promise<void> => {
    if (refreshPromise != null) return refreshPromise;
    const promise = Promise.resolve()
      .then(async () => {
        try {
          if (
            !enabled ||
            platform !== "win32" ||
            (startupPromise != null &&
              (await startupPromise, !enabled || platform !== "win32"))
          ) {
            return;
          }
          if (server == null) {
            await start();
            return;
          }
          const helperPaths = resolveHelperPaths();
          if (
            lastHelperPaths?.windowsHelperPath ===
              helperPaths.windowsHelperPath &&
            lastHelperPaths?.windowsHelperTransportModulePath ===
              helperPaths.windowsHelperTransportModulePath
          ) {
            return;
          }
          logger.info("computer-use native pipe helper paths changed", {
            safe: { platform },
          });
          await disposeServer();
          await start(helperPaths);
        } catch (error) {
          logger.warning("computer-use native pipe refresh failed", {
            safe: { platform },
            sensitive: { error },
          });
        }
      })
      .finally(() => {
        if (refreshPromise === promise) refreshPromise = null;
      });
    refreshPromise = promise;
    return promise;
  };

  const controller: ComputerUseNativePipeController = {
    closeActiveTurn: (turn: ComputerUseTurnIdentity) =>
      server?.closeActiveTurn(turn) ?? Promise.resolve(false),
    dispose: () => {
      enabled = false;
      void disposeServer();
      if (activeComputerUseNativePipeController === controller) {
        activeComputerUseNativePipeController = null;
      }
    },
    ensureReadyPipePath: async () => {
      await start();
      return server?.pipePath ?? null;
    },
    hasActiveTurn: (turn: ComputerUseTurnIdentity) =>
      server?.hasActiveTurn(turn) ?? false,
    refresh: () => {
      void refresh();
    },
    setDesktopFeatureAvailability: (
      availability: ComputerUseNativePipeFeatureAvailability,
    ) => {
      if (
        availability.computerUse == null &&
        availability.computerUseNodeRepl == null
      ) {
        return;
      }
      featureAvailability = { ...featureAvailability, ...availability };
      enabled =
        featureAvailability.computerUse === true &&
        featureAvailability.computerUseNodeRepl === true;
      if (!enabled) {
        void disposeServer();
        return;
      }
      void start();
    },
  };

  activeComputerUseNativePipeController = controller;
  return controller;
}
