// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Background-terminal side-panel tab helpers.
import type { ReactElement } from "react";

import type {
  BackgroundTerminalIconProps,
  BackgroundTerminalSidePanelProps,
  BackgroundTerminalTabRequest,
  ThreadSidePanelOpenOptions,
} from "./types";

export function BackgroundTerminalIcon(
  props: BackgroundTerminalIconProps,
): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="currentColor"
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M5.693 11.056a2.71 2.71 0 0 1 2.432 2.694l-.015.277a2.71 2.71 0 0 1-2.694 2.432l-.276-.015a2.71 2.71 0 0 1-2.418-2.417l-.014-.277a2.709 2.709 0 0 1 2.708-2.708l.277.014Zm-.277 1.316a1.378 1.378 0 1 0 0 2.757 1.378 1.378 0 0 0 0-2.757Zm11.384.727a.665.665 0 0 1 0 1.302l-.134.014h-5.833a.665.665 0 0 1 0-1.33h5.833l.135.014ZM5.693 3.556A2.71 2.71 0 0 1 8.125 6.25l-.015.277A2.71 2.71 0 0 1 5.416 8.96l-.276-.015a2.71 2.71 0 0 1-2.418-2.417l-.014-.277a2.709 2.709 0 0 1 2.708-2.708l.277.014Zm-.277 1.316a1.378 1.378 0 1 0 .001 2.757 1.378 1.378 0 0 0-.001-2.757Zm11.384.727a.665.665 0 0 1 0 1.302l-.134.014h-5.833a.665.665 0 0 1 0-1.33h5.833l.135.014Z" />
    </svg>
  );
}

export function BackgroundTerminalSidePanelContent({
  output,
}: BackgroundTerminalSidePanelProps): ReactElement {
  return (
    <div className="h-full min-h-0 bg-token-main-surface-primary">
      {output != null && output.length > 0 ? (
        <pre className="font-vscode-editor text-size-code-sm h-full overflow-auto whitespace-pre-wrap p-4 text-token-foreground">
          {output}
        </pre>
      ) : (
        <div className="font-vscode-editor text-size-code-sm p-4 text-token-description-foreground">
          No output yet
        </div>
      )}
    </div>
  );
}

export function createBackgroundTerminalSidePanelTab({
  backgroundTerminal,
  conversationId,
  fallbackTitle,
}: Omit<BackgroundTerminalTabRequest, "scope">): ThreadSidePanelOpenOptions {
  return {
    icon: <BackgroundTerminalIcon className="icon-xs shrink-0" />,
    id: getBackgroundTerminalSidePanelTabId(
      conversationId,
      backgroundTerminal.id,
    ),
    props: {
      conversationId,
      terminalId: backgroundTerminal.id,
    },
    title:
      backgroundTerminal.command.length > 0
        ? backgroundTerminal.command
        : fallbackTitle,
  };
}

export function openBackgroundTerminalSidePanelTab({
  scope,
  backgroundTerminal,
  conversationId,
  fallbackTitle,
}: BackgroundTerminalTabRequest) {
  const tab = createBackgroundTerminalSidePanelTab({
    backgroundTerminal,
    conversationId,
    fallbackTitle,
  });
  const openTab = scope.openTab ?? scope.sidePanel?.openTab;
  openTab?.(BackgroundTerminalSidePanelContent, tab);
  return tab;
}

function getBackgroundTerminalSidePanelTabId(
  conversationId: string,
  terminalId: string,
) {
  return `background-terminal:${conversationId}:${terminalId}`;
}

export function initBackgroundTerminalIconChunk() {}

export function initBackgroundTerminalSidePanelTabChunk() {}
