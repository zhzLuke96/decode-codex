// Restored from ref/webview/assets/hooks-settings-copy-Bu2W8gbZ.js
// hooks-settings-copy-Bu2W8gbZ chunk restored from the Codex webview bundle.
import { defineMessages, type IntlShape } from "react-intl";
import type { HookEventName } from "./hooks-settings-model/types";
const hookEventMessages = defineMessages({
  preToolUse: {
    id: "settings.hooks.event.preToolUse",
    defaultMessage: "PreToolUse",
    description: "Label for the pre tool use hook event",
  },
  permissionRequest: {
    id: "settings.hooks.event.permissionRequest",
    defaultMessage: "PermissionRequest",
    description: "Label for the permission request hook event",
  },
  postToolUse: {
    id: "settings.hooks.event.postToolUse",
    defaultMessage: "PostToolUse",
    description: "Label for the post tool use hook event",
  },
  preCompact: {
    id: "settings.hooks.event.preCompact",
    defaultMessage: "PreCompact",
    description: "Label for the pre compact hook event",
  },
  postCompact: {
    id: "settings.hooks.event.postCompact",
    defaultMessage: "PostCompact",
    description: "Label for the post compact hook event",
  },
  sessionStart: {
    id: "settings.hooks.event.sessionStart",
    defaultMessage: "SessionStart",
    description: "Label for the session start hook event",
  },
  userPromptSubmit: {
    id: "settings.hooks.event.userPromptSubmit",
    defaultMessage: "UserPromptSubmit",
    description: "Label for the user prompt submit hook event",
  },
  subagentStart: {
    id: "settings.hooks.event.subagentStart",
    defaultMessage: "SubagentStart",
    description: "Label for the subagent start hook event",
  },
  subagentStop: {
    id: "settings.hooks.event.subagentStop",
    defaultMessage: "SubagentStop",
    description: "Label for the subagent stop hook event",
  },
  stop: {
    id: "settings.hooks.event.stop",
    defaultMessage: "Stop",
    description: "Label for the stop hook event",
  },
  preToolUseDescription: {
    id: "settings.hooks.event.preToolUse.description",
    defaultMessage: "Before a tool executes",
    description: "Description for the pre tool use hook event",
  },
  permissionRequestDescription: {
    id: "settings.hooks.event.permissionRequest.description",
    defaultMessage: "When permission is requested",
    description: "Description for the permission request hook event",
  },
  postToolUseDescription: {
    id: "settings.hooks.event.postToolUse.description",
    defaultMessage: "After a tool executes",
    description: "Description for the post tool use hook event",
  },
  preCompactDescription: {
    id: "settings.hooks.event.preCompact.description",
    defaultMessage: "Before Codex compacts the conversation",
    description: "Description for the pre compact hook event",
  },
  postCompactDescription: {
    id: "settings.hooks.event.postCompact.description",
    defaultMessage: "After Codex compacts the conversation",
    description: "Description for the post compact hook event",
  },
  sessionStartDescription: {
    id: "settings.hooks.event.sessionStart.description",
    defaultMessage: "When a new session starts",
    description: "Description for the session start hook event",
  },
  userPromptSubmitDescription: {
    id: "settings.hooks.event.userPromptSubmit.description",
    defaultMessage: "When the user submits a prompt",
    description: "Description for the user prompt submit hook event",
  },
  subagentStartDescription: {
    id: "settings.hooks.event.subagentStart.description",
    defaultMessage: "When a subagent starts",
    description: "Description for the subagent start hook event",
  },
  subagentStopDescription: {
    id: "settings.hooks.event.subagentStop.description",
    defaultMessage: "When a subagent stops",
    description: "Description for the subagent stop hook event",
  },
  stopDescription: {
    id: "settings.hooks.event.stop.description",
    defaultMessage: "Right before Codex ends its turn",
    description: "Description for the stop hook event",
  },
  fallbackHookTitle: {
    id: "settings.hooks.event.fallbackHookTitle",
    defaultMessage: "Hook {index}",
    description: "Fallback title for a hook row without a stronger label",
  },
});
function getHookPluginDisplayId(pluginId: string | null | undefined) {
  return pluginId == null ? null : pluginId.split("@")[0] || null;
}
function formatHookEventName(eventName: HookEventName, intl: IntlShape) {
  switch (eventName) {
    case "preToolUse":
      return intl.formatMessage(hookEventMessages.preToolUse);
    case "permissionRequest":
      return intl.formatMessage(hookEventMessages.permissionRequest);
    case "postToolUse":
      return intl.formatMessage(hookEventMessages.postToolUse);
    case "preCompact":
      return intl.formatMessage(hookEventMessages.preCompact);
    case "postCompact":
      return intl.formatMessage(hookEventMessages.postCompact);
    case "sessionStart":
      return intl.formatMessage(hookEventMessages.sessionStart);
    case "userPromptSubmit":
      return intl.formatMessage(hookEventMessages.userPromptSubmit);
    case "subagentStart":
      return intl.formatMessage(hookEventMessages.subagentStart);
    case "subagentStop":
      return intl.formatMessage(hookEventMessages.subagentStop);
    case "stop":
      return intl.formatMessage(hookEventMessages.stop);
  }
}
function formatFallbackHookTitle(index: number, intl: IntlShape) {
  return intl.formatMessage(hookEventMessages.fallbackHookTitle, {
    index: index + 1,
  });
}
function formatHookEventDescription(eventName: HookEventName, intl: IntlShape) {
  switch (eventName) {
    case "preToolUse":
      return intl.formatMessage(hookEventMessages.preToolUseDescription);
    case "permissionRequest":
      return intl.formatMessage(hookEventMessages.permissionRequestDescription);
    case "postToolUse":
      return intl.formatMessage(hookEventMessages.postToolUseDescription);
    case "preCompact":
      return intl.formatMessage(hookEventMessages.preCompactDescription);
    case "postCompact":
      return intl.formatMessage(hookEventMessages.postCompactDescription);
    case "sessionStart":
      return intl.formatMessage(hookEventMessages.sessionStartDescription);
    case "userPromptSubmit":
      return intl.formatMessage(hookEventMessages.userPromptSubmitDescription);
    case "subagentStart":
      return intl.formatMessage(hookEventMessages.subagentStartDescription);
    case "subagentStop":
      return intl.formatMessage(hookEventMessages.subagentStopDescription);
    case "stop":
      return intl.formatMessage(hookEventMessages.stopDescription);
  }
}
function initHooksSettingsCopyChunk(): void {
  void hookEventMessages;
}
export {
  getHookPluginDisplayId,
  formatHookEventName,
  formatFallbackHookTitle,
  formatHookEventDescription,
  initHooksSettingsCopyChunk,
};
