// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds human-readable activity labels for the Linear MCP connector tool calls.
import { z } from "zod";
import { defineMessages, type IntlShape } from "../../vendor/react-intl";
import { appMatchesIdentifier, type McpAppToolLabelInput } from "./shared";

const LINEAR_APP_IDENTIFIER = "linear";
const LINEAR_PREVIEW_MAX_LENGTH = 40;

const LINEAR_QUERY_TOOL_KEYS = new Set(["research", "search_documentation"]);
const LINEAR_NAMED_ENTITY_TOOL_KEYS = new Set([
  "save_customer",
  "save_initiative",
  "save_project",
]);

const linearToolArgumentsSchema = z
  .object({
    assignee: z.string().trim().min(1).max(120).optional().catch(undefined),
    customer: z.string().trim().min(1).max(120).optional().catch(undefined),
    id: z.string().trim().min(1).max(120).optional().catch(undefined),
    issue: z.string().trim().min(1).max(120).optional().catch(undefined),
    issueId: z.string().trim().min(1).max(120).optional().catch(undefined),
    issue_id: z.string().trim().min(1).max(120).optional().catch(undefined),
    name: z.string().trim().min(1).max(200).optional().catch(undefined),
    project: z.string().trim().min(1).max(200).optional().catch(undefined),
    project_id: z.string().trim().min(1).max(120).optional().catch(undefined),
    query: z.string().trim().min(1).max(500).optional().catch(undefined),
    state: z.string().trim().min(1).max(120).optional().catch(undefined),
    team: z.string().trim().min(1).max(120).optional().catch(undefined),
    title: z.string().trim().min(1).max(200).optional().catch(undefined),
    type: z.string().trim().min(1).max(120).optional().catch(undefined),
  })
  .passthrough();

const linearMessages = defineMessages({
  labelFor: {
    id: "codex.mcpTool.linear.labelFor",
    defaultMessage: "{label} for",
    description: "Linear MCP label prefix with generic 'for' context.",
  },
  labelForTeam: {
    id: "codex.mcpTool.linear.labelForTeam",
    defaultMessage: "{label} for team",
    description: "Linear MCP label prefix for team context.",
  },
  labelForType: {
    id: "codex.mcpTool.linear.labelForType",
    defaultMessage: "{label} for {type}",
    description: "Linear MCP label prefix for a typed search target.",
  },
  labelIn: {
    id: "codex.mcpTool.linear.labelIn",
    defaultMessage: "{label} in",
    description: "Linear MCP label prefix with project context.",
  },
  labelMatching: {
    id: "codex.mcpTool.linear.labelMatching",
    defaultMessage: "{label} matching",
    description: "Linear MCP label prefix for query matching context.",
  },
  labelWithIdentifier: {
    id: "codex.mcpTool.linear.labelWithIdentifier",
    defaultMessage: "{label} {identifier}",
    description: "Linear MCP label with a human-readable identifier.",
  },
  labelWithPreview: {
    id: "codex.mcpTool.linear.labelWithPreview",
    defaultMessage: '{label} "{preview}"',
    description: "Linear MCP label with a short text preview.",
  },
});

export function isLinearApp(app: McpAppToolLabelInput["matchingApp"]): boolean {
  return appMatchesIdentifier(app, LINEAR_APP_IDENTIFIER);
}

