// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves the icon (logo URL and alt text) for an MCP app resource attached to a tool call.
import {
  isBlankText,
  getMcpAppAltText,
} from "../boundaries/onboarding-commons-externals.facade";

interface ResolvedPluginEntry {
  plugin: { id: string };
  composerIconPath?: string | null;
  logoPath?: string | null;
}

export interface McpAppResourceIconInput {
  mcpAppResourceUri: string | null | undefined;
  pluginId: string | null | undefined;
  plugins: ResolvedPluginEntry[];
  serverName: string | null | undefined;
}

export interface McpAppResourceIcon {
  alt: string;
  logoUrl: string | null | undefined;
}

export function resolveMcpAppResourceIcon({
  mcpAppResourceUri,
  pluginId,
  plugins,
  serverName,
}: McpAppResourceIconInput): McpAppResourceIcon | null {
  if (mcpAppResourceUri == null || pluginId == null || isBlankText(serverName))
    return null;
  const entry =
    plugins.find((candidate) => candidate.plugin.id === pluginId) ?? null;
  return entry == null
    ? null
    : {
        alt: getMcpAppAltText(entry),
        logoUrl: entry.composerIconPath ?? entry.logoPath,
      };
}
