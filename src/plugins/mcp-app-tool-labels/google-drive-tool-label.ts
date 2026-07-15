// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds human-readable activity labels for the Google Drive MCP connector tool calls.
import { z } from "zod";
import type { IntlShape } from "../../vendor/react-intl";
import {
  appMatchesIdentifier,
  truncatePreview,
  type McpAppToolLabelInput,
} from "./shared";
import { countToolResultItems } from "./result-item-count";

const GOOGLE_DRIVE_APP_IDENTIFIER = "google drive";
const GOOGLE_DRIVE_PREVIEW_MAX_LENGTH = 40;

const GOOGLE_DRIVE_SEARCH_TOOL_KEYS = new Set([
  "search",
  "search_spreadsheet_rows",
]);

const googleDriveToolArgumentsSchema = z
  .object({
    email: z.string().trim().min(1).max(200).optional().catch(undefined),
    filename: z.string().trim().min(1).max(200).optional().catch(undefined),
    name: z.string().trim().min(1).max(200).optional().catch(undefined),
    query: z.string().trim().min(1).max(500).optional().catch(undefined),
    range: z.string().trim().min(1).max(100).optional().catch(undefined),
    title: z.string().trim().min(1).max(200).optional().catch(undefined),
    top_k: z.number().int().positive().optional().catch(undefined),
    url: z.string().trim().min(1).max(500).optional().catch(undefined),
    user_email: z.string().trim().min(1).max(200).optional().catch(undefined),
  })
  .passthrough();

export function isGoogleDriveApp(
  app: McpAppToolLabelInput["matchingApp"],
): boolean {
  return appMatchesIdentifier(app, GOOGLE_DRIVE_APP_IDENTIFIER);
}

export function buildGoogleDriveToolLabel({
  completed,
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolResult,
  toolKey,
}: McpAppToolLabelInput): string | null {
  if (!isGoogleDriveApp(matchingApp)) return null;
  const parsed = googleDriveToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const { email, filename, name, query, range, title, top_k, url, user_email } =
    parsed.data;

  return toolKey === "copy_file" ||
    toolKey === "create_file" ||
    toolKey === "create_folder" ||
    toolKey === "create_presentation_from_template" ||
    toolKey === "import_presentation"
    ? buildDrivePreviewLabel({
        intl,
        label: fallbackLabel,
        value: title ?? name ?? filename,
      })
    : toolKey === "fetch" ||
        toolKey === "get_document" ||
        toolKey === "get_presentation" ||
        toolKey === "get_file_metadata" ||
        toolKey === "get_spreadsheet_metadata"
      ? buildDrivePreviewLabel({
          intl,
          label: fallbackLabel,
          value: title ?? name,
        })
      : toolKey === "list_folder"
        ? (buildDrivePreviewLabel({
            intl,
            label: fallbackLabel,
            value: parseFolderNameFromUrl(url),
          }) ??
          buildCountLabel({
            completed,
            intl,
            topK: top_k,
            toolResult,
            variant: "folderItems",
          }))
        : toolKey === "share_file"
          ? (buildRecipientLabel({
              intl,
              label: fallbackLabel,
              recipient: user_email ?? email,
            }) ??
            buildDrivePreviewLabel({
              intl,
              label: fallbackLabel,
              value: parseFolderNameFromUrl(url),
            }))
          : toolKey === "recent_documents"
            ? buildCountLabel({
                completed,
                intl,
                topK: top_k,
                toolResult,
                variant: "recentDocuments",
              })
            : toolKey === "get_spreadsheet_range" ||
                toolKey === "get_spreadsheet_cells"
              ? buildDrivePreviewLabel({
                  intl,
                  label: fallbackLabel,
                  value: range,
                })
              : GOOGLE_DRIVE_SEARCH_TOOL_KEYS.has(toolKey)
                ? buildDrivePreviewLabel({
                    intl,
                    label: fallbackLabel,
                    value: query,
                  })
                : null;
}

function buildDrivePreviewLabel({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = truncatePreview(value, GOOGLE_DRIVE_PREVIEW_MAX_LENGTH);
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.googleDrive.labelWithPreview",
          defaultMessage: '{label} "{preview}"',
          description: "Google Drive MCP label with a short text preview.",
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
  const preview = truncatePreview(recipient, GOOGLE_DRIVE_PREVIEW_MAX_LENGTH);
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.googleDrive.labelWithRecipient",
          defaultMessage: "{label} with {recipient}",
          description: "Google Drive MCP label with a recipient preview.",
        },
        { label, recipient: preview },
      );
}

function buildCountLabel({
  completed,
  intl,
  topK,
  toolResult,
  variant,
}: {
  completed: boolean;
  intl: IntlShape;
  topK: number | undefined;
  toolResult: unknown;
  variant: "folderItems" | "recentDocuments";
}): string | null {
  if (!completed || topK == null) return null;
  const count = countToolResultItems({
    preferredKeys: ["documents", "files", "items", "results"],
    toolResult,
  });
  return count == null
    ? null
    : variant === "folderItems"
      ? intl.formatMessage(
          {
            id: "codex.mcpTool.googleDrive.listedFolderItemsCount",
            defaultMessage:
              "Listed {count, plural, one {a folder item} other {{count, number} folder items}}",
            description:
              "Completed Google Drive folder listing label when an exact count is known.",
          },
          { count },
        )
      : intl.formatMessage(
          {
            id: "codex.mcpTool.googleDrive.gotRecentDocumentsCount",
            defaultMessage:
              "Got {count, plural, one {a recent document} other {{count, number} recent documents}}",
            description:
              "Completed Google Drive recent documents label when an exact count is known.",
          },
          { count },
        );
}

function parseFolderNameFromUrl(url: string | undefined): string | undefined {
  if (url == null) return undefined;
  try {
    const parsedUrl = new URL(url);
    const lastSegment = decodeURIComponent(
      parsedUrl.pathname
        .split("/")
        .filter((segment) => segment.length > 0)
        .pop() ?? "",
    )
      .replace(/[-_]+/g, " ")
      .trim();
    return lastSegment.length === 0 ||
      /^(d|folders)$/i.test(lastSegment) ||
      /^[a-z0-9_-]{20,}$/i.test(lastSegment)
      ? undefined
      : lastSegment;
  } catch {
    return undefined;
  }
}
