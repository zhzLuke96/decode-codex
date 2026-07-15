// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public barrel for inline MCP app frame state and render components.

export {
  isMcpAppExpandedAtom,
  isMcpServerStatusLoadingAtom,
  mcpAppConnectorIdAtom,
  mcpAppResourceUriAtom,
} from "./atoms";
export { createMcpAppInstanceId, formatMcpServerLabel } from "./helpers";
export { McpAppInlineFrameContainer } from "./inline-frame-container";
export type { McpAppInlineFrameContainerProps } from "./inline-frame-container";
export { McpAppToolResultFrameGate } from "./tool-result-frame-gate";
export type { McpAppToolResultFrameGateProps } from "./tool-result-frame-gate";
export { McpAppToolResultFrameResolver } from "./tool-result-frame-resolver";
export type { McpAppToolResultFrameResolverProps } from "./tool-result-frame-resolver";
export { McpAppToolResultFrames } from "./tool-result-frames";
export type { McpAppToolResultFramesProps } from "./tool-result-frames";
export type { McpMatchingApp, McpToolCallItem } from "./types";
