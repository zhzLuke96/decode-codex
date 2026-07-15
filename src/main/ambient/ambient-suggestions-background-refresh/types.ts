// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for ambient-suggestions background refresh.

export type AmbientSuggestionDomain = string | null;

export type AmbientSuggestionProject = {
  domain: AmbientSuggestionDomain;
  isProjectlessChat: boolean;
  projectRoot: string;
};

export type AmbientSuggestionFile = {
  generatedAtMs: number | null;
};

export type AmbientSuggestionsStore = {
  getEffective(key: string): unknown;
};

export type AmbientSuggestionsAccount = unknown;

export type AmbientSuggestionsConnection = {
  getAccount(): Promise<{ account: AmbientSuggestionsAccount }>;
};

export type AmbientSuggestionsConnectionRegistry = {
  getConnection(hostId: string): AmbientSuggestionsConnection;
};

export type AmbientSuggestionsAppServerClient = {
  hostConfig: {
    id: string;
  };
};

export type AmbientSuggestionsGlobalState = unknown;

export type AmbientSuggestionsAppEvent = {
  subscribe(
    callback: (event: {
      type: "background" | "foreground" | "turnComplete";
    }) => void,
  ): { dispose(): void };
};

export type AmbientSuggestionsLogger = {
  warning(
    message: string,
    details: {
      safe: Record<string, unknown>;
      sensitive: Record<string, unknown>;
    },
  ): void;
};

export type AmbientSuggestionsFileApi = {
  readSuggestionsFile(
    hostId: string,
    projectRoot: string,
    domain: AmbientSuggestionDomain,
  ): AmbientSuggestionFile;
  refreshSuggestions(options: {
    appServerConnection: AmbientSuggestionsConnection;
    domain: AmbientSuggestionDomain;
    enabled: boolean;
    hostId: string;
    isProjectlessChat: boolean;
    projectRoot: string;
    serviceTier: null;
    staleTimeMs: number;
  }): Promise<unknown>;
};

export type AmbientSuggestionsAccountPolicy = {
  isEnabled(account: AmbientSuggestionsAccount): boolean;
  staleTimeMs(account: AmbientSuggestionsAccount): number;
};

export type AmbientSuggestionsBackgroundRefreshOptions = {
  appEvent: AmbientSuggestionsAppEvent;
  appServerClient: AmbientSuggestionsAppServerClient;
  appServerConnectionRegistry: AmbientSuggestionsConnectionRegistry;
  fileApi: AmbientSuggestionsFileApi;
  getWorkspaceRoots(globalState: AmbientSuggestionsGlobalState): string[];
  globalState: AmbientSuggestionsGlobalState;
  logger: AmbientSuggestionsLogger;
  normalizeProjectRoot(projectRoot: string): string;
  resolveShouldUseWslPaths(
    hostConfig: AmbientSuggestionsAppServerClient["hostConfig"],
  ): boolean;
  settingsStore: AmbientSuggestionsStore;
  accountPolicy: AmbientSuggestionsAccountPolicy;
  ambientSuggestionsSettingKey?: string;
  joinHostPath?(
    left: string,
    right: string,
    shouldUseWslPaths: boolean,
  ): string;
};

export type AmbientSuggestionsBackgroundRefreshController = {
  dispose(): void;
};
