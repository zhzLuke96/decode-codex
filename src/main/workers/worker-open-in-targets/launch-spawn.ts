// Restored from ref/.vite/build/worker.js
// OpenIn target process spawning.

import { spawn } from "node:child_process";

type SpawnOptions = {
  env?: NodeJS.ProcessEnv;
  stdin?: string | Uint8Array | null;
};

export function normalizeSpawnCommandForPlatform(
  platform: NodeJS.Platform,
  command: string,
  args: string[],
  commandShell: string | undefined = process.env.ComSpec,
): { command: string; args: string[] } {
  return platform === "win32" && /\.(cmd|bat)$/i.test(command)
    ? {
        command: commandShell ?? "cmd.exe",
        args: ["/d", "/s", "/c", command, ...args],
      }
    : { command, args };
}

export function spawnOpenInTargetCommand(
  command: string,
  args: string[],
  options: SpawnOptions = {},
): Promise<void> {
  return new Promise((resolve, reject) => {
    const normalized = normalizeSpawnCommandForPlatform(
      process.platform,
      command,
      args,
    );
    const child = spawn(normalized.command, normalized.args, {
      stdio: options.stdin == null ? "ignore" : ["pipe", "ignore", "ignore"],
      env: normalizeProcessEnv(options.env ?? process.env),
    });
    child.on("error", reject);
    child.stdin?.on("error", reject);
    child.stdin?.end(options.stdin ?? undefined);
    child.on("close", (code) => {
      if (!code) {
        resolve();
        return;
      }
      reject(
        Error(
          `${command} exited with code ${code ?? "unknown"} (${args.join(" ")})`,
        ),
      );
    });
  });
}

function normalizeProcessEnv(env: NodeJS.ProcessEnv): NodeJS.ProcessEnv {
  return Object.fromEntries(
    Object.entries(env).flatMap(([key, value]) =>
      value == null ? [] : [[key, value]],
    ),
  );
}
