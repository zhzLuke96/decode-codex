// Restored from ref/webview/assets/composer-footer-branch-switcher-GaN7fzcq.js
// Shared types for composer footer branch controls.
import type { ReactNode } from "react";

export type ComposerStartingState =
  | {
      type: "branch";
      branchName: string;
    }
  | {
      type: "working-tree";
    };

export type ComposerFooterBranchSwitcherProps = {
  startingState: ComposerStartingState;
  setStartingState: (startingState: ComposerStartingState) => void;
  hostConfig?: unknown;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  gitRootOverride?: string | null;
  branchSource?: "remote" | "worktree";
  currentBranch?: string | null;
  defaultBranch?: string | null;
  remoteDefaultBranch?: string | null;
  recentBranches?: readonly string[] | null;
  searchedBranches?: readonly string[] | null;
  localChangesCount?: number;
  isCurrentBranchLoading?: boolean;
  isFetchingBranches?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export type ComposerFooterBranchBadgeProps = {
  children: ReactNode;
  color?: string;
  borderColor?: string;
  badgeEnabled?: boolean;
};

export type BranchSwitcherRenderProps = {
  currentBranch?: string | null;
  disabled?: boolean;
  isPending?: boolean;
  switchTooltipText?: ReactNode;
};

export type IconProps = {
  className?: string;
};
