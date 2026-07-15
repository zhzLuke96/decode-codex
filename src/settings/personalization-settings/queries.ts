// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Query and mutation helpers for personalization settings.
import {
  appScopeP as createAppScopeQueryFamily,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { sendAppServerRequest } from "../../boundaries/use-host-config.facade";
import {
  vscodeApiA as useQueryClient,
  vscodeApiH as vscodeLogger,
  vscodeApiU as queryTimes,
  vscodeApiUnderscore as useMutation,
} from "../../boundaries/vscode-api";
import { USER_CONFIG_QUERY_KEY } from "../../config/config-queries";
import { USER_SAVED_CONFIG_QUERY_KEY } from "../../config/user-saved-config-query";
import { invalidateQueriesAndBroadcast } from "../../utils/invalidate-queries-and-broadcast";
import type { MemoryConfig } from "../../onboarding/chronicle-setup-state/types";

export const CHRONICLE_CONFIG_KEY_PATH = "features.chronicle";
export const CHRONICLE_CONSENT_ACCEPTED_KEY = "chronicle-consent-accepted";
export const CHRONICLE_SETUP_COMPLETION_PENDING_KEY =
  "chronicle-setup-completion-pending";

const CODEX_AGENTS_DOCUMENT_QUERY_KEY = ["codex-agents-md"] as const;

type ConfigWriteTarget = {
  expectedVersion?: unknown;
  filePath?: string | null;
};

export type UserConfigResponse = {
  config?: Record<string, unknown> | null;
  configWriteTarget?: ConfigWriteTarget | null;
};

export type ConfigEdit = {
  keyPath: string;
  mergeStrategy?: "replace" | "upsert";
  value: unknown;
};

export type AgentsDocument = {
  contents: string;
  path: string | null;
};

type SaveAgentsDocumentVariables = {
  contents: string;
  hostId: string;
};

type WriteConfigVariables = {
  edits: ConfigEdit[];
};

type MutationResult<TVariables, TResult = unknown> = {
  isPending: boolean;
  mutate: (variables: TVariables) => void;
  mutateAsync: (variables: TVariables) => Promise<TResult>;
};

const defaultMemoryConfig: MemoryConfig = {
  disableOnExternalContext: false,
  generateMemories: true,
  useMemories: true,
};

export function codexAgentsDocumentQueryKey(
  hostId: string,
): readonly unknown[] {
  return [...CODEX_AGENTS_DOCUMENT_QUERY_KEY, { hostId }];
}

export const codexAgentsDocumentQuery = createAppScopeQueryFamily(
  appScopeRoot,
  (hostId: string) => ({
    queryKey: codexAgentsDocumentQueryKey(hostId),
    queryFn: async () =>
      normalizeAgentsDocument(
        await sendAppServerRequest("codex-agents-md", { hostId }),
      ),
    staleTime: queryTimes.FIVE_SECONDS,
  }),
);

export function useSaveAgentsDocumentMutation({
  onError,
  onSuccess,
}: {
  onError?: () => void;
  onSuccess?: () => void;
} = {}): MutationResult<SaveAgentsDocumentVariables, AgentsDocument> {
  const queryClient = useQueryClient();
  return useMutation<SaveAgentsDocumentVariables, AgentsDocument>({
    mutationFn: async (variables) =>
      normalizeAgentsDocument(
        await sendAppServerRequest("codex-agents-md-save", variables),
      ),
    onSuccess: (document, variables) => {
      queryClient.setQueryData(codexAgentsDocumentQueryKey(variables.hostId), {
        path: document.path,
        contents: variables.contents,
      });
      onSuccess?.();
    },
    onError: () => {
      onError?.();
    },
  });
}

export function useWritePersonalizationConfigMutation({
  hostId,
  userConfig,
  onError,
}: {
  hostId: string;
  onError?: () => void;
  userConfig?: UserConfigResponse;
}): MutationResult<WriteConfigVariables> {
  const invalidateQueries = invalidateQueriesAndBroadcast();
  return useMutation<WriteConfigVariables, unknown>({
    mutationFn: ({ edits }) =>
      sendAppServerRequest("batch-write-config-value", {
        hostId,
        edits: edits.map((edit) => ({
          keyPath: edit.keyPath,
          value: edit.value,
          mergeStrategy: edit.mergeStrategy ?? "upsert",
        })),
        filePath: userConfig?.configWriteTarget?.filePath ?? null,
        expectedVersion: null,
        reloadUserConfig: true,
      }),
    onSuccess: () => {
      void Promise.all([
        invalidateQueries([...USER_CONFIG_QUERY_KEY, hostId]),
        invalidateQueries(USER_SAVED_CONFIG_QUERY_KEY),
      ]);
    },
    onError: (error) => {
      vscodeLogger.error("Failed to update personalization config", {
        safe: {
          error: String(error),
        },
        sensitive: {},
      });
      onError?.();
    },
  });
}

export function readMemoryConfig(
  config: Record<string, unknown> | null | undefined,
): MemoryConfig {
  const memories = isRecord(config?.memories) ? config.memories : {};
  const disableOnExternalContext =
    readOptionalBoolean(memories.disable_on_external_context) ??
    readOptionalBoolean(memories.no_memories_if_mcp_or_web_search) ??
    defaultMemoryConfig.disableOnExternalContext;

  return {
    disableOnExternalContext,
    generateMemories:
      readOptionalBoolean(memories.generate_memories) ??
      defaultMemoryConfig.generateMemories,
    useMemories:
      readOptionalBoolean(memories.use_memories) ??
      defaultMemoryConfig.useMemories,
  };
}

export function readChronicleResearchPreviewEnabled(
  config: Record<string, unknown> | null | undefined,
): boolean {
  const features = isRecord(config?.features) ? config.features : {};
  return features.chronicle === true;
}

export function buildMemoryConfigEdits(enabled: boolean): ConfigEdit[] {
  return [
    {
      keyPath: "memories.generate_memories",
      value: enabled,
    },
    {
      keyPath: "memories.use_memories",
      value: enabled,
    },
  ];
}

export function buildSkipToolAssistedChatsEdits(enabled: boolean): ConfigEdit[] {
  return [
    {
      keyPath: "memories.disable_on_external_context",
      value: enabled,
    },
    {
      keyPath: "memories.no_memories_if_mcp_or_web_search",
      value: null,
    },
  ];
}

export function buildChronicleConfigEdit(enabled: boolean): ConfigEdit {
  return {
    keyPath: CHRONICLE_CONFIG_KEY_PATH,
    value: enabled,
  };
}

function normalizeAgentsDocument(value: unknown): AgentsDocument {
  if (!isRecord(value)) {
    return {
      contents: "",
      path: null,
    };
  }
  return {
    contents: typeof value.contents === "string" ? value.contents : "",
    path: typeof value.path === "string" ? value.path : null,
  };
}

function readOptionalBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
