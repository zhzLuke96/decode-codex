// Restored from ref/webview/assets/home-onboarding-assistant-tutorial-card-CacqQsHt.js
// Query descriptors and local default-status state for Setup Codex suggestions.

import {
  appScopeL as createAppScopeDerivedSignal,
  appScopeRoot,
  createAppScopeSignal,
} from "../../../boundaries/app-scope";
import { once } from "../../../runtime/commonjs-interop";
import type {
  AmbientSuggestion,
  AmbientSuggestionQueryParams,
  AmbientSuggestionsResponse,
  AmbientSuggestionStatus,
  AppScopeStoreLike,
} from "./types";

type DefaultSuggestionStatusMap = Record<
  string,
  Record<string, AmbientSuggestionStatus> | undefined
>;

const MAX_PENDING_GENERATED_SUGGESTIONS = 3;
const DEFAULT_STATUSES_STORAGE_KEY = "ambient-suggestions:default-statuses";
const AMBIENT_SUGGESTIONS_QUERY_NAME = "ambient-suggestions";
const AMBIENT_SUGGESTIONS_REFRESH_QUERY_NAME = "ambient-suggestions-refresh";

export const ONBOARDING_ASSISTANT_SUGGESTION_ID = "onboarding-assistant";

const defaultSuggestionStatusesSignal =
  createAppScopeSignal<DefaultSuggestionStatusMap>(appScopeRoot, {});

export const activeAmbientSuggestionIdSignal = createAppScopeSignal<
  string | null
>(appScopeRoot, null);

export const ambientSuggestionsQuery = {
  enabled: ({ projectRoot }: AmbientSuggestionQueryParams) =>
    projectRoot != null,
  id: AMBIENT_SUGGESTIONS_QUERY_NAME,
  queryKey: (params: AmbientSuggestionQueryParams) => [
    AMBIENT_SUGGESTIONS_QUERY_NAME,
    params.hostId,
    params.projectRoot,
    params.domain ?? null,
  ],
};

export const ambientSuggestionsRefreshQuery = {
  enabled: ({ projectRoot }: AmbientSuggestionQueryParams) =>
    projectRoot != null,
  id: AMBIENT_SUGGESTIONS_REFRESH_QUERY_NAME,
  queryKey: (params: AmbientSuggestionQueryParams & { plan?: unknown }) => [
    AMBIENT_SUGGESTIONS_REFRESH_QUERY_NAME,
    params.hostId,
    params.projectRoot,
    params.domain ?? null,
    params.plan ?? null,
  ],
  select: () => true,
};

export const ambientSuggestionDefaultStatusIdsSignal =
  createAppScopeDerivedSignal<string[] | null>(
    appScopeRoot,
    (params: unknown, store: AppScopeStoreLike) => {
      const statuses = getDefaultSuggestionStatusesForParams(store, params);
      return statuses == null ? null : Object.keys(statuses);
    },
  );

export const ambientSuggestionsLoadedSignal = createAppScopeDerivedSignal(
  appScopeRoot,
  (params: unknown, store: AppScopeStoreLike) => {
    const queryState = store.get<{
      data?: AmbientSuggestionsResponse;
      isError?: boolean;
    }>(ambientSuggestionsQuery, params);
    return queryState?.data != null || queryState?.isError === true;
  },
);

export const pendingGeneratedAmbientSuggestionsSignal =
  createAppScopeDerivedSignal<AmbientSuggestion[]>(
    appScopeRoot,
    (params: unknown, store: AppScopeStoreLike) => {
      const queryState = store.get<{
        data?: AmbientSuggestionsResponse;
      }>(ambientSuggestionsQuery, params);
      const file = queryState?.data?.file;
      return getPendingGeneratedSuggestions(
        file?.currentSuggestionIds ?? [],
        file?.suggestions ?? [],
      );
    },
  );

export const ambientSuggestionDefaultStatusesSignal =
  createAppScopeDerivedSignal<Record<string, AmbientSuggestionStatus> | null>(
    appScopeRoot,
    (params: unknown, store: AppScopeStoreLike) =>
      getDefaultSuggestionStatusesForParams(store, params),
  );

export const initAmbientSuggestionsStateChunk = once(() => {});

