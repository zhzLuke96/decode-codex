// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Parametric atoms that gate inline MCP app expansion and resolve server/tool metadata.

import {
  appStoreScope,
  buildMcpAppTabId,
  createParametricAtom,
  getToolResultResourceUri,
  mcpAppManualExpansionFamily,
  mcpAppStateFamily,
  mcpAppTabManager,
  mcpServerStatusesQueryAtom,
  resolveMcpConnectorId,
} from "../../../boundaries/onboarding-commons-externals.facade";
import type { McpServerToolKey, ParametricAtomGetter } from "./types";

export const isMcpAppExpandedAtom = createParametricAtom(
  appStoreScope,
  (mcpAppId: string, { get }: ParametricAtomGetter) => {
    const appState = get(mcpAppStateFamily, mcpAppId);
    return (
      appState.isInlineExpanded ||
      appState.isFullScreen ||
      get(mcpAppManualExpansionFamily, mcpAppId) ||
      get(mcpAppTabManager.tabById$, buildMcpAppTabId(mcpAppId)) != null
    );
  },
);

export const mcpAppResourceUriAtom = createParametricAtom(
  appStoreScope,
  ({ hostId, server, tool }: McpServerToolKey, { get }: ParametricAtomGetter) =>
    getToolResultResourceUri({
      mcpServerStatuses: get(mcpServerStatusesQueryAtom, hostId).data,
      server,
      tool,
    })?.resourceUri ?? null,
);

export const mcpAppConnectorIdAtom = createParametricAtom(
  appStoreScope,
  ({ hostId, server, tool }: McpServerToolKey, { get }: ParametricAtomGetter) =>
    resolveMcpConnectorId({
      mcpServerStatuses: get(mcpServerStatusesQueryAtom, hostId).data,
      server,
      tool,
    }),
);

export const isMcpServerStatusLoadingAtom = createParametricAtom(
  appStoreScope,
  (hostId: string, { get }: ParametricAtomGetter) =>
    get(mcpServerStatusesQueryAtom, hostId).isLoading,
);
