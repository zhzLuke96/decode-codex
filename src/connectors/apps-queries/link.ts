// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import { UseQueries } from "../../utils/use-queries";
import { vscodeApiU as queryTimings } from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
const CONNECTOR_LINK_QUERY_KEY = ["apps", "link"] as const;
type ConnectorLinkResponse = {
  link?: {
    owner_profile?: {
      email?: string | null;
    } | null;
  } | null;
};
export function useConnectorOwnerEmails(
  connectorIds: readonly string[],
): Map<string, string> {
  const results = UseQueries({
    queries: connectorIds.map(connectorLinkQueryOptions),
  });
  const emailsByConnectorId = new Map<string, string>();
  results.forEach(
    (
      result: {
        data?: ConnectorLinkResponse["link"];
      },
      index,
    ) => {
      const email = result.data?.owner_profile?.email?.trim();
      if (email != null && email.length > 0) {
        emailsByConnectorId.set(connectorIds[index], email);
      }
    },
  );
  return emailsByConnectorId;
}
function connectorLinkQueryOptions(connectorId: string) {
  return {
    queryKey: [...CONNECTOR_LINK_QUERY_KEY, connectorId],
    queryFn: async () =>
      (
        (await codexRequest.safeGet("/aip/connectors/{connector_id}/link", {
          parameters: {
            path: {
              connector_id: connectorId,
            },
          },
        })) as ConnectorLinkResponse
      ).link,
    retry: false,
    staleTime: queryTimings.FIVE_MINUTES,
  };
}
