// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types for MCP tool-activity label builders (notion / slack / vercel / …).
import type { IntlShape, MessageDescriptor } from "../../vendor/react-intl";

export interface McpToolActivityLabelPair {
  active: MessageDescriptor;
  completed: MessageDescriptor;
}

export type McpToolActivityLabelMap = Record<string, McpToolActivityLabelPair>;

export interface McpMatchingApp {
  name: string;
  id: string;
  pluginDisplayNames?: string[] | null;
}

export interface McpToolResultLike {
  type?: string;
  content?: unknown;
  raw?: unknown;
  error?: string;
  structuredContent?: unknown;
  [key: string]: unknown;
}

export interface McpToolLabelBuilderInput {
  completed: boolean;
  fallbackLabel: string;
  intl: IntlShape;
  matchingApp: McpMatchingApp | null;
  nativeDesktopAppMetadata?: unknown;
  platform?: string;
  toolArguments: unknown;
  toolResult?: McpToolResultLike | null;
  toolKey: string;
}

export type McpToolLabelBuilder = (
  input: McpToolLabelBuilderInput,
) => string | null;
