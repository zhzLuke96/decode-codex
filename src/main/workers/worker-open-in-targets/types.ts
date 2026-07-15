// Restored from ref/.vite/build/worker.js
// Shared OpenIn target protocol types.

export type ShortcutLink = {
  target?: string | null;
  icon?: string | null;
};
export type OpenInCustomTarget = {
  command?: string | null;
  icon?: string | null;
};
export type OpenInTargetRequestParams = {
  target?: string | null;
  command?: string | null;
  customTarget?: OpenInCustomTarget | null;
};
export type OpenInLocation = {
  line: number;
  column: number;
};
export type OpenInHostConfig = Record<string, unknown> & {
  id?: string;
  kind?: string;
};
export type OpenInPlatformName = "darwin" | "linux" | "win32";
export type OpenInTargetKind =
  | "editor"
  | "fileManager"
  | "systemDefault"
  | "terminal";
export type OpenInShortcutResolver = (path: string) => Promise<ShortcutLink>;
export type OpenInTargetArgsBuilder = (
  path: string,
  location?: OpenInLocation | null,
  hostConfig?: OpenInHostConfig | null,
  remoteWorkspaceRoot?: string | null,
  remotePath?: string | null,
) => string[];
export type OpenInTargetOpenContext = {
  command: string;
  path: string;
  appPath?: string | null;
  location?: OpenInLocation | null;
  hostConfig?: OpenInHostConfig | null;
  remoteWorkspaceRoot?: string | null;
  remotePath?: string | null;
};
export type OpenInPlatformTarget = {
  label: string;
  icon: string;
  kind: OpenInTargetKind;
  hidden?: boolean;
  detect(
    readShortcutLink: OpenInShortcutResolver,
  ): string | null | Promise<string | null>;
  iconPath?(command: string): string | null;
  args?: OpenInTargetArgsBuilder;
  env?: () => NodeJS.ProcessEnv;
  open?(context: OpenInTargetOpenContext): Promise<void>;
  supportsSsh?: boolean;
};
export type OpenInTargetDefinition = {
  id: string;
  platforms: Partial<Record<OpenInPlatformName, OpenInPlatformTarget>>;
};
