// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Git query-option builders used by review and git-action atoms.
import { createQueryKey } from "./app-server-mutation-runtime";
import { sendHostRequest } from "./host-request-runtime";
import { queryDurations } from "./host-query-runtime";
import { normalizeRequestCwd } from "./onboarding-common-runtime";
import { createScopedQueryAtom } from "./onboarding-scope-runtime";
import { appScopeRoot } from "../boundaries/app-scope";

export const timeConstants = queryDurations;

export type GitQueryOptions = {
  enabled?: boolean;
  queryFn: (context?: { signal?: AbortSignal }) => Promise<unknown>;
  queryKey: readonly unknown[];
  staleTime?: number;
  [key: string]: unknown;
};

export function buildReviewDiffQueryKey({
  metadata,
  method,
  params,
  hostKey,
}: {
  metadata?: { commonDir?: string; root?: string } | null;
  method: string;
  params?: Record<string, unknown> | null;
  hostKey?: string | null;
}): readonly unknown[] {
  return createQueryKey(`git-${method}`, {
    commonDir: metadata?.commonDir,
    hostKey,
    root: metadata?.root,
    ...params,
  });
}

export function createGitQueryOptions(
  method: string,
  metadata: { commonDir?: string; root?: string } | null | undefined,
  params: Record<string, unknown> | null | undefined,
  hostKey: string | null | undefined,
  hostConfig: unknown,
  options: Record<string, unknown> = {},
): GitQueryOptions {
  const enabled = options.enabled !== false && metadata != null;
  const requestParams = {
    ...(metadata ?? {}),
    ...(params ?? {}),
    hostConfig,
  };
  const queryKey = buildReviewDiffQueryKey({
    metadata,
    method,
    params: requestParams,
    hostKey,
  });

  return {
    staleTime: queryDurations.FIVE_SECONDS,
    ...options,
    enabled,
    queryKey,
    queryFn: ({ signal }: { signal?: AbortSignal } = {}) =>
      sendHostRequest(`git-${method}`, {
        params: requestParams,
        signal,
        source:
          typeof params?.operationSource === "string"
            ? params.operationSource
            : undefined,
      }),
  };
}

export async function clearGitStatusCache({
  queryClient,
}: {
  queryClient?: {
    invalidateQueries?(filters?: unknown): Promise<unknown> | unknown;
  };
} = {}): Promise<void> {
  await queryClient?.invalidateQueries?.({ queryKey: ["git"] });
}

export function createCwdQueryAtomFamily<
  TParams extends {
    commonDir?: string | null;
    cwd?: string | null;
    enabled?: boolean;
    hostConfig?: unknown;
    hostKey?: string | null;
    root?: string | null;
  },
>({
  getOptions = () => ({}),
  getParams = (params: TParams) => params,
  method,
}: {
  getOptions?: (params: TParams) => Record<string, unknown>;
  getParams?: (params: TParams) => Record<string, unknown>;
  method: string;
}) {
  const fromCwd$ = createScopedQueryAtom(appScopeRoot, (params: TParams) => {
    const normalizedRoot =
      params.root ?? normalizeRequestCwd(params.cwd) ?? null;
    const metadata =
      normalizedRoot == null
        ? null
        : {
            commonDir: params.commonDir ?? undefined,
            root: normalizedRoot,
          };
    const options = getOptions(params);
    return createGitQueryOptions(
      method,
      metadata,
      getParams({
        ...params,
        root: normalizedRoot,
      }),
      params.hostKey ?? null,
      params.hostConfig,
      {
        ...options,
        enabled: params.enabled !== false && options.enabled !== false,
      },
    );
  });

  return {
    fromCwd$,
    fromMetadata$: fromCwd$,
  };
}

export function buildGitMetadataQueryOptions(
  cwd: string | null | undefined,
  hostKey: string | null | undefined,
  hostConfig: unknown,
  operationSource: string,
  options: Record<string, unknown> = {},
): GitQueryOptions {
  const normalizedCwd = normalizeRequestCwd(cwd);
  return createGitQueryOptions(
    "metadata",
    normalizedCwd == null ? null : { root: normalizedCwd },
    {
      cwd: normalizedCwd,
      operationSource,
      watchForGitInit: options.watchForGitInit === true,
    },
    hostKey,
    hostConfig,
    {
      ...options,
      enabled: options.enabled !== false && normalizedCwd != null,
    },
  );
}

export const gitMetadataFromCwdQuery = createScopedQueryAtom(
  appScopeRoot,
  (
    params: {
      cwd?: string | null;
      enabled?: boolean;
      hostConfig?: unknown;
      operationSource?: string;
      watchForGitInit?: boolean;
    } = {},
  ) =>
    buildGitMetadataQueryOptions(
      params.cwd,
      null,
      params.hostConfig,
      params.operationSource ?? "review_model",
      {
        enabled: params.enabled !== false,
        watchForGitInit: params.watchForGitInit,
      },
    ),
);

export const gitMetadataReadinessAtom = createScopedQueryAtom(
  appScopeRoot,
  (
    params: {
      commonDir?: string | null;
      enabled?: boolean;
      hostConfig?: unknown;
      operationSource?: string;
      root?: string | null;
    } = {},
  ) =>
    createGitQueryOptions(
      "metadata-readiness",
      params.root == null
        ? null
        : {
            commonDir: params.commonDir ?? undefined,
            root: params.root,
          },
      {
        operationSource: params.operationSource ?? "review_model",
        root: params.root,
      },
      null,
      params.hostConfig,
      { enabled: params.enabled !== false && params.root != null },
    ),
);
