// Restored from ref/webview/assets/mcp-capability-view-page-BKUiDE70.js
// Route page for opening a global MCP app capability view by server and tool name.

import { useMemo, type ReactElement } from "react";
import { globalMcpAppEntrypointsSignal } from "../plugins/mcp-capability-signals";
import type { McpAppEntrypoint } from "../plugins/mcp-capability-signals/types";
import { useSignalValue } from "../runtime/app-scope-hooks";
import { LargeEmptyState } from "../utils/large-empty-state";
import { FormattedMessage } from "../vendor/react-intl";
import { useParams } from "../vendor/react-router";
import { OpenAiMcpCapabilityView } from "../review/openai-mcp-capability-view";
export function McpCapabilityViewPage(): ReactElement {
  const { server, toolName } = useParams<"server" | "toolName">();
  const globalCapabilityViews = useSignalValue<McpAppEntrypoint[]>(
    globalMcpAppEntrypointsSignal,
  );
  const matchingView = useMemo(
    () =>
      server == null || toolName == null
        ? null
        : (globalCapabilityViews.find(
            (view) => view.server === server && view.tool.name === toolName,
          ) ?? null),
    [globalCapabilityViews, server, toolName],
  );
  if (matchingView == null) {
    return <McpCapabilityViewNotFound />;
  }
  return <OpenAiMcpCapabilityView view={matchingView} />;
}
function McpCapabilityViewNotFound(): ReactElement {
  return (
    <div className="flex h-full min-h-0 items-center justify-center">
      <LargeEmptyState
        title={
          <FormattedMessage
            id="openaiMcpCapabilities.view.notFound"
            defaultMessage="MCP app view not found"
            description="Title shown when an MCP app view route does not match an available server tool"
          />
        }
      />
    </div>
  );
}
