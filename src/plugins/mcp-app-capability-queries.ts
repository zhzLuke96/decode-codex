// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Parametric query atoms that fetch the resource / tool-result backing an MCP
// capability view, keyed by host, server, thread and tool identity.

import { z } from "zod";
import {
  appStoreScope,
  callMcpCapabilityTool,
  callMcpToolRequestSchema,
  createParametricQueryAtom,
  readMcpCapabilityResource,
  readMcpResourceRequestSchema,
} from "../boundaries/onboarding-commons-externals.facade";

export interface McpCapabilityView {
  hostId: string;
  resourceUri: string;
  server: string;
  tool: { name: string };
}

export function buildResourceCacheKey({
  threadId,
  view,
}: {
  threadId?: string;
  view: McpCapabilityView;
}): string {
  return JSON.stringify([
    view.hostId,
    view.resourceUri,
    view.server,
    threadId,
    view.tool.name,
  ]);
}

export function buildToolResultCacheKey({
  threadId,
  toolArguments,
  view,
}: {
  threadId?: string;
  toolArguments: unknown;
  view: McpCapabilityView;
}): string {
  return JSON.stringify([
    view.hostId,
    view.resourceUri,
    view.server,
    threadId,
    view.tool.name,
    toolArguments,
  ]);
}

export const mcpCapabilityViewResourceQueryAtom = createParametricQueryAtom(
  appStoreScope,
  (
    { threadId, view }: { threadId?: string; view: McpCapabilityView },
    { scope }: { scope: unknown },
  ) => ({
    queryKey: [
      "mcp-capability-view-resource",
      view.hostId,
      view.resourceUri,
      view.server,
      threadId,
      view.tool.name,
    ],
    queryFn: () =>
      readMcpCapabilityResource(
        scope,
        view.hostId,
        view.server,
        view.resourceUri,
        threadId,
      ),
    staleTime: 0,
  }),
  { key: buildResourceCacheKey },
);

export const mcpCapabilityViewToolResultQueryAtom = createParametricQueryAtom(
  appStoreScope,
  (
    {
      toolArguments,
      threadId,
      view,
    }: { toolArguments: unknown; threadId?: string; view: McpCapabilityView },
    { scope }: { scope: unknown },
  ) => ({
    queryKey: [
      "mcp-capability-view-tool-result",
      view.hostId,
      view.server,
      threadId,
      view.tool.name,
      toolArguments,
    ],
    queryFn: async () =>
      callMcpCapabilityTool(
        scope,
        view.hostId,
        view.server,
        view.tool.name,
        toolArguments,
        threadId,
      ),
    staleTime: 0,
  }),
  { key: buildToolResultCacheKey },
);

const jsonValueSchema = z.any();

export const jsonRecordSchema = z.record(z.string(), jsonValueSchema);

export const readMcpResourceParamsSchema =
  readMcpResourceRequestSchema.shape.params;

export const callMcpToolParamsSchema = callMcpToolRequestSchema.shape.params;
