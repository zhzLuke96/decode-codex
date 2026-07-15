// Restored from ref/webview/assets/home-onboarding-assistant-tutorial-card-CacqQsHt.js
// Shared contracts for the Setup Codex ambient suggestion card.

export type AmbientSuggestionStatus =
  | "accepted"
  | "dismissed"
  | "pending"
  | string;

export interface AmbientSuggestionQueryParams {
  domain?: string | null;
  hostId: string;
  projectRoot?: string | null;
}

export interface AmbientSuggestion {
  id: string;
  source?: "default" | "generated" | string;
  status?: AmbientSuggestionStatus;
  [key: string]: unknown;
}

export interface AmbientSuggestionsFile {
  currentSuggestionIds?: string[];
  suggestions?: AmbientSuggestion[];
  [key: string]: unknown;
}

export interface AmbientSuggestionsResponse {
  file: AmbientSuggestionsFile;
  [key: string]: unknown;
}

export interface SetupCodexOnboardingSuggestionCardProps {
  completed: boolean;
  domain?: string | null;
  hostId: string;
  onLocalConversationCreated: (conversationId: unknown) => unknown;
  projectRoot?: string | null;
}

export type AppScopeStoreLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  query?: {
    fetch?<TValue = unknown>(query: unknown, params?: unknown): Promise<TValue>;
    setData?<TValue = unknown>(
      query: unknown,
      params: unknown,
      data: TValue,
    ): void;
    snapshot?<TValue = unknown>(
      query: unknown,
      params?: unknown,
    ): {
      getData?: () => TValue | undefined;
      setData?: (data: TValue | undefined) => void;
    };
  };
  queryClient?: {
    invalidateQueries(options: { queryKey: readonly unknown[] }): unknown;
  };
  set(signal: unknown, updater: unknown): void;
  set(signal: unknown, key: unknown, value: unknown): void;
};

export type WelcomeRoleState = {
  roles?: string[];
};
