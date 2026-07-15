// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the human-readable display label for an MCP tool invocation by matching
// app/tool keys against the activity registry and per-app label builders.
import { zodObject, zodString } from "../../boundaries/src-l0hb-mz-p";
import {
  getComputerUseMcpToolLabel,
  getFigmaMcpToolLabel,
  getGithubMcpToolLabel,
  getGmailMcpToolLabel,
  getGoogleCalendarMcpToolLabel,
  getGoogleDriveMcpToolLabel,
  getLinearMcpToolLabel,
  toSentenceCase,
} from "../../boundaries/onboarding-commons-externals.facade";
import type { IntlShape } from "../../vendor/react-intl";
import { mcpAppToolActivityRegistry } from "./mcp-tool-activity-messages";
import { getNotionMcpToolLabel } from "./mcp-tool-notion-label";
import { getSlackMcpToolLabel } from "./mcp-tool-slack-label";
import { getVercelMcpToolLabel } from "./mcp-tool-vercel-label";
import type {
  McpMatchingApp,
  McpToolActivityLabelPair,
  McpToolLabelBuilder,
  McpToolResultLike,
} from "./mcp-tool-label-types";

const JS_TITLE_PREVIEW_MAX_LENGTH = 80;

const jsToolArgumentsSchema = zodObject({
  title: zodString()
    .transform((value: string) => value.trim().replace(/\s+/g, " "))
    .pipe(zodString().min(1))
    .optional(),
});

export interface GetMcpToolDisplayLabelInput {
  completed: boolean;
  fallbackToolDisplayName?: string | null;
  intl: IntlShape;
  serverName?: string | null;
  matchingApp: McpMatchingApp | null;
  nativeDesktopAppMetadata?: unknown;
  platform?: string;
  toolArguments: unknown;
  toolResult?: McpToolResultLike | null;
  toolName: string;
}

export function getMcpToolDisplayLabel({
  completed,
  fallbackToolDisplayName,
  intl,
  serverName,
  matchingApp,
  nativeDesktopAppMetadata,
  platform = "macOS",
  toolArguments,
  toolResult,
  toolName,
}: GetMcpToolDisplayLabelInput): string {
  const jsTitleLabel = getJsTitleLabel({ toolArguments, toolName });
  if (jsTitleLabel != null) return jsTitleLabel;

  const toolKey = primaryToolKey({ matchingApp, toolName });
  const labelPair = resolveToolLabelPair({ matchingApp, toolName });
  const fallbackLabel =
    labelPair == null
      ? (fallbackToolDisplayName ??
        defaultToolDisplayName({ matchingApp, toolName }))
      : intl.formatMessage(completed ? labelPair.completed : labelPair.active);

  const builder =
    resolveServerLabelBuilder(serverName) ??
    resolveAppLabelBuilder(matchingApp);
  return (
    builder?.({
      completed,
      fallbackLabel,
      intl,
      matchingApp,
      nativeDesktopAppMetadata: nativeDesktopAppMetadata ?? null,
      platform,
      toolArguments,
      toolKey,
      toolResult: toolResult ?? null,
    }) ?? fallbackLabel
  );
}

function getJsTitleLabel({
  toolArguments,
  toolName,
}: {
  toolArguments: unknown;
  toolName: string;
}): string | null {
  if (primaryToolKey({ matchingApp: null, toolName }) !== "js") return null;
  const parsed = jsToolArgumentsSchema.safeParse(toolArguments);
  if (!parsed.success || parsed.data.title == null) return null;
  const title = parsed.data.title;
  return title.length <= JS_TITLE_PREVIEW_MAX_LENGTH
    ? title
    : `${title.slice(0, JS_TITLE_PREVIEW_MAX_LENGTH - 1).trimEnd()}…`;
}

function resolveAppLabelBuilder(
  matchingApp: McpMatchingApp | null,
): McpToolLabelBuilder | null {
  if (matchingApp == null) return null;
  for (const appKey of appKeyCandidates(matchingApp)) {
    const builder = resolveAppLabelBuilderByKey(appKey);
    if (builder != null) return builder;
  }
  return null;
}

function resolveServerLabelBuilder(
  serverName: string | null | undefined,
): McpToolLabelBuilder | null {
  if (serverName == null) return null;
  switch (serverName) {
    case "computer-use":
      return getComputerUseMcpToolLabel;
    default:
      return null;
  }
}

function resolveAppLabelBuilderByKey(
  appKey: string,
): McpToolLabelBuilder | null {
  switch (appKey) {
    case "figma":
      return getFigmaMcpToolLabel;
    case "github":
      return getGithubMcpToolLabel;
    case "gmail":
      return getGmailMcpToolLabel;
    case "google_calendar":
      return getGoogleCalendarMcpToolLabel;
    case "google_drive":
      return getGoogleDriveMcpToolLabel;
    case "linear":
    case "linear_mcp_server":
      return getLinearMcpToolLabel;
    case "notion":
    case "notion_mcp_server":
      return getNotionMcpToolLabel;
    case "slack":
      return getSlackMcpToolLabel;
    case "vercel":
      return getVercelMcpToolLabel;
    default:
      return null;
  }
}

