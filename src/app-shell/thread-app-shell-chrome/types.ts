// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Shared typed surface for the thread app-shell chrome split modules.
import type { ComponentType, MouseEvent, ReactNode, SVGProps } from "react";

export type ThreadType = "local" | "remote";
export type PanelTarget = "right" | "bottom";
export type IconProps = SVGProps<SVGSVGElement>;
export type IconComponent = ComponentType<IconProps>;

export type OutputArtifact =
  | {
      type: "file" | "generated-image";
      path: string;
    }
  | {
      type: "google-drive";
      title: string;
      url: string;
      resourceKind?: string;
    }
  | {
      type: "appgen-app";
      projectId: string;
      title?: string | null;
      url: string;
    }
  | {
      type: "website";
      target: string;
    };

export interface ThreadPanelAction {
  id: string;
  title: ReactNode;
  icon: ReactNode;
  keyboardShortcut?: string;
  deferSelectionUntilDropdownClose?: boolean;
  mcpServerIcon?: ReactNode;
  onSelect: () => void | Promise<void>;
}

export interface PanelTab {
  tabId: string;
  title?: string | null;
  kind?: string;
  browserConversationId?: string | null;
  browserTabId?: string | null;
}

export interface BrowserTabTitleUpdate {
  browserConversationId: string;
  browserTabId: string;
  existingTabTitle?: string | null;
  fallbackTitle: string;
  target: PanelTarget;
}

export type OpenTargetKind = "editor" | "terminal" | "browser" | "app";

export interface OpenTarget {
  id: string;
  label: string;
  target: string;
  kind?: OpenTargetKind;
  appPath?: string;
  available?: boolean | null;
  hidden?: boolean;
  icon?: string;
  resolvedIcon?: string;
}

export interface OpenTargetRequest {
  appPath?: string;
  openMode: "workspace";
  persistPreferred: boolean;
}

export interface ThreadChromeLabels {
  bottomPanelClose?: ReactNode;
  bottomPanelOpenTab?: ReactNode;
  bottomPanelToggle?: ReactNode;
  emptyBrowserTabTitle?: string;
  localProjectOpen?: ReactNode;
  sidePanelOpenTab?: ReactNode;
  sidePanelToggle?: ReactNode;
}

export interface ThreadPanelAvailability {
  canOpenBrowser?: boolean;
  canOpenFiles?: boolean;
  canOpenReview?: boolean;
  canOpenSideChat?: boolean;
  canOpenTerminal?: boolean;
  canOpenTimeline?: boolean;
  hasOutputArtifacts?: boolean;
  panelsReady?: boolean;
}

export interface ThreadPanelHandlers {
  onCloseBottomPanel?: () => void;
  onOpenArtifact?: (
    artifact: OutputArtifact,
    event?: MouseEvent<HTMLElement>,
  ) => void;
  onOpenBrowserTab?: (target: PanelTarget) => void;
  onOpenFilePanel?: () => void;
  onOpenMcpAction?: (action: ThreadPanelAction, target: PanelTarget) => void;
  onOpenReviewTab?: () => void;
  onOpenSideChat?: () => void | Promise<void>;
  onOpenTarget?: (target: OpenTarget, request: OpenTargetRequest) => void;
  onOpenTerminal?: (target: PanelTarget) => void;
  onOpenTimeline?: () => void;
  onSyncBrowserTabTitle?: (update: BrowserTabTitleUpdate) => void;
  onToggleBottomPanel?: () => void;
  onToggleBottomPanelLauncher?: (visible: boolean) => void;
  onToggleSidePanel?: () => void;
}

export interface ThreadPanelNewTabModelOptions
  extends ThreadPanelAvailability,
    ThreadPanelHandlers {
  mcpActions?: readonly ThreadPanelAction[];
  onClose?: () => void;
  outputArtifacts?: readonly OutputArtifact[];
  target: PanelTarget;
}

export interface ThreadPanelNewTabModel {
  actions: ThreadPanelAction[];
  hasOutputArtifacts: boolean;
  onOpenArtifact: (
    artifact: OutputArtifact,
    event?: MouseEvent<HTMLElement>,
  ) => void;
  outputArtifacts: readonly OutputArtifact[];
}

export interface ThreadAppShellChromeProps
  extends ThreadPanelAvailability,
    ThreadPanelHandlers {
  activeBottomTabId?: string | null;
  activeRightTabId?: string | null;
  bottomPanelLauncherVisible?: boolean;
  bottomPanelOpen?: boolean;
  bottomTabs?: readonly PanelTab[];
  browserConversationId?: string | null;
  className?: string;
  conversationId?: string | null;
  hostDisplayName?: string | null;
  labels?: ThreadChromeLabels;
  mcpActions?: readonly ThreadPanelAction[];
  openTargets?: readonly OpenTarget[];
  outputArtifacts?: readonly OutputArtifact[];
  preferredOpenTargetId?: string | null;
  renderBottomPanelOutlet?: (props: ThreadPanelOutletRenderProps) => ReactNode;
  renderRightPanelOutlet?: (props: ThreadPanelOutletRenderProps) => ReactNode;
  rightPanelOpen?: boolean;
  rightTabs?: readonly PanelTab[];
  showReviewTab?: boolean;
  threadType: ThreadType;
  workspaceRoot?: string | null;
}

export interface ThreadPanelOutletRenderProps {
  activeTabId?: string | null;
  tabs: readonly PanelTab[];
  target: PanelTarget;
}

export interface HeaderPanelToggleButtonProps {
  children: ReactNode;
  color?: "ghost" | "outline";
  disabled?: boolean;
  label: ReactNode;
  onClick?: () => void;
  pressed?: boolean;
  shortcut?: string;
}
