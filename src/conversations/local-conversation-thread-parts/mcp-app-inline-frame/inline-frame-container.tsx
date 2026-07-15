// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Prepares labels, resource query state, sandbox scope, and iframe props for an MCP app.

import * as React from "react";
import { useIntl } from "../../../vendor/react-intl";
import {
  McpAppInlineFrame,
  extractMcpAppRenderData,
  getMcpToolDisplayLabel,
  isDilServer,
  mcpServerStatusesQueryAtom,
  resolveMcpSandboxOriginScope,
  resolvePluginToolDisplay,
  selectMcpAppRenderTarget,
  toSentenceCase,
  useAvailablePlugins,
  useFeatureGateExposure,
  useMcpAppResourceQuery,
  usePlatform,
  useScopedAtomValue,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { createMcpAppInstanceId, formatMcpServerLabel } from "./helpers";
import type { McpMatchingApp, McpToolCallItem } from "./types";

export interface McpAppInlineFrameContainerProps {
  conversationId: string;
  displayedMcpAppResourceUri: string | null;
  displayedSuccessfulToolResult: unknown;
  hostId: string;
  item: McpToolCallItem;
  matchingApp: McpMatchingApp | null;
  mcpAppConnectorId?: string | null;
  mcpAppId: string;
  mcpAppResourceUri: string | null;
}

export function McpAppInlineFrameContainer({
  conversationId,
  displayedMcpAppResourceUri,
  displayedSuccessfulToolResult,
  hostId,
  item,
  matchingApp,
  mcpAppConnectorId = null,
  mcpAppId,
  mcpAppResourceUri,
}: McpAppInlineFrameContainerProps) {
  const intl = useIntl();
  const { platform } = usePlatform();
  const serverIsDil = isDilServer(item.invocation.server);

  const pluginEnabled = item.pluginId != null && !serverIsDil;
  const { availablePlugins } = useAvailablePlugins(hostId, undefined, {
    enabled: pluginEnabled,
  });
  const pluginToolDisplay = resolvePluginToolDisplay({
    mcpAppResourceUri,
    pluginId: item.pluginId,
    plugins: availablePlugins,
    serverName: item.invocation.server,
  });

  const { data: serverStatuses } = useScopedAtomValue(
    mcpServerStatusesQueryAtom,
    hostId,
  );
  const toolLabel = getMcpToolDisplayLabel({
    completed: item.completed,
    intl,
    matchingApp,
    platform,
    serverName: item.invocation.server,
    toolArguments: item.invocation.arguments,
    toolName: item.invocation.tool,
    toolResult: item.result,
  });

  const {
    data: resourceData,
    error: resourceError,
    isLoading: resourceLoading,
  } = useMcpAppResourceQuery({
    hostId,
    server: item.invocation.server,
    threadId: conversationId,
    uri: mcpAppResourceUri,
    enabled: true,
  });
  const renderData = extractMcpAppRenderData(resourceData);

  useFeatureGateExposure("2957382457");

  const renderTarget = selectMcpAppRenderTarget({
    hasResourceError: resourceError != null,
    isDilEnabled: false,
    isResourceLoading: resourceLoading,
    renderData,
    resourceUri: displayedMcpAppResourceUri,
    shouldRenderMcpApp: true,
  });
  const htmlRenderData =
    renderTarget.kind === "html" ? renderTarget.renderData : null;

  const [instanceFallbackId] = React.useState(createMcpAppInstanceId);
  const sandboxOriginScope = resolveMcpSandboxOriginScope({
    connectorId: mcpAppConnectorId,
    instanceFallbackId,
    server: item.invocation.server,
  });

  const isLoading =
    displayedMcpAppResourceUri == null ||
    displayedSuccessfulToolResult == null ||
    (renderData == null && resourceLoading);
  const csp =
    displayedMcpAppResourceUri == null ? null : (htmlRenderData?.csp ?? null);
  const error =
    displayedMcpAppResourceUri != null && renderData == null
      ? resourceError
      : null;
  const html =
    displayedMcpAppResourceUri == null ? null : (htmlRenderData?.html ?? null);
  const mcpAppScope = {
    originResourceUri: displayedMcpAppResourceUri,
    originTool: item.invocation.tool,
  };
  const prefersBorder = htmlRenderData?.prefersBorder ?? false;

  const sidePanelIcon =
    pluginToolDisplay ??
    (serverIsDil && matchingApp != null
      ? {
          alt: matchingApp.name,
          logoUrl: matchingApp.logoUrl,
          logoDarkUrl: matchingApp.logoUrlDark,
        }
      : null);
  const sidePanelTitle =
    serverIsDil && matchingApp != null
      ? matchingApp.name
      : toSentenceCase(item.invocation.server);
  const title = intl.formatMessage(
    {
      id: "codex.mcpTool.mcpAppIframeTitle",
      defaultMessage: "{server} {tool}",
      description:
        "Accessible title for an MCP app iframe rendered in a tool result",
    },
    { server: formatMcpServerLabel(item.invocation.server), tool: toolLabel },
  );
  const widgetDomain = htmlRenderData?.widgetDomain ?? null;

  return (
    <McpAppInlineFrame
      conversationId={conversationId}
      csp={csp}
      error={error}
      hostId={hostId}
      hostedInThreadScrollLayout={true}
      html={html}
      isLoading={isLoading}
      mcpAppId={mcpAppId}
      mcpAppScope={mcpAppScope}
      mcpServerStatuses={serverStatuses}
      prefersBorder={prefersBorder}
      sandboxOriginScope={sandboxOriginScope}
      server={item.invocation.server}
      sidePanelIcon={sidePanelIcon}
      sidePanelTitle={sidePanelTitle}
      title={title}
      toolArguments={item.invocation.arguments}
      toolResult={displayedSuccessfulToolResult}
      widgetDomain={widgetDomain}
    />
  );
}
