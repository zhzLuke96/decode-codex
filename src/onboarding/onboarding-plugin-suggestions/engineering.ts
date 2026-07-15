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
const ENGINEERING_PLUGIN_SUGGESTIONS = [
  {
    mailProvider: "google",
    pluginName: "slack",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.slack.subtext",
      defaultMessage: "Catch up on engineering threads",
      description: "Role-based plugin suggestion card subtext for engineers",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.slack.starterPrompt",
      defaultMessage:
        "Use Slack to catch me up on engineering discussions needing attention",
      description:
        "Prompt to prefill after connecting Slack from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "teams",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.teams.subtext",
      defaultMessage: "Catch up on engineering threads",
      description: "Role-based plugin suggestion card subtext for engineers",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.teams.starterPrompt",
      defaultMessage:
        "Use Teams to catch me up on engineering discussions needing attention",
      description:
        "Prompt to prefill after connecting Teams from the role-based plugin suggestion card",
    }),
  },
  {
    pluginName: "github",
    titleMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.github.title",
      defaultMessage: "Connect GitHub",
      description: "Role-based plugin suggestion card title for engineers",
    }),
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.github.subtext",
      defaultMessage: "Review PRs, code, and CI checks",
      description: "Role-based plugin suggestion card subtext for engineers",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.github.starterPrompt",
      defaultMessage:
        "Use GitHub to review my open PRs and call out risks and failing checks",
      description:
        "Prompt to prefill after connecting GitHub from the role-based plugin suggestion card",
    }),
  },
  {
    pluginName: "linear",
    titleMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.linear.title",
      defaultMessage: "Connect Linear",
      description: "Role-based plugin suggestion card title for engineers",
    }),
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.linear.subtext",
      defaultMessage: "Track bugs and implementation work",
      description: "Role-based plugin suggestion card subtext for engineers",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.linear.starterPrompt",
      defaultMessage:
        "Use Linear to summarize my active engineering issues and what is blocked",
      description:
        "Prompt to prefill after connecting Linear from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.gmail.subtext",
      defaultMessage: "Monitor build alerts",
      description: "Role-based plugin suggestion card subtext for engineers",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.gmail.starterPrompt",
      defaultMessage:
        "Check my email inbox for failed builds, deploy alerts, and CI issues needing attention.",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.outlookEmail.subtext",
      defaultMessage: "Monitor build alerts",
      description: "Role-based plugin suggestion card subtext for engineers",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.engineering.outlookEmail.starterPrompt",
      defaultMessage:
        "Check my email inbox for failed builds, deploy alerts, and CI issues needing attention.",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
];
export { ENGINEERING_PLUGIN_SUGGESTIONS };
