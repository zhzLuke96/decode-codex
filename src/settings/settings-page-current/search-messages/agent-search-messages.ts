// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSearchMessageDescriptor } from "../types";

export const agentSearchMessages = [
  {
    defaultMessage: "Open config.toml",
    id: "codex.profileDropdown.openConfigToml",
  },
  {
    defaultMessage: "Open config.toml in WSL environment",
    id: "codex.profileDropdown.openConfigToml.wsl",
  },
  {
    defaultMessage: "Setting up your workspace: {percent}%",
    id: "localConversation.primaryRuntimeInstallStatus.downloading",
  },
  {
    defaultMessage: "Preparing your workspace",
    id: "localConversation.primaryRuntimeInstallStatus.extracting",
  },
  {
    defaultMessage: "Finalizing your workspace",
    id: "localConversation.primaryRuntimeInstallStatus.finalizing",
  },
  {
    defaultMessage: "Can edit files outside this workspace",
    id: "settings-search.literal.0706d841c2a9",
  },
  {
    defaultMessage: "Run without asking for approval",
    id: "settings-search.literal.0a4cfd4e6c98",
  },
  {
    defaultMessage: "Always ask before taking action",
    id: "settings-search.literal.1daedf6160c4",
  },
  {
    defaultMessage: "Ask only when a command fails",
    id: "settings-search.literal.659c55e30053",
  },
  {
    defaultMessage: "Ask when escalation is requested",
    id: "settings-search.literal.68315f933ad7",
  },
  {
    defaultMessage: "Can edit files, but only in this workspace",
    id: "settings-search.literal.9b89ce94db41",
  },
  {
    defaultMessage: "Can read files, but cannot edit them",
    id: "settings-search.literal.a340c8e612a3",
  },
  {
    defaultMessage: "Choose when Codex asks for approval",
    id: "settings.agent.configuration.approval.definition",
  },
  {
    defaultMessage: "Approval policy",
    id: "settings.agent.configuration.approval.label",
  },
  {
    defaultMessage: "Never",
    id: "settings.agent.configuration.approval.option.never",
  },
  {
    defaultMessage: "On failure",
    id: "settings.agent.configuration.approval.option.onFailure",
  },
  {
    defaultMessage: "On request",
    id: "settings.agent.configuration.approval.option.onRequest",
  },
  {
    defaultMessage: "Untrusted",
    id: "settings.agent.configuration.approval.option.untrusted",
  },
  {
    defaultMessage: "Approval policy is restricted by this installation.",
    id: "settings.agent.configuration.approval.restricted",
  },
  {
    defaultMessage: "config.toml",
    id: "settings.agent.configuration.configToml",
  },
  {
    defaultMessage: "Edit your config to customize agent behavior",
    id: "settings.agent.configuration.configToml.description",
  },
  {
    defaultMessage: "Docs",
    id: "settings.agent.configuration.configToml.docs",
  },
  {
    defaultMessage: "Restart Codex after editing to apply changes",
    id: "settings.agent.configuration.configToml.restartNote",
  },
  {
    defaultMessage: "This value is managed by admin policy.",
    id: "settings.agent.configuration.control.managed",
  },
  {
    defaultMessage: "Allow network access",
    id: "settings.agent.configuration.network.ariaLabel",
  },
  {
    defaultMessage:
      "Allow network access when the sandbox is set to workspace write",
    id: "settings.agent.configuration.network.definition",
  },
  {
    defaultMessage: "Allow network access",
    id: "settings.agent.configuration.network.label",
  },
  {
    defaultMessage: "File: {path}{location}",
    id: "settings.agent.configuration.notice.fileContext",
  },
  {
    defaultMessage: " (line {line}, column {column})",
    id: "settings.agent.configuration.notice.fileLocationSuffix",
  },
  {
    defaultMessage: "Open file",
    id: "settings.agent.configuration.notice.openFile",
  },
  {
    defaultMessage: "Choose how much Codex can do when running commands",
    id: "settings.agent.configuration.sandbox.definition",
  },
  {
    defaultMessage: "Sandbox settings",
    id: "settings.agent.configuration.sandbox.label",
  },
  {
    defaultMessage: "Full access",
    id: "settings.agent.configuration.sandbox.option.fullAccess",
  },
  {
    defaultMessage: "Read only",
    id: "settings.agent.configuration.sandbox.option.readOnly",
  },
  {
    defaultMessage: "Workspace write",
    id: "settings.agent.configuration.sandbox.option.workspaceWrite",
  },
  {
    defaultMessage: "Sandbox mode is restricted by this installation.",
    id: "settings.agent.configuration.sandbox.restricted",
  },
  {
    defaultMessage: "Global config",
    id: "settings.agent.configuration.scope.globalGroup",
  },
  {
    defaultMessage: "Loading…",
    id: "settings.agent.configuration.scope.loading",
  },
  {
    defaultMessage: "Admin config",
    id: "settings.agent.configuration.scope.managed",
  },
  {
    defaultMessage: "Managed by admin policy",
    id: "settings.agent.configuration.scope.managedDescription",
  },
  {
    defaultMessage: "Open config.toml",
    id: "settings.agent.configuration.scope.open",
  },
  {
    defaultMessage: "{repoName}",
    id: "settings.agent.configuration.scope.project",
  },
  {
    defaultMessage: "Project config",
    id: "settings.agent.configuration.scope.projectGroup",
  },
  {
    defaultMessage: "This config source cannot be edited here.",
    id: "settings.agent.configuration.scope.readOnly",
  },
  {
    defaultMessage: "Config scope unavailable.",
    id: "settings.agent.configuration.scope.unavailable",
  },
  {
    defaultMessage: "User config",
    id: "settings.agent.configuration.scope.user",
  },
  {
    defaultMessage:
      "Configure approval policy and sandbox settings <a>Learn more</a>",
    id: "settings.agent.configuration.subtitle.summary",
  },
  {
    defaultMessage: "Custom config.toml settings",
    id: "settings.agent.customConfig.sectionTitle",
  },
  {
    defaultMessage: "Current version",
    id: "settings.agent.dependencies.bundleVersion.label",
  },
  {
    defaultMessage: "Checking…",
    id: "settings.agent.dependencies.bundleVersion.loading",
  },
  {
    defaultMessage: "Not installed",
    id: "settings.agent.dependencies.bundleVersion.notInstalled",
  },
  {
    defaultMessage: "Run diagnostics or reinstall if tool calls fail",
    id: "settings.agent.dependencies.bundleVersion.problemDescription",
  },
  {
    defaultMessage: "Cancel download",
    id: "settings.agent.dependencies.cancel.button",
  },
  {
    defaultMessage: "Canceling Codex dependency download",
    id: "settings.agent.dependencies.cancel.canceled",
  },
  {
    defaultMessage: "Couldn’t cancel Codex dependency download",
    id: "settings.agent.dependencies.cancel.failed",
  },
  {
    defaultMessage: "No Codex dependency download is running",
    id: "settings.agent.dependencies.cancel.noop",
  },
  {
    defaultMessage: "Diagnose",
    id: "settings.agent.dependencies.diagnose.button",
  },
  {
    defaultMessage: "Checks the current bundle and records diagnostic logs",
    id: "settings.agent.dependencies.diagnose.description",
  },
  {
    defaultMessage: "Couldn’t diagnose Codex dependencies",
    id: "settings.agent.dependencies.diagnose.failed",
  },
  {
    defaultMessage: "Diagnose issues in Codex Workspace",
    id: "settings.agent.dependencies.diagnose.label",
  },
  {
    defaultMessage: "Codex dependencies look healthy",
    id: "settings.agent.dependencies.diagnose.ok",
  },
  {
    defaultMessage:
      "Codex dependencies may need repair. Send /feedback if this keeps happening",
    id: "settings.agent.dependencies.diagnose.problem",
  },
  {
    defaultMessage: "Enable Codex dependencies",
    id: "settings.agent.dependencies.enabled.ariaLabel",
  },
  {
    defaultMessage:
      "Allow Codex to install and expose bundled Node.js and Python tools",
    id: "settings.agent.dependencies.enabled.description",
  },
  {
    defaultMessage: "Codex dependencies",
    id: "settings.agent.dependencies.enabled.label",
  },
  {
    defaultMessage: "Reinstall",
    id: "settings.agent.dependencies.reset.button",
  },
  {
    defaultMessage: "Codex dependency download canceled",
    id: "settings.agent.dependencies.reset.canceled",
  },
  {
    defaultMessage:
      "Deletes the local bundle, downloads it again, and reloads tools",
    id: "settings.agent.dependencies.reset.description",
  },
  {
    defaultMessage: "Couldn’t reinstall Codex dependencies",
    id: "settings.agent.dependencies.reset.failed",
  },
  {
    defaultMessage: "Codex dependencies were reinstalled",
    id: "settings.agent.dependencies.reset.installed",
  },
  {
    defaultMessage: "Reset and install Workspace",
    id: "settings.agent.dependencies.reset.label",
  },
  {
    defaultMessage: "Workspace Dependencies",
    id: "settings.agent.dependencies.sectionTitle",
  },
  {
    defaultMessage:
      "Choose which reasoning effort levels appear in model controls. Availability varies by model",
    id: "settings.agent.modelFeatures.reasoningEfforts.description",
  },
  {
    defaultMessage: "Available reasoning efforts",
    id: "settings.agent.modelFeatures.reasoningEfforts.label",
  },
  {
    defaultMessage: "{count, plural, one {# selected} other {# selected}}",
    id: "settings.agent.modelFeatures.reasoningEfforts.selectedCount",
  },
  {
    defaultMessage: "Model features",
    id: "settings.agent.modelFeatures.title",
  },
  {
    defaultMessage: "Experimental features (Beta)",
    id: "settings.general.experimentalFeatures",
  },
  {
    defaultMessage: "No beta experimental features available",
    id: "settings.general.experimentalFeatures.empty",
  },
  {
    defaultMessage: "Loading experimental features…",
    id: "settings.general.experimentalFeatures.loading",
  },
  {
    defaultMessage: "Enable the plugins experience in Codex",
    id: "settings.general.experimentalFeatures.plugins.description",
  },
  {
    defaultMessage: "Plugins",
    id: "settings.general.experimentalFeatures.plugins.label",
  },
  {
    defaultMessage: "Restart {appName} to apply experimental feature changes",
    id: "settings.general.experimentalFeatures.restartNote",
  },
  {
    defaultMessage: "Toggle {featureName}",
    id: "settings.general.experimentalFeatures.toggle",
  },
] satisfies readonly SettingsSearchMessageDescriptor[];
