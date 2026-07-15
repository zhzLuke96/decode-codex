// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Sites MCP activity labels.

import { defineMessages } from "../../vendor/react-intl";
import type { McpToolActivityLabelMap } from "./mcp-tool-label-types";
import { withAppToolKeyAliases } from "./with-app-tool-key-aliases";

const sitesMcpToolMessages = defineMessages({
  create_project_active: {
    id: "localConversation.mcpToolActivity.sites.create_project.active",
    defaultMessage: "Creating Sites project",
    description: "Active label for the Sites create_project MCP tool.",
  },
  create_project_completed: {
    id: "localConversation.mcpToolActivity.sites.create_project.completed",
    defaultMessage: "Created Sites project",
    description: "Completed label for the Sites create_project MCP tool.",
  },
  create_project_version_active: {
    id: "localConversation.mcpToolActivity.sites.create_project_version.active",
    defaultMessage: "Saving Sites version",
    description: "Active label for the Sites create_project_version MCP tool.",
  },
  create_project_version_completed: {
    id: "localConversation.mcpToolActivity.sites.create_project_version.completed",
    defaultMessage: "Saved Sites version",
    description:
      "Completed label for the Sites create_project_version MCP tool.",
  },
  deploy_project_version_active: {
    id: "localConversation.mcpToolActivity.sites.deploy_project_version.active",
    defaultMessage: "Deploying Sites version",
    description: "Active label for the Sites deploy_project_version MCP tool.",
  },
  deploy_project_version_completed: {
    id: "localConversation.mcpToolActivity.sites.deploy_project_version.completed",
    defaultMessage: "Deployed Sites version",
    description:
      "Completed label for the Sites deploy_project_version MCP tool.",
  },
  get_project_active: {
    id: "localConversation.mcpToolActivity.sites.get_project.active",
    defaultMessage: "Getting Sites project",
    description: "Active label for the Sites get_project MCP tool.",
  },
  get_project_completed: {
    id: "localConversation.mcpToolActivity.sites.get_project.completed",
    defaultMessage: "Got Sites project",
    description: "Completed label for the Sites get_project MCP tool.",
  },
  get_environment_active: {
    id: "localConversation.mcpToolActivity.sites.get_environment.active",
    defaultMessage: "Getting Sites environment",
    description: "Active label for the Sites get_environment MCP tool.",
  },
  get_environment_completed: {
    id: "localConversation.mcpToolActivity.sites.get_environment.completed",
    defaultMessage: "Got Sites environment",
    description: "Completed label for the Sites get_environment MCP tool.",
  },
  get_project_deployment_active: {
    id: "localConversation.mcpToolActivity.sites.get_project_deployment.active",
    defaultMessage: "Getting Sites deployment",
    description: "Active label for the Sites get_project_deployment MCP tool.",
  },
  get_project_deployment_completed: {
    id: "localConversation.mcpToolActivity.sites.get_project_deployment.completed",
    defaultMessage: "Got Sites deployment",
    description:
      "Completed label for the Sites get_project_deployment MCP tool.",
  },
  get_project_version_active: {
    id: "localConversation.mcpToolActivity.sites.get_project_version.active",
    defaultMessage: "Getting Sites version",
    description: "Active label for the Sites get_project_version MCP tool.",
  },
  get_project_version_completed: {
    id: "localConversation.mcpToolActivity.sites.get_project_version.completed",
    defaultMessage: "Got Sites version",
    description: "Completed label for the Sites get_project_version MCP tool.",
  },
  list_access_groups_active: {
    id: "localConversation.mcpToolActivity.sites.list_access_groups.active",
    defaultMessage: "Listing access groups",
    description: "Active label for the Sites list_access_groups MCP tool.",
  },
  list_access_groups_completed: {
    id: "localConversation.mcpToolActivity.sites.list_access_groups.completed",
    defaultMessage: "Listed access groups",
    description: "Completed label for the Sites list_access_groups MCP tool.",
  },
  list_projects_active: {
    id: "localConversation.mcpToolActivity.sites.list_projects.active",
    defaultMessage: "Listing Sites projects",
    description: "Active label for the Sites list_projects MCP tool.",
  },
  list_projects_completed: {
    id: "localConversation.mcpToolActivity.sites.list_projects.completed",
    defaultMessage: "Listed Sites projects",
    description: "Completed label for the Sites list_projects MCP tool.",
  },
  update_access_active: {
    id: "localConversation.mcpToolActivity.sites.update_access.active",
    defaultMessage: "Updating Sites access",
    description: "Active label for the Sites update_access MCP tool.",
  },
  update_access_completed: {
    id: "localConversation.mcpToolActivity.sites.update_access.completed",
    defaultMessage: "Updated Sites access",
    description: "Completed label for the Sites update_access MCP tool.",
  },
  update_environment_active: {
    id: "localConversation.mcpToolActivity.sites.update_environment.active",
    defaultMessage: "Updating Sites environment",
    description: "Active label for the Sites update_environment MCP tool.",
  },
  update_environment_completed: {
    id: "localConversation.mcpToolActivity.sites.update_environment.completed",
    defaultMessage: "Updated Sites environment",
    description: "Completed label for the Sites update_environment MCP tool.",
  },
});

export const sitesMcpToolLabels: McpToolActivityLabelMap =
  withAppToolKeyAliases("sites", {
    create_project: {
      active: sitesMcpToolMessages.create_project_active,
      completed: sitesMcpToolMessages.create_project_completed,
    },
    create_project_version: {
      active: sitesMcpToolMessages.create_project_version_active,
      completed: sitesMcpToolMessages.create_project_version_completed,
    },
    deploy_project_version: {
      active: sitesMcpToolMessages.deploy_project_version_active,
      completed: sitesMcpToolMessages.deploy_project_version_completed,
    },
    get_project: {
      active: sitesMcpToolMessages.get_project_active,
      completed: sitesMcpToolMessages.get_project_completed,
    },
    get_environment: {
      active: sitesMcpToolMessages.get_environment_active,
      completed: sitesMcpToolMessages.get_environment_completed,
    },
    get_project_deployment: {
      active: sitesMcpToolMessages.get_project_deployment_active,
      completed: sitesMcpToolMessages.get_project_deployment_completed,
    },
    get_project_version: {
      active: sitesMcpToolMessages.get_project_version_active,
      completed: sitesMcpToolMessages.get_project_version_completed,
    },
    list_access_groups: {
      active: sitesMcpToolMessages.list_access_groups_active,
      completed: sitesMcpToolMessages.list_access_groups_completed,
    },
    list_projects: {
      active: sitesMcpToolMessages.list_projects_active,
      completed: sitesMcpToolMessages.list_projects_completed,
    },
    update_access: {
      active: sitesMcpToolMessages.update_access_active,
      completed: sitesMcpToolMessages.update_access_completed,
    },
    update_environment: {
      active: sitesMcpToolMessages.update_environment_active,
      completed: sitesMcpToolMessages.update_environment_completed,
    },
  });
