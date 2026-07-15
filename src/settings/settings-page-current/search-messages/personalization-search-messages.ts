// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSearchMessageDescriptor } from "../types";

export const personalizationSearchMessages = [
  {
    defaultMessage: "Warm, collaborative, and helpful",
    id: "composer.personalitySlashCommand.description.friendly",
  },
  {
    defaultMessage: "Concise, task-focused, and direct",
    id: "composer.personalitySlashCommand.description.pragmatic",
  },
  {
    defaultMessage: "Friendly",
    id: "composer.personalitySlashCommand.label.friendly",
  },
  {
    defaultMessage: "Pragmatic",
    id: "composer.personalitySlashCommand.label.pragmatic",
  },
  {
    defaultMessage: "Accessibility",
    id: "settings.general.experimentalFeatures.chronicle.accessibilitySettingsName",
  },
  {
    defaultMessage: "Try it out",
    id: "settings.general.experimentalFeatures.chronicle.askCodex",
  },
  {
    defaultMessage: "Toggle {featureName}",
    id: "settings.general.experimentalFeatures.chronicle.buttonAriaLabel",
  },
  {
    defaultMessage: "Cancel",
    id: "settings.general.experimentalFeatures.chronicle.cancel",
  },
  {
    defaultMessage:
      "Be mindful of the following considerations before enabling Chronicle:",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyConsiderations",
  },
  {
    defaultMessage:
      "<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyCost",
  },
  {
    defaultMessage:
      "You can disable Chronicle at any time, which will stop screen captures going forward. <link>Learn more.</link>",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyDisableIntro",
  },
  {
    defaultMessage:
      "Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyIntro",
  },
  {
    defaultMessage:
      "<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don’t use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyPrivacy",
  },
  {
    defaultMessage:
      "<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection",
  },
  {
    defaultMessage: "How it works:",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageHeading",
  },
  {
    defaultMessage:
      "Screen captures are temporarily stored on device, and memories are also stored on device. Both are stored unencrypted, so be aware that other applications on your computer may have access to these files. When Codex uses memories in a chat, they may be used to improve our models, if allowed in your ChatGPT settings.",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageLocal",
  },
  {
    defaultMessage:
      "To generate memories, the screen captures are processed on our servers and then deleted.",
    id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing",
  },
  {
    defaultMessage: "Enable Chronicle research preview",
    id: "settings.general.experimentalFeatures.chronicle.consentTitle",
  },
  {
    defaultMessage: "Continue",
    id: "settings.general.experimentalFeatures.chronicle.continue",
  },
  {
    defaultMessage:
      "Augment memories with screen context so Codex can help with anything you’re working on. <link>Learn more</link>",
    id: "settings.general.experimentalFeatures.chronicle.description",
  },
  {
    defaultMessage: "Enable memories to use Chronicle",
    id: "settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip",
  },
  {
    defaultMessage: "Chronicle research preview",
    id: "settings.general.experimentalFeatures.chronicle.name",
  },
  {
    defaultMessage: "Open System Settings",
    id: "settings.general.experimentalFeatures.chronicle.openAccessibilitySettings",
  },
  {
    defaultMessage: "Open System Settings",
    id: "settings.general.experimentalFeatures.chronicle.openScreenRecordingSettings",
  },
  {
    defaultMessage: "Accessibility",
    id: "settings.general.experimentalFeatures.chronicle.permission.accessibility",
  },
  {
    defaultMessage:
      "{statusLabel}: {permission} permission not granted (open setup)",
    id: "settings.general.experimentalFeatures.chronicle.permission.notGranted",
  },
  {
    defaultMessage: "Status: {status}",
    id: "settings.general.experimentalFeatures.chronicle.permission.runningStatus",
  },
  {
    defaultMessage: "Accessibility: {status} (open setup)",
    id: "settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility",
  },
  {
    defaultMessage: "Screen Recording",
    id: "settings.general.experimentalFeatures.chronicle.permission.screenRecording",
  },
  {
    defaultMessage: "{permission}: {status}",
    id: "settings.general.experimentalFeatures.chronicle.permission.status",
  },
  {
    defaultMessage: "Status",
    id: "settings.general.experimentalFeatures.chronicle.permission.statusLabel",
  },
  {
    defaultMessage: "Checking",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.checking",
  },
  {
    defaultMessage: "Denied",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.denied",
  },
  {
    defaultMessage: "Granted",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.granted",
  },
  {
    defaultMessage: "Not requested",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.notDetermined",
  },
  {
    defaultMessage: "Paused",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.paused",
  },
  {
    defaultMessage: "Restricted",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.restricted",
  },
  {
    defaultMessage: "Running",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.running",
  },
  {
    defaultMessage: "Starting",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.starting",
  },
  {
    defaultMessage: "Stopping",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.stopping",
  },
  {
    defaultMessage: "Unknown",
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.unknown",
  },
  {
    defaultMessage: "Screen Recording",
    id: "settings.general.experimentalFeatures.chronicle.screenRecordingSettingsName",
  },
  {
    defaultMessage:
      "Please open System Settings → Privacy & Security → Accessibility and enable {bundleName}.",
    id: "settings.general.experimentalFeatures.chronicle.setupAccessibilityDenied",
  },
  {
    defaultMessage: "Allow Accessibility to use Chronicle",
    id: "settings.general.experimentalFeatures.chronicle.setupAccessibilityPermissionNeededTitle",
  },
  {
    defaultMessage:
      "Accessibility is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and {appName} receives Accessibility permission",
    id: "settings.general.experimentalFeatures.chronicle.setupAccessibilityRestricted",
  },
  {
    defaultMessage: "Close",
    id: "settings.general.experimentalFeatures.chronicle.setupClose",
  },
  {
    defaultMessage: "Close",
    id: "settings.general.experimentalFeatures.chronicle.setupDismiss",
  },
  {
    defaultMessage: "Chronicle setup failed.",
    id: "settings.general.experimentalFeatures.chronicle.setupFailed",
  },
  {
    defaultMessage: "Chronicle setup failed",
    id: "settings.general.experimentalFeatures.chronicle.setupFailedTitle",
  },
  {
    defaultMessage: "Setting up Chronicle",
    id: "settings.general.experimentalFeatures.chronicle.setupInProgressTitle",
  },
  {
    defaultMessage:
      'You can pause Chronicle at any time by clicking "Pause Chronicle" in the {appName} menu bar.',
    id: "settings.general.experimentalFeatures.chronicle.setupReady",
  },
  {
    defaultMessage: "Chronicle is ready to use!",
    id: "settings.general.experimentalFeatures.chronicle.setupReadyTitle",
  },
  {
    defaultMessage:
      "Please open System Settings → Privacy & Security → Screen Recording and enable {bundleName}. You may need to restart {appName} to apply the change.",
    id: "settings.general.experimentalFeatures.chronicle.setupScreenRecordingDenied",
  },
  {
    defaultMessage: "Allow Screen Recording to use Chronicle",
    id: "settings.general.experimentalFeatures.chronicle.setupScreenRecordingPermissionNeededTitle",
  },
  {
    defaultMessage:
      "Screen Recording is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and {appName} receives Screen Recording permission.",
    id: "settings.general.experimentalFeatures.chronicle.setupScreenRecordingRestricted",
  },
  {
    defaultMessage: "Setting up Chronicle",
    id: "settings.general.experimentalFeatures.chronicle.setupTitle",
  },
  {
    defaultMessage: "Waiting…",
    id: "settings.general.experimentalFeatures.chronicle.setupWaiting",
  },
  {
    defaultMessage: "Enable memories",
    id: "settings.memory.enableMemoriesAriaLabel",
  },
  {
    defaultMessage:
      "Generate new memories from chats and bring them into new chats",
    id: "settings.memory.enableMemoriesDescription",
  },
  {
    defaultMessage: "Enable memories",
    id: "settings.memory.enableMemoriesLabel",
  },
  {
    defaultMessage: "Skip tool-assisted chats",
    id: "settings.memory.noToolContextAriaLabel",
  },
  {
    defaultMessage:
      "Do not generate memories from chats that used MCP tools or web search",
    id: "settings.memory.noToolContextDescription",
  },
  {
    defaultMessage: "Skip tool-assisted chats",
    id: "settings.memory.noToolContextLabel",
  },
  {
    defaultMessage: "Cancel",
    id: "settings.memory.resetDialogCancel",
  },
  {
    defaultMessage: "Reset",
    id: "settings.memory.resetDialogConfirm",
  },
  {
    defaultMessage: "This deletes all Codex memories.",
    id: "settings.memory.resetDialogSubtitle",
  },
  {
    defaultMessage: "Reset all memories?",
    id: "settings.memory.resetDialogTitle",
  },
  {
    defaultMessage: "Unable to reset memories",
    id: "settings.memory.resetError",
  },
  {
    defaultMessage: "Reset",
    id: "settings.memory.resetMemoriesButton",
  },
  {
    defaultMessage: "Delete all Codex memories",
    id: "settings.memory.resetMemoriesDescription",
  },
  {
    defaultMessage: "Reset memories",
    id: "settings.memory.resetMemoriesLabel",
  },
  {
    defaultMessage: "Memories reset",
    id: "settings.memory.resetSuccess",
  },
  {
    defaultMessage:
      "Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>",
    id: "settings.personalization.agents.description",
  },
  {
    defaultMessage: "Unable to load agents.md.",
    id: "settings.personalization.agents.loadError",
  },
  {
    defaultMessage: "Loading agents.md…",
    id: "settings.personalization.agents.loading",
  },
  {
    defaultMessage: "Add your custom instructions…",
    id: "settings.personalization.agents.placeholder",
  },
  {
    defaultMessage: "Retry",
    id: "settings.personalization.agents.retry",
  },
  {
    defaultMessage: "Save",
    id: "settings.personalization.agents.save",
  },
  {
    defaultMessage: "Unable to save agents.md",
    id: "settings.personalization.agents.save.error",
  },
  {
    defaultMessage: "Saved agents.md",
    id: "settings.personalization.agents.save.success",
  },
  {
    defaultMessage: "Custom instructions",
    id: "settings.personalization.agents.title",
  },
  {
    defaultMessage:
      "Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>",
    id: "settings.personalization.memory.subtitle",
  },
  {
    defaultMessage: "Memory (experimental)",
    id: "settings.personalization.memory.title",
  },
  {
    defaultMessage: "Choose a default tone for Codex responses",
    id: "settings.personalization.personality.description",
  },
  {
    defaultMessage: "Personality",
    id: "settings.personalization.personality.label",
  },
] satisfies readonly SettingsSearchMessageDescriptor[];
