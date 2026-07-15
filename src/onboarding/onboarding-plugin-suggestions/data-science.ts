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
const DATA_SCIENCE_PLUGIN_SUGGESTIONS = [
  {
    pluginName: "github",
    titleMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.github.title",
      defaultMessage: "Connect GitHub",
      description:
        "Role-based plugin suggestion card title for data science users",
    }),
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.github.subtext",
      defaultMessage: "Inspect notebooks, models, and pipelines",
      description:
        "Role-based plugin suggestion card subtext for data science users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.github.starterPrompt",
      defaultMessage:
        "Use GitHub to review recent notebook and pipeline changes and explain what changed",
      description:
        "Prompt to prefill after connecting GitHub from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.gmail.subtext",
      defaultMessage: "Summarize analysis requests",
      description:
        "Role-based plugin suggestion card subtext for data science users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.gmail.starterPrompt",
      defaultMessage: "Use Gmail to summarize data requests from my inbox",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.outlookEmail.subtext",
      defaultMessage: "Summarize analysis requests",
      description:
        "Role-based plugin suggestion card subtext for data science users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.outlookEmail.starterPrompt",
      defaultMessage:
        "Use Outlook Email to summarize data requests from my inbox",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-drive",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.googleDrive.subtext",
      defaultMessage: "Review experiments and readouts",
      description:
        "Role-based plugin suggestion card subtext for data science users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.googleDrive.starterPrompt",
      defaultMessage:
        "Use Google Drive to review experiment docs and metric definitions",
      description:
        "Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "sharepoint",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.sharepoint.subtext",
      defaultMessage: "Review experiments and readouts",
      description:
        "Role-based plugin suggestion card subtext for data science users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.sharepoint.starterPrompt",
      defaultMessage:
        "Use SharePoint to review experiment docs and metric definitions",
      description:
        "Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "slack",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.slack.subtext",
      defaultMessage: "Catch up on metric questions",
      description:
        "Role-based plugin suggestion card subtext for data science users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.slack.starterPrompt",
      defaultMessage:
        "Use Slack to summarize metric discussions and open analysis asks",
      description:
        "Prompt to prefill after connecting Slack from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "teams",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.teams.subtext",
      defaultMessage: "Catch up on metric questions",
      description:
        "Role-based plugin suggestion card subtext for data science users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.dataScience.teams.starterPrompt",
      defaultMessage:
        "Use Teams to summarize metric discussions and open analysis asks",
      description:
        "Prompt to prefill after connecting Teams from the role-based plugin suggestion card",
    }),
  },
];
export { DATA_SCIENCE_PLUGIN_SUGGESTIONS };
