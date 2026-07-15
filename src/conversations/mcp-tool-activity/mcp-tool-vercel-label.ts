// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds Vercel MCP tool activity labels: project/team/deployment targets parsed
// from a wide range of argument aliases, with hostname and domain normalization.
import { zodObject, zodString } from "../../boundaries/src-l0hb-mz-p";
import { defineMessages } from "../../vendor/react-intl";
import type { IntlShape } from "../../vendor/react-intl";
import type {
  McpMatchingApp,
  McpToolLabelBuilderInput,
} from "./mcp-tool-label-types";

const VERCEL_APP_KEYWORD = "vercel";
const VERCEL_PREVIEW_MAX_LENGTH = 40;
const VERCEL_DEPLOYMENT_TARGET_TOOL_KEYS = new Set([
  "get_access_to_vercel_url",
  "get_deployment",
  "get_deployment_build_logs",
  "get_runtime_logs",
  "web_fetch_vercel_url",
]);
const VERCEL_PROJECT_TARGET_TOOL_KEYS = new Set([
  "deploy_to_vercel",
  "get_project",
  "get_project_domains",
  "list_environment_variables",
]);
const VERCEL_DOCS_TOOL_KEYS = new Set([
  "search_documentation",
  "search_vercel_documentation",
]);

const vercelToolArgumentsSchema = zodObject({
  deployment: zodString().trim().min(1).max(500).optional().catch(undefined),
  deployment_id: zodString().trim().min(1).max(500).optional().catch(undefined),
  deployment_url: zodString()
    .trim()
    .min(1)
    .max(500)
    .optional()
    .catch(undefined),
  deploymentId: zodString().trim().min(1).max(500).optional().catch(undefined),
  deploymentUrl: zodString().trim().min(1).max(500).optional().catch(undefined),
  domain: zodString().trim().min(1).max(253).optional().catch(undefined),
  idOrName: zodString().trim().min(1).max(200).optional().catch(undefined),
  name: zodString().trim().min(1).max(200).optional().catch(undefined),
  project: zodString().trim().min(1).max(200).optional().catch(undefined),
  project_id: zodString().trim().min(1).max(200).optional().catch(undefined),
  project_name: zodString().trim().min(1).max(200).optional().catch(undefined),
  projectId: zodString().trim().min(1).max(200).optional().catch(undefined),
  projectName: zodString().trim().min(1).max(200).optional().catch(undefined),
  query: zodString().trim().min(1).max(500).optional().catch(undefined),
  team: zodString().trim().min(1).max(200).optional().catch(undefined),
  team_id: zodString().trim().min(1).max(200).optional().catch(undefined),
  team_slug: zodString().trim().min(1).max(200).optional().catch(undefined),
  teamId: zodString().trim().min(1).max(200).optional().catch(undefined),
  teamSlug: zodString().trim().min(1).max(200).optional().catch(undefined),
  url: zodString().trim().min(1).max(500).optional().catch(undefined),
}).passthrough();

const vercelLabelMessages = defineMessages({
  labelFor: {
    id: "codex.mcpTool.vercel.labelFor",
    defaultMessage: "{label} for",
    description: "Vercel MCP label prefix with a generic target suffix.",
  },
  labelForTarget: {
    id: "codex.mcpTool.vercel.labelForTarget",
    defaultMessage: "{label} for {target}",
    description: "Vercel MCP label with a direct target suffix.",
  },
  labelForTeam: {
    id: "codex.mcpTool.vercel.labelForTeam",
    defaultMessage: "{label} for team",
    description: "Vercel MCP label prefix for team context.",
  },
  labelWithPreview: {
    id: "codex.mcpTool.vercel.labelWithPreview",
    defaultMessage: '{label} "{preview}"',
    description: "Vercel MCP label with a short text preview.",
  },
});

export function isVercelApp(app: McpMatchingApp | null | undefined): boolean {
  return app == null
    ? false
    : [app.name, app.id, ...(app.pluginDisplayNames ?? [])].some((candidate) =>
        candidate.trim().toLowerCase().includes(VERCEL_APP_KEYWORD),
      );
}

