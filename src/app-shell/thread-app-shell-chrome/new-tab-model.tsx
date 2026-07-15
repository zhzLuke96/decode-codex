// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Builds side and bottom panel New tab actions plus the dropdown menu body.
import type { ReactNode } from "react";
import {
  BrowserPanelIcon,
  FilePanelIcon,
  ReviewPanelIcon,
  SideChatPanelIcon,
  TerminalPanelIcon,
  TimelinePanelIcon,
} from "./icons";
import {
  getArtifactDisplayTitle,
  getArtifactStableKey,
  isModifiedClick,
  ThreadPanelArtifactIcon,
} from "./artifacts";
import type {
  OutputArtifact,
  ThreadPanelAction,
  ThreadPanelNewTabModel,
  ThreadPanelNewTabModelOptions,
} from "./types";

const gitPanelActionSortOrder = {
  review: 0,
  terminal: 1,
  browser: 2,
  "open-file": 3,
} as const;

interface LocalizedLabelProps {
  children: ReactNode;
  id: string;
}

function LocalizedLabel({ children, id }: LocalizedLabelProps) {
  return <span data-message-id={id}>{children}</span>;
}

export function buildThreadPanelNewTabModel({
  canOpenBrowser = true,
  canOpenFiles = true,
  canOpenReview = false,
  canOpenSideChat = true,
  canOpenTerminal = true,
  canOpenTimeline = false,
  hasOutputArtifacts,
  mcpActions = [],
  onClose,
  onOpenArtifact,
  onOpenBrowserTab,
  onOpenFilePanel,
  onOpenReviewTab,
  onOpenSideChat,
  onOpenTerminal,
  onOpenTimeline,
  outputArtifacts = [],
  target,
}: ThreadPanelNewTabModelOptions): ThreadPanelNewTabModel {
  const closeAfterSelect = () => onClose?.();
  const selectSideChat = async () => {
    await onOpenSideChat?.();
    closeAfterSelect();
  };
  const selectBrowser = () => {
    onOpenBrowserTab?.(target);
    closeAfterSelect();
  };
  const selectReview = () => {
    onOpenReviewTab?.();
    closeAfterSelect();
  };
  const selectOpenFiles = () => {
    onOpenFilePanel?.();
    closeAfterSelect();
  };
  const selectTerminal = () => {
    onOpenTerminal?.(target);
    closeAfterSelect();
  };
  const selectTimeline = () => {
    onOpenTimeline?.();
    closeAfterSelect();
  };
  const actions: ThreadPanelAction[] = [
    ...(canOpenFiles
      ? [
          {
            deferSelectionUntilDropdownClose: true,
            id: "open-file",
            icon: <FilePanelIcon className="icon-xs" />,
            onSelect: selectOpenFiles,
            title: (
              <LocalizedLabel id="thread.sidePanel.openFile">
                Files
              </LocalizedLabel>
            ),
          },
        ]
      : []),
    ...(canOpenSideChat
      ? [
          {
            id: "side-chat",
            icon: <SideChatPanelIcon className="icon-xs" />,
            onSelect: selectSideChat,
            title: (
              <LocalizedLabel id="thread.sidePanel.openSideChat">
                Side chat
              </LocalizedLabel>
            ),
          },
        ]
      : []),
    ...(canOpenBrowser
      ? [
          {
            deferSelectionUntilDropdownClose: true,
            id: "browser",
            icon: <BrowserPanelIcon className="icon-xs" />,
            onSelect: selectBrowser,
            title: (
              <LocalizedLabel id="thread.sidePanel.openBrowserTab">
                Browser
              </LocalizedLabel>
            ),
          },
        ]
      : []),
    ...(canOpenReview
      ? [
          {
            id: "review",
            icon: <ReviewPanelIcon className="icon-xs" />,
            onSelect: selectReview,
            title: (
              <LocalizedLabel id="thread.sidePanel.openReviewTab">
                Review
              </LocalizedLabel>
            ),
          },
        ]
      : []),
    ...(canOpenTimeline
      ? [
          {
            id: "timeline",
            icon: <TimelinePanelIcon className="icon-xs" />,
            onSelect: selectTimeline,
            title: (
              <LocalizedLabel id="thread.sidePanel.newTab.timeline.title">
                History
              </LocalizedLabel>
            ),
          },
        ]
      : []),
    ...(target === "right" ? mcpActions : []),
    ...(canOpenTerminal
      ? [
          {
            id: "terminal",
            icon: <TerminalPanelIcon className="icon-xs" />,
            onSelect: selectTerminal,
            title: (
              <LocalizedLabel id="thread.sidePanel.newTab.terminal.title">
                Terminal
              </LocalizedLabel>
            ),
          },
        ]
      : []),
  ];

  return {
    actions: sortPanelActions(actions),
    hasOutputArtifacts: hasOutputArtifacts ?? outputArtifacts.length > 0,
    onOpenArtifact: (artifact, event) => {
      onOpenArtifact?.(artifact, event);
      closeAfterSelect();
    },
    outputArtifacts,
  };
}

