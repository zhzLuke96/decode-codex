// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSearchMessageDescriptor } from "../types";

export const gitSettingsSearchMessages = [
  {
    defaultMessage: "Branch prefix",
    id: "settings.git.branchPrefix.ariaLabel",
  },
  {
    defaultMessage: "Prefix used when creating new branches in Codex",
    id: "settings.git.branchPrefix.description",
  },
  {
    defaultMessage: "Branch prefix",
    id: "settings.git.branchPrefix.label",
  },
  {
    defaultMessage: "codex/",
    id: "settings.git.branchPrefix.placeholder",
  },
  {
    defaultMessage: "Failed to save branch prefix",
    id: "settings.git.branchPrefix.save.error",
  },
  {
    defaultMessage: "Saved branch prefix",
    id: "settings.git.branchPrefix.save.success",
  },
  {
    defaultMessage: "Commit instructions",
    id: "settings.git.commitInstructions.ariaLabel",
  },
  {
    defaultMessage: "Added to commit message generation prompts",
    id: "settings.git.commitInstructions.description",
  },
  {
    defaultMessage: "Commit instructions",
    id: "settings.git.commitInstructions.label",
  },
  {
    defaultMessage: "Add commit message guidance…",
    id: "settings.git.commitInstructions.placeholder",
  },
  {
    defaultMessage: "Save",
    id: "settings.git.commitInstructions.save",
  },
  {
    defaultMessage: "Failed to save commit instructions",
    id: "settings.git.commitInstructions.save.error",
  },
  {
    defaultMessage: "Saved commit instructions",
    id: "settings.git.commitInstructions.save.success",
  },
  {
    defaultMessage: "Create draft pull requests",
    id: "settings.git.createDraftPullRequest.ariaLabel",
  },
  {
    defaultMessage:
      "Use draft pull requests by default when creating PRs from Codex",
    id: "settings.git.createDraftPullRequest.description",
  },
  {
    defaultMessage: "Create draft pull requests",
    id: "settings.git.createDraftPullRequest.label",
  },
  {
    defaultMessage: "Create draft pull requests disabled",
    id: "settings.git.createDraftPullRequest.save.disabled",
  },
  {
    defaultMessage: "Create draft pull requests enabled",
    id: "settings.git.createDraftPullRequest.save.enabled",
  },
  {
    defaultMessage: "Failed to save draft pull request setting",
    id: "settings.git.createDraftPullRequest.save.error",
  },
  {
    defaultMessage: "Always force push",
    id: "settings.git.forcePush.ariaLabel",
  },
  {
    defaultMessage: "Use --force-with-lease when pushing from Codex",
    id: "settings.git.forcePush.description",
  },
  {
    defaultMessage: "Always force push",
    id: "settings.git.forcePush.label",
  },
  {
    defaultMessage: "Always force push disabled",
    id: "settings.git.forcePush.save.disabled",
  },
  {
    defaultMessage: "Always force push enabled",
    id: "settings.git.forcePush.save.enabled",
  },
  {
    defaultMessage: "Failed to save force push setting",
    id: "settings.git.forcePush.save.error",
  },
  {
    defaultMessage: "Pull request instructions",
    id: "settings.git.prInstructions.ariaLabel",
  },
  {
    defaultMessage: "Added to PR title/description generation prompts",
    id: "settings.git.prInstructions.description",
  },
  {
    defaultMessage: "Pull request instructions",
    id: "settings.git.prInstructions.label",
  },
  {
    defaultMessage: "Add pull request guidance…",
    id: "settings.git.prInstructions.placeholder",
  },
  {
    defaultMessage: "Save",
    id: "settings.git.prInstructions.save",
  },
  {
    defaultMessage: "Failed to save pull request instructions",
    id: "settings.git.prInstructions.save.error",
  },
  {
    defaultMessage: "Saved pull request instructions",
    id: "settings.git.prInstructions.save.success",
  },
  {
    defaultMessage: "Pull request merge method",
    id: "settings.git.pullRequestMergeMethod.ariaLabel",
  },
  {
    defaultMessage: "Choose how Codex merges pull requests",
    id: "settings.git.pullRequestMergeMethod.description",
  },
  {
    defaultMessage: "Pull request merge method",
    id: "settings.git.pullRequestMergeMethod.label",
  },
  {
    defaultMessage: "Merge",
    id: "settings.git.pullRequestMergeMethod.merge",
  },
  {
    defaultMessage: "Failed to save pull request merge method",
    id: "settings.git.pullRequestMergeMethod.save.error",
  },
  {
    defaultMessage: "Saved pull request merge method",
    id: "settings.git.pullRequestMergeMethod.save.success",
  },
  {
    defaultMessage: "Squash",
    id: "settings.git.pullRequestMergeMethod.squash",
  },
  {
    defaultMessage: "Automatically delete old worktrees",
    id: "settings.worktrees.autoCleanup.ariaLabel",
  },
  {
    defaultMessage:
      "We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and Codex will stop deleting them automatically.",
    id: "settings.worktrees.autoCleanup.confirm.body",
  },
  {
    defaultMessage: "Keep automatic deletion",
    id: "settings.worktrees.autoCleanup.confirm.cancel",
  },
  {
    defaultMessage: "Disable automatic deletion",
    id: "settings.worktrees.autoCleanup.confirm.confirm",
  },
  {
    defaultMessage: "Disable automatic worktree deletion?",
    id: "settings.worktrees.autoCleanup.confirm.title",
  },
  {
    defaultMessage:
      "Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.",
    id: "settings.worktrees.autoCleanup.description",
  },
  {
    defaultMessage: "Automatically delete old worktrees",
    id: "settings.worktrees.autoCleanup.label",
  },
  {
    defaultMessage: "Automatic deletion disabled",
    id: "settings.worktrees.autoCleanup.save.disabled",
  },
  {
    defaultMessage: "Automatic deletion enabled",
    id: "settings.worktrees.autoCleanup.save.enabled",
  },
  {
    defaultMessage: "Failed to save automatic deletion setting",
    id: "settings.worktrees.autoCleanup.save.error",
  },
  {
    defaultMessage: "Auto-delete limit",
    id: "settings.worktrees.keepCount.ariaLabel",
  },
  {
    defaultMessage:
      "Number of Codex worktrees to keep before older ones are pruned automatically. Codex snapshots worktrees before deleting, so pruned worktrees should always be restorable.",
    id: "settings.worktrees.keepCount.description",
  },
  {
    defaultMessage:
      "Automatic deletion is disabled. Codex will not prune old worktrees automatically. Re-enable it to use this saved limit again.",
    id: "settings.worktrees.keepCount.description.disabled",
  },
  {
    defaultMessage: "Auto-delete limit",
    id: "settings.worktrees.keepCount.label",
  },
  {
    defaultMessage: "Failed to save auto-delete limit",
    id: "settings.worktrees.keepCount.save.error",
  },
  {
    defaultMessage: "Saved auto-delete limit",
    id: "settings.worktrees.keepCount.save.success",
  },
] satisfies readonly SettingsSearchMessageDescriptor[];
