// Restored from ref/.vite/build/worker.js
// Shell environment loading for local-environment setup scripts.

import {
  normalizeWaitResult,
  readStreamAsText,
} from "./git-worker-local-environment-io";
import type { LocalEnvironmentPlatform } from "./git-worker-local-environment-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export const colorEnvironment = {
  COLORTERM: "truecolor",
  FORCE_COLOR: "1",
  TERM: "xterm-256color",
};

const crashReporterEnvironmentNames = new Set([
  "BREAKPAD_DUMP_LOCATION",
  "CHROME_CRASHPAD_PIPE_NAME",
  "CRASHPAD_HANDLER_PID",
  "ELECTRON_CRASH_REPORTER_PROCESS_TYPE",
]);

let cachedLocalShellEnvironment: Promise<Record<string, string>> | null = null;

export async function loadLocalShellEnvironment(
  platform: LocalEnvironmentPlatform,
  host: WorkerExecutionHostClient,
): Promise<Record<string, string>> {
  const sanitized = sanitizeProcessEnvironment(process.env);
  if (platform === "win32") return sanitized;
  cachedLocalShellEnvironment ??= captureLocalLoginShellEnvironment(
    platform,
    host,
    sanitized,
  );
  return cachedLocalShellEnvironment;
}

async function captureLocalLoginShellEnvironment(
  platform: LocalEnvironmentPlatform,
  host: WorkerExecutionHostClient,
  fallbackEnvironment: Record<string, string>,
): Promise<Record<string, string>> {
  try {
    const shell =
      process.env.SHELL ?? (platform === "darwin" ? "/bin/zsh" : "/bin/sh");
    const processHandle = await host.spawn({
      args: [shell, "-lc", "env"],
      env: { ...fallbackEnvironment, CODEX_SHELL: "1" },
      outputBytesCap: 1024 * 1024,
      timeoutMs: 10_000,
    });
    await processHandle.stdin.close().catch(() => {});
    const [waitResult, stdout] = await Promise.all([
      processHandle.wait(),
      readStreamAsText(processHandle.stdout),
      readStreamAsText(processHandle.stderr),
    ]);
    if (normalizeWaitResult(waitResult).code === 0) {
      return removeCodexShellEnvironment(parseEnvironmentCapture(stdout));
    }
  } catch {}
  return removeCodexShellEnvironment(fallbackEnvironment);
}

function sanitizeProcessEnvironment(
  env: NodeJS.ProcessEnv,
): Record<string, string> {
  const sanitized: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    if (value == null) continue;
    if (crashReporterEnvironmentNames.has(key.toUpperCase())) continue;
    sanitized[key] = value;
  }
  return sanitized;
}

function removeCodexShellEnvironment(
  env: Record<string, string>,
): Record<string, string> {
  const { CODEX_SHELL: _codexShell, ...rest } = env;
  return rest;
}

function parseEnvironmentCapture(text: string): Record<string, string> {
  const env: Record<string, string> = {};
  for (const line of text.replace(/^\uFEFF/, "").split(/\r?\n/)) {
    if (line.length === 0) continue;
    const equalsIndex = line.indexOf("=");
    if (equalsIndex <= 0) continue;
    env[line.slice(0, equalsIndex)] = line.slice(equalsIndex + 1);
  }
  return env;
}
