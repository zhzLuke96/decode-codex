// Restored from ref/webview/assets/config-queries-C2OQQYPH.js
// Lightweight config-query data shapes. The host runtime still owns the exact payload schemas.

export type HostId = string;
export type ConfigLayerName =
  | {
      type: "legacyManagedConfigTomlFromFile";
      file: string;
    }
  | {
      type: "project";
      dotCodexFolder: string;
    }
  | {
      type: "system";
      file: string;
    }
  | {
      type: "user";
      file: string;
    }
  | {
      type: string;
      [key: string]: unknown;
    };
export type ConfigLayer = {
  name: ConfigLayerName;
  version: unknown;
};
export type ConfigOrigin = {
  name: ConfigLayerName;
  version: unknown;
};
export type ConfigWriteTarget = {
  expectedVersion: unknown;
  filePath: string;
} | null;
export type LayeredConfigResponse = {
  config: Record<string, unknown>;
  layers: ConfigLayer[] | null;
  origins: Record<string, ConfigOrigin> | null;
};
export type McpServerConfig = Record<string, unknown> & {
  enabled?: boolean;
  name?: string;
};
export type McpServerConfigMap = Record<string, McpServerConfig>;
export type QueryKey = readonly unknown[];
export type QueryClientLike = {
  cancelQueries: (options?: { queryKey?: QueryKey }) => Promise<unknown>;
  fetchQuery: <T = any>(options: Record<string, unknown>) => Promise<T>;
  getQueriesData: (options?: { queryKey?: QueryKey }) => Array<[QueryKey, any]>;
  setQueryData: (queryKey: QueryKey, data: unknown) => void;
};
export type WorkspaceRootsContext = {
  data?: {
    roots?: string[];
  } | null;
};
export const EMPTY_LAYERED_CONFIG_RESPONSE: LayeredConfigResponse = {
  config: {
    model: null,
    review_model: null,
    model_context_window: null,
    model_auto_compact_token_limit: null,
    model_auto_compact_token_limit_scope: null,
    model_provider: null,
    approval_policy: null,
    approvals_reviewer: null,
    sandbox_mode: null,
    sandbox_workspace_write: null,
    forced_chatgpt_workspace_id: null,
    forced_login_method: null,
    web_search: null,
    tools: null,
    profile: null,
    profiles: {},
    instructions: null,
    developer_instructions: null,
    compact_prompt: null,
    model_reasoning_effort: null,
    model_reasoning_summary: null,
    service_tier: null,
    model_verbosity: null,
    analytics: null,
    mcp_servers: {},
    apps: {
      _default: {
        enabled: true,
        approvals_reviewer: null,
        destructive_enabled: false,
        open_world_enabled: false,
        default_tools_approval_mode: null,
        default_tools_enabled: null,
        tools: null,
      },
    },
    desktop: null,
  },
  origins: {},
  layers: null,
};
