// Restored from ref/.vite/build/src-CoIhwwHr.js
// Shared ambient-suggestions file, generation, and route contracts.

export type AmbientSuggestionDomain = "science" | null;
export type AmbientSuggestionStatus = "pending" | "accepted" | "dismissed";
export type AmbientSuggestionRefreshMode = "default" | "first-plugin-connect";

export type AmbientSuggestion = {
  id: string;
  title: string;
  description: string;
  prompt: string;
  appIds: string[];
  status: AmbientSuggestionStatus;
  createdAtMs: number;
  updatedAtMs: number;
};

export type AmbientSuggestionsFile = {
  projectRoot: string;
  generatedAtMs: number | null;
  currentSuggestionIds: string[];
  suggestions: AmbientSuggestion[];
};

export type AmbientSuggestionGenerationStatus = {
  domain: AmbientSuggestionDomain;
  projectRoot: string;
  runningCount: number;
  runningStartedAtMs: number | null;
  safetyRunningCount: number;
  safetyStartedAtMs: number | null;
  lastFinishedAtMs: number | null;
};

export type ConnectedApp = {
  id: string;
  name: string;
  isAccessible?: boolean;
  isEnabled?: boolean;
};

export type AmbientConnectedAppState = {
  connectedApps: ConnectedApp[];
  disabledConnectedApps: ConnectedApp[];
  disabledAmbientAppIds: Set<string>;
  disabledAppIds: string[];
  disableAllApps: boolean;
  listAppsSucceeded: boolean;
};

export type AmbientDisabledPluginConfig = {
  disabledMcpServerConfigs: Record<string, unknown>;
  disabledPluginIds: string[];
};

export type AmbientThreadSummary = {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
};

export type AmbientSuggestionCandidate = {
  title: string;
  description: string;
  prompt: string;
  appId: string;
};

export type AmbientSuggestionCandidateResponse = {
  suggestions: AmbientSuggestionCandidate[];
};

export type AmbientSuggestionSafetyResponse = {
  exclude: Array<{ id: string; reason: string }>;
};

export type AmbientGenerationTokenUsage = {
  last: {
    inputTokens: number;
    cachedInputTokens: number;
    outputTokens: number;
    reasoningOutputTokens: number;
    totalTokens: number;
  };
};

export type AmbientStructuredLogger = {
  info(message: string, details?: unknown): void;
  warning(message: string, details?: unknown): void;
};

export type RuntimeSchema<T> = {
  safeParse(input: unknown): { success: true; data: T } | { success: false };
};

export type AppServerThread = {
  id: string;
  name?: string | null;
  preview: string;
  updatedAt: number;
  cwd: string;
  ephemeral: boolean;
};

export type AppServerMarketplacePlugin = {
  id: string;
  name: string;
  installed?: boolean;
  enabled?: boolean;
  localVersion?: unknown;
  source?: { type?: string };
};

export type AppServerMarketplace = {
  name: string;
  plugins: AppServerMarketplacePlugin[];
};

export type AppServerPathApi = {
  join(...segments: string[]): string;
  resolve(...segments: string[]): string;
};

export type AmbientAppServerConnection = {
  listThreads(request: {
    limit: number;
    cursor: string | null;
    sortKey: "updated_at";
    modelProviders: null;
    sourceKinds: unknown[];
    archived: boolean;
  }): Promise<{ data: AppServerThread[]; nextCursor: string | null }>;
  listApps(request: {
    cursor: string | null;
    forceRefetch: boolean;
    limit: number;
    threadId: null;
  }): Promise<{ data: ConnectedApp[]; nextCursor: string | null }>;
  getUserSavedConfiguration(projectRoot: string): Promise<unknown>;
  getAuthToken(request: { refreshToken: boolean }): Promise<string | null>;
  listPlugins(
    request?: unknown,
  ): Promise<{ marketplaces: AppServerMarketplace[] }>;
  codexHome(): Promise<string>;
  platformPath(): Promise<AppServerPathApi>;
  readFile(path: string): Promise<Blob | ArrayBuffer | Uint8Array | string>;
  startThread(request: unknown): Promise<{ thread: { id: string } }>;
  startTurn(request: unknown): Promise<{ turn: { id: string } }>;
  interruptTurn?(request: { threadId: string; turnId: string }): Promise<void>;
  unsubscribeThread(threadId: string): Promise<void>;
  registerInternalNotificationHandler(
    handler: (notification: AppServerNotification) => void,
  ): () => void;
};

export type AppServerNotification =
  | {
      method: "error";
      params: {
        threadId: string;
        turnId?: string | null;
        error?: { message?: string; additionalDetails?: string };
      };
    }
  | {
      method: "turn/started";
      params: { threadId: string; turn: { id: string } };
    }
  | {
      method: "thread/tokenUsage/updated";
      params: {
        threadId: string;
        turnId?: string | null;
        tokenUsage: AmbientGenerationTokenUsage;
      };
    }
  | {
      method: "item/agentMessage/delta";
      params: { threadId: string; turnId?: string | null; delta: string };
    }
  | {
      method: "item/completed";
      params: {
        threadId: string;
        turnId?: string | null;
        item: { type: string; text?: string };
      };
    }
  | {
      method: "turn/completed";
      params: {
        threadId: string;
        turn: {
          id: string;
          status: string;
          error?: { message?: string; additionalDetails?: string } | null;
        };
      };
    }
  | { method: string; params: Record<string, unknown> };
