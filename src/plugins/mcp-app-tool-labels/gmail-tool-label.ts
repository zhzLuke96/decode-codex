// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds human-readable activity labels for the Gmail MCP connector tool calls.
import { z } from "zod";
import type { IntlShape } from "../../vendor/react-intl";
import {
  appMatchesIdentifier,
  truncatePreview,
  type McpAppToolLabelInput,
} from "./shared";
import { countToolResultItems } from "./result-item-count";

const GMAIL_APP_IDENTIFIER = "gmail";
const GMAIL_PREVIEW_MAX_LENGTH = 40;

const GMAIL_SEARCH_TOOL_KEYS = new Set(["search_email_ids", "search_emails"]);
const GMAIL_COMPOSE_TOOL_KEYS = new Set([
  "create_draft",
  "send_email",
  "update_draft",
]);

const gmailToolArgumentsSchema = z
  .object({
    add_label_names: z
      .string()
      .trim()
      .min(1)
      .max(200)
      .optional()
      .catch(undefined),
    add_labels: z.string().trim().min(1).max(200).optional().catch(undefined),
    filename: z.string().trim().min(1).max(200).optional().catch(undefined),
    label_names: z.string().trim().min(1).max(200).optional().catch(undefined),
    max_messages: z.number().int().positive().optional().catch(undefined),
    max_results: z.number().int().positive().optional().catch(undefined),
    name: z.string().trim().min(1).max(200).optional().catch(undefined),
    note: z.string().trim().min(1).max(1e3).optional().catch(undefined),
    query: z.string().trim().min(1).max(500).optional().catch(undefined),
    remove_label_names: z
      .string()
      .trim()
      .min(1)
      .max(200)
      .optional()
      .catch(undefined),
    remove_labels: z
      .string()
      .trim()
      .min(1)
      .max(200)
      .optional()
      .catch(undefined),
    subject: z.string().trim().min(1).max(300).optional().catch(undefined),
    tags: z.string().trim().min(1).max(200).optional().catch(undefined),
    to: z.string().trim().min(1).max(500).optional().catch(undefined),
  })
  .passthrough();

export function isGmailApp(app: McpAppToolLabelInput["matchingApp"]): boolean {
  return appMatchesIdentifier(app, GMAIL_APP_IDENTIFIER);
}

export function buildGmailToolLabel({
  completed,
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolResult,
  toolKey,
}: McpAppToolLabelInput): string | null {
  if (!isGmailApp(matchingApp)) return null;
  const parsed = gmailToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const {
    add_label_names,
    add_labels,
    filename,
    label_names,
    max_results,
    name,
    note,
    query,
    remove_label_names,
    remove_labels,
    subject,
    tags,
    to,
  } = parsed.data;

  if (GMAIL_COMPOSE_TOOL_KEYS.has(toolKey))
    return (
      buildGmailPreviewLabel({ intl, label: fallbackLabel, value: subject }) ??
      buildRecipientLabel({ intl, label: fallbackLabel, recipient: to })
    );
  if (toolKey === "forward_emails")
    return (
      buildRecipientLabel({ intl, label: fallbackLabel, recipient: to }) ??
      buildGmailPreviewLabel({ intl, label: fallbackLabel, value: note })
    );
  if (toolKey === "create_label")
    return buildGmailPreviewLabel({ intl, label: fallbackLabel, value: name });
  if (toolKey === "list_labels")
    return buildGmailPreviewLabel({
      intl,
      label: fallbackLabel,
      value: label_names,
    });
  if (toolKey === "read_attachment")
    return buildGmailPreviewLabel({
      intl,
      label: fallbackLabel,
      value: filename,
    });
  if (toolKey === "read_email_thread") {
    if (!completed)
      return intl.formatMessage({
        id: "codex.mcpTool.gmail.readThreadEmails.active",
        defaultMessage: "Reading thread emails",
        description: "Active label for reading an email thread.",
      });
    const count = countToolResultItems({
      preferredKeys: ["messages", "emails"],
      toolResult,
    });
    return count == null
      ? intl.formatMessage({
          id: "codex.mcpTool.gmail.readThreadEmails.completed",
          defaultMessage: "Read thread emails",
          description: "Completed fallback label for reading an email thread.",
        })
      : intl.formatMessage(
          {
            id: "codex.mcpTool.gmail.readThreadEmails.completedCount",
            defaultMessage:
              "Read {count, plural, one {a thread email} other {{count, number} thread emails}}",
            description:
              "Completed label for reading an email thread when an exact count is known.",
          },
          { count },
        );
  }

  return GMAIL_SEARCH_TOOL_KEYS.has(toolKey)
    ? (buildGmailPreviewLabel({ intl, label: fallbackLabel, value: query }) ??
        buildGmailPreviewLabel({ intl, label: fallbackLabel, value: tags }) ??
        buildSearchCountLabel({
          completed,
          intl,
          maxResults: max_results,
          toolResult,
        }))
    : toolKey === "apply_labels_to_emails"
      ? buildGmailPreviewLabel({
          intl,
          label: fallbackLabel,
          value: add_label_names ?? remove_label_names,
        })
      : toolKey === "batch_modify_email"
        ? buildGmailPreviewLabel({
            intl,
            label: fallbackLabel,
            value: add_labels ?? remove_labels,
          })
        : null;
}

function buildGmailPreviewLabel({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = truncatePreview(value, GMAIL_PREVIEW_MAX_LENGTH);
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.gmail.labelWithPreview",
          defaultMessage: '{label} "{preview}"',
          description: "Gmail MCP label with a short text preview.",
        },
        { label, preview },
      );
}

function buildRecipientLabel({
  intl,
  label,
  recipient,
}: {
  intl: IntlShape;
  label: string;
  recipient: string | null | undefined;
}): string | null {
  const formattedRecipient = formatFirstRecipient(recipient);
  return formattedRecipient == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.gmail.labelToRecipient",
          defaultMessage: "{label} to {recipient}",
          description: "Gmail MCP label with a recipient preview.",
        },
        { label, recipient: formattedRecipient },
      );
}

function buildSearchCountLabel({
  completed,
  intl,
  maxResults,
  toolResult,
}: {
  completed: boolean;
  intl: IntlShape;
  maxResults: number | undefined;
  toolResult: unknown;
}): string | null {
  if (!completed || maxResults == null) return null;
  const count = countToolResultItems({
    preferredKeys: [
      "emails",
      "messages",
      "message_ids",
      "email_ids",
      "results",
      "items",
    ],
    toolResult,
  });
  return count == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.gmail.searchedEmailsCount",
          defaultMessage:
            "Searched {count, plural, one {an email} other {{count, number} emails}}",
          description:
            "Completed Gmail search label when an exact result count is known.",
        },
        { count },
      );
}

function formatFirstRecipient(
  recipient: string | null | undefined,
): string | null {
  if (recipient == null) return null;
  const firstRecipient = recipient
    .split(",")
    .map((entry) => entry.trim())
    .find((entry) => entry.length > 0);
  return firstRecipient == null
    ? null
    : truncatePreview(firstRecipient, GMAIL_PREVIEW_MAX_LENGTH);
}
