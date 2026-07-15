// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Native desktop app icon helper types.

export type NativeIconAddon = {
  iconSmallForAppPath(appPath: string): Promise<string | null> | string | null;
};

export type ExecFileLike = (
  file: string,
  args: readonly string[],
  options: {
    encoding: "utf8";
    env: NodeJS.ProcessEnv;
    timeout: number;
    windowsHide: boolean;
  },
) => Promise<{ stdout: string }>;

export type RequireLike = (path: string) => unknown;
