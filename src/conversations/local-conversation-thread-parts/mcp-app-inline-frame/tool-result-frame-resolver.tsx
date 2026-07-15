// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves MCP resource URI and successful tool result data before mounting a frame.

import * as React from "react";
import {
  getToolResultResourceUri,
  isPlatform,
  useScopedAtomValue,
} from "../../../boundaries/onboarding-commons-externals.facade";
import {
  isMcpServerStatusLoadingAtom,
  mcpAppConnectorIdAtom,
  mcpAppResourceUriAtom,
} from "./atoms";
import { McpAppInlineFrameContainer } from "./inline-frame-container";
import type {
  McpMatchingApp,
  McpServerToolKey,
  McpToolCallItem,
} from "./types";

export interface McpAppToolResultFrameResolverProps {
  conversationId: string;
  hostId: string;
  item: McpToolCallItem;
  matchingApp: McpMatchingApp | null;
  mcpAppId: string;
}

export function McpAppToolResultFrameResolver({
  conversationId,
  hostId,
  item,
  matchingApp,
  mcpAppId,
}: McpAppToolResultFrameResolverProps) {
  const rawResult = item.result?.type === "success" ? item.result.raw : null;
  const [initialRawResult] = React.useState(rawResult);
  const lastRawResult = rawResult ?? initialRawResult;

  const serverToolKey: McpServerToolKey = {
    hostId,
    server: item.invocation.server,
    tool: item.invocation.tool,
  };
  const resourceUriFromStatuses = useScopedAtomValue(
    mcpAppResourceUriAtom,
    serverToolKey,
  );
  const mcpAppConnectorId = useScopedAtomValue(
    mcpAppConnectorIdAtom,
    serverToolKey,
  );
  const statusesLoading = useScopedAtomValue(
    isMcpServerStatusLoadingAtom,
    hostId,
  );

  const toolResultForResolution = statusesLoading ? null : lastRawResult;
  const resolvedTarget = getToolResultResourceUri({
    mcpServerStatuses: undefined,
    server: item.invocation.server,
    tool: item.invocation.tool,
    toolResult: toolResultForResolution,
  });

  const mcpAppResourceUri =
    resourceUriFromStatuses ??
    resolvedTarget?.resourceUri ??
    item.mcpAppResourceUri ??
    null;
  const displayedMcpAppResourceUri =
    resourceUriFromStatuses ??
    (lastRawResult != null && !statusesLoading
      ? (resolvedTarget?.resourceUri ?? item.mcpAppResourceUri)
      : null) ??
    null;

  if (
    !(
      isPlatform("electron") &&
      mcpAppResourceUri != null &&
      (!item.completed || lastRawResult != null)
    )
  )
    return null;

  return (
    <McpAppInlineFrameContainer
      conversationId={conversationId}
      displayedMcpAppResourceUri={displayedMcpAppResourceUri}
      displayedSuccessfulToolResult={lastRawResult}
      hostId={hostId}
      item={item}
      matchingApp={matchingApp}
      mcpAppConnectorId={mcpAppConnectorId}
      mcpAppId={mcpAppId}
      mcpAppResourceUri={mcpAppResourceUri}
    />
  );
}
