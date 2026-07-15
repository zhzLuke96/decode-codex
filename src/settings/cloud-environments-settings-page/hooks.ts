// Restored from ref/webview/assets/cloud-environments-settings-page-Cx0Mfko0.js

import React from "react";
import {
  getCloudEnvironmentDetails,
  listCloudMachines,
  listGithubConnectors,
  searchCloudEnvironments,
  searchGithubRepositories,
} from "./api";
import type {
  CloudConnector,
  CloudEnvironment,
  CloudMachine,
  CloudRepository,
} from "./types";
type AsyncState<TValue> = {
  data: TValue | null;
  error: Error | null;
  isLoading: boolean;
  refetch: () => void;
};
export function useCloudEnvironmentDetails(
  environmentId: string | null,
): AsyncState<CloudEnvironment> {
  const [refreshKey, setRefreshKey] = React.useState(0);
  const [state, setState] = React.useState<
    Omit<AsyncState<CloudEnvironment>, "refetch">
  >({
    data: null,
    error: null,
    isLoading: Boolean(environmentId),
  });
  React.useEffect(() => {
    if (!environmentId) {
      setState({
        data: null,
        error: null,
        isLoading: false,
      });
      return;
    }
    let isCurrent = true;
    setState((current) => ({
      ...current,
      error: null,
      isLoading: true,
    }));
    getCloudEnvironmentDetails(environmentId)
      .then((data) => {
        if (isCurrent)
          setState({
            data,
            error: null,
            isLoading: false,
          });
      })
      .catch((error) => {
        if (isCurrent)
          setState({
            data: null,
            error,
            isLoading: false,
          });
      });
    return () => {
      isCurrent = false;
    };
  }, [environmentId, refreshKey]);
  return {
    ...state,
    refetch: () => setRefreshKey((key) => key + 1),
  };
}
export function useCloudMachines(): AsyncState<CloudMachine[]> {
  return useAsyncList(listCloudMachines);
}
export function useGithubConnectors(): AsyncState<CloudConnector[]> {
  return useAsyncList(listGithubConnectors);
}
export function useRepositorySearch(
  query: string,
  connectorId: string,
): AsyncState<CloudRepository[]> {
  return useAsyncList(
    React.useCallback(
      () => searchGithubRepositories(query, connectorId),
      [connectorId, query],
    ),
  );
}
export function useCloudEnvironmentSearch(query: string) {
  const [items, setItems] = React.useState<CloudEnvironment[]>([]);
  const [cursor, setCursor] = React.useState<string | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [refreshKey, setRefreshKey] = React.useState(0);
  React.useEffect(() => {
    let isCurrent = true;
    setIsLoading(true);
    setError(null);
    searchCloudEnvironments(query, null)
      .then((page) => {
        if (!isCurrent) return;
        setItems(page.environments);
        setCursor(page.nextCursor);
        setIsLoading(false);
      })
      .catch((caughtError) => {
        if (!isCurrent) return;
        setItems([]);
        setCursor(null);
        setError(caughtError);
        setIsLoading(false);
      });
    return () => {
      isCurrent = false;
    };
  }, [query, refreshKey]);
  const loadMore = React.useCallback(() => {
    if (!cursor || isLoadingMore) return;
    setIsLoadingMore(true);
    setError(null);
    searchCloudEnvironments(query, cursor)
      .then((page) => {
        setItems((current) => [...current, ...page.environments]);
        setCursor(page.nextCursor);
        setIsLoadingMore(false);
      })
      .catch((caughtError) => {
        setError(caughtError);
        setIsLoadingMore(false);
      });
  }, [cursor, isLoadingMore, query]);
  return {
    error,
    hasMore: cursor != null,
    isLoading,
    isLoadingMore,
    items,
    loadMore,
    refetch: () => setRefreshKey((key) => key + 1),
  };
}
function useAsyncList<TValue>(
  loader: () => Promise<TValue[]>,
): AsyncState<TValue[]> {
  const [refreshKey, setRefreshKey] = React.useState(0);
  const [state, setState] = React.useState<
    Omit<AsyncState<TValue[]>, "refetch">
  >({
    data: null,
    error: null,
    isLoading: true,
  });
  React.useEffect(() => {
    let isCurrent = true;
    setState((current) => ({
      ...current,
      error: null,
      isLoading: true,
    }));
    loader()
      .then((data) => {
        if (isCurrent)
          setState({
            data,
            error: null,
            isLoading: false,
          });
      })
      .catch((error) => {
        if (isCurrent)
          setState({
            data: null,
            error,
            isLoading: false,
          });
      });
    return () => {
      isCurrent = false;
    };
  }, [loader, refreshKey]);
  return {
    ...state,
    refetch: () => setRefreshKey((key) => key + 1),
  };
}
