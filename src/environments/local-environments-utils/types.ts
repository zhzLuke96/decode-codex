// Restored from ref/webview/assets/local-environments-utils-CkypnJBW.js
// Shared types for local environment config helpers.

export type LocalEnvironmentPlatform = "darwin" | "linux" | "win32";
export type LocalEnvironmentActionIcon = "tool" | "run" | "debug" | "test";

export type LocalEnvironmentAction = {
  command: string;
  icon?: LocalEnvironmentActionIcon | null;
  id: string;
  name: string;
  platform?: LocalEnvironmentPlatform | null;
};

export type PlatformScripts = Partial<Record<LocalEnvironmentPlatform, string>>;

export type LocalEnvironmentConfigForSerialization = {
  actions: LocalEnvironmentAction[];
  cleanupPlatformScripts: PlatformScripts;
  cleanupScript: string;
  name: string;
  setupPlatformScripts: PlatformScripts;
  setupScript: string;
  version: number;
};

export type LocalEnvironmentActionIconProps = {
  className?: string;
  icon: LocalEnvironmentActionIcon;
};

export type SelectLocalEnvironmentAfterRefreshOptions = {
  codexWorktree?: boolean;
  configPath: string;
  gitRoot?: string | null;
  refreshEnvironments: () => Promise<unknown>;
  selectForWorkspace: (configPath: string) => unknown;
  selectForWorktree: (
    gitRoot: string,
    configPath: string,
  ) => boolean | Promise<boolean>;
};
