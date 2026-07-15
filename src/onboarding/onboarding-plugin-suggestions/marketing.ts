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
const MARKETING_PLUGIN_SUGGESTIONS = [
  {
    mailProvider: "google",
    pluginName: "slack",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.slack.subtext",
      defaultMessage: "Catch up on launch discussions in Slack",
      description:
        "Role-based plugin suggestion card subtext for marketing users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.slack.starterPrompt",
      defaultMessage:
        "Use Slack to summarize campaign feedback, decisions, and blockers",
      description:
        "Prompt to prefill after connecting Slack from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "teams",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.teams.subtext",
      defaultMessage: "Catch up on launch discussions in Teams",
      description:
        "Role-based plugin suggestion card subtext for marketing users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.teams.starterPrompt",
      defaultMessage:
        "Use Teams to summarize campaign feedback, decisions, and blockers",
      description:
        "Prompt to prefill after connecting Teams from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.gmail.subtext",
      defaultMessage: "Summarize campaign requests in email",
      description:
        "Role-based plugin suggestion card subtext for marketing users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.gmail.starterPrompt",
      defaultMessage:
        "Use Gmail to summarize partner, agency, and campaign asks",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.outlookEmail.subtext",
      defaultMessage: "Summarize campaign requests in email",
      description:
        "Role-based plugin suggestion card subtext for marketing users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.outlookEmail.starterPrompt",
      defaultMessage:
        "Use Outlook Email to summarize partner, agency, and campaign asks",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-drive",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.googleDrive.subtext",
      defaultMessage: "Review briefs and messaging docs",
      description:
        "Role-based plugin suggestion card subtext for marketing users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.googleDrive.starterPrompt",
      defaultMessage:
        "Use Google Drive to review campaign briefs and open questions",
      description:
        "Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "sharepoint",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.sharepoint.subtext",
      defaultMessage: "Review briefs and messaging docs",
      description:
        "Role-based plugin suggestion card subtext for marketing users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.sharepoint.starterPrompt",
      defaultMessage:
        "Use SharePoint to review campaign briefs and open questions",
      description:
        "Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card",
    }),
  },
  {
    pluginName: "canva",
    titleMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.canva.title",
      defaultMessage: "Connect Canva",
      description:
        "Role-based plugin suggestion card title for marketing users",
    }),
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.canva.subtext",
      defaultMessage: "Create and refine launch assets",
      description:
        "Role-based plugin suggestion card subtext for marketing users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.marketing.canva.starterPrompt",
      defaultMessage:
        "Use Canva to draft launch asset concepts from the campaign brief",
      description:
        "Prompt to prefill after connecting Canva from the role-based plugin suggestion card",
    }),
  },
];
export { MARKETING_PLUGIN_SUGGESTIONS };
