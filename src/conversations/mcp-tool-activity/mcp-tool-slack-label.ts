// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds Slack MCP tool activity labels: previews of messages/queries, read counts,
// search-target nouns, and user-id → display-name substitution in search queries.
import {
  zodArray,
  zodJson,
  zodLiteral,
  zodNumber,
  zodObject,
  zodString,
} from "../../boundaries/src-l0hb-mz-p";
import { countToolResultItems } from "../../boundaries/onboarding-commons-externals.facade";
import type { IntlShape } from "../../vendor/react-intl";
import type {
  McpMatchingApp,
  McpToolLabelBuilderInput,
  McpToolResultLike,
} from "./mcp-tool-label-types";

const SLACK_APP_KEYWORD = "slack";
const SLACK_PREVIEW_MAX_LENGTH = 36;
const SLACK_MESSAGE_TOOL_KEYS = new Set([
  "schedule_message",
  "send_message",
  "send_message_draft",
]);
const SLACK_SEARCH_TOOL_KEYS = new Set([
  "search_channels",
  "search_public",
  "search_public_and_private",
  "search_users",
]);

const slackToolArgumentsSchema = zodObject({
  content_types: zodString().trim().min(1).max(64).optional().catch(undefined),
  limit: zodNumber().int().positive().optional().catch(undefined),
  message: zodString().trim().min(1).max(5e3).optional().catch(undefined),
  query: zodString().trim().min(1).max(500).optional().catch(undefined),
  title: zodString().trim().min(1).max(200).optional().catch(undefined),
  user_id: zodString().trim().min(1).max(32).optional().catch(undefined),
}).passthrough();

const slackTextContentSchema = zodObject({
  text: zodString(),
  type: zodLiteral("text"),
}).passthrough();

const slackToolResultSchema = zodObject({
  content: zodArray(slackTextContentSchema).optional().catch(undefined),
  raw: zodObject({
    content: zodArray(slackTextContentSchema).optional().catch(undefined),
  })
    .passthrough()
    .optional()
    .catch(undefined),
  type: zodLiteral("success"),
}).passthrough();

export function isSlackApp(app: McpMatchingApp | null | undefined): boolean {
  return app == null
    ? false
    : [app.name, app.id, ...(app.pluginDisplayNames ?? [])].some((candidate) =>
        candidate.trim().toLowerCase().includes(SLACK_APP_KEYWORD),
      );
}

export function getSlackMcpToolLabel({
  completed,
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolResult,
  toolKey,
}: McpToolLabelBuilderInput): string | null {
  if (!isSlackApp(matchingApp)) return null;
  const parsed = slackToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const { content_types, message, query, title, user_id } = parsed.data;

  if (toolKey === "create_canvas")
    return formatSlackLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: title,
    });
  if (SLACK_MESSAGE_TOOL_KEYS.has(toolKey))
    return formatSlackLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: message,
    });
  if (toolKey === "read_user_profile" && user_id == null)
    return completed
      ? intl.formatMessage({
          id: "codex.mcpTool.slack.readYourProfile.completed",
          defaultMessage: "Read your profile",
          description:
            "Completed label for reading the current user's Slack profile.",
        })
      : intl.formatMessage({
          id: "codex.mcpTool.slack.readYourProfile.active",
          defaultMessage: "Reading your profile",
          description:
            "Active label for reading the current user's Slack profile.",
        });

  if (toolKey === "read_channel") {
    if (!completed)
      return intl.formatMessage({
        id: "codex.mcpTool.slack.readMessages.active",
        defaultMessage: "Reading messages",
        description: "Active label for reading Slack channel messages.",
      });
    const count = countToolResultItems({
      preferredKeys: ["messages"],
      toolResult,
    });
    return count == null
      ? intl.formatMessage({
          id: "codex.mcpTool.slack.readMessages.completed",
          defaultMessage: "Read messages",
          description: "Completed fallback label for Slack channel reads.",
        })
      : intl.formatMessage(
          {
            id: "codex.mcpTool.slack.readMessages.completedCount",
            defaultMessage:
              "Read {count, plural, one {a message} other {{count, number} messages}}",
            description:
              "Completed label for Slack channel reads when an exact message count is known.",
          },
          { count },
        );
  }

  if (toolKey === "read_thread") {
    if (!completed)
      return intl.formatMessage({
        id: "codex.mcpTool.slack.readThreadReplies.active",
        defaultMessage: "Reading thread replies",
        description: "Active label for reading Slack thread replies.",
      });
    const count = countToolResultItems({
      preferredKeys: ["replies", "messages"],
      toolResult,
    });
    return count == null
      ? intl.formatMessage({
          id: "codex.mcpTool.slack.readThreadReplies.completed",
          defaultMessage: "Read thread replies",
          description: "Completed fallback label for Slack thread reads.",
        })
      : intl.formatMessage(
          {
            id: "codex.mcpTool.slack.readThreadReplies.completedCount",
            defaultMessage:
              "Read {count, plural, one {a thread reply} other {{count, number} thread replies}}",
            description:
              "Completed label for Slack thread reads when an exact reply count is known.",
          },
          { count },
        );
  }

  if (SLACK_SEARCH_TOOL_KEYS.has(toolKey)) {
    const target = resolveSlackSearchTargetNoun({
      intl,
      contentTypes: content_types,
      toolKey,
    });
    return formatSlackLabelWithPreview({
      intl,
      label: completed
        ? intl.formatMessage(
            {
              id: "codex.mcpTool.slack.search.completed",
              defaultMessage: "Searched {target}",
              description:
                "Completed Slack search label with a localized target noun.",
            },
            { target },
          )
        : intl.formatMessage(
            {
              id: "codex.mcpTool.slack.search.active",
              defaultMessage: "Searching {target}",
              description:
                "Active Slack search label with a localized target noun.",
            },
            { target },
          ),
      value: formatSlackSearchQuery({ query, toolResult }),
    });
  }

  return null;
}

