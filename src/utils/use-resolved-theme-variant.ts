// Restored from ref/webview/assets/use-resolved-theme-variant-D-DZx3uS.js
// Resolves the stored theme preference to a concrete light or dark variant.
import React from "react";
import { useSettingValue } from "../settings/setting-storage";
type ThemeVariant = "light" | "dark";
type ThemeVariantPreference = ThemeVariant | "system";
type ElectronThemeBridge = {
  getSystemThemeVariant?: () => ThemeVariant;
  subscribeToSystemThemeVariant?: (onChange: () => void) => () => void;
};
const themePreferenceSetting = {
  default: "system" as ThemeVariantPreference,
  key: "appearanceTheme",
};
function getElectronThemeBridge() {
  if (typeof window === "undefined") return undefined;
  return (
    window as Window & {
      electronBridge?: ElectronThemeBridge;
    }
  ).electronBridge;
}
function useThemeVariantPreference() {
  return useSettingValue(themePreferenceSetting) ?? "system";
}
function subscribeToNoopStore() {
  return () => {};
}
function subscribeToSystemThemeVariant(onChange: () => void) {
  const electronBridge = getElectronThemeBridge();
  if (electronBridge?.subscribeToSystemThemeVariant != null) {
    return electronBridge.subscribeToSystemThemeVariant(onChange);
  }
  if (
    typeof window === "undefined" ||
    typeof window.matchMedia !== "function"
  ) {
    return () => {};
  }
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => {
    onChange();
  };
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }
  if (
    typeof mediaQuery.addListener === "function" &&
    typeof mediaQuery.removeListener === "function"
  ) {
    mediaQuery.addListener(handleChange);
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }
  return () => {};
}
function getSystemThemeVariant(): ThemeVariant {
  const electronBridge = getElectronThemeBridge();
  return (
    electronBridge?.getSystemThemeVariant?.() ??
    (typeof window === "undefined" || typeof window.matchMedia !== "function"
      ? "light"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
}
function useResolvedThemeVariant(preference: ThemeVariantPreference) {
  const getSnapshot = React.useMemo(
    () => (preference === "system" ? getSystemThemeVariant : () => preference),
    [preference],
  );
  return React.useSyncExternalStore(
    preference === "system"
      ? subscribeToSystemThemeVariant
      : subscribeToNoopStore,
    getSnapshot,
    getSnapshot,
  );
}
function getThemeVariantsForPreference(preference: ThemeVariantPreference) {
  return preference === "system" ? ["light", "dark"] : [preference];
}
export {
  useThemeVariantPreference,
  useResolvedThemeVariant,
  getThemeVariantsForPreference,
};
