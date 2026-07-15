// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Embedded xterm.js terminal panel: owns the Terminal instance lifecycle,
// clipboard/fit/web-link addons, theme + font synchronization with the active
// chrome theme, zoom-aware mouse coordinates, and bridges I/O through the
// terminal session manager. Wrapped in a named error boundary.
import { useEffect, useEffectEvent, useLayoutEffect, useRef } from "react";
import { Terminal } from "@xterm/xterm";
import { ClipboardAddon } from "@xterm/addon-clipboard";
import { FitAddon } from "@xterm/addon-fit";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { fontSettings } from "../utils/font-settings";
import { requestGitIndexChangeCheck } from "../utils/check-git-index-for-changes";
import {
  activateTerminalLink,
  terminalLinkHandler,
} from "./terminal-link-handler";
import {
  ensureTerminalFontLoaded,
  isTerminalScrolledToBottom,
  normalizeTerminalFontFamily,
  patchTerminalMouseCoordsForZoom,
  readTerminalThemeFromCss,
} from "./terminal-view-utils";
import { handleTerminalKeyEvent } from "./terminal-key-event-handler";
import { TerminalErrorFallback } from "./terminal-error-fallback";
import {
  NamedErrorBoundary,
  SettingKeys,
  applyChromeThemeToElement,
  resolveChromeTheme,
  resolvedColorSchemeAtom,
  terminalSessionManager,
  useAppScopeAtomValue,
  usePlatform,
  useSetting,
  useWindowZoom,
} from "../boundaries/onboarding-commons-externals.facade";

export type TerminalPanelProps = {
  conversationId: string;
  conversationTitle: string | null;
  hostId?: string | null;
  cwd?: string | null;
  sessionId?: string;
  onNewTerminalTab?: () => void;
};

type TerminalErrorBoundaryFallbackProps = {
  resetError: () => void;
};

function fitAndResizeTerminal(
  terminal: Terminal,
  fitAddon: FitAddon,
  sessionId: string,
): void {
  fitAddon.fit();
  terminalSessionManager.resize(sessionId, terminal.cols, terminal.rows);
}

export function TerminalPanel(props: TerminalPanelProps) {
  const key = props.sessionId ?? props.conversationId;
  return (
    <NamedErrorBoundary
      key={key}
      name="TerminalPanel"
      fallback={TerminalPanelErrorFallback}
    >
      <TerminalPanelSurface {...props} />
    </NamedErrorBoundary>
  );
}

function TerminalPanelErrorFallback({
  resetError,
}: TerminalErrorBoundaryFallbackProps) {
  return (
    <TerminalErrorFallback
      onRetry={() => {
        resetError();
      }}
    />
  );
}

