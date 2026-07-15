// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders a single MCP tool call in the conversation timeline: collapsed summary
// row, expandable body (inline MCP app frame, content blocks, or structured JSON),
// and a raw-output dialog.
import * as React from "react";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { classNames } from "../../utils/class-names";
import { getToolResultResourceUri } from "../../plugins/mcp-tool-item-content-utils/tool-metadata";
import {
  extractMcpAppRenderData,
  selectMcpAppRenderTarget,
} from "../../plugins/mcp-tool-item-content-utils/render-data";
import {
  AnimatedActivityLabel,
  AutomaticApprovalReviewIndicator,
  AutomaticApprovalReviews,
  BrowserHighlightedTabIcon,
  Callout,
  CodeBlock,
  ConnectorLogoImage,
  Dialog,
  DialogHeader,
  DialogPanel,
  DialogSection,
  GlobeFallbackIcon,
  IconButton,
  McpAppInlineFrame,
  McpAppInlineFramePortal,
  McpServerIcon,
  NodeReplIcon,
  RawOutputIcon,
  ToolActivityCard,
  ToolActivityDisclosureHeader,
  Tooltip,
  activityDisclosureTransition,
  appStoreScope,
  buildMcpToolActivityExpansionKey,
  isDilServer,
  isPlatform,
  markToolActivityTurnExpanded,
  mcpServerStatusesQueryAtom,
  mcpToolActivityExpansionFamily,
  motion,
  readScopedAtom,
  resolvePluginToolDisplay,
  resolveToolActivityAppDisplay,
  setMcpToolActivityExpansion,
  useAppStore,
  useAvailablePlugins,
  useFeatureGateExposure,
  useMcpAppId,
  useMcpAppResourceQuery,
  useMeasuredElementHeight,
  useNativeAppIcon,
  useNativeDesktopAppMetadata,
  usePlatform,
} from "../../boundaries/onboarding-commons-externals.facade";
import { getMcpToolDisplayLabel } from "./mcp-tool-display-label";
import { McpAppLoadingPlaceholder } from "./mcp-app-loading-placeholder";
import { McpToolContentBlock } from "./mcp-tool-content-block";
import { extractSingleJsonTextBlock, stringifyJson } from "./mcp-tool-json";
import type { McpMatchingApp } from "./mcp-tool-label-types";
import type { McpToolActivityItem } from "./mcp-tool-activity-types";

export interface McpToolActivityProps {
  item: McpToolActivityItem;
  conversationId: string;
  hostId: string;
  matchingApp?: McpMatchingApp | null;
  renderMcpApps?: boolean;
  shouldAutoExpandMcpApp?: boolean;
  summary?: React.ReactNode;
  toolActivityTurnKey?: string | null;
}

