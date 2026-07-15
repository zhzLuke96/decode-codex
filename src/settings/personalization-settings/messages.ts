// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Messages for personalization settings.
import { defineMessages } from "../../vendor/react-intl";

export const PERSONALIZATION_SETTINGS_SLUG = "personalization";
export const CODEX_MEMORIES_DOCS_URL =
  "https://developers.openai.com/codex/memories";

export const personalizationMessages = defineMessages({
  personality: {
    id: "settings.personalization.personality.label",
    defaultMessage: "Personality",
    description: "Label for personality selection in personalization settings",
  },
  personalityDescription: {
    id: "settings.personalization.personality.description",
    defaultMessage: "Choose a default tone for Codex responses",
    description:
      "Description for personality selection in personalization settings",
  },
  friendly: {
    id: "composer.personalitySlashCommand.label.friendly",
    defaultMessage: "Friendly",
    description: "Label for the friendly personality",
  },
  friendlyDescription: {
    id: "composer.personalitySlashCommand.description.friendly",
    defaultMessage: "Warm, collaborative, and helpful",
    description: "Description for the friendly personality option",
  },
  pragmatic: {
    id: "composer.personalitySlashCommand.label.pragmatic",
    defaultMessage: "Pragmatic",
    description: "Label for the pragmatic personality",
  },
  pragmaticDescription: {
    id: "composer.personalitySlashCommand.description.pragmatic",
    defaultMessage: "Concise, task-focused, and direct",
    description: "Description for the pragmatic personality option",
  },
  customInstructions: {
    id: "settings.personalization.agents.title",
    defaultMessage: "Custom instructions",
    description: "Heading for personal agents settings section",
  },
  customInstructionsDescription: {
    id: "settings.personalization.agents.description",
    defaultMessage:
      "Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>",
    description: "Description for personal agents settings section",
  },
  agentsPlaceholder: {
    id: "settings.personalization.agents.placeholder",
    defaultMessage: "Add your custom instructions...",
    description: "Placeholder text for personal agents editor",
  },
  agentsLoading: {
    id: "settings.personalization.agents.loading",
    defaultMessage: "Loading agents.md...",
    description: "Loading label for agents.md editor",
  },
  agentsLoadError: {
    id: "settings.personalization.agents.loadError",
    defaultMessage: "Unable to load agents.md.",
    description: "Error message shown when agents.md fails to load",
  },
  agentsRetry: {
    id: "settings.personalization.agents.retry",
    defaultMessage: "Retry",
    description: "Button label to retry loading agents.md",
  },
  agentsSave: {
    id: "settings.personalization.agents.save",
    defaultMessage: "Save",
    description: "Save button label for personal agents editor",
  },
  agentsSaveSuccess: {
    id: "settings.personalization.agents.save.success",
    defaultMessage: "Saved agents.md",
    description: "Toast shown when agents.md is saved",
  },
  agentsSaveError: {
    id: "settings.personalization.agents.save.error",
    defaultMessage: "Unable to save agents.md",
    description: "Toast shown when agents.md save fails",
  },
  memory: {
    id: "settings.personalization.memory.title",
    defaultMessage: "Memory (experimental)",
    description: "Heading for memory settings in personalization",
  },
  memorySubtitle: {
    id: "settings.personalization.memory.subtitle",
    defaultMessage:
      "Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>",
    description: "Description for memory settings in personalization",
  },
  enableMemories: {
    id: "settings.memory.enableMemoriesLabel",
    defaultMessage: "Enable memories",
    description: "Label for enabling memories",
  },
  enableMemoriesDescription: {
    id: "settings.memory.enableMemoriesDescription",
    defaultMessage:
      "Generate new memories from chats and bring them into new chats",
    description: "Description for enabling memories",
  },
  enableMemoriesAriaLabel: {
    id: "settings.memory.enableMemoriesAriaLabel",
    defaultMessage: "Enable memories",
    description: "Accessible label for enabling memories",
  },
  skipToolAssistedChats: {
    id: "settings.memory.noToolContextLabel",
    defaultMessage: "Skip tool-assisted chats",
    description:
      "Label for disabling memory generation when MCP or web search is used",
  },
  skipToolAssistedChatsDescription: {
    id: "settings.memory.noToolContextDescription",
    defaultMessage:
      "Do not generate memories from chats that used MCP tools or web search",
    description:
      "Description for disabling memory generation when MCP or web search is used",
  },
  skipToolAssistedChatsAriaLabel: {
    id: "settings.memory.noToolContextAriaLabel",
    defaultMessage: "Skip tool-assisted chats",
    description:
      "Accessible label for disabling memory generation when MCP or web search is used",
  },
  resetMemories: {
    id: "settings.memory.resetMemoriesLabel",
    defaultMessage: "Reset memories",
    description: "Label for resetting memories",
  },
  resetMemoriesDescription: {
    id: "settings.memory.resetMemoriesDescription",
    defaultMessage: "Delete all Codex memories",
    description: "Description for resetting memories",
  },
  resetMemoriesButton: {
    id: "settings.memory.resetMemoriesButton",
    defaultMessage: "Reset",
    description: "Button label for resetting memories",
  },
  resetSuccess: {
    id: "settings.memory.resetSuccess",
    defaultMessage: "Memories reset",
    description: "Toast shown after resetting memories",
  },
  resetError: {
    id: "settings.memory.resetError",
    defaultMessage: "Unable to reset memories",
    description: "Toast shown when resetting memories fails",
  },
  resetDialogTitle: {
    id: "settings.memory.resetDialogTitle",
    defaultMessage: "Reset all memories?",
    description: "Title for reset memories confirmation dialog",
  },
  resetDialogSubtitle: {
    id: "settings.memory.resetDialogSubtitle",
    defaultMessage: "This deletes all Codex memories.",
    description: "Subtitle for reset memories confirmation dialog",
  },
  resetDialogCancel: {
    id: "settings.memory.resetDialogCancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for reset memories dialog",
  },
  resetDialogConfirm: {
    id: "settings.memory.resetDialogConfirm",
    defaultMessage: "Reset",
    description: "Confirm button label for reset memories dialog",
  },
});
