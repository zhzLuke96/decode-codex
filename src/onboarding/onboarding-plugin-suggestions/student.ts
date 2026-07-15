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
const STUDENT_PLUGIN_SUGGESTIONS = [
  {
    pluginName: "github",
    titleMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.github.title",
      defaultMessage: "Connect GitHub",
      description: "Role-based plugin suggestion card title for students",
    }),
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.github.subtext",
      defaultMessage: "Debug code and projects",
      description: "Role-based plugin suggestion card subtext for students",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.github.starterPrompt",
      defaultMessage:
        "Use GitHub to debug my project and explain the fix in plain English",
      description:
        "Prompt to prefill after connecting GitHub from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "gmail",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.gmail.subtext",
      defaultMessage: "Summarize updates for classes from email",
      description: "Role-based plugin suggestion card subtext for students",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.gmail.starterPrompt",
      defaultMessage:
        "Use Gmail to summarize class emails and deadlines for this week",
      description:
        "Prompt to prefill after connecting Gmail from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-email",
    titleMessage: CONNECT_EMAIL_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.outlookEmail.subtext",
      defaultMessage: "Summarize updates for classes from email",
      description: "Role-based plugin suggestion card subtext for students",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.outlookEmail.starterPrompt",
      defaultMessage:
        "Use Outlook Email to summarize class emails and deadlines for this week",
      description:
        "Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-drive",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.googleDrive.subtext",
      defaultMessage: "Review notes, readings, and papers",
      description: "Role-based plugin suggestion card subtext for students",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.googleDrive.starterPrompt",
      defaultMessage:
        "Use Google Drive to summarize lecture notes and study materials for a topic",
      description:
        "Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "sharepoint",
    titleMessage: CONNECT_FILES_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.sharepoint.subtext",
      defaultMessage: "Review notes, readings, and papers",
      description: "Role-based plugin suggestion card subtext for students",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.sharepoint.starterPrompt",
      defaultMessage:
        "Use SharePoint to summarize lecture notes and study materials for a topic",
      description:
        "Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "google",
    pluginName: "google-calendar",
    titleMessage: CONNECT_CALENDAR_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.googleCalendar.subtext",
      defaultMessage: "Track due dates and study blocks",
      description: "Role-based plugin suggestion card subtext for students",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.googleCalendar.starterPrompt",
      defaultMessage:
        "Use Google Calendar to build a plan around upcoming deadlines and exams",
      description:
        "Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card",
    }),
  },
  {
    mailProvider: "microsoft",
    pluginName: "outlook-calendar",
    titleMessage: CONNECT_CALENDAR_TITLE_MESSAGE,
    subtextMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.outlookCalendar.subtext",
      defaultMessage: "Track due dates and study blocks",
      description: "Role-based plugin suggestion card subtext for students",
    }),
    starterPromptMessage: defineMessage({
      id: "electron.onboarding.pluginSuggestions.student.outlookCalendar.starterPrompt",
      defaultMessage:
        "Use Outlook Calendar to build a plan around upcoming deadlines and exams",
      description:
        "Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card",
    }),
  },
];
export { STUDENT_PLUGIN_SUGGESTIONS };
