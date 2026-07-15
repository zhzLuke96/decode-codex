// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds human-readable activity labels for the Figma MCP connector tool calls.
import { z } from "zod";
import type { IntlShape } from "../../vendor/react-intl";
// Cross-slice helper: title-cases a single framework/language token.
import { capitalizeWord } from "../../boundaries/onboarding-commons-externals.facade";
import {
  appMatchesIdentifier,
  truncatePreview,
  type McpAppToolLabelInput,
} from "./shared";

const FIGMA_APP_IDENTIFIER = "figma";
const FIGMA_PREVIEW_MAX_LENGTH = 40;

const figmaToolArgumentsSchema = z
  .object({
    clientFrameworks: z
      .string()
      .trim()
      .min(1)
      .max(200)
      .optional()
      .catch(undefined),
    clientLanguages: z
      .string()
      .trim()
      .min(1)
      .max(200)
      .optional()
      .catch(undefined),
    name: z.string().trim().min(1).max(200).optional().catch(undefined),
    userIntent: z.string().trim().min(1).max(500).optional().catch(undefined),
  })
  .passthrough();

const FRAMEWORK_DISPLAY_NAMES = new Map<string, string>([
  ["angular", "Angular"],
  ["css", "CSS"],
  ["django", "Django"],
  ["html", "HTML"],
  ["javascript", "JavaScript"],
  ["next.js", "Next.js"],
  ["nextjs", "Next.js"],
  ["react", "React"],
  ["svelte", "Svelte"],
  ["typescript", "TypeScript"],
  ["vue", "Vue"],
]);

export function isFigmaApp(app: McpAppToolLabelInput["matchingApp"]): boolean {
  return appMatchesIdentifier(app, FIGMA_APP_IDENTIFIER);
}

export function buildFigmaToolLabel({
  completed,
  fallbackLabel,
  intl,
  matchingApp,
  toolArguments,
  toolKey,
}: McpAppToolLabelInput): string | null {
  if (!isFigmaApp(matchingApp)) return null;
  const parsed = figmaToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success) return null;
  const { clientFrameworks, clientLanguages, name, userIntent } = parsed.data;
  if (toolKey === "generate_diagram")
    return buildFigmaPreviewLabel({
      intl,
      label: fallbackLabel,
      value: name ?? userIntent,
    });
  const target = resolveFigmaTarget({ clientFrameworks, clientLanguages });
  if (target == null) return null;
  if (toolKey === "get_design_context")
    return intl.formatMessage(
      {
        id: "codex.mcpTool.figma.labelForTarget",
        defaultMessage: "{label} for {target}",
        description: "Figma MCP label with a client target suffix.",
      },
      { label: fallbackLabel, target },
    );
  if (toolKey === "get_code")
    return completed
      ? intl.formatMessage(
          {
            id: "codex.mcpTool.figma.gotCodeForTarget",
            defaultMessage: "Got code for {target}",
            description:
              "Completed Figma label for getting code for a particular client target.",
          },
          { target },
        )
      : intl.formatMessage(
          {
            id: "codex.mcpTool.figma.gettingCodeForTarget",
            defaultMessage: "Getting code for {target}",
            description:
              "Active Figma label for getting code for a particular client target.",
          },
          { target },
        );
  return null;
}

function buildFigmaPreviewLabel({
  intl,
  label,
  value,
}: {
  intl: IntlShape;
  label: string;
  value: string | null | undefined;
}): string | null {
  const preview = truncatePreview(value, FIGMA_PREVIEW_MAX_LENGTH);
  return preview == null
    ? null
    : intl.formatMessage(
        {
          id: "codex.mcpTool.figma.labelWithPreview",
          defaultMessage: '{label} "{preview}"',
          description: "Figma MCP label with a short text preview.",
        },
        { label, preview },
      );
}

function resolveFigmaTarget({
  clientFrameworks,
  clientLanguages,
}: {
  clientFrameworks: string | undefined;
  clientLanguages: string | undefined;
}): string | null {
  const frameworks = parseTargetTokens(clientFrameworks);
  if (frameworks.length > 0) return frameworks.join(", ");
  const languages = parseTargetTokens(clientLanguages);
  return languages.length > 0 ? languages.join(", ") : null;
}

function parseTargetTokens(value: string | undefined): string[] {
  return value == null
    ? []
    : value
        .split(",")
        .map((token) => token.trim())
        .filter(
          (token) => token.length > 0 && token.toLowerCase() !== "unknown",
        )
        .map(
          (token) =>
            FRAMEWORK_DISPLAY_NAMES.get(token.toLowerCase()) ??
            capitalizeWord(token),
        )
        .filter((token, index, array) => array.indexOf(token) === index);
}
