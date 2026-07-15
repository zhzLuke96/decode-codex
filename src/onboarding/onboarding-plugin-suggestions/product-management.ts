// Restored from ref/webview/assets/onboarding-plugin-suggestions-DbMYi-zc.js
// onboarding-plugin-suggestions-DbMYi-zc chunk restored from the Codex webview bundle.
import { defineMessage } from "react-intl";
import {
  CONNECT_CALENDAR_TITLE_MESSAGE,
  CONNECT_EMAIL_TITLE_MESSAGE,
  CONNECT_FILES_TITLE_MESSAGE,
  CONNECT_MESSAGES_TITLE_MESSAGE,
  CONNECT_MESSAGING_TITLE_MESSAGE,
} from "./plugin-suggestion-titles";
const PRODUCT_MANAGEMENT_PLUGIN_SUGGESTIONS = [
  {
    pluginName: "linear",
    titleMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.linear.title",
      defaultMessage: "Connect Linear",
      description:
        "Role-based plugin suggestion card title for product management users",
    }),
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.linear.subtext",
      defaultMessage: "Track product work and blockers",
      description:
        "Role-based plugin suggestion card subtext for product management users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.linear.starterPrompt",
      defaultMessage:
        "Use Linear to summarize active product work, blockers, and decisions",
      description:
        "Prompt to prefill after connecting Linear from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "slack",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.slack.subtext",
      defaultMessage: "Catch up on product discussions",
      description:
        "Role-based plugin suggestion card subtext for product management users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.slack.starterPrompt",
      defaultMessage:
        "Use Slack to summarize product feedback, decisions, and blockers",
      description:
        "Prompt to prefill after connecting Slack from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "teams",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.teams.subtext",
      defaultMessage: "Catch up on product discussions",
      description:
        "Role-based plugin suggestion card subtext for product management users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.teams.starterPrompt",
      defaultMessage:
        "Use Teams to summarize product feedback, decisions, and blockers",
      description:
        "Prompt to prefill after connecting Teams from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-drive",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.googleDrive.subtext",
      defaultMessage: "Review PRDs, research, and launch plans",
      description:
        "Role-based plugin suggestion card subtext for product management users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.googleDrive.starterPrompt",
      defaultMessage:
        "Use Google Drive to review PRDs, research, and launch plans",
      description:
        "Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "sharepoint",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.sharepoint.subtext",
      defaultMessage: "Review PRDs, research, and launch plans",
      description:
        "Role-based plugin suggestion card subtext for product management users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.sharepoint.starterPrompt",
      defaultMessage:
        "Use SharePoint to review PRDs, research, and launch plans",
      description:
        "Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.gmail.subtext",
      defaultMessage: "Summarize stakeholder requests from my inbox",
      description:
        "Role-based plugin suggestion card subtext for product management users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.gmail.starterPrompt",
      defaultMessage:
        "Use Gmail to summarize things in my inbox that need my attention",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.outlookEmail.subtext",
      defaultMessage: "Summarize stakeholder requests from my inbox",
      description:
        "Role-based plugin suggestion card subtext for product management users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.productManagement.outlookEmail.starterPrompt",
      defaultMessage:
        "Use Outlook to summarize things in my inbox that need my attention",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
];
export { PRODUCT_MANAGEMENT_PLUGIN_SUGGESTIONS };
