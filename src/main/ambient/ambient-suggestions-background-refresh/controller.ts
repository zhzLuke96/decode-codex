// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Background app-event coordinator for ambient-suggestions refresh.

import * as os from "node:os";
import * as path from "node:path";
import { resolveAmbientSuggestionsRefreshAvailability } from "./availability";
import type {
  AmbientSuggestionProject,
  AmbientSuggestionsBackgroundRefreshController,
  AmbientSuggestionsBackgroundRefreshOptions,
  AmbientSuggestionsConnection,
} from "./types";

export function createAmbientSuggestionsBackgroundRefresh({
  accountPolicy,
  ambientSuggestionsSettingKey,
  appEvent,
  appServerClient,
  appServerConnectionRegistry,
  fileApi,
  getWorkspaceRoots,
  globalState,
  joinHostPath = defaultJoinHostPath,
  logger,
  normalizeProjectRoot,
  resolveShouldUseWslPaths,
  settingsStore,
}: AmbientSuggestionsBackgroundRefreshOptions): AmbientSuggestionsBackgroundRefreshController {
  const inFlightRefreshes = new Map<string, Promise<void>>();
  const shouldUseWslPaths = resolveShouldUseWslPaths(
    appServerClient.hostConfig,
  );
  const homeProjectRoot = normalizeProjectRoot(
    joinHostPath(os.homedir(), "", shouldUseWslPaths),
  );
  const projectlessTarget = createAmbientSuggestionProject({
    projectRoot: homeProjectRoot,
    isProjectlessChat: true,
  });

  const getCurrentTarget = (): AmbientSuggestionProject => {
    const firstWorkspaceRoot = getWorkspaceRoots(globalState)[0] ?? null;
    if (firstWorkspaceRoot == null || firstWorkspaceRoot === "~") {
      return projectlessTarget;
    }

    const projectRoot = normalizeProjectRoot(
      joinHostPath(firstWorkspaceRoot, "", shouldUseWslPaths),
    );
    return projectRoot === homeProjectRoot
      ? projectlessTarget
      : createAmbientSuggestionProject({
          projectRoot,
          isProjectlessChat: false,
        });
  };

  const refreshTarget = async (
    target: AmbientSuggestionProject,
    trigger: "background" | "foreground" | "turnComplete",
    appServerConnection: AmbientSuggestionsConnection,
    staleTimeMs: number,
  ): Promise<void> => {
    const cacheKey = target.projectRoot;
    const existingRefresh = inFlightRefreshes.get(cacheKey);
    if (existingRefresh != null) return existingRefresh;

    const suggestionsFile = fileApi.readSuggestionsFile(
      appServerClient.hostConfig.id,
      target.projectRoot,
      target.domain,
    );
    if (
      suggestionsFile.generatedAtMs != null &&
      Date.now() - suggestionsFile.generatedAtMs < staleTimeMs
    ) {
      return;
    }

    const refreshPromise = fileApi
      .refreshSuggestions({
        appServerConnection,
        domain: target.domain,
        enabled: true,
        hostId: appServerClient.hostConfig.id,
        isProjectlessChat: target.isProjectlessChat,
        projectRoot: target.projectRoot,
        serviceTier: null,
        staleTimeMs,
      })
      .then(() => undefined)
      .catch((error) => {
        logger.warning("Failed to refresh ambient suggestions", {
          safe: { trigger },
          sensitive: { error, projectRoot: target.projectRoot },
        });
      })
      .finally(() => {
        inFlightRefreshes.delete(cacheKey);
      });

    inFlightRefreshes.set(cacheKey, refreshPromise);
    return refreshPromise;
  };

  const refreshForTrigger = async (
    trigger: "background" | "foreground" | "turnComplete",
  ): Promise<void> => {
    try {
      const appServerConnection = appServerConnectionRegistry.getConnection(
        appServerClient.hostConfig.id,
      );
      const availability = await resolveAmbientSuggestionsRefreshAvailability({
        accountPolicy,
        appServerConnection,
        desktopFeatures: { ambientSuggestions: true },
        settingsStore,
        settingKey: ambientSuggestionsSettingKey,
      });
      if (!availability.enabled) return;
      await refreshTarget(
        getCurrentTarget(),
        trigger,
        appServerConnection,
        availability.staleTimeMs,
      );
    } catch (error) {
      logger.warning("Failed to refresh ambient suggestions", {
        safe: { trigger },
        sensitive: { error },
      });
    }
  };

  const subscription = appEvent.subscribe((event) => {
    if (event.type === "background") {
      void refreshForTrigger(event.type);
    }
  });

  return {
    dispose() {
      subscription.dispose();
      inFlightRefreshes.clear();
    },
  };
}

function createAmbientSuggestionProject({
  isProjectlessChat,
  projectRoot,
}: {
  isProjectlessChat: boolean;
  projectRoot: string;
}): AmbientSuggestionProject {
  return { domain: null, projectRoot, isProjectlessChat };
}

function defaultJoinHostPath(
  left: string,
  right: string,
  _shouldUseWslPaths: boolean,
): string {
  return right.length === 0 ? left : path.join(left, right);
}
