// Restored from ref/webview/assets/iconResolver-DrMXO_qJ.js

export type FileTreeIconSet =
  | "none"
  | "minimal"
  | "standard"
  | "complete"
  | string;

export type IconRemapValue =
  | string
  | ({ name: string } & Record<string, unknown>);

export type IconRemapTable = Record<string, IconRemapValue>;

export type FileTreeIconResolverInput =
  | FileTreeIconSet
  | FileTreeIconResolverConfig
  | null
  | undefined;

export interface FileTreeIconResolverConfig {
  set?: FileTreeIconSet;
  colored?: boolean;
  spriteSheet?: string;
  remap?: IconRemapTable;
  byFileName?: IconRemapTable;
  byFileExtension?: IconRemapTable;
  byFileNameContains?: IconRemapTable;
  [key: string]: unknown;
}

export interface NormalizedFileTreeIconResolverConfig
  extends FileTreeIconResolverConfig {
  set: FileTreeIconSet;
  colored: boolean;
}

export interface IconResolution extends Record<string, unknown> {
  name: string;
  remappedFrom?: string;
  token?: string;
}

export interface FileTreeIconResolver {
  resolveIcon(iconName: string, filePath?: string | null): IconResolution;
}
