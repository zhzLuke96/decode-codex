// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Renders an OpenAI MCP capability view as a full-surface MCP app, backed by the
// capability resource/tool query atoms and a scoped override proxy for sandbox
// requests.
import * as React from "react";
import { getRouteThreadId } from "../app-shell/app-view-route-helpers";
import {
  appStoreScope,
  buildMcpToolList,
  callMcpCapabilityTool,
  findMcpTool,
  readMcpCapabilityResource,
  recordMcpResourceRead,
  resolveMcpConnectorId,
  resolveMcpSandboxOriginScope,
  routeAtom,
  stableHashSegment,
  useAppStore,
  useFeatureGateExposure,
  useScopedAtomValue,
  useStableEventCallback,
  useStore,
} from "../boundaries/onboarding-commons-externals.facade";
import { toConversationId } from "../conversations/local-conversation-thread-parts/conversation-title-runtime";
import {
  mcpCapabilityViewResourceQueryAtom,
  mcpCapabilityViewToolResultQueryAtom,
  callMcpToolParamsSchema,
  jsonRecordSchema,
  readMcpResourceParamsSchema,
} from "../plugins/mcp-app-capability-queries";
import {
  ActiveMcpAppFrame,
  McpAppExpandedSurfaceEffect,
  McpAppInlineFrame,
  McpAppInlineFramePortal,
} from "../plugins/mcp-app-frame";
import { proxyRequestSchema } from "../plugins/mcp-app-schemas";
import {
  extractMcpAppRenderData,
  selectMcpAppRenderTarget,
} from "../plugins/mcp-tool-item-content-utils/render-data";
import { classNames } from "../utils/class-names";

const EMPTY_TOOL_ARGUMENTS: Record<string, never> = {};

export interface McpCapabilityViewModel {
  hostId: string;
  resourceUri: string;
  server: string;
  serverTools?: unknown;
  title: string;
  tool: { name: string };
}

export interface OpenAiMcpCapabilityViewProps {
  className?: string;
  instanceId?: string | null;
  readHostResource?: (params: {
    uri: string;
    [key: string]: unknown;
  }) => Promise<unknown> | unknown;
  toolArguments?: unknown;
  view: McpCapabilityViewModel;
}

