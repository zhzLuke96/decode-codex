// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Conversational-onboarding helpers for matching a connector app and checking
// whether it has an established account link.

import { vscodeApiU as queryTimings } from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import {
  buildAmbientSuggestionAppIndex,
  findAmbientSuggestionApps,
  type AmbientSuggestionAppIndex,
} from "../ambient-suggestion-apps";
import type { AppConnectApp } from "./types";

export function findConnectorAppByIdentifier(
  apps: readonly AppConnectApp[],
  identifier: string,
): AppConnectApp | null {
  const index: AmbientSuggestionAppIndex = buildAmbientSuggestionAppIndex(apps);
  return findAmbientSuggestionApps(index, [identifier])[0] ?? null;
}

export function appConnectionLinkQueryOptions(connectorId: string) {
  return {
    queryKey: ["conversational-onboarding", "app-connection", connectorId],
    queryFn: () => isConnectorLinked(connectorId),
    refetchOnMount: "always" as const,
    retry: false,
    staleTime: queryTimings.FIVE_MINUTES,
  };
}

export function initConversationalOnboardingAppConnectionQueryChunk(): void {
  void findConnectorAppByIdentifier;
  void appConnectionLinkQueryOptions;
}

async function isConnectorLinked(connectorId: string): Promise<boolean> {
  const response = await codexRequest.safeGet(
    "/aip/connectors/{connector_id}/link",
    {
      parameters: {
        path: {
          connector_id: connectorId,
        },
      },
    },
  );
  return (response as { link?: unknown }).link != null;
}
