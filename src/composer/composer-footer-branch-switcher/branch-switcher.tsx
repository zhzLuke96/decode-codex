// Restored from ref/webview/assets/composer-footer-branch-switcher-GaN7fzcq.js
// Composer footer dropdown for selecting the branch or local working tree state.
import React, {
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { ComposerFooterProjectButton } from "../project-selector";
import {
  BranchIcon,
  CheckIcon,
  ComposerFooterBranchBadge,
  LocalChangesBranchIcon,
  SpinnerIcon,
} from "./branch-badge";
import type { ComposerFooterBranchSwitcherProps } from "./types";

const DEFAULT_BRANCH_NAME = "main";

export function ComposerFooterBranchSwitcher({
  startingState,
  setStartingState,
  className,
  side = "top",
  gitRootOverride,
  branchSource,
  currentBranch,
  defaultBranch,
  remoteDefaultBranch,
  recentBranches,
  searchedBranches,
  localChangesCount = 0,
  isCurrentBranchLoading = false,
  isFetchingBranches = false,
  onOpenChange,
}: ComposerFooterBranchSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const isWorktreeSource = branchSource === "worktree" || !!gitRootOverride;
  const selectedBranch =
    startingState.type === "branch" ? startingState.branchName : undefined;
  const fallbackBranch =
    currentBranch ??
    defaultBranch ??
    remoteDefaultBranch ??
    DEFAULT_BRANCH_NAME;
  const preferredDefaultBranch =
    isWorktreeSource && defaultBranch != null
      ? defaultBranch
      : (remoteDefaultBranch ?? defaultBranch ?? DEFAULT_BRANCH_NAME);
  const branchQuery = searchText.trim().toLowerCase();
  const hasBranchQuery = branchQuery.length > 0;
  const orderedBranches = buildBranchList({
    currentBranch,
    defaultBranch: preferredDefaultBranch,
    recentBranches,
    searchedBranches: hasBranchQuery ? searchedBranches : undefined,
  });
  const visibleBranches = (
    hasBranchQuery ? (searchedBranches ?? orderedBranches) : orderedBranches
  ).filter((branch) => branch.toLowerCase().includes(branchQuery));
  const hasLocalChanges = localChangesCount > 0;
  const canUseWorkingTree = isWorktreeSource && hasLocalChanges;
  const showDefaultBranch =
    !hasBranchQuery ||
    preferredDefaultBranch.toLowerCase().includes(branchQuery);
  const nonDefaultBranches = visibleBranches.filter(
    (branch) => branch !== preferredDefaultBranch,
  );
  const displayValue =
    startingState.type === "working-tree" && hasLocalChanges
      ? "Use local changes"
      : (selectedBranch ?? fallbackBranch);

  const setMenuOpen = (nextOpen: boolean) => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
    if (!nextOpen) setSearchText("");
  };
  const selectBranch = (branchName: string) => {
    setStartingState({
      type: "branch",
      branchName,
    });
    setMenuOpen(false);
  };
  const selectWorkingTree = () => {
    setStartingState({
      type: "working-tree",
    });
    setMenuOpen(false);
  };
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };
  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") setMenuOpen(false);
  };
  const trigger = (
    <button
      type="button"
      className="text-left"
      aria-expanded={open}
      data-side={side}
      onClick={() => setMenuOpen(!open)}
    >
      <ComposerFooterProjectButton
        categoryLabel="Starting from"
        className={clsx("whitespace-nowrap", className)}
        collapse="secondary"
        icon={
          <ComposerFooterBranchBadge
            borderColor="border-token-side-bar-background"
            badgeEnabled={
              startingState.type === "working-tree" && hasLocalChanges
            }
          >
            <BranchIcon className="icon-xs" />
          </ComposerFooterBranchBadge>
        }
        indicator="collapsible-chevron"
        value={displayValue}
        valueClassName="max-w-40"
      />
    </button>
  );

  if (!open) return trigger;

  return (
    <div className="relative inline-flex flex-col gap-1.5">
      {trigger}
      <div className="absolute bottom-full z-50 mb-2 flex w-72 flex-col gap-1.5 overflow-hidden rounded-xl border border-token-border bg-token-dropdown-background p-2 shadow-lg">
        <label className="sr-only" htmlFor="composer-branch-search">
          Search branches
        </label>
        <input
          id="composer-branch-search"
          className="h-9 rounded-lg border border-token-border bg-transparent px-2.5 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground"
          placeholder="Search branches"
          value={searchText}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyDown}
        />
        <div className="vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-1.5 overflow-y-auto">
          {canUseWorkingTree ? (
            <BranchMenuSection title="Local file state">
              <BranchMenuItem
                icon={<LocalChangesBranchIcon className="icon-xs" />}
                selected={startingState.type === "working-tree"}
                onClick={selectWorkingTree}
              >
                {isCurrentBranchLoading
                  ? ""
                  : `${fallbackBranch} with local code changes`}
              </BranchMenuItem>
            </BranchMenuSection>
          ) : null}
          <BranchMenuSection title="Branches">
            <BranchList
              isFetchingBranches={isFetchingBranches}
              nonDefaultBranches={nonDefaultBranches}
              preferredDefaultBranch={preferredDefaultBranch}
              selectedBranch={selectedBranch}
              showDefaultBranch={showDefaultBranch}
              onSelectBranch={selectBranch}
            />
          </BranchMenuSection>
        </div>
      </div>
    </div>
  );
}

