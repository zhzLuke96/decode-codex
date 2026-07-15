// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared types and helpers for building human-readable MCP connector tool labels.
import type { IntlShape } from "../../vendor/react-intl";

export interface MatchingApp {
  id: string;
  name: string;
  pluginDisplayNames?: string[];
}

export interface McpAppToolLabelInput {
  completed: boolean;
  fallbackLabel: string;
  intl: IntlShape;
  matchingApp: MatchingApp | null | undefined;
  toolArguments: unknown;
  toolResult?: unknown;
  toolKey: string;
}

export function appMatchesIdentifier(
  app: MatchingApp | null | undefined,
  identifier: string,
): boolean {
  if (app == null) return false;
  return [app.name, app.id, ...(app.pluginDisplayNames ?? [])].some((entry) =>
    entry.trim().toLowerCase().includes(identifier),
  );
}

export function truncatePreview(
  value: string | null | undefined,
  maxLength: number,
): string | null {
  if (value == null) return null;
  const collapsed = value.replace(/\s+/g, " ").trim();
  if (collapsed.length === 0) return null;
  return collapsed.length <= maxLength
    ? collapsed
    : `${collapsed.slice(0, maxLength - 1).trimEnd()}…`;
}
