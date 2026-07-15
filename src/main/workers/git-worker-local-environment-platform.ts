// Restored from ref/.vite/build/worker.js
// Platform and shell selection for local-environment scripts.

import type {
  LocalEnvironmentPlatform,
  LocalEnvironmentShellKind,
} from "./git-worker-local-environment-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function detectLocalEnvironmentPlatform(
  host: WorkerExecutionHostClient,
): Promise<LocalEnvironmentPlatform> {
  const [platformFamily, platformOs] = await Promise.all([
    host.platformFamily(),
    host.platformOs(),
  ]);
  if (platformFamily === "windows") return "win32";
  const osName = String(platformOs).toLowerCase();
  return osName.includes("darwin") || osName.includes("macos")
    ? "darwin"
    : "linux";
}

export function selectShell(
  platform: LocalEnvironmentPlatform,
  env: NodeJS.ProcessEnv | Record<string, string | undefined>,
): {
  executable: string;
  args: string[];
  scriptExtension: "cmd" | "ps1" | "sh";
  shellKind: LocalEnvironmentShellKind;
} {
  if (platform !== "win32") {
    return {
      executable: "bash",
      args: [],
      scriptExtension: "sh",
      shellKind: "posix",
    };
  }

  const executable =
    lookupEnv(env, "SHELL") ?? lookupEnv(env, "COMSPEC") ?? "cmd.exe";
  const shellKind = shellKindForExecutable(executable);
  if (shellKind === "powershell") {
    return {
      executable,
      args: ["-File"],
      scriptExtension: "ps1",
      shellKind,
    };
  }
  if (shellKind === "cmd") {
    return {
      executable,
      args: ["/c"],
      scriptExtension: "cmd",
      shellKind,
    };
  }
  return {
    executable,
    args: [],
    scriptExtension: "sh",
    shellKind: "posix",
  };
}

function lookupEnv(
  env: NodeJS.ProcessEnv | Record<string, string | undefined>,
  key: string,
): string | null {
  for (const [name, value] of Object.entries(env)) {
    if (name.toUpperCase() === key && value != null && value.length > 0) {
      return value;
    }
  }
  return null;
}

function shellKindForExecutable(executable: string): LocalEnvironmentShellKind {
  const basename = executable.split(/[\\/]/).pop()?.toLowerCase() ?? "";
  if (
    basename === "powershell" ||
    basename === "powershell.exe" ||
    basename === "pwsh" ||
    basename === "pwsh.exe"
  ) {
    return "powershell";
  }
  return basename === "cmd" || basename === "cmd.exe" ? "cmd" : "posix";
}
