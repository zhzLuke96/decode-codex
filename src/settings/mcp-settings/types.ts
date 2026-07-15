// Restored from ref/webview/assets/mcp-settings-Cq9pFeQZ.js
// Shared data shapes for the MCP settings page.
import type { ReactNode } from "react";
import type {
  ConfigOrigin,
  McpServerConfig,
} from "../../config/config-queries/types";
import { SettingsSchemaValueType } from "../settings-sections";

export type McpAuthStatus = "notLoggedIn" | string;

export type McpServerStatus = {
  authStatus?: McpAuthStatus;
  name: string;
};

export type McpServerStatusResponse = {
  data: McpServerStatus[];
};

export type McpServerStatusQueryResult = {
  data?: McpServerStatusResponse;
  isFetching: boolean;
};

export type McpConfigQueryData = {
  configWriteTarget?: {
    filePath: string;
  } | null;
  serverOrigins?: Record<string, ConfigOrigin | null>;
  servers?: Record<string, EditableMcpServerConfig>;
};

export type MutationResult<TVariables> = {
  mutateAsync: (variables: TVariables) => Promise<unknown>;
};

export type WriteMcpServerConfigVariables = {
  filePath: string;
  key: string;
  value: EditableMcpServerConfig | null;
};

export type ToggleMcpServerVariables = {
  enabled: boolean;
  key: string;
};

export type KeyValueEntry = {
  key: string;
  value: string;
};

export type TransportType = "stdio" | "streamable_http";

export type SharedMcpServerFields = McpServerConfig & {
  disabled_tools?: unknown;
  enabled_tools?: unknown;
  startup_timeout_ms?: unknown;
  startup_timeout_sec?: unknown;
  tool_timeout_sec?: unknown;
};

export type StdioMcpServerConfig = SharedMcpServerFields & {
  args?: string[];
  command: string;
  cwd?: string;
  env?: Record<string, string>;
  env_vars?: string[];
};

export type HttpMcpServerConfig = SharedMcpServerFields & {
  bearer_token_env_var?: string;
  env_http_headers?: Record<string, string>;
  http_headers?: Record<string, string>;
  url: string;
};

export type EditableMcpServerConfig =
  | HttpMcpServerConfig
  | StdioMcpServerConfig;

export type EditableMcpServerDraft = {
  base: SharedMcpServerFields;
  http: {
    bearerTokenEnvVar: string;
    envHttpHeaders: KeyValueEntry[];
    httpHeaders: KeyValueEntry[];
    url: string;
  };
  label: string;
  stdio: {
    args: string[];
    command: string;
    cwd: string;
    env: KeyValueEntry[];
    envVars: string[];
  };
  transportType: TransportType;
};

type EditableValueBaseProps = {
  addLabel?: ReactNode;
  disabled?: boolean;
  inputAriaLabel?: string;
  title: ReactNode;
};

type EditableStringValueProps = EditableValueBaseProps & {
  inputType: typeof SettingsSchemaValueType.String;
  onEdit: (value: string) => void;
  placeHolderValue: string;
  value: string;
};

type EditableArrayValueProps = EditableValueBaseProps & {
  inputType: typeof SettingsSchemaValueType.Array;
  onEdit: (value: string[]) => void;
  placeHolderValue: string[];
  value: string[];
};

type EditableRecordValueProps = EditableValueBaseProps & {
  inputType: typeof SettingsSchemaValueType.Record;
  onEdit: (value: KeyValueEntry[]) => void;
  placeHolderValue: KeyValueEntry[];
  value: KeyValueEntry[];
};

export type EditableConfigValueProps =
  | EditableArrayValueProps
  | EditableRecordValueProps
  | EditableStringValueProps;

export type McpServerDetailProps = {
  config: EditableMcpServerConfig;
  initialKey: string | null;
  onCancel: () => void;
  onSave: (config: EditableMcpServerConfig, label: string) => Promise<void>;
  onUninstall?: (label: string) => Promise<void>;
};

export type McpServerRowProps = {
  authStatus?: McpAuthStatus;
  enabled?: boolean;
  isReadOnly?: boolean;
  name: string;
  onAuthenticateClicked?: () => void;
  onEnableClicked?: (enabled: boolean) => void;
  onSettingsClicked?: () => void;
  statusLoading: boolean;
};

export type McpLoginResult = {
  hostId: string;
  name: string;
  success: boolean;
};

export type AppServerInitializedMessage = {
  hostId: string;
};
