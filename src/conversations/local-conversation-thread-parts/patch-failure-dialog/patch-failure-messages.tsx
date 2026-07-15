// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import { FormattedMessage } from "../../../vendor/react-intl";
import type {
  PatchFailureDescriptionProps,
  PatchFailureMessageProps,
} from "./types";

export function PatchFailureTitle({
  action,
  result,
}: PatchFailureMessageProps) {
  if (result.errorCode === "not-git-repo") {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.revertPatchNotGitRepo"
        defaultMessage="Undo requires a Git repository"
        description="Dialog title shown when trying to undo a diff outside a Git repository"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.reapplyPatchNotGitRepo"
        defaultMessage="Reapply requires a Git repository"
        description="Dialog title shown when trying to reapply a diff outside a Git repository"
      />
    );
  }
  if (result.appliedPaths.length > 0) {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.revertPatchPartial"
        defaultMessage="Some changes reverted"
        description="Dialog title shown when reverting a diff partially succeeds"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.reapplyPatchPartial"
        defaultMessage="Some changes reapplied"
        description="Dialog title shown when reapplying a diff partially succeeds"
      />
    );
  }
  if (result.skippedPaths.length > 0 && result.conflictedPaths.length === 0) {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.revertPatchNoChanges"
        defaultMessage="No changes reverted"
        description="Dialog title shown when reverting a diff made no changes"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.reapplyPatchNoChanges"
        defaultMessage="No changes reapplied"
        description="Dialog title shown when reapplying a diff made no changes"
      />
    );
  }
  return action === "undo" ? (
    <FormattedMessage
      id="codex.unifiedDiff.revertPatchError"
      defaultMessage="Failed to revert changes"
      description="Dialog title shown when reverting a diff fails"
    />
  ) : (
    <FormattedMessage
      id="codex.unifiedDiff.reapplyPatchError"
      defaultMessage="Failed to reapply changes"
      description="Dialog title shown when reapplying a diff fails"
    />
  );
}

export function PatchFailureDescription({
  action,
  result,
  hasAnyPaths,
  fallbackErrorLine,
}: PatchFailureDescriptionProps) {
  if (result.errorCode === "not-git-repo") {
    return (
      <FormattedMessage
        id="codex.unifiedDiff.patchNotGitRepoDescription"
        defaultMessage="This action only works when running in a Git repository."
        description="Dialog description shown when patch apply/revert is attempted outside a Git repository"
      />
    );
  }
  if (hasAnyPaths) {
    return action === "undo" ? (
      <FormattedMessage
        id="codex.unifiedDiff.patchFailureDetailsIntroRevert"
        defaultMessage="There were issues reverting some files"
        description="Intro text for the patch action failure dialog when file details are available"
      />
    ) : (
      <FormattedMessage
        id="codex.unifiedDiff.patchFailureDetailsIntroReapply"
        defaultMessage="There were issues reapplying some files"
        description="Intro text for the patch action failure dialog when file details are available"
      />
    );
  }
  if (fallbackErrorLine) {
    return (
      <FormattedMessage
        id="codex.unifiedDiff.patchErrorOutputSummary"
        defaultMessage="Git apply error: {message}"
        description="Dialog details showing a short git apply error line when file-level patch details are unavailable"
        values={{ message: fallbackErrorLine }}
      />
    );
  }
  return (
    <FormattedMessage
      id="codex.unifiedDiff.patchFailureNoDetails"
      defaultMessage="No file details were returned for this patch action."
      description="Fallback dialog text when patch action fails without file details"
    />
  );
}
