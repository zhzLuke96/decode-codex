// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Runtime-path logging and Node version probing.

import { execFile as execFileCallback } from "node:child_process";
import { promisify } from "node:util";
import type {
  NodeReplHostServicesLogger,
  NodeReplRuntimePaths,
  NodeVersionProbe,
} from "../types";

const execFile = promisify(execFileCallback);

export async function logSelectedRuntimePaths({
  logger,
  runtimePaths,
  probeNodeVersion = probeNodeVersionWithExecFile,
}: {
  logger: NodeReplHostServicesLogger;
  runtimePaths: NodeReplRuntimePaths;
  probeNodeVersion?: (nodePath: string | null) => Promise<NodeVersionProbe>;
}): Promise<void> {
  const nodeVersion = await probeNodeVersion(runtimePaths.nodePath);
  logger.info("browser_use_runtime_paths_selected", {
    safe: {
      codexCliPathSource: runtimePaths.codexCliPathSource,
      nodePathSource: runtimePaths.nodePathSource,
      nodeReplPathSource: runtimePaths.nodeReplPathSource,
      nodeVersionMajor: parseNodeVersionMajor(nodeVersion.value),
      nodeVersionStatus: nodeVersion.status,
      platform: runtimePaths.platform,
    },
    sensitive: {
      codexCliPath: runtimePaths.codexCliPath,
      nodePath: runtimePaths.nodePath,
      nodeReplPath: runtimePaths.nodeReplPath,
      nodeVersionError: nodeVersion.error,
      nodeVersionValue: nodeVersion.value,
    },
  });
}

export async function probeNodeVersionWithExecFile(
  nodePath: string | null,
): Promise<NodeVersionProbe> {
  if (nodePath == null) return { status: "missing", value: null };
  try {
    const result = await execFile(nodePath, ["--version"], {
      timeout: 2000,
      windowsHide: true,
    });
    return { status: "ok", value: result.stdout.trim() };
  } catch (error) {
    return { error, status: "failed", value: null };
  }
}

export function parseNodeVersionMajor(value: string | null): number | null {
  const match = value?.match(/^v?(\d+)/);
  return match?.[1] == null ? null : Number(match[1]);
}