export function setAmbientSuggestionDefaultStatus(
  store: AppScopeStoreLike,
  params: AmbientSuggestionQueryParams,
  suggestionId: string,
  status: AmbientSuggestionStatus,
): void {
  const statusKey = getDefaultStatusKey(params);
  store.set(defaultSuggestionStatusesSignal, (currentValue?: unknown) => {
    const current = (currentValue ?? {}) as DefaultSuggestionStatusMap;
    const previousStatuses =
      current[statusKey] ?? getFallbackDefaultStatuses(current, params);
    if (previousStatuses?.[suggestionId] === status) return current;

    return {
      ...current,
      [statusKey]: {
        ...previousStatuses,
        [suggestionId]: status,
      },
    };
  });
}

export function clearAmbientSuggestionDefaultStatus(
  store: AppScopeStoreLike,
  suggestionId: string,
): void {
  store.set(defaultSuggestionStatusesSignal, (currentValue?: unknown) => {
    if (currentValue == null) return currentValue;
    const current = currentValue as DefaultSuggestionStatusMap;
    let changed = false;
    const nextEntries = Object.entries(current).map(([key, statuses]) => {
      if (statuses == null || statuses[suggestionId] == null) {
        return [key, statuses] as const;
      }
      const { [suggestionId]: _removedStatus, ...restStatuses } = statuses;
      changed = true;
      return [
        key,
        Object.keys(restStatuses).length === 0 ? undefined : restStatuses,
      ] as const;
    });

    return changed ? Object.fromEntries(nextEntries) : current;
  });
}

export function updateAmbientSuggestionStatusInCache(
  store: AppScopeStoreLike,
  params: AmbientSuggestionQueryParams,
  suggestionId: string,
  status: AmbientSuggestionStatus,
): void {
  const snapshot =
    store.query?.snapshot?.<AmbientSuggestionsResponse>(
      ambientSuggestionsQuery,
      params,
    ) ?? null;
  const currentData = snapshot?.getData?.();
  if (currentData == null) return;

  const nextData = {
    ...currentData,
    file: {
      ...currentData.file,
      suggestions: (currentData.file.suggestions ?? []).map((suggestion) =>
        suggestion.id === suggestionId
          ? {
              ...suggestion,
              status,
            }
          : suggestion,
      ),
    },
  };

  if (snapshot?.setData != null) {
    snapshot.setData(nextData);
  } else {
    store.query?.setData?.(ambientSuggestionsQuery, params, nextData);
  }
}

function getDefaultSuggestionStatusesForParams(
  store: AppScopeStoreLike,
  params: unknown,
): Record<string, AmbientSuggestionStatus> | null {
  const queryParams = params as AmbientSuggestionQueryParams;
  const statusMap =
    store.get<DefaultSuggestionStatusMap | null>(
      defaultSuggestionStatusesSignal,
    ) ?? {};
  const explicitStatuses = statusMap[getDefaultStatusKey(queryParams)];
  if (explicitStatuses != null) return explicitStatuses;
  if (queryParams.domain == null) {
    return getFallbackDefaultStatuses(statusMap, queryParams) ?? {};
  }
  return null;
}

function getDefaultStatusKey({
  domain,
  hostId,
  projectRoot,
}: AmbientSuggestionQueryParams): string {
  const projectRootKey = projectRoot ?? "";
  const baseKey = `${DEFAULT_STATUSES_STORAGE_KEY}:${hostId}:${projectRootKey}`;
  return domain == null ? baseKey : `${baseKey}:${domain}`;
}

function getFallbackDefaultStatuses(
  statusMap: DefaultSuggestionStatusMap,
  { hostId, projectRoot }: AmbientSuggestionQueryParams,
): Record<string, AmbientSuggestionStatus> | undefined {
  return statusMap[
    `${DEFAULT_STATUSES_STORAGE_KEY}:${hostId}:${projectRoot ?? ""}`
  ];
}

function getPendingGeneratedSuggestions(
  currentSuggestionIds: readonly string[],
  suggestions: readonly AmbientSuggestion[],
): AmbientSuggestion[] {
  const pendingSuggestions: AmbientSuggestion[] = [];
  for (const suggestionId of currentSuggestionIds) {
    const suggestion = suggestions.find(
      (candidate) => candidate.id === suggestionId,
    );
    if (suggestion?.status === "pending") {
      pendingSuggestions.push(suggestion);
    }
    if (pendingSuggestions.length === MAX_PENDING_GENERATED_SUGGESTIONS) break;
  }
  return pendingSuggestions;
}
