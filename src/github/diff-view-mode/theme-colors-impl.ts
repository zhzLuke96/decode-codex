// Restored from ref/webview/assets/diff-view-mode-C5urbSEm.js
// diff-view-mode-C5urbSEm chunk restored from the Codex webview bundle.
// Semantic implementation for Codex chrome theme color derivation.
export type ThemeVariant = "dark" | "light";
export interface ThemeFonts {
  code: string | null;
  ui: string | null;
}
export interface SemanticThemeColors {
  diffAdded: string;
  diffRemoved: string;
  skill: string;
}
export interface CodexChromeTheme {
  accent: string;
  contrast: number;
  fonts: ThemeFonts;
  ink: string;
  opaqueWindows: boolean;
  semanticColors: SemanticThemeColors;
  surface: string;
}
export type CodexChromeThemeSeed = Partial<
  Omit<CodexChromeTheme, "fonts" | "semanticColors">
> & {
  fonts?: Partial<ThemeFonts> | null;
  semanticColors?: Partial<SemanticThemeColors> | null;
};
export interface ShikiThemeDefinition {
  colors?: Record<string, string | undefined>;
  tokenColors?: TokenColorRule[];
  settings?: TokenColorRule[];
  chromeTheme?: CodexChromeThemeSeed | null;
}
interface TokenColorRule {
  settings?: {
    foreground?: string;
  };
}
interface RgbColor {
  red: number;
  green: number;
  blue: number;
}
interface RgbaColor extends RgbColor {
  alpha: number;
}
interface NormalizedThemeBasis {
  accent: RgbColor;
  contrast: number;
  editorBackground: RgbColor;
  ink: RgbColor;
  surface: RgbColor;
  surfaceUnder: string;
  theme: CodexChromeTheme;
  variant: ThemeVariant;
}
interface DerivedChromePalette {
  accentBackground: string;
  accentBackgroundActive: string;
  accentBackgroundHover: string;
  border: string;
  borderFocus: string;
  borderHeavy: string;
  borderLight: string;
  buttonPrimaryBackground: string;
  buttonPrimaryBackgroundActive: string;
  buttonPrimaryBackgroundHover: string;
  buttonPrimaryBackgroundInactive: string;
  buttonSecondaryBackground: string;
  buttonSecondaryBackgroundActive: string;
  buttonSecondaryBackgroundHover: string;
  buttonSecondaryBackgroundInactive: string;
  buttonTertiaryBackground: string;
  buttonTertiaryBackgroundActive: string;
  buttonTertiaryBackgroundHover: string;
  controlBackground: string;
  controlBackgroundOpaque: string;
  elevatedPrimary: string;
  elevatedPrimaryOpaque: string;
  elevatedSecondary: string;
  elevatedSecondaryOpaque: string;
  iconAccent: string;
  iconPrimary: string;
  iconSecondary: string;
  iconTertiary: string;
  simpleScrim: string;
  textAccent: string;
  textButtonPrimary: string;
  textButtonSecondary: string;
  textButtonTertiary: string;
  textForeground: string;
  textForegroundSecondary: string;
  textForegroundTertiary: string;
}
const BLACK: RgbColor = {
  blue: 0,
  green: 0,
  red: 0,
};
const WHITE: RgbColor = {
  blue: 255,
  green: 255,
  red: 255,
};
export const DEFAULT_CODEX_CHROME_THEMES: Record<
  ThemeVariant,
  CodexChromeTheme
