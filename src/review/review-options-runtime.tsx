// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Shared review option controls and facade icon aliases.
import type { ComponentType } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { DropdownMenu, MenuChrome } from "../ui/dropdown";
import { Tooltip } from "../ui/tooltip-b";
import { CheckCircleIcon } from "../icons/check-circle-icon";
import { CodeIcon } from "../icons/code-icon";
import { CollapseAllLinesIcon } from "../icons/collapse-all-lines-icon";
import { DocumentLinesIcon } from "../icons/document-lines-icon";
import { DocumentSearchIcon } from "../icons/document-search-icon";
import { EllipsisHorizontalIcon } from "../icons/ellipsis-horizontal-icon";
import { ExpandAllLinesIcon } from "../icons/expand-all-lines-icon";
import { GitApplyClipboardIcon } from "../icons/git-apply-clipboard-icon";
import { GitBranchIcon } from "../icons/git-branch-icon";
import { RefreshIcon } from "../icons/refresh-icon";
import { SplitDiffIcon } from "../icons/split-diff-icon";
import { ThreeDotsIcon } from "../icons/three-dots-icon";
import { UnifiedDiffIcon } from "../icons/unified-diff-icon";
import { WhitespaceEyeIcon } from "../icons/whitespace-eye-icon";
import { WordDiffIcon } from "../icons/word-diff-icon";
import { XCircleFilledIcon } from "../icons/x-circle-filled-icon";

type IconComponent = ComponentType<{ className?: string }>;

export const CollapseAllDiffsIcon = CollapseAllLinesIcon;
export const ErrorIcon = XCircleFilledIcon;
export const ExpandAllDiffsIcon = ExpandAllLinesIcon;
export const FileViewerOptionsIcon = ThreeDotsIcon;
export const GitBlameIcon = GitBranchIcon;
export const LoadFullFilesIcon = DocumentLinesIcon;
export const RawOutputIcon = CodeIcon;
export const ReviewOptionsMenuIcon = EllipsisHorizontalIcon;
export { RefreshIcon };
export const RichPreviewDisabledIcon = DocumentSearchIcon;
export const RichPreviewEnabledIcon = CheckCircleIcon;
export const RichViewActiveIcon = CheckCircleIcon;
export const RichViewIcon = DocumentSearchIcon;
export const SplitDiffModeIcon = SplitDiffIcon;
export const UnifiedDiffModeIcon = UnifiedDiffIcon;
export const WordDiffEnabledIcon = WordDiffIcon;

export interface ReviewToolbarIconButtonProps {
  Icon: IconComponent;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  pressed?: boolean;
}

export function ReviewToolbarIconButton({
  Icon,
  label,
  onClick,
  disabled = false,
  pressed = false,
}: ReviewToolbarIconButtonProps) {
  return (
    <Tooltip tooltipContent={label}>
      <Button
        aria-label={label}
        aria-pressed={pressed}
        color={pressed ? "ghostActive" : "ghost"}
        size="toolbar"
        uniform={true}
        onClick={onClick}
        disabled={disabled}
      >
        <Icon className="icon-xs" />
      </Button>
    </Tooltip>
  );
}

export interface ReviewDiffOptionsMenuItemsProps {
  onClose: () => void;
  wordDiffsEnabled: boolean;
  showCopyGitApplyCommand?: boolean;
  showHideWhitespace?: boolean;
  showLoadFullFiles?: boolean;
  copyGitApplyCommandDisabled?: boolean;
  onClickCopyGitApplyCommand?: () => void;
  richPreviewEnabled: boolean;
  onToggleRichPreview: () => void;
  onToggleWordDiffs: () => void;
  hideWhitespace: boolean;
  onToggleHideWhitespace: () => void;
  loadFullFilesEnabled: boolean;
  onToggleLoadFullFiles: () => void;
}

