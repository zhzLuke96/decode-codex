// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Loading placeholder shown while an inline MCP app expands.

import type { IntlShape } from "../../vendor/react-intl";
import { resolveMcpFrameHeight } from "../../boundaries/onboarding-commons-externals.facade";

export function McpAppLoadingPlaceholder({
  heightHint,
  intl,
  minFrameHeight,
}: {
  heightHint: number | null;
  intl: IntlShape;
  minFrameHeight: number | null;
}) {
  const label = intl.formatMessage({
    id: "codex.mcpTool.mcpAppLoading",
    defaultMessage: "Loading MCP app",
    description: "Accessible label for the MCP app loading placeholder",
  });
  const height = resolveMcpFrameHeight(heightHint, minFrameHeight);
  return (
    <div
      role="status"
      aria-label={label}
      data-mcp-app-expanding-placeholder="true"
      className="mcp-app-loading-pulse w-full overflow-hidden border-token-border-light"
      style={{ height }}
    />
  );
}
