// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Pure helpers for the embedded xterm.js terminal panel: font normalization,
// scroll detection, web-font preloading, VS Code theme extraction and a
// mouse-coordinate patch that compensates for the panel's CSS zoom level.

type TerminalBufferLine = {
  viewportY: number;
  baseY: number;
};

type TerminalBuffer = {
  active: TerminalBufferLine;
};

type XtermLike = {
  buffer: TerminalBuffer;
  _core?: TerminalCore;
};

type MouseCoordinate = {
  clientX: number;
  clientY: number;
};

type MouseService = {
  getCoords: (...args: unknown[]) => unknown;
  getMouseReportCoords: (...args: unknown[]) => unknown;
};

type SelectionService = {
  _getMouseEventScrollAmount?: (event: MouseCoordinate) => unknown;
  _screenElement?: HTMLElement | null;
};

type TerminalCore = {
  _mouseService?: MouseService | null;
  _selectionService?: SelectionService | null;
};

export type TerminalTheme = {
  background?: string;
  foreground?: string;
  cursor?: string;
  selectionBackground?: string;
  selectionInactiveBackground?: string;
  black?: string;
  red?: string;
  green?: string;
  yellow?: string;
  blue?: string;
  magenta?: string;
  cyan?: string;
  white?: string;
  brightBlack?: string;
  brightRed?: string;
  brightGreen?: string;
  brightYellow?: string;
  brightBlue?: string;
  brightMagenta?: string;
  brightCyan?: string;
  brightWhite?: string;
};

export function normalizeTerminalFontFamily(fontFamily: string): string {
  const trimmed = fontFamily.trim();
  if (trimmed.length === 0) {
    return "monospace";
  }
  return /\bmonospace\b/i.test(trimmed) ? trimmed : `${trimmed}, monospace`;
}

export function isTerminalScrolledToBottom(terminal: XtermLike): boolean {
  return terminal.buffer.active.viewportY >= terminal.buffer.active.baseY;
}

export async function ensureTerminalFontLoaded(
  fontFamily: string | undefined,
  fontSize: number,
): Promise<void> {
  if (!fontFamily || !("fonts" in document)) {
    return;
  }
  try {
    if (!document.fonts.check(`${fontSize}px ${fontFamily}`)) {
      await document.fonts.load(`${fontSize}px ${fontFamily}`);
    }
  } catch {
    /* ignore font load failures */
  }
}

export function readTerminalThemeFromCss(element: HTMLElement): TerminalTheme {
  const elementStyle = getComputedStyle(element);
  const rootStyle = getComputedStyle(document.documentElement);
  const probe = document.createElement("div");
  element.appendChild(probe);
  const resolveColor = (cssVariable: string): string | undefined => {
    const value =
      elementStyle.getPropertyValue(cssVariable).trim() ||
      rootStyle.getPropertyValue(cssVariable).trim();
    if (value) {
      probe.style.color = value;
      return getComputedStyle(probe).color || value || undefined;
    }
    return undefined;
  };
  const theme: TerminalTheme = {
    background: resolveColor("--vscode-terminal-background"),
    foreground: resolveColor("--vscode-terminal-foreground"),
    cursor: resolveColor("--vscode-terminal-foreground"),
    selectionBackground: resolveColor("--vscode-terminal-selectionBackground"),
    selectionInactiveBackground: resolveColor(
      "--vscode-terminal-inactiveSelectionBackground",
    ),
    black: resolveColor("--vscode-terminal-ansiBlack"),
    red: resolveColor("--vscode-terminal-ansiRed"),
    green: resolveColor("--vscode-terminal-ansiGreen"),
    yellow: resolveColor("--vscode-terminal-ansiYellow"),
    blue: resolveColor("--vscode-terminal-ansiBlue"),
    magenta: resolveColor("--vscode-terminal-ansiMagenta"),
    cyan: resolveColor("--vscode-terminal-ansiCyan"),
    white: resolveColor("--vscode-terminal-ansiWhite"),
    brightBlack: resolveColor("--vscode-terminal-ansiBrightBlack"),
    brightRed: resolveColor("--vscode-terminal-ansiBrightRed"),
    brightGreen: resolveColor("--vscode-terminal-ansiBrightGreen"),
    brightYellow: resolveColor("--vscode-terminal-ansiBrightYellow"),
    brightBlue: resolveColor("--vscode-terminal-ansiBrightBlue"),
    brightMagenta: resolveColor("--vscode-terminal-ansiBrightMagenta"),
    brightCyan: resolveColor("--vscode-terminal-ansiBrightCyan"),
    brightWhite: resolveColor("--vscode-terminal-ansiBrightWhite"),
  };
  probe.remove();
  return theme;
}

export function patchTerminalMouseCoordsForZoom(
  terminal: XtermLike,
  getZoomLevel: () => number,
): () => void {
  const core = terminal._core;
  const mouseService = core?._mouseService;
  if (mouseService == null) {
    return () => {};
  }
  const originalGetCoords = mouseService.getCoords;
  const originalGetMouseReportCoords = mouseService.getMouseReportCoords;
  const scaleEvent = (
    event: MouseCoordinate,
    target: HTMLElement,
  ): MouseCoordinate => {
    const zoom = getZoomLevel();
    return zoom === 1
      ? event
      : scaleMouseCoordinate(event, target.getBoundingClientRect(), zoom);
  };
  const selectionService = core?._selectionService;
  const originalGetScrollAmount = selectionService?._getMouseEventScrollAmount;
  const screenElement = selectionService?._screenElement;
  mouseService.getCoords = (
    event: MouseCoordinate,
    target: HTMLElement,
    ...rest: unknown[]
  ) =>
    originalGetCoords.call(
      mouseService,
      scaleEvent(event, target),
      target,
      ...rest,
    );
  mouseService.getMouseReportCoords = (
    event: MouseCoordinate,
    target: HTMLElement,
  ) =>
    originalGetMouseReportCoords.call(
      mouseService,
      scaleEvent(event, target),
      target,
    );
  if (
    selectionService != null &&
    originalGetScrollAmount != null &&
    screenElement != null
  ) {
    selectionService._getMouseEventScrollAmount = (event: MouseCoordinate) =>
      originalGetScrollAmount.call(
        selectionService,
        scaleEvent(event, screenElement),
      );
  }
  return () => {
    mouseService.getCoords = originalGetCoords;
    mouseService.getMouseReportCoords = originalGetMouseReportCoords;
    if (selectionService != null && originalGetScrollAmount != null) {
      selectionService._getMouseEventScrollAmount = originalGetScrollAmount;
    }
  };
}

function scaleMouseCoordinate(
  event: MouseCoordinate,
  rect: DOMRect,
  zoom: number,
): MouseCoordinate {
  return zoom === 1
    ? event
    : {
        clientX: rect.left + (event.clientX - rect.left) / zoom,
        clientY: rect.top + (event.clientY - rect.top) / zoom,
      };
}
