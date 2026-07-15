// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Background-agent metadata helpers used by local conversation headers.
import { getSubagentSourceMetadata as getSubagentSourceMetadataValue } from "../subagent-source-metadata-runtime";
import { backgroundAgentSourceSignal } from "../../runtime/background-agent-state-runtime";

export { backgroundAgentSourceSignal };
export const backgroundAgentSnapshotSignal = backgroundAgentSourceSignal;

export type SubagentSourceMetadata = {
  agentNickname?: string | null;
};

export function getFallbackBackgroundAgentHandle(
  conversationId: string,
): string {
  return `@agent-${conversationId.slice(0, 8)}`;
}

export function getSubagentSourceMetadata(
  snapshot: unknown,
): SubagentSourceMetadata | null {
  return getSubagentSourceMetadataValue(
    snapshot,
  ) as SubagentSourceMetadata | null;
}
