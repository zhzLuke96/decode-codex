// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Notion MCP activity labels.

import { defineMessages } from "../../vendor/react-intl";
import type { McpToolActivityLabelMap } from "./mcp-tool-label-types";
import { withAppToolKeyAliases } from "./with-app-tool-key-aliases";

const notionMcpToolMessages = defineMessages({
  create_comment_active: {
    id: "localConversation.mcpToolActivity.notion.create_comment.active",
    defaultMessage: "Creating comment",
    description: "Active label for the notion create_comment MCP tool.",
  },
  create_comment_completed: {
    id: "localConversation.mcpToolActivity.notion.create_comment.completed",
    defaultMessage: "Created comment",
    description: "Completed label for the notion create_comment MCP tool.",
  },
  create_database_active: {
    id: "localConversation.mcpToolActivity.notion.create_database.active",
    defaultMessage: "Creating database",
    description: "Active label for the notion create_database MCP tool.",
  },
  create_database_completed: {
    id: "localConversation.mcpToolActivity.notion.create_database.completed",
    defaultMessage: "Created database",
    description: "Completed label for the notion create_database MCP tool.",
  },
  create_pages_active: {
    id: "localConversation.mcpToolActivity.notion.create_pages.active",
    defaultMessage: "Creating pages",
    description: "Active label for the notion create_pages MCP tool.",
  },
  create_pages_completed: {
    id: "localConversation.mcpToolActivity.notion.create_pages.completed",
    defaultMessage: "Created pages",
    description: "Completed label for the notion create_pages MCP tool.",
  },
  create_view_active: {
    id: "localConversation.mcpToolActivity.notion.create_view.active",
    defaultMessage: "Creating view",
    description: "Active label for the notion create_view MCP tool.",
  },
  create_view_completed: {
    id: "localConversation.mcpToolActivity.notion.create_view.completed",
    defaultMessage: "Created view",
    description: "Completed label for the notion create_view MCP tool.",
  },
  duplicate_page_active: {
    id: "localConversation.mcpToolActivity.notion.duplicate_page.active",
    defaultMessage: "Duplicating page",
    description: "Active label for the notion duplicate_page MCP tool.",
  },
  duplicate_page_completed: {
    id: "localConversation.mcpToolActivity.notion.duplicate_page.completed",
    defaultMessage: "Duplicated page",
    description: "Completed label for the notion duplicate_page MCP tool.",
  },
  move_pages_active: {
    id: "localConversation.mcpToolActivity.notion.move_pages.active",
    defaultMessage: "Moving pages",
    description: "Active label for the notion move_pages MCP tool.",
  },
  move_pages_completed: {
    id: "localConversation.mcpToolActivity.notion.move_pages.completed",
    defaultMessage: "Moved pages",
    description: "Completed label for the notion move_pages MCP tool.",
  },
  update_data_source_active: {
    id: "localConversation.mcpToolActivity.notion.update_data_source.active",
    defaultMessage: "Updating data source",
    description: "Active label for the notion update_data_source MCP tool.",
  },
  update_data_source_completed: {
    id: "localConversation.mcpToolActivity.notion.update_data_source.completed",
    defaultMessage: "Updated data source",
    description: "Completed label for the notion update_data_source MCP tool.",
  },
  update_page_active: {
    id: "localConversation.mcpToolActivity.notion.update_page.active",
    defaultMessage: "Updating page",
    description: "Active label for the notion update_page MCP tool.",
  },
  update_page_completed: {
    id: "localConversation.mcpToolActivity.notion.update_page.completed",
    defaultMessage: "Updated page",
    description: "Completed label for the notion update_page MCP tool.",
  },
  update_view_active: {
    id: "localConversation.mcpToolActivity.notion.update_view.active",
    defaultMessage: "Updating view",
    description: "Active label for the notion update_view MCP tool.",
  },
  update_view_completed: {
    id: "localConversation.mcpToolActivity.notion.update_view.completed",
    defaultMessage: "Updated view",
    description: "Completed label for the notion update_view MCP tool.",
  },
  fetch_active: {
    id: "localConversation.mcpToolActivity.notion.fetch.active",
    defaultMessage: "Fetching page",
    description: "Active label for the notion fetch MCP tool.",
  },
  fetch_completed: {
    id: "localConversation.mcpToolActivity.notion.fetch.completed",
    defaultMessage: "Fetched page",
    description: "Completed label for the notion fetch MCP tool.",
  },
  get_comments_active: {
    id: "localConversation.mcpToolActivity.notion.get_comments.active",
    defaultMessage: "Getting comments",
    description: "Active label for the notion get_comments MCP tool.",
  },
  get_comments_completed: {
    id: "localConversation.mcpToolActivity.notion.get_comments.completed",
    defaultMessage: "Got comments",
    description: "Completed label for the notion get_comments MCP tool.",
  },
  get_teams_active: {
    id: "localConversation.mcpToolActivity.notion.get_teams.active",
    defaultMessage: "Getting teams",
    description: "Active label for the notion get_teams MCP tool.",
  },
  get_teams_completed: {
    id: "localConversation.mcpToolActivity.notion.get_teams.completed",
    defaultMessage: "Got teams",
    description: "Completed label for the notion get_teams MCP tool.",
  },
  get_users_active: {
    id: "localConversation.mcpToolActivity.notion.get_users.active",
    defaultMessage: "Getting users",
    description: "Active label for the notion get_users MCP tool.",
  },
  get_users_completed: {
    id: "localConversation.mcpToolActivity.notion.get_users.completed",
    defaultMessage: "Got users",
    description: "Completed label for the notion get_users MCP tool.",
  },
  query_data_sources_active: {
    id: "localConversation.mcpToolActivity.notion.query_data_sources.active",
    defaultMessage: "Querying data sources",
    description: "Active label for the notion query_data_sources MCP tool.",
  },
  query_data_sources_completed: {
    id: "localConversation.mcpToolActivity.notion.query_data_sources.completed",
    defaultMessage: "Queried data sources",
    description: "Completed label for the notion query_data_sources MCP tool.",
  },
  query_meeting_notes_active: {
    id: "localConversation.mcpToolActivity.notion.query_meeting_notes.active",
    defaultMessage: "Querying meeting notes",
    description: "Active label for the notion query_meeting_notes MCP tool.",
  },
  query_meeting_notes_completed: {
    id: "localConversation.mcpToolActivity.notion.query_meeting_notes.completed",
    defaultMessage: "Queried meeting notes",
    description: "Completed label for the notion query_meeting_notes MCP tool.",
  },
  search_active: {
    id: "localConversation.mcpToolActivity.notion.search.active",
    defaultMessage: "Searching Notion",
    description: "Active label for the notion search MCP tool.",
  },
  search_completed: {
    id: "localConversation.mcpToolActivity.notion.search.completed",
    defaultMessage: "Searched Notion",
    description: "Completed label for the notion search MCP tool.",
  },
});

