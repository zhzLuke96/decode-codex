// Restored from ref/webview/assets/popcorn-electron-surface-style-mUJ9CmvY.js
export interface PopcornRgbColor {
  b: number;
  g: number;
  r: number;
}

export const POPCORN_ANNOTATION_HIGHLIGHT_ALPHA = 0.18;
export const POPCORN_DEFAULT_ACCENT_RED = 51;
export const POPCORN_DEFAULT_ACCENT_GREEN = 156;
export const POPCORN_DEFAULT_ACCENT_BLUE = 255;
export const POPCORN_DEFAULT_ACCENT_COLOR = `rgb(${POPCORN_DEFAULT_ACCENT_RED}, ${POPCORN_DEFAULT_ACCENT_GREEN}, ${POPCORN_DEFAULT_ACCENT_BLUE})`;
export const POPCORN_DEFAULT_ACCENT_BACKGROUND = `rgba(${POPCORN_DEFAULT_ACCENT_RED}, ${POPCORN_DEFAULT_ACCENT_GREEN}, ${POPCORN_DEFAULT_ACCENT_BLUE}, ${POPCORN_ANNOTATION_HIGHLIGHT_ALPHA})`;
export const POPCORN_TOKEN_TEXT_LINK_COLOR =
  "var(--color-token-text-link-foreground, #339cff)";
export const POPCORN_TOKEN_MUTED_ACCENT_BACKGROUND =
  "var(--color-token-interactive-bg-accent-muted-context, rgba(51, 156, 255, 0.18))";

export function initPopcornSurfaceColorsChunk(): void {}

export function getPopcornElementAccentColor(
  element: Element | null | undefined,
): string {
  const view = element?.ownerDocument.defaultView;
  if (!element || !view) return POPCORN_DEFAULT_ACCENT_COLOR;

  const computedStyle = view.getComputedStyle(element);
  return (
    getCssCustomProperty(computedStyle, "--color-text-accent") ??
    getCssCustomProperty(computedStyle, "--color-accent-blue") ??
    POPCORN_DEFAULT_ACCENT_COLOR
  );
}

export function normalizePopcornRgbColor(color: string): string {
  const parsedColor = parseCssRgbColor(color);
  return parsedColor
    ? `rgb(${parsedColor.r}, ${parsedColor.g}, ${parsedColor.b})`
    : color;
}

export function getTranslucentPopcornRgbColor(color: string): string {
  const parsedColor = parseCssRgbColor(color);
  return parsedColor
    ? `rgba(${parsedColor.r}, ${parsedColor.g}, ${parsedColor.b}, ${POPCORN_ANNOTATION_HIGHLIGHT_ALPHA})`
    : POPCORN_DEFAULT_ACCENT_BACKGROUND;
}

export function isDynamicCssColor(color: string): boolean {
  return color.includes("var(") || color.includes("color-mix(");
}

export function getCssCustomProperty(
  computedStyle: CSSStyleDeclaration,
  propertyName: string,
): string | null {
  const value = computedStyle.getPropertyValue(propertyName).trim();
  return value.length > 0 ? value : null;
}

export function parseCssRgbColor(color: string): PopcornRgbColor | null {
  const trimmedColor = color.trim();
  if (trimmedColor.startsWith("#")) return parseHexRgbColor(trimmedColor);

  const match =
    /^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/i.exec(
      trimmedColor,
    );
  if (!match) return null;

  const red = match[1];
  const green = match[2];
  const blue = match[3];
  return red == null || green == null || blue == null
    ? null
    : {
        r: Number(red),
        g: Number(green),
        b: Number(blue),
      };
}

export function parseHexRgbColor(color: string): PopcornRgbColor | null {
  if (color.length === 4) {
    const red = color[1];
    const green = color[2];
    const blue = color[3];
    return red == null || green == null || blue == null
      ? null
      : {
          r: Number.parseInt(red + red, 16),
          g: Number.parseInt(green + green, 16),
          b: Number.parseInt(blue + blue, 16),
        };
  }

  return color.length === 7
    ? {
        r: Number.parseInt(color.slice(1, 3), 16),
        g: Number.parseInt(color.slice(3, 5), 16),
        b: Number.parseInt(color.slice(5, 7), 16),
      }
    : null;
}