> = {
  dark: {
    accent: "#339cff",
    contrast: 60,
    fonts: {
      code: null,
      ui: null,
    },
    ink: "#ffffff",
    opaqueWindows: false,
    semanticColors: {
      diffAdded: "#40c977",
      diffRemoved: "#fa423e",
      skill: "#ad7bf9",
    },
    surface: "#181818",
  },
  light: {
    accent: "#339cff",
    contrast: 45,
    fonts: {
      code: null,
      ui: null,
    },
    ink: "#1a1c1f",
    opaqueWindows: false,
    semanticColors: {
      diffAdded: "#00a240",
      diffRemoved: "#ba2623",
      skill: "#924ff7",
    },
    surface: "#ffffff",
  },
};
const DEFAULT_CONTRAST: Record<ThemeVariant, number> = {
  dark: DEFAULT_CODEX_CHROME_THEMES.dark.contrast,
  light: DEFAULT_CODEX_CHROME_THEMES.light.contrast,
};
const SURFACE_UNDER_ALPHA: Record<ThemeVariant, number> = {
  dark: 0.16,
  light: 0.04,
};
const SURFACE_UNDER_CONTRAST_STEP: Record<ThemeVariant, number> = {
  dark: 0.0015,
  light: 0.0012,
};
const PANEL_MIX_ALPHA: Record<ThemeVariant, number> = {
  dark: 0.03,
  light: 0.18,
};
const PANEL_CONTRAST_STEP: Record<ThemeVariant, number> = {
  dark: 0.03,
  light: 0.008,
};
const BACKGROUND_COLOR_KEYS = [
  "editor.background",
  "sideBar.background",
  "editorGroupHeader.tabsBackground",
  "panel.background",
  "activityBar.background",
];
const FOREGROUND_COLOR_KEYS = [
  "editor.foreground",
  "sideBarTitle.foreground",
  "sideBar.foreground",
  "foreground",
];
const ACCENT_COLOR_KEYS = [
  "activityBarBadge.background",
  "textLink.foreground",
  "editorCursor.foreground",
  "focusBorder",
  "button.background",
  "activityBar.activeBorder",
];
const ADDED_COLOR_KEYS = [
  "gitDecoration.addedResourceForeground",
  "gitDecoration.untrackedResourceForeground",
  "terminal.ansiGreen",
  "terminal.ansiBrightGreen",
];
const REMOVED_COLOR_KEYS = [
  "gitDecoration.deletedResourceForeground",
  "terminal.ansiRed",
  "terminal.ansiBrightRed",
];
const SKILL_COLOR_KEYS = [
  "charts.purple",
  "terminal.ansiMagenta",
  "terminal.ansiBrightMagenta",
];
const GREEN_HUE_RANGE = {
  max: 170,
  min: 80,
};
const RED_HUE_RANGE = {
  max: 15,
  min: 345,
};
const PURPLE_HUE_RANGE = {
  max: 320,
  min: 210,
};
export function applyCssProperties(
  element: HTMLElement,
  properties: Record<string, string | null | undefined>,
): void {
  for (const [propertyName, propertyValue] of Object.entries(properties)) {
    if (propertyValue == null) {
      if (element.style.getPropertyValue(propertyName).length > 0) {
        element.style.removeProperty(propertyName);
      }
      continue;
    }
    if (element.style.getPropertyValue(propertyName) !== propertyValue) {
      element.style.setProperty(propertyName, propertyValue);
    }
  }
}
export function normalizeCodexChromeTheme(
  themeOverrides: CodexChromeThemeSeed | null | undefined,
  variant: ThemeVariant,
): CodexChromeTheme {
  const defaults = DEFAULT_CODEX_CHROME_THEMES[variant];
  return {
    accent: normalizeHexColor(themeOverrides?.accent) ?? defaults.accent,
    contrast: clampContrast(themeOverrides?.contrast, defaults.contrast),
    fonts: normalizeFonts(themeOverrides?.fonts),
    ink: normalizeHexColor(themeOverrides?.ink) ?? defaults.ink,
    opaqueWindows: themeOverrides?.opaqueWindows ?? defaults.opaqueWindows,
    semanticColors: normalizeSemanticColors(
      themeOverrides?.semanticColors,
      defaults.semanticColors,
    ),
    surface: normalizeHexColor(themeOverrides?.surface) ?? defaults.surface,
  };
}
export function applyCodexThemeToElement(
  element: HTMLElement,
  theme: CodexChromeTheme,
  variant: ThemeVariant,
): void {
  element.classList.toggle("electron-dark", variant === "dark");
  element.classList.toggle("electron-light", variant === "light");
  applyCssProperties(element, createThemeCssVariables(theme, variant));
}
export function deriveChromeThemeSeedFromShikiTheme(
  shikiTheme: ShikiThemeDefinition,
  variant: ThemeVariant,
): CodexChromeThemeSeed {
  const defaults = DEFAULT_CODEX_CHROME_THEMES[variant];
  const surface =
    findThemeColor(shikiTheme.colors, BACKGROUND_COLOR_KEYS) ??
    defaults.surface;
  const ink =
    findThemeColor(shikiTheme.colors, FOREGROUND_COLOR_KEYS) ?? defaults.ink;
  const accent = findAccentColor(shikiTheme, surface, ink) ?? defaults.accent;
  return {
    accent,
    ink,
    semanticColors: deriveSemanticColors(
      shikiTheme,
      surface,
      ink,
      accent,
      variant,
    ),
    surface,
  };
}
export function mergeChromeThemeSeed(
  baseTheme: CodexChromeThemeSeed,
  overrideTheme: CodexChromeThemeSeed | null | undefined,
): CodexChromeThemeSeed {
  if (overrideTheme == null) return baseTheme;
  return {
    ...baseTheme,
    ...overrideTheme,
    fonts:
      overrideTheme.fonts == null
        ? baseTheme.fonts
        : {
            ...baseTheme.fonts,
            ...overrideTheme.fonts,
          },
    semanticColors:
      overrideTheme.semanticColors == null
        ? baseTheme.semanticColors
        : {
            ...baseTheme.semanticColors,
            ...overrideTheme.semanticColors,
          },
  };
}
function clampContrast(
  contrast: number | null | undefined,
  defaultContrast: number,
): number {
  return contrast == null || Number.isNaN(contrast)
    ? defaultContrast
    : Math.min(100, Math.max(0, Math.round(contrast)));
}
function normalizeFonts(fonts: Partial<ThemeFonts> | null | undefined) {
  return {
    code: normalizeFontName(fonts?.code),
    ui: normalizeFontName(fonts?.ui),
  };
}
function normalizeFontName(fontName: string | null | undefined): string | null {
  const normalizedName = fontName?.trim() ?? "";
  return normalizedName.length > 0 ? normalizedName : null;
}
function normalizeSemanticColors(
  semanticColors: Partial<SemanticThemeColors> | null | undefined,
  defaults: SemanticThemeColors,
): SemanticThemeColors {
  return {
    diffAdded:
      normalizeHexColor(semanticColors?.diffAdded) ?? defaults.diffAdded,
    diffRemoved:
      normalizeHexColor(semanticColors?.diffRemoved) ?? defaults.diffRemoved,
    skill: normalizeHexColor(semanticColors?.skill) ?? defaults.skill,
  };
}
function createThemeCssVariables(
  theme: CodexChromeTheme,
  variant: ThemeVariant,
): Record<string, string> {
  const basis = createNormalizedThemeBasis(theme, variant);
  const palette =
    variant === "light" ? createLightPalette(basis) : createDarkPalette(basis);
  return {
    "--codex-base-accent": basis.theme.accent,
    "--codex-base-contrast": String(basis.theme.contrast),
    "--codex-base-ink": basis.theme.ink,
    "--codex-base-surface": basis.theme.surface,
    "--color-accent-blue": basis.theme.accent,
    "--color-accent-purple": basis.theme.semanticColors.skill,
    "--color-background-accent": palette.accentBackground,
    "--color-background-accent-active": palette.accentBackgroundActive,
    "--color-background-accent-hover": palette.accentBackgroundHover,
    "--color-background-button-primary": palette.buttonPrimaryBackground,
    "--color-background-button-primary-active":
      palette.buttonPrimaryBackgroundActive,
    "--color-background-button-primary-hover":
      palette.buttonPrimaryBackgroundHover,
    "--color-background-button-primary-inactive":
      palette.buttonPrimaryBackgroundInactive,
    "--color-background-button-secondary": palette.buttonSecondaryBackground,
    "--color-background-button-secondary-active":
      palette.buttonSecondaryBackgroundActive,
    "--color-background-button-secondary-hover":
      palette.buttonSecondaryBackgroundHover,
    "--color-background-button-secondary-inactive":
      palette.buttonSecondaryBackgroundInactive,
    "--color-background-button-tertiary": palette.buttonTertiaryBackground,
    "--color-background-button-tertiary-active":
      palette.buttonTertiaryBackgroundActive,
    "--color-background-button-tertiary-hover":
      palette.buttonTertiaryBackgroundHover,
    "--color-background-control": palette.controlBackground,
    "--color-background-control-opaque": palette.controlBackgroundOpaque,
    "--color-background-editor-opaque": toRgbString(basis.editorBackground),
    "--color-background-elevated-primary": palette.elevatedPrimary,
    "--color-background-elevated-primary-opaque": palette.elevatedPrimaryOpaque,
    "--color-background-elevated-secondary": palette.elevatedSecondary,
    "--color-background-elevated-secondary-opaque":
      palette.elevatedSecondaryOpaque,
    "--color-background-panel": createPanelBackground(basis),
    "--color-background-surface": basis.theme.surface,
    "--color-background-surface-under": basis.surfaceUnder,
    "--color-border": palette.border,
    "--color-border-focus": palette.borderFocus,
    "--color-border-heavy": palette.borderHeavy,
    "--color-border-light": palette.borderLight,
    "--color-decoration-added": basis.theme.semanticColors.diffAdded,
    "--color-decoration-deleted": basis.theme.semanticColors.diffRemoved,
    "--color-editor-added": toRgbaString(
      parseRequiredHexColor(basis.theme.semanticColors.diffAdded),
      basis.variant === "light" ? 0.15 : 0.23,
    ),
    "--color-editor-deleted": toRgbaString(
      parseRequiredHexColor(basis.theme.semanticColors.diffRemoved),
      basis.variant === "light" ? 0.15 : 0.23,
    ),
    "--color-icon-accent": palette.iconAccent,
    "--color-icon-primary": palette.iconPrimary,
    "--color-icon-secondary": palette.iconSecondary,
    "--color-icon-tertiary": palette.iconTertiary,
    "--color-simple-scrim": palette.simpleScrim,
    "--color-text-accent": palette.textAccent,
    "--color-text-button-primary": palette.textButtonPrimary,
    "--color-text-button-secondary": palette.textButtonSecondary,
    "--color-text-button-tertiary": palette.textButtonTertiary,
    "--color-text-foreground": palette.textForeground,
    "--color-text-foreground-secondary": palette.textForegroundSecondary,
    "--color-text-foreground-tertiary": palette.textForegroundTertiary,
  };
}
function createNormalizedThemeBasis(
  theme: CodexChromeTheme,
  variant: ThemeVariant,
): NormalizedThemeBasis {
  const contrast = scaleContrast(theme.contrast, variant);
  const surface = parseRequiredHexColor(theme.surface);
  const ink = parseRequiredHexColor(theme.ink);
  return {
    accent: parseRequiredHexColor(theme.accent),
    contrast,
    editorBackground:
      variant === "light"
        ? mixRgb(surface, WHITE, 0.12)
        : mixRgb(surface, ink, 0.07),
    ink,
    surface,
    surfaceUnder: createSurfaceUnderColor(theme, surface, ink, variant),
    theme,
    variant,
  };
}
function scaleContrast(contrast: number, variant: ThemeVariant): number {
  const defaultContrast = DEFAULT_CONTRAST[variant];
  const defaultScaledContrast = defaultContrast / 100;
  const adjustedContrast =
    contrast / 100 + ((contrast - defaultContrast) / 60) * 0.7;
  return contrast <= defaultContrast
    ? adjustedContrast
    : defaultScaledContrast + (adjustedContrast - defaultScaledContrast) * 2;
}
function createSurfaceUnderColor(
  theme: CodexChromeTheme,
  surface: RgbColor,
  ink: RgbColor,
  variant: ThemeVariant,
): string {
  const alpha =
    SURFACE_UNDER_ALPHA[variant] +
    (theme.contrast - DEFAULT_CONTRAST[variant]) *
      SURFACE_UNDER_CONTRAST_STEP[variant];
  return variant === "light"
    ? mixRgbToHex(surface, ink, alpha)
    : mixRgbToHex(surface, BLACK, alpha);
}
function createPanelBackground(basis: NormalizedThemeBasis): string {
  const panelTarget = basis.variant === "light" ? WHITE : basis.ink;
  return mixRgbToHex(
    basis.surface,
    panelTarget,
    PANEL_MIX_ALPHA[basis.variant] +
      basis.contrast * PANEL_CONTRAST_STEP[basis.variant],
  );
}
function createLightPalette(basis: NormalizedThemeBasis): DerivedChromePalette {
  const controlBase = mixRgb(
    basis.surface,
    WHITE,
    0.09 + basis.contrast * 0.04,
  );
  const secondaryElevatedBase = mixRgb(
    basis.surface,
    WHITE,
    0.08 + basis.contrast * 0.08,
  );
  const primaryElevatedBase = mixRgb(
    basis.surface,
    WHITE,
    0.16 + basis.contrast * 0.12,
  );
  return {
    accentBackground: mixRgbToHex(
      basis.surface,
      basis.accent,
      0.11 + basis.contrast * 0.04,
    ),
    accentBackgroundActive: mixRgbToHex(
      basis.surface,
      basis.accent,
      0.13 + basis.contrast * 0.05,
    ),
    accentBackgroundHover: mixRgbToHex(
      basis.surface,
      basis.accent,
      0.12 + basis.contrast * 0.045,
    ),
    border: toRgbaString(basis.ink, 0.06 + basis.contrast * 0.04),
    borderFocus: basis.theme.accent,
    borderHeavy: toRgbaString(basis.ink, 0.09 + basis.contrast * 0.06),
    borderLight: toRgbaString(basis.ink, 0.04 + basis.contrast * 0.02),
    buttonPrimaryBackground: basis.theme.ink,
    buttonPrimaryBackgroundActive: toRgbaString(
      basis.ink,
      0.1 + basis.contrast * 0.12,
    ),
    buttonPrimaryBackgroundHover: toRgbaString(
      basis.ink,
      0.05 + basis.contrast * 0.06,
    ),
    buttonPrimaryBackgroundInactive: toRgbaString(
      basis.ink,
      0.18 + basis.contrast * 0.14,
    ),
    buttonSecondaryBackground: toRgbaString(
      basis.ink,
      0.04 + basis.contrast * 0.02,
    ),
    buttonSecondaryBackgroundActive: toRgbaString(
      basis.ink,
      0.03 + basis.contrast * 0.02,
    ),
    buttonSecondaryBackgroundHover: toRgbaString(
      basis.ink,
      0.04 + basis.contrast * 0.03,
    ),
    buttonSecondaryBackgroundInactive: toRgbaString(
      basis.ink,
      0.01 + basis.contrast * 0.02,
    ),
    buttonTertiaryBackground: toRgbaString(basis.ink, 0),
    buttonTertiaryBackgroundActive: toRgbaString(
      basis.ink,
      0.16 + basis.contrast * 0.08,
    ),
    buttonTertiaryBackgroundHover: toRgbaString(
      basis.ink,
      0.08 + basis.contrast * 0.04,
    ),
    controlBackground: toRgbaString(controlBase, 0.96),
    controlBackgroundOpaque: toRgbString(controlBase),
    elevatedPrimary: toRgbaString(primaryElevatedBase, 0.96),
    elevatedPrimaryOpaque: toRgbString(primaryElevatedBase),
    elevatedSecondary: toRgbaString(secondaryElevatedBase, 0.96),
    elevatedSecondaryOpaque: toRgbString(secondaryElevatedBase),
    iconAccent: basis.theme.accent,
    iconPrimary: basis.theme.ink,
    iconSecondary: toRgbaString(basis.ink, 0.65 + basis.contrast * 0.1),
    iconTertiary: toRgbaString(basis.ink, 0.45 + basis.contrast * 0.1),
    simpleScrim: toRgbaString(BLACK, 0.08 + basis.contrast * 0.04),
    textAccent: basis.theme.accent,
    textButtonPrimary: basis.theme.surface,
    textButtonSecondary: basis.theme.ink,
    textButtonTertiary: toRgbaString(basis.ink, 0.45 + basis.contrast * 0.1),
    textForeground: basis.theme.ink,
    textForegroundSecondary: toRgbaString(
      basis.ink,
      0.65 + basis.contrast * 0.1,
    ),
    textForegroundTertiary: toRgbaString(
      basis.ink,
      0.45 + basis.contrast * 0.1,
    ),
  };
}
function createDarkPalette(basis: NormalizedThemeBasis): DerivedChromePalette {
  const controlBase = mixRgb(
    basis.surface,
    basis.ink,
    0.06 + basis.contrast * 0.05,
  );
  const accentOnDark = mixRgb(basis.accent, WHITE, 0.3 + basis.contrast * 0.15);
  const primaryButtonBase = mixRgb(
    basis.surface,
    BLACK,
    0.38 + basis.contrast * 0.12,
  );
  const primaryElevatedBase = mixRgb(
    basis.surface,
    basis.ink,
    0.08 + basis.contrast * 0.08,
  );
  return {
    accentBackground: mixRgbToHex(
      BLACK,
      basis.accent,
      0.2 + basis.contrast * 0.08,
    ),
    accentBackgroundActive: mixRgbToHex(
      BLACK,
      basis.accent,
      0.22 + basis.contrast * 0.12,
    ),
    accentBackgroundHover: mixRgbToHex(
      BLACK,
      basis.accent,
      0.21 + basis.contrast * 0.1,
    ),
    border: toRgbaString(basis.ink, 0.06 + basis.contrast * 0.04),
    borderFocus: toRgbaString(accentOnDark, 0.7 + basis.contrast * 0.1),
    borderHeavy: toRgbaString(basis.ink, 0.12 + basis.contrast * 0.06),
    borderLight: toRgbaString(basis.ink, 0.03 + basis.contrast * 0.02),
    buttonPrimaryBackground: toRgbString(primaryButtonBase),
    buttonPrimaryBackgroundActive: toRgbaString(
      basis.ink,
      0.07 + basis.contrast * 0.05,
    ),
    buttonPrimaryBackgroundHover: toRgbaString(
      basis.ink,
      0.04 + basis.contrast * 0.03,
    ),
    buttonPrimaryBackgroundInactive: toRgbaString(
      basis.ink,
      0.02 + basis.contrast * 0.02,
    ),
    buttonSecondaryBackground: toRgbaString(
      basis.ink,
      0.04 + basis.contrast * 0.02,
    ),
    buttonSecondaryBackgroundActive: toRgbaString(
      basis.ink,
      0.09 + basis.contrast * 0.05,
    ),
    buttonSecondaryBackgroundHover: toRgbaString(
      basis.ink,
      0.06 + basis.contrast * 0.03,
    ),
    buttonSecondaryBackgroundInactive: toRgbaString(
      basis.ink,
      0.02 + basis.contrast * 0.03,
    ),
    buttonTertiaryBackground: toRgbaString(
      basis.ink,
      0.02 + basis.contrast * 0.015,
    ),
    buttonTertiaryBackgroundActive: toRgbaString(
      basis.ink,
      0.07 + basis.contrast * 0.05,
    ),
    buttonTertiaryBackgroundHover: toRgbaString(
      basis.ink,
      0.05 + basis.contrast * 0.03,
    ),
    controlBackground: toRgbaString(controlBase, 0.96),
    controlBackgroundOpaque: toRgbString(controlBase),
    elevatedPrimary: toRgbaString(primaryElevatedBase, 0.96),
    elevatedPrimaryOpaque: toRgbString(primaryElevatedBase),
    elevatedSecondary: toRgbaString(basis.ink, 0.02 + basis.contrast * 0.02),
    elevatedSecondaryOpaque: mixRgbToHex(
      basis.surface,
      basis.ink,
      0.04 + basis.contrast * 0.05,
    ),
    iconAccent: toRgbString(accentOnDark),
    iconPrimary: toRgbaString(basis.ink, 0.82 + basis.contrast * 0.14),
    iconSecondary: toRgbaString(basis.ink, 0.65 + basis.contrast * 0.1),
    iconTertiary: toRgbaString(basis.ink, 0.45 + basis.contrast * 0.1),
    simpleScrim: toRgbaString(basis.ink, 0.08 + basis.contrast * 0.04),
    textAccent: toRgbString(accentOnDark),
    textButtonPrimary: toRgbString(primaryButtonBase),
    textButtonSecondary: mixRgbToHex(
      basis.ink,
      basis.surface,
      0.7 + basis.contrast * 0.1,
    ),
    textButtonTertiary: toRgbaString(basis.ink, 0.45 + basis.contrast * 0.1),
    textForeground: basis.theme.ink,
    textForegroundSecondary: toRgbaString(
      basis.ink,
      0.65 + basis.contrast * 0.1,
    ),
    textForegroundTertiary: toRgbaString(
      basis.ink,
      0.42 + basis.contrast * 0.13,
    ),
  };
}
function normalizeHexColor(
  color: string | null | undefined,
): string | undefined {
  if (color == null) return undefined;
  const normalizedColor = color.trim();
  if (/^#[0-9a-fA-F]{6}$/.test(normalizedColor)) {
    return normalizedColor.toLowerCase();
  }
}
function parseRequiredHexColor(color: string): RgbColor {
  const normalizedColor = color.slice(1);
  return {
    blue: Number.parseInt(normalizedColor.slice(4, 6), 16),
    green: Number.parseInt(normalizedColor.slice(2, 4), 16),
    red: Number.parseInt(normalizedColor.slice(0, 2), 16),
  };
}
function parseHexColor(
  color: string | null | undefined,
): RgbaColor | undefined {
  if (color == null) return undefined;
  const normalizedColor = color.trim();
  if (!/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(normalizedColor)) {
    return undefined;
  }
  const alphaHex =
    normalizedColor.length === 9 ? normalizedColor.slice(7, 9) : "ff";
  return {
    alpha: Number.parseInt(alphaHex, 16) / 255,
    blue: Number.parseInt(normalizedColor.slice(5, 7), 16),
    green: Number.parseInt(normalizedColor.slice(3, 5), 16),
    red: Number.parseInt(normalizedColor.slice(1, 3), 16),
  };
}
function findThemeColor(
  colors: Record<string, string | undefined> | undefined,
  keys: string[],
): string | undefined {
  if (colors == null) return undefined;
  for (const colorKey of keys) {
    const normalizedColor = normalizeThemeColor(colors[colorKey]);
    if (normalizedColor != null) return normalizedColor;
  }
}
function normalizeThemeColor(
  color: string | null | undefined,
  options?: {
    minimumAlpha?: number;
    minimumChromaticRange?: number;
  },
): string | undefined {
  const parsedColor = parseHexColor(color);
  if (parsedColor == null) return undefined;
  const { minimumAlpha = 0.98, minimumChromaticRange = 0 } = options ?? {};
  if (
    parsedColor.alpha >= minimumAlpha &&
    getChromaticRange(parsedColor) >= minimumChromaticRange
  ) {
    return toHexString(parsedColor);
  }
}
function findAccentColor(
  theme: ShikiThemeDefinition,
  surface: string,
  ink: string,
): string | undefined {
  for (const colorKey of ACCENT_COLOR_KEYS) {
    const accentColor = normalizeThemeColor(theme.colors?.[colorKey], {
      minimumAlpha: 0.45,
      minimumChromaticRange: 24,
    });
    if (
      accentColor != null &&
      !isColorTooClose(accentColor, surface) &&
      !isColorTooClose(accentColor, ink)
    ) {
      return accentColor;
    }
  }
  let bestColor: string | undefined;
  let bestScore = -1;
  for (const tokenRule of getTokenColorRules(theme)) {
    const tokenColor = normalizeThemeColor(tokenRule.settings?.foreground, {
      minimumAlpha: 0.45,
      minimumChromaticRange: 24,
    });
    if (
      tokenColor == null ||
      isColorTooClose(tokenColor, surface) ||
      isColorTooClose(tokenColor, ink)
    ) {
      continue;
    }
    const score = scoreAccentCandidate(tokenColor, surface, ink);
    if (score > bestScore) {
      bestColor = tokenColor;
      bestScore = score;
    }
  }
  return bestColor;
}
function deriveSemanticColors(
  theme: ShikiThemeDefinition,
  surface: string,
  ink: string,
  accent: string,
  variant: ThemeVariant,
): SemanticThemeColors {
  const defaults = DEFAULT_CODEX_CHROME_THEMES[variant].semanticColors;
  return {
    diffAdded:
      findThemeColor(theme.colors, ADDED_COLOR_KEYS) ??
      findSemanticTokenColor(theme, surface, ink, GREEN_HUE_RANGE, 125) ??
      defaults.diffAdded,
    diffRemoved:
      findThemeColor(theme.colors, REMOVED_COLOR_KEYS) ??
      findSemanticTokenColor(theme, surface, ink, RED_HUE_RANGE, 0) ??
      defaults.diffRemoved,
    skill:
      findThemeColor(theme.colors, SKILL_COLOR_KEYS) ??
      findSemanticTokenColor(theme, surface, ink, PURPLE_HUE_RANGE, 265) ??
      (!isColorTooClose(accent, surface) && !isColorTooClose(accent, ink)
        ? accent
        : defaults.skill),
  };
}
function findSemanticTokenColor(
  theme: ShikiThemeDefinition,
  surface: string,
  ink: string,
  hueRange: {
    min: number;
    max: number;
  },
  preferredHue: number,
): string | undefined {
  let bestColor: string | undefined;
  let bestScore = -1;
  for (const candidateColor of collectDistinctTokenColors(theme)) {
    if (
      isColorTooClose(candidateColor, surface) ||
      isColorTooClose(candidateColor, ink)
    ) {
      continue;
    }
    const hue = getHue(parseHexColor(candidateColor));
    if (hue == null || !isHueInRange(hue, hueRange)) continue;
    const score =
      scoreAccentCandidate(candidateColor, surface, ink) -
      getHueDistance(hue, preferredHue) * 2;
    if (score > bestScore) {
      bestColor = candidateColor;
      bestScore = score;
    }
  }
  return bestColor;
}
function getTokenColorRules(theme: ShikiThemeDefinition): TokenColorRule[] {
  return [...(theme.tokenColors ?? []), ...(theme.settings ?? [])];
}
function collectDistinctTokenColors(theme: ShikiThemeDefinition): string[] {
  const themeColors = Object.values(theme.colors ?? {});
  const tokenColors = getTokenColorRules(theme).map(
    (tokenRule) => tokenRule.settings?.foreground,
  );
  const colors = new Set<string>();
  for (const color of [...themeColors, ...tokenColors]) {
    const normalizedColor = normalizeThemeColor(color, {
      minimumAlpha: 0.45,
      minimumChromaticRange: 24,
    });
    if (normalizedColor != null) colors.add(normalizedColor);
  }
  return [...colors];
}
function isColorTooClose(firstColor: string, secondColor: string): boolean {
  const firstRgb = parseHexColor(firstColor);
  const secondRgb = parseHexColor(secondColor);
  return firstRgb == null || secondRgb == null
    ? false
    : getRgbDistance(firstRgb, secondRgb) < 42;
}
function scoreAccentCandidate(
  candidateColor: string,
  surface: string,
  ink: string,
): number {
  const candidateRgb = parseHexColor(candidateColor);
  const surfaceRgb = parseHexColor(surface);
  const inkRgb = parseHexColor(ink);
  return candidateRgb == null || surfaceRgb == null || inkRgb == null
    ? 0
    : getChromaticRange(candidateRgb) +
        getRgbDistance(candidateRgb, surfaceRgb) / 4 +
        getRgbDistance(candidateRgb, inkRgb) / 4;
}
function getRgbDistance(firstColor: RgbColor, secondColor: RgbColor): number {
  return Math.sqrt(
    (firstColor.red - secondColor.red) ** 2 +
      (firstColor.green - secondColor.green) ** 2 +
      (firstColor.blue - secondColor.blue) ** 2,
  );
}
function getHue(color: RgbColor | undefined): number | null {
  if (color == null) return null;
  const red = color.red / 255;
  const green = color.green / 255;
  const blue = color.blue / 255;
  const maximum = Math.max(red, green, blue);
  const chroma = maximum - Math.min(red, green, blue);
  if (chroma === 0) return null;
  const hue =
    maximum === red
      ? ((green - blue) / chroma) * 60
      : maximum === green
        ? ((blue - red) / chroma + 2) * 60
        : ((red - green) / chroma + 4) * 60;
  return (hue + 360) % 360;
}
function isHueInRange(
  hue: number,
  range: {
    min: number;
    max: number;
  },
): boolean {
  return range.min <= range.max
    ? hue >= range.min && hue <= range.max
    : hue >= range.min || hue <= range.max;
}
function getHueDistance(firstHue: number, secondHue: number): number {
  const distance = Math.abs(firstHue - secondHue);
  return Math.min(distance, 360 - distance);
}
function getChromaticRange(color: RgbColor): number {
  return (
    Math.max(color.red, color.green, color.blue) -
    Math.min(color.red, color.green, color.blue)
  );
}
function mixRgb(
  firstColor: RgbColor,
  secondColor: RgbColor,
  amount: number,
): RgbColor {
  const normalizedAmount = Math.min(1, Math.max(0, amount));
  return {
    blue: mixChannel(firstColor.blue, secondColor.blue, normalizedAmount),
    green: mixChannel(firstColor.green, secondColor.green, normalizedAmount),
    red: mixChannel(firstColor.red, secondColor.red, normalizedAmount),
  };
}
function mixChannel(
  firstChannel: number,
  secondChannel: number,
  amount: number,
): number {
  return Math.round(firstChannel + (secondChannel - firstChannel) * amount);
}
function mixRgbToHex(
  firstColor: RgbColor,
  secondColor: RgbColor,
  amount: number,
): string {
  return toHexString(mixRgb(firstColor, secondColor, amount));
}
function toRgbaString(color: RgbColor, alpha: number): string {
  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${formatAlpha(alpha)})`;
}
function toRgbString(color: RgbColor): string {
  return `rgb(${color.red}, ${color.green}, ${color.blue})`;
}
function toHexString(color: RgbColor): string {
  return `#${toHexByte(color.red)}${toHexByte(color.green)}${toHexByte(color.blue)}`;
}
function toHexByte(channel: number): string {
  return channel.toString(16).padStart(2, "0");
}
function formatAlpha(alpha: number): string {
  return Math.min(1, Math.max(0, alpha))
    .toFixed(3)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}
