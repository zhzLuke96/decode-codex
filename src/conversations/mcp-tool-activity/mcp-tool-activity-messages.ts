// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Aggregated registry mapping MCP app/tool keys to localized activity labels.

import {
  browserMcpToolLabels,
  figmaMcpToolLabels,
  githubMcpToolLabels,
  gmailMcpToolLabels,
  googleCalendarMcpToolLabels,
  googleDriveMcpToolLabels,
  linearMcpToolLabels,
} from "../../boundaries/onboarding-commons-externals.facade";
import { notionMcpToolLabels } from "./notion-mcp-tool-activity-labels";
import { sitesMcpToolLabels } from "./sites-mcp-tool-activity-labels";
import { slackMcpToolLabels } from "./slack-mcp-tool-activity-labels";
import { vercelMcpToolLabels } from "./vercel-mcp-tool-activity-labels";
import type { McpToolActivityLabelMap } from "./mcp-tool-label-types";

export { notionMcpToolLabels } from "./notion-mcp-tool-activity-labels";
export { sitesMcpToolLabels } from "./sites-mcp-tool-activity-labels";
export { slackMcpToolLabels } from "./slack-mcp-tool-activity-labels";
export { vercelMcpToolLabels } from "./vercel-mcp-tool-activity-labels";

export interface McpAppToolActivityRegistry {
  apps: Record<string, { tools: McpToolActivityLabelMap }>;
  tools: McpToolActivityLabelMap;
}

export const mcpAppToolActivityRegistry: McpAppToolActivityRegistry = {
  apps: {
    browser: { tools: browserMcpToolLabels },
    github: { tools: githubMcpToolLabels },
    gmail: { tools: gmailMcpToolLabels },
    google_calendar: { tools: googleCalendarMcpToolLabels },
    google_drive: { tools: googleDriveMcpToolLabels },
    figma: { tools: figmaMcpToolLabels },
    linear: { tools: linearMcpToolLabels },
    notion: { tools: notionMcpToolLabels },
    sites: { tools: sitesMcpToolLabels },
    slack: { tools: slackMcpToolLabels },
    vercel: { tools: vercelMcpToolLabels },
  },
  tools: {
    browser_run_code_unsafe: browserMcpToolLabels.browser_run_code_unsafe,
  },
};
