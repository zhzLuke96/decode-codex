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
const DESIGN_PLUGIN_SUGGESTIONS = [
  {
    pluginName: "figma",
    titleMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.figma.title",
      defaultMessage: "Connect Figma",
      description: "Role-based plugin suggestion card title for design users",
    }),
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.figma.subtext",
      defaultMessage: "Review designs and prototypes",
      description: "Role-based plugin suggestion card subtext for design users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.figma.starterPrompt",
      defaultMessage:
        "Use Figma to review the latest design and identify unresolved UX decisions",
      description:
        "Prompt to prefill after connecting Figma from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "slack",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.slack.subtext",
      defaultMessage: "Catch up on design feedback",
      description: "Role-based plugin suggestion card subtext for design users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.slack.starterPrompt",
      defaultMessage: "Use Slack to summarize design feedback and decisions",
      description:
        "Prompt to prefill after connecting Slack from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "teams",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.teams.subtext",
      defaultMessage: "Catch up on design feedback",
      description: "Role-based plugin suggestion card subtext for design users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.teams.starterPrompt",
      defaultMessage: "Use Teams to summarize design feedback and decisions",
      description:
        "Prompt to prefill after connecting Teams from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-drive",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.googleDrive.subtext",
      defaultMessage: "Review specs, briefs, and research",
      description: "Role-based plugin suggestion card subtext for design users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.googleDrive.starterPrompt",
      defaultMessage: "Use Google Drive to review specs and research notes",
      description:
        "Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "sharepoint",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.sharepoint.subtext",
      defaultMessage: "Review specs, briefs, and research",
      description: "Role-based plugin suggestion card subtext for design users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.sharepoint.starterPrompt",
      defaultMessage: "Use SharePoint to review specs and research notes",
      description:
        "Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.gmail.subtext",
      defaultMessage: "Summarize stakeholder feedback",
      description: "Role-based plugin suggestion card subtext for design users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.gmail.starterPrompt",
      defaultMessage:
        "Use Gmail to summarize design feedback and requests from my inbox",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.outlookEmail.subtext",
      defaultMessage: "Summarize stakeholder feedback",
      description: "Role-based plugin suggestion card subtext for design users",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.design.outlookEmail.starterPrompt",
      defaultMessage:
        "Use Outlook Email to summarize design feedback and requests from my inbox",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
];
export { DESIGN_PLUGIN_SUGGESTIONS };