export interface ThreadPanelNewTabMenuContentProps {
  actions: readonly ThreadPanelAction[];
  hasOutputArtifacts: boolean;
  onActionSelect: (action: ThreadPanelAction) => void;
  onOpenArtifact: ThreadPanelNewTabModel["onOpenArtifact"];
  outputArtifacts: readonly OutputArtifact[];
}

export function ThreadPanelNewTabMenuContent({
  actions,
  hasOutputArtifacts,
  onActionSelect,
  onOpenArtifact,
  outputArtifacts,
}: ThreadPanelNewTabMenuContentProps) {
  const shouldShowArtifacts = hasOutputArtifacts && outputArtifacts.length > 0;

  if (actions.length === 0 && !shouldShowArtifacts) {
    return (
      <div className="px-3 py-2 text-sm text-token-text-secondary">
        <LocalizedLabel id="thread.sidePanel.newTab.empty">
          No tabs are available for this thread
        </LocalizedLabel>
      </div>
    );
  }

  return (
    <>
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          className="flex min-h-8 w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-token-list-hover-background"
          onClick={() => onActionSelect(action)}
        >
          <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
            {action.mcpServerIcon ?? action.icon}
          </span>
          <span className="min-w-0 flex-1 truncate">{action.title}</span>
          {action.keyboardShortcut ? (
            <span className="shrink-0 text-token-text-tertiary">
              {action.keyboardShortcut}
            </span>
          ) : null}
        </button>
      ))}
      {shouldShowArtifacts ? (
        <>
          {actions.length > 0 ? (
            <div className="my-1 h-px bg-token-border-light" />
          ) : null}
          <div className="px-2 py-1 text-xs font-medium text-token-text-tertiary">
            <LocalizedLabel id="thread.sidePanel.newTab.suggested.heading">
              Suggested
            </LocalizedLabel>
          </div>
          {outputArtifacts.map((artifact) => (
            <button
              key={getArtifactStableKey(artifact)}
              type="button"
              className="flex min-h-8 w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-token-list-hover-background"
              onClick={(event) => onOpenArtifact(artifact, event)}
              onAuxClick={(event) => {
                if (isModifiedClick(event)) onOpenArtifact(artifact, event);
              }}
            >
              <span className="icon-xs flex shrink-0 items-center justify-center text-token-text-secondary">
                <ThreadPanelArtifactIcon
                  artifact={artifact}
                  iconClassName="icon-xs"
                  imageClassName="size-[18px] rounded-sm"
                />
              </span>
              <span className="min-w-0 flex-1 truncate">
                {getArtifactDisplayTitle(artifact)}
              </span>
            </button>
          ))}
        </>
      ) : null}
    </>
  );
}

function sortPanelActions(actions: ThreadPanelAction[]) {
  return [...actions].sort(
    (leftAction, rightAction) =>
      getActionSortOrder(leftAction.id, actions.length) -
      getActionSortOrder(rightAction.id, actions.length),
  );
}

function getActionSortOrder(actionId: string, fallbackOrder: number) {
  return (
    gitPanelActionSortOrder[actionId as keyof typeof gitPanelActionSortOrder] ??
    fallbackOrder
  );
}
