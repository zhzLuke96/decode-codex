// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Messages for Chronicle personalization settings.
import { defineMessages } from "../../vendor/react-intl";

export const CHRONICLE_DOCS_URL =
  "https://developers.openai.com/codex/memories/chronicle";

export const chronicleMessages = defineMessages({
  name: {
    id: "settings.general.experimentalFeatures.chronicle.name",
    defaultMessage: "Chronicle research preview",
    description: "Name of the Chronicle experimental feature",
  },
  description: {
    id: "settings.general.experimentalFeatures.chronicle.description",
    defaultMessage:
      "Augment memories with screen context so Codex can help with anything you're working on. <link>Learn more</link>",
    description: "Description for the Chronicle experimental feature",
  },
  memoriesRequiredTooltip: {
    id: "settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip",
    defaultMessage: "Enable memories to use Chronicle",
    description:
      "Tooltip shown when the Chronicle toggle is disabled because Memories is disabled",
  },
  buttonAriaLabel: {
    id: "settings.general.experimentalFeatures.chronicle.buttonAriaLabel",
    defaultMessage: "Toggle {featureName}",
    description: "Aria label for toggling the Chronicle experimental feature",
  },
  consentTitle: {
    id: "settings.general.experimentalFeatures.chronicle.consentTitle",
    defaultMessage: "Enable Chronicle research preview",
    description: "Title for the Chronicle consent dialog",
  },
  consentBodyIntro: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyIntro",
    defaultMessage:
      'Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you have seen to provide more helpful, contextual responses to prompts like "finish what I was doing" or "update this dashboard."',
    description: "Introductory body copy for the Chronicle consent dialog",
  },
  consentBodyConsiderations: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyConsiderations",
    defaultMessage:
      "Be mindful of the following considerations before enabling Chronicle:",
    description:
      "Body copy before the considerations list in the Chronicle consent dialog",
  },
  consentBodyCost: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyCost",
    defaultMessage:
      "<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.",
    description:
      "Chronicle consent dialog list item describing rate limit cost",
  },
  consentBodyPrivacy: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyPrivacy",
    defaultMessage:
      "<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don't use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.",
    description: "Chronicle consent dialog list item describing privacy risk",
  },
  consentBodyPromptInjection: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection",
    defaultMessage:
      "<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.",
    description:
      "Chronicle consent dialog list item describing prompt injection risk",
  },
  consentBodyStorageHeading: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageHeading",
    defaultMessage: "How it works:",
    description:
      "Heading before Chronicle consent dialog details about screen capture processing and storage",
  },
  consentBodyStorageProcessing: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing",
    defaultMessage:
      "To generate memories, the screen captures are processed on our servers and then deleted.",
    description:
      "Chronicle consent dialog list item describing server processing for generating memories",
  },
  consentBodyStorageLocal: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyStorageLocal",
    defaultMessage:
      "Screen captures are temporarily stored on device, and memories are also stored on device. Both are stored unencrypted, so be aware that other applications on your computer may have access to these files. When Codex uses memories in a chat, they may be used to improve our models, if allowed in your ChatGPT settings.",
    description:
      "Chronicle consent dialog list item describing local screen capture and memory storage",
  },
  consentBodyDisableIntro: {
    id: "settings.general.experimentalFeatures.chronicle.consentBodyDisableIntro",
    defaultMessage:
      "You can disable Chronicle at any time, which will stop screen captures going forward. <link>Learn more.</link>",
    description: "Closing body copy in the Chronicle consent dialog",
  },
  consentCancel: {
    id: "settings.general.experimentalFeatures.chronicle.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for the Chronicle consent dialog",
  },
  consentContinue: {
    id: "settings.general.experimentalFeatures.chronicle.continue",
    defaultMessage: "Continue",
    description: "Continue button label for the Chronicle consent dialog",
  },
  permissionStatusLabel: {
    id: "settings.general.experimentalFeatures.chronicle.permission.statusLabel",
    defaultMessage: "Status",
    description: "Label preceding the Chronicle status value",
  },
  permissionNotGranted: {
    id: "settings.general.experimentalFeatures.chronicle.permission.notGranted",
    defaultMessage:
      "{statusLabel}: {permission} permission not granted (open setup)",
    description:
      "Linked status shown when Chronicle does not have a required macOS permission",
  },
  permissionStatus: {
    id: "settings.general.experimentalFeatures.chronicle.permission.status",
    defaultMessage: "{permission}: {status}",
    description: "Permission label and status for Chronicle",
  },
  runningStatus: {
    id: "settings.general.experimentalFeatures.chronicle.permission.runningStatus",
    defaultMessage: "Status: {status}",
    description:
      "Status shown when Chronicle has Screen Recording permission",
  },
  runningStatusAccessibility: {
    id: "settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility",
    defaultMessage: "Accessibility: {status} (open setup)",
    description:
      "Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted",
  },
  accessibilityPermission: {
    id: "settings.general.experimentalFeatures.chronicle.permission.accessibility",
    defaultMessage: "Accessibility",
    description: "Label for the macOS Accessibility permission status",
  },
  screenRecordingPermission: {
    id: "settings.general.experimentalFeatures.chronicle.permission.screenRecording",
    defaultMessage: "Screen Recording",
    description: "Label for the macOS Screen Recording permission status",
  },
  statusChecking: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.checking",
    defaultMessage: "Checking",
    description: "Chronicle permission status while checking native state",
  },
  statusUnknown: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.unknown",
    defaultMessage: "Unknown",
    description:
      "Chronicle permission status when native state cannot be read",
  },
  statusGranted: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.granted",
    defaultMessage: "Granted",
    description: "Chronicle permission status when granted",
  },
  statusNotDetermined: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.notDetermined",
    defaultMessage: "Not requested",
    description:
      "Chronicle permission status before the user has been prompted",
  },
  statusDenied: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.denied",
    defaultMessage: "Denied",
    description: "Chronicle permission status when denied",
  },
  statusRestricted: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.restricted",
    defaultMessage: "Restricted",
    description: "Chronicle permission status when blocked by policy",
  },
  processPaused: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.paused",
    defaultMessage: "Paused",
    description: "Chronicle status when the sidecar process is not running",
  },
  processStarting: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.starting",
    defaultMessage: "Starting",
    description: "Chronicle status when the sidecar process is starting",
  },
  processStopping: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.stopping",
    defaultMessage: "Stopping",
    description: "Chronicle status when the sidecar process is stopping",
  },
  processRunning: {
    id: "settings.general.experimentalFeatures.chronicle.permissionStatus.running",
    defaultMessage: "Running",
    description: "Chronicle status when the sidecar process is running",
  },
});