function resolveToolLabelPair({
  matchingApp,
  toolName,
}: {
  matchingApp: McpMatchingApp | null;
  toolName: string;
}): McpToolActivityLabelPair | null {
  const toolKeys = toolKeyCandidates({ matchingApp, toolName });
  if (matchingApp != null)
    for (const appKey of appKeyCandidates(matchingApp)) {
      const app = mcpAppToolActivityRegistry.apps?.[appKey];
      if (app?.tools != null)
        for (const toolKey of toolKeys) {
          const labelPair = app.tools[toolKey];
          if (labelPair != null) return labelPair;
        }
    }
  for (const toolKey of toolKeys) {
    const labelPair = mcpAppToolActivityRegistry.tools?.[toolKey];
    if (labelPair != null) return labelPair;
  }
  return null;
}

function appKeyCandidates(matchingApp: McpMatchingApp): string[] {
  const candidates = [
    matchingApp.name,
    matchingApp.id,
    matchingApp.id.replace(/^connector[_-]/i, ""),
    ...(matchingApp.pluginDisplayNames ?? []),
  ].map(normalizeKeyJoined);
  return candidates.filter(
    (candidate, index) =>
      candidate.length > 0 && candidates.indexOf(candidate) === index,
  );
}

function toolKeyCandidates({
  matchingApp,
  toolName,
}: {
  matchingApp: McpMatchingApp | null;
  toolName: string;
}): string[] {
  const candidates = [normalizeKeyJoined(toolName)];
  const strippedToolName = stripAppPrefixFromToolName({
    matchingApp,
    toolName,
  });
  candidates.push(normalizeKeyJoined(strippedToolName));
  return candidates.filter(
    (candidate, index) =>
      candidate.length > 0 && candidates.indexOf(candidate) === index,
  );
}

function primaryToolKey({
  matchingApp,
  toolName,
}: {
  matchingApp: McpMatchingApp | null;
  toolName: string;
}): string {
  const candidates = toolKeyCandidates({ matchingApp, toolName });
  return candidates[candidates.length - 1] ?? "";
}

function normalizeKeyJoined(value: string): string {
  return tokenize(value).join("_");
}

function defaultToolDisplayName({
  toolName,
  matchingApp,
}: {
  toolName: string;
  matchingApp: McpMatchingApp | null;
}): string {
  return toSentenceLabel(stripAppPrefixFromToolName({ matchingApp, toolName }));
}

function stripAppPrefixFromToolName({
  matchingApp,
  toolName,
}: {
  matchingApp: McpMatchingApp | null;
  toolName: string;
}): string {
  let tokens = tokenize(toolName);
  const prefixTokenLists = appPrefixTokenLists({ matchingApp });
  while (tokens.length > 0) {
    const matchedPrefix = findMatchingPrefix(tokens, prefixTokenLists);
    if (matchedPrefix == null) break;
    tokens = tokens.slice(matchedPrefix.length);
  }
  return tokens.length === 0 ? toolName : tokens.join(" ");
}

function toSentenceLabel(value: string): string {
  return toSentenceCase(value, { style: "sentence" });
}

function tokenize(value: string): string[] {
  return value
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((token) => token.length > 0);
}

function appKeyTokenLists(matchingApp: McpMatchingApp): string[][] {
  const tokenLists = [
    tokenize(matchingApp.name),
    tokenize(matchingApp.id),
    tokenize(matchingApp.id.replace(/^connector[_-]/i, "")),
    ...(matchingApp.pluginDisplayNames ?? []).map(tokenize),
  ];
  return tokenLists.filter((tokens, index) =>
    tokens.length === 0
      ? false
      : tokenLists.findIndex(
          (other) =>
            other.length === tokens.length &&
            other.every((token, tokenIndex) => token === tokens[tokenIndex]),
        ) === index,
  );
}

function appPrefixTokenLists({
  matchingApp,
}: {
  matchingApp: McpMatchingApp | null;
}): string[][] {
  if (matchingApp == null) return [];
  const tokenLists = appKeyTokenLists(matchingApp).flatMap(
    withMcpSuffixVariants,
  );
  return tokenLists
    .filter((tokens, index) =>
      tokens.length === 0
        ? false
        : tokenLists.findIndex(
            (other) =>
              other.length === tokens.length &&
              other.every((token, tokenIndex) => token === tokens[tokenIndex]),
          ) === index,
    )
    .sort((a, b) => b.length - a.length);
}

function withMcpSuffixVariants(tokens: string[]): string[][] {
  return [
    tokens,
    appendSuffixTokens(tokens, ["mcp"]),
    appendSuffixTokens(tokens, ["mcp", "server"]),
  ];
}

function appendSuffixTokens(tokens: string[], suffix: string[]): string[] {
  const overlap = Math.min(tokens.length, suffix.length);
  for (let length = overlap; length > 0; --length) {
    const tail = tokens.slice(tokens.length - length);
    const head = suffix.slice(0, length);
    if (tail.every((token, index) => token === head[index]))
      return [...tokens, ...suffix.slice(length)];
  }
  return [...tokens, ...suffix];
}

function findMatchingPrefix(
  tokens: string[],
  prefixTokenLists: string[][],
): string[] | null {
  return (
    prefixTokenLists.find((prefix) =>
      tokens.length < prefix.length
        ? false
        : prefix.every((token, index) => token === tokens[index]),
    ) ?? null
  );
}
