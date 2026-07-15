// Restored from ref/.vite/build/worker.js
// Local environment setup and cleanup script orchestration.

import { randomUUID } from "node:crypto";
import type {
  LocalEnvironmentConfigFile,
  LocalEnvironmentLogStream,
  LocalEnvironmentPlatform,
  LocalEnvironmentRunResult,
  LocalEnvironmentScriptConfig,
  LocalEnvironmentScriptResult,
  LocalEnvironmentScriptType,
} from "./git-worker-local-environment-types";
import {
  normalizeWaitResult,
  readStream,
} from "./git-worker-local-environment-io";
import {
  detectLocalEnvironmentPlatform,
  selectShell,
} from "./git-worker-local-environment-platform";
import { readShellEnvironmentPatch } from "./git-worker-local-environment-shell-patch";
import {
  colorEnvironment,
  loadLocalShellEnvironment,
} from "./git-worker-local-environment-shell-env";
import { createEnvironmentWrapperScript } from "./git-worker-local-environment-wrapper";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function runLocalEnvironmentSetup({
  host,
  injectedEnvironment,
  localEnvironment,
  onLog,
  signal,
  workspaceRoot,
}: {
  host: WorkerExecutionHostClient;
  injectedEnvironment: Record<string, string>;
  localEnvironment: LocalEnvironmentConfigFile;
  onLog?: (stream: LocalEnvironmentLogStream, data: Uint8Array) => void;
  signal?: AbortSignal;
  workspaceRoot: string;
}): Promise<LocalEnvironmentRunResult | null> {
  return runLocalEnvironmentScript({
    host,
    injectedEnvironment,
    localEnvironment,
    onLog,
    scriptType: "setup",
    signal,
    workspaceRoot,
  });
}

export async function runLocalEnvironmentCleanup({
  host,
  localEnvironment,
  onLog,
  signal,
  workspaceRoot,
}: {
  host: WorkerExecutionHostClient;
  localEnvironment: LocalEnvironmentConfigFile;
  onLog?: (stream: LocalEnvironmentLogStream, data: Uint8Array) => void;
  signal?: AbortSignal;
  workspaceRoot: string;
}): Promise<LocalEnvironmentScriptResult | null> {
  return (
    (
      await runLocalEnvironmentScript({
        host,
        injectedEnvironment: {},
        localEnvironment,
        onLog,
        scriptType: "cleanup",
        signal,
        workspaceRoot,
      })
    )?.setupResult ?? null
  );
}

async function runLocalEnvironmentScript({
  host,
  injectedEnvironment,
  localEnvironment,
  onLog,
  scriptType,
  signal,
  workspaceRoot,
}: {
  host: WorkerExecutionHostClient;
  injectedEnvironment: Record<string, string>;
  localEnvironment: LocalEnvironmentConfigFile;
  onLog?: (stream: LocalEnvironmentLogStream, data: Uint8Array) => void;
  scriptType: LocalEnvironmentScriptType;
  signal?: AbortSignal;
  workspaceRoot: string;
}): Promise<LocalEnvironmentRunResult | null> {
  const scriptConfig = selectScriptConfig(localEnvironment, scriptType);
  if (scriptConfig == null) return null;

  const label = scriptLabel(scriptType);
  const startedAt = Date.now();
  if (signal?.aborted) {
    return {
      setupResult: {
        cwd: workspaceRoot,
        scriptPath: localEnvironment.configPath,
        status: "failed",
        startedAt,
        finishedAt: Date.now(),
        error: `${label} canceled`,
        log: "",
      },
      shellEnvironment: null,
    };
  }

  let tempRoot: string | null = null;
  try {
    const platform = await detectLocalEnvironmentPlatform(host);
    const selectedScript = selectPlatformScript(scriptConfig, platform);
    if (!selectedScript) return null;

    const pathApi = await host.platformPath();
    const cwd = pathApi.join(
      workspaceRoot,
      localEnvironment.cwdRelativeToGitRoot,
    );
    tempRoot = pathApi.join(
      String(await host.codexHome()),
      "tmp",
      "local-environment",
      randomUUID(),
    );
    await host.createDirectory(tempRoot, { recursive: true });

    const shell = selectShell(platform, host.isLocal ? process.env : {});
    const scriptPath = pathApi.join(
      tempRoot,
      `${randomUUID()}-setup_script.${shell.scriptExtension}`,
    );
    const wrapperPath = pathApi.join(
      tempRoot,
      `${randomUUID()}-setup_wrapper.${shell.scriptExtension}`,
    );
    const beforeEnvironmentPath = pathApi.join(
      tempRoot,
      `${randomUUID()}-before_env.txt`,
    );
    const capturedEnvironmentPath = pathApi.join(
      tempRoot,
      `${randomUUID()}-captured_env.txt`,
    );

    await host.writeFile(scriptPath, selectedScript.replace(/\r\n/g, "\n"));
    await host.writeFile(
      wrapperPath,
      createEnvironmentWrapperScript(
        shell.shellKind,
        scriptPath,
        capturedEnvironmentPath,
        beforeEnvironmentPath,
      ),
    );

    const env = {
      ...(host.isLocal ? await loadLocalShellEnvironment(platform, host) : {}),
      ...colorEnvironment,
      ...injectedEnvironment,
    };
    const logger = createLocalEnvironmentLogCollector(onLog);
    const processHandle = await host.spawn({
      args: [shell.executable, ...shell.args, wrapperPath],
      cwd,
      env,
      signal,
    });
    await processHandle.stdin.close().catch(() => {});

    let canceled = false;
    const cancelProcess = (): void => {
      canceled = true;
      processHandle.kill();
    };
    signal?.addEventListener("abort", cancelProcess);
    try {
      if (signal?.aborted) cancelProcess();
      const [waitResult] = await Promise.all([
        processHandle.wait(),
        readStream(processHandle.stdout, (chunk) => {
          logger.append("stdout", chunk);
        }),
        readStream(processHandle.stderr, (chunk) => {
          logger.append("stderr", chunk);
        }),
      ]);
      const exit = normalizeWaitResult(waitResult);
      const shellEnvironment =
        scriptType === "setup" && !canceled && exit.code === 0
          ? await readShellEnvironmentPatch({
              beforeEnvironmentPath,
              capturedEnvironmentPath,
              host,
              platform,
            })
          : null;
      return {
        setupResult: {
          cwd,
          scriptPath,
          status: canceled || exit.code !== 0 ? "failed" : "succeeded",
          startedAt,
          finishedAt: Date.now(),
          error: canceled
            ? `${label} canceled`
            : exit.code === 0
              ? undefined
              : exit.signal == null
                ? `${label} exited with code ${String(exit.code)}`
                : `${label} exited with signal ${exit.signal}`,
          log: logger.flush(),
        },
        shellEnvironment,
      };
    } finally {
      signal?.removeEventListener("abort", cancelProcess);
    }
  } catch (error) {
    return {
      setupResult: {
        cwd: workspaceRoot,
        scriptPath: localEnvironment.configPath,
        status: "failed",
        startedAt,
        finishedAt: Date.now(),
        error: String(error),
        log: "",
      },
      shellEnvironment: null,
    };
  } finally {
    if (tempRoot != null) {
      await host
        .remove(tempRoot, { recursive: true, force: true })
        .catch(() => undefined);
    }
  }
}

