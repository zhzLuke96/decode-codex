// Restored from ref/webview/assets/composer-footer-branch-switcher-GaN7fzcq.js
// Inline composer footer adapter around the shared GitBranchSwitcher.
import React from "react";
import {
  ComposerFooterProjectButton,
  ComposerFooterStaticProjectControl,
} from "../project-selector";
import { GitBranchSwitcher } from "../../git/git-branch-switcher";
import { BranchIcon } from "./branch-badge";
import type { BranchSwitcherRenderProps } from "./types";

export function ComposerFooterInlineBranchSwitcher(
  props: Record<string, unknown>,
) {
  return (
    <GitBranchSwitcher
      {...props}
      renderStaticBranch={renderStaticBranchControl}
      renderControl={renderInteractiveBranchControl}
    />
  );
}

export function initComposerFooterInlineBranchSwitcherChunk() {}

function renderInteractiveBranchControl({
  currentBranch,
  disabled,
  isPending,
  switchTooltipText,
}: BranchSwitcherRenderProps) {
  if (currentBranch == null) return null;

  return (
    <ComposerFooterProjectButton
      categoryLabel="Branch"
      className="px-0"
      collapse="sm"
      disabled={disabled}
      icon={<BranchIcon className="icon-xs" />}
      indicator={isPending ? "pending" : "collapsible-chevron"}
      tooltipContent={switchTooltipText}
      value={currentBranch}
      valueClassName="max-w-40 text-sm"
    />
  );
}

function renderStaticBranchControl({
  currentBranch,
}: BranchSwitcherRenderProps) {
  return (
    <ComposerFooterStaticProjectControl
      categoryLabel="Branch"
      className="text-token-description-foreground"
      collapse="sm"
      icon={<BranchIcon className="icon-xs" />}
      tooltipContent={currentBranch}
      value={currentBranch}
      valueClassName="max-w-40 text-sm"
    />
  );
}
