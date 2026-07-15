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
const FINANCE_PLUGIN_SUGGESTIONS = [
  {
    mailProvider: "google",
    pluginName: "slack",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.slack.subtext",
      defaultMessage: "Catch up on finance planning threads",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.slack.starterPrompt",
      defaultMessage:
        "Use Slack to summarize recent finance decisions, asks, and owners",
      description:
        "Prompt to prefill after connecting Slack from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "teams",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.teams.subtext",
      defaultMessage: "Catch up on finance planning threads",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.teams.starterPrompt",
      defaultMessage:
        "Use Teams to summarize recent finance decisions, asks, and owners",
      description:
        "Prompt to prefill after connecting Teams from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.gmail.subtext",
      defaultMessage: "Summarize budget and approval asks",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.gmail.starterPrompt",
      defaultMessage:
        "Use Gmail to pull out finance asks and approvals from my inbox",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.outlookEmail.subtext",
      defaultMessage: "Summarize budget and approval asks",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.outlookEmail.starterPrompt",
      defaultMessage:
        "Use Outlook Email to pull out finance asks and approvals from my inbox",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-drive",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.googleDrive.subtext",
      defaultMessage: "Review results, models, and plans",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.googleDrive.starterPrompt",
      defaultMessage:
        "Use Google Drive to review the latest results and flag deltas",
      description:
        "Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "sharepoint",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.sharepoint.subtext",
      defaultMessage: "Review results, models, and plans",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.sharepoint.starterPrompt",
      defaultMessage:
        "Use SharePoint to review the latest results and flag deltas",
      description:
        "Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-calendar",
    titleMessage: CONNECT_CALENDAR_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.googleCalendar.subtext",
      defaultMessage: "Prep for finance meetings",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.googleCalendar.starterPrompt",
      defaultMessage:
        "Use Google Calendar to prep me for upcoming finance reviews with context and questions",
      description:
        "Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-calendar",
    titleMessage: CONNECT_CALENDAR_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.outlookCalendar.subtext",
      defaultMessage: "Prep for finance meetings",
      description:
        "Role-based plugin suggestion card subtext for finance users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.finance.outlookCalendar.starterPrompt",
      defaultMessage:
        "Use Outlook Calendar to prep me for upcoming finance reviews with context and questions",
      description:
        "Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card",
    }),
  },
];
export { FINANCE_PLUGIN_SUGGESTIONS };