export function OpenAiMcpCapabilityView({
  className,
  instanceId,
  readHostResource,
  toolArguments = EMPTY_TOOL_ARGUMENTS,
  view,
}: OpenAiMcpCapabilityViewProps) {
  const appStore = useAppStore(appStoreScope);
  const routeStore = useStore(routeAtom);
  const route = routeStore.value;
  const isThreadRoute =
    route.routeKind === "local-thread" || route.routeKind === "remote-thread";
  const threadId = isThreadRoute ? getRouteThreadId(route) : null;
  const queryThreadId = threadId ?? undefined;

  const {
    data: resourceData,
    error: resourceError,
    isLoading: resourceLoading,
  } = useScopedAtomValue(mcpCapabilityViewResourceQueryAtom, {
    threadId: queryThreadId,
    view,
  });
  const {
    data: toolResult,
    error: toolError,
    isLoading: toolLoading,
  } = useScopedAtomValue(mcpCapabilityViewToolResultQueryAtom, {
    threadId: queryThreadId,
    toolArguments,
    view,
  });

  const renderData = extractMcpAppRenderData(resourceData);
  useFeatureGateExposure("2957382457");
  const renderTarget = selectMcpAppRenderTarget({
    isDilEnabled: false,
    renderData,
    resourceUri: view.resourceUri,
    shouldRenderMcpApp: true,
  });
  const htmlRenderData =
    renderTarget.kind === "html" ? renderTarget.renderData : null;

  const connectorId = React.useMemo(
    () => resolveMcpConnectorId({ server: view.server, tool: view.tool }),
    [view.server, view.tool],
  );

  const overrideMcpRequest = useStableEventCallback(
    async (request: unknown) => {
      const parsedRequest = proxyRequestSchema.parse(request);
      switch (parsedRequest.method) {
        case "tools/call": {
          const params = callMcpToolParamsSchema.parse(parsedRequest.params);
          const tool = findMcpTool({
            connectorId,
            server: view.server,
            toolName: params.name,
            tools: view.serverTools,
          });
          return callMcpCapabilityTool(
            appStore,
            view.hostId,
            view.server,
            tool.name,
            jsonRecordSchema.parse(params.arguments ?? {}),
            queryThreadId,
          );
        }
        case "resources/read": {
          const params = readMcpResourceParamsSchema.parse(
            parsedRequest.params,
          );
          const hostResource = await readHostResource?.(params);
          if (hostResource != null) {
            return {
              contents: [
                {
                  ...(hostResource as Record<string, unknown>),
                  uri: params.uri,
                },
              ],
            };
          }

          recordMcpResourceRead({
            mcpAppScope: { originResourceUri: view.resourceUri },
            server: view.server,
            uri: params.uri,
          });
          return readMcpCapabilityResource(
            appStore,
            view.hostId,
            view.server,
            params.uri,
            queryThreadId,
          );
        }
        case "tools/list":
          return {
            tools: buildMcpToolList({
              connectorId,
              server: view.server,
              tools: view.serverTools,
            }),
          };
        case "resources/list":
          return { resources: [] };
        case "resources/templates/list":
          return { resourceTemplates: [] };
        case "prompts/list":
          return { prompts: [] };
        default:
          throw new Error(
            `Unsupported OpenAI MCP capability request: ${parsedRequest.method}`,
          );
      }
    },
  );

  const mcpAppId = React.useMemo(() => {
    const instanceSegments = instanceId == null ? [] : [instanceId];
    return stableHashSegment(
      [
        "openai-mcp-capability",
        view.hostId,
        view.server,
        view.tool.name,
        ...instanceSegments,
      ].join(":"),
    );
  }, [instanceId, view.hostId, view.server, view.tool.name]);

  const conversationId = React.useMemo(
    () => toConversationId(threadId ?? mcpAppId),
    [mcpAppId, threadId],
  );
  const sandboxOriginScope = React.useMemo(
    () =>
      resolveMcpSandboxOriginScope({
        connectorId,
        instanceFallbackId: mcpAppId,
        server: view.server,
      }),
    [connectorId, mcpAppId, view.server],
  );
  const mcpAppScope = React.useMemo(
    () => ({
      originResourceUri: view.resourceUri,
      originTool: view.tool.name,
    }),
    [view.resourceUri, view.tool.name],
  );

  const error = (resourceError ?? toolError ?? null) as Error | null;
  const html = htmlRenderData?.html ?? null;
  const isLoading = resourceLoading || toolLoading;

  return (
    <div
      data-mcp-app-portal-target="true"
      className={classNames("h-full min-h-0", className)}
    >
      <McpAppInlineFramePortal isInlineExpanded={true} mcpAppId={mcpAppId} />
      <McpAppExpandedSurfaceEffect
        conversationId={conversationId}
        csp={htmlRenderData?.csp ?? null}
        error={error}
        fullSurface={true}
        hostId={view.hostId}
        hostedInThreadScrollLayout={false}
        html={html}
        isLoading={isLoading}
        mcpAppId={mcpAppId}
        mcpAppScope={mcpAppScope}
        mcpServerStatuses={undefined}
        prefersBorder={htmlRenderData?.prefersBorder ?? false}
        overrideMcpRequest={overrideMcpRequest}
        sandboxOriginScope={sandboxOriginScope}
        server={view.server}
        sidePanelIcon={null}
        sidePanelTitle={view.title}
        title={view.title}
        toolArguments={toolArguments}
        toolResult={toolResult ?? null}
        widgetDomain={htmlRenderData?.widgetDomain ?? null}
      />
      <McpAppInlineFrame
        error={error}
        fullSurface={true}
        heightHint={htmlRenderData?.heightHint ?? null}
        html={html}
        isLoading={isLoading}
        mcpAppId={mcpAppId}
        minFrameHeight={htmlRenderData?.minFrameHeight ?? null}
      />
      {isThreadRoute ? null : <ActiveMcpAppFrame mcpAppId={mcpAppId} />}
    </div>
  );
}
