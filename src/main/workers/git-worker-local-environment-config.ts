// Restored from ref/.vite/build/worker.js
// Local-environment config parsing, validation, and cwd resolution.

import { isRecord, readHostTextFile } from "./git-worker-local-environment-io";
import { parseTomlDocument } from "./git-worker-local-environment-toml";
import type {
  LocalEnvironmentAction,
  LocalEnvironmentConfig,
  LocalEnvironmentConfigReadResult,
  LocalEnvironmentPlatform,
  LocalEnvironmentScriptConfig,
} from "./git-worker-local-environment-types";
import type { WorkerExecutionHostClient } from "./worker-execution-host-client";

export async function readLocalEnvironmentConfig(
  configPath: string,
  host: WorkerExecutionHostClient,
): Promise<LocalEnvironmentConfigReadResult> {
  let parsed: Record<string, unknown>;
  try {
    parsed = filterInvalidActions(
      parseTomlDocument(await readHostTextFile(host, configPath)),
    );
  } catch (error) {
    return {
      configPath,
      cwdRelativeToGitRoot: configPath,
      type: "error",
      error: Error(
        `Failed to parse environment config at ${configPath}: ${String(error)}`,
      ),
    };
  }

  try {
    return {
      configPath,
      cwdRelativeToGitRoot: await readEnvironmentCwdRelativeToGitRoot(
        configPath,
        host,
      ),
      environment: normalizeLocalEnvironmentConfig(parsed),
      type: "success",
    };
  } catch (error) {
    return {
      configPath,
      cwdRelativeToGitRoot: configPath,
      type: "error",
      error: Error(
        `Invalid environment config at ${configPath}: ${
          error instanceof Error ? error.message : String(error)
        }`,
      ),
    };
  }
}

async function readEnvironmentCwdRelativeToGitRoot(
  configPath: string,
  host: WorkerExecutionHostClient,
): Promise<string> {
  const pathApi = await host.platformPath();
  const configMarkerDirectory = await findConfigMarkerDirectory(
    configPath,
    host,
  );
  let gitRoot = configMarkerDirectory;
  while (
    gitRoot !== pathApi.dirname(gitRoot) &&
    !(await hasGitMarker(gitRoot, host))
  ) {
    gitRoot = pathApi.dirname(gitRoot);
  }
  const relative = pathApi.relative(gitRoot, configMarkerDirectory);
  return relative === "" ? "." : relative;
}

async function findConfigMarkerDirectory(
  configPath: string,
  host: WorkerExecutionHostClient,
): Promise<string> {
  const pathApi = await host.platformPath();
  let directory = pathApi.dirname(configPath);
  while (directory !== pathApi.dirname(directory)) {
    if (
      (await hasCodexMarker(directory, host)) ||
      (await hasGitMarker(directory, host))
    ) {
      return directory;
    }
    directory = pathApi.dirname(directory);
  }
  return configPath;
}

async function hasCodexMarker(
  directory: string,
  host: WorkerExecutionHostClient,
): Promise<boolean> {
  const pathApi = await host.platformPath();
  return isFileOrDirectory(
    await statOrNull(host, pathApi.join(directory, ".codex")),
  );
}

async function hasGitMarker(
  directory: string,
  host: WorkerExecutionHostClient,
): Promise<boolean> {
  const pathApi = await host.platformPath();
  return isFileOrDirectory(
    await statOrNull(host, pathApi.join(directory, ".git")),
  );
}

async function statOrNull(
  host: WorkerExecutionHostClient,
  path: string,
): Promise<Record<string, unknown> | null> {
  try {
    return await host.stat(path);
  } catch {
    return null;
  }
}

function isFileOrDirectory(stat: Record<string, unknown> | null): boolean {
  if (stat == null) return false;
  const isDirectory = stat.isDirectory;
  const isFile = stat.isFile;
  return (
    (typeof isDirectory === "function" && isDirectory.call(stat) === true) ||
    (typeof isFile === "function" && isFile.call(stat) === true)
  );
}

function filterInvalidActions(
  value: Record<string, unknown>,
): Record<string, unknown> {
  if (!Array.isArray(value.actions)) return value;
  return {
    ...value,
    actions: value.actions.filter(
      (action) =>
        isRecord(action) &&
        typeof action.name === "string" &&
        typeof action.command === "string" &&
        action.name.trim().length > 0 &&
        action.command.trim().length > 0,
    ),
  };
}

function normalizeLocalEnvironmentConfig(
  value: Record<string, unknown>,
): LocalEnvironmentConfig {
  const version =
    value.version == null ? 1 : requireInteger(value.version, "version");
  if (version < 1) throw Error("version must be greater than or equal to 1");
  const name = requireString(value.name, "name").trim();
  const setup = normalizeScriptConfig(value.setup, "setup");
  const cleanup =
    value.cleanup == null
      ? undefined
      : normalizeScriptConfig(value.cleanup, "cleanup");
  const actions =
    value.actions == null ? undefined : normalizeActions(value.actions);
  return {
    version,
    name,
    setup,
    ...(cleanup == null ? {} : { cleanup }),
    ...(actions == null ? {} : { actions }),
  };
}

function normalizeScriptConfig(
  value: unknown,
  label: string,
): LocalEnvironmentScriptConfig {
  if (!isRecord(value)) throw Error(`${label} must be a table`);
  const script = requireString(value.script, `${label}.script`).trim();
  return {
    script,
    ...(value.darwin == null
      ? {}
      : { darwin: normalizePlatformScript(value.darwin, `${label}.darwin`) }),
    ...(value.linux == null
      ? {}
      : { linux: normalizePlatformScript(value.linux, `${label}.linux`) }),
    ...(value.win32 == null
      ? {}
      : { win32: normalizePlatformScript(value.win32, `${label}.win32`) }),
  };
}

function normalizePlatformScript(
  value: unknown,
  label: string,
): { script: string } {
  if (!isRecord(value)) throw Error(`${label} must be a table`);
  return { script: requireString(value.script, `${label}.script`).trim() };
}

function normalizeActions(value: unknown): LocalEnvironmentAction[] {
  if (!Array.isArray(value)) throw Error("actions must be an array");
  return value.map((action, index) => {
    if (!isRecord(action)) throw Error(`actions[${index}] must be a table`);
    const icon = normalizeActionIcon(action.icon);
    const platform =
      action.platform == null
        ? undefined
        : normalizeActionPlatform(action.platform, index);
    return {
      name: requireString(action.name, `actions[${index}].name`).trim(),
      icon,
      command: requireString(
        action.command,
        `actions[${index}].command`,
      ).trim(),
      ...(platform == null ? {} : { platform }),
    };
  });
}

function normalizeActionIcon(value: unknown): LocalEnvironmentAction["icon"] {
  return value === "debug" ||
    value === "run" ||
    value === "test" ||
    value === "tool"
    ? value
    : null;
}

function normalizeActionPlatform(
  value: unknown,
  index: number,
): LocalEnvironmentPlatform {
  if (value === "darwin" || value === "linux" || value === "win32") {
    return value;
  }
  throw Error(`actions[${index}].platform must be darwin, linux, or win32`);
}

function requireString(value: unknown, label: string): string {
  if (typeof value !== "string") throw Error(`${label} must be a string`);
  return value;
}

function requireInteger(value: unknown, label: string): number {
  if (
    typeof value !== "number" ||
    !Number.isInteger(value) ||
    !Number.isFinite(value)
  ) {
    throw Error(`${label} must be an integer`);
  }
  return value;
}
