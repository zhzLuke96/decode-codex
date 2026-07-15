// Restored from ref/webview/assets/service-tier-icons-C-0I5QrR.js
// Windows sandbox mode and readiness queries used by composer controls.
import { useAppScopeValue } from "../../boundaries/app-scope";
import { zodEnumSchema, zodObjectSchema } from "../../boundaries/src-l0hb-mz-p";
import { selectedHostIdSignal } from "../../boundaries/thread-context-inputs.facade";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiU as queryTimes,
  vscodeApiUnderscore as useMutation,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { readConfigForHost } from "../../config/config-queries";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";

type HostId = string | null | undefined;

export type WindowsSandboxMode = "elevated" | "unelevated" | null;

type WindowsSandboxMutationContext = {
  previousMode?: WindowsSandboxMode;
};

type WindowsSandboxReadinessOptions = {
  hostId?: HostId;
  enabled?: boolean;
};

const windowsSandboxConfigSchema = zodObjectSchema({
  sandbox: zodEnumSchema(["elevated", "unelevated"]).optional(),
}).passthrough();

const WINDOWS_SANDBOX_MODE_QUERY_KEY = ["windows-sandbox", "mode"] as const;
const WINDOWS_SANDBOX_READINESS_QUERY_KEY = [
  "windows-sandbox",
  "readiness",
] as const;

export function windowsSandboxModeQueryKey(hostId: HostId) {
  return [...WINDOWS_SANDBOX_MODE_QUERY_KEY, hostId] as const;
}

export function windowsSandboxReadinessQueryKey(hostId: HostId) {
  return [...WINDOWS_SANDBOX_READINESS_QUERY_KEY, hostId] as const;
}

async function readWindowsSandboxReadiness(hostId: HostId): Promise<unknown> {
  try {
    const response = await sendAppServerRequest(
      "get-windows-sandbox-readiness-for-host",
      {
        hostId,
      },
    );
    return response.status;
  } catch (error) {
    vscodeLogger.error("Failed to load Windows sandbox readiness", {
      safe: {},
      sensitive: {
        error,
      },
    });
    throw error;
  }
}

export function useWindowsSandboxModeQuery(hostId?: HostId) {
  const selectedHostId = useAppScopeValue(selectedHostIdSignal);
  const resolvedHostId = hostId ?? selectedHostId;
  const queryKey = windowsSandboxModeQueryKey(resolvedHostId);
  const queryClient = useQueryClient();
  return useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const response = await readConfigForHost(
          queryClient,
          resolvedHostId,
          null,
          false,
        );
        return parseWindowsSandboxMode(response.config.windows);
      } catch (error) {
        vscodeLogger.error("Failed to load Windows sandbox mode", {
          safe: {
            error: String(error),
          },
          sensitive: {},
        });
        return null;
      }
    },
    staleTime: queryTimes.ONE_MINUTE,
  });
}

export function useWindowsSandboxReadinessQuery(
  options?: WindowsSandboxReadinessOptions,
) {
  const selectedHostId = useAppScopeValue(selectedHostIdSignal);
  const resolvedHostId = options?.hostId ?? selectedHostId;
  return useQuery({
    queryKey: windowsSandboxReadinessQueryKey(resolvedHostId),
    queryFn: () => readWindowsSandboxReadiness(resolvedHostId),
    staleTime: queryTimes.INFINITE,
    enabled: options?.enabled ?? true,
  });
}

export function useWindowsSandboxModeMutation(hostId?: HostId) {
  const selectedHostId = useAppScopeValue(selectedHostIdSignal);
  const resolvedHostId = hostId ?? selectedHostId;
  const queryClient = useQueryClient();
  const invalidateQuery = invalidateQueriesAndBroadcast();
  const modeQueryKey = windowsSandboxModeQueryKey(resolvedHostId);
  const readinessQueryKey = windowsSandboxReadinessQueryKey(resolvedHostId);
  return useMutation({
    mutationFn: (mode: WindowsSandboxMode) =>
      sendAppServerRequest("batch-write-config-value-for-host", {
        hostId: resolvedHostId,
        edits: [
          {
            keyPath: "windows.sandbox",
            value: mode,
            mergeStrategy: mode == null ? "replace" : "upsert",
          },
        ],
        filePath: null,
        expectedVersion: null,
      }),
    onMutate: (mode: WindowsSandboxMode): WindowsSandboxMutationContext => {
      const previousMode = queryClient.getQueryData(modeQueryKey) as
        | WindowsSandboxMode
        | undefined;
      queryClient.setQueryData(modeQueryKey, mode);
      return {
        previousMode,
      };
    },
    onError: (
      error: unknown,
      _mode: WindowsSandboxMode,
      context?: WindowsSandboxMutationContext,
    ) => {
      vscodeLogger.error("Failed to update Windows sandbox mode", {
        safe: {
          error: String(error),
        },
        sensitive: {},
      });
      if (context?.previousMode !== undefined) {
        queryClient.setQueryData(modeQueryKey, context.previousMode);
      }
    },
    onSettled: async () => {
      await Promise.all([
        invalidateQuery(modeQueryKey),
        invalidateQuery(readinessQueryKey),
      ]);
    },
  });
}

function parseWindowsSandboxMode(windowsConfig: unknown): WindowsSandboxMode {
  const result = windowsSandboxConfigSchema.safeParse(windowsConfig);
  return result.success ? (result.data.sandbox ?? null) : null;
}
