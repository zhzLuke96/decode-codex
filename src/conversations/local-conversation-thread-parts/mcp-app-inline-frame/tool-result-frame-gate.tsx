// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Gates an MCP app tool result frame by its app expansion state.

import {
  useMcpAppId,
  useScopedAtomValue,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { isMcpAppExpandedAtom } from "./atoms";
import { McpAppToolResultFrameResolver } from "./tool-result-frame-resolver";
import type { McpMatchingApp, McpToolCallItem } from "./types";

export interface McpAppToolResultFrameGateProps {
  conversationId: string;
  hostId: string;
  item: McpToolCallItem;
  matchingApp: McpMatchingApp | null;
}

export function McpAppToolResultFrameGate({
  conversationId,
  hostId,
  item,
  matchingApp,
}: McpAppToolResultFrameGateProps) {
  const mcpAppId = useMcpAppId(item.callId);
  if (!useScopedAtomValue(isMcpAppExpandedAtom, mcpAppId)) return null;
  return (
    <McpAppToolResultFrameResolver
      conversationId={conversationId}
      hostId={hostId}
      item={item}
      matchingApp={matchingApp}
      mcpAppId={mcpAppId}
    />
  );
}