function createLocalEnvironmentLogCollector(
  onLog?: (stream: LocalEnvironmentLogStream, data: Uint8Array) => void,
): {
  append(stream: LocalEnvironmentLogStream, chunk: Uint8Array): void;
  flush(): string;
} {
  const logLines: string[] = [];
  const stdoutDecoder = new TextDecoder("utf-8", { ignoreBOM: true });
  const stderrDecoder = new TextDecoder("utf-8", { ignoreBOM: true });
  let stdoutPending = "";
  let stderrPending = "";

  return {
    append(stream, chunk) {
      onLog?.(stream, chunk);
      const decoder = stream === "stdout" ? stdoutDecoder : stderrDecoder;
      const combined =
        (stream === "stdout" ? stdoutPending : stderrPending) +
        decoder.decode(chunk, { stream: true });
      const lines = combined.split(/\r?\n/);
      const pending = lines.pop() ?? "";
      if (stream === "stdout") stdoutPending = pending;
      else stderrPending = pending;
      for (const line of lines) {
        if (line.length > 0) logLines.push(line);
      }
    },
    flush() {
      const flushStream = (
        stream: LocalEnvironmentLogStream,
        decoder: TextDecoder,
      ): void => {
        const pending = stream === "stdout" ? stdoutPending : stderrPending;
        if (stream === "stdout") stdoutPending = "";
        else stderrPending = "";
        const text = pending + decoder.decode();
        for (const line of text.split(/\r?\n/)) {
          if (line.length > 0) logLines.push(line);
        }
      };
      flushStream("stdout", stdoutDecoder);
      flushStream("stderr", stderrDecoder);
      return logLines.join("\n");
    },
  };
}

function selectScriptConfig(
  localEnvironment: LocalEnvironmentConfigFile,
  scriptType: LocalEnvironmentScriptType,
): LocalEnvironmentScriptConfig | null {
  return scriptType === "cleanup"
    ? (localEnvironment.environment.cleanup ?? null)
    : localEnvironment.environment.setup;
}

function selectPlatformScript(
  scriptConfig: LocalEnvironmentScriptConfig,
  platform: LocalEnvironmentPlatform,
): string {
  const platformScript = scriptConfig[platform]?.script;
  return platformScript != null && platformScript.length > 0
    ? platformScript
    : scriptConfig.script;
}

function scriptLabel(scriptType: LocalEnvironmentScriptType): string {
  return scriptType === "cleanup" ? "Cleanup script" : "Setup script";
}
