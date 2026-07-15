// Restored from ref/webview/assets/settings-page-Czsl4aZl.js
// Search message catalog entries for the current settings page.
import type { SettingsSearchMessageDescriptor } from "../types";

export const hooksSettingsSearchMessages = [
  {
    defaultMessage: "Configured hooks will appear here",
    id: "settings.hooks.emptyHooks.description",
  },
  {
    defaultMessage: "No hooks found",
    id: "settings.hooks.emptyHooks.label",
  },
  {
    defaultMessage: "Agent",
    id: "settings.hooks.event.agentHandler",
  },
  {
    defaultMessage: "Hook changed since last trusted",
    id: "settings.hooks.event.changedReviewReason",
  },
  {
    defaultMessage: "Command",
    id: "settings.hooks.event.command",
  },
  {
    defaultMessage: "Command",
    id: "settings.hooks.event.commandHandler",
  },
  {
    defaultMessage: "Disabled until hook is trusted",
    id: "settings.hooks.event.disabledUntilTrustedTooltip",
  },
  {
    defaultMessage: "Hook {index}",
    id: "settings.hooks.event.fallbackHookTitle",
  },
  {
    defaultMessage: "Handler",
    id: "settings.hooks.event.handler",
  },
  {
    defaultMessage: "Managed hooks are always on",
    id: "settings.hooks.event.managedTooltip",
  },
  {
    defaultMessage: "Matcher",
    id: "settings.hooks.event.matcher",
  },
  {
    defaultMessage: "Open config file",
    id: "settings.hooks.event.openConfigFile",
  },
  {
    defaultMessage: "PermissionRequest",
    id: "settings.hooks.event.permissionRequest",
  },
  {
    defaultMessage: "When permission is requested",
    id: "settings.hooks.event.permissionRequest.description",
  },
  {
    defaultMessage: "PostCompact",
    id: "settings.hooks.event.postCompact",
  },
  {
    defaultMessage: "After Codex compacts the conversation",
    id: "settings.hooks.event.postCompact.description",
  },
  {
    defaultMessage: "PostToolUse",
    id: "settings.hooks.event.postToolUse",
  },
  {
    defaultMessage: "After a tool executes",
    id: "settings.hooks.event.postToolUse.description",
  },
  {
    defaultMessage: "PreCompact",
    id: "settings.hooks.event.preCompact",
  },
  {
    defaultMessage: "Before Codex compacts the conversation",
    id: "settings.hooks.event.preCompact.description",
  },
  {
    defaultMessage: "PreToolUse",
    id: "settings.hooks.event.preToolUse",
  },
  {
    defaultMessage: "Before a tool executes",
    id: "settings.hooks.event.preToolUse.description",
  },
  {
    defaultMessage: "Prompt",
    id: "settings.hooks.event.promptHandler",
  },
  {
    defaultMessage: "SessionStart",
    id: "settings.hooks.event.sessionStart",
  },
  {
    defaultMessage: "When a new session starts",
    id: "settings.hooks.event.sessionStart.description",
  },
  {
    defaultMessage: "Status message",
    id: "settings.hooks.event.statusMessage",
  },
  {
    defaultMessage: "Stop",
    id: "settings.hooks.event.stop",
  },
  {
    defaultMessage: "Right before Codex ends its turn",
    id: "settings.hooks.event.stop.description",
  },
  {
    defaultMessage: "SubagentStart",
    id: "settings.hooks.event.subagentStart",
  },
  {
    defaultMessage: "When a subagent starts",
    id: "settings.hooks.event.subagentStart.description",
  },
  {
    defaultMessage: "SubagentStop",
    id: "settings.hooks.event.subagentStop",
  },
  {
    defaultMessage: "When a subagent stops",
    id: "settings.hooks.event.subagentStop.description",
  },
  {
    defaultMessage: "Timeout",
    id: "settings.hooks.event.timeout",
  },
  {
    defaultMessage: "Trust",
    id: "settings.hooks.event.trust",
  },
  {
    defaultMessage: "New hook",
    id: "settings.hooks.event.untrustedReviewReason",
  },
  {
    defaultMessage: "UserPromptSubmit",
    id: "settings.hooks.event.userPromptSubmit",
  },
  {
    defaultMessage: "When the user submits a prompt",
    id: "settings.hooks.event.userPromptSubmit.description",
  },
  {
    defaultMessage: "{path}: {message}",
    id: "settings.hooks.issues.error",
  },
  {
    defaultMessage:
      "{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}",
    id: "settings.hooks.issues.summary",
  },
  {
    defaultMessage: "Could not load hooks",
    id: "settings.hooks.loadError.label",
  },
  {
    defaultMessage: "Loading hooks…",
    id: "settings.hooks.loading.label",
  },
  {
    defaultMessage: "Reload hooks",
    id: "settings.hooks.refresh",
  },
  {
    defaultMessage: "Refreshed hooks",
    id: "settings.hooks.refresh.success",
  },
  {
    defaultMessage:
      "Hooks can run outside of the sandbox so we ask you to review any recently installed or modified hooks",
    id: "settings.hooks.review.summary",
  },
  {
    defaultMessage: "Admin config",
    id: "settings.hooks.source.adminConfig",
  },
  {
    defaultMessage: "From Config",
    id: "settings.hooks.source.globalConfig",
  },
  {
    defaultMessage: "{count, plural, one {# hook} other {# hooks}}",
    id: "settings.hooks.source.hookCount",
  },
  {
    defaultMessage: "Other sources",
    id: "settings.hooks.source.otherSources",
  },
  {
    defaultMessage: "Plugin",
    id: "settings.hooks.source.plugin",
  },
  {
    defaultMessage: "From Plugins",
    id: "settings.hooks.source.plugins",
  },
  {
    defaultMessage: "Project config",
    id: "settings.hooks.source.projectConfig",
  },
  {
    defaultMessage: "From Projects",
    id: "settings.hooks.source.projects",
  },
  {
    defaultMessage: "Session flags",
    id: "settings.hooks.source.sessionFlags",
  },
  {
    defaultMessage: "All projects",
    id: "settings.hooks.source.sharedProjects",
  },
  {
    defaultMessage: "Unknown source",
    id: "settings.hooks.source.unknown",
  },
  {
    defaultMessage: "Unknown plugin",
    id: "settings.hooks.source.unknownPlugin",
  },
  {
    defaultMessage: "User config",
    id: "settings.hooks.source.userConfig",
  },
  {
    defaultMessage:
      "Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>",
    id: "settings.hooks.subtitle",
  },
  {
    defaultMessage: "{issueCount}{separator}{needsReview}",
    id: "settings.hooks.summary.attentionCounts",
  },
  {
    defaultMessage: "{issueCount, plural, one {# issue} other {# issues}}",
    id: "settings.hooks.summary.issueCounts",
  },
  {
    defaultMessage:
      "{needsReview, plural, one {# needs review} other {# need review}}",
    id: "settings.hooks.summary.reviewCounts",
  },
] satisfies readonly SettingsSearchMessageDescriptor[];
