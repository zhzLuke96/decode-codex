// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
import React from "react";
import {
  useCloudEnvironmentsQuery,
  useWorkspaceEnvironmentSearchQuery,
  useWorkspaceEnvironmentsByRepositoryQuery,
} from "../../runtime/codex-api";
import type { CloudEnvironmentRecord } from "../../runtime/codex-api/types";
import type { QueryResult } from "./types";

export function useCloudEnvironmentOptions({
  enabled,
  searchQuery,
  selectedEnvironmentId,
}: {
  enabled: boolean;
  searchQuery: string;
  selectedEnvironmentId: string | null;
}): {
  environments: CloudEnvironmentRecord[];
  isError: boolean;
  isLoading: boolean;
} {
  let trimmedSearchQuery = searchQuery.trim(),
    allEnvironmentsQuery = useCloudEnvironmentsQuery({
      enabled,
    }) as QueryResult<CloudEnvironmentRecord[]>,
    workspaceEnvironmentsQuery = useWorkspaceEnvironmentsByRepositoryQuery({
      enabled,
    }) as QueryResult<CloudEnvironmentRecord[]>,
    environmentSearchQuery = useWorkspaceEnvironmentSearchQuery(searchQuery, {
      enabled: enabled && trimmedSearchQuery.length > 0,
    }) as QueryResult<CloudEnvironmentRecord[]>;

  let environments = React.useMemo(
      () =>
        trimmedSearchQuery.length > 0
          ? sortCloudEnvironments(
              environmentSearchQuery.data ?? [],
              selectedEnvironmentId,
            )
          : mergeCloudEnvironmentLists(
              workspaceEnvironmentsQuery.data ?? [],
              allEnvironmentsQuery.data ?? [],
              selectedEnvironmentId,
            ),
      [
        allEnvironmentsQuery.data,
        environmentSearchQuery.data,
        selectedEnvironmentId,
        trimmedSearchQuery.length,
        workspaceEnvironmentsQuery.data,
      ],
    ),
    isLoading =
      (trimmedSearchQuery.length > 0
        ? environmentSearchQuery.isLoading || environmentSearchQuery.isFetching
        : allEnvironmentsQuery.isLoading ||
          allEnvironmentsQuery.isFetching ||
          workspaceEnvironmentsQuery.isLoading ||
          workspaceEnvironmentsQuery.isFetching) ?? false,
    isError =
      (trimmedSearchQuery.length > 0
        ? environmentSearchQuery.isError
        : allEnvironmentsQuery.isError) ?? false;

  return {
    environments,
    isError,
    isLoading,
  };
}

export function getCloudEnvironmentId(
  environment: CloudEnvironmentRecord | null | undefined,
): string | null {
  return environment?.id ?? environment?.environment_id ?? null;
}

function mergeCloudEnvironmentLists(
  primaryEnvironments: CloudEnvironmentRecord[],
  secondaryEnvironments: CloudEnvironmentRecord[],
  selectedEnvironmentId: string | null,
): CloudEnvironmentRecord[] {
  let environmentsByKey = new Map<string, CloudEnvironmentRecord>();
  for (let environment of [...primaryEnvironments, ...secondaryEnvironments]) {
    environmentsByKey.set(
      getCloudEnvironmentId(environment) ?? environment.label,
      environment,
    );
  }
  return sortCloudEnvironments(
    Array.from(environmentsByKey.values()),
    selectedEnvironmentId,
  );
}

function sortCloudEnvironments(
  environments: CloudEnvironmentRecord[],
  selectedEnvironmentId: string | null,
): CloudEnvironmentRecord[] {
  return [...environments].sort((left, right) => {
    let leftId = getCloudEnvironmentId(left),
      rightId = getCloudEnvironmentId(right);
    if (selectedEnvironmentId != null) {
      if (leftId === selectedEnvironmentId) return -1;
      if (rightId === selectedEnvironmentId) return 1;
    }
    if (Boolean(left.is_pinned) !== Boolean(right.is_pinned)) {
      return left.is_pinned ? -1 : 1;
    }
    let taskCountDifference = (right.task_count ?? 0) - (left.task_count ?? 0);
    return taskCountDifference === 0
      ? left.label.localeCompare(right.label)
      : taskCountDifference;
  });
}
