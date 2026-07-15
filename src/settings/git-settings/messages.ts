// Restored from ref/webview/assets/git-settings-Bv6LnZbi.js
// Git settings message descriptors.
import { defineMessages } from "../../vendor/react-intl";
export const gitSettingsMessages = defineMessages({
  branchPrefix: {
    id: "settings.git.branchPrefix.label",
    defaultMessage: "Branch prefix",
    description: "Label for git branch prefix setting",
  },
  branchPrefixDescription: {
    id: "settings.git.branchPrefix.description",
    defaultMessage: "Prefix used when creating new branches in Codex",
    description: "Description for git branch prefix setting",
  },
  branchPrefixPlaceholder: {
    id: "settings.git.branchPrefix.placeholder",
    defaultMessage: "codex/",
    description: "Placeholder for git branch prefix input",
  },
  branchPrefixAriaLabel: {
    id: "settings.git.branchPrefix.ariaLabel",
    defaultMessage: "Branch prefix",
    description: "Aria label for git branch prefix input",
  },
  branchPrefixSaveSuccess: {
    id: "settings.git.branchPrefix.save.success",
    defaultMessage: "Saved branch prefix",
    description: "Toast shown when git branch prefix is saved",
  },
  branchPrefixSaveError: {
    id: "settings.git.branchPrefix.save.error",
    defaultMessage: "Failed to save branch prefix",
    description: "Toast shown when git branch prefix save fails",
  },
  showPullRequestIcons: {
    id: "settings.git.showSidebarPrIcons.label",
    defaultMessage: "Show PR icons in sidebar",
    description: "Label for the sidebar PR icon toggle",
  },
  showPullRequestIconsDescription: {
    id: "settings.git.showSidebarPrIcons.description",
    defaultMessage: "Display PR status icons on chat rows in the sidebar",
    description: "Description for the sidebar PR icon toggle",
  },
  showPullRequestIconsAriaLabel: {
    id: "settings.git.showSidebarPrIcons.ariaLabel",
    defaultMessage: "Show PR icons in sidebar",
    description: "Aria label for the sidebar PR icon toggle",
  },
  showPullRequestIconsEnabled: {
    id: "settings.git.showSidebarPrIcons.save.enabled",
    defaultMessage: "Sidebar PR icons enabled",
    description: "Toast shown when sidebar PR icons are enabled",
  },
  showPullRequestIconsDisabled: {
    id: "settings.git.showSidebarPrIcons.save.disabled",
    defaultMessage: "Sidebar PR icons disabled",
    description: "Toast shown when sidebar PR icons are disabled",
  },
  showPullRequestIconsError: {
    id: "settings.git.showSidebarPrIcons.save.error",
    defaultMessage: "Failed to save sidebar PR icon setting",
    description: "Toast shown when saving the sidebar PR icon setting fails",
  },
  alwaysForcePush: {
    id: "settings.git.forcePush.label",
    defaultMessage: "Always force push",
    description: "Label for always force push toggle",
  },
  alwaysForcePushDescription: {
    id: "settings.git.forcePush.description",
    defaultMessage: "Use --force-with-lease when pushing from Codex",
    description: "Description for always force push toggle",
  },
  alwaysForcePushAriaLabel: {
    id: "settings.git.forcePush.ariaLabel",
    defaultMessage: "Always force push",
    description: "Aria label for always force push toggle",
  },
  alwaysForcePushEnabled: {
    id: "settings.git.forcePush.save.enabled",
    defaultMessage: "Always force push enabled",
    description: "Toast shown when the always force push toggle is enabled",
  },
  alwaysForcePushDisabled: {
    id: "settings.git.forcePush.save.disabled",
    defaultMessage: "Always force push disabled",
    description: "Toast shown when the always force push toggle is disabled",
  },
  alwaysForcePushError: {
    id: "settings.git.forcePush.save.error",
    defaultMessage: "Failed to save force push setting",
    description: "Toast shown when saving the always force push toggle fails",
  },
  createDraftPullRequests: {
    id: "settings.git.createDraftPullRequest.label",
    defaultMessage: "Create draft pull requests",
    description: "Label for create draft pull requests toggle",
  },
  createDraftPullRequestsDescription: {
    id: "settings.git.createDraftPullRequest.description",
    defaultMessage:
      "Use draft pull requests by default when creating PRs from Codex",
    description: "Description for create draft pull requests toggle",
  },
  createDraftPullRequestsAriaLabel: {
    id: "settings.git.createDraftPullRequest.ariaLabel",
    defaultMessage: "Create draft pull requests",
    description: "Aria label for create draft pull requests toggle",
  },
  createDraftPullRequestsEnabled: {
    id: "settings.git.createDraftPullRequest.save.enabled",
    defaultMessage: "Create draft pull requests enabled",
    description: "Toast shown when the draft pull request toggle is enabled",
  },
  createDraftPullRequestsDisabled: {
    id: "settings.git.createDraftPullRequest.save.disabled",
    defaultMessage: "Create draft pull requests disabled",
    description: "Toast shown when the draft pull request toggle is disabled",
  },
  createDraftPullRequestsError: {
    id: "settings.git.createDraftPullRequest.save.error",
    defaultMessage: "Failed to save draft pull request setting",
    description: "Toast shown when saving the draft pull request toggle fails",
  },
  pullRequestMergeMethod: {
    id: "settings.git.pullRequestMergeMethod.label",
    defaultMessage: "Pull request merge method",
    description: "Label for pull request merge method setting",
  },
  pullRequestMergeMethodDescription: {
    id: "settings.git.pullRequestMergeMethod.description",
    defaultMessage: "Choose how Codex merges pull requests",
    description: "Description for pull request merge method setting",
  },
  pullRequestMergeMethodAriaLabel: {
    id: "settings.git.pullRequestMergeMethod.ariaLabel",
    defaultMessage: "Pull request merge method",
    description: "Accessible label for pull request merge method selector",
  },
  pullRequestMergeMethodSaveSuccess: {
    id: "settings.git.pullRequestMergeMethod.save.success",
    defaultMessage: "Saved pull request merge method",
    description:
      "Toast shown when the pull request merge method setting is saved",
  },
  pullRequestMergeMethodSaveError: {
    id: "settings.git.pullRequestMergeMethod.save.error",
    defaultMessage: "Failed to save pull request merge method",
    description:
      "Toast shown when saving the pull request merge method setting fails",
  },
  merge: {
    id: "settings.git.pullRequestMergeMethod.merge",
    defaultMessage: "Merge",
    description: "Merge option for pull request merge method",
  },
  squash: {
    id: "settings.git.pullRequestMergeMethod.squash",
    defaultMessage: "Squash",
    description: "Squash option for pull request merge method",
  },
  commitInstructions: {
    id: "settings.git.commitInstructions.label",
    defaultMessage: "Commit instructions",
    description: "Label for commit instructions",
  },
  commitInstructionsDescription: {
    id: "settings.git.commitInstructions.description",
    defaultMessage: "Added to commit message generation prompts",
    description: "Description for commit instructions",
  },
  commitInstructionsPlaceholder: {
    id: "settings.git.commitInstructions.placeholder",
    defaultMessage: "Add commit message guidance...",
    description: "Placeholder for commit instructions textarea",
  },
  commitInstructionsAriaLabel: {
    id: "settings.git.commitInstructions.ariaLabel",
    defaultMessage: "Commit instructions",
    description: "Aria label for commit instructions textarea",
  },
  commitInstructionsSave: {
    id: "settings.git.commitInstructions.save",
    defaultMessage: "Save",
    description: "Button label to save commit instructions",
  },
  commitInstructionsSaveSuccess: {
    id: "settings.git.commitInstructions.save.success",
    defaultMessage: "Saved commit instructions",
    description: "Toast shown when commit instructions are saved",
  },
  commitInstructionsSaveError: {
    id: "settings.git.commitInstructions.save.error",
    defaultMessage: "Failed to save commit instructions",
    description: "Toast shown when commit instructions save fails",
  },
  pullRequestInstructions: {
    id: "settings.git.prInstructions.label",
    defaultMessage: "Pull request instructions",
    description: "Label for pull request instructions",
  },
  pullRequestInstructionsDescription: {
    id: "settings.git.prInstructions.description",
    defaultMessage: "Added to PR title/description generation prompts",
    description: "Description for pull request instructions",
  },
  pullRequestInstructionsPlaceholder: {
    id: "settings.git.prInstructions.placeholder",
    defaultMessage: "Add pull request guidance...",
    description: "Placeholder for pull request instructions textarea",
  },
  pullRequestInstructionsAriaLabel: {
    id: "settings.git.prInstructions.ariaLabel",
    defaultMessage: "Pull request instructions",
    description: "Aria label for pull request instructions textarea",
  },
  pullRequestInstructionsSave: {
    id: "settings.git.prInstructions.save",
    defaultMessage: "Save",
    description: "Button label to save pull request instructions",
  },
  pullRequestInstructionsSaveSuccess: {
    id: "settings.git.prInstructions.save.success",
    defaultMessage: "Saved pull request instructions",
    description: "Toast shown when pull request instructions are saved",
  },
  pullRequestInstructionsSaveError: {
    id: "settings.git.prInstructions.save.error",
    defaultMessage: "Failed to save pull request instructions",
    description: "Toast shown when pull request instructions save fails",
  },
  automaticWorktreeDeletion: {
    id: "settings.worktrees.autoCleanup.label",
    defaultMessage: "Automatically delete old worktrees",
    description: "Label for the automatic worktree deletion toggle",
  },
  automaticWorktreeDeletionDescription: {
    id: "settings.worktrees.autoCleanup.description",
    defaultMessage:
      "Recommended for most users. Turn this off only if you want to manage old worktrees and disk usage yourself.",
    description: "Description for the automatic worktree deletion toggle",
  },
  automaticWorktreeDeletionAriaLabel: {
    id: "settings.worktrees.autoCleanup.ariaLabel",
    defaultMessage: "Automatically delete old worktrees",
    description: "Aria label for the automatic worktree deletion toggle",
  },
  automaticWorktreeDeletionEnabled: {
    id: "settings.worktrees.autoCleanup.save.enabled",
    defaultMessage: "Automatic deletion enabled",
    description: "Toast shown when automatic worktree deletion is enabled",
  },
  automaticWorktreeDeletionDisabled: {
    id: "settings.worktrees.autoCleanup.save.disabled",
    defaultMessage: "Automatic deletion disabled",
    description: "Toast shown when automatic worktree deletion is disabled",
  },
  automaticWorktreeDeletionError: {
    id: "settings.worktrees.autoCleanup.save.error",
    defaultMessage: "Failed to save automatic deletion setting",
    description:
      "Toast shown when saving the automatic worktree deletion setting fails",
  },
  autoDeleteLimit: {
    id: "settings.worktrees.keepCount.label",
    defaultMessage: "Auto-delete limit",
    description: "Label for the worktree auto-delete limit setting",
  },
  autoDeleteLimitDescription: {
    id: "settings.worktrees.keepCount.description",
    defaultMessage:
      "Number of Codex worktrees to keep before older ones are pruned automatically. Codex snapshots worktrees before deleting, so pruned worktrees should always be restorable.",
    description: "Description for the worktree keep count setting",
  },
  autoDeleteLimitDisabledDescription: {
    id: "settings.worktrees.keepCount.description.disabled",
    defaultMessage:
      "Automatic deletion is disabled. Codex will not prune old worktrees automatically. Re-enable it to use this saved limit again.",
    description:
      "Description for the worktree keep count setting when automatic deletion is disabled",
  },
  autoDeleteLimitAriaLabel: {
    id: "settings.worktrees.keepCount.ariaLabel",
    defaultMessage: "Auto-delete limit",
    description: "Aria label for the worktree auto-delete limit input",
  },
  autoDeleteLimitSaveSuccess: {
    id: "settings.worktrees.keepCount.save.success",
    defaultMessage: "Saved auto-delete limit",
    description: "Toast shown when the worktree auto-delete limit is saved",
  },
  autoDeleteLimitSaveError: {
    id: "settings.worktrees.keepCount.save.error",
    defaultMessage: "Failed to save auto-delete limit",
    description: "Toast shown when saving the worktree auto-delete limit fails",
  },
  disableAutomaticDeletionTitle: {
    id: "settings.worktrees.autoCleanup.confirm.title",
    defaultMessage: "Disable automatic worktree deletion?",
    description:
      "Title for the automatic worktree deletion disable confirmation dialog",
  },
  disableAutomaticDeletionBody: {
    id: "settings.worktrees.autoCleanup.confirm.body",
    defaultMessage:
      "We highly recommend keeping automatic deletion on so old worktrees do not build up and use unnecessary disk space. If you prefer to manage old worktrees yourself, you can turn this off and Codex will stop deleting them automatically.",
    description:
      "Body copy in the automatic worktree deletion disable confirmation dialog",
  },
  keepAutomaticDeletion: {
    id: "settings.worktrees.autoCleanup.confirm.cancel",
    defaultMessage: "Keep automatic deletion",
    description:
      "Cancel button label for the automatic worktree deletion disable confirmation dialog",
  },
  disableAutomaticDeletion: {
    id: "settings.worktrees.autoCleanup.confirm.confirm",
    defaultMessage: "Disable automatic deletion",
    description:
      "Confirm button label for the automatic worktree deletion disable confirmation dialog",
  },
});
