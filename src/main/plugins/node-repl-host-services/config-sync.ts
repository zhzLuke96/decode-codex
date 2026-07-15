// Restored from ref/.vite/build/main-Cfnoc8EH.js
// App-server config/batchWrite sync for generated node_repl MCP config.

import {
  COMPUTER_USE_MCP_SERVER_KEY,
  NODE_REPL_JS_REPL_FEATURE_KEY,
  NODE_REPL_MCP_SERVER_KEY,
} from "./constants";
import type { NodeReplThreadConfig } from "./types";

export const NODE_REPL_GENERATED_CONFIG_KEY_PATHS = [
  NODE_REPL_JS_REPL_FEATURE_KEY,
  NODE_REPL_MCP_SERVER_KEY,
  COMPUTER_USE_MCP_SERVER_KEY,
] as const;

export type NodeReplGeneratedConfigKeyPath =
  (typeof NODE_REPL_GENERATED_CONFIG_KEY_PATHS)[number];

export type AppServerConfigBatchWriteEdit = {
  keyPath: NodeReplGeneratedConfigKeyPath;
  mergeStrategy: "replace";
  value: unknown | null;
};

export type NodeReplGeneratedConfigAppServerConnection = {
  sendAppServerRequest(
    method: "config/batchWrite",
    payload: {
      edits: AppServerConfigBatchWriteEdit[];
      expectedVersion: null;
      filePath: null;
      reloadUserConfig: true;
    },
  ): Promise<unknown>;
};

export function createNodeReplGeneratedConfigBatchEdits(
  config: NodeReplThreadConfig | null | undefined,
): AppServerConfigBatchWriteEdit[] {
  return NODE_REPL_GENERATED_CONFIG_KEY_PATHS.map((keyPath) => ({
    keyPath,
    mergeStrategy: "replace",
    value: config?.[keyPath] ?? null,
  }));
}

export async function syncNodeReplGeneratedAppServerConfig({
  appServerConnection,
  createThreadConfig,
  resetComputerUsePathCache,
}: {
  appServerConnection: NodeReplGeneratedConfigAppServerConnection;
  createThreadConfig():
    | Promise<NodeReplThreadConfig | null>
    | NodeReplThreadConfig
    | null;
  resetComputerUsePathCache?(): void;
}): Promise<void> {
  resetComputerUsePathCache?.();
  const config = await createThreadConfig();
  await appServerConnection.sendAppServerRequest("config/batchWrite", {
    edits: createNodeReplGeneratedConfigBatchEdits(config),
    expectedVersion: null,
    filePath: null,
    reloadUserConfig: true,
  });
}
