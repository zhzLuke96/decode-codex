// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for Computer Use overlay config restoration.

export type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

export type ComputerUseConfigLogger = {
  warning(message: string, details?: StructuredLogDetails): void;
};

export type ComputerUseSettingsStore = {
  getEffective(key: string): unknown;
};

export type ComputerUseLocaleDirection = "ltr" | "rtl";

export type ComputerUseConfig = {
  accentColor: string;
  direction: ComputerUseLocaleDirection;
  locale: string;
  strings: {
    escToCancel: string;
    usingComputer: string;
  };
};

export type ComputerUseChromeTheme = {
  accent?: unknown;
};

export type ComputerUseConfigFileSystem = {
  mkdir(path: string, options: { recursive: true }): Promise<unknown>;
  rename(source: string, destination: string): Promise<unknown>;
  unlink(path: string): Promise<unknown>;
  writeFile(path: string, data: string, encoding: "utf8"): Promise<unknown>;
};