function TerminalPanelSurface({
  conversationId,
  conversationTitle,
  hostId,
  cwd,
  sessionId,
  onNewTerminalTab,
}: TerminalPanelProps) {
  const { platform } = usePlatform();
  const zoomLevel = useWindowZoom();
  const colorScheme = useAppScopeAtomValue<"light" | "dark">(
    resolvedColorSchemeAtom(),
  );
  const isNonMacOs = platform !== "macOS";
  const lightChromeThemeSetting = useSetting(SettingKeys.lightChromeTheme);
  const darkChromeThemeSetting = useSetting(SettingKeys.darkChromeTheme);
  const codeFontSizeSetting = useSetting<number | undefined>(
    SettingKeys.codeFontSize,
  );

  const resolvedChromeTheme =
    colorScheme === "light"
      ? resolveChromeTheme(lightChromeThemeSetting, "light")
      : resolveChromeTheme(darkChromeThemeSetting, "dark");
  const themeFont = resolvedChromeTheme.fonts.code?.trim() ?? "";
  const chosenFont = themeFont.length > 0 ? themeFont : fontSettings;
  const fontSize = codeFontSizeSetting ?? 12;
  const fontFamily = normalizeTerminalFontFamily(chosenFont);
  const primaryFontFamily = chosenFont.split(",")[0]?.trim() ?? "";

  const rootRef = useRef<HTMLDivElement>(null);
  const terminalHostRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const sessionIdRef = useRef<string | null>(null);
  const attachedRef = useRef(false);
  const fontFamilyRef = useRef(fontFamily);
  const fontSizeRef = useRef(fontSize);
  const zoomLevelRef = useRef(zoomLevel);

  useEffect(() => {
    fontFamilyRef.current = fontFamily;
  }, [fontFamily]);

  useEffect(() => {
    fontSizeRef.current = fontSize;
  }, [fontSize]);

  useLayoutEffect(() => {
    zoomLevelRef.current = zoomLevel;
  }, [zoomLevel]);

  const getConversationTitle = useEffectEvent(() => conversationTitle);

  useLayoutEffect(() => {
    const themeHost = rootRef.current;
    if (themeHost) {
      applyChromeThemeToElement(themeHost, resolvedChromeTheme, colorScheme);
    }
  }, [resolvedChromeTheme, colorScheme]);

  useEffect(() => {
    const terminal = terminalRef.current;
    const themeHost = rootRef.current;
    if (!terminal || !themeHost) {
      return;
    }
    terminal.options.theme = readTerminalThemeFromCss(themeHost);
    if (terminal.rows > 0) {
      terminal.refresh(0, terminal.rows - 1);
    }
  }, [resolvedChromeTheme, colorScheme]);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (!terminal) {
      return;
    }
    let cancelled = false;
    void (async () => {
      await ensureTerminalFontLoaded(primaryFontFamily, fontSize);
      if (cancelled) {
        return;
      }
      terminal.options.fontFamily = fontFamily;
      terminal.options.fontSize = fontSize;
      requestAnimationFrame(() => {
        const current = terminalRef.current;
        if (!current || current !== terminal) {
          return;
        }
        const fitAddon = fitAddonRef.current;
        const activeSessionId = sessionIdRef.current;
        if (fitAddon && activeSessionId) {
          if (attachedRef.current) {
            fitAndResizeTerminal(current, fitAddon, activeSessionId);
          } else {
            fitAddon.fit();
          }
        }
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [fontFamily, fontSize, primaryFontFamily]);

  useEffect(() => {
    const terminalHost = terminalHostRef.current;
    const themeHost = rootRef.current;
    if (!terminalHost || !themeHost) {
      return;
    }
    const conversationTitleForSession = getConversationTitle();
    const resolvedSessionId =
      sessionId ??
      terminalSessionManager.create({
        conversationId,
        conversationTitle: conversationTitleForSession,
        hostId: hostId ?? null,
        cwd: cwd ?? null,
      });
    sessionIdRef.current = resolvedSessionId;
    attachedRef.current = false;
    let disposed = false;
    const terminal = new Terminal({
      allowTransparency: true,
      cursorStyle: "bar",
      fontSize: fontSizeRef.current,
      allowProposedApi: true,
      cursorBlink: true,
      fontFamily: fontFamilyRef.current,
      letterSpacing: 0,
      lineHeight: 1.2,
      linkHandler: terminalLinkHandler,
      theme: readTerminalThemeFromCss(themeHost),
    });
    let scrollFrame: number | null = null;
    const scheduleScrollToBottom = () => {
      scrollFrame ??= requestAnimationFrame(() => {
        scrollFrame = null;
        terminal.scrollToBottom();
      });
    };
    terminalRef.current = terminal;
    const clipboardAddon = new ClipboardAddon();
    const fitAddon = new FitAddon();
    fitAddonRef.current = fitAddon;
    terminal.loadAddon(clipboardAddon);
    terminal.loadAddon(fitAddon);
    terminal.loadAddon(new WebLinksAddon(activateTerminalLink));
    terminal.attachCustomKeyEventHandler((event) =>
      handleTerminalKeyEvent({
        clipboard:
          typeof navigator !== "undefined" &&
          navigator.clipboard != null &&
          isNonMacOs
            ? navigator.clipboard
            : undefined,
        event,
        onNewTerminalTab,
        pasteOnCtrlV: platform === "windows",
        sendText: (text) => {
          terminalSessionManager.write(resolvedSessionId, text);
        },
        term: terminal,
      }),
    );
    terminal.open(terminalHost);
    const disposeMousePatch = patchTerminalMouseCoordsForZoom(
      terminal,
      () => zoomLevelRef.current,
    );
    const fitTerminal = () => {
      if (disposed || !terminalHost.isConnected) {
        return;
      }
      requestAnimationFrame(() => {
        if (disposed || !terminalHost.isConnected) {
          return;
        }
        if (attachedRef.current) {
          fitAndResizeTerminal(terminal, fitAddon, resolvedSessionId);
        } else {
          fitAddon.fit();
        }
      });
    };
    fitTerminal();
    const unregister = terminalSessionManager.register(resolvedSessionId, {
      onClearActive: () => {
        if (themeHost.contains(document.activeElement)) {
          terminal.clear();
        }
      },
      onInitLog: (data: string) => {
        const atBottom = isTerminalScrolledToBottom(terminal);
        terminal.reset();
        terminal.write(data);
        if (atBottom) {
          scheduleScrollToBottom();
        }
      },
      onData: (data: string) => {
        const atBottom = isTerminalScrolledToBottom(terminal);
        terminal.write(data);
        if (atBottom) {
          scheduleScrollToBottom();
        }
      },
      onAttach: () => {
        if (!disposed) {
          attachedRef.current = true;
          fitTerminal();
        }
      },
    });
    const dataSubscription = terminal.onData((data) => {
      terminalSessionManager.write(resolvedSessionId, data);
    });
    const titleSubscription = terminal.onTitleChange((title) => {
      terminalSessionManager.setTitle(resolvedSessionId, title);
    });
    const keySubscription = terminal.onKey(handleTerminalEnterKey);
    if (sessionId && !terminalSessionManager.isSessionStarted(sessionId)) {
      requestAnimationFrame(() => {
        if (!disposed) {
          terminalSessionManager.create({
            sessionId,
            conversationId,
            conversationTitle: conversationTitleForSession,
            hostId: hostId ?? null,
            cwd: cwd ?? null,
            cols: terminal.cols,
            rows: terminal.rows,
          });
        }
      });
    }
    const resizeObserver = new ResizeObserver(() => {
      fitTerminal();
    });
    resizeObserver.observe(terminalHost);
    return () => {
      disposed = true;
      if (scrollFrame != null) {
        cancelAnimationFrame(scrollFrame);
        scrollFrame = null;
      }
      resizeObserver.disconnect();
      dataSubscription.dispose();
      titleSubscription.dispose();
      keySubscription.dispose();
      unregister();
      fitAddonRef.current = null;
      sessionIdRef.current = null;
      attachedRef.current = false;
      if (!sessionId) {
        terminalSessionManager.close(resolvedSessionId);
      }
      disposeMousePatch();
      terminal.dispose();
      terminalRef.current = null;
    };
  }, [
    conversationId,
    cwd,
    hostId,
    onNewTerminalTab,
    platform,
    sessionId,
    isNonMacOs,
  ]);

  const panelId = sessionId == null ? undefined : `terminal-panel-${sessionId}`;
  const rootStyle = {
    backgroundColor: "var(--vscode-terminal-background)",
    color: "var(--vscode-terminal-foreground)",
  };
  return (
    <div
      id={panelId}
      data-codex-terminal={true}
      data-codex-xterm={true}
      ref={rootRef}
      className="relative flex h-full w-full flex-col app-theme"
      style={rootStyle}
    >
      <div className="flex-1 overflow-hidden pb-3 pl-4 tracking-normal">
        <div className="h-full w-full overflow-hidden" ref={terminalHostRef} />
      </div>
    </div>
  );
}

function handleTerminalEnterKey(event: { domEvent: KeyboardEvent }): void {
  if (event.domEvent.key === "Enter") {
    requestGitIndexChangeCheck();
  }
}
