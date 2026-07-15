// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders inline MCP app frame gates for matching MCP tool-call timeline items.

import { findMatchingMcpApp } from "../../../boundaries/onboarding-commons-externals.facade";
import { isMcpToolCallItem } from "./helpers";
import { McpAppToolResultFrameGate } from "./tool-result-frame-gate";
import type { ConversationTimelineItem, McpMatchingApp } from "./types";

export interface McpAppToolResultFramesProps {
  conversationId: string;
  hostId: string;
  items: readonly ConversationTimelineItem[];
  resolvedApps: McpMatchingApp[];
}

export function McpAppToolResultFrames({
  conversationId,
  hostId,
  items,
  resolvedApps,
}: McpAppToolResultFramesProps) {
  return (
    <>
      {items.map((item) =>
        isMcpToolCallItem(item) ? (
          <McpAppToolResultFrameGate
            key={item.callId}
            conversationId={conversationId}
            hostId={hostId}
            item={item}
            matchingApp={findMatchingMcpApp({
              apps: resolvedApps,
              functionName: item.functionName,
              serverName: item.invocation.server,
              toolName: item.invocation.tool,
            })}
          />
        ) : null,
      )}
    </>
  );
}
