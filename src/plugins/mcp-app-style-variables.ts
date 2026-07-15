// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Reads the host (VS Code) theme CSS custom properties and maps them into the
// design-token style-variable bag handed to MCP app sandboxes, plus the derived
// atoms exposing the current style variables and surface background color.

import {
  appStoreScope,
  createDerivedAtom,
  themeRevisionAtom,
} from "../boundaries/onboarding-commons-externals.facade";

type StyleVariableKind =
  | "color"
  | "fontFamily"
  | "fontWeight"
  | "fontSize"
  | "borderRadius"
  | "boxShadow";

function resolveCssVariableValue(
  rootStyle: CSSStyleDeclaration,
  probe: HTMLElement,
  variableName: string,
  property: StyleVariableKind,
): string | undefined {
  const rawValue = rootStyle.getPropertyValue(variableName).trim();
  if (rawValue.length === 0) return undefined;
  probe.style[property as any] = `var(${variableName})`;
  const computed = getComputedStyle(probe)[property as any].trim();
  return computed.length === 0 || computed === `var(${variableName})`
    ? rawValue
    : computed;
}

export function getMcpAppThemeColor(variableName: string): string | undefined {
  const rootStyle = getComputedStyle(document.documentElement);
  const probe = document.createElement("div");
  probe.style.display = "none";
  probe.setAttribute("aria-hidden", "true");
  document.body.appendChild(probe);
  try {
    return resolveCssVariableValue(rootStyle, probe, variableName, "color");
  } finally {
    probe.remove();
  }
}

export function getMcpAppSurfaceBackgroundColor(): string | undefined {
  return getMcpAppThemeColor("--color-background-surface");
}

export function resolveMcpAppColorScheme(): "dark" | "light" {
  return getComputedStyle(document.documentElement).colorScheme === "dark"
    ? "dark"
    : "light";
}

export type McpAppStyleVariables = Record<string, string | undefined>;

