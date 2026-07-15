// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js
// Lightweight registry for custom highlight themes shared by diff and markdown renderers.
export type HighlightThemeLoader = () => unknown | Promise<unknown>;

export type HighlightThemeRegistration = {
  collection?: string;
  colorScheme?: string;
  displayName?: string;
  load: HighlightThemeLoader;
  name: string;
};

export class DuplicateThemeError extends Error {
  constructor(themeName: string) {
    super(`Theme "${themeName}" is already registered`);
    this.name = "DuplicateThemeError";
  }
}

class SharedHighlightThemeRegistry {
  private readonly themes = new Map<string, HighlightThemeRegistration>();

  registerTheme(name: string, load: HighlightThemeLoader): void {
    this.registerThemeRegistration(
      createHighlightThemeRegistration({ name, load }),
    );
  }

  registerThemeIfAbsent(
    name: string,
    load: HighlightThemeLoader,
    metadata: Omit<HighlightThemeRegistration, "load" | "name"> = {},
  ): void {
    if (this.themes.has(name)) return;
    this.registerThemeRegistration(
      createHighlightThemeRegistration({ ...metadata, name, load }),
    );
  }

  registerThemeRegistration(registration: HighlightThemeRegistration): void {
    if (this.themes.has(registration.name)) {
      throw new DuplicateThemeError(registration.name);
    }
    this.themes.set(registration.name, registration);
  }

  getRegisteredTheme(
    themeName: string,
  ): HighlightThemeRegistration | undefined {
    return this.themes.get(themeName);
  }

  hasRegisteredTheme(themeName: string): boolean {
    return this.themes.has(themeName);
  }
}

export const sharedHighlightThemeRegistry = new SharedHighlightThemeRegistry();

export function createHighlightThemeRegistration({
  name,
  load,
  colorScheme,
  collection,
  displayName,
}: HighlightThemeRegistration): HighlightThemeRegistration {
  return {
    name,
    load,
    colorScheme,
    collection,
    displayName,
  };
}

export function registerCustomHighlightTheme(
  name: string,
  load: HighlightThemeLoader,
): void {
  try {
    sharedHighlightThemeRegistry.registerTheme(name, load);
  } catch (error) {
    if (error instanceof DuplicateThemeError) {
      console.error(
        "SharedHighlight.registerCustomTheme: theme name already registered",
        name,
      );
      return;
    }
    throw error;
  }
}

export function initDuplicateThemeErrorChunk(): void {}

export function initSharedHighlightThemeRegistryChunk(): void {}

export function initBundledHighlightThemesChunk(): void {}

export function initResolvedHighlightThemesChunk(): void {}

export function initVirtualScrollRuntimeChunk(): void {}
