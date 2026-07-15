// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// MCP app resource/tool schemas, host requests and resource query hook.

import * as React from "react";
import { z } from "zod";
import { appScopeO as readAppScopeStore } from "../boundaries/app-scope";
import { sendHostRequest } from "../runtime/host-request-runtime";
import { useQuery } from "../runtime/query-client/react-query-hooks";
import { stableHashSegment } from "./mcp-app-sandbox-runtime";

type McpAppResourceQueryOptions = {
  enabled?: boolean;
  hostId: string;
  server: string;
  threadId?: string | null;
  uri?: string | null;
};

export const readMcpResourceRequestSchema = z
  .object({
    method: z.literal("resources/read").optional(),
    params: z.object({ uri: z.string().min(1) }).passthrough(),
  })
  .strip();

export const callMcpToolRequestSchema = z
  .object({
    method: z.literal("tools/call").optional(),
    params: z
      .object({
        name: z.string().min(1),
        arguments: z.record(z.string(), z.unknown()).optional(),
        _meta: z.record(z.string(), z.unknown()).optional(),
      })
      .passthrough(),
  })
  .strip();

export async function readMcpCapabilityResource(
  _scope: unknown,
  hostId: string,
  server: string,
  uri: string,
  threadId?: string | null,
): Promise<unknown> {
  try {
    return await sendHostRequest("read-mcp-resource", {
      params: {
        hostId,
        server,
        threadId: threadId ?? undefined,
        uri,
      },
    });
  } catch (error) {
    if (threadId == null) throw error;
    return sendHostRequest("read-mcp-resource", {
      params: { hostId, server, uri },
    });
  }
}

export async function callMcpCapabilityTool(
  _scope: unknown,
  hostId: string,
  server: string,
  tool: string,
  toolArguments: unknown,
  threadId?: string | null,
): Promise<unknown> {
  return sendHostRequest("call-mcp-tool", {
    params: {
      arguments: isPlainRecord(toolArguments) ? toolArguments : {},
      hostId,
      server,
      threadId: threadId ?? undefined,
      tool,
    },
  });
}

export function recordMcpResourceRead(_event: {
  mcpAppScope?: unknown;
  server: string;
  uri: string;
}): void {}

export function useMcpAppId(callId: string): string {
  return React.useMemo(() => `mcp-app-${stableHashSegment(callId)}`, [callId]);
}

export function useMcpAppResourceQuery({
  enabled = true,
  hostId,
  server,
  threadId,
  uri,
}: McpAppResourceQueryOptions) {
  return useQuery({
    enabled: enabled && uri != null,
    queryKey: [
      "mcp-app-resource",
      hostId,
      server,
      threadId ?? null,
      uri ?? null,
    ],
    queryFn: () =>
      uri == null
        ? Promise.resolve(null)
        : readMcpCapabilityResource(
            readAppScopeStore(),
            hostId,
            server,
            uri,
            threadId,
          ),
  });
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}
