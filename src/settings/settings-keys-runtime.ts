// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared setting definitions addressed through SettingKeys.

type SettingDefinition<T = unknown> = {
  default: T;
  key: string;
  toString(): string;
};

function keyFromProperty(property: string): string {
  return property
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function setting<T>(key: string, defaultValue: T): SettingDefinition<T> {
  return {
    default: defaultValue,
    key,
    toString: () => key,
  };
}

export const SettingKeys = new Proxy<Record<string, SettingDefinition>>(
  {
    codeFontSize: setting("code-font-size", 13),
    commitInstructions: setting("git-commit-instructions", ""),
    darkChromeTheme: setting("dark-chrome-theme", null),
    darkCodeThemeId: setting("dark-code-theme-id", null),
    lightChromeTheme: setting("light-chrome-theme", null),
    lightCodeThemeId: setting("light-code-theme-id", null),
    pullRequestInstructions: setting("git-pr-instructions", ""),
    theme: setting("appearanceTheme", "system"),
  },
  {
    get(target, property: string | symbol) {
      if (typeof property !== "string") return undefined;
      return target[property] ?? setting(keyFromProperty(property), null);
    },
  },
);