export function collectMcpAppStyleVariables(): McpAppStyleVariables {
  const rootStyle = getComputedStyle(document.documentElement);
  const probe = document.createElement("div");
  probe.style.display = "none";
  probe.setAttribute("aria-hidden", "true");
  document.body.appendChild(probe);

  const mapped = (variableName: string, property: StyleVariableKind) =>
    resolveCssVariableValue(rootStyle, probe, variableName, property);
  const rawValue = (variableName: string): string | undefined => {
    const value = rootStyle.getPropertyValue(variableName).trim();
    return value.length > 0 ? value : undefined;
  };
  const color = (variableName: string) => mapped(variableName, "color");
  const tintedBackground = (variableName: string): string | undefined => {
    const foreground = color(variableName);
    const background = color("--vscode-editor-background");
    if (foreground == null || background == null) return undefined;
    return `color-mix(in srgb, ${foreground} 12%, ${background})`;
  };

  try {
    return {
      "--color-background-primary": color("--vscode-editor-background"),
      "--color-background-secondary": color("--vscode-editorWidget-background"),
      "--color-background-tertiary": color("--vscode-sideBar-background"),
      "--color-background-inverse": color("--vscode-foreground"),
      "--color-background-ghost": "transparent",
      "--color-background-info": color("--vscode-editorGroup-dropBackground"),
      "--color-background-danger": color(
        "--vscode-inputValidation-errorBackground",
      ),
      "--color-background-success": tintedBackground(
        "--vscode-gitDecoration-addedResourceForeground",
      ),
      "--color-background-warning": tintedBackground(
        "--vscode-editorWarning-foreground",
      ),
      "--color-background-disabled": color(
        "--vscode-button-secondaryBackground",
      ),
      "--color-text-primary": color("--vscode-foreground"),
      "--color-text-secondary": color("--vscode-descriptionForeground"),
      "--color-text-tertiary": color("--vscode-descriptionForeground"),
      "--color-text-inverse": color("--vscode-editor-background"),
      "--color-text-ghost": color("--vscode-descriptionForeground"),
      "--color-text-info": color("--vscode-textLink-foreground"),
      "--color-text-danger": color("--vscode-errorForeground"),
      "--color-text-success": color(
        "--vscode-gitDecoration-addedResourceForeground",
      ),
      "--color-text-warning": color("--vscode-editorWarning-foreground"),
      "--color-text-disabled": color("--vscode-descriptionForeground"),
      "--color-border-primary": color("--vscode-input-border"),
      "--color-border-secondary": color("--vscode-editorWidget-border"),
      "--color-border-tertiary": color("--vscode-textBlockQuote-border"),
      "--color-border-inverse": color("--vscode-foreground"),
      "--color-border-ghost": "transparent",
      "--color-border-info": color("--vscode-focusBorder"),
      "--color-border-danger": color("--vscode-errorForeground"),
      "--color-border-success": color(
        "--vscode-gitDecoration-addedResourceForeground",
      ),
      "--color-border-warning": color("--vscode-editorWarning-foreground"),
      "--color-border-disabled": color("--vscode-input-border"),
      "--color-ring-primary": color("--vscode-focusBorder"),
      "--color-ring-secondary": color("--vscode-focusBorder"),
      "--color-ring-inverse": color("--vscode-focusBorder"),
      "--color-ring-info": color("--vscode-focusBorder"),
      "--color-ring-danger": color("--vscode-errorForeground"),
      "--color-ring-success": color(
        "--vscode-gitDecoration-addedResourceForeground",
      ),
      "--color-ring-warning": color("--vscode-editorWarning-foreground"),
      "--font-sans": mapped("--font-sans", "fontFamily"),
      "--font-mono": mapped("--font-mono", "fontFamily"),
      "--font-weight-normal": mapped("--vscode-font-weight", "fontWeight"),
      "--font-weight-medium": mapped("--font-weight-medium", "fontWeight"),
      "--font-weight-semibold": mapped("--font-weight-semibold", "fontWeight"),
      "--font-weight-bold": mapped("--font-weight-bold", "fontWeight"),
      "--font-text-xs-size": mapped("--text-xs", "fontSize"),
      "--font-text-sm-size": mapped("--text-sm", "fontSize"),
      "--font-text-md-size": mapped("--text-base", "fontSize"),
      "--font-text-lg-size": mapped("--text-lg", "fontSize"),
      "--font-heading-xs-size": mapped("--text-heading-sm", "fontSize"),
      "--font-heading-sm-size": mapped("--text-heading-md", "fontSize"),
      "--font-heading-md-size": mapped("--text-heading-lg", "fontSize"),
      "--font-heading-lg-size": mapped("--text-xl", "fontSize"),
      "--font-heading-xl-size": mapped("--text-2xl", "fontSize"),
      "--font-heading-2xl-size": mapped("--text-3xl", "fontSize"),
      "--font-heading-3xl-size": mapped("--text-4xl", "fontSize"),
      "--font-text-xs-line-height": rawValue("--text-xs--line-height"),
      "--font-text-sm-line-height": rawValue("--text-sm--line-height"),
      "--font-text-md-line-height": rawValue("--text-base--line-height"),
      "--font-text-lg-line-height": rawValue("--text-lg--line-height"),
      "--font-heading-xs-line-height": "1.33",
      "--font-heading-sm-line-height": "1.33",
      "--font-heading-md-line-height": "1.2",
      "--font-heading-lg-line-height": "1.2",
      "--font-heading-xl-line-height": "1",
      "--font-heading-2xl-line-height": "1",
      "--font-heading-3xl-line-height": "1",
      "--border-radius-xs": mapped("--radius-xs", "borderRadius"),
      "--border-radius-sm": mapped("--radius-sm", "borderRadius"),
      "--border-radius-md": mapped("--radius-md", "borderRadius"),
      "--border-radius-lg": mapped("--radius-lg", "borderRadius"),
      "--border-radius-xl": mapped("--radius-xl", "borderRadius"),
      "--border-radius-full": mapped("--radius-full", "borderRadius"),
      "--border-width-regular": "1px",
      "--shadow-hairline": mapped("--shadow-hairline", "boxShadow"),
      "--shadow-sm": mapped("--shadow-sm", "boxShadow"),
      "--shadow-md": mapped("--shadow-md", "boxShadow"),
      "--shadow-lg": mapped("--shadow-lg", "boxShadow"),
    };
  } finally {
    probe.remove();
  }
}

export const mcpAppStyleVariablesAtom = createDerivedAtom(
  appStoreScope,
  ({ get }: { get: (atom: unknown) => unknown }) => {
    get(themeRevisionAtom);
    return collectMcpAppStyleVariables();
  },
);

export const mcpAppSurfaceBackgroundColorAtom = createDerivedAtom(
  appStoreScope,
  ({ get }: { get: (atom: unknown) => unknown }) => {
    get(themeRevisionAtom);
    return getMcpAppSurfaceBackgroundColor();
  },
);
