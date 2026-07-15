// Restored from ref/.vite/build/worker.js
// Shared local-environment constants and types.

export const LOCAL_ENVIRONMENT_CONFIG_KEY = "codex.localEnvironmentConfigPath";
export const NO_LOCAL_ENVIRONMENT_CONFIG_VALUE = "__none__";
export const SOURCE_TREE_ENV_VAR = "CODEX_SOURCE_TREE_PATH";
export const WORKTREE_ENV_VAR = "CODEX_WORKTREE_PATH";
export const SHELL_ENVIRONMENT_GIT_PATH = "codex-shell-environment.json";

export type LocalEnvironmentPlatform = "darwin" | "linux" | "win32";
export type LocalEnvironmentShellKind = "cmd" | "posix" | "powershell";
export type LocalEnvironmentScriptType = "cleanup" | "setup";
export type LocalEnvironmentLogStream = "stderr" | "stdout";

export type LocalEnvironmentScriptConfig = {
  script: string;
  darwin?: { script: string };
  linux?: { script: string };
  win32?: { script: string };
};

export type LocalEnvironmentAction = {
  name: string;
  icon: "debug" | "run" | "test" | "tool" | null;
  command: string;
  platform?: LocalEnvironmentPlatform;
};

export type LocalEnvironmentConfig = {
  version: number;
  name: string;
  setup: LocalEnvironmentScriptConfig;
  cleanup?: LocalEnvironmentScriptConfig;
  actions?: LocalEnvironmentAction[];
};

export type LocalEnvironmentConfigFile = {
  configPath: string;
  cwdRelativeToGitRoot: string;
  environment: LocalEnvironmentConfig;
};

export type LocalEnvironmentConfigReadResult =
  | ({ type: "success" } & LocalEnvironmentConfigFile)
  | {
      type: "error";
      configPath: string;
      cwdRelativeToGitRoot: string;
      error: Error;
    };

export type LocalEnvironmentScriptResult = {
  cwd: string;
  scriptPath: string;
  status: "failed" | "succeeded";
  startedAt: number;
  finishedAt: number;
  error?: string;
  log: string;
};

export type ShellEnvironmentPatch = {
  version: 1;
  set: Record<string, string>;
  exclude: string[];
};

export type LocalEnvironmentRunResult = {
  setupResult: LocalEnvironmentScriptResult;
  shellEnvironment: ShellEnvironmentPatch | null;
};
