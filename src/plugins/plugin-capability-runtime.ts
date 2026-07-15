// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Marketplace and bundled app constants used by plugin capability aggregation.
import { getToolConnectorId } from "./mcp-tool-item-content-utils";
import {
  BUNDLED_MARKETPLACE_NAME,
  CURATED_MARKETPLACE_NAME,
  CURATED_REMOTE_MARKETPLACE_NAME,
} from "./use-plugins/marketplace-constants";

export const bundledMarketplaceName = BUNDLED_MARKETPLACE_NAME;
export const curatedMarketplaceName = CURATED_MARKETPLACE_NAME;
export const curatedRemoteMarketplaceName = CURATED_REMOTE_MARKETPLACE_NAME;

export const firstPartyBundledAppNameA = "browser";
export const firstPartyBundledAppNameB = "chrome-internal";
export const firstPartyBundledAppNameC = "computer-use";
export const firstPartyBundledAppNameD = "latex";
export const firstPartyBundledAppNameE = "record-and-replay";
export const firstPartyBundledAppNameF = "sites";
export const firstPartyBundledAppNameG = "visualize";

export interface CatalogAppIdForMcpToolOptions {
  mcpServerStatuses?: unknown;
  server: string;
  tool: string;
}

export function resolveCatalogAppIdForMcpTool({
  mcpServerStatuses,
  server,
  tool,
}: CatalogAppIdForMcpToolOptions): string | null {
  return (
    getToolConnectorId({
      mcpServerStatuses: mcpServerStatuses as never,
      server,
      tool,
    }) ?? null
  );
}
