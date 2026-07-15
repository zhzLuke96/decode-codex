// Restored from ref/webview/assets/diff-view-mode-C5urbSEm.js
// diff-view-mode-C5urbSEm chunk restored from the Codex webview bundle.
// Semantic implementation for editor code theme registration and loading.
import * as sourceRuntime from "../../boundaries/src-l0hb-mz-p";
import { PreloadHelper } from "../../utils/preload-helper";
import {
  deriveChromeThemeSeedFromShikiTheme,
  mergeChromeThemeSeed,
  type CodexChromeThemeSeed,
  type ShikiThemeDefinition,
  type ThemeVariant,
} from "./theme-colors-impl";
type LoadedShikiThemeModule =
  | ShikiThemeDefinition
  | {
      default: ShikiThemeDefinition;
    };
export interface CodeThemeRegistration {
  load(): Promise<ShikiThemeDefinition>;
  loadChromeThemeSeed(): Promise<CodexChromeThemeSeed>;
  name: string;
}
export interface CodeThemeFamily {
  id: string;
  label: string;
  registrationByVariant: Partial<Record<ThemeVariant, CodeThemeRegistration>>;
}
type ThemeLoaders = Record<string, () => Promise<LoadedShikiThemeModule>>;
type VariantThemeInput =
  | string
  | {
      load: () => Promise<LoadedShikiThemeModule>;
      name: string;
    };
