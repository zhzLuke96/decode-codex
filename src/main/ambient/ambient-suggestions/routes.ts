// Restored from ref/.vite/build/main-Cfnoc8EH.js
// App-server route handlers for reading and refreshing ambient suggestions.

import {
  getAmbientSuggestionGenerationStatuses,
  refreshAmbientSuggestions,
} from "./refresh";
import {
  EMPTY_AMBIENT_SUGGESTIONS_FILE,
  readAmbientSuggestionsFile,
  setAmbientSuggestionStatus,
} from "./storage";
import type {
  AmbientAppServerConnection,
  AmbientStructuredLogger,
  AmbientSuggestionDomain,
  AmbientSuggestionRefreshMode,
  AmbientSuggestionStatus,
  AmbientSuggestionsFile,
} from "./types";

type AmbientSuggestionsProjectRoot = {
  projectRoot: string | null;
  isProjectlessChat: boolean;
};

type AmbientSuggestionsRefreshAvailability = {
  enabled: boolean;
  staleTimeMs: number;
};

export type AmbientSuggestionsAppServerHandlers = {
  "ambient-suggestions"(request: {
    domain?: AmbientSuggestionDomain;
    hostId: string;
    projectRoot?: string | null;
  }): Promise<{ file: AmbientSuggestionsFile }>;
  "ambient-suggestions-refresh"(request: {
    domain?: AmbientSuggestionDomain;
    hostId: string;
    projectRoot?: string | null;
    mode?: AmbientSuggestionRefreshMode;
  }): Promise<void>;
  "ambient-suggestions-generation-statuses"(): Promise<{
    statuses: ReturnType<typeof getAmbientSuggestionGenerationStatuses>;
  }>;
  "ambient-suggestion-set-status"(request: {
    domain?: AmbientSuggestionDomain;
    hostId: string;
    projectRoot?: string | null;
    suggestionId: string;
    status: AmbientSuggestionStatus;
  }): Promise<{ file: AmbientSuggestionsFile }>;
};

export function createAmbientSuggestionsAppServerHandlers({
  getAmbientSuggestionsProjectRoot,
  getConnection,
  getRefreshAvailability,
  logger,
}: {
  getAmbientSuggestionsProjectRoot(
    projectRoot: string | null | undefined,
  ): Promise<AmbientSuggestionsProjectRoot>;
  getConnection(hostId: string): AmbientAppServerConnection;
  getRefreshAvailability(options: {
    appServerConnection: AmbientAppServerConnection;
  }): Promise<AmbientSuggestionsRefreshAvailability>;
  logger: AmbientStructuredLogger;
}): AmbientSuggestionsAppServerHandlers {
  return {
    "ambient-suggestions": async ({ domain = null, hostId, projectRoot }) => {
      const resolvedProjectRoot =
        await getAmbientSuggestionsProjectRoot(projectRoot);
      return resolvedProjectRoot.projectRoot == null
        ? { file: EMPTY_AMBIENT_SUGGESTIONS_FILE }
        : {
            file: readAmbientSuggestionsFile(
              hostId,
              resolvedProjectRoot.projectRoot,
              domain,
            ),
          };
    },

    "ambient-suggestions-refresh": async ({
      domain = null,
      hostId,
      mode,
      projectRoot,
    }) => {
      const resolvedProjectRoot =
        await getAmbientSuggestionsProjectRoot(projectRoot);
      if (resolvedProjectRoot.projectRoot == null) return;
      try {
        const appServerConnection = getConnection(hostId);
        const availability = await getRefreshAvailability({
          appServerConnection,
        });
        await refreshAmbientSuggestions({
          appServerConnection,
          domain,
          enabled: availability.enabled,
          hostId,
          isProjectlessChat: resolvedProjectRoot.isProjectlessChat,
          logger,
          mode,
          projectRoot: resolvedProjectRoot.projectRoot,
          serviceTier: null,
          staleTimeMs: availability.staleTimeMs,
        });
      } catch (error) {
        logger.warning("Failed to refresh ambient suggestions", {
          safe: {},
          sensitive: {
            error,
            projectRoot: resolvedProjectRoot.projectRoot,
          },
        });
      }
    },

    "ambient-suggestions-generation-statuses": async () => ({
      statuses: getAmbientSuggestionGenerationStatuses(),
    }),

    "ambient-suggestion-set-status": async ({
      domain = null,
      hostId,
      projectRoot,
      status,
      suggestionId,
    }) => {
      const resolvedProjectRoot =
        await getAmbientSuggestionsProjectRoot(projectRoot);
      return resolvedProjectRoot.projectRoot == null
        ? { file: EMPTY_AMBIENT_SUGGESTIONS_FILE }
        : {
            file: setAmbientSuggestionStatus({
              domain,
              hostId,
              projectRoot: resolvedProjectRoot.projectRoot,
              status,
              suggestionId,
            }),
          };
    },
  };
}
