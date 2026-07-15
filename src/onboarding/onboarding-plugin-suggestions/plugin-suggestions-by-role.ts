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
import { ENGINEERING_PLUGIN_SUGGESTIONS } from "./engineering";
import { PRODUCT_MANAGEMENT_PLUGIN_SUGGESTIONS } from "./product-management";
import { FINANCE_PLUGIN_SUGGESTIONS } from "./finance";
import { MARKETING_PLUGIN_SUGGESTIONS } from "./marketing";
import { SALES_PLUGIN_SUGGESTIONS } from "./sales";
import { OPERATIONS_PLUGIN_SUGGESTIONS } from "./operations";
import { PEOPLE_HR_PLUGIN_SUGGESTIONS } from "./people-hr";
import { LEGAL_PLUGIN_SUGGESTIONS } from "./legal";
import { DATA_SCIENCE_PLUGIN_SUGGESTIONS } from "./data-science";
import { DESIGN_PLUGIN_SUGGESTIONS } from "./design";
import { STUDENT_PLUGIN_SUGGESTIONS } from "./student";
const SOMETHING_ELSE_PLUGIN_SUGGESTIONS = [
  {
    mailProvider: "google",
    pluginName: "slack",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.slack.subtext",
      defaultMessage: "Get context from recent team discussions",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.slack.starterPrompt",
      defaultMessage:
        "Use Slack to catch me up on recent decisions and open questions",
      description:
        "Prompt to prefill after connecting Slack from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "teams",
    titleMessage: CONNECT_MESSAGING_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.teams.subtext",
      defaultMessage: "Get context from recent team discussions",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.teams.starterPrompt",
      defaultMessage:
        "Use Teams to catch me up on recent decisions and open questions",
      description:
        "Prompt to prefill after connecting Teams from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.gmail.subtext",
      defaultMessage: "Summarize stakeholder asks from email",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.gmail.starterPrompt",
      defaultMessage: "Use Gmail to summarize exec and stakeholder requests",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.outlookEmail.subtext",
      defaultMessage: "Summarize stakeholder asks from email",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.outlookEmail.starterPrompt",
      defaultMessage:
        "Use Outlook Email to summarize exec and stakeholder requests",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-drive",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.googleDrive.subtext",
      defaultMessage: "Review results, research, and plans",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.googleDrive.starterPrompt",
      defaultMessage:
        "Use Google Drive to review the latest results and research, and flag opportunities",
      description:
        "Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "sharepoint",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.sharepoint.subtext",
      defaultMessage: "Review results, research, and plans",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.sharepoint.starterPrompt",
      defaultMessage:
        "Use SharePoint to review the latest results and research, and flag opportunities",
      description:
        "Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-calendar",
    titleMessage: CONNECT_CALENDAR_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.googleCalendar.subtext",
      defaultMessage: "Prep for upcoming meetings",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.googleCalendar.starterPrompt",
      defaultMessage:
        "Use Google Calendar to prep me for planning meetings and project reviews",
      description:
        "Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-calendar",
    titleMessage: CONNECT_CALENDAR_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.outlookCalendar.subtext",
      defaultMessage: "Prep for upcoming meetings",
      description:
        "Role-based plugin suggestion card subtext for users selecting something else",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.somethingElse.outlookCalendar.starterPrompt",
      defaultMessage:
        "Use Outlook Calendar to prep me for planning meetings and project reviews",
      description:
        "Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card",
    }),
  },
];
function getPluginSuggestionsForRole(role) {
  switch (role) {
    case "data_science":
      return DATA_SCIENCE_PLUGIN_SUGGESTIONS;
    case "design":
      return DESIGN_PLUGIN_SUGGESTIONS;
    case "engineering":
    case "default":
      return ENGINEERING_PLUGIN_SUGGESTIONS;
    case "finance":
      return FINANCE_PLUGIN_SUGGESTIONS;
    case "legal":
      return LEGAL_PLUGIN_SUGGESTIONS;
    case "marketing":
      return MARKETING_PLUGIN_SUGGESTIONS;
    case "operations":
      return OPERATIONS_PLUGIN_SUGGESTIONS;
    case "people_hr":
      return PEOPLE_HR_PLUGIN_SUGGESTIONS;
    case "product_management":
      return PRODUCT_MANAGEMENT_PLUGIN_SUGGESTIONS;
    case "sales":
      return SALES_PLUGIN_SUGGESTIONS;
    case "student":
      return STUDENT_PLUGIN_SUGGESTIONS;
    case "something_else":
    default:
      return SOMETHING_ELSE_PLUGIN_SUGGESTIONS;
  }
}
export { getPluginSuggestionsForRole };