const themeIds = sourceRuntime._srcJ as Record<string, string>;
const DEFAULT_CODE_THEME_ID = themeIds.CODEX;
const codeThemeLabelCollator = new Intl.Collator(undefined, {
  sensitivity: "base",
});
const shikiThemeLoaders: ThemeLoaders = {
  "absolutely-dark": () => import("@shikijs/themes/absolutely-dark"),
  "absolutely-light": () => import("@shikijs/themes/absolutely-light"),
  "ayu-dark": () => import("@shikijs/themes/ayu-dark"),
  "catppuccin-latte": () => import("@shikijs/themes/catppuccin-latte"),
  "catppuccin-mocha": () => import("@shikijs/themes/catppuccin-mocha"),
  "codex-dark": () => import("@shikijs/themes/codex-dark"),
  "codex-light": () => import("@shikijs/themes/codex-light"),
  "dark-plus": () => import("@shikijs/themes/dark-plus"),
  dracula: () => import("@shikijs/themes/dracula"),
  "everforest-dark": () => import("@shikijs/themes/everforest-dark"),
  "everforest-light": () => import("@shikijs/themes/everforest-light"),
  "github-dark-default": () => import("@shikijs/themes/github-dark-default"),
  "github-light-default": () => import("@shikijs/themes/github-light-default"),
  "gruvbox-dark-medium": () => import("@shikijs/themes/gruvbox-dark-medium"),
  "gruvbox-light-medium": () => import("@shikijs/themes/gruvbox-light-medium"),
  "light-plus": () => import("@shikijs/themes/light-plus"),
  "linear-dark": () => import("@shikijs/themes/linear-dark"),
  "linear-light": () => import("@shikijs/themes/linear-light"),
  "lobster-dark": () => import("@shikijs/themes/lobster-dark"),
  "material-theme-darker": () =>
    import("@shikijs/themes/material-theme-darker"),
  "matrix-dark": () => import("@shikijs/themes/matrix-dark"),
  monokai: () => import("@shikijs/themes/monokai"),
  "night-owl": () => import("@shikijs/themes/night-owl"),
  nord: () => import("@shikijs/themes/nord"),
  "notion-dark": () => import("@shikijs/themes/notion-dark"),
  "notion-light": () => import("@shikijs/themes/notion-light"),
  "one-dark-pro": () => import("@shikijs/themes/one-dark-pro"),
  "one-light": () => import("@shikijs/themes/one-light"),
  oscurange: () => import("@shikijs/themes/oscurange"),
  "proof-light": () => import("@shikijs/themes/proof-light"),
  "raycast-dark": () => import("@shikijs/themes/raycast-dark"),
  "raycast-light": () => import("@shikijs/themes/raycast-light"),
  "rose-pine-dawn": () => import("@shikijs/themes/rose-pine-dawn"),
  "rose-pine-moon": () => import("@shikijs/themes/rose-pine-moon"),
  "sentry-dark": () => import("@shikijs/themes/sentry-dark"),
  "solarized-dark": () => import("@shikijs/themes/solarized-dark"),
  "solarized-light": () => import("@shikijs/themes/solarized-light"),
  "temple-dark": () => import("@shikijs/themes/temple-dark"),
  "tokyo-night": () => import("@shikijs/themes/tokyo-night"),
  "vercel-dark": () => import("@shikijs/themes/vercel-dark"),
  "vercel-light": () => import("@shikijs/themes/vercel-light"),
  "xcode-dark": () => import("@shikijs/themes/xcode-dark"),
  "xcode-light": () => import("@shikijs/themes/xcode-light"),
};
const codeThemeFamilies: CodeThemeFamily[] = [
  createBundledThemeFamily(themeIds.AYU, "Ayu", {
    dark: "ayu-dark",
  }),
  createBundledThemeFamily(themeIds.CATPPUCCIN, "Catppuccin", {
    dark: "catppuccin-mocha",
    light: "catppuccin-latte",
  }),
  createThemeFamily(themeIds.ABSOLUTELY, "Absolutely", {
    dark: {
      load: () => loadThemeModule("absolutely-dark"),
      name: "Absolutely Dark",
    },
    light: {
      load: () => loadThemeModule("absolutely-light"),
      name: "Absolutely Light",
    },
  }),
  createThemeFamily(themeIds.CODEX, "Codex", {
    dark: {
      load: () => loadThemeModule("codex-dark"),
      name: "Codex Dark",
    },
    light: {
      load: () => loadThemeModule("codex-light"),
      name: "Codex Light",
    },
  }),
  createBundledThemeFamily(themeIds.DRACULA, "Dracula", {
    dark: "dracula",
  }),
  createBundledThemeFamily(themeIds.EVERFOREST, "Everforest", {
    dark: "everforest-dark",
    light: "everforest-light",
  }),
  createBundledThemeFamily(themeIds.GITHUB, "GitHub", {
    dark: "github-dark-default",
    light: "github-light-default",
  }),
  createBundledThemeFamily(themeIds.GRUVBOX, "Gruvbox", {
    dark: "gruvbox-dark-medium",
    light: "gruvbox-light-medium",
  }),
  createThemeFamily(themeIds.LINEAR, "Linear", {
    dark: {
      load: () => loadThemeModule("linear-dark"),
      name: "Linear Dark",
    },
    light: {
      load: () => loadThemeModule("linear-light"),
      name: "Linear Light",
    },
  }),
  createThemeFamily(themeIds.LOBSTER, "Lobster", {
    dark: {
      load: () => loadThemeModule("lobster-dark"),
      name: "Lobster Dark",
    },
  }),
  createBundledThemeFamily(themeIds.MATERIAL, "Material", {
    dark: "material-theme-darker",
  }),
  createThemeFamily(themeIds.MATRIX, "Matrix", {
    dark: {
      load: () => loadThemeModule("matrix-dark"),
      name: "Matrix Dark",
    },
  }),
  createBundledThemeFamily(themeIds.MONOKAI, "Monokai", {
    dark: "monokai",
  }),
  createBundledThemeFamily(themeIds.NIGHT_OWL, "Night Owl", {
    dark: "night-owl",
  }),
  createBundledThemeFamily(themeIds.NORD, "Nord", {
    dark: "nord",
  }),
  createThemeFamily(themeIds.NOTION, "Notion", {
    dark: {
      load: () => loadThemeModule("notion-dark"),
      name: "Notion Dark",
    },
    light: {
      load: () => loadThemeModule("notion-light"),
      name: "Notion Light",
    },
  }),
  createThemeFamily(themeIds.OSCURANGE, "Oscurange", {
    dark: {
      load: () => loadThemeModule("oscurange"),
      name: "Oscurange",
    },
  }),
  createBundledThemeFamily(themeIds.ONE, "One", {
    dark: "one-dark-pro",
    light: "one-light",
  }),
  createThemeFamily(themeIds.PROOF, "Proof", {
    light: {
      load: () => loadThemeModule("proof-light"),
      name: "Proof Light",
    },
  }),
  createThemeFamily(themeIds.RAYCAST, "Raycast", {
    dark: {
      load: () => loadThemeModule("raycast-dark"),
      name: "Raycast Dark",
    },
    light: {
      load: () => loadThemeModule("raycast-light"),
      name: "Raycast Light",
    },
  }),
  createBundledThemeFamily(themeIds.ROSE_PINE, "Rose Pine", {
    dark: "rose-pine-moon",
    light: "rose-pine-dawn",
  }),
  createThemeFamily(themeIds.SENTRY, "Sentry", {
    dark: {
      load: () => loadThemeModule("sentry-dark"),
      name: "Sentry Dark",
    },
  }),
  createBundledThemeFamily(themeIds.SOLARIZED, "Solarized", {
    dark: "solarized-dark",
    light: "solarized-light",
  }),
  createBundledThemeFamily(themeIds.TOKYO_NIGHT, "Tokyo Night", {
    dark: "tokyo-night",
  }),
  createThemeFamily(themeIds.TEMPLE, "Temple", {
    dark: {
      load: () => loadThemeModule("temple-dark"),
      name: "Temple Dark",
    },
  }),
  createThemeFamily(themeIds.VERCEL, "Vercel", {
    dark: {
      load: () => loadThemeModule("vercel-dark"),
      name: "Vercel Dark",
    },
    light: {
      load: () => loadThemeModule("vercel-light"),
      name: "Vercel Light",
    },
  }),
  createBundledThemeFamily(themeIds.VSCODE_PLUS, "VS Code Plus", {
    dark: "dark-plus",
    light: "light-plus",
  }),
  createThemeFamily(themeIds.XCODE, "Xcode", {
    dark: {
      load: () => loadThemeModule("xcode-dark"),
      name: "Xcode Dark",
    },
    light: {
      load: () => loadThemeModule("xcode-light"),
      name: "Xcode Light",
    },
  }),
];
const codeThemeIds = codeThemeFamilies.map((themeFamily) => themeFamily.id);
export function resolveCodeTheme(
  themeId: string,
  variant: ThemeVariant,
): CodeThemeFamily {
  const availableThemes = getAvailableCodeThemes(variant);
  return (
    availableThemes.find((themeFamily) => themeFamily.id === themeId) ??
    availableThemes.find(
      (themeFamily) => themeFamily.id === DEFAULT_CODE_THEME_ID,
    ) ??
    availableThemes[0] ??
    codeThemeFamilies[0]
  );
}
export function listCodeThemesForVariant(
  variant: ThemeVariant | null | undefined,
): CodeThemeFamily[] {
  return getAvailableCodeThemes(variant).sort((firstTheme, secondTheme) =>
    codeThemeLabelCollator.compare(firstTheme.label, secondTheme.label),
  );
}
export function listAllCodeThemeRegistrations(): CodeThemeRegistration[] {
  return codeThemeFamilies
    .flatMap((themeFamily) => Object.values(themeFamily.registrationByVariant))
    .filter((registration): registration is CodeThemeRegistration => {
      return registration != null;
    });
}
export function isCodeThemeId(themeId: string): boolean {
  return codeThemeIds.some((knownThemeId) => knownThemeId === themeId);
}
export function getCodeThemeRegistration(
  themeId: string,
  variant: ThemeVariant,
): CodeThemeRegistration {
  const registration = resolveCodeTheme(themeId, variant).registrationByVariant[
    variant
  ];
  if (registration == null) {
    throw Error(`Missing ${variant} code theme registration`);
  }
  return registration;
}
export async function loadChromeThemeSeed(
  themeId: string,
  variant: ThemeVariant,
): Promise<CodexChromeThemeSeed> {
  return getCodeThemeRegistration(themeId, variant).loadChromeThemeSeed();
}
function getAvailableCodeThemes(
  variant: ThemeVariant | null | undefined,
): CodeThemeFamily[] {
  return codeThemeFamilies.filter((themeFamily) =>
    hasRegistrationForVariant(themeFamily, variant),
  );
}
function hasRegistrationForVariant(
  themeFamily: CodeThemeFamily,
  variant: ThemeVariant | null | undefined,
): boolean {
  return variant == null || themeFamily.registrationByVariant[variant] != null;
}
function createBundledThemeFamily(
  themeId: string,
  label: string,
  variants: Partial<Record<ThemeVariant, string>>,
): CodeThemeFamily {
  return createThemeFamily(themeId, label, {
    dark:
      variants.dark == null
        ? undefined
        : {
            load: () => loadThemeModule(variants.dark!),
            name: variants.dark,
          },
    light:
      variants.light == null
        ? undefined
        : {
            load: () => loadThemeModule(variants.light!),
            name: variants.light,
          },
  });
}
function createThemeFamily(
  themeId: string,
  label: string,
  variants: Partial<Record<ThemeVariant, VariantThemeInput>>,
): CodeThemeFamily {
  const registrationByVariant: Partial<
    Record<ThemeVariant, CodeThemeRegistration>
  > = {};
  if (variants.dark != null) {
    registrationByVariant.dark = createThemeRegistration(variants.dark, "dark");
  }
  if (variants.light != null) {
    registrationByVariant.light = createThemeRegistration(
      variants.light,
      "light",
    );
  }
  return {
    id: themeId,
    label,
    registrationByVariant,
  };
}
function createThemeRegistration(
  themeInput: VariantThemeInput,
  variant: ThemeVariant,
): CodeThemeRegistration {
  const themeName =
    typeof themeInput === "string" ? themeInput : themeInput.name;
  const loadTheme =
    typeof themeInput === "string"
      ? () => loadThemeModule(themeInput)
      : themeInput.load;
  let cachedThemePromise: Promise<ShikiThemeDefinition> | null = null;
  const load = () => {
    cachedThemePromise ??= loadTheme().then(unwrapThemeModule);
    return cachedThemePromise;
  };
  return {
    load,
    loadChromeThemeSeed: () =>
      load().then((themeDefinition) =>
        mergeChromeThemeSeed(
          deriveChromeThemeSeedFromShikiTheme(themeDefinition, variant),
          themeDefinition.chromeTheme,
        ),
      ),
    name: themeName,
  };
}
function loadThemeModule(
  themeSpecifier: string,
): Promise<LoadedShikiThemeModule> {
  const loader = shikiThemeLoaders[themeSpecifier];
  if (loader == null) throw Error(`Unknown code theme ${themeSpecifier}`);
  return PreloadHelper(loader, [], import.meta.url);
}
function unwrapThemeModule(
  themeModule: LoadedShikiThemeModule,
): ShikiThemeDefinition {
  return typeof themeModule === "object" &&
    themeModule != null &&
    "default" in themeModule
    ? themeModule.default
    : themeModule;
}