function formatSlackLabelWithPreview({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = buildSlackPreview(value);
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.slack.labelWithPreview",
          defaultMessage: '{label} "{preview}"',
          description: "Slack MCP label with a short text preview.",
        },
        { label, preview },
      );
}

function buildSlackPreview(value: string | null | undefined): string | null {
  if (value == null) return null;
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length === 0
    ? null
    : normalized.length <= SLACK_PREVIEW_MAX_LENGTH
      ? normalized
      : `${normalized.slice(0, SLACK_PREVIEW_MAX_LENGTH - 1).trimEnd()}…`;
}

function formatSlackSearchQuery({
  query,
  toolResult,
}: {
  query: string | null | undefined;
  toolResult?: McpToolResultLike | null;
}): string | undefined {
  if (query == null) return;
  const userNamesById = buildSlackUserIdNameMap(toolResult);
  return query
    .replace(
      /\b(from|in|to):<@(U[A-Z0-9]+)(?:\|([^>]+))?>/g,
      (_match, prefix, userId, inlineName) =>
        `${prefix}:${
          inlineName == null
            ? (userNamesById.get(userId) ?? userId)
            : `@${inlineName}`
        }`,
    )
    .replace(/<@(U[A-Z0-9]+)(?:\|([^>]+))?>/g, (_match, userId, inlineName) =>
      inlineName == null
        ? (userNamesById.get(userId) ?? userId)
        : `@${inlineName}`,
    )
    .replace(/"([^"]+)"/g, "$1");
}

function buildSlackUserIdNameMap(
  toolResult?: McpToolResultLike | null,
): Map<string, string> {
  const parsed = slackToolResultSchema.safeParse(toolResult);
  const userNamesById = new Map<string, string>();
  if (!parsed.success) return userNamesById;
  for (const block of [
    ...(parsed.data.content ?? []),
    ...(parsed.data.raw?.content ?? []),
  ])
    for (const match of block.text.matchAll(
      /From:\s*([^\n(]+?)\s*\(ID:\s*(U[A-Z0-9]+)\)/g,
    ))
      userNamesById.set(match[2], match[1].trim());
  return userNamesById;
}

function resolveSlackSearchTargetNoun({
  intl,
  contentTypes,
  toolKey,
}: {
  intl: IntlShape;
  contentTypes: string | null | undefined;
  toolKey: string;
}): string {
  if (toolKey === "search_channels")
    return intl.formatMessage({
      id: "codex.mcpTool.slack.searchTarget.channels",
      defaultMessage: "channels",
      description: "Slack search target noun for channels.",
    });
  if (toolKey === "search_users")
    return intl.formatMessage({
      id: "codex.mcpTool.slack.searchTarget.users",
      defaultMessage: "users",
      description: "Slack search target noun for users.",
    });
  const types =
    contentTypes
      ?.split(",")
      .map((type) => type.trim().toLowerCase())
      .filter((type) => type.length > 0) ?? [];
  return types.length === 1 && types[0] === "files"
    ? intl.formatMessage({
        id: "codex.mcpTool.slack.searchTarget.files",
        defaultMessage: "files",
        description: "Slack search target noun for files.",
      })
    : types.length === 2 &&
        types.includes("files") &&
        types.includes("messages")
      ? intl.formatMessage({
          id: "codex.mcpTool.slack.searchTarget.messagesAndFiles",
          defaultMessage: "messages and files",
          description:
            "Slack search target noun for messages and files together.",
        })
      : intl.formatMessage({
          id: "codex.mcpTool.slack.searchTarget.messages",
          defaultMessage: "messages",
          description: "Slack search target noun for messages.",
        });
}
