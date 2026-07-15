// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Vercel MCP activity labels.

import { defineMessages } from "../../vendor/react-intl";
import type { McpToolActivityLabelMap } from "./mcp-tool-label-types";

const vercelMcpToolMessages = defineMessages({
  deploy_to_vercel_active: {
    id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.active",
    defaultMessage: "Deploying to Vercel",
    description: "Active label for the vercel deploy_to_vercel MCP tool.",
  },
  deploy_to_vercel_completed: {
    id: "localConversation.mcpToolActivity.vercel.deploy_to_vercel.completed",
    defaultMessage: "Deployed to Vercel",
    description: "Completed label for the vercel deploy_to_vercel MCP tool.",
  },
  check_domain_availability_and_price_active: {
    id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.active",
    defaultMessage: "Checking domain availability",
    description:
      "Active label for the vercel check_domain_availability_and_price MCP tool.",
  },
  check_domain_availability_and_price_completed: {
    id: "localConversation.mcpToolActivity.vercel.check_domain_availability_and_price.completed",
    defaultMessage: "Checked domain availability",
    description:
      "Completed label for the vercel check_domain_availability_and_price MCP tool.",
  },
  get_access_to_vercel_url_active: {
    id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.active",
    defaultMessage: "Getting deployment access",
    description:
      "Active label for the vercel get_access_to_vercel_url MCP tool.",
  },
  get_access_to_vercel_url_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_access_to_vercel_url.completed",
    defaultMessage: "Got deployment access",
    description:
      "Completed label for the vercel get_access_to_vercel_url MCP tool.",
  },
  get_deployment_active: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment.active",
    defaultMessage: "Getting deployment",
    description: "Active label for the vercel get_deployment MCP tool.",
  },
  get_deployment_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment.completed",
    defaultMessage: "Got deployment",
    description: "Completed label for the vercel get_deployment MCP tool.",
  },
  get_deployment_build_logs_active: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.active",
    defaultMessage: "Getting build logs",
    description:
      "Active label for the vercel get_deployment_build_logs MCP tool.",
  },
  get_deployment_build_logs_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_deployment_build_logs.completed",
    defaultMessage: "Got build logs",
    description:
      "Completed label for the vercel get_deployment_build_logs MCP tool.",
  },
  get_project_active: {
    id: "localConversation.mcpToolActivity.vercel.get_project.active",
    defaultMessage: "Getting project",
    description: "Active label for the vercel get_project MCP tool.",
  },
  get_project_completed: {
    id: "localConversation.mcpToolActivity.vercel.get_project.completed",
    defaultMessage: "Got project",
    description: "Completed label for the vercel get_project MCP tool.",
  },
  list_deployments_active: {
    id: "localConversation.mcpToolActivity.vercel.list_deployments.active",
    defaultMessage: "Listing deployments",
    description: "Active label for the vercel list_deployments MCP tool.",
  },
  list_deployments_completed: {
    id: "localConversation.mcpToolActivity.vercel.list_deployments.completed",
    defaultMessage: "Listed deployments",
    description: "Completed label for the vercel list_deployments MCP tool.",
  },
  list_projects_active: {
    id: "localConversation.mcpToolActivity.vercel.list_projects.active",
    defaultMessage: "Listing projects",
    description: "Active label for the vercel list_projects MCP tool.",
  },
  list_projects_completed: {
    id: "localConversation.mcpToolActivity.vercel.list_projects.completed",
    defaultMessage: "Listed projects",
    description: "Completed label for the vercel list_projects MCP tool.",
  },
  list_teams_active: {
    id: "localConversation.mcpToolActivity.vercel.list_teams.active",
    defaultMessage: "Listing teams",
    description: "Active label for the vercel list_teams MCP tool.",
  },
  list_teams_completed: {
    id: "localConversation.mcpToolActivity.vercel.list_teams.completed",
    defaultMessage: "Listed teams",
    description: "Completed label for the vercel list_teams MCP tool.",
  },
  search_vercel_documentation_active: {
    id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.active",
    defaultMessage: "Searching Vercel docs",
    description:
      "Active label for the vercel search_vercel_documentation MCP tool.",
  },
  search_vercel_documentation_completed: {
    id: "localConversation.mcpToolActivity.vercel.search_vercel_documentation.completed",
    defaultMessage: "Searched Vercel docs",
    description:
      "Completed label for the vercel search_vercel_documentation MCP tool.",
  },
  web_fetch_vercel_url_active: {
    id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.active",
    defaultMessage: "Fetching deployment URL",
    description: "Active label for the vercel web_fetch_vercel_url MCP tool.",
  },
  web_fetch_vercel_url_completed: {
    id: "localConversation.mcpToolActivity.vercel.web_fetch_vercel_url.completed",
    defaultMessage: "Fetched deployment URL",
    description:
      "Completed label for the vercel web_fetch_vercel_url MCP tool.",
  },
});

export const vercelMcpToolLabels: McpToolActivityLabelMap = {
  deploy_to_vercel: {
    active: vercelMcpToolMessages.deploy_to_vercel_active,
    completed: vercelMcpToolMessages.deploy_to_vercel_completed,
  },
  check_domain_availability_and_price: {
    active: vercelMcpToolMessages.check_domain_availability_and_price_active,
    completed:
      vercelMcpToolMessages.check_domain_availability_and_price_completed,
  },
  get_access_to_vercel_url: {
    active: vercelMcpToolMessages.get_access_to_vercel_url_active,
    completed: vercelMcpToolMessages.get_access_to_vercel_url_completed,
  },
  get_deployment: {
    active: vercelMcpToolMessages.get_deployment_active,
    completed: vercelMcpToolMessages.get_deployment_completed,
  },
  get_deployment_build_logs: {
    active: vercelMcpToolMessages.get_deployment_build_logs_active,
    completed: vercelMcpToolMessages.get_deployment_build_logs_completed,
  },
  get_project: {
    active: vercelMcpToolMessages.get_project_active,
    completed: vercelMcpToolMessages.get_project_completed,
  },
  list_deployments: {
    active: vercelMcpToolMessages.list_deployments_active,
    completed: vercelMcpToolMessages.list_deployments_completed,
  },
  list_projects: {
    active: vercelMcpToolMessages.list_projects_active,
    completed: vercelMcpToolMessages.list_projects_completed,
  },
  list_teams: {
    active: vercelMcpToolMessages.list_teams_active,
    completed: vercelMcpToolMessages.list_teams_completed,
  },
  search_vercel_documentation: {
    active: vercelMcpToolMessages.search_vercel_documentation_active,
    completed: vercelMcpToolMessages.search_vercel_documentation_completed,
  },
  web_fetch_vercel_url: {
    active: vercelMcpToolMessages.web_fetch_vercel_url_active,
    completed: vercelMcpToolMessages.web_fetch_vercel_url_completed,
  },
};
