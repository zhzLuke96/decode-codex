// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Query and mutation hook for host-provided "open in" targets.
import * as React from "react";

import { queryDurations, useHostQuery } from "./host-query-runtime";
import { useHostRequest } from "./file-open-runtime";

type OpenTargetQueryResult = {
  availableTargets?: unknown[];
  mode?: string;
  targets?: unknown[];
};

type UseOpenTargetsParams = {
  cwd?: string | null;
  turnId?: string | null;
  hostId?: string | null;
  openPath: string;
};

type OpenInTargetOptions = {
  appPath?: string | null;
  path?: string;
  persistPreferred?: boolean;
};

function readList(value: unknown, key: "availableTargets" | "targets"): unknown[] {
  if (typeof value !== "object" || value == null) return [];
  const list = (value as Record<string, unknown>)[key];
  return Array.isArray(list) ? list : [];
}

export function useOpenTargets({ cwd, hostId, openPath }: UseOpenTargetsParams) {
  const canLoadTargets = Boolean(cwd ?? openPath);
  const query = useHostQuery<OpenTargetQueryResult>("open-in-targets", {
    params: {
      cwd,
      hostId,
      path: openPath,
    },
    queryConfig: {
      enabled: canLoadTargets,
      staleTime: queryDurations.ONE_MINUTE,
    },
  });
  const openRequest = useHostRequest("open-in-targets");
  const data = query.data;
  const mode =
    typeof data === "object" && data != null
      ? String(data.mode ?? "default")
      : "default";
  const open = React.useCallback(
    (target: unknown, options: OpenInTargetOptions = {}) =>
      openRequest.mutate({
        appPath: options.appPath,
        cwd,
        hostId,
        path: options.path ?? openPath,
        persistPreferred: options.persistPreferred,
        target,
      }),
    [cwd, hostId, openPath, openRequest],
  );

  return {
    availableTargets: readList(data, "availableTargets"),
    canLoadTargets,
    hasLoadedTargets: query.isSuccess || data != null,
    isLoadingTargets: query.isLoading || query.isPending || query.isFetching,
    mode,
    open,
    targets: readList(data, "targets"),
  };
}

export function OpenTargetsPrefetch(props: UseOpenTargetsParams): null {
  useOpenTargets(props);
  return null;
}