export function ReviewDiffOptionsMenuItems({
  onClose,
  wordDiffsEnabled,
  showCopyGitApplyCommand,
  showHideWhitespace = true,
  showLoadFullFiles = true,
  copyGitApplyCommandDisabled,
  onClickCopyGitApplyCommand,
  richPreviewEnabled,
  onToggleRichPreview,
  onToggleWordDiffs,
  hideWhitespace,
  onToggleHideWhitespace,
  loadFullFilesEnabled,
  onToggleLoadFullFiles,
}: ReviewDiffOptionsMenuItemsProps) {
  const intl = useIntl();
  const richPreviewAriaLabel = richPreviewEnabled
    ? intl.formatMessage({
        id: "codex.diffView.richPreviewDisable",
        defaultMessage: "Disable rich preview",
        description: "Aria label for disabling rich previews in the diff view",
      })
    : intl.formatMessage({
        id: "codex.diffView.richPreviewEnable",
        defaultMessage: "Enable rich preview",
        description: "Aria label for enabling rich previews in the diff view",
      });

  const handleToggleRichPreview = (event: Event) => {
    event.preventDefault();
    onToggleRichPreview();
    onClose();
  };
  const handleToggleWordDiffs = (event: Event) => {
    event.preventDefault();
    onToggleWordDiffs();
    onClose();
  };
  const handleToggleHideWhitespace = (event: Event) => {
    event.preventDefault();
    onToggleHideWhitespace();
    onClose();
  };
  const handleToggleLoadFullFiles = (event: Event) => {
    event.preventDefault();
    onToggleLoadFullFiles();
    onClose();
  };
  const handleCopyGitApplyCommand = (event: Event) => {
    event.preventDefault();
    onClickCopyGitApplyCommand?.();
    onClose();
  };

  const loadFullFilesItem = showLoadFullFiles ? (
    <MenuChrome.Item
      onSelect={handleToggleLoadFullFiles}
      LeftIcon={LoadFullFilesIcon}
    >
      {loadFullFilesEnabled ? (
        <FormattedMessage
          id="codex.review.loadFullFiles.disable"
          defaultMessage="Don't load full files"
          description="Menu item to avoid loading full file contents for partial diffs"
        />
      ) : (
        <FormattedMessage
          id="codex.review.loadFullFiles.enable"
          defaultMessage="Load full files"
          description="Menu item to load full files for partial diffs"
        />
      )}
    </MenuChrome.Item>
  ) : null;

  const richPreviewItem = (
    <MenuChrome.Item
      onSelect={handleToggleRichPreview}
      aria-label={richPreviewAriaLabel}
      LeftIcon={
        richPreviewEnabled ? RichPreviewEnabledIcon : RichPreviewDisabledIcon
      }
    >
      {richPreviewEnabled ? (
        <FormattedMessage
          id="codex.review.richPreview.disable"
          defaultMessage="Disable rich preview"
          description="Menu item to disable rich previews in the diff view"
        />
      ) : (
        <FormattedMessage
          id="codex.review.richPreview.enable"
          defaultMessage="Enable rich preview"
          description="Menu item to enable rich previews in the diff view"
        />
      )}
    </MenuChrome.Item>
  );

  const wordDiffsItem = (
    <MenuChrome.Item
      onSelect={handleToggleWordDiffs}
      LeftIcon={wordDiffsEnabled ? WordDiffEnabledIcon : WordDiffIcon}
    >
      {wordDiffsEnabled ? (
        <FormattedMessage
          id="codex.review.wordDiffs.disable"
          defaultMessage="Disable word diffs"
          description="Menu item to disable word-level diff highlights"
        />
      ) : (
        <FormattedMessage
          id="codex.review.wordDiffs.enable"
          defaultMessage="Enable word diffs"
          description="Menu item to enable word-level diff highlights"
        />
      )}
    </MenuChrome.Item>
  );

  const hideWhitespaceItem = showHideWhitespace ? (
    <MenuChrome.Item
      onSelect={handleToggleHideWhitespace}
      LeftIcon={WhitespaceEyeIcon}
    >
      {hideWhitespace ? (
        <FormattedMessage
          id="codex.review.whitespace.show"
          defaultMessage="Show white space"
          description="Menu item to show whitespace-only diff changes"
        />
      ) : (
        <FormattedMessage
          id="codex.review.whitespace.hide"
          defaultMessage="Hide white space"
          description="Menu item to hide whitespace-only diff changes"
        />
      )}
    </MenuChrome.Item>
  ) : null;

  const copyGitApplyItem = showCopyGitApplyCommand ? (
    <MenuChrome.Item
      onSelect={handleCopyGitApplyCommand}
      disabled={copyGitApplyCommandDisabled || !onClickCopyGitApplyCommand}
      LeftIcon={GitApplyClipboardIcon}
    >
      <FormattedMessage
        id="codex.review.copyGitApplyCommand"
        defaultMessage="Copy git apply command"
        description="Menu item to copy a git apply command"
      />
    </MenuChrome.Item>
  ) : null;

  return (
    <>
      {loadFullFilesItem}
      {richPreviewItem}
      {wordDiffsItem}
      {hideWhitespaceItem}
      {copyGitApplyItem}
    </>
  );
}

export function initReviewOptionsRuntime(): void {
  void DropdownMenu;
}