export function McpToolActivity({
  item,
  conversationId,
  hostId,
  matchingApp,
  renderMcpApps = true,
  shouldAutoExpandMcpApp = false,
  summary = null,
  toolActivityTurnKey,
}: McpToolActivityProps) {
  const store = useAppStore(appStoreScope);
  const intl = useIntl();
  const { platform } = usePlatform();
  const mcpAppId = useMcpAppId(item.callId);
  const expansionKey = buildMcpToolActivityExpansionKey({
    callId: item.callId,
    conversationId,
  });
  const persistedExpanded = readScopedAtom(
    mcpToolActivityExpansionFamily,
    expansionKey,
  );
  useFeatureGateExposure("2957382457");

  const rawResult = item.result?.type === "success" ? item.result.raw : null;
  const rawResultRef = React.useRef<unknown>(null);
  if (rawResult != null) rawResultRef.current = rawResult;
  const lastRawResult = rawResult ?? rawResultRef.current;

  const { elementHeightPx, elementRef } = useMeasuredElementHeight();

  const successContent =
    item.result?.type === "success" ? (item.result.content ?? null) : null;
  const errorMessage = item.result?.type === "error" ? item.result.error : null;

  const appDisplay = resolveToolActivityAppDisplay({ item, platform });
  const nativeAppReference = appDisplay?.nativeAppReference ?? null;
  const nativeAppMetadata = useNativeDesktopAppMetadata(nativeAppReference);
  const { iconSmall } = useNativeAppIcon({
    appPath: nativeAppMetadata?.appPath ?? null,
  });

  const toolLabel = getMcpToolDisplayLabel({
    completed: item.completed,
    intl,
    toolName: item.invocation.tool,
    serverName: item.invocation.server,
    matchingApp: matchingApp ?? null,
    nativeDesktopAppMetadata: nativeAppMetadata,
    platform,
    toolArguments: item.invocation.arguments,
    toolResult: item.result,
  });

  const serverIsDil = isDilServer(item.invocation.server);
  const { data: serverStatuses, isLoading } = readScopedAtom(
    mcpServerStatusesQueryAtom,
    hostId,
    {
      enabled:
        renderMcpApps &&
        rawResult != null &&
        (serverIsDil ||
          item.mcpAppResourceUri == null ||
          getToolResultResourceUri({
            mcpServerStatuses: undefined,
            server: item.invocation.server,
            tool: item.invocation.tool,
            toolResult: rawResult,
          }) != null ||
          persistedExpanded === true ||
          shouldAutoExpandMcpApp),
    },
  );

  const resolvedTarget = getToolResultResourceUri({
    mcpServerStatuses: serverStatuses,
    server: item.invocation.server,
    tool: item.invocation.tool,
    toolResult: isLoading ? null : lastRawResult,
  });
  const resourceUriFromLatest =
    getToolResultResourceUri({
      mcpServerStatuses: serverStatuses,
      server: item.invocation.server,
      tool: item.invocation.tool,
      toolResult: isLoading ? null : rawResult,
    })?.resourceUri ??
    item.mcpAppResourceUri ??
    null;

  const resolvedTargetRef = React.useRef<{ resourceUri?: string } | null>(null);
  if (resolvedTarget != null) resolvedTargetRef.current = resolvedTarget;
  const lastResolvedTarget = resolvedTarget ?? resolvedTargetRef.current;
  const resourceUri =
    lastResolvedTarget?.resourceUri ?? item.mcpAppResourceUri ?? null;

  const { availablePlugins } = useAvailablePlugins(hostId, undefined, {
    enabled:
      resourceUriFromLatest != null && item.pluginId != null && !serverIsDil,
  });
  const pluginToolDisplay = resolvePluginToolDisplay({
    mcpAppResourceUri: resourceUriFromLatest,
    pluginId: item.pluginId,
    plugins: availablePlugins,
    serverName: item.invocation.server,
  });

  const activeResourceUri =
    lastResolvedTarget?.resourceUri ??
    (lastRawResult != null && !isLoading ? item.mcpAppResourceUri : null) ??
    null;
  const shouldRenderMcpApp =
    renderMcpApps &&
    resourceUri != null &&
    (!item.completed || lastRawResult != null) &&
    isPlatform("electron");

  const [manuallyExpanded, setManuallyExpanded] = React.useState(false);
  const {
    data: resourceData,
    error: resourceError,
    isLoading: resourceLoading,
  } = useMcpAppResourceQuery({
    hostId,
    server: item.invocation.server,
    threadId: conversationId,
    uri: resourceUri,
    enabled: shouldRenderMcpApp,
  });

  const renderData = React.useMemo(
    () => extractMcpAppRenderData(resourceData),
    [resourceData],
  );
  const renderDataRef = React.useRef<unknown>(null);
  if (renderData != null) renderDataRef.current = renderData;
  const lastRenderData = renderData ?? renderDataRef.current;

  const isMcpAppLoading =
    shouldRenderMcpApp &&
    (activeResourceUri == null ||
      lastRawResult == null ||
      (lastRenderData == null && resourceLoading));

  const renderTarget = selectMcpAppRenderTarget({
    hasResourceError: resourceError != null,
    isDilEnabled: false,
    isResourceLoading: resourceLoading,
    renderData: lastRenderData,
    resourceUri: activeResourceUri,
    shouldRenderMcpApp,
  });
  const htmlRenderData =
    renderTarget.kind === "html" ? renderTarget.renderData : null;
  const isCollapsible = htmlRenderData?.isCollapsible ?? true;
  const hasRenderTarget = renderTarget.kind !== "fallback";
  const isHtmlRender = renderTarget.kind === "html";
  const autoExpandMcpApp = shouldAutoExpandMcpApp && shouldRenderMcpApp;
  const mcpAppExpanded =
    hasRenderTarget &&
    (!isCollapsible ||
      (persistedExpanded ?? (manuallyExpanded || autoExpandMcpApp)));
  const contentExpanded =
    manuallyExpanded || (persistedExpanded ?? autoExpandMcpApp);
  const [showInlineFrame, setShowInlineFrame] = React.useState(false);
  const renderInlineFrame = isHtmlRender && mcpAppExpanded && showInlineFrame;
  const isExpanded = hasRenderTarget ? mcpAppExpanded : contentExpanded;

  const { displayContent, displayStructuredContentJson } = React.useMemo(() => {
    const structuredJson =
      item.result?.type === "success" && item.result.structuredContent != null
        ? stringifyJson(item.result.structuredContent, 2)
        : null;
    if (!isExpanded)
      return {
        displayContent: successContent,
        displayStructuredContentJson: structuredJson,
      };
    const collapsedJson = extractSingleJsonTextBlock(successContent);
    return collapsedJson == null
      ? {
          displayContent: successContent,
          displayStructuredContentJson: structuredJson,
        }
      : structuredJson == null || collapsedJson === structuredJson
        ? {
            displayContent: [],
            displayStructuredContentJson: structuredJson ?? collapsedJson,
          }
        : {
            displayContent: successContent,
            displayStructuredContentJson: structuredJson,
          };
  }, [successContent, isExpanded, item.result]);

  const rawCallJson = React.useMemo(
    () =>
      stringifyJson(
        {
          callId: item.callId,
          invocation: item.invocation,
          durationMs: item.durationMs,
          result: item.result,
        },
        2,
      ),
    [item.callId, item.invocation, item.durationMs, item.result],
  );

  const rawOutputTooltip = intl.formatMessage({
    id: "codex.mcpTool.rawOutputTriggerTooltip",
    defaultMessage: "Show raw tool call output",
    description:
      "Tooltip for the button that opens the raw MCP tool output dialog",
  });
  const hasResult = item.completed || item.result != null;
  const bodyHeight = isExpanded ? elementHeightPx : 0;

  const summaryContent = summary ?? (
    <>
      {pluginToolDisplay == null && nativeAppReference != null ? (
        <ConnectorLogoImage
          alt={
            nativeAppMetadata?.displayName ??
            appDisplay?.name ??
            item.invocation.server
          }
          className="icon-xs shrink-0 scale-[1.15] object-contain"
          logoUrl={iconSmall}
          logoDarkUrl={null}
          fallback={
            <GlobeFallbackIcon className="icon-xs shrink-0 text-token-text-secondary" />
          }
        />
      ) : pluginToolDisplay == null &&
        appDisplay?.groupKey === "computer-use" ? (
        <GlobeFallbackIcon
          aria-hidden={true}
          className="icon-xs shrink-0 text-token-text-secondary"
        />
      ) : pluginToolDisplay == null && appDisplay?.logoUrl != null ? (
        <ConnectorLogoImage
          alt={appDisplay.name}
          className="icon-xs shrink-0 object-contain"
          logoUrl={appDisplay.logoUrl}
          logoDarkUrl={null}
          fallback={
            <McpServerIcon className="icon-xs shrink-0 text-token-text-secondary" />
          }
        />
      ) : pluginToolDisplay == null && appDisplay?.usesBrowserIcon === true ? (
        <BrowserHighlightedTabIcon
          aria-hidden={true}
          className="icon-xs shrink-0 object-contain text-token-text-secondary"
        />
      ) : pluginToolDisplay == null &&
        item.invocation.server === "node_repl" ? (
        <NodeReplIcon
          aria-hidden={true}
          className="icon-xs shrink-0 object-contain text-token-text-secondary"
        />
      ) : (
        <ConnectorLogoImage
          alt={
            pluginToolDisplay?.alt ??
            matchingApp?.name ??
            item.invocation.server
          }
          appInfo={pluginToolDisplay == null ? matchingApp : null}
          className="icon-xs shrink-0 object-contain text-token-text-secondary"
          logoUrl={pluginToolDisplay?.logoUrl}
          fallback={
            <McpServerIcon className="icon-xs shrink-0 text-token-text-secondary" />
          }
        />
      )}
      <AnimatedActivityLabel
        active={!item.completed}
        className={classNames(
          "text-token-conversation-summary-leading group-hover/activity-header:text-token-foreground",
          "text-size-chat min-w-0 shrink truncate",
        )}
      >
        <FormattedMessage
          id="codex.mcpTool.collapsedLabel.toolOnly"
          defaultMessage="{tool}"
          description="Short MCP tool label shown in the collapsed summary row"
          values={{ tool: toolLabel }}
        />
      </AnimatedActivityLabel>
    </>
  );

  const headerRow = (
    <ToolActivityDisclosureHeader
      accessory={
        item.automaticApprovalReviews == null ? null : (
          <AutomaticApprovalReviewIndicator />
        )
      }
      className={
        isHtmlRender
          ? mcpAppExpanded
            ? "w-full px-4 pt-3 pb-2"
            : "w-full px-4 py-3"
          : undefined
      }
      disclosure={
        hasResult
          ? {
              expanded: isExpanded,
              onToggle: () => {
                if (hasRenderTarget) {
                  const next = !mcpAppExpanded;
                  setShowInlineFrame(next && isHtmlRender);
                  setMcpToolActivityExpansion(store, expansionKey, next);
                  setManuallyExpanded(next);
                  return;
                }
                const next = !contentExpanded;
                if (next && toolActivityTurnKey != null)
                  markToolActivityTurnExpanded(store, toolActivityTurnKey);
                if (!next && (persistedExpanded === true || autoExpandMcpApp))
                  setMcpToolActivityExpansion(store, expansionKey, false);
                setManuallyExpanded(next);
              },
            }
          : undefined
      }
    >
      {summaryContent}
    </ToolActivityDisclosureHeader>
  );

  const bodyContent = (
    <motion.div
      initial={false}
      animate={{ height: bodyHeight, opacity: isExpanded ? 1 : 0 }}
      transition={activityDisclosureTransition}
      className={classNames(
        isExpanded ? "overflow-visible" : "overflow-hidden",
      )}
      style={{ pointerEvents: isExpanded ? "auto" : "none" }}
      onAnimationComplete={() => {
        if (mcpAppExpanded) setShowInlineFrame(false);
      }}
    >
      <div
        ref={isExpanded ? elementRef : null}
        className={classNames(
          "flex flex-col gap-0.5",
          !isHtmlRender && "pt-1",
          shouldRenderMcpApp && "relative",
          !isCollapsible && "p-4",
        )}
      >
        {isExpanded ? (
          <>
            {item.automaticApprovalReviews == null ? null : (
              <AutomaticApprovalReviews
                className={isHtmlRender ? "px-4" : undefined}
                isExpandable={!isHtmlRender}
                reviews={item.automaticApprovalReviews}
              />
            )}
            {hasRenderTarget ? (
              renderInlineFrame ? (
                <McpAppLoadingPlaceholder
                  heightHint={htmlRenderData?.heightHint ?? null}
                  intl={intl}
                  minFrameHeight={htmlRenderData?.minFrameHeight ?? null}
                />
              ) : (
                <McpAppInlineFrame
                  error={
                    activeResourceUri != null && lastRenderData == null
                      ? resourceError
                      : null
                  }
                  heightHint={htmlRenderData?.heightHint ?? null}
                  html={
                    activeResourceUri == null
                      ? null
                      : (htmlRenderData?.html ?? null)
                  }
                  inlineSurface={isHtmlRender ? "card" : "standalone"}
                  isLoading={isMcpAppLoading}
                  mcpAppId={mcpAppId}
                  minFrameHeight={htmlRenderData?.minFrameHeight ?? null}
                />
              )
            ) : displayContent && displayContent.length > 0 ? (
              <div
                className={classNames(
                  "[&_*]:text-token-non-assistant-body-descendant",
                  "flex flex-col gap-0.5",
                )}
              >
                {displayContent.map((block, index) => (
                  <McpToolContentBlock key={index} block={block} />
                ))}
              </div>
            ) : errorMessage ? (
              <Callout className="w-full" fullWidth={true} level="danger">
                <div className="text-size-chat max-h-48 overflow-auto whitespace-pre-wrap">
                  {errorMessage}
                </div>
              </Callout>
            ) : displayStructuredContentJson ? null : (
              <p className="text-token-description-foreground/80">
                <FormattedMessage
                  id="codex.mcpTool.noResult"
                  defaultMessage="Tool returned no content"
                  description="Message shown when an MCP tool call produced no content"
                />
              </p>
            )}
            {!isMcpAppLoading &&
              isExpanded &&
              !renderInlineFrame &&
              (!hasRenderTarget || lastResolvedTarget == null) &&
              displayStructuredContentJson && (
                <CodeBlock
                  codeContainerClassName="max-h-48 overflow-auto"
                  language="json"
                  content={displayStructuredContentJson}
                  showStickyRightContent={false}
                />
              )}
            {!isMcpAppLoading && isExpanded && !renderInlineFrame && (
              <Dialog
                triggerContent={
                  <Tooltip
                    side="top"
                    align="center"
                    tooltipContent={rawOutputTooltip}
                  >
                    <div
                      className={classNames(
                        "inline-flex w-fit",
                        shouldRenderMcpApp && "absolute right-1 bottom-2 z-50",
                      )}
                    >
                      <IconButton
                        className="cursor-interaction opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus-visible:opacity-100"
                        aria-label={rawOutputTooltip}
                        color="ghost"
                        size="icon"
                      >
                        <RawOutputIcon className="icon-xxs" />
                      </IconButton>
                    </div>
                  </Tooltip>
                }
              >
                <DialogPanel>
                  <DialogSection>
                    <DialogHeader
                      title={
                        <FormattedMessage
                          id="codex.mcpTool.rawOutputHeading"
                          defaultMessage="Raw {server}.{tool} tool call output"
                          description="Heading shown within the raw output dialog"
                          values={{
                            server: item.invocation.server,
                            tool: item.invocation.tool,
                          }}
                        />
                      }
                    />
                  </DialogSection>
                  <DialogSection>
                    <CodeBlock
                      codeContainerClassName="max-h-128 overflow-auto"
                      language="json"
                      content={rawCallJson}
                      showStickyRightContent={true}
                    />
                  </DialogSection>
                </DialogPanel>
              </Dialog>
            )}
          </>
        ) : null}
      </div>
    </motion.div>
  );

  return (
    <>
      <McpAppInlineFramePortal
        mcpAppId={mcpAppId}
        isInlineExpanded={
          shouldRenderMcpApp &&
          mcpAppExpanded &&
          !renderInlineFrame &&
          activeResourceUri != null
        }
      />
      <ToolActivityCard
        className={classNames(
          "group",
          isHtmlRender &&
            htmlRenderData?.prefersBorder &&
            "overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary",
        )}
        data-mcp-app-card={isHtmlRender ? true : undefined}
        header={isCollapsible ? headerRow : null}
        body={bodyContent}
      />
    </>
  );
}
