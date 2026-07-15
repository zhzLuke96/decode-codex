// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for node_repl host service restoration.

export type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

export type NodeReplHostServicesLogger = {
  info(message: string, details?: StructuredLogDetails): void;
  warning(message: string, details?: StructuredLogDetails): void;
};

export type RuntimePathSource =
  | "bundled-or-dev"
  | "env-override"
  | "env-override-relocated"
  | "missing"
  | "primary-runtime";

export type RuntimePathResolution = {
  path: string | null;
  source: RuntimePathSource;
};

export type NodeReplRuntimePaths = {
  codexCliPath: string | null;
  codexCliPathSource: RuntimePathSource;
  nodeModuleDirs: string[];
  nodePath: string | null;
  nodePathSource: RuntimePathSource;
  nodeReplPath: string | null;
  nodeReplPathSource: RuntimePathSource;
  platform: string;
};

export type DesktopFeatureAvailability = {
  computerUse?: boolean | null;
  computerUseNodeRepl?: boolean | null;
  externalBrowserUse?: boolean | null;
  inAppBrowserUse?: boolean | null;
};

export type NodeReplMcpServerConfig = {
  ["mcp_servers.node_repl"]: {
    args: string[];
    command: string;
    env: Record<string, string>;
    startup_timeout_sec: number;
  };
};

export type NodeReplThreadConfig = Record<string, unknown>;

export type ComputerUseServicePaths = {
  serviceAppPath: string | null;
};

export type NodeVersionProbe = {
  error?: unknown;
  status: "failed" | "missing" | "ok";
  value: string | null;
};

export type JsonRpcId = number | string;

export type JsonRpcMessage = {
  id?: JsonRpcId;
  jsonrpc?: string;
  method?: string;
  params?: unknown;
  result?: unknown;
  error?: { code: number; message: string; data?: unknown };
};

export type NativePipeRejectedSocket = {
  authorized: false;
  reason?: string;
};

export type NativePipeAcceptedSocket = {
  authorized: true;
};

export type SocketPeerAuthorization =
  | NativePipeAcceptedSocket
  | NativePipeRejectedSocket;

export type HostServiceHandler = () => Promise<Record<string, unknown> | void>;