export function getVercelMcpToolLabel({
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolKey,
}: McpToolLabelBuilderInput): string | null {
  if (!isVercelApp(matchingApp)) return null;
  const parsed = vercelToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const {
    deployment,
    deployment_id,
    deployment_url,
    deploymentId,
    deploymentUrl,
    domain,
    idOrName,
    name,
    project,
    project_id,
    project_name,
    projectId,
    projectName,
    query,
    team,
    team_id,
    team_slug,
    teamId,
    teamSlug,
    url,
  } = parsed.data;

  const projectTarget = sanitizeVercelTarget(
    project_name ??
      projectName ??
      project ??
      idOrName ??
      name ??
      project_id ??
      projectId,
  );
  const teamTarget = sanitizeVercelTarget(
    team ?? team_slug ?? teamSlug ?? team_id ?? teamId,
  );
  const deploymentTarget = resolveVercelDeploymentTarget(
    deployment_url ??
      deploymentUrl ??
      url ??
      deployment ??
      deployment_id ??
      deploymentId,
  );

  if (toolKey === "check_domain_availability_and_price")
    return formatVercelLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: normalizeVercelDomain(domain),
    });
  if (VERCEL_DOCS_TOOL_KEYS.has(toolKey))
    return formatVercelLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: query,
    });
  if (VERCEL_PROJECT_TARGET_TOOL_KEYS.has(toolKey))
    return formatVercelLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: projectTarget,
    });
  if (toolKey === "get_deployment_build_logs")
    return formatVercelBuildLogsLabel({
      deploymentTarget,
      fallbackLabel,
      intl,
      projectTarget,
    });
  if (VERCEL_DEPLOYMENT_TARGET_TOOL_KEYS.has(toolKey))
    return formatVercelLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: deploymentTarget,
    });
  if (toolKey === "list_deployments")
    return (
      formatVercelLabelWithPreview({
        intl,
        label: intl.formatMessage(vercelLabelMessages.labelFor, {
          label: fallbackLabel,
        }),
        value: projectTarget,
      }) ??
      formatVercelLabelWithPreview({
        intl,
        label: intl.formatMessage(vercelLabelMessages.labelForTeam, {
          label: fallbackLabel,
        }),
        value: teamTarget,
      })
    );
  if (toolKey === "list_projects")
    return formatVercelLabelWithPreview({
      intl,
      label: intl.formatMessage(vercelLabelMessages.labelForTeam, {
        label: fallbackLabel,
      }),
      value: teamTarget,
    });
  if (toolKey === "list_teams")
    return formatVercelLabelWithPreview({
      intl,
      label: fallbackLabel,
      value: query,
    });
  return null;
}

function formatVercelLabelWithPreview({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = buildVercelPreview(value);
  return preview == null
    ? null
    : intl.formatMessage(vercelLabelMessages.labelWithPreview, {
        label,
        preview,
      });
}

function formatVercelBuildLogsLabel({
  deploymentTarget,
  fallbackLabel,
  intl,
  projectTarget,
}: {
  deploymentTarget: string | undefined;
  fallbackLabel: string;
  intl: IntlShape;
  projectTarget: string | undefined;
}): string | null {
  const target =
    projectTarget ?? deriveVercelProjectFromDeployment(deploymentTarget);
  return target == null
    ? formatVercelLabelWithPreview({
        intl,
        label: intl.formatMessage(vercelLabelMessages.labelFor, {
          label: fallbackLabel,
        }),
        value: deploymentTarget,
      })
    : intl.formatMessage(vercelLabelMessages.labelForTarget, {
        label: fallbackLabel,
        target,
      });
}

function buildVercelPreview(value: string | null | undefined): string | null {
  if (value == null) return null;
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length === 0 || isVercelOpaqueId(normalized)) return null;
  return normalized.length <= VERCEL_PREVIEW_MAX_LENGTH
    ? normalized
    : `${normalized.slice(0, VERCEL_PREVIEW_MAX_LENGTH - 1).trimEnd()}…`;
}

function sanitizeVercelTarget(
  value: string | null | undefined,
): string | undefined {
  if (value == null) return;
  const trimmed = value.trim();
  if (!(trimmed.length === 0 || isVercelOpaqueId(trimmed))) return trimmed;
}

function resolveVercelDeploymentTarget(
  value: string | null | undefined,
): string | undefined {
  if (value != null)
    return (
      extractHostname(value) ??
      normalizeVercelDomain(value) ??
      sanitizeVercelTarget(value)
    );
}

function deriveVercelProjectFromDeployment(
  value: string | null | undefined,
): string | undefined {
  const hostname =
    value == null ? "" : (extractHostname(value) ?? value.trim());
  const match = hostname.match(/^(.*)-git-[^-]+-[^.]+\.vercel\.app$/i);
  if (match == null) return;
  const projectName = match[1]?.trim();
  if (!(projectName == null || projectName.length === 0))
    return sanitizeVercelTarget(projectName);
}

function normalizeVercelDomain(
  value: string | null | undefined,
): string | undefined {
  if (value == null) return;
  const candidate = extractHostname(value) ?? value.trim();
  if (
    !(
      candidate.length === 0 ||
      candidate.includes("/") ||
      !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(candidate)
    )
  )
    return candidate.toLowerCase();
}

function extractHostname(value: string): string | undefined {
  if (/^https?:\/\//i.test(value))
    try {
      return new URL(value).hostname;
    } catch {
      return;
    }
}

function isVercelOpaqueId(value: string): boolean {
  return (
    /^(dpl|prj|team)_[a-z0-9]{6,}$/i.test(value) ||
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value,
    )
  );
}
