// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Slack MCP activity labels.

import { defineMessages } from "../../vendor/react-intl";
import type { McpToolActivityLabelMap } from "./mcp-tool-label-types";
import { withAppToolKeyAliases } from "./with-app-tool-key-aliases";

const slackMcpToolMessages = defineMessages({
  create_canvas_active: {
    id: "localConversation.mcpToolActivity.slack.create_canvas.active",
    defaultMessage: "Creating canvas",
    description: "Active label for the slack create_canvas MCP tool.",
  },
  create_canvas_completed: {
    id: "localConversation.mcpToolActivity.slack.create_canvas.completed",
    defaultMessage: "Created canvas",
    description: "Completed label for the slack create_canvas MCP tool.",
  },
  schedule_message_active: {
    id: "localConversation.mcpToolActivity.slack.schedule_message.active",
    defaultMessage: "Scheduling message",
    description: "Active label for the slack schedule_message MCP tool.",
  },
  schedule_message_completed: {
    id: "localConversation.mcpToolActivity.slack.schedule_message.completed",
    defaultMessage: "Scheduled message",
    description: "Completed label for the slack schedule_message MCP tool.",
  },
  send_message_active: {
    id: "localConversation.mcpToolActivity.slack.send_message.active",
    defaultMessage: "Sending message",
    description: "Active label for the slack send_message MCP tool.",
  },
  send_message_completed: {
    id: "localConversation.mcpToolActivity.slack.send_message.completed",
    defaultMessage: "Sent message",
    description: "Completed label for the slack send_message MCP tool.",
  },
  send_message_draft_active: {
    id: "localConversation.mcpToolActivity.slack.send_message_draft.active",
    defaultMessage: "Creating message draft",
    description: "Active label for the slack send_message_draft MCP tool.",
  },
  send_message_draft_completed: {
    id: "localConversation.mcpToolActivity.slack.send_message_draft.completed",
    defaultMessage: "Created message draft",
    description: "Completed label for the slack send_message_draft MCP tool.",
  },
  read_canvas_active: {
    id: "localConversation.mcpToolActivity.slack.read_canvas.active",
    defaultMessage: "Reading canvas",
    description: "Active label for the slack read_canvas MCP tool.",
  },
  read_canvas_completed: {
    id: "localConversation.mcpToolActivity.slack.read_canvas.completed",
    defaultMessage: "Read canvas",
    description: "Completed label for the slack read_canvas MCP tool.",
  },
  read_channel_active: {
    id: "localConversation.mcpToolActivity.slack.read_channel.active",
    defaultMessage: "Reading channel",
    description: "Active label for the slack read_channel MCP tool.",
  },
  read_channel_completed: {
    id: "localConversation.mcpToolActivity.slack.read_channel.completed",
    defaultMessage: "Read channel",
    description: "Completed label for the slack read_channel MCP tool.",
  },
  read_thread_active: {
    id: "localConversation.mcpToolActivity.slack.read_thread.active",
    defaultMessage: "Reading thread",
    description: "Active label for the slack read_thread MCP tool.",
  },
  read_thread_completed: {
    id: "localConversation.mcpToolActivity.slack.read_thread.completed",
    defaultMessage: "Read thread",
    description: "Completed label for the slack read_thread MCP tool.",
  },
  read_user_profile_active: {
    id: "localConversation.mcpToolActivity.slack.read_user_profile.active",
    defaultMessage: "Reading user profile",
    description: "Active label for the slack read_user_profile MCP tool.",
  },
  read_user_profile_completed: {
    id: "localConversation.mcpToolActivity.slack.read_user_profile.completed",
    defaultMessage: "Read user profile",
    description: "Completed label for the slack read_user_profile MCP tool.",
  },
  search_channels_active: {
    id: "localConversation.mcpToolActivity.slack.search_channels.active",
    defaultMessage: "Searching channels",
    description: "Active label for the slack search_channels MCP tool.",
  },
  search_channels_completed: {
    id: "localConversation.mcpToolActivity.slack.search_channels.completed",
    defaultMessage: "Searched channels",
    description: "Completed label for the slack search_channels MCP tool.",
  },
  search_public_active: {
    id: "localConversation.mcpToolActivity.slack.search_public.active",
    defaultMessage: "Searching messages",
    description: "Active label for the slack search_public MCP tool.",
  },
  search_public_completed: {
    id: "localConversation.mcpToolActivity.slack.search_public.completed",
    defaultMessage: "Searched messages",
    description: "Completed label for the slack search_public MCP tool.",
  },
  search_public_and_private_active: {
    id: "localConversation.mcpToolActivity.slack.search_public_and_private.active",
    defaultMessage: "Searching messages",
    description:
      "Active label for the slack search_public_and_private MCP tool.",
  },
  search_public_and_private_completed: {
    id: "localConversation.mcpToolActivity.slack.search_public_and_private.completed",
    defaultMessage: "Searched messages",
    description:
      "Completed label for the slack search_public_and_private MCP tool.",
  },
  search_users_active: {
    id: "localConversation.mcpToolActivity.slack.search_users.active",
    defaultMessage: "Searching users",
    description: "Active label for the slack search_users MCP tool.",
  },
  search_users_completed: {
    id: "localConversation.mcpToolActivity.slack.search_users.completed",
    defaultMessage: "Searched users",
    description: "Completed label for the slack search_users MCP tool.",
  },
});

export const slackMcpToolLabels: McpToolActivityLabelMap =
  withAppToolKeyAliases("slack", {
    create_canvas: {
      active: slackMcpToolMessages.create_canvas_active,
      completed: slackMcpToolMessages.create_canvas_completed,
    },
    schedule_message: {
      active: slackMcpToolMessages.schedule_message_active,
      completed: slackMcpToolMessages.schedule_message_completed,
    },
    send_message: {
      active: slackMcpToolMessages.send_message_active,
      completed: slackMcpToolMessages.send_message_completed,
    },
    send_message_draft: {
      active: slackMcpToolMessages.send_message_draft_active,
      completed: slackMcpToolMessages.send_message_draft_completed,
    },
    read_canvas: {
      active: slackMcpToolMessages.read_canvas_active,
      completed: slackMcpToolMessages.read_canvas_completed,
    },
    read_channel: {
      active: slackMcpToolMessages.read_channel_active,
      completed: slackMcpToolMessages.read_channel_completed,
    },
    read_thread: {
      active: slackMcpToolMessages.read_thread_active,
      completed: slackMcpToolMessages.read_thread_completed,
    },
    read_user_profile: {
      active: slackMcpToolMessages.read_user_profile_active,
      completed: slackMcpToolMessages.read_user_profile_completed,
    },
    search_channels: {
      active: slackMcpToolMessages.search_channels_active,
      completed: slackMcpToolMessages.search_channels_completed,
    },
    search_public: {
      active: slackMcpToolMessages.search_public_active,
      completed: slackMcpToolMessages.search_public_completed,
    },
    search_public_and_private: {
      active: slackMcpToolMessages.search_public_and_private_active,
      completed: slackMcpToolMessages.search_public_and_private_completed,
    },
    search_users: {
      active: slackMcpToolMessages.search_users_active,
      completed: slackMcpToolMessages.search_users_completed,
    },
  });
