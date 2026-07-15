// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import { vscodeApiV as useQuery } from "../../boundaries/vscode-api";
import { selectConnectorActions } from "./actions";
import { connectorQueryOptions } from "./connection-flow";
export { formatVisibilityLabel, selectConnectorActions } from "./actions";
export {
  connectorQueryOptions,
  continueAppReauthenticationFlow,
  startAppConnectionFlow,
} from "./connection-flow";
export { getAppInstallUrlWithSettingsHash } from "./connection-urls";
export {
  formatConnectedToast,
  formatConnectFailedToast,
  formatMissingInstallUrlToast,
  formatOAuthStartedToast,
} from "./toasts";
export {
  parseConnectorLogoUrl,
  resolveAppLogoUrls,
  useAppsWithResolvedLogos,
  useConnectorLogoDataUrl,
} from "./logo";
export {
  appsListQueryKey,
  appsListQueryOptions,
  filterAccessibleEnabledApps,
  hardRefreshAppsList,
  useAccessibleApps,
  useAppsList,
  useIsAppsFeatureEnabled,
  useResolvedAccessibleApps,
} from "./list";
export { useConnectorOwnerEmails } from "./link";
export { startCaseSearchText, upperFirstSearchText } from "./search-text";
export type {
  AppConnectApp,
  AppConnectionResult,
  ConnectorAction,
  ConnectorDetails,
  ConnectorLogoRequest,
  DisplayConnectorAction,
} from "./types";
export function useConnectorActions(connectorId: string | null | undefined) {
  return useQuery({
    ...connectorQueryOptions(connectorId ?? "", {
      includeActions: true,
    }),
    enabled: connectorId != null,
    select: selectConnectorActions,
  });
}
