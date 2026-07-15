// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public props for the turn content renderer.

import type { ReactNode } from "react";
import type { TurnItem } from "./partition-turn-items";

export interface TurnSection {
  key: string;
  node: ReactNode;
  canOwnLatestTurnFollowContent: boolean;
  gapAfter?: number;
}

export interface PushSectionOptions {
  canOwnLatestTurnFollowContent?: boolean;
  gapAfter?: number;
}

export interface TurnContentProps {
  conversationId: string;
  hostId: string;
  turnSearchKey?: string;
  turnId?: string;
  mcpTurn?: Record<string, any> | null;
  turn: {
    status: string;
    items: TurnItem[];
    cwd?: string | null;
    hookRuns?: unknown;
    [key: string]: unknown;
  };
  isBackgroundSubagentsEnabled?: boolean;
  workedDurationMs?: number | null;
  interruptedByThisClient?: boolean;
  conversationDetailLevel?: string;
  cwd: string | null;
  isMostRecentTurn?: boolean;
  isReadOnly?: boolean;
  previousTurnNumber?: number | null;
  totalTurnCount?: number;
  isProjectlessConversation?: boolean;
  projectlessOutputDirectory?: string | null;
  isCollapsed?: boolean | null;
  onSetCollapsed?: (collapsed: boolean) => void;
  emptyUserMessageOverride?: ReactNode;
  parentThreadAttachment?: unknown;
  resolvedApps?: unknown;
  renderMcpApps?: boolean;
  keepMcpAppEntriesPersistent?: boolean;
  reportEntityType?: string;
  shouldAutoExpandMcpApps?: boolean;
  onEditUserMessage?: (...args: unknown[]) => void;
  onForkTurn?: (...args: unknown[]) => void;
  completedThreadGoal?: unknown;
  generatedImages?: unknown;
  startAfterTurnIntro?: boolean;
  showInProgressFixedContent?: boolean;
  deferOffscreenDiffRendering?: boolean;
  modelProvider?: unknown;
  transcriptBlock?: unknown;
  includeTranscriptTurnExtras?: boolean;
  latestTurnFollowContentRef?: unknown;
  onOpenAeonDetails?: (...args: unknown[]) => void;
  showFullTranscript?: boolean;
}
