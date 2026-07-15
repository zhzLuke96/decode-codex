// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// Shared appearance/general-settings runtime types.

export type ThemeVariant = "light" | "dark";

export type CodexThemeFonts = {
  code: string | null;
  ui: string | null;
};

export type CodexThemeSemanticColors = {
  diffAdded: string;
  diffRemoved: string;
  skill: string;
};

export type CodexChromeTheme = {
  accent: string;
  contrast: number;
  fonts: CodexThemeFonts;
  ink: string;
  opaqueWindows: boolean;
  semanticColors: CodexThemeSemanticColors;
  surface: string;
};

export type CodeThemeRegistration = {
  id: string;
  label?: string;
  theme?: Partial<CodexChromeTheme>;
  variant?: ThemeVariant;
};

export type ThemeEditorSelection = {
  codeThemeId: string;
  theme: CodexChromeTheme;
};

export type ExternalAgentImportItemType =
  | "AGENTS_MD"
  | "COMMANDS"
  | "CONFIG"
  | "HOOKS"
  | "MCP_SERVER_CONFIG"
  | "PLUGINS"
  | "SESSIONS"
  | "SKILLS"
  | "SUBAGENTS";

export type ExternalAgentImportItem = {
  cwd?: string | null;
  description: string;
  itemType: ExternalAgentImportItemType;
};

export type ExternalAgentImportProgress = {
  items: readonly ExternalAgentImportItem[];
  status: "error" | "running" | "success";
};

export type RendererDebugSettings = {
  disableBackdropBlur: boolean;
  disableCssMotion: boolean;
  disableScrollFadeMask: boolean;
  disableScrollFadeMaskAnimation: boolean;
  disableSquircles: boolean;
  forceOpaqueRendererBackground: boolean;
};

export type SignalToken<TValue> = {
  defaultValue: TValue;
  key: string;
};

export type SignalStore = {
  get<TValue>(signal: SignalToken<TValue>): TValue;
  set<TValue>(
    signal: SignalToken<TValue>,
    value: TValue | ((current: TValue) => TValue),
  ): void;
};

export function createSignalToken<TValue>(
  key: string,
  defaultValue: TValue,
): SignalToken<TValue> {
  return { defaultValue, key };
}
