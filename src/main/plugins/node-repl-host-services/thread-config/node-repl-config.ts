// Restored from ref/.vite/build/main-Cfnoc8EH.js
// node_repl MCP server config and env assembly.

import {
  CODEX_CLI_PATH_ENV,
  NODE_REPL_MCP_SERVER_NAME,
  NODE_REPL_NATIVE_PIPE_CONNECT_TIMEOUT_MS_ENV,
  NODE_REPL_NODE_MODULE_DIRS_ENV,
  NODE_REPL_NODE_PATH_ENV,
  NODE_REPL_REQUEST_META_ENV,
  NODE_REPL_SENTRY_USER_ID_ENV,
  NODE_REPL_TRACE_META_ENV,
  NODE_REPL_TRUST_ALL_CODE_ENV,
  NODE_REPL_TRUSTED_BROWSER_CLIENT_SHA256S_ENV,
} from "../constants";
import type { NodeReplMcpServerConfig, NodeReplThreadConfig } from "../types";

export function createNodeReplMcpServerConfig({
  codexCliPath,
  codexHome,
  extraEnv,
  nodeModuleDirs = "",
  nodePath,
  nodeReplPath,
  platform,
  requestMeta,
  sentryUserId,
  shouldUseWslPaths,
  traceMeta = false,
  trustAllCode,
  trustedBrowserClientSha256s = [],
}: {
  codexCliPath?: string | null;
  codexHome: string;
  extraEnv?: Record<string, string | null | undefined>;
  nodeModuleDirs?: string;
  nodePath?: string | null;
  nodeReplPath?: string | null;
  platform: string;
  requestMeta?: string | null;
  sentryUserId?: string | null;
  shouldUseWslPaths?: boolean;
  traceMeta?: boolean;
  trustAllCode?: string | null;
  trustedBrowserClientSha256s?: readonly string[];
}): NodeReplMcpServerConfig | null {
  if (nodePath == null || nodeReplPath == null) return null;
  const nodeReplEnv: Record<string, string> = {
    CODEX_HOME: codexHome,
    [NODE_REPL_NATIVE_PIPE_CONNECT_TIMEOUT_MS_ENV]: "1000",
    [NODE_REPL_NODE_MODULE_DIRS_ENV]: nodeModuleDirs,
    [NODE_REPL_NODE_PATH_ENV]: nodePath,
    NODE_REPL_TRUSTED_CODE_PATHS: codexHome,
  };
  if (requestMeta != null)
    nodeReplEnv[NODE_REPL_REQUEST_META_ENV] = requestMeta;
  if (sentryUserId != null)
    nodeReplEnv[NODE_REPL_SENTRY_USER_ID_ENV] = sentryUserId;
  if (trustAllCode != null)
    nodeReplEnv[NODE_REPL_TRUST_ALL_CODE_ENV] = trustAllCode;
  if (traceMeta) nodeReplEnv[NODE_REPL_TRACE_META_ENV] = "1";
  if (trustedBrowserClientSha256s.length > 0) {
    nodeReplEnv[NODE_REPL_TRUSTED_BROWSER_CLIENT_SHA256S_ENV] =
      trustedBrowserClientSha256s.join(",");
  }
  Object.assign(nodeReplEnv, stripNullishEnv(extraEnv));
  if (codexCliPath != null && supportsCodexCliSandbox(platform)) {
    nodeReplEnv[CODEX_CLI_PATH_ENV] = codexCliPath;
  }
  if (shouldUseWslPaths) {
    nodeReplEnv.WSLENV = Object.keys(nodeReplEnv)
      .map((key) => `${key}/w`)
      .join(":");
  }
  return {
    [`mcp_servers.${NODE_REPL_MCP_SERVER_NAME}`]: {
      args: [],
      command: nodeReplPath,
      env: nodeReplEnv,
      startup_timeout_sec: 120,
    },
  };
}

export function mergeThreadConfigs(
  configs: readonly (NodeReplThreadConfig | null | false | undefined)[],
): NodeReplThreadConfig | null {
  const merged: NodeReplThreadConfig = {};
  for (const config of configs) {
    if (config == null || config === false) continue;
    for (const [key, value] of Object.entries(config)) merged[key] = value;
  }
  return Object.keys(merged).length === 0 ? null : merged;
}

export function joinNodeModuleDirs(
  nodeModuleDirs: readonly string[],
  platform: string,
): string {
  return nodeModuleDirs.join(platform === "win32" ? ";" : ":");
}

function stripNullishEnv(
  env?: Record<string, string | null | undefined>,
): Record<string, string> {
  const stripped: Record<string, string> = {};
  for (const [key, value] of Object.entries(env ?? {})) {
    if (value != null) stripped[key] = value;
  }
  return stripped;
}

function supportsCodexCliSandbox(platform: string): boolean {
  return platform === "darwin" || platform === "win32";
}