export const notionMcpToolLabels: McpToolActivityLabelMap =
  withAppToolKeyAliases("notion", {
    create_comment: {
      active: notionMcpToolMessages.create_comment_active,
      completed: notionMcpToolMessages.create_comment_completed,
    },
    create_database: {
      active: notionMcpToolMessages.create_database_active,
      completed: notionMcpToolMessages.create_database_completed,
    },
    create_pages: {
      active: notionMcpToolMessages.create_pages_active,
      completed: notionMcpToolMessages.create_pages_completed,
    },
    create_view: {
      active: notionMcpToolMessages.create_view_active,
      completed: notionMcpToolMessages.create_view_completed,
    },
    duplicate_page: {
      active: notionMcpToolMessages.duplicate_page_active,
      completed: notionMcpToolMessages.duplicate_page_completed,
    },
    move_pages: {
      active: notionMcpToolMessages.move_pages_active,
      completed: notionMcpToolMessages.move_pages_completed,
    },
    update_data_source: {
      active: notionMcpToolMessages.update_data_source_active,
      completed: notionMcpToolMessages.update_data_source_completed,
    },
    update_page: {
      active: notionMcpToolMessages.update_page_active,
      completed: notionMcpToolMessages.update_page_completed,
    },
    update_view: {
      active: notionMcpToolMessages.update_view_active,
      completed: notionMcpToolMessages.update_view_completed,
    },
    fetch: {
      active: notionMcpToolMessages.fetch_active,
      completed: notionMcpToolMessages.fetch_completed,
    },
    get_comments: {
      active: notionMcpToolMessages.get_comments_active,
      completed: notionMcpToolMessages.get_comments_completed,
    },
    get_teams: {
      active: notionMcpToolMessages.get_teams_active,
      completed: notionMcpToolMessages.get_teams_completed,
    },
    get_users: {
      active: notionMcpToolMessages.get_users_active,
      completed: notionMcpToolMessages.get_users_completed,
    },
    query_data_sources: {
      active: notionMcpToolMessages.query_data_sources_active,
      completed: notionMcpToolMessages.query_data_sources_completed,
    },
    query_meeting_notes: {
      active: notionMcpToolMessages.query_meeting_notes_active,
      completed: notionMcpToolMessages.query_meeting_notes_completed,
    },
    search: {
      active: notionMcpToolMessages.search_active,
      completed: notionMcpToolMessages.search_completed,
    },
  });