export function buildLinearToolLabel({
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolKey,
}: McpAppToolLabelInput): string | null {
  if (!isLinearApp(matchingApp)) return null;
  const parsed = linearToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const {
    assignee,
    customer,
    id,
    issue,
    issueId,
    issue_id,
    name,
    project,
    project_id,
    query,
    state,
    team,
    title,
    type,
  } = parsed.data;

  return LINEAR_QUERY_TOOL_KEYS.has(toolKey)
    ? buildPreviewLabel({ intl, label: fallbackLabel, value: query })
    : toolKey === "get_issue"
      ? buildIdentifierLabel({
          intl,
          label: fallbackLabel,
          value: issueId ?? issue_id ?? id,
        })
      : toolKey === "get_project"
        ? buildPreviewLabel({
            intl,
            label: fallbackLabel,
            value: query ?? name ?? project ?? project_id,
          })
        : toolKey === "save_comment"
          ? buildIdentifierLabel({ intl, label: fallbackLabel, value: issueId })
          : toolKey === "save_customer_need"
            ? (buildIdentifierLabel({
                intl,
                label: fallbackLabel,
                value: issue,
              }) ??
              buildPreviewLabel({
                intl,
                label: fallbackLabel,
                value: customer ?? project,
              }))
            : toolKey === "save_issue"
              ? (buildPreviewLabel({
                  intl,
                  label: fallbackLabel,
                  value: title,
                }) ??
                buildIdentifierLabel({
                  intl,
                  label: fallbackLabel,
                  value: id,
                }) ??
                buildPreviewLabel({
                  intl,
                  label: fallbackLabel,
                  value: project ?? team,
                }))
              : toolKey === "list_issues"
                ? (buildPreviewLabel({
                    intl,
                    label: intl.formatMessage(linearMessages.labelMatching, {
                      label: fallbackLabel,
                    }),
                    value: query,
                  }) ??
                  buildPreviewLabel({
                    intl,
                    label: intl.formatMessage(linearMessages.labelIn, {
                      label: fallbackLabel,
                    }),
                    value: project,
                  }) ??
                  buildPreviewLabel({
                    intl,
                    label: intl.formatMessage(linearMessages.labelForTeam, {
                      label: fallbackLabel,
                    }),
                    value: team,
                  }) ??
                  buildPreviewLabel({
                    intl,
                    label: intl.formatMessage(linearMessages.labelFor, {
                      label: fallbackLabel,
                    }),
                    value: assignee ?? state,
                  }))
                : toolKey === "list_milestones"
                  ? buildPreviewLabel({
                      intl,
                      label: intl.formatMessage(linearMessages.labelIn, {
                        label: fallbackLabel,
                      }),
                      value: project,
                    })
                  : LINEAR_NAMED_ENTITY_TOOL_KEYS.has(toolKey)
                    ? (buildPreviewLabel({
                        intl,
                        label: fallbackLabel,
                        value: name,
                      }) ??
                      buildIdentifierLabel({
                        intl,
                        label: fallbackLabel,
                        value: id,
                      }))
                    : toolKey === "save_milestone"
                      ? (buildPreviewLabel({
                          intl,
                          label: fallbackLabel,
                          value: name,
                        }) ??
                        buildPreviewLabel({
                          intl,
                          label: intl.formatMessage(linearMessages.labelIn, {
                            label: fallbackLabel,
                          }),
                          value: project,
                        }))
                      : toolKey === "save_customer"
                        ? (buildPreviewLabel({
                            intl,
                            label: fallbackLabel,
                            value: name,
                          }) ??
                          buildPreviewLabel({
                            intl,
                            label: intl.formatMessage(linearMessages.labelFor, {
                              label: fallbackLabel,
                            }),
                            value: customer,
                          }))
                        : toolKey === "search"
                          ? buildPreviewLabel(
                              type == null
                                ? {
                                    intl,
                                    label: fallbackLabel,
                                    value: query,
                                  }
                                : {
                                    intl,
                                    label: intl.formatMessage(
                                      linearMessages.labelForType,
                                      { label: fallbackLabel, type },
                                    ),
                                    value: query,
                                  },
                            )
                          : null;
}

function buildIdentifierLabel({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  return value == null || !isNonUuidIdentifier(value)
    ? null
    : intl.formatMessage(linearMessages.labelWithIdentifier, {
        identifier: value,
        label,
      });
}

function buildPreviewLabel({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = truncateIdentifierPreview(value);
  return preview == null
    ? null
    : intl.formatMessage(linearMessages.labelWithPreview, {
        label,
        preview,
      });
}

function truncateIdentifierPreview(
  value: string | null | undefined,
): string | null {
  if (value == null) return null;
  const collapsed = value.replace(/\s+/g, " ").trim();
  if (collapsed.length === 0 || !isNonUuidIdentifier(collapsed)) return null;
  return collapsed.length <= LINEAR_PREVIEW_MAX_LENGTH
    ? collapsed
    : `${collapsed.slice(0, LINEAR_PREVIEW_MAX_LENGTH - 1).trimEnd()}…`;
}

function isNonUuidIdentifier(value: string): boolean {
  return !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}
