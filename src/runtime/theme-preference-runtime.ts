// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Theme preference helpers used by browser, review, terminal, and command-menu code.
import { appScopeRoot, appScopeUnderscore } from "../boundaries/app-scope";
import { SettingKeys } from "../settings/settings-keys-runtime";
import { useSettingValue } from "../settings/setting-storage";
import { useIsDark } from "../utils/use-is-dark";

export type ThemeVariant = "light" | "dark";
export type ThemePreference = ThemeVariant | "system" | string;

export const themeConfigSignal = appScopeUnderscore(appScopeRoot, () => null);

const resolvedColorSchemeSignal = appScopeUnderscore(
  appScopeRoot,
  () => readSystemThemeVariant(),
);

export function useThemePreference(): ThemePreference {
  return useSettingValue(SettingKeys.theme) ?? "system";
}

export function toThemeVariant(preference: ThemePreference): ThemeVariant {
  return preference === "dark" || preference === "light"
    ? preference
    : readSystemThemeVariant();
}

export function resolveColorScheme(
  preference: ThemePreference,
): ThemeVariant {
  return toThemeVariant(preference);
}

export function useIsDarkMode(): boolean {
  const preference = useThemePreference();
  const detectedIsDark = useIsDark();
  if (preference === "system") {
    return detectedIsDark ?? readSystemThemeVariant() === "dark";
  }
  return toThemeVariant(preference) === "dark";
}

export const useIsDarkTheme = useIsDarkMode;

export function resolvedColorSchemeAtom(): unknown {
  return resolvedColorSchemeSignal;
}

export function resolveActiveTheme<TTheme>(theme: TTheme): TTheme {
  return theme;
}

function readSystemThemeVariant(): ThemeVariant {
  if (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}