export function initComposerFooterBranchSwitcherChunk() {}

function BranchList({
  isFetchingBranches,
  nonDefaultBranches,
  preferredDefaultBranch,
  selectedBranch,
  showDefaultBranch,
  onSelectBranch,
}: {
  isFetchingBranches: boolean;
  nonDefaultBranches: readonly string[];
  preferredDefaultBranch: string;
  selectedBranch?: string;
  showDefaultBranch: boolean;
  onSelectBranch: (branchName: string) => void;
}) {
  if (isFetchingBranches) {
    return (
      <div className="flex h-full items-center justify-center">
        <SpinnerIcon className="icon-xxs animate-spin" />
      </div>
    );
  }

  return (
    <>
      {showDefaultBranch ? (
        <BranchMenuItem
          icon={<BranchIcon className="icon-xs" />}
          selected={selectedBranch === preferredDefaultBranch}
          onClick={() => onSelectBranch(preferredDefaultBranch)}
        >
          {preferredDefaultBranch}
        </BranchMenuItem>
      ) : null}
      {nonDefaultBranches.map((branch) => (
        <BranchMenuItem
          key={branch}
          icon={<BranchIcon className="icon-xs" />}
          selected={branch === selectedBranch}
          onClick={() => onSelectBranch(branch)}
        >
          {branch}
        </BranchMenuItem>
      ))}
    </>
  );
}

function BranchMenuSection({
  children,
  title,
}: {
  children: ReactNode;
  title: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="px-[var(--padding-row-x)] py-1 text-sm text-token-description-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}

function BranchMenuItem({
  children,
  icon,
  selected = false,
  onClick,
}: {
  children: ReactNode;
  icon: ReactNode;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-2 rounded-md px-[var(--padding-row-x)] py-1.5 text-left text-sm text-token-foreground hover:bg-token-list-hover-background"
      onClick={onClick}
    >
      <span className="flex shrink-0 items-center justify-center">{icon}</span>
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {selected ? <CheckIcon className="icon-xs shrink-0" /> : null}
    </button>
  );
}

function buildBranchList({
  currentBranch,
  defaultBranch,
  recentBranches,
  searchedBranches,
}: {
  currentBranch?: string | null;
  defaultBranch?: string | null;
  recentBranches?: readonly string[] | null;
  searchedBranches?: readonly string[] | null;
}): string[] {
  const branches: string[] = [];
  const seen = new Set<string>();
  for (const branch of [
    defaultBranch,
    currentBranch,
    ...(searchedBranches ?? []),
    ...(recentBranches ?? []),
  ]) {
    appendUniqueBranch(branch, branches, seen);
  }
  return branches;
}

function appendUniqueBranch(
  branch: string | null | undefined,
  branches: string[],
  seen: Set<string>,
): void {
  if (!branch || seen.has(branch)) return;
  seen.add(branch);
  branches.push(branch);
}
