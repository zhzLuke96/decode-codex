// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Code-theme selection helpers and compact color preview used by command-menu rows.
import { useCallback, useMemo, type CSSProperties } from "react";
import { appScopeO as readAppScopeStore } from "../boundaries/app-scope";
import {
  listCodeThemesForVariant,
  loadChromeThemeSeed,
  resolveCodeTheme,
  type CodeThemeFamily,
} from "../github/diff-view-mode/theme-registry-impl";
import {
  mergeChromeThemeSeed,
  normalizeCodexChromeTheme,
  type CodexChromeTheme,
  type CodexChromeThemeSeed,
  type ThemeVariant,
} from "../github/diff-view-mode/theme-colors-impl";
import {
  useSettingValue,
  writeSettingValue,
} from "../settings/setting-storage";

type SettingDefinition<T> = {
  default: T;
  key: string;
};

const DEFAULT_CODE_THEME_ID = "codex";

const appearanceSettings = {
  lightChromeTheme: {
    default: undefined,
    key: "appearanceLightChromeTheme",
  } satisfies SettingDefinition<CodexChromeThemeSeed | undefined>,
  darkChromeTheme: {
    default: undefined,
    key: "appearanceDarkChromeTheme",
  } satisfies SettingDefinition<CodexChromeThemeSeed | undefined>,
  lightCodeThemeId: {
    default: DEFAULT_CODE_THEME_ID,
    key: "appearanceLightCodeThemeId",
  } satisfies SettingDefinition<string>,
  darkCodeThemeId: {
    default: DEFAULT_CODE_THEME_ID,
    key: "appearanceDarkCodeThemeId",
  } satisfies SettingDefinition<string>,
};

function getAppearanceSettingsForVariant(variant: ThemeVariant) {
  return variant === "light"
    ? {
        chromeTheme: appearanceSettings.lightChromeTheme,
        codeThemeId: appearanceSettings.lightCodeThemeId,
      }
    : {
        chromeTheme: appearanceSettings.darkChromeTheme,
        codeThemeId: appearanceSettings.darkCodeThemeId,
      };
}

export async function computeCodeThemePreview(
  codeThemeId: string,
  variant: ThemeVariant,
): Promise<CodexChromeTheme> {
  const seed = await loadChromeThemeSeed(codeThemeId, variant);
  return normalizeCodexChromeTheme(seed, variant);
}

export function useCodeThemes(variant: ThemeVariant) {
  const settings = getAppearanceSettingsForVariant(variant);
  const storedCodeThemeId = useSettingValue(settings.codeThemeId);
  const storedChromeTheme = useSettingValue(settings.chromeTheme);
  const codeThemes = useMemo(
    () => listCodeThemesForVariant(variant),
    [variant],
  );
  const selectedCodeTheme = resolveCodeTheme(storedCodeThemeId, variant);
  const theme = useMemo(
    () => normalizeCodexChromeTheme(storedChromeTheme, variant),
    [storedChromeTheme, variant],
  );
  const setCodeThemeId = useCallback(
    async (codeThemeId: string) => {
      const nextCodeTheme = resolveCodeTheme(codeThemeId, variant);
      const seed = await loadChromeThemeSeed(nextCodeTheme.id, variant);
      const nextTheme = normalizeCodexChromeTheme(
        mergeChromeThemeSeed(theme, seed),
        variant,
      );
      const store = readAppScopeStore();
      await writeSettingValue(store, settings.chromeTheme, nextTheme);
      try {
        await writeSettingValue(store, settings.codeThemeId, nextCodeTheme.id);
      } catch (error) {
        await writeSettingValue(store, settings.chromeTheme, storedChromeTheme, {
          optimistic: false,
        }).catch(() => undefined);
        throw error;
      }
    },
    [settings, storedChromeTheme, theme, variant],
  );

  return useMemo(
    () => ({
      codeThemes: codeThemes.map(toCodeThemeOption),
      selectedCodeTheme,
      setCodeThemeId,
      theme,
    }),
    [codeThemes, selectedCodeTheme, setCodeThemeId, theme],
  );
}

function toCodeThemeOption(theme: CodeThemeFamily) {
  return {
    id: theme.id,
    label: theme.label,
  };
}

export function ThemeColorSwatch({ theme }: { theme: Pick<CodexChromeTheme, "accent" | "ink" | "surface"> }) {
  const style = useMemo<CSSProperties>(
    () => ({
      backgroundColor: theme.surface,
      borderColor: `color-mix(in srgb, ${theme.ink} 16%, ${theme.surface})`,
      color: theme.accent,
    }),
    [theme.accent, theme.ink, theme.surface],
  );
  return (
    <span
      aria-hidden
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs leading-none font-semibold"
      style={style}
    >
      Aa
    </span>
  );
}
