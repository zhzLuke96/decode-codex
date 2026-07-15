// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared builder for MCP activity-label maps.
import type {
  McpToolActivityLabelMap,
  McpToolActivityLabelPair,
} from "./mcp-tool-label-types";

export interface BuildToolLabelsOptions {
  appId: string;
  aliases?: readonly string[];
  descriptionApp: string;
  overrides?: Partial<Record<string, ToolLabelOverride>>;
  toolKeys: readonly string[];
}

export interface ToolLabelOverride {
  active: string;
  completed: string;
}

export function buildToolLabels({
  appId,
  aliases = [],
  descriptionApp,
  overrides = {},
  toolKeys,
}: BuildToolLabelsOptions): McpToolActivityLabelMap {
  const labels: McpToolActivityLabelMap = {};
  for (const toolKey of toolKeys) {
    const pair = buildToolLabelPair({
      appId,
      descriptionApp,
      override: overrides[toolKey],
      toolKey,
    });
    labels[toolKey] = pair;
    for (const alias of aliases) {
      labels[`${alias}_${toolKey}`] = pair;
    }
  }
  return labels;
}

function buildToolLabelPair({
  appId,
  descriptionApp,
  override,
  toolKey,
}: {
  appId: string;
  descriptionApp: string;
  override: ToolLabelOverride | undefined;
  toolKey: string;
}): McpToolActivityLabelPair {
  const defaults = override ?? defaultToolLabelOverride(toolKey);
  return {
    active: {
      id: `localConversation.mcpToolActivity.${appId}.${toolKey}.active`,
      defaultMessage: defaults.active,
      description: `Active label for the ${descriptionApp} ${toolKey} MCP tool.`,
    },
    completed: {
      id: `localConversation.mcpToolActivity.${appId}.${toolKey}.completed`,
      defaultMessage: defaults.completed,
      description: `Completed label for the ${descriptionApp} ${toolKey} MCP tool.`,
    },
  };
}

function defaultToolLabelOverride(toolKey: string): ToolLabelOverride {
  const [verb, ...restParts] = toolKey.split("_");
  const target = humanizeToolTarget(restParts.length === 0 ? [verb] : restParts);
  switch (verb) {
    case "add":
      return { active: `Adding ${target}`, completed: `Added ${target}` };
    case "apply":
      return { active: `Applying ${target}`, completed: `Applied ${target}` };
    case "archive":
      return { active: `Archiving ${target}`, completed: `Archived ${target}` };
    case "batch":
      return {
        active: humanizeToolTarget([verb, ...restParts]),
        completed: humanizeToolTarget([verb, ...restParts]),
      };
    case "check":
      return { active: `Checking ${target}`, completed: `Checked ${target}` };
    case "compare":
      return { active: `Comparing ${target}`, completed: `Compared ${target}` };
    case "copy":
      return { active: `Copying ${target}`, completed: `Copied ${target}` };
    case "create":
      return { active: `Creating ${target}`, completed: `Created ${target}` };
    case "delete":
      return { active: `Deleting ${target}`, completed: `Deleted ${target}` };
    case "download":
      return { active: `Downloading ${target}`, completed: `Downloaded ${target}` };
    case "duplicate":
      return { active: `Duplicating ${target}`, completed: `Duplicated ${target}` };
    case "enable":
      return { active: `Enabling ${target}`, completed: `Enabled ${target}` };
    case "export":
      return { active: `Exporting ${target}`, completed: `Exported ${target}` };
    case "extract":
      return { active: `Extracting ${target}`, completed: `Extracted ${target}` };
    case "fetch":
      return { active: `Fetching ${target}`, completed: `Fetched ${target}` };
    case "find":
      return { active: `Finding ${target}`, completed: `Found ${target}` };
    case "forward":
      return { active: `Forwarding ${target}`, completed: `Forwarded ${target}` };
    case "get":
      return { active: `Getting ${target}`, completed: `Got ${target}` };
    case "import":
      return { active: `Importing ${target}`, completed: `Imported ${target}` };
    case "label":
      return { active: `Labeling ${target}`, completed: `Labeled ${target}` };
    case "list":
      return { active: `Listing ${target}`, completed: `Listed ${target}` };
    case "read":
      return { active: `Reading ${target}`, completed: `Read ${target}` };
    case "remove":
      return { active: `Removing ${target}`, completed: `Removed ${target}` };
    case "reply":
      return {
        active: `Replying to ${target}`,
        completed: `Replied to ${target}`,
      };
    case "research":
      return { active: "Researching", completed: "Researched" };
    case "respond":
      return {
        active: `Responding to ${target}`,
        completed: `Responded to ${target}`,
      };
    case "save":
      return { active: `Saving ${target}`, completed: `Saved ${target}` };
    case "search":
      return { active: `Searching ${target}`, completed: `Searched ${target}` };
    case "send":
      return { active: `Sending ${target}`, completed: `Sent ${target}` };
    case "share":
      return { active: `Sharing ${target}`, completed: `Shared ${target}` };
    case "update":
      return { active: `Updating ${target}`, completed: `Updated ${target}` };
    default:
      return {
        active: humanizeToolTarget([verb, ...restParts]),
        completed: humanizeToolTarget([verb, ...restParts]),
      };
  }
}

function humanizeToolTarget(parts: readonly string[]): string {
  return parts
    .map((part) => {
      switch (part) {
        case "id":
          return "ID";
        case "ids":
          return "IDs";
        case "pr":
          return "pull request";
        case "prs":
          return "pull requests";
        case "repo":
          return "repository";
        case "repos":
          return "repositories";
        case "url":
          return "URL";
        default:
          return part;
      }
    })
    .join(" ");
}
